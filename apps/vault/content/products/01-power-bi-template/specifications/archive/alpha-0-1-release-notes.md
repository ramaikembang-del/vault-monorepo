# Alpha 0.1 Specifications - Power BI Template (Product 01)

**Product:** A1 - Power BI F&B Analytics Template
**Version:** Alpha 0.1
**Release Date:** December 15, 2025
**Release Type:** Limited Beta (5 customers)
**Status:** COMPLETED - Validated & Ready for v0.2

**Document Owner:** Product Lead
**Last Updated:** January 8, 2026

---

## Executive Summary

### Release Overview

**Alpha 0.1** is the **first production-ready version** of the Power BI F&B Analytics Template, validated with 5 beta customers in December 2025. This release establishes the **core foundation** for the 3-tier modular product line.

### Key Milestones

| Milestone | Target | Actual | Status |
|-----------|--------|--------|--------|
| **Development Complete** | Dec 1, 2025 | Nov 28, 2025 | Early |
| **Beta Testing Start** | Dec 5, 2025 | Dec 6, 2025 | On Time |
| **Beta Success Rate** | >70% | 100% (5/5) | Exceeded |
| **Customer NPS** | >50 | 80 | Exceeded |
| **Production Release** | Dec 20, 2025 | Dec 15, 2025 | Early |

### Version Philosophy

**Alpha 0.1 = "Minimum Viable Excellence"**

**NOT Minimum Viable Product** (bare bones, many bugs)
**But Minimum VIABLE Excellence** (limited scope, high quality)

**Design Principles:**
1. **30 Core Metrics Only** (vs 150 possible) - Focus on survival analytics
2. **3 Excel Templates** (vs 9 possible) - Cover 80% use cases
3. **100% Setup Success** (vs industry 40%) - Polish over features
4. **<24 Hour Aha Moment** (vs weeks) - Fast time-to-value

---

## Part 1: Feature Catalog

### 1.1 Dashboard Pages (Tier 1 Essentials - Base Package)

**Total Pages:** 2 main pages + 1 cover page

---

**Page 1: Executive Overview**

**Purpose:** Daily health check - what happened today/this week?

**Metrics (10 total):**

| Metric | Calculation | Data Source | Update Frequency |
|--------|------------|-------------|------------------|
| **Revenue Today** | SUM(Daily_Sales[Revenue]) WHERE Date = TODAY | Daily_Sales.xlsx | Daily (manual refresh) |
| **Revenue This Week** | SUM(Daily_Sales[Revenue]) WHERE Date IN LAST 7 DAYS | Daily_Sales.xlsx | Daily |
| **Revenue This Month** | SUM(Daily_Sales[Revenue]) WHERE MONTH = THIS MONTH | Daily_Sales.xlsx | Daily |
| **Revenue vs Target** | (Actual Revenue / Target Revenue) - 1 | Daily_Sales.xlsx + Targets | Daily |
| **Food Cost %** | SUM(COGS) / SUM(Revenue) | Daily_Sales.xlsx | Daily |
| **Labor Cost %** | SUM(Payroll) / SUM(Revenue) | Staff_Performance.xlsx | Weekly |
| **Average Check Size** | Revenue / Transactions | Daily_Sales.xlsx | Daily |
| **Transactions Count** | COUNT(Transactions) | Daily_Sales.xlsx | Daily |
| **Customer Growth** | (New Customers This Month / Last Month) - 1 | Daily_Sales.xlsx | Monthly |
| **Top Item Today** | ITEM with MAX(Revenue) WHERE Date = TODAY | Daily_Sales.xlsx | Daily |

**Visuals:**
- KPI Cards (6 cards: Revenue Today, Week, Month, Target %, Food Cost %, Labor Cost %)
- Line Chart (Revenue Trend - Last 30 Days)
- Gauge Chart (Revenue vs Target %)
- Table (Top 5 Items Today)

---

**Page 2: Top Items Analysis**

**Purpose:** Menu engineering - what sells, what doesn't?

**Metrics (12 total):**

| Metric | Calculation | Business Value |
|--------|------------|----------------|
| **Item Revenue** | SUM(Revenue) GROUP BY Item | Total sales per item |
| **Item Quantity Sold** | SUM(Quantity) GROUP BY Item | Popularity |
| **Item Revenue %** | Item Revenue / Total Revenue | Contribution to revenue |
| **Item Average Price** | Revenue / Quantity | Price point |
| **Item Food Cost** | SUM(COGS) GROUP BY Item | Cost to make |
| **Item Food Cost %** | Food Cost / Revenue | Profitability |
| **Item Profit** | Revenue - Food Cost | Absolute profit |
| **Item Profit Margin %** | (Revenue - Food Cost) / Revenue | Margin |
| **Item Rank (Revenue)** | RANKX(ALL(Items), Revenue, DESC) | Bestsellers |
| **Item Rank (Profit)** | RANKX(ALL(Items), Profit, DESC) | Most profitable |
| **Item Growth MoM** | (This Month Revenue / Last Month Revenue) - 1 | Trending up/down |
| **New Items (Last 30 Days)** | Items WHERE First_Sale_Date > TODAY - 30 | New launches |

**Visuals:**
- Bar Chart (Top 10 Items by Revenue)
- Scatter Plot (Revenue vs Food Cost % - Menu Engineering Matrix)
- Table (All Items - Sortable by Revenue, Quantity, Profit, Food Cost %)
- Card (Total Items Count)
- Card (Average Food Cost % Across All Items)

---

**Page 3: Cover Page (Summary Dashboard)**

**Purpose:** Print-friendly 1-page snapshot for weekly reviews

**Content:**
- Company Logo (customizable)
- Report Period (This Week / This Month)
- Key Metrics Summary (6 KPI cards)
- Mini Trend Chart (Revenue Last 30 Days)
- Top 3 Items Table
- Alerts (if Food Cost >35%, Revenue <Target, etc.)

---

### 1.2 Excel Templates (3 Templates)

**Template 1: Daily_Sales.xlsx**

**Purpose:** Record daily revenue, transactions, and top items

**Sheet Structure:**

```
Sheet 1: Daily_Entry

Columns:
A: Date (DD/MM/YYYY) - Dropdown calendar
B: Day_of_Week (Auto-calculated from Date)
C: Outlet_Name (Dropdown: Outlet 1, Outlet 2, etc.)
D: Revenue (Number, Rp format)
E: Transactions (Number, integer)
F: Average_Check (Auto-calculated: D / E)
G: Food_Cost (Number, Rp format)
H: Food_Cost_Pct (Auto-calculated: G / D)
I: Labor_Cost (Number, Rp format)
J: Labor_Cost_Pct (Auto-calculated: I / D)
K: Notes (Text, optional)

Validation:
- Date: Must be unique (can't enter same date twice)
- Revenue: Must be >0
- Transactions: Must be >0
- Outlet_Name: Must match dropdown list

Pre-filled Sample Data:
- 30 days of dummy data (helps customer see how it works)
- Instructions tab (how to fill this template)
```

**Template 2: Top_Items.xlsx**

**Purpose:** Track bestsellers, slow movers, and menu performance

**Sheet Structure:**

```
Sheet 1: Daily_Top_Items

Columns:
A: Date (DD/MM/YYYY)
B: Outlet_Name (Dropdown)
C: Item_Name (Dropdown list of menu items)
D: Category (Dropdown: Food, Beverage, Dessert, etc.)
E: Quantity_Sold (Number)
F: Revenue (Number)
G: COGS (Number)
H: Food_Cost_Pct (Auto-calculated: G / F)
I: Profit (Auto-calculated: F - G)
J: Profit_Margin_Pct (Auto-calculated: I / F)

Sheet 2: Menu_Master

Purpose: Define your menu items (one-time setup)

Columns:
A: Item_Name
B: Category
C: Standard_Price
D: Standard_COGS
E: Active (Yes/No)

Instructions:
- Fill this sheet FIRST (your complete menu)
- Sheet 1 "Item_Name" dropdown pulls from here
```

**Template 3: Staff_Performance.xlsx**

**Purpose:** Track staff performance, payroll, and labor efficiency

**Sheet Structure:**

```
Sheet 1: Weekly_Staff

Columns:
A: Week_Starting_Date (Monday of the week)
B: Outlet_Name (Dropdown)
C: Staff_Name (Dropdown from Staff_Master)
D: Role (Dropdown: Server, Cook, Manager, Cashier)
E: Hours_Worked (Number)
F: Wages_Paid (Number)
G: Revenue_Served (Number, for servers only)
H: Transactions_Handled (Number, for servers/cashiers)
I: Revenue_per_Hour (Auto-calculated: G / E)
J: Wage_Pct (Auto-calculated: F / G)

Sheet 2: Staff_Master

Purpose: Define your team (one-time setup)

Columns:
A: Staff_Name
B: Role
C: Hourly_Rate
D: Outlet_Assignment
E: Active (Yes/No)
```

---

### 1.3 Automation & Integration

**Refresh Automation:**

**Manual Refresh (Alpha 0.1):**
- User clicks "Refresh" button in Power BI Desktop
- Dashboard updates with latest Excel data
- Takes 5-10 seconds (depends on data volume)

**Scheduled Refresh (NOT in Alpha 0.1, planned for Beta 0.1):**
- Power BI Service (cloud) auto-refresh
- Daily at 6am (configurable)
- Requires Power BI Pro license (Rp 140K/month)

**Data Source Integration:**

**Alpha 0.1 Supported:**
- Excel (.xlsx) - Primary data source
- Google Sheets (read-only, requires connection setup)
- CSV (manual import, not live-linked)

**NOT Supported in Alpha 0.1 (Future):**
- Direct POS API (Moka, Pawoon, Qasir) - Planned for Beta 0.2
- Accounting software sync (Accurate, Jurnal) - Planned for v1.0
- Multi-file consolidation (requires Power Query scripting) - Tier 2 feature

---

### 1.4 Training Content (Bahasa Indonesia)

**Video Tutorials (5 Videos, 2 Hours Total):**

| Video | Duration | Topic | What Customer Learns |
|-------|----------|-------|---------------------|
| **1. Quick Start** | 15 min | First-time setup | Download -> Open -> Refresh -> See data |
| **2. Excel Templates** | 30 min | How to fill templates | Data entry workflow, dropdowns, validation |
| **3. Dashboard Navigation** | 20 min | Using the dashboard | Click filters, sort tables, read visuals |
| **4. Common Issues** | 10 min | Troubleshooting | Data source errors, refresh failed, format issues |
| **5. Best Practices** | 25 min | Tips & tricks | Daily vs weekly usage, data quality, insights to look for |

**Documentation (PDF Guides):**

1. **Setup Guide** (10 pages) - Step-by-step first-time setup
2. **Excel Template Reference** (15 pages) - Field-by-field explanations
3. **Power BI Basics** (8 pages) - How to use Power BI Desktop (for beginners)
4. **FAQ** (20 pages) - 50 common questions answered

---

## Part 2: Technical Specifications

### 2.1 System Requirements

**Customer Requirements (Minimum):**

| Component | Requirement | Why |
|-----------|------------|-----|
| **Operating System** | Windows 10 or later | Power BI Desktop is Windows-only |
| **Power BI Desktop** | Latest version (free download) | Required to open .pbix file |
| **Microsoft Excel** | Excel 2016 or later (or Office 365) | Data entry templates |
| **RAM** | 4GB minimum, 8GB recommended | Power BI performance |
| **Storage** | 500MB free space | .pbix file + Excel data |
| **Internet** | Required for initial download | Dashboard itself works offline after setup |

**Optional (Enhanced Experience):**

| Component | Benefit | Cost |
|-----------|---------|------|
| **Power BI Pro License** | Cloud publishing, scheduled refresh | Rp 140K/month (Microsoft) |
| **OneDrive/Google Drive** | Excel file backup, multi-user sync | Free (5GB) - Rp 30K/month (1TB) |
| **Dual Monitor** | Dashboard on one screen, Excel on another | N/A (hardware) |

---

### 2.2 File Structure & Deliverables

**What Customer Downloads (ZIP file - ~50MB):**

```
Power_BI_FnB_Template_v0.1.zip

 Dashboard/
 FnB_Dashboard_v0.1.pbix (Power BI file, 15MB)

 Excel_Templates/
 Daily_Sales.xlsx (with 30 days sample data, 500KB)
 Top_Items.xlsx (with sample menu, 400KB)
 Staff_Performance.xlsx (with sample staff, 300KB)

 Videos/ (or links to online videos)
 1_Quick_Start.mp4 (3GB - hosted online, link provided)
 2_Excel_Templates.mp4 (hosted online)
 3_Dashboard_Navigation.mp4
 4_Common_Issues.mp4
 5_Best_Practices.mp4

 Guides/
 Setup_Guide.pdf (2MB)
 Excel_Template_Reference.pdf (3MB)
 Power_BI_Basics.pdf (1.5MB)
 FAQ.pdf (2.5MB)

 README.txt (Installation instructions, 5KB)
```

**Total Download Size:** ~60MB (excluding videos - videos streamed online)

---

### 2.3 Data Model Architecture

**Power BI Data Model (Simplified):**

```
Tables (3 main tables):

1. Daily_Sales (Fact Table)
 - Date (PK)
 - Outlet_Name
 - Revenue
 - Transactions
 - Food_Cost
 - Labor_Cost
 - [10 calculated columns]

2. Top_Items (Fact Table)
 - Date
 - Outlet_Name
 - Item_Name
 - Quantity_Sold
 - Revenue
 - COGS
 - [8 calculated columns]

3. Staff_Performance (Fact Table)
 - Week_Starting_Date
 - Outlet_Name
 - Staff_Name
 - Hours_Worked
 - Wages_Paid
 - Revenue_Served
 - [6 calculated columns]

Relationships:
- Daily_Sales[Date] ↔ Calendar[Date] (one-to-many)
- Daily_Sales[Outlet_Name] ↔ Outlets[Outlet_Name] (many-to-one)
- Top_Items[Date] ↔ Calendar[Date] (one-to-many)
- Top_Items[Item_Name] ↔ Menu_Master[Item_Name] (many-to-one)

Calculated Tables:
- Calendar (auto-generated date dimension, 2020-2030)
- Outlets (list of outlet names from data)
- Menu_Master (imported from Top_Items.xlsx Sheet 2)
```

**DAX Measures (30 Total):**

Sample measures:
```dax
Revenue_Today =
CALCULATE(
 SUM(Daily_Sales[Revenue]),
 Daily_Sales[Date] = TODAY()
)

Revenue_This_Week =
CALCULATE(
 SUM(Daily_Sales[Revenue]),
 DATESINPERIOD(Calendar[Date], TODAY(), -7, DAY)
)

Food_Cost_Pct =
DIVIDE(
 SUM(Daily_Sales[Food_Cost]),
 SUM(Daily_Sales[Revenue]),
 0
)

Item_Rank_Revenue =
RANKX(
 ALL(Top_Items[Item_Name]),
 CALCULATE(SUM(Top_Items[Revenue])),
 ,
 DESC,
 DENSE
)
```

---

### 2.4 Performance Benchmarks

**Target Performance (Tested with 5 Beta Customers):**

| Metric | Target | Alpha 0.1 Actual | Status |
|--------|--------|-----------------|--------|
| **Initial Load Time** | <10 seconds | 6 seconds avg | Pass |
| **Refresh Time (30 days data)** | <30 seconds | 12 seconds avg | Pass |
| **Refresh Time (365 days data)** | <2 minutes | 45 seconds avg | Pass |
| **File Size (.pbix)** | <50MB (1 year data) | 18MB avg | Pass |
| **RAM Usage** | <2GB | 1.2GB avg | Pass |

**Scalability Limits (Alpha 0.1):**

| Data Volume | Performance | Recommendation |
|-------------|-------------|----------------|
| **Daily: 1-30 rows** | Excellent (<5s refresh) | Ideal for single outlet |
| **Daily: 30-90 rows** | Good (<15s refresh) | Good for 3 outlets |
| **Daily: 90-365 rows** | Moderate (<60s refresh) | Acceptable for 5 outlets |
| **Daily: >365 rows** | Slow (>2 min refresh) | Consider data archiving or upgrade to Tier 2 |

---

## Part 3: Known Limitations & Constraints

### 3.1 Feature Limitations (By Design)

**Alpha 0.1 Intentional Exclusions:**

| Feature | Why NOT Included | Planned Version |
|---------|-----------------|----------------|
| **>30 metrics** | Overwhelming for first-time users | Beta 0.1 (Tier 2 - 70 metrics) |
| **Multi-outlet consolidation** | Requires advanced Power Query | Beta 0.1 (Tier 2 add-on) |
| **Automated refresh** | Requires Power BI Pro ($10/month) | Beta 0.1 (optional upgrade) |
| **Direct POS API** | POS vendor partnerships not finalized | Beta 0.2 (Tier 3) |
| **Forecasting** | Needs 6+ months historical data | v1.0 (Tier 2/3 add-on) |
| **Customer segmentation (RFM)** | Requires customer-level data | v1.0 (Tier 2 add-on) |
| **Mobile app** | Power BI Mobile separate product | OUT OF SCOPE (use Power BI Mobile app) |

---

### 3.2 Technical Constraints

**Constraint 1: Windows-Only**

- **Issue:** Power BI Desktop only works on Windows
- **Impact:** Mac users must use:
 - Parallels/Boot Camp (run Windows on Mac)
 - OR Power BI Service (cloud, requires Pro license Rp 140K/month)
- **Workaround:** We provide Power BI Service setup guide for Mac users
- **Long-term:** Exploring web-based alternatives (Power BI Embedded, custom web app)

---

**Constraint 2: Manual Data Entry (No Auto-Import)**

- **Issue:** Alpha 0.1 doesn't auto-import from POS/accounting systems
- **Impact:** Customer must manually enter data daily (5-10 min/day)
- **Workaround:** Excel templates streamline entry (dropdowns, validation)
- **Long-term:** Beta 0.2 will support CSV auto-import, Beta 0.3 API

---

**Constraint 3: Single-User (No Collaboration)**

- **Issue:** Power BI Desktop file (.pbix) can only be opened by one person at a time
- **Impact:** If owner + manager both need access, must take turns OR use Power BI Service
- **Workaround:**
 - Share Excel files via Google Drive (multiple people can enter data)
 - Owner refreshes dashboard centrally
 - Export dashboard to PDF, share with team
- **Long-term:** Power BI Service (cloud) solves this, but requires Pro license

---

**Constraint 4: Limited Historical Data (Beta Customers)**

- **Issue:** Beta customers only have 30-90 days of data (just started)
- **Impact:** Can't validate forecasting, seasonality, YoY trends
- **Workaround:** Focus on MoM trends, week-over-week comparisons
- **Long-term:** As customers accumulate 6-12 months data, enable advanced analytics

---

### 3.3 Data Quality Dependencies

**Garbage In = Garbage Out**

Alpha 0.1 assumes customer enters **clean, accurate data**. If data quality is poor, dashboard insights are meaningless.

**Common Data Quality Issues (Caught in Beta):**

| Issue | Example | Impact | Prevention |
|-------|---------|--------|------------|
| **Typos in item names** | "Nasi Goreng" vs "nasi goreng" vs "Nasgor" | Item appears as 3 separate items, can't track properly | Excel dropdown validation (Sheet 2: Menu Master prepopulated) |
| **Wrong date format** | Customer enters MM/DD/YYYY, Excel expects DD/MM/YYYY | Dashboard shows wrong dates | Excel cell validation (force DD/MM/YYYY format) |
| **Missing data** | Customer forgets to enter data for 5 days | Dashboard gaps, trend charts incomplete | Weekly reminder email (from our CS team) |
| **Revenue in thousands** | Customer enters "1500" instead of "1,500,000" | Food cost % shows as 15,000% (impossible) | Excel conditional formatting (red flag if Food Cost >50%) |

**Data Quality Dashboard (Planned for Beta 0.1):**
- "Last Updated" timestamp (shows if data is stale)
- Missing days count ("You have 3 days with no data this month")
- Outlier detection ("Revenue today is 10x average - typo?")

---

## Part 4: Testing & Quality Assurance

### 4.1 Testing Methodology

**Beta Test Program (December 2025):**

**Participants:** 5 F&B businesses
- 2 × Tier 1 (single outlet: 1 café, 1 bakery)
- 2 × Tier 2 (multi-outlet: 1 restaurant 3 locations, 1 coffee chain 4 locations)
- 1 × Tier 3 (enterprise: 5-outlet bakery chain)

**Test Duration:** 3 weeks (Dec 6-27, 2025)

**Test Objectives:**
1. **Setup Success:** Can customer set up dashboard in <24 hours without support?
2. **Data Entry:** Can customer fill Excel templates in <10 min/day?
3. **Insights Discovery:** Does customer discover ≥1 valuable insight in Week 1?
4. **Usability:** Can customer navigate dashboard without training?
5. **Performance:** Does dashboard refresh in <30 seconds with real data?

---

### 4.2 Test Results Summary

**Setup Success: 100% (5/5)**

| Customer | Time to Setup | Support Needed? | Blockers | Resolution |
|----------|--------------|----------------|----------|------------|
| Dimas (Café) | 30 min | No | None | Self-served |
| Amanda (Restaurant) | 2 hours | Yes (1 call, 30 min) | CSV format confusion | Excel template solved it |
| Andi (Bakery) | 45 min | No | None | Self-served |
| Pak Budi (QSR) | 1 hour | No | Initial date format error | Found solution in FAQ |
| Bu Siti (Coffee) | 3 hours | Yes (2 calls, 60 min total) | Multi-location consolidation | Upgraded to Tier 2 template |

**Average Setup Time:** 1.5 hours (Target: <24 hours )

---

**Data Entry: 100% Adoption (5/5)**

| Customer | Daily Entry Time | Consistency (days entered / 21 days) | Feedback |
|----------|-----------------|----------------------------------|----------|
| Dimas | 5 min | 21/21 (100%) | "Easy, dropdowns help" |
| Amanda | 15 min (3 outlets) | 18/21 (86%) | "Sometimes forget weekends" |
| Andi | 10 min (5 outlets) | 21/21 (100%) | "Staff help me enter data" |
| Pak Budi | 7 min | 19/21 (90%) | "Mostly consistent" |
| Bu Siti | 12 min (4 outlets) | 17/21 (81%) | "Learning curve first week" |

**Average Entry Time:** 9.8 min/day (Target: <10 min )

---

**Insights Discovery: 100% (5/5)**

| Customer | First Insight | When | Financial Impact |
|----------|--------------|------|------------------|
| Dimas | Food cost 37% (vs 30% target) | Day 1 | Saved Rp 2.1M/month |
| Amanda | Outlet #3 underpriced by 20% | Day 2 | Revenue +Rp 3M/month |
| Andi | Manager stealing (sales pattern) | Week 2 | Saved Rp 4M/month |
| Pak Budi | Overstaffing Mondays | Week 1 | Saved Rp 1.5M/month |
| Bu Siti | VIP churn (12 customers missing) | Week 1 | Recovered Rp 1.2M/month |

**Average Time to First Insight:** <24 hours (Target: <48 hours Exceeded)

---

**NPS Score: 80 (Target: >60 Exceeded)**

| Customer | NPS Score | Promoter/Passive/Detractor | Comment |
|----------|----------|---------------------------|---------|
| Dimas | 10 | Promoter | "Saved my business from food cost creep" |
| Amanda | 9 | Promoter | "Multi-outlet view is exactly what I needed" |
| Andi | 9 | Promoter | "Replaced junior analyst, much cheaper" |
| Pak Budi | 8 | Passive | "Good, but wanted more automation" |
| Bu Siti | 9 | Promoter | "Finally understand my data" |

**Average NPS:** 80 (4 Promoters, 1 Passive, 0 Detractors)

---

### 4.3 Bug Tracking & Resolution

**Bugs Found During Beta:**

| Bug ID | Severity | Description | Root Cause | Resolution | Status |
|--------|----------|-------------|------------|------------|--------|
| **B001** | High | Revenue_This_Week showing wrong total | DAX formula using wrong date filter | Fixed DAX (DATESINPERIOD) | Fixed v0.1.1 |
| **B002** | Medium | Item rank not updating after refresh | RANKX not recalculating | Added CALCULATE wrapper | Fixed v0.1.1 |
| **B003** | Low | Sample data shows 2024 dates (should be 2025) | Hardcoded sample data | Updated sample data | Fixed v0.1.1 |
| **B004** | Medium | Excel dropdown showing duplicates | Menu_Master has duplicate item names | Added Excel validation rule | Fixed v0.1.2 |
| **B005** | Low | Video tutorial link broken (404) | Wrong URL in README | Updated README | Fixed v0.1.1 |

**Total Bugs:** 5 (2 Medium, 2 Low, 1 High)
**All Resolved:** Yes (before Dec 15 production release)

---

## Part 5: Release Notes

### 5.1 Alpha 0.1 Changelog

**Version 0.1.0 (December 6, 2025) - Initial Beta**

**New Features:**
- 2 dashboard pages (Executive Overview, Top Items Analysis)
- 30 core metrics
- 3 Excel templates (Daily_Sales, Top_Items, Staff_Performance)
- 5 video tutorials (Bahasa Indonesia, 2 hours total)
- 4 PDF guides (Setup, Templates, Power BI Basics, FAQ)

**Known Issues:**
- Revenue_This_Week calculation incorrect (B001)
- Item rank not updating (B002)

---

**Version 0.1.1 (December 10, 2025) - Bug Fix**

**Fixed:**
- B001: Revenue_This_Week DAX formula corrected
- B002: Item rank recalculation fixed
- B003: Sample data updated to 2025 dates
- B005: Video tutorial links updated

**Known Issues:**
- B004: Excel dropdown duplicates (fix in progress)

---

**Version 0.1.2 (December 15, 2025) - Production Release**

**Fixed:**
- B004: Excel validation rules prevent duplicate item names

**Enhancements:**
- Improved Excel template instructions (based on beta feedback)
- Added "Quick Start Checklist" PDF (one-pager)
- Video thumbnails optimized for faster loading

**Status:** **PRODUCTION READY**

---

### 5.2 Migration Path (Alpha 0.1 -> Beta 0.1)

**For Existing Alpha 0.1 Customers:**

When Beta 0.1 launches (Target: January 2026), Alpha 0.1 customers can upgrade:

**Upgrade Process:**

1. **Download Beta 0.1** (.pbix file + new templates)
2. **Copy Excel data** from Alpha 0.1 templates to Beta 0.1 templates
 - Daily_Sales.xlsx: Copy all rows -> Beta 0.1 template
 - Top_Items.xlsx: Copy all rows -> Beta 0.1 template
 - Staff_Performance.xlsx: Copy all rows -> Beta 0.1 template
3. **Open Beta 0.1 dashboard** -> Refresh -> Data migrates automatically
4. **New features available:** +40 metrics, multi-outlet module, etc.

**Estimated Migration Time:** 30 minutes (one-time)

**Data Compatibility:** 100% compatible (same Excel template structure)

---

## Part 6: Success Criteria & Acceptance

### 6.1 Release Acceptance Criteria

**Alpha 0.1 was approved for production release based on:**

| Criteria | Target | Actual | Pass/Fail |
|----------|--------|--------|-----------|
| **Setup Success Rate** | >70% | 100% (5/5) | PASS |
| **First Insight <48 hours** | >60% | 100% (5/5 in <24h) | PASS |
| **Data Entry <10 min/day** | Average <10 min | 9.8 min avg | PASS |
| **Dashboard Refresh <30s** | <30s for 30 days data | 12s avg | PASS |
| **Critical Bugs** | 0 | 0 (all fixed by v0.1.2) | PASS |
| **NPS Score** | >60 | 80 | PASS |
| **Customer Retention** | >80% after 30 days | 100% (5/5 still using) | PASS |

**Overall Verdict:** **APPROVED FOR PRODUCTION**

---

### 6.2 Post-Launch Metrics (Dec 15-31, 2025)

**First 2 Weeks of Production:**

| Metric | Target (Sprint 1) | Actual | Status |
|--------|------------------|--------|--------|
| **Total Downloads** | 10 | 8 | 80% of target |
| **Setup Success Rate** | >85% | 87.5% (7/8) | On target |
| **Support Tickets** | <5 | 3 | Low support burden |
| **Avg Setup Time** | <24 hours | 2.5 hours avg | Excellent |
| **First Week NPS** | >60 | 75 | Exceeding |

**Conclusion:** Alpha 0.1 performing well in early production.

---

## Part 7: Lessons Learned & Recommendations

### 7.1 What Went Well

1. **Excel Templates = Game Changer**
 - Beta customers all cited Excel templates as #1 differentiator
 - 100% setup success (vs 40% industry avg for BI templates)
 - Recommendation: Double down on Excel ecosystem

2. **Bahasa Indonesia Videos**
 - Customers watched avg 3.5 of 5 videos
 - "Finally, BI tutorial in my language!" (common feedback)
 - Recommendation: Create more localized content

3. **Focus on 30 Metrics (Not 150)**
 - No customer said "I need more metrics" in Alpha 0.1
 - "Perfect amount, not overwhelming" (common feedback)
 - Recommendation: Keep Tier 1 at 30 metrics, save advanced for Tier 2

4. **Fast Time-to-Value (<24h)**
 - All 5 beta customers had aha moment within 24 hours
 - Drives retention, NPS, referrals
 - Recommendation: Design all future features for fast time-to-value

---

### 7.2 What Needs Improvement

1. **Multi-Outlet Consolidation**
 - 2/5 beta customers needed multi-outlet (40%)
 - Alpha 0.1 doesn't handle this well (manual workaround)
 - Recommendation: **PRIORITY for Beta 0.1** - Build native multi-outlet module

2. **Automated Refresh**
 - 3/5 customers asked "Can this auto-update?"
 - Manual refresh acceptable for now, but not ideal
 - Recommendation: Beta 0.1 add Power BI Service setup guide (optional upgrade)

3. **POS Integration**
 - All 5 customers asked "Can this connect to my POS directly?"
 - Manual CSV export -> Excel entry is friction point
 - Recommendation: Beta 0.2 priority - Moka/Pawoon API integration

4. **Mobile Access**
 - 2/5 customers wanted to check dashboard on phone
 - Power BI Desktop is desktop-only (no mobile)
 - Recommendation: Guide customers to Power BI Mobile app (Power BI Service required)

---

### 7.3 Recommendations for Beta 0.1

**High Priority (Must-Have):**

1. **Multi-Outlet Module** (Tier 2 add-on, +Rp 1.25M)
 - Consolidates 2-5 outlets into one dashboard
 - Cross-outlet comparison (revenue, food cost, staff performance)
 - Target: 40% of customers will need this

2. **Increase to 70 Metrics** (Tier 2 base)
 - Add 40 metrics (menu engineering, customer insights, forecasting)
 - Tier 1 stays at 30 (don't overwhelm beginners)

3. **Power BI Service Setup Guide** (Optional upgrade)
 - Step-by-step guide to publish dashboard to cloud
 - Enables: Automated refresh, mobile access, sharing
 - Cost: Power BI Pro Rp 140K/month (customer pays Microsoft)

**Medium Priority (Nice-to-Have):**

4. **POS Export Automation Script** (Tier 2-3 add-on)
 - Python/PowerShell script to auto-export POS data to Excel
 - Reduces daily manual work from 10 min -> 2 min
 - Target: Moka, Pawoon users (50% of market)

5. **Data Quality Dashboard** (All tiers)
 - "Last Updated" timestamp
 - Missing data alerts
 - Outlier detection (revenue 10x average = likely typo)

**Low Priority (Future):**

6. ⏸ **Direct POS API Integration** (Tier 3, Beta 0.3+)
 - Requires POS vendor partnerships (in progress)
 - Real-time data sync (no manual entry)

---

**Document Status:** VALIDATED & ARCHIVED (Alpha 0.1 complete)
**Next Version:** Beta 0.1 (Target: January 2026)
**Owner:** Product Lead
**Last Review:** January 8, 2026

**Related Documents:**
- [[products/01-power-bi-template/specifications/core/01-master-prd|Master Product Specifications]]
- [[products/01-power-bi-template/business-intelligence/product-strategy/comprehensive-product-strategy|Comprehensive Product Strategy]]
- [[products/01-power-bi-template/customer-success/onboarding-playbook|Onboarding Playbook]] (setup success metrics)
