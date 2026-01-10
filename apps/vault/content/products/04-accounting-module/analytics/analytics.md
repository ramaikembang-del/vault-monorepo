# Dashboard KPIs - R2 Accounting Module
**North Star Metric:** MRR (Monthly Recurring Revenue)
**Review:** Daily standup + Weekly deep dive

---

## Core KPIs (Track Daily)

### 1. MRR (Monthly Recurring Revenue) - NORTH STAR
**Current:** Rp 0 (pre-launch)
**Target Week 6:** Rp 1-2M
**Target Month 12:** Rp 10M

**Formula:** Sum of all active subscriptions
```
MRR = Σ (Active Customers × Subscription Price)
Example: (15 × Rp 50K) + (3 × Rp 75K) + (2 × Rp 100K) = Rp 1.175M
```

---

### 2. Paying Customers
**Target Week 6:** 20+
**Target Month 12:** 100+

**Breakdown:**
- Basic tier: 12 (60%)
- Plus tier: 6 (30%)
- Pro tier: 2 (10%)

---

### 3. Trial → Paid Conversion
**Target:** 50%+

**Formula:** (Paying Customers / Trial Signups) × 100
```
Example: 20 paying / 40 trials = 50%
```

---

### 4. Monthly Churn Rate
**Target:** <2%

**Formula:** (Churned Customers / Total Customers at Start) × 100
```
Example: 1 churned / 50 customers = 2%
```

---

### 5. Weekly Active Users (WAU)
**Target:** 80%+ of paying customers

**Definition:** Logged in + entered ≥1 expense this week

---

## Secondary KPIs (Track Weekly)

### 6. Customer Acquisition Cost (CAC)
**Target:** <Rp 250K

**Formula:** Total Marketing Spend / New Customers
```
Example: Rp 5M spend / 20 customers = Rp 250K CAC
```

---

### 7. Lifetime Value (LTV)
**Target:** >Rp 3M (Blended)

**Formula:** ARPU × (1 / Monthly Churn Rate)
```
Example: Rp 62.5K ARPU × (1 / 0.02 churn) = Rp 3.125M LTV
```

---

### 8. LTV:CAC Ratio
**Target:** >10:1

**Formula:** LTV / CAC
```
Example: Rp 3.125M / Rp 250K = 12.5:1 (Excellent!)
```

---

### 9. Net Revenue Retention (NRR)
**Target:** >100% (expansion revenue > churn)

**Formula:** (MRR Start + Expansion - Churn) / MRR Start × 100
```
Example: (Rp 2M + Rp 300K - Rp 100K) / Rp 2M = 110%
```

---

### 10. Net Promoter Score (NPS)
**Target:** 60+

**Survey Question:** "Scale 1-10: Seberapa likely kamu recommend R2 ke teman?"
- 9-10: Promoters
- 7-8: Passives
- 1-6: Detractors

**Formula:** % Promoters - % Detractors

---

## Operational KPIs (Track Weekly)

### 11. Activation Rate (Day 7)
**Target:** 80%

**Definition:** Trial users who generated first P&L by Day 7

---

### 12. Average Expense Entries/Customer
**Target:** 10+/month

**Red Flag:** <5 entries/month (low engagement)

---

### 13. P&L Generation Rate
**Target:** 90% of customers generate P&L monthly

---

### 14. Upsell Rate
**Target:** 30-40% (Basic → Plus/Pro)

**Formula:** Upsold Customers / Total Basic Customers × 100

---

### 15. Support Tickets/Customer
**Target:** <0.5 tickets/customer/month

**Red Flag:** >1 ticket/customer = product complexity issue

---

## KPI Dashboard (Weekly Snapshot)

| KPI | Target | Week 1 | Week 2 | Week 3 | Week 4 | Week 5 | Week 6 |
|-----|--------|--------|--------|--------|--------|--------|--------|
| **MRR** | Rp 1-2M | Rp 250K | Rp 500K | Rp 750K | Rp 1M | Rp 1.5M | Rp 2M |
| **Customers** | 20+ | 5 | 10 | 15 | 18 | 20 | 22 |
| **Trial → Paid** | 50%+ | 50% | 50% | 50% | 45% | 50% | 55% |
| **Churn** | <2% | 0% | 0% | 5% | 3% | 2% | 2% |
| **WAU** | 80%+ | TBD | TBD | TBD | TBD | TBD | 80% |
| **NPS** | 60+ | - | - | - | - | 60 | 65 |

---

## Alert Thresholds (Auto-Notify Team)

**Red Alerts (Urgent):**
- MRR declined week-over-week
- Churn rate >5% this month
- Trial → Paid conversion <30%
- NPS drops below 40

**Yellow Alerts (Monitor):**
- WAU <70%
- Activation rate <60%
- CAC increases >20%
- Support tickets spike >2×

---

**Document Status:** Active KPI Dashboard
**Owner:** Product Lead + Growth Lead
**Review:** Daily (MRR), Weekly (all KPIs)
**Last Updated:** December 28, 2025

---

## Related

- **[[products/04-accounting-module/04-accounting-module|Accounting Module Product]]** - Product overview
- **[[products/04-accounting-module/analytics/product-metrics|Product Metrics]]** - AARRR framework
- **[[products/04-accounting-module/operations/operations|Operations]]** - Operational procedures
- **[[products/04-accounting-module/customer-success/health-scores|Health Scores]]** - Customer health metrics
- **[[products/04-accounting-module/marketing/launch-campaign|Launch Campaign]]** - Week-by-week targets
