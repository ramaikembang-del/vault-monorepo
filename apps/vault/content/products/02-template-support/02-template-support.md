# R1: Template Support & Subscription

**Product ID:** R1
**Pillar:** P2 - Retention (Recurring Revenue)
**Priority Score:** 14/21 (Rank #5)
**Sprint:** BUILD NOW (Sprint 1, Week 2)
**Build Status:** Not Started (depends on A1 template sales)
**Launch Target:** Week 2 (Sprint 1 end)
**Launch Philosophy:** [x] **Validate-First** (Pre-sell subscription alongside A1 template)  ->  See [[products/02-template-support/sales/pre-sale-validation-playbook|Pre-Sale Validation Playbook]]

> [!IMPORTANT]
> **Revenue Scenarios - R1 Subscription ( HIGHEST ROI)**
>
> **TL;DR:** Conservative assumes 30% opt-in conversion. Realistic unlocks 3.3Ã— upside via auto-enrollment (100% try vs 50% opt-in) driving 50% conversion. R1 has **13.5:1 incremental LTV/CAC** (highest of all products) - prioritize this over new A1 acquisition.
>
> | Scenario | Year 3 | Subscribers | Key Drivers | Conversion | LTV/CAC |
> |----------|--------|-------------|-------------|------------|---------|
> | **Conservative** | Rp 175.5M | 195 subs | Opt-in model, Rp 75K/mo, 18-month LTV, 30% A1 base | 30% | 13.5:1 |
> | **Realistic** | Rp 585M | 650 subs | Auto-enroll trials, Rp 75K/mo, 24-month LTV, 50% A1 base | 50% | 13.5:1 |
> | **Aggressive** | Rp 3,240M | 1,800 subs | Auto-enroll + bundle, Rp 150K/mo, 30-month LTV, aggressive A1 | 60% | 45:1 |
>
> **Key Assumptions - Realistic Scenario:**
> - Auto-enrollment: 100% of A1 buyers try R1 (vs 50% opt-in Conservative)
> - Industry benchmark: 50% conversion for SaaS upsells to existing customers
> - Larger A1 base: 350 A1 buyers Year 1 (vs 150 Conservative) from Realistic A1 scenario
> - Better onboarding: Reduces churn 18 -> 24 month lifetime
>
> **Quick Wins (Month 1-3):** Auto-enroll all A1 buyers in free trial, WhatsApp bot for support deflection, test Rp 150K/mo pricing
>
> **Why R1 Matters Most:** Zero cold acquisition cost (warm A1 base), 13.5:1 LTV/CAC = Rp 10M spent returns Rp 135M
>
> See [[products/02-template-support/business-intelligence/three-scenario-analysis|three-scenario-analysis.md]] for complete ROI analysis.

## Gate Status

**Gate Dependency:** A1 Template must launch first (R1 is attachment product)
**Gate Framework:** 3-gate validation (Conversion  ->  Retention  ->  Profitability)
**Current Progress:** Not launched yet
**Next Gates:**
- **Gate 1C (Month 3-5):** 30%+ conversion from first 10 A1 buyers  ->  Continue to Gate 2
- **Gate 2 (Month 6):** <20% average monthly churn  ->  Continue to Gate 3
- **Gate 3 (Month 12):** 15+ active subscribers  ->  Scale | 10-14  ->  Optimize | <10  ->  Kill

---

## Product Overview

**Value Proposition:** "Never outdated analytics - your template stays current, you stay competitive"

**For:** Power BI Template buyers (A1 customers)
**Who:** Want ongoing updates + support, don't want template to become obsolete
**Our Product:** Monthly subscription (Rp 75K/month) for updates + priority support
**Unlike:** One-time template purchase (no updates, no support)
**We Offer:** Peace of mind, always-current metrics, expert help when stuck

---

## What's Included

**Monthly Template Updates:**
- New metrics as we discover user needs
- Bug fixes & improvements
- POS compatibility updates (new formats)
- Visual enhancements (better charts, themes)

**Priority Email/WhatsApp Support:**
- Q&A about how to use template
- Troubleshooting (data not loading, refresh errors)
- Best practices guidance
- Response time: <24 hours (weekdays)

**Early Access:**
- Beta access to Lite Dashboard (when ready)
- New dashboard templates before public release
- Feature voting (what to build next)

**Learning Resources:**
- Monthly tips email ("How to analyze X metric")
- Video tutorials (5-10 minutes each)
- Industry benchmarks (compare your metrics to average)

**NOT Included:**
- [x] Custom template development (not consulting)
- [x] Live training sessions (not 1-on-1 coaching)
- [x] Data entry services (users import own data)
- [x] Power BI Pro license (users need free Desktop version)

---

## Pricing Strategy

**Monthly Subscription:** Rp 75K/month
**Annual Option:** Rp 750K/year (Rp 62.5K/month, 2 months free)

**Why Rp 75K?**
- Affordable for Mikro segment (< Rp 100K threshold)
- Covers support time (1-2 hours/month per customer)
- Profitable at 10+ subscribers (Rp 750K MRR)

**Conversion Target:** 30% of template buyers subscribe

**Revenue Projection (Year 1):**
- 150 cumulative A1 buyers (per [[products/02-template-support/business-intelligence/market-sizing-validation|market sizing]])
- 150 Ã— 30% = 45 total R1 conversions
- 20% monthly churn  ->  23 churned over 12 months (57% cumulative churn)
- **Active subscribers (Month 12):** 17 (45 conversions - 23 churned)
- **MRR (Month 12):** Rp 1.28M | **ARR (Year 1):** Rp 11M
- **Profitability:** Loss of Rp 49.2M in Year 1 (investment year, not profit year)
- **Breakeven:** Month 15 (requires 8+ subscribers to cover Rp 4.8M fixed costs)
- **See:** [[products/02-template-support/business-intelligence/subscription-unit-economics|Unit Economics]] for detailed financial model

---

## Build Requirements

**Build Time:** 1-2 days (simple MVP)

**Week 1 Build (Day 1-2):**
- [ ] Set up Midtrans recurring billing OR create subscription form
- [ ] Create Google Drive folder structure (per customer)
- [ ] Write onboarding email template
- [ ] Set up WhatsApp Business account
- [ ] Create internal tracking sheet (who's subscribed, status)

**Technical Stack:**
- Payment: Midtrans recurring billing OR manual (PayPal/bank transfer)
- Customer Portal: Google Drive folder (shared access per customer)
- Support: WhatsApp Business number + Gmail with labels
- Future: Simple website (download updates, submit tickets)

---

## Success Metrics (3-Gate Validation Framework)

### Gate 1C: Conversion Validation (Month 3-5)

**Timing:** Within 90 days of first 10 A1 template sales

**Prerequisites:**
- A1 Gate 1A passed (10 template sales achieved)
- R1 offered to all 10 A1 buyers (email + nurture campaign)

**Measurement:** R1 subscribers Ã· first 10 A1 buyers (within 90 days)

**Decision Criteria:**

[x] **PASS (30%+ conversion):** 3+ R1 subscribers from 10 A1 buyers
- **Action:** Service validated, continue to Gate 2
- **Expectation:** If 30% holds, will reach 15+ subscribers by Month 12 (Gate 3)

[!] **MARGINAL (20-29% conversion):** 2 subscribers from 10 buyers
- **Action:** Iterate messaging/pricing, monitor next 10 A1 buyers
- **Test:** A/B test Rp 50K vs Rp 75K pricing
- **Decision:** If next 10 also convert at 20%, consider lowering price

[x] **FAIL (<20% conversion):** 0-1 subscribers from 10 buyers
- **Action:** Pivot or kill R1
- **Option 1:** Bundle 3 months free support with A1 purchase (marketing tool)
- **Option 2:** Kill R1, focus on A2 (Advanced Template) instead

**Why 30%+ is critical:** 30% conversion Ã— 150 A1 buyers (Year 1) = 45 conversions  ->  17 active after churn (Month 12)  ->  passes Gate 3 (15+ threshold)

---

### Gate 2: Retention Validation (Month 6)

**Timing:** 6 months after first R1 subscriber

**Prerequisites:**
- Gate 1C passed (3+ subscribers)
- Minimum 6 months of subscription data

**Measurement:** Average monthly churn rate over Months 1-6

**Decision Criteria:**

[x] **PASS (<20% churn):** Product-market fit validated
- **Action:** Continue to Gate 3, churn model is achievable
- **Insight:** On track to reach Year 1 projections (17 active by Month 12)

[!] **MARGINAL (20-25% churn):** Acceptable but needs improvement
- **Action:** Focus on retention (exit surveys, feature improvements, support quality)
- **Delay:** Postpone Gate 3 to Month 12 (give time to reduce churn)

[x] **FAIL (>25% churn):** Product not delivering value
- **Action:** Major pivot required
- **Options:** Improve support quality, add must-have features, or kill R1
- **Root cause:** Survey churned subscribers to identify issues

**Why 6 months?** Larger sample size (6 months Ã— 3-10 subscribers = 18-60 subscriber-months) smooths monthly variance and provides statistically valid churn measurement.

---

### Gate 3: Profitability Path Validation (Month 12)

**Timing:** End of Year 1

**Prerequisites:**
- Gate 1C passed (conversion validated)
- Gate 2 passed (retention validated)

**Measurement:**
- Active subscribers (Month 12): Target 15+
- MRR (Month 12): Target Rp 1.125M+ (15 Ã— Rp 75K)
- Monthly churn: <20% sustained
- Breakeven projection: Month 15-18

**Decision Criteria:**

[x] **PASS:** 15+ active subscribers, clear path to Month 15 breakeven
- **Action:** SCALE
- **Investments:** Hire support staff (1 FTE), build customer portal, increase marketing
- **Target:** 76 active subscribers by Year 2, profitable by Year 3

[!] **MARGINAL:** 10-14 subscribers, breakeven delayed to Month 18-24
- **Action:** OPTIMIZE
- **Focus:** Retention improvements, hold on hiring, revisit in 6 months
- **Risk:** R1 remains viable but slow-growth (lifestyle business, not venture-scale)

[x] **FAIL:** <10 subscribers, no path to profitability
- **Action:** KILL or PIVOT
- **Option 1:** Make support free (use as marketing tool to boost A1 sales)
- **Option 2:** Kill R1, allocate resources to higher-ROI products (A2, A3)
- **Rationale:** <10 subscribers = Rp 750K MRR, below Rp 600K breakeven threshold (8 subscribers)

**Why 15+ subscribers?** 8 subscribers = breakeven point (covers Rp 4.8M fixed costs). 15 subscribers = 87% margin of safety, gives runway to Month 15 even with 20% monthly churn.

---

### Supporting Metrics (Track Weekly/Monthly, Don't Gate On)

**Support Load (Weekly):**
- [x] Target: <5 hours/week total support time
- [!] Alert: 5-10 hours/week (need better docs/FAQs)
- [x] Critical: >10 hours/week (price too low or users too demanding)

**Unit Economics (Monthly):**
- Gross margin: 82% (Rp 61.5K contribution margin per subscriber)
- Fixed costs: Rp 4.8M/month
- Breakeven: 8 subscribers (Rp 600K MRR)
- LTV/CAC: 16.7x Year 1, 33.3x Year 2+ (exceptional for upsell product)

**See:** [[products/02-template-support/business-intelligence/GATE_THRESHOLD_ANALYSIS|Gate Threshold Analysis]] for detailed gate design rationale

---

## Competitive Positioning

**Vs. Buying Template Only:**
- One-Time: Rp 2M, no updates, no support
- With Support: Rp 2M + Rp 75K/month, always current, help when stuck
- **Win:** Peace of mind, stays relevant as business evolves

**Vs. Hiring Consultant (Per Issue):**
- Consultant: Rp 500K-1M per request
- Support: Rp 75K/month, unlimited questions
- **Win:** 10x cheaper for ongoing help

**Vs. Power BI Community Forums:**
- Forums: Free, slow (days), generic answers
- Support: Rp 75K, fast (<24hr), F&B-specific answers
- **Win:** Faster, relevant, personalized

---

## Integration with Sprint 1 Products

**Template Purchase  ->  Support Offer:**
- Immediate email after template purchase
- "Get your first month free" CTA
- Timeline: Day 1 (automated)

**Support Subscriber  ->  Lite Dashboard Early Access:**
- Email in Week 6: "Try Lite Dashboard beta (free for subscribers)"
- Target: 50% try Lite, 20% convert to paid Lite
- Timeline: After Lite Phase 1 launches

**Support  ->  Full SaaS Upgrade Path:**
- Email in Month 6: "Upgrade to cloud analytics"
- Target: 10% convert to Full SaaS
- Timeline: After Full SaaS launches (not Sprint 1)

---

## Documentation

**Strategy & Planning:**
- [[products/02-template-support/product-strategy/product-strategy|Product Strategy]] - Complete R1 Basic strategy (10KB)
- [[products/02-template-support/product-strategy/tier3-pricing-analysis|Tier 3 Pricing Analysis]] - 6 critical vulnerabilities in Tier 3 monthly fee
- [[products/02-template-support/product-strategy/pricing-options-analysis|Pricing Options Analysis]] - 3 alternative models (A/B/C) with recommendations
- [[products/02-template-support/product-strategy/premium-support-tiers|Premium Support Tiers]] - R2 Premium & R3 Enterprise specifications
- [[products/02-template-support/business-intelligence/GATE_THRESHOLD_ANALYSIS|Gate Threshold Analysis]] - Gate design rationale & corrections

**Business Intelligence:**
- [[products/02-template-support/business-intelligence/subscription-unit-economics|Subscription Unit Economics]] - Financial model, LTV/CAC, profitability
- [[products/02-template-support/business-intelligence/market-sizing-validation|Market Sizing Validation]] - TAM/SAM/SOM, conversion assumptions

**Legal & Compliance:**
- [[products/02-template-support/legal/subscription-terms|Subscription Terms]] - Full T&C, Indonesian law compliance
- [[products/02-template-support/legal/sla-definitions|SLA Definitions]] - Support commitments, response times
- [[products/02-template-support/legal/cancellation-policy|Cancellation Policy]] - Refund rules, special circumstances

**Marketing & Sales:**
- [[products/02-template-support/marketing/one-pager|One-Pager]] - Customer-facing sales collateral
- [[products/02-template-support/marketing/customer-faq|Customer FAQ]] - Pre-purchase questions & answers
- [[products/02-template-support/sales/roi-calculator|ROI Calculator]] - Value justification (67-400% ROI)

**Operations:**
- [[products/02-template-support/specifications/tech-spec|Technical Spec]] - Infrastructure & build requirements
- [[products/02-template-support/operations/launch-checklist|Launch Checklist]] - Pre-launch validation

---

## Strategic Context

**Position in 5-Pillar Ecosystem:** Pillar 2 (Retention)

**Revenue Model:** Recurring revenue, high margin (>80% gross margin)
**Strategic Value:** Creates habit-forming relationship (monthly touchpoints)
**Upsell Path:** Support  ->  Lite Dashboard  ->  Full SaaS

---

## Business Intelligence & Strategic Analyses

**Financial Modeling & Projections:**
- [[products/02-template-support/business-intelligence/subscription-unit-economics|Subscription Unit Economics]] - LTV/CAC, cost to serve, profitability (21KB)
- [[products/02-template-support/business-intelligence/market-sizing-validation|Market Sizing Validation]] - TAM/SAM/SOM analysis (22KB)
- [[products/02-template-support/business-intelligence/three-scenario-analysis|Three Scenario Analysis]] - Conservative/Realistic/Aggressive revenue scenarios (9KB)
- [[products/02-template-support/business-intelligence/GATE_THRESHOLD_ANALYSIS|Gate Threshold Analysis]] - Gate timing corrections, churn impact, realistic projections (22KB)

**Documentation & Strategy Audit:**
- [[products/02-template-support/business-intelligence/DOCUMENTATION_ASSESSMENT|Documentation Assessment]] - Comprehensive R1 analysis, alignment check, action items (72KB)

**Purpose:** These files explain WHY strategic decisions were made (gate timing, revenue targets, financial projections). Operational teams should focus on execution docs in `operations/`, `product-strategy/`, etc.

---

**See Also:**

### Company Strategy
- [[biz/strategy/planning/execution/03-sprint-1-roadmap|Sprint 1 Master Plan]] - Week-by-week execution
- [[biz/strategy/planning/execution/01-product-roadmap.md|Product Roadmap]] - R1/R2/R3 timelineon details
- [[products/01-power-bi-template/business-intelligence/strategic-analysis/01-product-business-model|Business Model]] - Recurring revenue detailson strategy
- [[biz/strategy/market-analysis/03-cultural-context|Cultural Context]] - Indonesian market realities

### Growth & Go-to-Market
- [[biz/departments/growth/marketing/02-sprint-1-launch-strategy.md|Launch Strategy]] - Go-to-market plang campaign (Support upsell strategy)
- [[biz/departments/growth/sales/01-sprint-1-playbook.md|Sales Playbook]] - Upsell scripts (line 215-235)
- [[biz/departments/growth/customer-success/01-sprint-1-onboarding-guide.md|Onboarding Guide]] - Support workflowsarding process (line 276-306)

---

---

## Next Steps (Immediate Action Items)

### [x] COMPLETED (January 4, 2026)
- [x] **Documentation complete** - 43 files, 95% execution-ready
- [x] **Critical corrections made:**
 - Gate timing: Week 4  ->  Month 3-5 (accounts for A1 dependency)
 - Revenue projections: 30 subs  ->  17 subs realistic (churn-adjusted)
 - Support SOPs: Expanded 94  ->  776 lines (8.3Ã—)
- [x] **Strategic alignment validated** - 99% aligned with A1 Power BI Template
- See [[products/02-template-support/business-intelligence/DOCUMENTATION_ASSESSMENT|DOCUMENTATION_ASSESSMENT.md]] for full analysis

### BEFORE LAUNCH (Priority 1 - Required)

**Week -1 (Legal & Infrastructure):**
1. [ ] **Review legal docs with legal counsel** (2-3 hours)
 - Subscription terms, SLA definitions, cancellation policy
 - Ensure Indonesian PDP Law 2022 compliance
 - Files: `legal/subscription-terms.md`, `legal/sla-definitions.md`, `legal/cancellation-policy.md`

2. [ ] **Set up Midtrans recurring billing** (2-3 hours)
 - OR set up manual payment tracking (Google Sheet fallback)
 - Configure webhook for failed payments
 - Test subscription flow end-to-end
 - See: `specifications/tech-spec.md` for integration details

3. [ ] **Configure WhatsApp Business** (1 hour)
 - Set up business profile, quick replies, away messages
 - See: `operations/launch-checklist.md` lines 42-100

4. [ ] **Create initial FAQ & video tutorials** (3-4 hours)
 - Top 10 common questions (based on A1 buyer questions)
 - 1-2 video tutorials (data import, metric interpretation)
 - Use templates from: `training/kb-article-templates.md`, `training/video-tutorial-scripts.md`

**Total Time:** ~8-11 hours

### WEEK 2 LAUNCH (Priority 2 - Launch Week)

1. [ ] **Launch simultaneously with A1** (Week 2, Day 11+)
 - Add R1 offer to A1 purchase flow (post-purchase email)
 - Incentive: "First month free for early 10 A1 buyers"
 - See: `operations/launch-checklist.md` for full checklist

2. [ ] **Track first 10 A1 buyers** (Weeks 2-4)
 - Measure conversion rate (target 30%+)
 - Monitor support request volume (target <5 hours/week)
 - Collect feedback for R1 offer messaging
 - See: `operations/gate-tracking.md` for metrics

**Total Time:** Ongoing Week 2-4

### MONTH 2-3 (Priority 3 - Post-Launch Optimization)

1. [ ] **Deliver first monthly updates** (ongoing)
 - Month 1: Bug fixes, 1-2 new metrics
 - Month 2-3: Based on subscriber feature requests
 - See: `training/update-creation-sop.md`

2. [ ] **Build knowledge base articles** (8 hours)
 - Create 10+ self-service guides from actual support tickets
 - Reduce support load through self-service
 - Templates: `training/kb-article-templates.md`

3. [ ] **Track Gate 1C metrics** (Month 3-5)
 - **Timing:** Within 90 days of first 10 A1 buyers
 - **Target:** 30%+ conversion (3+ R1 subs from first 10 A1 buyers)
 - **Pass criteria:** [x] 30%+  ->  Continue | [!] 20-29%  ->  Iterate | [x] <20%  ->  Pivot
 - See: `business-intelligence/GATE_THRESHOLD_ANALYSIS.md` for detailed gate framework

4. [ ] **Evaluate R2/R3 premium tiers** (if demand exists)
 - R2 Premium: Rp 175K/month (30-min monthly call + 1hr custom work)
 - R3 Enterprise: Rp 500K/month (strategic calls + proactive monitoring)
 - See: `product-strategy/premium-support-tiers.md`

### ONGOING METRICS TO TRACK

**Weekly (10-15 min/week):**
- Support ticket volume & response time (target <24hr SLA)
- Total support hours (target <5h/week at 30 subs)
- Customer satisfaction scores (target 4.5+/5.0)

**Monthly (30-60 min/month):**
- Conversion rate from A1 buyers (target 30%+)
- Monthly churn rate (target <20%)
- Active subscribers vs target (Year 1: 17 active)
- MRR growth (Year 1: Rp 1.28M target)

**Gate Evaluation:**
- **Gate 1C (Month 3-5):** 30%+ conversion from first 10 A1 buyers
- **Gate 2 (Month 6):** <20% average monthly churn
- **Gate 3 (Month 12):** 15+ active subscribers, Rp 1.125M+ MRR

See: `operations/gate-tracking.md` for complete metrics tracking dashboard

---

## Critical Dependencies

[!] **R1 success depends on A1 success:**
- R1's TAM = A1 buyer base (not independent market)
- Year 1 target: 150 A1 buyers  ->  45 R1 conversions  ->  17 active (after churn)
- If A1 fails to hit 150 buyers, R1's TAM collapses
- **Focus:** Ensure A1 product-market fit FIRST before scaling R1 investment

See: [[products/02-template-support/business-intelligence/DOCUMENTATION_ASSESSMENT#r1-to-a1-strategic-alignment-analysis-january-4-2026|R1-to-A1 Strategic Alignment Analysis]] for full dependency analysis

---

**Product Owner:** [TBD]
**Last Updated:** January 4, 2026 (Documentation complete, next steps added)
**Next Review:** Month 3-5 (Gate 1C evaluation)
**Documentation Status:** 95% execution-ready (Priority 1 tasks complete, Priority 2 pending)

