# Vault Roadmap: Optimized for Solo Dev (10-15 Days)
**Antigravity-Powered Sequential Build**

---

# Vault Roadmap: Optimized for Solo Dev (10-15 Days)
**Antigravity-Powered Sequential Build**

---

## 🎯 Target: 14 Days (3 Weeks)

**Strategy:** Foundation First → MVP Features → Polish

---

## 🏗️ Sprint 0: Core Foundation (2 Days)
**Critical Pre-requisite:** The "Graph" and "Dashboard" need a place to live.

### Day 1-2: Scaffolding Sections
**Scope:**
- ✅ **Biz Lab:** Scaffolding for Custom MDX content (`next-mdx-remote` or similar), create `/biz` route
- ✅ **Products Lab:** Create `/products` route, experiment folder structure
- ✅ **Unified Nav:** Top tabs (Products | Biz | Admin) per `vault-overview-prd.md`

**Deliverable:** Functional `/biz` and `/products` routes with MDX rendering support

---

## 📦 Sprint 1: Core Graph Experience (5 Days)

### Day 1-3: V2 Knowledge Graph (MVP)
**Scope:** Basic force-directed graph with click navigation
- ✅ Graph rendering (react-force-graph-2d)
- ✅ Color-coded nodes (strategy/product/financial)
- ✅ Click to navigate
- ❌ **DEFER:** Search, cluster toggle, preview cards

### Day 4-5: V3 View Modes (Simplified)
**Scope:** Full-window + floating note only (skip split-view)
- ✅ Full-window mode (default)
- ✅ Floating note panel (draggable)
- ❌ **DEFER:** Split-view (not critical, V4 replaces it anyway)

**Deliverable:** Working knowledge graph with basic floating notes

---

## 📊 Sprint 1 (Continued): Dashboard Foundation (4 Days)

### Day 6-8: V6 Mission Control (MVP)
**Scope:** Sprint progress + personal tracking only
- ✅ Sprint progress bar
- ✅ Personal progress tracker (Clerk metadata)
- ✅ Company snapshot (static data)
- ❌ **DEFER:** Smart recommendations engine (complex algorithm)

### Day 9: V7 Product Portfolio (Simplified)
**Scope:** Static Mermaid diagram with basic click handlers
- ✅ Mermaid diagram generation
- ✅ Click to navigate to product docs
- ❌ **DEFER:** Hover tooltips, animated transitions

**Deliverable:** Functional dashboard showing progress and products

---

## 🎮 Sprint 1 (Final): Engagement Layer (3 Days)

### Day 10-11: V11 Achievements (Core Only)
**Scope:** Achievement tracking without celebrations
- ✅ Achievement definitions
- ✅ Progress calculation
- ✅ Achievement display (simple list)
- ❌ **DEFER:** Confetti animations, toast notifications, sound effects

### Day 12: V9 + V10 Combined (Minimal)
**Scope:** Basic hover previews + tooltips
- ✅ Document hover preview (title, read time, status)
- ✅ "Why This Matters" tooltips (5-10 key docs only)
- ❌ **DEFER:** Full metadata extraction, related docs, bookmark/comment buttons

**Deliverable:** Gamification system + basic contextual help

---

## ⏭️ Deferred to Sprint 2 (Post-Launch)

### Low Priority Features (5 Days)
- **V4 Floating Panels:** V3's floating note is "good enough" for MVP
- **V5 Premium Navbar:** Current navbar works, polish can wait
- **V8 Customer Journey:** Nice-to-have visualization
- **V6 Recommendations Engine:** Manual navigation is fine for now
- **V11 Celebration Animations:** Achievements work without confetti

**Sprint 2 Timeline:** +5 days after launch (if needed)

---

## 📅 Sequential Timeline

```
Week 1 (Days 1-5): Foundation + Graph
├─ Mon-Tue: Sprint 0 Foundation (Biz/Products Setup)
└─ Wed-Fri: Sprint 1 V2 Knowledge Graph MVP

Week 2 (Days 6-10): Floating Notes + Dashboard
├─ Mon-Tue: Sprint 1 V3 Floating Notes
├─ Wed-Fri: Sprint 1 V6 Mission Control MVP

Week 3 (Days 11-14): Portfolio + Achievements + Polish
├─ Mon: Sprint 1 V7 Product Portfolio
├─ Tue-Wed: Sprint 1 V11 Achievements
└─ Thu: Sprint 1 V9+V10 Polish
```

**Total: 14 Days**

---

## 🔧 Simplified Tech Stack

### Install Once (Day 1)
```bash
npm install react-force-graph-2d    # V2
npm install framer-motion            # V3
npm install react-draggable          # V3
npm install recharts                 # V6
npm install @radix-ui/react-tooltip  # V9, V10
```

**Deferred Dependencies:**
- ~~react-resizable-panels~~ (split-view deferred)
- ~~react-flow-renderer~~ (customer journey deferred)
- ~~react-confetti~~ (animations deferred)
- ~~sonner~~ (toast notifications deferred)

**Bundle Impact:** ~120KB (vs 200KB full version)

---

## ✂️ Scope Reductions Summary

| Feature | Original | MVP | Savings |
|---------|----------|-----|---------|
| V2 Graph | 4 days | 3 days | -1 day |
| V3 View Modes | 5 days | 2 days | -3 days (skip split-view) |
| V4 Floating Panels | 5 days | DEFERRED | -5 days |
| V5 Premium Navbar | 3 days | DEFERRED | -3 days |
| V6 Dashboard | 5 days | 3 days | -2 days (skip recommendations) |
| V7 Portfolio | 3 days | 1 day | -2 days (static only) |
| V8 Customer Journey | 3 days | DEFERRED | -3 days |
| V9 Previews | 2 days | 0.5 days | -1.5 days (basic only) |
| V10 Tooltips | 2 days | 0.5 days | -1.5 days (5-10 docs only) |
| V11 Achievements | 5 days | 2 days | -3 days (no animations) |

**Total Savings:** 25 days → 12 days (**52% reduction**)

---

## ✅ MVP Success Criteria

### Must Have (Day 12)
- [ ] Knowledge graph renders 100+ nodes at 60 FPS
- [ ] Floating note panel works smoothly
- [ ] Dashboard shows sprint progress + personal stats
- [ ] Product portfolio clickable
- [ ] 5+ achievements trackable
- [ ] 5-10 docs have "Why This Matters" tooltips
- [ ] Bundle size < 150KB

### Nice to Have (Sprint 2)
- [ ] Confetti on achievement unlock
- [ ] Smart recommendation engine
- [ ] Customer journey visualization
- [ ] Premium navbar polish
- [ ] Full floating panel system

---

## 🚀 Day-by-Day Breakdown

### Day 1-2: Foundation (Sprint 0)
### Day 1-2: Foundation (Sprint 0)
- [ ] Install MDX dependencies (`next-mdx-remote`)
- [ ] Create `/biz` and `/products` routes
- [ ] Setup top-level tab navigation

### Day 3-5: Graph Foundation (Sprint 1)
- [ ] Install dependencies
- [ ] Build graph data extraction script
- [ ] Generate graph-data.json from Biz Lab docs
- [ ] GraphView component
- [ ] Color-coded nodes

### Day 4-5: Floating Notes
- [ ] Draggable panel component
- [ ] Position controls (L/C/R)
- [ ] Click node → Load in panel

### Day 6-8: Mission Control
- [ ] Clerk metadata schema
- [ ] Sprint progress bar (Recharts)
- [ ] Personal progress tracker
- [ ] Company snapshot cards

### Day 9: Product Portfolio
- [ ] Mermaid diagram from config
- [ ] Click handlers to navigate

### Day 10-11: Achievements
- [ ] Achievement definitions
- [ ] Progress calculation
- [ ] Achievement list UI

### Day 12: Polish
- [ ] Hover previews (basic)
- [ ] Tooltips (5-10 docs)
- [ ] Final testing

---

## 💡 Antigravity Optimization Tips

1. **Batch Similar Work:** Do all Clerk metadata work in one session (Day 6-8)
2. **Reuse Components:** Floating panel from V3 = foundation for future V4
3. **Skip Perfection:** "Working" > "Perfect" for MVP
4. **Test as You Go:** Don't save testing for the end
5. **Use AI for Boilerplate:** Let me generate achievement definitions, frontmatter templates

---

## 🎯 Post-MVP Roadmap (Optional Sprint 2)

If you want to add deferred features later:

**Week 4-5 (5 days):**
- Day 13-14: V5 Premium Navbar
- Day 15: V8 Customer Journey
- Day 16-17: V4 Floating Panels (full version)

**Total with Sprint 2:** 17 days (3.5 weeks)

---

**Recommendation:** Ship MVP at Day 14, gather user feedback, then decide if Sprint 2 is needed.

**Last Updated:** 2026-01-10  
**Status:** Optimized for Solo Dev
