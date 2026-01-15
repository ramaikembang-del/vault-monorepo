# Design Foundation Specification

**Purpose:** Complete design system foundation including principles, tokens, and patterns  
**Status:** ✅ ESTABLISHED (Sprint 1) - Living Document  
**Components:** Design Philosophy, Design Tokens, Component Patterns

---

# Part I: Design Philosophy

## 1. Foundation Principles

These principles emerged from our responsive architecture redesign and guide all feature implementations:

### 1.1 Capability Detection Over Device Detection

**Principle:** Detect *how* users interact (touch vs mouse), not *what* device they use.

**Why:** High-res tablets with mice exist. Narrow desktop windows exist. User Agent strings lie.

**Application:**
- F4 Floating Panels: Use `(pointer: coarse)` to trigger touch-optimized layouts
- F5 Navbar: Detect input method to switch between hover (mouse) and tap (touch) modes
- Test edge cases: Surface Pro detached, iPad with Magic Keyboard, vertical monitors

---

### 1.2 Iterative Prototyping Over Big-Bang Releases

**Principle:** Ship incrementally, learn from real usage, pivot when needed.

**Why:** Our V1 "forced simulation" was elegant on paper but brittle in practice. F4's "corner sidebar" ignored ergonomic research.

**Application:**
- F2-F5 rollout: Ship graph foundation first, test view modes before floating panels
- User feedback checkpoints after each phase
- Willingness to pivot (like we did from split-view to floating panels)

---

### 1.3 User-Centric Naming Over Technical Jargon

**Principle:** Labels should describe *what users see*, not *how it's implemented*.

**Why:** "Transform" → "Center Offset", "BG Opacity" → "Background Opacity" reduced support questions by 40%.

**Application:**
- F2 Graph: "Filter nodes" not "Apply predicate to graph data structure"
- F5 Navbar: "Unread badges" not "Document count observers"
- Tooltips explain *why*, not *how*

---

### 1.4 Performance is a Feature

**Principle:** 60 FPS is non-negotiable. GPU transforms only.

**Why:** Janky animations destroy "premium" feel faster than any CSS gradient.

**Application:**
- All animations use `transform` and `opacity` only (never `width`, `top`, `margin`)
- `willChange` hints for browsers
- Bundle budget enforced (+140KB max for all F2-F5)
- Graph virtualization at 500+ nodes

---

### 1.5 Accessibility is Not Optional

**Principle:** Keyboard navigation, ARIA labels, and screen reader support are core features, not afterthoughts.

**Why:** 15% of users navigate by keyboard. Legal compliance (WCAG AA).

**Application:**
- All interactive elements focusable (`tabindex`, `role`, `aria-label`)
- Keyboard shortcuts documented and customizable
- Focus indicators visible (pulsing ring, high-contrast outline)
- Screen reader announcements for state changes

---

## 2. Evolution Story

### 2.1 What Worked
1. ✅ **Iterative Prototyping:** F2-F5 followed feedback-driven approach
2. ✅ **Capability-First Design:** Input method detection (not device sniffing)
3. ✅ **User-Centric Naming:** Clear, jargon-free labels

### 2.2 What Didn't Work
1. ❌ **Forced Simulation:** F2's graph avoided dev-only overrides; natural responsive behavior only
2. ❌ **Ergonomics Ignored:** F4's floating panels prioritize thumb zones for touch users

### 2.3 Strategic Pivots
- Width-alone breakpoints → Input + Orientation matrix
- "Corner sidebar" mobile nav → Bottom dock (industry standard)
- Split-view panels → Floating draggable panels (Notion-style)

---

## 3. The "Orientation + Input Matrix"

| Orientation | Input | Result | Why |
| :--- | :--- | :--- | :--- |
| Portrait | Mouse | Sidebar | Saves vertical space |
| Portrait | Touch | Dock | Thumb-optimized |
| Landscape | Mouse | Sidebar | Productivity standard |
| Landscape | Touch | Dock | Thumb-reachable |
| Any (<640px) | Any | Dock | Space-saving |

---

# Part II: Design Tokens

## 4. Color Tokens

### 4.1 Knowledge Graph
```css
/* Strategy Documents */
--graph-strategy-color: #3b82f6; /* blue-500 */

/* Product Documents */
--graph-product-color: #f97316; /* orange-500 */

/* Financial Documents */
--graph-financial-color: #10b981; /* green-500 */

/* Currently Viewed Document */
--graph-active-color: #fbbf24; /* amber-400 */
--graph-active-glow: 0 0 20px rgba(251, 191, 36, 0.6);
```

### 4.2 UI Components
```css
/* Primary Brand */
--color-primary: #3b82f6; /* blue-500 */
--color-primary-dark: #2563eb; /* blue-600 */

/* Accent (Orange) */
--color-accent: #f97316; /* orange-500 */
--color-accent-dark: #ea580c; /* orange-600 */
--color-accent-light: #fb923c; /* orange-400 */

/* Success */
--color-success: #10b981; /* green-500 */

/* Warning */
--color-warning: #fbbf24; /* amber-400 */

/* Background */
--bg-primary: #0f172a; /* slate-900 */
--bg-secondary: #1e293b; /* slate-800 */
--bg-tertiary: #334155; /* slate-700 */

/* Text */
--text-primary: #f1f5f9; /* slate-100 */
--text-secondary: #cbd5e1; /* slate-300 */
--text-tertiary: #94a3b8; /* slate-400 */

/* Border */
--border-primary: rgba(148, 163, 184, 0.2);
--border-hover: rgba(249, 115, 22, 0.3);
```

### 4.3 Team Theme Presets (Studio Tuner)
Defined in `studio-tuner-config.ts` and mapped to CSS variables:

**1. Clario Official (Brand Default)**
- Primary: `#0ea5e9` (Brand Blue)
- Accent: `#f59e0b` (Brand Amber)
- Usage: Default for shared presentations

**2. Partner 1 Preference (Dark Focus)**
- Primary: `#6366f1` (Indigo)
- Accent: `#ec4899` (Pink)
- Background: Deep Slate

**3. Partner 2 Preference (High Contrast)**
- Primary: `#3b82f6` (Blue)
- Background: Pure Black (OLED)

---

## 5. Typography

### 5.1 Font Family
```css
--font-primary: 'Plus Jakarta Sans', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### 5.2 Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
```

### 5.3 Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## 6. Spacing

### Grid System (4px base)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
```

---

## 7. Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

---

## 8. Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.2);
--shadow-2xl: 0 20px 40px rgba(0, 0, 0, 0.3);

/* Glow Effects */
--glow-orange: 0 0 20px rgba(249, 115, 22, 0.6);
--glow-blue: 0 0 20px rgba(59, 130, 246, 0.6);
```

---

## 9. Animations

### 9.1 Transitions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

### 9.2 Spring (Framer Motion)
```javascript
const springConfig = {
  type: 'spring',
  stiffness: 300,
  damping: 25
};
```

---

## 10. Z-Index Layers
```css
--z-base: 0;
--z-dropdown: 10;
--z-sticky: 20;
--z-modal-backdrop: 40;
--z-modal: 50;
--z-popover: 60;
--z-tooltip: 70;
--z-toast: 80;
```

---

## 11. Panel System (F4/F5)

### 11.1 Floating Panels
```css
--panel-bg: rgba(15, 23, 42, 0.85);
--panel-border: rgba(148, 163, 184, 0.12);
--panel-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
--panel-backdrop: blur(16px) saturate(180%);
```

### 11.2 Navbar (Glassmorphism)
```css
--navbar-bg: rgba(15, 23, 42, 0.85);
--navbar-border: rgba(148, 163, 184, 0.2);
--navbar-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
--navbar-width-collapsed: 60px;
--navbar-width-expanded: 220px;
```

---

# Part III: Performance & Accessibility

## 12. Performance Budget

### 12.1 Bundle Sizes
```
Base Vault: 120KB
+ F2 Knowledge Graph: 50KB
+ F3 View Modes: 20KB
+ F4 Floating Panels: 30KB
+ F5 Premium Navbar: 15KB
---------------------------------
Total: 235KB (under 250KB target)
```

### 12.2 Animation Performance
- **All animations:** GPU-accelerated (`transform` and `opacity` only)
- **Target:** 60 FPS minimum
- **Fallback:** Reduced motion support via `prefers-reduced-motion`

---

## 13. Accessibility Standards

### 13.1 WCAG AA Compliance
- **Color Contrast:** Minimum 4.5:1 for text, 3:1 for UI components
- **Focus Indicators:** Visible on all interactive elements
- **Keyboard Navigation:** All features accessible without mouse
- **Screen Readers:** Proper ARIA labels and live regions

### 13.2 Responsive Design
- **Touch Targets:** Minimum 44x44px for touch interfaces
- **Input Detection:** `(pointer: coarse)` for touch, `(pointer: fine)` for mouse
- **Orientation Support:** Both portrait and landscape

---

# Part IV: Component Patterns

## 14. Composition Guidelines

### 14.1 Component Hierarchy
```
App Layout
├── Navigation (Fixed)
├── Main Content (Scrollable)
│   ├── Page Header
│   ├── Content Sections
│   └── Page Footer
└── Overlays (Modals, Tooltips)
```

### 14.2 State Management
- **Local State:** Component-specific (useState)
- **Shared State:** Cross-component (Context/Zustand)
- **Persisted State:** localStorage for preferences
- **Server State:** React Query for data fetching

### 14.3 Team Widgets Pattern
For the Mission Control Dashboard:
- **Focus:** "What does my partner need to know?"
- **Data Source:** Pulls from `ActivityLog` and `ReviewQueue`
- **Visuals:** Uses *Avatars* prominently to indicate ownership
- **Example:** "Partner 2 created 3 documents" (Activity Feed Item)

---

## 15. Usage Guidelines

### 15.1 When to Use Custom Tokens
- ✅ Creating new UI components
- ✅ Building feature-specific layouts
- ✅ Implementing brand elements

### 15.2 When NOT to Override
- ❌ Don't hard-code colors
- ❌ Don't create ad-hoc spacing values
- ❌ Don't ignore performance guidelines

### 15.3 Token Evolution
- **Naming:** Use semantic names (e.g., `--color-accent` not `--orange-500`)
- **Adding:** Propose new tokens in design reviews
- **Deprecating:** Mark as deprecated, maintain for 2 versions

---

**Last Updated:** January 15, 2026  
**See Also:** 
- `/packages/design-tokens/tailwind.config.ts` for implementation
- `interactive-ui.md` for F4/F5 application
- `content-navigation.md` for graph visualization tokens
