# Feature Request Process

**Owner:** Product Team
**Last Updated:** December 2025

---

## Overview

Feature requests are the lifeblood of product development. They come from customers, team members, and partners. This document outlines how we capture, evaluate, prioritize, and communicate about feature requests.

---

## Submission Channels

### From Customers

**Support Tickets:**
- Customers email support@pwbi.co.id
- CS team tags with `#feature-request`
- Auto-creates entry in Feature Request database

**In-App Feedback:**
- "Request Feature" button (Help → Suggest Feature)
- Opens form with context (current page, user info)
- Directly logged to Product backlog

**Sales Calls:**
- Prospects ask "Can it do X?"
- Sales logs in CRM with tag `feature-request`
- Syncs to Product weekly

**Social Media:**
- Twitter, Facebook mentions
- Marketing team forwards to Product
- Tracked in same database

### From Team Members

**Slack Channel:** #product-ideas
- Anyone can post
- Quick discussions (Is this already possible? Good idea?)
- Upvotes (reactions = popularity signal)

**Formal RFC:** For bigger ideas
- Write RFC doc (see Innovation Process)
- Share for comments
- Product team reviews

---

## Intake & Categorization

### Weekly Triage (Every Monday)

**Product team reviews all new requests:**
- Read submissions (5-30 per week typically)
- Ask clarifying questions (if unclear)
- Categorize into buckets

### Categories

**1. Bug Fix (Not a feature request)**
- Expected behavior not working
- → Move to Engineering bug tracker
- → Prioritize by severity

**2. Quick Win (< 1 day of work)**
- Small UX improvement
- Configuration change
- Copy/content update
- → Fast-track (ship within sprint)

**3. Enhancement (Improve existing feature)**
- Add filter option
- Export to additional format
- New chart type
- → Backlog for prioritization

**4. New Feature (Net-new capability)**
- Multi-currency support
- Mobile app
- API endpoint
- → Deep evaluation needed

**5. Out of Scope**
- Doesn't align with product vision
- Extremely niche (1 customer, unlikely others need)
- Technically infeasible
- → Politely decline

---

## Prioritization

### RICE Scoring (Monthly)

**For all Enhancement + New Feature requests:**

**R = Reach:** How many customers affected?
- Tier 1 (90%+ customers): 1000 points
- Tier 2 (50-90%): 500 points
- Tier 3 (10-50%): 100 points
- Tier 4 (< 10%): 10 points

**I = Impact:** How big the improvement?
- Massive (game-changer): 3
- High (significant value): 2
- Medium (nice-to-have): 1
- Low (minimal): 0.5
- Minimal (barely noticeable): 0.25

**C = Confidence:** How sure are we?
- High (validated with customers): 100%
- Medium (anecdotal evidence): 80%
- Low (hypothesis): 50%

**E = Effort:** Person-weeks to ship
- Estimate from Engineering
- Includes design, dev, QA, docs

**Score = (R × I × C) / E**

**Example:**
```
Request: Multi-currency support
R = 500 (50% of customers need it)
I = 3 (massive for international customers)
C = 100% (validated with 20+ customers)
E = 8 weeks

Score = (500 × 3 × 1.0) / 8 = 187.5
```

### Prioritization Tiers

**Tier 1: Next Quarter (Score > 200 + strategic fit)**
- Added to roadmap
- Assigned owner
- Specs written

**Tier 2: Backlog (Score 50-200)**
- Good ideas, not urgent
- Revisit quarterly
- May move up if more customers request

**Tier 3: Icebox (Score < 50)**
- Nice-to-have
- Low priority
- Revisit annually

**Rejected:**
- Out of scope
- Superseded by better solution
- No longer relevant

---

## Roadmap Integration

### How Requests Become Roadmap Items

**Quarterly Planning:**
1. Product team reviews top RICE scores
2. Engineering estimates effort
3. Leadership aligns on strategic priorities
4. Roadmap finalized (Top 10-15 features for quarter)

**Communicated:**
- Public roadmap updated (roadmap.pwbi.co.id)
- Customers who requested notified
- Internal all-hands presentation

### Roadmap Process

**Stages:**
1. **Idea** - Captured, evaluated
2. **Planned** - On roadmap for Q+1 or Q+2
3. **In Progress** - Actively being built
4. **Shipped** - Live in production
5. **Declined** - Not pursuing

---

## Customer Communication

### When to Respond

**Always respond to:**
- Enterprise customers (SLA commitment)
- Highly requested features (>10 customers)
- Strategic prospects (could close deal)

**Acknowledge all within 5 business days**

### Response Templates

**Accepted (On Roadmap):**
```
Hi [Name],

Great news! We're building [Feature] in Q2 2025.

Why: [Brief reason - customer demand, strategic, etc.]
Timeline: [Month] for beta, [Month] for general availability
Updates: You're on the list - we'll email when ready for testing

Thanks for the suggestion!
[Your Name], Product Team
```

**Under Consideration:**
```
Hi [Name],

Thanks for suggesting [Feature]. We hear you!

Status: We're evaluating this along with other requests.
What helps: If you can share your specific use case, that helps us
prioritize. Why do you need this? What would you do with it?

We'll update you in [timeframe] with a decision.

[Your Name], Product Team
```

**Declined:**
```
Hi [Name],

Thanks for the [Feature] suggestion. After evaluation, we've
decided not to pursue this because [reason - doesn't align with
our focus on F&B, extremely complex for niche use case, etc.].

Alternative: Have you tried [existing feature/workaround]? It might
address your need in a different way.

We appreciate your input and hope you understand!

[Your Name], Product Team
```

### Public Transparency

**Public Roadmap (roadmap.pwbi.co.id):**
- Next 2 quarters visible
- "Under Consideration" section
- Vote/comment on features (customer input)

**Monthly Update Email:**
- "What We Shipped This Month"
- "What's Coming Next"
- Credits feature requesters

---

## Feedback Loop

### Post-Launch Check-In

**After shipping requested feature:**
1. Email all customers who requested it
2. Ask: "Does this solve your problem?"
3. Collect feedback (what's missing, what's great)
4. Iterate in v2

**Success metric:** 80%+ say "Yes, this solves my problem"

### Feature Adoption Tracking

**Monitor:**
- % of customers using new feature (within 30 days)
- Usage frequency
- Support tickets (is it confusing?)

**Action:**
- Low adoption → Improve onboarding, communication
- High adoption → Invest more, expand feature
- Confusing → Iterate UX

---

## Internal Feature Requests

### Team Members as Customers

**Team insights valuable:**
- Sales knows what prospects need
- CS knows customer pain points
- Engineering sees technical opportunities

**Process same as external:**
- Submit via #product-ideas or RFC
- RICE scoring
- Prioritized objectively (not "boss said so")

**Exception: Critical internal tools**
- If blocking team productivity
- Fast-tracked (doesn't compete with customer features)

---

## Feature Request Database

**Tool:** Notion (Feature Request Board)

**Fields:**
- Title
- Description
- Source (Customer, Team, Sales)
- Category (Bug, Quick Win, Enhancement, New Feature)
- RICE Score
- Status (new, Evaluated, Planned, Shipped, Declined)
- Requested By (customer names/count)
- Owner (Product Manager)

**Views:**
- By Score (high to low)
- By Status
- By Quarter (roadmap view)
- By Source

---

## Metrics

**Tracking:**
- Requests submitted: 50-100/month
- Acceptance rate: 10-15% make it to roadmap
- Time to decision: < 30 days (for 90% of requests)
- Customer satisfaction: 85%+ say "We listen to feedback"

**Review quarterly:** Are we saying yes to the right things?

---

## Common Scenarios

### Scenario 1: Enterprise Customer Requests Niche Feature

**What they want:** Custom white-label branding (only them)
**Effort:** 4 weeks dev

**Evaluation:**
- R = 1 (only 1 customer)
- I = 3 (high value to them)
- C = 100%
- E = 4 weeks
- **Score = 0.75** (very low)

**Decision:** Decline for product, offer custom development contract (Rp 100M+)

### Scenario 2: 20 Customers Request Same Thing

**What they want:** Export to Excel (currently only PDF)
**Effort:** 1 week

**Evaluation:**
- R = 100 (20 customers, likely more)
- I = 1.5 (useful, not game-changing)
- C = 100%
- E = 1 week
- **Score = 150** (medium-high)

**Decision:** Add to next quarter roadmap

### Scenario 3: Sales Lost Deal Due to Missing Feature

**What they needed:** Multi-location support
**Deal value:** Rp 500M/year
**Effort:** 6 weeks

**Evaluation:**
- R = 200 (enterprise segment growing)
- I = 3 (requirement for enterprise)
- C = 100% (lost deal proves it)
- E = 6 weeks
- **Score = 100** (medium)

**Decision:** Fast-track (strategic importance > score)

---

## FAQ

**Q: How do I check status of my feature request?**
A: Public roadmap (roadmap.pwbi.co.id) or email product@pwbi.co.id

**Q: Why was my request declined?**
A: Common reasons: Not strategic fit, too complex for limited demand, workaround exists. We explain in response.

**Q: Can I pay to prioritize my feature?**
A: For significantly custom features, yes (custom dev contract). For roadmap items, no (we prioritize by impact, not who pays most).

**Q: How long until my feature ships?**
A: If on roadmap: 1-3 months typically. If backlog: 6-18 months. If icebox: Uncertain.

**Q: Can I help build it?**
A: For open-source components or beta testing, yes! Email product@pwbi.co.id

---

## Related Documents

- [[biz/departments/growth/innovation/04-innovation-process|Innovation Process]]
- [[biz/departments/growth/innovation/05-product-development-lifecycle|Product Development Lifecycle]]
- [[biz/strategy/planning/execution/01-product-roadmap|Roadmap Planning]]

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 2.0 | Comprehensive expansion | Product Team |
| 2025-12 | 1.0 | Initial process | Product Team |

---

**We build what customers need. Keep the requests coming.**
