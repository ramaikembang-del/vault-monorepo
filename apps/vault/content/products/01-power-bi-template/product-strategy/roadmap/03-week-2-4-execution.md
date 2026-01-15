# Product 01: Week 2-4 Execution Plan
**Post-Launch Operations, Module Expansion & Scaling**

**Timeline:** Week 2-4 (Days 11-28)
**Prerequisites:** Week 1 complete (T1-Basic launched, first customers onboarded)

---

## WEEK 2: POST-LAUNCH OPERATIONS & CUSTOMER SUCCESS

**Focus:** Support first customers, continue sales, gather feedback, hit Gate 1A

**Key Objectives:**
- Support initial customers (onboarding, troubleshooting)
- Continue sales & marketing (reach 5+ sales for Gate 1A)
- Gather product feedback for iteration
- Fix bugs discovered post-launch
- Establish daily operational rhythm

---

### **Sales & Marketing (Daily Activities)**

**Daily Lead Generation (2-3 hours/day):**
- **Morning (9-11am):**
 - Send 5-10 personalized LinkedIn connection requests to F&B owners
 - Post in 1-2 Facebook groups (value-first, not spam)
 - Update WhatsApp status with customer win/testimonial

- **Afternoon (2-4pm):**
 - Follow up with demo attendees from previous days
 - Respond to social media comments/DMs
 - Send email to warm leads who haven't purchased

**Demo Call Schedule:**
- Target: 2-3 demo calls per day
- Time slots: 10am, 2pm, 4pm (30 min each)
- Use Calendly for booking
- Preparation: 5 min research on their business before call

**Conversion Activities:**
- Send proposals within 2 hours of demo call
- Follow-up sequence: Day 2, Day 4, Day 7 (then move to "not interested" list)
- Offer payment plans if price objection ("3x Rp 2.5M instead of Rp 7M upfront")

**Gate 1A Tracking:**
- Daily update to tracking sheet (sales, demos, leads)
- Target by end of Week 2: **5+ total sales**, **Rp 15M+ revenue**
- If not on track by Wed (Day 13): Pivot pricing or messaging

---

### **Customer Support & Success**

**Onboarding Workflow (Per New Customer):**

**Day 0 (Purchase Day):**
- Send confirmation email with Google Drive link
- Add to customer database
- Tag in CRM: "Onboarding - Day 0"

**Day 2 (48h Check-in):**
- Email: "Hi [Name], how's setup going? Any issues?"
- If no response: WhatsApp follow-up (T2/T3 only)
- Common issues to proactively address:
 - Power BI Desktop installation confusion
 - Data source path mapping errors
 - Excel template dropdown not working

**Day 7 (Week 1 Check-in):**
- Email: "Quick check-in - are you using the dashboard daily?"
- Ask for feedback: "What's working? What's confusing?"
- Identify upsell opportunity: "Interested in multi-outlet features (T2)?"

**Day 30 (End of Support Period):**
- NPS survey: "How likely would you recommend this? (0-10)"
- Offer renewal/extension: "Rp 500K for 3 more months of support"
- Request testimonial if NPS ‰¥ 9

**Support Ticket Triage:**
- Response time target: **< 24 hours** for T1, **< 12 hours** for T2, **< 4 hours** for T3
- Categorize tickets:
 - **P0 (Critical):** Dashboard won't open, data import fails completely -> Fix within 4h
 - **P1 (High):** Specific metric not calculating, visual broken -> Fix within 24h
 - **P2 (Medium):** Feature request, how-to question -> Respond within 48h
 - **P3 (Low):** Nice-to-have, cosmetic issue -> Backlog

**Common Support Issues & Solutions:**

| Issue | Frequency (Expected) | Solution Template |
|-------|---------------------|-------------------|
| "Power BI won't open .pbix file" | High (30%) | "Install Power BI Desktop from aka.ms/pbidesktop. Requires Windows 10+. [Video link]" |
| "Data source error" | High (40%) | "Edit Queries -> Source -> Update file path to your CSV location. [Screenshot guide]" |
| "Numbers don't match my POS" | Medium (20%) | "Check column mapping. ProductName in CSV must match ProductName in Excel template." |
| "How to add new products?" | Medium (15%) | "Edit Product_Master sheet in Daily-Sales.xlsx. Add row, save, refresh Power BI." |
| "Can I use on Mac?" | Low (5%) | "Power BI Desktop is Windows-only. Options: Parallels/VMware or Power BI Service (Microsoft 365 license)." |

---

### **Product Iteration & Bug Fixes**

**Feedback Collection System:**
- Create Google Form: "Product Feedback Survey"
 - What features do you use most? (checkboxes)
 - What's confusing? (open text)
 - What's missing? (open text)
 - Rate setup difficulty (1-10 scale)
 - Would you recommend? (NPS 0-10)

**Bug Tracking:**
- Use GitHub Issues or simple Google Sheet:
 - Columns: Bug Description | Severity (P0-P3) | Reported By | Status | Resolution
- Prioritize fixes: P0 (immediately), P1 (this week), P2 (next sprint)

**Version Updates:**
- If critical bugs found: Release v1.0.1 within 48 hours
- If minor bugs: Bundle into v1.1.0 by end of Week 2
- Notify customers: "Update available - download new version from Google Drive"

**Changelog Template:**
```markdown
## [1.0.1] - 2026-01-XX (Bug Fixes)

### Fixed
- Fixed date slicer not filtering Wolf Pack tab (issue #3)
- Corrected Food Cost % calculation for beverages (issue #7)
- Updated Excel template: Dropdown now includes 50 products (was 30)

### Changed
- Improved Setup Guide: Added Mac workaround section (page 8)
- Updated FAQ: 5 new questions based on customer feedback

### Known Issues
- Heatmap visual slow with >50K transactions (workaround: filter to last 3 months)
```

---

### **Operational Workflows**

**Daily Routine (Mon-Fri):**
- **9:00-9:30am:** Check email/WhatsApp for support requests -> Respond
- **9:30-11:00am:** Lead generation (LinkedIn, Facebook, WhatsApp outreach)
- **11:00-12:00pm:** Demo calls (if booked)
- **12:00-1:00pm:** Lunch break
- **1:00-2:00pm:** Product work (bug fixes, documentation updates)
- **2:00-3:00pm:** Demo calls (if booked)
- **3:00-5:00pm:** Sales follow-ups, proposal writing
- **5:00-5:30pm:** Update tracking sheet, plan tomorrow

**Weekly Review (Friday 5pm):**
- Review metrics:
 - Total sales this week: ___ (Target: +2-3 per week)
 - Demo -> Sale conversion: ___% (Target: >30%)
 - Support tickets: ___ resolved, ___ open
 - NPS score: ___ (Target: >8.0)
- Document learnings:
 - What marketing channel worked best?
 - What objections came up most?
 - What feature requests are most common?
- Plan next week:
 - Adjust marketing messaging if needed
 - Prioritize top 3 bug fixes
 - Schedule demo calls for next week

---

### **Week 2 Deliverables**

**By End of Week 2:**
- [ ] **Gate 1A Decision:** Did we hit 5+ sales? (Go/No-Go for Week 3-4 work)
- [ ] Version 1.0.1 or 1.1.0 released (if bugs found)
- [ ] 5-10 customers successfully onboarded
- [ ] Support response time: 100% within SLA
- [ ] Customer feedback collected (at least 3 surveys completed)
- [ ] Testimonial from at least 1 happy customer
- [ ] Marketing playbook refined (based on what worked/didn't)

**Gate 1A Decision Framework:**

| Result | Criteria | Action |
|--------|----------|--------|
| **PASS** | 5+ sales, Rp 15M+ revenue, 30%+ demo conversion | -> Proceed to Week 3-4 (build T1-Standard/Plus) |
| [!] **PARTIAL** | 3-4 sales, Rp 10-12M revenue | -> Extend 1 week, intensify sales, re-evaluate |
|  **FAIL** | 0-2 sales, <Rp 7M revenue | -> Pause, analyze why, pivot pricing/messaging |

**If PASS:** Allocate time in Week 3-4 to build T1-Standard/Plus modules
**If FAIL:** Focus 100% on sales/marketing, defer module builds

---

## WEEK 3: T1-STANDARD/PLUS MODULE BUILDS

**Focus:** Add optional modules to T1-Basic, create upsell path

**Prerequisites:**
- Gate 1A passed (5+ sales validates market demand)
- Customer feedback analyzed (which features most requested)
- T1-Basic stabilized (no critical bugs)

---

### **Module Strategy**

**T1-Basic (Already Built):** 30 metrics in 3 base modules
- B1: Revenue Core (10 metrics)
- B2: Menu Essentials (10 metrics)
- B3: Staff & Customer Basics (10 metrics)
- **Price:** Rp 3.5M

**T1-Standard (NEW):** T1-Basic + 1 optional module = 40 metrics
- Choose: T1-A, T1-B, OR T1-C (customer picks which one)
- **Price:** Rp 4.5M (+Rp 1M for the module)

**T1-Plus (NEW):** T1-Basic + 2 optional modules = 50 metrics
- Choose any 2: T1-A + T1-B, T1-A + T1-C, or T1-B + T1-C
- **Price:** Rp 6M (+Rp 2.5M for 2 modules)

**Module Options (Customer Chooses):**
- **T1-A: Revenue Intelligence** (+10 metrics) - For growth-focused owners
- **T1-B: Menu Engineering** (+10 metrics) - For restaurants with 20+ menu items
- **T1-C: Staff Performance** (+10 metrics) - For businesses with 10+ staff

---

### **T1-A: Revenue Intelligence Module (10 Metrics)**

**Customer Need:** "I need to hit revenue targets, track upsells, and forecast"

**New Metrics:**
1. **Revenue vs Target (Gap):** `[Total Revenue] - [Target Revenue]` (positive = ahead, negative = behind)
2. **Required Daily Run Rate:** `([Annual Target] - [Revenue YTD]) / [Days Remaining]` (to hit year-end goal)
3. **Forecast to Year-End:** Linear projection based on last 30 days trend
4. **Upsell Revenue:** Sales of add-ons, extras (tagged in ProductCategory as "Upsell")
5. **Upsell %:** `[Upsell Revenue] / [Total Revenue]` (benchmark: 15-20%)
6. **Discount Given:** Sum of all discounts/promos
7. **Discount %:** `[Discount Given] / [Gross Revenue Before Discount]`
8. **Revenue per Available Seat Hour:** `[Total Revenue] / ([Seat Count] x [Open Hours])`
9. **High-Value Transaction Count:** Transactions > Rp 100K (VIP/group orders)
10. **High-Value Transaction %:** `[HV Transactions] / [Total Transactions]`

**New Visuals (Tab 1 Enhancements):**
- Revenue Waterfall chart (Base + Upsells + High-Value)
- Target gap gauge ("You need Rp 5M more to hit monthly target")
- Daily run rate card ("Need Rp 35M/day to hit annual goal")

**Build Time:** 2-3 days
- Day 1: DAX measures (10 new)
- Day 2: Visuals (waterfall chart, target gauge)
- Day 3: Testing, documentation update

---

### **T1-B: Menu Engineering Module (10 Metrics)**

**Customer Need:** "Which menu items are profitable? Should I remove slow sellers?"

**New Metrics:**
1. **BCG Quadrant (Stars/Cows/Dogs/Question Marks):** Formula based on Revenue % (popularity) x Margin % (profitability)
2. **Menu Item Rank (by Revenue):** `RANKX(ALL(Products), [Total Revenue], DESC)`
3. **Menu Item Rank (by Margin):** `RANKX(ALL(Products), [Gross Margin], DESC)`
4. **Menu Mix %:** `[Product Revenue] / [Total Revenue]` (contribution to total)
5. **Contribution Margin:** `[Product Revenue] - [Variable Costs]`
6. **Portion Cost:** Average ingredient cost per serving
7. **Ideal Selling Price:** `[Portion Cost] / [Target Food Cost %]` (usually 30% target)
8. **Price Variance:** `[Actual Selling Price] - [Ideal Selling Price]` (overpriced/underpriced indicator)
9. **Days Since Last Sale:** `TODAY() - MAX([Sale Date])` per product (identify discontinued items)
10. **Slow-Moving Item Count:** Products with <5 sales in last 30 days

**New Visuals (New Tab: "Menu Engineering"):**
- BCG Matrix (scatter plot: X=Popularity, Y=Profitability)
- Menu item table with ranks, margins, days since sale
- Slow-moving items alert table

**Build Time:** 2-3 days

---

### **T1-C: Staff Performance Module (10 Metrics)**

**Customer Need:** "I need to track staff fairly, identify coaching needs, gamify performance"

**New Metrics:**
1. **Performance Score (Composite):** Weighted average of 6 components (Sales/Hour 25%, Upsell Count 20%, Customer Rating 25%, Tables/Hour 15%, Discipline 10%, Trend 5%)
2. **Discipline Score (5 sub-components):** Punctuality (25%), No Early Outs (20%), Shift Completion (25%), Order Accuracy (15%), Conflict Resolution (15%)
3. **Staff Tier:** Gold (‰¥80 score), Silver (60-79), Bronze (<60)
4. **Gap to Bonus:** `[Bonus Threshold] - [Current Score]` (motivation metric)
5. **Sales per Hour (Shift-Normalized):** `[Sales during shift] / [Hours worked]`
6. **Upsell Count per Staff:** Count of upsell items sold
7. **Customer Rating (per Staff):** Average rating from feedback linked to server
8. **Tables Served per Hour:** `[Table Count] / [Hours worked]`
9. **Late Count:** Number of times clocked in >15 min late (from StaffHours table)
10. **Week-over-Week Performance Trend:** `([This Week Score] - [Last Week Score]) / [Last Week Score]`

**New Data Required:**
- `StaffHours.csv` table (ClockIn, ClockOut, IsLate, IsEarlyOut)
- `Feedback.csv` table (Date, StaffName, Rating, ComplaintResolved)

**New Visuals (Tab 2 Enhancements):**
- Performance Score leaderboard (replace simple sales leaderboard)
- Drill-through page: Individual staff card (8 metrics, gap to bonus, trend chart)
- Discipline tracking table

**Build Time:** 3-4 days (requires new data tables)

---

### **Module Development Workflow**

**For Each Module (T1-A, T1-B, T1-C):**

**Day 1: DAX Development**
- AI Sprint: Generate all 10 DAX measures
- Human: Test each measure with sample data
- Organize in display folder (e.g., "T1-A - Revenue Intelligence")
- Document formulas in `metrics-catalog.md`

**Day 2: Visualization**
- Create new visuals or enhance existing tabs
- Apply design system (colors, fonts, spacing)
- Add tooltips, drill-through where applicable
- Mobile layout optimization

**Day 3: Data & Testing**
- Generate additional sample data if needed (e.g., StaffHours.csv for T1-C)
- Run QA checklist (20 checks per module)
- Update Excel templates if new data inputs required
- Record demo video showing new module features

**Packaging:**
- Update `FNB-Dashboard-T1-Standard.pbix` (includes chosen module)
- Update `FNB-Dashboard-T1-Plus.pbix` (includes 2 chosen modules)
- Update documentation (Setup Guide page: "Understanding T1-Standard/Plus Modules")
- Update pricing on website/payment links

---

### **Week 3 Deliverables**

**By End of Week 3:**
- [ ] T1-A module complete (10 metrics, visuals, tested)
- [ ] T1-B module complete
- [ ] T1-C module complete
- [ ] T1-Standard packages created (3 variants: T1-A only, T1-B only, T1-C only)
- [ ] T1-Plus packages created (3 variants: A+B, A+C, B+C)
- [ ] Documentation updated (module comparison chart, which to choose guide)
- [ ] Pricing pages updated on website
- [ ] Demo scripts updated (how to sell modular pricing)

**Upsell Campaign to Existing T1-Basic Customers:**
- Email: "New modules available! Upgrade from T1-Basic to T1-Standard"
- Offer: Pay only the difference (Rp 1M for 1 module, Rp 2.5M for 2 modules)
- Incentive: "First 5 upgraders get free 1-hour customization call"
- Target: 20-30% of existing customers upgrade

---

## WEEK 4: PUBLIC LAUNCH SCALING & OPERATIONS

**Focus:** Scale sales, refine operations, prepare for T2 builds

**Key Objectives:**
- Increase marketing reach (paid ads if budget allows)
- Streamline operations (automate where possible)
- Collect 10+ testimonials
- Build case studies
- Validate T2 demand (multi-outlet customers)

---

### **Marketing Scaling**

**Organic Channels (Continue):**
- Daily LinkedIn posts (educational content, not just sales)
- Facebook group engagement (answer questions, share insights)
- Instagram stories (customer wins, dashboard screenshots)
- YouTube channel (upload tutorial videos publicly, SEO for "Power BI F&B Indonesia")

**Paid Advertising (If Budget Available: Rp 3-5M):**

**Meta Ads (Facebook/Instagram):**
- Target Audience:
 - Location: Jakarta, Surabaya, Bandung, Bali
 - Age: 25-50
 - Interests: Restaurant Management, Small Business, F&B, Power BI
 - Job Titles: Restaurant Owner, Operations Manager, F&B Director
- Ad Creative:
 - Carousel: Show 3 dashboard tabs (Command Center, Wolf Pack, Loyalty Loop)
 - Headline: "Dashboard Khusus F&B Indonesia - Rp 3.5 Juta (One-Time)"
 - Body: "30 metrics otomatis. Setup 30 menit. Tanpa biaya bulanan."
 - CTA: "Book Demo" (to Calendly) or "Learn More" (to landing page)
- Budget: Rp 100K/day (test), scale to Rp 200K/day if CAC < Rp 2M

**Google Ads (Search):**
- Keywords: "power bi template indonesia", "dashboard f&b", "restaurant analytics indonesia"
- Budget: Rp 50K/day (very low volume, test only)

**Track ROI:**
- Use UTM parameters in ad links: `?utm_source=facebook&utm_campaign=t1-basic-launch`
- Track in Google Sheet: Ad Spend -> Leads -> Demos -> Sales -> CAC
- Kill channel if CAC > Rp 2.5M (not sustainable)

---

### **Content Marketing**

**Blog Posts / LinkedIn Articles (1 per week):**
1. "5 Metrics Every Indonesian Restaurant Should Track Daily"
2. "Why 60% of Power BI Templates Fail (And How to Avoid It)" † Highlight our Excel template differentiator
3. "Case Study: How [Customer Name] Found Rp 15M Revenue Leak in Week 1"
4. "DIY vs Consultant vs Template: F&B Analytics Cost Comparison"

**YouTube Videos (1 per week):**
1. "Power BI Tutorial: Build Your First F&B Dashboard (Bahasa Indonesia)"
2. "Excel Template Tour: How to Track Daily Sales in 2 Minutes"
3. "Customer Story: [Business Name] Increased Profit 12% Using Data"

**SEO Strategy:**
- Target keywords: "power bi indonesia", "dashboard resto", "analisis data fnb"
- Backlinks: Guest post on F&B blogs, POS system partner blogs
- Local SEO: Google My Business (if applicable)

---

### **Operational Automation**

**Automate Repetitive Tasks:**

**Email Automation (Mailchimp/Sendinblue):**
- Welcome series (3 emails):
 - Day 0: Purchase confirmation + Google Drive link
 - Day 2: "How's setup going?" + link to FAQ
 - Day 7: "Quick check-in" + NPS survey link
- Nurture series (for leads who didn't buy):
 - Day 1: "Thanks for demo, here's proposal"
 - Day 3: "Quick follow-up - any questions?"
 - Day 7: "Last chance: Early bird pricing ends Friday"
 - Day 14: "Move to newsletter" (educational content, not sales)

**CRM Setup (HubSpot Free or Google Sheets):**
- Lead stages: Cold -> Warm -> Demo Booked -> Demo Completed -> Proposal Sent -> Closed Won/Lost
- Automated tasks: "Follow up with [Name] 2 days after demo"
- Pipeline visibility: See all leads in each stage

**Support Automation:**
- Canned responses for common questions (Gmail templates or Help Scout)
- FAQ chatbot on website (Tawk.to or Drift free tier)
- Auto-reply: "Thanks for contacting support. We respond within 24h."

---

### **Customer Success Programs**

**Testimonial Collection:**
- Email NPS ‰¥9 customers: "Would you share your experience in 2-3 sentences?"
- Offer incentive: "Free 3-month support extension for testimonial + photo"
- Format: "[Quote]" - [Name], [Business Name], [City]
- Use: Website, social media, email campaigns

**Case Study Development:**
- Identify best success story (e.g., "Increased margin 8% in month 1")
- Interview customer (30 min call):
 - Before: What was the problem?
 - Solution: How did dashboard help?
 - Results: Specific metrics (revenue, margin, time saved)
 - Quote: "Best investment we made this year"
- Write 500-word case study
- Get customer approval to publish
- Distribute: Blog post, PDF download, social media

**Referral Program:**
- Offer: "Refer 3 friends -> Get 1 year free updates" or "Get Rp 1M credit toward T2 upgrade"
- Track: Google Form ("Who referred you?")
- Reward: Manual (email "Congrats, here's your upgrade link")

---

### **T2 Demand Validation**

**Survey Existing Customers:**
- "Do you have multiple outlets?" (Yes/No)
- If Yes: "Would you pay Rp 7-12M for multi-outlet dashboard?" (Yes/Maybe/No)
- "What multi-outlet features do you need?" (checklist)

**Pre-Sell T2 Professional:**
- Create landing page: "Multi-Outlet Dashboard (Coming Soon)"
- Features: Outlet comparison, consolidated view, cross-outlet analytics
- Price: Rp 7M base (2 outlets) + Rp 1M per additional outlet
- CTA: "Join Waitlist" (collect emails)
- Target: 10 waitlist signups = validation to build T2

**Identify T2 Candidates from T1 Customers:**
- Filter customer database: BusinessSize = "2-5 outlets"
- Personal outreach: "I'm building multi-outlet features. Want early access?"
- Offer beta pricing: Rp 5M (vs Rp 7M standard)

---

### **Week 4 Deliverables**

**By End of Week 4:**
- [ ] 15+ total customers (cumulative from Week 1-4)
- [ ] Rp 50M+ cumulative revenue
- [ ] Marketing playbook documented (what worked, what didn't)
- [ ] 5+ testimonials collected
- [ ] 1-2 case studies published
- [ ] Content calendar for next 4 weeks
- [ ] Paid ads tested (if budget available, ROI measured)
- [ ] T2 waitlist: 5-10 signups (validates demand)
- [ ] Operations streamlined (50% time saved via automation)

**Metrics to Track:**

| Metric | Week 2 | Week 3 | Week 4 | Target (Month 1) |
|--------|--------|--------|--------|------------------|
| Total Customers | 5-7 | 8-12 | 15+ | 20+ |
| Cumulative Revenue | Rp 15-20M | Rp 30-40M | Rp 50M+ | Rp 60M+ |
| Demo -> Sale Conversion | 30% | 35% | 40% | 40%+ |
| NPS Score | N/A | 8.0+ | 8.5+ | 9.0+ |
| CAC (if paid ads) | N/A | Rp 3M | Rp 2M | < Rp 2M |
| Support Tickets | 10-15 | 15-20 | 20-25 | <30 |
| Upsells to T1-Standard/Plus | N/A | 2-3 | 5+ | 10+ |

---

## END OF WEEK 4: MONTH 1 RETROSPECTIVE

**Celebrate Wins:**
- From 0 to 15-20 customers in 4 weeks
- Rp 50-60M revenue (enough to fund next 3 months)
- Product validated (customers are using and recommending)
- Operational foundation built (support, sales, marketing systems)

**Learnings:**
- What marketing channel had best ROI?
- What objections came up most? How did we overcome?
- What features are most used? Least used?
- What surprised us?

**Decisions for Month 2:**

**If Month 1 Hit Targets (15+ customers, Rp 50M+ revenue):**
- Proceed to T2 Professional build (multi-outlet features)
- Hire first freelancer (VA for support or content creation)
- Increase marketing budget (Rp 5M -> Rp 10M/month)

**If Month 1 Partially Hit Targets (10-14 customers, Rp 30-49M):**
- [!] Focus on optimizing T1 sales (don't build T2 yet)
- [!] Improve conversion rate (better demos, sales scripts)
- [!] Stay solo (don't hire yet)

**If Month 1 Missed Targets (<10 customers, <Rp 30M):**
-  Pause T2 build, focus 100% on sales
-  Analyze why (wrong market? Wrong pricing? Wrong product?)
-  Consider pivot (freemium model? Different target segment?)

---

## MONTH 2 PREVIEW (If Month 1 Successful)

**Week 5-6: T2 Professional Build**
- Multi-outlet modules (P1: Multi-Outlet Core, P2: Menu Optimization, P3: Workforce Analytics, P4: Customer Mastery)
- 50-100 metrics total
- Advanced Excel templates (Outlet-Summary.xlsx with full features)
- 2-3 hour assisted setup calls

**Week 7-8: T2 Beta & Launch**
- Beta test with 3-5 multi-outlet customers
- Refine onboarding process (more complex than T1)
- Launch at Rp 7-12M (modular pricing)
- Target: 5+ T2 customers by end of Month 2

**Month 2 Revenue Target:** Rp 100M+ (cumulative: Rp 150M+ total)

**Hiring Decision Point:**
- If MRR from support subscriptions >Rp 5M/month: Hire VA for support (Rp 4M/month salary)
- If sales pipeline >30 active leads: Hire SDR (Rp 6M/month salary + commission)

---

## KEY LEARNINGS & BEST PRACTICES

**Sales:**
- Demos are crucial (30%+ conversion vs <5% without demo)
- Modular pricing works (customers appreciate choice)
- Excel templates are the #1 differentiator (highlight in every demo)
- Indonesian market prefers WhatsApp over email (use it!)

**Marketing:**
- Organic (Facebook groups, LinkedIn) has best ROI early on
- Testimonials > features in marketing copy
- Case studies close enterprise deals
- Video demos convert 2x better than static screenshots

**Operations:**
- Automate email sequences early (saves 2h/day)
- CRM prevents leads from falling through cracks
- Daily routine prevents overwhelm (time-block demo calls)
- Support tickets decrease after Week 3 (documentation improves)

**Product:**
- Customers use 60% of features (focus on those in demos)
- Most requested: Multi-outlet (T2), Staff gamification (T1-C), Forecasting (T1-A)
- Mobile usage lower than expected (optimize for desktop first)
- Video tutorials > written guides (5x usage)

---

## NEXT STEPS

After Week 4, you should have:
1. Validated product-market fit (15+ paying customers)
2. Repeatable sales process (demos, proposals, follow-ups)
3. Operational foundation (support, onboarding, marketing systems)
4. Customer insights (what features matter, what to build next)
5. Revenue to fund next phase (Rp 50-60M)

**Decision Point:**
- **If successful:** Build T2 Professional (Month 2), scale marketing, hire first employee
- **If not:** Double down on T1 sales, optimize conversion, iterate product based on feedback

**The goal of Week 2-4 is not perfection - it's validation and momentum.**

---

**Related Documents:**
- [[02-week-0-1-execution|Week 0-1 Execution Plan]] - Pre-work, validation, Days 1-10 launch
- [[products/01-power-bi-template/sales/strategy/04-pre-sale-validation-playbook|Pre-Sale Validation Playbook]] - Week 0 validation
- [[products/01-power-bi-template/operations/06-gate-tracking|Gate Tracking]] - Gate 1A criteria
- [[products/01-power-bi-template/sales/strategy/01-sales-playbook|Sales Playbook]] - Demo scripts, objection handling
- [[products/03-web-dashboard-lite/customer-success/customer-success|Customer Success Guide]] - Onboarding workflows, support SOPs

**Last Updated:** 2026-01-04
**Status:** Ready to Execute (after Week 1 complete)

