# Product Requirement Document (PRD): Clario Vault

**Product:** Clario Vault (Unified Internal Portal)
**Type:** Internal (Team Hub)
**Status:** APPROVED
**Access:** Internal Team Only
**Domain:** `vault.klario-world.com`

---

## 1. Executive Summary

**Clario Vault** is the unified internal portal that houses all of Clario's R&D and operational tools. It consolidates Products Lab, Biz Lab, and Admin Panel into a single, cohesive interface with tab-based navigation.

**Core Value:** "One portal for everything internal" - eliminating the need to remember 3 separate URLs and login sessions.

---

## 2. Strategic Context

### 2.1 The Problem

**Before Vault:**
- 3 separate sites: `products.klario.world`, `biz.klario.world`, `accounts.klario.world`
- 3 separate logins (even with Clerk SSO, separate sessions)
- Cognitive overhead: "Which site was that experiment on?"

**After Vault:**
- 1 site: `vault.klario-world.com`
- 1 login session
- Tab navigation: Products | Biz | Admin

### 2.2 Users

* **You (Founder):** Full access to all 3 sections
* **Future Operations Partner:** Products + Biz (no Admin access initially)
* **Future Devs/Designers:** Products only (UI experiments)

---

## 3. Product Features & Scope

### 3.1 Unified Navigation

**Top-Level Tabs:**
```

 Clario Vault [@user] [Sign Out]

 Products Biz Admin

```

**Routes:**
- `/` → Dashboard (landing page, quick links)
- `/products` → Products Lab (UI experiments)
- `/biz` → Biz Lab (strategy docs)
- `/admin` → Admin Panel (user management)

### 3.2 Dashboard (Landing Page)

**Purpose:** Quick access hub when you login

**Layout:**
```

 Welcome back, [Name]!

 Quick Links:
 → Latest Experiment (Products)
 → Recent Biz Doc (Biz)
 → Pending User Invitations (Admin)

 Recent Activity:
 • You edited "Market Research" (2h)
 • New experiment: glass-card (1d)
 • User invited: ops@clario.id (3d)

```

### 3.3 Section Integration

**Products Lab Section** (`/products`)
- Full UI from `11-products-lab-prd.md`
- Sidebar navigation for experiments
- Component showcase

**Biz Lab Section** (`/biz`)
- Full Nextra docs browser from `10-biz-lab-prd.md`
- Auto-generated from `/biz` directory
- Search bar

**Admin Panel Section** (`/admin`)
- Full user management from `12-admin-panel-prd.md`
- User table, access control
- Audit log

**Key Difference:** Each section is a **route**, not a separate site.

---

## 4. Technical Architecture

### 4.1 Monorepo Structure

```
/apps
 /marketing-site → pwbi.klario.website (public)
 /vault → vault.klario-world.com (internal)
 /app
 /products (Products Lab)
 /biz (Biz Lab - Nextra)
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


### 5.3 Manual Setup (V1 Strategy)

Since we don't have a backend to auto-assign roles yet, we will use the **Clerk Dashboard**:

1.  **Log in** to https://dashboard.clerk.com
2.  Go to **Users** and select your own user.
3.  Scroll down to **Metadata** section.
4.  Click **Edit** on "Public Metadata".
5.  **Paste this JSON** to make yourself an Admin:

\\\json
{
  "vaultAccess": true,
  "vaultRole": "admin",
  "sections": {
    "products": true,
    "biz": true,
    "admin": true
  }
}
\\\

6.  Click **Save**. *You now have instant access.*

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
- Nextra runs as a sub-app within Vault
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

## 11. UX Enhancements (Interactive Layer)

**See:** `13-vault-ux-enhancements-prd.md` for complete specifications.

### 11.1 Beyond Basic Navigation

Vault includes a **discovery experience layer** designed to make exploration engaging:
- **Mission Control Dashboard** - Visual command center with progress tracking
- **Interactive Product Portfolio** - Click-to-explore product roadmap
- **Document Hover Previews** - Preview before committing to full read
- **Achievement System** - Gamified milestones for exploration
- **Contextual Help** - "Why This Matters" tooltips on every section

### 11.2 Key Features

**Progress Tracking:**
- Docs read vs total available
- Time invested in learning
- Achievement unlocks

**Smart Recommendations:**
- AI suggests next doc based on current focus
- Critical items flagged for current week
- Related docs surfaced automatically

**Visual Storytelling:**
- Animated customer journey flow
- Product roadmap timeline
- Interactive Mermaid diagrams

**Goal:** Partner opens Vault → Feels impressed → Explores naturally → Understands vision without explanation.

---

## 12. Related PRDs

This Vault Overview PRD orchestrates 3 detailed PRDs:

1. **Products Lab PRD** (`11-products-lab-prd.md`)
 - UI experiments, component workbench
 - Accessed via `/products` route

2. **Biz Lab PRD** (`10-biz-lab-prd.md`)
 - Strategy docs browser (Nextra)
 - Accessed via `/biz` route

3. **Admin Panel PRD** (`12-admin-panel-prd.md`)
 - User management, audit log
 - Accessed via `/admin` route

**Read those PRDs for section-specific technical details.**

---

**Last Updated:** January 8, 2026
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

- [ ] **Founder Approval** - Architecture and features approved
- [ ] **Budget Confirmed** - Vercel free tier sufficient (no premium costs)

### Ready-to-Build Criteria

**Move to APPROVED status when:**
- All Pre-Development Requirements checked
- [ ] All section PRDs approved (Products Lab, Biz Lab, Admin Panel, UX Enhancements)
- 3-week timeline confirmed

---

**Status History:**
- **DRAFT** (Jan 8, 2026) - Initial PRD created
- **REVIEW** (Jan 9, 2026) - Core architecture defined, awaiting validation
- **APPROVED** (TBD) - Ready for development
- **IMPLEMENTED** (TBD) - Vault launched at vault.klario-world.com

