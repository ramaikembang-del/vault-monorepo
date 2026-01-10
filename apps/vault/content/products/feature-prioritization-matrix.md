# Product Feature Prioritization Matrix
**Comprehensive Feature Breakdown for Sprint 1-3 Products**

**Version:** 1.0
**Date:** December 26, 2025
**Purpose:** Single source of truth for all product features before tech specs

> [!NOTE]
> **Cultural Context:** All feature prioritization incorporates Indonesian market realities from [[biz/strategy/market-analysis/03-cultural-context|03-cultural-context.md]]:
> - P0 features must include cultural adaptations (WhatsApp, offline-first, neutral language)
> - Features exposing success (leaderboards) are deprioritized or made opt-in
> - Privacy and trust features are elevated to P0/P1

---

## Priority Definitions

| Priority | Label | Definition | Sprint Inclusion |
|----------|-------|------------|------------------|
| **P0** | Must Have | Product doesn't work without it; core functionality | Always included |
| **P1** | Should Have | High user value; important for adoption | Included if time allows |
| **P2** | Nice to Have | Enhances experience; can ship without it | Phase 2+ |
| **P3** | Future | Roadmap items; not for current sprint | Backlog only |

---

# Sprint 1 Products

---

## A1: Power BI Template

**Product Type:** One-time purchase (Rp 2-7M)
**Target Persona:** Tech-savvy multi-outlet owners (Phase 2-3)
**Sprint:** 1 (Week 1-2)
**Status:** 50% complete

### Feature Categories

#### P0: Must Have (Core Dashboard)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A1-P0-01 | **Revenue Dashboard** | Daily/weekly/monthly revenue visualization | Shows total, trend line, comparison |
| A1-P0-02 | **Sales Breakdown** | Revenue by menu item, category, time | Top 10 items, pie chart, heatmap |
| A1-P0-03 | **Food Cost % Display** | Ingredient cost as % of revenue | Real-time calculation, color-coded |
| A1-P0-04 | **Staff Performance Tab** | Per-staff sales, shifts, efficiency | Ranking, comparison view |
| A1-P0-05 | **Date Range Filter** | Filter all views by date | Presets: Today, Week, Month, Custom |
| A1-P0-06 | **Multi-Outlet Filter** | Filter by outlet (if applicable) | Dropdown, all/single selection |
| A1-P0-07 | **CSV Data Import** | Import data from POS exports | Sample file included, auto-mapping |

#### P1: Should Have (Premium Value)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A1-P1-01 | **BCG Matrix View** | Menu item quadrant analysis | Star/Cash Cow/Question/Dog |
| A1-P1-02 | **Profit Margin Analysis** | Margin by item, trend over time | Shows top/bottom 5 margin items |
| A1-P1-03 | **Peak Hours Heatmap** | Sales by hour/day visualization | Color-coded grid |
| A1-P1-04 | **Customer Count Trend** | Transaction count analysis | Line chart + comparison |
| A1-P1-05 | **Bahasa Indonesia Labels** | All UI text in Bahasa | 100% translated |

#### P2: Nice to Have (Enhancements)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A1-P2-01 | **PDF Export** | Export dashboard to PDF | One-click, formatted output |
| A1-P2-02 | **Dark Mode Theme** | Alternative color scheme | Toggle in settings |
| A1-P2-03 | **Mobile Layout** | Responsive mobile view | Touch-friendly elements |

#### P3: Future (Backlog)

| ID | Feature | Description |
|----|---------|-------------|
| A1-P3-01 | **API Connection** | Direct POS API instead of CSV |
| A1-P3-02 | **Multi-outlet Comparison** | Side-by-side outlet analysis |
| A1-P3-03 | **Forecasting Module** | AI-powered sales predictions |

---

## R1: Template Support

**Product Type:** Subscription (Rp 75K/month)
**Target Persona:** Template buyers needing ongoing help
**Sprint:** 1 (Week 2)
**Status:** Not started

### Feature Categories

#### P0: Must Have (Core Support)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| R1-P0-01 | **WhatsApp Support Channel** | Direct WhatsApp for questions | Response <24hr business hours |
| R1-P0-02 | **Monthly Template Updates** | Bug fixes, minor improvements | Changelog included |
| R1-P0-03 | **Google Drive Access** | Shared folder for deliverables | Organized folder structure |
| R1-P0-04 | **Onboarding Email** | Welcome + setup instructions | Sent within 24hr of purchase |

#### P1: Should Have (Value-Add)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| R1-P1-01 | **Video Walkthrough** | Setup tutorial video | <10 min, Bahasa Indonesia |
| R1-P1-02 | **FAQ Document** | Common questions answered | 10+ FAQs covered |
| R1-P1-03 | **First Month Free** | Trial period for subscribers | Auto-bill month 2 |

#### P2: Nice to Have

| ID | Feature | Description |
|----|---------|-------------|
| R1-P2-01 | **Priority Support Queue** | Faster response for subscribers |
| R1-P2-02 | **Monthly Office Hours** | Live Q&A session (group) |

---

## E1: Web Dashboard Lite (Phase 1)

**Product Type:** Freemium (Free MVP)
**Target Persona:** Mikro F&B owners (Phase 1)
**Sprint:** 1 (Week 1-4)
**Status:** Not started
**Full Spec:** [[products/03-web-dashboard-lite/specifications/02-feature-specification|feature-specification.md]]

### Feature Categories

#### P0: Must Have (Core MVP - 6 Features)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| E1-P0-01 | **Offline-First Architecture** | Electron app with local SQLite | Full functionality without internet |
| E1-P0-02 | **Login/Security** | Simple PIN or password | Local auth, no cloud required |
| E1-P0-03 | **CSV Import** | Import POS sales data | Column auto-mapping, error handling |
| E1-P0-04 | **Smart Defaults** | Auto-calculate targets | Based on first 7 days data |
| E1-P0-05 | **Revenue Dashboard** | Basic 2-number display | Today's revenue + vs target |
| E1-P0-06 | **Staff Performance Overview** | Shift comparison (neutral) | No rankings; comparative only |
| E1-P0-07 | **1-Screen Onboarding** | Quick setup flow | <3 min to first insight |

#### P1: Should Have (30 Base Metrics - Tab 1: Financial Health)

| ID | Feature | Description | Formula/Benchmark |
|----|---------|-------------|-------------------|
| E1-P1-01 | **Total Revenue** | MTD, YTD revenue | SUM(transaction_amount) |
| E1-P1-02 | **Gross Profit** | Revenue - COGS | Revenue - Food Cost |
| E1-P1-03 | **Profit Margin %** | Gross Profit / Revenue | Target: 30-40% |
| E1-P1-04 | **Prime Cost %** | (COGS + Labor) / Revenue | Healthy: 55-65% |
| E1-P1-05 | **Food Cost %** | Food COGS / Revenue | Target: 28-32% |
| E1-P1-06 | **Beverage Cost %** | Beverage COGS / Revenue | Target: 20-25% |
| E1-P1-07 | **Labor Cost %** | Staff wages / Revenue | Target: 25-30% |
| E1-P1-08 | **Revenue vs Target** | Actual vs monthly goal | Color-coded (green/red) |
| E1-P1-09 | **Avg Transaction Value** | Revenue / Transaction count | Trend line |
| E1-P1-10 | **Cash Position** | Simple in/out tracking | Running balance |

#### P1: Should Have (30 Base Metrics - Tab 2: Product Performance)

| ID | Feature | Description | Output |
|----|---------|-------------|--------|
| E1-P1-11 | **Top 5 Sellers** | By revenue | Bar chart |
| E1-P1-12 | **Bottom 5 Sellers** | By revenue | Bar chart |
| E1-P1-13 | **Menu Item Profit Margin** | By item | Table |
| E1-P1-14 | **BCG Matrix - Stars** | High growth, high revenue | Quadrant chart |
| E1-P1-15 | **BCG Matrix - Cash Cows** | Low growth, high revenue | Quadrant chart |
| E1-P1-16 | **BCG Matrix - Dogs** | Low growth, low revenue | Quadrant chart |
| E1-P1-17 | **BCG Matrix - Question Marks** | High growth, low revenue | Quadrant chart |
| E1-P1-18 | **Category Mix** | Food vs Beverage vs Dessert % | Pie chart |
| E1-P1-19 | **Items Sold Count** | Units per item | Table |
| E1-P1-20 | **Revenue per Menu Category** | By category | Bar chart |

#### P1: Should Have (30 Base Metrics - Tab 3: Operations & Staff)

| ID | Feature | Description | Output |
|----|---------|-------------|--------|
| E1-P1-21 | **Peak Hours Heatmap** | Revenue by hour, Mon-Sun | Heatmap grid |
| E1-P1-22 | **Customer Intensity** | Transactions per hour | Line chart |
| E1-P1-23 | **Avg Service Duration** | Time per transaction | Single number |
| E1-P1-24 | **Staff Sales Per Hour** | By employee | Table (not ranked) |
| E1-P1-25 | **Staff Attendance Rate** | On-time vs late | Percentage |
| E1-P1-26 | **Shift Coverage** | Staffed hours vs open hours | Percentage |
| E1-P1-27 | **Week-over-Week Revenue** | Trend line | Line chart |
| E1-P1-28 | **Daily Revenue Comparison** | Today vs avg | Single number |
| E1-P1-29 | **Transaction Count** | Total transactions | Single number |
| E1-P1-30 | **Repeat Customer Rate** | Returning transactions % | Percentage |

#### P0: Core System Features

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| E1-P0-08 | **Health Score (0-100)** | Composite business health | Profitability (30) + Growth (25) + Staff (25) + Customer (20) |
| E1-P0-09 | **5 Pre-defined Alerts** | Basic alert rules | Cash, Prime Cost, Revenue, Staff, Menu alerts |
| E1-P0-10 | **Bahasa Indonesia UI** | 100% translated | No English text visible |
| E1-P0-11 | **Data Export** | Export to CSV/Excel | One-click export |
| E1-P0-12 | **Help Tooltips** | Contextual help | ? icons with explanations |

#### P2: Nice to Have (Future/Phase 2)

| ID | Feature | Description |
|----|---------|-------------|
| E1-P2-01 | **PDF Export** | Bank-ready reports |
| E1-P2-02 | **Dark Mode** | Theme toggle |
| E1-P2-03 | **WhatsApp Share** | Share screenshot |
| E1-P2-04 | **Custom Alerts** | User-defined rules |
| E1-P2-05 | **Multi-device Sync** | Cloud sync (optional) |

### Cultural Adaptations (P0)

| ID | Adaptation | Rationale |
|----|------------|-----------|
| E1-C-01 | **No public leaderboards** | Ewuh Pakewuh  -  avoid staff shame |
| E1-C-02 | **Neutral alert language** | "Sistem mendeteksi..." not "Anda salah..." |
| E1-C-03 | **Offline-first = trust** | Data privacy messaging |
| E1-C-04 | **No mandatory cloud** | Phase 1 personas distrust cloud |
| E1-C-05 | **Protection messaging** | "Lindungi bisnis Anda" framing |

### Data Requirements

| Data Source | Fields Required | Import Method |
|-------------|-----------------|---------------|
| **Sales CSV** | transaction_id, date, time, product_name, quantity, unit_price, total_amount, staff_id, payment_method | Daily CSV import |
| **Staff CSV** (optional) | staff_id, name, clock_in, clock_out, date | Manual or CSV |
| **Product CSV** (for COGS) | product_id, product_name, cost_price, category | One-time setup |

---

# Sprint 2 Products

---

## E1-P2: Web Dashboard Lite (Phase 2 + Paid)

**Product Type:** Freemium + Paid tiers (Rp 200-350K/mo)
**Target Persona:** Engaged Mikro owners ready to pay
**Sprint:** 2 (Week 5-8)
**Status:** Depends on E1-P1 completion

### Free Tier Features (6 from Phase 1)

| ID | Feature | Tier |
|----|---------|------|
| E1-P0-01 to E1-P0-07 | Phase 1 MVP features | Free |

### Paid Tier Features (Starter: Rp 200K/mo)

#### P0: Must Have for Paid

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| E1P2-P0-01 | **Food Cost % Calculator** | Ingredient cost tracking | Daily/weekly food cost % |
| E1P2-P0-02 | **Daily P&L Summary** | Profit/loss visualization | Green/red daily indicator |
| E1P2-P0-03 | **7-Day Trend Charts** | Revenue, cost, profit trends | Interactive line charts |
| E1P2-P0-04 | **PDF Export** | Generate printable reports | Bank-ready format |
| E1P2-P0-05 | **Multi-device Access** | Same data on phone + laptop | Sync mechanism required |
| E1P2-P0-06 | **Payment Integration** | Collect subscription payments | Midtrans or manual transfer |

#### P1: Should Have (Pro: Rp 350K/mo only)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| E1P2-P1-01 | **WhatsApp Daily Alert** | Morning summary notification | Via WhatsApp Business API |
| E1P2-P1-02 | **Staff Efficiency Score** | Performance metric (neutral framing) | "Shift performance" not ranking |
| E1P2-P1-03 | **Benchmarking (opt-in)** | Compare to industry peers | Explicit opt-in required |
| E1P2-P1-04 | **3 User Accounts** | Team access | Role: Admin, Viewer |

#### P2: Nice to Have

| ID | Feature | Description |
|----|---------|-------------|
| E1P2-P2-01 | **Goal Setting** | User-defined targets |
| E1P2-P2-02 | **Custom Dashboard** | Rearrange widgets |
| E1P2-P2-03 | **Dark Mode** | Theme toggle |

### Upgrade Triggers (Intentional Limitations)

| Free Limitation | Upgrade Prompt |
|-----------------|----------------|
| No food cost tracking | "Upgrade untuk lihat Food Cost %" |
| No P&L summary | "Lihat profit Anda dengan Starter" |
| No PDF export | "Download PDF dengan upgrade" |
| 1 device only | "Akses di semua perangkat" |

---

## R2c: HPP/COGS Calculator

**Product Type:** Standalone micro-tool (Rp 50-75K/mo)
**Target Persona:** Mikro owners managing food costs
**Sprint:** 2 (Week 5-6)
**Status:** Not started

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| R2c-P0-01 | **Ingredient Cost Input** | Daily ingredient expenses | Category-based entry |
| R2c-P0-02 | **Revenue Input** | Daily sales total | Manual or CSV import |
| R2c-P0-03 | **Food Cost % Display** | (Ingredient Cost / Revenue) Ã— 100 | Daily, weekly, monthly |
| R2c-P0-04 | **Target Setting** | Set target food cost % | Default: 30-35% |
| R2c-P0-05 | **Alert System** | Notify if >target | Neutral language |
| R2c-P0-06 | **Offline-First** | Works without internet | Local storage |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| R2c-P1-01 | **Per-Item Breakdown** | Food cost by menu item | Top 10 highest cost items |
| R2c-P1-02 | **Trend Chart** | Food cost % over time | 30-day line chart |
| R2c-P1-03 | **WhatsApp Export** | Share daily report | One-click share |

#### P2: Nice to Have

| ID | Feature | Description |
|----|---------|-------------|
| R2c-P2-01 | **Recipe Costing** | Calculate cost per dish |
| R2c-P2-02 | **Supplier Price Tracking** | Compare supplier prices |
| R2c-P2-03 | **Inventory Integration** | Link to stock levels |

---

## R2a: Simple P&L Tracker

**Product Type:** Standalone micro-tool (Rp 50K/mo or bundled)
**Target Persona:** Mikro owners needing basic accounting
**Sprint:** 2 (Week 5-6)
**Status:** Not started

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| R2a-P0-01 | **Income Entry** | Record daily sales | Manual + CSV import |
| R2a-P0-02 | **Expense Entry** | Record daily expenses | Categorized (Bahan, Gaji, Sewa, dll) |
| R2a-P0-03 | **Daily P&L Display** | Income - Expenses | Color-coded profit/loss |
| R2a-P0-04 | **Monthly Summary** | Aggregate monthly view | Total income, expense, profit |
| R2a-P0-05 | **Margin % Display** | Profit margin percentage | Auto-calculated |
| R2a-P0-06 | **Offline-First** | Works without internet | Local storage |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| R2a-P1-01 | **Weekly Summary** | 7-day aggregation | Chart + numbers |
| R2a-P1-02 | **Expense Categories** | Customizable categories | Default Indonesian categories |
| R2a-P1-03 | **PDF Export** | Bank-ready report | Simple format |

#### P2: Nice to Have

| ID | Feature | Description |
|----|---------|-------------|
| R2a-P2-01 | **Year-over-Year Comparison** | This month vs last year |
| R2a-P2-02 | **Budget Setting** | Set expense budgets |
| R2a-P2-03 | **Multi-outlet** | Separate P&L per outlet |

---

# Sprint 3 Products

---

## C1: Full SaaS Basic

**Product Type:** Cloud subscription (Rp 300-500K/mo)
**Target Persona:** Phase 2 Mikro -> Kecil (Amanda, Budi 2.0)
**Sprint:** 3 (Week 9-16)
**Status:** Not started

### Feature Categories

#### P0: Must Have (Core Platform)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| C1-P0-01 | **Cloud Authentication** | Email + password login | Magic link option |
| C1-P0-02 | **Multi-device Sync** | Real-time data sync | Instant across devices |
| C1-P0-03 | **Revenue Dashboard** | Daily/weekly/monthly | Enhanced from Lite |
| C1-P0-04 | **Staff Performance** | Shift comparison (neutral) | No public ranking |
| C1-P0-05 | **Food Cost % Tracking** | Integrated from R2c | Per-item breakdown |
| C1-P0-06 | **P&L Summary** | Integrated from R2a | Daily/weekly/monthly |
| C1-P0-07 | **Cash Flow Display** | Integrated from R2b | Running balance |
| C1-P0-08 | **Invoice Generator** | Integrated from R2f | WhatsApp share |
| C1-P0-09 | **PDF/Excel Export** | Bank-ready reports | One-click |
| C1-P0-10 | **WhatsApp Alerts** | Daily summary | Pre-approved templates |
| C1-P0-11 | **30-Day Trial** | No payment required | Full feature access |
| C1-P0-12 | **Bahasa Indonesia UI** | 100% translated | No English |

#### P1: Should Have (Differentiation)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| C1-P1-01 | **Team Access (3 users)** | Multi-user with roles | Admin, Manager, Viewer |
| C1-P1-02 | **Automated Daily Backup** | Never lose data | Visible backup status |
| C1-P1-03 | **Benchmarking (opt-in)** | Industry comparison | Explicit opt-in |
| C1-P1-04 | **Lite  ->  SaaS Migration** | Import Lite data | One-click migration |
| C1-P1-05 | **Offline Mode** | Works offline temporarily | Sync when online |

#### P2: Nice to Have

| ID | Feature | Description |
|----|---------|-------------|
| C1-P2-01 | **Custom Dashboard** | Rearrange widgets |
| C1-P2-02 | **Goal Tracking** | User-defined targets |
| C1-P2-03 | **Notification Preferences** | Customize alerts |
| C1-P2-04 | **Dark Mode** | Theme toggle |

#### P3: Future (Pro Tier)

| ID | Feature | Description |
|----|---------|-------------|
| C1-P3-01 | **Multi-outlet Support** | 2+ outlets |
| C1-P3-02 | **Real-time Data Refresh** | Hourly updates |
| C1-P3-03 | **Advanced Forecasting** | AI predictions |
| C1-P3-04 | **POS Integration** | Direct API connection |

---

## R2b: Cash Flow Monitor

**Product Type:** Standalone or bundled (Rp 50K/mo)
**Target Persona:** Mikro owners managing cash
**Sprint:** 3 (Week 9-10)
**Status:** Not started

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| R2b-P0-01 | **Cash In Entry** | Daily sales/income | Manual + import |
| R2b-P0-02 | **Cash Out Entry** | Daily expenses/withdrawals | Categorized |
| R2b-P0-03 | **Running Balance** | Current cash available | Real-time calculation |
| R2b-P0-04 | **Daily View** | Cash flow per day | In/Out/Balance table |
| R2b-P0-05 | **Low Cash Alert** | Warn when balance low | Configurable threshold |
| R2b-P0-06 | **Offline-First** | Works without internet | Local storage |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| R2b-P1-01 | **7-Day Projection** | Estimate future balance | Based on patterns |
| R2b-P1-02 | **Weekly Summary** | Cash flow by week | Chart + numbers |
| R2b-P1-03 | **WhatsApp Export** | Share daily summary | One-click |

---

## R2f: Invoice Management

**Product Type:** Standalone or bundled (Rp 50K/mo)
**Target Persona:** Mikro owners dealing with suppliers/B2B
**Sprint:** 3 (Week 10-12)
**Status:** Not started

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| R2f-P0-01 | **Invoice Creation** | Simple invoice form | Logo, items, total |
| R2f-P0-02 | **WhatsApp Share** | Send via WhatsApp | One-click share |
| R2f-P0-03 | **PDF Download** | Printable invoice | Professional format |
| R2f-P0-04 | **Invoice List** | View all invoices | Filter: Paid/Unpaid |
| R2f-P0-05 | **Mark as Paid** | Update payment status | Simple toggle |
| R2f-P0-06 | **Offline-First** | Works without internet | Local storage |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| R2f-P1-01 | **Overdue Alert** | Notify unpaid invoices | Soft reminder language |
| R2f-P1-02 | **Monthly Summary** | Total invoiced/received | Chart + numbers |
| R2f-P1-03 | **Customer Directory** | Save frequent customers | Auto-complete |

#### P2: Nice to Have

| ID | Feature | Description |
|----|---------|-------------|
| R2f-P2-01 | **Recurring Invoices** | Auto-generate monthly |
| R2f-P2-02 | **Partial Payment** | Track partial payments |
| R2f-P2-03 | **Integration with R2b** | Auto-update cash flow |

---

# Sprint 4 Products

---

## C2: Full SaaS Pro

**Product Type:** Cloud subscription (Rp 900K-1.2M/mo)
**Target Persona:** Phase 2-3 multi-outlet owners (2-5 locations)
**Sprint:** 4
**Status:** Not started

### Feature Categories

#### P0: Must Have (All C1 Features + Multi-Outlet)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| C2-P0-01 | **All C1 Basic Features** | Everything in Basic tier | 12 features inherited |
| C2-P0-02 | **Multi-Outlet Support (2-5)** | Manage 2-5 outlets | Per-outlet + consolidated views |
| C2-P0-03 | **Cross-Location Dashboard** | Compare outlets side-by-side | Performance ranking (internal) |
| C2-P0-04 | **Consolidated Reporting** | All outlets in one report | PDF export per outlet + combined |
| C2-P0-05 | **Real-time Data Refresh** | Hourly updates | Not just daily |
| C2-P0-06 | **5 User Accounts** | Team access across locations | Roles: Owner, Manager, Staff |
| C2-P0-07 | **60 Metrics Total** | Base 30 + Professional Pack (30) | Unlocked via tier |

#### P1: Should Have (Pro Value-Add)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| C2-P1-01 | **Outlet Comparison Report** | Weekly auto-generated | Email + WhatsApp delivery |
| C2-P1-02 | **Peak Hours by Location** | Heatmap per outlet | Side-by-side comparison |
| C2-P1-03 | **Staff Transfer Analysis** | Track staff moving between outlets | Performance continuity |
| C2-P1-04 | **Priority Support (4hr SLA)** | Faster response | WhatsApp priority queue |
| C2-P1-05 | **Monthly Video Call with CSM** | Customer success check-in | 30 min/month |

#### P2: Nice to Have

| ID | Feature | Description |
|----|---------|-------------|
| C2-P2-01 | **API Access (Read)** | Export data via API |
| C2-P2-02 | **Custom Branding** | Logo on reports |
| C2-P2-03 | **Scheduled Reports** | Auto-send weekly/monthly |

---

## A4a: Staff Scheduling (Micro-SaaS)

**Product Type:** Standalone micro-tool (Rp 50K/mo)
**Target Persona:** Mikro owners with 3+ staff
**Sprint:** 4
**Status:** Not started

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A4a-P0-01 | **Shift Calendar** | Weekly/monthly view | Drag-drop scheduling |
| A4a-P0-02 | **Staff Directory** | Basic staff profiles | Name, contact, role |
| A4a-P0-03 | **Shift Assignment** | Assign staff to shifts | Conflict detection |
| A4a-P0-04 | **WhatsApp Notification** | Send schedule to staff | One-click share |
| A4a-P0-05 | **Attendance Tracking** | Clock in/out | Manual entry |
| A4a-P0-06 | **Offline-First** | Works without internet | Local storage |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A4a-P1-01 | **Shift Swap Requests** | Staff can request swaps | Manager approval workflow |
| A4a-P1-02 | **Overtime Calculation** | Hours beyond schedule | Auto-calc based on rules |
| A4a-P1-03 | **Weekly Hours Summary** | Per-staff totals | Exportable |

#### P2: Nice to Have

| ID | Feature | Description |
|----|---------|-------------|
| A4a-P2-01 | **Labor Cost Forecast** | Predict wage costs |
| A4a-P2-02 | **Integration with C1/C2** | Sync staff data |
| A4a-P2-03 | **Break Management** | Track break times |

---

## A4c: Loyalty Builder (Micro-SaaS)

**Product Type:** Standalone micro-tool (Rp 75K/mo)
**Target Persona:** Mikro owners wanting repeat customers
**Sprint:** 4
**Status:** Not started

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A4c-P0-01 | **Customer Registry** | Basic customer profiles | Phone number, name |
| A4c-P0-02 | **Points System** | Rp 10K = 1 point (configurable) | Auto-calculation |
| A4c-P0-03 | **Reward Redemption** | Points  ->  rewards | Configurable rewards |
| A4c-P0-04 | **Transaction Logging** | Record purchases | Manual entry |
| A4c-P0-05 | **WhatsApp Points Update** | Notify customer of balance | One-click send |
| A4c-P0-06 | **Offline-First** | Works without internet | Local storage |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A4c-P1-01 | **VIP Tier System** | Bronze/Silver/Gold | Based on total points |
| A4c-P1-02 | **Birthday Rewards** | Auto-notify on birthdays | WhatsApp message |
| A4c-P1-03 | **Repeat Customer Report** | Top 10 customers | Monthly summary |

#### P2: Nice to Have

| ID | Feature | Description |
|----|---------|-------------|
| A4c-P2-01 | **Referral Program** | Points for referrals |
| A4c-P2-02 | **Digital Stamp Card** | Visual stamp interface |
| A4c-P2-03 | **Integration with C1/C2** | Sync customer data |

---

## A2: Pay-Per-Insight

**Product Type:** Transactional (Rp 10-20K per report)
**Target Persona:** Phase 1 Mikro testing analytics
**Sprint:** 4
**Status:** Not started

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A2-P0-01 | **Single Report Purchase** | Buy one report at a time | No subscription required |
| A2-P0-02 | **CSV Upload** | Upload sales data | Simple column mapping |
| A2-P0-03 | **Report Generation** | Create analysis from data | Pre-built templates |
| A2-P0-04 | **PDF Download** | Download generated report | Professional format |
| A2-P0-05 | **Payment Integration** | One-time payment | Midtrans/OVO/GoPay |
| A2-P0-06 | **WhatsApp Delivery** | Send report via WhatsApp | One-click share |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A2-P1-01 | **Report Templates** | 5-10 pre-built analyses | Revenue, Cost, Staff, Menu, Peak Hours |
| A2-P1-02 | **Report History** | View past purchases | Account-based |
| A2-P1-03 | **Bundle Discount** | Buy 5 get 1 free | Auto-applied |

#### Report Types Available

| Report | Price | Description |
|--------|-------|-------------|
| **Revenue Summary** | Rp 10K | Daily/weekly/monthly revenue |
| **Food Cost Analysis** | Rp 15K | Food cost % breakdown |
| **Peak Hours Report** | Rp 10K | Best hours heatmap |
| **Menu Performance** | Rp 15K | Top/bottom sellers |
| **Staff Efficiency** | Rp 20K | Sales per staff |

---

# Sprint 5 Products

---

## C3: Full SaaS Advanced

**Product Type:** Cloud subscription (Rp 2-3.5M/mo)
**Target Persona:** Phase 3-4 scaling chains (5-15 outlets)
**Sprint:** 5
**Status:** Not started

### Feature Categories

#### P0: Must Have (All C2 Features + Enterprise-lite)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| C3-P0-01 | **All C2 Pro Features** | Everything in Pro tier | All features inherited |
| C3-P0-02 | **5-15 Outlet Support** | Manage larger chains | Scalable infrastructure |
| C3-P0-03 | **POS Integration** | Direct API to Moka, Pawoon, Qasir | Auto-sync sales data |
| C3-P0-04 | **10 User Accounts** | Larger team access | Role-based permissions |
| C3-P0-05 | **120 Metrics Total** | Base + Professional + Advanced packs | 90 additional metrics |
| C3-P0-06 | **Dedicated Account Manager** | Named contact | Quarterly business reviews |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| C3-P1-01 | **Forecasting Module** | Predict next 30-90 days | AI-powered |
| C3-P1-02 | **Anomaly Detection** | Alert unusual patterns | Auto-notify |
| C3-P1-03 | **Custom Report Builder** | Build own reports | Drag-drop interface |
| C3-P1-04 | **API Access (Full)** | Read + Write API | Documentation included |

#### P2: Nice to Have

| ID | Feature | Description |
|----|---------|-------------|
| C3-P2-01 | **White-label Option** | Custom branding |
| C3-P2-02 | **SSO Integration** | Single sign-on |
| C3-P2-03 | **Audit Log** | Track all user actions |

---

## A4b: Menu Engineering (Micro-SaaS)

**Product Type:** Standalone micro-tool (Rp 30K/mo)
**Target Persona:** Mikro owners optimizing menu
**Sprint:** 5
**Status:** Not started

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A4b-P0-01 | **Menu Item List** | Add all menu items | Name, price, cost |
| A4b-P0-02 | **Sales Data Input** | Units sold per item | Manual or CSV |
| A4b-P0-03 | **BCG Matrix View** | Star/Cash Cow/Dog/Question Mark | Visual quadrant |
| A4b-P0-04 | **Profit Margin Display** | Per-item margin | Color-coded |
| A4b-P0-05 | **Recommendation Engine** | What to promote/remove | Simple suggestions |
| A4b-P0-06 | **Offline-First** | Works without internet | Local storage |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A4b-P1-01 | **Category Analysis** | Food vs Beverage performance | Category-level BCG |
| A4b-P1-02 | **Menu Optimization Score** | 0-100 rating | Based on star/dog ratio |
| A4b-P1-03 | **WhatsApp Report** | Share menu analysis | One-click |

---

## A4d: Supplier Tracker (Micro-SaaS)

**Product Type:** Standalone micro-tool (Rp 40K/mo)
**Target Persona:** Mikro owners managing multiple suppliers
**Sprint:** 5
**Status:** Not started

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A4d-P0-01 | **Supplier Directory** | Name, contact, items | Basic CRM |
| A4d-P0-02 | **Order History** | What ordered, when, price | Manual entry |
| A4d-P0-03 | **Price Comparison** | Compare suppliers for same item | Side-by-side |
| A4d-P0-04 | **Reorder Reminder** | Alert when stock low | Configurable threshold |
| A4d-P0-05 | **WhatsApp Order** | Send order via WhatsApp | Pre-filled template |
| A4d-P0-06 | **Offline-First** | Works without internet | Local storage |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A4d-P1-01 | **Delivery Tracking** | Mark orders received | Date/time stamp |
| A4d-P1-02 | **Payment Status** | Paid/Unpaid tracking | Simple toggle |
| A4d-P1-03 | **Monthly Supplier Spend** | Total by supplier | Summary report |

---

## E2: Hosted Power BI

**Product Type:** Managed hosting (Rp 150-250K/mo)
**Target Persona:** Template buyers wanting cloud access
**Sprint:** 5
**Status:** Not started

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| E2-P0-01 | **Cloud Hosting** | Power BI template on cloud | Web accessible |
| E2-P0-02 | **Automatic Data Refresh** | Daily sync from POS | Scheduled refresh |
| E2-P0-03 | **Multi-device Access** | View from any device | Responsive |
| E2-P0-04 | **User Authentication** | Secure login | Email + password |
| E2-P0-05 | **Read-only Dashboard** | View, not edit | Template locked |
| E2-P0-06 | **WhatsApp Support** | Help channel | Response <24hr |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| E2-P1-01 | **Multiple Users (3)** | Share access | View-only roles |
| E2-P1-02 | **Scheduled Email Reports** | Weekly digest | Auto-send |
| E2-P1-03 | **Data Backup** | 30-day retention | Downloadable |

---

# Sprint 6+ Products

---

## C4: Full SaaS Enterprise

**Product Type:** Cloud subscription (Rp 8M+/mo)
**Target Persona:** Phase 4-5 large chains (15-100+ outlets)
**Sprint:** 6+
**Status:** Backlog

### Feature Categories

#### P0: Must Have (All C3 Features + Custom)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| C4-P0-01 | **All C3 Advanced Features** | Everything in Advanced tier | All features inherited |
| C4-P0-02 | **15-100+ Outlet Support** | Large chain scale | Enterprise infrastructure |
| C4-P0-03 | **Custom Development** | Tailored features | Project-based scoping |
| C4-P0-04 | **Unlimited Users** | No cap on team access | Enterprise SSO |
| C4-P0-05 | **150 Metrics (All)** | Complete metric catalog | Full access |
| C4-P0-06 | **Dedicated Support Team** | Named engineer | 2hr SLA |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| C4-P1-01 | **White-label Platform** | Full custom branding | No Clario branding |
| C4-P1-02 | **Custom Integrations** | Connect any system | Development included |
| C4-P1-03 | **On-site Training** | In-person training | Per-quota |
| C4-P1-04 | **SLA Agreement** | Guaranteed uptime | 99.9% SLA |

---

## D1: Industry Reports

**Product Type:** Premium reports (Rp 500K-1M per report)
**Target Persona:** CFOs, investors, consultants (Phase 4-5)
**Sprint:** 6+ (BLOCKED until data moat)
**Status:** Backlog

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| D1-P0-01 | **Aggregated Industry Data** | Anonymous benchmarks | From active users |
| D1-P0-02 | **Report Templates** | Pre-built industry analyses | 5-10 report types |
| D1-P0-03 | **PDF Generation** | Professional format | Investor-ready |
| D1-P0-04 | **Custom Report Request** | Tailored analysis | Project-based |
| D1-P0-05 | **Subscription Option** | Monthly access | Cheaper than per-report |

#### Report Types Available

| Report | Price | Description |
|--------|-------|-------------|
| **Industry Benchmark Report** | Rp 500K | Average metrics by segment |
| **Regional Analysis** | Rp 750K | Metro vs Tier 2 vs Tier 3 |
| **Seasonal Trends** | Rp 500K | Monthly/seasonal patterns |
| **Menu Category Performance** | Rp 750K | Best-performing categories |
| **Custom Deep-Dive** | Rp 1M+ | Tailored research |

---

## A4e: Waste Tracking (Micro-SaaS)

**Product Type:** Standalone micro-tool (Rp 25K/mo)
**Target Persona:** Mikro owners reducing waste
**Sprint:** 6+
**Status:** Backlog

### Feature Categories

#### P0: Must Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A4e-P0-01 | **Waste Entry** | Log wasted items | Item, quantity, reason |
| A4e-P0-02 | **Waste Categories** | Expired, damaged, overproduction | Configurable |
| A4e-P0-03 | **Waste Value Calculation** | Cost of waste | Based on item cost |
| A4e-P0-04 | **Daily Summary** | Total waste today | Single number + trend |
| A4e-P0-05 | **Weekly Report** | Waste by category | Chart breakdown |
| A4e-P0-06 | **Offline-First** | Works without internet | Local storage |

#### P1: Should Have

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| A4e-P1-01 | **Waste Reduction Goals** | Target % reduction | Track progress |
| A4e-P1-02 | **Top Wasted Items** | Most commonly wasted | Top 5 list |
| A4e-P1-03 | **WhatsApp Alert** | Notify if waste spikes | Configurable threshold |

---

# Cross-Product Dependencies

## Shared Components

| Component | Used By | Build Once |
|-----------|---------|------------|
| **Offline Storage Layer** | E1, R2a, R2b, R2c, R2f | Sprint 1 |
| **CSV Import Module** | A1, E1, R2a, R2c | Sprint 1 |
| **Food Cost % Calculation** | E1-P2, R2c, C1 | Sprint 2 |
| **P&L Calculation** | R2a, E1-P2, C1 | Sprint 2 |
| **WhatsApp Share** | E1-P2, R2c, R2a, R2b, R2f, C1 | Sprint 2 |
| **PDF Export** | A1, E1-P2, R2a, R2f, C1 | Sprint 2 |
| **Cloud Auth** | C1 only | Sprint 3 |
| **Real-time Sync** | C1 only | Sprint 3 |

## Migration Paths

| From | To | Migration Method |
|------|----| ----------------|
| E1 (Free) | E1 (Paid) | Feature unlock (same app) |
| E1 (Paid) | C1 (SaaS) | Data export/import |
| R2c/R2a | C1 (SaaS) | Data integration |

---

# Next Steps

1. ⬜ Review and approve this feature matrix
2. ⬜ Create tech specs for Sprint 1 products
3. ⬜ Build shared components first (Offline Storage, CSV Import)
4. ⬜ Proceed with individual product development

---

**Last Updated:** December 26, 2025
**Status:** Draft for review
**Owner:** Product team

