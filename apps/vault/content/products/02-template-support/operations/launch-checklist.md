# R1: Template Support - Launch Checklist
**Product:** Monthly Template Support Subscription
**Target Launch:** Week 2 (Day 11+) — AFTER A1 launches
**Minimum Viable Launch:** Week 2 (Day 12)

---

## Quick Summary

| Requirement | Status | Blocker? | Time | Owner |
|-------------|--------|----------|------|-------|
| **DEPENDENCY:** A1 launched | [ ] | YES | — | — |
| WhatsApp Business setup | [ ] | YES | 1 hour | Ops |
| Email templates | [ ] | YES | 2 hours | Ops |
| Support playbook | [ ] | YES | Already done | Ops |
| Midtrans subscription | [ ] | YES | Already done | Finance |
| Google Drive folders | [ ] | HIGHLY RECOMMENDED | 30 min | Ops |
| FAQ document | [ ] | Optional | 2 hours | Product |
| CRM/Tracking | [ ] | Optional | 1 hour | Ops |

**Can launch with:** A1 live + WhatsApp + Email templates + Midtrans
**Should have:** FAQ + Google Drive folders

---

## Pre-Requisites

### CRITICAL: A1 Must Be Launched First

**Why:** R1 is support for A1 customers. No A1 = No R1 customers.

- [ ] A1 Power BI Template is publicly available
- [ ] At least 1 A1 customer exists (ideally 5-10 from beta)
- [ ] A1 payment flow working

**If A1 not launched yet:** Complete [[launch-checklist.md|A1 Launch Checklist]] first.

---

## Infrastructure Setup (Day 10-11)

### CRITICAL: WhatsApp Business Setup (1 hour)

**Must complete before:** First R1 subscriber
**Blocks:** Customer support delivery

- [ ] Get dedicated business phone number
 - Recommended: Indonesian +62 number (local credibility)
 - Option 1: Use personal number (not recommended for scaling)
 - Option 2: Get new SIM card (Rp 50K)
 - Option 3: Use VOIP number (e.g., Twilio)

- [ ] Download WhatsApp Business app
 - iOS: App Store
 - Android: Google Play
 - Desktop: Download from whatsapp.com/business

- [ ] Set up business profile:
 - [ ] Business name: "Clario Support"
 - [ ] Category: "Software Company"
 - [ ] Description: "F&B Analytics Support - Senin-Jumat 09:00-17:00 WIB"
 - [ ] Address: [Your address] (optional)
 - [ ] Website: [Your landing page]
 - [ ] Email: support@clario.id
 - [ ] Profile photo: Clario logo

- [ ] Configure catalog (optional):
 - [ ] Product 1: Monthly Support (Rp 75K/month)
 - [ ] Product 2: Power BI Template (link to A1)

- [ ] Set up quick replies (save as shortcuts):
 ```
 /greeting
 Halo! Terima kasih menghubungi Clario Support
 Saya [Nama], siap membantu Anda.
 Silakan jelaskan pertanyaan atau masalah Anda.

 /hours
 Jam Support: Senin-Jumat, 09:00-17:00 WIB
 Di luar jam tersebut, kami akan balas maksimal 24 jam.

 /ticket
 Terima kasih sudah menghubungi kami.
 Kami sedang memeriksa pertanyaan Anda.
 Nomor tiket: #[Manual input]
 Estimasi respon: [Manual input]
 ```

- [ ] Set up away message:
 ```
 AUTO-REPLY (after 17:00 & weekends):

 Terima kasih! Kami sedang offline.
 Jam operasional: Senin-Jumat 09:00-17:00 WIB

 Kami akan balas pesan Anda max 24 jam.
 Untuk urgent, email: support@clario.id
 ```

- [ ] Enable read receipts (so customer knows you saw message)
- [ ] Test: Send message to yourself, verify auto-reply works

**Deliverable:** WhatsApp Business number ready (+62-XXX-XXX-XXXX)

---

### CRITICAL: Email Templates (2 hours)

**Must complete before:** First R1 sale
**Blocks:** Customer onboarding

**Template 1: Post-Purchase Offer (A1 → R1 Upsell)**

Save in Gmail as "Canned Response" or use template tool.

```
Subject: Dapatkan Support Bulanan untuk Template Anda

Halo {{name}},

Terima kasih sudah membeli Template Power BI dari Clario!

Untuk memastikan Anda mendapat manfaat maksimal, kami menawarkan **Support Bulanan**:

 Bantuan langsung via WhatsApp
 Update template bulanan
 Video tutorial eksklusif
 Prioritas untuk fitur baru

 Harga: Rp 75.000/bulan
 **GRATIS bulan pertama!**

[BUTTON: Mulai Gratis 30 Hari]
{{midtrans_subscription_link}}

Tidak tertarik? Tidak masalah! Anda tetap bisa email kami untuk support gratis (response time 48-72 jam).

Salam,
Tim Clario
support@clario.id
```

Checklist:
- [ ] Create in Gmail
- [ ] Test: Send to yourself, verify links work
- [ ] Personalization tags ready ({{name}}, {{midtrans_link}})
- [ ] Trigger: Manual send after A1 purchase (or auto via webhook)

---

**Template 2: Welcome Email (R1 Onboarding)**

```
Subject: Selamat Datang di Clario Support! Halo {{name}},

Support Anda sudah aktif! Berikut akses Anda:

 **Google Drive:** {{google_drive_link}}
 → Update template bulanan
 → Video tutorial eksklusif
 → FAQ & dokumentasi

 **WhatsApp Support:** +62-XXX-XXX-XXXX
 → Response time: <24 jam (business hours)
 → Senin-Jumat, 09:00-17:00 WIB

 **Setup Video:** {{youtube_tutorial_link}}

---

**Yang Bisa Kami Bantu:**
- Troubleshooting template (error, data tidak muncul, dll)
- Cara pakai fitur tertentu
- Custom request (column mapping, formula)
- Feature request untuk update berikutnya

**Cara Hubungi Kami:**
1. WhatsApp: +62-XXX-XXX-XXXX (fastest)
2. Email: support@clario.id (48-72 jam)

Jangan ragu hubungi kami kapan saja!

Salam,
Tim Clario
```

Checklist:
- [ ] Create in Gmail
- [ ] Insert actual WhatsApp number
- [ ] Insert Google Drive link (create per-customer folder)
- [ ] Test: Send to yourself

---

**Template 3: Renewal Reminder (Day 25)**

```
Subject: Support Anda akan berakhir dalam 5 hari

Halo {{name}},

Masa support gratis Anda akan berakhir pada **{{end_date}}**.

Untuk melanjutkan:
 Rp 75.000/bulan
 Akses support tetap aktif
 Update template terbaru

[BUTTON: Perpanjang Sekarang]
{{midtrans_renewal_link}}

**Tidak ingin melanjutkan?**
Balas email ini atau klik: {{cancel_link}}

Kami akan tetap email Anda update gratis (tanpa support prioritas).

Terima kasih sudah mempercayai Clario!

Salam,
Tim Clario
```

Checklist:
- [ ] Create in Gmail
- [ ] Set up calendar reminder (Day 25 after signup)
- [ ] Test: Send to yourself

---

**Template 4: Payment Failed**

```
Subject: Pembayaran Gagal - Action Required Halo {{name}},

Pembayaran untuk Clario Support (Rp 75.000) gagal diproses.

**Alasan:** {{failure_reason}}
(Contoh: Saldo tidak cukup, kartu expired, dll)

**Action Required:**
Silakan update metode pembayaran: {{update_payment_link}}

Atau bayar manual:
Transfer ke: BCA 1234567890 a/n PT Clario
Jumlah: Rp 75.000
Konfirmasi via WhatsApp: +62-XXX

⏰ **Deadline:** {{deadline_date}}
Setelah deadline, akses support akan di-suspend.

Butuh bantuan? Hubungi kami di WhatsApp.

Salam,
Tim Clario
```

Checklist:
- [ ] Create in Gmail
- [ ] Will use when Midtrans sends payment failure webhook

---

**Deliverable:** 4 email templates ready in Gmail

---

### HIGHLY RECOMMENDED: Google Drive Per-Customer Folders (30 min)

**Must complete before:** 10+ R1 subscribers (optional for <10)
**Blocks:** Nothing (can share main folder instead)

- [ ] Create folder structure:
```
Clario Products/R1-Support-Subscribers/
 Shared Resources/
 FAQ.pdf
 Setup-Guide.pdf (from A1)
 Video-Tutorials/
 How-to-Update-Template.mp4
 Template-Archive/
 v1.0.0/
 v1.1.0/
 CHANGELOG.md
 [Customer 1 Name]/
 Custom-Files/ (if any custom work)
 [Customer 2 Name]/
 [Customer 3 Name]/
```

- [ ] Set permissions:
 - Shared Resources: View access for all R1 subscribers
 - Customer folders: View access only for that customer

- [ ] Populate "Shared Resources" with:
 - [ ] FAQ.pdf (if created)
 - [ ] Setup Guide from A1
 - [ ] Current template version (v1.0.0)

**Deliverable:** Google Drive link to Shared Resources

---

### ALREADY DONE: Midtrans Subscription Setup

**Status:** Already configured in A1 launch (reuse same account)

- [x] Midtrans account active
- [ ] Create subscription product:
 ```
 Product: Clario Template Support
 Price: Rp 75,000/month
 Billing cycle: Monthly
 First month: Free (trial)
 Retry failed payments: 3x (every 3 days)
 ```
- [ ] Set up webhook for:
 - Subscription created → Send welcome email
 - Payment success → Continue access
 - Payment failed → Send payment failed email
 - Subscription cancelled → Send goodbye email

- [ ] Test subscription flow:
 - [ ] Sign up (free trial)
 - [ ] Verify no charge for 30 days
 - [ ] Manually trigger payment (Day 30)
 - [ ] Verify Rp 75,000 charged
 - [ ] Test cancellation

**Deliverable:** Midtrans subscription link ready

---

## Documentation (Day 11)

### Optional: FAQ Document (2 hours)

**Must complete before:** Never (nice-to-have)
**Blocks:** Nothing (can answer ad-hoc via WhatsApp)

Create PDF with these sections:

**Section 1: About Support**
```
Q: What's included in monthly support?
A:
- WhatsApp support (response <24 jam)
- Monthly template updates (new features + bug fixes)
- Video tutorials
- Priority for feature requests

Q: What's NOT included?
A:
- Custom development (bisa request quote terpisah)
- Data entry / staff training
- POS system integration

Q: Jam support?
A: Senin-Jumat, 09:00-17:00 WIB

Q: Response time?
A: <24 jam untuk pertanyaan umum, <4 jam untuk bug critical
```

**Section 2: Billing**
```
Q: Harga berapa?
A: Rp 75.000/bulan, bulan pertama gratis

Q: Cara bayar?
A: Auto-debit via Midtrans (kartu kredit/debit/e-wallet)

Q: Bisa cancel kapan saja?
A: Yes, cancel sebelum Day 25 untuk tidak dicharge bulan depan

Q: Ada refund?
A: No refund, tapi bisa cancel untuk bulan berikutnya
```

**Section 3: Technical**
```
Q: Template saya error, apa yang harus dilakukan?
A:
1. Screenshot error message
2. Send via WhatsApp: +62-XXX
3. Kami akan bantu troubleshoot <24 jam

Q: Minta fitur baru, bisa?
A: Bisa! Request via WhatsApp. Kami review monthly,
 fitur populer masuk ke update berikutnya.

Q: Update template gimana caranya?
A: Download versi baru dari Google Drive, buka,
 connect ke CSV yang sama. Video tutorial: [link]
```

- [ ] Design in Canva or Google Docs
- [ ] Export as PDF: `FAQ-R1-Support-v1.0.pdf`
- [ ] Upload to Google Drive: `Shared Resources/FAQ.pdf`

**Deliverable:** FAQ.pdf (optional)

---

## Operations Setup (Day 11-12)

### Optional: CRM/Tracking (1 hour)

**Must complete before:** 10+ customers (for <10, use Google Sheets)
**Blocks:** Nothing (manual tracking OK for MVP)

**Option 1: Google Sheets (Recommended for <20 customers)**

Create spreadsheet: "R1 Support Tracker"

**Sheet 1: Customers**
```
| ID | Name | Email | WhatsApp | Start Date | Status | MRR | Last Payment | Renewal Date | Notes |
|----|------|-------|----------|------------|--------|-----|--------------|--------------|-------|
| R1-001 | Budi | budi@email.com | 08123456789 | 2025-12-26 | Active | 75000 | 2025-12-26 | 2025-01-25 | Beta tester |
```

**Sheet 2: Support Tickets**
```
| Ticket ID | Customer ID | Date | Issue | Priority | Status | Resolution | Response Time | Rating |
|-----------|-------------|------|-------|----------|--------|------------|---------------|--------|
| #001 | R1-001 | 2025-12-26 | Template won't open | High | Resolved | Power BI version outdated | 2 hours | 5/5 |
```

**Sheet 3: MRR Tracker**
```
| Month | New Customers | Churned | Net New | Total Customers | Total MRR | Churn Rate |
|-------|---------------|---------|---------|-----------------|-----------|------------|
| Dec 2025 | 5 | 0 | 5 | 5 | Rp 375,000 | 0% |
| Jan 2025 | 10 | 1 | 9 | 14 | Rp 1,050,000 | 7.1% |
```

Formulas:
- Total MRR = `=COUNTIF(Customers!F:F, "Active") * 75000`
- Churn Rate = `=Churned / (Total Customers + Churned)`

Checklist:
- [ ] Create spreadsheet
- [ ] Share with team (if applicable)
- [ ] Set up daily reminder to update

---

**Option 2: Notion (Better for scaling 20+ customers)**

- [ ] Create Notion workspace
- [ ] Create "Customers" database with properties:
 - Name (text)
 - Email (email)
 - WhatsApp (phone)
 - Status (select: Active, Churned, Suspended)
 - MRR (number: 75000)
 - Start Date (date)
 - Renewal Date (formula: Start Date + 30 days)
 - Notes (text)

- [ ] Create "Support Tickets" database with properties:
 - Customer (relation to Customers)
 - Issue (text)
 - Priority (select: Critical, High, Medium, Low)
 - Status (select: Open, In Progress, Resolved, Closed)
 - Created (date)
 - Resolved (date)
 - Response Time (formula: Resolved - Created)

- [ ] Link databases with relations
- [ ] Create views:
 - Active customers
 - Tickets by priority
 - MRR by month

**Deliverable:** Google Sheets or Notion CRM ready

---

## Launch (Day 12)

### Soft Launch to A1 Customers

**Target:** Upsell 30% of existing A1 customers to R1

- [ ] Send "Post-Purchase Offer" email to all A1 customers
- [ ] Wait 3 days
- [ ] Follow up via WhatsApp (if no response):
 ```
 Halo {{name}}! Sudah terima email tentang Support Bulanan?

 Gratis 30 hari, bisa cancel kapan saja.

 Benefit:
 - WhatsApp support <24 jam
 - Update template gratis tiap bulan
 - Video tutorial

 Mau coba? Link: {{subscription_link}}
 ```

- [ ] Track conversion rate:
 - A1 customers: X
 - R1 signups: Y
 - Conversion: Y/X (target: 30%)

### First Week Operations

**When first R1 subscriber signs up:**
- [ ] Send welcome email (Template 2)
- [ ] Grant Google Drive access (Shared Resources folder)
- [ ] Add to WhatsApp contacts
- [ ] Add to spreadsheet/Notion
- [ ] Set calendar reminder for Day 25 (renewal reminder)

**Daily:**
- [ ] Monitor WhatsApp for support requests
- [ ] Respond <24 hours
- [ ] Log tickets in spreadsheet

**Weekly:**
- [ ] Review support tickets (identify patterns)
- [ ] Update FAQ if common questions emerge
- [ ] Plan template updates based on feature requests

---

## Success Metrics

### Week 1
- [ ] 30%+ of A1 customers sign up for R1
- [ ] <24hr response time maintained
- [ ] 0 critical bugs escalated

### Month 1
- [ ] <10% churn rate
- [ ] 70%+ NPS (very satisfied with support)
- [ ] 5+ video tutorials published

### Month 2-3
- [ ] 50+ R1 subscribers
- [ ] Rp 3.75M+ MRR
- [ ] <20% churn rate
- [ ] Support playbook updated with 20+ issue resolutions

---

**Last Updated:** December 26, 2025
**Status:** Ready to Execute (after A1 launches)
