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

## 25. Coordination with Global Navigation System

### 25.1 F5 vs Global Floating Navbar

**Two Distinct Navigation Features:**

**F5 Premium Navbar (This Spec):**
- **Position:** Vertical sidebar (left/right)
- **Purpose:** Section navigation (Strategy ↔ Products ↔ Financial)
- **Behavior:** Hover to expand (60px → 220px)
- **Content:** Section icons + labels + badges

**Global Floating Navbar (Global Navigation PRD #12):**
- **Position:** Horizontal top bar
- **Purpose:** Context-aware quick actions
- **Behavior:** Auto-hide on scroll
- **Content:** Breadcrumbs + quick actions + global actions (⌘K, Settings, Avatar)

### 25.2 Integration Points

**Badge Coordination:**
```typescript
// F5 sidebar and Global navbar share badge data
interface SharedBadgeStore {
  reviewQueue: number;
  unreadDocs: number;
  newExperiments: number;
  achievements: number;
}

// F5 sidebar shows badges on section icons
<SidebarItem badge={badges.reviewQueue}>
  <DashboardIcon />
</SidebarItem>

// Global navbar shows badges in quick actions
<NavbarQuickAction badge={badges.reviewQueue}>
  Review Queue
</NavbarQuickAction>
```

**Keyboard Shortcuts:**
- F5 sidebar: `Cmd+1/2/3` for section switching
- Global navbar: `Cmd+K` for command palette, `Cmd+Shift+N` to toggle navbar

**State Sync:**
- Both read from same Zustand stores
- Badge updates propagate to both navbars
- Active section state coordinated

**See:** `global-navigation-system.md` for Global Floating Navbar implementation

---

# Part VII: Studio Tuner Integration

## 26. Layout Preset Control (F4/F5 Configuration)

### 26.1 Studio Tuner Coordination

Studio Tuner (PRD #13) provides a Layout Preset System that controls F4 and F5 panel positions, modes, and widget configurations.

**Integration Points:**

**F4 Floating Panels:**
- Panel position (left/center/right) controlled by Studio Tuner Layout Presets
- Panel width (1/3 → 1/2 viewport) configurable via Layout Studio
- Minimize/maximize state persisted in layout configuration
- Preset layouts (Developer Mode, Focus Mode, Strategy Mode) control default panel positions

**F5 Premium Navbar:**
- Navbar mode (full-expand/icon-only) controlled by Studio Tuner Layout Presets
- Navbar position (left/right/top) switchable via F5 key or Layout Studio
- Expansion behavior (60px → 220px) respects layout preset specifications
- Collision logic (panel on left → navbar hides) managed by layout orchestration

### 26.2 Layout Preset Application

```typescript
// Studio Tuner applies layout presets to F4/F5
interface LayoutPresetForF4F5 {
  // F4 Panel Configuration
  panelPosition: 'left' | 'center' | 'right';
  panelWidth: number; // 0.33 - 0.5 of viewport
  panelMinimized: boolean;

  // F5 Navbar Configuration
  navbarMode: 'full-expand' | 'icon-only';
  navbarPosition: 'left' | 'right' | 'top';
  navbarWidth: number; // 60px - 220px
  navbarHidden: boolean; // True if panel on left
}

// Apply layout preset to F4/F5
export function applyLayoutPresetToUI(preset: LayoutConfig) {
  const { panels } = preset;

  // F4: Update panel state
  const panelStore = useFloatingPanelStore.getState();
  panelStore.setPosition(panels.sidebar.position);
  panelStore.setWidth(panels.sidebar.width);
  panelStore.setMinimized(panels.sidebar.defaultState === 'collapsed');

  // F5: Update navbar state
  const navbarStore = useNavbarStore.getState();
  navbarStore.setMode(panels.navbar.mode);
  navbarStore.setPosition(panels.navbar.position);
  navbarStore.setWidth(panels.navbar.width);

  // Collision logic: Hide navbar if panel on left
  if (panels.sidebar.position === 'left' && panels.sidebar.defaultState === 'expanded') {
    navbarStore.setHidden(true);
  } else {
    navbarStore.setHidden(false);
  }
}
```

### 26.3 Theme and Animation Consumption

F4 and F5 components consume Studio Tuner theme and animation settings:

**Theme Consumption (Colors, Typography, Glassmorphism):**
```typescript
// F4 Panel consumes theme
export function FloatingNotePanel() {
  const { currentTheme } = useThemeStudio();

  return (
    <div
      className="floating-panel"
      style={{
        backgroundColor: currentTheme.mode === 'dark'
          ? 'rgba(15, 23, 42, 0.85)'
          : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px) saturate(180%)', // From theme glassmorphism
        borderColor: currentTheme.colors.border,
        boxShadow: currentTheme.elevation.medium,
        fontFamily: currentTheme.typography.fontFamily.sans.join(', '),
      }}
    >
      {/* Panel content */}
    </div>
  );
}

// F5 Navbar consumes theme
export function PremiumNavbar() {
  const { currentTheme } = useThemeStudio();

  return (
    <nav
      className="premium-navbar"
      style={{
        '--navbar-icon-idle': currentTheme.colors.text.secondary,
        '--navbar-icon-hover': currentTheme.colors.accent,
        '--navbar-icon-active': currentTheme.colors.primary,
        '--navbar-badge-bg': currentTheme.colors.accent,
        fontFamily: currentTheme.typography.fontFamily.sans.join(', '),
      }}
    >
      {/* Navbar items */}
    </nav>
  );
}
```

**Animation Consumption (Speed, Timing, Reduced Motion):**
```typescript
// F4 Panel animation respects Studio Tuner settings
export function FloatingNotePanel() {
  const { config: animConfig } = useAnimationStore();

  // Panel drag and resize animations
  const transitionDuration = 300 * animConfig.speedMultiplier; // Base 300ms
  const transitionTiming = getEasingFromConfig(animConfig.transitionStyle);

  return (
    <motion.div
      className="floating-panel"
      drag
      dragMomentum={!animConfig.reducedMotion} // Disable momentum if reduced motion
      transition={{
        duration: animConfig.reducedMotion ? 0.01 : transitionDuration / 1000,
        ease: transitionTiming,
      }}
    >
      {/* Panel content */}
    </motion.div>
  );
}

// F5 Navbar expansion respects Studio Tuner settings
export function PremiumNavbar() {
  const { config: animConfig } = useAnimationStore();

  return (
    <motion.nav
      animate={{ width: isExpanded ? 220 : 60 }}
      transition={{
        duration: animConfig.reducedMotion ? 0 : 0.3 * animConfig.speedMultiplier,
        ease: animConfig.transitionStyle,
      }}
    >
      {/* Navbar items */}
    </motion.nav>
  );
}
```

**Accessibility Consumption (High Contrast, Focus Indicators, Text Scaling):**
```typescript
// F4/F5 accessibility enhancements from Studio Tuner
export function FloatingNotePanel() {
  const { config: a11yConfig } = useAccessibilityStore();

  return (
    <div
      className="floating-panel"
      style={{
        // High contrast mode
        ...(a11yConfig.highContrast && {
          backgroundColor: '#ffffff',
          border: '2px solid #000000',
          color: '#000000',
        }),

        // Text scaling
        fontSize: `calc(1rem * ${a11yConfig.textScaling.multiplier})`,

        // Focus indicator
        '--focus-ring-size': `${a11yConfig.focusIndicator.size}px`,
      }}
    >
      {/* Panel content */}
    </div>
  );
}
```

### 26.4 Preset Examples

**Developer Mode Preset (F4/F5 Configuration):**
```typescript
{
  id: 'developer',
  name: 'Developer Mode',
  panels: {
    sidebar: { position: 'left', width: 320, defaultState: 'expanded' }, // F4
    navbar: { position: 'left', mode: 'collapsed', width: 60 }, // F5
  }
}
```
**Result:**
- F4 panel expanded on left (320px width)
- F5 navbar collapsed icon-only mode (60px width)
- Both on left side, stacked horizontally

**Focus Mode Preset (F4/F5 Configuration):**
```typescript
{
  id: 'focus',
  name: 'Focus Mode',
  panels: {
    sidebar: { position: 'hidden', width: 0, defaultState: 'collapsed' }, // F4
    navbar: { position: 'left', mode: 'icon-only', width: 60 }, // F5
  }
}
```
**Result:**
- F4 panel hidden for distraction-free work
- F5 navbar minimal icon-only mode
- Maximum content area space

**See:** `specifications/studio-tuner-system.md` #3 for complete Layout Preset System architecture
**See:** PRD #13 Section 5 for Layout Preset user interface and workflows

---

**Last Updated:** January 20, 2026
**See Also:**
- `content-navigation.md` for F2/F3 specifications
- `design-foundation.md` for design tokens
- `global-navigation-system.md` for Global Floating Navbar coordination
- `10-biz-lab-prd.md` for UX feature context
