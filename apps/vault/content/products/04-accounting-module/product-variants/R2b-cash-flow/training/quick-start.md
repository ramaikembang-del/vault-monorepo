# R2b: Cash Flow Analytics - Quick Start Guide

**Module:** R2b - Cash Flow Analytics
**Product Line:** R2 Analytics Suite
**Training Level:** Beginner
**Estimated Time:** 30 minutes

---

## What You'll Learn

- Understanding cash flow vs. profit
- Navigating the Cash Flow Dashboard
- Creating your first cash flow forecast
- Identifying cash gaps and opportunities
- Setting up automated alerts

---

## Prerequisites

Before starting this guide:

- R2 Analytics Suite is installed and configured
- At least 30 days of transaction data imported
- Bank accounts connected (recommended)
- Basic understanding of Power BI navigation

---

## Part 1: Understanding Cash Flow (5 min)

### Cash Flow vs. Profit

**Key Concept:** Profit ≠ Cash in Bank

| Metric | What It Measures | Example |
|--------|------------------|---------|
| **Profit** | Revenue - Expenses | Rp 50 juta sales - Rp 30 juta costs = Rp 20 juta profit |
| **Cash Flow** | Cash In - Cash Out | Rp 40 juta received - Rp 35 juta paid = Rp 5 juta cash |

**Why the difference?**
- ⏰ **Timing:** Sales on credit (received later)
- **Inventory:** Bought supplies (cash out now, expense later)
- **Loans:** Principal payments (cash out, not an expense)

### The Cash Flow Cycle for F&B

```
Day 1-7: Buy Ingredients → Cash OUT
Day 8-14: Prepare & Serve → Inventory
Day 15-21: Customer Pays → Cash IN
Day 22-30: Pay Rent/Salaries → Cash OUT
```

**Goal:** Keep enough cash to never miss a payment.

---

## Part 2: Dashboard Overview (10 min)

### Opening the Dashboard

1. Open Power BI Desktop
2. Navigate to: **R2 Analytics Suite** → **R2b: Cash Flow**
3. Click on **"Cash Flow Overview"** page

### Understanding the Main Visuals

#### 1. Cash Position Chart (Top Center)
```
Shows your daily cash balance over time
↗ Green = Cash increasing
↘ Red = Cash decreasing
 Dotted line = Minimum safe level (1 week operating expenses)
```

#### 2. Cash Flow Statement (Left Panel)
```
Operating Activities:
 + Cash from customers: Rp 150 juta
 - Payments to suppliers: Rp 80 juta
 - Salaries & wages: Rp 40 juta
 = Operating Cash Flow: Rp 30 juta

Investing Activities:
 - Equipment purchases: Rp 10 juta

Financing Activities:
 + Loan proceeds: Rp 0
 - Loan repayments: Rp 5 juta

NET CASH FLOW: Rp 15 juta
```

#### 3. Burn Rate Indicator (Top Right)
```
Daily Burn Rate: Rp 2.5 juta/day
Runway: 45 days (at current cash level)
Status: WARNING (< 60 days)
```

### Filter Panel (Right Side)

Common filters:
- **Time Period:** Last 30/60/90 days, Custom
- **Location:** All outlets, Specific branch
- **Account Type:** Bank, Cash, E-wallet

---

## Part 3: Your First Cash Flow Analysis (10 min)

### Exercise: Find Your Cash Gaps

**Scenario:** You're the manager at Kopi Kenangan Senayan. It's November 25th, and you need to ensure enough cash for December rent (due Dec 5th: Rp 15 juta).

**Step 1: Check Current Position**
1. Set filter to **"Senayan City"** location
2. Look at **Cash Position Chart**
3. Note current cash balance: **Rp 23 juta**

**Step 2: Project Next 10 Days**
1. Click **"Forecast"** tab
2. View **10-Day Forecast** visual
3. Check projected balance on Dec 5th: **Rp 18 juta** (Safe!)

**Step 3: Identify Risks**
1. Look at **Daily Cash Flow** table
2. Find any days with negative cash flow:
 - Nov 30: **-Rp 8 juta** (Supplier payment) - Dec 3: **-Rp 4 juta** (Salary advance) 3. Total outflow: **-Rp 12 juta** before rent

**Step 4: Take Action**
Current: Rp 23 juta
Outflows: -Rp 12 juta
**Projected on Dec 5: Rp 11 juta** (Not enough for Rp 15 juta rent!)

**Solutions (shown in dashboard):**
- Delay supplier payment to Dec 6 (+Rp 8 juta breathing room)
- Request credit extension for 7 days
- Push weekend promotion for extra Rp 5 juta revenue

---

## Part 4: Set Up Alerts (5 min)

### Configure Cash Level Alerts

1. Click **"Settings"** in top navigation
2. Select **"Alerts & Notifications"**
3. Configure:

```
Alert Type: Low Cash Warning
Trigger: Cash balance < 1 week operating expenses
Operating Expenses: Rp 17.5 juta/week
Threshold: Rp 17.5 juta
Recipients: manager@kopikenangan.com
Frequency: Daily check at 6 PM
```

4. Click **"Save Alert"**
5. Test with **"Send Test Notification"**

### Recommended Alerts

| Alert | Trigger | Action |
|-------|---------|--------|
| Critical Cash | < 3 days runway | Freeze non-essential spending |
| Low Cash | < 7 days runway | Postpone large purchases |
| Healthy Cash | > 30 days runway | Consider investments |
| Large Variance | Actual vs. Forecast > 20% | Review assumptions |

---

## Part 5: Common Tasks (Quick Reference)

### Task 1: Update Cash Forecast

**When:** Every Monday morning
**How:**
1. Navigate to **"Forecast"** page
2. Click **" Refresh Forecast"**
3. Adjust assumptions if needed:
 - Expected revenue (if promotion planned)
 - Upcoming large expenses
 - Payment terms changes
4. Save updated forecast

### Task 2: Reconcile with Bank

**When:** Daily (automated) + Weekly manual review
**How:**
1. Go to **"Reconciliation"** page
2. Check **Bank sync status** (should show synced today)
3. Review **Unmatched Transactions** section
4. Match or categorize any flagged items
5. Click **"Mark as Reviewed"**

### Task 3: Export Cash Flow Report

**When:** Monthly for finance team
**How:**
1. Set date filter to last month
2. Navigate to **"Cash Flow Statement"** page
3. Click **"Export"** → **"PDF Report"**
4. Select template: **"Monthly Cash Flow - Management"**
5. Save and share

---

## Key Metrics Explained

### 1. Operating Cash Flow (OCF)
```
OCF = Cash from Sales - Cash for Operations
Healthy: Positive and growing
Warning: Negative for 2+ consecutive months
```

### 2. Cash Conversion Cycle (CCC)
```
CCC = Days Inventory + Days Receivable - Days Payable
F&B Benchmark: 15-25 days
Kopi Kenangan Target: < 20 days
Lower = Better (cash locked up less time)
```

### 3. Burn Rate
```
Burn Rate = Monthly Cash Out / 30 days
Example: Rp 75 juta/month = Rp 2.5 juta/day
Use: Calculate runway = Cash Balance / Burn Rate
```

---

## Quick Wins (Do These Today!)

### 5-Minute Wins

1. **Set your minimum cash threshold**
 - Calculate 1 week of expenses
 - Set as red line on dashboard
 - Configure alert when crossed

2. **Identify your biggest cash drags**
 - Sort **Payables** by amount
 - Flag top 3 for payment term negotiation

3. **Enable bank auto-sync**
 - Connect main bank account
 - Reduce manual reconciliation time

### 30-Minute Wins

1. **Build your first 30-day forecast**
 - Input known revenue (reservations, contracts)
 - Schedule fixed expenses
 - Add variable costs estimate
 - Identify the gap

2. **Create weekly cash review habit**
 - Set recurring calendar reminder
 - Review actual vs. forecast
 - Adjust upcoming week assumptions

---

## Common Mistakes to Avoid

### Mistake 1: Confusing Profit with Cash
**Problem:** "We're profitable, why no cash?"
**Reality:** Profit includes credit sales (not yet received)
**Fix:** Focus on **Cash Collected**, not **Revenue Booked**

### Mistake 2: Ignoring Small Daily Outflows
**Problem:** Rp 200K/day seems small
**Reality:** Rp 200K × 30 days = Rp 6 juta/month
**Fix:** Track and categorize every cash-out

### Mistake 3: Not Planning for Peaks
**Problem:** Surprised by annual expenses (licenses, insurance)
**Reality:** Annual Rp 24 juta = Rp 2 juta/month to save
**Fix:** Use **Annual Expense Planner** feature

### Mistake 4: Over-Optimistic Revenue Forecast
**Problem:** Assuming 100% of projected sales
**Reality:** Actual vs. Forecast variance often 15-30%
**Fix:** Build in 15% buffer for projections

---

## Next Steps

### Ready for More?

1. ** Recommended Path:**
 - You completed: Quick Start
 - Next: [[advanced-guide|Advanced Cash Flow Guide]]
 - Later: [[troubleshooting|Troubleshooting Common Issues]]

2. ** Practice Exercises:**
 - [[../../../../../../biz/departments/finance/training/cash-forecast-exercise|Exercise 1: 90-Day Cash Forecast]]
 - [[../../../../../../biz/departments/finance/training/cash-gap-analysis|Exercise 2: Cash Gap Analysis]]

3. **Get Help:**
 - Slack: #r2-cash-flow-help
 - Email: support@pwbi.co.id
 - Video tutorials: [R2b Training Playlist](https://youtube.com/pwbi-r2b)

---

## Checklist: Quick Start Complete

Before moving to advanced training, ensure you can:

- [ ] Explain the difference between profit and cash flow
- [ ] Navigate the Cash Flow Dashboard confidently
- [ ] Read and interpret the Cash Position Chart
- [ ] Identify cash gaps using the forecast feature
- [ ] Set up at least one automated alert
- [ ] Export a cash flow report
- [ ] Understand burn rate and runway concepts

**Completion Time:** _____ minutes
**Self-Rating:** (1-5 stars)
**Ready for Advanced?** Yes / Need more practice

---

**Last Updated:** December 2025
**Version:** 1.0
**Feedback:** training@pwbi.co.id
