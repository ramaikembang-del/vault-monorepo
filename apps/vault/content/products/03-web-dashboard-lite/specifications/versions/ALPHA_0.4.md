# Alpha 0.4 — "Ops Check"

> **Goal**: Know when customers come

---

## Scope

### What's Added (from 0.3)
```
 Operasional Tab (NEW)
 Intensity Heatmap
 X-axis: Hour (6 AM – 11 PM)
 Y-axis: Day (Monday – Sunday)
 Color: Customer intensity
 Peak hours indicator (Top 3)

 Menu Tab Enhancement
 Category mix pie chart

 Data Input
 ops.csv upload

 Database
 ops_heatmap table
```

### UX Micro-Interactions (Trust & Protection)

**1. "Staffing Risk" Zones**
- **Logic**: Compare Labor Cost (if available) vs Intensity.
- **Visual**: "Overstaffed" zones highlighted in Orange.
- **ToolTip**: "Paying 3 staff for 2 customers. Potential leakage: Rp 50k/hour."

**2. "Peak Hour" Prep Warning**
- **Alert**: "Saturday 19:00 is High Risk."
- **Actionable**: "Prepare stock to avoid lost sales."
- **Frame**: "Don't lose money to sold-out items."

---

## Technical Implementation

### New Files
```
 public/
 js/
 heatmapChart.js # Plotly heatmap logic
 templates/
 ops.csv # Sample ops template
```

### Database Schema Addition
```sql
CREATE TABLE ops_heatmap (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 day_of_week INTEGER NOT NULL, -- 0=Sunday, 6=Saturday
 hour_of_day INTEGER NOT NULL, -- 0-23
 intensity INTEGER NOT NULL, -- Customer count
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Heatmap Configuration
```javascript
const heatmapData = {
 x: hours, // ['06:00', '07:00', ... '23:00']
 y: days, // ['Senin', 'Selasa', ... 'Minggu']
 z: intensity, // 2D array of values
 type: 'heatmap',
 colorscale: [
 [0, '#f0f9ff'], // Low - light blue
 [0.5, '#0ea5e9'], // Medium - blue
 [1, '#0c4a6e'] // High - dark blue
 ]
};
```

### Peak Hours Logic
```javascript
// Find top 3 busiest time slots
const sortedSlots = allSlots
 .sort((a, b) => b.intensity - a.intensity)
 .slice(0, 3);

// Format: "Sabtu 19:00-20:00 (85 pelanggan)"
```

### CSV Format (ops.csv)
```csv
Day,Hour,Intensity
Monday,11,25
Monday,12,45
Monday,13,50
Saturday,19,85
Saturday,20,90
```

---

## Success Criteria

- [ ] Heatmap renders correctly
- [ ] Color gradient visible
- [ ] Peak hours list accurate
- [ ] Category mix pie chart works
- [ ] ops.csv upload works
- [ ] Responsive on different screen sizes

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/specifications/versions/ALPHA_0.3|ALPHA 0.3]]** - Previous version
- **[[products/03-web-dashboard-lite/specifications/versions/ALPHA_1.0|ALPHA 1.0]]** - Next version
- **[[products/03-web-dashboard-lite/specifications/02-feature-specification|Feature Specification]]** - All features

---

## Timeline

**Target: 1-2 weeks**

| Task | Days |
|------|------|
| Ops tab navigation | 1 |
| Plotly heatmap | 3 |
| Peak hours logic | 1 |
| Category mix pie | 1 |
| CSV upload | 1 |
| Testing | 2 |
