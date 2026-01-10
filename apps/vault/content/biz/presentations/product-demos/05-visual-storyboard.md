# Visual Storyboard
## F&B 12Bn Growth Dashboard - Key Visuals

This document provides visual mockups and diagrams for key presentation slides.

---

## Related Documents
- [[biz/presentations/product-demos/01-product-walkthrough-script|Product Walkthrough Script]]
- [[biz/presentations/presentations|Presentations Hub]]

---

## Visual 1: Three-Tier Approach Diagram

```

 TIER 1: GLOBAL CONTEXT (All Stakeholders)
 Business Objective AM Persona Data Sources Principles





 TIER 2: FULL CATALOG (~150 Metrics) TIER 3: OPERATIONAL CORE

 Revenue (32): YTD, Forecast, YoY %, ~25 Metrics/Tab
 category mix, transactions, pacing Daily AM Use
 Staff (51): Perf Score (6), Disc (5), One-screen design
 drills (8), badges (7), team (5), Mobile-ready
 peer (5), coaching (5), milestones
 Customer (36): Funnel (4), retention Tab 1 (15 metrics):
 (6), CLV (4), sentiment (8), feed 10 Critical + 5 Important
 (4), journey (4), spend (4) Tab 2 (14 metrics):
 Operational (20): Efficiency (4), 6 Critical + 8 Drills
 capacity (4), profit (4), shift (3) Tab 3 (18 metrics):
 quality (4), trend (1) 9 Critical + 9 Drills

 Reference (Future) Build First
```

**Key Message:** Build operational core first (~25 metrics/tab for daily decisions), expand to full catalog later (139 additional metrics for advanced analytics)

---

## Visual 2: Data Model Diagram

```

 Date Dimension

 - Date (PK)
 - MonthStartDate
 - DayName
 - IsHoliday





 Sales_Data Feedback StaffHours
 (Fact) (Fact) (Fact)

 17K records 10K records 7.3K records
 18 columns 15 columns 11 columns




 Staff_Roster
 (Dimension)

 20 staff
 6 columns



 Targets
 (Dimension)

 - MonthStartDate
 - TargetAmount

```

**Relationships:** 7 total (all Many-to-One except Date↔Targets: One-to-One, Both)

---

## Visual 3: Tab 1 - Command Center Mockup

```

 F&B GROWTH DASHBOARD [Date Filter: Last 7 Days ]



 Gap to 12Bn Required Daily Today's Revenue MTD vs
 Run Rate Target
 IDR 3.2Bn IDR 35M IDR 32M 78%



 Revenue Waterfall (5 Buckets)

 Base +Reserv +Upsells -Discounts = Net Sales
 28M 33M 35M 32M 32M



 Hour/Day Heatmap (Revenue Intensity)

 11AM 1PM 3PM 5PM 7PM 9PM 11PM
 Mon
 Tue
 ...
 (Dark Blue = High, Light Grey = Low)


```

**Visual Budget:** 6 main visuals (fits 16:9 screen)

---

## Visual 4: Tab 2 - Wolf Pack Mockup

```

 WOLF PACK LEADERBOARD [Today ]


 3 staff late today 2 unresolved complaints


 Rank Name Performance Score Tier

 #1 Rina Wati 92/100 Gold
 #2 Budi Santoso 87/100 Silver
 #3 Siti Aminah 85/100 Silver
 #4 Ahmad Rizki 82/100 Silver
 ...
 #10 Joko Susilo 68/100 Bronze


 Performance Score Components:
 Sales/Hr 25% Upsells 20% Rating 25% Tables 15%
 Discipline 10% Trend 5%

 Click any name for 8-metric drill-through + Discipline
 breakdown (radar chart)

```

**Key Feature:** Drill-through on click → 8 metrics + 5-component Discipline Score

---

## Visual 5: Tab 3 - Loyalty Loop Mockup

```

 LOYALTY LOOP [MTD ]



 NPS Score Repeat Lapsed VIPs
 +45 Rate 65% 12



 Patronage Funnel

 First Timers → Returning → Regular → VIP
 1,200 → 900 → 600 → 300
 (40%) → (30%) → (20%) → (10%)
 → → →



 Word Cloud Avg Check by Segment (Scatter)

 DELICIOUS High Spend VIPs
 service friendly High Sat
 SLOW food
 ATMOSPHERE Low Spend First Timers


```

**Action Items:** Call lapsed VIPs, address "SLOW" word, track NPS trend

---

## Visual 6: Discipline Score Breakdown (Radar Chart)

```
 Punctuality (25%)

 100%
 /\
 Early Outs / \ Shift Completion
 (20%) / \ (25%)
 / 92% \
 /________\
 / \
 Accuracy / \ Resolution
 (15%) / \ (15%)

```

**Example Staff:** Rina Wati
- Punctuality: 95% (always on time)
- No Early Outs: 100% (never leaves early)
- Shift Completion: 92% (1 absence this month)
- Order Accuracy: 98% (very few voids)
- Conflict Resolution: 85% (resolves 85% of complaints)

**Overall Discipline Score:** 93/100 (contributes 9.3 to Performance Score)

---

## Visual 7: Mobile Layout ("Floor Mode")

```

 F&B Dashboard


 Daily Progress:
 80%
 IDR 32M / IDR 40M


 Top 5 Staff:
 #1 Rina 92
 #2 Budi 87
 #3 Siti 85
 #4 Ahmad 82
 #5 Dewi 80

 Tonight's Bookings:
 18 tables

 Lapsed VIPs:
 12

 (Vertical scroll)
```

**Use Case:** Quick check between service periods

---

## Visual 8: Evolution Timeline

```
Phase 1: Initial Vision (Abstract)
"Let's track sales and staff performance"
 ↓
Phase 2: Comprehensive Catalog Created
 139 total metrics identified & documented
 Revenue(32): YTD, Forecast, waterfall, mix%, txns, growth
 Staff(51): Perf(6), Disc(5), drills(8), badges(7),
 team(5), peer(5), coaching(5), milestones(6), context(4)
 Customer(36): Funnel(4), retention(6), CLV(4),
 sentiment(8), feedback(4), journey(4), spend(4)
 Ops(20): Efficiency(4), capacity(4), profit(4),
 shift(3), quality(4), trend(1)
 ↓
Phase 3: Operational Core Prioritized
 Tab 1 (15): Gap to 12Bn, Run Rate, Today's Revenue,
 MTD %, Waterfall (5), Heatmap, Upsell %, Discount %,
 Weekly Comparison, Best Day, YoY Growth
 Tab 2 (14): Perf Score, Team Avg, Top Performer,
 Tier Badges, Late Alert, Complaints + 8 Drill-through
 Tab 3 (18): Funnel (4), NPS, Repeat %, Lapsed VIPs,
 Scatter, Word Cloud + 9 Drill-through
 ↓
 Critical Important Reference
 ↓
 TODAY: Ready to Build
```

---

## Visual 9: Implementation Roadmap

```
Week 1: Data Preparation
 Load CSVs / SQL views
 Set up data model (7 relationships)
 Create critical DAX measures

Week 2-3: Visual Build
 Tab 1: Command Center (6 visuals)
 Tab 2: Wolf Pack (leaderboard + drill-through)
 Tab 3: Loyalty Loop (funnel + NPS)

Week 4: Testing & Refinement
 AM user testing (real-world use)
 Mobile layout optimization
 Feedback incorporation

Week 5: Go-Live
 Cut over to production SQL
 Train 20 staff members
 Weekly monitoring begins
```

---

## Visual 10: Success Metrics Dashboard

```
Month 1 KPIs:
 Usage: > 5 days/week (AM checks dashboard)
 Coaching: ≥ 1 session/week using drill-through data
 Performance: Dashboard load time < 5 seconds

Month 3 KPIs:
 Correlation: Discipline Score ↔ Performance Score
 Revenue: Monthly gap closed faster than before
 Adoption: ≥ 2 requests for metrics from comprehensive catalog (139 available)

Month 6 KPIs:
 Revenue: Measurable run rate consistency improvement
 Staff: Reduced late count, improved order accuracy
 Customer: Increased VIP retention rate
```

---

## Usage Notes

**For Presentations:**
- Use Visual 1 (Three-Tier) in intro slides
- Use Visual 2 (Data Model) for technical audiences
- Use Visuals 3-5 (Tab Mockups) for product walkthroughs
- Use Visual 6 (Discipline Radar) to explain new Performance Score
- Use Visual 7 (Mobile) for user training
- Use Visuals 8-10 for project planning discussions

**Customization:**
- Replace "X hours" with actual estimates (22 hours total estimated)
- Add actual staff photos in Tab 2 mockup
- Apply dark mode theme: Navy #0f172a background + Electric Blue #3b82f6 accents (theme file available at `assets/themes/growth_theme.json`)
- Add company logo to header
- Adjust data refresh schedule (currently 4x daily, can be real-time)

---

**Next Steps:** Incorporate these visuals into PowerPoint/Keynote presentations for stakeholder meetings.
