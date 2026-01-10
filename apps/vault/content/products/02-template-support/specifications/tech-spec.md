# R1: Template Support - Technical Specification
**Version:** 1.0
**Date:** December 26, 2025
**Status:** Draft
**Sprint:** 1 (Week 2)

> [!NOTE]
> **Feature Reference:** See [[products/feature-prioritization-matrix#r1-template-support|Feature Prioritization Matrix]] for complete feature list.

---

## 1. Product Overview

### 1.1 Description
Subscription support service for Power BI Template buyers. Provides ongoing assistance, monthly updates, and priority support for Rp 75K/month.

### 1.2 Business Model

| Metric | Value |
|--------|-------|
| **Price** | Rp 75K/month |
| **First Month** | Free (trial) |
| **Target Conversion** | 30% of template buyers |
| **Churn Target** | <20%/month |

---

## 2. Service Architecture

### 2.1 System Components

```

 Support Infrastructure


 WhatsApp Google Drive Midtrans
 Business (Shared) (Payments)




 Operations Dashboard

 Notion Tally Google Sheets
 (CRM) (Forms) (Tracker)



```

### 2.2 Technology Stack

| Component | Technology | Cost | Purpose |
|-----------|------------|------|---------|
| **Support Channel** | WhatsApp Business | Free | Direct customer support |
| **File Sharing** | Google Drive | Free | Template delivery, updates |
| **CRM** | Notion | Free | Customer tracking |
| **Forms** | Tally | Free | Intake forms, NPS surveys |
| **Payments** | Midtrans | 2.9% fee | Subscription billing |
| **Tracking** | Google Sheets | Free | MRR, churn tracking |
| **Email** | Gmail | Free | Onboarding, updates |

---

## 3. Service Deliverables

### 3.1 Immediate (At Subscription Start)

| Deliverable | Format | Delivery Method |
|-------------|--------|-----------------|
| **Welcome Email** | Email template | Gmail (within 24hr) |
| **Google Drive Access** | Shared folder | Email invite |
| **WhatsApp Number** | Business contact | In welcome email |
| **Setup Video** | YouTube (unlisted) | Link in email |
| **FAQ Document** | PDF | In shared folder |

### 3.2 Monthly (Ongoing)

| Deliverable | Format | Delivery Method |
|-------------|--------|-----------------|
| **Template Updates** | .pbit file | Google Drive (replace) |
| **Changelog** | PDF | Google Drive + email |
| **New Features Video** | YouTube (unlisted) | Email link |

### 3.3 On-Demand (Support)

| Service | Response Time | Method |
|---------|---------------|--------|
| **General Questions** | <24hr (business hours) | WhatsApp |
| **Bug Reports** | <4hr (acknowledgment) | WhatsApp |
| **Feature Requests** | Noted (no SLA) | WhatsApp |

---

## 4. Customer Journey

### 4.1 Subscription Flow

```

 Template Buyer
 (A1 Purchase)




 Post-Purchase Support Offer
 Email (Auto) (First Month
 Free)






 Accept (Yes) Decline (No) No Response
 (Follow-up)




 Onboarding
 - Welcome email
 - Drive access
 - WhatsApp add




 Free Trial
 (30 Days)




 Day 25: Renewal
 Reminder






 Renew Cancel
 (Pay)

```

### 4.2 Email Templates

**Template 1: Post-Purchase Offer**
```
Subject: Dapatkan Support Bulanan untuk Template Power BI Anda

Halo [Name],

Terima kasih sudah membeli [Template Name]!

Untuk memastikan Anda mendapat manfaat maksimal, kami menawarkan Support Bulanan:

 Bantuan langsung via WhatsApp
 Update template bulanan
 Video tutorial eksklusif
 Prioritas untuk fitur baru

Harga: Rp 75.000/bulan
 GRATIS bulan pertama!

[BUTTON: Mulai Gratis 30 Hari]

Salam,
Tim Clario
```

**Template 2: Welcome Email**
```
Subject: Selamat Datang di Clario Support! Halo [Name],

Support Anda sudah aktif! Berikut akses Anda:

 Google Drive: [LINK]
 WhatsApp Support: +62-xxx-xxx-xxxx
 Video Tutorial: [LINK]

Jam Support: Senin-Jumat, 09:00-17:00 WIB

Jangan ragu hubungi kami kapan saja!

Salam,
Tim Clario
```

**Template 3: Renewal Reminder (Day 25)**
```
Subject: Support Anda akan berakhir dalam 5 hari

Halo [Name],

Masa support gratis Anda akan berakhir pada [DATE].

Untuk melanjutkan:
 Rp 75.000/bulan
 Akses support tetap aktif
 Update template terbaru

[BUTTON: Perpanjang Sekarang]

Tidak ingin melanjutkan? Balas email ini.

Salam,
Tim Clario
```

---

## 5. Operations

### 5.1 Support SLA

| Priority | Response Time | Resolution Time |
|----------|---------------|-----------------|
| **Critical** (data loss, crash) | <4hr | <24hr |
| **High** (calculation error) | <8hr | <48hr |
| **Medium** (questions, how-to) | <24hr | <72hr |
| **Low** (feature request) | <48hr | Backlog |

### 5.2 WhatsApp Response Templates

**Template: Greeting**
```
Halo! Terima kasih menghubungi Clario Support

Saya [Agent Name], siap membantu Anda.

Silakan jelaskan pertanyaan atau masalah Anda.
```

**Template: Acknowledgment**
```
Terima kasih sudah menghubungi kami.

Kami sedang memeriksa pertanyaan Anda dan akan membalas dalam [TIME].

Nomor tiket Anda: #[TICKET_ID]
```

**Template: Issue Resolved**
```
Masalah Anda sudah kami selesaikan

[SOLUTION DETAILS]

Jika ada pertanyaan lain, jangan ragu menghubungi kami.

Seberapa puas Anda dengan bantuan kami?
1⃣ Sangat Puas
2⃣ Puas
3⃣ Kurang Puas
```

### 5.3 Escalation Path

```
Level 1: WhatsApp Agent (FAQ, how-to)
 ↓ (if unresolved in 24hr)
Level 2: Technical Lead (bugs, errors)
 ↓ (if unresolved in 48hr)
Level 3: Product Owner (critical issues)
```

---

## 6. Payment Integration

### 6.1 Subscription Management

**Manual Process (MVP):**
1. Customer receives renewal reminder (Day 25)
2. Customer transfers to bank account OR
3. Customer pays via Midtrans payment link
4. Admin marks as "Paid" in Google Sheets
5. Access continues

**Payment Link Template (Midtrans):**
```
https://app.midtrans.com/snap/v1/transactions
{
 "transaction_details": {
 "order_id": "SUPPORT-[CUSTOMER_ID]-[MONTH]",
 "gross_amount": 75000
 },
 "customer_details": {
 "first_name": "[NAME]",
 "email": "[EMAIL]",
 "phone": "[PHONE]"
 },
 "item_details": [{
 "id": "R1-SUPPORT",
 "price": 75000,
 "quantity": 1,
 "name": "Clario Template Support - [MONTH]"
 }]
}
```

### 6.2 Churn Prevention

| Trigger | Action |
|---------|--------|
| **Day 25** | Renewal reminder email |
| **Day 28** | WhatsApp reminder |
| **Day 30** | Final notice, offer 10% discount |
| **Day 31** | Access suspended, win-back email |
| **Day 45** | Win-back offer (20% off) |

---

## 7. Tracking & Metrics

### 7.1 Google Sheets Structure

**Sheet 1: Customers**
```
| ID | Name | Email | WhatsApp | Start Date | Status | MRR | Last Payment | Notes |
```

**Sheet 2: Tickets**
```
| Ticket ID | Customer ID | Date | Issue | Priority | Status | Resolution | Rating |
```

**Sheet 3: MRR Tracker**
```
| Month | New | Churned | Net | Total MRR | Churn Rate |
```

### 7.2 Key Metrics

| Metric | Target | Calculation |
|--------|--------|-------------|
| **Conversion Rate** | >30% | Subscribers / Template Buyers |
| **Monthly Churn** | <20% | Churned / Total Subscribers |
| **Avg Response Time** | <24hr | Avg(First Response Time) |
| **NPS** | >50 | (Promoters - Detractors) / Total |
| **MRR** | Growth | Sum of active subscriptions × Rp 75K |

---

## 8. Development Timeline

| Day | Tasks |
|-----|-------|
| **Day 1** | Set up WhatsApp Business, Google Drive folders |
| **Day 2** | Create email templates, Notion CRM |
| **Day 3** | Set up Google Sheets tracker, Tally forms |
| **Day 4** | Create FAQ document, setup video outline |
| **Day 5** | Record setup video, test payment link |
| **Day 6** | Internal testing, launch to first customer |

---

## 9. File Structure

```
R1-Template-Support/
 operations/
 email-templates/
 post-purchase-offer.html
 welcome-email.html
 renewal-reminder.html
 whatsapp-templates/
 greeting.txt
 acknowledgment.txt
 resolved.txt
 tracking/
 MRR-Tracker-Template.xlsx
 customer-deliverables/
 FAQ-Template-Support.pdf
 Setup-Guide.pdf
 video-links.txt
 internal/
 SLA-Policy.md
 Escalation-Guide.md
 Churn-Prevention-Playbook.md
 README.md
```

---

## 10. Support Playbook

### 10.1 Top 10 Common Issues & Resolutions

#### Issue #1: "Template won't open in Power BI"

**Symptoms:** User double-clicks .pbit file, nothing happens OR error "Cannot open file"

**Root Causes:**
- Power BI Desktop not installed
- Wrong version of Power BI
- File association broken

**Resolution Script:**
```
1. Ask: "Sudah install Power BI Desktop?"
 → If no: Send download link (https://powerbi.microsoft.com/desktop)

2. Ask: "Versi berapa?" (Help → About in Power BI)
 → If < Sept 2025: "Silakan update ke versi terbaru"

3. If still failing:
 → "Coba klik kanan file → Open With → Power BI Desktop"
```

**Prevention:** Include Power BI version check in setup guide

---

#### Issue #2: "Data connection failed"

**Symptoms:** Error when loading data: "DataSource.Error", "File.Contents failed"

**Root Causes:**
- CSV file moved/renamed
- Wrong file path
- File locked by Excel

**Resolution Script:**
```
1. "Apakah file CSV masih di lokasi yang sama?"
 → If moved: "Silakan klik Transform Data → Data Source Settings → Change Source"

2. "Coba tutup Excel dulu, baru refresh Power BI"

3. If Excel open:
 → "Excel mengunci file. Save → Close Excel → Refresh Power BI"

4. Send step-by-step video: [reconnect-data-tutorial.mp4]
```

**Quick Fix Video:** 30-second screen recording showing Data Source Settings

---

#### Issue #3: "Numbers showing weird (0.32 instead of 32%)"

**Symptoms:** Food Cost % shows "0.32" not "32%", Health Score shows "0.78" not "78"

**Root Cause:** Format not applied correctly

**Resolution Script:**
```
1. "Klik nilai yang salah → Format tab → pilih 'Percentage' atau 'Whole Number'"

2. If measure itself wrong:
 → "Coba ganti formula jadi: [Food Cost %] * 100"

3. Send screenshot showing Format pane location

4. Offer to fix in next template update (add to feature request list)
```

**Prevention Note:** Add format validation to release checklist

---

#### Issue #4: "BCG Matrix empty / no data"

**Symptoms:** BCG Matrix scatter chart shows blank, no products plotted

**Root Causes:**
- Missing product growth data
- Insufficient historical data (need 2+ months)
- Null values in Product table

**Resolution Script:**
```
1. "Ada data minimal 2 bulan?"
 → If no: "BCG Matrix butuh data historis. Tunggu sampai ada 2 bulan data."

2. "Di Products.csv, kolom 'cost_price' ada?"
 → If empty: "Mohon isi cost_price untuk setiap produk"

3. Check if growth calculation undefined:
 → "Coba tambah parameter IF(ISBLANK([Growth]), 0, [Growth])"
```

**Workaround:** Manually set growth=0 for new products in sample data

---

#### Issue #5: "Staff performance shows wrong person"

**Symptoms:** Sales attributed to wrong staff member

**Root Causes:**
- Staff names inconsistent in CSV (e.g., "Budi" vs "budi" vs "BUDI")
- Staff ID mismatch
- Multiple people with same name

**Resolution Script:**
```
1. "Cek di Sales.csv, nama staf konsisten?"
 → If inconsistent: "Ganti supaya sama persis (case-sensitive)"

2. If duplicate names exist:
 → "Pakai Staff ID daripada nama. Di CSV tambahkan kolom staff_id"

3. Send CSV cleanup script:
 → "Download tool ini untuk membersihkan nama: [csv-cleaner.xlsx]"
```

**Tool:** Excel template with PROPER() formula to standardize names

---

#### Issue #6: "Can't export to PDF"

**Symptoms:** File → Export → PDF is greyed out OR file too large

**Root Causes:**
- Power BI Desktop limitation (Free version can't publish to Service)
- Too much data loaded

**Resolution Script:**
```
1. "Untuk PDF, gunakan File → Print → Microsoft Print to PDF"
 → Bukan File → Export (itu untuk Power BI Service)

2. If file too large:
 → "Filter data ke bulan terakhir saja, baru export"

3. Alternative:
 → "Screenshot setiap halaman, gabung di Word, export PDF"
```

**Upsell Opportunity:** "Atau upgrade ke Full SaaS (C1) untuk PDF export otomatis"

---

#### Issue #7: "Template slow / crashes"

**Symptoms:** Power BI hangs, takes >30s to refresh, crashes when filtering

**Root Causes:**
- Too much historical data (>100K rows)
- Complex DAX queries
- Insufficient RAM

**Resolution Script:**
```
1. "Berapa baris data di Sales.csv?"
 → If >50K: "Coba arsipkan data lama, pakai 3 bulan terakhir saja"

2. "Berapa RAM komputer Anda?"
 → If <8GB: "Sarankan upgrade RAM atau kurangi data"

3. Optimization tips:
 → "Filter data sebelum import (Power Query → Remove Old Rows)"
 → "Jangan load semua kolom, hapus yang tidak perlu"
```

**Technical Fix:** Create lite template version with reduced features

---

#### Issue #8: "Charts not in Bahasa Indonesia"

**Symptoms:** Some labels still in English

**Root Causes:**
- Didn't replace all placeholders
- Power BI default language English

**Resolution Script:**
```
1. "Di Options → Regional Settings, sudah pilih 'Indonesia'?"
 → Change: Options → Current File → Regional Settings → Indonesia

2. Manual fix:
 → "Klik chart → Edit title → ganti manual"

3. Send properly translated template:
 → "Versi baru sudah fix. Download di Google Drive: [LINK]"
```

**Long-term Fix:** Add to template QA checklist

---

#### Issue #9: "Peak Hours heatmap wrong"

**Symptoms:** Heatmap shows revenue at 3 AM (impossible), or all cells same color

**Root Causes:**
- Time format wrong in CSV (AM/PM vs 24-hour)
- Time zone issue
- Matrix visual not configured properly

**Resolution Script:**
```
1. "Di Sales.csv, format waktu pakai 24 jam (08:00) atau AM/PM (8:00 AM)?"
 → Standardize to 24-hour: "Ganti semua jadi 08:30:00"

2. If heatmap flat (no variation):
 → "Matrix perlu row=Hour, column=DayOfWeek, values=Revenue"
 → Send screenshot of correct matrix setup

3. Verification:
 → "Coba filter ke 1 hari, lihat apakah ada transaksi di jam yang benar"
```

---

#### Issue #10: "Monthly update: how to apply?"

**Symptoms:** User has v1.0, gets v1.1 notification, doesn't know how to update

**Root Causes:**
- Unclear update instructions
- Fear of losing data

**Resolution Script:**
```
1. "Data Anda aman! Template hanya connection ke CSV, bukan simpan data."

2. Steps:
 → "Download template baru (v1.1.0.pbit)"
 → "Buka file baru"
 → "Klik Transform Data → Data Source Settings"
 → "Arahkan ke CSV yang sama"
 → "Refresh"

3. "File lama (.pbix) boleh dihapus atau simpan sebagai backup"

4. Send video: "Cara Update Template (2 menit)"
```

**Frequency:** This will be #1 issue after first monthly update

---

### 10.2 Escalation Triggers

**When to escalate to Level 2 (Technical Lead):**
- DAX formula error that can't be fixed with template refresh
- Data corruption / file won't open after working before
- Suspected bug in Power BI itself
- Performance issue even with small dataset (<1K rows)
- Customer tried all troubleshooting, still broken

**When to escalate to Level 3 (Product Owner):**
- Critical bug affecting multiple customers
- Feature request with >5 customer requests
- Churn risk (customer threatening to cancel)
- Legal/compliance question

**Escalation Documentation:**
```markdown
**Ticket:** #[ID]
**Customer:** [Name]
**Issue:** [Brief description]
**Steps Tried:**
- [Step 1]
- [Step 2]
**Why Escalating:** [Reason]
**Customer Impact:** [High/Medium/Low]
```

---

### 10.3 First Response Templates

**General Question:**
```
Halo [Name]!

Terima kasih pertanyaannya.

[ANSWER HERE]

Apakah ini sudah menjawab? Atau ada yang perlu dijelaskan lebih lanjut?

Salam,
[Agent]
```

**Bug Report:**
```
Halo [Name],

Terima kasih laporannya!

Saya sudah catat:
 Ticket: #[ID]
 Issue: [Brief description]

Kami akan periksa dan update Anda dalam [TIMEFRAME].

Salam,
[Agent]
```

**Feature Request:**
```
Halo [Name],

Ide bagus! Terima kasih sudah share.

Saya sudah tambahkan ke product roadmap. Kami akanpertimbangkan untuk update berikutnya.

Untuk saat ini, ada workaround: [IF APPLICABLE]

Salam,
[Agent]
```

---

### 10.4 Monthly Playbook Review

**KPIs to Track:**
| Metric | Target | Action if Below |
|--------|--------|-----------------|
| **First Response Time** | <24hr | Add agent or automate FAQs |
| **Resolution Rate (first contact)** | >60% | Improve playbook |
| **Escalation Rate** | <20% | Train L1 agents better |
| **NPS from Support** | >70 | Review negative feedback |

**Continuous Improvement:**
- Review top 5 unresolved issues monthly
- Update playbook with new common issues
- Create video tutorials for repeat questions
- Add to FAQ document

---

## 11. Future Improvements (Phase 2+)


| Feature | Sprint | Description |
|---------|--------|-------------|
| **Auto-billing** | 3 | Midtrans recurring payments |
| **Customer Portal** | 4 | Self-service ticket tracking |
| **Knowledge Base** | 4 | Searchable FAQ website |
| **Priority Queue** | 2 | Faster response for subscribers |
| **Monthly Office Hours** | 3 | Live Q&A sessions |

---

**Last Updated:** December 26, 2025
**Owner:** Operations Team
**Status:** Draft - Pending Review
