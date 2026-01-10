# POS Training Manual
**For:** Restaurant operators using Product Templates  
**Purpose:** Step-by-step guide for POS data export and integration  
**Language:** Bahasa Indonesia + English  
**Last Updated:** January 9, 2026

---

## Overview

Manual ini menjelaskan cara mengexport data dari berbagai sistem POS (Point of Sale) dan mengimportnya ke Clario Template atau Dashboard.

This manual explains how to export data from various POS systems and import it into Clario Templates or Dashboards.

**Supported POS Systems:**
- Moka POS
- Pawoon
- Majoo
- BukuKas (manual entry)
- Qasir
- Manual paper records

---

## Moka POS - Data Export

### Langkah 1: Login ke Dashboard Moka
1. Buka browser → https://dashboard.moka.com
2. Login dengan email & password Anda
3. Klik "Reports" di menu kiri

### Langkah 2: Pilih Report yang Dibutuhkan

**Untuk Template A1 (Power BI):**
- Pilih "Sales Report" (Detail Penjualan)
- Pilih range tanggal: Minimum 30 hari terakhir
- Format: Excel (.xlsx)

**Untuk Dashboard E1 (Lite):**
- Pilih "Daily Summary" (Ringkasan Harian)
- Range: 30-90 hari
- Format: CSV

### Langkah 3: Download File

1. Klik tombol "Export" / "Download"
2. Tunggu proses (5-30 detik)
3. File akan terdownload otomatis
4. Simpan di folder yang mudah diakses (misal: Desktop)

### Langkah 4: Import ke Clario

**Untuk Power BI Template:**
```
1. Buka file Template.pbix
2. Klik "Transform Data" → "Data Source Settings"
3. Browse ke file Moka yang baru didownload
4. Klik "Refresh" → Dashboard akan update otomatis
```

**Untuk Web Dashboard:**
```
1. Login ke Clario Dashboard
2. Klik "Import Data"
3. Drag & drop file Moka
4. Klik "Process" → Data akan ter-import
```

---

## Pawoon - Data Export

### Langkah 1: Akses Pawoon Dashboard
1. Buka app Pawoon di tablet/smartphone
2. Atau login ke https://pawoon.com
3. Tap/klik "Reports"

### Langkah 2: Export Data

**Via Mobile App:**
1. Pilih "Transaction Report"
2. Pilih tanggal (30 hari minimum)
3. Tap ⋮ (3 titik) → "Export"
4. Pilih "Excel" atau "CSV"
5. Share via WhatsApp/Email ke diri sendiri

**Via Web Dashboard:**
1. "Reports" → "Sales Report"
2. Set date range
3. Click "Download Excel"

### Langkah 3: Transfer ke Komputer

Jika export dari mobile:
1. Buka WhatsApp/Email di komputer
2. Download file yang dikirim
3. Simpan di folder kerja

### Langkah 4: Import ke Clario
(Sama seperti Moka - lihat instruksi di atas)

---

## Majoo - Data Export

### Langkah 1: Login Majoo Dashboard
1. https://dashboard.majoo.id
2. Login dengan akun Anda
3. Menu "Laporan"

### Langkah 2: Pilih Laporan

**Untuk Clario:**
- Laporan Penjualan Harian (Daily Sales)
- Periode: 1-3 bulan terakhir
- Detail: Semua transaksi (bukan summary)

### Langkah 3: Download
1. Klik "Download" / "Unduh"
2. Format: Excel (.xlsx)
3. File akan tersimpan di folder Download

### Langkah 4: Cleaning Data (Opsional)

Majoo kadang ada kolom extra. Buka Excel:
1. Hapus kolom yang tidak diperlukan (logo, footer)
2. Pastikan header di baris pertama
3. Save file

---

## BukuKas - Manual Entry

BukuKas tidak punya fitur export otomatis. Cara manual:

### Option 1: Ketik Manual di Excel

**Template Excel yang dibutuhkan:**
```
Tanggal | Item | Jumlah | Harga | Total | Metode Bayar
```

**Contoh:**
```csv
2026-01-01, Nasi Goreng, 5, 25000, 125000, Cash
2026-01-01, Es Teh, 10, 5000, 50000, Cash
2026-01-02, Ayam Bakar, 3, 35000, 105000, GoPay
```

### Option 2: Screenshot → Ketik

1. Screenshot laporan harian di BukuKas
2. Ketik manual ke Excel
3. Save sebagai CSV

**Waktu yang dibutuhkan:** 10-20 menit per hari (tergantung volume transaksi)

---

## Qasir - Data Export

### Langkah 1: Login Dashboard
1. https://app.qasir.id
2. Menu "Laporan Transaksi"

### Langkah 2: Export
1. Pilih range tanggal
2. Klik "Export Excel"
3. Download file

### Langkah 3: Import ke Clario
(Sama seperti sistem POS lainnya)

---

## Paper Records (Manual) - Input ke Sistem

### Jika Menggunakan Buku Kas Manual

**Rekomendasi:** Ketik data harian (10 menit/hari lebih baik daripada bulk 1 bulan)

**Template:**
```
Tanggal | Pemasukan | Pengeluaran | Saldo | Keterangan
```

**Tool:**
- Google Sheets (bisa akses dari HP)
- Excel (offline)
- Clario Lite Dashboard (direct input)

---

## Troubleshooting Umum

### Problem: File tidak bisa diimport

**Error:** "Invalid format"

**Solusi:**
1. Check file extension (.xlsx atau .csv)
2. Pastikan tidak ada password protection
3. Buka di Excel → Save As → pilih format yang benar

---

### Problem: Data tidak muncul setelah import

**Penyebab:**
- Tanggal format salah (harus YYYY-MM-DD)
- Ada cell kosong (blank)
- Header row terhapus

**Solusi:**
1. Cek format tanggal di Excel
2. Fill blank cells dengan 0 atau "-"
3. Pastikan baris pertama adalah header

---

### Problem: Angka revenue tidak match

**Penyebab:**
- POS mencatat dengan pajak, Clario tanpa pajak (atau sebaliknya)
- Diskon tidak tercatat
- Refund/return tidak masuk

**Solusi:**
1. Reconcile manual (cek hardcopy receipt)
2. Adjust di Excel sebelum import
3. Catat di notes/keterangan

---

## Best Practices

### 1. Export Data Secara Rutin
- **Daily:** Jika volume tinggi (>100 transaksi/hari)
- **Weekly:** Untuk warung kecil
- **Monthly:** Minimum (untuk laporan bulanan)

### 2. Simpan Backup
- Folder: "Data Backup/2026/01-Januari/"
- Jangan delete file mentah dari POS
- Cloud backup (Google Drive/Dropbox)

### 3. Naming Convention
```
Format: YYYY-MM-DD_POSName_ReportType.xlsx
Contoh: 2026-01-08_Moka_SalesReport.xlsx
```

### 4. Data Validation
Setelah import, cek:
- Total revenue match dengan POS
- Jumlah transaksi sama
- Item terlaris (top products) sesuai

---

## Video Tutorial (Coming Soon)

**Planned:**
- Moka POS export (5 menit)
- Pawoon export (7 menit)
- Excel cleaning basics (10 menit)
- Import ke Clario (5 menit)

**Release:** Sprint 2 (Februari 2026)

---

## Bantuan Lebih Lanjut

**WhatsApp Support:** [Insert number]  
**Email:** support@clario.app  
**Video call setup:** By appointment (untuk first-time users)

**Response time:**
- WhatsApp: <2 jam (working hours 9AM-6PM)
- Email: <24 jam

---

## Appendix: Data Format Requirements

### Minimum Required Columns

**Untuk Template A1 (Power BI):**
- Tanggal (Date)
- Item/Product Name
- Jumlah (Quantity)
- Harga Satuan (Unit Price)
- Total

**Untuk Dashboard E1 (Lite):**
- Tanggal (Date)
- Total Penjualan (Total Sales)
- Jumlah Transaksi (Transaction Count)

### Optional but Helpful:
- Metode bayar (Cash/Digital)
- Shift (Pagi/Siang/Malam)
- Kasir/Server name
- Kategori produk

---

## Changelog

**v1.0 (Jan 9, 2026):**
- Initial release
- Support for Moka, Pawoon, Majoo, Qasir, BukuKas

**Planned (Sprint 2):**
- Video tutorials
- One-click POS integration (API)
- Auto-sync (no manual export)

---

**Last Updated:** January 9, 2026  
**Owner:** Product Team + Customer Success  
**Language:** Bilingual (Bahasa Indonesia + English)
