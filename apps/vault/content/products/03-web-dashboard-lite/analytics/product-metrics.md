# E1: Product Metrics
**Purpose:** Track what matters for E1 freemium product success

---

## Metric Categories

### 1. Acquisition Metrics

**Free Signups:**
- Target: 100/month (Month 1)
- Measure: Total account creations
- Source breakdown: Facebook, WhatsApp, Instagram, Referral

**Landing Page Conversion:**
- Target: 5-10%
- Formula: Signups / Page visits
- Optimize: A/B test copy, CTA, social proof

---

### 2. Activation Metrics

**Onboarding Completion Rate:**
- Target: 60-70% within 24h
- Measure: % who complete tutorial + view first dashboard
- Warning: <50% = UX issue

**Time to First Value:**
- Target: <2min
- Measure: Signup → First dashboard view
- Optimize: Reduce onboarding steps

---

### 3. Engagement Metrics

**DAU (Daily Active Users):**
- Target: 30-40% of activated users
- Measure: % who open app on any given day
- Segment: Free vs Premium vs Pro

**WAU (Weekly Active Users):**
- Target: 50% of activated users
- Measure: % who open app 1+ times/week
- Goal: Convert to daily (DAU/WAU ratio ↑)

**Feature Usage Breadth:**
- Target: 2.5 avg features/user
- Measure: # unique features used per user
- Optimize: Feature discovery nudges

**Data Input Frequency:**
- Target: 5+ days/week for engaged users
- Measure: % of days with data input
- KPI: Habit formation signal

---

### 4. Retention Metrics

**Day 7 Retention:**
- Target: 50%
- Formula: % Day 0 signups still active Day 7

**Month 1 Retention (Free):**
- Target: 70%
- Formula: % Month 1 signups still active Month 2

**Month 3 Retention (Free):**
- Target: 50%
- Benchmark: Freemium SaaS typically 30-40%

**Cohort Retention Curve:**
- Track each signup cohort (Jan, Feb, Mar) over time
- Goal: Curve flattening (retention stabilizing)

---

### 5. Conversion Metrics

**Free →Premium Trial:**
- Target: 15% of engaged users
- Measure: % who start 14-day trial

**Trial → Paid:**
- Target: 60-70%
- Measure: % who convert after trial
- Optimize: Trial experience, payment friction

**Overall Free → Paid:**
- Target: 8-10% cumulative (Month 1-6)
- Measure: % of all free signups who ever paid
- Key metric for freemium success

---

### 6. Revenue Metrics

**MRR (Monthly Recurring Revenue):**
- Target Month 3: Rp 10M (40 Premium @ Rp 250K)
- Formula: Sum of all monthly subscriptions
- Growth target: 20% MoM

**ARPU (Average Revenue Per User):**
- Target: Rp 200K (blended free + paid)
- Formula: Total MRR / Total active users
- Increase via: Conversion rate ↑ or pricing ↑

**LTV (Lifetime Value):**
- Target: Rp 2.5M per paying customer
- Formula: ARPU × Avg customer lifetime (months)
- Assumption: 10-month avg retention

**CAC (Customer Acquisition Cost):**
- Target: <Rp 500K per paying customer
- Formula: Total marketing spend / # paying customers
- Goal: LTV/CAC ratio >3x

---

### 7. Churn Metrics

**Free User Churn:**
- Expected: 50% Month 1, 30% Month 3
- Measure: % who stop using (0 opens in 14 days)
- Action: Reactivation if health score was high

**Paid User Churn:**
- Target: <10%/month
- Measure: % cancellations + payment failures
- CRITICAL: Paying churn must be low (<15%)

**Churn Reasons (tracked via exit survey):**
- "Too expensive"
- "Not using enough"
- "POS report sufficient"
- "Technical issues"

---

## Metric Dashboard Structure

### Executive Dashboard (Weekly Review)

| Category | Metric | Target | Current | Status |
|----------|--------|--------|---------|--------|
| Acquisition | Free signups | 25/week | [X] | // |
| Activation | Onboarding % | 60% | [X%] | // |
| Engagement | WAU % | 50% | [X%] | // |
| Conversion | Free→Paid % | 8-10% | [X%] | // |
| Revenue | MRR | [target] | Rp [X] | // |
| Retention | Churn (paid) | <10% | [X%] | // |

---

## Pirate Metrics (AARRR Framework)

**A - Acquisition:** Free signups (100/month)
**A - Activation:** Onboarding completion (60%)
**R - Retention:** Month 3 retention (50%)
**R - Revenue:** MRR growth (20% MoM)
**R - Referral:** Referral rate (10-15%)

---

## Key Metric Trade-offs

**Activation vs Engagement:**
- High activation but low engagement → Onboarding misleading (set wrong expectations)
- Low activation but high engagement → Onboarding too hard (fix UX)

**Free retention vs Conversion:**
- High free retention, low conversion → Feature gating too generous (give too much for free)
- Low free retention, high conversion → Good (users who stay, pay)

**MRR growth vs Churn:**
- High MRR growth + high churn → Leaky bucket (fix retention before scaling acquisition)
- Low MRR growth + low churn → Good foundation, scale acquisition

---

## Tools

**App Analytics:**
- Mixpanel OR Amplitude (event tracking)
- Track: Opens, feature clicks, data inputs, session duration

**Payment:**
- Midtrans dashboard (MRR, churn, failed payments)

**CRM:**
- Google Sheets (MVP health scores)
- OR: HubSpot, Zoho (if budget)

**Dashboard:**
- Google Data Studio (free)
- Connect: App analytics + Midtrans + CRM

---

**DRI:** Product Manager
**Update:** Daily (automated), Weekly review with team

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite Product]]** - Product overview
- **[[products/03-web-dashboard-lite/analytics/dashboard-kpis|Dashboard KPIs]]** - Dashboard metrics tracking
- **[[products/03-web-dashboard-lite/analytics/conversion-funnel-optimization|Conversion Funnel Optimization]]** - A/B testing playbook
- **[[products/03-web-dashboard-lite/customer-success/health-scores|Health Scores]]** - User health scoring
- **[[products/03-web-dashboard-lite/operations/07-metrics-tracking-sop|Metrics Tracking SOP]]** - Operational metrics tracking
