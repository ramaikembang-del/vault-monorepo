# Revenue Tracking System - Comprehensive KPI Framework

**PWBI F&B Growth**
**Last Updated:** 2025-12-26
**Purpose:** Data-driven decision-making through comprehensive metrics tracking

> [!IMPORTANT]
> **Philosophy:** Track leading indicators (predict future), not just lagging indicators (report past)

---

## Executive Summary

**Tracking Tiers:**
- **Daily:** Operational metrics (sales, signups, usage)
- **Weekly:** Growth metrics (MRR, customer count, gates)
- **Monthly:** Financial metrics (ARR, CAC, LTV, churn)
- **Quarterly:** Strategic metrics (cohort retention, unit economics, product-market fit)

**Tools:**
- Stripe (payment data)
- Mixpanel (product analytics)
- Google Analytics (website traffic)
- Spreadsheet (consolidated dashboard)

---

## Daily Metrics Dashboard

### 1. Template Sales (A1)

**Metrics to Track:**
| Metric | Formula | Target (Sprint 1) | Purpose |
|--------|---------|-------------------|---------|
| **Sales Count** | # purchases | 3-4/week | Gate 1A progress |
| **GMV (Gross Merchandise Value)** | Sum of sales | Rp 7.5-10M/week | Revenue pacing |
| **Avg Sale Price** | GMV ÷ Sales | Rp 2.5M | Price elasticity |
| **Tier Mix** | % T1 / T2 / T3 | 60/30/10 | Upsell effectiveness |
| **Conversion Rate** | Sales ÷ Demo calls | 10-15% | Sales efficiency |

**Data Source:** Stripe payment dashboard + sales CRM (Notion)

**Daily Review Questions:**
- Are we on pace for 15 sales by Week 4 (Gate 1A)?
- Is avg price declining (price resistance)?
- Are we converting demos at 10%+ (sales effectiveness)?

---

### 2. Lite Freemium (E1)

**Signup Metrics:**
| Metric | Formula | Target | Purpose |
|--------|---------|--------|---------|
| **Daily Signups** | New users | 10-15/day | Acquisition velocity |
| **Signup Source** | Attribution | 50% community, 30% organic, 20% referral | Channel mix |
| **Activation Rate** | % who use >1 time | 60% | Product stickiness |
| **Time-to-First-Value** | Signup → first report viewed | <5 minutes | Onboarding quality |

**Engagement Metrics:**
| Metric | Formula | Target | Purpose |
|--------|---------|--------|---------|
| **DAU (Daily Active Users)** | Unique logins/day | 30+ (from 55 total) | Engagement health |
| **WAU (Weekly Active Users)** | Unique logins/week | 45+ (82%) | Weekly engagement |
| **MAU (Monthly Active Users)** | Unique logins/month | 50+ (91%) | Monthly retention |
| **DAU/MAU Ratio** | DAU ÷ MAU | >50% | "Stickiness" metric |
| **Avg Session Duration** | Time on platform | 8-12 minutes | Depth of usage |
| **Reports Generated/User** | Reports ÷ Active users | 2-3/day | Feature utilization |

**Data Source:** Mixpanel (product analytics)

**Daily Review Questions:**
- Are we on pace for 55 users by Week 4 (Gate 1B)?
- Is DAU/MAU > 50% (sticky product)?
- Are users generating 2+ reports/day (engaged)?

---

### 3. Support Subscriptions (R1)

**Metrics:**
| Metric | Formula | Target | Purpose |
|--------|---------|--------|---------|
| **New Subscribers** | Conversions from A1 | 1-2/week | Upsell rate |
| **Conversion Rate** | R1 ÷ A1 | 30%+ | Attach rate |
| **MRR** | Subscribers × Rp 75K | Rp 375K (Week 4) | Recurring revenue |
| **Churn Events** | Cancellations | 0 (too early) | Early warning |

**Data Source:** Stripe subscriptions

---

## Weekly Metrics Dashboard

### 1. Revenue Metrics

**MRR (Monthly Recurring Revenue):**
| Component | Calculation | Week 4 Target |
|-----------|-------------|---------------|
| **New MRR** | New subscriptions × price | +Rp 150K/week |
| **Expansion MRR** | Upgrades (tier increases) | Rp 0 (too early) |
| **Contraction MRR** | Downgrades | Rp 0 |
| **Churned MRR** | Cancellations × price | Rp 0 (retain all) |
| **Net New MRR** | New + Expansion - Contraction - Churn | +Rp 150K/week |
| **Total MRR** | Cumulative | Rp 375K (Week 4) |

**Quick MRR Check:**
- Week 1: Rp 0
- Week 2: Rp 75K (1 subscriber)
- Week 3: Rp 225K (3 subscribers)
- Week 4: Rp 375K (5 subscribers)

**ARR:** MRR × 12 = Rp 4.5M (exit Sprint 1)

---

### 2. Customer Metrics

**Customer Count:**
| Segment | Week 4 Target | Calculation |
|---------|---------------|-------------|
| **Template Buyers (A1)** | 15 | Cumulative purchases |
| **Support Subscribers (R1)** | 5 | Active subscriptions |
| **Lite Freemium (E1)** | 55 | Total signups |
| **Lite Paid (future)** | 0 | Not launched yet |
| **Total Paying Customers** | 20 | A1 + R1 (some overlap) |

**Customer Growth Rate:**
- Week-over-week: +25-30% (compounding signups)
- Sprint 1 total growth: 0 → 20 paying customers

---

### 3. Gate Progress Tracking

**Gate 1A: Template Sales**
| Week | Sales | Cumulative | Gate Status | Action |
|------|-------|------------|-------------|--------|
| 1 | 2 | 2 | On track (need 5) | Continue |
| 2 | 3 | 5 | **GATE PASSED** | Unlock Sprint 2 budget |
| 3 | 5 | 10 | Exceeding | Scale marketing |
| 4 | 5 | 15 | Strong | Proceed Sprint 2 |

**Gate 1B: Lite Engagement**
| Week | Signups | Cumulative | Active (30%+) | Gate Status |
|------|---------|------------|---------------|-------------|
| 1 | 15 | 15 | 10 (67%) | Strong start |
| 2 | 20 | 35 | 22 (63%) | Above target |
| 3 | 15 | 50 | 28 (56%) | On track |
| 4 | 5 | 55 | 30 (55%) | **GATE PASSED** |

**Dashboard Alert Logic:**
- Green: On pace to hit gate (>80% of target)
- Yellow: At risk (50-80% of target)
- Red: Failing (< 50% of target) → Trigger pivot discussion

---

### 4. Channel Performance

**Traffic Sources (Weekly):**
| Channel | Visitors | Signups | Conversion | CAC | Quality Score |
|---------|----------|---------|------------|-----|---------------|
| **Organic/SEO** | 500 | 10 | 2% | Rp 200K | |
| **Community** | 300 | 15 | 5% | Rp 100K | |
| **Referrals** | 200 | 8 | 4% | Rp 50K | |
| **Direct** | 100 | 3 | 3% | Rp 0 | |
| **Paid Ads** | 0 | 0 | - | - | (Paused Sprint 1) |

**Attribution Model:** Last-touch (simple for Sprint 1)

**Channel Optimization:**
- Double down on: Community (5% conversion, Rp 100K CAC)
- Test scaling: Organic (2% conversion, improving over time)
- Pause: Paid ads (wait for validation)

---

## Monthly Metrics Dashboard

### 1. Financial KPIs

**ARR Tracking:**
| Month | New MRR | Churned MRR | Net MRR | ARR (MRR × 12) |
|-------|---------|-------------|---------|----------------|
| Month 1 | Rp 375K | Rp 0 | Rp 375K | Rp 4.5M |
| Month 2 | Rp 1.3M | Rp 50K | Rp 1.25M | Rp 15M |
| Month 3 | Rp 2.5M | Rp 150K | Rp 2.35M | Rp 28.2M |
| Month 4 | Rp 1.8M | Rp 200K | Rp 1.6M | Rp 19.2M |
| **Total (Mo 4 exit)** | | | **Rp 5.95M** | **Rp 71.4M ARR** |

**Revenue Mix:**
| Type | Month 1 | Month 4 | Trend |
|------|---------|---------|-------|
| One-time (Templates) | 90% | 40% | Declining (expected) |
| Recurring (MRR) | 10% | 60% | Growing (goal) |

---

### 2. Customer Economics

**CAC by Product:**
| Product | Month 1 CAC | Month 3 CAC | Change | Target |
|---------|-------------|-------------|--------|--------|
| Templates (A1) | Rp 600K | Rp 500K | -17% | <Rp 500K |
| Support (R1) | Rp 0 | Rp 0 | - | Rp 0 (upsell) |
| Lite paid (E1) | Rp 0 | Rp 0 | - | Rp 0 (freemium) |
| SaaS (C1) | (Not launched) | Rp 3.5M | - | <Rp 3M |

**CAC Trend Analysis:**
- Template CAC improving (content SEO compounding)
- ⏳ C1 CAC needs 3-month tracking to validate
- Watch for CAC creep in Month 5-6 (diminishing returns on early channels)

**LTV Validation:**
| Product | Projected LTV | Actual (6-month) | Variance |
|---------|---------------|------------------|----------|
| A1 (Template) | Rp 3.4M | TBD (measure Mo 6) | - |
| R1 (Support) | Rp 900K | TBD (6-mo retention) | - |
| C1 (SaaS) | Rp 14.4M | TBD (12-mo retention) | - |

**Why 6-12 Month Wait:**
- Need real retention data to validate LTV assumptions
- Month 1-3 retention always high (honeymoon period)
- True churn surfaces Month 6-12

---

### 3. Retention & Churn

**Cohort Retention (% still active):**
| Cohort | Mo 1 | Mo 3 | Mo 6 | Mo 12 | Annual Churn |
|--------|------|------|------|-------|--------------|
| **Sprint 1 (R1 Support)** | 100% | TBD | TBD | TBD | Target: 80% retention (20% churn) |
| **Month 2 (E1 Lite paid)** | - | 100% | TBD | TBD | Target: 85% retention |
| **Month 3 (C1 SaaS)** | - | - | 100% | TBD | Target: 85% retention |

**Churn Analysis (when data available Mo 6+):**
| Churn Reason | % of Churn | Recovery Action |
|--------------|------------|----------------|
| Business closed | 40% | Unrecoverable (Indonesia F&B reality) |
| Price too high | 30% | Offer downgrade (C1 → E1 Lite) |
| Not using product | 20% | Customer success outreach |
| Switched to competitor | 10% | Win-back campaign |

**Churn Prevention Triggers:**
- Usage drop >50% in 30 days → CSM outreach
- No login in 14 days → Re-engagement email sequence
- Failed payment → Grace period + WhatsApp reminder

---

### 4. Product-Market Fit Metrics

**Sean Ellis PMF Test:**
- Survey question: "How would you feel if you could no longer use this product?"
 - Very disappointed: >40% = PMF
 - Somewhat disappointed: Marginal fit
 - Not disappointed: No PMF

**Measure:** Month 3 (after 50+ customers)

**NPS (Net Promoter Score):**
- Promoters (9-10): >50%
- Passives (7-8): 30-40%
- Detractors (0-6): <10%
- **NPS:** Promoters - Detractors = Target: >50

**Measure:** Quarterly (need 30+ responses for statistical significance)

---

## Quarterly Metrics (Strategic Review)

### 1. Cohort Analysis Deep-Dive

**Sprint 1 Cohort (Mo 1-4 customers):**
| Metric | Month 3 | Month 6 | Month 12 | Target |
|--------|---------|---------|----------|--------|
| **Retention %** | 95% | TBD | TBD | 80%+ |
| **Revenue per customer** | Rp 150K/mo | TBD | TBD | Rp 200K+ (expansion) |
| **Support tickets/customer** | 0.3 | TBD | TBD | <0.5 (efficiency) |
| **NPS** | TBD | TBD | TBD | >50 |

**Cohort Comparison (Q4 analysis):**
- Compare Sprint 1 vs. Sprint 2 vs. Sprint 3 cohorts
- Which cohort has best retention? (Identifies PMF timing)
- Which cohort has highest LTV? (Identifies ideal customer)

---

### 2. Unit Economics Review

**LTV:CAC by Quarter:**
| Quarter | Blended CAC | Blended LTV | LTV:CAC | Target |
|---------|-------------|-------------|---------|--------|
| Q1 | Rp 600K | TBD (wait 12mo) | TBD | >20:1 |
| Q2 | Rp 1.2M | TBD | TBD | >15:1 |
| Q3 | Rp 2M | TBD | TBD | >10:1 |
| Q4 | Rp 2.5M | TBD | TBD | >5:1 |

**Note:** CAC increases as easy channels saturate, LTV validation takes 12-24 months

**Payback Period Tracking:**
| Product | Q1 Payback | Q4 Payback | Trend |
|---------|------------|------------|-------|
| C1 (SaaS Basic) | 8.8 months | TBD | Target: <12mo |
| C2 (SaaS Pro) | 5.5 months | TBD | Target: <8mo |

---

### 3. Revenue Quality Metrics

**Customer Concentration Risk:**
- Top 10 customers: <30% of ARR (healthy diversification)
- If >50%: Concentration risk (too dependent on few customers)

**Revenue Predictability:**
- Recurring revenue %: Target 85% by Year 2
- One-time %: <15% (mature SaaS model)

**Gross Margin by Product:**
| Product | Q1 Margin | Target | Status |
|---------|-----------|--------|--------|
| Templates | 95% | 90%+ | |
| SaaS (C1-C4) | 85% | 80%+ | |
| Accounting (R2) | 92% | 90%+ | |
| Blended | 87% | 85%+ | |

---

## Dashboard Implementation

### Tool Stack

**1. Stripe (Payment Data)**
- MRR dashboard (built-in)
- Customer lifetime revenue
- Churn events (subscription cancellations)
- Revenue by product

**Export Weekly:** CSV → Spreadsheet consolidation

---

**2. Mixpanel (Product Analytics)**
- User signups, activation, retention
- Feature usage (which metrics viewed most?)
- Funnel analysis (signup → activation → engagement)
- A/B testing results

**Key Events to Track:**
- User signup (source attribution)
- First report viewed (activation)
- 7-day retention (comeback after first week?)
- Feature usage (which of 6 Lite metrics used?)

---

**3. Google Analytics (Website Traffic)**
- Traffic sources (organic, direct, referral)
- Landing page performance
- Conversion rate (visitor → signup)
- Bounce rate (quality of traffic)

---

**4. Consolidated Spreadsheet (Master Dashboard)**

**Structure:**
- Tab 1: Daily metrics (automated from Stripe/Mixpanel API)
- Tab 2: Weekly summary (MRR, customers, gates)
- Tab 3: Monthly financials (ARR, CAC, LTV)
- Tab 4: Quarterly cohort analysis
- Tab 5: Charts/visualizations

**Automation:**
- Zapier integration: Stripe → Google Sheets (auto-update MRR)
- Mixpanel API: Daily user counts
- Manual entry: Channel attribution, qualitative notes

---

## Alert Systems

### Red Flags (Trigger Immediate Action)

| Metric | Threshold | Alert | Action |
|--------|-----------|-------|--------|
| **Daily signups** | <5/day for 3 days | | Investigate channel issues |
| **DAU/MAU** | <40% | | Product engagement crisis |
| **MRR growth** | Negative (churn > new) | | Retention emergency |
| **Failed payments** | >10% | | Payment issue (bank, fraud?) |
| **Gate progress** | <50% of target | | Pivot discussion needed |

### Yellow Warnings (Monitor Closely)

| Metric | Threshold | Alert | Action |
|--------|-----------|-------|--------|
| **Weekly signups** | -20% vs. prior week | | Channel performance check |
| **Conversion rate** | <1% (visitor → signup) | | Landing page A/B test |
| **Avg session duration** | <5 minutes | | UX improvement needed |
| **Support tickets** | >1 per customer/month | | Product quality issue |

---

## Monthly Reporting Template

**Executive Summary (1-slide):**
- ARR: Rp X → Rp Y (+Z% MoM)
- Customers: X → Y (+Z)
- Churn: X%
- Gate status: or ⏳ or
- Key decision: Proceed Sprint X or Pivot?

**Detailed Report (5-slides):**
1. Revenue (MRR waterfall chart)
2. Customers (cohort retention heatmap)
3. Product usage (top features, engagement)
4. Unit economics (CAC, LTV, payback)
5. Next month focus (what we'll optimize)

---

## Continuous Improvement

**Weekly Metrics Review (15 minutes):**
- Founder reviews dashboard Friday afternoon
- Flag any red/yellow alerts
- Adjust upcoming week tactics (e.g., boost community if signups dropping)

**Monthly Deep Dive (2 hours):**
- Analyze cohort retention trends
- Review channel performance (double down or cut)
- Update financial forecast based on actuals

**Quarterly Strategic Review (1 day):**
- Validate product-market fit (NPS, retention)
- Update Year 1 forecast (based on Q1 learnings)
- Decide: Proceed to next sprint or iterate?

---

**Related Documents:**
- [[biz/departments/finance/revenue/01-revenue-model|revenue-model.md]] - Revenue targets to track against
- [[biz/departments/finance/models/04-unit-economics|unit-economics.md]] - CAC/LTV benchmarks
- [[biz/departments/finance/budgeting/02-budget-planning|budget-planning.md]] - Budget performance tracking
