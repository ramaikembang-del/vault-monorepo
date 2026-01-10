# Comprehensive Project Presentation
## F&B 12Bn Growth Dashboard

**Duration:** 30-45 minutes
**Audience:** Mixed (executives, developers, AM)
**Format:** Question & Answer with Full Speaking Script

---

## Opening (2 minutes)

**[SPEAKER]:** Good morning everyone. Thanks for joining. Today we're going to walk through the F&B Growth Dashboard project - a tool we're building to help our Assistant Manager close the gap from 8 billion to 12 billion IDR in annual revenue.

This is going to be interactive. I'll walk through the key questions you likely have: What problem are we solving? What exactly are we building? How does it work? And what happens after we launch?

By the end of this session, developers will know exactly what to build, executives will understand the ROI, and our AM will see how this fits into their daily workflow.

Let's start with the why.

---

## Q1: What Problem Are We Trying to Solve?

**[SPEAKER]:** The challenge is simple but significant. We're currently at 8 billion IDR annual revenue. Our target is 12 billion. That's a 4 billion rupiah gap - a 50% increase we need to achieve.

Here's the problem: Right now, our Assistant Manager has data scattered across Excel sheets, POS reports, and feedback forms. By the time they connect all the pieces to see the full picture, it's too late to course-correct.

Think about that for a second. 30 days go by. Performance issues compound. Customers lapse. Staff underperform. And we only discover the patterns when we close the books.

**The current reality - fragmented systems:**
- **Visibility exists** but it's scattered - Excel here, POS there, feedback forms somewhere else
- **Data is present** but it's missing the deep metrics tied to the AM's daily workflow
- **Management is mixed** - proactive in some areas (like scheduling), reactive in others (like staff coaching)
- **Root causes are partially known** but not systematically tracked or acted upon

**Specifically, the AM can't easily answer these questions daily:**
- Did we hit yesterday's target? *If not, was it low upsells or high discounts?*
- Which staff are underperforming? *And what specifically needs coaching - speed, accuracy, or upsells?*
- Which VIP customers haven't returned in 60 days? *And how much revenue are we risking?*
- Are we on track for this month's goal? *And what's the required daily run rate from today forward?*

We have pieces of the puzzle. We need to connect them into a system. That's the shift from reactive to proactive optimization.

**[Pause for questions]**

---

## Q2: What Are We Building? (The Big Picture)

**[SPEAKER]:** We're building a Power BI dashboard with three tabs. Think of it as a command center for daily operations.

**Tab 1 - Command Center (Revenue Focus):**
The AM opens this at 7 AM every morning. In 5 minutes, they see:
- How much revenue gap remains to hit 12 billion
- What daily run rate we need starting today
- Did we hit yesterday's target?
- Where did revenue come from? (Walk-ins, reservations, upsells, discounts)

**Tab 2 - Wolf Pack (Staff Gamification):**
This is where we turn staff performance into a game. Instead of just tracking sales volume - which is unfair because dinner shifts make more than lunch - we built a Performance Score with 6 components:
- Sales per hour (productivity)
- Upsell count (behavior)
- Customer ratings (quality)
- Tables per hour (speed)
- Discipline score (reliability - punctuality, accuracy, conflict resolution)
- Week-over-week trend (momentum)

The top 10 staff appear on a leaderboard. Click any name, you get an 8-metric drill-through card for coaching.

**Tab 3 - Loyalty Loop (Customer Retention):**
We track the customer journey through 4 stages:
- First Timer (visit 1)
- Returner (visit 2)
- Regular (visits 3-9)
- VIP (10+ visits)

Plus NPS score, repeat rate, and a list of VIPs who haven't returned in 60+ days so the AM can call them personally.

**[Pause]** Questions on the three tabs before we go deeper?

---

## Q3: Why Only Build ~50 Metrics When You Have ~150 Available?

**[SPEAKER]:** Great question. This gets to our three-tier strategy.

**Here's what happened during planning:**

**Phase 1:** We started with "let's track sales and staff." Very abstract.

**Phase 2:** We did deep research and identified **~150 possible metrics:**
- 38 revenue metrics (YTD revenue, forecast to 12Bn, category mix, **seasonal menu performance, reservation analysis**, YoY growth, etc.)
- 51 staff metrics (performance scoring, peer comparisons, coaching indicators, achievement badges)
- 45 customer metrics (CLV, journey conversion, sentiment analysis, spend behavior, **complaint categorization**)
- 29 operational metrics (efficiency, capacity, profitability, shift performance, **booking conversion tracking**)

**Phase 3:** We filtered down to **~50 metrics across 3 tabs** that fit the AM's daily 5-minute workflow.

**Why?**
Because if we put all 150 metrics on the dashboard, it becomes analysis paralysis. The AM doesn't have 30 minutes every morning to review charts. They need: "Show me the critical 10 things, let me drill down on 5-10 more if needed, and let me get back to managing the floor."

**The ~50 we're building:**
- Tab 1: 17 metrics (10 always visible, 7 one-click away) - *includes seasonal menu & reservation category breakdown*
- Tab 2: 14 metrics (6 on main screen, 8 in each staff's drill-through)
- Tab 3: 20 metrics (9 on main screen, 11 in drill-throughs) - *includes complaint category analysis*

**The other ~100 metrics?**
They're documented and ready. When a user says "Can we track X?", we check the catalog first. If it's there, adding it is hours not weeks because the data model already supports it.

**Recent expansion:**
We just added booking conversion tracking (requires a new Bookings table) - things like no-show rates, cancellation rates, and revenue variance between estimated and actual reservation values. Perfect for future expansion when the AM wants to optimize the reservation process.

**This is future-proofing without feature bloat.**

---

## Q4: Can You Walk Through the 47 Operational Metrics in Detail?

**[SPEAKER]:** Absolutely. Let me break down each tab.

### Tab 1 - Command Center (15 Revenue Metrics)

**10 Critical Metrics (Always Visible):**
1. **Gap to 12Bn Target** - How much do we still need to earn?
2. **Required Daily Run Rate** - What must we earn per day from today onward?
3. **Today's Revenue** - Are we hitting today's run rate? (Red if below, green if above)
4. **MTD vs Target %** - Month-to-date pacing (are we at 100%+ or falling behind?)
5-9. **Waterfall Chart (5 buckets):** Walk-in Sales  ->  + Reservations  ->  + Upsells  ->  - Discounts  ->  = Net Revenue
 - This shows composition. Did we miss target because upsells were low? Or discounts were high?
10. **Hourly Heatmap** - Revenue by hour of day Ã— day of week. Dark blue = peak hours. Helps schedule staff.

**5 Important Metrics (1-Click Access):**
11. **Upsell % of Revenue** (tooltip on waterfall)
12. **Discount Rate** (tooltip on waterfall)
13. **Weekly Comparison** (toggle slicer - this week vs last week)
14. **Best Day This Month** (drill-through)
15. **YoY Growth %** (drill-through)

**Morning use case:** AM walks in at 7 AM, checks cards 1-4, sees if yesterday hit target, checks waterfall to understand why or why not. Takes 2 minutes.

---

### Tab 2 - Wolf Pack (14 Staff Metrics)

**6 Critical Metrics (Main Screen):**
1. **Performance Score** - Composite of 6 components (sales/hr, upsells, rating, tables/hr, discipline, trend)
2. **Team Avg Performance** - Baseline for comparison
3. **Top Performer** - Recognition badge
4. **Tier Level Badges** - Gold (top 20%), Silver (80-120% of target), Bronze (<80%)
5. **Late Count Alert** - Banner: "[!] 3 staff late today"
6. **Unresolved Complaints Alert** - Banner: "[!] 2 unresolved complaints"

**8 Important Metrics (Per-Staff Drill-Through):**
Click any staff name on the leaderboard  ->  See their drill-through card with:
7. **Gap to Target** - How close to their monthly sales goal?
8. **Gap to Bonus** - Will they hit bonus threshold (80% of target)?
9. **Upsell Count** - How many desserts/drinks/add-ons did they sell?
10. **Service Speed** - Average minutes from order to settle
11. **Positive Mentions** - Count of NPS 9+ ratings mentioning this staff
12. **Discipline Score Breakdown** - Radar chart showing 5 components:
 - Punctuality (on-time %)
 - Full Shift (no early outs %)
 - Attendance (shift completion %)
 - Order Accuracy (1 - void rate)
 - Conflict Resolution (resolved complaints %)
13. **Rank Position** - "#5 of 20"
14. **Improvement Trend** - (^) 12% vs last week (green) or  v  8% (red)

**End-of-day use case:** AM sees bottom 3 performers on leaderboard. Clicks each name. Reviews their 8-metric drill-through. Plans tomorrow's coaching: "You're 500K from bonus, focus on upsells. Your service speed is 2 minutes slower than team average."

---

### Tab 3 - Loyalty Loop (18 Customer Metrics)

**9 Critical Metrics (Main Screen):**
1-4. **Patronage Funnel (4 stages):**
 - First Timers (visit count = 1)
 - Returners (visit count = 2)
 - Regulars (visit count 3-9)
 - VIPs (visit count 10+)
5. **NPS Score** - Net Promoter Score (-100 to +100)
6. **Repeat Rate %** - Returners Ã· First Timers
7. **Lapsed VIPs Count** - VIPs who haven't visited in 60+ days
8. **Avg Check by Segment** - Scatter plot (First Timers vs VIPs avg spend)
9. **Word Cloud Keywords** - What are customers saying? (DELICIOUS, SLOW, friendly, etc.)

**9 Important Metrics (Drill-Throughs):**
10. **VIP Contribution %** - What % of total revenue comes from VIPs? (tooltip on funnel)
11. **Lost Revenue Risk** - Lapsed VIP count Ã— avg VIP check = IDR at risk (tooltip)
12. **Promoter %** - NPS 9-10 (tooltip)
13. **Detractor %** - NPS 0-6 (tooltip)
14-17. **Sentiment Scores (4):** Drill-through from NPS shows:
 - Food Quality Score (1-5 stars)
 - Service Speed Score
 - Staff Friendliness Score
 - Atmosphere Score
18. **Resolution Rate** - % of complaints resolved

**Weekly use case:** AM checks lapsed VIPs list. Calls the 12 customers personally. Checks word cloud - if "SLOW" appears big, addresses service speed with Tab 2 staff data.

**[Pause]** That's all 47 metrics. Questions on any specific metric or use case?

---

## Q5: What About the Other 92 Metrics in the Catalog?

**[SPEAKER]:** They're all documented and ready for future phases. Let me give you examples:

**Revenue Expansion (32 total available):**
- Forecast to 12Bn (projection at current pace)
- Acceleration Needed (how much faster we need to go)
- Food/Beverage/Alcohol/Dessert % (category mix analysis)
- Quarter-to-Date tracking
- Avg Check Size trends

**Staff Expansion (51 total available):**
- Rank Position, Gap to Leader, Percentile (peer comparisons)
- Weakness/Strength Indicators (coaching AI)
- Training Priority (lowest 3 component scores)
- Achievement Milestones (First Sale badge, 100 Club, Upsell Master, Perfect Week, 5-Star Streak, Target Achiever)
- Team Performance Variance (consistency check)

**Customer Expansion (36 total available):**
- First Visit Conversion (% of first timers who return)
- Regular-to-VIP Promotion rate
- CLV (Customer Lifetime Value)
- Top Decile Revenue (80/20 analysis)
- Discount Dependency (are customers price-sensitive?)
- Reservation Premium (do reservations spend more?)

**Operational Expansion (20 total available):**
- Sales Per Man Hour (labor efficiency)
- Table Turnover Rate
- Seat Utilization %
- Net Revenue Ratio
- Staff Absentee Rate
- Void Rate (order accuracy issues)

**When do we add these?**
User-driven. If the AM says "I want to see which first-timers are converting to returners," we check the catalog - it's #110 (First Visit Conversion). We add the visual. Takes hours because the data model already has the field.

---

## Q6: How Does This Work Technically?

**[SPEAKER]:** For the developers in the room, here's the architecture.

**Data Model: Star Schema**
- 3 Fact Tables: Sales, Feedback, StaffHours
- 2 Dimension Tables: Staff (20 rows), Date (730 rows)
- 1 Target Table: Monthly targets (24 rows)
- 7 Relationships (all Many-to-One except Date <-> Targets: One-to-One Both)

**Data Sources (Two Options):**

Option A - Testing: 6 CSV files in `/data/` folder (176K total rows)
- Sales_Data.csv (17K transactions)
- Feedback.csv (10K ratings)
- Staff_Roster.csv (20 staff)
- StaffHours.csv (7.3K shift records)
- Date.csv (730 day dimension)
- Targets.csv (24 monthly targets)

Option B - Production: 4 SQL views in `/src/sql/` folder
- 01_vw_PowerBI_Sales_Feed.sql (18 columns including IsVoid, OrderTimestamp, IsReservation, DiscountAmount)
- 02_vw_PowerBI_Dim_Staff.sql (6 columns including MonthlyTarget, BonusThreshold)
- 03_vw_PowerBI_Fact_Feedback.sql (15 columns including ComplaintResolved, ReviewText)
- 04_vw_PowerBI_Fact_StaffHours.sql (11 columns including IsLate, IsEarlyOut, TotalHoursWorked)

**Key DAX Measures:**

Gap to 12Bn:
```dax
Target Annual = 12000000000
Actual Sales YTD = TOTALYTD(SUM(Sales_Data[GrossAmount]), 'Date'[Date])
Revenue Gap = [Target Annual] - [Actual Sales YTD]
```

Performance Score (composite):
```dax
Performance Score =
 (SalesPerHour Ã· Team Avg Ã— 25) +
 (UpsellCount Ã· Team Max Ã— 20) +
 (AvgRating Ã· 5 Ã— 25) +
 (TablesPerHour Ã· Team Avg Ã— 15) +
 (Discipline Score Ã— 10) +
 (WoW Trend Ã— 5)
```

Discipline Score (5 sub-components):
```dax
Discipline Score =
 (Punctuality Rate Ã— 0.25) +
 (Full Shift Rate Ã— 0.20) +
 (Attendance Rate Ã— 0.25) +
 (Order Accuracy Ã— 0.15) +
 (Resolution Rate Ã— 0.15)
```

NPS Score:
```dax
NPS Score =
VAR Promoters = CALCULATE(COUNTROWS(Feedback), Feedback[NPS] >= 9)
VAR Detractors = CALCULATE(COUNTROWS(Feedback), Feedback[NPS] <= 6)
VAR Total = COUNTROWS(Feedback)
RETURN DIVIDE(Promoters - Detractors, Total, 0) Ã— 100
```

**Design: Dark Mode Theme**
- Background: Navy #0f172a
- Accents: Electric Blue #3b82f6
- Font: Segoe UI, 8px rounded corners
- Max 6 visuals per tab (fits 16:9 screen, no scrolling)

**[Pause]** Technical questions?

---

## Q7: What's the Implementation Timeline?

**[SPEAKER]:** 5 weeks from kickoff to go-live.

**Week 1: Data Foundation**
- Load 6 CSVs into Power BI OR connect to 4 SQL views
- Create 7 relationships
- Mark Date table
- Verify field names (IsVoid, ComplaintResolved, IsLate, IsEarlyOut, BonusThreshold)

**Week 2-3: Build Visuals**
- Week 2: Tab 1 (Command Center) - 6 visuals, apply dark theme
- Week 3 Day 1-2: Tab 2 (Wolf Pack) - Leaderboard + drill-through page
- Week 3 Day 3-4: Tab 3 (Loyalty Loop) - Funnel + NPS + scatter + word cloud
- Week 3 Day 5: Mobile layouts (vertical scroll, simplified cards)

**Week 4: Testing & Refinement**
- Day 1-2: AM user testing (1 week real-world use)
- Day 3-4: Feedback incorporation, empty state handling
- Day 5: Final UAT

**Week 5: Go-Live**
- Replace CSVs with SQL views (production cutover)
- Schedule refresh (4x daily initially, can go real-time)
- Train 20 staff: "Here's how to see your drill-through card"
- Weekly monitoring begins

**Total estimated effort:** 22 developer hours spread across 5 weeks.

---

## Q8: How Do We Measure Success?

**[SPEAKER]:** We have tiered success metrics.

**Month 1 (Adoption):**
- AM checks dashboard > 5 days/week
- At least 1 coaching session per week uses drill-through data
- Dashboard load time < 5 seconds
- Zero critical bugs

**Month 3 (Insights):**
- Identify correlation: Does higher Discipline Score = higher Performance Score?
- Track: Did we close monthly gap faster than before dashboard?
- User requests: At least 2 requests for metrics from the 139 catalog (proves usefulness)

**Month 6 (Business Impact):**
- Revenue: Measurable improvement in daily run rate consistency
- Staff: Reduced late count, improved order accuracy (lower void rate)
- Customer: Increased VIP retention rate, improved NPS

**ROI Scenario:**
If the dashboard helps us close the 4 billion gap just 1 month faster, that's 4Bn Ã· 12 months = 333 million rupiah per month. Even a 1% improvement = 3.3 million rupiah.

Plus intangibles:
- Faster decision-making
- Data-driven culture (staff see their own scores - transparency)
- Reduced staff turnover
- Better customer experience

---

## Q9: What Happens After Launch?

**[SPEAKER]:** Three things.

**1. Continuous Monitoring (Months 1-3):**
Weekly check-ins with AM:
- What's working?
- What's confusing?
- What metric do you wish you had?

**2. Iterative Expansion (Months 3-6):**
Based on user requests, we add metrics from the 139 catalog:
- If AM says "I want to see peer comparisons," we add Rank Position, Gap to Leader, Percentile (metrics #64-66)
- If they want achievement tracking, we add the 6 milestone badges (metrics #74-79)
- If they want CLV analysis, we add metrics #94-97

**3. Scale (Months 6-12):**
- Row-level security: Filter by outlet/region (if multi-location)
- API integration: Real-time refresh instead of 4x daily
- Mobile app: Native iOS/Android (currently web-responsive)
- Advanced analytics: Predictive models from the operational metrics

**The beauty of this approach:** We're not building a monolith. We're building a foundation (47 metrics) with a documented expansion roadmap (139 total).

---

## Q10: What Do You Need From This Room Today?

**[SPEAKER]:** Three things.

**From Executives:**
- Budget approval for BI developer time (22 hours over 5 weeks)
- Go-ahead for data team to prepare SQL views OR load test CSVs
- Timeline commitment (5-week implementation)
- Assign: Who's the project sponsor?

**From Developers:**
- Assign: Who's the BI developer building this?
- Schedule: Kickoff meeting this week to load data and review DAX measures
- Review: All code is ready (`/src/sql/` for views, `/data/` for CSVs, dark theme at `/assets/themes/growth_theme.json`)

**From the AM:**
- Time commitment: 2 hours training (Week 4), then 5 minutes daily use
- Feedback: Be brutally honest in Week 4 testing - "This is confusing" is useful
- Vision: What else do you wish you could see? (We check the 139 catalog)

**Next Steps This Week:**
1. Executive approval (budget, timeline)
2. Assign BI developer
3. Schedule kickoff meeting
4. Developer: Load CSVs into Power BI, start Tab 1

**Go-Live Target:** [Insert Date - 5 weeks from today]

---

## Q11: Common Questions We Haven't Covered?

**Q: Can staff see other staff's scores?**
A: Yes. The leaderboard shows all 20 staff (transparency). Drill-through shows individual detail. This is by design - gamification requires visibility. Staff know where they stand.

**Q: What if we want a metric not in the 47 or the 139?**
A: First, we check the 139 catalog - it's likely there. Second, if it's truly custom (e.g., "Track coffee vs tea sales"), we assess: Does it fit the AM persona? Is the data available? If yes to both, we add it to backlog and prioritize.

**Q: How long to add metrics from the catalog later?**
A: Hours, not weeks. The data model already supports all 139 metrics. We're just adding visuals and DAX measures. Example: Adding "First Visit Conversion" (metric #110) = 1-2 hours.

**Q: What if AM doesn't use it daily?**
A: That's a failure signal. We investigate: Is it too complex? Too slow? Missing critical info? We iterate. The 5-minute morning check is non-negotiable for ROI.

**Q: Can other roles use this?**
A: Absolutely. Row-level security can filter by outlet, region, or role. The core design (3 tabs, operational core) works for any AM. We'd customize drill-throughs per location.

**Q: What happens if POS system changes?**
A: SQL views insulate us. If POS schema changes, we update the 4 views. Power BI doesn't need to change. That's why we use views instead of direct table connections.

---

## Closing (2 minutes)

**[SPEAKER]:** Let me bring this home.

We're at 8 billion. We need to get to 12 billion. That's a 4 billion rupiah gap.

Right now, our AM manages reactively - finding out about problems 30 days late.

This dashboard gives them proactive tools:
- **Command Center** tells them every morning: "You're on track" or "You're 3M behind, here's why"
- **Wolf Pack** tells them: "These 3 staff need coaching, here's their 8-metric profile"
- **Loyalty Loop** tells them: "These 12 VIPs are lapsing, call them today"

We're building 47 metrics across 3 tabs. We have 139 total documented for future expansion. The data model supports it all. Timeline is 5 weeks. Estimated ROI is millions even at 1% improvement.

**What we need today:**
- Executive: Approve budget and timeline
- Developers: Assign BI developer, schedule kickoff
- AM: Commit to training and daily use

**What you get:**
A tool that turns data into daily action. A path to 12 billion that's measurable, manageable, and visible every single morning.

**Questions?**

---

## Appendix: All 139 Metrics (Reference)

**Revenue (32):**
1-6. Primary KPIs: YTD Revenue, Gap to Target, Required Daily Run Rate, Today's Revenue, MTD vs Target %, Forecast to 12Bn
7-11. Waterfall: Walk-in Sales, Reservation Sales, Upsells, Discounts, Net Revenue
12-16. Time Period: Hourly Heatmap, Daily Trend, Weekly Comparison, Monthly Performance, Quarter-to-Date
17-22. Mix Analysis: Food/Beverage/Alcohol/Dessert Revenue %, Reservation % of Revenue, Upsell % of Revenue
23-27. Transactions: Total Transactions, Avg Check Size, Transactions per Hour, Peak Hour Volume, Reservation Conversion
28-32. Growth & Pacing: YoY Growth %, Run Rate to Goal, Days Behind/Ahead, Acceleration Needed, Best/Worst Day

**Staff (51):**
33-38. Performance Score Components: Sales Per Hour, Upsell Count, Avg Customer Rating, Tables Per Hour, Discipline Score, Week-over-Week Trend
39-43. Discipline Sub-Components: Punctuality %, Full Shift %, Attendance %, Order Accuracy, Conflict Resolution %
44-51. Individual Drill-Through: Gap to Target, Gap to Bonus, Upsell Count, Upsell Strike Rate, Service Speed, Positive Mentions, Late Count, Early Out Count
52-58. Tier & Badges: Tier Level, Tier Criteria, Tier Badge, Dessert King/Queen, Speed Demon, VIP Whisperer, Target Crusher
59-63. Team Performance: Team Avg, Top Performer, Performance Variance, Team Upsell Rate, Team Discipline Score
64-68. Peer Comparison: Rank Position, Gap to Leader, Percentile, Peer Avg (Same Role), Shift Peer Comparison
69-73. Coaching Indicators: Improvement Trend, Consistency Rating, Weakness Indicator, Strength Indicator, Training Priority
74-79. Achievement Milestones: First Sale, 100 Club, Upsell Master, Perfect Week, 5-Star Streak, Target Achiever
80-83. Additional Context: Monthly Target, Bonus Threshold, Actual MTD Sales, Final Performance Score

**Customer (36):**
84-87. Patronage Funnel: First Timer Count, Returner Count, Regular Count, VIP Count
88-93. Retention & Churn: Repeat Rate, VIP Retention, Lapsed Customers, Churn Rate, Avg Days Between Visits, Lost Revenue Risk
94-97. Lifetime Value: Avg Customer Lifetime, CLV (Simple), VIP Contribution %, Top Decile Revenue
98-105. Sentiment & Experience: NPS Score, Promoter %, Detractor %, Avg Overall Rating, Food/Service/Staff/Atmosphere Scores
106-109. Feedback & Engagement: Feedback Response Rate, Word Cloud Keywords, Complaint Ratio, Resolution Rate
110-113. Customer Journey: First Visit Conversion, Regular-to-VIP Promotion, Avg Visits Per Month, Peak Visit Day
114-117. Spend Behavior: Avg Check by Segment, Upsell Acceptance (VIP), Discount Dependency, Reservation Premium
118-119. Sentiment Analysis: Positive/Negative Mention Count

**Operational (20):**
120-123. Efficiency: Sales Per Man Hour, Revenue Per Cover, Tables Per Hour (Staff), Avg Service Duration
124-127. Capacity: Table Turnover Rate, Peak Hour Identification, Seat Utilization %, Reservation Fill Rate
128-131. Profitability: Discount Rate, Net Revenue Ratio, Upsell Revenue %, Avg Check by Shift
132-134. Shift Performance: Lunch vs Dinner Revenue, Staff Coverage Ratio, Shift Profitability
135-138. Quality & Loss: Void Rate, Complaint Rate, Resolution Success, Staff Absentee Rate
139. Trend Analysis: Week-over-Week Growth

---

**Contact:** [Project Lead Name]
**Next Meeting:** [Date/Time for kickoff]
**Resources:** All code in `/src/`, `/data/`, `/assets/` ready for review

---

## Related

- **[[biz/strategy/frameworks/01-vision-mission|Vision & Mission]]** - Company purpose and strategic goals
- **[[biz/strategy/market-analysis/06-product-positioning|Product Positioning]]** - Market positioning and competitive landscape
- **[[biz/strategy/planning/execution/01-product-roadmap|Product Roadmap]]** - 22-product strategic roadmap
- **[[biz/training/templates/01-presentation-template|Presentation Template]]** - Presentation guidelines and best practices
- **[[products/01-power-bi-template/specifications/technical/02-database-schema|Database Schema]]** - Technical data model architecture

