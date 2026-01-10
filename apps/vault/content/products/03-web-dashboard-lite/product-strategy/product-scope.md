# Product Scope - Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Scope Type:** Freemium PMF Validation Product
**Phase:** Pillar 3 (Expansion - Designed to Outgrow)

---

## What's Included - Free Tier (Starter)

### 6 Core Survival Metrics

**1. Health Score Dashboard (0-100)**
- Composite score: Revenue trend + Profit margin + Cash position
- Color-coded: Green (80-100), Yellow (50-79), Red (0-49)
- Daily snapshot (not historical)

**2. Revenue vs Target**
- Today's revenue vs daily target
- Month-to-date progress %
- "On track" or "Behind" indicator

**3. Staff Leaderboard (Top 5)**
- Rank by sales per hour
- Simple badges ()
- NO salary data shown (privacy)

**4. Top 5 Sellers**
- Best-selling menu items this week
- Revenue contribution %
- Quick visual (bar chart)

**5. Peak Hours Heatmap**
- Busiest hours of day/week
- Color intensity (light = slow, dark = busy)
- Staffing optimization guide

**6. Week-over-Week Trend**
- 7-day revenue line chart
- +/- % vs last week
- Simple up/down arrow

---

### Technical Capabilities (Free Tier)

**Data Storage:**
- Local SQLite database (offline-first)
- 90-day data retention (auto-delete older)
- Single location only

**Refresh:**
- Daily manual CSV upload (1 minute)
- Data auto-imports to dashboard
- NO real-time sync

**Devices:**
- Single device (desktop Electron app)
- NO mobile app
- NO web access

**Users:**
- Single user (owner login only)
- NO team collaboration
- NO multi-user roles

---

## What's Included - Paid Tiers

### Starter Tier (Rp 200-250K/month)

**Everything in Free PLUS:**
- **15 metrics** (vs 6 in free)
- **Cloud sync optional** (backup to cloud, still offline-primary)
- **Multi-device** (up to 2 devices)
- **Email weekly digest** (auto-summary every Monday)
- **Advanced alerts** (10+ rules: revenue drops, staff issues, inventory warnings)
- **180-day retention** (vs 90-day)

**Still LIMITED:**
- Single location only
- No API access
- No custom metrics

---

### Pro Tier (Rp 300-350K/month)

**Everything in Starter PLUS:**
- **30 metrics** (full feature set)
- **Comparative analytics** (compare to industry benchmarks)
- **Custom metric builder** (create 3 custom metrics)
- **Priority support** (<12h email response vs <48h)
- **Unlimited retention** (never auto-delete)

**Still LIMITED:**
- Single location only (multi-outlet = upgrade to Full SaaS C2)
- No API (API = upgrade to Full SaaS Advanced C3)

---

## What's NOT Included (By Design)

### Intentional Limitations

**[x] Multi-Outlet Support:**
- Lite = single location only
- Multi-outlet requires Full SaaS Pro (C2) - Rp 900K-1.2M/month
- **Why:** Complexity limited to maintain Electron offline model
- **Upgrade Trigger:** 2nd outlet opens

**[x] Real-Time Data:**
- Lite = daily CSV upload (manual OR auto-email import)
- Real-time requires Full SaaS Basic (C1) - Rp 300-500K/month
- **Why:** Offline-first architecture can't do real-time
- **Upgrade Trigger:** Needs hourly/real-time refresh

**[x] API Access:**
- Lite = no API, no integrations
- API requires Full SaaS Advanced (C3) - Rp 2-3.5M/month
- **Why:** Security + complexity for offline app
- **Upgrade Trigger:** Needs to integrate with accounting software, CRM, etc.

**[x] Team Collaboration:**
- Lite = single user login
- Team features require Full SaaS Pro (C2)
- **Why:** Electron app is desktop file, not multi-user platform
- **Upgrade Trigger:** Hires 10+ staff, needs manager access

**[x] Accounting Module:**
- Lite = analytics only (no P&L, COGS, invoicing)
- Accounting requires R2 module add-on
- **Why:** Different domain, separate product
- **Upgrade Path:** Add R2a (P&L) + R2c (COGS) separately

**[x] Custom Branding:**
- Lite = standard PWBI branding
- White-label requires Full SaaS Enterprise (C4)
- **Why:** Premium feature for franchises/enterprises

---

## Freemium Strategy

### Free Tier = Land Grab

**Target:** 1,000+ free users (Phase 1 Mikro segment)
- **Goal:** Validate product-market fit
- **Conversion:** 10-20% to paid tiers
- **Timeline:** 6 months to hit 1,000 users

### Paid Tier = Monetization

**Target:** 100-200 paid users (10-20% of free)
- **Starter:** 60% of paid (Rp 200K avg)
- **Pro:** 40% of paid (Rp 350K avg)
- **MRR Target:** 100 Ã— Rp 270K avg = Rp 27M MRR

---

## Upgrade Path Strategy

### Trigger 1: Opens 2nd-3rd Outlet
 ->  **Full SaaS Pro (C2)** - Rp 900K-1.2M/month
- Multi-outlet consolidated view
- Cloud web app (not Electron)
- Team user management (Owner + 3-5 managers)

### Trigger 2: Hires 10+ Staff
 ->  **Full SaaS Basic (C1)** - Rp 300-500K/month
- More staff metrics
- Mobile app access
- Real-time data

### Trigger 3: Needs Accounting
 ->  **Add R2 Accounting Module** - Rp 50-100K/month per module
- Keep E1 Lite for analytics
- Add R2a (P&L), R2c (COGS), R2f (Invoicing)

### Trigger 4: Scales to 5+ Outlets
 ->  **Full SaaS Advanced (C3)** - Rp 2-3.5M/month
- 5-15 locations
- API access
- Predictive analytics

**Migration Support:** We export historical data from Lite  ->  Full SaaS (included in onboarding)

---

## Technical Scope Details

### System Requirements

**Minimum:**
- Windows 10+ OR macOS 10.14+
- 4GB RAM (8GB recommended)
- 5GB free storage
- Internet for CSV email import (optional)

**NOT Required:**
- [x] Server hosting
- [x] Cloud subscription
- [x] Database expertise

### Data Requirements

**From POS (CSV):**
- Transaction-level data (date, product, quantity, price)
- Staff tracking (optional but recommended)
- Payment method (cash/card/e-wallet)

**Data Privacy:**
- Local encryption (SQLite encrypted with PIN)
- Optional cloud backup (user controls when)
- Data never shared/sold

---

## Comparison: E1 Lite vs Full SaaS

| Feature | E1 Free | E1 Starter | E1 Pro | Full SaaS Basic (C1) |
|---------|---------|------------|--------|----------------------|
| **Price** | Free | Rp 200K/mo | Rp 350K/mo | Rp 300-500K/mo |
| **Metrics** | 6 | 15 | 30 | 30+ (expanding) |
| **Hosting** | Local (offline) | Local + cloud backup | Local + cloud | Cloud web app |
| **Device** | 1 device | 2 devices | 2 devices | Any device (web) |
| **Outlets** | 1 | 1 | 1 | 1 |
| **Refresh** | Daily manual | Daily manual | Daily manual | Hourly auto |
| **Mobile** | [x] No | [x] No | [x] No | [x] Yes |
| **Team** | [x] No | [x] No | [x] No | [x] 1-3 users |

**Decision Guide:**
- Phase 1 Mikro, survive mode  ->  **E1 Free**
- Phase 1 Mikro, wants more  ->  **E1 Starter** (Rp 200K)
- Phase 1 Mikro, power user  ->  **E1 Pro** (Rp 350K)
- Phase 2 expansion (2+ outlets)  ->  **Full SaaS Pro (C2)** directly

---

## Roadmap

### Version 1.0 (Sprint 1, Week 4)
- 6-metric free tier MVP
- Offline-first Electron app
- CSV import only

### Version 1.1 (Month 2)
- Add Starter + Pro paid tiers
- Cloud sync (optional)
- Email digest feature

### Version 2.0 (Month 6)
- Increase free metrics 6  ->  10 (if conversion low)
- Mobile companion app (view-only)
- POS auto-sync (email-based)

### Version 3.0 (Year 2)
- "Migrate to Full SaaS" one-click button
- Historical data export tool
- Lite becomes entry point to SaaS ecosystem

---

**Related Documents:**
- [[products/01-power-bi-template/product-strategy/product-strategy|product-strategy/product-strategy.md]] - 3-phase MVP (37KB)
- [[products/03-web-dashboard-lite/specifications/02-feature-specification|specifications/feature-specification.md]] - Detailed metrics
- [[products/03-web-dashboard-lite/specifications/06-upgrade-triggers|specifications/upgrade-triggers.md]] - Conversion strategy

**Last Updated:** 2025-12-26
**Owner:** Product Lead

