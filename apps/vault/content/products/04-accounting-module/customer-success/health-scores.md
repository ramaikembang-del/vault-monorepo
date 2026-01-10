# Health Scores - R2 Accounting Module
**Product:** R2 - Analytics Suite / Accounting Module
**Goal:** Predict churn risk and identify expansion opportunities
**Review Frequency:** Weekly

---

## Health Score Formula

**Overall Health Score = Weighted Average:**
- Usage Score (40%)
- Engagement Score (30%)
- Value Realization Score (20%)
- Growth Potential (10%)

**Scale:** 0-100 (100 = perfect health)

---

## 1. Usage Score (40% weight)

### Metrics Tracked

**Expense Entry Frequency:**
- Ideal: 10+ entries/month (daily active)
- Good: 5-9 entries/month (weekly active)
- Poor: <5 entries/month (at-risk)

**P&L Generation:**
- Ideal: 4+ times/month (weekly reviews)
- Good: 1-3 times/month (monthly reviews)
- Poor: 0 P&L generated (not using core feature)

**Login Frequency:**
- Ideal: 8+ logins/month
- Good: 4-7 logins/month
- Poor: <4 logins/month

### Scoring Formula:
```
Usage Score = (Expense Entries × 4) + (P&Ls Generated × 10) + (Logins × 2)
Max = 100 points

Example:
- 8 expense entries × 4 = 32
- 2 P&Ls × 10 = 20
- 10 logins × 2 = 20
= 72/100 (Good usage)
```

---

## 2. Engagement Score (30% weight)

### Metrics Tracked

**WhatsApp Responsiveness:**
- Ideal: Responds within 4 hours
- Good: Responds within 24 hours
- Poor: No response or >48 hours

**Feature Adoption:**
- Uses WhatsApp expense entry: +20 points
- Uses CSV import: +15 points
- Uses export PDF: +10 points
- Attended webinar/training: +10 points

**Feedback Participation:**
- Responds to surveys: +10 points
- Provides feature requests: +10 points
- Participates in beta features: +10 points

### Scoring Formula:
```
Engagement = WhatsApp responsiveness (30) + Feature adoption (55) + Feedback (30)
Max = 115, capped at 100
```

---

## 3. Value Realization Score (20% weight)

**Key Indicator:** Does customer perceive ROI?

**Self-Reported (Survey Question):**
- "On scale 1-10, berapa banyak waktu R2 hemat vs Excel?"
- 8-10: 100 points (high value)
- 5-7: 60 points (moderate value)
- 1-4: 20 points (low value)

**Observed Behaviors:**
- Generated P&L for bank loan application: +40 points
- Referred a friend: +30 points (strong advocate = sees value)
- Upgraded tier (Basic → Plus): +20 points

### Scoring Formula:
```
Value Realization = Self-reported (60) + Observed behaviors (40)
Max = 100
```

---

## 4. Growth Potential (10% weight)

**Expansion Indicators:**
- Currently 1 outlet, opened 2nd: +50 points (upsell to Plus)
- Currently 2 outlets, opened 3rd: +30 points
- Asks about invoicing feature: +20 points (upsell to R2e)
- Revenue growth >20% MoM: +10 points

### Scoring Formula:
```
Growth Potential = Sum of expansion indicators
Max = 100
```

---

## Health Score Tiers

### Green (80-100): Healthy Customers
**Characteristics:**
- High usage (engage daily/weekly)
- Responsive to communication
- See clear ROI

**Action:** Minimal touch; ask for testimonial/referral

---

### Yellow (50-79): At-Risk Customers
**Characteristics:**
- Moderate usage (sporadic)
- Sometimes unresponsive
- Unclear if seeing value

**Action:** Proactive outreach:
- "Hi [Name], noticed you didn't log in last week - everything ok?"
- Offer training session

---

### Red (<50): Churn Risk
**Characteristics:**
- Low/no usage
- Unresponsive to messages
- No P&L generated in 30 days

**Action:** Urgent intervention:
- Personal call (not WhatsApp)
- Offer discount/pause subscription
- Understand blocker

---

## Weekly Health Score Dashboard

| Customer | Usage | Engagement | Value | Growth | **Total** | Tier | Action Needed |
|----------|-------|------------|-------|--------|-----------|------|---------------|
| Amanda (Kopi Kawan) | 85 | 90 | 90 | 70 | **87** | Green | Ask for testimonial |
| Budi (Warung) | 70 | 60 | 80 | 50 | **68** | Yellow | Check-in call |
| Rika (Bakso) | 40 | 50 | 40 | 20 | **42** | Red | Urgent: Why not using? |

---

## Red Flag Triggers (Auto-Alerts)

**Immediate Alerts (Slack/Email to CS Team):**
1. Zero logins for 7 days
2. No expense entries for 14 days
3. No P&L generated for 30 days
4. WhatsApp message unanswered for 48 hours
5. Cancellation request submitted

**Action:** CS Manager reaches out within 24 hours

---

## Upsell Opportunity Triggers

**High Growth Potential (Score >70):**
- Opened 2nd outlet → Upsell to Plus tier
- Asked about invoicing → Upsell to Pro + R2e module
- Revenue doubled → "Ready to scale? Here's how R2 helps"

---

**Document Status:** Active Health Scoring Framework
**Owner:** Customer Success Manager
**Review:** Weekly (Monday AM)
**Last Updated:** December 28, 2025

---

## Related

- **[[products/04-accounting-module/04-accounting-module|Accounting Module Product]]** - Product overview
- **[[products/04-accounting-module/customer-success/engagement-playbook|Engagement Playbook]]** - Onboarding and engagement strategy
- **[[products/04-accounting-module/customer-success/retention-strategy|Retention Strategy]]** - Churn prevention framework
- **[[products/04-accounting-module/customer-success/upsell-triggers|Upsell Triggers]]** - Expansion opportunity indicators
- **[[products/04-accounting-module/analytics/product-metrics|Product Metrics]]** - AARRR metrics framework
