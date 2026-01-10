# R2c: COGS Analytics - Quick Start Guide

**Module:** R2c - Cost of Goods Sold Analytics
**Training Level:** Beginner
**Estimated Time:** 25 minutes

---

## What You'll Learn

- Understanding COGS in F&B context
- Navigating the COGS Dashboard
- Tracking food cost percentage
- Identifying waste and theft
- Setting up variance alerts

---

## Prerequisites

- R2 Analytics Suite installed
- Recipe data configured (ingredients + portions)
- Inventory tracking enabled
- Basic Power BI navigation

---

## Part 1: COGS Fundamentals (5 min)

### What is COGS?

**COGS = Cost of Goods Sold** = Direct costs to produce items sold.

For F&B:
```
COGS = Beginning Inventory + Purchases - Ending Inventory
```

**Example (Kopi Kenangan - December):**
```
Beginning Inventory (Dec 1): Rp 15 juta
+ Purchases (Dec 1-31): Rp 45 juta
- Ending Inventory (Dec 31): Rp 12 juta
= COGS for December: Rp 48 juta

If Revenue = Rp 150 juta
Food Cost % = Rp 48M / Rp 150M = 32%
```

### COGS vs. Other Costs

| Cost Type | Included in COGS? | Examples |
|-----------|-------------------|----------|
| **Direct Materials** | Yes | Coffee beans, milk, sugar, cups |
| **Direct Labor** | No (OpEx) | Barista wages |
| **Overhead** | No (OpEx) | Rent, utilities, marketing |
| **Spoilage/Waste** | Yes | Expired milk, spilled ingredients |

### Why COGS Matters

**Target Food Cost % for F&B:**
- Coffee shops: 25-30%
- Fast casual: 28-35%
- Fine dining: 30-35%

**Every 1% improvement = Big impact:**
```
Revenue: Rp 150 juta/month
Reduce COGS from 33% → 32% = Save Rp 1.5 juta/month = Rp 18 juta/year
```

---

## Part 2: Dashboard Tour (8 min)

### Opening the Dashboard

1. Open Power BI Desktop
2. Navigate to: **R2 Analytics Suite** → **R2c: COGS**
3. Start with **"COGS Overview"** page

### Key Visuals

#### 1. Food Cost Percentage Card (Top Left)
```
32.5%
↗ +1.2% vs last month
 Target: 30%
Above target by 2.5%
```

**Quick Read:**
- Green: On or below target
- Yellow: 1-2% above target (investigate)
- Red: >2% above target (action required)

#### 2. COGS Trend Chart (Center)
Shows daily COGS % over last 30 days.

**What to Look For:**
- Upward trend = costs increasing
- Spikes = investigate that day (waste event?)
- Flat line = consistent (good)

#### 3. Category Breakdown (Right Panel)
```
Coffee & Tea: 35% of COGS (Rp 16.8 juta)
Dairy: 25% of COGS (Rp 12 juta)
Syrups & Flavors: 15% of COGS (Rp 7.2 juta)
Cups & Packaging: 15% of COGS (Rp 7.2 juta)
Other: 10% of COGS (Rp 4.8 juta)
```

**Action:** Focus on top 2 categories (60% of costs).

#### 4. Variance Table (Bottom)
```
Item | Budget COGS | Actual COGS | Variance | %
Latte | Rp 3,500 | Rp 3,850 | +Rp 350 | +10% Americano | Rp 2,200 | Rp 2,150 | -Rp 50 | -2%
Cappuccino | Rp 3,800 | Rp 4,200 | +Rp 400 | +11%
```

**Red Flags:** Variance > 5% needs investigation.

---

## Part 3: Your First COGS Analysis (8 min)

### Exercise: Find Why Cappuccino Costs Are High

**Scenario:** Cappuccino theoretical cost = Rp 3,800, but actual = Rp 4,200 (+11%).

**Step 1: Check Recipe Adherence**
1. Navigate to **"Recipe Detail"** page
2. Filter to: Product = "Cappuccino"
3. View **Ingredient Usage** table:

```
Ingredient | Recipe Amount | Actual Used | Variance
Espresso | 30ml | 32ml | +7% Milk | 150ml | 165ml | +10%
Syrup | 15ml | 15ml | 0%
```

**Finding:** Baristas over-pouring milk (+15ml per drink).

**Impact:**
```
15ml extra milk × 500 cappuccinos/day × Rp 15/ml = Rp 112,500/day waste
= Rp 3.4 juta/month
```

**Step 2: Check for Waste**
1. Click **"Waste & Spillage"** tab
2. Review waste log:

```
Dec 15: 2L milk spilled (dropped container) = Rp 30,000
Dec 18: 5L milk expired = Rp 75,000
Total waste this month: Rp 420,000
```

**Step 3: Calculate Total Variance**
```
Over-portioning: Rp 3.4 juta
Waste: Rp 0.42 juta
Total excess cost: Rp 3.82 juta

Cappuccino revenue contribution: Rp 12 juta
Correctable COGS waste: 3.82M / 12M = 32% of product revenue!
```

**Step 4: Take Action**
 Retrain baristas on portion control
 Install portion markers on milk pitchers
 Implement FIFO for dairy inventory
 Set alert: Cappuccino COGS > Rp 4,000

---

## Part 4: Set Up Alerts (4 min)

### Configure COGS Threshold Alerts

1. Click **"Settings"** → **"Alerts"**
2. Create alert:

```
Alert Name: High COGS Warning
Trigger: Food Cost % > Target + 2%
Current Target: 30%
Alert Threshold: 32%
Check Frequency: Daily at 11 PM
Recipients: manager@kopikenangan.com, chef@kopikenangan.com
```

3. Click **"Save"** → **"Test Alert"**

### Recommended Alert Set

| Alert | Threshold | Action |
|-------|-----------|--------|
| Critical COGS | > Target + 3% | Immediate review, halt operations if needed |
| Warning COGS | > Target + 2% | Investigate within 24 hours |
| Item Variance | Single item +10% | Check recipe, supplier, waste |
| High Waste | Daily waste > Rp 200K | Review handling procedures |

---

## Quick Reference: Common Tasks

### Task 1: Daily COGS Check (2 min)
```
1. Open "COGS Overview" page
2. Check Food Cost % card → Green? Done
3. If yellow/red → Note items in Variance Table
4. Drill into those items → Investigate
```

### Task 2: Weekly COGS Review (15 min)
```
1. Run "Week-over-Week" comparison
2. Identify trends (up/down)
3. Review top 5 variance items
4. Check waste logs
5. Adjust orders if needed
```

### Task 3: Theoretical vs. Actual Reconciliation (Monthly, 30 min)
```
1. Navigate to "Reconciliation" page
2. Run "Theoretical COGS" calculation
3. Compare with "Actual COGS"
4. Investigate gap:
 - Over-portioning
 - Theft
 - Unrecorded waste
 - Recipe errors
5. Document findings
6. Implement corrective actions
```

---

## Key Metrics Explained

### 1. Food Cost Percentage
```
Food Cost % = (COGS / Revenue) × 100

Healthy Range (F&B):
Coffee: 25-30%
Restaurant: 28-35%
Bakery: 25-30%
```

### 2. Theoretical vs. Actual COGS
```
Theoretical COGS = Sum of (Recipe Cost × Items Sold)
Actual COGS = Beginning Inv + Purchases - Ending Inv

Variance = Actual - Theoretical
Acceptable Variance: < 3%
```

### 3. Portion Cost
```
Portion Cost = Total Recipe Ingredient Cost

Example Latte:
- 30ml espresso @ Rp 50/ml = Rp 1,500
- 150ml milk @ Rp 15/ml = Rp 2,250
- Cup & lid = Rp 500
= Total Portion Cost: Rp 4,250
```

If selling at Rp 15,000 → Food Cost = 28.3%

---

## Common Mistakes to Avoid

### Mistake 1: Not Accounting for Waste
**Problem:** Waste not logged = inflated COGS
**Fix:** Log all waste daily in system

### Mistake 2: Outdated Recipe Costs
**Problem:** Ingredient prices change, recipes not updated
**Fix:** Update recipe costs monthly or when prices change >10%

### Mistake 3: Ignoring Small Variances
**Problem:** "It's only 2%, not a big deal"
**Reality:** 2% on Rp 50M revenue = Rp 12M/year
**Fix:** Investigate any variance > 1%

### Mistake 4: Not Training Staff
**Problem:** Baristas don't understand COGS impact
**Fix:** Monthly training on portion control & cost awareness

---

## Quick Wins (Do These Today!)

### 5-Minute Wins
1. **Check your current food cost %** → Compare to target
2. **Find your #1 cost driver** → Focus optimization here
3. **Enable daily COGS alert** → Stay informed automatically

### 30-Minute Wins
1. **Audit top 3 recipes** → Verify costs are current
2. **Review last week's waste log** → Identify patterns
3. **Calculate theoretical vs actual** → Find the gap

---

## Next Steps

**Completed Quick Start?**

 You can now:
- Navigate the COGS dashboard
- Identify high-cost items
- Track food cost percentage
- Set up basic alerts

**Ready for More:**
- Next: [[advanced-guide|Advanced COGS Guide]]
 - Recipe optimization
 - Supplier cost analysis
 - Predictive COGS modeling
 - Custom variance reports

- Practice: [[../../../../../../biz/departments/finance/training/cogs-analysis|COGS Analysis Exercise]]

**Need Help:**
- Slack: #r2-cogs-help
- Email: support@pwbi.co.id
- Videos: [R2c Training Playlist](https://youtube.com/pwbi-r2c)

---

## Checklist: Quick Start Complete

- [ ] Understand COGS vs. OpEx distinction
- [ ] Can navigate COGS Dashboard
- [ ] Know how to read Food Cost % card
- [ ] Can identify variance items
- [ ] Set up at least one alert
- [ ] Completed the Cappuccino analysis exercise
- [ ] Understand theoretical vs. actual concept

**Completion Time:** _____ minutes
**Ready for Advanced?** Yes / Need more practice

---

**Last Updated:** December 2025
**Version:** 1.0
**Feedback:** training@pwbi.co.id
