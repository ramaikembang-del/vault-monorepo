# Troubleshooting Knowledge Base - Complete F&B Data Ecosystem

**Product:** A1 - Power BI Dashboard + Excel Templates + Google Sheets
**Purpose:** Self-service solutions for common issues
**Audience:** All tiers (Essentials 30-50 metrics / Professional 50-100 metrics / Enterprise 100-150 metrics)

---

## Table of Contents

1. [[#excel-template-issues|**Excel Template Issues (START HERE!)**]]
2. [[#data-refresh-issues|Data Refresh Issues]]
3. [[#blank-or-zero-values|Blank or Zero Values]]
4. [[#performance--speed-issues|Performance & Speed Issues]]
5. [[#visual-display-issues|Visual Display Issues]]
6. [[#data-connection-errors|Data Connection Errors]]
7. [[#dax-measure-errors|DAX Measure Errors]]
8. [[#publishing--sharing-issues|Publishing & Sharing Issues]]
9. [[#general-power-bi-issues|General Power BI Issues]]

---

## Excel Template Issues (START HERE!)

### Issue 0.1: "Excel Template Won't Import to Power BI"

**Symptom:** Click Refresh in Power BI -> Error: "Cannot find table" or "File not found"

**Cause:** Excel file not saved, or Power BI looking in wrong location

**Solution:**

**Step 1: Save Excel File**
1. Open Daily-Sales.xlsx (or other template)
2. Make sure you filled some data
3. Press **Ctrl+S** to save
4. Close Excel file (important!)

**Step 2: Check Power BI Connection**
1. Power BI Desktop -> Transform Data
2. Right-click "Daily-Sales" query -> Source
3. Verify path: Should match where you saved Excel file
4. If wrong, click folder icon -> Browse to correct location
5. Close & Apply

**Prevention:** Save Excel to fixed location: `C:\PowerBI_Data\` and don't move files

---

### Issue 0.2: "Dropdown Not Working in Excel"

**Symptom:** Click cell in Product/Staff/Payment column -> No dropdown list appears

**Solution:**

**Quick Fix:**
1. Click the cell with dropdown
2. Look for small **dropdown arrow** () on right side of cell
3. Click the arrow (not cell center)
4. List should appear

**If Still Not Working:**
1. Right-click cell -> Data Validation
2. Check "List" source is not empty
3. If broken: Download fresh template from bundle
4. Copy your data to new template

**Common Mistake:** Typing instead of using dropdown -> Creates invalid entries

---

### Issue 0.3: "Date Shows as ###### or Wrong Format"

**Symptom:** Date column shows "######" or dates appear as "44927" (number)

**Cause:** Column too narrow or wrong date format

**Solution:**

**Quick Fix (Column Width):**
1. Double-click column edge (between column letters)
2. Column auto-resizes to fit dates

**Format Fix:**
1. Select date column
2. Right-click -> Format Cells -> Date
3. Choose: **YYYY-MM-DD** (2025-12-29)
4. Click OK

**Prevention:** Excel templates have correct format pre-set - don't change column formatting!

---

### Issue 0.4: "Formula Shows #DIV/0! Error in Food-Cost.xlsx"

**Symptom:** Traffic light or profit margin shows **#DIV/0!**

**Cause:** Missing ingredient cost or quantity (dividing by zero)

**Solution:**

1. Find row with error
2. Check **ALL cells** in that row have values:
 - Ingredient name: Not blank
 - Cost: Number (not "Rp 5,000" - just "5000")
 - Quantity: Number greater than 0
3. Fill missing cells
4. Formula recalculates automatically

**Example Fix:**
```
Before (Error):
Tomato | [blank] | 500 | #DIV/0!

After (Working):
Tomato | 15000 | 500 | Rp 30
```

---

### Issue 0.5: "Google Sheets Formula Broken (#REF! Error)"

**Symptom:** Open Google Sheets version -> Formulas show **#REF!** or **#VALUE!**

**Cause:** Some Excel formulas don't work in Google Sheets

**Solution:**

**Option 1: Use Provided Google Sheets Version (Recommended)**
- We provide separate Google Sheets versions (tested & working)
- Use make-a-copy links from bundle
- Don't convert Excel -> Sheets yourself

**Option 2: If You Converted Excel to Sheets:**
- Email support@[company].com for fixed Sheets template
- Include: Which template (Daily-Sales, Food-Cost, etc.)
- We'll send corrected version within 48h (Tier 2/3 Professional/Enterprise)

**Why This Happens:** Excel and Google Sheets use different formula syntax

---

### Issue 0.6: "Excel Says 'File is Read-Only' Can't Save"

**Symptom:** Yellow banner: "This file is read-only"

**Cause:** File opened from OneDrive/Dropbox sync folder

**Solution:**

1. File -> Save As
2. Save to local folder: `C:\PowerBI_Data\`
3. Close read-only copy
4. Open newly saved local copy
5. Now you can edit and save

**Prevention:** Always work on local copy, sync to cloud only after finishing

---

### Issue 0.7: "Power BI Shows Old Data (Not Today's Sales)"

**Symptom:** Filled today's sales in Excel, Power BI still shows yesterday

**Cause:** Forgot to click Refresh button in Power BI

**Solution:**

1. Save Excel file (Ctrl+S)
2. Open Power BI Dashboard
3. Home tab -> **Refresh** button (big circular arrow)
4. Wait 30 seconds
5. Dashboard updates with today's data

**Daily Workflow:**
- Morning: Fill Excel templates (5 min)
- Then: Click Refresh in Power BI (30 sec)
- Done!

---

### Issue 0.8: "Can't Find Excel Templates in Bundle"

**Symptom:** Downloaded bundle, can't find Excel files

**Solution:**

1. Check Downloads folder for ZIP file
2. Right-click ZIP -> Extract All
3. Open extracted folder
4. Excel templates are in `/Excel-Templates/` subfolder:
 - Daily-Sales.xlsx
 - Food-Cost.xlsx
 - Staff-Log.xlsx
 - Outlet-Summary.xlsx (Tier 2/3 Professional/Enterprise only)

**If Still Missing:** Email support with purchase confirmation, we'll resend

---

## Data Refresh Issues

### Issue 1: "Data Source Error" When Clicking Refresh

**Symptom:**
```
Unable to connect to data source.
Error: Could not find file 'C:\Data\Sales_Data.csv'
```

**Cause:** File path changed (CSV moved to different folder) or file deleted

**Solution:**

**Option A: Update File Path (If CSV Moved)**

1. Click **Transform Data** (top ribbon)
2. Power Query Editor opens
3. Click on **Sales_Data** query (left sidebar)
4. Right-click -> **Advanced Editor**
5. Find line: `Source = Csv.Document(File.Contents("C:\Data\Sales_Data.csv")...`
6. Update path to new location: `"C:\NewFolder\Sales_Data.csv"`
7. Click **Done** -> **Close & Apply**
8. Try Refresh again

**Option B: Reconnect to Folder (Best Practice)**

1. Transform Data -> Right-click Sales_Data -> Delete
2. Get Data -> Folder -> Browse to CSV location
3. Combine & Transform
4. Close & Apply

**Prevention:** Always keep CSV files in the same folder. Don't move them.

---

### Issue 2: Refresh Button Grayed Out / Disabled

**Symptom:** Can't click "Refresh" button in Home tab

**Cause:** You're in "Edit Mode" or no data source connected

**Solution:**

1. Check if you're viewing the report (not editing)
 - Click **Reading View** (bottom right corner)
 - Refresh button should be enabled now

2. If still grayed out:
 - File -> Options -> Data Load
 - Uncheck "Enable background data" temporarily
 - Restart Power BI Desktop
 - Re-enable after

---

### Issue 3: Refresh Takes Forever (>10 Minutes)

**Symptom:** Refresh starts but never completes, or takes 15-30 minutes

**Cause:** Large dataset (100K+ rows) or inefficient queries

**Solution:**

**Quick Fix:**
1. Transform Data -> View -> Query Settings
2. Find any "Merged Queries" with large tables
3. Right-click -> Properties -> Enable Load = OFF (if not needed for visual)
4. Close & Apply -> Try Refresh

**Long-Term Fix (Reduce Data Size):**
1. Filter to last 12 months only (not 5 years of data)
 - Transform Data -> Date table -> Filter -> Last 365 days
2. Remove unnecessary columns
 - Select only columns you need (not all 50 columns from POS)
3. Aggregate at higher level if possible
 - Daily summary instead of transaction-level (if you have millions of rows)

**Expected Refresh Time:**
- 1 year data (50K rows): 30-60 seconds
- 2 years (100K rows): 1-2 minutes
- 5 years (500K+ rows): 5-10 minutes (consider archiving old data)

---

## Blank or Zero Values

### Issue 4: All Metrics Showing Rp 0 or Blank

**Symptom:** Dashboard loads but all KPI cards show Rp 0, charts are empty

**Cause 1:** Date filter set to future dates or no data in range

**Solution:**
1. Check date slicer (usually top-right of dashboard)
2. Reset to "All Dates" or "Last 30 Days"
3. If no slicer visible:
 - Click anywhere on report canvas
 - Filters pane (right side) -> Check Date filters
 - Clear any filters that exclude all data

**Cause 2:** Data didn't load (refresh failed silently)

**Solution:**
1. View -> Data View (left sidebar icon)
2. Check if Sales_Data table has rows (should see 1000s of transactions)
3. If empty:
 - Transform Data -> Check source query
 - Re-import data (Get Data -> reconnect)

---

### Issue 5: Specific Metric Shows "#ERROR" or "Infinity"

**Symptom:** Most metrics work, but one KPI card shows `#ERROR` or `1.#INF`

**Cause:** Division by zero in DAX formula (e.g., calculating percentage when denominator is 0)

**Example:**
```dax
Food Cost % = DIVIDE([Food Cost], [Total Revenue], 0)
```

If Total Revenue = 0 (no sales that day), formula returns 0 (third parameter = alternate result).

**Solution:**

1. Hover over metric -> See DAX formula in tooltip
2. Check if formula has `DIVIDE(X, Y)` or `X / Y`
3. If using `/` (not DIVIDE):
 - Edit DAX measure
 - Replace `[Food Cost] / [Total Revenue]` with `DIVIDE([Food Cost], [Total Revenue], 0)`
 - This handles division by zero gracefully

**Prevention:** Always use `DIVIDE(numerator, denominator, 0)` instead of `/`

---

### Issue 6: Staff Performance Score Shows Blank for Some Staff

**Symptom:** Leaderboard shows 15 staff, but 5 are blank (no score)

**Cause:** Missing data for those staff (no sales records, no staff hours logged)

**Solution:**

**Check Data Coverage:**
1. Data View -> StaffHours table
2. Filter by StaffID -> Do all 20 staff have entries?
3. If missing:
 - Add dummy row for missing staff (0 hours worked = valid data point)
 - Or filter leaderboard to only show staff with data

**DAX Fix (Show 0 Instead of Blank):**
```dax
Performance Score =
VAR Score = [Calculated Performance Score]
RETURN IF(ISBLANK(Score), 0, Score)
```

This converts blank to 0 (staff appears in leaderboard but ranked last).

---

## Performance & Speed Issues

### Issue 7: Dashboard Takes 30+ Seconds to Load

**Symptom:** Opening .pbix file is slow, switching tabs is laggy

**Cause:** Large data model (>500 MB) or too many visuals per page

**Solution:**

**Reduce File Size:**
1. File -> Options -> Data Load -> Import relationships from data sources on first load = OFF
2. Transform Data -> Remove unused columns (you don't need all 50 columns from POS)
3. Archive old data:
 - Keep only last 18-24 months (not 5 years)
 - Historical analysis: Separate .pbix file

**Optimize Visuals:**
1. Remove redundant visuals (do you really need 15 charts on one page?)
2. Use slicers wisely (too many slicers = slow)
3. Avoid "Top N" visuals with N>100 (use Top 10 instead of Top 500)

**Target Performance:**
- File open: <10 seconds
- Tab switch: <2 seconds
- Refresh: <2 minutes (for 1 year data)

---

### Issue 8: Power BI Desktop Crashes When Opening File

**Symptom:** Double-click .pbix -> Power BI opens -> Crashes immediately

**Cause:** Corrupted file or incompatible Power BI version

**Solution:**

**Option A: Repair Power BI Desktop**
1. Windows Settings -> Apps -> Power BI Desktop -> Uninstall
2. Download latest version from **Power BI Desktop**
3. Reinstall
4. Try opening file again

**Option B: Recover from Backup**
1. Power BI auto-saves to: `C:\Users\[YourName]\AppData\Local\Microsoft\Power BI Desktop\TempSaves\`
2. Look for .pbix files with recent timestamps
3. Copy to safe location and open

**Option C: Rebuild from Template**
1. If file is corrupted beyond repair:
 - Request fresh template from support (Tier 2/3 Professional/Enterprise)
 - Re-import your data
 - Reconfigure customizations

**Prevention:** Backup .pbix file weekly to Google Drive / Dropbox

---

## Visual Display Issues

### Issue 9: Charts Are Overlapping or Cut Off

**Symptom:** Text labels overlap, chart legend is truncated, KPI card values cut off

**Cause:** Screen resolution mismatch (dashboard designed for 1920x1080, you're viewing on 1366x768)

**Solution:**

**Option A: Adjust Visual Size (Quick Fix)**
1. Edit mode (not Reading View)
2. Click visual -> Drag corners to resize
3. Format -> General -> Size -> Adjust Width/Height
4. Repeat for all affected visuals

**Option B: Change Report Page Size**
1. View -> Page View -> Fit to Page (instead of Actual Size)
2. This auto-scales dashboard to your screen

**Option C: Design for Mobile (If Viewing on Tablet/Phone)**
1. View -> Mobile Layout
2. Drag visuals to mobile canvas
3. Optimize for vertical scroll

---

### Issue 10: Colors Don't Match Brand (Want to Change Theme)

**Symptom:** Dashboard uses default blue, you want your restaurant's red/gold theme

**Solution:**

**Option A: Apply Theme (Easy)**
1. View -> Themes -> Browse for Themes
2. Upload .json theme file (we can provide custom theme)
3. All visuals update to new colors automatically

**Option B: Manual Color Change (Tedious)**
1. Select visual -> Format -> Colors
2. Choose primary color for bars/charts
3. Repeat for all visuals (not recommended-use theme instead)

**Request Custom Theme:**
- Tier 2/3 (Professional/Enterprise) customers: Email support with brand colors (Hex codes)
- We'll create .json theme file for you (1-2 day turnaround)

---

## Data Connection Errors

### Issue 11: "Privacy Levels" Error When Combining Data Sources

**Symptom:**
```
Formula.Firewall: Query 'Sales_Data' references other queries or steps.
Please rebuild this data combination.
```

**Cause:** Power BI privacy settings blocking data combination (security feature)

**Solution:**

1. File -> Options -> Privacy
2. Set Privacy Level to **"Always ignore Privacy Level settings"**
 - Warning: Only do this if all data sources are internal (your own POS data)
 - Don't use if combining external data (public APIs + internal data)
3. Close & Apply
4. Refresh data

**Alternative (More Secure):**
1. Transform Data -> Right-click on each query -> Privacy
2. Set all queries to "Organizational" (if same company) or "Public" (if ok to combine)

---

### Issue 12: SQL Server Connection Timeout

**Symptom:**
```
Connection timeout expired.
Could not connect to server 'localhost\SQLEXPRESS'
```

**Cause:** SQL Server not running or firewall blocking

**Solution:**

**Check SQL Server Status:**
1. Windows Search -> "Services"
2. Find "SQL Server (SQLEXPRESS)"
3. Status = Running? If not, right-click -> Start

**Check Firewall:**
1. Windows Firewall -> Allow an app
2. Find "SQL Server" -> Allow Private + Public networks

**Verify Connection String:**
1. Transform Data -> Sales_Data query -> Advanced Editor
2. Check server name: `Source = Sql.Database("localhost\SQLEXPRESS", "YourDatabase")`
3. If wrong, update to correct server name

**Test Connection:**
1. Open SQL Server Management Studio (SSMS)
2. Connect to localhost\SQLEXPRESS
3. If SSMS can't connect, issue is with SQL Server (not Power BI)

---

## DAX Measure Errors

### Issue 13: "Circular Dependency Detected" Error

**Symptom:**
```
A circular dependency was detected: [Measure A] -> [Measure B] -> [Measure A]
```

**Cause:** Measure references itself (directly or indirectly)

**Example of Circular Dependency:**
```dax
Measure A = [Measure B] + 100
Measure B = [Measure A] * 2 This creates circular dependency
```

**Solution:**

1. Identify which measures are involved (error message lists them)
2. Review DAX formulas:
 - Measure A should not reference Measure B if B references A
3. Restructure logic:
 - Create intermediate measure (Measure C) that both A and B reference

**Prevention:** Plan measure dependencies (draw diagram before writing DAX)

---

### Issue 14: "Cannot Find Table or Column" Error

**Symptom:**
```
The column 'Sales_Data'[TotalAmount] cannot be found.
```

**Cause:** Column was renamed or deleted from source table

**Solution:**

1. Data View -> Check Sales_Data table columns
2. Is "TotalAmount" there? If not:
 - Check if column was renamed (e.g., "TotalAmount" -> "GrossAmount")
 - Update all DAX measures to use new column name
3. Find/Replace across all measures:
 - Transform Data -> Advanced Editor -> Ctrl+H
 - Find: `Sales_Data[TotalAmount]`
 - Replace: `Sales_Data[GrossAmount]`

**Prevention:** Don't rename columns after dashboard is built (or update all references)

---

## Publishing & Sharing Issues

### Issue 15: Can't Publish to Power BI Service (No Publish Button)

**Symptom:** Home tab -> Publish button is grayed out

**Cause:** Not signed into Power BI Service account

**Solution:**

1. Top-right corner -> Click "Sign In"
2. Enter Microsoft account (same as Power BI Service login)
3. Sign in
4. Publish button should now be enabled

**If Still Grayed Out:**
- File -> Account -> Make sure you're signed in
- Check internet connection (publishing requires online)
- Restart Power BI Desktop

---

### Issue 16: "This Workbook Uses Features Not Supported in Power BI Service"

**Symptom:** Publish succeeds but dashboard doesn't work in browser

**Cause:** Using features only available in Desktop (e.g., Python visuals, R scripts)

**Solution:**

1. Remove unsupported visuals:
 - Python/R visuals -> Replace with native Power BI visuals
 - Custom visuals (not from Microsoft marketplace) -> Find alternative
2. Publish again

**Check Supported Features:**
**Power BI Premium Features**

---

## General Power BI Issues

### Issue 17: Power BI Won't Install (Windows Error)

**Symptom:** Download Power BI Desktop installer -> Run -> Error: "Installation failed"

**Cause:** Windows version too old (need Windows 10 or later) or .NET Framework missing

**Solution:**

1. Check Windows version:
 - Windows Key -> Settings -> System -> About
 - Need: Windows 10 version 1809 or later
2. Update Windows if needed:
 - Settings -> Update & Security -> Check for Updates
3. Install .NET Framework 4.8:
 - Download from Microsoft: **.NET Framework 4.8**
4. Retry Power BI installation

---

### Issue 18: File Opens in "Read-Only" Mode (Can't Edit)

**Symptom:** Open .pbix file -> Yellow banner: "This file is read-only"

**Cause:** File is opened from OneDrive/Dropbox sync folder or network drive

**Solution:**

**Option A: Save to Local Drive**
1. File -> Save As
2. Save to local folder: `C:\Users\[YourName]\Documents\PowerBI\`
3. Close read-only copy -> Open local copy

**Option B: Check File Permissions**
1. Right-click .pbix file -> Properties -> Security
2. Make sure your user account has "Full Control"
3. If not, click Edit -> Grant permissions

**Prevention:** Always work on local copy, sync to cloud only for backup

---

## When to Escalate to Support

**Try self-service troubleshooting first (this KB).**

**Escalate to support if:**
- Issue not listed here
- Solution doesn't work after 2-3 attempts
- Data corruption suspected (file won't open)
- Critical issue (dashboard down, customer can't access)

**How to Submit Support Ticket:**

**Tier 1 (Essentials - 30-50 metrics - setup support via Product 02):**
- Email: support@[company].com
- Subject: "[A1 Support] [Issue Type] - [Your Company Name]"
- Include:
 - Screenshot of error message
 - Steps to reproduce
 - What you already tried (from this KB)

**Tier 2 (Professional - 50-100 metrics - extended support via Product 02):**
- Same as Tier 1, priority response (<48h)

**Tier 3 (Enterprise - 100-150 metrics - managed support via Product 02):****
- WhatsApp: [Phone Number] (<24h response)
- Email: support@[company].com (mark URGENT if critical)

---

## Support Response SLA

| Tier | Channel | Response Time | Resolution Time |
|------|---------|---------------|-----------------|
| Tier 1 | Email | <72h | Best effort |
| Tier 2 | Email | <48h | 3-5 days |
| Tier 3 | WhatsApp/Email | <24h | 1-2 days |

**Business Hours:** Mon-Fri 9 AM - 6 PM WIB | Sat 9 AM - 1 PM WIB

---

## Preventive Maintenance Tips

**To Avoid Future Issues:**

1. **Backup Weekly:**
 - Save .pbix file to Google Drive / OneDrive
 - Keep 3-4 versions (in case current one corrupts)

2. **Update Power BI Desktop Monthly:**
 - Microsoft releases updates every month
 - New features + bug fixes

3. **Monitor File Size:**
 - If .pbix exceeds 500 MB, archive old data
 - Target: <200 MB for fast performance

4. **Test Refresh Before Month-End:**
 - Don't wait until you NEED the dashboard to discover refresh is broken
 - Test weekly: Click Refresh -> Verify data updates

5. **Document Customizations:**
 - If you modify DAX measures, write notes
 - Future you will thank you when troubleshooting

---

## Module-Specific Troubleshooting (Tier 2/3)

### Multi-Outlet Operations Module

**Issue:** Outlet consolidation not working
**Solution:**
- Verify each outlet folder has correct structure: `C:\PowerBI_Data\Outlet1\`, `Outlet2\`, etc.
- Check Outlet-Summary.xlsx formulas reference correct paths
- Ensure outlet names match exactly (case-sensitive)

**Issue:** One outlet's data missing from consolidated view
**Solution:**
- Open Outlet-Summary.xlsx -> Check if that outlet's Excel file is listed
- Verify outlet's Excel template is saved in correct location
- Refresh Outlet-Summary.xlsx (Data -> Refresh All)

### Menu Optimization Module

**Issue:** Recipe costs not calculating
**Solution:**
- Verify Recipe-Cost.xlsx has all ingredient prices filled
- Check for #DIV/0! errors (missing quantity or price)
- Ensure portion sizes are in same unit (grams vs kg)

**Issue:** BCG Matrix showing all items as "Dogs"
**Solution:**
- Need at least 2 months of sales data for trend analysis
- Check if revenue and profit margin columns have data
- Verify threshold settings in dashboard (may need adjustment)

### Workforce Analytics Module

**Issue:** Staff performance scores showing zero
**Solution:**
- Verify Staff-Log.xlsx is filled with daily data
- Check staff IDs match between templates
- Ensure bonus thresholds are set in staff roster

**Issue:** Leaderboard not updating
**Solution:**
- Click Refresh in Power BI after updating Staff-Log.xlsx
- Verify date filter is set to current month
- Check if staff performance formulas reference correct date range

### Customer Mastery Module

**Issue:** Customer loyalty ladder not working
**Solution:**
- Requires customer ID in transaction data (not all POS systems export this)
- Verify customer data file is linked correctly
- Check for duplicate customer IDs

**Issue:** NPS scores not appearing
**Solution:**
- NPS requires survey data import (optional feature)
- Check if Customer-Feedback.xlsx exists and has data
- Verify date range filter includes survey dates

### Strategic Modules (Tier 3)

**Issue:** Executive Intelligence module not loading
**Solution:**
- Contact managed service team - this is configured during setup
- Check if monthly data sync completed successfully
- Verify custom measures weren't accidentally deleted

**Note:** For Tier 3 modules, priority support (24h response) is available via WhatsApp.

---

## Additional Resources

**Power BI Official Docs:**
- **Power BI Documentation**

**Community Forums:**
- **Power BI Community** (ask questions, search existing solutions)

**YouTube Tutorials:**
- Guy in a Cube (Power BI best practices)
- SQLBI (DAX deep dives)

**Our Support:**
- Email: support@[company].com
- Knowledge Base: [Link to updated KB online]

---

**Last Updated:** December 30, 2025 - Added module-specific troubleshooting
**Version:** 1.1
**Feedback:** Found an issue not listed here? Email support@[company].com so we can add it.

---

**Related Documents:**
- [[products/01-power-bi-template/training/03-customer-training-guide|05-customer-training-guide.md]]
- [[products/01-power-bi-template/training/01-quick-start-guide|01-quick-start-guide.md]]
- [[products/01-power-bi-template/operations/04-tier-2-onboarding-sop|Tier 2/3 Onboarding SOP]]
