# User Guide - Power BI Template (Product 01)

**Product:** A1 - Power BI F&B Analytics Template
**Audience:** Tier 1-3 Customers
**Last Updated:** January 8, 2026
**Version:** Alpha 0.1
**Status:** ACTIVE - Customer Documentation

---

## Welcome to Your F&B Analytics Dashboard!

This guide will help you get the most value from your Power BI F&B Analytics Template. Whether you're Tier 1, 2, or 3, this guide covers everything from setup to advanced usage.

**Estimated Reading Time:** 30 minutes
**Estimated Setup Time:** 30 minutes - 2 hours (depending on tier)

---

## Part 1: Getting Started

### 1.1 What You'll Need

**Required:**
- Windows 10+ computer
- Power BI Desktop (free download from Microsoft)
- Excel 2016+ or Office 365
- Your purchase confirmation email (contains download links)

**Optional (for better experience):**
- Power BI Pro license (Rp 140K/month from Microsoft - for cloud publishing)
- OneDrive or Google Drive (for Excel backup)

---

### 1.2 Download Your Files

**Step 1:** Check your email for "Welcome to Power BI F&B Analytics"

**Step 2:** Click the download link in the email

**You'll receive:**
- `.pbix` file (Power BI dashboard)
- `Excel_Templates` folder (3-9 templates depending on tier)
- `Training_Videos` folder (5-15 videos in Bahasa Indonesia)
- `Guides` folder (PDF setup guides, FAQ, troubleshooting)

**Step 3:** Create a folder on your computer:
```
C:\Power_BI_Clario\
```

**Step 4:** Extract all downloaded files to this folder

**Important:** Don't rename or move files after setup (Power BI looks for files in specific locations)

---

### 1.3 Install Power BI Desktop (If You Don't Have It)

**Step 1:** Go to https://powerbi.microsoft.com/desktop

**Step 2:** Click "Download Free"

**Step 3:** Run installer (5-10 minutes)

**Step 4:** Open Power BI Desktop -> Sign in with Microsoft account (or create free account)

**Common Issue:** "Windows version not supported"
**Fix:** You need Windows 10 or higher (Power BI doesn't work on Windows 7/8)

---

## Part 2: First-Time Setup (30 Minutes)

### 2.1 Setup Checklist

- [ ] Power BI Desktop installed
- [ ] Excel templates downloaded to `C:\Power_BI_Clario\Excel_Templates`
- [ ] `.pbix` file downloaded to `C:\Power_BI_Clario`
- [ ] 1 week of sample data ready to test (or use our sample data)

---

### 2.2 Fill Excel Templates with Sample Data

**Why start with sample data?**
Test the dashboard with dummy data first to understand how it works. Then replace with real data.

**Tier 1 Customers: 3 Excel Templates**
1. `Daily_Sales.xlsx`
2. `Top_Items.xlsx`
3. `Staff_Performance.xlsx`

**Let's fill the first template together:**

**Open:** `Daily_Sales.xlsx`

**You'll see:**

| Date | Revenue | Transactions | Food Cost | Labor Cost |
|------|---------|-------------|-----------|------------|
| 2026-01-01 | | | | |
| 2026-01-02 | | | | |

**Fill in sample data (1 week):**

| Date | Revenue | Transactions | Food Cost | Labor Cost |
|------|---------|-------------|-----------|------------|
| 2026-01-01 | Rp 5,000,000 | 120 | Rp 1,500,000 | Rp 800,000 |
| 2026-01-02 | Rp 4,500,000 | 100 | Rp 1,350,000 | Rp 750,000 |
| 2026-01-03 | Rp 6,200,000 | 145 | Rp 1,860,000 | Rp 900,000 |
| ... | ... | ... | ... | ... |

**Validation:** Template has conditional formatting
- Green = valid data
- Yellow = warning (e.g., food cost >35%)
- Red = error (e.g., revenue blank)

**Repeat for other 2 templates** (Top_Items, Staff_Performance)

**Time:** 10-15 minutes for all 3 templates

---

### 2.3 Open Power BI Dashboard

**Step 1:** Double-click `Dashboard_Tier1.pbix` (or Tier2/Tier3 depending on your purchase)

**Step 2:** Power BI opens -> You see the dashboard (but no data yet)

**Step 3:** Top ribbon -> Click **"Refresh"** button

**What happens:**
- Power BI looks for Excel files in `C:\Power_BI_Clario\Excel_Templates`
- Reads your sample data
- Populates dashboard with your data

**Time:** 30 seconds to refresh

**If you see:** "Data source error"
**Fix:** See Part 6 (Troubleshooting) -> Section 6.1

---

### 2.4 Explore Your Dashboard

**Tier 1 Dashboard: 2 Pages, 30 Metrics**

**Page 1: Executive Overview**
- Revenue (Today, Week, Month, vs Target)
- Food Cost % (actual vs target)
- Labor Cost %
- Average Check Size
- Transaction Count
- Customer Growth (MoM)

**Page 2: Top Items Analysis**
- Top 10 Items by Revenue
- Top 10 Items by Quantity
- Item Food Cost % (profitability per item)
- Menu Engineering Matrix (Stars, Dogs, Puzzles, Plowhorses)

**Navigation:** Bottom tabs (Page 1, Page 2)

**Filters:** Right sidebar (Date range, Outlet - if multi-outlet)

---

## Part 3: Daily/Weekly Usage

### 3.1 Daily Workflow (10 Minutes/Day)

**Morning Routine:**

**Step 1:** Export yesterday's data from your POS
- Moka: Reports -> Daily Sales -> Export to Excel
- Pawoon: Analytics -> Export CSV
- Manual: Already in Excel

**Step 2:** Copy-paste into Excel templates
- Open `Daily_Sales.xlsx`
- Add new row for yesterday (e.g., 2026-01-08)
- Fill: Revenue, Transactions, Food Cost, Labor Cost

**Step 3:** Open Power BI -> Click "Refresh"

**Step 4:** Review dashboard (5 minutes)
- Food cost trending up or down?
- Any bestsellers changing?
- Revenue vs target?

**Time:** 10 minutes total (2 min data entry, 30 sec refresh, 7.5 min review)

---

### 3.2 Weekly Deep-Dive (30 Minutes/Week)

**Sunday Evening (or your review day):**

**Step 1:** Refresh all data (if you haven't daily)

**Step 2:** Page 1 Review (10 min)
- **Revenue Trend:** Up or down vs last week? Why?
- **Food Cost %:** If >30%, investigate (which items have high cost?)
- **Labor Cost %:** If >25%, check scheduling (overstaffed days?)

**Step 3:** Page 2 Review (15 min)
- **Top Items:** Which items drove revenue this week?
- **Menu Engineering:** Any "Dogs" (low sales, low profit) to remove?
- **Profitability:** Are bestsellers actually profitable?

**Step 4:** Take Action (5 min)
- Note 1-3 action items (e.g., "Reduce cappuccino price by 5%", "Remove item X from menu")
- Schedule follow-up (check impact next week)

---

### 3.3 Monthly Reporting (60 Minutes/Month)

**End of Month:**

**Step 1:** Refresh all data

**Step 2:** Export dashboard to PDF (for board/investor meetings)
- Power BI -> File -> Export to PDF
- Saves all pages as PDF deck

**Step 3:** Create monthly summary
- Revenue vs target (hit or miss?)
- Top 5 insights (what surprised you?)
- Action items for next month

**Step 4:** Share with stakeholders
- Email PDF to partners, investors, GM
- WhatsApp key metrics to team

---

## Part 4: Advanced Features (Tier 2-3)

### 4.1 Multi-Outlet Consolidation (Tier 2-3)

**If you have 2+ outlets:**

**Setup:**
- Each outlet has its own Excel template (e.g., `Daily_Sales_Outlet1.xlsx`, `Daily_Sales_Outlet2.xlsx`)
- Dashboard auto-consolidates all outlets

**Usage:**
- **Filters:** Right sidebar -> Select "All Outlets" or specific outlet
- **Comparison:** Page 3 (Outlet Comparison) shows all outlets side-by-side

**Key Insights:**
- Which outlet has highest revenue? Lowest food cost%?
- Which outlet to replicate (best performance)?
- Which outlet needs intervention (underperforming)?

---

### 4.2 Menu Engineering Matrix (Tier 2-3)

**What It Is:** 2x2 matrix classifying menu items by popularity (sales volume) and profitability (profit margin)

**Four Categories:**

** Stars (High Sales, High Profit):**
- **Action:** Keep, promote heavily, raise prices slightly (inelastic demand)
- **Example:** Signature latte (sells 100/day, 40% margin)

** Plowhorses (High Sales, Low Profit):**
- **Action:** Increase price OR reduce cost (find cheaper ingredients)
- **Example:** Basic coffee (sells 150/day, 15% margin)

** Puzzles (Low Sales, High Profit):**
- **Action:** Promote more (hidden gems, customers don't know they exist)
- **Example:** Specialty cake (sells 5/day, 50% margin)

** Dogs (Low Sales, Low Profit):**
- **Action:** Remove from menu (wasting kitchen space + ingredients)
- **Example:** Unpopular smoothie (sells 2/day, 10% margin)

**How to Use:**
- Page 4 -> Menu Engineering Matrix (scatter plot)
- Each dot = 1 menu item
- Click dot to see item name + metrics

---

### 4.3 Customer Segmentation (Tier 3)

**RFM Model:** Recency, Frequency, Monetary

**Customer Types:**

** VIP Customers (Recent, Frequent, High Spend):**
- **Action:** Loyalty rewards, personalized offers
- **Example:** Visits 3x/week, spends Rp 150K/visit

** At-Risk Customers (Haven't visited in 30+ days):**
- **Action:** Win-back campaign (WhatsApp promo, email)
- **Example:** Used to visit 2x/week, now 0 visits in 45 days

** New Customers (First visit in last 30 days):**
- **Action:** Welcome back offer (2nd visit discount)

**How to Use:**
- Page 6 -> Customer Segmentation
- Export VIP list -> Launch targeted campaign

---

## Part 5: Tips & Best Practices

### 5.1 Data Entry Tips

**Tip 1: Use Dropdowns (Don't Type Freely)**
- Excel templates have dropdowns for common fields
- Example: Outlet name = dropdown (Outlet 1, Outlet 2, Outlet 3)
- Don't type "outlet 1" or "Outlet1" (inconsistent data = dashboard breaks)

**Tip 2: Consistent Date Format**
- Always use DD/MM/YYYY (e.g., 08/01/2026)
- Don't use MM/DD/YYYY (American format) - causes errors

**Tip 3: Full Amounts, Not Thousands**
- Enter Rp 1,500,000 (not "1.5" or "1500")
- Dashboard calculations assume full amounts

**Tip 4: Daily Entry (Don't Batch)**
- Enter data daily (10 min/day) vs weekly (60 min/week)
- Daily = less forgotten data, more accurate

---

### 5.2 Dashboard Usage Tips

**Tip 1: Filter by Date Range**
- Default: Last 30 days
- Change to: Last 7 days, Last 90 days, Custom range
- Right sidebar -> Date filter

**Tip 2: Drill Down (Click Visuals)**
- Click bar chart -> See detail
- Example: Click "Cappuccino" bar -> See daily sales trend for cappuccino

**Tip 3: Export to Excel (If You Need Raw Data)**
- Right-click any visual -> "Export data"
- Saves table to Excel (for custom analysis)

**Tip 4: Bookmark Insights**
- Found interesting insight? Screenshot it
- Power BI -> View -> Bookmarks -> Save current view

---

### 5.3 Common Mistakes to Avoid

**Mistake 1: Moving Excel Files After Setup**
- Don't move Excel templates to different folder
- Keep in `C:\Power_BI_Clario\Excel_Templates` forever

**Mistake 2: Editing .pbix File Directly**
- Don't try to edit dashboard (unless you know Power BI)
- Edit data in Excel, let dashboard auto-update

**Mistake 3: Not Refreshing Before Reviewing**
- Opening dashboard = shows OLD data (last refresh)
- Always click "Refresh" button first

**Mistake 4: Ignoring Validation Warnings**
- Excel shows yellow/red warnings -> Skipping them = bad data
- Fix warnings before refreshing dashboard

---

## Part 6: Troubleshooting

### 6.1 "Data Source Error" When Refreshing

**Cause:** Power BI can't find Excel files (they moved or renamed)

**Fix:**
1. Power BI -> Transform Data -> Data Source Settings
2. Click "Change Source"
3. Browse to NEW location of Excel files
4. Click OK -> Close & Apply

**Prevention:** Never move Excel files after initial setup

---

### 6.2 Food Cost% Shows 150% (Impossible!)

**Cause:** Data entry error (wrong units)

**Example Error:**
- Revenue entered as "1500" (thousands) instead of "1,500,000" (full amount)
- Food cost entered as "500,000"
- Calculation: 500,000 / 1,500 = 33,333% (wrong!)

**Fix:**
1. Open `Daily_Sales.xlsx`
2. Check Revenue column - should be 7-8 digits (Rp 1,000,000+, not 3-4 digits)
3. Fix amounts -> Refresh dashboard

---

### 6.3 Dashboard Blank (No Data Showing)

**Cause 1:** No data entered in Excel templates

**Fix:** Fill Excel with at least 7 days of data

**Cause 2:** Date format wrong (Excel doesn't recognize as dates)

**Fix:**
- Excel -> Select Date column -> Format Cells -> Date (DD/MM/YYYY)

**Cause 3:** Dashboard filter set to wrong date range

**Fix:** Right sidebar -> Date filter -> Change to "Last 30 days"

---

### 6.4 Dashboard Not Updating When I Change Excel

**Cause:** Forgot to click "Refresh" button

**Fix:** Always click Refresh after editing Excel

---

### 6.5 Power BI Desktop Crashes When Opening

**Cause:** .pbix file corrupted OR computer low on memory

**Fix:**
1. Close all other programs (free up RAM)
2. Try opening again
3. If still crashes -> Email support@[company].com with error screenshot

---

## Part 7: Getting Help

### 7.1 Support Channels

**Tier 1 (14-Day Email Support):**
- Email: support@[company].com
- Response time: <24 hours
- Available: After purchase for 14 days

**Tier 2-3 (90-Day Email + WhatsApp):**
- Email: support@[company].com
- WhatsApp: [Number]
- Response time: <4 hours (WhatsApp), <24 hours (email)

---

### 7.2 Self-Help Resources

**Video Tutorials (Bahasa Indonesia):**
- Setup Guide (15 min)
- Daily Usage Workflow (10 min)
- Troubleshooting Common Issues (8 min)
- Advanced Features: Menu Engineering (12 min)
- Advanced Features: Multi-Outlet (15 min)

**PDF Guides:**
- Quick Start Guide (5 pages)
- FAQ (20 common questions)
- Troubleshooting Checklist (10 common errors + fixes)

**Location:** `C:\Power_BI_Clario\Guides`

---

### 7.3 Community

**F&B Analytics User Group (Facebook):**
- Join: [Facebook Group Link]
- Ask questions, share tips with other users
- Monthly live Q&A with our team

---

## Part 8: Next Steps

### 8.1 After Your First Week

**Once you've used the dashboard for 7 days:**

- [ ] Identified 1-3 cost savings opportunities (food cost reduction, labor optimization)
- [ ] Shared dashboard with 1 team member (GM, partner, accountant)
- [ ] Scheduled weekly review time (Sunday 8pm or your preferred slot)

---

### 8.2 Upgrade Paths

**If you're Tier 1 and outgrowing it:**

**You should upgrade to Tier 2 if:**
- You opened a 2nd outlet (need multi-outlet consolidation)
- You want menu engineering (profitability analysis)
- You need more than 30 metrics

**Upgrade price:** Rp 4M (not full Rp 7M, you get credit)

**Contact:** sales@[company].com

---

**If you're Tier 2 and need more:**

**You should upgrade to Tier 3 if**
- You have 5+ outlets
- You need white-label (your branding on dashboard)
- You want ongoing support (Product 02)

**Upgrade price:** Rp 3-5M (depending on modules)

---

### 8.3 Product 02: Ongoing Support

**If you want us to handle everything:**

**Product 02 Tiers:**
- Basic: Rp 400K/month (we refresh dashboard monthly, email support)
- Pro: Rp 1M/month (+ 1 customization/month, priority support)
- Enterprise: Rp 2M/month (+ quarterly strategy calls, dedicated CSM)

**Best for:** Busy owners who want analytics but don't have time to manage it

---

## Appendix: Quick Reference

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save dashboard |
| `Ctrl + R` | Refresh data |
| `Ctrl + F` | Open filter pane |
| `F5` | Present mode (fullscreen) |

### Dashboard Metrics Glossary

**Food Cost %:** Food ingredient cost / Revenue × 100 (Target: <30%)

**Labor Cost %:** Staff wages / Revenue × 100 (Target: <25%)

**Average Check Size:** Total revenue / Transaction count

**Transaction Count:** Number of orders/bills per day

---

**Document Type:** User Guide - Customer Documentation
**Owner:** Customer Success Team
**Last Updated:** January 8, 2026
**Version:** Alpha 0.1

**Related Documents:**
- [[products/01-power-bi-template/customer-success/01-faq|Customer FAQ]]
- [[products/01-power-bi-template/customer-success/onboarding-playbook|Onboarding Playbook]]
