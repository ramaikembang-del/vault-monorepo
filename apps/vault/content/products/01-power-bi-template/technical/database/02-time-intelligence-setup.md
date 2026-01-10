# Power BI Time Intelligence Setup Guide
## Complete DAX Formulas & Filter Configuration

**Version:** 1.0
**Last Updated:** 2025-12-23
**For:** F&B Growth Dashboard

---

## Table of Contents
1. [[#date-table-creation|Date Table Creation]]
2. [[#time-intelligence-measures|Time Intelligence Measures]]
3. [[#filter-setup|Filter Setup]]
4. [[#visual-configuration|Visual Configuration]]
5. [[#testing--validation|Testing & Validation]]

---

## Excel Template Users: Date Intelligence Already Configured!

**If you're using the Excel Template Bundle:**
- **Daily-Sales.xlsx** already has correct date formatting (YYYY-MM-DD)
- Date column auto-imports to Power BI as Date type
- No manual date parsing needed!

**Just ensure:**
1. Fill dates in Daily-Sales.xlsx (dropdowns prevent errors)
2. Save Excel file
3. Power BI -> Refresh
4. Done! Time intelligence works automatically

**This guide is for:** Custom SQL implementations or advanced date table customization.

---

## Date Table Creation

### Step 1: Create Date Table (Power BI Desktop)

**Method 1: DAX Calculated Table (Recommended)**

Open Power BI Desktop -> Modeling -> New Table -> Paste this:

```dax
Date =
VAR StartDate = DATE(2023, 1, 1) -- Adjust to your earliest transaction date
VAR EndDate = DATE(2026, 12, 31) -- Future-proof with 2+ years ahead

RETURN
ADDCOLUMNS(
 CALENDAR(StartDate, EndDate),

 -- Year columns
 "Year", YEAR([Date]),
 "YearLabel", "CY " & YEAR([Date]),
 "IsCurrentYear", IF(YEAR([Date]) = YEAR(TODAY()), "Yes", "No"),

 -- Quarter columns
 "Quarter", QUARTER([Date]),
 "QuarterLabel", "Q" & QUARTER([Date]) & " " & YEAR([Date]),
 "QuarterShort", "Q" & QUARTER([Date]),
 "StartOfQuarter", DATE(YEAR([Date]), (QUARTER([Date])-1)*3+1, 1),

 -- Month columns
 "MonthNumber", MONTH([Date]),
 "MonthName", FORMAT([Date], "MMMM"),
 "MonthShort", FORMAT([Date], "MMM"),
 "MonthYear", FORMAT([Date], "MMM YYYY"),
 "MonthYearSort", YEAR([Date]) * 100 + MONTH([Date]), -- For sorting
 "StartOfMonth", DATE(YEAR([Date]), MONTH([Date]), 1),
 "IsCurrentMonth", IF(
 YEAR([Date]) = YEAR(TODAY()) && MONTH([Date]) = MONTH(TODAY()),
 "Yes",
 "No"
 ),

 -- Week columns
 "WeekNumber", WEEKNUM([Date], 2), -- Week starts Monday
 "WeekLabel", "W" & WEEKNUM([Date], 2) & " " & YEAR([Date]),
 "StartOfWeek", [Date] - WEEKDAY([Date], 2) + 1,

 -- Day columns
 "DayOfMonth", DAY([Date]),
 "DayOfWeek", WEEKDAY([Date], 2), -- 1=Monday, 7=Sunday
 "DayName", FORMAT([Date], "dddd"),
 "DayShort", FORMAT([Date], "ddd"),
 "IsWeekend", IF(WEEKDAY([Date]) IN {1, 7}, "Yes", "No"),

 -- Relative date flags
 "IsToday", IF([Date] = TODAY(), "Yes", "No"),
 "IsYesterday", IF([Date] = TODAY() - 1, "Yes", "No"),

 -- Fiscal adjustments (if fiscal year ‰ calendar year)
 -- Example: Fiscal year starts July 1
 "FiscalYear", IF(MONTH([Date]) >= 7, YEAR([Date]) + 1, YEAR([Date])),
 "FiscalQuarter", QUARTER(DATE(YEAR([Date]), MONTH([Date]) - 6, 1)),

 -- Business days (exclude weekends)
 "IsBusinessDay", IF(WEEKDAY([Date]) IN {1, 7}, "No", "Yes"),

 -- Offset columns (for comparisons)
 "DateKey", YEAR([Date]) * 10000 + MONTH([Date]) * 100 + DAY([Date]),
 "RelativeDayOffset", DATEDIFF(TODAY(), [Date], DAY),

 -- Helpful labels for filters
 "PeriodLabel",
 SWITCH(
 TRUE(),
 [Date] = TODAY(), "Today",
 [Date] = TODAY() - 1, "Yesterday",
 [Date] >= TODAY() - 7 && [Date] < TODAY(), "Last 7 Days",
 [Date] >= TODAY() - 30 && [Date] < TODAY(), "Last 30 Days",
 [Date] >= DATE(YEAR(TODAY()), MONTH(TODAY()), 1), "This Month",
 "Historical"
 )
)
```

**Result:** You now have a Date table with 1,461 rows (4 years x 365 days)

---

### Step 2: Mark as Date Table

**Critical Step:**
```
1. Click on "Date" table in Fields pane
2. Table Tools ribbon -> Mark as Date Table
3. Dialog appears -> Choose Date column: [Date]
4. Click OK
```

**Why this matters:** Enables time intelligence functions like TOTALYTD, SAMEPERIODLASTYEAR, etc.

---

### Step 3: Create Relationships

**Connect Date table to your fact tables:**

```
Modeling -> Manage Relationships -> New

Relationship 1:
- From: Date[Date]
- To: Sales_Data[TransactionDate]
- Cardinality: One to Many (1:*)
- Cross filter direction: Single
- Make this active: œ"

Relationship 2:
- From: Date[Date]
- To: Feedback[TransactionDate]
- Cardinality: One to Many (1:*)
- Cross filter direction: Single
- Make this active: œ"

Relationship 3:
- From: Date[Date]
- To: StaffHours[WorkDate]
- Cardinality: One to Many (1:*)
- Cross filter direction: Single
- Make this active: œ"

Relationship 4:
- From: Date[Date]
- To: Bookings[ScheduledDate]
- Cardinality: One to Many (1:*)
- Cross filter direction: Single
- Make this active: œ"
```

---

## Time Intelligence Measures

### Base Measures (Create First)

**Create a new folder:** Right-click in Fields -> New Folder -> "Time Intelligence"

#### 1. Total Revenue (Base Measure)

```dax
Total Revenue =
SUM(Sales_Data[NetAmount])
```

#### 2. Total Transactions

```dax
Total Transactions =
COUNTROWS(Sales_Data)
```

#### 3. Average Check Size

```dax
Avg Check Size =
DIVIDE(
 [Total Revenue],
 DISTINCTCOUNT(Sales_Data[TransactionID]),
 0
)
```

---

### Year-to-Date (YTD) Measures

#### 4. YTD Revenue

```dax
YTD Revenue =
TOTALYTD(
 [Total Revenue],
 'Date'[Date]
)
```

**Usage:** Card visual showing "Revenue from Jan 1 to Today"

#### 5. YTD vs Target

```dax
YTD vs Target =
VAR YTDActual = [YTD Revenue]
VAR YTDTarget =
 CALCULATE(
 SUM(Targets[MonthlyTarget]),
 DATESYTD('Date'[Date])
 )
RETURN
DIVIDE(YTDActual, YTDTarget, 0) - 1 -- Returns % above/below target
```

**Display:** "+15%" or "-8%"

#### 6. YTD vs Last Year

```dax
YTD Revenue Last Year =
CALCULATE(
 [YTD Revenue],
 SAMEPERIODLASTYEAR('Date'[Date])
)

YTD YoY Growth % =
VAR CurrentYTD = [YTD Revenue]
VAR LastYearYTD = [YTD Revenue Last Year]
RETURN
DIVIDE(CurrentYTD - LastYearYTD, LastYearYTD, 0)
```

---

### Month-to-Date (MTD) Measures

#### 7. MTD Revenue

```dax
MTD Revenue =
TOTALMTD(
 [Total Revenue],
 'Date'[Date]
)
```

**Usage:** "How are we doing this month so far?"

#### 8. MTD vs Target

```dax
MTD vs Target % =
VAR MTDActual = [MTD Revenue]
VAR CurrentMonth = MONTH(TODAY())
VAR CurrentYear = YEAR(TODAY())
VAR MTDTarget =
 CALCULATE(
 SUM(Targets[MonthlyTarget]),
 Targets[Year] = CurrentYear,
 Targets[Month] = CurrentMonth
 )
RETURN
DIVIDE(MTDActual, MTDTarget, 0)
```

**Display:** "85% of monthly target achieved"

---

### Comparative Measures

#### 9. Revenue Last Month

```dax
Revenue Last Month =
CALCULATE(
 [Total Revenue],
 DATEADD('Date'[Date], -1, MONTH)
)
```

#### 10. MoM Growth %

```dax
MoM Growth % =
VAR CurrentMonth = [Total Revenue]
VAR LastMonth = [Revenue Last Month]
RETURN
DIVIDE(CurrentMonth - LastMonth, LastMonth, 0)
```

#### 11. Revenue Same Month Last Year

```dax
Revenue Same Month Last Year =
CALCULATE(
 [Total Revenue],
 SAMEPERIODLASTYEAR('Date'[Date])
)

YoY Growth % =
DIVIDE(
 [Total Revenue] - [Revenue Same Month Last Year],
 [Revenue Same Month Last Year],
 0
)
```

---

### Rolling Period Measures

#### 12. Last 7 Days Revenue

```dax
L7D Revenue =
CALCULATE(
 [Total Revenue],
 DATESINPERIOD('Date'[Date], LASTDATE('Date'[Date]), -7, DAY)
)
```

#### 13. Last 30 Days Revenue

```dax
L30D Revenue =
CALCULATE(
 [Total Revenue],
 DATESINPERIOD('Date'[Date], LASTDATE('Date'[Date]), -30, DAY)
)
```

#### 14. Rolling 7-Day Average

```dax
7-Day Avg Revenue =
VAR Last7Days =
 CALCULATETABLE(
 VALUES('Date'[Date]),
 DATESINPERIOD('Date'[Date], LASTDATE('Date'[Date]), -7, DAY)
 )
VAR DailyRevenues =
 ADDCOLUMNS(
 Last7Days,
 "DailyRevenue", [Total Revenue]
 )
RETURN
AVERAGEX(DailyRevenues, [DailyRevenue])
```

---

### Special Period Measures

#### 15. Today's Revenue

```dax
Today Revenue =
CALCULATE(
 [Total Revenue],
 'Date'[Date] = TODAY()
)
```

#### 16. Yesterday's Revenue

```dax
Yesterday Revenue =
CALCULATE(
 [Total Revenue],
 'Date'[Date] = TODAY() - 1
)
```

#### 17. This Week Revenue

```dax
This Week Revenue =
CALCULATE(
 [Total Revenue],
 DATESINTHISWEEK('Date'[Date])
)

-- Custom: Week starts Monday
This Week Revenue (Mon Start) =
VAR StartOfWeek = TODAY() - WEEKDAY(TODAY(), 2) + 1
VAR EndOfWeek = StartOfWeek + 6
RETURN
CALCULATE(
 [Total Revenue],
 'Date'[Date] >= StartOfWeek && 'Date'[Date] <= EndOfWeek
)
```

---

### Gap & Pacing Measures (Critical for Dashboard)

#### 18. Gap to 12Bn Target

```dax
Gap to Target =
VAR AnnualTarget = 12000000000 -- 12 billion IDR
VAR YTDActual = [YTD Revenue]
RETURN
AnnualTarget - YTDActual
```

#### 19. Required Daily Run Rate

```dax
Required Daily Run Rate =
VAR AnnualTarget = 12000000000
VAR YTDActual = [YTD Revenue]
VAR RemainingGap = AnnualTarget - YTDActual
VAR Today = TODAY()
VAR EndOfYear = DATE(YEAR(Today), 12, 31)
VAR DaysRemaining = DATEDIFF(Today, EndOfYear, DAY)
RETURN
DIVIDE(RemainingGap, DaysRemaining, 0)
```

**Usage:** "We need IDR 11M per day to hit 12Bn"

#### 20. Are We On Track?

```dax
On Track Status =
VAR DaysElapsed = DATEDIFF(DATE(YEAR(TODAY()), 1, 1), TODAY(), DAY)
VAR TotalDaysInYear = 365
VAR ExpectedProgressPct = DaysElapsed / TotalDaysInYear
VAR ActualProgressPct = DIVIDE([YTD Revenue], 12000000000, 0)
VAR Status =
 SWITCH(
 TRUE(),
 ActualProgressPct >= ExpectedProgressPct * 1.05, " Ahead",
 ActualProgressPct >= ExpectedProgressPct * 0.95, " On Track",
 " Behind"
 )
RETURN
Status
```

---

### Dynamic Labels (for Visuals)

#### 21. Selected Period Label

```dax
Selected Period =
VAR MinDate = MIN('Date'[Date])
VAR MaxDate = MAX('Date'[Date])
VAR DaysDiff = DATEDIFF(MinDate, MaxDate, DAY)
RETURN
SWITCH(
 TRUE(),
 MinDate = BLANK(), "No Date Selected",
 DaysDiff = 0, FORMAT(MinDate, "MMM DD, YYYY"),
 DaysDiff <= 7, "Last " & DaysDiff + 1 & " Days",
 MONTH(MinDate) = MONTH(MaxDate) && YEAR(MinDate) = YEAR(MaxDate),
 FORMAT(MinDate, "MMMM YYYY"),
 FORMAT(MinDate, "MMM DD") & " - " & FORMAT(MaxDate, "MMM DD, YYYY")
)
```

**Usage:** Dynamic chart title shows selected period

#### 22. Dynamic KPI Title

```dax
Revenue KPI Title =
"Revenue - " & [Selected Period]
```

---

## Filter Setup

### Tab 1: Command Center - Filter Configuration

**Page-Level Filters:**

```
Step 1: Filters Pane -> Page Level Filters
Step 2: Add Field: Date[Date]
Step 3: Filter Type: Relative date
Step 4: Set to: "is in the last 30 days"
Step 5: Apply filter

Optional: Add slicer for user override
```

**Visual Slicer (Date Range):**

```
1. Insert -> Slicer
2. Add: Date[Date]
3. Format -> Slicer Settings
4. Style: Between (range)
5. Show: Relative Date -> On
6. Position: Top of page
7. Size: Full width (to fit dropdown options)
```

---

### Quick Filter Buttons Setup

**Create 4 Bookmarks for Quick Filters:**

**Bookmark 1: "Today"**
```
1. Set page filter: Date[Date] = TODAY()
2. View -> Bookmarks -> Add
3. Name: "Today Filter"
4. Update: Data only (not visuals)
```

**Bookmark 2: "This Week"**
```
1. Set page filter: Date[Date] in last 7 days
2. Add bookmark: "This Week Filter"
```

**Bookmark 3: "This Month"**
```
1. Set page filter: Date[Date] in this month
2. Add bookmark: "This Month Filter"
```

**Bookmark 4: "YTD"**
```
1. Set page filter: Date[Date] year to date
2. Add bookmark: "YTD Filter"
```

**Create Buttons:**
```
1. Insert -> Buttons -> Blank (insert 4 times)
2. Format each button:
 - Text: "Today", "This Week", "This Month", "YTD"
 - Action: Bookmark -> Link to respective bookmark
 - Tooltip: "Click to filter to [period]"
3. Arrange horizontally below main title
```

---

### Tab 2: Wolf Pack - Filter Configuration

**Default Filter: This Month**

```
Page-level filter:
- Field: Date[Date]
- Type: Relative date
- Value: is in this month
- Lock: No (allow users to change)
```

**Slicer: Month/Quarter Selector**

```
1. Insert -> Slicer
2. Add: Date[MonthYear] (from Date table)
3. Format: List (vertical dropdown)
4. Multi-select: Off (single month only)
5. Default selection: Current month
```

---

### Tab 3: Loyalty Loop - Filter Configuration

**Default Filter: Last 30 Days**

```
Page-level filter:
- Field: Date[Date]
- Type: Relative date
- Value: is in the last 30 days
```

**Why 30 days?** NPS trends work better with rolling windows vs calendar months

---

## Visual Configuration

### Example 1: Revenue Trend Line Chart

**Setup:**
```
Visual: Line Chart
X-Axis: Date[Date] (hierarchy: Year -> Month -> Day)
Y-Axis: [Total Revenue]
Legend: (none)
Tooltip:
 - Date[Date]
 - [Total Revenue]
 - [Revenue Same Month Last Year]
 - [YoY Growth %]
```

**Dynamic Title:**
```
Title Text: = [Revenue KPI Title]
(Links to DAX measure created earlier)
```

---

### Example 2: MTD vs Target Card

**Setup:**
```
Visual: KPI Card
Value: [MTD Revenue]
Target: [MTD Target] (create measure: SUM(Targets[MonthlyTarget]) for current month)
Trend Axis: Date[Date]

Format:
- Value: IDR #,##0,,.0"Bn"
- Target: Show as percentage: [MTD vs Target %]
- Color: Green if >= 95%, Red if < 90%
```

---

### Example 3: YTD Progress Gauge

**Setup:**
```
Visual: Gauge
Value: [YTD Revenue]
Maximum: 12000000000 (12Bn target)
Target: [YTD Expected] (create measure based on days elapsed)

Format:
- Display units: Billions
- Color:
 - Red: 0-80%
 - Yellow: 80-95%
 - Green: 95-110%
```

**YTD Expected Measure:**
```dax
YTD Expected =
VAR AnnualTarget = 12000000000
VAR DaysElapsed = DATEDIFF(DATE(YEAR(TODAY()), 1, 1), TODAY(), DAY)
VAR TotalDaysInYear = 365
RETURN
AnnualTarget * DaysElapsed / TotalDaysInYear
```

---

### Example 4: Last 7 Days Revenue Table

**Setup:**
```
Visual: Table
Columns:
- Date[DayName]
- Date[Date]
- [Total Revenue]
- [Revenue Same Day Last Week]
- [WoW Change %]

Filters:
- Date[Date] in last 7 days

Sort by: Date[Date] descending
Format: Conditional formatting on WoW Change %
```

---

## Testing & Validation

### Test Checklist

**1. Date Table Validation**

```dax
-- Test: Check for gaps in date range
Date Gaps =
VAR DateTable = ALL('Date'[Date])
VAR MinDate = MINX(DateTable, 'Date'[Date])
VAR MaxDate = MAXX(DateTable, 'Date'[Date])
VAR ExpectedRows = DATEDIFF(MinDate, MaxDate, DAY) + 1
VAR ActualRows = COUNTROWS(DateTable)
RETURN
IF(ExpectedRows = ActualRows, "œ" No gaps", "œ- Gaps found")
```

**Expected Result:** "œ" No gaps"

---

**2. Relationship Validation**

```
Check:
1. Open Model View
2. Verify all Date relationships show "1" on Date side, "*" on fact side
3. Verify relationships are active (solid line, not dotted)
4. Verify filter direction is correct (arrows point to fact tables)
```

---

**3. Time Intelligence Test**

Create a **test table visual:**

```
Columns:
- Test: "YTD Revenue"
- [YTD Revenue]
- Test: "MTD Revenue"
- [MTD Revenue]
- Test: "L7D Revenue"
- [L7D Revenue]

Expected:
- YTD >= MTD >= L7D (should be decreasing)
- All values > 0 (if you have historical data)
```

---

**4. Filter Test**

```
1. Add date slicer
2. Select "Today" -> Today Revenue should show value, YTD should be cumulative
3. Select "This Month" -> MTD and This Month Revenue should match
4. Select "Last Year" -> YoY measures should show N/A or 0
```

---

**5. Performance Test**

```
View -> Performance Analyzer -> Start Recording

Actions:
1. Change date filter to "Last 30 days"
2. Change to "YTD"
3. Change to "Last 7 days"

Target:
- Each filter change < 2 seconds
- If slower: Optimize DAX measures, add aggregations
```

---

## Common Issues & Fixes

### Issue 1: "YTD Revenue" shows same value as "Total Revenue"

**Cause:** Date table not marked as date table

**Fix:**
```
1. Select Date table
2. Table Tools -> Mark as Date Table
3. Choose Date column
4. Refresh visuals
```

---

### Issue 2: Time intelligence functions return blank

**Cause:** Relationship not active or missing

**Fix:**
```
1. Model View
2. Verify Date[Date] †-> Sales_Data[TransactionDate]
3. Double-click relationship -> Make Active
4. Set Cross filter direction: Single
```

---

### Issue 3: Filter doesn't affect visuals

**Cause:** Visual is using field from different table

**Fix:**
```
All visuals should filter by Date[Date], not Sales_Data[TransactionDate]
Replace any Sales_Data[TransactionDate] in filters with Date[Date]
```

---

### Issue 4: "Last Year" measures show nothing

**Cause:** No data from last year in dataset

**Fix:**
```dax
-- Add error handling to YoY measures
YoY Growth % =
VAR CurrentRevenue = [Total Revenue]
VAR LastYearRevenue = [Revenue Same Month Last Year]
RETURN
IF(
 ISBLANK(LastYearRevenue) || LastYearRevenue = 0,
 BLANK(), -- Show nothing instead of error
 DIVIDE(CurrentRevenue - LastYearRevenue, LastYearRevenue, 0)
)
```

---

## Quick Reference: All Measures

**Copy this to a text file and import into Power BI:**

```
Measure Name	DAX Formula
Total Revenue	SUM(Sales_Data[NetAmount])
YTD Revenue	TOTALYTD([Total Revenue], 'Date'[Date])
MTD Revenue	TOTALMTD([Total Revenue], 'Date'[Date])
L7D Revenue	CALCULATE([Total Revenue], DATESINPERIOD('Date'[Date], LASTDATE('Date'[Date]), -7, DAY))
L30D Revenue	CALCULATE([Total Revenue], DATESINPERIOD('Date'[Date], LASTDATE('Date'[Date]), -30, DAY))
Revenue Last Month	CALCULATE([Total Revenue], DATEADD('Date'[Date], -1, MONTH))
Revenue Last Year	CALCULATE([Total Revenue], SAMEPERIODLASTYEAR('Date'[Date]))
YoY Growth %	DIVIDE([Total Revenue] - [Revenue Last Year], [Revenue Last Year], 0)
MoM Growth %	DIVIDE([Total Revenue] - [Revenue Last Month], [Revenue Last Month], 0)
Gap to Target	12000000000 - [YTD Revenue]
Required Daily Run Rate	DIVIDE([Gap to Target], DATEDIFF(TODAY(), DATE(YEAR(TODAY()), 12, 31), DAY), 0)
Selected Period	[See full DAX in section 21]
```

---

## Next Steps

**Week 1: Setup**
- [ ] Create Date table with provided DAX
- [ ] Mark as Date table
- [ ] Create relationships to all fact tables
- [ ] Test: Verify no gaps, relationships active

**Week 2: Base Measures**
- [ ] Create Total Revenue measure
- [ ] Create YTD, MTD, L7D measures
- [ ] Test: Values make sense (YTD > MTD > L7D)

**Week 3: Visuals**
- [ ] Add date slicer to each tab
- [ ] Create quick filter buttons (Today, Week, Month, YTD)
- [ ] Set default filters per tab
- [ ] Test: Filters work correctly

**Week 4: Polish**
- [ ] Add dynamic titles
- [ ] Create comparison measures (YoY, MoM)
- [ ] Add conditional formatting
- [ ] Performance test & optimize

---

**Questions or Issues?**
- Check "Common Issues & Fixes" section first
- Test each measure individually before combining
- Use DAX Studio for complex measure debugging
- Reference: **DAX Guide** for DAX function documentation

**Document Version:** 1.0
**Last Updated:** 2025-12-23
**Next Review:** 2026-01-23


---

**Related Documents:**
- [[products/01-power-bi-template/01-power-bi-template|Product Overview]] - Main product documentation
- [[products/01-power-bi-template/technical/technical|Technical Hub]] - All technical documentation


