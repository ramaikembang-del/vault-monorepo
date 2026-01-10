# Sprint 3 Plan: Cloud Transition & SaaS Launch
**Comprehensive Execution Plan - Weeks 9-16 (8 weeks)**

**Timeline:** Conditional on Gate 2 Pass  
**Status:** PLANNED - Pending Sprint 2 Completion  
**Purpose:** Launch Full SaaS Basic (cloud platform) to establish scalable recurring revenue foundation and validate Phase 2 persona willingness to pay for cloud analytics

> [!IMPORTANT]
> **Prerequisite:** Sprint 3 only executes if **Gate 2 passes** (Sprint 2 paid conversion validation).
> - Gate 2A: Lite paid conversion >5% ✅
> - Gate 2B: COGS tool demand signal (10+ users) ✅
> - Gate 2C: Template sales momentum (15+ sales) ✅

---

## Executive Summary

Sprint 3 is the **pivotal cloud transition** — moving from validated offline tools (Lite Dashboard) to scalable cloud-based SaaS platform.

| Product | Type | Revenue Target | Strategic Value | Build Time |
|---------|------|---------------|-----------------|------------|
| **C1: Full SaaS Basic** | Cloud Platform | Rp 3.5-8M MRR | Scalable recurring revenue engine | 6-8 weeks |
| **R2b: Cash Flow Monitor** | Pillar 2 Tool | Rp 500K-1M MRR | Daily cash visibility for Mikro | 1 week |
| **R2f: Invoice Management** | Pillar 2 Tool | Included in C1 | B2B invoicing capability | 1 week |

**Success Metrics:**
- 💰 **MRR:** Rp 8-17M total (~Rp 4-8M from SaaS Basic)
- 👥 **Customers:** 10+ paying SaaS Basic customers
- 📊 **Retention:** <30% churn after Month 1
- 📈 **Unit Economics:** LTV:CAC >3:1

---

## Strategic Rationale

### Why Sprint 3 is Critical

**Built on previous validation:**
- ✅ Sprint 1: Lite Dashboard validated **engagement** (20%+ check 3+ days/week)
- ✅ Sprint 2: Lite Paid validated **willingness to pay** (>5% conversion)
- 🎯 **Sprint 3:** Validates **recurring cloud revenue** at scale

**The Cloud Transition:**

From | To | Why
-----|----|----|
Offline Electron App | Cloud SaaS Platform | Scalable, multi-device
Local SQLite | Supabase PostgreSQL | Real-time sync, team access
Manual updates | Automated features | WhatsApp alerts, auto-backup
Single-user | Multi-user teams | Business growth support

### Target Personas (Phase 2 Focus)

**Primary:**
- **Amanda** (Multi-Outlet Owner, 2-3 locations) - Needs team access, real-time visibility
- **Budi 2.0** (Tech-Savvy Warung Owner) - Ready for cloud, wants mobile access

**Secondary:**
- **Dimas** (Food Truck Operator scaling) - Needs invoicing, cash flow tracking
- **Rika** (Homemade F&B expanding) - Growing beyond Phase 1 limitations

**Phase Transition:** Phase 2 Mikro→Kecil (Expansion mindset)

---

## Product Deep-Dive

### Product C1: Full SaaS Basic

**What It Is:**  
Cloud-hosted F&B analytics platform combining all Lite Dashboard features + cloud enhancements + Pillar 2 tools (R2a, R2b, R2c, R2f)

**Core Features (15 total):**

**Ported from Lite (Features 1-10):**
1. Revenue Analytics (daily/weekly/monthly trends)
2. Staff Performance (shift comparison, efficiency scores)
3. Food Cost % Tracking (ingredient costs, margin alerts)
4. P&L Summary (profit/loss visualization)
5. PDF/Excel Export (reports for banks)
6. WhatsApp Alerts (daily summary, anomaly detection)
7. Benchmarking (opt-in anonymous comparison)
8. Multi-device Dashboard (synced access)
9. Cash Flow Visibility (daily cash in/out)
10. Invoice Generation (simple B2B invoices)

**Cloud-Only Features (Features 11-15):**
11. **Real-time Sync** - Data updates across devices instantly
12. **Team Access** - Up to 3 users with role-based permissions
13. **Automated Backup** - Daily cloud backups, never lose data
14. **API Ready** - Future POS integration capability
15. **Bank-Ready Reports** - SAK EMKM-lite format for loan applications

**Pricing:**

| Tier | Price/Month | Outlets | Users | Key Features |
|------|-------------|---------|-------|--------------|
| **Basic** | Rp 300-400K | 1 | 3 max | All 15 features |
| **+ Professional Pack** | +Rp 150K | — | — | +30 advanced metrics |
| **+ Advanced Pack** | +Rp 250K | — | — | +50 premium metrics |

**Migration Path (Lite → SaaS):**
1. Lite paid users get **30-day free trial** of SaaS Basic
2. **One-click data migration** (export JSON from Lite, import to SaaS)
3. Keep Lite as offline backup if desired (no penalty)
4. **WhatsApp walkthrough** for personal migration support

**Cultural Considerations:**
- 🇮🇩 **"Cloud Indonesia"** - Emphasize Indonesian server hosting (or Singapore proximity)
- 📴 **Offline fallback** - SaaS works offline temporarily, syncs when online
- 🔓 **No data hostage** - Easy export, users own their data
- ⏳ **Gradual trust** - 30-day trial, cancel anytime via WhatsApp (no hassle)

---

### Product R2b: Cash Flow Monitor

**What It Is:**  
Daily cash visualization tool for Mikro businesses managing cash flow volatility

**Features:**
- **Input:** Daily cash in (sales) + cash out (expenses, withdrawals)
- **Output:** Running cash balance, 7/30-day trend chart
- **Alert:** "Kas menipis! Tersisa untuk 3 hari operasional" (Cash running low!)
- **Projection:** Simple 7-day forecast based on patterns

**Pricing:**
- **Standalone:** Rp 50K/month
- **Bundled with SaaS Basic:** Included
- **Pillar 2 Bundle** (R2a+R2b+R2c): Rp 100K/month

**Build:** 3-4 days (React component + standalone Electron app)

---

### Product R2f: Invoice Management

**What It Is:**  
Simple invoicing for Mikro businesses dealing with suppliers and small B2B customers

**Features:**
- **Create:** Simple invoice template with logo, items, total
- **Send:** WhatsApp share button (no email required - key differentiator)
- **Track:** Mark as paid/unpaid, overdue alerts
- **Report:** Monthly invoices summary for accounting

**Pricing:**
- **Standalone:** Rp 50K/month (up to 20 invoices/month)
- **Bundled with SaaS Basic:** Included (up to 50 invoices/month)
- **Unlimited add-on:** +Rp 25K/month

**Build:** 4-5 days (React component + WhatsApp integration)

---

## Technical Architecture

**Cloud Stack Setup:**

| Component | Technology | Monthly Cost | Notes |
|-----------|------------|--------------|-------|
| **Frontend** | Next.js on Vercel | Free tier | Auto-scaling, edge CDN |
| **Backend** | Supabase Edge Functions | Included | Serverless functions |
| **Database** | Supabase PostgreSQL | Rp 375K ($25) | 500MB storage, autoscaling |
| **Auth** | Supabase Auth | Included | Social login, magic links |
| **Storage** | Supabase Storage | Included | PDF exports, logos |
| **Realtime** | Supabase Realtime | Included | Multi-device sync |
| **WhatsApp** | WhatsApp Business API | Rp 500K | Via Wati.io or Fonnte |
| **Total Infrastructure** | — | **~Rp 950K/month** | Scales to 100+ customers |

**Data Migration Architecture:**
```
Lite Dashboard (Offline)
  ↓ Export JSON (transaction history, settings)
  ↓ Upload to SaaS API
Full SaaS Basic (Cloud)
  ↓ Auto-sync across devices
  ↓ Real-time updates
```

---

## 8-Week Timeline

### Weeks 9-10: Foundation Build

**SaaS Basic Infrastructure:**
- [ ] Set up Supabase project (database schema, auth, storage)
- [ ] Deploy Next.js boilerplate to Vercel
- [ ] Build authentication flow (login, signup, password reset)
- [ ] Port Lite Dashboard UI to React/Next.js
- [ ] Implement core  features 1-5 (Revenue, Staff, Food Cost, P&L)

**R2b & R2f:**
- [ ] Build standalone Electron versions
- [ ] Create React components for SaaS integration

**Deliverables:**
- ✅ Cloud infrastructure deployed and tested
- ✅ Auth working (magic link + social login)
- ✅ Core dashboard features ported (50% complete)
- ✅ R2b and R2f standalone ready for testing

---

### Weeks 11-12: Feature Completion

**SaaS Basic Features:**
- [ ] Implement features 6-10 (Cash Flow, Invoices, Export, WhatsApp, Benchmarking)
- [ ] Implement cloud features 11-15 (Sync, Team, Backup, API, Bank Reports)
- [ ] Integration testing (all features work together)
- [ ] Mobile responsiveness (works on phone browsers)

**Migration Path:**
- [ ] Build JSON export from Lite Dashboard
- [ ] Build one-click import to SaaS
- [ ] Test migration with 3 real Lite users

**Deliverables:**
- ✅ SaaS Basic 100% feature-complete
- ✅ Migration tested and validated
- ✅ Ready for soft launch (beta)

---

### Weeks 13-14: Soft Launch & Beta

**Beta Launch:**
- [ ] **SOFT LAUNCH** to Lite paid users (WhatsApp invitation)
- [ ] Offer: "30 hari gratis Full SaaS untuk early adopter"
- [ ] Target: 20-30 beta testers
- [ ] Daily WhatsApp check-ins for feedback

**Support & Content:**
- [ ] Set up WhatsApp Business support channel
- [ ] Create onboarding video (Bahasa Indonesia, 3 min)
- [ ] Prepare FAQ document
- [ ] Write case study: "Dari Lite ke SaaS dalam 5 menit"

**Deliverables:**
- ✅ 20-30 active beta users
- ✅ Initial feedback collected
- ✅ Critical bugs fixed
- ✅ Onboarding materials ready

---

### Weeks 15-16: Public Launch & Gate 3

**Public Launch:**
- [ ] **PUBLIC LAUNCH** (open registration)
- [ ] Pricing: Rp 300K/mo (introductory) or Rp 400K/mo (standard)
- [ ] Launch promotion: "50% off bulan pertama"

**Conversion Push:**
- [ ] Lite free users → SaaS trial (WhatsApp campaign)
- [ ] Template buyers → SaaS trial (email + WhatsApp)
- [ ] Paguyuban announcement (if partnership secured)

**Gate 3 Metrics:**
- [ ] Count paying customers (target: 10+)
- [ ] Measure churn (target: <30%)
- [ ] Measure NPS (target: >40)
- [ ] Calculate LTV:CAC (target: >3:1)

**Deliverables:**
- ✅ 10+ paying SaaS Basic customers
- ✅ Gate 3 decision made
- ✅ Sprint 4 plan ready

---

## Success Criteria & Gates

### Gate 3A: Customer Acquisition

| Metric | Target | Stretch | Action if Below Target |
|--------|--------|---------|----------------------|
| Paying Customers | 10+ | 15+ | Lower price to Rp 250K, extend launch 4 weeks |
| Beta → Paid Conversion | 30%+ | 50%+ | Improve onboarding, add features |
| Activation Rate | 70%+ | 85%+ | Simplify first-time experience |

**Decision:**
- ✅ **PASS (10+ customers):** Proceed to Sprint 4 (SaaS Pro, Micro-SaaS products)
- ⚠️ **PARTIAL (5-9):** Extend launch period, lower price
- ❌ **FAIL (<5):** Pause and diagnose product-market fit issue

---

### Gate 3B: Retention (Churn)

| Metric | Target | Red Flag | Investigation Needed |
|--------|--------|----------|---------------------|
| Month 1 Churn | <30% | >50% | Are users logging in weekly? |
| Feature Usage | 80%+ use 3+ features | <50% | Which features are ignored? |
| Support Tickets | <5 per customer | >10 | What are common issues? |

**Churn Analysis Questions:**
1. Are users logging in weekly? (Engagement metric)
2. Are they using core features? (Value delivery)
3. Are they upgrading to add-ons? (Upsell potential)
4. What's #1 cancellation reason? (Exit survey)

---

### Gate 3C: Unit Economics

**Target:** LTV:CAC >3:1 (sustainable business model)

**Sample Calculation:**
```
CAC = Marketing Spend / New Customers
    = Rp 5M / 10 customers = Rp 500K

LTV = ARPU × Average Lifespan × Gross Margin
    = Rp 400K × 12 months × 80% = Rp 3.84M

LTV:CAC = 3.84M / 500K = 7.68:1 ✅
```

**Actions if below target:**
- Reduce CAC (organic marketing, referrals)
- Improve retention (reduce churn)
- Increase ARPU (upsell add-ons)

---

## Revenue Projections

### Conservative Scenario
- SaaS Basic: 10 customers × Rp 350K = **Rp 3.5M MRR**
- R2b + R2f standalone: 10 users × Rp 50K = **Rp 500K MRR**
- Lite paid (continuing): 15 users × Rp 275K = **Rp 4.1M MRR**
- Template (continuing): 10 sales × Rp 2.5M = **Rp 25M one-time**
- **Sprint 3 Total MRR:** Rp 8.1M (~Rp 97M annualized)

### Optimistic Scenario
- SaaS Basic: 20 customers × Rp 400K = **Rp 8M MRR**
- R2b + R2f standalone: 20 users × Rp 50K = **Rp 1M MRR**
- Lite paid (continuing): 25 users × Rp 300K = **Rp 7.5M MRR**
- Template (continuing): 15 sales × Rp 2.5M = **Rp 37.5M one-time**
- **Sprint 3 Total MRR:** Rp 16.5M (~Rp 198M annualized)

### Cumulative (End of Sprint 3)
- **Total One-Time Revenue:** Rp 82.5M - 162.5M
- **Total MRR:** Rp 8M - 17M
- **Annual Run Rate:** Rp 96M - 204M

---

## Risk Mitigation

### Risk 1: Cloud Infrastructure Issues
**Likelihood:** Medium | **Impact:** High (blocks launch)

**Mitigation:**
- Use proven stack (Supabase + Vercel, not custom solutions)
- Test infrastructure in Week 9 before building features
- Have rollback plan (can revert to Lite if SaaS fails)

---

### Risk 2: Users Don't Migrate from Lite
**Likelihood:** Medium | **Impact:** High (SaaS has no users)

**Mitigation:**
- Make migration dead simple (one-click export/import)
- Offer 30-day free trial (no risk to users)
- Personal WhatsApp walkthrough (hand-holding)
- Allow keeping Lite as backup (not forced migration)

---

### Risk 3: Churn Spike After Month 1
**Likelihood:** Medium | **Impact:** High (LTV collapses)

**Mitigation:**
- Strong onboarding (video tutorial, checklist)
- Weekly WhatsApp check-ins (first month)
- Fast support response (<4 hours)
- Feature usage tracking (re-engage low-activity users)

---

### Risk 4: Cloud Costs Exceed Revenue
**Likelihood:** Low | **Impact:** Medium (negative unit economics)

**Mitigation:**
- Monitor costs weekly (Supabase dashboard)
- Optimize database queries (reduce read/write operations)
- Price tiers cover infrastructure (~Rp 950K/month supports 2-3 customers)

---

## Sprint 4 Preview (Conditional)

**If Gate 3 passes:**

**Products to Build:**
- **C2: SaaS Pro** - Multi-location support, advanced analytics (Rp 800K-1.2M/mo)
- **A4a: POS Integration Micro-SaaS** - Auto-sync POS data
- **A4c: WhatsApp Bot** - Alert delivery automation

**Budget Unlocked:**  
Rp 8-17M MRR from Sprint 3 → Can afford premium features, team expansion

**Strategic Shift:**  
From validation → scaling (grow customer base, improve retention)

---

## Related Documents

### Strategic Context
- [[biz/strategy/planning/execution/04-sprint-2-plan|Sprint 2 Plan]] - Previous sprint (prerequisite)
- [[biz/strategy/planning/execution/06-sprint-4-plan|Sprint 4 Plan]] - Next sprint (if Gate 3 passes)
- [[biz/strategy/planning/foundations/05-gate-framework|Gate Framework]] - Decision criteria methodology
- [[biz/strategy/planning/execution/02-product-portfolio-map|Product Portfolio Map]] - Sprint 3 in overall ecosystem

### Technical Guides
- [[products/shared-technical/architecture/system-overview|System Architecture]] - Cloud infrastructure details
- [[products/shared-technical/devops/deployment-process|Deployment Process]] - SaaS deployment workflow

---

**Last Updated:** January 9, 2026  
**Status:** PLANNED  
**Owner:** Founder + Partner (if onboarded)  
**Prerequisites:** Gate 2 Pass (Sprint 2 validation)  
**Next Review:** End of Sprint 2 (Week 8)
