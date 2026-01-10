# Daily Operations Guide - Option A
## Free Local Setup with Automated Updates

**Version:** 1.0
**Last Updated:** 2025-12-23
**Deployment:** Local SQL Server + Power BI Desktop (Free)

---

## Quick Overview

**Your Chosen Setup:**
- **Cost:** $0/month
- **Users:** 1 (AM on local PC)
- **Update Frequency:** Daily (automated overnight)
- **Manual Effort:** 1 minute/day (click Refresh)

**Daily Data Flow:**
```
11 PM  ->  POS exports CSV (automated)
6 AM  ->  Task Scheduler imports to SQL (automated)
7 AM  ->  You open Power BI  ->  Click Refresh (manual)
[x] Dashboard ready!
```

---

## Table of Contents
1. [[#one-time-setup|One-Time Setup]]
2. [[#daily-operations|Daily Operations]]
3. [[#weekly-maintenance|Weekly Maintenance]]
4. [[#troubleshooting|Troubleshooting]]

---

## One-Time Setup

### Step 1: Install Software (30 minutes)

**A. Install SQL Server Express (Free)**
```
1. Download: [SQL Server Downloads](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
2. Choose: SQL Server 2022 Express
3. Run installer  ->  Basic installation  ->  Accept defaults
4. Wait 10-15 minutes
```

**B. Install SQL Server Management Studio (Free)**
```
1. Download: [SSMS](https://aka.ms/ssmsfullsetup)
2. Run installer  ->  Accept defaults
3. Restart computer if prompted
```

**C. Install Power BI Desktop (Free)**
```
1. Download: [Power BI Desktop](https://aka.ms/pbidesktop)
2. Run installer  ->  Accept defaults
```

---

### Step 2: Create Database (15 minutes)

**A. Open SSMS**
```
1. Start SQL Server Management Studio
2. Server name: localhost\SQLEXPRESS
3. Authentication: Windows Authentication
4. Click Connect
```

**B. Create Database**
```sql
-- Copy-paste this entire block into SSMS query window
CREATE DATABASE FnB_Analytics;
GO

USE FnB_Analytics;
GO

-- Create all tables (see SQL_SERVER_GUIDE.md for full scripts)
-- Or run the provided setup script:
```

**Run setup script:**
```
File  ->  Open  ->  C:\PWBI FnB Growth\src\sql\00_create_tables.sql
Click Execute (F5)
Wait for "Commands completed successfully"
```

---

### Step 3: Configure POS Export (20 minutes)

**Configure your POS to export daily:**

**Example folders to create:**
```
C:\POS-Exports\Daily\  -> POS saves here every night
C:\POS-Exports\Archive\  -> Old files moved here
```

**Required exports (4 CSV files):**
1. **Sales_Data.csv** - All transactions
2. **StaffHours.csv** - Clock-in/out times
3. **Feedback.csv** - Customer reviews
4. **Bookings.csv** - Reservations

**POS configuration:**
```
Schedule: Daily at 11:00 PM
Format: CSV
Destination: C:\POS-Exports\Daily\
Overwrite: Yes (or use date stamps)
```

---

### Step 4: Setup Automation (30 minutes)

**A. Create SQL import script**

Save this as: `C:\PWBI FnB Growth\scripts\import_daily_data.sql`

```sql
-- Copy from SQL_DAILY_MAINTENANCE.md section "Step 2"
-- Or use the provided file in /scripts/ folder
```

**B. Create PowerShell script**

Save this as: `C:\PWBI FnB Growth\scripts\run_daily_import.ps1`

```powershell
# Copy from SQL_DAILY_MAINTENANCE.md section "Step 3"
# Or use the provided file in /scripts/ folder
```

**C. Schedule with Task Scheduler**

```
1. Windows Key  ->  Search "Task Scheduler"  ->  Open
2. Actions  ->  Create Basic Task
3. Name: "Daily Dashboard Data Import"
4. Trigger: Daily at 6:00 AM
5. Action: Start a program
 - Program: powershell.exe
 - Arguments: -ExecutionPolicy Bypass -File "C:\PWBI FnB Growth\scripts\run_daily_import.ps1"
6. Finish  ->  Enter your Windows password
7. Right-click task  ->  Run (test it)
```

**Verify it worked:**
```
Check log: C:\PWBI FnB Growth\logs\import_2025-12-23.log
Should say: "Import completed successfully!"
```

---

### Step 5: Connect Power BI to SQL (15 minutes)

**A. Open Power BI Desktop**

**B. Get Data from SQL Server**
```
1. Home  ->  Get Data  ->  SQL Server
2. Server: localhost\SQLEXPRESS
3. Database: FnB_Analytics
4. Data Connectivity mode: Import (not DirectQuery)
5. Click OK
```

**C. Select Views (not tables)**
```
Check these 5 views:
[x] vw_PowerBI_Sales_Feed
[x] vw_PowerBI_Dim_Staff
[x] vw_PowerBI_Fact_Feedback
[x] vw_PowerBI_Fact_StaffHours
[x] vw_PowerBI_Fact_Bookings

Also select:
[x] Date (table)
[x] Targets (table)

Click Load
```

**D. Create Relationships**
```
Modeling  ->  Manage Relationships  ->  New

1. Date[Date]  -> ->  Sales_Feed[TransactionDate]
2. Date[Date]  -> ->  Feedback[TransactionDate]
3. Date[Date]  -> ->  StaffHours[WorkDate]
4. Date[Date]  -> ->  Bookings[ScheduledDate]
5. Staff[StaffID]  -> ->  Sales_Feed[StaffID]

All set to: One to Many (1:*)
```

**E. Save Dashboard**
```
File  ->  Save As  ->  C:\PWBI FnB Growth\dashboard.pbix
```

---

## Daily Operations

### Morning Routine (7:00 AM - 2 minutes)

**What Happened Overnight (Automatic):**
- [x] 11 PM: POS exported yesterday's data
- [x] 6 AM: Task Scheduler imported to SQL
- [x] 6:05 AM: SQL Server has latest data

**What You Do (Manual):**

**Step 1: Open Dashboard**
```
Double-click: C:\PWBI FnB Growth\dashboard.pbix
Wait 10 seconds for it to load
```

**Step 2: Refresh Data**
```
Home ribbon  ->  Refresh button (or press F5)
Wait 30-60 seconds
```

**Step 3: Verify Data Updated**
```
Check footer: "Last Refreshed: 2025-12-23 7:15 AM"
Tab 1  ->  Check "Today's Revenue" = $0 (it's 7 AM, no sales yet)
Tab 1  ->  Check "Gap to Target" updated with yesterday's sales
```

**Step 4: Use Dashboard**
```
Navigate tabs, review metrics (5-10 minutes)
Save before closing (Ctrl+S)
```

**Total Time:** 1-2 minutes (refresh) + 5-10 minutes (review)

---

### If Automation Fails (Manual Fallback)

**Symptoms:**
- Power BI shows old data after refresh
- Log file missing or shows errors

**Manual Process (15 minutes):**

**Step 1: Check CSV Files**
```
Navigate to: C:\POS-Exports\Daily\
Verify all 4 files exist and modified today:
- Sales_Data.csv
- StaffHours.csv
- Feedback.csv
- Bookings.csv
```

**Step 2: Run SQL Import Manually**
```
1. Open SSMS
2. Connect to: localhost\SQLEXPRESS
3. File  ->  Open  ->  import_daily_data.sql
4. Click Execute (F5)
5. Wait 1-2 minutes
6. Check messages: "Daily import complete!"
```

**Step 3: Refresh Power BI**
```
Open dashboard.pbix  ->  Click Refresh  ->  Done
```

---

## Weekly Maintenance

### Sunday (15 minutes)

**1. Review Logs**
```
Folder: C:\PWBI FnB Growth\logs\
Check last 7 days: import_2025-12-XX.log
Look for errors (red text or "ERROR:")
```

**2. Archive Old CSVs**
```
Move files older than 30 days from:
 C:\POS-Exports\Daily\
To:
 C:\POS-Exports\Archive\2025-12\
```

**3. Backup Dashboard**
```
Copy: C:\PWBI FnB Growth\dashboard.pbix
To: C:\PWBI FnB Growth\backups\dashboard_2025-12-23.pbix
Keep 4 weekly backups (delete older)
```

**4. Backup Database (Optional but Recommended)**
```sql
-- Run in SSMS
BACKUP DATABASE FnB_Analytics
TO DISK = 'C:\Backups\FnB_Analytics_2025-12-23.bak'
WITH FORMAT, INIT;
```

---

## Troubleshooting

### Issue 1: Power BI Shows Old Data

**Check:**
```
1. Open SSMS  ->  Query:
 SELECT MAX(date_time) FROM pos_orders;

 Should show yesterday or today
 If shows last week  ->  Import failed

2. Check log: C:\PWBI FnB Growth\logs\import_YYYY-MM-DD.log
 Look for "ERROR" messages
```

**Fix:**
- If CSV missing  ->  Check POS export settings
- If import error  ->  Run manual import (see above)

---

### Issue 2: Task Scheduler Says "Running" Forever

**Check:**
```
Task Scheduler  ->  Task  ->  History tab
Look for errors
```

**Fix:**
```
1. Right-click task  ->  Properties
2. General  ->  "Run with highest privileges" [x]
3. Actions  ->  Edit  ->  Verify script path correct
4. Test: Right-click  ->  Run
```

---

### Issue 3: SQL Error "Cannot bulk load"

**Cause:** File path wrong or permissions issue

**Fix:**
```
1. Verify file exists:
 Dir C:\POS-Exports\Daily\Sales_Data.csv

2. Grant SQL permission to folder:
 - Right-click C:\POS-Exports
 - Properties  ->  Security  ->  Edit
 - Add: "NT SERVICE\MSSQL$SQLEXPRESS"
 - Permissions: [x] Read
```

---

### Issue 4: Dashboard Refresh Takes Too Long (>5 minutes)

**Cause:** Too much historical data

**Fix:**
```sql
-- Delete data older than 2 years
DELETE FROM pos_orders
WHERE date_time < DATEADD(YEAR, -2, GETDATE());

DELETE FROM pos_order_items
WHERE order_id NOT IN (SELECT order_id FROM pos_orders);

-- Rebuild indexes
UPDATE STATISTICS pos_orders;
UPDATE STATISTICS pos_order_items;
```

---

## Quick Reference

### Daily Checklist
- [ ] 7 AM - Open Power BI
- [ ] Click Refresh (wait 30-60 sec)
- [ ] Verify "Last Refreshed" timestamp
- [ ] Review dashboard (~10 min)

### Weekly Checklist
- [ ] Sunday - Check logs for errors
- [ ] Archive old CSV files
- [ ] Backup dashboard.pbix
- [ ] Backup SQL database

### Monthly Checklist
- [ ] Delete data >2 years old (keeps database small)
- [ ] Review automation (any manual interventions needed?)
- [ ] Test restore from backup

---

## Performance Benchmarks

**Expected Performance:**
- CSV Import (SQL): 1-2 minutes for 50K rows
- Power BI Refresh: 30-60 seconds
- Dashboard Load: 5-10 seconds
- Visual Interactions: Instant (<1 second)

**If Slower:**
- Add indexes to frequently queried columns
- Archive old data (>2 years)
- Check disk space (need 10% free)

---

## Upgrade Path (Future)

**When You Outgrow This Setup:**

**Scenario 1: Need to share with 2-3 people**
 ->  Upgrade to Power BI Pro ($30/month for 3 users)
 ->  Publish to Power BI Service
 ->  Share via web browser
 ->  Same SQL backend (no changes needed)

**Scenario 2: Need more frequent updates (>1x/day)**
 ->  Configure POS to export every 4 hours
 ->  Task Scheduler runs 6 AM, 10 AM, 2 PM, 6 PM
 ->  Click Refresh when needed
 ->  Still free!

**Scenario 3: Need true real-time**
 ->  See REALTIME_OPTIONS.md
 ->  Likely overkill for daily operations

---

## Files Quick Reference

**Scripts:**
- `C:\PWBI FnB Growth\scripts\import_daily_data.sql` - SQL import script
- `C:\PWBI FnB Growth\scripts\run_daily_import.ps1` - PowerShell wrapper

**Logs:**
- `C:\PWBI FnB Growth\logs\import_YYYY-MM-DD.log` - Daily import logs

**Dashboard:**
- `C:\PWBI FnB Growth\dashboard.pbix` - Main dashboard file
- `C:\PWBI FnB Growth\backups\` - Weekly backup copies

**Data:**
- `C:\POS-Exports\Daily\` - Fresh CSV files from POS
- `C:\POS-Exports\Archive\` - Old CSV files (backup)

---

## Support Resources

**For detailed guides, see:**
- `SQL_SERVER_GUIDE.md` - SQL basics and query examples
- `SQL_DAILY_MAINTENANCE.md` - Full automation scripts with all options
- `TIME_INTELLIGENCE_SETUP.md` - Date filters and DAX formulas
- `DATA_MAINTENANCE.md` - All deployment options (you chose Option 1)

**Common Commands:**

**Check if automation ran today:**
```powershell
Get-Content "C:\PWBI FnB Growth\logs\import_$(Get-Date -Format 'yyyy-MM-dd').log"
```

**Manually run import:**
```powershell
C:\PWBI FnB Growth\scripts\run_daily_import.ps1
```

**Check SQL data freshness:**
```sql
SELECT MAX(date_time) FROM pos_orders;
```

---

## Summary

[x] **What's Automated:**
- POS exports CSV (11 PM)
- SQL imports CSV (6 AM)

[x] **What's Manual:**
- Open Power BI (7 AM)
- Click Refresh (30 seconds)

[x] **Total Daily Effort:** 1-2 minutes

[x] **Monthly Cost:** $0

[x] **Complexity:** Low (one-time setup, then routine)

---

**This is your complete operational guide. Everything you need for daily use is here.**

**Next Steps:**
1. Complete one-time setup (Steps 1-5 above)
2. Test for 1 week (manual fallback if needed)
3. Once stable, it runs on autopilot

**Document Version:** 1.0
**Last Updated:** 2025-12-23
**Next Review:** 2026-01-23


---

**Related Documents:**
- [[products/templates/templates|Product Overview]] - Main product documentation

