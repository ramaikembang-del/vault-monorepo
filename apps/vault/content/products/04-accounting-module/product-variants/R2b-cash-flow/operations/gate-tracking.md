# Gate 2C Tracking Dashboard - Cash Flow Forecasting

**Product:** R2b - Cash Flow Forecasting
**Product ID:** R2b
**Gate:** Gate 2C (Launch & Cash Module Validation)
**Target Date:** Week 14 (Sprint 3 mid-point)
**Owner:** Product Lead

---

## Gate 2C Overview

**Purpose:** Validate R2b as third successful R2 accounting module (after R2a P&L, R2c COGS).

**Context:** Gate 2C smaller than 2A/2B (R2b is most niche - only scaling businesses with cash complexity).

**Strategic Impact:** If R2c passes  ->  validates full R2 series  ->  continue to R2f (Invoicing). If fails  ->  accounting series saturated, pivot to SaaS.

---

## Success Criteria (Gate 2C)

| Metric | Excellent | Pass | Current | Status |
|--------|-----------|------|---------|--------|
| **Paid Subscribers** | 15+ | 12 | 0 | Not Started |
| **MRR** | Rp 1.5M+ | Rp 900K | Rp 0 | Not Started |
| **Activation (Cash Setup)** | 75%+ | 70% | 0% | Not Started |
| **Weekly Forecast Checks** | 75%+ | 70% | 0% | Not Started |
| **Runway Visibility** | 90%+ | 85% | 0% | ⚪ Pending |

**Metric Definitions:**

**1. Paid Subscribers:** Paying Basic (Rp 75K) or Standard (Rp 100K) customers
- **Why 12 minimum?** Smaller than R2a (20) / R2c (15) because R2b is niche (scaling businesses only)

**2. MRR:** Total monthly subscription revenue
- **Calculation:** (# Basic Ã— Rp 75K) + (# Standard Ã— Rp 100K)
- **Why Rp 900K minimum?** 12 Ã— Rp 75K = Supports minimal operations

**3. Activation:** % who complete cash setup (link 1+ bank account OR manual entry, add 5+ recurring payments)
- **Why 70%?** Cash setup more complex than R2a expense entry. 70% = good UX.

**4. Weekly Forecast Checks:** % of active users who view 30-day forecast weekly
- **Why 70%?** If <70%, product isn't habit-forming  ->  high churn risk

**5. Runway Visibility:** % who set up enough data to see meaningful runway (cash + burn rate tracked)
- **Why 85%?** Runway = core value prop. If <85% can't see it, product fails.

---

## Weekly Tracking Sheet (Week 12-14)

### Week 12 (Soft Launch)

| Day | New Subs | Total Subs | MRR | Activated (Cash Setup) | Weekly Checks | Runway Visible |
|-----|----------|------------|-----|------------------------|---------------|---------|
| Mon | | | Rp | | | |
| ... | | | Rp | | | |
| **Week 12 Total** | **__** | **__** | **Rp __** | **__%** | **__%** | **__%** |

**Week 12 Target:** 5 subscribers, Rp 375K MRR, 72%+ activation

---

### Week 13-14 (Public Launch & Validation)

| Week | New Subs | Total Subs | MRR | Activation % | Weekly Checks % | Runway Visible % |
|------|----------|------------|-----|--------------|-----------------|------------------|
| Week 13 | | | Rp | | | |
| Week 14 | | | Rp | | | |
| **Total (Week 14)** | **__** | **__** | **Rp __** | **__%** | **__%** | **__%** |

**Week 14 Target (Gate 2C):** 12+ subscribers, Rp 900K+ MRR, 70%+ activation/weekly checks

---

## Decision Trees (Gate 2C Week 14)

### Scenario A: PASS [x]

**Conditions:**
- [x] Subscribers >= 12
- [x] MRR >= Rp 900K
- [x] Activation >= 70%
- [x] Weekly Checks >= 70%
- [x] Churn <15% Month 1

**Decision:** **Approve R2f (Invoicing) Development**

**Next Actions:**
1. **Build R2f Invoicing** (Week 15-18) - complete R2 series
2. **Scale R2 bundles:** Promote R2a+R2b+R2c "Complete Accounting" (Rp 225K)
3. **Marketing:** Target multi-outlet owners (Rp 5M/month ad spend)

**Budget:** Rp 40M (R2f development + scaled marketing)

---

### Scenario B: PARTIAL PASS [!]

**Conditions:**
- [!] Subscribers: 8-11 (below target)
- [!] Activation: 60-69% (complex setup)
- [x] Weekly Checks >= 70% (engaged users love it)

**Analysis:** **Product works for engaged users, but setup too complex OR market smaller than expected.**

**Decision:** **Pause R2f. Simplify R2b Setup.**

**Next Actions:**
1. **UX Fix:** Reduce activation steps (pre-fill bank accounts from plaid, auto-detect burn rate)
2. **Pricing Test:** Launch Rp 50K "Cash Alerts Only" tier (no forecast, just payment reminders)
3. **DO NOT build R2f yet**

**Re-Evaluation:** Gate 2C.1 in 4 weeks

---

### Scenario C: FAIL [x]

**Conditions:**
- [x] Subscribers < 8
- [x] Activation < 60% (setup too hard)
- [x] Weekly Checks < 50% (not habit-forming)

**Analysis:** **Cash flow forecasting not valued by Mikro OR product too complex.**

**Decision:** **KILL R2b. Stop R2 Series Expansion.**

**Options:**
1. **Stop R2 Series:** R2a/R2c stay, don't build R2b/R2f. Focus on SaaS (C1).
2. **Pivot to "Cash Alerts Only":** Simpler product (payment reminders only, no forecast).Rp 50K/month.

---

## Related Documents

**Product Context:**
- [[products/04-accounting-module/product-variants/R2b-cash-flow/R2b-cash-flow|../]] - R2b overview
- [[products/04-accounting-module/product-variants/R2b-cash-flow/product-scope|product-scope.md]] - Feature breakdown

**Strategic Context:**
- [[biz/strategy/planning/execution/01-product-roadmap|09-product-roadmap.md]] - R2 series sequence
- [[products/02-template-support/operations/gate-tracking|r2a gate-tracking.md]] - Gate 2A precedent
- [[products/01-power-bi-template/operations/06-gate-tracking|r2c gate-tracking.md]] - Gate 2B precedent

---

**Last Updated:** 2025-12-26
**Owner:** Product Lead
**Gate 2C Decision Meeting:** End of Week 14



---

**Related Documents:**
- [[products/04-accounting-module/04-accounting-module|Product Overview]] - Main product documentation
- [[products/04-accounting-module/product-variants/product-variants|Product Variants Hub]] - All variants



