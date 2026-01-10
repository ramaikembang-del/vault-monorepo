# Sprint 3 Master Plan
**Cloud Transition: Full SaaS Basic Launch + Pillar 2 Expansion**

**Timeline:** Weeks 9-16 (8 weeks)
**Products:** Full SaaS Basic (C1) + Cash Flow Monitor (R2b) + Invoice Management (R2f)
**Goal:** First cloud customers, Phase 2 persona acquisition, establish recurring revenue foundation

> [!NOTE]
> **Cultural Context:** Sprint 3 execution must align with Indonesian market realities documented in [[biz/strategy/market-analysis/02-cultural-context|Cultural Context]]:
> - **Cloud anxiety mitigation**  -  "Data Anda tersimpan aman di cloud Indonesia" (Your data is stored safely in Indonesian cloud)
> - **Gradual migration**  -  Lite users migrate data, not start over
> - **WhatsApp-first onboarding**  -  Personal walkthrough, not just documentation
> - **Trust before commitment**  -  30-day trial, no credit card required

> [!IMPORTANT]
> **Prerequisite:** Sprint 3 only executes if **Gate 2 passes** (Sprint 2 validation).
> - Gate 2A: Lite paid conversion >5% [x]
> - Gate 2B: COGS tool demand (10+ users) [x]
> - Gate 2C: Template sales momentum (15+) [x]
>
> **If Gate 2 fails:** Execute Alternative Path (iterate Lite, do NOT build C1)

---

## Executive Summary

**The Strategy:**
This is the pivotal sprint  -  transitioning from offline validation (Lite) to cloud-based SaaS (Full Platform):

1. **Full SaaS Basic (C1)**  -  Cloud-hosted analytics platform (Rp 300-500K/mo)
2. **Cash Flow Monitor (R2b)**  -  Daily cash visualization tool
3. **Invoice Management (R2f)**  -  Simple invoicing for SMEs
4. **Lite  ->  SaaS Migration Path**  -  Seamless upgrade for validated Lite users

**Why This Sprint?**
- Sprint 1 validated **engagement** (Lite users check daily)
- Sprint 2 validated **willingness to pay** (>5% conversion)
- Now: Build the **scalable recurring revenue engine**
- Lite users hitting limits = natural upgrade demand (Pillar 3 -> 5 cascade)

**Target Personas:**
- **Primary:** Amanda (Multi-Outlet Owner), Budi 2.0 (Tech-Savvy Warung)
- **Secondary:** Dimas (Food Truck Operator ready to scale), Rika (Homemade F&B scaling up)
- **Phase:** Phase 2 Mikro -> Kecil (Expansion)

**Success Metrics:**
- 10+ Full SaaS Basic customers
- <30% churn after Month 1
- MRR: Rp 4-6M/month (C1 + Pillar 2 tools)

---

## Sprint 3 Products in Detail

### Product 1: Full SaaS Basic (C1)

**Objective:** Cloud-hosted F&B analytics platform for Phase 2 businesses ready to scale.

**Core Features (Port Top 10 from Lite + Cloud Enhancements):**

| # | Feature | Description | Source |
|---|---------|-------------|--------|
| 1 | Multi-device Dashboard | Access from any device, synced | Lite + Cloud |
| 2 | Revenue Analytics | Daily/weekly/monthly trends, comparisons | Lite |
| 3 | Staff Performance | Shift comparison, efficiency scores | Lite |
| 4 | Food Cost % Tracking | Ingredient costs, margin alerts | Lite + R2c |
| 5 | P&L Summary | Profit/loss visualization | R2a |
| 6 | Cash Flow Visibility | Daily cash in/out | R2b (NEW) |
| 7 | Invoice Generation | Simple invoices for suppliers | R2f (NEW) |
| 8 | PDF/Excel Export | Reports for banks, investors | Lite |
| 9 | WhatsApp Alerts | Daily summary, anomaly alerts | Lite Paid |
| 10 | Benchmarking (opt-in) | Compare to anonymous industry peers | Lite Paid |

**Additional Cloud-Only Features:**

| # | Feature | Description | Value |
|---|---------|-------------|-------|
| 11 | **Real-time Sync** | Data updates across devices instantly | Multi-user |
| 12 | **Team Access** | Up to 3 users with roles | Delegation |
| 13 | **Automated Backup** | Daily backups, never lose data | Trust |
| 14 | **API Ready** | Future POS integrations | Scale |
| 15 | **Bank-Ready Reports** | SAK EMKM-lite format for loans | Growth |

**Pricing:**

| Tier | Price | Outlets | Users | Metrics |
|------|-------|---------|-------|---------|
| **Basic** | Rp 300-500K/mo | 1 | 3 max | 30 base |
| + Professional Pack | +Rp 150K/mo |  -  |  -  | +30 metrics |
| + Advanced Pack | +Rp 250K/mo |  -  |  -  | +50 metrics |

**Migration Path (Lite  ->  SaaS):**
1. Lite paid users get 30-day free trial of SaaS Basic
2. One-click data migration (export from Lite, import to SaaS)
3. Keep Lite as offline backup if desired
4. WhatsApp walkthrough for migration support

**Cultural Considerations:**
- **"Cloud Indonesia"**  -  Host on Indonesian servers (or communicate Singapore proximity)
- **Offline fallback**  -  SaaS works offline temporarily, syncs when online
- **No data hostage**  -  Easy export, users own their data
- **Gradual trust**  -  30-day trial, cancel anytime via WhatsApp

---

### Product 2: Cash Flow Monitor (R2b)

**Objective:** Daily cash visualization for Mikro businesses managing cash flow.

**Features:**
- Input: Daily cash in (sales) + cash out (expenses, withdrawals)
- Output: Running cash balance, daily/weekly trend
- Alert: "Kas menipis! Tersisa untuk 3 hari operasional" (Cash running low! Enough for 3 days of operations)
- Projection: Simple 7-day cash forecast based on patterns

**Pricing:**
- **Standalone:** Rp 50K/month
- **Bundled with SaaS Basic:** Included
- **Bundled with R2c + R2a:** Rp 100K/month (Pillar 2 bundle)

**Build Approach:**
- Simple React component (for SaaS integration)
- Also available as standalone Electron app (for non-SaaS users)
- AI-coded: 3-4 days development

**Cultural Considerations:**
- **Cash culture:** Indonesian Mikro is mostly cash-based, not digital payments
- **Daily ritual:** Designed for end-of-day cash counting routine
- **Simple math:** No accounting jargon, just "Uang masuk" and "Uang keluar"

---

### Product 3: Invoice Management (R2f)

**Objective:** Simple invoicing for Mikro businesses dealing with suppliers and B2B customers.

**Features:**
- Create: Simple invoice template with logo, items, total
- Send: WhatsApp share button (no email required)
- Track: Mark as paid/unpaid, overdue alerts
- Report: Monthly invoices summary

**Pricing:**
- **Standalone:** Rp 50K/month (up to 20 invoices/month)
- **Bundled with SaaS Basic:** Included (up to 50 invoices/month)
- **Unlimited invoices:** +Rp 25K/month add-on

**Build Approach:**
- React component for SaaS integration
- WhatsApp share integration (key differentiator)
- AI-coded: 4-5 days development

**Cultural Considerations:**
- **WhatsApp-first:** Invoices shared via WhatsApp, not email
- **Informal acceptable:** Not formal tax invoices (Faktur Pajak)  -  refer to accountant for that
- **Relationship-friendly:** Soft reminder language for overdue invoices

---

## Technical Architecture: Cloud Stack

**Infrastructure (Sprint 3 Setup):**

| Component | Technology | Cost | Notes |
|-----------|------------|------|-------|
| **Frontend** | Next.js on Vercel | Free tier | Scales automatically |
| **Backend** | Node.js on Railway | Rp 75K/mo | Or Supabase Edge Functions |
| **Database** | Supabase PostgreSQL | Rp 375K/mo ($25) | 500MB included |
| **Auth** | Supabase Auth | Included | Social login, magic link |
| **Storage** | Supabase Storage | Included | For exports, logos |
| **Realtime** | Supabase Realtime | Included | Multi-device sync |
| **WhatsApp** | WhatsApp Business API | Rp 500K/mo | Via Wati.io or similar |
| **Total** |  -  | **Rp 950K/mo** | Scales to 100+ customers |

**Migration from Lite:**
```
Lite (Electron, local SQLite)
  v  Export JSON
  v  Upload to SaaS
SaaS (Next.js, Supabase PostgreSQL)
  v  Auto-sync
  v  Multi-device access
```

---

## Week-by-Week Timeline

### **Week 9-10: Foundation Build**

**Full SaaS Basic:**
- [ ] Day 1-3: Set up Supabase project (database schema, auth, storage)
- [ ] Day 3-5: Set up Vercel deployment (Next.js boilerplate)
- [ ] Day 5-7: Build authentication flow (login, signup, reset password)
- [ ] Day 7-10: Port Lite Dashboard UI to React/Next.js
- [ ] Day 10-14: Implement core features 1-5 (Revenue, Staff, Food Cost, P&L, Dashboard)

**Cash Flow Monitor (R2b):**
- [ ] Day 5-8: Build standalone Electron version
- [ ] Day 8-10: Build React component for SaaS integration

**Invoice Management (R2f):**
- [ ] Day 10-14: Build invoice generator component
- [ ] Day 14: WhatsApp share integration

**Deliverables by End of Week 10:**
- SaaS infrastructure deployed
- Auth working
- Core dashboard features ported
- R2b and R2f standalone versions ready

---

### **Week 11-12: Feature Completion**

**Full SaaS Basic:**
- [ ] Day 1-4: Implement features 6-10 (Cash Flow, Invoices, Export, WhatsApp, Benchmarking)
- [ ] Day 4-7: Implement cloud features 11-15 (Sync, Team, Backup, API, Bank Reports)
- [ ] Day 7-10: Integration testing (all features work together)
- [ ] Day 10-14: Bug fixes, polish, mobile responsiveness

**Lite  ->  SaaS Migration:**
- [ ] Build data export from Lite (JSON format)
- [ ] Build data import to SaaS (one-click)
- [ ] Test migration with 3 real Lite users

**Deliverables by End of Week 12:**
- SaaS Basic feature-complete
- Migration path tested
- Ready for soft launch

---

### **Week 13-14: Soft Launch + Beta**

**Full SaaS Basic:**
- [ ] **SOFT LAUNCH** to Lite paid users (WhatsApp invitation)
- [ ] Offer: "30 hari gratis Full SaaS untuk early adopter" (30 days free for early adopters)
- [ ] Target: 20-30 beta users
- [ ] Collect feedback via WhatsApp daily

**Support:**
- [ ] Set up WhatsApp Business support channel
- [ ] Create onboarding video (Bahasa Indonesia, 3 minutes)
- [ ] Prepare FAQ document

**Marketing:**
- [ ] Announce to template buyers: "Upgrade ke Full Platform"
- [ ] Post case study: "Dari Lite ke SaaS dalam 5 menit"

**Deliverables by End of Week 14:**
- 20-30 beta users testing
- Initial feedback collected
- Critical bugs identified and fixed

---

### **Week 15-16: Public Launch + Gate 3**

**Full SaaS Basic:**
- [ ] **PUBLIC LAUNCH** (open registration)
- [ ] Pricing: Rp 300K/mo (introductory) or Rp 400K/mo (standard)
- [ ] Launch promotion: "50% off bulan pertama" (50% off first month)

**Conversion Push:**
- [ ] Lite free users  ->  SaaS trial push (WhatsApp campaign)
- [ ] Template buyers  ->  SaaS trial push (email + WhatsApp)
- [ ] Paguyuban announcement (if partnership secured)

**Gate 3 Validation:**
- [ ] Count paying customers (target: 10+)
- [ ] Measure churn (target: <30%)
- [ ] Measure NPS (target: >40)

**Deliverables by End of Week 16:**
- 10+ paying SaaS Basic customers
- Gate 3 metrics compiled
- Sprint 4 plan ready

---

## Gate 3: SaaS Basic Validation (End of Week 16)

### Gate 3A: Customer Acquisition

**Decision Criteria:**
- [x] **10+ paying customers**  ->  SaaS validated, proceed to Pro tier (Sprint 4)
- [!] **5-9 customers**  ->  Slower than expected, extend launch 4 more weeks
- [x] **<5 customers**  ->  Major issue, pause and diagnose

**Actions if passes:**
- Build SaaS Pro (C2) in Sprint 4
- Scale marketing to broader audience
- Add Micro-SaaS products (A4a, A4c)

**Actions if fails:**
- Lower price to Rp 250K/mo
- Improve onboarding (too complex?)
- Add more "wow" features
- Extend beta period before public launch

---

### Gate 3B: Retention (Churn)

**Decision Criteria:**
- [x] **<30% churn** after Month 1  ->  Retention validated
- [!] **30-50% churn**  ->  Value delivery issue, investigate why leaving
- [x] **>50% churn**  ->  Product-market fit problem, major pivot needed

**Churn Investigation Questions:**
- Are users logging in weekly? (Engagement)
- Are users using core features? (Value delivery)
- Are users upgrading to Pro? (Upsell potential)
- What's the #1 reason for cancellation? (Exit survey)

---

### Gate 3C: Unit Economics

**Decision Criteria:**
- [x] **LTV:CAC > 3:1**  ->  Sustainable business model
- [!] **LTV:CAC 2-3:1**  ->  Workable but needs optimization
- [x] **LTV:CAC < 2:1**  ->  Unsustainable, fix CAC or improve retention

**Calculation (Month 1):**
```
CAC = Marketing spend / New customers
 = Rp 5M / 10 customers = Rp 500K

LTV = ARPU Ã— Average Lifespan
 = Rp 400K Ã— 12 months = Rp 4.8M

LTV:CAC = 4.8M / 500K = 9.6:1 [x] (if assumptions hold)
```

---

## Resource Allocation

**Week 9-10:**
- 70% SaaS Basic (infrastructure + core features)
- 20% R2b + R2f (standalone builds)
- 10% Migration path design

**Week 11-12:**
- 60% SaaS Basic (cloud features + polish)
- 20% R2b + R2f (SaaS integration)
- 20% Migration testing + onboarding prep

**Week 13-14:**
- 40% Soft launch support (bug fixes, feedback)
- 30% Onboarding + documentation
- 30% Marketing prep

**Week 15-16:**
- 30% Public launch execution
- 40% Customer support + onboarding
- 30% Gate 3 data collection + Sprint 4 planning

---

## Revenue Projections

### **Conservative Scenario**
- SaaS Basic: 10 customers Ã— Rp 350K = **Rp 3.5M MRR**
- R2b + R2f standalone: 10 users Ã— Rp 50K = **Rp 500K MRR**
- Lite paid (continuing): 15 users Ã— Rp 275K = **Rp 4.1M MRR**
- Template (continuing): 10 sales Ã— Rp 2.5M = **Rp 25M one-time**
- **Sprint 3 Total MRR:** Rp 8.1M

### **Optimistic Scenario**
- SaaS Basic: 20 customers Ã— Rp 400K = **Rp 8M MRR**
- R2b + R2f standalone: 20 users Ã— Rp 50K = **Rp 1M MRR**
- Lite paid (continuing): 25 users Ã— Rp 300K = **Rp 7.5M MRR**
- Template (continuing): 15 sales Ã— Rp 2.5M = **Rp 37.5M one-time**
- **Sprint 3 Total MRR:** Rp 16.5M

### **Cumulative (End of Sprint 3):**
- Total one-time revenue: Rp 82.5M - 162.5M
- Total MRR: Rp 8M - 17M
- Annual Run Rate: Rp 96M - 204M

---

## Dependencies & Risks

### **Product Dependencies**

**Lite Validation  ->  SaaS Build:**
- SaaS Basic is only justified by Lite paid conversion >5%
- If Lite fails, SaaS investment is wasted

**Infrastructure  ->  Feature Development:**
- Supabase setup must complete before feature porting
- Vercel deployment must work before beta launch

**Lite Data  ->  SaaS Migration:**
- Migration path must work for user adoption
- Broken migration = user frustration

### **Critical Risks**

**Risk 1: Cloud infrastructure issues**
- **Impact:** Can't launch, delays everything
- **Mitigation:** Use proven stack (Supabase + Vercel), test early

**Risk 2: Users don't migrate from Lite**
- **Impact:** SaaS has no users, Lite cannibalizes
- **Mitigation:** Make migration dead simple, offer incentives

**Risk 3: Churn spike after Month 1**
- **Impact:** Revenue doesn't stick, LTV collapses
- **Mitigation:** Strong onboarding, WhatsApp check-ins, fast support

**Risk 4: Cloud costs exceed revenue**
- **Impact:** Negative unit economics
- **Mitigation:** Monitor costs weekly, optimize database queries

---

## Sprint 4 Decision Matrix

**Based on Week 16 Gate 3 Results:**

| Customers | Churn | LTV:CAC | Sprint 4 Action |
|-----------|-------|---------|-----------------|
| [x] 10+ | [x] <30% | [x] >3:1 | **Best case:** Build SaaS Pro (C2) + A4a + A4c |
| [x] 10+ | [!] 30-50% | [!] 2-3:1 | Fix retention first, delay Pro by 4 weeks |
| [!] 5-9 | [x] <30% |  -  | Extend launch, add features, retry in 4 weeks |
| [x] <5 |  -  |  -  | **Major issue:** Diagnose product-market fit |

**Most Likely Scenario:** 10-15 customers, 25% churn, healthy LTV:CAC

---

## Next Immediate Actions

**End of Sprint 2 (Week 8):**
1. ⬜ Compile Gate 2 metrics
2. ⬜ Make Gate 2 pass/fail decision
3. ⬜ If PASS  ->  Begin Sprint 3 Week 9

**Week 9 Day 1:**
1. ⬜ Create Supabase project
2. ⬜ Deploy Next.js boilerplate to Vercel
3. ⬜ Design database schema (users, outlets, metrics)

---

**Last Updated:** December 26, 2025
**Status:** Plan ready, pending Gate 2 outcome
**Next Step:** Execute Sprint 2  ->  Gate 2 decision  ->  Sprint 3 execution
**Critical Success Factor:** 10+ paying SaaS customers = scalable business validated


---

**Related Documents:**
- [[biz/strategy/strategy|Strategy Hub]] - All strategy documents
- [[biz/strategy/execution/04-sprint-1-master-plan|Sprint 1 Plan]] - Current execution
- [[biz/NAVIGATION|Navigation Guide]] - Full sitemap


