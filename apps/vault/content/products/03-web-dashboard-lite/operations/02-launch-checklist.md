# E1: Web Dashboard Lite - Launch Checklist
**Product:** Offline Web Dashboard (Electron App)
**Target Launch:** Week 4 (Day 24-28) — Needs more polish than A1/R1
**Minimum Viable Launch:** Week 3 (Day 21) for private beta

---

## Quick Summary

| Requirement | Status | Blocker? | Time | Owner |
|-------------|--------|----------|------|-------|
| Electron app (.exe) | [ ] | YES | 3 weeks | Dev |
| EULA (legal) | [ ] | YES | 2 hours | Legal |
| App signing certificate | [ ] | HIGHLY RECOMMENDED | 1 day + $200/year | Dev |
| Installer (.exe) | [ ] | YES | 1 day | Dev |
| Terms of Service | [ ] | For public launch | Already created | Legal |
| Midtrans (paid tiers) | [ ] | Optional for Phase 1 | Already done | Finance |
| Landing page | [ ] | Optional (can distribute via WhatsApp) | 1 day | Marketing |

**Can launch privately (beta) with:** App + EULA
**Can launch publicly (freemium) with:** All above + App signing + Website
**Can monetize (paid tiers) with:** Midtrans integration in-app

---

## Development (Week 1-3, Day 1-21)

### Week 1: Foundation (Day 1-7)

#### Day 1-2: Project Setup & Database

- [ ] Initialize Next.js + Electron project
 ```bash
 npx create-next-app@latest web-dashboard-lite
 cd web-dashboard-lite
 npm install electron electron-builder
 npm install drizzle-orm better-sqlite3
 npm install zustand recharts lucide-react
 ```

- [ ] Configure for Electron:
 - [ ] `next.config.js` → output: 'export'
 - [ ] Create `electron/main.js` (main process)
 - [ ] Create `electron/preload.js` (IPC bridge)
 - [ ] Configure `package.json` scripts

- [ ] Set up SQLite database:
 - [ ] Create `lib/db.ts` (Drizzle config)
 - [ ] Create `lib/schema.ts` (5 tables: settings, products, staff, transactions, daily_summary)
 - [ ] Test: Create database, insert sample row

- [ ] Set up state management (Zustand):
 - [ ] `store/useStore.ts` (global state)
 - [ ] States: currentTab, dateRange, selectedFilters, healthScore

**Deliverable:** Skeleton app runs locally

---

#### Day 3-4: CSV Import Module

- [ ] Create `lib/csv-importer.ts`:
 - [ ] Use PapaParse for CSV parsing
 - [ ] Column auto-detection (fuzzy match: "date" OR "tanggal" OR "tgl")
 - [ ] Column mapping UI (if required columns missing)
 - [ ] Validation: Check date format, negative prices, nulls
 - [ ] Error handling (see tech spec Section 10.1)
 - [ ] Batch insert to SQLite (1000 rows at a time)
 - [ ] Progress bar (0-100%)

- [ ] Create import UI:
 - [ ] "Import CSV" button in sidebar
 - [ ] File picker dialog
 - [ ] Column mapping screen (if needed)
 - [ ] Progress indicator
 - [ ] Success/error summary (X rows imported, Y skipped)

- [ ] Test with sample data (5K rows)
 - [ ] Verify import speed <10s
 - [ ] Verify all data in database
 - [ ] Verify daily_summary auto-calculated

**Deliverable:** CSV import working end-to-end

---

#### Day 5-7: Metrics Calculation Engine

- [ ] Create `lib/metrics-engine.ts`:
 - [ ] Financial metrics (10 metrics from tech spec)
 - Total Revenue
 - Gross Profit
 - Profit Margin %
 - Food Cost %
 - Prime Cost %
 - Avg Transaction Value
 - Revenue vs Target %
 - Week-over-Week Change %
 - Month-over-Month Change %
 - Days of Cash on Hand

 - [ ] Product metrics (10 metrics)
 - BCG Matrix classification
 - Top 5 Sellers
 - Bottom 5 Sellers
 - Product Revenue %
 - Product Margin %
 - Category Mix (Food/Beverage/Dessert %)
 - New Products (added this month)
 - Discontinued Products
 - Avg Items per Transaction
 - Menu Size (active products)

 - [ ] Operations metrics (10 metrics)
 - Peak Hours heatmap
 - Revenue by Day of Week
 - Revenue by Hour
 - Staff Sales (neutral, no ranking)
 - Shift Performance Comparison
 - Transactions per Hour
 - Avg Wait Time (if data available)
 - Table Turnover (if data available)
 - Customer Count (if data available)
 - Avg Check Size

- [ ] Create `lib/health-score.ts`:
 - [ ] Profitability score (30 points max)
 - [ ] Growth score (25 points max)
 - [ ] Staff efficiency score (25 points max)
 - [ ] Customer repeat score (20 points max)
 - [ ] Total: 0-100
 - [ ] Color coding: Green (80+), Yellow (60-79), Red (<60)

- [ ] Create `lib/alerts.ts`:
 - [ ] 5 pre-defined alert rules (see tech spec)
 - [ ] Check on every daily_summary calculation
 - [ ] Store alerts in database (alerts table)

**Deliverable:** All 30 metrics calculate correctly

---

### Week 2: UI (Day 8-14)

#### Day 8-9: Tab 1 - Financial Health

- [ ] Create layout:
 - [ ] Top bar: "Kesehatan Bisnis" + date range selector + settings
 - [ ] Health Score card (big, prominent)
 - [ ] KPI cards grid (2x2): Today Revenue, vs Target %, Food Cost %, Prime Cost %
 - [ ] Line chart: 7-day revenue trend
 - [ ] Alert box (if alerts exist)

- [ ] Implement components:
 - [ ] `HealthScoreCard.tsx`
 - Donut chart showing 78/100
 - Color-coded (green/yellow/red)
 - Label: "SEHAT" / "WASPADA" / "BAHAYA"
 - [ ] `KPICard.tsx`
 - Metric name
 - Value (formatted: Rp for currency, % for percent)
 - Trend indicator ( green / red)
 - [ ] `RevenueTrendChart.tsx`
 - Recharts LineChart
 - 7/30/90 day toggle
 - Tooltips with formatted values

**Deliverable:** Tab 1 fully functional

---

#### Day 10-11: Tab 2 - Product Performance

- [ ] Create layout:
 - [ ] BCG Matrix (scatter chart, 4 quadrants labeled)
 - [ ] Top 5 Sellers (bar chart, horizontal)
 - [ ] Bottom 5 Sellers (bar chart, horizontal, different color)
 - [ ] Product table (all products, sortable)

- [ ] Implement components:
 - [ ] `BCGMatrixChart.tsx`
 - Scatter chart (Recharts)
 - X-axis: Revenue (log scale)
 - Y-axis: Growth %
 - Quadrant labels: Star, Cash Cow, Dog, Question
 - Tooltips: Product name, revenue, growth %
 - [ ] `Top5SellersChart.tsx`
 - Bar chart with revenue + % of total
 - [ ] `ProductTable.tsx`
 - Sortable columns: Name, Category, Revenue, Margin, Sales Count
 - Filter by category

**Deliverable:** Tab 2 fully functional

---

#### Day 12-13: Tab 3 - Operations & Staff

- [ ] Create layout:
 - [ ] Peak Hours heatmap (Hour × Day of Week matrix)
 - [ ] Shift Performance Comparison (bar chart, neutral framing)
 - [ ] Revenue by Day of Week (line/bar chart)
 - [ ] Helper text: "Perbandingan netral, bukan ranking"

- [ ] Implement components:
 - [ ] `PeakHoursHeatmap.tsx`
 - Matrix visual (Recharts or custom)
 - Color intensity = revenue
 - Legend: Low () → High ()
 - [ ] `ShiftComparisonChart.tsx`
 - Horizontal bar chart
 - Labels: Shift Pagi, Shift Siang, Shift Malam
 - Values: Revenue, not ranked (#1, #2, #3)

**Deliverable:** Tab 3 fully functional

---

#### Day 14: Settings & More Tab

- [ ] Settings screen:
 - [ ] Business name (editable)
 - [ ] PIN setup/change (bcrypt hashed)
 - [ ] Target revenue (editable)
 - [ ] Target food cost % (editable, default 32%)
 - [ ] Export data (CSV/Excel)
 - [ ] About (version, license)

- [ ] Data export:
 - [ ] Export all transactions to CSV
 - [ ] Export daily summary to Excel
 - [ ] File picker for save location

**Deliverable:** Settings working

---

### Week 3: Polish & Testing (Day 15-21)

#### Day 15-16: Design System & Polish

- [ ] Apply design system (see tech spec):
 - [ ] Colors: Primary #2563EB, Success #16A34A, Warning #CA8A04, Danger #DC2626
 - [ ] Typography: Inter font, text sizes defined
 - [ ] Consistent spacing (8px grid)
 - [ ] Shadows and borders

- [ ] Responsive design:
 - [ ] Test on 1024×768 (min supported)
 - [ ] Test on 1920×1080 (common)
 - [ ] Ensure no horizontal scroll
 - [ ] Mobile view (optional, not priority for Electron)

- [ ] Accessibility:
 - [ ] Keyboard navigation (Tab, Enter, Esc)
 - [ ] Focus indicators
 - [ ] Alt text for charts (descriptive titles)
 - [ ] Color contrast meets WCAG AA

**Deliverable:** App looks polished

---

#### Day 17-18: Performance Optimization

- [ ] Implement optimizations (see tech spec Section 11):
 - [ ] Virtualized lists for 1000+ products
 - [ ] Debounced chart updates (300ms delay on filter change)
 - [ ] Lazy load tabs (only render active tab)
 - [ ] SQL indexes on transactions.date and transactions.productId
 - [ ] Prepared statements for all queries

- [ ] Test performance benchmarks:
 - [ ] App launch: <3s
 - [ ] CSV import (1K rows): <2s
 - [ ] CSV import (10K rows): <10s
 - [ ] Dashboard load: <500ms
 - [ ] Tab switch: <200ms
 - [ ] Health Score calc: <50ms

**Deliverable:** App is fast

---

#### Day 19-20: Testing

- [ ] Unit tests (Vitest):
 - [ ] Metrics engine (80% coverage)
 - [ ] Health score calculator
 - [ ] CSV parser (error cases)
 - [ ] Database queries

- [ ] Integration tests:
 - [ ] CSV import → Database → Metrics → UI
 - [ ] Settings save → Reload app → Verify persisted

- [ ] E2E tests (Playwright):
 - [ ] First launch → Onboarding → Import CSV → View dashboard
 - [ ] Set PIN → Close app → Reopen → Enter PIN → Access granted
 - [ ] Export data → Verify file saved
 - [ ] Change date filter → Charts update

- [ ] Manual QA:
 - [ ] Test all 30 metrics with known-good data
 - [ ] Test error scenarios (corrupt CSV, disk full, etc.)
 - [ ] Test on clean Windows install (VM)

**Deliverable:** All tests passing

---

#### Day 21: Beta Build

- [ ] Build production version:
 ```bash
 npm run build
 npm run package:win
 ```

- [ ] Test installer:
 - [ ] Install on clean VM
 - [ ] Verify app runs
 - [ ] Verify database created in AppData
 - [ ] Verify app quits cleanly

- [ ] Create beta installer:
 - [ ] File: `WebDashboardLite-v1.0.0-beta.exe`
 - [ ] Unsigned (for beta only)

**Deliverable:** Beta .exe ready for testing

---

## Legal (Day 22-23)

### CRITICAL: EULA (End-User License Agreement) (2 hours)

**Must complete before:** Any distribution (even beta)
**Blocks:** Legal protection

- [ ] Use template: [EULA Template](https://www.eulatemplate.com/)
- [ ] Customize for E1:
 - Software name: "Web Dashboard Lite by Clario"
 - License type: Freemium (free basic, paid premium)
 - Restrictions:
 - [ ] No reverse engineering
 - [ ] No redistribution
 - [ ] No commercial use of free tier for businesses >Rp 50M/month
 - Warranty: AS-IS, no guarantee
 - Liability: Max liability = amount paid (Rp 0 for free tier)
 - Data: All data stored locally, customer owns data
 - Termination: We can terminate for ToS violation

- [ ] Display in installer:
 - [ ] Checkbox: "I agree to the License Agreement"
 - [ ] Link to full EULA: `license.txt` in install directory

- [ ] Display in app:
 - [ ] Help → License Agreement
 - [ ] About screen → License type (Free / Starter / Pro)

**Deliverable:** EULA.txt ready

---

### HIGHLY RECOMMENDED: App Signing Certificate (1 day + $200/year)

**Must complete before:** Public launch
**Blocks:** Windows SmartScreen warning

**Why:** Unsigned apps trigger "Windows protected your PC" warning, scaring users.

**Options:**

**Option 1: Code Signing Certificate ($200-400/year)**
- [ ] Buy from SSL.com, DigiCert, or Sectigo
- [ ] Verify identity (business documents required)
- [ ] Receive certificate (.pfx file + password)
- [ ] Configure electron-builder:
 ```json
 {
 "win": {
 "certificateFile": "cert.pfx",
 "certificatePassword": "env:CSC_PASSWORD",
 "sign": "./custom-sign.js"
 }
 }
 ```
- [ ] Test signed installer:
 - [ ] Right-click → Properties → Digital Signatures
 - [ ] Verify: "This digital signature is OK"
 - [ ] Install: No SmartScreen warning

**Option 2: Self-Signed (FREE, but less trusted)**
- [ ] Generate self-signed cert (Windows SDK)
- [ ] Sign app (still gets SmartScreen warning)
- [ ] Users must click "More info" → "Run anyway"
- [ ] After ~100 downloads, Windows trust builds up

**Recommendation:** Skip for beta, buy certificate before public launch.

---

## Build & Distribution (Day 24-25)

### Day 24: Production Build

- [ ] Final QA:
 - [ ] All features working
 - [ ] No console errors
 - [ ] Performance benchmarks met
 - [ ] EULA displays correctly

- [ ] Update version numbers:
 - [ ] `package.json` → `"version": "1.0.0"`
 - [ ] About screen → v1.0.0
 - [ ] Installer file name → `WebDashboardLite-v1.0.0-Setup.exe`

- [ ] Build:
 ```bash
 npm run build
 npm run package:win
 ```

- [ ] Sign (if certificate available):
 ```bash
 npm run package:win -- --sign
 ```

- [ ] Test on multiple machines:
 - [ ] Windows 10 (min supported)
 - [ ] Windows 11
 - [ ] Virtual machine (clean install)

**Deliverable:** `WebDashboardLite-v1.0.0-Setup.exe` (signed if possible)

---

### Day 25: Upload & Distribution Setup

- [ ] Upload to Google Drive:
 - [ ] Folder: `Clario Products/E1-Web-Dashboard-Lite/Installers/Current/`
 - [ ] File: `WebDashboardLite-v1.0.0-Setup.exe`
 - [ ] Set permissions: Anyone with link can VIEW
 - [ ] Get shareable link

- [ ] Create download page (optional, can use direct link):
 - [ ] Simple HTML page with:
 - Product name
 - Version number
 - System requirements (Windows 10+, 4GB RAM)
 - Download button → Google Drive link
 - Installation instructions
 - Support contact

**Deliverable:** Download link ready

---

## Marketing (Day 25-28)

### Screenshots (2 hours)

- [ ] Take screenshots of each tab with realistic data
- [ ] Screenshot 1: Financial Health (Health Score 78/100)
- [ ] Screenshot 2: Product Performance (BCG Matrix)
- [ ] Screenshot 3: Operations (Peak Hours heatmap)
- [ ] Crop and optimize (<500KB each)
- [ ] Upload to marketing folder

---

### Demo Video (Optional, 1 day)

**Script (3-5 minutes):**
- [ ] Problem: "Data POS banyak, tapi bingung analisis?"
- [ ] Solution: "Dashboard offline, data tetap aman"
- [ ] Demo:
 - Download & install
 - Import CSV
 - Show 30-second insight (Health Score, Top Sellers, Peak Hours)
 - Emphasize: Offline, private, no cloud
- [ ] CTA: "Download gratis: [Link]"

---

### Landing Page (Optional, can use WhatsApp for beta)

- [ ] Create page with:
 - Hero: "Lihat Kesehatan Bisnis F&B Anda dalam 30 Detik"
 - Features: 30 metrics, offline, free tier
 - Screenshots carousel
 - Pricing:
 - Free: 1-month data, 15 metrics
 - Starter (Rp 200K/month): 12-month data, 30 metrics
 - Pro (Rp 350K/month): Unlimited data, all features
 - Download button
 - FAQ

- [ ] Deploy: Vercel/Netlify (free)

---

## Launch (Day 26-28)

### Beta Launch (Day 26-27)

**Target:** 10-20 beta testers

- [ ] Reach out via WhatsApp:
 ```
 Halo! Mau coba product baru saya?

 Dashboard analytics untuk F&B, offline (data tetap di laptop Anda).

 Gratis selamanya untuk beta tester!

 Download: [Link]
 Butuh POS data dalam CSV, bisa bantu kalau bingung.
 ```

- [ ] Send installer link
- [ ] Follow up after 2 days:
 - "Sudah install? Ada kendala?"
 - Collect feedback

- [ ] Fix critical bugs (1-2 days)

---

### Public Launch (Day 28)

**When ready (after beta feedback):**

- [ ] Update installer to v1.0.1 (if bugs fixed)
- [ ] Post to:
 - [ ] Personal social media
 - [ ] F&B Facebook groups
 - [ ] LinkedIn
 - [ ] Product Hunt (optional)

- [ ] Post template:
 ```
 LAUNCHING: Web Dashboard Lite

 Dashboard analytics F&B, 100% offline.
 Data tetap di laptop Anda, tidak ke cloud.

 30 metric otomatis
 Health Score bisnis
 Gratis selamanya (Free tier)

 Download: [Link]
 Demo: [Video]
 ```

- [ ] Monitor downloads (Google Drive analytics)
- [ ] Respond to questions <24 hours

---

## Post-Launch Operations

### Daily
- [ ] Check support email
- [ ] Monitor crash reports (if telemetry enabled)

### Weekly
- [ ] Review user feedback
- [ ] Plan bug fixes/features for next version

### Monthly
- [ ] Release update (if needed)
- [ ] Email all users about new version
- [ ] Update Google Drive with new installer

---

## Success Metrics

### Week 1 (Beta)
- [ ] 10-20 beta testers
- [ ] 70%+ can successfully import CSV
- [ ] <5 critical bugs

### Week 2-4 (Public)
- [ ] 100+ downloads
- [ ] 50%+ activate (import CSV, use app)
- [ ] 10%+ upgrade to Starter tier (Rp 200K/mo)

### Month 2-3
- [ ] 500+ downloads
- [ ] 50+ paid users (Rp 10M+ MRR from E1 alone)
- [ ] Product-market fit signals:
 - Users use app weekly
 - <20% churn on paid tiers
 - Word-of-mouth referrals

---

**Last Updated:** December 26, 2025
**Status:** Ready to Execute (after A1/R1 launch)

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite Product]]** - Product overview
- **[[products/03-web-dashboard-lite/specifications/04-electron-architecture|Electron Architecture]]** - Technical architecture and build system
- **[[products/03-web-dashboard-lite/specifications/03-tech-spec|Technical Specification]]** - Complete technical requirements
- **[[products/03-web-dashboard-lite/product-strategy/2025-roadmap|2025 Roadmap]]** - Product roadmap and timeline
- **[[03-deployment-sop|Deployment SOP]]** - Deployment and distribution process
