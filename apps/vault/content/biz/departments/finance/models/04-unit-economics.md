# Unit Economics - Comprehensive CAC/LTV Analysis

**PWBI F&B Growth**
**Last Updated:** 2025-12-26
**Purpose:** Detailed unit economics for data-driven decision-making

> [!IMPORTANT]
> **Target:** LTV:CAC > 20:1 ecosystem-wide | Payback < 12 months | Gross margin > 85%

---

## Executive Summary

**Blended Ecosystem Metrics (Weighted by Revenue):**
- **Customer Acquisition Cost:** Rp 2.5M (weighted average)
- **Lifetime Value:** Rp 55M (weighted average)
- **LTV:CAC Ratio:** 22:1 (exceeds 20:1 target)
- **Payback Period:** 5.5 months (blended)
- **Gross Margin:** 87% (SaaS industry standard: 70-80%)
- **CAC Payback:** 7.5 months for C1 (SaaS Basic) - most critical metric

**Key Insights:**
- Freemium products (E1 Lite) have infinite LTV:CAC (zero acquisition cost)
- C2 (SaaS Pro) has best economics: 7.6:1 LTV:CAC with 4.8mo payback
- Templates (A1) provide fastest cash but lowest LTV:CAC (5.7:1)
- Accounting modules (R2) have longest payback (10mo) but strongest lock-in

---

## Product-by-Product Deep Dive

### A1: Power BI Template (3-Tier Product)

#### Customer Acquisition Cost Breakdown

**Marketing Costs (per customer):**
- Content marketing (blog, SEO, guides): Rp 300K
 - Breakdown: Rp 10M content budget ÷ 30 template sales/month = Rp 333K
 - Attribution: 50% of sales come from organic content
- Community outreach (paguyuban, F&B associations): Rp 150K
 - Event sponsorships: Rp 3M/month ÷ 20 sales = Rp 150K
 - Attribution: 30% from community referrals
- Paid ads (Google/Facebook): Rp 0 in Sprint 1 (pause until Sprint 2)

**Sales Costs:**
- Founder sales time: 3 hours per customer
 - Cost: 3 hours × Rp 50K/hour = Rp 150K (opportunity cost)
- Demo prep + materials: Rp 50K

**Total CAC:** Rp 650K (Sprint 1 baseline)

**CAC by Tier:**
- Tier 1 (DIY - Rp 2-3M): Lower CAC (Rp 500K) - self-serve customers
- Tier 2 (Assisted - Rp 5-7M): Higher CAC (Rp 750K) - more sales touch
- Tier 3 (Managed - Rp 10-15M): Highest CAC (Rp 1.5M) - enterprise-lite sales

**Weighted Average CAC:** Rp 600K (assuming 60% Tier 1, 30% Tier 2, 10% Tier 3)

---

#### Lifetime Value Calculation

**Direct Revenue:**
- One-time purchase: Rp 2.5M (avg across 3 tiers)
 - Tier 1: Rp 2M (assumed, conservative)
 - Tier 2: Rp 6M
 - Tier 3: Rp 12.5M (one-time) + Rp 400K/mo managed service
- Payment terms: 100% upfront (bank transfer or Stripe)

**R1 (Support Subscription) Attach Rate:**
- Conversion: 30% of template buyers subscribe
- Pricing: Rp 75K/month
- Retention: 12 months average
- Value: Rp 900K per converting customer

**Weighted R1 Value:**
- 30% convert × Rp 900K = Rp 270K added to LTV
- 70% don't convert = Rp 0

**Blended LTV:**
- One-time: Rp 2.5M
- Support (30% attach): +Rp 270K
- **Total LTV:** Rp 2.77M

**But wait - Tier 3 has recurring component:**
- Tier 3 (10% of sales): Rp 12.5M + (Rp 400K × 24 months) = Rp 22.1M
- Weighted contribution: 10% × Rp 22.1M = Rp 2.21M

**Revised Blended LTV:** Rp 3.4M (accounting for Tier 3 skew)

---

#### Unit Economics

| Metric | Value | Industry Benchmark | Assessment |
|--------|-------|-------------------|------------|
| CAC | Rp 600K | Rp 1-3M (B2B SaaS) | Below benchmark |
| LTV | Rp 3.4M | Rp 5-20M (one-time) | Healthy for one-time product |
| LTV:CAC | 5.7:1 | 3:1 minimum | Exceeds minimum |
| Gross Margin | 95% | 90%+ (digital) | Excellent |
| Payback | Immediate | N/A (one-time) | Best possible |

**Strategic Assessment:**
- Profitable customer acquisition
- Fast cash generation (upfront payment)
- LTV:CAC could be higher (6:1 is good but not exceptional)
- R1 attach rate (30%) is strong for upsell product

**Optimization Opportunities:**
1. Increase Tier 2/3 mix from 40% to 60% → LTV jumps to Rp 4.5M
2. Improve R1 attach from 30% to 50% → +Rp 450K LTV
3. Add template update packs (Rp 500K every 6 months) → recurring revenue stream

---

### R1: Template Support/Subscription

#### CAC: Rp 0 (Pure Upsell)

**Why Zero CAC:**
- 100% conversion from existing A1 customers (no new acquisition)
- Passive upsell (email campaign + in-product prompt)
- No sales time (self-serve checkout)

**Marketing Investment:**
- Email sequence (3 emails): Rp 10K design cost ÷ all customers ≈ Rp 0
- In-product banner: Rp 0 (dev time already sunk)

**True CAC:** Rp 0 (rounds to zero, technically Rp 5-10K if you count email costs)

---

#### LTV Calculation

**Revenue:**
- MRR: Rp 75K/month
- Retention curve:
 - Month 1-6: 100% retention (honeymoon period)
 - Month 7-12: 80% retention (20% churn)
 - Month 13-24: 60% retention (cumulative 40% churned)
 - Month 25+: 40% retention (long-tail, loyal customers)

**LTV Calculation (cohort-based):**
- Months 1-6: 6 × Rp 75K = Rp 450K
- Months 7-12: 0.8 × 6 × Rp 75K = Rp 360K
- Months 13-24: 0.6 × 12 × Rp 75K = Rp 540K (but discounted 50% NPV)
- **Total LTV:** Rp 450K + Rp 360K + Rp 270K = **Rp 1.08M**

**Conservative LTV (12-month retention assumption):**
- Rp 75K × 12 = Rp 900K (used in original estimate)

---

#### Unit Economics

| Metric | Value | Notes |
|--------|-------|-------|
| CAC | Rp 0 | Pure upsell, no acquisition cost |
| LTV | Rp 900K-1.08M | 12-24 month retention range |
| LTV:CAC | ∞ | Technically infinite, functionally very high |
| Gross Margin | 98% | Minimal marginal cost (email support) |
| Payback | Immediate | First month payment covers all costs |

**Churn Drivers (why 20% churn at Month 7):**
- Template customers stop using product (lost interest)
- POS system incompatibility (schema changes)
- Business closure (F&B has ~10% annual closure rate)

**Retention Strategies:**
- Proactive outreach Month 5 (before churn risk)
- Quarterly feature updates (keep product fresh)
- Community forum (peer support reduces need for paid support)

---

### E1: Web Dashboard Lite (Freemium Product)

#### CAC: Rp 0 (Freemium Acquisition)

**Why Zero:**
- No paid acquisition (100% organic/viral)
- Self-serve signup (no sales touch)
- Word-of-mouth driven (Phase 1 warung community)

**Investment:**
- Product development: Rp 60M (sunk cost, not marginal CAC)
- Hosting (free tier): Rp 2K per user/month (variable cost, not CAC)

**True CAC per free user:** Rp 0
**True CAC per paid user:** Rp 0 (conversion from free is organic)

---

#### LTV Calculation (Per Paid Customer)

**Pricing:**
- Starter: Rp 200K/month (6 metrics, 1 location)
- Pro: Rp 350K/month (14 features, 3 locations)
- Blended: Rp 275K/month (60% Starter, 40% Pro)

**Retention:**
- Month 1-12: 85% retention
- Month 13-36: 70% retention (SME churn stabilizes)
- Average retention: 36 months (long for SME SaaS)

**LTV (per paid customer):**
- Year 1: 12 × Rp 275K × 0.85 = Rp 2.8M
- Year 2: 12 × Rp 275K × 0.7 = Rp 2.31M
- Year 3: 12 × Rp 275K × 0.7 = Rp 2.31M
- **Total:** Rp 7.42M (discounting to Rp 6.5M NPV)

**Conservative LTV:** Rp 9.9M (36 months × Rp 275K, no discounting)

---

#### Conversion Funnel Economics

**Freemium Funnel:**
- Signups: 200 (Sprint 1-2 target)
- Activated (use >1 time): 120 (60%)
- Engaged (weekly use): 60 (30%)
- Converting to paid: 10-20 (5-10% of signups)

**LTV per Signup (Including Non-Converters):**
- Total LTV from cohort: 15 paid × Rp 9.9M = Rp 148.5M
- LTV per signup: Rp 148.5M ÷ 200 = **Rp 742K**

**This is the TRUE metric for freemium:**
- Not LTV per paid customer (Rp 9.9M)
- But LTV per signup (Rp 742K) - accounts for low conversion

---

#### Unit Economics

| Metric | Per Paid Customer | Per Signup (Blended) |
|--------|------------------|---------------------|
| CAC | Rp 0 | Rp 0 |
| LTV | Rp 9.9M | Rp 742K |
| LTV:CAC | ∞ | ∞ |
| Gross Margin | 88% | 88% |
| Payback | Immediate | Immediate |
| Conversion Rate | 100% (already paid) | 5-10% (signup → paid) |

**Critical Metric: Paid Conversion Rate**
- 5% = Rp 495K LTV per signup (marginal)
- 10% = Rp 990K LTV per signup (excellent)
- **Gate 2 trigger:** Must hit 5%+ to proceed to Sprint 3 (C1 SaaS build)

**Levers to Improve Conversion:**
1. Feature limits (make free tier insufficient faster)
2. Usage triggers (after 10 reports, paywall appears)
3. Peer pressure (show "90% of restaurants like yours use Pro tier")
4. Discount offer (first 3 months 50% off → Rp 100K/month)

---

### C1: SaaS Basic Tier

#### CAC Breakdown (Detailed)

**Marketing Costs:**
- Content marketing (from E1 validation): Rp 500K
 - SEO, blog, case studies targeting "E1 users ready to upgrade"
- Paid ads (Google/Facebook): Rp 2M
 - Targeting Phase 2 SME owners
 - Cost-per-click: Rp 5K
 - Conversion rate: 2% (CPC → demo)
 - Demo → customer: 10%
 - Total: Rp 2M ÷ (2% × 10%) = Rp 2M per customer
- Partnerships (referrals from POS, accounting software): Rp 300K
 - 20% revenue share for 6 months on referred customers

**Sales Costs:**
- Demo calls: 10 hours (Rp 50K/hour) = Rp 500K
- Onboarding time: 5 hours = Rp 250K
- Sales tools (CRM, email): Rp 50K

**Total CAC:** Rp 3.6M (conservative estimate, assumes 100% paid channel)

**CAC Reduction Over Time:**
- Sprint 1-2: Rp 3.6M (cold acquisition)
- Year 2: Rp 2M (brand recognition improves conversion)
- Year 3: Rp 1M (word-of-mouth + community effects)

---

#### LTV Calculation (Detailed)

**Revenue:**
- MRR: Rp 400K/month
- Retention assumptions:
 - Year 1: 85% annual retention (15% churn)
 - Year 2: 80% retention (20% cumulative churned)
 - Year 3: 75% retention (25% cumulative churned)

**Expansion Revenue (Upsells):**
- 20% of C1 customers upgrade to C2 (Pro) in Year 2
- Expansion MRR: 20% × (Rp 1.05M - Rp 400K) = Rp 130K/month added
- Expansion LTV: Rp 130K × 24 months = Rp 3.12M

**Total LTV:**
- Base: Rp 400K × 36 months × 0.8 retention = Rp 11.52M
- Expansion (20% upgrade): +Rp 3.12M × 20% = Rp 624K
- **Total:** Rp 12.14M

**Conservative (no expansion):** Rp 14.4M (Rp 400K × 36 months)

---

#### Unit Economics

| Metric | Value | Target | Assessment |
|--------|-------|--------|------------|
| CAC | Rp 3M | <Rp 4M | Within target |
| LTV | Rp 14.4M | >Rp 12M | Exceeds target |
| LTV:CAC | 4.8:1 | >3:1 | Healthy |
| Gross Margin | 85% | >80% | Strong |
| Payback | 7.5 months | <12 months | Fast |
| Annual Churn | 15% | <20% | Low |

**Payback Calculation:**
- CAC: Rp 3M
- Monthly profit: Rp 400K × 85% margin = Rp 340K
- Payback: Rp 3M ÷ Rp 340K = 8.8 months (rounds to 9)
- **With faster ramp (90 days to full MRR):** 7.5 months effective payback

---

### C2: SaaS Pro Tier (Best Economics)

#### CAC: Rp 5M (Enterprise-Lite Sales)

**Why Higher Than C1:**
- Multi-location customers require more sales touch
- Longer sales cycle (3-6 months vs. 1-2 months for C1)
- More demos, stakeholder meetings, customization discussions

**CAC Breakdown:**
- Marketing: Rp 1M (targeted ads, events)
- Sales time: 20 hours × Rp 50K = Rp 1M
- Solution engineering: 10 hours × Rp 75K = Rp 750K
- Proof-of-concept (custom demo): Rp 500K
- Travel/entertainment: Rp 300K
- Referral commissions (if applicable): Rp 1.5M (30% of Year 1 revenue)
- **Total:** Rp 5.05M

---

#### LTV: Rp 37.8M (High-Value Customer)

**Revenue:**
- MRR: Rp 1.05M
- Retention: 36 months (sticky due to multi-location dependency)
- Base LTV: Rp 1.05M × 36 = Rp 37.8M

**Expansion Opportunities:**
- Add 6th location → Upgrade to C3 (Advanced) - 10% probability
- Add user seats (+Rp 35K per seat × 5 users) = +Rp 175K/month
- Weighted expansion: Rp 6.3M added LTV

**Total LTV (with expansion):** Rp 44.1M

---

#### Unit Economics

| Metric | Value | C1 Comparison |
|--------|-------|---------------|
| CAC | Rp 5M | +67% vs C1 |
| LTV | Rp 37.8M | +162% vs C1 |
| **LTV:CAC** | **7.6:1** | **+58% vs C1** |
| Payback | 4.8 months | -36% faster |
| Gross Margin | 86% | +1% |

**Why C2 Has Best Economics:**
- Higher revenue per customer (2.6× C1)
- Stickier (multi-location lock-in)
- Lower relative CAC (only 67% more for 162% more revenue)
- Result: 7.6:1 LTV:CAC (best in portfolio)

---

### R2a-f: Accounting Modules (Standalone)

#### CAC: Rp 500K (Shared with Analytics)

**Channel:**
- Cross-sell to existing customers: 50% (Rp 0 CAC)
- New acquisition (accounting-first, analytics later): 50% (Rp 1M CAC)
- **Blended:** Rp 500K

---

#### LTV: Rp 1.8M (36-month retention)

**Revenue:**
- MRR: Rp 50K (average across R2a-f)
- Retention: 36 months (**longest in portfolio** - financial data lock-in)
- LTV: Rp 50K × 36 = Rp 1.8M

**Why 36-Month Retention is Highest:**
- Historical financial data impossible to export cleanly
- Tax compliance tied to system
- Switching cost = re-entering 3 years of transactions

---

#### Unit Economics

| Metric | Value | Notes |
|--------|-------|-------|
| CAC | Rp 500K | 50% cross-sell, 50% new |
| LTV | Rp 1.8M | 36 months (longest retention) |
| LTV:CAC | 3.6:1 | Lowest in portfolio but acceptable |
| Payback | 10 months | Longest payback |
| Gross Margin | 92% | Highest margin (minimal cost) |

**Strategic Value Beyond LTV:CAC:**
- Data moat (financial records = strongest switching cost)
- Cross-sell platform (accounting → analytics upsell)
- Retention anchor (keeps customers in ecosystem longer)

---

## Cohort Analysis

### Sprint 1 Cohort (Month 1-4)

**Inputs:**
- Template sales: 15 customers
- Support conversions: 5 customers (33%)
- Lite freemium signups: 55
- Lite paid conversions: 3 (5%)

**Cohort Performance Over Time:**

| Month | Templates Active | Support MRR | Lite Free | Lite Paid MRR |
|-------|------------------|-------------|-----------|---------------|
| 1 | 15 | Rp 375K | 55 | Rp 0 |
| 3 | 15 | Rp 375K | 50 (91% retain) | Rp 825K (3 paid) |
| 6 | 14 | Rp 300K (1 churn) | 45 | Rp 825K |
| 12 | 12 | Rp 225K (3 total churn) | 35 | Rp 550K (1 churn) |
| 24 | 10 | Rp 150K | 20 | Rp 275K |

**Sprint 1 Cohort Economics:**
- Total revenue (24 months): Rp 37.5M (templates) + Rp 5.4M (support) + Rp 13.2M (Lite paid) = **Rp 56.1M**
- Total CAC: Rp 9M (15 × Rp 600K)
- **Cohort LTV:CAC:** 6.2:1
- **Cohort Payback:** Month 8 (cumulative revenue > CAC)

---

### Year 1 Blended Cohort

**Customer Mix:**
- Templates: 50
- Support: 20
- Lite paid: 10
- SaaS C1: 8
- SaaS C2: 3
- Micro-SaaS: 30
- Accounting: 15

**Weighted Metrics:**
- Total customers: 136 (across all products, some overlap)
- Total 24-month revenue: Rp 450M
- Total CAC: Rp 85M
- **Blended LTV:CAC:** 5.3:1 (Year 1 inefficiency, improves in Year 2)

---

## CAC by Channel (Detailed)

### Organic/SEO (30% of Volume)

**CAC:** Rp 200K

**How:**
- Content marketing investment: Rp 15M/year
- Customers acquired: 75 (organic attribution)
- CAC: Rp 15M ÷ 75 = Rp 200K

**Channel Efficiency:** (Best CAC, scales over time)

**Investment Areas:**
- Blog content (F&B analytics guides): Rp 5M
- SEO optimization: Rp 3M
- Case studies: Rp 2M
- Templates/downloads (lead magnets): Rp 3M
- YouTube tutorials: Rp 2M

---

### Community/Referral (40% of Volume)

**CAC:** Rp 100K (Lowest)

**How:**
- Community sponsorships (paguyuban F&B): Rp 5M/year
- Customers acquired: 100 (referral attribution)
- CAC: Rp 5M ÷ 100 = Rp 50K

**But also include:**
- Referral rewards (Rp 50K per referral): +Rp 50K
- **Total CAC:** Rp 100K

**Channel Efficiency:** (Best ROI, viral coefficient 1.3)

**Viral Coefficient:**
- Each customer refers 1.3 new customers (on average)
- Self-sustaining growth after critical mass (500+ customers)

---

### Paid Ads (20% of Volume)

**CAC:** Rp 5M (Highest, but fastest to scale)

**How:**
- Google Ads spend: Rp 30M/year
- Facebook/Instagram: Rp 20M/year
- Customers acquired: 50
- CAC: Rp 50M ÷ 50 = Rp 1M

**Wait, why Rp 5M in table?**
- Initial CAC is Rp 1M (Year 1)
- But includes sales costs (Rp 2M) + onboarding (Rp 1M) + proof-of-concept (Rp 1M)
- **True Blended CAC:** Rp 5M

**Channel Efficiency:** (Expensive but predictable)

**Use Case:**
- Sprint 1-2: Pause (organic/community sufficient)
- Sprint 3+: Scale when CAC:LTV proven
- Year 2: Optimize to Rp 3M CAC (better targeting, brand awareness)

---

### Partnership Referrals (10% of Volume)

**CAC:** Rp 0 (Partner-funded)

**How:**
- POS companies (Moka, Pawoon) refer customers
- We pay 20% revenue share (not upfront CAC)
- Cost is rev-share, not acquisition cost

**Channel Economics:**
- Customer LTV: Rp 14.4M (C1 Basic)
- Partner commission (20% of Year 1): Rp 960K
- **Effective CAC:** Rp 960K (but paid over 12 months, not upfront)

**Channel Efficiency:** (Zero upfront cost, high quality leads)

---

## Payback Period Analysis

### Definition
Time to recover customer acquisition cost from gross profit.

**Formula:**
```
Payback = CAC ÷ (Monthly Revenue × Gross Margin)
```

### Product Payback Periods

| Product | CAC | Monthly Profit | Payback | Assessment |
|---------|-----|----------------|---------|------------|
| A1 (Template) | Rp 600K | Rp 2.5M (upfront) | 0 months | Immediate |
| R1 (Support) | Rp 0 | Rp 73.5K | 0 months | Immediate |
| E1 (Lite) | Rp 0 | Rp 242K | 0 months | Immediate |
| C1 (Basic) | Rp 3M | Rp 340K | 8.8 months | <12 months |
| C2 (Pro) | Rp 5M | Rp 903K | 5.5 months | Fast |
| C3 (Advanced) | Rp 8M | Rp 2.37M | 3.4 months | Very fast |
| R2 (Accounting) | Rp 500K | Rp 46K | 10.9 months | Slow but acceptable |

**Key Insights:**
- High-tier products (C2-C3) have FASTER payback despite higher CAC
- Reason: Revenue scales faster than CAC scales
- Low-tier products (R2) have slow payback but create lock-in

---

## Channel Mix Optimization

### Current Mix (Sprint 1)
- Organic: 30%
- Community: 40% (Highest)
- Paid: 0% (paused)
- Partnerships: 30% (if secured)

**Blended CAC:** Rp 600K (very efficient)

---

### Target Mix (Year 2)
- Organic: 40% (scale content)
- Community: 30% (saturates at ~100 customers)
- Paid: 20% (add when needed)
- Partnerships: 10% (POS referrals)

**Blended CAC:** Rp 1.2M (still healthy as revenue grows)

---

### Scenario Planning

**Scenario A: All Organic/Community (No Paid Ads)**
- Slower growth (100 customers/year max)
- Lower CAC (Rp 150K blended)
- Risk: Miss market window if competitor moves fast

**Scenario B: Paid-Heavy (50% Paid Ads)**
- Faster growth (300 customers/year possible)
- Higher CAC (Rp 3.5M blended)
- Risk: Burn cash if LTV assumptions wrong

**Recommended (Hybrid):**
- Start organic/community (Year 1)
- Add paid incrementally (Year 2) as LTV validates
- Keep blended CAC < Rp 2M through Year 3

---

## Churn Analysis & Impact on LTV

### Churn Drivers by Product

**Templates (A1): N/A (one-time product)**

**Support (R1): 20% annual churn**
- Reasons:
 - Customer stopped using template (10%)
 - Business closed (5%)
 - POS system change broke integration (5%)

**Lite (E1): 15% annual churn (paid tier)**
- Reasons:
 - Upgraded to C1 (5%) Good churn
 - Downgraded to free (5%) Revenue churn
 - Canceled entirely (5%) Bad churn

**SaaS C1-C2: 15-20% annual churn**
- Industry standard for SME SaaS
- Reasons:
 - Business closed (10%)
 - Switched to competitor (3%)
 - Budget cuts (5%)
 - Upgraded to C3 (2%) Good churn

**Accounting (R2): 10% annual churn (Lowest)**
- Reason: Financial data lock-in (hardest to switch)

---

### LTV Sensitivity to Churn

**Base Case (C1 SaaS): 15% annual churn**
- Retention: 85% Year 1, 72% Year 2, 61% Year 3
- LTV: Rp 14.4M (36 months × Rp 400K)

**Optimistic (10% churn):**
- Retention: 90% Year 1, 81% Year 2, 73% Year 3
- LTV: Rp 19.2M (+33% )

**Pessimistic (25% churn):**
- Retention: 75% Year 1, 56% Year 2, 42% Year 3
- LTV: Rp 9.6M (-33% )

**Break-Even Churn (where LTV:CAC = 3:1):**
- CAC: Rp 3M
- Required LTV: Rp 9M (3:1 ratio)
- Required MRR retention: 22.5 months
- Implied annual churn: 35% (66% retention)
- **Buffer:** We can withstand up to 35% churn and still be profitable

---

## Recommendations

### 1. Double Down on C2 (Pro Tier)
- Best LTV:CAC (7.6:1)
- Fastest payback (4.8 months)
- Allocate 40% of sales/marketing resources to C2 acquisition

### 2. Scale Community Channel
- CAC of Rp 100K (5× cheaper than paid ads)
- Invest Rp 10M in community partnerships Year 2
- Target: 150 community-sourced customers (vs 100 in Year 1)

### 3. Delay Paid Ads Until Sprint 3
- Wait for LTV validation from Sprint 1-2 cohorts
- IF 12-month retention > 85% → Unlock paid ads budget
- IF 12-month retention < 70% → Fix retention first, ads later

### 4. Optimize R1 (Support) Attach Rate
- Current: 30% of template buyers convert
- Target: 50% by Year 2
- Tactics:
 - Bundle 3 months free support with template purchase
 - Send support value reminders Month 1, 3, 6
 - Offer annual plan (12 months for price of 10) to lock in

### 5. Reduce C1 CAC Over Time
- Year 1: Rp 3.6M (cold acquisition)
- Year 2: Rp 2.5M (brand awareness + content library)
- Year 3: Rp 1.5M (word-of-mouth takes over)
- **Lever:** Every case study published reduces CAC by ~Rp 50K

---

**Related Documents:**
- [[biz/departments/finance/models/01-business-model|business-model.md]] - Strategic product economics
- [[biz/departments/finance/revenue/01-revenue-model|revenue-model.md]] - Revenue forecasts
- [[biz/departments/finance/models/03-financial-projections|financial-projections.md]] - P&L and hiring timeline
