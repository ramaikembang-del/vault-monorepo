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
1.  **Strategic Brief:** Dynamic summary of critical market updates, pending decisions, and high-priority initiatives.
2.  **Decision Log:** Persistent tracker for active decisions awaiting approval or execution.
3.  **Priority Initiatives:** Drag-and-drop vertical queue of the top 3 strategic documents.
4.  **Market Pulse:** Real-time feed of partner contributions to market analysis and competitive docs.
5.  **Quick Capture:** Rapid-fire note-taking for strategy sessions and market observations.

**Actions:**
1.  **`Cmd+D` (Add to Decisions):** Instantly flag current doc for decision governance workflow.
2.  **`Clear Brief`:** Mark all updates as read after morning strategy review.
3.  **`Focus Toggle`:** Collapse all sidebars to center the Strategic Brief.
4.  **`Log Insight`:** Quick capture market intelligence or competitive observation.

**Integrations:**
1.  **Clerk metadata:** Syncs Priority Initiatives across devices for the same user.
2.  **Zustand Persist:** Ensures Decision Log data survives browser refreshes.
3.  **Git Commits:** Analyzes recent repo activity to populate the Strategic Brief.
4.  **Market Intelligence API:** (Future) Pulls competitor news and market trends.

---

### 3.2 Strategy Rooms

**Immersive multi-document environments tailored for specific business initiatives.**

**Features:**
1.  **Dual-Pane Strategy View:** Side-by-side rendering of market analysis + product strategy for alignment.
2.  **Decision Thread:** Document-linked discussion stream for async strategic coordination.
3.  **Live Presence:** Visual indicators showing which partners are in the strategy room.
4.  **Room Presets:** Saved layouts for specific contexts (e.g., "Q1 Planning Room", "Competitive Analysis War Room").

**Actions:**
1.  **`Alt+Click` (Open Split):** Open a strategy doc in the secondary pane.
2.  **`Decision Drop`:** Highlight text to start a decision thread in the sidebar.
3.  **`Room Swap`:** Fast-switch between active strategy rooms via the sidebar.

**Integrations:**
1.  **Clerk Presence:** Tracks real-time user location within the /biz file tree.
2.  **Ably/Pusher:** Powers real-time chat and presence updates.
3.  **Markdown-Tasks:** Automatically aggregates `[ ]` items from strategy docs into room task lists.

---

### 3.3 Decision Governance Workflow

**Structured approval and tracking system for strategic decisions.**

**Features:**
1.  **Decision Status Pipeline:** Draft → Review → Approved → Executed
2.  **Approval Chains:** Define who must approve (e.g., "Requires both founders")
3.  **Decision History:** Immutable log of all strategic decisions with timestamps
4.  **Impact Tracking:** Link decisions to affected docs and initiatives
5.  **Stale Decision Alerts:** Decisions pending > 5 days trigger urgency notifications

**Actions:**
1.  **`Request Approval`:** Sets `needs_approval: true` and notifies stakeholders
2.  **`Approve Decision`:** Updates status, timestamps, and triggers execution workflow
3.  **`Challenge Decision`:** Opens discussion thread without blocking approval
4.  **`Link Impact`:** Associate decision with affected strategy docs

**Integrations:**
1.  **Frontmatter Parser:** Scans for `decision: true` and `status` fields
2.  **Notification System:** Pusher alerts when approval is needed
3.  **Audit Log:** Records all decision state changes with attribution
4.  **Calendar Integration:** (Future) Adds execution deadlines to shared calendar

---

## 4. Strategic Brain (The "Knowledge" Layer)

### 4.1 Smart Connections

**Intelligent linking and bi-directional navigation for strategic intelligence.**

**Features:**
1.  **Bi-directional Backlinks:** Automated footer list of all docs referencing the current strategy.
2.  **Unlinked Mentions:** Identification of keywords that exist as doc titles but aren't linked.
3.  **Semantic Similarity:** Suggestion of "Related Strategies" based on content embeddings.
4.  **Reference Previews:** On-hover popovers for every internal link (Implemented - Sprint 1).
5.  **Cross-Product Links:** Automatic detection of product references in strategy docs.

**Actions:**
1.  **`One-Click Link`:** Convert an unlinked mention into a formal [[wikilink]].
2.  **`Explore Neighbors`:** Trigger the Local Graph to show connections for the current doc.
3.  **`Ignore Suggestion`:** Dismiss semantic relations that aren't strategically relevant.
4.  **`View Product Context`:** Jump to related product strategy from business doc.

**Integrations:**
1.  **Flexsearch Engine:** Fast indexing of terms for unlinked mention scanning.
2.  **OpenAI Embeddings:** Generates vector representations for semantic similarity.
3.  **Contentlayer:** Provides the type-safe internal link map used for backlinks.
4.  **Cross-Section Index:** Links between `/biz` and `/products` content.

---

### 4.2 Strategic Document Browser

**Auto-generated navigation from `/biz` directory with intelligent organization.**

**Features:**
1.  **5-Domain Content Architecture:** Organized by strategic function (Market Intelligence, Strategic Planning, Go-to-Market, Financial Planning, Decision Logs).
2.  **Auto-Generated Sidebar:** Navigation tree automatically built from `/content/biz/` folder structure with smart sorting by priority/date.
3.  **Contextual Breadcrumbs:** Full navigation path displayed at top (e.g., "Biz Lab > Strategy > Indonesia Market").
4.  **Read Status Indicators:** Visual badges showing which docs you've read, which are new, and which have updates.
5.  **Version History Timeline:** Git-based changelog showing who edited what and when for every strategy doc.

**Actions:**
1.  **`Browse by Domain`:** Click domain in sidebar to expand all docs in that category (e.g., all Market Intelligence).
2.  **`Mark as Read`:** Auto-marks doc as read after 30 seconds, manual toggle available.
3.  **`View Changes`:** Click version indicator to see diff of recent changes with git blame.
4.  **`Pin Favorite`:** Star frequently accessed strategies to appear at top of sidebar.

**Integrations:**
1.  **Contentlayer:** Type-safe parsing of frontmatter and markdown for structured navigation.
2.  **Git Metadata:** Extracts commit history, authors, and timestamps for version tracking.
3.  **Clerk User Metadata:** Stores read status per user across devices.
4.  **Zustand Store:** Manages sidebar collapsed/expanded state and pinned favorites.

**Content Structure Reference:**
```
/biz/
├── market/          → Market Intelligence (Competitive Landscape, Customer Research)
├── strategy/        → Strategic Planning (Annual Strategy, OKRs, Product Portfolio)
├── gtm/             → Go-to-Market (GTM Strategy, Sales Playbooks, Marketing Plans)
├── financial/       → Financial Planning (Models, Forecasts, Unit Economics, Pricing)
└── decisions/       → Decision Logs (Strategic Decisions, Product Pivots, Market Entry)
```

---

## 5. Visual Graph 2.0

**High-fidelity mapping of the entire strategic knowledge repository.**

**Features:**
1.  **Galaxy View:** Global galaxy-style visualization clustered by strategic domain (Market, Strategy, GTM, Financial, Decisions).
2.  **Neighbor Focus:** Localized force-directed graph limited to 2-hop relations from current strategy doc.
3.  **Filtered Views:** Ability to toggle node visibility by tag, decision status, or document type.
4.  **Path Finder:** Visual highlight of the shortest link-path between two strategic docs.
5.  **Color Coding:** Strategy (Blue), Market Intel (Purple), GTM (Orange), Financial (Green), Decisions (Red).

**Actions:**
1.  **`Node Click`:** Instant "thought-speed" navigation to the selected document.
2.  **`Reseed Graph`:** Change the center-node of the Local Graph via drag-and-drop.
3.  **`Export Snapshot`:** Save the current graph view as an SVG/PNG for presentations.
4.  **`Filter by Status`:** Show only approved decisions or pending reviews.

**Integrations:**
1.  **D3.js / React-Force-Graph:** Underlying physics engine for visualization.
2.  **Framer Motion:** Handles smooth transitions between local and global views.
3.  **Clerk metadata:** Colors nodes based on the current user's read/unread status.
4.  **Decision Status:** Node borders indicate decision state (green=approved, yellow=pending, red=blocked).

**Access:**
- "🗺️ Graph View" button in Biz Lab sidebar
- Route: `/biz/graph`

**Status:** ✅ IMPLEMENTED (Sprint 1 - F2)

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

**Frictionless entry point for capturing strategic insights without breaking deep-work flow.**

**Features:**
1.  **Global Modal:** `Cmd+Shift+N` trigger available from any page in the Vault.
2.  **Auto-Inbox:** Saves captures into a chronological `/content/biz/inbox/` folder.
3.  **Insight Types:** Quick templates for "Market Insight", "Competitive Intel", "Customer Feedback", "Strategic Idea".
4.  **Multi-Entry:** Ability to stack 3-5 quick notes before submitting the batch.
5.  **Auto-Tagging:** Smart suggestions for tags based on content (e.g., detects "competitor" → suggests #competitive-intel).

**Actions:**
1.  **`Commit Inbox`:** Finalize a batch of captures into formal markdown files.
2.  **`Tag-on-Fly`:** Assign categories or stakeholders via `#` or `@` triggers.
3.  **`Dismiss Modal`:** Instant close that preserves draft state for the next opening.
4.  **`Promote to Strategy`:** Convert inbox item to full strategy doc with template.

**Integrations:**
1.  **Next.js API Routes:** Handles the file creation logic in the monorepo content folder.
2.  **Clerk Auth:** Attributes every capture to the correct partner in the history.
3.  **OpenAI Integration:** (Future) Generates insight summaries and tag suggestions.
4.  **Slack Webhook:** (Future) Shares critical market insights with team automatically.

---

## 7. Search & Filtering

**Unified search system for instant strategic intelligence retrieval across all business documents.**

**Features:**
1.  **Instant Indexing:** All markdown files automatically indexed on save with < 2 min delay.
2.  **Multi-Scope Search:** Search across headings, paragraphs, strategic frameworks, financial models, and decision logs.
3.  **Advanced Filters:** Filter by decision status, document type, author, date range, OKR tags, and approval state.
4.  **Fuzzy Matching:** Typo-tolerant search with `fuse.js` (finds "Indonesia" even if you type "Indonsia").
5.  **Search History:** Auto-saves last 10 searches for quick re-execution.

**Actions:**
1.  **`Quick Search (Cmd+K)`:** Type-ahead results as you type with live preview snippets.
2.  **`Advanced Filter`:** Toggle filter panel to refine by frontmatter fields (status, approver, targetMarket, quarter).
3.  **`Semantic Query`:** (Future) Natural language queries ("What's our Indonesia strategy?", "Show Q1 decisions").
4.  **`Save Search`:** Bookmark complex filter combinations for repeated use.

**Integrations:**
1.  **Fuse.js:** Powers fuzzy search with weighted scoring (title=3x, headings=2x, content=1x).
2.  **FlexSearch:** Alternative engine for larger content volumes (500+ docs) with < 100ms response.
3.  **cmdk Library:** Command Palette UI for keyboard-first search experience.
4.  **Contentlayer:** Provides structured frontmatter metadata for advanced filtering.

**See Also:** Global Vault Search in `00-vault-overview-prd.md`

---

## 8. Cross-Section Integration with Products Lab

**Biz Lab and Products Lab are not isolated silos—they are deeply interconnected systems where business strategy informs product execution and product learnings feed back into strategic decisions.**

### 8.1 Strategic-to-Product Linkage

**Purpose:** Direct connections from business strategy docs to product implementation, ensuring strategic alignment.

**Features:**
1.  **Auto-Detected Product References:** When a strategy doc mentions "pricing page" or "onboarding flow", automatically suggests linking to relevant Products Lab components.
2.  **Strategy-Driven Component Tags:** Products Lab components can be tagged with strategic initiatives (e.g., `#indonesia-market-entry`, `#q1-gtm`).
3.  **Bi-Directional Context Panels:** When viewing GTM strategy, sidebar shows "Related UI Components" that implement this strategy.
4.  **Execution Status Indicators:** Strategy docs show real-time status (e.g., "Pricing Page: ✅ Implemented", "Onboarding Flow: 🚧 In Progress").
5.  **Impact Visualization:** Sankey diagram showing how strategic goals flow down to specific product experiments and components.

**Actions:**
1.  **`View Implementation`:** Click on a strategic initiative to see all Products Lab experiments and components implementing it.
2.  **`Link to Component`:** From strategy doc, explicitly link to specific UI component in Products Lab with reasoning.
3.  **`Track Progress`:** See aggregated completion status of all product work tied to a strategic initiative.
4.  **`Create Product Task`:** From strategy doc, instantly create a new experiment in Products Lab with strategic context pre-filled.

**Integrations:**
1.  **Unified Tagging System:** Shared tag namespace between Biz Lab (`#market-entry`) and Products Lab (components tagged with same).
2.  **Cross-Section Graph:** Knowledge graph shows edges between strategy docs and product components.
3.  **Contentlayer Cross-Index:** Build-time analysis creates bidirectional reference map across `/biz` and `/products`.
4.  **Real-time Status Sync:** Pusher events when product status changes update strategy doc indicators.

**Example Flow:**
```
Reading: /biz/gtm/indonesia-market-entry.md
→ Sidebar shows: "Related Products: Pricing Component (✅), Onboarding Flow (🚧), WhatsApp Integration (📋 Planned)"
→ Click "Pricing Component" → Jumps to /products/components/pricing with strategic context highlighted
```

---

### 8.2 Product-to-Strategy Feedback Loop

**Purpose:** Product learnings, experiment results, and component usage data flow back to inform strategic decisions.

**Features:**
1.  **Experiment Results Summary:** Products Lab experiments automatically generate "Strategic Insights" that appear in Biz Lab inbox.
2.  **Component Usage Analytics:** When a component is promoted to `/packages/ui`, usage data is surfaced in relevant market analysis docs.
3.  **Design Decision Logs:** UI decisions made in Products Lab (e.g., "Why we chose blue CTA buttons") link to strategic brand guidelines.
4.  **A/B Test Results → Strategy:** Experiment conversion data automatically updates pricing strategy docs with validated insights.
5.  **Customer Feedback Channel:** User research from product experiments creates actionable items in Biz Lab's "Market Intelligence" section.

**Actions:**
1.  **`Log Strategic Insight`:** From Products Lab experiment, create a strategic observation that appears in Biz Lab inbox.
2.  **`Update Market Analysis`:** One-click to promote experiment learnings into formal market analysis doc.
3.  **`Challenge Strategy`:** If experiment contradicts strategy (e.g., users prefer monthly over annual pricing), flag strategy doc for review.
4.  **`View Product Evidence`:** From strategy doc, see all Products Lab experiments that validate or challenge this strategy.

**Integrations:**
1.  **Experiment Metadata Bridge:** Products Lab `experimentResults` frontmatter automatically parsed for strategic insights.
2.  **Analytics Pipeline:** Product usage data from experiments flows into Biz Lab's decision support system.
3.  **Automated Inbox Creation:** Products Lab API can create Biz Lab inbox items with `type: "product-learning"`.
4.  **Git Commit Cross-Referencing:** Detects when product changes reference business strategy (e.g., commit message "Implements pricing strategy from biz/financial/pricing-model.md").

**Example Flow:**
```
Products Lab: Glass Card Experiment completed
→ 45% conversion increase with gradient vs. solid background
→ Auto-creates Biz Lab inbox item: "Strategic Insight: Visual Design Preference for Indonesia Market"
→ Product Partner reviews and promotes to /biz/market/indonesia-visual-preferences.md
```

---

### 8.3 Unified Decision Governance

**Purpose:** Strategic business decisions and product decisions managed in a single governance workflow.

**Features:**
1.  **Cross-Section Decision Logs:** Decision logs can affect both Biz Lab strategies AND Products Lab roadmaps.
2.  **Dual-Approval Workflows:** Some decisions require approval from both business stakeholder AND product lead.
3.  **Impact Cascade Visualization:** Shows how a business decision (e.g., "Enter Indonesia market") cascades to product decisions (e.g., "Build WhatsApp integration").
4.  **Unified Review Queue:** Mission Control Review Queue shows both strategic approvals and component promotion approvals in one view.
5.  **Decision Timeline:** Chronological view showing interleaved business and product decisions over time.

**Actions:**
1.  **`Create Cross-Section Decision`:** Flag a decision as affecting both Biz and Products (e.g., pricing model change).
2.  **`View Impact Map`:** See all downstream product and business decisions affected by this strategic choice.
3.  **`Sync Approval Status`:** When business strategy is approved, auto-notify Products Lab team of new requirements.
4.  **`Challenge with Evidence`:** Product experiments can challenge business assumptions with data (e.g., "Users prefer monthly, not annual").

**Integrations:**
1.  **Shared Decision Database:** Zustand store maintains single source of truth for all decisions across sections.
2.  **Impact Graph Algorithm:** Analyzes decision dependencies across `/biz/decisions/` and `/products/` to build cascade visualization.
3.  **Notification Orchestration:** Pusher events ensure both sections are notified when cross-cutting decisions are made.
4.  **Audit Trail:** Clerk metadata tracks decision lineage across both Biz Lab and Products Lab.

**Decision Flow Example:**
```typescript
Decision: "Pivot to Monthly Pricing for Indonesia Market"
├─ Biz Lab Impact:
│  ├─ /biz/financial/pricing-strategy.md → Requires update
│  ├─ /biz/gtm/sales-playbook.md → Requires update
│  └─ /biz/decisions/pricing-pivot.md → Decision log created
└─ Products Lab Impact:
   ├─ /products/components/pricing-card → Needs monthly option
   ├─ /products/experiments/pricing-test → Needs A/B validation
   └─ Review Queue → "Update Pricing Component" added for Product Partner
```

---

### 8.4 Shared Context & Recommendations

**Purpose:** Intelligent cross-section recommendations based on partner activity and strategic-product alignment.

**Features:**
1.  **Contextual Suggestions:** If viewing Indonesia market analysis in Biz Lab, suggest related Products Lab components (e.g., "WhatsApp Integration Experiment").
2.  **Reverse Suggestions:** If working on pricing component in Products Lab, suggest reading "Pricing Psychology Research" in Biz Lab.
3.  **Strategic Alignment Score:** Each product component shows alignment percentage with current strategic priorities.
4.  **Cross-Section Search:** Single search query returns results from both Biz Lab AND Products Lab with relevance scoring.
5.  **"Bridge Documents":** Automatically generated docs that summarize connections between strategy and product (e.g., "How Our Indonesia Strategy Maps to Product Work").

**Actions:**
1.  **`View Cross-Section Context`:** From any doc, toggle sidebar to show related docs from the other section.
2.  **`Jump to Implementation`:** From strategy doc, quick-jump to product components implementing this strategy.
3.  **`Jump to Strategy`:** From product component, quick-jump to the business strategy that motivated it.
4.  **`Generate Bridge Doc`:** Auto-create summary document showing strategy-to-product mapping.

**Integrations:**
1.  **Unified Recommendation Engine:** Collaborative filtering algorithm considers activity across both Biz Lab and Products Lab.
2.  **Cross-Section Embeddings:** OpenAI embeddings generated for both strategy docs and product docs for semantic similarity.
3.  **Smart Tagging:** AI detects when Biz Lab strategy mentions product concepts and suggests appropriate Products Lab tags.
4.  **Context-Aware Command Palette:** `Cmd+K` search shows relevant results from both sections with section badges.

**Recommendation Example:**
```
Currently Viewing: /biz/market/indonesia-customer-research.md
→ Smart Recommendations (Cross-Section):
   📊 Biz Lab: "WhatsApp Usage Patterns in Indonesia SMEs" (Related Market Research)
   🧪 Products Lab: "WhatsApp Integration Experiment" (Implementation)
   🎨 Products Lab: "Indonesian Color Preferences Study" (Related Experiment)
```

---

### 8.5 Unified Task & Workflow Management

**Purpose:** Single task management system that spans both strategic planning and product execution.

**Features:**
1.  **Cross-Section Task Lists:** Tasks can originate from Biz Lab (e.g., "Research competitor pricing") or Products Lab (e.g., "Build pricing component").
2.  **Strategic-to-Execution Pipeline:** Strategy tasks automatically create downstream product tasks when approved.
3.  **Blocked Dependencies:** Product tasks can be blocked by strategic decisions (e.g., "Can't build pricing page until pricing strategy is approved").
4.  **Unified Priority Queue:** Mission Control "My Focus" shows both strategic and product tasks in priority order.
5.  **Cross-Partner Assignments:** Tasks can be assigned across sections (e.g., "Marketing Partner: Validate pricing in Biz Lab" → "Product Partner: Implement in Products Lab").

**Actions:**
1.  **`Create Downstream Task`:** From Biz Lab strategy, create linked task in Products Lab with strategic context.
2.  **`Mark Dependency`:** Flag a product task as blocked by a strategic decision awaiting approval.
3.  **`View Task Lineage`:** See the chain from strategic goal → decision → product task → implementation.
4.  **`Sync Status`:** When product task is completed, auto-update strategic doc's "Implementation Status" indicator.

**Integrations:**
1.  **Markdown Task Parser:** Scans `[ ]` items in both `/biz` and `/products` to build unified task graph.
2.  **Task Dependency Engine:** Analyzes frontmatter and content to detect task dependencies across sections.
3.  **Zustand Task Store:** Single state management for all tasks regardless of origin section.
4.  **Pusher Task Sync:** Real-time updates when task status changes in either section.

**Task Flow Example:**
```
Biz Lab: [ ] Finalize Indonesia pricing strategy
   ↓ (Creates downstream task on approval)
Products Lab: [ ] Build monthly pricing component for Indonesia market
   ↓ (Creates validation task)
Products Lab: [ ] A/B test pricing variations
   ↓ (Results feed back)
Biz Lab: [ ] Update pricing strategy with experiment learnings
```

---

### 8.6 Technical Implementation: Cross-Section Architecture

**Purpose:** Technical foundation for seamless Biz Lab ↔ Products Lab integration.

**Core Integration Points:**

| Integration Layer | Technology | Latency Target | Data Flow |
|------------------|------------|----------------|-----------|
| **Cross-Section Linking** | Contentlayer + Unified Index | < 100ms | Bidirectional reference map |
| **Real-time Sync** | Pusher WebSocket | < 500ms | Status updates across sections |
| **Unified Search** | Fuse.js + Cross-Section Index | < 100ms | Single query, multi-section results |
| **Task Management** | Zustand + File Watcher | < 200ms | Markdown tasks from both sections |
| **Recommendation Engine** | Collaborative Filtering + OpenAI | < 2s | Cross-section suggestions |
| **Decision Cascade** | Graph Algorithm + Frontmatter | < 1s | Impact visualization |

**Cross-Section Event Bus:**
```typescript
// Unified event system for Biz Lab ↔ Products Lab communication
class CrossSectionEventBus extends VaultEventBus {
  // Biz Lab publishes product-relevant events
  publishStrategyUpdate(strategy: StrategyDoc) {
    const affectedProducts = this.findRelatedProducts(strategy)

    affectedProducts.forEach(product => {
      this.publish({
        type: 'STRATEGY_UPDATE',
        source: 'biz',
        target: 'products',
        payload: {
          strategy: strategy.id,
          affectedProduct: product.id,
          changeType: 'strategy_approved',
          actionRequired: true
        }
      })
    })
  }

  // Products Lab publishes strategy-relevant events
  publishExperimentResults(experiment: Experiment) {
    const relatedStrategies = this.findRelatedStrategies(experiment)

    relatedStrategies.forEach(strategy => {
      this.publish({
        type: 'EXPERIMENT_COMPLETED',
        source: 'products',
        target: 'biz',
        payload: {
          experiment: experiment.id,
          results: experiment.conversionData,
          strategicInsight: experiment.learnings,
          suggestedAction: 'update_market_analysis'
        }
      })
    })
  }
}
```

**Cross-Section Reference Map:**
```typescript
interface CrossSectionReference {
  bizDoc: {
    path: "/biz/gtm/indonesia-market-entry.md",
    type: "strategy",
    tags: ["#indonesia", "#market-entry", "#q1-2026"]
  },
  productDocs: [
    {
      path: "/products/components/pricing",
      relationship: "implements",
      status: "completed",
      completionDate: "2026-01-15"
    },
    {
      path: "/products/experiments/whatsapp-integration",
      relationship: "validates",
      status: "in_progress",
      blockedBy: null
    }
  ],
  sharedTags: ["#indonesia", "#q1-2026"],
  lastSyncedAt: "2026-01-18T14:30:00Z"
}
```

**Unified Indexing System:**
```typescript
// Build-time cross-section index
function buildUnifiedIndex() {
  const bizDocs = getAllBizDocs()
  const productDocs = getAllProductDocs()

  const index = {
    crossReferences: [],
    sharedTags: new Set(),
    decisionImpactMap: new Map()
  }

  // Detect cross-references
  bizDocs.forEach(bizDoc => {
    const mentions = detectProductMentions(bizDoc.content)
    mentions.forEach(mention => {
      index.crossReferences.push({
        from: bizDoc.path,
        to: findProductDoc(mention),
        type: 'mention',
        context: extractContext(bizDoc, mention)
      })
    })
  })

  // Build decision impact map
  decisions.forEach(decision => {
    const bizImpact = findAffectedBizDocs(decision)
    const productImpact = findAffectedProductDocs(decision)

    index.decisionImpactMap.set(decision.id, {
      bizDocs: bizImpact,
      productDocs: productImpact,
      totalImpact: bizImpact.length + productImpact.length
    })
  })

  return index
}
```

**See:**
- `00-vault-overview-prd.md` Section 3.2 for Mission Control integration
- `11-products-lab-prd.md` Section 16 for Products Lab's perspective on integration

---

# Part III: Core Platform

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

**Last Updated:** January 18, 2026
