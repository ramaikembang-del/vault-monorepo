# Sprint 3: Planned Tasks (Expansion & Scale)
**Status:** 📋 PLANNED (Stage 0 Pending)
**Focus:** Team Collaboration + AI Intelligence
**Workflow:** Dev → Test → Iterate → Build → Deploy

---

## 🏗️ Stage 0: Foundation Alignment
**Goal:** Define schemas for Comments and AI Ops.

- [ ] **Database Schema Design** (Supabase/Postgres)
  - [ ] Define `comments` table (`id`, `docId`, `userId`, `content`, `parentId`)
  - [ ] Define `reviews` table (`id`, `prId`, `status`, `reviewerId`)
- [ ] **AI Usage Policy**
  - [ ] Define "No Training" data policy for OpenAI
  - [ ] Set token usage limits per Partner

---

## 🛠️ Stage 1: Development (The Build)
**Goal:** Enable multi-user coordination and AI assistance.

### Feature A: Advanced Collaboration (F14)
- [ ] **Backend Setup**
  - [ ] Install `@supabase/supabase-js`
  - [ ] Create API Route: `api/comments/route.ts` (GET/POST)
- [ ] **Document Comments**
  - [ ] Create `components/collab/CommentThread.tsx`
  - [ ] Implement "Highlight to Comment" text selection logic
  - [ ] Real-time updates (SWR or Supabase Realtime)
- [ ] **Review Dashboard**
  - [ ] Create `app/(dashboard)/reviews/page.tsx`
  - [ ] Build `ReviewQueue` widget for Mission Control
  - [ ] Partner Notification ("Request Changes" / "Approve")

### Feature B: AI Integration (F15)
- [ ] **OpenAI Setup**
  - [ ] Install `openai` package
  - [ ] Configure `OPENAI_API_KEY` in `.env.local`
- [ ] **Content Summarizer**
  - [ ] Create `lib/ai/summarize.ts` (Prompt Engineering)
  - [ ] Add "Summarize" button to `BizLab` header
  - [ ] Streaming UI response (Typewriter effect)
- [ ] **Smart Tagging**
  - [ ] Build `generateTags(content)` function
  - [ ] Batch script to auto-tag existing `content/biz` docs

---

## 🧪 Stage 2: Testing & QA (The Audit)
**Goal:** Verify reliability and data integrity.

- [ ] **Sync Verification**
  - [ ] Open doc in 2 windows -> Post comment -> Verify sync < 2s
- [ ] **AI Hallucination Check**
  - [ ] Test 5 Financial Docs -> Verify summary numbers match source
- [ ] **Load Testing**
  - [ ] 50 concurrent comment streams (Simulated)

---

## 🔄 Stage 3: Iteration (The Polish)
**Goal:** Refine based on Partner usage.

- [ ] *(Placeholder)*

---

## 🚀 Stage 4: Build & Launch (The Release)
**Goal:** Deploy v0.3.0 to Production.

- [ ] **Pre-Flight Check**
  - [ ] `npm run lint`
  - [ ] `npm run build`
- [ ] **Deployment**
  - [ ] Push to `main`
  - [ ] Verify Vercel integration
- [ ] **Handoff**
  - [ ] Loom: "How to Review Code & Docs"
  - [ ] Update `CHANGELOG.md`

---

**Last Updated:** January 15, 2026
**See Also:** `sprint-2-planned.md`, `specifications/future-enhancements.md`
