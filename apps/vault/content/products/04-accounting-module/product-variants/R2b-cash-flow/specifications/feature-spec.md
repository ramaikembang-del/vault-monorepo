# Feature Specification - Cash Flow Forecasting

**Product:** R2b - Cash Flow Forecasting
**Product ID:** R2b
**Target:** Phase 2.5-3 Scaling F&B Businesses

---

## Feature 1: Cash Balance Dashboard

### 1.1 Multi-Account Cash Tracking

**User Story:** As a multi-outlet owner, I want to see total cash across all locations.

**UI:**
```
Cash Position (26 Dec 2025, 10:34am)

BCA Checking: Rp 18,500,000
Mandiri Savings: Rp 6,200,000
Petty Cash (Loc A): Rp 800,000
---------------------------------
Total Cash: Rp 25,500,000

Status: Yellow (1.4 months runway)

[Refresh] [Add Account] [View Forecast]
```

**Backend:** Sum all linked accounts, update 2Ã—/day via bank API

---

## Feature 2: Cash Runway Calculator

### 2.1 Runway Calculation Logic

**Formula:**
```
Current Cash: Rp 25,500,000
Monthly Burn Rate: Rp 18,000,000 (sum of recurring expenses)

Runway (months) = Current Cash Ã· Monthly Burn
 = Rp 25.5M Ã· Rp 18M
 = 1.42 months (42 days)
```

**Burn Rate Sources:**
1. **Recurring Expenses:** User-entered (rent, payroll, utilities)
2. **Auto-Detect (if R2a integrated):** Average monthly expenses from P&L

---

### 2.2 Runway Alert Thresholds

| Runway | Color | Alert | Action Recommendations |
|--------|-------|-------|------------------------|
| >3 months | Green | None | Healthy - maintain |
| 2-3 months | Yellow | Weekly check-in | Watch closely, cut optional spend |
| 1-2 months | Orange | Daily email | Urgent: cut costs, accelerate income |
| <1 month | Red | Immediate WhatsApp + Email | Crisis: bridge financing needed NOW |

**Alert Example (Red Zone):**
```
WhatsApp Alert:
[!] CRITICAL: Cash Runway <1 Month

Boss, you have 12 days cash left at current burn rate.

Immediate actions:
1. Call customers - collect Rp 10M unpaid invoices
2. Delay non-critical expenses
3. Apply for KUR loan TODAY

Reply "HELP" for emergency call with support.

- R2b Cash Alert
```

---

## Feature 3: 30-Day Cash Forecast

### 3.1 Inflow Forecasting

**Auto-Detect Sources:**
- **R2a Revenue:** Daily avg revenue Ã— 30 days
- **R2f Invoices:** Unpaid invoices due next 30 days
- **Historical Pattern:** Same period last month (if no R2a/R2f)

**Manual Entry:**
- One-time expected income (e.g., "Investor payment Rp 50M on Jan 15")

**Forecast Display:**
```
Expected Cash IN (Next 30 Days)

Week 1 (Dec 26-31):
|- Daily Revenue: Rp 1.5M Ã— 6 days = Rp 9M
|- Invoice Payment: Rp 10M (Dec 30)
 Total Week 1: Rp 19M

Week 2-4:
|- Revenue: Rp 40M
 Total Week 2-4: Rp 40M

Total Expected IN: Rp 59M
```

---

### 3.2 Outflow Forecasting

**Recurring Expenses (Auto-Schedule):**
```
Expense: Rent
Amount: Rp 15M
Due: 1st of each month
Next Due: Jan 1 (6 days)
Priority: Critical
```

**One-Time Expenses:**
- Equipment purchase: Rp 30M (Jan 10)

**Forecast Display:**
```
Expected Cash OUT (Next 30 Days)

Week 1 (Dec 26-31):
|- Supplier Payment: Rp 8M (Dec 28) - Critical
|- Payroll Advance: Rp 5M (Dec 30) - Important
 Total Week 1: Rp 13M

Week 2 (Jan 1-7):
|- Rent: Rp 15M (Jan 1) - Critical
|- Utilities: Rp 2M (estimated)
|- Loan Payment: Rp 3M (Jan 5)
 Total Week 2: Rp 20M

Week 3-4: Rp 25M

Total Expected OUT: Rp 58M
```

---

### 3.3 Net Cash Projection

**Calculation:**
```
Starting Cash: Rp 25.5M
+ Expected IN: Rp 59M
- Expected OUT: Rp 58M
---------------------
Projected Cash (30 days): Rp 26.5M

Runway in 30 days: 1.5 months (improved! [x])
```

---

## Feature 4: Payment Due Reminders

### 4.1 Reminder Logic

**Timing:**
- **Critical Bills:** 7 days before + 3 days before + 1 day before
- **Important Bills:** 3 days before + 1 day before
- **Optional Bills:** 3 days before only

**Channels:**
- Basic tier: Email only
- Standard tier: WhatsApp + Email

**Example Reminder (3 Days Before):**
```
WhatsApp:
 Payment Due in 3 Days

Supplier: Toko Bahan Jaya
Amount: Rp 8,000,000
Due: Dec 28
Priority: Critical

Cash available: Rp 25.5M (sufficient [x])

[Mark as Paid] [Snooze 1 Day] [Need Help]

- R2b
```

---

### 4.2 Payment Confirmation

**User Action:** Marks payment as "Paid"

**R2b Updates:**
1. Remove from upcoming bills list
2. Deduct from cash balance (if manual entry)
3. Recalculate forecast
4. Send confirmation: "[x] Supplier payment Rp 8M marked paid. New cash: Rp 17.5M"

---

## Feature 5: Scenario Planning (Standard Tier)

### 5.1 "What If?" Modeling

**User Story:** What if I hire 5 more staff? How does it affect runway?

**UI:**
```
Scenario Builder

Current Situation:
- Cash: Rp 25.5M
- Burn: Rp 18M/month
- Runway: 1.4 months

What If:
[x] Hire 5 staff (+Rp 10M/month payroll)
[ ] Cut marketing (-Rp 5M/month)
[ ] Delay equipment purchase

New Scenario:
- Cash: Rp 25.5M (same)
- Burn: Rp 28M/month (+Rp 10M)
- Runway: 0.9 months ( Red zone!)

Recommendation: Don't hire without cost cuts elsewhere.

[Apply Scenario] [Reset] [Try Another]
```

---

## Feature 6: Bank Integration

### 6.1 Auto-Sync via Aggregator

**Flow:**
1. User links bank (BCA/Mandiri) via OAuth
2. R2b fetches balance 2Ã—/day (8am, 6pm WIB)
3. Updates cash dashboard automatically
4. Recalculates runway if balance changed >10%

**Manual Refresh:**
- User can click "Refresh Now" (limited 1Ã—/hour)

---

## Feature 7: Integration with R2a/R2f

### 7.1 R2a (P&L)  ->  R2b (Cash)

**Auto-Import:**
- Monthly revenue average  ->  Inflow forecast
- Monthly expenses  ->  Burn rate estimate

**Example:**
```
R2a detected:
- Avg Revenue: Rp 45M/month (Rp 1.5M/day)
- Avg Expenses: Rp 18M/month

R2b uses:
- Inflow forecast: Rp 45M/month
- Burn rate: Rp 18M/month

User can override if needed.
```

---

### 7.2 R2f (Invoicing)  ->  R2b (Cash)

**Auto-Import:**
- Unpaid invoices  ->  Expected inflows
- Invoice due dates  ->  Specific inflow timing

**Example:**
```
R2f shows:
- Invoice #123: Rp 10M (due Dec 30)
- Invoice #124: Rp 8M (due Jan 15)

R2b forecast:
- Week 1 inflow: +Rp 10M (Invoice #123)
- Week 3 inflow: +Rp 8M (Invoice #124)
```

---

## Non-Functional Requirements

**Performance:**
- Runway calculation: <1 second
- Bank sync: <5 seconds per account
- Forecast generation: <2 seconds

**Scalability:**
- Support up to 10 bank accounts per user
- Handle 100 recurring payments per user

**Data Retention:**
- Cash balance history: 90 days
- Forecast snapshots: 30 days

---

**Related Documents:**
- [[technical-spec|technical-spec.md]] - Database schema, API design
- [[products/04-accounting-module/product-variants/R2b-cash-flow/product-scope|product-scope.md]] - What's in/out of scope

**Last Updated:** 2025-12-26
**Owner:** Product Manager

