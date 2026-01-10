# Invoicing & Payments

**Last Updated:** 2025-12-27
**Owner:** Finance Team

---

## Overview

Invoicing, payment processing, and accounts receivable management for PWBI FnB Growth.

---

## Invoicing Schedule

**One-Time Products (A1 Power BI Templates):**
- Invoice sent immediately upon purchase
- Payment due: Immediate (via Stripe/bank transfer)

**Subscription Products (R1, E1, R2a-f, C1):**
- Monthly billing cycle
- Invoice sent 3 days before renewal
- Auto-charge on renewal date
- Payment method: Credit card (Stripe) or bank transfer

---

## Invoice Creation Process

### Automated (Stripe)
- Subscriptions auto-invoice via Stripe
- Customers receive email invoice
- Auto-charge on renewal date

### Manual (Bank Transfer)
- For customers preferring bank transfer
- Finance creates invoice in QuickBooks
- Email invoice PDF to customer
- Follow up if not paid within 7 days

**Invoice Format:**
```
PWBI F&B Growth
Invoice #: INV-2025-0001
Date: 2025-01-15
Due Date: 2025-01-15 (for subscriptions) or Immediate (for templates)

Bill To:
[Customer Name]
[Address]

Description Qty Rate Amount
-------------------------------------------------------
Power BI Template (A1) 1 Rp 2,500,000 Rp 2,500,000

Subtotal: Rp 2,500,000
Tax (11% PPN): Rp 275,000
Total: Rp 2,775,000

Payment Methods:
- Credit Card: [Stripe link]
- Bank Transfer: BCA 1234567890 (PWBI F&B Growth)
```

---

## Payment Processing

**Accepted Payment Methods:**
1. **Credit Card (Stripe)** - Preferred for subscriptions
2. **Bank Transfer** - For larger one-time payments
3. **E-Wallet (Xendit)** - OVO, GoPay, Dana (for smaller amounts)

**Payment Confirmation:**
- Auto-confirmed for Stripe
- Manual reconciliation for bank transfers (daily)
- Send payment receipt email within 24 hours

---

## Collections Process

**Overdue Payment Stages:**

**Day 0 (Payment Due):**
- Auto-charge via Stripe
- If failed, send payment reminder email

**Day 3:**
- Second reminder email
- WhatsApp message to customer

**Day 7:**
- Phone call to customer
- Offer payment plan if needed

**Day 14:**
- Final notice email
- Suspend service (for subscriptions)

**Day 30:**
- Escalate to CSM Manager / CFO
- Consider legal action (for amounts >Rp 10M)

---

## Failed Payment Retry Logic

**Credit Card Failures:**
- Retry Day 1, Day 3, Day 7
- Update card info via email link
- Suspend access after 3 failed retries

---

## Refund Policy

**Power BI Templates (A1):**
- 7-day money-back guarantee
- If template doesn't work as described

**Subscriptions (R1, E1, R2, C1):**
- Pro-rated refund if canceled mid-month
- Full refund if service outage >48 hours

**Refund Process:**
1. Customer requests refund (support@pwbi.id)
2. CSM reviews reason
3. CFO approves (if >Rp 1M)
4. Finance processes within 7 business days

---

## Accounts Receivable (AR) Tracking

**Weekly AR Report:**
- Total outstanding: Rp [X]
- 0-7 days overdue: Rp [Y]
- 8-30 days overdue: Rp [Z]
- >30 days overdue: Rp [W] (escalate)

**Target:** <5% of revenue in AR aging >30 days

---

## Tax Compliance (Indonesia)

**PPN (VAT):** 11% added to all invoices
**PPh 23:** 2% withholding (for some corporate customers)

**Tax Reporting:**
- Monthly PPN filing
- Annual tax reconciliation

---

**Related Documents:**
- [[biz/departments/finance/budgeting/02-budget-planning|Budget Planning]] - Revenue forecasting
- [[biz/departments/finance/revenue/02-revenue-tracking|Revenue Tracking]] - Revenue recognition

**Last Updated:** 2025-12-27
