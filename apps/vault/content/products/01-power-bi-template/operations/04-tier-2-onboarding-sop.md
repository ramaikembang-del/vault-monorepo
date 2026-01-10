# Tier 2 (Professional) Customer Onboarding SOP - Complete Ecosystem

**Product:** A1 - Power BI + Excel/Sheets Bundle (Complete Ecosystem - Modular)
**Scope:** Tier 2 (Professional + Custom Excel Templates + Professional Modules)
**Owner:** Operations / Customer Success
**SLA:** Live within 48 hours of setup call

---

## What Tier 2 Customers Get (Complete Ecosystem Bundle)

**Package Includes:**
- ? Power BI Dashboard (.pbix template) - **Modular: 50-100 metrics**
 - T2-Base: All Base + T1 modules (50 metrics, Rp 7M)
 - T2 + Modules: T2-Base + selected Professional modules (62-100 metrics, Rp 8.25M-12M)
 - Professional modules: P1 Multi-Outlet, P2 Menu Optimization, P3 Workforce Analytics, P4 Customer Mastery
- ? Customized Excel Templates (4 files formatted to their POS)
- ? Google Sheets Bridge (if requested)
- ? Import Automation (configured for their workflow)
- ? Video Tutorials (5 × 2-min, Bahasa Indonesia)
- ? **3-4 hours remote setup assistance** (screen sharing + Excel customization)
- ? 90-day email support (vs 30 days for Tier 1)
- ? 1 free customization request

**Pricing:** Rp 7M - Rp 12M (modular pricing based on Professional modules selected)

**Key Difference vs Tier 1:** Custom Excel templates + live setup help
**Key Difference vs Tier 3:** One-time setup, then self-managed (no ongoing monthly service)

---

## Timeline Overview

```
Day 0: Payment ? Send welcome email + Calendly link
Day 0-2: Customer books setup call
Day of Call: 2-3 hour screen-sharing session
Day +1: Send follow-up email with files + summary
Day +3: Check-in email
Day 90: Support expiry reminder + upsell to Tier 3
```

---

## Step 1: Payment Confirmation ? Pre-Call Setup (Day 0)

### Trigger: Payment Received (Midtrans notification)

### Actions (within 2 hours):

#### 1.1 Send Welcome Email

```
Subject: Welcome to Power BI Dashboard - Let's Get You Set Up!

Hi [Customer Name],

Payment confirmed-thank you! ??

You're now on Tier 2 (Assisted Setup). Here's what happens next:

?? **BOOK YOUR SETUP CALL:**
Click here to schedule your 2-3 hour setup session: [Calendly Link]

Available slots: Mon-Fri, 9 AM - 5 PM WIB

??? **BEFORE THE CALL, PLEASE:**

1. **Install Power BI Desktop** (free):
 Download: [Power BI Desktop](https://aka.ms/pbidesktop)

2. **Prepare POS Access:**
 - Have your POS login/password ready
 - If using SQL database, have server credentials
 - If using CSV exports, have sample files ready

3. **Export Sample POS Data:**
 - 1 week of sales transactions (CSV format)
 - Staff roster file
 - Product list
 - We'll use this to customize your Excel templates!

4. **Test Zoom/Google Meet:**
 We'll screen-share during setup. Make sure it works!

5. **Set Aside 3-4 Hours:**
 Block your calendar-no interruptions during setup.

?? **WHAT WE'LL DO ON THE CALL:**
- **Customize Excel templates** to match your POS format (30 min)
- Connect Excel templates ? Power BI automation (20 min)
- Configure your staff roster, targets, product categories (30 min)
- Walk through each dashboard tab (Revenue, Staff, Customers) (60 min)
- Demo: Fill Excel ? Click Refresh ? Dashboard updates (10 min)
- Answer all your questions (30 min)
- Make sure you can run everything yourself (20 min)

?? **QUESTIONS BEFORE THE CALL?**
WhatsApp me: [Phone Number]
Email: support@[company].com

Looking forward to getting you live!

Best,
[Your Name]
[Title]
```

#### 1.2 Create Customer Folder in Google Drive

```
/Clients/Tier2_Assisted/
 +-- [Customer Name] - [Date]/
 +-- Template_Files/ (upload .pbix, sample data, setup guide)
 +-- Setup_Notes.md (record issues during call)
 +-- Support_History.md (track post-setup questions)
```

#### 1.3 Add to Setup Call Calendar

- [ ] Customer booked setup call via Calendly
- [ ] Send calendar reminder 24h before call
- [ ] Send Zoom link 1h before call

---

## Step 2: Pre-Call Checklist (1 Hour Before Call)

**Verify:**

- [ ] Customer has Power BI Desktop installed (ask via WhatsApp if unsure)
- [ ] POS type confirmed (Pawoon/Moka/Qasir/Custom/CSV)
- [ ] Sample data available (ask customer to export 1 month of transactions)
- [ ] Zoom link tested
- [ ] Demo environment ready (in case customer's data has issues)

---

## Step 3: Setup Call (2-3 Hours, Screen Sharing)

### Agenda:

#### **Part 1: Custom Excel Template Formatting (30 minutes) - NEW STEP**

**[Do this BEFORE Power BI data connection]**

1. **Get Customer's POS Export Sample:**
 - Customer shares screen, shows their POS system
 - Export 1 week of sales: \"What columns do you have?\" (Date, Product, Amount, Staff, etc.)
 - Download sample CSV to review format

2. **Customize Daily-Sales.xlsx to Match:**
 - Open our generic Daily-Sales.xlsx template
 - Adjust column headers to match their POS export
 - Create dropdowns from their actual data:
 - Extract unique product names ? Product dropdown list
 - Extract staff member names ? Staff dropdown list
 - Payment methods ? Dropdown (Cash, Card, QRIS, etc.)
 - Add data validation rules (prevent typos, enforce formats)
 - Test: Import their CSV ? Should map perfectly to Excel template

3. **Customize Food-Cost.xlsx:**
 - Get their top 10 menu items
 - Build recipe cards (Ingredient, Qty, Unit Price, Total Cost)
 - Set traffic light thresholds based on their category:
 - Indonesian food: <28% green, 28-32% yellow, >32% red
 - Western food: <30% green, 30-35% yellow, >35% red
 - Test with sample recipes

4. **Customize Staff-Log.xlsx:**
 - Import their staff roster
 - Set performance tiers based on their business:
 - Gold: Top 20% (e.g., >Rp 50K/hour)
 - Silver: Middle 60%
 - Bronze: Bottom 20%
 - Customize leaderboard labels if requested

5. **Multi-Outlet Setup (if 2+ locations):**
 - Customize Outlet-Summary.xlsx
 - Add sheet tabs for each outlet (e.g., \"Jakarta Pusat\", \"Bandung\")
 - Create consolidation formulas
 - Test with sample data from both locations

**?? Checkpoint 1A (30 min mark):** Excel templates customized, tested with customer data.

**Share customized templates with customer via Google Drive.**

---

#### **Part 2: Data Connection (60 minutes)**

**[NOW proceed to Power BI setup - use customized Excel templates as data source]**

**[Share YOUR screen first to demonstrate, then switch to THEIR screen]**

1. **Open Power BI Desktop** (customer's machine)

2. **Connect to Data Source:**

 **Option A: CSV Files (Most Common)**
 - Customer exports Sales, Staff, Feedback CSVs from POS
 - Power BI: Get Data ? Folder ? Browse to CSV location
 - Transform: Verify column names, data types
 - Load

 **Option B: SQL Server**
 - Power BI: Get Data ? SQL Server
 - Server name: [customer provides]
 - Database: [customer provides]
 - Credentials: Windows or Database authentication
 - Select tables: Sales_Data, Staff_Roster, Feedback
 - Load

 **Option C: POS API (Pawoon/Moka)**
 - Use Web connector with API key
 - Customer provides API credentials
 - Test connection
 - Load

3. **Load Supporting Tables:**
 - Targets.csv (monthly revenue targets) - **You provide template, customer fills**
 - Date.csv (date dimension) - **Pre-built, just load**
 - Product_Categories.csv - **Customer provides or we build together**

4. **Data Quality Check:**
 - Preview data: Any blank rows? Weird characters?
 - Date formats: YYYY-MM-DD or DD/MM/YYYY? (Fix if needed)
 - Staff names: Consistent spelling? (Fix duplicates)
 - Product names: Categories assigned? (Create lookup table)

**?? Checkpoint 1 (60 min mark):** Data loaded successfully, no errors.

---

#### **Part 2: Data Model Configuration (30 minutes)**

5. **Create Relationships** (Model View):
 - Sales_Data[StaffID] ? Staff_Roster[StaffID] (Many-to-One)
 - Sales_Data[TransactionDate] ? Date[Date] (Many-to-One)
 - Feedback[StaffID] ? Staff_Roster[StaffID] (Many-to-One)
 - Date[MonthStartDate] ? Targets[MonthStartDate] (One-to-One)

6. **Mark Date Table:**
 - Right-click Date table ? Mark as Date Table
 - Choose Date column

7. **Test Relationships:**
 - Create simple visual: Revenue by Date
 - Verify numbers make sense (compare to POS report)

**?? Checkpoint 2 (90 min mark):** Data model configured, relationships working.

---

#### **Part 3: Dashboard Customization (30 minutes)**

8. **Update Company Info:**
 - Replace "Demo Restaurant" ? [Customer's Restaurant Name]
 - Update logo (if they provide .png file)
 - Adjust color theme (if requested)

9. **Configure Targets:**
 - Annual revenue target: Rp [X]B
 - Monthly breakdown (if uneven: Q1 low, Q4 high)
 - Staff bonus thresholds (if applicable)

10. **Configure Staff Roster:**
 - Import customer's staff list (Name, ID, Role, Hire Date)
 - Assign tier levels (Gold/Silver/Bronze thresholds)
 - Set monthly targets per staff (if tracked)

11. **Configure Product Categories:**
 - Food, Beverage, Alcohol (standard)
 - Custom categories if needed (Appetizers, Mains, Desserts)

**?? Checkpoint 3 (120 min mark):** Dashboard customized with customer's data.

---

#### **Part 4: Walkthrough & Training (30 minutes)**

12. **Tab 1: Revenue Intelligence**
 - Show: YTD Revenue, Gap to Target, Required Run Rate
 - Explain: Revenue Waterfall, Hourly Heatmap, Product Mix
 - Customer test: Apply date filter, drill down to specific day

13. **Tab 2: Staff Performance (Wolf Pack)**
 - Show: Performance Score leaderboard, Top 3 vs Bottom 3
 - Explain: Discipline Score components (Late, Early Out, Voids)
 - Customer test: Click drill-through on one staff member

14. **Tab 3: Customer Loyalty**
 - Show: Patronage Ladder (First-timers, Repeaters, VIPs)
 - Explain: NPS Score, Revenue at Risk, Word Cloud
 - Customer test: Identify lapsed VIPs

15. **Daily Refresh Process:**
 - **If CSV:** "Export CSV from POS ? Save to [folder] ? Click Refresh in Power BI (30 seconds)"
 - **If SQL:** "Power BI auto-refreshes when you open it (if connection is live)"
 - **Test it together:** Click Refresh button, watch data update

**?? Checkpoint 4 (150 min mark):** Customer understands how to use dashboard and refresh data.

---

#### **Part 5: Q&A & Next Steps (15 minutes)**

16. **Address Questions:**
 - "What if I see blank values?" ? Troubleshooting KB link
 - "Can I add a new metric?" ? Explain 1 free customization (submit request via email)
 - "Who do I call if it breaks?" ? Support email/WhatsApp

17. **Set Expectations:**
 - **Support:** 90 days email support (<48h response)
 - **Updates:** 1 free template update if we release v2.0
 - **Customization:** 1 free request included (e.g., add new chart, change calculation)

18. **Send Follow-Up Email:**
 - [ ] Dashboard file (save to their machine + backup to Google Drive)
 - [ ] Setup summary (what we configured today)
 - [ ] Troubleshooting KB link
 - [ ] Support contact (email + WhatsApp)

**?? CALL COMPLETE!** Customer is now live with dashboard.

---

## Step 4: Post-Call Follow-Up (Day 1-2)

### 24 Hours After Setup Call:

**Send Check-In Email:**

```
Subject: Dashboard Live - Quick Check-In

Hi [Customer Name],

Hope the dashboard is working smoothly! ??

QUICK CHECK-IN:
? Were you able to refresh the data today?
? Are all the metrics showing up correctly?
? Any questions or issues?

If everything looks good, I'd love a quick testimonial:
"[Customer Name] from [Restaurant Name] says: [1-2 sentences about their experience]"

I'll add it to our website (with your permission) to help other restaurant owners.

Thanks again for trusting us!

Best,
[Your Name]
```

### If No Response After 3 Days:

WhatsApp: "Hey [Name], just checking-dashboard working okay? Let me know if you hit any snags!"

---

## Step 5: Ongoing Support (Days 3-90)

### Support SLA: Respond to emails within 48 hours (business days)

### Common Support Requests (Tier 2):

**1. "Dashboard won't refresh"**
 - ? Check data source connection (is CSV in same folder? SQL credentials still valid?)
 - ? Verify no file permission issues
 - ? Ask for screenshot of error message

**2. "Metrics showing Rp 0"**
 - ? Check data loaded correctly (View ? Data view)
 - ? Verify relationships not broken
 - ? Check date filter (sometimes set to future dates by accident)

**3. "Can you add [new metric]?"**
 - ? First customization = free (build it, send updated .pbix)
 - ? Second+ customization = Rp 500K-1M (or upsell to Tier 3 for unlimited customizations)

### Track all support requests in:
`/Clients/[Customer Name]/Support_History.md`

**Format:**
```
## Support Ticket #1
Date: 2025-12-28
Issue: Dashboard won't refresh, error "Cannot connect to data source"
Resolution: Customer changed CSV folder location. Updated file path in Power Query. Resolved in 30 min.
Status: ? Closed
```

---

## Common Onboarding Tasks

### Task A: Data Cleaning

**Issue 1: Missing Product Categories**

**Symptom:** Product Mix chart shows "Uncategorized" or blank

**Fix:**
1. Export unique product list from Sales_Data
2. Ask customer to assign categories:
 ```
 Product Name | Category
 ============ | ========
 Nasi Goreng | Food
 Kopi Latte | Beverage
 Bir Bintang | Alcohol
 ```
3. Create Product_Categories.csv lookup table
4. Merge in Power Query

---

**Issue 2: Duplicate Staff Names**

**Symptom:** Staff leaderboard shows same person twice (typo: "Budi" and "Budii")

**Fix:**
1. Go to Staff_Roster table
2. Replace all "Budii" ? "Budi"
3. Refresh data model

---

**Issue 3: Date Format Inconsistency**

**Symptom:** Some dates are DD/MM/YYYY, others MM/DD/YYYY (causes wrong calculations)

**Fix:**
1. Power Query ? Transform ? Data Type ? Date (locale: Indonesia)
2. All dates now YYYY-MM-DD format

---

### Task B: Custom Metric Requests

**When customer asks: "Can you add [X] metric?"**

**Process:**

1. **Clarify requirement:**
 - "What specific calculation do you want?"
 - "How should this metric be displayed? (KPI card, chart, table?)"
 - "Where should it go? (Which tab?)"

2. **Assess complexity:**
 - **Simple (5-15 min):** Add DAX measure, create visual
 - Example: "Show average table turn time"
 - **Medium (30-60 min):** Requires new data source or complex DAX
 - Example: "Show profit margin by menu item" (need COGS data)
 - **Complex (2-4 hours):** Requires new integrations or major redesign
 - Example: "Show real-time inventory levels" (need inventory system integration)

3. **Set expectations:**
 - **Tier 2:** First customization = free. Additional = Rp 500K-1M or upsell to Tier 3 (support fees/mo)

4. **Build & deliver:**
 - Build metric in dev environment
 - Test with customer's data
 - Send updated .pbix file
 - Document in changelog

---

## Quality Checklist

### Pre-Delivery QA (Before sending to customer):

**Data Quality:**
- [ ] All tables loaded with data (no blank tables)
- [ ] Date range correct (not stuck on old data)
- [ ] No duplicate rows in dimension tables (Staff_Roster, Product_Categories)
- [ ] All dates formatted consistently (YYYY-MM-DD)

**Data Model:**
- [ ] All relationships created and active (not inactive)
- [ ] Date table marked as Date Table
- [ ] No circular relationships (would cause errors)

**Visuals:**
- [ ] No blank visuals (all charts show data)
- [ ] Filters work correctly (test date slicer)
- [ ] Drill-through works (click on staff name ? detail page loads)
- [ ] Tooltips display correctly (hover over charts)

**Customization:**
- [ ] Customer's restaurant name displayed (not "Demo Restaurant")
- [ ] Logo updated (if customer provided)
- [ ] Targets configured (annual goal matches what customer said)
- [ ] Staff roster matches customer's actual team

**Performance:**
- [ ] Refresh time <30 seconds (for 1 year of data)
- [ ] No visual lag when applying filters
- [ ] File size <100 MB (if larger, optimize)

**Documentation:**
- [ ] Walkthrough PDF created (screenshots + explanations)
- [ ] Troubleshooting KB link sent
- [ ] Support contact (email + WhatsApp) provided

---

## Post-Delivery Success Metrics

**Week 1:**
- [ ] Customer logged in at least 3 times
- [ ] Customer successfully refreshed data at least once
- [ ] No critical support tickets (P1 issues)

**Week 4:**
- [ ] Customer logging in 5+ times/week (daily habit forming)
- [ ] Customer reported at least 1 actionable insight (e.g., "Found underperforming staff member!")
- [ ] NPS score: 8-10 (ask via email)

**Day 90 (End of Support Period):**
- [ ] Ask for testimonial
- [ ] Ask for referral (offer Rp 1M incentive or 10% off future module purchases)
- [ ] Upsell opportunity: "Need more customizations or automation? Upgrade to Tier 3 for fully managed service (ongoing support moved to Product 02)."

---

## Escalation Paths

**Level 1: Tier 2 Support Rep (You)**
- Setup questions
- Troubleshooting common issues
- General Q&A

**Level 2: Tech Lead**
Escalate if:
- Power BI crashes/technical errors
- Data model relationship bugs
- Issues not covered in Troubleshooting KB

**Level 3: Product Owner**
Escalate if:
- Feature requests
- Product feedback
- Pricing/upgrade questions

---

## Upgrade Path to Tier 3

**When to Suggest Upgrade:**
- Customer requests 2nd+ customization (beyond included free one)
- Customer asks "Can you just manage this for me?"
- Customer struggles with monthly data refreshes
- Customer wants strategic consulting (interpreting data trends)

**Upgrade Offer:**
```
It sounds like Tier 3 (Fully Managed) might be a better fit!

For the price difference (Tier 3 setup starts at Rp 10M), you get:
? Unlimited support forever (vs 90 days)
? We handle all data refreshes (automated, no manual work)
? Monthly check-in calls to review trends
? 2 customizations/month included
? Priority support (<24h response)

Basically-you never touch Power BI again. We manage everything.

Want to upgrade?
```

---

**Related Documents:**
- [[02-tier-1-delivery-sop|Tier 1 Delivery SOP]] - For DIY customers
- [[05-tier-3-onboarding-sop|Tier 3 Onboarding SOP]] - For fully managed customers
- [[products/01-power-bi-template/training/06-troubleshooting-kb|Troubleshooting KB]] - Self-service fixes
- [[products/03-web-dashboard-lite/operations/03-deployment-sop|Deployment SOP]] - Technical deployment steps

**Last Updated:** 2025-12-27
**Owner:** Operations Lead / Customer Success Manager
**Version:** 1.0 (Split from combined Tier 2/3 SOP)


