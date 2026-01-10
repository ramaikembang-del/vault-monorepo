# Onboarding Guide - Simple P&L Tracker

**Product:** R2a - Simple P&L Tracker
**Product ID:** R2a
**Pillar:** P2 - Retention (Accounting Add-On)
**Goal:** User generates first P&L Report within 15 minutes
**Primary Metric:** "Time to First Value" (TTFV) < 15 minutes
**Success Definition:** 80%+ activation rate (users who generate first P&L within 24 hours)

---

## Onboarding Philosophy

**Core Principle:** "Show, Don't Tell"

Most accounting software starts with tutorials. We start with **immediate value delivery**: Get users to their first P&L report in 15 minutes, then educate incrementally.

**Why This Works for Indonesian Mikro Owners:**
- Low patience for lengthy tutorials ("Ewuh Pakewuh" - reluctant to feel stupid)
- "Seeing is believing" culture (show the P&L PDF  ->  instant trust)
- Busy schedules (15 minutes max before serving customers)

**Strategic Impact:** Onboarding drives Gate 2A success (80%+ activation required). Poor activation = product failure.

**Cross-Reference:** See [[gate-tracking|gate-tracking.md]] for activation metrics and [[products/04-accounting-module/product-variants/R2a-pl-analytics/product-strategy/market-positioning|market-positioning.md]] for cultural context.

---

## The "First 15 Minutes" Flow (Detailed)

### Minute 0-2: Welcome & Setup

**Screen 1: Welcome (Indonesian + English)**
```
"Selamat datang! / Welcome to Stress-Free Accounting"

"Generate your first Profit & Loss report in 15 minutes.
No accounting knowledge required."

[Button: "Mulai / Let's Start"]
```

**Screen 2: Business Profile**
- Business Name: [________] (e.g., "Warung Pak Budi")
- Address (optional): [________]
- Currency: IDR (locked)
- Start Month: December 2025 (default: current month)

**Live Preview:** As user types name, show PDF header preview below form.

---

### Minute 2-7: Import Revenue (Critical Step)

**Screen 3: Revenue Source**
```
"Bagaimana Anda mencatat penjualan?"
(How do you track sales?)

[Option A: "Saya pakai sistem POS" - I use POS]
[Option B: "Saya catat manual" - I track manually]
```

**Path A: POS Import (80% of users)**

**Step 1: Select POS**
[Moka] [Pawoon] [Qasir] [Majoo] [GoBiz] [Other]

**Step 2: Upload CSV**
```
"Export sales from Moka and upload CSV here."

[Expandable Help:]
How to export from Moka:
1. backoffice.mokapos.com
2. Reports > Sales > Sales Summary
3. Date: Dec 1-25
4. Export > Detailed CSV

[Drag & Drop Area]
```

**Step 3: Success Confirmation**
```
[x] Imported 234 transactions

Revenue:
- Dine-in: Rp 15,000,000
- Takeaway: Rp 8,000,000
- Delivery: Rp 5,000,000
Total: Rp 30,000,000 (Dec 1-25)

[Continue  -> ]
```

**Path B: Manual Entry**
```
Revenue Type | Amount (Rp)
-------------|-------------
Dine-in | [_______]
Takeaway | [_______]
Delivery | [_______]

Total: Rp [auto-calc]
[Continue  -> ]
```

---

### Minute 7-12: Log Key Expenses

**Screen 4: Top 3 Expenses**
```
"Biaya operasional terbesar bulan ini?"
(Biggest operating costs this month?)

1. Sewa / Rent: Rp [_______]
 (Typical: Rp 3,000,000)

2. Gaji Karyawan / Staff: Rp [_______]
 (Typical: Rp 6,000,000 for 3 staff)

3. Bahan Baku / Ingredients: Rp [_______]
 (Tip: Usually 30% of revenue = Rp 9,000,000)

[Skip This] [Log 3 Expenses  -> ]
```

**Smart Defaults:** Pre-fill estimates based on user's revenue size.

---

### Minute 12-15: The "Magic Moment"

**Screen 5: Generate P&L**
```
"Ready to see your profit?"

[Big Button: "Buat Laporan / Generate P&L Report"]

Processing... (3 seconds)

[x] Your P&L is Ready!

Revenue: Rp 30,000,000
COGS: Rp 9,000,000 (30%)
Gross Profit: Rp 21,000,000
OpEx: Rp 12,000,000 (40%)
Net Profit: Rp 9,000,000 (30%)  -> Highlighted

[Download PDF] [View Details]
```

**Celebration Animation:** Confetti + "Selamat! You just did your accounting in 15 minutes."

---

## Activation Funnel Tracking

### Funnel Metrics (Target vs Actual)

| Step | Description | Target % | Typical Drop-off |
|------|-------------|----------|------------------|
| Step 1 | Sign up | 100% |  -  |
| Step 2 | Complete profile | 95% | 5% (bounce) |
| Step 3 | Import/Enter revenue | 85% | 10% (confused) |
| Step 4 | Log expenses | 75% | 10% (impatient) |
| Step 5 | Generate P&L | 80% | 5% (technical error) |

**Critical Drop-off Point:** Step 3 (Revenue Import).
**Why:** CSV upload failures, wrong file format, confusion on where to export.

**Intervention:** If user stuck on Step 3 for >5 mins, show: "Need help? [Watch 1-min video] or [Chat with support]"

---

## Day 1-30 Behavioral Journey

### Day 1: Reinforce Success

**Email (2 hours after first P&L):**
```
Subject: "Your First P&L Report (Keep for Your Records)"

Hi [Name],

Congrats on generating your first P&L report!
Attached: December_PL_Warung_Pak_Budi.pdf

Next Steps:
1. Review the report (is your profit what you expected?)
2. Set up WhatsApp bot for easy expense logging
3. Add missed expenses (utilities, marketing, etc.)

Questions? Reply to this email.

Best,
R2a Team
```

**Attachment:** PDF copy of their P&L.

---

### Day 2-3: WhatsApp Bot Setup (Habit Lock-in)

**Trigger:** Email + Push notification

```
Subject: "Stop Hoarding Receipts. Log Expenses via WhatsApp."

[Screenshot of WhatsApp bot in action]

How it works:
1. Add our number: +62-xxx-xxxx
2. Send: "50k bahan baku" (50K ingredients)
3. Done! Logged to your dashboard.

[Connect WhatsApp Bot]

Why this matters:
Users who log 5+ expenses/week have 80% lower churn.
Make it a habit, make it stick.
```

**Cultural Note:** Indonesians prefer WhatsApp over email/app. This is the #1 stickiness driver.

---

### Day 7: Weekly Expense Reminder

**Every Friday 4pm (Email + WhatsApp):**
```
"Hari Jumat - Waktunya update pengeluaran minggu ini!"
(Friday - Time to update this week's expenses!)

You logged 3 expenses this week. Great start!

Missing anything?
- Utilities (listrik, air)?
- Parking fees?
- Staff bonuses?

[Log Expenses in 30 Seconds]

Tip: Logging weekly = no scramble at month-end.
```

**Behavioral Insight:** Weekly nudge prevents "backlog bunching" (major churn driver).

---

### Day 14: Feature Discovery (Expand Usage)

**Email:**
```
Subject: "Did You Know? Month-over-Month Comparison"

Hi [Name],

You've generated 2 P&Ls (Dec + Jan). Nice!

Try this: Compare Dec vs Jan
 ->  See if profit is growing or shrinking
 ->  Identify trends (e.g., "COGS up 5%")

[View MoM Comparison]

This helps you catch issues early.
```

**Goal:** Move users from "basic" to "power user" (deeper engagement).

---

### Day 21: Social Proof (Reduce Uncertainty)

**Email:**
```
Subject: "How Other Warungs Use R2a"

[Case Study:]
Warung Makan Sari (Surabaya)
Used R2a P&L for KUR loan application  ->  Approved Rp 50M at 6%.

"Bank BRI accepted my SAK EMKM report immediately."
 -  Pak Sari

Want to apply for KUR? Your P&L is ready to go.
[Download Bank-Ready PDF]
```

**Behavioral Trigger:** Aspiration ("Naik Kelas") + social proof.

---

### Day 30: The "Month-End Close" Ritual

**Trigger:** 1st of month (auto-email)

```
Subject: "Desember Selesai - Tutup Buku Anda" (December Done - Close Your Books)

Hi [Name],

December is over. Time to close the books!

Checklist:
[x] Upload final POS export (Dec 1-31)
[x] Review all expenses (add any missed)
[ ] Generate final December P&L
[ ] Email report to partner/accountant

[Complete Month-End Close]

Stat: Users who close monthly have 3Ã— better financial outcomes.
```

**Goal:** Establish monthly ritual (recurring engagement).

---

## Churn Prevention Framework

### Early Warning Signals (Days 1-7)

**Signal 1: No Return After Day 1**
**Trigger:** User generated P&L on Day 1, but didn't log in Day 2-7.

**Intervention (Day 5 Email):**
```
Subject: "Still working on your accounting?"

We noticed you generated your first P&L but haven't been back.

Common reasons:
- Too busy? (WhatsApp bot makes it 30 secs/day)
- Didn't see value? (Tell us what's missing)
- Confused? (Book a 10-min call with us)

[Continue Where You Left Off]

We're here to help!
```

---

**Signal 2: Stuck on Step 3 (Revenue Import)**
**Trigger:** 10+ min on CSV upload screen, no success.

**In-App Intervention:**
```
[Pop-up]
"Having trouble uploading your CSV?"

Common fixes:
- Make sure it's the raw CSV (don't open in Excel first)
- Check file size (<10MB)
- Try "Manual Entry" for now

[Watch 1-Min Video] [Chat with Support]
```

---

**Signal 3: Zero Expenses Logged (Day 7)**
**Trigger:** User imported revenue but logged 0 expenses after 7 days.

**Email:**
```
Subject: "Your P&L is Incomplete (Missing Expenses)"

Hi [Name],

You have revenue logged (great!) but 0 expenses.

Your current P&L shows 100% profit = unrealistic.

Why log expenses?
- Know true profit (not just revenue)
- Catch cost leaks
- Accurate reports for bank/partners

[Log Expenses Now - 2 Mins]
```

---

### Mid-Term Churn (Days 14-30)

**Signal 4: Low Engagement (<2 logins/week)**

**Intervention (Day 20):**
```
Subject: "Is R2a Still Useful?"

We noticed you haven't logged in much this month.

Quick poll (1 click):
Why aren't you using R2a often?

[Too complicated]
[Don't see the value]
[Too busy]
[Using another tool]

Your feedback helps us improve!
```

**Follow-up:** Based on response, offer personalized solution (tutorial, feature demo, discount offer).

---

## Success Metrics Dashboard

**Primary KPIs:**
- **Activation Rate:** % who generate first P&L within 24 hours (Target: 80%+)
- **Day 7 Retention:** % still active on Day 7 (Target: 60%+)
- **Day 30 Retention:** % still active on Day 30 (Target: 40%+)

**Leading Indicators:**
- **WhatsApp Bot Setup Rate:** % who connect bot within 7 days (Target: 50%+)
- **Expense Velocity:** Avg expenses logged per user per week (Target: 5+)
- **Monthly P&L Generation:** % who generate P&L at least monthly (Target: 70%+)

---

## Onboarding A/B Tests

### Test 1: Expense Entry Timing

**Hypothesis:** Delaying expense entry to Day 2 increases activation.

**Control:** Ask for expenses in onboarding (Step 4, Minute 7-12)
**Variant:** Skip expenses in onboarding, prompt on Day 2

**Rationale:** Users might be overwhelmed by expenses on Day 1. Let them see revenue-only P&L first (simpler), then add expenses later.

**Expected Outcome:** Variant has 10% higher Day 1 P&L generation, but similar Day 7 completion rate.

---

### Test 2: Sample Data Mode

**Hypothesis:** Showing sample data mode increases trial starts.

**Control:** Force users to upload own data immediately
**Variant:** Offer "Preview with Sample Data" option

**Rationale:** Users hesitant to commit time if they don't know what the output looks like.

**Expected Outcome:** Variant has 20% higher trial starts, but 10% lower true activation (some just peek, don't commit).

---

## Related Documents

**Product Context:**
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/R2a-pl-analytics|../]] - R2a product overview
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/product-scope|product-scope.md]] - What's included in onboarding
- [[gate-tracking|gate-tracking.md]] - Activation metrics for Gate 2A

**User Journey:**
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/product-strategy/market-positioning|market-positioning.md]] - Indonesian cultural context ("Ewuh Pakewuh")
- [[support-runbook|support-runbook.md]] - Common onboarding issues & fixes

**Strategic Context:**
- [[biz/strategy/market-analysis/04-user-personas|04-user-personas.md]] - Phase 1-2 persona details (Pak Budi, Amanda)

---

**Last Updated:** 2025-12-26
**Owner:** Product Design / Onboarding Lead
**Next Review:** Post-launch activation audit (Week 8)



