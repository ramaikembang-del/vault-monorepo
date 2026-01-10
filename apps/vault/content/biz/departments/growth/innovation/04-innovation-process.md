# Innovation Process

**Owner:** Product + Innovation Council
**Last Updated:** December 2025

---

## Innovation Philosophy

**Everyone innovates.** Great ideas come from anywhere—customer support engineer,sales rep, newest intern. We create systems to capture, evaluate, and execute on great ideas.

---

## Idea Submission

### Who Can Submit

**Anyone:**
- Team members
- Customers (via feedback channels)
- Partners

**No idea too small:** Incremental improvements count

### How to Submit

**Slack:** #innovation channel
- Quick ideas, informal
- Team reacts, discusses

**Formal RFC:** innovation/[idea-name].md
- Bigger ideas requiring investment
- Structured format (see template)

### Idea Template

```markdown
# Idea: [Title]

## Problem
What problem does this solve? Why does it matter?

## Proposal
What's the solution? (High-level, not specs)

## Impact
Who benefits? How much? (customers, team, business)

## Effort
Rough estimate (small/medium/large)

## Alternatives
What else could we do?
```

---

## Evaluation

### Innovation Council

**Members:**
- CEO (chair)
- CTO
- Head of Product
- Head of CS (voice of customer)
- rotating team member (changes quarterly)

**Meets:** Biweekly

### Evaluation Criteria (RICE)

**Reach:** How many affected? (customers, users)
**Impact:** How big the improvement? (0.25 = minimal, 3 = massive)
**Confidence:** How sure are we? (0% = total guess, 100% = certain)
**Effort:** Person-months required

**Score = (Reach × Impact × Confidence) / Effort**

**Example:**
- Reach: 1,000 customers
- Impact: 2 (significant)
- Confidence: 80%
- Effort: 2 person-months
- **Score = (1,000 × 2 × 0.8) / 2 = 800**

### Decision Outcomes

**Proceed (Score > 500 + strategic fit):**
- Add to roadmap
- Assign team
- Set timeline

**Experiment (Score 200-500 OR uncertain):**
- Run MVE (Minimum Viable Experiment)
- 2-week spike
- Decide after learning

**Defer (Score < 200):**
- Good idea, wrong time
- Park for later
- Remind in 6 months

**Reject:**
- Doesn't align with strategy
- Too risky/expensive
- Better alternative exists

---

## Experimentation

### When to Experiment

**Use experiments when:**
- Uncertain about solution
- High risk
- Need to validate assumption
- Learning > shipping

**Skip experiments (just build):**
- Obvious solution
- Low risk
- Customer-requested (validated)

### MVE Format

**Max 2 weeks, aim to answer:**
1. **Desirability:** Do customers want this?
2. **Feasibility:** Can we build it?
3. **Viability:** Will it work for business?

**Deliverable:** Experiment report (see Experimentation Framework doc)

---

## Resource Allocation

### Innovation Budget

**10% of engineering time** dedicated to innovation:
- Hackathons
- Experiments
- Friday projects
- Learning

**"Friday Innovation Time":**
- Every Friday afternoon (12 PM - 5 PM)
- Work on passion projects
- Doesn't have to ship (learning counts)
- Demo monthly (optional)

### Dedicated Innovation Sprints

**1 sprint/quarter** = Innovation Sprint
- No roadmap work
- Pure innovation
- Harvest hackathon ideas
- Fix tech debt

---

## From Idea to Production

**Path 1: Direct to Roadmap** (high confidence)
1. Idea submitted
2. Council approves
3. Product specs it
4. Engineering builds (normal sprint)
5. Launch

**Path 2: Experiment First** (uncertain)
1. Idea submitted
2. Council approves experiment
3. Run MVE (2 weeks)
4. Learn, decide
5. → If proceed: Spec → Build → Launch
6. → If kill: Document learning

**Path 3: Hackathon** (exploratory)
1. Idea submitted (or born in hackathon)
2. Build prototype (2 days)
3. Demo
4. → If promising: Experiment or Roadmap
5. → If not: Learning artifact

---

## Success Stories

**A4a Inventory Optimizer:**
- Origin: Customer support noticed 80% of tickets about stock-outs
- Experiment: 2-week prototype with 5 cafés
- Result: 60% waste reduction (validated)
- Decision: Build full product (now Rp 500M ARR run-rate)

**WhatsApp Notifications:**
- Origin: Engineer noticed customers prefer WhatsApp
- Friday project: Basic integration (4 hours)
- Experiment: Rolled out to 50 customers
- Result: 90% open rate (vs 20% email)
- Decision: Full feature (most-used notification channel)

---

## Innovation Metrics

**Input:**
- Ideas submitted: 50+/quarter
- Experiments run: 10/quarter
- Friday projects: 30 team members participate

**Output:**
- Ideas shipped: 5-10/quarter
- Exp to production: 30% (healthy)
- Customer impact: Measured per feature

**Culture:**
- Team satisfaction with innovation: 8+/10
- "Can I suggest ideas?" 100% yes

---

## Common FAQs

**Q: Will my idea be stolen?**
A: You get credit. Shipped ideas attributed in release notes, internal comms.

**Q: What if my idea is rejected?**
A: Learn why. Improve it. Resubmit later. OR accept it's not the right idea/time.

**Q: Can I work on my idea even if not approved?**
A: Yes (on Friday Innovation Time). Build prototype, prove value, re-submit.

**Q: What if I don't have big ideas?**
A: Small improvements matter. "Add export button" = valid idea.

---

## Related Docs

- [[biz/departments/growth/innovation/01-experimentation-framework|Experimentation Framework]]
- [[biz/departments/growth/innovation/03-hackathon-guide|Hackathon Guide]]
- [[biz/departments/growth/innovation/02-feature-request-process|Feature Request Process]]

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial innovation process |

---

**Innovate or stagnate. Keep the ideas flowing.**
