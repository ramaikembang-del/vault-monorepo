# Product 01: Week 1 Execution Plan (Days 1-10)
**Foundation Build, Beta Testing & Launch**

**Timeline:** Days 1-10 (Week 1 of Sprint 1)
**Prerequisites:** Week -1 legal/infrastructure complete, Week 0 pre-sale validation passed

---

## PRE-WORK SUMMARY

### **Week -1: Legal & Infrastructure** (Must Complete First)

**Legal Foundation:**
- [ ] Terms of Service, Privacy Policy, Refund Policy (Indonesian compliant)
- [ ] SLA definitions by tier (T1: 48h email, T2: 24h+video, T3: 4h WhatsApp)
- [ ] License agreements (single vs enterprise)

**Payment Setup:**
- [ ] Midtrans account approved (KYB complete)
- [ ] Payment links for all tiers (Rp 3.5M-15M range)
- [ ] Test transactions verified

**Infrastructure:**
- [ ] Google Drive structure (product folders, customer delivery system)
- [ ] Email templates (purchase, delivery, support, check-ins)
- [ ] CRM/tracking sheets (sales pipeline, customer database)

---

### **Week 0: Pre-Sale Validation** (DO NOT SKIP)

**Validation Assets:**
- [ ] One-pager with mockups and early-access pricing
- [ ] WhatsApp/LinkedIn message templates
- [ ] Objection handling scripts
- [ ] Landing page (optional)

**Outreach & Conversations:**
- [ ] Target: 15-20 validation conversations (warm network + cold outreach)
- [ ] Demo mockups to F&B owners
- [ ] Collect verbal commits and deposits
- [ ] Track objections and feature requests

**Decision Gate:**
- **PASS:** 3+ verbal commits OR 2+ deposits -> Proceed to build
- [!] **PARTIAL:** 2 commits, positive feedback -> Adjust pricing, extend 1 week
- Œ **FAIL:** <2 commits, lukewarm feedback -> Pivot or pause

**Output:** 2-5 committed customers, validated pricing, confirmed feature priorities

---

## DAY 1: FOUNDATION & EXCEL TEMPLATES

**Focus:** Set up project structure, create Excel template ecosystem

### **Project Setup**

**Git & Folder Structure:**
- [ ] Initialize Git repo for version control
- [ ] Create folder hierarchy:
 - `/Power-BI/` (dashboard files by tier)
 - `/Excel-Templates/` (4 core templates)
 - `/Sample-Data/` (simulation scripts, CSVs)
 - `/Documentation/` (guides, videos)
 - `/Packaging/` (delivery-ready packages)

**Schema Documentation:**
- [ ] Define data model (6 tables: Sales, Products, Staff, Customers, Dates, Outlets)
- [ ] Document relationships (star schema)
- [ ] Specify data types and validation rules

---

### **Excel Template Development**

**Create 4 Core Templates:**

**1. Daily-Sales.xlsx** (Transaction logging)
- Sheet 1: Product Master (ID, Name, Category, Cost, Price)
- Sheet 2: Sales Entry (TransactionID auto-gen, Date/Time, Product dropdown, Quantity, auto-calc Total)
- Validation: Date ‰¤ TODAY(), Quantity > 0, Product from master list
- Formatting: Conditional (weekends highlighted, high-value transactions flagged)

**2. Food-Cost.xlsx** (Recipe & margin tracking)
- Sheet 1: Ingredients (ID, Name, Unit, Cost/Unit)
- Sheet 2: Recipe Cards (Dish, Ingredient list, Portions, Total Cost, Selling Price, Margin %)
- Traffic lights: Green >65% margin, Yellow 60-65%, Red <60%

**3. Staff-Log.xlsx** (Performance & attendance)
- Sheet 1: Staff Master (ID, Name, Role, Hourly Rate)
- Sheet 2: Timesheet (ClockIn, ClockOut, Hours, Sales during shift, Upsells)
- Sheet 3: Leaderboard (auto-rank by performance score)
- Gamification: Gold/Silver/Bronze tiers based on composite score

**4. Outlet-Summary.xlsx** (Multi-outlet consolidation - T2/T3 only)
- Sheet 1: Outlet List (OutletID, Name, City, Seats, Manager)
- Sheet 2: Daily Rollup (auto-import from each outlet's Daily-Sales)

**Template Features:**
- [ ] Mobile-friendly (dropdowns work on phone)
- [ ] Data validation (prevent bad entries)
- [ ] Auto-calculations (minimize manual work)
- [ ] Consistent naming (matches Power BI schema exactly)

**Testing:**
- [ ] Fill 1 week of sample data manually
- [ ] Verify formulas calculate correctly
- [ ] Export to CSV (test Power BI import later)

---

### **Day 1 Deliverables**

- [ ] Git repo initialized with folder structure
- [ ] Schema documented (6 tables, relationships defined)
- [ ] 4 Excel templates complete and formula-tested
- [ ] Sample data (1 week) populated manually
- [ ] Templates tested on mobile (Android/iOS dropdowns work)

---

## DAY 2-3: DATA SIMULATION & POWER BI MODEL

**Focus:** Generate realistic data, build Power BI foundation

### **Day 2: Python Data Simulation**

**Generate Realistic Indonesian F&B Data:**
- [ ] 90 days of transactions (Nov-Jan period)
- [ ] 30 products (Kopi, Nasi Goreng, Sate, etc. with Indonesian pricing)
- [ ] 10 staff members (Indonesian names, varied performance)
- [ ] 100 unique customers (patronage patterns: 1-time to VIPs)
- [ ] Patterns: Weekend spikes, peak hours (11-13, 18-20), Monday slumps

**Script Features:**
- [ ] Randomization with business logic (lunch rush = more food, evening = more coffee)
- [ ] Staff performance multipliers (high performers = 20% more sales)
- [ ] Customer patronage ladder (1-timer, Casual, Regular, VIP based on visit count)
- [ ] Product mix (60% beverages, 30% mains, 10% desserts)

**Output:**
- [ ] 6 CSVs ready for Power BI import (2,000-3,000 transaction rows)

---

### **Day 3: Power BI Data Model**

**Import & Relationships:**
- [ ] Import 6 CSVs into Power Query
- [ ] Clean data (trim spaces, fix data types)
- [ ] Create relationships:
 - Sales -> Products (many-to-one on ProductID)
 - Sales -> Staff (many-to-one on StaffName)
 - Sales -> Customers (many-to-one on CustomerID)
 - Sales -> Dates (many-to-one on Date)
 - Sales -> Outlets (many-to-one on OutletID, T2/T3 only)

**Calendar Table:**
- [ ] DAX: `Dates = CALENDAR(MIN(Sales[Date]), MAX(Sales[Date]))`
- [ ] Add columns: Year, Month, MonthName, WeekOfYear, DayOfWeek, IsWeekend, FiscalQuarter

**Parameterization:**
- [ ] Create parameters for targets (e.g., Target Revenue = Rp 200M/month)
- [ ] Create what-if parameters (e.g., Target Margin % = 65%)

**Testing:**
- [ ] Verify row counts match CSVs
- [ ] Test relationships (filter Products -> See sales update)
- [ ] Check calendar table (no gaps in dates)

---

## DAY 4-6: DAX MEASURES & DASHBOARD VISUALS

**Focus:** Build 30 core metrics, design 3 dashboard tabs

### **Day 4: DAX Development (Base Modules B1-B3)**

**B1: Revenue Core (10 Metrics)**
1. Total Revenue, Transactions, Avg Transaction
2. Revenue WoW/MoM %, Transactions WoW %
3. Health Score (composite: 0-100 based on revenue trend + margin + traffic)
4. Revenue YTD, Revenue vs Same Period Last Year
5. Avg Items per Transaction

**B2: Menu Essentials (10 Metrics)**
1. Gross Margin %, Gross Profit
2. Food Cost %, Beverage Cost %
3. Top 5 Products (by revenue), Bottom 5 Products
4. Product Mix % (Beverage vs Food vs Dessert)
5. COGS (Cost of Goods Sold), Waste % (estimated from variance)

**B3: Staff & Customer Basics (10 Metrics)**
1. Sales per Staff, Staff Utilization %
2. New Customers (first-time buyers), Returning Customers
3. Customer Patronage Mix (1-timer/Casual/Regular/VIP %)
4. Avg Patronage (visits per customer)
5. Staff Performance Score (sales/hour + upsell count)

**Organization:**
- [ ] Display folders by module (B1, B2, B3)
- [ ] Consistent formatting (Rupiah, percentages, decimals)
- [ ] Comments in DAX (explain complex logic)

---

### **Day 5: Dashboard Tab 1 - Command Center**

**Layout:**
- **Top Row:** 4 KPI cards (Revenue, Transactions, Health Score, Gross Margin %)
- **Middle Row:** 2 charts (Revenue trend line, Product mix donut)
- **Bottom Row:** 2 tables (Top 5 products, Recent transactions)

**Design System:**
- [ ] Colors: Brand primary (green/blue), red for alerts, gray for neutral
- [ ] Fonts: Segoe UI, 10-14pt, bold for headers
- [ ] Spacing: 10px padding between visuals

**Interactivity:**
- [ ] Date slicer (last 7/30/90 days)
- [ ] Tooltips (hover for detailed breakdowns)
- [ ] Drill-through (click product -> See product detail page)

**Mobile Layout:**
- [ ] Single column stack (KPIs -> Chart -> Table)
- [ ] Touch-friendly buttons (min 44px tap targets)

---

### **Day 6: Tabs 2 & 3 - Wolf Pack & Loyalty Loop**

**Tab 2: Wolf Pack (Staff Performance)**
- Staff leaderboard (ranked by performance score)
- Sales per hour bar chart
- Upsell count by staff
- Performance tier badges (Gold/Silver/Bronze)

**Tab 3: Loyalty Loop (Customer Insights)**
- Patronage ladder visual (1-timer -> Casual -> Regular -> VIP)
- Customer acquisition trend (new customers per week)
- Retention rate (% customers who return within 30 days)
- VIP customer table (top 10 by lifetime spend)

**Testing:**
- [ ] Click every slicer (verify filters apply correctly)
- [ ] Test drill-through (product detail page opens)
- [ ] Check calculations (manually verify 3-5 metrics against raw data)

---

## DAY 7: GOOGLE SHEETS CONVERSION & MOBILE

**Focus:** Create Google Sheets versions of Excel templates

### **Conversion Workflow**

**For Each Template (Daily-Sales, Food-Cost, Staff-Log, Outlet-Summary):**
- [ ] Upload Excel to Google Drive -> Open with Sheets -> "Make a copy"
- [ ] Test formulas (some Excel functions differ in Sheets):
 - Replace `IF(ISNA())` with `IFERROR()`
 - Verify `VLOOKUP()` works identically
 - Check date functions (Excel serial vs Sheets)
- [ ] Test data validation (dropdowns work on Sheets)
- [ ] Mobile optimization:
 - Freeze header rows (keep visible when scrolling)
 - Adjust column widths (readable on phone)
 - Test on Android + iOS (open in Sheets app, fill 5 rows)

**Create Make-a-Copy Links:**
- [ ] Share settings: "Anyone with link can VIEW"
- [ ] Generate template links (user clicks -> Creates their own copy)
- [ ] Test incognito (verify copy works without Google login)

---

### **Day 7 Deliverables**

- [ ] 4 Google Sheets templates created and tested
- [ ] Formulas verified (Excel -> Sheets compatibility)
- [ ] Mobile tested on Android and iOS
- [ ] Make-a-copy links working (tested incognito)
- [ ] Both Excel and Sheets versions in package

---

## DAY 8: DOCUMENTATION & VIDEOS

**Focus:** Setup guides, video tutorials, FAQ

### **Written Documentation**

**Setup Guide (20-30 pages):**
1. **Introduction** (What's included, system requirements)
2. **Quick Start** (30-minute setup walkthrough)
3. **Excel Templates** (How to fill each template, screenshot examples)
4. **Power BI Import** (Data source setup, refresh instructions)
5. **Dashboard Tour** (Tab-by-tab feature explanation)
6. **Troubleshooting** (10 common issues + solutions)
7. **Support** (How to contact, SLA by tier)

**FAQ Document:**
- [ ] 20 questions based on pre-sale validation feedback:
 - "Can I use on Mac?" -> Power BI Desktop Windows-only, alternatives
 - "How to add new products?" -> Edit Product_Master sheet
 - "What if POS format changes?" -> Power Query transformation guide

---

### **Video Tutorials (5 Videos, Bahasa Indonesia)**

**Record 5 Videos (2-3 min each):**
1. **Product Overview** (What's included, why Excel templates matter)
2. **Daily-Sales Walkthrough** (How to fill, dropdowns demo, export to CSV)
3. **Food-Cost Calculator** (Recipe cards, traffic light system)
4. **Staff Leaderboard** (Performance tracking, gamification features)
5. **Power BI Import** (One-click refresh, 30-second workflow)

**Production:**
- [ ] Screen recording (OBS Studio or Loom)
- [ ] Clear audio (Bahasa Indonesia, slow pace)
- [ ] On-screen text (highlight key steps)
- [ ] Upload to YouTube (unlisted links)
- [ ] Test all links (no permission errors)

---

### **Day 8 Deliverables**

- [ ] Setup Guide PDF complete (20-30 pages, screenshots included)
- [ ] FAQ document (20 Q&A pairs)
- [ ] 5 video tutorials recorded and uploaded
- [ ] All video links tested (working, no permissions issues)
- [ ] Documentation added to package folders

---

## DAY 9: PACKAGING, QA & BETA TESTING

**Focus:** Final quality checks, package for delivery, beta test

### **Quality Assurance (50-Point Checklist)**

**Excel Templates (15 checks):**
- [ ] All formulas calculate correctly
- [ ] Dropdowns work (desktop + mobile)
- [ ] Data validation prevents bad input
- [ ] Sample data included (1 week)
- [ ] Instructions on Sheet 0

**Power BI Dashboard (20 checks):**
- [ ] All 30 metrics display correctly
- [ ] No errors in DAX (check formula bar)
- [ ] Slicers filter all visuals
- [ ] Drill-through works (product detail page)
- [ ] Mobile layout tested (phone orientation)
- [ ] Performance acceptable (<3 sec load time)

**Documentation (10 checks):**
- [ ] Setup Guide PDF opens correctly
- [ ] All screenshots visible (not broken)
- [ ] Video links work (all 5 videos)
- [ ] FAQ addresses top objections
- [ ] Bahasa Indonesia grammar correct

**Integration (5 checks):**
- [ ] CSV export from Excel -> Import to Power BI works
- [ ] Sample data in Excel matches Power BI output
- [ ] Refresh works (update Excel, refresh dashboard, see changes)
- [ ] Google Sheets version imports to Power BI (test CSV export)

---

### **Packaging for Delivery**

**Create 3 Tier Packages:**

**T1-Basic Package (Rp 3.5M):**
- [ ] `FNB-Dashboard-T1-Basic.pbix` (30 metrics, 3 base modules)
- [ ] 4 Excel templates (Daily-Sales, Food-Cost, Staff-Log, Outlet-Summary)
- [ ] 4 Google Sheets templates (make-a-copy links in README)
- [ ] Sample data (CSVs for testing)
- [ ] Setup Guide PDF
- [ ] 5 video tutorial links (in README)
- [ ] FAQ PDF

**T1-Standard/Plus Packages:**
- [ ] Same as T1-Basic + 1-2 optional modules (built in Week 3)
- [ ] Module-specific documentation

**T2/T3 Packages:**
- [ ] Built in Week 5-8 (not Day 1-10 scope)

**Delivery Method:**
- [ ] Upload to Google Drive folder structure
- [ ] Create shareable link (anyone with link can VIEW)
- [ ] Test link incognito (verify download works)

---

### **Beta Testing**

**Send to 2-3 Beta Customers:**
- [ ] Email: "Your beta version is ready! Here's the link: [Google Drive]"
- [ ] Request: "Please test setup (30 min) and send feedback within 48h"
- [ ] Checklist for beta testers:
 - [ ] Download successful
 - [ ] Power BI file opens (no errors)
 - [ ] Excel templates usable
 - [ ] Setup Guide clear
 - [ ] Videos helpful
 - [ ] Found any bugs? (describe)
 - [ ] Would you recommend? (NPS 0-10)

**Track Feedback:**
- [ ] Google Form: "Beta Tester Feedback Survey"
- [ ] Follow up with WhatsApp/call if no response in 24h

---

### **Day 9 Deliverables**

- [ ] 50-point QA checklist 100% complete
- [ ] T1-Basic package finalized (all files in Google Drive)
- [ ] Delivery links created and tested
- [ ] Beta version sent to 2-3 customers
- [ ] Feedback collection system ready (Google Form)

---

## DAY 10: LAUNCH DAY

**Focus:** Public announcement, sales activation, operations readiness

### **Launch Sequence**

**Morning (9am-12pm): Announcement Blitz**

**Email Launch (9am):**
- [ ] Send to waitlist (from Week 0 validation)
- [ ] Subject: " It's Here! Your F&B Dashboard is Live"
- [ ] Body: Problem -> Solution -> Features -> Pricing -> CTA ("Get It Now - Rp 3.5M")
- [ ] Include screenshots (3 dashboard tabs)
- [ ] Link to payment page (Midtrans) + demo booking (Calendly)

**Social Media Posts (9:30am):**
- [ ] LinkedIn: Long-form post (product story, problem solved, launch announcement)
- [ ] Facebook Groups: Value-first post ("I built this to solve [pain point], now available")
- [ ] Instagram: Carousel (5 slides: Problem -> Solution -> Features -> Pricing -> CTA)
- [ ] WhatsApp Status: "Official launch today! DM for details"

**Personal Outreach (10am-12pm):**
- [ ] WhatsApp message to warm network (20-30 contacts):
 - "Hey [Name]! Remember the dashboard I mentioned? It's live: [link]"
 - Personalize: "Given [their business], I think T1-Standard would fit you"
- [ ] LinkedIn DMs to engaged connections

---

**Afternoon (1pm-5pm): Demo Calls & Sales**

**Demo Call Schedule:**
- [ ] Pre-booked calls (from waitlist follow-ups)
- [ ] Time slots: 1pm, 2:30pm, 4pm (30 min each)
- [ ] Use sales playbook scripts (objection handling, closing)

**Sales Workflow:**
- [ ] Demo completed -> Send proposal within 1 hour
- [ ] Proposal accepted -> Send payment link (Midtrans)
- [ ] Payment confirmed -> Deliver within 2 hours (Google Drive link)
- [ ] Add to customer database (CRM tracking sheet)

**Support Readiness:**
- [ ] Monitor email for first support requests
- [ ] Response time: <2 hours on launch day (exceed expectations)
- [ ] Common Day 1 issues: Download problems, Power BI install confusion

---

**Evening (5pm-8pm): Monitoring & Adjustments**

**Track Launch Metrics:**
- [ ] Email open rate (target: 40%+)
- [ ] Landing page visits (track UTM parameters)
- [ ] Demo bookings (target: 3-5 on Day 1)
- [ ] Sales (target: 1-2 on launch day, 5+ by end of Week 2)

**Quick Adjustments:**
- [ ] If email open rate low (<20%): Resend with better subject line
- [ ] If no demo bookings: Post in more Facebook groups
- [ ] If demo -> sale conversion low: Revise pricing or add payment plan

**Celebrate Small Wins:**
- [ ] First sale of the day -> Screenshot and share on social (with permission)
- [ ] First testimonial -> Post immediately

---

### **Day 10 Deliverables**

- [ ] Launch emails sent (waitlist + warm network)
- [ ] Social media posts published (LinkedIn, Facebook, Instagram)
- [ ] 2-3 demo calls completed
- [ ] 1-2 sales closed (or strong pipeline for Week 2)
- [ ] All Day 1 support requests answered
- [ ] Launch metrics tracked (opens, clicks, bookings, sales)

---

## END OF DAY 10: WEEK 1 RETROSPECTIVE

**What You've Built:**
- 30-metric Power BI dashboard (T1-Basic complete)
- 4 Excel + Google Sheets templates
- Sample data simulation (90 days, realistic patterns)
- Complete documentation (Setup Guide, FAQ, 5 videos)
- Delivery system (Google Drive, payment gateway, CRM)
- First customers onboarded (1-5 sales)

**Metrics to Review:**
- Launch day sales: ___ (Target: 1-2)
- Demo bookings: ___ (Target: 5+ for Week 2)
- Email engagement: ___% open rate (Target: 35%+)
- Support tickets: ___ (should be low with good documentation)

**Week 2 Preview:**
- Focus: Hit Gate 1A (5+ total sales, Rp 15M+ revenue by end of Week 2)
- Daily activities: Lead generation, demo calls, customer support
- Build T1-Standard/Plus modules if Gate 1A passed
- Refine marketing messaging based on objections

---

## GATE 1A DECISION FRAMEWORK

**Evaluated: Friday of Week 2**

| Result | Criteria | Action |
|--------|----------|--------|
| **PASS** | 5+ sales, Rp 15M+ revenue | -> Proceed to Week 3-4 (T1-Standard/Plus modules) |
| [!] **PARTIAL** | 3-4 sales, Rp 10-14M revenue | -> Extend 1 week, intensify sales, re-evaluate |
| Œ **FAIL** | 0-2 sales, <Rp 10M revenue | -> Pause module builds, analyze why, pivot pricing/product |

**Success Indicators (Week 1 Signals):**
- Demo booking rate (landing page -> demo): >5%
- Demo show rate: >70% (attendees vs no-shows)
- Demo -> sale conversion: >30%
- Customer feedback: "This solves my problem" (not "interesting but...")

---

## KEY LEARNINGS & TIPS

**Excel Templates = Competitive Moat:**
- Highlight in every demo ("You don't spend 8 hours on CSV format")
- Show mobile demo (fill on phone, refresh dashboard)
- Pre-populated sample data = instant "aha moment"

**Speed to Market:**
- Day 1-10 is aggressive but achievable (AI-assisted)
- Don't over-engineer Tab 1 visuals (ship functional, iterate later)
- Beta feedback will reveal priorities (fix those in Week 2)

**Sales Fundamentals:**
- Demos convert 10x better than "cold" landing pages
- Indonesian market: WhatsApp > Email for follow-ups
- Payment plans reduce friction ("3x Rp 2.5M" vs "Rp 7M upfront")

**Documentation ROI:**
- Good setup guide = 50% fewer support tickets
- Video tutorials = 5x higher completion rate than written guides
- FAQ addresses objections preemptively (include in sales emails)

---

## NEXT STEPS

After Day 10, you transition to:
1. **Week 2:** Daily operations (sales, support, iteration) -> Hit Gate 1A
2. **Week 3-4:** Build T1-Standard/Plus modules (if Gate 1A passed)
3. **Week 5-8:** T2 Professional multi-outlet features (if Month 1 successful)

**The goal of Day 1-10 is not perfection - it's shipping a validated, functional product that solves a real problem.**

---

**Related Documents:**
- [[01-development-roadmap|Development Roadmap]] - High-level strategic view (WHAT to build)
- [[03-week-2-4-execution|Week 2-4 Execution Plan]] - Post-launch operations
- [[products/01-power-bi-template/sales/strategy/04-pre-sale-validation-playbook|Pre-Sale Validation Playbook]] - Week 0 scripts
- [[products/01-power-bi-template/operations/06-gate-tracking|Gate Tracking Dashboard]] - Gate 1A criteria
- [[products/01-power-bi-template/sales/strategy/01-sales-playbook|Sales Playbook]] - Demo scripts, objection handling

**Last Updated:** 2026-01-04
**Status:** Ready to Execute (after Week -1 and Week 0 complete)

