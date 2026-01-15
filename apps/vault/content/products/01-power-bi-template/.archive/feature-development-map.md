# Feature-to-Tier Development Mapping

**Purpose:** Sprint 1 development planning - what to build for each tier
**Last Updated:** December 31, 2024

---

## Product Context

**What We're Building:** Complete F&B Data Ecosystem (NOT just a Power BI template)

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

**Modular Metrics Framework:** 150 total metrics organized into 12 modules
- 3 Base Modules (30 metrics) - All tiers
- 3 Tier 1 Add-ons (10 metrics each) - Optional for T1
- 4 Professional Modules (11-15 metrics each) - T2 add-ons
- 4 Strategic Modules (11-15 metrics each) - T3 add-ons

---

## Development Architecture: Two Integrated Build Streams

**This document is the DEVELOPMENT VIEW.** For sales positioning and customer decision-making see [[products/01-power-bi-template/product-strategy/04-tiering-framework|07-tiering-framework.md]] (comprehensive tiering framework + customer guide).

### Two Parallel Development Dimensions

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
- **23 days total = 10 days metrics + 13 days surrounding features**
- Metrics (10 days): 30 base metrics + 3 optional T1 modules (T1-A/B/C)
- Surrounding (13 days): 3 pages + 4 Excel templates + Power Query + Videos + Support setup

---

## Pricing Logic: Metrics Drive Price Variance

### **Key Insight:** Within each tier, more metrics = higher price

| Tier | Base Metrics | Max Metrics | Base Price | Max Price | Price Driver |
|------|--------------|-------------|------------|-----------|--------------|
| **T1** | 30 | 50 | Rp 3.5M | Rp 6M | +20 metrics = +Rp 2.5M |
| **T2** | 50 | 100 | Rp 7M | Rp 12M | +50 metrics = +Rp 5M |
| **T3** | 100 | 150 | Rp 10M | Rp 15M | +50 metrics = +Rp 5M |

**Example:**
- T1 @ Rp 3.5M = 30 metrics
- T1 @ Rp 4.5M = 40 metrics
- T1 @ Rp 6M = 50 metrics (full tier)

---

## Metric Grouping (Development Priority)

### **Core Metrics (30) - TIER 1 BASE**
*Must build first - fundamental operations*

**Revenue (8 metrics):**
1. Daily Revenue
2. Weekly Revenue
3. Monthly Revenue
4. Revenue vs Target (%)
5. Revenue Growth MoM (%)
6. Revenue Growth YoY (%)
7. Peak Hours Revenue
8. Payment Method Split

**Menu Performance (8 metrics):**
9. Top 10 Sellers (Quantity)
10. Top 10 Sellers (Revenue)
11. Bottom 5 Performers
12. Food Cost %
13. Beverage Cost %
14. Gross Margin by Category
15. Category Mix (%)
16. Average Order Value

**Staff Basics (7 metrics):**
17. Sales per Staff
18. Sales per Hour
19. Staff Leaderboard (Top 3)
20. Active Staff Count
21. Total Shift Hours
22. Labor Cost %
23. Revenue per Labor Hour

**Customer Basics (5 metrics):**
24. Total Customers
25. Average Check Size
26. New vs Repeat %
27. Transaction Count
28. Customer Count Trend

**Operations (2 metrics):**
29. Busiest Day of Week
30. Busiest Hour of Day

---

### **Enhanced Metrics (+10) - TIER 1 MID (40 total)**
*Add depth to core operations*

**Revenue Deep Dive (+3):**
31. Hourly Revenue Distribution
32. Discount Impact (%)
33. Walk-in vs Reservation Split

**Menu Engineering (+3):**
34. Recipe Cost per Item
35. Profit Margin per Item
36. Menu Item Profitability Rank

**Staff Performance (+2):**
37. Staff Attendance Rate
38. Late/Early Out Count

**Customer Intelligence (+2):**
39. Repeat Customer Rate
40. Customer Frequency Distribution

---

### **Advanced Metrics (+10) - TIER 1 MAX (50 total)**
*Full Tier 1 capability*

**Revenue Intelligence (+2):**
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

---

### **Professional Metrics (+50) - TIER 2 RANGE (50-100 total)**

**4 T2 Professional Modules (sold as add-ons at +Rp 1.25-1.5M each):**

**Module P1: Multi-Outlet Operations (+12 metrics, +Rp 1.25M):**
51-62. Outlet comparison, inter-outlet analysis, location performance, transfer tracking

**Module P2: Menu Optimization (+15 metrics, +Rp 1.25M):**
63-77. Ingredient cost trends, portion variance, cannibalization analysis, seasonal performance, new product tracking

**Module P3: Workforce Analytics (+12 metrics, +Rp 1.5M):**
78-89. Performance score components, discipline score breakdown, shift efficiency, training ROI, retention metrics

**Module P4: Customer Mastery (+11 metrics, +Rp 1.5M):**
90-100. Patronage ladder stages, NPS by segment, complaint resolution, win-back performance, visit patterns

---

### **Strategic Metrics (+50) - TIER 3 RANGE (100-150 total)**

**4 T3 Strategic Modules (sold as add-ons at +Rp 1.25M each):**

**Module S1: Executive Intelligence (+15 metrics, +Rp 1.25M):**
101-115. Gap to target breakdown, required run rate, scenario analysis, forecast vs actual, strategic KPIs

**Module S2: Advanced Menu (+12 metrics, +Rp 1.25M):**
116-127. Cross-sell matrix, menu optimization score, product launch tracking, competitive benchmarking

**Module S3: Advanced Workforce (+12 metrics, +Rp 1.25M):**
128-139. Labor optimization, productivity index, scheduler efficiency, cost per shift, overtime analysis

**Module S4: Customer Intelligence (+11 metrics, +Rp 1.25M):**
140-150. Cohort analysis, RFM segmentation, at-risk alerts, acquisition cost, campaign performance

---

## Feature Development Roadmap

### **Development Philosophy:** Build tier-by-tier, ensuring each phase delivers complete customer value

---

## PHASE 1: TIER 1 BASE - MVP Foundation (23 days)

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
-  No drill-through (T1 limitation)
-  No dynamic filtering beyond date range

**Dev:** 5 days (page layout, basic visuals, metric cards)

**Page 2: Revenue & Menu (Combined)**
- Revenue breakdown by category
- Payment method split (pie chart)
- Top 10 sellers (quantity + revenue)
- Food cost % gauge
- Basic margin analysis
-  No BCG matrix (T2+ feature)
-  No recipe-level cost tracking

**Dev:** 3 days (charts, filters, basic calculations)

**Page 3: Staff & Customer (Combined)**
- Sales per staff bar chart
- Staff leaderboard table
- Customer count by day
- New vs Repeat customer split
-  No performance scores (T2+ feature)
-  No patronage ladder (T3 feature)

**Dev:** 2 days (simple staff + customer metrics)

**Filtering:**
- Date range slicer (last 7/30/90 days)
-  No outlet filter (single outlet only)
-  No bookmarks (T2+ feature)

---

### **B. Excel Templates - Generic (5.5 days dev effort)**

**Template Suite: 4 files (sample data, not customized)**

**1. Daily-Sales.xlsx** (2 days dev)
- Sample product list (20 generic items: "Coffee", "Sandwich", etc.)
- Basic data entry form (Date, Product, Quantity, Price)
- Data validation dropdowns (product selection)
- Simple daily summary calculations
-  No customer data pre-filled
-  No outlet-specific products

**What customer does:** Replace sample products with their actual menu

**2. Food-Cost.xlsx** (1 day dev)
- Simple recipe cost calculator
- Ingredient list template (blank)
- Basic cost calculation formulas
-  No variance tracking (T2+ feature)
-  No supplier price trends

**What customer does:** Input their recipes and ingredient costs

**3. Staff-Log.xlsx** (1 day dev)
- Basic shift tracking (Name, Date, Hours)
- Simple attendance log
- Sales assignment field
-  No performance scoring (T2+ feature)
-  No discipline tracking

**What customer does:** Enter their staff names and daily shifts

**4. Customer-Log.xlsx** (0.5 day dev)
- Basic customer transaction log
- Fields: Date, Customer ID, Check Size
- New vs Repeat flag
-  No patronage tracking (T3 feature)

**What customer does:** Log customer visits

**Common Features (All Templates):**
- Data validation (dropdowns, date pickers)
- Error checking (simple formulas)
- Instruction sheets
-  No branding customization (generic look)
-  No password protection

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
-  No scheduled automation (manual refresh only)
-  No POS-specific scripts (generic only)

**What customer does:** Export CSV from their POS, drop in folder, click refresh

---

### **D. Support Materials (5.5 days dev effort)**

**Video Tutorials: 5 videos (10-min total learning path)**
- Video 1: Product overview (2 min) - 0.5 day dev
- Video 2: Excel template walkthrough (2 min) - 0.5 day dev
- Video 3: Data entry best practices (2 min) - 0.5 day dev
- Video 4: Power BI refresh demo (2 min) - 0.5 day dev
- Video 5: Reading your first dashboard (2 min) - 1 day dev
-  No custom training (pre-recorded only)

**Dev:** 3 days total (recording, editing, hosting)

**Quick-Start Guide PDF:**
- Getting started checklist
- Excel template guide
- FAQ (10 common questions)
- Troubleshooting guide
-  No customer-specific examples

**Dev:** 2 days (writing, design, testing)

**Support Setup:**
- **30-day email support** (72h response time)
- Support email templates
- Ticketing system integration
-  No WhatsApp support
-  No phone support
-  No setup calls

**Dev:** 0.5 day (support system setup)

---

### **E. Service Delivery Process (0 days - documentation only)**

**Setup:**
-  **Customer does it themselves (DIY)**
- Documentation provided
- Video tutorials
- **Estimated customer time:** 4-8 hours

**Onboarding:**
- Automated welcome email
- Download links
- Setup checklist
-  No human interaction

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

## PHASE 2: TIER 2 ENHANCEMENTS - Professional Features (24 days)

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
-  No cannibalization matrix (T3 feature)

**Page 5: Customer Insights** (3 days dev)
- Patronage ladder funnel (First-timer -> Regular -> VIP)
- CLV calculation
- Churn rate monitoring
- NPS score by segment
- Visit frequency distribution
-  No cohort analysis (T3 feature)

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
-  No automated supplier price updates (T3 feature)

**What WE do during setup:** Build recipe database together

**3. Staff-Log.xlsx - CUSTOMIZED** (1 day dev)
- **YOUR staff names pre-filled**
- **YOUR shift schedules** configured
- Performance score tracking
- Discipline score calculations
-  No ROI tracking (T3 feature)

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
-  No branding (still generic look)

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
-  No real-time API integration (T3 feature)

**Excel VBA Macro:** (2 days dev)
- **Format cleaner macro**
- One-button data preparation
- Automatic CSV conversion
-  No scheduled execution (manual trigger)

---

### **D. Mobile & Print (3 days dev effort)**

**Mobile Layout:** (2 days dev)
- **Basic mobile layout** (1 page responsive)
- Executive summary optimized for phone
-  Not all pages (just summary)
-  No touch interactions

**Print Layout:** (1 day dev)
- **Print-friendly page** (1 page)
- Executive summary formatted for A4
- Clean margins, no interactive elements
-  Only 1 page printable (not full dashboard)

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
-  No WhatsApp support
-  No ongoing monthly service

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

## PHASE 3: TIER 3 PREMIUM - Enterprise Automation (51 days)

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
-  Optional (client choice)

**Sheets API Integration:** (5 days dev - P3 priority)
- **Direct Sheets -> Power BI sync**
- Real-time data flow
- No manual CSV export
- Mobile data entry -> dashboard auto-updates
-  Complex, requires IT involvement

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
- **Bahasa Indonesia †" English**
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

## CONSOLIDATED EFFORT SUMMARY

| Phase | Dev Days | Target Tier | Key Deliverable |
|-------|----------|-------------|-----------------|
| Phase 1 | 23 days | T1 Base | DIY ecosystem (30 metrics) |
| Phase 2 | +24 days | T2 Professional | Assisted setup + advanced analytics (50-100 metrics) |
| Phase 3 | +51 days | T3 Enterprise | Full automation + white-label + ongoing service (100-150 metrics) |
| **TOTAL** | **98 days** | **All Tiers** | **Complete product line** |

**Team Structure:**
- Developer 1: Dashboard + Metrics
- Developer 2: Excel + Power Query + Automation
- Developer 3: Documentation + Videos + Service Design

**Revenue Potential:** Rp 553M (Year 1, including MRR)
**ROI:** 5.6x on development investment

---

## Feature Development Roadmap

### **PHASE 1: TIER 1 BASE (Essential for all tiers)**

#### **A. Dashboard Structure**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| 3 dashboard pages (Exec, Revenue, Staff) | 5 days | P0 | T1+ |
| Basic filtering (Date range) | 2 days | P0 | T1+ |
| Standard visuals (cards, charts, tables) | 3 days | P0 | T1+ |

#### **B. Excel Templates (Generic - 4 files total)**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Daily-Sales.xlsx (sample products) | 2 days | P0 | T1+ |
| Food-Cost.xlsx (simple calculator) | 1 day | P0 | T1+ |
| Staff-Log.xlsx (basic tracking) | 1 day | P0 | T1+ |
| Customer-Log.xlsx (basic tracking) | 0.5 day | P0 | T1+ |
| Data validation (dropdowns) | 1 day | P0 | T1+ |

#### **C. Power Query (Basic)**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Generic CSV import script | 2 days | P0 | T1+ |
| Folder-based refresh | 1 day | P0 | T1+ |

#### **D. Support Materials**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| 5 video tutorials (10-min total learning path) | 3 days | P0 | T1+ |
| Quick-start guide PDF | 2 days | P0 | T1+ |
| 30-day email support setup (72h response) | 0.5 day | P0 | T1 |

**Total Effort: ~23 days (1 sprint)**

---

### **PHASE 2: TIER 2 ENHANCEMENTS**

#### **A. Dashboard Expansion**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| +2 pages (Menu Engineering, Customer) | 3 days | P1 | T2+ |
| Drill-through pages (2-3) | 3 days | P1 | T2+ |
| Custom tooltips (5 visuals) | 2 days | P1 | T2+ |
| Bookmarks (5 presets) | 1 day | P1 | T2+ |

#### **B. Excel Templates (Custom)**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Outlet-Summary.xlsx (consolidation) | 2 days | P1 | T2+ |
| Custom product pre-fill | 1 day | P1 | T2 |
| Custom recipe pre-fill | 1 day | P1 | T2 |
| Advanced validation (dependent dropdowns) | 2 days | P1 | T2+ |

#### **C. Automation**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| POS-specific Power Query (3 templates) | 3 days | P1 | T2 |
| Excel VBA macro (format cleaner) | 2 days | P1 | T2+ |

#### **D. Mobile & Print**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Basic mobile layout (1 page) | 2 days | P1 | T2+ |
| Print-friendly page (1 page) | 1 day | P1 | T2+ |

#### **E. Service Delivery**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| 2-3 hour setup call process | 0.5 day | P1 | T2 |
| 90-day support extension (48h response) | 0.5 day | P1 | T2 |

**Total Effort: ~24 days (1 sprint)**

---

### **PHASE 3: TIER 3 PREMIUM**

#### **A. Dashboard Advanced**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| +2 custom pages (as needed) | 4 days | P2 | T3 |
| Drill-through expansion (5+ pages) | 3 days | P2 | T3 |
| What-If parameters (2-3) | 3 days | P2 | T3 |
| Row-Level Security (RLS) | 2 days | P2 | T3 |

#### **B. Excel Templates (White-label)**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Branding customization (logo, colors) | 2 days | P2 | T3 |
| Template protection (password) | 1 day | P2 | T3 |
| Dynamic validation (auto-update lists) | 2 days | P2 | T3 |

#### **C. Google Sheets Advanced**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Apps Script (auto-export) | 3 days | P2 | T3 |
| Sheets API integration | 5 days | P3 | T3 |

#### **D. Automation (Custom Dev)**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| POS auto-export script (Python) | 5 days | P2 | T3 |
| Scheduled Power BI refresh | 2 days | P2 | T3 |
| Email report automation | 3 days | P2 | T3 |

#### **E. WhatsApp Integration**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| WhatsApp Business API setup | 3 days | P2 | T3 |
| Daily alert templates | 2 days | P2 | T3 |

#### **F. Mobile & Multi-language**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Full mobile layout (all pages) | 5 days | P2 | T3 |
| Multi-language toggle | 3 days | P2 | T3 |
| 3 print-ready pages | 2 days | P2 | T3 |

#### **G. Service Delivery**
| Feature | Effort | Priority | Tier |
|---------|--------|----------|------|
| Fully managed setup process | 1 day | P2 | T3 |
| Monthly check-in workflow | 0.5 day | P2 | T3 |
| Quarterly review template | 0.5 day | P2 | T3 |
| Unlimited support setup (24h email + WhatsApp) | 0.5 day | P2 | T3 |

---

## Sprint 1 Build Plan (MVP Launch)

### **Must Build (All Tiers Need This):**

**Week 1-2: Core Dashboard**
- [ ] 30 core metrics implemented
- [ ] 3 dashboard pages (Exec/Revenue/Staff)
- [ ] Basic slicers (Date range)
- [ ] Sample data loaded

**Week 2-3: Excel Templates**
- [ ] 3 generic Excel templates
- [ ] Basic dropdowns & validation
- [ ] Sample data in templates

**Week 3-4: Integration & Testing**
- [ ] Power Query import script
- [ ] Folder-based refresh setup
- [ ] End-to-end workflow test

**Week 4: Documentation**
- [ ] 5 video tutorials recorded
- [ ] Quick-start guide PDF
- [ ] Support email templates

### **Should Build (T2+ Value):**

**Week 5-6: Tier 2 Features**
- [ ] +20 metrics (40-50 total)
- [ ] 2 drill-through pages
- [ ] Outlet-Summary.xlsx
- [ ] 1 Excel macro

**Week 7-8: Polish**
- [ ] Custom tooltips
- [ ] Bookmarks
- [ ] Mobile layout (basic)

### **Nice to Have (T3 Premium):**

**Week 9-10: Tier 3 Foundations**
- [ ] +50 metrics (100 total)
- [ ] What-If parameters
- [ ] RLS setup
- [ ] WhatsApp alert prototype

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

## Metrics-to-Price Mapping (Customer View)

### **Tier 1 Options:**
| Price | Metrics | Features | Value Prop |
|-------|---------|----------|------------|
| **Rp 3.5M** | 30 | Core only | "Start lean" |
| **Rp 4.5M** | 40 | Core + enhanced | "Most popular" |
| **Rp 6M** | 50 | Full T1 | "Max DIY value" |

### **Tier 2 Options:**
| Price | Metrics | Features | Value Prop |
|-------|---------|----------|------------|
| **Rp 7M** | 50 | T1 Max + assisted | "Professional start" |
| **Rp 9.5-10M** | 74-80 | Base + 2 modules | "Recommended" |
| **Rp 12M** | 100 | Max T2 (all 4 modules) | "Multi-outlet ready" |

### **Tier 3 Options:**
| Price | Metrics | Features | Value Prop |
|-------|---------|----------|------------|
| **Rp 10M** | 100 | Managed start | "Enterprise lite" |
| **Rp 22.5M** | 125 | Full automation | "Scaling recommended" |
| **Rp 15M** | 150 | Max everything | "White-glove" |

---

## Sprint 1 Definition of Done

**Tier 1 (3.5M - 30 metrics):**
- 30 metrics working
- 3 pages functional
- 3 Excel templates delivered
- 1-click refresh works
- Videos + PDF ready

**Tier 2 (7M - 50 metrics):**
- Everything in T1
- +20 metrics working
- 2 drill-through pages
- Outlet-Summary.xlsx
- Setup call process documented

**Tier 3 (10M - 100 metrics):**
- Everything in T2
- +50 metrics working
- What-If parameter (1)
- WhatsApp alert (prototype)
- Monthly service workflow

---

## ROI on Development Effort

| Tier | Dev Effort | Expected Sales (Y1) | Revenue | ROI |
|------|-----------|---------------------|---------|-----|
| **T1** | 23 days | 40 customers x Rp 4.5M | Rp 180M | 7.8x |
| **T2** | +24 days | 20 customers x Rp 10M | Rp 200M | 4.3x |
| **T3** | +51 days | 10 customers x Rp 12.5M + Rp 48M MRR (Year 1) | Rp 173M | 1.8x |

**Total: 98 days effort -> Rp 553M revenue (incl. Year 1 MRR) -> 5.6x ROI**

---

**Next Steps:**
1. Prioritize which 30 metrics for T1 base
2. Design Excel template formats
3. Set up development environment
4. Create metric calculation library



