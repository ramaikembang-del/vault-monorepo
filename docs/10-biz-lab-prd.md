# Product Requirement Document (PRD): Biz Lab

**Product:** Biz Lab (Internal)
**Type:** Internal Documentation Browser
**Status:** APPROVED
**Access:** Internal Team Only
**Domain:** `vault.klario-world.com/biz`
**Parent:** Clario Vault (see `vault-overview-prd.md`)

---

## 1. Executive Summary

**Biz Lab** is an auto-generated documentation browser for Clario's business strategy, market analysis, and planning documents. It transforms scattered markdown files into a searchable, navigable knowledge base.

**Core Function:** "The Brain" - Central repository for strategic documentation.

---

## 2. Strategic Context

* **Problem:** Strategy docs are scattered across markdown files in `/biz` directory. Hard to browse, search, and cross-reference.
* **Solution:** Auto-generated documentation site (Shadcn MDX) that reads from `/biz` folder and renders as browsable wiki.
* **Users:** Strategy/Planning (You), Future team members (Operations Partner).

---

## 3. Product Features & Scope

### 3.1 Strategic Documentation Browser

**Auto-generated from `/biz` directory:**
* Market Analysis (`/biz/strategy/market-analysis`)
* Planning Docs (`/biz/strategy/planning`)
* Frameworks (`/biz/strategy/frameworks`)
* Financial Models (`/biz/financial`)

**Key Features:**
* **Full-text Search** - Find any concept across all strategy docs
* **Sidebar Navigation** - Auto-generated from folder structure
* **Backlink Graph** - Shows document relationships (which docs reference each other)
* **Read-Only** - No experiments, pure documentation (vs Products Lab)

### 3.2 Product Strategy Cross-Reference

**Auto-generated from `/products/*/product-strategy`:**
* Links product execution plans to business strategy
* Shows dependencies between products and business goals
* Example: Power BI Template Strategy → Market Research → User Segmentation

**Navigation:**
* Browse by product (e.g., `/products/01-power-bi-template/strategy`)
* Browse by strategy topic (e.g., `/biz/market-analysis` shows all product references)

---

## 4. Technical Architecture

### 4.1 Monorepo Structure

**Location:** `/apps/biz-lab` in `clario-web` monorepo

**Content Source:**
* `/content/biz` (symlink to `../../biz`)
* `/content/products` (symlink to `../../products`)
* Auto-syncs when you edit markdown files

### 4.2 Tech Stack

* **Framework:** Next.js 14 + `next-mdx-remote`
* **Layout:** Shadcn UI (Side navigation + Typography)
* **Content Source:** Auto-reads from symlinked directories
* **Search:** Global Vault Search (`Cmd+K`)
* **Styling:** Tailwind CSS (Shared Vault Design Tokens)

**Key Features:**
* Seamless integration with Vault (same layout, fonts, headers)
* Fast MDX rendering
* Mobile-responsive navigation (Sheet component)
* Breadcrumbs and Table of Contents (Shadcn customized)

### 4.3 Deployment

* **Domain:** `vault.klario-world.com/biz`
* **Hosting:** Vercel (part of Vault app)
* **Access Control:** Clerk (inherited from Vault session)
* **Note:** Biz Lab is a **section** of Vault, not a standalone site

### 4.4 Design Token Sync

* **Source of Truth:** `/packages/design-tokens/tailwind.config.ts`
* **Theme:** Read-only variant (focused on readability, no flashy UI)
* **Sync:** Automatic (imports same config as Products Lab and Marketing Site)

### 4.5 Authentication (Clerk)

**Middleware Setup:**
```typescript
// apps/biz-lab/middleware.ts
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
// Check if user has Biz Lab access
import { currentUser } from '@clerk/nextjs'

export default async function BizLabPage() {
 const user = await currentUser()
 const hasAccess = user?.publicMetadata?.bizLabAccess === true

 if (!hasAccess) {
 return <div>Access Denied. Contact admin at accounts.klario.world</div>
 }

 return <div>Welcome to Biz Lab!</div>
}
```

**User Management:** Controlled via `accounts.klario.world` admin panel.

---

## 5. MDX Configuration

### 5.1 Installation

```bash
# Install core MDX packages
npm install next-mdx-remote gray-matter remark-gfm rehype-slug
```

### 5.2 Content Loading Strategy

**File:** `apps/vault/lib/docs.ts`

```typescript
// Simple utility to read MDX files
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dbPath = path.join(process.cwd(), 'content/biz')

export async function getDocBySlug(slug: string[]) {
  // Reads markdown file, parses frontmatter
  // Return content for next-mdx-remote
}
```

### 5.3 Layout Component

**File:** `apps/vault/components/docs-layout.tsx`
- Uses standard Shadcn `<Sidebar>`
- Renders `summary` from `intro.md` as navigation tree
- Uses `prose prose-slate` for standard typography

### 5.3 Content Organization

**Nextra Auto-Generates Navigation from:**
```
/content/biz
 /strategy
 /market-analysis
 - 01-market-research.md
 - 02-cultural-context.md
 /planning
 - product-portfolio-map.md
 /frameworks
 - decision-making-framework.md
 /financial
 - revenue-models.md
```

**Becomes:**
```
Sidebar:
 Strategy
 Market Analysis
 Market Research
 Cultural Context
 Planning
 Product Portfolio Map
 Frameworks
 Decision Making Framework
 Financial
 Revenue Models
```

---

## 6. Search Configuration

### 6.1 FlexSearch Setup

**Built-in (No External Service Needed):**
* Indexes all markdown files automatically
* Search across headings, paragraphs, code blocks
* Keyboard shortcut: `Cmd+K` or `Ctrl+K`

**Customization:**
```javascript
// nextra.config.js
export default {
 search: {
 codeblocks: true,
 filename: true
 }
}
```

### 6.2 Search Scope

**Searchable:**
* All `/biz` markdown files
* All `/products/*/product-strategy` files
* Headings, content, code blocks

**Not Searchable:**
* Archived docs (explicitly excluded)
* Private notes (prefix with `_private`)

---

## 7. Knowledge Graph View

**Status:** Fully specified in `vault-ux-enhancements-prd.md`

**Purpose:** Visual map of all Biz Lab documents showing relationships and connections.

**Key Features:**
* Force-directed graph with color-coded nodes (Strategy: Blue, Product: Orange, Financial: Green)
* Notion-style floating panels for document previews
* Dynamic navbar with expansion modes
* Interactive node clicking to navigate between docs

**Access:** 
* "🗺️ Graph View" button in Biz Lab sidebar
* Route: `/biz/graph`

**See:** Section 3.7 of `vault-ux-enhancements-prd.md` for complete specifications including:
- Floating panel controls (position, width, draggable)
- Smart navbar logic (combines with note panel when on left)
- Node styling and animations
- Technical implementation details

---

## 8. Git Workflow

### 8.1 Content Updates

**To Update Docs:**
1. Edit markdown files in `/biz` or `/products/*/product-strategy`
2. Commit changes
3. Push to GitHub
4. Vercel auto-deploys Biz Lab
5. Changes visible at `biz.klario.world` in ~2 minutes

**No Manual Rebuild Needed** (Nextra auto-reads from symlinked folders)

### 8.2 Branching Strategy

* **Main Branch:** All content edits go to `main`
* **No Feature Branches** for docs (direct edits encouraged)
* **Version Control:** Git history is the audit trail

---

## 9. Success Metrics

* **Search Speed:** Results in <500ms
* **Content Coverage:** 100% of `/biz` docs indexed
* **Mobile Usability:** Readable on phone (for quick reference)
* **Cross-Reference Accuracy:** All internal links working (no 404s)

---

## 10. Future Enhancements (Post-Sprint 1)

* **Backlink Graph** - Visualize document relationships
* **Algolia Search** - Upgrade from FlexSearch for better relevance
* **Version History** - See doc changes over time (Git integration)
* **Export to PDF** - Download strategy docs as PDF
* **Collaboration Comments** - Inline comments for team feedback

---

**Last Updated:** January 8, 2026
**Next Review:** After first deployment

---

## PRD Approval Checklist

### Pre-Development Requirements

**Biz Lab Specific:**
- [ ] Nextra 3.0 installed (`npm install nextra nextra-theme-docs`)
- [ ] Content symlinks configured (`/content/biz` ?  `../../biz`)
- [ ] Folder structure reviewed for auto-generated nav
- [ ] FlexSearch indexing tested

**Content:**
- [ ] All `/biz` markdown files properly formatted
- [ ] Frontmatter added to key docs (optional but recommended)
- [ ] No broken internal links (all `[[wikilinks]]` or markdown links working)

### Stakeholder Approvals

- [ ] **Founder Approval** - Read-only docs scope confirmed
- [ ] **Content Ready** - Biz directory ready for symlinking

### Ready-to-Build Criteria

- [ ] Vault Overview PRD approved (parent)
- [ ] Nextra theme customized (logo, colors)
- [ ] Search tested on sample docs

---

**Status History:**
- **DRAFT** (Jan 8, 2026) - Initial PRD created
- **REVIEW** (Jan 9, 2026) - Nextra integration defined
- **APPROVED** (TBD) - Ready for development
- **IMPLEMENTED** (TBD) - Live at vault.klario-world.com/biz
