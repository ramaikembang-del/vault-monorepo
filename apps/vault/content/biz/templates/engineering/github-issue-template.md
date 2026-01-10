# GitHub Issue Template

> [!NOTE]
> **Instructions:** Copy the appropriate section below when creating GitHub issues. Use the format that matches your issue type. Delete this note when creating an issue.

---

## Issue Type Selection

Choose the template that fits your issue:

1. **[[#bug-report-template|Bug Report]]** - Something isn't working correctly
2. **[[#feature-request-template|Feature Request]]** - Request a new capability
3. **[[#technical-debt-template|Technical Debt]]** - Code quality or refactoring
4. **[[#documentation-template|Documentation]]** - Missing or incorrect docs
5. **[[#performance-issue-template|Performance Issue]]** - Slow or resource-intensive
6. **[[#security-vulnerability-template|Security Vulnerability]]** - Security concern

---

## Bug Report Template

### Bug Report: [Short Description]

**Labels:** `bug`, `needs-triage`
**Priority:** [P0-Critical | P1-High | P2-Medium | P3-Low]
**Affects:** [Product Name - e.g., "Web Dashboard Lite"]
**Version:** [e.g., v1.2.3]

---

#### Summary

[One-sentence description of the bug]

---

#### Steps to Reproduce

1. [First step - Be specific]
2. [Second step]
3. [Third step]

---

#### Expected Behavior

[What should happen?]

---

#### Actual Behavior

[What actually happens?]

---

#### Screenshots/Videos

[If applicable, add screenshots or screen recordings]

![Bug Screenshot](url-to-image)

---

#### Environment

- **OS:** [e.g., Windows 11, macOS 14, Android 13]
- **Browser:** [e.g., Chrome 120, Safari 17] (if web app)
- **App Version:** [e.g., v1.2.3]
- **Device:** [e.g., Desktop, Xiaomi Redmi Note 10]
- **Network:** [e.g., 4G, WiFi, Offline]

---

#### Reproducibility

- [ ] Always (100%)
- [ ] Frequently (>50%)
- [ ] Sometimes (~25%)
- [ ] Rarely (<10%)

---

#### User Impact

**How many users affected?** [e.g., "All users on Android" or "~10 beta users"]

**Business Impact:**
- [ ] Blocks critical workflow (users can't do their job)
- [ ] Major inconvenience (workaround exists but painful)
- [ ] Minor annoyance (cosmetic or edge case)

---

#### Logs/Error Messages

```
[Paste error messages, console logs, or stack traces here]
```

---

#### Possible Fix (Optional)

[If you have ideas on what might be causing this or how to fix it]

---

#### Related Issues

- Relates to #XXX
- Blocks #YYY
- Duplicate of #ZZZ

---

**Example:**

```markdown
### Bug Report: Food Cost % Shows NaN for Zero-Quantity Items

**Labels:** `bug`, `needs-triage`, `product:web-dashboard-lite`
**Priority:** P1-High
**Affects:** Web Dashboard Lite
**Version:** v1.1.0

#### Summary
Food cost percentage displays "NaN%" when an ingredient has zero quantity.

#### Steps to Reproduce
1. Go to "Bahan Baku" (Ingredients) page
2. Add ingredient "Minyak Goreng" with price Rp 10,000
3. Set quantity to 0
4. Navigate to "Analisis HPP" dashboard
5. Observe food cost % calculation

#### Expected Behavior
Should show 0% or "N/A" when quantity is zero.

#### Actual Behavior
Shows "NaN%" which confuses users.

#### Screenshots
![NaN Bug](screenshot.png)

#### Environment
- OS: Android 13
- Browser: Chrome 120
- App Version: v1.1.0
- Device: Xiaomi Redmi Note 10
- Network: 4G

#### Reproducibility
- [x] Always (100%)

#### User Impact
**How many users affected?** ~50 beta users reported this

**Business Impact:**
- [x] Major inconvenience (users think app is broken)

#### Logs/Error Messages
```
Console error: "Division by zero in calculateFoodCost()"
```

#### Possible Fix
Add null check: `const foodCostPct = quantity > 0 ? (cost / quantity) : 0;`
```

---

## Feature Request Template

### Feature Request: [Feature Name]

**Labels:** `enhancement`, `product:[product-name]`
**Priority:** [P0-Critical | P1-High | P2-Medium | P3-Low]
**Product:** [Product Name]
**Pillar:** [Acquisition | Retention | Expansion | Defense | Core]

---

#### Problem to Solve

**User Story:**
As a [persona/role],
I want to [action],
So that [benefit].

**Current Workaround:**
[How do users solve this problem today?]

---

#### Proposed Solution

[Describe your proposed feature in detail]

**Key Capabilities:**
1. [Capability 1]
2. [Capability 2]
3. [Capability 3]

---

#### User Impact

**Target Users:** [Phase 1-5, persona name]
**Expected Usage:** [Daily | Weekly | Monthly]
**Estimated Users:** [e.g., "80% of Phase 2 users would use this"]

---

#### Success Metrics

How will we know this feature is successful?

- [Metric 1 - e.g., "30% of users enable this within first week"]
- [Metric 2 - e.g., "Reduces support tickets by 20%"]

---

#### Design Mockups (Optional)

[Link to Figma, wireframes, or sketches]

---

#### Alternatives Considered

**Alternative 1:** [Description]
**Why not?** [Reason]

**Alternative 2:** [Description]
**Why not?** [Reason]

---

#### Related Features

- Requires #XXX
- Enhances #YYY
- Similar to #ZZZ

---

**Example:**

```markdown
### Feature Request: WhatsApp Auto-Schedule Daily Reports

**Labels:** `enhancement`, `product:web-dashboard-lite`, `pillar:retention`
**Priority:** P2-Medium
**Product:** Web Dashboard Lite
**Pillar:** Retention

#### Problem to Solve

**User Story:**
As a warung owner (Phase 2),
I want to receive my daily profit report automatically via WhatsApp every night at 8pm,
So that I don't have to remember to check the app.

**Current Workaround:**
Users manually export reports and share to WhatsApp. Many forget and lose daily insights.

#### Proposed Solution

Add a "Schedule Report" feature that sends daily/weekly summaries via WhatsApp.

**Key Capabilities:**
1. Set schedule (daily 7pm-9pm, weekly Monday)
2. Choose metrics (Sales, Profit, Top Items)
3. Delivered as WhatsApp message with inline data + link to full report

#### User Impact

**Target Users:** Phase 1-2 Mikro owners
**Expected Usage:** Daily
**Estimated Users:** 70% of active users would enable this

#### Success Metrics

- 50% of users enable auto-reports within 2 weeks
- 20% increase in daily active users (from reminder effect)

#### Design Mockups

[Link to Figma: whatsapp-auto-report-mockup]
```

---

## Technical Debt Template

### Technical Debt: [Issue Title]

**Labels:** `tech-debt`, `code-quality`
**Priority:** [P0-Critical | P1-High | P2-Medium | P3-Low]
**Component:** [e.g., "Authentication", "Database Layer"]

---

#### Description

[What technical debt exists?]

---

#### Why This Matters

**Current Problems:**
- [Problem 1 - e.g., "Slows down development by 20%"]
- [Problem 2 - e.g., "Increasing bug rate in this module"]

**Future Risks:**
- [Risk 1 - e.g., "Will block multi-tenant feature"]
- [Risk 2 - e.g., "Hard to onboard new engineers"]

---

#### Proposed Refactoring

[How should we fix this?]

**Effort Estimate:** [e.g., "2 engineer-weeks"]
**Complexity:** [Low | Medium | High]

---

#### Trade-offs

**Benefits:**
- [Benefit 1]
- [Benefit 2]

**Costs:**
- [Cost 1 - e.g., "Requires database migration"]
- [Cost 2 - e.g., "Risk of introducing new bugs"]

---

**Example:**

```markdown
### Technical Debt: Replace Callback Hell with Async/Await

**Labels:** `tech-debt`, `code-quality`
**Priority:** P3-Low
**Component:** API Client

#### Description

API client uses nested callbacks (5+ levels deep) instead of modern async/await.

#### Why This Matters

**Current Problems:**
- New engineers struggle to understand the code
- Higher bug rate from missed error handling

**Future Risks:**
- Adding new API endpoints takes 2x longer than it should

#### Proposed Refactoring

Convert all API client functions to async/await pattern.

**Effort Estimate:** 3 days
**Complexity:** Low

#### Trade-offs

**Benefits:**
- 50% easier to read/maintain
- Better error handling
- Easier to test

**Costs:**
- Requires Node 14+ (we're on Node 16, so fine)
```

---

## Documentation Template

### Documentation: [Doc Title or Issue]

**Labels:** `documentation`
**Type:** [Missing | Incorrect | Outdated | Improvement]
**Affects:** [Document name or section]

---

#### What's Wrong?

[Describe the documentation issue]

---

#### Expected Documentation

[What should the docs say?]

---

#### Actual Documentation

[What do the docs currently say, or what's missing?]

---

#### Suggested Fix

[If you have suggestions on how to improve]

---

**Example:**

```markdown
### Documentation: Missing API Authentication Guide

**Labels:** `documentation`
**Type:** Missing
**Affects:** API Documentation

#### What's Wrong?

No documentation on how to authenticate API requests with refresh tokens.

#### Expected Documentation

Should explain:
1. How to obtain access + refresh tokens
2. How to use refresh token when access token expires
3. Code examples in TypeScript

#### Suggested Fix

Add new page: `docs/api/authentication.md` with examples
```

---

## Performance Issue Template

### Performance: [Issue Title]

**Labels:** `performance`, `needs-investigation`
**Priority:** [P0-Critical | P1-High | P2-Medium | P3-Low]
**Affects:** [Feature or Page]

---

#### Performance Problem

[What is slow or resource-intensive?]

---

#### Measurements

**Current Performance:**
- [Metric 1 - e.g., "Page load: 8 seconds on 3G"]
- [Metric 2 - e.g., "Memory usage: 250MB idle"]

**Target Performance:**
- [Target 1 - e.g., "Page load: <2 seconds on 3G"]
- [Target 2 - e.g., "Memory usage: <100MB idle"]

**How Measured:** [Tool used - e.g., "Lighthouse", "Chrome DevTools"]

---

#### User Impact

**Affected Users:** [e.g., "All mobile users on slow connections"]
**Frequency:** [How often does this slow performance occur?]

---

#### Investigation Notes

[Any profiling or analysis done?]

---

**Example:**

```markdown
### Performance: Dashboard Charts Render Slowly

**Labels:** `performance`, `product:web-dashboard-lite`
**Priority:** P1-High
**Affects:** Main Dashboard

#### Performance Problem

Chart rendering blocks UI for 3-5 seconds on older Android devices.

#### Measurements

**Current Performance:**
- Initial render: 5.2s on Redmi Note 8
- Memory spike: +180MB

**Target Performance:**
- Initial render: <1s
- Memory spike: <50MB

**How Measured:** Chrome DevTools Performance profiling

#### User Impact

**Affected Users:** ~40% of users on low-end devices
**Frequency:** Every page load

#### Investigation Notes

Profiling shows:
- 80% time spent in Chart.js rendering
- Rendering 12 charts simultaneously (no lazy loading)
```

---

## Security Vulnerability Template

### Security: [Vulnerability Title]

> [!CAUTION]
> **Security Issue - Do not share publicly until patched**

**Labels:** `security`, `urgent`
**Severity:** [Critical | High | Medium | Low]
**Component:** [Affected component]

---

#### Vulnerability Description

[Private description of the security issue]

---

#### Attack Vector

[How could this be exploited?]

---

#### Impact

[What could an attacker do?]

---

#### Affected Versions

[Which versions are vulnerable?]

---

#### Proposed Fix

[How to patch this?]

---

#### CVE/CWE (If applicable)

[Reference to CVE or CWE if available]

---

**Note:** Real example intentionally omitted for security template.

---

## Issue Labels Reference

### Priority

- `P0-critical` - System down, data loss, or critical security flaw
- `P1-high` - Major feature broken, affects many users
- `P2-medium` - Non-critical bug or nice-to-have feature
- `P3-low` - Minor issue or future enhancement

### Type

- `bug` - Something isn't working
- `enhancement` - New feature request
- `tech-debt` - Code quality improvement
- `documentation` - Docs issue
- `performance` - Speed or resource issue
- `security` - Security vulnerability

### Product

- `product:power-bi-template`
- `product:web-dashboard-lite`
- `product:template-support`
- [etc. for all 22 products]

### Status

- `needs-triage` - Needs review and prioritization
- `blocked` - Cannot proceed due to dependency
- `in-progress` - Currently being worked on
- `ready-for-review` - PR ready for review

---

**Template Version:** 1.0
**Last Updated:** 2026-01-05
**Owner:** Engineering Team

---

## Related

- **[[biz/templates/engineering/technical-design-doc|Technical Design Doc]]** - Technical design documentation template
- **[[biz/templates/product/prd-template|PRD Template]]** - Product requirements for feature requests
- **[[products/shared-technical/devops/development-workflow|Development Workflow]]** - Development process and workflow
- **[[products/shared-technical/devops/code-review-guidelines|Code Review Guidelines]]** - Code review process
- **[[biz/departments/it/workflows/bug-triage-process|Bug Triage Process]]** - Bug prioritization process
