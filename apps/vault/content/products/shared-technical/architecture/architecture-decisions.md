# Architecture Decision Records (ADR)
**Documenting Technical Decisions**

**Owner:** Engineering Team  
**Status:** ACTIVE

---

## Purpose

**Why Document Decisions?**
- Future team members understand "why we chose X"
- Avoid relitigating same decisions
- Learn from past choices (good and bad)

**What to Document:**
- Technology choices (React vs Vue, SQL vs NoSQL)
- Architecture patterns (monolith vs microservices)
- Major refactors (why we rewrote X)

**What NOT to Document:**
- Minor implementation details
- Obvious choices
- Temporary workarounds

---

## ADR Template

```markdown
# ADR-001: [Decision Title]

**Date:** 2026-01-08  
**Status:** Accepted / Superseded / Deprecated  
**Deciders:** [Names]

## Context
What problem are we solving?  
What constraints exist?

## Decision
What did we decide?

## Rationale
Why this choice vs alternatives?

## Alternatives Considered
- Option A: [Why rejected]
- Option B: [Why rejected]

## Consequences
**Positive:**
- Benefit 1
- Benefit 2

**Negative:**
- Tradeoff 1
- Tradeoff 2

## Links
- Related ADRs
- Documentation
- GitHub issues
```

---

## Example ADRs

### ADR-001: Use Supabase for Backend

**Context:** Need database + auth + storage for SaaS product

**Decision:** Use Supabase (Postgres + Auth + Storage all-in-one)

**Rationale:**
- Fast development (don't build auth from scratch)
- Postgres = flexible (relational + JSON)
- Affordable ($25/month for 100 customers)

**Alternatives:**
- Firebase: More expensive,vendor lock-in
- Custom backend: Slower to build, more maintenance

**Consequences:**
- (+) Ship faster
- (+) Lower initial cost
- (-) Vendor dependency (Supabase-specific features)

---

### ADR-002: Offline-First for Lite Dashboard

**Context:** Phase 1 Mikro has unreliable internet

**Decision:** Build Electron app with local SQLite database

**Rationale:**
- Works offline (no internet required)
- Familiar UI (desktop app like Excel)
- Can sync later (when internet available)

**Alternatives:**
- Web-only: Requires internet (blocks target market)
- Mobile app: Different UX, more development time

**Consequences:**
- (+) Serves target market well
- (+) Unique value prop (offline = competitive advantage)
- (-) More complex (sync logic when online)
- (-) Desktop-only (no mobile... initially)

---

## ADR Lifecycle

**Proposed → Accepted → Superseded/Deprecated**

**Superseded:** New ADR replaces old decision  
**Example:** ADR-003 "Switch from Supabase to self-hosted Postgres" supersedes ADR-001

**Deprecated:** Decision no longer relevant  
**Example:** ADR about feature X deprecated when feature X removed

---

## Storage & Review

**Location:** `products/shared-technical/architecture/decisions/ADR-XXX-title.md`

**Review:** Quarterly (check if any ADRs need updating)

**Access:** All team members can read, Engineering can create

---

**Status:** ACTIVE  
**Current ADRs:** 2 (as of Sprint 1)  
**Next:** Document SaaS architecture decision
