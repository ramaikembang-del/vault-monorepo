# R2b Cash Flow - Bank Integration SOP

**Owner:** Implementation Team
**Last Updated:** December 2025

---

## Purpose
Integrate customer bank accounts for automated cash flow tracking.

## Integration Options

### Option 1: Bank API (Preferred)
**Supported Banks:** BCA, Mandiri, BNI (via aggregator)
**Steps:**
1. Customer authorizes API access
2. Configure bank connector
3. Set sync schedule (daily)
4. Validate transactions flowing

### Option 2: Manual Upload
**If API not available:**
- Customer downloads bank statement (CSV)
- Uploads to dashboard
- System categorizes transactions
- Manual process weekly

---

## Configuration

### Transaction Categorization
- Map bank transactions to categories (Revenue, Expenses, etc.)
- Set rules for auto-categorization
- Customer reviews and adjusts

### Multiple Bank Accounts
- Link all accounts
- Consolidated cash flow view
- Per-account drill-down

---

## Quality Checks
- [ ] All bank accounts linked
- [ ] Transactions syncing daily
- [ ] Categorization > 90% accurate
- [ ] Customer validated setup

---

## Revision History
| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial SOP |

---

## Related

- **[[products/04-accounting-module/product-variants/R2b-cash-flow/R2b-cash-flow|R2b Cash Flow]]** - Product variant overview
- **[[products/04-accounting-module/product-variants/R2b-cash-flow/integrations/bank-integration|Bank Integration]]** - Integration specifications
- **[[products/04-accounting-module/product-variants/R2b-cash-flow/sops/reconciliation-sop|Reconciliation SOP]]** - Monthly reconciliation procedures
- **[[products/04-accounting-module/product-variants/R2b-cash-flow/operations/onboarding-guide|Onboarding Guide]]** - Customer onboarding process
- **[[products/04-accounting-module/product-variants/R2b-cash-flow/operations/support-runbook|Support Runbook]]** - Support procedures
