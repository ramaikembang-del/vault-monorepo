# Technical Specification - Simple P&L Tracker

**Product:** R2a - Simple P&L Tracker
**Version:** 1.0
**Tech Stack:** Node.js, PostgreSQL, React
**Deployment:** Cloud (AWS/GCP), Docker containers

---

## System Architecture

### High-Level Architecture
```
[Client - React Web App]
 ↓
[API Gateway - Node.js Express]
 ↓
[Business Logic Layer]
 ↓ ↓
[DB: PostgreSQL] [File Storage: S3]
```

**Components:**
1. **Frontend:** React SPA (mobile-responsive)
2. **Backend API:** Node.js + Express
3. **Database:** PostgreSQL (revenue, expenses, P&L)
4. **File Storage:** AWS S3 (CSV files, receipt photos, PDF exports)
5. **Email Service:** SendGrid (P&L auto-send)

---

## Database Schema

### Table: `users`
```sql
CREATE TABLE users (
 user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 email VARCHAR(255) UNIQUE NOT NULL,
 business_name VARCHAR(255),
 created_at TIMESTAMP DEFAULT NOW(),
 subscription_tier VARCHAR(50) -- 'basic', 'standard', 'premium'
);
```

### Table: `revenue_transactions`
```sql
CREATE TABLE revenue_transactions (
 transaction_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id UUID REFERENCES users(user_id),
 date DATE NOT NULL,
 amount DECIMAL(15,2) NOT NULL,
 category VARCHAR(50), -- 'dine_in', 'takeaway', 'delivery', 'other'
 payment_method VARCHAR(50),
 source_pos VARCHAR(50), -- 'moka', 'pawoon', 'qasir', etc.
 created_at TIMESTAMP DEFAULT NOW(),
 INDEX idx_user_date (user_id, date)
);
```

### Table: `expenses`
```sql
CREATE TABLE expenses (
 expense_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id UUID REFERENCES users(user_id),
 date DATE NOT NULL,
 amount DECIMAL(15,2) NOT NULL,
 category VARCHAR(50), -- 'cogs', 'labor', 'rent', etc. (10 categories)
 description TEXT,
 receipt_url VARCHAR(500),
 created_at TIMESTAMP DEFAULT NOW(),
 INDEX idx_user_date_category (user_id, date, category)
);
```

### Table: `pl_reports`
```sql
CREATE TABLE pl_reports (
 report_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id UUID REFERENCES users(user_id),
 month DATE NOT NULL, -- first day of month
 total_revenue DECIMAL(15,2),
 cogs DECIMAL(15,2),
 gross_profit DECIMAL(15,2),
 total_opex DECIMAL(15,2),
 net_profit DECIMAL(15,2),
 pdf_url VARCHAR(500),
 created_at TIMESTAMP DEFAULT NOW(),
 INDEX idx_user_month (user_id, month)
);
```

---

## API Endpoints

### Revenue Endpoints

**POST /api/revenue/import-csv**
- Upload CSV file from POS
- Auto-detect POS format, parse, insert to`revenue_transactions`
- Returns: `{ success: true, imported_count: 234, date_range: "2025-12-01 to 2025-12-25" }`

**GET /api/revenue/summary?month=2025-12**
- Get monthly revenue summary
- Returns: `{ total_revenue, revenue_by_category, mom_change_pct, daily_avg }`

---

### Expense Endpoints

**POST /api/expenses**
- Create new expense entry
- Body: `{ amount, category, description, date, receipt_file }`
- Returns: `{ expense_id, success: true }`

**POST /api/expenses/bulk-upload**
- Upload CSV with historical expenses
- Validates, previews, imports
- Returns: `{ success: true, imported_count: 142 }`

**GET /api/expenses?month=2025-12**
- Get expenses for month
- Returns: `[ { expense_id, amount, category, description, date } ]`

---

### P&L Endpoints

**POST /api/pl/generate?month=2025-12**
- Generate P&L report for month
- Calculates: revenue, COGS, gross profit, OpEx, net profit
- Stores in `pl_reports` table
- Returns: `{ report_id, total_revenue, cogs, net_profit, ... }`

**GET /api/pl/export-pdf/:report_id**
- Export P&L as PDF (SAK EMKM format)
- Returns: PDF file download

**GET /api/pl/export-excel/:report_id**
- Export P&L as Excel
- Returns: XLSX file download

**POST /api/pl/email-accountant**
- Email P&L PDF to accountant
- Body: `{ report_id, accountant_email }`
- Returns: `{ success: true, email_sent: true }`

---

## POS CSV Format Detection

### Auto-Detection Logic

**Moka Format:**
```csv
Tanggal,Total,Metode Pembayaran,Tipe Transaksi
2025-12-01,50000,Cash,Dine-in
```
**Detection:** Header contains "Tanggal", "Total", "Metode Pembayaran"

**Pawoon Format:**
```csv
Date,Amount,Payment,Type
2025-12-01,50000,Cash,Dine-in
```
**Detection:** Header contains "Date", "Amount", "Payment"

**Qasir Format:**
```csv
transaction_date,total_amount,payment_method,order_type
2025-12-01,50000,cash,dine_in
```
**Detection:** Header contains "transaction_date", "total_amount"

**Column Mapping:**
```javascript
const POS_MAPPINGS = {
 moka: { date: 'Tanggal', amount: 'Total', payment: 'Metode Pembayaran', type: 'Tipe Transaksi' },
 pawoon: { date: 'Date', amount: 'Amount', payment: 'Payment', type: 'Type' },
 qasir: { date: 'transaction_date', amount: 'total_amount', payment: 'payment_method', type: 'order_type' }
};
```

**Auto-Selection:**
1. Read CSV header row
2. Match against POS_MAPPINGS
3. If 3+ columns match → Select POS format
4. Apply column mapping, parse rows

---

## P&L Calculation Engine

### Monthly P&L Generation

**Step 1: Aggregate Revenue**
```sql
SELECT
 SUM(amount) FILTER (WHERE category = 'dine_in') AS dine_in_revenue,
 SUM(amount) FILTER (WHERE category = 'takeaway') AS takeaway_revenue,
 SUM(amount) FILTER (WHERE category = 'delivery') AS delivery_revenue,
 SUM(amount) FILTER (WHERE category = 'other') AS other_revenue,
 SUM(amount) AS total_revenue
FROM revenue_transactions
WHERE user_id = ? AND date >= '2025-12-01' AND date <= '2025-12-31';
```

**Step 2: Aggregate Expenses**
```sql
SELECT
 SUM(amount) FILTER (WHERE category = 'cogs') AS cogs,
 SUM(amount) FILTER (WHERE category = 'labor') AS labor,
 SUM(amount) FILTER (WHERE category = 'rent') AS rent,
 -- ... (all 10 categories)
 SUM(amount) - SUM(amount) FILTER (WHERE category = 'cogs') AS total_opex
FROM expenses
WHERE user_id = ? AND date >= '2025-12-01' AND date <= '2025-12-31';
```

**Step 3: Calculate P&L**
```javascript
const pl = {
 total_revenue: revenue.total,
 cogs: expenses.cogs,
 gross_profit: revenue.total - expenses.cogs,
 gross_profit_pct: ((revenue.total - expenses.cogs) / revenue.total) * 100,
 total_opex: expenses.total_opex,
 net_profit: (revenue.total - expenses.cogs) - expenses.total_opex,
 net_profit_pct: (((revenue.total - expenses.cogs) - expenses.total_opex) / revenue.total) * 100
};
```

---

## PDF Generation (SAK EMKM Format)

**Library:** PDFKit (Node.js)

**Template Structure:**
```

 [Company Logo] LAPORAN LABA RUGI
 Periode: Desember 2025

 PENDAPATAN
 Dine-in Rp 15,000,000
 Takeaway Rp 8,000,000
 Delivery Rp 5,000,000
 Lainnya Rp 2,000,000

 Total Rp 30,000,000

 HARGA POKOK PENJUALAN
 Bahan Baku Rp 9,000,000 (30%)

 Laba Kotor Rp 21,000,000 (70%)

 [... OpEx breakdown ...]

 LABA BERSIH Rp 9,000,000 (30%)

 Prepared by: [System]
 Date: 2025-12-31
 Signature: _____________

```

**Code (Simplified):**
```javascript
async function generatePDF(plData) {
 const doc = new PDFDocument();
 doc.fontSize(18).text('LAPORAN LABA RUGI', { align: 'center' });
 doc.fontSize(12).text(`Periode: ${plData.month}`);
 // ... add revenue section
 // ... add COGS section
 // ... add OpEx section
 // ... add net profit
 doc.end();
 return doc; // Stream to S3
}
```

---

## Performance Optimization

### Database Indexing
```sql
-- Speed up monthly queries
CREATE INDEX idx_revenue_user_date ON revenue_transactions(user_id, date);
CREATE INDEX idx_expenses_user_date ON expenses(user_id, date);

-- Speed up category aggregations
CREATE INDEX idx_revenue_category ON revenue_transactions(user_id, date, category);
CREATE INDEX idx_expenses_category ON expenses(user_id, date, category);
```

### Caching Strategy
- **P&L Reports:** Cache for 24 hours (immutable past months)
- **Monthly Summary:** Cache for 1 hour (current month changes)
- **CSV Imports:** No cache (real-time processing)

---

## Security

### Authentication
- JWT tokens (1 month expiry)
- Refresh tokens (6 months)

### Authorization
- User can only access own revenue/expenses/reports
- Row-level security: `WHERE user_id = current_user_id`

### Data Encryption
- SSL/TLS in transit
- AES-256 encryption at rest (database, S3)

### Input Validation
- CSV upload: Max 10MB, virus scan (ClamAV)
- Expense amount: Max Rp 1B (prevent typos)
- Receipt upload: Max 5MB, image formats only

---

## Scalability

**Current Scale:**
- 1,000 users
- 100K transactions/month
- 10K expenses/month

**Database:** PostgreSQL (managed RDS)
**Horizontal Scaling:** Add read replicas for reporting
**Vertical Scaling:** Upgrade DB instance (t3.medium → t3.large)

---

**Related Documents:**
- [[feature-spec|feature-spec.md]] - Feature requirements
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/R2a-pl-analytics|../]] - Product overview

**Last Updated:** 2025-12-26
**Owner:** Engineering Lead

