# R2b: Cash Flow Analytics - Advanced Guide

**Module:** R2b - Cash Flow Analytics
**Training Level:** Advanced
**Estimated Time:** 90 minutes

---

## Prerequisites

- [x] Completed [[quick-start|Quick Start Guide]]
- [x] 2+ weeks using R2b daily
- [x] Power BI intermediate skills (DAX basics)

---

## Section 1: Advanced Forecasting

### 1.1 Scenario Planning

Create multiple forecast scenarios for better planning.

**Step 1: Create Scenario Table**
```dax
ScenarioTable =
DATATABLE(
 "ScenarioName", STRING,
 "RevenueGrowth", DOUBLE,
 "COGSPercent", DOUBLE,
 {
 {"Base Case", 0.05, 0.35},
 {"Best Case", 0.15, 0.33},
 {"Worst Case", -0.10, 0.37}
 }
)
```

**Step 2: Create Forecasting Measures**
```dax
Forecasted_Revenue =
VAR Growth = SELECTEDVALUE(ScenarioTable[RevenueGrowth])
VAR LastRevenue = [Last Month Revenue]
VAR MonthsOut = [Months From Now]
RETURN LastRevenue * POWER(1 + Growth, MonthsOut)

Forecasted_OCF =
VAR Revenue = [Forecasted_Revenue]
VAR COGS = Revenue * SELECTEDVALUE(ScenarioTable[COGSPercent])
VAR OpEx = 40000000 // Adjust based on your business
RETURN Revenue - COGS - OpEx
```

### 1.2 Seasonal Adjustments

Apply seasonal patterns to improve forecast accuracy.

```dax
Seasonal_Index =
VAR AvgAllMonths = CALCULATE(AVERAGE(Sales[Revenue]), ALL('Calendar'[Month]))
VAR AvgThisMonth = AVERAGE(Sales[Revenue])
RETURN DIVIDE(AvgThisMonth, AvgAllMonths, 1)

Seasonally_Adjusted_Forecast =
[Forecasted_Revenue] * [Seasonal_Index]
```

**Example:** December index = 1.35 means 35% above average (holiday season).

### 1.3 Confidence Intervals

Show forecast uncertainty with confidence bands.

```dax
Forecast_StdDev = STDEV.P(ABS([Actual Revenue] - [Forecasted Revenue]))

Forecast_Upper_Bound = [Forecasted_Revenue] + (1.65 * [Forecast_StdDev])
Forecast_Lower_Bound = [Forecasted_Revenue] - (1.65 * [Forecast_StdDev])
```

---

## Section 2: Cash Optimization

### 2.1 Working Capital Metrics

```dax
Days_Inventory_Outstanding =
DIVIDE([Average Inventory], [Daily COGS], BLANK())

Days_Sales_Outstanding =
DIVIDE([Average Receivables], [Daily Revenue], BLANK())

Days_Payables_Outstanding =
DIVIDE([Average Payables], [Daily COGS], BLANK())

Net_Operating_Cycle =
[Days_Inventory_Outstanding] + [Days_Sales_Outstanding] - [Days_Payables_Outstanding]
```

**Target:** Reduce net operating cycle to < 15 days for F&B.

### 2.2 Cash Conversion Score

```dax
Cash_Conversion_Score =
VAR WCScore = IF([Working_Capital_Ratio] BETWEEN 1.5 AND 2, 100, 50)
VAR CycleScore = IF([Net_Operating_Cycle] <= 15, 100, 50)
VAR RunwayScore = IF([Cash_Runway_Days] >= 60, 100, 50)
RETURN (WCScore + CycleScore + RunwayScore) / 3
```

**Interpretation:**
- 90-100: Excellent
- 75-89: Good
- 50-74: Needs attention
- < 50: Critical

---

## Section 3: Multi-Location Management

### 3.1 Consolidated Cash View

```dax
Total_Cash_All_Locations =
SUMX(VALUES(Locations[LocationID]), [Cash_Balance])

Cash_by_Region =
SUMMARIZE(
 Locations,
 Locations[Region],
 "Total Cash", [Total_Cash_All_Locations]
)
```

### 3.2 Cash Pooling Optimization

```dax
Optimal_Cash_Pool =
VAR TotalCash = [Total_Cash_All_Locations]
VAR MinRequired = SUMX(VALUES(Locations[LocationID]), [Minimum_Operating_Cash])
RETURN TotalCash - MinRequired

Location_Transfer_Amount =
VAR Surplus = [Cash_Balance] - [Minimum_Operating_Cash]
RETURN IF(Surplus > 0, Surplus, 0)
```

---

## Section 4: Advanced Metrics

### Custom DAX Measures

**Cash Flow Volatility:**
```dax
Cash_Flow_Volatility =
VAR StdDev = STDEV.P([Daily Cash Flow])
VAR AvgCashFlow = AVERAGE([Daily Cash Flow])
RETURN DIVIDE(StdDev, ABS(AvgCashFlow), BLANK())
// < 0.3 = Stable, > 0.6 = High volatility
```

**Emergency Fund Adequacy:**
```dax
Emergency_Fund_Percentage =
DIVIDE([Cash_Balance], [Monthly_Operating_Expenses] * 3, BLANK()) * 100
// Target: 100% or higher
```

**Cash Generation Efficiency:**
```dax
Cash_Per_Revenue =
DIVIDE([Operating_Cash_Flow], [Total_Revenue], BLANK())
// F&B Benchmark: 15-25%
```

---

## Section 5: System Integrations

### 5.1 Bank Feed Setup

Supported Indonesian banks:
- BCA (Real-time)
- Mandiri (Daily batch)
- BNI (Real-time)
- CIMB Niaga (Daily batch)

**Integration Pattern:**
```
Bank API  ->  Power Automate  ->  Azure SQL  ->  Power BI
```

### 5.2 Accounting System Sync

Connect with Accurate, Jurnal, or SAP:
- Real-time: Cash transactions
- Daily: Payables/Receivables
- Monthly: Full reconciliation

---

## Advanced Scenarios

### Scenario 1: New Location Opening

Model cash needs from pre-opening through breakeven:

```dax
New_Location_Cashflow =
VAR PreOpening = IF([Month] = 0, -50000000, 0) // Rp 50M setup
VAR Revenue =
 SWITCH([Month],
 1, 15000000, // Month 1: Soft opening
 2, 25000000, // Month 2: Ramping up
 3, 35000000, // Month 3: Near full
 40000000 // Month 4+: Stabilized
 )
VAR COGS = Revenue * 0.35
VAR OpEx = 25000000
RETURN PreOpening + Revenue - COGS - OpEx
```

**Peak funding need:** ~Rp 80 juta (month 3).

### Scenario 2: Equipment Financing Decision

Compare cash purchase vs. financing:

```dax
Cash_Purchase_Impact = IF([Month] = 1, -100000000, [Tax_Benefit])
Finance_Purchase_Impact = -3121000 // Monthly payment at 8% APR
```

Use NPV analysis with 10% discount rate to decide.

---

## Mastery Checklist ✓

- [ ] Built 3-scenario forecasts
- [ ] Implemented seasonal adjustments
- [ ] Created confidence intervals
- [ ] Optimized working capital by 15%+
- [ ] Set up multi-location consolidated view
- [ ] Integrated bank feed
- [ ] Used cash modeling for strategic decisions

**Completion Date:** __________
**Next:** [[troubleshooting|Troubleshooting Guide]]

---

**Last Updated:** December 2025
**Support:** advanced-support@pwbi.co.id


---

**Related Documents:**
- [[products/04-accounting-module/04-accounting-module|Product Overview]] - Main product documentation
- [[products/04-accounting-module/product-variants/product-variants|Product Variants Hub]] - All variants

