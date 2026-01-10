# R2b: Cash Flow Analytics - Troubleshooting Guide

**Module:** R2b - Cash Flow Analytics
**Last Updated:** December 2025

---

## Quick Diagnostic Tool

**Start here:** What's your issue?

| Symptom | Jump to Section |
|---------|----------------|
| Data not refreshing | [[#1-data-refresh-issues|#1 Data Refresh Issues]] |
| Bank sync failing | [[#2-bank-integration-problems|#2 Bank Integration Problems]] |
| Incorrect cash balance | [[#3-balance-reconciliation|#3 Balance Reconciliation]] |
| Forecast way off | [[#4-forecast-accuracy-issues|#4 Forecast Accuracy Issues]] |
| Slow dashboard | [[#5-performance-issues|#5 Performance Issues]] |
| Visuals showing errors | [[#6-visual-display-errors|#6 Visual Display Errors]] |

---

## 1. Data Refresh Issues

### Problem: Dashboard shows old data

**Symptoms:**
- Last refresh date is > 24 hours ago
- Recent transactions missing
- "Refresh failed" error message

**Solutions:**

**A. Check Scheduled Refresh Status**
1. Open Power BI Service
2. Navigate to workspace  ->  Dataset  ->  Settings
3. Check "Scheduled refresh" section
4. Look for error messages

**B. Common Refresh Errors & Fixes**

| Error | Cause | Fix |
|-------|-------|-----|
| "Data source credentials invalid" | Expired password | Re-enter credentials in Data Source Settings |
| "Gateway offline" | On-premise gateway down | Restart Power BI Gateway service |
| "Timeout" | Query too slow | Optimize query or increase timeout limit |
| "Permission denied" | Lost database access | Contact IT to restore permissions |

**C. Manual Refresh Test**
```
1. Open Power BI Desktop
2. Click "Refresh" button (top ribbon)
3. Watch for errors in bottom status bar
4. If succeeds locally but fails in service  ->  Gateway issue
```

### Problem: Refresh works but data incomplete

**Check #1: Date Filters**
- Navigate to "Transform Data"  ->  "Source"
- Verify date filter includes recent dates
- Example: `Date >= Date.AddDays(DateTime.LocalNow(), -90)`

**Check #2: Data Source Connection**
- Test connection to source database
- Run this query directly against DB:
```sql
SELECT COUNT(*) FROM CashTransactions
WHERE TransactionDate >= DATEADD(day, -7, GETDATE())
```
- Compare count with Power BI import

**Check #3: Incremental Refresh** (if configured)
- Check incremental refresh policy settings
- Ensure RangeStart and RangeEnd parameters are correct

---

## 2. Bank Integration Problems

### Problem: Bank sync stopped working

**Step 1: Check Bank API Status**
```
BCA: https://developer.bca.co.id/status
Mandiri: https://developers.bankmandiri.co.id/status
BNI: https://developers.bni.co.id/status
```

**Step 2: Verify API Credentials**
1. Open Power Automate flow
2. Check HTTP action  ->  Authentication
3. Test connection with "Test" button
4. If fails  ->  Regenerate API key from bank portal

**Step 3: Check for API Changes**
- Banks occasionally update API versions
- Review bank developer portal for deprecation notices
- Update API endpoint if needed

### Problem: Transactions syncing with delays

**Expected Behavior:**
- Real-time banks: < 5 minutes
- Daily batch banks: Once per day at scheduled time

**If Delayed:**
1. Check Power Automate flow run history
2. Look for throttling errors (HTTP 429)
3. Adjust flow frequency if hitting rate limits
4. BCA limit: 1000 requests/hour

**Temporary Workaround:**
Manual import while troubleshooting:
1. Download transactions from bank portal (CSV)
2. Import to Power BI: Get Data  ->  Text/CSV
3. Append to existing CashTransactions table

---

## 3. Balance Reconciliation

### Problem: Cash balance doesn't match bank statement

**Root Cause Analysis:**

**A. Timing Differences**
```
Power BI shows: Rp 45 juta
Bank shows: Rp 48 juta
Difference: Rp 3 juta

Check:
- Outstanding deposits (sent but not cleared)
- Outstanding checks (issued but not cashed)
- Pending transactions in sync queue
```

**B. Duplicate Transactions**
```dax
// Run this measure to detect duplicates
Duplicate_Check =
CALCULATE(
 COUNTROWS(CashTransactions),
 FILTER(
 CashTransactions,
 COUNTROWS(
 FILTER(
 CashTransactions,
 CashTransactions[TransactionID] = EARLIER(CashTransactions[TransactionID])
 )
 ) > 1
 )
)
```
If > 0, you have duplicates. Remove via:
- Transform Data  ->  Remove Duplicates (based on TransactionID)

**C. Missing Transactions**
1. Go to "Reconciliation" page
2. Compare transaction count per day with bank
3. Filter to days with mismatches
4. Manually import missing transactions

**D. Incorrect Transaction Types**
- Cash-in recorded as cash-out (or vice versa)
- Check "Amount" column: should be negative for outflows
- Fix in source data or create calculated column:
```dax
Corrected_Amount =
IF(
 CashTransactions[TransactionType] = "Inflow",
 ABS(CashTransactions[Amount]),
 -ABS(CashTransactions[Amount])
)
```

### Problem: Inter-company transfers don't balance

**Expected:** Total intercompany transfers across all entities = Rp 0

**If Unbalanced:**
```dax
Intercompany_Check =
SUM(CashTransactions[Amount]) // Filter to transaction type = "Intercompany"
// Should be 0 or very close
```

**Common Causes:**
1. Transfer recorded in one entity but not the other
2. Different amounts recorded (e.g., Rp 10M out, Rp 9.5M in)
3. Timing difference (sent today, received tomorrow)

**Fix:**
- Create "Unmatched Intercompany Transfers" report
- Review and correct each mismatch
- Implement matching workflow in accounting system

---

## 4. Forecast Accuracy Issues

### Problem: Forecast consistently too high or too low

**Diagnosis:**

Calculate forecast error:
```dax
Forecast_Error_Percentage =
DIVIDE(
 [Actual Revenue] - [Forecasted Revenue],
 [Forecasted Revenue],
 BLANK()
)
```

**If Consistently High** (+15% to +30%):
- Revenue assumptions too optimistic
- Not accounting for seasonality
- Growth rate assumption wrong

**Fixes:**
1. Adjust base growth rate downward
2. Apply seasonal index (see Advanced Guide)
3. Use 3-month moving average instead of last month

**If Consistently Low** (-15% to -30%):
- Missing revenue streams (catering, delivery)
- Underestimating repeat customers
- Not factoring in promotions

**Fixes:**
1. Audit revenue categories - ensure all captured
2. Add "Unplanned Revenue" buffer (+10%)
3. Calendar-integrate promotional schedule

### Problem: Forecast variance is wild (swings ±50%)

**Root Cause:** High business volatility or poor model

**Solutions:**

**A. Smooth with Moving Averages**
```dax
Revenue_3M_Avg =
CALCULATE(
 AVERAGE([Revenue]),
 DATESINPERIOD('Calendar'[Date], LASTDATE('Calendar'[Date]), -3, MONTH)
)
```
Use this smoothed value as forecast baseline.

**B. Add Confidence Intervals**
Show range instead of point estimate (see Advanced Guide).

**C. Segment by Volatility**
- Stable revenue (subscriptions, contracts): Forecast with high confidence
- Variable revenue (walk-ins): Use conservative estimate
- Combine both for total forecast

---

## 5. Performance Issues

### Problem: Dashboard loads slowly (>30 seconds)

**Quick Fixes:**

**A. Reduce Visual Count**
- Max 10-15 visuals per page
- Use drill-through instead of everything on one page

**B. Optimize DAX Measures**

**Slow (calculate for every row):**
```dax
Slow_Measure =
SUMX(
 CashTransactions,
 [Complex Calculation]
)
```

**Fast (aggregate first):**
```dax
Fast_Measure =
VAR TotalSum = SUM(CashTransactions[Amount])
RETURN TotalSum * 1.1
```

**C. Use Aggregations** (Power BI Premium)
- Create aggregation table at daily level
- Main table at transaction level
- Power BI automatically uses aggregation when possible

**D. Limit Date Range**
```dax
// Add to all measures
IF(
 DATEDIFF(MIN('Calendar'[Date]), MAX('Calendar'[Date]), DAY) <= 365,
 [Your Measure],
 BLANK() // Don't calculate if > 1 year selected
)
```

### Problem: Refresh takes > 2 hours

**Optimization Steps:**

1. **Remove unused columns**
 - Transform Data  ->  Remove Columns
 - Keep only what's used in visuals

2. **Disable auto date/time**
 - File  ->  Options  ->  Data Load
 - Uncheck "Auto date/time"

3. **Use query folding**
 - Filter and aggregate in source query, not Power BI
 - Example: `SELECT Date, SUM(Amount) FROM ... GROUP BY Date`

4. **Consider DirectQuery**
 - For very large datasets (1M+ rows)
 - Trade-off: Real-time data but slower visuals

---

## 6. Visual Display Errors

### Problem: "Couldn't load data" error on visual

**Cause A: Measure error**
- Click visual  ->  View  ->  Fields
- Note which measure is used
- Check measure for DAX errors

**Common Errors:**
```dax
// [x] Missing return statement
Bad_Measure = VAR X = 5

// [x] Correct
Good_Measure = VAR X = 5 RETURN X

// [x] Division by zero
Bad_Divide = [Amount] / [Count]

// [x] Handle zero
Good_Divide = DIVIDE([Amount], [Count], 0)
```

**Cause B: Relationship issue**
- Check Modeling  ->  Manage Relationships
- Ensure relationships are active and correct direction

### Problem: Visual shows blank/empty

**Checklist:**
- [ ] Filters applied that exclude all data?
- [ ] Measure returns BLANK() incorrectly?
- [ ] Relationship broken between tables?
- [ ] Data actually exists for selected period?

**Debug Process:**
1. Remove all filters  ->  Still blank?
2. Replace measure with simple `COUNT(Table[Column])`  ->  Shows value?
3. Test measure in isolation with table visual
4. Check for FILTER statements that may exclude all rows

---

## Common Error Messages

### "Circular dependency detected"

**Meaning:** Measure A depends on Measure B, which depends on Measure A.

**Example:**
```dax
// [x] Circular
MeasureA = [MeasureB] * 2
MeasureB = [MeasureA] / 2

// [x] Fixed
MeasureA = SUM(Table[Column]) * 2
MeasureB = [MeasureA] / 2
```

### "A table of multiple values was supplied where a single value was expected"

**Meaning:** Using aggregate function result where scalar is needed.

**Fix:**
```dax
// [x] Wrong
Bad = SUM(Table[Column]) * Table[OtherColumn]

// [x] Correct
Good = SUMX(Table, Table[Column] * Table[OtherColumn])
```

---

## Getting Help

### Before Contacting Support

Gather this information:
1. **Error Screenshot** (full screen, not cropped)
2. **Steps to Reproduce** (what you clicked, in order)
3. **Last Known Working Date** (when did it last work?)
4. **Impacted Users** (just you, or everyone?)
5. **Environment** (Desktop vs. Service, browser version)

### Support Channels

| Priority | Response Time | Contact |
|----------|---------------|---------|
| Critical (all users blocked) | 2 hours | Slack: @support-urgent |
| High (workflow impaired) | 8 hours | Email: support@pwbi.co.id |
| Low (question/enhancement) | 48 hours | Slack: #r2-cash-flow-help |

### Self-Service Resources

- [Video Tutorials](https://youtube.com/pwbi-r2b)
- [[biz/knowledge-base/knowledge-base|Knowledge Base]]
- [Community Forum](https://community.pwbi.co.id)
- [[biz/knowledge-base/knowledge-base.md|FAQs]]

---

## Appendix: Diagnostic Queries

### Check Data Freshness
```dax
Last_Transaction_Date = MAX(CashTransactions[Date])
Data_Age_Days = DATEDIFF(MAX(CashTransactions[Date]), TODAY(), DAY)
// If > 2 days, data refresh issue
```

### Identify Missing Days
```dax
Missing_Days =
VAR AllDays = VALUES('Calendar'[Date])
VAR DaysWithData = VALUES(CashTransactions[Date])
RETURN
 COUNTROWS(EXCEPT(AllDays, DaysWithData))
```

### Transaction Volume by Source
```dax
Transactions_By_Source =
SUMMARIZE(
 CashTransactions,
 CashTransactions[Source],
 "Count", COUNT(CashTransactions[TransactionID]),
 "Total Amount", SUM(CashTransactions[Amount])
)
```

---

**Document Version:** 1.0
**Maintained By:** PWBI Support Team
**Feedback:** docs@pwbi.co.id


---

**Related Documents:**
- [[products/04-accounting-module/04-accounting-module|Product Overview]] - Main product documentation
- [[products/04-accounting-module/product-variants/product-variants|Product Variants Hub]] - All variants


