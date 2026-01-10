# Financial Report Templates (Excel)

> [!PLAN]
> **Status:** Planned / To Be Created
> **Phase:** Future
> **File Type:** Excel Workbook (.xlsx)
>
> This document describes the Excel templates that will be created for financial reporting. The actual Excel file does not exist yet.

---

## Overview

This Excel workbook will contain standardized financial report templates for PWBI F&B Growth. Templates ensure consistent reporting across periods and enable accurate financial analysis.

---

## Intended Workbook Structure

### Sheet 1: Monthly P&L (Profit & Loss)

**Purpose:** Track monthly revenue, expenses, and profitability.

**Columns:**
- Date (Month/Year)
- **Revenue:**
 - MRR (Monthly Recurring Revenue)
 - One-Time Revenue
 - Other Revenue
 - **Total Revenue**
- **Cost of Goods Sold (COGS):**
 - Hosting (AWS, Vercel)
 - Payment Processing Fees
 - Data Storage
 - **Total COGS**
- **Gross Profit** (Revenue - COGS)
- **Operating Expenses:**
 - Salaries & Wages
 - Contractor Fees
 - Marketing Spend
 - Software Subscriptions
 - Office & Utilities
 - Professional Services (Legal, Accounting)
 - **Total OpEx**
- **Operating Profit** (Gross Profit - OpEx)
- **Taxes**
- **Net Profit**

**Formulas:**
- Gross Margin % = (Gross Profit / Total Revenue) Ã— 100
- Operating Margin % = (Operating Profit / Total Revenue) Ã— 100
- Net Margin % = (Net Profit / Total Revenue) Ã— 100

---

### Sheet 2: Cash Flow Statement

**Purpose:** Track cash inflows and outflows.

**Sections:**
- **Operating Activities:**
 - Cash from customers
 - Cash paid to suppliers
 - Cash paid for salaries
 - Net cash from operations
- **Investing Activities:**
 - Equipment purchases
 - Software investments
 - Net cash from investing
- **Financing Activities:**
 - Loans received
 - Loans repaid
 - Equity investments
 - Net cash from financing
- **Net Change in Cash**
- **Beginning Cash Balance**
- **Ending Cash Balance**

---

### Sheet 3: Balance Sheet

**Purpose:** Snapshot of assets, liabilities, and equity.

**Assets:**
- **Current Assets:**
 - Cash
 - Accounts Receivable
 - Prepaid Expenses
- **Fixed Assets:**
 - Equipment
 - Software
 - (Less: Accumulated Depreciation)
- **Total Assets**

**Liabilities:**
- **Current Liabilities:**
 - Accounts Payable
 - Accrued Expenses
 - Deferred Revenue
- **Long-term Liabilities:**
 - Loans Payable
- **Total Liabilities**

**Equity:**
- Paid-in Capital
- Retained Earnings
- **Total Equity**

**Formula:** Assets = Liabilities + Equity

---

### Sheet 4: Revenue by Product

**Purpose:** Break down revenue by each product in the 22-product ecosystem.

**Columns:**
- Product ID (01-18)
- Product Name
- Product Type (One-Time, Subscription, Hybrid)
- Units Sold
- ARPU (if subscription)
- Total Revenue
- % of Total Revenue

**Pivot:** Monthly view with product breakdown.

---

### Sheet 5: Sprint Gate Metrics

**Purpose:** Track Sprint 1-3 gate criteria.

**Metrics:**
- **Gate 1A (Week 2):**
 - Power BI Template sales
 - Target: 5+
 - Actual: [Input]
 - Status: [Met/Not Met]
- **Gate 1B (Week 4):**
 - Web Dashboard Lite MAU
 - Target: 50+
 - Actual: [Input]
 - Engagement rate
 - Target: 30%+
 - Actual: [Input]
- **Gate 1C (Week 4):**
 - Template Support conversion rate
 - Target: 30%+
 - Actual: [Input]
- **Gate 2 (Week 8):**
 - Lite paid conversion
 - Target: 5%+
 - Actual: [Input]

---

### Sheet 6: Budget vs. Actual

**Purpose:** Compare planned budget to actual spending.

**Columns:**
- Category (Revenue, COGS, OpEx subcategories)
- Budgeted Amount (Monthly)
- Actual Amount
- Variance (Actual - Budget)
- Variance % ((Variance / Budget) Ã— 100)

**Conditional Formatting:**
- Green: Under budget (good)
- Red: Over budget (bad)

---

## When to Create

**Priority:** Medium
**Timeline:** Before Month 3 or first investor/partner financial review

**Prerequisites:**
1. Accounting software selected (Xero, QuickBooks, or manual)
2. First month of financial data collected
3. Chart of Accounts defined (see `chart-of-accounts.xlsx.md`)

---

## How to Use

1. **Monthly:** Input actual financial data from accounting system
2. **Weekly:** Review Sprint gate metrics
3. **Quarterly:** Analyze trends, compare budget vs. actual
4. **Annually:** Archive and create new workbook for new fiscal year

---

---

## Related

- **[[biz/departments/finance/resources/kpi-definitions|KPI Definitions]]** - Metric formulas and targets
- **[[biz/departments/finance/resources/chart-of-accounts.xlsx.md|Chart of Accounts]]** - Account structure
- **[[biz/departments/finance/models/03-financial-projections|Financial Projections]]** - Forward-looking financial scenarios
- **[[biz/strategy/frameworks/02-okr-framework|OKR Framework]]** - Quarterly goals and metrics
- **[[biz/strategy/planning/execution/03-sprint-1-roadmap|Sprint 1 Master Plan]]** - Sprint gate metrics tracking

---

**File Name:** `financial-report-templates.xlsx` (when created)
**Location:** `docs/biz/departments/finance/resources/`
**Owner:** Finance Team
**Last Updated:** 2026-01-05


