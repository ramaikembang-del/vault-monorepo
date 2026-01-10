# Vault Feature Specifications: Complete Technical Reference
**Comprehensive Specification Document (V2-V5 Merged with Full Details)**

> **Document Purpose:** This is the **technical reference** for developers and designers implementing Vault's advanced features. It preserves ALL original specifications including exact CSS values, full code templates, animations, and design tokens.

> **Foundation:** Built on the responsive architecture documented in `vault-feature-roadmap.md` (Part 0), which established the "Orientation + Input Matrix" and Studio Tuner sync system.

---

## Design Principles (From Evolution)

These principles emerged from our responsive architecture redesign and guide all feature implementations:

### 1. Capability Detection Over Device Detection
**Principle:** Detect *how* users interact (touch vs mouse), not *what* device they use.

**Why:** High-res tablets with mice exist. Narrow desktop windows exist. User Agent strings lie.

**Application:**
- V4 Floating Panels: Use `(pointer: coarse)` to trigger touch-optimized layouts
- V5 Navbar: Detect input method to switch between hover (mouse) and tap (touch) modes
- Test edge cases: Surface Pro detached, iPad with Magic Keyboard, vertical monitors

### 2. Iterative Prototyping Over Big-Bang Releases
**Principle:** Ship incrementally, learn from real usage, pivot when needed.

**Why:** Our V1 "forced simulation" was elegant on paper but brittle in practice. V4's "corner sidebar" ignored ergonomic research.

**Application:**
- V2-V5 rollout: Ship graph foundation first, test view modes before floating panels
- User feedback checkpoints after each phase
- Willingness to pivot (like we did from split-view to floating panels)

### 3. User-Centric Naming Over Technical Jargon
**Principle:** Labels should describe *what users see*, not *how it's implemented*.

**Why:** "Transform" → "Center Offset", "BG Opacity" → "Background Opacity" reduced support questions by 40%.

**Application:**
- V2 Graph: "Filter nodes" not "Apply predicate to graph data structure"
- V5 Navbar: "Unread badges" not "Document count observers"
- Tooltips explain *why*, not *how*

### 4. Performance is a Feature
**Principle:** 60 FPS is non-negotiable. GPU transforms only.

**Why:** Janky animations destroy "premium" feel faster than any CSS gradient.

**Application:**
- All animations use `transform` and `opacity` only (never `width`, `top`, `margin`)
- `willChange` hints for browsers
- Bundle budget enforced (+140KB max for all V2-V5)
- Graph virtualization at 500+ nodes

### 5. Accessibility is Not Optional
**Principle:** Keyboard navigation, ARIA labels, and screen reader support are core features, not afterthoughts.

**Why:** 15% of users navigate by keyboard. Legal compliance (WCAG AA).

**Application:**
- All interactive elements focusable (`tabindex`, `role`, `aria-label`)
- Keyboard shortcuts documented and customizable
- Focus indicators visible (pulsing ring, high-contrast outline)
- Screen reader announcements for state changes

---

## Table of Contents
1. [V2: Knowledge Graph (Obsidian-Style)](#v2-knowledge-graph)
2. [V3: Graph View Modes](#v3-graph-view-modes)
3. [V4: Floating Panel System](#v4-floating-panels)
4. [V5: Premium Navbar Experience](#v5-premium-navbar)
5. [Design Tokens Reference](#design-tokens)
6. [Performance Specifications](#performance-specs)

---

## V2: Knowledge Graph (Obs

idian-Style)

### Overview
Add an interactive, Obsidian-style knowledge graph to Biz Lab for visualizing document relationships and intuitive navigation through strategy docs.

###  User Experience

#### Visual Design (Obsidian-Inspired)

**Graph Type:** 2D Force-Directed Graph
- Nodes represent documents
- Edges represent references/backlinks

**Color Coding System:**
```css
/* Strategy Documents */
--graph-strategy-color: #3b82f6; /* blue-500 */

/* Product Documents */
--graph-product-color: #f97316; /* orange-500 */

/* Financial Documents */
--graph-financial-color: #10b981; /* green-500 */

/* Currently Viewed Document */
--graph-active-color: #fbbf24; /* amber-400 */
--graph-active-glow: 0 0 20px rgba(251, 191, 36, 0.6);
```

**Size Variation Logic:**
```javascript
// Node size calculation
const nodeSize = (node) => {
  const connectionWeight = node.links.length * 2;  // More connections = larger
  const readStatus = node.unread ? 3 : 1;          // Unread = larger
  return Math.max(5, Math.min(25, connectionWeight + readStatus));
};
```

#### Interactions

**Hover Node: Preview Card**
```tsx
interface PreviewCard {
  title: string;
  readTime: string;      // "5 min read"
  keyTopics: string[];   // ["GTM", "Sprint 1", "Positioning"]
  lastModified: Date;
}
```

**Preview Card Styling:**
```css
.graph-preview-card {
  position: absolute;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 280px;
  z-index: 1000;
}

.graph-preview-title {
  font-size: 16px;
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 8px;
}

.graph-preview-meta {
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 12px;
}

.graph-preview-topics {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.graph-preview-topic-tag {
  font

-size: 11px;
  padding: 2px 8px;
  background: rgba(249, 115, 22, 0.15);
  border: 1px solid rgba(249, 115, 22, 0.3);
  border-radius: 4px;
  color: #fb923c;
}
```

**Click Node:** Navigate to document
**Drag Node:** Reposition (physics adjusts)
**Zoom/Pan:** Mouse wheel + drag
**Search:** Filter nodes, highlight matches
**Cluster Toggle:** Group by directory

### Technical Implementation

#### Library Choice: react-force-graph-2d

**Installation:**
```bash
npm install react-force-graph-2d
```

**Why react-force-graph-2d?**
- ✅ **Lightweight:** ~50KB gzipped (vs 200KB+ for Cytoscape, 150KB+ for vis-network)
- ✅ **Canvas-based:** Not WebGL (better compatibility, lower GPU overhead)
- ✅ **Obsidian-like:** Force-directed layout matches Obsidian's graph view aesthetically
- ✅ **React-first:** First-class React support with hooks
- ✅ **Interactive:** Built-in zoom, pan, drag, hover out-of-the-box
- ✅ **Performance:** Handles 100-500 nodes smoothly at 60 FPS

**Alternatives Considered (and why rejected):**
| Library | Pros | Cons | Verdict |
| :--- | :--- | :--- | :--- |
| vis-network | Canvas-based, fast | Older API, less React-friendly | ❌ Rejected |
| Reagraph | Beautiful WebGL | Too heavy (WebGL overkill) | ❌ Rejected |
| Sigma.js | Great performance | Complex API, steep learning curve | ❌ Rejected |
| Cytoscape.js | Feature-rich | 200KB+ bundle, overkill for this | ❌ Rejected |

#### Component Architecture

**Data Interfaces:**
```typescript
// File: lib/types/graph.ts

interface GraphNode {
  id: string;           // File path (e.g., "strategy/gtm.md")
  name: string;         // Document title
  val: number;          // Node size (importance/connections)
  color: string;        // Category color
  group: string;        // Directory category ("strategy" | "products" | "financial")
  unread?: boolean;     // Read status
  lastModified?: Date;  // For recency indicator
}

interface GraphLink {
  source: string;       // Source document ID
  target: string;       // Target document ID
  value: number;        // Link strength (1-10)
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}
```

**Main Component:**
```tsx
// File: components/knowledge-graph/GraphView.tsx

import { ForceGraph2D } from 'react-force-graph';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

export default function GraphView() {
  const graphData = useGraphData(); // Load from JSON
  const router = useRouter();
  const [hoverNode, setHoverNode] = useState<GraphNode | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter nodes based on search
  const filteredData = useMemo(() => {
    if (!searchQuery) return graphData;
    
    const filtered = graphData.nodes.filter(node =>
      node.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return {
      nodes: filtered,
      links: graphData.links.filter(link =>
        filtered.some(n => n.id === link.source) &&
        filtered.some(n => n.id === link.target)
      )
    };
  }, [graphData, searchQuery]);

  return (
    <div className="relative w-full h-screen">
      {/* Search Bar */}
      <div className="absolute top-4 left-4 z-10">
        <input
          type="text"
          placeholder="🔍 Search documents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 bg-slate-900/90 border border-slate-700 rounded-lg"
        />
      </div>

      {/* Force Graph */}
      <ForceGraph2D
        graphData={filteredData}
        nodeLabel="name"
        nodeAutoColorBy="group"
        nodeVal={(node) => nodeSize(node)}
        onNodeClick={(node) => router.push(`/biz/${node.id}`)}
        onNodeHover={(node) => setHoverNode(node)}
        cooldownTicks={100}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
        linkWidth={1.5}
        linkColor={() => 'rgba(148, 163, 184, 0.3)'}
        backgroundColor="#0f172a"
        nodeCanvasObject={(node, ctx, globalScale) => {
          // Custom node rendering with glow effect
          const label = node.name;
          const fontSize = 12 / globalScale;
          const nodeRadius = nodeSize(node);

          // Glow for active node
          if (hoverNode?.id === node.id) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, nodeRadius + 5, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(251, 191, 36, 0.3)`;
            ctx.fill();
          }

          // Node circle
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI);
          ctx.fillStyle = node.color;
          ctx.fill();

          // Label
          if (globalScale > 1.5) {
            ctx.font = `${fontSize}px Plus Jakarta Sans`;
            ctx.fillStyle = '#f1f5f9';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, node.x, node.y + nodeRadius + fontSize + 2);
          }
        }}
      />

      {/* Preview Card */}
      {hoverNode && (
        <div className="graph-preview-card">
          <h3 className="graph-preview-title">{hoverNode.name}</h3>
          <p className="graph-preview-meta">5 min read • Last edited 2 days ago</p>
          <div className="graph-preview-topics">
            <span className="graph-preview-topic-tag">Strategy</span>
            <span className="graph-preview-topic-tag">GTM</span>
          </div>
        </div>
      )}
    </div>
  );
}
```

#### Data Pipeline

**Step 1: Build Graph Data (Build Time)**

```typescript
// File: lib/build-graph.ts
// Runs during build to extract all document links

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function buildDocumentGraph(docsDir: string): GraphData {
  const nodes: GraphNode[] = [];
  const links: GraphLink[] = [];
  const linkMap = new Map<string, Set<string>>();

  // Scan all .md files
  const files = getAllMarkdownFiles(docsDir);

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data: frontmatter, content: body } = matter(content);

    // Extract ID from path
    const id = path.relative(docsDir, file).replace(/\\.md$/, '');

    // Determine category from path
    const category = id.split('/')[0]; // "strategy", "products", "financial"

    // Create node
    nodes.push({
      id,
      name: frontmatter.title || path.basename(file, '.md'),
      val: 5, // Default size
      color: getCategoryColor(category),
      group: category,
      unread: false // TODO: Track read status
    });

    // Extract links from frontmatter
    const frontmatterLinks = frontmatter.related || [];

    // Extract links from markdown content
    const markdownLinks = extractMarkdownLinks(body);

    // Merge all links
    const allLinks = [...frontmatterLinks, ...markdownLinks];
    
    if (allLinks.length > 0) {
      linkMap.set(id, new Set(allLinks));
    }
  });

  // Build links from linkMap
  linkMap.forEach((targets, source) => {
    targets.forEach(target => {
      links.push({
        source,
        target,
        value: 1
      });
    });
  });

  // Update node sizes based on connection count
  nodes.forEach(node => {
    const connectionCount = links.filter(
      l => l.source === node.id || l.target === node.id
    ).length;
    node.val = Math.max(5, Math.min(25, connectionCount * 2));
  });

  return { nodes, links };
}

function getCategoryColor(category: string): string {
  const colors = {
    strategy: '#3b82f6',
    products: '#f97316',
    financial: '#10b981'
  };
  return colors[category] || '#94a3b8';
}

function extractMarkdownLinks(content: string): string[] {
  const linkRegex = /\\[([^\\]]+)\\]\\(([^)]+)\\)/g;
  const links: string[] = [];
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[2];
    // Only internal links
    if (!url.startsWith('http')) {
      links.push(url.replace(/^\\.\\//, ''));
    }
  }

  return links;
}

function getAllMarkdownFiles(dir: string): string[] {
  // Recursive file scanner
  // Implementation omitted for brevity
}
```

**Step 2: Generate Static JSON**

```typescript
// File: scripts/generate-graph.ts
import { buildDocumentGraph } from '../lib/build-graph';
import fs from 'fs';

const graphData = buildDocumentGraph('./content/biz');
fs.writeFileSync(
  './public/data/graph-data.json',
  JSON.stringify(graphData, null, 2)
);

console.log(`✅ Generated graph with ${graphData.nodes.length} nodes`);
```

**Add to package.json:**
```json
{
  "scripts": {
    "build:graph": "tsx scripts/generate-graph.ts",
    "prebuild": "npm run build:graph"
  }
}
```

### Integration Points

**Vault UX Enhancements PRD:**
- Add Section 3.7: "Knowledge Graph View"

**Location:** New route `/biz/graph`

**Access:** Floating button "🗺️ Graph View" in Biz Lab sidebar

```tsx
// In Biz Lab sidebar
<Link
  href="/biz/graph"
  className="flex items-center gap-2 px-4 py-2 hover:bg-slate-800 rounded-lg"
>
  🗺️ Graph View
</Link>
```

### Performance Targets

- **Initial Load:** < 500ms (graph JSON loaded)
- **Rendering:** 60 FPS with 200 nodes
- **Bundle Size:** < 100KB added to `/biz/graph` route

---

## V3: Graph View Modes

### Goal
Extend V2 graph with **three distinct viewing modes** for flexible content consumption: Full-Window, Side-by-Side, and Floating Note.

### View Modes

#### Mode 1: Full-Window (Default)
Graph fills entire viewport. This is the V2 default behavior.

#### Mode 2: Side-by-Side Split View

**Visual Layout:**
```
┌─────────────────────────────────────────────┐
│ Graph (60%)   │  Document Reader (40%)    │
│               │                             │
│   ⚫ Market    │  # GTM Strategy            │
│    ╱│╲       │  Sprint 1 focuses on...    │
│   ● ● ●      │                             │
│               │  [Read Full Doc]           │
│               │                             │
└─────────────────────────────────────────────┘
```

**Resizable Divider Implementation:**
```tsx
// Using react-resizable-panels

import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export function SplitViewGraph() {
  return (
    <PanelGroup direction="horizontal">
      {/* Graph Panel */}
      <Panel defaultSize={60} minSize={40}>
        <GraphView />
      </Panel>

      {/* Resize Handle */}
      <PanelResizeHandle className="w-2 bg-slate-700 hover:bg-orange-500 transition-colors" />

      {/* Document Panel */}
      <Panel defaultSize={40} minSize={30}>
        <DocumentReader />
      </Panel>
    </PanelGroup>
  );
}
```

**Click-to-Load Flow:**
```tsx
const [activeDocId, setActiveDocId] = useState<string | null>(null);

// In GraphView
onNodeClick={(node) => {
  if (viewMode === 'split') {
    setActiveDocId(node.id);  // Load in right pane
  } else {
    router.push(`/biz/${node.id}`);  // Navigate away
  }
}}
```

#### Mode 3: Floating Note View

**Visual Layout:**
```
┌─────────────────────────────────────────────┐
│  Graph (dimmed background)                  │
│                              ┌─────────────┐│
│   ⚫ Market                  │ 📄 GTM Str │││
│    ╱│╲                      │ ──────────│││
│   ● ● ●                      │ Sprint 1... │││
│             (draggable       │             │││
│              panel)          │ [Full 🔗]  │││
│                              └─────────────┘│
└─────────────────────────────────────────────┘
```

**Draggable Overlay Implementation:**
```tsx
import Draggable from 'react-draggable';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingNotePanel({ document }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dimmed Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Draggable Panel */}
          <Draggable handle=".drag-handle">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="fixed right-8 top-1/2 -translate-y-1/2 w-96 bg-slate-900 rounded-2xl shadow-2xl z-50"
            >
              {/* Drag Handle */}
              <div className="drag-handle px-6 py-4 border-b border-slate-700 cursor-move">
                <h3 className="text-lg font-semibold">📄 {document.title}</h3>
              </div>

              {/* Content */}
              <div className="px-6 py-4 max-h-96 overflow-y-auto">
                <p className="text-sm text-slate-300">
                  {document.preview}
                </p>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-slate-700">
                <button
                  onClick={() => router.push(`/biz/${document.id}`)}
                  className="text-orange-500 hover:text-orange-400 text-sm font-medium"
                >
                  Read Full Document →
                </button>
              </div>
            </motion.div>
          </Draggable>
        </>
      )}
    </AnimatePresence>
  );
}
```

**Graph Dimming Effect:**
```css
.graph-container.dimmed {
  filter: brightness(0.5) saturate(0.7);
  transition: filter 300ms ease-out;
}
```

### Technical Stack

```bash
npm install react-resizable-panels  # Split-view divider
npm install framer-motion            # Smooth animations
npm install react-draggable          # Draggable overlay
```

### Implementation Tasks (5 Days)

**Day 1: State Management**
- [ ] Create view mode state system (`full` | `split` | `floating`)
- [ ] localStorage persistence for user preference
- [ ] Mode switcher UI component

**Day 2: Split View**
- [ ] Implement resizable panel with react-resizable-panels
- [ ] Create DocumentReader component for right pane
- [ ] Click-to-load logic (prevent navigation when in split mode)

**Day 3-4: Floating View**
- [ ] Draggable overlay card with Framer Motion
- [ ] Graph dimming effect (CSS filter)
- [ ] Preview truncation logic (200 chars + "...")
- [ ] Smooth open/close animations

**Day 5: Polish**
- [ ] Mode switcher toolbar (3 buttons: Full / Split / Float)
- [ ] Keyboard shortcuts (`Cmd+1/2/3` for modes)
- [ ] Responsive breakpoints (mobile: floating only, no split)
- [ ] Performance optimization (React.memo, useMemo)

---

## V4: Floating Panel System (Notion-Style)

### Paradigm Shift: Floating Panels (Not Split-View)

**Core Concept:** Instead of traditional split-panes (V3), we use **floating, draggable panels** that overlay the graph, similar to Notion's flexible UI. This provides maximum freedom in layout without sacrificing graph visibility.

### UX Design

#### Default View: Floating Note Panel

**Visual Layout:**
```
┌─────────────────────────────────────────────────────┐
│  GRAPH (full background)                            │
│                                                     │
│   ⚫ Market Research        ┌─────────────────┐    │
│    ╱│╲                      │ 📄 GTM Strategy │    │
│   ● ● ●   Cultural         │ ───────────────│    │
│                             │                 │    │
│        ┌─── Position ────┐  │ Sprint 1 GTM    │    │
│        │ ◀ Center ▶     │  │ follows a...    │    │
│        │ [ ] [ ] [ ]    │  │                 │    │
│        │ L   C   R      │  │ [Read Full 🔗]  │    │
│        └────────────────┘  │                 │    │
│                             │ Width: [━━▓━━]  │    │
│                             └─────────────────┘    │
└─────────────────────────────────────────────────────┘
```

**Panel Controls (Always Visible):**

1. **Position Presets:** `◀ L | C | R ▶` (Left, Center, Right)
2. **Width Slider:** Adjustable from 1/3 → 1/2 of viewport
3. **Drag Handle:** Top bar for free positioning anywhere on canvas
4. **Minimize:** Collapses to small "📄" icon in corner

#### Full-Window Mode: Graph + Floating Panels

```
┌─────────────────────────────────────────────────────┐
│  GRAPH (full canvas)                                │
│                                                     │
│  ┌──────┐                      ┌─────────────────┐ │
│  │ 📁   │    ⚫ Market         │ 📄 GTM Strategy │ │
│  │ Str. │     ╱│╲             │ ───────────────│ │
│  │ Prod │    ● ● ●            │ Sprint 1...     │ │
│  │ Fin. │                      │                 │ │
│  └──────┘                      └─────────────────┘ │
│   ↑ Navbar (hover: expands)         ↑ Note Panel   │
└─────────────────────────────────────────────────────┘
```

**Navbar Position Logic (Smart Orchestration):**
- **If note panel on LEFT:** Navbar + Note combine into one floating unit
- **If note panel on RIGHT or CENTER:** Navbar stays separate on left edge

#### Dynamic Navbar (2 Hover Modes)

**Mode A: Full Expand (Notion-style)**
```
Collapsed (default):          Hover (expands):
┌──────┐                     ┌───────────────┐
│ 📁   │                     │ 📁 Strategy   │
│ 💼   │  ──(hover)──>       │ 💼 Products   │
│ 💰   │                     │ 💰 Financial  │
└──────┘                     └───────────────┘
```

**Mode B: Icon Animation Only**
```
Collapsed (default):          Hover (icons pulse):
┌──────┐                     ┌──────┐
│ 📁   │                     │ 📁💫 │ ← icon glows
│ 💼   │  ──(hover)──>       │ 💼   │
│ 💰   │                     │ 💰   │
└──────┘                     └──────┘
```

*User chooses mode in settings.*

### Technical Architecture

#### Component Structure

```tsx
// Main Graph Container
<GraphCanvas>
  {/* Background: Force-directed graph */}
  <ForceGraph2D />
  
  {/* Overlays */}
  <FloatingNotePanel 
    position="center"      // left | center | right
    width={0.4}            // 0.33 - 0.5 of viewport
    isDraggable
    onPositionChange={handlePanelMove}
  />
  
  <DynamicNavbar 
    mode="full-expand"     // full-expand | icon-only
    position="left"
    isHidden={notePanelPosition === "left"}
  />
</GraphCanvas>
```

#### State Management

```typescript
interface GraphViewState {
  // Note Panel
  notePanelPosition: 'left' | 'center' | 'right';
  notePanelWidth: number;          // 0.33 - 0.5
  notePanelIsMinimized: boolean;
  currentDocId: string | null;
  
  // Navbar
  navbarMode: 'full-expand' | 'icon-only';
  navbarIsHovered: boolean;
  
  // Graph
  graphZoom: number;
  graphCenter: { x: number; y: number };
}
```

**useState Implementation:**
```tsx
const [panelState, setPanelState] = useState<GraphViewState>({
  notePanelPosition: 'center',
  notePanelWidth: 0.4,
  notePanelIsMinimized: false,
  currentDocId: null,
  navbarMode: 'full-expand',
  navbarIsHovered: false,
  graphZoom: 1,
  graphCenter: { x: 0, y: 0 }
});
```

#### Positioning System

**Use CSS transforms + Framer Motion for smooth transitions:**

```typescript
// Panel positioning configuration
const panelStyles = {
  left: { 
    left: '2rem', 
    transform: 'translateX(0)' 
  },
  center: { 
    left: '50%', 
    transform: 'translateX(-50%)' 
  },
  right: { 
    right: '2rem', 
    transform: 'translateX(0)' 
  }
};

// Animated transitions
<motion.div
  initial={panelStyles[position]}
  animate={panelStyles[position]}
  transition={{ 
    type: 'spring', 
    stiffness: 300, 
    damping: 30 
  }}
  style={{
    width: `${width * 100}%`,
    maxWidth: '600px',
    minWidth: '300px'
  }}
>
  {/* Panel content */}
</motion.div>
```

**Complete FloatingNotePanel Component:**
```tsx
import { motion } from 'framer-motion';
import Draggable from 'react-draggable';

interface FloatingNotePanelProps {
  position: 'left' | 'center' | 'right';
  width: number;
  isDraggable: boolean;
  document: Document;
  onPositionChange: (position: 'left' | 'center' | 'right') => void;
  onWidthChange: (width: number) => void;
}

export function FloatingNotePanel({
  position,
  width,
  isDraggable,
  document,
  onPositionChange,
  onWidthChange
}: FloatingNotePanelProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const panelStyles = {
    left: { left: '2rem', transform: 'translateX(0)' },
    center: { left: '50%', transform: 'translateX(-50%)' },
    right: { right: '2rem', transform: 'translateX(0)' }
  };

  if (isMinimized) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 w-12 h-12 bg-slate-900 rounded-full 
                   shadow-xl flex items-center justify-center hover:scale-110 
                   transition-transform z-50"
      >
        📄
      </motion.button>
    );
  }

  return (
    <Draggable
      disabled={!isDraggable}
      handle=".drag-handle"
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <motion.div
        initial={panelStyles[position]}
        animate={panelStyles[position]}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`
          fixed top-1/2 -translate-y-1/2 z-40
          bg-slate-900/95 backdrop-blur-lg
          border border-slate-700 rounded-2xl
          shadow-2xl
          ${isDragging ? 'cursor-grabbing' : ''}
        `}
        style={{
          width: `${width * 100}%`,
          maxWidth: '600px',
          minWidth: '300px',
          maxHeight: '80vh'
        }}
      >
        {/* Drag Handle */}
        <div className="drag-handle px-6 py-4 border-b border-slate-700 cursor-grab active:cursor-grabbing">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{document.title}</h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ─
            </button>
          </div>
        </div>

        {/* Position Controls */}
        <div className="px-6 py-3 border-b border-slate-700 flex items-center gap-4">
          <span className="text-sm text-slate-400">Position:</span>
          <div className="flex gap-2">
            {(['left', 'center', 'right'] as const).map(pos => (
              <button
                key={pos}
                onClick={() => onPositionChange(pos)}
                className={`
                  px-3 py-1 rounded text-sm font-medium transition-colors
                  ${position === pos 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }
                `}
              >
                {pos[0].toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Width Slider */}
        <div className="px-6 py-3 border-b border-slate-700">
          <span className="text-sm text-slate-400 block mb-2">Width:</span>
          <input
            type="range"
            min="0.33"
            max="0.5"
            step="0.01"
            value={width}
            onChange={(e) => onWidthChange(Number(e.target.value))}
            className="w-full accent-orange-500"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-4 overflow-y-auto max-h-[50vh]">
          <p className="text-slate-300 text-sm leading-relaxed">
            {document.preview}
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-700">
          <a
            href={`/biz/${document.id}`}
            className="text-orange-500 hover:text-orange-400 text-sm font-medium inline-flex items-center gap-2"
          >
            Read Full Document →
          </a>
        </div>
      </motion.div>
    </Draggable>
  );
}
```

### Navbar Orchestration Logic

**Smart Collision Detection:**
```tsx
const useNavbarOrchestration = (notePanelPosition: 'left' | 'center' | 'right') => {
  const shouldCombineWithPanel = notePanelPosition === 'left';
  const shouldHideNavbar = shouldCombineWithPanel;

  return {
    navbarPosition: shouldCombineWithPanel ? 'top-left-of-panel' : 'left-edge',
    shouldAnimate: true,
    combinedWidth: shouldCombineWithPanel ? '220px' : '60px'
  };
};
```

**Combined Panel (when both on left):**
```tsx
{notePanelPosition === 'left' ? (
  <CombinedPanelStack>
    <DynamicNavbar mode={navbarMode} />
    <Divider />
    <FloatingNotePanel {...panelProps} />
  </CombinedPanelStack>
) : (
  <>
    <DynamicNavbar mode={navbarMode} />
    <FloatingNotePanel {...panelProps} />
  </>
)}
```

### Implementation Tasks (5 Days)

#### Day 1: Core Graph Canvas
- [ ] Implement force-directed graph background (using V2's GraphView)
- [ ] Full-canvas rendering (no split-view constraints)
- [ ] Basic zoom/pan controls
- [ ] Graph state management (zoom level, center point)

#### Day 2: Floating Note Panel
- [ ] Build draggable panel component with `react-draggable`
- [ ] Position controls (L/C/R button group)
- [ ] Width slider component (1/3 - 1/2 range)
- [ ] Minimize/maximize animations
- [ ] Panel shadow and glassmorphism styling

#### Day 3: Dynamic Navbar Integration
- [ ] Implement two hover modes (full-expand vs icon-only)
- [ ] Auto-hide logic when note panel on left
- [ ] Smooth expand/collapse animations (Framer Motion)
- [ ] Navbar settings persistence

#### Day 4: Panel Orchestration
- [ ] Combine navbar + note panel when both on left
- [ ] Smart collision detection algorithm
- [ ] localStorage persistence for:
  - Panel position (L/C/R)
  - Panel width
  - Navbar mode
  - Minimized state
- [ ] Z-index management for overlapping panels

#### Day 5: Polish & Testing
- [ ] Drag smoothness optimization (60 FPS target)
- [ ] Responsive breakpoints:
  - Desktop: Full floating system
  - Tablet: Panels snap to edges
  - Mobile: Panels go full-width bottom sheet
- [ ] Keyboard shortcuts:
  - `Cmd+1/2/3`: Position panel L/C/R
  - `Cmd+M`: Minimize/maximize panel
  - `Esc`: Close panel
- [ ] Accessibility: Focus management, ARIA labels
- [ ] Performance testing with graph rendering

### Dependencies

```bash
npm install react-force-graph-2d  # Already from V2
npm install framer-motion          # Already from V3/V5
npm install react-draggable        # Already from V3
```

**No additional dependencies needed!** All required packages already installed from previous phases.

### Performance

- **Graph:** Still 60 FPS (canvas-based, unaffected by overlays)
- **Panels:** GPU-accelerated transforms (`translate`, `scale`, `opacity` only)
- **Bundle:** ~120KB additional (primarily `framer-motion`, which is cached from V5)
- **Memory:** Minimal overhead (single panel instance, lazy-loaded document content)

### Design Tokens (V4-Specific)

```css
:root {
  /* Floating Panel */
  --panel-bg: rgba(15, 23, 42, 0.95);
  --panel-border: rgba(148, 163, 184, 0.2);
  --panel-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  --panel-backdrop-blur: 16px;
  
  /* Panel Sizing */
  --panel-min-width: 300px;
  --panel-max-width: 600px;
  --panel-default-width: 40%; /* 0.4 of viewport */
  
  /* Panel Animation */
  --panel-spring-stiffness: 300;
  --panel-spring-damping: 30;
  
  /* Minimized Icon */
  --minimized-icon-size: 48px;
  --minimized-icon-bg: rgba(15, 23, 42, 0.9);
}
```

### Success Criteria

- [ ] Panel draggable anywhere on canvas without lag
- [ ] Smooth position preset transitions (L/C/R)
- [ ] Width slider updates in real-time (no jank)
- [ ] Navbar auto-hide works seamlessly
- [ ] Combined panel (navbar + note) feels natural
- [ ] Graph remains interactive during panel drag
- [ ] localStorage persists all user preferences
- [ ] Mobile fallback to bottom sheet works correctly

**Total Estimate:** 5 days

---

## V5: Premium Navbar Experience

### Overview
Transform the Vault navbar from a simple navigation tool into a **delightful, intelligent, accessible command center**.

### 1. Visual Design & States

#### Base Styling (Collapsed - 60px wide)

**Island Container:**
```css
.navbar-island {
  background: rgba(15, 23, 42, 0.85); /* slate-900 with transparency */
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%); /* Safari support */
  border: 1px solid rgba(148, 163, 184, 0.12); /* subtle border */
  border-radius: 16px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05); /* inner glow */
  position: fixed;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  width: 60px;
  padding: 12px;
  z-index: 100;
}
```

#### Item States

**Default (Idle):**
```css
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: all 200ms ease-out;
}

.nav-item-icon {
  fill: #94a3b8; /* slate-400 */
  width: 20px;
  height: 20px;
  transition: fill 200ms ease-out;
}
```

**Hover:**
```css
.nav-item:hover {
  background: rgba(251, 146, 60, 0.1); /* orange glow */
  border: 1px solid rgba(251, 146, 60, 0.3);
  transform: scale(1.1);
}

.nav-item:hover .nav-item-icon {
  fill: #f97316; /* orange-500 */
}
```

**Active (Current Section):**
```css
.nav-item.active {
  background: rgba(251, 146, 60, 0.15);
  border-left: 3px solid #f97316; /* indicator bar */
  padding-left: 3px; /* Adjust for border */
}

.nav-item.active .nav-item-icon {
  fill: #f97316;
}

/* Persistent glow effect */
.nav-item.active::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(249, 115, 22, 0.4);
  pointer-events: none;
}
```

**Focus (Keyboard Navigation):**
```css
.nav-item:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.4); /* Pulsing ring */
  border: 2px solid #f97316; /* High-contrast outline */
}

/* Pulse animation */
@keyframes pulse-ring {
  0%, 100% {
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.4);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(249, 115, 22, 0.2);
  }
}

.nav-item:focus-visible {
  animation: pulse-ring 2s ease-in-out infinite;
}
```

### 2. Expansion Modes

#### Mode A: Full Panel Expansion (Notion-style)

**Timing Configuration:**
```typescript
const EXPANSION_CONFIG = {
  hoverDelay: 150,        // ms before expansion starts
  expandDuration: 300,    // ms for expand animation
  collapseDuration: 200,  // ms for collapse animation
  expandEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // bounce
  collapseEasing: 'ease-out'
};
```

**Expanded Layout (220px wide):**
```
┌───────────────────────┐
│ 📁  Strategy         ● │ ← Badge (2 unread)
│ 💼  Products           │
│ 💰  Financial          │
│ ──────────────────     │ ← Divider
│ 🎯  Achievements    3/8│ ← Progress indicator
│ ⚙️  Settings           │
└───────────────────────┘
```

**Label Typography:**
```css
.nav-item-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #e2e8f0; /* slate-200 */
  letter-spacing: -0.01em;
  line-height: 20px;
  margin-left: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 200ms ease-out;
}

.navbar-island.expanded .nav-item-label {
  opacity: 1;
  transition-delay: 100ms; /* Delay label fade-in */
}
```

**Smart Behaviors:**

**Sticky Hover:**
```typescript
const [isHovered, setIsHovered] = useState(false);
const [isInsidePanel, setIsInsidePanel] = useState(false);

const shouldStayExpanded = isHovered || isInsidePanel;
```

**Smart Close (300ms delay):**
```typescript
const closeTimeoutRef = useRef<NodeJS.Timeout>();

const handleMouseLeave = () => {
  closeTimeoutRef.current = setTimeout(() => {
    if (!isInsidePanel) {
      setIsHovered(false);
    }
  }, 300);
};

const handleMouseEnter = () => {
  if (closeTimeoutRef.current) {
    clearTimeout(closeTimeoutRef.current);
  }
  setIsHovered(true);
};
```

**Click Lock (1 second):**
```typescript
const handleItemClick = (item) => {
  // Navigate immediately
  router.push(item.path);
  
  // Keep panel open for 1 second
  setIsClickLocked(true);
  setTimeout(() => setIsClickLocked(false), 1000);
};
```

#### Mode B: Icon Animation Only

**Glow Pulse Effect:**
```tsx
<motion.div
  whileHover={{
    scale: 1.15,
    rotate: 5,
    filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))'
  }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="nav-item-icon"
>
  {icon}
</motion.div>
```

**Tooltip:**
```tsx
// Appears 500ms after hover
<Tooltip delayDuration={500}>
  <TooltipTrigger>{icon}</TooltipTrigger>
  <TooltipContent side="right" sideOffset={80}>
    <p>{label}</p>
    {hasUnread && <span className="text-orange-500">({unreadCount} new)</span>}
  </TooltipContent>
</Tooltip>
```

### 3. Smart Behaviors & Context Awareness

#### Unread Badge System

**Badge Visual:**
```css
.nav-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #f97316; /* orange-500 */
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.nav-badge[data-count="9+"] {
  padding: 2px 4px;
  font-size: 9px;
}
```

**Bounce Animation (when count increases):**
```css
@keyframes badge-bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.nav-badge.new {
  animation: badge-bounce 400ms ease-out;
}
```

**Badge Logic:**
```typescript
const useBadgeCounts = () => {
  const [counts, setCounts] = useState({
    strategy: 0,
    products: 0,
    achievements: 0
  });

  useEffect(() => {
    // Only calculate when navbar is hovered (lazy loading)
    if (!isHovered) return;

    const strategyCount = getUnreadDocsCount('/biz/strategy');
    const productsCount = getNewExperimentsCount();
    const achievementsCount = getUnlockableCount();

    setCounts({
      strategy: strategyCount,
      products: productsCount,
      achievements: achievementsCount
    });
  }, [isHovered]);

  return counts;
};
```

#### Recent Activity Indicator

**Visual:**
```css
.nav-recent-dot {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 6px;
  height: 6px;
  background: #fb923c; /* orange-400 */
  border-radius: 50%;
  opacity: 0;
  transition: opacity 500ms ease-out;
}

.nav-item.recent .nav-recent-dot {
  opacity: 1;
}
```

**Timing Logic:**
```typescript
const isRecent = (lastVisited: Date) => {
  const twoHoursAgo = Date.now() - (2 * 60 * 60 * 1000);
  return lastVisited.getTime() > twoHoursAgo;
};
```

#### Context-Aware Highlighting

**Smart Active State:**
```typescript
const useActiveNavItem = () => {
  const pathname = usePathname();
  
  // Direct match
  if (pathname === '/biz/strategy') return 'strategy';
  if (pathname === '/products') return 'products';
  if (pathname === '/financial') return 'financial';
  
  // Sub-route highlighting
  if (pathname.startsWith('/biz/strategy/')) return 'strategy';
  if (pathname.startsWith('/products/')) return 'products';
  
  return null;
};
```

### 4. Micro-Interactions & Animations

#### Icon Animations (Framer Motion)

**On Click:**
```tsx
<motion.div
  whileTap={{ scale: 0.9 }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
  className="nav-item"
>
  {icon}
</motion.div>
```

**On Hover (Mode B):**
```tsx
<motion.div
  whileHover={{
    scale: 1.15,
    rotate: 5,
    filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))'
  }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="nav-item-icon"
>
  {icon}
</motion.div>
```

#### Panel Slide Animation (Mode A)

```tsx
<motion.div
  initial={{ width: 60 }}
  animate={{ width: isHovered ? 220 : 60 }}
  transition={{
    type: 'spring',
    stiffness: 260,
    damping: 20
  }}
  className="navbar-island"
>
  {/* Nav items */}
</motion.div>
```

#### Item Stagger Effect

**When expanding, items fade in with stagger:**
```tsx
<motion.div
  variants={{
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05 // 50ms stagger between items
      }
    }),
    hidden: {
      opacity: 0,
      x: -10
    }
  }}
  initial="hidden"
  animate={isHovered ? "visible" : "hidden"}
  custom={index}
>
  {navItems.map((item, i) => (
    <NavItem key={item.id} {...item} />
  ))}
</motion.div>
```

### 5. Keyboard Navigation & Accessibility

#### Keyboard Shortcuts

**Global Shortcuts:**
```typescript
// File: hooks/useKeyboardShortcuts.ts

export const useGlobalNavShortcuts = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modifier = isMac ? e.metaKey : e.ctrlKey;

      if (!modifier) return;

      switch(e.key) {
        case '1':
          e.preventDefault();
          router.push('/biz/strategy');
          break;
        case '2':
          e.preventDefault();
          router.push('/products');
          break;
        case '3':
          e.preventDefault();
          router.push('/financial');
          break;
        case 'k':
          e.preventDefault();
          // Open command palette (future feature)
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);
};
```

**Navbar Focus Navigation:**
```typescript
const handleKeyDown = (e: KeyboardEvent) => {
  const items = navItemsRef.current;
  let newIndex = focusedIndex;

  switch(e.key) {
    case 'Tab':
      // Let browser handle
      break;
    case 'ArrowDown':
      e.preventDefault();
      newIndex = (focusedIndex + 1) % items.length;
      break;
    case 'ArrowUp':
      e.preventDefault();
      newIndex = (focusedIndex - 1 + items.length) % items.length;
      break;
    case 'Enter':
    case ' ':
      e.preventDefault();
      items[focusedIndex]?.click();
      break;
    case 'Escape':
      setIsHovered(false); // Close expanded panel
      break;
  }

  setFocusedIndex(newIndex);
  items[newIndex]?.focus();
};
```

#### ARIA Labels

**Navigation Container:**
```tsx
<nav
  role="navigation"
  aria-label="Main navigation"
  className="navbar-island"
>
  {navItems.map(item => (
    <button
      key={item.id}
      role="button"
      aria-label={`Navigate to ${item.label} section`}
      aria-current={isActive ? "page" : undefined}
      aria-describedby={hasUnread ? `${item.id}-badge` : undefined}
      className="nav-item"
    >
      {item.icon}
      <span className="nav-item-label">{item.label}</span>
      {hasUnread && (
        <span
          id={`${item.id}-badge`}
          className="nav-badge"
          aria-label={`${unreadCount} unread items`}
        >
          {unreadCount}
        </span>
      )}
    </button>
  ))}
</nav>
```

#### Screen Reader Support

**Announcements:**
```typescript
const announce = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => document.body.removeChild(announcement), 1000);
};

// Usage:
onNavigate((item) => {
  announce(`Navigating to ${item.label}`);
  if (item.unreadCount > 0) {
    announce(`${item.label}, ${item.unreadCount} unread documents`);
  }
});

onExpand(() => announce('Navigation expanded'));
onCollapse(() => announce('Navigation collapsed'));
```

### 6. Advanced Features

#### Quick Actions (Right-Click Context Menu)

```tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

<ContextMenu>
  <ContextMenuTrigger>
    <NavItem {...item} />
  </ContextMenuTrigger>
  <ContextMenuContent className="w-48">
    <ContextMenuItem onClick={() => pinToTop(item)}>
      📍 Pin to Top
    </ContextMenuItem>
    <ContextMenuItem onClick={() => watchForUpdates(item)}>
      🔔 Watch for Updates
    </ContextMenuItem>
    <ContextMenuItem onClick={() => viewAnalytics(item)}>
      📊 View Analytics
    </ContextMenuItem>
    <ContextMenuItem onClick={() => openSettings(item)}>
      ⚙️ Section Settings
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

#### Drag-to-Reorder (Admin Only)

```tsx
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';

function DraggableNavbar({ isAdmin }) {
  const [items, setItems] = useState(navItems);
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
        delay: 500, // 500ms hold to enter drag mode
        tolerance: 5,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(i => i.id === active.id);
        const newIndex = items.findIndex(i => i.id === over.id);
        
        const newOrder = arrayMove(items, oldIndex, newIndex);
        
        // Save to user preferences
        saveNavbarOrder(newOrder.map(i => i.id));
        
        return newOrder;
      });
    }
  };

  if (!isAdmin) {
    return <StaticNavbar items={items} />;
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableNavItem key={item.id} item={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
}

function SortableNavItem({ item }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1, // Visual feedback
    boxShadow: isDragging ? '0 8px 32px rgba(0, 0, 0, 0.3)' : 'none',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <NavItem {...item} />
    </div>
  );
}
```

#### Search Integration

**Navbar Search Bar (Top of Expanded Panel):**
```tsx
<div className="navbar-island">
  {/* Search Bar (only visible when expanded) */}
  {isExpanded && (
    <div className="px-4 py-3 border-b border-slate-700">
      <input
        type="text"
        placeholder="🔍 Search sections..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === '/') {
            e.preventDefault();
            e.currentTarget.focus();
          }
        }}
        className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm"
      />
    </div>
  )}

  {/* Filtered Nav Items */}
  {filteredItems.map(item => (
    <NavItem key={item.id} {...item} />
  ))}
</div>
```

**Fuzzy Matching:**
```typescript
import Fuse from 'fuse.js';

const fuse = new Fuse(navItems, {
  keys: ['label', 'keywords'],
  threshold: 0.3,
});

const filteredItems = searchQuery
  ? fuse.search(searchQuery).map(result => result.item)
  : navItems;
```

### 7. Performance Optimizations

#### Animation Performance

**GPU-Accelerated Transforms:**
```tsx
<motion.div
  style={{
    transform: 'translateX(0) scale(1)', // Uses GPU
    opacity: 1,                           // Uses GPU
    willChange: 'transform, opacity',     // Browser hint
  }}
  // Avoid:
  // width, height, margin (triggers layout recalculation)
/>
```

#### Lazy Badge Counting

```typescript
const badgeCount = useMemo(() => {
  // Only calculate when navbar is hovered
  if (!isHovered) return cachedCount;
  
  // Expensive calculation
  const count = calculateUnreadDocs();
  setCachedCount(count);
  return count;
}, [isHovered, lastUpdated]);
```

#### Virtualization (for 10+ items)

```tsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualizedNavbar({ items }) {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 44, // Item height
  });

  return (
    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
      <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map(virtualRow => (
          <div
            key={virtualRow.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <NavItem {...items[virtualRow.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 8. Customization Options (User Settings)

**Navbar Preferences Panel UI:**
```tsx
<div className="settings-panel">
  <h2 className="text-xl font-bold mb-4">⚙️ Navbar Settings</h2>

  {/* Appearance */}
  <section>
    <h3 className="text-lg font-semibold mb-2">🎨 Appearance</h3>
    
    <label>
      Expansion Mode:
      <select value={expansionMode} onChange={(e) => setExpansionMode(e.target.value)}>
        <option value="full-panel">Full Panel</option>
        <option value="icon-only">Icon Only</option>
      </select>
    </label>

    <label>
      Position:
      <select value={position} onChange={(e) => setPosition(e.target.value)}>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
    </label>

    <label>
      Theme:
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="auto">Auto</option>
      </select>
    </label>
  </section>

  {/* Behavior */}
  <section>
    <h3 className="text-lg font-semibold mb-2">🎭 Behavior</h3>

    <label>
      Auto-collapse delay:
      <input
        type="range"
        min="300"
        max="1000"
        step="100"
        value={collapseDelay}
        onChange={(e) => setCollapseDelay(Number(e.target.value))}
      />
      <span>{collapseDelay}ms</span>
    </label>

    <label>
      <input
        type="checkbox"
        checked={showBadges}
        onChange={(e) => setShowBadges(e.target.checked)}
      />
      Show badges
    </label>

    <label>
      <input
        type="checkbox"
        checked={showRecentIndicators}
        onChange={(e) => setShowRecentIndicators(e.target.checked)}
      />
      Show recent indicators
    </label>
  </section>

  {/* Shortcuts */}
  <section>
    <h3 className="text-lg font-semibold mb-2">⌨️ Shortcuts</h3>
    <button onClick={() => openShortcutEditor()}>
      Customize keyboard shortcuts
    </button>
  </section>
</div>
```

**Settings Persistence:**
```typescript
const useNavbarSettings = () => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('navbar-settings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem('navbar-settings', JSON.stringify(settings));
  }, [settings]);

  return [settings, setSettings];
};
```

### 9. Visual Polish Details

#### Glassmorphism Effect

```css
.navbar-island {
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%); /* Safari */
  
  /* Fallback for browsers without backdrop-filter */
  @supports not (backdrop-filter: blur(16px)) {
    background: rgba(15, 23, 42, 0.95);
  }
}
```

#### Gradient Hover Overlay

```css
.nav-item:hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(251, 146, 60, 0.15),
    rgba(249, 115, 22, 0.05)
  );
  border-radius: 8px;
  pointer-events: none;
  z-index: -1;
}
```

#### Active State Indicator

```css
.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: linear-gradient(
    to bottom,
    #fb923c,    /* orange-400 */
    #f97316     /* orange-500 */
  );
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 8px rgba(249, 115, 22, 0.5);
}
```

### 10. Implementation Checklist

**Day 1:**
- [ ] Base navbar component structure
- [ ] Two expansion modes (Full Panel / Icon Only)
- [ ] Glassmorphism styling
- [ ] State animations (idle/hover/active/focus)

**Day 2:**
- [ ] Badge system with real-time counts
- [ ] Recent activity indicators
- [ ] Context-aware highlighting
- [ ] Framer Motion micro-interactions

**Day 3:**
- [ ] Keyboard navigation (Tab, Arrow keys)
- [ ] Global shortcuts (Cmd+1/2/3, Cmd+K)
- [ ] ARIA labels and screen reader support
- [ ] Right-click context menu
- [ ] User preferences panel
- [ ] Performance optimizations (GPU transforms, lazy loading)

**Final Polish:**
- [ ] Responsive behavior (mobile: full-width bottom bar)
- [ ] Dark/Light mode support
- [ ] Drag-to-reorder (admin only)
- [ ] Search integration
- [ ] Comprehensive testing (keyboard-only, screen reader, performance)

**Estimated Effort:** 3 days for full implementation with polish

---

## Design Tokens Reference

### Color Palette

```css
:root {
  /* Primary Colors */
  --color-orange-400: #fb923c;
  --color-orange-500: #f97316;
  
  /* Neutral Grays */
  --color-slate-100: #f1f5f9;
  --color-slate-200: #e2e8f0;
  --color-slate-300: #cbd5e1;
  --color-slate-400: #94a3b8;
  --color-slate-600: #475569;
  --color-slate-700: #334155;
  --color-slate-800: #1e293b;
  --color-slate-900: #0f172a;
  
  /* Graph Specific */
  --graph-strategy: #3b82f6;   /* blue-500 */
  --graph-product: #f97316;    /* orange-500 */
  --graph-financial: #10b981;  /* green-500 */
  --graph-active: #fbbf24;     /* amber-400 */
}
```

### Typography Scale

```css
:root {
  /* Font Family */
  --font-primary: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Font Sizes */
  --text-xs: 11px;
  --text-sm: 12px;
  --text-base: 14px;
  --text-lg: 16px;
  --text-xl: 18px;
  --text-2xl: 20px;
  
  /* Font Weights */
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
}
```

### Spacing System

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
}
```

### Border Radius

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-full: 9999px;
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.2);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
  
  /* Glow Effects */
  --glow-orange: 0 0 12px rgba(249, 115, 22, 0.4);
  --glow-orange-strong: 0 0 20px rgba(249, 115, 22, 0.6);
}
```

### Animation Timings

```css
:root {
  /* Durations */
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;
  
  /* Easings */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Spring Physics (Framer Motion) */
  --spring-stiff: 300;
  --spring-damping: 20;
}
```

---

## Performance Specifications

### Bundle Size Targets

| Feature | Bundle Impact | Status |
| :--- | :--- | :--- |
| Knowledge Graph (V2) | +50KB | ✅ Acceptable |
| View Modes (V3) | +30KB | ✅ Acceptable |
| Floating Panels (V4) | +40KB | ⚠️ Monitor |
| Premium Navbar (V5) | +20KB | ✅ Acceptable |
| **Total** | **+140KB** | **🟡 Manageable** |

### Runtime Performance Targets

| Metric | Target | Critical Threshold |
| :--- | :--- | :--- |
| Graph Rendering (200 nodes) | 60 FPS | 30 FPS |
| Panel Animations | 60 FPS | 45 FPS |
| Navbar Expansion | < 16ms | < 33ms |
| Search Filter | < 50ms | < 100ms |
| Badge Calculation | < 100ms | < 200ms |

### Loading Performance

| Metric | Target | Critical Threshold |
| :--- | :--- | :--- |
| Graph Data Load | < 500ms | < 1000ms |
| Initial Render | < 200ms | < 400ms |
| Route Transition | < 300ms | < 600ms |

### Optimization Strategies

1. **Code Splitting:**
   ```typescript
   // Lazy load graph on /biz/graph route
   const GraphView = dynamic(() => import('@/components/graph/GraphView'), {
     loading: () => <GraphSkeleton />,
     ssr: false
   });
   ```

2. **GPU Transforms:**
   ```css
   /* Use only transform and opacity (GPU-accelerated) */
   .animated {
     transform: translateX(0) scale(1);
     opacity: 1;
     will-change: transform, opacity;
   }
   /* Avoid: width, height, top, left (triggers layout) */
   ```

3. **Memoization:**
   ```typescript
   const filteredNodes = useMemo(() => {
     return nodes.filter(n => n.name.includes(searchQuery));
   }, [nodes, searchQuery]);
   ```

4. **Virtualization:**
   ```typescript
   // For 500+ nodes or 10+ navbar items
   import { useVirtualizer } from '@tanstack/react-virtual';
   ```

---

## Dependencies Summary

```bash
# V2: Knowledge Graph
npm install react-force-graph-2d

# V3: View Modes
npm install react-resizable-panels
npm install framer-motion
npm install react-draggable

# V4: Floating Panels
# (Uses V3 dependencies)

# V5: Premium Navbar
# (Uses framer-motion from V3)
npm install @dnd-kit/core @dnd-kit/sortable  # For drag-to-reorder
npm install fuse.js                           # For fuzzy search
```

**Total New Dependencies:** 6 packages  
**Combined Gzipped Size:** ~140KB

---

## Cross-Feature Integration

### Navbar + Graph

**When on `/biz/graph`, show active graph indicator:**
```tsx
<NavItem
  label="Biz Lab"
  icon={<MapIcon />}
  isActive={pathname === '/biz/graph'}
  badge={unreadDocsCount}
/>
```

### Graph + Floating Panels (V4)

**Navbar hides when note panel is on left:**
```tsx
const shouldHideNavbar = notePanelPosition === 'left';

<DynamicNavbar isHidden={shouldHideNavbar} />
```

### Graph View Modes + Premium Navbar

**Keyboard shortcuts consistent across features:**
- `Cmd+1/2/3`: Nav sections
- `Cmd+4/5/6`: Graph view modes
- `Cmd+K`: Global search/command palette

---

## Testing Checklist

### Unit Tests
- [ ] Badge count calculation accuracy
- [ ] Search filter correctness
- [ ] Keyboard navigation state management
- [ ] localStorage persistence

### Integration Tests
- [ ] Graph node click → Navigation
- [ ] View mode switching preserves state
- [ ] Navbar expansion/collapse animations
- [ ] Context menu actions

### Accessibility Tests
- [ ] Screen reader announcements
- [ ] Keyboard-only navigation
- [ ] WCAG AA contrast compliance
- [ ] Focus indicators visible

### Performance Tests
- [ ] 60 FPS with 200 graph nodes
- [ ] Navbar animations < 16ms
- [ ] Search latency < 50ms
- [ ] Bundle size within budget

### Cross-Browser Tests
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

---

**Document Version:** 1.0  
**Last Updated:** 2026-01-10  
**Status:** Comprehensive Reference (V2-V5 Unified)
