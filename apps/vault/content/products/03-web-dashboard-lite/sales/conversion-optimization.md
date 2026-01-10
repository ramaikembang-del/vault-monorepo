# Conversion Optimization - Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Goal:** Convert 5-10% of Free Users to Paid (Starter/Pro)
**Target:** Month 2+ (after PMF validation in Month 1)

---

## Freemium Conversion Funnel

```
Free User (1,000 target Month 6)
  v  (70% activation)
Active Free User (700)
  v  (60% weekly engagement)
Engaged Free User (420)
  v  (10% paid conversion)
Paid User (42) = Rp 11.3M MRR
```

**Benchmarks:**
- Activation (download  ->  first dashboard view): 70%+
- Weekly engagement: 60%+ (3+ logins/week)
- **Paid conversion: 5-10%** (primary goal)
- Month 1 paid churn: <20%

---

## Conversion Triggers (Free  ->  Paid)

### Trigger 1: Daily Usage Pattern (High Intent)

**Signal:** User logs in 7+ days/week for 2+ weeks

**Why It Predicts Conversion:**
- Daily usage = core to workflow
- 2+ weeks = habit formed
- Power user ready for more features

**In-App Prompt:**
```
 14-Day Daily Streak!

You're using Dashboard Lite more than 90% of users.

Ready for more insights?

Starter Tier (Rp 200K/month):
[x] 15 metrics (vs 6 free)
[x] Customer loyalty tracking
[x] Cloud sync (access anywhere)
[x] Email weekly digest

[UPGRADE TO STARTER] [STAY FREE]
```

**Conversion Rate:** 15-20% of daily users upgrade

---

### Trigger 2: Feature Gate Encounter (3+ Clicks)

**Signal:** User clicks locked feature 3+ times in 1 week

**Common Locked Features:**
- Customer Loyalty (Patronage Ladder)
- Advanced Staff Analytics (coaching insights)
- Industry Benchmarks

**In-App Modal (After 3rd Click):**
```
You Keep Clicking "Customer Loyalty"

This feature helps you:
- Identify VIP customers (top 20% revenue)
- Track patron ladder (First-timer  ->  VIP)
- Prevent churn (lapsed customer alerts)

Unlock in Starter tier: Rp 200K/month

ROI: Retain 1 VIP/month (Rp 500K value) = 2.5Ã— return

[UNLOCK CUSTOMER LOYALTY] [MAYBE LATER]
```

**Conversion Rate:** 25% of repeat feature clickers upgrade

---

### Trigger 3: Health Score Consistently Red (<50)

**Signal:** Health Score in red zone (0-49) for 7+ days

**Why It Predicts Conversion:**
- User is struggling (desperate for help)
- Free tier shows problem, paid shows solution
- Willing to pay to fix business issues

**Email (Day 8 of Red Health Score):**
```
Subject: Your Health Score Has Been Red for a Week - Let's Fix It

Hi [Name],

Your Health Score has been 40-48 for 7 days.

This usually means:
- Food cost too high (>35% of revenue)
- Revenue declining week-over-week
- Staff performance issues

Pro Tier (Rp 350K/month) adds:
[x] Root cause analyzer (What's broken?)
[x] Action recommendations (Do X to improve Y)
[x] Benchmark comparison (Are you worse than peers?)

You're struggling. We can help.

[TRY PRO FREE - 30 Days]  ->  No credit card required

Not ready? Stay free - no pressure. But health score doesn't lie.

Best,
PWBI Support
```

**Conversion Rate:** 10% of struggling users upgrade (desperation factor)

---

### Trigger 4: Data Volume Limit (90-Day Cap)

**Signal:** User reaches 85 days of data (approaching 90-day free limit)

**Email:**
```
Subject: Your Data Archive Hits 85 Days - Upgrade to Keep History

Hi [Name],

Free tier keeps 90 days of data (auto-deletes older).

You're at 85 days. In 5 days, Jan data will be deleted.

Starter Tier (Rp 200K/month):
[x] 180-day data retention (vs 90 days)

Pro Tier (Rp 350K/month):
[x] Unlimited data retention (never lose history)

Historical data = see trends, compare year-over-year.

Unlock: [UPGRADE TO STARTER] [UPGRADE TO PRO]

Keep free? Data from Jan will auto-delete in 5 days (warning only, no pressure).

Best,
PWBI Team
```

**Conversion Rate:** 8% upgrade to avoid losing data

---

### Trigger 5: CSV Upload Frustration (5+ Failed Imports)

**Signal:** User tries CSV import 5+ times, multiple failures

**Why It Predicts Conversion:**
- CSV manual import is painful
- Cloud sync = easier (auto-import from POS API)
- Frustration  ->  willing to pay for ease

**In-App Message:**
```
CSV Import Failed Again?

We see you've tried 5 times this week.

Starter Tier (Rp 200K/month) includes:
[x] Cloud sync (auto-import from Moka/Pawoon API)
[x] No manual CSV uploads
[x] Daily auto-refresh (set it once, forget it)

Save 10 min/day = 5 hours/month = Worth Rp 500K of your time.

[ENABLE AUTO-IMPORT - Rp 200K/month]
```

**Conversion Rate:** 12% of frustrated users upgrade

---

## Pricing Psychology Tactics

### Tactic 1: Anchoring (Show Enterprise Price First)

**Pricing Page Layout:**
```
[Enterprise (C4) - Rp 8M/month]
  v  (Way too expensive, anchor high)
[Full SaaS Advanced (C3) - Rp 2.5M/month]
  v 
[Full SaaS Pro (C2) - Rp 1M/month]
  v 
[Full SaaS Basic (C1) - Rp 400K/month]
  v 
[E1 Pro - Rp 350K/month]  -> Looks CHEAP now
[E1 Starter - Rp 200K/month]  -> "Great deal!"
[E1 Free - Rp 0]  -> Still available
```

**Psychology:** Rp 350K feels cheap after seeing Rp 8M

---

### Tactic 2: Loss Aversion (Show What They'll Lose)

**Message When Downgrading Free  ->  Starter:**
```
Switching to Free Tier?

You'll lose:
[x] 9 metrics (Customer Loyalty, Advanced Staff, Cash Flow)
[x] Cloud sync (back to manual CSV)
[x] 90 days of data (deleted immediately)
[x] Email weekly digest

Keep Starter: Rp 200K/month

[KEEP STARTER] [Proceed to Free]
```

**Psychology:** Fear of losing features > desire to save Rp 200K

---

### Tactic 3: Social Proof (Peer Comparison)

**In-App Banner:**
```
85% of users with your usage pattern (7+ days/week) are on Starter or Pro.

You're in top 10% of power users, but still on Free tier.

Missing insights your peers have:
- Customer loyalty tracking
- Advanced staff coaching
- Industry benchmarks

[SEE WHAT PEERS USE]
```

**Psychology:** Fear of missing out (FOMO) + social proof

---

### Tactic 4: Commitment Device (Public Goal)

**Onboarding Question (Day 1):**
```
What's your 3-month goal?

[ ] Increase revenue 20%
[ ] Reduce food cost 5%
[ ] Improve staff performance
[ ] Open 2nd location

[SET GOAL]

 ->  Track goal progress in dashboard
 ->  Month 2: "You're 60% to goal. Upgrade to Pro for detailed action plan?"
```

**Psychology:** Commitment to goal  ->  willing to pay to achieve it

---

## A/B Test Experiments

### Test 1: Free Trial Duration

**Hypothesis:** 60-day trial converts better than 30-day

**Control:** "30-day free trial, then Rp 200K/month"
**Variant:** "First 2 months free, then Rp 200K/month"

**Track:**
- Trial start rate
- Convert rate (trial  ->  paid)
- Month 3 churn (do longer trials have lower commitment?)

**Expected:** Higher trial start, similar conversion, higher churn

---

### Test 2: Upgrade Prompt Timing

**Hypothesis:** Day 14 prompt converts better than Day 7

**Control:** Show upgrade prompt after 7 days of usage
**Variant:** Show upgrade prompt after 14 days

**Track:** Conversion rate per cohort

**Expected:** Day 14 converts better (habit more established)

---

### Test 3: Pricing Display (Monthly vs Annual)

**Hypothesis:** Annual pricing (Rp 2.4M/year, save Rp 400K) converts better

**Control:** "Rp 200K/month"
**Variant:** "Rp 2.4M/year (save Rp 400K vs monthly, 2 months free)"

**Track:** Monthly vs annual subscription rate

**Expected:** 30% choose annual (cash flow challenge, but savings appeal)

---

### Test 4: Feature Gating Strategy

**Hypothesis:** Hard gate (total lock) converts better than soft gate (preview + lock)

**Control:** Locked features show "Unlock in Starter" (no preview)
**Variant:** Show preview (10 seconds), then lock with upgrade prompt

**Track:** Click-through to upgrade page

**Expected:** Preview converts 30% better (users see value first)

---

## Conversion Optimization Roadmap

### Month 1 (PMF Validation)

**Focus:** Grow free users, don't push paid yet

**Tactics:**
- No aggressive upgrade prompts
- Soft feature gates (show what's locked, don't annoy)
- Collect data: Which features do users click most?

**Goal:** 50+ free users, 30%+ weekly engagement

---

### Month 2 (Start Paid Tier)

**Focus:** Launch Starter/Pro, test conversion

**Tactics:**
- Trigger 1 (Daily usage)  ->  Upgrade prompt
- Trigger 2 (Feature clicks)  ->  Feature-specific upsell
- A/B test free trial duration

**Goal:** 5% conversion (5 paid users from 100 free)

---

### Month 3-6 (Optimize Funnel)

**Focus:** Increase conversion 5%  ->  10%

**Tactics:**
- All 5 triggers active
- A/B tests running (timing, pricing, gating)
- Personalized messaging (struggling vs thriving users)

**Goal:** 10% conversion (100 paid from 1,000 free)

---

## Churn Prevention (Paid Users)

### Signal 1: Low Usage (2 weeks no login)

**Re-Engagement Email:**
```
Subject: Missing You! Still Getting Value?

Hi [Name],

Haven't seen you in 2 weeks.

Common reasons:
- Too busy? (We have email digest = no daily login needed)
- Not valuable? (Tell us what's missing)
- Too expensive? (We can pause billing 1 month, no charge)

Reply "pause" = we'll pause billing.
Reply "help" = we'll unblock you.
Reply "cancel" = no hard feelings, cancel link below.

[1-Click Pause Billing] [Cancel Subscription]

Best,
PWBI Support
```

---

### Signal 2: Downgrade Intent (Clicked "Manage Subscription")

**Retention Offer:**
```
Before You Downgrade...

Get 50% off for 3 months (Rp 100K vs Rp 200K).

Why? We'd rather keep you at discount than lose you.

[ACCEPT 50% OFF] [Proceed to Downgrade]
```

**Conversion Back:** 40% accept discount (stay paid)

---

## Success Metrics

**Conversion (Free  ->  Paid):**
- Month 2: 5%+ (baseline)
- Month 6: 10%+ (optimized)
- Month 12: 15%+ (mature funnel)

**Paid User Retention:**
- Month 1 churn: <20%
- Month 3+ churn: <10%
- Year 1 churn: <30%

**Revenue:**
- Month 6: 100 paid Ã— Rp 275K avg = Rp 27.5M MRR
- Month 12: 300 paid Ã— Rp 275K = Rp 82.5M MRR

---

**Related Documents:**
- [[products/02-template-support/product-strategy/product-scope|product-scope.md]] - Free vs Starter vs Pro features
- [[products/02-template-support/operations/onboarding-guide|onboarding-guide.md]] - Upgrade triggers in user journey
- [[products/03-web-dashboard-lite/marketing/02-messaging|messaging.md]] - Value propositions per tier

**Last Updated:** 2025-12-26
**Owner:** Growth/Product Lead

