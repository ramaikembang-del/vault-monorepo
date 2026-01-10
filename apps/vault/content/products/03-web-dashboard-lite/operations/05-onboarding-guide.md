# Onboarding Guide - Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Flow:** Download  ->  Activation  ->  Habit Formation
**Timeline:** First 7 days critical for retention

---

## Pre-Download: Discovery & Acquisition

### Marketing Touchpoint

**Channel:** Facebook Groups, Organic Search, Referral from A1 buyers

**Landing Page Message:**
> "Free F&B Analytics That Works Offline - No Internet, No Problem"
>
> 6 survival metrics. Offline-first. Free forever.
>
> [DOWNLOAD FREE - Windows/Mac]

**Conversion Target:** 5% landing page  ->  download

---

## Day 1: First Launch Experience

### Download & Install (15 minutes)

**User Action:**
1. Downloads Electron app (50MB installer)
2. Installs to desktop
3. First launch: Welcome screen

**Welcome Screen:**
```
[Logo]

Welcome to FnB Dashboard Lite!

Your offline-first analytics for survival-mode F&B business.

[x] Works without internet
[x] Data stays on YOUR device (privacy-first)
[x] 6 metrics, free forever

Let's get started (3 steps, 5 minutes)

[CONTINUE]  ->  Button
```

---

### Step 1: Create PIN (30 seconds)

**Screen:**
```
Step 1 of 3: Secure Your Data

Create a 4-digit PIN to protect your business data:

[____] [PIN input]

Why? Your data includes revenue, staff performance - sensitive info!

[NEXT]
```

**Security Note:** SQLite database encrypted with PIN

---

### Step 2: Upload First CSV (2 minutes)

**Screen:**
```
Step 2 of 3: Import Your POS Data

Drag & drop your POS CSV file here, or click to browse:

[ Drop CSV Here]

[x] Supported: Moka, Pawoon, Qasir, OKEPOS, CIMS
(Time) Need at least 7 days of data (1 month recommended)

Don't have CSV? [Watch how to export from Moka] [Pawoon] [Qasir]

[SKIP FOR NOW - Use Sample Data]
```

**Smart Detection:**
- Auto-detects POS format (Moka vs Pawoon vs Qasir)
- Shows preview: "Found 1,234 transactions from Dec 1-25"
- Asks confirmation: "Looks good? Import now?"

---

### Step 3: Business Info (1 minute)

**Screen:**
```
Step 3 of 3: About Your Business

Restaurant Name: [Input]
Location: [City Dropdown]
Business Type: [CafÃ© / Restaurant / Food Stall / Ghost Kitchen]

Why? We'll show relevant benchmarks (e.g., "CafÃ©s in Jakarta avg 32% food cost")

[FINISH SETUP]
```

---

### First Dashboard View (Immediate)

**Screen Loads:**
```
[Health Score Dashboard - Center]

 Welcome to Your Dashboard!

Health Score: 72 (Yellow - Watch Carefully)

Quick Tour:
 ->  Health Score (0-100): Overall business health
 ->  Revenue vs Target: Are you on track today?
 ->  Staff Leaderboard: Top 5 performers
 ->  Top 5 Sellers: Best menu items
 ->  Peak Hours: When to staff up
 ->  Week Trend: Revenue up or down?

[SKIP TOUR] [TAKE 2-MIN TOUR]
```

**2-Minute Tour:** Interactive tooltips explaining each metric

---

## Day 2: Return & Engagement

### Daily Check Habit Formation

**Goal:** User returns Day 2 (70%+ D2 retention target)

**Trigger:** Desktop shortcut reminder (Windows/Mac)

**Screen:**
```
Good Morning! 

Yesterday's Performance:
Revenue: Rp 850K (Target: Rp 900K)  ->  94% [!]
Health Score: 72  ->  69 (dropped 3 points)

What changed?
- Food cost spiked to 36% (was 32% yesterday)
- Staff #3 (Dewi) underperforming (Rp 45K/hour vs avg Rp 60K)

Quick Actions:
 ->  Check Food Cost (why spike?)
 ->  Talk to Dewi (coaching needed?)

[VIEW FULL DASHBOARD]
```

**Engagement Tactic:** Show delta from yesterday (creates curiosity)

---

## Day 3-7: Habit Formation

### Day 3: Feature Discovery

**In-App Prompt:**
```
 Did You Know?

You can click any metric to see details.

Try: Click "Staff Leaderboard"  ->  See individual performance cards

[GOT IT]
```

---

### Day 5: Upgrade Teaser (Freemium Hook)

**Trigger:** User has checked dashboard 5+ times

**Prompt:**
```
You're Using This Well!

You've checked your dashboard 5 times.

Want more insights?

 15 metrics in Starter tier (Rp 200K/month)
 - Customer loyalty tracking
 - Advanced staff analytics
 - Email weekly digest

 30 metrics in Pro tier (Rp 350K/month)
 - Industry benchmarks
 - Custom metric builder
 - Priority support

[UPGRADE NOW] [MAYBE LATER]
```

**Conversion Expectation:** 5-10% explore pricing on Day 5

---

### Day 7: Week 1 Summary Email

**Email (If Email Collected):**
```
Subject: Your First Week with FnB Dashboard Lite

Hi [Name],

You made it through Week 1! Here's what you learned:

 Your Week 1 Stats:
- Logged in 6 times (above average!)
- Health Score range: 69-75 (fluctuating - normal)
- Highest revenue day: Thursday (Rp 1.2M)
- Lowest: Monday (Rp 650K)

 Action Item for Week 2:
Your Thursday performance is 85% better than Monday. Why?

Clue: Check Peak Hours heatmap  ->  Thursday has 2 busy periods (lunch + dinner), Monday only has dinner.

 Experiment: Can you boost Monday lunch sales?

---

Want More Insights?

Free tier = 6 metrics (survival focus)
Starter tier (Rp 200K/mo) = 15 metrics (growth focus)
Pro tier (Rp 350K/mo) = 30 metrics (optimization focus)

[COMPARE TIERS]

Keep checking daily - Week 2 is when insights click!

Best,
PWBI Team
```

---

## Day 14: Two-Week Milestone

### Retention Check

**Target:** 50%+ D14 retention (half of Day 1 users still active)

**In-App Celebration:**
```
 14-Day Streak!

You've checked your dashboard 12 times in 2 weeks.

Your Progress:
- Week 1 avg Health Score: 71
- Week 2 avg Health Score: 76 (+5 improvement!)

You're in the top 20% of users (most check 3-5 times/week).

What's Working?
- Daily check habit formed [x]
- Acting on insights (Health Score improving) [x]

Want to 10x your insights?

[UPGRADE TO STARTER - Rp 200K/month]

Or keep free tier - totally fine! We're here either way.

[CONTINUE FREE] [UPGRADE]
```

---

## Churn Prevention (High-Risk Signals)

### Signal 1: No Activity Days 3-5

**Intervention:** Email (Day 6)

```
Subject: Missing You! Dashboard Lonely

Hi [Name],

Noticed you haven't checked the dashboard since Day 2.

Common reasons:
- Too busy? (We get it - set up auto-refresh, check 1Ã—/week)
- Confusing? (Reply, we'll do 10-min screen-share)
- Not valuable? (Tell us what metrics you ACTUALLY need)

Quick poll: Why haven't you logged back in?
[Too Busy] [Confusing] [Not Useful] [Other]

We're here to help.

Best,
PWBI Support
```

---

### Signal 2: Only Checked Once (Day 1 Only)

**Intervention:** Day 4 Email

```
Subject: Stuck on Setup? We Can Help

Hi [Name],

You set up the dashboard on Day 1, but haven't been back.

Did something go wrong?

Common Day 1 issues:
- CSV import failed  ->  Send us your file, we'll fix it
- Don't understand metrics  ->  5-min call, we'll explain
- Forgot PIN  ->  We can reset it

Reply "help" and we'll unblock you (response <12h).

Don't give up! It gets easier Day 2+.

Best,
PWBI Support
```

---

### Signal 3: High Engagement but No Upgrade Interest (Day 30)

**Intervention:** In-App Prompt

```
Power User Alert! ⚡

You've checked the dashboard 25 times this month.

You clearly value analytics. Why still on free tier?

Common reasons:
1. "Price too high"  ->  We have Rp 150K intro offer (not public)
2. "Free is enough"  ->  Totally valid! Keep using free forever.
3. "Want to try first"  ->  You've been trying for 30 days

If #1 or #3, reply and we'll unlock intro pricing.

[INTERESTED] [HAPPY WITH FREE]
```

---

## Upgrade Triggers (Free  ->  Paid)

### Trigger 1: Daily Usage (7+ Days/Week)

**Message:**
```
You're Checking Daily!

You've logged in every day this week.

You're a power user. Ready for power features?

Starter Tier (Rp 200K/month) adds:
- Customer loyalty tracking (Who's your VIP?)
- Staff coaching insights (Who needs help?)
- Cash flow forecast (Will you have cash next month?)

Free trial: 30 days. Cancel anytime.

[TRY STARTER FREE]
```

**Conversion Rate:** 15-20% of daily users upgrade

---

### Trigger 2: Locked Feature Click (3+ Times)

**Scenario:** User clicks "Customer Loyalty" (locked in free tier) 3 times

**Message:**
```
You Keep Clicking "Customer Loyalty"

This feature is in Starter tier (Rp 200K/month).

What you'll get:
- Patronage Ladder (First-timer  ->  VIP)
- Revenue at Risk (lapsed customers)
- NPS tracking

Worth Rp 200K? Here's the ROI:

If this helps you retain 1 VIP customer/month (avg Rp 500K/month value), that's Rp 300K saved. ROI = 150%.

[UNLOCK CUSTOMER LOYALTY]
```

**Conversion Rate:** 25% of repeat clickers upgrade

---

### Trigger 3: Health Score Consistently Red (<50)

**Scenario:** User's Health Score is red for 7+ days

**Message:**
```
Need Help?

Your Health Score has been red (40-48) for a week.

This usually means:
- Food cost too high (>35%)
- Revenue declining
- Staff issues

Pro tier (Rp 350K/month) adds:
- Root cause analyzer (What's actually wrong?)
- Action recommendations (Fix X to improve score by Y)
- Benchmark comparison (Are you worse than average?)

You're struggling. Let us help.

[TRY PRO FREE - 30 Days]

Or stay free - we're not pushy. Just offering.
```

**Conversion Rate:** 10% of struggling users upgrade (desperate for help)

---

## Success Metrics

**Activation (Day 1):**
- Download  ->  Install: 80%+
- Install  ->  Create PIN: 90%+
- Create PIN  ->  Upload CSV: 70%+
- **Overall Activation: 50%+** (download  ->  first dashboard view)

**Retention:**
- D2 (Day 2): 70%+ (critical)
- D7 (Week 1): 60%+
- D14 (2 weeks): 50%+
- D30 (Month 1): 40%+

**Engagement:**
- Daily actives: 30%+ of total users
- Weekly actives: 60%+ of total users
- Avg sessions/week: 4+ (healthy usage)

**Conversion (Free  ->  Paid):**
- Click "Upgrade": 15%+ (interest)
- Start free trial: 10%+ (intent)
- Convert to paid: 5-10%+ (actual $$$)

---

**Related Documents:**
- [[products/02-template-support/product-strategy/product-scope|product-scope.md]] - 6 free metrics detailed
- [[products/02-template-support/operations/gate-tracking|gate-tracking.md]] - PMF validation metrics
- [[products/03-web-dashboard-lite/sales/conversion-optimization|conversion-optimization.md]] - Upgrade tactics

**Last Updated:** 2025-12-26
**Owner:** Product/Onboarding Lead

