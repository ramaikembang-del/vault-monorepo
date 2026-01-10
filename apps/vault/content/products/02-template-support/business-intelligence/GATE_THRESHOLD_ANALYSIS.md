# R1 Template Support - Gate Threshold Analysis & Recommendations

**Date:** January 6, 2025
**Purpose:** Align gate thresholds with unit economics and market sizing reality
**Status:** CRITICAL MISALIGNMENTS FOUND

---

## Executive Summary

**Finding:** Current gate thresholds in README.md **do not align** with financial models created in unit-economics.md and market-sizing-validation.md.

**Critical Issues:**
1. **Gate 1C timing is impossible** - Says "Week 4" but requires 10 A1 sales first (could take 2+ months)
2. **Year 1 revenue projection is overstated** - Says 30 subscribers, model shows 17 (after churn)
3. **Churn threshold is ambiguous** - Says "Month 1 only" but should be "sustained over 6 months"
4. **Breakeven gate is missing** - No Gate 3 for profitability path validation
5. **Gate 1C pass/fail thresholds need adjustment** - 3 subscribers might not be enough

**Recommendation:** Update gates to match financial reality before Sprint 1 launch.

---

## 1. Issue #1: Gate 1C Timing is Impossible

### Current Gate (README.md Line 104)
```
Sprint 1 Validation (Week 4):
- 30%+ of template buyers subscribe → Service validated
- Gate 1C Decision: 3+ active subscribers → Service validated
```

### The Problem
**Gate 1C requires "first 10 template buyers" but is scheduled for "Week 4"**

**Why this is impossible:**
- Week 4 = 28 days after R1 launch
- A1 template needs to sell 10 units first (Gate 1A)
- A1 Gate 1A timeline: 2 months (conservative) to 1 month (aggressive)
- R1 subscribers need 90 days to convert after A1 purchase (per market-sizing.md)

**Timeline reality:**
```
Day 0: A1 launches
Day 30-60: A1 hits 10 sales (Gate 1A) ← R1 prerequisite
Day 120-150: First 10 A1 buyers have 90 days to convert to R1 ← Gate 1C validation
```

**Gate 1C cannot be validated until Month 4-5, not Week 4.**

### Recommended Fix

**Change Gate 1C timing to:**
```
Gate 1C Validation: Within 90 days of first 10 A1 template sales (Month 3-5)
- Prerequisites: A1 Gate 1A passed (10 template sales)
- Measurement period: 90 days from A1 purchase date for each buyer
- PASS: ≥3 R1 subscribers from first 10 A1 buyers (30%+ conversion)
- MARGINAL: 2 subscribers (20% conversion)
- FAIL: 0-1 subscribers (<10% conversion)
```

**Impact:** Gates now aligned with dependency chain (A1 Gate 1A → R1 Gate 1C).

---

## 2. Issue #2: Year 1 Revenue Projection Overstated

### Current Projection (README.md Line 76-79)
```
Revenue Projection (Year 1):
- 100 template sales × 30% = 30 subscribers
- 30 × Rp 75K = Rp 2.25M MRR (Rp 27M ARR)
- Churn: 20%/month → Steady state: ~18-20 active subscribers
```

### The Problem
**This ignores cumulative churn effect.**

**What the unit economics model shows:**
- 100 template sales (Year 1) → 150 cumulative buyers (per market-sizing.md, conservative scenario)
- 150 buyers × 30% conversion = 45 total conversions
- 45 conversions - 23 churned (57% churn rate over 12 months with 20% monthly churn) = **17 active subscribers**
- 17 × Rp 75K = **Rp 1.28M MRR** (not Rp 2.25M)
- **Rp 11M ARR** (not Rp 27M)

**Current projection overstates Year 1 revenue by 145%** (Rp 27M vs Rp 11M actual).

### Recommended Fix

**Update README.md revenue projection to:**
```
Revenue Projection (Year 1):
- 150 cumulative A1 template buyers (per market-sizing.md)
- 150 × 30% = 45 total R1 conversions
- 20% monthly churn → 23 churned in 12 months (57% cumulative churn)
- Active subscribers (Month 12): 17 (45 conversions - 23 churned)
- MRR (Month 12): 17 × Rp 75K = Rp 1.28M
- ARR (Year 1): Rp 11M (not Rp 27M)
- Status: Unprofitable (loss of Rp 49.2M in Year 1)
- Breakeven: Month 15 (requires 8+ subscribers maintained)
```

**Impact:** Sets realistic expectations. Year 1 is investment year, not profit year.

---

## 3. Issue #3: Churn Threshold is Ambiguous

### Current Threshold (README.md Line 112)
```
Retention:
- <20% churn (month 1) → Service delivers value
- 20-40% churn → Users don't see ongoing value
- >40% churn → Major issues
```

### The Problem
**Says "month 1 only" but churn needs to be sustained metric.**

**Why this is wrong:**
- Month 1 sample size too small (3-5 subscribers → 1 churn = 20-33% churn, meaningless)
- Churn varies month-to-month (1 bad month doesn't mean failure)
- Model assumes 20% monthly churn as **baseline** (not failure threshold)

**What the market-sizing model shows:**
- Year 1 target: 20% monthly churn (baseline, not ideal)
- Year 2 improvement: 15% monthly churn
- Year 3 stabilized: 10% monthly churn

### Recommended Fix

**Replace with sustained churn measurement:**
```
Gate 2: Retention Validation (Month 6)
- Measurement: Average monthly churn rate over Months 1-6
- PASS: <20% average monthly churn (product-market fit validated)
- MARGINAL: 20-25% churn (acceptable, focus on retention improvements)
- FAIL: >25% churn (product not delivering value, major pivot needed)

Why Month 6?
- Larger sample size (6 months × 3-10 subscribers = 18-60 subscriber-months)
- Smooths out monthly variance (1 bad month won't kill validation)
- Aligns with unit economics (6 months = half of Year 1)
```

**Impact:** More statistically valid churn measurement.

---

## 4. Issue #4: Breakeven Gate is Missing

### Current Gates
```
Gate 1C (Week 4): 3+ subscribers
[No Gate 2]
[No Gate 3]
```

### The Problem
**No gate for profitability validation.**

**What the unit economics model shows:**
- **Breakeven subscribers:** 8 (to cover Rp 4.8M monthly fixed costs)
- **Breakeven month:** Month 15 (not Month 12)
- **Year 1 target:** 17 active subscribers (Month 12)
- **Year 1 status:** Loss of Rp 49.2M (not profitable until Year 3)

**Without a breakeven gate, no trigger for "kill vs scale" decision.**

### Recommended Fix

**Add Gate 3 (Month 12): Profitability Path Validation**
```
Gate 3: Profitability Path Validation (Month 12, End of Year 1)

Prerequisites:
- Gate 1C passed (3+ subscribers validated)
- Gate 2 passed (<25% churn validated)

Measurement:
- Active subscribers (Month 12): Target 15+
- MRR (Month 12): Target Rp 1.125M+ (15 subs × Rp 75K)
- Monthly churn: <20% sustained
- Clear path to breakeven by Month 15-18

 PASS: 15+ active subscribers, MRR Rp 1.125M+, <20% churn
 → Action: Scale up (hire support staff, invest in customer portal)

MARGINAL: 10-14 subscribers, MRR Rp 750K-1.05M, 20-25% churn
 → Action: Optimize retention, delay breakeven to Month 18-24, hold on hiring

 FAIL: <10 subscribers, MRR <Rp 750K, >25% churn
 → Action: Kill R1 or pivot to free support (marketing tool, not revenue product)

Why 15+ subscribers?
- 8 subscribers = breakeven (covers fixed costs)
- 15 subscribers = margin of safety (87% above breakeven)
- Gives runway to Month 15 even with 20% monthly churn
```

**Impact:** Clear decision point at end of Year 1 (scale, optimize, or kill).

---

## 5. Issue #5: Gate 1C Thresholds Need Adjustment

### Current Gate 1C Thresholds (README.md Line 122-124)
```
Gate 1C Decision:
- 3+ active subscribers → Service validated, continue
- 1-2 subscribers → Lower price to Rp 50K, try again
- 0 subscribers → Pivot to free support
```

### The Problem
**3 subscribers is below breakeven (need 8), so "service validated" is misleading.**

**What happens with only 3 subscribers:**
- MRR: 3 × Rp 75K = Rp 225K
- Fixed costs: Rp 4.8M/month
- Monthly loss: Rp 4.575M
- Runway: Unlimited losses until reaching 8+ subscribers

**"Service validated" should mean "path to profitability," not just "customers exist."**

### Recommended Fix

**Adjust Gate 1C thresholds:**
```
Gate 1C: Conversion Validation (Within 90 days of first 10 A1 sales)

Measurement: R1 subscribers ÷ first 10 A1 buyers

 PASS (30%+ conversion): 3+ subscribers from 10 A1 buyers
 → Action: Service validated, continue to Gate 2
 → Expectation: If 30% conversion holds, we'll reach 15+ subs by Month 12

MARGINAL (20-29% conversion): 2 subscribers from 10 buyers
 → Action: Iterate on messaging/pricing, monitor next 10 A1 buyers
 → Test: A/B test Rp 50K vs Rp 75K pricing
 → Decision point: If next 10 buyers also convert at 20%, consider lowering price

 FAIL (<20% conversion): 0-1 subscribers from 10 buyers
 → Action: Pivot or kill R1
 → Option 1: Bundle 3 months free support with A1 purchase (marketing tool)
 → Option 2: Kill R1, focus on A2 (Advanced Template) instead

Why 30%+ conversion is critical:
- 30% conversion × 150 A1 buyers (Year 1) = 45 conversions
- 45 conversions - 23 churned (57% Year 1 churn) = 17 active (Month 12)
- 17 > 15 (Gate 3 threshold) → Clear path to profitability by Month 15
- If conversion <20%, we'll only have ~10 active subscribers (Month 12) → Fail Gate 3
```

**Impact:** Gate 1C now predicts Gate 3 outcome (profitability path).

---

## 6. Recommended Gate Structure (Updated)

### Complete Gate Framework

```

 GATE 1C: Conversion Validation
 Timing: Within 90 days of first 10 A1 template sales (Month 3-5)

 Prerequisites:
 - A1 Gate 1A passed (10 template sales)
 - R1 has been offered to all 10 A1 buyers (email + nurture campaign)

 Measurement:
 - R1 subscribers ÷ first 10 A1 buyers (within 90 days of A1 purchase)

 PASS (30%+ conversion): 3+ R1 subscribers
 → Service validated, continue to Gate 2

 MARGINAL (20-29%): 2 subscribers
 → Iterate messaging/pricing, monitor next 10 buyers

 FAIL (<20%): 0-1 subscribers
 → Pivot to free support or kill R1



 GATE 2: Retention Validation
 Timing: Month 6 (6 months after first R1 subscriber)

 Prerequisites:
 - Gate 1C passed (3+ subscribers)
 - Minimum 6 months of subscription data

 Measurement:
 - Average monthly churn rate over Months 1-6

 PASS (<20% churn): Product-market fit validated
 → Continue to Gate 3, churn model is achievable

 MARGINAL (20-25% churn): Acceptable but needs improvement
 → Focus on retention (exit surveys, feature improvements)
 → Delay Gate 3 to Month 12 (give time to reduce churn)

 FAIL (>25% churn): Product not delivering value
 → Major pivot: Improve support quality, add features, or kill R1



 GATE 3: Profitability Path Validation
 Timing: Month 12 (End of Year 1)

 Prerequisites:
 - Gate 1C passed (conversion validated)
 - Gate 2 passed (retention validated)

 Measurement:
 - Active subscribers (Month 12): Target 15+
 - MRR (Month 12): Target Rp 1.125M+ (15 × Rp 75K)
 - Monthly churn: <20% sustained
 - Breakeven projection: Month 15-18

 PASS: 15+ active subs, clear path to Month 15 breakeven
 → SCALE: Hire support staff, build customer portal, invest in growth

 MARGINAL: 10-14 subs, breakeven delayed to Month 18-24
 → OPTIMIZE: Focus on retention, hold on hiring, revisit in 6 months

 FAIL: <10 subs, no path to profitability
 → KILL or PIVOT: Make support free (marketing tool) or kill R1

```

---

## 7. Supporting Metrics (Track but Don't Gate On)

These metrics provide early warning signals but are not gate criteria:

**Support Load (Weekly Tracking):**
- Target: <5 hours/week total support time
- Alert: 5-10 hours/week (need better docs/FAQs)
- Critical: >10 hours/week (price too low or users too demanding)

**Unit Economics (Monthly Tracking):**
- Gross margin: 82% (Rp 61.5K contribution margin per subscriber)
- Fixed costs: Rp 4.8M/month
- Breakeven: 8 subscribers (Rp 600K MRR)
- Current MRR: [Track monthly]

**LTV/CAC Ratio (Quarterly Review):**
- Target: 10x+ (exceptional for upsell product)
- Year 1: 16.7x (Rp 375K LTV ÷ Rp 22.5K CAC)
- Year 2+: 33.3x (Rp 750K LTV ÷ Rp 22.5K CAC)

---

## 8. Changes Required to Documentation

### README.md Updates Needed

**Line 14: Gate Criteria**
```diff
- **Gate Criteria (Gate 1C):** 30%+ attachment rate (3+ subscribers from 10 template buyers)
+ **Gate Criteria (Gate 1C):** 30%+ conversion within 90 days of first 10 A1 sales (Month 3-5)
```

**Line 16: Next Gate**
```diff
- **Next Gate:** Gate 1C → If 30%+ attach, continue; If <15%, make support free
+ **Next Gate:** Gate 1C (Month 3-5) → Gate 2 (Month 6) → Gate 3 (Month 12)
```

**Line 76-79: Revenue Projection**
```diff
- **Revenue Projection (Year 1):**
- 100 template sales × 30% = 30 subscribers
- 30 × Rp 75K = **Rp 2.25M MRR** (Rp 27M ARR)
- Churn: 20%/month → Steady state: ~18-20 active subscribers

+ **Revenue Projection (Year 1):**
+ - 150 cumulative A1 buyers × 30% = 45 total conversions
+ - 45 conversions - 23 churned (57% cumulative) = **17 active subscribers (Month 12)**
+ - MRR (Month 12): Rp 1.28M | ARR (Year 1): Rp 11M
+ - Status: Loss of Rp 49.2M (not profitable until Year 3)
+ - Breakeven: Month 15 (requires 8+ subscribers)
```

**Line 102-124: Success Metrics**
```diff
- ## Success Metrics (Gate 1C)
- **Sprint 1 Validation (Week 4):**

+ ## Success Metrics (3-Gate Framework)
+
+ **Gate 1C: Conversion Validation (Month 3-5)**
+ [Insert complete Gate 1C framework from Section 6]
+
+ **Gate 2: Retention Validation (Month 6)**
+ [Insert complete Gate 2 framework from Section 6]
+
+ **Gate 3: Profitability Path (Month 12)**
+ [Insert complete Gate 3 framework from Section 6]
```

### product-strategy.md Updates Needed

**Line 105-108: Year 1 Projection**
```diff
- **Year 1 Projection:**
- 100 template sales × 30% = 30 subscribers
- 30 × Rp 75K = **Rp 2.25M MRR** (Rp 27M ARR)
- Churn: 20%/month → Steady state: ~18-20 active subscribers

+ **Year 1 Projection:**
+ - 150 cumulative A1 buyers × 30% = 45 conversions
+ - 20% monthly churn → 17 active subscribers (Month 12)
+ - MRR (Month 12): Rp 1.28M | ARR: Rp 11M
+ - Unprofitable Year 1 (loss Rp 49.2M), breakeven Month 15
```

---

## 9. Impact Analysis

### If We Don't Adjust Gates

**Risk 1: False sense of success**
- Hit "Week 4" gate but it's meaningless (no A1 buyers yet)
- Celebrate "30 subscribers" but actually have 17 (after churn)
- Think we're profitable when we're losing Rp 49M/year

**Risk 2: Wrong decisions at critical junctures**
- 3 subscribers at Gate 1C → "validated" → scale up hiring
- Reality: 3 subscribers = Rp 4.575M monthly loss (not sustainable)
- Should wait until 15+ subscribers before scaling

**Risk 3: Misaligned investor/stakeholder expectations**
- Promised Rp 27M ARR, delivered Rp 11M ARR (59% miss)
- Promised profitability Year 1, reality is Year 3
- Lost credibility, harder to raise next round

### If We Adjust Gates

**Benefit 1: Realistic expectations**
- Gates tied to financial reality (8 subscribers = breakeven, 15+ = scale)
- Clear communication: "R1 is 3-year investment, not Year 1 profit"

**Benefit 2: Better decision-making**
- Gate 1C predicts Gate 3 outcome (if 30% conversion, we'll hit 15+ subs)
- Gate 2 validates retention model (if >25% churn, we won't reach profitability)
- Gate 3 gives clear scale/optimize/kill decision point

**Benefit 3: Stakeholder trust**
- Set conservative targets, exceed them (better than overpromise/underdeliver)
- Gates match financial models (credibility)

---

## 10. Recommendations

### Immediate Actions (Before Sprint 1 Launch)

1. **Update README.md** with corrected gates (Section 8 changes)
2. **Update product-strategy.md** with realistic Year 1 projections
3. **Create gate-validation-checklist.md** (how to measure each gate)
4. **Communicate changes** to stakeholders (founders, investors, team)

### Gate Validation Timeline

```
Month 0: R1 launches (alongside A1)
Month 1-2: A1 reaches 10 sales (Gate 1A prerequisite)
Month 3-5: First 10 A1 buyers have 90 days to convert → GATE 1C VALIDATION
 ↓
Month 6: 6 months of churn data → GATE 2 VALIDATION
 ↓
Month 12: Year 1 ends, assess active subscribers → GATE 3 VALIDATION
 ↓
Month 15: Target breakeven (8+ subscribers, Rp 600K MRR)
```

### Success Criteria Summary

| Gate | Timing | Metric | Pass Threshold | Action if Pass | Action if Fail |
|------|--------|--------|----------------|----------------|----------------|
| **1C** | Month 3-5 | Conversion rate | 30%+ (3+ of 10) | Continue to Gate 2 | Pivot or iterate pricing |
| **2** | Month 6 | Monthly churn | <20% average | Continue to Gate 3 | Improve retention or kill |
| **3** | Month 12 | Active subscribers | 15+ subscribers | Scale (hire, invest) | Optimize or kill R1 |

---

## 11. Conclusion

**Current gates are dangerously misaligned with financial reality.**

**Key changes needed:**
1. Move Gate 1C from "Week 4" to "Month 3-5" (after A1 Gate 1A)
2. Reduce Year 1 revenue projection from Rp 27M to Rp 11M (reality)
3. Add Gate 2 (retention) and Gate 3 (profitability path)
4. Clarify that Year 1 is investment year (loss of Rp 49M), not profit year

**Without these changes:**
- We'll make wrong decisions (scale too early, burn cash)
- We'll miss targets (promised Rp 27M, delivered Rp 11M)
- We'll lose stakeholder trust

**With these changes:**
- Gates predict financial outcomes (30% conversion → 15+ subs → Month 15 breakeven)
- Clear decision points (scale/optimize/kill at each gate)
- Realistic expectations set with stakeholders

**Recommendation: Update gates immediately before Sprint 1 launch.**

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-06 | Business Intelligence | Initial analysis based on unit economics + market sizing |

---

**Related Documents:**
- [[products/02-template-support/business-intelligence/subscription-unit-economics|Subscription Unit Economics]] - Source of breakeven/profitability data
- [[products/02-template-support/business-intelligence/market-sizing-validation|Market Sizing Validation]] - Source of conversion/churn assumptions
- [[products/02-template-support/02-template-support|02-template-support.md]] - Current (incorrect) gate thresholds
- [[products/02-template-support/product-strategy/product-strategy|Product Strategy]] - Revenue projections

---

**Next Steps:**
1. Review this analysis with founding team
2. Update README.md and product-strategy.md with corrected gates
3. Create gate-validation-checklist.md for operational execution
4. Communicate gate changes to all stakeholders

---

**END OF GATE THRESHOLD ANALYSIS**
