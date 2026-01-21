# F13-F15: Future Features Specification

**Status:** 📋 PLANNED (Post-Sprint 2)  
**Timeline:** Sprint 3+

---

## Overview

Specifications for future feature enhancements to be prioritized based on Sprint 2 outcomes and user feedback.

**Decision Criteria:** See `../roadmap/upcoming-work.md` for prioritization framework

---

## F13: Enhanced Visualization

**Priority:** TBD  
**Dependencies:** F2 Knowledge Graph stable  
**Estimated Effort:** 6-8 hours

### Features

#### 3D Knowledge Graph (WebGL)
**Purpose:** Handle large datasets (>500 nodes) with better performance

**Technology:**
- `react-force-graph-3d` or `three.js`
- WebGL-based rendering
- Camera controls (orbit, zoom, pan)

**Implementation:**
```bash
npm install react-force-graph-3d three
```

**Benefits:**
- Support 1000+ nodes
- Better spatial relationship visualization
- Z-axis for document hierarchy

**Challenges:**
- Higher bundle size (~200KB)
- Steeper learning curve
- Mobile performance concerns

---

#### Timeline View
**Purpose:** Chronological document browser

**Features:**
- Horizontal timeline with document markers
- Filter by date range
- Group by sprint/phase
- Click to view document

**Visual Design:**
```
┌──────────────────────────────────────────────────────┐
│ Timeline View - Strategy Documents                   │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Jan 2026                   Feb 2026       Mar 2026  │
│ ────●────●─────────●────────●──────────────●────    │
│     │    │         │        │              │        │
│   Sprint Sprint  Launch   Review        Sprint      │
│     0     1       Day      Call          2         │
│                                                      │
│ Filter: [All ▼] [Strategy ✓] [Products] [Financial]│
└──────────────────────────────────────────────────────┘
```

**Technology:**
- Recharts timeline component
- Framer Motion for animations
- Date filtering with date-fns

---

#### Heatmap Analytics
**Purpose:** Show most-read sections of documents

**Features:**
- Color intensity based on read count
- Hover to see exact statistics
- Time-based filters (week, month, all-time)
- Export analytics data

**Data Model:**
```typescript
interface DocumentAnalytics {
  docId: string;
  sections: {
    [sectionId: string]: {
      readCount: number;
      avgTimeSpent: number; // seconds
      lastRead: Date;
    };
  };
}
```

**Visualization:**
```
Document Heatmap - GTM Strategy

Section 1: Overview        ████████░░ 80% (12 reads)
Section 2: Pre-Sale        ██████████ 100% (15 reads)
Section 3: Launch Plan     ████░░░░░░ 40% (6 reads)
Section 4: Marketing       ██████░░░░ 60% (9 reads)
```

---

## F14: Collaboration Features

**Priority:** TBD  
**Dependencies:** Multi-user adoption  
**Estimated Effort:** 10-12 hours

### Features

#### Comments & Annotations
**Purpose:** Inline document feedback

**Features:**
- Highlight text and add comments
- Thread replies
- Resolve/unresolve comments
- @ mentions
- Email notifications

**Technology:**
- Database: Postgres (comment storage)
- Real-time: Supabase or Pusher
- UI: Shadcn Popover + Comment component

**Schema:**
```sql
CREATE TABLE comments (
  id UUID PRIMARY KEY,
  doc_id TEXT NOT NULL,
  section_id TEXT NOT NULL,
  author_id TEXT NOT NULL,
  content TEXT NOT NULL,
  parent_comment_id UUID,  -- for threading
  resolved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

#### Shared Workspaces
**Purpose:** Team collaboration zones

**Features:**
- Create workspace for specific topic/sprint
- Invite team members
- Shared document collections
- Workspace-specific chat
- Activity feed

**Access Control:**
- Workspace owner
- Workspace members (read/write)
- Workspace viewers (read-only)

---

#### Version History
**Purpose:** Track document changes over time

**Features:**
- Git-based versioning
- Diff view (side-by-side or inline)
- Restore previous versions
- Blame view (who changed what)
- Change notifications

**Technology:**
- Leverage existing Git repo
- `libgit2` or `isomorphic-git` for client-side operations
- Diff UI library: `react-diff-viewer`

---

## F15: AI Integration

**Priority:** TBD  
**Dependencies:** Sufficient data corpus (100+ docs)  
**Estimated Effort:** 15-20 hours

### Features

#### Smart Summaries
**Purpose:** Auto-generate document summaries

**Features:**
- TL;DR at top of doc
- Section summaries
- Key takeaways extraction
- Generate on-demand or pre-cache

**Technology:**
- OpenAI API (GPT-4)
- Prompt engineering for strategy docs
- Caching to reduce API costs

**Prompt Template:**
```
Summarize this business strategy document in 3-5 bullet points.
Focus on:
- Key decisions made
- Action items
- Timeline
- Success metrics

Document:
{docContent}
```

---

#### Intelligent Tagging
**Purpose:** ML-based topic detection

**Features:**
- Auto-tag documents with topics
- Suggest related documents
- Topic clustering
- Tag refinement over time

**Technology:**
- OpenAI Embeddings API
- Vector similarity search (Pinecone or local)
- Tag taxonomy management

**Flow:**
1. Generate embeddings for all docs
2. Cluster by similarity
3. Extract common themes as tags
4. User reviews/approves tags
5. Apply to documents

---

#### Predictive Search
**Purpose:** Anticipate user search needs

**Features:**
- Auto-complete with AI suggestions
- "People also searched for..."
- Context-aware results
- Question answering ("What's the launch date?")

**Technology:**
- Semantic search (not just keyword matching)
- Query understanding (intent detection)
- Answer extraction from documents

---

## Implementation Priority

### Decision Framework

**Tier 1: Implement First**
- Features with clear user pain points
- High value, low effort
- Dependencies satisfied

**Tier 2: Implement Later**
- Nice-to-have features
- Higher complexity
- Uncertain ROI

**Tier 3: Research Needed**
- Experimental features
- Requires user validation
- Technical unknowns

### Current Assessment

| Feature | User Pain | Effort | Dependencies | Tier |
|---------|-----------|--------|--------------|------|
| F13: 3D Graph | Low | High | None | 3 |
| F13: Timeline | Medium | Low | None | 2 |
| F13: Heatmap | Medium | Medium | Analytics tracking | 2 |
| F14: Comments | High | Medium | Database | 1 |
| F14: Workspaces | Low | High | Multi-user | 3 |
| F14: Version History | Medium | Low | Git integration | 2 |
| F15: Summaries | High | Low | OpenAI API | 1 |
| F15: Tagging | Medium | High | Embeddings | 2 |
| F15: Predictive Search | Low | High | Semantic search | 3 |

---

## F16-F18: Navigation & Settings (Sprint 3+)

**Priority:** High  
**Dependencies:** Core platform stable  
**Estimated Effort:** 12-15 hours

### F16: Global Navigation

**Purpose:** Unified navigation and command system

**Key Features:**
- **Command Palette (⌘K):** Global search + quick actions
- **Menu Configuration:** Customizable tab order, pinned pages
- **Keyboard Shortcuts:** Manager with conflict detection

**Technology:**
- CMDK library (already used for search)
- React Hotkeys Hook
- Zustand for state persistence

**See:** `../prds/12-global-navigation-prd.md` for complete spec

---

### F17: Studio Tuner

**Purpose:** Visual customization laboratory

**Key Features:**
- **Theme Studio:** Color picker, dark/light variants, font selection
- **Layout Presets:** Save/load panel positions (F4/F5 integration)
- **Animation Controls:** Speed multiplier, reduced motion mode
- **Accessibility:** High contrast, focus indicators, color blindness filters

**See:** `../prds/13-studio-tuner-prd.md` for complete spec

---

### F18: App Settings

**Purpose:** Per-app behavior configuration

**Key Features:**
- **Products Lab:** Experiment templates, auto-save, workbench layout
- **Biz Lab:** Graph defaults, reading mode, sidebar preferences
- **Dashboard:** Widget order, chart styles, notifications

**Technology:**
- Zustand with localStorage persistence
- Shadcn form components
- Import/export configurations

**See:** `../prds/14-app-settings-prd.md` for complete spec

---

## Implementation Priority (Updated)

### Current Assessment

| Feature | User Pain | Effort | Dependencies | Tier |
|---------|-----------|--------|--------------|------|
| F13: 3D Graph | Low | High | None | 3 |
| F13: Timeline | Medium | Low | None | 2 |
| F13: Heatmap | Medium | Medium | Analytics tracking | 2 |
| F14: Comments | High | Medium | Database | 1 |
| F14: Workspaces | Low | High | Multi-user | 3 |
| F14: Version History | Medium | Low | Git integration | 2 |
| F15: Summaries | High | Low | OpenAI API | 1 |
| F15: Tagging | Medium | High | Embeddings | 2 |
| F15: Predictive Search | Low | High | Semantic search | 3 |
| **F16: Global Navigation** | **High** | **Medium** | **None** | **1** |
| **F17: Studio Tuner** | **Medium** | **Medium** | **None** | **2** |
| **F18: App Settings** | **Medium** | **Low** | **None** | **2** |

**Note:** Built-in Settings replace original Admin Panel (Team management handled exclusively via Clerk Dashboard)

---

## Cost Analysis

### F13: Enhanced Visualization
- **3D Graph:** +200KB bundle, no API costs
- **Timeline:** +50KB bundle, no API costs
- **Heatmap:** +30KB bundle, analytics DB costs

### F14: Collaboration
- **Comments:** Database hosting ($20/month)
- **Workspaces:** Same DB, negligible cost
- **Version History:** Git storage (free)

### F15: AI Integration
- **Summaries:** $0.03 per 1K tokens (~$3/month for 100 docs)
- **Tagging:** $0.0001 per embedding (~$1 one-time for 100 docs)
- **Predictive Search:** $0.03 per search query (~$10/month)

**Total Estimated:** $35-50/month for all AI features

### F16-F18: Navigation & Settings
- **Global Navigation:** No additional costs (CMDK already in bundle)
- **Studio Tuner:** No additional costs (CSS-in-JS, localStorage)
- **App Settings:** No additional costs (Zustand + localStorage)

**Total Estimated:** $0/month - All client-side features

---

## Success Metrics

### F13: Enhanced Visualization
- Graph handles 1000+ nodes at 60 FPS
- Timeline reduces nav time by 30%
- Heatmap drives 20% increase in overlooked docs

### F14: Collaboration
- 50% of docs have at least 1 comment
- Average resolution time < 2 days
- Version history used 5+ times/week

### F15: AI Integration
- Summaries save 5 min/doc reading time
- Auto-tags achieve 80% accuracy
- Predictive search improves relevance by 40%

### F16: Global Navigation
- Command Palette used 10+ times/day per user
- Average task completion 50% faster
- Keyboard shortcuts reduce mouse usage by 30%

### F17: Studio Tuner
- 80%+ users customize at least 1 theme setting
- Layout presets save 5+ minutes per session switch
- Accessibility features used by 20%+ of users

### F18: App Settings
- Settings import/export used 5+ times/week
- Workflow Profiles save 10+ minutes/day
- Settings sync reduces configuration time by 70%

---

**Last Updated:** January 20, 2026
**See Also:** `upcoming-work.md`, `../specifications/global-navigation-system.md`, `../specifications/studio-tuner-system.md`, `../specifications/app-settings-system.md`
