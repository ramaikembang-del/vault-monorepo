# E1 CSV Template - Web Dashboard Lite
**Asset Type:** Excel Template (.xlsx)  
**Purpose:** Sample CSV import template for Lite Dashboard users to understand proper data format

---

## File Structure

**Filename:** `e1-csv-template.xlsx`  
**Sheets:** 2 tabs

### Sheet 1: "Sales Data"

| Column Name | Data Type | Example | Description |
|-------------|-----------|---------|-------------|
| Date | Date (YYYY-MM-DD) | 2026-01-08 | Transaction date |
| Revenue | Number | 1500000 | Daily revenue in Rupiah |
| Transactions | Integer | 45 | Number of transactions |
| Customers | Integer | 42 | Number of unique customers |
| Avg_Ticket | Number | 33333 | Average transaction value |

**Sample Data (10 rows):**
```
Date,Revenue,Transactions,Customers,Avg_Ticket
2026-01-01,1200000,38,36,31579
2026-01-02,1350000,42,40,32143
2026-01-03,980000,32,30,30625
2026-01-04,1450000,48,45,30208
2026-01-05,2100000,67,62,31343
2026-01-06,2350000,72,68,32639
2026-01-07,2200000,70,66,31429
2026-01-08,1500000,45,42,33333
```

### Sheet 2: "Instructions"

**Content:**
```
CARA MENGGUNAKAN TEMPLATE INI / HOW TO USE THIS TEMPLATE

1. Isi data penjualan harian di Sheet "Sales Data"
   Fill in daily sales data in "Sales Data" sheet

2. Format tanggal: YYYY-MM-DD (contoh: 2026-01-08)
   Date format: YYYY-MM-DD (example: 2026-01-08)

3. Revenue dalam Rupiah (tanpa sen)
   Revenue in Rupiah (no decimal)

4. Simpan file ini sebagai CSV untuk import
   Save this file as CSV for import

5. Upload ke Lite Dashboard → Import Data
   Upload to Lite Dashboard → Import Data

TIPS:
- Jangan hapus header row (baris pertama)
  Don't delete the header row
- Pastikan tanggal sequential (berurutan)
  Ensure dates are sequential
- Tidak ada data kosong (blank cells)
  No blank cells allowed
```

---

## How to Create This File

**Using Excel/Google Sheets:**
1. Create new workbook
2. Add "Sales Data" sheet with columns above
3. Add sample data (10 rows)
4. Add "Instructions" sheet with bilingual instructions
5. Save as: `e1-csv-template.xlsx`

**Alternatively Use:**
```csv
Date,Revenue,Transactions,Customers,Avg_Ticket
2026-01-01,1200000,38,36,31579
2026-01-02,1350000,42,40,32143
2026-01-03,980000,32,30,30625
2026-01-04,1450000,48,45,30208
2026-01-05,2100000,67,62,31343
2026-01-06,2350000,72,68,32639
2026-01-07,2200000,70,66,31429
2026-01-08,1500000,45,42,33333
```

Save as `e1-csv-template.csv` for simplest version.

---

**Last Updated:** January 9, 2026  
**Owner:** Product Team  
**Status:** Template specification ready for creation
