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

---

#### 3.2.1 Mission Control Dashboard UI Mockup

```
┌─────────────────────────────────────────────────────────────────┐
│ Mission Control Dashboard                                  [⚙️] │
├──────────────────────────────┬──────────────────────────────────┤
│ LEFT COLUMN                  │ RIGHT COLUMN                     │
│ (Interactive Stack)          │ (Mission Status - Full Height)   │
│                              │                                  │
│ ┌──────────────────────────┐ │ ┌──────────────────────────────┐ │
│ │ ⚡ MY FOCUS              │ │ │ 📈 MISSION STATUS            │ │
│ │ ────────────────────────│ │ │ ────────────────────────────│ │
│ │ 🎯 Your Focus Today:     │ │ │ Sprint Velocity              │ │
│ │                          │ │ │                              │ │
│ │ [✓] Review GTM Strategy  │ │ │ Week 2 - Day 3 of 14         │ │
│ │ [ ] Finish Pricing Model │ │ │ ┌────────────────────────┐   │ │
│ │ [ ] Approve Glass Card   │ │ │ │ ████████░░░░░░░░░░  45%│   │ │
│ │     (Draft - Products)   │ │ │ └────────────────────────┘   │ │
│ │                          │ │ │ Completed: 18 / 40 points    │ │
│ │ 🔥 Overdue (1):          │ │ │ On track ✓                   │ │
│ │ → Indonesia Market Entry │ │ │                              │ │
│ │   (2 days overdue)       │ │ │ ────────────────────────────│ │
│ │                          │ │ │ Portfolio Map                │ │
│ └──────────────────────────┘ │ │                              │ │
│                              │ │ ┌────────────────────────┐   │ │
│ ┌──────────────────────────┐ │ │ │ 📊 STRATEGY (Blue)     │   │ │
│ │ 💡 SMART RECOMMENDATIONS │ │ │ │ ├─ GTM Plan ✓         │   │ │
│ │ ────────────────────────│ │ │ │ ├─ Pricing Model 🚧   │   │ │
│ │                          │ │ │ │ └─ Market Entry ⏳    │   │ │
│ │ 📄 Next Read:            │ │ │ │                        │   │ │
│ │ → Competitive Analysis   │ │ │ │ 🎨 PRODUCTS (Orange)   │   │ │
│ │   (15 min) #strategy     │ │ │ │ ├─ Glass Card ✓       │   │ │
│ │   [Start Reading]        │ │ │ │ ├─ Pricing UI 🚧      │   │ │
│ │                          │ │ │ │ └─ Button Comp ⏳     │   │ │
│ │ 📄 Unread from Partner 2:│ │ │ └────────────────────────┘   │ │
│ │ → Indonesia GTM Strategy │ │ │                              │ │
│ │   (12 min) 🎯 High Pri   │ │ │ Click any item to navigate   │ │
│ │   [Start Reading]        │ │ │                              │ │
│ └──────────────────────────┘ │ │ ────────────────────────────│ │
│                              │ │ Achievement Tracker          │ │
│ ┌──────────────────────────┐ │ │                              │ │
│ │ ⚡ QUICK ACTIONS         │ │ │ 🏆 Strategy Explorer         │ │
│ │ ────────────────────────│ │ │ ┌────────────────────────┐   │ │
│ │ [+ New Strategy Doc]     │ │ │ │ ████████░░  8/10 docs  │   │ │
│ │ [+ Log Decision]         │ │ │ └────────────────────────┘   │ │
│ │ [+ Request Review]       │ │ │ 2 more to unlock badge!      │ │
│ │                          │ │ │                              │ │
│ │ Recent Actions:          │ │ │ 🎨 Product Visionary         │ │
│ │ • Created GTM (5m ago)   │ │ │ ┌────────────────────────┐   │ │
│ │ • Reviewed Button (1h)   │ │ │ │ ██████████  5/5 exps ✓│   │ │
│ └──────────────────────────┘ │ │ └────────────────────────┘   │ │
│                              │ │ Unlocked! 🎉                 │ │
│ ┌──────────────────────────┐ │ │                              │ │
│ │ 👥 TEAM PULSE            │ │ │ 🔥 7-Day Streak              │ │
│ │ ────────────────────────│ │ │ ┌────────────────────────┐   │ │
│ │ 🟢 Partner 2 (Online)    │ │ │ │ M T W T F S S          │   │ │
│ │ → Viewing: Glass Card    │ │ │ │ ✓ ✓ ✓ ✓ ✓ ✓ ✓          │   │ │
│ │   Experiment             │ │ │ └────────────────────────┘   │ │
│ │   [Jump to Doc]          │ │ │ Keep it going!               │ │
│ │                          │ │ └──────────────────────────────┘ │
│ │ Recent Activity:         │ │                                  │
│ │ • Partner 2 created:     │ │                                  │
│ │   Indonesia Market Entry │ │                                  │
│ │   (15 min ago) 🔥        │ │                                  │
│ │                          │ │                                  │
│ │ • Partner 1 promoted:    │ │                                  │
│ │   ButtonComponent        │ │                                  │
│ │   (2 hours ago) ⭐       │ │                                  │
│ │                          │ │                                  │
│ │ [View All Activity]      │ │                                  │
│ └──────────────────────────┘ │                                  │
│                              │                                  │
│ ┌──────────────────────────┐ │                                  │
│ │ 📋 REVIEW QUEUE          │ │                                  │
│ │ ────────────────────────│ │                                  │
│ │ ⚠️ Inbound (2):          │ │                                  │
│ │ • Glass Card Experiment  │ │                                  │
│ │   from Partner 2         │ │                                  │
│ │   [Approve] [Changes]    │ │                                  │
│ │                          │ │                                  │
│ │ • Pricing Strategy Doc   │ │                                  │
│ │   from Partner 2         │ │                                  │
│ │   [Approve] [Changes]    │ │                                  │
│ │                          │ │                                  │
│ │ Outbound (1):            │ │                                  │
│ │ • GTM Strategy           │ │                                  │
│ │   ⏳ Awaiting Partner 2  │ │                                  │
│ │   [Nudge]                │ │                                  │
│ └──────────────────────────┘ │                                  │
└──────────────────────────────┴──────────────────────────────────┘
```

**Layout Logic:**
- **Left Column (40% width):** Interactive widgets requiring user action (check tasks, start reading, create docs, approve reviews, see team activity)
- **Right Column (60% width):** Mission status visualization providing "big picture" context (sprint progress, portfolio health, gamified achievements)
- **Vertical Flow:** Left column scrolls independently for multiple widgets; Right column provides persistent mission context
- **2-Column Pattern:** This layout establishes the pattern that Strategy Desk and My Desk mirror for consistency

---

**Widget Breakdown:**

*   **⚡ My Focus (Personal Action) - [Left Col, Top]**
    *   **Your Focus Today:** Pinned tasks, active drafts, assigned reviews, overdue alerts
    *   **Smart Recommendations:** Context-aware "Next Read" suggestions based on reading history
    *   **Quick Actions:** One-click shortcuts to create docs, log decisions, request reviews

*   **👥 Team Pulse (Collaboration) - [Left Col, Bottom]**
    *   **Partner Activity Stream:** Real-time partner activity feed with "Online Now" indicators
    *   **Review Queue:** Inbound/outbound review requests with status tracking

*   **📈 Mission Status (Big Picture) - [Right Col, Full Height]**
    *   **Sprint Velocity:** Progress tracking with days remaining and completion percentage
    *   **Interactive Portfolio Map:** Visual overview of all projects by category
    *   **Achievement Tracker:** Gamified progress with badges and streak counters

**See:** `specifications/dashboard-system.md` for complete technical implementation

### 3.3 Collaboration Features (Sprint 3+)

**PM/PKM Capabilities:**

**Document Attribution:**
- Every doc shows creator and last editor
- Read tracking per partner
- Visual indicators throughout UI

**Partner Activity Feed:**
- Real-time presence indicators showing who's online and what they're viewing
- Activity stream with "Jump to Doc" navigation
- Partner reactions and engagement tracking

**Review Workflows:**
- Inbound/outbound review queue management
- "Approve", "Request Changes", and "Nudge" actions
- Stale review alerts (>2 days)

**Contribution Tracking:**
- Metrics per partner (docs created, experiments, reviews)
- Weekly contribution breakdown
- Team achievements and milestones

**See:** `specifications/collaboration-features.md` for complete implementation details

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

Vault is built as part of a monorepo containing the marketing site, internal vault app, and shared packages.

**Main Sections:**
- `/apps/vault` → Main Vault application
- `/packages/ui` → Shared UI components
- `/packages/design-tokens` → Centralized design system

### 4.2 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS (shared design tokens)
* **Authentication:** Clerk (role-based access control)
* **State Management:** Zustand
* **Real-time:** Pusher (WebSocket for Team Pulse)
* **Search:** cmdk + fuse.js (Global Command Palette)

### 4.3 Deployment

* **Domain:** `vault.klario-world.com`
* **Hosting:** Vercel
* **Access Control:** Clerk metadata-based roles

**See:** `specifications/core-platform.md` for complete architecture details

---

## 5. Authentication & Access Control

### 5.1 Unified Clerk Session

**Single Sign-On:**
- User logs in once at `vault.klario-world.com`
- Session valid for all sections (Products Lab, Biz Lab, Settings)
- Role-based access control via Clerk metadata

### 5.2 Role-Based Permissions

**Access Levels:**
- **Admin (Partners):** Full access to all sections
- **Editor:** Create/edit content, view all docs
- **Viewer:** Read-only access to assigned sections

**User Metadata Structure:**
- `vaultAccess`: Boolean flag for Vault access
- `vaultRole`: User's role (admin, editor, viewer)
- `sections`: Granular access per section

### 5.3 Initial Team Setup (2 Partners)

**Both partners configured as admins via Clerk Dashboard:**
- Partner 1 (Product & Strategy): Full access
- Partner 2 (Marketing & Sales): Full access
- Future team members: Role-based restrictions

**See:** `specifications/core-platform.md` for Clerk integration and middleware implementation

---

## 6. Navigation UX

 ### 6.1 Global Navigation System

 **Primary Interface:**
 - **Floating Dock:** Persistent vertical navigation (Desktop)
 - **Command Palette (Cmd+K):** Universal search and quick actions
 - **Keyboard Shortcuts:** Fast navigation between sections

 ### 6.2 Key Shortcuts

 - `Cmd+K` → Global Command Palette
 - `Cmd+D` → Dashboard
 - `Cmd+1` → Products Lab
 - `Cmd+2` → Biz Lab
 - `Cmd+3` → Settings
 - `Cmd+/` → Show Shortcuts Guide

**See:** `specifications/core-platform.md` for navigation implementation and `12-global-navigation-prd.md` for detailed PRD

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

### 8.1 Unified Command Palette

**Access:** `Cmd+K` or `Ctrl+K` from any page

**Search Scope:**
- **Actions:** Create docs, log experiments, request reviews
- **Products Lab:** Component names and experiments
- **Biz Lab:** Strategy documents and content
- **Settings:** Configuration and audit logs

**Features:**
- Fuzzy search across all content
- Grouped results by section
- Keyboard navigation
- < 500ms response time

**See:** `specifications/core-platform.md` for Command Menu implementation

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

**Last Updated:** January 20, 2026

**Related Specifications:**
- `specifications/dashboard-system.md` - Mission Control Dashboard architecture
- `specifications/core-platform.md` - Platform infrastructure & navigation
- `specifications/collaboration-features.md` - Team collaboration implementation