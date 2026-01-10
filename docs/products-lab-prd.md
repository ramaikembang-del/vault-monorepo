# Product Requirement Document (PRD): Products Lab

**Product:** Products Lab (Internal)
**Type:** Internal R&D / UI Playground
**Status:** APPROVED
**Access:** Internal Team Only
**Domain:** `vault.klario-world.com/products`
**Parent:** Clario Vault (see `vault-overview-prd.md`)

---

## 1. Executive Summary

**Products Lab** is the internal UI/UX experimentation playground for Clario. It serves as a safe sandbox to generate, test, and refine interface components before promoting them to production sites.

**Core Functions:**
1. **The Sandbox:** Safe environment to test "crazy" UI experiments without breaking production
2. **The Library:** Live component showcase and pattern documentation

---

## 2. Strategic Context

* **Problem:** AI coding generates code fast. We need a place to "verify" and "experience" UI experiments before merging to production.
* **Solution:** Interactive playground with live component previews and throwaway experiment zones.
* **Users:** Developers (You + AI), Designers (You).

---

## 3. Product Features & Scope

### 3.1 The "Playground" (Priority 1)

**Component Workbench:**
* Render isolated components (e.g., `<PricingCard variant="tier3" />`)
* Tweak props interactively
* Preview component states (hover, active, disabled)

**Experiment Pages:**
* Temporary pages to test full layouts (e.g., `/experiments/3d-visualizer`)
* Quick iteration without affecting shared components

**"Throwaway" Zone:**
* Location: `/experiments/` folder
* Explicitly designed for code that might be deleted tomorrow
* Lifespan: Max 30 days (auto-archive script)
* Promotion criteria: If used 3+ times → Graduate to `/packages/ui`

### 3.2 The "Library" (Component Documentation)

**Live Style Guide:**
* Color Palette (rendered live from design tokens)
* Typography Scale
* UI Elements (Buttons, Inputs, Cards, etc.)

**Component Docs:**
* Each promoted component with props table
* Live examples with code snippets
* Usage guidelines

**Pattern Library:**
* "How we do X at Clario" (e.g., data fetching, error handling, form validation)
* Code examples with best practices

---

## 4. Technical Architecture

### 4.1 Monorepo Structure

**Location:** `/apps/products-lab` in `clario-web` monorepo

**Shared Resources:**
* `/packages/ui` - Promoted components
* `/packages/design-tokens` - Tailwind config
* Imports from Marketing Site when testing

### 4.2 Tech Stack

* **Framework:** Next.js 14 (App Router) + MDX
* **Styling:** Tailwind CSS (imports from `/packages/design-tokens`)
* **Component Library:** Shadcn/UI base + custom Clario components
* **Interactivity:** React Server Components + Client Components for experiments
* **Code Preview:** Shiki syntax highlighting

### 4.3 Deployment

* **Domain:** `vault.klario-world.com/products`
* **Hosting:** Vercel (part of Vault app)
* **Access Control:** Clerk (inherited from Vault session)
* **Note:** Products Lab is a **section** of Vault, not a standalone site

### 4.4 Design Token Sync

* **Source of Truth:** `/packages/design-tokens/tailwind.config.ts`
* **Tokens:**
 * Colors: Primary (Blue), Accent (Orange), Success (Green)
 * Typography: Plus Jakarta Sans (weights: 400, 500, 700)
 * Spacing: Consistent 4px grid
* **Sync:** Automatic (both Products Lab and Marketing Site import same config)

### 4.5 Authentication (Clerk)

**Middleware Setup:**
```typescript
// apps/products-lab/middleware.ts
import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
 publicRoutes: [], // All routes require login
})

export const config = {
 matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
```

**Access Control:**
```typescript
// Check if user has Products Lab access
import { currentUser } from '@clerk/nextjs'

export default async function ProductsLabPage() {
 const user = await currentUser()
 const hasAccess = user?.publicMetadata?.productsLabAccess === true

 if (!hasAccess) {
 return <div>Access Denied. Contact admin at accounts.klario.world</div>
 }

 return <div>Welcome to Products Lab!</div>
}
```

**User Management:** Controlled via `accounts.klario.world` admin panel.

---

## 5. The "AI Loop" Workflow

### 5.1 Experimentation Cycle

1. **Request:** "Build a glassy pricing card with a hover tilt effect."
2. **Generate:** AI creates `/apps/products-lab/src/app/experiments/glass-card/page.tsx`
3. **Deploy:** Auto-deploys to `products.klario.world/experiments/glass-card`
4. **Review:** User opens link, tests interactivity
5. **Refine:** "Make the shadow darker, add orange glow on hover."
6. **Iterate:** Repeat 2-5 until satisfied

### 5.2 Component Promotion Process

1. **Graduate to Shared:**
 * Move from `/apps/products-lab/experiments/` to `/packages/ui/src/`
 * Add Storybook story for documentation
2. **Test in Marketing:**
 * Import into `apps/marketing-site/src/app/page.tsx`
 * Deploy to preview URL for final QA
3. **Merge to Production:**
 * PR Review → Merge → Auto-deploy

### 5.3 "Throwaway Zone" Rules

* **Location:** `apps/products-lab/src/app/experiments/`
* **Lifespan:** Max 30 days (auto-archive script cleans old experiments)
* **No Tests Required:** Move fast, break things
* **Promotion Criteria:** If used 3+ times → Graduate to `/packages/ui`

---

## 6. Git Workflow

### 6.1 Branching Strategy

* **Main Branch:** `main` (always deployable)
* **Lab Experiments:** Direct commits to `main` (Lab is the Wild West)
* **Marketing Site:** Feature branches with PR review

### 6.2 Deployment Pipeline

* **Lab:** Auto-deploy every commit to `products.klario.world`
* **Marketing:** Deploy only on merge to `main`

---

## 7. Shadcn UI Blocks

### 7.1 Lab Layout Blocks

| Lab Section | Shadcn Block | Purpose |
|-------------|--------------|---------|
| **Navigation** | `sidebar-07` (collapsible) | Browse Experiments / Docs / Design Tokens |
| **Experiment Grid** | `bento-grid` | Showcase experiment thumbnails with hover previews |
| **Component Showcase** | `card-grid-hover` | Display UI components from `/packages/ui` |
| **Code Preview** | `code-block-with-copy` | Live code examples with syntax highlighting |
| **Tab Views** | `tabs-with-icons` | Switch: Playground / Docs / Tokens |
| **Design Tokens Table** | `data-table` | Display color palette, typography scale |

### 7.2 Installation

```bash
cd apps/products-lab
npx shadcn@latest add sidebar-07 bento-grid card-grid-hover code-block tabs data-table
```

### 7.3 Custom Components

* **Live Preview Frame** - Custom iframe wrapper for rendering experiments in isolation
* **Token Visualizer** - Custom component to render color swatches and type specimens
* **Experiment Metadata Card** - Created date, Last modified, Status (Active/Archived)

---

## 8. Success Metrics

* **Velocity:** Time from "Idea" to "Visual Verification" < 10 minutes
* **Reusability:** % of Marketing Site components that originated in Lab (Target: >60%)
* **Stability:** Zero production regressions caused by CSS experiments
* **Design Token Drift:** 0 divergence between Lab and Marketing configs

---

**Last Updated:** January 8, 2026
**Next Review:** After first deployment

---

## PRD Approval Checklist

### Pre-Development Requirements

**Products Lab Specific:**
- [ ] Shadcn UI components identified for Lab layout (sidebar-07, bento-grid, etc.)
- [ ] Experiment folder structure defined (`/experiments/` with 30-day auto-archive)
- [ ] Component promotion criteria documented
- [ ] Live preview frame component designed

**Technical:**
- [ ] Framer Motion installed for animations
- [ ] Shiki syntax highlighting configured
- [ ] Hot module replacement tested for rapid iteration

### Stakeholder Approvals

- [ ] **Founder Approval** - Playground scope and 'throwaway zone' concept approved
- [ ] **Ready for AI Loop** - Workflow for generating experiments confirmed

### Ready-to-Build Criteria

- [ ] Vault Overview PRD approved (parent)
- [ ] Design tokens finalized
- [ ] At least 3 experiment ideas documented

---

**Status History:**
- **DRAFT** (Jan 8, 2026) - Initial PRD created
- **REVIEW** (Jan 9, 2026) - Features defined, awaiting approval
- **APPROVED** (TBD) - Ready for development
- **IMPLEMENTED** (TBD) - Live at vault.klario-world.com/products
