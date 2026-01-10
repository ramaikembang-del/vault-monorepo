# R1 Template Support - Knowledge Base Article Templates

**Document Type:** Content Templates & Guidelines
**Target Audience:** Support Agents, Content Creators
**Product:** R1 - Template Support & Subscription Service
**Version:** 1.0
**Last Updated:** December 28, 2025
**Owner:** Customer Success Team
**Review Frequency:** Quarterly

---

## Table of Contents

1. [[#introduction|Introduction]]
2. [[#knowledge-base-structure|Knowledge Base Structure]]
3. [[#article-writing-guidelines|Article Writing Guidelines]]
4. [[#article-templates-by-category|Article Templates by Category]]
5. [[#sample-articles-20-examples|Sample Articles (20 Examples)]]
6. [[#article-maintenance|Article Maintenance]]
7. [[#success-metrics|Success Metrics]]

---

## Introduction

### Purpose of Knowledge Base

The knowledge base is a **self-service resource** that helps R1 subscribers solve common issues without contacting support.

**Goals:**
- **Reduce support load:** 30-40% of tickets can be prevented with good documentation
- **Faster resolution:** Customers find answers in 2 minutes vs 24-hour support wait
- **Scale efficiently:** One article serves 100+ subscribers (vs 1-to-1 support)
- **Improve satisfaction:** Customers prefer self-service for simple questions

### Article Philosophy

**Customer-Centric:**
- Write for non-technical F&B business owners (not Power BI experts)
- Use simple language (Bahasa Indonesia, explain English terms)
- Focus on solutions (not technical details)

**Action-Oriented:**
- Every article solves a specific problem
- Step-by-step instructions (numbered lists, screenshots)
- Expected outcome clearly stated

**Searchable:**
- Use keywords customers search for ("data tidak refresh", "angka salah", "error")
- Descriptive titles (not vague: "Troubleshooting" → specific: "Data Tidak Ter-Refresh Setelah Import CSV")

---

## Knowledge Base Structure

### Categories

**1. Getting Started (5-10 articles)**
- First-time setup, data import, navigation basics

**2. Data Import & Refresh (10-15 articles)**
- CSV export from POS, import to Power BI, troubleshooting refresh errors

**3. Dashboard Features (10-15 articles)**
- Filters, slicers, drill-down, exporting, customization

**4. Metrics Explained (15-20 articles)**
- What each metric means, how it's calculated, how to interpret

**5. Troubleshooting (15-20 articles)**
- Common errors, fixes, workarounds

**6. Billing & Account (5-10 articles)**
- Payment, subscription, cancellation, access issues

**7. Updates (5-10 articles)**
- Release notes, how to install updates, migration guides

**Total:** 65-100 articles (build over 6-12 months)

### Article Naming Convention

**Format:** `KB-XXX: [Descriptive Title]`

**Examples:**
- `KB-001: Cara Download dan Install Power BI Desktop`
- `KB-012: Data Tidak Ter-Refresh Setelah Import CSV Baru`
- `KB-025: Arti Metrik "Average Transaction Value"`
- `KB-040: Cara Install Template Update Tanpa Kehilangan Kustomisasi`

**Numbering:**
- KB-001 to KB-020: Getting Started & Data Import
- KB-021 to KB-040: Dashboard Features
- KB-041 to KB-060: Metrics Explained
- KB-061 to KB-080: Troubleshooting
- KB-081 to KB-090: Billing & Account
- KB-091 to KB-100: Updates

---

## Article Writing Guidelines

### Article Structure

**Every article must have:**

1. **Title:** Clear, descriptive, uses keywords (50-80 characters)
2. **Category:** One of 7 categories above
3. **Problem Description:** What issue does this solve? (1-2 sentences)
4. **Solution:** Step-by-step instructions (numbered list, screenshots)
5. **Why This Works:** Brief explanation (educate, don't just fix)
6. **Related Articles:** Links to 2-3 related KB articles
7. **Feedback Section:** Link to support if article doesn't solve issue

### Writing Style

**Tone:**
- Friendly, helpful (not robotic)
- Patient (assume zero Power BI knowledge)
- Encouraging ("Mudah, kan?", "Selamat, Anda berhasil!")

**Language:**
- Bahasa Indonesia (primary)
- Explain English terms: "Refresh (perbarui data)"
- Avoid jargon: Not "Query timeout" → "Proses loading terlalu lama"

**Formatting:**
- **Bold** for important terms or actions ("Klik tombol **Refresh**")
- `Code formatting` for file paths or technical terms (`C:\Data\transactions.csv`)
- Numbered lists for sequential steps
- Bullet points for options or tips

**Screenshots:**
- Annotate with arrows, highlights, or numbers (match text steps)
- Use consistent style (red arrows, yellow highlights)
- Compress images (<500 KB) for fast loading

### SEO & Searchability

**Title Optimization:**
- Use customer language (not technical jargon)
- Include primary keyword: "Data tidak refresh" (not "Query timeout error")

**Meta Description (if web-based KB):**
- 150-160 characters
- Include problem + solution
- Example: "Cara mengatasi data yang tidak ter-refresh di Power BI setelah import CSV baru. Solusi step-by-step dalam 5 menit."

**Tags/Keywords:**
- 3-5 tags per article
- Example: `data refresh`, `CSV import`, `troubleshooting`, `Power BI error`

---

## Article Templates by Category

### Template 1: Getting Started

**Use Case:** First-time setup, onboarding, basics

**Structure:**

```markdown
# KB-XXX: [Title - Getting Started with Feature/Process]

**Category:** Getting Started
**Last Updated:** YYYY-MM-DD
**Author:** [Name]
**Estimated Reading Time:** X minutes

---

## What You'll Learn

[1-sentence overview of what this article teaches]

---

## Prerequisites

- [ ] [Tool/account needed, e.g., Power BI Desktop installed]
- [ ] [Data/file needed, e.g., CSV export from POS]

---

## Step-by-Step Instructions

### Step 1: [First Action]

[Explanation]

**How to do it:**
1. [Detailed instruction]
2. [Detailed instruction]
3. [Detailed instruction]

**Screenshot:** [Annotated screenshot]

---

### Step 2: [Second Action]

[Continue for all steps...]

---

## You're Done!

[Summary of what they accomplished]

---

## Related Articles

- KB-XXX: [Related topic 1]
- KB-XXX: [Related topic 2]

---

**Need more help?** Contact support@[company].com or WhatsApp +62 XXX-XXXX-XXXX
```

---

### Template 2: Troubleshooting

**Use Case:** Error messages, issues, bugs

**Structure:**

```markdown
# KB-XXX: [Error/Issue Title]

**Category:** Troubleshooting
**Last Updated:** YYYY-MM-DD
**Author:** [Name]

---

## Problem Description

**Symptoms:**
- [What customer sees/experiences]
- [Error message, if any]

**When This Happens:**
- [Context: after data import, after clicking button, etc.]

---

## Solution

**Quick Fix (Try This First):**
1. [Simple solution that works 80% of the time]
2. [Example: "Klik Refresh"]

**If That Doesn't Work:**

### Option 1: [Solution A]

[Detailed steps]

---

### Option 2: [Solution B]

[Alternative approach if Option 1 fails]

---

## Why This Works

[Brief technical explanation in simple terms]

---

## Prevention

**To avoid this issue in the future:**
- [Tip 1]
- [Tip 2]

---

## Related Issues

- KB-XXX: [Similar error/issue]
- KB-XXX: [Related troubleshooting topic]

---

**Still not working?** Contact support with:
- Screenshot of error message
- What you tried (so we don't suggest same steps)
- Your template version (check "About" tab)
```

---

### Template 3: Metrics Explained

**Use Case:** Explain what a metric means and how to use it

**Structure:**

```markdown
# KB-XXX: Arti Metrik "[Metric Name]"

**Category:** Metrics Explained
**Last Updated:** YYYY-MM-DD
**Author:** [Name]

---

## What Is "[Metric Name]"?

**Definition:**
[Simple explanation in one sentence]

**Where to Find It:**
[Which dashboard tab, which card/chart]

**Screenshot:** [Highlight metric location]

---

## How It's Calculated

**Formula:**
[Simple formula, e.g., "Total Omzet ÷ Jumlah Transaksi"]

**Example:**
- Total Omzet: Rp 45,000,000
- Jumlah Transaksi: 3,000
- [Metric Name]: Rp 45,000,000 ÷ 3,000 = **Rp 15,000**

---

## Why This Metric Matters

**Business Impact:**
[Explain how this helps make decisions]

**Example Use Cases:**
1. [Scenario 1: How a restaurant owner uses this]
2. [Scenario 2: Another practical application]

---

## How to Interpret

**Good vs Bad:**

** Good:**
- [What indicates healthy performance]
- Example: "[Metric] > X means..."

** Bad:**
- [What indicates problem]
- Example: "[Metric] < Y means you should..."

---

## Action Steps

**If your [Metric] is low/high:**
1. [Actionable recommendation]
2. [Actionable recommendation]

---

## Related Metrics

- KB-XXX: [Related metric 1]
- KB-XXX: [Related metric 2]

---

**Questions?** Contact support@[company].com
```

---

### Template 4: How-To Guide

**Use Case:** Teach how to use a feature

**Structure:**

```markdown
# KB-XXX: Cara [Action/Task]

**Category:** Dashboard Features
**Last Updated:** YYYY-MM-DD
**Author:** [Name]
**Estimated Time:** X minutes

---

## What You'll Accomplish

[1-sentence goal: "Filter dashboard by date range", "Export to PDF", etc.]

---

## When to Use This

**Use Cases:**
- [Scenario 1]
- [Scenario 2]

---

## Step-by-Step Instructions

### Step 1: [First Action]

1. [Instruction]
2. [Instruction]

**Screenshot:** [Visual aid]

---

### Step 2: [Second Action]

[Continue...]

---

## Tips & Best Practices

** Tip 1:** [Helpful advice]
** Tip 2:** [Optimization suggestion]

---

## Related Articles

- KB-XXX: [Related how-to]
- KB-XXX: [Advanced version of this topic]

---

**Need help?** Contact support@[company].com
```

---

## Sample Articles (20 Examples)

### Getting Started (5 articles)

#### KB-001: Cara Download dan Install Power BI Desktop

**Problem Description:**
Anda perlu install Power BI Desktop untuk membuka template, tapi tidak tahu caranya.

**Solution:**

**Step 1: Download Power BI Desktop**
1. Buka browser (Chrome, Firefox, Edge)
2. Kunjungi: https://powerbi.microsoft.com/desktop
3. Klik tombol "Download Free" (gratis)
4. File `PBIDesktopSetup.exe` akan terdownload (sekitar 500 MB)

**Step 2: Install Power BI Desktop**
1. Klik 2x file `PBIDesktopSetup.exe` yang sudah didownload
2. Klik "Next" → "I accept" → "Next" → "Install"
3. Tunggu 5-10 menit (tergantung kecepatan komputer)
4. Klik "Finish"

**Step 3: Buka Power BI Desktop**
1. Cari "Power BI Desktop" di Start Menu
2. Klik untuk membuka
3. Klik "Close" pada welcome screen
4. Selamat! Power BI Desktop siap digunakan.

**Why This Works:**
Power BI Desktop adalah aplikasi gratis dari Microsoft untuk membuka file `.pbix` (template kami).

**Related Articles:**
- KB-002: Cara Download Template dari Google Drive
- KB-003: Cara Import Data POS ke Power BI

---

#### KB-002: Cara Download Template dari Google Drive

**Problem Description:**
Anda sudah berlangganan R1, tapi tidak tahu cara download template.

**Solution:**

**Step 1: Buka Link Google Drive**
1. Cek email dari R1 dengan subject "Welcome to R1 Template Support"
2. Klik link Google Drive (atau copy-paste ke browser)

**Step 2: Download File Template**
1. Anda akan lihat folder "R1 Updates" > "2025" > "January"
2. Cari file `PWBI_FnB_Template_v1.0.0.pbix`
3. Klik kanan file → "Download"
4. Tunggu download selesai (file sekitar 50 MB, 1-2 menit)

**Step 3: Simpan ke Folder yang Mudah Diakses**
1. Pindahkan file dari "Downloads" ke folder bisnis Anda (misalnya, `C:\Restoran\Data\`)
2. Rename file jika mau (misalnya, `Dashboard_Restoran_v1.0.0.pbix`)

**You're Done!**
Sekarang Anda bisa buka file dengan Power BI Desktop.

**Related Articles:**
- KB-001: Cara Install Power BI Desktop
- KB-003: Cara Import Data POS ke Power BI

---

### Data Import & Refresh (5 articles)

#### KB-012: Data Tidak Ter-Refresh Setelah Import CSV Baru

**Problem Description:**

**Symptoms:**
- Anda sudah import CSV baru dari POS (misalnya, data Februari)
- Dashboard masih menampilkan data lama (Januari)
- Tanggal terakhir tidak berubah

**When This Happens:**
- Setelah export CSV baru dan klik "Refresh" di Power BI

---

**Solution:**

**Quick Fix (Try This First):**
1. Klik tab "Home" → Klik tombol "Refresh" (ikon panah melingkar)
2. Tunggu 2-3 menit
3. Cek tanggal terakhir di dashboard (seharusnya berubah ke hari ini)

**If That Doesn't Work:**

### Option 1: Verifikasi Lokasi File CSV

Power BI menyimpan path file CSV. Jika Anda pindahkan file ke folder lain, Power BI tidak bisa menemukan data.

**Cara fix:**
1. Klik "Home" → "Transform Data" (Power Query Editor akan buka)
2. Klik ikon gear "Data Source Settings" di toolbar
3. Verifikasi path file CSV (contoh: `C:\Data\transactions.csv`)
4. Jika path salah, klik "Change Source" → Arahkan ke file CSV yang benar
5. Klik "OK" → "Close & Apply"
6. Tunggu refresh selesai (2-3 menit)

---

### Option 2: Re-Import CSV dari Awal

Jika Option 1 tidak berhasil, coba import ulang CSV:

1. Buka Power BI → "Home" → "Get Data" → "Text/CSV"
2. Pilih file CSV Anda
3. Klik "Load"
4. Power BI akan replace data lama dengan data baru
5. Tunggu hingga selesai

---

**Why This Works:**

Power BI menyimpan data di cache (memori internal). Setelah import CSV baru, Anda harus "Refresh" agar Power BI membaca data terbaru dari file.

Jika path file berubah (file dipindahkan), Power BI tidak bisa menemukan data. Langkah "Change Source" memperbarui path file.

---

**Prevention:**

**To avoid this issue in the future:**
- Simpan CSV di folder yang sama setiap kali export (misalnya, `C:\Restoran\Data\`)
- Jangan rename file CSV setelah import (gunakan nama konsisten: `transactions_2025.csv`)
- Set up automatic refresh (jika pakai Power BI Service)

---

**Related Issues:**
- KB-013: Error "File Not Found" Saat Refresh
- KB-014: Data Terduplikasi Setelah Import CSV Baru

---

**Still not working?** Contact support with:
- Screenshot dashboard (tunjukkan tanggal yang salah)
- Lokasi file CSV Anda (`C:\...`)
- Template version (cek tab "About")

---

### Dashboard Features (5 articles)

#### KB-025: Cara Filter Dashboard by Date Range

**Problem Description:**
Anda ingin lihat data bulan tertentu (misalnya, hanya Januari 2025), tapi dashboard menampilkan semua data.

**Solution:**

**Step 1: Buka Date Slicer**
[Screenshot: Dashboard with date slicer highlighted]

1. Lihat panel kiri dashboard
2. Cari "Date Range" atau "Pilih Tanggal"
3. Klik dropdown atau calendar icon

**Step 2: Select Date Range**

**Option A: Pilih Bulan Tertentu**
1. Klik dropdown "Month"
2. Pilih "January 2025"
3. Dashboard otomatis update (hanya tampilkan data Januari)

**Option B: Pilih Custom Date Range**
1. Klik calendar icon
2. Pilih start date (misalnya, 1 Jan 2025)
3. Pilih end date (misalnya, 31 Jan 2025)
4. Klik "Apply"

**Step 3: Clear Filter (Kembali ke All Data)**
1. Klik tombol "Clear Filter" atau "Reset"
2. Dashboard akan tampilkan semua data lagi

---

**Tips & Best Practices:**

** Tip 1:** Gunakan filter bulan untuk perbandingan month-over-month (Januari vs Februari)
** Tip 2:** Gunakan filter minggu untuk analisis weekly trends
** Tip 3:** Export filtered data to Excel untuk laporan bulanan

---

**Related Articles:**
- KB-026: Cara Filter Dashboard by Branch
- KB-027: Cara Filter Dashboard by Product Category

---

### Metrics Explained (5 articles)

#### KB-045: Arti Metrik "Food Cost Percentage"

**Problem Description:**
Anda lihat angka "Food Cost %" di dashboard, tapi tidak tahu artinya dan apakah angka Anda bagus atau buruk.

**What Is "Food Cost Percentage"?**

**Definition:**
Persentase biaya bahan baku dari total omzet.

**Where to Find It:**
Dashboard "Key Metrics" → Card "Food Cost %"

[Screenshot: Highlight Food Cost % card showing "32%"]

---

**How It's Calculated:**

**Formula:**
```
Food Cost % = (Total Biaya Bahan Baku ÷ Total Omzet) × 100%
```

**Example:**
- Total Omzet bulan Januari: Rp 45,000,000
- Total Biaya Bahan Baku: Rp 14,400,000
- Food Cost %: (Rp 14,400,000 ÷ Rp 45,000,000) × 100% = **32%**

---

**Why This Metric Matters:**

**Business Impact:**
Food cost adalah biaya operasional terbesar untuk bisnis F&B. Jika terlalu tinggi, profit margin Anda turun.

**Example Use Cases:**
1. **Evaluasi harga menu:** Jika food cost 40%, artinya dari Rp 100K omzet, Rp 40K habis untuk bahan baku. Anda hanya punya Rp 60K untuk biaya lain (sewa, gaji, profit).
2. **Nego supplier:** Jika food cost naik dari 30% ke 35%, cek apakah harga bahan naik → nego supplier atau cari alternatif.

---

**How to Interpret:**

** Good:**
- Food Cost 28-35% = Sehat (standard industri F&B)
- Artinya: Anda punya gross margin 65-72% untuk biaya operasional & profit

** Bad:**
- Food Cost >35% = Terlalu tinggi (profit margin tertekan)
- Artinya: Anda overspending pada bahan baku → review supplier, portion, atau waste

---

**Action Steps:**

**If your Food Cost is >35%:**
1. **Review supplier:** Beli dari supplier lain yang lebih murah?
2. **Portion control:** Kurangi porsi sedikit (10-15% tidak akan customer sadari)
3. **Reduce waste:** Cek berapa banyak bahan yang dibuang (kadaluarsa, salah masak)
4. **Raise prices:** Jika semua biaya sudah efisien, naikkan harga menu 5-10%
5. **Menu engineering:** Promosikan produk dengan food cost rendah (margin tinggi)

---

**Related Metrics:**
- KB-046: Arti Metrik "Gross Margin"
- KB-047: Arti Metrik "Average Transaction Value"

---

### Troubleshooting (Additional Examples)

#### KB-062: Dashboard Lambat Loading (>1 Menit)

**Problem:** Dashboard memakan waktu >1 menit untuk load (terlalu lama)

**Solution:**

**Quick Fix:**
- Close background apps (Chrome dengan 20 tabs, Zoom, Spotify)
- Restart Power BI Desktop

**If Still Slow:**

**Option 1: Reduce Data Size**
- Filter data: Hanya import 6 bulan terakhir (tidak perlu 3 tahun)
- Remove unused columns: Delete kolom yang tidak dipakai

**Option 2: Optimize Queries**
- Use measures instead of calculated columns (lebih cepat)
- Disable auto-refresh (Settings → Options → Data Load → Uncheck "Auto-refresh")

**Related:**
- KB-063: Cara Optimize Performance untuk Large Datasets

---

## Article Maintenance

### Update Frequency

**Quarterly Reviews:**
- Check if article still accurate (template updates may change UI)
- Update screenshots if needed
- Add new sections based on support ticket trends

**Triggered Updates:**
- When template releases major update (new UI, new features)
- When solution changes (old method deprecated, new best practice)
- When customer reports article is outdated

### Archiving Old Articles

**When to Archive:**
- Feature no longer exists (removed from template)
- Solution no longer works (Power BI updated, method changed)
- <1% of customers view article in 6 months (low value)

**How to Archive:**
- Move to "Archived" folder
- Add notice: "This article is outdated. See KB-XXX for updated solution."

---

## Success Metrics

**Article Performance:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| **View Rate** | 20%+ of subscribers visit KB monthly | Unique visitors ÷ total subscribers |
| **Search Success** | 70%+ find relevant article | Click-through rate on search results |
| **Deflection Rate** | 30%+ of KB visitors don't contact support | Compare: KB visitors vs support tickets |
| **Satisfaction** | 4.0+ / 5.0 | "Was this article helpful?" rating |

**Quarterly Goals:**
- Q1: 20 core articles (Getting Started, Data Import, Key Metrics)
- Q2: 40 articles (add Troubleshooting, Dashboard Features)
- Q3: 60 articles (add Advanced Topics, Updates)
- Q4: 80 articles (comprehensive coverage of all topics)

---

## Conclusion

By building a comprehensive knowledge base with **80+ high-quality articles**, R1 Template Support can:
- Reduce support load by 30-40%
- Improve customer satisfaction (faster self-service)
- Scale efficiently as subscriber count grows

**Remember:** Every article is an investment that serves hundreds of subscribers and saves dozens of support hours.

---

**Document Version History:**

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2025-12-28 | Initial KB article templates & guidelines | Customer Success Team |

---

**END OF KNOWLEDGE BASE ARTICLE TEMPLATES**
