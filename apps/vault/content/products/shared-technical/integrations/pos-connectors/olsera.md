# Olsera POS Integration

**Last Updated:** 2025-12-26
**API Documentation:** https://developer.olsera.com
**Authentication:** API Key
**Rate Limit:** 100 requests/minute
**Market Share:** Moderate player in Indonesia (~8% F&B market)
**Owner:** Integration Team

---

## Overview

Olsera POS integration - targets mid to large restaurants with multi-outlet operations.

**Key Features:**
- Multi-outlet support
- Advanced inventory tracking
- Customer loyalty program sync (future)

---

## Connection Setup

```python
def connect_olsera_integration(user_id, api_key, merchant_id):
 """
 Connect Olsera POS
 """
 response = requests.get(
 'https://api.olsera.com/v1/merchant/info',
 headers={'X-API-Key': api_key},
 params={'merchant_id': merchant_id},
 timeout=10
 )

 if response.status_code != 200:
 return {'error': 'Invalid API credentials'}, 401

 merchantinfo = response.json()

 db.execute("""
 INSERT INTO integrations (user_id, source_system, api_key, business_id)
 VALUES (?, 'olsera', ?, ?)
 ON CONFLICT (user_id, source_system) DO UPDATE
 SET api_key = EXCLUDED.api_key, business_id = EXCLUDED.business_id
 """, user_id, encrypt(api_key), merchant_id)

 return {'success': True, 'merchant': merchant_info}
```

---

## Transaction Sync

```python
def sync_olsera_transactions(user_id, api_key, merchant_id):
 """
 Fetch transactions from Olsera
 """
 response = requests.get(
 'https://api.olsera.com/v1/transactions',
 headers={'X-API-Key': api_key},
 params={'merchant_id': merchant_id, 'limit': 100},
 timeout=30
 )

 transactions = response.json().get('data', [])

 for txn in transactions:
 unified_txn = {
 'external_id': txn['transaction_id'],
 'source_system': 'olsera',
 'amount': float(txn['grand_total']),
 'timestamp': datetime.fromisoformat(txn['date']),
 'outlet_id': txn.get('outlet_id')
 }
 create_transaction(user_id, unified_txn, upsert=True)

 return {'success': True, 'transactions_synced': len(transactions)}
```

---

**Related Documents:**
- [[products/shared-technical/integrations/integration-framework|Integration Framework]]

**Last Updated:** 2025-12-26
**Owner:** Integration Team
