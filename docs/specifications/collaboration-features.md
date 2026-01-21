# Collaboration Features Specification

**Purpose:** PM & PKM enablement for 2-partner team with future scalability  
**Status:** 📋 PLANNED (Sprint 3-4)  
**Target Users:** 2 Co-founders + future team (3-12 people)

---

# Part I: Foundation

## 1. Overview

**Goal:** Transform Vault from single-user tool → collaborative PM & PKM system

**Current Team Structure:**
- **Partner 1 (Co-founder):** Product & Strategy lead
- **Partner 2 (Co-founder):** Marketing & Sales lead  
- **Overlap:** Both involved in marketing and product decisions

**Future Growth Path:**
- Phase 1: 2 co-founders (current)
- Phase 2: 3 people (+ specialist)
- Phase 3: 5 people (+ product/marketing team members)
- Phase 4: 8-12 people (full team structure)

**Key Principle:** Co-founders always maintain full access

---

## 2. Core Requirements

**PM (Project Management) Needs:**
- Track who's working on what
- Visibility into partner's current focus
- Handoff workflows (request review, assign tasks)
- Progress visibility per partner

**PKM (Personal Knowledge Management) Needs:**
- Document attribution (who created/edited what)
- Reading history per partner
- Shared vs personal notes
- Knowledge contribution metrics

**Team Coordination Needs:**
- Activity awareness (real-time or digest)
- Review request workflows
- Contribution tracking
- Team achievements & milestones

---

# Part II: Contribution Tracking

## 3. Document Attribution System

### 3.1 Metadata Schema

**Per Document:**
```typescript
interface DocumentMetadata {
  // Core attribution
  createdBy: 'partner1' | 'partner2' | string; // User ID
  createdAt: Date;
  lastEditedBy: 'partner1' | 'partner2' | string;
  lastEditedAt: Date;
  
  // Reading activity
  readBy: {
    partner1: { readCount: number; lastRead: Date; } | null;
    partner2: { read Count: number; lastRead: Date; } | null;
  };
  
  // Review status
  reviewStatus: {
    requestedFrom?: 'partner1' | 'partner2';
    reviewedBy?: 'partner1' | 'partner2';
    reviewedAt?: Date;
    approved: boolean;
  };
  
  // Collaboration flags
  isShared: boolean; // Both partners collaborate
  assignedTo?: 'partner1' | 'partner2'; // Task assignment
}
```

### 3.2 Visual Indicators

**Document List View:**
```
📄 GTM Strategy
   ✍️ Created by Partner 1
   👁️ Read by both partners
   ✅ Approved by Partner 2

📄 Sales Playbook
   ✍️ Created by Partner 2
   👁️ Unread by Partner 1  ← Alert
   ⏳ Awaiting Partner 1 review
```

**Document Page:**
```
┌─────────────────────────────────────┐
│ GTM Strategy                         │
├─────────────────────────────────────┤
│ ✍️ Created by Partner 1 (Jan 10)    │
│ 📝 Last edited by Partner 1 (Jan 12)│
│ 👁️ Partner 2 read this (Jan 13)     │
│ ✅ Approved by Partner 2              │
└─────────────────────────────────────┘
```

### 3.3 Experiment Attribution

**Products Lab:**
```
🧪 Glass Card Component
   👤 Created by: Partner 1
   📅 Created: Jan 14, 2026
   📊 Status: Ready for Review
   👁️ Reviewed by: Partner 2 ✅
   💬 Comments: "Looks great! Ship it."
```

---

## 4. Contribution Metrics

### 4.1 Dashboard Widgets

**Personal Contribution Panel:**
```
┌──────────────────────────────────┐
│ Your Contributions This Week     │
├──────────────────────────────────┤
│ 📝 Documents Created: 3          │
│ ✏️ Documents Edited: 7           │
│ 👁️ Documents Read: 12            │
│ 🧪 Experiments Created: 2        │
│ 💬 Reviews Provided: 5           │
└──────────────────────────────────┘
```

**Partner Comparison (Friendly):**
```
┌──────────────────────────────────┐
│ Team Activity This Week          │
├──────────────────────────────────┤
│          Partner 1  Partner 2    │
│ Docs:         3         5        │
│ Experiments:  2         1        │
│ Reviews:      5         3        │
│                                  │
│ 🎯 Combined: 19 actions          │
└──────────────────────────────────┘
```

### 4.2 Contribution Heatmap

**Calendar View:**
```
       Mon  Tue  Wed  Thu  Fri
P1:     ██   ███  ██   █    ███
P2:     █    ██   ███  ██   █

Legend: █ (1-2) ██ (3-5) ███ (6+)
```

---

# Part III: Partner Activity Feed

## 5. Real-Time Activity Stream

### 5.1 Activity Types

**Tracked Events:**
- Document created/edited
- Experiment created/updated
- Document read (first time or re-read)
- Review requested/completed
- Achievement unlocked
- Milestone reached

### 5.2 Feed Interface

**Live Activity Feed (Dashboard Section):**
```
┌─────────────────────────────────────────┐
│ Partner Activity (Live)                  │
├─────────────────────────────────────────┤
│ 2 min ago                                │
│ 👤 Partner 2 read "Market Research"      │
│                                          │
│ 15 min ago                               │
│ 👤 Partner 1 created "Glass Card v2"     │
│                                          │
│ 1 hour ago                               │
│ 👤 Partner 2 approved "GTM Strategy"     │
│                                          │
│ 2 hours ago                              │
│ 👤 Partner 1 requested review on         │
│    "Launch Timeline"                     │
│                                          │
│ [View All Activity →]                    │
└─────────────────────────────────────────┘
```

### 5.3 Activity Notifications

**Smart Digest (Daily Email - Optional):**
```
Subject: Vault Daily Digest - Jan 15, 2026

Hi Partner 1,

Here's what Partner 2 did today:

📄 Documents:
  • Read "GTM Strategy"
  • Updated "Sales Playbook" (3 edits)
  • Created "Customer Persona - CFO"

✅ Reviews:
  • Approved your "Launch Timeline"
  • Requested review on "Pricing Strategy"

🎯 Achievements:
  • Unlocked "10 Docs Read" badge

[View in Vault →]
```

---

## 6. "What's My Partner Working On?"

### 6.1 Current Focus Widget

**Dashboard Panel:**
```
┌─────────────────────────────────────┐
│ Partner 2's Current Focus           │
├─────────────────────────────────────┤
│ 📂 Currently Viewing:               │
│    "Sales Playbook" (5 min ago)     │
│                                     │
│ ⏱️ Active Session:                  │
│    Biz Lab (last 30 min)            │
│                                     │
│ 🔖 Recent Bookmarks:                │
│    • GTM Strategy                   │
│    • Pricing Model                  │
│                                     │
│ [Jump to Partner's View →]          │
└─────────────────────────────────────┘
```

### 6.2 Presence Indicators

**Subtle Indicators:**
- 🟢 Partner 2 online (in Vault)
- 🟡 Partner 2 idle (15+ min)
- 🔴 Partner 2 offline

**On Document:**
```
📄 GTM Strategy
   🟢 Partner 2 is viewing this now
```

---

# Part IV: Review Workflows

## 7. Request Review System

### 7.1 Review Request Flow

**1. Request Review (Partner 1):**
```
┌─────────────────────────────────────┐
│ GTM Strategy                         │
├─────────────────────────────────────┤
│ [✓] Ready for partner review        │
│                                     │
│ Request review from:                │
│ ○ Partner 2                         │
│                                     │
│ Priority:                           │
│ ◉ Normal  ○ Urgent                  │
│                                     │
│ Note (optional):                    │
│ "Please review pricing section"     │
│                                     │
│ [Send Review Request]               │
└─────────────────────────────────────┘
```

**2. Notification (Partner 2):**
```
🔔 New Review Request

Partner 1 requested your review on:
"GTM Strategy"

Priority: Normal
Note: "Please review pricing section"

[Review Now] [Later]
```

**3. Review Interface (Partner 2):**
```
┌─────────────────────────────────────┐
│ Reviewing: GTM Strategy              │
├─────────────────────────────────────┤
│ [Document content...]                │
│                                     │
│ Your Review:                        │
│ ◉ Approve  ○ Request Changes        │
│                                     │
│ Comments:                           │
│ "Pricing looks good. Ship it!"      │
│                                     │
│ [Submit Review]                     │
└─────────────────────────────────────┘
```

**4. Confirmation (Partner 1):**
```
✅ Review Completed

Partner 2 approved "GTM Strategy"
Comment: "Pricing looks good. Ship it!"

[View Document] [Mark as Done]
```

### 7.2 Review Queue

**Pending Reviews (Dashboard Widget):**
```
┌─────────────────────────────────────┐
│ Pending Your Review (3)              │
├─────────────────────────────────────┤
│ ⏰ Urgent                             │
│ 📄 Launch Timeline                   │
│    from Partner 1 (2 hours ago)     │
│    [Review Now]                     │
│                                     │
│ 📄 Pricing Strategy                  │
│    from Partner 1 (1 day ago)       │
│    [Review Now]                     │
│                                     │
│ 🧪 Glass Card v2                     │
│    from Partner 1 (2 days ago)      │
│    [Review Now]                     │
└─────────────────────────────────────┘
```

---

## 8. Task Assignment

### 8.1 Simple Assignment System

**Assign Document/Experiment:**
```
📄 Q1 Planning Document

[Assign to Partner →]
  ○ Partner 1 (you)
  ● Partner 2
  
Due date (optional): [Jan 20, 2026]
Note: "Please add marketing section"

[Assign Task]
```

**Partner's Task List:**
```
┌─────────────────────────────────────┐
│ Assigned to You (2)                  │
├─────────────────────────────────────┤
│ 📄 Q1 Planning Document              │
│    Due: Jan 20                       │
│    "Please add marketing section"   │
│    [Start Working]                  │
│                                     │
│ 🧪 Homepage Redesign                 │
│    Due: Jan 25                       │
│    "Review proposed design"         │
│    [Start Working]                  │
└─────────────────────────────────────┘
```

---

# Part V: Team Achievements

## 9. Collaborative Milestones

### 9.1 Team Achievements

**Shared Achievements:**
```
🏆 Team Achievements

✅ First Document Together
   Created when both partners contributed to same doc

✅ 10 Docs Reviewed
   Completed 10 cross-partner reviews

✅ Sprint 1 Complete
   Finished all Sprint 1 deliverables

🔒 100 Docs Read (Locked)
   Progress: 67/100

🔒 Perfect Week (Locked)
   Both partners active every day for a week
```

### 9.2 Contribution Leaderboard (Friendly)

**Weekly Stats:**
```
┌─────────────────────────────────────┐
│ This Week's MVP 🎖️                   │
├─────────────────────────────────────┤
│ 🥇 Partner 2 - 23 contributions     │
│ 🥈 Partner 1 - 19 contributions     │
│                                     │
│ 🎯 Team Total: 42 contributions     │
│    (↑ 15% from last week)           │
└─────────────────────────────────────┘
```

---

# Part VI: Technical Implementation

## 10. Data Architecture

### 10.1 User Activity Schema

```typescript
interface UserActivity {
  id: string;
  userId: 'partner1' | 'partner2' | string;
  activityType: 'doc_created' | 'doc_edited' | 'doc_read' | 
                 'experiment_created' | 'review_requested' |
                 'review_completed' | 'achievement_unlocked';
  targetId: string; // Document or experiment ID
  targetType: 'document' | 'experiment';
  metadata: {
    documentTitle?: string;
    changes?: string;
    reviewNote?: string;
  };
  timestamp: Date;
}
```

### 10.2 Storage Strategy

**Option A: File-based (MVP - Sprint 3)**
```
content/
├── biz/
│   ├── gtm-strategy.md
│   └── .metadata/
│       └── gtm-strategy.json  ← Attribution data
└── .activity/
    └── 2026-01-15.json        ← Daily activity log
```

**Option B: Database (Sprint 4+)**
- **LocalStorage:** For quick prototyping
- **Supabase:** For real-time features (future)
- **Git:** For document history (already have)

### 10.3 Real-Time Updates

**Simple Polling (MVP):**
```typescript
// Check for new activity every 30 seconds
useEffect(() => {
  const interval = setInterval(() => {
    fetchLatestActivity();
  }, 30000);
  return () => clearInterval(interval);
}, []);
```

**Real-Time (Future):**
```typescript
// Supabase real-time subscription
const subscription = supabase
  .from('user_activity')
  .on('INSERT', (payload) => {
    addActivityToFeed(payload.new);
  })
  .subscribe();
```

---

## 11. UI Components

### 11.1 Reusable Components

**ActivityFeedItem:**
```tsx
<ActivityFeedItem
  user="partner2"
  action="read"
  target="GTM Strategy"
  timestamp={new Date()}
  onClick={() => router.push('/biz/gtm-strategy')}
/>
```

**ContributionMetric:**
```tsx
<ContributionMetric
  label="Documents Created"
  partner1Count={3}
  partner2Count={5}
  period="this week"
/>
```

**ReviewRequestButton:**
```tsx
<ReviewRequestButton
  documentId="gtm-strategy"
  currentUser="partner1"
  onRequestSent={() => showToast('Review requested!')}
/>
```

---

# Part VII: Dashboard Widget Integration

## 12. Team Pulse Widget (Mission Control)

### 12.1 Real-Time Integration with Pusher

**WebSocket Connection:**
```typescript
// lib/realtime/pusher-collaboration.ts
import Pusher from 'pusher-js';

export function initializeCollaborationChannel(userId: string) {
  const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  });

  const channel = pusher.subscribe(`vault-${userId}`);

  // Partner presence updates
  channel.bind('partner-presence', (data: {
    partnerId: string;
    online: boolean;
    currentDocument?: string;
  }) => {
    // Update Team Pulse widget
    useDashboardStore.getState().updatePartnerStatus(data);
  });

  // Partner activity events
  channel.bind('partner-activity', (data: ActivityItem) => {
    // Add to activity stream
    useDashboardStore.getState().addActivityItem(data);
  });

  return pusher;
}
```

### 12.2 Partner Status Tracking

**Presence Detection:**
```typescript
// lib/collaboration/presence.ts
import { clerkClient } from '@clerk/nextjs';

export async function updateUserPresence(
  userId: string,
  data: {
    online: boolean;
    currentDocument?: string;
    currentRoute?: string;
  }
) {
  // Update user metadata
  await clerkClient.users.updateUser(userId, {
    publicMetadata: {
      presence: {
        ...data,
        lastSeen: new Date().toISOString(),
      },
    },
  });

  // Broadcast to partner via Pusher
  await broadcastPresenceUpdate(userId, data);
}

// Track document views
export function trackDocumentView(userId: string, documentPath: string) {
  updateUserPresence(userId, {
    online: true,
    currentDocument: documentPath,
  });
}
```

### 12.3 Activity Stream Data Model

**Activity Item Interface:**
```typescript
// types/collaboration.ts
interface ActivityItem {
  id: string;
  partnerId: string;
  partnerName: string;
  type: 'created' | 'edited' | 'reviewed' | 'promoted' | 'archived';
  target: string; // Document/experiment title
  category: 'biz' | 'products';
  deepLink: string;
  timestamp: Date;
  metadata: {
    badge?: '🔥' | '⭐' | '🎯';
    isHighPriority?: boolean;
    changesSummary?: string;
  };
}

interface TeamPulseData {
  partnerStatus: {
    partnerId: string;
    partnerName: string;
    online: boolean;
    lastSeen: Date;
    currentActivity?: {
      type: 'viewing' | 'editing' | 'reviewing';
      document: string;
      deepLink: string;
      startedAt: Date;
    };
  };
  activityStream: ActivityItem[];
  reviewQueue: {
    inbound: ReviewRequest[];
    outbound: ReviewRequest[];
  };
}
```

### 12.4 Activity Feed Component

**Team Pulse Widget:**
```tsx
// components/dashboard/TeamPulseWidget.tsx
'use client';

import { useEffect } from 'react';
import { useDashboardStore } from '@/stores/dashboardStore';
import { initializeCollaborationChannel } from '@/lib/realtime/pusher-collaboration';

export function TeamPulseWidget() {
  const { teamPulse } = useDashboardStore();
  const { user } = useUser();

  useEffect(() => {
    // Initialize real-time connection
    const pusher = initializeCollaborationChannel(user?.id);
    return () => pusher.disconnect();
  }, [user?.id]);

  const getBadgeEmoji = (type: string) => {
    switch (type) {
      case 'created': return '🔥';
      case 'promoted': return '⭐';
      case 'reviewed': return '✅';
      default: return '';
    }
  };

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
            <div className="flex-1">
              <p className="font-semibold">
                {teamPulse?.partnerStatus.partnerName}
                {teamPulse?.partnerStatus.online ? ' (Online)' : ' (Offline)'}
              </p>
              {teamPulse?.partnerStatus.currentActivity && (
                <div className="text-sm text-slate-400">
                  → {teamPulse.partnerStatus.currentActivity.type === 'viewing' ? 'Viewing' : 'Editing'}:{' '}
                  {teamPulse.partnerStatus.currentActivity.document}
                  <button
                    className="ml-2 text-orange-500 hover:underline"
                    onClick={() => window.location.href = teamPulse.partnerStatus.currentActivity?.deepLink}
                  >
                    [Jump to Doc]
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-6">
          <h3 className="text-sm font-semibold mb-3">Recent Activity:</h3>
          <div className="space-y-3">
            {teamPulse?.activityStream.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-start gap-2 text-sm">
                <span className="text-lg">{getBadgeEmoji(item.type)}</span>
                <div className="flex-1">
                  <p>
                    <span className="font-semibold">{item.partnerName}</span>{' '}
                    {item.type} <span className="text-orange-500">{item.target}</span>
                  </p>
                  <p className="text-xs text-slate-500">
                    {formatRelativeTime(item.timestamp)}
                    {item.metadata.isHighPriority && (
                      <span className="ml-2 text-red-500">🎯 High Pri</span>
                    )}
                  </p>
                </div>
              </div>
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

## 13. Review Queue Widget (Mission Control)

### 13.1 Review Aggregation Logic

**Fetch Review Requests:**
```typescript
// lib/collaboration/fetch-reviews.ts
import { getAllMarkdownFiles, parseFrontmatter } from '@/lib/content';

export async function fetchReviewQueue(userId: string): Promise<ReviewQueue> {
  // 1. Get all markdown files from Biz Lab and Products Lab
  const allDocs = await getAllMarkdownFiles([
    'content/biz/**/*.md',
    'content/products/**/*.md',
  ]);

  // 2. Parse frontmatter and filter for review requests
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
  const isStale = Date.now() - requestedAt.getTime() > 2 * 24 * 60 * 60 * 1000;

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

### 13.2 Review Actions API

**Update Review Status:**
```typescript
// lib/collaboration/review-actions.ts
export async function updateReviewStatus(
  reviewId: string,
  status: 'approved' | 'changes-requested',
  comment?: string
) {
  // 1. Update document frontmatter
  const doc = await getDocumentById(reviewId);
  const updatedFrontmatter = {
    ...doc.frontmatter,
    review_status: status,
    reviewed_at: new Date().toISOString(),
    review_comment: comment,
  };

  await updateDocumentFrontmatter(reviewId, updatedFrontmatter);

  // 2. Send notification to author
  await sendNotification(doc.frontmatter.author, {
    type: 'review-completed',
    documentTitle: doc.frontmatter.title,
    status,
    comment,
  });

  // 3. Track activity
  await trackActivity({
    userId: getCurrentUserId(),
    activityType: status === 'approved' ? 'review_approved' : 'review_changes_requested',
    targetId: reviewId,
    metadata: { comment },
  });
}
```

---

## 14. Achievement Tracker Integration

### 14.1 Achievement Definitions

**Achievement Registry:**
```typescript
// lib/gamification/achievements.ts
export const ACHIEVEMENTS = {
  'strategy-explorer': {
    id: 'strategy-explorer',
    title: 'Strategy Explorer',
    description: 'Read 10+ Biz Lab docs',
    icon: '🏆',
    target: 10,
    category: 'reading',
    metric: 'docsRead',
  },
  'product-visionary': {
    id: 'product-visionary',
    title: 'Product Visionary',
    description: 'Create 5 product experiments',
    icon: '🎨',
    target: 5,
    category: 'creation',
    metric: 'experimentsCreated',
  },
  '7-day-streak': {
    id: '7-day-streak',
    title: '7-Day Streak',
    description: 'Visit Vault 7 days in a row',
    icon: '🔥',
    target: 7,
    category: 'engagement',
    metric: 'loginStreak',
  },
  'first-review': {
    id: 'first-review',
    title: 'First Review',
    description: 'Complete your first partner review',
    icon: '✅',
    target: 1,
    category: 'collaboration',
    metric: 'reviewsCompleted',
  },
} as const;
```

### 14.2 Achievement Progress Tracking

**Check and Unlock Achievements:**
```typescript
// lib/gamification/check-achievements.ts
import { clerkClient } from '@clerk/nextjs';

export async function checkAchievements(userId: string) {
  const user = await clerkClient.users.getUser(userId);
  const progress = user.publicMetadata?.vaultProgress;
  const unlockedAchievements = progress?.achievements || [];
  const newlyUnlocked: string[] = [];

  // Check each achievement
  for (const [achievementId, achievement] of Object.entries(ACHIEVEMENTS)) {
    // Skip if already unlocked
    if (unlockedAchievements.includes(achievementId)) continue;

    // Check if achievement criteria met
    const currentValue = progress?.[achievement.metric] || 0;
    if (currentValue >= achievement.target) {
      // Unlock achievement
      newlyUnlocked.push(achievementId);

      // Update user metadata
      await clerkClient.users.updateUser(userId, {
        publicMetadata: {
          vaultProgress: {
            ...progress,
            achievements: [...unlockedAchievements, achievementId],
          },
        },
      });

      // Track activity
      await trackActivity({
        userId,
        activityType: 'achievement_unlocked',
        targetId: achievementId,
        metadata: {
          achievementTitle: achievement.title,
        },
      });
    }
  }

  return { newlyUnlocked };
}
```

### 14.3 Contribution Tracking Hook

**Track User Actions:**
```typescript
// lib/collaboration/track-contribution.ts
export async function trackContribution(
  userId: string,
  contributionType: 'doc_created' | 'doc_edited' | 'doc_read' | 'experiment_created' | 'review_completed'
) {
  const user = await clerkClient.users.getUser(userId);
  const progress = user.publicMetadata?.vaultProgress || {};

  // Update relevant metric
  const updates: Record<string, any> = {};

  switch (contributionType) {
    case 'doc_created':
      updates.docsCreated = (progress.docsCreated || 0) + 1;
      break;
    case 'doc_read':
      updates.readCount = (progress.readCount || 0) + 1;
      break;
    case 'experiment_created':
      updates.experimentsCreated = (progress.experimentsCreated || 0) + 1;
      break;
    case 'review_completed':
      updates.reviewsCompleted = (progress.reviewsCompleted || 0) + 1;
      break;
  }

  // Update user metadata
  await clerkClient.users.updateUser(userId, {
    publicMetadata: {
      vaultProgress: {
        ...progress,
        ...updates,
      },
    },
  });

  // Check if any achievements unlocked
  const { newlyUnlocked } = await checkAchievements(userId);

  return { newlyUnlocked };
}
```

---

# Part VIII: User Workflows

## 15. Common Scenarios

### Scenario 1: Partner 1 Creates Strategy Doc

1. Partner 1 creates "Q1 GTM Strategy" in Biz Lab
2. System: Auto-attributes to Partner 1
3. Partner 1 clicks "Request Partner 2 Review"
4. Partner 2 gets notification
5. Partner 2 reviews, adds comment, approves
6. Both partners see updated status
7. Achievement unlocked: "First Collaborative Doc"

### Scenario 2: Partner 2 Creates Experiment

1. Partner 2 creates "Homepage Hero" experiment
2. System: Auto-attributes to Partner 2
3. Partner 2 marks "Ready for Review"
4. Partner 1 sees in review queue
5. Partner 1 tests, provides feedback
6. Partner 2 iterates based on feedback
7. Partner 1 approves
8. Experiment promoted to production

### Scenario 3: Daily Standup Replacement

**Morning Routine:**
1. Partner 1 logs in
2. Sees Partner Activity Feed:
   - "Partner 2 updated Sales Playbook yesterday"
   - "Partner 2 read Launch Timeline"
3. Knows what partner worked on without meeting
4. Can jump to relevant docs if needed

---

# Part VIII: Scalability

## 13. Team Growth (2 → 12 People)

### 13.1 Role-Based Access

**Access Levels:**
```
Co-Founders (2):
  - Full access to everything
  - Can see all activity
  - Can request reviews from anyone

Product Team (2-3):
  - Products Lab: Full access
  - Biz Lab: Read-only (product strategy docs)
  - Activity: See product-related only

Marketing Team (2-3):
  - Biz Lab: Full access
  - Products Lab: Read-only (experiments)
  - Activity: See marketing-related only

Specialists (1-2):
  - Scoped access based on role
  - Activity: See relevant items only
```

### 13.2 Filtering & Privacy

**Activity Feed Filters:**
```
Show activity from:
☑ Partner 1
☑ Partner 2  
☐ Product Team
☐ Marketing Team
☐ Everyone

Show activity for:
☑ Documents I created
☑ Documents assigned to me
☐ All documents
```

---

## 14. Success Metrics

**PM Effectiveness:**
- Partner knows what other partner is working on: 100% visibility
- Review turnaround time: < 24 hours average
- Task completion rate: 90%+

**PKM Effectiveness:**
- Document attribution accuracy: 100%
- Reading activity tracked: 100% of docs
- Knowledge discovery: "Found via activity feed" 30%+

**Engagement:**
- Daily active users: 2/2 partners (100%)
- Weekly contributions: 20+ per partner
- Review participation: 90% of requests completed

---

# Part IX: Biz Lab Integration with Mission Control

## 15. Biz Lab-Specific Team Pulse Integration

### 15.1 Decision Activity Stream

**Real-Time Decision Updates:**
```typescript
// lib/collaboration/biz-lab-pulse.ts
export async function trackBizLabActivity(event: {
  type: 'decision_created' | 'decision_approved' | 'strategy_updated' | 'market_intel_added';
  userId: string;
  documentPath: string;
  metadata: any;
}) {
  // 1. Parse git commits for Biz Lab updates
  if (event.type === 'strategy_updated') {
    const commitInfo = await getLatestCommit(event.documentPath);

    await publishActivity({
      partnerId: event.userId,
      partnerName: await getUserName(event.userId),
      type: 'edited',
      target: event.metadata.documentTitle,
      category: 'biz',
      deepLink: `/biz/${event.documentPath}`,
      timestamp: new Date(),
      metadata: {
        badge: '📊',
        changesSummary: commitInfo.message,
      },
    });
  }

  // 2. Track decision approvals with special priority
  if (event.type === 'decision_approved') {
    await publishActivity({
      partnerId: event.userId,
      partnerName: await getUserName(event.userId),
      type: 'reviewed',
      target: event.metadata.decisionTitle,
      category: 'biz',
      deepLink: `/biz/decisions/${event.documentPath}`,
      timestamp: new Date(),
      metadata: {
        badge: '✅',
        isHighPriority: true,
      },
    });
  }
}
```

### 15.2 Git Webhook Integration

**Automatic Activity Detection:**
```typescript
// api/webhooks/git-biz-updates.ts
export async function POST(req: Request) {
  const payload = await req.json();

  // Filter for /content/biz commits
  const bizCommits = payload.commits.filter(commit =>
    commit.modified.some(file => file.startsWith('content/biz/'))
  );

  for (const commit of bizCommits) {
    const affectedDocs = commit.modified.filter(f => f.startsWith('content/biz/'));

    for (const docPath of affectedDocs) {
      const doc = await getDocumentByPath(docPath);

      // Publish to Team Pulse
      await broadcastViaWebSocket({
        event: 'biz-activity',
        data: {
          partner: commit.author.name,
          action: 'updated_strategy',
          resource: doc.metadata.title,
          route: `/biz/${docPath}`,
          timestamp: commit.timestamp,
        },
      });
    }
  }

  return new Response('OK', { status: 200 });
}
```

---

## 16. Biz Lab Decision Review Queue

### 16.1 Decision Governance Workflow

**Frontmatter-Based Review Queue:**
```typescript
// lib/collaboration/biz-decision-reviews.ts
export async function fetchBizDecisionReviews(userId: string): Promise<ReviewQueue> {
  // Scan all decision documents in /content/biz/decisions
  const decisionDocs = await getAllMarkdownFiles(['content/biz/decisions/**/*.md']);

  const pendingReviews = decisionDocs
    .map(doc => ({
      ...doc,
      frontmatter: parseFrontmatter(doc.content),
    }))
    .filter(doc =>
      doc.frontmatter.status === 'review' &&
      doc.frontmatter.approvers?.some(a => a.id === userId && !a.approved)
    );

  return {
    inbound: pendingReviews.map(doc => ({
      id: doc.id,
      documentTitle: doc.frontmatter.title,
      documentPath: doc.path,
      requestedBy: doc.frontmatter.createdBy,
      requestedAt: new Date(doc.frontmatter.createdAt),
      status: 'pending',
      priority: doc.frontmatter.priority || 'normal',
      isStale: isStale(doc.frontmatter.createdAt, 5), // 5 days threshold
      decisionType: 'biz-decision',
    })),
    outbound: [], // Handled separately
  };
}
```

### 16.2 Stale Decision Alerts

**Urgency Notifications for Old Decisions:**
```typescript
// lib/collaboration/stale-decision-checker.ts
export async function checkStaleDecisions() {
  const pendingDecisions = await getAllDecisions({ status: 'review' });
  const staleThreshold = 5 * 24 * 60 * 60 * 1000; // 5 days

  const staleDecisions = pendingDecisions.filter(decision => {
    const daysPending = Date.now() - new Date(decision.frontmatter.createdAt).getTime();
    return daysPending > staleThreshold;
  });

  // Send push notifications
  staleDecisions.forEach(decision => {
    decision.frontmatter.approvers
      .filter(a => !a.approved)
      .forEach(approver => {
        sendUrgencyNotification(approver.id, {
          type: 'DECISION_STALE_ALERT',
          decisionTitle: decision.frontmatter.title,
          daysPending: Math.floor((Date.now() - new Date(decision.frontmatter.createdAt).getTime()) / (24 * 60 * 60 * 1000)),
          deepLink: `/biz/decisions/${decision.id}`,
        });
      });
  });
}
```

---

## 17. Biz Lab Contribution Analytics

### 17.1 Strategic Metrics Tracking

**Biz Lab-Specific Metrics:**
```typescript
// types/biz-analytics.ts
interface BizLabContributions {
  strategiesCreated: number;
  strategiesUpdated: number;
  marketIntelDocuments: number;
  decisionsLogged: number;
  decisionsApproved: number;
  quickCapturesSubmitted: number;
  strategyReviewsCompleted: number;
  weeklyActivityScore: number; // Weighted composite
}

export async function calculateBizContributions(userId: string, timeframe: 'week' | 'month'): Promise<BizLabContributions> {
  const startDate = timeframe === 'week'
    ? subDays(new Date(), 7)
    : subDays(new Date(), 30);

  const userActivity = await getUserActivity(userId, startDate);

  const strategiesCreated = userActivity.filter(a =>
    a.activityType === 'doc_created' && a.targetType === 'strategy'
  ).length;

  const decisionsApproved = userActivity.filter(a =>
    a.activityType === 'decision_approved'
  ).length;

  const marketIntelDocuments = userActivity.filter(a =>
    a.activityType === 'doc_created' && a.metadata?.category === 'market-intel'
  ).length;

  // Weighted scoring: decisions > strategies > market intel > quick captures
  const activityScore =
    (decisionsApproved * 5) +
    (strategiesCreated * 3) +
    (marketIntelDocuments * 2) +
    (quickCapturesSubmitted * 1);

  return {
    strategiesCreated,
    strategiesUpdated: userActivity.filter(a => a.activityType === 'doc_edited').length,
    marketIntelDocuments,
    decisionsLogged: userActivity.filter(a => a.activityType === 'decision_created').length,
    decisionsApproved,
    quickCapturesSubmitted: userActivity.filter(a => a.activityType === 'quick_capture').length,
    strategyReviewsCompleted: userActivity.filter(a => a.activityType === 'strategy_reviewed').length,
    weeklyActivityScore: activityScore,
  };
}
```

### 17.2 Mission Status Widget Integration

**Biz Lab Contribution Display:**
```tsx
// components/dashboard/BizLabContributionsWidget.tsx
export function BizLabContributionsWidget() {
  const { user } = useUser();
  const { data: contributions } = useQuery({
    queryKey: ['biz-contributions', user?.id],
    queryFn: () => calculateBizContributions(user!.id, 'week'),
  });

  return (
    <div className="widget-card">
      <div className="widget-header">
        <h3 className="widget-title">📊 Biz Lab Contributions</h3>
        <span className="text-sm text-slate-400">This Week</span>
      </div>

      <div className="widget-body space-y-3">
        <MetricRow
          label="Strategies Created"
          value={contributions?.strategiesCreated || 0}
          icon="📝"
        />
        <MetricRow
          label="Decisions Approved"
          value={contributions?.decisionsApproved || 0}
          icon="✅"
        />
        <MetricRow
          label="Market Intel Docs"
          value={contributions?.marketIntelDocuments || 0}
          icon="📊"
        />
        <MetricRow
          label="Quick Captures"
          value={contributions?.quickCapturesSubmitted || 0}
          icon="⚡"
        />

        <div className="pt-3 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Activity Score</span>
            <span className="text-lg font-bold text-orange-500">
              {contributions?.weeklyActivityScore || 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 18. Biz Lab Achievement Definitions

### 18.1 Strategic Achievements

**Biz Lab-Specific Unlockables:**
```typescript
// lib/gamification/biz-achievements.ts
export const BIZ_LAB_ACHIEVEMENTS = {
  'strategy-architect': {
    id: 'strategy-architect',
    title: 'Strategy Architect',
    description: 'Create 5 strategic documents',
    icon: '🏛️',
    target: 5,
    metric: 'strategiesCreated',
    category: 'biz',
  },
  'decision-velocity': {
    id: 'decision-velocity',
    title: 'Decision Velocity',
    description: 'Approve 10 decisions',
    icon: '⚡',
    target: 10,
    metric: 'decisionsApproved',
    category: 'biz',
  },
  'market-intelligence-champion': {
    id: 'market-intelligence-champion',
    title: 'Market Intelligence Champion',
    description: 'Contribute 5+ market analysis docs',
    icon: '📈',
    target: 5,
    metric: 'marketIntelDocuments',
    category: 'biz',
  },
  'strategic-curator': {
    id: 'strategic-curator',
    title: 'Strategic Curator',
    description: 'Review 3 partner strategies',
    icon: '⭐',
    target: 3,
    metric: 'strategyReviewsCompleted',
    category: 'biz',
  },
  'quick-capture-master': {
    id: 'quick-capture-master',
    title: 'Quick Capture Master',
    description: 'Submit 20 quick captures',
    icon: '📝',
    target: 20,
    metric: 'quickCapturesSubmitted',
    category: 'biz',
  },
} as const;
```

### 18.2 Achievement Tracking Integration

**Auto-Unlock on Activity:**
```typescript
// lib/collaboration/track-biz-contribution.ts
export async function trackBizContribution(
  userId: string,
  contributionType: 'strategy_created' | 'decision_approved' | 'market_intel_created' | 'quick_capture' | 'strategy_reviewed'
) {
  const user = await clerkClient.users.getUser(userId);
  const progress = user.publicMetadata?.vaultProgress || {};

  // Update metrics
  const metricMap = {
    'strategy_created': 'strategiesCreated',
    'decision_approved': 'decisionsApproved',
    'market_intel_created': 'marketIntelDocuments',
    'quick_capture': 'quickCapturesSubmitted',
    'strategy_reviewed': 'strategyReviewsCompleted',
  };

  const metric = metricMap[contributionType];
  const updatedProgress = {
    ...progress,
    [metric]: (progress[metric] || 0) + 1,
  };

  await clerkClient.users.updateUser(userId, {
    publicMetadata: {
      vaultProgress: updatedProgress,
    },
  });

  // Check Biz Lab achievements
  const { newlyUnlocked } = await checkBizAchievements(userId, updatedProgress);

  return { newlyUnlocked };
}

async function checkBizAchievements(userId: string, progress: any): Promise<{ newlyUnlocked: string[] }> {
  const unlockedAchievements = progress.achievements || [];
  const newlyUnlocked: string[] = [];

  for (const [achievementId, achievement] of Object.entries(BIZ_LAB_ACHIEVEMENTS)) {
    if (unlockedAchievements.includes(achievementId)) continue;

    const currentValue = progress[achievement.metric] || 0;
    if (currentValue >= achievement.target) {
      newlyUnlocked.push(achievementId);

      await clerkClient.users.updateUser(userId, {
        publicMetadata: {
          vaultProgress: {
            ...progress,
            achievements: [...unlockedAchievements, achievementId],
          },
        },
      });

      // Send celebration notification
      await sendNotification(userId, {
        type: 'ACHIEVEMENT_UNLOCKED',
        achievementTitle: achievement.title,
        achievementIcon: achievement.icon,
      });
    }
  }

  return { newlyUnlocked };
}
```

# Part X: Products Lab Integration with Mission Control

## 19. Products Lab-Specific Team Pulse Integration

### 19.1 Experiment Activity Stream

**Real-Time Experiment Updates:**
```typescript
// lib/collaboration/products-lab-pulse.ts
export async function trackProductsLabActivity(event: {
  type: 'experiment_created' | 'component_promoted' | 'experiment_deployed' | 'component_documented';
  userId: string;
  resourcePath: string;
  metadata: any;
}) {
  // 1. Track experiment creation
  if (event.type === 'experiment_created') {
    await publishActivity({
      partnerId: event.userId,
      partnerName: await getUserName(event.userId),
      type: 'created',
      target: event.metadata.experimentName,
      category: 'products',
      deepLink: `/products/experiments/${event.resourcePath}`,
      timestamp: new Date(),
      metadata: {
        badge: '🧪',
        experimentType: event.metadata.type,
      },
    });
  }

  // 2. Track component promotions with celebration
  if (event.type === 'component_promoted') {
    await publishActivity({
      partnerId: event.userId,
      partnerName: await getUserName(event.userId),
      type: 'promoted',
      target: event.metadata.componentName,
      category: 'products',
      deepLink: `/products/components/${event.resourcePath}`,
      timestamp: new Date(),
      metadata: {
        badge: '⭐',
        isHighPriority: true,
        celebration: true, // Triggers confetti
      },
    });
  }
}
```

### 19.2 Git Webhook Integration for Products Lab

**Automatic Activity Detection:**
```typescript
// api/webhooks/git-products-updates.ts
export async function POST(req: Request) {
  const payload = await req.json();

  // Filter for /content/products commits
  const productsCommits = payload.commits.filter(commit =>
    commit.modified.some(file =>
      file.startsWith('content/products/') ||
      file.startsWith('apps/vault/app/products/experiments/')
    )
  );

  for (const commit of productsCommits) {
    const affectedDocs = commit.modified.filter(f => f.startsWith('content/products/'));

    for (const docPath of affectedDocs) {
      const doc = await getDocumentByPath(docPath);

      // Publish to Team Pulse
      await broadcastViaWebSocket({
        event: 'products-activity',
        data: {
          partner: commit.author.name,
          action: determineAction(docPath), // 'updated_component', 'created_experiment', etc.
          resource: doc.metadata.title,
          route: `/products/${docPath}`,
          timestamp: commit.timestamp,
        },
      });
    }
  }

  return new Response('OK', { status: 200 });
}
```

---

## 20. Products Lab Review Queue

### 20.1 Component Promotion Workflow

**Frontmatter-Based Review Queue:**
```typescript
// lib/collaboration/products-promotion-reviews.ts
export async function fetchProductsReviews(userId: string): Promise<ReviewQueue> {
  // Scan all component/experiment documents
  const productsDocs = await getAllMarkdownFiles([
    'content/products/components/**/*.md',
    'content/products/experiments/**/*.md',
  ]);

  const pendingReviews = productsDocs
    .map(doc => ({
      ...doc,
      frontmatter: parseFrontmatter(doc.content),
    }))
    .filter(doc =>
      doc.frontmatter.needs_review === true &&
      doc.frontmatter.reviewer === userId
    );

  // Check for auto-promotion eligibility (usageCount >= 3)
  const promotionCandidates = productsDocs.filter(doc => {
    const metadata = JSON.parse(
      fs.readFileSync(`${doc.path}/metadata.json`, 'utf-8')
    );
    return metadata.usageCount >= 3 && metadata.status === 'active';
  });

  return {
    inbound: [
      ...pendingReviews.map(toReviewRequest),
      ...promotionCandidates.map(doc => ({
        id: doc.id,
        documentTitle: `Promote: ${doc.frontmatter.title}`,
        documentPath: doc.path,
        requestedBy: 'system',
        requestedAt: new Date(),
        status: 'promotion-eligible',
        priority: 'normal',
        isStale: false,
        reviewType: 'component-promotion',
      })),
    ],
    outbound: [], // Handled separately
  };
}
```

### 20.2 Stale Experiment Alerts

**Urgency Notifications for Old Experiments:**
```typescript
// lib/collaboration/stale-experiment-checker.ts
export async function checkStaleExperiments() {
  const activeExperiments = await getAllExperiments({ status: 'active' });
  const staleThreshold = 25 * 24 * 60 * 60 * 1000; // 25 days (5 days before auto-archive)

  const staleExperiments = activeExperiments.filter(experiment => {
    const daysActive = Date.now() - new Date(experiment.createdAt).getTime();
    return daysActive > staleThreshold;
  });

  // Send notifications to creators
  staleExperiments.forEach(experiment => {
    sendUrgencyNotification(experiment.creator, {
      type: 'EXPERIMENT_STALE_ALERT',
      experimentName: experiment.name,
      daysActive: Math.floor((Date.now() - new Date(experiment.createdAt).getTime()) / (24 * 60 * 60 * 1000)),
      deepLink: `/products/experiments/${experiment.id}`,
      suggestedActions: ['promote', 'archive', 'extend'],
    });
  });
}
```

---

## 21. Products Lab Contribution Analytics

### 21.1 Product Development Metrics

**Products Lab-Specific Metrics:**
```typescript
// types/products-analytics.ts
interface ProductsLabContributions {
  componentsCreated: number;
  componentsEdited: number;
  experimentsLaunched: number;
  componentsPromoted: number;
  componentDocumentation: number;
  reviewsCompleted: number;
  a11yImprovements: number;
  weeklyVelocity: number; // Weighted composite
}

export async function calculateProductsContributions(
  userId: string,
  timeframe: 'week' | 'month'
): Promise<ProductsLabContributions> {
  const startDate = timeframe === 'week'
    ? subDays(new Date(), 7)
    : subDays(new Date(), 30);

  const userActivity = await getUserActivity(userId, startDate);

  const componentsCreated = userActivity.filter(a =>
    a.activityType === 'component_created'
  ).length;

  const componentsPromoted = userActivity.filter(a =>
    a.activityType === 'component_promoted'
  ).length;

  const experimentsLaunched = userActivity.filter(a =>
    a.activityType === 'experiment_created'
  ).length;

  // Weighted scoring: promotions > documentation > experiments > edits
  const velocityScore =
    (componentsPromoted * 10) +
    (componentDocumentation * 5) +
    (experimentsLaunched * 3) +
    (componentsEdited * 1);

  return {
    componentsCreated,
    componentsEdited: userActivity.filter(a => a.activityType === 'component_edited').length,
    experimentsLaunched,
    componentsPromoted,
    componentDocumentation: userActivity.filter(a => a.activityType === 'component_documented').length,
    reviewsCompleted: userActivity.filter(a => a.activityType === 'component_reviewed').length,
    a11yImprovements: userActivity.filter(a => a.activityType === 'a11y_improved').length,
    weeklyVelocity: velocityScore,
  };
}
```

### 21.2 Mission Status Widget Integration

**Products Lab Contribution Display:**
```tsx
// components/dashboard/ProductsLabContributionsWidget.tsx
export function ProductsLabContributionsWidget() {
  const { user } = useUser();
  const { data: contributions } = useQuery({
    queryKey: ['products-contributions', user?.id],
    queryFn: () => calculateProductsContributions(user!.id, 'week'),
  });

  return (
    <div className="widget-card">
      <div className="widget-header">
        <h3 className="widget-title">🎨 Products Lab Contributions</h3>
        <span className="text-sm text-slate-400">This Week</span>
      </div>

      <div className="widget-body space-y-3">
        <MetricRow
          label="Components Created"
          value={contributions?.componentsCreated || 0}
          icon="🧩"
        />
        <MetricRow
          label="Components Promoted"
          value={contributions?.componentsPromoted || 0}
          icon="⭐"
        />
        <MetricRow
          label="Experiments Launched"
          value={contributions?.experimentsLaunched || 0}
          icon="🧪"
        />
        <MetricRow
          label="Documentation"
          value={contributions?.componentDocumentation || 0}
          icon="📝"
        />

        <div className="pt-3 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Velocity Score</span>
            <span className="text-lg font-bold text-orange-500">
              {contributions?.weeklyVelocity || 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 22. Products Lab Achievement Definitions

### 22.1 Product Development Achievements

**Products Lab-Specific Unlockables:**
```typescript
// lib/gamification/products-achievements.ts
export const PRODUCTS_LAB_ACHIEVEMENTS = {
  'ui-explorer': {
    id: 'ui-explorer',
    title: 'UI Explorer',
    description: 'View 10+ component docs',
    icon: '🎨',
    target: 10,
    metric: 'docsRead',
    category: 'products',
  },
  'experiment-velocity': {
    id: 'experiment-velocity',
    title: 'Experiment Velocity',
    description: 'Launch 5 experiments',
    icon: '🚀',
    target: 5,
    metric: 'experimentsLaunched',
    category: 'products',
  },
  'component-curator': {
    id: 'component-curator',
    title: 'Component Curator',
    description: 'Promote 3+ components to /packages/ui',
    icon: '⭐',
    target: 3,
    metric: 'componentsPromoted',
    category: 'products',
  },
  'documentation-champion': {
    id: 'documentation-champion',
    title: 'Documentation Champion',
    description: 'Document 5 components',
    icon: '📚',
    target: 5,
    metric: 'componentDocumentation',
    category: 'products',
  },
  'a11y-advocate': {
    id: 'a11y-advocate',
    title: 'Accessibility Advocate',
    description: 'Improve accessibility on 3 components',
    icon: '♿',
    target: 3,
    metric: 'a11yImprovements',
    category: 'products',
  },
} as const;
```

### 22.2 Achievement Tracking Integration

**Auto-Unlock on Activity:**
```typescript
// lib/collaboration/track-products-contribution.ts
export async function trackProductsContribution(
  userId: string,
  contributionType: 'component_created' | 'component_promoted' | 'experiment_created' | 'component_documented' | 'a11y_improved'
) {
  const user = await clerkClient.users.getUser(userId);
  const progress = user.publicMetadata?.vaultProgress || {};

  // Update metrics
  const metricMap = {
    'component_created': 'componentsCreated',
    'component_promoted': 'componentsPromoted',
    'experiment_created': 'experimentsLaunched',
    'component_documented': 'componentDocumentation',
    'a11y_improved': 'a11yImprovements',
  };

  const metric = metricMap[contributionType];
  const updatedProgress = {
    ...progress,
    [metric]: (progress[metric] || 0) + 1,
  };

  await clerkClient.users.updateUser(userId, {
    publicMetadata: {
      vaultProgress: updatedProgress,
    },
  });

  // Check Products Lab achievements
  const { newlyUnlocked } = await checkProductsAchievements(userId, updatedProgress);

  // Trigger confetti for component promotions
  if (contributionType === 'component_promoted') {
    await sendNotification(userId, {
      type: 'COMPONENT_PROMOTED_CELEBRATION',
      componentName: metadata.componentName,
      triggerConfetti: true,
    });
  }

  return { newlyUnlocked };
}

async function checkProductsAchievements(userId: string, progress: any): Promise<{ newlyUnlocked: string[] }> {
  const unlockedAchievements = progress.achievements || [];
  const newlyUnlocked: string[] = [];

  for (const [achievementId, achievement] of Object.entries(PRODUCTS_LAB_ACHIEVEMENTS)) {
    if (unlockedAchievements.includes(achievementId)) continue;

    const currentValue = progress[achievement.metric] || 0;
    if (currentValue >= achievement.target) {
      newlyUnlocked.push(achievementId);

      await clerkClient.users.updateUser(userId, {
        publicMetadata: {
          vaultProgress: {
            ...progress,
            achievements: [...unlockedAchievements, achievementId],
          },
        },
      });

      // Send celebration notification
      await sendNotification(userId, {
        type: 'ACHIEVEMENT_UNLOCKED',
        achievementTitle: achievement.title,
        achievementIcon: achievement.icon,
      });
    }
  }

  return { newlyUnlocked };
}
```

---

**Last Updated:** January 20, 2026
**Status:** DETAILED SPEC - READY FOR IMPLEMENTATION

**Related Specifications:**
- `dashboard-system.md` - Mission Control Dashboard integration
- `core-platform.md` - Authentication and metadata structure
- `biz-lab-system.md` - Biz Lab-specific features (Strategy Desk, Decision Governance, Cross-Section Integration)
- `products-lab-system.md` - Products Lab-specific features (My Desk, Component Workbench, Experiment Playground)

**Related PRDs:**
- `../prds/00-vault-overview-prd.md` - Product overview
- `../prds/10-biz-lab-prd.md` - Biz Lab product requirements
- `../prds/11-products-lab-prd.md` - Products Lab product requirements
