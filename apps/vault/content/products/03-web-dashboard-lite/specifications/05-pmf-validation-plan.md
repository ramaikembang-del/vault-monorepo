# PMF Validation Plan

## Objective

Validate Web Dashboard Lite's product-market fit with Indonesian Mikro F&B segment before scaling features to Full SaaS Platform.

**Timeline:** 6 months (Months 1-6)
**Target:** 100-500 users, 10-20% paid conversion

---

## Success Criteria

### Primary Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **User Acquisition** | 100-500 Mikro users (Starter tier) | Sign-ups, installs |
| **Paid Conversion** | 10-20% (to Growth/Pro tiers) | Paid / Total users |
| **Daily Active Usage** | >60% | Open app ≥1× per day |
| **30-Second Insight** | >80% achieve | Time to first insight |
| **NPS** | >50 | Net Promoter Score survey |
| **Month 3 Retention** | >80% | Active in Month 3 / Month 1 |

### Learning Objectives

**Feature Validation:**
1. Which of 30 metrics are used most? (guide Full SaaS prioritization)
2. Is offline-first a real need or nice-to-have?
3. Does "Protection First" messaging resonate?
4. What conversion triggers actually work? (2nd outlet? 10+ staff?)

**Pricing Validation:**
1. Is Rp 200-250K/month acceptable for Growth tier?
2. What % actually use free tier forever?
3. When do users upgrade Growth → Pro?

**Technical Validation:**
1. Can Mikro users handle CSV export/import?
2. Is Electron stable on low-spec Windows laptops?
3. Do users want cloud sync or prefer offline-only?

---

## User Acquisition Strategy (Months 1-3)

### Target Personas (Phase 1-2)
- **Pak Budi** - Single warung, survival mode
- **Rika** - Ghost kitchen, delivery-only
- **Amanda** - Café owner, growth-minded
- **Dimas** - Coffee cart, wants to scale

### Acquisition Channels

**Channel 1: Direct Outreach (Bandung Market)**
- Leverage existing field research connections
- Face-to-face demos at cafés/restaurants
- Target: 30-50 users (personal touch)

**Channel 2: Facebook Groups**
- "Komunitas Pemilik Warung Kopi"
- "F&B Entrepreneur Indonesia"
- Post: Free tool, offline-first, no data exposure
- Target: 50-100 users (viral potential)

**Channel 3: WhatsApp Community**
- Create "Dashboard Gratis F&B" group
- Invite initial users to share with peers
- Provide daily tips + support
- Target: 100+ users (network effect)

**Channel 4: Partnership (Moka/Pawoon Users)**
- Offer to existing POS users
- "Your POS shows sales. We show insights."
- Target: 50-100 users (warm leads)

**Total Expected:** 200-400 Starter tier users by Month 3

---

## Engagement Tracking (Months 1-6)

### Usage Analytics (Opt-In)

```typescript
// Anonymized telemetry
Track:
- Daily active users (DAU)
- Which tabs viewed most (Financial/Product/Operations)
- Which metrics clicked most (Top 5 per tab)
- Time to first insight (<30 seconds?)
- CSV import frequency (daily? weekly?)
- Cloud sync usage (enabled? how often?)
```

**Privacy:** Opt-in only, no PII, transparent disclosure

###Behavioral Cohorts

```
Cohort 1: Free Forever (80% expected)
- Never upgrade, use basic features
- Learn: Which features are "good enough"?

Cohort 2: Quick Upgraders (10% expected)
- Upgrade within 30 days
- Learn: What triggers fast conversion?

Cohort 3: Slow Burners (5-10% expected)
- Upgrade after 60-90 days
- Learn: What gradual value build-up works?

Cohort 4: Churned (10-20% expected)
- Stop using within 90 days
- Learn: Why did they leave?
```

---

## Conversion Funnel Analysis

### Starter → Growth Tier

**Hypothesis:** Users upgrade when they:
1. Open 2nd outlet (need multi-location comparison)
2. Hire first manager (need multi-device access)
3. Want email alerts (not just in-app)

**Test:** A/B test upgrade prompts
- **Variant A:** "Upgrade for 50 more metrics"
- **Variant B:** "Upgrade to sync across devices"
- **Variant C:** "Upgrade to compare 2 locations"

**Measure:** Which variant converts best?

### Growth → Pro Tier

**Hypothesis:** Users upgrade when they:
1. Want industry benchmarks ("How do I compare?")
2. Need custom metrics (their specific KPIs)
3. Request priority support

**Learn:** Is Pro tier necessary or skip straight to Full SaaS?

---

## Feedback Collection

### In-App Surveys (Non-Intrusive)

**Month 1:**
- "How did you hear about us?" (channel attribution)
- "What made you try this?" (positioning validation)

**Month 3:**
- NPS: "Would you recommend to a friend?" (0-10 scale)
- "Which metric do you use most?" (feature prioritization)

**Month 6:**
- "What's missing that would make you pay?" (upsell insights)
- "Would you switch to cloud version?" (Full SaaS interest)

### User Interviews (10-20 customers)

**Select:**
- 5 Power Users (daily usage, high engagement)
- 5 Paid Users (converted to Growth/Pro)
- 5 Churned Users (stopped using)
- 5 Free Forever (never upgraded)

**Questions:**
1. What problem were you trying to solve?
2. Which features do you use? Which do you ignore?
3. Why did/didn't you upgrade?
4. What would make this 10× better?

---

## Technical Validation

### Performance Metrics

| Metric | Target | Actual (TBD) |
|--------|--------|--------------|
| App launch time | <3 seconds | |
| CSV import (10K rows) | <5 seconds | |
| Dashboard load | <1 second | |
| Crash rate | <1% of sessions | |
| Cloud sync success | >95% | |

**Monitor:** Sentry for error tracking, custom logging for performance

### Platform Compatibility

Test on:
- **Windows 10** (majority)
- **Windows 11** (growing)
- **macOS** (5% minority)
- **Low-spec laptops** (2GB RAM, dual-core)

**Goal:** Works on 95%+ of target hardware

---

## Pricing Validation

### Price Sensitivity Test

**Hypothesis:** Mikro segment can pay Rp 200-350K/month for analytics

**Test:**
- Offer Growth tier at Rp 200K for Month 1-3
- Increase to Rp 250K in Month 4-6
- Monitor churn rate (acceptable: <5% churn from price increase)

**Learn:** What's the maximum willingness-to-pay?

---

## Go/No-Go Decision (Month 6)

### Proceed to Full SaaS if:

 **Usage:** 200+ active users, 60%+ DAU
 **Conversion:** 10%+ paid conversion rate
 **Retention:** 75%+ Month 3 retention
 **NPS:** >40 (ideally >50)
 **Feature Validation:** Clear top 10 most-used metrics identified

### Pivot if:

 **Low Usage:** <100 active users (market not interested)
 **Low Conversion:** <5% paid (pricing too high or value too low)
 **High Churn:** <50% Month 3 retention (not sticky enough)
 **Low NPS:** <30 (not solving real problem)

### Decision Matrix

| Outcome | Action |
|---------|--------|
| **All criteria met** | Proceed to Full SaaS Platform development (cloud version) |
| **Usage good, conversion low** | Rethink pricing or freemium model |
| **Conversion good, usage low** | Improve onboarding, expand acquisition |
| **Most criteria missed** | Pivot product or target different segment (SME, not Mikro) |

---

## Reporting Cadence

### Monthly Check-In (Months 1-6)

**Metrics Dashboard:**
- Total users (Starter/Growth/Pro)
- DAU, WAU, MAU
- Paid conversion rate
- Top 5 used metrics
- NPS score
- Churn rate

**Compiled by:** Product Lead
**Reviewed with:** Stakeholders

### Final PMF Report (Month 6)

**Deliverable:**
- "Web Dashboard Lite PMF Validation - 6 Month Results"
- Go/No-Go recommendation for Full SaaS
- Top learnings for Full SaaS prioritization
- Pricing strategy for Full SaaS tiers

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/sales/pre-sale-validation-playbook|Pre-Sale Validation]]** - Week 0 validation strategy
- **[[products/03-web-dashboard-lite/marketing/10-validation-gtm-checklist|GTM Checklist]]** - Launch validation checklist
- **[[products/03-web-dashboard-lite/operations/07-metrics-tracking-sop|Metrics Tracking SOP]]** - Daily metrics monitoring
- **[[products/03-web-dashboard-lite/product-strategy/product-strategy|Product Strategy]]** - Product development gates

---

**Status:** Plan defined, ready for execution
**Owner:** [TBD]
**Last Updated:** December 25, 2025
