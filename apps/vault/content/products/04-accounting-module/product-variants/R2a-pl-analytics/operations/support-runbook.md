# Support Runbook - Simple P&L Tracker

**Product:** R2a - Simple P&L Tracker
**Product ID:** R2a
**Pillar:** P2 - Retention (Accounting Add-On)
**Tier:** Standard (Rp 75K) & Premium (Rp 100K)
**Support Channels:** Email & WhatsApp (Premium tier only)
**Owner:** Customer Success Lead

---

## Support Philosophy

**Core Principle:** "Proactive > Reactive"

Most support teams wait for tickets. We **anticipate issues and prevent them** through proactive nudges, educational content, and behavioral triggers.

**Why This Matters:** Accounting software creates anxiety. Users fear looking stupid asking "basic" questions ("Ewuh Pakewuh"). We must make support feel like helpful coaching, not judgment.

**Strategic Impact:** Support quality directly affects churn. Users who receive fast, empathetic support have 40% lower churn rates than those who struggle alone.

**Cross-Reference:** See [[onboarding-guide|onboarding-guide.md]] for common onboarding friction points and [[gate-tracking|gate-tracking.md]] for support readiness checklist.

---

## Top 10 Issues & Solutions (Prioritized by Volume)

### 1. "My POS CSV Won' Import" (35% of tickets - MOST COMMON)

**Symptom:** User uploads file, gets "Error: Invalid Format" or "0 Transactions Found" or "File rejected."

**Root Causes (in order of frequency):**
1. **User edited CSV in Excel first** (40%)  ->  Changes date format, corrupts encoding
2. **Wrong file type** (30%)  ->  Uploaded PDF summary instead of CSV detailed export
3. **Unsupported POS version** (20%)  ->  New POS software version changed column headers
4. **Actual parser bug** (10%)  ->  Our code fails on valid file

**Fix Script (Standard Tier - Email):**
```
Subject: CSV Import Troubleshooting

Hi [Name],

I see you're having trouble importing your POS file. Let's fix this!

Most common causes:
1. **Don't open CSV in Excel first** - Excel changes the date format and breaks the import. Upload the raw file directly from Moka/Pawoon.

2. **Make sure it's the "Detailed" CSV** - Not the "Summary" PDF or "Aggregated" report. You want transaction-by-transaction data.

3. **Check the file name** - Should look like: "Sales_Detailed_2025-12-25.csv" (not "Summary.pdf")

Try uploading again. If it still fails, reply to this email with the file attached and I'll check it for you personally.

Best,
[Support Rep Name]
R2a Support Team
```

**Fix Script (Premium Tier - WhatsApp):**
```
Hi [Name]!

Terlihat ada masalah upload CSV ya. (I see there's an issue uploading CSV.)

Coba ini:
1. Jangan buka file di Excel dulu (Don't open in Excel first)
2. Pastikan file CSV, bukan PDF
3. Upload langsung dari Moka/Pawoon

Kalau masih error, kirim file-nya sini, saya cek sekarang.

- [Rep Name]
```

**Escalation:** If user sends valid-looking CSV but still fails  ->  **Escalate to Engineering** (P2 - High). Attach file to Slack #r2a-bugs channel.

---

### 2. "Why Doesn't Net Profit Match My Bank Balance?" (20% of tickets)

**Symptom:** P&L shows Net Profit = Rp 10M, but Bank Account = Rp 8M. User confused/distrusts R2a.

**Root Causes:**
1. **Cash vs Accrual confusion** (50%) - P&L tracks sales (when sold), not cash (when collected)
2. **Missing expenses** (30%) - Owner took personal withdrawals but didn't log as Operating Expense
3. **Timing differences** (15%) - Credit card payouts delayed 3-7 days (MDR/fees)
4. **Multiple bank accounts** (5%) - Forgot to include secondary account

**Educational Fix Script:**
```
Subject: P&L vs Bank Balance - Here's Why They're Different

Hi [Name],

Great question! This confuses a lot of business owners at first.

**Your P&L and Bank Balance track different things:**

P&L (Profit & Loss):
- Tracks: "Did I make money?" (Sales - Expenses = Profit)
- Show: Business PERFORMANCE

Bank Balance:
- Tracks: "How much cash do I have?"
- Shows: LIQUIDITY

**Common Reasons They Don't Match:**

1. **Credit Card Delay** - You sold Rp 10M via card, but haven't received settlement yet (usually 3-7 days). P&L shows Rp 10M revenue NOW, bank will show it NEXT WEEK.

2. **Personal Withdrawals** - Did you take cash from the register for personal use? That reduces bank but isn't an expense (unless you log it as "Owner Draw").

3. **Credit Sales** - Did you sell on credit ("bayar minggu depan")? P&L shows revenue now, bank shows cash when they pay.

**Action:** Compare your P&L Expenses to your actual cash outflows. Missing anything? (rent, utilities, staff cash pay?)

Still confused? Reply with your P&L screenshot + bank screenshot and I'll help you reconcile.

Best,
[Support Rep]
```

**Indonesian Language Version (for Phase 1 Users):**
```
Subject: Laba vs Saldo Bank - Kenapa Beda?

Halo Pak/Bu [Name],

Ini pertanyaan bagus! Banyak pemilik usaha bingung soal ini.

**P&L (Laba Rugi) dan Saldo Bank itu beda:**

P&L: Itung "usaha untung atau rugi?"
Bank: Itung "uang cash ada berapa?"

**Penyebab umum beda saldo:**

1. **Delay kartu kredit/debit** - Jual via kartu tapi uangnya belum masuk (tunggu 3-7 hari)
2. **Ambil uang pribadi** - Kalau ambil cash dari kasir untuk keperluan pribadi, bank berkurang tapi itu bukan "pengeluaran usaha"
3. **Jual tempo** - Jual hari ini tapi uang masuk minggu depan

Masih bingung? Balas email ini dengan foto P&L + foto rekening koran, saya bantu cek.

Salam,
[Support Rep]
```

---

### 3. "How Do I Categorize [Obscure Expense]?" (15% of tickets)

**Symptom:** "Where do I put 'Uang Keamanan RT'?" "What category for wifi bill?" "Is parking an expense?"

**Root Cause:** We have 10 SAK EMKM standard categories. Users want 50 specific categories.

**Fix Script:**
```
Hi [Name],

Good question! Here's how to categorize "[Expense Name]":

[Custom answer based on expense]

**General Rule:** When unsure, use the CLOSEST match:

- "Uang Keamanan RT" (neighborhood security fee)  ->  **Licenses & Permits** (if official) or **Other Operating Expense** (if unofficial)
- "Wifi Bill"  ->  **Utilities** (same as electricity/water)
- "Parking Fees"  ->  **Transportation**
- "Staff Meal/Snack"  ->  **Labor Costs**
- "Donation/Charity"  ->  **Other Operating Expense**

**Important:** Keep it CONSISTENT every month. Accounting cares more about consistency than perfection.

Need help with other expenses? I' m here!

Best,
[Support Rep]
```

**Proactive Solution:** Create "Common Expense Categorization Guide" (knowledge base article) and link in every support email.

---

###4. "I Made a Mistake - Can I Edit/Delete?" (10% of tickets)

**Symptom:** "I entered Rp 500,000 but it should be Rp 50,000." "Can I delete last month's data and re-import?"

**Self-Service Fix (Point to UI):**
```
Hi [Name],

Easy fix! Here's how to edit/delete:

**Edit an Expense:**
1. Go to "Expenses" tab
2. Filter by date (e.g., "December 25")
3. Find the transaction
4. Click "Edit" icon (pencil)  ->  Update  ->  Save

**Delete an Expense:**
1. Same steps as above
2. Click "Delete" icon (trash)  ->  Confirm

**Re-Import POS Data:**
1. Go to "Revenue" tab
2. Click "Manage Imports"
3. Find the import  ->  Click "Delete Import"
4. Re-upload correct CSV

**Can't find it?** Take a screenshot of what you see and reply - I'll guide you step-by-step.

Best,
[Support Rep]
```

---

### 5. "My Accountant Wants the File" (8% of tickets)

**Symptom:** "Can I add my accountant as a user?" "How do I share my P&L with my partner?"

**Fix Script (Standard Tier):**
```
Hi [Name],

To share your P&L with your accountant or partner:

**Option 1: Email PDF/Excel (Manual)**
1. Generate P&L Report
2. Download as PDF or Excel
3. Email to accountant@example.com

**Option 2: Auto-Send (Premium tier only)**
Upgrade to Premium (Rp 100K/month) and we'll auto-email your P&L to your accountant every month on the 1st.

Settings  ->  Accountant Email  ->  Add address  ->  Done

Want to upgrade? Reply "YES" and I'll send the upgrade link.

Best,
[Support Rep]
```

**Upsell Opportunity:** 20% of Standard users who ask this question convert to Premium. Track in CRM.

---

### 6. "WhatsApp Bot Not Working" (5% of tickets)

**Symptom:** "I sent '50k gula' but nothing logged."

**Root Causes:**
1. **Wrong number** (40%) - Messaged personal WhatsApp, not bot number
2. **Incorrect format** (35%) - Sent "50 ribu gula" (bot expects "50k gula" or "50000 gula")
3. **Not connected** (20%) - Forgot to connect WhatsApp first
4. **Actual bug** (5%) - Bot parsing failed

**Fix Script:**
```
Hi [Name],

Let's get your WhatsApp bot working! Common fixes:

1. **Check the number:** Make sure you're messaging +62-XXX-XXXX (not your regular number)

2. **Format:** Send like this:
 - "50k gula" [x]
 - "50000 bahan baku" [x]
 - "50 ribu" [x] (doesn't work)

3. **Connect first:** Go to Settings  ->  WhatsApp  ->  Verify Code

Try sending "TEST" to the bot number. You should get an auto-reply "Hello!". Got it?

If still not working, send me a screenshot of your WhatsApp chat and I'll troubleshoot.

Best,
[Support Rep]
```

---

### 7-10. Less Common Issues (2-3% each)

**7. "Can I import from multiple POS?"** - Yes, upload multiple CSV files (Moka + GoBiz)
**8. "How do I change my business name?"** - Settings  ->  Business Profile  ->  Edit
**9. "Can I export for tax filing?"** - Yes, Excel export  ->  send to accountant for SPT form
**10. "Why is my COGS so high?"** - Educational moment  ->  benchmark to industry (30-35%)

---

## WhatsApp Bot NLU Scripts

**Automated Responses (No Human Needed):**

**Trigger:** User sends image of receipt
**Bot Response:**
```
Receipt received!

Format: [amount] [category]
Example: "50000 bahan baku"

Categories:
- bahan baku (ingredients)
- sewa (rent)
- listrik (utilities)
- gaji (labor)
- transport
- pemasaran (marketing)
- lainnya (other)

Reply to log this expense.
```

**Trigger:** User sends "50k bahan baku"
**Bot Response:**
```
[x] Logged!

Expense: Rp 50,000
Category: COGS (Ingredients)
Date: Dec 26, 2025

Undo? Reply "X"
View all? bit.ly/r2a-expenses

- R2a Bot
```

**Trigger:** User sends "help" or "bantuan"
**Bot Response:**
```
R2a WhatsApp Bot

Commands:
- Send amount + category: "50k listrik"
- Undo last: "X" atau "UNDO"
- See expenses: "LAPORAN"
- Human help: "SUPPORT"

Kategori: bahan, sewa, gaji, listrik, transport, pemasaran

Butuh bantuan manusia? Ketik "SUPPORT"
```

---

## Escalation Matrix

| Priority | Issue Example | Response Time | Owner | Action |
|----------|---------------|---------------|-------|--------|
| **P1 - Critical** | System down, data loss, P&L calculation wrong | <1 Hour | Engineering Lead + Product Manager | Drop everything, fix immediately, post-mortem |
| **P2 - High** | CSV import failing for major POS (Moka/Pawoon), Payment processing error | <4 Hours | Product Lead | Investigate, patch within 24h, notify affected users |
| **P3 - Normal** | Categorization question, Feature request, How-to | <24 Hours (Standard) / <4h (Premium) | Support Rep | Standard response, log for knowledge base |
| **P4 - Low** | General feedback, Enhancement ideas | <72 Hours | Product Manager (weekly review) | Log in backlog, thank user |

**Escalation Triggers:**
- **User says "cancel"**  ->  Escalate to Customer Success Manager (retention risk)
- **2nd ticket on same issue**  ->  Escalate to Product (systemic problem)
- **Angry tone**  ->  Escalate to CS Manager (empathy needed)

---

## SLA (Service Level Agreement)

**Standard Tier (Rp 75K/month):**
- **Email Response:** <24 hours (business days)
- **Resolution:** <48 hours (90% of cases)
- **Availability:** Mon-Fri, 9am-5pm WIB

**Premium Tier (Rp 100K/month):**
- **Email Response:** <12 hours (including weekends)
- **WhatsApp Response:** <4 hours (9am-9pm daily)
- **Resolution:** <24 hours (95% of cases)
- **Availability:** 7 days/week, 9am-9pm WIB

**SLA Tracking:**
| Week | Total Tickets | <24h Response % | <48h Resolution % | SLA Met % |
|------|---------------|-----------------|-------------------|-----------|
| Week 1 | | | | |

**Target:** >90% SLA compliance

---

## Monthly Support Routine

### Day 1-5 (Month-End Close Rush)

**Expected Volume:** 3Ã— normal ticket volume (users closing December books)

**Focus:**
- "Where's my P&L?" (users forgot to import December revenue)
- "How do I add missed expenses?" (discovered utilities bill after generating report)
- "Can I regenerate P&L?" (yes, delete and regenerate)

**Proactive Actions:**
- **Email Reminder (Dec 31):** "Tomorrow is Jan 1 - don't forget to close December books! Here's how..."
- **WhatsApp Broadcast (Premium):**"Tutup buku Desember hari ini! Upload POS final export sekarang."

---

### Day 10-15 (Mid-Month Engagement)

**Expected Volume:** Normal
**Focus:** "How to use" education, upsell opportunities

**Proactive Actions:**
- **Educational Email:** "Did you know? Month-over-Month comparison shows profit trends. Try it!"
- **Upsell Campaign:** Email Standard users who asked about WhatsApp bot  ->  "Upgrade to Premium for auto-logging"

---

### Day 25-30 (Pre-Close Prep)

**Expected Volume:** Low ticket volume, high proactive outreach

**Proactive Actions:**
- **Reminder Email:** "December ends in 5 days. Log any outstanding expenses now."
- **WhatsApp Nudge:** "Jangan lupa: ada pengeluaran yang belum dicatat?"

---

## Knowledge Base Structure

**Self-Service Articles (Reduce Ticket Volume):**

1. **Getting Started**
 - "How to Import from Moka POS" (VIDEO - 2 mins)
 - "How to Import from Pawoon" (VIDEO)
 - "How to Log Expenses Manually"
 - "How to Generate Your First P&L Report"

2. **Common Questions**
 - "Why P&L Doesn't Match Bank Balance" (ARTICLE - text + infographic)
 - "Expense Categorization Guide" (INTERACTIVE TABLE - searchable)
 - "How to Edit/Delete Transactions"
 - "How to Share P&L with Accountant"

3. **Troubleshooting**
 - "CSV Import Errors - Common Fixes"
 - "WhatsApp Bot Not Responding"
 - "Mobile App Issues"

**Goal:** 40% of users find answers in knowledge base before submitting ticket.

---

## Ticket Volume Projections

**Month 1 (Launch):**
- Week 1: 30 tickets (onboarding confusion)
- Week 2: 20 tickets (settling in)
- Week 3: 15 tickets
- Week 4: 25 tickets (month-end close rush)
**Total:** ~90 tickets

**Avg Response Time:** 8 hours
**Support Load:** 1 rep can handle 90 tickets/month at 1 hour/ticket = 90 hours = 2.5 weeks (sustainable with 1 part-time rep)

**Scaling Trigger:** If tickets >150/month OR SLA compliance <90%, hire 2nd support rep.

---

## Related Documents

**Product Context:**
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/R2a-pl-analytics|../]] - R2a product overview
- [[onboarding-guide|onboarding-guide.md]] - Common onboarding friction points
- [[gate-tracking|gate-tracking.md]] - Support readiness checklist

**User Journey:**
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/product-strategy/market-positioning|market-positioning.md]] - Indonesian cultural context ("Ewuh Pakewuh" - reluctance to ask)
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/product-scope|product-scope.md]] - What's included/excluded (SKU-level support boundaries)

**Strategic Context:**
- [[biz/strategy/market-analysis/04-user-personas|04-user-personas.md]] - Phase 1-2 user profiles (language preferences, tech literacy)

---

**Last Updated:** 2025-12-26
**Owner:** Customer Success Lead
**Next Review:** Post-launch support audit (Week 8 - analyze ticket trends)



