# Product Scope - Simple P&L Tracker

**Product:** R2a - Simple P&L Tracker
**Scope Type:** Simplified Accounting Add-On
**Phase:** Pillar 2 (Retention) - Accounting Module Series

---

## What's Included

### 1. Automated Revenue Tracking

**POS Integration:**
- Import sales data from CSV (Moka, Pawoon, Qasir, OKEPOS, CIMS)
- Auto-categorize revenue streams:
 - Dine-in revenue
 - Takeaway revenue
 - Delivery revenue (GoFood, GrabFood, direct)
 - Other revenue (events, catering)

**Monthly Revenue Summary:**
- Total revenue by category
- Month-over-month comparison
- Daily average revenue
- Revenue trend (up/down %)

---

### 2. Manual Expense Tracking

**10 Expense Categories (SAK EMKM Compliant):**
1. **COGS (Cost of Goods Sold):** Ingredients, packaging, delivery fees to suppliers
2. **Labor:** Staff salaries, tips, payroll tax
3. **Rent:** Property rent, utilities deposit
4. **Utilities:** Electricity, water, gas, internet
5. **Marketing:** Ads, promotions, social media
6. **Supplies:** Cleaning supplies, utensils, uniforms
7. **Maintenance:** Repairs, equipment servicing
8. **Licenses & Permits:** Business license, health permits
9. **Professional Services:** Accountant, lawyer, consultant
10. **Other:** Miscellaneous expenses

**Quick Entry Methods:**
- **Mobile-first:** WhatsApp bot "Spent Rp 500K ingredients today"  ->  Auto-logs to COGS
- **Desktop:** Simple form "Amount, Category, Description, Date"
- **Bulk upload:** CSV template for historical expenses

---

### 3. Monthly P&L Report (SAK EMKM Format)

**Standard P&L Structure:**
```
REVENUE
 Dine-in: Rp 15,000,000
 Takeaway: Rp 8,000,000
 Delivery: Rp 5,000,000
 Other: Rp 2,000,000
 --------------------------------
 Total Revenue: Rp 30,000,000

COST OF GOODS SOLD
 Ingredients: Rp 9,000,000 (30% of revenue)
 --------------------------------
 Gross Profit: Rp 21,000,000 (70%)

OPERATING EXPENSES
 Labor: Rp 6,000,000 (20%)
 Rent: Rp 3,000,000 (10%)
 Utilities: Rp 1,500,000 (5%)
 Marketing: Rp 500,000 (1.7%)
 Supplies: Rp 300,000 (1%)
 Maintenance: Rp 200,000 (0.7%)
 Licenses: Rp 100,000 (0.3%)
 Professional: Rp 200,000 (0.7%)
 Other: Rp 200,000 (0.7%)
 --------------------------------
 Total OpEx: Rp 12,000,000 (40%)

NET PROFIT: Rp 9,000,000 (30%)
```

**Export Formats:**
- PDF (for bank loan applications, investor pitches)
- Excel (for further analysis)
- Email (auto-send to accountant monthly)

---

## What's NOT Included (By Design)

### Intentional Limitations

**[x] Full Double-Entry Accounting:**
- This is simplified P&L, not comprehensive accounting
- No balance sheet, cash flow statement (those are R2b, R2f)
- **Why:** Mikro businesses don't need complexity
- **Upgrade Path:** R2b (Cash Flow), R2f (Full Accounting)

**[x] Tax Filing Integration:**
- P&L export only, not tax calculation/filing
- **Why:** Tax rules change, regional variations, liability risk
- **Upgrade Path:** Refer to accountant (we provide data)

**[x] Inventory Tracking:**
- Expense entry is manual (not ingredient-level tracking)
- **Why:** Inventory = complex (spoilage, waste, recipes)
- **Upgrade Path:** R2c COGS/HPP Calculator (recipe costing, inventory)

**[x] Payroll Management:**
- Labor cost is lump sum, not per-staff breakdown
- **Why:** Payroll = separate domain (time tracking, tax, benefits)
- **Upgrade Path:** Use payroll software (we integrate expense only)

**[x] Invoice Generation:**
- P&L shows revenue, doesn't create invoices
- **Why:** Invoicing = separate workflow
- **Upgrade Path:** R2f Invoice Management module

**[x] Multi-Outlet Consolidation:**
- Single-outlet P&L only
- **Why:** Multi-outlet = need Full SaaS Pro (C2) with location grouping
- **Upgrade Path:** Full SaaS Pro tier (Rp 900K-1.2M/month)

---

## Pricing Strategy

### Standalone Pricing

**Rp 50-100K/Month:**
- Rp 50K: Basic (manual expense entry only)
- Rp 75K: Standard (manual + WhatsApp bot)
- Rp 100K: Premium (Standard + accountant auto-email)

**Why This Price?**
- Full accountant: Rp 3-5M/month  ->  We're 98% cheaper
- Accounting software: Rp 200-500K/month  ->  We're 50-75% cheaper
- DIY Excel: Free but 5 hours/month  ->  Your time = Rp 500K+

---

### Bundle Pricing

**With E1 Lite:**
- E1 Starter (Rp 200K) + R2a (Rp 100K) = **Rp 250K total** (Rp 50K savings)
- E1 Pro (Rp 350K) + R2a (Rp 100K) = **Rp 400K total** (Rp 50K savings)

**With A1 Template + R1 Support:**
- R1 Support (Rp 75K) + R2a (Rp 100K) = **Rp 150K total** (Rp 25K savings)

**Why Bundle?**
- Analytics (E1/A1) + Accounting (R2a) = complete business view
- Cross-product retention (harder to churn from 2 products)

---

## Technical Scope

### Data Requirements

**From POS:**
- Daily sales totals (auto-import from CSV)
- Revenue categories (dine-in, takeaway, delivery)
- Payment methods (optional, for cash vs. card split)

**From User:**
- Manual expense entries (10 categories)
- Entry frequency: At least 2Ã— per month (mid-month, month-end)

**Data Retention:**
- Unlimited historical P&L reports
- Raw expense data: 24 months online, archive after

---

### Infrastructure

**Hosting:**
- Cloud-based (not local database like E1 Lite)
- Simple backend (Node.js + PostgreSQL)
- Mobile-responsive web UI

**Integration Points:**
- POS CSV import (same logic as E1 Lite)
- WhatsApp Business API (expense bot)
- Email (monthly P&L auto-send)

**NOT Required:**
- [x] Complex accounting software integration (QuickBooks, SAP)
- [x] Bank account sync (manual is fine for Mikro)
- [x] Real-time expense tracking (monthly is sufficient)

---

## Upgrade Path Strategy

### Trigger 1: Opens 2nd Outlet
 ->  **Full SaaS Pro (C2)** - Multi-location P&L consolidation
- Rp 900K-1.2M/month (includes multi-outlet, real-time analytics)

### Trigger 2: Needs Inventory/Recipe Costing
 ->  **R2c COGS/HPP Calculator** - Rp 75-100K/month
- Add-on to R2a (bundle: Rp 150K total)
- Ingredient tracking, waste monitoring, recipe margins

### Trigger 3: Needs Cash Flow Forecast
 ->  **R2b Cash Flow Monitor** - Rp 75-100K/month
- Add-on to R2a (bundle: Rp 150K total)
- 30-90 day cash forecast, seasonal planning

### Trigger 4: Needs Invoicing (B2B Catering)
 ->  **R2f Invoice Management** - Rp 75-100K/month
- Add-on to R2a (bundle: Rp 150K total)
- Invoice generation, payment tracking

### Trigger 5: Scales to 5+ Outlets
 ->  **Full Accounting Software** - Refer to Jurnal, Accurate
- We provide P&L export, they handle tax/compliance

---

## Comparison: R2a vs Alternatives

| Feature | R2a (Rp 50-100K) | Excel (Free) | Jurnal (Rp 200K) | Full Accountant (Rp 3-5M) |
|---------|------------------|--------------|------------------|---------------------------|
| **Setup Time** | 5 min | 2 hours | 1 hour | 1 day |
| **Monthly Effort** | 10 min | 2-5 hours | 30 min | Outsourced |
| **Revenue Tracking** | [x] Auto (POS) | [x] Manual | [x] Auto | [x] Auto |
| **Expense Tracking** | [x] WhatsApp bot | [x] Manual | [x] Manual entry | [x] Receipts scanned |
| **P&L Report** | [x] SAK EMKM | [!] DIY format | [x] SAK EMKM | [x] Full audit |
| **Tax Filing** | [x] No | [x] No | [!] Limited | [x] Yes |
| **Best For** | Mikro 1-3 outlets | DIY budget | SME 3-10 outlets | Enterprise |

**Decision Guide:**
- 1 outlet, survive mode  ->  **R2a** (simple, affordable)
- 1 outlet, tight budget  ->  **Excel** (free but painful)
- 3-10 outlets, need tax  ->  **Jurnal** (full accounting)
- 10+ outlets, complex  ->  **Full accountant**

---

## Future Roadmap

### Version 1.0 (Sprint 2, Week 6)
- MVP: Manual expense entry + POS revenue import
- Monthly P&L PDF export
- Basic WhatsApp bot

### Version 1.1 (Month 3)
- Add expense photo upload (snap receipt  ->  auto-categorize)
- Email accountant auto-send
- Multi-month comparison (current vs last 3 months)

### Version 2.0 (Month 6)
- Bank account sync (optional, for cash flow visibility)
- Predictive P&L (forecast next month based on trends)
- Multi-currency (for Bali tourism restaurants)

---

## Success Metrics (Gate 2A)

**Subscription Target:**
- 20+ paying subscribers by Week 6
- Rp 1-2M MRR (20 Ã— Rp 50-100K)
- <20% Month 1 churn

**Engagement:**
- 80%+ enter expenses at least 2Ã— per month
- 90%+ generate P&L at month-end
- 70%+ export P&L (shows real usage, not just generated)

**Quality:**
- 95%+ accuracy (user-reported, compared to manual Excel)
- <5 support tickets per 20 users per month (sustainable)
- NPS 60+ (high satisfaction)

---

**Related Documents:**
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/R2a-pl-analytics|../]] - Product overview, gate criteria
- [[biz/strategy/planning/execution/01-product-roadmap|09-product-roadmap.md]] - R2a prioritization
- [[biz/strategy/market-analysis/02-market-segmentation|02-market-segmentation.md]] - Phase 1-2 personas

**Last Updated:** 2025-12-26
**Owner:** Product Lead


