# Vault Execution Checklist: 14-Day Solo Build

This is your daily actionable checklist. Check items off as you go.

## 📦 Sprint 1: Core Foundation & Experience (Complete)

### Day 1: Implementation History
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
- [x] **Update Top Navbar** (`dynamic-navbar.tsx`)
  - [x] Add Tabs: `Products` | `Biz` | `Admin`
  - [x] Implement active state logic
- [x] **Setup Content Routes (Symlink)**
  - [x] Create directory: `apps/vault/content`
  - [x] **Symlink External Repo:** Route your docs repo to `apps/vault/content/biz`
  - [x] *Windows CMD:* `mklink /J "apps\vault\content\biz" "C:\Users\Adeandza Haqia\Desktop\Clario\biz"`
  - [x] Test MDX rendering with real content

- [x] **Install Graph Libs**
  - [x] `npm install react-force-graph-2d`
- [x] **Data Extraction Script**
  - [x] Create `apps/vault/lib/graph/extract-nodes.ts`
  - [x] Implement recursive file scan of `/content/biz`
  - [x] Parse frontmatter for `tags` and `links`
  - [x] Output: `graph-data.json`
- [x] **Build Component**
  - [x] Create `components/graph/GraphView.tsx`
  - [x] **Connect Data**: Wire up `graph-data.json` to the view
  - [x] Render nodes (Strategy=Blue, Product=Orange)
- [x] **Interactions**
  - [x] Add `onNodeClick` handler (Navigate to doc)
  - [x] Implement Zoom/Pan controls (Built-in)
- [x] **Install Dragging**
  - [x] `npm install react-draggable framer-motion`
- [x] **Build UI**
  - [x] Create `components/graph/FloatingNote.tsx` (Draggable Card)
  - [x] Connect Graph click -> Open Note overlay

- [x] **Install CMDK**
  - [x] `npm install cmdk`
- [x] **Build Command Menu**
  - [x] Create `components/search/CommandMenu.tsx`
  - [x] Add `useEffect` for `Ctrl+K` shortcut
  - [x] Implement search logic (filter local routes/data)
  - [x] Add global provider layout
- [x] **Install Fuse.js**
  - [x] `npm install fuse.js`
- [x] **Build Search Index**
  - [x] Create `lib/search/search-index.ts` to fetch graph data (Created `hooks/useSearch.ts` instead)
  - [x] Configure Fuse options (fuzzy search settings)
- [x] **Connect to UI**
  - [x] Update `CommandMenu.tsx` to search nodes asynchronously
  - [x] Render results dynamically

- [x] **Clerk Metadata Setup**
  - [x] Go to Clerk Dashboard -> User -> Metadata (Types defined in `types/user.ts`)
  - [x] Add `achievements`, `readCount`, `sprintProgress`
- [x] **Create API Helper**
  - [x] `apps/vault/lib/user-progress.ts` (fetch/update metadata)
- [x] **Gamification Strategy**
  - [x] Create `gamification_design.md`
  - [x] Implement `RoleSelection` modal
  - [x] Integrate `GamificationCheck` in Dashboard Layout
- [x] **Mission Control UI**
  - [x] **Install Charts**
    - [x] `npm install recharts`
  - [x] **Build Widgets**
    - [x] `components/dashboard/SprintProgress.tsx` (Company Timeline)
    - [x] `components/dashboard/PersonalTracker.tsx` (XP, Level, Badges)
  - [x] **Assemble Page**
    - [x] `apps/vault/app/(dashboard)/page.tsx` (Grid Layout)
  - [x] **Data Integration (Deep)**
    - [x] Connect XP bar to live events (Read/Search)
    - [x] Dynamic Sprint calculations
- [x] **Product Portfolio**
  - [x] **Install Mermaid**
    - [x] `npm install mermaid`
  - [x] **Create Diagram Component**
    - [x] `components/mdx/Mermaid.tsx`
  - [x] **MDX Integration**
    - [x] Integrate into `biz` and `products` pages
    - [x] **Verification**: Created `content/biz/strategy/mermaid-test.md`
- [x] **Achievements**
  - [x] **Define Achievements**
    - [x] Create `config/achievements.ts` (Expanded to 24 badges)
  - [x] **Build UI**
    - [x] `components/gamification/AchievementList.tsx`
  - [x] **Hook Up Logic**
    - [x] On Doc View -> Increment Count -> Check Unlock
    - [x] Added "Reset Progress" for verification
- [x] **Hover Previews**
  - [x] Setup `@radix-ui/react-hover-card`
  - [x] Add to Graph Nodes
- [x] **Tooltips**
  - [x] Setup `@radix-ui/react-tooltip`
  - [x] Add "Why This Matters" to 5 key pages

---

### Day 2: Testing & QA (Sprint 1 Final Review)
- [x] **Technical Spec & Roadmap Audit**
  - [x] **Roadmap Alignment**: Verify completed features match the "Sprint 1 DONE" status in `20-vault-feature-roadmap-full.md`.
  - [x] **Performance Audit**: Ensure Knowledge Graph maintains 60 FPS (check Chrome DevTools FPS Meter) - *Optimized via useCallback/useMemo.*
  - [x] **Accessibility (WCAG AA)**: Verify keyboard `Tab` navigation for Tooltips and Nav items - *Added tabIndex to Tooltips.*
  - [x] **Spec Verification**: Confirm exact CSS tokens (e.g., `#3b82f6` for Strategy nodes) match `21-vault-feature-specifications.md`.
  - [x] **Bundle Check**: Ensure new dependencies (Radix Tooltip, Hover Card) haven't bloated the `/biz` route excessively - *Verified, added AchievementNotifier.*

- [x] **UX Strategy & Engagement Audit**
  - [x] **"Show, don't tell"**: Verify Mission Control visuals effectively communicate system state without text-heavy explanations.
  - [x] **Emotional Engagement**: Audit the "Wow Factor"—glassmorphism, micro-interactions (bounces/skips), and transition smoothness.
  - [x] **Gamification Loop**: Verify the "Unlock -> Celebrate -> Track" flow (Check confetti and achievement slide-ins) - *Implemented AchievementNotifier.*
  - [x] **Guiding Principles**: Ensure "Why This Matters" tooltips are present on 5+ critical strategic sections as per `13-vault-ux-enhancements-prd.md`.
  - [x] **Portfolio Interactivity**: Test Product Portfolio click handlers (Click -> Explore Spec) and hover stats.

- [x] **End-to-End User Journey**
  - [x] **Onboarding**: Login via Clerk -> Landing on Dashboard.
  - [x] **Discovery**: Scroll through Personal Tracker -> Click "View All" Badges.
  - [x] **Interaction**: Open Knowledge Graph -> Hover over nodes (Check Hover Cards).
  - [x] **Transition**: Click a Graph Node -> Drag it -> Click "View Note" -> Open full MDX Doc.
  - [x] **Engagement**: Read document with Tooltips (Check definitions/Why This Matters popups).
  - [x] **Progression**: Verify XP increases in the Dashboard summary after reading.

- [x] **Feature-Specific Verification**
  - [x] **Hover Cards**: Verify image/excerpt/read-time fields are populated and legible.
  - [x] **Tooltips**: Test accessibility (keyboard focus) and mobile touch behavior.
  - [x] **Achievements**: Test the "Reset Progress" button -> Verify all badges relock correctly.
  - [x] **Mermaid Diagrams**: Verify rendering across different document paths.

- [x] **Cross-Device & Responsiveness**
  - [x] **Mobile**: Test the mobile navigation menu (Hamburger) and document scrolling.
  - [x] **Tablet**: Verify the Knowledge Graph is interactable on touch devices.
  - [x] **Edge Case**: Ensure Tooltips/HoverCards don't overflow small screens.

- [x] **Data Integrity**
  - [x] **Search**: Verify search (Ctrl+K) works with new content like `polish-test.md`.
  - [x] **Console**: Check console for any Radix UI warnings or missing SVG assets.

---

### Day 3: Deployment & Launch (v0.1.0)
- [ ] **Pre-Deployment Final Sweep**
  - [ ] **Production Build**: Run `npm run build` locally to ensure zero build errors.
  - [ ] **Secrets Audit**: Verify all `.env` variables (Clerk API keys, etc.) are set in Vercel.
  - [ ] **Accessibility Check**: Final check of contrast ratios and screen reader labels.
- [ ] **Production Git Flow**
  - [ ] **Final Commit**: Standardize commit message for the sprint wrap-up.
  - [ ] **Tagging**: Tag the repository state (e.g., `git tag v0.1.0-sprint1`).
  - [ ] **Release**: Create a GitHub Release with the Sprint 1 summary.
- [ ] **Vercel Infrastructure**
  - [ ] **Deployment**: Push to `main` branch to trigger the production pipeline.
  - [ ] **SSL/Domain**: Verify the production URL is healthy and secure.
  - [ ] **Runtime Monitoring**: Check Vercel logs for any edge function timeouts.
- [ ] **Post-Launch Verification**
  - [ ] **Live Smoke Test**: Perform one full user "Read -> Unlock" path on the live site.
  - [ ] **Partner Invite**: Send the first access link to your Field Ops/Strategy partner.
  - [ ] **Snapshot**: Take high-res screenshots of the finished Dashboard for documentation.
- [ ] **Celebrate & Reflect** 🎉
  - [ ] Update `CHANGELOG.md` with "Sprint 1: Core Experience" technical notes.
  - [ ] 15-minute retrospective: What was the hardest part? What can we automate for Sprint 2?

---

## Sprint 2

### Day 3 (Continued): Session 1: High-Fidelity UI (Est: 1.5 Hours)
- [ ] **V4/V5 Fusion: The Resizable Workspace**
  - [ ] **Panel System**: Replace static sidebar with `react-resizable-panels` for Notion-style flexibility.
  - [ ] **NavbarIsland Enhancement**: Add glassmorphism (blur/saturate) and "unread" badges tied to Clerk metadata.
  - [ ] **Persistence**: Save panel width/state to `localStorage`.
- [ ] **Command+ Interface: System Terminal**
  - [ ] **Action Registry**: Implement `Navigate`, `Switch Theme`, and `Reset Progress` commands in CMDK.
  - [ ] **Transitions**: Add smooth spring transitions between search results and action menus.

### Day 3 (Continued): Session 2: Deep Logic & Data (Est: 2 Hours)
- [ ] **Animated Funnels (V8)**
  - [ ] **Sankey Integration**: Implement `Recharts` or `d3-sankey` to visualize Lead -> Revenue flow.
  - [ ] **Live Data Sync**: Connect funnel nodes to the actual document read/interaction progress.
- [ ] **MDX Calculators**
  - [ ] **Calculator Component**: Build a reusable MDX component for TAM/SAM/ROI math.
  - [ ] **Strategic Embedding**: Embed live calculators in `03-financial-projections.md` and GTM docs.
- [ ] **Neural Recs**
  - [ ] **Role-Based Engine**: Implement recommendation logic that prioritizes content based on user `role` (Operations vs Strategic).

### Day 3 (Continued): Session 3: The Data Moat (Est: 2 Hours)
- [ ] **Vault Search+ (The OCR Bridge)**
  - [ ] **PDF Indexing**: Implement a bridge to extract text from PDF assets for fuzzy search.
  - [ ] **Deep Search**: Allow CMDK to query content *inside* the vaulted PDF reports.
- [ ] **Auto-Playbooks**
  - [ ] **Dynamic Templating**: Build a "Generate Playbook" feature that populates MDX with variables.
- [ ] **The "Red Alert" System**
  - [ ] **Health Monitoring**: Monitor business health metrics (milestones) and trigger "Red Alert" UI for blockers.

---

### Day 4: Final Intelligence & Moat QA (Sprint 2 Review)
- [ ] **Intelligence Spec Audit**
  - [ ] **Roadmap Alignment**: Verify all Session 1-3 features are live and functional.
  - [ ] **Accuracy Audit**: Stress-test MDX Calculators with edge-case values (e.g., zero/negative inputs).
  - [ ] **Data Flow**: Verify Neural Recs logic follows user metadata accurately.
  - [ ] **Logic Audit**: Ensure Sankey funnels reflect real progress data, not just mock averages.

- [ ] **Advanced Interaction & UI Audit**
  - [ ] **Workspace Flexibility**: Test `react-resizable-panels` at extreme widths (min/max).
  - [ ] **System Terminal**: Execute every command in the `Ctrl+K` Action Registry.
  - [ ] **"Red Alert" Trigger**: Force-trigger a health alert to verify UI priority and visibility.
  - [ ] **Micro-Interactions**: Audit the spring animations in the new resizable panels and terminal transitions.

- [ ] **Intelligence User Journeys**
  - [ ] **The Decision Path**: Dashboard -> Funnel Insight -> Open Recommended Doc -> Use ROI Calculator.
  - [ ] **The Deep Search**: CMDK Search -> OCR Result (from PDF) -> Open PDF View.
  - [ ] **The Automation**: Define variables -> Generate Playbook -> Export/View Output.

- [ ] **Moat & Performance Verification**
  - [ ] **OCR integrity**: Verify text extraction quality from 3 different PDF formats/layouts.
  - [ ] **Search Latency**: Ensure Deep Search (PDF content) returns results in < 800ms.
  - [ ] **Memory Audit**: Check for memory leaks during heavy resizable panel usage or large Sankey renders.

- [ ] **Final Deployment Prep**
  - [ ] **Technical Debt**: Clear all `// TODO` or `console.log` added during intelligence sessions.
  - [ ] **Vercel Edge Logic**: Verify Neural Recs performance in a production-like edge environment.

### Day 4 (Continued): Final Sprint Audit & Handover
- [ ] **Project Retrospective (The "Antigravity" Audit)**
  - [ ] Compare total hours (Actual: ~11) vs original estimate (Planned: 37 Days).
  - [ ] Update `CHANGELOG.md` with the "Intelligence & Moat" technical release notes.
- [ ] **Founder Handover**
  - [ ] Generate the "Sprint 2: The Decision Engine" summary report.
  - [ ] Record a 5-minute loom walkthrough of the final "Decision Intelligence" workspace.


---

### Day 5: Production Launch (v0.2.0)
- [ ] **Final Production Hardening**
  - [ ] **Security Audit**: Verify Clerk "Production" environment settings and restricted redirect URIs.
  - [ ] **Performance Pass**: Run a final Lighthouse audit (Target: 90+ Score for Performance/SEO).
  - [ ] **Asset Transfer**: Move all critical strategic PDFs/Assets from "Local/Temp" to the persistent Vault storage.
- [ ] **Production Scaling (Vercel)**
  - [ ] **Deploy v0.2.0**: Promote the Intelligence-enabled build to production.
  - [ ] **Domain Finalization**: Connect the final `vault.clario.biz` (or preferred) domain.
  - [ ] **Monitoring Setup**: Enable Vercel Analytics/Speed Insights for long-term health monitoring.
- [ ] **The Strategic Reveal**
  - [ ] **Partner Welcome**: Send the v0.2.0 Production access to the Operations Partner.
  - [ ] **Intelligence Briefing**: Host a live session demonstrating the "Decision Engine" (Calculators + Recs).
  - [ ] **Feedback Loop**: Establish a "Phase 2 Request" board for post-launch refinements.
- [ ] **Antigravity Project Wrap**
  - [ ] **Velocity Archive**: Save the final `01-vault-roadmap-active.md` as a case study for "60x Velocity Development."
  - [ ] **Final Handover**: Close the loop on all Day 1-Day 5 documentation.
