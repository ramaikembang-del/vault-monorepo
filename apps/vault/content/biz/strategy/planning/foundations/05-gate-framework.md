# Gate Framework
**Strategic Decision Points for Sprint Transitions**

**Framework Owner:** Product Strategy  
**Last Updated:** January 8, 2026  
**Status:** ACTIVE - Sprint 1 Gates Defined

> [!IMPORTANT]
> **Purpose:** Gates are **objective decision points** between sprints that determine if we proceed, iterate, or pivot based on measurable outcomes. They prevent "build-first, validate-later" mistakes.

---

## Executive Summary

### What is a Gate?

A **gate** is a formal checkpoint between development cycles where we:
1. **Measure outcomes** against pre-defined criteria
2. **Decide** whether to proceed, iterate, or pivot
3. **Update assumptions** based on validated learning

**Gates are NOT:**
- ❌ Arbitrary milestones ("We finished building, so ship it")
- ❌ Subjective opinions ("I think users will like it")
- ❌ Sunk-cost traps ("We invested so much, must continue")

**Gates ARE:**
- ✅ Data-driven checkpoints ("Did we hit 50+ users? Yes → Proceed")
- ✅ Learning moments ("Conversion was 10% not 30%, what does that mean?")
- ✅ Permission to pivot ("Template failed but Lite succeeded → Shift strategy")

---

## Gate Philosophy

### Principle 1: Validation Over Vanity

**Bad Gate:** "Did we launch 3 products?" (Output-focused)  
**Good Gate:** "Did 50+ users engage with Lite?" (Outcome-focused)

**Rationale:** Shipping is easy, creating value is hard. Gates measure value creation, not feature completion.

---

### Principle 2: Combined Metrics (AND Logic, Not OR)

**Bad Gate:** "5+ sales OR 50+ users OR Rp 20M revenue" (Any one passes)  
**Good Gate:** "5+ sales AND 50+ users AND 30% Support conversion" (All must pass)

**Rationale:** One-dimensional success masks systemic problems. We need multi-dimensional validation.

---

### Principle 3: Qualitative + Quantitative

**Bad Gate:** "10 sales" (Numbers only)  
**Good Gate:** "10 sales + 5 customer interviews + NPS >7" (Numbers + insights)

**Rationale:** Numbers tell you WHAT happened. Interviews tell you WHY.

---

### Principle 4: Pre-Define Criteria (No Moving Goalposts)

**Bad:** Define success criteria AFTER seeing results  
**Good:** Write gate criteria in Sprint 0, review in Sprint 4 (no changes mid-sprint)

**Rationale:** Prevents confirmation bias ("We got 8 sales but expected 10... but 8 is close enough!"). Criteria set upfront are honest.

---

## Sprint 1 Gates

### Gate 0: Pre-Sprint Launch Criteria

**Purpose:** Verify Sprint 1 is ready to start

**When:** Week 0 (Before Sprint 1 kickoff)

| Criteria | Target | Measured How | Status |
|----------|--------|-------------|---------|
| **Template 50% Complete** | Yes | Code review | ✅ PASS |
| **3+ Verbal Pre-Commitments** | Yes | Sales conversations | ⏳ Pending |
| **Lite Development Environment** | Ready | Dev setup complete | ✅ PASS |
| **Sales Collateral** | Complete | One-pager, pricing sheet exist | ⏳ Pending |

**Decision:**  
- ✅ **PASS (all green):** Start Sprint 1 Week 1
- ⚠️ **PARTIAL:** Delay 1 week to fix blockers
- ❌ **FAIL:** Re-evaluate strategy

---

### Gate 1: Week 2 Checkpoint (Mid-Sprint Check)

**Purpose:** Confirm Sprint 1 is on track or course-correct early

**When:** End of Week 2

#### Quantitative Criteria

| Metric | Minimum (Pass) | Stretch | Actual | Status |
|--------|---------------|---------|--------|---------|
| **Template Sales** | 2+ | 3+ | ___ | ⏳ |
| **Template Pipeline** | 5+ qualified leads | 10+ | ___ | ⏳ |
| **Support Subscribers** | 1+ | 2+ | ___ | ⏳ |
| **Lite Development Progress** | 70% | Beta-ready | ___ | ⏳ |

#### Qualitative Criteria

| Criterion | Pass Condition | Measured How |
|-----------|---------------|--------------|
| **Template Feedback** | Buyers express satisfaction | NPS >6 OR positive testimonial |
| **Lite Feasibility** | No major blockers discovered | Dev team confidence >70% |
| **Sales Messaging** | Pitch resonates | >40% of conversations move to "interested" |

#### Decision Matrix

| Template Sales | Pipeline | Support | Lite Dev | Decision |
|---------------|----------|---------|----------|----------|
| ≥2 | ≥5 | ≥1 | ≥70% | ✅ **PROCEED** to Week 3-4 |
| 1 | 3-4 | 0-1 | 60-69% | ⚠️ **ITERATE:** Extend outreach 1 week, simplify Lite |
| 0 | <3 | 0 | <60% | ❌ **PIVOT:** Pause Template, focus Lite-only OR vice versa |

**Recommended Actions by Outcome:**

**✅ PASS:**  
- Continue Week 3-4 as planned
- Prepare Lite beta launch
- Finalize Week 4 data collection plan

**⚠️ PARTIAL:**  
- **If Template weak:** Lower price (Rp 3.5M → Rp 2.5M early-access), extend outreach
- **If Lite behind:** Cut Phase 1 features, ship minimal viable beta
- **If Support zero:** OK - might convert post-delivery, not critical blocker

**❌ FAIL:**  
- **If Template + Lite both fail:** STOP - fundamental market/product mismatch, need deep pivot
- **If Template fails, Lite on track:** Abandon Template, go all-in on Lite validation
- **If Lite fails, Template succeeds:** OK - Template-first strategy, Lite becomes Sprint 2 focus

---

### Gate 2: Week 4 Sprint Exit (Major Decision Point)

**Purpose:** Determine Sprint 2 strategy based on Sprint 1 outcomes

**When:** End of Week 4 (Sprint 1 completion)

#### Quantitative Criteria

| Metric | Minimum (Pass) | Stretch | Actual | Weight |
|--------|---------------|---------|--------|--------|
| **Template Sales** | 5+ | 10+ | ___ | 30% |
| **Template Revenue** | Rp 20M | Rp 50M | ___ | 25% |
| **Support Subscribers** | 2+ (40% conv) | 5+ (50% conv) | ___ | 10% |
| **Support MRR** | Rp 150K | Rp 450K | ___ | 10% |
| **Lite Downloads** | 50+ | 100+ | ___ | 15% |
| **Lite Active Users** | 10+ (7+ days data) | 20+ | ___ | 5% |
| **Lite Engagement Rate** | 20% (10/50 active) | 30% | ___ | 5% |

**Scoring:**  
Each metric gets 0-10 score (interpolate between minimum and stretch):  
- Minimum = 5/10 (pass)
- Stretch = 10/10
- Below minimum = 0-4/10 (fail)

**Weighted Overall Score = Σ(Score × Weight)**

**Threshold:**  
- **≥7.0/10:** Strong pass → Aggressive Sprint 2
- **5.0-6.9/10:** Conditional pass → Cautious Sprint 2
- **<5.0/10:** Fail → Pivot or iterate Sprint 1

---

#### Qualitative Criteria (Must ALSO Pass)

| Criterion | Pass Condition | Fail Condition | Veto Power? |
|-----------|---------------|----------------|-------------|
| **Template Customer Satisfaction** | NPS ≥7 (3/5 buyers) | NPS <5 OR angry customers | ✅ Yes (Veto) |
| **Lite User Insights Collected** | 5+ user interviews | <3 interviews | ❌ No |
| **Feature Requests Clarity** | Clear top 3 requests emerge | Scattered/conflicting | ❌ No |
| **Support Response Time** | <48h maintained | >72h consistently | ⚠️ Soft veto |

**Veto Power:**  
If Template NPS <5, even if revenue target hit, overall gate = **FAIL** (quality matters more than sales volume for long-term brand)

---

#### Sprint 2 Decision Matrix

**Scenario A: Template PASS + Lite PASS (Best Case)**

| Metric | Result |
|--------|--------|
| Template sales | 7 (Rp 35M) |
| Lite users | 60 downloads, 15 active |
| Overall Score | **7.5/10** |

**Decision:** ✅ **Sprint 2 AGGRESSIVE**  
- Build E1-P2 (Lite paid tier Rp 50-75K/mo)
- Build R2c (COGS Calculator - complements Lite)
- Build R2a (P&L Tracker)
- Budget: Rp 35M enables cloud infrastructure (Supabase Pro)

---

**Scenario B: Template PASS + Lite PARTIAL**

| Metric | Result |
|--------|--------|
| Template sales | 6 (Rp 30M) |
| Lite users | 30 downloads, 5 active (16% engagement) |
| Overall Score | **6.0/10** |

**Decision:** ⚠️ **Sprint 2 CAUTIOUS**  
- Focus on Lite iteration (E1-P1.5: Fix activation, improve onboarding)
- Delay paid tier until engagement hits >20%
- Build R2c (COGS) only IF Lite improves by Week 6
- Budget: Rp 30M reserves cloud spend until Lite validates

**Rationale:** Template revenue buys time, but Lite engagement too low to justify SaaS investment. Fix engagement first.

---

**Scenario C: Template PASS + Lite FAIL**

| Metric | Result |
|--------|--------|
| Template sales | 8 (Rp 40M) |
| Lite users | 20 downloads, 2 active (10% engagement) |
| Overall Score | **5.5/10** |

**Decision:** 🔄 **PIVOT: Template Expansion Strategy**  
- **Abandon Lite** (Phase 1 not ready for analytics, fundamental mismatch)
- **Double down on Template:**
  - Build Tier 2 (50-100 metrics, Rp 7-12M)
  - Build R1 advanced features (custom dashboards, white-label)
  - Target: Phase 2 SME only (Amanda, Budi 2.0)
- **Delay Full SaaS** to Sprint 3+ (no Pillar 3→5 pipeline, must find alternate path)

**Rationale:** Template validates product-led growth with Phase 2, Lite proves Phase 1 NOT ready. Don't force Pillar 3 if data says no.

---

**Scenario D: Template FAIL + Lite PASS**

| Metric | Result |
|--------|--------|
| Template sales | 2 (Rp 10M) |
| Lite users | 80 downloads, 25 active (31% engagement) |
| Overall Score | **5.0/10** |

**Decision:** 🔄 **PIVOT: Freemium SaaS Strategy**  
- **Pause Template** (Phase 2 not willing to pay for one-time product)
- **Go all-in on Lite:**
  - Build E1-P2 paid tier FAST (30-day limit, add 12-month history for Rp 50K/mo)
  - Test freemium→paid conversion (target: 10% of 80 users = 8 paid = Rp 400K MRR)
  - Build C1 (Full SaaS Basic) in Sprint 3 if conversion ≥5%
- **Revenue risk:** Only Rp 10M from Sprint 1, runway pressure increases

**Rationale:** Lite engagement proves Phase 1 wants analytics IF free. Template failure proves Phase 2 won't pay. Freemium is the unlock.

---

**Scenario E: Template FAIL + Lite FAIL (Worst Case)**

| Metric | Result |
|--------|--------|
| Template sales | 1 (Rp 5M) |
| Lite users | 15 downloads, 1 active (6% engagement) |
| Overall Score | **2.5/10** |

**Decision:** 🛑 **STOP: Fundamental Pivot Required**  
- **Pause all product development**
- **Deep customer discovery:**
  - 20+ interviews with Phase 1 & Phase 2 operators
  - Understand: Why didn't Template sell? Why didn't they use Lite?
  - Test alternate hypotheses (wrong price? wrong features? wrong segment?)
- **Options:**
  - Pivot to services (consulting, done-for-you dashboards)
  - Pivot to different vertical (non-F&B, e.g., retail, salons)
  - Pivot to different product form (mobile app, WhatsApp bot)
- **Budget risk:** Only Rp 5M left, ~2 months runway

**Rationale:** Both playbooks failed = fundamental market/product mismatch. More building = burning cash. Must validate new hypothesis before coding.

---

## Gate 3: Sprint 2/3 Boundary (Preview)

**Purpose:** Validate monetization (free→paid conversion) and expand product line

**When:** End of Sprint 2 (Week 8)

**Key Metrics (Preliminary):**

| Metric | Minimum | Stretch |
|--------|---------|---------|
| **Lite Paid Conversion** | 5% (4/80 users) | 10% |
| **Lite MRR** | Rp 200K (4 × Rp 50K) | Rp 500K |
| **COGS Calculator Sales** | 5+ | 10+ |
| **Total MRR (Support + Lite + COGS)** | Rp 500K | Rp 1M |

**Decision Criteria:**  
- ✅ **≥5% conversion:** Build C1 (Full SaaS Basic) in Sprint 3
- ⚠️ **2-4% conversion:** Iterate Lite pricing/value prop
- ❌ **<2% conversion:** Freemium model failed, pivot to paid-only OR higher-value offering

---

## Gate Mechanics

### How Gates Work in Practice

**Week 0 (Gate Definition):**  
1. Product Lead writes gate criteria in [[biz/strategy/planning/execution/03-sprint-1-roadmap|Sprint 1 Roadmap]]
2. Team reviews and approves (no changes allowed mid-sprint)
3. Criteria published

**Week 2 (Gate 1 Execution):**  
1. Data team pulls metrics (actual vs target)
2. Product Lead scores results vs criteria
3. Decision meeting (30 min): Proceed / Iterate / Pivot
4. Document decision in [[biz/templates/internal/decision-record-template|Decision Record]]

**Week 4 (Gate 2 Execution):**  
1. Full data analysis (quantitative + qualitative)
2. Calculate weighted score (Spreadsheet template: gate-scoring-sheet.xlsx)
3. Leadership decision meeting (60 min)
4. Document Sprint 2 plan
5. Communicate to team + stakeholders

---

### Gate Documentation Template

```markdown
GATE REVIEW: [Sprint Name] - Gate [Number]

DATE: [YYYY-MM-DD]

DECISION OWNER: [Name]

QUANTITATIVE RESULTS:

| Metric | Target | Actual | Score | Pass/Fail |
|--------|--------|--------|-------|-----------|
| Metric 1 | X | Y | Z/10 | ✅ / ❌ |
| Metric 2 | X | Y | Z/10 | ✅ / ❌ |

OVERALL SCORE: X.X/10

QUALITATIVE RESULTS:
- [Insight 1 from customer interviews]
- [Insight 2 from team retro]
- [Surprising finding that changes assumptions]

DECISION: [PROCEED / ITERATE / PIVOT]

RATIONALE:
[Why we chose this path based on data]

SPRINT [N+1] PLAN:
[What we will build next sprint]

UPDATED ASSUMPTIONS:
[What we learned that changes our worldview]

STAKEHOLDERS NOTIFIED: [List]
```

---

## Common Gate Mistakes

### Mistake 1: Moving Goalposts

**Bad:** "We targeted 50 users but only got 30... but 30 is still good! Let's proceed."  
**Good:** "We got 30/50 users (60% of target). Gate FAILS. We iterate or pivot per pre-defined criteria."

**Fix:** Write criteria in Week 0, don't change them in Week 4 (except for new data that invalidates original assumptions)

---

### Mistake 2: Ignoring Qualitative Signals

**Bad:** "We got 10 sales (hit target!) so gate passes." (Ignore NPS = 4)  
**Good:** "We got 10 sales but NPS = 4 means customers unhappy. Gate FAILS due to quality veto."

**Fix:** Always include qualitative criteria + veto power for customer satisfaction

---

### Mistake 3: Sunk Cost Fallacy

**Bad:** "We spent 4 weeks building Lite, can't abandon it now."  
**Good:** "Lite failed gate (6% engagement). Sunk cost is gone. What's the best path FORWARD? (Might be abandoning Lite)"

**Fix:** Ask "If we were starting fresh today with current knowledge, would we invest in this?" Ignore sunk costs.

---

### Mistake 4: False Precision

**Bad:** "Gate score: 6.847/10 (Fail, threshold is 6.850)"  
**Good:** "Gate score: ~6.8/10 (Borderline - call judgment, not Excel formulas)"

**Fix:** Gates are decision aids, not autopilots. Use scores to inform judgment, not replace it.

---

## Related Documents

### Strategic Framework
- [[biz/strategy/planning/execution/03-sprint-1-roadmap|Sprint 1 Roadmap]] - Detailed gate criteria for Sprint 1
- [[biz/strategy/planning/execution/01-product-roadmap|Product Roadmap]] - Sprint 2-6 preliminary gates
- [[biz/strategy/frameworks/05-decision-making-framework|Decision-Making Framework]] - How to make gate decisions

### Execution Guides
- [[biz/templates/internal/decision-record-template|Decision Record Template]] - Document gate outcomes
- [[products/01-power-bi-template/operations/06-gate-tracking|Gate Tracking]] - Track gate results over time

---

**Document Status:** ACTIVE  
**Owner:** Product Strategy  
**Last Review:** January 8, 2026  
**Next Review:** End of Sprint 1 (update with actual results)

**Version:** 1.0 (Sprint 1 gates defined, Sprint 2-3 gates preliminary)
