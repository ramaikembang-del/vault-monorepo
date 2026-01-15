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

# Part VII: User Workflows

## 12. Common Scenarios

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

**Last Updated:** January 15, 2026  
**Status:** DETAILED SPEC - READY FOR REVIEW  
**Next Step:** Get user feedback, then create implementation PRD
