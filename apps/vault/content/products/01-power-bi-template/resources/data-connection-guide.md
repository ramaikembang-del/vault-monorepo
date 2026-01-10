# Data Connection Guide - Power BI Template
**Asset Type:** PDF Document  
**Purpose:** Step-by-step guide for connecting POS data to Power BI Template

---

## Document Outline

**Filename:** `data-connection-guide.pdf`  
**Pages:** ~12-15 pages  
**Audience:** Template buyers, Phase 2 F&B operators  
**Language:** Bahasa Indonesia + English

---

## Table of Contents

1. **Persiapan Awal / Initial Setup** (p1-2)
2. **Connecting to Excel Files** (p3-5)
3. **Connecting to CSV Export from POS** (p6-8)
4. **Troubleshooting** (p9-11)
5. **FAQs** (p12)

---

## Content Specifications

### Section 1: Persiapan Awal (Initial Setup)

**Prerequisites Checklist:**
- ✅ Power BI Desktop installed (download link)
- ✅ Template file (.pbix) downloaded
- ✅ Sample data ready (Excel or CSV from POS)
- ✅ Basic Excel knowledge

**POS Systems Supported:**
- Moka POS → CSV export
- Pawoon → Excel export
- Majoo → CSV export
- BukuKas → Manual Excel entry
- Others → CSV format requirement

**Data Requirements:**
- Minimum 30 days of transaction data
- Required columns: Date, Item, Quantity, Price, Total
- Optional: Staff, Shift, Payment Method

---

### Section 2: Connecting to Excel Files

**Step 1: Open Template**
```
1. Buka file Template.pbix
   Open Template.pbix file

2. Klik "Transform Data" di ribbon atas
   Click "Transform Data" in top ribbon

3. Power Query Editor akan terbuka
   Power Query Editor will open
```

**Step 2: Update Data Source**
```
4. Di panel kiri, klik query "Sales Data"
   In left panel, click "Sales Data" query

5. Klik "Advanced Editor"
   Click "Advanced Editor"

6. Ganti file path:
   Replace file path:
   
   OLD: C:\Template\SampleData.xlsx
   NEW: C:\YourFolder\YourPOSData.xlsx
```

**Step 3: Refresh Data**
```
7. Klik "Close & Apply"
   Click "Close & Apply"

8. Dashboard akan update otomatis
   Dashboard will auto-update

9. Verifikasi: Cek total revenue
   Verify: Check total revenue matches
```

**Screenshots Needed:**
- Power Query Editor interface
- Advanced Editor dialog
- File path replacement example
- Success message after refresh

---

### Section 3: Connecting to CSV from POS

**Supported POS Export Formats:**

#### Moka POS Export
- Login to Moka Dashboard
- Reports → Sales Report
- Export → CSV
- Format: Auto-compatible (no changes needed)

#### Pawoon Export  
- Open Pawoon app
- Sales → Export Data
- Choose date range (30 days minimum)
- Download Excel
- Convert to CSV if needed

#### Manual CSV Creation (BukuKas, paper records)
```csv
Date,Item,Quantity,Price,Total,Staff
2026-01-01,Nasi Goreng,5,25000,125000,Budi
2026-01-01,Es Teh,10,5000,50000,Budi
2026-01-01,Ayam Bakar,3,35000,105000,Siti
```

**Common Issues:**
- Wrong date format → Use YYYY-MM-DD
- Currency symbols (Rp) → Remove, numbers only
- Decimal separator → Use period (.), not comma (,)

---

### Section 4: Troubleshooting

**Error: "File Not Found"**
- **Penyebab:** File path salah / File path wrong
- **Solusi:** Pastikan file ada di lokasi yang sama / Ensure file in same location

**Error: "Column Not Found"**
- **Penyebab:** Nama kolom berbeda / Column names different
- **Solusi:** Rename columns to match template (Date, Item, Quantity, Price, Total)

**Error: "Data Type Error"**
- **Penyebab:** Format data salah (misal: text di kolom number)
- **Solusi:** Clean data in Excel first, remove non-numeric characters

**Dashboard shows "No Data"**
- Check date range filter (default: last 30 days)
- Verify data loaded in Power Query
- Refresh data source

---

### Section 5: FAQs

**Q: Can I connect to multiple POS systems?**  
A: Yes, but needs manual data merging in Excel first. Contact support for help.

**Q: How often should I update data?**  
A: Daily or weekly recommended. Click "Refresh" button in Power BI.

**Q: What if my POS exports different columns?**  
A: Map your columns to template columns in Power Query. Support video available.

**Q: Can I use Google Sheets instead of Excel?**  
A: Yes! Download Google Sheet as Excel (.xlsx) first, then connect.

**Q: Data connection breaks after Windows update?**  
A: Re-connect using same steps. File path might have changed.

---

## Visual Elements

**Include in PDF:**
1. Screenshots of each POS export process (Moka, Pawoon, Majoo)
2. Power Query Editor interface (annotated)
3. Sample CSV format (color-coded columns)
4. Before/After dashboard examples
5. Error messages with solutions (side-by-side)

**Design Guidelines:**
- Use Clario brand colors
- Bilingual (Bahasa Indonesia primary, English secondary)
- Large fonts (14pt minimum for readability)
- Step numbers in circles
- Checkmarks for completed steps

---

## How to Create This PDF

**Recommended Tools:**
- Canva (easy, templates available)
- Google Slides → Export as PDF
- Figma (for designers)

**Process:**
1. Take screenshots of actual Power BI interface
2. Annotate with arrows and callouts
3. Add bilingual step-by-step text
4. Export as high-res PDF (300 DPI minimum)

**Estimated Time:** 4-6 hours

---

**Last Updated:** January 9, 2026  
**Owner:** Product Team  
**Status:** Specification ready - PDF creation pending
