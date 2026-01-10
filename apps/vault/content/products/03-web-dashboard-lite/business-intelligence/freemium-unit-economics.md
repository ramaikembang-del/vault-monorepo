# E1 Web Dashboard Lite - Freemium Unit Economics

**Product:** E1 - Web Dashboard Lite (Freemium Analytics)
**Analysis Date:** January 6, 2025
**Analyst:** Business Intelligence Team
**Version:** 1.0

---

## Executive Summary

**Key Metrics (Per Subscriber):**

| Tier | Price | Cost to Serve | Gross Margin | LTV | CAC | LTV/CAC | Payback Period |
|------|-------|--------------|-------------|-----|-----|---------|---------------|
| **Free** | Rp 0 | Rp 10K/month | (100% loss) | Rp 0 | Rp 45K | N/A (marketing cost) | N/A |
| **Starter** | Rp 200K/month | Rp 30K/month | 85% (Rp 170K) | Rp 3.6M | Rp 600K | **6.0Ã—** | 3.5 months |
| **Pro** | Rp 300K/month | Rp 50K/month | 83% (Rp 250K) | Rp 7.2M | Rp 900K | **8.0Ã—** | 3.6 months |

**Financial Model Highlights:**
- [x] **Freemium economics work**: Free tier loses Rp 10K/user/month, but 20% convert to Starter (Rp 170K margin) = 17Ã— payback
- [x] **Exceptional LTV/CAC ratios**: 6-8Ã— (vs SaaS benchmark 3-5Ã—)
- [x] **Fast payback**: 3.5-3.6 months (vs SaaS benchmark 12-18 months)
- [x] **Breakeven achievable**: 30 Starter + 10 Pro subscribers covers all fixed costs (Rp 8.5M/month)
- [!] **Year 1 unprofitable**: Loss of Rp 85M (investment year), breakeven Month 18

**Recommendation:** [x] **Unit economics validate E1 freemium model** - Proceed with launch.

---

## 1. Revenue Model (Freemium 3-Tier)

### 1.1 Pricing Structure

**Free Tier (Lite):**
- **Price:** Rp 0 (forever free)
- **Purpose:** Acquisition (land grab), prove value
- **Target Users:** 80% of all signups (800 of 1,000 total)
- **Monetization:** Marketing cost (leads to paid conversion)

**Starter Tier:**
- **Price:** Rp 200,000/month
- **Purpose:** Core monetization (survival-focused users)
- **Target Users:** 15-20% of all signups (150-200 of 1,000)
- **Annual Equivalent:** Rp 2.4M/year

**Pro Tier:**
- **Price:** Rp 300,000/month
- **Purpose:** Power users (multi-user, custom metrics)
- **Target Users:** 30% of Starter users (45-60 of 1,000)
- **Annual Equivalent:** Rp 3.6M/year

**Revenue Mix (Year 1 Steady State):**
- Free: 800 users (0% revenue)
- Starter: 150 users (Rp 30M/month MRR = 83% of revenue)
- Pro: 50 users (Rp 15M/month MRR = 17% of revenue)
- **Total MRR:** Rp 45M (200 paid of 1,000 total users)

---

### 1.2 Plan Mix Evolution (Year 1-3)

| Year | Free Users | Starter Users | Pro Users | Total Paid | Free -> Paid % | Starter -> Pro % |
|------|-----------|--------------|----------|-----------|------------|--------------|
| Year 1 | 1,085 | 80 | 35 | 115 | 9.6% | 30.4% |
| Year 2 | 3,140 | 320 | 140 | 460 | 12.8% | 30.4% |
| Year 3 | 6,165 | 720 | 315 | 1,035 | 14.4% | 30.4% |

**Key Insights:**
- Free -> Paid conversion improves from 9.6% (Year 1) to 14.4% (Year 3) as product matures
- Starter -> Pro conversion stable at 30% (natural upgrade rate as users grow)
- Free users grow faster than paid (word-of-mouth, viral free tier)

---

## 2. Cost Structure (Variable + Fixed)

### 2.1 Variable Costs (Per User Per Month)

**Free Tier (Rp 10,000/user/month):**
- **Cloud Hosting:** Rp 5,000 (Supabase basic tier, storage + bandwidth)
- **Email Support (Automated):** Rp 2,000 (automated responses, FAQ chatbot)
- **Data Processing:** Rp 2,000 (CSV import, basic analytics)
- **Infrastructure (CDN, backups):** Rp 1,000
- **TOTAL:** Rp 10,000/user/month

**Starter Tier (Rp 30,000/user/month):**
- **Cloud Hosting:** Rp 12,000 (more data storage, 30-day history vs 7-day free)
- **Email Support (Human):** Rp 10,000 (1-2 tickets/month, 30-min support time @ Rp 200K/hour support cost)
- **WhatsApp Support:** Rp 3,000 (avg 1 WhatsApp conversation/month)
- **Advanced Analytics:** Rp 3,000 (15 metrics vs 5 free, more processing)
- **Infrastructure:** Rp 2,000 (higher bandwidth, backups)
- **TOTAL:** Rp 30,000/user/month

**Pro Tier (Rp 50,000/user/month):**
- **Cloud Hosting:** Rp 20,000 (90-day history, multi-user sync)
- **Priority Support:** Rp 18,000 (3-4 tickets/month, 1-hour response SLA)
- **Custom Reports Processing:** Rp 5,000 (custom metric builder, advanced queries)
- **Multi-User Infrastructure:** Rp 4,000 (team collaboration features)
- **Infrastructure:** Rp 3,000 (premium CDN, priority backups)
- **TOTAL:** Rp 50,000/user/month

**Gross Margin by Tier:**

| Tier | Revenue | Variable Cost | Contribution Margin | Gross Margin % |
|------|---------|--------------|-------------------|---------------|
| **Free** | Rp 0 | Rp 10K | (Rp 10K) | (100% loss) |
| **Starter** | Rp 200K | Rp 30K | **Rp 170K** | **85%** |
| **Pro** | Rp 300K | Rp 50K | **Rp 250K** | **83%** |

**Benchmark Comparison:**
- SaaS industry average: 70-80% gross margin
- E1 Starter/Pro: 83-85% (excellent, above benchmark)
- Reason: Low variable costs (automated support, efficient cloud hosting)

---

### 2.2 Fixed Costs (Monthly)

**Team Costs (Rp 5,500,000/month):**
- **Customer Support (0.5 FTE):** Rp 2,500,000 (handles all tiers, part-time initially)
- **Product Development (0.5 FTE):** Rp 2,000,000 (feature updates, bug fixes)
- **Marketing Manager (0.25 FTE):** Rp 1,000,000 (content, campaigns, partnerships)

**Infrastructure Costs (Rp 1,500,000/month):**
- **Cloud Infrastructure (Base):** Rp 800,000 (Supabase production tier, fixed costs)
- **Email Service (SendGrid/Mailgun):** Rp 200,000 (transactional emails, newsletters)
- **Analytics Tools (Mixpanel/Amplitude):** Rp 300,000 (user behavior tracking)
- **Payment Gateway (Midtrans):** Rp 200,000 (fixed fee + 2% variable)

**Marketing Costs (Rp 1,500,000/month):**
- **Paid Ads (Google/Facebook):** Rp 1,000,000 (acquisition marketing)
- **Content Creation:** Rp 300,000 (blog posts, case studies, tutorials)
- **Partnerships/Events:** Rp 200,000 (POS partnerships, F&B events)

**Total Fixed Costs:** **Rp 8,500,000/month** (Rp 102M/year)

**Breakdown:**
- Team: 65% (Rp 5.5M)
- Infrastructure: 18% (Rp 1.5M)
- Marketing: 18% (Rp 1.5M)

---

## 3. Customer Acquisition Cost (CAC)

### 3.1 CAC by Tier

**Free Tier CAC (Rp 45,000 per free signup):**

| Channel | Cost/Signup | % of Free Signups | Weighted CAC |
|---------|-----------|------------------|-------------|
| **Organic (Word-of-mouth)** | Rp 0 | 30% | Rp 0 |
| **Content Marketing (SEO)** | Rp 20,000 | 30% | Rp 6,000 |
| **Paid Ads (Google/Facebook)** | Rp 100,000 | 25% | Rp 25,000 |
| **Partnerships (POS referrals)** | Rp 50,000 | 15% | Rp 7,500 |
| **Weighted Average CAC (Free)** | - | 100% | **Rp 45,000** |

**Note:** Free tier CAC includes marketing to acquire free user, not conversion to paid.

**Starter Tier CAC (Rp 600,000 per paid subscriber):**

**CAC Composition:**
- **Free Tier CAC:** Rp 45,000 (cost to acquire free user)
- **Nurture Costs:** Rp 30,000 (email campaigns, in-app prompts over 90 days)
- **Sales Support:** Rp 25,000 (WhatsApp conversations, demo calls for 20% who need hand-holding)
- **Platform Costs:** Rp 500,000 (amortized fixed costs for onboarding, support setup, infrastructure)
- **Total Starter CAC:** **Rp 600,000**

**Breakdown:**
- Free signup CAC: 8% (Rp 45K)
- Nurture: 5% (Rp 30K)
- Sales support: 4% (Rp 25K)
- Platform overhead: 83% (Rp 500K)

**Pro Tier CAC (Rp 900,000 per Pro subscriber):**

**CAC Composition:**
- **Starter CAC:** Rp 600,000 (cost to acquire Starter user)
- **Upsell Campaign:** Rp 50,000 (in-app prompts, email campaigns for Pro features)
- **Custom Onboarding:** Rp 100,000 (Pro users get 1-hour onboarding call)
- **Pro Infrastructure Setup:** Rp 150,000 (multi-user, custom metrics setup)
- **Total Pro CAC:** **Rp 900,000**

**Breakdown:**
- Starter CAC: 67% (Rp 600K)
- Upsell: 6% (Rp 50K)
- Onboarding: 11% (Rp 100K)
- Infrastructure: 17% (Rp 150K)

---

### 3.2 CAC Payback Period

**Starter Tier Payback:**
```
Payback Period = CAC / Monthly Contribution Margin
 = Rp 600,000 / Rp 170,000
 = 3.5 months
```

**Pro Tier Payback:**
```
Payback Period = CAC / Monthly Contribution Margin
 = Rp 900,000 / Rp 250,000
 = 3.6 months
```

**Benchmark Comparison:**
- SaaS industry average: 12-18 months payback
- E1: 3.5-3.6 months (4-5Ã— faster than industry!)
- **Why so fast?** Low CAC (freemium funnel, organic growth) + high margins (85%+)

---

## 4. Lifetime Value (LTV)

### 4.1 LTV Calculation by Tier

**Starter Tier LTV (Rp 3,600,000):**

**Assumptions:**
- Average retention: 18 months (20% monthly churn in Year 1, improving to 15% Year 2+)
- Monthly contribution margin: Rp 170,000 (Rp 200K revenue - Rp 30K variable cost)
- **LTV Calculation:**
 ```
 LTV = Avg Retention (months) Ã— Monthly Contribution Margin
 = 18 months Ã— Rp 170,000
 = Rp 3,060,000

 + One-Time Upsell Value (30% upgrade to Pro after 12 months)
 = 30% Ã— Rp 7,200,000 (Pro LTV)
 = Rp 540,000 (weighted)

 Total Starter LTV = Rp 3,600,000
 ```

**Pro Tier LTV (Rp 7,200,000):**

**Assumptions:**
- Average retention: 24 months (15% monthly churn in Year 1, improving to 10% Year 2+)
- Monthly contribution margin: Rp 250,000 (Rp 300K revenue - Rp 50K variable cost)
- **LTV Calculation:**
 ```
 LTV = Avg Retention (months) Ã— Monthly Contribution Margin
 = 24 months Ã— Rp 250,000
 = Rp 6,000,000

 + Upsell to Full SaaS (10% upgrade after 18 months)
 = 10% Ã— Rp 12,000,000 (Full SaaS LTV estimate)
 = Rp 1,200,000 (weighted)

 Total Pro LTV = Rp 7,200,000
 ```

---

### 4.2 Cohort Retention Analysis

**Starter Tier Cohort (Month 1-24):**

| Month | Churn Rate | Retention % | Cumulative Subscribers | Revenue (Cohort of 100) |
|-------|-----------|------------|----------------------|----------------------|
| M1 | 0% | 100% | 100 | Rp 20,000,000 |
| M3 | 20% | 80% | 80 | Rp 16,000,000 |
| M6 | 20% | 51% | 51 | Rp 10,200,000 |
| M12 | 15% | 28% | 28 | Rp 5,600,000 |
| M18 | 15% | 15% | 15 | Rp 3,000,000 |
| M24 | 15% | 8% | 8 | Rp 1,600,000 |

**Total Revenue (100 Starter cohort over 24 months):** Rp 170M (Rp 1.7M average per subscriber = 8.5Ã— MRR)

**Pro Tier Cohort (Month 1-24):**

| Month | Churn Rate | Retention % | Cumulative Subscribers | Revenue (Cohort of 100) |
|-------|-----------|------------|----------------------|----------------------|
| M1 | 0% | 100% | 100 | Rp 30,000,000 |
| M3 | 15% | 85% | 85 | Rp 25,500,000 |
| M6 | 15% | 61% | 61 | Rp 18,300,000 |
| M12 | 10% | 41% | 41 | Rp 12,300,000 |
| M18 | 10% | 28% | 28 | Rp 8,400,000 |
| M24 | 10% | 19% | 19 | Rp 5,700,000 |

**Total Revenue (100 Pro cohort over 24 months):** Rp 240M (Rp 2.4M average per subscriber = 8Ã— MRR)

---

### 4.3 Churn Analysis

**Monthly Churn Assumptions:**

| Tier | Year 1 Churn | Year 2 Churn | Year 3+ Churn | Rationale |
|------|-------------|-------------|--------------|-----------|
| **Free** | 40%/month | 35%/month | 30%/month | High churn (no commitment), improves with product quality |
| **Starter** | 20%/month | 15%/month | 12%/month | Moderate churn (price-sensitive), improves with stickiness |
| **Pro** | 15%/month | 10%/month | 8%/month | Low churn (higher commitment, more features), best retention |

**Why Year 1 Churn is High:**
- Product still finding PMF (features may not match all user needs)
- Support quality inconsistent (new support team learning)
- Free tier users experimenting (not committed)

**Why Churn Improves Year 2+:**
- Product maturity (more features, better UX)
- Support quality (experienced team, better playbooks)
- Switching costs increase (data history, custom metrics built)

**Churn Benchmarks:**
- SaaS industry average: 5-10%/month (B2B), 10-20%/month (SMB)
- E1 Starter: 20% (Year 1)  ->  On high end but acceptable for Mikro segment
- E1 Pro: 15% (Year 1)  ->  In range for SMB SaaS

---

## 5. LTV/CAC Ratio Analysis

### 5.1 LTV/CAC by Tier

| Tier | LTV | CAC | LTV/CAC Ratio | Assessment |
|------|-----|-----|--------------|------------|
| **Starter** | Rp 3,600,000 | Rp 600,000 | **6.0Ã—** | [x] Excellent (vs 3Ã— benchmark) |
| **Pro** | Rp 7,200,000 | Rp 900,000 | **8.0Ã—** | [x] Exceptional (vs 5Ã— benchmark) |

**Industry Benchmarks:**
- **Poor:** <1Ã— LTV/CAC (burning money, unit economics broken)
- **Acceptable:** 1-3Ã— (sustainable but not great)
- **Good:** 3-5Ã— (healthy SaaS business)
- **Excellent:** 5-10Ã— (high-growth, scalable)
- **Exceptional:** 10Ã—+ (rare, usually freemium products with viral growth)

**E1 Assessment:** [x] **Excellent (6-8Ã—)** - Unit economics support aggressive growth.

---

### 5.2 Why E1's LTV/CAC is So High

**Reason 1: Low CAC (Freemium Funnel)**
- Free tier acts as marketing (word-of-mouth, viral growth)
- Organic signups reduce paid CAC (30% of free users are organic = Rp 0 CAC)
- Self-service conversion (no sales team needed for Starter tier)

**Reason 2: High LTV (Strong Retention + Upsells)**
- Pro tier has 24-month retention (vs 12-18 month SaaS average)
- 30% Starter -> Pro upsell boosts overall LTV
- 10% Pro -> Full SaaS upsell adds long-term value

**Reason 3: High Margins (85%)**
- Low variable costs (automated support, efficient infrastructure)
- Contribution margin (Rp 170K-250K) compounds over retention period

**Comparison to Products 01-02:**
- **Product 01 (A1 Template):** LTV/CAC = 11Ã— (Rp 1.1M LTV / Rp 100K CAC) - Higher than E1, but one-time product
- **Product 02 (R1 Subscription):** LTV/CAC = 16.7Ã—-33.3Ã— (upsell, ultra-low CAC)
- **Product 03 (E1 Freemium):** LTV/CAC = 6-8Ã— - Lower than R1 (higher CAC), but massive TAM (96K vs 150 for R1)

---

## 6. Breakeven Analysis

### 6.1 Subscriber Breakeven (Cover Fixed Costs)

**Fixed Costs:** Rp 8,500,000/month

**Breakeven Calculation:**
```
Breakeven = Fixed Costs / Weighted Avg Contribution Margin

Weighted Avg Contribution Margin:
- Starter: 70% of paid users Ã— Rp 170K = Rp 119,000
- Pro: 30% of paid users Ã— Rp 250K = Rp 75,000
- Total: Rp 194,000 per avg paid user

Breakeven = Rp 8,500,000 / Rp 194,000 = 44 paid subscribers
```

**Breakeven Mix:**
- **Starter:** 31 subscribers (70%) Ã— Rp 170K = Rp 5.27M margin
- **Pro:** 13 subscribers (30%) Ã— Rp 250K = Rp 3.25M margin
- **Total Margin:** Rp 8.52M (covers Rp 8.5M fixed costs)

**Validation:** 44 paid subscribers = 3.8% of 1,200 Year 1 free signups (achievable with 20% free -> paid target).

---

### 6.2 Free Tier Economics (Loss Leader)

**Free Tier Losses (Monthly):**
- Free users: 1,085 (Year 1 average)
- Cost per free user: Rp 10,000/month
- **Total Free Tier Loss:** Rp 10,850,000/month (Rp 130M/year)

**Is Free Tier Loss Acceptable?**

**Payback Calculation:**
- 20% of 1,085 free users convert to Starter (217 conversions)
- But with 20% churn, only 115 active Starter by Year-end
- 115 Starter Ã— Rp 170K margin = Rp 19.55M/month contribution
- **Free Tier Payback:** Rp 19.55M / Rp 10.85M = **1.8Ã— payback**

**Assessment:** [x] **Free tier economics work** - Each Rp 1 invested in free tier returns Rp 1.8 in paid margin.

**Free Tier ROI:**
- Investment: Rp 130M/year (free tier losses)
- Return: Rp 230M/year (115 Starter Ã— Rp 2M annual contribution)
- **ROI:** 77% (Rp 230M / Rp 130M - 1)

---

### 6.3 Profitability Timeline

**Month-by-Month Profitability (Year 1):**

| Month | Free Users | Paid Users | MRR | Variable Costs | Fixed Costs | Total Costs | Profit/Loss |
|-------|-----------|-----------|-----|----------------|-------------|-------------|------------|
| M1 | 50 | 10 | Rp 2.0M | Rp 0.8M | Rp 8.5M | Rp 9.3M | **(Rp 7.3M)** |
| M3 | 225 | 46 | Rp 9.2M | Rp 3.6M | Rp 8.5M | Rp 12.1M | **(Rp 2.9M)** |
| M6 | 600 | 80 | Rp 16M | Rp 7.2M | Rp 8.5M | Rp 15.7M | **Rp 0.3M** (breakeven!) |
| M12 | 1,200 | 115 | Rp 23M | Rp 13.35M | Rp 8.5M | Rp 21.85M | **Rp 1.15M** |

**Breakeven Month:** Month 6 (first profitable month)

**Year 1 Total:**
- Revenue: Rp 132M (115 paid Ã— Rp 200K avg Ã— 12 months, accounting for ramp)
- Variable Costs: Rp 95M (free + paid tier costs)
- Fixed Costs: Rp 102M (Rp 8.5M Ã— 12 months)
- **Year 1 Profit/Loss:** **(Rp 65M) LOSS**

**Year 2-3 Profitability:**

| Year | Paid Users (Avg) | MRR (Avg) | Annual Revenue | Annual Costs | Profit/Loss |
|------|-----------------|----------|---------------|-------------|------------|
| Year 1 | 58 (avg) | Rp 11.6M | Rp 132M | Rp 197M | **(Rp 65M)** |
| Year 2 | 290 (avg) | Rp 58M | Rp 696M | Rp 420M | **Rp 276M** [x] |
| Year 3 | 748 (avg) | Rp 149M | Rp 1,788M | Rp 825M | **Rp 963M** [x] |

**Profitability Assessment:**
- [!] Year 1: Rp 65M loss (investment year, expected for freemium)
- [x] Year 2: Rp 276M profit (breakeven achieved, scaling begins)
- [x] Year 3: Rp 963M profit (63% profit margin, mature business)

---

## 7. Sensitivity Analysis

### 7.1 Impact of Free -> Paid Conversion Rate

**Base Case: 20% free -> paid conversion**

| Scenario | Conversion | Year 1 Paid | Year 3 Paid | Year 1 Profit | Year 3 Profit | Impact |
|----------|-----------|-----------|-----------|--------------|--------------|--------|
| **Worst Case** | 10% (-50%) | 58 | 518 | (Rp 105M) | Rp 380M | -61% profit |
| **Conservative** | 15% (-25%) | 86 | 776 | (Rp 85M) | Rp 671M | -30% profit |
| **Base Case** | 20% (baseline) | 115 | 1,035 | (Rp 65M) | Rp 963M | Baseline |
| **Aggressive** | 25% (+25%) | 144 | 1,294 | (Rp 45M) | Rp 1,256M | +30% profit |
| **Best Case** | 30% (+50%) | 173 | 1,553 | (Rp 25M) | Rp 1,549M | +61% profit |

**Insight:** **Conversion rate is HIGHLY SENSITIVE.** A 10% drop (20%  ->  10%) reduces Year 3 profit by 61% (Rp 963M  ->  Rp 380M). **Product-market fit validation (Gate 1B) is critical.**

---

### 7.2 Impact of Monthly Churn Rate

**Base Case: 20% Starter churn, 15% Pro churn (Year 1)**

| Scenario | Starter Churn | Pro Churn | Year 1 Paid | Year 3 Paid | Year 1 Profit | Year 3 Profit | Impact |
|----------|--------------|----------|-----------|-----------|--------------|--------------|--------|
| **Best Case** | 10% (-50%) | 5% (-67%) | 145 | 1,725 | (Rp 35M) | Rp 1,920M | +99% profit |
| **Optimistic** | 15% (-25%) | 10% (-33%) | 130 | 1,380 | (Rp 50M) | Rp 1,441M | +50% profit |
| **Base Case** | 20% (baseline) | 15% (baseline) | 115 | 1,035 | (Rp 65M) | Rp 963M | Baseline |
| **Pessimistic** | 25% (+25%) | 20% (+33%) | 100 | 760 | (Rp 80M) | Rp 580M | -40% profit |
| **Worst Case** | 30% (+50%) | 25% (+67%) | 86 | 550 | (Rp 95M) | Rp 270M | -72% profit |

**Insight:** **Churn is EVEN MORE SENSITIVE than conversion.** A 10% churn increase (20%  ->  30%) reduces Year 3 profit by 72% (Rp 963M  ->  Rp 270M). **Retention is more important than acquisition.**

---

### 7.3 Impact of Pricing Changes

**Base Case: Starter Rp 200K, Pro Rp 300K**

| Scenario | Starter Price | Pro Price | Year 1 MRR | Year 3 MRR | Year 3 Profit | Impact |
|----------|--------------|----------|-----------|-----------|--------------|--------|
| **Low Price** | Rp 150K (-25%) | Rp 225K (-25%) | Rp 17.25M | Rp 155M | Rp 482M | -50% profit |
| **Base Case** | Rp 200K (baseline) | Rp 300K (baseline) | Rp 23M | Rp 207M | Rp 963M | Baseline |
| **High Price** | Rp 250K (+25%) | Rp 375K (+25%) | Rp 28.75M | Rp 259M | Rp 1,444M | +50% profit |

**BUT - Price elasticity:**
- Lower price (+10% conversion)  ->  Year 3 profit = Rp 723M (vs Rp 482M at same conversion)  ->  Still worse than base case
- Higher price (-10% conversion)  ->  Year 3 profit = Rp 1,082M (vs Rp 1,444M at same conversion)  ->  Still better than base case!

**Insight:** **Pricing is LESS SENSITIVE than conversion/churn.** A 25% price increase only boosts profit by 50% (vs 99% for churn reduction). **Focus on retention over pricing.**

---

## 8. Scenario Planning (Conservative/Current/Aggressive)

### 8.1 Conservative Scenario (Slow Growth, High Churn)

**Assumptions:**
- Free -> Paid conversion: 15% (vs 20% base)
- Monthly churn: 25% Starter, 20% Pro (vs 20%/15% base)
- Marketing reach: 3% TAM (vs 5% base)

**Results:**

| Year | Free Signups | Paid Users | MRR | Annual Revenue | Annual Profit |
|------|-------------|-----------|-----|---------------|--------------|
| Year 1 | 720 | 58 | Rp 11.6M | Rp 139M | **(Rp 105M)** LOSS |
| Year 2 | 2,160 | 194 | Rp 38.8M | Rp 465M | Rp 45M (breakeven) |
| Year 3 | 4,320 | 432 | Rp 86.4M | Rp 1,037M | Rp 380M |

**Assessment:** [!] Even in worst case, E1 is profitable by Year 3 (but only Rp 380M vs Rp 963M base).

---

### 8.2 Current Scenario (Base Case)

**See sections 1-7 for base case details.**

**Summary:**
- Year 1: (Rp 65M) loss
- Year 2: Rp 276M profit
- Year 3: Rp 963M profit (63% margin)

---

### 8.3 Aggressive Scenario (Fast Growth, Low Churn)

**Assumptions:**
- Free -> Paid conversion: 25% (vs 20% base)
- Monthly churn: 15% Starter, 10% Pro (vs 20%/15% base)
- Marketing reach: 10% TAM (vs 5% base)

**Results:**

| Year | Free Signups | Paid Users | MRR | Annual Revenue | Annual Profit |
|------|-------------|-----------|-----|---------------|--------------|
| Year 1 | 2,400 | 288 | Rp 57.6M | Rp 691M | Rp 230M (profitable Year 1!) |
| Year 2 | 7,200 | 1,152 | Rp 230M | Rp 2,764M | Rp 1,950M |
| Year 3 | 14,400 | 2,592 | Rp 518M | Rp 6,220M | Rp 4,800M |

**Assessment:** [x] If strong PMF, E1 can be profitable in Year 1 and scale rapidly to Rp 6B+ ARR by Year 3.

---

## 9. Strategic Recommendations

### 9.1 Pricing Strategy

**Should we change pricing?**
[x] **NO** - Rp 200K/300K is optimal based on sensitivity analysis.

**Reasoning:**
1. Pricing is LESS SENSITIVE than conversion/churn (25% price change = 50% profit change vs 99% for churn)
2. Lower price doesn't proportionally increase conversion (elasticity low for B2B tools)
3. Current price is validated (75% cheaper than Tableau, 17% cheaper than Power BI Pro)

**Recommendation:** **Keep Rp 200K Starter, Rp 300K Pro.** Focus on conversion + retention, not pricing.

---

### 9.2 Retention Strategy (Highest ROI)

**Churn reduction has 2Ã— impact of conversion improvement.**

**Priority Retention Tactics:**

1. **Onboarding Excellence** (Reduce Month 1-3 churn from 20%  ->  15%)
 - In-app onboarding flow (5-step wizard)
 - WhatsApp welcome message (personal touch)
 - Weekly tips email (keep users engaged)

2. **Value Reinforcement** (Reduce Month 4-12 churn from 20%  ->  15%)
 - Monthly "You Saved Rp X This Month" email (ROI reminder)
 - Quarterly business review (show progress over time)
 - Feature usage nudges (unlock more value)

3. **Churn Prevention** (Win back 30% of at-risk users)
 - Health score monitoring (engagement drops = intervention)
 - Exit survey + save offer (50% discount for 3 months)
 - Win-back campaign (re-engage churned users after 90 days)

**ROI of Retention Investment:**
- Invest: Rp 20M/year (customer success playbooks, tools)
- Return: Reduce churn from 20%  ->  15% = +50% Year 3 profit (Rp 963M  ->  Rp 1,441M)
- **ROI:** 24Ã— (Rp 480M gain / Rp 20M cost)

---

### 9.3 Conversion Optimization (High ROI)

**Free -> Paid conversion improvement has high ROI, but lower than retention.**

**Priority Conversion Tactics:**

1. **Feature Gating** (Increase urgency)
 - 7-day history limit (force upgrade for monthly decisions)
 - Lock 10 metrics (show value, create desire)
 - "Upgrade to unlock" modal (friction-free upgrade path)

2. **Value Demonstration** (Prove ROI before asking for payment)
 - Free tier shows 5 survival metrics (enough to see value)
 - Email: "You would have saved Rp 500K this month if you had full history" (ROI message)
 - Case studies (social proof from similar businesses)

3. **Conversion Funnel Optimization** (Reduce friction)
 - 1-click upgrade (no credit card for 14-day trial)
 - WhatsApp support during trial (answer questions)
 - Money-back guarantee (remove risk)

**ROI of Conversion Investment:**
- Invest: Rp 15M/year (A/B testing, conversion tools, sales support)
- Return: Increase conversion from 20%  ->  25% = +30% Year 3 profit (Rp 963M  ->  Rp 1,256M)
- **ROI:** 19Ã— (Rp 293M gain / Rp 15M cost)

---

## 10. Conclusion

### 10.1 Unit Economics Validation

**Are E1's freemium unit economics healthy?**
[x] **YES** - All key metrics exceed SaaS benchmarks:
- **LTV/CAC:** 6-8Ã— (vs 3-5Ã— benchmark)
- **Gross Margin:** 83-85% (vs 70-80% benchmark)
- **Payback Period:** 3.5-3.6 months (vs 12-18 months benchmark)
- **Free Tier ROI:** 1.8Ã— payback (each Rp 1 spent on free users returns Rp 1.8)

**Is E1 profitable?**
[!] **NOT Year 1** (Rp 65M loss expected), but [x] **YES Year 2+** (Rp 276M Year 2, Rp 963M Year 3).

**Should we proceed with E1 launch?**
[x] **YES** - Unit economics validate freemium model, profitability achievable by Year 2.

---

### 10.2 Key Levers for Success

**Priority 1: Retention** (Churn 20%  ->  15% = +50% Year 3 profit)
**Priority 2: Conversion** (Free -> Paid 20%  ->  25% = +30% Year 3 profit)
**Priority 3: Marketing Reach** (5%  ->  10% TAM = +100% Year 3 profit)

**Don't focus on:** Pricing (low sensitivity, current price is optimal)

---

### 10.3 Gate 1B Alignment

**Gate 1B (Week 4): 50+ free signups, 30%+ engagement**
- Validates: Marketing reach (5% TAM achievable)
- Validates: Free tier stickiness (30% engagement = low churn potential)

**Gate 1B Phase 2 (Week 8): 5%+ free -> paid conversion**
- Validates: Paid conversion funnel works
- Leading indicator: 5% @ Week 8  ->  20% @ Year 1 (typical SaaS curve)

**If Gate 1B FAILS:**
- <50 signups  ->  Marketing reach issue (invest more in paid ads, partnerships)
- <30% engagement  ->  Product-market fit issue (improve free tier features, onboarding)
- <5% conversion  ->  Pricing/value prop issue (test Rp 150K vs Rp 200K, strengthen upgrade prompts)

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2025-01-06 | Initial unit economics for E1 Sprint 1 launch | Business Intelligence Team |

---

**Related Documents:**
- [[market-sizing-validation|Market Sizing Validation]] - TAM/SAM/SOM analysis
- [[revenue-projections|Revenue Projections]] - Year 1-3 MRR/ARR forecasts
- [[products/03-web-dashboard-lite/paid-tiers/pricing-strategy|Pricing Strategy]] - Tier pricing rationale
- [[products/03-web-dashboard-lite/03-web-dashboard-lite|E1 README]] - Product overview

---

**Next Steps:**
1. Launch E1 Week 3 with validated unit economics
2. Monitor Gate 1B metrics (Week 4): Free signups, engagement, conversion
3. Invest in retention (Rp 20M/year) to reduce churn from 20%  ->  15%
4. Optimize conversion funnel (Rp 15M/year) to increase free -> paid from 20%  ->  25%
5. Achieve Year 2 profitability (Rp 276M profit target)

---

**END OF FREEMIUM UNIT ECONOMICS**


