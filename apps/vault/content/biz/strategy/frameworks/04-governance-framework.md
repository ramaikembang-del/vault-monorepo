# Governance Framework

**Last Updated:** 2025-12-27
**Owner:** Leadership Team
**Review Cycle:** Quarterly

---

## Overview

The governance framework establishes how decisions are made, who has authority at what levels, and how work gets prioritized across PWBI FnB Growth. Clear governance prevents bottlenecks, reduces confusion, and enables faster execution.

**Purpose:** Define decision-making authority, approval workflows, and escalation procedures

---

## Decision-Making Framework (RACI Matrix)

### Product Decisions

| Decision Type | Responsible | Accountable | Consulted | Informed |
|---------------|-------------|-------------|-----------|----------|
| Product strategy | CPO | CEO | Leadership Team | All |
| Feature prioritization | PM | CPO | Engineering, Sales | Product Team |
| Product launch | PM | CPO | Marketing, Sales, CS | All |
| Pricing changes | CPO | CEO | Finance, Sales | All |
| Product sunset | CEO | Board | Leadership Team | All |

### Engineering Decisions

| Decision Type | Responsible | Accountable | Consulted | Informed |
|---------------|-------------|-------------|-----------|----------|
| Technology stack | CTO | CEO | Engineering Team | Product |
| Architecture changes | Lead Engineer | CTO | Engineering Team | Product |
| Deployment process | DevOps Lead | CTO | Engineering | Product, Ops |
| Security protocols | Security Lead | CTO | Legal, Compliance | All |
| Code standards | Tech Lead | CTO | Engineering Team | None |

### Business Decisions

| Decision Type | Responsible | Accountable | Consulted | Informed |
|---------------|-------------|-------------|-----------|----------|
| Budget allocation | CFO | CEO | Leadership Team | Department Heads |
| Hiring (IC roles) | Hiring Manager | Department Head | HR | None |
| Hiring (leadership) | CEO | Board | Leadership Team | All |
| Vendor contracts >$10K | Dept Head | CFO | Procurement | Finance |
| Marketing campaigns | CMO | CEO | Product, Sales | All |

---

## Approval Thresholds

### Financial Approvals

| Amount | Approver | Process |
|--------|----------|---------|
| < Rp 5M | Department Head | Email approval |
| Rp 5-25M | CFO | Budget review meeting |
| Rp 25-100M | CEO | Leadership team review |
| > Rp 100M | CEO + Board | Board approval required |

**Recurring Expenses:** Annual commitment amount used for threshold

---

### Product Approvals

| Decision | Approver | Timeline |
|----------|----------|----------|
| New feature (existing product) | PM + CPO | 1 week |
| New product (validation phase) | CPO + CEO | 2 weeks |
| New product (full build) | CEO + Board | 1 month |
| Feature removal | PM + CPO | 1 week |
| Major UI/UX change | PM + CPO + Design | 2 weeks |

---

### Hiring Approvals

| Role Level | Approver | Process |
|------------|----------|---------|
| IC (Individual Contributor) | Hiring Manager + HR | Standard interview process |
| Senior IC | Hiring Manager + Department Head | Extended interviews |
| Manager | Department Head + HR + CEO | Leadership interview panel |
| Director+ | CEO + Board | Board approval required |

**Compensation Bands:** Pre-approved by CEO; deviations require CEO approval

---

## Escalation Matrix

### Issue Severity Levels

**P0 - Critical (Production Down):**
- **Response Time:** Immediate
- **Escalation Path:** On-call Engineer → CTO → CEO
- **Communication:** Status updates every 30 minutes
- **Resolution SLA:** 2 hours

**P1 - High (Major Feature Broken):**
- **Response Time:** 1 hour
- **Escalation Path:** Support → Engineering Lead → CTO
- **Communication:** Status updates every 2 hours
- **Resolution SLA:** 24 hours

**P2 - Medium (Minor Bug):**
- **Response Time:** 4 hours
- **Escalation Path:** Support → Product → Engineering
- **Communication:** Daily updates
- **Resolution SLA:** 1 week

**P3 - Low (Enhancement Request):**
- **Response Time:** 2 business days
- **Escalation Path:** Support → Product backlog
- **Communication:** None required
- **Resolution SLA:** Next sprint (if prioritized)

---

### Customer Escalations

| Issue Type | First Contact | Escalation Level 1 | Escalation Level 2 | Escalation Level 3 |
|------------|---------------|--------------------|--------------------|-------------------|
| Billing dispute | Support | Finance | CFO | CEO |
| Product issue | Support | Technical Support | Engineering Lead | CTO |
| Feature request | Support | Product Manager | CPO | CEO |
| Account cancellation | CSM | CS Manager | CCO | CEO |
| Security concern | Support | Security Team | CTO | CEO + Legal |

**SLA:** Escalate if not resolved within 24 hours at current level

---

## Decision-Making Principles

1. **Bias for Action:** When in doubt, make a decision and iterate
2. **Data-Informed:** Use data, but don't wait for perfect information
3. **Reversible vs Irreversible:** Two-way door decisions can be made faster
4. **Disagree and Commit:** Voice concerns, then support the decision
5. **Written Communication:** Document major decisions (use decision log)

---

## Decision Log

All major decisions must be logged in: `docs/company/decisions/YYYY-MM-decision-title.md`

**Template:**
```markdown
# [Decision Title]

**Date:** YYYY-MM-DD
**Decision Maker:** [Name, Role]
**Context:** [Why this decision was needed]
**Options Considered:** [List alternatives]
**Decision:** [What was decided]
**Rationale:** [Why this option]
**Impact:** [Who/what is affected]
**Reversibility:** [Can this be changed later?]
```

---

## Exception Handling

**When to Break Process:**
- P0 incidents (production down)
- Time-sensitive opportunities (competitor move, market opportunity)
- Legal/compliance requirements

**How to Handle Exceptions:**
1. Take immediate action
2. Document decision post-facto
3. Inform relevant stakeholders within 24 hours
4. Review at next leadership meeting

---

## Governance Review

**Quarterly Review:**
- Assess if decision-making is fast enough
- Identify bottlenecks
- Update thresholds/approvers as team grows
- Gather feedback from team on clarity

**Metrics:**
- Average time to decision (by type)
- Number of escalations
- Team satisfaction with decision clarity

---

**Related Documents:**
- [[biz/playbooks/team-collaboration/02-meeting-rhythms|Meeting Rhythms]] - When decisions are made
- [[biz/playbooks/team-collaboration/03-escalation-paths|Escalation Paths]] - Who to contact
- [[biz/strategy/frameworks/02-okr-framework|OKR Framework]] - Goal-setting process

**Last Updated:** 2025-12-27
**Next Review:** 2025-03-27
