# Alpha 0.3 — "Menu Check"

> **Goal**: Know what's selling and what's not

---

## Scope

### What's Added (from 0.2)
```
 Menu Tab (NEW)
 BCG Matrix scatter plot
 X-axis: Sales Volume
 Y-axis: Profit Margin
 Color: Quadrant (Star/Plowhorse/Puzzle/Dog)
 Top 5 performers list
 Bottom 5 performers list

 Data Input
 menu.csv upload

 Database
 menu_items table
```

### BCG Quadrant Definitions
| Quadrant | Sales | Profit | Action |
|----------|-------|--------|--------|
| Star | High | High | Promote |
| Plowhorse | High | Low | Reprice/reduce cost |
| Puzzle | Low | High | Market better |
| Dog | Low | Low | Remove/reinvent |

### UX Micro-Interactions (Trust & Protection)

**1. "Menu Audit" Scan**
- **Action**: On first load of Menu tab.
- **Copy**: "Scanning menu for profit leaks..."
- **Result**: "Found 3 Dangerous Items (Dogs) draining resources."

**2. "Dog" Alert (Defensive UI)**
- **Visual**: Red warning icon next to 'Dog' items.
- **Hover**: "This item is wasting your capital. Recommended: Remove."
- **Benefit**: Framing removal as "Stopping a leak," not just "optimizing."

**3. "Star" Protection**
- **Visual**: Shield icon next to 'Star' items.
- **Hover**: "Protect this recipe. Store safely."

---

## Technical Implementation

### New Files
```
 public/
 js/
 menuChart.js # BCG scatter plot logic
 templates/
 menu.csv # Sample menu template
```

### Database Schema Addition
```sql
CREATE TABLE menu_items (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 item_name TEXT NOT NULL,
 sales_volume INTEGER NOT NULL,
 profit_margin REAL NOT NULL,
 category TEXT,
 menu_category TEXT,
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Quadrant Calculation
```javascript
// Determine quadrant based on median values
const medianSales = median(items.map(i => i.sales_volume));
const medianProfit = median(items.map(i => i.profit_margin));

items.forEach(item => {
 const highSales = item.sales_volume >= medianSales;
 const highProfit = item.profit_margin >= medianProfit;

 if (highSales && highProfit) item.category = 'star';
 else if (highSales && !highProfit) item.category = 'plowhorse';
 else if (!highSales && highProfit) item.category = 'puzzle';
 else item.category = 'dog';
});
```

### CSV Format (menu.csv)
```csv
Name,Sales,Profit,MenuCategory
Nasi Goreng,150,35,main
Mie Ayam,120,25,main
Es Teh,200,60,beverage
Es Campur,30,8,dessert
```

---

## Success Criteria

- [ ] BCG scatter plot renders correctly
- [ ] Items colored by quadrant
- [ ] Top 5 list accurate
- [ ] Bottom 5 list accurate
- [ ] menu.csv upload works
- [ ] Quadrant auto-calculates

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/specifications/versions/ALPHA_0.2|ALPHA 0.2]]** - Previous version
- **[[products/03-web-dashboard-lite/specifications/versions/ALPHA_0.4|ALPHA 0.4]]** - Next version
- **[[products/03-web-dashboard-lite/specifications/02-feature-specification|Feature Specification]]** - All features

---

## Timeline

**Target: 1-2 weeks**

| Task | Days |
|------|------|
| Menu tab navigation | 1 |
| BCG scatter chart | 3 |
| Top/Bottom lists | 1 |
| Quadrant logic | 1 |
| CSV upload | 1 |
| Testing | 2 |
