# Decision-Making Framework

**Framework Type:** Strategic & Operational Decisions
**Owner:** Strategy Team
**Last Updated:** January 8, 2026
**Status:** ACTIVE FRAMEWORK

---

## Executive Summary

### Framework Purpose

This framework provides a **structured approach** to making business decisions across all levels of the organization. It ensures decisions are:
- **Consistent** (same criteria applied each time)
- **Reversible** (understand which decisions can be undone)
- **Data-informed** (facts over opinions)
- **Documented** (create institutional memory)

### When to Use This Framework

**Always Use For:**
- Strategic decisions (product roadmap, market expansion, pricing changes)
- High-cost decisions (>Rp 10M investment, hiring, partnerships)
- Irreversible decisions (brand changes, customer commitments, technology stack)

**Optional For:**
- Tactical decisions (daily operations, minor budget allocation)
- Urgent decisions (security incidents, customer escalations)
- Routine decisions (procurement, standard SOPs)

### Decision Types

| Type | Examples | Reversibility | Required Approval |
|------|----------|--------------|-------------------|
| **Type 1: One-Way Door** | Brand name change, customer contract, key hire | Hard to reverse | Founder + board |
| **Type 2: Two-Way Door** | Pricing test, marketing campaign, feature experiment | Easy to reverse | Department lead |
| **Type 3: Routine** | Office supplies, standard customer support | Fully reversible | Individual contributor |

---

## Part 1: Decision-Making Process (5 Steps)

### Step 1: Define the Decision

**Objective:** Clearly articulate what decision needs to be made

**Template:**

```
DECISION TITLE: [One-sentence description]

DECISION OWNER: [Name / Role]

DECISION TYPE: [Type 1 / Type 2 / Type 3]

CONTEXT:
- What problem are we solving?
- What triggered this decision need?
- What's the current state?

DECISION QUESTION:
Should we [option A] or [option B] or [option C]?

SUCCESS CRITERIA:
How will we know if this was the right decision?
- Metric 1: [e.g., Revenue increases by 20%]
- Metric 2: [e.g., Customer NPS > 70]
- Metric 3: [e.g., Breakeven within 6 months]

DEADLINE:
When must this decision be made? [Date]

REVERSIBILITY:
- Type 1 (hard to reverse): Explain why
- Type 2 (easy to reverse): Explain how to undo
```

**Example:**

```
DECISION TITLE: Should we launch Tier 3 (Enterprise) in Sprint 1 or delay to Sprint 2?

DECISION OWNER: Product Lead

DECISION TYPE: Type 2 (Two-Way Door - can delay or accelerate later)

CONTEXT:
- Current state: Alpha 0.1 has Tier 1 only
- Beta customers asking for multi-outlet features (Tier 2-3)
- Limited dev resources in Sprint 1

DECISION QUESTION:
Should we launch Tier 3 in Sprint 1 (Jan-Mar 2026) or delay to Sprint 2 (Apr-Jun 2026)?

SUCCESS CRITERIA:
- Sprint 1 revenue target: Rp 470M (need Tier 1+2, not necessarily Tier 3)
- Customer retention: >85% (can we retain Tier 3 prospects if we delay?)
- Development quality: Zero critical bugs in Tier 1-2

DEADLINE: January 15, 2026 (Sprint 1 kickoff)

REVERSIBILITY: Type 2
- If we launch Tier 3 and it's buggy, we can pause sales and fix
- If we delay Tier 3 and lose customers, we can't get them back (but low risk given small Tier 3 pipeline)
```

---

### Step 2: Gather Data

**Objective:** Collect relevant facts, not opinions

**Data Sources:**

**Quantitative Data:**
- Customer data (usage, retention, NPS)
- Financial data (revenue, costs, ROI)
- Market data (TAM/SAM, competitor pricing)
- Operational data (capacity, timelines, resources)

**Qualitative Data:**
- Customer interviews (what do they need?)
- Team input (what's feasible?)
- Expert opinions (industry benchmarks)
- Case studies (what did others do?)

**Data Collection Template:**

```
QUANTITATIVE FACTS:
1. [Fact 1 with source]
 - Example: "5 beta customers requested multi-outlet (Tier 2-3 feature)" [Source: CRM notes]
2. [Fact 2 with source]
 - Example: "Tier 3 development estimates: 200 hours" [Source: Dev team]
3. [Fact 3 with source]
 - Example: "Sprint 1 capacity: 400 hours total" [Source: Resource planning]

QUALITATIVE INSIGHTS:
1. [Insight 1]
 - Example: "Beta customers said 'I'd buy Tier 3 if available, but Tier 2 is good enough for now'" [Source: Customer interviews]
2. [Insight 2]
 - Example: "Dev team confidence: High for Tier 1-2, Low for Tier 3 (complexity unknown)" [Source: Sprint planning]

ASSUMPTIONS:
1. [Assumption 1 - state clearly]
 - Example: "Assume no Tier 3 customers churn if we delay 3 months" [Risk: Medium]
2. [Assumption 2]
 - Example: "Assume Tier 1-2 revenue sufficient for Sprint 1 target (Rp 470M)" [Risk: Low]
```

---

### Step 3: Generate Options

**Objective:** Create 3-5 viable options (not just A vs B)

**Option Template:**

```
OPTION 1: [Name]

DESCRIPTION:
[What would we do?]

PROS:
- Pro 1
- Pro 2
- Pro 3

CONS:
- Con 1
- Con 2
- Con 3

COSTS:
- Financial: Rp X
- Time: Y hours/weeks
- Opportunity cost: What we'd give up

RISKS:
- Risk 1 (probability: Low/Medium/High, impact: Low/Medium/High)
- Risk 2

SUCCESS PROBABILITY: X% (educated guess)
```

**Example (Tier 3 Decision):**

```
OPTION 1: Launch Tier 3 in Sprint 1

DESCRIPTION:
Build and launch Tier 3 (100-150 metrics, white-glove setup) alongside Tier 1-2 in Sprint 1 (Jan-Mar 2026)

PROS:
- Capture Tier 3 demand immediately (5 beta prospects)
- Complete product line from day 1
- Premium positioning (high-end offering available)

CONS:
- Stretches dev resources thin (200 hours for Tier 3 = 50% of Sprint 1 capacity)
- Risk of bugs in all 3 tiers (quality spread across more features)
- Complex sales (harder to position 3 tiers vs 1-2 tiers)

COSTS:
- Financial: Rp 0 (same dev cost, just prioritization)
- Time: 200 hours dev time
- Opportunity cost: Can't build Tier 1-2 polish features

RISKS:
- Tier 3 ships with bugs (probability: Medium, impact: High - damages premium reputation)
- Tier 1-2 suffer from lack of polish (probability: Medium, impact: Medium)

SUCCESS PROBABILITY: 50% (achievable but risky)

---

OPTION 2: Delay Tier 3 to Sprint 2

DESCRIPTION:
Focus Sprint 1 on Tier 1-2 only. Build Tier 3 in Sprint 2 (Apr-Jun 2026)

PROS:
- Higher quality Tier 1-2 (100% focus on 2 tiers, not 3)
- More time to validate Tier 3 requirements (3 more months of customer discovery)
- Less complexity in Sprint 1 launch

CONS:
- Lose 5 Tier 3 beta prospects (might buy competitor or hire analyst)
- Incomplete product line (can't serve enterprise segment)
- Delayed revenue from Tier 3 (3 months = ~Rp 60M lost revenue)

COSTS:
- Financial: Rp 60M opportunity cost (lost Tier 3 revenue Q1)
- Time: 0 (just prioritization shift)
- Opportunity cost: Can't serve enterprise customers for 3 months

RISKS:
- Tier 3 prospects churn to competitors (probability: Low, impact: Medium - only 5 prospects)
- Sprint 2 priorities change, Tier 3 delayed again (probability: Low, impact: Low)

SUCCESS PROBABILITY: 80% (safe, proven approach)

---

OPTION 3: Tier 2.5 "Lite Enterprise" in Sprint 1

DESCRIPTION:
Ship a "Tier 2.5" with 70% of Tier 3 features (e.g., 80 metrics, no white-label, basic setup support)

PROS:
- Serves enterprise need (captures 5 prospects)
- Lower dev cost than full Tier 3 (100 hours vs 200 hours)
- Less risky than jumping straight to Tier 3

CONS:
- Confusing positioning (Tier 1, 2, 2.5, eventually 3?)
- May not satisfy enterprise needs (if 70% features = 50% value, customers won't buy)
- Technical debt (building interim solution, then rebuilding Tier 3 later)

COSTS:
- Financial: Rp 0
- Time: 100 hours dev
- Opportunity cost: Mixed messaging, potential customer confusion

RISKS:
- Customers reject Tier 2.5 as "not enterprise enough" (probability: Medium, impact: High)
- Internal complexity managing 3 tiers + 1 "lite" tier (probability: High, impact: Medium)

SUCCESS PROBABILITY: 40% (creative but risky)
```

---

### Step 4: Decide Using Decision Matrix

**Objective:** Score options against criteria, pick the winner

**Decision Matrix Template:**

| Criteria | Weight | Option 1 | Option 2 | Option 3 |
|----------|--------|----------|----------|----------|
| **Revenue Impact** | 30% | Score × Weight | Score × Weight | Score × Weight |
| **Quality/Risk** | 25% | | | |
| **Customer Satisfaction** | 20% | | | |
| **Resource Efficiency** | 15% | | | |
| **Strategic Alignment** | 10% | | | |
| **TOTAL SCORE** | 100% | | | |

**Scoring:** 1-10 scale (1 = terrible, 10 = excellent)

**Example (Tier 3 Decision):**

| Criteria | Weight | Option 1: Launch T3 Sprint 1 | Option 2: Delay T3 Sprint 2 | Option 3: T2.5 Lite |
|----------|--------|---------------------------|--------------------------|-----------------|
| **Revenue Impact** | 30% | 7 (Rp 60M gain) = 2.1 | 5 (Rp 60M loss) = 1.5 | 6 (Rp 30M gain?) = 1.8 |
| **Quality/Risk** | 25% | 4 (high bug risk) = 1.0 | 9 (low risk) = 2.25 | 5 (confusion risk) = 1.25 |
| **Customer Sat** | 20% | 8 (serves all segments) = 1.6 | 6 (loses T3 prospects) = 1.2 | 5 (maybe satisfies?) = 1.0 |
| **Resource Efficiency** | 15% | 5 (stretches team) = 0.75 | 9 (focused effort) = 1.35 | 7 (moderate) = 1.05 |
| **Strategic Alignment** | 10% | 8 (complete product line) = 0.8 | 7 (phased approach) = 0.7 | 4 (muddled strategy) = 0.4 |
| **TOTAL SCORE** | 100% | **6.25** | **7.0** | **5.5** |

**Decision:** Option 2 (Delay Tier 3 to Sprint 2) wins with score 7.0

---

### Step 5: Document & Communicate

**Objective:** Record decision for institutional memory, communicate to stakeholders

**Decision Record Template:**

```
DECISION RECORD

DECISION ID: [YYYY-MM-DD]-[short-name]
Example: 2026-01-15-tier-3-delay

DECISION: [One sentence - what we decided]
Example: We will delay Tier 3 launch to Sprint 2 (Apr-Jun 2026) and focus Sprint 1 on Tier 1-2 only.

DECISION DATE: [Date]

DECISION OWNER: [Name]

RATIONALE:
[Why we chose this option - summary of decision matrix]
Example:
- Quality over speed: Tier 1-2 with 100% focus yields higher quality than 3 tiers with split focus
- Low churn risk: Only 5 Tier 3 prospects, low probability they churn to competitors in 3 months
- Resource efficiency: 400 hours Sprint 1 capacity better spent on 2 tiers than 3

REJECTED OPTIONS:
- Option 1: Launch Tier 3 Sprint 1 (score: 6.25/10) - Too risky, spreads team thin
- Option 3: Tier 2.5 Lite (score: 5.5/10) - Confusing positioning, doesn't solve customer need

SUCCESS METRICS:
- Sprint 1 Tier 1-2 quality: Zero critical bugs at launch
- Sprint 1 revenue: >Rp 470M (validate Tier 1-2 sufficient)
- Tier 3 prospect retention: 4/5 (80%) still interested in Sprint 2

REVIEW DATE: March 31, 2026 (end of Sprint 1)

REVERSIBILITY: This decision can be reversed if:
- Tier 3 prospects start churning (>2 lost to competitors)
- Sprint 1 capacity frees up (e.g., Tier 1-2 development faster than expected)

STAKEHOLDERS NOTIFIED:
- Product team (email sent Jan 15)
- Sales team (update: focus on Tier 1-2 only in Sprint 1 sales)
- Beta customers (email: "Tier 3 coming Sprint 2, here's Tier 2 for now")
```

---

## Part 2: Decision Frameworks by Type

### 2.1 Product Decisions

**Framework:** RICE Scoring (Reach, Impact, Confidence, Effort)

**Use For:** Feature prioritization, product roadmap, sprint planning

**Template:**

| Feature | Reach (users affected) | Impact (1-3 scale) | Confidence (% certain) | Effort (dev hours) | RICE Score |
|---------|----------------------|-------------------|----------------------|-------------------|------------|
| Feature A | 100 users | 3 (massive) | 80% | 40 hours | (100 × 3 × 0.8) / 40 = **6.0** |
| Feature B | 50 users | 2 (high) | 90% | 20 hours | (50 × 2 × 0.9) / 20 = **4.5** |
| Feature C | 200 users | 1 (medium) | 50% | 100 hours | (200 × 1 × 0.5) / 100 = **1.0** |

**Priority:** Feature A (highest RICE score)

---

### 2.2 Pricing Decisions

**Framework:** Van Westendorp Price Sensitivity Meter

**Use For:** Setting product prices, testing price changes

**Process:**

1. **Survey customers** (ask 4 questions):
 - "At what price would this be too expensive to consider?"
 - "At what price would this be expensive but still worth considering?"
 - "At what price would this be a bargain - great value for money?"
 - "At what price would this be so cheap you'd question the quality?"

2. **Plot cumulative responses** (create price sensitivity curve)

3. **Find optimal price range:**
 - Point of Marginal Cheapness (PMC)
 - Point of Marginal Expensiveness (PME)
 - Optimal Price Point (OPP) = intersection of "too expensive" and "bargain"

**Example (Tier 1 Pricing):**

Survey results (10 customers):

| Price | Too Expensive | Expensive but OK | Bargain | Too Cheap |
|-------|--------------|-----------------|---------|-----------|
| Rp 3M | 0% | 10% | 90% | 20% |
| Rp 5M | 10% | 40% | 60% | 0% |
| Rp 7M | 30% | 60% | 20% | 0% |
| Rp 10M | 60% | 80% | 0% | 0% |
| Rp 15M | 90% | 90% | 0% | 0% |

**Optimal Price:** Rp 5-7M (60-80% say "expensive but OK", still 20-60% say "bargain")

**Decision:** Price Tier 1 at Rp 4.7M avg (within optimal range)

---

### 2.3 Hiring Decisions

**Framework:** Scorecard Method

**Use For:** Hiring key roles (salespeople, product managers, engineers)

**Process:**

1. **Define must-have competencies** (5-7 criteria)
2. **Score candidates** (1-5 scale per criteria)
3. **Set minimum threshold** (e.g., ≥4.0/5.0 to hire)

**Template:**

| Criteria | Weight | Candidate A | Candidate B | Candidate C |
|----------|--------|------------|------------|------------|
| **Relevant Experience** | 25% | 4 × 0.25 = 1.0 | 5 × 0.25 = 1.25 | 3 × 0.25 = 0.75 |
| **Cultural Fit** | 20% | 5 × 0.20 = 1.0 | 3 × 0.20 = 0.6 | 4 × 0.20 = 0.8 |
| **Skill Level** | 25% | 3 × 0.25 = 0.75 | 4 × 0.25 = 1.0 | 5 × 0.25 = 1.25 |
| **Communication** | 15% | 4 × 0.15 = 0.6 | 4 × 0.15 = 0.6 | 3 × 0.15 = 0.45 |
| **Work Ethic** | 15% | 5 × 0.15 = 0.75 | 4 × 0.15 = 0.6 | 4 × 0.15 = 0.6 |
| **TOTAL SCORE** | 100% | **4.1/5.0** | **4.05/5.0** | **3.85/5.0** |

**Threshold:** ≥4.0/5.0

**Decision:** Hire Candidate A or B (both pass), reject Candidate C

---

### 2.4 Partnership Decisions

**Framework:** Strategic Fit Matrix

**Use For:** Evaluating partnerships (POS vendors, channel partners, affiliates)

**Template:**

| Criteria | Importance | Partner A | Partner B | Partner C |
|----------|-----------|-----------|-----------|-----------|
| **Market Reach** (how many customers can they access?) | High | Large (Moka 30K merchants) | Medium (Pawoon 20K) | Small (Qasir 10K) |
| **Brand Alignment** (do their customers match our ICP?) | High | Yes (F&B focused) | Yes | Mixed (retail + F&B) |
| **Effort to Integrate** (how much work to partner?) | Medium | Low (friendly contact) | Medium (cold outreach) | High (no contact) |
| **Revenue Potential** (how much can we earn?) | High | Rp 200M/year (20% of sales) | Rp 100M/year | Rp 50M/year |
| **Exclusivity Risk** (will they partner with competitors?) | Medium | Maybe (talking to others) | No (exclusive) | Yes (already partners with Tableau) |

**Decision:** Partner B (Pawoon) - best strategic fit despite smaller reach (exclusivity + brand alignment wins)

---

## Part 3: Decision-Making Principles

### 3.1 Jeff Bezos's "Type 1 vs Type 2" Decisions

**Type 1: One-Way Door (Irreversible)**
- Examples: Customer commitments, brand changes, key hires, technology stack
- Approach: Slow, deliberate, gather all data, founder approval required
- Risk tolerance: Low (can't afford mistakes)

**Type 2: Two-Way Door (Reversible)**
- Examples: Pricing tests, marketing campaigns, feature experiments
- Approach: Fast, experiment, delegate authority
- Risk tolerance: High (easy to undo)

**Rule:** Treat most decisions as Type 2 (reversible) unless proven otherwise

---

### 3.2 Amazon's "Disagree and Commit"

**Principle:** If you disagree with a decision but can't convince the group, commit to it anyway

**Use When:**
- Team is split 50/50 on a decision
- Debate has gone on too long (diminishing returns)
- Decision is Type 2 (reversible) so risk is low

**Process:**
1. Voice disagreement clearly (make your case)
2. Accept decision if overruled (don't sabotage)
3. Commit 100% to execution (no "I told you so" later)
4. Review decision at agreed milestone (learn from outcome)

**Example:**
- Product team wants to delay Tier 3, Sales team disagrees (wants revenue now)
- After debate, Product Lead decides: Delay to Sprint 2
- Sales team commits: "I disagree with delay, but I commit to selling Tier 1-2 hard in Sprint 1"

---

### 3.3 "Strong Opinions, Weakly Held"

**Principle:** Have conviction (strong opinion) but change mind when new data emerges (weakly held)

**Process:**
1. Form strong hypothesis based on current data
2. State opinion clearly (don't hedge)
3. Monitor for disconfirming evidence
4. Update opinion quickly when proven wrong

**Example:**
- Strong opinion: "Tier 1 customers won't upgrade to Tier 2 (too expensive)"
- New data: Beta customer upgraded Tier 1→2 after 2 months
- Update: "Actually, Tier 1 CAN be upgrade path. Let's build upgrade funnel."

---

## Part 4: Common Decision Pitfalls

### 4.1 Analysis Paralysis

**Symptom:** Endless data gathering, no decision made

**Cause:** Trying to eliminate all uncertainty before deciding

**Fix:**
- Set decision deadline (force progress)
- Use 70% Rule: Decide when you have 70% of the data you wish you had
- Remember: Indecision = decision (to do nothing)

---

### 4.2 Sunk Cost Fallacy

**Symptom:** Continuing to invest in failing project because "we've already invested so much"

**Cause:** Emotional attachment + loss aversion

**Fix:**
- Ask: "If we were starting from scratch today, would we make this investment?"
- Ignore sunk costs (they're gone, focus on future ROI)
- Kill projects ruthlessly (don't throw good money after bad)

---

### 4.3 Groupthink

**Symptom:** Team agrees too quickly, no dissenting voices

**Cause:** Desire for harmony, fear of conflict

**Fix:**
- Assign "devil's advocate" role (someone must disagree)
- Anonymous voting (reduce social pressure)
- Seek external opinions (break echo chamber)

---

### 4.4 Confirmation Bias

**Symptom:** Only seeking data that supports pre-existing belief

**Cause:** Cognitive bias (we like being right)

**Fix:**
- Actively seek disconfirming evidence
- Ask: "What would make me change my mind?"
- Pre-register hypothesis (write down prediction before seeing data)

---

**Document Status:** ACTIVE FRAMEWORK
**Owner:** Strategy Team
**Last Review:** January 8, 2026
**Next Review:** Quarterly (End of Q1)

**Related Documents:**
- [[biz/strategy/frameworks/06-product-strategy-framework|Product Strategy Framework]]
- [[biz/strategy/planning/foundations/06-prioritization-framework|Prioritization Framework]]
- [[biz/templates/internal/decision-record-template|Decision Record Template]]
