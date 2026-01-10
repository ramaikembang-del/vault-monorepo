# Executive Summary
## F&B 12Bn Growth Dashboard

**Duration:** 10 minutes
**Audience:** C-level, Finance, GM
**Purpose:** Budget approval, executive briefing

---

## Related Documents
- [[biz/presentations/company-pitch/03-executive-script|Executive Script]]
- [[biz/presentations/presentations|Presentations Hub]]

---

## Slide 1: The Business Case

**The Challenge:**
- Current revenue: IDR 8 Bn
- Target: IDR 12 Bn (50% growth)
- **Gap: IDR 4 Bn**

**The Problem:**
> "We only discover we missed target at month-end, when it's too late to course-correct."

- No daily visibility into performance
- Can't identify issues until it's too late
- Reactive management vs proactive optimization

---

## Slide 2: The Solution

**Real-Time Decision Dashboard for Assistant Manager**

**3 Tabs, One Screen:**
1. **Command Center** - Revenue tracking (Gap to 12Bn, daily run rate)
2. **Wolf Pack** - Staff performance (20 staff members, gamified leaderboard)
3. **Loyalty Loop** - Customer retention (VIP tracking, NPS)

**Key Innovation: Three-Tier Approach**
- Build operational core first (~25 metrics/tab for daily AM use):
 - Tab 1 (15 metrics): Gap to 12Bn, Daily Run Rate, Today's Revenue, MTD %, Waterfall (5 buckets), Heatmap, Upsell %, Discount Rate, Weekly Comparison, Best Day, YoY Growth
 - Tab 2 (14 metrics): Performance Score, Team Avg, Top Performer, Tier Badges, Late Alert, Complaints Alert + 8 drill-through metrics (Gap to Target/Bonus, Upsell Count, Service Speed, Positive Mentions, Discipline Score breakdown, Rank, Trend)
 - Tab 3 (18 metrics): Patronage Funnel (4 stages), NPS, Repeat Rate, Lapsed VIPs, Scatter, Word Cloud + 9 drill-through metrics (VIP Contribution %, Lost Revenue Risk, Promoter/Detractor %, 4 sentiment scores, Resolution Rate)
- Full catalog ready for expansion (~150 total metrics available):
 - Revenue (32): YTD, waterfall, time analysis, mix %, transactions, growth/pacing
 - Staff (51): Performance Score (6), Discipline (5), drill-throughs (8), tiers/badges (7), team (5), peer (5), coaching (5), milestones (6), context (4)
 - Customer (36): Funnel (4), retention (6), CLV (4), sentiment (8), feedback (4), journey (4), spend (4), analysis (2)
 - Operational (20): Efficiency (4), capacity (4), profitability (4), shift (3), quality (4), trend (1)
- Scales from essentials to advanced analytics without rebuilding

---

## Slide 3: Expected Outcomes

**Month 1:**
- Daily visibility into performance gaps
- Data-driven staff coaching (not gut feel)
- Identify at-risk VIP customers before they lapse

**Month 3:**
- Faster course correction (weekly vs monthly)
- Improved staff discipline & performance
- Measurable customer retention improvements

**Month 6:**
- Close 12Bn gap weeks/months faster
- Reduced staff turnover (transparent performance)
- Better customer experience (NPS improvement)

---

## Slide 4: Investment

**Required Resources:**
- Development: X hours (BI developer)
- Data: 6 CSV files OR 4 SQL views (ready)
- Training: 2 hours (AM + 20 staff)

**Timeline:**
- Week 1-2: Power BI build
- Week 3: Testing with AM
- Week 4: Staff training
- Week 5: Go-live

**Potential ROI:**
- **Scenario:** Dashboard helps close gap 1 month faster
- Revenue impact: IDR 4Bn ÷ 12 = **IDR 333M/month**
- Even 1% improvement = IDR 3.3M
- Plus: Faster decisions, better culture, reduced churn

---

## Slide 5: Decision Required

**Approval Needed:**
- Budget for BI developer time (X hours)
- Go-ahead for data team to load CSVs/SQL views
- Timeline commitment (5-week implementation)

**Next Steps (This Week):**
1. Assign BI developer
2. Schedule technical kickoff
3. Begin Power BI build (Tab 1)

**Go-Live Target:** [Date]

**Questions?**

---

**Supporting Resources:**
Complete project documentation available including:
- Step-by-step deployment guide with troubleshooting (data loading, DAX formulas, visual build order)
- Comprehensive metrics catalog (~150 total metrics, ~100 beyond operational core)
- 6 test CSV files (176K rows: Sales, Feedback, Staff, StaffHours, Date, Targets)
- 4 production SQL views (Sales Feed, Staff Dim, Feedback Fact, StaffHours Fact)
- Dark mode Power BI theme (Navy #0f172a + Electric Blue #3b82f6)
