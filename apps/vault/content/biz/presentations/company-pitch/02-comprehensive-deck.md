# Comprehensive Project Presentation (Restructured)
## F&B 12Bn Growth Dashboard

**Duration:** 30-45 minutes
**Audience:** Mixed (executives, developers, AM)
**Purpose:** Complete project overview for kickoff/alignment
**Note:** This deck follows the narrative flow of the speaking script

---

## Related Documents
- [[biz/presentations/company-pitch/01-comprehensive-deck-script|Comprehensive Deck Script]]
- [[biz/presentations/presentations|Presentations Hub]]

---

## Slide 1: Title

**F&B Growth Dashboard**
*Data-Driven Path to IDR 12 Bn*

- Project: Power BI Dashboard for Assistant Manager
- Scope: 3 tabs, operational core ~28 metrics/tab
- Objective: Turn data into daily action

---

## Slide 2: The Challenge (Q1: What Problem?)

**The 50% Growth Gap**

- Current: IDR 8 Bn annual revenue
- Target: IDR 12 Bn (50% increase)
- Gap: **IDR 4 Bn** to close

**Today's Reality - Fragmented Systems:**
- [!] **Visibility exists** but scattered across Excel, POS, feedback forms - not integrated
- [!] **Data is present** but missing deep metrics tied to AM's daily workflow
- [!] **Management is mixed** - proactive in some areas, reactive in others
- [!] **Root causes partially known** but not systematically tracked or acted upon

> [!] "We have pieces of the puzzle, but they're not connected. By the time we see the full picture, it's too late to course-correct."

---

## Slide 3: The Opportunity - From Fragmented to Unified

**What If We Connected All the Pieces?**

**Instead of scattered Excel + POS + feedback forms:**
- [x] **One integrated dashboard** - all data in one place
- [x] **Deep metrics tied to workflow** - not just surface numbers
- [x] **Systematic tracking** - root causes visible daily, not monthly
- [x] **Proactive by default** - alerts and drill-throughs guide action

**Morning (7 AM) - Unified View:**
- See yesterday's gap to target **with composition breakdown** (was it low upsells? high discounts?)
- Identify which staff were late **and see their full performance profile**
- Spot VIP customers who haven't returned **with revenue risk quantified**

**During Shift - Real-Time Context:**
- Track today's revenue vs required run rate **with hourly pacing**
- See which staff are hitting upsell goals **with peer comparison**

**End of Day - Data-Driven Coaching:**
- Review performance **with 8-metric drill-through per staff**
- Plan tomorrow's schedule **based on patterns, not guesswork**

> **Impact:** Transform fragmented data into a connected system. Close the 12Bn gap weeks or months faster because we can course-correct **daily** instead of **monthly**.

---

## Slide 4: What We're Building (Q2: The Solution)

**3-Tab Power BI Dashboard**

**Tab 1 - Command Center (Revenue Focus):**
- Gap to 12Bn target
- Required daily run rate
- Today's revenue vs target
- Revenue composition waterfall (base + reservations + upsells - discounts)
- Hourly/daily heatmap for scheduling

**Tab 2 - Wolf Pack (Staff Gamification):**
- Performance Score leaderboard (6 components)
- NEW: Discipline Score (punctuality, accuracy, conflict resolution)
- Individual 8-metric drill-through for coaching
- Late/complaint alerts

**Tab 3 - Loyalty Loop (Customer Retention):**
- 4-stage patronage funnel (First Timer  ->  Returner  ->  Regular  ->  VIP)
- NPS score + sentiment analysis
- Lapsed VIP tracking
- Word cloud of customer reviews

---

## Slide 5: Our Approach - Phased Implementation (Q3: Why Filter?)

**The Journey:**

**Phase 1: Initial Vision**
"Track sales and staff"  ->  Abstract ideas

**Phase 2: Comprehensive Research**
Identified **~150 total possible metrics** across 4 categories:
- Revenue (38 metrics) - *includes menu performance & reservation analysis*
- Staff (51 metrics)
- Customer (45 metrics) - *includes complaint categorization*
- Operational (29 metrics) - *includes booking conversion tracking*

**Phase 3: Operational Core (What We're Building First)**
Filtered to **~50 metrics across 3 tabs** for daily AM workflow:
- Tab 1: 17 metrics (10 critical, 7 important) - *includes seasonal menu & reservations*
- Tab 2: 14 metrics (6 critical, 8 drill-through)
- Tab 3: 20 metrics (9 critical, 11 important) - *includes complaint categories*

**Why filter?** AM needs 5-minute daily check, not 30-minute analysis. Focus prevents analysis paralysis.

**Future:** Full ~150-metric catalog ready when users request expansions *(see Slide 21 appendix)*

---

## Slide 6: Tab 1 - Command Center Details (Q4 Part 1)

### Revenue Intelligence (15 Metrics Total)

** Critical Metrics (10 - Always Visible):**

| # | Metric | Why Critical |
|---|--------|--------------|
| 1 | Gap to 12Bn Target | Primary objective tracker |
| 2 | Required Daily Run Rate | "What must we earn today?" |
| 3 | Today's Revenue | Live performance check |
| 4 | MTD vs Target % | Monthly pacing ([x]/[x] indicator) |
| 5-9 | **Waterfall (5 buckets):** Walk-in Sales  ->  + Reservations  ->  + Upsells  ->  - Discounts  ->  = Net Revenue | Shows revenue composition |
| 10 | Hourly Heatmap (Revenue by Hour Ã— Day) | Staff scheduling insight |

** Important Metrics (5 - 1-Click Access):**
11. Upsell % of Revenue (tooltip)
12. Discount Rate (tooltip)
13. Weekly Comparison (toggle slicer)
14. Best Day This Month (drill-through)
15. YoY Growth % (drill-through)

**Morning Use Case (2 min):** Check cards 1-4, review waterfall to see why we hit/missed yesterday's target

---

## Slide 7: Tab 2 - Wolf Pack Details (Q4 Part 2)

### Staff Gamification (14 Metrics Total)

** Critical Metrics (6 - Main Screen):**

| # | Metric | Description |
|---|--------|-------------|
| 1 | **Performance Score** | Composite of 6 components (see below) |
| 2 | Team Avg Performance | Baseline for comparison |
| 3 | Top Performer | Recognition badge |
| 4 | Tier Level Badges | Gold ([*][*][*]), Silver ([*][*]), Bronze ([*]) |
| 5 | Late Count Alert | "[!] 3 staff late today" |
| 6 | Unresolved Complaints Alert | "[!] 2 unresolved complaints" |

**Performance Score = 6 Components:**
- Sales Per Hour (25%) - Productivity normalized by shift
- Upsell Count (20%) - Behavior, not luck
- Avg Customer Rating (25%) - Guest experience
- Tables Per Hour (15%) - Efficiency
- **Discipline Score (10%)** - **NEW: 5 sub-components**
- Week-over-Week Trend (5%) - Momentum

**Discipline Score = 5 Sub-Components:**
1. Punctuality (25%) - IsLate from time clock
2. No Early Outs (20%) - IsEarlyOut tracking
3. Shift Completion (25%) - Attendance %
4. Order Accuracy (15%) - Void rate (mistakes)
5. Conflict Resolution (15%) - ComplaintResolved %

---

## Slide 8: Tab 2 - Individual Drill-Through (Q4 Part 2 cont.)

** Important Metrics (8 - Per-Staff Drill-Through Card):**

Click any staff name on leaderboard  ->  See their coaching card:

| # | Metric | Purpose |
|---|--------|---------|
| 7 | Gap to Target | "(IDR) MTD Sales vs Monthly Goal" |
| 8 | Gap to Bonus | "Will they hit 80% threshold?" |
| 9 | Upsell Count | "Desserts/drinks pushed this month" |
| 10 | Service Speed | "Avg minutes from order to settle" |
| 11 | Positive Mentions | "NPS 9+ reviews mentioning this staff" |
| 12 | Discipline Score Breakdown | Radar chart showing all 5 components |
| 13 | Rank Position | "#5 of 20" |
| 14 | Improvement Trend | "(^) 12% vs last week (green) or  v  8% (red)" |

**End-of-Day Use Case (10 min):** Click bottom 3 performers, review 8-metric card, prep coaching notes

---

## Slide 9: Tab 3 - Loyalty Loop Details (Q4 Part 3)

### Customer Retention (18 Metrics Total)

** Critical Metrics (9 - Main Screen):**

| # | Metric | Purpose |
|---|--------|---------|
| 1-4 | **Patronage Funnel (4 stages):** First Timer  ->  Returner  ->  Regular  ->  VIP | Customer journey pipeline |
| 5 | NPS Score | Net Promoter Score (-100 to +100) |
| 6 | Repeat Rate % | Returners Ã· First Timers |
| 7 | Lapsed VIPs Count | VIPs who haven't visited in 60+ days |
| 8 | Avg Check by Segment | Scatter plot (First Timers vs VIPs spend) |
| 9 | Word Cloud Keywords | "What are customers saying?" (DELICIOUS, SLOW, etc.) |

** Important Metrics (9 - Drill-Throughs/Tooltips):**
10. VIP Contribution % (tooltip on funnel)
11. Lost Revenue Risk (Lapsed VIP count Ã— avg VIP check)
12. Promoter % (NPS 9-10, tooltip)
13. Detractor % (NPS 0-6, tooltip)
14-17. **Sentiment Scores (4):** Food Quality, Service Speed, Staff Friendliness, Atmosphere
18. Resolution Rate (% complaints resolved)

**Weekly Use Case (30 min):** Call lapsed VIPs, address word cloud themes with staff, track NPS trend

---

## Slide 10: The Data Model (Q6: Technical Architecture)

**Star Schema - 4 Fact Tables**

```
 |-------------+
 | Date (Dim) |
 |------+-------
 |
 |--------+--------+
 | | |
|---▼----+ |-▼------+ |---▼-------+
| Sales | |Feedback| |StaffHours |
| (Fact) | | (Fact) | | (Fact) |
|---+----- |---+----- |-----+------
 | | |
 |----------┴-------------
 |
 |-----▼------+
 |Staff_Roster|
 | (Dim) |
 |-------------
```

**Key Fields Added for File 06:**
- `Sales_Data`: IsVoid, OrderTimestamp, SettledTimestamp, IsReservation, DiscountAmount, **MenuCategory, MenuSeason, ReservationCategory**
- `Feedback`: ComplaintResolved, ResolutionMethod, ReviewText, **ComplaintCategory1, ComplaintCategory2, ComplaintCategory3**
- `StaffHours`: IsLate, IsEarlyOut, TotalHoursWorked
- `Staff_Roster`: MonthlyTarget, BonusThreshold
- **`Bookings` (NEW)**: BookingID, Status, EstimatedRevenue, ActualRevenue

---

## Slide 11: Critical DAX Measures (Q6 cont.)

**Revenue Measures:**
```dax
Target Annual = 12000000000
Actual Sales YTD = TOTALYTD(SUM(Sales_Data[GrossAmount]), 'Date'[Date])
Revenue Gap = [Target Annual] - [Actual Sales YTD]
Required Daily Run Rate = DIVIDE([Revenue Gap], [Days Remaining], 0)
```

**Performance Score (Composite):**
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
Discipline Score =
 ([Punctuality Rate] * 0.25) +
 ([Full Shift Rate] * 0.20) +
 ([Attendance Rate] * 0.25) +
 ([Order Accuracy] * 0.15) +
 ([Resolution Rate] * 0.15)
```

**NPS Score:**
```dax
NPS Score =
VAR Promoters = CALCULATE(COUNTROWS(Feedback), Feedback[NPS] >= 9)
VAR Detractors = CALCULATE(COUNTROWS(Feedback), Feedback[NPS] <= 6)
VAR Total = COUNTROWS(Feedback)
RETURN DIVIDE(Promoters - Detractors, Total, 0) * 100
```

---

## Slide 12: Implementation Timeline (Q7)

**5 Weeks from Kickoff to Go-Live**

**Week 1: Data Foundation**
- Load 6 CSVs into Power BI OR connect to 4 SQL views
- Create 7 relationships
- Mark Date table
- Verify new fields (IsVoid, ComplaintResolved, IsLate, IsEarlyOut, BonusThreshold)

**Week 2-3: Build Visuals**
- Week 2: Tab 1 (Command Center) - 6 visuals, dark theme
- Week 3 Day 1-2: Tab 2 (Wolf Pack) - Leaderboard + drill-through page
- Week 3 Day 3-4: Tab 3 (Loyalty Loop) - Funnel + NPS + scatter + word cloud
- Week 3 Day 5: Mobile layouts

**Week 4: Testing & Refinement**
- AM user testing (real-world use cases)
- Feedback incorporation, empty state handling
- Final UAT

**Week 5: Go-Live**
- Production SQL cutover
- Staff training (20 people)
- Weekly monitoring begins

**Estimated Effort:** 22 developer hours across 5 weeks

---

## Slide 13: Success Metrics (Q8)

**Month 1 (Adoption):**
- AM checks dashboard > 5 days/week
- >= 1 coaching session/week uses drill-through data
- Dashboard load time < 5 seconds
- Zero critical bugs

**Month 3 (Insights):**
- Identify correlation: Discipline Score  <->  Performance Score?
- Track: Did we close monthly gap faster?
- User requests: >= 2 requests for catalog metrics (proves usefulness)

**Month 6 (Business Impact):**
- Revenue: Measurable daily run rate consistency improvement
- Staff: Reduced late count, improved order accuracy (lower void rate)
- Customer: Increased VIP retention rate, improved NPS

**ROI Scenario:**
Dashboard closes 4Bn gap 1 month faster = **IDR 333M/month impact**
Even 1% improvement = IDR 3.3M

---

## Slide 14: Future Expansion Options (Q5 & Q9)

**After Core Launch - Continuous Improvement:**

**Months 1-3: User Monitoring**
- Weekly check-ins: What's working? What's confusing?
- Gather feature requests

**Months 3-6: Selective Expansion**
Based on AM requests, add metrics from full catalog *(see Slide 21)*:
- "Can we see peer comparisons?"  ->  Add Rank Position, Gap to Leader, Percentile
- "Track achievement badges?"  ->  Add 6 milestone badges
- "Want CLV analysis?"  ->  Add Customer Lifetime Value metrics

**Months 6-12: Scale**
- Row-level security (multi-outlet filtering)
- Real-time API refresh
- Mobile native app
- Predictive analytics layer

**Expansion Speed:** Hours to add catalog metrics (data model already supports all fields)

---

## Slide 15: Investment & ROI (Q10 Part 1)

**Investment Required:**
- Development: ~22 hours (BI developer, data engineer)
- Training: 2 hours (AM + 20 staff)
- Ongoing: Monthly dashboard refresh (automated)

**Potential ROI:**
- **Primary:** Close 4Bn gap 1 month faster = IDR 333M revenue impact
- **Even 1% improvement** = IDR 3.3M

**Intangibles:**
- Faster decision-making (daily vs monthly)
- Data-driven culture (transparent performance)
- Reduced staff turnover (clear expectations)
- Better customer experience (proactive VIP retention)

---

## Slide 16: What We Need Today (Q10 Part 2)

**From Executives:**
- [x] Budget approval for BI developer (22 hours over 5 weeks)
- [x] Data team go-ahead (load CSVs or prepare SQL views)
- [x] Timeline commitment (5-week implementation)
- [x] Project sponsor assignment

**From Developers:**
- [x] Assign BI developer
- [x] Schedule kickoff meeting this week
- [x] Review ready resources (`/src/sql/`, `/data/`, `/assets/themes/`)

**From the AM:**
- [x] 2-hour training commitment (Week 4)
- [x] Daily 5-minute usage commitment
- [x] Brutally honest feedback during testing

**Next Steps This Week:**
1. Executive approval
2. Assign developer
3. Kickoff meeting
4. Developer: Load CSVs, start Tab 1

**Go-Live Target:** [Date - 5 weeks from today]

---

## Slide 17: Common Questions (Q11)

**Q: Can staff see other staff's scores?**
A: Yes - leaderboard shows all 20 (transparency for gamification). Drill-through shows individual detail. By design.

**Q: What if we want a metric not in the 47?**
A: Check the 139-metric catalog first *(Slide 21)*. If truly custom, assess fit and add to backlog.

**Q: How long to add catalog metrics later?**
A: Hours, not weeks. Data model supports all 139. Just add visuals + DAX.

**Q: What if AM doesn't use it daily?**
A: Failure signal. Investigate: Too complex? Too slow? Missing info? Iterate. 5-minute check is non-negotiable for ROI.

**Q: Can other roles use this?**
A: Yes. Row-level security filters by outlet/region. Core design works for any AM.

**Q: What if POS system changes?**
A: SQL views insulate us. Update 4 views, Power BI unchanged.

---

## Slide 18: Why This Will Work

**1. Built for the User (AM Persona)**
- One-screen per tab (no scrolling)
- Mobile-ready (floor mode)
- 5-minute morning check, not 30-minute analysis

**2. Action-Focused**
- Critical metrics always visible
- Drill-through for root cause
- Clear "what to do next"

**3. Future-Proof**
- Data model supports all 139 catalog metrics
- Documented expansion roadmap
- Three-tier approach prevents scope creep

**4. Data-Driven Culture**
- Staff see their own performance (transparency)
- AM has coaching data (not gut feel)
- Executives see daily progress (not month-end surprises)

---

## Slide 19: Resources Ready for Build

**For Developers:**
- **Build Guide:** `06-dashboard-implementation-plan.md` (~25 metrics/tab)
- **DAX Formulas:** `03-technical data bp.md` (copy-paste ready)
- **Visual Layouts:** `07-ui-ux-design-specs.md` (mockups, colors, interactions)
- **Setup Guide:** `DEPLOYMENT.md` (step-by-step first-time setup)

**For Testing:**
- 6 CSV files (176K rows total)
- Python data generator (`generate_dummy_data.py`)
- SQL views (4 scripts in `/src/sql/`)

**For UI:**
- Dark mode theme (`growth_theme.json`)
- Navy #0f172a + Electric Blue #3b82f6
- Segoe UI, 8px corners, 6 visuals max per tab

**For Future Expansion:**
- Full catalog: 139 metrics documented *(Slide 21)*

---

## Slide 20: Thank You

**Questions?**

**What You Get:**
A tool that turns data into daily action.
A measurable, manageable, visible path to 12 billion.

**Contact:**
Project Lead: [Name]
Technical Lead: [Name]
Product Owner: [Name]

**Resources:**
Documentation: `/docs/` folder
Code: `/src/`, `/data/`, `/assets/`
Next Meeting: [Date/Time]

---

## Slide 21: APPENDIX - Full Metrics Catalog (~150 Total)

*Reference for future expansion requests*

**Updated:** Added 11 new metrics across 4 categories

### Revenue Metrics (38) - *was 32*

**Primary KPIs (6):**
1. YTD Revenue
2. Gap to Target
3. Required Daily Run Rate
4. Today's Revenue
5. MTD vs Target %
6. Forecast to 12Bn

**Waterfall Components (5):**
7. Walk-in Sales
8. Reservation Sales
9. Upsells
10. Discounts
11. Net Revenue

**Time Period Analysis (5):**
12. Hourly Heatmap
13. Daily Trend
14. Weekly Comparison
15. Monthly Performance
16. Quarter-to-Date

**Mix Analysis (6):**
17. Food Revenue %
18. Beverage Revenue %
19. Alcohol Revenue %
20. Dessert Revenue %
21. Reservation % of Revenue
22. Upsell % of Revenue

**Transaction Metrics (5):**
23. Total Transactions
24. Avg Check Size
25. Transactions per Hour
26. Peak Hour Volume
27. Reservation Conversion

**Growth & Pacing (5):**
28. YoY Growth %
29. Run Rate to Goal
30. Days Behind/Ahead
31. Acceleration Needed
32. Best/Worst Day

**Menu Performance (4) - NEW:**
33. Seasonal Menu Revenue
34. Top 10 Items by Season
35. Year-Round vs Seasonal Mix
36. Seasonal Item Contribution %

**Reservation Analysis (2) - NEW:**
37. Revenue by Reservation Category
38. Avg Party Size by Category

---

### Staff Metrics (51)

**Performance Score Components (6):**
33. Sales Per Hour
34. Upsell Count
35. Avg Customer Rating
36. Tables Per Hour
37. Discipline Score
38. Week-over-Week Trend

**Discipline Sub-Components (5):**
39. Punctuality %
40. Full Shift %
41. Attendance %
42. Order Accuracy
43. Conflict Resolution %

**Individual Drill-Through (8):**
44. Gap to Target
45. Gap to Bonus
46. Upsell Count
47. Upsell Strike Rate
48. Service Speed
49. Positive Mentions
50. Late Count
51. Early Out Count

**Tier & Badges (7):**
52. Tier Level
53. Tier Criteria
54. Tier Badge
55. Dessert King/Queen
56. Speed Demon
57. VIP Whisperer
58. Target Crusher

**Team Performance (5):**
59. Team Avg
60. Top Performer
61. Performance Variance
62. Team Upsell Rate
63. Team Discipline Score

**Peer Comparison (5):**
64. Rank Position
65. Gap to Leader
66. Percentile
67. Peer Avg (Same Role)
68. Shift Peer Comparison

**Coaching Indicators (5):**
69. Improvement Trend
70. Consistency Rating
71. Weakness Indicator
72. Strength Indicator
73. Training Priority

**Achievement Milestones (6):**
74. First Sale
75. 100 Club
76. Upsell Master
77. Perfect Week
78. 5-Star Streak
79. Target Achiever

**Additional Context (4):**
80. Monthly Target
81. Bonus Threshold
82. Actual MTD Sales
83. Final Performance Score

---

### Customer Metrics (36)

**Patronage Funnel (4):**
84. First Timer Count
85. Returner Count
86. Regular Count
87. VIP Count

**Retention & Churn (6):**
88. Repeat Rate
89. VIP Retention
90. Lapsed Customers
91. Churn Rate
92. Avg Days Between Visits
93. Lost Revenue Risk

**Lifetime Value (4):**
94. Avg Customer Lifetime
95. CLV (Simple)
96. VIP Contribution %
97. Top Decile Revenue

**Sentiment & Experience (8):**
98. NPS Score
99. Promoter %
100. Detractor %
101. Avg Overall Rating
102. Food Quality Score
103. Service Speed Score
104. Staff Friendliness Score
105. Atmosphere Score

**Feedback & Engagement (4):**
106. Feedback Response Rate
107. Word Cloud Keywords
108. Complaint Ratio
109. Resolution Rate

**Customer Journey (4):**
110. First Visit Conversion
111. Regular-to-VIP Promotion
112. Avg Visits Per Month
113. Peak Visit Day

**Spend Behavior (4):**
114. Avg Check by Segment
115. Upsell Acceptance (VIP)
116. Discount Dependency
117. Reservation Premium

**Sentiment Analysis (2):**
118. Positive Mention Count
119. Negative Mention Count

**Complaint Analysis (9) - NEW:**
120. Complaint Category Breakdown
121. Cleanliness Complaints
122. Menu Variation Complaints
123. Service Complaints
124. Product Quality Complaints
125. Price/Discount Complaints
126. General Experience Complaints
127. Multi-Tag Complaint %
128. Avg Tags per Complaint

---

### Operational Metrics (29) - *was 20*

**Efficiency (4):**
120. Sales Per Man Hour
121. Revenue Per Cover
122. Tables Per Hour (Staff)
123. Avg Service Duration

**Capacity (4):**
124. Table Turnover Rate
125. Peak Hour Identification
126. Seat Utilization %
127. Reservation Fill Rate

**Profitability (4):**
128. Discount Rate
129. Net Revenue Ratio
130. Upsell Revenue %
131. Avg Check by Shift

**Shift Performance (3):**
132. Lunch vs Dinner Revenue
133. Staff Coverage Ratio
134. Shift Profitability

**Quality & Loss (4):**
135. Void Rate
136. Complaint Rate
137. Resolution Success
138. Staff Absentee Rate

**Trend Analysis (1):**
139. Week-over-Week Growth

**Booking Conversion (9) - NEW:**
140. Booking Conversion Rate
141. Cancellation Rate
142. No-Show Rate
143. No-Show Rate by Category
144. Revenue Variance (Estimated vs Actual)
145. Avg Booking Lead Time
146. Completed Booking Revenue
147. Lost Revenue (No-Shows)
148. Avg Party Size by Booking Category

---

**Total Metrics:** ~150 (139 original + 11 new)

**New Additions:**
- Menu Performance: 4 metrics
- Reservation Analysis: 2 metrics
- Complaint Analysis: 9 metrics
- Booking Conversion: 9 metrics (requires new Bookings table)

---

**End of Presentation**


---

**Related Documents:**
- [[biz/presentations/presentations|Presentations Hub]] - All presentation materials
- [[biz/strategy/strategy|Strategy Overview]] - Company strategy


