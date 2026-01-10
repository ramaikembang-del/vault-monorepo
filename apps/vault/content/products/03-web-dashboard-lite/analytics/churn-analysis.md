# Churn Analysis - E1 Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Last Updated:** 2025-12-28
**Version:** 1.0
**Purpose:** Analyze churn patterns, identify root causes, and implement retention strategies

---

## 1. Executive Summary

**Churn Definition:**
> A user "churns" when they cancel their paid subscription or stop using E1 (free/paid) for 30+ consecutive days.

**Current Churn Rate (Month 1 Baseline):**
- **Free Tier Churn:** [XX%] monthly (users who sign up but never activate)
- **Paid Tier Churn:** [XX%] monthly (users who cancel subscription)
- **Target Churn:** <6% monthly (industry best-practice for SaaS)

**Top 3 Churn Reasons:**
1. [Reason 1: e.g., "Too expensive"] - [XX%] of churned users
2. [Reason 2: e.g., "Didn't see value"] - [XX%] of churned users
3. [Reason 3: e.g., "Switched to competitor"] - [XX%] of churned users

**Key Insights:**
- [Insight 1: e.g., "80% of churn happens in first 30 days (onboarding critical)"]
- [Insight 2: e.g., "Users who import <3 CSVs in Week 1 have 5Ã— higher churn"]
- [Insight 3: e.g., "Discount users churn 2Ã— more than full-price users"]

---

## 2. Churn Metrics Overview

### 2.1 Cohort Retention Curves

**Monthly Retention by Signup Cohort:**

| Cohort | Month 0 | Month 1 | Month 2 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|---------|---------|----------|
| **Jan 2025** | 100% | [XX%] | [XX%] | [XX%] | [XX%] | [XX%] |
| **Feb 2025** | 100% | [XX%] | [XX%] | - | - | - |
| **Mar 2025** | 100% | [XX%] | - | - | - | - |

**Target Retention:**
- Month 1: 85% (15% churn)
- Month 3: 75% (25% cumulative churn)
- Month 6: 70% (30% cumulative churn)
- Month 12: 65% (35% cumulative churn)

**Visualization:**
```
Retention Curve (Jan 2025 Cohort)

100% |-
 | ╲
 80% | ------
 | ╲
 60% | -----------
 |
 40% |
 |
 20% |
 |
 0% |----------------------------
 M0 M1 M2 M3 M6 M12
```

---

### 2.2 Churn Rate by Tier

| Tier | Monthly Churn | Annual Churn | LTV Impact |
|------|--------------|-------------|-----------|
| **Free** | [XX%] | N/A | Rp 0 (no revenue) |
| **Starter** | [XX%] | [XX%] | Rp [X]M lost/year |
| **Pro** | [XX%] | [XX%] | Rp [X]M lost/year |

**Analysis:**
*"Pro tier has lower churn ([XX%]) than Starter ([XX%]) because Pro users are more invested (higher price = higher commitment + more features)."*

---

### 2.3 Churn by User Segment

| Segment | Churn Rate | Sample Size | Insight |
|---------|-----------|-------------|---------|
| **By Revenue:**
| Small (<Rp 20M/mo) | [XX%] | [XXX] | [Higher churn - less need for analytics?] |
| Medium (Rp 20-100M/mo) | [XX%] | [XXX] | [Sweet spot - lowest churn] |
| Large (>Rp 100M/mo) | [XX%] | [XX] | [Higher churn - upgrade to Power BI?] |
| **By POS System:**
| Moka users | [XX%] | [XXX] | [Lower churn - good fit] |
| Qasir users | [XX%] | [XXX] | [Higher churn - CSV issues?] |
| Custom/Manual | [XX%] | [XX] | [Highest churn - too manual] |
| **By Activation:**
| Imported 1 CSV | [XX%] | [XXX] | [High churn - didn't see value] |
| Imported 3+ CSVs | [XX%] | [XXX] | [Low churn - engaged users] |

---

## 3. Churn Cohort Analysis

### 3.1 Early Churn (Day 1-30)

**Definition:** Users who cancel subscription or stop using within first 30 days

**Churn Rate:** [XX%] of new users churn in first 30 days

**Root Causes:**

| Reason | % of Early Churners | Preventable? | Fix |
|--------|-------------------|--------------|-----|
| **Never activated (no CSV import)** | [XX%] | [x] Yes | Improve onboarding (video tutorials) |
| **Imported 1 CSV, never returned** | [XX%] | [x] Yes | Send "aha moment" email (insights) |
| **Confused by UI/UX** | [XX%] | [x] Yes | Simplify dashboard, add tooltips |
| **Price objection ("too expensive")** | [XX%] | [!] Maybe | Offer discount, show ROI calculator |
| **Needed feature we lack (e.g., inventory)** | [XX%] |  Future | Add to roadmap (Q3 2025) |
| **Business closed (external factor)** | [X%] | [x] No | Accept as unavoidable |

**Analysis:**
*"[XX%] of early churn is preventable (activation issues, UX confusion). Focus on onboarding improvements to reduce early churn from [XX%] to [XX%]."*

---

### 3.2 Mid-Term Churn (Month 2-6)

**Definition:** Users who churned after 1+ months of usage

**Churn Rate:** [XX%] of users who survived Month 1 churn in Months 2-6

**Root Causes:**

| Reason | % of Mid-Term Churners | Preventable? | Fix |
|--------|----------------------|--------------|-----|
| **Switched to competitor (Moka Analytics)** | [XX%] | [x] Yes | Add auto-sync feature (Q2 2025) |
| **Not enough value (unused features)** | [XX%] | [x] Yes | Educate users on advanced features |
| **Pricing (downgrade to Free)** | [XX%] | [!] Maybe | Introduce mid-tier (Rp 150K?) |
| **Manual CSV import too tedious** | [XX%] | [x] Yes | Auto-sync via POS API (Q2 2025) |
| **Business pivot (changed POS)** | [X%] | [!] Maybe | Emphasize multi-POS support |

**Analysis:**
*"Mid-term churn driven by competitor switching ([XX%]) and CSV import friction ([XX%]). Auto-sync feature (Q2 2025) should reduce mid-term churn by 30%."*

---

### 3.3 Late Churn (Month 6+)

**Definition:** Loyal users who churned after 6+ months

**Churn Rate:** [XX%] of Month 6 users churn per month

**Root Causes:**

| Reason | % of Late Churners | Preventable? |
|--------|-------------------|--------------|
| **Business closed (permanent)** | [XX%] | [x] No |
| **Budget cuts (economic downturn)** | [XX%] | [!] Maybe (offer pause subscription) |
| **Outgrew E1 (need enterprise BI)** | [XX%] | [x] Yes (upsell to Enterprise tier) |
| **Switched to cheaper alternative** | [X%] | [!] Maybe (price competition) |

**Analysis:**
*"Late churn mostly external factors ([XX%] business closures). Acceptable baseline. Focus retention efforts on early/mid-term churn (bigger impact)."*

---

## 4. Churn Prediction Model

### 4.1 Churn Risk Scoring

**Predictive Signals (Behavioral Red Flags):**

| Signal | Churn Risk Multiplier | Action |
|--------|----------------------|--------|
| **User logged in 0 times in past 7 days** | 5Ã— | Send re-engagement email |
| **User imported only 1 CSV in first 30 days** | 4Ã— | Send "import your 2nd CSV" email |
| **User never viewed Analytics tab** | 3Ã— | Send feature discovery email |
| **User downgraded from Pro to Starter** | 3Ã— | Sales outreach (save the account) |
| **User contacted support with complaint** | 2.5Ã— | Follow-up email (resolve issue) |
| **User's free trial expires in 3 days** | 2Ã— | Send upgrade reminder (with discount) |

**Churn Risk Score Formula:**
```
Churn Risk Score = (Days Since Last Login Ã— 0.5) +
 (Days Since Last CSV Import Ã— 1.0) +
 (Support Tickets Ã— 10) -
 (Total CSV Imports Ã— 5)
```

**Risk Levels:**
- **Low Risk (Score <20):** Healthy user, maintain current engagement
- **Medium Risk (Score 20-50):** At risk, send re-engagement campaign
- **High Risk (Score >50):** Likely to churn, urgent intervention (sales outreach, discount offer)

---

### 4.2 Churn Prevention Playbook

**For High-Risk Users (Score >50):**

**Week 1:**
- [x] Automated email: "We noticed you haven't logged in for 14 days. Need help?"
- [x] Offer: Free 30-minute onboarding call (white-glove support)

**Week 2:**
- [x] Personalized email from CEO: "What can we do better?"
- [x] Offer: 50% discount for 3 months (win-back offer)

**Week 3:**
- [x] If still no response: Trigger "exit survey" (understand why they left)

**Week 4:**
- [x] User marked as churned (no further action)

---

## 5. Churn Reasons (Exit Survey Data)

### 5.1 Voluntary Churn (User Cancels Subscription)

**Exit Survey Question:** "Why are you canceling E1?"

| Reason | Count | % of Total | Preventable? | Fix |
|--------|-------|-----------|--------------|-----|
| **Too expensive** | [XX] | [XX%] | [!] Maybe | Offer discount, show ROI |
| **Didn't see value / Not using** | [XX] | [XX%] | [x] Yes | Improve onboarding, feature education |
| **Switched to competitor (Moka)** | [XX] | [XX%] | [x] Yes | Add auto-sync, competitive features |
| **Missing features (e.g., inventory)** | [XX] | [XX%] |  Future | Fast-track roadmap (Q3 2025) |
| **Too complicated to use** | [XX] | [XX%] | [x] Yes | Simplify UX, add tooltips |
| **Business closed** | [XX] | [XX%] | [x] No | Unavoidable |
| **CSV import too tedious** | [XX] | [XX%] | [x] Yes | Auto-sync (Q2 2025) |
| **Other** | [X] | [X%] | - | - |

**Analysis:**
*"[XX%] of churn is preventable (pricing, value, features, UX). Top priority: Improve onboarding ([XX%] didn't see value) and add auto-sync ([XX%] complained about CSV import)."*

---

### 5.2 Involuntary Churn (Payment Failed)

**Definition:** User's credit card declined, couldn't charge subscription

**Involuntary Churn Rate:** [XX%] of total churn

**Root Causes:**
- **Expired credit card:** [XX%]
- **Insufficient funds:** [XX%]
- **Card blocked (fraud alert):** [X%]
- **Changed bank account:** [X%]

**Prevention:**
- [x] **Dunning emails:** Remind user to update payment method (3 attempts over 7 days)
- [x] **Retry logic:** Auto-retry failed payment 3Ã— (Day 1, Day 3, Day 7)
- [x] **Payment method flexibility:** Support multiple payment methods (credit card, bank transfer, e-wallet)

**Recovery Rate:**
- **Target:** Recover 50% of involuntary churn (via dunning emails + retries)

---

## 6. Retention Strategies

### 6.1 Onboarding Optimization (Reduce Early Churn)

**Goal:** Reduce Month 1 churn from [XX%] to [XX%]

**Tactics:**

**1. Improve Activation Rate (CSV Import):**
- Add video tutorial to Day 1 email (tested in A/B Test #5)
- In-app onboarding checklist (gamification)
- Personalized CSV export instructions by POS (Moka, Qasir, Pawoon)

**Expected Impact:** +15% activation rate  ->  -20% early churn

**2. Deliver "Aha Moment" Faster:**
- Day 1 email: "Your top product is [X] (30% of revenue)" (personalized insight)
- Day 3 email: Case study (Bu Siti saved Rp 800K using E1)
- Day 5 email: "Your sales are up 10% this week!" (growth insight)

**Expected Impact:** Users who see personalized insight have -30% churn

**3. Reduce Time-to-Value:**
- Target: <30 minutes from signup to first dashboard view
- Current: [XX minutes] avg time-to-activation
- Improvement: Pre-fill sample data (demo mode) so users see dashboard immediately

---

### 6.2 Feature Engagement (Reduce Mid-Term Churn)

**Goal:** Keep users engaged with E1's full feature set (not just basic dashboard)

**Tactics:**

**1. Feature Discovery Emails (Monthly):**
- Month 1: "Did you know E1 has growth metrics (DoD/WoW/MoM)?"
- Month 2: "Export your data to PDF reports"
- Month 3: "Enable cloud sync (never lose your data)"

**Expected Impact:** Users who use 3+ features have -40% churn

**2. In-App Feature Prompts:**
- If user never clicked "Analytics" tab  ->  Show tooltip: "Click here to see growth trends"
- If user never exported PDF  ->  Banner: "Share your monthly report with partners (Export PDF)"

**Expected Impact:** +20% feature engagement  ->  -15% churn

---

### 6.3 Pricing Flexibility (Reduce Price-Driven Churn)

**Goal:** Offer flexible pricing for price-sensitive users (vs losing them entirely)

**Tactics:**

**1. Annual Discount (10% off):**
- Rp 2,400K/year  ->  Rp 2,160K/year (save Rp 240K)
- Locks users in for 12 months (reduces churn risk)

**Expected Impact:** 30% of users choose annual plan  ->  -50% churn (vs monthly)

**2. "Pause Subscription" (Seasonal Businesses):**
- Some F&B businesses seasonal (e.g., Bali cafes slow in rainy season)
- Allow users to pause subscription for 1-3 months (no charge, data retained)
- Alternative: Downgrade to Free (7 days data) instead of canceling

**Expected Impact:** Retain 20% of "business slow" churners

**3. Downgrade Option (Pro  ->  Starter):**
- Allow users to downgrade mid-subscription (vs canceling entirely)
- Retain Rp 200K MRR vs losing Rp 300K MRR

---

### 6.4 Win-Back Campaigns (Re-Activate Churned Users)

**Goal:** Recover 10% of churned users within 90 days

**Tactics:**

**1. Exit Survey + Incentive:**
- When user cancels: "Tell us why you're leaving (get Rp 50K discount code)"
- Collect feedback + offer win-back discount

**Expected Response:** 30% of churners complete survey

**2. Win-Back Email Sequence (90 Days After Churn):**

**Day 30:** "We've improved E1 based on your feedback. Come back?"
**Day 60:** "Special offer: 50% off for 3 months (Rp 100K/month Starter)"
**Day 90:** "Last chance: Your data is still here. Reactivate now?"

**Expected Win-Back Rate:** 10% of churned users return

---

## 7. Churn Benchmarks and Goals

### 7.1 Industry Benchmarks (SaaS)

| Metric | Industry Avg (SaaS) | E1 Target | E1 Actual (Month 1) |
|--------|---------------------|-----------|---------------------|
| **Monthly Churn (Paid)** | 5-7% | <6% | [XX%] |
| **Annual Churn (Paid)** | 40-50% | <35% | [XX% projected] |
| **Free Tier Activation** | 40-60% | 70% | [XX%] |
| **Month 1 Retention** | 70-80% | 85% | [XX%] |

---

### 7.2 Monthly Churn Goals

**Month 1 (Baseline):**
- Paid Churn: [XX%] (measure and understand)
- Free Churn: [XX%] (mostly non-activated users)

**Month 3 (Post-Optimization):**
- Paid Churn: [XX%] (-20% from Month 1)
- Free Churn: [XX%] (-30% from Month 1)

**Month 6 (Sustained Improvement):**
- Paid Churn: <6% (industry best-practice)
- Free Churn: <40% (acceptable for freemium)

---

## 8. Churn Impact on Business

### 8.1 Revenue Impact (LTV Calculation)

**Lost Revenue from Churn:**

```
Starter Tier:
- Monthly Churn: [XX%]
- Avg Subscriber Count: [XXX users]
- Churned Users/Month: [XX users]
- Lost MRR: [XX users] Ã— Rp 200K = Rp [X]M

Pro Tier:
- Monthly Churn: [XX%]
- Avg Subscriber Count: [XX users]
- Churned Users/Month: [X users]
- Lost MRR: [X users] Ã— Rp 300K = Rp [X]M

Total Lost MRR: Rp [XX]M/month
```

**Annual Impact:**
- Lost MRR Ã— 12 = Rp [XXX]M/year

**LTV Impact:**
- If churn reduced from [XX%] to 6%:
 - LTV increases from Rp [X]M to Rp [X]M (+[XX%])
 - CAC payback period reduces from [X] months to [X] months

---

### 8.2 Churn Reduction ROI

**Investment in Retention:**
- Onboarding improvements: Rp 50M (video tutorials, in-app checklist)
- Auto-sync development: Rp 200M (POS API integrations)
- Feature engagement campaigns: Rp 20M (email automation, in-app prompts)
- **Total:** Rp 270M

**Expected Return:**
- Churn reduction: [XX%]  ->  6% (-[XX%])
- Retained MRR: Rp [XX]M/year
- **ROI:** Rp [XX]M / Rp 270M = [X.XÃ—] return

---

## 9. Action Plan (Q1 2025)

### 9.1 Immediate Actions (Week 1-4)

**Priority 1: Reduce Early Churn (Month 1)**
- [x] Implement video tutorial in Day 1 email (A/B Test #5)
- [x] Add in-app onboarding checklist (gamification)
- [x] Send personalized insight email (Day 1: "Your top product is [X]")

**Priority 2: Reduce Involuntary Churn**
- [x] Implement dunning emails (3 attempts over 7 days)
- [x] Auto-retry failed payments (Day 1, 3, 7)

**Priority 3: Monitor Churn Metrics**
- [x] Build churn dashboard (Mixpanel/Amplitude)
- [x] Implement exit survey (collect churn reasons)

---

### 9.2 Medium-Term Actions (Month 2-3)

**Priority 1: Feature Engagement**
- [x] Launch monthly feature discovery emails
- [x] Add in-app feature prompts (tooltips)

**Priority 2: Pricing Flexibility**
- [x] Launch annual discount (10% off)
- [x] Add "Pause Subscription" option

**Priority 3: Win-Back Campaigns**
- [x] Implement 90-day win-back email sequence
- [x] Offer 50% discount to churned users

---

## 10. Monitoring and Reporting

### 10.1 Churn Dashboard (Weekly Review)

```
|----------------------------------------------------------+
| WEEK 4 CHURN METRICS |
|----------------------------------------------------------|
| Paid Churn (Month 1): [XX%] (vs [XX%] target) [!] |
| Free Churn (7 days): [XX%] (vs [XX%] target) [x] |
| Involuntary Churn: [X%] (vs <3% target) [x] |
|----------------------------------------------------------|
| TOP CHURN REASONS: |
| 1. "Too expensive" [XX%] |
| 2. "Didn't see value" [XX%] |
| 3. "Switched to Moka" [XX%] |
|----------------------------------------------------------|
| ACTIONS: |
| [x] Launched video tutorial (reduce "didn't see value") |
| Developing auto-sync (reduce "switched to Moka") |
| Test pricing discount (reduce "too expensive") |
|-----------------------------------------------------------
```

---

### 10.2 Monthly Churn Review

**Review Questions:**
1. What was this month's churn rate (paid/free)?
2. Which cohort had highest churn (early/mid/late)?
3. What were top 3 churn reasons (exit survey data)?
4. What retention tactics were tested (results)?
5. What should we prioritize next month?

---

**Document ID:** E1-CHURN-ANALYSIS-v1.0
**Last Updated:** 2025-12-28
**Owner:** Product Team (Retention)
**Next Review:** Monthly (first Monday of each month)

**Related Documents:**
- [[products/03-web-dashboard-lite/operations/06-customer-onboarding-metrics|Customer Onboarding Metrics]] - Activation data
- [[products/03-web-dashboard-lite/analytics/conversion-funnel-optimization|Conversion Funnel Optimization]] - Retention A/B tests
- [[products/03-web-dashboard-lite/operations/10-post-launch-review|Post-Launch Review]] - Overall metrics
