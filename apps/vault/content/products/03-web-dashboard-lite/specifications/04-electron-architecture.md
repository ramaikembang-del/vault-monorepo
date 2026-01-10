# Electron Architecture Specification

## Overview

Web Dashboard Lite is built as a desktop application using Electron, enabling offline-first analytics with optional cloud sync for Indonesian Mikro F&B businesses.

---

## Architecture Principles

### 1. Offline-First Design
- **Primary Storage:** Local SQLite database on user's machine
- **Cloud Sync:** Optional, user-controlled (not automatic)
- **Data Ownership:** User data never leaves device unless explicitly synced

### 2. Simple Data Pipeline
```
Daily Workflow:
1. User exports CSV from POS system (end of day)
2. Drag-and-drop CSV into Electron app
3. App parses & stores in local SQLite
4. Dashboard updates instantly (offline)
5. (Optional) User clicks "Sync to Cloud" for backup
```

### 3. Cross-Platform Support
- **Primary:** Windows (95% of target market)
- **Secondary:** macOS (5% of target market)
- **Not Supported:** Linux (negligible market share)

---

## Technology Stack

### Frontend
- **Framework:** Next.js 14 (React 18)
- **UI Library:** shadcn/ui (Tailwind CSS components)
- **Charts:** Recharts
- **State Management:** Zustand (lightweight)
- **Language:** TypeScript

### Desktop Wrapper
- **Framework:** Electron 28+
- **Packaging:** electron-builder
- **Auto-Updates:** electron-updater

### Local Database
- **Database:** SQLite3 (via better-sqlite3)
- **Schema:** Star schema (5 fact tables, 4 dimension tables)
- **Migrations:** Custom migration system

### Optional Cloud Sync
- **Backend:** Supabase (PostgreSQL + Auth)
- **Sync Strategy:** Full snapshot (not incremental) - simple implementation
- **Authentication:** Supabase Auth (email/password)

---

## Data Model

### Local SQLite Schema

**Fact Tables:**
- `sales_data` (transactions)
- `staff_hours` (attendance, shifts)
- `feedback` (customer reviews)
- `daily_targets` (revenue goals)
- `inventory_snapshot` (stock levels)

**Dimension Tables:**
- `date_dimension` (time intelligence)
- `product_dimension` (menu items)
- `staff_dimension` (employee info)
- `customer_dimension` (customer records)

**Same schema as Power BI Dashboard template** - ensures compatibility

---

## File Structure

```
/electron-app/
 main/ (Electron main process)
 index.ts (entry point)
 database/
 sqlite-manager.ts
 schema.sql
 migrations/
 csv-import/
 parser.ts
 cloud-sync/
 supabase-client.ts
 renderer/ (Next.js app)
 app/ (Next.js 14 app router)
 components/
 hooks/
 lib/
 package.json
```

---

## Key Features

### 1. CSV Import (Offline)
```typescript
// Drag-and-drop or file picker
import CSV → Parse → Validate → Insert to SQLite

Supported formats:
- Sales: transaction_id, date, amount, product_id, staff_id
- Staff: staff_id, name, hours_worked, date
- Feedback: feedback_id, customer_id, rating, comment, date
```

### 2. Dashboard Rendering (Offline)
```typescript
// All queries run against local SQLite
SELECT revenue, transactions FROM sales_data
WHERE date >= '2025-12-01'

// Chart renders instantly (no network)
```

### 3. Optional Cloud Sync
```typescript
// User clicks "Backup to Cloud"
1. Authenticate with Supabase (first time only)
2. Export entire SQLite database as JSON
3. Upload to Supabase (user's private workspace)
4. Store sync timestamp

// On another device:
User can download full snapshot to restore data
```

### 4. Health Score Calculation
```typescript
// Runs locally, no cloud dependency
Calculate:
- Profitability (30%)
- Revenue growth (25%)
- Staff efficiency (25%)
- Customer satisfaction (20%)

Health Score = 0-100
```

---

## Performance Targets

| Metric | Target | Rationale |
|--------|--------|-----------|
| **App Launch** | < 3 seconds | Fast startup on low-end Windows laptops |
| **CSV Import** | < 5 seconds for 10K rows | Typical month of transactions |
| **Dashboard Load** | < 1 second | Instant gratification ("30-second insight") |
| **Cloud Sync** | < 30 seconds for 100 MB | Typical database size after 6 months |

---

## Security & Privacy

### Local Data Protection
- **Encryption at rest:** Optional (user can enable Windows BitLocker)
- **File permissions:** Standard OS-level (user account access control)
- **No telemetry:** Zero analytics, no phone-home

### Cloud Sync Security
- **Authentication:** Supabase Auth (JWT tokens)
- **Encryption in transit:** HTTPS/TLS
- **Row-level security:** User can only access their own data
- **Opt-out:** Cloud sync entirely optional

---

## Distribution

### Packaging
```
electron-builder → .exe (Windows) + .dmg (macOS)

Windows:
- Installer: web-dashboard-lite-setup-1.0.0.exe (60-80 MB)
- Portable: web-dashboard-lite-portable-1.0.0.zip (no install needed)

macOS:
- DMG: web-dashboard-lite-1.0.0.dmg (70-90 MB)
```

### Auto-Updates
```typescript
// electron-updater checks GitHub Releases
Every 24 hours:
 Check for new version →
 Download in background →
 Prompt user: "Update available. Restart to install?"
```

---

## Development Phases

### Phase 1: Core Offline (Months 1-2)
- Electron boilerplate
- SQLite integration
- CSV import
- 30-metric dashboard (offline only)
- Installer/packaging

### Phase 2: Cloud Sync (Month 3)
- Supabase integration
- Auth flow (email/password)
- Snapshot export/import
- Sync UI

### Phase 3: Polish (Month 4)
- Auto-updates
- Error handling
- Onboarding tutorial
- Indonesian localization

---

## Technical Constraints

### Must Support
- **Windows 10+** (majority of users)
- **Single user** (no multi-user on same device)
- **Low-spec hardware** (2GB RAM, dual-core CPU)

### Won't Support
- **Linux** (negligible market)
- **Mobile** (use Full SaaS for mobile)
- **Multi-tenant** (one installation = one business)

---

## Migration Path to Full SaaS

When user upgrades to Full SaaS Platform:
1. **Export SQLite** to CSV
2. **Import** to Full SaaS PostgreSQL database
3. **Historical data preserved**
4. **User discontinues Electron app**, uses cloud SaaS

**Data portability ensures** no lock-in, builds trust.

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/specifications/02-feature-specification|Feature Specification]]** - Features to implement
- **[[products/03-web-dashboard-lite/product-strategy/product-strategy|Product Strategy]]** - Product roadmap
- **[[products/03-web-dashboard-lite/marketing/10-validation-gtm-checklist|GTM Checklist]]** - Development checklist

---

**Status:** Specification complete, ready for development
**Owner:** [TBD]
**Last Updated:** December 25, 2025
