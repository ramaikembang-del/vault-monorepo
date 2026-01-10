# A1: Power BI Template - Launch Checklist

**Product:** Power BI Template
**Philosophy:** **Validate-First** (Pre-sell before building)
**Timeline:** Week 0 (Validation) -> Decision Gate -> Week 1-4 (Build if validated)
**Target Launch:** Week 2 (Day 10-14) - **ONLY if validation succeeds**

---

## Quick Summary

| Phase | Timeline | Success Criteria | Status |
|-------|----------|------------------|--------|
| **Week 0: Validation** | 1-2 weeks | 3-5 commitments | [ ] |
| **Week 1-4: Build** | 3-4 weeks | Template complete | [ ] |
| **Week 5+: Scale** | Ongoing | 10+ customers | [ ] |

**[!] CRITICAL:** Do NOT start building (Week 1-4) until Week 0 validation gate succeeds.

**See:** [[products/02-template-support/sales/pre-sale-validation-playbook|Pre-Sale Validation Playbook]] for complete validation guide

---

## WEEK 0: PRE-SALE VALIDATION (DO THIS FIRST)

### **Goal:** Validate market demand BEFORE investing 3-4 weeks building

**Success Criteria (Decision Gate):**
- **Minimum:** 3 verbal commitments ("Yes, I'd buy for Rp 3.5M")
- **Ideal:** 5 deposit commitments (50% = Rp 1.75M each = Rp 8.75M upfront)
- **Stretch:** 10 waitlist signups

---

### Day 1-2: Create Validation Assets

- [ ] **Adapt one-pager for validation:**
 - Add "EARLY ACCESS OFFER" banner
 - Early pricing: Rp 2.5M (vs Rp 3.5M standard for T1-Basic)
 - Add mockup screenshots (borrowed, labeled "Sample")
 - Delivery timeline: "3-4 weeks from commitment"

- [ ] **Create validation materials:**
 - [ ] One-page sales PDF (from `marketing/one-pager.md`)
 - [ ] 3-5 mockup screenshots
 - [ ] WhatsApp message template
 - [ ] Validation tracking spreadsheet

- [ ] **Optional: Landing page** (Carrd / Google Sites / Notion)

**Deliverable:** Validation assets ready to share

---

### Day 3-7: Validation Conversations

**Target:** 15-20 conversations -> 3-5 commitments

- [ ] **Warm network outreach (10-15 people):**
 - WhatsApp to F&B owner contacts
 - LinkedIn connections in F&B
 - Facebook group members

- [ ] **Validation conversations (use scripts from playbook):**
 - Discovery: "How do you track performance now?"
 - Show mockups
 - The ask: "Would you pay Rp 3.5M for this? 50% deposit now?"

- [ ] **Track validation metrics:**
 - Conversations: ____ / 15
 - Positive interest: ____ / 10
 - Verbal commitments: ____ / 3
 - Deposit commitments: ____ / 3
 - Qualitative feedback documented

---

### Day 7-10: [!] DECISION GATE (CRITICAL)

**Make go/no-go decision based on validation results:**

#### PROCEED TO BUILD if:
- 3+ verbal commitments OR
- 2+ deposit commitments (Rp 3.5M+ in hand) OR
- 10+ waitlist signups

**Actions:**
- [ ] Mark validation SUCCESSFUL
- [ ] Send update to committed customers: "Development starts Monday!"
- [ ] **Proceed to "Week 1-4: Build Phase" below**

---

#### Œ PAUSE/PIVOT if:
- 0-2 verbal commitments
- 0 deposits
- <5 waitlist signups

**Actions:**
- [ ] ¸ **Do NOT start building**
- [ ] Document why (learnings)
- [ ] Investigate: Pricing too high? Value unclear? Wrong market?
- [ ] Pivot options:
 - Test lower price (Rp 2.5M early bird)
 - Simplify offering (30 base metrics only, no optional modules)
 - Offer free pilot (1 customer, learn deeply)
 - Delay to Q1 2025
 - Build E1 SaaS instead

**CRITICAL:** Respect market feedback. Don't build if they say "no."

---

#### EXTEND VALIDATION if:
- 2 verbal commitments (close)
- 5-9 waitlist signups

**Actions:**
- [ ] Extend 1 more week
- [ ] Reach 10 more people
- [ ] Create urgency: "Starting build Monday"
- [ ] Re-evaluate end of Week 1

---

## WEEK 1-4: BUILD PHASE (Only if Week 0 validated)

**Prerequisites:**
- [ ] Week 0 validation PASSED (3+ commitments)
- [ ] Committed customers notified
- [ ] Feedback from validation incorporated into build plan

---

## Pre-Development (Day -7 to 0)

### Infrastructure Setup

#### CRITICAL: Google Drive Folder (1 hour)

**Must complete before:** First customer delivery
**Blocks:** Everything

- [ ] Create folder: `Clario Products/A1-Power-BI-Template/`
- [ ] Subfolder: `Current Version/`
- [ ] Subfolder: `Archive/` (for old versions)
- [ ] Subfolder: `Sample Data/`
- [ ] Set permissions: Anyone with link can VIEW
- [ ] Test: Open incognito, verify access works
- [ ] Save URL to share with customers

**Deliverable:** Google Drive link ready

---

#### CRITICAL: Midtrans Payment Setup (1-3 days)

**Must complete before:** Public launch
**Blocks:** Accepting payments

- [ ] Sign up at [Midtrans](https://midtrans.com)
- [ ] Submit KYB documents:
 - [ ] NIB (business registration)
 - [ ] NPWP (tax ID)
 - [ ] Bank account
 - [ ] Director ID
- [ ] Wait for approval (1-3 business days)
- [ ] Get API credentials (Server Key, Client Key)
- [ ] Create payment page for A1:
 ```
 Product: F&B Analytics Power BI Template
 SKUs:
 - T1-Basic (Rp 3,500,000): 30 metrics, single location
 - T2-Professional (Rp 7,000,000 - 12,000,000): 50-100 metrics, multi-location
 - T3-Enterprise (Rp 10,000,000 - 15,000,000 (Managed)): 100-150 metrics, automation
 Payment type: One-time
 ```
- [ ] Set success URL: `/thank-you?product=a1`
- [ ] Set notification webhook (for auto-delivery, optional for MVP)
- [ ] Test payment with Rp 10,000

**Deliverable:** Payment link for each tier

---

## Development (Day 1-6)

### Core Product

#### CRITICAL: Create Template File (6 days)

**Must complete before:** Any launch
**Blocks:** Everything

**Day 1: Data Model**
- [ ] Create Sales fact table
- [ ] Create Products dimension table
- [ ] Create Staff dimension table
- [ ] Create Calendar table (date intelligence)
- [ ] Define relationships (Sales -> Products, Sales -> Staff)
- [ ] Test: Import sample CSV, verify relationships work

**Day 2: DAX Measures**
- [ ] Create 30+ base measures (see tech spec)
 - [ ] Total Revenue
 - [ ] Food Cost %
 - [ ] Prime Cost %
 - [ ] Health Score
 - [ ] WoW/MoM Change %
 - [ ] BCG Quadrant classification
 - [ ] Peak Hour calculation
 - [ ] All others from feature list
- [ ] Test each measure with sample data
- [ ] Verify calculations match expected results

**Day 3: Pages 1-3**
- [ ] Page 1: Executive Summary
 - [ ] Health Score card
 - [ ] KPI cards (Revenue, Food Cost %, Prime Cost %)
 - [ ] 30-day trend line chart
 - [ ] Alert box
- [ ] Page 2: Revenue Analysis
 - [ ] Daily revenue line chart
 - [ ] Revenue by category bar chart
 - [ ] WoW/MoM KPI cards
- [ ] Page 3: Menu Performance
 - [ ] BCG Matrix scatter chart
 - [ ] Top 10 sellers bar chart
 - [ ] Bottom 10 sellers bar chart
 - [ ] Product table with margins

**Day 4: Pages 4-6**
- [ ] Page 4: Staff Performance
 - [ ] Sales per staff bar chart
 - [ ] Transactions per staff
 - [ ] Staff sales trend line
 - [ ] Shift comparison (neutral, not ranked)
- [ ] Page 5: Operations
 - [ ] Peak hours heatmap (Hour x Day matrix)
 - [ ] Transactions per hour line
 - [ ] Peak/Off-peak hour cards
- [ ] Page 6: Cost Analysis
 - [ ] Food Cost % KPI (benchmark: 28-32%)
 - [ ] Beverage Cost % KPI (benchmark: 20-25%)
 - [ ] Prime Cost % gauge (zones: green <60%, yellow 60-65%, red >65%)
 - [ ] Cost % trend line

**Day 5: Localization & Polish**
- [ ] Translate all labels to Bahasa Indonesia
- [ ] Set Power BI regional settings to Indonesia
- [ ] Format currency as "Rp #,##0"
- [ ] Format percentages as "0.0%"
- [ ] Add page navigation buttons
- [ ] Add help tooltips (? icons)
- [ ] Apply consistent color scheme
- [ ] Test on different screen sizes

**Day 6: QA & Packaging**
- [ ] Test all visuals with sample data
- [ ] Test all filters/slicers
- [ ] Verify DAX formulas (no errors)
- [ ] Check for typos in Bahasa Indonesia
- [ ] Save as .pbit (template file, not .pbix)
- [ ] Verify template prompts for data source on open
- [ ] Test: Open template, connect to CSV, verify works
- [ ] Final file: `F&B-Analytics-Template-v1.0.0.pbit`

**Deliverable:** Template .pbit file ready

---

### WEEK 1: Excel Template Suite Creation (NEW - ECOSYSTEM BUNDLE)

**Goal:** Create 4 pre-formatted Excel templates (the key differentiator)

#### Day 7-8: Build Daily-Sales.xlsx
- [ ] Design table structure (Date, Product, Quantity, Amount, Staff, Payment Method)
- [ ] Add dropdown lists:
 - [ ] Product list (30-50 sample Indonesian F&B items: Kopi Susu, Nasi Goreng, Mie Ayam, etc.)
 - [ ] Staff list (sample names: Budi, Rina, Siti, Andi, Dewi)
 - [ ] Payment methods (Cash, GoPay, OVO, QRIS, Debit Card)
- [ ] Add auto-calc formulas:
 - [ ] Subtotal (Quantity x Unit Price)
 - [ ] Tax (10% if applicable)
 - [ ] Total
 - [ ] Daily summary (total sales for day)
- [ ] Add data validation:
 - [ ] Date must be today or earlier
 - [ ] Quantity > 0
 - [ ] Amount ‰¥ 0
- [ ] Add conditional formatting (highlight if Amount > Rp 100K)
- [ ] Create sample data (1 week of transactions)
- [ ] Test: Fill manually -> Import to Power BI -> Verify works

#### Day 9: Build Food-Cost.xlsx
- [ ] Design recipe card structure (Ingredient, Quantity, Unit, Cost/Unit, Extended Cost)
- [ ] Build 10 sample recipes (Nasi Goreng, Mie Ayam, Kopi Susu, Ayam Geprek, etc.)
- [ ] Add traffic light conditional formatting:
 - [ ] Green: Food Cost < 30%
 - [ ] Yellow: Food Cost 30-35%
 - [ ] Red: Food Cost > 35%
- [ ] Add auto-calc formulas:
 - [ ] Total recipe cost
 - [ ] Suggested selling price (cost x 3.3 = 30% food cost)
 - [ ] Food cost percentage
- [ ] Test with varying ingredients (verify traffic lights work)

#### Day 10: Build Staff-Log.xlsx + Outlet-Summary.xlsx
- [ ] **Staff-Log.xlsx:**
 - [ ] Timesheet structure (Staff, Clock In, Clock Out, Hours, Sales this Shift)
 - [ ] Performance calculations (Rp/hour, Transactions/hour)
 - [ ] Leaderboard (auto-rank by performance)
 - [ ] Gamification tiers:
 - Gold: > Rp 50K/hour
 - Silver: Rp 30-50K/hour
 - Bronze: < Rp 30K/hour

- [ ] **Outlet-Summary.xlsx** (Tier 2/3 multi-outlet):
 - [ ] Create 3 sample outlet tabs (Jakarta Pusat, Bandung, Surabaya)
 - [ ] Build consolidation formulas (SUM across outlets)
 - [ ] Cross-outlet comparison table
 - [ ] Test with sample data from multiple outlets

#### Day 11: Google Sheets Versions
- [ ] Convert all 4 Excel files to Google Sheets
- [ ] Test formulas (some Excel formulas break in Sheets - fix compatibility)
- [ ] Create "Make-a-copy" links for each template
- [ ] Test on mobile (Android + iOS)
- [ ] Verify dropdowns work on phone interface

**Deliverables:**
- 4 Excel templates (.xlsx) uploaded to Google Drive
- 4 Google Sheets templates (make-a-copy links ready)
- All tested and working with Power BI import

---

#### CRITICAL: Create Sample Data (4 hours)

**Must complete before:** Template QA
**Blocks:** Testing, customer demos

- [ ] Create realistic Indonesian F&B data
- [ ] **Sales.csv** (~5,000 rows, 3 months):
 ```csv
 date,time,product_name,quantity,unit_price,total_amount,staff_name,payment_method
 2025-10-01,08:30:00,Kopi Susu,2,15000,30000,Budi,cash
 2025-10-01,09:15:00,Nasi Goreng,1,25000,25000,Rina,gopay
 ...
 ```
 - [ ] Product names: Kopi Susu, Es Teh, Nasi Goreng, Mie Ayam, Ayam Geprek, Jus Alpukat, etc.
 - [ ] Staff names: Budi, Rina, Siti, Andi, Dewi (5-10 staff)
 - [ ] Pricing: Rp 10,000 - Rp 50,000 range
 - [ ] Peak hours: 11-13 (lunch), 18-20 (dinner)
 - [ ] Weekend spikes: Saturday/Sunday +30% revenue
 - [ ] Payment mix: 50% cash, 30% GoPay, 20% OVO

- [ ] **Products.csv** (30-50 items):
 ```csv
 product_id,product_name,category,cost_price,sell_price
 1,Kopi Susu,beverage,5000,15000
 2,Nasi Goreng,food,10000,25000
 ...
 ```
 - [ ] Cost prices with 30-40% food cost margin
 - [ ] Categories: food (60%), beverage (30%), dessert (10%)

- [ ] **Staff.csv** (5-10 staff):
 ```csv
 staff_id,staff_name,role,hourly_rate
 1,Budi,kasir,15000
 2,Rina,waitress,12000
 ...
 ```

- [ ] Verify sample data produces:
 - [ ] Health Score: 70-85 (realistic "good" business)
 - [ ] Food Cost %: 30-35%
 - [ ] Prime Cost %: 55-65%
 - [ ] BCG Matrix: Mix of Stars, Cash Cows, Dogs, Question Marks
 - [ ] Realistic peak hours heatmap

- [ ] Package as `Sample-Data.zip`
- [ ] Upload to Google Drive: `Sample Data/`

**Deliverable:** Sample Data.zip in Google Drive

---

## Documentation (Day 5-7)

### Customer-Facing Docs

#### [!] HIGHLY RECOMMENDED: Setup Guide PDF (4 hours)

**Must complete before:** Public launch (can skip for beta)
**Blocks:** Customer success

- [ ] **Page 1: Introduction**
 - Product overview
 - What's included
 - System requirements (Power BI Desktop, 4GB RAM)

- [ ] **Page 2-3: Step-by-Step Setup**
 1. Download Power BI Desktop (free)
 2. Download template from Google Drive
 3. Export data from your POS system
 4. Open template (.pbit file)
 5. Connect to your CSV files
 6. Map columns (if needed)
 7. Click Refresh

- [ ] **Page 4-5: Understanding Your Dashboard**
 - How to read Health Score
 - What each tab shows
 - How to filter by date/category

- [ ] **Page 6-7: Troubleshooting**
 - Template won't open -> Check Power BI version
 - Data connection failed -> Check file path
 - Numbers look wrong -> Check column mapping
 - Charts in English -> Change regional settings
 - Template slow -> Reduce data size

- [ ] **Page 8: Getting Help**
 - FAQ link
 - Email support (free tier)
 - Upgrade to R1 for WhatsApp support

- [ ] Design in Canva (free) or Google Slides
- [ ] Export as PDF
- [ ] Upload to Google Drive: `Documentation/Setup-Guide-v1.0.pdf`

**Deliverable:** Setup Guide PDF in Google Drive

---

#### Optional: Column Mapping Reference (1 hour)

**Must complete before:** Never (nice-to-have)
**Blocks:** Nothing

- [ ] Create table showing:
 - Our required column name -> Common POS export names
 - Example: `date` -> tanggal, tgl, transaction_date, order_date
 - Example: `product_name` -> item, nama_produk, menu_item
 - Example: `unit_price` -> price, harga, price_per_item

- [ ] Add instructions: How to map columns in Power Query
- [ ] Upload to Google Drive

**Deliverable:** Column-Mapping-Reference.pdf (optional)

---

### Marketing Assets

#### Optional: Demo Video (1 day)

**Must complete before:** Paid ads (can skip for organic launch)
**Blocks:** Conversion rate (but not launch)

**Script (5-8 minutes):**
- [ ] Intro (30s):
 - "Punya data POS tapi bingung cara analisis?"
 - "Template Power BI siap pakai untuk bisnis F&B"

- [ ] Problem (1 min):
 - Show: Excel spreadsheet (messy, confusing)
 - "Sulit lihat performa menu"
 - "Tidak tahu jam ramai"
 - "Food cost tidak terkontrol"

- [ ] Solution (30s):
 - "Template analytics siap pakai"
 - "30+ metric otomatis"
 - "Dashboard profesional"

- [ ] Demo (3-4 min):
 - Download template
 - Import CSV
 - Show each dashboard page:
 - Health Score 78/100
 - BCG Matrix (visual)
 - Peak Hours heatmap
 - Cost analysis
 - Show filters (date range, category)

- [ ] Pricing & CTA (30s):
 - "Rp 2 juta - 7 juta (one-time)"
 - "Gratis update selama 1 tahun"
 - "Download sekarang: [Link]"

**Production:**
- [ ] Record screen (OBS Studio or Loom)
- [ ] Record voiceover (Bahasa Indonesia, clear audio)
- [ ] Edit in DaVinci Resolve or CapCut
- [ ] Add captions (auto-generate, then manually fix)
- [ ] Add background music (YouTube Audio Library)
- [ ] Outro: Logo + CTA + Link
- [ ] Upload to YouTube (public or unlisted)
- [ ] Embed on landing page

**Deliverable:** YouTube video link

---

## Legal (Day 8-10)

#### [!] REQUIRED for Public Launch: Terms of Service (2 hours)

**Must complete before:** Public launch (not needed for beta to friends)
**Blocks:** Legal protection

- [ ] Use template: [Terms of Service Generator](https://www.termsofservicegenerator.net/)
- [ ] Customize:
 - Company: [Your company name]
 - Product: Power BI Template (one-time purchase)
 - Price: Rp 3.5M - 6M
 - Delivery: Digital download (Google Drive)
 - Refund: 30-day money-back guarantee
 - Support: Email only (or upgrade to R1)
 - Governing law: Indonesian law
 - Disputes: Arbitration in [City]
- [ ] Key clauses:
 - Customer owns their data
 - Template sold "as-is" (no warranty)
 - No reselling allowed
 - No reverse engineering
 - We may update template (non-breaking changes)
- [ ] Publish to website: `/terms`
- [ ] Add link to payment page
- [ ] Version: 1.0, effective: [Launch date]

**Deliverable:** Terms of Service published

---

## Launch Preparation (Day 9-10)

### Pre-Flight Checklist

**24 Hours Before Launch:**
- [ ] **Product:**
 - [ ] Template v1.0.0 uploaded to Google Drive
 - [ ] Sample Data uploaded to Google Drive
 - [ ] Setup Guide uploaded (if ready)
 - [ ] Test: Download link works in incognito mode

- [ ] **Payment:**
 - [ ] Midtrans approved and active
 - [ ] Payment links working for all 3 tiers
 - [ ] Test purchase: Rp 10,000 -> Verify email received
 - [ ] Refund test purchase

- [ ] **Legal:**
 - [ ] Terms of Service published (for public launch)
 - [ ] Terms link in payment flow

- [ ] **Communications:**
 - [ ] Purchase confirmation email template ready
 - [ ] Google Drive access granted automatically (or manual for MVP)
 - [ ] Support email monitored: support@clario.id

---

## Launch (Day 10)

### Soft Launch (Private Beta)

**Target:** 5-10 beta customers (friends, family, F&B owner contacts)

- [ ] Send personal WhatsApp message:
 ```
 Halo! Saya baru launching product baru:

 Template Power BI untuk analisis bisnis F&B.

 Bisa lihat:
 - Health Score bisnis
 - Menu mana yang laku/tidak laku
 - Jam ramai
 - Food cost %

 Bonus: Gratis untuk beta tester! (normally Rp 3.5 juta)

 Mau coba? [Link ke Google Form]
 ```

- [ ] Collect beta tester info (Google Form):
 - Name
 - Business name
 - WhatsApp number
 - Email
 - POS system used (if any)

- [ ] Send Google Drive link + Setup Guide

- [ ] Follow up after 3 days:
 - "Sudah coba? Ada kendala?"
 - "Feedback apa yang bisa dibagikan?"

- [ ] Collect feedback in Google Sheets:
 - What worked well?
 - What was confusing?
 - Any bugs found?
 - Feature requests?

**Success Criteria:**
- [ ] 5+ beta testers successfully use template
- [ ] <3 critical bugs found
- [ ] 70%+ would recommend to others

---

### Public Launch (After beta feedback)

**When ready (ideally Day 14):**

- [ ] Fix critical bugs from beta
- [ ] Update template to v1.0.1 (if needed)
- [ ] Announce on:
 - [ ] Personal Facebook/Instagram
 - [ ] F&B Facebook groups (5-10 groups)
 - [ ] LinkedIn (if applicable)
 - [ ] WhatsApp status

- [ ] Post template:
 ```
 LAUNCHING: Template Power BI untuk F&B

 Lihat bisnis Anda dalam 30 detik:
 Health Score
 Menu performance (BCG Matrix)
 Peak hours
 Food cost %

 Rp 3.5 juta - 15 juta (one-time)
 Gratis update 1 tahun

 Demo: [Video link]
 Info & Beli: [Landing page]
 ```

- [ ] Monitor first sales
- [ ] Respond to questions <24 hours
- [ ] Offer R1 support upsell after purchase

---

## Post-Launch (Week 2+)

### Ongoing Operations

**Daily:**
- [ ] Check email for support inquiries
- [ ] Monitor Midtrans for new payments
- [ ] Send Google Drive access to new customers (if manual)

**Weekly:**
- [ ] Update customer tracker (Google Sheets)
- [ ] Review customer feedback
- [ ] Plan template updates based on requests

**Monthly:**
- [ ] Release template update (if features/fixes accumulated)
- [ ] Send update email to all customers
- [ ] Update changelog

---

## Success Metrics

### Week 1 (Beta)
- [ ] 5-10 beta testers
- [ ] 70%+ success rate (actually use template)
- [ ] <5 critical bugs

### Week 2-4 (Public Launch)
- [ ] 10+ paid customers
- [ ] Rp 20M+ revenue
- [ ] 30%+ upsell to R1 support
- [ ] <10% refund rate

### Month 2-3
- [ ] 50+ customers
- [ ] Rp 100M+ revenue
- [ ] Product-market fit signals:
 - Word-of-mouth referrals
 - <5% refund rate
 - Feature requests align with roadmap

---

**Last Updated:** December 26, 2025
**Status:** Ready to Execute



---

**Related Documents:**
- [[products/01-power-bi-template/01-power-bi-template|Product Overview]] - Main product documentation
- [[products/01-power-bi-template/operations/operations|Operations Hub]] - All operations docs


