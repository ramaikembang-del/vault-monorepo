# F5: Premium Navbar Experience
**Status:** 📋 PLANNED (Sprint 2 - Session 1)  
**Feature:** Glassmorphism + Smart Badges

---

## Goal

Transform the navbar into an **intelligent, delightful command center** with glassmorphism, unread badges, micro-interactions, and full accessibility.

---

## Visual Polish

### Glassmorphism
```css
background: rgba(15, 23, 42, 0.85);
backdrop-filter: blur(16px) saturate(180%);
border: 1px solid rgba(148, 163, 184, 0.2);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
```

### State Animations
- **Idle:** Gray icons (#94a3b8)
- **Hover:** Orange glow + 1.1x scale
- **Active:** Orange fill + left border accent
- **Focus:** Pulsing ring (accessibility)

---

## Expansion Modes

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

## Smart Features

### Unread Badges
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

### Recent Activity Indicator
- Orange dot if visited < 2hrs ago
- Fades out with 500ms transition

### Context-Aware Highlighting
- Auto-detect current route (`usePathname()`)
- Active tab highlighted with orange accent

---

## Micro-Interactions (Framer Motion)

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

## Accessibility

### Keyboard Navigation
- **Cmd+1/2/3:** Jump to sections
- **Cmd+K:** Command palette
- **Tab:** Cycle through items
- **Esc:** Close expanded panel

### ARIA Labels
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

### Focus Indicators
- Visible pulsing ring on keyboard focus
- High-contrast outline (3px solid)
- Skip to content link

---

## Implementation Tasks

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

## Design Tokens

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

## Performance Targets

- **All animations:** 60 FPS (GPU transforms only)
- **Expansion transition:** < 300ms
- **Badge updates:** < 100ms (debounced)
- **Lazy loading:** Only count on hover
- **Bundle increase:** < 15KB

---

## Success Metrics

- [ ] Smooth 60 FPS animations
- [ ] WCAG AA accessibility compliance
- [ ] Badges update in real-time
- [ ] Keyboard navigation works perfectly
- [ ] Expansion feels delightful (user feedback)

---

**Last Updated:** January 15, 2026  
**See Also:** `f4-floating-panels.md`, `design-tokens.md`, `design-philosophy.md`

