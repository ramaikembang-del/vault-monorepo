# Content & Navigation System Specification

**Purpose:** Complete specification for content rendering, discovery, and navigation in Biz Lab  
**Status:** ✅ IMPLEMENTED (Sprint 1)  
**Components:** MDX Rendering, Knowledge Graph (F2), View Modes (F3), Search & Filtering

---

# Part I: MDX Rendering System

## 1. Overview

Technical specification for Biz Lab's custom MDX rendering system, replacing the originally planned Nextra 3.0 implementation.

**Decision Rationale:**
- Greater design control
- Unified Vault design system
- Simplified build process
- Better TypeScript integration

---

## 2. Technology Stack

### Core Dependencies

```bash
npm install next-mdx-remote
npm install gray-matter
npm install remark-gfm
npm install rehype-slug
npm install rehype-autolink-headings
```

**Purpose:**
- `next-mdx-remote`: Server-side MDX rendering
- `gray-matter`: Frontmatter parsing
- `remark-gfm`: GitHub Flavored Markdown support
- `rehype-slug`: Heading IDs for anchor links
- `rehype-autolink-headings`: Automatic heading links

---

## 3. Content Loading Pipeline

### 3.1 Directory Structure

```
content/biz/
├── strategy/
│   ├── market-analysis/
│   │   ├── 01-market-research.md
│   │   └── 02-cultural-context.md
│   └── planning/
│       └── product-portfolio-map.md
├── products/
└── financial/
```

### 3.2 Document Loader

**File:** `apps/vault/lib/docs.ts`

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'content/biz');

export interface DocMetadata {
  title: string;
  readTime?: number;
  status?: 'draft' | 'reviewed' | 'final';
  criticalFor?: string[];
  relatedDocs?: string[];
  keyTakeaways?: string[];
  whyItMatters?: string;
}

export interface Doc {
  slug: string[];
  metadata: DocMetadata;
  content: string;
}

export async function getDocBySlug(slug: string[]): Promise<Doc> {
  const filePath = path.join(docsDirectory, ...slug) + '.md';
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data as DocMetadata,
    content
  };
}

export function getAllDocSlugs(): string[][] {
  const slugs: string[][] = [];

  function traverse(dir: string, currentPath: string[] = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    entries.forEach(entry => {
      if (entry.isDirectory()) {
        traverse(path.join(dir, entry.name), [...currentPath, entry.name]);
      } else if (entry.name.endsWith('.md')) {
        const slug = [...currentPath, entry.name.replace(/\.md$/, '')];
        slugs.push(slug);
      }
    });
  }

  traverse(docsDirectory);
  return slugs;
}
```

---

## 4. MDX Rendering

### 4.1 Page Component

**File:** `apps/vault/app/biz/[...slug]/page.tsx`

```tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getDocBySlug, getAllDocSlugs } from '@/lib/docs';
import { DocsLayout } from '@/components/docs-layout';

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function DocPage({ params }: { params: { slug: string[] } }) {
  const doc = await getDocBySlug(params.slug);

  return (
    <DocsLayout metadata={doc.metadata}>
      <article className="prose prose-slate max-w-none">
        <h1>{doc.metadata.title}</h1>
        <MDXRemote source={doc.content} />
      </article>
    </DocsLayout>
  );
}
```

### 4.2 Layout Component

**File:** `apps/vault/components/docs-layout.tsx`

```tsx
import { Sidebar } from '@/components/ui/sidebar';
import { DocMetadata } from '@/lib/docs';

export function DocsLayout({ 
  metadata, 
  children 
}: { 
  metadata: DocMetadata; 
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar className="w-64 border-r" />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
```

---

## 5. Navigation Generation

### Sidebar Tree Builder

```typescript
// lib/build-nav-tree.ts

export interface NavNode {
  label: string;
  slug?: string[];
  children?: NavNode[];
}

export function buildNavTree(): NavNode[] {
  const slugs = getAllDocSlugs();
  const tree: NavNode[] = [];

  slugs.forEach(slug => {
    let current = tree;
    
    slug.forEach((segment, index) => {
      let node = current.find(n => n.label === formatLabel(segment));
      
      if (!node) {
        node = {
          label: formatLabel(segment),
          slug: index === slug.length - 1 ? slug : undefined,
          children: []
        };
        current.push(node);
      }
      
      current = node.children!;
    });
  });

  return tree;
}

function formatLabel(segment: string): string {
  return segment
    .replace(/^\d+-/, '') // Remove number prefix
    .replace(/-/g, ' ')   // Replace dashes with spaces
    .replace(/\b\w/g, c => c.toUpperCase()); // Title case
}
```

---

## 6. Frontmatter Schema

### Required Fields

```yaml
---
title: "Go-to-Market Strategy"
---
```

### Optional Fields

```yaml
---
title: "Go-to-Market Strategy"
readTime: 15                          # Minutes
status: "reviewed"                    # draft | reviewed | final
criticalFor: ["week-0", "launch"]     # Tags
relatedDocs:
  - "sales/01-sales-playbook.md"
  - "marketing/01-one-pager.md"
keyTakeaways:
  - "Pre-sale validation before building"
  - "3+ verbal commits target"
whyItMatters: |
  This GTM strategy is the execution playbook for Sprint 1.
  Without understanding this, you won't know what we're doing
  in Week 0 vs Week 5.
---
```

---

## 7. Styling

### Typography (Prose)

```tsx
// Uses Tailwind Typography plugin
<article className="prose prose-slate max-w-none dark:prose-invert">
  <MDXRemote source={content} />
</article>
```

### Custom Styles

```css
/* globals.css */
.prose {
  --tw-prose-body: theme('colors.slate.100');
  --tw-prose-headings: theme('colors.slate.50');
  --tw-prose-links: theme('colors.orange.500');
  --tw-prose-code: theme('colors.amber.400');
}
```

---

## 8. MDX Performance

### Build-Time Optimization

- **Static Generation:** All docs pre-rendered at build time
- **Incremental Static Regeneration:** Not needed (docs rarely change)
- **Bundle Size:** ~50KB for MDX runtime

### Runtime Performance

- **Time to Interactive:** < 1s (static HTML)
- **Markdown Parsing:** 0ms (done at build time)
- **Navigation:** Client-side routing (instant)

---

# Part II: Knowledge Graph (F2)

## 9. Overview

Interactive, Obsidian-style knowledge graph for Biz Lab that visualizes document relationships and enables intuitive navigation through strategy docs.

**Status:** ✅ COMPLETED (Sprint 1)  
**Feature:** Obsidian-Style Interactive Document Visualization

---

## 10. Visual Design

### Graph Type

**2D Force-Directed Graph:**
- Nodes represent documents
- Edges represent references/backlinks

### Color Coding System

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

### Size Variation Logic

```javascript
// Node size calculation
const nodeSize = (node) => {
  const connectionWeight = node.links.length * 2;  // More connections = larger
  const readStatus = node.unread ? 3 : 1;          // Unread = larger
  return Math.max(5, Math.min(25, connectionWeight + readStatus));
};
```

---

## 11. User Interactions

- **Hover Node:** Preview card (title, read time, key topics)
- **Click Node:** Navigate to document
- **Drag Node:** Reposition (physics adjusts automatically)
- **Zoom/Pan:** Mouse wheel + drag
- **Search:** Filter nodes, highlight matches
- **Cluster Toggle:** Group by directory

---

## 12. Technical Implementation

### Library: react-force-graph-2d

**Installation:**
```bash
npm install react-force-graph-2d
```

**Why react-force-graph-2d?**
- ✅ Lightweight: ~50KB gzipped
- ✅ Canvas-based (not WebGL)
- ✅ Obsidian-like force-directed layout
- ✅ React-first API
- ✅ Built-in zoom, pan, drag, hover
- ✅ Handles 100-500 nodes at 60 FPS

---

## 13. Data Interfaces

```typescript
// File: lib/types/graph.ts

interface GraphNode {
  id: string;           // File path (e.g., "strategy/gtm.md")
  name: string;         // Document title
  val: number;          // Node size (importance/connections)
  color: string;        // Category color
  group: string;        // Directory category
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

---

## 14. Main Component

```tsx
// File: components/knowledge-graph/GraphView.tsx

import { ForceGraph2D } from 'react-force-graph';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

export default function GraphView() {
  const graphData = useGraphData();
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
          // Custom rendering with glow effect
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

          // Label (only when zoomed in)
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

---

## 15. Data Pipeline

### Step 1: Build Graph Data (Build Time)

```typescript
// File: lib/build-graph.ts

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
    const id = path.relative(docsDir, file).replace(/\.md$/, '');
    const category = id.split('/')[0];

    // Create node
    nodes.push({
      id,
      name: frontmatter.title || path.basename(file, '.md'),
      val: 5,
      color: getCategoryColor(category),
      group: category,
      unread: false
    });

    // Extract links from frontmatter + markdown
    const frontmatterLinks = frontmatter.related || [];
    const markdownLinks = extractMarkdownLinks(body);
    const allLinks = [...frontmatterLinks, ...markdownLinks];
    
    if (allLinks.length > 0) {
      linkMap.set(id, new Set(allLinks));
    }
  });

  // Build links from linkMap
  linkMap.forEach((targets, source) => {
    targets.forEach(target => {
      links.push({ source, target, value: 1 });
    });
  });

  // Update node sizes based on connections
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
```

### Step 2: Generate Static JSON

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

---

## 16. Knowledge Graph Integration

**Route:** `/biz/graph`  
**Access:** "🗺️ Graph View" button in Biz Lab sidebar

```tsx
// In Biz Lab sidebar
<Link
  href="/biz/graph"
  className="flex items-center gap-2 px-4 py-2 hover:bg-slate-800 rounded-lg"
>
  🗺️ Graph View
</Link>
```

---

# Part III: View Modes & Floating Panels (F3)

## 17. Overview

F3 introduced advanced view modes for the knowledge graph. The original plan included split-view functionality, but we pivoted to a floating note panel approach for better UX and flexibility.

**Status:** ✅ COMPLETED (Sprint 1) / PIVOTED

---

## 18. View Modes Evolution

### Original Plan (Split-View)

#### Mode 1: Full-Window (Default)
Graph fills entire viewport.

#### Mode 2: Side-by-Side Split View
```
┌─────────────────────────────────────────────┐
│ Graph (60%)   │  Document Reader (40%)    │
│               │                             │
│   ⚫ Market    │  # GTM Strategy            │
│    ╱│╲       │  Sprint 1 focuses on...    │
│   ● ● ●      │                             │
│               │  [Read Full Doc]           │
└─────────────────────────────────────────────┘
```
- Resizable divider
- Click node → Document loads in right pane

#### Mode 3: Floating Note View (IMPLEMENTED ✅)
```
┌─────────────────────────────────────────────┐
│  Graph (dimmed background)                  │
│                              ┌─────────────┐│
│   ⚫ Market                  │ 📄 GTM Str │││
│    ╱│╲      ╱              │ ──────────│││
│   ● ● ●    ● (draggable   │ Sprint 1... │││
│             panel)          │             │││
│                              │ [Full 🔗]  │││
│                              └─────────────┘│
└─────────────────────────────────────────────┘
```

---

## 19. Implemented Features

### Floating Note Panel ✅
- **Draggable overlay** card
- Graph remains interactive (dimmed slightly)
- Preview with "Read Full" link
- Framer Motion animations
- React-draggable for positioning

---

## 20. Pivot Rationale

**Split-view deferred because:**
1. Floating panels provide more layout freedom
2. Graph visibility remains paramount
3. Notion-style UI is more modern
4. Less complex state management

**What survived:**
- Core toggle between graph-only and graph+notes
- Smooth transitions
- Document preview functionality

---

## 21. Technical Implementation

### Stack Used
```bash
npm install framer-motion
npm install react-draggable
```

### Component
```tsx
// components/graph/FloatingNote.tsx
import { motion } from 'framer-motion';
import Draggable from 'react-draggable';

export function FloatingNote({ docId, onClose }) {
  return (
    <Draggable>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="floating-note-panel"
      >
        {/* Document preview content */}
      </motion.div>
    </Draggable>
  );
}
```

---

## 22. Feature Status Matrix

| Feature | Planned | Implemented | Notes |
|---------|---------|-------------|-------|
| Full-window mode | ✅ | ✅ | Default view |
| Split-view | ✅ | ❌ | Deferred to future |
| Floating notes | ✅ | ✅ | Primary implementation |
| Drag & drop | ✅ | ✅ | Smooth animations |
| localStorage | ✅ | ✅ | Persists preferences |

---

## 23. Future Enhancements

**If split-view is needed later:**
- Use `react-resizable-panels`
- Implement 60/40 → 50/50 → 70/30 presets
- Keyboard shortcuts for layout switching

---

# Part IV: Search & Filtering

## 24. Search Implementation

### Integration with MDX Content

```typescript
// MDX content indexed for search
const searchIndex = buildSearchIndex(getAllDocSlugs());
```

### Integration with Knowledge Graph

**Graph Search:**
- Filter nodes based on query
- Highlight matching nodes
- Adjust link visibility

**See Also:** Global Vault Search in `00-vault-overview-prd.md` § 8

---

## 25. Cross-System Integration

### With Content Pipeline
- MDX documents automatically indexed
- Frontmatter metadata searchable
- Full-text content search

### With Knowledge Graph
- Graph data includes all docs
- Search filters graph nodes
- Results show document relationships

### With Navigation
- Search results link to docs
- Breadcrumb trail maintained
- History preserved

---

## 26. Performance Targets

### MDX System
- **Page Load:** < 1s (static HTML)
- **Build Time:** < 30s for 100 docs
- **Bundle Size:** ~50KB MDX runtime

### Knowledge Graph
- **Initial Load:** < 500ms
- **Rendering:** 60 FPS with 200 nodes
- **Bundle Size:** < 100KB added to route

### Combined System
- **Total Bundle:** < 150KB for graph + MDX
- **Time to Interactive:** < 1s
- **Search Response:** < 500ms

---

**Last Updated:** January 15, 2026  
**See Also:** 
- `interactive-ui.md` for F4/F5 specifications
- `design-foundation.md` for design tokens
- `10-biz-lab-prd.md` for product requirements
