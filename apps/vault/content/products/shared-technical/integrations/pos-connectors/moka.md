# Moka POS Integration

**Last Updated:** 2025-12-26
**API Documentation:** https://api.mokapos.com/docs
**Authentication:** API Key (Bearer Token)
**Rate Limit:** 60 requests/minute
**Market Share:** #2 cloud POS in Indonesia (~25% F&B market)
**Owner:** Integration Team

---

## Overview

Integration guide for Moka POS system - popular among cafes and quick-service restaurants in Indonesia. Moka uses simpler API key authentication (vs OAuth) making setup faster.

**Integration Capabilities:**
- Transaction sync via API polling (no webhooks)
- Historical data import (up to 6 months)
- Product/menu inventory sync
- Multi-outlet support

---

## Connection Setup (API Key)

### Step 1: Get API Credentials

**User Flow:**
1. User logs into Moka dashboard (https://dashboard.mokapos.com)
2. Navigate to Settings → Integrations → API Access
3. Click "Generate New API Key"
4. Copy API Key + Business ID
5. Paste into PWBI product settings

### Step 2: Validate API Key

```python
def connect_moka_integration(user_id, api_key, business_id):
 """
 Validate Moka API credentials and store integration
 """
 # Test API call to validate credentials
 try:
 response = requests.get(
 'https://api.mokapos.com/v1/outlets',
 headers={'Authorization': f'Bearer {api_key}'},
 params={'business_id': business_id},
 timeout=10
 )

 if response.status_code == 401:
 return {'error': 'Invalid API key'}, 401
 elif response.status_code != 200:
 return {'error': f'Moka API error: {response.status_code}'}, 500

 outlets = response.json().get('outlets', [])

 # Store integration in database
 db.execute("""
 INSERT INTO integrations (user_id, source_system, api_key, business_id, metadata)
 VALUES (?, 'moka', ?, ?, ?)
 ON CONFLICT (user_id, source_system) DO UPDATE
 SET api_key = EXCLUDED.api_key,
 business_id = EXCLUDED.business_id,
 metadata = EXCLUDED.metadata
 """, user_id, encrypt(api_key), business_id, json.dumps({'outlets': outlets}))

 # Trigger initial sync
 sync_moka_transactions_async(user_id)

 return {
 'success': True,
 'outlets': outlets,
 'message': f'Connected {len(outlets)} Moka outlets'
 }

 except requests.Timeout:
 return {'error': 'Connection timeout - please try again'}, 500
 except Exception as e:
 logger.error(f"Moka connection failed: {str(e)}")
 return {'error': str(e)}, 500
```

---

## Transaction Sync (Polling)

Moka doesn't support webhooks, so we poll the API every 5 minutes.

```python
@scheduler.scheduled_job('interval', minutes=5, id='poll_moka')
def poll_moka_transactions():
 """
 Scheduled job to fetch transactions from all Moka integrations
 """
 integrations = db.execute("""
 SELECT user_id, api_key, business_id, last_sync_timestamp
 FROM integrations
 WHERE source_system = 'moka' AND is_active = 1
 """)

 for integration in integrations:
 try:
 sync_moka_transactions(
 user_id=integration['user_id'],
 api_key=decrypt(integration['api_key']),
 business_id=integration['business_id'],
 from_date=integration['last_sync_timestamp']
 )
 except Exception as e:
 logger.error(f"Moka sync failed for user {integration['user_id']}: {str(e)}")

def sync_moka_transactions(user_id, api_key, business_id, from_date=None):
 """
 Fetch transactions from Moka API
 """
 if not from_date:
 from_date = datetime.utcnow() - timedelta(days=30)

 total_synced = 0

 # Moka uses cursor-based pagination
 cursor = None

 while True:
 params = {
 'business_id': business_id,
 'from_date': from_date.strftime('%Y-%m-%d'),
 'limit': 100
 }
 if cursor:
 params['cursor'] = cursor

 response = requests.get(
 'https://api.mokapos.com/v1/transactions',
 headers={'Authorization': f'Bearer {api_key}'},
 params=params,
 timeout=30
 )

 if response.status_code != 200:
 raise Exception(f'Moka API error: {response.status_code}')

 data = response.json()
 transactions = data.get('data', [])

 if not transactions:
 break

 # Process transactions
 for txn in transactions:
 unified_txn = map_moka_transaction(txn)
 create_transaction(user_id, unified_txn, upsert=True)
 total_synced += 1

 # Check for next page
 cursor = data.get('next_cursor')
 if not cursor:
 break

 # Update last sync timestamp
 db.execute("""
 UPDATE integrations
 SET last_sync_timestamp = ?
 WHERE user_id = ? AND source_system = 'moka'
 """, datetime.utcnow(), user_id)

 logger.info(f"Moka sync complete for user {user_id}: {total_synced} transactions")
 return {'success': True, 'transactions_synced': total_synced}
```

---

## Data Mapping

```python
def map_moka_transaction(moka_data):
 """
 Map Moka transaction format to unified format

 Moka format:
 {
 "id": "MOK123",
 "grand_total": "150000", // String, not number!
 "tax_amount": "13636",
 "discount_amount": "0",
 "payment_type": "cash",
 "created_at": "2025-12-26 10:30:00", // Different format than Pawoon
 "outlet_id": "outlet_456",
 "line_items": [...]
 }
 """
 return {
 'external_id': moka_data['id'],
 'source_system': 'moka',
 'amount': float(moka_data['grand_total']), # Convert string to float
 'tax_amount': float(moka_data.get('tax_amount', '0')),
 'discount_amount': float(moka_data.get('discount_amount', '0')),
 'payment_method': moka_data.get('payment_type', 'unknown'),
 'timestamp': datetime.strptime(moka_data['created_at'], '%Y-%m-%d %H:%M:%S'),
 'outlet_id': moka_data.get('outlet_id'),
 'items': [
 {
 'name': item['item_name'],
 'quantity': int(item['quantity']),
 'unit_price': float(item['price']),
 'total': float(item['quantity']) * float(item['price'])
 }
 for item in moka_data.get('line_items', [])
 ]
 }
```

---

## Troubleshooting

### Issue: Sync Lag (Up to 5 Minutes)

**Cause:** Moka doesn't support webhooks, so we poll every 5 minutes

**Solutions:**
1. Accept 5-minute lag (most users fine with this)
2. For power users: Offer manual sync button
3. Future: Monitor Moka's API changelog for webhook support

### Issue: String vs Number Data Types

**Problem:** Moka returns numbers as strings ("150000" instead of 150000)

**Fix:** Always wrap Moka numeric fields in `float()` conversion

---

**Related Documents:**
- [[products/shared-technical/integrations/pos-connectors/pawoon|Pawoon Integration]] - Webhook-based alternative
- [[products/shared-technical/integrations/integration-framework|Integration Framework]] - General patterns

**Last Updated:** 2025-12-26
**Owner:** Integration Team
**Moka Support:** https://help.mokapos.com
