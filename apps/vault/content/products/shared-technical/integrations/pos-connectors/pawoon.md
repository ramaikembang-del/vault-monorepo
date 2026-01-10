# Pawoon POS Integration

**Last Updated:** 2025-12-26
**API Documentation:** https://docs.pawoon.com/api
**Authentication:** OAuth 2.0
**Rate Limit:** 100 requests/minute
**Market Share:** #1 cloud POS in Indonesia (~40% F&B market)
**Owner:** Integration Team

---

## Overview

Complete integration guide for connecting Pawoon POS system to PWBI FnB Growth products (R2a/E1). Pawoon is the leading cloud-based POS in Indonesia with strong F&B penetration.

**Integration Capabilities:**
- Real-time transaction sync via webhooks
- Historical transaction import (up to 12 months)
- Menu/inventory sync (Phase 2)
- Customer data sync (Phase 2)

---

## Connection Setup (OAuth 2.0)

### Step 1: User Authorization

```python
def initiate_pawoon_oauth(user_id):
 """
 Initiate OAuth 2.0 authorization flow for Pawoon
 """
 # OAuth configuration
 client_id = os.getenv('PAWOON_CLIENT_ID')
 redirect_uri = 'https://api.pwbi.com/integrations/pawoon/callback'

 # Generate state token for CSRF protection
 state_token = secrets.token_urlsafe(32)
 redis_client.setex(f"oauth_state:{state_token}", 600, user_id)

 # Build authorization URL
 auth_url = (
 f"https://auth.pawoon.com/oauth/authorize?"
 f"client_id={client_id}&"
 f"redirect_uri={urllib.parse.quote(redirect_uri)}&"
 f"response_type=code&"
 f"scope=read_transactions,read_inventory&"
 f"state={state_token}"
 )

 return {
 'authorization_url': auth_url,
 'state': state_token
 }
```

### Step 2: Handle OAuth Callback

```python
@app.route('/integrations/pawoon/callback')
def pawoon_oauth_callback():
 """
 Handle OAuth callback from Pawoon after user authorizes
 """
 # Extract code and state from query params
 code = request.args.get('code')
 state = request.args.get('state')

 # Validate state token
 user_id = redis_client.get(f"oauth_state:{state}")
 if not user_id:
 return {'error': 'Invalid state token'}, 400

 # Exchange authorization code for access token
 token_response = requests.post(
 'https://auth.pawoon.com/oauth/token',
 data={
 'grant_type': 'authorization_code',
 'code': code,
 'client_id': os.getenv('PAWOON_CLIENT_ID'),
 'client_secret': os.getenv('PAWOON_CLIENT_SECRET'),
 'redirect_uri': 'https://api.pwbi.com/integrations/pawoon/callback'
 }
 )

 if token_response.status_code != 200:
 return {'error': 'Failed to exchange code for token'}, 400

 token_data = token_response.json()

 # Store access token in database (encrypted)
 db.execute("""
 INSERT INTO integrations (user_id, source_system, access_token, refresh_token, expires_at)
 VALUES (?, 'pawoon', ?, ?, ?)
 ON CONFLICT (user_id, source_system) DO UPDATE
 SET access_token = EXCLUDED.access_token,
 refresh_token = EXCLUDED.refresh_token,
 expires_at = EXCLUDED.expires_at
 """, user_id,
 encrypt(token_data['access_token']),
 encrypt(token_data.get('refresh_token')),
 datetime.utcnow() + timedelta(seconds=token_data['expires_in'])
 )

 # Trigger initial sync
 sync_pawoon_transactions_async(user_id)

 return redirect('https://app.pwbi.com/settings/integrations?status=success')
```

---

## Transaction Sync Implementation

### Real-Time Sync (Webhook)

**Pawoon Webhook Configuration:**

```python
def configure_pawoon_webhook(user_id, access_token):
 """
 Register webhook URL with Pawoon for transaction events
 """
 response = requests.post(
 'https://api.pawoon.com/v1/webhooks',
 headers={'Authorization': f'Bearer {access_token}'},
 json={
 'url': f'https://api.pwbi.com/webhooks/pawoon/{user_id}',
 'events': ['transaction.created', 'transaction.updated', 'transaction.voided'],
 'secret': generate_webhook_secret(user_id)
 }
 )

 if response.status_code == 201:
 webhook_id = response.json()['webhook_id']
 # Store webhook ID for later management
 db.execute("""
 UPDATE integrations
 SET webhook_id = ?, webhook_active = 1
 WHERE user_id = ? AND source_system = 'pawoon'
 """, webhook_id, user_id)

 return {'success': True, 'webhook_id': webhook_id}
 else:
 return {'success': False, 'error': response.json()}
```

**Webhook Receiver:**

```python
@app.route('/webhooks/pawoon/<user_id>', methods=['POST'])
def receive_pawoon_webhook(user_id):
 """
 Receive transaction webhook from Pawoon
 """
 # Validate HMAC signature
 signature = request.headers.get('X-Pawoon-Signature')
 webhook_secret = get_webhook_secret(user_id, 'pawoon')

 expected_signature = hmac.new(
 webhook_secret.encode(),
 request.data,
 hashlib.sha256
 ).hexdigest()

 if not hmac.compare_digest(signature, expected_signature):
 logger.warning(f"Invalid webhook signature from Pawoon for user {user_id}")
 return {'error': 'Invalid signature'}, 401

 # Parse webhook payload
 payload = request.json
 event_type = payload['event']
 transaction_data = payload['data']

 # Map Pawoon transaction to unified format
 try:
 unified_txn = map_pawoon_transaction(transaction_data)

 # Store transaction
 if event_type == 'transaction.created':
 create_transaction(user_id, unified_txn)
 elif event_type == 'transaction.updated':
 update_transaction(user_id, unified_txn)
 elif event_type == 'transaction.voided':
 void_transaction(user_id, unified_txn['external_id'])

 return {'success': True}, 200

 except Exception as e:
 logger.error(f"Failed to process Pawoon webhook: {str(e)}")
 return {'error': str(e)}, 500
```

### Historical Sync (API Polling)

```python
def sync_pawoon_transactions(user_id, from_date=None, to_date=None):
 """
 Fetch historical transactions from Pawoon API

 Args:
 user_id: User's ID
 from_date: Start date (default: 30 days ago)
 to_date: End date (default: today)
 """
 # Get access token
 integration = db.execute("""
 SELECT access_token, refresh_token, expires_at
 FROM integrations
 WHERE user_id = ? AND source_system = 'pawoon'
 """, user_id)

 if not integration:
 raise ValueError('Pawoon integration not connected')

 # Refresh token if expired
 if integration['expires_at'] < datetime.utcnow():
 access_token = refresh_pawoon_token(integration['refresh_token'])
 else:
 access_token = decrypt(integration['access_token'])

 # Set date range
 if not from_date:
 from_date = datetime.utcnow() - timedelta(days=30)
 if not to_date:
 to_date = datetime.utcnow()

 # Fetch transactions (paginated)
 page = 1
 total_synced = 0

 while True:
 response = requests.get(
 'https://api.pawoon.com/v1/transactions',
 headers={'Authorization': f'Bearer {access_token}'},
 params={
 'from_date': from_date.isoformat(),
 'to_date': to_date.isoformat(),
 'page': page,
 'per_page': 100
 },
 timeout=30
 )

 if response.status_code != 200:
 raise Exception(f'Pawoon API error: {response.status_code}')

 data = response.json()
 transactions = data.get('transactions', [])

 if not transactions:
 break # No more transactions

 # Process each transaction
 for txn in transactions:
 unified_txn = map_pawoon_transaction(txn)
 create_transaction(user_id, unified_txn, upsert=True)
 total_synced += 1

 # Check if there are more pages
 if page >= data.get('total_pages', 1):
 break

 page += 1

 logger.info(f"Pawoon sync complete for user {user_id}: {total_synced} transactions")
 return {'success': True, 'transactions_synced': total_synced}
```

---

## Data Mapping

### Transaction Mapper

```python
def map_pawoon_transaction(pawoon_data):
 """
 Map Pawoon transaction format to unified internal format

 Pawoon format:
 {
 "id": "TXN123",
 "total": 150000,
 "tax": 13636,
 "discount": 0,
 "items": [...],
 "payment_method": "cash",
 "timestamp": "2025-12-26T10:30:00+07:00",
 "outlet_id": "outlet_123",
 "customer": {...}
 }
 """
 return {
 'external_id': pawoon_data['id'],
 'source_system': 'pawoon',
 'amount': float(pawoon_data['total']),
 'tax_amount': float(pawoon_data.get('tax', 0)),
 'discount_amount': float(pawoon_data.get('discount', 0)),
 'net_amount': float(pawoon_data['total']) - float(pawoon_data.get('discount', 0)),
 'payment_method': pawoon_data.get('payment_method', 'unknown'),
 'timestamp': datetime.fromisoformat(pawoon_data['timestamp']),
 'outlet_id': pawoon_data.get('outlet_id'),
 'items': [
 {
 'name': item['name'],
 'quantity': int(item['qty']),
 'unit_price': float(item['price']),
 'total': float(item['qty']) * float(item['price']),
 'category': item.get('category')
 }
 for item in pawoon_data.get('items', [])
 ],
 'customer': {
 'name': pawoon_data.get('customer', {}).get('name'),
 'phone': pawoon_data.get('customer', {}).get('phone')
 } if pawoon_data.get('customer') else None,
 'metadata': {
 'outlet_id': pawoon_data.get('outlet_id'),
 'cashier_name': pawoon_data.get('cashier', {}).get('name'),
 'table_number': pawoon_data.get('table_number')
 }
 }
```

---

## Error Handling

### Common Errors & Solutions

**1. Token Expired (401 Unauthorized)**

```python
def refresh_pawoon_token(refresh_token):
 """
 Refresh expired Pawoon access token
 """
 response = requests.post(
 'https://auth.pawoon.com/oauth/token',
 data={
 'grant_type': 'refresh_token',
 'refresh_token': decrypt(refresh_token),
 'client_id': os.getenv('PAWOON_CLIENT_ID'),
 'client_secret': os.getenv('PAWOON_CLIENT_SECRET')
 }
 )

 if response.status_code != 200:
 # Refresh token also expired - user must reconnect
 raise Exception('Refresh token expired - user must reconnect Pawoon')

 token_data = response.json()

 # Update stored tokens
 db.execute("""
 UPDATE integrations
 SET access_token = ?, refresh_token = ?, expires_at = ?
 WHERE source_system = 'pawoon' AND refresh_token = ?
 """,
 encrypt(token_data['access_token']),
 encrypt(token_data.get('refresh_token', refresh_token)),
 datetime.utcnow() + timedelta(seconds=token_data['expires_in']),
 refresh_token
 )

 return token_data['access_token']
```

**2. Rate Limit Exceeded (429 Too Many Requests)**

```python
@retry(
 stop=stop_after_attempt(3),
 wait=wait_exponential(multiplier=1, min=60, max=300)
)
def call_pawoon_api_with_retry(url, headers, params):
 """
 Call Pawoon API with automatic retry on rate limit
 """
 response = requests.get(url, headers=headers, params=params, timeout=30)

 if response.status_code == 429:
 retry_after = int(response.headers.get('Retry-After', 60))
 logger.warning(f"Pawoon rate limit hit, retrying after {retry_after}s")
 time.sleep(retry_after)
 raise requests.ConnectionError('Rate limited')

 return response
```

---

## Troubleshooting Guide

### Issue 1: Transactions Not Syncing

**Symptoms:**
- User connected Pawoon successfully
- But transactions not appearing in R2a

**Diagnosis:**
```sql
-- Check integration status
SELECT access_token, expires_at, webhook_active, last_sync_at
FROM integrations
WHERE user_id = @user_id AND source_system = 'pawoon';

-- Check for sync errors
SELECT error_message, created_at
FROM integration_failures
WHERE user_id = @user_id AND source_system = 'pawoon'
ORDER BY created_at DESC
LIMIT 10;
```

**Common Causes:**
1. Access token expired
2. Webhook not configured
3. Pawoon account has no transactions in date range
4. Outlet ID mismatch (multi-outlet accounts)

**Fix:**
- Trigger manual sync: `POST /api/v1/integrations/pawoon/sync`
- Reconfigure webhook if `webhook_active = 0`
- Check Pawoon dashboard for actual transactions

---

### Issue 2: Duplicate Transactions

**Symptoms:**
- Same transaction appears multiple times in R2a
- Different amounts or timestamps

**Diagnosis:**
```sql
SELECT external_id, COUNT(*) as count, GROUP_CONCAT(amount) as amounts
FROM transactions
WHERE user_id = @user_id AND source_system = 'pawoon'
GROUP BY external_id
HAVING COUNT(*) > 1;
```

**Root Cause:**
- Webhook delivered transaction
- Then API sync also fetched same transaction

**Fix:**
- UPSERT logic already implemented (should prevent this)
- If still occurring, check unique constraint on (user_id, source_system, external_id)

---

**Related Documents:**
- [[products/shared-technical/integrations/integration-framework|Integration Framework]] - General integration patterns
- [[products/shared-technical/integrations/webhook-api|Webhook API]] - Webhook specifications
- [[products/shared-technical/integrations/pos-connectors/moka|Moka Integration]] - Alternative POS integration

**Last Updated:** 2025-12-26
**Owner:** Integration Team
**Pawoon Support:** https://support.pawoon.com
**API Status:** https://status.pawoon.com
