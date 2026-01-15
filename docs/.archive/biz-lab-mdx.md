# Biz Lab MDX Implementation Specification

**Status:** ✅ IMPLEMENTED (Sprint 1)  
**Technology:** Custom MDX + Shadcn UI

---

## Overview

Technical specification for Biz Lab's custom MDX rendering system, replacing the originally planned Nextra 3.0 implementation.

**Decision:** Custom implementation chosen for greater design control and unified Vault design system.

---

## Technology Stack

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

## Content Loading Pipeline

### Step 1: Directory Structure

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

### Step 2: Document Loader

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

## MDX Rendering

### Page Component

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

---

## Layout Component

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

## Navigation Generation

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

## Frontmatter Schema

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

## Styling

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

## Performance

### Build-Time Optimization

- **Static Generation:** All docs pre-rendered at build time
- **Incremental Static Regeneration:** Not needed (docs rarely change)
- **Bundle Size:** ~50KB for MDX runtime

### Runtime Performance

- **Time to Interactive:** < 1s (static HTML)
- **Markdown Parsing:** 0ms (done at build time)
- **Navigation:** Client-side routing (instant)

---

## Integration Points

### With Knowledge Graph (F2)

```typescript
// Graph data includes all Biz Lab docs
const graphData = buildDocumentGraph('content/biz');
```

### With Search (Vault Global)

```typescript
// MDX content indexed for search
const searchIndex = buildSearchIndex(getAllDocSlugs());
```

---

## Migration Notes

### From Nextra 3.0 (Original Plan)

**Why we pivoted:**
1. Greater design control with custom layout
2. Unified Vault design system (Shadcn UI)
3. Simpler build process
4. Better TypeScript integration

**What we kept:**
- Auto-generated navigation from file structure
- Markdown frontmatter support
- Dark mode optimization

---

**Last Updated:** January 15, 2026  
**See Also:** `f2-knowledge-graph.md`, `design-tokens.md`
