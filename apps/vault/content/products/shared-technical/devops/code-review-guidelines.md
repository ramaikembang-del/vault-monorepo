# Code Review Guidelines
**Best Practices for Pull Requests**

**Owner:** Engineering Team  
**Status:** ACTIVE

---

## Code Review Philosophy

**Purpose:** Catch bugs, share knowledge, maintain code quality

**Not:** Gatekeeping, nitpicking, ego battles

**Rule:** Be kind, be constructive

---

## PR Requirements

**Before Submitting:**
- [ ] Code compiles/runs locally
- [ ] Tests pass (unit + integration)
- [ ] No console errors
- [ ] Self-review (read your own diff first)

**PR Description:**
- What: Brief summary of changes
- Why: Context (link to issue/ticket)
- How: Approach (if non-obvious)
- Screenshot: If UI changes

---

## Review Checklist

**Code Quality:**
- [ ] Readable (clear variable names, no magic numbers)
- [ ] DRY (Don't Repeat Yourself - extract common logic)
- [ ] Tested (edge cases covered?)
- [ ] Secure (no SQL injection, XSS vulnerabilities)

**Architecture:**
- [ ] Fits existing patterns (don't invent new ways unless justified)
- [ ] Scalable (works for 100 users AND 10,000?)
- [ ] Maintainable (can someone else understand this in 6 months?)

**Performance:**
- [ ] No obvious bottlenecks (N+1 queries, memory leaks)
- [ ] Optimized (but not prematurely)

---

## Review Etiquette

**As Reviewer:**
- ✅ "Consider using X instead of Y for readability"
- ✅ "This might cause issue Z in edge case W"
- ✅ "Nice refactoring!" (positive feedback)
- ❌ "This is terrible, rewrite it"
- ❌ "I would never do it this way" (unhelpful)

**As Author:**
- Accept feedback gracefully
- Push back if you disagree (with reasoning)
- Say "Good catch, will fix"
- Don't take it personally

---

## Review Time SLA

**Size-Based:**
- Small (<50 lines): <2 hours
- Medium (50-200 lines): <4 hours  
- Large (200+ lines): <1 day

**If Too Large:** Break into smaller PRs

---

## Approval Process

**Required Approvals:**
- 1 approval minimum (any team member)
- Founder approval for architecture changes

**Merge Rules:**
- All tests pass (CI/CD green)
- No unresolved comments
- Conflicts resolved

**Merge Method:** Squash and merge (keep history clean)

---

## Common Issues

**Issue 1: "Looks good to me" (LGTM) without actually reviewing**
- Solution: Require at least 1 comment or question

**Issue 2: Review takes forever (blocks deployment)**
- Solution: Set SLA, escalate if missed

**Issue 3: Nitpicking minor style issues**
- Solution: Use linter/formatter (Prettier, ESLint) - automate it

---

**Status:** ACTIVE  
**Tools:** GitHub PR reviews
