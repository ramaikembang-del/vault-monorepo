# Product Requirement Document (PRD): Biz Lab

**Product:** Biz Lab (Strategic Brain & Strategy Office)
**Type:** Strategic Intelligence Workspace & Business Knowledge Engine
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
| **For** | Founders, Strategy Team & Business Stakeholders |
| **Goal** | The "Strategic Brain" and "Strategy Office" - where business decisions are made, tracked, and executed. Instant, intuitive, and interconnected. |
| **Key Actions** | • Instant Strategy Recall (Search in <50ms)<br>• Connect Strategic Ideas (Graph & Backlinks)<br>• Execute Plans (Integrated Decision Tracking)<br>• Review Partner Strategies<br>• Track Market Intelligence |

---

## 🧠 1. Executive Summary

**Biz Lab** is the high-performance **"Strategic Brain"** and **"Strategy Office"** for the business team. It goes beyond a static documentation browser to become an active, intelligent workspace where market analysis, strategic planning, decision governance, and business execution converge.

**Core Philosophy:**
1.  **Extremely Fast:** Staged parsing and aggressive caching for instant "thought-speed" navigation.
2.  **Strategic Brain:** Bi-directional linking, knowledge graphs, and smart context for business intelligence.
3.  **Strategy Office:** The daily "War Room" where business decisions happen—not just where they're stored.
4.  **Decision Governance:** Structured decision logs, approval workflows, and strategic alignment tracking.
5.  **Market Intelligence:** Live insights, competitive analysis, and customer journey mapping.
6.  **Deep Mission Control Integration:** Not a standalone app—every strategic action flows bidirectionally with the Vault ecosystem.

**Core Functions:**
- **Strategic Knowledge Management:** Market analysis, competitive intelligence, and business documentation
- **Decision Tracking & Governance:** Structured decision logs with approval workflows
- **Financial Planning:** Models, forecasts, and metrics dashboards
- **GTM Execution:** Sales playbooks, marketing strategies, and customer journey mapping
- **Mission Control Connectivity:** Real-time presence, task sync, review workflows, achievements, and contribution analytics (See Section 10)

---

## 2. Strategic Context

**Problem:**
- Strategy docs are scattered across markdown files with no unified view
- "Where did we decide that?" friction kills strategic momentum
- Business decisions feel disconnected from daily execution
- No "sense of place" for strategic planning and alignment
- Market intelligence and competitive insights are siloed

**Solution:**
An **Engineered Strategic Intelligence System** that feels alive. It uses **staged parsing** for instant access, **visual knowledge mapping** for context, **workspace integration** to make it the dedicated home for business thinking, and **decision governance** to track every strategic choice.

**Users:**
- **Founders & Executives:** Strategic planning and high-level decision making
- **Strategy Team (Primary):** Market analysis, competitive intelligence, business documentation
- **Cross-functional Leaders:** GTM execution, financial planning, product-market alignment
- **Goal:** Shared war room for business decisions and strategic coordination

---

# Part II: Strategy Office (The "Work" Layer)

## 3. Strategy Office Features

### 3.1 "Strategy Desk" Dashboard

**Personalized command center for strategic focus and decision tracking.**

**Features:**
1.  **Strategic Brief:** Dynamic summary of critical market updates, pending decisions, and high-priority initiatives
2.  **Decision Log:** Persistent tracker for active decisions awaiting approval or execution
3.  **Priority Initiatives:** Drag-and-drop vertical queue of the top 3 strategic documents
4.  **Market Pulse:** Real-time feed of partner contributions to market analysis and competitive docs
5.  **Quick Capture:** Rapid-fire note-taking for strategy sessions and market observations

**Key Actions:**
- `Cmd+D`: Add current doc to decisions
- `Clear Brief`: Mark all updates as read
- `Focus Toggle`: Collapse sidebars for focused reading
- `Log Insight`: Quick capture market intelligence

**See:** `specifications/biz-lab-system.md` �#1 for technical implementation

---

#### 3.1.1 Dashboard Layout Options

**Both layout options follow the same functional grouping:**

| Layer | Purpose | Widgets |
|-------|---------|---------|
| **📊 INFORMATION** | Consume & Monitor | Strategic Brief, Market Pulse |
| **⚡ WORK MANAGEMENT** | Organize & Execute | Decision Log, Priority Initiatives |
| **✍️ QUICK ACTION** | Capture Insights | Quick Capture |

---

**Option A: 2-Column Layout (PRIMARY - Mirrors Mission Control)**

```
┌─────────────────────────────────────────────────────────────────┐
│ Strategy Desk Dashboard                                    [⚙️] │
├──────────────────────────────┬──────────────────────────────────┤
│ LEFT COLUMN                  │ RIGHT COLUMN                     │
│ (Interactive Stack)          │ (Strategic Status - Full Height) │
│                              │                                  │
│ ┌──────────────────────────┐ │ ┌──────────────────────────────┐ │
│ │ 📊 STRATEGIC BRIEF       │ │ │ 📈 STRATEGIC STATUS          │ │
│ │ ────────────────────────│ │ │ ────────────────────────────│ │
│ │ • 3 pending decisions    │ │ │ Strategic Portfolio Map      │ │
│ │ • Indonesia market entry │ │ │                              │ │
│ │ • Q1 pricing update      │ │ │ ┌────────────────────────┐   │ │
│ │ • Competitive intel      │ │ │ │ Market Entry (Blue)    │   │ │
│ │                          │ │ │ │ ├─ Pricing Strategy ✓  │   │ │
│ │ 🔥 High Priority:        │ │ │ │ ├─ GTM Plan �#        │   │ │
│ │ → Approve pricing model  │ │ │ │ └─ Competitive Anal ⏳ │   │ │
│ └──────────────────────────┘ │ │ │                        │   │ │
│                              │ │ │ Financial (Green)      │   │ │
│ ┌──────────────────────────┐ │ │ │ ├─ Q1 Forecast ✓      │   │ │
│ │ 👥 MARKET PULSE          │ │ │ │ └─ Pricing Model �#  │   │ │
│ │ ────────────────────────│ │ │ └────────────────────────┘   │ │
│ │ Partner 2 updated:       │ │ │                              │ │
│ │ → Competitive Analysis   │ │ │ ────────────────────────────│ │
│ │   (5 min ago)            │ │ │ Decision Pipeline            │ │
│ │                          │ │ │                              │ │
│ │ Partner 1 created:       │ │ │ Draft      Review   Approved │ │
│ │ → Indonesia Market Entry │ │ │   │          │         │     │ │
│ │   (1 hour ago)           │ │ │   3    ──▶   2   ──▶   1    │ │
│ └──────────────────────────┘ │ │                              │ │
│                              │ │ Executed: 12 this month      │ │
│ ┌──────────────────────────┐ │ │                              │ │
│ │ ⚡ DECISION LOG          │ │ │ ────────────────────────────│ │
│ │ ────────────────────────│ │ │ Market Intelligence          │ │
│ │ ⚠️ Pending (3):          │ │ │                              │ │
│ │ • Pricing Model Pivot    │ │ │ 📊 Competitive Landscape:    │ │
│ │   [Approve] [Changes]    │ │ │    4 major competitors       │ │
│ │ • Indonesia Entry        │ │ │                              │ │
│ │   Awaiting Partner 2     │ │ │ 📈 Customer Trends:          │ │
│ │ • Q2 Budget Allocation   │ │ │    Monthly billing +17%      │ │
│ │   [Review Required]      │ │ │                              │ │
│ └──────────────────────────┘ │ │ 🎯 Strategic Priorities:     │ │
│                              │ │    Q1: Market Entry (85%)    │ │
│ ┌──────────────────────────┐ │ │    Q2: Product Expansion    │ │
│ │ 🎯 PRIORITY INITIATIVES  │ │ └──────────────────────────────┘ │
│ │ ────────────────────────│ │                                  │
│ │ 1. [≡] Indonesia Market  │ │                                  │
│ │    Entry Strategy        │ │                                  │
│ │                          │ │                                  │
│ │ 2. [≡] Q1 Pricing Model  │ │                                  │
│ │    (Draft)               │ │                                  │
│ │                          │ │                                  │
│ │ 3. [≡] Competitive Battle│ │                                  │
│ │    Cards                 │ │                                  │
│ └──────────────────────────┘ │                                  │
│                              │                                  │
│ ┌──────────────────────────┐ │                                  │
│ │ ✍️ QUICK CAPTURE         │ │                                  │
│ │ ────────────────────────│ │                                  │
│ │ [Type to capture...]     │ │                                  │
│ │                          │ │                                  │
│ │ #market-intel  #competitor│ │                                  │
│ │ @Partner1  @Partner2     │ │                                  │
│ └──────────────────────────┘ │                                  │
└──────────────────────────────┴──────────────────────────────────┘
```

**Layout Logic:**
- **Left Column (40% width):** Interactive widgets requiring user action (read brief, approve decisions, reorder priorities, capture notes)
- **Right Column (60% width):** Strategic status visualization providing "big picture" context (portfolio health, decision velocity, market intelligence)
- **Vertical Flow:** Left column scrolls independently for deep interaction; Right column provides persistent context
- **Consistency:** Mirrors Mission Control's 2-column pattern for muscle memory across dashboards

---

**Option B: Flexible 3-Column Grid (ALTERNATIVE - Domain-Optimized)**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Strategy Desk Dashboard                                               [⚙️] │
├─────────────────────────┬──────────────────────────┬─────────────────────────┤
│ INFORMATION             │ WORK MANAGEMENT          │ STATUS & CONTEXT        │
│ (Left - 30%)            │ (Center - 35%)           │ (Right - 35%)           │
│                         │                          │                         │
│ ┌─────────────────────┐ │ ┌──────────────────────┐ │ ┌─────────────────────┐ │
│ │ 📊 STRATEGIC BRIEF  │ │ │ ⚡ DECISION LOG       │ │ │ 📈 PORTFOLIO MAP    │ │
│ │ ───────────────────│ │ │ ──────────────────── │ │ │ ────────────────── │ │
│ │ Critical Updates:   │ │ │ ⚠️ Pending (3):       │ │ │ ┌─────────────────┐ │ │
│ │ • 3 decisions need  │ │ │                      │ │ │ │ Market Entry ✓  │ │ │
│ │   approval          │ │ │ • Pricing Pivot      │ │ │ │ Financial �#   │ │ │
│ │ • Indonesia market  │ │ │   [Approve][Changes] │ │ │ │ GTM Strategy ⏳ │ │ │
│ │   doc updated       │ │ │                      │ │ │ └─────────────────┘ │ │
│ │ • Competitor X      │ │ │ • Indonesia Entry    │ │ │                     │ │
│ │   launched feature  │ │ │   Awaiting Partner 2 │ │ │ Decision Pipeline:  │ │
│ │                     │ │ │                      │ │ │ 3→2→1 (Executed:12) │ │
│ │ 🔥 Priority Action: │ │ │ • Q2 Budget          │ │ └─────────────────────┘ │
│ │ → Review pricing    │ │ │   [Review Required]  │ │                         │
│ └─────────────────────┘ │ │                      │ │ ┌─────────────────────┐ │
│                         │ │ ✓ Approved (2):      │ │ │ 📊 MARKET INTEL     │ │
│ ┌─────────────────────┐ │ │ • GTM Strategy       │ │ │ ────────────────── │ │
│ │ 👥 MARKET PULSE     │ │ │ • Pricing Research   │ │ │ Competitors: 4      │ │
│ │ ───────────────────│ │ └──────────────────────┘ │ │ Customer Trends:    │ │
│ │ Partner 2:          │ │                          │ │ → Monthly +17%      │ │
│ │ → Updated Comp Anal │ │ ┌──────────────────────┐ │ │ → WhatsApp usage ↑ │ │
│ │   (5 min ago)       │ │ │ 🎯 PRIORITY INIT.    │ │ │                     │ │
│ │                     │ │ │ ──────────────────── │ │ │ Strategic Priority: │ │
│ │ Partner 1:          │ │ │ 1. [≡] Indonesia     │ │ │ Q1: Market Entry    │ │
│ │ → Created Indo Entry│ │ │    Market Entry      │ │ │ (85% complete)      │ │
│ │   (1 hour ago)      │ │ │                      │ │ └─────────────────────┘ │
│ │                     │ │ │ 2. [≡] Q1 Pricing    │ │                         │
│ │ [View All Activity] │ │ │    Model (Draft)     │ │                         │
│ └─────────────────────┘ │ │                      │ │                         │
│                         │ │ 3. [≡] Battle Cards  │ │                         │
│ ┌─────────────────────┐ │ │                      │ │                         │
│ │ ✍️ QUICK CAPTURE    │ │ │ [+ Add Initiative]   │ │                         │
│ │ ───────────────────│ │ └──────────────────────┘ │                         │
│ │ [Type insight...]   │ │                          │                         │
│ │                     │ │                          │                         │
│ │ #market #competitor │ │                          │                         │
│ └─────────────────────┘ │                          │                         │
└─────────────────────────┴──────────────────────────┴─────────────────────────┘
```

**Layout Logic:**
- **Left Column (30%):** Information consumption (what's happening)
- **Center Column (35%):** Work management (what you need to do)
- **Right Column (35%):** Status & context (big picture view)
- **Flexibility:** Each column can have custom height widgets without forcing vertical stacking
- **Optimization:** Designed specifically for strategic workflow (decision-first in center column)

---

### 3.2 Strategy Rooms

**Immersive multi-document environments for specific business initiatives.**

**Features:**
1.  **Dual-Pane Strategy View:** Side-by-side comparison of related strategies (e.g., market analysis + product strategy)
2.  **Decision Thread:** Document-linked discussion stream for async coordination
3.  **Live Presence:** Visual indicators showing which partners are actively in the room
4.  **Room Presets:** Saved layouts for specific contexts (Q1 Planning Room, Competitive Analysis War Room)

**Key Actions:**
- `Alt+Click`: Open doc in split pane
- `Decision Drop`: Start decision thread from highlighted text
- `Room Swap`: Quick-switch between active strategy rooms

**See:** `specifications/biz-lab-system.md` �#2 for technical implementation

---

### 3.3 Decision Governance Workflow

**Structured approval and tracking system for strategic decisions.**

**Features:**
1.  **Decision Status Pipeline:** Draft → Review → Approved → Executed
2.  **Approval Chains:** Define required approvers (e.g., "Both founders must approve")
3.  **Decision History:** Complete audit trail of all strategic decisions
4.  **Impact Tracking:** Visual map showing which docs and initiatives are affected
5.  **Stale Decision Alerts:** Urgency notifications for decisions pending > 5 days

**Key Actions:**
- `Request Approval`: Flag decision for stakeholder review
- `Approve Decision`: Move forward with timestamped approval
- `Challenge Decision`: Open discussion without blocking
- `Link Impact`: Associate decision with affected strategies

**See:** `specifications/biz-lab-system.md` �#3 for technical implementation

---

## 4. Strategic Brain (The "Knowledge" Layer)

### 4.1 Smart Connections

**Intelligent linking and bi-directional navigation for strategic intelligence.**

**Features:**
1.  **Bi-directional Backlinks:** Automated list showing all docs that reference the current strategy
2.  **Unlinked Mentions:** Suggestions for keywords that could be linked to existing docs
3.  **Semantic Similarity:** AI-powered "Related Strategies" based on content analysis
4.  **Reference Previews:** Hover to preview linked docs without navigation (Implemented)
5.  **Cross-Product Links:** Automatic connections between business strategy and product implementation

**Key Actions:**
- `One-Click Link`: Convert unlinked mention to formal link
- `Explore Neighbors`: Show local knowledge graph
- `View Product Context`: Jump to related product docs

**See:** `specifications/biz-lab-system.md` �#4 for backlink algorithm and semantic similarity implementation

---

### 4.2 Strategic Document Browser

**Auto-generated navigation organized by strategic function.**

**5-Domain Content Architecture:**
```
/biz/
├── market/          → Market Intelligence
├── strategy/        → Strategic Planning
├── gtm/             → Go-to-Market
├── financial/       → Financial Planning
└── decisions/       → Decision Logs
```

**Features:**
1.  **Auto-Generated Sidebar:** Navigation tree built from folder structure with smart sorting
2.  **Contextual Breadcrumbs:** Full navigation path (e.g., "Biz Lab > Strategy > Indonesia Market")
3.  **Read Status Indicators:** Visual badges for read/new/updated docs
4.  **Version History Timeline:** Git-based changelog showing edits and authors

**Key Actions:**
- `Browse by Domain`: Expand all docs in a category
- `Mark as Read`: Auto-mark after 30s or manual toggle
- `View Changes`: See recent edits with git diff
- `Pin Favorite`: Star important strategies to top of sidebar

**See:** `specifications/content-navigation.md` for MDX rendering and navigation tree builder

---

## 5. Visual Graph 2.0

**High-fidelity mapping of the entire strategic knowledge repository.**

**Features:**
1.  **Galaxy View:** Global visualization clustered by strategic domain (Market, Strategy, GTM, Financial, Decisions)
2.  **Neighbor Focus:** Local graph showing 2-hop connections from current doc
3.  **Filtered Views:** Toggle visibility by tag, decision status, or document type
4.  **Path Finder:** Visual highlight of shortest link-path between any two docs
5.  **Color Coding:** Strategy (Blue), Market Intel (Purple), GTM (Orange), Financial (Green), Decisions (Red)

**Key Actions:**
- `Node Click`: Instant navigation to selected doc
- `Reseed Graph`: Change center node via drag-and-drop
- `Export Snapshot`: Save as SVG/PNG for presentations
- `Filter by Status`: Show only approved/pending/blocked decisions

**Access:** "🗺️ Graph View" button in sidebar or `/biz/graph`

**Status:** ✅ IMPLEMENTED (Sprint 1 - F2)

**See:** `specifications/content-navigation.md` for force-directed graph implementation

### 5.1 View Modes & Floating Panels (F3)

**Purpose:** Notion-style floating panels for document previews while browsing the graph

**Key Features:**
* Draggable overlay cards with strategy doc previews
* Graph remains interactive (dimmed slightly)
* Preview with "Read Full Strategy" link
* Framer Motion animations

**Status:** ✅ IMPLEMENTED (Sprint 1 - F3)

---

## 6. Quick Capture

**Frictionless capture of strategic insights without breaking flow.**

**Features:**
1.  **Global Modal:** `Cmd+Shift+N` from anywhere in Vault
2.  **Auto-Inbox:** Saves to chronological `/content/biz/inbox/` folder
3.  **Insight Types:** Templates for Market Insight, Competitive Intel, Customer Feedback, Strategic Idea
4.  **Multi-Entry:** Stack 3-5 quick notes before submitting batch
5.  **Auto-Tagging:** Smart tag suggestions based on content keywords

**Key Actions:**
- `Commit Inbox`: Finalize batch into markdown files
- `Tag-on-Fly`: Assign categories via `#` or `@` mentions
- `Promote to Strategy`: Convert inbox item to full strategy doc

**Future:** AI-powered insight summaries and Slack integration for critical market insights

**See:** `specifications/biz-lab-system.md` �#5 for Quick Capture modal and auto-tagging implementation

---

## 7. Search & Filtering

**Unified search for instant strategic intelligence retrieval.**

**Features:**
1.  **Instant Indexing:** All markdown files indexed on save (< 2 min delay)
2.  **Multi-Scope Search:** Across headings, paragraphs, frameworks, models, and decision logs
3.  **Advanced Filters:** Filter by decision status, document type, author, date range, OKR tags, approval state
4.  **Fuzzy Matching:** Typo-tolerant search (finds "Indonesia" from "Indonsia")
5.  **Search History:** Auto-saves last 10 searches for quick re-execution

**Key Actions:**
- `Cmd+K`: Quick search with live preview snippets
- `Advanced Filter`: Refine by frontmatter fields
- `Save Search`: Bookmark filter combinations

**Future:** Natural language queries ("What's our Indonesia strategy?", "Show Q1 decisions")

**See:**
- `specifications/biz-lab-system.md` for search implementation
- `specifications/core-platform.md` �#5.5 for global Command Palette
- `00-vault-overview-prd.md` �#8 for unified Vault search

---

## 8. Cross-Section Integration with Products Lab

**Biz Lab and Products Lab are deeply interconnected—business strategy informs product execution, and product learnings feed back into strategic decisions.**

**See:** `specifications/biz-lab-system.md` �#6 for complete cross-section integration architecture

### 8.1 Strategic-to-Product Linkage

**Direct connections from business strategy to product implementation.**

**Key Features:**
- **Auto-Detected References:** Strategy mentions of "pricing page" auto-suggest links to Products Lab components
- **Strategy-Driven Tags:** Products tagged with strategic initiatives (`#indonesia-market-entry`, `#q1-gtm`)
- **Context Panels:** Strategy sidebar shows related UI components and implementation status
- **Execution Indicators:** Real-time status ("Pricing Page: ✅ Implemented", "Onboarding: �#In Progress")
- **Impact Visualization:** Sankey diagram showing strategy-to-product flow

**Example:** Reading Indonesia Market Entry strategy → Sidebar shows related Pricing Component (✅), Onboarding Flow (🚧), WhatsApp Integration (📋 Planned)

---

### 8.2 Product-to-Strategy Feedback Loop

**Product learnings and experiment results flow back to inform strategic decisions.**

**Key Features:**
- **Experiment Insights:** A/B test results auto-create strategic insights in Biz Lab inbox
- **Usage Analytics:** Component promotion surfaces usage data in market analysis docs
- **Design Decisions:** UI choices link to strategic brand guidelines
- **Challenge Mechanism:** Experiments can flag contradicting strategies for review

**Example:** Glass Card experiment shows 45% conversion increase → Auto-creates Biz Lab inbox item "Strategic Insight: Visual Design Preference for Indonesia Market" → Promotes to formal market analysis doc

---

### 8.3 Unified Decision Governance

**Business and product decisions managed in a single governance workflow.**

**Key Features:**
- **Cross-Section Decisions:** Decisions affecting both Biz Lab strategies and Products Lab roadmaps
- **Dual-Approval Workflows:** Some decisions require both business and product lead approval
- **Impact Cascade:** Visual map showing how strategic decisions flow to product requirements
- **Unified Review Queue:** Mission Control shows both strategic and component approvals

**Example:** Decision "Pivot to Monthly Pricing" → Updates pricing strategy doc, sales playbook → Creates product task for pricing component update → Triggers A/B test requirement

---

### 8.4 Shared Context & Recommendations

**AI-powered cross-section recommendations based on partner activity.**

**Key Features:**
- **Contextual Suggestions:** Viewing Indonesia market analysis suggests related WhatsApp Integration experiment
- **Reverse Suggestions:** Working on pricing component suggests reading Pricing Psychology Research
- **Alignment Scores:** Products show alignment percentage with current strategic priorities
- **Cross-Section Search:** Single `Cmd+K` query returns results from both sections
- **Bridge Documents:** Auto-generated summaries mapping strategy to product work

**Example:** Viewing Indonesia Customer Research → Suggestions: WhatsApp Usage Patterns (Biz Lab), WhatsApp Integration Experiment (Products Lab), Indonesian Color Preferences (Products Lab)

---

### 8.5 Unified Task & Workflow Management

**Single task management system spanning strategic planning and product execution.**

**Key Features:**
- **Cross-Section Tasks:** Tasks originate from either Biz Lab strategies or Products Lab experiments
- **Strategic-to-Execution Pipeline:** Approved strategy tasks auto-create downstream product tasks
- **Blocked Dependencies:** Product tasks can be blocked by pending strategic decisions
- **Unified Priority Queue:** Mission Control shows both strategic and product tasks together
- **Cross-Partner Assignments:** Tasks assigned across sections with full context

**Example Flow:** Finalize Indonesia pricing strategy → Creates task "Build monthly pricing component" → Creates "A/B test pricing variations" → Results feed back to "Update pricing strategy with learnings"

---

### 8.6 Technical Implementation

**See:** `specifications/biz-lab-system.md` �#6 for complete cross-section architecture including:
- Cross-Section Event Bus (Pusher WebSocket)
- Unified Reference Map (Contentlayer + custom indexing)
- Cross-Section Search Index (Fuse.js integration)
- Task Dependency Engine
- Decision Impact Cascade visualization

---

# Part III: Core Platform

## 4. Technical Architecture

### 4.1 Monorepo Structure

- **Location:** `/apps/vault/app/biz` (Biz Lab route within Vault)
- **Content:** `/content/biz` markdown files
- **Integration:** Seamless with Vault (shared layout, design tokens)

### 4.2 Tech Stack

- **Framework:** Next.js 14 + custom MDX rendering
- **UI:** Shadcn UI components
- **Search:** Global Vault Command Palette (`Cmd+K`)
- **Styling:** Tailwind CSS with shared design tokens

### 4.3 Deployment

- **Domain:** `vault.klario-world.com/biz`
- **Hosting:** Vercel (part of Vault app)
- **Access:** Clerk authentication (inherited from Vault session)

**See:**
- `specifications/biz-lab-system.md` for technical implementation
- `specifications/content-navigation.md` for MDX rendering system
- `00-vault-overview-prd.md` �#4 for unified Vault architecture

---

## 5. Authentication & Access Control

**Biz Lab inherits authentication from Vault-level Clerk integration.**

**Access Levels:**
- **Full Access:** View all Biz Lab documents
- **No Access:** Redirected to access denied page

**User Management:** Via unified Vault admin panel at `/admin`

**See:** `specifications/core-platform.md` �#4-5 for Clerk middleware and RBAC implementation

---

# Part III: Content & Navigation

## 6. Content Rendering System

**Custom MDX rendering with auto-generated navigation from `/content/biz` folder structure.**

**Key Features:**
- **Frontmatter Support:** YAML metadata (title, readTime, status, tags)
- **GitHub Flavored Markdown:** Tables, task lists, syntax highlighting
- **Custom Components:** Interactive embedded elements
- **Dark Mode Optimized:** Tailwind Typography plugin

**Content Organization:** Folder structure → Automatic sidebar navigation

**See:** `specifications/content-navigation.md` for complete MDX implementation

---

## 7. Knowledge Graph & Discovery

### 7.1 Graph Visualization (F2)

**Visual map of all Biz Lab documents with interactive relationships.**

- Force-directed graph with color-coded nodes
- Interactive navigation via node clicking
- Search & filtering capabilities
- 60 FPS performance with 100+ nodes

**Access:** "🗺️ Graph View" button in sidebar or `/biz/graph`

**Status:** ✅ IMPLEMENTED (Sprint 1 - F2)

### 7.2 Floating Panels (F3)

**Notion-style document previews while browsing the graph.**

- Draggable overlay cards with doc content
- Graph remains interactive (dimmed background)
- Framer Motion animations

**Status:** ✅ IMPLEMENTED (Sprint 1 - F3)

**See:** `specifications/content-navigation.md` for graph visualization and floating panel implementation

---

# Part IV: UX Enhancements

## 8. Interactive Features (Biz Lab-Specific)

> **Note:** These enhancements are specific to Biz Lab document browsing. For cross-cutting Vault features (Mission Control, Achievements), see `00-vault-overview-prd.md` �#11.

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

**See:** `00-vault-overview-prd.md` �#11.3 for complete specification

**Biz Lab Specific:**
- Achievement: "Strategy Explorer" (read 10 strategy docs)
- Achievement: "Deep Diver" (spend 30+ min in single doc)
- Achievement: "Knowledge Graph Master" (use graph view 5+ times)

---

**See Also:** `../specifications/interactive-ui.md` for complete UX implementation details

---

## 8. Strategic Document Templates

### 8.1 Template Catalog

To ensure consistency across business documentation, Biz Lab uses standardized MDX templates:

| Template Name | Key Components Required | Metadata Needs |
| :--- | :--- | :--- |
| **Strategy Doc** | Sankey Flow, Hover Previews | `targetMarket`, `kpis` |
| **Decision Log** | Pro/Con Table, Timeline | `status`, `approver` |
| **Sprint Plan** | Task List, Progress Bar | `sprintNumber`, `velocity` |
| **Research Paper** | Contextual Tooltips, Backlinks | `sources`, `methodology` |

### 8.2 Template Anatomy (MDX Examples)

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
<HoverPreviewGrid sources={['biz/pillars/p1', 'biz/pillars/p2']} />
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

## 9. Advanced Workspace Experience

### 9.1 "Zen" Focus Mode

**Purpose:** Deep work without distractions.
*   **UI:** Hides Sidebar, Floating Dock, and decorative elements.
*   **Typography:** Optimizes line-length (65ch) and contrast.
*   **Toggle:** `Cmd+\`` (Backtick) or floating toggle.

### 9.2 Split-Screen Multitasking

**Purpose:** Reference strategy while executing tactics.
*   **Action:** `Alt+Click` a link opens it in a split pane (like VS Code).
*   **Use Case:** Keep "Market Analysis" open on left while writing "Product Spec" on right.
*   **Sync:** Both panes share the same reading context.

### 9.3 Active Sidebar (The "Peripheral Brain")

**Instead of static links, the sidebar is context-aware:**

1.  **Top:** "Recent Docs" (Your reading history).
2.  **Middle:** "Context" (Local Graph of current doc + Backlinks).
3.  **Bottom:** "File Tree" (The repository structure).

### 9.4 Command & Control

*   **Smart Command Palette (Cmd+K):** Context-aware.
    *   If reading a doc: Suggests "Copy Link", "View Graph", "Split Right".
    *   If browsing: Suggests "Search All Docs", "Open Graph View".

### 9.5 Staged Parsing System (Performance)

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

### 9.6 Multi-Layer Caching

*   **L1 (Memory):** Active document and graph nodes kept in Zustand store.
*   **L2 (Disk/ISR):** Next.js Data Cache for rendered MDX components.
*   **L3 (Edge):** Vercel Edge Cache for static assets and search indices.
*   **Prefetching:** Hovering a link triggers Stage 2 parsing for that doc.

---

## 10. Mission Control Deep Integration

**Biz Lab is not a standalone app—it's a deeply integrated subsystem of the Vault ecosystem.** Every strategic decision, market insight, and business document flows bidirectionally with Mission Control Dashboard to create a unified business intelligence experience.

### 10.1 My Focus Widget Integration

**Purpose:** Surface Biz Lab strategic work items directly into the partner's personal command center.

**Features:**
1.  **Decision Tasks:** Active decisions flagged with `status: pending-approval` appear in "Your Focus Today".
2.  **Strategy Reviews:** Strategy docs awaiting review appear as priority review items.
3.  **Market Intel Drafts:** Incomplete market analysis docs (missing key sections) shown as "Active Drafts".
4.  **Stale Decision Alerts:** Decisions older than 5 days (without approval) trigger urgency badges.
5.  **Drag Prioritization:** Reorder Biz tasks alongside Products tasks in unified priority queue.

**Actions:**
1.  **`Check Off Task`:** Marking "Review GTM Strategy" complete updates frontmatter `reviewed: true`.
2.  **`Resume Drafting`:** Click to jump directly to `/biz/strategy/gtm-plan` in edit mode.
3.  **`Escalate Decision`:** Flag decision as high-priority for immediate founder attention.

**Integrations:**
1.  **File Watcher API:** Monitors `/content/biz/` for markdown changes and updates task status real-time.
2.  **LocalStorage Sync:** Preserves task order and completion state across browser sessions.
3.  **Clerk Metadata:** Associates tasks with partner identity for multi-user attribution.
4.  **Zustand Store:** Centralized state management for task queue shared with Products Lab tasks.

**Data Flow:**
```typescript
// Biz Lab → Mission Control
{
  type: "BIZ_TASK_UPDATE",
  payload: {
    taskId: "decision-market-entry-indonesia",
    status: "approved",
    partner: "Partner 1",
    timestamp: "2026-01-18T14:30:00Z"
  }
}
```

---

### 10.2 Team Pulse Integration

**Purpose:** Real-time visibility into partner activity within Biz Lab for strategic coordination.

**Features:**
1.  **Live Presence:** "Partner 2 is viewing: Indonesia Market Analysis" with green online dot.
2.  **Edit Stream:** "Partner 1 updated GTM Strategy" appears in activity feed within 500ms.
3.  **Decision Updates:** "Partner 2 approved: Market Entry Decision" with clickable deep link.
4.  **Strategic Milestones:** "Partner 1 completed Q1 Strategy Doc" with celebration icon.
5.  **Review Requests:** "Partner 2 requested review: Pricing Strategy" with `Approve`/`Request Changes` buttons.

**Actions:**
1.  **`Jump to Doc`:** Click activity item to navigate directly to `/biz/strategy/indonesia-market`.
2.  **`Reply`:** Inline comment on activity (e.g., "Great competitive analysis!") stores in comment metadata.
3.  **`React`:** Quick emoji response (👍, 🔥, ❓) to partner activity.
4.  **`View History`:** Expand to see full timeline of edits/commits for a strategy doc.

**Integrations:**
1.  **Clerk Presence API:** Tracks partner's current route (`/biz/strategy/indonesia-market`) with < 500ms latency.
2.  **Pusher WebSocket:** Broadcasts real-time events to all active Vault sessions.
3.  **Git Webhooks:** Detects commits to `/content/biz/` and extracts commit message for feed.
4.  **React Query Invalidation:** Auto-refreshes activity feed when new events arrive via WebSocket.

**WebSocket Event Example:**
```typescript
// Pusher channel: "vault-team-pulse"
{
  event: "biz-activity",
  data: {
    partner: "Partner 2",
    action: "updated_strategy",
    resource: "GTM Strategy",
    route: "/biz/strategy/gtm-plan",
    timestamp: "2026-01-18T14:32:15Z"
  }
}
```

---

### 10.3 Smart Recommendations Engine

**Purpose:** AI-powered suggestions for Biz Lab exploration based on partner behavior and strategic context.

**Features:**
1.  **Context-Aware Strategies:** If viewing `/biz/market/indonesia`, suggests related "Pricing Strategy Indonesia" and "Competitive Landscape".
2.  **Unread Strategies:** Highlights strategy docs created by partner that current user hasn't visited.
3.  **Topic Clustering:** Groups docs by tags (`#market-entry`, `#competitive-intel`) for thematic discovery.
4.  **Read Time Estimates:** "12 min read" for market analysis, "5 min" for decision logs.
5.  **Strategic Priority Badges:** Docs tagged with current quarter's OKRs get "🎯 Q1 Priority" label.

**Actions:**
1.  **`Start Reading`:** Deep link to `/biz/strategy/pricing-indonesia` with scroll to "Executive Summary".
2.  **`Save for Later`:** Bookmark strategy to "Strategy Desk" Priority Initiatives (Section 3.1).
3.  **`Dismiss`:** Remove suggestion and train recommendation algo (won't suggest similar).
4.  **`View All Topic`:** Navigate to filtered view showing all `#market-entry` strategies.

**Integrations:**
1.  **Clerk User Metadata:** `docsRead: ["biz/strategy/gtm-plan"]` tracks reading history.
2.  **Contentlayer:** Provides frontmatter (`tags`, `okr`, `quarter`) for intelligent filtering.
3.  **FlexSearch Index:** Powers fuzzy matching for "strategies similar to GTM Plan".
4.  **Recommendation Algorithm:** Collaborative filtering based on both partners' reading patterns + strategic priorities.

---

### 10.4 Quick Actions Integration

**Purpose:** One-click shortcuts to create Biz Lab resources directly from Mission Control.

**Features:**
1.  **"New Strategy Doc" Button:** Scaffolds `/biz/strategy/[name].md` with strategy template in < 2 seconds.
2.  **"Log Decision" Shortcut:** Opens decision log template at `/biz/decisions/new`.
3.  **"Request Approval" Toggle:** Sets `needs_approval: true` on current strategy doc frontmatter.
4.  **Recent Actions History:** Shows last 5 Biz Lab actions taken (e.g., "Updated Market Analysis 10 min ago").
5.  **Template Selector:** Dropdown for doc types (Strategy, Market Intel, GTM Plan, Decision Log, Financial Model).

**Actions:**
1.  **`New Strategy Doc`:** Opens modal → Enter name → Auto-creates file → Navigates to `/biz/strategy/[name]`.
2.  **`Log Decision`:** Opens decision template → Pre-fills partner name in `author` field → Saves to `/content/biz/decisions/`.
3.  **`Request Approval`:** Updates frontmatter → Notifies partner via Team Pulse → Adds to Review Queue.
4.  **`View History`:** Expands to show detailed action log with timestamps and partner attribution.

**Integrations:**
1.  **Next.js API Routes:** `/api/biz/create-strategy` handles file creation in monorepo.
2.  **File System API:** Node.js `fs.writeFile` to create new MDX files with templates.
3.  **Clerk Auth Context:** Auto-attributes actions to current partner's identity.
4.  **Activity Logger:** Stores action history in Zustand store for dashboard display.

**API Endpoint Example:**
```typescript
// POST /api/biz/create-strategy
{
  name: "indonesia-market-entry",
  type: "strategy",
  partner: "Partner 1",
  template: "strategy-doc-boilerplate.mdx"
}

// Response
{
  success: true,
  path: "/biz/strategy/indonesia-market-entry",
  fileCreated: "/content/biz/strategy/indonesia-market-entry.mdx"
}
```

---

### 10.5 Review Queue Integration

**Purpose:** Unified review workflow for strategy approvals and decision governance across Biz Lab and Products Lab.

**Features:**
1.  **Inbound Reviews:** Strategy docs flagged `needs_review: true` appear in partner's queue.
2.  **Outbound Tracking:** See status of reviews you requested ("Awaiting Partner 2's approval").
3.  **Stale Warnings:** Reviews pending > 3 days show yellow alert badge.
4.  **Inline Preview:** Hover to see strategy doc preview without leaving dashboard.
5.  **Batch Actions:** Approve/reject multiple strategies in one click.

**Actions:**
1.  **`Approve`:** Sets `reviewStatus: approved`, removes from queue, timestamps decision.
2.  **`Request Changes`:** Opens comment modal → Partner notified → Strategy stays in queue.
3.  **`Nudge`:** Sends push notification to partner ("Partner 1 is waiting on GTM Strategy review").
4.  **`View Full`:** Navigate to `/biz/strategy/gtm-plan` to read complete strategy.

**Integrations:**
1.  **Frontmatter Parser:** Scans all `/content/biz/**/*.mdx` for `needs_review: true`.
2.  **File Modification Watcher:** Detects when frontmatter changes and updates queue instantly.
3.  **Pusher Notifications:** Real-time alerts when partner submits review request.
4.  **Clerk Metadata:** Tracks review history per partner for contribution analytics.

---

### 10.6 Achievement Tracker Integration

**Purpose:** Gamified progress tracking to encourage Biz Lab exploration and strategic contribution.

**Features:**
1.  **Strategy Explorer Badge:** Unlocked after viewing 10+ strategy docs (triggers confetti on dashboard).
2.  **Decision Velocity:** "Logged 5 decisions this month" with progress bar toward 10.
3.  **Strategic Curator:** Approved 3+ partner strategies earns gold star.
4.  **Market Intelligence Champion:** Contributed 5+ market analysis docs unlocks team achievement.
5.  **Consistency Streak:** "14-day strategy review streak" for daily engagement.

**Actions:**
1.  **`View Progress`:** Expand to see detailed breakdown (e.g., "8/10 strategies viewed").
2.  **`Celebrate`:** Replay confetti animation for unlocked achievement.
3.  **`Share`:** Copy achievement link to share with partner (e.g., "Partner 1 earned Strategic Curator!").

**Integrations:**
1.  **LocalStorage Tracking:** `docsRead`, `decisionsLogged`, `strategiesApproved` counters.
2.  **Clerk User Metadata:** Persists achievement state across devices and sessions.
3.  **React Confetti:** Visual celebration on dashboard when achievement unlocks.
4.  **Products Lab Sync:** Achievements earned in Biz Lab also contribute to Vault-wide leaderboard.

---

### 10.7 Global Search Integration

**Purpose:** Unified search across Biz Lab and Products Lab via Command Palette (`Cmd+K`).

**Features:**
1.  **Strategy Search:** "market" finds Indonesia Market Analysis with key metrics preview.
2.  **Decision Search:** "pricing" finds Pricing Strategy Decision with approval status.
3.  **Action Search:** "new strategy" suggests "New Strategy Doc" quick action.
4.  **Tag Filtering:** "#market-entry" shows all market entry related strategies.
5.  **Recent Searches:** Saves last 5 searches for quick access.

**Actions:**
1.  **`Navigate`:** Press Enter to jump to selected strategy doc.
2.  **`Quick View`:** Press `Space` to preview in floating panel without navigation.
3.  **`Filter Section`:** Toggle to search only Biz Lab (excludes Products Lab results).

**Integrations:**
1.  **cmdk Library:** Powers Command Palette UI with keyboard-first UX.
2.  **Fuse.js Fuzzy Search:** Indexes all Biz Lab content for < 100ms search response.
3.  **FlexSearch:** Alternative search engine for larger content volumes (500+ docs).
4.  **Contentlayer:** Provides structured frontmatter for rich search result metadata.

---

### 10.8 Contribution Analytics Integration

**Purpose:** Track partner contributions to Biz Lab for transparency and strategic accountability.

**Features:**
1.  **Metrics Dashboard:** "Partner 1: 8 strategies, Partner 2: 12 market analyses" in Mission Status widget.
2.  **Weekly Breakdown:** Bar chart showing daily strategy creation velocity.
3.  **Attribution Tracking:** Every strategy doc shows "Created by Partner 1, Approved by Partner 2".
4.  **Review Contributions:** "Partner 2 approved 7 strategies this month" visible in Team Pulse.
5.  **Decision Velocity:** Line graph showing month-over-month decision approval rate.

**Actions:**
1.  **`View Details`:** Drill down into partner's contribution history.
2.  **`Export Report`:** Download CSV of all Biz Lab contributions for board meetings.
3.  **`Filter by Partner`:** Show only strategies created by Partner 1.

**Integrations:**
1.  **Git Commit Attribution:** Parses git log to extract author from strategy file history.
2.  **Clerk Metadata:** Stores `bizLabContributions` object per partner.
3.  **Recharts:** Visualization library for contribution graphs on dashboard.
4.  **CSV Export API:** Generates contribution reports on demand.

---

### 10.9 Cross-Section Navigation

**Purpose:** Seamless context switching between Biz Lab, Products Lab, and Mission Control.

**Features:**
1.  **Breadcrumb Trails:** "Mission Control > Biz Lab > Strategy > Indonesia Market" at top of every page.
2.  **Section Switcher:** Floating dock shows active section with blue highlight (`/biz` active).
3.  **Recent Pages:** `Cmd+E` shows last 10 pages visited across all sections.
4.  **Deep Linking:** Share `/biz/strategy/gtm-plan#execution-timeline` to jump to specific section.
5.  **Back Navigation:** Browser back button works correctly across section boundaries.

**Actions:**
1.  **`Click Breadcrumb`:** Jump to any ancestor level (e.g., Biz Lab home).
2.  **`Dock Navigation`:** Click Biz icon to navigate to `/biz`.
3.  **`Cmd+1-4`:** Keyboard shortcuts to switch sections (1=Dashboard, 2=Products, 3=Biz, 4=Settings).

**Integrations:**
1.  **Next.js App Router:** Native support for deep linking and back navigation.
2.  **Zustand Navigation State:** Preserves scroll position when navigating back.
3.  **Floating Dock Component:** Shared across all Vault sections for unified UX.
4.  **URL State Management:** Syncs active section with browser URL for bookmarking.

---

### 10.10 Technical Implementation Summary

**Core Integration Points:**

| Integration Layer | Technology | Latency Target | Data Flow |
|------------------|------------|----------------|-----------|
| **Real-time Presence** | Clerk + Pusher | < 500ms | Biz Lab → Team Pulse |
| **Task Aggregation** | File Watcher + Zustand | < 200ms | Markdown `[ ]` → My Focus |
| **Review Queue** | Frontmatter Parser | < 1s | `needs_review: true` → Queue Widget |
| **Achievements** | LocalStorage + Clerk | Instant | `docsRead++` → Achievement Unlock |
| **Search Index** | Fuse.js + FlexSearch | < 100ms | Content → Command Palette |
| **Activity Feed** | Git Webhooks + Pusher | < 500ms | Commits → Team Pulse Stream |
| **Recommendations** | Collaborative Filtering | < 2s | User History → Smart Recs Widget |
| **Contribution Analytics** | Git Log + Clerk Metadata | < 3s | Commit History → Mission Status |

**Event Broadcasting Architecture:**
```typescript
// Central event bus for Mission Control ↔ Biz Lab communication
class VaultEventBus {
  // Biz Lab publishes events
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

// Usage in Biz Lab
eventBus.publish({
  type: 'DECISION_APPROVED',
  payload: {
    decision: 'Indonesia Market Entry',
    partner: 'Partner 1',
    timestamp: Date.now()
  }
})
```

**See:** `00-vault-overview-prd.md` Section 3.2 for Mission Control Dashboard specification

---

## 11. Success Metrics

### 11.1 Performance Targets

* **Page Load:** < 1s (MDX pre-rendered)
* **Search Response:** < 100ms
* **Navigation Smoothness:** 60 FPS animations
* **Knowledge Graph:** 60 FPS with 100+ nodes
* **Thought-Speed Navigation:** < 50ms latency for strategic doc switching
* **Decision Approval Latency:** < 2s from approval to notification

### 11.2 User Engagement

* **Active Usage:** 5+ strategy doc views per week
* **Search Adoption:** 50% of sessions use search (higher than Products Lab due to business complexity)
* **Knowledge Graph:** 30% of users try graph view for strategic mapping
* **Average Session:** 15+ minutes (strategic reading takes longer)
* **Decision Governance:** 80% of strategic decisions logged and tracked
* **Review Participation:** Both partners review at least 3 docs/week

### 11.3 Content Metrics

* **Coverage:** 100% of `/biz` docs indexed with metadata
* **Freshness:** Strategy docs updated within 2 min of commit
* **Discoverability:** All strategies reachable within 3 clicks
* **Cross-references:** 90% of strategy docs have backlinks (higher than Products due to strategic interconnectedness)
* **Decision Documentation:** 100% of major decisions have formal logs
* **Market Intelligence:** Weekly updates to competitive analysis docs

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
- **v0.1.0 DRAFT** (Jan 8, 2026) - Initial PRD created
- **v0.1.1 REVIEW** (Jan 9, 2026) - Nextra integration defined
- **v0.1.2 PIVOT** (Jan 10, 2026) - Changed to custom MDX for greater control
- **v0.1.3 APPROVED** (Jan 10, 2026) - Ready for development
- **v0.1.4 IMPLEMENTED** (Jan 10, 2026) - Live at vault.klario-world.com/biz ✅ (Core features: Custom MDX, Graph View F2, Floating Panels F3, Document Hover Previews, "Why This Matters" tooltips)
- **v0.2.0 ENHANCEMENT** (Jan 18, 2026) - **MAJOR REVAMP:** Elevated to "Strategic Brain & Strategy Office" vision with:
  - **Part II: Strategy Office Layer** (Sections 3.1-3.3): Strategy Desk Dashboard, Strategy Rooms, Decision Governance Workflow
  - **Part II: Strategic Brain Layer** (Sections 4-7): Smart Connections, Strategic Document Browser with 5 content domains, Enhanced Visual Graph 2.0, Quick Capture with insight types, Advanced Search & Filtering
  - **Section 10: Mission Control Deep Integration** (10 subsections): My Focus Widget, Team Pulse, Smart Recommendations, Quick Actions, Review Queue, Achievements, Global Search, Contribution Analytics, Cross-Section Navigation, Technical Implementation Summary
  - **Enhanced Success Metrics** (Section 11): Decision governance KPIs, strategic engagement metrics, market intelligence tracking
  - **Structural Standardization:** All major sections now follow Features-Actions-Integrations convention (3-5 items each) matching Products Lab and Mission Control PRD standards
- **v0.2.1 DEEP INTEGRATION** (Jan 18, 2026) - **CROSS-SECTION INTEGRATION:** Added comprehensive Section 8 with bidirectional Biz Lab ↔ Products Lab integration (6 subsections):
  - **8.1 Strategic-to-Product Linkage:** Auto-detected product references, strategy-driven component tags, execution status indicators, impact visualization
  - **8.2 Product-to-Strategy Feedback Loop:** Experiment results summary, A/B test results updating strategy, customer feedback channel
  - **8.3 Unified Decision Governance:** Cross-section decision logs, dual-approval workflows, impact cascade visualization, decision timeline
  - **8.4 Shared Context & Recommendations:** Contextual cross-section suggestions, strategic alignment scores, bridge documents
  - **8.5 Unified Task & Workflow Management:** Cross-section task lists, strategic-to-execution pipeline, blocked dependencies
  - **8.6 Technical Implementation:** CrossSectionEventBus, unified indexing system, decision impact maps with TypeScript implementations
- **v0.2.2 PRODUCTION** (Ongoing) - Continuous refinement of strategic intelligence features and cross-section workflows

**Last Updated:** January 20, 2026

**Related Specifications:**
- `specifications/biz-lab-system.md` - Strategy Desk, Decision Governance, Strategic Brain, Cross-Section Integration
- `specifications/content-navigation.md` - MDX rendering, Knowledge Graph, Floating Panels
- `specifications/core-platform.md` - Platform infrastructure, authentication, deployment

**Related PRDs:**
- `00-vault-overview-prd.md` - Vault ecosystem overview
- `11-products-lab-prd.md` - Products Lab integration

