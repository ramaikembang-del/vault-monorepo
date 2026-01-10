# R2c: COGS Analytics - Advanced Guide

**Module:** R2c - Cost of Goods Sold Analytics
**Training Level:** Advanced
**Estimated Time:** 75 minutes

---

## Prerequisites

- Completed [[quick-start|Quick Start Guide]]
- 2+ weeks using R2c daily
- Understanding of recipe management
- Power BI DAX basics

---

## Section 1: Recipe Optimization

### 1.1 Recipe Cost Engineering

Optimize recipes for cost without sacrificing quality.

**Framework:**
```
1. Calculate current recipe cost
2. Identify high-cost ingredients
3. Find substitutes or alternatives
4. Test new recipe
5. Validate customer satisfaction
6. Roll out if successful
```

### Example: Optimizing Latte Recipe

**Current Recipe (250ml Latte):**
```
Ingredient | Amount | Cost/Unit | Total Cost
Espresso (premium) | 30ml | Rp 60/ml | Rp 1,800
Whole milk | 150ml | Rp 18/ml | Rp 2,700
Syrup | 15ml | Rp 40/ml | Rp 600
Cup & lid | 1 set | Rp 500 | Rp 500
Total: Rp 5,600

Selling Price: Rp 18,000
Food Cost %: 31.1%
```

**Optimization Options:**

**Option A: Ingredient Substitution**
```
Change: Premium espresso → House blend
Savings: Rp 60/ml → Rp 45/ml
New espresso cost: Rp 1,350 (-Rp 450)
New total: Rp 5,150
New food cost: 28.6% (-2.5%)
```

**Option B: Portion Adjustment**
```
Change: Reduce milk 150ml → 140ml
Savings: -10ml × Rp 18 = -Rp 180
Customer impact: Minimal (still full cup with foam)
New total: Rp 5,420
New food cost: 30.1% (-1%)
```

**Option C: Bulk Purchasing**
```
Current: Buy milk in 10L containers @ Rp 18/ml
Negotiate: Buy in 50L weekly @ Rp 15/ml (-17%)
Savings: 150ml × Rp 3 = Rp 450
New total: Rp 5,150
New food cost: 28.6% (-2.5%)
```

### 1.2 DAX for Recipe Analysis

**Find Most Profitable Items:**
```dax
Item_Contribution_Margin =
VAR Revenue = [Total_Revenue]
VAR COGS = [Total_COGS]
RETURN Revenue - COGS

Item_CM_Percentage =
DIVIDE([Item_Contribution_Margin], [Total_Revenue], 0)

// Rank items by profitability
Item_Profit_Rank =
RANKX(
 ALL(Products[ProductName]),
 [Item_Contribution_Margin],
 ,
 DESC,
 DENSE
)
```

**Identify Problem Items:**
```dax
High_Cost_Low_Volume_Flag =
VAR FoodCostPct = DIVIDE([Total_COGS], [Total_Revenue], 0)
VAR Volume = [Items_Sold]
RETURN
 IF(
 FoodCostPct > 0.35 && Volume < 50, // High cost, low sales
 " Consider Removing",
 IF(
 FoodCostPct > 0.35 && Volume >= 50,
 "Optimize Recipe",
 " Acceptable"
 )
 )
```

---

## Section 2: Supplier Cost Management

### 2.1 Multi-Supplier Price Comparison

Track prices across suppliers to negotiate better.

**Data Model:**
```
Suppliers Table:
- SupplierID
- SupplierName
- Rating
- PaymentTerms

Purchases Table:
- PurchaseID
- SupplierID (FK)
- IngredientID (FK)
- Date
- Quantity
- UnitPrice
- TotalCost
```

**Price Comparison Measures:**
```dax
Avg_Unit_Price =
AVERAGE(Purchases[UnitPrice])

Lowest_Price_Supplier =
CALCULATE(
 MIN(Purchases[UnitPrice]),
 ALLEXCEPT(Purchases, Purchases[IngredientID])
)

Price_vs_Best =
DIVIDE(
 [Avg_Unit_Price] - [Lowest_Price_Supplier],
 [Lowest_Price_Supplier],
 0
) * 100
// Positive % = paying X% more than best price
```

**Visualization:**
Create matrix showing:
```
Ingredient | Supplier A | Supplier B | Supplier C | Best Price
Coffee Beans | Rp 85K/kg | Rp 82K/kg | Rp 88K/kg | Rp 82K
Milk | Rp 16/ml | Rp 18/ml | Rp 17/ml | Rp 16/ml
Sugar | Rp 12K/kg | Rp 11K/kg | Rp 13K/kg | Rp 11K

Potential Annual Savings: Rp 15.4 juta (if switch to best for each)
```

### 2.2 Purchase Volume Analysis

Identify opportunities for bulk discounts.

```dax
Monthly_Purchase_Volume =
SUMX(
 VALUES(Purchases[IngredientID]),
 CALCULATE(SUM(Purchases[Quantity]))
)

Bulk_Discount_Opportunity =
VAR CurrentVolume = [Monthly_Purchase_Volume]
VAR BulkThreshold = 100 // kg or liters
VAR CurrentPrice = [Avg_Unit_Price]
VAR BulkPrice = CurrentPrice * 0.9 // Assumed 10% discount
VAR PotentialSavings =
 IF(
 CurrentVolume >= BulkThreshold,
 CurrentVolume * (CurrentPrice - BulkPrice),
 BLANK()
 )
RETURN PotentialSavings
```

---

## Section 3: Waste Analytics

### 3.1 Waste Pattern Detection

Identify systematic waste issues vs. one-offs.

**Categorize Waste:**
```dax
Waste_Category =
SWITCH(
 TRUE(),
 Waste[Reason] = "Expired", " Spoilage",
 Waste[Reason] = "Spilled", " Handling Error",
 Waste[Reason] = "Over-portioned", " Portion Control",
 Waste[Reason] = "Damaged", "Receiving Issue",
 " Other"
)
```

**Calculate Waste by Category:**
```dax
Waste_Cost_by_Category =
CALCULATE(
 SUM(Waste[Cost]),
 ALLEXCEPT(Waste, Waste[Waste_Category])
)

Waste_Percentage_of_COGS =
DIVIDE([Waste_Cost_by_Category], [Total_COGS], 0) * 100
```

**Acceptable Waste Benchmarks:**
- Spoilage: < 1% of COGS
- Handling errors: < 0.5% of COGS
- Portion control: < 1.5% of COGS
- **Total waste: < 3% of COGS**

### 3.2 Predictive Waste Modeling

Forecast waste to adjust ordering.

```dax
Historical_Waste_Rate =
CALCULATE(
 DIVIDE(SUM(Waste[Cost]), SUM(Purchases[TotalCost]),0),
 DATESINPERIOD('Calendar'[Date], LASTDATE('Calendar'[Date]), -30, DAY)
)

Expected_Waste_Next_Period =
[Planned_Purchases] * [Historical_Waste_Rate]

Adjusted_Order_Quantity =
VAR PlannedUsage = [Forecasted_Usage]
VAR ExpectedWaste = PlannedUsage * [Historical_Waste_Rate]
RETURN PlannedUsage + ExpectedWaste
```

---

## Section 4: Theoretical vs. Actual Analysis

### 4.1 Building Theoretical COGS Model

**Theoretical COGS** = What it *should* cost based on recipes.

```dax
Theoretical_COGS =
SUMX(
 Sales,
 Sales[Quantity] * RELATED(Recipes[StandardCost])
)

Actual_COGS =
[Beginning_Inventory] + [Purchases] - [Ending_Inventory]

COGS_Variance = [Actual_COGS] - [Theoretical_COGS]

Variance_Percentage =
DIVIDE([COGS_Variance], [Theoretical_COGS], 0) * 100
```

### 4.2 Root Cause Analysis

**Variance Drivers:**

```dax
// Portion variance (over/under-portioning)
Portion_Variance =
SUMX(
 Products,
 ([Actual_Portion_Size] - [Recipe_Portion_Size]) * [Ingredient_Cost] * [Items_Sold]
)

// Theft/shrinkage
Shrinkage_Estimate =
[COGS_Variance] - [Portion_Variance] - [Recorded_Waste]

// Price variance (paid different price than budgeted)
Price_Variance =
SUMX(
 Purchases,
 (Purchases[ActualUnitPrice] - RELATED(Budget[BudgetedPrice])) * Purchases[Quantity]
)
```

**Waterfall Chart:**
```
Theoretical COGS: Rp 45 juta
+ Portion variance: +Rp 2.1 juta (over-portioning)
+ Price variance: +Rp 1.5 juta (ingredient price increases)
+ Waste: +Rp 0.9 juta
+ Shrinkage: +Rp 0.8 juta (unaccounted, possible theft)
= Actual COGS: Rp 50.3 juta

Total Variance: +11.8% Needs action
```

---

## Section 5: Menu Engineering

### 5.1 Menu Mix Analysis

Classify menu items by profitability and popularity.

**Classification Matrix:**
```
 High Profitability | Low Profitability
High Popularity | STARS | PLOWHORSES
Low Popularity | PUZZLES | DOGS
```

**DAX Implementation:**
```dax
Avg_Contribution_Margin =
CALCULATE(
 AVERAGE([Item_Contribution_Margin]),
 ALL(Products)
)

Avg_Sales_Volume =
CALCULATE(
 AVERAGE([Items_Sold]),
 ALL(Products)
)

Menu_Category =
VAR IsHighProfit = [Item_Contribution_Margin] > [Avg_Contribution_Margin]
VAR IsHighVolume = [Items_Sold] > [Avg_Sales_Volume]
RETURN
 SWITCH(
 TRUE(),
 IsHighProfit && IsHighVolume, " STAR",
 NOT(IsHighProfit) && IsHighVolume, " PLOWHORSE",
 IsHighProfit && NOT(IsHighVolume), " PUZZLE",
 " DOG"
 )
```

**Action Plan by Category:**

| Category | Strategy |
|----------|----------|
| **STARS** | Promote heavily, maintain quality, don't discount |
| **PLOWHORSES** | Increase price slightly, reduce portion cost, or reposition |
| **PUZZLES** | Promote more (undermarketed), or reposition on menu |
| **DOGS** | Remove from menu or complete recipe overhaul |

### 5.2 Price Optimization

Find optimal price point balancing volume and margin.

```dax
Price_Elasticity =
VAR PriceChange = DIVIDE([Current_Price] - [Previous_Price], [Previous_Price], 0)
VAR VolumeChange = DIVIDE([Current_Volume] - [Previous_Volume], [Previous_Volume], 0)
RETURN
 IF(PriceChange = 0, BLANK(), DIVIDE(VolumeChange, PriceChange, 0))

Optimal_Price =
VAR CurrentPrice = [Current_Price]
VAR Elasticity = [Price_Elasticity]
VAR CurrentVolume = [Current_Volume]
VAR UnitCost = [Portion_Cost]
RETURN
 // Simplified optimal price formula (assumes linear demand)
 (CurrentPrice + UnitCost) / 2
 // Note: This is a starting point; refine with actual demand curves
```

---

## Section 6: Advanced Dashboards

### 6.1 Executive COGS Dashboard

Key metrics for leadership:

**KPI Cards:**
```dax
// Primary metric
Overall_Food_Cost_Pct =
DIVIDE([Total_COGS], [Total_Revenue], 0) * 100

// Trend indicator
Food_Cost_MoM_Change =
VAR ThisMonth = [Overall_Food_Cost_Pct]
VAR LastMonth = CALCULATE([Overall_Food_Cost_Pct], PREVIOUSMONTH('Calendar'[Date]))
RETURN ThisMonth - LastMonth

// Benchmark comparison
vs_Industry_Benchmark =
[Overall_Food_Cost_Pct] - 30 // Assuming 30% benchmark
```

### 6.2 Operational COGS Dashboard

Detailed view for kitchen/operations:

**Visuals to Include:**
1. Real-time food cost % (updates hourly)
2. Top 10 variance items (today)
3. Waste log (last 7 days)
4. Recipe adherence by shift
5. Inventory turnover rate

**Shift Comparison:**
```dax
Food_Cost_by_Shift =
CALCULATE(
 [Overall_Food_Cost_Pct],
 ALLEXCEPT(Sales, Sales[Shift])
)

// Identify problem shift
Worst_Performing_Shift =
TOPN(
 1,
 VALUES(Sales[Shift]),
 [Food_Cost_by_Shift],
 DESC
)
```

---

## Advanced Scenarios

### Scenario 1: Seasonal Menu Planning

Adjust menu based on ingredient seasonality and cost.

**Track Seasonal Price Patterns:**
```dax
Ingredient_Price_by_Month =
AVERAGEX(
 FILTER(
 Purchases,
 MONTH(Purchases[Date]) = [Selected_Month]
 ),
 Purchases[UnitPrice]
)

Seasonal_Index =
DIVIDE(
 [Ingredient_Price_by_Month],
 AVERAGE(Purchases[UnitPrice]),
 1
)
```

**Example:**
```
Strawberries:
- Jan-Mar: Index = 1.4 (40% more expensive, imported)
- Apr-Jun: Index = 0.8 (20% cheaper, local harvest)
- Jul-Sep: Index = 1.2
- Oct-Dec: Index = 1.0

Action: Feature strawberry drinks in Apr-Jun, reduce inJan-Mar
```

### Scenario 2: New Product Launch Cost Modeling

Forecast COGS before launching new item.

```dax
New_Product_Forecasted_COGS_Pct =
VAR RecipeCost = [New_Product_Recipe_Cost]
VAR EstimatedPrice = [Proposed_Selling_Price]
VAR ExpectedWaste = RecipeCost * 0.05 // Assume 5% waste initially
VAR AdjustedCost = RecipeCost + ExpectedWaste
RETURN
 DIVIDE(AdjustedCost, EstimatedPrice, 0) * 100
```

**Launch Decision Framework:**
```
If Forecasted COGS % < Target - 2%: Launch at proposed price
If Forecasted COGS % within Target ± 2%: Launch with close monitoring
If Forecasted COGS % > Target + 2%: Revise recipe or increase price
```

---

## Mastery Checklist

- [ ] Optimized at least 3 recipes for cost
- [ ] Conducted multi-supplier price analysis
- [ ] Implemented waste categorization and tracking
- [ ] Built theoretical vs. actual variance model
- [ ] Performed menu mix analysis
- [ ] Created custom COGS dashboards
- [ ] Used seasonal data for menu planning

**Completion Date:** __________
**Next:** [[troubleshooting|Troubleshooting Guide]]

---

**Last Updated:** December 2025
**Support:** advanced-support@pwbi.co.id
