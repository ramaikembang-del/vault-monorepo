# Technical Handoff
## F&B 12Bn Growth Dashboard - Developer Guide

**Duration:** 30 minutes
**Audience:** BI developers, data engineers
**Purpose:** Development kickoff, technical onboarding

---

## Related Documents
- [[biz/presentations/product-demos/03-technical-handoff-script|Technical Handoff Script]]
- [[products/products|Products Hub]]

---

## Slide 1: Implementation Scope

**What You're Building:**
Power BI Dashboard with **3 tabs, ~25 operational metrics per tab**

**Operational Core Metrics (Build These First):**
- **Tab 1 - Command Center:** Gap to 12Bn, Daily Run Rate, Today's Revenue, MTD %, Waterfall (5 buckets), Hourly Heatmap
- **Tab 2 - Wolf Pack:** Performance Score Leaderboard, Team Avg, Tier Badges, Late Count Alert, Drill-through (8 metrics per staff)
- **Tab 3 - Loyalty Loop:** Patronage Funnel (4 stages), NPS Score, Repeat Rate, Lapsed VIPs, Word Cloud, Scatter Plot

**Future Expansion:** ~150 total metrics in catalog (see 05-metrics-specification.md)

**Deliverables:**
- 3 tabs (Command Center, Wolf Pack, Loyalty Loop)
- 6 visuals/tab max (one-screen 16:9 layout, no scrolling)
- Mobile layout (vertical scroll with simplified card views)
- Dark mode theme (Navy #0f172a background + Electric Blue #3b82f6 accents)

---

## Slide 2: Data Architecture

**Star Schema - 4 Fact Tables**

```

 Date (Dim)





 Sales Feedback StaffHours
 (Fact) (Fact) (Fact)





 Staff_Roster
 (Dim)

```

**Relationships:** 7 total (all Many-to-One except Date↔Targets)

---

## Slide 3: Data Sources

### Option A: Testing (CSV Files)

**Location:** `/data/*.csv`

| File | Records | Key Fields |
|------|---------|------------|
| Sales_Data.csv | ~17,000 | IsVoid, OrderTimestamp, SettledTimestamp, IsReservation, DiscountAmount |
| Feedback.csv | ~10,000 | Complaint Resolved, ResolutionMethod, ReviewText |
| StaffHours.csv | ~7,300 | IsLate, IsEarlyOut, TotalHoursWorked |
| Staff_Roster.csv | 20 | MonthlyTarget, BonusThreshold, TierLevel |
| Targets.csv | 24 | MonthStartDate, TargetAmount |
| Date.csv | 730 | Date, MonthStartDate |

### Option B: Production (SQL Views)

**Location:** `/src/sql/*.sql`

1. `01_vw_PowerBI_Sales_Feed.sql` - 18 columns
2. `02_vw_PowerBI_Dim_Staff.sql` - 6 columns (incl. BonusThreshold)
3. `03_vw_PowerBI_Fact_Feedback.sql` - 15 columns
4. `04_vw_PowerBI_Fact_StaffHours.sql` - 11 columns

**Action:** Run all 4 scripts on SQL Server, then import views

---

## Slide 4-5: Critical DAX Measures

**These are the formulas you need to implement:**

### Tab 1: Revenue

```dax
Target Annual = 12000000000

Actual Sales YTD = TOTALYTD(SUM(Sales_Data[GrossAmount]), 'Date'[Date])

Revenue Gap = [Target Annual] - [Actual Sales YTD]

Days Remaining =
CALCULATE(
 COUNTROWS('Date'),
 DATESBETWEEN('Date'[Date], TODAY(), DATE(YEAR(TODAY()),12,31))
)

Required Daily Run Rate = DIVIDE([Revenue Gap], [Days Remaining], 0)
```

### Tab 2: Staff (Performance Score)

```dax
Performance Score =
 ([Sales Per Hour] / [Team Avg Sales Per Hour] * 25) +
 ([Upsell Count] / [Team Max Upsells] * 20) +
 ([Avg Customer Rating] / 5 * 25) +
 ([Tables Per Hour] / [Team Avg Tables] * 15) +
 ([Discipline Score] * 10) +
 ([WoW Sales Trend] * 5)
```

**Discipline Score (5 Sub-Components):**

```dax
Punctuality Rate =
VAR TotalDays = COUNTROWS(StaffHours)
VAR LateDays = CALCULATE(COUNTROWS(StaffHours), StaffHours[IsLate] = 1)
RETURN 1 - DIVIDE(LateDays, TotalDays, 0)

Full Shift Rate =
VAR TotalDays = COUNTROWS(StaffHours)
VAR EarlyOuts = CALCULATE(COUNTROWS(StaffHours), StaffHours[IsEarlyOut] = 1)
RETURN 1 - DIVIDE(EarlyOuts, TotalDays, 0)

Order Accuracy =
VAR TotalOrders = DISTINCTCOUNT(Sales_Data[TransactionID])
VAR VoidedOrders = CALCULATE(DISTINCTCOUNT(Sales_Data[TransactionID]), Sales_Data[IsVoid] = 1)
RETURN 1 - DIVIDE(VoidedOrders, TotalOrders, 0)

Resolution Rate =
VAR TotalComplaints = CALCULATE(COUNTROWS(Feedback), Feedback[NPS] <= 4)
VAR Resolved = CALCULATE(COUNTROWS(Feedback), Feedback[NPS] <= 4 && Feedback[ComplaintResolved] = "Yes")
RETURN IF(TotalComplaints = 0, 1, DIVIDE(Resolved, TotalComplaints, 0))

Discipline Score =
 ([Punctuality Rate] * 0.25) +
 ([Full Shift Rate] * 0.20) +
 ([Attendance Rate] * 0.25) +
 ([Order Accuracy] * 0.15) +
 ([Resolution Rate] * 0.15)
```

### Tab 3: Customer

```dax
NPS Score =
VAR Promoters = CALCULATE(COUNTROWS(Feedback), Feedback[NPS] >= 9)
VAR Detractors = CALCULATE(COUNTROWS(Feedback), Feedback[NPS] <= 6)
VAR Total = COUNTROWS(Feedback)
RETURN DIVIDE(Promoters - Detractors, Total, 0) * 100
```

---

## Slide 6-7: Visual Build Order

**Build in this priority order:**

### Phase 1: Critical Visuals ( Build First)

**Tab 1 - Command Center:**
1. Header Cards (4): Gap to 12Bn, Run Rate, Today's Revenue, MTD %
2. Waterfall Chart: Revenue Build-Up (5 buckets)
3. Heatmap: Revenue by Hour/Day

**Tab 2 - Wolf Pack:**
1. Header Cards (3): Team Avg, Top Performer, Alerts (late count)
2. Leaderboard Table: Performance Score with tier badges
3. (Placeholder for drill-through)

**Tab 3 - Loyalty Loop:**
1. Funnel Chart: First Timer → VIP (4 stages)
2. Header Cards (3): NPS, Repeat Rate, Lapsed VIPs
3. Word Cloud: Review keywords

### Phase 2: Important Visuals ( Next)

**Tab 1:**
- Tooltips on Waterfall (Upsell %, Discount %)

**Tab 2:**
- Drill-through page with 8 metrics + Discipline radar chart

**Tab 3:**
- Scatter plot: Avg Check by Segment
- Customer list table (filtered to VIPs)

### Phase 3: Polish

- Mobile layouts (vertical scroll)
- Empty state handling
- Drill-through navigation buttons

---

## Slide 8: Design Theme

**Dark Mode Color Palette:**
- Background: `#0f172a` (Void Navy - main canvas)
- Surface: `#1e293b` (Card Slate - visual containers)
- Primary: `#3b82f6` (Electric Blue - accents & highlights)
- Success: `#10b981` (Profit Green - positive metrics)
- Danger: `#ef4444` (Alert Red - negative metrics)
- Text: White/Grey on dark backgrounds

**Typography & Styling:**
- Font: Segoe UI (Power BI default)
- Borders: 8px rounded corners
- Shadows: Subtle drop shadows on cards
- Visual spacing: Consistent 16px gutters

**To Apply:** View → Themes → Browse → Select `assets/themes/growth_theme.json`

---

## Slide 9: Data Model Setup

**Step-by-Step:**

1. Load data (CSV or SQL)
2. Create relationships:
 ```
 Sales_Data[StaffID] → Staff_Roster[StaffID] (Many-to-One)
 Sales_Data[TransactionDate] → Date[Date] (Many-to-One)
 Feedback[StaffID] → Staff_Roster[StaffID] (Many-to-One)
 StaffHours[StaffID] → Staff_Roster[StaffID] (Many-to-One)
 StaffHours[Date] → Date[Date] (Many-to-One)
 Date[MonthStartDate] → Targets[MonthStartDate] (One-to-One, Both)
 ```
3. Mark Date table: Right-click Date → Mark as Date Table
4. Verify data types (dates = , numbers = 1.2)

---

## Slide 10: Testing Checklist

**Data Verification:**
- [ ] All 6 CSVs loaded (or 4 SQL views)
- [ ] New fields present: IsVoid, ComplaintResolved, IsLate, IsEarlyOut, BonusThreshold
- [ ] All 7 relationships created
- [ ] Date table marked correctly

**DAX Measures:**
- [ ] Critical Tab 1 measures working (4)
- [ ] Performance Score calculating (6 components)
- [ ] Discipline Score calculating (5 sub-components)
- [ ] NPS Score working

**Visuals:**
- [ ] Tab 1: 6 main visuals render
- [ ] Tab 2: Leaderboard shows all 20 staff
- [ ] Tab 3: Funnel shows 4 stages
- [ ] Drill-through on staff name works
- [ ] Mobile layout renders

**Common Issues:**
- Blank Performance Score? → Check StaffHours relationship
- IsVoid not found? → Re-run generate_dummy_data.py
- Discipline Score = 0? → Verify ComplaintResolved, IsLate columns exist

---

## Slide 11: Build Priority Matrix

| Priority | Tab | Visual | Estimated Hours |
|----------|-----|--------|-----------------|
| P0 | 1 | Header Cards (4) | 2 |
| P0 | 1 | Waterfall | 2 |
| P0 | 2 | Leaderboard | 3 |
| P0 | 3 | Funnel + NPS | 2 |
| P1 | 1 | Heatmap | 2 |
| P1 | 2 | Drill-through (8 metrics) | 4 |
| P1 | 3 | Scatter + Word Cloud | 2 |
| P2 | All | Mobile layouts | 3 |
| P2 | All | Polish + empty states | 2 |

**Total Estimated:** 22 hours

---

## Slide 12: Operational Core vs Full Catalog

**Operational Core (Build First):** ~25 metrics/tab for daily AM use
- Tab 1: 10 critical metrics (Gap, Run Rate, Revenue, MTD%, Waterfall, Heatmap)
- Tab 2: 14 metrics (6 critical on main + 8 in drill-through per staff)
- Tab 3: 18 metrics (9 critical on main + 9 in tooltips/interactions)

**Comprehensive Catalog (Future Expansion):** ~150 total metrics documented

**Revenue (32 metrics):** YTD Revenue, Gap to Target, Required Daily Run Rate, Today's Revenue, MTD vs Target %, Forecast to 12Bn, Walk-in Sales, Reservation Sales, Upsells, Discounts, Net Revenue, Hourly Heatmap, Daily Trend, Weekly Comparison, Monthly Performance, Quarter-to-Date, Food/Beverage/Alcohol/Dessert Revenue %, Reservation % of Revenue, Upsell % of Revenue, Total Transactions, Avg Check Size, Transactions per Hour, Peak Hour Volume, Reservation Conversion, YoY Growth %, Run Rate to Goal, Days Behind/Ahead, Acceleration Needed, Best/Worst Day This Month

**Staff (51 metrics):** Performance Score (6 components: Sales Per Hour, Upsell Count, Avg Customer Rating, Tables Per Hour, Discipline Score, Week-over-Week Trend), Discipline Score (5 sub: Punctuality %, Full Shift %, Attendance %, Order Accuracy, Conflict Resolution %), Individual Drill-Through (8: Gap to Target/Bonus, Upsell Count/Strike Rate, Service Speed, Positive Mentions, Late/Early Out Count), Tier & Badges (7: Level, Criteria, Badge, Dessert King/Queen, Speed Demon, VIP Whisperer, Target Crusher), Team Performance (5: Avg, Top Performer, Variance, Upsell Rate, Discipline), Peer Comparison (5: Rank, Gap to Leader, Percentile, Peer Avg, Shift Peer), Coaching (5: Improvement Trend, Consistency, Weakness, Strength, Training Priority), Milestones (6: First Sale, 100 Club, Upsell Master, Perfect Week, 5-Star Streak, Target Achiever), Context (4: Monthly Target, Bonus Threshold, Actual MTD, Final Score)

**Customer (36 metrics):** Patronage Funnel (4: First Timer, Returner, Regular, VIP), Retention & Churn (6: Repeat Rate, VIP Retention, Lapsed Customers, Churn Rate, Avg Days Between Visits, Lost Revenue Risk), CLV (4: Avg Lifetime, CLV Simple, VIP Contribution %, Top Decile Revenue), Sentiment (8: NPS, Promoter %, Detractor %, Avg Overall Rating, Food/Service/Staff/Atmosphere Scores), Feedback (4: Response Rate, Word Cloud, Complaint Ratio, Resolution Rate), Journey (4: First Visit Conversion, Regular-to-VIP, Avg Visits/Month, Peak Visit Day), Spend (4: Avg Check by Segment, Upsell Acceptance VIP, Discount Dependency, Reservation Premium), Analysis (2: Positive/Negative Mentions)

**Operational (20 metrics):** Efficiency (4: Sales Per Man Hour, Revenue Per Cover, Tables Per Hour Staff, Avg Service Duration), Capacity (4: Table Turnover Rate, Peak Hour ID, Seat Utilization %, Reservation Fill Rate), Profitability (4: Discount Rate, Net Revenue Ratio, Upsell Revenue %, Avg Check by Shift), Shift (3: Lunch vs Dinner Revenue, Staff Coverage Ratio, Shift Profitability), Quality (4: Void Rate, Complaint Rate, Resolution Success, Staff Absentee Rate), Trend (1: Week-over-Week Growth)

**When to Expand:**
- User requests: "Can we add X metric?" → Check catalog first
- Future phases: Coaching dashboard, team comparison analysis, advanced CLV modeling

**Expansion Effort:** Hours, not weeks (all fields already in data model)

---

## Slide 13: Handoff Documentation

**Your References:**

**Build Guide - What to Implement:**
- Tab 1 Critical (10): Gap to 12Bn, Daily Run Rate, Today's Revenue, MTD%, Waterfall (Base/Reservations/Upsells/Discounts/Net), Hourly Heatmap
- Tab 1 Important (5): Upsell %, Discount Rate, Weekly Comparison, Best Day, YoY Growth
- Tab 2 Critical (6): Performance Score Leaderboard, Team Avg, Top Performer, Tier Badges, Late Count Alert, Unresolved Complaints
- Tab 2 Important (8 per staff): Gap to Target, Gap to Bonus, Upsell Count, Service Speed, Positive Mentions, Discipline Score, Rank, Trend
- Tab 3 Critical (9): Patronage Funnel (4 stages), NPS Score, Repeat Rate, Lapsed VIPs, Avg Check Scatter, Word Cloud
- Tab 3 Important (9): VIP Contribution %, Lost Revenue Risk, Promoter %, Detractor %, Food/Service/Staff/Atmosphere ratings

**Design Specifications:**
- 16:9 one-screen layout (6-8 visuals max per tab, no scrolling)
- Dark theme: Navy #0f172a + Electric Blue #3b82f6
- Typography: Segoe UI, 8px rounded corners, subtle shadows
- Mobile: Vertical scroll, simplified cards, top 5 leaderboard only

**Technical Implementation:**
- 4 SQL views in `/src/sql/`: Sales Feed, Staff Dim, Feedback Fact, StaffHours Fact
- Key DAX measures: Gap to 12Bn, Performance Score (6 components), Discipline Score (5 sub-components), NPS
- Star schema: Sales/Feedback/StaffHours (facts) → Staff/Date (dimensions) + Targets table
- 7 relationships: All Many-to-One except Date↔Targets (One-to-One, Both)

**Deployment Resources:**
- 6 test CSVs (176K rows total): Sales_Data.csv, Feedback.csv, Staff_Roster.csv, StaffHours.csv, Date.csv, Targets.csv
- Python generator: `/data/generate_dummy_data.py` to regenerate test data
- Common issues documented: Missing IsVoid column, ComplaintResolved field, relationship errors

**Future Expansion Catalog:**
- ~150 total metrics in comprehensive catalog
- All fields already in data model - adding visuals = hours not weeks

---

## Slide 14: Development Timeline

**Week 1: Foundation**
- Day 1-2: Load CSVs, set up data model
- Day 3-4: Create critical DAX measures
- Day 5: Build Tab 1 visuals

**Week 2: Core Features**
- Day 1-2: Build Tab 2 (leaderboard + drill-through)
- Day 3-4: Build Tab 3 (funnel + NPS)
- Day 5: Apply theme, test interactions

**Week 3: Testing & Polish**
- Day 1-2: AM user testing, feedback incorporation
- Day 3-4: Mobile layouts, empty states
- Day 5: Final testing, handoff to AM

**Week 4: Production Cutover**
- Replace CSVs with SQL views
- Schedule refresh (4x daily)
- Staff training (AM + 20 staff)

---

## Slide 15: Q&A

**Common Developer Questions:**

**Q: Do I need to build all ~150 metrics?**
A: No. Build operational core (~50 metrics total) first. Comprehensive catalog (~150) = backlog for future phases.

**Q: What if a DAX measure fails?**
A: Verify: (1) All relationships created correctly, (2) Date table marked as date table, (3) Field names match (IsVoid, ComplaintResolved, IsLate, IsEarlyOut)

**Q: Can I use DirectQuery instead of Import?**
A: Yes, if POS system supports it. Test performance first.

**Q: How do I handle missing data (nulls)?**
A: COALESCE in SQL views, DIVIDE(x,y,0) in DAX.

**Next:** Hands-on session - load CSVs together

---

**Resources Available:**
- Code: `/src/sql/` has 4 production SQL views, `/data/` has 6 CSV test files + Python generator
- Theme: `/assets/themes/growth_theme.json` for dark mode import
- All metrics, DAX formulas, and visual specs are documented in this presentation
