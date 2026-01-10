# Alpha 0.2 — "Money Talks"

> **Goal**: Know where the money goes

---

## Scope

### What's Added (from 0.1)
```
 Dashboard
 Target Achievement KPI (4th card)
 Prime Cost % indicator
 Food Cost % indicator (NEW - Critical profitability metric)

 Finansial Tab (NEW)
 P&L table (Revenue, COGS, OpEx, Profit)
 Variance column (Actual vs Projected)
 Cost breakdown donut chart
 Food Cost % tracker with threshold alerts

 Data Input
 pnl.csv upload
 Manual data editor modal

 Database
 pnl_items table
```

### UX Micro-Interactions (Trust & Protection)

**1. "Mata-Mata" Mode (Private View)**
- **Feature**: Blur sensitive numbers by default (click to reveal).
- **Why**: "I don't want my staff to see my profit when I walk away."
- **Visual**: Eye icon toggle on P&L header.

**2. "Anti-Boncos" Alerts (Loss Prevention)**
- **Warning**: Red pulse on "Food Cost %" if >35%.
- **Copy**: "Warning: Potential Ingredient Leak (Over 35%)"
- **Action**: "Check Stock" button (links to manual check guide).

**3. "Uang Saya" (Owner's Cut)**
- **Visual**: Distinct Green highlight for Net Profit.
- **Micro-copy**: "Safe to take home: Rp [Amount]" (Psychological safety).

### What's NOT Included Yet
- BCG Matrix → Alpha 0.3
- Heatmap → Alpha 0.4
- Sales Trends → Alpha 1.0
- Bilingual → Alpha 1.0

---

## Technical Implementation

### New Files
```
 locales/
 id.json # Indonesian strings (prep for i18n)
 templates/
 pnl.csv # Sample P&L template
```

### Database Schema Addition
```sql
CREATE TABLE pnl_items (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 item_name TEXT NOT NULL,
 item_category TEXT,
 actual_amount REAL NOT NULL,
 projected_amount REAL,
 period_month DATE,
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### P&L Categories
| Category | Items |
|----------|-------|
| revenue | Pendapatan Penjualan, Pendapatan Lain |
| cogs | Bahan Baku, Bahan Kemasan |
| labor | Gaji Karyawan, Tunjangan |
| opex | Sewa, Listrik, Air, Marketing |

### CSV Format (pnl.csv)
```csv
Item,Category,Actual,Projected
Pendapatan Penjualan,revenue,45000000,50000000
Bahan Baku,cogs,15000000,16000000
Gaji Karyawan,labor,8000000,8000000
Sewa Tempat,opex,5000000,5000000
```

---

## Success Criteria

- [ ] P&L table displays correctly
- [ ] Cost breakdown donut renders
- [ ] Prime Cost % calculates accurately
- [ ] **Food Cost % displays with 28-35% benchmark** (NEW)
- [ ] Food Cost alert triggers when >35%
- [ ] pnl.csv upload works
- [ ] Manual editor can add/edit/delete rows
- [ ] Data persists after restart

---

## Key Metrics (Research-Validated)

### Food Cost % Benchmark
Based on Bandung F&B research, ideal Food Cost varies by type:
- **Casual Dining**: 28% - 35%
- **Fast Food**: 25% - 30%
- **Fine Dining**: 30% - 40%

**Formula**: `Food Cost % = (COGS / Revenue) × 100`

**Alert Logic**:
- Green: <28% (Optimal - but verify quality isn't suffering)
- Yellow: 28-35% (Healthy range)
- Red: >35% (Inefficiency or fraud - investigate immediately)

**Why Critical**: Bandung research shows stock waste costs Rp 2.1M-3.8M/month per outlet. Food Cost % monitoring prevents this.

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/specifications/versions/ALPHA_0.1|ALPHA 0.1]]** - Previous version
- **[[products/03-web-dashboard-lite/specifications/versions/ALPHA_0.3|ALPHA 0.3]]** - Next version
- **[[products/03-web-dashboard-lite/specifications/02-feature-specification|Feature Specification]]** - All features

---

## Timeline

**Target: 1-2 weeks**

| Task | Days |
|------|------|
| P&L table UI | 2 |
| Donut chart | 1 |
| Prime Cost calc | 1 |
| Manual editor | 2 |
| pnl.csv upload | 1 |
| Testing | 2 |
