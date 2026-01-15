# Interactive UI & UX Enhancements Specification

**Purpose:** Complete specification for interactive UI components and UX enhancements across Vault  
**Status:** F4/F5 📋 PLANNED (Sprint 2) | UX Features ✅ IMPLEMENTED (Sprint 1)  
**Components:** Floating Panels (F4), Premium Navbar (F5), Document Previews, Tooltips, Customer Journey

---

# Part I: Floating Panel System (F4)

## 1. Goal

Create **floating, draggable, resizable panels** that overlay the knowledge graph, providing maximum layout freedom without sacrificing graph visibility.

**Status:** 📋 PLANNED (Sprint 2 - Session 1)

---

## 2. Core Features

### 2.1 Position Presets
```
◀ L | C | R ▶
```
- **Left:** Panel at left edge (combines with navbar)
- **Center:** Panel at viewport center  
- **Right:** Panel at right edge

### 2.2 Width Slider
- Range: 1/3 → 1/2 of viewport
- Smooth animated transitions (Framer Motion spring)
- Snap to common breakpoints

### 2.3 Drag Handle
- Top bar = drag zone
- Free positioning anywhere on canvas
- Magnetic snapping to presets
- Smooth physics-based movement

### 2.4 Minimize/Maximize
- Collapses to small "📄" icon in corner
- Click to restore last position
- Animated expand/collapse

---

## 3. Component Architecture

```tsx
<GraphCanvas>
  {/* Background: Force-directed graph */}
  <ForceGraph2D />
  
  {/* Overlays */}
  <FloatingNotePanel 
    position="center"      // left | center | right
    width={0.4}            // 0.33 - 0.5 of viewport
    isDraggable
    onPositionChange={handlePanelMove}
  />
  
  <DynamicNavbar 
    mode="full-expand"     // full-expand | icon-only
    position="left"
    isHidden={notePanelPosition === "left"}
  />
</GraphCanvas>
```

---

## 4. Smart Panel Orchestration

### 4.1 Collision Logic
- If note panel on **LEFT** → Navbar + Panel combine into single unit
- If note panel on **CENTER** or **RIGHT** → Navbar stays separate

### 4.2 State Management

```typescript
interface GraphViewState {
  // Note Panel
  notePanelPosition: 'left' | 'center' | 'right';
  notePanelWidth: number;          // 0.33 - 0.5
  notePanelIsMinimized: boolean;
  currentDocId: string | null;
  
  // Navbar (see F5)
  navbarMode: 'full-expand' | 'icon-only';
  navbarPosition: 'left' | 'right';
  navbarIsHidden: boolean;
  
  // Persistence
  savedToLocalStorage: boolean;
}
```

### 4.3 localStorage Persistence

```typescript
localStorage.setItem('vault-graph-ui', JSON.stringify({
  panelPosition,
  panelWidth,
  navbarMode
}));
```

---

## 5. Technical Stack

```bash
# Already installed:
npm install framer-motion
npm install react-draggable
```

---

## 6. Implementation Tasks

**Session 1 (45 minutes):**
- [ ] Create `FloatingPanel` component
- [ ] Implement position presets (L/C/R buttons)
- [ ] Add width slider with smooth transitions
- [ ] Drag handle with magnetic snapping
- [ ] Minimize/maximize functionality
- [ ] localStorage integration
- [ ] Test with navbar orchestration

---

## 7. F4 Design Tokens

```css
--panel-bg: rgba(15, 23, 42, 0.85);
--panel-border: rgba(148, 163, 184, 0.12);
--panel-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
--panel-backdrop: blur(16px) saturate(180%);
```

---

## 8. F4 Performance Targets

- **Panel drag:** < 16ms frame time (60 FPS)
- **Resize animation:** < 300ms smooth transition
- **Graph maintains:** 60 FPS during panel movement
- **Bundle size:** < 30KB for panel system

---

## 9. F4 Success Metrics

- [ ] Panels draggable to any position
- [ ] Magnetic snapping works smoothly
- [ ] Width slider updates in real-time
- [ ] State persists across page reloads
- [ ] No performance degradation to graph

---

# Part II: Premium Navbar Experience (F5)

## 10. Goal

Transform the navbar into an **intelligent, delightful command center** with glassmorphism, unread badges, micro-interactions, and full accessibility.

**Status:** 📋 PLANNED (Sprint 2 - Session 1)

---

## 11. Visual Polish

### 11.1 Glassmorphism
```css
background: rgba(15, 23, 42, 0.85);
backdrop-filter: blur(16px) saturate(180%);
border: 1px solid rgba(148, 163, 184, 0.2);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
```

### 11.2 State Animations
- **Idle:** Gray icons (#94a3b8)
- **Hover:** Orange glow + 1.1x scale
- **Active:** Orange fill + left border accent
- **Focus:** Pulsing ring (accessibility)

---

## 12. Expansion Modes

### Mode A: Full Panel (Notion-style)
```
Collapsed (60px):           Hover (220px):
┌──────┐                   ┌───────────────┐
│ 📁   │                   │ 📁 Strategy   │
│ 💼   │  ──(hover)──>     │ 💼 Products   │
│ 💰   │                   │ 💰 Financial  │
└──────┘                   └───────────────┘
```
- Expands from 60px → 220px on hover
- Shows text labels + badges
- 300ms spring animation

### Mode B: Icon-Only
```
Collapsed (60px):           Hover (60px):
┌──────┐                   ┌──────┐
│ 📁   │                   │ 📁💫 │ ← icon glows
│ 💼   │  ──(hover)──>     │ 💼   │
│ 💰   │                   │ 💰   │
└──────┘                   └──────┘
```
- Icons pulse/glow on hover
- Tooltip appears after 500ms
- Minimal width change

---

## 13. Smart Features

### 13.1 Unread Badges
Orange bubble with count (`[3]`)

**Badge sources:**
- **Strategy:** Unread docs count
- **Products:** New experiments count
- **Achievements:** Unlockable count

```tsx
<NavItem badge={unreadCount}>
  <Strategy Icon />
</NavItem>
```

### 13.2 Recent Activity Indicator
- Orange dot if visited < 2hrs ago
- Fades out with 500ms transition

### 13.3 Context-Aware Highlighting
- Auto-detect current route (`usePathname()`)
- Active tab highlighted with orange accent

---

## 14. Micro-Interactions (Framer Motion)

```tsx
<motion.div
  whileTap={{ scale: 0.9 }}
  whileHover={{
    scale: 1.15,
    rotate: 5,
    filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))'
  }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
/>
```

---

## 15. Accessibility

### 15.1 Keyboard Navigation
- **Cmd+1/2/3:** Jump to sections
- **Cmd+K:** Command palette
- **Tab:** Cycle through items
- **Esc:** Close expanded panel

### 15.2 ARIA Labels
```tsx
<nav aria-label="Main navigation">
  <button 
    aria-label="Strategy documents (3 unread)"
    aria-expanded={isExpanded}
  >
    <StrategyIcon />
  </button>
</nav>
```

### 15.3 Focus Indicators
- Visible pulsing ring on keyboard focus
- High-contrast outline (3px solid)
- Skip to content link

---

## 16. F5 Implementation Tasks

**Session 1 (45 minutes):**
- [ ] Glassmorphism styling
- [ ] State animations (idle/hover/active/focus)
- [ ] Two expansion modes (user preference toggle)
- [ ] Badge system + real-time counts
- [ ] Recent activity indicator
- [ ] Context-aware highlighting
- [ ] Keyboard navigation + ARIA labels
- [ ] Framer Motion micro-interactions

---

## 17. F5 Design Tokens

```css
--navbar-bg: rgba(15, 23, 42, 0.85);
--navbar-border: rgba(148, 163, 184, 0.2);
--navbar-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
--navbar-width-collapsed: 60px;
--navbar-width-expanded: 220px;

--navbar-icon-idle: #94a3b8;
--navbar-icon-hover: #fb923c;
--navbar-icon-active: #f97316;

--navbar-badge-bg: #f97316;
--navbar-badge-text: #ffffff;
```

---

## 18. F5 Performance Targets

- **All animations:** 60 FPS (GPU transforms only)
- **Expansion transition:** < 300ms
- **Badge updates:** < 100ms (debounced)
- **Lazy loading:** Only count on hover
- **Bundle increase:** < 15KB

---

## 19. F5 Success Metrics

- [ ] Smooth 60 FPS animations
- [ ] WCAG AA accessibility compliance
- [ ] Badges update in real-time
- [ ] Keyboard navigation works perfectly
- [ ] Expansion feels delightful (user feedback)

---

# Part III: Document Preview System

## 20. Hover Preview Cards

**Purpose:** Show document previews on hover throughout Vault

**Status:** ✅ IMPLEMENTED (Sprint 1 - Biz Lab)

**Implementation:**
- Preview card appears on link hover
- Displays title, read time, key takeaways
- Frontmatter-driven content
- Smooth fade-in animation

**Component:** `components/DocumentPreviewCard.tsx`

**Trigger:** Hover over any internal documentation link

**Visual:** Glass-morphic card with:
- Document title
- Estimated read time
- 2-3 key takeaways from frontmatter
- "View full doc →" link

---

# Part IV: Contextual Tooltips

## 21. "Why This Matters" Tooltips

**Purpose:** Provide context on document importance

**Status:** ✅ IMPLEMENTED (Sprint 1 - Biz Lab)

**Implementation:**
- Tooltips on document links
- Pull from `whyItMatters` frontmatter field
- Appear after 500ms hover delay
- Dismissable

**Example:**
```
Hover: "GTM Strategy" link
Tooltip: "This is your execution playbook for Sprint 1. 
         Without it, you won't know Week 0 vs Week 5 priorities."
```

---

# Part V: Customer Journey Flow

## 22. Animated Flow Diagram

**Purpose:** Visual representation of customer journey stages

**Status:** ✅ IMPLEMENTED (Sprint 1 - Biz Lab)

**Implementation:**
- Interactive flow diagram
- Click stages to view details
- Animated transitions between stages
- Color-coded by phase

**Stages:**
1. **Awareness** (Blue)
2. **Consideration** (Purple)
3. **Decision** (Orange)
4. **Retention** (Green)

**Technical:** Mermaid diagram with click handlers

---

# Part VI: Cross-Component Integration

## 23. F4 + F5 Orchestration

**Collision Handling:**
- Panel on left → Navbar hides
- Panel on center/right → Navbar visible
- Smooth state transitions

**Shared State:**
- Both use same localStorage key
- Coordinated animations
- Mutual awareness of positions

---

## 24. Combined Performance

**Target:**
- **All UI animations:** 60 FPS
- **Total bundle addition:** < 45KB (F4 + F5)
- **State sync:** < 50ms
- **No graph performance degradation**

---

**Last Updated:** January 15, 2026  
**See Also:** 
- `content-navigation.md` for F2/F3 specifications
- `design-foundation.md` for design tokens
- `10-biz-lab-prd.md` for UX feature context
