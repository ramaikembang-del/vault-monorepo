# Chart of Accounts (Excel)

> [!PLAN]
> **Status:** Planned / To Be Created
> **Phase:** Future
> **File Type:** Excel Workbook (.xlsx)
>
> This document describes the Chart of Accounts structure for PWBI F&B Growth accounting. The actual Excel file does not exist yet.

---

## Overview

The Chart of Accounts (COA) is the foundational structure for all financial transactions. This Excel workbook will define every account used in the accounting system, ensuring consistent categorization and reporting.

---

## Account Numbering System

### Structure: XX-YYYY

- **XX** = Account Category (10-90)
- **YYYY** = Specific Account (incremental)

**Categories:**
- **10-19:** Assets
- **20-29:** Liabilities
- **30-39:** Equity
- **40-49:** Revenue
- **50-59:** Cost of Goods Sold (COGS)
- **60-79:** Operating Expenses
- **80-89:** Other Income/Expense
- **90-99:** Taxes

---

## Intended Account Structure

### 10-19: ASSETS

#### 10-10: Current Assets

- **10-1001** - Cash - Bank Account (Primary)
- **10-1002** - Cash - Bank Account (Savings)
- **10-1003** - Cash - PayPal
- **10-1004** - Cash - Crypto Wallet (if used)
- **10-1101** - Accounts Receivable - Customers
- **10-1201** - Prepaid Expenses - Software Subscriptions
- **10-1202** - Prepaid Expenses - Insurance
- **10-1203** - Prepaid Expenses - Rent

#### 10-20: Fixed Assets

- **10-2001** - Computer Equipment
- **10-2002** - Office Furniture
- **10-2003** - Software Licenses (perpetual)
- **10-2901** - Accumulated Depreciation

---

### 20-29: LIABILITIES

#### 20-10: Current Liabilities

- **20-1001** - Accounts Payable - Vendors
- **20-1002** - Accounts Payable - Contractors
- **20-1101** - Accrued Expenses - Salaries
- **20-1102** - Accrued Expenses - Taxes
- **20-1201** - Deferred Revenue - Annual Subscriptions (unearned)
- **20-1301** - Credit Card Payable

#### 20-20: Long-term Liabilities

- **20-2001** - Loans Payable
- **20-2002** - Notes Payable

---

### 30-39: EQUITY

- **30-1001** - Owner's Capital - Founder 1
- **30-1002** - Owner's Capital - Founder 2 (if applicable)
- **30-2001** - Retained Earnings
- **30-3001** - Current Year Profit/Loss

---

### 40-49: REVENUE

#### 40-10: Recurring Revenue

- **40-1001** - Subscription Revenue - Template Support (R1)
- **40-1002** - Subscription Revenue - Web Dashboard Lite (E1)
- **40-1003** - Subscription Revenue - Accounting Module (R2)
- **40-1004** - Subscription Revenue - SaaS Platform (C1-C4)

#### 40-20: One-Time Revenue

- **40-2001** - Product Sales - Power BI Template Tier 1
- **40-2002** - Product Sales - Power BI Template Tier 2
- **40-2003** - Product Sales - Power BI Template Tier 3
- **40-2004** - Product Sales - Custom Dashboards

#### 40-30: Other Revenue

- **40-3001** - Consulting Services
- **40-3002** - Training Revenue
- **40-3003** - Affiliate Commissions

---

### 50-59: COST OF GOODS SOLD (COGS)

- **50-1001** - Hosting Costs - AWS
- **50-1002** - Hosting Costs - Vercel
- **50-1003** - Hosting Costs - Database (Supabase)
- **50-2001** - Payment Processing Fees - Stripe
- **50-2002** - Payment Processing Fees - Xendit
- **50-3001** - Data Storage Costs
- **50-4001** - Customer Support Tools - Zendesk
- **50-4002** - Customer Support Tools - Intercom

---

### 60-79: OPERATING EXPENSES

#### 60-10: Personnel Costs

- **60-1001** - Salaries - Founders
- **60-1002** - Salaries - Employees
- **60-2001** - Contractor Fees - Development
- **60-2002** - Contractor Fees - Design
- **60-2003** - Contractor Fees - Content
- **60-3001** - Payroll Taxes (if employees)
- **60-3002** - BPJS Contributions (if employees)

#### 60-20: Marketing & Sales

- **60-4001** - Advertising - Google Ads
- **60-4002** - Advertising - Meta (Facebook/Instagram)
- **60-4003** - Advertising - LinkedIn
- **60-4004** - Content Marketing - Freelance Writers
- **60-4005** - SEO Services
- **60-4006** - Marketing Tools - HubSpot
- **60-4007** - Marketing Tools - Mailchimp

#### 60-30: Technology & Software

- **60-5001** - SaaS Subscriptions - Development Tools (GitHub, Vercel)
- **60-5002** - SaaS Subscriptions - Design Tools (Figma, Canva)
- **60-5003** - SaaS Subscriptions - Analytics (Mixpanel)
- **60-5004** - SaaS Subscriptions - Productivity (Notion, Slack)
- **60-5005** - Domain & SSL Certificates

#### 60-40: Professional Services

- **60-6001** - Legal Fees
- **60-6002** - Accounting & Bookkeeping
- **60-6003** - Consulting Fees

#### 60-50: General & Administrative

- **60-7001** - Office Rent (if applicable)
- **60-7002** - Utilities (Internet, Electricity)
- **60-7003** - Office Supplies
- **60-7004** - Insurance - General Liability
- **60-7005** - Insurance - Cyber Liability
- **60-7006** - Bank Fees
- **60-7007** - Licenses & Permits

#### 60-60: Travel & Meetings

- **60-8001** - Travel - Domestic
- **60-8002** - Travel - International
- **60-8003** - Meals & Entertainment

---

### 80-89: OTHER INCOME/EXPENSE

- **80-1001** - Interest Income - Bank
- **80-2001** - Interest Expense - Loans
- **80-3001** - Foreign Exchange Gain/Loss
- **80-4001** - Investment Income

---

### 90-99: TAXES

- **90-1001** - Corporate Income Tax (PPh Badan)
- **90-2001** - VAT Payable (PPN)
- **90-2002** - VAT Receivable
- **90-3001** - Withholding Tax (PPh 21, 23)

---

## Excel Workbook Structure

### Sheet 1: Chart of Accounts

**Columns:**
- Account Number (e.g., 40-1001)
- Account Name
- Account Type (Asset, Liability, Equity, Revenue, Expense)
- Parent Account (if sub-account)
- Active (Yes/No)
- Description (purpose of account)
- Tax Treatment (if applicable)

---

### Sheet 2: Account Mapping (for Imports)

**Purpose:** Map bank transactions to accounts.

**Columns:**
- Transaction Description (from bank statement)
- Account Number (COA)
- Notes

**Example:**
- "AWS Services"  ->  50-1001 (Hosting - AWS)
- "Stripe payout"  ->  10-1001 (Cash - Bank)
- "Google Ads"  ->  60-4001 (Advertising - Google)

---

### Sheet 3: Budget by Account

**Purpose:** Annual budget allocation.

**Columns:**
- Account Number
- Account Name
- Monthly Budget
- Annual Budget
- YTD Actual
- Variance

---

## When to Create

**Priority:** High
**Timeline:** Before Month 1 (before first transactions)

**Prerequisites:**
1. Decide on accounting method (Cash or Accrual)
2. Choose accounting software (Xero, QuickBooks, or manual Excel)
3. Understand Indonesian tax requirements

---

## How to Use

### Initial Setup

1. Create all accounts in accounting software (import from Excel)
2. Set up bank feeds (automatic transaction import)
3. Configure tax settings (PPN, PPh rates)

### Daily Operations

1. Categorize transactions using COA account numbers
2. Reconcile bank accounts weekly
3. Generate P&L and Balance Sheet monthly

### Maintenance

1. Add new accounts as business evolves (new products, new expenses)
2. Archive unused accounts (don't delete - preserve history)
3. Review annually for optimization

---

## Indonesian Tax Compliance

### VAT (PPN) Accounts

**When to use:**
- **90-2001 (VAT Payable):** VAT collected from customers (11% of sales)
- **90-2002 (VAT Receivable):** VAT paid to vendors (can offset payable)

**Filing:** Monthly (report by 20th of following month)

---

### Income Tax (PPh) Accounts

**Types:**
- **PPh 21:** Employee income tax (withheld monthly)
- **PPh 23:** Service provider tax (2% withholding on consulting fees)
- **PPh Badan:** Corporate tax (22% of profit, annual filing)

---

---

## Related

- **[[biz/departments/finance/resources/kpi-definitions|KPI Definitions]]** - Metrics reference COA accounts
- **[[biz/departments/finance/resources/financial-report-templates.xlsx.md|Financial Report Templates]]** - P&L pulls from COA
- **[[biz/departments/finance/resources/vendor-master.xlsx.md|Vendor Master]]** - Vendor payments categorized by COA
- **[[biz/departments/finance/models/03-financial-projections|Financial Projections]]** - Forward-looking financial scenarios
- **[[biz/departments/finance/setup/accounting-setup|Accounting Setup]]** - Accounting system configuration

---

## Example Transaction Flow

**Scenario:** Paying a developer contractor Rp 10M for website work.

1. **Expense recorded:**
 - Debit: 60-2001 (Contractor Fees - Development) - Rp 10M
 - Credit: 20-1002 (Accounts Payable - Contractors) - Rp 10M

2. **Payment made:**
 - Debit: 20-1002 (Accounts Payable) - Rp 10M
 - Credit: 10-1001 (Cash - Bank) - Rp 10M

3. **Shows in:**
 - P&L: OpEx increase (Contractor Fees)
 - Cash Flow: Operating activities (cash out)
 - Balance Sheet: Cash decrease, A/P decrease

---

**File Name:** `chart-of-accounts.xlsx` (when created)
**Location:** `docs/biz/departments/finance/resources/`
**Owner:** Finance Team
**Last Updated:** 2026-01-05


