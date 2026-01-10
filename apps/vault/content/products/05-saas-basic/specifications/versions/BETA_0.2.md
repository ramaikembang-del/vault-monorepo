# Beta 0.2 — "Smart Survival"

> **Goal**: Proactive warnings before problems hit

---

## Scope

### What's Added (from Beta 0.1)
```
 Health Score System
 Overall score (0-100)
 Visual indicator (color)
 Breakdown by dimension

 Alert Rules Engine
 Threshold-based alerts
 Trend-based alerts
 Alert history

 Alert Display
 Dashboard alert banner
 Notification center
 Color-coded severity

 New Data Points
 Cash position tracking
 Menu balance indicator

 Enhancements
 Improved empty states
```

### UX Micro-Interactions (Trust & Protection)

**1. "Survival Index" (Health Score)**
- **Reframe**: "Health Score" → "Survival Odds" (for high risk)
- **Visual**:
 - Red (0-40): "Critical Risk: Leak imminent."
 - Green (80+): "Bulletproof: Ready to Scale."

**2. "Leak Hunter" Alerts**
- **Notification Sound**: Distinct, urgent but soft sound for "Critical Leak" (Food Cost > 40%).
- **Copy**: "Anomaly Detected: Sales flat, stock dropping. Check staff."
- **Action**: "Investigate" button (opens drill-down).

**3. "Cash Guard"**
- **Feature**: Cash reconciliation wizard.
- **Copy**: "Did the drawer match the POS?Verify now."
- **Trust**: "Protects you from 'selisih kasir' (cash variance)."

---

## Technical Implementation

### Health Score Calculation
```javascript
function calculateHealthScore(data) {
 const scores = {
 financial: calculateFinancialScore(data), // 40%
 sales: calculateSalesScore(data), // 25%
 costs: calculateCostScore(data), // 25%
 menu: calculateMenuScore(data) // 10%
 };

 const overall =
 scores.financial * 0.40 +
 scores.sales * 0.25 +
 scores.costs * 0.25 +
 scores.menu * 0.10;

 return {
 overall: Math.round(overall),
 breakdown: scores,
 status: getHealthStatus(overall)
 };
}

function getHealthStatus(score) {
 if (score >= 80) return { label: 'Smooth Sailing', color: 'green' };
 if (score >= 60) return { label: 'Watch Carefully', color: 'yellow' };
 if (score >= 40) return { label: 'Action Needed', color: 'orange' };
 return { label: 'Survival Mode', color: 'red' };
}
```

### Alert Rules
```javascript
const alertRules = [
 {
 id: 'prime_cost_high',
 name: 'Prime Cost Too High',
 condition: (data) => data.primeCostPercent > 70,
 severity: 'critical',
 message: 'Prime Cost at {value}% - check suppliers/labor'
 },
 {
 id: 'revenue_declining',
 name: 'Revenue Declining',
 condition: (data) => data.revenueWoW < -15,
 severity: 'warning',
 message: 'Revenue down {value}% vs last week'
 },
 {
 id: 'top_item_slipping',
 name: 'Top Item Slipping',
 condition: (data) => data.topItemDelta < -20,
 severity: 'warning',
 message: 'Your best seller is down {value}%'
 },
 {
 id: 'profitable',
 name: 'Above Target',
 condition: (data) => data.profitMargin > data.targetMargin,
 severity: 'positive',
 message: 'Great job! Exceeding profit target'
 }
];
```

### Database Additions
```sql
-- Alert history
CREATE TABLE alerts (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 rule_id TEXT NOT NULL,
 severity TEXT NOT NULL,
 message TEXT NOT NULL,
 acknowledged BOOLEAN DEFAULT FALSE,
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Cash position tracking
CREATE TABLE cash_records (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 record_date DATE NOT NULL,
 cash_in REAL DEFAULT 0,
 cash_out REAL DEFAULT 0,
 balance REAL NOT NULL,
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## Success Criteria

- [ ] Health score displays correctly
- [ ] Score updates in real-time
- [ ] Alerts trigger on conditions
- [ ] Alert banner visible on dashboard
- [ ] Notification center lists all alerts
- [ ] Alert severity colors correct
- [ ] Cash position tracking works
- [ ] Menu balance indicator works

---

## Timeline

**Target: 2 weeks**

| Task | Days |
|------|------|
| Health score logic | 2 |
| Health score UI | 2 |
| Alert rules engine | 3 |
| Alert UI (banner, center) | 2 |
| Cash tracking | 2 |
| Testing | 3 |

---

## Related

- **[[products/05-saas-basic/05-saas-basic|SaaS Basic Product]]** - Product overview
- **[[products/16-marketing-automator/specifications/specifications|Specifications]]** - Parent specifications directory
- **[[products/05-saas-basic/specifications/versions/BETA_0.1|Beta 0.1]]** - Previous version
- **[[products/05-saas-basic/specifications/versions/BETA_1.0|Beta 1.0]]** - Next version
- **[[products/05-saas-basic/operations/success-metrics|Success Metrics]]** - Health score metrics
