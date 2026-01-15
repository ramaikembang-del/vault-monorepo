# Product Requirement Document (PRD): Biz Lab

**Product:** Biz Lab (Internal)  
**Type:** Internal Documentation Browser  
**Status:** ✅ IMPLEMENTED  
**Access:** Internal Team Only  
**Domain:** `vault.klario-world.com/biz`  
**Parent:** Clario Vault (see `00-vault-overview-prd.md`)

---

> **Implementation Note:** This PRD was originally scoped for Nextra 3.0. The actual implementation uses **custom MDX rendering with Shadcn UI** for greater flexibility and unified design. See `../specifications/content-navigation.md` for technical details.

---

# Part I: Foundation

## 📋 Partner Summary

| Field | Details |
| :--- | :--- |
| **For** | Strategic Planning & Documentation |
| **Goal** | The "Brain" of the company. Read, write, and review strategy. |
| **Key Actions** | • Read Strategy Docs<br>• Review Partner Plans<br>• Track Engagement |

---

## 🧠 1. Executive Summary

**Biz Lab** is an auto-generated documentation browser for Clario's business strategy, market analysis, and planning documents. It transforms scattered markdown files into a searchable, navigable knowledge base.

**Core Function:** "The Brain" - Collaborative knowledge base for strategic alignment and documentation tracking.

---

## 2. Strategic Context

**Problem:** Strategy docs are scattered across markdown files in `/biz` directory. Hard to browse, search, and cross-reference.

**Solution:** Auto-generated documentation site (Custom MDX) that reads from `/biz` folder and renders as browsable wiki.

**Users (2-Partner Team):**
- **Partner 1 (Product & Strategy):** Primary author of product strategy docs
- **Partner 2 (Marketing & Sales):** Primary author of GTM/Sales docs
- **Both:** Review and approve each other's documentation

---

## 3. Product Scope

### 3.1 Strategic Documentation Browser

**Auto-generated from `/biz` directory:**
* Market Analysis (`/biz/strategy/market-analysis`)
* Planning Docs (`/biz/strategy/planning`)
* Frameworks (`/biz/strategy/frameworks`)
* Financial Models (`/biz/financial`)

### 3.2 Collaboration & PKM Features (Sprint 3+)

**Document Attribution:**
- **Created By:** Metadata showing original author
- **Last Edited:** Track most recent contributor
- **Visuals:** Avatar/Name in document header

**Engagement Tracking:**
- **Read Status:** "Partner 2 read this 2h ago"
- **Unread Indicators:** Highlight new/updated docs
- **Review Requests:** "Ready for Partner Review" flag

**Navigation:**

**Key Features:**
* Full-text Search - Find any concept across all strategy docs
* Sidebar Navigation - Auto-generated from folder structure
* Backlink Graph - Shows document relationships
* Read-Only - No experiments, pure documentation (vs Products Lab)

### 3.2 Product Strategy Cross-Reference

**Auto-generated from `/products/*/product-strategy`:**
* Links product execution plans to business strategy
* Shows dependencies between products and business goals
* Example: Power BI Template Strategy → Market Research → User Segmentation

**Navigation:**
* Browse by product (e.g., `/products/01-power-bi-template/strategy`)
* Browse by strategy topic (e.g., `/biz/market-analysis` shows all product references)

---

# Part II: Core Platform

## 4. Technical Architecture

### 4.1 Monorepo Structure

**Location:** `/apps/vault` (Biz Lab is a section at `/biz` route)

**Content Source:**
* `/content/biz` (markdown files)
* `/content/products` (product strategy docs)
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
* Breadcrumbs and Table of Contents

### 4.3 Deployment

* **Domain:** `vault.klario-world.com/biz`
* **Hosting:** Vercel (part of Vault app)
* **Access Control:** Clerk (inherited from Vault session)
* **Note:** Biz Lab is a **section** of Vault, not a standalone site

**See:** `00-vault-overview-prd.md` for unified architecture details

---

## 5. Authentication & Access Control

### 5.1 Clerk Integration

**Middleware Setup:** Inherited from Vault-level authentication

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

### 5.2 Access Levels

* **Full Access:** Can view all Biz Lab documents
* **No Access:** Redirected to access denied page

**User Management:** Controlled via unified Vault admin panel at `/admin` route.

---

# Part III: Content & Navigation

## 6. Content Rendering System

### 6.1 MDX Implementation

**Technology:** Custom MDX with `next-mdx-remote` and Shadcn UI

> **Note:** Originally planned for Nextra 3.0. Pivoted to custom implementation for:
> - Greater design control
> - Unified Vault design system
> - Simplified build process
> - Better TypeScript integration

### 6.2 Core Features

* **Automatic Navigation:** Generated from `/content/biz` folder structure
* **Frontmatter Support:** YAML metadata (title, readTime, status, tags, etc.)
* **GitHub Flavored Markdown:** Tables, task lists, syntax highlighting
* **Custom Components:** Embedded interactive elements
* **Dark Mode Optimized:** Tailwind Typography plugin

### 6.3 Content Organization

```
/content/biz/
├── strategy/
│   ├── market-analysis/
│   │   ├── 01-market-research.md
│   │   └── 02-cultural-context.md
│   └── planning/
│       └── product-portfolio-map.md
├── products/
└── financial/
```

**Becomes sidebar navigation automatically**

**See:** `../specifications/content-navigation.md` for complete implementation specification

---

## 7. Knowledge Graph & Discovery

### 7.1 Graph Visualization (F2)

**Purpose:** Visual map of all Biz Lab documents showing relationships and connections.

**Key Features:**
* Force-directed graph with color-coded nodes (Strategy: Blue, Product: Orange, Financial: Green)
* Interactive node clicking to navigate between docs
* Search & filtering
* 60 FPS performance with 100+ nodes

**Access:** 
* "🗺️ Graph View" button in Biz Lab sidebar
* Route: `/biz/graph`

**Status:** ✅ IMPLEMENTED (Sprint 1 - F2)

### 7.2 View Modes & Floating Panels (F3)

**Purpose:** Notion-style floating panels for document previews while browsing the graph

**Key Features:**
* Draggable overlay cards
* Graph remains interactive (dimmed slightly)
* Preview with "Read Full" link
* Framer Motion animations

**Status:** ✅ IMPLEMENTED (Sprint 1 - F3)

### 7.3 Search & Filtering

**Built-in (No External Service Needed):**
* Indexes all markdown files automatically
* Search across headings, paragraphs, code blocks
* Keyboard shortcut: `Cmd+K` or `Ctrl+K`
* Fuzzy search with `fuse.js`

**Integration:** Part of global Vault search system

**See:** 
- `../specifications/content-navigation.md` for F2/F3 complete specs
- `00-vault-overview-prd.md` § 7.3 for global search

---

# Part IV: UX Enhancements

## 8. Interactive Features (Biz Lab-Specific)

> **Note:** These enhancements are specific to Biz Lab document browsing. For cross-cutting Vault features (Mission Control, Achievements), see `00-vault-overview-prd.md` § 11.

### 8.1 Document Hover Previews

**Purpose:** Quick preview of document content before clicking

**Status:** ✅ IMPLEMENTED (Sprint 1)

**Visual Design:**
```
┌──────────────────────────────────┐
│ 📄 GTM Strategy (Biz/Strategy)   │
├──────────────────────────────────┤
│ Quick Preview:                   │
│ File Info:                       │
│ • 15 min read (4,200 words)      │
│ • Last updated: Jan 5, 2026      │
│ • Status: Reviewed ✓             │
│                                  │
│ Key Topics:                      │
│ • Week 0 Pre-Sale Validation     │
│ • 3 Verbal Commits Target        │
│ • Feb 5 Launch Timeline          │
└──────────────────────────────────┘
```

**Implementation:**
- Component: `DocumentHoverPreview.tsx`
- Shadcn `Popover` component
- 500ms hover delay
- Clerk metadata for read status tracking

**Frontmatter Requirements:**
```yaml
---
title: "Go-to-Market Strategy"
readTime: 15
status: "reviewed"
keyTakeaways:
  - "Pre-sale validation before building"
  - "3+ verbal commits target"
relatedDocs:
  - "sales/01-sales-playbook.md"
---
```

---

### 8.2 "Why This Matters" Contextual Tooltips

**Purpose:** Explain the strategic importance of every doc/section

**Status:** ✅ IMPLEMENTED (Sprint 1)

**Example Usage:**
```
Reading: "02-cultural-context.md" - Section: "WhatsApp as Business OS"

[i icon with glowing pulse] ← Hover here

Tooltip appears:
┌────────────────────────────────────────────────┐
│ 💡 Why This Matters                            │
├────────────────────────────────────────────────┤
│ Indonesian SMEs use WhatsApp as their primary  │
│ business communication tool. Our product must  │
│ integrate with WhatsApp to reach this market.  │
└────────────────────────────────────────────────┘
```

**Implementation:**
- Component: `WhyThisMattersTooltip.tsx`
- `@radix-ui/react-tooltip`
- Icon: Info icon with pulsing animation
- Placement: Every major section heading in Biz Lab docs

**Frontmatter Addition:**
```yaml
---
whyItMatters: |
  This GTM strategy is the execution playbook for Sprint 1.
  Without understanding this, you won't know what we're doing
  in Week 0 vs Week 5.
---
```

---

### 8.3 Customer Journey Flow (Animated)

**Purpose:** Visual representation of customer journey from awareness to conversion

**Status:** 📋 PLANNED (Sprint 2)

**Interactive Diagram:**
```
Awareness → Consideration → Trial → Purchase → Advocacy
   │            │            │         │          │
   └─ 40%      └─ 25%       └─ 15%    └─ 8%     └─ 2%
```

**Interactive Features:**
- Hover on stage → See metrics (conversion %, avg time)
- Click stage → Navigate to relevant strategy doc
- Animated flow shows drop-off rates

**Technical Stack:**
- `react-flow-renderer` OR Recharts Sankey diagram
- Framer Motion for stage transitions

**Component:** `CustomerJourneyFlow.tsx`

---

### 8.4 Progress Tracking (Vault-Level)

**Note:** This feature is cross-cutting and managed at Vault level.

**See:** `00-vault-overview-prd.md` § 11.3 for complete specification

**Biz Lab Specific:**
- Achievement: "Strategy Explorer" (read 10 strategy docs)
- Achievement: "Deep Diver" (spend 30+ min in single doc)
- Achievement: "Knowledge Graph Master" (use graph view 5+ times)

---

**See Also:** `../specifications/interactive-ui.md` for complete UX implementation details

---

# Part V: Metrics & Success

## 9. Success Criteria

### 9.1 Performance Targets

* **Page Load:** < 1s (MDX pre-rendered)
* **Search Response:** < 100ms
* **Navigation Smoothness:** 60 FPS animations
* **Knowledge Graph:** 60 FPS with 100+ nodes

### 9.2 User Engagement

* **Active Usage:** 5+ doc views per week
* **Search Adoption:** 40% of sessions use search
* **Knowledge Graph:** 20% of users try graph view
* **Average Session:** 10+ minutes

### 9.3 Content Metrics

* **Coverage:** 100% of `/biz` docs indexed
* **Freshness:** Docs updated within 2 min of commit
* **Discoverability:** All docs reachable within 3 clicks
* **Cross-references:** 80% of docs have related docs links

---

## PRD Approval Checklist

### Pre-Development Requirements

**Content:**
- [ ] All `/biz` markdown files properly formatted
- [ ] Frontmatter added to key docs (optional but recommended)
- [ ] No broken internal links

**Technical:**
- [ ] Clerk authentication configured
- [ ] Custom MDX rendering implemented
- [ ] Folder structure reviewed for auto-generated nav

### Stakeholder Approvals

- [x] **Founder Approval** - Read-only docs scope confirmed
- [x] **Ready for Development** - MDX implementation chosen over Nextra

### Ready-to-Build Criteria

- [x] Vault Overview PRD approved (parent)
- [x] Design tokens finalized
- [x] Clerk authentication working

---

**Status History:**
- **DRAFT** (Jan 8, 2026) - Initial PRD created
- **REVIEW** (Jan 9, 2026) - Nextra integration defined
- **PIVOT** (Jan 10, 2026) - Changed to custom MDX
- **APPROVED** (Jan 10, 2026) - Ready for development
- **IMPLEMENTED** (Jan 10, 2026) - Live at vault.klario-world.com/biz ✅

**Last Updated:** January 15, 2026
