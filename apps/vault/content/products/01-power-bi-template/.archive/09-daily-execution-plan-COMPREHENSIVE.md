# Product 01 "AI-Powered" Comprehensive Execution Plan
**Objective:** Launch the Full 3-Tier Power BI Template Suite with Complete Business Infrastructure
**Strategy:** AI-Accelerated Execution. Every task detailed. Timeline determined by execution speed.

---

## PRE-WORK: WEEK -1 (Legal & Infrastructure Setup)

### **Legal Foundation (MUST COMPLETE BEFORE ANY LAUNCH)**

#### Task Block A1: Terms of Service & Legal Documents
**AI Sprint:**
- [ ] Generate Terms of Service (Indonesian law compliant)
 - Product: Power BI Template (digital download, one-time purchase)
 - Pricing: Rp 3.5M - 15M (variable by tier/modules)
 - Delivery: Digital download via Google Drive
 - Refund: 30-day money-back guarantee (with conditions)
 - Support: Email (T1), Email+Video (T2), WhatsApp+Monthly (T3)
 - Restrictions: No reselling, no reverse engineering, personal/business use only
 - Data ownership: Customer owns their data, we never access without permission
 - Governing law: Indonesian jurisdiction
 - Dispute resolution: Arbitration in [City]
- [ ] Generate Privacy Policy
 - What data we collect: Email, name, business name, payment info
 - How we use it: Product delivery, support, marketing (opt-in)
 - Data storage: Google Drive (encrypted), payment via Midtrans
 - GDPR equivalent compliance (Indonesian regulations)
 - Right to deletion, data portability
- [ ] Generate Refund Policy
 - 30-day money-back for technical issues (not "changed my mind")
 - Must complete Tier 2/3 setup call before refund eligibility
 - Refund process: Email request -> 3-day review -> 7-day processing
 - Exceptions: No refund after 30 days, no refund if violated ToS
- [ ] Generate SLA Definitions by Tier
 - Tier 1: Email support, 48-hour response time, business days only
 - Tier 2: Email + video call, 24-hour response, 1 free customization
 - Tier 3: WhatsApp priority, 4-hour response, 2 customizations/month
- [ ] Generate License Agreement
 - Single-user license vs multi-user (enterprise)
 - Installation limits (1 computer vs 3 computers)
 - Update rights (free updates for 1 year vs subscription)
 - Termination clause (if resold, license revoked)

**Human Polish:**
- [ ] Review each document for Indonesian business context
- [ ] Consult lawyer (if budget allows) or use LegalZoom equivalent
- [ ] Publish to website: `/terms`, `/privacy`, `/refund-policy`, `/sla`
- [ ] Create PDF versions for offline reference
- [ ] Version: 1.0, Effective Date: [Launch Date]

---

#### Task Block A2: Payment & Infrastructure Setup

**Midtrans Payment Gateway:**
- [ ] Sign up at midtrans.com
- [ ] Complete KYB (Know Your Business):
 - [ ] Upload NIB (business registration number)
 - [ ] Upload NPWP (tax ID)
 - [ ] Upload bank account statement (3 months)
 - [ ] Upload director/owner ID card
 - [ ] Business address verification
- [ ] Wait for approval (1-3 business days) - BLOCKER
- [ ] Receive API credentials (Server Key, Client Key)
- [ ] Create Payment Pages (Snap/Payment Link):
 - **Tier 1 Products:**
 - T1-Basic: Rp 3,500,000 (30 metrics, Base modules only)
 - T1-Standard: Rp 4,500,000 (40 metrics, Base + 1 module)
 - T1-Plus: Rp 6,000,000 (50 metrics, Base + 2 modules)
 - **Tier 2 Products:**
 - T2-Base: Rp 7,000,000 (50 metrics, Professional base)
 - T2-Complete: Rp 12,000,000 (100 metrics, all 4 Pro modules)
 - **Tier 3 Products:**
 - T3-Enterprise: Rp 10,000,000 - 15,000,000 (100-150 metrics, Strategic modules)
- [ ] Configure success URL: `https://yoursite.com/thank-you?product={tier}`
- [ ] Configure notification webhook (for auto-delivery automation later)
- [ ] Set payment methods: BCA, Mandiri, BNI, BRI, GoPay, OVO, QRIS
- [ ] Test sandbox mode: Create test payment Rp 10,000
- [ ] Verify webhook receives payment notification
- [ ] Test refund process in sandbox

**Google Drive Structure:**
- [ ] Create master folder: `Clario Products/A1-Power-BI-Template/`
- [ ] Subfolder: `01-Current-Version/`
 - [ ] `T1-Basic/` (Dashboard + Base Excel templates + Docs)
 - [ ] `T1-Standard/` (T1-Basic + 1 module addon)
 - [ ] `T1-Plus/` (T1-Basic + 2 module addons)
 - [ ] `T2-Professional/` (All professional modules)
 - [ ] `T3-Enterprise/` (All strategic modules + automation)
- [ ] Subfolder: `02-Archive/` (old versions for rollback)
- [ ] Subfolder: `03-Sample-Data/` (demo data for testing)
- [ ] Subfolder: `04-Documentation/` (PDFs, videos, guides)
- [ ] Subfolder: `05-Customer-Deliveries/` (temporary links per customer)
- [ ] Set permissions:
 - Master folder: Private (only you)
 - Customer delivery links: Anyone with link can VIEW (generate per order)
- [ ] Test incognito access: Open link without login, verify download works
- [ ] Create link shortener system (bit.ly) for tracking

**Email Infrastructure:**
- [ ] Setup professional email: sales@[yourdomain].com, support@[yourdomain].com
- [ ] Create email templates (Gmail/Outlook drafts):
 - [ ] Purchase confirmation email
 - [ ] Product delivery email (with Google Drive link)
 - [ ] Tier 2 setup call booking email
 - [ ] Tier 3 onboarding kickoff email
 - [ ] 7-day check-in email ("How's it going?")
 - [ ] 30-day NPS survey email
 - [ ] Support ticket received auto-reply
 - [ ] Support ticket resolved confirmation
- [ ] Setup email filters/labels:
 - Label: "Sales Inquiry" (auto-tag from certain keywords)
 - Label: "Support Request" (auto-tag if contains "help", "error", "bug")
 - Label: "Refund Request" (auto-tag if contains "refund", "money back")
- [ ] Configure signature with branding and links

**CRM/Tracking Setup:**
- [ ] Create tracking spreadsheet: `Gate-1A-Tracker.gsheet`
 - Columns: Date | Lead Source | Contact Name | Business | Demo Booked | Demo Completed | Tier Interested | Status | Notes
- [ ] Create sales pipeline tracker:
 - Stages: Cold Lead -> Warm Lead -> Demo Booked -> Demo Completed -> Proposal Sent -> Closed Won/Lost
- [ ] Create customer database:
 - Columns: Name | Email | Phone | Business Name | Tier Purchased | Purchase Date | License Key | Last Contact | Support Tickets | NPS Score
- [ ] Setup Google Analytics (if website exists):
 - Goal: Demo booking
 - Goal: Purchase completed
 - Event tracking: Video plays, PDF downloads

---

## WEEK 0: PRE-SALE VALIDATION (CRITICAL - DO NOT SKIP)

### **Phase 1: Validation Asset Creation (Day 1-2)**

#### Task Block V1: One-Pager for Validation

**AI Sprint:**
- [ ] Adapt `marketing/03-one-pager.md` for pre-sale validation:
 - [ ] Add banner: "EARLY ACCESS - First 5 Customers Only"
 - [ ] Update pricing to early access discount:
 - T1-Basic: Rp 3.5M -> **Rp 2.5M** (29% off)
 - T2-Professional: Rp 7M -> **Rp 5M** (29% off)
 - T3-Enterprise: Rp 10M -> **Rp 7.5M** (25% off)
 - [ ] Add delivery timeline: "Ready in 3-4 weeks from commitment"
 - [ ] Add commitment terms: "50% deposit now, 50% upon delivery"
 - [ ] Add scarcity: "Limited to 5 early customers (slots remaining: 5)"
 - [ ] Add risk reversal: "Full refund if not delivered within 4 weeks"
- [ ] Create "Sample Dashboard" mockup images:
 - [ ] Screenshot 1: Command Center (revenue overview, health score)
 - [ ] Screenshot 2: Wolf Pack (staff leaderboard)
 - [ ] Screenshot 3: Loyalty Loop (customer patronage ladder)
 - [ ] Label clearly: "[MOCKUP - Your Dashboard Will Look Similar]"
 - [ ] Use realistic Indonesian F&B data (Kopi, Nasi Goreng, etc.)
- [ ] Generate PDF version optimized for WhatsApp sharing:
 - [ ] File size < 2MB (compress images)
 - [ ] Mobile-friendly layout (readable on phone)
 - [ ] Clickable CTA button linking to calendar/WhatsApp

**Human Polish:**
- [ ] Review mockups: Do they look professional? Trustworthy?
- [ ] Test PDF on phone: Is text readable? Images clear?
- [ ] Get feedback from 1-2 friends: "Would you buy based on this?"

---

#### Task Block V2: Validation Conversation Assets

**AI Sprint:**
- [ ] Generate WhatsApp message templates:
 - **Template 1: Warm Network** (for friends/contacts)
 ```
 Hi [Name]!

 Quick question: Berapa lama waktu yang kamu spend setiap minggu untuk analisa data penjualan/laporan bisnis?

 Aku lagi develop Power BI dashboard khusus untuk F&B (kayak [their business type]). 75 metrics otomatis, integrated dengan POS kamu.

 Ini mockup-nya: [attach PDF]

 Worth Rp 2.5M? Atau too much?

 Kalau ini ready dalam 3-4 minggu, would you commit dengan Rp 1.25M deposit sekarang, sisanya Rp 1.25M pas delivery?

 Butuh honest feedback!
 ```
 - **Template 2: LinkedIn Connection**
 - **Template 3: Facebook Group Post**
 - **Template 4: Follow-up (2 days later)**
 - **Template 5: Objection handling ("Too expensive")**
 - **Template 6: Objection handling ("Need to see demo first")**

- [ ] Generate validation conversation scripts (from sales playbook):
 - **Script A: Discovery Questions**
 1. "How do you currently track your business performance?"
 2. "What takes the most time in that process?"
 3. "What's your biggest frustration with your current system?"
 4. "Which POS do you use?" (confirm compatibility)
 5. "How many hours per week do you spend on manual reporting?"

 - **Script B: The Pitch**
 ```
 "I'm building exactly that solution - Power BI dashboard dengan 30-150 metrics (modular).

 [Show mockup screenshots]

 The key differentiator: Pre-formatted Excel templates. You don't spend 8 hours figuring out CSV format like other templates.

 3 tiers:
 - Essentials (DIY): Rp 2.5M early bird (normally Rp 3.5M)
 - Professional (We help): Rp 5M early bird (normally Rp 7M)
 - Enterprise (Managed): Rp 7.5M early bird (normally Rp 10M)

 Ready in 3-4 weeks. 50% deposit sekarang, 50% pas delivery.

 Would you commit?"
 ```

 - **Script C: Objection Handling Library**
 | Objection | Response |
 |-----------|----------|
 | "Rp 2.5M is too expensive" | "Fair. Your current process costs berapa? If your manager spends 4 hours/week @ Rp 50K/hour, that's Rp 800K/month = Rp 9.6M/year. This pays for itself in 3 months." |
 | "I don't trust it'll work" | "That's why 50% deposit only. If I don't deliver in 4 weeks, full refund. Plus weekly progress screenshots." |
 | "Can I see a demo first?" | "That's the thing - it doesn't exist yet! That's why early access is Rp 2.5M instead of Rp 3.5M. You're co-creating it. But here's exactly what you'll get [show mockups + feature list]." |
 | "Let me think about it" | "Absolutely. Just FYI, I'm only taking 5 early customers. Currently 2 slots left. Can I follow up in 2 days?" |
 | "I need to discuss with partner" | "Makes sense. Want me to join a quick call with both of you? 15 minutes to walk through mockups?" |
 | "What if my POS format changes?" | "T1: Email support to update. T2: 1 free update included. T3: Maintenance covers all changes." |

- [ ] Generate tracking scorecard (Google Sheet):
 - Columns: Date | Name | Business | Channel | Status | Interest Level (1-5) | Verbal Commit? | Deposit? | Amount | Notes
 - Formula: Auto-calculate conversion rate (Commits / Conversations)
 - Conditional formatting: Green if interest ≥4, Red if ≤2

**Human Polish:**
- [ ] Practice scripts out loud (role-play)
- [ ] Record yourself on video (check tone, confidence)
- [ ] Refine language to sound natural, not scripted
- [ ] Save all templates in easy-access note app (phone)

---

#### Task Block V3: Optional Landing Page (If Time Allows)

**AI Sprint:**
- [ ] Choose platform: Carrd.co (paid $19/year) or Google Sites (free)
- [ ] Generate copy for 5 sections:
 1. **Hero:** "Stop Wasting 4 Hours/Week on Excel. Get Your F&B Dashboard in 30 Minutes."
 2. **Problem:** Data chaos, manual reports, no actionable insights
 3. **Solution:** 30-150 modular metrics, Excel templates included, POS-integrated
 4. **Social Proof:** "Built for Indonesian F&B" + your credentials
 5. **Pricing & CTA:** Early access Rp 2.5M -> "Reserve Your Spot (Rp 1.25M Deposit)"
- [ ] Design in Carrd/Google Sites:
 - [ ] Upload mockup screenshots (3-5 images)
 - [ ] Embed video (if tutorial video exists)
 - [ ] Add CTA button -> Links to WhatsApp or Google Form
 - [ ] Mobile optimization (70% traffic from phone in Indonesia)
- [ ] Setup form for waitlist:
 - Fields: Name, Email, Phone, Business Name, POS Used, Interested Tier
 - Auto-response email: "Thanks for interest! I'll reach out in 24h"

**Human Polish:**
- [ ] Test on mobile (Android + iOS)
- [ ] Check load speed (< 3 seconds)
- [ ] Proofread all Indonesian text (typos destroy trust)
- [ ] Get 1 friend to fill form (test end-to-end)

---

### **Phase 2: Validation Outreach (Day 3-7)**

#### Task Block V4: Warm Network Activation

**Target:** 15-20 validation conversations

**AI Sprint:**
- [ ] Generate target contact list (from your network):
 - [ ] Category A: F&B owners you know personally (10 people)
 - [ ] Category B: LinkedIn connections in F&B (15 people)
 - [ ] Category C: Facebook group members you've interacted with (10 people)
 - [ ] Category D: WhatsApp contacts (restaurant managers, café owners) (10 people)
 - [ ] Total pool: 45 people -> Target reach: 20

- [ ] Create outreach sequence:
 - **Day 3 Monday:** Send to 5 Category A (closest contacts)
 - **Day 4 Tuesday:** Send to 5 Category A + 3 Category B
 - **Day 5 Wednesday:** Send to 5 Category B + 5 Category C
 - **Day 6 Thursday:** Send to 5 Category D
 - **Day 7 Friday:** Follow-up with non-responders from Mon-Tue

**Human Execution:**
- [ ] Monday morning: Send first 5 WhatsApp messages
 - [ ] Wait 2-3 hours between messages (not spam-like)
 - [ ] Personalize each message (mention their business specifically)
 - [ ] Attach one-pager PDF
- [ ] Track responses in scorecard immediately
 - [ ] Response time (< 1 hour = very interested, > 24h = lukewarm)
 - [ ] Sentiment (positive/neutral/negative)
 - [ ] Questions asked (more questions = higher interest)
- [ ] Book follow-up calls:
 - [ ] If interested: "Great! Can we jump on quick call? 15 min tomorrow?"
 - [ ] Use Calendly or manual scheduling
 - [ ] Confirm 2 hours before call (WhatsApp reminder)

---

#### Task Block V5: Validation Calls Execution

**Per Call (15-30 minutes each):**

**Preparation (5 min before call):**
- [ ] Review their business (Google search, Instagram)
- [ ] Prepare personalized opening: "I saw your [specific menu item/promo] on IG"
- [ ] Have mockup PDF open and screen-share ready

**Call Structure:**
1. **Opening (2 min):**
 - [ ] Thank them for time
 - [ ] Explain purpose: "I'm validating demand before building, need honest feedback"
 - [ ] Set expectation: "15 minutes, no sales pressure"

2. **Discovery (5 min):** Use Script A questions
 - [ ] Listen 80%, talk 20%
 - [ ] Take notes on pain points
 - [ ] Identify which tier fits them (DIY personality = T1, needs hand-holding = T2, wants partner = T3)

3. **Presentation (5 min):** Show mockups
 - [ ] Screen share PDF
 - [ ] Walk through 3 tabs: Command Center, Wolf Pack, Loyalty Loop
 - [ ] Highlight Excel templates: "This is key - you don't spend 8 hours on CSV format"
 - [ ] Mention their POS by name: "Works with [their POS]"

4. **The Ask (3 min):**
 - [ ] "Based on what you're dealing with, I'd recommend [Tier X]"
 - [ ] "Normal price Rp [X]M, but early access Rp [Y]M"
 - [ ] "Would you commit with Rp [Z]M deposit now, rest upon delivery in 3-4 weeks?"

5. **Objection Handling (3 min):** Use Script C
 - [ ] Listen to objection fully (don't interrupt)
 - [ ] Acknowledge: "I understand that concern..."
 - [ ] Address with prepared response
 - [ ] Ask again: "Given [response], does that work?"

6. **Close (2 min):**
 - **If YES (Verbal Commit):**
 - [ ] "Awesome! I'll send payment link in 2 hours"
 - [ ] "Any questions before I send?"
 - [ ] Mark in tracker: VERBAL COMMIT

 - **If MAYBE:**
 - [ ] "What would make this a definite yes?"
 - [ ] "Can I check back in 2 days?"
 - [ ] Mark in tracker: WARM LEAD

 - **If NO:**
 - [ ] "No problem, can I ask why it's not a fit?"
 - [ ] "Just for my learning - is it price, timing, or the product itself?"
 - [ ] Mark in tracker: NOT A FIT + reason

**Post-Call (5 min):**
- [ ] Update tracking scorecard immediately
- [ ] Send follow-up WhatsApp:
 - If commit: Payment link + invoice
 - If maybe: "Thanks for time, checking back Thu"
 - If no: "Thanks for honest feedback!"
- [ ] Log qualitative insights:
 - Which features resonated most?
 - Which objections came up?
 - Pricing reaction (too high/fair/cheap)?

---

#### Task Block V6: Cold Outreach (If Warm Network < 15 Conversations)

**LinkedIn Strategy:**
- [ ] Search: "restaurant owner jakarta", "café owner indonesia", "fnb manager"
- [ ] Filter: 2nd/3rd connections, Indonesia location
- [ ] Send 10 connection requests/day (LinkedIn limit):
 - Note: "Fellow F&B entrepreneur, would love to connect and share insights"
- [ ] After connection accepted (24-48h later):
 - Send validation message (softer than warm network)
 - "Hi [Name], I noticed you manage [Business]. I'm building analytics dashboard for F&B. Would you be open to 10-min feedback call? I'll share early access pricing in return."

**Facebook Groups Strategy:**
- [ ] Join groups:
 - "Pengusaha Kuliner Indonesia"
 - "F&B Business Indonesia"
 - "Restaurant Owners Jakarta"
 - "Komunitas Café Indonesia"
- [ ] Engage first (don't spam):
 - [ ] Comment on 3-5 posts (helpful, not promotional)
 - [ ] Answer questions (establish credibility)
- [ ] Post after 2-3 days:
 ```
 "Halo teman-teman F&B!

 Saya lagi develop Power BI dashboard khusus untuk F&B Indonesia.

 Looking for 3-5 early testers untuk validasi fitur. Benefits:
 Early access discount (50% off)
 Influence product roadmap
 Lifetime free updates

 DM me if interested! First 5 only."
 ```

**Instagram DM Strategy:**
- [ ] Identify target accounts:
 - 500-5K followers (serious business, not hobbyist)
 - Regular posts (active owner)
 - F&B type matches (café, restaurant, not street food)
- [ ] Send DM:
 ```
 "Hi! Love your concept, especially [specific item].

 Quick question: Are you tracking your data systematically? (sales, costs, staff performance)

 I'm building a dashboard specifically for F&B like yours. Would you be open to quick chat? I'll share early access."
 ```

---

### **Phase 3: Decision Gate (Day 8-10)**

#### Task Block V7: Validation Results Analysis

**Quantitative Review:**
- [ ] Calculate metrics from tracking scorecard:
 - [ ] Total conversations: ____ / 15 (target)
 - [ ] Response rate: ____% (responses / outreach messages)
 - [ ] Interest rate: ____% ("I'd consider this" or better)
 - [ ] Verbal commit rate: ____% (said "yes")
 - [ ] Deposit commit rate: ____% (paid 50%)
 - [ ] Average interest score: ____ / 5
 - [ ] Conversion funnel:
 ```
 50 messages -> 20 responses (40%) -> 15 conversations (75% show rate) -> 5 interested (33%) -> 3 verbal commits (60%) -> 2 deposits (67%)
 ```

**Qualitative Review:**
- [ ] Analyze feedback themes (group similar comments):
 - **Positive signals:**
 - "This solves my exact problem"
 - "How soon can I get this?"
 - "Can I get discount for multiple outlets?"
 - **Concerns/Objections (by frequency):**
 - Price too high: ___ mentions
 - Don't know Power BI: ___ mentions
 - Too technical: ___ mentions
 - Need to see working demo: ___ mentions
 - Wrong timing (year-end budget): ___ mentions
 - **Feature requests:**
 - Multi-outlet support: ___ mentions
 - Ingredient cost tracking: ___ mentions
 - Staff scheduling: ___ mentions
 - Mobile app: ___ mentions

- [ ] Identify patterns by tier:
 - T1 (DIY): Did they understand "self-setup"? Or expect hand-holding?
 - T2 (Professional): Did 2-3 hour setup call resonate?
 - T3 (Enterprise): Did they want ongoing support or one-time?

- [ ] Note competitive intel:
 - "I tried [X template] before and it failed because..." Gold insight
 - "I currently use [Y tool] but it doesn't..." Differentiation opportunity

**Decision Matrix:**

| Outcome | Criteria | Action |
|---------|----------|--------|
| **STRONG VALIDATION** | 3+ verbal commits OR 2+ deposits OR 10+ waitlist | -> Proceed to build |
| **MODERATE VALIDATION** | 2 verbal commits OR 5-9 waitlist OR very positive feedback | -> Extend 1 week OR adjust pricing and retry |
| **WEAK VALIDATION** | 0-1 commits AND <5 waitlist AND lukewarm feedback | -> Pivot or pause |

---

#### Task Block V8: Go/No-Go Decision Documentation

**If PROCEEDING ():**
- [ ] Document decision rationale:
 ```
 VALIDATION PASSED - Jan 10, 2026

 Results:
 - Verbal commits: 3 (Target: 3+)
 - Deposits collected: 2 @ Rp 2.5M = Rp 5M
 - Waitlist: 12 signups

 Key insights:
 - Excel templates resonated strongly (8/15 mentioned as key differentiator)
 - Tier 2 most popular (60% interested in setup assistance)
 - Price objections minimal when ROI explained
 - Multi-outlet need confirmed (40% have 2+ locations)

 Decision: BUILD T1-Basic first (Base modules), then iterate.

 Committed customers:
 1. [Name, Business, Tier, Deposit Amount, Expected Delivery]
 2. ...
 ```

- [ ] Email committed customers:
 ```
 Subject: Development Starts Monday! Hi [Name],

 Terima kasih for committing to early access!

 Validation succeeded - starting build next week.

 Timeline:
 - Week 1: Core metrics framework (I'll send progress screenshot)
 - Week 2: Excel templates + POS integration (you test with your data)
 - Week 3: Visual refinement (you review, give feedback)
 - Week 4: Delivery + training session

 Your input shapes the product. Any must-have features? Reply to this email.

 Questions? WhatsApp me anytime.

 [Your Name]
 ```

- [ ] Update product roadmap based on feedback:
 - [ ] Prioritize most-requested features
 - [ ] Adjust tier definitions if needed
 - [ ] Note custom requests for Tier 3 scope

**If PAUSING/PIVOTING ():**
- [ ] Document why validation failed:
 ```
 VALIDATION FAILED - Jan 10, 2026

 Results:
 - Conversations: 15
 - Verbal commits: 1 (Target: 3+)
 - Deposits: 0
 - Waitlist: 4

 Root cause analysis:
 - Price too high for market (70% objection rate)
 - "Need to see working product first" (can't pre-sell vapor)
 - Wrong audience (solopreneurs, not SMEs with 5+ staff)
 - Timing issue (year-end, budgets frozen)

 Pivot options:
 1. Lower price: T1-Basic Rp 2.5M -> Rp 1.5M
 2. Build T1-Basic first, THEN sell (reverse strategy)
 3. Offer 1 free pilot customer (deep learning)
 4. Target different segment (Phase 3 chains, not Phase 2 SMEs)
 5. Delay to Q1 2025 (better F&B cash flow)

 Next step: Deep customer interviews (call all 15, understand objections)
 ```

- [ ] Email waitlist:
 ```
 Hi [Name],

 Quick update: After 15 validation calls, I learned [key insight].

 I'm adjusting the product to [change].

 Still interested when ready? Or would you prefer removal from waitlist?

 Appreciate your early support!
 ```

- [ ] Refund deposits (if any collected):
 - [ ] Process via Midtrans
 - [ ] Send apology + explanation
 - [ ] Offer discount if/when relaunched

**If EXTENDING ():**
- [ ] Define what changes:
 - [ ] New price point to test: Rp 2.5M -> Rp 1.5M?
 - [ ] New messaging angle: Focus on Excel templates more?
 - [ ] New audience: Try restaurant chains instead of independent cafés?
- [ ] Create urgency:
 ```
 WhatsApp blast:
 "Starting build MONDAY. Last chance for Rp 2.5M early access (going to Rp 3.5M after).

 Current slots: 3/5 filled. Reply 'IN' to reserve."
 ```
- [ ] Extend deadline: 5 more days of outreach
- [ ] Re-evaluate: Friday of extended week

---

## WEEK 1: FOUNDATION BUILD (T1-Basic: 30 Metrics)

**Prerequisites Met:**
- Legal docs published
- Payment gateway active
- Google Drive structure ready
- Validation passed (3+ commits)
- Customer deposits collected

**Build Philosophy:** Build ONLY T1-Basic (Base modules: B1, B2, B3 = 30 metrics). Do NOT build T2/T3 features yet. Modular approach allows later expansion.

---

### **Day 1: Data Foundation & Schema**

#### Task Block D1: Project Initialization

**AI Sprint:**
- [ ] Initialize Git repository:
 ```bash
 git init
 git branch -M main
 git checkout -b dev
 ```
- [ ] Create folder structure:
 ```
 01-Power-BI-Template/
 Templates/
 Excel/
 Daily-Sales.xlsx
 Product-Master.xlsx
 Staff-Roster.xlsx
 Food-Cost.xlsx
 Google-Sheets/
 [Same files as Excel]
 Power-BI/
 FNB-Dashboard-T1-Basic.pbix
 Sample-Data/
 Sales.csv
 Products.csv
 Staff.csv
 README.txt
 Documentation/
 Setup-Guide.pdf
 Metric-Glossary.pdf
 Troubleshooting-FAQ.pdf
 Scripts/
 generate_templates.py
 simulate_data.py
 config.json
 README.md
 ```

- [ ] Create `config.json` for path management:
 ```json
 {
 "version": "1.0.0",
 "tier": "T1-Basic",
 "base_path": "C:/Users/.../01-Power-BI-Template/",
 "data_sources": {
 "sales": "./Sample-Data/Sales.csv",
 "products": "./Sample-Data/Products.csv",
 "staff": "./Sample-Data/Staff.csv"
 },
 "modules": {
 "B1": "Revenue Core (10 metrics)",
 "B2": "Menu Essentials (10 metrics)",
 "B3": "Staff & Customer Basics (10 metrics)"
 }
 }
 ```

- [ ] Create `.gitignore`:
 ```
 *.pbix~
 *.tmp
 Sample-Data/*.csv
 *.pyc
 __pycache__/
 .env
 ```

- [ ] Setup Python virtual environment:
 ```bash
 python -m venv venv
 source venv/bin/activate # Windows: venv\Scripts\activate
 pip install pandas openpyxl numpy faker
 ```

**Human Polish:**
- [ ] Verify all folders created
- [ ] Test Git commits work
- [ ] Verify Python imports work (`import pandas as pd`)

---

#### Task Block D2: Schema Documentation

**AI Sprint: Generate Data Schema Docs**

Create `07-database-schema.md`:

```markdown
# T1-Basic Data Schema (30 Metrics)

## Table 1: FACT_Sales
**Purpose:** Transactional sales data (daily entries)

| Column | Type | Description | Required | Example |
|--------|------|-------------|----------|---------|
| TransactionID | Text | Unique transaction identifier | Yes | TRX-20260105-001 |
| Date | Date | Transaction date | Yes | 2026-01-05 |
| Time | Time | Transaction time | Yes | 14:30:00 |
| ProductID | Text | Links to DIM_Products | Yes | PROD-001 |
| ProductName | Text | Item name | Yes | Kopi Susu |
| CategoryID | Text | Food/Beverage/Dessert | Yes | BEV |
| Quantity | Integer | Units sold | Yes | 2 |
| UnitPrice | Currency | Price per unit (Rp) | Yes | 15000 |
| TotalAmount | Currency | Quantity × UnitPrice | Auto-calc | 30000 |
| StaffID | Text | Links to DIM_Staff | Yes | STAFF-001 |
| StaffName | Text | Server name | Yes | Budi |
| PaymentMethod | Text | Cash/GoPay/OVO/QRIS/Card | Yes | GoPay |

**Validation Rules:**
- Date: Cannot be future date
- Quantity: Must be > 0
- UnitPrice: Must be ≥ 0
- TotalAmount: Must match Quantity × UnitPrice

---

## Table 2: DIM_Products
**Purpose:** Product master data (static reference)

| Column | Type | Description | Required | Example |
|--------|------|-------------|----------|---------|
| ProductID | Text | Primary key | Yes | PROD-001 |
| ProductName | Text | Menu item name | Yes | Kopi Susu |
| CategoryID | Text | Food/Beverage/Dessert | Yes | BEV |
| CategoryName | Text | Category description | Yes | Beverage |
| CostPrice | Currency | Cost to make (Rp) | Yes | 5000 |
| SellPrice | Currency | Menu price (Rp) | Yes | 15000 |
| IsActive | Boolean | Currently on menu? | Yes | TRUE |

**Business Rules:**
- SellPrice should be > CostPrice (warn if not)
- Target food cost: 28-32%, beverage: 20-25%

---

## Table 3: DIM_Staff
**Purpose:** Staff master data

| Column | Type | Description | Required | Example |
|--------|------|-------------|----------|---------|
| StaffID | Text | Primary key | Yes | STAFF-001 |
| StaffName | Text | Employee name | Yes | Budi |
| Role | Text | Cashier/Waitress/Cook/Manager | Yes | Cashier |
| HourlyRate | Currency | Pay rate (Rp/hour) | Yes | 15000 |
| HireDate | Date | Start date | Optional | 2025-10-01 |
| IsActive | Boolean | Currently employed? | Yes | TRUE |

---

## Table 4: DIM_Date (Auto-generated in Power BI)
**Purpose:** Calendar table for time intelligence

| Column | Type | Description | Auto-Generated |
|--------|------|-------------|----------------|
| Date | Date | Each date from 2024-01-01 to 2026-12-31 | Yes |
| Year | Integer | 2024, 2025, 2026 | Yes |
| Quarter | Integer | 1, 2, 3, 4 | Yes |
| Month | Integer | 1-12 | Yes |
| MonthName | Text | January, February, ... | Yes |
| DayOfWeek | Integer | 1=Monday, 7=Sunday | Yes |
| DayName | Text | Monday, Tuesday, ... | Yes |
| IsWeekend | Boolean | Saturday/Sunday = TRUE | Yes |
| WeekOfYear | Integer | 1-52 | Yes |

---

## Relationships
1. FACT_Sales[ProductID] -> DIM_Products[ProductID] (Many-to-One)
2. FACT_Sales[StaffID] -> DIM_Staff[StaffID] (Many-to-One)
3. FACT_Sales[Date] -> DIM_Date[Date] (Many-to-One)

**Cardinality:** All relationships are *:1 (many-to-one)
**Cross-filter direction:** Single (from fact to dimension)
```

**Human Polish:**
- [ ] Review schema for Indonesian F&B context (realistic products)
- [ ] Verify validation rules match business logic
- [ ] Check for missing critical fields

---

#### Task Block D3: Excel Template Generation (T1-Basic)

**Focus:** Create the 4 core Excel templates that differentiate our product.

---

##### **Template 1: Daily-Sales.xlsx** (2-3 hours)

**AI Sprint: Generate Template Structure**

**Sheet 1: Instructions**
```
HOW TO USE THIS TEMPLATE

1. DAILY ENTRY:
 - Open this file every morning
 - Go to "Sales Entry" tab
 - Fill in yesterday's transactions

2. DATA ENTRY RULES:
 DO: Use dropdowns for Product, Staff, Payment Method
 DO: Enter Date as DD/MM/YYYY
 DON'T: Type product names manually (use dropdown)
 DON'T: Delete the header row

3. POWER BI IMPORT:
 - Save this file daily
 - In Power BI, click "Refresh"
 - Dashboard updates automatically

4. SUPPORT:
 - Email: support@[domain].com
 - WhatsApp: +62-XXX (T2/T3 only)
```

**Sheet 2: Sales Entry** (Main data entry table)

| Column | Type | Validation | Formula |
|--------|------|------------|---------|
| A: TransactionID | Auto | - | `="TRX-"&TEXT(B2,"YYYYMMDD")&"-"&TEXT(ROW()-1,"000")` |
| B: Date | Date | Must be ≤ TODAY() | User input |
| C: Time | Time | Must be valid time | User input |
| D: Product | Dropdown | From Product_List | User selects |
| E: Category | Auto | - | `=VLOOKUP(D2,Product_Master!A:B,2,0)` |
| F: Quantity | Integer | Must be > 0 | User input |
| G: Unit Price | Auto | - | `=VLOOKUP(D2,Product_Master!A:C,3,0)` |
| H: Total | Auto | - | `=F2*G2` |
| I: Staff | Dropdown | From Staff_List | User selects |
| J: Payment Method | Dropdown | Cash/GoPay/OVO/QRIS/BCA/Mandiri/BRI/BNI | User selects |

**Conditional Formatting:**
- Row turns light green when all required fields filled
- Highlight if Quantity > 10 (unusual, check for typo)
- Highlight if Total > Rp 100,000 (VIP transaction)

**Data Validation Setup:**
- D (Product): List source = `Product_List!$A$2:$A$100`
- I (Staff): List source = `Staff_List!$A$2:$A$20`
- J (Payment): List = `Cash,GoPay,OVO,QRIS,Debit Card,Credit Card`
- B (Date): Date, ≤ TODAY(), custom error: "Tanggal tidak boleh masa depan"
- F (Quantity): Integer, > 0, custom error: "Quantity harus lebih dari 0"

**Sheet 3: Product_Master** (Reference data)

Create 30-50 sample Indonesian F&B products:

| ProductID | ProductName | Category | CostPrice | SellPrice | FoodCost% |
|-----------|-------------|----------|-----------|-----------|-----------|
| PROD-001 | Kopi Susu | Beverage | 5000 | 15000 | 33% |
| PROD-002 | Kopi Hitam | Beverage | 3000 | 12000 | 25% |
| PROD-003 | Es Teh | Beverage | 2000 | 8000 | 25% |
| PROD-004 | Jus Alpukat | Beverage | 8000 | 20000 | 40% |
| PROD-005 | Nasi Goreng | Food | 10000 | 25000 | 40% |
| PROD-006 | Mie Ayam | Food | 8000 | 22000 | 36% |
| PROD-007 | Ayam Geprek | Food | 12000 | 30000 | 40% |
| ... | ... | ... | ... | ... | ... |

**Sheet 4: Staff_List** (Reference data)

| StaffID | StaffName | Role | HourlyRate |
|---------|-----------|------|------------|
| STAFF-001 | Budi | Cashier | 15000 |
| STAFF-002 | Rina | Waitress | 12000 |
| STAFF-003 | Siti | Waitress | 12000 |
| STAFF-004 | Andi | Cook | 18000 |
| STAFF-005 | Dewi | Waitress | 12000 |

**Sheet 5: Dashboard** (Quick stats for user)

Summary cards:
- Today's Revenue: `=SUMIFS(Sales!H:H,Sales!B:B,TODAY())`
- This Week Revenue: `=SUMIFS(Sales!H:H,Sales!B:B,">="&TODAY()-WEEKDAY(TODAY())+1)`
- This Month Revenue: `=SUMIFS(Sales!H:H,Sales!B:B,">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1))`
- Top Product: `=INDEX(Product_Master!B:B,MATCH(MAX(...),...))`

**Human Polish:**
- [ ] Fill 1 week of sample data (50-100 transactions)
- [ ] Test all dropdowns work
- [ ] Test formulas calculate correctly
- [ ] Check date validation (try entering future date -> should error)
- [ ] Test on mobile Excel app (if Tier 2/3 customers use mobile)
- [ ] File size check (should be < 1MB)
- [ ] Save as `Daily-Sales-Template.xlsx`

---

##### **Template 2: Food-Cost-Calculator.xlsx** (1-2 hours)

**Purpose:** Recipe costing with traffic light alerts

**Sheet 1: Recipe Cards**

Example: Nasi Goreng recipe

| A: Ingredient | B: Qty | C: Unit | D: Cost/Unit | E: Extended Cost | F: Notes |
|---------------|--------|---------|--------------|------------------|----------|
| Nasi Putih | 200 | gram | 15 | 3000 | |
| Telur | 1 | pcs | 2000 | 2000 | |
| Ayam | 50 | gram | 40 | 2000 | |
| Kecap | 20 | ml | 30 | 600 | |
| Bawang Merah | 10 | gram | 20 | 200 | |
| Minyak | 15 | ml | 20 | 300 | |
| **TOTAL COST** | | | | **8100** | |
| **SELL PRICE** | | | | **25000** | |
| **FOOD COST %** | | | | **32%** | Yellow |

**Formulas:**
- E (Extended Cost): `=B2*D2`
- Total: `=SUM(E2:E10)`
- Food Cost %: `=Total_Cost/Sell_Price`

**Conditional Formatting (Traffic Lights):**
- Green: Food Cost < 30%
- Yellow: Food Cost 30-35%
- Red: Food Cost > 35%

**Auto-calculation:**
- Suggested Sell Price: `=Total_Cost*3.33` (assumes target 30% food cost)

**Create 10 sample recipes:**
1. Nasi Goreng
2. Mie Ayam
3. Ayam Geprek
4. Kopi Susu
5. Es Teh
6. Jus Alpukat
7. Pisang Goreng
8. French Fries
9. Spaghetti Aglio Olio
10. Nasi Uduk

**Sheet 2: Ingredient Price List**

| Ingredient | Unit | Cost/Unit | Supplier | Last Updated |
|------------|------|-----------|----------|--------------|
| Nasi Putih | kg | 15000 | Pasar | 2026-01-01 |
| Telur | pcs | 2000 | Pasar | 2026-01-01 |
| Ayam | kg | 40000 | Supplier A | 2026-01-01 |

**Human Polish:**
- [ ] Verify realistic Indonesian ingredient prices
- [ ] Test traffic lights change color (adjust cost -> see color change)
- [ ] Add 5 more recipes (total 10-15)
- [ ] Save as `Food-Cost-Calculator.xlsx`

---

##### **Template 3: Staff-Performance-Log.xlsx** (1-2 hours)

**Purpose:** Track staff hours, sales, and gamification tiers

**Sheet 1: Timesheet**

| A: Date | B: Staff | C: Clock In | D: Clock Out | E: Hours | F: Sales This Shift | G: Rp/Hour | H: Tier |
|---------|----------|-------------|--------------|----------|---------------------|------------|---------|
| 2026-01-05 | Budi | 08:00 | 16:00 | 8 | 800000 | 100000 | Gold |
| 2026-01-05 | Rina | 08:00 | 16:00 | 8 | 400000 | 50000 | Silver |

**Formulas:**
- E (Hours): `=(D2-C2)*24`
- G (Rp/Hour): `=F2/E2`
- H (Tier):
 ```
 =IF(G2>=50000,"Gold",IF(G2>=30000," Silver"," Bronze"))
 ```

**Sheet 2: Leaderboard** (Auto-generated)

| Rank | Staff | Total Sales | Total Hours | Avg Rp/Hour | Tier |
|------|-------|-------------|-------------|-------------|------|
| 1 | Budi | 15000000 | 160 | 93750 | Gold |
| 2 | Rina | 10000000 | 160 | 62500 | Silver |

**Formula:**
- Rank: `=RANK(D2,$D$2:$D$10,0)`
- Auto-sort by Avg Rp/Hour descending

**Conditional Formatting:**
- Top 3 highlighted (Gold, Silver, Bronze backgrounds)

**Human Polish:**
- [ ] Fill 2 weeks of timesheet data
- [ ] Verify leaderboard auto-sorts
- [ ] Test tier calculation (change Rp/Hour -> tier changes)
- [ ] Save as `Staff-Performance-Log.xlsx`

---

##### **Template 4: Outlet-Summary.xlsx** (T2 prep, create stub for T1)

**Purpose:** Multi-outlet consolidation (full version in T2)

**T1-Basic version:** Single outlet only, but structure ready for expansion

**Sheet 1: Outlet A**
- Copy of Sales Entry structure from Daily-Sales.xlsx
- Note: "For multi-outlet tracking, upgrade to Tier 2"

**Sheet 2: Summary**
- Shows totals for Outlet A only
- Placeholder for "Outlet B" and "Outlet C" (locked, says "Unlock in Tier 2")

**Human Polish:**
- [ ] Keep simple for T1 (1 outlet only)
- [ ] Add clear upsell message: "Need multi-outlet? Upgrade to Tier 2"
- [ ] Save as `Outlet-Summary.xlsx`

---

### **AI Sprint Recap for Excel Templates:**

Prompt for AI to generate all 4 templates:
```
Create Excel templates for Indonesian F&B business with these specs:

1. Daily-Sales.xlsx:
 - Columns: TransactionID (auto), Date, Time, Product (dropdown from 30 Indonesian F&B items), Category (auto-lookup), Quantity, UnitPrice (auto-lookup), Total (auto-calc), Staff (dropdown), PaymentMethod (dropdown)
 - Data validation: Date ≤ today, Quantity > 0
 - Conditional formatting: Green when row complete, yellow if Quantity > 10, red if Total > 100k
 - Sample products: Kopi Susu, Nasi Goreng, Mie Ayam, Es Teh, Ayam Geprek, etc. (30 items)
 - Sample staff: Budi, Rina, Siti, Andi, Dewi (5 staff)

2. Food-Cost-Calculator.xlsx:
 - Recipe cards for 10 dishes
 - Traffic light: Green <30%, Yellow 30-35%, Red >35%
 - Auto-suggest sell price (cost × 3.33)

3. Staff-Performance-Log.xlsx:
 - Timesheet: Date, Staff, Clock In/Out, Hours (auto), Sales, Rp/Hour (auto), Tier (auto: Gold ≥50K, Silver 30-50K, Bronze <30K)
 - Leaderboard: Auto-rank by Rp/Hour

4. Outlet-Summary.xlsx:
 - T1 version: 1 outlet only
 - Upsell message for T2 multi-outlet

Output: 4 .xlsx files with formulas, validation, formatting.
```

---

### **Day 1 Completion Checklist:**

**End of Day 1:**
- [ ] Git repo initialized
- [ ] Folder structure created
- [ ] config.json configured
- [ ] Schema documentation complete
- [ ] All 4 Excel templates created
- [ ] Sample data filled in templates
- [ ] Templates tested (formulas work, dropdowns work)
- [ ] Commit to Git: "Day 1: Foundation & Excel Templates"

**Deliverables:**
- `Daily-Sales-Template.xlsx` (working, tested)
- `Food-Cost-Calculator.xlsx` (working, tested)
- `Staff-Performance-Log.xlsx` (working, tested)
- `Outlet-Summary.xlsx` (T1 version)
- `07-database-schema.md` (documentation)

**Blockers for Day 2:**
- [ ] None (can proceed to data generation)

---

### **Day 2: Sample Data Generation (The Realistic Data Flood)**

**Objective:** Generate 10,000 rows of realistic Indonesian F&B transaction data (6 months history)

---

#### Task Block D4: Data Simulation Engine (Python)

**AI Sprint: Create `simulate_data.py`**

```python
# simulate_data.py
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from faker import Faker
import random

fake = Faker('id_ID') # Indonesian locale

# Configuration
START_DATE = datetime(2025, 7, 1) # 6 months ago
END_DATE = datetime(2026, 1, 5) # Today
NUM_TRANSACTIONS = 10000

# Business Rules
PRODUCTS = [
 # (ID, Name, Category, CostPrice, SellPrice)
 ('PROD-001', 'Kopi Susu', 'Beverage', 5000, 15000),
 ('PROD-002', 'Kopi Hitam', 'Beverage', 3000, 12000),
 ('PROD-003', 'Es Teh Manis', 'Beverage', 2000, 8000),
 ('PROD-004', 'Es Teh Tawar', 'Beverage', 1500, 7000),
 ('PROD-005', 'Jus Alpukat', 'Beverage', 8000, 20000),
 ('PROD-006', 'Jus Jeruk', 'Beverage', 6000, 18000),
 ('PROD-007', 'Teh Tarik', 'Beverage', 4000, 12000),
 ('PROD-008', 'Cappuccino', 'Beverage', 6000, 18000),
 ('PROD-009', 'Latte', 'Beverage', 6000, 20000),
 ('PROD-010', 'Americano', 'Beverage', 4000, 15000),

 ('PROD-011', 'Nasi Goreng', 'Food', 10000, 25000),
 ('PROD-012', 'Nasi Goreng Spesial', 'Food', 12000, 30000),
 ('PROD-013', 'Mie Goreng', 'Food', 8000, 22000),
 ('PROD-014', 'Mie Ayam', 'Food', 9000, 23000),
 ('PROD-015', 'Ayam Geprek', 'Food', 12000, 30000),
 ('PROD-016', 'Ayam Bakar', 'Food', 15000, 35000),
 ('PROD-017', 'Soto Ayam', 'Food', 8000, 20000),
 ('PROD-018', 'Gado-Gado', 'Food', 7000, 18000),
 ('PROD-019', 'Nasi Uduk', 'Food', 6000, 15000),
 ('PROD-020', 'Nasi Kuning', 'Food', 6000, 15000),
 ('PROD-021', 'Spaghetti Aglio Olio', 'Food', 10000, 28000),
 ('PROD-022', 'Spaghetti Carbonara', 'Food', 12000, 32000),
 ('PROD-023', 'Fried Rice', 'Food', 10000, 25000),
 ('PROD-024', 'French Fries', 'Food', 8000, 20000),
 ('PROD-025', 'Chicken Wings', 'Food', 15000, 35000),

 ('PROD-026', 'Pisang Goreng', 'Dessert', 5000, 12000),
 ('PROD-027', 'Martabak Manis', 'Dessert', 10000, 25000),
 ('PROD-028', 'Es Campur', 'Dessert', 8000, 20000),
 ('PROD-029', 'Puding', 'Dessert', 5000, 15000),
 ('PROD-030', 'Brownies', 'Dessert', 7000, 18000),
]

STAFF = [
 ('STAFF-001', 'Budi', 'Cashier', 15000),
 ('STAFF-002', 'Rina', 'Waitress', 12000),
 ('STAFF-003', 'Siti', 'Waitress', 12000),
 ('STAFF-004', 'Andi', 'Cook', 18000),
 ('STAFF-005', 'Dewi', 'Waitress', 12000),
 ('STAFF-006', 'Joko', 'Cashier', 15000),
 ('STAFF-007', 'Wati', 'Waitress', 12000),
 ('STAFF-008', 'Hendra', 'Cook', 18000),
]

PAYMENT_METHODS = ['Cash', 'GoPay', 'OVO', 'QRIS', 'BCA Debit', 'Mandiri Debit', 'Credit Card']

# Product popularity weights (for realistic distribution)
PRODUCT_WEIGHTS = {
 'Kopi Susu': 15, # Most popular
 'Nasi Goreng': 12,
 'Es Teh Manis': 10,
 'Ayam Geprek': 8,
 'Mie Ayam': 7,
 'Kopi Hitam': 6,
 # Others get weight 1-3
}

def get_product_weight(product_name):
 return PRODUCT_WEIGHTS.get(product_name, random.randint(1, 3))

# Staff performance variations (for realistic leaderboard)
STAFF_PERFORMANCE = {
 'Budi': 1.2, # High performer (20% more sales)
 'Rina': 1.1, # Above average
 'Siti': 0.9, # Below average
 'Andi': 1.0, # Cook (neutral)
 'Dewi': 1.0, # Average
 'Joko': 0.8, # Low performer
 'Wati': 1.05, # Slightly above average
 'Hendra': 1.0, # Cook (neutral)
}

# Generate transactions
transactions = []
current_date = START_DATE
transaction_counter = 1

while current_date <= END_DATE:
 # Determine transactions per day based on day of week
 is_weekend = current_date.weekday() in [5, 6] # Saturday, Sunday
 is_monday = current_date.weekday() == 0

 if is_weekend:
 daily_transactions = random.randint(60, 80) # Weekend spike
 elif is_monday:
 daily_transactions = random.randint(30, 40) # Monday slump
 else:
 daily_transactions = random.randint(45, 60) # Weekday normal

 # Generate hourly distribution (peak hours: 11-13 lunch, 18-20 dinner)
 for _ in range(daily_transactions):
 # Weighted hour selection (peaks at lunch and dinner)
 hour_weights = [
 1, 1, 1, 1, 1, 1, 1, # 0-6am: very low
 3, 5, 8, # 7-9am: breakfast
 10, 15, 15, 10, # 10-1pm: lunch peak
 8, 8, 10, # 2-5pm: afternoon
 12, 18, 18, 12, # 6-9pm: dinner peak
 8, 5, 3 # 10pm-12am: late night
 ]
 hour = random.choices(range(24), weights=hour_weights)[0]
 minute = random.randint(0, 59)
 transaction_time = current_date.replace(hour=hour, minute=minute)

 # Select product (weighted by popularity)
 product = random.choices(
 PRODUCTS,
 weights=[get_product_weight(p[1]) for p in PRODUCTS]
 )[0]

 # Select staff (weighted by shift and performance)
 # Morning shift (7-15): Budi, Rina, Dewi, Andi
 # Evening shift (15-23): Joko, Siti, Wati, Hendra
 if hour < 15:
 available_staff = [s for s in STAFF if s[1] in ['Budi', 'Rina', 'Dewi', 'Andi']]
 else:
 available_staff = [s for s in STAFF if s[1] in ['Joko', 'Siti', 'Wati', 'Hendra']]

 staff = random.choice(available_staff)

 # Quantity (most orders are 1-2 items)
 quantity_weights = [50, 30, 15, 5] # 1, 2, 3, 4+
 quantity = random.choices([1, 2, 3, random.randint(4, 6)], weights=quantity_weights)[0]

 # Calculate total (with staff performance variation)
 staff_multiplier = STAFF_PERFORMANCE.get(staff[1], 1.0)
 base_total = product[4] * quantity # SellPrice × Quantity

 # Small random variation (±5%)
 variation = random.uniform(0.95, 1.05)
 total = int(base_total * variation)

 # Payment method (Indonesian market distribution)
 payment_weights = [35, 25, 20, 15, 3, 1, 1] # Cash dominant in Indonesia
 payment = random.choices(PAYMENT_METHODS, weights=payment_weights)[0]

 # Create transaction
 transaction = {
 'TransactionID': f'TRX-{current_date.strftime("%Y%m%d")}-{transaction_counter:04d}',
 'Date': current_date.date(),
 'Time': transaction_time.time(),
 'ProductID': product[0],
 'ProductName': product[1],
 'Category': product[2],
 'Quantity': quantity,
 'UnitPrice': product[4],
 'TotalAmount': total,
 'StaffID': staff[0],
 'StaffName': staff[1],
 'PaymentMethod': payment,
 'CostPrice': product[3], # For margin calculation
 }

 transactions.append(transaction)
 transaction_counter += 1

 # Move to next day
 current_date += timedelta(days=1)

# Create DataFrame
df_sales = pd.DataFrame(transactions)

# Save to CSV
df_sales.to_csv('Sample-Data/Sales.csv', index=False, encoding='utf-8-sig')
print(f" Generated {len(df_sales)} transactions")
print(f" Date range: {df_sales['Date'].min()} to {df_sales['Date'].max()}")
print(f" Total revenue: Rp {df_sales['TotalAmount'].sum():,.0f}")
print(f" Avg transaction: Rp {df_sales['TotalAmount'].mean():,.0f}")

# Generate Products master CSV
df_products = pd.DataFrame(PRODUCTS, columns=['ProductID', 'ProductName', 'Category', 'CostPrice', 'SellPrice'])
df_products['IsActive'] = True
df_products['FoodCostPct'] = (df_products['CostPrice'] / df_products['SellPrice'] * 100).round(1)
df_products.to_csv('Sample-Data/Products.csv', index=False)
print(f" Generated {len(df_products)} products")

# Generate Staff master CSV
df_staff = pd.DataFrame(STAFF, columns=['StaffID', 'StaffName', 'Role', 'HourlyRate'])
df_staff['HireDate'] = pd.date_range(start='2025-01-01', periods=len(df_staff), freq='15D')
df_staff['IsActive'] = True
df_staff.to_csv('Sample-Data/Staff.csv', index=False)
print(f" Generated {len(df_staff)} staff members")

# Generate summary stats for validation
print("\n Data Quality Checks:")
print(f" Weekend avg: {df_sales[df_sales['Date'].apply(lambda x: pd.Timestamp(x).weekday() in [5,6])].groupby('Date').size().mean():.1f} transactions/day")
print(f" Weekday avg: {df_sales[df_sales['Date'].apply(lambda x: pd.Timestamp(x).weekday() not in [5,6])].groupby('Date').size().mean():.1f} transactions/day")
print(f" Top 3 products: {df_sales['ProductName'].value_counts().head(3).to_dict()}")
print(f" Top staff by sales: {df_sales.groupby('StaffName')['TotalAmount'].sum().sort_values(ascending=False).head(3).to_dict()}")
```

**Human Execution:**
- [ ] Create `Sample-Data/` folder if not exists
- [ ] Run script: `python Scripts/simulate_data.py`
- [ ] Verify outputs:
 - [ ] `Sales.csv` created (~10K rows)
 - [ ] `Products.csv` created (30 products)
 - [ ] `Staff.csv` created (8 staff)
- [ ] Inspect data quality:
 - [ ] Open Sales.csv in Excel
 - [ ] Check date range (Jul 2025 - Jan 2026)
 - [ ] Verify weekend transactions > weekday
 - [ ] Check no null values
 - [ ] Verify TotalAmount = UnitPrice × Quantity (sample 10 rows)

---

#### Task Block D5: Data Validation & Edge Cases

**AI Sprint: Add edge cases to data**

**Create `add_edge_cases.py`:**
```python
import pandas as pd
import random

# Load existing data
df = pd.read_csv('Sample-Data/Sales.csv')

# Edge Case 1: VIP transactions (very high value)
vip_transactions = []
for _ in range(5):
 # Large catering order
 vip_txn = df.sample(1).copy()
 vip_txn['Quantity'] = random.randint(20, 50)
 vip_txn['TotalAmount'] = vip_txn['UnitPrice'] * vip_txn['Quantity']
 vip_txn['TransactionID'] = f'TRX-VIP-{random.randint(1000, 9999)}'
 vip_transactions.append(vip_txn)

# Edge Case 2: Returns/Voids (negative amounts) - OPTIONAL, only if needed
# For now, skip to keep data clean for T1-Basic

# Edge Case 3: Late night orders (past midnight)
# Already handled in hour_weights

# Edge Case 4: Staff with zero sales on certain days (realistic)
# Already realistic due to shift-based assignment

# Append VIP transactions
df_augmented = pd.concat([df, pd.concat(vip_transactions)], ignore_index=True)

# Save
df_augmented.to_csv('Sample-Data/Sales.csv', index=False)
print(f" Added {len(vip_transactions)} VIP transactions")
print(f" Total transactions: {len(df_augmented)}")
```

**Human Execution:**
- [ ] Run: `python Scripts/add_edge_cases.py`
- [ ] Verify VIP transactions visible in data
- [ ] Check that edge cases don't break formulas

---

#### Task Block D6: README for Sample Data

**AI Sprint: Generate `Sample-Data/README.txt`**

```
==================================================
SAMPLE DATA FOR POWER BI TEMPLATE
==================================================

This folder contains realistic sample data for an Indonesian F&B business.

 FILES:
- Sales.csv (10,000+ transactions, 6 months)
- Products.csv (30 menu items)
- Staff.csv (8 employees)

 DATA CHARACTERISTICS:
- Date Range: July 2025 - January 2026
- Weekend Spike: +30% transactions on Sat/Sun
- Monday Slump: -25% transactions on Monday
- Peak Hours: 11am-1pm (lunch), 6pm-8pm (dinner)
- Top Products: Kopi Susu, Nasi Goreng, Es Teh Manis
- Payment Mix: 35% Cash, 25% GoPay, 20% OVO, 20% Others
- Staff Performance: Budi (top), Joko (bottom)

 USE THIS DATA TO:
1. Test the Power BI dashboard
2. Learn how metrics are calculated
3. Demo to potential customers

NOTE:
This is SAMPLE data only. Replace with YOUR actual data from POS system.

 SUPPORT:
Email: support@[domain].com
```

**Human Polish:**
- [ ] Save as `Sample-Data/README.txt`
- [ ] Read through to ensure accuracy

---

### **Day 2 Completion Checklist:**

**End of Day 2:**
- [ ] `simulate_data.py` created and tested
- [ ] Sales.csv generated (10K+ rows)
- [ ] Products.csv generated (30 items)
- [ ] Staff.csv generated (8 staff)
- [ ] Edge cases added (VIP transactions)
- [ ] README.txt created
- [ ] Data quality validated
- [ ] Commit to Git: "Day 2: Sample Data Generation"

**Deliverables:**
- Realistic 6-month transaction dataset
- Product and staff master data
- Data ready for Power BI import

**Blockers for Day 3:**
- [ ] None (data ready for Power BI model)

---

### **Day 3: Power BI Data Model & Relationships**

**Objective:** Import data into Power BI, create relationships, build calendar table

---

#### Task Block D7: Power BI Project Setup

**Human Execution:**
- [ ] Open Power BI Desktop
- [ ] File -> Options -> Regional Settings:
 - [ ] Locale: Indonesian (Indonesia)
 - [ ] Data Load: UTF-8 encoding
- [ ] File -> Save As: `FNB-Dashboard-T1-Basic.pbix`
- [ ] Save location: `Templates/Power-BI/`

**Power BI Settings:**
- [ ] Options -> Data Load:
 - [ ] Type detection: First 200 rows
 - [ ] Relationships: Auto-detect (we'll verify manually)
 - [ ] Fast Data Load (uncheck for control)
- [ ] Options -> Current File -> Data Load:
 - [ ] Enable background data refresh
 - [ ] Allow data preview

---

#### Task Block D8: Data Import & Power Query Transformations

**Import Sales Data:**

1. **Get Data -> Text/CSV**
 - [ ] Select `Sample-Data/Sales.csv`
 - [ ] Encoding: UTF-8
 - [ ] Delimiter: Comma
 - [ ] Click "Transform Data" (not Load)

2. **Power Query Editor - Sales Table:**
 - [ ] Rename query: `FACT_Sales`
 - [ ] Transform -> Data Types (verify):
 ```
 TransactionID: Text
 Date: Date
 Time: Time
 ProductID: Text
 ProductName: Text
 Category: Text
 Quantity: Whole Number
 UnitPrice: Currency (Rp)
 TotalAmount: Currency (Rp)
 StaffID: Text
 StaffName: Text
 PaymentMethod: Text
 CostPrice: Currency (Rp)
 ```
 - [ ] Add Custom Column: `GrossProfit`
 - Formula: `[TotalAmount] - ([CostPrice] * [Quantity])`
 - Type: Currency
 - [ ] Add Custom Column: `GrossProfitPct`
 - Formula: `([TotalAmount] - ([CostPrice] * [Quantity])) / [TotalAmount]`
 - Type: Percentage
 - [ ] Remove Column: `CostPrice` (move to Products table only)

**Import Products Data:**

3. **Get Data -> Text/CSV**
 - [ ] Select `Sample-Data/Products.csv`
 - [ ] Transform Data

4. **Power Query Editor - Products Table:**
 - [ ] Rename query: `DIM_Products`
 - [ ] Verify data types:
 ```
 ProductID: Text (KEY)
 ProductName: Text
 Category: Text
 CostPrice: Currency
 SellPrice: Currency
 IsActive: True/False
 FoodCostPct: Percentage
 ```
 - [ ] No duplicates check: Select ProductID -> Remove Duplicates

**Import Staff Data:**

5. **Get Data -> Text/CSV**
 - [ ] Select `Sample-Data/Staff.csv`
 - [ ] Transform Data

6. **Power Query Editor - Staff Table:**
 - [ ] Rename query: `DIM_Staff`
 - [ ] Verify data types:
 ```
 StaffID: Text (KEY)
 StaffName: Text
 Role: Text
 HourlyRate: Currency
 HireDate: Date
 IsActive: True/False
 ```

**Close & Apply**
- [ ] Click "Close & Apply"
- [ ] Wait for data load (should be < 10 seconds)

---

#### Task Block D9: Calendar Table (Date Dimension)

**AI Sprint: Generate DAX for Calendar Table**

**Model View -> New Table:**

```dax
DIM_Date =
ADDCOLUMNS(
 CALENDAR(DATE(2024, 1, 1), DATE(2026, 12, 31)),
 "Year", YEAR([Date]),
 "YearMonth", FORMAT([Date], "YYYY-MM"),
 "YearMonthShort", FORMAT([Date], "YYMM"),
 "Quarter", "Q" & FORMAT([Date], "Q"),
 "QuarterNum", QUARTER([Date]),
 "MonthNum", MONTH([Date]),
 "MonthName", FORMAT([Date], "MMMM"),
 "MonthShort", FORMAT([Date], "MMM"),
 "WeekNum", WEEKNUM([Date], 2), // ISO week (Monday start)
 "DayOfWeek", WEEKDAY([Date], 2), // Monday = 1
 "DayName", FORMAT([Date], "DDDD"),
 "DayNameShort", FORMAT([Date], "DDD"),
 "DayOfMonth", DAY([Date]),
 "IsWeekend", IF(WEEKDAY([Date], 2) >= 6, TRUE, FALSE),
 "IsToday", IF([Date] = TODAY(), TRUE, FALSE),
 "FiscalYear", IF(MONTH([Date]) >= 4, YEAR([Date]), YEAR([Date]) - 1), // Apr-Mar fiscal year
 "FiscalQuarter", "FY" & IF(MONTH([Date]) >= 4, YEAR([Date]), YEAR([Date]) - 1) & " Q" & ROUNDUP(MOD(MONTH([Date]) + 9, 12) / 3, 0)
)
```

**Mark as Date Table:**
- [ ] Right-click `DIM_Date` -> Mark as Date Table
- [ ] Select column: `Date`
- [ ] Verify: Valid date column

**Sort Columns:**
- [ ] Select `MonthName` -> Column Tools -> Sort by Column -> `MonthNum`
- [ ] Select `DayName` -> Sort by -> `DayOfWeek`
- [ ] Select `Quarter` -> Sort by -> `QuarterNum`

---

#### Task Block D10: Relationships & Model Configuration

**Model View -> Manage Relationships:**

1. **Sales -> Products Relationship:**
 - [ ] From: `FACT_Sales[ProductID]`
 - [ ] To: `DIM_Products[ProductID]`
 - [ ] Cardinality: Many-to-One (*:1)
 - [ ] Cross filter direction: Single
 - [ ] Active:

2. **Sales -> Staff Relationship:**
 - [ ] From: `FACT_Sales[StaffID]`
 - [ ] To: `DIM_Staff[StaffID]`
 - [ ] Cardinality: Many-to-One (*:1)
 - [ ] Cross filter direction: Single
 - [ ] Active:

3. **Sales -> Date Relationship:**
 - [ ] From: `FACT_Sales[Date]`
 - [ ] To: `DIM_Date[Date]`
 - [ ] Cardinality: Many-to-One (*:1)
 - [ ] Cross filter direction: Single
 - [ ] Active:

**Verify Relationships:**
- [ ] Model View should show star schema (Sales in center, dimensions around)
- [ ] No circular relationships warning
- [ ] All relationships 1:* direction (dimension:fact)

**Hide Unnecessary Columns from Report View:**
- [ ] FACT_Sales: Hide `ProductID`, `StaffID` (keep names visible)
- [ ] DIM_Products: Hide `ProductID` (key column, not for display)
- [ ] DIM_Staff: Hide `StaffID`
- [ ] DIM_Date: Hide `DayOfWeek`, `MonthNum`, `QuarterNum` (sort columns only)

---

### **Day 3 Completion Checklist:**

**End of Day 3:**
- [ ] Data imported (Sales, Products, Staff)
- [ ] Calendar table created
- [ ] Relationships configured (star schema)
- [ ] Data types validated
- [ ] Model optimized (hidden columns)
- [ ] Commit to Git: "Day 3: Power BI Data Model"

**Deliverables:**
- `FNB-Dashboard-T1-Basic.pbix` with complete data model
- Star schema relationships verified

**Blockers for Day 4:**
- [ ] None (ready for DAX measures)

---

### **Day 4: DAX Measures - T1-Basic (30 Metrics)**

**Objective:** Create all 30 base metrics for T1-Basic (Modules B1, B2, B3)

**Organization:** Create measure groups for clarity

---

#### Task Block D11: Measure Table & Organization

**Create Measures Table:**
- [ ] Model View -> New Table (name: `_Measures`)
 ```dax
 _Measures = ROW("Placeholder", 1)
 ```
- [ ] Right-click table -> Hide from Report View
- [ ] Purpose: Container for all measures (best practice)

**Create Folders (Display Folders):**
- [ ] Select `_Measures` table
- [ ] Properties -> Advanced -> Display Folder structure:
 ```
 _Measures/
 B1 - Revenue Core/
 B2 - Menu Essentials/
 B3 - Staff & Customer Basics/
 Utility Measures/
 ```

---

#### Task Block D12: B1 - Revenue Core Metrics (10 metrics)

**AI Sprint: Generate DAX Measures**

**Revenue Metrics:**

1. **Total Revenue**
```dax
Total Revenue = SUM(FACT_Sales[TotalAmount])
```
- Display Folder: `B1 - Revenue Core`
- Format: Currency (Rp #,##0)

2. **Total Transactions**
```dax
Total Transactions = COUNTROWS(FACT_Sales)
```
- Display Folder: `B1 - Revenue Core`
- Format: Whole Number (#,##0)

3. **Average Transaction Value (ATV)**
```dax
ATV = DIVIDE([Total Revenue], [Total Transactions], 0)
```
- Display Folder: `B1 - Revenue Core`
- Format: Currency

4. **Total Quantity Sold**
```dax
Total Quantity = SUM(FACT_Sales[Quantity])
```
- Format: Whole Number

5. **Revenue Yesterday** (for comparison)
```dax
Revenue Yesterday =
CALCULATE(
 [Total Revenue],
 DATEADD(DIM_Date[Date], -1, DAY)
)
```

6. **Revenue Week-over-Week %**
```dax
Revenue WoW % =
VAR RevenueThisWeek =
 CALCULATE(
 [Total Revenue],
 DATESINPERIOD(DIM_Date[Date], LASTDATE(DIM_Date[Date]), -7, DAY)
 )
VAR RevenueLastWeek =
 CALCULATE(
 [Total Revenue],
 DATESINPERIOD(DIM_Date[Date], LASTDATE(DIM_Date[Date]), -14, DAY)
 )
RETURN
 DIVIDE(RevenueThisWeek - RevenueLastWeek, RevenueLastWeek, 0)
```
- Format: Percentage (0.0%)

7. **Revenue Month-over-Month %**
```dax
Revenue MoM % =
VAR RevenueThisMonth = [Total Revenue]
VAR RevenueLastMonth =
 CALCULATE(
 [Total Revenue],
 DATEADD(DIM_Date[Date], -1, MONTH)
 )
RETURN
 DIVIDE(RevenueThisMonth - RevenueLastMonth, RevenueLastMonth, 0)
```

8. **Revenue Year-to-Date (YTD)**
```dax
Revenue YTD =
TOTALYTD([Total Revenue], DIM_Date[Date])
```

9. **Revenue Previous Year Same Period**
```dax
Revenue PY =
CALCULATE(
 [Total Revenue],
 SAMEPERIODLASTYEAR(DIM_Date[Date])
)
```

10. **Revenue YoY Growth %**
```dax
Revenue YoY % =
DIVIDE([Total Revenue] - [Revenue PY], [Revenue PY], 0)
```

---

#### Task Block D13: B2 - Menu Essentials Metrics (10 metrics)

**Cost & Profit Metrics:**

11. **Total Cost (COGS)**
```dax
Total COGS =
SUMX(
 FACT_Sales,
 FACT_Sales[Quantity] * RELATED(DIM_Products[CostPrice])
)
```
- Display Folder: `B2 - Menu Essentials`
- Format: Currency

12. **Gross Profit**
```dax
Gross Profit = [Total Revenue] - [Total COGS]
```

13. **Gross Margin %**
```dax
Gross Margin % = DIVIDE([Gross Profit], [Total Revenue], 0)
```
- Format: Percentage
- Benchmark: Green >65%, Yellow 60-65%, Red <60%

14. **Food Cost %**
```dax
Food Cost % =
VAR FoodRevenue =
 CALCULATE([Total Revenue], DIM_Products[Category] = "Food")
VAR FoodCOGS =
 CALCULATE([Total COGS], DIM_Products[Category] = "Food")
RETURN
 DIVIDE(FoodCOGS, FoodRevenue, 0)
```
- Benchmark: Target 28-32%

15. **Beverage Cost %**
```dax
Beverage Cost % =
VAR BevRevenue =
 CALCULATE([Total Revenue], DIM_Products[Category] = "Beverage")
VAR BevCOGS =
 CALCULATE([Total COGS], DIM_Products[Category] = "Beverage")
RETURN
 DIVIDE(BevCOGS, BevRevenue, 0)
```
- Benchmark: Target 20-25%

**Product Performance:**

16. **Top Product (by Revenue)**
```dax
Top Product =
FIRSTNONBLANK(
 TOPN(
 1,
 VALUES(FACT_Sales[ProductName]),
 [Total Revenue],
 DESC
 ),
 1
)
```
- Format: Text

17. **Top Product Revenue**
```dax
Top Product Revenue =
CALCULATE(
 [Total Revenue],
 TOPN(1, ALL(FACT_Sales[ProductName]), [Total Revenue], DESC)
)
```

18. **Product Count (Active Menu Items)**
```dax
Active Products =
DISTINCTCOUNT(FACT_Sales[ProductName])
```

19. **Category Mix % (Food vs Beverage vs Dessert)**
```dax
Category Mix =
DIVIDE(
 [Total Revenue],
 CALCULATE([Total Revenue], ALL(DIM_Products[Category])),
 0
)
```
- Use in matrix visual with Category as rows

20. **Average Item Price**
```dax
Avg Item Price =
AVERAGE(DIM_Products[SellPrice])
```

---

#### Task Block D14: B3 - Staff & Customer Basics (10 metrics)

**Staff Metrics:**

21. **Total Staff**
```dax
Total Staff = DISTINCTCOUNT(FACT_Sales[StaffName])
```

22. **Top Server (by Sales)**
```dax
Top Server =
FIRSTNONBLANK(
 TOPN(1, VALUES(FACT_Sales[StaffName]), [Total Revenue], DESC),
 1
)
```

23. **Top Server Sales**
```dax
Top Server Sales =
CALCULATE(
 [Total Revenue],
 TOPN(1, ALL(FACT_Sales[StaffName]), [Total Revenue], DESC)
)
```

24. **Staff Performance (Sales per Staff)**
```dax
Sales per Staff = DIVIDE([Total Revenue], [Total Staff], 0)
```

25. **Transactions per Staff**
```dax
Transactions per Staff = DIVIDE([Total Transactions], [Total Staff], 0)
```

**Customer & Traffic Metrics:**

26. **Peak Hour (by Revenue)**
```dax
Peak Hour =
VAR PeakHourTime =
 TOPN(
 1,
 ADDCOLUMNS(
 SUMMARIZE(FACT_Sales, FACT_Sales[Time]),
 "HourRevenue", [Total Revenue]
 ),
 [HourRevenue],
 DESC
 )
RETURN
 FORMAT(MINX(PeakHourTime, FACT_Sales[Time]), "HH:00")
```

27. **Peak Day (by Revenue)**
```dax
Peak Day =
FIRSTNONBLANK(
 TOPN(1, VALUES(DIM_Date[DayName]), [Total Revenue], DESC),
 1
)
```

28. **Weekend Revenue %**
```dax
Weekend Revenue % =
VAR WeekendRev = CALCULATE([Total Revenue], DIM_Date[IsWeekend] = TRUE)
VAR TotalRev = [Total Revenue]
RETURN
 DIVIDE(WeekendRev, TotalRev, 0)
```

29. **Weekday Avg Daily Revenue**
```dax
Weekday Avg Revenue =
VAR WeekdayDays =
 CALCULATE(
 DISTINCTCOUNT(DIM_Date[Date]),
 DIM_Date[IsWeekend] = FALSE,
 FACT_Sales
 )
VAR WeekdayRev =
 CALCULATE([Total Revenue], DIM_Date[IsWeekend] = FALSE)
RETURN
 DIVIDE(WeekdayRev, WeekdayDays, 0)
```

30. **Payment Method Mix %**
```dax
Payment Mix % =
DIVIDE(
 [Total Revenue],
 CALCULATE([Total Revenue], ALL(FACT_Sales[PaymentMethod])),
 0
)
```

---

#### Task Block D15: Utility Measures (Supporting Calculations)

**These measures support visualizations:**

31. **Selected Date Range (for titles)**
```dax
Date Range Text =
VAR MinDate = MIN(DIM_Date[Date])
VAR MaxDate = MAX(DIM_Date[Date])
RETURN
 IF(
 MinDate = MaxDate,
 FORMAT(MinDate, "DD MMM YYYY"),
 FORMAT(MinDate, "DD MMM") & " - " & FORMAT(MaxDate, "DD MMM YYYY")
 )
```

32. **Dynamic Title**
```dax
Dynamic Title =
"Revenue: Rp " & FORMAT([Total Revenue] / 1000000, "#,##0.0") & "M | " &
"Transactions: " & FORMAT([Total Transactions], "#,##0")
```

33. **Health Score (Composite)**
```dax
Health Score =
VAR RevenueScore = IF([Revenue WoW %] > 0, 40, 20)
VAR MarginScore =
 SWITCH(
 TRUE(),
 [Gross Margin %] > 0.65, 30,
 [Gross Margin %] > 0.60, 20,
 10
 )
VAR TrafficScore = IF([Total Transactions] > 50, 30, 15)
RETURN
 RevenueScore + MarginScore + TrafficScore
```
- Score out of 100
- Format: Whole Number
- Use in gauge visual

---

### **Day 4 Completion Checklist:**

**End of Day 4:**
- [ ] All 30 base metrics created
- [ ] Measures organized in display folders
- [ ] Formats applied (currency, percentage, whole number)
- [ ] Test all measures with sample data
- [ ] Health Score validated
- [ ] Commit to Git: "Day 4: DAX Measures (T1-Basic 30 metrics)"

**Testing:**
- [ ] Create test table visual with all metrics -> All show values
- [ ] Filter by date range -> Metrics update
- [ ] Check for errors in "View -> Data Pane" (no warning icons)

**Deliverables:**
- 30 working DAX measures in T1-Basic

**Blockers for Day 5:**
- [ ] None (ready for visualizations)

---

### **Day 5: Dashboard Visualizations - Tab 1 (Command Center)**

**Objective:** Build the first dashboard tab with executive summary

---

#### Task Block D16: Page Setup & Design System

**Create New Page:**
- [ ] Insert -> New Page
- [ ] Rename: `01 - Command Center`
- [ ] Page Size: 16:9 (1280 x 720 for mobile compatibility)
- [ ] Background: Dark theme
 - [ ] Format Page Background:
 - Color: `#1A1A1A` (dark gray)
 - Transparency: 0%

**Design System Colors:**
- [ ] Primary: `#FF6B35` (Orange - for emphasis)
- [ ] Success: `#4CAF50` (Green - positive metrics)
- [ ] Warning: `#FFC107` (Yellow - caution)
- [ ] Danger: `#F44336` (Red - alerts)
- [ ] Text: `#FFFFFF` (White)
- [ ] Secondary Text: `#B0B0B0` (Light gray)
- [ ] Background Cards: `#2A2A2A` (Slightly lighter than page)

---

#### Task Block D17: Header Section (Navigation & Date Filter)

**Top Navigation Bar:**

1. **Logo/Title (Left)**
 - [ ] Insert -> Text Box
 - [ ] Text: "FNB Dashboard - Command Center"
 - [ ] Font: Segoe UI Bold, 24pt, White
 - [ ] Position: X=20, Y=10

2. **Date Range Slicer (Right)**
 - [ ] Insert -> Slicer
 - [ ] Field: `DIM_Date[Date]`
 - [ ] Style: Between
 - [ ] Format:
 - Background: `#2A2A2A`
 - Font: White
 - Position: X=900, Y=10, Width=350, Height=60

3. **Preset Date Buttons (Below slicer)**
 - [ ] Insert -> Button (repeat 4 times)
 - [ ] Button 1: "Yesterday"
 - Action: Bookmark -> Filter to Yesterday
 - [ ] Button 2: "Last 7 Days"
 - [ ] Button 3: "This Month"
 - [ ] Button 4: "Last 30 Days"
 - [ ] Style all: Rounded corners, `#FF6B35` fill, White text

---

#### Task Block D18: KPI Cards (Top Row)

**Create 4 KPI Cards:**

**Card 1: Total Revenue**
- [ ] Insert -> Card visual
- [ ] Field: `[Total Revenue]`
- [ ] Position: X=20, Y=100, Width=280, Height=120
- [ ] Format:
 - Background: `#2A2A2A`
 - Data Label: Rp #,##0 (white, 36pt)
 - Category Label: "Total Revenue" (gray, 12pt)
 - Border: 1px solid `#3A3A3A`

**Card 2: Total Transactions**
- [ ] Field: `[Total Transactions]`
- [ ] Position: X=320, Y=100, Width=280, Height=120
- [ ] Same styling as Card 1

**Card 3: Average Transaction Value**
- [ ] Field: `[ATV]`
- [ ] Position: X=620, Y=100, Width=280, Height=120

**Card 4: Gross Margin %**
- [ ] Field: `[Gross Margin %]`
- [ ] Position: X=920, Y=100, Width=280, Height=120
- [ ] Conditional Formatting:
 - Format -> Data Label -> Conditional Formatting
 - Rules:
 - If >= 0.65 -> Green (#4CAF50)
 - If >= 0.60 AND < 0.65 -> Yellow (#FFC107)
 - If < 0.60 -> Red (#F44336)

---

#### Task Block D19: Revenue Trend Chart (Center)

**Area Chart: Revenue over Time**
- [ ] Insert -> Area Chart
- [ ] Axis: `DIM_Date[Date]`
- [ ] Values: `[Total Revenue]`
- [ ] Position: X=20, Y=240, Width=580, Height=300
- [ ] Format:
 - Line Color: `#FF6B35`
 - Fill: Gradient from `#FF6B35` to transparent
 - Grid: Horizontal only, light gray
 - Axis: White text
 - Title: "Revenue Trend" (18pt, white)
 - Tooltip: Custom (show date, revenue, WoW %)

**Add Benchmark Line (Target):**
- [ ] Analytics -> Constant Line
- [ ] Value: 35000000 (Rp 35M target)
- [ ] Color: Dashed white line
- [ ] Label: "Daily Target"

---

#### Task Block D20: Category Breakdown (Right Side)

**Donut Chart: Revenue by Category**
- [ ] Insert -> Donut Chart
- [ ] Legend: `DIM_Products[Category]`
- [ ] Values: `[Total Revenue]`
- [ ] Position: X=620, Y=240, Width=280, Height=300
- [ ] Format:
 - Colors: Food=#4CAF50, Beverage=#2196F3, Dessert=#FFC107
 - Detail Labels: Show percentage
 - Title: "Category Mix"

**Table: Category Details**
- [ ] Insert -> Table
- [ ] Columns:
 - `DIM_Products[Category]`
 - `[Total Revenue]` (format: Rp #,##0)
 - `[Category Mix %]` (format: 0.0%)
 - `[Gross Margin %]`
- [ ] Position: X=920, Y=240, Width=280, Height=300
- [ ] Conditional Formatting on Margin %:
 - Green if >65%, Red if <60%

---

#### Task Block D21: Bottom Row - Quick Insights

**Metric Cards (Small Format):**

**Row of 5 Mini Cards:**
1. **Peak Day**
 - Field: `[Peak Day]`
 - Size: 220x80
 - Icon:

2. **Peak Hour**
 - Field: `[Peak Hour]`
 - Icon:

3. **Top Product**
 - Field: `[Top Product]`
 - Icon:

4. **Top Server**
 - Field: `[Top Server]`
 - Icon:

5. **Weekend Revenue %**
 - Field: `[Weekend Revenue %]`
 - Icon:

**Positioning:**
- [ ] Y=560 (bottom section)
- [ ] Evenly spaced across width
- [ ] Same background style as KPI cards

---

#### Task Block D22: Health Score Gauge (Bottom Right)

**Gauge Visual: Business Health Score**
- [ ] Insert -> Gauge
- [ ] Value: `[Health Score]`
- [ ] Min: 0
- [ ] Max: 100
- [ ] Target: 80 (good health threshold)
- [ ] Position: X=1000, Y=560, Width=240, Height=150
- [ ] Format:
 - Gauge fill colors:
 - 0-50: Red
 - 50-80: Yellow
 - 80-100: Green
 - Target line: White dashed
 - Data Label: Show score (large font)
 - Callout: "Health Score" (below gauge)

---

### **Day 5 Completion Checklist:**

**End of Day 5:**
- [ ] Command Center page created
- [ ] 4 KPI cards functional
- [ ] Revenue trend chart with benchmark
- [ ] Category breakdown (donut + table)
- [ ] Bottom insights row
- [ ] Health Score gauge
- [ ] Date slicer working (filters entire page)
- [ ] Design system applied (colors, fonts)
- [ ] Commit to Git: "Day 5: Command Center Dashboard"

**Testing:**
- [ ] Interact with date slicer -> All visuals update
- [ ] Click category in donut -> Table filters
- [ ] Health Score changes color based on value
- [ ] All fonts readable on dark background

**Deliverables:**
- Complete Command Center dashboard (Tab 1)

**Blockers for Day 6:**
- [ ] None (ready for Tabs 2-3)

---

### **Day 6: Dashboard Tabs 2 & 3 (Wolf Pack & Loyalty Loop)**

**Objective:** Build staff performance and customer insights tabs

---

#### Task Block D23: Tab 2 - Wolf Pack (Staff Performance)

**Create New Page:**
- [ ] Insert -> New Page
- [ ] Rename: `02 - Wolf Pack`
- [ ] Copy background formatting from Tab 1

**Header:**
- [ ] Title: "Wolf Pack - Staff Performance"
- [ ] Same date slicer (sync with Tab 1)

**Main Visual: Staff Leaderboard**
- [ ] Insert -> Clustered Bar Chart
- [ ] Axis (Y): `FACT_Sales[StaffName]`
- [ ] Values (X): `[Total Revenue]`
- [ ] Position: X=20, Y=100, Width=400, Height=500
- [ ] Format:
 - Bars: Horizontal
 - Sort: Descending by revenue
 - Data Labels: Show (Rp format)
 - Colors: Gradient (Top 3 in gold/silver/bronze tones)
 - Title: "Leaderboard - Total Sales"

**Performance Matrix:**
- [ ] Insert -> Matrix
- [ ] Rows: `FACT_Sales[StaffName]`
- [ ] Values:
 - `[Total Revenue]`
 - `[Total Transactions]`
 - `[Sales per Staff]`
 - `[Transactions per Staff]`
- [ ] Position: X=440, Y=100, Width=800, Height=500
- [ ] Conditional Formatting:
 - Heat map on Sales per Staff (green = high, red = low)

**Staff Role Filter:**
- [ ] Insert -> Slicer
- [ ] Field: `DIM_Staff[Role]`
- [ ] Style: Tile (buttons for each role)
- [ ] Position: X=20, Y=620
- [ ] Options: Cashier, Waitress, Cook, Manager

---

#### Task Block D24: Tab 3 - Loyalty Loop (Customer Insights)

**Create New Page:**
- [ ] Insert -> New Page
- [ ] Rename: `03 - Loyalty Loop`

**Payment Method Mix (Top Left):**
- [ ] Insert -> Pie Chart
- [ ] Legend: `FACT_Sales[PaymentMethod]`
- [ ] Values: `[Total Revenue]`
- [ ] Position: X=20, Y=100, Width=350, Height=300
- [ ] Title: "Payment Method Distribution"

**Day of Week Performance (Top Right):**
- [ ] Insert -> Column Chart
- [ ] Axis: `DIM_Date[DayName]`
- [ ] Values: `[Total Revenue]`
- [ ] Position: X=390, Y=100, Width=850, Height=300
- [ ] Format:
 - Sort by: DayOfWeek (Mon-Sun)
 - Highlight weekends with different color
 - Title: "Revenue by Day of Week"

**Time of Day Heatmap (Bottom):**
- [ ] Insert -> Matrix
- [ ] Rows: `DIM_Date[DayName]`
- [ ] Columns: Hour (extract from `FACT_Sales[Time]`)
- [ ] Values: `[Total Revenue]`
- [ ] Position: X=20, Y=420, Width=1220, Height=250
- [ ] Conditional Formatting:
 - Background color heat map (dark blue = low, bright orange = high)
 - No data labels (cleaner visual)
- [ ] Title: "Peak Hours Heatmap"

**Insight Cards (Bottom Row):**
- [ ] Insert 3 cards:
 1. Weekday Avg Revenue
 2. Weekend Revenue %
 3. Peak Hour
- [ ] Position: Y=690, evenly spaced

---

### **Day 6 Completion Checklist:**

**End of Day 6:**
- [ ] Wolf Pack page created (staff leaderboard)
- [ ] Loyalty Loop page created (customer patterns)
- [ ] All 3 tabs functional
- [ ] Page navigation buttons added
- [ ] Date slicer synced across all pages
- [ ] Commit to Git: "Day 6: Wolf Pack & Loyalty Loop Dashboards"

**Testing:**
- [ ] Navigate between tabs (use tab buttons or page nav)
- [ ] Filter on Tab 1 -> Check if Tab 2/3 also filter (sync test)
- [ ] Staff leaderboard sorts correctly
- [ ] Heatmap shows peaks at lunch/dinner hours

**Deliverables:**
- Complete 3-tab dashboard for T1-Basic

**Blockers for Day 7:**
- [ ] None (ready for Google Sheets conversion)

---

### **Day 7: Google Sheets Conversion & Mobile Optimization**

**Objective:** Create Google Sheets versions of Excel templates and optimize dashboard for mobile

---

#### Task Block D25: Excel -> Google Sheets Conversion

**For Each Excel Template:**

**Daily-Sales.xlsx -> Google Sheets:**
- [ ] Open `Daily-Sales.xlsx` in Excel
- [ ] File -> Save As -> Format: CSV (UTF-8)
- [ ] Upload to Google Drive
- [ ] Open with Google Sheets
- [ ] Recreate formulas (some Excel formulas incompatible):
 - **TransactionID:** `="TRX-"&TEXT(B2,"YYYYMMDD")&"-"&TEXT(ROW()-1,"000")`
 - Test if TEXT() works in Sheets (should work)
 - **Total:** `=F2*G2` (no change)
 - **Category lookup:** `=VLOOKUP(D2,Product_Master!A:B,2,0)` (no change)
- [ ] Recreate Data Validation:
 - Product dropdown: Data -> Data Validation -> List from range
 - Source: `Product_List!$A$2:$A$100`
 - Show dropdown:
 - Reject invalid input:
- [ ] Recreate Conditional Formatting:
 - Highlight rules -> Custom formula
 - Formula: `=AND(NOT(ISBLANK(D2)),NOT(ISBLANK(F2)))` (green if complete)
- [ ] Test on mobile:
 - [ ] Open Google Sheets app (phone)
 - [ ] Tap dropdowns -> Work on mobile?
 - [ ] Enter data -> Formulas calculate?

**Repeat for:**
- [ ] Food-Cost-Calculator.xlsx
- [ ] Staff-Performance-Log.xlsx
- [ ] Outlet-Summary.xlsx (T1 version)

**Create "Make-a-Copy" Links:**
- [ ] For each Google Sheet:
 - [ ] File -> Share -> Get Link
 - [ ] Change to: Anyone with link can VIEW
 - [ ] Copy link, modify URL:
 - Original: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
 - Change to: `https://docs.google.com/spreadsheets/d/SHEET_ID/copy`
 - [ ] Test link in incognito: Should prompt "Make a copy"
 - [ ] Save link to documentation

---

#### Task Block D26: Mobile Layout Optimization (Power BI)

**Power BI Mobile View:**

**For Each Dashboard Page:**
- [ ] View -> Mobile Layout
- [ ] Canvas: Portrait (9:16 ratio)

**Tab 1 - Command Center Mobile:**
- [ ] Stack KPI cards vertically (1 per row)
- [ ] Revenue trend chart: Full width, reduce height
- [ ] Category donut: Remove or shrink significantly
- [ ] Hide detailed table (too small on mobile)
- [ ] Enlarge Health Score gauge (bottom)
- [ ] Date slicer: Replace with relative date dropdown

**Tab 2 - Wolf Pack Mobile:**
- [ ] Staff leaderboard: Keep, full width
- [ ] Performance matrix: Convert to simple table (fewer columns)
- [ ] Show top 5 staff only (hide rest)

**Tab 3 - Loyalty Loop Mobile:**
- [ ] Payment mix chart: Keep
- [ ] Day of week chart: Stack vertically
- [ ] Heatmap: Remove (too detailed for mobile)

**Test on Phone:**
- [ ] Publish to Power BI Service (if licensed) OR
- [ ] Export as PDF and view on phone (simulate)
- [ ] Check: Text readable? Tap targets big enough?

---

### **Day 7 Completion Checklist:**

**End of Day 7:**
- [ ] Google Sheets versions created (4 templates)
- [ ] Make-a-copy links tested
- [ ] Mobile layouts optimized
- [ ] Formulas validated in Sheets
- [ ] Mobile testing completed
- [ ] Commit to Git: "Day 7: Google Sheets & Mobile Optimization"

**Deliverables:**
- 4 Google Sheets templates (with share links)
- Mobile-optimized Power BI dashboard

**Blockers for Day 8:**
- [ ] None (ready for documentation)

---

### **Day 8: Documentation Suite (Setup Guide, Videos, FAQ)**

**Objective:** Create all customer-facing documentation

---

#### Task Block D27: Setup Guide PDF (Comprehensive)

**AI Sprint: Generate Setup Guide Content**

**Structure (8-10 pages):**

**Page 1: Cover & Welcome**
- Title: "FNB Dashboard Setup Guide - Tier 1 Basic"
- Version: 1.0.0
- Date: [Launch Date]
- Welcome message: "Thank you for purchasing! Let's get you set up in 30 minutes."

**Page 2-3: Quick Start (5 Steps)**
1. **Download Power BI Desktop**
 - Link: aka.ms/pbidesktop
 - System requirements: Windows 10+, 4GB RAM
 - Installation: Next -> Next -> Finish

2. **Locate Your Template Files**
 - Check your email for Google Drive link
 - Download ZIP file
 - Extract to: `C:\FNB-Dashboard\`

3. **Prepare Your Data**
 - Option A: Use our sample data (for testing)
 - Option B: Export from your POS system
 - Required format: CSV (comma-separated)

4. **Open Dashboard & Connect Data**
 - Double-click `FNB-Dashboard-T1-Basic.pbix`
 - Power BI prompts: "Unable to connect"
 - Click "Edit Queries"
 - Update file paths to your CSV location

5. **Refresh & Explore**
 - Click "Refresh" (top ribbon)
 - Wait 5-10 seconds
 - Explore Command Center tab

**Page 4-5: Understanding Your Dashboard**
- **Tab 1: Command Center**
 - What it shows: Revenue overview, daily performance
 - Key metrics explained:
 - Total Revenue: Sum of all sales (Rp)
 - ATV: Average transaction value
 - Gross Margin %: Profit after costs (Target: >65%)
 - Health Score: Composite metric (0-100, higher = better)
 - How to use date slicer
 - How to filter by category

- **Tab 2: Wolf Pack**
 - Staff performance leaderboard
 - Who's your top seller?
 - How to identify coaching opportunities

- **Tab 3: Loyalty Loop**
 - Payment method insights
 - Peak hours (when to schedule more staff)
 - Weekend vs weekday patterns

**Page 6: Excel Templates Guide**
- **Daily-Sales.xlsx**
 - How to fill daily (2 min/day workflow)
 - Dropdown usage
 - Common mistakes (typing product names manually)

- **Food-Cost-Calculator.xlsx**
 - How to add recipes
 - Traffic light system (Green/Yellow/Red)
 - Suggested selling price formula

- **Staff-Performance-Log.xlsx**
 - Timesheet entry
 - Leaderboard auto-updates
 - Gamification tiers (Gold/Silver/Bronze)

**Page 7-8: Troubleshooting**

| Problem | Solution |
|---------|----------|
| "Can't open .pbix file" | Install Power BI Desktop (free from Microsoft) |
| "Data source error" | Edit Queries -> Update file path to your CSV location |
| "Numbers look wrong" | Check column mapping (ProductName vs Product) |
| "Dashboard in English" | File -> Options -> Regional Settings -> Indonesian |
| "Refresh takes forever" | Reduce data size (last 3 months only) or close other apps |
| "Date slicer not working" | Check relationship: Sales[Date] -> Date[Date] |
| "Staff names duplicate" | Clean data: "Budi" vs "budi" are different |

**Page 9: Getting Support**
- **Tier 1 Support:**
 - Email: support@[domain].com
 - Response time: 48 hours (business days)
 - Include: Screenshot, error message, data sample

- **Upgrade to Tier 2:**
 - Get 2-3 hour setup call
 - 90-day support (vs 30-day)
 - 1 free customization
 - Price: Rp [T2 Price - T1 Price] upgrade fee

- **FAQ & Community:**
 - Link: [your-site.com/faq]
 - Facebook group: [if created]

**Page 10: Next Steps**
- [ ] Checklist: Replace sample data with your real data
- [ ] Checklist: Customize product list in Excel template
- [ ] Checklist: Add your staff names
- [ ] Checklist: Set daily target (benchmark line)
- [ ] Optional: Share dashboard with your team
- [ ] Optional: Export to PDF for offline reports

**Human Execution:**
- [ ] Use Canva or Google Slides to design
- [ ] Add screenshots from your dashboard
- [ ] Brand with your logo/colors
- [ ] Export as PDF (optimized, < 5MB)
- [ ] Save to `Documentation/Setup-Guide-v1.0.pdf`

---

#### Task Block D28: Video Tutorial Recording (5 Videos)

**Video 1: "Welcome & Overview" (2 min)**

**Script:**
```
[0:00-0:15] Opening
"Hi! Welcome to FNB Dashboard. I'm [Name], and I built this specifically for Indonesian F&B businesses like yours. In the next 2 minutes, I'll show you what you just bought and how it helps your business."

[0:15-0:45] Problem
"Most restaurant owners spend 4-8 hours per week manually tracking sales in Excel. You're looking at confusing POS reports, trying to figure out: Which menu items are profitable? Who's my best staff? When are my peak hours?"

[0:45-1:15] Solution
"This dashboard answers those questions in 30 seconds. [Screen share: show dashboard]. Tab 1: Revenue overview and health score. Tab 2: Staff leaderboard. Tab 3: Customer patterns and peak hours."

[1:15-1:45] What's Included
"You get 4 things: Power BI dashboard file, 4 Excel templates, Google Sheets versions, and this setup guide. Everything works offline. No monthly subscriptions."

[1:45-2:00] Next Steps
"Watch the next video to set it up. Takes 30 minutes, one time. Let's go!"
```

**Production:**
- [ ] Record screen: OBS Studio or Loom
- [ ] Show dashboard while talking (screen share)
- [ ] Record voiceover in Bahasa Indonesia (clear audio, no background noise)
- [ ] Edit: DaVinci Resolve or CapCut
- [ ] Add captions (auto-generate, then manually fix)
- [ ] Export: 1080p MP4, < 50MB

**Video 2: "Excel Template Walkthrough" (3 min)**
- [ ] Show Daily-Sales.xlsx
- [ ] Demonstrate dropdown usage
- [ ] Fill 3 sample transactions
- [ ] Explain auto-calculation

**Video 3: "Power BI Setup" (4 min)**
- [ ] Open .pbix file
- [ ] Edit Queries
- [ ] Update data source path
- [ ] Click Refresh
- [ ] Show data loads successfully

**Video 4: "Dashboard Navigation" (3 min)**
- [ ] Tour of Command Center tab
- [ ] Show date slicer in action
- [ ] Click on category filter
- [ ] Navigate to Wolf Pack and Loyalty Loop

**Video 5: "Daily Workflow" (2 min)**
- [ ] Morning routine: Open Excel, fill yesterday's sales (2 min)
- [ ] Open Power BI, click Refresh (5 seconds)
- [ ] Check Health Score
- [ ] Done! Total time: < 3 minutes/day

**Upload to YouTube:**
- [ ] Create unlisted playlist: "FNB Dashboard Tutorials"
- [ ] Upload all 5 videos
- [ ] Copy playlist link
- [ ] Embed in setup guide

---

#### Task Block D29: Troubleshooting FAQ (Knowledge Base)

**AI Sprint: Generate FAQ.md**

**Top 20 Questions:**

1. **Q: Do I need to pay monthly for Power BI?**
 A: No! Power BI Desktop is free from Microsoft. You only pay us once for the template.

2. **Q: Can I use this on Mac?**
 A: Power BI Desktop is Windows only. Workarounds: Use Parallels/VMware, or use Power BI Service (requires Microsoft 365 license).

3. **Q: My POS exports in XLSX, not CSV. Will it work?**
 A: Yes. Power BI can read Excel files directly. Just update the data source in Power Query.

4. **Q: Can I add more products to the template?**
 A: Yes! Edit the Product_Master sheet in Daily-Sales.xlsx. Add rows, save, refresh Power BI.

5. **Q: The dashboard is slow. How to fix?**
 A: Reduce data size (last 6 months only). Close other apps. Check your computer RAM (needs 4GB+).

6. **Q: Can I share this dashboard with my manager?**
 A: T1 license is single-user. For multi-user, upgrade to T3 (white-label, unlimited users).

7. **Q: What if my POS format changes?**
 A: Email us. T1: We'll send updated import script. T2: 1 free update included. T3: Covered in maintenance.

8. **Q: Can I customize the colors/branding?**
 A: Basic customization: Yes (Format -> Theme). Advanced: Requires Power BI knowledge or upgrade to T3.

9. **Q: How do I export dashboard to PDF?**
 A: File -> Export -> PDF. Choose current page or all pages.

10. **Q: The date filter isn't working. Why?**
 A: Check relationship: Model View -> Verify Sales[Date] connects to DIM_Date[Date]. Should be *.

(Continue for 20 questions total...)

**Save as:** `Documentation/FAQ.md` and PDF version

---

### **Day 8 Completion Checklist:**

**End of Day 8:**
- [ ] Setup Guide PDF created (8-10 pages)
- [ ] 5 video tutorials recorded & edited
- [ ] Videos uploaded to YouTube (unlisted)
- [ ] FAQ document created (20+ questions)
- [ ] All docs saved in Documentation/ folder
- [ ] Commit to Git: "Day 8: Documentation Suite"

**Deliverables:**
- Setup-Guide-v1.0.pdf
- 5 tutorial videos (YouTube playlist)
- FAQ.md + PDF

**Blockers for Day 9:**
- [ ] None (ready for packaging)

---

### **Day 9: Packaging, Testing & Final QA**

**Objective:** Package everything, run comprehensive QA, prepare for launch

---

#### Task Block D30: Final File Packaging

**Create Delivery Structure:**

```
FNB-Dashboard-T1-Basic-v1.0/
 1-START-HERE.txt
 2-Product/
 FNB-Dashboard-T1-Basic.pbix
 Excel-Templates/
 Daily-Sales-Template.xlsx
 Food-Cost-Calculator.xlsx
 Staff-Performance-Log.xlsx
 Outlet-Summary-T1.xlsx
 Google-Sheets-Links.txt
 3-Sample-Data/
 Sales.csv
 Products.csv
 Staff.csv
 README.txt
 4-Documentation/
 Setup-Guide-v1.0.pdf
 FAQ.pdf
 Metric-Glossary.pdf
 Video-Tutorials.txt (links)
 5-Changelog.md
```

**1-START-HERE.txt:**
```
==================================================
FNB DASHBOARD - TIER 1 BASIC v1.0
==================================================

THANK YOU FOR YOUR PURCHASE!

Quick Start (30 minutes):

1. Read "Setup-Guide-v1.0.pdf" in 4-Documentation/
2. Watch "Setup Video" (link in Video-Tutorials.txt)
3. Install Power BI Desktop (free): aka.ms/pbidesktop
4. Open FNB-Dashboard-T1-Basic.pbix (in 2-Product/)
5. Connect to your data (or use sample data first)
6. Click "Refresh" and explore!

 Support: support@[domain].com
 WhatsApp: +62-XXX (T2/T3 only, upgrade available)
⏱ Response: 48h (business days)

 BONUS: Refer 3 friends, get 1 year updates free!

Let's grow your business! ```

**Google-Sheets-Links.txt:**
```
GOOGLE SHEETS TEMPLATES (Mobile-Friendly)

Click links below to make a copy:

1. Daily Sales Entry:
 https://docs.google.com/spreadsheets/d/[SHEET_ID]/copy

2. Food Cost Calculator:
 https://docs.google.com/spreadsheets/d/[SHEET_ID]/copy

3. Staff Performance Log:
 https://docs.google.com/spreadsheets/d/[SHEET_ID]/copy

4. Outlet Summary (T1 version):
 https://docs.google.com/spreadsheets/d/[SHEET_ID]/copy

HOW TO USE:
- Click link -> "Make a copy" button appears
- Copy saves to YOUR Google Drive
- Edit on phone or computer
- Export to CSV -> Import to Power BI
```

**5-Changelog.md:**
```markdown
# Changelog - FNB Dashboard Tier 1 Basic

## [1.0.0] - 2026-01-XX (Launch)

### Added
- Initial release: T1-Basic (30 metrics)
- Module B1: Revenue Core (10 metrics)
- Module B2: Menu Essentials (10 metrics)
- Module B3: Staff & Customer Basics (10 metrics)
- 3 dashboard tabs: Command Center, Wolf Pack, Loyalty Loop
- 4 Excel templates (Daily Sales, Food Cost, Staff Log, Outlet Summary)
- Google Sheets versions (mobile-friendly)
- Sample data (6 months, 10K transactions)
- Setup Guide PDF (10 pages)
- 5 video tutorials (total 14 minutes)
- FAQ (20 questions)

### Features
- Health Score gauge (composite metric)
- Staff leaderboard with gamification
- Peak hours heatmap
- Category breakdown (Food/Beverage/Dessert)
- Weekend vs weekday analysis
- Mobile-optimized layouts

### Technical
- Power BI Desktop compatible (Windows 10+)
- Offline-first (no internet required after setup)
- Data refresh: Manual (one-click)
- Indonesian language throughout

### Support
- Email support: 30 days included
- Response time: 48 hours (business days)
- Free updates: Bug fixes only (1 year)

## [1.0.1] - TBD (Bug Fixes)
(To be released if critical bugs found in beta)
```

---

#### Task Block D31: Comprehensive QA Testing

**QA Test Plan (50 Checks):**

**Category 1: Data Integrity (10 checks)**
- [ ] Import sample data -> All 10K rows load
- [ ] No null values in key columns (ProductName, StaffName, Date)
- [ ] Dates range from July 2025 to Jan 2026
- [ ] Relationships active (Sales Products, Sales Staff, Sales Date)
- [ ] Total Revenue matches Excel SUM (manual calc)
- [ ] Gross Margin % calculates correctly (manual spot-check 5 products)
- [ ] Staff names no duplicates (Budi ≠ budi ≠ BUDI)
- [ ] Product categories only 3 values (Food, Beverage, Dessert)
- [ ] Payment methods realistic (Cash, GoPay, OVO, etc.)
- [ ] TransactionIDs unique (no duplicates)

**Category 2: DAX Measures (15 checks)**
- [ ] Total Revenue: Returns number, formatted as Rp
- [ ] Revenue WoW %: Shows change (positive or negative)
- [ ] Revenue YTD: Accumulates correctly
- [ ] Gross Margin %: Between 0-100%
- [ ] Food Cost %: Within realistic range (25-40%)
- [ ] Top Product: Returns product name (text)
- [ ] Top Server: Returns staff name
- [ ] Peak Hour: Returns time in HH:00 format
- [ ] Health Score: Between 0-100
- [ ] ATV: Total Revenue / Total Transactions (manual verify)
- [ ] Weekend Revenue %: Filters IsWeekend=TRUE correctly
- [ ] Payment Mix %: All methods sum to 100%
- [ ] Filter by date range -> All metrics update
- [ ] Filter by category -> Category Mix % recalculates
- [ ] No errors in "Data Pane" (no red triangles)

**Category 3: Visualizations (12 checks)**
- [ ] Command Center: All 4 KPI cards show values
- [ ] Revenue trend line appears (not blank)
- [ ] Donut chart shows 3 slices (Food/Bev/Dessert)
- [ ] Category table has 3 rows
- [ ] Health Score gauge shows needle position
- [ ] Wolf Pack leaderboard sorts descending
- [ ] Staff matrix shows all 8 staff
- [ ] Loyalty Loop payment chart shows all payment methods
- [ ] Day of week chart shows Mon-Sun (in order)
- [ ] Heatmap shows 7 rows × 24 columns
- [ ] All titles visible (not overlapping)
- [ ] Colors consistent with design system (Orange/Green/Red)

**Category 4: Interactivity (8 checks)**
- [ ] Date slicer: Select "Last 7 days" -> Visuals update
- [ ] Category filter: Click "Food" in donut -> Table filters
- [ ] Page navigation: Click "Wolf Pack" tab -> Page changes
- [ ] Sync slicers: Filter on Tab 1 -> Tab 2 also filters
- [ ] Drill-through: (Not implemented in T1, skip)
- [ ] Tooltips: Hover on trend chart -> Shows date + value
- [ ] Cross-filter: Click staff name -> Revenue chart highlights
- [ ] Reset filters: Click "Reset" button -> All filters clear

**Category 5: Excel Templates (15 checks)**
- [ ] Daily-Sales.xlsx: Dropdowns work (Product, Staff, Payment)
- [ ] Daily-Sales.xlsx: Formulas calculate (Total = Qty × Price)
- [ ] Daily-Sales.xlsx: Data validation rejects future dates
- [ ] Daily-Sales.xlsx: Conditional formatting highlights complete rows
- [ ] Food-Cost.xlsx: Traffic lights change color (edit cost -> see color)
- [ ] Food-Cost.xlsx: Suggested price auto-calculates (Cost × 3.33)
- [ ] Staff-Log.xlsx: Hours calculate from Clock In/Out
- [ ] Staff-Log.xlsx: Rp/Hour calculates (Sales / Hours)
- [ ] Staff-Log.xlsx: Tier auto-assigns (Gold/Silver/Bronze)
- [ ] Staff-Log.xlsx: Leaderboard auto-sorts
- [ ] Outlet-Summary.xlsx: Shows single outlet (T1 version)
- [ ] Outlet-Summary.xlsx: Upsell message visible ("Unlock Tier 2")
- [ ] All templates < 1MB file size
- [ ] All templates open in Excel Online (web test)
- [ ] All templates open on mobile Excel app (iOS/Android)

**Category 6: Google Sheets (5 checks)**
- [ ] All formulas work in Sheets (no #REF errors)
- [ ] Dropdowns work on mobile
- [ ] Make-a-copy link works (incognito test)
- [ ] Data validation rules intact
- [ ] Conditional formatting displays correctly

**Category 7: Documentation (5 checks)**
- [ ] Setup Guide PDF: All pages readable
- [ ] Setup Guide: Screenshots clear and relevant
- [ ] Video tutorials: Audio clear, Bahasa Indonesia
- [ ] Video tutorials: < 50MB per video
- [ ] FAQ: All 20 questions answered clearly

---

#### Task Block D32: Beta Testing (Soft Launch Prep)

**Recruit 3-5 Beta Testers:**
- [ ] Email committed customers (from validation phase):
 ```
 Subject: Your Dashboard is Ready! (Beta Access)

 Hi [Name],

 Your dashboard is ready for beta testing!

 What's included:
 - Power BI dashboard (.pbix file)
 - 4 Excel templates
 - Google Sheets versions
 - Setup guide + video tutorials

 Google Drive link: [LINK]
 Password: [if needed]

 Setup time: 30 minutes
 Support: Email me directly (I'll respond within 4 hours during beta)

 Your feedback shapes the final product. Please test and let me know:
 What worked well?
 What was confusing?
 What's missing?

 Beta period: 3-5 days
 After beta: I'll fix any bugs, then official launch

 Thanks for being an early supporter!

 [Your Name]
 ```

**Beta Testing Checklist (Send to Testers):**
```
BETA TESTING CHECKLIST

Please test these scenarios and report results:

[ ] Install Power BI Desktop (link in guide)
[ ] Open dashboard file
[ ] Connect to sample data (worked / failed)
[ ] Explore Command Center tab (clear / confusing)
[ ] Explore Wolf Pack tab
[ ] Explore Loyalty Loop tab
[ ] Filter by date range (worked / failed)
[ ] Open Daily-Sales Excel template
[ ] Fill 5 sample transactions using dropdowns
[ ] Import your OWN sales data (if possible)
[ ] Refresh dashboard with your data
[ ] Watch at least 2 video tutorials
[ ] Rate setup difficulty (1-10, 1=easy, 10=hard): ___

FEEDBACK:
What did you LOVE? ___________________
What was CONFUSING? ___________________
What BUGS did you find? ___________________
What's MISSING? ___________________
Would you recommend to another F&B owner? (Yes/No/Maybe)
```

**Track Beta Results:**
- [ ] Create tracking sheet:
 ```
 Name | Opened File | Connected Data | Explored Dashboards | Found Bugs | Satisfaction (1-10) | Would Recommend
 ```

---

### **Day 9 Completion Checklist:**

**End of Day 9:**
- [ ] Files packaged in delivery structure
- [ ] START-HERE.txt created
- [ ] Changelog written
- [ ] QA test plan executed (50 checks)
- [ ] All critical bugs fixed
- [ ] Beta testers recruited (3-5 people)
- [ ] Beta testing kits sent
- [ ] Commit to Git: "Day 9: Final QA & Beta Launch"

**Deliverables:**
- Production-ready T1-Basic package
- QA test results documented
- Beta testing in progress

**Blockers for Day 10:**
- [ ] Wait for beta feedback (3-5 days)
- [ ] Fix any critical bugs reported

---

### **Day 10: T1-Basic Launch Day **

**Prerequisites:**
- [ ] Beta feedback received (48+ hours elapsed)
- [ ] Critical bugs fixed (if any)
- [ ] Updated to v1.0.1 (if bug fixes made)
- [ ] Final package uploaded to Google Drive
- [ ] Payment links active (Midtrans)
- [ ] Email templates ready
- [ ] Support inbox monitored

---

#### Task Block D33: Final Pre-Launch Check (2 Hours Before)

**Technical Checklist:**
- [ ] Google Drive link accessible (incognito test)
- [ ] Download ZIP file (< 2 min download time)
- [ ] Extract ZIP -> All files present
- [ ] Test: Open .pbix -> Loads without error
- [ ] Test: Payment link -> Goes to correct product page
- [ ] Test: Support email -> Auto-reply works

**Communications Checklist:**
- [ ] Launch email drafted (ready to send)
- [ ] Social media posts scheduled (LinkedIn, Facebook, Instagram)
- [ ] WhatsApp status updated
- [ ] Calendly link active (for demo calls)

---

#### Task Block D34: Launch Sequence

**9:00 AM - Email Launch (Committed Customers)**

Send to all validated/beta customers:
```
Subject: It's Live! Your FNB Dashboard is Ready

Hi [Name],

The wait is over! Your dashboard is officially live.

 WHAT YOU GET:
 Power BI dashboard (30 metrics, 3 tabs)
 4 Excel templates (pre-formatted, dropdowns included)
 Google Sheets versions (mobile-friendly)
 Sample data (test before using your own)
 Setup guide + 5 video tutorials
 30-day email support

 EARLY ACCESS PRICE: Rp 2.5M (You saved Rp 1M!)

 DOWNLOAD NOW:
Google Drive: [LINK]
Password: [if applicable]

⏱ SETUP TIME: 30 minutes (watch video first)

 SUPPORT: support@[domain].com (I respond within 24h)

Questions before downloading? Reply to this email.

Let's grow your business together! [Your Name]
P.S. Share with a friend -> They get 20% off, you get Rp 500K credit.
```

**10:00 AM - Social Media Announcement**

**LinkedIn Post:**
```
LAUNCHING TODAY: FNB Dashboard for Indonesian Restaurants

After 15 validation calls and 2 weeks of building, I'm excited to launch:

Power BI Dashboard specifically for F&B businesses
 30 metrics (revenue, costs, staff, customers)
 Pre-formatted Excel templates (the key differentiator)
 Works offline (no monthly fees)
 30-minute setup (vs 8 hours other templates)

Built for Indonesian SME restaurants (1-5 outlets, Rp 250M-12B revenue).

Early access: Rp 2.5M (normally Rp 3.5M)
Limited to first 10 customers.

See live demo: [Calendly link]
Info: [Website/Landing page]

[Screenshot of dashboard]

#FnB #PowerBI #DataAnalytics #RestaurantTech #IndonesiaStartup
```

**Facebook Groups Post:**
```
Halo teman-teman F&B!

Saya baru launching dashboard khusus untuk resto/café.

Problem: Tracking sales, menu performance, staff performance itu ribet. Excel manual 4 jam/minggu.

Solution: Power BI dashboard + Excel templates. 30 detik cek performa bisnis.

Features:
 Revenue tracker + target
 Menu analysis (which items profitable)
 Staff leaderboard (gamification)
 Peak hours heatmap

Price: Rp 2.5M one-time (early bird, 10 slots)
Setup: 30 minutes
Support: 30 days included

Demo: [Link]
Info: DM me

[Screenshot]
```

**Instagram Story:**
```
[Slide 1: Dashboard screenshot]
"New launch! "

[Slide 2: Before/After]
"Before: 4 hours manual Excel "
"After: 30 seconds dashboard "

[Slide 3: CTA]
"Swipe up for demo "
Link: [Calendly or WhatsApp]
```

**12:00 PM - WhatsApp Blast (Warm Leads)**

Send to 20-30 warm leads:
```
Hi [Name]!

Quick update: Dashboard saya officially launch hari ini!

Remember I showed you mockup kemarin? Now it's real and ready to use.

 30 metrics otomatis
 Excel templates included
 30 min setup (gratis video tutorial)

Early access: Rp 2.5M (save Rp 1M)
First 10 customers only.

Mau lihat demo? Free 15-min call: [Calendly link]

Or langsung download: [Payment link]

Let me know kalau ada questions!

[Your Name]
```

---

#### Task Block D35: Launch Day Operations (Ongoing)

**Monitor Channels (Every 2 Hours):**
- [ ] Check email inbox -> Respond to questions within 2h
- [ ] Check WhatsApp -> Reply immediately (within 30 min)
- [ ] Check social media comments -> Engage
- [ ] Check Midtrans dashboard -> Track sales

**Track Metrics (Real-Time):**
- [ ] Google Sheet: "Launch Day Tracker"
 ```
 Time | Channel | Lead Name | Action | Status | Notes
 09:15 | Email | Budi | Opened email | Warm | -
 09:30 | WhatsApp| Siti | Downloaded | Hot | Payment pending
 10:00 | LinkedIn| New lead | Commented | Cold | Asked for pricing
 ```

**Demo Call Workflow (If Booked):**
- [ ] 5 min before call: Review their business (LinkedIn stalk)
- [ ] Start call: "Thanks for interest! Tell me about your restaurant"
- [ ] Discovery: Use validation script (Day of Week questions)
- [ ] Demo: Screen share dashboard (15 min)
- [ ] Close: "Does this solve your problem? Ready to start setup today?"
- [ ] Follow-up: Send payment link + Google Drive link (if yes)

**First Sale Process:**
- [ ] Midtrans notification received
- [ ] Send confirmation email:
 ```
 Subject: Payment Confirmed - Your Dashboard is Ready!

 Hi [Name],

 Payment received! Rp 2.5M

 Here's your access:

 Download: [Google Drive link]
 Support email: support@[domain].com
 WhatsApp: +62-XXX (for urgent issues)

 NEXT STEPS:
 1. Download ZIP file
 2. Watch "Setup Video" (4 min)
 3. Install Power BI Desktop (free)
 4. Open dashboard and connect your data

 ⏱ Estimated setup: 30 minutes

 I'll check in with you in 48 hours to see how setup went.

 Questions? Reply to this email (I respond fast!).

 Welcome to the FNB Dashboard family!

 [Your Name]
 ```

- [ ] Add to customer database (Google Sheet):
 ```
 Name | Email | Phone | Business | Tier | Purchase Date | License Key | Support End Date
 ```

- [ ] Schedule 48-hour check-in (calendar reminder)

---

#### Task Block D36: End-of-Day Review

**6:00 PM - Daily Wrap-Up:**

**Calculate Day 1 Metrics:**
- [ ] Total sales: _____ (Target: 1-3)
- [ ] Total revenue: Rp _____ (Target: Rp 2.5M-7.5M)
- [ ] Demo calls conducted: _____
- [ ] Demo -> Sale conversion: _____%
- [ ] Leads generated: _____
- [ ] Social media engagement: (likes, comments, shares)

**Document Learnings:**
```markdown
# Launch Day Retrospective (Day 10)

## What Went Well
- [e.g., "Email open rate 60% (very good)"]
- [e.g., "First sale within 2 hours of launch"]

## What Didn't Go Well
- [e.g., "LinkedIn post got low reach (only 50 views)"]
- [e.g., "1 customer confused about Power BI Desktop install"]

## Surprises
- [e.g., "2 customers asked for multi-outlet immediately (T2 interest)"]

## Actions for Tomorrow
- [ ] Follow up with demo attendees who didn't buy
- [ ] Create LinkedIn ad campaign (if budget allows)
- [ ] Update FAQ with new question from customer

## Key Stats
- Sales: ___
- Revenue: Rp _____
- Pipeline: ___ demos booked for next week
```

---

### **Day 10 Completion Checklist:**

**End of Launch Day:**
- [ ] Launch executed (email, social, WhatsApp)
- [ ] First sale achieved (Target: 1+)
- [ ] Support requests answered (< 2h response)
- [ ] Demo calls conducted (if any)
- [ ] Customer database updated
- [ ] Metrics tracked
- [ ] Retrospective documented
- [ ] Commit to Git: "Day 10: T1-Basic Public Launch"

**Deliverables:**
- T1-Basic officially launched
- First paying customers onboarded
- Launch day metrics documented

**Next Phase:**
- [ ] Week 2: Continue sales & marketing (daily lead gen)
- [ ] Week 2: Customer support (answer questions, fix issues)
- [ ] Week 2: Gate 1A tracking (need 5+ sales by end of Week 2)
- [ ] Week 3-4: Build T1-Standard/Plus (add modules T1-A, T1-B, T1-C)
- [ ] Month 2: Build T2 Professional (multi-outlet, advanced features)

---

## WEEK 1 (DAYS 1-10) COMPLETE!

**What We Built:**
 Complete T1-Basic product (30 metrics, 3 dashboards, 4 Excel templates)
 Google Sheets mobile versions
 Comprehensive documentation (setup guide, 5 videos, FAQ)
 Sample data (10K realistic transactions)
 Launch materials (emails, social posts, landing page)
 Beta tested with 3-5 customers
 Publicly launched with first paying customer(s)

**Achievement Unlocked:**
 From validation to launch in 10 days (AI-accelerated)
 Product-market fit validated (customers willing to pay)
 Scalable foundation (modular architecture for T2/T3)

**Total Lines of Code/Content Created:**
- Python scripts: ~300 lines
- DAX measures: ~1,000 lines
- Documentation: ~10,000 words
- Excel formulas: ~200 formulas across 4 templates

---

**NEXT SECTIONS TO BUILD (If Needed):**
- Week 2: Beta Refinement & Scale (daily sales activities, support, bug fixes)
- Week 3-4: T1-Standard/Plus Modules (T1-A, T1-B, T1-C)
- Week 5-6: T2 Professional Build (multi-outlet, advanced modules P1-P4)
- Week 7-8: T3 Strategic Build (executive modules S1-S4, automation)
- Operations: Delivery SOPs, customer onboarding workflows, support triage
- Marketing: Lead gen playbooks, demo call scripts, email sequences

**Would you like me to continue with Week 2-4 plans, or focus on a specific area (operations, marketing, T2/T3 builds)?**

