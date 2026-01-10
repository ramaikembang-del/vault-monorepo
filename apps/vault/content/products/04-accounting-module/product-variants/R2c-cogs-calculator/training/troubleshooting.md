# R2c: COGS Analytics - Troubleshooting Guide

**Module:** R2c - Cost of Goods Sold Analytics
**Last Updated:** December 2025

---

## Quick Diagnostic

| Issue | Section |
|-------|---------|
| Food cost % way too high/low | [[#1-data-accuracy-issues|#1 Data Accuracy]] |
| Recipe costs wrong | [[#2-recipe-configuration-issues|#2 Recipe Configuration]] |
| Variance unexplained | [[#3-variance-analysis-problems|#3 Variance Analysis]] |
| Inventory doesn't match | [[#4-inventory-reconciliation|#4 Inventory Reconciliation]] |
| Waste tracking problems | [[#5-waste-tracking-issues|#5 Waste Tracking]] |

---

## 1. Data Accuracy Issues

### Problem: Food Cost % is Unrealistic

**Symptoms:**
- Food cost showing 60% (way too high)
- Food cost showing 10% (way too low)
- Wild swings day-to-day

**Root Causes & Fixes:**

**A. Missing Revenue Data**
```dax
// Check revenue completeness
Daily_Revenue_Check =
COUNTROWS(
 FILTER(
 'Calendar',
 ISBLANK([Total_Revenue]) && WEEKDAY([Date]) NOT IN {1, 7}
 // Missing revenue on weekdays
 )
)
```

If > 0 missing days:
1. Check POS integration status
2. Verify date filters in revenue query
3. Manually import missing sales data

**B. Incorrect Inventory Values**
```
Common Error: Ending inventory entered as Rp 120 juta instead of Rp 12 juta

Impact:
COGS = Beginning (Rp 15M) + Purchases (Rp 45M) - Ending (Rp 120M) = -Rp 60M [x]

Fix:
1. Navigate to Data  ->  Inventory table
2. Sort by amount (descending)
3. Look for outliers (10x normal values)
4. Correct typos
```

**C. Double-Counting Purchases**
```dax
// Detect duplicate purchase orders
Duplicate_PO_Check =
CALCULATE(
 COUNTROWS(Purchases),
 FILTER(
 Purchases,
 COUNTROWS(
 FILTER(
 Purchases,
 Purchases[PurchaseOrderID] = EARLIER(Purchases[PurchaseOrderID])
 )
 ) > 1
 )
)
```

Fix: Remove duplicates based on PurchaseOrderID.

---

## 2. Recipe Configuration Issues

### Problem: Recipe Costs Don't Match Reality

**Step 1: Verify Ingredient Prices**
```
1. Open "Ingredients" table in Power BI
2. Compare prices with recent purchase orders
3. Common issues:
 - Using price per kg when should be per gram
 - Outdated prices (6 months old)
 - Wrong currency (USD vs IDR)
```

**Fix Recipe Price Units:**
```dax
// If ingredient stored as Rp/kg but recipe uses grams
Correct_Unit_Cost =
IF(
 Ingredients[Unit] = "kg",
 Ingredients[CostPerUnit] / 1000, // Convert to cost per gram
 Ingredients[CostPerUnit]
)
```

**Step 2: Audit Recipe Quantities**
```
Example Error:
Latte recipe shows 1500ml milk (should be 150ml)

Result: Theoretical cost = Rp 27,000 (vs actual Rp 4,000)
Food cost % = 180% [x]

Fix:
1. Review each recipe ingredient
2. Verify portions match standard operating procedure
3. Update recipe quantities in system
```

### Problem: Recipe Cost Not Updating

**Cause:** Calculated column instead of measure.

**Solution:**
```dax
// [x] Wrong (calculated column, updates only on refresh)
Recipe_Cost =
SUMX(
 RELATEDTABLE(RecipeIngredients),
 RecipeIngredients[Quantity] * RELATED(Ingredients[Cost])
)

// [x] Correct (measure, updates in real-time)
Recipe_Cost =
SUMX(
 RecipeIngredients,
 RecipeIngredients[Quantity] * RELATED(Ingredients[CurrentCost])
)
```

Convert to measure if needed.

---

## 3. Variance Analysis Problems

### Problem: Can't Explain COGS Variance

**Systematic Approach:**

**Step 1: Calculate Each Variance Component**
```dax
Total_Variance = [Actual_COGS] - [Theoretical_COGS]

// Break down into:
Portion_Variance = [Over/Under Portioning Cost]
Price_Variance = [Ingredient Price Changes]
Mix_Variance = [Different Product Mix Than Expected]
Waste_Variance = [Recorded Waste Cost]
Unexplained_Variance =
 [Total_Variance] - [Portion_Variance] - [Price_Variance]
 - [Mix_Variance] - [Waste_Variance]
```

**Step 2: Investigate Largest Component**

If **Unexplained > 5%**:
- Likely: Theft, unrecorded waste, or data error
- Action: Physical inventory count + review security

If **Portion Variance > 3%**:
- Action: Barista retraining, portion control tools

If **Price Variance > 3%**:
- Action: Update budgeted prices, renegotiate with suppliers

### Problem: Theoretical COGS is Zero

**Cause:** Recipe-to-sales linking broken.

**Check:**
```dax
Sales_Without_Recipes =
CALCULATE(
 COUNTROWS(Sales),
 ISBLANK(RELATED(Recipes[RecipeID]))
)
```

If > 0:
1. Check Sales[ProductID] matches Recipes[ProductID]
2. Verify relationship is active
3. Ensure all products have recipes defined

---

## 4. Inventory Reconciliation

### Problem: System Inventory != Physical Count

**Expected:** < 2% variance
**If > 5%:** Serious issue requiring investigation

**Reconciliation Process:**

**1. Run Cycle Count**
```
Daily: Count high-value items (coffee beans, premium ingredients)
Weekly: Count 20% of inventory (rotating)
Monthly: Full physical count
```

**2. Compare System vs. Physical**
```dax
Inventory_Variance_Pct =
DIVIDE(
 [System_Quantity] - [Physical_Quantity],
 [Physical_Quantity],
 0
) * 100
```

**3. Investigate Discrepancies**

Common causes:
| Variance | Likely Cause |
|----------|--------------|
| System > Physical | Unrecorded waste, theft, unit conversion error |
| Physical > System | Unrecorded purchases, unit conversion error |
| High for 1 item only | Data entry error for that item |
| High across all items | System-wide issue (wrong multiplier?) |

**4. Adjust System to Match Physical**
```
1. Create "Inventory Adjustment" transaction
2. Record variance amount
3. Tag with reason (Waste/Theft/Count Error)
4. Reset system inventory to physical count
```

---

## 5. Waste Tracking Issues

### Problem: Waste Not Being Recorded

**Signs:**
- COGS variance consistently high
- Theoretical << data
- Waste log has limited/no entries

**Solutions:**

**A. Make Waste Tracking Easy**
```
Before: Fill out 10-field form
After: Scan item barcode  ->  Select reason  ->  Done

Reduce friction = Better compliance
```

**B. Gamify Waste Tracking**
```
Display on staff dashboard:
 Lowest Waste This Week: Afternoon Shift (1.2%)
 Your Shift Waste: 2.8% (Target: < 2%)
```

**C. Mandatory Waste Entry**
```
End-of-shift protocol:
Manager can't close shift in POS until waste is logged
Default: "No waste today" (requires manager approval)
```

### Problem: Waste Categories Unclear

**Before (Confusing):**
- "Spoiled"
- "Broken"
- "Extra"

**After (Clear):**
- " Expired - Past use-by date"
- "⚡ Spilled - Handling error"
- " Over-portioned - Made wrong size"
- " Damaged on receipt - Supplier issue"
- "- Other - Describe"

Clearer categories = More accurate data.

---

## Common Error Messages

### "Relationship between tables not found"

**Fix:**
1. Go to Modeling  ->  Manage Relationships
2. Create relationship:
 - RecipeIngredients[IngredientID]  <->  Ingredients[IngredientID]
 - Sales[ProductID]  <->  Recipes[ProductID]
3. Ensure "Active" checkbox is checked

### "CircularDependency in calculation"

**Cause:** Recipe A contains Recipe B, which contains Recipe A.

**Example:**
```
"Special Latte" recipe includes "Latte"
"Latte" recipe includes "Special Latte" (wrong!)
```

**Fix:** Review recipe hierarchies, remove circular references.

---

## Performance Issues

### Problem: COGS Dashboard Loads Slowly

**Quick Fixes:**

**1. Limit Historical Data**
```dax
// Add to all measures
Filtered_COGS =
IF(
 MAX('Calendar'[Date]) >= DATE(2025, 1, 1), // Only 2025+
 [COGS_Measure],
 BLANK()
)
```

**2. Pre-Aggregate Recipe Costs**
```
Instead of: Calculating recipe cost for each transaction
Do: Store recipe cost in Recipes table (updated monthly)
```

**3. Reduce Visual Complexity**
```
Remove:
- Large tables with 100+ rows
- Complex custom visuals
- Unnecessary animations

Keep:
- 3-5 key KPIs
- 2-3 focused charts
- Use drill-through for details
```

---

## Getting Help

### Before Contacting Support

**Gather:**
1. Screenshot of unexpected result
2. Sample data export (5-10 rows)
3. List of what you've tried
4. Impact (affects all locations or just one?)

### Support Channels

| Issue | Contact |
|-------|---------|
| Critical (can't operate) | Slack: @support-urgent |
| High (workaround exists) | Email: support@pwbi.co.id |
| Question | Slack: #r2-cogs-help |

### Self-Service

- [Troubleshooting Videos](https://youtube.com/pwbi-r2c)
- [[biz/knowledge-base/knowledge-base|Knowledge Base]]
- [Community Forum](https://community.pwbi.co.id)

---

## Appendix: Diagnostic Queries

### Check Data Completeness
```dax
Days_Missing_Sales =
COUNTROWS(
 FILTER(
 'Calendar',
 ISBLANK([Total_Revenue]) && [Date] < TODAY()
 )
)

Days_Missing_Inventory =
COUNTROWS(
 FILTER(
 'Calendar',
 ISBLANK([Ending_Inventory]) && [Date] < TODAY()
 )
)
```

### Find Outlier Transactions
```dax
Outlier_Purchases =
FILTER(
 Purchases,
 Purchases[UnitPrice] > AVERAGE(Purchases[UnitPrice]) * 3
 // Price 3x higher than average
)
```

### Recipe Coverage Check
```dax
Products_Without_Recipes =
FILTER(
 Products,
 ISBLANK(RELATED(Recipes[RecipeID]))
)

Recipe_Coverage_Pct =
DIVIDE(
 COUNTROWS(FILTER(Products, NOT(ISBLANK(RELATED(Recipes[RecipeID]))))),
 COUNTROWS(Products),
 0
) * 100
// Target: 100%
```

---

**Document Version:** 1.0
**Support:** docs@pwbi.co.id

