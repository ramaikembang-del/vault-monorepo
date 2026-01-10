# Bank Integration Guide - Cash Flow Forecasting

**Product:** R2b - Cash Flow Forecasting
**Feature:** Automated Bank Balance Sync
**Method:** Banking Aggregator API (Phase 1)  ->  Direct Bank API (Phase 2)
**Owner:** Engineering Lead

---

## Integration Strategy Overview

**Phase 1 (Sprint 3 - Week 12-14):** Banking Aggregator Only (Brick, Finmo)
**Phase 2 (Month 9+):** Direct Bank API (BCA, Mandiri) if volume justifies

**Why Aggregator First?**
1. **Fast Integration:** One API  ->  All banks (vs negotiating with each bank)
2. **Regulatory Compliance:** Aggregators handle Bank Indonesia approval
3. **Lower Risk:** Proven platforms vs building from scratch

**Why Direct API Later?**
1. **Lower Cost:** Per-transaction fees vs aggregator markup
2. **Better Reliability:** No middleman downtime
3. **Deeper Features:** Transaction history, not just balance

---

## Phase 1: Banking Aggregator Integration

### Supported Aggregators

**Option 1: Brick (Recommended)**
- **Coverage:** BCA, Mandiri, BRI, BNI, CIMB Niaga (5 major banks = 80% of Mikro F&B)
- **Pricing:** Rp 500/query (acceptable for 2Ã—/day sync = Rp 30K/month per user)
- **API Quality:** Stable, good documentation
- **Approval:** Pre-approved by Bank Indonesia

**Option 2: Finmo**
- **Coverage:** Similar to Brick
- **Pricing:** Rp 600/query (slightly higher)
- **Backup:** Use if Brick has downtime

**Decision:** Primary = Brick, Fallback = Finmo

---

### User Flow: Linking Bank Account

**Step 1: User Initiates**
```
R2b Dashboard  ->  Settings  ->  Bank Accounts  ->  "+ Connect Bank"

Select Your Bank:
[ ] BCA
[ ] Mandiri
[ ] BRI
[ ] BNI
[ ] Other (Manual Entry)

[Continue]
```

**Step 2: Redirect to Bank Login (via Brick)**
```
Redirecting to BCA Internet Banking...

You'll login with your BCA credentials.
We ONLY read balance (never move money).

[Proceed to BCA]
```

**Step 3: OAuth Consent**
```
BCA Internet Banking Login

Username: [_______]
Password: [_______]
[Login]

 ->  BCA asks: "Allow R2b to view account balance?"
 [Approve] [Deny]
```

**Step 4: Success & Sync**
```
[x] BCA Connected!

Account: BCA Checking (...1234)
Current Balance: Rp 18,500,000
Last Updated: Just now

Auto-sync: 2Ã— daily (8am, 6pm WIB)

[Done]
```

---

### API Integration (Brick)

**Endpoint:** `https://api.onebrick.io/v1/account/balance`
**Auth:** OAuth 2.0

**Request:**
```json
GET /v1/account/balance
Headers:
 Authorization: Bearer {brick_access_token}
 X-Institution-Id: bca

Response:
{
 "account_number": "1234567890",
 "account_name": "PT Warung Pak Budi",
 "balance": 18500000,
 "currency": "IDR",
 "last_updated": "2025-12-26T10:34:22Z"
}
```

**R2b Processing:**
```python
def sync_bank_balance(user_id):
 # Get user's linked bank accounts
 accounts = get_linked_accounts(user_id)

 total_cash = 0
 for account in accounts:
 # Fetch balance from Brick
 balance_data = brick_api.get_balance(account.brick_token)

 # Update R2b database
 update_cash_account(
 user_id=user_id,
 account_id=account.id,
 balance=balance_data['balance'],
 last_sync=balance_data['last_updated']
 )

 total_cash += balance_data['balance']

 # Recalculate runway
 recalculate_runway(user_id, current_cash=total_cash)

 # Alert if runway changed significantly
 if runway_change > 0.5_months:
 send_alert(user_id, "Runway updated: X.X months")
```

**Sync Schedule:**
- **Morning Sync:** 8am WIB (before business hours)
- **Evening Sync:** 6pm WIB (after business day)
- **Manual Refresh:** User can click "Refresh Now" (limited to 1Ã— per hour to avoid Brick API costs)

---

### Error Handling

**Error 1: Bank Login Expired**
```
[!] BCA Connection Expired

Your BCA session expired. Please reconnect:

[Reconnect BCA] [Use Manual Entry Instead]

Why? Bank security requires re-authentication every 30 days.
```

**Error 2: Bank Maintenance**
```
 BCA Temporarily Unavailable

BCA systems under maintenance (common on weekends).

Last known balance: Rp 18.5M (2 hours ago)

We'll retry automatically in 2 hours.

[Use Last Known Balance] [Manual Entry]
```

**Error 3: Insufficient Permissions**
```
[x] R2b Can't Access Balance

Looks like you denied balance-viewing permission.

To use auto-sync, we need read-only access.

[Try Again] [Use Manual Entry]
```

---

## Phase 2: Direct Bank API Integration (Month 9+)

**Only build if:**
- R2b has 30+ users (justify development cost)
- Bank willing to partner (requires business relationship)

### BCA Direct API

**Endpoint:** `https://api.bca.co.id/merchants/v1/balance`
**Auth:** API Key + Digital Signature

**Benefits:**
- Lower cost (Rp 100/query vs Rp 500 aggregator)
- Transaction history (not just balance)
- Faster sync (direct = 2-3 seconds vs aggregator 10+ seconds)

**Costs:**
- **Development:** 80 hours Ã— Rp 500K/hour = Rp 40M
- **Partnership:** BCA developer account (approval 2-3 months)
- **Maintenance:** 4 hours/month

**ROI Calculation:**
- Cost savings: Rp 400/query Ã— 60 queries/month/user Ã— 30 users = Rp 720K/month saved
- Break-even: Rp 40M Ã· Rp 720K = 55 months
- **Decision:** Wait until 100+ users (break-even 18 months)

---

## Security & Data Privacy

**OAuth 2.0:**
- User authenticates directly with bank (we never see password)
- Read-only access (can view balance, NOT move money)
- Revocable (user can disconnect anytime)

**Data Encryption:**
- Bank balances encrypted at rest (AES-256)
- API tokens stored in secure vault (not database)
- Logs never contain sensitive data

**Compliance:**
- **Bank Indonesia Regulation:** Aggregators (Brick) pre-approved
- **PCI DSS:** Not applicable (we don't handle payment cards)
- **GDPR/Indonesian Data Protection:** User consent required, data deletion on request

---

## Future Enhancements (Month 12+)

**Transaction History Sync:**
- Import last 30 days transactions  ->  Auto-categorize as inflows/outflows
- Reduces manual entry (detect supplier payments, revenue deposits)

**Multi-Currency (for Exporters):**
- Support USD, SGD bank accounts
- Auto-convert to IDR for runway calculation

**E-Wallet Integration:**
- GoPay, OVO, DANA balances (many F&B keep cash in e-wallets)
- Aggregator: LinkAja API

---

## Related Documents

**Product Context:**
- [[products/04-accounting-module/product-variants/R2b-cash-flow/R2b-cash-flow|../]] - R2b overview
- [[products/04-accounting-module/product-variants/R2b-cash-flow/specifications/feature-spec|feature-spec.md]] - Cash balance feature requirements
- [[products/04-accounting-module/product-variants/R2b-cash-flow/specifications/technical-spec|technical-spec.md]] - Database schema

**Operations:**
- [[products/02-template-support/operations/support-runbook|support-runbook.md]] - Bank linking troubleshooting
- [[products/02-template-support/operations/onboarding-guide|onboarding-guide.md]] - User bank connection flow

**Strategic Context:**
- [[products/04-accounting-module/product-variants/R2b-cash-flow/product-scope|product-scope.md]] - Phase 1 Aggregator vs Phase 2 Direct API strategy

---

**Last Updated:** 2025-12-26
**Owner:** Engineering Lead
**Next Review:** Month 6 - Evaluate direct bank API ROI if user base >30


