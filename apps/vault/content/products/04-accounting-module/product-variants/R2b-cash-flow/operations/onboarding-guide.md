# Onboarding Guide - Cash Flow Forecasting

**Product:** R2b - Cash Flow Forecasting
**Goal:** User sets up cash tracking within 20 minutes
**Primary Metric:** "Time to Runway Visibility" < 20 minutes
**Success:** 70%+ activation rate (meaningful runway visible within Week 1)

---

## Onboarding Philosophy

**Core Principle:** "Show Runway ASAP"

Cash runway is survival metric. Users must see it fast or won't understand value.

**Strategy:** Pre-fill as much as possible (detect burn rate from R2a if user has it), minimal manual entry.

---

## The "First 20 Minutes" Flow

### Minute 0-5: Cash Balance Setup

**Screen 1: Welcome**
```
"Welcome to R2b Cash Flow!

You're 20 minutes away from knowing:
- How much cash you have (total across all accounts)
- How long it'll last (runway calculator)
- When bills are due (payment reminders)

Let's start with your cash position."

[Begin Setup]
```

**Screen 2: Link Bank Account (Recommended)**
```
Connect Your Bank (Secure Read-Only)

[ Link BCA]
[ Link Mandiri]
[ Manual Entry Instead]

Why link? Auto-updates 2Ã—/day, no manual work.

Security: We ONLY read balance (never move money).
Encrypted connection. Approved by Bank Indonesia.
```

**If User Links Bank:**
```
[x] BCA Connected!

Current Balance: Rp 25,500,000 (as of 10:34am)

[Continue]
```

**If User Chooses Manual:**
```
Enter Current Cash Balance:

Bank Account 1: Rp [__________]
Bank Account 2 (optional): Rp [__________]
Petty Cash: Rp [__________]

Total: Rp [auto-calculated]

[Continue]
```

---

### Minute 5-15: Burn Rate Setup (Recurring Expenses)

**Screen 3: Set Up Recurring Bills**
```
Your Monthly Bills (5-Minute Setup)

We need your regular expenses to calculate runway.

**Critical Bills (Must-Pay):**
[x] Rent: Rp [_________] (due 1st each month)
[x] Payroll: Rp [_________] (due 25th)

**Important Bills:**
[ ] Utilities (electric, water, gas): Rp [estimated]
[ ] Suppliers (weekly/monthly): Rp [_______]
[ ] Loan Payments: Rp [_______] (due ___ each month)

**Optional Bills:**
[ ] Marketing Spend: Rp [_______]
[ ] Other: [Name____] Rp [_______]

[Calculate My Runway]
```

**Pre-Fill Intelligence:**
- If user has R2a: Auto-import average monthly expenses (Rp 18M)
- Suggest: "We detected Rp 18M/month expenses from R2a. Use this?"

---

### Minute 15-20: The "Aha Moment" - Runway Revealed

**Screen 4: Your Cash Runway Dashboard**
```
[x] Setup Complete! Here's Your Cash Position:

|-------------------------------------+
| Current Cash: Rp 25,500,000 |
| Monthly Burn: Rp 18,000,000 |
| |
| Runway: 1.4 months (42 days) |
|--------------------------------------

What This Means:
At current spending rate, you'll run out of cash in 42 days.

Status: Yellow (Watch Closely)
- Green (>3 months): Healthy
- Yellow (2-3 months): Monitor weekly
- Red (<2 months): Urgent action needed

Next Steps:
1. Add expected income (revenue forecast)
2. Set payment reminders (never miss bills)
3. Check forecast weekly

[View 30-Day Forecast] [Set Up Reminders]
```

**Celebration:**
```
 You now know your cash runway!

Most businesses fail due to cash flow, not lack of profit.
You're now ahead of 80% of F&B owners.

Share this win? [Tweet] [WhatsApp Friend]
```

---

## Day 1-30 Behavioral Journey

### Day 1: Runway Awareness

**Email (4 hours after setup):**
```
Subject: You Have 1.4 Months Cash Runway - What's Next?

Hi [Name],

Great job setting up R2b! You now know your runway: 1.4 months.

**What to do with this info:**

 Yellow zone (1-2 months) actions:
1. Cut optional spend (marketing, equipment)  ->  Extend runway 2-4 weeks
2. Accelerate income (collect invoices early)
3. Plan bridge financing (KUR loan, owner injection)

Want help prioritizing? Hit reply - I'll review your bills with you.

[View Cash Forecast]

Best,
R2b Team
```

---

### Day 3: Add Payment Reminders

**Trigger:** User hasn't set up any payment reminders yet

**Email:**
```
Subject: Never Miss a Supplier Payment Again

Hi [Name],

Quick win (2 minutes): Set up payment reminders.

Why? One missed supplier payment = Rp 500K late fee + damaged relationship.

How:
1. Dashboard  ->  "Payments"  ->  "+ Add Reminder"
2. Set up top 3 bills:
 - Rent (Rp 15M, due 1st)
 - Payroll (Rp 20M, due 25th)
 - Supplier X (Rp 8M, due 15th)
3. Get WhatsApp alert 3 days before due

[Set Up Reminders in 2 Minutes]

Best,
R2b Team
```

---

### Day 7: Weekly Check-In Habit

**Email + Push Notification:**
```
"Hari Jumat - Cek Cash Flow Mingguan"
(Friday - Weekly Cash Flow Check)

This Week's Cash Position:
- Started week: Rp 25.5M
- Spent: Rp 4.2M
- Received: Rp 5.8M
- Ending week: Rp 27.1M

Runway: 1.5 months (up from 1.4 - good! [x])

[View Details] [Share Win]
```

---

### Day 14: Scenario Planning (Standard Tier Upsell)

**Trigger:** User on Basic tier, runway <2 months

**Email:**
```
Subject: Model "What If?" Scenarios (Pro Feature)

Hi [Name],

Your runway is 1.6 months (yellow zone).

Want to see impact of decisions BEFORE making them?

**Standard Tier "Scenario Planning":**
- What if I cut marketing 30%?  ->  Runway +0.6 months
- What if I hire 3 staff?  ->  Runway -0.8 months
- What if I delay equipment purchase?  ->  Runway +1.0 month

Make data-driven decisions.

Upgrade: Rp 100K/month (+Rp 25K from Basic)

[Try Scenario Planning Free 7 Days]

Best,
R2b Team
```

---

### Day 21: Bundle with R2a (Cross-Sell)

**Trigger:** User has R2b but not R2a

**Email:**
```
Subject: Are You Profitable? (Add R2a P&L)

Hi [Name],

You're tracking cash (R2b) - smart! Quick question:

**Are you profitable?**

Cash flow ≠ profitability. You can be cash-poor but profitable (timing mismatch).

**Add R2a (P&L Tracker):**
Know monthly profit, not just cash runway.

Bundle: R2b + R2a = Rp 150K/month (save Rp 50K vs standalone)

[Add R2a for Rp 50K/month extra]

Complete financial visibility: Profit (R2a) + Cash (R2b).

Best,
R2b Team
```

---

## Churn Prevention Framework

### Early Warning Signal 1: Never Viewed Runway (Day 3)

**Trigger:** User set up cash but never viewed runway dashboard

**Intervention:**
```
Subject: Did You See Your Cash Runway Yet?

Hi [Name],

You linked your bank but haven't checked runway. Here's a quick look:

Your Runway: [X.X] months

This is the #1 metric for business survival. Check it weekly!

[View Runway Now - 10 Seconds]

Need help understanding? Reply and I'll explain!

Best,
R2b Team
```

---

### Early Warning Signal 2: No Recurring Expenses Added

**Trigger:** Runway shows "N/A" after 5 days (no burn rate data)

**Intervention:**
```
Subject: Fix Your Runway Calculator (Missing Burn Rate)

Hi [Name],

Your runway shows "N/A" because we need your monthly bills.

Takes 3 minutes: Add rent, payroll, utilities.

[Quick Setup - 3 Minutes]

Or want me to walk you through? Book 10-min call: [Calendar]

Best,
R2b Support
```

---

## Success Metrics Dashboard

**Primary KPIs:**
- **Activation Rate (Runway Visible):** % who see meaningful runway within Week 1 (Target: 70%+)
- **Day 7 Retention:** % still checking forecast (Target: 60%+)
- **Weekly Check Habit:** % viewing forecast weekly (Target: 70%+)

**Leading Indicators:**
- **Bank Link Rate:** % choose bank connection vs manual (Target: 60%+)
- **Recurring Expense Setup:** % add 5+ recurring bills (Target: 75%+)
- **Payment Reminder Setup:** % set 3+ reminders (Target: 60%+)

---

## Related Documents

- [[products/04-accounting-module/product-variants/R2b-cash-flow/R2b-cash-flow|../]] - R2b overview
- [[products/04-accounting-module/product-variants/R2b-cash-flow/product-scope|product-scope.md]] - Features
- [[gate-tracking|gate-tracking.md]] - Gate 2C metrics

**Last Updated:** 2025-12-26
**Owner:** Product Design / Onboarding Lead


