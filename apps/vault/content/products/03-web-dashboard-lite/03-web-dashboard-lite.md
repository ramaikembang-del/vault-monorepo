# E1: Web Dashboard Lite

> [!IMPORTANT]
> **Launch Philosophy: Validate-First (Freemium Model)**
>
> **Week 0: Pre-Launch Engagement Validation** is MANDATORY before Electron MVP build.
>
> **Goal:** Validate "Will Phase 1 Mikro ENGAGE with free analytics?" (not just sign up)
> - Target: 50+ free signups, 30%+ active in Week 1
> - Method: Waitlist  ->  mockup demos  ->  engagement signals
> - Decision gate: PROCEED to full build only if 30%+ engage
>
> See [[products/03-web-dashboard-lite/sales/pre-sale-validation-playbook|Pre-Sale Validation Playbook|Pre-Sale Validation Playbook]] for complete strategy.

**Product ID:** E1
**Pillar:** P3 - Expansion (Designed to Outgrow)
**Priority Score:** 18/21 (Rank #1) [*][*][*] **HIGHEST PRIORITY**
**Sprint:** BUILD NOW (Sprint 1, Week 3-4)
**Build Status:** **IN DEVELOPMENT** (PMF Validation Phase)
**Launch Target:** Week 1 (Sprint 1 start)
**Launch Philosophy:** [x] **Validate-First** (Freemium launch, validate conversion before paid tiers)  ->  See [[products/03-web-dashboard-lite/freemium/freemium|Freemium Strategy]]

> [!WARNING]
> **THE BIG OPPORTUNITY - E1 Lite ( UNICORN POTENTIAL)**
>
> **TL;DR:** Conservative assumes 500 freemium signups (0.33% of 150K TAM for FREE product) with 20% conversion and K=0 viral. Realistic unlocks 27-43Ã— upside through WhatsApp viral loops (K=1.0, each user brings 1 more) driving 5,000 signups. Aggressive with K=1.5 exponential growth reaches **Rp 200B+** - this is the unicorn business.
>
> | Scenario | Year 3 | Freemium  ->  Paid | Key Drivers | Viral K | CAC |
> |----------|--------|----------------|-------------|---------|-----|
> | **Conservative** | Rp 1,500M | 2,500  ->  500 | Rp 240K avg, 20% conversion, paid ads only | K=0 | Rp 750K |
> | **Realistic** | Rp 65,100M | 50,000  ->  17,500 | Rp 310K avg, 35% conversion, WhatsApp sharing | K=1.0 | Rp 310K |
> | **Aggressive** | Rp 192,000M | 100,000  ->  40,000 | Rp 400K avg, 40% conversion, Rp 100M ads, Malaysia/Thailand | K=1.5 | Rp 25K |
>
> **Key Assumptions - Realistic Scenario:**
> - WhatsApp viral loops: "Share with 3 friends  ->  unlock 14-day history" drives K=1.0 (each user brings 1 more)
> - Business-critical positioning: 35% conversion (vs 20%) because E1 solves survival (70% Mikro failure rate)
> - Tighter feature gates: 3 metrics free (not 5), 5-day history (not 7) forces faster upgrade
> - 5,000 freemium = 3.3% of TAM (still conservative for free viral product vs Canva's 100M users)
>
> **Quick Wins (Month 1-3):** WhatsApp viral loop "share  ->  unlock", test Rp 250-400K pricing, tighten free tier (3 metrics, 5 days)
>
> **Why E1 = Unicorn:** 80-128Ã— upside (vs 2-7Ã— for A1/R1), 150K TAM (5Ã— larger), WhatsApp viral = zero marginal CAC, freemium scales exponentially
>
> See [[products/01-power-bi-template/business-intelligence/financial-models/02-three-scenario-analysis|three-scenario-analysis.md]] for viral loop execution plan.

## Gate Status

**Gate Dependency:** None (kickstart product, validates before C1 SaaS)
**Gate Criteria (Gate 1B):** 50+ active users, 30%+ weekly engagement by Week 4
**Current Progress:** Not launched yet (Week 3 development)
**Next Gate:** Gate 1B  ->  If passed, validate paid conversion 5%+  ->  Proceed to Sprint 2
**Critical Success Factor:** Freemium  ->  Paid conversion rate (target: 10-20%)

---

**F&B Analytics for Mikro Segment** - Offline-Capable Web Application

**Strategic Pillar:** Pillar 3 (Expansion) - Designed to Outgrow
**Business Model:** Freemium  ->  Paid (Rp 200-350K/month)
**Target Market:** Indonesian Mikro F&B businesses (1-4 staff, single-outlet)
**Technology:** Electron (offline-capable web app)

---

## Product Positioning

### Strategic Purpose

**Web Dashboard Lite serves three critical functions:**

1. **PMF Validation Ground** - Test features with Mikro segment before scaling to cloud SaaS
2. **Pillar 3: Expansion Product** - Intentionally limited to drive upgrades to Full SaaS Platform
3. **Protection-First Positioning** - Prove "offline-first, privacy-focused" messaging works in Indonesian market

### The "Protection First" Philosophy

Unlike professional analytics tools, Web Dashboard Lite addresses the psychological barriers of Indonesian Mikro F&B owners:

- **Fear of Exposure** ("Crab Mentality")  ->  Offline-first, data stays on YOUR device
- **Distrust of Systems**  ->  "Mata-Mata" mode (private viewing), no cloud sync initially
- **Budget Constraints**  ->  Freemium model (80% free users, 20% paid)
- **Survival Focus**  ->  "Don't die this month" vs "Grow your empire"

**Cross-Reference:** See [[biz/strategy/market-analysis/03-cultural-context|Cultural Context]] for complete psychological framework

---

## Overview

### Core Value Proposition

**"See your business health in 30 seconds. Every day. Your data stays yours."**

**For:** Warung coffee, small cafÃ©s, food stalls (Pak Budi, Rika, Mbok Tini personas)
**Who:** Are struggling to survive, fear data exposure, distrust cloud systems
**Our Product:** Provides survival-focused analytics (cash flow, leaks, peak hours)
**Unlike:** Cloud SaaS or expensive BI tools
**We Offer:** Offline-first privacy, freemium pricing, Protection positioning

---

## Pricing Tiers

### Freemium Model

**Starter (Free Forever)**
- Local storage only (SQLite)
- 30 base survival metrics
- Basic health score (0-100)
- Single device
- PDF export
- **Target:** 80% of users (land grab)

**Growth (Rp 200-250K/month)**
- Everything in Starter +
- Cloud sync (optional, user controls when)
- Multi-device (up to 3)
- Email weekly digest
- Advanced alerts (20+ rules)
- **Target:** 15-20% conversion from Starter

**Pro (Rp 300-350K/month)**
- Everything in Growth +
- Comparative analytics (industry benchmarks)
- Custom metric builder
- Priority support
- **Target:** 20% of Growth tier users

**Intentional Limitations (By Design):**
- Max 30-50 metrics (vs 150 in Full SaaS)
- Single-outlet only (vs multi-location in Full SaaS)
- Offline-first (vs real-time cloud in Full SaaS)

---

## Technology Stack

### Electron Architecture

**Why Electron:**
- Web technologies (React/Next.js) with desktop app experience
- Offline-capable (local SQLite database)
- Works on Windows/Mac (95% of target market uses Windows)
- Cross-platform distribution

**Data Flow:**
```
POS CSV Export (11 PM daily)
  v 
Electron App imports to Local SQLite
  v 
Dashboard displays analytics (offline)
  v 
(Optional) User triggers cloud sync
```

**Technology:**
- Frontend: Next.js (React)
- Desktop: Electron
- Database: SQLite (local)
- Charts: Recharts
- Optional Cloud: Supabase (when user enables sync)

**See:** [[products/03-web-dashboard-lite/specifications/04-electron-architecture|Electron Architecture Spec|Electron Architecture Spec]] for technical details

---

## Feature Set

### 30 Base Metrics (Survival-Focused)

**Financial Pillar:**
- Am I profitable this month?
- Where am I losing money? (Prime Cost %)
- Cash position vs last month

**Product/Menu Pillar:**
- Top 5 sellers vs bottom 5
- BCG Matrix (Stars, Cash Cows, Dogs, Question Marks)

**Operations Pillar:**
- Peak hours heatmap (when to staff up)
- Customer intensity by day/hour

**Marketing/Sales Pillar:**
- Week-over-week sales trend
- Transaction count & average value

**Cross-Reference:** [[products/03-web-dashboard-lite/specifications/02-feature-specification|Feature Specification|Feature Specification]] for complete metric list

---

## Target Users (Personas)

### Primary: Phase 1 (Mikro - Survival)
- **Pak Budi** - Single warung owner, 1-2 staff, survival mode
- **Rika** - Ghost kitchen operator, delivery-only, cash-strapped
- **Mbok Tini** - Traditional food stall, elderly owner, tech-averse
- **Dimas** - Coffee cart, solo operator, wants to scale

### Secondary: Phase 2 (Mikro -> Kecil - Expansion)
- **Amanda** - CafÃ© owner opening 2nd location
- **Budi 2.0** - Dark kitchen chain (2-3 kitchens)
- **Paman Joko** - Family restaurant, hiring first manager

**Full Personas:** User Personas documentation (19 detailed personas - documentation coming soon)

---

## Upgrade Path to Full SaaS Platform

### Natural Conversion Triggers

**User outgrows Lite when:**
1. Opens 2nd outlet  ->  Needs multi-location analytics (Full SaaS Pro tier)
2. Hits 10+ staff  ->  Needs team management features
3. Wants real-time data  ->  Needs cloud sync (not just optional backup)
4. Needs 100+ metrics  ->  Lite caps at 30-50

**Conversion Flow:**
```
Web Dashboard Lite (Rp 200K/month, offline)
  v  (2nd outlet OR 10+ staff)
Full SaaS Platform - Basic (Rp 300-500K/month, cloud)
  v  (3-5 outlets)
Full SaaS Platform - Pro (Rp 900K-1.2M/month)
```

**See:** [[products/03-web-dashboard-lite/specifications/06-upgrade-triggers|Upgrade Triggers Spec|Upgrade Triggers Spec]] for detailed conversion strategy

---

## PMF Validation Metrics

### Success Criteria (Months 1-6)

**Acquisition:**
- 100-500 Mikro users (Starter tier)
- 10-20% conversion to paid (Growth/Pro tiers)

**Engagement:**
- Daily active usage > 60%
- 30-second insight delivery (speed matters)

**Retention:**
- Month 3 churn < 20%
- NPS > 50

**Validation Signals:**
- Which 30 metrics are used most  ->  Prioritize for Full SaaS
- Conversion triggers  ->  When do users upgrade?
- Churn reasons  ->  What features are missing?

**See:** [[products/03-web-dashboard-lite/specifications/05-pmf-validation-plan|PMF Validation Plan|PMF Validation Plan]]

---

## Relationship to Full SaaS Platform

### Lite is NOT a standalone product long-term

Web Dashboard Lite exists to:
1. **Prove features work** with Mikro segment
2. **Generate qualified leads** for Full SaaS (users who outgrow)
3. **Test messaging** ("Protection First" vs "Growth Focus")

**This is Pillar 3: Expansion** - designed to become insufficient as customer grows.

**Full Documentation:** See SaaS Platform Full (products 05-saas-basic through 13-saas-enterprise - documentation coming soon) for complete platform vision

---

## Documentation Structure

```
/web-dashboard-lite/
|-- README.md (this file)
|-- specifications/  -> Technical specifications
| |-- electron-architecture.md
| |-- feature-specification.md
| |-- pmf-validation-plan.md
| |-- upgrade-triggers.md
|-- product-strategy/  -> Product strategy documents
|-- marketing/  -> Marketing materials
|-- sales/  -> Sales playbooks
|-- operations/  -> Operational SOPs
```

**Business Strategy:** Complete business strategy documentation (30 files) - coming soon
**User Intelligence:** 19 Personas - Complete persona system (coming soon)
**Market Context:** Cultural Psychology - Protection First philosophy (see [[biz/strategy/market-analysis/03-cultural-context|company strategy]])

---

## Strategic Context: 5-Pillar Ecosystem

**Position in Ecosystem:** Pillar 3 (Expansion)

This product is intentionally designed to outgrow as customers scale:

**Natural upgrade path:**
- User starts here (Rp 200-350K/month, offline, Mikro segment)
- Opens 2nd outlet OR hires 10+ staff
- Upgrades to **Full SaaS Platform** (Rp 300K-8M/month, cloud, SME segment)

**Full Ecosystem:**
- **Pillar 1 (Acquisition):** Power BI Templates, Micro-SaaS, Pay-per-Insight
- **Pillar 2 (Retention):** Template Subscriptions, Accounting Module
- **Pillar 3 (Expansion):** ** -> Web Dashboard Lite** (you are here), Hosted Power BI
- **Pillar 4 (Defense):** Industry Reports
- **Pillar 5 (Core):** Full SaaS Platform (Basic/Pro/Advanced/Enterprise - products 05-saas-basic, 09-saas-pro, 12-saas-advanced, 13-saas-enterprise)

**Strategic Framework:**
- [[biz/strategy/market-analysis/02-market-segmentation|Market Segmentation]] - 19 personas, 5 maturity phases (Lite serves Phase 1)
- [[biz/strategy/execution/02-platform-strategy|Platform Strategy]] - Complete ecosystem vision

---

## Related Documents

### Company Strategy
- [[biz/strategy/planning/execution/03-sprint-1-roadmap|Sprint 1 Master Plan]] - 4-week execution plan (Lite is Priority #1)
- [[biz/strategy/planning/execution/01-product-roadmap|Product Roadmap]] - E1 prioritization (Rank #1, Score 18/21)
- [[biz/strategy/planning/foundations/06-prioritization-framework|Prioritization Framework]] - Why Lite ranks highest
- [[biz/strategy/market-analysis/03-cultural-context|Cultural Context]] - Protection-first positioning

### Growth & Go-to-Market
- [[biz/departments/growth/marketing/02-sprint-1-launch-strategy|Sprint 1 Launch Strategy]] - Week 1-4 soft launch plan
- [[biz/departments/growth/sales/01-sprint-1-playbook|Sprint 1 Sales Playbook]] - Activation scripts
- [[biz/departments/growth/customer-success/01-sprint-1-onboarding-guide|Sprint 1 Onboarding Guide]] - In-app + WhatsApp onboarding (line 308-365)

### Technical Documentation
- [[products/03-web-dashboard-lite/specifications/00-specifications|Product Specifications]] - Architecture, features, validation plan
- [[products/03-web-dashboard-lite/specifications/05-pmf-validation-plan|PMF Validation Plan]] - Gate 1B criteria

---

## Development Status

**Current Phase:** Planning & Specification
**Next Steps:**
1. Finalize Electron technical architecture
2. Define exact 30-metric subset from full catalog
3. Design offline-first sync strategy
4. Build MVP (Months 1-3)
5. Launch beta testing with 50-100 Mikro users

**Timeline:** 6-month PMF validation before scaling to Full SaaS

---

**Product Owner:** [TBD]
**Last Updated:** December 25, 2025
**Version:** 1.0 (Initial positioning document)


