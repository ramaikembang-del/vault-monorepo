# Beta 1.0 — "Pre-Launch"

> **Goal**: Everything for survival, polished and ready

---

## Scope

### What's Added (from Beta 0.2)
```
 Onboarding
 First-run welcome tour
 Sample data option
 Quick setup wizard

 Help System
 In-app tooltips
 Help documentation
 FAQ section

 Data Management
 Full data export (CSV)
 Account deletion
 GDPR compliance

 Settings Page
 Profile management
 Business settings
 Notification preferences

 New Metrics
 Staff-to-revenue ratio

 Polish
 Performance optimization
 Bug fixes
 Edge case handling
```

### UX Micro-Interactions (Trust & Protection)

**1. "Safety-First" Onboarding**
- **Step 1**: "We do not sell your data." (Big bold promise)
- **Step 2**: "Select your privacy level." (Local vs Cloud)
- **Step 3**: "Set up your PIN." (For "Mata-Mata" mode)

**2. "Data Shredder" (Account Deletion)**
- **Visual**: "Shredding..." animation when deleting account.
- **Promise**: "Gone forever. Not archived. Not sold."
- **Trust**: Ultimate exit plan safety.

**3. "Staff Ratio" as Shield**
- **Metric**: "Staff-to-Revenue Ratio"
- **Context**: "Are you over-hiring? Protect your margin."

---

## Technical Implementation

### Onboarding Tour
```javascript
const tourSteps = [
 {
 target: '#kpi-revenue',
 title: 'Pendapatan Bersih',
 content: 'Lihat total pendapatan bisnis Anda di sini'
 },
 {
 target: '#nav-financial',
 title: 'Laporan Keuangan',
 content: 'Akses P&L dan analisis biaya'
 },
 {
 target: '#health-score',
 title: 'Skor Kesehatan',
 content: 'Pantau kesehatan bisnis secara keseluruhan'
 },
 {
 target: '#upload-btn',
 title: 'Upload Data',
 content: 'Mulai dengan mengupload data CSV Anda'
 }
];
```

### Settings Page Structure
```javascript
const settingsSchema = {
 profile: {
 businessName: { type: 'text', required: true },
 businessType: { type: 'select', options: ['cafe', 'restaurant', 'catering'] },
 email: { type: 'email', readonly: true }
 },
 preferences: {
 language: { type: 'select', options: ['id', 'en'] },
 theme: { type: 'select', options: ['light', 'dark'] },
 currency: { type: 'select', options: ['IDR', 'USD'] }
 },
 notifications: {
 emailAlerts: { type: 'toggle', default: true },
 weeklyDigest: { type: 'toggle', default: true }
 }
};
```

### Data Export
```javascript
async function exportAllData() {
 const data = {
 revenue: await db.getAll('revenue_data'),
 pnl: await db.getAll('pnl_items'),
 menu: await db.getAll('menu_items'),
 ops: await db.getAll('ops_heatmap'),
 alerts: await db.getAll('alerts')
 };

 const zip = new JSZip();

 Object.entries(data).forEach(([name, rows]) => {
 const csv = convertToCSV(rows);
 zip.file(`${name}.csv`, csv);
 });

 return zip.generateAsync({ type: 'blob' });
}
```

### Account Deletion
```javascript
async function deleteAccount() {
 // 1. Confirm with user
 const confirmed = await showConfirmDialog(
 'Hapus Akun',
 'Semua data akan dihapus permanen. Lanjutkan?'
 );

 if (!confirmed) return;

 // 2. Delete cloud data
 await supabase.rpc('delete_user_data');

 // 3. Delete local data
 await db.clearAll();

 // 4. Sign out
 await supabase.auth.signOut();

 // 5. Redirect to landing
 window.location.href = '/';
}
```

---

## Success Criteria

- [ ] Onboarding tour works on first run
- [ ] Sample data loads correctly
- [ ] In-app help accessible
- [ ] Settings page saves correctly
- [ ] Data export downloads all data
- [ ] Account deletion works completely
- [ ] Staff ratio calculates correctly
- [ ] Performance acceptable (<2s load)
- [ ] No critical bugs remaining

---

## Timeline

**Target: 3 weeks**

| Task | Days |
|------|------|
| Onboarding tour | 3 |
| Help system | 3 |
| Settings page | 3 |
| Data export | 2 |
| Account deletion | 2 |
| Staff ratio metric | 1 |
| Performance tuning | 2 |
| Bug fixes | 3 |
| Final QA | 2 |

---

## Related

- **[[products/05-saas-basic/05-saas-basic|SaaS Basic Product]]** - Product overview
- **[[products/16-marketing-automator/specifications/specifications|Specifications]]** - Parent specifications directory
- **[[products/05-saas-basic/specifications/versions/BETA_0.2|Beta 0.2]]** - Previous version
- **[[products/05-saas-basic/specifications/versions/PUBLIC_1.0|Public 1.0]]** - Next version (public release)
- **[[products/05-saas-basic/training/training|Training]]** - Onboarding and help content
