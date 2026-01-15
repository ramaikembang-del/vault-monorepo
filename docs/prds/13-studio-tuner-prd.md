# Product Requirement Document (PRD): Studio Tuner

**Product:** Studio Tuner (Visual Customization Lab)  
**Type:** Internal (Theme & Layout Configuration)  
**Status:** 📋 PLANNED (Sprint 3+)  
**Domain:** `vault.klario-world.com/studio`  
**Parent:** Clario Vault (see `00-vault-overview-prd.md`)

---

# Part I: Foundation

## 📋 Partner Summary

| Field | Details |
| :--- | :--- |
| **For** | Personalizing the Workspace |
| **Goal** | Make the Vault look and feel how you want (Themes, Layouts). |
| **Key Actions** | • Switch to "Clario Official" Theme<br>• Create "Focus Mode" Layout<br>• Adjust Text Size or Contrast |

---

## 🎨 1. Executive Summary

**Studio Tuner** is a visual customization interface where users can personalize their Vault experience: themes, layouts, animations, and accessibility settings. Think "Figma for your workspace" - real-time preview of every change.

**Core Function:** "Make Vault yours" - customize appearance and behavior without code.

---

## 2. Strategic Context

**Problem:**
- One-size-fits-all UX doesn't fit all users
- Some prefer minimal UI, others want rich visuals
- Accessibility needs vary (animations, contrast, etc.)
- Power users want layout control

**Solution:**
- Real-time theme customization
- Layout preset system (integrates with F4/F5)
- Animation speed controls
- Accessibility toggles

**Users:**
- **2 Co-founders:** Personalize their own workspace
- **Team Consistency:** Option to use shared "Clario Brand" theme

---

## 3. Product Scope

### Core Features (MVP)

**3.1 Theme Studio**
- Color palette customization
- Dark/light mode variants
- Accent color picker
- Typography controls

**3.2 Layout Presets**
- Panel positions (F4 integration)
- Navbar modes (F5 integration)
- Dashboard widget order
- Save/load/share presets

**3.3 Animation Controls**
- Speed multiplier (0.5x - 2x)
- Reduced motion mode
- Transition styles
- Performance vs beauty slider

**3.4 Accessibility Tools**
- High contrast mode
- Focus indicators
- Text scaling
- Color blindness filters

---

# Part II: Theme Studio

## 4. Color Customization

### 4.1 Color Picker Interface

**Primary Colors:**
```
┌─────────────────────────────────┐
│ Primary    [#3b82f6] 🎨         │
│ Accent     [#f97316] 🎨         │
│ Success    [#10b981] 🎨         │
│ Warning    [#fbbf24] 🎨         │
└─────────────────────────────────┘
```

**Live Preview:**
```
[Preview Pane]
  → Dashboard with new colors
  → Products Lab card samples
  → Biz Lab navigation
```

### 4.2 Color Palette Presets

**Team Presets:**
- **Clario Official:** Brand colors (consistency)
- **Partner 1 Preferred:** Dark focused
- **Partner 2 Preferred:** Light/High contrast

**(Technical Theme JSON moved to Appendix)**
```typescript
const themePresets = {
  default: {
    primary: '#3b82f6',
    accent: '#

f97316',
    success: '#10b981'
  },
  midnight: {
    primary: '#818cf8',
    accent: '#fb7185',
    success: '#34d399'
  },
  forest: {
    primary: '#059669',
    accent: '#f59e0b',
    success: '#10b981'
  },
  sunset: {
    primary: '#f97316',
    accent: '#fbbf24',
    success: '#fb923c'
  }
};
```

### 4.3 Dark/Light Mode Variants

**Auto-generate:** Light colors → Dark mode variants
```typescript
function generateDarkVariant(lightColor: string) {
  // Darken backgrounds, lighten text
  return {
    bg: darken(lightColor, 0.9),
    text: lighten(lightColor, 0.9),
    border: darken(lightColor, 0.7)
  };
}
```

---

## 5. Typography Controls

### 5.1 Font Selection

**Available Fonts:**
- Plus Jakarta Sans (default)
- Inter
- Poppins
- JetBrains Mono (code)

**Font Size Multiplier:**
```
Small  [0.875x]
Medium [1.0x]   ← Default
Large  [1.125x]
XLarge [1.25x]
```

### 5.2 Line Height & Spacing

**Reading Comfort:**
```
Tight   [1.25]
Normal  [1.5]   ← Default
Relaxed [1.75]
Loose   [2.0]
```

---

# Part III: Layout Presets

## 6. Panel & Navigation Configuration

### 6.1 Panel Positions (F4 Integration)

**Saved Layouts:**
```
┌────────────────────────────────────┐
│ Preset: Developer Mode             │
│ ┌──────┐  ┌─────────────────┐     │
│ │ Nav  │  │  Main Content   │     │
│ │ Left │  │                 │     │
│ │      │  │                 │     │
│ └──────┘  └─────────────────┘     │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Preset: Focus Mode                 │
│       ┌─────────────────────┐      │
│       │  Main Content       │      │
│       │  (Centered)         │      │
│       │                     │      │
│       └─────────────────────┘      │
└────────────────────────────────────┘
```

### 6.2 Navbar Modes (F5 Integration)

**Position & Style:**
```typescript
interface NavbarConfig {
  position: 'left' | 'right' | 'top';
  mode: 'collapsed' | 'expanded' | 'icon-only';
  width: number; // 60px - 220px
}
```

### 6.3 Dashboard Widget Order

**Drag & Drop:**
```
┌────────────────────────────────┐
│ [Drag]  Sprint Progress        │
│ [Drag]  Achievements           │
│ [Drag]  Portfolio Map          │
│ [Drag]  Quick Actions          │
└────────────────────────────────┘
```

---

## 7. Preset Management

### 7.1 Save Custom Presets

```typescript
interface LayoutPreset {
  id: string;
  name: string;
  description: string;
  config: {
    theme: ThemeConfig;
    layout: LayoutConfig;
    animations: AnimationConfig;
  };
  createdAt: Date;
}

function savePreset(name: string) {
  const preset: LayoutPreset = {
    id: generateId(),
    name,
    description: '',
    config: getCurrentConfig(),
    createdAt: new Date()
  };
  
  localStorage.setItem(`preset-${preset.id}`, JSON.stringify(preset));
}
```

### 7.2 Share Presets

**Export as JSON:**
```json
{
  "name": "My Perfect Setup",
  "version": "1.0",
  "theme": { "primary": "#3b82f6", "accent": "#f97316" },
  "layout": { "navbar": "left", "panels": "center" },
  "animations": { "speed": 1.0, "reducedMotion": false }
}
```

**Import from Others:**
- Upload JSON file
- Preview changes
- Apply (with revert option)

---

# Part IV: Animation Controls

## 8. Motion Preferences

### 8.1 Speed Multiplier

**Slider Control:**
```
Slow [0.5x] ←────●────→ [2.0x] Fast
             [1.0x Default]
```

**Effect:**
```css
:root {
  --animation-speed: 1.0; /* User-controlled */
}

.panel-transition {
  transition: transform calc(300ms * var(--animation-speed));
}
```

### 8.2 Reduced Motion Mode

**System Preference Detection:**
```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion || userConfig.reducedMotion) {
  // Disable all non-essential animations
  document.documentElement.classList.add('reduced-motion');
}
```

**CSS Override:**
```css
.reduced-motion * {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

### 8.3 Transition Styles

**Choose Animation Type:**
```
○ Spring (Default)    - Natural, physics-based
○ Linear              - Simple, predictable
○ Ease-in-out         - Smooth start/end
○ None                - Instant (accessibility)
```

### 8.4 Performance Mode

**Slider:**
```
Performance ←────●────→ Beauty
            [Balanced]
```

**Trade-offs:**
- Performance: Disable blur, reduce shadows, simpler animations
- Beauty: Full effects, blurs, complex animations

---

# Part V: Accessibility

## 9. Accessibility Controls

### 9.1 High Contrast Mode

**Auto-adjust Colors:**
```css
.high-contrast {
  --text-primary: #000000;
  --bg-primary: #ffffff;
  --border-primary: #000000;
  /* WCAG AAA contrast ratio: 7:1 minimum */
}
```

### 9.2 Focus Indicators

**Customizable Ring:**
```
Size:   Small [2px] / Medium [3px] / Large [4px]
Color:  [Auto] / [Custom]
Style:  Solid / Dashed / Dotted
```

### 9.3 Text Scaling

**Independent of Browser:**
```
Browser:  100%
Vault:    125%  ← User override
Result:   All text 25% larger in Vault only
```

### 9.4 Color Blindness Filters

**Simulate & Adjust:**
- Protanopia (red-blind)
- Deuteranopia (green-blind)
- Tritanopia (blue-blind)
- Monochromacy (grayscale)

**Preview Mode:**
```
[Preview Toggle] Show how current theme appears with filter
```

---

# Part VI: Technical Architecture

## 10. Implementation

### 10.1 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **State Management:** Zustand with localStorage persistence
- **Color Picker:** React Color or Shadcn color picker
- **Styling:** CSS variables + Tailwind
- **Preview:** Live CSS variable updates

### 10.2 CSS Variable System

```typescript
// Apply theme dynamically
function applyTheme(theme: ThemeConfig) {
  const root = document.documentElement;
  
  root.style.setProperty('--color-primary', theme.primary);
  root.style.setProperty('--color-accent', theme.accent);
  root.style.setProperty('--animation-speed', theme.animationSpeed.toString());
  root.style.setProperty('--font-size-multiplier', theme.fontSizeMultiplier.toString());
}
```

### 10.3 State Persistence

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StudioState {
  theme: ThemeConfig;
  layout: LayoutConfig;
  animations: AnimationConfig;
  accessibility: AccessibilityConfig;
  applyTheme: (theme: ThemeConfig) => void;
  resetToDefault: () => void;
}

export const useStudioStore = create<StudioState>()(
  persist(
    (set) => ({
      theme: defaultTheme,
      layout: defaultLayout,
      animations: defaultAnimations,
      accessibility: defaultAccessibility,
      applyTheme: (theme) => {
        set({ theme });
        applyTheme(theme); // Update CSS variables
      },
      resetToDefault: () => set({
        theme: defaultTheme,
        layout: defaultLayout,
        animations: defaultAnimations,
        accessibility: defaultAccessibility
      })
    }),
    { name: 'vault-studio-config' }
  )
);
```

---

# Part VII: Metrics & Success

## 11. Success Criteria

**Adoption:**
- 60%+ users customize at least one setting
- 30%+ save custom presets
- 90% retention of customization choices

**Accessibility:**
- 100% WCAG AA compliance with any theme
- Reduced motion mode functional for all animations
- High contrast mode passes color contrast tests

**UX:**
- Customization < 5 minutes to desired state
- Zero performance degradation with any config
- Preset import/export success rate: 100%

---

**Last Updated:** January 15, 2026  
**See Also:**
- `12-global-navigation-prd.md` - Command palette and navigation
- `specifications/interactive-ui.md` - F4/F5 integration points
- `specifications/design-foundation.md` - Design token system

---

# Part VIII: Technical Appendix

## A. Theme Configuration

**Built-in Themes JSON:**

```typescript
const themePresets = {
  default: {
    primary: '#3b82f6',
    accent: '#f97316',
    success: '#10b981'
  },
  'clario-official': {
    primary: '#0ea5e9', // Brand Blue
    accent: '#f59e0b',  // Brand Amber
    success: '#10b981'
  },
  'partner-1-dark': {
    primary: '#6366f1',
    accent: '#ec4899',
    success: '#22c55e'
  },
  midnight: {
    primary: '#818cf8',
    accent: '#fb7185',
    success: '#34d399'
  },
  forest: {
    primary: '#059669',
    accent: '#f59e0b',
    success: '#10b981'
  },
  sunset: {
    primary: '#f97316',
    accent: '#fbbf24',
    success: '#fb923c'
  }
};
```
