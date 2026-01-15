# A1: Power BI Template - Technical Specification
**Version:** 2.0
**Date:** December 30, 2025
**Status:** Active
**Sprint:** Phase 1 - Smart Solo Execution (Tier 1 Focus)

> [!NOTE]
> **Feature Reference:** See [[products/01-power-bi-template/specifications/core/03-metrics-catalog|metrics-catalog.md]] for complete 12-module breakdown.

---

## 1. Product Overview

### 1.1 Description
Power BI Template for Indonesian F&B businesses using **modular metrics framework**. One-time purchase product that provides pre-built analytics dashboards with flexible module selection. User imports their own CSV data from their POS system.

**Modular Approach:**
- 150 total metrics organized into 12 modules
- Tier 1: 30-50 metrics (Base + optional T1 modules)
- Tier 2: 50-100 metrics (T1 + Professional modules)
- Tier 3: 100-150 metrics (T2 + Strategic modules)

**See [[products/01-power-bi-template/specifications/core/04-implementation-subset|implementation-subset.md]] for tier configurations.**

### 1.2 Technology Stack

| Component | Technology | Notes |
|-----------|------------|-------|
| **Platform** | Microsoft Power BI Desktop | Free, widely available |
| **Data Source** | CSV/Excel files | POS exports |
| **Distribution** | .pbit template file | Email/Google Drive delivery |
| **Language** | DAX | Calculated measures |
| **Visuals** | Power BI native + custom | Recharts-like styling |

---

## 2. Template Architecture

### 2.1 Data Model

```

 Sales Fact Products

 Date ProductID (PK)
 Time Name
 ProductID (FK) Category
 StaffID (FK) CostPrice
 Quantity SellPrice
 UnitPrice
 TotalAmount
 CostAmount
 PaymentMethod Staff

 StaffID (PK)
 Name
 Role
 HourlyRate

```

### 2.2 Required CSV Columns

**Sales.csv (Required):**
```
date,time,product_name,quantity,unit_price,total_amount,staff_name,payment_method
2025-12-25,08:30:00,Kopi Susu,2,15000,30000,Budi,cash
2025-12-25,09:15:00,Nasi Goreng,1,25000,25000,Rina,gopay
```

**Products.csv (Required):**
```
product_id,product_name,category,cost_price,sell_price
1,Kopi Susu,beverage,5000,15000
2,Nasi Goreng,food,10000,25000
```

**Staff.csv (Optional):**
```
staff_id,staff_name,role,hourly_rate
1,Budi,kasir,15000
2,Rina,waitress,12000
```

---

## 3. Dashboard Pages - Modular Organization

### 3.1 Page Structure by Tier

**Dashboard pages are organized by purchased modules:**

#### Tier 1 Configuration (30-50 metrics)
| Page | Modules | Metrics | Included In |
|------|---------|---------|-------------|
| **1. Command Center** | B1 Revenue Core + B2 Menu Essentials | 20 | All tiers |
| **2. Staff & Customer Basics** | B3 Staff & Customer Basics | 10 | All tiers |
| **3. Revenue Intelligence** | T1-A Revenue Intelligence | 10 | T1-Standard+ |
| **4. Menu Engineering** | T1-B Menu Engineering (BCG Matrix) | 10 | T1-Standard+ |
| **5. Wolf Pack** | T1-C Staff Performance | 10 | T1-Standard+ |

#### Tier 2 Configuration (50-100 metrics)
Add Professional module pages to Tier 1:
| Page | Modules | Metrics | Included In |
|------|---------|---------|-------------|
| **6. Multi-Outlet Command Center** | P1 Multi-Outlet Operations | 12 | T2 + P1 |
| **7. Advanced Menu Optimization** | P2 Menu Optimization | 15 | T2 + P2 |
| **8. Workforce Analytics** | P3 Workforce Analytics | 12 | T2 + P3 |
| **9. Loyalty Loop** | P4 Customer Mastery | 11 | T2 + P4 |

#### Tier 3 Configuration (100-150 metrics)
Add Strategic module pages to Tier 2:
| Page | Modules | Metrics | Included In |
|------|---------|---------|-------------|
| **10. Executive Dashboard** | S1 Executive Intelligence | 15 | T3 + S1 |
| **11. Pricing Strategy** | S2 Advanced Menu | 12 | T3 + S2 |
| **12. Labor Optimization** | S3 Advanced Workforce | 12 | T3 + S3 |
| **13. Customer Intelligence** | S4 Customer Intelligence | 11 | T3 + S4 |

**Module Gating:** Pages shown/hidden based on purchased modules using Power BI parameters.

### 3.2 Page 1: Executive Summary

**Visuals:**
1. **Card: Health Score** (0-100, color-coded)
2. **Card: Today's Revenue**
3. **Card: Revenue vs Target %**
4. **Card: Food Cost %**
5. **Card: Prime Cost %**
6. **Line Chart: 30-Day Revenue Trend**
7. **Alert Box: Active Alerts** (5 rules)

**DAX Measures:**
```dax
// Health Score (simplified)
Health Score =
VAR ProfitabilityScore = IF([Profit Margin %] >= 30, 30, [Profit Margin %])
VAR CostScore = IF([Prime Cost %] <= 60, 25, 60 - [Prime Cost %])
VAR GrowthScore = IF([Mom Change %] >= 0, 25, 25 + [Mom Change %])
VAR CustomerScore = 20 // Placeholder
RETURN ProfitabilityScore + CostScore + GrowthScore + CustomerScore

// Today's Revenue
Today Revenue =
CALCULATE(SUM(Sales[TotalAmount]), Sales[Date] = TODAY())

// Revenue vs Target
Revenue vs Target % =
DIVIDE([Total Revenue], [Target Revenue], 0) * 100
```

### 3.3 Page 2: Revenue Analysis

**Visuals:**
1. **Line Chart: Daily Revenue** (7/30/90 day toggle)
2. **Bar Chart: Revenue by Category** (Food, Beverage, Dessert)
3. **KPI Card: Week-over-Week Change**
4. **KPI Card: Month-over-Month Change**
5. **Table: Revenue by Date** (drillthrough)

**DAX Measures:**
```dax
// Total Revenue
Total Revenue = SUM(Sales[TotalAmount])

// Week-over-Week Change
WoW Change % =
VAR ThisWeek = CALCULATE([Total Revenue], DATESINPERIOD(Calendar[Date], TODAY(), -7, DAY))
VAR LastWeek = CALCULATE([Total Revenue], DATESINPERIOD(Calendar[Date], TODAY()-7, -7, DAY))
RETURN DIVIDE(ThisWeek - LastWeek, LastWeek, 0) * 100

// Revenue by Category
Revenue Food = CALCULATE([Total Revenue], Products[Category] = "food")
Revenue Beverage = CALCULATE([Total Revenue], Products[Category] = "beverage")
```

### 3.4 Page 3: Menu Performance

**Visuals:**
1. **Scatter Chart: BCG Matrix**
 - X-axis: Revenue (high = right)
 - Y-axis: Growth Rate (high = top)
 - Color: Quadrant (Star/Cow/Dog/Question)
2. **Bar Chart: Top 10 Sellers**
3. **Bar Chart: Bottom 10 Sellers**
4. **Table: All Products with Profit Margin**

**DAX Measures:**
```dax
// BCG Quadrant Classification
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

// Product Profit Margin
Product Margin % =
DIVIDE([Sell Price] - [Cost Price], [Sell Price], 0) * 100
```

### 3.5 Page 4: Staff Performance

**Visuals:**
1. **Bar Chart: Sales per Staff** (neutral framing)
2. **Bar Chart: Transactions per Staff**
3. **Line Chart: Staff Sales Trend**
4. **Table: Shift Comparison** (not ranked)

**Cultural Note:** No public leaderboards. Show comparative data without explicit rankings.

```dax
// Sales per Staff
Staff Sales =
CALCULATE(SUM(Sales[TotalAmount]), ALLEXCEPT(Sales, Sales[StaffID]))

// Staff Sales per Hour (if shift data available)
Staff Sales Per Hour =
DIVIDE([Staff Sales], [Staff Hours Worked], 0)
```

### 3.6 Page 5: Operations

**Visuals:**
1. **Matrix (Heatmap): Revenue by Hour × Day**
2. **Line Chart: Transactions per Hour**
3. **Card: Peak Hour**
4. **Card: Off-Peak Hour**

```dax
// Revenue by Hour
Revenue by Hour =
CALCULATE(SUM(Sales[TotalAmount]), ALLEXCEPT(Sales, Sales[Hour]))

// Peak Hour
Peak Hour =
MAXX(SUMMARIZE(Sales, Sales[Hour], "Rev", [Total Revenue]), [Rev])
```

### 3.7 Page 6: Cost Analysis

**Visuals:**
1. **KPI Card: Food Cost %** (benchmark: 28-32%)
2. **KPI Card: Beverage Cost %** (benchmark: 20-25%)
3. **KPI Card: Prime Cost %** (benchmark: 55-65%)
4. **Gauge: Prime Cost Indicator** (red/yellow/green zones)
5. **Line Chart: Cost % Trend**

```dax
// Food Cost %
Food Cost % =
DIVIDE(
 CALCULATE(SUM(Sales[CostAmount]), Products[Category] = "food"),
 CALCULATE(SUM(Sales[TotalAmount]), Products[Category] = "food"),
 0
) * 100

// Prime Cost %
Prime Cost % =
DIVIDE([Food Cost] + [Labor Cost], [Total Revenue], 0) * 100
```

---

## 4. Filters & Slicers

### 4.1 Global Filters

| Filter | Type | Options |
|--------|------|---------|
| **Date Range** | Date picker | Today, Last 7 Days, Last 30 Days, Custom |
| **Product Category** | Dropdown | All, Food, Beverage, Dessert |
| **Staff** | Multi-select | All staff |
| **Payment Method** | Dropdown | All, Cash, Card, Digital |

### 4.2 Date Intelligence

```dax
// Calendar Table
Calendar =
ADDCOLUMNS(
 CALENDAR(MIN(Sales[Date]), MAX(Sales[Date])),
 "Year", YEAR([Date]),
 "Month", MONTH([Date]),
 "MonthName", FORMAT([Date], "MMMM"),
 "Week", WEEKNUM([Date]),
 "DayOfWeek", WEEKDAY([Date]),
 "DayName", FORMAT([Date], "dddd"),
 "Hour", HOUR([Date])
)
```

---

## 5. Localization (Bahasa Indonesia)

### 5.1 UI Translations

| English | Bahasa Indonesia |
|---------|------------------|
| Revenue | Pendapatan |
| Profit | Laba |
| Cost | Biaya |
| Sales | Penjualan |
| Staff | Staf |
| Menu | Menu |
| Today | Hari Ini |
| This Week | Minggu Ini |
| This Month | Bulan Ini |
| vs Target | vs Target |
| Peak Hours | Jam Ramai |
| Top Sellers | Paling Laku |
| Bottom Sellers | Kurang Laku |
| Health Score | Skor Kesehatan |

### 5.2 Number Formatting

```dax
// Currency Format
Format Revenue = FORMAT([Total Revenue], "Rp #,##0")

// Percentage Format
Format Percentage = FORMAT([Value], "0.0%")
```

---

## 6. Delivery & Support

### 6.1 Deliverables

| Item | Format | Delivery |
|------|--------|----------|
| **Power BI Template** | .pbit file | Google Drive link |
| **Sample Data** | CSV files | Same folder |
| **Setup Guide** | PDF | Same folder |
| **Video Tutorial** | MP4/YouTube | Link in email |

### 6.2 Setup Instructions

1. Download .pbit file
2. Open in Power BI Desktop (free download)
3. Connect to your CSV files
4. Map columns if needed
5. Refresh data
6. View dashboards

### 6.3 Support Tier (R1)

See Product 02 - Template Support for ongoing support product.

---

## 7. Development Timeline - Phased Solo Execution

> **Note:** For granular daily checklists, see [[products/01-power-bi-template/product-strategy/roadmap/02-week-0-1-execution|Week 0-1 Execution Plan]].

### 7.1 Deployment Phases

**Phase 1 (40 Days): Foundation + Tier 1 Launch (Solo Velocity)**
*Focus: Revenue-First Execution. See Daily Plan for breakdown.*
| Day | Tasks |
|-----|-------|
| **Day 1** | Data model, relationships, calendar table |
| **Day 2** | Base module DAX (B1: Revenue Core - 10 metrics) |
| **Day 3** | Base module DAX (B2: Menu Essentials - 10 metrics) |
| **Day 4** | Base module DAX (B3: Staff & Customer Basics - 10 metrics) |
| **Day 5** | Base module visuals (Command Center + Staff & Customer pages) |
| **Day 6** | T1-Basic testing, sample data, T1 release |

**Phase 2 (Post-Launch): Tier 2 Professional (50-100 metrics)**
*Triggered by customer demand/revenue.*

**Phase 3 (Future Roadmap): Tier 3 Strategic (100-150 metrics)**
*Long-term strategic development.*

**Total Development Time:** 40 days for Launch (Phase 1) + Future Phases

### 7.2 Module Development Priority
1. **P0 (Week 1):** Base modules - Required for all tiers
2. **P1 (Week 2):** Tier 1 options - High customer demand
3. **P1 (Week 3-4):** P1 Multi-Outlet + P4 Customer Mastery - Most requested
4. **P2 (Week 3-4):** P2 Menu Optimization + P3 Workforce Analytics
5. **P2 (Week 5-6):** Strategic modules - Enterprise features

---

## 8. File Structure

```
A1-Power-BI-Template/
 template/
 F&B-Analytics-T1-Basic.pbit (30 metrics)
 F&B-Analytics-T1-Plus.pbit (50 metrics)
 F&B-Analytics-T2-Complete.pbit (100 metrics)
 F&B-Analytics-T3-Complete.pbit (150 metrics)
 sample-data/
 sales.csv
 products.csv
 staff.csv
 outlets.csv (T2+)
 feedback.csv (T2+)
 documentation/
 setup-guide.pdf
 module-selection-guide.pdf
 column-mapping-reference.pdf
 video-tutorial-link.txt
 README.md
```

**DAX Measures Organization by Module:**
```
Power BI Measures/
 _Base/
 B1_Revenue_Core (10 measures)
 B2_Menu_Essentials (10 measures)
 B3_Staff_Customer_Basics (10 measures)
 _Tier1/
 T1A_Revenue_Intelligence (10 measures)
 T1B_Menu_Engineering (10 measures)
 T1C_Staff_Performance (10 measures)
 _Tier2_Professional/
 P1_Multi_Outlet (12 measures)
 P2_Menu_Optimization (15 measures)
 P3_Workforce_Analytics (12 measures)
 P4_Customer_Mastery (11 measures)
 _Tier3_Strategic/
 S1_Executive_Intelligence (15 measures)
 S2_Advanced_Menu (12 measures)
 S3_Advanced_Workforce (12 measures)
 S4_Customer_Intelligence (11 measures)
```

**Note:** Organize DAX measures by module for easy maintenance and module gating.

---

## 9. Version Control & Update Strategy

### 9.1 Versioning Scheme

**Format:** `MAJOR.MINOR.PATCH`
- **MAJOR** - Breaking changes (e.g., data model change requiring new CSVs)
- **MINOR** - New features (e.g., new dashboard page, new DAX measures)
- **PATCH** - Bug fixes (e.g., DAX formula fix, visual typo)

**Examples:**
| Version | Changes | Breaking? |
|---------|---------|-----------|
| **1.0.0** | Initial release | - |
| **1.1.0** | Added Page 6 (Cost Analysis) | No |
| **1.0.1** | Fixed Prime Cost % calculation | No |
| **2.0.0** | Changed Sales.csv column names | YES |

### 9.2 Backward Compatibility Policy

**Goal:** Avoid breaking changes whenever possible.

| Scenario | Solution |
|----------|----------|
| New DAX measure | Add measure, don't replace existing |
| New visual | Add to existing page or new page |
| New data column | Make optional (use IF(ISBLANK()) fallback) |
| CSV column rename | Support both old & new names for 3 months |
| Remove feature | Deprecate for 6 months before removal |

**Breaking Change Checklist:**
- [ ] Update changelog with clear warning
- [ ] Provide migration guide (old CSV -> new CSV)
- [ ] Increment MAJOR version
- [ ] Email existing customers 2 weeks before release

### 9.3 Release Process

**Monthly Release Cycle:**

| Week | Activity |
|------|----------|
| **Week 1** | Collect feature requests from R1 support tickets |
| **Week 2** | Develop features, test with sample data |
| **Week 3** | Internal QA, beta test with 3-5 customers |
| **Week 4** | Release to all customers, update Google Drive |

**Release Checklist:**
```markdown
- [ ] DAX measures tested with sample data
- [ ] All visuals render correctly
- [ ] Bahasa Indonesia translations complete
- [ ] Changelog updated
- [ ] Sample CSVs updated (if needed)
- [ ] Video tutorial updated (if major changes)
- [ ] Google Drive folder updated
- [ ] Email sent to R1 subscribers
- [ ] Version number in template metadata
```

### 9.4 Update Delivery (For R1 Subscribers)

**Automatic Delivery:**
1. Upload new `.pbit` file to Google Drive (same folder)
2. Rename: `F&B-Analytics-Template-v1.1.0.pbit`
3. Send email to R1 subscribers:
 ```
 Subject: Template Update v1.1.0 Tersedia!

 Halo!

 Update bulanan template Anda sudah tersedia:

 Versi: 1.1.0
 Tanggal: 26 Des 2025

 Yang Baru:
 - Halaman Cost Analysis (Food Cost %, Prime Cost %)
 - Fix: Perhitungan BCG Matrix lebih akurat

 Download: [Google Drive Link]

 Tidak perlu upgrade? Pakai versi lama tetap OK!
 ```

**Customer Opt-Out:**
- Customer can choose to stay on old version
- No forced upgrades
- Old versions remain in "Archive" folder

### 9.5 Changelog Template

```markdown
# Changelog

## [2.0.0] - 2025-12-30

### BREAKING CHANGE - Modular Framework Migration
- **Major architectural change:** Migrated from fixed metric model to modular framework
- Total metrics expanded from 75 to 150, organized into 12 modules
- Tier configurations now module-based (30-50-100-150 metrics)
- **Modular Pricing Structure:**
- Pricing updated to modular approach by tier:
  - Tier 1: Rp 3.5-6M (30-50 metrics)
  - Tier 2: Rp 7-12M (50-100 metrics)
  - Tier 3: Rp 10-15M (100-150 metrics)
### Added - Module Organization
- Base modules (30 metrics): B1 Revenue Core, B2 Menu Essentials, B3 Staff & Customer Basics
- Tier 1 options (30 metrics): T1-A Revenue Intelligence, T1-B Menu Engineering, T1-C Staff Performance
- Tier 2 Professional (50 metrics): P1 Multi-Outlet, P2 Menu Optimization, P3 Workforce Analytics, P4 Customer Mastery
- Tier 3 Strategic (50 metrics): S1 Executive Intelligence, S2 Advanced Menu, S3 Advanced Workforce, S4 Customer Intelligence

### Changed
- DAX measures reorganized by module for better maintainability
- Dashboard pages now module-gated (shown/hidden based on purchased modules)
- Development timeline updated to sprint-based module development
- File structure updated with tier-specific .pbit files

### Migration Guide
- Previous "75 metrics" specification deprecated
- See [[products/01-power-bi-template/specifications/core/04-implementation-subset|implementation-subset.md]] for tier mapping
- Existing deployments can continue using old spec for now
- New implementations should use modular tier configurations

## [1.1.0] - 2025-12-26

### Added
- Page 6: Cost Analysis dashboard
- DAX measure: Beverage Cost %
- Filter: Payment Method slicer

### Fixed
- BCG Matrix calculation now handles null values
- Prime Cost % formatting (was showing decimal, now %)

### Deprecated
- None

## [1.0.1] - 2025-12-15

### Fixed
- Food Cost % calculation (was dividing by beverage revenue)
- Typo in "Kesehatan" label

## [1.0.0] - 2025-12-01

### Initial Release (DEPRECATED)
- 6 dashboard pages
- 75 fixed metrics
- Bahasa Indonesia localization
```

### 9.6 Migration Guides (For Breaking Changes)

**Example: v1.x -> v2.0 CSV Schema Change**

```markdown
# Migration Guide: v1.x -> v2.0

## What Changed
We renamed CSV columns for clarity:

| Old Name | New Name |
|----------|----------|
| `item` | `product_name` |
| `price` | `unit_price` |
| `total` | `total_amount` |

## How to Migrate

### Option 1: Update Your POS Export
Change your POS export settings to use new column names.

### Option 2: Convert CSV
Run this Excel formula:
1. Open your Sales.csv
2. Rename columns manually
3. Save

### Option 3: Use Converter Script
Download: [csv-converter.py]
Run: `python csv-converter.py old-sales.csv new-sales.csv`

## Need Help?
Contact support: [WhatsApp Link]
```

---

**Last Updated:** December 26, 2025
**Owner:** Development Team
**Status:** Draft - Pending Review
