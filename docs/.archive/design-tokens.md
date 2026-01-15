# Design Tokens Reference
**Centralized Design System Values**

---

## Color Tokens

### Knowledge Graph
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

### UI Components
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

---

## Typography

### Font Family
```css
--font-primary: 'Plus Jakarta Sans', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## Spacing

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

## Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

---

## Shadows
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

## Animations

### Transitions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Spring (Framer Motion)
```javascript
const springConfig = {
  type: 'spring',
  stiffness: 300,
  damping: 25
};
```

---

## Z-Index Layers
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

## Panel System (V4/V5)

### Floating Panels
```css
--panel-bg: rgba(15, 23, 42, 0.85);
--panel-border: rgba(148, 163, 184, 0.12);
--panel-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
--panel-backdrop: blur(16px) saturate(180%);
```

### Navbar (Glassmorphism)
```css
--navbar-bg: rgba(15, 23, 42, 0.85);
--navbar-border: rgba(148, 163, 184, 0.2);
--navbar-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
--navbar-width-collapsed: 60px;
--navbar-width-expanded: 220px;
```

---

## Performance Budget

### Bundle Sizes
```
Base Vault: 120KB
+ V2 Knowledge Graph: 50KB
+ V3 View Modes: 20KB
+ V4 Floating Panels: 30KB
+ V5 Premium Navbar: 15KB
---------------------------------
Total: 235KB (under 250KB target)
```

### Animation Performance
- **All animations:** GPU-accelerated (`transform` and `opacity` only)
- **Target:** 60 FPS minimum
- **Fallback:** Reduced motion support via `prefers-reduced-motion`

---

**Last Updated:** January 15, 2026  
**See Also:** `/packages/design-tokens/tailwind.config.ts`
