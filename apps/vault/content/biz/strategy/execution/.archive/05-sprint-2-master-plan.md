# Sprint 2 Master Plan
**Monetization & Expansion: Paid Tier Launch + Pillar 2 Products**

**Timeline:** Weeks 5-8
**Products:** Web Dashboard Lite Phase 2 + HPP/COGS Calculator + Simple P&L Tracker
**Goal:** First paid conversions (Lite) + Pillar 2 MRR + Validate pricing

> [!NOTE]
> **Cultural Context:** Sprint 2 execution must align with Indonesian market realities documented in [[biz/strategy/market-analysis/02-cultural-context|Cultural Context]]:
> - **Soft upgrade prompts**  -  "Upgrade untuk fitur lengkap" not aggressive paywalls
> - **WhatsApp renewal reminders**  -  Not just in-app or email
> - **Community case studies**  -  Anonymous before/after stories for conversion
> - **Data privacy messaging**  -  "Data Anda tetap aman" when introducing cloud features

> [!IMPORTANT]
> **Prerequisite:** Sprint 2 only executes if **Gate 1 passes** (Sprint 1 validation).
> - Gate 1A: 5+ template sales [x]
> - Gate 1B: 50+ Lite users, 30%+ 7-day engagement [x]
> - Gate 1C: 30%+ Support conversion [x]

---

## Executive Summary

**The Strategy:**
Build on Sprint 1's validation to launch first paid products:

1. **Web Dashboard Lite Phase 2** (expand 6 -> 14 features + paid tier)  ->  First paid conversions
2. **HPP/COGS Calculator** (Pillar 2, AI-coded)  ->  Rp 50-75K/mo recurring
3. **Simple P&L Tracker** (Pillar 2, AI-coded)  ->  Bundled or standalone
4. **Template Marketing Scale** (continue A1 momentum)  ->  Rp 50-100M additional

**Why This Sprint?**
- Sprint 1 validated engagement (Lite) and willingness to pay (Template)
- Now: Test **recurring revenue** from Phase 1 personas
- Budget unlocked: Template revenue funds cloud infrastructure
- Lite codebase enables fast feature addition (reuse logic for R2c)

**Success Metrics:**
- Lite paid conversion >5%
- COGS tool demand signal (10+ users)
- Combined MRR: Rp 1.5-3.5M/month

---

## Sprint 2 Products in Detail

### Product 1: Web Dashboard Lite Phase 2

**Objective:** Expand free tier to create upgrade pressure, launch paid tier to monetize.

**Phase 2 Features (6 -> 14 features):**

| # | Feature | Free Tier | Paid Tier (Rp 200-350K) |
|---|---------|-----------|------------------------|
| 1 | Login/Security | [x] | [x] |
| 2 | CSV Import | [x] | [x] |
| 3 | Smart Defaults | [x] | [x] |
| 4 | Revenue Dashboard (2 numbers) | [x] | [x] Enhanced (5 numbers) |
| 5 | Staff Performance Overview | [x] Basic | [x] Detailed + trends |
| 6 | 1-Screen Onboarding | [x] | [x] |
| 7 | **Food Cost % Calculator** | [x] | [x] NEW |
| 8 | **Daily P&L Summary** | [x] | [x] NEW |
| 9 | **7-Day Trend Charts** | [x] | [x] NEW |
| 10 | **Export to PDF** | [x] | [x] NEW |
| 11 | **WhatsApp Daily Alert** | [x] | [x] NEW |
| 12 | **Multi-device Sync** | [x] | [x] NEW |
| 13 | **Staff Efficiency Score** | [x] | [x] NEW |
| 14 | **Benchmarking (opt-in)** | [x] | [x] NEW |

**Pricing Strategy:**

| Tier | Price | Features | Target |
|------|-------|----------|--------|
| **Free** | Rp 0 | 6 basic features, 1 outlet, 1 user | Trial, validation |
| **Starter** | Rp 200K/mo | 10 features, 1 outlet, 2 users | Price-sensitive Mikro |
| **Pro** | Rp 350K/mo | 14 features, 1 outlet, 3 users + WhatsApp alerts | Committed Mikro |

**Cultural Considerations:**
- **Upgrade messaging:** "Lihat data lebih lengkap" (See more complete data)  -  not "Unlock premium"
- **Free tier remains useful**  -  Don't cripple it; Tall Poppy personas need to feel no pressure
- **WhatsApp alerts:** Voice note friendly, Bahasa Indonesia, simple metrics only
- **Offline-first maintained:** Paid tier still works offline (trust feature)

---

### Product 2: HPP/COGS Calculator (R2c)

**Objective:** Standalone micro-tool for food cost tracking, shares logic with Lite Dashboard.

**Features:**
- Input: Daily ingredient costs, portion sizes
- Output: Food Cost % per menu item, daily, weekly
- Alert: "Food cost melebihi 35%!" (Food cost exceeds 35%!)
- Integration: Exports to Lite Dashboard (if user has both)

**Pricing:**
- **Standalone:** Rp 50K/month
- **Bundled with Lite Paid:** Rp 75K/month (discount)

**Build Approach:**
- Reuse Lite Dashboard's Food Cost % calculation logic
- New UI: Simplified single-purpose app
- AI-coded: 2-3 days development

**Cultural Considerations:**
- **Neutral language:** "Sistem mendeteksi food cost tinggi"  -  not "Anda boros" (You're wasteful)
- **Offline-first:** Works without internet
- **WhatsApp export:** Send daily summary to owner's WhatsApp

---

### Product 3: Simple P&L Tracker (R2a)

**Objective:** Basic income/expense tracker for Mikro businesses without accountants.

**Features:**
- Input: Daily income (from POS or manual), daily expenses (categorized)
- Output: Daily/weekly/monthly P&L, profit margin %
- Alert: "Minggu ini margin turun 5%!" (This week margin dropped 5%!)
- Export: Simple PDF for bank loan applications

**Pricing:**
- **Standalone:** Rp 50K/month
- **Bundled with Lite Paid:** Included in Pro tier (Rp 350K)

**Build Approach:**
- Simple Electron app (like Lite Dashboard)
- AI-coded: 3-4 days development
- Optional: Integration with Lite Dashboard exports

**Cultural Considerations:**
- **SAK EMKM awareness:** Note that this is NOT a full accounting tool  -  refer to accountant for tax
- **Cash-based:** Indonesian Mikro mostly cash, not accrual
- **Family business friendly:** Categories like "Gaji keluarga" (Family salary) acceptable

---

### Product 4: Template Marketing Scale (A1 Continuation)

**Objective:** Continue template sales momentum, target 20+ additional sales in Sprint 2.

**Activities:**
- [ ] Week 5: Launch in 3 new Facebook groups (outside initial communities)
- [ ] Week 6: Create 2 case study posts (anonymous success stories from Sprint 1 buyers)
- [ ] Week 7: Partner with 1 paguyuban for endorsement (Bandung or Surabaya focus)
- [ ] Week 8: Price test: Rp 2.5M vs Rp 3M (A/B for new communities)

**Revenue Target:**
- 15-25 additional template sales Ã— Rp 2.5M avg = Rp 37.5-62.5M

---

## Week-by-Week Timeline

### **Week 5: Build Sprint**

**Web Dashboard Lite Phase 2:**
- [ ] Day 1-2: Implement Food Cost % Calculator (feature 7)
- [ ] Day 2-3: Implement Daily P&L Summary (feature 8)
- [ ] Day 3-4: Implement 7-Day Trend Charts (feature 9)
- [ ] Day 4-5: Implement Export to PDF (feature 10)
- **Build time:** 5 days (AI-coded, parallel builds)

**HPP/COGS Calculator:**
- [ ] Day 1-2: Build standalone UI
- [ ] Day 2-3: Integrate calculation logic from Lite
- [ ] Day 3: Test with 3 sample data sets
- **Build time:** 3 days (AI-coded)

**Simple P&L Tracker:**
- [ ] Day 3-5: Build basic UI + calculation
- [ ] Day 5: Test with sample data
- **Build time:** 3 days (AI-coded)

**Template Marketing:**
- [ ] Post in 3 new Facebook groups
- [ ] Collect Sprint 1 success stories (anonymous)

**Deliverables by End of Week 5:**
- Lite Phase 2 features 7-10 built
- R2c (COGS Calculator) MVP built
- R2a (P&L Tracker) MVP built
- Template marketing expanded

---

### **Week 6: Integration & Polish**

**Web Dashboard Lite Phase 2:**
- [ ] Day 1-2: Implement WhatsApp Daily Alert (feature 11)
- [ ] Day 2-3: Implement Multi-device Sync (feature 12)
- [ ] Day 3-4: Implement Staff Efficiency Score (feature 13)
- [ ] Day 4-5: Implement Benchmarking opt-in (feature 14)
- [ ] Day 5: Integration testing all 14 features

**HPP/COGS Calculator:**
- [ ] Polish UI, fix bugs
- [ ] WhatsApp export integration

**Simple P&L Tracker:**
- [ ] Polish UI, fix bugs
- [ ] PDF export for bank loans

**Template Marketing:**
- [ ] Publish 2 case study posts
- [ ] Begin paguyuban outreach

**Deliverables by End of Week 6:**
- Lite Phase 2 all 14 features complete
- R2c ready for launch
- R2a ready for launch

---

### **Week 7: Soft Launch + Pricing Test**

**Web Dashboard Lite Phase 2:**
- [ ] **SOFT LAUNCH** paid tiers to existing free users (WhatsApp announcement)
- [ ] Offer: "First 20 upgrades get 30-day free trial of Pro tier"
- [ ] Monitor conversion rate daily

**HPP/COGS Calculator:**
- [ ] **LAUNCH** to template buyers first (WhatsApp)
- [ ] Offer: "Gratis 14 hari untuk pembeli template" (Free 14 days for template buyers)

**Simple P&L Tracker:**
- [ ] **LAUNCH** bundled with COGS Calculator
- [ ] Offer: "Paket hemat Rp 75K/bulan untuk kedua tools" (Value pack Rp 75K/month for both tools)

**Template Marketing:**
- [ ] Paguyuban endorsement goes live (if secured)
- [ ] Price test: Rp 2.5M vs Rp 3M

**Deliverables by End of Week 7:**
- Paid tier conversion data (target: 5%+)
- COGS tool user adoption (target: 10+ users)
- Template pricing insight

---

### **Week 8: Validation & Gate 2**

**All Products:**
- [ ] Collect user feedback (NPS survey via WhatsApp)
- [ ] Measure conversion rates
- [ ] Measure churn (did anyone cancel after trial?)
- [ ] Analyze feature usage data

**Gate 2 Preparation:**
- [ ] Compile metrics for Gate 2 decision
- [ ] Document learnings for Sprint 3 planning

**Deliverables by End of Week 8:**
- Gate 2 metrics ready
- Sprint 3 plan drafted (conditional on Gate 2 outcome)

---

## Gate 2: Paid Conversion Validation (End of Week 8)

### Gate 2A: Lite Paid Conversion

**Decision Criteria:**
- [x] **>5% conversion** from free to paid  ->  Pricing validated, proceed to Sprint 3
- [!] **3-5% conversion**  ->  Price too high OR value not clear, iterate pricing/features
- [x] **<3% conversion**  ->  Fundamental issue, do NOT proceed to Full SaaS

**Actions if passes:**
- Build Full SaaS Basic (C1) in Sprint 3
- Scale Lite marketing
- Price lock at validated tier

**Actions if fails:**
- Lower paid tier price to Rp 150K
- Add 2 more "wow" features to paid tier
- Extend soft launch 2 more weeks
- Do NOT build Full SaaS until conversion validates

---

### Gate 2B: COGS Tool Demand Signal

**Decision Criteria:**
- [x] **10+ active users** after 14-day trial  ->  Demand validated, keep in portfolio
- [!] **5-10 users**  ->  Useful but not priority, maintain but don't invest more
- [x] **<5 users**  ->  Kill product, merge logic into Lite only

**Actions if passes:**
- Keep R2c as standalone product
- Consider bundle pricing with Lite

**Actions if fails:**
- Deprecate standalone app
- Integrate all features into Lite paid tier only

---

### Gate 2C: Template Sales Momentum

**Decision Criteria:**
- [x] **15+ new sales** in Sprint 2  ->  Continue scaling, consider price increase
- [!] **8-14 sales**  ->  Plateau, focus on support upsells instead
- [x] **<8 sales**  ->  Market saturation, shift focus to Lite growth

---

## Resource Allocation

**Week 5:**
- 50% Lite Phase 2 (build 4 new features)
- 30% R2c + R2a (parallel AI-coding)
- 20% Template marketing

**Week 6:**
- 50% Lite Phase 2 (build remaining 4 features + integration)
- 30% R2c + R2a polish
- 20% Marketing (case studies, paguyuban)

**Week 7:**
- 30% Lite soft launch + monitoring
- 30% R2c + R2a launch + monitoring
- 40% Template marketing + support

**Week 8:**
- 40% Data collection + analysis
- 30% User feedback + NPS
- 30% Sprint 3 planning + Gate 2 decision

---

## Revenue Projections

### **Conservative Scenario**
- Template: 15 sales Ã— Rp 2.5M = **Rp 37.5M one-time**
- Lite paid: 5 conversions Ã— Rp 250K = **Rp 1.25M MRR**
- R2c + R2a: 8 users Ã— Rp 65K = **Rp 520K MRR**
- Support: +3 subscribers Ã— Rp 75K = **Rp 225K MRR**
- **Sprint 2 Total:** Rp 37.5M one-time + Rp 2M MRR

### **Optimistic Scenario**
- Template: 25 sales Ã— Rp 3M = **Rp 75M one-time**
- Lite paid: 12 conversions Ã— Rp 300K = **Rp 3.6M MRR**
- R2c + R2a: 15 users Ã— Rp 65K = **Rp 975K MRR**
- Support: +5 subscribers Ã— Rp 75K = **Rp 375K MRR**
- **Sprint 2 Total:** Rp 75M one-time + Rp 5M MRR

### **Cumulative (End of Sprint 2):**
- Total one-time revenue: Rp 57.5M - 125M
- Total MRR: Rp 2.2M - 5.4M
- Runway extended: 3-6 months of cloud infrastructure funded

---

## Dependencies & Risks

### **Product Dependencies**

**Lite Phase 2  ->  R2c:**
- COGS Calculator shares Food Cost % logic with Lite
- If Lite breaks, R2c may break

**Template Sales  ->  R2c/R2a Marketing:**
- Template buyers are prime audience for R2c/R2a
- Low template sales = smaller R2c/R2a launch audience

**Gate 1  ->  Sprint 2:**
- Sprint 2 only makes sense if Gate 1 passes
- If Gate 1 fails, pivot to iteration instead

### **Critical Risks**

**Risk 1: Paid conversion <3%**
- **Impact:** Can't justify Full SaaS build, runway pressure
- **Mitigation:** Lower price, extend trial, fix value prop

**Risk 2: WhatsApp alerts blocked**
- **Impact:** Key differentiator lost
- **Mitigation:** Use WhatsApp Business API properly, pre-approve templates

**Risk 3: Users don't understand paid value**
- **Impact:** High free usage, no conversion
- **Mitigation:** Better onboarding, "Aha" moments in first 30 seconds

**Risk 4: Paguyuban says no**
- **Impact:** Lose key GTM channel
- **Mitigation:** Have 3 backup paguyuban targets, offer free tools for endorsement

---

## Sprint 3 Decision Matrix

**Based on Week 8 Gate 2 Results:**

| Lite Conversion | COGS Demand | Template Sales | Sprint 3 Action |
|-----------------|-------------|----------------|-----------------|
| [x] >5% | [x] 10+ users | [x] 15+ sales | **Best case:** Build Full SaaS Basic (C1) + R2b + R2f |
| [x] >5% | [x] <5 users | [x] 15+ sales | Build C1, deprecate standalone R2c |
| [!] 3-5% |  -  |  -  | Iterate Lite pricing, delay C1 by 2-4 weeks |
| [x] <3% |  -  |  -  | **Major pivot:** Fix Lite fundamentally, do NOT build C1 |

**Most Likely Scenario:** Lite conversion 5-8%, COGS tool has modest adoption, template sales plateau

---

## Next Immediate Actions

**End of Sprint 1 (Week 4):**
1. ⬜ Compile Gate 1 metrics
2. ⬜ Make Gate 1 pass/fail decision
3. ⬜ If PASS  ->  Begin Sprint 2 Week 5

**Week 5 Day 1:**
1. ⬜ Start AI-coding Lite Phase 2 features 7-10
2. ⬜ Start AI-coding R2c (COGS Calculator)
3. ⬜ Post in 3 new Facebook groups

---

**Last Updated:** December 26, 2025
**Status:** Plan ready, pending Gate 1 outcome
**Next Step:** Execute Sprint 1  ->  Gate 1 decision  ->  Sprint 2 execution
**Critical Success Factor:** Lite paid conversion >5% = Full SaaS justified


---

**Related Documents:**
- [[biz/strategy/strategy|Strategy Hub]] - All strategy documents
- [[biz/strategy/execution/04-sprint-1-master-plan|Sprint 1 Plan]] - Current execution
- [[biz/NAVIGATION|Navigation Guide]] - Full sitemap


