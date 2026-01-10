# Qasir POS Integration

**Last Updated:** 2025-12-26
**API Documentation:** https://api.qasir.id/docs
**Authentication:** Bearer Token
**Rate Limit:** 50 requests/minute
**Market Share:** Growing player in Indonesia (~10% F&B market)
**Owner:** Integration Team

---

## Overview

Qasir POS integration guide - popular among small restaurants and warungs due to lower pricing. Uses simple Bearer token authentication.

**Key Features:**
- Simple API key setup (no OAuth)
- Transaction sync via polling
- Basic inventory sync

**Limitations:**
- No webhook support
- Lower rate limit (50 req/min vs 100 for P awoon/Moka)
- Limited historical data (3 months max)

---

## Connection Setup

```python
def connect_qasir_integration(user_id, api_token):
 """
 Connect Qasir POS using API token
 """
 # Validate token
 response = requests.get(
 'https://api.qasir.id/v1/outlets',
 headers={'Authorization': f'Bearer {api_token}'},
 timeout=10
 )

 if response.status_code == 401:
 return {'error': 'Invalid API token'}, 401
 elif response.status_code != 200:
 return {'error': f'Qasir API error: {response.status_code}'}, 500

 outlets = response.json().get('outlets', [])

 # Store integration
 db.execute("""
 INSERT INTO integrations (user_id, source_system, api_key)
 VALUES (?, 'qasir', ?)
 ON CONFLICT (user_id, source_system) DO UPDATE
 SET api_key = EXCLUDED.api_key
 """, user_id, encrypt(api_token))

 sync_qasir_transactions_async(user_id)

 return {'success': True, 'outlets': outlets}
```

---

## Transaction Sync

```python
def sync_qasir_transactions(user_id, api_token, from_date=None):
 """
 Fetch transactions from Qasir API (polling-based)
 """
 if not from_date:
 from_date = datetime.utcnow() - timedelta(days=30)

 response = requests.get(
 'https://api.qasir.id/v1/transactions',
 headers={'Authorization': f'Bearer {api_token}'},
 params={
 'from_date': from_date.isoformat(),
 'to_date': datetime.utcnow().isoformat(),
 'limit': 100
 },
 timeout=30
 )

 if response.status_code != 200:
 raise Exception(f'Qasir API error: {response.status_code}')

 transactions = response.json().get('transactions', [])

 for txn in transactions:
 unified_txn = map_qasir_transaction(txn)
 create_transaction(user_id, unified_txn, upsert=True)

 return {'success': True, 'transactions_synced': len(transactions)}

def map_qasir_transaction(qasir_data):
 """
 Map Qasir format to unified format
 """
 return {
 'external_id': qasir_data['id'],
 'source_system': 'qasir',
 'amount': float(qasir_data['total_amount']),
 'timestamp': datetime.fromisoformat(qasir_data['transaction_date']),
 'payment_method': qasir_data.get('payment_method', 'cash'),
 'items': [
 {
 'name': item['product_name'],
 'quantity': int(item['qty']),
 'unit_price': float(item['price'])
 }
 for item in qasir_data.get('items', [])
 ]
 }
```

---

**Related Documents:**
- [[products/shared-technical/integrations/pos-connectors/pawoon|Pawoon Integration]] - Premium alternative
- [[products/shared-technical/integrations/pos-connectors/moka|Moka Integration]] - Mid-tier alternative

**Last Updated:** 2025-12-26
**Owner:** Integration Team
