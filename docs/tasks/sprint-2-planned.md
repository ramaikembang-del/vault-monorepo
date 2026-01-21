# Sprint 2: Planned Tasks (Enhanced Core Features)
**Status:** 📋 PLANNED
**Focus:** Enhance Dashboard, Biz Lab, Navigation from existing specs (v0.2.0)
**Workflow:** Dev → Test → Iterate → Build → Deploy

---

## 📦 Stage 1: Development (Implementation)
*Status: ⏳ Pending*

### Enhanced Dashboard (dashboard-system.md)
- [ ] **Install Dependencies**
  - [ ] `npm install zustand @dnd-kit/core @dnd-kit/sortable`
  - [ ] `npm install @dnd-kit/utilities react-grid-layout`
- [ ] **Widget System Architecture**
  - [ ] Create `stores/widgetStore.ts` (Zustand)
  - [ ] Create `types/dashboard.ts` (Widget interfaces)
  - [ ] Create `config/widgets.ts` (Widget registry)
- [ ] **Configurable Widgets**
  - [ ] Create `components/dashboard/WidgetContainer.tsx`
  - [ ] Create `components/dashboard/WidgetGrid.tsx` (Drag & drop)
  - [ ] Implement `useWidget` hook
  - [ ] Add localStorage persistence
- [ ] **Gamification Enhancement**
  - [ ] Update `lib/user-progress.ts` (Clerk metadata sync)
  - [ ] Create `components/gamification/XPTracker.tsx`
  - [ ] Create `components/gamification/BadgeUnlock.tsx`
  - [ ] Implement achievement unlock notifications
  - [ ] Add progress tracking API
- [ ] **Dashboard Widgets**
  - [ ] Enhance `MyFocusWidget` (configurable tasks)
  - [ ] Enhance `TeamPulseWidget` (real-time partner activity)
  - [ ] Create `ReviewQueueWidget` (document reviews)
  - [ ] Enhance `MissionStatusWidget` (live sprint data)

### Enhanced Biz Lab (biz-lab-system.md)
- [ ] **Install Dependencies**
  - [ ] `npm install openai` (for embeddings)
  - [ ] `npm install workbox-webpack-plugin` (for caching)
- [ ] **Strategic Brain - Backlinks**
  - [ ] Create `lib/graph/backlinks.ts`
  - [ ] Build bidirectional link detection
  - [ ] Create `components/biz/BacklinksPanel.tsx`
  - [ ] Add unlinked mentions detection
- [ ] **Strategic Brain - Semantic Similarity**
  - [ ] Create `lib/ai/embeddings.ts`
  - [ ] Build document similarity calculator
  - [ ] Create `components/biz/RelatedDocs.tsx`
  - [ ] Add "Similar Documents" widget
- [ ] **Advanced Features - Staged Parsing**
  - [ ] Create `lib/mdx/staged-parser.ts`
  - [ ] Implement 3-stage loading (TOC → Content → Full)
  - [ ] Add Web Worker for parsing
  - [ ] Implement progress indicators
- [ ] **Advanced Features - Multi-Layer Caching**
  - [ ] Create `lib/cache/manager.ts`
  - [ ] Implement memory cache (LRU)
  - [ ] Implement disk cache (IndexedDB)
  - [ ] Add cache invalidation strategy
  - [ ] Edge caching configuration

### Enhanced Navigation (global-navigation-system.md)
- [ ] **Install Dependencies**
  - [ ] `npm install react-hotkeys-hook`
- [ ] **Command Palette Enhancement**
  - [ ] Update `components/search/CommandMenu.tsx`
  - [ ] Create `lib/actions/registry.ts` (Action registry)
  - [ ] Implement context-aware actions
  - [ ] Add quick action shortcuts
- [ ] **Global Shortcuts System**
  - [ ] Create `hooks/useGlobalShortcuts.ts`
  - [ ] Implement `Cmd+D` (Dashboard)
  - [ ] Implement `Cmd+1` (Products)
  - [ ] Implement `Cmd+2` (Biz)
  - [ ] Implement `Cmd+3` (Settings)
  - [ ] Implement `Cmd+K` (Search)
- [ ] **Keyboard Shortcuts Manager**
  - [ ] Create `components/settings/ShortcutsManager.tsx`
  - [ ] Add conflict detection
  - [ ] Implement custom binding UI
  - [ ] Create shortcuts help panel (`Cmd+/`)

---

## 🧪 Stage 2: Testing & MVP Verification (QA)
*Status: ⏳ Pending*

### Technical Performance
- [ ] **Dashboard Performance**
  - [ ] Widget drag & drop < 60 FPS
  - [ ] Dashboard load time < 1s
  - [ ] Widget state persistence works
- [ ] **Biz Lab Performance**
  - [ ] Staged parsing reduces load time by 40%
  - [ ] Cache hit rate > 80%
  - [ ] Backlinks calculate < 500ms
  - [ ] Semantic similarity < 2s
- [ ] **Navigation Performance**
  - [ ] Command Palette opens < 100ms
  - [ ] Keyboard shortcuts respond instantly
  - [ ] No shortcut conflicts

### Feature Verification
- [ ] **Widget System**
  - [ ] Drag & drop works smoothly
  - [ ] Widget configuration saves
  - [ ] Layout persists after reload
  - [ ] Mobile: widgets stack vertically
- [ ] **Gamification**
  - [ ] Achievements unlock correctly
  - [ ] XP increments on actions
  - [ ] Clerk metadata syncs
  - [ ] Badge notifications appear
- [ ] **Strategic Brain**
  - [ ] Backlinks detect correctly
  - [ ] Unlinked mentions found
  - [ ] Similar docs make sense
  - [ ] Embeddings cache properly
- [ ] **Global Shortcuts**
  - [ ] All shortcuts work from any page
  - [ ] Shortcuts work inside modals
  - [ ] Help panel shows all shortcuts
  - [ ] Custom bindings save

### Data Integrity
- [ ] **Cache Validation**
  - [ ] Cache invalidates on content update
  - [ ] No stale data served
  - [ ] IndexedDB storage limits respected
- [ ] **Metadata Sync**
  - [ ] Clerk metadata updates in < 2s
  - [ ] No race conditions on concurrent updates

---

## 🔄 Stage 3: Iteration (Post-QA Refinement)
*Status: ⏳ Pending*

### 3.1 Performance Optimization
- [ ] **Bundle Size Check**
  - [ ] Verify bundle < 150KB per route
  - [ ] Code-split heavy dependencies
  - [ ] Tree-shake unused code
- [ ] **Animation Polish**
  - [ ] Widget transitions smooth
  - [ ] Badge unlocks delightful
  - [ ] Loading states clear

### 3.2 UX Refinement
- [ ] **Widget Customization**
  - [ ] Add widget visibility toggles
  - [ ] Improve drag handles
  - [ ] Better empty states
- [ ] **Strategic Brain UX**
  - [ ] Backlinks panel design
  - [ ] Related docs prominence
  - [ ] Loading state improvements

### 3.3 Accessibility
- [ ] **Keyboard Navigation**
  - [ ] Tab order logical
  - [ ] Focus indicators visible
  - [ ] Skip links work
- [ ] **Screen Reader**
  - [ ] Widget labels clear
  - [ ] Shortcuts announced
  - [ ] Dynamic content updates announced

---

## 🚀 Stage 4: Build & Launch (v0.2.0 Release)
*Status: ⏳ Pending*

### Pre-Flight Check
- [ ] **Build Verification**
  - [ ] `npm run build` succeeds
  - [ ] No build warnings
  - [ ] Environment variables set
- [ ] **Code Quality**
  - [ ] `npm run lint` passes
  - [ ] TypeScript errors: 0
  - [ ] Console errors: 0
- [ ] **Documentation**
  - [ ] Update CHANGELOG.md
  - [ ] Document new features
  - [ ] Update user guide

### Production Git Flow
- [ ] **Version Control**
  - [ ] Commit: `feat: sprint 2 - enhanced core features`
  - [ ] Tag: `v0.2.0`
  - [ ] Create GitHub Release
- [ ] **Branch Management**
  - [ ] Merge feature branches
  - [ ] Resolve conflicts
  - [ ] Clean up old branches

### Deployment
- [ ] **Vercel Deploy**
  - [ ] Push to `main`
  - [ ] Verify deployment URL
  - [ ] Test production environment
  - [ ] Monitor performance metrics
- [ ] **Smoke Testing**
  - [ ] Login works
  - [ ] Dashboard loads
  - [ ] Widgets drag & drop
  - [ ] Shortcuts work
  - [ ] Biz Lab loads docs
  - [ ] Backlinks show up

### Handoff
- [ ] **Documentation**
  - [ ] Update `docs/roadmap/current-sprint.md`
  - [ ] Move to `docs/roadmap/sprint-archive.md`
  - [ ] Record demo video (Loom)
- [ ] **Partner Communication**
  - [ ] Send release notes
  - [ ] Highlight new features
  - [ ] Request feedback

---

## Summary

### Sprint 2 Goals
- ✅ Enhance Dashboard (configurable widgets + gamification)
- ✅ Enhance Biz Lab (Strategic Brain + advanced features)
- ✅ Enhance Navigation (Command Palette + global shortcuts)

### Key Deliverables
- Configurable widget system with drag & drop
- Strategic Brain with backlinks & semantic similarity
- Multi-layer caching for performance
- Global keyboard shortcuts
- v0.2.0 production release

### Success Criteria
- Dashboard load < 1s
- Widget drag & drop smooth (60 FPS)
- Backlinks calculate < 500ms
- Cache hit rate > 80%
- All shortcuts work globally
- Zero critical bugs

---

**Last Updated:** January 21, 2026
**Status:** Planned - Waiting to start
**Next Sprint:** `sprint-3-planned.md` (Products Lab)
**Specifications:** `docs/specifications/dashboard-system.md`, `docs/specifications/biz-lab-system.md`, `docs/specifications/global-navigation-system.md`
