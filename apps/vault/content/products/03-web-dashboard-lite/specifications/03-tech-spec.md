# E1: Web Dashboard Lite - Technical Specification
**Version:** 1.0
**Date:** December 26, 2025
**Status:** Draft
**Sprint:** 1 (Weeks 1-4)

> [!NOTE]
> **Feature Reference:** See [[products/feature-prioritization-matrix|feature-prioritization-matrix.md]] for complete feature list and priorities.

---

## 1. Architecture Overview

### 1.1 System Architecture

```
|-------------------------------------------------------------+
| Electron Desktop App |
|-------------------------------------------------------------|
| |-------------+ |-------------+ |---------------------+ |
| | React | | Charts | | State Management | |
| | (Next.js) | | (Recharts) | | (Zustand) | |
| |-------------- |-------------- |---------------------- |
|-------------------------------------------------------------|
| |---------------------------------------------------------+|
| | Electron Main Process ||
| | |-----------+ |-----------+ |--------------------+ ||
| | | SQLite | | CSV | | File System | ||
| | | Database | | Parser | | Access | ||
| | |------------ |------------ |--------------------- ||
| |----------------------------------------------------------|
|--------------------------------------------------------------
 |
 v
 |---------------+
 | Local SQLite |
 | Database |
 |----------------
```

### 1.2 Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Runtime** | Electron | 28.x | Desktop app wrapper |
| **Frontend** | Next.js | 14.x | React framework |
| **UI Components** | shadcn/ui | latest | Component library |
| **Charts** | Recharts | 2.x | Data visualization |
| **State** | Zustand | 4.x | State management |
| **Database** | SQLite | 3.x | Local storage |
| **ORM** | Drizzle | latest | Database queries |
| **Icons** | Lucide React | latest | Icon library |
| **Styling** | Tailwind CSS | 3.x | CSS framework |

### 1.3 Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Electron (not PWA)** | Offline-first, local SQLite, no browser dependency |
| **SQLite (not IndexedDB)** | Larger data capacity, SQL queries, robust |
| **Next.js (not Vite)** | Team familiarity, static export works in Electron |
| **Zustand (not Redux)** | Simpler for small app, less boilerplate |
| **Drizzle (not Prisma)** | Better SQLite support, smaller bundle |

---

## 2. Data Model

### 2.1 Entity Relationship Diagram

```
|----------------+ |----------------+ |----------------+
| SETTINGS | | TRANSACTIONS | | PRODUCTS |
|----------------┤ |----------------┤ |----------------|
| id (PK) | | id (PK) | | id (PK) |
| business_name | | date | | name |
| pin_hash | | time | | category |
| target_revenue | | product_id (FK)|◄------| cost_price |
| target_food_pct| | quantity | | sell_price |
| created_at | | unit_price | | is_active |
| updated_at | | total_amount | | created_at |
|----------------- | staff_id (FK) | |-----------------
 | payment_method |
 | created_at | ▲
 |----------------- |
 | |
 ▼ |
 |----------------+ |
 | STAFF | |
 |----------------┤ |
 | id (PK) | |
 | name | |
 | role | |
 | hourly_rate | |
 | is_active | |
 | created_at | |
 |----------------- |
 |
 |----------------+ |
 | DAILY_SUMMARY | |
 |----------------┤ |
 | id (PK) | |
 | date | |
 | total_revenue | |
 | total_cost | |
 | food_cost | |
 | labor_cost | |
 | transaction_ct | |
 | health_score | |
 | created_at | |
 |-----------------
```

### 2.2 Database Schema (SQLite/Drizzle)

```typescript
// schema.ts

import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const settings = sqliteTable('settings', {
 id: integer('id').primaryKey({ autoIncrement: true }),
 businessName: text('business_name').notNull(),
 pinHash: text('pin_hash'),
 targetRevenue: real('target_revenue').default(0),
 targetFoodCostPct: real('target_food_cost_pct').default(32),
 targetPrimeCostPct: real('target_prime_cost_pct').default(60),
 createdAt: integer('created_at', { mode: 'timestamp' }).defaultNow(),
 updatedAt: integer('updated_at', { mode: 'timestamp' }).defaultNow(),
});

export const products = sqliteTable('products', {
 id: integer('id').primaryKey({ autoIncrement: true }),
 name: text('name').notNull(),
 category: text('category').default('food'), // food, beverage, dessert
 costPrice: real('cost_price').default(0),
 sellPrice: real('sell_price').default(0),
 isActive: integer('is_active', { mode: 'boolean' }).default(true),
 createdAt: integer('created_at', { mode: 'timestamp' }).defaultNow(),
});

export const staff = sqliteTable('staff', {
 id: integer('id').primaryKey({ autoIncrement: true }),
 name: text('name').notNull(),
 role: text('role').default('staff'),
 hourlyRate: real('hourly_rate').default(0),
 isActive: integer('is_active', { mode: 'boolean' }).default(true),
 createdAt: integer('created_at', { mode: 'timestamp' }).defaultNow(),
});

export const transactions = sqliteTable('transactions', {
 id: integer('id').primaryKey({ autoIncrement: true }),
 date: text('date').notNull(), // YYYY-MM-DD
 time: text('time').notNull(), // HH:MM:SS
 productId: integer('product_id').references(() => products.id),
 productName: text('product_name').notNull(), // Denormalized for speed
 quantity: integer('quantity').default(1),
 unitPrice: real('unit_price').notNull(),
 totalAmount: real('total_amount').notNull(),
 costAmount: real('cost_amount').default(0), // quantity * product costPrice
 staffId: integer('staff_id').references(() => staff.id),
 staffName: text('staff_name'), // Denormalized
 paymentMethod: text('payment_method').default('cash'),
 createdAt: integer('created_at', { mode: 'timestamp' }).defaultNow(),
});

export const dailySummary = sqliteTable('daily_summary', {
 id: integer('id').primaryKey({ autoIncrement: true }),
 date: text('date').notNull().unique(), // YYYY-MM-DD
 totalRevenue: real('total_revenue').default(0),
 totalCost: real('total_cost').default(0),
 foodCost: real('food_cost').default(0),
 beverageCost: real('beverage_cost').default(0),
 laborCost: real('labor_cost').default(0),
 transactionCount: integer('transaction_count').default(0),
 avgTransactionValue: real('avg_transaction_value').default(0),
 healthScore: integer('health_score').default(0), // 0-100
 createdAt: integer('created_at', { mode: 'timestamp' }).defaultNow(),
});
```

### 2.3 Data Volume Estimates

| Table | Rows/Month | Rows/Year | Storage |
|-------|------------|-----------|---------|
| transactions | 3,000-10,000 | 36,000-120,000 | 5-20 MB |
| products | 20-100 | 20-100 | <1 MB |
| staff | 5-20 | 5-20 | <1 MB |
| daily_summary | 30 | 365 | <1 MB |
| **Total** |  -  |  -  | **<25 MB/year** |

---

## 3. Module Specifications

### 3.1 CSV Import Module

**Purpose:** Parse and import POS export CSV files

**Supported Formats:**
```
Required columns:
- date (YYYY-MM-DD or DD/MM/YYYY or MM/DD/YYYY)
- product_name OR item_name
- quantity
- unit_price OR price
- total OR total_amount

Optional columns:
- time (HH:MM:SS)
- staff_id OR cashier
- payment_method
```

**Implementation:**

```typescript
// lib/csv-importer.ts

import { parse } from 'papaparse';

interface CSVImportResult {
 success: boolean;
 rowsImported: number;
 rowsSkipped: number;
 errors: string[];
}

export async function importCSV(
 file: File,
 columnMapping: Record<string, string>
): Promise<CSVImportResult> {
 return new Promise((resolve, reject) => {
 parse(file, {
 header: true,
 skipEmptyLines: true,
 complete: async (results) => {
 const transactions = [];
 const errors = [];

 for (const row of results.data) {
 try {
 const transaction = mapRowToTransaction(row, columnMapping);
 transactions.push(transaction);
 } catch (e) {
 errors.push(`Row ${row}: ${e.message}`);
 }
 }

 // Batch insert to SQLite
 await db.insert(transactionsTable).values(transactions);

 // Recalculate daily summaries
 await recalculateDailySummaries();

 resolve({
 success: errors.length === 0,
 rowsImported: transactions.length,
 rowsSkipped: errors.length,
 errors,
 });
 },
 error: (error) => reject(error),
 });
 });
}
```

### 3.2 Metrics Calculation Engine

**Purpose:** Calculate all 30 base metrics from transaction data

**Core Calculations:**

```typescript
// lib/metrics-engine.ts

// Tab 1: Financial Health
export const financialMetrics = {
 totalRevenue: (transactions) =>
 transactions.reduce((sum, t) => sum + t.totalAmount, 0),

 grossProfit: (revenue, foodCost) =>
 revenue - foodCost,

 profitMarginPct: (grossProfit, revenue) =>
 revenue > 0 ? (grossProfit / revenue) * 100 : 0,

 primeCostPct: (foodCost, laborCost, revenue) =>
 revenue > 0 ? ((foodCost + laborCost) / revenue) * 100 : 0,

 foodCostPct: (foodCost, revenue) =>
 revenue > 0 ? (foodCost / revenue) * 100 : 0,

 avgTransactionValue: (revenue, transactionCount) =>
 transactionCount > 0 ? revenue / transactionCount : 0,
};

// Tab 2: Product Performance
export const productMetrics = {
 topSellers: (transactions, limit = 5) =>
 groupByProduct(transactions)
 .sort((a, b) => b.revenue - a.revenue)
 .slice(0, limit),

 bottomSellers: (transactions, limit = 5) =>
 groupByProduct(transactions)
 .sort((a, b) => a.revenue - b.revenue)
 .slice(0, limit),

 bcgMatrix: (transactions, products) => {
 const productData = groupByProduct(transactions);
 const avgRevenue = productData.reduce((s, p) => s + p.revenue, 0) / productData.length;
 const avgGrowth = calculateAvgGrowth(productData);

 return productData.map(p => ({
 ...p,
 quadrant: classifyBCG(p.revenue, p.growth, avgRevenue, avgGrowth),
 }));
 },
};

// Tab 3: Operations & Staff
export const operationsMetrics = {
 peakHoursHeatmap: (transactions) => {
 const heatmap = {};
 for (const t of transactions) {
 const hour = parseInt(t.time.split(':')[0]);
 const day = new Date(t.date).getDay();
 const key = `${day}-${hour}`;
 heatmap[key] = (heatmap[key] || 0) + t.totalAmount;
 }
 return heatmap;
 },

 staffSalesPerHour: (transactions, staff, shifts) => {
 // Calculate sales/hour per staff (neutral, no ranking)
 return staff.map(s => ({
 name: s.name,
 salesPerHour: calculateStaffSalesPerHour(s.id, transactions, shifts),
 }));
 },
};
```

### 3.3 Health Score Calculator

**Purpose:** Calculate composite business health score (0-100)

```typescript
// lib/health-score.ts

interface HealthScoreComponents {
 profitability: number; // 30 points max
 growth: number; // 25 points max
 staffEfficiency: number; // 25 points max
 customerRepeat: number; // 20 points max
}

export function calculateHealthScore(metrics: DailyMetrics): HealthScoreComponents {
 const profitability = calculateProfitabilityScore(
 metrics.profitMarginPct,
 metrics.primeCostPct
 );

 const growth = calculateGrowthScore(
 metrics.revenueVsTarget,
 metrics.weekOverWeekChange
 );

 const staffEfficiency = calculateStaffScore(
 metrics.avgTransactionValue,
 metrics.transactionsPerHour
 );

 const customerRepeat = calculateRepeatScore(
 metrics.repeatCustomerRate
 );

 return {
 profitability: Math.min(30, profitability),
 growth: Math.min(25, growth),
 staffEfficiency: Math.min(25, staffEfficiency),
 customerRepeat: Math.min(20, customerRepeat),
 };
}

// Color coding
export function getHealthColor(score: number): string {
 if (score >= 80) return 'green';
 if (score >= 60) return 'yellow';
 return 'red';
}
```

### 3.4 Alert System

**Purpose:** Trigger 5 pre-defined alerts

```typescript
// lib/alerts.ts

interface Alert {
 id: string;
 type: 'cash' | 'prime_cost' | 'revenue' | 'staff' | 'menu';
 severity: 'warning' | 'danger';
 message: string;
 messageId: string; // Bahasa Indonesia
}

export const alertRules = [
 {
 id: 'cash_low',
 check: (metrics) => metrics.cashPosition < metrics.twoWeekOperatingCost,
 message: 'Sistem mendeteksi kas menipis',
 severity: 'danger',
 },
 {
 id: 'prime_cost_high',
 check: (metrics) => metrics.primeCostPct > 65,
 message: 'Sistem mendeteksi Prime Cost melebihi 65%',
 severity: 'warning',
 },
 {
 id: 'revenue_down',
 check: (metrics) => metrics.monthOverMonthChange < -10,
 message: 'Sistem mendeteksi pendapatan turun >10%',
 severity: 'warning',
 },
 {
 id: 'staff_turnover',
 check: (metrics) => metrics.staffTurnoverRate > 20,
 message: 'Sistem mendeteksi pergantian staf tinggi',
 severity: 'warning',
 },
 {
 id: 'menu_dogs',
 check: (metrics) => metrics.dogRevenuePercentage > 25,
 message: 'Sistem mendeteksi >25% pendapatan dari menu kurang laku',
 severity: 'warning',
 },
];
```

---

## 4. UI/UX Specification

### 4.1 Screen Flow

```
|-----------------+
| Splash Screen |
| (2 seconds) |
|--------+---------
 |
 v
|-----------------+ |-----------------+
| PIN Entry |----▶| Onboarding | (first time only)
| (if set) | | (1 screen) |
|--------+--------- |--------+---------
 | |
 ▼ v
|-----------------------------------------+
| MAIN DASHBOARD |
|-----------------------------------------|
| |-----+ |-----+ |-----+ |-----+ |
| | Tab | | Tab | | Tab | |More | |
| | 1 | | 2 | | 3 | | | |
| |------ |------ |------ |------ |
| |
| Tab 1: Financial Health |
| Tab 2: Product Performance |
| Tab 3: Operations & Staff |
| More: Settings, Import, Export |
|------------------------------------------
```

### 4.2 Screen Specifications

#### 4.2.1 Main Dashboard - Tab 1: Financial Health

```
|--------------------------------------------------------+
| Kesehatan Bisnis [ [(TM)] |
|--------------------------------------------------------|
| |
| |--------------------------------------------------+ |
| | HEALTH SCORE [?] | |
| | |--------------------------------------------+ | |
| | | 78/100 | | |
| | | SEHAT | | |
| | |--------------------------------------------- | |
| |--------------------------------------------------- |
| |
| |------------------+ |------------------+ |
| | Pendapatan Hari | | vs Target | |
| | Ini | | | |
| | Rp 2.450.000 | | ▲ 12% [x] | |
| |------------------- |------------------- |
| |
| |--------------------------------------------------+ |
| | Tren 7 Hari [?] | |
| | [LINE CHART: Revenue trend] | |
| |--------------------------------------------------- |
| |
| |-------------+ |-------------+ |-------------+ |
| | Food Cost | | Prime Cost | | Profit | |
| | 31.2% [x] | | 58.4% [x] | | 18.5% | |
| |-------------- |-------------- |-------------- |
| |
|--------------------------------------------------------|
| [ Keuangan] [ Produk] [ Operasi] [⋯ Lainnya]|
|---------------------------------------------------------
```

#### 4.2.2 Main Dashboard - Tab 2: Product Performance

```
|--------------------------------------------------------+
| Performa Produk [ [(TM)] |
|--------------------------------------------------------|
| |
| |--------------------------------------------------+ |
| | BCG Matrix [?] | |
| | |--------------------------------------------+ | |
| | | [*] Star | - Question | | |
| | | Kopi Susu | Matcha Latte | | |
| | | Es Teh | | | |
| | |-------------------+-------------------------| | |
| | | Cash Cow | Dog | | |
| | | Nasi Goreng | Jus Wortel | | |
| | | Mie Ayam | Pudding Coklat | | |
| | |--------------------------------------------- | |
| |--------------------------------------------------- |
| |
| |--------------------------------------------------+ |
| | Top 5 Penjualan [?] | |
| | 1. Kopi Susu Rp 450.000 (18%) | |
| | 2. Nasi Goreng Rp 380.000 (15%) | |
| | 3. Es Teh Rp 320.000 (13%) | |
| | 4. Mie Ayam Rp 290.000 (12%) | |
| | 5. Ayam Geprek Rp 250.000 (10%) | |
| |--------------------------------------------------- |
| |
|--------------------------------------------------------|
| [ Keuangan] [ Produk] [ Operasi] [⋯ Lainnya]|
|---------------------------------------------------------
```

#### 4.2.3 Main Dashboard - Tab 3: Operations & Staff

```
|--------------------------------------------------------+
| Operasi & Staf [ [(TM)] |
|--------------------------------------------------------|
| |
| |--------------------------------------------------+ |
| | Jam Ramai (Heatmap) [?] | |
| | |--------------------------------------------+ | |
| | | Sen Sel Rab Kam Jum Sab Min | | |
| | | 08 --- --- --- --- --- --- --- | | |
| | | 09 --- --- --- --- --- --- --- | | |
| | | 10 --- --- --- --- --- --- --- | | |
| | | 11 --- --- --- --- --- --- --- | | |
| | | 12 --- --- --- --- --- --- --- | | |
| | | ... | | |
| | |--------------------------------------------- | |
| |--------------------------------------------------- |
| |
| |--------------------------------------------------+ |
| | Performa Shift (Perbandingan) [?] | |
| | |----------------------------------------------+ | |
| | | Shift Pagi | -–ˆ-–ˆ-–ˆ-–ˆ-–ˆ-–ˆ Rp 1.2M | | |
| | | Shift Siang | -–ˆ-–ˆ-–ˆ-–ˆ-–ˆ-–ˆ-–ˆ Rp 1.5M | | |
| | | Shift Malam | -–ˆ-–ˆ-–ˆ-–ˆ Rp 0.8M | | |
| | |----------------------------------------------- | |
| | ⓘ Perbandingan netral, bukan ranking | |
| |--------------------------------------------------- |
| |
|--------------------------------------------------------|
| [ Keuangan] [ Produk] [ Operasi] [⋯ Lainnya]|
|---------------------------------------------------------
```

### 4.3 Design System

**Colors:**
```css
:root {
 /* Primary */
 --primary: #2563EB; /* Blue 600 */
 --primary-hover: #1D4ED8; /* Blue 700 */

 /* Semantic */
 --success: #16A34A; /* Green 600 */
 --warning: #CA8A04; /* Yellow 600 */
 --danger: #DC2626; /* Red 600 */

 /* Neutral */
 --background: #FAFAFA; /* Gray 50 */
 --surface: #FFFFFF;
 --border: #E5E7EB; /* Gray 200 */
 --text-primary: #111827; /* Gray 900 */
 --text-secondary: #6B7280; /* Gray 500 */
}
```

**Typography:**
```css
/* Font Family: Inter (Google Fonts) */
--font-sans: 'Inter', sans-serif;

/* Sizes */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 2rem; /* 32px */
```

---

## 5. Security Specification

### 5.1 Authentication

**PIN-based Local Auth:**
```typescript
// lib/auth.ts

import bcrypt from 'bcryptjs';

export async function setPin(pin: string): Promise<void> {
 const hash = await bcrypt.hash(pin, 10);
 await db.update(settings).set({ pinHash: hash });
}

export async function verifyPin(pin: string): Promise<boolean> {
 const [setting] = await db.select().from(settings).limit(1);
 if (!setting?.pinHash) return true; // No PIN set
 return bcrypt.compare(pin, setting.pinHash);
}
```

### 5.2 Data Protection

| Threat | Mitigation |
|--------|------------|
| **Data theft (device stolen)** | PIN protection, no cloud = no remote access |
| **Data corruption** | Daily auto-backup to user's Documents folder |
| **Data loss** | Export to CSV/Excel anytime |
| **Unauthorized access** | PIN lockout after 5 failed attempts |

### 5.3 Privacy

**No Cloud = No Tracking:**
- No telemetry sent without explicit opt-in
- All data stored locally in `%APPDATA%/web-dashboard-lite/`
- User explicitly controls any cloud sync (Phase 2+)

---

## 6. Testing Strategy

### 6.1 Test Layers

| Layer | Tools | Coverage Target |
|-------|-------|-----------------|
| **Unit Tests** | Vitest | 80% functions |
| **Integration Tests** | Vitest + SQLite in-memory | DB queries |
| **Component Tests** | Testing Library | 70% components |
| **E2E Tests** | Playwright | Critical paths |

### 6.2 Critical Test Scenarios

```typescript
// tests/metrics.test.ts

describe('Metrics Calculation Engine', () => {
 it('calculates food cost percentage correctly', () => {
 const result = financialMetrics.foodCostPct(320000, 1000000);
 expect(result).toBe(32);
 });

 it('handles zero revenue gracefully', () => {
 const result = financialMetrics.foodCostPct(0, 0);
 expect(result).toBe(0);
 });

 it('classifies products into BCG quadrants', () => {
 const products = [
 { name: 'Kopi', revenue: 500000, growth: 0.2 },
 { name: 'Jus', revenue: 50000, growth: -0.1 },
 ];
 const result = productMetrics.bcgMatrix(products);
 expect(result[0].quadrant).toBe('star');
 expect(result[1].quadrant).toBe('dog');
 });
});
```

### 6.3 E2E Test Scenarios

| Scenario | Steps | Expected Result |
|----------|-------|-----------------|
| **First Launch** | Open app  ->  Complete onboarding | Dashboard shows with empty state |
| **CSV Import** | Tab  ->  Import  ->  Select file  ->  Confirm | Data visible in dashboard |
| **View Metrics** | Navigate tabs | All 30 metrics display correctly |
| **Health Score** | Import data  ->  View score | Score 0-100, color-coded |
| **Export Data** | Tab  ->  Export  ->  CSV | File saved to Downloads |

---

## 7. Build & Deployment

### 7.1 Build Configuration

```json
// package.json (partial)
{
 "scripts": {
 "dev": "next dev",
 "build": "next build && next export",
 "electron": "electron .",
 "package:win": "electron-builder --win",
 "package:mac": "electron-builder --mac"
 }
}
```

### 7.2 Electron Configuration

```javascript
// electron/main.js

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
 const win = new BrowserWindow({
 width: 1024,
 height: 768,
 minWidth: 800,
 minHeight: 600,
 webPreferences: {
 nodeIntegration: true,
 contextIsolation: false,
 },
 icon: path.join(__dirname, 'icon.png'),
 });

 // Load the Next.js static export
 win.loadFile(path.join(__dirname, '../out/index.html'));
}

app.whenReady().then(createWindow);
```

### 7.3 Distribution

| Platform | Format | Size | Auto-Update |
|----------|--------|------|-------------|
| **Windows** | .exe (NSIS installer) | ~80 MB | No (Phase 2) |
| **macOS** | .dmg | ~100 MB | No (Phase 2) |

---

## 8. Development Timeline

| Week | Tasks | Deliverables |
|------|-------|--------------|
| **Week 1** | Setup project, DB schema, CSV import | Skeleton app with import |
| **Week 2** | Metrics engine, Tab 1 UI | Financial Health tab working |
| **Week 3** | Tab 2 + Tab 3 UI, Health Score | All tabs functional |
| **Week 4** | Polish, alerts, testing, packaging | Installable .exe for testing |

---

## 9. File Structure

```
web-dashboard-lite/
|-- electron/
| |-- main.js # Electron main process
| |-- preload.js # Preload scripts
| |-- icon.png # App icon
|-- src/
| |-- app/ # Next.js app router
| | |-- layout.tsx
| | |-- page.tsx
| | |-- (tabs)/
| | |-- financial/
| | |-- products/
| | |-- operations/
| |-- components/
| | |-- ui/ # shadcn/ui components
| | |-- charts/ # Recharts wrappers
| | |-- dashboard/ # Dashboard-specific
| |-- lib/
| | |-- db.ts # Drizzle config
| | |-- schema.ts # DB schema
| | |-- metrics-engine.ts # Calculations
| | |-- csv-importer.ts # CSV parsing
| | |-- health-score.ts # Score calculation
| | |-- alerts.ts # Alert rules
| |-- store/
| | |-- useStore.ts # Zustand store
| |-- styles/
| |-- globals.css # Tailwind config
|-- database/
| |-- data.db # SQLite database
|-- package.json
|-- drizzle.config.ts
|-- tailwind.config.js
|-- next.config.js
```

---

## 10. Error Handling Matrix

### 10.1 CSV Import Errors

| Error Code | Scenario | User Message (Bahasa) | Recovery Action |
|------------|----------|----------------------|-----------------|
| **CSV-001** | File too large (>10MB) | "File terlalu besar. Maksimum 10MB." | Prompt to split file |
| **CSV-002** | Invalid file format | "Format file tidak valid. Gunakan CSV." | Show file requirements |
| **CSV-003** | Missing required columns | "Kolom wajib tidak ditemukan: [columns]" | Show column mapping UI |
| **CSV-004** | Date format unrecognized | "Format tanggal tidak dikenali di baris [X]" | Skip row, log error |
| **CSV-005** | Negative price/quantity | "Harga/jumlah negatif di baris [X]" | Skip row, log error |
| **CSV-006** | Duplicate transactions | "[X] transaksi duplikat ditemukan" | Option to skip or import |
| **CSV-007** | Empty file | "File kosong" | Prompt to select valid file |
| **CSV-008** | Encoding issues (non-UTF8) | "Encoding file tidak didukung" | Suggest UTF-8 conversion |

**User Flow for CSV-003 (Critical):**
```
1. Detect missing columns
2. Show column mapping interface:
 |------------------------------------+
 | Map CSV Columns |
 |------------------------------------|
 | Your CSV  ->  Our System |
 | "tanggal"  ->  [date v] |
 | "produk"  ->  [product_name v] |
 | "harga"  ->  [unit_price v] |
 | "total"  ->  [total_amount v] |
 |-------------------------------------
3. Save mapping for future imports
4. Retry import
```

### 10.2 Database Errors

| Error Code | Scenario | User Message | Recovery Action |
|------------|----------|--------------|-----------------|
| **DB-001** | Database locked | "Database sedang digunakan. Coba lagi." | Retry after 1s (3x max) |
| **DB-002** | Disk full | "Ruang penyimpanan penuh" | Prompt to free space |
| **DB-003** | Corrupted database | "Database rusak. Restore backup?" | Offer last backup restore |
| **DB-004** | Migration failed | "Update gagal. Rollback?" | Rollback to previous version |
| **DB-005** | Foreign key violation | "Data tidak konsisten. Perbaiki?" | Auto-fix orphaned records |

**Auto-Backup Strategy:**
- Daily backup at app close
- Keep last 7 backups
- Location: `%USERPROFILE%\Documents\WebDashboardLite\Backups\`
- Naming: `backup-YYYY-MM-DD.db`

### 10.3 Calculation Errors

| Error Code | Scenario | Fallback Behavior |
|------------|----------|-------------------|
| **CALC-001** | Division by zero | Return 0, don't crash |
| **CALC-002** | Missing product cost | Use sell price Ã—0.3 estimate |
| **CALC-003** | Negative margin | Show as-is, flag as "Periksa" |
| **CALC-004** | NaN result | Show " - " instead of number |

### 10.4 UI/UX Errors

| Error Code | Scenario | User Message | UX Behavior |
|------------|----------|--------------|-------------|
| **UI-001** | No data available | "Belum ada data. Import CSV untuk mulai." | Show empty state with CTA |
| **UI-002** | Chart render fail | "Gagal menampilkan grafik" | Show table fallback |
| **UI-003** | PIN lockout (5 fails) | "Terlalu banyak percobaan. Tunggu 15 menit." | Disable PIN entry for 15min |
| **UI-004** | App crash | "Terjadi kesalahan. Restart aplikasi?" | Auto-restart option |

### 10.5 Export Errors

| Error Code | Scenario | User Message | Recovery |
|------------|----------|--------------|----------|
| **EXP-001** | Write permission denied | "Tidak bisa menyimpan. Pilih lokasi lain." | Show file picker |
| **EXP-002** | Export too large | "Export melebihi 50MB. Batasi tanggal?" | Offer date filter |

---

## 11. Performance Benchmarks

### 11.1 Target Performance Metrics

| Operation | Target | Max Acceptable | Breach Action |
|-----------|--------|----------------|---------------|
| **App Launch** | <3s | <5s | Optimize startup |
| **CSV Import (1K rows)** | <2s | <5s | Add progress bar |
| **CSV Import (10K rows)** | <10s | <20s | Batch processing |
| **CSV Import (100K rows)** | <60s | <120s | Background job |
| **Dashboard Load** | <500ms | <1s | Lazy load tabs |
| **Tab Switch** | <200ms | <500ms | Preload adjacent tabs |
| **Chart Render** | <300ms | <800ms | Simplified viz |
| **Database Query** | <100ms | <500ms | Index optimization |
| **Health Score Calc** | <50ms | <200ms | Cache result |
| **Export (CSV)** | <1s | <3s | Stream to file |
| **Export (PDF)** | <3s | <10s | Reduce resolution |

### 11.2 Data Volume Limits

| Metric | Soft Limit | Hard Limit | User Warning |
|--------|------------|------------|--------------|
| **Transactions (total)** | 100,000 | 250,000 | "Data banyak. Pertimbangkan arsip." |
| **Transactions (per import)** | 10,000 | 50,000 | "Import terlalu besar. Pecah file?" |
| **Products** | 100 | 500 | No warning |
| **Staff** | 20 | 100 | No warning |
| **Database Size** | 25 MB | 100 MB | "Database besar. Export lama data?" |
| **CSV File Size** | 5 MB | 10 MB | "File besar. Impor lama." |

### 11.3 Memory Usage Targets

| State | Target RAM | Max RAM | Action if Exceeded |
|-------|------------|---------|---------------------|
| **Idle** | <100 MB | <200 MB | OK |
| **Importing CSV** | <200 MB | <400 MB | Stream processing |
| **Rendering Charts** | <150 MB | <300 MB | Simplify visuals |
| **Peak Usage** | <250 MB | <500 MB | Garbage collect |

**Optimization Strategies:**
- Virtualized lists for 1000+ items
- Debounced chart updates (300ms)
- Lazy load chart data
- SQL prepared statements
- Index on `transactions.date`
- Index on `transactions.productId`

### 11.4 Benchmark Test Suite

```typescript
// tests/performance.test.ts

describe('Performance Benchmarks', () => {
 it('imports 1K transactions in <2s', async () => {
 const start = Date.now();
 await importCSV(generate1KTransactions());
 const duration = Date.now() - start;
 expect(duration).toBeLessThan(2000);
 });

 it('calculates health score in <50ms', async () => {
 const start = Date.now();
 await calculateHealthScore(getDailyMetrics());
 const duration = Date.now() - start;
 expect(duration).toBeLessThan(50);
 });

 it('renders dashboard in <500ms', async () => {
 const start = Date.now();
 render(<Dashboard />);
 await waitFor(() => screen.getByText(/Kesehatan Bisnis/));
 const duration = Date.now() - start;
 expect(duration).toBeLessThan(500);
 });
});
```

### 11.5 Performance Monitoring

**Telemetry (Opt-in):**
```typescript
// lib/telemetry.ts (user must opt-in)

export function trackPerformance(metric: string, duration: number) {
 if (!userHasOptedIn()) return;

 // Log locally for review
 appendToLog({
 timestamp: Date.now(),
 metric,
 duration,
 threshold: THRESHOLDS[metric],
 isSlowQuery: duration > THRESHOLDS[metric],
 });
}
```

---

## 12. Data Migration Strategy

### 12.1 Schema Versioning

**Version Format:** `MAJOR.MINOR`
- **1.0**  -  Initial release (Sprint 1)
- **1.1**  -  Minor schema change (add column)
- **2.0**  -  Breaking change (remove column)

**Migration Files:**
```
migrations/
|-- 001-initial-schema.sql
|-- 002-add-cost-amount-column.sql
|-- 003-daily-summary-indexes.sql
```

### 12.2 Migration Flow

```typescript
// lib/migrations.ts

const CURRENT_SCHEMA_VERSION = '1.0';

export async function runMigrations() {
 const dbVersion = await getDbVersion();

 if (dbVersion === CURRENT_SCHEMA_VERSION) {
 return; // Already up-to-date
 }

 const migrationsToRun = getMigrationsBetween(dbVersion, CURRENT_SCHEMA_VERSION);

 for (const migration of migrationsToRun) {
 try {
 await db.exec(migration.sql);
 console.log(`[x] Applied migration: ${migration.name}`);
 } catch (error) {
 console.error(`[x] Failed migration: ${migration.name}`);
 throw new Error('Migration failed. Rolling back...');
 }
 }

 await setDbVersion(CURRENT_SCHEMA_VERSION);
}
```

### 12.3 Lite  ->  SaaS Migration (Sprint 3)

**Export Format:**
```json
{
 "version": "1.0",
 "exportDate": "2025-12-26",
 "businessName": "Warung Kopi Budi",
 "data": {
 "transactions": [...],
 "products": [...],
 "staff": [...]
 }
}
```

**Import to C1 SaaS:**
1. User clicks "Upgrade ke Full SaaS"
2. Generate export JSON
3. Upload to C1 import endpoint
4. C1 validates and imports
5. User accesses C1 with same data

---

**Last Updated:** December 26, 2025
**Owner:** Development Team
**Status:** Draft - Pending Review

