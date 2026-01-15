# Product Requirement Document (PRD): Products Lab

**Product:** Products Lab (Internal)  
**Type:** Internal R&D / UI Playground  
**Status:** APPROVED  
**Access:** Internal Team Only  
**Domain:** `vault.klario-world.com/products`  
**Parent:** Clario Vault (see `00-vault-overview-prd.md`)

---

# Part I: Foundation

## 📋 Partner Summary

| Field | Details |
| :--- | :--- |
| **For** | UI Experiments & Component Testing |
| **Goal** | The "Workshop". Test ideas without breaking the main site. |
| **Key Actions** | • View New Experiments<br>• Approve UI Changes<br>• Check Component Library |

---

## 🧪 1. Executive Summary

**Products Lab** is the internal UI/UX experimentation workbench for the 2-partner team. It serves as a shared sandbox to generate, test, and refine interface components collaboratively before promoting them to production sites.

**Core Functions:**
1. **The Sandbox:** Safe environment to test "crazy" UI experiments without breaking production
2. **The Library:** Live component showcase and pattern documentation

---

## 2. Strategic Context

**Problem:** AI coding generates code fast. We need a place to "verify" and "experience" UI experiments before merging to production.

**Solution:** Interactive playground with live component previews and throwaway experiment zones.

**Users (2-Partner Team):**
- **Partner 1 (Product):** Rapid prototyping & technical experiments
- **Partner 2 (Marketing):** Visual experiments & copy variations
- **Goal:** Shared workbench for product decisions

---

## 3. Product Scope

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

### 3.2 Experiment Collaboration (Sprint 3+)

**Ownership & Attribution:**
- Track who created each experiment (Partner 1 vs 2)
- "Assigned To" field for requested prototypes

**Review Workflow:**
- **Status:** Draft → Ready for Review → Approved → Implementation
- **Approval:** Partner sign-off required for production
- **Feedback:** Basic comments/notes field

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

# Part II: Core Platform

## 4. Technical Architecture

### 4.1 Monorepo Structure

**Location:** `/apps/vault` (Products Lab is a section at `/products` route)

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

**Source of Truth:** `/packages/design-tokens/tailwind.config.ts`

**Tokens:**
* Colors: Primary (Blue), Accent (Orange), Success (Green)
* Typography: Plus Jakarta Sans (weights: 400, 500, 700)
* Spacing: Consistent 4px grid

**Sync:** Automatic (both Products Lab and Marketing Site import same config)

**See:** `../specifications/design-foundation.md` for complete token reference

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

**User Management:** Controlled via unified Vault admin panel at `/admin` route.

---

# Part III: Component System

## 5. Component Workbench

### 5.1 Live Preview & Props Interface

**Purpose:** Interactive component testing with real-time prop manipulation

**Features:**
* Live component rendering
* Interactive props table with type information
* State controls for testing
* Code snippet export

**Implementation:**
- Component: `ComponentPreviewCard.tsx`
- Props control system with type detection (string, boolean, number, enum)
- Copy-to-clipboard functionality

**See:** `../specifications/products-components.md` for complete implementation

### 5.2 Token Visualizer

**Purpose:** Interactive design token browser

**Features:**
* Live color swatches with hex/rgb values
* Typography specimens with actual rendered text
* Spacing scale visualization
* Copy-to-clipboard for all values

**Displays:**
- Color palette with hover-to-copy
- Typography scale with live specimens
- Spacing tokens with visual rulers

### 5.3 Shadcn UI Blocks

**Lab Layout Blocks:**

| Lab Section | Shadcn Block | Purpose |
|-------------|--------------|---------|
| **Navigation** | `sidebar-07` (collapsible) | Browse Experiments / Docs / Design Tokens |
| **Experiment Grid** | `bento-grid` | Showcase experiment thumbnails with hover previews |
| **Component Showcase** | `card-grid-hover` | Display UI components from `/packages/ui` |
| **Code Preview** | `code-block-with-copy` | Live code examples with syntax highlighting |
| **Tab Views** | `tabs-with-icons` | Switch: Playground / Docs / Tokens |
| **Design Tokens Table** | `data-table` | Display color palette, typography scale |

**Installation:**
```bash
cd apps/products-lab
npx shadcn@latest add sidebar-07 bento-grid card-grid-hover code-block tabs data-table
```

### 5.4 Custom Components

* **Live Preview Frame** - Iframe wrapper for rendering experiments in isolation
* **Token Visualizer** - Interactive design token browser with color swatches and type specimens
* **Experiment Metadata Card** - Created date, Last modified, Status (Active/Archived)

**See:** `../specifications/products-components.md` for complete implementation details

---

## 6. Component Library

### 6.1 Promoted Components

**Location:** `/packages/ui/src/`

**Lifecycle:**
1. **Experiment** - Created in `/experiments/`
2. **Graduate** - Used 3+ times → Move to `/packages/ui`
3. **Document** - Add Storybook story
4. **Deploy** - Available to all apps (Marketing, Vault)

### 6.2 Documentation Standards

**Each Component Includes:**
* Props table with TypeScript types
* Live interactive examples
* Code snippets (copy-paste ready)
* Usage guidelines
* Accessibility notes

### 6.3 Pattern Library

**"How We Do X at Clario":**
* Data fetching patterns
* Error handling strategies
* Form validation approaches
* Animation best practices
* Performance optimization techniques

**Format:** MDX with live code examples

---

# Part IV: Development Workflows

## 7. Experimentation Cycle

### 7.1 The "AI Loop" Workflow

**Standard Flow:**
1. **Request:** "Build a glassy pricing card with a hover tilt effect."
2. **Generate:** AI creates `/apps/products-lab/src/app/experiments/glass-card/page.tsx`
3. **Deploy:** Auto-deploys to `vault.klario-world.com/products/experiments/glass-card`
4. **Review:** User opens link, tests interactivity
5. **Refine:** "Make the shadow darker, add orange glow on hover."
6. **Iterate:** Repeat 2-5 until satisfied

### 7.2 "Throwaway Zone" Rules

**Location:** `apps/products-lab/src/app/experiments/`

**Rules:**
* **Lifespan:** Max 30 days (auto-archive script cleans old experiments)
* **No Tests Required:** Move fast, break things
* **Promotion Criteria:** If used 3+ times → Graduate to `/packages/ui`
* **Purpose:** Fail fast, learn quickly

### 7.3 Component Promotion Process

**Graduation Steps:**
1. **Move Code:**
   * From: `/apps/products-lab/experiments/`
   * To: `/packages/ui/src/`
2. **Add Documentation:**
   * Create Storybook story
   * Write props documentation
   * Add usage examples
3. **Test in Production Context:**
   * Import into Marketing Site
   * Deploy to preview URL
   * Final QA
4. **Merge:**
   * PR Review
   * Merge to main
   * Auto-deploy

---

## 8. Git & Deployment Strategy

### 8.1 Branching Strategy

* **Main Branch:** `main` (always deployable)
* **Lab Experiments:** Direct commits to `main` (Lab is the Wild West)
* **Marketing Site:** Feature branches with PR review

**Rationale:** Products Lab is for rapid experimentation. Marketing Site requires stability.

### 8.2 Deployment Pipeline

* **Lab:** Auto-deploy every commit to `vault.klario-world.com/products`
* **Marketing:** Deploy only on merge to `main`

**Build Time:**
* Lab: ~2 minutes (any commit)
* Marketing: ~3 minutes (main branch only)

---

# Part V: Metrics & Success

## 9. Success Criteria

### 9.1 Velocity

* **Idea to Visual Verification:** < 10 minutes
* **Component Graduation:** 3+ uses before promotion
* **Iteration Speed:** Multiple refine cycles per hour

### 9.2 Reusability

* **Target:** >60% of Marketing Site components originated in Lab
* **Tracking:** Component provenance metadata
* **Quality Gate:** No production regressions caused by CSS experiments

### 9.3 Design Consistency

* **Design Token Drift:** 0 divergence between Lab and Marketing configs
* **Component Variants:** All share same design token base
* **Typography:** 100% using design system (no ad-hoc font sizes)

### 9.4 Developer Experience

* **Hot Reload:** < 500ms for code changes
* **Build Feedback:** Clear error messages with line numbers
* **Documentation:** Every promoted component fully documented

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

**Last Updated:** January 15, 2026
