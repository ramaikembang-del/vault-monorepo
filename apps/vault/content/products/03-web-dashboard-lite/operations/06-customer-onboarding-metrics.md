# Customer Onboarding Metrics - E1 Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Last Updated:** 2025-12-28
**Version:** 1.0
**Purpose:** Track onboarding funnel performance and activation rates

---

## 1. Overview

### 1.1 Onboarding Importance

**Why Onboarding Matters:**
- **70% of churn** happens in the first 7 days (before users see value)
- **Activated users** (complete 1st CSV import) have **8Ã— higher retention** than non-activated
- **Time-to-value** (signup  ->  first insight) directly correlates with paid conversion rate

**Onboarding Goal:**
> Get users from "Account Created" to "Aha Moment" (first actionable insight) in <30 minutes

**Aha Moment Definition:**
- User imports 1st CSV
- Views dashboard with their own data
- Discovers 1 actionable insight (e.g., "Top product: Nasi Goreng generates 30% of revenue")

---

## 2. Onboarding Funnel

### 2.1 Funnel Stages

```
Landing Page  ->  Signup  ->  Email Verification  ->  App Install  ->  CSV Import  ->  Dashboard View  ->  Aha Moment  ->  Paid Conversion
```

**Detailed Breakdown:**

| Stage | Definition | Success Criteria | Target Conversion | Actual Conversion |
|-------|-----------|-----------------|-------------------|-------------------|
| **1. Landing Page Visit** | User visits e1-dashboard.com | Landed on homepage | 100% (baseline) | [100%] |
| **2. Signup Initiated** | Clicked "Sign Up" button | Clicked CTA | 15% | [XX%] |
| **3. Signup Completed** | Submitted email + password | Account created | 80% | [XX%] |
| **4. Email Verified** | Clicked verification link | Email confirmed | 85% | [XX%] |
| **5. App Downloaded** | Downloaded .exe/.dmg | File downloaded | 90% | [XX%] |
| **6. App Installed** | Installed on desktop | App launched | 95% | [XX%] |
| **7. Logged In** | First login to app | Authenticated | 95% | [XX%] |
| **8. CSV Imported** | Uploaded first CSV | Data imported | 70% | [XX%] |
| **9. Dashboard Viewed** | Viewed analytics | Engaged with UI | 95% | [XX%] |
| **10. Aha Moment** | Discovered insight | Clicked "Analytics" tab | 80% | [XX%] |
| **11. Return Day 2** | Came back next day | Logged in Day 2 | 50% | [XX%] |
| **12. Paid Conversion** | Upgraded to paid | Subscribed | 20% | [XX%] |

**Overall Funnel Conversion:**
- Landing Page  ->  Paid User: **Target 2%** (2 out of 100 visitors convert)
- Signup  ->  Paid User: **Target 20%** (20 out of 100 signups convert)

---

### 2.2 Time-to-Activation Metrics

**Target Times (Signup  ->  CSV Import):**
- **Excellent:** <30 minutes (same session)
- **Good:** 1-4 hours (within Day 1)
- **Acceptable:** 4-24 hours (Day 1)
- **At Risk:** 24-72 hours (Day 2-3)
- **Likely Churned:** >72 hours (Day 4+)

**Actual Distribution (Template):**

| Time Range | Users | % of Total | Cumulative | Paid Conversion Rate |
|-----------|-------|-----------|-----------|---------------------|
| **0-30 min** | [XX] | [XX%] | [XX%] | [XX%] (highest) |
| **30 min - 4 hours** | [XX] | [XX%] | [XX%] | [XX%] |
| **4-24 hours** | [XX] | [XX%] | [XX%] | [XX%] |
| **24-72 hours** | [XX] | [XX%] | [XX%] | [XX%] (lower) |
| **>72 hours** | [XX] | [XX%] | 100% | [XX%] (lowest) |
| **Never activated** | [XX] | [XX%] | - | 0% |

**Analysis:**
*"Users who import CSV within 30 minutes have [X]Ã— higher paid conversion rate than those who take 24+ hours. Goal: Increase % of users who activate within 30 minutes from [XX%] to [XX%]."*

---

## 3. Activation Metrics (Deep Dive)

### 3.1 CSV Import Activation

**Primary Activation Event:** First CSV import

**Target:** 70% of signups import at least 1 CSV within 7 days

**Actual Performance (Template):**

| Cohort | Signups | CSV Imports | Activation Rate | vs Target |
|--------|---------|------------|----------------|-----------|
| **Week 1** | [XXX] | [XXX] | [XX%] | [+/-XX%] |
| **Week 2** | [XXX] | [XXX] | [XX%] | [+/-XX%] |
| **Week 3** | [XXX] | [XXX] | [XX%] | [+/-XX%] |
| **Week 4** | [XXX] | [XXX] | [XX%] | [+/-XX%] |
| **Overall** | [XXX] | [XXX] | [XX%] | [+/-XX%] |

**Breakdown by POS Type:**

| POS System | Users | Activated | Activation Rate | Notes |
|-----------|-------|-----------|----------------|-------|
| **Moka** | [XX] | [XX] | [XX%] | [Easier/Harder to export CSV?] |
| **Qasir** | [XX] | [XX] | [XX%] | [Excel format confusion?] |
| **Pawoon** | [XX] | [XX] | [XX%] | [Date format issues?] |
| **BukuWarung** | [XX] | [XX] | [XX%] | [Simple CSV export] |
| **Other/Custom** | [XX] | [XX] | [XX%] | [Manual mapping required] |

**Analysis:**
*"Moka users have highest activation rate ([XX%]) due to clear export instructions. Qasir users struggle ([XX%]) because they export Excel (.xlsx), not CSV - need to clarify E1 accepts both formats in onboarding email."*

---

### 3.2 Secondary Activation Events

**Beyond First CSV Import:**

| Event | Definition | Target | Actual | Impact on Retention |
|-------|-----------|--------|--------|-------------------|
| **View Analytics Tab** | Clicked "Analytics" | 80% | [XX%] | [+XX% retention] |
| **View Products Tab** | Clicked "Products" | 70% | [XX%] | [+XX% retention] |
| **Export PDF Report** | Downloaded first PDF | 30% | [XX%] | [+XX% retention] |
| **Import 2nd CSV** | Uploaded 2+ CSVs | 50% | [XX%] | [+XX% retention] |
| **Enable Cloud Sync (Paid)** | Toggled sync on | 20% | [XX%] | [+XX% retention] |

**Analysis:**
*"Users who view Analytics tab within Day 1 have [X]Ã— higher 30-day retention. Goal: Add in-app tooltip 'Click Analytics to see growth trends' to drive engagement."*

---

## 4. Drop-off Analysis

### 4.1 Where Users Drop Off

**Funnel Drop-off by Stage:**

```
Landing Page (1,000 visitors)
  v  15% signup
Signup Started (150)
  v  20% abandon form  ->  [!] DROP-OFF #1
Signup Completed (120)
  v  15% never verify email  ->  [!] DROP-OFF #2
Email Verified (102)
  v  10% never download app  ->  [!] DROP-OFF #3
App Downloaded (92)
  v  5% never install
App Installed (87)
  v  35% never import CSV  ->  [!] DROP-OFF #4 (BIGGEST)
CSV Imported (57)
  v  5% never return Day 2
Return Day 2 (54)
  v  80% don't convert to paid
Paid User (11)
```

**Top 3 Drop-off Points:**

1. **Drop-off #4: Never Import CSV (35%)**
 - **Impact:** 35 users out of 100 never activate
 - **Root Cause:** [To be filled after launch]
 - CSV export instructions unclear?
 - Don't know where to get CSV from POS?
 - Too busy, plan to import later (but forget)?
 - **Fix:** Improve onboarding email sequence (see Section 6)

2. **Drop-off #1: Abandon Signup Form (20%)**
 - **Impact:** 20 users out of 100 start signup but don't finish
 - **Root Cause:**
 - Form too long? (5 fields: email, password, confirm password, business name, business type)
 - Email verification requirement off-putting?
 - Lost trust (privacy concerns)?
 - **Fix:** A/B test shorter signup form (3 fields: email, password, business name only)

3. **Drop-off #2: Never Verify Email (15%)**
 - **Impact:** 15 users out of 100 sign up but don't click verification link
 - **Root Cause:**
 - Email went to spam?
 - Email unclear (thought it's marketing, not verification)?
 - Forgot password, can't login to verify?
 - **Fix:**
 - Improve email subject line: "Verify your E1 account (last step!)"
 - Add "Resend verification email" button in app

---

### 4.2 Drop-off by User Segment

**By Business Size (Revenue):**

| Segment | Signups | Activation Rate | Paid Conversion | Notes |
|---------|---------|----------------|-----------------|-------|
| **Small (<Rp 20M/month)** | [XX] | [XX%] | [XX%] | [Lower activation - need simpler onboarding?] |
| **Medium (Rp 20-100M/month)** | [XX] | [XX%] | [XX%] | [Sweet spot - highest conversion] |
| **Large (>Rp 100M/month)** | [XX] | [XX%] | [XX%] | [Higher activation, but may churn to Power BI] |

**By POS Usage:**

| Segment | Signups | Activation Rate | Paid Conversion | Notes |
|---------|---------|----------------|-----------------|-------|
| **Use POS (Moka/Qasir/Pawoon)** | [XX] | [XX%] | [XX%] | [Have CSV ready - easier to activate] |
| **Use Manual Excel** | [XX] | [XX%] | [XX%] | [Need to create custom CSV - harder activation] |
| **No Current System** | [XX] | [XX%] | [XX%] | [Aspirational users - low activation] |

---

## 5. Onboarding Email Sequence Performance

### 5.1 Email Sequence (Current)

**Email Flow:**

| Day | Email | Goal | Open Rate | Click Rate | Activation Impact |
|-----|-------|------|-----------|-----------|------------------|
| **Day 0 (Signup)** | Welcome Email | Email verification | [XX%] | [XX%] | - |
| **Day 1** | "How to Import CSV" | Drive activation | [XX%] | [XX%] | [+XX%] |
| **Day 3** | "Discover Insights" | Showcase value | [XX%] | [XX%] | [+XX%] |
| **Day 5** | "Upgrade Before Data Expires" | Urgency | [XX%] | [XX%] | [+XX%] |
| **Day 7** | "Last Chance" | Final push | [XX%] | [XX%] | [+XX%] |

**Benchmark:**
- Industry avg email open rate: 20-25%
- Industry avg click rate: 2-5%
- E1 target: 30% open, 8% click (more engaged audience)

---

### 5.2 Email Performance by Cohort

**Day 1 Email: "How to Import CSV"**

| Week | Sent | Opened | Clicked | Imported CSV | Email  ->  Import Rate |
|------|------|--------|---------|-------------|---------------------|
| **Week 1** | [XXX] | [XXX] ([XX%]) | [XX] ([X%]) | [XX] | [XX%] |
| **Week 2** | [XXX] | [XXX] ([XX%]) | [XX] ([X%]) | [XX] | [XX%] |
| **Week 3** | [XXX] | [XXX] ([XX%]) | [XX] ([X%]) | [XX] | [XX%] |
| **Week 4** | [XXX] | [XXX] ([XX%]) | [XX] ([X%]) | [XX] | [XX%] |

**Analysis:**
*"Day 1 email drives [XX%] of activations. Users who click email link are [X]Ã— more likely to import CSV within 24 hours. Recommendation: Add video tutorial to Day 1 email (increase click rate from [XX%] to [XX%])."*

---

## 6. Onboarding Improvements (Roadmap)

### 6.1 Quick Wins (Week 5)

**1. Add Video Tutorial to Day 1 Email**
- **Goal:** Increase email click rate from [XX%] to [XX%]
- **Implementation:** Embed 90-second video: "How to Import Your First CSV"
- **Expected Impact:** +10% activation rate

**2. Simplify Signup Form (A/B Test)**
- **Current:** 5 fields (email, password, confirm password, business name, business type)
- **Variant:** 3 fields (email, password, business name)
- **Hypothesis:** Shorter form reduces 20% signup abandonment to 10%

**3. Resend Verification Email Button**
- **Problem:** 15% of signups don't verify email
- **Fix:** Add "Resend verification email" button in app login screen
- **Expected Impact:** Reduce drop-off from 15% to 8%

---

### 6.2 Medium-term Improvements (Month 2-3)

**4. In-App Onboarding Checklist**
- **Implementation:**
 ```
 [ ] Import your first CSV (1/5)
 [ ] View Analytics tab (2/5)
 [ ] Check top products (3/5)
 [ ] Export PDF report (4/5)
 [ ] Upgrade to Pro (5/5)
 ```
- **Goal:** Gamify onboarding  ->  increase activation from 70% to 80%

**5. Personalized Onboarding Emails (Based on POS)**
- **Current:** Generic email for all users
- **Improved:**
 - Moka users: "How to Export CSV from Moka POS" (with Moka-specific screenshots)
 - Qasir users: "How to Export from Qasir" (clarify Excel .xlsx is supported)
 - Pawoon users: "How to Export from Pawoon"
- **Expected Impact:** +15% activation (reduce POS-specific confusion)

**6. Free Tier Extension (7  ->  14 Days)**
- **Rationale:** 30% of users activate on Day 3-7 (after initial hesitation)
- **Implementation:** Extend free tier data retention from 7 days to 14 days
- **Expected Impact:** +8% paid conversion (users have more time to see value)

---

### 6.3 Long-term Improvements (Q2 2025+)

**7. Auto-sync via POS APIs (Eliminate CSV Import)**
- **Problem:** CSV import is #1 activation blocker (35% never import)
- **Solution:** Connect directly to Moka/Qasir/Pawoon APIs  ->  auto-import daily
- **Expected Impact:** Activation rate from 70% to 90%+ (remove friction)
- **Timeline:** Q2 2025 (requires backend development + POS partnerships)

**8. Mobile Onboarding (Progressive Web App)**
- **Problem:** Some users sign up on mobile (20%) but can't install desktop app
- **Solution:** Build mobile-friendly PWA for initial onboarding
- **Expected Impact:** +10% activation (mobile users currently 0% activation)
- **Timeline:** Q3 2025

---

## 7. Cohort Retention Analysis

### 7.1 Retention by Activation Time

**Hypothesis:** Users who activate faster have higher retention

| Activation Time | Users | 7-Day Retention | 30-Day Retention | 90-Day Retention |
|----------------|-------|-----------------|------------------|------------------|
| **<30 min** | [XX] | [XX%] | [XX%] | [XX%] |
| **30 min - 4 hours** | [XX] | [XX%] | [XX%] | [XX%] |
| **4-24 hours** | [XX] | [XX%] | [XX%] | [XX%] |
| **24-72 hours** | [XX] | [XX%] | [XX%] | [XX%] |
| **>72 hours** | [XX] | [XX%] | [XX%] | [XX%] |

**Analysis:**
*"Users who activate within 30 minutes have [X]Ã— higher 30-day retention than those who take 24+ hours. This validates our focus on reducing time-to-activation."*

---

### 7.2 Paid Conversion by Onboarding Completeness

**Onboarding Completeness Score:**
- Import CSV: 30 points
- View Analytics: 20 points
- View Products: 20 points
- Export PDF: 15 points
- Enable Cloud Sync: 15 points
- **Total:** 100 points

| Score Range | Users | Paid Conversion Rate | Insights |
|------------|-------|---------------------|----------|
| **80-100 (Power Users)** | [XX] | [XX%] | [Highest conversion - engaged users] |
| **50-79 (Moderate)** | [XX] | [XX%] | [Moderate conversion] |
| **30-49 (Basic)** | [XX] | [XX%] | [Low conversion - only imported CSV] |
| **0-29 (Inactive)** | [XX] | [0%] | [Never activated - churned] |

**Analysis:**
*"Users who complete 80%+ of onboarding checklist have [X]Ã— higher paid conversion rate. Goal: Increase % of users reaching 80+ score from [XX%] to [XX%]."*

---

## 8. Segmentation Insights

### 8.1 High-Intent Users (High Activation, High Conversion)

**Profile:**
- Import CSV within 30 minutes
- View Analytics + Products tab within Day 1
- Export PDF report within Week 1
- Return 3+ days in Week 1
- **Paid conversion rate:** [XX%] (3-5Ã— average)

**Acquisition Source:**
- [XX%] from organic search (high intent, searched for "analytics for F&B")
- [XX%] from partner referrals (trusted recommendation)
- [XX%] from word-of-mouth

**Action:**
- Identify high-intent signals (e.g., signup from organic search)
- Trigger VIP onboarding email sequence (white-glove support offer)
- Sales team outreach (personalized demo, custom pricing)

---

### 8.2 Low-Intent Users (Low Activation, Low Conversion)

**Profile:**
- Never import CSV, or import after 7+ days
- Only viewed dashboard once
- Never returned Day 2
- **Paid conversion rate:** [XX%] (0-2%)

**Acquisition Source:**
- [XX%] from broad Facebook Ads (low targeting, "small business owners")
- [XX%] from discount-seeking communities (found E1 via "free tools" list)

**Action:**
- Improve ad targeting (exclude discount-seekers)
- Add qualification questions in signup form (e.g., "Do you currently use a POS system?")
- Deprioritize these users in support queue (focus on high-intent)

---

## 9. Benchmarks and Goals

### 9.1 Industry Benchmarks (SaaS)

| Metric | Industry Avg (SaaS) | E1 Target | E1 Actual | Status |
|--------|---------------------|-----------|-----------|--------|
| **Signup Conversion** | 2-5% | 15% | [XX%] | [[x]/[x]] |
| **Email Verification** | 60-80% | 85% | [XX%] | [[x]/[x]] |
| **Activation Rate (7 days)** | 40-60% | 70% | [XX%] | [[x]/[x]] |
| **Time-to-Activation** | 3-5 days | <24 hours | [X days] | [[x]/[x]] |
| **Free-to-Paid Conversion** | 2-5% | 20% | [XX%] | [[x]/[x]] |

---

### 9.2 Monthly Goals (Targets)

**Month 1 (Launch):**
- Signups: 300
- Activation Rate: 65-70%
- Time-to-Activation (median): <48 hours
- Paid Conversion: 18-20%

**Month 2 (Iterate):**
- Signups: 400
- Activation Rate: 73-75% (+5%)
- Time-to-Activation (median): <24 hours
- Paid Conversion: 22-25%

**Month 3 (Scale):**
- Signups: 500
- Activation Rate: 78-80%
- Time-to-Activation (median): <12 hours
- Paid Conversion: 25-28%

---

## 10. Tracking Implementation

### 10.1 Analytics Events (Track in Mixpanel/Amplitude)

**User Actions to Track:**

```javascript
// Signup
analytics.track('Signup Initiated');
analytics.track('Signup Completed', { email, businessName, businessType });
analytics.track('Email Verified');

// App Install
analytics.track('App Downloaded', { platform: 'Windows/Mac' });
analytics.track('App Installed');
analytics.track('First Login');

// Activation
analytics.track('CSV Import Started', { posSystem: 'Moka/Qasir/Pawoon' });
analytics.track('CSV Import Succeeded', { rowCount, posSystem });
analytics.track('CSV Import Failed', { error, posSystem });

// Engagement
analytics.track('Dashboard Viewed');
analytics.track('Analytics Tab Viewed');
analytics.track('Products Tab Viewed');
analytics.track('PDF Exported');

// Aha Moment
analytics.track('Aha Moment', { insight: 'Top product: Nasi Goreng' });

// Retention
analytics.track('Day 2 Return');
analytics.track('Day 7 Return');

// Conversion
analytics.track('Upgrade Clicked', { tier: 'Starter/Pro' });
analytics.track('Payment Succeeded', { tier, amount });
```

---

### 10.2 Dashboard Metrics (Weekly Review)

**Onboarding Funnel Dashboard:**

```
|------------------------------------------------------+
| WEEK 4 ONBOARDING METRICS |
|------------------------------------------------------|
| Signups: 300 (vs target: 300) [x] |
| Activation Rate: 68% (vs target: 70%) [!] |
| Median TTA: 36h (vs target: <48h) [x] |
| Paid Conversion: 18% (vs target: 20%) [!] |
|------------------------------------------------------|
| DROP-OFF POINTS: |
| [x] CSV Import: 32% (target: <30%) |
| [!] Email Verify: 14% (target: <15%) |
| [x] Signup Form: 8% (target: <20%) |
|------------------------------------------------------|
| TOP PRIORITY FIXES: |
| 1. Add CSV import video to Day 1 email |
| 2. Improve Qasir CSV instructions (Excel -> CSV) |
| 3. A/B test shorter signup form (5 -> 3 fields) |
|-------------------------------------------------------
```

---

**Document ID:** E1-ONBOARDING-METRICS-v1.0
**Last Updated:** 2025-12-28
**Owner:** Product Team (Growth)
**Next Review:** Weekly (every Monday)

**Related Documents:**
- [[10-post-launch-review|Post-Launch Review]] - Overall launch performance
- [[09-support-ticket-analysis|Support Ticket Analysis]] - Onboarding friction points

