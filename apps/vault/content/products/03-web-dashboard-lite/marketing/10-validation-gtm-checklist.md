# E1: Sprint 1 Launch Readiness Checklist

## Pre-Launch (Week 0: Validation Phase)

### Week 0: Pre-Sale Validation - MANDATORY - [ ] **Landing page created** (waitlist signup)
 - Copy from `01-one-pager.md`
 - Mockup screenshots (6 dashboard views)
 - WhatsApp link for support

- [ ] **Outreach channels prepared**
 - Join 10+ F&B Facebook groups
 - Prepare 3 post variations (see `03-launch-campaign.md`)
 - WhatsApp broadcast list (50-100 warm contacts)

- [ ] **Validation metrics dashboard**
 - Track: Signups, engagement signals, demo requests
 - Target: 50+ signups, 30%+ engagement

- [ ] **Decision Gate Review (End of Week 2)**
 - PASS (50+ signups, 30%+ engage) → PROCEED to build
 - ITERATE (weak metrics) → Adjust value prop, re-run 1 week
 - FAIL (<30 signups, <20% engage) → PAUSE, reassess hypothesis

---

## Build Phase (Week 3-4: If Validation Passed)

### Development Readiness

- [ ] **Electron MVP architecture finalized**
 - See `specifications/electron-architecture.md`
 - Tech stack: Next.js + Electron + SQLite
 - 6 core metrics defined (revenue, top menu, staff, customers, avg transaction, busy hours)

- [ ] **Development environment setup**
 - GitHub repo created
 - CI/CD pipeline (optional for MVP)
 - Dev → Staging → Prod environments

- [ ] **6 core features built & tested**
 - Feature 1: Revenue graph (7-day trend)
 - Feature 2: Top 5 menu analysis
 - Feature 3: Staff performance comparison
 - Feature 4: Customer count tracking
 - Feature 5: Average transaction value
 - Feature 6: Busiest hours heatmap

### QA & Testing

- [ ] **Internal testing (Week 3)**
 - Install on Windows (95% of target market)
 - Test offline mode (disconnect internet)
 - CSV import from sample POS data
 - PDF export functionality

- [ ] **Beta testing (5-10 waitlist users, Week 4)**
 - Onboarding flow test
 - First dashboard view <2min
 - Identify UX friction points

---

## Launch Phase (Week 1-4 Post-Build)

### Week 1: Soft Launch (30 signups target)

**Marketing:**
- [ ] Official announcement post (Facebook groups)
- [ ] WhatsApp broadcast to waitlist (50-100 people)
- [ ] Instagram stories (3-5/day)
- [ ] Demo video 2min (see `03-launch-campaign.md`)

**Operations:**
- [ ] WhatsApp Business set up for support
- [ ] Onboarding auto-messages configured
- [ ] Health score tracking (Google Sheets MVP)

**Metrics:**
- [ ] Day 1: 10-15 signups
- [ ] Day 7: 30 total signups
- [ ] Activation rate: >60% complete onboarding
- [ ] Engagement: >50% open 3+ times in Week 1

---

### Week 2: Scaling Launch (60 total signups)

**Marketing:**
- [ ] 5-10 Facebook group posts (rotate groups)
- [ ] User testimonial collection (early adopters)
- [ ] Behind-the-scenes content (development story)

**Customer Success:**
- [ ] Execute `customer-success/engagement-playbook.md`
- [ ] Daily WhatsApp nudges (data input reminders)
- [ ] Feature discovery messages (Day 3, 5, 7)

**Metrics:**
- [ ] Week 2 total: 60 signups
- [ ] Retention: 70% Week 1 signups still active Week 2
- [ ] Multi-feature usage: 40% use 2+ metrics

---

### Week 3: Community Building (80 total signups)

**Marketing:**
- [ ] First case study published (see `09-case-studies.md`)
- [ ] Facebook group for users created ("Dashboard Lite Community")
- [ ] Feature spotlight posts (1 per day)

**Customer Success:**
- [ ] Identify power users (health score >75)
- [ ] Personal check-in calls (5-10 high-value users)
- [ ] Collect feedback for iteration

**Metrics:**
- [ ] Week 3 total: 80 signups
- [ ] Active users (DAU): 50-60% of activated
- [ ] Value realization signals: Users report insights

---

### Week 4: Final Push (100+ signups)

**Marketing:**
- [ ] Referral program launch ("Ajak 3 teman, dapat Premium 1 bulan gratis")
- [ ] Urgency messaging ("100 user pertama dapat bonus")
- [ ] Final testimonial push

**Operations:**
- [ ] Review `analytics/product-metrics.md` dashboard
- [ ] Weekly metrics review meeting (PM, CS, Marketing)
- [ ] Identify funnel bottlenecks

**Metrics:**
- [ ] Week 4 total: 100+ signups
- [ ] Activation: 60-70%
- [ ] Week 1 engagement: 50%+
- [ ] NPS collected from 20+ users

---

## Post-Launch (Month 2+: Conversion Phase)

### Freemium Conversion Activation

- [ ] **Trial offers prepared**
 - 14-day Premium trial (no credit card)
 - Trial onboarding sequence (Day 1, 3, 7, 11-13)
 - Payment gateway (Midtrans) tested & live

- [ ] **Upsell triggers configured**
 - Hard gates: 7th metric, >30 day history
 - Soft nudges: Health score >75, value realization moments
 - See `customer-success/upsell-triggers.md`

- [ ] **Premium tier launched**
 - 12 custom metrics vs 6 free
 - 1-year data history vs 30 days
 - 3 users vs 1 user
 - PDF auto-export

### Conversion Metrics Tracking

- [ ] **Month 2 targets**
 - Free → Trial: 15% of engaged users
 - Trial → Paid: 60-70%
 - Overall Free→Paid: 5-10%
 - MRR: Rp 5-10M (20-40 paying customers)

- [ ] **Weekly KPI review** (see `analytics/dashboard-kpis.md`)
 - Activation rate
 - WAU %
 - Free→Paid conversion
 - MRR growth
 - Churn rate (paid)

---

## Operational Readiness

### Team & Roles

- [ ] **Product Manager assigned**
 - DRI for metrics, roadmap, feature prioritization

- [ ] **Customer Success lead assigned**
 - Executes engagement playbooks
 - Manages health scores
 - Handles upsell conversations

- [ ] **Marketing/Growth lead assigned**
 - Executes launch campaign
 - Manages Facebook/WhatsApp outreach
 - Creates content (case studies, testimonials)

### Tools & Systems

- [ ] **Analytics dashboard** (Google Data Studio)
 - Connected to app analytics (Mixpanel/Amplitude)
 - Connected to payment gateway (Midtrans)
 - 8 core KPIs tracked

- [ ] **CRM setup** (Google Sheets MVP or HubSpot)
 - Health scores calculated daily
 - User segmentation (Healthy/At-Risk/Churning)
 - Automated alerts on score drops

- [ ] **Communication tools**
 - WhatsApp Business API configured
 - Auto-messages set up (activation, engagement, conversion)
 - Support response SLA defined (4h for Free, 1h for Premium)

### Legal & Compliance

- [ ] **Terms of Service** (platform-level or freemium-specific)
 - See `legal/freemium-terms.md`
 - Reviewed by legal (if applicable)

- [ ] **Privacy policy** (data handling, offline-first)

- [ ] **Payment terms** (Midtrans, refund policy)

---

## Success Criteria (Month 3 Review)

### Minimum Viable Success

- [ ] 100+ free signups
- [ ] 60% activation (onboarding completion)
- [ ] 50% Week 1 engagement (3+ opens)
- [ ] 5% Free→Paid conversion
- [ ] Rp 5-10M MRR (20-40 paying customers)
- [ ] <15% paid churn rate

### Stretch Goals

- [ ] 200+ signups
- [ ] 70% activation
- [ ] 60% engagement
- [ ] 10% conversion
- [ ] Rp 20M MRR (80 customers)
- [ ] <10% churn

---

## Go/No-Go Decision Points

### Gate 1: Pre-Sale Validation (End of Week 0)
**Criteria:** 50+ signups, 30%+ engagement
**Decision:** PROCEED to build OR ITERATE/PAUSE

### Gate 2: Beta Testing (End of Week 4 build)
**Criteria:** 5-10 beta users, >60% activation, no critical bugs
**Decision:** LAUNCH or DELAY

### Gate 3: Month 1 Review
**Criteria:** 100+ signups, 50%+ engagement
**Decision:** SCALE acquisition or OPTIMIZE funnel

### Gate 4: Month 3 Review
**Criteria:** 5%+ conversion, Rp 5M+ MRR
**Decision:** CONTINUE Sprint 2 or PIVOT

---

## Launch Day Checklist (Quick Reference)

**Morning (9 AM):**
- [ ] Post to 5 Facebook groups
- [ ] WhatsApp broadcast to waitlist
- [ ] Instagram announcement

**Midday (12 PM):**
- [ ] Monitor signups (target: 10-15 Day 1)
- [ ] Respond to questions (WhatsApp/Facebook)

**Evening (6 PM):**
- [ ] Send welcome message to new signups
- [ ] Day 1 metrics review

**Next 7 Days:**
- [ ] Daily engagement nudges (WhatsApp 9 AM)
- [ ] Feature discovery messages (Day 3, 5, 7)
- [ ] Week 1 milestone celebration

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/marketing/03-launch-campaign|Launch Campaign]]** - Detailed launch plan
- **[[products/03-web-dashboard-lite/sales/pre-sale-validation-playbook|Pre-Sale Validation]]** - Week 0 validation strategy
- **[[products/03-web-dashboard-lite/marketing/01-one-pager|One-Pager]]** - Marketing copy and messaging
- **[[products/03-web-dashboard-lite/specifications/05-pmf-validation-plan|PMF Validation Plan]]** - Product-market fit validation

---

**DRI:** Product Manager
**Status:** Use this checklist to track Sprint 1 launch readiness
**Last Updated:** December 28, 2025
