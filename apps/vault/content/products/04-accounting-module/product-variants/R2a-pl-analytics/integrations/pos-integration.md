# POS Integration Guide - Simple P&L Tracker

**Product:** R2a - Simple P&L Tracker
**Product ID:** R2a
**Pillar:** P2 - Retention (Accounting Add-On)
**Feature:** Automated Revenue Import
**Method:** Client-Side CSV Parsing (Phase 1)  ->  API Integration (Phase 2)
**Owner:** Engineering Lead

---

## Integration Strategy Overview

**Phase 1 (Sprint 2 - Week 5-6):** CSV Upload Only
**Phase 2 (Month 6+):** Direct API Integration (after Gate 2A pass)

**Why CSV First?**
1. **Zero POS partnerships needed** - No developer accounts, no NDAs, ship faster
2. **Covers 95% of users** - All POS systems export CSV
3. **Lower engineering cost** - CSV parsing = 40 hours vs API = 200+ hours
4. **Faster iteration** - Can fix parser bugs same-day vs waiting for POS vendor API updates

**Why API Later?**
1. **Automation** - Auto-sync nightly (no CSV upload workflow)
2. **Real-time** - Yesterday's sales visible today (vs monthly manual export)
3. **Premium feature** - Justifies higher tier pricing (Rp 150K/month)

**Cross-Reference:** See [[products/04-accounting-module/product-variants/R2a-pl-analytics/product-scope|product-scope.md]] for feature tiering and [[products/04-accounting-module/product-variants/R2a-pl-analytics/specifications/technical-spec|technical-spec.md]] for parser architecture.

---

## Supported POS Systems (Phase 1 - CSV)

**Coverage:** 5 major Indonesian POS systems = ~80% of Mikro F&B market

1. **Moka POS** (35% market share)
2. **Pawoon** (25%)
3. **Qasir** (15%)
4. **Majoo** (10%)
5. **GoBiz (GoFood)** (10% - delivery aggregator)
6. **Generic CSV** (5% - fallback for others)

**Market Research Source:** [Indonesian POS adoption survey 2025, TechInAsia]

---

## 1. Moka POS Integration (Detailed)

### Export Instructions for User

**Step-by-Step (Indonesian + English):**
```
1. Login to Moka Backoffice
 Buka: backoffice.mokapos.com

2. Pilih Menu "Laporan"  ->  "Penjualan"  ->  "Ringkasan Penjualan"
 (Go to Reports  ->  Sales  ->  Sales Summary)

3. Pilih Range Tanggal: Misalnya 1 Des - 31 Des
 (Select Date Range: e.g., Dec 1 - Dec 31)

4. Klik "Export"  ->  Pilih "CSV Detailed" (BUKAN "Summary PDF")
 (Click Export  ->  Select "CSV Detailed", NOT "Summary PDF")

5. File akan download otomatis: "Sales_Detailed_2025-12-31.csv"
 (File will auto-download)

6. Upload file ini ke R2a (jangan buka di Excel dulu!)
 (Upload this file to R2a - don't open in Excel first!)
```

**Common User Mistakes:**
- Opens CSV in Excel, saves again  ->  Breaks date format (dd/mm/yyyy  ->  mm/dd/yyyy)
- Exports "Summary PDF" instead of "Detailed CSV"  ->  No transaction-level data
- Selects wrong date range  ->  Partial month data

---

### Column Mapping (Moka  ->  R2a)

**Target Moka CSV File:** `Sales_Detailed_2025-12-31.csv`

**Moka Column Names (Actual Headers in CSV):**
```
Date,Time,Receipt Number,Category,Item Name,Qty,Gross Sales,Discounts,Tax,Service Charge,Net Sales,Payment Method
```

**Mapping to R2a Schema:**

| Moka Column | R2a Field | Data Type | Transformation |
|-------------|-----------|-----------|----------------|
| `Date` | `transaction_date` | DATE | Parse DD/MM/YYYY  ->  YYYY-MM-DD |
| `Time` | `transaction_time` | TIME | Parse HH:MM  ->  HH:MM:SS |
| `Receipt Number` | `transaction_id` | STRING | Prefix with "MOKA-"  ->  "MOKA-12345" |
| `Category` | `revenue_stream` | ENUM | Map to [Dine-in, Takeaway, Delivery, Other] |
| `Item Name` | `line_item` | STRING | Store for future COGS matching |
| `Qty` | `quantity` | INTEGER | Direct copy |
| `Gross Sales` | `gross_revenue` | DECIMAL | Direct copy (Rupiah) |
| `Discounts` | `discounts` | DECIMAL | Negative value (reduce revenue) |
| `Tax` | `tax_amount` | DECIMAL | Optional (some Mikro don't charge tax) |
| `Service Charge` | `service_charge` | DECIMAL | Optional |
| `Net Sales` | `net_revenue` | DECIMAL | **PRIMARY VALUE** for P&L |
| `Payment Method` | `payment_method` | ENUM | [Cash, Card, E-wallet, Other] |

**Decision Rule: Which Revenue Value?**
> Use **`Net Sales`** as P&L Top Line (Revenue).
> Reason: This is what actually goes to the business after discounts (but before platform fees like GoFood commission).

---

### Parser Pseudo-Code Logic

```python
def parse_moka_csv(file_path):
 rows = read_csv(file_path)

 # Step 1: Validate Headers
 expected_headers = ['Date', 'Time', 'Receipt Number', 'Net Sales']
 if not all(h in rows[0] for h in expected_headers):
 raise CSVFormatError("Missing required Moka columns. Did you open this in Excel?")

 # Step 2: Parse each transaction
 transactions = []
 for row in rows[1:]: # Skip header
 try:
 transaction = {
 'date': parse_date(row['Date'], format='DD/MM/YYYY'),
 'time': parse_time(row['Time']),
 'transaction_id': f"MOKA-{row['Receipt Number']}",
 'revenue': parse_decimal(row['Net Sales']),
 'payment_method': map_payment_method(row['Payment Method'])
 }

 # Duplicate detection
 if transaction['transaction_id'] in existing_transactions:
 skip_count += 1
 continue

 transactions.append(transaction)

 except (DateParseError, ValueError) as e:
 error_count += 1
 error_log.append(f"Row {row_number}: {str(e)}")
 continue # Skip bad row, process rest

 # Step 3: Return summary
 return {
 'success_count': len(transactions),
 'skip_count': skip_count,
 'error_count': error_count,
 'total_revenue': sum(t['revenue'] for t in transactions),
 'errors': error_log
 }
```

**Error Modes:**
1. **CSVFormatError:** Headers don't match  ->  User Message: "This doesn't look like a Moka CSV. Make sure you selected 'Detailed CSV' export."
2. **DateParseError:** Invalid date format  ->  User Message: "Date format error on row X. Don't open CSV in Excel before upload."
3. **DuplicateTransactionError:** Transaction ID already imported  ->  User Message: "You already imported this data on Dec 15. Re-import anyway?"

---

## 2. Pawoon Integration

### Export Instructions
```
1. Login Pawoon Dashboard: https://dashboard.pawoon.com
2. Menu "Laporan"  ->  "Ringkasan Penjualan"
3. Pilih Tanggal: 1-31 Desember
4. Klik "Export"  ->  File "laporan_penjualan.csv" akan download
5. Upload ke R2a
```

### Column Mapping (Pawoon  ->  R2a)

**Pawoon Column Names:**
```
Tanggal,No. Struk,Nama Item,Jumlah,Total Pembayaran,Metode Bayar
```

**Mapping:**
| Pawoon Column | R2a Field | Notes |
|---------------|-----------|-------|
| `Tanggal` | `transaction_date` | Format: DD/MM/YYYY |
| `No. Struk` | `transaction_id` | Prefix: "PAWOON-" |
| `Total Pembayaran` | `net_revenue` | Rupiah (already post-discount) |
| `Metode Bayar` | `payment_method` | Indonesian values: "Tunai", "Kartu", "E-wallet" |

**Indonesian Payment Method Mapping:**
```python
payment_map = {
 'Tunai': 'Cash',
 'Kartu Debit': 'Card',
 'Kartu Kredit': 'Card',
 'E-wallet': 'E-wallet',
 'GoPay': 'E-wallet',
 'OVO': 'E-wallet',
 'Transfer Bank': 'Bank Transfer'
}
```

---

## 3. GoBiz (GoFood) Integration - SPECIAL CASE

**Why Special?** Many Mikro businesses ONLY use GoFood/GrabFood (dark kitchens, delivery-only).

### Export Instructions
```
1. GoBiz Dashboard: https://merchant.gofood.co.id
2. Menu "Laporan Transaksi"
3. Download CSV (range: full month)
```

### The "Platform Fee" Challenge

**GoBiz CSV shows:**
- `Gross Order Value`: Rp 100,000 (what customer paid)
- `Platform Fee (20%)`: Rp 20,000 (GoFood commission)
- `Net Settlement`: Rp 80,000 (what merchant receives)

**R2a Decision Logic:**
```
Revenue (Top Line): Rp 100,000 (Gross Order)
Expense (Marketing): Rp 20,000 (GoFood commission)
-----------------------------------
Net Revenue: Rp 80,000
```

**Why record this way?**
- Shows TRUE business performance (Rp 100K sales, not Rp 80K)
- Allows analyzing platform fees as % of revenue (should be <25%)
- Helps decide: "Is GoFood worth it?" (compare 20% fee vs 5% card MDR)

**Auto-categorization:** R2a automatically creates an expense entry:
```
Category: Marketing & Advertising
Description: "GoFood Platform Fee (Dec 2025)"
Amount: Rp 450,000 (sum of all fees for the month)
```

---

## 4-5. Qasir & Majoo (Abbreviated)

**Qasir:**
- Export: Dashboard  ->  Reports  ->  Sales  ->  CSV
- Format: Similar to Moka (English headers)
- Quirk: Includes "Void Transactions"  ->  Must filter out `Status != 'VOID'`

**Majoo:**
- Export: "Laporan Penjualan Harian"
- Format: Indonesian headers (like Pawoon)
- Quirk: Aggregates by day (not transaction-level)  ->  Less granular

---

## Common CSV Errors & User-Facing Messages

| Error Code | Technical Cause | User Message | Fix Guidance |
|------------|-----------------|---------------|--------------|
| `ERR_HEADER_MISMATCH` | Column names don't match expected pattern | "We couldn't recognize this CSV format. Did you open it in Excel first?" | Re-export from POS, don't modify |
| `ERR_DATE_INVALID` | Date cell contains text or wrong format | "Date format issue on row 15. Expected DD/MM/YYYY, got MM/DD/YYYY" | Don't save CSVin Excel (breaks dates) |
| `ERR_EMPTY_FILE` | CSV has headers but 0 data rows | "Your CSV has no transactions. Did you select the right date range?" | Check export date range |
| `ERR_DUPLICATE_IMPORT` | Transaction IDs match existing data | "Looks like you already imported this data on Dec 20. Want to re-import?" | [Cancel] [Re-import Anyway] |
| `ERR_REVENUE_NEGATIVE` | Net Sales < 0 (refund without offsetting sale) | "Warning: Found negative revenue on row 8. Is this a refund?" | Verify data, may be valid |
| `ERR_PARSE_AMOUNT` | Revenue cell has non-numeric data (e.g., "Rp 50.000") | "Row 10: Can't parse amount. Remove currency symbols (Rp) from CSV." | Clean CSV or use built-in export |

**Error Handling Strategy:**
- **Soft Error (Skip Row):** Date parse error on 1 row? Skip that row, import the other 234 rows successfully.
- **Hard Error (Abort):** Headers completely wrong? Abort import, show error, don't save partial data.

---

## Testing & Quality Assurance

### Pre-Launch Testing Matrix

| POS System | Test Files | Tested By | Status |
|------------|------------|-----------|--------|
| Moka | 5 real user files (100-500 rows each) | Engineering Lead | [x] Passed |
| Pawoon | 5 files | Engineering Lead | [x] Passed |
| Qasir | 3 files | Engineering Lead |  In Progress |
| Majoo | 2 files | Engineering Lead |  In Progress |
| GoBiz | 5 files (platform fee edge cases) | Engineering Lead | [x] Passed |

**Edge Cases to Test:**
1. **Empty months** - CSV with 0 transactions (new business, slow month)
2. **Large files** - 10,000+ transactions (busy restaurant, full year export)
3. **Mixed payments** - Single receipt with Cash + Card split payment
4. **Refunds** - Negative revenue entries (customer returns)
5. **Unicode** - Indonesian characters in item names ("Nasi Goreng Spesial")
6. **Excel damage** - CSV opened & saved in Excel (date format corruption)

---

## Future: Direct API Integration (Phase 2)

**Target Timeline:** Month 6+ (after Gate 2A pass with 20+ subscribers)

### Moka API Integration

**API Endpoint:** `https://api.mokapos.com/v1/outlets/{outlet_id}/transactions`
**Authentication:** OAuth 2.0 (requires Moka Developer Account)

**Benefits:**
- Auto-sync nightly (no manual CSV upload)
- Real-time data (yesterday's sales visible today)
- Lower error rate (no file corruption)

**Cost:**
- **Engineering:** 80 hours development (OAuth, webhook, sync logic)
- **Partnership:** Moka developer account (free, but approval process 2-4 weeks)
- **Maintenance:** 4 hours/month (handle API version changes)

**ROI Calculation:**
- One-time cost: 80 hours Ã— Rp 500K/hour = Rp 40M
- Break-even: (Rp 40M) Ã· (Rp 50K extra revenue/user/month) = 800 user-months
- Decision: Wait until 50+ Moka users (20 months Ã— 50 users = 1,000 user-months > 800)

---

### Roadmap: API Integration Priority

| POS | Market Share | API Availability | Priority | Timeline |
|-----|--------------|------------------|----------|----------|
| Moka | 35% | [x] Public API | **P1** | Month 6 |
| Pawoon | 25% | [!] Private API (NDA required) | **P2** | Month 9 |
| Qasir | 15% | [x] No API | **P3** | CSV only |
| GoBiz | 10% | [x] Public API | **P1** | Month 8 |
| Majoo | 10% | [!] Beta API | **P3** | Month 12 |

**Decision Logic:** Build API integrations when (POS users Ã— monthly churn reduction) > development cost.

---

## Parser Maintenance & Monitoring

### Weekly Health Check

**Metrics to Track:**
| Week | CSV Uploads | Success % | Top Error | Parser Update Needed? |
|------|-------------|-----------|-----------|----------------------|
| Week 1 | | | | |

**Target:** >85% success rate

**Escalation:** If success rate <70%, investigate immediately (new POS version likely changed CSV format).

---

### Version Control & Backwards Compatibility

**Problem:** Moka releases new POS version  ->  changes CSV header from "Net Sales" to "Total Net"

**Solution:**
```python
# Flexible header matching (fuzzy logic)
header_aliases = {
 'net_sales': ['Net Sales', 'Total Net', 'Net Amount', 'Sales Net'],
 'date': ['Date', 'Transaction Date', 'Tanggal', 'Tgl']
}

def find_column(csv_headers, field_name):
 for alias in header_aliases[field_name]:
 if alias in csv_headers:
 return alias
 raise ColumnNotFoundError(f"Can't find {field_name} column")
```

**Testing:** Keep archive of old CSV formats, run parser against all versions monthly.

---

## Related Documents

**Product Context:**
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/R2a-pl-analytics|../]] - R2a product overview
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/specifications/feature-spec|feature-spec.md]] - POS import feature requirements
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/specifications/technical-spec|technical-spec.md]] - Parser architecture & database schema

**Operations:**
- [[products/02-template-support/operations/support-runbook|support-runbook.md]] - CSV import troubleshooting scripts
- [[products/02-template-support/operations/onboarding-guide|onboarding-guide.md]] - User guidance for first CSV upload

**Strategic Context:**
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/product-strategy/market-positioning|market-positioning.md]] - Why POS integration is core value prop
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/product-scope|product-scope.md]] - Phase 1 CSV vs Phase 2 API strategy

---

**Last Updated:** 2025-12-26
**Owner:** Engineering Lead
**Next Review:** Post-launch parser error analysis (Week 8 - identify most common failures)


