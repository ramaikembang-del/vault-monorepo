# Product Requirements Document (PRD) Template

> [!NOTE]
> **Instructions:** Copy this template when creating a new PRD. Replace all bracketed placeholders `[like this]` with actual content. Delete this note block when done.

---

## Product Information

**Product Name:** [Product Name]
**Product ID:** [e.g., A1, R2a, C1]
**PRD Version:** [e.g., 1.0]
**Last Updated:** [YYYY-MM-DD]
**Status:** [Draft | In Review | Approved | In Development]
**Owner:** [Name/Role]

---

## Executive Summary

[2-3 sentence overview of what this product does and why it matters]

**Target Users:** [e.g., Phase 2-3 Mikro→Kecil F&B owners]
**Target Launch:** [Sprint X, Week Y]
**Pricing:** [e.g., Rp XXK/month or Rp XXM one-time]
**Strategic Pillar:** [Acquisition | Retention | Expansion | Defense | Core Product]

---

## Problem Statement

### Current Pain Points

[Describe the specific problems users face today]

1. **[Pain Point 1]** - [Description]
2. **[Pain Point 2]** - [Description]
3. **[Pain Point 3]** - [Description]

### Impact of Not Solving

[What happens if we don't build this? Lost revenue? Churn? Competitive risk?]

---

## Success Metrics

### North Star Metric
[The one metric that defines success for this product]

### Key Performance Indicators (KPIs)

| Metric | Target | Timeframe | Measurement Method |
|--------|--------|-----------|-------------------|
| [e.g., Active Users] | [e.g., 50+] | [Week 4] | [Analytics dashboard] |
| [e.g., Conversion Rate] | [e.g., 30%] | [Week 8] | [Payment system] |
| [e.g., NPS Score] | [e.g., 40+] | [Month 3] | [User survey] |

### Gate Criteria

**[Gate Name] (Week X):** [Criteria] → [Decision]

---

## User Personas

### Primary Persona: [Persona Name]

**Demographics:**
- Business Type: [e.g., Small restaurant]
- Phase: [Phase 2-3]
- Tech Savvy: [Low | Medium | High]
- Monthly Revenue: [Rp XX-XXM]

**Jobs to Be Done:**
- [Job 1]
- [Job 2]
- [Job 3]

**Current Workarounds:**
[How they solve this problem today]

---

### Secondary Persona: [If applicable]

[Same structure as above]

---

## Solution Overview

### Value Proposition

*"[One sentence positioning statement]"*

**For** [target user]
**Who** [user need/problem]
**The** [product name]
**Is a** [product category]
**That** [key benefit]
**Unlike** [competing alternative]
**Our product** [unique differentiator]

---

### Core Features (Must-Have)

#### Feature 1: [Feature Name]

**User Story:** As a [persona], I want to [action] so that [outcome].

**Acceptance Criteria:**
- [ ] [Criteria 1]
- [ ] [Criteria 2]
- [ ] [Criteria 3]

**Priority:** P0 (MVP blocker)

---

#### Feature 2: [Feature Name]

[Same structure as Feature 1]

**Priority:** P0 (MVP blocker)

---

### Nice-to-Have Features (Post-MVP)

| Feature | User Benefit | Priority | Target Sprint |
|---------|-------------|----------|---------------|
| [Feature Name] | [Benefit] | P1 | Sprint X |
| [Feature Name] | [Benefit] | P2 | Sprint Y |

---

## Technical Requirements

### System Architecture

[High-level architecture diagram or description]

**Tech Stack:**
- Frontend: [e.g., React, Electron]
- Backend: [e.g., Node.js, Firebase]
- Database: [e.g., PostgreSQL, Firestore]
- Hosting: [e.g., Vercel, AWS]

### Integrations

| Integration | Purpose | Priority | Complexity |
|-------------|---------|----------|------------|
| [e.g., Pawoon API] | [POS data sync] | P0 | Medium |
| [e.g., WhatsApp] | [Report sharing] | P1 | Low |

### Performance Requirements

- **Load Time:** [e.g., <3 seconds on 3G]
- **Offline Support:** [Yes/No, details]
- **Data Retention:** [e.g., 12 months]
- **Concurrent Users:** [e.g., 100+]

---

## User Experience (UX) Requirements

### User Flows

**Flow 1: [Primary User Flow Name]**

```
[User Action 1] → [System Response] → [User Action 2] → [Outcome]
```

**Flow 2: [Secondary Flow]**

[Same structure]

### UI/UX Principles

1. **[Principle 1]** - [e.g., "Offline-first design"]
2. **[Principle 2]** - [e.g., "WhatsApp-native sharing"]
3. **[Principle 3]** - [e.g., "Indonesian F&B terminology"]

### Design Assets

- [ ] Wireframes: [Link or location]
- [ ] Mockups: [Link or location]
- [ ] Design System: [Link to design tokens]

---

## Pricing & Monetization

### Pricing Model

**Tier:** [e.g., Free | Rp 75K/month | Rp 2M one-time]
**Billing:** [Monthly | Annual | One-time]
**Upgrade Path:** [Next tier and pricing]

### Revenue Projections

| Timeframe | Expected Users | ARPU | Monthly Revenue |
|-----------|---------------|------|-----------------|
| Month 1 | [e.g., 10] | [Rp 75K] | [Rp 750K] |
| Month 3 | [e.g., 50] | [Rp 75K] | [Rp 3.75M] |
| Month 6 | [e.g., 100] | [Rp 75K] | [Rp 7.5M] |

---

## Go-to-Market (GTM) Strategy

### Launch Plan

**Pre-Launch (Weeks -2 to 0):**
- [ ] [Activity 1, e.g., "Beta testing with 5 users"]
- [ ] [Activity 2, e.g., "Create landing page"]

**Launch Week:**
- [ ] [Activity 1, e.g., "Post on LinkedIn + FB Groups"]
- [ ] [Activity 2, e.g., "Email existing customers"]

**Post-Launch (Weeks 1-4):**
- [ ] [Activity 1, e.g., "Weekly user interviews"]
- [ ] [Activity 2, e.g., "A/B test pricing"]

### Marketing Channels

| Channel | Target Audience | Content Type | Budget |
|---------|-----------------|--------------|--------|
| [LinkedIn] | [Phase 3-4 owners] | [Case studies] | [Rp 500K] |
| [Instagram] | [Phase 1-2 owners] | [Video demos] | [Rp 200K] |

---

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|-------------|---------------------|
| [e.g., "Low user adoption"] | High | Medium | [Beta test with 10 users first] |
| [e.g., "POS API downtime"] | Medium | Low | [Offline mode + CSV fallback] |
| [e.g., "Competitor launches first"] | High | Low | [MVP in 4 weeks, beat to market] |

---

## Dependencies

### Internal Dependencies

- [ ] [e.g., "Auth system completion" - Blocks: Login flow]
- [ ] [e.g., "Design system finalized" - Blocks: UI development]

### External Dependencies

- [ ] [e.g., "Pawoon API access" - Blocks: POS integration]
- [ ] [e.g., "Payment gateway approval" - Blocks: Subscriptions]

---

## Timeline & Milestones

| Milestone | Deliverables | Owner | Target Date |
|-----------|--------------|-------|-------------|
| **Kickoff** | PRD approved | [Name] | [Week 1] |
| **Design Complete** | Mockups finalized | [Name] | [Week 2] |
| **Alpha Build** | Core features working | [Name] | [Week 3] |
| **Beta Launch** | 10 beta users onboarded | [Name] | [Week 4] |
| **Public Launch** | GA release | [Name] | [Week 5] |

---

## Open Questions

1. **[Question 1]** - [e.g., "Should we support multiple outlets in MVP?"]
 *Decision Needed By:* [Date]
 *Owner:* [Name]

2. **[Question 2]**
 *Decision Needed By:* [Date]
 *Owner:* [Name]

---

## Appendix

### Research & References

### Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [YYYY-MM-DD] | [Name] | Initial draft |

---

**Approval Sign-Off**

- [ ] **Product Owner:** [Name] - [Date]
- [ ] **Engineering Lead:** [Name] - [Date]
- [ ] **Design Lead:** [Name] - [Date]
- [ ] **Founding Team:** [Name] - [Date]

---

## Related

- **[[biz/templates/design/user-flow-template|User Flow Template]]** - User experience flow documentation
- **[[biz/templates/engineering/technical-design-doc|Technical Design Doc]]** - Technical implementation template
- **[[biz/templates/product/user-research-questions|User Research Questions]]** - User research template
- **[[biz/templates/product/release-notes-template|Release Notes Template]]** - Release documentation
- **[[biz/strategy/frameworks/06-product-strategy-framework|Product Strategy Framework]]** - Product strategy guidelines
