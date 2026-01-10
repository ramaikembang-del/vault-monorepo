# Product 01 Revenue Calculator Model

**Purpose:** Interactive scenario planning tool for Year 1-3 revenue projections
**Format:** Excel/Google Sheets implementation guide
**Use Case:** Financial planning, investor pitch validation, sales target scenario testing
**Owner:** Finance Team + Business Intelligence
**Last Updated:** January 3, 2026
**Status:** **STANDALONE DOCUMENT** - January 3, 2026
> [!NOTE]
> This document is a standalone component of the Pricing Strategy. For strategic context on *why* these scenarios are chosen (e.g. Tier 2 focus), see [[products/01-power-bi-template/business-intelligence/strategic-analysis/01-product-business-model|01-product-business-model.md]].

**Current Pricing:**
- Tier 1: Rp 3.5-6M (modular - 30-50 metrics)
- Tier 2: Rp 7-12M (modular - 50-100 metrics)
- Tier 3: Rp 10-15M setup (support optional) (100-150 metrics)

**All revenue scenarios and calculations reflect modular pricing framework.**

---

## Quick Start Guide

### For Excel/Google Sheets Users:

1. **Copy the template structure** from Section 2 below
2. **Enter your inputs** in the yellow-highlighted cells (customer counts, pricing, churn rates)
3. **Formulas auto-calculate** MRR, ARR, cumulative revenue, customer cohorts
4. **Run scenarios** by changing input variables (conservative/current/aggressive)

### For Non-Spreadsheet Users:

- Use the **Quick Calculator** (Section 3) for manual calculations
- Pre-filled scenarios available in Section 4

---

## Table of Contents

1. [[#model-overview|Model Overview]]
2. [[#excelgoogle-sheets-template|Excel/Google Sheets Template]]
3. [[#quick-calculator-no-spreadsheet|Quick Calculator (No Spreadsheet)]]
4. [[#pre-built-scenarios|Pre-Built Scenarios]]
5. [[#formula-reference|Formula Reference]]
6. [[#validation--assumptions|Validation & Assumptions]]

---

## 1. Model Overview

### Input Parameters

**Customer Acquisition (Annual):**
- Year 1 new customers (Tier 1, Tier 2, Tier 3)
- Year 2 new customers (Tier 1, Tier 2, Tier 3)
- Year 3 new customers (Tier 1, Tier 2, Tier 3)

**Pricing (One-Time + Recurring):**
- Tier 1 avg price (one-time, Rp)
- Tier 2 avg price (one-time, Rp)
- Tier 3 avg setup price (one-time, Rp)
- Tier 3 avg MRR (monthly, Rp)

**Customer Behavior:**
- Tier 1->2 annual upgrade rate (%)
- Tier 2->3 annual upgrade rate (%)
- Tier 3 churn rate Year 1 (%)
- Tier 3 churn rate Year 2+ (%)

**Cost Structure (Optional):**
- Cost per Tier 1 delivery (%)
- Cost per Tier 2 delivery (%)
- Cost per Tier 3 delivery (%)

### Output Metrics

**Revenue:**
- Annual one-time revenue (Year 1, 2, 3)
- Annual MRR revenue (Year 1, 2, 3)
- Total annual revenue (Year 1, 2, 3)
- Cumulative 3-year revenue

**Customer Base:**
- Active customers by tier (Year 1, 2, 3)
- Cumulative customers by tier
- Total active Tier 3 MRR customers

**Profitability:**
- Gross profit (Year 1, 2, 3)
- Gross margin % (Year 1, 2, 3)
- Average revenue per customer (Year 1, 2, 3)

**SaaS Metrics (Tier 3 Only):**
- Exit MRR (December each year)
- Annual MRR Revenue
- MRR Growth Rate (YoY)
- Customer Lifetime Value (LTV)

---

## 2. Excel/Google Sheets Template

### Sheet 1: Inputs

**Copy this table structure into Excel/Google Sheets. Yellow cells = user input, white cells = formulas.**

#### A. Customer Acquisition Inputs

| Row | Parameter | Year 1 | Year 2 | Year 3 | Formula/Notes |
|-----|-----------|--------|--------|--------|---------------|
| 3 | **NEW CUSTOMERS ACQUIRED** | | | | **SECTION HEADER** |
| 4 | Tier 1 (DIY) new customers | `120` | `100` | `80` | **USER INPUT** |
| 5 | Tier 2 (Assisted) new customers | `25` | `70` | `60` | **USER INPUT** |
| 6 | Tier 3 (Managed) new customers | `5` | `30` | `70` | **USER INPUT** |
| 7 | **Total New Customers** | `=B4+B5+B6` | `=C4+C5+C6` | `=D4+D5+D6` | **FORMULA** |
| 8 | | | | | |
| 9 | **CUMULATIVE CUSTOMERS (Start of Year)** | | | | **SECTION HEADER** |
| 10 | Tier 1 cumulative (start of year) | `0` | `=B14` | `=C14` | **FORMULA** |
| 11 | Tier 2 cumulative (start of year) | `0` | `=B15` | `=C15` | **FORMULA** |
| 12 | Tier 3 cumulative (start of year) | `0` | `=B16` | `=C16` | **FORMULA** |
| 13 | | | | | |
| 14 | **CUMULATIVE CUSTOMERS (End of Year)** | | | | **CALCULATED** |
| 15 | Tier 1 cumulative (end of year) | `=B10+B4-B19-B20` | `=C10+C4-C19-C20` | `=D10+D4-D19-D20` | Start + New - Upgrades |
| 16 | Tier 2 cumulative (end of year) | `=B11+B5+B19-B21` | `=C11+C5+C19-C21` | `=D11+D5+D19-D21` | Start + New + T1->T2 - T2->T3 |
| 17 | Tier 3 cumulative (end of year) | `=B12+B6+B20+B21-B22` | `=C12+C6+C20+C21-C22` | `=D12+D6+D20+D21-D22` | Start + New + Upgrades - Churn |

#### B. Pricing Inputs

| Row | Parameter | Year 1 | Year 2 | Year 3 | Notes |
|-----|-----------|--------|--------|--------|-------|
| 20 | **PRICING (One-Time) - MODULAR** | | | | **SECTION HEADER** |
| 21 | Tier 1 avg price (Rp) | `4,750,000` | `5,000,000` | `5,250,000` | **USER INPUT** (modular 3.5-6M range) |
| 22 | Tier 2 avg price (Rp) | `9,500,000` | `10,000,000` | `10,500,000` | **USER INPUT** (modular 7-12M range) |
| 23 | Tier 3 avg setup (Rp) | `12,500,000` | `13,000,000` | `14,000,000` | **USER INPUT** (modular 10-15M range) |
| 24 | | | | | |
| 25 | **PRICING (Recurring - Tier 3 Only)** | | | | **SECTION HEADER** |
| 26 | Tier 3 avg MRR per customer (Rp) | `400,000` | `400,000` | `400,000` | **USER INPUT** (standard optional support/mo) |

#### C. Customer Behavior Inputs

| Row | Parameter | Year 1 | Year 2 | Year 3 | Notes |
|-----|-----------|--------|--------|--------|-------|
| 29 | **UPGRADE RATES** | | | | **SECTION HEADER** |
| 30 | Tier 1->2 annual upgrade rate (%) | `10%` | `15%` | `20%` | **USER INPUT** (% of T1 cohort) |
| 31 | Tier 2->3 annual upgrade rate (%) | `8%` | `12%` | `15%` | **USER INPUT** (% of T2 cohort) |
| 32 | | | | | |
| 33 | **CHURN RATES (Tier 3 MRR Only)** | | | | **SECTION HEADER** |
| 34 | Tier 3 annual churn rate (%) | `40%` | `10%` | `10%` | **USER INPUT** (Year 1 high, then stabilizes) |
| 35 | | | | | |

#### D. Calculated Upgrade/Churn Volumes

| Row | Parameter | Year 1 | Year 2 | Year 3 | Formula |
|-----|-----------|--------|--------|--------|---------|
| 38 | **CUSTOMER MOVEMENTS** | | | | **CALCULATED** |
| 39 | Tier 1->2 upgrades (count) | `=B15*B30` | `=C15*C30` | `=D15*D30` | T1 cumulative x upgrade % |
| 40 | Tier 2->3 upgrades (count) | `=B16*B31` | `=C16*C31` | `=D16*D31` | T2 cumulative x upgrade % |
| 41 | Tier 3 churned customers (count) | `=B17*B34` | `=C17*C34` | `=D17*D34` | T3 cumulative x churn % |

---

### Sheet 2: Revenue Outputs

#### A. One-Time Revenue

| Row | Parameter | Year 1 | Year 2 | Year 3 | Formula |
|-----|-----------|--------|--------|--------|---------|
| 3 | **ONE-TIME REVENUE** | | | | **SECTION HEADER** |
| 4 | Tier 1 sales revenue | `=Inputs!B4*Inputs!B21` | `=Inputs!C4*Inputs!C21` | `=Inputs!D4*Inputs!D21` | New T1 x T1 price |
| 5 | Tier 2 sales revenue | `=Inputs!B5*Inputs!B22` | `=Inputs!C5*Inputs!C22` | `=Inputs!D5*Inputs!D22` | New T2 x T2 price |
| 6 | Tier 3 setup revenue | `=Inputs!B6*Inputs!B23` | `=Inputs!C6*Inputs!C23` | `=Inputs!D6*Inputs!D23` | New T3 x T3 setup |
| 7 | T1->T2 upgrade revenue | `=Inputs!B39*(Inputs!B22-Inputs!B21)` | `=Inputs!C39*(Inputs!C22-Inputs!C21)` | `=Inputs!D39*(Inputs!D22-Inputs!D21)` | Upgrades x price delta |
| 8 | T2->T3 upgrade revenue | `=Inputs!B40*(Inputs!B23-Inputs!B22)` | `=Inputs!C40*(Inputs!C23-Inputs!C22)` | `=Inputs!D40*(Inputs!D23-Inputs!D22)` | Upgrades x price delta |
| 9 | **Total One-Time Revenue** | `=SUM(B4:B8)` | `=SUM(C4:C8)` | `=SUM(D4:D8)` | **KEY METRIC** |

#### B. Recurring Revenue (Tier 3 MRR)

| Row | Parameter | Year 1 | Year 2 | Year 3 | Formula |
|-----|-----------|--------|--------|--------|---------|
| 12 | **TIER 3 MRR REVENUE** | | | | **SECTION HEADER** |
| 13 | Starting MRR (Rp, Jan 1) | `0` | `=B17` | `=C17` | Last year exit MRR |
| 14 | New MRR added (year) | `=Inputs!B6*Inputs!B26*6` | `=Inputs!C6*Inputs!C26*6` | `=Inputs!D6*Inputs!D26*6` | New T3 x MRR x 6 months avg |
| 15 | Upgrade MRR added (year) | `=Inputs!B40*Inputs!B26*4` | `=Inputs!C40*Inputs!C26*4` | `=Inputs!D40*Inputs!D26*4` | Upgrades x MRR x 4 months avg |
| 16 | Churned MRR lost (year) | `=(B13+B14+B15)*Inputs!B34` | `=(C13+C14+C15)*Inputs!C34` | `=(D13+D14+D15)*Inputs!D34` | Total MRR x churn % |
| 17 | Exit MRR (Rp, Dec 31) | `=B13+B14+B15-B16` | `=C13+C14+C15-C16` | `=D13+D14+D15-D16` | **KEY METRIC** |
| 18 | Annual MRR Revenue | `=(B13+B17)/2*12` | `=(C13+C17)/2*12` | `=(D13+D17)/2*12` | Avg MRR x 12 months |

**Note:** Row 14-15 use 6 months and 4 months average because new customers/upgrades happen throughout the year.

#### C. Total Revenue Summary

| Row | Parameter | Year 1 | Year 2 | Year 3 | Formula |
|-----|-----------|--------|--------|--------|---------|
| 21 | **TOTAL REVENUE** | | | | **SECTION HEADER** |
| 22 | One-Time Revenue | `=B9` | `=C9` | `=D9` | From above |
| 23 | MRR Revenue | `=B18` | `=C18` | `=D18` | From above |
| 24 | **Total Annual Revenue** | `=B22+B23` | `=C22+C23` | `=D22+D23` | **KEY METRIC** |
| 25 | Cumulative 3-Year Revenue | `=SUM(B24:D24)` | | | **TOTAL** |

#### D. Key Metrics

| Row | Parameter | Year 1 | Year 2 | Year 3 | Formula |
|-----|-----------|--------|--------|--------|---------|
| 28 | **KEY METRICS** | | | | **SECTION HEADER** |
| 29 | Total Active Customers | `=Inputs!B17` | `=Inputs!C17` | `=Inputs!D17` | End of year cumulative |
| 30 | Avg Revenue per Customer | `=B24/Inputs!B7` | `=C24/Inputs!C7` | `=D24/Inputs!D7` | Total revenue / new customers |
| 31 | MRR Growth Rate (YoY) | `N/A` | `=(C17-B17)/B17` | `=(D17-C17)/C17` | Exit MRR growth % |
| 32 | ARR (from MRR only) | `=B17*12` | `=C17*12` | `=D17*12` | Exit MRR x 12 |

---

### Sheet 3: Profitability (Optional)

#### Cost Structure Inputs

| Row | Parameter | Year 1 | Year 2 | Year 3 | Notes |
|-----|-----------|--------|--------|--------|-------|
| 3 | **COST OF DELIVERY (% of Revenue)** | | | | **USER INPUT** |
| 4 | Tier 1 cost % | `20%` | `18%` | `15%` | Template + 30-day support |
| 5 | Tier 2 cost % | `30%` | `28%` | `25%` | Assisted setup + 90-day support |
| 6 | Tier 3 cost % | `45%` | `40%` | `35%` | Full setup + ongoing maintenance |

#### Profitability Calculations

| Row | Parameter | Year 1 | Year 2 | Year 3 | Formula |
|-----|-----------|--------|--------|--------|---------|
| 9 | **GROSS PROFIT** | | | | **CALCULATED** |
| 10 | Tier 1 gross profit | `=Revenue!B4*(1-Profit!B4)` | `=Revenue!C4*(1-Profit!C4)` | `=Revenue!D4*(1-Profit!D4)` | T1 revenue x (1 - cost %) |
| 11 | Tier 2 gross profit | `=Revenue!B5*(1-Profit!B5)` | `=Revenue!C5*(1-Profit!C5)` | `=Revenue!D5*(1-Profit!D5)` | T2 revenue x (1 - cost %) |
| 12 | Tier 3 gross profit | `=(Revenue!B6+Revenue!B18)*(1-Profit!B6)` | `=(Revenue!C6+Revenue!C18)*(1-Profit!C6)` | `=(Revenue!D6+Revenue!D18)*(1-Profit!D6)` | T3 setup + MRR x (1 - cost %) |
| 13 | **Total Gross Profit** | `=SUM(B10:B12)` | `=SUM(C10:C12)` | `=SUM(D10:D12)` | **KEY METRIC** |
| 14 | **Gross Margin %** | `=B13/Revenue!B24` | `=C13/Revenue!C24` | `=D13/Revenue!D24` | Gross profit / total revenue |

---

## 3. Quick Calculator (No Spreadsheet)

### Manual Calculation Steps

**Use this if you don't have Excel/Google Sheets access.**

#### Step 1: Calculate One-Time Revenue

**Formula:**
```
One-Time Revenue = (T1 new x T1 price) + (T2 new x T2 price) + (T3 new x T3 setup)
```

**Example (Year 1, Current Scenario):**
```
= (120 x 1,500,000) + (25 x 5,500,000) + (5 x 12,000,000)
= 180,000,000 + 137,500,000 + 60,000,000
= Rp 377,500,000
```

#### Step 2: Calculate Annual MRR Revenue

**Formula:**
```
Average MRR = (Starting MRR + Ending MRR) / 2
Annual MRR Revenue = Average MRR x 12
```

**Example (Year 1):**
```
Starting MRR (Jan 1) = Rp 0
New T3 customers: 5
Average months paying: 6 months (added throughout year)
Avg MRR per customer: Rp 400,000

Ending MRR (Dec 31) = 5 x Rp 400,000 = Rp 2,000,000
Average MRR = (0 + 2,000,000) / 2 = Rp 1,000,000
Annual MRR Revenue = Rp 1,000,000 x 12 = Rp 12,000,000
```

**Note:** For simplicity, this ignores churn in Year 1. Use spreadsheet for precise calculation.

#### Step 3: Calculate Total Revenue

**Formula:**
```
Total Revenue = One-Time Revenue + Annual MRR Revenue
```

**Example (Year 1):**
```
= Rp 377,500,000 + Rp 12,000,000
= Rp 389,500,000
```

#### Step 4: Calculate Average Revenue per Customer

**Formula:**
```
Avg Revenue per Customer = Total Revenue / Total New Customers
```

**Example (Year 1):**
```
Total New Customers = 120 + 25 + 5 = 150
Avg Revenue = Rp 389,500,000 / 150 = Rp 2,596,667 per customer
```

---

## 4. Pre-Built Scenarios

### Scenario A: Conservative (Risk-Averse)

**Assumptions:**
- Lower customer acquisition
- Higher Tier 1 mix (80% of sales)
- Lower pricing (extended early-bird discounts)
- Higher churn rates

**Inputs:**

| Parameter | Year 1 | Year 2 | Year 3 |
|-----------|--------|--------|--------|
| **New Customers** | | | |
| Tier 1 (DIY) | 100 | 80 | 60 |
| Tier 2 (Assisted) | 20 | 50 | 40 |
| Tier 3 (Managed) | 5 | 20 | 50 |
| **Total New** | **125** | **150** | **150** |
| | | | |
| **Pricing** | | | |
| Tier 1 avg (Rp) | 1,200,000 | 1,500,000 | 2,000,000 |
| Tier 2 avg (Rp) | 5,000,000 | 5,500,000 | 6,000,000 |
| Tier 3 setup (Rp) | 10,000,000 | 11,000,000 | 12,000,000 |
| Tier 3 MRR (Rp) | 350,000 | 375,000 | 400,000 |
| | | | |
| **Behavior** | | | |
| T1->T2 upgrade % | 5% | 8% | 10% |
| T2->T3 upgrade % | 5% | 8% | 10% |
| T3 churn % | 50% | 15% | 12% |

**Projected Outputs:**

| Metric | Year 1 | Year 2 | Year 3 | 3-Year Total |
|--------|--------|--------|--------|--------------|
| One-Time Revenue | Rp 220M | Rp 310M | Rp 380M | Rp 910M |
| MRR Revenue | Rp 10M | Rp 50M | Rp 200M | Rp 260M |
| **Total Revenue** | **Rp 230M** | **Rp 360M** | **Rp 580M** | **Rp 1.17B** |
| Avg per Customer | Rp 1.84M | Rp 2.40M | Rp 3.87M | Rp 2.76M |
| Exit MRR (Dec) | Rp 1.75M | Rp 8M | Rp 30M | - |
| Active T3 Customers | 5 | 22 | 65 | - |

**Best For:** Pessimistic financial planning, downside scenario for investors

---

### Scenario B: Current (Baseline)

**Assumptions:**
- Matches validated market sizing targets
- Year 1 launch mix (80/17/3%)
- Steady-state mix by Year 3 (40/40/20%)
- Steady-state mix by Year 3 (40/40/20%)
- Moderate churn (40% Year 1, 10% Year 2+)

> [!TIP]
> **Strategic Note:** This baseline assumes a "Lead with Tier 2" sales strategy, targeting the 10,000-15,000 multi-outlet restaurants (50-60% of TAM) which offer the highest unit economics. See [[products/01-power-bi-template/business-intelligence/strategic-analysis/01-product-business-model|01-product-business-model.md]] for details.

**Inputs:**

| Parameter | Year 1 | Year 2 | Year 3 |
|-----------|--------|--------|--------|
| **New Customers** | | | |
| Tier 1 (DIY) | 120 | 100 | 80 |
| Tier 2 (Assisted) | 25 | 70 | 60 |
| Tier 3 (Managed) | 5 | 30 | 70 |
| **Total New** | **150** | **200** | **210** |
| | | | |
| **Pricing** | | | |
| Tier 1 avg (Rp) | 1,500,000 | 2,000,000 | 2,500,000 |
| Tier 2 avg (Rp) | 5,500,000 | 6,000,000 | 6,500,000 |
| Tier 3 setup (Rp) | 12,000,000 | 13,000,000 | 14,000,000 |
| Tier 3 MRR (Rp) | 400,000 | 425,000 | 450,000 |
| | | | |
| **Behavior** | | | |
| T1->T2 upgrade % | 10% | 15% | 20% |
| T2->T3 upgrade % | 8% | 12% | 15% |
| T3 churn % | 40% | 10% | 10% |

**Projected Outputs:**

| Metric | Year 1 | Year 2 | Year 3 | 3-Year Total |
|--------|--------|--------|--------|--------------|
| One-Time Revenue | Rp 378M | Rp 495M | Rp 590M | Rp 1.46B |
| MRR Revenue | Rp 12M | Rp 78M | Rp 384M | Rp 474M |
| **Total Revenue** | **Rp 390M** | **Rp 573M** | **Rp 974M** | **Rp 1.94B** |
| Avg per Customer | Rp 2.60M | Rp 2.87M | Rp 4.64M | Rp 3.46M |
| Exit MRR (Dec) | Rp 4.7M | Rp 9.6M | Rp 45M | - |
| Active T3 Customers | 5 | 24 | 100 | - |

**Best For:** Official financial planning, current market sizing documentation

---

### Scenario C: Aggressive (High-Growth)

**Assumptions:**
- Strong product-market fit, viral growth
- Faster shift to Tier 2-3 (higher-value customers)
- Premium pricing (no extended discounts)
- Lower churn (strong retention)

**Inputs:**

| Parameter | Year 1 | Year 2 | Year 3 |
|-----------|--------|--------|--------|
| **New Customers** | | | |
| Tier 1 (DIY) | 150 | 120 | 100 |
| Tier 2 (Assisted) | 40 | 100 | 100 |
| Tier 3 (Managed) | 10 | 50 | 100 |
| **Total New** | **200** | **270** | **300** |
| | | | |
| **Pricing** | | | |
| Tier 1 avg (Rp) | 2,000,000 | 2,500,000 | 3,000,000 |
| Tier 2 avg (Rp) | 6,500,000 | 7,000,000 | 7,500,000 |
| Tier 3 setup (Rp) | 14,000,000 | 15,000,000 | 16,000,000 |
| Tier 3 MRR (Rp) | 450,000 | 500,000 | 550,000 |
| | | | |
| **Behavior** | | | |
| T1->T2 upgrade % | 15% | 20% | 25% |
| T2->T3 upgrade % | 12% | 18% | 22% |
| T3 churn % | 30% | 8% | 6% |

**Projected Outputs:**

| Metric | Year 1 | Year 2 | Year 3 | 3-Year Total |
|--------|--------|--------|--------|--------------|
| One-Time Revenue | Rp 700M | Rp 1,020M | Rp 1,330M | Rp 3.05B |
| MRR Revenue | Rp 27M | Rp 180M | Rp 720M | Rp 927M |
| **Total Revenue** | **Rp 727M** | **Rp 1,200M** | **Rp 2,050M** | **Rp 3.98B** |
| Avg per Customer | Rp 3.64M | Rp 4.44M | Rp 6.83M | Rp 5.17M |
| Exit MRR (Dec) | Rp 4.5M | Rp 22M | Rp 85M | - |
| Active T3 Customers | 10 | 52 | 180 | - |

**Best For:** Upside scenario for investors, stretch targets for sales team

---

## 5. Formula Reference

### Core Revenue Formulas

#### One-Time Revenue (Annual)

```
Tier 1 Revenue = New_T1_Customers x Tier_1_Price

Tier 2 Revenue = New_T2_Customers x Tier_2_Price

Tier 3 Setup Revenue = New_T3_Customers x Tier_3_Setup_Price

Upgrade Revenue (T1->T2) = T1_Upgrades x (Tier_2_Price - Tier_1_Price)

Upgrade Revenue (T2->T3) = T2_Upgrades x (Tier_3_Setup - Tier_2_Price)

Total One-Time Revenue = T1_Revenue + T2_Revenue + T3_Setup + Upgrade_Revenue
```

#### MRR Revenue (Annual)

**Simple Method (for quick estimates):**
```
New_MRR_Added = New_T3_Customers x Tier_3_MRR x 6
 (Assumes customers added evenly throughout year, average 6 months paying)

Annual_MRR_Revenue = (Starting_MRR + Ending_MRR) / 2 x 12
```

**Precise Method (month-by-month tracking):**
```
See mrr-tracking-model-year-1-3.md for detailed month-by-month formulas
```

#### Customer Movement Formulas

```
T1_to_T2_Upgrades = Tier_1_Cumulative x T1_Upgrade_Rate

T2_to_T3_Upgrades = Tier_2_Cumulative x T2_Upgrade_Rate

T3_Churn = Tier_3_Cumulative x T3_Churn_Rate

Tier_1_End = Tier_1_Start + New_T1 - T1_to_T2_Upgrades

Tier_2_End = Tier_2_Start + New_T2 + T1_to_T2_Upgrades - T2_to_T3_Upgrades

Tier_3_End = Tier_3_Start + New_T3 + T2_to_T3_Upgrades - T3_Churn
```

### SaaS Metrics (Tier 3 Only)

```
Exit_MRR = Active_T3_Customers x Avg_MRR_per_Customer

ARR = Exit_MRR x 12

MRR_Growth_Rate = (Current_Year_Exit_MRR - Prior_Year_Exit_MRR) / Prior_Year_Exit_MRR

LTV (Simple) = Avg_MRR_per_Customer x (1 / Monthly_Churn_Rate)
 Example: optional support MRR, 1% monthly churn = optional support x 100 = Rp 40M lifetime value
```

### Profitability Formulas

```
Cost_of_Delivery = Revenue x Cost_Percentage

Gross_Profit = Revenue - Cost_of_Delivery

Gross_Margin = Gross_Profit / Revenue

Net_Revenue_Retention (NRR) = (Starting_MRR + Expansion - Churn) / Starting_MRR
```

---

## 6. Validation & Assumptions

### Model Validation Checklist

| Validation Check | Current Model | Expected Range | Status |
|------------------|---------------|----------------|--------|
| **Year 1 Total Revenue** | Rp 250-390M | Rp 200-500M | Within range |
| **Year 3 Total Revenue** | Rp 580-2,050M | Rp 500-2,500M | Within range |
| **3-Year Cumulative Revenue** | Rp 1.17-3.98B | Rp 1B-5B | Within range |
| **Avg Revenue per Customer (Y1)** | Rp 1.84-3.64M | Rp 1.5-5M | Within range |
| **Year 1 Tier Mix** | 80/17/3% (Current) | 70-90% T1 | Realistic for launch |
| **Year 3 Tier Mix** | 38/29/33% (Current) | 30-50% each tier | Realistic maturity |
| **T3 Churn Year 1** | 40% (Current) | 30-50% | High early churn normal |
| **T3 Churn Year 2+** | 10% (Current) | 8-15% | SaaS industry standard |
| **Exit MRR Growth (Y2->Y3)** | 368% (Current) | 200-500% | High growth phase |
| **MRR as % of Total Revenue (Y3)** | 39% (Current) | 30-50% | Healthy SaaS mix |

### Key Assumptions

#### Customer Acquisition

**Year 1 (Launch Year):**
- **Tier 1 dominates (80%)**: Early adopters are budget-conscious, want DIY option
- **Low Tier 3 adoption (3%)**: Trust building needed, only 5-10 customers willing to pay premium
- **Total customers: 125-200**: Realistic for founder-led sales, no sales team

**Year 2 (Growth Year):**
- **Shift to Tier 2 (35%)**: Word-of-mouth drives mid-tier sales
- **Tier 3 growth (15%)**: Success stories enable premium tier growth
- **Total customers: 150-270**: Assumes 1-2 sales hires

**Year 3 (Scale Year):**
- **Balanced mix (40/30/30%)**: Mature product-market fit
- **Higher Tier 3 (33%)**: Established brand, enterprise credibility
- **Total customers: 150-300**: Full sales team (3-5 people)

#### Pricing Evolution

**Tier 1 (DIY):**
- Year 1: Rp 1.2-2M (early-bird discounts, 20-40% off standard)
- Year 2: Rp 1.5-2.5M (reduced discounts)
- Year 3: Rp 2-3M (standard pricing)

**Tier 2 (Assisted):**
- Year 1: Rp 5-6.5M (limited discounts, value already clear)
- Year 2: Rp 5.5-7M (minimal discounting)
- Year 3: Rp 6-7.5M (standard pricing)

**Tier 3 (Managed):**
- Setup: Rp 10-16M (increases 8-10%/year with inflation + feature additions)
- MRR: Rp 350-550K/month (6-8%/year pricing power)

#### Customer Behavior

**Upgrade Rates:**
- **T1->T2**: 5-25% annual (lower in Year 1, higher as product matures)
 - Rationale: Some DIY customers realize they need help, upgrade
- **T2->T3**: 5-22% annual (increases as customers scale to 5+ outlets)
 - Rationale: Multi-outlet customers outgrow assisted model, want full management

**Churn Rates (Tier 3 MRR):**
- **Year 1**: 30-50% annual (early cohort has fit issues)
 - Rationale: Product still being refined, some customers not ideal fit
- **Year 2+**: 6-15% annual (mature cohorts, better fit)
 - Rationale: SaaS industry standard for SMB is 10-15% annual churn

**One-Time Product Churn:**
- Tier 1-2 have no "churn" (one-time purchase, no recurring revenue to lose)
- Can still upsell/cross-sell to these customers in future years

#### Cost Structure

**Tier 1 (20% cost):**
- Template delivery (minimal)
- 30-day email support (low touch)

**Tier 2 (30% cost):**
- 2-3 hour remote setup (Rp 1.5-2M staff time)
- 90-day support (medium touch)

**Tier 3 (45% Year 1, declining to 35% Year 3):**
- Full setup (Rp 4-5M staff time)
- Monthly maintenance (Rp 100-150K/month)
- Quarterly reviews (Rp 50K/quarter)
- Economies of scale reduce % over time

### Model Limitations

#### What This Model Does NOT Include:

1. **Operating Expenses:**
 - Sales team salaries (add Rp 50-150M/year depending on headcount)
 - Marketing spend (add Rp 20-80M/year)
 - Tech infrastructure (add Rp 5-15M/year)
 - Office/admin overhead (add Rp 10-30M/year)

2. **Full SaaS Platform Migration:**
 - Some Tier 3 customers migrate to Product 05 (Full SaaS) in Year 4+
 - Model only tracks Product 01 revenue (Power BI Template)
 - See comprehensive-product-strategy.md for full platform revenue

3. **Seasonal Variations:**
 - Model assumes even distribution throughout year
 - Reality: Q4 typically 30-40% higher sales (year-end planning budgets)

4. **Multi-Year Contracts:**
 - Model assumes annual/monthly billing only
 - Could offer 10-15% discount for upfront annual Tier 3 MRR payment

5. **Cross-Sell/Upsell (Other Products):**
 - Product 03 (Web Dashboard Lite) revenue not included
 - Training/consulting revenue not included

#### Sensitivity Analysis

**Most Impactful Variables (ranked by revenue impact):**

1. **Tier 3 MRR per customer** (+/- Rp 50K = +/- Rp 60-150M over 3 years)
2. **Tier 3 new customer count** (+/- 20 customers/year = +/- Rp 200-400M over 3 years)
3. **Tier 3 churn rate** (+/- 5% = +/- Rp 80-150M over 3 years)
4. **Tier 2 pricing** (+/- Rp 500K = +/- Rp 50-120M over 3 years)
5. **Total customer acquisition** (+/- 50 customers/year = +/- Rp 100-200M over 3 years)

**Recommendation:** Run 3 scenarios (Conservative/Current/Aggressive) and use Current as baseline for planning.

---

## Usage Examples

### Example 1: Testing Higher Tier 3 Pricing

**Question:** "What if we charge Rp 500K/month MRR instead of optional support?"

**Steps:**
1. Open Inputs sheet
2. Change Row 26 (Tier 3 MRR) from `400,000` to `500,000`
3. Check Revenue sheet Row 17 (Exit MRR):
 - Before: Rp 2M (Year 1), Rp 9.6M (Year 2), Rp 45M (Year 3)
 - After: Rp 2.5M (Year 1), Rp 12M (Year 2), Rp 56.25M (Year 3)
4. Check Revenue sheet Row 24 (Total Revenue):
 - Before: Rp 390M (Year 1), Rp 573M (Year 2), Rp 974M (Year 3)
 - After: Rp 396M (Year 1), Rp 603M (Year 2), Rp 1,109M (Year 3)

**Result:** +Rp 135M over 3 years (+7% total revenue)

---

### Example 2: Impact of Reducing Year 1 Discounts

**Question:** "What if we only discount Tier 1 to Rp 2M instead of Rp 1.5M in Year 1?"

**Steps:**
1. Change Inputs Row 21 from `1,500,000` to `2,000,000`
2. Check Revenue Row 4 (Tier 1 sales):
 - Before: Rp 180M (120 customers x Rp 1.5M)
 - After: Rp 240M (120 customers x Rp 2M)

**Result:** +Rp 60M Year 1 revenue (+15% Year 1 total)

**Risk Assessment:** May reduce conversion rate if price is too high for early adopters. Consider A/B testing.

---

### Example 3: Sales Team Hiring Decision

**Question:** "If we hire 2 sales reps in Year 2, can we hit 300 new customers instead of 200?"

**Steps:**
1. Estimate sales rep productivity: 100-150 customers/year per rep
2. Update Inputs:
 - Row 4 (T1 new Year 2): Change from `100` to `120`
 - Row 5 (T2 new Year 2): Change from `70` to `100`
 - Row 6 (T3 new Year 2): Change from `30` to `50`
3. Check Year 2 total revenue:
 - Before: Rp 573M (200 new customers)
 - After: Rp 810M (270 new customers)

**Cost-Benefit:**
- Additional revenue: +Rp 237M
- Sales rep cost: 2 x Rp 60M/year = Rp 120M
- **Net gain: +Rp 117M (49% ROI)**

**Decision:** Hire the sales reps! Strong positive ROI.

---

## Related Documents

- **_mrr-tracking-model-year-1-3.md (Archived)_** - Month-by-month MRR tracking (more detailed than this calculator)
- **[[biz/departments/finance/models/04-unit-economics|unit-economics.md]]** - Per-customer profitability analysis
- **[[products/01-power-bi-template/business-intelligence/product-strategy/comprehensive-product-strategy|comprehensive-product-strategy\.md]]** - Overall Product 01 strategy
- **[[products/01-power-bi-template/business-intelligence/market-analysis/03-market-sizing-validation|MARKET_SIZING_VALIDATION.md]]** - TAM/SAM/SOM validation backing these projections

---

## Changelog

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | January 3, 2026 | Initial release with 3 scenarios, Excel template, formulas | Finance + BI Team |

---

## Support

**Questions about this calculator?**
- Finance Team: finance@[company].com
- Product Lead: product@[company].com

**Want custom scenario modeling?**
- Book 30-min session: [Calendly link]
- Bring your assumptions, we'll build custom model

---

**Last Updated:** January 3, 2026
**Owner:** Finance Team + Business Intelligence
**Next Review:** End of Sprint 1 Week 2 (validate with actual sales data)
**Status:** Ready for Sprint 1 execution




