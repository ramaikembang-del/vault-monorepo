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

**Actions:**
1.  **`Cmd+P` (Push to Stack):** Instantly add the current document to the Priority Stack.
2.  **`Clear Pad`:** One-click wipe of scratchpad content after migrating to a doc.
3.  **`Focus Toggle`:** Collapse all sidebars to center the Brief or Priority doc.

**Integrations:**
1.  **Clerk metadata:** Syncs Priority Stack across devices for the same user.
2.  **Zustand Persist:** Ensures Quick Pad data survives browser refreshes.
3.  **Git Commits:** Analyzes recent repo activity to populate the Morning Brief.

### 3.2 Project Rooms

**Immersive multi-document environments tailored for specific initiatives.**

**Features:**
1.  **Dual-Pane View:** Side-by-side rendering of two documents for easy cross-referencing.
2.  **Contextual Chat:** Document-linked discussion stream for async partner coordination.
3.  **Live Presence:** Visual indicators showing which partners are currently in the room.
4.  **Room Presets:** Saved layouts for specific room types (e.g., "Sprint War Room").

**Actions:**
1.  **`Alt+Click` (Open Split):** Open a document in the secondary pane.
2.  **`Comment Drop`:** Highlight text to start a discussion thread in the sidebar.
3.  **`Room Swap`:** Fast-switch between active project rooms via the sidebar.

**Integrations:**
1.  **Clerk Presence:** Tracks real-time user location within the /products file tree.
2.  **Ably/Pusher:** Powers real-time chat and presence updates.
3.  **Markdown-Tasks:** Automatically aggregates `[ ]` items from docs into room task lists.

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

**Features:**
1.  **Bi-directional Backlinks:** Automated footer list of all docs referencing the current one.
2.  **Unlinked Mentions:** Identification of keywords that exist as doc titles but aren't linked.
3.  **Semantic Similarity:** Suggestion of "Related Docs" based on content embeddings.
4.  **Reference Previews:** On-hover popovers for every internal link (Legacy Core).

**Actions:**
1.  **`One-Click Link`:** Convert an unlinked mention into a formal [[wikilink]].
2.  **`Explore Neighbors`:** Trigger the Local Graph to show connections for the current doc.
3.  **`Ignore Suggestion`:** Dismiss semantic relations that aren't strategically relevant.

**Integrations:**
1.  **Flexsearch Engine:** Fast indexing of terms for unlinked mention scanning.
2.  **OpenAI Embeddings:** Generates vector representations for semantic similarity.
3.  **Contentlayer:** Provides the type-safe internal link map used for backlinks.

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

**Features:**
1.  **Global Modal:** `Cmd+Shift+C` trigger available from any page in the Vault.
2.  **Auto-Inbox:** Saves captures into a chronological `/content/products/inbox/` folder.
3.  **Media Drag:** Support for dragging images/links directly into the capture modal.
4.  **Multi-Entry:** Ability to stack 3-5 quick notes before submitting the batch.

**Actions:**
1.  **`Commit Inbox`:** Finalize a batch of captures into formal markdown files.
2.  **`Tag-on-Fly`:** Assign categories or partners to a capture via `#` or `@` triggers.
3.  **`Dismiss Modal`:** Instant close that preserves draft state for the next opening.

**Integrations:**
1.  **Next.js API Routes:** Handles the file creation logic in the monorepo content folder.
2.  **Canvas/File API:** Manages drag-and-drop media ingestion into the workspace.
3.  **Clerk Auth:** Attributes every capture to the correct partner in the history.

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

**Features:**
1.  **Live Component Rendering:** Render any component in isolation (e.g., `<PricingCard variant="tier3" />`).
2.  **Interactive Props Panel:** Real-time props manipulation with type-aware controls (string, boolean, number, enum).
3.  **State Preview Matrix:** View all component states simultaneously (default, hover, active, disabled, error).
4.  **Code Export:** One-click copy of component usage with current prop configuration.
5.  **Responsive Preview:** Toggle between mobile, tablet, and desktop viewports.

**Actions:**
1.  **`Tweak Props`:** Adjust component properties via interactive control panel.
2.  **`Copy Code`:** Export current component configuration as copy-paste-ready code.
3.  **`Toggle States`:** Cycle through interaction states to verify visual consistency.
4.  **`Switch Viewport`:** Test responsive behavior across device sizes.

**Integrations:**
1.  **ComponentPreviewCard:** Custom wrapper component for isolated rendering.
2.  **Shiki Highlighter:** Syntax highlighting for exported code snippets.
3.  **Clipboard API:** One-click code copying to clipboard.
4.  **React DevTools:** Automatic prop validation and type checking.

---

## 9. Experiment Playground

**Rapid prototyping environment with throwaway zones for fearless experimentation.**

**Features:**
1.  **Throwaway Pages:** Temporary full-page layouts at `/experiments/[name]` for quick testing.
2.  **30-Day Lifecycle:** Automatic archival of experiments older than 30 days via cron script.
3.  **Zero-Friction Creation:** No tests, no reviews—just build and iterate.
4.  **Promotion Pipeline:** Experiments used 3+ times auto-flag for graduation to `/packages/ui`.
5.  **Experiment Metadata:** Track creation date, last modified, creator (Partner 1/2), and usage count.

**Actions:**
1.  **`Create Experiment`:** Instantly scaffold a new throwaway page at `/experiments/[name]/page.tsx`.
2.  **`Test Layout`:** Preview full-page experiment with live hot reload.
3.  **`Promote Component`:** Graduate successful experiment to `/packages/ui` with docs.
4.  **`Archive Old`:** Manually or auto-archive experiments past their lifecycle.

**Integrations:**
1.  **Next.js File Routing:** Auto-generates routes from `/experiments/` folder structure.
2.  **Git Auto-Archive:** Node.js cron script scans and archives stale experiments.
3.  **Usage Tracker:** LocalStorage-based counter for promotion eligibility.
4.  **Bento Grid (Shadcn):** Visual gallery of experiment thumbnails with hover previews.

---

## 10. Design Token System

**Live design token browser and interactive style guide.**

**Features:**
1.  **Color Swatch Grid:** All design tokens displayed with hex, RGB, and HSL values.
2.  **Typography Specimens:** Live-rendered text at each scale (xs, sm, base, lg, xl, 2xl, etc.).
3.  **Spacing Visualizer:** Visual rulers showing the 4px grid system (1, 2, 4, 8, 16, 32, 64).
4.  **Token Search:** Fuzzy search across all token names and values.
5.  **Dark Mode Toggle:** Preview tokens in both light and dark themes simultaneously.

**Actions:**
1.  **`Copy Token`:** Click any swatch/specimen to copy the Tailwind class or CSS variable.
2.  **`Browse Palette`:** Navigate through categorized token groups (colors, typography, spacing).
3.  **`Preview Combo`:** Test color combinations for accessibility contrast ratios (WCAG AA/AAA).
4.  **`Export Tokens`:** Download current token set as JSON or CSS variables.

**Integrations:**
1.  **Design Tokens Package:** Imports from `/packages/design-tokens/tailwind.config.ts`.
2.  **Shadcn Data Table:** Renders tokens in sortable, filterable tables.
3.  **Radix Tooltip:** Displays additional token metadata on hover (usage count, related tokens).
4.  **Tailwind Config:** Live sync ensures 0% drift between Lab and production configs.

---

## 11. Component Library & Documentation

**Centralized repository for promoted components and engineering patterns.**

**Features:**
1.  **Component Catalog:** All `/packages/ui` components with live examples and props tables.
2.  **Interactive Playground:** Embedded workbench for each component (see Section 8).
3.  **Pattern Library:** "How We Do X" guides (data fetching, error handling, form validation).
4.  **Version History:** Track component evolution with changelog and deprecation notices.
5.  **Accessibility Reports:** Automated a11y scores for each component (keyboard nav, ARIA, contrast).

**Actions:**
1.  **`View Component`:** Browse catalog with search, filtering by category/status/creator.
2.  **`Copy Snippet`:** One-click copy of component import + usage example.
3.  **`Explore Pattern`:** Read MDX guide with live code examples for engineering patterns.
4.  **`Check A11y`:** Review accessibility compliance report for any component.

**Integrations:**
1.  **Storybook:** Auto-generates component stories from promoted `/packages/ui` exports.
2.  **MDX Processor:** Renders pattern library docs with embedded interactive components.
3.  **TypeDoc:** Extracts TypeScript prop types for automated documentation tables.
4.  **Axe-Core:** Runs accessibility audits on component examples.
5.  **Shadcn Blocks:** Uses `card-grid-hover`, `code-block-with-copy`, and `tabs-with-icons`.

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

**Products Lab and Biz Lab are not isolated silos—they form a complete strategy-to-execution pipeline where product experiments validate business hypotheses and strategic decisions guide product development.**

### 12.1 Product-to-Strategy Feedback

**Purpose:** Product learnings and experiment results automatically inform strategic business decisions.

**Features:**
1.  **Experiment-to-Insight Pipeline:** Completed experiments with conversion data auto-generate "Strategic Insights" for Biz Lab.
2.  **Component Usage Signals:** When UI components are promoted, usage analytics surface in Biz Lab market analysis docs.
3.  **Design Validation Data:** A/B test results from Products Lab validate or challenge Biz Lab's strategic assumptions.
4.  **Customer Behavior Patterns:** User interactions with experiments feed into Biz Lab's customer research database.
5.  **Technical Feasibility Input:** Component development complexity estimates inform Biz Lab's roadmap prioritization.

**Actions:**
1.  **`Push to Strategy`:** From experiment results, create strategic insight that appears in Biz Lab inbox.
2.  **`Challenge Assumption`:** Flag experiment results that contradict business strategy for review.
3.  **`Validate Hypothesis`:** Mark experiment as validating a specific Biz Lab strategic hypothesis.
4.  **`Request Strategy Review`:** Trigger Biz Lab partner to review strategy based on product evidence.

**Integrations:**
1.  **Experiment Results Parser:** Analyzes frontmatter `conversionData` and `userBehavior` fields to extract strategic insights.
2.  **Biz Lab Inbox API:** Creates inbox items in `/content/biz/inbox/` with experiment learnings.
3.  **Cross-Section Event Bus:** Broadcasts `EXPERIMENT_COMPLETED` events to Biz Lab subscribers.
4.  **Analytics Bridge:** Connects product usage data to Biz Lab's market intelligence dashboard.

**Example Flow:**
```
Products Lab: Pricing Card Experiment
→ Monthly pricing: 45% conversion
→ Annual pricing: 28% conversion
→ Auto-creates Biz Lab insight: "Indonesia market prefers monthly billing"
→ Triggers review of /biz/financial/pricing-strategy.md
```

---

### 12.2 Strategy-Driven Development

**Purpose:** Business strategies from Biz Lab directly drive product roadmap and experimental priorities.

**Features:**
1.  **Strategic Initiative Tags:** Components and experiments tagged with Biz Lab strategic initiatives (e.g., `#indonesia-market-entry`, `#q1-gtm`).
2.  **Auto-Created Product Tasks:** When Biz Lab strategy is approved, automatically creates corresponding Products Lab experiments.
3.  **Strategy Context Panels:** While building components, sidebar shows the Biz Lab strategic docs that motivated this work.
4.  **Alignment Scoring:** Each experiment shows strategic alignment percentage based on Biz Lab priorities.
5.  **Blocking Dependencies:** Product work can be blocked pending Biz Lab strategic decisions.

**Actions:**
1.  **`View Strategy Context`:** From component/experiment, jump to the Biz Lab strategy that motivated it.
2.  **`Link to Strategy`:** Explicitly associate experiment with strategic initiative for tracking.
3.  **`Request Strategic Clarity`:** Flag product work as blocked pending Biz Lab decision.
4.  **`Show Alignment`:** Display how current experiment contributes to strategic OKRs.

**Integrations:**
1.  **Unified Tagging System:** Shared tag namespace with Biz Lab for strategic initiatives.
2.  **Strategy Status Sync:** Real-time updates when Biz Lab strategies are approved/changed.
3.  **Task Dependency Engine:** Detects when product tasks depend on strategic decisions.
4.  **Contentlayer Cross-Index:** Links between `/products` components and `/biz` strategies.

**Example Flow:**
```
Biz Lab: "Indonesia Market Entry Strategy" approved
→ Auto-creates Products Lab tasks:
   - [ ] Build WhatsApp integration experiment
   - [ ] Design Indonesian language UI components
   - [ ] A/B test culturally-adapted color schemes
→ Each task links back to /biz/strategy/indonesia-market-entry.md
```

---

### 12.3 Unified Review & Approval

**Purpose:** Streamlined review workflow where both product and strategic stakeholders collaborate.

**Features:**
1.  **Cross-Stakeholder Reviews:** Component promotions can require approval from both product lead AND business stakeholder.
2.  **Strategic Impact Assessment:** Component reviews show which Biz Lab strategies are affected by the change.
3.  **Experiment Approval Gates:** Some experiments require strategic sign-off before launch (e.g., pricing changes).
4.  **Unified Review Queue:** Mission Control shows both component promotions and strategic approvals in one queue.
5.  **Context-Aware Comments:** Reviewers can reference both product docs and strategy docs in review comments.

**Actions:**
1.  **`Request Cross-Approval`:** Flag component as requiring both product AND business review.
2.  **`View Strategic Impact`:** See which Biz Lab docs are affected by this component change.
3.  **`Approve with Context`:** Approve component and auto-update related Biz Lab execution status.
4.  **`Escalate to Strategy`:** Elevate component decision to strategic decision if impact is broader than expected.

**Integrations:**
1.  **Unified Review Queue:** Shared Zustand store for all review items across sections.
2.  **Notification Orchestration:** Pusher alerts correct stakeholders based on approval requirements.
3.  **Frontmatter Parser:** Scans `needsStrategicApproval: true` to route reviews appropriately.
4.  **Audit Trail:** Clerk metadata tracks complete approval chain across both sections.

---

### 12.4 Shared Knowledge Graph

**Purpose:** Single knowledge graph showing connections between product components and business strategies.

**Features:**
1.  **Cross-Section Graph Nodes:** Visual graph shows both product components (orange) and strategic docs (blue) together.
2.  **Implementation Edges:** Lines connecting strategy docs to implementing components with status indicators.
3.  **Validation Edges:** Lines connecting experiments to strategies they validate/challenge.
4.  **Impact Radius Visualization:** When clicking a strategy, highlights all affected products; vice versa.
5.  **Filter by Domain:** Toggle to show only product graph, only strategy graph, or unified view.

**Actions:**
1.  **`Toggle Unified Graph`:** Switch between Products-only, Biz-only, and combined graph views.
2.  **`Trace Implementation`:** Click strategy to see all components that implement it.
3.  **`Trace Strategy`:** Click component to see all strategies that motivated it.
4.  **`Export Impact Map`:** Generate visual report showing strategy-to-product connections.

**Integrations:**
1.  **React-Force-Graph:** Extended to support multi-type nodes (strategy vs product).
2.  **Cross-Section Index:** Build-time analysis creates bidirectional reference map.
3.  **Color Coding System:** Unified palette (Biz=Blue, Products=Orange, Decisions=Red).
4.  **WebGL Renderer:** Handles large graphs with 200+ nodes across both sections.

---

### 12.5 Technical Implementation Summary

**Cross-Section Integration Points:**

| Integration Layer | Technology | Latency Target | Data Flow |
|------------------|------------|----------------|-----------|
| **Product → Strategy** | Experiment Results Parser + Biz Inbox API | < 1s | Experiment data → Strategic insights |
| **Strategy → Product** | Strategy Status Sync + Task Creator | < 500ms | Strategy approval → Product tasks |
| **Unified Reviews** | Shared Review Queue + Pusher | < 500ms | Approval requests across sections |
| **Knowledge Graph** | Cross-Section Index + React-Force-Graph | < 2s | Unified graph rendering |
| **Real-time Sync** | CrossSectionEventBus + WebSocket | < 500ms | Bidirectional status updates |

**Integration Event Examples:**
```typescript
// Products Lab → Biz Lab
eventBus.publish({
  type: 'EXPERIMENT_RESULTS',
  source: 'products',
  target: 'biz',
  payload: {
    experiment: 'pricing-card-monthly-vs-annual',
    winner: 'monthly',
    conversionDelta: +17,
    strategicInsight: 'Indonesia market strongly prefers monthly billing',
    affectedStrategies: ['/biz/financial/pricing-strategy.md'],
    suggestedAction: 'update_pricing_model'
  }
})

// Biz Lab → Products Lab
eventBus.publish({
  type: 'STRATEGY_APPROVED',
  source: 'biz',
  target: 'products',
  payload: {
    strategy: 'indonesia-market-entry',
    approver: 'Partner 1',
    requiredExperiments: [
      'whatsapp-integration',
      'indonesian-language-ui',
      'cultural-color-schemes'
    ],
    priority: 'high',
    deadline: '2026-Q1'
  }
})
```

**See:**
- `10-biz-lab-prd.md` Section 8 for Biz Lab's perspective on cross-section integration
- `00-vault-overview-prd.md` Section 3.2 for Mission Control orchestration

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

**Stack:**
*   **Framework:** Next.js 14 (App Router)
*   **Content Engine:** `contentlayer` (Type-safe MDX)
*   **State:** `swr` or `tanstack-query` for smart caching
*   **Search:** `flexsearch` (Memory-efficient, faster than fuse.js for large docs)
*   **Styling:** Tailwind CSS (imports from `/packages/design-tokens`)
*   **Component Library:** Shadcn/UI base + custom Clario components
*   **Interactivity:** React Server Components + Client Components for experiments
*   **Code Preview:** Shiki syntax highlighting

---

## 15. Staged Parsing System

**Problem:** Parsing 500+ MDX files blocks the main thread.
**Solution:** 3-Stage Loading Pipeline.

1.  **Stage 1: Metadata Scan (Instant)**
    *   On boot, scan only `frontmatter` (Title, Tags, Status).
    *   Result: Sidebar & Search are ready immediately.
    *   *Time:* < 100ms

2.  **Stage 2: Critical Content (On Demand)**
    *   When clicking a link, parse only the target document.
    *   Use `Suspense` streaming for the main content body.
    *   *Time:* < 200ms

3.  **Stage 3: Deep Analysis (Background)**
    *   Web Worker validates backlinks across all files.
    *   Generates the Knowledge Graph data.
    *   *Time:* Non-blocking (Background)

---

## 16. Multi-Layer Caching

*   **L1 (Memory):** Active document and graph nodes kept in Zustand store.
*   **L2 (Disk/ISR):** Next.js Data Cache for rendered MDX components.
*   **L3 (Edge):** Vercel Edge Cache for static assets and search indices.
*   **Prefetching:** Hovering a link triggers Stage 2 parsing for that doc.

**Key Features:**
* Seamless integration with Vault (same layout, fonts, headers)
* Fast MDX rendering
* Mobile-responsive navigation (Sheet component)
* Breadcrumbs and Table of Contents

---

## 17. Mission Control Deep Integration

**Products Lab is not a standalone app—it's a deeply integrated subsystem of the Vault ecosystem.** Every action, document, and experiment flows bidirectionally with Mission Control Dashboard to create a unified PM/PKM experience.

### 17.1 My Focus Widget Integration

**Purpose:** Surface Products Lab work items directly into the partner's personal command center.

**Features:**
1.  **Experiment Tasks:** Active experiments flagged with `status: in-progress` appear in "Your Focus Today".
2.  **Component Reviews:** Components awaiting promotion (`usageCount >= 3`) auto-appear as review items.
3.  **Documentation Drafts:** Incomplete component docs (missing props table/examples) shown as "Active Drafts".
4.  **Overdue Alerts:** Experiments older than 25 days (5 days before auto-archive) trigger urgency badges.
5.  **Drag Prioritization:** Reorder Products tasks alongside Biz tasks in unified priority queue.

**Actions:**
1.  **`Check Off Task`:** Marking "Document ButtonComponent" complete updates frontmatter `documented: true`.
2.  **`Resume Drafting`:** Click to jump directly to `/products/components/button` in edit mode.
3.  **`Dismiss Experiment`:** Archive an experiment early without waiting for 30-day cron.

**Integrations:**
1.  **File Watcher API:** Monitors `/content/products/` for markdown changes and updates task status real-time.
2.  **LocalStorage Sync:** Preserves task order and completion state across browser sessions.
3.  **Clerk Metadata:** Associates tasks with partner identity for multi-user attribution.
4.  **Zustand Store:** Centralized state management for task queue shared with Biz Lab tasks.

**Data Flow:**
```typescript
// Products Lab → Mission Control
{
  type: "PRODUCTS_TASK_UPDATE",
  payload: {
    taskId: "experiment-glass-card",
    status: "completed",
    partner: "Partner 1",
    timestamp: "2026-01-18T14:30:00Z"
  }
}
```

---

### 17.2 Team Pulse Integration

**Purpose:** Real-time visibility into partner activity within Products Lab for async coordination.

**Features:**
1.  **Live Presence:** "Partner 2 is viewing: Glass Card Experiment" with green online dot.
2.  **Edit Stream:** "Partner 1 created new component: PricingTable" appears in activity feed within 500ms.
3.  **Experiment Launches:** "Partner 2 deployed: /experiments/3d-visualizer" with clickable deep link.
4.  **Component Promotions:** "Partner 1 promoted ButtonComponent to /packages/ui" with celebration icon.
5.  **Review Requests:** "Partner 2 requested review: CardComponent promotion" with `Approve`/`Request Changes` buttons.

**Actions:**
1.  **`Jump to Doc`:** Click activity item to navigate directly to `/products/experiments/glass-card`.
2.  **`Reply`:** Inline comment on activity (e.g., "Love the tilt effect!") stores in comment metadata.
3.  **`React`:** Quick emoji response (👍, 🔥, ❓) to partner activity.
4.  **`View History`:** Expand to see full timeline of edits/commits for a component.

**Integrations:**
1.  **Clerk Presence API:** Tracks partner's current route (`/products/experiments/glass-card`) with < 500ms latency.
2.  **Pusher WebSocket:** Broadcasts real-time events to all active Vault sessions.
3.  **Git Webhooks:** Detects commits to `/content/products/` and extracts commit message for feed.
4.  **React Query Invalidation:** Auto-refreshes activity feed when new events arrive via WebSocket.

**WebSocket Event Example:**
```typescript
// Pusher channel: "vault-team-pulse"
{
  event: "products-activity",
  data: {
    partner: "Partner 2",
    action: "created_experiment",
    resource: "Glass Card",
    route: "/products/experiments/glass-card",
    timestamp: "2026-01-18T14:32:15Z"
  }
}
```

---

### 17.3 Smart Recommendations Engine

**Purpose:** AI-powered suggestions for Products Lab exploration based on partner behavior and project context.

**Features:**
1.  **Context-Aware Docs:** If viewing `/products/components/button`, suggests related "Input Component" and "Form Patterns".
2.  **Unread Experiments:** Highlights experiments created by partner that current user hasn't visited.
3.  **Topic Clustering:** Groups components by tags (`#forms`, `#navigation`) for thematic discovery.
4.  **Read Time Estimates:** "5 min read" for component docs, "2 min demo" for experiments.
5.  **Strategy Priority Badges:** Components tagged with current sprint's `targetMarket` get "🎯 High Priority" label.

**Actions:**
1.  **`Start Reading`:** Deep link to `/products/components/input` with scroll to "Props Table".
2.  **`Save for Later`:** Bookmark component to "My Desk" Priority Stack (Section 3.1).
3.  **`Dismiss`:** Remove suggestion and train recommendation algo (won't suggest similar).
4.  **`View All Topic`:** Navigate to filtered view showing all `#forms` components.

**Integrations:**
1.  **Clerk User Metadata:** `docsRead: ["products/components/button"]` tracks reading history.
2.  **Contentlayer:** Provides frontmatter (`tags`, `targetMarket`) for intelligent filtering.
3.  **FlexSearch Index:** Powers fuzzy matching for "components similar to Button".
4.  **Recommendation Algorithm:** Collaborative filtering based on both partners' reading patterns.

**Algorithm Logic:**
```typescript
function getRecommendations(currentDoc: string, userHistory: string[]) {
  const currentTags = getDocTags(currentDoc)
  const unreadDocs = getUnreadDocs(userHistory)

  return unreadDocs
    .filter(doc => hasOverlappingTags(doc, currentTags))
    .sort((a, b) => {
      const aScore = calculateRelevance(a, currentDoc, currentSprintContext)
      const bScore = calculateRelevance(b, currentDoc, currentSprintContext)
      return bScore - aScore
    })
    .slice(0, 3) // Top 3 recommendations
}
```

---

### 17.4 Quick Actions Integration

**Purpose:** One-click shortcuts to create Products Lab resources directly from Mission Control.

**Features:**
1.  **"New Experiment" Button:** Scaffolds `/experiments/[name]/page.tsx` with boilerplate in < 2 seconds.
2.  **"Log Component" Shortcut:** Opens component docs template at `/products/components/new`.
3.  **"Request Review" Toggle:** Sets `needs_review: true` on current component frontmatter.
4.  **Recent Actions History:** Shows last 5 Products Lab actions taken (e.g., "Created Glass Card 5 min ago").
5.  **Template Selector:** Dropdown for experiment types (3D Visual, Form Prototype, Animation Demo).

**Actions:**
1.  **`New Experiment`:** Opens modal → Enter name → Auto-creates file → Navigates to `/products/experiments/[name]`.
2.  **`Log Component`:** Opens MDX template → Pre-fills partner name in `author` field → Saves to `/content/products/components/`.
3.  **`Request Review`:** Updates frontmatter → Notifies partner via Team Pulse → Adds to Review Queue.
4.  **`View History`:** Expands to show detailed action log with timestamps and partner attribution.

**Integrations:**
1.  **Next.js API Routes:** `/api/products/create-experiment` handles file creation in monorepo.
2.  **File System API:** Node.js `fs.writeFile` to create new MDX files with templates.
3.  **Clerk Auth Context:** Auto-attributes actions to current partner's identity.
4.  **Activity Logger:** Stores action history in Zustand store for dashboard display.

**API Endpoint Example:**
```typescript
// POST /api/products/create-experiment
{
  name: "glass-card",
  type: "3d-visual",
  partner: "Partner 1",
  template: "experiment-boilerplate.tsx"
}

// Response
{
  success: true,
  path: "/products/experiments/glass-card",
  fileCreated: "/content/products/experiments/glass-card.mdx"
}
```

---

### 17.5 Review Queue Integration

**Purpose:** Unified review workflow for component promotions and experiment approvals across Products Lab and Biz Lab.

**Features:**
1.  **Inbound Reviews:** Components flagged `needs_review: true` appear in partner's queue.
2.  **Outbound Tracking:** See status of reviews you requested ("Awaiting Partner 2's approval").
3.  **Stale Warnings:** Reviews pending > 2 days show yellow alert badge.
4.  **Inline Preview:** Hover to see component preview without leaving dashboard.
5.  **Batch Actions:** Approve/reject multiple components in one click.

**Actions:**
1.  **`Approve`:** Sets `reviewStatus: approved`, removes from queue, triggers promotion pipeline.
2.  **`Request Changes`:** Opens comment modal → Partner notified → Component stays in queue.
3.  **`Nudge`:** Sends push notification to partner ("Partner 1 is waiting on ButtonComponent review").
4.  **`View Full`:** Navigate to `/products/components/button` to test component interactively.

**Integrations:**
1.  **Frontmatter Parser:** Scans all `/content/products/**/*.mdx` for `needs_review: true`.
2.  **File Modification Watcher:** Detects when frontmatter changes and updates queue instantly.
3.  **Pusher Notifications:** Real-time alerts when partner submits review request.
4.  **Clerk Metadata:** Tracks review history per partner for contribution analytics.

**Review Queue Data Model:**
```typescript
interface ReviewQueueItem {
  id: string
  type: "component" | "experiment"
  title: "ButtonComponent"
  path: "/products/components/button"
  requester: "Partner 1"
  reviewer: "Partner 2"
  status: "pending" | "approved" | "changes-requested"
  createdAt: "2026-01-18T10:00:00Z"
  staleDays: 1 // Auto-calculated
}
```

---

### 17.6 Achievement Tracker Integration

**Purpose:** Gamified progress tracking to encourage Products Lab exploration and contribution.

**Features:**
1.  **UI Explorer Badge:** Unlocked after viewing 10+ components (triggers confetti on dashboard).
2.  **Experiment Velocity:** "Created 5 experiments this week" with progress bar toward 10.
3.  **Component Curator:** Promoted 3+ components to `/packages/ui` earns gold star.
4.  **Collaboration Champion:** Reviewed 5+ partner experiments unlocks team achievement.
5.  **Streak Counter:** "7-day documentation streak" for consistent component docs contributions.

**Actions:**
1.  **`View Progress`:** Expand to see detailed breakdown (e.g., "8/10 components viewed").
2.  **`Celebrate`:** Replay confetti animation for unlocked achievement.
3.  **`Share`:** Copy achievement link to share with partner (e.g., "Partner 1 earned Component Curator!").

**Integrations:**
1.  **LocalStorage Tracking:** `docsRead`, `experimentsCreated`, `componentsPromoted` counters.
2.  **Clerk User Metadata:** Persists achievement state across devices and sessions.
3.  **React Confetti:** Visual celebration on dashboard when achievement unlocks.
4.  **Biz Lab Sync:** Achievements earned in Products Lab also contribute to Vault-wide leaderboard.

**Achievement Calculation:**
```typescript
// Triggered on every Products Lab navigation
function checkAchievements(userMetadata: VaultMetadata) {
  const achievements = []

  if (userMetadata.docsRead.filter(d => d.startsWith('products/')).length >= 10) {
    achievements.push('ui-explorer')
  }

  if (userMetadata.componentsPromoted >= 3) {
    achievements.push('component-curator')
  }

  // Update Clerk metadata
  updateUserMetadata({ achievements })

  // Trigger confetti if new achievement
  if (achievements.some(a => !userMetadata.achievements.includes(a))) {
    triggerConfetti()
  }
}
```

---

### 17.7 Global Search Integration

**Purpose:** Unified search across Products Lab and Biz Lab via Command Palette (`Cmd+K`).

**Features:**
1.  **Component Search:** "button" finds ButtonComponent with props preview in search results.
2.  **Experiment Search:** "glass" finds Glass Card experiment with thumbnail preview.
3.  **Action Search:** "new exp" suggests "New Experiment" quick action.
4.  **Tag Filtering:** "#forms" shows all form-related components and patterns.
5.  **Recent Searches:** Saves last 5 searches for quick access.

**Actions:**
1.  **`Navigate`:** Press Enter to jump to selected component/experiment.
2.  **`Quick View`:** Press `Space` to preview in floating panel without navigation.
3.  **`Filter Section`:** Toggle to search only Products Lab (excludes Biz Lab results).

**Integrations:**
1.  **cmdk Library:** Powers Command Palette UI with keyboard-first UX.
2.  **Fuse.js Fuzzy Search:** Indexes all Products Lab content for < 100ms search response.
3.  **FlexSearch:** Alternative search engine for larger content volumes (500+ docs).
4.  **Contentlayer:** Provides structured frontmatter for rich search result metadata.

**Search Index Structure:**
```typescript
interface SearchIndex {
  sections: {
    products: {
      components: [
        {
          title: "ButtonComponent",
          path: "/products/components/button",
          tags: ["#ui", "#forms"],
          preview: "Primary action button with variants...",
          author: "Partner 1"
        }
      ],
      experiments: [...],
      patterns: [...]
    },
    biz: {...}
  },
  actions: [
    { label: "New Experiment", action: "create-experiment" }
  ]
}
```

---

### 17.8 Contribution Analytics Integration

**Purpose:** Track partner contributions to Products Lab for transparency and accountability.

**Features:**
1.  **Metrics Dashboard:** "Partner 1: 12 components, Partner 2: 8 experiments" in Mission Status widget.
2.  **Weekly Breakdown:** Bar chart showing daily experiment creation velocity.
3.  **Attribution Tracking:** Every component docs shows "Created by Partner 1, Edited by Partner 2".
4.  **Review Contributions:** "Partner 2 reviewed 5 components this week" visible in Team Pulse.
5.  **Velocity Trends:** Line graph showing month-over-month component promotion rate.

**Actions:**
1.  **`View Details`:** Drill down into partner's contribution history.
2.  **`Export Report`:** Download CSV of all Products Lab contributions for retrospectives.
3.  **`Filter by Partner`:** Show only components created by Partner 1.

**Integrations:**
1.  **Git Commit Attribution:** Parses git log to extract author from component file history.
2.  **Clerk Metadata:** Stores `productsLabContributions` object per partner.
3.  **Recharts:** Visualization library for contribution graphs on dashboard.
4.  **CSV Export API:** Generates contribution reports on demand.

**Contribution Data Model:**
```typescript
interface PartnerContributions {
  partner: "Partner 1" | "Partner 2"
  products: {
    componentsCreated: 12
    componentsEdited: 5
    experimentsLaunched: 8
    componentsPromoted: 3
    reviewsCompleted: 7
    docsRead: 45
  }
  weeklyVelocity: {
    "2026-W03": { components: 3, experiments: 2 },
    "2026-W02": { components: 2, experiments: 5 }
  }
}
```

---

### 17.9 Cross-Section Navigation

**Purpose:** Seamless context switching between Products Lab, Biz Lab, and Mission Control.

**Features:**
1.  **Breadcrumb Trails:** "Mission Control > Products Lab > Components > Button" at top of every page.
2.  **Section Switcher:** Floating dock shows active section with orange highlight (`/products` active).
3.  **Recent Pages:** `Cmd+E` shows last 10 pages visited across all sections.
4.  **Deep Linking:** Share `/products/components/button#props-table` to jump to specific section.
5.  **Back Navigation:** Browser back button works correctly across section boundaries.

**Actions:**
1.  **`Click Breadcrumb`:** Jump to any ancestor level (e.g., Products Lab home).
2.  **`Dock Navigation`:** Click Products icon to navigate to `/products`.
3.  **`Cmd+1-4`:** Keyboard shortcuts to switch sections (1=Dashboard, 2=Products, 3=Biz, 4=Settings).

**Integrations:**
1.  **Next.js App Router:** Native support for deep linking and back navigation.
2.  **Zustand Navigation State:** Preserves scroll position when navigating back.
3.  **Floating Dock Component:** Shared across all Vault sections for unified UX.
4.  **URL State Management:** Syncs active section with browser URL for bookmarking.

---

### 17.10 Technical Implementation Summary

**Core Integration Points:**

| Integration Layer | Technology | Latency Target | Data Flow |
|------------------|------------|----------------|-----------|
| **Real-time Presence** | Clerk + Pusher | < 500ms | Products Lab → Team Pulse |
| **Task Aggregation** | File Watcher + Zustand | < 200ms | Markdown `[ ]` → My Focus |
| **Review Queue** | Frontmatter Parser | < 1s | `needs_review: true` → Queue Widget |
| **Achievements** | LocalStorage + Clerk | Instant | `docsRead++` → Achievement Unlock |
| **Search Index** | Fuse.js + FlexSearch | < 100ms | Content → Command Palette |
| **Activity Feed** | Git Webhooks + Pusher | < 500ms | Commits → Team Pulse Stream |
| **Recommendations** | Collaborative Filtering | < 2s | User History → Smart Recs Widget |
| **Contribution Analytics** | Git Log + Clerk Metadata | < 3s | Commit History → Mission Status |

**Event Broadcasting Architecture:**
```typescript
// Central event bus for Mission Control ↔ Products Lab communication
class VaultEventBus {
  // Products Lab publishes events
  publish(event: VaultEvent) {
    pusher.trigger('vault-team-pulse', event.type, event.payload)
    zustandStore.dispatch(event)
    clerkMetadata.update(event)
  }

  // Mission Control subscribes to events
  subscribe(eventType: string, handler: Function) {
    pusher.bind(eventType, handler)
  }
}

// Usage in Products Lab
eventBus.publish({
  type: 'COMPONENT_PROMOTED',
  payload: {
    component: 'ButtonComponent',
    partner: 'Partner 1',
    timestamp: Date.now()
  }
})
```

**See:** `00-vault-overview-prd.md` Section 3.2 for Mission Control Dashboard specification

---

## 18. Monorepo Structure

**Location:** `/apps/vault` (Products Lab is a section at `/products` route)

**Shared Resources:**
* `/packages/ui` - Promoted components
* `/packages/design-tokens` - Tailwind config
* Imports from Marketing Site when testing

---

## 19. Design Token Sync

**Source of Truth:** `/packages/design-tokens/tailwind.config.ts`

**Tokens:**
* Colors: Primary (Blue), Accent (Orange), Success (Green)
* Typography: Plus Jakarta Sans (weights: 400, 500, 700)
* Spacing: Consistent 4px grid

**Sync:** Automatic (both Products Lab and Marketing Site import same config)

**See:** `../specifications/design-foundation.md` for complete token reference

---

## 20. Deployment

* **Domain:** `vault.klario-world.com/products`
* **Hosting:** Vercel (part of Vault app)
* **Access Control:** Clerk (inherited from Vault session)
* **Note:** Products Lab is a **section** of Vault, not a standalone site

**See:** `00-vault-overview-prd.md` for unified architecture details

---

## 21. Authentication & Access Control

### 21.1 Clerk Integration

**Middleware Setup:** Inherited from Vault-level authentication

**Access Control:**
```typescript
// Check if user has Products Lab access
import { currentUser } from '@clerk/nextjs'

export default async function ProductsLabPage() {
  const user = await currentUser()
  const hasAccess = user?.publicMetadata?.productsLabAccess === true

  if (!hasAccess) {
    return <div>Access Denied. Contact workspace owner.</div>
  }

  return <div>Welcome to Products Lab!</div>
}
```

### 21.2 Access Levels

* **Full Access:** Can view all Products Lab documents
* **No Access:** Redirected to access denied page

**User Management:** Controlled via Clerk Dashboard (Team Management) and unified Vault admin panel at `/admin` route.

---

# Part VI: Content & Navigation

## 22. Content Rendering System

### 22.1 MDX Implementation

**Technology:** Custom MDX with `next-mdx-remote` and Shadcn UI

> **Note:** Originally planned for Nextra 3.0. Pivoted to custom implementation for:
> - Greater design control
> - Unified Vault design system
> - Simplified build process
> - Better TypeScript integration

### 22.2 Core Features

* **Automatic Navigation:** Generated from `/content/products` folder structure
* **Frontmatter Support:** YAML metadata (title, readTime, status, tags, etc.)
* **GitHub Flavored Markdown:** Tables, task lists, syntax highlighting
* **Custom Components:** Embedded interactive elements
* **Dark Mode Optimized:** Tailwind Typography plugin

### 22.3 Content Organization

```
/content/products/
├── components/
│   ├── atoms/
│   │   ├── 01-button.md
│   │   └── 02-input.md
│   └── molecules/
│       └── card-component.md
├── experiments/
└── patterns/
```

**Becomes sidebar navigation automatically**

**See:** `../specifications/content-navigation.md` for complete implementation specification

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
- **v0.3.0 IMPLEMENTED** (TBD) - Live Production Launch.

---

**Last Updated:** January 18, 2026
