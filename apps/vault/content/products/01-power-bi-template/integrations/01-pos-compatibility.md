# POS Compatibility - Excel Export Matrix

**Last Updated:** December 29, 2025

---

## Overview

This document shows how well different POS systems' export formats work with our Excel templates.

---

## Excel Export Compatibility Matrix

**How compatible is each POS with our Excel templates?**

| POS System | CSV Export | Excel Compatible | Column Mapping Needed | Auto-Import | Notes |
|-----------|-----------|-----------------|---------------------|------------|-------|
| **Pawoon** | Yes | Direct | Minimal (1-2 columns) | Yes | **Best compatibility** - exports match our template structure |
| **Moka** | Yes | Minor fixes needed | Date format | Partial | Need to convert DD/MM/YYYY -> YYYY-MM-DD |
| **Qasir** | Yes | Column rename | 3-5 columns | Partial | Product_Name -> Product, Harga -> Price, etc. |
| **Olsera** | Yes | Direct | Minimal | Yes | Good compatibility, minor header fixes |
| **iReap POS** | Yes | Moderate fixes | 5-7 columns | Manual | Different structure, needs more mapping |
| **Manual Entry** | N/A | Perfect | None | N/A | Fill templates directly (no import/export needed) |

### Legend:
- **Direct:** Works out-of-box or with minimal changes
- **Minor/Moderate fixes:** Requires column mapping or format conversion
- **Manual:** Significant restructuring needed

---

## Common Column Mappings

**Our Excel Template Column -> Common POS Export Names**

| Our Template | Common POS Names |
|-------------|-----------------|
| **Date** | tanggal, tgl, transaction_date, order_date, date_time |
| **Product** | nama_produk, item, menu_item, product_name, item_name |
| **Quantity** | jumlah, qty, quantity, amount, pieces |
| **Unit Price** | harga, price, price_per_item, unit_price, harga_satuan |
| **Total** | total, total_amount, grand_total, amount, nilai |
| **Staff** | staff, kasir, waitress, server, staff_name, pelayan |
| **Payment Method** | payment, payment_type, metode_bayar, payment_method |

---

## Tier-Based Support

### Tier 1 (Essentials - 30-50 metrics)
- **You do:** Use Column Mapping Guide (included in bundle)
- **Tools provided:** Mapping reference, video tutorial
- **Time:** 15-30 minutes to map columns in Power Query

### Tier 2/3 (Professional/Enterprise - 50-150 metrics)
- **We do:** Custom Excel template formatting to match your POS exactly
- **Process:** Send us 1 week of POS export -> We customize templates
- **Result:** Zero mapping needed - direct import works

---

## Setup Instructions by POS

### Pawoon (Best Compatibility)

**Export Steps:**
1. Dashboard -> Reports -> Transaction Report
2. Select date range
3. Export as CSV
4. Download file

**Import to Excel Template:**
1. Open Daily-Sales.xlsx
2. Power Query -> Get Data -> From File -> CSV
3. Select Pawoon export
4. Click "Transform Data"
5. Minimal mapping (usually just rename 1-2 columns)
6. Load

**Tip:** Pawoon's export structure is closest to our template.

---

### Moka (Minor Fixes Needed)

**Common Issue:** Date format is DD/MM/YYYY (our template needs YYYY-MM-DD)

**Fix:**
1. In Power Query, select Date column
2. Transform -> Data Type -> Date
3. Change locale to "Indonesia"
4. Dates now in correct format

---

### Qasir (Moderate Mapping)

**Common Mappings:**
- `Product_Name` -> **Product**
- `Harga` -> **Unit Price**
- `Jumlah` -> **Quantity**
- `Staff_ID` -> **Staff** (need to lookup staff names)

**Tier 2/3 (Professional/Enterprise) Advantage:** We create a Staff Lookup table for you.

---

### Manual Entry (No POS)

**Your workflow:**
1. Fill Daily-Sales.xlsx directly (no import needed)
2. Use dropdowns for Product, Staff, Payment Method
3. Save file
4. Power BI imports from Excel (one-click refresh)

**Benefit:** Fool-proof - no CSV format issues ever!

---

## Troubleshooting

**Issue: "Column not found" error**
- **Cause:** POS column name doesn't match template
- **Fix:** Rename column in Power Query or update template header

**Issue: Numbers showing as text**
- **Cause:** POS exports with currency symbols (Rp 50,000)
- **Fix:** Power Query -> Remove "Rp" prefix -> Change data type to Number

**Issue: Dates showing as errors**
- **Cause:** Date format mismatch
- **Fix:** Transform -> Data Type -> Date -> Select locale "Indonesia"

**Issue: Duplicate rows appearing**
- **Cause:** POS exports with subtotals/summary rows
- **Fix:** Power Query -> Remove Top Rows (skip headers) -> Remove Bottom Rows (skip totals)

---

## Tier 3 Enterprise: POS Auto-Export (Managed Service)

**For Tier 3 (Enterprise - 100-150 metrics) customers, we offer fully automated POS integration:**

### Automated Daily Export

**How it works:**
1. **We set up** a Python script on your computer or cloud server
2. **Script runs** automatically at 6 AM daily
3. **Exports data** directly from your POS (Moka/Pawoon/Qasir via API)
4. **Formats CSV** to match Power BI template exactly
5. **Saves to** designated folder
6. **Power BI refreshes** automatically (if published to Power BI Service)

**Result:** Zero manual work - wake up to updated dashboard daily!

### Supported POS Systems for Auto-Export

** Full API Support (Tier 3):**
- Moka POS
- Pawoon
- Qasir
- Olsera

**Limited API Support:**
- Other systems: Contact us for feasibility check

### What's Included in Tier 3 POS Auto-Export:

1. **Initial Setup (Week 1):**
 - API authentication configuration
 - Script installation on your server/computer
 - Test run verification
 - Fallback email alerts if export fails

2. **Ongoing Maintenance (Monthly):**
 - Monitor export success rate
 - Update script if POS API changes
 - Troubleshoot any failures within 24h
 - Monthly health check report

3. **Optional Add-Ons:**
 - WhatsApp alerts when daily export completes
 - Multi-POS consolidation (if using different systems per outlet)
 - Real-time sync (hourly instead of daily) - Contact for pricing

### Cost:

- **Included** in Tier 3 managed service (Rp 10-15M setup)
- No additional fee for standard automation
- Custom requirements quoted separately

**Note:** Tier 1/2 customers can upgrade to Tier 3 to access auto-export, or handle CSV exports manually.

---

## Related

- **[[products/01-power-bi-template/01-power-bi-template|Power BI Template Product]]** - Product overview
- **[[products/01-power-bi-template/training/02-setup-guide|Setup Guide]]** - Detailed setup instructions
- **[[products/01-power-bi-template/technical/deployment/01-deployment-guide|Deployment Guide]]** - Technical deployment procedures
- **[[products/01-power-bi-template/training/06-troubleshooting-kb|Troubleshooting KB]]** - Common issues and solutions
- **[[products/01-power-bi-template/operations/02-tier-1-delivery-sop|Tier 1 Delivery SOP]]** - Delivery procedures for different tiers

---

## Get Help

**Tier 1 (Essentials):** Use this guide + video tutorial (included)
**Tier 2/3 (Professional/Enterprise):** We handle all mapping for you (30-min setup call)

**Questions?** support@[company].com

