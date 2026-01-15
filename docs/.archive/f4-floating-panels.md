# F4: Floating Panel System
**Status:** 📋 PLANNED (Sprint 2 - Session 1)  
**Feature:** Notion-Style Resizable Panels

---

## Goal

Create **floating, draggable, resizable panels** that overlay the knowledge graph, providing maximum layout freedom without sacrificing graph visibility.

---

## Core Features

### Position Presets
```
◀ L | C | R ▶
```
- **Left:** Panel at left edge (combines with navbar)
- **Center:** Panel at viewport center  
- **Right:** Panel at right edge

### Width Slider
- Range: 1/3 → 1/2 of viewport
- Smooth animated transitions (Framer Motion spring)
- Snap to common breakpoints

### Drag Handle
- Top bar = drag zone
- Free positioning anywhere on canvas
- Magnetic snapping to presets
- Smooth physics-based movement

### Minimize/Maximize
- Collapses to small "📄" icon in corner
- Click to restore last position
- Animated expand/collapse

---

## Component Architecture

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

## Smart Panel Orchestration

### Collision Logic
- If note panel on **LEFT** → Navbar + Panel combine into single unit
- If note panel on **CENTER** or **RIGHT** → Navbar stays separate

### State Management

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

### localStorage Persistence

```typescript
localStorage.setItem('vault-graph-ui', JSON.stringify({
  panelPosition,
  panelWidth,
  navbarMode
}));
```

---

## Technical Stack

```bash
# Already installed:
npm install framer-motion
npm install react-draggable
```

---

## Implementation Tasks

**Session 1 (45 minutes):**
- [ ] Create `FloatingPanel` component
- [ ] Implement position presets (L/C/R buttons)
- [ ] Add width slider with smooth transitions
- [ ] Drag handle with magnetic snapping
- [ ] Minimize/maximize functionality
- [ ] localStorage integration
- [ ] Test with navbar orchestration

---

## Design Tokens

```css
--panel-bg: rgba(15, 23, 42, 0.85);
--panel-border: rgba(148, 163, 184, 0.12);
--panel-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
--panel-backdrop: blur(16px) saturate(180%);
```

---

## Performance Targets

- **Panel drag:** < 16ms frame time (60 FPS)
- **Resize animation:** < 300ms smooth transition
- **Graph maintains:** 60 FPS during panel movement
- **Bundle size:** < 30KB for panel system

---

## Success Metrics

- [ ] Panels draggable to any position
- [ ] Magnetic snapping works smoothly
- [ ] Width slider updates in real-time
- [ ] State persists across page reloads
- [ ] No performance degradation to graph

---

**Last Updated:** January 15, 2026  
**See Also:** `f3-view-modes.md`, `f5-premium-navbar.md`, `design-tokens.md`

