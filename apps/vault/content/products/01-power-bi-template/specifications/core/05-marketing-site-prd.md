# Product Requirement Document (PRD): Marketing Landing Page

**Product:** Power BI Marketing Site
**Type:** Customer-Facing (External)
**Status:** APPROVED
**Target Launch:** Week 3 (Post-Validation Phase)
**Domain:** `pwbi.klario.website`

---

## 1. Executive Summary

The **Marketing Landing Page** is the primary conversion engine for "Product 01: Power BI Template".
Its sole purpose is to convert cold traffic (from Facebook/LinkedIn) and warm leads into **paying customers** (or validated leads).

**Core Philosophy:** "Validate First, Build Second."
This site will initially serve as the "Sales Letter" to capture deposits/commits during Week 0-2.

---

## 2. Strategic Context

* **Role in Ecosystem:** The "Storefront" for the Clario Power BI ecosystem.
* **Target Audience:** F&B Owners (Personas: Dimas, Rina, Amanda).
* **Key Behavior:** Mobile-first browsing (WhatsApp link clicks), short attention span.

---

## 3. Product Features & Scope

### 3.1 Core Pages (MVP)
 * **Midtrans Integration:** QRIS, Bank Transfer (BCA, Mandiri, BRI), Installment options (Kredivo, Akulaku).
 * **Alternative:** Direct WhatsApp order ("DM 'DEMO' untuk order").
 * Post-purchase: Auto-email with download link + WhatsApp onboarding message.

### 3.2 Indonesian Localization (Critical)
* **Language:** Bahasa Indonesia (Primary), English toggle (Optional for Tier 3 enterprise).
* **Content Sources:**
 * Hero Copy: `marketing/06-making-it-sexy-playbook.md` L27-29, L273-289
 * Testimonials: `../../marketing/assets/10-one-pager.md` L108-124
 * Pricing Table: `../../marketing/assets/10-one-pager.md` L71-82
 * FAQ: `marketing/06-making-it-sexy-playbook.md` L318-331
* **WhatsApp-First CTAs:**
 * Primary: "Hubungi via WhatsApp" linked to `NEXT_PUBLIC_WA_NUMBER`
 * *Implementation:* Use environment variable. Start with personal number for testing, swap to Business number later without code changes.
 * Click-to-WhatsApp button on every page (bottom-right sticky).
* **Payment Methods:** Midtrans (QRIS, Bank Transfer, Kredivo/Akulaku installments).

### 3.3 Key Technical Requirements ("Blitz Build")
* **Framework:** Next.js 14 (App Router).
* **Styling:** Tailwind CSS (Clario Design System v1 - colors from playbook).
* **Hosting:** Vercel.
* **Domain:** `pwbi.klario.website`
* **Analytics:** Google Analytics 4 + Meta Pixel (for retargeting).
* **CMS:** Hardcoded MDX initially (copy-paste from markdown files).
* **WhatsApp Integration:** Click-to-chat links with pre-filled messages.

---

## 4. Design & Aesthetics ("Making It Sexy")

### 4.1 Cultural Positioning Elements
* **#1: The "Glasses Metaphor"** - Visual + Tagline
    * *Implementation Strategy:* Use a **CSS-based "Compare Slider" component** (Shadcn ready). Slide left = Blurred, greyscale dashboard. Slide right = Sharp, colorful dashboard. No complex 3D asset needed.
* **#2: Before/After Split Screen** - Excel Hell vs Dashboard Heaven (L306-316)
* **#3: "Modal Tipis" Framing** - "Mulai dari Rp 3.5 juta (modular, bukan langganan)" everywhere
* **#4: Social Proof Local** - Real Indonesian names (Dimas, Amanda, Budi) with photos

### 4.2 Visual Design
* **Vibe:** Approachable Expert (not intimidating, but clearly professional).
* **Palette:**
 * **Primary (Trust):** Slate 900 (`#0f172a`) - Deep, professional dark blue/grey.
 * **Accent (Action):** Orange 500 (`#f97316`) - High energy, impossible to miss on buttons.
 * **Success (Results):** Emerald 500 (`#10b981`) - For "Profit" and checkmarks.
 * **Background:** White (`#ffffff`) & Slate 50 (`#f8fafc`).
* **Typography:** Plus Jakarta Sans (modern Indonesian brand standard).
* **Imagery:** Real dashboard screenshots, NOT stock photos.

---

## 5. Success Metrics

* **Conversion Rate:** >5% (Visitor to Lead/Sale).
* **Page Load Speed:** <2s (Critical for mobile users in Indonesia).
* **Bounce Rate:** <60%.

---

## 6. Development Timeline (Blitz)

* **Day 1:** Scaffold Project + Component Library (Button, Hero, Card).
* **Day 2:** Content Implementation (Copy from One-Pager).
* **Day 3:** Mobile Optimization + Tracking Setup.
* **Day 4:** Live on Vercel.

---

## 7. Content Source Mapping (Critical for AI Build)

| Page Section | Source File | Lines | Notes |
|--------------|-------------|-------|-------|
| Hero Headline | `marketing/06-making-it-sexy-playbook.md` | L27-29 | "Excel Tetap Dipake..." |
| Hero Visual | Playbook | L36-66 | Glasses metaphor animation |
| Testimonials | `../../marketing/assets/10-one-pager.md` | L108-124 | Dimas, Amanda, Budi |
| Pricing Table | One-Pager | L71-82 | Modular 3-tier |
| FAQ Section | Playbook | L318-331 | 4 key objections |
| Demo Video Script | Playbook | L505-568 | 3-minute walkthrough |
| Before/After | Playbook | L306-316 | Time savings visual |

---

## 8. Shadcn UI Blocks Mapping (Speed Strategy)

### 8.1 Component Assembly Guide

| Section | Shadcn Block | Customization Required |
|---------|--------------|------------------------|
| **Hero** | `hero-with-image` | Replace image with "Glasses Metaphor" visual, swap copy with Bahasa from playbook L27-29 |
| **Before/After** | `feature-comparison-02` | 2-column layout, content from playbook L306-316 |
| **Social Proof** | `testimonial-carousel` | 3 cards (Dimas, Amanda, Budi), photos + quotes from one-pager L108-124 |
| **Pricing** | `pricing-table-03` | 3 tiers, modular add-ons section, content from one-pager L71-82 |
| **FAQ** | `faq-accordion` | 4 items from playbook L318-331 |
| **CTA Footer** | `cta-with-background` | WhatsApp button (sticky bottom-right on mobile) |

### 8.2 Installation Command
```bash
npx shadcn@latest add hero-with-image testimonial-carousel pricing-table-03 faq-accordion cta-with-background
```

### 8.3 Custom Components (Non-Block)
* **WhatsApp Sticky Button** - Custom (not in Shadcn, use Floating Action Button pattern)
* **Glasses Animation** - Custom (Framer Motion + Lottie for "Excel → Dashboard" transform)

---

## 9. Future Roadmap (Post-Sprint 1)

* **Blog/ROI Calculator:** SEO content pages.
* **Affiliate Portal:** For partners to track referrals.
* **Customer Login:** For future SaaS platform.

---

## 10. PRD Approval Checklist

### 10.1 Pre-Development Requirements

**Domain & Infrastructure:**
- [ ] Domain `pwbi.klario.website` purchased and DNS configured
- [ ] Vercel account created and project initialized
- [ ] GitHub repository created (`clario-web` monorepo)

**Third-Party Services:**
- [ ] WhatsApp Business number registered and verified
- [ ] Midtrans merchant account created (payment gateway)
- [ ] Google Analytics 4 property created (tracking ID obtained)
- [ ] Meta Pixel created (Pixel ID obtained for retargeting)

**Design Assets:**
- [ ] Design tokens finalized (exact hex codes documented)
- [ ] Logo files exported (SVG, PNG formats)
- [ ] Product screenshots/demo video ready

**Content Readiness:**
- [ ] Indonesian copy written for all sections (Hero, Pricing, FAQ)
- [ ] Testimonials collected (Dimas, Amanda, Budi quotes + photos)
- [ ] WhatsApp pre-filled message text finalized

**Technical Setup:**
- [ ] Clerk account created (for Vault auth)
- [ ] Shadcn UI components tested locally
- [ ] Next.js 14 project scaffolded

### 10.2 Stakeholder Approvals

- [ ] **Founder Approval** - Core features and timeline approved
- [ ] **Operations Partner Review** (If applicable) - No blockers identified
- [ ] **Budget Confirmed** - Vercel free tier sufficient

### 10.3 Ready-to-Build Criteria

**Move to APPROVED status when:**
- All Pre-Development Requirements checked
- Stakeholder approvals obtained
- Build timeline confirmed (can start within 1 week)

---

**Status History:**
- **DRAFT** (Jan 8, 2026) - Initial PRD created
- **REVIEW** (Jan 9, 2026) - Core requirements complete, awaiting checklist validation
- **APPROVED** (TBD) - Ready for development
- **IMPLEMENTED** (TBD) - Site launched
