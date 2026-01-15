# Implementation Notes & Deviations

**Purpose:** Track differences between original plans and actual implementations  
**Status:** Living Document  
**Last Updated:** January 15, 2026

---

## Overview

This document records key implementation decisions, pivots, and deviations from original PRD specifications. It serves as a historical record of "what we learned" during development.

---

# Sprint 1: Core Foundation

## Biz Lab (Custom MDX vs Nextra)

### Original Plan
**Framework:** Nextra 3.0 with built-in theming  
**Domain:** `biz.klario.world` (separate subdomain)  
**Rationale:** Nextra provides auto-generated docs out of the box

### Actual Implementation
**Framework:** Custom MDX rendering with `next-mdx-remote` + Shadcn UI  
**Domain:** `vault.klario-world.com/biz` (unified portal)  
**Rationale:** 
- Greater design control
- Unified Vault design system
- Simpler integration with Knowledge Graph
- Better TypeScript support

### Impact
- ✅ **Pros:** Complete design flexibility, unified auth, better integration
- ⚠️ **Cons:** More custom code to maintain vs using Nextra out-of-the-box
- **Status:** ✅ IMPLEMENTED - Better outcome than original plan

**See:** `content-navigation.md` for complete implementation

---

## Domain Architecture (Unified Portal)

### Original Plan
**Separate Subdomains:**
- `products.klario.world` - Products Lab
- `biz.klario.world` - Biz Lab
- `accounts.klario.world` - Admin Panel

**Rationale:** Separation of concerns, clear boundaries

### Actual Implementation
**Single Portal with Routes:**
- `vault.klario-world.com/products` - Products Lab
- `vault.klario-world.com/biz` - Biz Lab
- `vault.klario-world.com/admin` - Admin Panel

**Rationale:**
- Single login session (UX improvement)
- Shared navigation and state
- Easier cross-section features
- Simpler deployment

### Impact
- ✅ **Pros:** Better UX, simpler auth, easier navigation
- ✅ **Cons:** None identified
- **Status:** ✅ IMPLEMENTED - Significant improvement

**See:** `core-platform.md` for unified architecture

---

## Knowledge Graph View Modes (F3)

### Original Plan
**Split-View Implementation:**
```
┌─────────────────────────────────┐
│ Graph (60%) │ Doc Reader (40%) │
│             │                   │
│   ⚫ Node    │  # Document       │
│    ╱│╲     │  Content...       │
└─────────────────────────────────┘
```
**Rationale:** Obsidian-style split panes for simultaneous viewing

### Actual Implementation
**Floating Panel Implementation:**
```
┌─────────────────────────────────┐
│  Graph View (background)         │
│                  ┌──────────┐   │
│   ⚫ Node         │ Document │   │
│    ╱│╲          │ (float)  │   │
│                  └──────────┘   │
└─────────────────────────────────┘
```
**Rationale:**
- Notion-style UI more modern
- Graph visibility maintained
- Draggable panels more flexible
- Simpler state management

### Impact
- ✅ **Pros:** More flexible, better UX, less complex
- ⚠️ **Future:** May add split-view as option later
- **Status:** ✅ IMPLEMENTED - Successful pivot

**See:** `content-navigation.md` § 17-23 for F3 implementation

---

## Mission Control Dashboard

### Original Plan
**Basic Dashboard:**
- Quick links to sections
- Recent activity feed
- Simple welcome message

### Actual Implementation
**Advanced Mission Control:**
- Live progress bars (Sprint completion)
- Smart recommendations (AI-driven suggestions)
- 24 achievements with gamification
- Product portfolio map (interactive)
- Company snapshot (real-time metrics)

**Rationale:** Opportunity to create "wow" factor on landing page

### Impact
- ✅ **Pros:** Significantly enhanced user engagement
- ✅ **Cons:** More complex, but worth it
- **Status:** ✅ IMPLEMENTED - Exceeded expectations

**See:** `00-vault-overview-prd.md` Part IV for complete feature list

---

# Sprint 2: UX & Polish (In Progress)

## Floating Panels (F4) - PLANNED

### Current Plan
**Notion-Style Draggable Panels:**
- Position presets (Left/Center/Right)
- Width slider (1/3 → 1/2 viewport)
- Drag handle with magnetic snapping
- Minimize/maximize

**Status:** 📋 PLANNED (Sprint 2 - Session 1)

**Potential Deviation:** May simplify to 3 fixed positions instead of fully free drag if complexity proves unnecessary

**See:** `interactive-ui.md` Part I for complete spec

---

## Premium Navbar (F5) - PLANNED

### Current Plan
**Glassmorphism + Smart Features:**
- Two expansion modes (Full panel vs Icon-only)
- Unread badges
- Micro-interactions (Framer Motion)
- Full accessibility (WCAG AA)

**Status:** 📋 PLANNED (Sprint 2 - Session 1)

**Potential Deviation:** May defer badge system to Sprint 3 if time-constrained  

**See:** `interactive-ui.md` Part II for complete spec

---

# Sprint 3+: Strategic Pivots

## Admin Panel Repurposing (January 2026)

### Original Plan
**Purpose:** User management dashboard  
**Features:**
- Add/remove team members
- Grant/revoke Lab access
- Audit log of access changes
- Manual user invitations

**Domain:** `vault.klario-world.com/admin`  
**Status:** APPROVED in PRD, never implemented

### Why Pivoted
**Clerk Handles Everything:**
- User authentication & management
- Role-based access control
- Team invitations
- Audit logging

**Realization:** Admin Panel for user management is **redundant** - Clerk Dashboard provides all this for free.

### New Direction
**Repurposed Into 3 Focused PRDs:**

**1. Global Navigation (`12-global-navigation-prd.md`)**
- Command Palette (⌘K) for instant access
- Customizable global menu
- Keyboard shortcuts manager
- Quick actions system

**2. Studio Tuner (`13-studio-tuner-prd.md`)**
- Theme customization (colors, fonts)
- Layout presets (F4/F5 integration)
- Animation controls (speed, reduced motion)
- Accessibility tools (high contrast, focus indicators)

**3. App Settings (`14-app-settings-prd.md`)**
- Products Lab preferences (templates, auto-save)
- Biz Lab preferences (graph defaults, reading mode)
- Dashboard preferences (widgets, notifications)
- Import/export configurations

### Impact
- ✅ **Pros:** Focused features users actually need, no redundant work
- ✅ **Avoided:** Building what Clerk already provides
- ✅ **Added Value:** Customization features that enhance UX
- **Status:** 📋 PLANNED - Sprint 3+ (all 3 new PRDs)

### Lesson Learned
**Validate assumptions before building:** Always check if third-party services (Clerk, Vercel, etc.) already provide the functionality. Build custom features only when they add unique value.

**See:**
- `../prds/12-global-navigation-prd.md`
- `../prds/13-studio-tuner-prd.md`
- `../prds/14-app-settings-prd.md`

---

# Future Features (Sprint 3+)

## F13-F15 (Future Enhancements)

### Planned Features
- **F13:** Enhanced Visualization (3D graphs, advanced filtering)
- **F14:** Collaboration (real-time editing, comments)
- **F15:** AI Integration (GPT-4 summaries, embeddings search)

**Status:** 📋 RESEARCH PHASE

**Likely Deviations:**
- F14 may pivot to simpler async collaboration (not real-time)
- F15 dependent on API costs and performance testing
- Timeline flexible based on user feedback

**See:** `future-enhancements.md` for detailed specifications

---

# Design System Evolution

## Typography

### Original Plan
**Font:** System fonts only (San Francisco, Segoe UI)

### Actual Implementation
**Font:** Plus Jakarta Sans (Google Fonts)  
**Rationale:** More distinctive brand identity, better readability

### Impact
- ✅ **Pros:** Better visual identity
- ⚠️ **Cons:** +15KB bundle size
- **Status:** ✅ IMPLEMENTED

---

## Color Palette

### Original Plan
**Colors:** Blue primary, neutral grays

### Actual Implementation
**Colors:** Blue primary, **Orange accent**, neutral grays  
**Rationale:** Orange accent provides better visual hierarchy and brand differentiation

### Impact
- ✅ **Pros:** More vibrant, better CTAs
- ✅ **Cons:** None
- **Status:** ✅ IMPLEMENTED

**See:** `design-foundation.md` § 4 for complete color system

---

# Performance Optimizations

## Bundle Size Management

### Target
**Original:** <200KB total for all features

### Actual
**Achieved:** ~235KB (slightly over target)
- Base: 120KB
- F2 (Graph): 50KB
- F3 (View Modes): 20KB
- F4-F5 (planned): 45KB

### Mitigation
- Lazy loading for graph visualization
- Code splitting by route
- Tree-shaking for unused Shadcn components

**Status:** ⚠️ ACCEPTABLE - Within 20% of target

**See:** `design-foundation.md` § 12 for performance budget

---

# Lessons Learned

## What Worked Well

### 1. Custom MDX over Nextra
**Decision:** Build custom instead of using framework  
**Result:** Greater control, better integration, unified design  
**Lesson:** Sometimes custom is better than "batteries included"

### 2. Unified Portal Architecture
**Decision:** Single domain vs multiple subdomains  
**Result:** Better UX, simpler auth, easier maintenance  
**Lesson:** Reduce cognitive overhead for users

### 3. Floating Panels over Split-View
**Decision:** Pivot from original split-view design  
**Result:** More flexible, modern UI  
**Lesson:** Be willing to pivot when better solution emerges

---

## What Could Be Improved

### 1. Bundle Size Vigilance
**Issue:** Slightly exceeded 200KB target  
**Solution:** More aggressive code splitting in future  
**Action:** Add bundle size CI checks

### 2. Early User Testing
**Issue:** Some features built without user feedback  
**Solution:** Build feedback loops earlier (F4/F5)  
**Action:** Add user testing phase for Sprint 2

---

# Version History

## Sprint 1 (Completed)
- ✅ Custom MDX implementation
- ✅ Unified portal architecture
- ✅ Knowledge Graph (F2)
- ✅ View Modes (F3) - Pivoted to floating panels
- ✅ Mission Control Dashboard (enhanced)
- ✅ 24 achievements system

## Sprint 2 (In Progress)
- 📋 Floating Panels (F4) - Planned
- 📋 Premium Navbar (F5) - Planned

## Sprint 3+ (Future)
- 📋 Enhanced Visualization (F13)
- 📋 Collaboration (F14)
- 📋 AI Integration (F15)

---

# Reference Links

**Specifications:**
- [Content & Navigation](content-navigation.md) - MDX, F2, F3
- [Interactive UI](interactive-ui.md) - F4, F5, UX features
- [Design Foundation](design-foundation.md) - Design system
- [Core Platform](core-platform.md) - Architecture
- [Future Enhancements](future-enhancements.md) - F13-F15

**PRDs:**
- [Vault Overview](../prds/00-vault-overview-prd.md)
- [Biz Lab](../prds/10-biz-lab-prd.md)
- [Products Lab](../prds/11-products-lab-prd.md)

---

**Maintained By:** Development Team  
**Update Frequency:** After each sprint / major pivot  
**Purpose:** Historical record and learning resource
