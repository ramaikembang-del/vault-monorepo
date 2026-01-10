# Integration Framework

**Last Updated:** 2025-12-26
**Owner:** Integration Engineering Team
**Status:** Production-Ready Reference

---

## Overview

Standardized framework for integrating external systems (POS, accounting, payment gateways) with PWBI FnB Growth products, ensuring consistent data flow, error handling, and monitoring across all integrations.

**Supported Systems:**
- **POS:** Pawoon, Moka, Qasir, Olsera
- **Accounting:** Accurate Online, Jurnal.id
- **Payments:** Xendit, Midtrans (future)

---

## Integration Architecture

### Integration Types Comparison

| Type | Latency | Cost | Complexity | Best For |
|------|---------|------|------------|----------|
| **Webhook** | Real-time | Low | Medium | Real-time POS sync |
| **API Polling** | 1-5 min lag | Medium | Low | Systems without webhooks |
| **CSV Upload** | User-dependent | None | Very Low | Small

 businesses, legacy systems |

---

## Integration Type 1: Webhook-Based (Preferred)

### Architecture

```
External System (Pawoon/Moka)
 ↓
Sends HTTP POST when event occurs (transaction.created)
 ↓
API Gateway (validates HMAC signature)
 ↓
Integration Service (maps data → unified format)
 ↓
Product Backend (R2a/E1) stores transaction
 ↓
Returns 200 OK to external system
```

### Webhook Receiver Implementation

**Endpoint:** `POST /api/v1/integrations/webhooks/{source_system}`

```python
from flask import Flask, request
import hmac
import hashlib
import json

app = Flask(__name__)

@app.route('/api/v1/integrations/webhooks/<source_system>', methods=['POST'])
def receive_webhook(source_system):
 """
 Receive webhook from external POS/accounting system
 """
 # 1. Validate HMAC signature (prevents spoofing)
 signature = request.headers.get('X-Webhook-Signature')
 if not validate_webhook_signature(source_system, request.data, signature):
 return {'error': 'Invalid signature'}, 401

 # 2. Parse payload
 try:
 payload = request.json
 except Exception as e:
 return {'error': f'Invalid JSON: {str(e)}'}, 400

 # 3. Extract event type
 event_type = payload.get('event_type') # e.g., "transaction.created"

 # 4. Map data to unified format
 try:
 unified_data = map_external_data(source_system, event_type, payload['data'])
 except KeyError as e:
 return {'error': f'Missing required field: {str(e)}'}, 400
 except Exception as e:
 return {'error': f'Mapping failed: {str(e)}'}, 500

 # 5. Store in database
 internal_id = store_transaction(unified_data)

 # 6. Send success response
 return {
 'success': True,
 'message': 'Webhook processed',
 'internal_id': internal_id,
 'event_type': event_type
 }, 200

def validate_webhook_signature(source_system, payload_bytes, received_signature):
 """
 Validate HMAC-SHA256 signature to prevent webhook spoofing
 """
 # Get webhook secret from database (per integration)
 webhook_secret = get_webhook_secret(source_system)

 # Calculate expected signature
 expected_signature = hmac.new(
 webhook_secret.encode(),
 payload_bytes,
 hashlib.sha256
 ).hexdigest()

 # Compare securely (prevents timing attacks)
 return hmac.compare_digest(expected_signature, received_signature)
```

### Webhook Retry Handling (Sender Side)

If our webhook endpoint is down, external system should retry:

```python
def send_webhook_with_retry(webhook_url, payload, max_retries=3):
 """
 Send webhook with exponential backoff retry
 """
 for attempt in range(max_retries):
 try:
 response = requests.post(
 webhook_url,
 json=payload,
 headers={
 'Content-Type': 'application/json',
 'X-Webhook-Signature': calculate_signature(payload)
 },
 timeout=10
 )

 if 200 <= response.status_code < 300:
 return {'success': True}
 else:
 logger.warning(f"Webhook failed (attempt {attempt+1}): {response.status_code}")

 except requests.Timeout:
 logger.warning(f"Webhook timeout (attempt {attempt+1})")
 except Exception as e:
 logger.error(f"Webhook error (attempt {attempt+1}): {str(e)}")

 if attempt < max_retries - 1:
 # Exponential backoff: 1s, 2s, 4s
 time.sleep(2 ** attempt)

 # All retries failed - store in dead letter queue
 store_failed_webhook(webhook_url, payload)
 return {'success': False, 'error': 'Max retries exceeded'}
```

---

## Integration Type 2: API Polling

### Polling Scheduler Implementation

```python
from apscheduler.schedulers.background import BackgroundScheduler
import requests

scheduler = BackgroundScheduler()

# Poll Qasir API every 5 minutes (doesn't support webhooks)
@scheduler.scheduled_job('interval', minutes=5, id='poll_qasir')
def poll_qasir_transactions():
 """
 Fetch new transactions from Qasir API
 """
 # Get all users with Qasir integration enabled
 integrations = db.execute("""
 SELECT user_id, api_key, last_sync_timestamp
 FROM integrations
 WHERE source_system = 'qasir' AND is_active = 1
 """)

 for integration in integrations:
 try:
 # Fetch transactions since last sync
 transactions = fetch_qasir_transactions(
 api_key=integration['api_key'],
 from_date=integration['last_sync_timestamp']
 )

 # Process each transaction
 for txn in transactions:
 unified_data = map_external_data('qasir', 'transaction.created', txn)
 store_transaction(unified_data, user_id=integration['user_id'])

 # Update last sync timestamp
 db.execute("""
 UPDATE integrations
 SET last_sync_timestamp = ?
 WHERE user_id = ? AND source_system = 'qasir'
 """, datetime.utcnow(), integration['user_id'])

 logger.info(f"Qasir sync complete for user {integration['user_id']}: {len(transactions)} transactions")

 except Exception as e:
 logger.error(f"Qasir sync failed for user {integration['user_id']}: {str(e)}")
 # Don't update last_sync_timestamp so we retry on next run

scheduler.start()

def fetch_qasir_transactions(api_key, from_date):
 """
 Fetch transactions from Qasir API
 """
 response = requests.get(
 'https://api.qasir.id/v1/transactions',
 headers={'Authorization': f'Bearer {api_key}'},
 params={'from_date': from_date.isoformat()},
 timeout=30
 )

 if response.status_code == 401:
 raise Exception('Invalid API key - user needs to reconnect')
 elif response.status_code == 429:
 raise Exception('Rate limit exceeded - will retry next interval')
 elif response.status_code != 200:
 raise Exception(f'API error: {response.status_code}')

 return response.json().get('transactions', [])
```

---

## Integration Type 3: CSV Upload

### CSV Parser Implementation

```python
import csv
import io
from datetime import datetime

def parse_pos_csv(file_content, source_system):
 """
 Parse CSV file from POS system

 Supports:
 - Pawoon CSV export
 - Moka CSV export
 - Generic transaction CSV
 """
 try:
 # Read CSV content
 csv_reader = csv.DictReader(io.StringIO(file_content))
 transactions = []
 errors = []

 for row_num, row in enumerate(csv_reader, start=2): # Start at 2 (header is row 1)
 try:
 # Map based on source system
 if source_system == 'pawoon':
 unified_txn = parse_pawoon_csv_row(row)
 elif source_system == 'moka':
 unified_txn = parse_moka_csv_row(row)
 else:
 unified_txn = parse_generic_csv_row(row)

 transactions.append(unified_txn)

 except ValueError as e:
 errors.append({
 'row': row_num,
 'error': str(e),
 'data': row
 })

 return {
 'success': True,
 'transactions': transactions,
 'total': len(transactions),
 'errors': errors,
 'error_count': len(errors)
 }

 except Exception as e:
 return {
 'success': False,
 'error': f'CSV parsing failed: {str(e)}'
 }

def parse_pawoon_csv_row(row):
 """
 Parse Pawoon CSV row format:
 Date, Transaction ID, Total, Tax, Items
 """
 return {
 'external_id': row['Transaction ID'],
 'amount': float(row['Total'].replace(',', '')),
 'tax_amount': float(row.get('Tax', 0)),
 'timestamp': datetime.strptime(row['Date'], '%Y-%m-%d %H:%M:%S'),
 'source_system': 'pawoon'
 }

def parse_moka_csv_row(row):
 """
 Parse Moka CSV row format:
 transaction_id, grand_total, created_at
 """
 return {
 'external_id': row['transaction_id'],
 'amount': float(row['grand_total']),
 'timestamp': datetime.strptime(row['created_at'], '%Y-%m-%d %H:%M:%S'),
 'source_system': 'moka'
 }
```

**User Upload Flow:**

```python
@app.route('/api/v1/integrations/upload-csv', methods=['POST'])
def upload_pos_csv():
 """
 Allow user to upload POS CSV file
 """
 # Validate file upload
 if 'file' not in request.files:
 return {'error': 'No file uploaded'}, 400

 file = request.files['file']
 source_system = request.form.get('source_system') # pawoon, moka, generic

 if not file.filename.endswith('.csv'):
 return {'error': 'File must be CSV format'}, 400

 # Read file content
 file_content = file.read().decode('utf-8')

 # Parse CSV
 result = parse_pos_csv(file_content, source_system)

 if not result['success']:
 return {'error': result['error']}, 400

 # Store transactions
 stored_ids = []
 for txn in result['transactions']:
 internal_id = store_transaction(txn, user_id=g.user_id)
 stored_ids.append(internal_id)

 return {
 'success': True,
 'imported': len(stored_ids),
 'errors': result['errors'],
 'message': f"Imported {len(stored_ids)} transactions"
 }, 200
```

---

## OAuth 2.0 Flow Implementation

### Complete OAuth Setup

```python
def initiate_pos_oauth(source_system, user_id):
 """
 Step 1: Initiate OAuth 2.0 flow
 """
 # OAuth config per POS system
 oauth_config = {
 'pawoon': {
 'auth_url': 'https://auth.pawoon.com/oauth/authorize',
 'client_id': os.getenv('PAWOON_CLIENT_ID'),
 'scope': 'read_transactions'
 },
 'moka': {
 'auth_url': 'https://api.mokapos.com/oauth/authorize',
 'client_id': os.getenv('MOKA_CLIENT_ID'),
 'scope': 'transactions'
 }
 }

 config = oauth_config[source_system]

 # Generate state token (CSRF protection)
 state_token = secrets.token_urlsafe(32)
 redis_client.setex(f"oauth_state:{state_token}", 600, user_id) # 10-minute expiry

 # Build authorization URL
 auth_url = f"{config['auth_url']}?" \
 f"client_id={config['client_id']}&" \
 f"redirect_uri={urllib.parse.quote(get_redirect_url())}&" \
 f"response_type=code&" \
 f"scope={config['scope']}&" \
 f"state={state_token}"

 return {'authorization_url': auth_url}

def handle_oauth_callback(source_system):
 """
 Step 2: Handle OAuth callback after user authorizes
 """
 # Extract authorization code and state
 code = request.args.get('code')
 state = request.args.get('state')

 # Validate state token (CSRF protection)
 user_id = redis_client.get(f"oauth_state:{state}")
 if not user_id:
 return {'error': 'Invalid state token'}, 400

 # Exchange authorization code for access token
 token_response = exchange_code_for_token(source_system, code)

 if not token_response['success']:
 return {'error': token_response['error']}, 400

 # Store access token (encrypted)
 store_integration_credentials(
 user_id=user_id,
 source_system=source_system,
 access_token=token_response['access_token'],
 refresh_token=token_response.get('refresh_token'),
 expires_at=datetime.utcnow() + timedelta(seconds=token_response['expires_in'])
 )

 return {'success': True, 'message': f'{source_system.title()} connected successfully'}

def exchange_code_for_token(source_system, authorization_code):
 """
 Step 3: Exchange authorization code for access token
 """
 token_urls = {
 'pawoon': 'https://auth.pawoon.com/oauth/token',
 'moka': 'https://api.mokapos.com/oauth/token'
 }

 response = requests.post(
 token_urls[source_system],
 data={
 'grant_type': 'authorization_code',
 'code': authorization_code,
 'client_id': os.getenv(f'{source_system.upper()}_CLIENT_ID'),
 'client_secret': os.getenv(f'{source_system.upper()}_CLIENT_SECRET'),
 'redirect_uri': get_redirect_url()
 }
 )

 if response.status_code != 200:
 return {'success': False, 'error': 'Token exchange failed'}

 token_data = response.json()
 return {
 'success': True,
 'access_token': token_data['access_token'],
 'refresh_token': token_data.get('refresh_token'),
 'expires_in': token_data['expires_in']
 }
```

---

## Data Mapping Layer

### Universal Transaction Mapper

```python
def map_external_data(source_system, event_type, raw_data):
 """
 Map external system data to unified internal format
 """
 mappers = {
 'pawoon': PawoonMapper(),
 'moka': MokaMapper(),
 'qasir': QasirMapper(),
 'olsera': OlseraMapper()
 }

 mapper = mappers.get(source_system)
 if not mapper:
 raise ValueError(f'Unknown source system: {source_system}')

 if event_type == 'transaction.created':
 return mapper.map_transaction(raw_data)
 elif event_type == 'inventory.updated':
 return mapper.map_inventory(raw_data)
 else:
 raise ValueError(f'Unknown event type: {event_type}')

class PawoonMapper:
 def map_transaction(self, data):
 return {
 'external_id': data['transaction_id'],
 'amount': float(data['total']),
 'tax_amount': float(data.get('tax', 0)),
 'timestamp': datetime.fromisoformat(data['timestamp']),
 'payment_method': data.get('payment_method', 'unknown'),
 'items': [
 {
 'name': item['name'],
 'quantity': int(item['qty']),
 'price': float(item['price'])
 }
 for item in data.get('items', [])
 ],
 'source_system': 'pawoon'
 }

class MokaMapper:
 def map_transaction(self, data):
 return {
 'external_id': data['id'],
 'amount': float(data['grand_total']),
 'timestamp': datetime.strptime(data['created_at'], '%Y-%m-%d %H:%M:%S'),
 'payment_method': data.get('payment_type', 'unknown'),
 'items': [
 {
 'name': item['item_name'],
 'quantity': int(item['quantity']),
 'price': float(item['price'])
 }
 for item in data.get('line_items', [])
 ],
 'source_system': 'moka'
 }
```

---

## Error Handling & Retry Logic

### Retry with Exponential Backoff

```python
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type

@retry(
 stop=stop_after_attempt(3),
 wait=wait_exponential(multiplier=1, min=1, max=10),
 retry=retry_if_exception_type((requests.Timeout, requests.ConnectionError))
)
def call_external_api(url, headers, params):
 """
 Call external API with automatic retry on transient failures
 """
 response = requests.get(url, headers=headers, params=params, timeout=10)

 # Retry on rate limit (with backoff)
 if response.status_code == 429:
 retry_after = int(response.headers.get('Retry-After', 60))
 time.sleep(retry_after)
 raise requests.ConnectionError('Rate limited')

 # Don't retry on client errors (400, 401, 403, 404)
 if 400 <= response.status_code < 500:
 raise ValueError(f'Client error: {response.status_code}')

 # Retry on server errors (500, 502, 503)
 if response.status_code >= 500:
 raise requests.ConnectionError(f'Server error: {response.status_code}')

 return response.json()
```

### Dead Letter Queue for Failed Integrations

```python
def store_failed_sync(user_id, source_system, error, payload):
 """
 Store failed integration attempts for manual review
 """
 db.execute("""
 INSERT INTO integration_failures (
 user_id, source_system, error_message, payload, created_at
 ) VALUES (?, ?, ?, ?, ?)
 """, user_id, source_system, str(error), json.dumps(payload), datetime.utcnow())

 # Notify user via email/in-app notification
 notify_user_integration_failure(user_id, source_system, error)
```

---

## Monitoring & Observability

### Integration Metrics

```python
from prometheus_client import Counter, Histogram

# Metrics
integration_sync_total = Counter(
 'integration_sync_total',
 'Total integration syncs',
 ['source_system', 'status'] # status: success/failure
)

integration_sync_duration_seconds = Histogram(
 'integration_sync_duration_seconds',
 'Integration sync duration',
 ['source_system']
)

def track_integration_sync(source_system, user_id):
 """
 Track integration sync with metrics
 """
 start_time = time.time()

 try:
 # Perform sync
 result = sync_external_system(source_system, user_id)

 # Track success
 integration_sync_total.labels(source_system=source_system, status='success').inc()

 except Exception as e:
 # Track failure
 integration_sync_total.labels(source_system=source_system, status='failure').inc()
 raise

 finally:
 # Track duration
 duration = time.time() - start_time
 integration_sync_duration_seconds.labels(source_system=source_system).observe(duration)
```

---

## Troubleshooting Guide

### Issue 1: OAuth Token Expired

**Symptoms:**
- Integration was working, now returns 401 Unauthorized
- User sees "Please reconnect your Pawoon account"

**Diagnosis:**
```sql
SELECT access_token_expires_at
FROM integrations
WHERE user_id = @user_id AND source_system = 'pawoon';

-- If expires_at < NOW(), token is expired
```

**Fix:**
```python
# Automatically refresh token using refresh_token
def refresh_oauth_token(source_system, refresh_token):
 response = requests.post(
 f'https://api.{source_system}.com/oauth/token',
 data={
 'grant_type': 'refresh_token',
 'refresh_token': refresh_token,
 'client_id': CLIENT_ID,
 'client_secret': CLIENT_SECRET
 }
 )

 new_token = response.json()['access_token']
 # Update in database
 db.execute("UPDATE integrations SET access_token = ? WHERE ...", new_token)
```

---

### Issue 2: Duplicate Transactions

**Symptoms:**
- Same transaction appears multiple times in R2a
- external_id is same

**Diagnosis:**
```sql
SELECT external_id, COUNT(*) as count
FROM transactions
WHERE source_system = 'pawoon'
GROUP BY external_id
HAVING COUNT(*) > 1;
```

**Root Cause:**
- Webhook delivered multiple times (retry logic)
- Polling job ran overlapping intervals

**Fix:**
- Add UNIQUE constraint on (user_id, source_system, external_id)
- Use UPSERT logic instead of INSERT

```python
db.execute("""
 INSERT INTO transactions (user_id, source_system, external_id, amount)
 VALUES (?, ?, ?, ?)
 ON CONFLICT (user_id, source_system, external_id)
 DO UPDATE SET amount = EXCLUDED.amount
""", user_id, source_system, external_id, amount)
```

---

**Related Documents:**
- [[products/shared-technical/integrations/pos-connectors/pawoon|Pawoon-specific setup]]
- [[products/shared-technical/integrations/pos-connectors/moka|Moka-specific setup]]
- [[products/shared-technical/integrations/webhook-api|Webhook specifications]]
- [[products/shared-technical/architecture/api-gateway|API routing]]

**Last Updated:** 2025-12-26
**Owner:** Integration Engineering Team
**Review Cycle:** Monthly (as new integrations added)
**Next Review:** 2025-01-26
