# Complete F&B Data Ecosystem - Implementation Subset

**Product:** A1 - Power BI Dashboard + Excel/Sheets Bundle
**Scope:** Modular metrics approach - choose the modules you need

---

## Ecosystem Components Implemented

### Component 1: Power BI Dashboard (.pbix)
**Metrics:** Modular framework with 150 total metrics organized into 12 modules

**Module-Based Implementation:**
- **Tier 1:** Base modules (30 metrics) + optional T1 modules (0-20 metrics) = 30-50 metrics
- **Tier 2:** T1 + Professional modules (0-50 metrics) = 50-100 metrics
- **Tier 3:** T2 + Strategic modules (0-50 metrics) = 100-150 metrics

**See [[products/01-power-bi-template/specifications/core/03-metrics-catalog|metrics-catalog.md]] for complete 12-module breakdown.**

---

### Component 2: Excel Template Suite (3-4 files)
1. **Daily-Sales.xlsx**
 - Dropdowns for product names (no typos)
 - Auto-calculated totals
 - Date validation
 - Staff assignment tracking

2. **Food-Cost.xlsx**
 - Recipe-based costing
 - Traffic light alerts (Green <30%, Yellow 30-35%, Red >35%)
 - Ingredient price tracking
 - Portion control calculator

3. **Staff-Log.xlsx**
 - Timesheet entry (clock in/out)
 - Sales per shift tracking
 - Leaderboard (auto-ranks by performance)
 - Discipline tracker (late/early departures)

4. **Outlet-Summary.xlsx** (Tier 2/3 only - requires P1 Multi-Outlet module)
 - Multi-location consolidation
 - Cross-outlet comparison
 - Aggregate KPIs

---

### Component 3: Google Sheets Bridge
- Same templates in Google Sheets format
- Make-a-copy links
- Mobile-friendly (input on phone)

---

### Component 4: Import Automation
- Power Query script
- Folder-based import (drop files, click refresh)
- Works 100% offline

---

### Component 5: Video Tutorials
- 5 videos × 2 minutes
- Bahasa Indonesia
- Topics: Excel setup, Power BI navigation, Google Sheets sync, troubleshooting, advanced tips

---

## Modular Metrics Framework - Implementation by Tier

### Selection Criteria

The modular approach allows businesses to:
- **Start Small:** Begin with 30 base metrics (operational essentials)
- **Add As Needed:** Purchase additional modules based on business maturity
- **Pay For Value:** Only pay for metrics you'll actually use
- **Upgrade Path:** Clear progression from basic to enterprise analytics

**Module Organization:**
- **Base Modules (30 metrics):** Revenue Core, Menu Essentials, Staff & Customer Basics
- **Tier 1 Options (30 metrics):** Revenue Intelligence, Menu Engineering, Staff Performance
- **Tier 2 Professional (50 metrics):** Multi-Outlet, Menu Optimization, Workforce Analytics, Customer Mastery
- **Tier 3 Strategic (50 metrics):** Executive Intelligence, Advanced Menu, Advanced Workforce, Customer Intelligence

---

## Tier 1: Essentials (30-50 metrics)

### T1-Basic: Base Modules Only (30 metrics, Rp 3.5M)

**Modules Included:**
- **B1: Revenue Core (10 metrics)** - Daily/weekly/monthly revenue, growth, payment mix
- **B2: Menu Essentials (10 metrics)** - Top/bottom sellers, food cost %, category mix
- **B3: Staff & Customer Basics (10 metrics)** - Sales per staff, labor cost %, customer count

**Power BI Implementation:**
- Single dashboard tab: "Command Center"
- KPI cards for key metrics
- Basic charts and tables
- Date range slicer

**Use Case:** Small restaurant, 1 location, basic reporting needs

---

### T1-Standard: Base + 1 Module (40 metrics, Rp 4.5M)

**Choose ONE additional module:**

**Option A: Base + T1-A Revenue Intelligence (+10 metrics)**
- Adds: Upsell tracking, discount analysis, forecast to year-end, gap analysis
- **Best for:** Businesses tracking annual revenue targets (e.g., "hit Rp 12B this year")

**Option B: Base + T1-B Menu Engineering (+10 metrics)**
- Adds: BCG Matrix (Stars/Cows/Dogs/Question Marks), recipe costing, menu optimization
- **Best for:** Restaurants refining their menu offerings

**Option C: Base + T1-C Staff Performance (+10 metrics)**
- Adds: Performance score, discipline tracking, punctuality, staff tiers (Gold/Silver/Bronze)
- **Best for:** Managing staff performance and incentives

**Power BI Implementation:**
- 2 dashboard tabs (e.g., "Command Center" + "Wolf Pack")
- Module-specific visuals
- Enhanced drill-through capabilities

---

### T1-Plus: Base + 2 Modules (50 metrics, Rp 6M)

**Choose TWO T1 modules** from Revenue Intelligence, Menu Engineering, or Staff Performance

**Most Popular Combinations:**
1. **Revenue Intelligence + Staff Performance** - Track targets while managing team
2. **Menu Engineering + Revenue Intelligence** - Optimize menu while forecasting revenue
3. **Staff Performance + Menu Engineering** - Team management + product insights

**Power BI Implementation:**
- 3 dashboard tabs (one per module category)
- Complete Tier 1 analytics suite
- Foundation for Tier 2 upgrade

---

## Tier 2: Professional (50-100 metrics)

### T2-Base: All Base + All T1 (50 metrics, Rp 7M)

**Modules Included:**
- B1, B2, B3 (Base - 30 metrics)
- T1-A, T1-B, T1-C (All Tier 1 - 20 metrics)

**Power BI Implementation:**
- Complete operational analytics
- 3 core dashboard tabs
- All Tier 1 capabilities included
- Ready for Professional module additions

---

### T2 Professional Module Options

Add one or more Professional modules to T2-Base:

#### **P1: Multi-Outlet Operations (+12 metrics, +Rp 1.25M)**
**Total: 62 metrics, Rp 8.25M**

**Adds:**
- Outlet performance comparison
- Revenue/cost/profit by outlet
- Inter-outlet transfer analysis
- Consolidated multi-outlet dashboard

**Power BI Implementation:**
- New tab: "Multi-Outlet Command Center"
- Outlet slicer for filtering
- Comparison charts and heatmaps

**Required For:** 2+ location businesses

**Data Requirement:** Outlet dimension table with outlet-tagged sales data

---

#### **P2: Menu Optimization (+15 metrics, +Rp 1.25M)**
**Total: 65 metrics, Rp 8.25M**

**Adds:**
- Ingredient cost trends
- Recipe cost variance
- Product cannibalization analysis
- Cross-sell opportunity matrix
- New product launch tracking
- Advanced BCG analysis

**Power BI Implementation:**
- Enhanced "Menu Engineering" tab
- Product launch tracker
- Cannibalization matrix visual
- Seasonal performance charts

**Best For:** Restaurants with frequent menu changes or new product launches

---

#### **P3: Workforce Analytics (+12 metrics, +Rp 1.5M)**
**Total: 62 metrics, Rp 8.5M**

**Adds:**
- Shift efficiency analysis
- Turnover rate and retention cost
- Productivity index
- Scheduling efficiency
- Overtime analysis
- Training ROI

**Power BI Implementation:**
- Enhanced "Wolf Pack" tab with deep workforce analytics
- Shift comparison visuals
- Turnover risk indicators
- Schedule optimization insights

**Best For:** Businesses with staff turnover issues or complex scheduling needs

---

#### **P4: Customer Mastery (+11 metrics, +Rp 1.5M)**
**Total: 61 metrics, Rp 8.5M**

**Adds:**
- Patronage ladder (First-Timer -> Repeater -> Regular -> VIP)
- First-timer return rate
- VIP churn tracking
- Revenue at risk
- NPS breakdown (Promoters/Passives/Detractors)
- Customer lifetime value

**Power BI Implementation:**
- New tab: "Loyalty Loop"
- Patronage funnel visual
- VIP churn alerts
- NPS dashboard

**Best For:** Businesses focused on customer retention and loyalty

**Data Requirement:** Feedback table with ratings and NPS data

---

### T2-Complete: All Base + All T1 + All T2 (100 metrics, Rp 12M)

**Modules Included:**
- B1, B2, B3 (Base - 30 metrics)
- T1-A, T1-B, T1-C (Tier 1 - 20 metrics)
- P1, P2, P3, P4 (All Tier 2 Professional - 50 metrics)

**Power BI Implementation:**
- Complete professional-grade analytics platform
- 6+ dashboard tabs covering all business areas
- Multi-outlet, advanced menu, workforce, and customer analytics
- Foundation for Tier 3 strategic modules

**Use Case:** Growing multi-location business ready for comprehensive analytics

---

## Tier 3: Enterprise (100-150 metrics, Rp 10-15M)

### T3-Base: T2-Complete + Automation (100 metrics, Rp 10M)

**Modules Included:**
- All Base + All T1 + All T2 (100 metrics)

**Plus Tier 3 Features:**
- WhatsApp automation (automated reports)
- POS auto-export integration
- Monthly data refresh service
- Priority support

**Power BI Implementation:**
- Same 100 metrics as T2-Complete
- Enhanced with automation and integrations
- Real-time data refresh capabilities

---

### T3 Strategic Module Options

Add one or more Strategic modules to T3-Base:

#### **S1: Executive Intelligence (+15 metrics, +Rp 1.25M)**
**Total: 115 metrics, Rp 11.25M**

**Adds:**
- Gap to target breakdown
- Scenario analysis (best/expected/worst)
- Board-level metrics
- Investor reporting view
- Quarterly business review package
- Growth velocity analysis

**Power BI Implementation:**
- New tab: "Executive Dashboard"
- Scenario analysis visuals
- Board-ready summary page

**Best For:** Businesses presenting to boards or investors

---

#### **S2: Advanced Menu (+12 metrics, +Rp 1.25M)**
**Total: 112 metrics, Rp 11.25M**

**Adds:**
- Price elasticity analysis
- Competitive price benchmarking
- Menu profitability matrix
- ABC analysis (Pareto)
- Recipe costing automation
- Menu refresh recommendations

**Power BI Implementation:**
- Enhanced menu analytics with pricing strategy tools
- Competitive analysis charts
- Automated recommendations

**Best For:** Businesses optimizing pricing strategy

---

#### **S3: Advanced Workforce (+12 metrics, +Rp 1.25M)**
**Total: 112 metrics, Rp 11.25M**

**Adds:**
- Labor optimization model
- Scheduler efficiency score
- Training ROI measurement
- Staff development path tracking
- Succession planning metrics
- Retention prediction model

**Power BI Implementation:**
- Labor optimization dashboard
- Predictive turnover alerts
- Succession planning view

**Best For:** Large teams or businesses with complex workforce needs

---

#### **S4: Customer Intelligence (+11 metrics, +Rp 1.25M)**
**Total: 111 metrics, Rp 11.25M**

**Adds:**
- Cohort analysis
- RFM segmentation (Recency, Frequency, Monetary)
- At-risk customer alerts
- Customer acquisition cost (CAC)
- Campaign performance tracking
- Churn prediction model

**Power BI Implementation:**
- Advanced customer segmentation dashboard
- Predictive churn alerts
- Campaign ROI tracker

**Best For:** Businesses with active marketing campaigns and loyalty programs

**Data Requirement:** Campaign data, customer acquisition tracking

---

### T3-Complete: All Modules (150 metrics, Rp 15M)

**Modules Included:**
- All 12 modules (Base + T1 + T2 + T3)

**Power BI Implementation:**
- Enterprise-grade complete analytics platform
- 8+ dashboard tabs
- All features: operational, professional, and strategic analytics
- Full automation and integrations
- Predictive analytics and AI recommendations

**Use Case:** Large restaurant groups, enterprises, businesses with sophisticated analytics needs

---

## Module Implementation Matrix

| Module Code | Module Name | Metrics | Price | Required Data | Best For |
|-------------|----------------------------------|---------|-------------|---------------------------|-----------------------|
| **T3-Base** | Base + All T1 + All T2 + Automation | 100 | Rp 10M | All T2 Data + Integrations | Enterprise foundation |
| **T3 + S1** | T3 Base + Executive Intelligence | 115 | Rp 11.25M | Forecasts | Board reporting |
| **T3 + S2** | T3 Base + Advanced Menu | 112 | Rp 11.25M | Competitor data | Pricing strategy |
| **T3 + S3** | T3 Base + Advanced Workforce | 112 | Rp 11.25M | Training, Performance | Large teams |
| **T3 + S4** | T3 Base + Customer Intelligence | 111 | Rp 11.25M | Campaigns, Cohorts | Marketing ROI |
| **T3-Complete** | All modules (12 total) | 150 | Rp 15M | All data + Integrations | Comprehensive analytics |
| **B1** | Revenue Core | 10 | Base | Sales_Data, Targets | All tiers |
| **B2** | Menu Essentials | 10 | Base | Sales_Data, Products | All tiers |
| **B3** | Staff & Customer Basics | 10 | Base | Sales_Data, Staff_Roster | All tiers |
| **T1-A** | Revenue Intelligence | 10 | +Rp 1M | Sales_Data (extended) | Target tracking |
| **T1-B** | Menu Engineering | 10 | +Rp 1M | Products, Recipes | Menu optimization |
| **T1-C** | Staff Performance | 10 | +Rp 1M | StaffHours | Team management |
| **P1** | Multi-Outlet | 12 | +Rp 1.25M | Outlets table | 2+ locations |
| **P2** | Menu Optimization | 15 | +Rp 1.25M | Ingredients, Recipes | Product launches |
| **P3** | Workforce Analytics | 12 | +Rp 1.5M | StaffHours, Training | Turnover issues |
| **P4** | Customer Mastery | 11 | +Rp 1.5M | Feedback, NPS | Retention focus |
| **S1** | Executive Intelligence | 15 | +Rp 1.25M | Forecasts | Board reporting |
| **S2** | Advanced Menu | 12 | +Rp 1.25M | Competitor data | Pricing strategy |
| **S3** | Advanced Workforce | 12 | +Rp 1.25M | Training, Performance | Large teams |
| **S4** | Customer Intelligence | 11 | +Rp 1.25M | Campaigns, Cohorts | Marketing ROI |

---

## Migration from Previous "75 Metrics" Specification

**Previous Approach (DEPRECATED):**
- Fixed 75 metrics across 3 tabs
- Tab 1: Command Center (25 metrics)
- Tab 2: Wolf Pack (25 metrics)
- Tab 3: Loyalty Loop (25 metrics)

**New Mapping to Modular Framework:**

The old "75 metrics" specification was essentially a **demo configuration** that included:
- Base modules (30 metrics)
- Partial T1 modules (10 metrics from T1-A Revenue Intelligence)
- Partial T2 modules (20 metrics from P2 Menu Optimization + P4 Customer Mastery)
- Partial T3 modules (15 metrics from S4 Customer Intelligence)

This is now represented as **"T2-Custom"** configuration (not a standard tier, used for demos/specs).

**For New Implementations:**
- Use the modular tier configurations (T1/T2/T3) instead
- Select modules based on actual business needs
- Don't build fixed "75-metric" dashboards

---

## Upgrade Path to Higher Tiers

### When to Upgrade from T1 to T2:

**Add Professional Modules When:**
- You open a second location -> Add P1 Multi-Outlet
- You launch new products frequently -> Add P2 Menu Optimization
- You have staff turnover issues -> Add P3 Workforce Analytics
- You want to track customer loyalty -> Add P4 Customer Mastery

**Pricing:**
- T1-Plus (50 metrics, Rp 6M) -> T2-Base + 1 Professional module (62-65 metrics, Rp 8.25-8.5M)
- Incremental cost: Rp 2.25-2.5M for Professional capabilities

---

### When to Upgrade from T2 to T3:

**Add Strategic Modules When:**
- You need board/investor reporting -> Add S1 Executive Intelligence
- You want pricing optimization -> Add S2 Advanced Menu
- You have complex workforce planning -> Add S3 Advanced Workforce
- You run marketing campaigns -> Add S4 Customer Intelligence

**Plus Tier 3 Automation:**
- WhatsApp automated reports
- POS auto-export integration
- Monthly data refresh service
- Priority support

**Pricing:**
- T2-Complete (100 metrics, Rp 12M) -> T3-Base (100 metrics, Rp 10M)
- Lower setup cost but ongoing service fee for automation

---

## Technical Implementation Notes

**Power BI File Structure:**
- Modules are organized as separate measure groups
- Each module has its own dedicated tab or sub-tab
- Modules can be enabled/disabled based on tier
- Data model supports all 150 metrics (lightweight, only active modules load data)

**DAX Measures Organization:**
```
Measures/
 Base/
 B1_Revenue_Core.dax
 B2_Menu_Essentials.dax
 B3_Staff_Customer_Basics.dax
 Tier1/
 T1A_Revenue_Intelligence.dax
 T1B_Menu_Engineering.dax
 T1C_Staff_Performance.dax
 Tier2/
 P1_Multi_Outlet.dax
 P2_Menu_Optimization.dax
 P3_Workforce_Analytics.dax
 P4_Customer_Mastery.dax
 Tier3/
 S1_Executive_Intelligence.dax
 S2_Advanced_Menu.dax
 S3_Advanced_Workforce.dax
 S4_Customer_Intelligence.dax
```

**Module Gating:**
- Use Power BI parameters to enable/disable module tabs
- Module-specific visuals hidden if module not purchased
- Data sources loaded conditionally based on purchased modules

**For Complete Technical Details:**
- See [[products/01-power-bi-template/specifications/technical/01-power-bi-tech-spec|power-bi-tech-spec.md]] for DAX formulas
- See [[products/01-power-bi-template/specifications/core/03-metrics-catalog|metrics-catalog.md]] for complete metric definitions

---

## Data Requirements by Tier

### Tier 1 (30-50 metrics)
**Required Tables:**
- Sales_Data (basic columns)
- Products
- Staff_Roster
- Targets
- Date (pre-built)

**Optional Tables (for T1 modules):**
- Sales_Data (extended columns for T1-A)
- StaffHours (for T1-C)
- Recipes (for T1-B)

---

### Tier 2 (50-100 metrics)
**Additional Tables:**
- Outlets (for P1)
- Feedback (for P4)
- Ingredients (for P2)
- Training (for P3)

---

### Tier 3 (100-150 metrics)
**Additional Tables:**
- Campaigns (for S4)
- Cohorts (calculated, for S4)
- Forecasts (for S1)
- Competitor data (for S2)

**Plus Integrations:**
- WhatsApp API
- POS auto-export
- Cloud data refresh

---

## Customer Selection Guide

### "I'm starting out, need basic reporting"
 -> **T1-Basic (30 metrics, Rp 3.5M)**

### "I need to track our Rp 12B annual target"
 -> **T1-Standard with T1-A Revenue Intelligence (40 metrics, Rp 4.5M)**

### "I want to gamify staff performance"
 -> **T1-Standard with T1-C Staff Performance (40 metrics, Rp 4.5M)**

### "I need full operational analytics"
 -> **T1-Plus (50 metrics, Rp 6M)** with Revenue Intelligence + Staff Performance

### "I have 2 outlets and need comparison"
 -> **T2-Base + P1 Multi-Outlet (62 metrics, Rp 8.25M)**

### "I launch new products monthly"
 -> **T2-Base + P2 Menu Optimization (65 metrics, Rp 8.25M)**

### "I present to investors quarterly"
 -> **T3-Base + S1 Executive Intelligence (115 metrics, Rp 21.25M)**

### "I want everything"
 -> **T3-Complete (150 metrics, Rp 15M)**

---

**Last Updated:** 2025-12-30
**Related:** [[products/01-power-bi-template/specifications/core/03-metrics-catalog|Metrics Catalog]] | [[products/01-power-bi-template/product-strategy/core/01-master-strategy|Product Strategy]] | [[products/01-power-bi-template/specifications/technical/01-power-bi-tech-spec|Power BI Tech Spec]]

