# Dashboard System Specification

**Purpose:** Mission Control Dashboard architecture for Vault PM/PKM coordination
**Status:** 🚧 PLANNED (Sprint 1)
**Scope:** Widget system, State management, Gamification, Team collaboration

---

# Part I: Dashboard Architecture

## 1. Overview

The Mission Control Dashboard serves as the primary PM & PKM coordination hub for the 2-partner team. It provides a visual command center showing company state, progress, and next actions through a modular widget system.

**Location:** `/` (Dashboard landing page)

**Core Design Principles:**
- **Dashboard-First:** Single "Day-Start" screen with real-time visibility
- **Action-Oriented:** Left column for interactive tasks, right column for context
- **Modular Widgets:** Each widget is self-contained with clear responsibilities
- **Real-Time:** < 500ms latency for partner activity updates

---

## 2. Layout System

### 2.1 Two-Column Grid Layout

**Desktop Layout (Responsive breakpoint: > 1024px):**

```tsx
// components/dashboard/DashboardLayout.tsx
export function DashboardLayout() {
  return (
    <div className="grid grid-cols-[40%_60%] gap-6 p-6 min-h-screen">
      {/* Left Column: Interactive Stack */}
      <div className="flex flex-col gap-6 overflow-y-auto">
        <MyFocusWidget />
        <SmartRecommendationsWidget />
        <QuickActionsWidget />
        <TeamPulseWidget />
        <ReviewQueueWidget />
      </div>

      {/* Right Column: Mission Status (Full Height) */}
      <div className="sticky top-6 h-fit">
        <MissionStatusWidget />
      </div>
    </div>
  );
}
```

### 2.2 Layout Logic

**Left Column (40% width):**
- Interactive widgets requiring user action
- Vertical scroll for multiple widgets
- Examples: Check tasks, start reading, create docs, approve reviews

**Right Column (60% width):**
- Mission status visualization
- Sticky positioning (remains visible on scroll)
- Provides "big picture" context
- Examples: Sprint progress, portfolio health, achievements

**Mobile Layout (< 1024px):**
```tsx
// Single column stack
<div className="flex flex-col gap-6 p-4">
  <MissionStatusWidget /> {/* Move to top on mobile */}
  <MyFocusWidget />
  <TeamPulseWidget />
  {/* ... other widgets */}
</div>
```

---

# Part II: Widget System

## 3. Widget Architecture

### 3.1 Base Widget Interface

```typescript
// types/dashboard.ts
interface Widget {
  id: string;
  title: string;
  icon: string;
  position: 'left' | 'right';
  priority: number; // Sort order in column
  isCollapsible: boolean;
  defaultCollapsed: boolean;
}

interface WidgetData<T> {
  widget: Widget;
  data: T;
  loading: boolean;
  error: string | null;
  lastUpdated: Date;
}
```

### 3.2 Widget State Management (Zustand)

```typescript
// stores/dashboardStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DashboardState {
  // Widget visibility & collapse state
  widgetStates: Record<string, {
    visible: boolean;
    collapsed: boolean;
  }>;

  // Dashboard data cache
  myFocus: MyFocusData | null;
  teamPulse: TeamPulseData | null;
  missionStatus: MissionStatusData | null;

  // Actions
  toggleWidget: (widgetId: string) => void;
  collapseWidget: (widgetId: string, collapsed: boolean) => void;
  refreshWidget: (widgetId: string) => Promise<void>;
  refreshAll: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set, get) => ({
      widgetStates: {
        'my-focus': { visible: true, collapsed: false },
        'team-pulse': { visible: true, collapsed: false },
        'mission-status': { visible: true, collapsed: false },
        // ... other widgets
      },

      myFocus: null,
      teamPulse: null,
      missionStatus: null,

      toggleWidget: (widgetId) => {
        set((state) => ({
          widgetStates: {
            ...state.widgetStates,
            [widgetId]: {
              ...state.widgetStates[widgetId],
              visible: !state.widgetStates[widgetId].visible,
            },
          },
        }));
      },

      collapseWidget: (widgetId, collapsed) => {
        set((state) => ({
          widgetStates: {
            ...state.widgetStates,
            [widgetId]: {
              ...state.widgetStates[widgetId],
              collapsed,
            },
          },
        }));
      },

      refreshWidget: async (widgetId) => {
        // Fetch widget-specific data
        // Implementation depends on widget type
      },

      refreshAll: async () => {
        // Parallel fetch all widget data
        await Promise.all([
          get().refreshWidget('my-focus'),
          get().refreshWidget('team-pulse'),
          get().refreshWidget('mission-status'),
        ]);
      },
    }),
    { name: 'dashboard-state' }
  )
);
```

---

## 4. My Focus Widget

### 4.1 Data Model

```typescript
// types/dashboard.ts
interface MyFocusData {
  focusToday: FocusItem[];
  overdue: FocusItem[];
  recommendations: SmartRecommendation[];
  quickActions: QuickAction[];
  recentActions: RecentAction[];
}

interface FocusItem {
  id: string;
  type: 'task' | 'draft' | 'review';
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'high' | 'medium' | 'low';
  dueDate?: Date;
  source: string; // File path or source identifier
  metadata?: {
    assignee?: string;
    tags?: string[];
    estimatedTime?: number; // minutes
  };
}

interface SmartRecommendation {
  id: string;
  type: 'next-read' | 'unread-from-partner' | 'suggested-action';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  tags: string[];
  estimatedTime: number; // minutes
  deepLink: string;
  badges?: string[]; // e.g., "🎯 High Pri", "Strategy"
}

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  action: 'navigate' | 'modal' | 'api-call';
  target: string; // URL or function name
  metadata?: Record<string, any>;
}

interface RecentAction {
  id: string;
  action: string;
  timestamp: Date;
  actor: string; // Partner name
  relatedDoc?: string;
}
```

### 4.2 Component Implementation

```tsx
// components/dashboard/MyFocusWidget.tsx
'use client';

import { useDashboardStore } from '@/stores/dashboardStore';
import { useUser } from '@clerk/nextjs';

export function MyFocusWidget() {
  const { myFocus } = useDashboardStore();
  const { user } = useUser();

  const handleCheckTask = async (taskId: string) => {
    // Update task status in .md file
    await updateTaskStatus(taskId, 'completed');

    // Update user metadata
    await updateUserMetadata(user?.id, {
      vaultProgress: {
        ...user?.publicMetadata?.vaultProgress,
        tasksCompleted: (user?.publicMetadata?.vaultProgress?.tasksCompleted || 0) + 1,
      },
    });

    // Refresh widget data
    useDashboardStore.getState().refreshWidget('my-focus');
  };

  return (
    <div className="widget-card">
      <div className="widget-header">
        <h2 className="widget-title">⚡ My Focus</h2>
      </div>

      <div className="widget-body">
        {/* Your Focus Today */}
        <section className="mb-6">
          <h3 className="text-sm font-semibold mb-3">🎯 Your Focus Today:</h3>
          <div className="space-y-2">
            {myFocus?.focusToday.map((item) => (
              <FocusItemCard
                key={item.id}
                item={item}
                onCheck={() => handleCheckTask(item.id)}
              />
            ))}
          </div>
        </section>

        {/* Overdue Items */}
        {myFocus?.overdue.length > 0 && (
          <section className="mb-6">
            <h3 className="text-sm font-semibold text-red-500 mb-3">
              🔥 Overdue ({myFocus.overdue.length}):
            </h3>
            <div className="space-y-2">
              {myFocus.overdue.map((item) => (
                <FocusItemCard
                  key={item.id}
                  item={item}
                  variant="overdue"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
```

### 4.3 Data Integration

**Focus Items Sources:**
1. **Pinned Tasks:** Read from `docs/tasks/*.md` files
2. **Active Drafts:** Query Local Storage for unsaved Biz Lab Quick Pad content
3. **Assigned Reviews:** Check `reviewStatus` in document frontmatter

```typescript
// lib/dashboard/fetch-my-focus.ts
export async function fetchMyFocus(userId: string): Promise<MyFocusData> {
  // 1. Fetch tasks from markdown files
  const tasks = await fetchTasksFromMarkdown('docs/tasks/**/*.md');

  // 2. Get drafts from local storage
  const drafts = await fetchDraftsFromLocalStorage(userId);

  // 3. Aggregate reviews from .md files
  const reviews = await aggregateReviewRequests([
    'content/biz/**/*.md',
    'content/products/**/*.md',
  ]);

  // 4. Generate smart recommendations
  const recommendations = await generateSmartRecommendations(userId, {
    docsRead: user.publicMetadata.vaultProgress?.docsRead || [],
    interests: extractInterestsFromActivity(userId),
  });

  return {
    focusToday: [...tasks, ...drafts, ...reviews],
    overdue: tasks.filter(t => isOverdue(t.dueDate)),
    recommendations,
    quickActions: getQuickActions(),
    recentActions: await fetchRecentActions(userId, 5),
  };
}
```

### 4.4 Smart Recommendations Engine

```typescript
// lib/dashboard/recommendations.ts
interface RecommendationContext {
  docsRead: string[];
  interests: string[];
  partnerActivity: PartnerActivity[];
  currentSprint?: string;
}

export async function generateSmartRecommendations(
  userId: string,
  context: RecommendationContext
): Promise<SmartRecommendation[]> {
  const recommendations: SmartRecommendation[] = [];

  // 1. Next Read (based on reading history)
  const nextRead = await suggestNextRead(context.docsRead, context.interests);
  if (nextRead) {
    recommendations.push({
      id: 'next-read-1',
      type: 'next-read',
      title: `Next Read: ${nextRead.title}`,
      description: nextRead.description,
      priority: 'high',
      tags: nextRead.tags,
      estimatedTime: nextRead.readingTime,
      deepLink: `/biz/${nextRead.slug}`,
    });
  }

  // 2. Unread from Partner
  const partnerDocs = context.partnerActivity
    .filter(a => a.type === 'created' && !context.docsRead.includes(a.docPath));

  if (partnerDocs.length > 0) {
    const latest = partnerDocs[0];
    recommendations.push({
      id: 'partner-unread-1',
      type: 'unread-from-partner',
      title: `Unread from ${latest.partnerName}: ${latest.title}`,
      description: latest.description,
      priority: 'high',
      tags: ['Team', latest.category],
      estimatedTime: latest.estimatedTime,
      deepLink: latest.deepLink,
      badges: ['🎯 High Pri'],
    });
  }

  return recommendations.sort((a, b) =>
    priorityWeight[a.priority] - priorityWeight[b.priority]
  );
}
```

---

## 5. Team Pulse Widget

### 5.1 Data Model

```typescript
// types/dashboard.ts
interface TeamPulseData {
  partnerStatus: PartnerStatus;
  activityStream: ActivityItem[];
  reviewQueue: ReviewQueue;
}

interface PartnerStatus {
  partnerId: string;
  partnerName: string;
  online: boolean;
  lastSeen: Date;
  currentActivity?: {
    type: 'viewing' | 'editing' | 'reviewing';
    document: string;
    deepLink: string;
  };
}

interface ActivityItem {
  id: string;
  partnerId: string;
  partnerName: string;
  type: 'created' | 'edited' | 'reviewed' | 'promoted' | 'archived';
  target: string; // Document title
  deepLink: string;
  timestamp: Date;
  metadata?: {
    badge?: string; // e.g., "🔥", "⭐"
    isHighPriority?: boolean;
  };
}

interface ReviewQueue {
  inbound: ReviewRequest[];
  outbound: ReviewRequest[];
}

interface ReviewRequest {
  id: string;
  documentTitle: string;
  documentPath: string;
  requestedBy: string;
  requestedAt: Date;
  status: 'pending' | 'approved' | 'changes-requested';
  isStale: boolean; // > 2 days old
}
```

### 5.2 Real-Time Integration (Pusher)

```typescript
// lib/realtime/pusher-client.ts
import Pusher from 'pusher-js';

export function initializePusherClient(userId: string) {
  const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  });

  const channel = pusher.subscribe(`vault-${userId}`);

  // Listen for partner activity
  channel.bind('partner-activity', (data: ActivityItem) => {
    useDashboardStore.getState().addActivityItem(data);
  });

  // Listen for partner presence
  channel.bind('partner-presence', (data: PartnerStatus) => {
    useDashboardStore.getState().updatePartnerStatus(data);
  });

  return pusher;
}
```

### 5.3 Component Implementation

```tsx
// components/dashboard/TeamPulseWidget.tsx
'use client';

import { useEffect } from 'react';
import { useDashboardStore } from '@/stores/dashboardStore';
import { initializePusherClient } from '@/lib/realtime/pusher-client';

export function TeamPulseWidget() {
  const { teamPulse } = useDashboardStore();
  const { user } = useUser();

  useEffect(() => {
    const pusher = initializePusherClient(user?.id);
    return () => pusher.disconnect();
  }, [user?.id]);

  return (
    <div className="widget-card">
      <div className="widget-header">
        <h2 className="widget-title">👥 Team Pulse</h2>
      </div>

      <div className="widget-body">
        {/* Partner Status */}
        <section className="mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${
              teamPulse?.partnerStatus.online ? 'bg-green-500' : 'bg-gray-500'
            }`} />
            <div>
              <p className="font-semibold">
                {teamPulse?.partnerStatus.partnerName}
                {teamPulse?.partnerStatus.online ? ' (Online)' : ' (Offline)'}
              </p>
              {teamPulse?.partnerStatus.currentActivity && (
                <p className="text-sm text-slate-400">
                  → Viewing: {teamPulse.partnerStatus.currentActivity.document}
                  <button
                    className="ml-2 text-orange-500 hover:underline"
                    onClick={() => window.location.href = teamPulse.partnerStatus.currentActivity?.deepLink}
                  >
                    [Jump to Doc]
                  </button>
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-6">
          <h3 className="text-sm font-semibold mb-3">Recent Activity:</h3>
          <div className="space-y-3">
            {teamPulse?.activityStream.slice(0, 5).map((item) => (
              <ActivityItemCard key={item.id} item={item} />
            ))}
          </div>
          <button className="btn-secondary w-full mt-3">
            [View All Activity]
          </button>
        </section>
      </div>
    </div>
  );
}
```

---

## 6. Mission Status Widget

### 6.1 Data Model

```typescript
// types/dashboard.ts
interface MissionStatusData {
  sprintVelocity: SprintVelocity;
  portfolioMap: PortfolioMap;
  achievements: AchievementTracker;
}

interface SprintVelocity {
  sprintNumber: number;
  currentWeek: number;
  currentDay: number;
  totalDays: number;
  completedPoints: number;
  totalPoints: number;
  percentComplete: number;
  isOnTrack: boolean;
  idealProgress: number; // Expected progress at this point
}

interface PortfolioMap {
  categories: PortfolioCategory[];
}

interface PortfolioCategory {
  name: string;
  color: string; // e.g., "blue" for Strategy, "orange" for Products
  items: PortfolioItem[];
}

interface PortfolioItem {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  icon: string; // '✓', '🚧', '⏳'
  deepLink: string;
}

interface AchievementTracker {
  achievements: Achievement[];
  totalUnlocked: number;
  totalAvailable: number;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number; // 0-100
  target: number;
  current: number;
  unlocked: boolean;
  unlockedAt?: Date;
}
```

### 6.2 Sprint Velocity Component

```tsx
// components/dashboard/SprintVelocityCard.tsx
export function SprintVelocityCard({ velocity }: { velocity: SprintVelocity }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold mb-3">Sprint Velocity</h3>

      <div className="mb-2">
        <p className="text-sm text-slate-400">
          Week {velocity.currentWeek} - Day {velocity.currentDay} of {velocity.totalDays}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-8 bg-slate-800 rounded-lg overflow-hidden mb-2">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500"
          style={{ width: `${velocity.percentComplete}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
          {velocity.percentComplete}%
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <span>Completed: {velocity.completedPoints} / {velocity.totalPoints} points</span>
        <span className={velocity.isOnTrack ? 'text-green-500' : 'text-yellow-500'}>
          {velocity.isOnTrack ? 'On track ✓' : 'Behind schedule'}
        </span>
      </div>
    </div>
  );
}
```

### 6.3 Portfolio Map Visualization

```tsx
// components/dashboard/PortfolioMap.tsx
import Mermaid from '@/components/shared/Mermaid';

export function PortfolioMap({ portfolio }: { portfolio: PortfolioMap }) {
  // Generate Mermaid diagram from portfolio data
  const mermaidCode = `
    graph TD
    ${portfolio.categories.map(cat => `
      ${cat.name}[${cat.name}]
      style ${cat.name} fill:${cat.color}
      ${cat.items.map(item => `
        ${cat.name} --> ${item.id}[${item.title} ${item.icon}]
      `).join('\n')}
    `).join('\n')}
  `;

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold mb-3">Portfolio Map</h3>

      <div className="bg-slate-900 rounded-lg p-4">
        <Mermaid code={mermaidCode} />
        <p className="text-xs text-slate-500 text-center mt-3">
          Click any item to navigate
        </p>
      </div>
    </div>
  );
}
```

### 6.4 Achievement Tracker with Gamification

```tsx
// components/dashboard/AchievementTracker.tsx
'use client';

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

export function AchievementTracker({ achievements }: { achievements: AchievementTracker }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [recentlyUnlocked, setRecentlyUnlocked] = useState<Achievement | null>(null);

  useEffect(() => {
    // Check if any achievement was just unlocked (within last 5 seconds)
    const justUnlocked = achievements.achievements.find(a =>
      a.unlocked && a.unlockedAt &&
      Date.now() - new Date(a.unlockedAt).getTime() < 5000
    );

    if (justUnlocked) {
      setRecentlyUnlocked(justUnlocked);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [achievements]);

  return (
    <div className="mb-6">
      {showConfetti && <Confetti />}

      <h3 className="text-sm font-semibold mb-3">Achievement Tracker</h3>

      <div className="space-y-4">
        {achievements.achievements.slice(0, 3).map((achievement) => (
          <div key={achievement.id} className="bg-slate-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold flex items-center gap-2">
                {achievement.icon} {achievement.title}
              </h4>
              {achievement.unlocked && (
                <span className="text-green-500 text-sm">Unlocked! 🎉</span>
              )}
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-4 bg-slate-800 rounded overflow-hidden mb-2">
              <div
                className={`absolute left-0 top-0 h-full transition-all duration-500 ${
                  achievement.unlocked ? 'bg-green-500' : 'bg-orange-500'
                }`}
                style={{ width: `${achievement.progress}%` }}
              />
            </div>

            <p className="text-xs text-slate-400">
              {achievement.unlocked
                ? `Unlocked on ${new Date(achievement.unlockedAt!).toLocaleDateString()}`
                : `${achievement.current}/${achievement.target} - ${achievement.description}`
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 7. Review Queue Widget

### 7.1 Data Aggregation

```typescript
// lib/dashboard/fetch-review-queue.ts
export async function fetchReviewQueue(userId: string): Promise<ReviewQueue> {
  // 1. Find all .md files with reviewStatus frontmatter
  const allDocs = await getAllMarkdownFiles([
    'content/biz/**/*.md',
    'content/products/**/*.md',
  ]);

  // 2. Parse frontmatter
  const docsWithReviews = allDocs
    .map(doc => ({
      ...doc,
      frontmatter: parseFrontmatter(doc.content),
    }))
    .filter(doc => doc.frontmatter.needs_review === true);

  // 3. Categorize inbound vs outbound
  const inbound = docsWithReviews.filter(
    doc => doc.frontmatter.reviewers?.includes(userId)
  );

  const outbound = docsWithReviews.filter(
    doc => doc.frontmatter.author === userId
  );

  return {
    inbound: inbound.map(toReviewRequest),
    outbound: outbound.map(toReviewRequest),
  };
}

function toReviewRequest(doc: any): ReviewRequest {
  const requestedAt = new Date(doc.frontmatter.review_requested_at);
  const isStale = Date.now() - requestedAt.getTime() > 2 * 24 * 60 * 60 * 1000; // > 2 days

  return {
    id: doc.id,
    documentTitle: doc.frontmatter.title,
    documentPath: doc.path,
    requestedBy: doc.frontmatter.author,
    requestedAt,
    status: doc.frontmatter.review_status || 'pending',
    isStale,
  };
}
```

### 7.2 Component Implementation

```tsx
// components/dashboard/ReviewQueueWidget.tsx
export function ReviewQueueWidget() {
  const { reviewQueue } = useDashboardStore();

  const handleApprove = async (reviewId: string) => {
    await updateReviewStatus(reviewId, 'approved');
    useDashboardStore.getState().refreshWidget('review-queue');
  };

  const handleRequestChanges = async (reviewId: string) => {
    await updateReviewStatus(reviewId, 'changes-requested');
    // TODO: Open comment modal
  };

  return (
    <div className="widget-card">
      <div className="widget-header">
        <h2 className="widget-title">📋 Review Queue</h2>
      </div>

      <div className="widget-body">
        {/* Inbound Reviews */}
        <section className="mb-6">
          <h3 className="text-sm font-semibold mb-3">
            ⚠️ Inbound ({reviewQueue?.inbound.length || 0}):
          </h3>
          <div className="space-y-3">
            {reviewQueue?.inbound.map((review) => (
              <div key={review.id} className="bg-slate-900 rounded-lg p-3">
                <p className="font-semibold mb-1">{review.documentTitle}</p>
                <p className="text-xs text-slate-400 mb-2">
                  from {review.requestedBy}
                  {review.isStale && <span className="text-yellow-500 ml-2">⏰ Stale</span>}
                </p>
                <div className="flex gap-2">
                  <button
                    className="btn-primary-sm"
                    onClick={() => handleApprove(review.id)}
                  >
                    [Approve]
                  </button>
                  <button
                    className="btn-secondary-sm"
                    onClick={() => handleRequestChanges(review.id)}
                  >
                    [Changes]
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outbound Reviews */}
        <section>
          <h3 className="text-sm font-semibold mb-3">
            Outbound ({reviewQueue?.outbound.length || 0}):
          </h3>
          <div className="space-y-3">
            {reviewQueue?.outbound.map((review) => (
              <div key={review.id} className="bg-slate-900 rounded-lg p-3">
                <p className="font-semibold mb-1">{review.documentTitle}</p>
                <p className="text-xs text-slate-400">
                  ⏳ Awaiting {review.requestedBy}
                </p>
                <button className="btn-secondary-sm mt-2">
                  [Nudge]
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
```

---

## 8. Data Persistence & Sync

### 8.1 User Metadata Schema (Clerk)

```typescript
// types/user-metadata.ts
interface VaultUserMetadata {
  vaultAccess: boolean;
  vaultRole: 'admin' | 'editor' | 'viewer';
  sections: {
    products: boolean;
    biz: boolean;
    settings: boolean;
  };
  vaultProgress: {
    docsRead: string[]; // Array of doc paths
    achievements: string[]; // Array of achievement IDs
    readCount: number;
    experimentsCreated: number;
    graphUsageCount: number;
    sprintProgress: {
      week: number;
      docsCompleted: number;
    };
  };
}
```

### 8.2 Metadata Update API

```typescript
// lib/user/update-metadata.ts
import { clerkClient } from '@clerk/nextjs';

export async function updateUserMetadata(
  userId: string,
  updates: Partial<VaultUserMetadata>
) {
  await clerkClient.users.updateUser(userId, {
    publicMetadata: {
      ...updates,
    },
  });
}

// Helper: Mark document as read
export async function markDocAsRead(userId: string, docPath: string) {
  const user = await clerkClient.users.getUser(userId);
  const currentDocsRead = user.publicMetadata?.vaultProgress?.docsRead || [];

  if (!currentDocsRead.includes(docPath)) {
    await updateUserMetadata(userId, {
      vaultProgress: {
        ...user.publicMetadata?.vaultProgress,
        docsRead: [...currentDocsRead, docPath],
        readCount: currentDocsRead.length + 1,
      },
    });
  }
}

// Helper: Unlock achievement
export async function unlockAchievement(userId: string, achievementId: string) {
  const user = await clerkClient.users.getUser(userId);
  const currentAchievements = user.publicMetadata?.vaultProgress?.achievements || [];

  if (!currentAchievements.includes(achievementId)) {
    await updateUserMetadata(userId, {
      vaultProgress: {
        ...user.publicMetadata?.vaultProgress,
        achievements: [...currentAchievements, achievementId],
      },
    });

    // Trigger confetti celebration
    return { newlyUnlocked: true };
  }

  return { newlyUnlocked: false };
}
```

---

## 9. Performance Optimization

### 9.1 Data Fetching Strategy

**Server-Side Rendering (SSR):**
```tsx
// app/page.tsx (Dashboard)
import { fetchDashboardData } from '@/lib/dashboard/fetch-dashboard-data';

export default async function DashboardPage() {
  const { user } = await currentUser();

  // Fetch all widget data in parallel
  const dashboardData = await fetchDashboardData(user.id);

  return (
    <DashboardLayout initialData={dashboardData} />
  );
}
```

**Parallel Data Fetching:**
```typescript
// lib/dashboard/fetch-dashboard-data.ts
export async function fetchDashboardData(userId: string) {
  const [myFocus, teamPulse, missionStatus] = await Promise.all([
    fetchMyFocus(userId),
    fetchTeamPulse(userId),
    fetchMissionStatus(userId),
  ]);

  return {
    myFocus,
    teamPulse,
    missionStatus,
  };
}
```

### 9.2 Caching Strategy

**Client-Side Cache (Zustand Persist):**
- Widget collapse states
- User preferences
- Last refresh timestamps

**Server-Side Cache:**
```typescript
// Use Next.js cache for expensive operations
export const fetchReviewQueue = cache(async (userId: string) => {
  // ... implementation
});

// Revalidate cache every 5 minutes
export const revalidate = 300;
```

### 9.3 Real-Time Updates

**WebSocket Strategy (Pusher):**
- Partner presence: Immediate updates
- Activity feed: < 500ms latency
- Review status: Real-time notifications

**Polling Fallback:**
```typescript
// Fallback to polling if WebSocket fails
useEffect(() => {
  if (!pusherConnected) {
    const interval = setInterval(() => {
      useDashboardStore.getState().refreshWidget('team-pulse');
    }, 30000); // Poll every 30 seconds

    return () => clearInterval(interval);
  }
}, [pusherConnected]);
```

---

## 10. Error Handling

### 10.1 Widget Error States

```tsx
// components/dashboard/WidgetErrorBoundary.tsx
export function WidgetErrorBoundary({
  children,
  widgetName
}: {
  children: React.ReactNode;
  widgetName: string;
}) {
  return (
    <ErrorBoundary
      fallback={
        <div className="widget-card">
          <div className="widget-header">
            <h2 className="widget-title">{widgetName}</h2>
          </div>
          <div className="widget-body flex items-center justify-center h-32">
            <p className="text-slate-500">Failed to load widget</p>
            <button
              className="btn-secondary ml-3"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
```

### 10.2 Graceful Degradation

```tsx
// Handle missing data gracefully
export function MyFocusWidget() {
  const { myFocus, loading, error } = useDashboardStore();

  if (loading) {
    return <WidgetSkeleton title="⚡ My Focus" />;
  }

  if (error) {
    return <WidgetError title="⚡ My Focus" error={error} />;
  }

  if (!myFocus || myFocus.focusToday.length === 0) {
    return (
      <div className="widget-card">
        <div className="widget-header">
          <h2 className="widget-title">⚡ My Focus</h2>
        </div>
        <div className="widget-body">
          <p className="text-slate-500 text-center py-8">
            No tasks for today. Great job! 🎉
          </p>
        </div>
      </div>
    );
  }

  // ... render normal widget
}
```

---

## 11. Testing Strategy

### 11.1 Unit Tests

```typescript
// __tests__/lib/dashboard/fetch-my-focus.test.ts
import { fetchMyFocus } from '@/lib/dashboard/fetch-my-focus';

describe('fetchMyFocus', () => {
  it('should aggregate tasks, drafts, and reviews', async () => {
    const result = await fetchMyFocus('user-123');

    expect(result.focusToday).toHaveLength(5);
    expect(result.overdue).toHaveLength(1);
    expect(result.recommendations).toHaveLength(2);
  });

  it('should handle missing data gracefully', async () => {
    const result = await fetchMyFocus('new-user');

    expect(result.focusToday).toEqual([]);
    expect(result.recommendations).toEqual([]);
  });
});
```

### 11.2 Integration Tests

```typescript
// __tests__/components/dashboard/DashboardLayout.test.tsx
import { render, screen } from '@testing-library/react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';

describe('DashboardLayout', () => {
  it('should render all widgets', () => {
    render(<DashboardLayout />);

    expect(screen.getByText('⚡ My Focus')).toBeInTheDocument();
    expect(screen.getByText('👥 Team Pulse')).toBeInTheDocument();
    expect(screen.getByText('📈 Mission Status')).toBeInTheDocument();
  });

  it('should handle widget collapse', async () => {
    const { user } = render(<DashboardLayout />);

    const collapseButton = screen.getByTestId('my-focus-collapse');
    await user.click(collapseButton);

    expect(screen.queryByText('Your Focus Today')).not.toBeVisible();
  });
});
```

---

## 11. Global Navigation Integration

### 11.1 Command Palette Integration

**Dashboard-Specific Quick Actions:**

```typescript
// lib/dashboard/command-palette-actions.ts
import { useCommandPalette } from '@/stores/command-palette-store';

export function useDashboardCommands() {
  const { registerContextualActions } = useCommandPalette();

  useEffect(() => {
    registerContextualActions([
      {
        id: 'dashboard-start-sprint',
        label: 'Start New Sprint',
        icon: 'PlayIcon',
        action: () => startSprint(),
        shortcut: 'Cmd+Shift+S',
        category: 'actions'
      },
      {
        id: 'dashboard-view-achievements',
        label: 'View Achievements',
        icon: 'TrophyIcon',
        action: () => router.push('/achievements'),
        badge: unlockedAchievementsCount,
        category: 'navigation'
      },
      {
        id: 'dashboard-toggle-widgets',
        label: 'Customize Widgets',
        icon: 'SettingsIcon',
        action: () => openWidgetSettings(),
        category: 'actions'
      },
      {
        id: 'dashboard-view-activity',
        label: 'Team Activity Feed',
        icon: 'ActivityIcon',
        action: () => focusWidget('activity-feed'),
        category: 'navigation'
      },
      {
        id: 'dashboard-review-queue',
        label: 'Review Queue',
        icon: 'InboxIcon',
        action: () => router.push('/reviews'),
        badge: pendingReviewsCount,
        category: 'navigation'
      }
    ]);

    return () => clearContextualActions();
  }, [unlockedAchievementsCount, pendingReviewsCount]);
}
```

**Widget Quick Access via Command Palette:**
- Search for widgets by name (e.g., "My Focus" → Focus widget)
- Jump to specific widget section
- Quick actions for widget data (e.g., "Mark task complete")

### 11.2 Global Navbar Badge Integration

**Real-Time Badge Updates:**

```typescript
// components/dashboard/NavbarBadgeProvider.tsx
import { useNavbarStore } from '@/stores/navbar-store';
import { useReviewQueue } from '@/lib/reviews/use-review-queue';
import { useSprintProgress } from '@/lib/dashboard/use-sprint-progress';
import { useAchievements } from '@/lib/gamification/use-achievements';

export function NavbarBadgeProvider() {
  const { updateQuickActions } = useNavbarStore();
  const { inbound } = useReviewQueue();
  const { currentWeek, totalWeeks } = useSprintProgress();
  const { unlockedCount, totalCount } = useAchievements();

  useEffect(() => {
    // Update navbar with dashboard-specific quick actions
    updateQuickActions([
      {
        id: 'sprint-progress',
        label: `Week ${currentWeek}/${totalWeeks}`,
        icon: 'CalendarIcon',
        action: () => router.push('/?focus=sprint'),
        tooltip: 'Sprint progress'
      },
      {
        id: 'review-queue',
        label: 'Reviews',
        icon: 'InboxIcon',
        action: () => router.push('/reviews'),
        badge: inbound.length, // Show pending count
        tooltip: `${inbound.length} pending reviews`
      },
      {
        id: 'achievements',
        label: 'Achievements',
        icon: 'TrophyIcon',
        action: () => router.push('/achievements'),
        badge: unlockedCount,
        tooltip: `${unlockedCount}/${totalCount} unlocked`,
        active: unlockedCount > 0
      }
    ]);
  }, [inbound.length, currentWeek, unlockedCount]);

  return null; // Provider component, no UI
}
```

### 11.3 Keyboard Shortcuts for Dashboard

**Dashboard-Specific Shortcuts:**

| Shortcut | Action | Description |
|----------|--------|-------------|
| `Cmd+1` | Jump to Dashboard | Navigate to Mission Control |
| `Cmd+Shift+S` | Start Sprint | Begin new sprint cycle |
| `Cmd+Shift+R` | Review Queue | Open review queue |
| `Cmd+Shift+A` | Achievements | View achievements panel |
| `Cmd+/` | Widget Help | Show widget cheatsheet |
| `Cmd+D` | Toggle Dark Mode | Switch theme (via Studio Tuner) |

**Widget Focus Shortcuts:**
- `Cmd+Opt+1` → Focus: My Focus widget
- `Cmd+Opt+2` → Focus: Activity Feed widget
- `Cmd+Opt+3` → Focus: Review Queue widget

**See:** `global-navigation-system.md` #1 for Command Palette architecture and #4 for keyboard shortcuts implementation

---

## 12. Future Enhancements

### 12.1 Planned Features (Sprint 3+)

- **Custom Widget Order:** Drag-and-drop reordering
- **Widget Marketplace:** Install community-built widgets
- **Advanced Filters:** Filter activity by partner, date, category
- **Export Reports:** Generate weekly summaries
- **Mobile Optimizations:** Native mobile app support

### 12.2 Performance Targets

- **Initial Load:** < 1s (SSR)
- **Widget Refresh:** < 300ms
- **Real-Time Updates:** < 500ms latency
- **Bundle Size:** < 50KB per widget

---

# Part XIII: Studio Tuner Integration

## 13. Widget Customization and Theme Consumption

### 13.1 Layout Preset Control

Studio Tuner (PRD #13) provides Layout Presets that control dashboard widget order, visibility, and grid layout.

**Widget Reordering:**
```typescript
// Studio Tuner applies widget order from layout preset
interface LayoutPresetForDashboard {
  widgetOrder: string[]; // ['my-focus', 'team-pulse', 'mission-status']
  columnLayout: '1-column' | '2-column' | '3-column';
  hiddenWidgets: string[]; // Widgets to hide in specific modes (e.g., Focus Mode)
}

// Dashboard applies layout preset
export function useDashboardLayout() {
  const { currentLayout } = useLayoutStore();

  useEffect(() => {
    const { widgetOrder, columnLayout, hiddenWidgets } = currentLayout.dashboard;

    // Apply widget order
    setWidgets(widgetOrder.map(id => allWidgets[id]).filter(Boolean));

    // Apply column layout
    setGridColumns(columnLayout === '1-column' ? 1 : columnLayout === '3-column' ? 3 : 2);

    // Hide widgets based on preset
    setVisibleWidgets(widgetOrder.filter(id => !hiddenWidgets.includes(id)));
  }, [currentLayout]);
}
```

**Preset Examples:**

**Developer Mode:**
```typescript
{
  dashboard: {
    widgetOrder: ['team-pulse', 'my-focus', 'mission-status'], // Team first
    columnLayout: '2-column',
    hiddenWidgets: []
  }
}
```

**Focus Mode:**
```typescript
{
  dashboard: {
    widgetOrder: ['my-focus', 'mission-status'], // Minimal
    columnLayout: '1-column',
    hiddenWidgets: ['team-pulse'] // Hide distractions
  }
}
```

### 13.2 Theme Consumption

Dashboard widgets consume Studio Tuner theme settings for colors, typography, and visual styling.

```typescript
// Widget theme consumption
export function MyFocusWidget() {
  const { currentTheme } = useThemeStudio();

  return (
    <div
      className="widget"
      style={{
        backgroundColor: currentTheme.colors.surface,
        borderColor: currentTheme.colors.border,
        borderRadius: currentTheme.borderRadius.large,
        boxShadow: currentTheme.elevation.medium,
        fontFamily: currentTheme.typography.fontFamily.sans.join(', '),
      }}
    >
      <h2
        style={{
          color: currentTheme.colors.text.primary,
          fontSize: `calc(1.25rem * ${currentTheme.typography.fontSize.multiplier})`,
        }}
      >
        My Focus
      </h2>

      {/* Task items with theme colors */}
      {tasks.map(task => (
        <div
          key={task.id}
          style={{
            borderLeftColor: task.active ? currentTheme.colors.primary : 'transparent',
            borderLeftWidth: task.active ? '4px' : '0',
          }}
        >
          <input
            type="checkbox"
            style={{
              accentColor: currentTheme.colors.accent, // Theme accent for checkbox
            }}
          />
          {task.title}
        </div>
      ))}
    </div>
  );
}

// Sprint progress bar with theme colors
export function MissionStatusWidget() {
  const { currentTheme } = useThemeStudio();

  return (
    <div className="widget">
      <h3>Sprint Progress</h3>
      <div
        className="progress-bar"
        style={{
          backgroundColor: currentTheme.colors.surface,
          borderColor: currentTheme.colors.border,
        }}
      >
        <div
          className="progress-fill"
          style={{
            backgroundColor: currentTheme.colors.primary,
            width: `${sprintProgress}%`,
          }}
        />
        <span
          className="progress-text"
          style={{
            color: currentTheme.colors.text.primary,
            fontSize: `calc(0.875rem * ${currentTheme.typography.fontSize.multiplier})`,
          }}
        >
          {sprintProgress}%
        </span>
      </div>
    </div>
  );
}
```

### 13.3 Animation and Performance

Dashboard widgets respect Studio Tuner animation settings for optimal performance.

```typescript
// Widget animations respect speed multiplier
export function ActivityFeedWidget() {
  const { config: animConfig } = useAnimationStore();

  return (
    <div className="widget">
      {activities.map(activity => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: animConfig.reducedMotion ? 0.01 : 0.3 * animConfig.speedMultiplier,
            ease: animConfig.transitionStyle,
          }}
        >
          {activity.content}
        </motion.div>
      ))}
    </div>
  );
}

// Achievement confetti respects animation overrides
export function AchievementCelebration() {
  const { config: animConfig } = useAnimationStore();

  // Don't show confetti if disabled or reduced motion enabled
  if (!animConfig.overrides.confetti || animConfig.reducedMotion) {
    return <SimpleAchievementBadge />;
  }

  return <ConfettiCelebration speedMultiplier={animConfig.speedMultiplier} />;
}
```

### 13.4 Accessibility Enhancements

Dashboard widgets adapt to Studio Tuner accessibility settings.

```typescript
// High contrast mode for dashboard widgets
export function TeamPulseWidget() {
  const { config: a11yConfig } = useAccessibilityStore();
  const { currentTheme } = useThemeStudio();

  return (
    <div
      className="widget"
      style={{
        // High contrast mode overrides
        ...(a11yConfig.highContrast && {
          backgroundColor: '#ffffff',
          border: '2px solid #000000',
          color: '#000000',
        }),

        // Text scaling
        fontSize: `calc(1rem * ${a11yConfig.textScaling.multiplier})`,
      }}
    >
      {/* Widget content with accessible focus indicators */}
      <button
        style={{
          outline: a11yConfig.highContrast
            ? `${a11yConfig.focusIndicator.size}px solid ${currentTheme.colors.primary}`
            : 'none',
          minWidth: a11yConfig.largerClickTargets ? '48px' : '36px',
          minHeight: a11yConfig.largerClickTargets ? '48px' : '36px',
        }}
      >
        View All Activities
      </button>
    </div>
  );
}

// Screen reader announcements for dynamic content
export function DashboardUpdates() {
  const { config: a11yConfig } = useAccessibilityStore();

  return (
    <>
      {a11yConfig.screenReader.announceChanges && (
        <div role="status" aria-live="polite" className="sr-only">
          {latestUpdate && `New update: ${latestUpdate.message}`}
        </div>
      )}
    </>
  );
}
```

### 13.5 Widget Grid Responsive Layout

Dashboard grid layout adapts to Studio Tuner layout presets and panel positions.

```typescript
// Responsive grid based on layout preset and panel positions
export function DashboardWidgetGrid() {
  const { currentLayout } = useLayoutStore();
  const [gridColumns, setGridColumns] = useState(2);

  useEffect(() => {
    const { columnLayout } = currentLayout.dashboard;
    const { navbar, sidebar } = currentLayout.panels;

    // Base columns from layout preset
    let columns = columnLayout === '1-column' ? 1 : columnLayout === '3-column' ? 3 : 2;

    // Adjust for navbar position (top/bottom = more horizontal space)
    if (navbar.position === 'top' || navbar.position === 'bottom') {
      columns = Math.min(columns + 1, 3);
    }

    // Adjust for sidebar hidden (more space available)
    if (sidebar.position === 'hidden') {
      columns = Math.min(columns + 1, 3);
    }

    setGridColumns(columns);
  }, [currentLayout]);

  return (
    <div
      className="dashboard-grid"
      style={{
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gap: currentLayout.panels.content.padding,
      }}
    >
      {visibleWidgets.map(widget => (
        <WidgetContainer key={widget.id} widget={widget} />
      ))}
    </div>
  );
}
```

**See:** `specifications/studio-tuner-system.md` for complete theme, layout, animation, and accessibility architecture
**See:** PRD #13 Section 5 for Layout Preset System and widget reordering workflows

---

# Part XIV: App Settings Integration

## 14. Settings-Driven Dashboard Configuration

### 14.1 Workflow Profile Application

Dashboard respects Workflow Profiles from App Settings system, automatically reconfiguring widgets based on active profile.

```typescript
// Dashboard listens for profile changes
export function DashboardContainer() {
  const { activeProfile, profiles } = useWorkflowProfiles();
  const dashboardSettings = useDashboardSettings();

  useEffect(() => {
    if (!activeProfile) return;

    const profile = profiles.find(p => p.id === activeProfile);
    if (!profile) return;

    // Apply profile's dashboard settings
    const { missionControl } = profile.settings;

    // Update widget visibility
    dashboardSettings.updateWidgetVisibility(missionControl.widgetVisibility);
    dashboardSettings.updateWidgetOrder(missionControl.widgetOrder);

    // Update notification preferences
    dashboardSettings.updateNotificationSettings(missionControl.notifications);

    // Update quick actions scope
    dashboardSettings.updateQuickActionsScope(missionControl.quickActionsScope);
  }, [activeProfile, profiles]);

  return <Dashboard />;
}
```

**Profile-Specific Examples:**

**Focus Mode Profile:**
```typescript
{
  missionControl: {
    widgetVisibility: ['my-focus', 'current-sprint'], // Hide distractions
    widgetOrder: ['my-focus', 'current-sprint'],
    notifications: { enabled: false, exceptions: ['critical-alerts'] },
    quickActionsScope: 'current-app', // Don't search across apps
  }
}
```
**Result:**
- Only "My Focus" and "Current Sprint" widgets visible
- All notifications muted except critical alerts
- Quick actions limited to current app

**Collaboration Mode Profile:**
```typescript
{
  missionControl: {
    widgetVisibility: ['my-focus', 'team-pulse', 'mission-status', 'review-queue'],
    widgetOrder: ['team-pulse', 'my-focus', 'mission-status', 'review-queue'],
    notifications: { enabled: true, exceptions: [] },
    quickActionsScope: 'all-apps', // Search everywhere
  }
}
```
**Result:**
- All widgets visible with Team Pulse prioritized
- All notifications enabled
- Quick actions search across all apps

### 14.2 Cross-App Settings Synchronization

Dashboard settings participate in cascade rules from App Settings system.

```typescript
// Example: Global notification mute cascades to dashboard
export function handleGlobalNotificationMute(enabled: boolean) {
  const dashboardStore = useDashboardSettings.getState();
  const collaborationStore = useCollaborationSettings.getState();

  if (enabled) {
    // Mute dashboard notifications
    dashboardStore.updateNotificationSettings({
      enabled: false,
      exceptions: ['critical-alerts'],
    });

    // Update partner via Pusher
    collaborationStore.syncToPartner();

    showToast({
      title: 'Notifications Muted',
      description: 'Dashboard notifications disabled globally',
    });
  }
}

// Example: Zen Mode from Biz Lab affects dashboard
export function handleZenModeActivation(zenMode: boolean) {
  const dashboardStore = useDashboardSettings.getState();

  if (zenMode) {
    // Hide non-essential widgets when Biz Lab activates Zen Mode
    const currentWidgets = dashboardStore.widgetConfiguration.visibility;
    const essentialWidgets = ['my-focus', 'current-sprint'];
    const hiddenWidgets = currentWidgets.filter(w => !essentialWidgets.includes(w));

    dashboardStore.updateWidgetVisibility(essentialWidgets);

    // Store hidden widgets for restoration
    sessionStorage.setItem('dashboard-hidden-by-zenmode', JSON.stringify(hiddenWidgets));
  } else {
    // Restore hidden widgets when Zen Mode deactivates
    const hiddenWidgets = JSON.parse(sessionStorage.getItem('dashboard-hidden-by-zenmode') || '[]');
    const currentWidgets = dashboardStore.widgetConfiguration.visibility;
    dashboardStore.updateWidgetVisibility([...currentWidgets, ...hiddenWidgets]);
  }
}
```

### 14.3 Partner Collaboration Settings Impact

Dashboard respects collaboration settings for review workflows and notifications.

```typescript
// Dashboard uses collaboration settings for review queue
export function ReviewQueueWidget() {
  const { settings: collabSettings } = useCollaborationSettings();
  const reviews = useReviewQueue();

  // Filter reviews based on auto-assignment rules
  const myReviews = reviews.filter(review => {
    const { reviewWorkflow } = collabSettings;

    // Check auto-assignment rules
    if (review.section === 'biz' && review.type === 'strategy') {
      return reviewWorkflow.autoAssign.bizLabStrategies === getCurrentPartnerId();
    }

    if (review.section === 'products' && review.type === 'component') {
      return reviewWorkflow.autoAssign.productsLabComponents === getCurrentPartnerId();
    }

    if (review.type === 'cross-section-decision') {
      return reviewWorkflow.autoAssign.crossSectionDecisions === 'both-required';
    }

    return true; // Show if no specific rule
  });

  return (
    <div className="review-queue-widget">
      <h3>Review Queue ({myReviews.length})</h3>
      {myReviews.map(review => (
        <ReviewCard
          key={review.id}
          review={review}
          notificationRule={collabSettings.reviewWorkflow.notificationRules['review-requested']}
        />
      ))}
    </div>
  );
}

// Dashboard badges show notification routing
export function ActivityBadge({ activityType, count }) {
  const { settings: collabSettings } = useCollaborationSettings();

  const notificationRule = collabSettings.reviewWorkflow.notificationRules[activityType];
  const shouldNotifyMe = notificationRule?.notify.includes(getCurrentPartnerId()) ||
                         notificationRule?.notify.includes('both');

  if (!shouldNotifyMe) return null; // Don't show badge if not relevant to me

  return (
    <Badge variant={notificationRule.urgent ? 'destructive' : 'default'}>
      {count}
    </Badge>
  );
}
```

### 14.4 Version History & Rollback

Dashboard provides UI for rolling back settings changes.

```typescript
// Dashboard settings panel shows version history
export function DashboardSettingsPanel() {
  const { history, rollback } = useVersionHistory();
  const [isRollingBack, setIsRollingBack] = useState(false);

  const handleRollback = async (entryId: string) => {
    setIsRollingBack(true);

    try {
      const restoredState = rollback(entryId);

      // Apply restored state to dashboard
      useDashboardSettings.setState(restoredState.dashboard);

      showToast({
        title: 'Settings Restored',
        description: `Rolled back to ${new Date(restoredState.timestamp).toLocaleString()}`,
        variant: 'success',
      });
    } catch (error) {
      showToast({
        title: 'Rollback Failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsRollingBack(false);
    }
  };

  return (
    <div className="settings-panel">
      <h3>Version History</h3>
      <div className="history-list">
        {history.map(entry => (
          <div key={entry.id} className="history-entry">
            <span>{new Date(entry.timestamp).toLocaleString()}</span>
            <span>{entry.changeDescription}</span>
            <span>by {entry.changedBy}</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => handleRollback(entry.id)}
              disabled={isRollingBack}
            >
              Restore
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 14.5 Export & Import Dashboard Configuration

Dashboard settings can be exported and imported via App Settings system.

```typescript
// Export dashboard-only settings
export function exportDashboardSettings() {
  const exportData = exportSettings('dashboard');

  // Create downloadable file
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vault-dashboard-settings-${new Date().toISOString()}.json`;
  a.click();
  URL.revokeObjectURL(url);

  showToast({
    title: 'Settings Exported',
    description: 'Dashboard settings saved to file',
    variant: 'success',
  });
}

// Import dashboard settings from partner
export function importDashboardSettings(file: File) {
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const importedData = JSON.parse(e.target?.result as string);

      // Validate format
      if (!importedData.version || !importedData.settings) {
        throw new Error('Invalid settings file format');
      }

      // Show preview modal
      showImportPreview(importedData, () => {
        // Apply import on user confirmation
        importSettings(importedData, 'merge'); // Merge with existing settings

        showToast({
          title: 'Settings Imported',
          description: `Dashboard settings from ${importedData.exportedBy} applied`,
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

**See:** `specifications/app-settings-system.md` for complete Settings Hub architecture (Workflow Profiles, Collaboration Settings, Cascade Engine, Version History)
**See:** PRD #14 for complete App Settings product requirements and user workflows

---

**Last Updated:** January 20, 2026
**Related Specifications:**
- `core-platform.md` - Monorepo architecture, deployment
- `collaboration-features.md` - Team coordination features
- `interactive-ui.md` - F4/F5 floating panels
- `content-navigation.md` - MDX navigation system
- `global-navigation-system.md` - Command Palette, Global Navbar, Keyboard Shortcuts

**Related PRDs:**
- `00-vault-overview-prd.md` - Product requirements
- `10-biz-lab-prd.md` - Biz Lab integration
- `11-products-lab-prd.md` - Products Lab integration
- `12-global-navigation-prd.md` - Global Navigation integration
