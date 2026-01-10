# Vendor Master (Excel)

> [!PLAN]
> **Status:** Planned / To Be Created
> **Phase:** Future
> **File Type:** Excel Workbook (.xlsx)
>
> This document describes the Excel template for the vendor master database. The actual Excel file does not exist yet.

---

## Overview

This Excel workbook will serve as the central vendor database for PWBI F&B Growth, tracking all suppliers, contractors, and service providers. Essential for procurement, accounting, and compliance.

---

## Intended Workbook Structure

### Sheet 1: Vendor Directory

**Purpose:** Master list of all vendors and contractors.

**Columns:**
- **Vendor ID** (auto-increment: V001, V002, etc.)
- **Vendor Name** (Company/Individual name)
- **Vendor Type**
 - Contractor (Technical, Creative, Operational)
 - Service Provider (Cloud hosting, SaaS tools)
 - Consultant (Legal, Accounting)
 - Supplier (Physical goods, if any)
- **Contact Person** (Name)
- **Email**
- **Phone** (WhatsApp preferred)
- **Address** (Full address for Indonesian vendors)
- **Tax ID (NPWP)** (For Indonesian vendors)
- **Bank Details**
 - Bank Name
 - Account Number
 - Account Holder Name
- **Payment Terms** (NET 7, NET 30, etc.)
- **Currency** (IDR, USD, etc.)
- **Contract Start Date**
- **Contract End Date** (if applicable)
- **Status** (Active, Inactive, Terminated)
- **Category** (SaaS, Development, Marketing, Legal, etc.)
- **Notes** (Special instructions, performance notes)

**Conditional Formatting:**
- Red: Contract expiring within 30 days
- Yellow: Tax ID missing
- Green: All information complete

---

### Sheet 2: Spending by Vendor

**Purpose:** Track total spending with each vendor.

**Columns:**
- Vendor ID
- Vendor Name
- Month
- Amount Paid (Rp)
- Invoice Count
- YTD Total (Year-to-Date)
- % of Total Spend

**Formulas:**
- Total Spend = SUM(all payments)
- % of Total = (Vendor Spend / All Vendor Spend) Ãƒ -  100

**Use Cases:**
- Identify top vendors (80/20 rule)
- Negotiate volume discounts
- Budget planning

---

### Sheet 3: Contractor Performance

**Purpose:** Track contractor quality and reliability (if using contractors).

**Columns:**
- Vendor ID
- Vendor Name
- Total Projects
- On-Time Delivery Rate (%)
- Quality Score (1-5)
- Revision Requests (avg per project)
- Would Hire Again? (Yes/No)
- Last Project Date
- Notes

**Use for:**
- Rehire decisions
- Contractor recommendations
- Performance reviews

---

### Sheet 4: Contract Renewal Tracker

**Purpose:** Avoid missed renewals and surprise expenses.

**Columns:**
- Vendor ID
- Vendor Name
- Contract Type (SaaS, Service, Retainer)
- Start Date
- End Date
- Auto-Renew? (Yes/No)
- Monthly Cost
- Annual Cost
- Renewal Decision (Renew, Cancel, Renegotiate)
- Days Until Renewal
- Owner (Who manages this vendor)

**Alerts:**
- 60 days before renewal: Review needed
- 30 days before renewal: Decision required
- 7 days before renewal: Action urgent

---

### Sheet 5: Approved Vendor List

**Purpose:** Pre-approved vendors for quick procurement.

**Categories:**
- **Cloud Hosting:** AWS, Google Cloud, Vercel, etc.
- **SaaS Tools:** Analytics (Mixpanel), CRM (HubSpot), etc.
- **Payment Processing:** Stripe, Xendit, Midtrans
- **Development Contractors:** [Names with skillsets]
- **Design Services:** [Names/agencies]
- **Legal/Accounting:** [Approved firms]

**Benefits:**
- Faster procurement (no need for full RFP)
- Vetted quality
- Known pricing

---

## When to Create

**Priority:** Medium
**Timeline:** Before first contractor hire or Month 2 (when vendor count >5)

**Prerequisites:**
1. First vendors engaged (contractors, SaaS subscriptions)
2. Accounting system setup (to track payments)
3. Contracts signed (to extract vendor details)

---

## How to Use

### Adding New Vendors

1. Assign next Vendor ID
2. Fill all required fields (Name, Contact, Tax ID, Bank)
3. Attach contract document (or note file location)
4. Set status to "Active"

### Monthly Reconciliation

1. Update "Spending by Vendor" sheet from accounting system
2. Review contract renewals (check 30-60 day alerts)
3. Update contractor performance (after project completion)

### Annual Review

1. Archive inactive vendors (no activity >12 months)
2. Renegotiate top vendor contracts (leverage spending volume)
3. Update approved vendor list

---

## Compliance Notes

### Indonesia Tax Requirements

**For Payments >Rp 1M to Indonesian Individuals:**
- Collect NPWP (Tax ID) before payment
- Withhold 2.5% income tax (PPh 21) if no NPWP
- Report to tax office quarterly

**For International Contractors:**
- May require tax withholding (check treaty)
- Invoice must include VAT if applicable
- Payment via PayPal or wire transfer

---

## Integration

**Links to Other Systems:**
- **Accounting Software (Xero/QuickBooks):** Import vendor list for bill payment
- **Contracts Folder:** Link to contract PDFs for each vendor
- **Financial Reports:** Vendor spending feeds into P&L OpEx

---

---

## Related

- **[[biz/departments/hr/management/contractor-management-guide|Contractor Management Guide]]** - Hiring process and contractor onboarding
- **[[biz/departments/legal/templates/03-work-for-hire-agreement|Work-for-Hire Agreement]]** - Contractor contracts template
- **[[biz/departments/finance/resources/chart-of-accounts.xlsx.md|Chart of Accounts]]** - Expense categorization
- **[[biz/departments/finance/resources/financial-report-templates.xlsx.md|Financial Report Templates]]** - Vendor spending reports
- **[[products/templates/inventory-procurement/03-procurement-process|Procurement Process]]** - Vendor selection and procurement workflow

---

**File Name:** `vendor-master.xlsx` (when created)
**Location:** `docs/biz/departments/finance/resources/`
**Owner:** Finance Team / Operations Team
**Last Updated:** 2026-01-05


