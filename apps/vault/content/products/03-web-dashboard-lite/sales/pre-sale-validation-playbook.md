# E1: Pre-Sale Validation Playbook (Freemium Model)
**Product:** Web Dashboard Lite (Freemium → Paid Conversion)
**Purpose:** Validate "Will Phase 1 Mikro ENGAGE with analytics?" before full build
**Timeline:** Week 1-2 (parallel with template development)
**Success Criteria:** 50+ free signups, 30%+ 7-day engagement

---

## Why Validate E1 First?

**E1 scored 18/21 - HIGHEST in entire product portfolio**

From prioritization-framework.md:
> "Answers THE foundational question: 'Will Phase 1 Mikro engage with analytics?'"

**The Risk:**
- Building freemium product without knowing if free users will engage
- Phase 1 Mikro (500K+ TAM) might not care about analytics
- Electron app takes 2-3 weeks to build

**The Opportunity:**
- Freemium = low barrier to test engagement
- Offline-first = trust feature for Phase 1
- If 50+ sign up + 30% engage → validates full build

---

## Week 0: Pre-Sale Validation Goals

### Primary Goal
**Validate engagement hypothesis:** Free users will open the app 3+ times in first 7 days

### Success Metrics

| Metric | Minimum | Target | Stretch |
|--------|---------|--------|---------|
| **Free signups** | 50 | 100 | 200 |
| **7-day engagement** | 30% (15 users) | 50% (50 users) | 70% (140 users) |
| **Feature usage** | 2+ metrics viewed | 5+ metrics viewed | Daily active usage |
| **Paid interest** | 5% (2-3 ask about paid) | 10% (5-10) | 15% (15-30) |

### Decision Gates

** PROCEED to full build if:**
- 50+ free signups AND
- 30%+ engage (open app 3+ times in 7 days) AND
- 2+ users ask about paid features

**ITERATE if:**
- <50 signups but >30% engagement → Marketing problem, not product
- >50 signups but <30% engagement → Product/value prop problem

** PAUSE if:**
- <30 signups AND <20% engagement → Fundamental hypothesis failure

---

## Validation Assets (Minimum Viable)

### Asset 1: Landing Page (Simple)

**Purpose:** Capture interest without building full app

**What to build:**
- 1-page website explaining value prop
- Waitlist signup form (name, WhatsApp, restaurant name)
- 3-5 screenshots of planned dashboard
- "Join 50+ F&B owners testing free analytics"

**Time:** 2-3 hours (Carrd, Notion, or simple HTML)

**Copy template:**
```
Headline: "Dashboard Gratis untuk Restoran Anda"
Subhead: "Lihat omzet, menu terlaris, dan performa staff—offline, aman di HP Anda"

Features:
 100% gratis (tidak perlu kartu kredit)
 Offline (data tidak pernah keluar dari HP)
 6 metrik penting (omzet, top menu, staff performance)
 Instalasi 5 menit

CTA: "Daftar Waitlist Gratis" → WhatsApp atau form
```

### Asset 2: MVP Mockups (Figma/Canva)

**Purpose:** Show value visually without coding

**What to create:**
1. Dashboard home screen (revenue graph)
2. Top 5 menu items screen
3. Staff performance screen

**Level of fidelity:** Medium (Figma or Canva mockups, not clickable)

**Time:** 3-4 hours

### Asset 3: Waitlist Funnel

**Tech stack:**
- Google Forms OR Tally.so (free tier)
- Zapier → Google Sheets
- WhatsApp Business (manual for <100 people)

**Questions to ask:**
1. Nama & nama restoran
2. Nomor WhatsApp
3. Berapa outlet? (1 / 2-5 / 5+)
4. Omzet per bulan? (<10M / 10-50M / >50M)
5. Apa kendala data terbesar? (open text)

---

## Validation Channels (Where to Find Users)

### Channel 1: Facebook Groups (Primary)

**Target groups:**
- "Komunitas Pemilik Warung Makan"
- "Bisnis Kuliner Indonesia"
- "Resto & Cafe Owner Indonesia"

**Outreach approach:**
```
"Halo teman-teman pemilik resto/cafe!

Saya lagi bikin dashboard GRATIS buat track omzet & menu terlaris.

Offline (data di HP Anda sendiri), gampang, cocok buat yang belum pernah pakai analytics.

Ada yang mau coba jadi beta tester? Nanti saya kasih akses duluan + dapet fitur premium gratis 3 bulan.

Link: [waitlist link]

Terima kasih! "
```

**Posting frequency:** 2-3 groups per day (avoid spam)

### Channel 2: WhatsApp Direct Outreach

**Existing networks:**
- Paguyuban contacts
- Previous restaurant consulting clients
- Founder's personal network

**Message template:**
```
"Mas/Mba [Name],

Mau tanya, apakah Mas/Mba pernah kesulitan track omzet harian atau menu mana yang paling laris?

Saya lagi bangun tool gratis buat bantu resto track 6 metrik penting—offline di HP, gampang.

Boleh saya kirim demo video 2 menit? Kalau cocok, nanti saya kasih akses duluan gratis.

Tertarik?"
```

### Channel 3: Instagram Stories (Visual)

**Content:**
- Behind-the-scenes: "Building analytics tool for F&B"
- Poll: "Pemilik resto, pernah kesulitan track data?"
- Swipe-up to waitlist (if >10K followers, else link in bio)

**Post frequency:** 3-5 stories per week

### Channel 4: LinkedIn (Lite)

**Target:** Modern F&B owner personas (Amanda 2.0, Budi 2.0)

**Post template:**
```
"Launching free analytics dashboard for Indonesian F&B—offline-first, no credit card.

Beta testers get:
 Free lifetime access
 3 months premium features
 Priority support

DM if interested."
```

---

## Validation Conversations (What to Ask)

### First Contact (Waitlist Signup)

**WhatsApp auto-reply:**
```
"Terima kasih sudah daftar waitlist!

Nama saya [Your Name], founder [Company].

Boleh tanya:
1. Apa challenge terbesar Anda dalam track data resto saat ini?
2. Sudah pernah coba tool analytics? (Excel / POS report / lainnya)
3. Kalau ada dashboard gratis yang gampang, fitur apa yang paling penting?

Jawaban Anda sangat membantu saya bikin produk yang pas!"
```

### Follow-Up (Week 1)

**Goal:** Gauge engagement willingness

**Script:**
```
"Mas/Mba [Name],

Dashboard udah jadi 40%! Mau kirim sneak peek video 2 menit?

Nanti kalau cocok, saya kasih akses duluan buat install—masih beta tapi bisa pakai langsung.

Tertarik lihat demonya?"
```

### Demo Call (Optional, for high-intent users)

**Agenda:**
1. Show mockups (5 min)
2. Ask pain points (10 min)
3. Gauge willingness to use free version (5 min)
4. Ask: "Kalau gratis, apakah Anda akan install dan coba 1 minggu?"

---

## Validation Timeline (2 Weeks)

### Week 1: Build Assets + Launch
- **Day 1-2:** Create landing page + mockups
- **Day 3:** Set up waitlist funnel
- **Day 4-7:** Post to Facebook groups, WhatsApp outreach, Instagram stories

**Target:** 30-50 signups by end of Week 1

### Week 2: Engage + Qualify
- **Day 8-10:** WhatsApp follow-ups, demo calls
- **Day 11-14:** Gauge engagement signals (replies, questions, demo requests)

**Target:** 50+ total signups, 10-15 high-engagement conversations

---

## Decision Framework (End of Week 2)

### Signal 1: Signup Volume

| Signups | Interpretation | Action |
|---------|----------------|--------|
| **>100** | Strong demand | PROCEED—build MVP |
| **50-100** | Moderate demand | PROCEED with caution |
| **<50** | Weak demand | ITERATE messaging or PAUSE |

### Signal 2: Engagement Quality

| Engagement | Interpretation | Action |
|------------|----------------|--------|
| **>30% reply rate** | High engagement | PROCEED |
| **15-30% reply** | Medium engagement | Test value prop more |
| **<15% reply** | Low engagement | PAUSE—rethink value prop |

### Signal 3: Paid Interest

| Paid interest | Interpretation | Action |
|---------------|----------------|--------|
| **>10 ask about paid** | Conversion potential | PROCEED—build paid tiers |
| **5-10 ask** | Some interest | PROCEED with freemium-first |
| **<5 ask** | Low monetization | Build free, test conversion later |

---

## Success Patterns to Look For

### Green Flags (PROCEED signals)
- "Ini yang saya cari! Kapan bisa pakai?"
- "Berapa harganya? Saya mau bayar sekarang."
- "Bisa install di 3 outlet saya?"
- Unprompted questions about features
- Asks for demo/tutorial

### Yellow Flags (ITERATE signals)
- "Interesting, tapi saya masih pakai Excel"
- "Nanti saya pikir dulu"
- "Kalau gratis selamanya, saya mau"
- Signup but no follow-up reply

### Red Flags (PAUSE signals)
- "Gak perlu, POS saya udah ada report"
- "Terlalu ribet, saya gak ngerti analytics"
- No replies after 2-3 follow-ups
- "Saya tunggu dulu kalau udah jadi"

---

## What We're Learning

**Primary Research Questions:**
1. Do Phase 1 Mikro owners CARE about analytics?
2. Will they install a new app (even free)?
3. What features matter most? (Revenue? Menu analysis? Staff?)
4. Is offline-first a compelling value prop?
5. What's their tolerance for "beta"?

**Validation Data to Collect:**
- Signup conversion rate (landing page views → signups)
- Reply rate (waitlist → engaged conversation)
- Demo request rate (signups → "show me more")
- Feature interest distribution (what they ask about most)

---

## Validation Budget

| Item | Cost | Time |
|------|------|------|
| Landing page | Rp 0 (Carrd free / Notion) | 2-3 hours |
| Mockups | Rp 0 (Figma free) | 3-4 hours |
| Waitlist tool | Rp 0 (Google Forms + Sheets) | 1 hour |
| WhatsApp Business | Rp 0 (free tier) | 1 hour setup |
| **Total** | **Rp 0** | **7-9 hours** |

**No code, no infrastructure, no risk.**

---

## After Validation: Next Steps

### If PASS (50+ signups, 30%+ engagement):
1. **Week 3-4:** Build Electron MVP (6 features)
2. **Week 5:** Launch to waitlist (free tier)
3. **Week 6:** Measure 7-day engagement, iterate
4. **Week 7:** Launch paid tier if conversion signals exist

### If ITERATE (weak messaging but some interest):
1. Run 5-10 customer interviews
2. Refine value prop based on feedback
3. Re-run validation with improved messaging
4. Delay build 1-2 weeks

### If PAUSE (fundamental hypothesis failure):
1. Document learnings
2. Pivot to different segment (Phase 2 instead of Phase 1?)
3. OR: Make E1 an add-on to A1 template buyers (not standalone)

---

## Validation Playbook Owner

**DRI:** Sales/Marketing lead
**Support:** Product team (for mockups), CS (for WhatsApp engagement)
**Timeline:** Week 1-2 (before Electron build starts)
**Budget:** Rp 0
**Success Gate:** 50+ signups, 30%+ engagement → GREENLIGHT full build

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/marketing/10-validation-gtm-checklist|GTM Checklist]]** - Week 0 validation checklist
- **[[products/03-web-dashboard-lite/marketing/03-launch-campaign|Launch Campaign]]** - Post-validation launch plan
- **[[products/03-web-dashboard-lite/specifications/05-pmf-validation-plan|PMF Validation Plan]]** - Success criteria and gates
- **[[products/03-web-dashboard-lite/marketing/01-one-pager|One-Pager]]** - Waitlist landing page copy

---

**Remember:** E1 is Sprint 1's #1 validation goal (18/21 score). This playbook ensures we validate engagement BEFORE committing 2-3 weeks to Electron development.
