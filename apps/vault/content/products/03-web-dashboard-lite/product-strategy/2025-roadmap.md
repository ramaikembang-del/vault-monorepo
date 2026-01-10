# 2025 Product Roadmap - E1 Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Last Updated:** 2025-12-28
**Version:** 1.0
**Planning Horizon:** Q1 2025 (Launch)  ->  Q4 2025

---

## 1. Executive Summary

**2025 Vision:**
> Make E1 the #1 analytics platform for small-medium F&B businesses in Indonesia by delivering automated insights, eliminating manual data entry, and enabling data-driven decisions for every owner.

**Key Strategic Priorities:**
1. **Eliminate Friction** (Q2): Auto-sync with POS systems (remove CSV import pain)
2. **Expand Value** (Q3): Add inventory tracking + alerts
3. **Scale Distribution** (Q4): Mobile app + API partnerships

**Success Metrics (End of 2025):**
- **Users:** 1,000+ paid subscribers (vs 50 in Q1)
- **MRR:** Rp 200M (vs Rp 10M in Q1)
- **NPS:** >50 (promoter-driven growth)
- **Market Position:** Top 3 standalone F&B analytics tools in Indonesia

---

## 2. Q1 2025: Launch & Validate (Complete)

### 2.1 Goals

- [x] Launch MVP with core analytics features
- [x] Achieve 50 paid subscribers (Starter + Pro)
- [x] Validate product-market fit (NPS >40)
- [x] Establish distribution channels (Facebook Ads, SEO, partners)

### 2.2 Features Shipped

**Core Features:**
- [x] CSV import from Moka, Qasir, Pawoon, BukuWarung, Custom POS
- [x] Sales dashboard (daily/weekly/monthly trends)
- [x] Product performance analysis (top products, revenue breakdown)
- [x] Payment method breakdown (Cash, E-Wallet, Debit, Credit)
- [x] Growth metrics (DoD, WoW, MoM)
- [x] PDF/Excel export
- [x] Multi-outlet support (Pro tier)
- [x] Offline-first architecture (SQLite local database)
- [x] Optional cloud sync (Supabase)

**Pricing Tiers:**
- [x] Free (7 days data)
- [x] Starter (Rp 200K/month, 30 days data)
- [x] Pro (Rp 300K/month, 90 days data + multi-outlet)

---

## 3. Q2 2025: Eliminate Friction (Apr-Jun)

### 3.1 Theme: "From Manual to Automatic"

**Problem:** CSV import is #1 activation blocker (35% of users never import CSV)

**Solution:** Auto-sync with POS systems via APIs

---

### 3.2 Major Features

#### Feature 1: Auto-Sync with Moka POS (April)

**Description:** Direct API integration with Moka POS for automatic daily data sync

**User Story:**
> "As a Moka POS user, I want E1 to automatically sync my transactions daily so I don't have to manually export CSV every day."

**Scope:**
- OAuth integration with Moka API
- Daily auto-sync (midnight sync, or configurable time)
- Incremental sync (only new transactions since last sync)
- Error handling + retry logic (if Moka API down)
- User dashboard: "Last synced: 2 hours ago" status

**Technical Requirements:**
- Moka API access (request partner API key)
- Backend service: Sync scheduler (cron job)
- Database: Store Moka OAuth tokens securely
- Error alerts: Email user if sync fails 2 days in a row

**Success Metrics:**
- 80% of Moka users enable auto-sync within 7 days
- CSV import tickets reduced by 60%
- Activation rate increases from 70% to 85%

**Timeline:**
- Week 1: API integration development
- Week 2: Testing with beta users (10 Moka users)
- Week 3: Public release
- Week 4: Monitor + iterate

---

#### Feature 2: Auto-Sync with Qasir POS (May)

**Description:** API integration with Qasir POS (similar to Moka)

**Scope:** Same as Moka (OAuth, daily sync, incremental, error handling)

**Success Metrics:**
- 75% of Qasir users enable auto-sync
- Combined (Moka + Qasir) auto-sync coverage: 60% of user base

---

#### Feature 3: WhatsApp Alerts & Notifications (June)

**Description:** Send daily sales summary + alerts via WhatsApp

**User Story:**
> "As a busy owner, I want E1 to send me daily sales summary on WhatsApp so I can track performance without opening the app."

**Scope:**

**Daily Summary (8 AM):**
```
 Selamat pagi! Sales kemarin (27 Des 2025):

 Total Sales: Rp 2,500,000
 vs Kemarin: +8.5% (Rp 2,305,000)
 Top Product: Nasi Goreng (Rp 850,000)

Lihat detail: [Link to Dashboard]
```

**Real-Time Alerts:**
- Sales drop 20%+ today vs yesterday (sent at 6 PM)
- New revenue milestone (e.g., "Congrats! First day >Rp 3M!")
- [!] Sync failed (auto-sync error alert)

**Technical Requirements:**
- WhatsApp Business API integration (Twilio or MessageBird)
- User opt-in (Settings  ->  Enable WhatsApp alerts)
- Rate limiting (max 3 alerts/day to avoid spam)

**Success Metrics:**
- 40% of users enable WhatsApp alerts
- NPS +10 points (users love WhatsApp feature)

---

### 3.3 Minor Features & Improvements

**CSV Import UX Improvements:**
- [x] CSV preview before import (see first 10 rows)
- [x] Better error messages (show expected format example)
- [x] Support drag-and-drop CSV upload

**Dashboard Performance:**
- [x] Pagination for large datasets (>10K transactions)
- [x] Lazy loading for charts
- [x] Dashboard load time <3 seconds (even with 50K transactions)

**Onboarding Improvements:**
- [x] In-app onboarding checklist:
 - [ ] Import first CSV (or enable auto-sync)
 - [ ] View Analytics tab
 - [ ] Check top products
 - [ ] Export PDF report
- [x] Video tutorials embedded in app (not just email)

---

### 3.4 Q2 Goals

| Metric | Q1 Baseline | Q2 Target | Success Criteria |
|--------|------------|----------|------------------|
| **Paid Users** | 50 | 150 | +200% growth |
| **MRR** | Rp 10M | Rp 30M | +200% growth |
| **Activation Rate** | 70% | 85% | +15% (auto-sync impact) |
| **7-Day Retention** | 60% | 75% | +15% (WhatsApp alerts) |
| **NPS** | 45 | 55 | +10 (feature satisfaction) |

---

## 4. Q3 2025: Expand Value (Jul-Sep)

### 4.1 Theme: "Beyond Sales Tracking"

**Problem:** E1 is seen as "just a sales dashboard" - need to expand to full business intelligence

**Solution:** Add inventory tracking + advanced analytics

---

### 4.2 Major Features

#### Feature 4: Inventory Tracking (July-August)

**Description:** Track ingredient stock levels and get low-stock alerts

**User Story:**
> "As a restaurant owner, I want to track my ingredient inventory so I don't run out of key ingredients (e.g., chicken, rice) during peak hours."

**Scope:**

**Inventory Management:**
- Add ingredients catalog (e.g., "Chicken 1kg", "Rice 5kg", "Minyak Goreng 1L")
- Track stock levels (current quantity)
- Set reorder point (alert when stock <X kg)
- Log stock-in (purchase) and stock-out (usage)

**Recipe Costing (Advanced):**
- Define recipes (e.g., "Nasi Goreng" = 200g rice + 100g chicken + 50ml oil)
- Calculate COGS per dish (e.g., "Nasi Goreng costs Rp 8,000 to make")
- Profit margin per product (selling price - COGS)

**Dashboard:**
- Low Stock Alerts: "[!] Chicken stock low (5kg remaining, reorder at 10kg)"
- Inventory Value: Total inventory worth (Rp 5M)
- Top Cost Ingredients: Which ingredients eat up most budget

**Technical Requirements:**
- New database tables: `ingredients`, `recipes`, `stock_logs`
- Backend: Auto-calculate stock usage based on sales (if recipe defined)
- Notifications: WhatsApp alert when stock low

**Success Metrics:**
- 30% of Pro users enable inventory tracking
- Upsell: Convert 20 Starter users to Pro (for inventory feature)
- NPS +5 (feature adds significant value)

**Pricing:**
- Inventory tracking = **Pro tier only** (incentive to upgrade)

---

#### Feature 5: Staff Performance Analytics (September)

**Description:** Track sales by cashier/staff member (identify top performers)

**User Story:**
> "As a cafe owner with 5 staff, I want to see which staff member generates the most sales so I can reward top performers and coach underperformers."

**Scope:**

**Staff Leaderboard:**
```
Top Staff (This Month):

1. Budi (Cashier) - Rp 12M sales (450 transactions)
2. Siti (Cashier) - Rp 10M sales (380 transactions)
3. Ani (Cashier) - Rp 8M sales (320 transactions)
4. Rudi (Cashier) - Rp 5M sales (200 transactions)

 Insight: Budi is your top performer! Consider incentive bonus.
```

**Individual Staff Dashboard:**
- Sales per day/week/month
- Average transaction value (ATVupselling effectiveness)
- Peak hours (when does staff X perform best?)
- Product mix (which products does staff X sell most?)

**Technical Requirements:**
- Import CSV with "cashier_id" column (or map during import)
- Dashboard: Staff Performance tab (Pro tier only)

**Success Metrics:**
- 50% of Pro multi-outlet users use staff analytics
- Upsell: Convert 10 Starter users to Pro (for staff analytics)

**Pricing:**
- Staff performance = **Pro tier only**

---

### 4.3 API Launch (Public Beta) - September

**Description:** REST API for third-party integrations (accounting software, BI tools)

**Use Cases:**
- Export E1 data to Xero, Accurate, Jurnal (accounting software)
- Import E1 data to Tableau, Metabase (custom BI dashboards)
- Automate alerts (e.g., "If daily sales <Rp 1M, create Slack message")

**Scope:**

**Read-Only Endpoints (Pro tier):**
- `GET /transactions` - Retrieve transactions with filters
- `GET /analytics/summary` - Sales summary for date range
- `GET /products` - Product performance data
- `GET /analytics/growth` - DoD/WoW/MoM metrics

**Rate Limiting:**
- Pro: 1,000 requests/hour
- Enterprise (future): Unlimited

**Documentation:**
- API reference: docs.e1-dashboard.com/api
- Code examples (Python, JavaScript, cURL)
- Postman collection

**Success Metrics:**
- 10% of Pro users generate API key
- 5 third-party integrations built (Xero, Accurate, Metabase, Zapier, Make)

---

### 4.4 Q3 Goals

| Metric | Q2 Baseline | Q3 Target | Success Criteria |
|--------|------------|----------|------------------|
| **Paid Users** | 150 | 350 | +133% growth |
| **MRR** | Rp 30M | Rp 70M | +133% growth |
| **Pro Tier %** | 20% | 30% | +10% (inventory/staff upsell) |
| **API Adoption** | 0% | 10% | 35 API users |
| **NPS** | 55 | 60 | +5 (inventory feature) |

---

## 5. Q4 2025: Scale Distribution (Oct-Dec)

### 5.1 Theme: "Reach Every F&B Owner"

**Problem:** E1 is desktop-only (Windows/Mac) - missing mobile users (30% of signups on mobile)

**Solution:** Mobile-first experience + partnerships

---

### 5.2 Major Features

#### Feature 6: Mobile App (PWA) - October-November

**Description:** Progressive Web App (PWA) for mobile access

**User Story:**
> "As a cafe owner on-the-go, I want to check my sales dashboard on my smartphone (iOS/Android) so I can monitor business anywhere."

**Scope:**

**Phase 1: View-Only Mobile Dashboard (October)**
- Responsive mobile web app (works on iOS/Android browsers)
- View sales dashboard, analytics, products
- No CSV import on mobile (desktop feature only)

**Phase 2: Mobile Notifications (November)**
- Push notifications (daily sales summary, alerts)
- "Add to Home Screen" prompt (install PWA like native app)

**Phase 3: Mobile CSV Import (Future - 2026)**
- Allow CSV upload from mobile (Google Drive, Dropbox integration)

**Technical Requirements:**
- Responsive design (mobile-first CSS)
- Service workers (offline caching for PWA)
- Push notifications (FCM - Firebase Cloud Messaging)

**Success Metrics:**
- 40% of users access E1 via mobile within 30 days
- Mobile DAU/WAU ratio: 50% (users check mobile daily)

---

#### Feature 7: POS Partnerships (November-December)

**Description:** White-label E1 for POS vendors (Moka, Qasir, Pawoon)

**Business Model:**
- **Option A: Referral Partnership**
 - POS vendors refer customers to E1 (20% commission on first year MRR)
 - Moka customers get "Powered by E1" dashboard

- **Option B: White-Label Integration**
 - Moka/Qasir bundles E1 as "Moka Analytics Pro" (powered by E1 backend)
 - E1 gets $X/user licensing fee

**Target Partners:**
1. **Moka POS** (50K merchants)
 - Pitch: "Offer advanced analytics without building in-house"
 - Revenue share: 30% of E1 subscription

2. **Qasir POS** (30K merchants)
 - Pitch: "Upsell analytics to free tier users"
 - Revenue share: 25% of E1 subscription

3. **BukuWarung** (500K micro-businesses)
 - Pitch: "Add analytics to warung owners"
 - Revenue share: 20% (high volume, low price)

**Success Metrics:**
- Sign 1 major POS partner by Q4 (Moka or Qasir)
- Partner-driven signups: 50 users in Q4 (pilot)
- Partner MRR: Rp 10M (10% of total MRR)

---

### 5.3 Internationalization (I18n) - December

**Description:** Support English language (expand beyond Indonesia)

**Target Markets:**
- **Philippines** (similar F&B market, English-speaking)
- **Vietnam** (growing cafe culture)
- **Thailand** (large F&B industry)

**Scope:**
- UI translation (English + Bahasa Indonesia toggle)
- Currency support (PHP, VND, THB in addition to IDR)
- Local POS integrations (Philippines: BIR-certified POS systems)

**Launch Strategy:**
- Pilot: Philippines market (English + PHP currency)
- Marketing: Facebook Ads targeting Manila coffee shops
- Goal: 20 paid users in Philippines by Dec 2025

---

### 5.4 Q4 Goals

| Metric | Q3 Baseline | Q4 Target | Success Criteria |
|--------|------------|----------|------------------|
| **Paid Users** | 350 | 650 | +86% growth |
| **MRR** | Rp 70M | Rp 130M | +86% growth |
| **Mobile Users %** | 0% | 40% | 260 mobile DAU |
| **Partner MRR** | Rp 0 | Rp 10M | 1 POS partnership |
| **NPS** | 60 | 65 | +5 (mobile + features) |

---

## 6. Feature Prioritization Framework

### 6.1 Prioritization Criteria

**Scoring (1-10 scale):**

| Feature | User Demand | Business Impact | Technical Effort | Priority Score |
|---------|------------|----------------|-----------------|---------------|
| Auto-Sync (Moka) | 10 | 10 | 7 | **13 (HIGH)** |
| WhatsApp Alerts | 8 | 8 | 4 | **12 (HIGH)** |
| Inventory Tracking | 7 | 8 | 8 | **7 (MEDIUM)** |
| Staff Performance | 6 | 7 | 5 | **8 (MEDIUM)** |
| API Launch | 5 | 9 | 6 | **8 (MEDIUM)** |
| Mobile App (PWA) | 9 | 7 | 7 | **9 (MEDIUM)** |
| Internationalization | 3 | 6 | 5 | **4 (LOW)** |

**Formula:**
```
Priority Score = (User Demand + Business Impact) - (Technical Effort / 2)
```

**Interpretation:**
- **12-15:** Must-have (Q2 priority)
- **8-11:** Should-have (Q3 priority)
- **4-7:** Nice-to-have (Q4 priority)
- **<4:** Backlog (2026)

---

## 7. Deferred Features (2026 Roadmap)

**Features Delayed to 2026:**

1. **Recipe Costing (Advanced COGS):**
 - Requested by 15 users
 - High complexity (requires ingredient definitions, recipe management)
 - Defer to Q1 2026

2. **Native Mobile Apps (iOS/Android):**
 - PWA sufficient for 2025 (faster to ship, lower cost)
 - Native apps in 2026 if PWA adoption proves strong

3. **Multi-Currency Support (Beyond Indonesia + Philippines):**
 - Only 3 users requested
 - Defer until we validate international expansion success

4. **Advanced Forecasting (ML-Powered Sales Predictions):**
 - Cool feature, but not urgent
 - Need more data (1 year of user data) before ML is viable

---

## 8. Resource Planning

### 8.1 Team Requirements

**Current Team (Q1):**
- 2 engineers (fullstack)
- 1 product manager
- 1 designer
- 2 support agents

**Q2 Expansion:**
- +1 backend engineer (for POS API integrations)
- +1 marketing manager (scale ads, SEO, partnerships)

**Q3 Expansion:**
- +1 mobile engineer (PWA development)

**Q4 Expansion:**
- +1 sales/BD (POS partnerships)

**Total Team End of 2025:**
- 5 engineers
- 1 product manager
- 1 designer
- 1 marketing manager
- 1 sales/BD
- 3 support agents
- **Total: 12 people**

---

### 8.2 Budget (2025)

| Quarter | Engineering | Marketing | Support | Total |
|---------|-----------|----------|---------|-------|
| **Q1** | Rp 200M | Rp 50M | Rp 30M | **Rp 280M** |
| **Q2** | Rp 250M | Rp 100M | Rp 40M | **Rp 390M** |
| **Q3** | Rp 300M | Rp 150M | Rp 50M | **Rp 500M** |
| **Q4** | Rp 350M | Rp 200M | Rp 60M | **Rp 610M** |
| **Total** | **Rp 1.1B** | **Rp 500M** | **Rp 180M** | **Rp 1.78B** |

**Revenue Projections:**
- Q1: Rp 10M MRR Ã— 1 month (partial) = Rp 10M
- Q2: Rp 30M MRR Ã— 3 months = Rp 90M
- Q3: Rp 70M MRR Ã— 3 months = Rp 210M
- Q4: Rp 130M MRR Ã— 3 months = Rp 390M
- **Total 2025 Revenue: Rp 700M**

**Profitability:**
- **2025: -Rp 1.08B loss** (invest for growth)
- **2026 Target: Break-even** (scale to 2,000 users, Rp 400M MRR)

---

## 9. Success Metrics (2025 Targets)

| Metric | Q1 | Q2 | Q3 | Q4 | 2025 Total |
|--------|----|----|----|----|-----------|
| **Paid Users** | 50 | 150 | 350 | 650 | **650** |
| **MRR** | Rp 10M | Rp 30M | Rp 70M | Rp 130M | **Rp 130M** |
| **Activation Rate** | 70% | 85% | 87% | 90% | **90%** |
| **7-Day Retention** | 60% | 75% | 78% | 80% | **80%** |
| **NPS** | 45 | 55 | 60 | 65 | **65** |
| **Churn Rate** | 15%/mo | 10%/mo | 8%/mo | 6%/mo | **6%/mo** |

---

## 10. Risks and Mitigation

### 10.1 Key Risks

**Risk 1: POS API Access Delays**
- **Risk:** Moka/Qasir may not grant API access (slow partnership negotiations)
- **Impact:** Auto-sync delayed from Q2 to Q3  ->  Lower activation rate
- **Mitigation:** Start Moka partnership talks in Q1 (3-month buffer)

**Risk 2: Mobile App Complexity Underestimated**
- **Risk:** PWA development takes longer than expected (Q4 delay)
- **Impact:** Miss 2025 mobile launch
- **Mitigation:** Hire mobile engineer in Q3 (not Q4)

**Risk 3: Inventory Feature Low Adoption**
- **Risk:** Users don't use inventory tracking (too complex, manual data entry)
- **Impact:** Low ROI on Q3 feature development
- **Mitigation:** Beta test with 20 users in June before full launch

**Risk 4: Competitor Copies Features**
- **Risk:** Moka/Qasir see E1's success and build auto-sync + inventory in-house
- **Impact:** Lose competitive advantage
- **Mitigation:** Build moat via superior UX, faster iteration, multi-POS support

---

## 11. Quarterly Review Process

**Review Cadence:**
- **Weekly:** Engineering standup (feature progress)
- **Monthly:** Product review (metrics vs targets, adjust priorities)
- **Quarterly:** Strategic review (roadmap pivot, resource allocation)

**Review Questions:**
1. Are we on track for quarterly goals (users, MRR, NPS)?
2. What features should be accelerated/decelerated based on user feedback?
3. What risks materialized? How do we mitigate?
4. Should we pivot roadmap based on competitive landscape?

---

**Document ID:** E1-2025-ROADMAP-v1.0
**Last Updated:** 2025-12-28
**Owner:** Product Team
**Next Review:** End of Q1 2025 (March 31, 2025)

**Related Documents:**
- [[products/03-web-dashboard-lite/business-intelligence/revenue-projections|Revenue Projections]] - Financial targets
- [[products/03-web-dashboard-lite/product-strategy/competitive-intel|Competitive Intelligence]] - Market positioning
- [[products/03-web-dashboard-lite/operations/10-post-launch-review|Post-Launch Review]] - Q1 performance

