# Setup Guide - Power BI Dashboard (Tier 1 Essentials) - Complete Ecosystem

**Product:** A1 - Power BI Dashboard (Complete F&B Data Ecosystem - Modular Framework)
**Audience:** Tier 1 (Essentials - 30-50 metrics modular) customers
**Estimated Time:** 30 minutes (Excel templates) OR 2-4 hours (full Power BI setup)
**Difficulty:** Easy (Excel templates) OR Intermediate (Power BI setup)

**TIME CLARIFICATION:**
- **Excel Templates Only:** 30 minutes - Get insights immediately using pre-formatted Excel sheets
- **Full Power BI Setup:** 2-4 hours - One-time setup for automated, visual dashboards
- **Recommendation:** Start with Excel templates (30 min), add Power BI later when ready

---

## Pre-Setup: Excel Templates First (RECOMMENDED!)

**BEFORE setting up Power BI, test the Excel templates:**

### Why Excel First?
- Excel is familiar (staff can help fill data)
- Most of your time is data entry, NOT Power BI setup
- If Excel works, Power BI setup is just 5 minutes
- **30-minute time-to-insight** vs 8 hours formatting CSV files

### Quick Test (5 minutes):
1. Open `Daily-Sales.xlsx` from your bundle
2. Notice the dropdowns (Product, Staff, Payment Method)
3. Fill in ONE day of sample sales
4. Save the file to a known location (e.g., `C:\PowerBI_Data\`)

### Tier-Specific Templates (Modular Framework):
- **Tier 1 (Essentials - 30-50 metrics):** Generic templates (sample products/staff) - Start here to learn
- **Tier 2/3 (Professional/Enterprise - 50-150 metrics):** PRE-CUSTOMIZED templates to match your POS format - Just import CSV!

** Excel working? Now proceed with Power BI setup below.**

---

## Before You Start

### What You'll Need:

**Software:**
- [ ] Windows 10 or later (macOS 10.14+ also supported)
- [ ] Power BI Desktop (free) - Download: **Power BI Desktop**
- [ ] Microsoft Excel (optional, for viewing CSV files)

**Data:**
- [ ] POS export files (CSV format recommended) OR
- [ ] SQL Server database access (if you have technical team)

**Time:**
- [ ] 2-4 hours uninterrupted time
- [ ] Set calendar block - don't multitask during setup

**Skills Required:**
- Basic file management (copy/paste, navigate folders)
- Comfortable following technical instructions
- Willingness to learn (we'll guide you step-by-step!)

---

## Setup Overview (4 Steps)

```
STEP 1: Install Software (30 minutes)
 ↓
STEP 2: Prepare Your Data (60 minutes)
 ↓
STEP 3: Connect Data to Power BI (45 minutes)
 ↓
STEP 4: Configure Dashboard (30 minutes)
 ↓
 DONE: Dashboard ready to use!
```

**Total Time:** 2.5 - 4 hours

---

## STEP 1: Install Power BI Desktop (30 Minutes)

### 1.1 Download Power BI Desktop

1. Open browser -> Go to **Power BI Desktop Download**
2. Click "Download" (free Microsoft tool)
3. Save file to Downloads folder

**File name:** `PBIDesktop_x64.msi` (approx. 500 MB)

---

### 1.2 Install Power BI Desktop

1. Double-click `PBIDesktop_x64.msi`
2. Installation wizard appears:
 - Click "Next"
 - Accept license terms -> "Next"
 - Choose install location (default is fine) -> "Next"
 - Click "Install" (may take 5-10 minutes)
3. When complete: "Launch Power BI Desktop" -> Click "Finish"

** Success Check:** Power BI Desktop opens -> You see "Get Data" screen

---

### 1.3 Sign In (Optional but Recommended)

**Why Sign In?**
- Save files to OneDrive (cloud backup)
- Publish to Power BI Service (mobile access)
- Get updates automatically

**How to Sign In:**

1. Top-right corner -> Click "Sign In"
2. Enter Microsoft account (personal or work email)
 - Don't have one? Create free account at **Outlook.com**
3. Enter password -> Sign In
4. You'll see your profile picture/initials top-right

**⏭ Skip if:** You only want local desktop access (no cloud features)

---

### 1.4 Verify Installation

**Quick Test:**

1. Power BI Desktop -> Home tab -> "Get Data" -> "Excel"
2. If file picker opens -> Installation successful
3. Click "Cancel" (we're just testing)

**If Issues:** See [[products/01-power-bi-template/training/06-troubleshooting-kb|06-troubleshooting-kb.md]] -> Issue #17

---

## STEP 2: Prepare Your Data (60 Minutes)

### 2.1 Export Data from Your POS

**Goal:** Get your transaction data into CSV files

**For Pawoon Users:**

1. Log into Pawoon web portal (https://web.pawoon.com)
2. Go to "Reports" -> "Transaction Report"
3. Select date range: Last 12 months
4. Export to CSV
5. Save to: `C:\PowerBI_Data\Pawoon_Transactions.csv`

**For Moka Users:**

1. Moka Back Office -> Reports -> Transaction History
2. Date range: Last 12 months
3. Export -> CSV
4. Save to: `C:\PowerBI_Data\Moka_Transactions.csv`

**For Qasir Users:**

1. Qasir Web -> Laporan -> Penjualan
2. Filter: 12 bulan terakhir
3. Download CSV
4. Save to: `C:\PowerBI_Data\Qasir_Transactions.csv`

**For Other POS Systems:**

- Most POS have "Export" or "Download Report" feature
- Format: CSV (Comma Separated Values)
- Must include: Date, Product Name, Quantity, Price, Staff Name (if tracked)

---

### 2.2 Create Data Folder Structure

**Create these folders on your computer:**

```
C:\PowerBI_Data\
 Transactions\
 Sales_Data.csv (from POS export)
 Staff\
 Staff_Roster.csv (you'll create this)
 Targets\
 Monthly_Targets.csv (you'll create this)
 Supporting\
 Date.csv (we provide this)
 Product_Categories.csv (you'll create this)
```

**How to Create Folders:**

1. Open File Explorer
2. Navigate to `C:\` drive
3. Right-click -> New -> Folder -> Name it "PowerBI_Data"
4. Inside PowerBI_Data, create 4 subfolders (Transactions, Staff, Targets, Supporting)

---

### 2.3 Prepare Staff Roster File

**Create Staff_Roster.csv with your team information:**

**Template:**

| StaffID | StaffName | Role | HireDate | MonthlyTarget | BonusThreshold | TierLevel |
|---------|-----------|------|----------|---------------|----------------|-----------|
| 1 | Rina | Server | 2023-01-15 | 25000000 | 30000000 | Gold |
| 2 | Budi | Server | 2023-03-01 | 20000000 | 25000000 | Silver |
| 3 | Siti | Server | 2025-01-10 | 15000000 | 20000000 | Bronze |

**How to Create:**

1. Open Excel or Google Sheets
2. Create table with columns above
3. Fill in your actual staff data:
 - StaffID: Unique number for each person
 - StaffName: Full name
 - Role: Server, Chef, Manager, Cashier, etc.
 - HireDate: When they started (YYYY-MM-DD format)
 - MonthlyTarget: Sales target in Rupiah (optional, can be 0)
 - BonusThreshold: Sales needed for bonus (optional)
 - TierLevel: Gold, Silver, or Bronze (for gamification)
4. Save As -> CSV (Comma delimited) -> Name: `Staff_Roster.csv`
5. Save to: `C:\PowerBI_Data\Staff\Staff_Roster.csv`

**Important:** StaffID must match the staff ID in your POS transaction data

---

### 2.4 Prepare Monthly Targets File

**Create Monthly_Targets.csv for your revenue goals:**

**Template:**

| MonthStartDate | TargetRevenue | TargetTransactions |
|----------------|---------------|--------------------|
| 2025-01-01 | 800000000 | 2500 |
| 2025-02-01 | 850000000 | 2600 |
| 2025-03-01 | 900000000 | 2700 |
| 2025-04-01 | 950000000 | 2800 |
| 2025-05-01 | 1000000000 | 3000 |
| 2025-06-01 | 1050000000 | 3100 |
| 2025-07-01 | 1100000000 | 3200 |
| 2025-08-01 | 1100000000 | 3200 |
| 2025-09-01 | 1150000000 | 3300 |
| 2025-10-01 | 1200000000 | 3500 |
| 2025-11-01 | 1250000000 | 3600 |
| 2025-12-01 | 1300000000 | 3800 |

**How to Create:**

1. Excel / Sheets
2. Create table with 3 columns
3. Fill in YOUR annual target broken down by month
 - Example: Annual target Rp 12B ÷ 12 months = Rp 1B/month (adjust seasonally)
4. Save As CSV -> Name: `Monthly_Targets.csv`
5. Save to: `C:\PowerBI_Data\Targets\Monthly_Targets.csv`

---

### 2.5 Prepare Product Categories File

**Map your menu items to categories (Food, Beverage, Alcohol):**

**Template:**

| ProductName | Category | SubCategory |
|-------------|----------|-------------|
| Nasi Goreng | Food | Main Course |
| Kopi Latte | Beverage | Coffee |
| Bir Bintang | Alcohol | Beer |
| Ayam Goreng | Food | Main Course |
| Teh Manis | Beverage | Tea |
| Mojito | Alcohol | Cocktail |

**How to Create:**

1. Export unique product list from your POS (or list manually)
2. Excel / Sheets -> 3 columns
3. Assign Category: Food, Beverage, or Alcohol
4. Assign SubCategory (optional but helpful for deeper analysis)
5. Save As CSV -> `Product_Categories.csv`
6. Save to: `C:\PowerBI_Data\Supporting\Product_Categories.csv`

**Tip:** Start with 10-20 top-selling products. Add more later.

---

### 2.6 Download Date Dimension File (We Provide)

**This file is included in your template download.**

1. Check your download folder -> Find `Date.csv`
2. Copy to: `C:\PowerBI_Data\Supporting\Date.csv`

**What's in this file?**
- Every date from 2020-2030
- Columns: Date, DayName, MonthName, Quarter, Year, IsWeekend, IsHoliday
- Pre-configured for Indonesian holidays

**Don't have it?** Email support@[company].com -> We'll send it

---

### Step 2 Complete Checklist:

- [ ] All CSV files created and saved to `C:\PowerBI_Data\`
- [ ] Files are in correct subfolders (Transactions, Staff, Targets, Supporting)
- [ ] CSV files open in Excel (double-check formatting)
- [ ] No missing data (all rows filled)

---

## STEP 3: Connect Data to Power BI (45 Minutes)

### 3.1 Open Template File

1. Locate downloaded template file: `FnB_Dashboard_Template.pbix`
2. Double-click -> Opens in Power BI Desktop
3. You'll see demo dashboard with sample data

**Goal:** Replace demo data with YOUR data

---

### 3.2 Connect to Your Transaction Data

**Method A: CSV Folder Connection (Recommended)**

1. Power BI -> Home tab -> Get Data -> Folder
2. Folder Path -> Browse to `C:\PowerBI_Data\Transactions\`
3. Click OK
4. Power Query Editor opens
5. You'll see list of files in folder
6. Click "Combine & Transform Data"
7. Power Query combines all CSV files
8. Preview shows your transaction data -> Click "Close & Apply"

**Method B: SQL Server Connection (Advanced)**

1. Get Data -> SQL Server
2. Server: `localhost\SQLEXPRESS` (or your server name)
3. Database: Your POS database name
4. Advanced Options -> SQL Statement:
 ```sql
 SELECT TransactionID, TransactionDate, ProductName, Quantity,
 UnitPrice, TotalAmount, StaffID, PaymentMethod
 FROM Sales_Transactions
 WHERE TransactionDate >= DATEADD(YEAR, -1, GETDATE())
 ```
5. Click OK -> Load

---

### 3.3 Connect Supporting Tables

**Staff Roster:**

1. Get Data -> Text/CSV
2. Browse -> `C:\PowerBI_Data\Staff\Staff_Roster.csv`
3. Preview looks good? -> Load
4. Table appears in Fields pane (right side)

**Repeat for:**
- Monthly_Targets.csv
- Product_Categories.csv
- Date.csv

** All 5 tables should now appear in Fields pane (right sidebar)**

---

### 3.4 Create Data Model Relationships

**Goal:** Connect tables so they talk to each other

**Go to Model View (left sidebar, 3rd icon):**

You'll see all 5 tables laid out. Now create relationships:

**Relationship 1: Sales -> Staff**
1. Drag `Sales_Data[StaffID]` -> `Staff_Roster[StaffID]`
2. Cardinality: Many to One (*)
3. Cross Filter: Single
4. Click OK

**Relationship 2: Sales -> Date**
1. Drag `Sales_Data[TransactionDate]` -> `Date[Date]`
2. Many to One
3. Click OK

**Relationship 3: Sales -> Product Categories**
1. Drag `Sales_Data[ProductName]` -> `Product_Categories[ProductName]`
2. Many to One
3. Click OK

**Relationship 4: Date -> Targets**
1. Drag `Date[MonthStartDate]` -> `Monthly_Targets[MonthStartDate]`
2. One to One
3. Click OK

**Mark Date Table:**
- Right-click `Date` table -> "Mark as Date Table"
- Choose `Date` column as the date column
- Click OK

** Success Check:** Go to Report View -> All charts should now show YOUR data (not demo data)

---

## STEP 4: Configure Dashboard (30 Minutes)

### 4.1 Update Company Name & Logo

**Change Restaurant Name:**

1. Click on text box that says "Demo Restaurant"
2. Edit to YOUR restaurant name
3. Repeat for all tabs

**Add Your Logo:**

1. Home tab -> Insert -> Image
2. Browse to your logo file (.png or .jpg)
3. Resize and position (top-left corner recommended)
4. Repeat for all 3 tabs

---

### 4.2 Configure Targets

**Update Annual Revenue Target:**

1. Report View -> Tab 1 (Command Center)
2. Find KPI card "Annual Target"
3. Click on card -> Fields pane -> Edit DAX measure
4. Change value:
 ```dax
 Target Annual = 12000000000 Change this to YOUR target
 ```
5. Example: If your target is Rp 15B -> Change to `15000000000`

---

### 4.3 Adjust Date Filters

**Set Default Date Range:**

1. Each tab has a date slicer (usually top-right)
2. Click slicer -> Format -> Default Selection
3. Set to: "Relative Date" -> "Last 30 Days"
4. Or "This Month" depending on preference

---

### 4.4 Test Data Refresh

**Critical: Make sure refresh works!**

1. Home tab -> Refresh button (big circular arrow)
2. Wait 30-60 seconds
3. All visuals update with latest data?
 - Yes -> You're good!
 - No -> See [[products/01-power-bi-template/training/06-troubleshooting-kb|06-troubleshooting-kb.md]] Issue #1

---

### 4.5 Save Your Work

**Save Dashboard File:**

1. File -> Save As
2. Save to: `C:\PowerBI_Data\FnB_Dashboard_LIVE.pbix`
3. Don't save to OneDrive/Dropbox folder (can cause "read-only" issues)

**Backup:**
- Copy .pbix file to Google Drive / USB drive weekly

---

## Setup Complete! What's Next?

### Daily Usage (30 Seconds)

**Every Morning:**

1. Open `FnB_Dashboard_LIVE.pbix`
2. Home -> Click "Refresh"
3. Wait 30 seconds
4. Review dashboard:
 - Tab 1: Am I hitting daily revenue target?
 - Tab 2: Any staff underperforming?
 - Tab 3: Any VIPs churning?

**That's it!** No Excel formulas to update.

---

### Weekly Check-In (5 Minutes)

**Every Monday:**

1. Review weekly performance (use date slicer: "Last 7 Days")
2. Identify top action item:
 - Revenue behind? -> Check upsell % (should be 15-20%)
 - Staff issues? -> Coach bottom 3 performers
 - Customer churn? -> Call lapsed VIPs

---

### Monthly Deep Dive (30 Minutes)

**End of Month:**

1. Review Tab 1: Monthly revenue vs target
2. Review Tab 2: Staff performance trends (who improved? Who declined?)
3. Review Tab 3: Customer retention (% returning)
4. Export insights -> Share with management team

---

## Getting Help

### Self-Service Resources:

1. **[[products/01-power-bi-template/training/01-quick-start-guide|01-quick-start-guide.md]]** - How to use the dashboard
2. **[[products/01-power-bi-template/training/06-troubleshooting-kb|06-troubleshooting-kb.md]]** - Fix common issues yourself
3. **[[products/01-power-bi-template/training/03-customer-training-guide|05-customer-training-guide.md]]** - Deep dive training

### Setup Support (See Product 02)

**Email:** support@[company].com

**Subject Format:** `[A1 Support] [Issue Type] - [Your Company]`

**Include:**
- Screenshot of issue
- What you already tried (from Troubleshooting KB)
- Your .pbix file (if needed for diagnosis)

**Response Time:** <72 hours (business days)

**After Initial Setup Period:**
- See [[products/02-template-support/02-template-support|Product 02]] for ongoing support plans
- Upgrade to Tier 2 or Tier 3 for extended assistance

---

## Common Setup Pitfalls (Avoid These!)

 **Mistake 1: Moving CSV Files After Setup**
- Power BI remembers file path `C:\PowerBI_Data\...`
- If you move files -> Refresh breaks
- **Prevention:** Keep files in same folder always

 **Mistake 2: Wrong Date Format**
- CSV dates must be YYYY-MM-DD (not DD/MM/YYYY)
- Wrong format -> Charts show blank
- **Fix:** Excel -> Format cells -> Date -> YYYY-MM-DD

 **Mistake 3: StaffID Mismatch**
- Staff_Roster has StaffID=1, but POS uses "Rina" (text name)
- Dashboard can't match -> Staff metrics blank
- **Fix:** Standardize IDs (either all numbers or all names, consistently)

 **Mistake 4: Forgetting to Refresh**
- Dashboard shows old data (yesterday's numbers)
- You make decision on stale data
- **Prevention:** Set daily reminder "9 AM: Refresh Power BI"

 **Mistake 5: Saving to OneDrive While Editing**
- OneDrive syncs while you're editing -> File locks -> Corruption risk
- **Prevention:** Save to local `C:\`, copy to OneDrive after closing

---

## Advanced Customization (Optional)

### Want to Add Custom Metrics?

**DIY (If you know DAX):**

1. Report View -> Modeling tab -> New Measure
2. Write DAX formula:
 ```dax
 Food Cost % = DIVIDE([Food Cost], [Total Revenue], 0)
 ```
3. Drag measure to visual

**Request Customization (Tier 1 - After First Free One):**
- Email support with request
- Quote: Rp 500K - 1M per custom metric
- Or upgrade to Tier 3 (includes 2 customizations/month)

---

## Upgrade Options

**Outgrown DIY Setup?**

### Tier 2: Assisted Setup (Retroactive)
**Price:** Pay difference (Rp 3-4M)
**Benefit:** Extended setup support (see [[Product 02]]  ) + 1 free customization

### Tier 3: Fully Managed
**Price:** Pay difference + Managed Service Subscription (Product 02)
**Benefit:**
- We handle all refreshes (automated)
- Monthly check-in calls
- 2 customizations/month included
- Priority support (<24h)

**Contact:** sales@[company].com

---

## Appendix: File Structure Reference

```
C:\PowerBI_Data\

 Transactions\
 Sales_Data.csv (from POS)
 [Keep monthly backups here]

 Staff\
 Staff_Roster.csv (your team list)
 StaffHours.csv (if tracking hours - optional)

 Targets\
 Monthly_Targets.csv (revenue goals)

 Supporting\
 Date.csv (we provide)
 Product_Categories.csv (your menu mapping)
 Feedback.csv (if collecting NPS - optional)

 FnB_Dashboard_LIVE.pbix (working file)
```

---

## Setup Checklist (Print This!)

**Pre-Setup:**
- [ ] Power BI Desktop installed
- [ ] Data exported from POS
- [ ] Folder structure created

**Data Preparation:**
- [ ] Staff_Roster.csv created
- [ ] Monthly_Targets.csv created
- [ ] Product_Categories.csv created
- [ ] Date.csv downloaded
- [ ] All files in correct folders

**Power BI Connection:**
- [ ] Transaction data loaded
- [ ] Supporting tables loaded
- [ ] Relationships created
- [ ] Date table marked

**Configuration:**
- [ ] Company name updated
- [ ] Logo added
- [ ] Annual target set
- [ ] Data refresh tested

**Final Checks:**
- [ ] All tabs show data (not blank)
- [ ] Numbers match POS reports (spot check)
- [ ] File saved to safe location
- [ ] Backup created

** COMPLETE** -> Start using daily!

---

## Module-Specific Setup Notes (Tier 2/3)

### For Professional Modules (Tier 2):

**Multi-Outlet Operations Module:**
- Create separate data folders for each outlet: `C:\PowerBI_Data\Outlet1\`, `C:\PowerBI_Data\Outlet2\`
- Use Outlet-Summary.xlsx to consolidate (we pre-configure this for you)

**Menu Optimization Module:**
- Requires Recipe-Cost.xlsx with ingredient breakdown
- Pre-filled during setup call (Tier 2/3)

**Workforce Analytics Module:**
- Requires Staff-Log.xlsx with daily attendance/performance
- Template customized to your shift patterns

**Customer Mastery Module:**
- Requires customer data from POS (loyalty program export)
- Optional: NPS survey integration

### For Strategic Modules (Tier 3):

**Executive Intelligence Module:**
- Automated during managed service setup
- Includes scenario analysis tools

**Advanced Menu/Workforce/Customer Modules:**
- All configured during initial setup call
- Monthly updates included in managed service

**Note:** Tier 2/3 customers receive 2-hour setup call where we configure these modules together.

---

**Questions During Setup?**
Email: support@[company].com
Include: "Setup Question - Step [X]" in subject

**Happy Dashboarding!**

---

**Related Documents:**
- [[products/01-power-bi-template/training/01-quick-start-guide|01-quick-start-guide.md]] - How to use after setup
- [[products/01-power-bi-template/training/06-troubleshooting-kb|06-troubleshooting-kb.md]] - Fix common issues
- **Advanced Features Guide** - Power user tips

**Last Updated:** December 30, 2025 - Added module-specific setup notes
**Version:** 1.0 (Tier 1 DIY)
