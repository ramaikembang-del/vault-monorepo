# Feature Specification - Simple P&L Tracker

**Product:** R2a - Simple P&L Tracker
**Version:** 1.0 (Sprint 2 - Week 5-6)
**SAK EMKM Compliant:** Yes (Indonesian Mikro Accounting Standard)

---

## Overview

Simplified profit & loss tracking for Indonesian Mikro F&B businesses (1-3 outlets). Automated revenue import from POS, manual expense tracking across 10 categories, monthly P&L report generation in SAK EMKM format.

**Target Users:** Phase 1-2 Mikro owners (Pak Budi, Rika, Rio, Dimas, Amanda)
**NOT For:** Phase 3+ multi-outlet enterprises (use Full SaaS C2+)

---

## Feature 1: Automated Revenue Tracking

### 1.1 POS Data Import

**Description:** Import daily sales data from POS system via CSV upload

**User Flow:**
1. User exports CSV from POS (Moka, Pawoon, Qasir, etc.)
2. Uploads CSV to R2a dashboard
3. System auto-detects POS format, maps columns
4. Revenue categorized automatically (dine-in, takeaway, delivery)
5. Confirmation: "Imported 234 transactions from Dec 1-25"

**Technical Details:**
- Supported formats: Moka, Pawoon, Qasir, OKEPOS, CIMS
- CSV columns required: Date, Amount, Payment Method, Revenue Type
- Auto-detection via header row pattern matching
- Duplicate detection (prevent double-import)

**Acceptance Criteria:**
- [ ] Upload CSV < 10MB in <30 seconds
- [ ] Auto-detect POS format 95%+ accuracy
- [ ] Categorize revenue (dine-in/takeaway/delivery) 90%+ accuracy
- [ ] Show import summary (X transactions, date range, total revenue)
- [ ] Error handling (invalid format  ->  clear error message)

**Priority:** P0 (Critical - core feature)

---

### 1.2 Revenue Categorization

**Description:** Automatically categorize revenue into 4 streams

**Categories:**
1. **Dine-in Revenue:** Table service sales
2. **Takeaway Revenue:** Pickup orders
3. **Delivery Revenue:** GoFood, GrabFood, direct delivery
4. **Other Revenue:** Events, catering, merchandise

**Auto-Categorization Logic:**
- POS payment method "Dine-in"  ->  Dine-in Revenue
- POS payment method "Takeaway" / "Pickup"  ->  Takeaway Revenue
- POS payment method "GoFood" / "GrabFood" / "Delivery"  ->  Delivery Revenue
- Manual override available (if miscategorized)

**Acceptance Criteria:**
- [ ] 4 revenue categories shown in P&L
- [ ] Auto-categorize 90%+ transactions correctly
- [ ] User can manually override category (drag-and-drop)
- [ ] Category changes persist for future similar transactions

**Priority:** P0

---

### 1.3 Monthly Revenue Summary

**Description:** Dashboard showing monthly revenue breakdown

**Displayed Metrics:**
- Total revenue (all sources)
- Revenue by category (dine-in, takeaway, delivery, other)
- Month-over-month change (% up/down)
- Daily average revenue
- Revenue trend line (7-day, 30-day)

**Visual Components:**
- Bar chart: Revenue by category
- Line chart: Daily revenue trend
- KPI cards: Total, MoM%, Daily Avg

**Acceptance Criteria:**
- [ ] Dashboard loads < 2 seconds
- [ ] Accurate calculations (verified against POS totals)
- [ ] Month-over-month % correct (current vs previous month)
- [ ] Responsive (mobile-friendly)

**Priority:** P1

---

## Feature 2: Manual Expense Tracking

### 2.1 Quick Expense Entry

**Description:** Simple form to log expenses

**Entry Flow:**
1. Click "Add Expense" button
2. Fill form: Amount, Category (dropdown), Description, Date
3. Optional: Upload receipt photo
4. Save  ->  Expense logged to category

**Form Fields:**
- **Amount (Required):** Rupiah, numeric only
- **Category (Required):** Dropdown of 10 categories
- **Description (Optional):** Free text, max 200 chars
- **Date (Required):** Date picker, default today
- **Receipt (Optional):** Photo upload, max 5MB

**Validation:**
- Amount > 0
- Category selected
- Date not in future
- Receipt format: JPG, PNG, PDF

**Acceptance Criteria:**
- [ ] Form validation works (show error messages)
- [ ] Save expense < 1 second
- [ ] Receipt upload successfully stored
- [ ] Expense appears in category immediately

**Priority:** P0

---

### 2.2 Expense Categories (10 SAK EMKM-Compliant)

**Categories:**

1. **COGS (Cost of Goods Sold):**
 - Ingredients, raw materials
 - Packaging (boxes, bags, cups)
 - Supplier delivery fees

2. **Labor:**
 - Staff salaries
 - Payroll tax
 - Tips/bonuses
 - Staff meals

3. **Rent:**
 - Property rent
 - Utilities deposit (initial)
 - Parking fees (if separate)

4. **Utilities:**
 - Electricity
 - Water
 - Gas
 - Internet/phone

5. **Marketing:**
 - Facebook/Instagram ads
 - Promotions/discounts
 - Print materials (flyers, banners)

6. **Supplies:**
 - Cleaning supplies
 - Utensils, napkins
 - Uniforms

7. **Maintenance & Repairs:**
 - Equipment servicing
 - Repairs (oven, fridge, POS)
 - Pest control

8. **Licenses & Permits:**
 - Business license
 - Health permits
 - Food safety certification

9. **Professional Services:**
 - Accountant fees
 - Lawyer
 - Consultant

10. **Other Expenses:**
 - Banking fees
 - Insurance
 - Miscellaneous

**Acceptance Criteria:**
- [ ] 10 categories displayed in dropdown
- [ ] Each category has description tooltip
- [ ] SAK EMKM mapping documented
- [ ] Can add sub-categories (future enhancement)

**Priority:** P0

---

### 2.3 Bulk Expense Upload

**Description:** CSV upload for historical expenses

**CSV Template Provided:**
```
Date, Amount, Category, Description
2025-12-01, 500000, COGS, Ingredients from supplier
2025-12-02, 300000, Labor, Staff salaries
```

**Upload Flow:**
1. Download CSV template
2. Fill with historical expenses
3. Upload CSV
4. System validates, shows preview
5.Confirm  ->  Expenses bulk-imported

**Validation:**
- Date format: YYYY-MM-DD
- Amount: Numeric only
- Category: Must match 10 categories
- Max 1,000 rows per upload

**Acceptance Criteria:**
- [ ] Template downloadable
- [ ] Upload processes < 10 seconds for 100 rows
- [ ] Validation errors shown clearly (row X has error Y)
- [ ] Preview before final import
- [ ] Success confirmation (X expenses imported)

**Priority:** P1

---

## Feature 3: Monthly P&L Report (SAK EMKM Format)

### 3.1 P&L Generation

**Description:** Auto-generate monthly P&L in SAK EMKM standard format

**Report Structure:**
```
LAPORAN LABA RUGI (P&L)
Periode: Desember 2025

PENDAPATAN (REVENUE)
 Dine-in Rp 15,000,000
 Takeaway Rp 8,000,000
 Delivery Rp 5,000,000
 Lainnya Rp 2,000,000
 -------------------------------------
 Total Pendapatan Rp 30,000,000

HARGA POKOK PENJUALAN (COGS)
 Bahan Baku Rp 9,000,000
 -------------------------------------
 Laba Kotor Rp 21,000,000 (70%)

BIAYA OPERASIONAL
 Tenaga Kerja Rp 6,000,000 (20%)
 Sewa Rp 3,000,000 (10%)
 Utilitas Rp 1,500,000 (5%)
 Pemasaran Rp 500,000 (1.7%)
 Perlengkapan Rp 300,000 (1%)
 Pemeliharaan Rp 200,000 (0.7%)
 Izin & Perizinan Rp 100,000 (0.3%)
 Jasa Profesional Rp 200,000 (0.7%)
 Lainnya Rp 200,000 (0.7%)
 -------------------------------------
 Total Biaya Operasional Rp 12,000,000 (40%)

LABA BERSIH Rp 9,000,000 (30%)
```

**Calculations:**
- Total Revenue = Sum of all revenue categories
- COGS = Sum of COGS category expenses
- Gross Profit = Total Revenue - COGS
- Total OpEx = Sum of 9 non-COGS expense categories
- Net Profit = Gross Profit - Total OpEx
- Percentages = (Item / Total Revenue) Ã— 100

**Acceptance Criteria:**
- [ ] P&L generated < 5 seconds
- [ ] SAK EMKM format compliance (verified by accountant)
- [ ] Calculations 100% accurate
- [ ] Month-over-month comparison available
- [ ] Indonesian language labels

**Priority:** P0

---

### 3.2 P&L Export Formats

**Description:** Export P&L in multiple formats

**Supported Formats:**

**1. PDF Export:**
- Professional layout (SAK EMKM standard)
- Company logo/name header
- Date range clearly shown
- Signatures section (owner, accountant)
- Use case: Bank loan applications

**2. Excel Export:**
- Editable spreadsheet
- Formulas preserved
- Month-over-month tabs
- Use case: Further analysis

**3. Email to Accountant:**
- Auto-send monthly P&L
- PDF attachment
- Email body: Summary (revenue, COGS, net profit)
- Scheduled: 1st of every month

**Acceptance Criteria:**
- [ ] PDF export < 10 seconds, professional quality
- [ ] Excel export preserves formulas
- [ ] Email delivery 99%+ success rate
- [ ] Email accountant feature configurable

**Priority:** P1

---

### 3.3 Month-over-Month Comparison

**Description:** Compare current month to previous months

**Comparison View:**
```
 Dec 2025 Nov 2025 Change
Revenue Rp 30M Rp 28M +7% (^)
COGS Rp 9M Rp 9.5M -5%  v 
Gross Profit Rp 21M Rp 18.5M +14% (^)
OpEx Rp 12M Rp 11M +9% (^)
Net Profit Rp 9M Rp 7.5M +20% (^)
```

**Visual Indicators:**
- Green (^) = Good (revenue up, costs down, profit up)
- Red  v  = Bad (revenue down, costs up, profit down)
- Yellow – = Neutral

**Acceptance Criteria:**
- [ ] Compare current vs previous 1-3 months
- [ ] % change calculated correctly
- [ ] Visual indicators (arrows, colors) helpful
- [ ] Insight summaries ("Food cost improved 5%")

**Priority:** P2

---

## Non-Functional Requirements

### Performance
- Dashboard load: < 3 seconds
- CSV import (100 rows): < 10 seconds
- P&L generation: < 5 seconds
- PDF export: < 10 seconds

### Scalability
- Support up to 3,000 transactions/month
- Up to 500 expense entries/month
- 24-month data retention

### Security
- Data encryption at rest
- Secure CSV upload (virus scan)
- Role-based access (owner only for now)

### Usability
- Mobile-responsive (80% of users on mobile)
- Indonesian language primary
- English toggle available

---

**Related Documents:**
- [[technical-spec|technical-spec.md]] - Database schema, API design
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/product-scope|product-scope.md]] - What's included/excluded
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/R2a-pl-analytics|../]] - Product overview

**Last Updated:** 2025-12-26
**Owner:** Product/Engineering Lead


