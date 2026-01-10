# Gate 2A Tracking Dashboard - Simple P&L Tracker

**Product:** R2a - Simple P&L Tracker
**Product ID:** R2a
**Pillar:** P2 - Retention (Accounting Add-On)
**Gate:** Gate 2A (Launch & Traction Validation)
**Target Date:** Sprint 2 End (Week 6 - Early January)
**Owner:** Product Lead

---

## Gate 2A Overview

**Purpose:** Validate that R2a has achieved sufficient traction and product-market fit to justify building additional accounting modules (R2c COGS, R2f Invoice).

**Strategic Context:** Gate 2A is a "Build/Kill" decision point. If R2a fails, we stop accounting module development and focus resources elsewhere (E1 expansion, C1 SaaS launch).

**Cross-Reference:** See [[biz/strategy/planning/execution/01-product-roadmap|09-product-roadmap.md]] for R2-series sequencing logic and [[biz/strategy/planning/foundations/06-prioritization-framework|08-prioritization-framework.md]] for gate methodology.

---

## Success Criteria (Gate 2A)

### Primary Metrics (Must Pass All)

| Metric | Target (Excellent) | Minimum (Pass) | Current | Status |
|--------|-------------------|----------------|---------|--------|
| **Paid Subscribers** | 20+ | 10 | 0 | Not Started |
| **MRR (Monthly Recurring Revenue)** | Rp 1.5M+ | Rp 750K | Rp 0 | Not Started |
| **Activation Rate** | 80%+ | 60% | 0% | Not Started |
| **Engagement Rate** | 70%+ | 50% | 0% | Not Started |
| **NPS (Net Promoter Score)** | 60+ | 40 | N/A | ⚪ Pending |

**Metric Definitions:**

**1. Paid Subscribers:** Number of users paying for Standard (Rp 75K) or Premium (Rp 100K) tier.
- **Why 10 minimum?** At least 10 paying customers proves willingness to pay for accounting SaaS in Indonesian Mikro market.
- **Why 20 target?** 20 customers = statistically significant sample for churn/engagement analysis.

**2. MRR (Monthly Recurring Revenue):** Total monthly subscription revenue.
- **Calculation:** (# Standard subs Ã— Rp 75K) + (# Premium subs Ã— Rp 100K)
- **Why Rp 750K minimum?** Covers 1 part-time support rep salary (break-even operations).
- **Why Rp 1.5M target?** Funds R2c development (Rp 30M/month eng costs Ã· 20 products).

**3. Activation Rate:** % of signed-up users who generate their first P&L report within 24 hours.
- **Why 60% minimum?** Industry benchmark for SaaS onboarding activation.
- **Why 80% target?** R2a is simpler than competitor tools; should outperform benchmarks.

**4. Engagement Rate:** % of users who log expenses 2+ times per month.
- **Why 50% minimum?** If <50% engage regularly, churn will be catastrophic (>30%/month).
- **Why 70% target?** Engaged users = sticky users = sustainable MRR.

**5. NPS (Net Promoter Score):** Survey question: "How likely are you to recommend R2a to another F&B owner?" (0-10 scale)
- **Calculation:** % Promoters (9-10) minus % Detractors (0-6)
- **Why 40 minimum?** SaaS industry "good" threshold.
- **Why 60 target?** "Excellent" threshold = organic word-of-mouth growth.

---

## Weekly Tracking Sheet (Week 1-4)

### Week 1 (Launch Week)

| Day | New Subs | Total Subs | MRR | Activated | Engagement | P&L Reports | Expenses Logged |
|-----|----------|------------|-----|-----------|------------|-------------|-----------------|
| Mon | | | Rp | | | | |
| Tue | | | Rp | | | | |
| Wed | | | Rp | | | | |
| Thu | | | Rp | | | | |
| Fri | | | Rp | | | | |
| Sat | | | Rp | | | | |
| Sun | | | Rp | | | | |
| **Week 1 Total** | **__** | **__** | **Rp __** | **__%** | **__%** | **__** | **__** |

**Week 1 Target:** 5 subscribers, Rp 375K MRR, 70%+ activation

---

### Week 2-4 (Growth & Optimization)

| Week | New Subs | Total Subs | MRR | Activation % | Engagement % | Churn Count | Notes |
|------|----------|------------|-----|--------------|--------------|-------------|-------|
| Week 2 | | | Rp | | | | |
| Week 3 | | | Rp | | | | |
| Week 4 | | | Rp | | | | |
| **Total (Week 4)** | **__** | **__** | **Rp __** | **__%** | **__%** | **__** | **Gate Decision** |

**Week 4 Target (Gate 2A):** 10-20 subscribers, Rp 750K-1.5M MRR, 60-80% activation, 50-70% engagement

---

## Leading Indicators (Predictive Metrics)

**These metrics predict future success/failure before Gate 2A:**

### Indicator 1: "Magic Moment" Rate (Day 1)

**Definition:** % of new sign-ups who generate P&L report within first 24 hours.

**Target:** >60% (If <40%, onboarding is broken)

**Why It Matters:** Users who don't hit "magic moment" (seeing their P&L) churn >90% within 7 days.

**Weekly Tracking:**
| Week | Sign-ups | Generated P&L (Day 1) | Magic Moment % |
|------|----------|-----------------------|----------------|
| Week 1 | | | |
| Week 2 | | | |

**Intervention:** If Week 1 rate <40%, PAUSE marketing. Fix onboarding before acquiring more users.

---

### Indicator 2: CSV Upload Success Rate

**Definition:** % of users who successfully upload POS CSV on first attempt.

**Target:** >70% (If <50%, POS parser is failing)

**Why It Matters:** #1 drop-off point in onboarding funnel (Step 3).

**Failure Modes:**
- **User Error:** Opens CSV in Excel, corrupts formatting (40% of failures)
- **Wrong File:** Uploads PDF summary instead of CSV (30%)
- **Unsupported POS:** Uses POS we don't support yet (20%)
- **Actual Bug:** Parser fails on valid file (10%)

**Weekly Tracking:**
| Week | CSV Upload Attempts | Successful | Success % | Top Failure Reason |
|------|---------------------|------------|-----------|-------------------|
| Week 1 | | | | |

**Intervention:** If Rate <50%, add clearer instructions + video tutorial.

---

### Indicator 3: WhatsApp Bot Setup Rate (Day 7)

**Definition:** % of active users who connect WhatsApp bot within 7 days.

**Target:** >50% (If <30%, users don't see value of automation)

**Why It Matters:** WhatsApp bot users have 80% lower churn (habit lock-in).

**Weekly Tracking:**
| Week | Active Users (Day 7) | WhatsApp Bot Connected | Setup % |
|------|----------------------|-----------------------|---------|
| Week 1 | | | |

**Intervention:** If Rate <30%, send more aggressive prompts (Day 2, Day 3, Day 5).

---

### Indicator 4: Expense Velocity (Weekly)

**Definition:** Average number of expenses logged per user per week.

**Target:** >5 expenses/week (If <2, users aren't forming habit)

**Why It Matters:** High expense velocity = users trust R2a for daily operations (not just one-time export).

**Weekly Tracking:**
| Week | Total Expenses Logged | Active Users | Avg per User |
|------|----------------------|--------------|--------------|
| Week 1 | | | |

**Intervention:** If Avg <2, send weekly reminders (Friday 4pm: "Log your week's expenses").

---

## Decision Trees (Gate 2A Meeting)

### Scenario A: PASS (Green Light) [x]

**Conditions (ALL must be met):**
- [x] Total Subscribers >= 10
- [x] MRR >= Rp 750K
- [x] Activation Rate >= 60%
- [x] Engagement Rate >= 50%
- [x] Month 1 Churn ≤ 20%
- [x] NPS >= 40

**Decision:** **Approve R2c & R2f Development**

**Next Actions:**
1. **Scale Marketing:** Increase ad spend from Rp 5M  ->  Rp 15M/month
2. **Build R2c (COGS Calculator):** Start development (Week 7-10)
3. **Build R2f (Invoice Management):** Queue for Week 11-14
4. **Hire Support:** Dedicated accounting support rep (Rp 8M/month)
5. **Expand Sales:** Direct outreach to GoFood top 100 sellers

**Budget Allocation:**
- R2c Development: Rp 30M (4 weeks eng + design)
- R2f Development: Rp 30M
- Marketing Scale: +Rp 10M/month
- Support Hire: Rp 8M/month
**Total New Spend:** Rp 78M over 3 months

**ROI Justification:** 20 customers  ->  60 customers in 3 months (R2a+R2c+R2f bundle) = Rp 4.5M MRR = break-even Month 6.

---

### Scenario B: PARTIAL PASS (Yellow Light) [!]

**Conditions:**
- [!] Subscribers: 5-9 (below target but not zero)
- [!] MRR: Rp 375K-749K
- [x] Activation Rate >= 60% (product works when used)
- [x] Engagement Rate >= 50%
- [!] Churn: 20-30% (worrying but not catastrophic)

**Analysis:** **Product works, but distribution is weak.**

**Decision:** **Pause Expansion. Fix Marketing First.**

**Next Actions:**
1. **DO NOT build R2c/R2f yet** (wait until 10+ subscribers)
2. **Double down on existing channels:**
 - WhatsApp Groups: Seed 10 more communities with beta users
 - Email Existing Users: Promote R2a to all A1/E1 customers (500+ emails)
 - Referrals: Offer Rp 50K credit for each referral (both referrer + referee)
3. **Extend Trial Period:** Offer 60-day trial (vs 30-day) to increase conversions
4. **Run Pricing Experiment:** Test Rp 50K entry tier (currently Rp 75K minimum)
5. **Meet Again in 4 Weeks:** Gate 2A.1 re-evaluation

**Budget:** Hold R2c/R2f budgets. Spend only Rp 5M/month on marketing experiments.

---

### Scenario C: FAIL (Red Light) [x]

**Conditions (ANY of these):**
- [x] Subscribers < 5 after 4 weeks
- [x] Activation Rate < 30% (onboarding broken)
- [x] Engagement Rate < 30% (no habit formation)
- [x] Month 1 Churn > 40% (bleeding users)
- [x] NPS < 20 (users actively dislike product)

**Analysis:** **No product-market fit OR product is fundamentally broken.**

**Decision:** **KILL R2-Series OR Deep Pivot.**

**Options:**

**Option 1: Kill Accounting Modules**
- Stop R2a marketing immediately
- Sunset R2a over 3 months (notify existing users, offer refunds)
- Reallocate resources to E1 (Web Dashboard) or C1 (Full SaaS)
- **Cost:** Rp 15M sunk (R2a development), but prevent Rp 60M further waste (R2c/R2f)

**Option 2: Deep Pivot**
- **If Activation < 30%:** Broken onboarding. Rebuild UX (4 weeks, Rp 20M)
- **If Churn > 40%:** Wrong target market. Pivot to Phase 3 SMEs (requires R2a Premium features)
- **If NPS < 20:** Wrong value prop. Interview users. "Is Excel really good enough?"

**Option 3: Bundle-Only Strategy**
- Stop standalone R2a sales
- Only offer as bundle with E1 (Analytics + Accounting = Rp 250K)
- Test if bundling increases attach rate (target 40%+ of E1 users)

**Re-Evaluation:** If pivot, reassess in 8 weeks (Gate 2A.2).

---

## Competitive Benchmarks

| Metric | R2a Target | Jurnal (Competitor) | Industry Standard (SaaS) |
|--------|------------|---------------------|--------------------------|
| Activation Rate | 80% | ~40% (complex onboarding) | 60-70% |
| Month 1 Churn | <20% | ~25% | 20-30% |
| Month 3 Churn | <10% | ~15% | 10-15% |
| NPS | 60+ | 45 | 50 (good), 70 (excellent) |

**R2a Advantage:** Simpler product should outperform Jurnal on activation. If we don't, something is wrong.

---

## Risk Mitigation

### Risk 1: "Excel is Good Enough" (Market Risk)

**Early Signal:** High sign-ups but <30% activation (users look, then decide Excel is fine).

**Mitigation:**
- Emphasize **time savings** in messaging (5 hours  ->  15 mins)
- Show **cost leak detection** examples (Rp 500K saved/month)
- Offer **free Excel  ->  R2a migration service** (we build their first P&L for them)

---

### Risk 2: CSV Import Failure (Product Risk)

**Early Signal:** <50% CSV upload success rate.

**Mitigation:**
- Pre-launch: Test with 20 real POS CSV files from beta users
- Week 1: Monitor error logs hourly, fix parser bugs within 24 hours
- Fallback: Offer manual data entry as backup (not ideal, but prevents drop-off)

---

### Risk 3: Too Expensive (Pricing Risk)

**Early Signal:** High trial starts but <10% convert to paid after 30 days.

**Mitigation:**
- Week 2: Test Rp 50K Basic tier (currently Rp 75K minimum)
- Week 3: Offer annual plan (Rp 750K/year, save Rp 150K = 2 months free)
- Week 4: Survey churned users: "What price would you pay?" (price sensitivity test)

---

## Implementation Checklist

### Tech Readiness (1 Week Before Launch)

**Product:**
- [ ] POS Import tested with 20 real CSV files (5Ã— each: Moka, Pawoon, Qasir, Majoo)
- [ ] PDF Export generates professional SAK EMKM format
- [ ] Mobile view tested on 3 device sizes (phone, tablet, desktop)
- [ ] WhatsApp bot tested with 10 expense entries (various formats)
- [ ] Error handling for all failure modes (invalid CSV, network errors, etc.)

**Infrastructure:**
- [ ] Database can handle 100 concurrent users
- [ ] CSV upload limit: 10MB max file size
- [ ] Backup system: Daily backups, 30-day retention
- [ ] Monitoring: Error alerts sent to Slack #r2a-alerts channel

---

### Marketing Readiness (1 Week Before Launch)

**Content:**
- [ ] Email blast to 500 A1/E1 users drafted & scheduled
- [ ] "Excel vs R2a" landing page live (SEO optimized)
- [ ] 3 case studies from beta users (with photos, quotes, P&L screenshots)
- [ ] Instagram carousel (5 slides: Before/After accounting chaos  ->  clarity)
- [ ] WhatsApp group message template (for organic seeding)

**Channels:**
- [ ] Facebook ad campaign budgeted (Rp 5M/month, targeting F&B owners)
- [ ] Google Ads keywords researched ("software akuntansi warung", "laporan keuangan usaha")
- [ ] 10 WhatsApp communities identified for seeding (Komunitas Warung, etc.)

---

### Support Readiness (1 Week Before Launch)

**Documentation:**
- [ ] "How to Import CSV from Moka" video (2 mins, Indonesian narration)
- [ ] "How to Import from Pawoon" video
- [ ] Common FAQs documented (10 Q&As)
- [ ] WhatsApp canned responses loaded (5 scripts for top issues)

**Team:**
- [ ] 1 support rep trained on R2a product (can answer 90% of questions)
- [ ] Support email: support-r2a@[company].com set up
- [ ] SLA defined: <24h for email, <4h for WhatsApp (Premium tier)

---

## Related Documents

**Product Context:**
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/R2a-pl-analytics|../]] - R2a product overview & success metrics
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/product-scope|product-scope.md]] - What's in/out of R2a
- [[onboarding-guide|onboarding-guide.md]] - Activation funnel details

**Strategic Context:**
- [[biz/strategy/planning/execution/01-product-roadmap|09-product-roadmap.md]] - R2-series sequencing (R2a  ->  R2c  ->  R2f)
- [[biz/strategy/planning/foundations/06-prioritization-framework|08-prioritization-framework.md]] - Gate methodology
- [[biz/strategy/planning/execution/04-sprint-2-plan|11-sprint-2-master-plan.md]] - Week 5-6 timeline

---

**Last Updated:** 2025-12-26
**Owner:** Product Lead
**Gate 2A Decision Meeting:** End of Week 6 (Early January)



---

**Related Documents:**
- [[products/04-accounting-module/04-accounting-module|Product Overview]] - Main product documentation
- [[products/04-accounting-module/product-variants/product-variants|Product Variants Hub]] - All variants



