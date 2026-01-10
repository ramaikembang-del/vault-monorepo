# Vault Execution Checklist: 14-Day Solo Build

This is your daily actionable checklist. Check items off as you go.

## 🏗️ Sprint 0: Core Foundation (Days 1-2)

### Day 1: Scaffolding Routes
- [x] **Install MDX Libraries**
  - [x] `npm install next-mdx-remote shiki rehype-slug gray-matter`
  - [x] `npm install lucide-react` (Already installed)
- [x] **Create Biz Lab Route**
  - [x] Create `apps/vault/app/biz/layout.tsx` (Sidebar Layout)
  - [x] Create `apps/vault/app/biz/[[...slug]]/page.tsx` (MDX Renderer)
  - [x] Create `apps/vault/lib/mdx.ts` (Content Fetcher)
  - [x] **Verify:** Navigate to `localhost:3000/biz` (should show empty docs page)
- [x] **Create Products Lab Route**
  - [x] Create `apps/vault/app/products/layout.tsx`
  - [x] Create `apps/vault/app/products/page.tsx` (Experiment Grid)
  - [x] Create `apps/vault/app/products/experiments/folder` (Throwaway zone)

### Day 2: Unified Navigation
- [x] **Update Top Navbar** (`dynamic-navbar.tsx`)
  - [x] Add Tabs: `Products` | `Biz` | `Admin`
  - [x] Implement active state logic
- [x] **Setup Content Routes (Symlink)**
  - [x] Create directory: `apps/vault/content`
  - [x] **Symlink External Repo:** Route your docs repo to `apps/vault/content/biz`
  - [x] *Windows CMD:* `mklink /J "apps\vault\content\biz" "C:\Users\Adeandza Haqia\Desktop\Clario\biz"`
  - [x] Test MDX rendering with real content

---

## 📦 Sprint 1: Knowledge Graph (Days 3-5)

### Day 3: Graph Engine
- [x] **Install Graph Libs**
  - [x] `npm install react-force-graph-2d`
- [x] **Data Extraction Script**
  - [x] Create `apps/vault/lib/graph/extract-nodes.ts`
  - [x] Implement recursive file scan of `/content/biz`
  - [x] Parse frontmatter for `tags` and `links`
  - [x] Output: `graph-data.json`

### Day 4: Graph Visualization
- [x] **Build Component**
  - [x] Create `components/graph/GraphView.tsx`
  - [x] **Connect Data**: Wire up `graph-data.json` to the view
  - [x] Render nodes (Strategy=Blue, Product=Orange)
- [x] **Interactions**
  - [x] Add `onNodeClick` handler (Navigate to doc)
  - [x] Implement Zoom/Pan controls (Built-in)

### Day 5: Floating Notes
- [x] **Install Dragging**
  - [x] `npm install react-draggable framer-motion`
- [x] **Build UI**
  - [x] Create `components/graph/FloatingNote.tsx` (Draggable Card)
  - [x] Connect Graph click -> Open Note overlay

---

## 📊 Sprint 1: Dashboard & Gamification (Days 6-11)

### Day 6: Clerk Metadata Setup
- [ ] **Define Schema**
  - [ ] Go to Clerk Dashboard -> User -> Metadata
  - [ ] Add `achievements`, `readCount`, `sprintProgress`
- [ ] **Create API Helper**
  - [ ] `apps/vault/lib/user-progress.ts` (fetch/update metadata)

### Day 7-8: Mission Control UI
- [ ] **Install Charts**
  - [ ] `npm install recharts`
- [ ] **Build Widgets**
  - [ ] `SprintProgress.tsx` (Progress Bar)
  - [ ] `PersonalTracker.tsx` (Docs read count)
- [ ] **Assemble Page**
  - [ ] `apps/vault/app/(dashboard)/page.tsx`

### Day 9: Product Portfolio
- [ ] **Install Mermaid**
  - [ ] `npm install mermaid`
- [ ] **Create Diagram Component**
  - [ ] `components/dashboard/PortfolioMap.tsx`
  - [ ] Hardcode V1 diagram definition string

### Day 10-11: Achievements
- [ ] **Define Achievements**
  - [ ] Create `config/achievements.ts` (List of 10 badges)
- [ ] **Build UI**
  - [ ] `components/gamification/AchievementList.tsx`
- [ ] **Hook Up Logic**
  - [ ] On Doc View -> Increment Count -> Check Unlock

---

## 🚀 Sprint 1: Landing (Day 12-14)

### Day 12: Polish
- [ ] **Hover Previews**
  - [ ] Setup `@radix-ui/react-hover-card`
  - [ ] Add to Graph Nodes
- [ ] **Tooltips**
  - [ ] Setup `@radix-ui/react-tooltip`
  - [ ] Add "Why This Matters" to 5 key pages

### Day 13: Testing
- [ ] **Manual Walkthrough**
  - [ ] User enters -> Dashboard -> Click Graph -> Open Note -> Read Doc -> Achievement Unlock
- [ ] **Mobile Check**
  - [ ] Verify Navbar works on phone

### Day 14: Launch
- [ ] **Deploy**
  - [ ] Push to main
  - [ ] Check Vercel build
- [ ] **Celebrate** 🎉
