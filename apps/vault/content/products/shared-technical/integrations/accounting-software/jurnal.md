# Jurnal.id Integration

**Last Updated:** 2025-12-26
**API Documentation:** https://api.jurnal.id/docs
**Authentication:** OAuth 2.0
**Market Share:** #2 cloud accounting in Indonesia
**Owner:** Integration Team

---

## Overview

Integration with Jurnal.id accounting software - similar to Accurate but with slightly different API structure.

**Integration Flows:**
- Export R2a P&L to Jurnal
- Import GL accounts from Jurnal

---

## Connection Setup

```python
def connect_jurnal_integration(user_id):
 """
 OAuth flow for Jurnal.id (similar to Accurate)
 """
 # OAuth setup
 state_token = secrets.token_urlsafe(32)
 redis_client.setex(f"oauth_state:{state_token}", 600, user_id)

 auth_url = (
 f"https://app.jurnal.id/oauth/authorize?"
 f"client_id={os.getenv('JURNAL_CLIENT_ID')}&"
 f"redirect_uri=https://api.pwbi.com/integrations/jurnal/callback&"
 f"response_type=code&"
 f"state={state_token}"
 )

 return {'authorization_url': auth_url}
```

---

## P&L Export

```python
def export_r2a_to_jurnal(user_id, month, year):
 """
 Export R2a P&L summary to Jurnal.id
 """
 # Get R2a summary
 pl_summary = get_r2a_monthly_summary(user_id, month, year)

 # Get Jurnal access token
 integration = db.execute("""
 SELECT access_token FROM integrations
 WHERE user_id = ? AND source_system = 'jurnal'
 """, user_id)

 access_token = decrypt(integration['access_token'])

 # Create journal entry in Jurnal
 response = requests.post(
 'https://api.jurnal.id/v1/journal-entries',
 headers={'Authorization': f'Bearer {access_token}'},
 json={
 'date': f'{year}-{month:02d}-01',
 'memo': f'R2a Monthly P&L - {year}-{month:02d}',
 'transaction_lines': [
 {'account_name': 'Revenue', 'credit': pl_summary['revenue']},
 {'account_name': 'COGS', 'debit': pl_summary['cogs']},
 {'account_name': 'Expenses', 'debit': pl_summary['expenses']}
 ]
 },
 timeout=30
 )

 return {'success': response.status_code == 201}
```

---

**Related Documents:**
- [[products/shared-technical/integrations/accounting-software/accurate|Accurate Integration]] - Alternative accounting software

**Last Updated:** 2025-12-26
**Owner:** Integration Team
