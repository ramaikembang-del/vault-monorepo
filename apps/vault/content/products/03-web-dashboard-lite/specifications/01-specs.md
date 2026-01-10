# Web Dashboard Lite - Product Specifications
**E1: Freemium Analytics for Phase 1 Mikro**

**Product ID:** E1 (Pillar 3 - Expansion)  
**Status:** PLANNED - Launch Sprint 4 (2026 Q4)  
**Target:** Phase 1 Mikro (street food, small warungs)

---

## Product Overview

**What:** Offline-first Electron desktop app with basic P&L analytics, freemium model  
**Why:** Test if Phase 1 (non-tech-savvy, low-income operators) will engage with analytics tools  
**Revenue Model:** Free forever (validation focus), upsell to paid Rp 50-75K/month (Phase 2)

---

## Target Customer

**Persona:** Siti (Phase 1 - Mikro Bertahan)
- Street food vendor or small warung
- Rp 5-50M revenue/year
- Currently uses paper/WhatsApp for tracking
- Has smartphone but no laptop/desktop

**TAM:** 500K+ F&B micro businesses in Indonesia

**Pain Points:**
- "I don't know if I'm making profit or just breaking even"
- "I can't see patterns (which days are good, which are bad)"
- "Tax season is nightmare (no organized records)"

---

## Core Features (Phase 1 - Free)

### Feature 1: Manual Data Entry
- **What:** Simple form to input daily revenue & expenses
- **Fields:** Date, Revenue (Rp), Expenses (Rp), Notes (optional)
- **UX:** Large buttons, Bahasa Indonesia, offline-first

### Feature 2: Basic P&L Chart
- **What:** Visual chart showing profit/loss over time
- **Views:** 7-day, 30-day
- **Insights:** "Anda untung Rp 2.5M bulan ini (+12% vs bulan lalu)"

### Feature 3: CSV Export
- **What:** Export data for tax filing
- **Format:** Excel-compatible CSV
- **Use Case:** Share with accountant

### Feature 4: Offline Storage
- **What:** SQLite local database (no internet required)
- **Why:** Phase 1 often has unreliable internet

---

## Freemium Limits (Phase 2 - Paid Tier)

**Free Forever:**
- 30-day history only
- 1 location
- Basic P&L chart
- Manual entry

**Paid Tier (Rp 50-75K/month):**
- 12+ months history (YoY comparisons)
- Multi-location (up to 5)
- Category breakdown (Food, Beverage, Other)
- Weekly summary emails

---

## Technical Stack

**Desktop App:** Electron (cross-platform: Windows, Mac)  
**Database:** SQLite (local, offline-first)  
**UI Framework:** React or plain HTML/CSS (keep simple)  
**Backend:** Supabase (for paid tier sync only)

**Build Time:** 2-3 weeks (AI-codeable via Cursor/Claude)

---

## Success Metrics

**Phase 1 (Validation):**
- 50+ downloads (Sprint 1)
- 20% activation (users who enter 7+ days of data)
- 10% engagement (use 3+ times/week)

**Phase 2 (Monetization):**
- 5-10% freemium→paid conversion
- Rp 1-2M MRR (20-40 paid users × Rp 50K)

---

## Competitive Positioning

**vs Excel:** Easier (no formulas), visual (charts)  
**vs Full SaaS (Product 05):** Simpler, offline, free  
**vs Pen & Paper:** Organized, shows trends

---

## Go-to-Market (Sprint 4)

**Channel 1:** Facebook groups (Pengusaha PKL, Warung communities)  
**Channel 2:** Instagram influencers (street food bloggers)  
**Channel 3:** Word-of-mouth (early users = evangelists)

**Marketing Message:** "Analytics untuk warung, bukan untukPerusahaan besar. Gratis selamanya."

---

## Roadmap

**Sprint 4 (Launch):** Free version only, 50+ users  
**Sprint 5:** Add paid tier limits, test conversion  
**Year 2:** Mobile app (iOS/Android), cloud sync

---

**Status:** PLANNED  
**Launch:** Sprint 4 (Q4 2026)  
**Owner:** Product Team
