# R2c: COGS/HPP Calculator

**Product ID:** R2c
**Folder:** `5-accounting-module/r2c-cogs-calculator/`
**Pillar:** P2 - Retention (Accounting Add-On)
**Priority Score:** 12/21 (Rank #8)
**Sprint:** Sprint 2 (Week 7-10, after R2a validates)
**Build Status:** Blocked (awaiting R2a Gate 2A pass)
**Launch Target:** Week 10 (Sprint 2 end)

## Gate Status

**Gate Dependency:** R2a must pass Gate 2A (20+ paying subs) - validates accounting module demand
**Gate Criteria (Gate 2B):** 15+ paying customers, Rp 75-100K/month subscription, 60%+ configure recipes
**Current Progress:** Not started (R2a building first)
**Next Gate:** Gate 2B  ->  If passed, continue to R2f (Invoicing)

---

## Product Overview

**COGS (Cost of Goods Sold) & HPP (Harga Pokok Penjualan) Calculator for Indonesian F&B**

**For:** Phase 2 F&B businesses with production (bakeries, catering, food manufacturing)
**Who:** Need ingredient-level cost tracking to price products profitably
**Our Product:** Rp 75-100K/month recipe database + inventory tracking + COGS % analysis
**Unlike:** Full inventory systems (too complex) OR spreadsheets (too manual)
**We Offer:** Know exactly what each menu item costs to make, update prices when suppliers change

---

## What's Included

### Recipe Database
- Build recipe cards for each menu item
- Track ingredients per recipe (e.g., "Chocolate Cake: 200g flour, 100g sugar, 50g cocoa")
- Calculate ingredient cost per serving automatically
- Update all recipes when ingredient prices change

### Ingredient Inventory Tracking
- Log ingredient purchases (e.g., "Bought 50kg flour at Rp 15K/kg")
- Track current inventory levels (optional - basic tracking only)
- Price per unit calculation (weighted average)
- Alert when COGS % exceeds target (e.g., >35% of sale price)

### COGS Analysis & Reporting
- COGS % by menu item (e.g., "Nasi Goreng costs 28% of Rp 25K price")
- Monthly COGS trend (are ingredient costs rising?)
- Profit margin calculator (Revenue - COGS = Gross Profit)
- Pricing recommendation (e.g., "Raise price to Rp 27K to maintain 30% COGS")

### What's NOT Included
- [x] Full inventory management (real-time stock, expiry tracking - too complex for Mikro)
- [x] Production scheduling (batch planning, labor scheduling)
- [x] Multi-location inventory (use Full SaaS for this)
- [x] Supplier management (PO, invoicing - see R2f)

---

## Pricing

**Standalone:** Rp 75-100K/month
**Bundle with R2a (P&L):** Rp 150K total (save Rp 25K)
**Bundle with E1 + R2a + R2c:** Rp 300K total (save Rp 75K - "Complete CFO Stack")

**Why Rp 75-100K?**
- Spreadsheet recipe tracking: 10+ hours/month setup + maintenance
- Full inventory software: Rp 500K+/month (overkill for Mikro)
- Hiring production manager: Rp 5M/month (we're 99% cheaper)

---

## Target Market

**Primary:** Phase 2 Production-Heavy F&B (Budi 2.0, Amanda, Dimas)
- Bakeries (bread, cakes, pastries)
- Catering businesses (meal prep, event catering)
- Food manufacturing (sambal, kue kering, frozen food)
- Coffee shops (complex recipes, multiple ingredients)

**Secondary:** Phase 2 Restaurants with high-margin items needing precise costing

**NOT For:**
- Phase 1 Warungs (simple menus, don't need recipe tracking)
- Phase 3+ Enterprises (need full ERP inventory system)

---

## Upgrade Path

**R2c  ->  Full SaaS (C2/C3):** When need multi-location inventory + production scheduling
**R2c + R2a + R2f Bundle:** "Complete Mikro CFO" package for serious operators

---

## Success Metrics (Gate 2B)

**Subscription Target:**
- 15+ paying subscribers by Week 10
- Rp 1-1.5M MRR (15 Ã— Rp 75-100K)
- <15% Month 1 churn

**Engagement:**
- 60%+ create at least 5 recipes within Week 1
- 70%+ log ingredient purchases monthly
- 80%+ check COGS % at least weekly

**NPS:** 50+ (lower than R2a due to complexity, but still good)

---

**Related Documents:**
- [[product-scope|product-scope.md]] - Detailed features
- [[biz/strategy/market-analysis/02-market-segmentation|02-market-segmentation.md]] - Phase 2 personas
- [[biz/strategy/planning/execution/01-product-roadmap|09-product-roadmap.md]] - R2c prioritization

**Operational Procedures:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/sops/recipe-setup-sop|Recipe Setup SOP|Recipe Setup SOP]] - Recipe configuration and ingredient tracking procedures
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/sops/variance-investigation-sop|Variance Investigation SOP|Variance Investigation SOP]] - COGS variance analysis and troubleshooting

**Integrations:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/integrations/supplier-integration|Supplier Integration|Supplier Integration]] - Supplier system integration specifications

**Last Updated:** 2025-12-26
**Owner:** Product Lead
**Next Review:** After R2a Gate 2A (Week 6)

