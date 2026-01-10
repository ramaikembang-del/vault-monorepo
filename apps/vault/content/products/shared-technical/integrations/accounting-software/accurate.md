# Accurate Online Integration

**Last Updated:** 2025-12-26
**API Documentation:** https://api.accurate.id/docs
**Authentication:** OAuth 2.0
**Market Share:** #1 cloud accounting in Indonesia
**Owner:** Integration Team

---

## Overview

Two-way integration with Accurate Online accounting software - allows R2a P&L data to sync with formal accounting system.

**Integration Flows:**
- **Inbound:** Import Chart of Accounts  ->  R2a categories
- **Outbound:** Export R2a transactions  ->  Accurate journal entries

---

## Connection Setup (OAuth 2.0)

```python
def initiate_accurate_oauth(user_id):
 """
 Start OAuth flow for Accurate Online
 """
 state_token = secrets.token_urlsafe(32)
 redis_client.setex(f"oauth_state:{state_token}", 600, user_id)

 auth_url = (
 f"https://account.accurate.id/oauth/authorize?"
 f"client_id={os.getenv('ACCURATE_CLIENT_ID')}&"
 f"redirect_uri=https://api.pwbi.com/integrations/accurate/callback&"
 f"response_type=code&"
 f"scope=read_coa,write_journal&"
 f"state={state_token}"
 )

 return {'authorization_url': auth_url}

def handle_accurate_callback():
 """
 Handle OAuth callback
 """
 code = request.args.get('code')
 state = request.args.get('state')

 user_id = redis_client.get(f"oauth_state:{state}")
 if not user_id:
 return {'error': 'Invalid state'}, 400

 # Exchange code for token
 token_response = requests.post(
 'https://account.accurate.id/oauth/token',
 data={
 'grant_type': 'authorization_code',
 'code': code,
 'client_id': os.getenv('ACCURATE_CLIENT_ID'),
 'client_secret': os.getenv('ACCURATE_CLIENT_SECRET')
 }
 )

 token_data = token_response.json()

 # Store tokens
 db.execute("""
 INSERT INTO integrations (user_id, source_system, access_token, refresh_token, expires_at)
 VALUES (?, 'accurate', ?, ?, ?)
 ON CONFLICT (user_id, source_system) DO UPDATE
 SET access_token = EXCLUDED.access_token
 """, user_id, encrypt(token_data['access_token']), encrypt(token_data['refresh_token']),
 datetime.utcnow() + timedelta(seconds=token_data['expires_in']))

 # Trigger initial sync
 import_accurate_coa_async(user_id)

 return redirect('https://app.pwbi.com/settings/integrations?status=success')
```

---

## Chart of Accounts Import

```python
def import_accurate_coa(user_id, access_token):
 """
 Import Chart of Accounts from Accurate to map to R2a categories
 """
 response = requests.get(
 'https://api.accurate.id/v1/chart-of-accounts',
 headers={'Authorization': f'Bearer {access_token}'},
 timeout=30
 )

 coa = response.json().get('accounts', [])

 # Map Accurate COA to R2a categories
 category_mapping = {}
 for account in coa:
 if '4' in account['code']: # Revenue accounts
 category_mapping[account['id']] = 'revenue'
 elif '5' in account['code']: # COGS accounts
 category_mapping[account['id']] = 'cogs'
 elif '6' in account['code']: # Expense accounts
 category_mapping[account['id']] = 'expenses'

 # Store mapping
 db.execute("""
 UPDATE integrations
 SET metadata = ?
 WHERE user_id = ? AND source_system = 'accurate'
 """, json.dumps({'coa_mapping': category_mapping}), user_id)

 return {'success': True, 'accounts_mapped': len(category_mapping)}
```

---

## Journal Entry Export

```python
def export_r2a_to_accurate(user_id, month, year):
 """
 Export R2a monthly transactions to Accurate as journal entries
 """
 # Get R2a transactions for month
 transactions = db.execute("""
 SELECT category, SUM(amount) as total
 FROM transactions
 WHERE user_id = ? AND MONTH(timestamp) = ? AND YEAR(timestamp) = ?
 GROUP BY category
 """, user_id, month, year)

 # Get Accurate access token
 integration = db.execute("""
 SELECT access_token FROM integrations
 WHERE user_id = ? AND source_system = 'accurate'
 """, user_id)

 access_token = decrypt(integration['access_token'])

 # Create journal entry
 journal_entry = {
 'date': f'{year}-{month:02d}-01',
 'description': f'R2a P&L Export - {year}-{month:02d}',
 'lines': []
 }

 for txn in transactions:
 journal_entry['lines'].append({
 'account_id': get_accurate_account_id(txn['category']),
 'debit': txn['total'] if txn['category'] == 'revenue' else 0,
 'credit': txn['total'] if txn['category'] in ['cogs', 'expenses'] else 0
 })

 # Post to Accurate
 response = requests.post(
 'https://api.accurate.id/v1/journal-entries',
 headers={'Authorization': f'Bearer {access_token}'},
 json=journal_entry,
 timeout=30
 )

 if response.status_code == 201:
 return {'success': True, 'journal_entry_id': response.json()['id']}
 else:
 return {'error': f'Accurate API error: {response.status_code}'}, 500
```

---

**Related Documents:**
- [[products/shared-technical/integrations/accounting-software/jurnal|Jurnal Integration]] - Alternative accounting software
- [[products/04-accounting-module/specifications/specifications|Accounting Module Specs]]

**Last Updated:** 2025-12-26
**Owner:** Integration Team

