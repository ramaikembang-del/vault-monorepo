# Product Requirement Document (PRD): Clario Vault

**Product:** Clario Vault (Unified Internal Portal)  
**Type:** Internal Team Hub  
**Status:** ✅ IMPLEMENTED  
**Access:** Internal Team Only  
**Domain:** `vault.klario-world.com`

---

# Part I: Foundation

## 📋 Partner Summary

| Field | Details |
| :--- | :--- |
| **For** | Partner 1 (Product & Strategy), Partner 2 (Marketing & Sales) |
| **Goal** | Coordinate projects, track knowledge, and see what the team is doing. |
| **Key Actions** | • Check Mission Control Dashboard<br>• Review Partner's Documents<br>• Track Sprint Progress |

---

## 🚀 1. Executive Summary

**Clario Vault** is the unified **PM & PKM system** for the Klario ecosystem. It serves as Mission Control for 2 co-founders to manage projects, share knowledge, track contributions, and coordinate their work across Products Lab, Biz Lab, and team settings.

**Core Value:**
- **PM (Project Management):** Track who's working on what, coordinate reviews, assign tasks
- **PKM (Personal Knowledge Management):** Shared knowledge base, document attribution, reading tracking
- **One Portal:** Single login, unified navigation, seamless partner collaboration

---

## 2. Strategic Context

### 2.1 The Problem

**Team Structure:**
- **2 Co-founders (Current Team):**
  - Partner 1: Product & Strategy lead
  - Partner 2: Marketing & Sales lead
  - Overlap: Both contribute to marketing and product

**PM/PKM Challenges:**
- No visibility into what partner is working on
- Can't track who created/edited which documents
- No structured review/approval workflows
- Hard to see contribution breakdown
- Knowledge scattered across tools

**Solution:** Unified PM & PKM system for 2-partner collaboration

### 2.2 Users & Access Model

**Current Team (2 Co-founders):**
* **Partner 1 (Product & Strategy):** Full access to everything
* **Partner 2 (Marketing & Sales):** Full access to everything

**Future Team Growth (3 → 5 → 8 → 12 people):**
* **Product Team:** Products Lab + relevant Biz docs
* **Marketing Team:** Biz Lab + campaign tracking
* **Specialists:** Scoped access based on role
* **Co-founders Always:** Full access to everything (no restrictions)

---

## 3. Product Features & Scope

### 3.1 Unified Navigation

**Routes:**
- `/` → Mission Control Dashboard (PM/PKM hub)
- `/products` → Products Lab (UI experiments)
- `/biz` → Biz Lab (strategy docs)
- `/settings` → Settings & Studio (navigation, theme, app prefs)

### 3.2 📊 Mission Control Dashboard

**Purpose:** PM & PKM coordination hub for 2 partners

**Widgets (Partner-Facing):**
- **Your Focus Today:** Active docs, pending reviews, assigned tasks
- **Partner Activity:** Live feed of what partner is working on
- **Contribution Metrics:** Team stats (docs, experiments, reviews)
- **Team Achievements:** Collaborative milestones unlocked

*(Technical Specs moved to Appendix)*

**See:** Part IV § 10 for detailed UX Enhancement specs

### 3.3 Collaboration Features (Sprint 3+)

**PM/PKM Capabilities:**

**Document Attribution:**
- Every doc shows creator and last editor
- Read tracking per partner
- Visual indicators throughout UI

**Partner Activity Feed:**
- See what partner is currently working on
- Recent actions (created, edited, reviewed)
- Real-time updates (30s polling)

**Review Workflows:**
- Request partner review
- Approve/request changes
- Review queue dashboard
- Priority flags

**Contribution Tracking:**
- Metrics per partner (docs, experiments, reviews)
- Weekly contribution breakdown
- Team achievements and milestones

**See:** `specifications/collaboration-features.md` for complete details

### 3.4 Section Integration

**Products Lab Section** (`/products`)
- Full UI from `11-products-lab-prd.md`
- Sidebar navigation for experiments
- Component showcase

**Biz Lab Section** (`/biz`)
- Full custom MDX docs browser from `10-biz-lab-prd.md`
- Auto-generated from `/biz` directory
- Search bar

**Admin Panel Section** (`/admin`)
- Command palette, global menu, and keyboard shortcuts from `12-global-navigation-prd.md`
- User table, access control
- Audit log

**Key Difference:** Each section is a **route**, not a separate site.

---

# Part II: Core Platform

## 4. Technical Architecture

### 4.1 Monorepo Structure

```
/apps
 /marketing-site → pwbi.klario.website (public)
 /vault → vault.klario-world.com (internal)
 /app
 /products (Products Lab)
 /biz (Biz Lab - Custom MDX)
 /admin (Admin Panel)
 /components
 /shared (Vault navigation, dashboard)
/packages
 /ui (Shared components)
 /design-tokens (Tailwind config)
```

### 4.2 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS (shared design tokens)
* **Authentication:** Clerk (single session across all tabs)
* **Products Section:** Next.js + Shadcn UI
* **Biz Section:** Shadcn MDX (Custom Docs Layout)
* **Admin Section:** Next.js + Shadcn data-table

### 4.3 Deployment

* **Domain:** `vault.klario-world.com`
* **Hosting:** Vercel
* **Access Control:** Clerk (role-based)

---

## 5. Authentication & Access Control

### 5.1 Unified Clerk Session

**Single Login:**
- User logs in at `vault.klario-world.com`
- Session valid for all sections (/products, /biz, /admin)

**User Metadata:**
```json
{
 "vaultAccess": true,
 "vaultRole": "admin", // "admin", "editor", "viewer"
 "sections": {
 "products": true,
 "biz": true,
 "admin": true
 }
}
```

### 5.2 Role-Based Permissions

| Role | Products Lab | Biz Lab | Admin Panel |
|------|--------------|---------|-------------|
| **Viewer** | View only | View only | No access |
| **Editor** | Create experiments | View only | No access |
| **Admin** | Full access | Full access | Full access |

**Middleware:**
```typescript
// apps/vault/middleware.ts
import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
 publicRoutes: ['/sign-in', '/sign-up'],

 afterAuth: async (auth, req) => {
 const user = await currentUser()
 const vaultAccess = user?.publicMetadata?.vaultAccess

 if (!vaultAccess) {
 return redirectToSignIn({ returnBackUrl: req.url })
 }

 // Check section-specific access
 if (req.nextUrl.pathname.startsWith('/admin')) {
 const isAdmin = user?.publicMetadata?.vaultRole === 'admin'
 if (!isAdmin) {
 return new Response('Access Denied', { status: 403 })
 }
 }
 }
})
```


### 5.3 Initial Team Setup (2 Partners)

**Configure via Clerk Dashboard:**

1. Log in to https://dashboard.clerk.com
2. Go to **Users** → select each partner
3. Edit **Public Metadata**
4. Configure as follows:

**Partner 1 (Product & Strategy):**
```json
{
  "vaultAccess": true,
  "vaultRole": "admin",
  "partnerName": "Partner 1",
  "sections": {
    "products": true,
    "biz": true,
    "settings": true
  }
}
```

**Partner 2 (Marketing & Sales):**
```json
{
  "vaultAccess": true,
  "vaultRole": "admin", 
  "partnerName": "Partner 2",
  "sections": {
    "products": true,
    "biz": true,
    "settings": true
  }
}
```

**Note:** Both partners get full admin access. Future team members will have role-based restrictions.

---

## 6. Navigation UX

### 6.1 Tab Navigation

**Persistent Top Nav:**
```tsx
// components/VaultNav.tsx
<nav>
 <Link href="/products" className={activeTab === 'products' ? 'active' : ''}>
 Products
 </Link>
 <Link href="/biz" className={activeTab === 'biz' ? 'active' : ''}>
 Biz
 </Link>
 {isAdmin && (
 <Link href="/admin" className={activeTab === 'admin' ? 'active' : ''}>
 Admin
 </Link>
 )}
</nav>
```

**Active Tab State:**
- Active tab highlighted (orange accent)
- URL updates: `/products`, `/biz`, `/admin`
- Browser back/forward works correctly

### 6.2 Keyboard Shortcuts

- `Cmd+1` → Products Lab
- `Cmd+2` → Biz Lab
- `Cmd+3` → Admin Panel (if admin)
- `Cmd+K` → Global search (searches across all sections)

---

# Part III: Product Ecosystem

## 7. Integration Points

### 7.1 Products Lab Integration

**Route:** `/products/*`

**Features:**
- Component workbench at `/products/components`
- Experiments at `/products/experiments`
- Design tokens at `/products/tokens`

**Note:** Full details in `11-products-lab-prd.md`

### 7.2 Biz Lab Integration

**Route:** `/biz/*`

**Implementation:**
- Custom MDX runs as part of Vault app
- Auto-generated sidebar from `/biz` directory
- Search scoped to Biz section

**Note:** Full details in `10-biz-lab-prd.md`

### 7.3 Admin Panel Integration

**Route:** `/admin/*`

**Features:**
- User management at `/admin/users`
- Audit log at `/admin/audit`
- Settings at `/admin/settings`

**Note:** Full details in `12-admin-panel-prd.md`

---

## 8. Global Search

### 8.1 Unified Search Bar

**Location:** Top-right corner (all pages)

**Scope:**
- Products Lab: Searches component names, experiments
- Biz Lab: Searches doc content (FlexSearch)
- Admin Panel: Searches user emails, audit logs

**Keyboard:** `Cmd+K` opens search modal

**Results Format:**
```
 Search: "pricing strategy"

Biz Lab (3 results)
 - 02-pricing-strategy.md
 - competitive-battle-cards.md

Products Lab (1 result)
 - experiments/pricing-card-v2
```

---

## 9. Development Timeline

### Phase 1: Foundation (Week 1)
- Scaffold Vault app in monorepo
- Set up Clerk authentication
- Build top navigation and dashboard

### Phase 2: Integration (Week 2)
- Integrate Products Lab at `/products`
- Build Biz Lab MDX viewer at `/biz` (Shadcn Layout)
- Integrate Admin Panel at `/admin`

### Phase 3: Polish (Week 3)
- Global search implementation
- Keyboard shortcuts
- Mobile responsive navigation

**Total:** 3 weeks (can overlap with individual section builds)

---

## 10. Success Metrics

* **Login Efficiency:** Single login accesses all 3 sections (1 session, not 3)
* **Navigation Speed:** < 3 clicks to any section from anywhere
* **Search Coverage:** 100% of content searchable via Cmd+K
* **Mobile Usability:** All sections accessible on phone

---

# Part IV: Cross-Cutting Features

## 11. UX Enhancements (Cross-Cutting Features)

> **Note:** This section contains UX features that span the entire Vault application. For Biz Lab-specific UX enhancements, see `10-biz-lab-prd.md`.

### 11.1 Mission Control Dashboard

**Purpose:** Visual command center showing company state, progress, and next actions

**Status:** ✅ IMPLEMENTED (Sprint 1)

**Location:** `/` (Dashboard landing page)

**Key Features:**
- **Live Progress Bars** - Visual representation of Sprint completion
- **Smart Recommendations** - Suggests what to read next based on:
  - What you haven't read
  - What's critical for current week
  - What's related to what you just read
- **Achievement System** - Gamified exploration milestones
- **Company Snapshot** - High-level context at a glance

**Implementation:**
- Component: `components/dashboard/DashboardMissionControl.tsx`
- Data source: Clerk user metadata (`vaultProgress`)
- Recharts for progress visualizations
- Real-time updates on document reads

**Technical Details:** See `../specifications/design-foundation.md` for styling values

---

### 11.2 Interactive Product Portfolio Map

**Purpose:** Visual journey through Clario's product strategy

**Status:** ✅ IMPLEMENTED (Sprint 1)

**Location:** Dashboard + `/products/portfolio`

**Interactive Features:**
- **Click Product Box** → Opens product deep dive with:
  - Strategy docs (with read/unread badges)
  - Specifications (with completion %)
  - Marketing materials
  - Financial projections
- **Hover** → Shows quick stats (target revenue, customer goals, key metrics)
- **Animated Transitions** → Smooth expand/collapse

**Implementation:**
- Mermaid diagrams with click handlers
- Component: `components/dashboard/PortfolioMap.tsx`
- Color-coded by status (Green = Active, Orange = Planned, Gray = Research)

---

### 11.3 Progress Tracking & Achievements

**Purpose:** Gamify exploration, give sense of accomplishment

**Status:** ✅ IMPLEMENTED (Sprint 1 - 24 achievements)

**Achievement Categories:**

**📚 Knowledge Achievements:**
- **Strategy Explorer** - Read all Market Analysis docs (5/5)
- **Product Visionary** - Reviewed all Product 01 specs (10/10)
- **Financial Guru** - Read all financial projections (3/3)

**🎯 Engagement Achievements:**
- **Deep Diver** - Comment on 5+ docs
- **Collaboration Champion** - Share 3+ insights with team
- **Knowledge Graph Explorer** - Use graph view 10+ times

**📅 Milestone Achievements:**
- **Week 0 Ready** - Complete all "Critical for Week 0" docs
- **Launch Ready** - Understand full Sprint 1 plan
- **Sprint 1 Complete** - Unlock all Sprint 1 achievements

**Components:**
- `components/gamification/AchievementList.tsx`
- `components/gamification/AchievementNotifier.tsx` (confetti on unlock)
- `config/achievements.ts` (24 total achievements defined)

**Data Model:**
```json
{
  "vaultProgress": {
    "docsRead": ["biz/strategy/..."],
    "achievements": ["strategy-explorer", "product-visionary"],
    "readCount": 12,
    "sprintProgress": { "week": 0, "docsCompleted": 5 }
  }
}
```

**Confetti Celebration:** Uses `react-confetti` on achievement unlock

---

### 11.4 Global Search (Cross-Cutting)

**Purpose:** Search across all Vault sections from anywhere

**Status:** ✅ IMPLEMENTED (Sprint 1)

**Keyboard Shortcut:** `Cmd+K` or `Ctrl+K`

**Scope:**
- Products Lab: Searches component names, experiments
- Biz Lab: Searches doc content (Fuse.js fuzzy search)
- Admin Panel: Searches user emails

**Implementation:**
- Component: `components/search/CommandMenu.tsx`
- Library: `cmdk` + `fuse.js`
- Results grouped by section

---

### 11.5 Integration & Technical Stack

**Shared Dependencies:**
```bash
npm install framer-motion      # Animations
npm install recharts           # Progress charts
npm install react-confetti     # Achievement celebrations
npm install cmdk fuse.js       # Global search
```

**Cross-References:**
- **Biz Lab UX:** See `10-biz-lab-prd.md` Section 11 (Document previews, tooltips, graph view)
- **Design Specs:** See `../specifications/design-foundation.md`
- **Roadmap:** See `../roadmap/sprint-archive.md` for implementation details

**Performance Targets:**
- Dashboard load: < 1s
- Search results: < 500ms
- Achievement unlock animation: 60 FPS
- All animations: GPU-accelerated transforms only

---

# Part V: Related PRDs & Approval

## 12. Related PRDs

This Vault Overview PRD orchestrates 3 detailed PRDs:

1. **Products Lab PRD** (`11-products-lab-prd.md`)
 - UI experiments, component workbench
 - Accessed via `/products` route

2. **Biz Lab PRD** (`10-biz-lab-prd.md`)
 - Strategy docs browser (Custom MD X)
 - Accessed via `/biz` route

3. **Admin Panel PRD** (`12-admin-panel-prd.md`)
 - User management, audit log
 - Accessed via `/admin` route

**Read those PRDs for section-specific technical details.**

---

**Last Updated:** January 15, 2026  
**Next Review:** After section PRD reviews complete

---

## PRD Approval Checklist

### Pre-Development Requirements

**Monorepo Setup:**
- [ ] GitHub repository created (`clario-web` monorepo)
- [ ] Turborepo configured for multi-app builds
- [ ] Shared packages structure defined (`/packages/ui`, `/packages/design-tokens`)

**Domain & Hosting:**
- [ ] Domain `vault.klario-world.com` purchased
- [ ] Vercel account created
- [ ] DNS configured (see dns-configuration-guide.md)

**Authentication (Clerk):**
- [ ] Clerk account created
- [ ] API keys obtained (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY)
- [ ] User roles defined (admin, editor, viewer)

**Content Sources:**
- [ ] `/biz` directory ready for Biz Lab symlink
- [ ] `/products` directory ready for Products Lab symlink
- [ ] Markdown files properly formatted

**Design System:**
- [ ] Design tokens finalized (colors, typography, spacing)
- [ ] Shadcn UI components installed
- [ ] Tailwind config shared across apps

### Stakeholder Approvals

- [x] **Founder Approval** - Architecture and features approved
- [x] **Budget Confirmed** - Vercel free tier sufficient (no premium costs)

### Ready-to-Build Criteria

**Move to APPROVED status when:**
- All Pre-Development Requirements checked
- [ ] All section PRDs approved (Products Lab, Biz Lab, Admin Panel, UX Enhancements)
- 3-week timeline confirmed

---

**Status History:**
- **DRAFT** (Jan 8, 2026) - Initial PRD created
- **REVIEW** (Jan 9, 2026) - Core architecture defined, awaiting validation
- **APPROVED** (Jan 10, 2026) - Ready for development
- **IMPLEMENTED** (Jan 10, 2026) - Vault launched at vault.klario-world.com ✅
