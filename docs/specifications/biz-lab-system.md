# Biz Lab System Specification

**Purpose:** Strategic Intelligence Workspace - Technical implementation for business strategy management
**Status:** ✅ IMPLEMENTED (Sprint 1 - Core), 📋 PLANNED (Sprint 2+ - Advanced Features)
**Scope:** Strategy Desk, Decision Governance, Strategic Brain, Cross-Section Integration

---

# Part I: Strategy Office - Work Layer

## 1. Strategy Desk Dashboard

### 1.1 Overview

The Strategy Desk is a personalized command center for strategic focus and decision tracking, serving as the business counterpart to the Mission Control Dashboard.

**Location:** `/biz/desk` (Strategy Desk) vs `/` (Mission Control)

**Design Philosophy:**
- Mirrors Mission Control's 2-column layout for muscle memory
- Left column: Interactive widgets requiring action
- Right column: Strategic status visualization
- Vertical scroll independence for deep interaction

### 1.2 Layout Architecture

**Primary: 2-Column Layout (Mirrors Mission Control)**

```tsx
// components/biz/StrategyDeskLayout.tsx
export function StrategyDeskLayout() {
  return (
    <div className="grid grid-cols-[40%_60%] gap-6 p-6 min-h-screen">
      {/* Left Column: Interactive Stack */}
      <div className="flex flex-col gap-6 overflow-y-auto">
        <StrategicBriefWidget />
        <MarketPulseWidget />
        <DecisionLogWidget />
        <PriorityInitiativesWidget />
        <QuickCaptureWidget />
      </div>

      {/* Right Column: Strategic Status (Full Height) */}
      <div className="sticky top-6 h-fit">
        <StrategicStatusWidget />
      </div>
    </div>
  );
}
```

**Alternative: 3-Column Grid (Domain-Optimized)**

```tsx
// Alternative layout for strategic workflow optimization
<div className="grid grid-cols-[30%_35%_35%] gap-6 p-6 min-h-screen">
  {/* Information Column */}
  <div className="flex flex-col gap-6">
    <StrategicBriefWidget />
    <MarketPulseWidget />
    <QuickCaptureWidget />
  </div>

  {/* Work Management Column */}
  <div className="flex flex-col gap-6">
    <DecisionLogWidget />
    <PriorityInitiativesWidget />
  </div>

  {/* Status & Context Column */}
  <div className="flex flex-col gap-6">
    <PortfolioMapWidget />
    <MarketIntelligenceWidget />
  </div>
</div>
```

### 1.3 Widget Data Models

**Strategic Brief Widget:**
```typescript
// types/strategy-desk.ts
interface StrategicBriefData {
  criticalUpdates: CriticalUpdate[];
  pendingDecisions: number;
  highPriorityItems: HighPriorityItem[];
  marketUpdates: MarketUpdate[];
}

interface CriticalUpdate {
  id: string;
  type: 'decision' | 'market' | 'initiative';
  title: string;
  priority: 'urgent' | 'high' | 'normal';
  dueDate?: Date;
  assignee?: string;
}

interface MarketUpdate {
  id: string;
  source: 'competitive' | 'customer' | 'industry';
  summary: string;
  timestamp: Date;
  relevance: 'critical' | 'important' | 'informational';
}
```

**Decision Log Widget:**
```typescript
interface DecisionLogData {
  pending: Decision[];
  approved: Decision[];
  totalExecuted: number;
  pipelineStats: {
    draft: number;
    review: number;
    approved: number;
  };
}

interface Decision {
  id: string;
  title: string;
  status: 'draft' | 'review' | 'approved' | 'executed';
  requestedBy: string;
  requestedAt: Date;
  approvers?: string[];
  isStale: boolean; // > 5 days without approval
  impactedDocs: string[];
  priority: 'urgent' | 'normal';
}
```

**Priority Initiatives Widget:**
```typescript
interface PriorityInitiativesData {
  initiatives: StrategicInitiative[];
  maxInitiatives: number; // Default: 3
}

interface StrategicInitiative {
  id: string;
  title: string;
  documentPath: string;
  status: 'draft' | 'active' | 'completed';
  priority: number; // 1-3 for top 3
  assignee?: string;
  dueDate?: Date;
}
```

### 1.4 Zustand State Management

```typescript
// stores/strategyDeskStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StrategyDeskState {
  // Widget data
  strategicBrief: StrategicBriefData | null;
  decisionLog: DecisionLogData | null;
  priorityInitiatives: PriorityInitiativesData | null;
  marketPulse: MarketPulseData | null;

  // Widget visibility & collapse
  widgetStates: Record<string, {
    visible: boolean;
    collapsed: boolean;
  }>;

  // Quick Capture state
  captureInput: string;
  captureType: 'market-insight' | 'competitive-intel' | 'customer-feedback' | 'strategic-idea';

  // Actions
  updateStrategicBrief: () => Promise<void>;
  addDecision: (decision: Decision) => Promise<void>;
  approveDecision: (decisionId: string) => Promise<void>;
  reorderInitiatives: (initiativeIds: string[]) => void;
  captureQuickNote: (note: string, type: string) => Promise<void>;
  toggleWidget: (widgetId: string) => void;
}

export const useStrategyDeskStore = create<StrategyDeskState>()(
  persist(
    (set, get) => ({
      strategicBrief: null,
      decisionLog: null,
      priorityInitiatives: null,
      marketPulse: null,

      widgetStates: {
        'strategic-brief': { visible: true, collapsed: false },
        'decision-log': { visible: true, collapsed: false },
        'priority-initiatives': { visible: true, collapsed: false },
        'market-pulse': { visible: true, collapsed: false },
        'quick-capture': { visible: true, collapsed: false },
        'strategic-status': { visible: true, collapsed: false },
      },

      captureInput: '',
      captureType: 'market-insight',

      updateStrategicBrief: async () => {
        const brief = await fetchStrategicBrief();
        set({ strategicBrief: brief });
      },

      addDecision: async (decision) => {
        await createDecisionDocument(decision);
        await get().updateDecisionLog();
      },

      approveDecision: async (decisionId) => {
        await updateDecisionStatus(decisionId, 'approved');
        await get().updateDecisionLog();
      },

      reorderInitiatives: (initiativeIds) => {
        set((state) => ({
          priorityInitiatives: {
            ...state.priorityInitiatives!,
            initiatives: initiativeIds.map((id, index) => {
              const initiative = state.priorityInitiatives!.initiatives.find(i => i.id === id)!;
              return { ...initiative, priority: index + 1 };
            }),
          },
        }));
      },

      captureQuickNote: async (note, type) => {
        await saveQuickCapture(note, type);
        set({ captureInput: '' });
      },

      toggleWidget: (widgetId) => {
        set((state) => ({
          widgetStates: {
            ...state.widgetStates,
            [widgetId]: {
              ...state.widgetStates[widgetId],
              collapsed: !state.widgetStates[widgetId].collapsed,
            },
          },
        }));
      },
    }),
    { name: 'strategy-desk-state' }
  )
);
```

### 1.5 Keyboard Shortcuts

```typescript
// lib/hooks/useStrategyDeskShortcuts.ts
import { useEffect } from 'react';
import { useStrategyDeskStore } from '@/stores/strategyDeskStore';

export function useStrategyDeskShortcuts() {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      // Cmd+D: Add current doc to decisions
      if ((e.metaKey || e.ctrlKey) && e.key === 'd') {
        e.preventDefault();
        // Add current document to decision log
        const currentDoc = getCurrentDocument();
        useStrategyDeskStore.getState().addDecision({
          title: currentDoc.title,
          documentPath: currentDoc.path,
          status: 'draft',
          // ... other fields
        });
      }

      // Cmd+Shift+N: Quick Capture modal
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'n') {
        e.preventDefault();
        openQuickCaptureModal();
      }

      // Cmd+\: Focus Toggle (collapse sidebars)
      if ((e.metaKey || e.ctrlKey) && e.key === '\\') {
        e.preventDefault();
        toggleFocusMode();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);
}
```

### 1.6 Data Integration

**Strategic Brief Data Fetching:**
```typescript
// lib/strategy-desk/fetch-strategic-brief.ts
export async function fetchStrategicBrief(): Promise<StrategicBriefData> {
  // 1. Analyze git commits for recent updates
  const recentCommits = await getRecentGitCommits('content/biz', 7); // Last 7 days

  // 2. Scan for pending decisions
  const pendingDecisions = await getAllDecisions({ status: 'pending-approval' });

  // 3. Extract high-priority items from frontmatter
  const highPriorityDocs = await getDocumentsByTag('#high-priority');

  // 4. Fetch market intelligence updates (future: external API)
  const marketUpdates = await fetchMarketIntelligence();

  return {
    criticalUpdates: [
      ...pendingDecisions.map(d => ({
        id: d.id,
        type: 'decision' as const,
        title: d.title,
        priority: d.priority,
      })),
      ...highPriorityDocs.map(doc => ({
        id: doc.id,
        type: 'initiative' as const,
        title: doc.title,
        priority: 'high' as const,
      })),
    ],
    pendingDecisions: pendingDecisions.length,
    highPriorityItems: highPriorityDocs,
    marketUpdates,
  };
}
```

---

## 2. Strategy Rooms (Multi-Document Workspace)

### 2.1 Overview

Immersive multi-document environments for specific business initiatives, supporting side-by-side strategy analysis.

**Use Cases:**
- Compare market analysis + product strategy for alignment
- Review competitive intelligence while drafting GTM plan
- Monitor decision threads alongside strategy docs

### 2.2 Split-Pane Architecture

```typescript
// types/strategy-rooms.ts
interface StrategyRoom {
  id: string;
  name: string;
  preset: 'q1-planning' | 'competitive-analysis' | 'market-entry' | 'custom';
  panes: StrategyPane[];
  activeUsers: string[]; // Partner IDs currently in room
  createdBy: string;
  createdAt: Date;
}

interface StrategyPane {
  id: string;
  documentPath: string;
  position: 'left' | 'right' | 'center';
  width: number; // Percentage
  scrollPosition: number;
}
```

**Component Implementation:**
```tsx
// components/biz/StrategyRoom.tsx
'use client';

import { useState } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

export function StrategyRoom({ room }: { room: StrategyRoom }) {
  const [panes, setPanes] = useState(room.panes);

  const handleAltClick = (documentPath: string) => {
    // Alt+Click opens doc in secondary pane
    setPanes([
      ...panes,
      {
        id: generateId(),
        documentPath,
        position: 'right',
        width: 50,
        scrollPosition: 0,
      },
    ]);
  };

  return (
    <div className="h-screen">
      {/* Live Presence Indicators */}
      <div className="p-4 border-b flex items-center gap-2">
        <h2 className="font-semibold">{room.name}</h2>
        <div className="flex gap-2 ml-auto">
          {room.activeUsers.map(userId => (
            <UserAvatar key={userId} userId={userId} />
          ))}
        </div>
      </div>

      {/* Split Panes */}
      <ResizablePanelGroup direction="horizontal">
        {panes.map((pane, index) => (
          <>
            <ResizablePanel key={pane.id} defaultSize={pane.width}>
              <DocumentViewer
                documentPath={pane.documentPath}
                onAltClick={handleAltClick}
              />
            </ResizablePanel>
            {index < panes.length - 1 && <ResizableHandle />}
          </>
        ))}
      </ResizablePanelGroup>

      {/* Decision Thread Sidebar */}
      <DecisionThread roomId={room.id} />
    </div>
  );
}
```

### 2.3 Real-Time Presence Tracking

```typescript
// lib/strategy-rooms/presence.ts
import Pusher from 'pusher-js';

export function initializeRoomPresence(roomId: string, userId: string) {
  const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  });

  const channel = pusher.subscribe(`strategy-room-${roomId}`);

  // Join room
  channel.trigger('client-user-joined', {
    userId,
    timestamp: Date.now(),
  });

  // Track pane navigation
  channel.bind('pane-changed', (data: {
    userId: string;
    paneId: string;
    documentPath: string;
  }) => {
    updateRoomPresence(data);
  });

  // Leave room on unmount
  return () => {
    channel.trigger('client-user-left', { userId });
    pusher.disconnect();
  };
}
```

---

## 3. Decision Governance Workflow

### 3.1 Decision Pipeline

**Status Flow:** Draft → Review → Approved → Executed

```typescript
// types/decision.ts
interface DecisionDocument {
  id: string;
  title: string;
  status: 'draft' | 'review' | 'approved' | 'executed';
  description: string;
  context: string; // Why is this decision needed?
  options: DecisionOption[];
  selectedOption?: string;
  approvers: Approver[];
  createdBy: string;
  createdAt: Date;
  approvedAt?: Date;
  executedAt?: Date;
  impactedDocuments: string[]; // Paths to affected strategy docs
  tags: string[];
}

interface DecisionOption {
  id: string;
  name: string;
  pros: string[];
  cons: string[];
  estimatedImpact: 'low' | 'medium' | 'high';
}

interface Approver {
  userId: string;
  required: boolean; // Must approve vs optional
  approved: boolean;
  approvedAt?: Date;
  comments?: string;
}
```

### 3.2 Frontmatter Schema for Decisions

```yaml
---
# Decision Document Frontmatter
type: "decision"
title: "Pivot to Monthly Pricing for Indonesia Market"
status: "review"
decision: true
needs_approval: true
approvers:
  - id: "partner-1"
    required: true
    approved: false
  - id: "partner-2"
    required: true
    approved: false
createdBy: "partner-1"
createdAt: "2026-01-15T10:00:00Z"
priority: "urgent"
impactedDocs:
  - "/biz/financial/pricing-strategy.md"
  - "/biz/gtm/sales-playbook.md"
  - "/products/components/pricing-card"
tags: ["pricing", "indonesia", "market-entry"]
---
```

### 3.3 Decision Actions API

```typescript
// lib/decisions/decision-actions.ts
export async function requestApproval(decisionId: string, approvers: string[]) {
  // 1. Update decision document frontmatter
  const decision = await getDecisionById(decisionId);
  const updatedFrontmatter = {
    ...decision.frontmatter,
    status: 'review',
    needs_approval: true,
    approvers: approvers.map(id => ({
      id,
      required: true,
      approved: false,
    })),
  };

  await updateDocumentFrontmatter(decisionId, updatedFrontmatter);

  // 2. Send notifications via Pusher
  approvers.forEach(approverId => {
    sendNotification(approverId, {
      type: 'DECISION_APPROVAL_REQUESTED',
      decisionTitle: decision.title,
      requestedBy: getCurrentUserId(),
      deepLink: `/biz/decisions/${decisionId}`,
    });
  });

  // 3. Track activity
  await trackActivity({
    userId: getCurrentUserId(),
    activityType: 'decision_approval_requested',
    targetId: decisionId,
  });
}

export async function approveDecision(
  decisionId: string,
  approverId: string,
  comments?: string
) {
  const decision = await getDecisionById(decisionId);

  // Update approver status
  const updatedApprovers = decision.frontmatter.approvers.map(approver => {
    if (approver.id === approverId) {
      return {
        ...approver,
        approved: true,
        approvedAt: new Date().toISOString(),
        comments,
      };
    }
    return approver;
  });

  // Check if all required approvers have approved
  const allApproved = updatedApprovers
    .filter(a => a.required)
    .every(a => a.approved);

  await updateDocumentFrontmatter(decisionId, {
    ...decision.frontmatter,
    approvers: updatedApprovers,
    status: allApproved ? 'approved' : 'review',
    approvedAt: allApproved ? new Date().toISOString() : undefined,
  });

  // Notify decision owner
  sendNotification(decision.frontmatter.createdBy, {
    type: 'DECISION_APPROVED',
    decisionTitle: decision.title,
    approvedBy: approverId,
    allApproved,
  });

  // Check for stale decisions and send alerts
  if (!allApproved) {
    await checkStaleDecisions();
  }
}

export async function checkStaleDecisions() {
  const pendingDecisions = await getAllDecisions({ status: 'review' });
  const staleThreshold = 5 * 24 * 60 * 60 * 1000; // 5 days

  const staleDecisions = pendingDecisions.filter(decision => {
    const daysPending = Date.now() - new Date(decision.frontmatter.createdAt).getTime();
    return daysPending > staleThreshold;
  });

  staleDecisions.forEach(decision => {
    // Send urgency notification
    decision.frontmatter.approvers
      .filter(a => !a.approved)
      .forEach(approver => {
        sendNotification(approver.id, {
          type: 'DECISION_STALE_ALERT',
          decisionTitle: decision.title,
          daysPending: Math.floor((Date.now() - new Date(decision.frontmatter.createdAt).getTime()) / (24 * 60 * 60 * 1000)),
        });
      });
  });
}
```

---

# Part II: Strategic Brain - Knowledge Layer

## 4. Smart Connections

### 4.1 Bi-Directional Backlinks

**Implementation:**
```typescript
// lib/strategic-brain/backlinks.ts
import { getAllDocuments } from '@/lib/docs';

export interface Backlink {
  from: string; // Document path that links to current doc
  title: string;
  context: string; // Surrounding text where link appears
  linkType: 'wikilink' | 'markdown' | 'reference';
}

export async function getBacklinks(documentPath: string): Promise<Backlink[]> {
  const allDocs = await getAllDocuments();
  const backlinks: Backlink[] = [];

  // Extract document slug from path
  const targetSlug = extractSlug(documentPath);

  allDocs.forEach(doc => {
    // Skip self-references
    if (doc.path === documentPath) return;

    // Search for wikilinks: [[target-doc]]
    const wikilinkRegex = /\[\[([^\]]+)\]\]/g;
    const wikilinks = Array.from(doc.content.matchAll(wikilinkRegex));

    wikilinks.forEach(match => {
      if (match[1] === targetSlug) {
        backlinks.push({
          from: doc.path,
          title: doc.metadata.title,
          context: extractContext(doc.content, match.index!),
          linkType: 'wikilink',
        });
      }
    });

    // Search for markdown links: [text](target-doc)
    const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const mdLinks = Array.from(doc.content.matchAll(mdLinkRegex));

    mdLinks.forEach(match => {
      if (match[2].includes(targetSlug)) {
        backlinks.push({
          from: doc.path,
          title: doc.metadata.title,
          context: extractContext(doc.content, match.index!),
          linkType: 'markdown',
        });
      }
    });
  });

  return backlinks;
}

function extractContext(content: string, position: number, radius: number = 50): string {
  const start = Math.max(0, position - radius);
  const end = Math.min(content.length, position + radius);
  return '...' + content.substring(start, end) + '...';
}
```

### 4.2 Unlinked Mentions

```typescript
// lib/strategic-brain/unlinked-mentions.ts
export interface UnlinkedMention {
  documentPath: string;
  documentTitle: string;
  mention: string;
  context: string;
  suggestedLink: string;
}

export async function findUnlinkedMentions(currentDocumentPath: string): Promise<UnlinkedMention[]> {
  const currentDoc = await getDocumentByPath(currentDocumentPath);
  const allDocs = await getAllDocuments();
  const mentions: UnlinkedMention[] = [];

  // Get all document titles to search for
  const docTitleMap = new Map(
    allDocs.map(doc => [doc.metadata.title.toLowerCase(), doc.path])
  );

  allDocs.forEach(doc => {
    if (doc.path === currentDocumentPath) return;

    // Search for mentions of current document's title
    const titleLower = currentDoc.metadata.title.toLowerCase();
    const contentLower = doc.content.toLowerCase();

    let index = contentLower.indexOf(titleLower);
    while (index !== -1) {
      // Check if already linked
      const isLinked = isAlreadyLinked(doc.content, index, currentDoc.metadata.title);

      if (!isLinked) {
        mentions.push({
          documentPath: doc.path,
          documentTitle: doc.metadata.title,
          mention: currentDoc.metadata.title,
          context: extractContext(doc.content, index),
          suggestedLink: currentDocumentPath,
        });
      }

      index = contentLower.indexOf(titleLower, index + 1);
    }
  });

  return mentions;
}

function isAlreadyLinked(content: string, position: number, title: string): boolean {
  // Check if position is within a wikilink or markdown link
  const beforeText = content.substring(Math.max(0, position - 10), position);
  const afterText = content.substring(position + title.length, Math.min(content.length, position + title.length + 10));

  return beforeText.includes('[[') || beforeText.includes('](') || afterText.includes(']]') || afterText.startsWith(')');
}
```

### 4.3 Semantic Similarity (AI-Powered)

```typescript
// lib/strategic-brain/semantic-similarity.ts
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface RelatedStrategy {
  documentPath: string;
  title: string;
  similarityScore: number; // 0-1
  reason: string;
}

export async function findRelatedStrategies(
  currentDocumentPath: string,
  limit: number = 5
): Promise<RelatedStrategy[]> {
  const currentDoc = await getDocumentByPath(currentDocumentPath);

  // Generate embedding for current document
  const currentEmbedding = await generateEmbedding(currentDoc.content);

  // Get all documents with embeddings
  const allDocs = await getAllDocuments();
  const similarities: RelatedStrategy[] = [];

  for (const doc of allDocs) {
    if (doc.path === currentDocumentPath) continue;

    const docEmbedding = await generateEmbedding(doc.content);
    const similarity = cosineSimilarity(currentEmbedding, docEmbedding);

    if (similarity > 0.7) { // Threshold for relevance
      similarities.push({
        documentPath: doc.path,
        title: doc.metadata.title,
        similarityScore: similarity,
        reason: generateSimilarityReason(currentDoc, doc),
      });
    }
  }

  return similarities
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, limit);
}

async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text.substring(0, 8000), // Limit to 8K chars
  });

  return response.data[0].embedding;
}

function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));

  return dotProduct / (magnitudeA * magnitudeB);
}

function generateSimilarityReason(doc1: any, doc2: any): string {
  // Extract shared tags
  const sharedTags = doc1.metadata.tags?.filter(tag =>
    doc2.metadata.tags?.includes(tag)
  ) || [];

  if (sharedTags.length > 0) {
    return `Shared topics: ${sharedTags.join(', ')}`;
  }

  return 'Similar strategic content';
}
```

---

## 5. Quick Capture System

### 5.1 Global Modal Implementation

```tsx
// components/biz/QuickCaptureModal.tsx
'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useQuickCapture } from '@/lib/hooks/useQuickCapture';

export function QuickCaptureModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [captureType, setCaptureType] = useState<'market-insight' | 'competitive-intel' | 'customer-feedback' | 'strategic-idea'>('market-insight');
  const [entries, setEntries] = useState<string[]>(['']);
  const { saveCapture } = useQuickCapture();

  const templates = {
    'market-insight': {
      title: 'Market Insight',
      placeholder: 'What market trend did you observe?',
      icon: '📊',
    },
    'competitive-intel': {
      title: 'Competitive Intelligence',
      placeholder: 'What did competitors do?',
      icon: '🔍',
    },
    'customer-feedback': {
      title: 'Customer Feedback',
      placeholder: 'What did customers say?',
      icon: '💬',
    },
    'strategic-idea': {
      title: 'Strategic Idea',
      placeholder: 'What strategic idea do you have?',
      icon: '💡',
    },
  };

  const handleSubmit = async () => {
    const validEntries = entries.filter(e => e.trim().length > 0);

    for (const entry of validEntries) {
      await saveCapture({
        type: captureType,
        content: entry,
        timestamp: new Date(),
      });
    }

    setEntries(['']);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Quick Capture</DialogTitle>
        </DialogHeader>

        {/* Type Selector */}
        <div className="flex gap-2 mb-4">
          {Object.entries(templates).map(([type, template]) => (
            <button
              key={type}
              className={`px-3 py-2 rounded ${
                captureType === type ? 'bg-orange-500' : 'bg-slate-800'
              }`}
              onClick={() => setCaptureType(type as any)}
            >
              {template.icon} {template.title}
            </button>
          ))}
        </div>

        {/* Entry Inputs */}
        <div className="space-y-3">
          {entries.map((entry, index) => (
            <textarea
              key={index}
              value={entry}
              onChange={(e) => {
                const newEntries = [...entries];
                newEntries[index] = e.target.value;
                setEntries(newEntries);
              }}
              placeholder={templates[captureType].placeholder}
              className="w-full p-3 bg-slate-900 rounded min-h-[100px]"
            />
          ))}
        </div>

        {/* Add More Button */}
        {entries.length < 5 && (
          <button
            onClick={() => setEntries([...entries, ''])}
            className="btn-secondary"
          >
            + Add Another Entry
          </button>
        )}

        {/* Actions */}
        <div className="flex gap-2 justify-end">
          <button onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button onClick={handleSubmit} className="btn-primary">
            Save to Inbox
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

### 5.2 Inbox Storage & Auto-Tagging

```typescript
// lib/quick-capture/save-capture.ts
import { createFile } from '@/lib/file-system';

export async function saveQuickCapture(capture: {
  type: string;
  content: string;
  timestamp: Date;
}) {
  const { tags, category } = await autoTagContent(capture.content);

  const filename = `${capture.timestamp.toISOString().split('T')[0]}-${generateSlug(capture.content.substring(0, 30))}.md`;
  const filepath = `content/biz/inbox/${filename}`;

  const frontmatter = {
    title: capture.content.substring(0, 50),
    type: capture.type,
    createdAt: capture.timestamp.toISOString(),
    createdBy: getCurrentUserId(),
    tags,
    category,
    status: 'inbox',
  };

  const content = `---
${Object.entries(frontmatter).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n')}
---

${capture.content}
`;

  await createFile(filepath, content);

  return { filepath, tags };
}

async function autoTagContent(content: string): Promise<{ tags: string[]; category: string }> {
  const tags: string[] = [];
  let category = 'general';

  // Keyword-based tagging
  const keywords = {
    competitive: ['competitor', 'competitive', 'market share', 'pricing comparison'],
    customer: ['customer', 'user', 'feedback', 'interview', 'pain point'],
    market: ['market', 'industry', 'trend', 'growth', 'opportunity'],
    product: ['feature', 'product', 'roadmap', 'development'],
    financial: ['revenue', 'pricing', 'cost', 'margin', 'budget'],
  };

  Object.entries(keywords).forEach(([tag, words]) => {
    if (words.some(word => content.toLowerCase().includes(word))) {
      tags.push(`#${tag}`);
      category = tag;
    }
  });

  // Future: OpenAI-based smart tagging
  // const aiTags = await generateAITags(content);
  // tags.push(...aiTags);

  return { tags, category };
}
```

---

# Part III: Cross-Section Integration

## 6. Biz Lab ↔ Products Lab Bridge

### 6.1 Cross-Section Event Bus

```typescript
// lib/cross-section/event-bus.ts
import Pusher from 'pusher-js';

export interface CrossSectionEvent {
  type: 'STRATEGY_UPDATE' | 'EXPERIMENT_COMPLETED' | 'DECISION_APPROVED' | 'PRODUCT_LAUNCHED';
  source: 'biz' | 'products';
  target: 'biz' | 'products';
  payload: any;
  timestamp: Date;
}

class CrossSectionEventBus {
  private pusher: Pusher;
  private channel: any;

  constructor() {
    this.pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    });
    this.channel = this.pusher.subscribe('vault-cross-section');
  }

  // Biz Lab publishes product-relevant events
  publishStrategyUpdate(strategy: any) {
    const affectedProducts = this.findRelatedProducts(strategy);

    affectedProducts.forEach(product => {
      const event: CrossSectionEvent = {
        type: 'STRATEGY_UPDATE',
        source: 'biz',
        target: 'products',
        payload: {
          strategyId: strategy.id,
          strategyTitle: strategy.title,
          affectedProductId: product.id,
          changeType: 'strategy_approved',
          actionRequired: true,
        },
        timestamp: new Date(),
      };

      this.channel.trigger('client-cross-section-event', event);
    });
  }

  // Products Lab publishes strategy-relevant events
  publishExperimentResults(experiment: any) {
    const relatedStrategies = this.findRelatedStrategies(experiment);

    relatedStrategies.forEach(strategy => {
      const event: CrossSectionEvent = {
        type: 'EXPERIMENT_COMPLETED',
        source: 'products',
        target: 'biz',
        payload: {
          experimentId: experiment.id,
          experimentTitle: experiment.title,
          results: experiment.conversionData,
          strategicInsight: experiment.learnings,
          suggestedAction: 'update_market_analysis',
        },
        timestamp: new Date(),
      };

      this.channel.trigger('client-cross-section-event', event);
    });
  }

  subscribe(eventType: string, handler: (event: CrossSectionEvent) => void) {
    this.channel.bind(eventType, handler);
  }

  private findRelatedProducts(strategy: any): any[] {
    // Implementation: Parse strategy content for product references
    return [];
  }

  private findRelatedStrategies(experiment: any): any[] {
    // Implementation: Parse experiment tags for strategy references
    return [];
  }
}

export const crossSectionEventBus = new CrossSectionEventBus();
```

### 6.2 Unified Reference Map

```typescript
// lib/cross-section/reference-map.ts
export interface CrossSectionReference {
  bizDoc: {
    path: string;
    type: 'strategy' | 'market-intel' | 'decision';
    tags: string[];
  };
  productDocs: Array<{
    path: string;
    relationship: 'implements' | 'validates' | 'informs';
    status: 'completed' | 'in_progress' | 'planned';
    completionDate?: string;
  }>;
  sharedTags: string[];
  lastSyncedAt: string;
}

export async function buildCrossSectionReferenceMap(): Promise<CrossSectionReference[]> {
  const bizDocs = await getAllBizDocs();
  const productDocs = await getAllProductDocs();
  const references: CrossSectionReference[] = [];

  bizDocs.forEach(bizDoc => {
    const relatedProducts = findRelatedProductDocs(bizDoc, productDocs);

    if (relatedProducts.length > 0) {
      references.push({
        bizDoc: {
          path: bizDoc.path,
          type: bizDoc.metadata.type || 'strategy',
          tags: bizDoc.metadata.tags || [],
        },
        productDocs: relatedProducts,
        sharedTags: extractSharedTags(bizDoc, relatedProducts),
        lastSyncedAt: new Date().toISOString(),
      });
    }
  });

  return references;
}

function findRelatedProductDocs(bizDoc: any, productDocs: any[]): any[] {
  const related: any[] = [];

  productDocs.forEach(productDoc => {
    // Check for explicit references in content
    if (productDoc.content.includes(bizDoc.metadata.title)) {
      related.push({
        path: productDoc.path,
        relationship: 'implements',
        status: productDoc.metadata.status || 'in_progress',
      });
    }

    // Check for shared tags
    const sharedTags = bizDoc.metadata.tags?.filter(tag =>
      productDoc.metadata.tags?.includes(tag)
    );

    if (sharedTags && sharedTags.length >= 2) {
      related.push({
        path: productDoc.path,
        relationship: 'validates',
        status: productDoc.metadata.status || 'planned',
      });
    }
  });

  return related;
}
```

---

# Part IV: Advanced Features

## 7. Staged Parsing System (Performance)

### 7.1 Three-Stage Loading Pipeline

**Goal:** Achieve "thought-speed" navigation (< 50ms latency) even with 500+ documents

```typescript
// lib/performance/staged-parser.ts
export class StagedDocumentParser {
  private metadataCache: Map<string, DocMetadata> = new Map();
  private contentCache: Map<string, string> = new Map();
  private worker: Worker;

  constructor() {
    // Initialize Web Worker for background processing
    this.worker = new Worker(new URL('./graph-worker.ts', import.meta.url));
  }

  // Stage 1: Metadata Scan (Instant - < 100ms)
  async scanMetadata(): Promise<Map<string, DocMetadata>> {
    const allFiles = await getAllMarkdownFiles();

    const metadataPromises = allFiles.map(async (file) => {
      const content = await fs.readFile(file, 'utf8');
      const { data } = matter(content);
      return [file, data as DocMetadata];
    });

    const entries = await Promise.all(metadataPromises);
    this.metadataCache = new Map(entries);

    return this.metadataCache;
  }

  // Stage 2: Critical Content (On Demand - < 200ms)
  async loadDocument(path: string): Promise<string> {
    if (this.contentCache.has(path)) {
      return this.contentCache.get(path)!;
    }

    const content = await fs.readFile(path, 'utf8');
    this.contentCache.set(path, content);

    return content;
  }

  // Stage 3: Deep Analysis (Background - Non-blocking)
  startBackgroundAnalysis() {
    this.worker.postMessage({
      type: 'ANALYZE_BACKLINKS',
      payload: {
        metadata: Array.from(this.metadataCache.entries()),
      },
    });

    this.worker.onmessage = (e) => {
      if (e.data.type === 'BACKLINKS_COMPLETE') {
        // Update graph data
        updateGraphData(e.data.payload);
      }
    };
  }
}
```

**Web Worker for Background Processing:**
```typescript
// lib/performance/graph-worker.ts
self.onmessage = (e) => {
  if (e.data.type === 'ANALYZE_BACKLINKS') {
    const { metadata } = e.data.payload;

    // Build backlink map
    const backlinkMap = new Map();

    metadata.forEach(([path, meta]) => {
      // Scan for references to other docs
      const references = findReferences(path, metadata);
      backlinkMap.set(path, references);
    });

    self.postMessage({
      type: 'BACKLINKS_COMPLETE',
      payload: backlinkMap,
    });
  }
};
```

### 7.2 Multi-Layer Caching Strategy

```typescript
// lib/performance/cache-manager.ts
export class CacheManager {
  // L1: Memory (Zustand)
  private memoryCache: Map<string, any> = new Map();

  // L2: Disk (Next.js ISR)
  async getCachedDocument(path: string) {
    // Next.js automatically caches via ISR
    return await fetch(`/api/docs/${path}`, {
      next: { revalidate: 3600 }, // 1 hour
    });
  }

  // L3: Edge (Vercel)
  // Configured via vercel.json
}
```

**Vercel Edge Caching Configuration:**
```json
{
  "routes": [
    {
      "src": "/api/docs/(.*)",
      "headers": {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate"
      }
    }
  ]
}
```

### 7.3 Prefetching Strategy

```tsx
// components/biz/DocumentLink.tsx
import { usePrefetch } from '@/lib/hooks/usePrefetch';

export function DocumentLink({ href, children }: { href: string; children: React.ReactNode }) {
  const prefetch = usePrefetch();

  return (
    <a
      href={href}
      onMouseEnter={() => {
        // Hover triggers Stage 2 parsing
        prefetch(href);
      }}
    >
      {children}
    </a>
  );
}
```

---

## 8. Mission Control Integration

### 8.1 Task Aggregation from Markdown

```typescript
// lib/mission-control/aggregate-biz-tasks.ts
export async function aggregateBizTasks(userId: string): Promise<Task[]> {
  const allBizDocs = await getAllBizDocs();
  const tasks: Task[] = [];

  allBizDocs.forEach(doc => {
    // Parse markdown for task checkboxes: [ ]
    const taskRegex = /- \[ \] (.+)/g;
    const matches = Array.from(doc.content.matchAll(taskRegex));

    matches.forEach(match => {
      tasks.push({
        id: generateTaskId(doc.path, match[1]),
        title: match[1],
        type: 'biz-task',
        status: 'pending',
        source: doc.path,
        assignee: doc.metadata.assignedTo || userId,
      });
    });

    // Check for decision documents needing approval
    if (doc.metadata.needs_approval && doc.metadata.approvers?.includes(userId)) {
      tasks.push({
        id: generateTaskId(doc.path, 'approval'),
        title: `Review decision: ${doc.metadata.title}`,
        type: 'decision-approval',
        status: 'pending',
        source: doc.path,
        assignee: userId,
        priority: doc.metadata.priority || 'normal',
      });
    }
  });

  return tasks;
}
```

---

## 9. Performance Targets & Monitoring

### 9.1 Target Metrics

- **Page Load:** < 1s (MDX pre-rendered)
- **Search Response:** < 100ms (FlexSearch/Fuse.js)
- **Navigation:** < 50ms (thought-speed latency)
- **Graph Rendering:** 60 FPS with 100+ nodes
- **Real-Time Sync:** < 500ms (Pusher WebSocket)
- **Decision Approval:** < 2s from approval to notification

### 9.2 Monitoring Implementation

```typescript
// lib/monitoring/performance-tracker.ts
export function trackPerformance(metric: string, value: number) {
  // Send to analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'biz_lab_performance', {
      metric_name: metric,
      metric_value: value,
      timestamp: Date.now(),
    });
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${metric}: ${value}ms`);
  }
}

// Usage
const startTime = performance.now();
await loadDocument(path);
trackPerformance('document_load', performance.now() - startTime);
```

---

# Part V: Content Rendering & Navigation System

**Purpose:** Complete specification for content rendering, discovery, and navigation in Biz Lab
**Status:** ✅ IMPLEMENTED (Sprint 1)
**Components:** MDX Rendering, Knowledge Graph (F2), View Modes (F3), Search & Filtering

---

## 5.1 MDX Rendering System

### Overview

Technical specification for Biz Lab's custom MDX rendering system, replacing the originally planned Nextra 3.0 implementation.

**Decision Rationale:**
- Greater design control
- Unified Vault design system
- Simplified build process
- Better TypeScript integration

### Technology Stack

**Core Dependencies:**

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

### Content Loading Pipeline

**Directory Structure:**

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

**Document Loader (`apps/vault/lib/docs.ts`):**

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

### MDX Page Component

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

### Layout Component

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

### Navigation Generation

**Sidebar Tree Builder (`lib/build-nav-tree.ts`):**

```typescript
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

### Frontmatter Schema

**Required Fields:**

```yaml
---
title: "Go-to-Market Strategy"
---
```

**Optional Fields:**

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

### MDX Styling

**Typography (Prose):**

```tsx
// Uses Tailwind Typography plugin
<article className="prose prose-slate max-w-none dark:prose-invert">
  <MDXRemote source={content} />
</article>
```

**Custom Styles:**

```css
/* globals.css */
.prose {
  --tw-prose-body: theme('colors.slate.100');
  --tw-prose-headings: theme('colors.slate.50');
  --tw-prose-links: theme('colors.orange.500');
  --tw-prose-code: theme('colors.amber.400');
}
```

### MDX Performance

**Build-Time Optimization:**
- **Static Generation:** All docs pre-rendered at build time
- **Incremental Static Regeneration:** Not needed (docs rarely change)
- **Bundle Size:** ~50KB for MDX runtime

**Runtime Performance:**
- **Time to Interactive:** < 1s (static HTML)
- **Markdown Parsing:** 0ms (done at build time)
- **Navigation:** Client-side routing (instant)

---

## 5.2 Knowledge Graph (F2)

### Overview

Interactive, Obsidian-style knowledge graph for Biz Lab that visualizes document relationships and enables intuitive navigation through strategy docs.

**Status:** ✅ COMPLETED (Sprint 1)
**Feature:** Obsidian-Style Interactive Document Visualization

### Visual Design

**Graph Type: 2D Force-Directed Graph**
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

### User Interactions

- **Hover Node:** Preview card (title, read time, key topics)
- **Click Node:** Navigate to document
- **Drag Node:** Reposition (physics adjusts automatically)
- **Zoom/Pan:** Mouse wheel + drag
- **Search:** Filter nodes, highlight matches
- **Cluster Toggle:** Group by directory

### Technical Implementation

**Library: react-force-graph-2d**

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

### Main Graph Component

**File:** `components/knowledge-graph/GraphView.tsx`

```tsx
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

**File:** `lib/build-graph.ts`

```typescript
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

**File:** `scripts/generate-graph.ts`

```typescript
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

### Knowledge Graph Integration

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

## 5.3 View Modes & Floating Panels (F3)

### Overview

F3 introduced advanced view modes for the knowledge graph. The original plan included split-view functionality, but we pivoted to a floating note panel approach for better UX and flexibility.

**Status:** ✅ COMPLETED (Sprint 1) / PIVOTED

### View Modes Evolution

**Original Plan (Split-View):**

**Mode 1: Full-Window (Default)**
Graph fills entire viewport.

**Mode 2: Side-by-Side Split View**
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

**Mode 3: Floating Note View (IMPLEMENTED ✅)**
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

### Implemented Features

**Floating Note Panel ✅**
- **Draggable overlay** card
- Graph remains interactive (dimmed slightly)
- Preview with "Read Full" link
- Framer Motion animations
- React-draggable for positioning

### Pivot Rationale

**Split-view deferred because:**
1. Floating panels provide more layout freedom
2. Graph visibility remains paramount
3. Notion-style UI is more modern
4. Less complex state management

**What survived:**
- Core toggle between graph-only and graph+notes
- Smooth transitions
- Document preview functionality

### Technical Implementation

**Stack Used:**

```bash
npm install framer-motion
npm install react-draggable
```

**Component:**

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

### Feature Status Matrix

| Feature | Planned | Implemented | Notes |
|---------|---------|-------------|-------|
| Full-window mode | ✅ | ✅ | Default view |
| Split-view | ✅ | ❌ | Deferred to future |
| Floating notes | ✅ | ✅ | Primary implementation |
| Drag & drop | ✅ | ✅ | Smooth animations |
| localStorage | ✅ | ✅ | Persists preferences |

### Future Enhancements

**If split-view is needed later:**
- Use `react-resizable-panels`
- Implement 60/40 → 50/50 → 70/30 presets
- Keyboard shortcuts for layout switching

---

## 5.4 Search & Filtering

### Search Implementation

**Integration with MDX Content:**

```typescript
// MDX content indexed for search
const searchIndex = buildSearchIndex(getAllDocSlugs());
```

**Integration with Knowledge Graph:**

**Graph Search:**
- Filter nodes based on query
- Highlight matching nodes
- Adjust link visibility

**See Also:** Global Vault Search in `../prds/00-vault-overview-prd.md`

### Cross-System Integration

**With Content Pipeline:**
- MDX documents automatically indexed
- Frontmatter metadata searchable
- Full-text content search

**With Knowledge Graph:**
- Graph data includes all docs
- Search filters graph nodes
- Results show document relationships

**With Navigation:**
- Search results link to docs
- Breadcrumb trail maintained
- History preserved

### Performance Targets

**MDX System:**
- **Page Load:** < 1s (static HTML)
- **Build Time:** < 30s for 100 docs
- **Bundle Size:** ~50KB MDX runtime

**Knowledge Graph:**
- **Initial Load:** < 500ms
- **Rendering:** 60 FPS with 200 nodes
- **Bundle Size:** < 100KB added to route

**Combined System:**
- **Total Bundle:** < 150KB for graph + MDX
- **Time to Interactive:** < 1s
- **Search Response:** < 500ms

---

# Part VIII: App Settings Integration

## 8. Settings-Driven Biz Lab Configuration

### 8.1 Workflow Profile Application

Biz Lab respects Workflow Profiles from App Settings system, automatically reconfiguring Strategic Brain and document reading experience based on active profile.

```typescript
// Biz Lab listens for profile changes
export function BizLabContainer() {
  const { activeProfile, profiles } = useWorkflowProfiles();
  const bizLabSettings = useBizLabSettings();

  useEffect(() => {
    if (!activeProfile) return;

    const profile = profiles.find(p => p.id === activeProfile);
    if (!profile) return;

    // Apply profile's Biz Lab settings
    const { bizLab } = profile.settings;

    // Update sidebar state
    bizLabSettings.updateSidebarState(bizLab.sidebarState);

    // Update zen mode
    bizLabSettings.updateZenMode(bizLab.zenMode);

    // Update auto-save
    bizLabSettings.updateAutoSave(bizLab.autoSave);

    // Update knowledge graph visibility
    bizLabSettings.updateKnowledgeGraphVisibility(bizLab.knowledgeGraphVisible);

    // Update recent docs count
    bizLabSettings.updateRecentDocsCount(bizLab.recentDocsCount);
  }, [activeProfile, profiles]);

  return <BizLab />;
}
```

**Profile-Specific Examples:**

**Focus Mode Profile (Deep Work):**
```typescript
{
  bizLab: {
    sidebarState: 'collapsed', // Hide navigation
    zenMode: true, // Distraction-free writing
    autoSave: { enabled: true, interval: 30 }, // Frequent auto-save
    knowledgeGraphVisible: false, // Hide graph for focus
    recentDocsCount: 3, // Minimal recent docs
  }
}
```
**Result:**
- Zen Mode enabled: hides all UI chrome (sidebars, toolbars, graph)
- Only essential writing interface visible
- Auto-save every 30 seconds to prevent work loss
- Minimal recent docs list (3 items)

**Strategy Planning Mode:**
```typescript
{
  bizLab: {
    sidebarState: 'expanded', // Full navigation visible
    zenMode: false, // All tools accessible
    autoSave: { enabled: true, interval: 60 }, // Less frequent saves
    knowledgeGraphVisible: true, // Show connections
    recentDocsCount: 15, // More context
  }
}
```
**Result:**
- Full sidebar with all strategic documents visible
- Knowledge Graph displayed for exploring connections
- More recent docs (15 items) for broader context
- Auto-save every minute

### 8.2 Zen Mode Cascade Effects

Zen Mode from Biz Lab settings triggers cascade effects across other apps.

```typescript
// Zen Mode enables distraction-free mode across Vault
export function activateZenMode(enabled: boolean) {
  const bizLabStore = useBizLabSettings.getState();
  const dashboardStore = useDashboardSettings.getState();
  const globalStore = useGlobalSettings.getState();

  if (enabled) {
    // Update Biz Lab state
    bizLabStore.updateZenMode(true);
    bizLabStore.updateSidebarState('collapsed');
    bizLabStore.updateKnowledgeGraphVisibility(false);

    // Cascade to Dashboard: Hide non-essential widgets
    const essentialWidgets = ['my-focus'];
    dashboardStore.updateWidgetVisibility(essentialWidgets);

    // Cascade to Global: Disable notifications
    dashboardStore.updateNotificationSettings({
      enabled: false,
      exceptions: ['critical-alerts'],
    });

    // Cascade to Global: Hide sidebars globally
    globalStore.updateSidebarPosition('hidden');

    showToast({
      title: 'Zen Mode Activated',
      description: 'Distraction-free writing enabled across Vault',
      variant: 'success',
    });
  } else {
    // Restore previous state from profile
    const { activeProfile, profiles } = useWorkflowProfiles.getState();
    const profile = profiles.find(p => p.id === activeProfile);

    if (profile) {
      // Restore from profile settings
      bizLabStore.updateZenMode(false);
      bizLabStore.updateSidebarState(profile.settings.bizLab.sidebarState);
      bizLabStore.updateKnowledgeGraphVisibility(profile.settings.bizLab.knowledgeGraphVisible);
      dashboardStore.updateWidgetVisibility(profile.settings.missionControl.widgetVisibility);
      dashboardStore.updateNotificationSettings(profile.settings.missionControl.notifications);
      globalStore.updateSidebarPosition(profile.settings.global.sidebarPosition);
    }
  }
}
```

### 8.3 Strategic Brain Settings Consumption

Strategic Brain consumes App Settings for knowledge graph visualization and smart connection algorithms.

```typescript
// Knowledge Graph respects user visualization preferences
export function KnowledgeGraph() {
  const { strategicBrain } = useBizLabSettings();
  const { shared } = useCollaborationSettings.getState().settings;

  // Use shared graph color scheme if enforced
  const colorScheme = shared.enforced
    ? shared.settings.graphColorScheme
    : strategicBrain.graphColorScheme;

  return (
    <ForceGraph2D
      graphData={graphData}
      nodeColor={(node) => getNodeColor(node, colorScheme)}
      nodeRelSize={strategicBrain.nodeSize || 6}
      linkWidth={strategicBrain.linkWidth || 2}
      linkCurvature={strategicBrain.linkCurvature || 0.25}
      d3AlphaDecay={strategicBrain.physicsStrength || 0.02}
      d3VelocityDecay={0.4}
      enableNodeDrag={true}
      enableZoomPanInteraction={true}
      onNodeClick={(node) => handleNodeClick(node, strategicBrain.autoOpenBehavior)}
    />
  );
}

// Smart connection threshold respects user preferences
export function computeSmartConnections(docId: string) {
  const { strategicBrain } = useBizLabSettings.getState();
  const doc = getDocument(docId);
  const allDocs = getAllDocuments();

  const connections = allDocs
    .filter(otherDoc => otherDoc.id !== docId)
    .map(otherDoc => ({
      targetId: otherDoc.id,
      similarity: computeSemanticSimilarity(doc.content, otherDoc.content),
    }))
    .filter(conn => conn.similarity >= (strategicBrain.semanticSimilarityThreshold || 0.7))
    .sort((a, b) => b.similarity - a.similarity);

  return connections;
}

// Graph filters respect saved presets
export function GraphFilterControls() {
  const { strategicBrain } = useBizLabSettings();
  const [activeFilterPreset, setActiveFilterPreset] = useState(null);

  const applyFilterPreset = (presetId: string) => {
    const preset = strategicBrain.graphFilterPresets.find(p => p.id === presetId);
    if (!preset) return;

    // Apply preset filters to graph
    applyGraphFilters({
      categories: preset.categories,
      dateRange: preset.dateRange,
      tags: preset.tags,
      status: preset.status,
    });

    setActiveFilterPreset(presetId);
  };

  return (
    <div className="graph-filter-controls">
      <h4>Filter Presets</h4>
      {strategicBrain.graphFilterPresets.map(preset => (
        <Button
          key={preset.id}
          variant={activeFilterPreset === preset.id ? 'default' : 'ghost'}
          onClick={() => applyFilterPreset(preset.id)}
        >
          {preset.name}
        </Button>
      ))}
    </div>
  );
}
```

### 8.4 Document Reading Settings Consumption

Document reading workspace consumes App Settings for auto-save, table of contents, and reading preferences.

```typescript
// Document editor respects auto-save preferences
export function DocumentEditor({ documentId }) {
  const { documentReading } = useBizLabSettings();
  const [content, setContent] = useState('');
  const [lastSaved, setLastSaved] = useState(Date.now());

  useEffect(() => {
    if (!documentReading.autoSave.enabled) return;

    const interval = setInterval(() => {
      saveDocument(documentId, content);
      setLastSaved(Date.now());
    }, documentReading.autoSave.interval * 1000);

    return () => clearInterval(interval);
  }, [content, documentReading.autoSave]);

  return (
    <div className="document-editor">
      {documentReading.zenMode ? (
        <ZenModeEditor
          content={content}
          onChange={setContent}
          lineSpacing={documentReading.lineSpacing}
        />
      ) : (
        <StandardEditor
          content={content}
          onChange={setContent}
          showTableOfContents={documentReading.tableOfContentsVisible}
          lineSpacing={documentReading.lineSpacing}
        />
      )}

      {documentReading.autoSave.enabled && !documentReading.zenMode && (
        <div className="auto-save-indicator">
          Last saved {formatDistanceToNow(lastSaved)} ago
        </div>
      )}
    </div>
  );
}

// Table of contents visibility respects user preferences
export function DocumentLayout({ document }) {
  const { documentReading } = useBizLabSettings();

  if (documentReading.zenMode) {
    // Zen mode: full-screen editor only
    return <DocumentEditor documentId={document.id} />;
  }

  return (
    <div className="document-layout">
      {documentReading.tableOfContentsVisible && (
        <aside className="toc-sidebar">
          <TableOfContents document={document} />
        </aside>
      )}
      <main className="document-main">
        <DocumentEditor documentId={document.id} />
      </main>
    </div>
  );
}
```

### 8.5 Partner Collaboration Settings Impact

Biz Lab respects collaboration settings for strategy document reviews and decision approvals.

```typescript
// Strategy document approval uses collaboration settings
export function approveStrategy(docId: string) {
  const doc = getDocument(docId);
  const { reviewWorkflow } = useCollaborationSettings.getState().settings;

  // Check if approval chain is enforced
  const approvalChain = reviewWorkflow.autoAssign.crossSectionDecisions;

  if (approvalChain === 'both-required') {
    // Require both partners to approve
    const hasPartnerApproval = checkPartnerApproval(docId);

    if (!hasPartnerApproval) {
      showToast({
        title: 'Awaiting Partner Approval',
        description: 'Both partners must approve this strategy',
        variant: 'info',
      });

      // Send notification to partner
      const notificationRule = reviewWorkflow.notificationRules['strategy-approved'];
      sendNotification({
        type: 'strategy-approval-requested',
        documentName: doc.title,
        partnerId: getPartnerPartnerId(),
        urgent: notificationRule.urgent,
        method: notificationRule.method,
      });

      return;
    }
  }

  // Approve strategy
  updateDocument(docId, { status: 'approved', approvedAt: new Date().toISOString() });

  // Notify partner
  const notificationRule = reviewWorkflow.notificationRules['strategy-approved'];
  if (notificationRule) {
    sendNotification({
      type: 'strategy-approved',
      documentName: doc.title,
      partnerId: getPartnerPartnerId(),
      urgent: notificationRule.urgent,
      method: notificationRule.method,
    });
  }

  showToast({
    title: 'Strategy Approved',
    description: `${doc.title} has been approved`,
    variant: 'success',
  });
}
```

### 8.6 Cross-App Settings Synchronization

Biz Lab settings participate in cascade rules from App Settings system.

```typescript
// Example: Global font size cascades to document reading
export function handleGlobalFontSizeChange(multiplier: number) {
  const bizLabStore = useBizLabSettings.getState();

  // Update document reading font size
  bizLabStore.documentReading.fontSize = `${1 * multiplier}rem`;

  // Re-render documents with new font size
  window.dispatchEvent(new CustomEvent('global-font-size-changed', {
    detail: { multiplier }
  }));
}

// Example: Shared graph color scheme enforcement
export function enforceSharedGraphColorScheme() {
  const { shared } = useCollaborationSettings.getState().settings;
  const bizLabStore = useBizLabSettings.getState();

  if (shared.enforced) {
    // Override personal preference with team default
    bizLabStore.strategicBrain.graphColorScheme = shared.settings.graphColorScheme;

    showToast({
      title: 'Team Graph Colors Enforced',
      description: `Knowledge Graph using ${shared.settings.graphColorScheme} colors`,
      variant: 'info',
    });
  }
}
```

### 8.7 Export & Import Biz Lab Settings

Biz Lab settings can be exported and shared with partners.

```typescript
// Export Biz Lab-only settings
export function exportBizLabSettings() {
  const exportData = exportSettings('biz');

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vault-biz-lab-settings-${new Date().toISOString()}.json`;
  a.click();
  URL.revokeObjectURL(url);

  showToast({
    title: 'Settings Exported',
    description: 'Biz Lab settings saved to file',
    variant: 'success',
  });
}

// Import strategic brain configuration from partner
export function importBizLabSettings(file: File) {
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const importedData = JSON.parse(e.target?.result as string);

      if (!importedData.version || !importedData.settings) {
        throw new Error('Invalid settings file format');
      }

      // Show confirmation dialog
      showImportPreview(importedData, () => {
        importSettings(importedData, 'merge');

        showToast({
          title: 'Settings Imported',
          description: `Biz Lab settings from ${importedData.exportedBy} applied`,
          variant: 'success',
        });
      });
    } catch (error) {
      showToast({
        title: 'Import Failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  reader.readAsText(file);
}
```

**See:** `specifications/app-settings-system.md` for complete Settings Hub architecture (Workflow Profiles, Collaboration Settings, Cascade Engine, App-Specific Stores)
**See:** PRD #14 Sections 9-10 for Biz Lab settings product requirements

---

**Last Updated:** January 20, 2026
**Related Specifications:**
- `dashboard-system.md` - Mission Control Dashboard integration
- `collaboration-features.md` - Team coordination features
- `core-platform.md` - Platform infrastructure

**Note:** MDX rendering & Knowledge Graph (F2/F3) specifications are now consolidated into Part V of this document.

**Related PRDs:**
- `../prds/10-biz-lab-prd.md` - Product requirements
- `../prds/00-vault-overview-prd.md` - Vault ecosystem overview
- `../prds/11-products-lab-prd.md` - Products Lab integration
