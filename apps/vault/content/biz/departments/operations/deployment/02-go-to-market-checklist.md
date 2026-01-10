# Sprint 1 Go-to-Market Checklist
**Version:** 1.0
**Date:** December 26, 2025
**Purpose:** Operational, legal, and marketing tasks to launch Sprint 1 products

> [!IMPORTANT]
> **Critical Path:** Google Drive (Week 1)  ->  Midtrans (Week 2)  ->  Legal Docs (Week 3)  ->  Public Launch (Week 4)

---

## Overview

| Phase | Timeline | Can Do | Cannot Do |
|-------|----------|--------|-----------|
| **Development** | Week 1-2 | Build products |  -  |
| **Private Beta** | Week 2-3 | Sell to friends/family | Sell publicly |
| **Soft Launch** | Week 3-4 | Sell publicly (manual) | Scale marketing |
| **Public Launch** | Week 4+ | Full marketing |  -  |

---

# Week 1: Development Setup

## Operational Tasks

### [x] CRITICAL: Google Drive Setup (1 hour)

**Purpose:** Deliver A1 templates and share R1 files
**Deadline:** Before first customer
**Owner:** Operations

**Checklist:**
- [ ] Create Google account (if needed): `clario.support@gmail.com`
- [ ] Create folder structure:
```
Clario Products/
|-- A1-Power-BI-Template/
| |-- Current Version/
| | |-- F&B-Analytics-Template-v1.0.0.pbit
| |-- Archive/
| |-- Sample Data/
| |-- sales-sample.csv
| |-- products-sample.csv
| |-- staff-sample.csv
|-- R1-Support-Subscribers/
| |-- [Customer Name 1]/
| |-- [Customer Name 2]/
| |-- Shared Resources/
| |-- FAQ.pdf
| |-- Setup-Guide.pdf
| |-- Video-Tutorials/
|-- E1-Web-Dashboard-Lite/
 |-- Installers/
 |-- Current/
 | |-- WebDashboardLite-v1.0.0.exe
 |-- Archive/
```
- [ ] Set sharing permissions (View only for customers)
- [ ] Test: Share link with yourself, verify access

**Cost:** Free (15 GB storage)

---

### [!] CRITICAL: WhatsApp Business Setup (1 hour)

**Purpose:** R1 customer support channel
**Deadline:** Before first R1 subscriber
**Owner:** Operations

**Checklist:**
- [ ] Get business phone number (Indonesian +62 number recommended)
- [ ] Download WhatsApp Business app
- [ ] Set up business profile:
 - Business name: "Clario Support"
 - Category: "Software Company"
 - Description: "F&B Analytics Support"
 - Hours: "Senin-Jumat, 09:00-17:00 WIB"
 - Website: [Your website]
- [ ] Create quick replies:
 - `/greeting`  ->  Welcome message
 - `/hours`  ->  Support hours
 - `/ticket`  ->  Create ticket template
- [ ] Set up auto-reply for after hours
- [ ] Configure away message
- [ ] Add business number to all R1 email templates

**Cost:** Free

---

### Optional: Basic Tracking Setup (2 hours)

**Purpose:** Track customers and MRR
**Deadline:** Before first sale
**Owner:** Operations

**Option 1: Google Sheets (Recommended for MVP)**
- [ ] Create "Clario Customers" spreadsheet
- [ ] Sheet 1: Customers
 - Columns: ID, Name, Email, WhatsApp, Product, Start Date, Status, MRR, Last Payment, Notes
- [ ] Sheet 2: Tickets (R1 support)
 - Columns: Ticket ID, Customer ID, Date, Issue, Priority, Status, Resolution, Rating
- [ ] Sheet 3: MRR Tracker
 - Columns: Month, New Customers, Churned, Net New, Total MRR, Churn Rate %
- [ ] Add formulas for auto-calculation
- [ ] Share with team (if applicable)

**Option 2: Notion (Better for scaling)**
- [ ] Create Notion workspace
- [ ] Create Customers database
- [ ] Create Support tickets database
- [ ] Link databases with relations

**Cost:** Free (Sheets) or Free (Notion personal)

---

# Week 2: Payment & Infrastructure

## Payment Processing

### [x] CRITICAL: Midtrans Account Setup (1-3 days)

**Purpose:** Accept payments for A1, R1, E1
**Deadline:** Before public launch
**Owner:** Finance/Operations

**Checklist:**
- [ ] Go to [Midtrans](https://midtrans.com)
- [ ] Sign up for Merchant account
- [ ] Complete KYB (Know Your Business):
 - Company name: [Your company]
 - NIB (Nomor Induk Berusaha)
 - NPWP (Tax ID)
 - Bank account details
 - Director ID card
- [ ] Wait for approval (1-3 business days)
- [ ] Activate Snap payment gateway
- [ ] Get API credentials:
 - Server Key
 - Client Key
- [ ] Set up webhook URL (for subscription payments)
- [ ] Test payment with Rp 10,000 transaction
- [ ] Verify settlement to bank account

**Fees:** 2.9% + Rp 2,000 per transaction

**Documentation:** [Midtrans Documentation](https://docs.midtrans.com/)

---

### Create Payment Links (1 hour)

**Purpose:** Accept one-time and subscription payments
**Deadline:** Before first public sale
**Owner:** Operations

**Templates to create:**

**A1: Power BI Template (One-time)**
```json
Product: F&B Analytics Template
Price: Rp 2,000,000 - Rp 7,000,000 (tiered)
Payment Type: One-time
Delivery: Automatic email with Google Drive link
```

**R1: Template Support (Subscription)**
```json
Product: Monthly Support
Price: Rp 75,000/month
Payment Type: Recurring
Delivery: Welcome email + Google Drive access
```

**E1: Web Dashboard Lite (Freemium  ->  Paid)**
```json
Starter Tier: Rp 200,000/month
Pro Tier: Rp 350,000/month
Payment Type: Recurring
Delivery: In-app upgrade
```

- [ ] Create payment page for each product
- [ ] Set up success/failure redirect URLs
- [ ] Configure email notifications
- [ ] Test each payment link end-to-end

---

## Development Deliverables

### Sample Data Creation (4 hours)

**Purpose:** Realistic Indonesian F&B data for demos
**Deadline:** Before A1 completion
**Owner:** Development

**Checklist:**
- [ ] Create realistic Sales.csv (3 months, ~5,000 transactions)
 - Indonesian product names (Kopi Susu, Nasi Goreng, Es Teh, etc.)
 - Indonesian staff names (Budi, Rina, Siti, etc.)
 - Realistic pricing (Rp 15,000 - Rp 50,000 range)
 - Peak hours: lunch (11-13), dinner (18-20), weekend spikes
- [ ] Create Products.csv (30-50 items)
 - Categories: food, beverage, dessert
 - Cost prices with 30-40% margin
- [ ] Create Staff.csv (5-10 staff)
 - Hourly rates: Rp 12,000 - Rp 20,000
- [ ] Verify BCG Matrix shows realistic quadrants
- [ ] Verify Health Score calculates correctly
- [ ] Package as "Sample Data.zip"

---

# Week 3: Legal & Documentation

## Legal Documents

### [!] REQUIRED: Terms of Service (2-4 hours)

**Purpose:** Legal protection for selling products
**Deadline:** Before public launch
**Owner:** Legal/Founder

**Checklist:**
- [ ] Use template: [Terms of Service Generator](https://www.termsofservicegenerator.net/)
- [ ] Customize for Clario:
 - Company name and address
 - Products: A1, R1, E1
 - Governing law: Indonesian law
 - Dispute resolution: Arbitration in [City]
- [ ] Key clauses to include:
 - Subscription terms (R1, E1 paid tiers)
 - Refund policy (30-day for subscriptions)
 - Data ownership (customer owns their data)
 - Service availability (99% uptime target, but no SLA for free tier)
 - Acceptable use (no reselling, no reverse engineering)
 - Termination rights
- [ ] Review by lawyer (recommended but optional for MVP)
- [ ] Publish to website: `/terms`
- [ ] Add link to all purchase flows
- [ ] Version: 1.0, effective date: [Launch Date]

**Cost:** Free (template) or Rp 2-5M (lawyer review)

---

### [!] REQUIRED: Privacy Policy (1-2 hours)

**Purpose:** GDPR/UU PDP compliance
**Deadline:** Before collecting emails
**Owner:** Legal/Founder

**Checklist:**
- [ ] Use template: [Privacy Policy Generator](https://www.privacypolicygenerator.info/)
- [ ] Specify data collected:
 - **A1:** Email, name, payment info (via Midtrans)
 - **R1:** Email, name, WhatsApp number, support tickets
 - **E1:** Local data only (offline), no cloud collection
- [ ] Specify data usage:
 - Deliver products
 - Provide support
 - Send transactional emails (receipts, updates)
 - Optional: Marketing emails (with opt-in)
- [ ] Specify data sharing:
 - Payment processor: Midtrans
 - Email provider: Gmail
 - No selling to third parties
- [ ] Specify data retention:
 - Active customers: Indefinitely
 - Churned customers: 1 year, then deleted
- [ ] Specify user rights:
 - Access data (via email request)
 - Delete data (within 30 days)
 - Export data (CSV format)
- [ ] Indonesian compliance notes:
 - Reference UU PDP No. 27/2022
 - Data stored in Indonesia where possible
- [ ] Publish to website: `/privacy`
- [ ] Add link to all forms collecting data

**Cost:** Free (template)

---

### [!] REQUIRED: EULA for E1 (2 hours)

**Purpose:** Software distribution license
**Deadline:** Before distributing E1 .exe
**Owner:** Legal/Founder

**Checklist:**
- [ ] Use template: Standard EULA for downloadable software
- [ ] Key clauses:
 - License grant (non-exclusive, non-transferable)
 - Restrictions (no reverse engineering, no redistribution)
 - Free vs Paid tier limitations
 - Warranty disclaimer (AS-IS, no guarantee)
 - Liability limitation (max liability = amount paid)
 - Termination rights
 - Update/modification rights
- [ ] Display during E1 installation (checkbox "I agree")
- [ ] Store acceptance timestamp in SQLite
- [ ] Include in E1 app: Help  ->  License Agreement

**Cost:** Free (template)

---

### Optional: UU PDP Compliance Documentation (4-8 hours)

**Purpose:** Indonesian Data Protection Law compliance
**Deadline:** Before 100+ customers OR processing sensitive data
**Owner:** Legal/Founder

**When Required:**
- Processing data of >100 Indonesian citizens
- Processing sensitive data (financial transactions >Rp 1M)
- Cross-border data transfer

**Checklist (defer until Month 2+):**
- [ ] Register as Data Controller with KOMINFO
- [ ] Appoint Data Protection Officer (DPO)
- [ ] Conduct Data Protection Impact Assessment (DPIA)
- [ ] Implement data security measures:
 - Encryption for data at rest
 - Encryption for data in transit (HTTPS)
 - Access controls
 - Audit logging
- [ ] Create data breach response plan
- [ ] Document data processing activities
- [ ] Obtain explicit consent for data processing

**Cost:** Rp 5-15M (legal consulting + implementation)

---

## Documentation

### Product Documentation (1 day)

**Purpose:** Help customers use products
**Deadline:** Before first customer
**Owner:** Product/Operations

**A1: Power BI Template**
- [ ] Setup Guide (PDF, 5-10 pages):
 - Install Power BI Desktop
 - Download template
 - Prepare your CSV data
 - Connect to data
 - Refresh dashboard
 - Troubleshooting (top 5 issues)
- [ ] Column Mapping Reference (PDF, 2 pages)
- [ ] Video Tutorial (5-8 minutes):
 - Screen recording with voiceover (Bahasa Indonesia)
 - Upload to YouTube (unlisted)

**R1: Template Support**
- [ ] FAQ Document (PDF, 3-5 pages):
 - What's included in support?
 - How to contact support?
 - Response time expectations
 - How to cancel?
 - 10+ common questions
- [ ] Welcome Email template (already created in tech spec)

**E1: Web Dashboard Lite**
- [ ] In-app onboarding (1 screen, <3 min)
- [ ] Help tooltips (? icons) for each metric
- [ ] Quick Start Guide (PDF, 3 pages, optional)

---

# Week 4: Marketing & Launch

## Marketing Assets

### Product Screenshots (4 hours)

**Purpose:** Landing page, social media, ads
**Deadline:** Before creating landing page
**Owner:** Marketing/Founder

**Checklist:**
- [ ] **A1: Power BI Template**
 - Screenshot 1: Executive Summary page (Health Score, KPIs)
 - Screenshot 2: BCG Matrix (with realistic data)
 - Screenshot 3: Peak Hours Heatmap
 - Screenshot 4: All 6 pages overview
 - Resolution: 1920Ã—1080 (Full HD)
 - Crop/clean: Remove sample customer names, use generic data
- [ ] **E1: Web Dashboard Lite**
 - Screenshot 1: Financial Health tab (Health Score 78/100)
 - Screenshot 2: Product Performance (BCG Matrix)
 - Screenshot 3: Operations & Staff (Peak Hours)
 - Mobile view: 390Ã—844 (iPhone)
- [ ] **R1: Template Support**
 - Screenshot: WhatsApp conversation (mock support chat)
 - Screenshot: Google Drive folder structure
- [ ] Export as PNG (lossless)
- [ ] Optimize for web (<500KB each)
- [ ] Store in `/marketing/assets/screenshots/`

---

### Demo Videos (1 day)

**Purpose:** Show product in action
**Deadline:** Before paid ads (optional for organic launch)
**Owner:** Marketing/Founder

**Priority Order:**
1. **A1: Power BI Template** (CRITICAL  -  hardest to explain)
2. **E1: Web Dashboard Lite** (IMPORTANT  -  new concept)
3. **R1: Template Support** (NICE-TO-HAVE  -  self-explanatory)

**A1 Demo Video (5-8 minutes):**
- [ ] Script:
 - Problem: "Punya data POS tapi bingung analisis?"
 - Solution: "Template Power BI siap pakai"
 - Demo: Import CSV  ->  Lihat dashboard  ->  Insights
 - CTA: "Download sekarang, Rp 2 juta"
- [ ] Screen recording (OBS Studio or Loom)
- [ ] Voiceover (Bahasa Indonesia, clear audio)
- [ ] Add captions (auto-generate, then edit)
- [ ] Background music (subtle, royalty-free)
- [ ] Outro: Logo + CTA + Link
- [ ] Upload to YouTube (public)
- [ ] Embed on landing page

**E1 Demo Video (3-5 minutes):**
- [ ] Similar structure to A1
- [ ] Focus on offline-first, privacy messaging
- [ ] Show: Import CSV  ->  30-second insight  ->  Health Score

**Tools:**
- **Recording:** OBS Studio (free) or Loom (Rp 100K/mo)
- **Editing:** DaVinci Resolve (free) or CapCut (free)
- **Music:** YouTube Audio Library (free)

---

### Landing Page (1-2 days)

**Purpose:** Convert traffic to sales
**Deadline:** Before marketing publicly
**Owner:** Marketing/Developer

**Option 1: Quick MVP (4 hours)**
- [ ] Use Carrd.co (Rp 150K/year) or Tally.so (free)
- [ ] Single page with:
 - Hero: "Analisis Bisnis F&B Anda dalam 30 Detik"
 - Problem statement
 - 3 products (A1, R1, E1) with screenshots
 - Pricing
 - CTA: "Beli Sekarang" (Midtrans link) or "Download Gratis" (E1)
 - Footer: Terms, Privacy links

**Option 2: Professional (1-2 days)**
- [ ] Next.js website (custom code)
- [ ] Sections:
 - Hero with video
 - Social proof (testimonials, if available)
 - Features grid
 - Pricing comparison table
 - FAQ
 - CTA sections
- [ ] Deploy: Vercel (free) or Netlify (free)
- [ ] Domain: clario.id or clario.co.id (Rp 150-300K/year)

**SEO Basics:**
- [ ] Title: "Clario - Analisis Bisnis F&B untuk Warung & Restoran"
- [ ] Meta description (160 chars)
- [ ] Open Graph tags (for social sharing)
- [ ] Sitemap.xml
- [ ] Google Analytics (optional)

---

### Email Templates (2 hours)

**Purpose:** Automated customer communications
**Deadline:** Before first sale
**Owner:** Operations

**Already Created in R1 Tech Spec:**
- [x] Post-purchase offer (A1  ->  R1 upsell)
- [x] Welcome email (R1 onboarding)
- [x] Renewal reminder (R1 Day 25)

**Additional Templates Needed:**
- [ ] **A1 Purchase Confirmation**
 ```
 Subject: Template Anda Siap!

 Halo [Name],

 Terima kasih sudah membeli F&B Analytics Template!

 Download: [Google Drive Link]
 Setup Guide: [PDF Link]
 Video Tutorial: [YouTube Link]

 Butuh bantuan? Upgrade ke Support Bulanan (Rp 75K/bulan):
 [Link to R1 offer]
 ```

- [ ] **E1 Download Confirmation** (after install)
 ```
 Subject: Selamat Datang di Clario!

 Terima kasih sudah install Web Dashboard Lite.

 Mulai sekarang:
 1. Import CSV dari POS Anda
 2. Lihat Health Score bisnis
 3. Dapatkan insight dalam 30 detik

 Butuh fitur lebih? Upgrade ke Starter (Rp 200K/bulan)
 ```

- [ ] **Payment Failed** (R1 subscription)
 ```
 Subject: Pembayaran Gagal - Action Required

 Halo [Name],

 Pembayaran untuk [Product] gagal diproses.

 Silakan update metode pembayaran: [Link]

 Akses Anda akan suspended dalam 3 hari jika tidak diperbaiki.
 ```

---

## Launch Preparation

### Pre-Launch Checklist (Week 4)

**1 Day Before Public Launch:**
- [ ] **Technical:**
 - [ ] A1 template uploaded to Google Drive
 - [ ] E1 installer (.exe) signed and uploaded
 - [ ] All payment links tested and working
 - [ ] Google Sheets/Notion CRM ready
 - [ ] WhatsApp Business active
- [ ] **Legal:**
 - [ ] Terms of Service published
 - [ ] Privacy Policy published
 - [ ] EULA included in E1 installer
- [ ] **Marketing:**
 - [ ] Landing page live
 - [ ] All screenshots uploaded
 - [ ] Demo videos published
 - [ ] Email templates configured
- [ ] **Operations:**
 - [ ] Support hours defined
 - [ ] First-response templates ready (WhatsApp + Email)
 - [ ] Escalation path documented
 - [ ] Pricing confirmed

**Launch Day:**
- [ ] Soft launch to personal network (WhatsApp groups, friends)
- [ ] Post to relevant Facebook groups (F&B owner communities)
- [ ] Monitor first purchases
- [ ] Respond to questions within SLA
- [ ] Track metrics (signups, conversions, churn)

---

# Post-Launch (Week 5+)

## Ongoing Operations

### Daily Tasks
- [ ] Monitor WhatsApp Business for R1 support requests (response <24hr)
- [ ] Check Midtrans dashboard for payments
- [ ] Update Google Sheets with new customers
- [ ] Respond to email inquiries

### Weekly Tasks
- [ ] Review MRR and churn metrics
- [ ] Update FAQ with new common questions
- [ ] Check for A1 template bugs/feature requests
- [ ] Send weekly summary to team (if applicable)

### Monthly Tasks
- [ ] Release A1 template update (if needed)
- [ ] Review support playbook (add new issues)
- [ ] Send renewal reminders to R1 subscribers (Day 25)
- [ ] NPS survey to customers (optional)
- [ ] Financial reconciliation (revenue vs expenses)

---

# Budget Summary

| Category | Item | Cost | When |
|----------|------|------|------|
| **Operational** | Google Drive | Free | Week 1 |
| **Operational** | WhatsApp Business | Free | Week 1 |
| **Operational** | Google Sheets/Notion | Free | Week 1 |
| **Payment** | Midtrans fees | 2.9% + Rp 2K/txn | Per sale |
| **Legal** | Terms/Privacy (DIY) | Free | Week 3 |
| **Legal** | Lawyer review (optional) | Rp 2-5M | Week 3 |
| **Legal** | UU PDP compliance (defer) | Rp 5-15M | Month 2+ |
| **Marketing** | Domain (.id) | Rp 150-300K/year | Week 4 |
| **Marketing** | Landing page (Carrd) | Rp 150K/year | Week 4 |
| **Marketing** | Landing page (custom) | Free (Vercel) | Week 4 |
| **Marketing** | Video editing (Loom) | Rp 100K/mo (optional) | Week 4 |
| **Total (MVP)** |  -  | **Rp 300-500K** |  -  |
| **Total (w/ lawyer)** |  -  | **Rp 2.5-5.5M** |  -  |

---

# Critical Path Timeline

```
Week 1 Week 2 Week 3 Week 4
|-----+-----+-----+-----|
| Dev | Dev |Legal|Launch|
| | | | |
|-Google Drive (Day 1)
| |-Midtrans (Day 8-10)
| | |-Terms/Privacy (Day 15-18)
| | | |-Screenshots (Day 22)
| | | |-Landing Page (Day 23-24)
| | | |-PUBLIC LAUNCH (Day 28)
| | |
| |-WhatsApp (Day 10)
| |-Sample Data (Day 12-13)
```

**Blockers:**
- Can't deliver A1 without Google Drive ✋
- Can't accept payment without Midtrans ✋
- Can't sell publicly without Terms/Privacy ✋
- Can't market without screenshots/landing page ✋

---

**Last Updated:** December 26, 2025
**Owner:** Operations Team
**Status:** Ready to Execute

---

## Next Steps

- [ ] Assign owners to each task
- [ ] Set calendar reminders for deadlines
- [ ] Create tracking sheet for checklist progress
- [ ] Start with Google Drive setup (1 hour, do today!)

---

**Related Documents:**
- [[products/01-power-bi-template/technical/deployment/01-deployment-guide|Deployment Guide]] - Technical deployment steps
- [[products/16-marketing-automator/marketing/marketing|Marketing Resources]] - Marketing planning
- [[biz/departments/operations/operations|Operations Hub]] - All operations procedures

