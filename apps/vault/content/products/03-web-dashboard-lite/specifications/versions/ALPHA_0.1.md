# Alpha 0.1 — "First Heartbeat"

> **Goal**: Show that the business has a pulse

## Scope

### What's Included
```
 Dashboard
 Revenue KPI card
 Profit KPI card
 Margin % KPI card
 Revenue bar chart (Actual vs Projected)

 Data Input
 CSV upload (revenue.csv only)
 Sample template download

 Platform
 Electron desktop app
 SQLite local database
 Windows build

 Language
 Indonesian only
```

### What's NOT Included
- P&L table (Alpha 0.2)
- BCG Matrix (Alpha 0.3)
- Heatmap (Alpha 0.4)
- English (Alpha 1.0)
- Dark mode (Alpha 1.0)
- Cloud/Auth (Beta 0.1)

---

## Technical Implementation

### Files to Create/Modify

```
fnb-ops-insight/
 electron/
 main.js # Electron main process
 preload.js # Secure bridge
 services/
 sqliteService.js # Database layer
 public/
 index.html # Dashboard UI (simplified)
 package.json # Add Electron deps
```

### Database Schema

```sql
CREATE TABLE revenue_data (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 period_label TEXT NOT NULL,
 actual_amount REAL NOT NULL,
 projected_amount REAL,
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### UX Micro-Interactions (Trust & Protection)

**1. First Launch Experience**
- **Copy**: "Initializing Secure Local Vault..." (instead of "Loading")
- **Visual**: Padlock icon animation
- **Subtext**: "No data leaves this device."

**2. CSV Upload State**
- **Action**: User drops `revenue.csv`
- **Feedback**:
 - Scanning: "Checking for anomalies..."
 - Success: "Data Secured. 0 Leaks Detected." (Green Shield)
 - Error: "File Format Risk. Use standard template."

**3. Offline indicator**
- **Always Verify**: "Offline Mode Active (Private)" badge in webview header.

---

### CSV Format (revenue.csv)
```csv
Label,Actual,Projected
Jan,45000000,50000000
Feb,52000000,50000000
Mar,48000000,55000000
```

---

## Success Criteria

- [ ] Electron app launches on Windows
- [ ] SQLite database persists data
- [ ] CSV upload works for revenue data
- [ ] 3 KPI cards display correct values
- [ ] Revenue chart renders correctly
- [ ] App works offline

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/specifications/04-electron-architecture|Electron Architecture]]** - Technical architecture
- **[[products/03-web-dashboard-lite/specifications/02-feature-specification|Feature Specification]]** - Feature details
- **[[products/03-web-dashboard-lite/specifications/versions/ALPHA_0.2|ALPHA 0.2]]** - Next version

---

## Timeline

**Target: 1-2 weeks**

| Task | Days |
|------|------|
| Electron setup | 2 |
| SQLite integration | 2 |
| Dashboard UI | 3 |
| CSV upload | 2 |
| Testing & polish | 2 |
