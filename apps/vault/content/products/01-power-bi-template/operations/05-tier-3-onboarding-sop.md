# Tier 3 (Enterprise) Customer Onboarding SOP - Complete Ecosystem

**Product:** A1 - Power BI + Excel/Sheets Bundle (White-Label Ecosystem - Modular)
**Scope:** Tier 3 (Enterprise + White-Label + Strategic Modules + Automation)
**Owner:** Operations / Customer Success
**SLA:** Live within 3-5 business days

---

## What Tier 3 Customers Get (White-Label Ecosystem Bundle)

**Package Includes:**
- White-Label Power BI Dashboard (logo, brand colors, locked structure) - **Modular: 100-150 metrics**
 - T3-Base: All Base + T1 + T2 modules (100 metrics, Rp 10M)
 - T3 + Strategic: T3-Base + selected Strategic modules (112-150 metrics, Rp 11.25M-15M (support optional))
 - Strategic modules: S1 Executive Intelligence, S2 Advanced Menu, S3 Advanced Workforce, S4 Customer Intelligence
- White-Label Excel Templates (4 files branded, password-protected)
- Branded Google Sheets (if requested)
- **Automation configured** (WhatsApp reports, POS auto-export integration)
- Custom video tutorials (your brand featured)
- Complete hands-off setup (we do everything)
- Monthly maintenance (data refresh, Excel template updates, metric adjustments)
- Monthly Excel template updates (new products/staff added automatically)
- Quarterly business reviews (strategic consulting)
- Premium support (see [[Product 02]])
- 2 customizations/month included

**Pricing:** Rp 10M - Rp 15M setup (support optional - see Product 02) (modular pricing based on Strategic modules)

**Key Difference vs Tier 1/2:** White-label branding + ongoing monthly template maintenance
**Customer's Role:** Provide data access, make decisions. We handle ALL technical execution.

---

## Timeline Overview

```
Day 0: Payment -> Send welcome email + schedule kickoff call
Day 1-2: 30-min kickoff call (discovery + data access)
Day 2-4: We build dashboard (customer doesn't participate)
Day 5: Delivery + walkthrough video
Week 4: First monthly check-in call
Month 3: First quarterly business review
Ongoing: Monthly maintenance + 2 customizations/month
```

---

## Step 1: Payment Confirmation -> Kickoff Call Scheduling (Day 0)

### Trigger: Payment Received

### Send Welcome Email:

```
Subject: Welcome to Tier 3 - White-Glove Service Starts Now!

Hi [Customer Name],

Payment confirmed—excited to partner with you!

You're on **Tier 3: Fully Managed**, which means I handle everything. You sit back and make better decisions with data.

 **NEXT STEP: 30-MIN KICKOFF CALL**
Book here: [Calendly Link]

WHAT WE'LL COVER:
- Your business goals (revenue targets, pain points)
- POS/data access (I'll need credentials to connect)
- Which metrics matter most to you
- Timeline for go-live

 **AFTER KICKOFF, I WILL:**
- Build your dashboard (you don't touch Power BI)
- Test with your data
- Send you a live link + walkthrough video
- Schedule monthly check-ins

 **SUPPORT:**
WhatsApp me anytime: [Phone]
Response time: <24 hours

See you on the call!

Best,
[Your Name]
```

### Create Customer Folder:

```
/Clients/Tier3_White_Label/
 """—€ [Customer Name] - [Date]/
 "œ"—€ Kickoff_Notes.md
 "œ"—€ Branding_Assets/
 "‚ "œ"—€ Logo.png
 "‚ "œ"—€ Brand_Colors.txt
 "‚ """—€ Custom_Terminology.md
 "œ"—€ Dashboard_Builds/
 "‚ "œ"—€ v1.0_Initial.pbix
 "‚ "œ"—€ v1.1_Update_YYYY-MM-DD.pbix
 "‚ """—€ changelog.md
 "œ"—€ Excel_Templates_White_Label/
 "‚ "œ"—€ Daily-Sales_[BrandName].xlsx
 "‚ "œ"—€ Food-Cost_[BrandName].xlsx
 "‚ "œ"—€ Staff-Log_[BrandName].xlsx
 "‚ """—€ Outlet-Summary_[BrandName].xlsx
 "œ"—€ Monthly_Check_Ins.md
 "œ"—€ Monthly_Excel_Updates.md
 "œ"—€ Quarterly_Reviews.md
 """—€ Support_History.md
```

---

## Step 2: Kickoff Call (30 Minutes)

### Agenda:

#### **1. Discovery (15 min):**
 - How many outlets?
 - POS system? (Pawoon/Moka/Custom?)
 - Staff count?
 - Annual revenue target?
 - Biggest challenge right now? (Staff performance? Customer retention? Food cost?)

**Questions to Ask:**
- "What decisions do you want this dashboard to help you make?"
- "What's the #1 metric you check every day?"
- "What's currently invisible to you that you wish you could see?"

#### **2. Data Access (10 min):**
 - POS login credentials (or API key if available)
 - SQL server access (if applicable)
 - Google Drive / Dropbox for file sharing (if using CSVs)
 - **Security:** Explain that credentials are encrypted, stored securely, used only for dashboard setup

**Record:**
- POS Type: [Pawoon/Moka/Qasir/Custom]
- Data Format: [API/SQL/CSV]
- Access Method: [API Key/Database/File Export]
- Credentials Provided: [Yes/No]

#### **3. Expectations & Timeline (5 min):**
 - Dashboard live in 3-5 business days
 - First monthly check-in: Week 4 after go-live
 - Quarterly business review: Month 3
 - Changes/customizations: Included (up to 2 requests/month)

**Set Calendar Invites:**
- [ ] Monthly check-in (recurring, last Friday of month)
- [ ] Quarterly business review (Month 3, 6, 9, 12)

### Post-Call:
- [ ] Record notes in `/Clients/[Customer Name]/Kickoff_Notes.md`
- [ ] Store credentials in password manager (1Password/LastPass)
- [ ] Begin dashboard build

---

## Step 3: Dashboard Build (Days 1-4, Internal Work)

**Customer doesn't participate in this step—we handle everything.**

### **Day 1: Data Extraction**
- [ ] Export data from customer's POS (via API or CSV)
- [ ] Verify data quality (clean duplicates, fix date formats)
- [ ] Load into Power BI

**Example Data Sources:**
- Pawoon API: Use OAuth token
- Moka: Export CSV from web portal
- Qasir: SQL Server connection
- Custom POS: CSV via email/Dropbox

### **Day 2: Data Model**
- [ ] Create relationships (Sales -> Staff, Sales -> Date, etc.)
- [ ] Import Targets, Staff Roster (ask customer to provide via email)
- [ ] Test calculations (Revenue YTD, Staff Performance Score)

**Email to Customer (Day 2):**
```
Hi [Name],

Dashboard build is underway!

QUICK REQUEST: Can you send me:
1. Staff roster (Name, ID, Role, Hire Date)
2. Monthly revenue targets for 2025/2025

Reply with Excel/Google Sheets link or attach CSV.

Thanks!
[Your Name]
```

### **Day 3: Dashboard Customization**
- [ ] Add customer logo
- [ ] Update restaurant name
- [ ] Configure color theme (if customer has brand colors)
- [ ] Add custom metrics (if requested in kickoff)

### **Day 4: Testing & QA**
- [ ] Refresh data from source (verify it works)
- [ ] Test all visuals (no blank values? No errors?)
- [ ] Compare to customer's POS reports (do numbers match?)
- [ ] Create PDF walkthrough guide (screenshot each tab + explanation)

**Quality Checklist:**
- [ ] All data loaded correctly
- [ ] Relationships working (test cross-filters)
- [ ] Customer name/logo updated
- [ ] Targets configured
- [ ] Refresh process works (automated if API, manual if CSV)

### **Day 4-5: White-Label Excel Templates (NEW STEP)**

**Branding Customization:**

1. **Get Branding Assets from Customer:**
 - [ ] Company logo (.png, transparent background)
 - [ ] Brand colors (hex codes: Primary, Secondary, Accent)
 - [ ] Preferred terminology (e.g., \"Branch\" vs \"Outlet\", \"Team\" vs \"Staff\")

2. **Apply Branding to All 4 Excel Templates:**
 - [ ] **Daily-Sales.xlsx:**
 - Add logo to header (top-left, A1:C3 merged)
 - Change header row color to brand primary color
 - Update sheet name: \"Daily Sales - [Restaurant Name]\"
 - Add company name to footer

 - [ ] **Food-Cost.xlsx:**
 - Same logo placement
 - Traffic light colors adjusted if needed (respect brand palette)
 - Custom terminology applied

 - [ ] **Staff-Log.xlsx:**
 - Leaderboard uses brand colors
 - Performance tiers renamed if requested (Gold/Silver/Bronze -> A/B/C, etc.)

 - [ ] **Outlet-Summary.xlsx:**
 - Each outlet tab branded
 - Consolidation summary page has logo

3. **Lock Template Structure (Password-Protect):**
 - [ ] Protect all sheets with password
 - [ ] Only input cells editable (dropdowns, data entry)
 - [ ] Formulas locked (customer can't break calculations)
 - [ ] Password stored in `/Clients/[Customer]/Excel_Templates_White_Label/password.txt`

4. **Create Branded Google Sheets (if requested):**
 - [ ] Convert branded Excel files to Google Sheets
 - [ ] Verify formulas still work
 - [ ] Set up make-a-copy links branded with customer name
 - [ ] Test on mobile (Android + iOS)

5. **Test White-Label Templates:**
 - [ ] Import customer data -> Excel templates
 - [ ] Verify dropdowns populated correctly
 - [ ] Validate all formulas calculate correctly
 - [ ] Check print layout (logo visible, professional)

### **Day 5: Delivery Prep**
- [ ] Record 10-15 min Loom walkthrough video (featuring their branded templates)
- [ ] Create PDF guide (screenshots + metric explanations)
- [ ] Upload to Power BI Service (if cloud deployment) OR save .pbix to Google Drive

---

## Step 4: Delivery & Walkthrough (Day 5)

### **Option A: Cloud Deployment (Power BI Service)**

**Upload to Power BI Service:**

1. Publish .pbix to Power BI Service
2. Set up scheduled refresh (daily at 6 AM)
3. Create sharing link (customer can view in browser or mobile app)
4. Send access link via email

**Delivery Email:**

```
Subject: Your Dashboard is LIVE!

Hi [Customer Name],

Your Power BI dashboard is now live and ready to use!

 **ACCESS YOUR DASHBOARD:**
Link: [Power BI Service URL]
Login: [Email]
Password: [Set your own on first login]

 **MOBILE APP (Optional):**
Download Power BI Mobile for iOS/Android
Login with same credentials
Bookmark your dashboard for quick access

 **WALKTHROUGH VIDEO:**
Watch this 15-min tutorial: [Loom/YouTube link]
- Tab 1: Revenue Intelligence (0:00-5:00)
- Tab 2: Staff Performance (5:00-10:00)
- Tab 3: Customer Loyalty (10:00-15:00)

 **PDF GUIDE:**
Attached: Dashboard_Walkthrough_[Customer_Name].pdf
- All metrics explained
- How to use filters
- What each chart means

 **DATA REFRESH:**
Automatic daily refresh at 6 AM (no action needed from you!)

 **QUESTIONS?**
WhatsApp/Call me anytime: [Phone]

 **NEXT MILESTONE:**
Monthly check-in call in 4 weeks (I'll send invite)

Congrats on going live! Time to make data-driven decisions!

Best,
[Your Name]
```

---

### **Option B: Desktop Dashboard (If customer prefers local/offline)**

1. Save .pbix file to customer's Google Drive
2. Send download link + Power BI Desktop setup instructions
3. Walk them through first data refresh (5-min Zoom call if needed)

---

## Step 5: Ongoing Tier 3 Service (Monthly)

### **Monthly Maintenance (Included in optional support (see Product 02)):**

#### **Week 1-3: Monitoring**
- [ ] Check dashboard refresh status (auto-refresh working?)
- [ ] Monitor for errors (email alerts if refresh fails)
- [ ] Review customer usage (Power BI analytics: Are they logging in daily?)

**Proactive Check:**
- If customer hasn't logged in 5+ days -> WhatsApp: "Hey! Everything okay with the dashboard?"

---

#### **Week 4: Monthly Check-In Call (15-30 min)**

**Agenda:**

**1. Dashboard Health:**
 - Any errors or issues this month?
 - Data refreshing correctly?

**2. Insights Review:**
 - Walk through 1-2 interesting findings (e.g., "Your VIP count dropped 15% this month—what happened?")
 - Ask: "What questions do you have about the data?"

**3. Customization Requests:**
 - "Want any new metrics or charts added?"
 - Track requests (up to 2/month included)

**4. Action Items:**
 - Customer: [E.g., "Investigate why Friday revenue dropped"]
 - You: [E.g., "Add new chart for food waste tracking"]

**Post-Call:**
- [ ] Implement requested changes (deliver within 5 business days)
- [ ] Update `/Clients/[Customer Name]/Monthly_Check_Ins.md`

**Template Record:**
```
## Monthly Check-In - [Month YYYY]
Date: [Date]
Duration: [Minutes]

### Dashboard Health:
- Refresh status: Working /  Issue
- Customer usage: [X] logins this month
- Errors: None / [Description]

### Key Insights Discussed:
- [Insight 1]
- [Insight 2]

### Customization Requests:
1. [Request 1] - Status: In Progress / Delivered
2. [Request 2] - Status: Planned

### Action Items:
- Customer: [Action]
- Us: [Action]

### Next Check-In: [Date]
```

---

### **Quarterly Business Review (Every 3 Months)**

**Deeper session (45-60 min):**

#### **1. Trends Analysis:**
 - Quarter-over-quarter revenue growth
 - Staff performance trends (who improved? Who declined?)
 - Customer retention trends (NPS improving?)

**Prepare beforehand:**
- Pull QoQ comparison charts
- Identify 3-5 key insights
- Prepare 2-3 strategic recommendations

#### **2. Strategic Recommendations:**
 - Based on data: "Your lunch sales are down 12% vs Q1. Consider lunch promotion?"
 - "Your top 5 staff are 2x more productive than bottom 5. Time to coach or replace?"

**Framework:**
- What's working? (double down)
- What's not? (fix or cut)
- What's missing? (opportunity)

#### **3. Roadmap Discussion:**
 - Upcoming features: "We're adding inventory tracking next quarter. Want it?"
 - Customer needs: "What other data would help you make decisions?"

**Post-QBR:**
- [ ] Send summary email with key takeaways + action items
- [ ] Update dashboard with any new metrics discussed
- [ ] Update `/Clients/[Customer Name]/Quarterly_Reviews.md`

---

## Customization Management

### Up to 2 Customizations/Month Included

**When customer requests customization:**

1. **Log Request:**
 ```
 Customization Request #[X]
 Date: [Date]
 Request: [Description]
 Complexity: Simple/Medium/Complex
 Estimated Time: [Hours]
 Status: Approved/In Progress/Delivered
 ```

2. **Assess Complexity:**
 - **Simple (15-30 min):** Add metric, change chart type, update color
 - **Medium (1-2 hours):** Add new data source, create complex DAX
 - **Complex (4+ hours):** Major redesign, new integrations

3. **Set Expectations:**
 - Customizations 1-2/month: Included
 - Customization 3+: Rp 500K-1M each (or roll to next month)

4. **Deliver:**
 - Build in dev environment
 - Test with customer data
 - Push update to live dashboard (if cloud) or send updated .pbix
 - Document in changelog

**Changelog Format:**
```
## v1.2 - December 2025
- Added: Food waste tracking chart (Tab 1)
- Changed: Staff performance uses weighted scoring (Tab 2)
- Fixed: Date filter now includes current day

Requested by: [Customer Name]
Delivered: [Date]
```

---

## Support Management

### Support Channels:

| Channel | SLA | Best For |
|---------|-----|----------|
| **WhatsApp** | <24h | Urgent issues ("Dashboard not loading!") |
| **Email** | <24h | Questions, feature requests |
| **Phone Call** | Scheduled | Monthly check-ins |

### Tier 3 Premium Support (Product 02):

- Unlimited support (see [[Product 02]])
- Unlimited support (vs 90 days for Tier 2)
- Proactive monitoring (we catch issues before customer reports)

---

## Escalation Paths

**Level 1: Tier 3 Account Manager (You)**
- All routine support
- Dashboard updates
- Monthly calls

**Level 2: Tech Lead**
Escalate if:
- Power BI Service outages
- API integration failures
- Complex DAX debugging

**Level 3: Product Owner**
Escalate if:
- Major feature requests (requires product roadmap discussion)
- Pricing/contract changes
- Strategic partnership discussions

---

## Churn Prevention

### Warning Signs:

**Red Flag 1: Low Usage**
- Customer logs in <2 times/week
- **Action:** WhatsApp: "Haven't seen you in the dashboard lately—everything okay?"

**Red Flag 2: Cancellation Hints**
- Customer: "This is expensive for what I get"
- **Action:** Schedule call to understand concerns, offer to customize/optimize

**Red Flag 3: No Engagement**
- Customer doesn't respond to monthly check-in invites
- **Action:** Reduce contact frequency, send monthly email summary instead

### Retention Tactics:

**Tactic 1: Quarterly Business Reviews**
- Show ROI: "You found 3 underperforming staff -> saved Rp 20M in labor costs"
- Demonstrate value beyond dashboard

**Tactic 2: Proactive Insights**
- Between calls, WhatsApp insights: "Saw your Friday revenue spiked 40%—what changed?"
- Show you're paying attention

**Tactic 3: Continuous Improvement**
- Monthly: "Added new metric based on your feedback"
- Customer sees ongoing value

---

## Success Metrics

### Per-Customer Health Scorecard:

| Metric | Green | Yellow | Red |
|--------|-------|--------|-----|
| **Login Frequency** | 10+/month | 5-9/month | <5/month |
| **Monthly Call Attendance** | Attends | Reschedules | No-shows |
| **Support Tickets** | 0-2/month | 3-5/month | 6+/month |
| **Customization Requests** | 1-2/month | 0/month | 3+/month |
| **Payment Status** | On-time | 1-7 days late | 8+ days late |

**Green = Healthy | Yellow = Watch | Red = At Risk**

### Aggregate Tier 3 Metrics (Monthly):

- **Churn Rate:** Target <5%/month
- **Net Revenue Retention:** Target >100% (upsells offset churn)
- **NPS Score:** Target >50
- **Avg Support Tickets/Customer:** Target <3/month
- **Customization Utilization:** Target 70%+ customers use 2/month

---

## Offboarding (If Customer Cancels)

### Exit Process:

1. **Exit Interview (Optional):**
 - "What made you decide to cancel?"
 - "What could we have done differently?"
 - "Would you consider returning later?"

2. **Data Handoff:**
 - Send final .pbix file (their data, they own it)
 - Export historical data to CSV
 - Provide documentation for DIY maintenance

3. **Offer Downgrade:**
 - "Want to downgrade to Tier 1 (DIY) instead of canceling?"
 - Save partial revenue vs full churn

4. **Archive Customer Folder:**
 - Keep for 6 months (in case they return)
 - Delete credentials from password manager

---

**Related Documents:**
- [[02-tier-1-delivery-sop|Tier 1 Delivery SOP]] - For DIY customers
- [[04-tier-2-onboarding-sop|Tier 2 Onboarding SOP]] - For assisted setup customers
- [[products/01-power-bi-template/training/06-troubleshooting-kb|Troubleshooting KB]] - Self-service fixes
- [[08-maintenance-sop|Maintenance SOP]] - Ongoing technical maintenance procedures

**Last Updated:** 2025-12-27
**Owner:** Operations Lead / Customer Success Manager
**Version:** 1.0 (Split from combined Tier 2/3 SOP)


