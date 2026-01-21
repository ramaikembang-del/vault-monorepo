# Product Requirement Document (PRD): Products Lab

**Product:** Products Lab (Second Brain, Digital Office & UI Playground)
**Type:** Intelligent Workspace, Knowledge Engine & Component Laboratory
**Status:** 🚧 IN PROGRESS
**Access:** Internal Team Only
**Domain:** `vault.klario-world.com/products`
**Parent:** Clario Vault (see `00-vault-overview-prd.md`)

---

# Part I: Foundation

## 📋 Partner Summary

| Field | Details |
| :--- | :--- |
| **For** | Product Team & Founders |
| **Goal** | A "Second Brain" that feels like a digital office + The "Workshop" to test ideas without breaking production. Instant, intuitive, and interconnected. |
| **Key Actions** | • Instant Recall (Search anything in <50ms)<br>• Connect Ideas (Graph & Backlinks)<br>• Manage Work (Integrated PM/PKM)<br>• View New Experiments<br>• Approve UI Changes<br>• Check Component Library |

---

## 🧠 1. Executive Summary

**Products Lab** is the high-performance **"Second Brain"**, **Digital Office**, and **UI/UX Experimentation Workbench** for the product team. It goes beyond a static documentation browser to become an active, intelligent workspace where strategy, planning, knowledge management, and rapid UI prototyping converge.

**Core Philosophy:**
1.  **Extremely Fast:** Staged parsing and aggressive caching for instant "thought-speed" navigation.
2.  **Second Brain:** Bi-directional linking, knowledge graphs, and smart context.
3.  **Digital Office:** The daily "Studio" where work happens—not just where it's stored.
4.  **The Sandbox:** Safe environment to test "crazy" UI experiments without breaking production.
5.  **The Library:** Live component showcase and pattern documentation.
6.  **Deep Mission Control Integration:** Not a standalone app—every action flows bidirectionally with the Vault ecosystem.

**Core Functions:**
- **Knowledge Management:** PM & PKM "Workshop" for strategic thinking and documentation
- **UI Experimentation:** Shared sandbox to generate, test, and refine interface components
- **Component Library:** Live showcase and pattern documentation
- **Workspace Integration:** The dedicated home for product thinking and rapid prototyping
- **Mission Control Connectivity:** Real-time presence, task sync, review workflows, achievements, and contribution analytics (See Section 16)

---

## 2. Strategic Context

**Problem:**
- Traditional wikis are slow and passive.
- "Where did I write that?" friction kills flow.
- Strategy docs feel disconnected from daily execution.
- No "sense of place" for deep work.
- AI coding generates code fast, but we need a place to "verify" and "experience" UI experiments before merging to production.

**Solution:**
A **Engineered Knowledge System** that feels alive. It uses **staged parsing** for instant feedback, **visual knowledge mapping** for context, **workspace integration** to make it the dedicated home for product thinking, and **interactive playground** with live component previews and throwaway experiment zones.

**Users:**
- **Product Team (Primary):** PM & PKM "Workshop" + Rapid prototyping & technical experiments.
- **Founders:** Strategic alignment and high-level planning + Visual experiments & copy variations.
- **Goal:** Shared workbench for product decisions and UI innovation.

---

# Part II: Digital Office (The "Work" Layer)

## 3. Digital Office Features

### 3.1 "My Desk" Dashboard

**Personalized command center for the day's focus and scratch thoughts.**

**Features:**
1.  **Morning Brief:** Dynamic summary of critical doc updates and high-priority tasks.
2.  **Quick Pad:** Persistent local scratchpad for transient thoughts and code snippets.
3.  **Priority Stack:** Drag-and-drop vertical queue of the top 3 focus documents.
4.  **Activity Pulse:** Real-time feed of recent partner contributions to shared docs.

**Key Actions:**
- `Cmd+P`: Push to Priority Stack
- `Clear Pad`: Wipe scratchpad content
- `Focus Toggle`: Collapse sidebars for deep work

**See:** `specifications/products-lab-system.md` #1 for technical implementation

---

#### 3.1.1 Dashboard Layout Options

**Both layout options follow the same functional grouping:**

| Layer | Purpose | Widgets |
|-------|---------|---------|
| **📊 INFORMATION** | Consume & Monitor | Morning Brief, Activity Pulse |
| **⚡ WORK MANAGEMENT** | Organize & Create | Quick Pad, Priority Stack |
| **✍️ QUICK ACTION** | Capture Ideas | Quick Capture (Global) |

---

**Option A: 2-Column Layout (PRIMARY - Mirrors Mission Control)**

```
┌─────────────────────────────────────────────────────────────────┐
│ My Desk Dashboard                                          [⚙️] │
├──────────────────────────────┬──────────────────────────────────┤
│ LEFT COLUMN                  │ RIGHT COLUMN                     │
│ (Interactive Stack)          │ (Product Status - Full Height)   │
│                              │                                  │
│ ┌──────────────────────────┐ │ ┌──────────────────────────────┐ │
│ │ 📊 MORNING BRIEF         │ │ │ 🎨 PRODUCT STATUS            │ │
│ │ ────────────────────────│ │ │ ────────────────────────────│ │
│ │ 🌅 Today's Focus:        │ │ │ Component Library Health     │ │
│ │ • 2 experiments need     │ │ │                              │ │
│ │   review                 │ │ │ ┌────────────────────────┐   │ │
│ │ • Glass Card hot reload  │ │ │ │ Promoted: 12 ✓         │   │ │
│ │   ready                  │ │ │ │ In Progress: 5 🚧      │   │ │
│ │ • Button docs incomplete │ │ │ │ Needs Review: 2 ⚠️     │   │ │
│ │                          │ │ │ │ Archived: 8 📦         │   │ │
│ │ 🔥 Priority Tasks:       │ │ │ └────────────────────────┘   │ │
│ │ → Review PricingCard     │ │ │                              │ │
│ │ → Complete Input docs    │ │ │ Coverage: 85%                │ │
│ └──────────────────────────┘ │ │ Missing docs: 3 components   │ │
│                              │ │                              │ │
│ ┌──────────────────────────┐ │ │ ────────────────────────────│ │
│ │ 👥 ACTIVITY PULSE        │ │ │ Experiment Pipeline          │ │
│ │ ────────────────────────│ │ │                              │ │
│ │ Partner 2 created:       │ │ │ Active (3):                  │ │
│ │ → Glass Card v2          │ │ │ ├─ Glass Card (Day 5)        │ │
│ │   (2 hours ago)          │ │ │ ├─ Pricing Table (Day 12)    │ │
│ │                          │ │ │ └─ 3D Visualizer (Day 18)    │ │
│ │ Partner 1 promoted:      │ │ │                              │ │
│ │ → ButtonComponent        │ │ │ Stale (1):                   │ │
│ │   to /packages/ui        │ │ │ ⚠️ Old Grid (25 days)        │ │
│ │   (5 hours ago)          │ │ │                              │ │
│ └──────────────────────────┘ │ │ Auto-archive: 5 days left    │ │
│                              │ │                              │ │
│ ┌──────────────────────────┐ │ │ ────────────────────────────│ │
│ │ ✍️ QUICK PAD             │ │ │ Design System Status         │ │
│ │ ────────────────────────│ │ │                              │ │
│ │ [Scratchpad area...]     │ │ │ 🎨 Token Coverage: 92%       │ │
│ │                          │ │ │                              │ │
│ │ // Glass card tilt       │ │ │ Colors: 100% ✓               │ │
│ │ const handleTilt = (e) =>│ │ │ Typography: 95% 🚧           │ │
│ │   setRotate({            │ │ │ Spacing: 88% ⚠️              │ │
│ │     x: e.clientY / 10,   │ │ │                              │ │
│ │     y: e.clientX / 10    │ │ │ Consistency Score: A-        │ │
│ │   })                     │ │ │                              │ │
│ │                          │ │ │ 🎯 Target: 95% (Q1 Goal)     │ │
│ │ [Clear Pad]              │ │ │                              │ │
│ └──────────────────────────┘ │ └──────────────────────────────┘ │
│                              │                                  │
│ ┌──────────────────────────┐ │                                  │
│ │ 🎯 PRIORITY STACK        │ │                                  │
│ │ ────────────────────────│ │                                  │
│ │ 1. [≡] Glass Card        │ │                                  │
│ │    Experiment (Active)   │ │                                  │
│ │                          │ │                                  │
│ │ 2. [≡] Button Component  │ │                                  │
│ │    Docs (Incomplete)     │ │                                  │
│ │                          │ │                                  │
│ │ 3. [≡] Pricing Table     │ │                                  │
│ │    Review Needed         │ │                                  │
│ └──────────────────────────┘ │                                  │
│                              │                                  │
│ ┌──────────────────────────┐ │                                  │
│ │ ✍️ QUICK CAPTURE         │ │                                  │
│ │ ────────────────────────│ │                                  │
│ │ [Type to capture...]     │ │                                  │
│ │                          │ │                                  │
│ │ #component  #experiment  │ │                                  │
│ │ @Partner1  @Partner2     │ │                                  │
│ └──────────────────────────┘ │                                  │
└──────────────────────────────┴──────────────────────────────────┘
```

**Layout Logic:**
- **Left Column (40% width):** Interactive widgets requiring user action (read brief, edit scratchpad, reorder priorities, capture ideas)
- **Right Column (60% width):** Product status visualization providing "big picture" context (component health, experiment timeline, design system metrics)
- **Vertical Flow:** Left column scrolls independently for deep work; Right column provides persistent context
- **Consistency:** Mirrors Mission Control's 2-column pattern for muscle memory across dashboards

---

**Option B: Flexible 3-Column Grid (ALTERNATIVE - Domain-Optimized)**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ My Desk Dashboard                                                      [⚙️] │
├─────────────────────────┬──────────────────────────┬─────────────────────────┤
│ INFORMATION             │ WORK MANAGEMENT          │ STATUS & CONTEXT        │
│ (Left - 30%)            │ (Center - 35%)           │ (Right - 35%)           │
│                         │                          │                         │
│ ┌─────────────────────┐ │ ┌──────────────────────┐ │ ┌─────────────────────┐ │
│ │ 📊 MORNING BRIEF    │ │ │ ✍️ QUICK PAD          │ │ │ 🎨 COMPONENT LIB    │ │
│ │ ───────────────────│ │ │ ──────────────────── │ │ │ ────────────────── │ │
│ │ Today's Focus:      │ │ │ [Scratchpad...]      │ │ │ ┌─────────────────┐ │ │
│ │ • 2 experiments     │ │ │                      │ │ │ │ Promoted: 12 ✓  │ │ │
│ │   need review       │ │ │ // Tilt effect       │ │ │ │ In Progress: 5🚧│ │ │
│ │ • Glass Card ready  │ │ │ const handleTilt =   │ │ │ │ Needs Review: 2⚠│ │ │
│ │ • Button docs       │ │ │   (e) => {           │ │ │ └─────────────────┘ │ │
│ │   incomplete        │ │ │     setRotate({      │ │ │                     │ │
│ │                     │ │ │       x: e.y / 10,   │ │ │ Coverage: 85%       │ │
│ │ 🔥 Priority:        │ │ │       y: e.x / 10    │ │ │                     │ │
│ │ → Review Pricing    │ │ │     })               │ │ └─────────────────────┘ │
│ └─────────────────────┘ │ │   }                  │ │                         │
│                         │ │                      │ │ ┌─────────────────────┐ │
│ ┌─────────────────────┐ │ │ [Clear Pad]          │ │ │ 🧪 EXPERIMENTS      │ │
│ │ 👥 ACTIVITY PULSE   │ │ └──────────────────────┘ │ │ ────────────────── │ │
│ │ ───────────────────│ │                          │ │ Active (3):         │ │
│ │ Partner 2:          │ │ ┌──────────────────────┐ │ │ • Glass Card (D5)   │ │
│ │ → Created Glass v2  │ │ │ 🎯 PRIORITY STACK    │ │ │ • Pricing (D12)     │ │
│ │   (2 hours ago)     │ │ │ ──────────────────── │ │ │ • 3D Viz (D18)      │ │
│ │                     │ │ │ 1. [≡] Glass Card    │ │ │                     │ │
│ │ Partner 1:          │ │ │    Experiment        │ │ │ Stale (1):          │ │
│ │ → Promoted Button   │ │ │                      │ │ │ ⚠️ Old Grid (D25)   │ │
│ │   to /packages/ui   │ │ │ 2. [≡] Button Docs   │ │ └─────────────────────┘ │
│ │   (5 hours ago)     │ │ │    (Incomplete)      │ │                         │
│ │                     │ │ │                      │ │ ┌─────────────────────┐ │
│ │ [View All]          │ │ │ 3. [≡] Pricing Review│ │ │ 🎨 DESIGN SYSTEM    │ │
│ └─────────────────────┘ │ │                      │ │ │ ────────────────── │ │
│                         │ │ [+ Add to Stack]     │ │ │ Token Coverage: 92% │ │
│ ┌─────────────────────┐ │ └──────────────────────┘ │ │                     │ │
│ │ ✍️ QUICK CAPTURE    │ │                          │ │ Colors: 100% ✓      │ │
│ │ ───────────────────│ │                          │ │ Typography: 95% 🚧  │ │
│ │ [Type idea...]      │ │                          │ │ Spacing: 88% ⚠️     │ │
│ │                     │ │                          │ │                     │ │
│ │ #component #exp     │ │                          │ │ Score: A-           │ │
│ └─────────────────────┘ │                          │ └─────────────────────┘ │
└─────────────────────────┴──────────────────────────┴─────────────────────────┘
```

**Layout Logic:**
- **Left Column (30%):** Information consumption (what's happening)
- **Center Column (35%):** Work management (scratchpad + priorities)
- **Right Column (35%):** Status & context (big picture view)
- **Flexibility:** Each column can have custom height widgets without forcing vertical stacking
- **Optimization:** Designed specifically for product workflow (scratchpad-first in center column)

### 3.2 Project Rooms

**Immersive multi-document environments tailored for specific initiatives.**

**Core Features:**
- Dual-Pane View for cross-referencing
- Contextual Chat for async coordination
- Live Presence indicators
- Saved room presets ("Sprint War Room", etc.)

**Key Actions:**
- `Alt+Click`: Open in split pane
- `Comment Drop`: Start discussion thread
- `Room Swap`: Fast-switch between rooms

**See:** `specifications/collaboration-features.md` #2 for contextual chat & presence implementation

### 3.3 Experiment Collaboration (Sprint 3+)

**Ownership & Attribution:**
- Track who created each experiment (Partner 1 vs 2)
- "Assigned To" field for requested prototypes

**Review Workflow:**
- **Status:** Draft → Ready for Review → Approved → Implementation
- **Approval:** Partner sign-off required for production
- **Feedback:** Basic comments/notes field

---

# Part III: Second Brain (The "Knowledge" Layer)

## 4. Smart Connections

**Intelligent link generation and bi-directional navigations.**

**Core Features:**
- Bi-directional Backlinks
- Unlinked Mentions detection
- Semantic Similarity (AI-powered)
- Reference Previews on hover

**Key Actions:**
- `One-Click Link`: Convert mention to [[wikilink]]
- `Explore Neighbors`: Show local graph
- `Ignore Suggestion`: Dismiss irrelevant relations

**See:** `specifications/content-navigation.md` #4 for backlinks & semantic similarity implementation

---

## 5. Visual Graph 2.0

**High-fidelity mapping of the entire knowledge repository.**

**Features:**
1.  **Galaxy View:** Global galaxy-style visualization clustered by directory.
2.  **Neighbor Focus:** Localized force-directed graph limited to 2-hop relations.
3.  **Filtered Views:** Ability to toggle node visibility by tag, status, or date.
4.  **Path Finder:** Visual highlight of the shortest link-path between two docs.

**Actions:**
1.  **`Node Click`:** Instant "thought-speed" navigation to the selected document.
2.  **`Reseed Graph`:** Change the center-node of the Local Graph via drag-and-drop.
3.  **`Export Snapshot`:** Save the current graph view as an SVG/PNG for strategy docs.

**Integrations:**
1.  **D3.js / React-Force-Graph:** Underlying physics engine for visualization.
2.  **Framer Motion:** Handles smooth transitions between local and global views.
3.  **Clerk metadata:** Colors nodes based on the current user's read/unread status.

**Access:**
- "🗺️ Graph View" button in Products Lab sidebar
- Route: `/products/graph`

**Status:** ✅ IMPLEMENTED (Sprint 1 - F2)

### 5.1 View Modes & Floating Panels (F3)

**Purpose:** Notion-style floating panels for document previews while browsing the graph

**Key Features:**
* Draggable overlay cards
* Graph remains interactive (dimmed slightly)
* Preview with "Read Full" link
* Framer Motion animations

**Status:** ✅ IMPLEMENTED (Sprint 1 - F3)

---

## 6. Quick Capture

**Frictionless entry point for saving ideas without breaking deep-work flow.**

**Core Features:**
- Global Modal (`Cmd+Shift+C`)
- Auto-Inbox to `/content/products/inbox/`
- Media drag support
- Batch submission

**Key Actions:**
- `Commit Inbox`: Finalize to markdown
- `Tag-on-Fly`: Use `#` or `@` triggers
- `Dismiss Modal`: Preserve draft state

**See:** `specifications/content-navigation.md` #5 for Quick Capture implementation

---

## 7. Search & Filtering

**Built-in (No External Service Needed):**
* Indexes all markdown files automatically
* Search across headings, paragraphs, code blocks
* Keyboard shortcut: `Cmd+K` or `Ctrl+K`
* Fuzzy search with `fuse.js`

**Integration:** Part of global Vault search system

**See Also:** Global Vault Search in `00-vault-overview-prd.md`

---

# Part IV: UI Playground & Component System

## 8. Component Workbench

**Interactive component testing environment for isolated development and refinement.**

**Core Features:**
- Live Component Rendering in isolation
- Interactive Props Panel with type-aware controls
- State Preview Matrix (default, hover, active, disabled, error)
- Code Export with syntax highlighting
- Responsive Preview (mobile, tablet, desktop)

**Key Actions:**
- `Tweak Props`: Adjust via control panel
- `Copy Code`: Export component usage
- `Toggle States`: View all states
- `Switch Viewport`: Test responsive behavior

**See:** `specifications/products-lab-system.md` #2 for Component Workbench implementation

---

## 9. Experiment Playground

**Rapid prototyping environment with throwaway zones for fearless experimentation.**

**Core Features:**
- Throwaway Pages at `/experiments/[name]`
- 30-Day Lifecycle with auto-archival
- Zero-Friction Creation (no tests, no reviews)
- Promotion Pipeline (3+ uses → `/packages/ui`)
- Experiment Metadata tracking

**Key Actions:**
- `Create Experiment`: Scaffold new page
- `Test Layout`: Live hot reload
- `Promote Component`: Graduate to production
- `Archive Old`: Manual or auto-archive

**See:** `specifications/products-lab-system.md` #3 for Experiment Playground lifecycle & promotion pipeline

---

## 10. Design Token System

**Live design token browser and interactive style guide.**

**Core Features:**
- Color Swatch Grid (hex, RGB, HSL)
- Typography Specimens (all scales)
- Spacing Visualizer (4px grid system)
- Token Search (fuzzy)
- Dark Mode Toggle

**Key Actions:**
- `Copy Token`: One-click Tailwind class copy
- `Browse Palette`: Navigate token groups
- `Preview Combo`: Test accessibility contrast
- `Export Tokens`: Download as JSON/CSS

**See:** `specifications/products-lab-system.md` #4 for Design Token browser & drift detection

---

## 11. Component Library & Documentation

**Centralized repository for promoted components and engineering patterns.**

**Core Features:**
- Component Catalog with live examples
- Interactive Playground (embedded workbench)
- Pattern Library ("How We Do X" guides)
- Version History with changelogs
- Accessibility Reports (automated a11y scores)

**Key Actions:**
- `View Component`: Browse with search/filter
- `Copy Snippet`: Import + usage example
- `Explore Pattern`: Read MDX guides
- `Check A11y`: Review accessibility compliance

**See:** `specifications/products-lab-system.md` #5 for Component Library catalog & accessibility audits

### 11.1 Shadcn UI Blocks Reference

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

### 11.2 Component Promotion Lifecycle

**From Experiment to Production:**

1. **Experiment** → Created in `/experiments/` (no tests, rapid iteration)
2. **Graduate** → Used 3+ times → Move to `/packages/ui/src/`
3. **Document** → Add Storybook story + TypeDoc props + A11y audit
4. **Deploy** → Available to all apps (Marketing Site, Vault, future products)

---

## 12. Cross-Section Integration with Biz Lab

**Products Lab and Biz Lab form a complete strategy-to-execution pipeline where product experiments validate business hypotheses and strategic decisions guide product development.**

### 12.1 Product-to-Strategy Feedback

**Purpose:** Product learnings automatically inform strategic business decisions.

**Key Features:**
- Experiment-to-Insight Pipeline
- Component Usage Signals
- Design Validation Data
- Customer Behavior Patterns
- Technical Feasibility Input

**Key Actions:**
- `Push to Strategy`: Send experiment results to Biz Lab inbox
- `Challenge Assumption`: Flag contradictory results
- `Validate Hypothesis`: Link experiment to strategic hypothesis
- `Request Strategy Review`: Trigger partner review

**Example:** Pricing Card experiment (Monthly: 45% vs Annual: 28%) → Auto-creates Biz Lab insight: "Indonesia prefers monthly billing"

### 12.2 Strategy-Driven Development

**Purpose:** Business strategies directly drive product roadmap.

**Key Features:**
- Strategic Initiative Tags
- Auto-Created Product Tasks
- Strategy Context Panels
- Alignment Scoring
- Blocking Dependencies

**Example:** "Indonesia Market Entry" strategy approved → Auto-creates experiments (WhatsApp integration, Indonesian UI, cultural color schemes)

### 12.3 Unified Review & Approval

**Purpose:** Streamlined review workflow across product and strategic stakeholders.

**Key Features:**
- Cross-Stakeholder Reviews
- Strategic Impact Assessment
- Experiment Approval Gates
- Unified Review Queue
- Context-Aware Comments

### 12.4 Shared Knowledge Graph

**Purpose:** Single graph showing connections between product components and business strategies.

**Key Features:**
- Cross-Section Graph Nodes (Products=Orange, Biz=Blue)
- Implementation & Validation Edges
- Impact Radius Visualization
- Domain Filtering

**See:** `specifications/products-lab-system.md` #6 and `specifications/biz-lab-system.md` #6 for cross-section integration implementation

---

## 13. Product Document Templates (Subpages)

To ensure consistency across the "Second Brain", Products Lab uses standardized subpage templates.

| Template Name | Key Components Required | Metadata Needs |
| :--- | :--- | :--- |
| **Strategy Doc** | Sankey Flow, Hover Previews | `targetMarket`, `kpis` |
| **Decision Log** | Pro/Con Table, Timeline | `status`, `approver` |
| **Sprint Plan** | Task List, Progress Bar | `sprintNumber`, `velocity` |
| **Research Paper** | Contextual Tooltips, Backlinks | `sources`, `methodology` |

### 12.1 Template Anatomy (MDX Examples)

**1. Strategy Document Template (`strategy-doc.mdx`):**
```mdx
---
title: "Project Alpha Strategy"
type: "strategy"
targetMarket: "SME/Indo"
kpis: ["Active Users > 1k", "Retention > 40%"]
---

<StrategyHeader
  status="draft"
  lastUpdated={frontmatter.date}
/>

## 🎯 Objective
Describe the high-level goal using the WhyThisMatters component.
<WhyThisMatters pulsing={true}>
  This document aligns the engineering team with the market reality of SME users.
</WhyThisMatters>

## 🗺️ Visual Flow
<CustomerJourneyFlow data={alphaFlowData} />

## 🧩 Key Pillars
<HoverPreviewGrid sources={['products/pillars/p1', 'products/pillars/p2']} />
```

**2. Decision Log Template (`decision-log.mdx`):**
```mdx
---
title: "Pivot to Clerk Auth"
type: "decision"
status: "approved"
approver: "Partner 1"
---

# Decision: {frontmatter.title}

| Phase | Status |
| :--- | :--- |
| **Proposal** | Jan 5 |
| **Review** | Jan 8 |
| **Approval** | Jan 10 (Partner 1) |

## 💡 Context
Why are we making this change?

## ⚖️ Trade-offs
<ComparisonTable
  options={[
    { name: "Clerk", pro: "OOB Team Auth", con: "Pricing" },
    { name: "NextAuth", pro: "Free", con: "Maintenance" }
  ]}
/>
```

---

# Part V: Technical Architecture

## 14. "Thought-Speed" Engine

**Concept:** The interface must move as fast as the user thinks. < 50ms latency for interactions.

**Core Technologies:**
- Next.js 14 (App Router)
- Contentlayer (Type-safe MDX)
- Tailwind CSS + Shadcn/UI
- Flexsearch (fast search)
- Shiki syntax highlighting

**See:** `specifications/products-lab-system.md` #7 for performance optimization & staged parsing system

---

## 15. Caching Strategy

**Multi-Layer Approach:**
- L1 (Memory): Zustand store for active docs
- L2 (Disk/ISR): Next.js Data Cache
- L3 (Edge): Vercel Edge Cache
- Prefetching on link hover

**Performance Targets:**
- Metadata scan: < 100ms
- Document load: < 200ms
- Navigation: < 50ms
- Graph rendering: 60 FPS

**See:** `specifications/content-navigation.md` #7 for caching implementation

---

## 16. Mission Control Deep Integration

**Products Lab is not a standalone app—it's a deeply integrated subsystem of the Vault ecosystem.** Every action, document, and experiment flows bidirectionally with Mission Control Dashboard to create a unified PM/PKM experience.

**Key Integration Features:**

1. **My Focus Widget** - Experiment tasks, component reviews, documentation drafts, overdue alerts
2. **Team Pulse** - Live presence, edit stream, experiment launches, component promotions
3. **Smart Recommendations** - Context-aware docs, topic clustering, read time estimates
4. **Quick Actions** - New experiment, log component, request review shortcuts
5. **Review Queue** - Inbound reviews, outbound tracking, stale warnings, inline preview
6. **Achievements** - UI Explorer, Experiment Velocity, Component Curator badges
7. **Global Search** - Unified `Cmd+K` search across Products & Biz Lab
8. **Contribution Analytics** - Metrics dashboard, attribution tracking, velocity trends
9. **Cross-Section Navigation** - Breadcrumbs, section switcher, deep linking

**Integration Points:**

| Layer | Technology | Target | Data Flow |
|-------|-----------|--------|-----------|
| Real-time Presence | Clerk + Pusher | < 500ms | Products → Team Pulse |
| Task Aggregation | File Watcher + Zustand | < 200ms | Markdown → My Focus |
| Review Queue | Frontmatter Parser | < 1s | needs_review → Queue |
| Achievements | LocalStorage + Clerk | Instant | docsRead → Unlock |
| Search | Fuse.js + FlexSearch | < 100ms | Content → Cmd+K |
| Activity Feed | Git Webhooks + Pusher | < 500ms | Commits → Stream |

**See:** `specifications/collaboration-features.md` #19-22 for Products Lab Mission Control integration implementation

---

## 17. Monorepo & Deployment

**Location:** `/apps/vault/app/products` route

**Shared Resources:**
- `/packages/ui` - Promoted components
- `/packages/design-tokens` - Tailwind config (source of truth)
- Imports from Marketing Site for testing

**Deployment:**
- Domain: `vault.klario-world.com/products`
- Hosting: Vercel (part of Vault app)
- Access: Clerk (inherited from Vault session)

**See:** `specifications/core-platform.md` #3 for monorepo architecture & authentication

---

# Part VI: Content & Navigation

## 18. Content Rendering

**Technology:** Custom MDX with `next-mdx-remote` and Shadcn UI

**Core Features:**
- Automatic navigation from `/content/products` folder structure
- Frontmatter support (YAML metadata)
- GitHub Flavored Markdown
- Custom interactive components
- Dark mode optimized

**Content Structure:**
```
/content/products/
├── components/ (atoms, molecules, organisms)
├── experiments/
└── patterns/
```

**See:** `specifications/content-navigation.md` #1-2 for MDX implementation & navigation generation

---

# Part VII: Workspace Experience & Development Workflows

## 23. Workspace Experience

### 23.1 "Zen" Focus Mode

**Purpose:** Deep work without distractions.
*   **UI:** Hides Sidebar, Floating Dock, and decorative elements.
*   **Typography:** Optimizes line-length (65ch) and contrast.
*   **Toggle:** `Cmd+` (Backtick) or floating toggle.

### 23.2 Split-Screen Multitasking

**Purpose:** Reference strategy while executing tactics.
*   **Action:** `Alt+Click` a link opens it in a split pane (like VS Code).
*   **Use Case:** Keep "Market Analysis" open on left while writing "Product Spec" on right.
*   **Sync:** Both panes share the same "Quick Pad" context.

### 23.3 Active Sidebar (The "Peripheral Brain")

**Instead of static links, the sidebar is context-aware:**

1.  **Top:** "My Desk" (Priority Stack).
2.  **Middle:** "Context" (Local Graph of current doc + Backlinks).
3.  **Bottom:** "File Tree" (The repository structure).

### 23.4 Command & Control

*   **Smart Command Palette (Cmd+K):** Context-aware.
    *   If reading a doc: Suggests "Copy Link", "View Graph", "Split Right".
    *   If in Desk: Suggests "Create New Task", "Open Daily Log".

### 23.5 Contextual Intelligence (Legacy Core)

**1. Document Hover Previews:**

**Purpose:** Quick preview of document content before clicking.

**Visual Design:**
```
┌──────────────────────────────────┐
│ 📄 Button Component (Products/Components)   │
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
└──────────────────────────────────┘
```

**Implementation:**
*   **Component:** `DocumentHoverPreview.tsx`
*   **Library:** Shadcn `Popover`
*   **Logic:** 500ms hover delay
*   **Data:** Clerk metadata for read status tracking

**Frontmatter Requirements:**
```yaml
title: "Go-to-Market Strategy"
readTime: 15
status: "reviewed"
keyTakeaways:
  - "Pre-sale validation before building"
  - "3+ verbal commits target"
```

**2. "Why This Matters" Tooltips:**

**Purpose:** Explain the strategic importance of every doc/section.

**Example Usage:**
```
Reading: "02-cultural-context.md"
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
*   **Component:** `WhyThisMattersTooltip.tsx`
*   **Library:** `@radix-ui/react-tooltip`
*   **Icon:** Info icon with pulsing animation

**Frontmatter Addition:**
```yaml
whyItMatters: |
  This GTM strategy is the execution playbook for Sprint 1.
  Without understanding this, you won't know what we're doing
  in Week 0 vs Week 5.
```

### 23.6 Visual Flows

**Interactive Diagrams:**
```
Awareness → Consideration → Trial → Purchase → Advocacy
   │            │            │         │          │
   └─ 40%      └─ 25%       └─ 15%    └─ 8%     └─ 2%
```

*   **Component:** `CustomerJourneyFlow.tsx`
*   **Library:** `react-flow-renderer` or Recharts Sankey
*   **Interaction:** Hover on stage to see metrics, click to nav.

### 23.7 Progress Gamification
*   **Strategy Explorer:** Achievement for reading 10+ docs.
*   **Deep Diver:** Achievement for spending >30m in a single doc.
*   **UI Explorer:** Confetti on landing after exploring components.

---

## 24. Experimentation Cycle

### 24.1 The "AI Loop" Workflow

**Standard Flow:**
1. **Request:** "Build a glassy pricing card with a hover tilt effect."
2. **Generate:** AI creates `/apps/products-lab/src/app/experiments/glass-card/page.tsx`
3. **Deploy:** Auto-deploys to `vault.klario-world.com/products/experiments/glass-card`
4. **Review:** User opens link, tests interactivity
5. **Refine:** "Make the shadow darker, add orange glow on hover."
6. **Iterate:** Repeat 2-5 until satisfied

### 24.2 Component Promotion Process

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

## 25. Git & Deployment Strategy

### 25.1 Branching Strategy

* **Main Branch:** `main` (always deployable)
* **Lab Experiments:** Direct commits to `main` (Lab is the Wild West)
* **Marketing Site:** Feature branches with PR review

**Rationale:** Products Lab is for rapid experimentation. Marketing Site requires stability.

### 25.2 Deployment Pipeline

* **Lab:** Auto-deploy every commit to `vault.klario-world.com/products`
* **Marketing:** Deploy only on merge to `main`

**Build Time:**
* Lab: ~2 minutes (any commit)
* Marketing: ~3 minutes (main branch only)

---

# Part VIII: Metrics & Success

## 26. Success Criteria

### 26.1 Performance Targets

* **Page Load:** < 1s (MDX pre-rendered)
* **Search Response:** < 100ms
* **Navigation Smoothness:** 60 FPS animations
* **Knowledge Graph:** 60 FPS with 100+ nodes
* **Thought-Speed Navigation:** < 50ms latency for interactions
* **Hot Reload:** < 500ms for code changes

### 26.2 User Engagement

* **Active Usage:** 5+ doc views per week
* **Search Adoption:** 40% of sessions use search
* **Knowledge Graph:** 20% of users try graph view
* **Average Session:** 10+ minutes

### 26.3 Content Metrics

* **Coverage:** 100% of `/products` docs indexed
* **Freshness:** Docs updated within 2 min of commit
* **Discoverability:** All docs reachable within 3 clicks
* **Cross-references:** 80% of docs have related docs links

### 26.4 Experimentation Velocity

* **Idea to Visual Verification:** < 10 minutes
* **Component Graduation:** 3+ uses before promotion
* **Iteration Speed:** Multiple refine cycles per hour

### 26.5 Reusability

* **Target:** >60% of Marketing Site components originated in Lab
* **Tracking:** Component provenance metadata
* **Quality Gate:** No production regressions caused by CSS experiments

### 26.6 Design Consistency

* **Design Token Drift:** 0 divergence between Lab and Marketing configs
* **Component Variants:** All share same design token base
* **Typography:** 100% using design system (no ad-hoc font sizes)

### 26.7 Developer Experience

* **Hot Reload:** < 500ms for code changes
* **Build Feedback:** Clear error messages with line numbers
* **Documentation:** Every promoted component fully documented

---

# Part IX: Approval & Status

## 27. Approval Checklist

### Pre-Development Requirements

**Architecture & Content:**
- [ ] **Staged Parsing Pipeline:** Frontmatter (L1) → Content (L2) → Graph (L3) defined.
- [ ] **Edge Caching:** Vercel Edge Cache configured for L3 graph data.
- [ ] **Migration:** All legacy MDX files scanned for frontmatter compatibility.

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

- [ ] **Partner 1 (Product):** "Second Brain" vision and Zen Mode approved.
- [ ] **Partner 2 (Marketing):** "Digital Office" daily workflow approved.
- [ ] **Founder Approval:** Playground scope and 'throwaway zone' concept approved.
- [ ] **Ready for AI Loop:** Workflow for generating experiments confirmed.

### Ready-to-Build Criteria

**UX & Performance:**
- [ ] **Legacy Features:** Hover Previews (500ms) & Tooltips verified.
- [ ] **New UX:** Split Screen & My Desk logic defined.
- [ ] **Latency Goal:** < 50ms navigation target confirmed.
- [ ] Vault Overview PRD approved (parent)
- [ ] Design tokens finalized
- [ ] At least 3 experiment ideas documented

---

## 28. Status History

- **v0.1.0 DRAFT** (Jan 5, 2026) - Initial Nextra-based documentation concept.
- **v0.1.1 PIVOT** (Jan 8, 2026) - Switched to Custom MDX + Shadcn for control.
- **v0.1.2 APPROVED** (Jan 10, 2026) - Approved for Sprint 1 build.
- **v0.1.3 REVIEW** (Jan 15, 2026) - UI Playground & Component Testing features defined.
- **v0.1.4 REVIEW** (Jan 18, 2026) - **PIVOT:** Revamp to "Second Brain" & "Digital Office" for Product Team.
- **v0.2.0 MERGED** (Jan 18, 2026) - **COMPREHENSIVE MERGE:** Combined "Second Brain & Digital Office" with "UI Playground & Component Testing" into unified vision.
- **v0.2.1 ENHANCEMENT** (Jan 18, 2026) - **DEEP INTEGRATION:** Expanded Section 17 with comprehensive Mission Control integration (10 subsections: My Focus, Team Pulse, Smart Recommendations, Quick Actions, Review Queue, Achievements, Global Search, Contribution Analytics, Cross-Section Navigation, Technical Implementation).
- **v0.2.2 CROSS-SECTION INTEGRATION** (Jan 18, 2026) - **BIZ LAB INTEGRATION:** Added comprehensive Section 12 with bidirectional Products Lab ↔ Biz Lab integration (5 subsections):
  - **12.1 Product-to-Strategy Feedback:** Experiment results feed strategic insights, component usage signals, A/B test validation data
  - **12.2 Strategy-Driven Development:** Strategic initiative tags, auto-created product tasks from approved strategies, alignment scoring
  - **12.3 Unified Review & Approval:** Cross-stakeholder reviews, strategic impact assessment, context-aware comments
  - **12.4 Shared Knowledge Graph:** Cross-section graph nodes showing both products (orange) and strategies (blue) with implementation/validation edges
  - **12.5 Technical Implementation:** CrossSectionEventBus with TypeScript event examples, integration points table with latency targets
- **v0.2.3 TECHNICAL EXTRACTION** (Jan 20, 2026) - **SPEC SEPARATION:** Extracted technical implementation details into spec files:
  - Created `products-lab-system.md` spec for My Desk Dashboard, Component Workbench, Experiment Playground, Design Tokens, Component Library
  - Updated `collaboration-features.md` with Products Lab Mission Control integration (Team Pulse, Review Queue, Achievements)
  - Simplified PRD to product-focused document with spec file references
- **v0.3.0 IMPLEMENTED** (TBD) - Live Production Launch.

---

**Last Updated:** January 20, 2026

