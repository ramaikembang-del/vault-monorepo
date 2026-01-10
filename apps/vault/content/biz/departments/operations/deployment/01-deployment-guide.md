# Deployment Guide: F&B 12Bn Growth Dashboard

This guide explains how to assemble the assets created in this project into a working Power BI Dashboard.

## Implementation Scope

**This deployment implements:** 06-dashboard-implementation-plan.md (~25 metrics/tab for daily AM use)

**Future expansion available in:** 05-metrics-specification.md (~150 total metrics)

---

## 1. Prerequisites

* **Software:** Microsoft Power BI Desktop (Latest Version).
* **Documentation:**
 * 06-dashboard-implementation-plan.md - Primary build guide
 * 07-ui-ux-design-specs.md - Visual layouts
 * 03-technical data bp.md - DAX formulas
* **Data Files:**
 * `src/sql/*.sql` (4 SQL views) **OR**
 * `data/*.csv` (6 CSV files for testing)
 * `assets/themes/growth_theme.json` (UI theme)

---

## 2. Step 1: Generate Dummy Data (Testing)

Run the data generator to create test CSVs with all required fields:

```powershell
cd data
python generate_dummy_data.py
```

**Generated Files (with updated fields):**
| File | Records | Key Fields Added |
|------|---------|------------------|
| Sales_Data.csv | ~17,000 | `IsVoid`, `OrderTimestamp`, `SettledTimestamp`, `IsReservation`, `DiscountAmount` |
| Feedback.csv | ~10,000 | `ComplaintResolved`, `ResolutionMethod`, `ReviewText` |
| StaffHours.csv | ~7,300 | `IsLate`, `IsEarlyOut`, `TotalHoursWorked` |
| Staff_Roster.csv | 20 | `MonthlyTarget`, `BonusThreshold`, `TierLevel` |
| Targets.csv | 24 | Monthly revenue targets for 2025-2025 |
| Date.csv | 730 | Date dimension with holidays |

---

## 3. Step 2: Load Data into Power BI

### Option A: Testing with CSV Files (Recommended First)

1. Open Power BI Desktop
2. Click **Get Data** > **Folder**
3. Browse to the `data/` folder
4. Click **Combine & Transform Data**
5. Power Query will open:
 * Verify **headers** are correct (not "Column1")
 * Verify **data types**: Dates ( Numbers (1.2), Text (ABC)
 * **IMPORTANT**: Check that new fields are present:
 - Sales_Data: `IsVoid` (0/1)
 - Feedback: `ComplaintResolved` (Yes/No/No complaint)
 - StaffHours: `IsLate`, `IsEarlyOut` (0/1)
6. Click **Close & Apply**

### Option B: Production (SQL Server)

1. Run all SQL scripts in `/src/sql/` on your database:
 ```sql
 -- Execute in order:
 01_vw_PowerBI_Sales_Feed.sql -- Now includes IsVoid, timestamps
 02_vw_PowerBI_Dim_Staff.sql -- Now includes BonusThreshold
 03_vw_PowerBI_Fact_Feedback.sql -- Now includes ComplaintResolved
 04_vw_PowerBI_Fact_StaffHours.sql -- Now includes IsLate, IsEarlyOut
 ```
2. In Power BI: **Get Data** > **SQL Server**
3. Connect and import all 4 views

---

## 4. Step 3: Configure Data Model

Go to **Model View** and create these relationships:

### Core Relationships (Required)
| From Table | From Column | To Table | To Column | Cardinality | Direction |
|------------|-------------|----------|-----------|-------------|-----------|
| Sales_Data | StaffID | Staff_Roster | StaffID | Many-to-One | Single |
| Sales_Data | TransactionDate | Date | Date | Many-to-One | Single |
| Sales_Data | CustomerID | (Self) | CustomerID | Many-to-One | Single |
| Feedback | StaffID | Staff_Roster | StaffID | Many-to-One | Single |
| Feedback | TransactionDate | Date | Date | Many-to-One | Single |
| StaffHours | StaffID | Staff_Roster | StaffID | Many-to-One | Single |
| StaffHours | Date | Date | Date | Many-to-One | Single |
| Date | MonthStartDate | Targets | MonthStartDate | One-to-One | Both |

### Mark Date Table
* Right-click `Date` table > **Mark as Date Table**
* Select `Date` column as the date column

---

## 5. Step 4: Create DAX Measures

Reference: 03-technical data bp.md Part 2

### Critical Measures (Build First - File 06)

**Tab 1: Revenue**
```dax
Target Annual = 12000000000
Actual Sales YTD = TOTALYTD(SUM(Sales_Data[GrossAmount]), 'Date'[Date])
Revenue Gap = [Target Annual] - [Actual Sales YTD]
Required Daily Run Rate = DIVIDE([Revenue Gap], [Days Remaining], 0)
```

**Tab 2: Staff (Performance Score)**
```dax
Performance Score =
 ([Sales Per Hour] / [Team Avg Sales Per Hour] * 25) +
 ([Upsell Count] / [Team Max Upsells] * 20) +
 ([Avg Customer Rating] / 5 * 25) +
 ([Tables Per Hour] / [Team Avg Tables] * 15) +
 ([Discipline Score] * 10) +
 ([WoW Sales Trend] * 5)
```

**Discipline Score (5 Sub-Components)**
```dax
Discipline Score =
 ([Punctuality Rate] * 0.25) + -- From StaffHours.IsLate
 ([Full Shift Rate] * 0.20) + -- From StaffHours.IsEarlyOut
 ([Attendance Rate] * 0.25) + -- From COUNT(StaffHours)
 ([Order Accuracy] * 0.15) + -- From Sales_Data.IsVoid
 ([Resolution Rate] * 0.15) -- From Feedback.ComplaintResolved
```

**Tab 3: Customer**
```dax
NPS Score =
VAR Promoters = CALCULATE(COUNTROWS(Feedback), Feedback[NPS] >= 9)
VAR Detractors = CALCULATE(COUNTROWS(Feedback), Feedback[NPS] <= 6)
VAR Total = COUNTROWS(Feedback)
RETURN DIVIDE(Promoters - Detractors, Total, 0) * 100
```

---

## 6. Step 5: Apply Design Theme

1. Go to **View** tab > **Themes** > **Browse for themes**
2. Select `assets/themes/growth_theme.json`
3. Result: Dark Navy background + Electric Blue visuals

---

## 7. Step 6: Build Visuals (File 06 Priority)

Reference: 07-ui-ux-design-specs.md

### Build Order (Per File 06):

**Phase 1 - Critical Visuals (
1. Tab 1: Header KPI cards (4), Waterfall, Heatmap
2. Tab 2: Performance Score leaderboard, Team avg cards
3. Tab 3: Patronage Funnel, NPS Score card

**Phase 2 - Important Visuals (
1. Tab 1: Tooltips on Waterfall
2. Tab 2: Drill-through card with 8 metrics + Discipline radar
3. Tab 3: Word cloud, Scatter plot

**Phase 3 - Polish**
1. Mobile layouts
2. Drill-through navigation
3. Empty state handling

---

## 8. Deployment Checklist

### Data Verification
- [ ] All 6 CSV files loaded (or 4 SQL views)
- [ ] **New fields present:** IsVoid, ComplaintResolved, IsLate, IsEarlyOut, BonusThreshold
- [ ] Date table marked correctly
- [ ] All relationships created (7 total)

### DAX Measures
- [ ] Critical Tab 1 measures (4)
- [ ] Performance Score implemented (6 components)
- [ ] Discipline Score implemented (5 sub-components)
- [ ] NPS Score working

### Visuals (File 06)
- [ ] Tab 1: 6 main visuals
- [ ] Tab 2: Leaderboard + drill-through
- [ ] Tab 3: Funnel + NPS + scatter

### Testing
- [ ] Filter by date range works
- [ ] Drill-through on staff name works
- [ ] Mobile layout renders correctly
- [ ] All metrics show data (no blanks)

---

## 9. Common Issues & Fixes

### "Blank values in Performance Score"
**Cause:** Missing StaffHours data or relationship not created
**Fix:** Verify StaffHours.csv loaded and relationship to Staff_Roster exists

### "IsVoid column not found"
**Cause:** Using old CSV/SQL without new fields
**Fix:** Re-run `generate_dummy_data.py` or update SQL views

### "Discipline Score shows 0 for everyone"
**Cause:** Missing ComplaintResolved or IsLate data
**Fix:** Verify Feedback.csv and StaffHours.csv have the new columns

---

## 10. Next Steps After Deployment

1. **Test with AM:** Have the Assistant Manager use dashboard for 1 week
2. **Gather Feedback:** Which metrics are most useful? Any missing?
3. **Expand (Optional):** Refer to 05-metrics-specification.md for 100+ additional metrics
4. **Production Data:** Replace CSVs with live SQL views from POS system

---

## Documentation Reference

| Document | Purpose | When To Use |
|----------|---------|-------------|
| 06-dashboard-implementation-plan.md | What to build (~25 metrics/tab) | **Primary build guide** |
| 07-ui-ux-design-specs.md | How to display | Visual design reference |
| 03-technical data bp.md | SQL + DAX formulas | Technical implementation |
| 05-metrics-specification.md | Full catalog (~150 metrics) | Future expansion requests |

---

**Related Documents:**
- [[biz/departments/operations/deployment/02-go-to-market-checklist|Go-to-Market Checklist]] - Launch checklist
- [[biz/departments/operations/operations|Operations Hub]] - All operations procedures
- [[biz/departments/it/it|IT Department]] - Infrastructure support

