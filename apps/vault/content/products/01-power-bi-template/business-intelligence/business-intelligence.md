# Business Intelligence - Product 01 (Power BI Template)

## Overview
This directory contains financial analysis, market validation, and strategic assessments for Product 01 (Power BI Template). Files are organized by analysis type for easier navigation.

## File Structure

### Start Here (Navigation Hub)
- **** - **MAIN ENTRY POINT**
 High-level summary of the 3-Phase Pricing Strategy, Pricing Tiers, and Unit Economics. Links to all detailed component files. **Start here.**

### Archived Master Document
- **_pricing-master-analysis.md (Archived)_** - **ARCHIVED**
 The previous monolithic analysis document has been distributed into the component files below for better maintainability. It is moved to `.archive/` for historical reference.

---

## Subdirectories

### [[biz/research/market-analysis/02-market-analysis|market-analysis/]]
Market sizing and TAM/SAM/SOM validation

- **[[products/01-power-bi-template/business-intelligence/market-analysis/03-market-sizing-validation|03-market-sizing-validation.md]]** (35KB)
 TAM/SAM/SOM analysis with Indonesian F&B market validation

- **[[products/01-power-bi-template/business-intelligence/market-analysis/04-tam-bottom-up-validation|04-tam-bottom-up-validation.md]]** (25KB)
 Bottom-up TAM calculation validating 30K addressable businesses


### [[biz/departments/finance/models/02-financial-models|financial-models/]]
Revenue projections, unit economics, and scenario planning

- **[[02-three-scenario-analysis|02-three-scenario-analysis.md|02-three-scenario-analysis.md]]** (7.5KB)
 Revenue projections: Conservative (Rp 300M Y1), Realistic (Rp 700M Y1), Aggressive (Rp 1.5Bn Y1)


- **[[05-unit-economics|05-unit-economics.md|05-unit-economics.md]]** (14KB)
 Cost structure breakdown and margin analysis per tier
 *Key Finding: Tier 3 = 77.6% margin (Rp 9.7M profit on Rp 12.5M sale)*

- **[[06-revenue-calculator-model|06-revenue-calculator-model.md]]** (27.5KB)
 Interactive revenue model with tier mix scenarios

###
Business model, competitive landscape, and strategic frameworks

- **** (18KB)
 Business model canvas, value propositions, customer segments

- **** (14KB)
 Competitor comparison (Freelancers, Consultants, DIY alternatives)

- **** (21KB)
 Five Forces framework assessing market dynamics

---

## Archived Files

### _(Archived Link)_
- **_07-mrr-tracking-model-year-1-3.md (Archived)_**
 [!] **DEPRECATED:** MRR model no longer relevant since Product 01 is strictly ONE-TIME revenue. All recurring revenue (support, updates) moved to Product 02.

---

## Usage Guidelines

### For Strategic Planning
1. Start with **** for the strategic big picture
2. Reference **financial-models/02-three-scenario-analysis.md** for revenue targets
3. Check **market-analysis/03-market-sizing-validation.md** for TAM validation

### For Investor Decks
- **TAM:** 30K businesses (validated in `market-analysis/`)
- **Revenue:** Conservative Rp 300M -> Rp 1.3Bn (Y1-Y3) from `financial-models/02`
- **Unit Economics:** 77.6% margin Tier 3 from `financial-models/05`

### For Operational Planning
- **Cost Structure:** See `financial-models/05-unit-economics.md`
- **Competitive Positioning:** See `strategic-analysis/07-competitive-analysis.md`
- **Pricing Justification:** See `financial-models/05-unit-economics.md`

---

**Last Updated:** January 3, 2026
**Owner:** Product 01 Strategy Team
**Status:** All files aligned with One-Time Purchase model


---

**Related Documents:**
- [[business-intelligence|Business Intelligence]]
- [[05-unit-economics|05 Unit Economics]]

