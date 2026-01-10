# R1 Template Support - Support Agent Training Guide

**Document Type:** Training Manual
**Target Audience:** Support Agents (Full-time & Part-time)
**Product:** R1 - Template Support & Subscription Service
**Version:** 1.0
**Last Updated:** December 28, 2025
**Owner:** Customer Success Team
**Review Frequency:** Quarterly

---

## Table of Contents

1. [[#introduction|Introduction]]
2. [[#support-agent-role--responsibilities|Support Agent Role & Responsibilities]]
3. [[#communication-standards|Communication Standards]]
4. [[#ticket-management-workflow|Ticket Management Workflow]]
5. [[#ticket-triage--prioritization|Ticket Triage & Prioritization]]
6. [[#response-templates--scripts|Response Templates & Scripts]]
7. [[#escalation-procedures|Escalation Procedures]]
8. [[#knowledge-base-usage|Knowledge Base Usage]]
9. [[#quality-standards--metrics|Quality Standards & Metrics]]
10. [[#tools--systems|Tools & Systems]]
11. [[#common-issues--solutions|Common Issues & Solutions]]
12. [[#training-checklist|Training Checklist]]

---

## Introduction

### Purpose of This Guide

This training guide is designed to help support agents deliver **consistent, high-quality support** to R1 Template Support subscribers. By following these standards, you will:

- Respond to customer inquiries within SLA timeframes (<24 hours weekdays)
- Provide accurate, F&B-specific Power BI guidance
- Maintain subscriber satisfaction and reduce churn
- Build a knowledge base of common issues for self-service

### What is R1 Template Support?

**Product:** Monthly subscription service (Rp 75K/month or Rp 750K/year)

**What Subscribers Get:**
1. **Monthly template updates** - New metrics, bug fixes, performance improvements
2. **Priority support** - WhatsApp & email support, <24 hour response time
3. **Learning resources** - Video tutorials, best practices, industry insights
4. **Early access** - Beta features, upcoming product previews

**Target Customers:**
- Existing A1 Power BI Template buyers
- Indonesian F&B business owners (warung, cafe, restaurant)
- Non-technical users who need guidance on Power BI and data analytics

---

## Support Agent Role & Responsibilities

### Primary Responsibilities

**1. Respond to Support Tickets (70% of time)**
- Check WhatsApp Business and support email queue 3x per day (9 AM, 1 PM, 5 PM)
- Respond to all tickets within 24 hours (weekdays), 48 hours (weekends)
- Provide clear, actionable solutions with step-by-step instructions
- Follow up within 48 hours to ensure issue is resolved

**2. Update Knowledge Base (15% of time)**
- Document new issues and solutions in knowledge base
- Create help articles for recurring questions (3+ similar tickets)
- Review and improve existing articles based on ticket feedback
- Suggest video tutorial topics based on common issues

**3. Escalate Complex Issues (10% of time)**
- Identify issues requiring technical team involvement
- Document issue details, steps to reproduce, customer impact
- Hand off to senior support or engineering team
- Follow escalation until resolution, keep customer updated

**4. Quality & Metrics Tracking (5% of time)**
- Log all tickets in support system (Google Sheets or future ticketing tool)
- Track response time, resolution time, customer satisfaction
- Weekly review of performance metrics with team lead
- Identify process improvements based on ticket trends

### Success Metrics

**Response Time:**
- Target: <24 hours weekdays, <48 hours weekends
- Benchmark: 90%+ of tickets meet SLA

**Resolution Quality:**
- First-contact resolution rate: >60%
- Customer satisfaction (CSAT): >4.0/5.0
- Ticket re-open rate: <10%

**Knowledge Sharing:**
- Create 2-3 new knowledge base articles per month
- Update 1-2 existing articles per month based on new learnings

---

## Communication Standards

### Tone & Voice Guidelines

**Friendly & Professional:**
- **DO:** "Hai Pak Budi, terima kasih sudah menghubungi kami!"
- **DON'T:** "Bro, gimana kabarnya?" (too casual)

**Empathetic:**
- **DO:** "Saya mengerti frustrasi Bapak. Mari kita selesaikan masalah ini bersama."
- **DON'T:** "Harusnya Bapak ikuti petunjuk dengan benar." (blaming customer)

**Clear & Actionable:**
- **DO:** "Silakan klik tab 'Data' → 'Refresh' → Tunggu 30 detik."
- **DON'T:** "Coba refresh data Bapak." (too vague)

**Patient:**
- **DO:** "Tidak masalah, Pak. Saya akan jelaskan langkah demi langkah."
- **DON'T:** "Sudah saya jelaskan tadi, Pak." (impatient)

### Language Guidelines

**Primary Language:** Bahasa Indonesia (Indonesian)

**Use Formal Pronouns:**
- "Bapak" (Mr.) for male customers
- "Ibu" (Mrs./Ms.) for female customers
- Avoid "kamu" (informal you), use "Anda" or "Bapak/Ibu"

**Technical Terms:**
- Use English terms for Power BI features (e.g., "Refresh", "Slicer", "Filter")
- Explain in Indonesian when possible: "Refresh (perbarui data)"
- Avoid jargon; assume customer has limited Power BI knowledge

**Response Structure:**

```markdown
Hai [Bapak/Ibu] [Customer Name],

Terima kasih sudah menghubungi R1 Template Support!

[Acknowledge the issue empathetically]

[Provide step-by-step solution]

Jika masih ada kendala, silakan kabari saya ya, Pak/Bu.

Salam,
[Your Name]
R1 Support Team
```

---

## Ticket Management Workflow

### Step 1: Receive Ticket

**Channels:**
1. **WhatsApp Business:** Primary channel (+62 XXX-XXXX-XXXX)
2. **Email:** support@[company].com
3. **Future:** Support ticketing system (Zendesk, Freshdesk, or custom)

**When Ticket Arrives:**
- Log ticket in tracking spreadsheet (Google Sheets)
- Assign ticket ID: `R1-YYYYMMDD-###` (e.g., R1-20250106-001)
- Tag with category: Technical / Billing / Feature Request / General Inquiry
- Note timestamp and SLA deadline (24 hours from receipt)

### Step 2: Triage & Prioritize

**Priority Levels:**

**P0 - Critical (Response within 2 hours):**
- Template completely broken, customer cannot access dashboard
- Data loss or corruption
- Payment issue blocking access to updates

**P1 - High (Response within 8 hours):**
- Feature not working as expected (e.g., charts not displaying)
- Incorrect calculations affecting business decisions
- Urgent customer request (e.g., presentation in 24 hours)

**P2 - Medium (Response within 24 hours):**
- General how-to questions ("How do I filter by date?")
- Cosmetic issues (colors, formatting)
- Feature requests

**P3 - Low (Response within 48 hours):**
- General inquiries ("What's included in next update?")
- Non-urgent feedback
- Nice-to-have customization requests

### Step 3: Research & Diagnose

**Before Responding, Check:**

1. **Knowledge Base:** Search for similar issues and documented solutions
2. **Template Version:** Ask customer which version they're using (check "About" tab in template)
3. **POS System:** Which POS does customer use? (Moka, Qasir, Pawoon, BukuWarung, etc.)
4. **Steps to Reproduce:** Ask customer to describe what they did before the issue occurred
5. **Screenshots:** Request screenshot if issue is visual

**Diagnostic Questions to Ask:**

```markdown
Terima kasih laporannya, Pak/Bu [Name].

Untuk membantu mendiagnosis masalah ini, boleh saya tahu:
1. Versi template yang Bapak/Ibu gunakan? (Cek tab "About")
2. Sistem POS apa yang digunakan? (Moka, Qasir, dll.)
3. Apakah masalah ini muncul setelah Bapak/Ibu melakukan sesuatu? (misalnya import data baru, klik tombol tertentu)
4. Boleh kirim screenshot tampilan yang bermasalah?

Terima kasih atas kerjasamanya!
```

### Step 4: Provide Solution

**Solution Structure:**

1. **Acknowledge the Issue:**
 - "Saya sudah memahami masalahnya, Pak. Sepertinya [diagnosis]."

2. **Provide Step-by-Step Solution:**
 - Use numbered steps: "1. Klik... 2. Pilih... 3. Tunggu..."
 - Include screenshots or video if complex (Loom screen recording)
 - Explain WHY the solution works (educate, don't just fix)

3. **Verify Understanding:**
 - "Apakah langkah-langkahnya sudah jelas, Pak?"
 - "Silakan coba dan kabari saya jika berhasil."

4. **Set Expectations:**
 - "Proses refresh data biasanya memakan waktu 2-3 menit."
 - "Jika masih ada kendala setelah langkah ini, saya akan bantu lebih lanjut."

**Example Response:**

```markdown
Hai Pak Budi,

Terima kasih sudah menghubungi kami!

Saya sudah cek, sepertinya masalah "Data tidak terupdate" ini terjadi karena koneksi data terputus. Ini sering terjadi jika file POS dipindahkan ke folder lain.

Solusinya:
1. Buka Power BI Desktop
2. Klik tab "Home" → "Transform Data"
3. Di jendela Power Query Editor, klik "Data Source Settings"
4. Pilih file POS Anda, lalu klik "Change Source"
5. Arahkan ke lokasi file POS yang baru
6. Klik "OK", lalu "Close & Apply"
7. Tunggu 2-3 menit hingga data ter-refresh

Penjelasan: Power BI menyimpan lokasi file data. Jika file dipindahkan, Power BI tidak bisa menemukan datanya. Dengan mengarahkan ulang ke lokasi baru, koneksi akan pulih.

Silakan dicoba, Pak. Jika masih ada kendala, saya siap bantu lebih lanjut!

Salam,
Rina
R1 Support Team
```

### Step 5: Follow-Up

**24-48 Hours After Solution:**
- Send follow-up message: "Hai Pak Budi, apakah masalahnya sudah teratasi?"
- If resolved: "Senang bisa membantu! Jangan ragu kontak kami jika ada pertanyaan lain."
- If not resolved: "Baik, Pak. Saya akan eskalasi ke tim teknis kami untuk penanganan lebih lanjut."

**Close Ticket:**
- Mark ticket as "Resolved" in tracking sheet
- Log resolution time, solution category, customer satisfaction (if surveyed)
- Update knowledge base if this was a new issue type

---

## Ticket Triage & Prioritization

### Common Issue Categories

**1. Technical Issues (50% of tickets)**

**Symptoms:**
- "Dashboard tidak tampil"
- "Data tidak ter-refresh"
- "Error saat buka template"
- "Angka tidak sesuai dengan POS"

**Likely Causes:**
- Data source path broken (file moved)
- Power BI version incompatibility
- Corrupted template file
- Data format mismatch (CSV encoding, date format)

**Resolution Time:** 15-30 minutes (with step-by-step guide)

---

**2. How-To Questions (30% of tickets)**

**Symptoms:**
- "Bagaimana cara filter per cabang?"
- "Bagaimana menambah metrik baru?"
- "Bagaimana export ke PDF?"
- "Bagaimana ubah warna chart?"

**Likely Causes:**
- Customer unfamiliar with Power BI features
- Wants customization beyond default template

**Resolution Time:** 10-15 minutes (link to knowledge base article or video tutorial)

---

**3. Feature Requests (10% of tickets)**

**Symptoms:**
- "Bisa ditambahkan metrik X?"
- "Bisa buat dashboard untuk Y?"
- "Bisa integrasikan dengan sistem Z?"

**Resolution:**
- Thank customer for feedback
- Log in feature request tracker (shared Google Sheet)
- Explain if feature is planned or out of scope
- Offer workaround if possible

**Response:**
```markdown
Terima kasih atas masukannya, Pak!

Saya sudah catat request untuk [fitur X]. Tim product kami akan evaluasi untuk update bulan depan.

Sementara itu, Bapak bisa gunakan workaround ini: [alternatif solusi]

Kami akan update Bapak jika fitur ini masuk ke roadmap!
```

---

**4. Billing & Account Issues (5% of tickets)**

**Symptoms:**
- "Pembayaran saya belum diproses"
- "Bagaimana cara upgrade ke annual?"
- "Bagaimana cara cancel subscription?"
- "Saya belum terima update bulan ini"

**Resolution:**
- Check payment records (Midtrans dashboard or manual records)
- Verify subscription status (active, expired, canceled)
- Process account changes (upgrade, downgrade, cancellation)
- Send invoice or payment link if needed

**Escalation:** If payment gateway issue, escalate to finance team

---

**5. General Inquiries (5% of tickets)**

**Symptoms:**
- "Apa bedanya R1 dengan template gratis?"
- "Kapan update berikutnya rilis?"
- "Bisa konsultasi strategi bisnis F&B?"

**Resolution:**
- Answer with standard info (use templates)
- If out of scope (business consulting), politely decline and suggest alternatives
- Redirect to sales team if inquiry is pre-purchase question

---

## Response Templates & Scripts

### Template 1: General Greeting & Acknowledgment

```markdown
Hai [Bapak/Ibu] [Name],

Terima kasih sudah menghubungi R1 Template Support!

Saya [Your Name] dari tim support. Saya akan bantu Bapak/Ibu menyelesaikan [masalah/pertanyaan] ini.

[Rest of response]

Salam,
[Your Name]
R1 Support Team
```

---

### Template 2: Data Refresh Issue

```markdown
Hai [Bapak/Ibu] [Name],

Terima kasih laporannya!

Masalah "Data tidak ter-refresh" biasanya terjadi karena:
1. File POS dipindahkan ke folder lain
2. Koneksi data terputus
3. Format data POS berubah

Solusi:
1. Buka Power BI Desktop
2. Klik "Home" → "Transform Data"
3. Klik "Data Source Settings"
4. Pilih file POS Anda → "Change Source"
5. Arahkan ke lokasi file yang benar
6. Klik "OK" → "Close & Apply"
7. Tunggu hingga data ter-refresh (2-3 menit)

Video tutorial: [link to Loom video]

Silakan dicoba, Pak/Bu. Jika masih ada kendala, saya siap bantu!

Salam,
[Your Name]
```

---

### Template 3: Feature Request

```markdown
Hai [Bapak/Ibu] [Name],

Terima kasih atas masukannya!

Request untuk [fitur X] sudah saya catat dan akan saya sampaikan ke tim product.

Kami evaluasi semua request berdasarkan:
- Jumlah subscriber yang meminta fitur ini
- Kompleksitas implementasi
- Alignment dengan roadmap product

Sementara itu, Bapak/Ibu bisa gunakan workaround ini: [alternatif solusi jika ada]

Kami akan update via email jika fitur ini masuk ke update mendatang!

Salam,
[Your Name]
```

---

### Template 4: Billing Issue

```markdown
Hai [Bapak/Ibu] [Name],

Terima kasih sudah konfirmasi pembayaran!

Saya sudah cek sistem kami:
- Status subscription: [Active / Expired / Pending]
- Tanggal pembayaran terakhir: [DD/MM/YYYY]
- Tanggal perpanjangan berikutnya: [DD/MM/YYYY]

[If payment not processed:]
Sepertinya ada delay di payment gateway. Saya sudah escalate ke tim finance untuk pengecekan lebih lanjut. Estimasi selesai dalam 1x24 jam.

[If payment processed:]
Pembayaran Bapak/Ibu sudah kami terima. Akses update template sudah aktif di Google Drive.

Terima kasih atas kesabarannya!

Salam,
[Your Name]
```

---

### Template 5: Escalation to Technical Team

```markdown
Hai [Bapak/Ibu] [Name],

Terima kasih sudah mencoba langkah-langkah tadi.

Karena masalahnya lebih kompleks, saya sudah eskalasi ke tim teknis kami untuk investigasi lebih lanjut.

Tim teknis akan hubungi Bapak/Ibu dalam 1-2 hari kerja dengan solusi.

Sementara itu, jika ada pertanyaan lain, jangan ragu kontak saya!

Salam,
[Your Name]
```

---

## Escalation Procedures

### When to Escalate

**Escalate to Senior Support if:**
- Issue is outside your knowledge scope (complex Power BI features, DAX formulas)
- Customer is frustrated after 2-3 back-and-forth attempts
- Issue requires access to template source files (proprietary formulas)
- Billing issue requires manual adjustment

**Escalate to Engineering Team if:**
- Template bug affecting multiple customers
- Data calculation error (incorrect metrics)
- Performance issue (dashboard takes >5 minutes to load)
- Feature request requires code changes

**Escalate to Management if:**
- Customer requests refund or cancellation (churn risk)
- Customer threatens negative review or legal action
- High-value customer (annual subscriber, referrer, influencer)

### Escalation Process

**1. Document Thoroughly:**
- Ticket ID, customer name, contact info
- Issue description, steps to reproduce
- What you've tried already (troubleshooting steps)
- Customer impact (urgent presentation, lost revenue, etc.)

**2. Hand-Off Communication:**

**To Senior Support:**
```markdown
Hi [Senior Name],

I'm escalating ticket R1-20250106-003 (Pak Budi - Warung Makan Sederhana).

Issue: Dashboard shows incorrect revenue (Rp 10M vs actual Rp 5M from POS).

What I've tried:
- Verified data source path (correct)
- Checked data format (CSV encoding correct)
- Re-imported data (issue persists)

Customer impact: Pak Budi using this for investor presentation tomorrow.

Can you investigate potential calculation bug in Revenue metric?

Thanks!
```

**3. Keep Customer Informed:**

```markdown
Hai Pak Budi,

Saya sudah eskalasi issue ini ke senior support kami, Pak [Name], yang ahli di perhitungan revenue.

Beliau akan investigasi dalam 1x24 jam dan hubungi Bapak langsung.

Saya juga tetap monitor progress dan akan follow up dengan Bapak.

Terima kasih atas kesabarannya!

Salam,
[Your Name]
```

**4. Follow-Up Until Resolution:**
- Check escalation status daily
- Update customer every 24-48 hours
- Confirm resolution with customer before closing ticket

---

## Knowledge Base Usage

### Purpose of Knowledge Base

**Benefits:**
1. **Faster resolution:** Search for documented solutions instead of re-inventing
2. **Consistency:** All agents provide same solution for same issue
3. **Self-service:** Customers can find answers without contacting support
4. **Training:** New agents ramp up faster with documented solutions

### Knowledge Base Structure

**Location:** Google Docs folder (future: website with search)

**Categories:**
1. **Getting Started** - Onboarding, first-time setup
2. **Data Import** - POS CSV import, data refresh, troubleshooting
3. **Dashboard Features** - Filters, slicers, drill-down, customization
4. **Metrics Explained** - How each metric is calculated, what it means
5. **Troubleshooting** - Common errors, fixes, workarounds
6. **Billing & Account** - Payment, subscription, cancellation
7. **Updates** - Release notes, what's new, migration guide

### How to Search Knowledge Base

**Before Responding to Ticket:**
1. Identify key terms in customer's question (e.g., "data refresh", "filter by date")
2. Search knowledge base folder or use Ctrl+F in master index
3. If solution exists, copy template and personalize for customer
4. If no solution exists, document your solution after resolving ticket

**Example Search Workflow:**

Customer asks: "Bagaimana cara filter dashboard hanya untuk bulan Januari?"

Search: "filter", "date", "bulan"

Find article: "KB-015: How to Filter Dashboard by Date Range"

Copy solution template, personalize for customer (change "March" to "Januari"), send.

### How to Create New Knowledge Base Articles

**Trigger for New Article:**
- Same question asked 3+ times
- Complex solution that took >30 minutes to write
- High-value solution (prevents churn, unlocks revenue)

**Article Template:**

```markdown
# KB-XXX: [Article Title]

**Category:** [Getting Started / Data Import / etc.]
**Last Updated:** YYYY-MM-DD
**Author:** [Your Name]
**Related Articles:** KB-XXX, KB-YYY

---

## Problem Description

[What issue does this solve? What symptoms does customer see?]

---

## Solution

[Step-by-step instructions]

1. Step 1
2. Step 2
3. Step 3

---

## Screenshots / Video

[Attach screenshots or Loom video link]

---

## Why This Works

[Explain the root cause and how the solution addresses it]

---

## Related Questions

- [Link to related KB articles]
- [Link to video tutorials]

---

**Feedback:** If this article doesn't solve your issue, contact support@[company].com
```

**Example Article:**

```markdown
# KB-012: Data Tidak Ter-Refresh Setelah Import CSV Baru

**Category:** Data Import
**Last Updated:** 2025-01-06
**Author:** Rina S.

---

## Problem Description

Setelah import file CSV baru dari POS, dashboard Power BI tidak menampilkan data terbaru. Data masih menunjukkan transaksi bulan lalu.

---

## Solution

1. Buka Power BI Desktop
2. Klik tab "Home" → "Refresh"
3. Tunggu 2-3 menit hingga proses selesai
4. Cek tanggal terakhir di dashboard (harus menampilkan tanggal hari ini)

Jika masih tidak ter-update:
5. Klik "Home" → "Transform Data"
6. Di Power Query Editor, klik "Data Source Settings"
7. Verifikasi path file CSV benar
8. Klik "Close & Apply"

---

## Screenshots

[Screenshot of Refresh button location]
[Screenshot of Data Source Settings dialog]

---

## Why This Works

Power BI menyimpan data di cache. Setelah import CSV baru, Anda harus "Refresh" untuk membaca data terbaru dari file.

Jika path file CSV berubah (file dipindahkan), Power BI tidak bisa menemukan data. Langkah 5-8 memperbarui path file.

---

## Related Questions

- KB-013: Cara Import CSV dari Moka POS
- KB-014: Error "File Not Found" Saat Refresh

---

**Feedback:** Jika artikel ini belum menyelesaikan masalah Anda, kontak support@[company].com
```

---

## Quality Standards & Metrics

### Response Quality Checklist

Before sending every response, check:

** Clarity:**
- [ ] Instructions are step-by-step (numbered)
- [ ] Technical terms explained in Indonesian
- [ ] No assumptions about customer's Power BI knowledge

** Completeness:**
- [ ] All customer's questions answered
- [ ] Root cause explained (educate, don't just fix)
- [ ] Next steps clear (what customer should do after this)

** Tone:**
- [ ] Friendly and professional
- [ ] Empathetic to customer frustration
- [ ] No blaming language ("you should have...")

** Accuracy:**
- [ ] Solution tested (if possible) before sending
- [ ] Screenshots match current template version
- [ ] No typos or grammatical errors

** Efficiency:**
- [ ] Response sent within SLA (24 hours weekday, 48 hours weekend)
- [ ] Proactive (anticipate follow-up questions, answer preemptively)
- [ ] Links to knowledge base or video for deeper learning

### Performance Metrics

**Tracked Weekly:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Response Time** | <24 hours (weekday) | Avg time from ticket received to first response |
| **Resolution Time** | <48 hours | Avg time from ticket received to issue resolved |
| **First Contact Resolution** | >60% | % of tickets resolved in first response (no back-and-forth) |
| **Customer Satisfaction** | >4.0/5.0 | Post-resolution survey score (if implemented) |
| **Ticket Re-Open Rate** | <10% | % of "resolved" tickets re-opened by customer |
| **Knowledge Base Contribution** | 2-3 articles/month | New articles created or updated |

**Performance Review:**
- Weekly 1-on-1 with team lead
- Review metrics, discuss challenging tickets
- Identify training needs, process improvements
- Celebrate wins (great customer feedback, efficient resolutions)

---

## Tools & Systems

### Current Tools (Sprint 1)

**1. WhatsApp Business (+62 XXX-XXXX-XXXX)**
- Primary support channel
- Check 3x per day (9 AM, 1 PM, 5 PM)
- Use WhatsApp Web for desktop access
- Enable read receipts to show responsiveness

**2. Email (support@[company].com)**
- Secondary support channel
- Check 2x per day (10 AM, 3 PM)
- Use Gmail labels: "New", "In Progress", "Resolved", "Escalated"
- Set auto-responder: "We've received your email and will respond within 24 hours"

**3. Google Sheets (Ticket Tracking)**
- Log all tickets: ID, date, customer, issue, status, resolution time
- Columns: Ticket ID | Date | Customer Name | Contact | Issue Category | Priority | Status | Resolution Time | Notes
- Share with team for transparency

**4. Google Drive (Knowledge Base)**
- Folder structure: Knowledge Base > [Category] > [Article].md
- Master index document with links to all articles
- Share read-only link with customers for self-service

**5. Loom (Screen Recording)**
- Record video tutorials for complex solutions
- Embed in knowledge base articles
- Share link in responses (faster than writing long instructions)

### Future Tools (Month 2-3)

**1. Zendesk or Freshdesk (Ticketing System)**
- Centralize WhatsApp, email, future chat
- Auto-assign tickets based on agent availability
- Track SLA compliance, generate reports
- Customer portal for ticket history

**2. Intercom or Crisp (Live Chat)**
- Add chat widget to website
- Proactive support (trigger chat when customer on pricing page)
- Chatbot for common questions (reduce ticket volume)

**3. Notion or Helpjuice (Knowledge Base Platform)**
- Searchable, customer-facing knowledge base
- Track article views, search queries (identify gaps)
- Version control for articles

---

## Common Issues & Solutions

### Issue 1: Data Tidak Ter-Refresh

**Symptoms:**
- Dashboard shows old data (last month)
- "Last refresh" date is outdated

**Likely Causes:**
- Customer didn't click "Refresh" button
- Data source path broken
- CSV file format changed

**Solution:**
1. Ask customer to click "Home" → "Refresh"
2. If still not working, check "Data Source Settings"
3. Verify CSV path is correct
4. Check CSV encoding (should be UTF-8)

**Knowledge Base:** KB-012

---

### Issue 2: Dashboard Tidak Tampil (Blank Screen)

**Symptoms:**
- Power BI opens but dashboard is blank
- Error message: "Can't load visual"

**Likely Causes:**
- Power BI version too old (template requires 2023+ version)
- Corrupted template file
- Missing data source

**Solution:**
1. Check Power BI version: File → About → Version
2. If <2023, ask customer to update Power BI Desktop
3. If version is current, re-download template from Google Drive
4. If still broken, request customer to send screenshot of error

**Knowledge Base:** KB-018

---

### Issue 3: Angka Tidak Sesuai dengan POS

**Symptoms:**
- Revenue on dashboard ≠ revenue on POS report
- Transaction count mismatch

**Likely Causes:**
- CSV export incomplete (customer exported partial data)
- Date range filter applied on dashboard
- Duplicate transactions in CSV

**Solution:**
1. Ask customer to export full CSV (all transactions, no date filter)
2. Check dashboard date filter (reset to "All Time")
3. Open Power Query Editor → check for duplicate rows
4. If calculation error, escalate to technical team

**Knowledge Base:** KB-021

---

### Issue 4: Bagaimana Cara Filter Dashboard?

**Symptoms:**
- Customer wants to see specific date range, branch, or product category

**Solution:**
1. Explain "Slicer" concept (filter panel on left side of dashboard)
2. Show how to select date range: Click calendar icon → Select start/end date
3. Show how to filter by branch: Click branch dropdown → Select branch name
4. Show how to clear filters: Click "Clear All" button

**Knowledge Base:** KB-005

**Video Tutorial:** [Link to Loom video]

---

### Issue 5: Bagaimana Cara Export Dashboard ke PDF?

**Solution:**
1. File → Export → Export to PDF
2. Select pages to export (or "All")
3. Click "Export"
4. Save PDF to desired location

**Note:** Charts are static in PDF (no interactivity). For interactive reports, use Power BI Service (cloud).

**Knowledge Base:** KB-008

---

### Issue 6: Pembayaran Sudah Diproses Tapi Belum Terima Update

**Symptoms:**
- Customer paid subscription but Google Drive link not sent
- Customer can't access latest template version

**Solution:**
1. Check payment records (Midtrans dashboard or manual Google Sheet)
2. Verify payment status (success, pending, failed)
3. If payment successful, check subscriber list (Google Sheet)
4. If not on list, add customer manually → send Google Drive link
5. If payment pending, ask for proof of payment (screenshot)

**Escalation:** If payment gateway issue, escalate to finance team

**Knowledge Base:** KB-030

---

## Training Checklist

### Week 1: Onboarding

**Day 1-2: Product Knowledge**
- [ ] Read R1 product overview (what's included, pricing, target customer)
- [ ] Review A1 template (understand what customers bought before subscribing to R1)
- [ ] Test template yourself (import sample POS CSV, explore dashboards)
- [ ] Watch 5 key video tutorials (data import, filters, metrics explained)

**Day 3-4: Support Processes**
- [ ] Read this support agent guide fully
- [ ] Review ticket management workflow (log, triage, respond, follow-up)
- [ ] Practice using tools (WhatsApp Business, Gmail, Google Sheets, Loom)
- [ ] Shadow senior agent (observe 5-10 tickets being resolved)

**Day 5: Practice Tickets**
- [ ] Resolve 5 practice tickets (team lead provides scenarios)
- [ ] Get feedback on response quality (tone, clarity, completeness)
- [ ] Create 1 test knowledge base article

### Week 2: Live Support (with Supervision)

- [ ] Handle 10 real tickets (team lead reviews before sending)
- [ ] Escalate 1-2 complex issues (practice escalation workflow)
- [ ] Update 2 knowledge base articles based on new learnings
- [ ] 1-on-1 review with team lead (feedback on performance)

### Week 3: Independent Support

- [ ] Handle tickets independently (no pre-review required)
- [ ] Meet SLA targets (90%+ tickets <24 hour response)
- [ ] Create 1 new knowledge base article
- [ ] Weekly team sync (share learnings, discuss challenging tickets)

### Week 4: Mastery

- [ ] Achieve >80% first-contact resolution rate
- [ ] CSAT score >4.0/5.0 (if surveyed)
- [ ] Mentor new agent (shadow your ticket resolution)
- [ ] Suggest 1 process improvement (based on experience)

---

## Continuous Learning

### Monthly Training Sessions

**Topics:**
- New template features (when monthly update releases)
- Advanced Power BI techniques (DAX formulas, custom visuals)
- Difficult customer scenarios (handling frustration, de-escalation)
- Indonesian F&B industry trends (understand customer context)

### Quarterly Reviews

- Review performance metrics (identify strengths, areas for improvement)
- Update knowledge base (archive outdated articles, create new ones)
- Customer satisfaction survey analysis (what are customers saying?)
- Process improvements (what can we automate? What tools can help?)

### Knowledge Sharing

**Weekly Team Sync (30 minutes):**
- Share 1-2 interesting tickets from the week
- Discuss solutions, alternate approaches
- Celebrate wins (great customer feedback, creative solutions)
- Identify knowledge gaps (what should we document better?)

---

## Appendix: FAQ for Support Agents

**Q: What if I don't know the answer to a customer's question?**

A:
1. Search knowledge base first
2. Ask team lead or senior agent
3. If urgent, tell customer: "Let me research this and get back to you within 4 hours"
4. If not urgent, escalate to senior support
5. Document the solution in knowledge base after resolution

---

**Q: What if a customer is rude or angry?**

A:
1. Stay calm, don't take it personally
2. Acknowledge frustration: "Saya mengerti frustrasi Bapak, Pak. Mari kita selesaikan bersama."
3. Focus on solution, not blame
4. If customer uses abusive language, escalate to team lead
5. After resolution, take a 5-minute break (don't carry frustration to next ticket)

---

**Q: What if I can't resolve an issue within SLA (24 hours)?**

A:
1. Send interim update: "Saya masih investigasi issue ini. Estimasi update dalam 12 jam."
2. Escalate to senior support or technical team
3. Keep customer informed every 24 hours until resolved
4. Apologize for delay, offer gesture (e.g., 1 month free extension if severe issue)

---

**Q: How do I handle feature requests that are out of scope?**

A:
1. Thank customer for feedback
2. Explain why it's out of scope (e.g., "Template focuses on analytics, not inventory management")
3. Suggest alternative (e.g., "For inventory, we recommend [other tool]")
4. Log in feature request tracker (team reviews monthly for roadmap)

---

**Q: What if a customer wants to cancel subscription?**

A:
1. Ask why (understand churn reason for product improvement)
2. Offer to resolve issue if it's fixable (e.g., technical problem, lack of support)
3. Explain cancellation process (7-day notice, no refund for partial month)
4. Process cancellation per policy (legal/cancellation-policy.md)
5. Send exit survey (optional, for feedback)
6. Remove from subscriber list, revoke Google Drive access

---

## Conclusion

By following this guide, you will deliver **consistent, high-quality support** that:
- Keeps subscribers happy and reduces churn
- Builds a knowledge base for self-service
- Scales efficiently as subscriber count grows

**Remember:** Every ticket is an opportunity to build customer loyalty. A great support experience turns subscribers into advocates who refer others to R1.

**Questions about this guide?** Contact your team lead or email training@[company].com.

---

**Document Version History:**

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2025-12-28 | Initial training guide | Customer Success Team |

---

**END OF SUPPORT AGENT TRAINING GUIDE**
