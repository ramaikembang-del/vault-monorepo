# Product Development Roadmap: 8-Step Derivation
**Complete 22-Product Prioritization from First Principles**

**Date:** December 26, 2025
**Methodology:** Integrated Prioritization Framework

> [!NOTE]
> **Cultural Context:** This roadmap is validated against Indonesian market realities documented in [[biz/strategy/market-analysis/03-cultural-context|Cultural Context]]. Key cultural considerations embedded in prioritization:
> - **Lite Dashboard scores highest** partly because offline-first = trust feature for Phase 1 personas
> - **Template + Lite parallel** enables community validation before cloud commitment
> - **Sprint 1 marketing** uses Facebook groups, paguyuban referrals (not cold outreach)

---

## Executive Summary

**22 products prioritized across 6 sprints using 8-step integrated methodology.**

| Sprint | Products | Gate |
|--------|----------|------|
| Sprint 1 | Template + Support + Lite | 5+ sales, 50+ users |
| Sprint 2 | Lite P2 + R2c + R2a | 5%+ conversion |
| Sprint 3 | Full SaaS Basic + R2b + R2f | 10+ customers |
| Sprint 4 | SaaS Pro + Micro-SaaS | Scale metrics |
| Sprint 5 | SaaS Advanced + more Micro-SaaS | — |
| Sprint 6+ | Enterprise + Defense | — |

---

## Step 1: Product Universe (22 Products)

| ID | Product | Pillar | Phase | Build | Description |
|----|---------|--------|-------|-------|-------------|
| **A1** | Power BI Template | P1 | 2-3 | 50% done | One-time dashboard (Rp 2-7M) |
| **A2** | Pay-Per-Insight | P1 | 1 | New | Report generation (Rp 10-20K each) |
| **A3** | Embedded Analytics | P1 | 1-3 | BLOCKED | Free via POS partners |
| **A4a** | Staff Scheduling | P1 | 1 | AI-coded | Micro-SaaS Rp 50K/mo |
| **A4b** | Menu Engineering | P1 | 1 | AI-coded | Micro-SaaS Rp 30K/mo |
| **A4c** | Loyalty Builder | P1 | 1 | AI-coded | Micro-SaaS Rp 75K/mo |
| **A4d** | Supplier Tracker | P1 | 1 | AI-coded | Micro-SaaS Rp 40K/mo |
| **A4e** | Waste Tracking | P1 | 1 | AI-coded | Micro-SaaS Rp 25K/mo |
| **R1** | Template Support | P2 | 2 | 1-2 days | Updates + support Rp 75K/mo |
| **R2a** | Simple P&L Tracker | P2 | 1 | AI-coded | Basic income/expense |
| **R2b** | Cash Flow Monitor | P2 | 1 | AI-coded | Daily cash visualization |
| **R2c** | HPP/COGS Calculator | P2 | 1 | AI-coded | Food cost % tied to revenue |
| **R2d** | SAK EMKM Reports | P2 | 1-2 | BLOCKED | Needs accounting expertise |
| **R2e** | Bank Reconciliation | P2 | 2 | BLOCKED | Needs bank API |
| **R2f** | Invoice Management | P2 | 1-2 | AI-coded | Simple invoicing |
| **E1** | Web Dashboard Lite | P3 | 1 | AI-coded | Offline Electron, freemium |
| **E2** | Hosted Power BI | P3 | 2-3 | Manual ops | Managed hosting |
| **D1** | Industry Reports | P4 | 4-5 | BLOCKED | Rp 500K-1M per report |
| **C1** | Full SaaS Basic | P5 | 2 | Cloud | Rp 300-500K/mo |
| **C2** | Full SaaS Pro | P5 | 2-3 | Cloud | Rp 900K-1.2M/mo |
| **C3** | Full SaaS Advanced | P5 | 3-4 | Cloud+API | Rp 2-3.5M/mo |
| **C4** | Full SaaS Enterprise | P5 | 4-5 | Custom | Rp 8M+/mo |

**Note:** Accounting Module broken into 6 sub-modules (R2a-f) for finer-grained prioritization. AI-codeable: R2a, R2b, R2c, R2f. Blocked: R2d (expertise), R2e (bank API).

---

## Step 2: 7-Criteria Scoring

**Scale:** 3=HIGH, 2=MED, 1=LOW, 0=BLOCKED

| ID | Product | Val | Rev | Risk | Eff | Mkt | Strat | Dep | **TOTAL** |
|----|---------|-----|-----|------|-----|-----|-------|-----|-----------|
| E1 | Lite Dashboard | 3 | 0 | 3 | 3 | 3 | 3 | 3 | **18** |
| A1 | Template | 2 | 3 | 3 | 3 | 2 | 1 | 3 | **17** |
| R2c | COGS Calculator | 2 | 2 | 3 | 3 | 2 | 2 | 2 | **16** |
| R2a | P&L Tracker | 2 | 2 | 3 | 2 | 2 | 2 | 2 | **15** |
| R1 | Support | 1 | 2 | 3 | 3 | 1 | 2 | 2 | **14** |
| R2b | Cash Flow | 2 | 1 | 3 | 2 | 2 | 2 | 2 | **14** |
| R2f | Invoice Mgmt | 1 | 2 | 3 | 2 | 2 | 2 | 2 | **14** |
| A4a | Staff Sched | 1 | 2 | 2 | 2 | 2 | 1 | 3 | **13** |
| A4c | Loyalty | 1 | 2 | 2 | 2 | 2 | 1 | 3 | **13** |
| C2 | SaaS Pro | 2 | 3 | 1 | 2 | 2 | 3 | 0 | **13** |
| C1 | SaaS Basic | 3 | 2 | 1 | 1 | 2 | 3 | 0 | **12** |
| A2 | Pay-Per-Insight | 2 | 2 | 2 | 1 | 2 | 1 | 2 | **12** |
| A4b-e | Other Micro | 1 | 1 | 2 | 2 | 2 | 1 | 3 | **12** |
| E2 | Hosted BI | 1 | 2 | 2 | 1 | 1 | 2 | 1 | **10** |
| C3 | SaaS Advanced | 1 | 3 | 1 | 1 | 1 | 3 | 0 | **10** |
| C4 | Enterprise | 1 | 3 | 1 | 0 | 1 | 3 | 0 | **9** |
| A3 | Embedded | 3 | 0 | 1 | 0 | 3 | 2 | 0 | **9** |
| D1 | Reports | 1 | 2 | 1 | 0 | 1 | 3 | 0 | **8** |
| R2d | SAK EMKM | 1 | 2 | 1 | 0 | 2 | 2 | 0 | **8** |
| R2e | Bank Recon | 1 | 2 | 1 | 0 | 1 | 2 | 0 | **7** |

### Scoring Justifications for Top Products

**E1: Web Dashboard Lite (Score: 18)**
- **Validation (3):** Answers foundational question "Will Phase 1 Mikro engage with analytics?" - this is THE critical hypothesis
- **Revenue (0):** Freemium model, no immediate revenue
- **Risk (3) LOW:** Electron app, offline-first, AI-codeable - minimal downside if fails
- **Efficiency (3):** Perfect capability match - AI-coded, no external dependencies
- **Market (3):** Phase 1 TAM = 500K+ F&B Mikro, direct marketing, low friction
- **Strategic (3):** Pillar 3→5 cascade - intentional limits force upgrade to Full SaaS
- **Dependencies (3) NONE:** Can start immediately

**A1: Power BI Template (Score: 17)**
- **Validation (2):** Tests "Will Phase 2 pay for one-time product?" - useful but not foundational
- **Revenue (3):** Rp 20-50M in 2 weeks - fastest path to cash
- **Risk (3) LOW:** 50% already done, familiar tech, reversible
- **Efficiency (3):** Leverage existing work, minimal new development
- **Market (2):** Phase 2 only (tech-savvy operators) - smaller TAM
- **Strategic (1):** Weak cascade - standalone buyers, not platform pipeline
- **Dependencies (3) NONE:** Can launch immediately

**C1: Full SaaS Basic (Score: 12, GATED)**
- **Validation (3):** Tests cloud PMF - critical for platform strategy
- **Revenue (2):** Rp 300-500K MRR per customer - recurring
- **Risk (1) HIGH:** 6-week build, cloud infrastructure commitment
- **Efficiency (1):** Needs cloud infra we don't have yet
- **Market (2):** Phase 2 SME - smaller than Phase 1
- **Strategic (3):** Core of Pillar 5 - central to ecosystem
- **Dependencies (0) BLOCKED:** Needs Lite validation first, needs revenue to fund

---

## Step 3: Constraints Analysis (Week 0 Reality)

### Budget Constraint
- **Status:** Bootstrapped, limited runway
- **Impact:** Cannot afford cloud infrastructure without revenue first
- **Viable:** Only products buildable with near-zero upfront cost

### Capability Constraint

| Available | Not Available |
|-----------|---------------|
| AI-coding capability | Cloud infrastructure (need to fund) |
| Power BI skills (50% done) | SAK EMKM accounting expertise |
| F&B domain expertise | POS partner relationships |
| Electron/offline app | Enterprise sales team |

### Time Constraint
- **Priority:** Need BOTH validation AND revenue (hybrid)
- **Runway:** 2-3 months without revenue before critical pressure

### Dependency Constraint

**Hard Blocked:**
- C1-4: Full SaaS tiers → Need validation from Lite
- D1: Industry Reports → Need platform user data
- A3: Embedded Analytics → Need POS partner

**Soft Dependencies:**
- R1: Template Support → Needs template sales (can build together)
- E2: Hosted BI → Benefits from template traction

---

## Step 4: Viability Filter

**BLOCKED (External Dependencies):**
- A3: Embedded Analytics → Needs POS partner
- R2d: SAK EMKM Reports → Needs accounting expertise
- R2e: Bank Reconciliation → Needs bank API
- D1: Industry Reports → Needs platform user data
- C1-4: Full SaaS → Needs validation + cloud budget

**VIABLE First-Cycle Products:**

| Product | Why Viable |
|---------|-----------|
| **A1: Power BI Template** | 50% done, no dependencies, fast revenue |
| **R1: Template Support** | Simple, builds with Template |
| **E1: Web Dashboard Lite** | No dependencies, AI-codeable, high validation |
| **A4a-c: Micro-SaaS** | No dependencies, AI-codeable |
| **A2: Pay-Per-Insight** | No dependencies, but new build |

---

## Step 5: Inter-Criteria Relationships Applied

### Validation → Risk Reduction
| Product | Validation Value | Risk Reduction for |
|---------|-----------------|-------------------|
| **E1: Lite** | "Will Phase 1 engage?" | C1 becomes lower risk |
| **A1: Template** | "Will Phase 2 pay?" | R1 feasibility |

### Revenue → Resource Expansion
| Product | Revenue Speed | Enables |
|---------|--------------|---------|
| **A1: Template** | Rp 20-50M in 2 weeks | Cloud infrastructure |
| **R1: Support** | Rp 225K+ MRR | Ongoing dev costs |

### Market Penetration → Defense Assets
| Product | TAM Access | Data Generation |
|---------|-----------|-----------------|
| **E1: Lite** | Phase 1 (500K) | Usage patterns, engagement |
| **A4a-c: Micro-SaaS** | Phase 1 (fragmented) | Point solution data |

### Strategic Positioning → Cascade Effects
| Product | Ecosystem Leverage | Cascade |
|---------|-------------------|---------|
| **E1: Lite (Pillar 3)** | | Forces upgrade to Pillar 5 |
| **A1: Template (Pillar 1)** | | Weak (standalone buyers) |

### Resource Efficiency × Validation = Iteration Speed
| Product | Learning Rate |
|---------|--------------|
| **E1: Lite** | × = MAX |
| **A1: Template** | × = HIGH |
| **A4a-c: Micro-SaaS** | × = MED |

---

## Step 6: Sequence Evaluation

### Candidate Combinations

| Combo | Products | Revenue | Validation | Strategic | Verdict |
|-------|----------|---------|------------|-----------|---------|
| **A** | Template only | | | | No Lite validation |
| **B** | Lite only | | | | No revenue |
| **C** | Template + Lite | | | | Best combo |
| **D** | Micro-SaaS focus | | | | Fragmented |
| **E** | Template + Lite + Support | | | | Optimal |

### Why Combo E (Template + Lite + Support) is Optimal

Adding Support to Combo C provides:
- +MRR (recurring revenue starts immediately)
- +Subscription conversion data
- +Pillar 2 coverage
- Minimal additional effort (1-2 day build)

---

## Step 7: Development Loop Modeling

### Cycle 1 (Sprint 1, Weeks 1-4)

**Inputs:**
- Budget: Minimal
- Capabilities: AI-coding, 50% template
- Uncertainty: High

**Build:**
- A1: Finish Template (1-2 weeks)
- R1: Build Support (1-2 days)
- E1: Build Lite Phase 1 (2 weeks, AI-coded)

**Outputs:**
- Revenue: Rp 20-50M + Rp 225-450K MRR
- Users: 50+ Lite
- Data: Engagement, sales velocity, conversion

**Gate 1:** 5+ Template, 50+ Lite, 30% Support conversion

**Constraints Relaxed:**
- Budget: Can afford Supabase
- Validation: Have feature usage data
- Strategic: Lite users = SaaS pipeline

---

### Cycle 2 (Sprint 2, Weeks 5-8)

**Inputs:**
- Budget: Rp 20-50M + MRR
- Capabilities: + Lite codebase
- Uncertainty: Reduced

**Build:**
- E1-P2: Add features + paid tier
- R2c: COGS Calculator (shares Lite logic)
- R2a: P&L Tracker

**Outputs:**
- Revenue: +Rp 1-3M MRR
- Data: Conversion rate, COGS demand

**Gate 2:** 5%+ Lite paid conversion

---

### Cycle 3 (Sprint 3, Weeks 9-16)

**Decision Point:**

**IF Gate 2 passes (>5%):**
- Build C1: Full SaaS Basic
- Build R2b + R2f: Expand Pillar 2
- Target: Phase 2 SME (Amanda, Budi 2.0)

**IF Gate 2 fails (<5%):**
- Build E1-P3: Iterate Lite
- Fix value prop, lower price

**Gate 3:** 10+ C1 customers, <30% churn

---

### Cycles 4-6 (Months 5-12)

| Sprint | Products | Condition |
|--------|----------|-----------|
| Sprint 4 | C2: SaaS Pro, A4a, A4c, A2 | Gate 3 pass |
| Sprint 5 | C3: SaaS Advanced, A4b, A4d, E2 | Scale metrics |
| Sprint 6+ | C4: Enterprise, D1: Reports, A4e | Data moat ready |

---

## Step 8: Complete Priority Order

| Rank | Product | Sprint | Score | Status |
|------|---------|--------|-------|--------|
| 1 | E1: Lite Dashboard | 1 | 18 | BUILD NOW |
| 2 | A1: Template | 1 | 17 | BUILD NOW |
| 3 | R2c: COGS Calculator | 2 | 16 | ⏳ Sprint 2 |
| 4 | R2a: P&L Tracker | 2 | 15 | ⏳ Sprint 2 |
| 5 | R1: Support | 1 | 14 | BUILD NOW |
| 6 | R2b: Cash Flow | 3 | 14 | ⏳ Sprint 3 |
| 7 | R2f: Invoice | 3 | 14 | ⏳ Sprint 3 |
| 8 | A4a: Staff Sched | 4 | 13 | Future |
| 9 | A4c: Loyalty | 4 | 13 | Future |
| 10 | C2: SaaS Pro | 4 | 13 | Future |
| 11 | C1: SaaS Basic | 3 | 12 | ⏳ Sprint 3 |
| 12 | A2: Pay-Per-Insight | 4 | 12 | Future |
| 13-15 | A4b,d,e | 5-6 | 12 | Future |
| 16 | E2: Hosted BI | 5 | 10 | Future |
| 17 | C3: SaaS Advanced | 5 | 10 | Future |
| 18 | C4: Enterprise | 6+ | 9 | Future |
| 19-22 | BLOCKED (A3, R2d, R2e, D1) | — | 7-9 | BLOCKED |

---

## Alternative Sequences Evaluated

### Why NOT Micro-SaaS First?

**Evaluated:** Start with A4a-c (Staff Scheduling, Menu Engineering, Loyalty)

| Criterion | Score | Issue |
|-----------|-------|-------|
| Validation | | Point solutions don't test platform hypothesis |
| Revenue | | Rp 25-75K each, fragmented |
| Strategic | | Weak cascade to Pillar 5 |
| Efficiency | | 3 separate products to build |

**Disqualified:** Fragments focus, doesn't validate core hypothesis, weak pipeline.

---

### Why NOT Template Only (No Lite)?

**Evaluated:** Just finish Template, maximize one-time revenue

| Criterion | Score | Issue |
|-----------|-------|-------|
| Revenue | | Fast cash |
| Validation | | Sales only, not engagement |
| Strategic | | No Pillar 5 pipeline |

**Disqualified:** Can't justify Full SaaS without Lite data, leaves Pillar 3→5 empty.

---

### Why NOT Lite Only (No Template)?

**Evaluated:** Focus purely on validation, skip revenue

| Criterion | Score | Issue |
|-----------|-------|-------|
| Validation | | Maximum learning |
| Revenue | | None |
| Risk | | Can't fund Cycle 2 |

**Disqualified:** Cycle 2 constrained, can't afford cloud, runway risk.

---

## Pillar Build Timeline

```
Sprint: 1 2 3 4 5 6+

Pillar 1: [A1] [A4a,c] [A4b,d] [A4e]
 [A2]
Pillar 2: [R1] [R2c,a] [R2b,f]
Pillar 3: [E1] [E1-P2] [E1-P3] [E2]
Pillar 4: [D1]
Pillar 5: [C1] [C2] [C3] [C4]
```

---

## Sprint 1 Validation Summary

| Aspect | Derived Optimal | Current Plan | Match |
|--------|----------------|--------------|-------|
| Products | Template + Support + Lite | Template + Support + Lite | |
| Timeline | Weeks 1-4 | Weeks 1-4 | |
| Gates | Week 2, Week 4 | Week 2, Week 4 | |
| Revenue Target | Rp 20-50M + MRR | Same | |

**Conclusion:** Fresh 8-step derivation validates Sprint 1 plan as systemically optimal.

---

## Next Steps

1. **Execute Sprint 1** as planned
2. **Collect Gate 1 data** (Week 4)
3. **Re-apply framework** with updated constraints
4. **Determine Cycle 2** based on validation results

---

**Last Updated:** December 26, 2025
**Status:** Complete 22-product roadmap derived via 8-step methodology

