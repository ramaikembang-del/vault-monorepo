# Week 5-8 Execution Plan: T2 Professional Build

**Prerequisites:** Gate 1A PASSED (≥5 sales, Rp 15M+ revenue by end of Week 4)

**Strategic Goal:** Build T2-Professional product tier, expand customer base to multi-outlet operations, establish premium positioning.

**Revenue Target:** Month 2 total Rp 30-40M (T1 recurring + T2 initial sales)

---

## Week 5: T2 Foundation & Multi-Outlet Architecture

**Strategic Focus:** Design and validate T2-Professional requirements with existing customers.

### Monday-Tuesday: Customer Research & Requirements

**Morning: Customer Interviews (3-4 calls)**
- Target: T1 customers who mentioned "planning expansion" or "have 2+ outlets"
- Interview Script:
 - "Since using T1, what's the #1 thing you wish it could do?"
 - "If you had 2-3 outlets, what comparisons would you need?"
 - "What would outlet-level insights be worth to your business?"
- Capture requirements:
 - Outlet comparison priorities (revenue, costs, staff performance)
 - Cross-outlet inventory/menu needs
 - Multi-location reporting frequency

**Afternoon: Competitive Analysis**
- Research existing multi-outlet F&B analytics tools in Indonesia
- Price benchmarking: What do competitors charge for multi-location features?
- Feature gap analysis: What do they lack that we can offer?
- Position T2 at Rp 7-12M range (vs T1's Rp 3.5-6M)

### Wednesday-Thursday: P1 Multi-Outlet Module Design

**P1 Module Specifications (20 metrics):**

**Outlet Performance (10 metrics):**
1. Revenue by Outlet
2. Revenue Growth % by Outlet
3. Cost of Goods Sold by Outlet
4. Gross Margin by Outlet
5. Profit by Outlet
6. Profit Margin % by Outlet
7. Transactions by Outlet
8. Avg Check per Pax by Outlet
9. Revenue per Seat by Outlet
10. Outlet Health Score (composite)

**Cross-Outlet Analytics (10 metrics):**
1. Top Performing Outlet (by revenue)
2. Best Margin Outlet
3. Highest Traffic Outlet
4. Revenue Share % by Outlet
5. Cost Share % by Outlet
6. Outlet Ranking (composite performance)
7. Outlet Growth Ranking (WoW/MoM)
8. Revenue Concentration Risk (HHI)
9. Cross-Outlet Menu Item Performance
10. Staff Performance by Outlet

**Data Model Extensions:**
- New Dimension: `DIM_Outlet`
 - OutletID (PK)
 - OutletName
 - Location
 - OpenDate
 - SquareMeters
 - SeatCount
 - OutletType (Flagship, Satellite, Kiosk)
 - Manager
 - Status (Active, Seasonal, Closed)

- Updated Fact: `FACT_Sales`
 - Add: OutletID (FK to DIM_Outlet)

- New Fact: `FACT_Outlet_Costs`
 - DateKey (FK)
 - OutletID (FK)
 - Rent
 - Utilities
 - MarketingLocal
 - MaintenanceOther

**Excel Template: Outlet-Master.xlsx**
- Sheet 1: Outlet Directory (master list)
- Sheet 2: Monthly Outlet Costs (rent, utilities, local marketing)
- Sheet 3: Outlet-Level Sales Summary (auto-calc from Daily-Sales.xlsx)

### Friday: P4 Customer Mastery Module Design

**P4 Module Specifications (15 metrics):**

**Patronage Ladder (5 metrics):**
1. First-Timer Count (1 visit)
2. Repeater Count (2-3 visits)
3. Regular Count (4-10 visits)
4. VIP Count (11+ visits)
5. Patronage Distribution %

**Customer Lifecycle (5 metrics):**
1. Customer Acquisition Rate (new/week)
2. Customer Retention Rate (repeat %)
3. Customer Churn Count (no visit in 60 days)
4. Churn Rate %
5. VIP Churn Count (lost high-value customers)

**Revenue by Patronage (5 metrics):**
1. Revenue from First-Timers
2. Revenue from Repeaters
3. Revenue from Regulars
4. Revenue from VIPs
5. Revenue at Risk (churned customer LTV)

**Data Model Extensions:**
- New Fact: `FACT_Customer_Visits`
 - CustomerID (FK to DIM_Customer)
 - DateKey (FK)
 - OutletID (FK)
 - VisitNumber (1, 2, 3...)
 - TotalSpent
 - PartySize
 - Source (Walk-in, Reservation, Delivery)

- Enhanced Dimension: `DIM_Customer`
 - Add: FirstVisitDate, LastVisitDate, TotalVisits, TotalLifetimeValue, PatronageTier, IsChurned

**Excel Template: Customer-Log.xlsx**
- Sheet 1: Customer Directory (name, phone, email, first visit)
- Sheet 2: Visit Log (date, customer, party size, total spent)
- Sheet 3: Feedback Log (date, customer, rating, comments)

---

## Week 6: T2 Development Sprint

**Goal:** Build complete T2-Professional dashboard (50-100 metrics, 5-6 tabs).

### Monday-Tuesday: Excel Templates Development

**Day 1: Outlet-Master.xlsx (6-8 hours)**
- Sheet 1: Outlet Directory
 - Columns: OutletID, OutletName, Location, OpenDate, SqM, SeatCount, Manager, Status
 - Dropdowns for OutletType, Status
 - Data validation (OpenDate ≤ TODAY())

- Sheet 2: Monthly Outlet Costs
 - Columns: Month, OutletID, Rent, Utilities, LocalMarketing, Maintenance, OtherCosts, TotalCosts
 - Linked dropdowns (OutletID from Sheet 1)
 - Auto-totals row

- Sheet 3: Outlet Sales Summary
 - Auto-calculated from Daily-Sales.xlsx (SUMIFS by OutletID)
 - Metrics: Total Revenue, Total Transactions, Avg Check, Top Product per outlet

**Day 2: Customer-Log.xlsx (6-8 hours)**
- Sheet 1: Customer Directory
 - Columns: CustomerID, Name, Phone, Email, FirstVisit, LastVisit, TotalVisits, LifetimeValue, PatronageTier
 - Auto-calc: PatronageTier = `IF(TotalVisits>=11,"VIP",IF(TotalVisits>=4,"Regular",IF(TotalVisits>=2,"Repeater","First-Timer")))`

- Sheet 2: Visit Log
 - Columns: VisitDate, CustomerID, OutletID, PartySize, TotalSpent, Source
 - Lookups to Customer Directory (auto-populate name)
 - Running visit counter per customer

- Sheet 3: Feedback Log
 - Columns: Date, CustomerID, Rating (1-5), NPS (0-10), Comments, ResolvedYN
 - Conditional formatting (Rating ≥4 = Green, ≤2 = Red)

### Wednesday: Data Model & Power Query

**Morning: Multi-Outlet Data Model (4 hours)**
- Import Outlet-Master.xlsx -> DIM_Outlet
- Update Sales import to include OutletID
- Create FACT_Outlet_Costs from Sheet 2
- Establish relationships:
 - FACT_Sales[OutletID] -> DIM_Outlet[OutletID]
 - FACT_Outlet_Costs[OutletID] -> DIM_Outlet[OutletID]

**Afternoon: Customer Data Model (4 hours)**
- Import Customer-Log.xlsx -> DIM_Customer and FACT_Customer_Visits
- Power Query transformations:
 - Deduplicate Customer Directory
 - Calculate FirstVisitDate, LastVisitDate (from Visit Log)
 - Aggregate TotalVisits, LifetimeValue per customer
- Establish relationships:
 - FACT_Sales[CustomerID] -> DIM_Customer[CustomerID]
 - FACT_Customer_Visits[CustomerID] -> DIM_Customer[CustomerID]

### Thursday-Friday: DAX Measures & Dashboard Build

**Thursday: DAX Library (30+ new measures)**

**P1 Multi-Outlet Measures:**
```dax
Revenue by Outlet =
CALCULATE(
 [Total Revenue],
 ALLEXCEPT(DIM_Outlet, DIM_Outlet[OutletName])
)

Outlet Health Score =
VAR RevenueScore =
 IF([Revenue WoW %] > 0.1, 40, IF([Revenue WoW %] > 0, 25, 10))
VAR MarginScore =
 IF([Gross Margin %] > 0.65, 30, IF([Gross Margin %] > 0.60, 20, 10))
VAR EfficiencyScore =
 IF([Revenue per Seat] > CALCULATE([Revenue per Seat], ALL(DIM_Outlet)), 30, 15)
RETURN
 RevenueScore + MarginScore + EfficiencyScore

Revenue Concentration Risk (HHI) =
SUMX(
 VALUES(DIM_Outlet[OutletName]),
 VAR OutletShare = DIVIDE([Revenue by Outlet], [Total Revenue], 0)
 RETURN OutletShare * OutletShare
)
// HHI > 0.33 = High concentration (risky), < 0.15 = Well diversified
```

**P4 Customer Mastery Measures:**
```dax
Patronage Tier =
SWITCH(
 TRUE(),
 [Total Visits by Customer] >= 11, "VIP",
 [Total Visits by Customer] >= 4, "Regular",
 [Total Visits by Customer] >= 2, "Repeater",
 "First-Timer"
)

Customer Retention Rate =
VAR CustomersLastPeriod =
 CALCULATE(
 DISTINCTCOUNT(FACT_Customer_Visits[CustomerID]),
 DATESINPERIOD(DIM_Date[Date], MAX(DIM_Date[Date]), -30, DAY)
 )
VAR CustomersThisPeriod =
 DISTINCTCOUNT(FACT_Customer_Visits[CustomerID])
VAR ReturningCustomers =
 CALCULATE(
 DISTINCTCOUNT(FACT_Customer_Visits[CustomerID]),
 FILTER(
 ALL(DIM_Customer),
 DIM_Customer[FirstVisitDate] < MIN(DIM_Date[Date])
 )
 )
RETURN
 DIVIDE(ReturningCustomers, CustomersLastPeriod, 0)

VIP Churn Count =
CALCULATE(
 COUNTROWS(DIM_Customer),
 DIM_Customer[PatronageTier] = "VIP",
 DIM_Customer[IsChurned] = TRUE
)
// IsChurned = TRUE when LastVisitDate > 60 days ago
```

**Friday: Dashboard Tabs 4 & 5**

**Tab 4: Multi-Outlet Command (6-8 visuals)**
- KPI Cards: Total Outlets, Total Revenue, Avg Revenue per Outlet, Top Outlet
- Outlet Performance Table (sortable by Revenue, Margin, Traffic, Health Score)
- Map Visual (if outlet GPS available, else skip)
- Outlet Health Score Matrix (Outlet Name × Health Category)
- Revenue Trend by Outlet (Line chart, multi-line)
- Outlet Ranking Bar Chart (sorted by composite score)

**Tab 5: Customer Loyalty (6-8 visuals)**
- Patronage Ladder Funnel (First-Timer -> Repeater -> Regular -> VIP)
- Customer Acquisition & Retention Line Chart (new vs returning by week)
- VIP Revenue Contribution (Pie chart: VIP vs Others)
- Customer Lifetime Value Distribution (Histogram)
- Churn Alert Table (customers with LastVisit > 45 days, sorted by LTV)
- NPS Score Gauge

---

## Week 7: T2 Testing, Packaging & Pre-Launch

### Monday-Tuesday: Comprehensive QA

**Testing Checklist (70 points):**

**Excel Templates (15 points):**
- [ ] Outlet-Master.xlsx: All dropdowns work, formulas calculate correctly
- [ ] Outlet-Master.xlsx: Sheet 3 auto-summary pulls from Daily-Sales.xlsx
- [ ] Customer-Log.xlsx: PatronageTier auto-updates when TotalVisits changes
- [ ] Customer-Log.xlsx: Running visit counter increments correctly
- [ ] All 6 templates (4 from T1 + 2 new) load without errors

**Data Model (15 points):**
- [ ] DIM_Outlet table loads with all columns
- [ ] FACT_Outlet_Costs links correctly to DIM_Outlet
- [ ] DIM_Customer has correct FirstVisit, LastVisit, TotalVisits
- [ ] FACT_Customer_Visits relationship established
- [ ] Cross-filtering works (clicking outlet filters all visuals)

**DAX Measures (20 points):**
- [ ] All 30 P1 metrics calculate without errors
- [ ] All 15 P4 metrics calculate without errors
- [ ] Outlet Health Score returns 0-100 range
- [ ] HHI calculation returns 0-1 range
- [ ] Customer Retention Rate returns 0-100%
- [ ] Patronage Tier logic matches specification
- [ ] Time intelligence (WoW, MoM) works across all new metrics

**Dashboard Functionality (10 points):**
- [ ] Tab 4 visuals respond to date filters
- [ ] Tab 5 visuals respond to outlet filters (if multi-outlet data)
- [ ] Drill-through works (outlet -> outlet detail page)
- [ ] Tooltips show correct data
- [ ] Performance: Dashboard loads in <5 seconds with 50K rows

**Sample Data Quality (10 points):**
- [ ] 3 outlets with different performance profiles (high/medium/low)
- [ ] 500+ customers across all patronage tiers
- [ ] Realistic visit patterns (weekends > weekdays)
- [ ] Some churned VIPs (for alert testing)
- [ ] NPS distribution realistic (70% promoters, 20% passive, 10% detractors)

### Wednesday: Documentation Suite

**User Guide Update (T2 addendum):**
- Section 6: Multi-Outlet Setup
 - How to add new outlets
 - How to track outlet-specific costs
 - Interpreting outlet health scores
 - Understanding HHI risk metric

- Section 7: Customer Tracking
 - How to log customer visits
 - Managing customer directory
 - Interpreting patronage tiers
 - Using churn alerts

**Video Tutorial 6: Multi-Outlet Setup (8-10 min)**
- Scene 1: Import Outlet-Master.xlsx (1 min)
- Scene 2: Navigate Outlet Performance Table (2 min)
- Scene 3: Interpret Outlet Health Score (2 min)
- Scene 4: Use Outlet Comparison visuals (2 min)
- Scene 5: Add a new outlet (2 min)

**Video Tutorial 7: Customer Loyalty Tracking (8-10 min)**
- Scene 1: Import Customer-Log.xlsx (1 min)
- Scene 2: Navigate Patronage Funnel (2 min)
- Scene 3: Interpret NPS Score (2 min)
- Scene 4: Use Churn Alert Table (2 min)
- Scene 5: Create customer retention campaign (2 min)

### Thursday: Pricing & Positioning

**T2-Professional Pricing Tiers:**

**T2-Standard: Rp 7M**
- All T1-Basic (30 metrics)
- P1 Multi-Outlet (20 metrics)
- P4 Customer Mastery (15 metrics)
- Total: 65 metrics
- 5 dashboard tabs
- 6 Excel templates
- Email support (60 days)
- Target: 2-3 outlet owners

**T2-Plus: Rp 10M**
- All T2-Standard (65 metrics)
- Add P2 Menu Optimization (15 metrics)
- Add P3 Workforce Analytics (15 metrics)
- Total: 95 metrics
- 7 dashboard tabs
- 8 Excel templates
- Email + WhatsApp support (90 days)
- 1 hour onboarding call
- Target: 3-5 outlet owners with >50 staff

**T2-Premium: Rp 12M**
- All T2-Plus (95 metrics)
- Custom branding (logo, color scheme)
- 2-hour personalized training
- Priority support (24h response)
- Quarterly performance review call
- Target: 5+ outlet chains, premium positioning

**Value Proposition Refinement:**
- T1 -> T2 upgrade value: "Managing 3 outlets manually? You're losing Rp 5-10M/month in hidden inefficiencies. T2 finds it."
- Cost justification: "If this dashboard helps you improve 1 outlet's margin by 3%, it pays for itself in 1 month."

### Friday: Sales Assets for T2

**T2 Demo Script (15-20 min demo):**
1. **Hook (2 min):** "Let me show you how to spot which of your 3 outlets is bleeding money..."
2. **Problem (3 min):** Show outlet performance table with variance
3. **Discovery (5 min):** Walk through outlet health scores, HHI risk
4. **Customer Wow (3 min):** Show VIP churn alert, patronage funnel
5. **Close (2 min):** "This is Rp 7-10M. Your weakest outlet is probably losing you Rp 2-3M/month. Can you afford NOT to see this?"

**T2 One-Pager (design in Canva, 1 page):**
- Headline: "Scale from 1 to 10 Outlets Without Losing Control"
- Pain points: "Can't compare outlet performance," "Don't know which customers are leaving"
- Solution: Visual screenshots of Tab 4 & 5
- Pricing table: T2-Standard, T2-Plus, T2-Premium
- CTA: "Book a demo -> [Calendly link]"

**Email Sequence for T1 -> T2 Upsell:**
- Day 0: "Quick question: Planning to open a 2nd location?"
- Day 3: "Case study: How [Customer X] used T2 to optimize 3 outlets"
- Day 7: "Special upgrade offer: T1 -> T2 for Rp 5M (save Rp 2M)"
- Day 14: "Last call: Upgrade offer expires in 3 days"

---

## Week 8: T2 Launch & T1 Optimization

### Monday: T2 Soft Launch

**Morning: Deploy T2-Professional**
- Upload T2 dashboard files to Google Drive
- Create separate folder structure:
 - `/T2-Professional-Standard/`
 - `/T2-Professional-Plus/`
 - `/T2-Professional-Premium/`
- Update website/landing page with T2 pricing
- Prepare Gumroad/payment links for T2 tiers

**Afternoon: Customer Outreach (T1 -> T2 upsell)**
- Identify T1 customers who mentioned expansion plans (from interview notes)
- Send personalized email: "Hi [Name], you mentioned planning a 2nd outlet. I just launched T2-Professional which tracks multi-outlet performance. Want a 15-min walkthrough?"
- Book 3-5 demo calls for Week 8

### Tuesday-Friday: Parallel Sales Activities

**Daily Routine:**
- **9:00-9:30am:** Support triage (both T1 and T2)
- **9:30-11:00am:** T2 demos (2-3 outlet owners, pre-qualified)
- **11:00-12:00pm:** T1 demos (first-time buyers, single outlet)
- **2:00-3:30pm:** Lead generation:
 - LinkedIn: Target "Restaurant Manager" + "Jakarta" + "2+ outlets"
 - Facebook Groups: F&B Entrepreneurs Indonesia, Restoran & Cafe Owners
 - WhatsApp outreach to existing network
- **3:30-5:00pm:** Follow-ups, proposal writing, content creation

**Content Marketing (1-2 pieces this week):**
- **Blog Post:** "How to Spot Which of Your 3 Outlets is Losing Money (Data-Driven Guide)"
 - Include screenshots from T2 dashboard
 - Embed demo video
 - CTA: "Get T2-Professional"

- **YouTube Video:** "Multi-Outlet Restaurant Owner? Stop Guessing, Start Measuring"
 - 5-min video showing outlet comparison table
 - Real use case walkthrough
 - CTA: Book demo

### Mid-Week: T1 Product Refinement

**Wednesday: Analyze T1 Customer Feedback**
- Review support tickets from Week 2-7 (30-40 tickets total)
- Categorize issues:
 - P0 Bugs (critical fixes needed)
 - P1 Usability issues (improve UX)
 - P2 Feature requests (backlog)
 - P3 How-to questions (improve docs)

**Common Issues & Fixes:**
| Issue | Frequency | Fix | Priority |
|-------|-----------|-----|----------|
| "Dashboard won't refresh" | 8 tickets | Add troubleshooting guide | P1 |
| "Don't understand Performance Score" | 6 tickets | Simplify tooltip, add video | P1 |
| "Excel formulas broken" | 4 tickets | Lock formula cells | P0 |
| "Want expense tracking" | 12 tickets | Add to T1-Plus roadmap | P2 |

**Thursday: T1 Version 1.1 Updates**
- Fix P0 bugs (Excel formula protection)
- Improve P1 usability (clearer tooltips, better error messages)
- Update documentation with FAQ section
- Re-record Video Tutorial 2 (clearer Performance Score explanation)

**Friday: T1 Customer Success Check-ins**
- Email to all T1 customers (15-20 people): "How's the dashboard working for you? Need any help?"
- Offer 15-min free support call (upsell opportunity to T1-Plus or T2)
- Collect testimonials from satisfied customers (NPS ≥9)

---

## Week 8 End: Gate 1B Assessment

**Target Outcomes by End of Week 8:**
- **Revenue:** Rp 30-40M total (T1 sales + T2 initial sales)
- **Customer Count:** 25-35 total (20-25 T1, 5-10 T2)
- **Product:** T2-Professional live, T1 v1.1 stable
- **Ops:** Support process running smoothly, <24h response time

**Decision Framework:**

### PASS (≥Rp 35M, ≥8 T2 sales, <5 open bugs)
 -> **Proceed to Month 3: T3 Strategic Build**
- Week 9-12: Develop T3-Enterprise (S1-S4 modules)
- Target: C-level executives, 5+ outlet chains
- Pricing: Rp 15-20M

### PARTIAL (Rp 25-35M, 3-7 T2 sales, <10 open bugs)
 -> **Extend T2 sales cycle, refine messaging**
- Week 9-10: Double down on T2 marketing (paid ads, partnerships)
- Week 11-12: Build 1-2 more T2 modules (P2 or P3) to strengthen offer
- Delay T3 build until Month 4

### FAIL (<Rp 25M, <3 T2 sales, >10 open bugs)
 -> **Pivot: Focus on T1 market dominance**
- Stop T2/T3 development
- Improve T1 product quality (fix all bugs)
- Scale T1 marketing aggressively (target 50+ sales by Month 3)
- Re-evaluate multi-outlet market (maybe it's too early)

---

## Week 8 Deliverables Summary

**Product Assets:**
- T2-Professional dashboard (3 tiers: Standard/Plus/Premium)
- 2 new Excel templates (Outlet-Master, Customer-Log)
- 45 new DAX measures (P1 + P4 modules)
- 2 new dashboard tabs (Multi-Outlet, Customer Loyalty)
- Updated documentation (User Guide, 2 new videos)
- T1 v1.1 (bug fixes, improved UX)

**Sales & Marketing:**
- T2 pricing & positioning finalized
- T2 demo script & one-pager
- T1 -> T2 upsell email sequence
- 1 blog post, 1 YouTube video
- 10-15 T2 demos completed

**Operations:**
- Support process stable (<24h response)
- Customer success check-ins completed
- 5-10 testimonials collected

---

## Next Steps (Conditional on Gate 1B)

**If PASS -> Week 9-12 Preview:**
- Week 9: T3-Enterprise design & validation (S1 Executive Intelligence module)
- Week 10: S2-S4 module development (Advanced Menu, Workforce, Customer)
- Week 11: T3 dashboard build & QA
- Week 12: T3 launch + Month 3 retrospective

**If PARTIAL -> Alternative path documented in contingency plans**

**If FAIL -> Pivot strategy documented, focus on T1 scale**

---

## Related

- **[[products/01-power-bi-template/01-power-bi-template|Power BI Template Product]]** - Product overview
- **[[../tiers/02-tier-2-strategy|Tier 2 Product Strategy]]** - T2 Professional strategy
- **[[05-week-9-12-execution|Week 9-12 Execution Plan]]** - Next phase execution
- **[[products/01-power-bi-template/specifications/technical/02-database-schema|Database Schema]]** - T2 Professional data model
- **[[06-month-4-6-scale|Month 4-6 Scale Plan]]** - Scaling strategy
