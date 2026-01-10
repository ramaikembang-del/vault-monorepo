# POS Integration Specification - E1 Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Last Updated:** 2025-12-28
**Version:** 1.0
**Status:** Technical Specification

---

## 1. Overview

### 1.1 Integration Architecture

**E1 Integration Model: Offline-First CSV Import**

```
|---------------------+
| POS System |
| (Moka, Qasir, etc) |
|----------+-----------
 |
 | (1) User exports sales data
 |
 v
 |--------------+
 | CSV File |
 | (local disk)|
 |------+--------
 |
 | (2) User uploads to E1
 |
 v
|--------------------------+
| E1 Electron App |
| - CSV Parser |
| - Data Validator |
| - Schema Mapper |
| - SQLite Importer |
|----------+----------------
 |
 | (3) Processed data stored
 |
 v
 |--------------+
 | SQLite DB |
 | (local) |
 |---------------
```

**Why CSV Import (Not Real-Time API)?**
1. **Offline-First:** Works without internet, crucial for Indonesia's unreliable connectivity
2. **POS-Agnostic:** No vendor lock-in (works with any POS that exports CSV)
3. **No API Keys:** Simpler setup (no OAuth, no API credentials)
4. **Lower Cost:** No API rate limits, no third-party fees
5. **User Control:** User controls when/what data to import

**Future Roadmap (2025):**
- Q3 2025: Real-time API integration with Moka, Qasir, Pawoon
- Q4 2025: Webhook support for auto-sync

---

## 2. Supported POS Systems

### 2.1 Officially Supported (One-Click Presets)

| POS System | Market Share (Indonesia) | CSV Export | Auto-Detect | Status |
|------------|-------------------------|------------|-------------|---------|
| **Moka POS** | ~30% | [x] Yes | [x] Yes | [x] Supported |
| **Qasir** | ~25% | [x] Yes | [x] Yes | [x] Supported |
| **Pawoon** | ~20% | [x] Yes | [x] Yes | [x] Supported |
| **BukuWarung** | ~10% | [x] Yes |  In Progress | Beta |
| **Olsera** | ~5% | [x] Yes |  In Progress | Beta |
| **Custom/Other** | ~10% | [x] Manual mapping | [x] No | [x] Supported (manual) |

**Market Coverage:** 90%+ of Indonesian F&B POS market

### 2.2 CSV Export Requirements

**Minimum Required Fields:**
- **Date:** Transaction date (YYYY-MM-DD or DD/MM/YYYY)
- **Time:** Transaction time (HH:MM:SS or HH:MM)
- **Amount:** Transaction total (numeric, Rupiah)

**Optional Fields (Enhance Analytics):**
- Product Name
- Product Category
- Payment Method (Cash, Debit, Credit, E-Wallet)
- Quantity
- Unit Price
- Discount
- Tax
- Cashier/Waiter ID
- Customer ID (for return rate analysis)
- Location (for multi-outlet)

**File Format:**
- UTF-8 encoding (supports Indonesian characters)
- CSV, TSV, or Excel (.xlsx, .xls)
- Maximum file size: 10 MB (Free), 100 MB (Starter), 500 MB (Pro)

---

## 3. POS-Specific CSV Formats

### 3.1 Moka POS

**CSV Structure:**
```csv
Transaction ID,Date,Time,Product,Category,Qty,Price,Total,Payment Method,Cashier
TRX001,2025-01-15,14:30:25,Nasi Goreng,Food,1,25000,25000,Cash,Budi
TRX002,2025-01-15,14:45:10,Es Teh,Beverage,2,5000,10000,GoPay,Siti
```

**Column Mapping:**
- Date  ->  `transaction_date`
- Time  ->  `transaction_time`
- Total  ->  `amount`
- Product  ->  `product_name`
- Category  ->  `product_category`
- Payment Method  ->  `payment_method`
- Cashier  ->  `cashier_id`

**Special Handling:**
- Date format: YYYY-MM-DD (ISO 8601)
- Time format: HH:MM:SS (24-hour)
- Amount: Integer (no decimal, Rupiah doesn't use cents)
- Payment Method: Maps to standard categories (Cash, Debit, Credit, E-Wallet)

**Auto-Detection Signature:**
- Column 1 name contains "Transaction ID"
- Column 2 name exactly "Date"
- Column 9 name exactly "Payment Method"

### 3.2 Qasir POS

**CSV Structure:**
```csv
No,Tanggal,Waktu,Produk,Kategori,Jumlah,Harga,Total Pembayaran,Metode Bayar,Kasir
1,15/01/2025,14:30,Kopi Susu,Minuman,1,15000,15000,Tunai,Andi
2,15/01/2025,14:50,Roti Bakar,Makanan,2,12000,24000,Kartu Debit,Rina
```

**Column Mapping (Bahasa Indonesia):**
- Tanggal  ->  `transaction_date` (convert DD/MM/YYYY  ->  YYYY-MM-DD)
- Waktu  ->  `transaction_time`
- Total Pembayaran  ->  `amount`
- Produk  ->  `product_name`
- Kategori  ->  `product_category`
- Metode Bayar  ->  `payment_method`
- Kasir  ->  `cashier_id`

**Special Handling:**
- Date format: DD/MM/YYYY (convert to ISO 8601)
- Payment Method: "Tunai"  ->  Cash, "Kartu Debit"  ->  Debit, "Kartu Kredit"  ->  Credit, "E-Wallet"  ->  E-Wallet

**Auto-Detection Signature:**
- Column 2 name = "Tanggal" (Indonesian for Date)
- Column 8 name = "Total Pembayaran" (Total Payment)
- Column 9 name = "Metode Bayar" (Payment Method)

### 3.3 Pawoon POS

**CSV Structure:**
```csv
ID Transaksi,Tanggal & Waktu,Item,Kategori,Qty,Harga Satuan,Diskon,Pajak,Total,Pembayaran,Staff
P001,15-01-2025 14:35,Ayam Goreng,Main Course,1,28000,0,2800,30800,Cash,Dedi
P002,15-01-2025 15:00,Jus Jeruk,Drinks,1,12000,1200,1200,12000,OVO,Lina
```

**Column Mapping:**
- Tanggal & Waktu  ->  `transaction_date` + `transaction_time` (split combined field)
- Total  ->  `amount`
- Item  ->  `product_name`
- Kategori  ->  `product_category`
- Pembayaran  ->  `payment_method`
- Staff  ->  `cashier_id`

**Special Handling:**
- Date/Time combined: "15-01-2025 14:35"  ->  Split into date (2025-01-15) and time (14:35:00)
- Date format: DD-MM-YYYY (convert to ISO 8601)
- Discount/Tax: Optional, used for gross margin calculation (Pro tier)

**Auto-Detection Signature:**
- Column 2 name = "Tanggal & Waktu" (combined date/time)
- Column 10 name = "Pembayaran" (Payment)
- Date/Time format includes dash separator (DD-MM-YYYY HH:MM)

### 3.4 BukuWarung (Beta)

**CSV Structure:**
```csv
Nomor,Waktu,Produk,Kategori,Jumlah,Harga,Total,Bayar,Kasir
1,2025-01-15 14:40:30,Mie Goreng,Noodles,1,20000,20000,Tunai,Budi
2,2025-01-15 15:10:15,Teh Manis,Drinks,2,5000,10000,GoPay,Siti
```

**Column Mapping:**
- Waktu  ->  `transaction_date` + `transaction_time` (split combined timestamp)
- Total  ->  `amount`
- Produk  ->  `product_name`
- Kategori  ->  `product_category`
- Bayar  ->  `payment_method`
- Kasir  ->  `cashier_id`

**Special Handling:**
- Timestamp format: YYYY-MM-DD HH:MM:SS (ISO 8601, already correct format)
- Payment Method: "Tunai"  ->  Cash

**Auto-Detection Signature:**
- Column 2 name = "Waktu" (Time/Timestamp)
- Column 8 name = "Bayar" (Payment)
- Timestamp format is ISO 8601 (YYYY-MM-DD HH:MM:SS)

### 3.5 Custom/Other POS

**Manual Mapping UI:**
```
|--------------------------------------------+
| CSV Column Mapper |
|--------------------------------------------|
| Your CSV Column  ->  E1 Field |
| ------------------- --------------- |
| [Date v]  ->  Transaction Date |
| [Time v]  ->  Transaction Time |
| [Total Amount v]  ->  Amount |
| [Product v]  ->  Product Name |
| [Payment v]  ->  Payment Method |
| |
| Preview: 5/5 rows mapped successfully [x] |
| [Cancel] [Import Data] |
|---------------------------------------------
```

**User Experience:**
1. Upload CSV file
2. E1 displays first 5 rows (preview)
3. User manually maps columns (dropdown menus)
4. E1 validates mapping (shows preview)
5. User confirms import

**Validation:**
- At least 3 required fields mapped (Date, Time, Amount)
- Date format auto-detected or user specifies
- Amount column contains numeric values only

---

## 4. CSV Parsing Logic

### 4.1 Auto-Detection Algorithm

**Step 1: File Format Detection**
```javascript
function detectFileFormat(file) {
 const extension = file.name.split('.').pop().toLowerCase();

 if (extension === 'csv') return 'CSV';
 if (extension === 'tsv' || extension === 'txt') return 'TSV';
 if (extension === 'xlsx' || extension === 'xls') return 'Excel';

 // Default to CSV if unknown
 return 'CSV';
}
```

**Step 2: Encoding Detection**
```javascript
function detectEncoding(buffer) {
 // Check for BOM (Byte Order Mark)
 if (buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
 return 'UTF-8'; // UTF-8 with BOM
 }

 // Try UTF-8 (most common for Indonesian POS)
 try {
 const text = new TextDecoder('utf-8', { fatal: true }).decode(buffer);
 return 'UTF-8';
 } catch {
 // Fallback to Windows-1252 (some older POS systems)
 return 'Windows-1252';
 }
}
```

**Step 3: POS System Auto-Detection**
```javascript
function detectPOSSystem(headers) {
 // Moka POS signature
 if (headers.includes('Transaction ID') &&
 headers.includes('Date') &&
 headers.includes('Payment Method')) {
 return 'Moka';
 }

 // Qasir signature (Indonesian headers)
 if (headers.includes('Tanggal') &&
 headers.includes('Total Pembayaran') &&
 headers.includes('Metode Bayar')) {
 return 'Qasir';
 }

 // Pawoon signature (combined date/time)
 if (headers.includes('Tanggal & Waktu') &&
 headers.includes('Pembayaran')) {
 return 'Pawoon';
 }

 // BukuWarung signature
 if (headers.includes('Waktu') &&
 headers.includes('Bayar') &&
 headers[0] === 'Nomor') {
 return 'BukuWarung';
 }

 // Unknown/Custom
 return 'Custom';
}
```

**Step 4: Column Mapping**
```javascript
function mapColumns(posSystem, headers) {
 const mappings = {
 'Moka': {
 transaction_date: 'Date',
 transaction_time: 'Time',
 amount: 'Total',
 product_name: 'Product',
 product_category: 'Category',
 payment_method: 'Payment Method',
 cashier_id: 'Cashier'
 },
 'Qasir': {
 transaction_date: 'Tanggal',
 transaction_time: 'Waktu',
 amount: 'Total Pembayaran',
 product_name: 'Produk',
 product_category: 'Kategori',
 payment_method: 'Metode Bayar',
 cashier_id: 'Kasir'
 },
 // ... other POS mappings
 };

 return mappings[posSystem] || {}; // Empty object if Custom (user maps manually)
}
```

### 4.2 Date/Time Parsing

**Supported Date Formats (Auto-Detect):**
- ISO 8601: `2025-01-15` (YYYY-MM-DD)
- Indonesian: `15/01/2025` (DD/MM/YYYY)
- Indonesian alt: `15-01-2025` (DD-MM-YYYY)
- US format: `01/15/2025` (MM/DD/YYYY) - detected if day >12

**Parsing Logic:**
```javascript
function parseDate(dateString) {
 // ISO 8601 (preferred)
 if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
 return new Date(dateString);
 }

 // DD/MM/YYYY or DD-MM-YYYY
 const indonesianMatch = dateString.match(/^(\d{2})`\d{2}``\d{4}`$/);
 if (indonesianMatch) {
 const [_, day, month, year] = indonesianMatch;
 return new Date(`${year}-${month}-${day}`);
 }

 // Fallback: Try native Date parsing
 const date = new Date(dateString);
 if (!isNaN(date)) return date;

 // Invalid date
 throw new Error(`Invalid date format: ${dateString}`);
}
```

**Supported Time Formats:**
- 24-hour with seconds: `14:30:25` (HH:MM:SS)
- 24-hour without seconds: `14:30` (HH:MM)  ->  converted to `14:30:00`
- 12-hour format: `2:30 PM`  ->  converted to `14:30:00`

### 4.3 Amount Parsing

**Challenges:**
- Rupiah doesn't use decimals (no cents), but CSV may include `.00`
- Thousand separators vary: `25,000` (comma) or `25.000` (period - Indonesian)
- Currency symbols may be present: `Rp 25000` or `IDR 25,000`

**Parsing Logic:**
```javascript
function parseAmount(amountString) {
 // Remove currency symbols
 let cleaned = amountString.replace(/Rp|IDR|,|\./g, '').trim();

 // Parse as integer (Rupiah has no cents)
 const amount = parseInt(cleaned, 10);

 // Validation
 if (isNaN(amount) || amount < 0) {
 throw new Error(`Invalid amount: ${amountString}`);
 }

 // Sanity check: Typical F&B transaction between Rp 5,000 - Rp 500,000
 if (amount < 100 || amount > 10000000) {
 console.warn(`Unusual amount detected: Rp ${amount.toLocaleString()}`);
 }

 return amount;
}
```

### 4.4 Payment Method Normalization

**Mapping Indonesian  ->  Standard Categories:**
```javascript
const paymentMethodMap = {
 // Cash variations
 'Cash': 'Cash',
 'Tunai': 'Cash',
 'Kas': 'Cash',

 // Debit variations
 'Debit': 'Debit',
 'Kartu Debit': 'Debit',
 'Debit Card': 'Debit',

 // Credit variations
 'Credit': 'Credit',
 'Kartu Kredit': 'Credit',
 'Credit Card': 'Credit',

 // E-Wallet variations
 'GoPay': 'E-Wallet',
 'OVO': 'E-Wallet',
 'Dana': 'E-Wallet',
 'ShopeePay': 'E-Wallet',
 'LinkAja': 'E-Wallet',
 'E-Wallet': 'E-Wallet',
 'Digital Wallet': 'E-Wallet',

 // Other
 'Transfer Bank': 'Bank Transfer',
 'QRIS': 'QRIS'
};

function normalizePaymentMethod(method) {
 return paymentMethodMap[method] || 'Other';
}
```

---

## 5. Data Validation

### 5.1 Row-Level Validation

**Required Field Validation:**
```javascript
function validateRow(row, rowNumber) {
 const errors = [];

 // Date required
 if (!row.transaction_date) {
 errors.push(`Row ${rowNumber}: Missing date`);
 }

 // Time required
 if (!row.transaction_time) {
 errors.push(`Row ${rowNumber}: Missing time`);
 }

 // Amount required and must be > 0
 if (!row.amount || row.amount <= 0) {
 errors.push(`Row ${rowNumber}: Invalid amount (${row.amount})`);
 }

 return errors;
}
```

**Business Logic Validation:**
```javascript
function validateBusinessRules(row, rowNumber) {
 const warnings = [];

 // Amount sanity check (typical F&B: Rp 5K - 500K)
 if (row.amount < 1000) {
 warnings.push(`Row ${rowNumber}: Unusually low amount (Rp ${row.amount})`);
 }
 if (row.amount > 1000000) {
 warnings.push(`Row ${rowNumber}: Unusually high amount (Rp ${row.amount.toLocaleString()})`);
 }

 // Date cannot be in future
 if (row.transaction_date > new Date()) {
 warnings.push(`Row ${rowNumber}: Future date detected`);
 }

 // Date cannot be >1 year old (for Free tier with 7-day retention)
 const oneYearAgo = new Date();
 oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
 if (row.transaction_date < oneYearAgo) {
 warnings.push(`Row ${rowNumber}: Data older than 1 year`);
 }

 return warnings;
}
```

### 5.2 File-Level Validation

**Pre-Import Checks:**
```javascript
function validateFile(file, userTier) {
 const errors = [];

 // File size limits
 const maxSize = {
 'Free': 10 * 1024 * 1024, // 10 MB
 'Starter': 100 * 1024 * 1024, // 100 MB
 'Pro': 500 * 1024 * 1024 // 500 MB
 };

 if (file.size > maxSize[userTier]) {
 errors.push(`File too large (${(file.size / 1024 / 1024).toFixed(2)} MB). Max: ${maxSize[userTier] / 1024 / 1024} MB for ${userTier} tier.`);
 }

 // File format
 const allowedFormats = ['csv', 'tsv', 'xlsx', 'xls'];
 const extension = file.name.split('.').pop().toLowerCase();
 if (!allowedFormats.includes(extension)) {
 errors.push(`Unsupported file format: .${extension}. Allowed: ${allowedFormats.join(', ')}`);
 }

 return errors;
}
```

**Transaction Count Limits (Free Tier Only):**
```javascript
function validateTransactionCount(rows, userTier) {
 if (userTier === 'Free' && rows.length > 10000) {
 return {
 error: true,
 message: `Free tier limited to 10,000 transactions per import. Your file has ${rows.length.toLocaleString()}. Please upgrade to Starter or split file.`
 };
 }

 return { error: false };
}
```

### 5.3 Duplicate Detection

**Prevent Duplicate Imports:**
```javascript
function detectDuplicates(newRows, existingTransactions) {
 const duplicates = [];

 newRows.forEach((row, index) => {
 // Create composite key: date + time + amount + product
 const key = `${row.transaction_date}_${row.transaction_time}_${row.amount}_${row.product_name || ''}`;

 if (existingTransactions.has(key)) {
 duplicates.push({
 rowNumber: index + 1,
 date: row.transaction_date,
 amount: row.amount,
 product: row.product_name
 });
 }
 });

 return duplicates;
}
```

**User Confirmation:**
If duplicates detected:
```
|--------------------------------------------+
| Duplicate Transactions Detected |
|--------------------------------------------|
| Found 5 duplicate transactions. |
| |
| Date: 2025-01-15, Amount: Rp 25,000 |
| Date: 2025-01-15, Amount: Rp 10,000 |
| ... (3 more) |
| |
| [Skip Duplicates] [Import Anyway] |
|---------------------------------------------
```

---

## 6. Import Workflow

### 6.1 User Flow

**Step-by-Step Import Process:**

**1. User Clicks "Import Data" Button**
```
|--------------------------------------------+
| E1 Dashboard - Import Data |
|--------------------------------------------|
| |
| [Import from POS System] |
| |
| Supported: Moka, Qasir, Pawoon, etc. |
| File formats: CSV, Excel |
| |
| [Select File] |
|---------------------------------------------
```

**2. File Selection and Auto-Detection**
```
|--------------------------------------------+
| Analyzing your file... |
|--------------------------------------------|
| [x] Detected: Moka POS |
| [x] File format: CSV (UTF-8) |
| [x] Transactions: 150 |
| [x] Date range: Jan 1-15, 2025 |
| |
| [Cancel] [Continue] |
|---------------------------------------------
```

**3. Data Preview and Validation**
```
|------------------------------------------------------------+
| Preview: First 5 transactions |
|------------------------------------------------------------|
| Date Time Amount Product Payment |
| 2025-01-15 14:30 Rp 25,000 Nasi Goreng Cash |
| 2025-01-15 14:45 Rp 10,000 Es Teh GoPay |
| 2025-01-15 15:00 Rp 15,000 Kopi Cash |
| ... (147 more transactions) |
| |
| [x] All rows valid |
| [!] 2 warnings (see details) |
| |
| [Cancel] [View Warnings] [Import 150 Transactions] |
|-------------------------------------------------------------
```

**4. Import Progress**
```
|--------------------------------------------+
| Importing transactions... |
|--------------------------------------------|
| |
| -–ˆ-–ˆ-–ˆ-–ˆ-–ˆ-–ˆ------------- 75% |
| |
| Processing: 112/150 transactions |
| |
|---------------------------------------------
```

**5. Import Completion**
```
|--------------------------------------------+
| Import Complete! [x] |
|--------------------------------------------|
| Successfully imported: 150 transactions |
| Date range: Jan 1-15, 2025 |
| Total sales: Rp 2,450,000 |
| |
| Your dashboard has been updated. |
| |
| [View Dashboard] [Import More] |
|---------------------------------------------
```

### 6.2 Error Handling

**Validation Errors (Blocking):**
```
|--------------------------------------------+
| Import Failed [x] |
|--------------------------------------------|
| Found 3 errors that must be fixed: |
| |
| • Row 25: Missing date |
| • Row 47: Invalid amount (0) |
| • Row 89: Missing date |
| |
| Please fix these in your CSV file and |
| try again. |
| |
| [Download Error Report] [Close] |
|---------------------------------------------
```

**Validation Warnings (Non-Blocking):**
```
|--------------------------------------------+
| Import Warnings [!] |
|--------------------------------------------|
| Found 2 warnings (import can continue): |
| |
| • Row 12: Unusually high amount |
| (Rp 1,500,000) - please verify |
| • Row 34: Data from 2023 (older than |
| retention period) |
| |
| [Cancel] [Import Anyway] |
|---------------------------------------------
```

### 6.3 Performance Optimization

**Batch Processing (Large Files):**
```javascript
async function importLargeFile(rows) {
 const BATCH_SIZE = 1000;
 const batches = Math.ceil(rows.length / BATCH_SIZE);

 for (let i = 0; i < batches; i++) {
 const start = i * BATCH_SIZE;
 const end = Math.min(start + BATCH_SIZE, rows.length);
 const batch = rows.slice(start, end);

 // Import batch to SQLite
 await importBatch(batch);

 // Update progress bar
 updateProgress((i + 1) / batches * 100);
 }
}
```

**SQLite Insert Optimization:**
```sql
-- Use transaction for batch inserts (100Ã— faster)
BEGIN TRANSACTION;

INSERT INTO transactions (date, time, amount, product, payment_method)
VALUES (?, ?, ?, ?, ?), (?, ?, ?, ?, ?), ... ; -- Batch 1000 rows

COMMIT;
```

---

## 7. API Integration (Future - Q3 2025)

### 7.1 Planned API Integrations

**Moka POS API:**
- Endpoint: `https://api.mokapos.com/v1/transactions`
- Authentication: OAuth 2.0
- Rate Limit: 1,000 requests/hour
- Real-time webhook: Transaction created event

**Qasir API:**
- Endpoint: `https://api.qasir.id/v1/sales`
- Authentication: API Key
- Rate Limit: 500 requests/hour
- Polling: Every 15 minutes

**Pawoon API:**
- Endpoint: `https://api.pawoon.com/v2/transactions`
- Authentication: OAuth 2.0
- Rate Limit: 2,000 requests/hour
- Webhook: Available

### 7.2 Auto-Sync Architecture (Future)

```
|---------------------+
| POS System |
| (Moka, Qasir, etc) |
|----------+-----------
 |
 | (1) Webhook: New transaction
 |
 v
|--------------------------+
| E1 Cloud Sync Service |
| (Supabase Edge Function)|
|----------+----------------
 |
 | (2) Validate & store in cloud
 |
 v
 |--------------+
 | Supabase DB |
 |------+--------
 |
 | (3) Push to Electron app
 |
 v
|--------------------------+
| E1 Electron App |
| (local SQLite) |
|---------------------------
```

**User Experience (Auto-Sync):**
- Real-time: New transactions appear in dashboard within 1 minute
- No manual CSV upload required
- Background sync (works even when app closed)
- Conflict resolution if manual CSV imported + auto-sync enabled

---

## 8. Testing and Quality Assurance

### 8.1 Test CSV Files

**Location:** `tests/fixtures/pos-csv/`

**Test Files:**
- `moka-valid.csv` - Valid Moka POS export (50 rows)
- `qasir-valid.csv` - Valid Qasir export (50 rows, Indonesian headers)
- `pawoon-valid.csv` - Valid Pawoon export (50 rows, combined date/time)
- `custom-valid.csv` - Generic CSV with minimal fields
- `invalid-missing-date.csv` - Missing required field (should fail)
- `invalid-future-date.csv` - Future dates (should warn)
- `duplicate-transactions.csv` - Duplicate rows (should detect)
- `large-file.csv` - 100,000 rows (performance test)

### 8.2 Unit Tests

**CSV Parser Tests:**
```javascript
describe('CSV Parser', () => {
 test('Detects Moka POS format', () => {
 const csv = fs.readFileSync('tests/fixtures/moka-valid.csv');
 const detected = detectPOSSystem(csv);
 expect(detected).toBe('Moka');
 });

 test('Parses Indonesian date format', () => {
 const date = parseDate('15/01/2025');
 expect(date.toISOString()).toBe('2025-01-15T00:00:00.000Z');
 });

 test('Normalizes payment methods', () => {
 expect(normalizePaymentMethod('Tunai')).toBe('Cash');
 expect(normalizePaymentMethod('GoPay')).toBe('E-Wallet');
 });
});
```

### 8.3 Integration Tests

**End-to-End Import Test:**
```javascript
test('Import Moka CSV end-to-end', async () => {
 // 1. Upload CSV
 const file = new File(['...'], 'moka-sales.csv');
 const result = await importCSV(file, 'Starter');

 // 2. Verify import
 expect(result.success).toBe(true);
 expect(result.imported).toBe(50);
 expect(result.errors.length).toBe(0);

 // 3. Verify data in SQLite
 const transactions = await db.query('SELECT COUNT(*) FROM transactions');
 expect(transactions[0].count).toBe(50);
});
```

---

## 9. Documentation and Support

### 9.1 User Documentation

**Help Article: "How to Import Data from Your POS"**
- Step-by-step guide with screenshots
- POS-specific instructions (Moka, Qasir, Pawoon)
- Troubleshooting common errors
- Video tutorial (5 minutes)

**Location:** `help.powerbifnb.com/e1/import-pos-data`

### 9.2 POS-Specific Guides

**Moka POS Export Guide:**
1. Login to Moka POS dashboard
2. Navigate to Reports  ->  Transaction Report
3. Select date range
4. Click "Export to CSV"
5. Save file to computer
6. Open E1  ->  Import Data  ->  Select file

**Qasir Export Guide:**
1. Login to Qasir backoffice
2. Menu  ->  Laporan  ->  Penjualan
3. Pilih tanggal
4. Klik "Unduh CSV"
5. Buka E1  ->  Import Data  ->  Pilih file

### 9.3 Common Issues and Solutions

**Issue: "CSV format not recognized"**
- Solution: Use manual mapping mode
- Check CSV has headers (first row = column names)
- Ensure UTF-8 encoding

**Issue: "Date format invalid"**
- Solution: Reformat dates in Excel to YYYY-MM-DD
- Or use manual mapping to specify date format

**Issue: "Duplicate transactions detected"**
- Solution: Export only new data (not full history)
- Or click "Skip Duplicates" during import

---

## 10. Roadmap

### 10.1 Phase 1: MVP (Current - Week 3 Launch)
- [x] CSV import with auto-detection
- [x] Support Moka, Qasir, Pawoon
- [x] Manual mapping for custom POS
- [x] Basic validation and error handling

### 10.2 Phase 2: Enhanced Import (Month 2-3)
-  BukuWarung and Olsera auto-detection
-  Excel file import (.xlsx, .xls)
-  Drag-and-drop file upload
-  Import scheduling (auto-import daily/weekly)

### 10.3 Phase 3: API Integration (Q3 2025)
- Real-time API integration (Moka, Qasir, Pawoon)
- Webhook support for auto-sync
- OAuth authentication flow
- Conflict resolution (manual CSV + auto-sync)

### 10.4 Phase 4: Advanced Features (Q4 2025)
- Multi-location import (combine data from multiple outlets)
- Inventory sync (if POS supports)
- Customer data import (for return rate analysis)
- Staff performance import (cashier/waiter analytics)

---

**Document ID:** E1-POS-INTEGRATION-v1.0
**Last Updated:** 2025-12-28
**Owner:** Technical Team

**Related Documents:**
- [[products/03-web-dashboard-lite/integrations/cloud-sync-spec|Cloud Sync Specification]] - Supabase sync architecture
- [[products/03-web-dashboard-lite/technical/database-schema|Database Schema]] - SQLite table structure
- [[products/03-web-dashboard-lite/technical/api-reference|API Reference]] - E1 API documentation


