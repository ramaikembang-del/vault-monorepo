# Customer Onboarding Playbook - Power BI Template (Product 01)

**Product:** A1 - Power BI F&B Analytics Template
**Department:** Customer Success
**Owner:** Customer Success Lead
**Last Updated:** January 8, 2026
**Status:** ACTIVE PLAYBOOK

---

## Executive Summary

### Purpose

This playbook defines the **complete customer onboarding process** from purchase to value realization for Power BI Template customers. The goal is to ensure **>85% setup success rate** and **>70% 30-day active usage** through structured, tier-specific onboarding.

### Success Metrics (Target vs Current)

| Metric | Target | Beta Results | Status |
|--------|--------|--------------|--------|
| **Day 7 Setup Success** | >85% | 92% (5/5) | EXCEEDING |
| **Day 30 Active Usage** | >70% | 80% (4/5) | EXCEEDING |
| **First Aha Moment** | <48 hours | <24 hours avg | EXCEEDING |
| **Day 90 Retention** | >85% | 100% (5/5) | EXCEEDING |
| **NPS (Day 30)** | >60 | 80 | EXCEEDING |

### Onboarding Timeline Overview

```
Day 0: Purchase -> Access granted
Day 1-7: Setup & First Dashboard
Day 8-30: Adoption & Habit Formation
Day 31-60: Value Expansion
Day 61-90: Retention & Upsell
```

---

## Part 1: Pre-Onboarding (Purchase -> Day 0)

### 1.1 Purchase Confirmation (Automated - Instant)

**Trigger:** Payment received via Midtrans

**Email Subject:** " Welcome to Power BI F&B Analytics - Your Access is Ready!"

**Email Template:**

```
Hi [First Name],

Selamat! You're now part of the Power BI F&B Analytics family.

Here's what happens next:

 IMMEDIATE ACCESS
Download link: [Secure Portal URL]
Username: [Email]
Password: [Auto-generated, sent separately]

WHAT'S INSIDE (Tier [X])
- [X] Excel templates for your F&B business
- [X] metrics Power BI dashboard
- [X] hours of Bahasa Indonesia video tutorials
- [Setup support for X days]

NEXT STEP: Watch the "Quick Start" video (15 min)
[Video Link]

 NEED HELP?
WhatsApp: [Support Number] (Response <4 hours)
Email: support@[company].com

You're going to love what you discover in your data.

Salam,
[Customer Success Team Name]

P.S. Most customers have their first "aha moment" within 24 hours.
Yours could be discovering food cost creep, underperforming items,
or peak hours you didn't know existed. Excited for you!
```

---

### 1.2 Access Provisioning (Automated - Within 5 min)

**System Actions:**

1. **Create customer account** in portal
 - Email as username
 - Auto-generated password
 - Tier-based permissions

2. **Grant downloads**
 - Tier 1: Essentials package (3 Excel templates, 30-metric dashboard, 5 videos)
 - Tier 2: Professional package (6 Excel templates, 70-metric dashboard, 10 videos, setup call booking)
 - Tier 3: Enterprise package (9 Excel templates, 100-metric dashboard, 15 videos, white-glove concierge email)

3. **Schedule onboarding emails** (drip campaign based on tier)

4. **Create CRM record**
 - Customer name, tier, purchase date
 - Onboarding status: "Pending Setup"
 - Assigned CSM (Tier 2-3 only)

---

### 1.3 Tier-Specific Welcome Flow

**Tier 1 (Self-Service):**
- 100% automated email sequence
- No 1:1 calls (unless customer requests)
- WhatsApp support available on-demand

**Tier 2 (Guided):**
- Auto-email: "Book your 2-hour setup call"
- Calendar link (Calendly) for CSM availability
- Target: Schedule within 3 days of purchase

**Tier 3 (White-Glove):**
- Manual email from assigned CSM within 2 hours
- "Welcome! I'm [CSM Name], your dedicated setup partner. When can we start?"
- Phone call option (not just email/WhatsApp)

---

## Part 2: Days 1-7 (Setup Week)

### 2.1 Day 1 Morning: Quick Start Video Nudge

**Automation Trigger:** 6 hours after purchase (if no download activity)

**WhatsApp Message Template:**

```
Hi [First Name]!

Just checking in - have you downloaded your Power BI templates yet?

If not, here's your access link again: [Portal URL]

 Start with this 15-min video: "Quick Start Guide"
[Direct Video Link]

Most customers are up and running in 30 minutes!

Need help? Reply here, I'm online.

- [CSM Name]
```

---

### 2.2 Day 1 Evening: First Login Celebration

**Automation Trigger:** Customer downloads .pbix file OR Excel template

**Email Subject:** " Great! You're 50% there..."

**Email Template:**

```
Hi [First Name],

I see you've downloaded your templates - excellent start!

Here's what to do next (takes <30 min):

STEP 1: Open "Daily-Sales.xlsx" (easiest template to start)
STEP 2: Fill in dummy data from your last week
STEP 3: Open the Power BI dashboard (.pbix file)
STEP 4: Click "Refresh" button
 -> Magic happens!

Watch the step-by-step: [Video: "Your First Dashboard in 10 Minutes"]

 GOAL FOR TODAY
Just see YOUR data appear in the dashboard. Even with dummy data.
The "wow moment" happens when you see your restaurant name in the title.

Reply if you get stuck!

- [CSM Name]
```

---

### 2.3 Day 2-3: Setup Support (Tier-Specific)

**Tier 1 (Self-Service):**

**Automation:** Daily check-in email (if no dashboard refresh detected)

**Day 2 Email:** "Stuck on CSV exports? Here's the cheat sheet"
- Link to POS-specific export guides (Moka, Pawoon, Qasir, Manual Excel)
- Troubleshooting FAQ
- WhatsApp support reminder

**Day 3 Email:** "Common setup mistakes (and how to fix them)"
- Data format errors
- Date/time formatting
- Missing columns


**Tier 2 (Guided Setup Call):**

**2-Hour 1:1 Call Agenda:**

**Minute 0-15: Discovery**
- "Walk me through your current reporting process"
- "What POS do you use? Show me a sample export"
- "What's the #1 metric you check daily?"

**Minute 15-45: Live Setup Together**
- Screen share (Google Meet/Zoom)
- Customer opens Excel template
- CSM guides data entry field-by-field
- "See this dropdown? Select your outlet name"
- "Date format should be DD/MM/YYYY, not MM/DD/YYYY"

**Minute 45-75: First Dashboard Refresh**
- Customer opens Power BI
- CSM guides: "Click Data -> Refresh All"
- **AHA MOMENT:** Dashboard populates
- CSM asks: "What do you notice immediately?"

**Minute 75-105: Key Insights Walkthrough**
- Top 10 items page: "These are your bestsellers"
- Food cost page: "This is where you make or lose money"
- Staff performance page: "This is how you identify star servers"

**Minute 105-120: Next Steps & Questions**
- "What would you like to explore next?"
- "Any customizations you'd like? (Note: Tier 2 includes 1 free customization)"
- Schedule follow-up (Day 30 check-in)

**Post-Call Email:** Recording + action items + resources


**Tier 3 (White-Glove):**

**Full 3-5 Day Implementation:**

**Day 1: Kickoff Call (60 min)**
- Meet the team (owner, GM, managers)
- Understand org chart, decision workflow
- Collect sample data exports from all outlets
- Set expectations: "Dashboard ready by Day 5"

**Day 2-3: CSM Builds Dashboard (Customer watches)**
- CSM does the work (customer observes)
- Screen share: "I'm customizing the Excel templates with your logo/colors"
- Custom POS export -> Excel template mapping
- Test data import

**Day 4: First Draft Review (60 min)**
- CSM presents populated dashboard
- "Here's your Outlet #1, Outlet #2, Outlet #3 side-by-side"
- Collect feedback: "Want different colors? Different metrics order?"
- Make live adjustments

**Day 5: Final Delivery + Training (90 min)**
- All stakeholders join (owner, managers)
- CSM trains each manager on Excel template (15 min each)
- Workflow walkthrough: "Manager fills Excel daily -> Owner clicks Refresh weekly"
- **AHA MOMENT:** Full multi-outlet insights revealed

---

### 2.4 Day 4-7: Troubleshooting & Iteration

**Common Issues Playbook:**

**Issue 1: "Power BI won't refresh - data source error"**

**Diagnosis Questions:**
- Desktop or Service?
- Error message exact text?
- Did you move the Excel files after setup?

**Solution:**
```
1. Click "Edit Queries" in Power BI
2. Click "Data Source Settings"
3. Click "Change Source"
4. Browse to the NEW location of your Excel files
5. Click OK -> Close & Apply
```

**Prevention:** Day 1 email should emphasize "Keep Excel files in ONE folder, don't move"

---

**Issue 2: "Dashboard shows wrong numbers - food cost is 150%!"**

**Diagnosis:**
- Check Excel template: Did they enter revenue in THOUSANDS? (Rp 1500 instead of Rp 1,500,000)
- Check date format: DD/MM vs MM/DD confusion

**Solution:**
- Email template: "Fix Your Data Format - 5-Min Video"
- Offer to jump on WhatsApp call: "Let me watch you enter one day's data"

---

**Issue 3: "I have 3 outlets, how do I combine them?"**

**Answer:**
- Tier 1: Not included. Upgrade to Tier 2 (+Rp 4M) for Multi-Outlet module
- Tier 2+: "You have this! Let me show you the 'Consolidated_View.xlsx' template"

---

### 2.5 Day 7 Check-In (All Tiers)

**Automation:** Email sent Day 7 at 9am

**Email Subject:** "Week 1 Complete - How's it going?"

**Email Template:**

```
Hi [First Name],

It's been 7 days since you started with Power BI F&B Analytics.

Quick check-in:

1⃣ Have you successfully populated your dashboard with real data?
 [ ] Yes, it's working!
 [ ] Partially, stuck on [issue]
 [ ] No, need help

2⃣ What was your first "aha moment"? (Reply with what you discovered!)

3⃣ On a scale of 1-10, how valuable is this so far?

 WEEK 2 CHALLENGE
This week, try to check your dashboard 3+ times. Daily review builds the habit!

Need help? Reply to this email or WhatsApp me.

- [CSM Name]
```

**CSM Action Based on Response:**

| Response | CSM Action |
|----------|------------|
| "Yes, working!" | Mark "Setup Success" in CRM, send Day 14 email |
| "Partially stuck" | Schedule 30-min troubleshooting call |
| "No, need help" | URGENT - Call customer within 4 hours |
| No response | WhatsApp follow-up Day 9: "Checking in - everything OK?" |

---

## Part 3: Days 8-30 (Adoption Phase)

### 3.1 Adoption Goal: Build Daily Habit

**Target Behavior:** Customer checks dashboard ≥3 times/week

**Psychological Hook:** "What changed today?" curiosity loop

---

### 3.2 Week 2: Feature Discovery

**Day 10 Email:** "Hidden Feature: Alerts & Notifications"

```
Hi [First Name],

Did you know you can set ALERTS in your dashboard?

Example: "Notify me if food cost >35%"

Here's how to set it up: [Video: "Power BI Alerts in 3 Minutes"]

Try setting ONE alert this week. What metric do you want to watch?

- [CSM Name]
```

---

**Day 14 Email:** "Your First 2-Week Review"

```
Hi [First Name],

You've been using the dashboard for 2 weeks!

 USAGE STATS [Auto-pulled from tracking if available]
- Logins: [X] times
- Most-viewed page: [Page Name]
- [Streak if applicable]

 INSIGHTS TO EXPLORE THIS WEEK
Based on other [Tier X] customers, you might want to check:
1. Food Cost Trend (last 7 days vs previous 7 days)
2. Top 10 Items (any new items breaking into top 10?)
3. Staff Performance (who's your #1 server this month?)

 CHALLENGE: Find ONE insight that surprises you, reply and tell me!

- [CSM Name]
```

---

### 3.3 Week 3: Value Expansion

**Day 18 Email:** "Customer Story: How Dimas Saved Rp 2M in Week 1"

```
Hi [First Name],

Quick story from another customer (Dimas, café owner in Jakarta):

Week 1: Discovered food cost was 37% (should be 30%)
Week 2: Investigated -> Found ingredient supplier raised prices 15%
Week 3: Switched supplier -> Food cost dropped to 32%
Result: Saved Rp 2.1M/month

 Watch his 2-min testimonial: [Video Link]

What's YOUR biggest discovery so far? (I'm genuinely curious!)

- [CSM Name]
```

---

**Day 21 Email (Tier 1 Only):** "Considering Tier 2? Here's why customers upgrade"

```
Hi [First Name],

Noticed you're using Tier 1 Essentials - awesome!

Just FYI, here's what Tier 2 Professional adds:
 70 metrics (vs your current 30)
 Multi-outlet consolidation (if you expand)
 Extended priority support (see [[Product 02]])
 1 free customization

Current Tier 1 -> 2 upgrade customers say:
"I outgrew 30 metrics after 3 weeks. Needed deeper insights."

Upgrade cost: Rp 4M (difference only, not full Rp 7M)

Interested? Reply "Tell me more"

- [CSM Name]
```

---

### 3.4 Week 4: Retention Lock-In

**Day 28 Email:** "Your 30-Day Report Card"

```
Hi [First Name],

 You've been a Power BI F&B Analytics customer for 30 DAYS!

Here's your report card:

 USAGE STATS
- Total logins: [X]
- Most active day: [Day]
- Streak: [X] consecutive days

 VALUE DELIVERED (self-reported or estimated)
- Savings discovered: [If customer shared]
- Revenue opportunities: [If applicable]
- Time saved: [Estimated based on tier]

 YOUR RANK
You're in the top [X]% of active users! (Seriously, impressive)

 QUICK SURVEY (2 questions, 60 seconds)
1. NPS: How likely (0-10) would you recommend this to a peer?
2. What ONE feature/metric would make this 10x more valuable?

Reply with your answers, I read every response!

- [CSM Name]

P.S. Referral bonus: Refer 1 peer -> They get Rp 500K off, you get Rp 1M credit
```

---

### 3.5 Day 30: Health Score Assessment

**CSM Reviews Customer Health (Internal Only):**

**Health Score Formula:**

| Factor | Weight | Scoring |
|--------|--------|---------|
| **Login Frequency** | 30% | 0-5 logins = 0pts, 6-10 = 50pts, 11-20 = 80pts, 21+ = 100pts |
| **Dashboard Refresh** | 25% | Never = 0pts, Once = 40pts, Weekly = 80pts, Daily = 100pts |
| **Support Engagement** | 15% | No response = 0pts, Minimal = 50pts, Engaged = 100pts |
| **NPS Score** | 20% | Detractor (0-6) = 0pts, Passive (7-8) = 60pts, Promoter (9-10) = 100pts |
| **Testimonial/Referral** | 10% | None = 0pts, Considering = 50pts, Yes = 100pts |

**Total Score: 0-100**

**Health Segmentation:**

- ** Green (80-100):** Thriving. High retention risk. Ask for referral.
- ** Yellow (50-79):** At Risk. Needs intervention. Schedule call.
- ** Red (<50):** Churning. URGENT intervention needed.

**Intervention Playbook:**

**Green (Thriving):**
- Email: "You're crushing it! Would you refer a peer?" (Referral program)
- Consider: Case study request ("Can we feature your story?")

**Yellow (At Risk):**
- Action: Schedule 30-min "Value Check-In" call
- Script: "I noticed you haven't logged in much lately. What's blocking you from using this more?"
- Possible causes: Too busy, data entry friction, not seeing value
- Solutions: Simplify workflow, add automation, upgrade to Tier 3 (done-for-you)

**Red (Churning):**
- Action: URGENT call within 24 hours (founder involvement if needed)
- Script: "I'm concerned we're not delivering value. What happened?"
- Offer: 30-day money-back guarantee reminder ("If this isn't working, let's make it right")
- Last resort: Discount on Product 02 support ("We'll manage it for you for 3 months free")

---

## Part 4: Days 31-60 (Value Expansion)

### 4.1 Month 2 Goal: Advanced Feature Adoption

**Target:** Customer uses ≥5 different dashboard pages (not just Overview)

**Week 5 Email:** "You're only using 20% of your dashboard"

```
Hi [First Name],

Quick observation: Most customers only use the "Overview" page.

But your [Tier X] dashboard has [X] pages! You're missing:
- Menu Engineering (bestsellers, low performers, profitability)
- Staff Performance (leaderboard, tips tracking)
- Customer Insights (VIP list, at-risk customers)

 CHALLENGE: Explore ONE new page this week.

Which one sounds most interesting? Reply and I'll send a 5-min tutorial.

- [CSM Name]
```

---

### 4.2 Month 2: Data Quality Improvement

**Week 6 Email:** "Is your data clean? (Garbage in = garbage out)"

```
Hi [First Name],

Your dashboard is only as good as your data entry.

 QUICK AUDIT (2 minutes):
1. Open your Excel template
2. Check last 7 days of data
3. Any blanks? Typos? Wrong formats?

Common mistakes:
- Missing outlet name (shows as "Unknown")
- Revenue in thousands instead of full amount (Rp 1500 vs Rp 1,500,000)
- Inconsistent item names ("Nasi Goreng" vs "nasi goreng" vs "Nasgor")

Want me to review your data? Send me your Excel file, I'll audit it (free).

- [CSM Name]
```

---

### 4.3 Month 2: Upsell Opportunity (Tier-Specific)

**Tier 1 -> Tier 2 Upsell (sent Week 8 if usage is high):**

```
Subject: "You've outgrown Tier 1 - Upgrade offer"

Hi [First Name],

I see you're logging in 15+ times/month (top 10% of Tier 1 users!).

Clearly, you're getting value. But I think you're hitting limits:

TIER 1 CONSTRAINTS you're probably feeling:
- Only 30 metrics (you've maxed out insights)
- No multi-outlet support (if you expand, you're stuck)
- Extended support (see [[Product 02]])

TIER 2 UPGRADES:
- 70 metrics (2.3x more insights)
- Multi-outlet consolidation
- Extended priority support (see [[Product 02]])
- 1 free customization

SPECIAL OFFER (THIS WEEK ONLY):
Upgrade for Rp 3M (vs normal Rp 4M)
+ We'll throw in a 2nd customization FREE

Reply "UPGRADE" if interested. Offer expires [Date].

- [CSM Name]
```

---

**Tier 2 -> Tier 3 Upsell (sent Week 7 if customer requests ≥2 support tickets):**

```
Subject: "You need Tier 3 - Here's why"

Hi [First Name],

I see you've reached out for support [X] times this month.

Nothing wrong with that! But I'm noticing a pattern:
You want us to DO more, not just ADVISE.

TIER 3 = WE DO THE WORK
Instead of you:
- Managing data refreshes -> We auto-refresh monthly
- Troubleshooting errors -> We handle it
- Training staff -> We train your team
- Customizing reports -> We build custom views

TIER 2 vs TIER 3:
- Tier 2: You're the driver (we're the GPS)
- Tier 3: We're the driver (you're the passenger)

COST:
Upgrade: Rp 3.5M setup (one-time)
Optional support: See [[products/02-template-support/02-template-support|Product 02]] tiers

Worth it if: You value your time >Rp 500K/hour.

Interested? Let's talk (call or WhatsApp).

- [CSM Name]
```

---

## Part 5: Days 61-90 (Retention & Advocacy)

### 5.1 Month 3 Goal: Lock-In Retention

**Target Outcome:** Customer can't imagine going back to Excel

**Week 10 Email:** "Imagine going back to Excel... (you can't, right?)"

```
Hi [First Name],

Quick thought experiment:

If I took away your Power BI dashboard TODAY, how would you feel?

a) "Relieved, I'd go back to Excel happily"
b) "Meh, I'd manage"
c) "No way! I need this now!"

If you answered (c), CONGRATS! You've built a data-driven habit.

If (a) or (b)... let's talk. What's missing?

- [CSM Name]
```

---

### 5.2 Day 90 Graduation: Success Certification

**Day 90 Email:** " You've Graduated - Onboarding Complete!"

```
Subject: "Congrats! You're officially a Power BI Pro"

Hi [First Name],

It's been 90 DAYS since you started with Power BI F&B Analytics.

YOU DID IT!

 YOUR 90-DAY STATS
- Total logins: [X]
- Insights discovered: [Estimated based on usage]
- Time saved: [Calculated: 4hrs/week × 12 weeks = 48 hours]
- Estimated ROI: [Based on reported savings]

 GRADUATION GIFT
Here's your "Power BI F&B Analytics Certified User" badge (PNG)
[Download Badge] - Post it on LinkedIn if you want!

 WHAT'S NEXT?

You're now officially OFF onboarding support.

Going forward:
- Tier 1: Self-service (community forum for questions)
- Tier 2: Email support continues (response <24 hours)
- Tier 3: Unlimited support continues (see Product 02)

 ONE LAST ASK
Would you be willing to share your success story?
- 30-min interview -> We create a case study
- You get: Rp 1M credit + Featured on our website

Interested? Reply "YES"

Thanks for being an awesome customer!

- [CSM Name]
```

---

## Part 6: Onboarding Failure Protocols

### 6.1 Early Warning System (Days 1-7)

**Red Flags (Automated Monitoring):**

| Trigger | Alert | CSM Action | Timeline |
|---------|-------|------------|----------|
| **No download after 24h** | Yellow | WhatsApp nudge | Day 2 |
| **No dashboard refresh by Day 5** | Orange | Email: "Stuck? Let me help" | Day 5 |
| **No login by Day 7** | Red | CALL customer (not email) | Day 7 |
| **Negative NPS response (<7)** | Red | Founder escalation | Immediately |
| **Support ticket unresolved >3 days** | Red | Escalate to senior CSM | Day 4 of ticket |

---

### 6.2 Intervention Scripts

**Scenario 1: Customer Not Downloading (Day 2 WhatsApp):**

```
Hi [First Name],

I noticed you haven't downloaded your templates yet.

Everything OK?

Common reasons customers delay:
- "Too busy right now" -> I get it! When's a better time?
- "Not sure where to start" -> Watch this 5-min video: [Link]
- "Regretting purchase?" -> We have 30-day money-back guarantee, no hard feelings

What's your situation? Reply here, I'm here to help.

- [CSM Name]
```

---

**Scenario 2: Customer Stuck on Setup (Day 5 Email + Call Offer):**

```
Subject: "Need a hand? Let's get you unstuck"

Hi [First Name],

I see you downloaded the files but haven't refreshed the dashboard yet.

Where are you stuck?

COMMON BLOCKERS:
1. CSV export confusion -> [Video: POS Export Guide]
2. Excel template intimidating -> [Video: Fill Template in 10 Min]
3. Power BI won't open -> [Troubleshooting Guide]

OR... let's just jump on a call.

Book 30 min with me: [Calendly Link]
(Available today and tomorrow)

You're SO CLOSE! Let's finish this together.

- [CSM Name]
```

---

**Scenario 3: Customer Ghosting (Day 7 Urgent Call):**

**Call Script:**

```
"Hi [First Name], this is [CSM Name] from [Company].

I'm calling because I haven't seen any activity on your account since you purchased on [Date].

I'm a bit concerned - did something go wrong?

[Listen]

[If technical issue]
 -> "Let me help you right now. Do you have 15 minutes? I'll walk you through setup."

[If buyer's remorse]
 -> "I totally understand. We offer 30-day money-back guarantee, no questions asked.
 But before you decide, can I ask - what were you hoping this would do for you?"

[If too busy]
 -> "I get it. When's a better time? Or would you prefer we just set it up FOR you?
 (Tier 3 option - we do everything)"

[Close]
 -> "Here's what I'll do: I'll send you a custom quick-start video made just for YOUR business.
 Watch it when you have time. If you're still stuck in 3 days, I'll call you back. Deal?"
```

---

### 6.3 Churn Prevention (Days 60-90)

**Low Usage Intervention (Day 60 if <10 logins):**

```
Subject: "Are we losing you?"

Hi [First Name],

I'll be direct: I haven't seen you login much in the last month.

What's going on?

Is it:
a) Too busy to check data
b) Not finding it useful
c) Technical issues blocking you
d) Something else

Please reply. If this isn't working for you, I want to know why.

We still have your 30-day money-back option open until [Date].

But I'd rather fix the problem than process a refund.

Can we talk?

- [CSM Name]
```

**Post-Intervention Actions:**

If customer responds:
- Schedule call within 24 hours
- Diagnose real issue (not just symptom)
- Offer solution:
 - Simplify workflow? (automate more)
 - Add missing feature? (free customization)
 - Upgrade/downgrade tier?
 - Pause and restart later? (special consideration)

If customer doesn't respond:
- Mark "At-Risk Churn" in CRM
- Founder review (decide: fight for them or let go gracefully)

---

## Part 7: Success Metrics & KPIs

### 7.1 Onboarding Funnel Metrics

| Stage | Metric | Target | Beta Results | Tracking Method |
|-------|--------|--------|--------------|-----------------|
| **Purchase -> Download** | % who download within 24h | >80% | 100% (5/5) | Portal tracking |
| **Download -> First Refresh** | % who refresh dashboard within 7 days | >70% | 100% (5/5) | Power BI telemetry |
| **First Refresh -> Active User** | % who login ≥3x in Week 2-4 | >60% | 80% (4/5) | Portal tracking |
| **Active User -> Retention** | % who renew/continue at Day 90 | >85% | 100% (5/5) | CRM tracking |

---

### 7.2 Time-to-Value Metrics

| Milestone | Target | Beta Average | Best Case | Worst Case |
|-----------|--------|--------------|-----------|------------|
| **Purchase -> Access** | <5 min | 3 min | 2 min | 8 min |
| **Access -> First Download** | <4 hours | 2 hours | 15 min | 18 hours |
| **Download -> Dashboard Populated** | <24 hours | 8 hours | 30 min | 3 days |
| **Dashboard -> First Insight** | <48 hours | <24 hours | 1 hour | 5 days |
| **First Insight -> Behavioral Change** | <14 days | 7 days | 3 days | 21 days |

---

### 7.3 Customer Satisfaction Metrics

| Survey | Timing | Target NPS | Beta NPS |
|--------|--------|------------|----------|
| **Setup Experience** | Day 7 | >60 | 75 |
| **Product Value** | Day 30 | >70 | 80 |
| **Overall Satisfaction** | Day 90 | >60 | 80 (4 promoters, 1 passive) |

---

## Part 8: Tier-Specific Onboarding Summaries

### 8.1 Tier 1 (Essentials) - Full Timeline

| Day | Touchpoint | Type | Goal |
|-----|------------|------|------|
| 0 | Purchase confirmation | Email | Immediate access |
| 1 | **Tier 2** | Product 02 (extended) | Email + WhatsApp | <4 hours | 2-3 hours total |
| 2 | Setup help | Email (if no progress) | Overcome blockers |
| 5 | Troubleshooting | Email | Solve common issues |
| 7 | Week 1 check-in | Email | Confirm setup success |
| 14 | 2-week review | Email | Build habit |
| 21 | Upsell tease | Email | Plant Tier 2 seed |
| 30 | Report card | Email + Survey | NPS + health score |
| 60 | Re-engagement (if low usage) | Email | Prevent churn |
| 90 | Graduation | Email | Transition to self-serve |

**Total Touchpoints:** 10 emails, 2-3 WhatsApp (if needed)

---

### 8.2 Tier 2 (Professional) - Full Timeline

| Day | Touchpoint | Type | Goal |
|-----|------------|------|------|
| 0 | Purchase + setup call booking | Email | Schedule call within 3 days |
| 1-3 | 2-hour setup call | 1:1 Call | Complete setup together |
| 3 | Post-call recap | Email | Action items + recording |
| 7 | Week 1 check-in | Email | Confirm adoption |
| 14 | Feature discovery | Email | Expand usage |
| 30 | Report card + NPS | Email + Survey | Health assessment |
| 45 | Mid-support check-in | Email | "30 days of support left" |
| 60 | Upsell to Tier 3 | Email | If high engagement |
| 90 | Graduation | Email | Transition to email support |

**Total Touchpoints:** 8 emails, 1 setup call, 1 follow-up call (optional)

---

### 8.3 Tier 3 (Enterprise) - Full Timeline

| Day | Touchpoint | Type | Goal |
|-----|------------|------|------|
| 0 | Welcome from dedicated CSM | Email + Possible call | Relationship start |
| 1 | Kickoff call scheduling | Email | Book within 2 days |
| 2-5 | Full implementation | 3-4 calls/sessions | CSM builds everything |
| 5 | Final delivery | 90-min session | Training + handoff |
| 7 | Post-launch check-in | Email | Resolve any issues |
| 14 | Usage review | Call | Ensure adoption |
| 30 | First monthly review | Call (if Product 02 support) | Strategic insights |
| 60 | QBR scheduling | Email | Book quarterly review |
| 90 | QBR execution | 60-min call | Long-term strategy |

**Total Touchpoints:** 12+ emails, 5-7 calls, ongoing (if Product 02)

---

## Part 9: Tools & Resources

### 9.1 CSM Toolkit

**Required Tools:**
- CRM (HubSpot/Salesforce): Customer records, onboarding stage tracking
- Email automation (Mailchimp/SendGrid): Drip campaigns
- Calendar (Calendly): Setup call booking
- Video recording (Loom): Custom walkthroughs
- WhatsApp Business: Real-time support
- Power BI Service: Usage analytics (if customers publish to cloud)

**Templates:**
- Email templates (all Day X emails above)
- Call scripts (discovery, setup, intervention)
- Health score calculator (spreadsheet)

---

### 9.2 Self-Service Resources (Customer Portal)

**Video Library:**
- Quick Start (15 min)
- Excel Template Walkthrough (30 min per template)
- Dashboard Navigation (20 min)
- Common Troubleshooting (10 min)
- Advanced Features (5-10 min each)

**Documentation:**
- Setup guides (PDF)
- POS export guides (Moka, Pawoon, Qasir)
- FAQ (updated based on common support questions)

---

## Part 10: Continuous Improvement

### 10.1 Quarterly Playbook Review

**Review cadence:** Every Quarter (Q1, Q2, Q3, Q4)

**Review questions:**
1. Are target metrics still relevant?
2. Which emails have lowest open rates? (Cut or rewrite)
3. Which intervention scripts work best? (Double down)
4. New failure patterns emerging? (Add to playbook)

---

### 10.2 Customer Feedback Loop

**Sources:**
- NPS surveys (Day 30, 90)
- Support ticket themes
- Call recordings (review 10% for insights)
- Churn interviews ("Why are you leaving?")

**Action:**
- Monthly CSM team meeting: "What did we learn this month?"
- Update playbook based on learnings
- Share wins: "This script saved 3 at-risk customers this month"

---

**Document Owner:** Customer Success Lead
**Last Updated:** January 8, 2026
**Next Review:** April 2026 (Post-Q1)

**Related Documents:**
- [[products/01-power-bi-template/customer-success/02-health-scoring|Health Scoring Framework]]
- [[products/01-power-bi-template/customer-success/01-faq|Customer FAQ]]
- [[products/02-template-support/02-template-support|Product 02 - Template Support]] (for post-onboarding support tiers)
