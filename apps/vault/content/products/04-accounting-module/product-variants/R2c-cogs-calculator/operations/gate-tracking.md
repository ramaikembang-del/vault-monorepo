# Gate 2B Tracking Dashboard - COGS/HPP Calculator

**Product:** R2c - COGS/HPP Calculator
**Product ID:** R2c
**Pillar:** P2 - Retention (Accounting Add-On)
**Gate:** Gate 2B (Launch & Product-Market Fit Validation)
**Target Date:** Week 10 (Sprint 2 end - after R2a validates)
**Owner:** Product Lead

---

## Gate 2B Overview

**Purpose:** Validate that R2c has sufficient demand among production-heavy F&B businesses to justify continued development of accounting modules (R2f Invoicing next).

**Strategic Context:** Gate 2B is conditional on R2a success. If R2a fails Gate 2A, R2c doesn't launch. If R2c fails Gate 2B, we stop accounting module expansion and pivot to E1 paid tiers or C1 SaaS.

**Cross-Reference:** See [[biz/strategy/planning/execution/01-product-roadmap|09-product-roadmap.md]] for R2-series sequencing and [[products/02-template-support/operations/gate-tracking|r2a gate-tracking.md]] for Gate 2A precedent.

---

## Success Criteria (Gate 2B)

### Primary Metrics (Must Pass All)

| Metric | Target (Excellent) | Minimum (Pass) | Current | Status |
|--------|-------------------|----------------|---------|--------|
| **Paid Subscribers** | 20+ | 15 | 0 | Not Started |
| **MRR (Monthly Recurring Revenue)** | Rp 2M+ | Rp 1.125M | Rp 0 | Not Started |
| **Activation Rate (5+ recipes)** | 70%+ | 60% | 0% | Not Started |
| **Engagement Rate (weekly COGS check)** | 60%+ | 50% | 0% | Not Started |
| **COGS % Improvement** | 5%+ avg | 3% | N/A | ⚪ Pending |

**Metric Definitions:**

**1. Paid Subscribers:** Number of users paying for Basic (Rp 75K) or Standard (Rp 100K) tier.
- **Why 15 minimum?** Smaller than R2a (15 vs 20) because R2c is more niche (production businesses only vs all F&B for R2a).
- **Why 20 target?** 20 recipe-using customers = statistically significant for feature priority decisions.

**2. MRR:** Total monthly subscription revenue.
- **Calculation:** (# Basic subs Ã— Rp 75K) + (# Standard subs Ã— Rp 100K)
- **Why Rp 1.125M minimum?** 15 customers Ã— Rp 75K avg = Rp 1.125M. Covers part-time support + basic ops.
- **Why Rp 2M target?** 20 customers Ã— Rp 100K = Rp 2M. Funds next module (R2f) development.

**3. Activation Rate:** % of signups who create 5+ recipes within 7 days.
- **Why 60% minimum?** Recipe entry is tedious. 60% activation = product UX is "good enough".
- **Why 70% target?** Pre-filled templates should make recipe creation easier than competitors (70% vs 40% industry).

**4. Engagement Rate:** % of active users who check COGS dashboard weekly.
- **Why 50% minimum?** If <50% check weekly, product isn't habit-forming  ->  high churn risk.
- **Why 60% target?** Weekly COGS check = users are actively managing costs (signal of value).

**5. COGS % Improvement:** Average COGS % reduction from initial to Month 1.
- **Why 3% minimum?** Users should see measurable margin improvement (e.g., 35%  ->  32% COGS).
- **Why 5% target?** 5% COGS improvement on Rp 50M annual revenue = Rp 2.5M/year savings = 25Ã— ROI on R2c.

---

## Weekly Tracking Sheet (Week 8-10)

**Note:** R2c launches Week 8 (after R2a Gate 2A pass in Week 6)

### Week 8 (Launch Week)

| Day | New Subs | Total Subs | MRR | Activated (5+ recipes) | Engagement | Recipes Created | Ingredients Logged |
|-----|----------|------------|-----|------------------------|------------|------------------|-------------------|
| Mon | | | Rp | | | | |
| Tue | | | Rp | | | | |
| Wed | | | Rp | | | | |
| Thu | | | Rp | | | | |
| Fri | | | Rp | | | | |
| Sat | | | Rp | | | | |
| Sun | | | Rp | | | | |
| **Week 8 Total** | **__** | **__** | **Rp __** | **__%** | **__%** | **__** | **__** |

**Week 8 Target:** 7 subscribers, Rp 525K MRR, 65%+ activation

---

### Week 9-10 (Growth & Validation)

| Week | New Subs | Total Subs | MRR | Activation % | Engagement % | Avg COGS Improvement | Notes |
|------|----------|------------|-----|--------------|--------------|---------------------|-------|
| Week 9 | | | Rp | | | | |
| Week 10 | | | Rp | | | | |
| **Total (Week 10)** | **__** | **__** | **Rp __** | **__%** | **__%** | **__%** | **Gate Decision** |

**Week 10 Target (Gate 2B):** 15-20 subscribers, Rp 1.125M-2M MRR, 60-70% activation, 3-5% COGS improvement

---

## Leading Indicators (Predictive Metrics)

### Indicator 1: "First Recipe Created" Rate (Day 1)

**Definition:** % of new signups who create at least 1 recipe within first 24 hours.

**Target:** >80% (If <60%, onboarding is broken)

**Why It Matters:** Users who don't create 1 recipe on Day 1 have 95% churn rate within 7 days.

**Weekly Tracking:**
| Week | Sign-ups | Created 1+ Recipe (Day 1) | First Recipe % |
|------|----------|---------------------------|----------------|
| Week 8 | | | |

**Intervention:** If Week 8 rate <60%, add more onboarding prompts or reduce signup friction.

---

### Indicator 2: Recipe Completion Rate (5+ recipes by Day 7)

**Definition:** % of users who reach activation threshold (5 recipes) within 7 days.

**Target:** >60% (If <40%, recipe entry is too tedious)

**Why It Matters:** 5 recipes = 80% coverage of typical menu. Below this, users don't see full value.

**Weekly Tracking:**
| Week | Active Users (Day 7) | Created 5+ Recipes | Completion % |
|------|----------------------|--------------------|--------------|
| Week 8 | | | |

**Intervention:** If Rate <40%, test pre-filled recipe templates or offer "Recipe Setup Service" (paid).

---

### Indicator 3: Ingredient Purchase Logging Rate (Week 1)

**Definition:** % of active users who log at least 5 ingredient purchases within Week 1.

**Target:** >40% (If <20%, users don't understand importance)

**Why It Matters:** Accurate ingredient costs are critical for COGS calculation. Without this, recipe costs are guesses.

**Weekly Tracking:**
| Week | Active Users | Logged 5+ Ingredients | Logging % |
|------|--------------|----------------------|-----------|
| Week 8 | | | |

**Intervention:** If Rate <20%, send educational email: "Without ingredient prices, your COGS is inaccurate."

---

### Indicator 4: COGS Dashboard Views (Weekly)

**Definition:** Average COGS dashboard views per active user per week.

**Target:** >3 views/week (If <1, users aren't engaged)

**Why It Matters:** High dashboard views = users are actively managing costs (habit formation).

**Weekly Tracking:**
| Week | Active Users | Total Dashboard Views | Avg Views/User |
|------|--------------|----------------------|----------------|
| Week 8 | | | |

**Intervention:** If Avg <1, send weekly nudge: "Check this week's COGS trends."

---

## Decision Trees (Gate 2B Meeting)

### Scenario A: PASS (Green Light) [x]

**Conditions (ALL must be met):**
- [x] Total Subscribers >= 15
- [x] MRR >= Rp 1.125M
- [x] Activation Rate >= 60%
- [x] Engagement Rate >= 50%
- [x] Avg COGS Improvement >= 3%
- [x] Month 1 Churn ≤ 15%

**Decision:** **Approve R2f (Invoice Management) Development**

**Next Actions:**
1. **Scale Marketing:** Target bakery/catering communities (Rp 7M/month ad spend)
2. **Build R2f (Invoicing):** Start development (Week 11-14)
3. **Bundle Push:** Promote R2a+R2c bundle to existing R2a customers (expect 30% attach rate)
4. **Premium Tier Test:** Launch "Recipe Audit" paid onboarding (Rp 500K setup fee)
5. **Hire Recipe Specialist:** Dedicated support for complex COGS questions (Rp 8M/month)

**Budget Allocation:**
- R2f Development: Rp 30M (4 weeks)
- Marketing Scale: Rp 7M/month
- Support Hire: Rp 8M/month
**Total New Spend:** Rp 60M over 3 months

**ROI Justification:** 15 customers  ->  40 customers in 3 months (R2c+R2f bundle) = Rp 4M MRR = break-even Month 9.

---

### Scenario B: PARTIAL PASS (Yellow Light) [!]

**Conditions:**
- [!] Subscribers: 10-14 (below target but not zero)
- [!] MRR: Rp 750K-1.1M
- [x] Activation Rate >= 60% (product works when used)
- [x] Engagement Rate >= 50%
- [!] COGS Improvement: 1-2% (marginal value)

**Analysis:** **Product works, but market is smaller than expected OR pricing too high.**

**Decision:** **Pause R2f. Fix R2c GTM First.**

**Next Actions:**
1. **DO NOT build R2f yet** (wait until 15+ subscribers)
2. **Pricing Experiment:** Test Rp 50K entry tier (currently Rp 75K minimum)
3. **Target Audience Expansion:**
 - Phase 1 coffee shops (simpler recipes, lower barrier)
 - Add "Lite" tier: 10 recipes max, Rp 50K/month
4. **Bundle Discount:** Increase R2a+R2c bundle discount from 14% to 25% (Rp 150K  ->  Rp 135K)
5. **Meet Again in 4 Weeks:** Gate 2B.1 re-evaluation

**Budget:** Hold R2f budget. Spend only Rp 5M/month on pricing/GTM experiments.

---

### Scenario C: FAIL (Red Light) [x]

**Conditions (ANY of these):**
- [x] Subscribers < 10 after 3 weeks
- [x] Activation Rate < 40% (recipe entry too hard)
- [x] Engagement Rate < 30% (no habit formation)
- [x] Month 1 Churn > 30% (bleeding users)
- [x] COGS Improvement < 1% (no measurable value)

**Analysis:** **No product-market fit for R2c OR product is fundamentally broken.**

**Decision:** **KILL R2c OR Deep Pivot.**

**Options:**

**Option 1: Kill R2c (Accounting Module)**
- Sunset R2c over 2 months (notify users, offer refunds)
- Stop accounting module series (R2f, R2b canceled)
- Reallocate resources to E1 Paid Tiers or C1 SaaS
- **Cost:** Rp 20M sunk (R2c development), but prevent Rp 60M further waste (R2f/R2b)

**Option 2: Deep Pivot - Simplify to "COGS Lite"**
- **If Activation < 40%:** Recipe entry too complex. Build "Quick COGS Estimator" (5 ingredients max, no full recipes)
- **If Engagement < 30%:** Users don't care about weekly tracking. Pivot to "Monthly COGS Audit" (consultant service, not SaaS)
- **If COGS Improvement < 1%:** Wrong value prop. Pivot to "Waste Detection" (variance analysis only, skip recipe costing)

**Option 3: Bundle-Only Strategy**
- Stop standalone R2c sales
- Only offer as bundle with R2a (Rp 150K total = mandatory for production businesses)
- Test if mandatory bundling increases R2a attach rate for bakeries/catering

**Re-Evaluation:** If pivot, reassess in 8 weeks (Gate 2B.2).

---

## Competitive Benchmarks

| Metric | R2c Target | Full Inventory (Moka) | Industry Standard (Recipe Software) |
|--------|------------|----------------------|-------------------------------------|
| Activation Rate (5 recipes) | 70% | ~30% (complex setup) | 50-60% |
| Month 1 Churn | <15% | ~20% | 15-25% |
| Month 3 Churn | <10% | ~12% | 10-15% |
| COGS Improvement | 5% | 3-5% (with consultant help) | 3-4% (DIY) |

**R2c Advantage:** Simpler than full inventory systems. Should outperform on activation. If we don't, UX is broken.

---

## Risk Mitigation

### Risk 1: "Recipe Entry is Too Tedious" (UX Risk)

**Early Signal:** <40% activation rate (5+ recipes by Day 7)

**Mitigation:**
- Pre-filled recipe templates for common items (Chocolate Cake, White Bread, Latte)
- Bulk import from Excel (users often have existing recipe spreadsheets)
- Offer paid "Recipe Setup Service" (Rp 500K - we build first 10 recipes for them)

---

### Risk 2: "Target Market Too Small" (Market Risk)

**Early Signal:** <10 subscribers after 3 weeks (low demand)

**Mitigation:**
- Expand to Phase 1 coffee shops (simpler use case - 5-10 drink recipes)
- Add "COGS Estimator" feature (quick estimate without full recipe, lower barrier)
- Bundle with R2a by default (mandatory for all production businesses)

---

### Risk 3: "No Measurable Value" (Product Risk)

**Early Signal:** Users report <1% COGS improvement or "I already knew my costs"

**Mitigation:**
- Focus messaging on **waste detection** (variance analysis) not just recipe costing
- Add **pricing optimizer** feature earlier (immediate ROI - "Raise price Rp 3K for Rp 150K/day extra revenue")
- Survey churned users: "Why didn't R2c help you?"

---

## Implementation Checklist

### Tech Readiness (1 Week Before Launch - Week 7)

**Product:**
- [ ] Recipe database tested with 50 sample recipes
- [ ] Weighted average cost calculation verified (manual checks vs algorithm)
- [ ] COGS % dashboard loads in <2 seconds
- [ ] Pricing optimizer tested (edge cases: free items, very high COGS)
- [ ] R2a integration tested (COGS sync to P&L expense)

**Infrastructure:**
- [ ] Database supports 100 concurrent users
- [ ] Recipe import (CSV) handles 100-ingredient recipes
- [ ] Backup: Daily backups, 90-day retention
- [ ] Monitoring: Slack alerts for recipe calculation errors

---

### Marketing Readiness (1 Week Before Launch - Week 7)

**Content:**
- [ ] Email blast to R2a users (target: bakeries, catering from signup data)
- [ ] "Why COGS Matters" landing page (SEO: "kalkulator HPP makanan")
- [ ] 3 case studies: Bakery, Catering, Coffee Shop with COGS improvement results
- [ ] Instagram carousel: "Is Your Menu Profitable? Calculate Recipe Costs"
- [ ] WhatsApp group seeding (Komunitas Pemilik Bakery, Katering Indonesia)

**Channels:**
- [ ] Facebook ad campaign (Rp 7M/month, targeting "Bakery Owner" + "Catering Business")
- [ ] Google Ads keywords ("cara hitung HPP kue", "biaya produksi makanan")
- [ ] Partnership outreach: Supplier wholesalers (cross-promote to bakery customers)

---

### Support Readiness (1 Week Before Launch - Week 7)

**Documentation:**
- [ ] "How to Create Your First Recipe" video (3 mins, Indonesian)
- [ ] "Understanding COGS % - Healthy Ranges" guide (25-35% for most F&B)
- [ ] "Variance Analysis Explained" article
- [ ] Recipe troubleshooting FAQ (10 Q&As)

**Team:**
- [ ] 1 support rep trained on recipe costing concepts (can explain COGS % targets)
- [ ] Support email: support-r2c@[company].com
- [ ] SLA: <24h email, <4h WhatsApp (Premium tier)

---

## Related Documents

**Product Context:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/R2c-cogs-calculator|../]] - R2c overview & success metrics
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/product-scope|product-scope.md]] - What's in/out of R2c
- [[onboarding-guide|onboarding-guide.md]] - Recipe activation flow

**Strategic Context:**
- [[biz/strategy/planning/execution/01-product-roadmap|09-product-roadmap.md]] - R2 series sequencing (R2a  ->  R2c  ->  R2f)
- [[biz/strategy/planning/foundations/06-prioritization-framework|08-prioritization-framework.md]] - Gate methodology
- [[products/02-template-support/operations/gate-tracking|r2a gate-tracking.md]] - Gate 2A precedent

---

**Last Updated:** 2025-12-26
**Owner:** Product Lead
**Gate 2B Decision Meeting:** End of Week 10 (2 weeks after R2c launch)



