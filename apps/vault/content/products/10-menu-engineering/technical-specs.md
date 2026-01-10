# A4b Menu Engineer - Technical Specs

**Platform:** Mobile + Web
**Tech Stack:** React, Node.js, PostgreSQL

---

## Core Features

**Recipe Management:**
- Multi-level BOMs (bill of materials)
- Portion tracking
- Waste factor calculations

**Cost Algorithms:**
- Ingredient COGS
- Labor allocation (time-based)
- Overhead distribution (%, fixed, or activity-based)
- Dynamic pricing (update costs → auto-recalc margins)

**Pricing Intelligence:**
- Market benchmarking (web scraping + user-submitted)
- Price elasticity modeling (ML)
- A/B test tracking

**Reporting:**
- Profitability by item, category, time period
- What-if scenarios ("if I raise prices 10%...")
- Export: Excel, PDF, API

---

## Data Models

**MenuItem:**
```javascript
{
 id, name, category, sellingPrice,
 recipe: [
 {ingredientId, quantity, unit},
 ...
 ],
 laborMinutes, overheadPercent,
 margin, salesVolume (from POS)
}
```

**Ingredient:**
```javascript
{
 id, name, unit, costPerUnit,
 supplierId, lastUpdated
}
```

---

## Integrations

- POS systems (sales volume data)
- Supplier APIs (cost updates)
- Accounting software (COGS export)

---

## Security & Performance

- Encryption: TLS 1.3, AES-256
- Caching: Redis (60s TTL for dashboards)
- Response time: < 300ms (p95)

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 2.0 | Expanded specs | Engineering Team |

---

## Related

- **[[products/10-menu-engineering/10-menu-engineering|Menu Engineering Product]]** - Product overview
- **[[products/10-menu-engineering/technical/technical|Technical]]** - Technical directory
- **[[products/10-menu-engineering/specifications/specifications|Specifications]]** - Product specifications
- **[[products/10-menu-engineering/integrations/integrations|Integrations]]** - POS and supplier integrations
- **[[products/07-inventory-optimizer/technical-specs|A4a Technical Specs]]** - Comparison to inventory technical specs
