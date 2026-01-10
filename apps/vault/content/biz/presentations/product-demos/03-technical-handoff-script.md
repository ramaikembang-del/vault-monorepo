# Technical Handoff Script (Q&A Format)
## F&B Growth Dashboard - Developer Onboarding

**Audience:** BI developers, data engineers
**Duration:** 30 minutes
**Format:** Technical Q&A

---

## Related Documents
- [[biz/presentations/product-demos/04-technical-handoff|Technical Handoff]]
- [[biz/presentations/presentations|Presentations Hub]]

---

## Opening (1 minute)

**You:** "Thanks for joining. You're the BI developer building this dashboard. I know you probably just got assigned this morning and you're wondering 'what am I building?' So let's start there."

---

## Q1: What am I building? (3 minutes)

**Them:** "Yeah, what's the scope?"

**You:** "Power BI dashboard, 3 tabs, about 6 visuals per tab. Nothing crazy. What makes this interesting is the data model and the Performance Score calculation."

**You (showing file structure):** "Everything's documented. You have 8 files in `/docs/` - specs, planning, deployment guide. But here's your cheat sheet:"

- **Build from this file:** `06-dashboard-implementation-plan.md` (what to build, ~25 metrics/tab)
- **DAX formulas here:** `03-technical data bp.md` (copy-paste ready)
- **Visual layouts here:** `07-ui-ux-design-specs.md` (mockups, colors, interactions)
- **Data setup here:** `DEPLOYMENT.md` (step-by-step first-time setup)

**Them:** "What's the difference between file 05 and file 06?"

**You:** "Good question. File 05 has ~150 total metrics - that's the full catalog for future expansion. File 06 is the filtered subset - the ~50 metrics we're building *now*. Think of file 05 as the backlog, file 06 as the sprint."

**Them:** "So I'm only building file 06?"

**You:** "Correct. But the data model supports file 05, so when users ask 'can we add X?', the structure is already there."

---

## Q2: Where's the data coming from? (4 minutes)

**Them:** "Okay, where do I get data?"

**You:** "Two options. Option A for testing, Option B for production."

###Option A: CSV Files (Testing)

**You:** "In `/data/`, there are 6 CSV files - about 17,000 sales records, 10,000 feedback entries, 7,300 staff hours. Run `python generate_dummy_data.py` if you want to regenerate them."

**Them:** "What fields are in there?"

**You (showing list):**
- `Sales_Data.csv` - TransactionID, TransactionDate, StaffID, IsVoid, OrderTimestamp, SettledTimestamp, IsReservation, DiscountAmount...
- `Feedback.csv` - NPS, ReviewText, ComplaintResolved, ResolutionMethod...
- `StaffHours.csv` - IsLate, IsEarlyOut, TotalHoursWorked...
- `Staff_Roster.csv` - MonthlyTarget, BonusThreshold...

**You:** "The key fields for file 06 are highlighted in the verification doc. Everything you need for the Performance Score and Discipline Score is there."

### Option B: SQL Views (Production)

**You:** "In `/src/sql/`, there are 4 SQL scripts. Run them on the SQL Server:"

1. `01_vw_PowerBI_Sales_Feed.sql` - 18 columns
2. `02_vw_PowerBI_Dim_Staff.sql` - 6 columns (just updated to include BonusThreshold)
3. `03_vw_PowerBI_Fact_Feedback.sql` - 15 columns
4. `04_vw_PowerBI_Fact_StaffHours.sql` - 11 columns

**You:** "Import these views into Power BI. Same field names as the CSVs."

**Them:** "Which should I use first?"

**You:** "CSVs. Get the dashboard working with dummy data, *then* switch to SQL. Easier to debug."

---

## Q3: What's the data model? (5 minutes)

**Them:** "How do these tables relate?"

**You (pulling up diagram):** "Star schema. 4 fact tables, 2 dimensions."

```
 Date (Dim)



Sales_Data Feedback StaffHours
 (Fact) (Fact) (Fact)



 Staff_Roster
 (Dim)
```

**You:** "7 relationships total:"

```
Sales_Data[StaffID] → Staff_Roster[StaffID] (Many-to-One)
Sales_Data[TransactionDate] → Date[Date] (Many-to-One)
Feedback[StaffID] → Staff_Roster[StaffID] (Many-to-One)
Feedback[TransactionDate] → Date[Date] (Many-to-One)
StaffHours[StaffID] → Staff_Roster[StaffID] (Many-to-One)
StaffHours[Date] → Date[Date] (Many-to-One)
Date[MonthStartDate] → Targets[MonthStartDate] (One-to-One, Both)
```

**Them:** "Why 'Both' on the last one?"

**You:** "We need to filter Date and see Targets, but also filter Targets and see Date. Bidirectional relationship."

**You:** "Oh, and mark the Date table as a Date Table. Required for time intelligence functions like TOTALYTD."

**Them:** "Got it. What if the relationships don't auto-create?"

**You:** "Create them manually. Model View → drag from one side to the other. Make sure cardinality is correct - most are Many-to-One."

---

## Q4: What DAX measures do I need? (7 minutes)

**Them:** "I see formulas in file 03. Which ones do I build first?"

**You:** "Start with the critical ones for Tab 1. Here's the priority:"

### Phase 1: Tab 1 Revenue Measures

**Them:** "Show me the simplest one."

**You:** "Target is hardcoded:"

```dax
Target Annual = 12000000000
```

**You:** "Done. Next:"

```dax
Actual Sales YTD = TOTALYTD(SUM(Sales_Data[GrossAmount]), 'Date'[Date])
```

**Them:** "TOTALYTD requires the Date table to be marked, right?"

**You:** "Exactly. If this errors, check that."

**You:** "Then the gap:"

```dax
Revenue Gap = [Target Annual] - [Actual Sales YTD]
```

**You:** "And the run rate:"

```dax
Required Daily Run Rate = DIVIDE([Revenue Gap], [Days Remaining], 0)
```

**Them:** "Where's Days Remaining?"

**You:** "Good catch. You need:"

```dax
Days Remaining =
CALCULATE(
 COUNTROWS('Date'),
 DATESBETWEEN('Date'[Date], TODAY(), DATE(YEAR(TODAY()),12,31))
)
```

**Them:** "Okay, so 5 measures for Tab 1?"

**You:** "Actually more like 10. You also need waterfall components (Base Sales, Reservation Revenue, etc.). Full list in file 03 Part 2.A."

### Phase 2: Tab 2 Performance Score (The Complex One)

**Them:** "This Performance Score... how complicated is it?"

**You:** "It's 6 components normalized and weighted. Let me show you one:"

```dax
Sales Per Hour =
DIVIDE(
 SUM(Sales_Data[GrossAmount]),
 SUM(StaffHours[TotalHoursWorked]),
 0
)
```

**You:** "That's simple. But then you need the team average for normalization:"

```dax
Team Avg Sales Per Hour =
CALCULATE(
 [Sales Per Hour],
 ALLSELECTED(Staff_Roster[StaffID])
)
```

**You:** "Then the component score:"

```dax
Sales Per Hour Score =
DIVIDE([Sales Per Hour], [Team Avg Sales Per Hour], 0) * 25
```

**You:** "Do that for all 6 components, add them up, you get Performance Score."

**Them:** "That's going to be like 30 measures."

**You:** "Yep. File 03 Part 2.B has them all. Copy-paste."

**Them:** "What about the Discipline Score? The one with 5 sub-components?"

**You:** "Same idea. Example - Punctuality:"

```dax
Punctuality Rate =
VAR TotalDays = COUNTROWS(StaffHours)
VAR LateDays = CALCULATE(COUNTROWS(StaffHours), StaffHours[IsLate] = 1)
RETURN 1 - DIVIDE(LateDays, TotalDays, 0)
```

**You:** "Then multiply by 0.25 (25% weight), add to the other 4 sub-components. Full formula in file 03."

**Them:** "Is there a measure dependency diagram?"

**You:** "Not formal, but logically: Base metrics → Normalized metrics → Component scores → Performance Score. Build bottom-up."

---

## Q5: How do I build the visuals? (5 minutes)

**Them:** "Once I have the measures, how do I lay out the visuals?"

**You:** "File 07 has mockups. But here's the quick version:"

**Tab 1:**
- 4 KPI cards at the top (Gap to 12Bn, Run Rate, Today's Revenue, MTD %)
- Waterfall chart (Revenue Build-Up)
- Matrix heatmap (Hour/Day revenue)

**Them:** "What type of visual for the waterfall?"

**You:** "Built-in Waterfall chart. X-axis: Category (Base, Reservations, Upsells, Discounts). Y-axis: Amount."

**Tab 2:**
- Header cards (Team Avg, Top Performer, Alert banners)
- Table for leaderboard (Rank, Name, Performance Score, Tier Badge)
- Drill-through page (8 metrics + radar chart)

**Them:** "How do I do the tier badges? Like the stars?"

**You:** "Calculated column in Staff_Roster:"

```dax
Tier Badge =
VAR Rank = RANKX(ALL(Staff_Roster), [Performance Score],, DESC)
RETURN
SWITCH(TRUE(),
 Rank <= 4, " Gold",
 Rank <= 14, " Silver",
 " Bronze"
)
```

**You:** "Use conditional formatting on the table visual."

**Tab 3:**
- Funnel chart (Patronage stages)
- KPI cards (NPS, Repeat Rate, Lapsed VIPs)
- Word cloud (custom visual, install from marketplace)
- Scatter plot (Avg Check by Segment)

**Them:** "Estimating hours for all this?"

**You:** "If DAX works first try? 20 hours. If you hit issues? 30. Budget 25."

---

## Q6: What are the common issues? (3 minutes)

**Them:** "What usually breaks?"

**You:** "Three things:"

**Issue 1: Blank Performance Score**
**Cause:** StaffHours relationship missing or wrong cardinality
**Fix:** Check Model View, verify Many-to-One from StaffHours[StaffID] to Staff_Roster[StaffID]

**Issue 2: IsVoid column not found**
**Cause:** Using old CSV without new fields
**Fix:** Re-run `generate_dummy_data.py`, reload CSVs

**Issue 3: TOTALYTD returns error**
**Cause:** Date table not marked
**Fix:** Right-click Date table → Mark as Date Table → select Date column

**Them:** "How do I test the Discipline Score without real data?"

**You:** "The dummy CSVs have it. Joko Susilo has high late count, Rina Wati has low. Check their Discipline Scores - Rina should be higher."

---

## Q7: What about mobile layout? (2 minutes)

**Them:** "File 06 mentions mobile. Do I need to build a separate version?"

**You:** "Yes and no. Power BI has mobile layout mode. Open it, rearrange visuals for vertical scroll. Don't just shrink the desktop version."

**You:** "For mobile:"
- Only show critical metrics (not important/reference)
- Use cards instead of tables
- Bigger fonts
- Vertical stack

**You:** "File 07 Section 2.B has the mobile spec. It's simpler than desktop - maybe 2 hours."

---

## Q8: When do I switch to SQL views? (2 minutes)

**Them:** "You said start with CSVs. When do I switch to SQL?"

**You:** "After Tab 1 and Tab 2 work with CSVs. Then:"

1. Run all 4 SQL scripts on the database
2. In Power BI: Get Data → SQL Server
3. Select the 4 views
4. Delete the CSV tables
5. Verify relationships still exist (same field names, should auto-map)
6. Test measures - should work identically

**Them:** "What if production SQL has different field names?"

**You:** "That's why we documented the views. The view standardizes the output. If the raw table is different, update the view SQL, not the Power BI side."

---

## Q9: What happens after I build it? (1 minute)

**Them:** "Once it's done, then what?"

**You:** "Week 3: AM user testing. They'll find bugs and request tweaks. Budget 5 hours for polish."

**You:** "Week 4: Production cutover (SQL views), schedule refresh (4x daily initially)."

**You:** "Week 5: Staff training. You're on standby in case anything breaks during go-live."

**You:** "After that: Maintenance mode. If they request a File 05 metric, you add it. Should be rare."

**Them:** "Do I own this forever?"

**You:** "You built it, you maintain it. But the AM owns feature requests. Product team prioritizes. Think of it as shared ownership."

---

## Closing: You're Ready (1 minute)

**You:** "Questions?"

**Them:** "Where do I start tomorrow?"

**You:** "Day 1:"
1. Clone the repo (or get the `/docs/` and `/data/` folders)
2. Open Power BI, import the 6 CSVs
3. Create the 7 relationships
4. Mark Date table
5. Create the first 5 measures for Tab 1
6. Build the 4 header cards

**You:** "By end of day 1, you should have working KPI cards. Everything else builds from there."

**Them:** "If I get stuck?"

**You:** "Check file 03 for DAX, file 07 for visuals, DEPLOYMENT.md for setup. If still stuck, ping me. I wrote all this, I can unstick you."

---

## Quick Reference

**File Map:**
- Build guide: `06-dashboard-implementation-plan.md`
- DAX formulas: `03-technical data bp.md` Part 2
- Visual layouts: `07-ui-ux-design-specs.md`
- Setup steps: `DEPLOYMENT.md`
- Full metrics: `05-metrics-specification.md` (backlog)

**Data:**
- CSVs: `/data/*.csv`
- SQL: `/src/sql/*.sql`
- Theme: `/assets/themes/growth_theme.json`

**Est. Hours:** 20-25 (critical path), 30 (with polish)

---

**Next:** Hands-on session - let's load CSVs together right now.
