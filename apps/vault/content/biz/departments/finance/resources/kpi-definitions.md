# Financial KPI Definitions

> [!NOTE]
> **Status:** Active
> **Last Updated:** 2026-01-05
> **Owner:** Finance Team

---

## Overview

This document defines all financial Key Performance Indicators (KPIs) used across PWBI F&B Growth. Standardized definitions ensure consistent reporting, decision-making, and performance tracking across all 22 products.

---

## Revenue Metrics

### 1. Monthly Recurring Revenue (MRR)

**Definition:**
Total predictable revenue generated from subscriptions each month.

**Formula:**
```
MRR = Î£ (Active Subscriptions Ã— Monthly Price)
```

**Example:**
- 10 users @ Rp 75K/month (Template Support) = Rp 750K
- 5 users @ Rp 350K/month (Web Dashboard Lite Pro) = Rp 1.75M
- **Total MRR = Rp 2.5M**

**Target:** Rp 50M MRR by end of Year 1

**Tracked:** Monthly
**Source:** Billing system (Stripe, Xendit)

---

### 2. Annual Recurring Revenue (ARR)

**Definition:**
Annualized value of all recurring subscriptions.

**Formula:**
```
ARR = MRR Ã— 12
```

**Example:**
MRR = Rp 2.5M  ->  ARR = Rp 30M

**Target:** Rp 500M ARR by Year 3

**Tracked:** Quarterly
**Source:** Derived from MRR

---

### 3. One-Time Revenue

**Definition:**
Revenue from non-recurring purchases (templates, consulting).

**Formula:**
```
One-Time Revenue = Î£ (One-Time Purchases in Period)
```

**Example (Month 1):**
- 5 Ã— Power BI Template Tier 1 @ Rp 2.5M = Rp 12.5M
- 2 Ã— Custom Dashboard @ Rp 10M = Rp 20M
- **Total One-Time Revenue = Rp 32.5M**

**Target:** Rp 100M in Sprint 1 (Week 1-4)

**Tracked:** Monthly
**Source:** Sales system

---

### 4. Total Revenue

**Definition:**
Sum of all revenue streams in a period.

**Formula:**
```
Total Revenue = MRR + One-Time Revenue + Other Revenue
```

**Breakdown:**
- **Recurring:** Subscription products (R1, R2, C1-C4, E1)
- **One-Time:** Templates (A1), pay-per-insight (A2)
- **Other:** Consulting, training, affiliate

**Target:** Rp 1B by Year 1

**Tracked:** Monthly
**Source:** Accounting system

---

## Growth Metrics

### 5. New MRR

**Definition:**
MRR added from new customers in a period.

**Formula:**
```
New MRR = Î£ (MRR from New Customers)
```

**Example (Month 2):**
- 8 new Template Support subscribers @ Rp 75K = Rp 600K
- **New MRR = Rp 600K**

**Target:** 20% MRR growth month-over-month (Sprint 1-3)

**Tracked:** Monthly
**Source:** Billing system + CRM

---

### 6. Expansion MRR

**Definition:**
Additional MRR from existing customers upgrading.

**Formula:**
```
Expansion MRR = Î£ (MRR Increase from Upgrades)
```

**Example:**
- 3 users upgrade Lite Starter (Rp 200K)  ->  Lite Pro (Rp 350K)
- **Expansion MRR = 3 Ã— Rp 150K = Rp 450K**

**Target:** 10% of MRR growth from expansion (healthy sign)

**Tracked:** Monthly
**Source:** Billing system (upgrade events)

---

### 7. Churned MRR

**Definition:**
MRR lost from cancellations and downgrades.

**Formula:**
```
Churned MRR = Î£ (MRR Lost from Cancellations + Downgrades)
```

**Example:**
- 2 users cancel Template Support @ Rp 75K = Rp 150K
- **Churned MRR = Rp 150K**

**Target:** <30% annual churn rate (Phase 2-3), <15% (Phase 4-5)

**Tracked:** Monthly
**Source:** Billing system (cancellation reasons)

---

### 8. Net New MRR

**Definition:**
Net change in MRR accounting for new, expansion, and churn.

**Formula:**
```
Net New MRR = New MRR + Expansion MRR - Churned MRR
```

**Example:**
- New MRR: Rp 600K
- Expansion MRR: Rp 450K
- Churned MRR: Rp 150K
- **Net New MRR = Rp 900K**

**Target:** Positive net new MRR every month

**Tracked:** Monthly
**Source:** Derived from above metrics

---

## Customer Metrics

### 9. Customer Acquisition Cost (CAC)

**Definition:**
Total cost to acquire one new customer.

**Formula:**
```
CAC = Total Marketing & Sales Spend / New Customers Acquired
```

**Example (Month 1):**
- Marketing: Rp 5M (ads, content)
- Sales: Rp 2M (sales team time)
- New customers: 35
- **CAC = Rp 7M / 35 = Rp 200K/customer**

**Target:** CAC < 3-month LTV (healthy ratio)

**Tracked:** Monthly
**Source:** Marketing tool + accounting

---

### 10. Lifetime Value (LTV)

**Definition:**
Total revenue expected from a customer over their lifetime.

**Formula:**
```
LTV = ARPU Ã— Gross Margin % Ã— (1 / Churn Rate %)
```

**Simplified:**
```
LTV = ARPU Ã— Average Customer Lifespan (months)
```

**Example (Subscription Product):**
- ARPU = Rp 350K/month
- Average lifespan = 18 months (based on 5.5% monthly churn)
- **LTV = Rp 350K Ã— 18 = Rp 6.3M**

**Target:** LTV:CAC ratio >= 3:1

**Tracked:** Quarterly (requires churn data)
**Source:** Cohort analysis

---

### 11. Average Revenue Per User (ARPU)

**Definition:**
Average monthly revenue per active customer.

**Formula:**
```
ARPU = MRR / Total Active Customers
```

**Example:**
- MRR = Rp 10M
- Active customers = 50
- **ARPU = Rp 200K/customer**

**Target:** Increase ARPU 10% year-over-year (upselling)

**Tracked:** Monthly
**Source:** Billing system

---

### 12. Churn Rate

**Definition:**
Percentage of customers who cancel in a period.

**Formula:**
```
Churn Rate = (Customers Lost / Customers at Start) Ã— 100%
```

**Example (Month 3):**
- Customers at start: 100
- Customers lost: 5
- **Churn Rate = 5%**

**Target by Phase:**
- Phase 1-2: <40% annually (high experimentation)
- Phase 3: <30% annually
- Phase 4-5: <15% annually

**Tracked:** Monthly
**Source:** Billing system

---

## Profitability Metrics

### 13. Gross Margin

**Definition:**
Percentage of revenue remaining after Cost of Goods Sold (COGS).

**Formula:**
```
Gross Margin % = ((Revenue - COGS) / Revenue) Ã— 100%
```

**COGS includes:**
- Cloud hosting (AWS, Vercel)
- Payment processing fees (Stripe 2.9%)
- Customer support tools (Zendesk)
- Data storage costs

**Example:**
- Revenue = Rp 20M
- COGS = Rp 4M (20%)
- **Gross Margin = 80%**

**Target:** 80%+ (SaaS industry standard)

**Tracked:** Monthly
**Source:** Accounting system

---

### 14. Operating Margin

**Definition:**
Percentage of revenue remaining after operating expenses.

**Formula:**
```
Operating Margin % = ((Revenue - OpEx) / Revenue) Ã— 100%
```

**OpEx includes:**
- Salaries & contractor fees
- Marketing spend
- Office/utilities
- Software subscriptions
- COGS

**Example:**
- Revenue = Rp 50M
- OpEx = Rp 45M
- **Operating Margin = 10%**

**Target:** Breakeven by Month 6, 20%+ by Year 2

**Tracked:** Monthly
**Source:** P&L statement

---

### 15. Net Profit Margin

**Definition:**
Percentage of revenue remaining after all expenses including taxes.

**Formula:**
```
Net Profit Margin % = (Net Profit / Revenue) Ã— 100%
```

**Example:**
- Revenue = Rp 50M
- Net profit = Rp 5M
- **Net Profit Margin = 10%**

**Target:** 15%+ by Year 3 (sustainable profitability)

**Tracked:** Monthly
**Source:** P&L statement

---

## Efficiency Metrics

### 16. Burn Rate

**Definition:**
Amount of cash spent per month (negative cash flow).

**Formula:**
```
Monthly Burn Rate = Cash at Month Start - Cash at Month End
```

**Example:**
- Cash Jan 1: Rp 100M
- Cash Jan 31: Rp 85M
- **Burn Rate = Rp 15M/month**

**Target:** Reduce burn rate to zero by Month 6 (profitability)

**Tracked:** Monthly
**Source:** Bank statements

---

### 17. Runway

**Definition:**
Months of cash remaining at current burn rate.

**Formula:**
```
Runway (months) = Current Cash / Monthly Burn Rate
```

**Example:**
- Cash: Rp 100M
- Burn rate: Rp 15M/month
- **Runway = 6.7 months**

**Target:** Maintain 12+ months runway (safety buffer)

**Tracked:** Monthly
**Source:** Cash flow statement

---

### 18. CAC Payback Period

**Definition:**
Months required to recover customer acquisition cost.

**Formula:**
```
Payback Period (months) = CAC / (ARPU Ã— Gross Margin %)
```

**Example:**
- CAC = Rp 600K
- ARPU = Rp 350K/month
- Gross margin = 80%
- **Payback Period = Rp 600K / (Rp 350K Ã— 0.8) = 2.1 months**

**Target:** <12 months (healthy SaaS)

**Tracked:** Quarterly
**Source:** Derived from CAC and ARPU

---

## Product Metrics

### 19. Monthly Active Users (MAU)

**Definition:**
Number of unique users who logged in during the month.

**Formula:**
```
MAU = COUNT(DISTINCT user_id WHERE last_login >= 30 days ago)
```

**Target by Product:**
- Web Dashboard Lite: 500+ MAU by Month 3
- SaaS Basic: 100+ MAU by Sprint 3

**Tracked:** Daily (reported monthly)
**Source:** Analytics (Mixpanel, Amplitude)

---

### 20. Feature Adoption Rate

**Definition:**
Percentage of users who used a specific feature in a period.

**Formula:**
```
Adoption Rate % = (Users Who Used Feature / Total Users) Ã— 100%
```

**Example:**
- Total users: 200
- Users who exported reports: 120
- **Adoption Rate = 60%**

**Target:** >50% for core features, >20% for advanced features

**Tracked:** Monthly
**Source:** Product analytics

---

### 21. Net Promoter Score (NPS)

**Definition:**
Customer loyalty metric based on "recommend to a friend" question.

**Formula:**
```
NPS = % Promoters (9-10) - % Detractors (0-6)
```

**Scale:**
- 0-6: Detractors
- 7-8: Passives
- 9-10: Promoters

**Example:**
- 50% Promoters
- 30% Passives
- 20% Detractors
- **NPS = 50 - 20 = 30**

**Target:** NPS > 40 (good), > 70 (excellent)

**Tracked:** Quarterly
**Source:** User surveys

---

## Sprint-Specific Metrics

### Sprint 1 Gates (Week 1-4)

**Gate 1A (Week 2): Template Sales**
- **Metric:** Total Power BI Template sales
- **Target:** 5+ sales
- **Source:** Sales system

**Gate 1B (Week 4): Lite Engagement**
- **Metric 1:** MAU (Web Dashboard Lite)
- **Target:** 50+ users
- **Metric 2:** Engagement rate (active 3+ days/week)
- **Target:** 30%+
- **Source:** Product analytics

**Gate 1C (Week 4): Support Conversion**
- **Metric:** Template Support conversion rate
- **Target:** 30%+ of template buyers subscribe
- **Source:** CRM + billing

---

### Sprint 2 Gates (Week 5-8)

**Gate 2 (Week 8): Lite Paid Conversion**
- **Metric:** Free  ->  Paid conversion rate
- **Target:** 5%+ of free users upgrade
- **Source:** Billing system

---

## Reporting Calendar

### Daily
- Revenue (flash report)
- Active users (MAU tracking)
- Critical errors (system health)

### Weekly
- MRR movement (new, expansion, churn)
- CAC (marketing performance)
- Support tickets (customer health)

### Monthly
- All revenue metrics
- All customer metrics
- Profitability (gross/operating/net margin)
- Product metrics (MAU, feature adoption)

### Quarterly
- LTV analysis (cohort-based)
- NPS survey
- Strategic review (OKRs)

---

## Data Sources

| Metric Category | Primary Source | Backup/Validation |
|-----------------|---------------|-------------------|
| Revenue | Billing system (Stripe/Xendit) | Accounting software (Xero) |
| Customers | CRM (HubSpot/Notion) | Billing system |
| Product Usage | Analytics (Mixpanel) | Database queries |
| Financials | Accounting software | Bank statements |
| Marketing | Ad platforms (Meta, Google) | Attribution tool |

---

## KPI Dashboard

**Recommended Tool:** Google Data Studio / Looker / Metabase

**Key Dashboard Views:**

1. **Executive Dashboard** (for founders)
 - Total Revenue, MRR, ARR
 - Active customers
 - Burn rate & runway
 - Sprint gate metrics

2. **Growth Dashboard** (for sales/marketing)
 - New MRR, CAC, LTV:CAC
 - Conversion funnel
 - Churn rate by cohort

3. **Product Dashboard** (for product team)
 - MAU, feature adoption
 - User engagement
 - NPS

---

---

## Related

- **[[biz/departments/finance/models/03-financial-projections|Financial Projections]]** - Forward-looking financial scenarios
- **[[biz/strategy/frameworks/02-okr-framework|OKR Framework]]** - Quarterly goals system
- **[[biz/strategy/planning/execution/03-sprint-1-roadmap|Sprint 1 Master Plan]]** - Sprint execution and gate metrics
- **[[biz/departments/finance/resources/financial-report-templates.xlsx.md|Financial Report Templates]]** - Report templates using these KPIs
- **[[biz/departments/finance/resources/chart-of-accounts.xlsx.md|Chart of Accounts]]** - Account structure for financial tracking

---

**Document Version:** 1.0
**Last Review:** 2026-01-05
**Next Review:** Q2 2026 (After Sprint 1 data collection)


