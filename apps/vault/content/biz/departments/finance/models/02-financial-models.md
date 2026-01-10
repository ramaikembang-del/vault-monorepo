# Financial Models - F&B Analytics Platform
**Document Version:** 1.0
**Date:** December 2025
**Status:** Financial Planning Document
**Prepared For:** Finance, Strategy & Leadership Teams

> [!NOTE]
> This document provides detailed financial modeling for the SaaS platform business. For overall business strategy, see [[biz/strategy/execution/01-business-strategy.md|Business Strategy]].

---

## Executive Summary

**Business Model:** Template-to-SaaS conversion funnel with tiered pricing
**Target Metrics (Year 2):**
- 100 customers
- Rp 3.18B ARR
- 72% gross margin
- LTV:CAC ratio of 37:1

**Key Finding:** Business is capital-efficient, cash-positive from Month 3, no external funding required.

---

## E1: Customer Lifetime Value (LTV) Calculation

### By Tier Analysis

#### Basic Tier Customer LTV

```
Pricing: Rp 1.5M/month
Churn rate: 10%/year = 0.83%/month
Customer lifespan: 1/0.0083 = 120 months (10 years)
Discount factor: 0.7 (NPV adjustment)

LTV = Rp 1.5M × 120 × 0.7
 = Rp 126 million
```

**Interpretation:** Each Basic tier customer generates Rp 126M over their lifetime (10-year average retention).

---

#### Pro Tier Customer LTV

```
Pricing: Rp 2.5M/month
Churn rate: 8%/year = 0.67%/month
Customer lifespan: 1/0.0067 = 150 months (12.5 years)
Discount factor: 0.7

LTV = Rp 2.5M × 150 × 0.7
 = Rp 262.5 million
```

**Interpretation:** Pro customers stay longer (lower churn) and pay more, generating 2× the LTV of Basic customers.

---

#### Enterprise Tier Customer LTV

```
Pricing: Rp 7.5M/month (average)
Churn rate: 5%/year = 0.42%/month
Customer lifespan: 1/0.0042 = 238 months (20 years)
Discount factor: 0.7

LTV = Rp 7.5M × 238 × 0.7
 = Rp 1.25 billion
```

**Interpretation:** Enterprise customers have highest retention (mission-critical integration) and 10× LTV vs Basic.

---

### Blended LTV (Portfolio Average)

**Assumed customer distribution:**
- 30% Basic tier
- 60% Pro tier
- 10% Enterprise tier

```
Blended LTV = (0.3 × Rp 126M) + (0.6 × Rp 262.5M) + (0.1 × Rp 1.25B)
 = Rp 37.8M + Rp 157.5M + Rp 125M
 = Rp 320 million per customer (average)
```

**Strategic Implication:** Focus on moving customers UP pricing tiers (Basic → Pro → Enterprise) maximizes total platform LTV.

---

## E2: Customer Acquisition Cost (CAC) Breakdown

### By Acquisition Channel

#### Template Sales Channel

```
Marketing cost: Rp 1-2M per template sold
- Content creation: Rp 500K
- POS partnership referral fee: Rp 500K-1M
- Template payment processing fees: Rp 200K

Conversion to SaaS: 40% (conservative estimate)

CAC for SaaS customer = Rp 1.5M / 0.4
 = Rp 3.75M average
```

**Why this channel is efficient:**
- Template purchase = pre-qualified lead (already values analytics)
- Conversion funnel is warm (not cold outreach)
- Low marketing spend per converted SaaS customer

---

#### Direct SaaS Sales Channel

```
Marketing cost: Rp 3-4M per lead
- Instagram ads: Rp 1M
- Content marketing: Rp 1M
- Direct outreach (VA time): Rp 1-2M

Conversion rate: 10-15% (cold leads)

CAC = Rp 3.5M / 0.125
 = Rp 28M average
```

**Why this channel is expensive:**
- Cold outreach (no prior relationship)
- Longer sales cycle (awareness → consideration → decision)
- Higher qualification requirement

---

#### Organic/Referral Channel

```
Marketing cost: Rp 0-500K per customer
- Word-of-mouth: Rp 0
- Customer referral incentive (1 month free): Rp 500K average

Conversion rate: 30-50% (warm referrals)

CAC = Rp 250K / 0.4
 = Rp 625K average
```

**Why this channel scales:**
- Existing customers do marketing for us
- High trust (referred by peer)
- Nearly zero marginal cost

---

### Blended CAC (Weighted Average)

**Assumed channel mix:**
- 70% from template funnel
- 20% from direct sales
- 10% from organic/referrals

```
Blended CAC = (0.7 × Rp 3.75M) + (0.2 × Rp 28M) + (0.1 × Rp 625K)
 = Rp 2.625M + Rp 5.6M + Rp 62.5K
 = Rp 8.29 million average CAC
```

---

### L TV:CAC Ratio

```
LTV:CAC = Rp 320M / Rp 8.29M
 = 38.6:1
```

**Benchmark comparison:**
- SaaS industry standard: >3:1 (healthy)
- Best-in-class SaaS: >5:1 (excellent)
- **Our ratio: 38:1 (exceptional)**

**Interpretation:** Every Rp 1 spent acquiring a customer returns Rp 38 in lifetime value. This indicates:
1. Highly capital-efficient business model
2. Template funnel strategy is working (low CAC)
3. Strong customer retention (high LTV)

---

## E3: Sensitivity Analysis - Revenue Impact

### Variable 1: Template Conversion Rate

**Question:** What if fewer/more template buyers convert to SaaS?

| Conversion Rate | Year 2 SaaS Customers | Year 2 ARR | Company Valuation (3-5× ARR) |
|----------------|-----------------------|------------|------------------------------|
| **15% (worst case)** | 20 | Rp 600M | Rp 1.8-3B |
| **30% (conservative)** | 40 | Rp 1.2B | Rp 3.6-6B |
| **40% (base case)** | 55 | Rp 1.65B | Rp 4.95-8.25B |
| **50% (optimistic)** | 65 | Rp 2B | Rp 6-10B |

**Strategic Implications:**
- Even at 15% conversion (worst case), business is viable (Rp 1.8B valuation)
- 40-50% conversion is realistic based on customer pain points
- Focus on template quality + conversion funnel optimization

---

### Variable 2: Annual Churn Rate

**Question:** What if customers leave faster/slower than expected?

| Annual Churn Rate | Year 2 Net Customers | Year 2 ARR | ARR Impact vs Baseline |
|-------------------|----------------------|------------|------------------------|
| **5% (best case)** | 105 | Rp 3.3B | +Rp 120M (+3.8%) |
| **10% (base case)** | 100 | Rp 3.18B | Baseline |
| **15% (moderate)** | 93 | Rp 2.95B | -Rp 230M (-7.2%) |
| **25% (worst case)** | 85 | Rp 2.7B | -Rp 480M (-15%) |

**Strategic Implications:**
- Churn has MAJOR impact on ARR (-15% ARR if churn doubles)
- Customer success team is critical investment (reduces churn)
- Focus on retention > acquisition in Year 2+

**Churn Reduction Tactics:**
1. Proactive usage monitoring (alert when usage drops)
2. Quarterly business reviews (Pro/Enterprise)
3. Feature requests → fast implementation (customer-driven roadmap)
4. Annual billing discounts (lock-in for 12 months)

---

### Variable 3: Tier Distribution (Upsell Success)

**Question:** What if more/fewer customers upgrade to higher tiers?

| Customer Distribution | MRR | ARR | Notes |
|-----------------------|-----|-----|-------|
| **50% Basic, 45% Pro, 5% Enterprise** | Rp 218M | Rp 2.62B | Conservative (poor upsell) |
| **30% Basic, 60% Pro, 10% Enterprise** | Rp 265M | Rp 3.18B | **Base case** |
| **20% Basic, 60% Pro, 20% Enterprise** | Rp 323M | Rp 3.87B | Aggressive upsell success |

**Strategic Implications:**
- Tier distribution has +21% ARR upside potential (if upsell works)
- Pro tier is sweet spot (60% should be here)
- Enterprise upsell (10% → 20%) adds Rp 690M ARR

**Upsell Triggers:**
1. Basic → Pro: Customer opens 2+ locations
2. Pro → Enterprise: Customer hits 5+ locations OR needs custom integration
3. Monitor customer growth signals (hiring, expansion announcements)

---

## E4: Break-Even Analysis

### Fixed Cost Structure (Monthly)

```
Hosting (platform infrastructure): Rp 750K
Software tools (analytics, CRM, support): Rp 1M
Support staff (1 person from Month 6): Rp 10M

Total Fixed Costs: Rp 11.75M/month
```

---

### Variable Cost Structure (Per Customer/Month)

```
Hosting (marginal, per customer): Rp 20K
Support time allocation: Rp 100K

Total Variable Cost: Rp 120K/customer/month
```

---

### Break-Even Calculation

```
Revenue per customer (blended average): Rp 1.9M/month

Contribution margin per customer:
= Revenue - Variable Costs
= Rp 1.9M - Rp 120K
= Rp 1.78M/month

Break-even customer count:
= Fixed Costs / Contribution Margin
= Rp 11.75M / Rp 1.78M
= 6.6 customers

Break-even timeline: Month 5-6
(when we reach 7+ paying customers)
```

**Interpretation:**
- Only need 7 customers to cover all costs
- After customer #7, every new customer is pure profit contribution
- Low break-even point = low risk business model

---

## E5: Cash Flow Projection (Year 1, Monthly)

### Detailed Month-by-Month Breakdown

| Month | Template Sales | SaaS MRR | Total Revenue | Costs | Net Cash Flow | Cumulative Cash |
|-------|----------------|----------|---------------|-------|---------------|-----------------|
| **1** | Rp 0 | Rp 0 | Rp 0 | Rp 5M | **-Rp 5M** | -Rp 5M |
| **2** | Rp 4M | Rp 0 | Rp 4M | Rp 5M | **-Rp 1M** | -Rp 6M |
| **3** | Rp 15M | Rp 0 | Rp 15M | Rp 7M | **+Rp 8M** | **+Rp 2M** |
| **4** | Rp 9M | Rp 3M | Rp 12M | Rp 8M | +Rp 4M | +Rp 6M |
| **5** | Rp 12M | Rp 7M | Rp 19M | Rp 10M | +Rp 9M | +Rp 15M |
| **6** | Rp 11M | Rp 12M | Rp 23M | Rp 15M | +Rp 8M | +Rp 23M |
| **7-12** | Rp 60M | Rp 150M | Rp 210M | Rp 90M | +Rp 120M | **+Rp 143M** |

### Key Milestones

 **Month 3:** Cash positive (cumulative +Rp 2M)
 **Month 6:** Sustainable profitability (Rp 23M cash reserve)
 **Month 12:** Rp 143M cash on hand (self-funded growth)

**Conclusion:** No external funding required. Business is bootstrappable.

---

### Cash Flow Assumptions

**Template sales:**
- Month 1-2: Product development (no sales yet)
- Month 3: Launch + initial burst (5 sales × Rp 3M)
- Month 4-12: Steady 3-4 sales/month

**SaaS MRR ramp:**
- Month 1-3: Building product (no SaaS customers)
- Month 4: First 2 conversions (Rp 3M MRR)
- Month 5-6: Accelerating (conversion funnel working)
- Month 7-12: Steady growth to 15-20 customers

**Cost structure:**
- Month 1-2: Minimal (just hosting + tools)
- Month 3-5: Marketing ramps up (customer acquisition)
- Month 6: First support hire (Rp 10M/month salary)
- Month 7-12: Stabilized cost structure

---

## Financial Ratios & Benchmarks

### SaaS Industry Comparisons

| Metric | Our Target | Industry Benchmark | Assessment |
|--------|------------|-------------------|------------|
| **Gross Margin** | 72% | 70-80% | Good (within range) |
| **LTV:CAC Ratio** | 38:1 | >3:1 | Exceptional |
| **CAC Payback Period** | 4-5 months | <12 months | Excellent |
| **Annual Churn Rate** | 10% | 5-10% | Target (need to achieve) |
| **Revenue Growth Rate (Y1→Y2)** | 1,346% | 100-300% | Hyper-growth |
| **Rule of 40** | Growth (1,300%) + Margin (72%) = 1,372% | >40% | Far exceeds |

**Overall Assessment:** Financials are extremely healthy. Template funnel strategy creates capital-efficient growth.

---

## Risk Scenarios & Mitigation

### Downside Scenario: "Everything Goes Wrong"

**Assumptions:**
- Template conversion: 15% (vs 40% base case)
- Churn rate: 25% (vs 10% base case)
- Customer distribution: 50% Basic, 45% Pro, 5% Enterprise (poor upsell)

**Financial Impact:**
```
Year 2 customers: 20 (vs 100 base case)
Year 2 ARR: Rp 436M (vs Rp 3.18B base case)
Company valuation: Rp 1.3-2.2B (vs Rp 10-16B base case)
```

**Mitigation Plan:**
1. Focus on template quality (improve conversion)
2. Aggressive customer success (reduce churn)
3. Extend timeline (reach 100 customers in Year 3 instead of Year 2)

**Still viable:** Even downside scenario creates Rp 1-2B company (profitable business).

---

### Upside Scenario: "Everything Goes Right"

**Assumptions:**
- Template conversion: 50% (vs 40% base case)
- Churn rate: 5% (vs 10% base case)
- Customer distribution: 20% Basic, 60% Pro, 20% Enterprise (excellent upsell)

**Financial Impact:**
```
Year 2 customers: 140 (vs 100 base case)
Year 2 ARR: Rp 5.42B (vs Rp 3.18B base case)
Company valuation: Rp 16-27B (vs Rp 10-16B base case)
```

**Probability:** Moderate (20-30% chance if execution is excellent)

---

## Recommended Actions by Department

### For Finance Team
1. Monitor LTV:CAC ratio monthly (alert if drops below 10:1)
2. Track churn rate by cohort (identify early warning signs)
3. Model cash runway scenarios (ensure 6-12 month buffer)

### For Sales/Marketing Team
1. Optimize template funnel (test messaging, improve conversion)
2. Track CAC by channel (double down on lowest CAC sources)
3. Build referral program (capitalize on organic channel economics)

### For Customer Success Team
1. Implement churn prediction model (usage drops = risk signal)
2. Create tier upgrade playbook (Basic → Pro, Pro → Enterprise)
3. Quarterly business reviews (retention = profitability)

---

**Document Status:** Living Financial Model
**Update Frequency:** Monthly (actual vs projected)
**Owner:** Finance & Strategy Teams
**Last Updated:** December 2025
**Next Review:** Monthly financial close
