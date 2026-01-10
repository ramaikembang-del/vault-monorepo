# Modular Metrics Catalog - Power BI Dashboard

**Product:** A1 - Power BI Dashboard
**Scope:** Modular framework with 150 total metrics organized in 12 modules
**Approach:** Choose the modules you need based on your business maturity

---

## Overview

This Power BI template uses a **modular metrics framework**:

- **Total Metrics Available:** 150 metrics organized into 12 modules
- **Start Small:** Begin with 30 base metrics (3 core modules)
- **Add As You Grow:** Add professional and strategic modules as needed
- **Pay For What You Use:** Each tier includes different module combinations

**Module Organization:**
- **Base Modules (30 metrics):** Included in all tiers
- **Tier 1 Options (30 metrics):** Add 10-20 metrics to base (choose 1-2 modules)
- **Tier 2 Professional (50 metrics):** Multi-outlet, advanced menu, workforce, customer mastery
- **Tier 3 Strategic (50 metrics):** Executive intelligence, advanced analytics

---

## BASE MODULES (All Tiers) - 30 Metrics

Included in Tier 1 Basic (Rp 3.5M) and above.

### Module B1: Revenue Core (10 metrics)

**Purpose:** Track daily revenue performance and basic trends

| # | Metric Name | Formula/Definition | Business Question | Target/Benchmark |
|---|-------------|-------------------|------------------|------------------|
| 1 | **Daily Revenue** | SUM(Sales[TotalAmount]) filtered to selected date | How much did we make today? | Daily target ÷ 30 |
| 2 | **Weekly Revenue** | SUM(Sales[TotalAmount]) for last 7 days | Weekly performance? | Track trend |
| 3 | **Monthly Revenue** | SUM(Sales[TotalAmount]) for current month | Monthly total? | Monthly target |
| 4 | **Revenue vs Target** | [Actual Revenue] ÷ [Target Revenue] × 100% | On track? | ≥ 95% |
| 5 | **Revenue Growth (MoM)** | (This Month - Last Month) ÷ Last Month × 100% | Growing? | ≥ 5% |
| 6 | **Revenue Growth (YoY)** | (This Year - Last Year) ÷ Last Year × 100% | Year-over-year growth? | ≥ 10% |
| 7 | **Peak Hours Revenue** | Revenue during identified peak hours | Best performing hours? | Identify top 3 |
| 8 | **Payment Method Split** | % breakdown by cash/card/digital | Payment preferences? | Track mix |
| 9 | **Walk-in Revenue** | SUM(Sales) WHERE IsReservation = FALSE | Walk-in contribution? | 50-65% |
| 10 | **Reservation Revenue** | SUM(Sales) WHERE IsReservation = TRUE | Reservation contribution? | 15-30% |

**Data Required:** Sales_Data (TransactionDate, TotalAmount, PaymentMethod, IsReservation), Targets table

---

### Module B2: Menu Essentials (10 metrics)

**Purpose:** Understand what sells and basic profitability

| # | Metric Name | Formula/Definition | Business Question | Target/Benchmark |
|---|-------------|-------------------|------------------|------------------|
| 11 | **Top 10 Sellers (Quantity)** | TOPN(10, Products, [Quantity Sold]) | Most popular items? | Monitor shifts |
| 12 | **Top 10 Sellers (Revenue)** | TOPN(10, Products, [Revenue]) | Highest revenue items? | Focus on these |
| 13 | **Bottom 5 Performers** | BOTTOMN(5, Products, [Revenue]) | What's not selling? | Consider removal |
| 14 | **Basic Food Cost %** | Food COGS ÷ Food Revenue × 100% | Food profitability? | 28-35% |
| 15 | **Beverage Cost %** | Beverage COGS ÷ Beverage Revenue × 100% | Beverage profitability? | 20-25% |
| 16 | **Gross Margin by Category** | (Revenue - COGS) ÷ Revenue by category | Category profitability? | Track by category |
| 17 | **Category Mix %** | Each category revenue ÷ Total revenue | Revenue distribution? | Balanced mix |
| 18 | **Product Profitability Rank** | Rank products by margin | Most profitable items? | Promote top items |
| 19 | **Average Order Value** | Total Revenue ÷ Transaction Count | How much per order? | Rp 85-150K |
| 20 | **Menu Item Count** | COUNT(DISTINCT Products) | How many items? | Track complexity |

**Data Required:** Sales_Data, Product_Categories (ProductName, Category, CostPrice, SellPrice)

---

### Module B3: Staff & Customer Basics (10 metrics)

**Purpose:** Basic staff productivity and customer counting

| # | Metric Name | Formula/Definition | Business Question | Target/Benchmark |
|---|-------------|-------------------|------------------|------------------|
| 21 | **Sales per Staff** | Total Sales ÷ Active Staff Count | Staff productivity? | Track average |
| 22 | **Sales per Hour** | Staff Sales ÷ Hours Worked | Hourly productivity? | Benchmark team avg |
| 23 | **Staff Leaderboard (Top 3)** | TOPN(3, Staff, [Sales]) | Top performers? | Recognition |
| 24 | **Active Staff Count** | COUNT(DISTINCT StaffID) | How many staff? | Track headcount |
| 25 | **Labor Cost %** | Total Wages ÷ Total Revenue × 100% | Labor efficiency? | 25-35% |
| 26 | **Total Customers** | COUNT(DISTINCT CustomerID or TransactionID) | Customer count? | Track volume |
| 27 | **Average Check Size** | Total Revenue ÷ Customer Count | Spend per customer? | Rp 85-150K |
| 28 | **New vs Repeat %** | % breakdown of first-time vs returning | Retention rate? | ≥ 60% repeat |
| 29 | **Customer Count Trend** | Customer count over time | Growing customer base? | Upward trend |
| 30 | **Transaction Count** | COUNT(Transactions) | Transaction volume? | Track daily |

**Data Required:** Sales_Data (StaffID, TransactionID, CustomerID), StaffHours, Staff_Roster

---

## TIER 1 OPTIONS (Choose 1-2 Modules) - 30 Metrics

Add to base for Tier 1 Standard (Rp 4.5M, +10 metrics) or Tier 1 Plus (Rp 6M, +20 metrics).

### Module T1-A: Revenue Intelligence (+10 metrics) [+Rp 1M]

**Purpose:** Advanced revenue forecasting and gap analysis

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 31 | **Upsell Revenue** | SUM(Sales[UpsellAmount]) | Upsell contribution? |
| 32 | **Discount Amount Impact** | SUM(Sales[DiscountAmount]) | How much discounting? |
| 33 | **Net Revenue After Adjustments** | Gross + Upsells - Discounts | True net revenue? |
| 34 | **Revenue Waterfall Components** | Visual breakdown of revenue build-up | Revenue composition? |
| 35 | **Forecast to Year-End** | Current pace × days remaining | Will we hit annual goal? |
| 36 | **Gap to Annual Target** | Annual Target - YTD Revenue | How far behind? |
| 37 | **Required Daily Run Rate** | Gap ÷ Days Remaining | Daily sales needed? |
| 38 | **MTD vs Target** | Month-to-Date ÷ Monthly Target | On track this month? |
| 39 | **Weekly Trend** | Last 8 weeks line chart | Trending up or down? |
| 40 | **QTD Performance** | Quarter-to-Date vs Quarterly Goal | Quarterly progress? |

**Use Case:** "We need to hit Rp 12B this year. Are we on pace?"

---

### Module T1-B: Menu Engineering (+10 metrics) [+Rp 1M]

**Purpose:** BCG Matrix and menu optimization basics

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 41 | **Recipe Cost Per Item** | SUM(Ingredient costs) per product | True item cost? |
| 42 | **Profit Margin Per Item** | (Sell Price - Cost) ÷ Sell Price | Margin by item? |
| 43 | **BCG Matrix - Stars** | High revenue + high growth items | What's hot? |
| 44 | **BCG Matrix - Cash Cows** | High revenue + low growth items | Reliable revenue? |
| 45 | **BCG Matrix - Dogs** | Low revenue + low growth items | What to remove? |
| 46 | **BCG Matrix - Question Marks** | Low revenue + high growth items | Potential winners? |
| 47 | **Menu Item Velocity** | Units sold per day per item | Selling speed? |
| 48 | **Portion Cost Tracking** | Cost per portion served | Portion control? |
| 49 | **Category Profitability** | Profit margin by category | Best categories? |
| 50 | **Menu Optimization Score** | Composite score for menu health | Menu health? |

**Use Case:** "Which menu items should we promote or cut?"

---

### Module T1-C: Staff Performance (+10 metrics) [+Rp 1M]

**Purpose:** Staff ranking and discipline tracking

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 51 | **Performance Score (Composite)** | Weighted average of 6 components | Overall staff score? |
| 52 | **Punctuality Rate** | % shifts started on time | Are they on time? |
| 53 | **Full Shift Rate** | % shifts completed (no early outs) | Do they finish shifts? |
| 54 | **Attendance Rate** | Shifts worked ÷ Shifts scheduled | Attendance? |
| 55 | **Order Accuracy** | % transactions without voids | Accuracy rate? |
| 56 | **Conflict Resolution** | % complaints resolved | Handle complaints well? |
| 57 | **Staff Tier Level** | Gold (≥85) / Silver (70-84) / Bronze (<70) | Performance tier? |
| 58 | **Gap to Bonus Threshold** | Bonus Target - Current Sales | How far from bonus? |
| 59 | **Week-over-Week Trend** | This week vs last week performance | Improving? |
| 60 | **Individual Drill-Through** | 8 detailed metrics per staff member | Staff deep-dive? |

**Use Case:** "Who needs coaching? Who deserves a bonus?"

**Discipline Score Components:** Metrics 52-56 combine into composite discipline score (10% of total performance).

---

## TIER 2 PROFESSIONAL MODULES - 50 Metrics

Add to base+T1 for Tier 2 configurations (Rp 7-12M). Choose modules based on business needs.

### Module P1: Multi-Outlet Operations (+12 metrics) [+Rp 1.25M]

**Purpose:** Compare performance across multiple locations

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 61 | **Outlet Performance Comparison** | Revenue by outlet ranking | Which outlet performs best? |
| 62 | **Revenue by Outlet Ranking** | Ranked list of outlets | Outlet leaderboard? |
| 63 | **Food Cost % by Outlet** | Food cost % per location | Cost efficiency by outlet? |
| 64 | **Labor Cost % by Outlet** | Labor cost % per location | Labor efficiency by outlet? |
| 65 | **Profit Margin by Outlet** | Margin per location | Most profitable outlet? |
| 66 | **Customer Count by Outlet** | Customer volume per location | Busiest location? |
| 67 | **Average Check by Outlet** | Avg spend per location | Highest spending location? |
| 68 | **Peak Hours by Outlet** | Peak hours per location | Location-specific patterns? |
| 69 | **Staff Efficiency by Outlet** | Sales per staff by location | Staff productivity by outlet? |
| 70 | **Inter-Outlet Transfer Analysis** | Track transfers between locations | Transfer patterns? |
| 71 | **Best/Worst Outlet** | Identify top and bottom performers | Performance extremes? |
| 72 | **Consolidated Multi-Outlet View** | Aggregated multi-location dashboard | Overall network performance? |

**Use Case:** "I have 3 outlets. Which one is most profitable?"

**Data Required:** Outlet dimension table, outlet-tagged sales data

---

### Module P2: Menu Optimization (+15 metrics) [+Rp 1.25M]

**Purpose:** Advanced menu engineering and product analysis

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 73 | **Ingredient Cost Trend (Top 10)** | Cost trend for top 10 ingredients | Price changes? |
| 74 | **Recipe Cost Variance** | Standard cost vs actual cost | Recipe accuracy? |
| 75 | **Portion Variance Tracking** | Expected vs actual portion sizes | Portion control issues? |
| 76 | **Menu Mix Analysis** | Detailed category mix breakdown | Mix shifts? |
| 77 | **Product Cannibalization** | Impact of new products on existing | Cannibalizing sales? |
| 78 | **Cross-Sell Opportunity Matrix** | Items frequently bought together | Cross-sell potential? |
| 79 | **Menu Item Velocity (Advanced)** | Velocity by daypart/day of week | When does it sell? |
| 80 | **Seasonal Performance** | Product performance by season | Seasonal items? |
| 81 | **New Product Launch Tracking** | New product performance vs forecast | Launch success? |
| 82 | **Menu Optimization Score (Advanced)** | Comprehensive menu health score | Overall menu health? |
| 83 | **Star Items Revenue Contribution** | % revenue from Star items | Star dependency? |
| 84 | **Dog Items Waste Cost** | Waste cost from low performers | Waste from dogs? |
| 85 | **Cash Cow Stability** | Consistency of cash cow performance | Cash cow reliability? |
| 86 | **Question Mark Potential** | Growth trajectory of question marks | Which to invest in? |
| 87 | **Menu Engineering Recommendation** | Actionable recommendations | What actions to take? |

**Use Case:** "Should I launch this new product? Will it cannibalize existing sales?"

---

### Module P3: Workforce Analytics (+12 metrics) [+Rp 1.5M]

**Purpose:** Deep workforce performance and scheduling optimization

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 88 | **Performance Score (6 Components)** | Detailed composite score | Full performance breakdown? |
| 89 | **Discipline Score (5 Sub-Components)** | Detailed discipline breakdown | Discipline deep-dive? |
| 90 | **Shift Efficiency Rating** | Performance by shift | Best/worst shifts? |
| 91 | **Training Completion Status** | Training program completion % | Who's trained? |
| 92 | **Individual Staff Drill-Through (8 Metrics)** | Complete staff profile | Full staff analysis? |
| 93 | **Team Average Performance** | Team benchmark | Team vs individual? |
| 94 | **Revenue Per Staff Member** | Annual revenue ÷ staff count | Staff revenue contribution? |
| 95 | **Turnover Rate** | (Staff left ÷ Avg staff) × 100% | Attrition rate? |
| 96 | **Retention Cost** | Cost to replace departed staff | Turnover cost? |
| 97 | **Productivity Index** | Composite productivity metric | Overall productivity? |
| 98 | **Scheduling Efficiency** | Optimal vs actual schedule | Schedule optimization? |
| 99 | **Overtime Analysis** | Overtime hours and cost | Overtime issues? |

**Use Case:** "My staff turnover is high. Where's the problem?"

---

### Module P4: Customer Mastery (+11 metrics) [+Rp 1.5M]

**Purpose:** Customer segmentation and retention analytics

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 100 | **Patronage Ladder - First-Timers** | Visit count = 1 | How many new customers? |
| 101 | **Patronage Ladder - Repeaters** | Visit count 2-3 | Returning customers? |
| 102 | **Patronage Ladder - Regulars** | Visit count 4-6 | Regular base? |
| 103 | **Patronage Ladder - VIPs** | Visit count ≥ 7 | Loyal customers? |
| 104 | **First-Timer Return Rate** | % who return within 90 days | Conversion rate? |
| 105 | **Repeat Customer %** | Repeat ÷ Total customers | Loyalty %? |
| 106 | **VIP Churn Count** | VIPs absent 45+ days | Losing VIPs? |
| 107 | **Revenue at Risk** | Potential revenue from churned VIPs | Risk amount? |
| 108 | **Avg Days Between Visits** | Average visit frequency | Visit frequency? |
| 109 | **NPS Score** | (% Promoters - % Detractors) × 100 | Would they recommend? |
| 110 | **Promoters/Passives/Detractors Breakdown** | NPS segment distribution | NPS composition? |

**Use Case:** "How many VIP customers am I losing each month?"

---

## TIER 3 STRATEGIC MODULES - 50 Metrics

Add to T2 Complete for Tier 3 configurations (Rp 10-15M). Enterprise-grade analytics.

### Module S1: Executive Intelligence (+15 metrics) [+Rp 1.25M]

**Purpose:** Board-level reporting and strategic planning

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 111 | **Gap to Target Breakdown** | Component analysis of gap | Why are we behind? |
| 112 | **Required Run Rate (Daily/Weekly/Monthly)** | Multi-period run rate targets | What pace needed? |
| 113 | **Scenario Analysis (Best)** | Best-case scenario forecast | Best possible outcome? |
| 114 | **Scenario Analysis (Expected)** | Expected scenario forecast | Most likely outcome? |
| 115 | **Scenario Analysis (Worst)** | Worst-case scenario forecast | Risk scenario? |
| 116 | **Forecast vs Actual Variance** | Forecast accuracy analysis | Forecasting accuracy? |
| 117 | **Strategic KPI Dashboard** | Executive-level KPI summary | Big picture? |
| 118 | **Board-Level Metrics** | Metrics for board reporting | Board deck ready? |
| 119 | **Investor Reporting View** | Investor-focused metrics | Investor update? |
| 120 | **Quarterly Business Review** | QBR metric package | Quarterly performance? |
| 121 | **Year-over-Year Comparison** | YoY analysis across all metrics | Annual comparison? |
| 122 | **Multi-Period Trend** | Long-term trend analysis | Long-term trajectory? |
| 123 | **Performance vs Competition** | Market comparison (if data available) | Vs competitors? |
| 124 | **Growth Velocity** | Acceleration/deceleration analysis | Growth speed? |
| 125 | **Executive Summary Scorecard** | One-page executive summary | Executive overview? |

**Use Case:** "I need to present to the board. What's the executive summary?"

---

### Module S2: Advanced Menu (+12 metrics) [+Rp 1.25M]

**Purpose:** Pricing strategy and competitive analysis

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 126 | **Price Elasticity Analysis** | Demand response to price changes | Price sensitivity? |
| 127 | **Cross-Sell Effectiveness** | Success rate of cross-sell attempts | Cross-selling working? |
| 128 | **Menu Optimization Advanced Score** | ML-based optimization score | AI recommendations? |
| 129 | **Product Launch ROI** | ROI analysis for new products | Launch ROI? |
| 130 | **Competitive Price Benchmarking** | Price vs competitors | Pricing competitive? |
| 131 | **Menu Profitability Matrix** | Advanced profit mapping | Profit optimization? |
| 132 | **ABC Analysis (Item Contribution)** | Pareto analysis of items | 80/20 rule? |
| 133 | **Dead Stock Identification** | Low-velocity item alerts | Dead stock? |
| 134 | **Recipe Costing Automation** | Automated recipe cost updates | Real-time costing? |
| 135 | **Ingredient Supplier Tracking** | Supplier performance analysis | Supplier quality? |
| 136 | **Menu Refresh Recommendation** | When to update menu | Menu refresh timing? |
| 137 | **Seasonal Menu Performance** | Seasonal item analysis | Seasonal strategy? |

**Use Case:** "Should I raise prices? What's the optimal price point?"

---

### Module S3: Advanced Workforce (+12 metrics) [+Rp 1.25M]

**Purpose:** Labor optimization and workforce planning

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 138 | **Labor Optimization Model** | Optimal staffing levels | Right staff count? |
| 139 | **Productivity Per Labor Hour** | Revenue per labor hour | Labor productivity? |
| 140 | **Scheduler Efficiency Score** | Schedule vs actual performance | Schedule quality? |
| 141 | **Cost Per Shift Analysis** | Detailed shift cost breakdown | Shift profitability? |
| 142 | **Overtime Cost Tracking** | OT cost and trends | Overtime issues? |
| 143 | **Staff Utilization Rate** | % of time productively used | Underutilization? |
| 144 | **Training ROI Measurement** | Training investment return | Training value? |
| 145 | **Performance Improvement Tracking** | Improvement rate over time | Who's improving? |
| 146 | **Staff Development Path** | Career progression tracking | Development plans? |
| 147 | **Succession Planning Metrics** | Readiness for promotions | Succession ready? |
| 148 | **Compensation Effectiveness** | Pay vs performance correlation | Fair compensation? |
| 149 | **Retention Prediction Model** | Predict staff turnover risk | Who might leave? |

**Use Case:** "Am I overstaffing lunch shifts? What's the optimal schedule?"

---

### Module S4: Customer Intelligence (+11 metrics) [+Rp 1.25M]

**Purpose:** Predictive customer analytics and segmentation

| # | Metric Name | Formula/Definition | Business Question |
|---|-------------|-------------------|------------------|
| 150 | **Cohort Analysis (By Month Acquired)** | Retention by acquisition cohort | Cohort performance? |
| 151 | **RFM Segmentation** | Recency, Frequency, Monetary | Customer segments? |
| 152 | **At-Risk Customer Alerts** | Customers likely to churn | Who's at risk? |
| 153 | **Customer Acquisition Cost (CAC)** | Marketing cost ÷ new customers | Acquisition cost? |
| 154 | **Campaign Performance Tracking** | Marketing campaign ROI | Campaign effectiveness? |
| 155 | **Customer Segment Profitability** | Profit by segment | Most profitable segment? |
| 156 | **Lifetime Value by Segment** | LTV by customer segment | Segment LTV? |
| 157 | **Churn Prediction Model** | Predict customer churn | Churn risk? |
| 158 | **Win-Back Campaign ROI** | Re-activation campaign results | Win-back success? |
| 159 | **Loyalty Program Effectiveness** | Program ROI analysis | Loyalty program working? |
| 160 | **Net Promoter Score by Segment** | NPS by customer segment | Segment satisfaction? |

**Use Case:** "Which customers should I target with my next campaign?"

---

## TIER CONFIGURATIONS SUMMARY

### Tier 1: Essentials (30-50 metrics, Rp 3.5-6M)

| Configuration | Modules Included | Total Metrics | Price |
|--------------|------------------|---------------|-------|
| **T1-Basic** | Base only (B1+B2+B3) | 30 | Rp 3.5M |
| **T1-Standard** | Base + ONE T1 module | 40 | Rp 4.5M |
| **T1-Plus** | Base + TWO T1 modules | 50 | Rp 6M |

**Choose from:** Revenue Intelligence (T1-A), Menu Engineering (T1-B), or Staff Performance (T1-C)

---

### Tier 2: Professional (50-100 metrics, Rp 7-12M)

| Configuration | Modules Included | Total Metrics | Price |
|--------------|------------------|---------------|-------|
| **T2-Base** | Base + All T1 | 50 | Rp 7M |
| **T2 + P1** | T2 Base + Multi-Outlet | 62 | Rp 8.25M |
| **T2 + P2** | T2 Base + Menu Optimization | 65 | Rp 8.25M |
| **T2 + P3** | T2 Base + Workforce Analytics | 62 | Rp 8.5M |
| **T2 + P4** | T2 Base + Customer Mastery | 61 | Rp 8.5M |
| **T2-Complete** | Base + All T1 + All T2 | 100 | Rp 12M |

**Multi-Outlet Required?** Add P1 module. **Advanced Analytics?** Choose P2/P3/P4 based on needs.

---

| **T3 + S3** | T3 Base + Advanced Workforce | 112 | Rp 21.25M |
| **T3 + S4** | T3 Base + Customer Intelligence | 111 | Rp 21.25M |
| **T3-Complete** | All modules (12 total) | 150 | Rp 25M |

**T3 Includes:** WhatsApp automation, POS auto-export, monthly data refresh, priority support

---

## MODULE SELECTION GUIDE

### "I'm a single-location restaurant" -> Start with T1-Basic (30 metrics)
Add T1-A (Revenue Intelligence) if you need forecasting, or T1-C (Staff Performance) if you need staff management.

### "I have 2-3 outlets" -> Get T2-Base + P1 (Multi-Outlet) = 62 metrics, Rp 8.25M
Multi-outlet comparison is essential for your business.

### "I need advanced menu engineering" -> Get T2-Base + P2 (Menu Optimization) = 65 metrics, Rp 8.25M
Product launch tracking, cannibalization analysis, cross-sell matrix.

### "I have staff turnover issues" -> Get T2-Base + P3 (Workforce Analytics) = 62 metrics, Rp 8.5M
Turnover analysis, retention prediction, scheduling optimization.

### "I want customer segmentation" -> Get T2-Base + P4 (Customer Mastery) = 61 metrics, Rp 8.5M
Patronage ladder, NPS, VIP churn tracking.

### "I need to present to board/investors" -> Get T3 + S1 (Executive Intelligence) = 115 metrics
Board-level reporting, scenario analysis, strategic KPIs.

---

## DAX Formula Reference (Sample)

**Example: Performance Score Calculation (Module T1-C, Metric 51)**

```dax
Performance Score =
VAR SalesPerHourNorm = DIVIDE([Sales Per Hour], [Team Avg Sales Per Hour], 0) * 25
VAR UpsellRateNorm = DIVIDE([Upsell Count], [Team Max Upsells], 0) * 20
VAR RatingNorm = DIVIDE([Avg Customer Rating], 5, 0) * 25
VAR TablesPerHourNorm = DIVIDE([Tables Per Hour], [Team Avg Tables Per Hour], 0) * 15
VAR DisciplineNorm = [Discipline Score] * 10
VAR TrendNorm = [WoW Sales Trend] * 5

RETURN SalesPerHourNorm + UpsellRateNorm + RatingNorm + TablesPerHourNorm + DisciplineNorm + TrendNorm
```

**Example: BCG Quadrant Classification (Module T1-B, Metrics 43-46)**

```dax
BCG Quadrant =
VAR AvgRevenue = AVERAGEX(Products, [Product Revenue])
VAR AvgGrowth = AVERAGEX(Products, [Product Growth %])
VAR CurrentRevenue = [Product Revenue]
VAR CurrentGrowth = [Product Growth %]
RETURN
SWITCH(TRUE(),
 CurrentRevenue > AvgRevenue && CurrentGrowth > AvgGrowth, "Star",
 CurrentRevenue > AvgRevenue && CurrentGrowth <= AvgGrowth, "Cash Cow",
 CurrentRevenue <= AvgRevenue && CurrentGrowth > AvgGrowth, "Question Mark",
 "Dog"
)
```

**Example: Multi-Outlet Comparison (Module P1, Metric 61)**

```dax
Outlet Performance Comparison =
RANKX(
 ALL(Outlet[OutletName]),
 [Total Revenue],
 ,
 DESC,
 DENSE
)
```

**See [[products/01-power-bi-template/specifications/technical/01-power-bi-tech-spec|power-bi-tech-spec.md]] for complete DAX library organized by module.**

---

## Metric Dependencies (Data Requirements)

### Base Modules (B1, B2, B3) - Required for All Tiers

| Table Name | Required Columns | Source | Used By Modules |
|------------|-----------------|--------|----------------|
| **Sales_Data** | TransactionID, TransactionDate, TransactionTime, ProductName, Quantity, UnitPrice, TotalAmount, StaffID, CustomerID, IsReservation, PaymentMethod | POS export | B1, B2, B3, all modules |
| **Products** | ProductID, ProductName, Category, CostPrice, SellPrice | Manual CSV | B2, T1-B, P2, S2 |
| **Staff_Roster** | StaffID, StaffName, Role, HireDate | Manual CSV | B3, T1-C, P3, S3 |
| **Targets** | Period, TargetRevenue | Manual CSV | B1, T1-A, S1 |
| **Date** | Date, DayName, MonthName, Quarter, Year, IsWeekend | Pre-built | All modules |

### Tier 1 Options (T1-A, T1-B, T1-C)

| Table Name | Required Columns | Source | Used By Modules |
|------------|-----------------|--------|----------------|
| **Sales_Data (Extended)** | UpsellAmount, DiscountAmount, IsVoid | POS export (optional fields) | T1-A, T1-C |
| **StaffHours** | StaffID, Date, ShiftStart, ShiftEnd, IsLate, IsEarlyOut | POS or manual | T1-C, P3, S3 |
| **Recipes** | ProductID, IngredientID, Quantity | Manual CSV | T1-B, P2, S2 |

### Tier 2 Professional (P1, P2, P3, P4)

| Table Name | Required Columns | Source | Used By Modules |
|------------|-----------------|--------|----------------|
| **Outlets** | OutletID, OutletName, Location, OpenDate | Manual CSV | P1 |
| **Feedback** | FeedbackID, TransactionID, Rating, ReviewText, NPS, ComplaintResolved | Survey tool | P4, S4 |
| **Ingredients** | IngredientID, IngredientName, UnitCost, Supplier | Manual CSV | P2, S2 |
| **Training** | StaffID, TrainingDate, TrainingType, Status | Manual CSV | P3, S3 |

### Tier 3 Strategic (S1, S2, S3, S4)

| Table Name | Required Columns | Source | Used By Modules |
|------------|-----------------|--------|----------------|
| **Campaigns** | CampaignID, CampaignName, StartDate, EndDate, Cost | Marketing system | S4 |
| **Cohorts** | CustomerID, AcquisitionDate, Cohort | Calculated | S4 |
| **Forecasts** | Date, ForecastRevenue, Scenario (Best/Expected/Worst) | Manual or model | S1 |

**Missing Data = Missing Metrics**
- Example: No Outlets table -> Can't use P1 Multi-Outlet module
- Example: No Feedback table -> Can't use P4 Customer Mastery module
- Example: No StaffHours with IsLate -> Can't calculate Punctuality metric (#52)

---

## Customer-Facing Messaging

**Old approach (INCORRECT):**
"Tier 1 has 30 metrics, Tier 2 has 75 metrics, Tier 3 has 150 metrics"

**New approach (CORRECT):**
"Start with 30 core metrics (Base), then add modules as you grow"

**Module upsell examples:**
- "Need multi-outlet comparison? Add Multi-Outlet module (+12 metrics, +Rp 1.25M)"
- "Want advanced menu engineering? Add Menu Optimization (+15 metrics, +Rp 1.25M)"
- "Pay only for the modules you'll actually use"

---

## Upgrade Path

### When to Add Modules:

**Starting small (T1-Basic, 30 metrics):**
- Validates basic business health
- Good for new restaurants or basic reporting needs

**Ready to grow (T1-Plus, 50 metrics):**
- Add Revenue Intelligence if you need forecasting
- Add Menu Engineering if you need BCG Matrix
- Add Staff Performance if you need gamification

**Multi-location or scaling (T2, 50-100 metrics):**
- Must add P1 Multi-Outlet if you have 2+ locations
- Add P2/P3/P4 based on specific business pain points

**Board-level reporting (T3, 100-150 metrics):**
- Strategic modules for executive/investor reporting
- Predictive analytics and advanced modeling
- Automated data refresh and integrations

---

## Changelog

**Version 2.0 (2025-12-30):**
- **MAJOR CHANGE:** Migrated from fixed 75-metric model to modular framework
- Reorganized all 150 metrics into 12 modules (3 base + 3 T1 + 4 T2 + 4 T3)
- Added tier configurations with module combinations
- Added module selection guide
- Updated pricing to reflect modular approach (Rp 3.5-15M range)

**Version 1.0 (2025-12-27):**
- Initial release: 75 metrics across 3 tabs (DEPRECATED)

---

**Related Documents:**
- [[products/01-power-bi-template/specifications/core/04-implementation-subset|Implementation Subset]] - Module implementation details
- [[products/01-power-bi-template/specifications/technical/01-power-bi-tech-spec|Power BI Tech Spec]] - Technical implementation guide
- [[products/01-power-bi-template/product-strategy/core/01-master-strategy.md|Product Strategy]] - Strategic positioning

**Last Updated:** 2025-12-30
**Version:** 2.0
**Owner:** Product Team

