# Product Strategy Framework
**Systematic Approach to Product Decisions**

**Framework Owner:** Product Strategy Team  
**Last Updated:** January 8, 2026  
**Status:** ACTIVE FRAMEWORK

> [!IMPORTANT]
> **Purpose:** This framework guides ALL product decisions - what to build, when to build it, how to prioritize features, and when to sunset products.

---

## Executive Summary

### Framework Philosophy

**Product strategy is about saying NO more than saying YES.**

Every "Yes" to Feature A is a "No" to Features B, C, D. This framework helps make those tradeoffs systematically, not emotionally.

### Three Core Questions

1. **WHAT to build?** (Product selection) → Use 7-Criteria Scoring
2. **WHEN to build it?** (Sequencing) → Use Dependency Analysis + Gates
3. **HOW MUCH to build?** (Feature scope) → Use MVP Framework

---

## Part 1: WHAT to Build (7-Criteria Scoring)

### Overview

**Purpose:** Score products/features on 7 dimensions to create objective priority ranking

**Scale:** 0-3 points per criterion (0 = Blocked/Bad, 1 = Low, 2 = Medium, 3 = High)

**Threshold:** Score ≥14/21 to build, <14 = reject or defer

---

### Criterion 1: Validation Value (Learning)

**Question:** How much does this reduce product/market uncertainty?

**Scoring:**
- **3 (High):** Answers a foundational question (e.g., "Will Phase 1 Mikro use analytics?")
- **2 (Medium):** Validates a hypothesis (e.g., "Will Tier 1 buyers upgrade to Tier 2?")
- **1 (Low):** Confirms existing knowledge (e.g., "Yes, customers want reports in Bahasa")
- **0 (None):** No learning (purely revenue play)

**Example:** E1 Lite Dashboard = 3 (tests critical Phase 1 engagement hypothesis)

---

### Criterion 2: Revenue Potential

**Question:** How much revenue can this generate in 12 months?

**Scoring:**
- **3 (High):** Rp 100M+ per year
- **2 (Medium):** Rp 30-99M per year
- **1 (Low):** Rp 1-29M per year
- **0 (None):** No direct revenue (free product)

**Example:** A1 Template = 3 (Rp 470M target Year 1)

---

### Criterion 3: Risk Level (Reversibility)

**Question:** How easy to undo if this fails?

**Scoring:**
- **3 (Low Risk):** Fully reversible (can kill project, minimal sunk cost)
- **2 (Medium Risk):** Partially reversible (some wasted effort but learnings remain)
- **1 (High Risk):** Hard to reverse (customer commitments, contracts)
- **0 (Blocked):** Irreversible (regulatory, brand damage)

**Example:** E1 Lite = 3 (AI-coded in 2 weeks, easy to abandon)

---

### Criterion 4: Resource Efficiency

**Question:** Do we have the capability to build this NOW?

**Scoring:**
- **3 (High):** Can build with existing team/tools (AI-codeable, familiar tech)
- **2 (Medium):** Need light external help (contractor, API integration)
- **1 (Low):** Requires new hire or major learning curve
- **0 (Blocked):** No capability, can't build

**Example:** A1 Template = 3 (Power BI skills in-house, 50% already done)

---

### Criterion 5: Market Readiness

**Question:** Is the market ready to buy this?

**Scoring:**
- **3 (High):** Customers actively asking for it (demand exists)
- **2 (Medium):** Problem exists, need to educate on solution
- **1 (Low):** Early adopters only, mass market not ready
- **0 (None):** No demand (we're guessing)

**Example:** E1 Lite = 3 (Phase 1 knows they have problems, open to digital tools)

---

### Criterion 6: Strategic Alignment

**Question:** Does this feed into our long-term platform vision?

**Scoring:**
- **3 (High):** Critical to ecosystem (e.g., Lite validates SaaS, creates upgrade pipeline)
- **2 (Medium):** Supports ecosystem (e.g., add-on modules increase LTV)
- **1 (Low):** Standalone value only (e.g., one-off consulting gig)
- **0 (None):** Off-strategy (distracts from core business)

**Example:** E1 Lite = 3 (Pillar 3→5 cascade, unlocks Full SaaS investment)

---

### Criterion 7: Dependencies

**Question:** Can we start building this NOW or are we blocked?

**Scoring:**
- **3 (None):** No blockers, can start immediately
- **2 (Soft):** Prefer to wait (e.g., benefit from other product's learnings)
- **1 (Hard):** Must wait (blocked by Gate or product dependency)
- **0 (Blocked):** Cannot build (external dependency, e.g., need POS partner agreement)

**Example:** C1 Full SaaS = 0 (blocked until E1 Lite validates Phase 1 engagement)

---

### Scoring Example: Sprint 1 Products

| Product | Val | Rev | Risk | Eff | Mkt | Strat | Dep | **TOTAL** | Decision |
|---------|-----|-----|------|-----|-----|-------|-----|-----------|----------|
| **E1 Lite** | 3 | 0 | 3 | 3 | 3 | 3 | 3 | **18/21** | ✅ BUILD NOW |
| **A1 Template** | 2 | 3 | 3 | 3 | 2 | 1 | 3 | **17/21** | ✅ BUILD NOW |
| **R1 Support** | 1 | 2 | 3 | 3 | 1 | 2 | 2 | **14/21** | ✅ BUILD NOW |
| **C1 SaaS Basic** | 3 | 2 | 1 | 1 | 2 | 3 | 0 | **12/21** | ❌ DEFER (blocked) |
| **Micro-SaaS A4a** | 1 | 2 | 2 | 2 | 2 | 1 | 3 | **13/21** | ⚠️ MAYBE (borderline) |

**Threshold:** ≥14 = Build, 12-13 = Evaluate further, <12 = Reject

---

## Part 2: WHEN to Build (Sequencing Logic)

### Dependency Types

**Type 1: Technical Dependency (HARD BLOCK)**
- Example: Can't build Tier 3 without Tier 1 codebase
- Rule: MUST build prerequisites first

**Type 2: Validation Dependency (GATE BLOCK)**
- Example: Can't build Full SaaS until Lite validates engagement
- Rule: MUST pass gate before proceeding

**Type 3: Resource Dependency (SOFT BLOCK)**
- Example: Prefer to build Simple P&L before Complex Forecasting (learn from simpler version first)
- Rule: SHOULD sequence logically, but can override if needed

**Type 4: Market Dependency (TIMING)**
- Example: Launch Ramadan-themed features 2 months before Ramadan
- Rule: Align with external calendar

---

### Sequencing Decision Tree

```
START: Should we build Product X?

1. Check Dependencies:
   → Blocked by Tech/Validation? → DEFER (Build prerequisite first)
   → Soft dependency only? → Continue

2. Check Current Capacity:
   → Team at 100%? → DEFER (Finish current sprint first)
   → Have bandwidth? → Continue

3. Check Strategic Priority:
   → Score ≥17? → BUILD NOW (High priority)
   → Score 14-16? → BUILD NEXT (Queue for next sprint)
   → Score <14? → REJECT (Don't build)
```

---

### Sprint Planning Framework

**Sprint = 4-week development cycle**

**Capacity:** 160 hours/person (40h/week × 4 weeks)

**Allocation:**
- 60% New feature development (96h)
- 20% Bug fixes / Support (32h)
- 20% Research / Planning (32h)

**Rule:** Never exceed 80% planned capacity (leave 20% buffer for unknowns)

---

## Part 3: HOW MUCH to Build (MVP Framework)

### MVP Philosophy

**MVP = Minimum Viable Product**
- ✅ Solves core problem
- ✅ Delivers aha moment
- ❌ NOT fully polished
- ❌ NOT feature-complete

**Anti-Pattern:** "MVPx" (Not a viable product, just a prototype)

---

### Feature Prioritization (MoSCoW Method)

**MUST Have:** Without this, product doesn't work
- Example (E1 Lite): Manual data entry, basic P&L chart, CSV export

**SHOULD Have:** Significantly improves experience, but can launch without
- Example: 30-day history vs 7-day, category breakdown

**COULD Have:** Nice-to-have, but cut if timeline tight
- Example: Dark mode, custom colors

**WON'T Have (This Version):** Explicitly out of scope
- Example: Mobile app, API integrations, AI predictions

---

### MVP Validation Checklist

Before calling something "MVP-ready", verify:

- [ ] **Core Job-to-be-Done:** Does it solve the primary pain? (Yes/No)
- [ ] **Aha Moment:** Does user "get it" within first 5 minutes? (Test with 3 users)
- [ ] **Complete User Flow:** Can user signup → use → get value WITHOUT asking for help? (Yes/No)
- [ ] **Quality Bar:** Zero critical bugs, acceptable UX (not beautiful, just usable)

**If any answer = No, NOT MVP-ready**

---

## Part 4: Product Lifecycle Management

### Stage 1: Introduction (Weeks 1-8)

**Goal:** Achieve product-market fit

**Metrics:**
- Setup success rate >80%
- NPS >6 (customer satisfaction)
- Repeat usage >30% (within 7 days)

**Decision Criteria:**
- ✅ **Proceed:** If all metrics hit → Scale to Growth stage
- ⚠️ **Iterate:** If 1-2 metrics miss → Fix issues, re-launch
- ❌ **Kill:** If NPS <4 AND usage <10% → Product failed, sunset

---

### Stage 2: Growth (Months 3-12)

**Goal:** Scale customer acquisition

**Metrics:**
- Monthly new customers (MoM growth >20%)
- CAC:LTV ratio (<1:3)
- Customer retention (>85% at Month 6)

**Investment:** Scale marketing, sales team

**Decision Criteria:**
- ✅ **Proceed:** If growth sustained → Move to Maturity
- ⚠️ **Iterate:** If growth stalls → Fix acquisition engine
- ❌ **Pivot:** If CAC too high → Change GTM strategy

---

### Stage 3: Maturity (Year 2+)

**Goal:** Maximize profit, maintain market share

**Metrics:**
- Gross margin >80%
- Market share >30% (in target segment)
- Churn <5% per year

**Investment:** Defend position, optimize costs

**Strategy:** Milk cash cow, invest in next-generation products

---

### Stage 4: Decline (Year 4+)

**Signals:**
- Revenue flat or declining (MoM -5%+)
- Churn increasing (>10% per year)
- New customer acquisition cost rising

**Decision:** Sunset OR Pivot
- **Sunset:** Migrate customers to newer product, stop selling
- **Pivot:** Major redesign, reposition to new market

---

## Part 5: Product Portfolio Balance

### Portfolio Health Metrics

**Balanced Portfolio Should Have:**
- 40% Introduction/Growth (future revenue)
- 40% Maturity (current cash cow)
- 20% Experimentation (learning, high-risk)

**Current State (Sprint 1):**
- 100% Introduction (A1 Template + E1 Lite + R1 Support)
- 0% Maturity (no products are mature yet)
- 0% Experimentation (no high-risk bets)

**This is OK for Sprint 1** (early-stage company), but must shift to balanced portfolio by Year 2

---

### Portfolio Decision Matrix

| Scenario | Action |
|----------|--------|
| **Too many Introduction products** (>60%) | PAUSE new launches, mature existing products first |
| **Only Maturity products** (>80%) | INVEST in new products, avoid stagnation |
| **Too much Experimentation** (>30%) | FOCUS, kill low-performers, double down on winners |

---

## Part 6: Feature Prioritization Framework (RICE)

### RICE Scoring Formula

**RICE = (Reach × Impact × Confidence) / Effort**

**Reach:** How many customers affected in next quarter?
- Count users (e.g., 100 customers use this feature)

**Impact:** How much improvement per customer?
- 3 = Massive (10x better)
- 2 = High (3x better)
- 1 = Medium (1.5x better)
- 0.5 = Low (marginal improvement)

**Confidence:** How certain are we about Reach/Impact?
- 100% = Know for sure (validated)
- 80% = High confidence (strong signal)
- 50% = Medium (hypothesis)
- 20% = Low (pure guess)

**Effort:** How many person-months to build?
- 0.1 = Few hours
- 1 = One person-month
- 5 = Team of 5 for 1 month

**Priority = RICE Score (descending order)**

---

### Example: E1 Lite Feature Prioritization

| Feature | Reach | Impact | Confidence | Effort | RICE Score | Priority |
|---------|-------|--------|------------|--------|------------|----------|
| **Manual data entry** | 100 | 3 | 100% | 1 | **(100×3×1.0)/1 = 300** | 1 |
| **CSV export** | 100 | 2 | 90% | 0.5 | **(100×2×0.9)/0.5 = 360** | 1 (tie) |
| **Dark mode** | 50 | 0.5 | 80% | 1 | **(50×0.5×0.8)/1 = 20** | 5 |
| **Multi-location consolidation** | 20 | 3 | 70% | 3 | **(20×3×0.7)/3 = 14** | 4 |
| **7-day history** | 100 | 1 | 100% | 0.2 | **(100×1×1.0)/0.2 = 500** | 1 (highest) |

**Build Order:** 7-day history → CSV export → Manual entry → Multi-location → Dark mode (cut if time short)

---

## Part 7: Sunset Framework

### When to Kill a Product

**Kill if ANY of these:**
1. **No traction:** <5 customers after 6 months
2. **Negative NPS:** <4 (customers actively unhappy)
3. **High support burden:** Support cost >50% of revenue
4. **Strategic misalignment:** Distracts from core business
5. **Tech debt:** Maintenance cost >30% of dev capacity

---

### Sunset Process

**Step 1: Decide (Week 1)**
- Leadership decision: Kill vs Iterate vs Sell
- Document rationale in [[biz/templates/internal/decision-record-template|Decision Record]]

**Step 2: Notify Customers (Week 2-4)**
- Email all users: "Product sunsetting in 90 days"
- Offer migration path (free upgrade to newer product OR refund)

**Step 3: Wind Down (Week 5-12)**
- Stop new sales immediately
- Maintain for existing customers (90-day grace period)
- Migrate willing customers to replacement product

**Step 4: Full Shutdown (Week 13)**
- Turn off servers/stop support
- Archive codebase (don't delete - may need revival)
- Post-mortem: What did we learn?

---

## Related Documents

### Strategic Frameworks
- [[biz/strategy/planning/execution/01-product-roadmap|Product Roadmap]] - 22-product priority order using this framework
- [[biz/strategy/planning/foundations/06-prioritization-framework|Prioritization Framework]] - Deep dive on 8-step methodology
- [[biz/strategy/frameworks/05-decision-making-framework|Decision-Making Framework]] - General decision process

### Execution Tools
- [[biz/strategy/planning/foundations/05-gate-framework|Gate Framework]] - When to proceed/pivot/kill
- [[biz/strategy/planning/execution/03-sprint-1-roadmap|Sprint 1 Roadmap]] - Applied framework for Sprint 1

---

**Document Status:** ACTIVE FRAMEWORK  
**Owner:** Product Strategy Team  
**Last Review:** January 8, 2026  
**Next Review:** Quarterly (End of Q1)

**Version:** 1.0
