# Product Metrics - R2 Accounting Module
**Framework:** AARRR (Pirate Metrics)
**North Star Metric:** Monthly Recurring Revenue (MRR)
**Review Frequency:** Weekly

---

## AARRR Framework for R2

### 1. Acquisition (How do customers find us?)

**Metrics:**
- **Website Visitors:** Landing page visits/week
- **Email Signups:** Lead magnet downloads
- **Trial Signups:** Free trial activations
- **Sources:** Instagram ads, POS partnerships, organic, referrals

**Targets (Week 1-6):**
- Landing page visits: 100+/week
- Email signups: 50+/week
- Trial signups: 20+/week

**CAC by Channel:**
| Channel | Cost | Signups | CAC |
|---------|------|---------|-----|
| Instagram Ads | Rp 2M | 40 | Rp 50K |
| POS Partnerships | Rp 500K | 10 | Rp 50K |
| Organic/Referral | Rp 0 | 10 | Rp 0 |
| **Blended** | **Rp 2.5M** | **60** | **Rp 42K** |

---

### 2. Activation (Do they see value quickly?)

**Key Metric:** First Value Moment (FVM) = First P&L generated

**Activation Funnel:**
```
Trial Signup → POS Connected → First Expense → First P&L
100% → 60% (Day 1) → 70% (Day 3) → 80% (Day 7)
```

**Metrics:**
- **Day 1 Activation:** 60% (POS connected + 1 expense)
- **Day 7 Activation:** 80% (5+ expenses + first P&L)
- **Time to First P&L:** Median 5 days

**Red Flags:**
- <40% Day 1 activation → onboarding friction
- >10 days to first P&L → engagement issue

---

### 3. Retention (Do they keep using it?)

**Key Metrics:**
- **Weekly Active Users (WAU):** 80%+ of paying customers
- **Monthly Churn:** <2% (target)
- **Cohort Retention:** 90% Month 1 → 80% Month 3

**Engagement:**
- Expense entries/month: 10+ (ideal), 5-9 (good), <5 (at-risk)
- P&L generations/month: 4+ (weekly), 1-3 (monthly), 0 (churn risk)

**Churn by Cohort:**
| Month 1 | Month 2 | Month 3 | Month 6 | Month 12 |
|---------|---------|---------|---------|----------|
| 80% | 75% (-5%) | 70% (-5%) | 65% (-5%) | 60% (-5%) |

**Target:** <20% annual churn = 80%+ retention at Month 12

---

### 4. Revenue (Are they paying?)

**North Star Metric: MRR (Monthly Recurring Revenue)**

**MRR Breakdown:**
```
Month 1: Rp 1M (20 customers × Rp 50K avg)
Month 3: Rp 2M (30 customers × Rp 67K avg, some upsells)
Month 6: Rp 5M (60 customers × Rp 83K avg)
Target Month 12: Rp 10M (100+ customers)
```

**Revenue Metrics:**
- **ARPU (Average Revenue Per User):** Rp 50-75K/month
- **MRR Growth Rate:** 20%+ MoM (early stage)
- **ARR (Annual Recurring Revenue):** MRR × 12

**Revenue by Tier:**
| Tier | % of Customers | Avg Price | MRR Contribution |
|------|----------------|-----------|------------------|
| Basic | 60% | Rp 50K | 60% × Rp 50K = Rp 30K |
| Plus | 30% | Rp 75K | 30% × Rp 75K = Rp 22.5K |
| Pro | 10% | Rp 100K | 10% × Rp 100K = Rp 10K |
| **Blended ARPU** | - | - | **Rp 62.5K** |

---

### 5. Referral (Do they tell others?)

**Metrics:**
- **NPS (Net Promoter Score):** Target 60+
- **Referral Rate:** 10-15% of customers refer someone
- **Referred Customers:** 5-10% of total signups

**Referral Program:**
- Incentive: 1 month free (both referrer + referee)
- Cost: Rp 50K × 2 = Rp 100K per successful referral
- CAC: Rp 100K (vs Rp 250K paid acquisition = 60% savings)

**Viral Coefficient:** 0.1-0.15 (10-15% referral rate, growing organically)

---

## Key Performance Indicators (KPIs) by Stage

### Sprint 2 (Week 1-6): Validation

| KPI | Target | Why It Matters |
|-----|--------|----------------|
| **Trial Signups** | 60+ | Demand signal |
| **Trial → Paid** | 50%+ | Product-market fit |
| **Day 7 Activation** | 80%+ | Onboarding works |
| **MRR** | Rp 1-2M | Gate 2A criteria |
| **Paying Customers** | 20+ | Gate 2A criteria |

---

### Month 2-6: Growth

| KPI | Target | Why It Matters |
|-----|--------|----------------|
| **MRR Growth** | 20%+ MoM | Scaling momentum |
| **Monthly Churn** | <2% | Retention healthy |
| **CAC** | <Rp 250K | Unit economics work |
| **LTV:CAC** | >10:1 | Profitable growth |
| **NPS** | 60+ | Customer satisfaction |

---

### Month 7-12: Scale

| KPI | Target | Why It Matters |
|-----|--------|----------------|
| **MRR** | Rp 10M+ | Revenue target |
| **Customers** | 100+ | Scale achieved |
| **Annual Churn** | <20% | Long-term viability |
| **Upsell Rate** | 30%+ | Revenue expansion |

---

## Metrics Dashboard Structure

**Weekly Review (Every Monday 9 AM):**
1. Acquisition: New signups this week
2. Activation: Day 1/Day 7 rates
3. Retention: Churn this week
4. Revenue: MRR vs last week
5. Referral: NPS + referrals

**Monthly Review (First Monday of Month):**
1. AARRR full funnel analysis
2. Cohort retention curves
3. Revenue by tier breakdown
4. CAC vs LTV analysis
5. Feature usage stats

---

## Metrics Tools Stack

**Analytics:** Google Analytics (landing page)
**Product Usage:** Mixpanel or Amplitude (expense entries, P&L generations)
**Revenue:** Stripe or Midtrans (MRR, churn)
**Customer Success:** Health score spreadsheet →HubSpot (future)
**Surveys:** Google Forms (NPS, feedback)

---

**Document Status:** Active Metrics Framework
**Owner:** Product Lead
**Review:** Weekly (KPI tracking)
**Last Updated:** December 28, 2025

---

## Related

- **[[products/04-accounting-module/04-accounting-module|Accounting Module Product]]** - Product overview
- **[[products/16-marketing-automator/product-strategy/product-strategy|Product Strategy]]** - R2 strategy and roadmap
- **[[products/01-power-bi-template/operations/06-gate-tracking|Gate Tracking]]** - Gate 2A/2B/2C validation criteria
- **[[products/04-accounting-module/customer-success/health-scores|Health Scores]]** - Customer health scoring framework
- **[[products/03-web-dashboard-lite/analytics/dashboard-kpis|Dashboard KPIs]]** - KPI dashboard structure
