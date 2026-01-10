# Data Accuracy Issues

**Last Updated:** 2025-12-27

---

## Transaction Discrepancies

### PWBI Sales Don't Match POS

**Why this happens:**
- **Timing difference:** POS uses transaction time, PWBI uses sync time
- **Voided transactions:** Some POS include voids, PWBI excludes by default
- **Date filter:** Check date range matches
- **Refunds:** May be categorized differently

**How to Troubleshoot:**
1. **Check exact time period:** Compare same date range in POS vs PWBI
2. **Include/exclude voids:** Settings → Data → "Include voided transactions"
3. **Check timezone:** POS timezone vs PWBI (should match)
4. **Manual reconciliation:** Export both CSVs, compare transaction-by-transaction

**Acceptable Variance:** <1% is normal due to rounding, timing differences

---

### Missing Transactions

**Common Reasons:**

**1. Transaction Outside Date Range**
- **Check:** Expand date filter to "All Time"
- **Verify:** Transaction date in POS

**2. Sync Timing**
- **Real-time POS (Pawoon):** Should appear within 5 minutes
- **Polling POS (Moka, Qasir):** Can take up to 1 hour
- **Solution:** Wait or click "Sync Now"

**3. Transaction Deleted in POS**
- **If deleted before sync:** Won't appear in PWBI
- **Solution:** Re-enter in PWBI manually or restore in POS

**4. Filtered Out**
- **Check:** Dashboard filters (payment method, outlet, category)
- **Reset:** Clear all filters

---

### Duplicate Transactions

**How to Find Duplicates:**
1. Transactions → Sort by Amount/Time
2. Look for identical amount + time
3. Check Transaction ID (should be unique)

**Solution:**
- Report to support@pwbi.id with transaction IDs
- We'll deduplicate within 24 hours

**Prevention:** Don't click "Sync Now" repeatedly

---

## Financial Metrics Wrong

### Profit Margin calculator Seems Off

**Common Mistakes:**

**1. COGS Not Set Up**
- **Check:** R2c COGS Calculator configured?
- **Solution:** Set up item costs in Settings → COGS

**2. Overhead Not Included**
- **PWBI calculates:** Gross profit (revenue - COGS)
- **You want:** Net profit (gross profit - overhead)
- **Solution:** Add overhead manually in P&L

**3. Tax Included in Revenue**
- **Check:** Is POS revenue including or excluding tax?
- **Adjust:** Settings → Revenue Recognition → "Exclude tax"

---

### Cash Flow Doesn't Match Bank

**Why:**
- **Accrual vs Cash:** PWBI shows accrual (when sold), bank shows cash (when paid)
- **Pending payments:** Credit card settlements take 1-3 days
- **Manual transactions:** Bank deposits not recorded in PWBI

**Solution:**
1. Use R2b Cash Flow module (tracks actual cash)
2. Enter manual transactions (deposits, withdrawals)
3. Reconcile weekly

---

## Item-Level Data Issues

### Item Sales Count Wrong

**Causes:**
- **Combo/bundled items:** POS counts bundle as 1, PWBI breaks it down
- **Modifiers counted separately:** Extra cheese counted as separate item
- **Voided items:** Check void inclusion setting

**Solution:**
- Define item grouping rules in Settings → Items

---

### Item Not Appearing in Reports

**Causes:**
- **New item:** Added after filter date range
- **Zero sales:** Item exists but no sales in period
- **Category filter:** Item filtered out by category

**Check:**
1. Items → "All Items" (should see it listed)
2. Expand date range
3. Clear filters

---

## Staff Analytics Wrong

### Staff Sales Don't Match Reality

**Causes:**
- **Cashier field not mapped:** POS uses different field name
- **Team accounts:** Multiple staff use same login
- **Tips not included:** Tips tracked separately

**Solution:**
- Settings → Staff Mapping → Map POS user field
- Assign unique logins in POS

---

**Data still wrong?** Email support@pwbi.id with:
- Specific metric that's wrong
- Expected value (from POS or calculation)
- PWBI value shown
- Date range and filters used
- Check [[biz/knowledge-base/best-practices/02-pos-integration|POS Integration Best Practices]] first.
