# Product Scope - Cash Flow Forecasting

**Product:** R2b - Cash Flow Forecasting
**Product ID:** R2b
**Type:** SaaS Add-On Module
**Pricing:** Rp 75-100K/month

---

## Core Features (What's IN Scope)

### 1. Cash Balance Tracking

**Purpose:** Know exactly how much cash you have right now

**Features:**
- Link bank accounts (BCA, Mandiri, BRI - read-only access)
- Manual cash entry (if no banking integration)
- Multi-account view (multiple bank accounts + petty cash)
- Current total cash balance dashboard

**Example:**
```
Today's Cash Position (26 Dec 2025):

BCA Checking: Rp 18,500,000
Mandiri Savings: Rp 6,200,000
Petty Cash: Rp 800,000

Total Cash: Rp 25,500,000

Last updated: 2 hours ago
[Refresh Now] [Add Manual Entry]
```

---

### 2. Cash Inflow Forecasting (30 Days)

**Purpose:** Predict money coming IN (revenue, payments received)

**Sources:**
- **Daily Revenue (from R2a/POS):** Rp 1.5M/day × 30 days = Rp 45M
- **Invoices Due:** Catering payment Rp 10M (due Dec 30)
- **Loan/Investment:** Owner injection Rp 20M (scheduled Jan 5)

**Automatic Detection:**
- If user has R2a: Auto-import average daily revenue
- If user has R2f (invoicing): Auto-import unpaid invoices

**Manual Entry:**
- One-time expected income (e.g., "Investor payment Rp 50M on Jan 15")

**Forecast View:**
```
Expected Cash IN (Next 30 Days):

Week 1 (Dec 26-31):
- Daily revenue: Rp 1.5M × 6 days = Rp 9M
- Catering invoice payment: Rp 10M (Dec 30)
Total Week 1: Rp 19M

Week 2-4: Rp 40M (revenue only)

Total Expected IN (30 days): Rp 59M
```

---

### 3. Cash Outflow Forecasting (30 Days)

**Purpose:** Predict money going OUT (bills, salaries, suppliers)

**Categories:**
- **Suppliers:** Ingredient purchases, recurring orders
- **Payroll:** Staff salaries (scheduled 25th each month)
- **Rent:** Due 1st of month
- **Utilities:** Electricity, water, gas (estimated from history)
- **Loan Repayments:** KUR, bank loans (fixed schedule)
- **Taxes:** Monthly VAT, annual income tax (if applicable)

**Recurring vs One-Time:**
- Recurring: Set up once (e.g., "Rent Rp 15M every 1st"), auto-repeats
- One-Time: Add as needed (e.g., "Equipment purchase Rp 30M on Jan 10")

**Forecast View:**
```
Expected Cash OUT (Next 30 Days):

Week 1 (Dec 26-31):
- Supplier payments: Rp 8M (due Dec 28)
- Payroll (partial): Rp 5M (salary advance)
Total Week 1: Rp 13M

Week 2 (Jan 1-7):
- Rent: Rp 15M (Jan 1)
- Utilities: Rp 2M (estimated)
- Loan payment: Rp 3M (Jan 5)
Total Week 2: Rp 20M

Week 3-4: Rp 25M (suppliers, payroll remainder)

Total Expected OUT (30 days): Rp 58M
```

---

### 4. Cash Runway Calculator

**The Most Important Metric for Survival**

**Formula:**
```
Current Cash: Rp 25.5M
Monthly Burn Rate: Rp 18M (avg expenses per month)

Runway = Rp 25.5M ÷ Rp 18M = 1.4 months

Warning: Less than 2 months runway!
```

**Threshold Alerts:**
- **Green (>3 months):** Healthy cash position
- **Yellow (2-3 months):** Start watching closely
- **Red (<2 months):** Urgent action needed (cut costs, get funding, or close)

**Action Recommendations:**
```
Your runway is 1.4 months (Red zone).

Actions to extend runway:
1. Delay non-urgent expenses (equipment purchase Rp 30M → postpone)
2. Accelerate receivables (call customer, collect invoice Rp 10M early)
3. Cut discretionary spend (reduce marketing Rp 5M/month)
4. Get short-term funding (owner injection or bank overdraft)

Each action +0.5-1 month runway extension.
```

---

### 5. Payment Due Reminders

**Purpose:** Never miss a bill, avoid late fees

**How It Works:**
- Set up recurring payments (rent, utilities, loans)
- Get WhatsApp/email reminders 3 days before due date
- Mark as "Paid" when done

**Example Reminder (WhatsApp):**
```
 Payment Reminder

Supplier: Toko Bahan Jaya
Amount: Rp 8,000,000
Due: Dec 28 (2 days from now)
Category: Ingredients

[Mark as Paid] [Snooze 1 Day] [View Details]

- R2b Cash Flow
```

**Prioritization:**
- **Critical:** Rent, payroll (can't delay)
- **Important:** Suppliers, utilities (can delay 1-2 weeks)
- **Optional:** Discretionary spend (marketing, equipment)

---

## Feature Tiers

### Basic Tier (Rp 75K/month)
- Track up to 3 bank accounts
- 30-day cash forecast
- 10 recurring payments
- Email reminders only
- Manual cash entry

### Standard Tier (Rp 100K/month)
- Unlimited bank accounts
- 60-day cash forecast
- Unlimited recurring payments
- WhatsApp + Email reminders
- Auto-sync with R2a/R2f (if user has both)
- Scenario planning ("What if I cut costs 20%?")

---

## What's NOT Included (Out of Scope)

**Full Accounting:**
- Double-entry bookkeeping
- Financial statements (use R2a for P&L)
- Tax calculations
→ Use full accounting software if needed

**Budgeting:**
- Annual budget planning
- Department-level budgets
- Variance analysis (budget vs actual)
→ Hire accountant or use dedicated budgeting tool

**Investment Tracking:**
- Stock portfolio
- Multi-currency (only IDR)
→ Use personal finance app

---

## Integration with Other R2 Modules

**R2a (P&L) → R2b (Cash Flow):**
- Auto-import monthly revenue for inflow forecast
- Auto-import monthly expenses for outflow forecast
- **Why Both?** P&L shows profit, cash flow shows timing. Can be profitable but cash-poor (payment timing mismatch).

**R2f (Invoicing) → R2b (Cash Flow):**
- Auto-import unpaid invoices as expected inflows
- Alert when invoice overdue: "Customer XYZ payment Rp 10M now 15 days late → cash forecast at risk"

---

## Target Users & Use Cases

**Primary Use Cases:**

1. **Multi-Outlet Owner (Dimas - Phase 3):**
 - Cash juggling between 3 locations
 - "Location A has Rp 10M, Location B needs Rp 8M for supplier payment tomorrow. Do I transfer?"
 - R2b: Shows combined cash position + Location B payment due alert

2. **Rapid Hire Business (Amanda - Phase 2.5):**
 - Hired 10 staff in 2 months, payroll jumped Rp 15M → Rp 30M
 - "Can I afford next month's payroll?"
 - R2b: Cash runway drops from 4 months → 2 months → Yellow alert

3. **B2B Catering (Rika - Phase 3):**
 - Large orders billed net-30 (customer pays 30 days later)
 - "I did Rp 50M catering but won't get paid until Feb. Meanwhile, supplier bills due Jan 1."
 - R2b: Shows cash gap, recommends short-term bridge loan or negotiate supplier payment delay

---

## Upgrade Triggers

**From R2a (P&L only) → R2b (Cash Flow) when:**
- Profit looks good but always short on cash ("profitable but broke paradox")
- Multiple outlets = complex cash juggling
- Large payment timing gaps (B2B catering net-30)
- Considering expansion (need to model cash impact)

**From R2b → Full CFO/Accountant when:**
- Open 5+ locations (too complex for tool alone)
- Raising VC funding (need audited financials, not just cash tracking)
- Multi-currency operations (export business)

---

## Competitive Comparison

| Feature | R2b (Rp 100K) | Full Accounting (Rp 500K+) | Excel Cash Sheet (Free) |
|---------|---------------|---------------------------|------------------------|
| Cash Forecast (30-day) | Automated | Manual setup | Manual calc |
| Runway Calculator | | (calculate yourself) | |
| Payment Reminders | WhatsApp | | |
| Bank Integration | BCA, Mandiri | All banks | |
| Learning Curve | 20 mins | 10+ hours | 2 hours |
| Support | WhatsApp + Email | Email only | DIY |

**R2b Advantage:** Focused on cash survival (runway, reminders), not full accounting complexity.

---

## Success Metrics

**Adoption:** 12+ paying customers by Week 14
**Engagement:** 70%+ check forecast weekly
**Activation:** 80%+ set up 5+ recurring payments
**Outcome:** Users report knowing runway prevents 1+ crisis/year (worth Rp 5M+ each)

---

**Related Documents:**
- [[products/04-accounting-module/product-variants/R2b-cash-flow/R2b-cash-flow|Product Overview]] - R2b overview
- [[products/04-accounting-module/specifications/feature-spec|feature-spec.md]] - Detailed feature requirements
- [[products/04-accounting-module/product-variants/R2b-cash-flow/product-strategy/pricing-strategy|pricing-strategy]] - Pricing rationale

**Last Updated:** 2025-12-26
**Owner:** Product Lead

