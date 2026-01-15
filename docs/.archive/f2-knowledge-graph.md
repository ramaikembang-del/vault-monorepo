# F2: Knowledge Graph Specification
**Status:** ✅ COMPLETED (Sprint 1)  
**Feature:** Obsidian-Style Interactive Document Visualization

---

## Overview
Interactive, Obsidian-style knowledge graph for Biz Lab that visualizes document relationships and enables intuitive navigation through strategy docs.

---

## User Experience

### Visual Design

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

### Interactions

- **Hover Node:** Preview card (title, read time, key topics)
- **Click Node:** Navigate to document
- **Drag Node:** Reposition (physics adjusts automatically)
- **Zoom/Pan:** Mouse wheel + drag
- **Search:** Filter nodes, highlight matches
- **Cluster Toggle:** Group by directory

---

## Technical Implementation

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

### Data Interfaces

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

### Main Component

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

### Data Pipeline

**Step 1: Build Graph Data (Build Time)**

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

---

## Integration

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

## Performance Targets

- **Initial Load:** < 500ms
- **Rendering:** 60 FPS with 200 nodes
- **Bundle Size:** < 100KB added to route

---

**Last Updated:** January 15, 2026  
**See Also:** `vault-feature-roadmap.md`, `design-philosophy.md`
