# Product Requirement Document (PRD): Clario Vault

**Product:** Clario Vault (Unified Internal Portal)  
**Type:** Internal Team Hub  
**Status:** 🚧 IN PROGRESS  
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
 - **Mission Control (Dashboard):** Single "Day-Start" screen with real-time Team Pulse and Smart Recommendations.
 - **Unified Workflows (PM):** Integrated review cycles, task queuing, and contribution tracking.
 - **Knowledge Engine (PKM):** Shared strategy (Biz Lab) and component library (Products Lab) in one OS.
 
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
 
 **Solution:** A **"Dashboard-First" OS** providing real-time partner awareness and integrated command workflows.
 
 ### 2.2 Users & Access Model
 
 **Current Team (2 Co-founders):**
 * **Partner 1 (Product & Strategy):** Admin (Full Access)
 * **Partner 2 (Marketing & Sales):** Admin (Full Access)
 
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

### 3.2 📊 Mission Control Dashboard & Gamification

**Purpose:** PM & PKM coordination hub for 2 partners. Visual command center showing company state, progress, and next actions.

**Location:** `/` (Dashboard landing page)

**A. Core Widgets (Grouped by Intent):**

**Layout:** 2-Column Grid (Desktop)
- **Left Column (Interactive Stack):** "My Focus" + "Team Pulse" vertically stacked.
- **Right Column (Status):** "Mission Status" (Full height).

*   **⚡ My Focus (Personal Action) - [Left Col, Top]**
    *   **Your Focus Today:**
        *   *Features:* Displays Pinned Tasks (Active Sprint), Active Drafts (Unsaved), Assigned Reviews, and "Overdue" alerts.
        *   *Actions:* **Check off** tasks (updates `.md`), **Click** to resume drafting, **Drag** to reorder priorities.
        *   *Integration:* Reads `docs/tasks/*.md`, queries Local Storage (Biz Lab Quick Pad), checks `reviewStatus` in `biz/*.md`.
    *   **Smart Recommendations:**
        *   *Features:* Context-aware "Next Read", "Topic" tags, Read Time estimates, and "Strategy Priority" badges.
        *   *Actions:* **"Start Reading"** (Biz deep link), **"Save for Later"** (Bookmark), **"Dismiss"**.
        *   *Integration:* User Metadata `docsRead`, `biz/` content tags (`targetMarket`, `kpis`), and Contentlayer reading time.
    *   **Quick Actions:**
        *   *Features:* One-click shortcuts, "Recent Actions" history.
        *   *Actions:*
            *   **"New Strategy Doc"** (Opens `/biz/new?template=strategy`).
            *   **"Log Decision"** (Opens `/biz/new?template=decision`).
            *   **"Request Review"** (Sets `needs_review: true` in frontmatter).
        *   *Integration:* Deep links to Biz templates, File Mutation API, and User Activity Log.

*   **👥 Team Pulse (Collaboration) - [Left Col, Bottom]**
    *   **Partner Activity Stream:**
        *   *Features:* Real-time edit feed, "Online Now" dots, and "Viewing: [Doc Name]" status.
        *   *Actions:* **"Jump to Doc"** (Join session), **"Reply"** (to comment), **"React"**.
        *   *Integration:* Clerk Presence (Biz routing), Pusher (WebSocket events), and `docsRead` metadata tracker.
    *   **Review Queue:**
        *   *Features:* Inbound requests (Partner 1 -> Partner 2), Outbound status, "Stale" warnings.
        *   *Actions:* **"Approve"**, **"Request Changes"**, **"Nudge"**.
        *   *Integration:* Aggregates `needs_review: true` from all `.md` files in `/biz` and `/products`.

*   **📈 Mission Status (Big Picture) - [Right Col, Full Height]**
    *   **Sprint Velocity:**
        *   *Features:* Days Remaining countdown, Completed Points vs. Ideal.
        *   *Integration:* Parses `sprint-X-active.md` and `biz/sprint-plan.md` templates.
    *   **Interactive Portfolio Map:**
        *   *Visuals:* Mermaid diagrams, Status Color-coding (Biz Blue, Product Orange).
        *   *Interactions:* **Click** to Navigate to Biz doc, **Hover** for Strategy Metrics.
        *   *Integration:* Visualizes `05-metrics-bundling-rationale.md` and common Biz/Product frontmatter.
    *   **Achievement Tracker (Gamified Progress):**
        *   *Features:* Progress bars, Streak counter, "Strategy Explorer" (Read 10+ docs) badge.
        *   *Integration:* User Metadata `achievements`, Clerk Usage stats, and Biz Lab `readCount`.
        *   *Visuals:* Progress bars + Confetti celebration on unlock.

**B. Technical Implementation:**

**Components:**
- **Layout:** `components/dashboard/DashboardLayout.tsx` (CSS Grid)
- **Widgets:**
  - `MyFocusWidget.tsx` (Tasks/Recs)
  - `TeamPulseWidget.tsx` (Activity Stream)
  - `MissionStatusWidget.tsx` (Container for Map + Achievements)
- **Visualizations:**
  - Portfolio: `components/dashboard/PortfolioMap.tsx` (Mermaid)
  - Charts: `recharts` for Velocity/Progress
  - Celebration: `react-confetti`

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

**visuals:** Confetti celebration on unlock (uses `react-confetti`).

**See:** `specifications/interactive-ui.md` for detailed UX Enhancement specs

### 3.3 Collaboration Features (Sprint 3+)

**PM/PKM Capabilities:**

**Document Attribution:**
- Every doc shows creator and last editor
- Read tracking per partner
- Visual indicators throughout UI

**Partner Activity Feed:**
- **Presence:** "Online Now" indicators (green dot) + Current active file.
- **Actions:** Real-time edit stream with "Jump to Doc" and "Reply" to comments.
- **Engagement:** Partner "Reactions" (Emoji) on activity items.
- *Tech:* Clerk Webhooks + Pusher (WebSocket) for < 500ms latency.

**Review Workflows:**
- **Status:** Inbound (Needs Review), Outbound (Awaiting), and "Stale" (>2 days) flags.
- **Actions:** "Approve", "Request Changes", "Nudge" (resend notification), "Delegate".
- **Integration:** Powered by `reviewStatus` frontmatter and file modification timestamps.

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

**Settings Section** (`/settings`)
- **App Settings & Preferences** (`14-app-settings-prd.md`)
  - User preferences (Theme, Notifications)
  - Security (Audit Logs)

**Core Systems** (Global Runtime)
- **Global Navigation** (`12-global-navigation-prd.md`)
  - Command Palette & Shortcuts (Configured via Studio)

**Development Tools** (Local Env Only)
- **Studio Tuner** (`13-studio-tuner-prd.md`)
  - Theme Editor & Layout Presets

**Key Difference:** Settings are *runtime* (Users/Data). Studio is *build-time* (Config/Theme).

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
 ├── /settings   (User & App Settings)
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
* **State Management:** Zustand (Settings & Preferences)
* **Real-time:** Pusher (WebSocket events for "Team Pulse")
* **Search:** cmdk + fuse.js (Global Command Palette)
* **Products Section:** Next.js + Shadcn UI
* **Biz Section:** Custom MDX + Shadcn Layout
* **Settings Section:** React Hook Form + Zod (Validation)

### 4.3 Deployment

* **Domain:** `vault.klario-world.com`
* **Hosting:** Vercel
* **Access Control:** Clerk (role-based)

### 4.4 Core Dependencies
```bash
npm install framer-motion      # Animations
npm install recharts           # Progress charts
npm install react-confetti     # Achievement celebrations
npm install pusher-js          # Real-time WebSocket client
npm install cmdk fuse.js       # Global search
```

---

## 5. Authentication & Access Control

### 5.1 Unified Clerk Session

**Single Login:**
- User logs in at `vault.klario-world.com`
- Session valid for all sections (/products, /biz, /settings)

**User Metadata:**
 ```json
 {
  "vaultAccess": true,
  "vaultRole": "admin", // "admin", "editor", "viewer"
  "sections": {
  "products": true, // Controls access to Products Lab
  "biz": true, // Controls access to Biz Lab
  "settings": true // Controls access to Settings
  }
 }
 ```
 
 ### 5.2 Role-Based Permissions
 
 > **Note:** `vaultRole` defines **capabilities** (e.g., Edit vs View), while `sections` metadata defines **scope** (e.g., Marketing Team only sees Biz Lab).
 
 | Capability | Viewer | Editor | Partner (Admin) |
 | :--- | :--- | :--- | :--- |
 | **Products Lab** | View Experiments | Create/Deploy | Full Access |
 | **Biz Lab** | Read Strategy | Comment/Review | Full Access |
 | **Settings** | Personal Prefs | Personal Prefs | Audit + Defaults |

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
  if (req.nextUrl.pathname.startsWith('/settings/audit')) {
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

> [!NOTE]
> **Team Management** (Adding users, assigning roles) is handled **only** through the Clerk Dashboard, not within the Vault app.

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
 
 ### 6.1 Global Navigation System
 
 **Primary Interface:**
 - **Floating Dock:** Vertical layout on Left (Desktop).
 - **Command Palette (Cmd+K):** Instant search and action execution.
 
 > **Detailed Specification:** See `12-global-navigation-prd.md` for the complete implementation details.
 
 ### 6.2 Key Shortcuts
 
 - `Cmd+K` → Global Command Palette
 - `Cmd+1-4` → Quick Switch Tabs
 - `Cmd+/` → Show Shortcuts Guide
 
 **Active Tab State:**
 - Active tab highlighted (orange accent)
 - URL updates: `/products`, `/biz`, `/settings`
 - Browser back/forward works correctly

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

### 7.3 Settings & Configuration System
 
 **Runtime Settings (`/settings`):**
 - **Focus:** User Preferences, Notifications, Audit Logs.
 - **Reference:** See `14-app-settings-prd.md`.
 
 **Studio Tuner (Floating Window):**
 - **Focus:** Visual Theme Editor, Layout Presets (Overlay).
 - **Reference:** See `13-studio-tuner-prd.md`.

---

## 8. Global Search

### 8.1 Unified Search Bar

**Location:** Top-right corner (all pages)

**Scope:**
- **Actions:** "New Strategy Doc", "Log Experiment", "Request Review" (Command Palette style)
- **Products Lab:** Searches component names, experiments
- **Biz Lab:** Searches doc content (FlexSearch/Fuse.js)
- **Settings:** Searches audit logs

**Keyboard:** `Cmd+K` or `Ctrl+K` opens search modal

**Implementation:**
- **Component:** `components/search/CommandMenu.tsx`
- **Library:** `cmdk` (UI) + `fuse.js` (Fuzzy Search)
- **Performance:** < 500ms response time
- **Results:** Grouped by section (Actions, Biz Lab, Products Lab, Settings)

**Results Format:**
```
 Search: "new"

Actions (2 results)
 - ✨ New Strategy Doc
 - 🧪 Log Experiment

Biz Lab (3 results)
 - 02-new-pricing-strategy.md
 - competitive-battle-cards.md
```

---

## 9. Development Timeline
 
 ### Phase 1: Foundation (Week 1)
 - Scaffold Vault app in monorepo
 - Set up Clerk authentication
 - Build Floating Dock & Dashboard
 
 ### Phase 2: Integration (Week 2)
 - Integrate Products Lab at `/products`
 - Build Biz Lab MDX viewer at `/biz`
 - Build Settings & Studio Tuner
 
 ### Phase 3: Polish (Week 3)
 - Global Search (Cmd+K)
 - Keyboard Shortcuts (Cmd+1-4)
 - Performance Tuning (Lighthouse > 95)
 
 **Total:** 3 weeks (overlapping builds)
 
 ---
 
 ## 10. Success Metrics
 
 * **Login Efficiency:** Single login accesses all sections (1 session)
 * **Collaboration Latency:** < 500ms for partner updates (Pusher)
 * **Nav Speed:** Floating Dock switching < 100ms
 * **Search Coverage:** 100% of content + actions searchable via Cmd+K
 * **Desktop Optimization:** 100% Full-width utilization (No wasted space)

---

# Part IV: Related PRDs & Approval

## 12. Related PRDs

This Vault Overview PRD orchestrates 3 detailed PRDs:

1. **Products Lab PRD** (`11-products-lab-prd.md`)
 - UI experiments, component workbench
 - Accessed via `/products` route

2. **Biz Lab PRD** (`10-biz-lab-prd.md`)
 - Strategy docs browser (Custom MD X)
 - Accessed via `/biz` route

3. **App Settings PRD** (`14-app-settings-prd.md`)
 - User preferences (Theme, Notifications)
 - Security (Audit Logs)
 - Accessed via `/settings` (Runtime)

4. **Global Navigation PRD** (`12-global-navigation-prd.md`)
 - Command Palette, Shortcuts (Runtime System)
 - *Configured via Studio Tuner*

5. **Studio Tuner PRD** (`13-studio-tuner-prd.md`)
 - **Dev Env Only:** Theme Editor, Layout Presets, Nav Config

**Read those PRDs for section-specific technical details.**

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
 - [ ] All Pre-Development Requirements checked
 - [ ] Core PRDs Approved: Products (11), Biz (10), Nav (12), Studio (13), Settings (14)
 - [ ] Sprint 1 Build & Launch Plan confirmed

---

**Status History:**
- **v0.1.0 DRAFT** (Jan 8, 2026) - Initial Solo-Founder Concept created.
- **v0.1.0 APPROVED** (Jan 10, 2026) - Initial architecture approved.
- **v0.1.1 DRAFT** (Jan 15, 2026) - **Pivot:** Restructured for 2-Partner Team.
- **v0.1.1 REVIEW** (Jan 17, 2026) - Feedback: "Too complex", requested clearer dashboard.
- **v0.1.2 DRAFT** (Jan 18, 2026) - **Refinement:** Dashboard Density & Settings/Studio split.
- **v0.1.2 REVIEW** (Jan 18, 2026) - Feedback: "Settings = User Prefs", "Team = Clerk".
- **APPROVED** (TBD) - Ready for development
- **IMPLEMENTED** (TBD) - Live at `vault.klario-world.com`

---

**Last Updated:** January 18, 2026