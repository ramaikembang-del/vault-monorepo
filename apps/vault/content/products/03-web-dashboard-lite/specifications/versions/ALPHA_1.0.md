# Alpha 1.0 — "Polished Local"

> **Goal**: Complete local app ready for pilot testing

---

## Scope

### What's Added (from 0.4)
```
 Bilingual Support
 Language toggle (ID/EN)
 All UI text translatable
 Preference persisted locally

 Theme Support
 Dark mode toggle
 CSS variables for theming
 Preference persisted locally

 Sales Section (in Ringkasan)
 Sales trend line chart
 Week-over-week comparison
 Daily performance view

 UX Polish
 Loading states (spinners)
 Error handling (toasts)
 Empty states (guidance)
 Smooth animations

 Database
 settings table
```

### UX Micro-Interactions (Trust & Protection)

**1. "Discrete Mode" (Dark Theme)**
- **Rebrand**: "Dark Mode" → "Discrete Mode"
- **Value**: "Lower screen glare, harder for customers to peek."
- **Default**: Auto-switch after 6 PM (Operation hours).

**2. "Privacy Curtain" (App Blur)**
- **Feature**: Auto-blur screen if inactive for 2 mins.
- **Copy**: "Screen Protected (Inactive)"
- **Action**: Click to unlock (prevents staff peeking).

**3. "Local Vault" Indicator**
- **Visual**: Green dot in header: "Data Local & Encrypted"
- **Hover**: "Your data is only on this machine. Safe."

---

## Technical Implementation

### New Files
```
 locales/
 id.json # Indonesian translations
 en.json # English translations
 public/
 css/
 themes.css # Dark mode variables
 js/
 i18n.js # Translation system
 services/
 settingsService.js # Preferences management
```

### i18n System
```javascript
// locales/id.json
{
 "nav.overview": "Ringkasan",
 "nav.financial": "Finansial",
 "nav.menu": "Menu",
 "nav.operations": "Operasional",
 "kpi.revenue": "Pendapatan Bersih",
 "kpi.profit": "Laba Bersih",
 ...
}

// Usage in HTML
<span data-i18n="kpi.revenue">Pendapatan Bersih</span>

// JavaScript
function setLanguage(lang) {
 document.querySelectorAll('[data-i18n]').forEach(el => {
 const key = el.getAttribute('data-i18n');
 el.textContent = translations[lang][key];
 });
 localStorage.setItem('language', lang);
}
```

### Theme System
```css
/* themes.css */
:root {
 --bg-primary: #ffffff;
 --text-primary: #1e293b;
 --border-color: #e2e8f0;
}

[data-theme="dark"] {
 --bg-primary: #0f172a;
 --text-primary: #f1f5f9;
 --border-color: #334155;
}
```

### Settings Table
```sql
CREATE TABLE settings (
 key TEXT PRIMARY KEY,
 value TEXT NOT NULL
);

-- Default entries
INSERT INTO settings VALUES ('language', 'id');
INSERT INTO settings VALUES ('theme', 'light');
```

### Sales Trend Data
```javascript
// Generate from revenue_data
const salesTrend = revenueData.map(d => ({
 period: d.period_label,
 current: d.actual_amount,
 previous: previousPeriodData[d.period_label] || 0
}));
```

---

## Success Criteria

- [ ] Language toggle switches all text
- [ ] Language preference persists
- [ ] Dark mode applies correctly
- [ ] Theme preference persists
- [ ] Sales trend chart renders
- [ ] WoW comparison accurate
- [ ] Loading states appear
- [ ] Error messages display
- [ ] Empty states guide users

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/specifications/versions/ALPHA_0.4|ALPHA 0.4]]** - Previous version
- **[[products/03-web-dashboard-lite/specifications/02-feature-specification|Feature Specification]]** - All features
- **[[products/03-web-dashboard-lite/specifications/05-pmf-validation-plan|PMF Validation Plan]]** - Post-1.0 validation

---

## Timeline

**Target: 2 weeks**

| Task | Days |
|------|------|
| i18n system | 2 |
| Translate all strings | 2 |
| Theme system | 2 |
| Sales trend chart | 2 |
| WoW comparison | 1 |
| UX polish | 3 |
| Testing | 2 |
