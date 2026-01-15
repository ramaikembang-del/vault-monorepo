# Product Specifications - Power BI Template (Product 01)

**Product:** A1 - Power BI F&B Analytics Template
**Product Line:** 3-Tier Modular System (Essentials, Professional, Enterprise)
**Current Version:** Alpha 0.1 (Production)
**Next Version:** Beta 0.1 (Target: January 2026)

**Document Owner:** Product Lead
**Last Updated:** January 8, 2026
**Status:** LIVING DOCUMENT - Updated with each release

---

## Document Purpose & Audience

### Purpose

This document serves as the **definitive reference** for all product features, technical requirements, and capabilities of the Power BI F&B Analytics Template across all tiers. Use this for:

- **Sales:** Understanding what each tier includes (feature comparison)
- **Customer Success:** Troubleshooting, onboarding guidance
- **Product Development:** Feature prioritization, roadmap planning
- **Marketing:** Messaging, positioning, content creation

### Audience

- **Sales Team:** Sections 1-4 (Core Features, Tier Comparison, Use Cases)
- **Customer Success:** Sections 3-6 (Features, Requirements, Troubleshooting)
- **Product Team:** All sections (complete technical reference)
- **Marketing:** Sections 1-2, 4 (Features, Benefits, Positioning)

---

## Part 1: Product Overview

### 1.1 What Is This Product?

**Power BI F&B Analytics Template** is a **complete business intelligence ecosystem** designed specifically for Indonesian food & beverage businesses.

**NOT just a Power BI template** (common misconception)
**BUT a complete bundle:**

1. **Power BI Dashboard** (.pbix file with pre-built visualizations)
2. **Excel Templates** (3-9 templates for data entry, F&B-specific)
3. **Google Sheets Integration** (multi-user collaboration option)
4. **One-Click Refresh** (automated data processing)
5. **Training Content** (5-15 hours Bahasa Indonesia videos + PDFs)
6. **Setup Support** (see [[products/02-template-support/02-template-support|Product 02]] for support options)

### 1.2 Core Value Proposition

**"From Spreadsheet Chaos to Data-Driven Decisions in 30 Minutes"**

**Broken Down:**

- **"Spreadsheet Chaos"** = Current state (4-8 hours/week manual Excel hell)
- **"Data-Driven Decisions"** = Desired state (insights in seconds, not hours)
- **"30 Minutes"** = Time-to-value promise (setup in 30 min, not 8 hours)

### 1.3 Target Market

**Primary:** Indonesian F&B businesses with:
- 1-15 outlets (sweet spot: 1-5 outlets)
- Revenue Rp 250M - Rp 20B/year
- 5-100 staff
- Has POS system OR willing to use Power BI Desktop
- Decision-maker access (owner or GM can approve purchase)

**Geographic Focus:**
- **Phase 1 (Year 1):** Jakarta, Bandung, Surabaya (Tier 1 cities)
- **Phase 2 (Year 2):** Medan, Semarang, Bali, Makassar (Tier 2 cities)
- **Phase 3 (Year 3+):** All Indonesia + SEA expansion

**Excluded Segments:**
- Street food/warung (too small, no POS, can't afford)
- Large chains 50+ outlets (need enterprise SaaS, not templates)
- Non-F&B businesses (product is F&B-specific)

---

## Part 2: Three-Tier Architecture

### 2.1 Tier Philosophy

**Why 3 Tiers?**

Customers have different needs based on:
1. **Business size** (1 outlet vs 5 outlets)
2. **Tech comfort** (DIY vs done-for-you)
3. **Budget** (Rp 3.5M vs Rp 19.8M)

**Tier Design Principles:**

- **Tier 1:** Self-service, 30 metrics, perfect for solo owners (Phase 2)
- **Tier 2:** Guided setup, 70 metrics, ideal for multi-outlet (Phase 2.5-3)
- **Tier 3:** White-glove, 100-150 metrics, strategic partnership (Phase 3-4)

### 2.2 Tier Comparison Matrix

| Feature | Tier 1 Essentials | Tier 2 Professional | Tier 3 Enterprise |
|---------|------------------|---------------------|-------------------|
| **Price (Base)** | Rp 3.5M | Rp 7M | Rp 10M |
| **Price (Avg)** | Rp 4.7M (with modules) | Rp 9.5M (with modules) | Rp 12.5M (with modules) |
| **Metrics** | 30 core | 70 advanced | 100-150 strategic |
| **Dashboard Pages** | 2 pages | 5 pages | 8+ pages |
| **Excel Templates** | 3 templates | 6 templates | 9 templates |
| **Video Tutorials** | 5 videos (2 hours) | 10 videos (5 hours) | 15 videos (8 hours) |
| **Setup Support** | Product 02 | Product 02 (extended) | Product 02 (unlimited) |
| **Setup** | DIY (self-service) | Guided (1:1 call) | Done-for-you (white-glove) |
| **POS Integration** | Manual CSV import | POS-specific template | Custom API (optional) |
| **Multi-Outlet** | Single outlet only | 2-5 outlets | 2-15+ outlets |
| **White-Label** | No | No | Yes (your branding) |
| **Customization** | 0 included | 1 included | 2/month (Product 02) |
| **Ongoing Support** | None (14-day only) | Email <24h | Unlimited (Product 02) |
| **Best For** | 1-2 outlets, DIY, budget-conscious | 2-5 outlets, needs guidance | 5-15 outlets, strategic focus |

---

### 2.3 Add-On Modules (All Tiers)

**Modular Pricing:** Each tier has a base package + optional add-on modules (+Rp 1.25M each)

**Available Modules:**

| Module Name | Adds | Use Case | Compatible Tiers |
|-------------|------|----------|-----------------|
| **Multi-Outlet Integration** | +15 metrics, consolidation | 2-5 outlets | T1, T2, T3 |
| **Menu Engineering** | +12 metrics, profitability matrix | Menu optimization | T1, T2, T3 |
| **Customer Intelligence** | +11 metrics, RFM segmentation | Loyalty programs | T2, T3 |
| **Advanced Workforce** | +12 metrics, labor efficiency | 10+ staff | T2, T3 |
| **Predictive Forecasting** | +8 metrics, trend analysis | Need 6+ months data | T2, T3 |
| **Executive Intelligence** | +15 metrics, board-ready | Investor reporting | T3 only |

**Module Pricing Examples:**

```
Tier 1 Base (Rp 3.5M) + Multi-Outlet (Rp 1.25M) + Menu Engineering (Rp 1.25M) = Rp 6M
Tier 2 Base (Rp 7M) + Customer Intelligence (Rp 1.25M) = Rp 8.25M
Tier 3 Base (Rp 10M) + Executive Intelligence (Rp 1.25M) + Advanced Workforce (Rp 1.25M) = Rp 12.5M
```

---

## Part 3: Complete Feature Catalog

### 3.1 Metrics Breakdown (By Tier)

**Tier 1: 30 Core Metrics (Survival Analytics)**

**Category: Revenue (6 metrics)**
1. Revenue Today
2. Revenue This Week
3. Revenue This Month
4. Revenue vs Target %
5. Average Check Size
6. Customer Growth MoM %

**Category: Cost Management (4 metrics)**
7. Food Cost % (COGS / Revenue)
8. Labor Cost % (Payroll / Revenue)
9. Total Operating Cost %
10. Profit Margin % (estimated)

**Category: Menu Performance (10 metrics)**
11. Top 10 Items by Revenue
12. Top 10 Items by Quantity Sold
13. Item Revenue %
14. Item Food Cost %
15. Item Profit Margin %
16. Item Rank (Revenue)
17. Item Rank (Profit)
18. Slow Movers (bottom 10% revenue)
19. New Items (launched last 30 days)
20. Discontinued Items

**Category: Operations (6 metrics)**
21. Transactions Count
22. Average Items per Transaction
23. Peak Hour (highest revenue hour)
24. Slowest Hour
25. Best Day of Week
26. Worst Day of Week

**Category: Team Performance (4 metrics)**
27. Staff Count
28. Revenue per Staff (total revenue / staff count)
29. Labor Hours Worked
30. Average Hourly Wage

---

**Tier 2: 70 Metrics (+40 Advanced Metrics to Tier 1)**

**All 30 Tier 1 metrics PLUS:**

**Category: Menu Engineering (12 new)**
31. Item Popularity Score (quantity sold normalized)
32. Item Profitability Score (margin normalized)
33. Menu Engineering Matrix (Stars, Plowhorses, Puzzles, Dogs)
34. Cross-Sell Rate (combo items sold together)
35. Bundle Performance (meal deals, promos)
36. Price Elasticity (revenue change when price changes)
37. Menu Category Contribution Margin
38. Limited-Time Offer (LTO) Performance
39. Seasonal Menu ROI
40. Product Launch Success Rate
41. Menu Refresh Impact (before/after comparison)
42. Competitive Menu Gap Analysis (vs market average)

**Category: Customer Intelligence (11 new)**
43. Customer Lifetime Value (CLV)
44. RFM Segmentation (Recency, Frequency, Monetary)
45. VIP Customers (top 20% revenue)
46. At-Risk Customers (haven't visited 30+ days)
47. Customer Retention Rate
48. Customer Churn Rate
49. Acquisition Cost per Customer
50. Referral Rate
51. Review/Rating Trends
52. Social Media Sentiment Score
53. Loyalty Program ROI

**Category: Workforce Analytics (12 new)**
54. Productivity Index (revenue per labor hour)
55. Schedule Efficiency % (actual vs planned)
56. Overtime Cost Analysis
57. Cost per Shift
58. Staff Utilization Rate
59. Cross-Training Effectiveness
60. Manager Performance Score
61. Team Cohesion Index
62. Recruitment Cost per Hire
63. Training ROI
64. Labor Cost Forecast (next 90 days)
65. Staff Turnover Rate

**Category: Multi-Outlet (15 new)**
66. Cross-Outlet Revenue Comparison
67. Cross-Outlet Food Cost Comparison
68. Cross-Outlet Labor Cost Comparison
69. Outlet Rank (Performance)
70. Outlet Contribution to Total Revenue %
71. Same-Store Sales Growth (SSS)
72. Outlet-Level Profit & Loss (P&L)
73. Outlet Manager Scorecard
74. Best Practices Replication Score
75. Outlet Expansion Readiness
76. Multi-Location Inventory Sync
77. Cross-Outlet Staff Transfer Impact
78. Regional Trends (by city/area)
79. Outlet Opening Timeline & ROI
80. Cannibalization Risk (new outlet impact on existing)

---

**Tier 3: 100-150 Metrics (+30-80 Strategic Metrics to Tier 2)**

**All 70 Tier 2 metrics PLUS:**

**Category: Executive Intelligence (15 new)**
81. Gap to Annual Target (breakdown by month)
82. Required Daily Run Rate (to hit annual target)
83. Revenue Forecast (next 30/60/90 days)
84. Forecast vs Actual Variance %
85. Scenario Analysis (Best/Base/Worst case)
86. Strategic KPI Dashboard
87. Business Health Score (0-100 composite)
88. Growth Rate Trend (YoY, QoQ, MoM)
89. Market Share Estimate (vs competitors)
90. Competitive Position Analysis
91. Expansion Readiness Score
92. Cash Runway (months remaining)
93. Burn Rate Analysis
94. Investment ROI Tracking
95. Board-Ready Executive Summary

**Category: Advanced Forecasting (8 new)**
96. Predictive Revenue Model (ML-based)
97. Seasonality Index
98. Demand Forecasting (by item, by day)
99. Staff Scheduling Optimization (AI-recommended)
100. Inventory Reorder Point Prediction
101. Customer Lifetime Value Prediction
102. Churn Risk Prediction (propensity score)
103. Profitability Trend Projection

**Category: Financial Intelligence (10 new)**
104. Cash Flow Projection
105. Working Capital Analysis
106. Accounts Receivable Aging
107. Accounts Payable Aging
108. Break-Even Analysis
109. Contribution Margin by Product/Outlet
110. Fixed vs Variable Cost Breakdown
111. Operating Leverage
112. Financial Ratios (ROI, ROE, Current Ratio)
113. Valuation Estimate (business worth)

**Category: Operational Excellence (7 new)**
114. Order Fulfillment Time (kitchen efficiency)
115. Table Turnover Rate
116. Waste Percentage
117. Shrinkage/Theft Detection
118. Equipment Downtime
119. Supplier Performance Scorecard
120. Compliance Checklist Completion %

**Category: Customer Deep Dive (10 new)**
121. Cohort Analysis (retention curves)
122. Net Promoter Score (NPS) tracking
123. Customer Acquisition Channel Performance
124. Win-Back Campaign ROI
125. Upsell/Cross-Sell Success Rate
126. Reservation/Waitlist Analytics
127. Dine-In vs Takeout vs Delivery Mix
128. Online vs Offline Channel Performance
129. Customer Complaint Trends
130. Customer Service Response Time

**Category: Franchise/Enterprise (remaining to 150)**
131. Franchise Royalty Tracking
132. Brand Consistency Score (across outlets)
133. Compliance Audit Results
134. Training Completion Rate
135. Franchise Profitability Comparison
136. Expansion Market Analysis
137. M&A Target Screening
138-150. Custom Metrics (client-specific)

---

### 3.2 Dashboard Pages (By Tier)

**Tier 1: 2 Pages**
1. Executive Overview
2. Top Items Analysis

**Tier 2: 5 Pages**
1. Executive Overview (enhanced)
2. Top Items Analysis (enhanced)
3. Multi-Outlet Comparison
4. Workforce Analytics
5. Customer Insights

**Tier 3: 8+ Pages**
1. Executive Overview (full)
2. Menu Engineering Deep Dive
3. Multi-Outlet Consolidated View
4. Workforce & Labor Intelligence
5. Customer Segmentation & Loyalty
6. Financial P&L Dashboard
7. Forecasting & Scenarios
8. Board-Ready Executive Summary
9+ Custom Pages (based on modules selected)

---

### 3.3 Excel Templates (By Tier)

**Tier 1: 3 Templates**

1. **Daily_Sales.xlsx**
 - Daily revenue, transactions, food cost, labor cost
 - 1 sheet (Daily_Entry)
 - Pre-filled with 30 days sample data
 - Instructions tab

2. **Top_Items.xlsx**
 - Daily top menu items tracking
 - 2 sheets (Daily_Top_Items, Menu_Master)
 - Sample menu included

3. **Staff_Performance.xlsx**
 - Weekly staff hours, wages, revenue served
 - 2 sheets (Weekly_Staff, Staff_Master)
 - Sample staff roster included

---

**Tier 2: 6 Templates (adds 3)**

All Tier 1 templates PLUS:

4. **Inventory_Management.xlsx**
 - Weekly inventory counts, reorder points
 - Tracks ingredient usage, waste, shrinkage
 - 3 sheets (Weekly_Inventory, Ingredient_Master, Supplier_Master)

5. **Customer_Data.xlsx**
 - Customer name, phone, email, visit frequency
 - RFM segmentation input
 - 2 sheets (Customer_List, Visit_History)

6. **Multi_Outlet_Consolidation.xlsx**
 - Aggregates data from multiple Daily_Sales.xlsx files
 - Cross-outlet comparison summary
 - 1 sheet (Auto-consolidation via Power Query)

---

**Tier 3: 9 Templates (adds 3)**

All Tier 2 templates PLUS:

7. **Cash_Flow.xlsx**
 - Weekly cash inflows/outflows
 - Bank reconciliation
 - 2 sheets (Cash_Transactions, Bank_Accounts)

8. **Supplier_Invoices.xlsx**
 - Supplier invoice tracking, payment terms
 - Accounts payable aging
 - 2 sheets (Invoice_List, Supplier_Master)

9. **Strategic_Targets.xlsx**
 - Annual targets, quarterly goals, monthly milestones
 - Gap tracking
 - 3 sheets (Annual_Targets, Actuals, Variance_Analysis)

---

### 3.4 Video Training Content (By Tier)

**Tier 1: 5 Videos (2 Hours Total)**

| Video | Duration | Topic | Learning Outcomes |
|-------|----------|-------|-------------------|
| 1. Quick Start | 15 min | First-time setup | Download -> Install -> Open -> Refresh |
| 2. Excel Templates | 30 min | Data entry workflow | Fill templates, use dropdowns, validate data |
| 3. Dashboard Navigation | 20 min | Using the dashboard | Filters, slicers, drill-down, export |
| 4. Common Issues | 10 min | Troubleshooting | Fix data source errors, refresh failures |
| 5. Best Practices | 25 min | Tips & tricks | Daily vs weekly usage, data quality, insights |

---

**Tier 2: 10 Videos (5 Hours Total)**

All Tier 1 videos PLUS:

| Video | Duration | Topic |
|-------|----------|-------|
| 6. Multi-Outlet Setup | 45 min | Consolidating multiple outlets |
| 7. Menu Engineering | 40 min | Using the menu matrix, optimization |
| 8. Customer Segmentation | 35 min | RFM analysis, VIP identification |
| 9. Power Query Basics | 50 min | Auto-import, data transformation (advanced) |
| 10. Customization 101 | 30 min | How to request customizations, what's possible |

---

**Tier 3: 15 Videos (8 Hours Total)**

All Tier 2 videos PLUS:

| Video | Duration | Topic |
|-------|----------|-------|
| 11. White-Label Setup | 30 min | Adding your logo, brand colors |
| 12. Executive Dashboards | 45 min | Board-ready reports, investor decks |
| 13. Forecasting & Scenarios | 50 min | Using predictive models |
| 14. Financial P&L Analysis | 40 min | Cash flow, profitability, ratios |
| 15. Advanced DAX | 55 min | Custom calculated measures (for power users) |

---

## Part 4: Technical Requirements

### 4.1 Customer System Requirements

**Minimum Requirements:**

| Component | Tier 1-2 | Tier 3 (if Power BI Service) |
|-----------|----------|------------------------------|
| **Operating System** | Windows 10+ | Windows 10+ OR Mac (via Service) |
| **Power BI Desktop** | Free (required) | Optional (if using Service only) |
| **Microsoft Excel** | 2016+ or Office 365 | Same |
| **RAM** | 4GB (8GB recommended) | 4GB |
| **Storage** | 500MB free | 500MB |
| **Internet** | For initial download | Continuous (for Service) |
| **Browser** | N/A | Chrome, Edge, Safari (for Service) |

---

### 4.2 Data Model Architecture

**Power BI Internal Structure:**

**Tables:**
- Daily_Sales (Fact Table)
- Top_Items (Fact Table)
- Staff_Performance (Fact Table)
- Inventory (Fact Table, T2+)
- Customers (Dimension Table, T2+)
- Cash_Flow (Fact Table, T3+)
- Calendar (Dimension Table, auto-generated)
- Outlets (Dimension Table)
- Menu_Master (Dimension Table)
- Staff_Master (Dimension Table)

**Relationships:**
- Star schema (Fact tables ↔ Dimension tables)
- One-to-many relationships
- Bi-directional filtering (where needed)

**DAX Measures:**
- 30 measures (Tier 1)
- 70 measures (Tier 2)
- 100-150 measures (Tier 3)

**Performance Optimization:**
- Aggregations (for large datasets)
- Calculated columns (pre-computed)
- Query folding (Power Query)
- DirectQuery (optional, T3 only)

---

### 4.3 Integration Capabilities

**Data Source Options:**

| Source | Tier 1 | Tier 2 | Tier 3 | Method |
|--------|--------|--------|--------|--------|
| **Excel (.xlsx)** | | | | Native connector |
| **Google Sheets** | | | | Web connector (read-only) |
| **CSV Files** | | | | Manual import |
| **Moka POS Export** | Manual | Custom template | API (Beta 0.3) | Custom |
| **Pawoon POS Export** | Manual | Custom template | API (Beta 0.3) | Custom |
| **Qasir POS Export** | Manual | Custom template | API (Beta 0.3) | Custom |
| **Accurate Accounting** | | | API (v1.0) | OAuth API |
| **Jurnal Accounting** | | | API (v1.0) | OAuth API |
| **SQL Database** | | | (custom) | DirectQuery |

---

### 4.4 Deployment Options

**Option 1: Power BI Desktop Only (Default - All Tiers)**

**Pros:**
- Free (no monthly cost)
- Works offline
- Full control (customer owns .pbix file)

**Cons:**
- Manual refresh (click button)
- Desktop-only (no mobile, no web)
- Single-user (can't share live dashboard)

**Best For:** Tier 1-2 customers, budget-conscious, privacy-focused

---

**Option 2: Power BI Service (Cloud) - Optional Upgrade**

**Pros:**
- Automated refresh (daily, hourly)
- Mobile access (Power BI Mobile app)
- Web access (view dashboard anywhere)
- Sharing (email link to team)

**Cons:**
- Requires Power BI Pro (Rp 140K/month per user, paid to Microsoft)
- Data stored in cloud (privacy concern for some)
- Requires continuous internet

**Best For:** Tier 2-3 customers, multi-user teams, wants automation

---

**Option 3: Power BI Embedded (White-Label Cloud) - Tier 3 Only**

**Pros:**
- Fully branded (no Power BI logo)
- Custom domain (dashboard.yourbusiness.com)
- API access (embed in website/app)

**Cons:**
- Expensive (Rp 1-5M/month to host)
- Requires dev setup (not DIY)

**Best For:** Tier 3 customers with white-label requirements

---

## Part 5: Use Cases & Workflows

### 5.1 Typical User Workflows

**Workflow 1: Daily Health Check (5 min)**

**User:** Owner/GM
**Frequency:** Daily (morning)
**Steps:**
1. Open Power BI Desktop
2. Click "Refresh" (updates dashboard with yesterday's data)
3. Check Executive Overview page:
 - Revenue Today vs Target
 - Food Cost % (alert if >35%)
 - Top 3 Items
4. Mental note: "Revenue down 10% yesterday, investigate why"
5. Close dashboard

**Value:** Quick daily pulse check, catch issues early

---

**Workflow 2: Weekly Team Meeting (15 min)**

**User:** Owner + Managers
**Frequency:** Weekly (Monday morning)
**Steps:**
1. Owner refreshes dashboard (shows last 7 days)
2. Screen share Executive Overview during meeting
3. Discuss:
 - Revenue This Week (vs target, vs last week)
 - Top 10 Items (any changes? New bestseller?)
 - Staff Performance (who's crushing it? Who needs coaching?)
4. Set next week's goals based on data
5. Export Top 10 chart to PDF, WhatsApp to team

**Value:** Data-driven team alignment

---

**Workflow 3: Monthly Financial Review (45 min)**

**User:** Owner + Accountant/CFO
**Frequency:** Monthly (1st of month)
**Steps:**
1. Owner refreshes dashboard (shows full previous month)
2. Review Tier 2/3 Financial pages:
 - Revenue This Month vs Target
 - Food Cost Trend (30-day chart)
 - Labor Cost Trend
 - P&L Summary (if Tier 3)
3. Compare dashboard numbers to accounting records (validation)
4. Discuss variances (why food cost spiked Week 3?)
5. Plan corrective actions for next month

**Value:** Financial accountability, proactive cost management

---

**Workflow 4: Menu Optimization (Quarterly - 2 hours)**

**User:** Owner + Head Chef
**Frequency:** Quarterly
**Steps:**
1. Open Menu Engineering page (Tier 2+)
2. Review Menu Engineering Matrix:
 - **Stars** (high popularity, high margin) -> Keep, promote
 - **Plowhorses** (high popularity, low margin) -> Increase price or reduce cost
 - **Puzzles** (low popularity, high margin) -> Better marketing or bundle
 - **Dogs** (low popularity, low margin) -> Remove from menu
3. Identify candidates for removal (3 worst "Dogs")
4. Test price increases on "Plowhorses" (increase 5%, monitor sales)
5. Create new menu items to replace removed ones

**Value:** Data-driven menu pruning, profitability optimization

---

### 5.2 Industry-Specific Use Cases

**Use Case 1: Coffee Shop (Tier 1)**

**Business:** 1 outlet, 10 staff, Rp 500M revenue/year
**Pain Point:** Food cost creeping up, don't know why
**Solution:**
- Track daily food cost % in Executive Overview
- Identify when cost spiked (Week 3 - supplier raised prices 15%)
- Compare Top Items food cost (Milk-based drinks jumped from 28% to 35%)
- **Action:** Switch milk supplier, reduce cost back to 30%
- **Result:** Save Rp 2M/month

---

**Use Case 2: Restaurant Chain (Tier 2 + Multi-Outlet Module)**

**Business:** 3 outlets, 40 staff, Rp 2.4B revenue/year
**Pain Point:** Don't know which outlet is most profitable
**Solution:**
- Multi-Outlet Comparison page shows:
 - Outlet A: Rp 850M revenue, 32% food cost, 25% labor = 43% total
 - Outlet B: Rp 650M revenue, 29% food cost, 22% labor = 51% total (BEST)
 - Outlet C: Rp 550M revenue, 35% food cost, 28% labor = 63% total (WORST)
- Deep dive into Outlet C: Why high costs?
 - Different suppliers (more expensive)
 - Overstaffed (Manager hiring friends)
- **Action:** Centralize purchasing, replace Outlet C manager
- **Result:** Outlet C improves to 48% total cost, +Rp 3M/month profit

---

**Use Case 3: Bakery Enterprise (Tier 3 + Executive Intelligence)**

**Business:** 5 outlets, 100 staff, Rp 8B revenue/year
**Pain Point:** Investor asking for professional financial dashboard
**Solution:**
- White-label Executive Summary page (bakery's logo, brand colors)
- Board-Ready Metrics:
 - Revenue vs Annual Target (Gap to Target: Rp 500M)
 - Required Daily Run Rate (Rp 27M/day to hit target)
 - Business Health Score (82/100 - "Healthy")
 - Expansion Readiness Score (75/100 - "Ready for 6th outlet")
- **Action:** Present dashboard in board meeting, get approval for Rp 2B expansion investment
- **Result:** Secure funding, professional credibility established

---

## Part 6: Version Roadmap

### 6.1 Past Releases

**Alpha 0.1 (December 2025) - Initial Release**
- 30 metrics (Tier 1 base)
- 3 Excel templates
- 2 dashboard pages
- 5 video tutorials
- Status: PRODUCTION

---

### 6.2 Planned Releases

**Beta 0.1 (January 2026) - Multi-Outlet & Tier 2 Launch**

**New Features:**
- 70 metrics (+40 from Alpha 0.1)
- Multi-Outlet Module (consolidation for 2-5 outlets)
- 6 Excel templates (+3 new)
- 5 dashboard pages (+3 new)
- 10 video tutorials (+5 new)
- Power BI Service setup guide (automated refresh option)

**Target:** Expand from Tier 1 to Tier 1+2 offering

---

**Beta 0.2 (March 2026) - POS Integration**

**New Features:**
- POS-specific templates (Moka, Pawoon, Qasir)
- CSV auto-import scripts (Python/PowerShell)
- Data quality dashboard (alerts for missing/bad data)

**Target:** Reduce manual data entry from 10 min/day -> 2 min/day

---

**Beta 0.3 (May 2026) - Tier 3 Launch + API**

**New Features:**
- 100-150 metrics (Tier 3 full suite)
- Direct POS API integration (Moka, Pawoon)
- White-label customization
- 9 Excel templates (complete suite)
- 15 video tutorials (8 hours content)

**Target:** Launch Tier 3 Enterprise offering

---

**v1.0 (August 2026) - Full Product Line + Accounting Sync**

**New Features:**
- Accounting software integration (Accurate, Jurnal APIs)
- Predictive forecasting (ML models)
- Mobile-first dashboard (Power BI Mobile optimized)
- All 3 tiers production-ready
- Product 02 (Template Support) launched

**Target:** Complete 3-tier ecosystem, ready for scale

---

**v2.0 (2027+) - AI & Advanced Analytics**

**Future Vision:**
- AI-powered insights ("Your food cost will hit 35% next week if coffee prices rise")
- Voice commands ("Alexa, what's my revenue today?")
- Slack/WhatsApp bot (daily metrics push)
- Real-time data (eliminate manual refresh)

---

## Part 7: Pricing & Packaging

### 7.1 Pricing Structure (January 2026)

**Base Packages:**

| Tier | Base Price | Avg Price (with modules) | Target Customer |
|------|-----------|-------------------------|----------------|
| **Tier 1: Essentials** | Rp 3.5M | Rp 4.7M | 1-2 outlets, DIY |
| **Tier 2: Professional** | Rp 7M | Rp 9.5M | 2-5 outlets, guided |
| **Tier 3: Enterprise** | Rp 10M | Rp 12.5M | 5-15 outlets, managed |

**Add-On Modules:** +Rp 1.25M each (see Section 2.3)

**Optional Ongoing Support:** See [[products/02-template-support/02-template-support|Product 02 - Template Support]]

---

### 7.2 Packaging Options

**Option A: Single Purchase (Default)**

Customer buys tier once, owns .pbix file forever. No subscription.

**Pros:**
- Low commitment
- Own the file (forever access)
- Budget-friendly (one payment)

**Cons:**
- No ongoing support (after initial setup period - see [[Product 02]] for support plans)
- No automatic updates (must re-buy new versions)

---

**Option B: Annual Subscription (Not Available Yet - Planned v2.0)**

Customer pays Rp X/month, gets continuous updates + support.

**Ongoing Support (Optional):**
- All tiers: See [[products/02-template-support/02-template-support|Product 02]] for optional support plans
- Tier 3: See Product 02 (support plans range Rp 400K-2M/month based on service level)

---

## Part 8: Competitive Analysis

### 8.1 Competitive Positioning

**Competitor 1: Generic Power BI Templates (Envato, Gumroad)**

**Their Offering:**
- .pbix file only (no Excel templates)
- Generic metrics (not F&B-specific)
- English tutorials only
- No support

**Price:** Rp 500K-2M

**We Win On:**
- Excel ecosystem (they fail 60% of time, we succeed 92%)
- F&B metrics (we have 30-150 F&B metrics, they have 10 generic)
- Bahasa content (they're English-only)
- Support (we offer Product 02 support plans, they have none)

**Price Justification:** 2-4x more expensive, but 10x better outcome

---

**Competitor 2: Moka/Pawoon Built-In Analytics**

**Their Offering:**
- Free with POS subscription
- 5-10 basic metrics
- Mobile app
- Limited customization

**Our Advantage:**
- 30-150 metrics (6-30x more)
- Works with ANY POS (not locked to one vendor)
- Deeper insights (they show data, we provide analysis)

**Price Justification:** They're"free" but limited. We're Rp 3.5-12.5M but comprehensive.

---

**Competitor 3: Hiring Junior Analyst**

**Their Cost:**
- Rp 5-8M/month salary
- Rp 60-96M/year total cost
- + HR burden (recruitment, training, management)

**Our Advantage:**
- 95% cheaper (Rp 4.7M one-time vs Rp 60M/year)
- Zero HR burden
- Specialist F&B expertise (analyst is generalist)

---

## Part 9: Success Metrics

### 9.1 Product Health Metrics

**Track Monthly:**

| Metric | Target | Current (Jan 2026) |
|--------|--------|--------------------|
| **Monthly Sales** | 15-20 | TBD (Sprint 1 just started) |
| **Tier Mix** | 70% T1, 25% T2, 5% T3 | TBD |
| **Setup Success Rate** | >85% | 92% (Beta) |
| **30-Day Active Usage** | >70% | 80% (Beta) |
| **Customer NPS** | >60 | 80 (Beta) |
| **Churn (Annual)** | <15% | 0% (too early) |

---

### 9.2 Customer Success Metrics

**Leading Indicators:**

| Metric | What It Predicts | Target |
|--------|-----------------|--------|
| **Login Frequency** | Retention | >10 logins/month |
| **Dashboard Refresh** | Adoption | ≥1 refresh/week |
| **Support Tickets** | Satisfaction | <3 tickets/customer/month |
| **Referral Rate** | Advocacy | >20% |

---

**Document Status:** LIVING DOCUMENT
**Version:** 2.0 (Updated for Beta 0.1 planning)
**Owner:** Product Lead
**Last Review:** January 8, 2026
**Next Review:** February 2026 (Pre-Beta 0.1 launch)

**Related Documents:**
- [[products/01-power-bi-template/business-intelligence/product-strategy/comprehensive-product-strategy|Comprehensive Product Strategy]]
- [[products/01-power-bi-template/specifications/archive/alpha-0-1-release-notes|Alpha 0.1 Specifications]]
- [[products/01-power-bi-template/marketing/assets/10-one-pager|Marketing One-Pager]]
- [[products/02-template-support/02-template-support|Product 02 - Template Support]]
