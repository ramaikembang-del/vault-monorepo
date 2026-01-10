# Complete F&B Data Ecosystem - Development Roadmap

**Purpose:** Comprehensive development framework - metrics + features + sprint planning (tiered development)
**Last Updated:** January 4, 2026
**Version:** 4.2 - Validated Launch Execution (Pre-Sale -> Build -> Scale)
**Status:** Active - Phase 1 (Tier 1 Launch) - Execution Ready

---

## Product Overview & Architecture

**This document is the DEVELOPMENT VIEW.** For sales positioning and customer decision-making see [[../core/04-tiering-framework|07-tiering-framework.md]] (comprehensive tiering framework + customer guide).

### What We're Building

**Complete F&B Data Ecosystem** (NOT just a Power BI template)

**5 Ecosystem Components:**
1. **Power BI Dashboard** - Professional visualization (.pbix file)
2. **Excel Template Suite** - Pre-formatted data entry (4 files)
3. **Google Sheets Bridge** - Mobile collaboration option
4. **Import Automation Scripts** - One-click refresh workflow
5. **Video Tutorial Library** - 10-minute learning path

**Key Innovation:** "Excel + Power BI Symbiosis"
- Staff keep using Excel (familiar, offline, free)
- Owner gets Power BI dashboard (professional, automatic)
- **Result:** 30-minute time-to-insight (vs 8-hour industry standard)

### Development Architecture: Two Integrated Build Streams

**Modular Metrics Framework:** 150 total metrics organized into 12 modules
- 3 Base Modules (30 metrics) - All tiers
- 3 Tier 1 Add-ons (10 metrics each) - Optional for T1
- 4 Professional Modules (11-15 metrics each) - T2 add-ons
- 4 Strategic Modules (11-15 metrics each) - T3 add-ons

#### Stream 1: Analytics Engine (Metrics Modules)
**What We Build:** DAX measures, calculated columns, data models
- 150 total metrics across 12 modules
- Each module = independent DAX measure group
- Can ship incrementally (base first, then add-ons)

#### Stream 2: Delivery Infrastructure (Surrounding Features)
**What We Build:** Dashboard pages, Excel templates, automation scripts, training content
- Dashboard complexity (pages, visuals, interactions)
- Template customization (generic -> custom -> white-label)
- Automation depth (manual -> optimized -> fully automated)
- Service infrastructure (support systems, training materials)

### How They Build Together

**Tier Selection Determines:**
1. **Which surrounding features to build** (DIY tools vs Assisted setup vs Fully Managed)
2. **Base metric set size** (30 for T1, 50 for T2, 100 for T3)

**Module Development Adds:**
1. **Metrics only** (DAX measures + data model updates)
2. **No surrounding feature changes** (same templates, same automation, same support)

**Critical Development Rule:**
- **Surrounding features built ONCE per tier** (reused for all customers in that tier)
- **Metric modules built independently** (can add/remove per customer within tier)

**Effort Breakdown Example (Tier 1):**
- **26 days total = 10 days metrics + 3 days gamification + 13 days surrounding features**
- Metrics (10 days): 30 base metrics + 3 optional T1 modules (T1-A/B/C)
- Gamification (3 days): Business Health Score + Onboarding Badges
- Surrounding (13 days): 3 pages + 4 Excel templates + Power Query + Videos + Support setup

---

## Modular Strategy & Pricing

### Key Principle: Build in Modules, Tiers Select Combinations

**Modular Metrics Framework (150 total):**
- **3 Base Modules (30 metrics):** B1 Revenue Core, B2 Menu Essentials, B3 Staff & Customer Basics - Required for ALL tiers
- **3 Tier 1 Add-ons (10 metrics each):** T1-A Revenue Intelligence, T1-B Menu Engineering, T1-C Staff Performance - Optional for T1
- **4 Professional Modules (11-15 metrics each):** P1 Multi-Outlet, P2 Menu Optimization, P3 Workforce Analytics, P4 Customer Mastery - T2 add-ons
- **4 Strategic Modules (11-15 metrics each):** S1 Executive Intelligence, S2 Advanced Menu, S3 Advanced Workforce, S4 Customer Intelligence - T3 add-ons

**How Modularity Works:**
- **Tiers bundle surrounding features** (dashboard pages, Excel templates, automation, support)
- **Modules extend analytics capabilities** (add DAX measures, no surrounding feature changes)
- **Customers can mix and match** modules within their tier to reach desired metric count

### Pricing Model: Metrics Drive Price Variance

**Key Insight:** Within each tier, more metrics = higher price

| Tier | Base Metrics | Max Metrics | Base Price | Max Price | Price Driver |
|------|--------------|-------------|------------|-----------|--------------|
| **T1** | 30 | 50 | Rp 3.5M | Rp 6M | +20 metrics = +Rp 2.5M |
| **T2** | 50 | 100 | Rp 7M | Rp 12M | +50 metrics = +Rp 5M |
| **T3** | 100 | 150 | Rp 10M | Rp 15M | +50 metrics = +Rp 5M |

**Example Configurations:**
- T1 @ Rp 3.5M = Base only (30 metrics: B1+B2+B3)
- T1 @ Rp 4.5M = Base + 1 T1 module (40 metrics: B1+B2+B3+T1-A)
- T1 @ Rp 6M = Base + 2 T1 modules (50 metrics: B1+B2+B3+T1-A+T1-B)
- T2 @ Rp 7M = T1 Max (50 metrics) + Assisted setup
- T2 @ Rp 9.5M = T1 Max + 2 Professional modules (74 metrics: T1 Max+P1+P2)
- T2 @ Rp 12M = All Professional modules (100 metrics: T1 Max+P1+P2+P3+P4)
- T3 @ Rp 15M = All modules (150 metrics: Everything)

---

## CONSOLIDATED EFFORT SUMMARY

| Phase | Scope | Timeline (Solo) | Key Deliverable |
|-------|-------|-----------------|-----------------|
| **Pre-Work** | **Legal + Validation** | **Week -1 + Week 0** | **3+ commits, legal foundation** |
| **Phase 1** | **Tier 1 (Essentials)** | **Days 1-10 + Week 2-4** | **Launchable Product (Revenue Gen)** |
| Phase 2 | Tier 2 (Professional) | Week 5-8 (Post-Gate 1A) | Assisted setup + advanced analytics |
| Phase 3 | Tier 3 (Enterprise) | Week 9-12 (Post-Gate 1B) | Full automation + white-label |
| **TOTAL** | **Full Ecosystem** | **12 Weeks (Phased)** | **Complete product line** |

**Execution Mode: Validated Launch**
- **Week -1:** Legal & infrastructure foundation
- **Week 0:** Pre-sale validation (15-20 conversations, 3+ commits target)
- **Week 1 (Days 1-10):** Build T1-Basic, beta test, launch
- **Week 2:** Post-launch operations, hit Gate 1A (5+ sales target)
- **Week 3-4:** Build T1-Standard/Plus modules (if Gate 1A passed)
- **Week 5+:** Build T2/T3 tiers (demand-driven, on-demand)

**Key Philosophy:** "Sell-First, Build-Second" - Validate before investing development effort

**Revenue Potential:** ~Rp 485M (Year 1, validated target)
**ROI:** 5.6x on development investment

---

## Development Dependencies

### **Critical Path:**
```
1. Core Metrics (30) -> Excel Templates -> Power Query -> Dashboard
2. Dashboard -> Drill-through -> Bookmarks
3. Excel Templates -> Macros -> Automation
```

### **Parallel Workstreams:**
- **Developer 1:** Dashboard + Metrics
- **Developer 2:** Excel Templates + Power Query
- **Developer 3:** Documentation + Videos

---

## TIER-BY-TIER DEVELOPMENT (Integrated Metrics + Features)

### **Development Principle:** For each tier, build BOTH streams together
- **Stream 1 (Analytics Engine):** Metrics modules
- **Stream 2 (Delivery Infrastructure):** Surrounding features

---

## TIER 1 DEVELOPMENT: DIY Essentials (40 Days - Solo Launch)

### **Target Customer:** 1 outlet, Excel-savvy, DIY setup, Budget Rp 3.5-6M

### **Pricing Options:**
- **Rp 3.5M (30 metrics):** Base modules only (B1+B2+B3)
- **Rp 4.5M (40 metrics):** Base + 1 T1 module (B1+B2+B3+T1-A or T1-B or T1-C)
- **Rp 6M (50 metrics):** Base + 2 T1 modules (Most popular T1 config)

---

### **A. ANALYTICS ENGINE - Metrics Development (10 days)**

#### **Base Modules (30 metrics) - REQUIRED FOR ALL TIERS**
*Must build first - fundamental operations*

**Module B1: Revenue Core (8 metrics)**
1. Daily Revenue
2. Weekly Revenue
3. Monthly Revenue
4. Revenue vs Target (%)
5. Revenue Growth MoM (%)
6. Revenue Growth YoY (%)
7. Peak Hours Revenue
8. Payment Method Split

**Module B2: Menu Essentials (8 metrics)**
9. Top 10 Sellers (Quantity)
10. Top 10 Sellers (Revenue)
11. Bottom 5 Performers
12. Food Cost %
13. Beverage Cost %
14. Gross Margin by Category
15. Category Mix (%)
16. Average Order Value

**Module B3: Staff & Customer Basics (12 metrics)**
17. Sales per Staff
18. Sales per Hour
19. Staff Leaderboard (Top 3)
20. Active Staff Count
21. Total Shift Hours
22. Labor Cost %
23. Revenue per Labor Hour

*Continued in Module B3:*
24. Total Customers
25. Average Check Size
26. New vs Repeat %
27. Transaction Count
28. Customer Count Trend

*Continued in Module B3:*
29. Busiest Day of Week
30. Busiest Hour of Day

---

### **Tier 1 Add-on Modules (30 metrics) - OPTIONAL FOR T1**
*Add depth to core operations - Customer selects 0-3 modules*

**Module T1-A: Revenue Intelligence (+10 metrics)**

*Revenue Deep Dive (+3):*
31. Hourly Revenue Distribution
32. Discount Impact (%)
33. Walk-in vs Reservation Split

**Module T1-B: Menu Engineering (+10 metrics)**

*Menu Cost Analysis (+3):*
34. Recipe Cost per Item
35. Profit Margin per Item
36. Menu Item Profitability Rank

**Module T1-C: Staff Performance (+10 metrics)**

*Staff Attendance (+2):*
37. Staff Attendance Rate
38. Late/Early Out Count

*Customer Behavior (in T1-A):*
39. Repeat Customer Rate
40. Customer Frequency Distribution

---

*Note: The sections below show T1 modules expanded. In actual implementation, metrics 31-60 are organized into distinct T1-A, T1-B, T1-C modules that customers can select.*

### **Complete Tier 1 Metric Set (50 total when all 3 T1 modules selected)**

*Revenue Intelligence metrics continued (from T1-A):*
41. Revenue Waterfall (components breakdown)
42. Upsell Conversion Rate

**Menu Quadrant (+3):**
43. BCG Matrix - Stars
44. BCG Matrix - Cash Cows
45. BCG Matrix - Dogs

**Staff Discipline (+3):**
46. Punctuality Rate
47. Full Shift Completion Rate
48. Order Accuracy (void rate)

**Customer Value (+2):**
49. Customer Lifetime Value (CLV)
50. Churn Rate

**Dev Effort (Analytics Engine):** 10 days total
- Base modules (30 metrics): 7 days
- Optional T1 modules (+10-20 metrics): +3-6 days

### **C. GAMIFICATION ENGINE - Engagement Features (3 days)**
*Foundational elements required for Phase 1 (See 06-gamification-feature-spec.md)*

**Core Mechanics:**
51. **Business Health Score** (Main KPI)
52. **Point Calculation Logic** (Hidden table)
53. **Onboarding Achievements** (First 10 badges)
54. **Progress Card Visual** (Top-right placement)

**Dev Effort (Gamification):** 3 days
- DAX Measures: 1 day
- Visual Components: 2 days

---

### **B. DELIVERY INFRASTRUCTURE - Surrounding Features (13 days)**

All T1 customers get the SAME surrounding features regardless of metric count (30/40/50). Modular pricing only affects metrics.

#### **Dashboard Structure** - 10 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| 3 dashboard pages (Exec, Revenue, Staff) | 5 days | P0 | T1+ |
| Basic filtering (Date range) | 2 days | P0 | T1+ |
| Standard visuals (cards, charts, tables) | 3 days | P0 | T1+ |

#### **Excel Templates (Generic - 4 files total)** - 5.5 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Daily-Sales.xlsx (sample products) | 2 days | P0 | T1+ |
| Food-Cost.xlsx (simple calculator) | 1 day | P0 | T1+ |
| Staff-Log.xlsx (basic tracking) | 1 day | P0 | T1+ |
| Customer-Log.xlsx (basic tracking) | 0.5 day | P0 | T1+ |
| Data validation (dropdowns) | 1 day | P0 | T1+ |

#### **Power Query (Basic)** - 3 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Generic CSV import script | 2 days | P0 | T1+ |
| Folder-based refresh | 1 day | P0 | T1+ |

#### **Support Materials** - 5 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| 5 video tutorials (10-min total learning path) | 3 days | P0 | T1+ |
| Quick-start guide PDF | 2 days | P0 | T1+ |
| 30-day email support setup (72h response) | 0.5 day | P0 | T1 |

**Dev Effort (Delivery Infrastructure):** 13 days total

See detailed Phase 1 specifications section below for complete / implementation checklists.

---

**TIER 1 TOTAL TIMELINE:** 40 Days (Solo Paced)

**Definition of Done:**
- 30-50 metrics working (depending on module selection)
- 3 pages functional
- 4 Excel templates delivered
- 1-click refresh works
- Videos + PDF ready
- Support system configured

---

---

## TIER 2 DEVELOPMENT: Professional Assisted (Post-Revenue Phase)

### **Target Customer:** 2-3 outlets, Time-constrained, Needs setup help, Budget Rp 7-12M

### **Pricing Options:**
- **Rp 7M (50 metrics):** T1 Max + Assisted setup
- **Rp 9.5-10M (74-80 metrics):** Base + 2 Professional modules
- **Rp 12M (100 metrics):** All 4 Professional modules (P1+P2+P3+P4)

---

### **A. ANALYTICS ENGINE - Metrics Development (10-15 days)**

#### **Professional Modules (+50 metrics) - TIER 2 RANGE**

**4 T2 Professional Modules (sold as add-ons at +Rp 1.25-1.5M each):**

**Module P1: Multi-Outlet Operations (+12 metrics, +Rp 1.25M):**
51-62. Outlet comparison, inter-outlet analysis, location performance, transfer tracking

**Module P2: Menu Optimization (+15 metrics, +Rp 1.25M):**
63-77. Ingredient cost trends, portion variance, cannibalization analysis, seasonal performance, new product tracking

**Module P3: Workforce Analytics (+12 metrics, +Rp 1.5M):**
78-89. Performance score components, discipline score breakdown, shift efficiency, training ROI, retention metrics

**Module P4: Customer Mastery (+11 metrics, +Rp 1.5M):**
90-100. Patronage ladder stages, NPS by segment, complaint resolution, win-back performance, visit patterns

**Dev Effort (Analytics Engine):** 10-15 days
- Professional modules development varies by customer selection
- P1: +2 days, P2: +3 days, P3: +2.5 days, P4: +2.5 days

---

### **B. DELIVERY INFRASTRUCTURE - Surrounding Features (24 days)**

All T2 customers get the SAME surrounding features regardless of metric count (50-100). Professional modules only add metrics.

#### **Dashboard Expansion** - 9 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| +2 pages (Menu Engineering, Customer) | 3 days | P1 | T2+ |
| Drill-through pages (2-3) | 3 days | P1 | T2+ |
| Custom tooltips (5 visuals) | 2 days | P1 | T2+ |
| Bookmarks (5 presets) | 1 day | P1 | T2+ |

#### **Excel Templates (Custom)** - 6 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Outlet-Summary.xlsx (consolidation) | 2 days | P1 | T2+ |
| Custom product pre-fill | 1 day | P1 | T2 |
| Custom recipe pre-fill | 1 day | P1 | T2 |
| Advanced validation (dependent dropdowns) | 2 days | P1 | T2+ |

#### **Automation** - 5 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| POS-specific Power Query (3 templates) | 3 days | P1 | T2 |
| Excel VBA macro (format cleaner) | 2 days | P1 | T2+ |

#### **Mobile & Print** - 3 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Basic mobile layout (1 page) | 2 days | P1 | T2+ |
| Print-friendly page (1 page) | 1 day | P1 | T2+ |

#### **Service Delivery** - 1 day dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| 2-3 hour setup call process | 0.5 day | P1 | T2 |
| 90-day support extension (48h response) | 0.5 day | P1 | T2 |

**Dev Effort (Delivery Infrastructure):** 24 days total

See detailed Phase 2 specifications section below for complete / implementation checklists.

---

**TIER 2 TIMELINE:** On Demand (Post-Launch)

**Definition of Done:**
- 50-100 metrics working (depending on module selection)
- 5 pages functional
- 2-3 drill-through pages
- Outlet-Summary.xlsx
- Setup call process documented
- POS-specific scripts (3 formats)

---

---

## TIER 3 DEVELOPMENT: Enterprise Managed (Future Phase)

### **Target Customer:** 3-5+ outlets, Strategic partner, Fully managed, Budget Rp 15M+

### **Pricing Options:**
- **Rp 10M (100 metrics):** Managed start
- **Rp 12.5M (125 metrics):** Full automation (recommended)
- **Rp 15M (150 metrics):** All modules (white-glove)

---

### **A. ANALYTICS ENGINE - Metrics Development (15-20 days)**

#### **Strategic Modules (+50 metrics) - TIER 3 RANGE**

**4 T3 Strategic Modules (sold as add-ons at +Rp 1.25M each):**

**Module S1: Executive Intelligence (+15 metrics, +Rp 1.25M):**
101-115. Gap to target breakdown, required run rate, scenario analysis, forecast vs actual, strategic KPIs

**Module S2: Advanced Menu (+12 metrics, +Rp 1.25M):**
116-127. Cross-sell matrix, menu optimization score, product launch tracking, competitive benchmarking

**Module S3: Advanced Workforce (+12 metrics, +Rp 1.25M):**
128-139. Labor optimization, productivity index, scheduler efficiency, cost per shift, overtime analysis

**Module S4: Customer Intelligence (+11 metrics, +Rp 1.25M):**
140-150. Cohort analysis, RFM segmentation, at-risk alerts, acquisition cost, campaign performance

**Dev Effort (Analytics Engine):** 15-20 days
- Strategic modules development varies by customer selection
- S1: +4 days, S2: +3 days, S3: +3 days, S4: +3 days

---

### **B. DELIVERY INFRASTRUCTURE - Surrounding Features (51 days)**

All T3 customers get the SAME surrounding features regardless of metric count (100-150). Strategic modules only add metrics.

#### **Dashboard Advanced** - 12 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| +2 custom pages (as needed) | 4 days | P2 | T3 |
| Drill-through expansion (5+ pages) | 3 days | P2 | T3 |
| What-If parameters (2-3) | 3 days | P2 | T3 |
| Row-Level Security (RLS) | 2 days | P2 | T3 |

#### **Excel Templates (White-label)** - 5 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Branding customization (logo, colors) | 2 days | P2 | T3 |
| Template protection (password) | 1 day | P2 | T3 |
| Dynamic validation (auto-update lists) | 2 days | P2 | T3 |

#### **Google Sheets Advanced** - 8 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Apps Script (auto-export) | 3 days | P2 | T3 |
| Sheets API integration | 5 days | P3 | T3 |

#### **Automation (Custom Dev)** - 10 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| POS auto-export script (Python) | 5 days | P2 | T3 |
| Scheduled Power BI refresh | 2 days | P2 | T3 |
| Email report automation | 3 days | P2 | T3 |

#### **WhatsApp Integration** - 5 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| WhatsApp Business API setup | 3 days | P2 | T3 |
| Daily alert templates | 2 days | P2 | T3 |

#### **Mobile & Multi-language** - 10 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Full mobile layout (all pages) | 5 days | P2 | T3 |
| Multi-language toggle | 3 days | P2 | T3 |
| 3 print-ready pages | 2 days | P2 | T3 |

#### **Service Delivery** - 2.5 days dev
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Fully managed setup process | 1 day | P2 | T3 |
| Monthly check-in workflow | 0.5 day | P2 | T3 |
| Quarterly review template | 0.5 day | P2 | T3 |
| Unlimited support setup (24h email + WhatsApp) | 0.5 day | P2 | T3 |

**Dev Effort (Delivery Infrastructure):** 51 days total

See detailed Phase 3 specifications section below for complete / implementation checklists.

---

**TIER 3 TIMELINE:** Future Roadmap

**Definition of Done:**
- 100-150 metrics working (depending on module selection)
- What-If parameters functional
- WhatsApp alerts working
- Full automation configured
- Monthly service workflow operational
- White-label branding applied

---

## DETAILED SPECIFICATIONS (Phase-by-Phase Checklists)

**Purpose:** Complete / feature checklists referenced by integrated tier sections above

**How to use:** The integrated tier sections above provide summaries. This section provides detailed implementation specifications with complete checklists for every feature.

---

## PHASE 1: TIER 1 BASE - Detailed Specifications (23 days)

### **Target Deliverable:** Complete DIY package for solo operators

### **What We're Building:** Essential self-serve analytics ecosystem

---

### **A. Dashboard Structure (10 days dev effort)**

**Dashboard Pages: 3 pages (combined layout)**

**Page 1: Executive Summary**
- Daily/Weekly/Monthly Revenue cards
- Revenue trend sparklines
- Top 5 menu items
- Basic staff leaderboard (Top 3)
- Customer count trend
- No drill-through (T1 limitation)
- No dynamic filtering beyond date range

**Dev:** 5 days (page layout, basic visuals, metric cards)

**Page 2: Revenue & Menu (Combined)**
- Revenue breakdown by category
- Payment method split (pie chart)
- Top 10 sellers (quantity + revenue)
- Food cost % gauge
- Basic margin analysis
- No BCG matrix (T2+ feature)
- No recipe-level cost tracking

**Dev:** 3 days (charts, filters, basic calculations)

**Page 3: Staff & Customer (Combined)**
- Sales per staff bar chart
- Staff leaderboard table
- Customer count by day
- New vs Repeat customer split
- No performance scores (T2+ feature)
- No patronage ladder (T3 feature)

**Dev:** 2 days (simple staff + customer metrics)

**Filtering:**
- Date range slicer (last 7/30/90 days)
- No outlet filter (single outlet only)
- No bookmarks (T2+ feature)

---

### **B. Excel Templates - Generic (5.5 days dev effort)**

**Template Suite: 4 files (sample data, not customized)**

**1. Daily-Sales.xlsx** (2 days dev)
- Sample product list (20 generic items: "Coffee", "Sandwich", etc.)
- Basic data entry form (Date, Product, Quantity, Price)
- Data validation dropdowns (product selection)
- Simple daily summary calculations
- No customer data pre-filled
- No outlet-specific products

**What customer does:** Replace sample products with their actual menu

**2. Food-Cost.xlsx** (1 day dev)
- Simple recipe cost calculator
- Ingredient list template (blank)
- Basic cost calculation formulas
- No variance tracking (T2+ feature)
- No supplier price trends

**What customer does:** Input their recipes and ingredient costs

**3. Staff-Log.xlsx** (1 day dev)
- Basic shift tracking (Name, Date, Hours)
- Simple attendance log
- Sales assignment field
- No performance scoring (T2+ feature)
- No discipline tracking

**What customer does:** Enter their staff names and daily shifts

**4. Customer-Log.xlsx** (0.5 day dev)
- Basic customer transaction log
- Fields: Date, Customer ID, Check Size
- New vs Repeat flag
- No patronage tracking (T3 feature)

**What customer does:** Log customer visits

**Common Features (All Templates):**
- Data validation (dropdowns, date pickers)
- Error checking (simple formulas)
- Instruction sheets
- No branding customization (generic look)
- No password protection

**Dev:** 1 day (validation, instruction sheets)

---

### **C. Power Query & Automation (3 days dev effort)**

**Import Automation:**
- **Generic CSV import script** (2 days dev)
 - Works with standard CSV format
 - Column mapping guidance
 - Basic error handling
- **Folder-based refresh** (1 day dev)
 - Customer creates "/data" folder
 - Drops CSV files
 - One-click refresh button
- No scheduled automation (manual refresh only)
- No POS-specific scripts (generic only)

**What customer does:** Export CSV from their POS, drop in folder, click refresh

---

### **D. Support Materials (5.5 days dev effort)**

**Video Tutorials: 5 videos (10-min total learning path)**
- Video 1: Product overview (2 min) - 0.5 day dev
- Video 2: Excel template walkthrough (2 min) - 0.5 day dev
- Video 3: Data entry best practices (2 min) - 0.5 day dev
- Video 4: Power BI refresh demo (2 min) - 0.5 day dev
- Video 5: Reading your first dashboard (2 min) - 1 day dev
- No custom training (pre-recorded only)

**Dev:** 3 days total (recording, editing, hosting)

**Quick-Start Guide PDF:**
- Getting started checklist
- Excel template guide
- FAQ (10 common questions)
- Troubleshooting guide
- No customer-specific examples

**Dev:** 2 days (writing, design, testing)

**Support Setup:**
- **30-day email support** (72h response time)
- Support email templates
- Ticketing system integration
- No WhatsApp support
- No phone support
- No setup calls

**Dev:** 0.5 day (support system setup)

---

### **E. Service Delivery Process (0 days - documentation only)**

**Setup:**
- **Customer does it themselves (DIY)**
- Documentation provided
- Video tutorials
- **Estimated customer time:** 4-8 hours

**Onboarding:**
- Automated welcome email
- Download links
- Setup checklist
- No human interaction

---

**PHASE 1 TOTAL: ~23 days dev effort**

**Definition of Done:**
- 30 metrics working
- 3 pages functional
- 4 Excel templates delivered
- 1-click refresh works
- Videos + PDF ready
- Support system configured

---

## PHASE 2: TIER 2 ENHANCEMENTS - Detailed Specifications (24 days)

### **Target Deliverable:** Assisted setup package for growing multi-outlet operators

### **What We're Adding:** Time-saving customization + advanced analytics

---

### **A. Dashboard Expansion (9 days dev effort)**

**New Pages: +2 dedicated pages (now 5 total)**

**Page 4: Menu Engineering** (3 days dev)
- BCG Matrix visual (Stars, Cash Cows, Dogs, Question Marks)
- Menu item profitability table
- Recipe cost variance tracking
- Ingredient cost trend charts
- Custom drill-through to item details
- No cannibalization matrix (T3 feature)

**Page 5: Customer Insights** (3 days dev)
- Patronage ladder funnel (First-timer -> Regular -> VIP)
- CLV calculation
- Churn rate monitoring
- NPS score by segment
- Visit frequency distribution
- No cohort analysis (T3 feature)

**Enhanced Interactivity:** (3 days dev)
- **Drill-through pages** (2-3 pages):
 - Drill into individual menu items
 - Drill into staff performance details
 - Drill into customer purchase history
- **Custom tooltips** (5 key visuals):
 - Revenue tooltips show breakdown
 - Menu tooltips show cost structure
 - Staff tooltips show performance components
- **Bookmarks** (5 presets):
 - "This Week" view
 - "This Month" view
 - "Profit Focus" view
 - "Staff Performance" view
 - "Menu Engineering" view

---

### **B. Excel Templates - Customized (6 days dev effort)**

**Template Suite: 4 files (YOUR data pre-filled during setup call)**

**1. Daily-Sales.xlsx - CUSTOMIZED** (1 day dev)
- **YOUR actual products pre-filled** (not samples)
- **YOUR pricing** already in dropdowns
- **YOUR categories** configured
- Advanced validation (dependent dropdowns)
- Formula optimization

**What WE do during setup:** Pre-fill entire product catalog

**2. Food-Cost.xlsx - CUSTOMIZED** (1 day dev)
- **YOUR recipes pre-filled**
- **YOUR ingredient suppliers** in system
- Variance tracking formulas
- Alert system for cost spikes
- No automated supplier price updates (T3 feature)

**What WE do during setup:** Build recipe database together

**3. Staff-Log.xlsx - CUSTOMIZED** (1 day dev)
- **YOUR staff names pre-filled**
- **YOUR shift schedules** configured
- Performance score tracking
- Discipline score calculations
- No ROI tracking (T3 feature)

**What WE do during setup:** Import current staff roster

**4. Outlet-Summary.xlsx - NEW** (2 days dev)
- **Multi-outlet consolidation** template
- Cross-outlet comparison
- Inter-outlet transfer tracking
- Consolidated P&L view
- Outlet ranking

**What WE do during setup:** Configure outlet structure

**Common Enhancements:**
- Advanced validation (dependent dropdowns)
- Error prevention (locked formulas)
- Better formatting
- No branding (still generic look)

**Dev:** 1 day (advanced validation + locking)

---

### **C. Automation Enhancements (5 days dev effort)**

**POS-Specific Integration:** (3 days dev)
- **Custom Power Query templates** for:
 - Moka POS export format
 - Pawoon POS export format
 - Cashlez POS export format
- Automatic column mapping
- Data cleaning scripts
- No real-time API integration (T3 feature)

**Excel VBA Macro:** (2 days dev)
- **Format cleaner macro**
- One-button data preparation
- Automatic CSV conversion
- No scheduled execution (manual trigger)

---

### **D. Mobile & Print (3 days dev effort)**

**Mobile Layout:** (2 days dev)
- **Basic mobile layout** (1 page responsive)
- Executive summary optimized for phone
- Not all pages (just summary)
- No touch interactions

**Print Layout:** (1 day dev)
- **Print-friendly page** (1 page)
- Executive summary formatted for A4
- Clean margins, no interactive elements
- Only 1 page printable (not full dashboard)

---

### **E. Service Delivery - ASSISTED SETUP (1 day dev effort)**

**Setup Process:**
- **2-3 hour live setup call** (video conference)
- **Screen-sharing** session
- **WE configure together:**
 - Excel templates with YOUR data
 - Power Query for YOUR POS format
 - Folder structure on YOUR computer
 - Test refresh with sample data
- Live Q&A during call

**What WE do:** Configuration work
**What YOU do:** Provide data, ask questions

**Dev:** 0.5 day (setup call process documentation)

**Support:**
- **90-day email support** (48h response time)
- **1 free template update** (bug fixes, minor tweaks)
- No WhatsApp support
- No ongoing monthly service

**Dev:** 0.5 day (extended support system setup)

---

**PHASE 2 TOTAL: ~24 days dev effort**

**Definition of Done:**
- Everything in Phase 1
- +20 metrics working (now 50-100 total)
- 5 pages functional
- 2-3 drill-through pages
- Outlet-Summary.xlsx template
- Setup call process documented
- POS-specific scripts (3 formats)

---

## PHASE 3: TIER 3 PREMIUM - Detailed Specifications (51 days)

### **Target Deliverable:** Fully managed strategic analytics partnership

### **What We're Adding:** Automation + white-label + ongoing service

---

### **A. Dashboard Advanced Features (12 days dev effort)**

**Custom Pages: +2 strategic pages (now 7+ total)** (4 days dev)
- Custom pages based on client needs:
 - Investor dashboard (fundraising focus)
 - Expansion planning dashboard (new location analysis)
 - Board reporting dashboard (C-level metrics)
- Pages evolve monthly based on strategic priorities

**Enhanced Interactivity:** (8 days dev)
- **Drill-through expansion** (5+ pages):
 - Every major metric drillable
 - Multi-level hierarchies
 - Cross-page navigation
- **What-If parameters** (2-3 scenarios):
 - Revenue scenario modeling
 - Menu price testing
 - Labor cost simulation
- **Row-Level Security (RLS)**:
 - Outlet managers see only their outlet
 - Executives see everything
 - Custom role-based access

---

### **B. Excel Templates - White-Label (5 days dev effort)**

**Template Suite: 4 files (YOUR brand + logo + colors)**

**Branding Customization:** (2 days dev)
- **Your company logo** on all templates
- **Your brand colors** (headers, charts)
- **Your company name** in footers
- Professional white-label appearance

**Template Protection:** (1 day dev)
- **Password protection** on formula cells
- Audit trail logging
- Version control
- Only data entry cells unlocked

**Dynamic Validation:** (2 days dev)
- **Auto-updating dropdown lists**
- Product catalog syncs weekly
- Staff roster auto-updates
- Intelligent error prevention

---

### **C. Google Sheets Advanced (8 days dev effort)**

**Apps Script Automation:** (3 days dev)
- **Auto-export script**
- Scheduled data extraction
- Automatic formatting
- Optional (client choice)

**Sheets API Integration:** (5 days dev - P3 priority)
- **Direct Sheets -> Power BI sync**
- Real-time data flow
- No manual CSV export
- Mobile data entry -> dashboard auto-updates
- Complex, requires IT involvement

---

### **D. Automation - Full Stack (13 days dev effort)**

**POS Auto-Export Script:** (5 days dev)
- **Custom Python script** for client's POS
- Scheduled extraction (daily at 6am)
- Automatic file formatting
- Error handling + retry logic
- Email alerts if export fails

**Scheduled Power BI Refresh:** (2 days dev)
- **Daily automated refresh** (configured time)
- Weekend/weekday schedules
- Refresh failure monitoring
- WE get alerts if it fails
- Proactive troubleshooting

**Email Report Automation:** (3 days dev)
- **Weekly automated email**
- Executive summary snapshot (PDF)
- Key metric highlights
- Alerts for anomalies
- Customizable recipient list

**Backup Automation:** (1 day dev)
- **Automated daily backups**
- 30-day retention
- Cloud storage
- Disaster recovery plan

**Additional Automation:** (2 days dev)
- POS API integration (if available)
- Accounting system sync (Accurate/Jurnal)
- Data quality monitoring

---

### **E. WhatsApp Integration (5 days dev effort)**

**WhatsApp Business API:** (3 days dev)
- **Dedicated WhatsApp line** for support
- Business API setup
- Quick reply templates
- Integration with alerting system

**Daily Alert Templates:** (2 days dev)
- **Morning summary** (yesterday's performance)
- **Real-time alerts:**
 - Revenue target progress
 - Food cost spike warnings
 - Staff attendance issues
- Customizable alert thresholds

---

### **F. Mobile & Multi-language (10 days dev effort)**

**Full Mobile Layout:** (5 days dev)
- **All pages mobile-optimized**
- Touch-friendly interactions
- Responsive design
- Native mobile app feel

**Multi-language Toggle:** (3 days dev)
- **Bahasa Indonesia ↔ English**
- One-click language switch
- All labels translated
- Reports in both languages

**Print-Ready Pages:** (2 days dev)
- **3 print-ready pages:**
 - Executive summary
 - Monthly business review
 - Board presentation format
- Professional formatting
- Company logo included

---

### **G. Service Delivery - FULLY MANAGED (2.5 days dev effort)**

**Setup:**
- **Fully managed setup** (zero customer effort)
- **WE do everything:**
 - Install Power BI on your computer
 - Configure all Excel templates
 - Set up automation scripts
 - Import historical data
 - Test all integrations
 - Train your team
- **On-site option available:**
 - +Rp 3M (Jakarta area)
 - +Rp 5M (outside Jakarta)
- **Your time:** 1 hour (handoff meeting)

**Dev:** 1 day (white-glove onboarding process)

**Ongoing Support:**
- **Unlimited email support** (24h priority response)
- **WhatsApp support** (direct line to support team)
- **Monthly check-in calls** (30 min strategy review)
- **Quarterly business review** (1 hour deep dive)

**Dev:** 0.5 day (ongoing service workflows)

**Monthly Service (optional support (see Product 02)):**
- **Dashboard maintenance** (2 custom metrics/month)
- **Excel template updates** (product/staff roster sync)
- **Data quality monitoring**
- **Proactive troubleshooting**
- **Strategic consulting** (1 hour/month)
- **Seasonal adjustments** (Ramadan, CNY, etc.)

**Dev:** 1 day (monthly service playbook)

---

**PHASE 3 TOTAL: ~51 days dev effort**

**Definition of Done:**
- Everything in Phase 1 + 2
- +50 metrics working (now 100-150 total)
- What-If parameters functional
- WhatsApp alerts working
- Full automation configured
- Monthly service workflow operational
- White-label branding applied

---

## Sprint 1 Execution Plan (Validated Launch)

**Execution Philosophy:** "Sell-First, Build-Second" - Validate demand before building

### **Detailed Execution Plans:**

This roadmap defines **WHAT to build** (features, metrics, modules). For **HOW and WHEN to execute**, see:

- **[[02-week-0-1-execution#pre-work-summary|Week -1 & Week 0: Pre-Sale Validation]]** - Legal setup + 15-20 validation conversations
- **[[02-week-0-1-execution|Week 1 (Days 1-10): Foundation Build & Launch]]** - T1-Basic complete, beta tested, launched
- **[[03-week-2-4-execution|Week 2-4: Post-Launch Operations & Scaling]]** - Customer support, Gate 1A, T1-Standard/Plus modules
- **[[04-week-5-8-execution|Week 5-8: T2 Professional Build]]** *(planned)* - Multi-outlet features
- **[[05-week-9-12-execution|Week 9-12: T3 Strategic Build]]** *(planned)* - Enterprise features

---

### **Pre-Work: Week -1 (Foundation Setup)**

**Legal & Infrastructure Setup:**
- [ ] Terms of Service, Privacy Policy, Refund Policy (Indonesian compliant)
- [ ] Midtrans payment gateway approved (KYB complete)
- [ ] Payment links for all tiers (Rp 3.5M-15M range)
- [ ] Google Drive structure (product folders, customer delivery system)
- [ ] Email templates (purchase, delivery, support, check-ins)
- [ ] CRM/tracking sheets (sales pipeline, customer database)

**Purpose:** Complete before any customer-facing work. No building until legal foundation is solid.

**See:** [[02-week-0-1-execution#week--1-legal--infrastructure-must-complete-first|09-week-0-1-execution-plan.md - Week -1]]

---

### **Pre-Work: Week 0 (Pre-Sale Validation - DO NOT SKIP)**

**Validation Objective:** Confirm 3+ verbal commits OR 2+ deposits before building

**Validation Activities:**
- [ ] Create one-pager with mockups and early-access pricing
- [ ] WhatsApp/LinkedIn message templates ready
- [ ] 15-20 validation conversations (warm network + cold outreach)
- [ ] Demo mockups to F&B owners
- [ ] Collect verbal commits and deposits
- [ ] Track objections and feature requests

**Decision Gate:**
- **PASS:** 3+ verbal commits OR 2+ deposits -> Proceed to build
- **PARTIAL:** 2 commits, positive feedback -> Adjust pricing, extend 1 week
- **FAIL:** <2 commits, lukewarm feedback -> Pivot or pause

**Output:** 2-5 committed customers, validated pricing, confirmed feature priorities

**Purpose:** Avoid building something nobody wants. Sell-first validates market demand.

**See:** [[02-week-0-1-execution#week-0-pre-sale-validation-do-not-skip|09-week-0-1-execution-plan.md - Week 0]]

---

### **Week 1 (Days 1-10): Foundation Build & Launch**

**Build Objective:** Ship T1-Basic (30 metrics, 3 tabs, 4 Excel templates) to beta customers

**Day-by-Day Breakdown:**
- **Day 1:** Foundation setup, Excel template ecosystem
- **Day 2-3:** Python data simulation, Power BI data model
- **Day 4-6:** 30 DAX measures (B1-B3), 3 dashboard tabs
- **Day 7:** Google Sheets conversion, mobile optimization
- **Day 8:** Documentation (Setup Guide, FAQ, 5 videos)
- **Day 9:** QA (50-point checklist), packaging, beta testing
- **Day 10:** Public launch (emails, social media, demo calls)

**Deliverables:**
- [ ] 30-metric Power BI dashboard (T1-Basic complete)
- [ ] 4 Excel + Google Sheets templates
- [ ] Sample data simulation (90 days, realistic patterns)
- [ ] Complete documentation (Setup Guide, FAQ, 5 videos)
- [ ] Delivery system (Google Drive, payment gateway, CRM)
- [ ] First customers onboarded (1-5 sales)

**See:** [[02-week-0-1-execution|09-week-0-1-execution-plan.md]]

---

### **Week 2: Post-Launch Operations (Hit Gate 1A)**

**Objective:** Support first customers, continue sales, reach 5+ total sales

**Daily Activities:**
- [ ] Lead generation (2-3 hours/day: LinkedIn, Facebook, WhatsApp)
- [ ] Demo calls (2-3 per day, 30% conversion target)
- [ ] Customer onboarding (Day 0, Day 2, Day 7, Day 30 check-ins)
- [ ] Support tickets (P0-P3 triage, <24h response)
- [ ] Bug fixes and version updates (v1.0.1 if needed)

**Gate 1A Decision (Friday Week 2):**
- **PASS:** 5+ sales, Rp 15M+ revenue -> Proceed to Week 3-4 (build T1-Standard/Plus)
- **PARTIAL:** 3-4 sales, Rp 10-14M revenue -> Extend 1 week, intensify sales
- **FAIL:** 0-2 sales, <Rp 10M revenue -> Pause module builds, analyze why, pivot

**See:** [[03-week-2-4-execution]]

---

### **Week 3-4: T1-Standard/Plus Module Builds (If Gate 1A Passed)**

**Build Objective:** Create 3 optional T1 modules (customers choose 0-3)

**Module Development:**
- **T1-A: Revenue Intelligence** (+10 metrics) - Revenue forecasting, upsells, discounts
- **T1-B: Menu Engineering** (+10 metrics) - BCG Matrix, menu item ranking, slow-movers
- **T1-C: Staff Performance** (+10 metrics) - Performance scoring, discipline tracking, gamification

**T1-Standard (Rp 4.5M):** T1-Basic + 1 module = 40 metrics
**T1-Plus (Rp 6M):** T1-Basic + 2 modules = 50 metrics

**Marketing & Scaling:**
- [ ] Organic marketing (LinkedIn, Facebook groups, Instagram)
- [ ] Paid ads testing (Meta Ads, Rp 100K/day if ROI positive)
- [ ] Content marketing (blog posts, YouTube videos)
- [ ] Testimonial collection (5+ testimonials target)
- [ ] Case study development (1-2 success stories)
- [ ] T2 demand validation (survey, waitlist, 10+ signups target)

**See:** [[03-week-2-4-execution#week-3-t1-standardplus-module-builds|10-week-2-4-execution-plan.md - Week 3-4]]

---

### **Week 5-8: T2 Professional Build (If Month 1 Successful)**

**Build Objective:** Multi-outlet features (50-100 metrics)

**Prerequisites:**
- Month 1 hit targets (15+ customers, Rp 50M+ revenue)
- T2 waitlist validated (10+ signups)
- T1 stabilized (no critical bugs)

**Modules to Build:**
- **P1: Multi-Outlet Core** (+12 metrics) - Outlet comparison, consolidated P&L
- **P2: Menu Optimization** (+15 metrics) - Ingredient trends, cannibalization analysis
- **P3: Workforce Analytics** (+12 metrics) - Performance scores, training ROI
- **P4: Customer Mastery** (+11 metrics) - Patronage ladder, NPS by segment

**Infrastructure:**
- [ ] Outlet-Summary.xlsx (multi-outlet consolidation)
- [ ] POS-specific Power Query (Moka, Pawoon, Cashlez)
- [ ] 2-3 hour setup call process
- [ ] Drill-through pages, custom tooltips, bookmarks

**See:** [[04-week-5-8-execution|11-week-5-8-execution-plan.md]] *(planned)*

---

### **Week 9-12: T3 Strategic Build (If Month 2 Successful)**

**Build Objective:** Enterprise features (100-150 metrics)

**Prerequisites:**
- Month 2 hit targets (25+ total customers, Rp 100M+ cumulative revenue)
- T3 demand validated (5+ enterprise inquiries)

**Modules to Build:**
- **S1: Executive Intelligence** (+15 metrics) - Scenario modeling, forecasting
- **S2: Advanced Menu** (+12 metrics) - Competitive benchmarking, cross-sell matrix
- **S3: Advanced Workforce** (+12 metrics) - Labor optimization, scheduler efficiency
- **S4: Customer Intelligence** (+11 metrics) - Cohort analysis, RFM segmentation

**Infrastructure:**
- [ ] What-If parameters (revenue scenarios, pricing tests)
- [ ] WhatsApp alerts (daily summaries, real-time anomaly detection)
- [ ] Full automation (POS auto-export, scheduled refresh, email reports)
- [ ] White-label branding (logo, colors, company name)
- [ ] Monthly service workflow (2 custom metrics/month, data quality monitoring)

**See:** [[05-week-9-12-execution|12-week-9-12-execution-plan.md]] *(planned)*

---

## ROI on Development Effort

| Tier | Dev Effort | Expected Sales (Y1) | Revenue | ROI |
|------|-----------|---------------------|---------|-----|
| **T1** | 23 days | 40 customers × Rp 4.5M | Rp 180M | 7.8x |
| **T2** | +24 days | 20 customers × Rp 10M | Rp 200M | 4.3x |
| **T3** | +51 days | 10 customers × Rp 12.5M + Rp 48M MRR (Year 1) | Rp 173M | 1.8x |

**Total: 98 days effort -> Rp 553M revenue (incl. Year 1 MRR) -> 5.6x ROI**

---

---

## Next Steps (Immediate Actions)

**Current Phase:** Pre-Work Preparation

**Immediate Actions (Week -1):**
1. [ ] Complete legal foundation (ToS, Privacy Policy, Refund Policy)
2. [ ] Set up Midtrans payment gateway (complete KYB verification)
3. [ ] Create Google Drive structure for product delivery
4. [ ] Configure email templates and CRM tracking sheets

**Immediate Actions (Week 0):**
1. [ ] Create one-pager with mockups and early-access pricing
2. [ ] Prepare WhatsApp/LinkedIn outreach templates
3. [ ] Conduct 15-20 validation conversations
4. [ ] Secure 3+ verbal commits OR 2+ deposits
5. [ ] Make Go/No-Go decision (PASS = proceed to build)

**If Week 0 PASSES:**
1. [ ] Execute Days 1-10 build plan (see [[02-week-0-1-execution|09-week-0-1-execution-plan.md]])
2. [ ] Ship T1-Basic to beta customers
3. [ ] Launch publicly on Day 10
4. [ ] Hit Gate 1A by end of Week 2 (5+ sales, Rp 15M+ revenue)

**See Detailed Execution Plans:**
- [[02-week-0-1-execution|09-week-0-1-execution-plan.md]] - Week -1, Week 0, Week 1 (Days 1-10)
- [[03-week-2-4-execution|10-week-2-4-execution-plan.md]] - Week 2-4 post-launch

---

**Related Documents:**
- [[../core/04-tiering-framework|07-tiering-framework.md]] - Customer-facing tier comparison
- [[02-week-0-1-execution|09-week-0-1-execution-plan.md]] - Week 0-1 execution (pre-work + launch)
- [[03-week-2-4-execution|10-week-2-4-execution-plan.md]] - Week 2-4 execution
- [[../../specifications/technical/04-gamification-feature-spec|06-gamification-feature-spec.md]] - Gamification mechanics


