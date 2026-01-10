# Sprint Budget Planning - Gate-Based Allocation Framework

**PWBI F&B Growth**
**Last Updated:** 2025-12-26
**Purpose:** Data-driven budget allocation tied to validation gates

> [!IMPORTANT]
> **Philosophy:** Budget follows validation, not vice versa. Don't spend on unvalidated assumptions.

---

## Executive Summary

**Budget Strategy:** Gate-based incremental spending
- Sprint 1: Minimal budget (Rp 5.5M) → Validate core hypotheses
- Sprint 2+: Scale budget IF gates pass (exponential growth)
- Contingency: Cut budget 70% IF gates fail (pivot mode)

**Year 1 Total Budget:** Rp 126M (revenue Rp 126M → breakeven on OpEx)

**Key Principle:** Every Rp 1M spent must have clear validation metric attached

---

## Sprint 1 Budget (Week 1-4): Validation Phase

**Revenue Target:**
- Templates (A1): Rp 25-50M (10-20 sales)
- Support (R1): Rp 375K MRR (5 subscribers)
- Lite (E1): 55 freemium users (Rp 0 revenue, pure validation)

**Budget Allocation:** Rp 5.5M

### Cost Breakdown

#### 1. Cloud Infrastructure: Rp 500K
- **AWS/Azure costs:**
 - E1 (Lite) hosting: 55 users × Rp 2K/user = Rp 110K
 - Database (PostgreSQL): Rp 150K/month
 - CDN (CloudFlare): Rp 50K/month
 - Backups & redundancy: Rp 100K/month
 - Buffer: Rp 90K
- **Total:** Rp 500K

**Validation Metric:** E1 must reach 50+ users to justify cloud cost
**Contingency:** IF <30 users Week 4 → Pause E1, cut to Rp 200K/month

---

#### 2. Tools & Software: Rp 2M

| Tool | Cost/Month | Purpose | Criticality |
|------|------------|---------|-------------|
| **GitHub Copilot** | Rp 300K | AI-assisted coding | Critical |
| **Figma Pro** | Rp 200K | Design (E1 UI/UX) | High |
| **Stripe** | Rp 0 (pay-per-transaction) | Payment processing | Critical |
| **SendGrid** | Rp 100K | Transactional emails | High |
| **Notion** | Rp 150K | CRM, project mgmt | Medium |
| **Mixpanel** | Rp 0 (free tier) | Product analytics | High |
| **Loom** | Rp 100K | Video demos, tutorials | Medium |
| **Canva Pro** | Rp 150K | Marketing graphics | Medium |
| **Google Workspace** | Rp 200K | Email, docs, drive | High |
| **Zoom** | Rp 200K | Customer demos | Critical |
| **Buffer** | Rp 100K | Social media scheduling | Low |
| **Hotjar** | Rp 0 (free tier) | User session recording | Medium |
| **Slack** | Rp 0 (free tier) | Team communication (future) | Low |
| **Contingency** | Rp 400K | Unexpected tool needs | - |
| **Total** | **Rp 2M** | | |

**Optimization:**
- Use free tiers aggressively (Mixpanel, Hotjar, Slack)
- Upgrade only when usage forces paid tier
- Cancel Buffer if social media ROI is low

---

#### 3. Marketing & Customer Acquisition: Rp 3M

**Channel Budget Allocation:**

| Channel | Budget | Expected CAC | Target Customers | Rationale |
|---------|--------|--------------|------------------|-----------|
| **Content Marketing** | Rp 1M | Rp 200K | 5 customers | Blog, SEO, guides |
| **Community Outreach** | Rp 1M | Rp 100K | 10 customers | Paguyuban, associations |
| **Paid Ads** | Rp 0 | - | 0 | PAUSED (wait for validation) |
| **Events/Webinars** | Rp 500K | Rp 250K | 2 customers | F&B industry events |
| **Referral Program** | Rp 300K | Rp 50K | 6 customers | Rp 50K/referral reward |
| **Partnerships** | Rp 200K | Rp 0 | N/A | POS partner outreach materials |
| **Total** | **Rp 3M** | Rp 130K avg | **23 customers** | Blended across channels |

**Content Marketing Breakdown (Rp 1M):**
- Blog posts (4 posts × Rp 100K): Rp 400K
 - Topics: "F&B analytics 101", "POS data insights", "Menu engineering guide", "Staff performance tracking"
- SEO optimization: Rp 200K
 - Keywords: "power bi f&b", "analytics restoran", "dashboard fnb indonesia"
- Lead magnets (templates, checklists): Rp 200K
 - Free Excel template: "Restaurant P&L tracker"
 - PDF guide: "10 metrics every F&B owner should track"
- Landing page design: Rp 200K

**Community Outreach (Rp 1M):**
- Paguyuban sponsorships: Rp 400K
 - 2 associations × Rp 200K (logo placement, speaking slot)
- WhatsApp group seeding (50 groups): Rp 100K
 - Founder time: 20 hours × Rp 5K (opportunity cost)
- F&B forum participation (10 forums): Rp 100K
 - Answer questions, provide value, soft promote
- User testimonials (video production): Rp 200K
 - Film 3 customer testimonials (Phase 0 if available)
- Community manager (freelance, part-time): Rp 200K
 - Manage forums, respond to inquiries

**Events/Webinars (Rp 500K):**
- Webinar hosting (Zoom): Rp 100K
- Webinar promotion (ads): Rp 200K
- Presentation design: Rp 100K
- Follow-up materials (deck, recordings): Rp 100K

---

### Sprint 1 ROI Calculation

**Input:**
- Budget: Rp 5.5M
- Target revenue: Rp 37.5M (templates) + Rp 375K MRR

**Output:**
- Actual revenue: TBD (Week 4)
- Net profit: Rp 32M - Rp 5.5M = **Rp 26.5M** (if targets hit)

**ROI:** 483% (Rp 26.5M profit ÷ Rp 5.5M cost)

**Breakeven:** 3 template sales (Rp 2M each) = Rp 6M > Rp 5.5M budget

---

## Sprint 2 Budget (Week 5-8): Conditional Scaling

**Decision Tree:**

### Scenario A: Both Gates Pass

**IF:**
- Gate 1A: 5+ template sales
- Gate 1B: 50+ Lite users, 30%+ engagement

**THEN: Allocate Rp 13M budget**

**Revenue Target:** Rp 20M (templates) + Rp 1.675M MRR

**Budget Allocation:**

| Category | Amount | Change from Sprint 1 | Rationale |
|----------|--------|----------------------|-----------|
| Cloud Infrastructure | Rp 1M | +Rp 500K | 2× users (100+ Lite users) |
| Tools & Software | Rp 2M | Rp 0 | Same tools, higher usage within tiers |
| Marketing | Rp 10M | +Rp 7M | **Scale validated channels** |
| **Total** | **Rp 13M** | +Rp 7.5M | 2.4× budget increase |

**Marketing Budget Expansion (Rp 10M):**
- Content marketing: Rp 2M (+Rp 1M) - Double blog output
- Community outreach: Rp 2M (+Rp 1M) - 4 paguyuban partnerships
- **Paid ads (NEW):** Rp 5M - Unlock Google/Facebook ads
- Events: Rp 500K (same)
- Referral program: Rp 500K (+Rp 200K) - More referrals expected

**Paid Ads Breakdown (Rp 5M NEW):**
- Google Ads: Rp 3M
 - Keywords: "power bi fnb indonesia", "analytics restoran"
 - Target: Rp 50K CPC × 2% conversion × 10% close rate = Rp 2.5M CAC
 - Expected: 2 customers @ Rp 2.5M CAC each
- Facebook/Instagram: Rp 2M
 - Audience: F&B owners 25-45, Jakarta/Surabaya/Bandung
 - Objective: Webinar signups → Template sales
 - Expected: 500 signups → 50 webinar attendees → 3 customers

---

### Scenario B: Only Gate 1A Passes

**IF:**
- Gate 1A: 5+ template sales
- Gate 1B: <50 users OR <30% engagement

**THEN: Allocate Rp 7M budget (conservative)**

**Rationale:** Templates validated, Lite needs iteration

**Budget Allocation:**
- Cloud: Rp 500K (keep Lite running, but don't scale)
- Tools: Rp 2M (same)
- Marketing: Rp 4.5M (focus on templates, reduce Lite investment)
 - Template marketing: Rp 3M
 - Lite iteration/testing: Rp 1M (user research, UX improvements)
 - Community: Rp 500K

**Lite Iteration Budget (Rp 1M):**
- User interviews (20 users × Rp 20K incentive): Rp 400K
- UX redesign: Rp 300K
- A/B testing tools: Rp 100K
- Feature experiments: Rp 200K

---

### Scenario C: Both Gates Fail

**IF:**
- Gate 1A: <5 template sales
- Gate 1B: <50 users OR <30% engagement

**THEN: PIVOT MODE - Cut budget to Rp 2M**

**Rationale:** Core hypotheses invalidated, conserve cash

**Budget Allocation:**
- Cloud: Rp 200K (minimal hosting)
- Tools: Rp 800K (cut non-essential: Buffer, Canva, Notion downgrade)
- Marketing: Rp 1M (diagnostic spending only)
 - User research: Rp 500K (understand why hypotheses failed)
 - Pivot experiments: Rp 500K (test alternative positioning)

**Pivot Experiments (Rp 500K):**
- Test different pricing (Rp 1M vs. Rp 5M templates)
- Test different segments (QSR vs. fine dining)
- Test different value props ("cost savings" vs. "growth insights")
- Test partnership model (white-label to POS companies)

**Decision Point (Week 12):**
- IF pivot shows traction → Resume Sprint 2 budget
- IF pivot fails → Pause project, reassess product-market fit

---

## Sprint 3 Budget (Week 9-16): Build C1 SaaS

**Gate 2 Requirement:** E1 paid conversion > 5% (10+ paid users from 200 freemium)

**IF Gate 2 Passes → Allocate Rp 25M**

**Rationale:** Build C1 (SaaS Basic) MVP

**Budget Breakdown:**

### Development Costs: Rp 15M

| Item | Cost | Details |
|------|------|---------|
| Cloud infrastructure (production) | Rp 3M | AWS setup, database migration, security |
| Development time (AI-assisted) | Rp 8M | 6 weeks × Rp 1.3M/week (founder opportunity cost) |
| QA & testing | Rp 1M | User acceptance testing, bug fixes |
| Security audit | Rp 500K | Basic pen-testing, compliance check |
| DevOps setup (CI/CD) | Rp 1M | Automated deployment, monitoring |
| Documentation | Rp 500K | API docs, user guides |
| Legal (contracts, ToS) | Rp 1M | Customer agreement templates |
| **Total Development** | **Rp 15M** | |

### Marketing (C1 Launch): Rp 7M

| Channel | Budget | Target |
|---------|--------|--------|
| Launch campaign | Rp 2M | Announce to existing customers + market |
| E1 → C1 upsell emails | Rp 300K | Convert freemium to paid SaaS |
| Paid ads (C1-specific) | Rp 3M | "Cloud analytics for multi-location F&B" |
| Partnerships (POS referrals) | Rp 1M | Incentives for POS partner referrals |
| Content (case studies) | Rp 700K | 3 C1 customer case studies |
| **Total Marketing** | **Rp 7M** | |

### Operations: Rp 3M

| Item | Cost | Details |
|------|------|---------|
| Cloud (8 weeks × Rp 250K) | Rp 2M | 50+ customers expected |
| Tools (scale) | Rp 500K | Upgrade Mixpanel, add Intercom for in-app chat |
| Support (customer success prep) | Rp 500K | Training materials, playbooks |
| **Total Operations** | **Rp 3M** | |

**Total Sprint 3:** Rp 25M

**Revenue Target (Sprint 3):**
- Templates: Rp 12.5M (5 sales - declining focus)
- E1 paid: Rp 13.2M (Rp 1.1M MRR × 3 months avg)
- C1 (new): Rp 3.6M (Rp 1.2M MRR × 3 customers)
- **Total:** Rp 29.3M

**Net Profit:** Rp 29.3M - Rp 25M = Rp 4.3M (Still profitable)

---

## Year 1 Consolidated Budget

| Quarter | Marketing | Cloud | Tools | Payroll | Other | Total | Revenue | Profit |
|---------|-----------|-------|-------|---------|-------|-------|---------|--------|
| **Q1 (Sprint 1-2)** | Rp 13M | Rp 1.5M | Rp 4M | Rp 0 | Rp 3M | **Rp 21.5M** | Rp 63.6M | Rp 42.1M |
| **Q2 (Sprint 3)** | Rp 7M | Rp 4M | Rp 2M | Rp 0 | Rp 5M | **Rp 18M** | Rp 25M | Rp 7M |
| **Q3** | Rp 10M | Rp 5M | Rp 2M | Rp 0 | Rp 3M | **Rp 20M** | Rp 27.5M | Rp 7.5M |
| **Q4** | Rp 13M | Rp 6M | Rp 2M | Rp 8M | Rp 3M | **Rp 32M** | Rp 35M | Rp 3M |
| **Year Total** | **Rp 43M** | **Rp 16.5M** | **Rp 10M** | **Rp 8M** | **Rp 14M** | **Rp 91.5M** | **Rp 151.1M** | **Rp 59.6M** |

**Notes:**
- Q4 includes first hire (CSM @ Rp 8M/month starting Month 12)
- Year total assumes all gates pass (optimistic scenario)
- Conservative: Reduce by 30% if 1-2 gates fail

---

## Budget Optimization Frameworks

### 1. CAC Payback Rule

**Rule:** Don't spend on customer acquisition if payback > 12 months

**Application:**
- IF C1 CAC trends toward Rp 5M → Pause paid ads
- IF payback period > 12 months → Focus on retention (cheaper than acquisition)

### 2. 40% Rule (SaaS Efficiency)

**Rule:** Growth rate + profit margin should = 40%+

**Application (Year 1 exit rate):**
- Growth rate: 200%+ (Rp 0 → Rp 120M ARR)
- Profit margin: 47% (Rp 59.6M ÷ Rp 126.1M)
- **Total:** 247% (Exceptional efficiency)

### 3. Budget-per-Gate Framework

| Gate | Unlock Budget | Cumulative | Risk Level |
|------|---------------|------------|------------|
| Pre-Gate 1 | Rp 5.5M | Rp 5.5M | Low (validation) |
| Gate 1 pass | +Rp 7M | Rp 12.5M | Medium (scale) |
| Gate 2 pass | +Rp 25M | Rp 37.5M | High (build C1) |
| Gate 3 pass | +Rp 50M | Rp 87.5M | Very high (enterprise) |

**Principle:** Budget risk increases ONLY after validation reduces uncertainty

---

## Contingency Planning

### Emergency Budget Cuts (IF Cash Flow Crisis)

**30% Cut Scenario:**
- Cut paid ads entirely: -Rp 8M
- Cut events/webinars: -Rp 2M
- Downgrade tools: -Rp 1M
- Reduce content production: -Rp 2M
- **Total savings:** Rp 13M (30% of Rp 43M marketing budget)

**50% Cut Scenario (Survival Mode):**
- Zero marketing (organic only): -Rp 43M
- Minimal cloud (basic tier): -Rp 8M
- Essential tools only: -Rp 5M
- **Total savings:** Rp 56M

**Burn Rate Floor:** Rp 2.5M/month (tools + minimal cloud)
**Runway with Zero Revenue:** 12+ months (if Rp 30M cash on hand)

---

## Monitoring & Alerts

**Weekly Budget Review:**
- Track actual spend vs. budget (variance analysis)
- Flag any line item >20% over budget
- Reforecast remainder of sprint based on actuals

**Monthly Budget Reforecast:**
- Update Q2+ forecasts based on Q1 actuals
- Adjust gate budgets based on learned CAC, retention, conversion rates

**Triggers for Budget Discussion:**
- Burn rate > Rp 10M/month (above plan)
- CAC > Rp 5M (too expensive)
- MRR growth <50%/month (below target)
- Churn > 25% (retention crisis)

---

**Related Documents:**
- [[biz/departments/finance/revenue/01-revenue-model|revenue-model.md]] - Revenue forecasts drive budget allocation
- [[biz/departments/finance/models/03-financial-projections|financial-projections.md]] - Annual P&L context
- [[biz/departments/finance/models/04-unit-economics|unit-economics.md]] - CAC benchmarks for marketing budget
