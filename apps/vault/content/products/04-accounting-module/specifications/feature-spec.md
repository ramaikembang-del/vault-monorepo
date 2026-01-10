# Product 04 - Accounting Module Feature Specifications
**Product Family:** R2 Accounting Tools (R2a P&L, R2b Cash Flow, R2c COGS)  
**Status:** Specification - Consolidated from variants  
**Last Updated:** January 9, 2026

---

## Overview

This document consolidates feature specifications across the R2 product variants under Product 04 (Accounting Module).

**Product Variants:**
- **R2a:** P&L Analytics Tool
- **R2b:** Cash Flow Monitor
- **R2c:** COGS Calculator

**For detailed variant-specific features, see:**
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/specifications/feature-spec|R2a Feature Spec]]
- [[products/04-accounting-module/product-variants/R2b-cash-flow/specifications/feature-spec|R2b Feature Spec]]
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/specifications/feature-spec|R2c Feature Spec]]

---

## Common Features Across R2 Products

### Core Features
1. **Offline-First Design** - Works without internet connection
2. **Simple Data Entry** - Indonesian-language, F&B-focused interface
3. **Visual Reports** - Chart.js-based visualizations
4. **WhatsApp Integration** - Share reports via WhatsApp
5. **Excel/PDF Export** - Standard formats for accountants/banks

### Technical Stack
- **Platform:** Electron (desktop app) or React (SaaS component)
- **Database:** SQLite (offline) or Supabase (cloud)
- **UI Framework:** HTML/CSS/JS (Electron) or Next.js (SaaS)

---

## R2a: P&L Analytics - Key Features

**Purpose:** Daily income/expense tracking with P&L reporting

**Core Capabilities:**
1. Daily transaction entry (income + expenses)
2. Expense categorization (COGS, operational, etc.)
3. Monthly P&L report generation
4. Trend analysis (Month-over-Month comparison)
5. SAK EMKM-lite compliance

**Target Users:** Phase 2 Mikro businesses needing basic accounting

---

## R2b: Cash Flow Monitor - Key Features

**Purpose:** Daily cash visibility and short-term forecasting

**Core Capabilities:**
1. Daily cash in/out tracking
2. Running cash balance calculation
3. 7-day cash forecast
4. Alert system ("Cash running low!")
5. Bank reconciliation support

**Target Users:** Cash-heavy businesses (warung, food stalls)

---

## R2c: COGS Calculator - Key Features

**Purpose:** Food cost percentage tracking and recipe costing

**Core Capabilities:**
1. Ingredient price database
2. Recipe builder (ingredients + quantities)
3. Food cost % calculation
4. Margin analysis
5. Price recommendation engine

**Target Users:** Restaurants, cafes managing food costs

---

## Integration Points

**Cross-Product Integration:**
- R2a + R2b: Cash flow data feeds into P&L
- R2a + R2c: COGS data feeds into expense categorization
- All R2 → SaaS Basic (C1): Cloud sync when upgraded

---

## Future Roadmap

**Sprint 2 (Current):**
- R2a, R2c standalone launches
- Basic Excel/CSV compatibility

**Sprint 3 (Planned):**
- R2b launch
- SaaS integration (all R2 tools in cloud platform)
- POS integration (auto data import)

**Sprint 4 (Future):**
- Multi-currency support
- Advanced tax reporting
- Accounting software integration (Accurate, Jurnal)

---

**For Pricing Details, See:**
[[products/04-accounting-module/product-strategy/pricing-strategy|Product 04 Pricing Strategy]]

---

**Last Updated:** January 9, 2026  
**Owner:** Product Team  
**Status:** Living Document - Updated per sprint
