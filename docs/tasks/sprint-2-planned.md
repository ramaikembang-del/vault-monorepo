# Sprint 2: Planned Tasks (Intelligence & Immersion)
**Status:** 📋 PLANNED  
**Focus:** Premium UX + Decision Intelligence + Data Moat  
**Workflow:** Dev → Test → Iterate → Build → Deploy

---

## 🏗️ Stage 0: Foundation Alignment (The "Merge")
**Goal:** Align Documentation & Specs before writing code. (✅ Completed)

- [x] **PRD Alignment (H1 2026)**
  - [x] Humanize 6 PRDs for Partner readability (`00`, `10`..`14`)
  - [x] Audit Feature UX (Command Palette = 🟢, Studio = 🟡)
- [x] **Specification Alignment**
  - [x] Update `core-platform.md` (2-Partner Logic, Global Nav)
  - [x] Update `design-foundation.md` (Team Presets)
  - [x] Update `future-enhancements.md` (F16-F18 Roadmapped)

---

## 🛠️ Stage 1: Development (The Build)
**Goal:** Implement core features based on aligned Specs.

### Feature A: Global Navigation (F16)
- [ ] **Install Dependencies**
  - [ ] `npm install cmdk react-hotkeys-hook`
- [ ] **Build Command Palette**
  - [ ] Create `components/search/CommandMenu.tsx` (Update Existing)
  - [ ] Implement `ActionRegistry` (Static + Dynamic)
  - [ ] Add `usePartnerActions` hook (Mock Notifications)
- [ ] **Global Shortcuts**
  - [ ] Create `hooks/useGlobalShortcuts.ts`
  - [ ] Implement `Cmd+1/2/3` routing (`router.push`)
  - [ ] Implement `Cmd+K` trigger (Context aware)
- [ ] **Update Navbar**
  - [ ] Modify `components/shared/VaultNav.tsx`
  - [ ] Add `active` state styling (Border Bottom)

### Feature B: The "Alive" Workspace (F4/F5)
- [ ] **Install Resizable Panels**
  - [ ] `npm install react-resizable-panels`
- [ ] **Floating Sidebar (F4)**
  - [ ] Create `components/layout/ResizableSidebar.tsx`
  - [ ] Implement `PanelGroup` / `Panel` / `PanelResizeHandle`
  - [ ] Add `localStorage` persistence (`autoSaveId="sidebar-width"`)
- [ ] **Glassmorphism Navbar (F5)**
  - [ ] Update `components/shared/DynamicNavbar.tsx`
  - [ ] Add CSS: `backdrop-filter: blur(16px)`
  - [ ] Connect `useClerkMetadata` for "Unread" badges

### Feature C: Decision Intelligence (V8)
- [ ] **Sankey Funnels**
  - [ ] `npm install d3-sankey` (or Recharts equivalent)
  - [ ] Create `components/analytics/SankeyFunnel.tsx`
  - [ ] Map "Lead -> Revenue" data structure
- [ ] **MDX Calculators**
  - [ ] Create `components/mdx/ROI_Calculator.tsx`
  - [ ] Add inputs: `MarketSize`, `ConversionRate`, `Price`
  - [ ] Implement dynamic output formatting (`Intl.NumberFormat`)
  - [ ] Embed in `content/biz/projections/03-financials.md`

### Feature D: Studio Tuner (F17)
- [ ] **Theme Infrastructure**
  - [ ] Create `config/themes.ts` (Official, Partner1, Partner2)
  - [ ] Define CSS Variables: `--color-primary`, `--bg-primary`
- [ ] **Studio Tuner UI**
  - [ ] Create `app/settings/studio/page.tsx`
  - [ ] Built `ThemeSelector` component (Grid of previews)
  - [ ] **Logic:** `useTheme` hook to apply CSS vars to `:root`

---

## 🧪 Stage 2: Testing & QA (The Audit)
**Goal:** Verify features against Success Criteria.

- [ ] **Performance Audit**
  - [ ] **Cmd+K Latency:** Open in < 100ms (Profiler)
  - [ ] **Layout Shift:** Resizable panels must be stable (CLS < 0.1)
  - [ ] **Theme Switch:** Instant paint (< 16ms)
- [ ] **UX Verification**
  - [ ] **Shortcuts:** Verify `Cmd+1` works from *inside* a modal
  - [ ] **Persistence:** Reload page -> Check if Sidebar width is saved
  - [ ] **Mobile:** Verify Navbar collapses to Bottom Dock (per Spec 1.1)
- [ ] **Data Integrity**
  - [ ] **Calculator:** Test edge cases (Negative inputs, Zero division)

---

## 🔄 Stage 3: Iteration (The Polish)
**Goal:** Refine based on feedback.

- [ ] **Micro-Copy Injection**
  - [ ] Implement "Empty State" illustrations in Dashboard/Reviews
  - [ ] Update Button Labels to match `design-foundation.md`
  - [ ] Add "Success Toast" variations (Randomized celebration messages)
- [ ] **Visual Tuning**
  - [ ] Adjust glassmorphism contrast based on real usage
  - [ ] Tune spring animations for "snappiness"

---

## 🚀 Stage 4: Build & Launch (The Release)
**Goal:** Deploy v0.2.0 to Production.

- [ ] **Pre-Flight Check**
  - [ ] `npm run lint` (Zero errors)
  - [ ] `npm run build` (Check bundle size)
  - [ ] Verify environment variables
- [ ] **Deployment**
  - [ ] Push to `main`
  - [ ] Verify Vercel deployment URL
- [ ] **Handoff**
  - [ ] Record "Sprint 2: Intelligence Engine" Loom
  - [ ] Update `CHANGELOG.md`

---

**Last Updated:** January 15, 2026
**See Also:** `../specifications/core-platform.md`
