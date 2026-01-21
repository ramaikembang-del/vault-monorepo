# Studio Tuner System Specification

**Purpose:** Technical implementation for visual customization - themes, layouts, animations, accessibility
**Status:** 📋 PLANNED (Sprint 3+)
**Scope:** Theme Studio, Layout Presets, Animation Controls, Accessibility Tools

---

# Part I: Theme Studio System

## 1. Theme Architecture

### 1.1 CSS Variable System

**Core Design Tokens:**

```css
/* config/design-tokens.css */
:root {
  /* Primary Colors */
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-primary-light: #60a5fa;

  /* Accent Colors */
  --color-accent: #f97316;
  --color-accent-dark: #ea580c;
  --color-accent-light: #fb923c;

  /* Semantic Colors */
  --color-success: #10b981;
  --color-warning: #fbbf24;
  --color-error: #ef4444;

  /* Background */
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-tertiary: #334155;

  /* Text */
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --text-tertiary: #94a3b8;

  /* Typography */
  --font-primary: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --text-size-multiplier: 1;
  --line-height-multiplier: 1;

  /* Animation */
  --animation-speed-multiplier: 1;
  --transition-fast: calc(150ms * var(--animation-speed-multiplier));
  --transition-base: calc(300ms * var(--animation-speed-multiplier));
  --transition-slow: calc(500ms * var(--animation-speed-multiplier));
}

/* Dark Mode Variant */
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
}

/* Light Mode Variant */
[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #0f172a;
  --text-secondary: #475569;
}
```

### 1.2 Theme Store (Zustand)

```typescript
// stores/theme-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeColors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  accent: string;
  accentDark: string;
  accentLight: string;
  success: string;
  warning: string;
  error: string;
}

interface ThemeTypography {
  fontPrimary: string;
  fontMono: string;
  sizeMultiplier: number; // 0.875 - 1.25
  lineHeightMultiplier: number; // 0.9 - 1.3
}

interface ThemeConfig {
  name: string;
  mode: 'light' | 'dark' | 'auto';
  colors: ThemeColors;
  typography: ThemeTypography;
}

interface ThemeStore {
  activeTheme: ThemeConfig;
  presets: ThemeConfig[];

  // Actions
  setTheme: (theme: ThemeConfig) => void;
  updateColors: (colors: Partial<ThemeColors>) => void;
  updateTypography: (typography: Partial<ThemeTypography>) => void;
  setMode: (mode: 'light' | 'dark' | 'auto') => void;
  applyPreset: (presetName: string) => void;
  exportTheme: () => string;
  importTheme: (json: string) => void;
  resetToDefault: () => void;
}

const defaultTheme: ThemeConfig = {
  name: 'Clario Official',
  mode: 'dark',
  colors: {
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    primaryLight: '#60a5fa',
    accent: '#f97316',
    accentDark: '#ea580c',
    accentLight: '#fb923c',
    success: '#10b981',
    warning: '#fbbf24',
    error: '#ef4444'
  },
  typography: {
    fontPrimary: 'Plus Jakarta Sans',
    fontMono: 'JetBrains Mono',
    sizeMultiplier: 1,
    lineHeightMultiplier: 1
  }
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      activeTheme: defaultTheme,
      presets: [
        defaultTheme,
        {
          name: 'Midnight',
          mode: 'dark',
          colors: {
            primary: '#6366f1',
            primaryDark: '#4f46e5',
            primaryLight: '#818cf8',
            accent: '#ec4899',
            accentDark: '#db2777',
            accentLight: '#f472b6',
            success: '#10b981',
            warning: '#fbbf24',
            error: '#ef4444'
          },
          typography: defaultTheme.typography
        },
        {
          name: 'Forest',
          mode: 'dark',
          colors: {
            primary: '#059669',
            primaryDark: '#047857',
            primaryLight: '#10b981',
            accent: '#84cc16',
            accentDark: '#65a30d',
            accentLight: '#a3e635',
            success: '#10b981',
            warning: '#fbbf24',
            error: '#ef4444'
          },
          typography: defaultTheme.typography
        }
      ],

      setTheme: (theme) => {
        set({ activeTheme: theme });
        applyThemeToDOM(theme);
      },

      updateColors: (colors) => set((state) => {
        const updatedTheme = {
          ...state.activeTheme,
          colors: { ...state.activeTheme.colors, ...colors }
        };
        applyThemeToDOM(updatedTheme);
        return { activeTheme: updatedTheme };
      }),

      updateTypography: (typography) => set((state) => {
        const updatedTheme = {
          ...state.activeTheme,
          typography: { ...state.activeTheme.typography, ...typography }
        };
        applyThemeToDOM(updatedTheme);
        return { activeTheme: updatedTheme };
      }),

      setMode: (mode) => set((state) => {
        const updatedTheme = { ...state.activeTheme, mode };
        applyThemeToDOM(updatedTheme);
        return { activeTheme: updatedTheme };
      }),

      applyPreset: (presetName) => {
        const preset = get().presets.find(p => p.name === presetName);
        if (preset) {
          get().setTheme(preset);
        }
      },

      exportTheme: () => {
        return JSON.stringify(get().activeTheme, null, 2);
      },

      importTheme: (json) => {
        try {
          const theme = JSON.parse(json);
          get().setTheme(theme);
        } catch (error) {
          console.error('Invalid theme JSON:', error);
        }
      },

      resetToDefault: () => {
        get().setTheme(defaultTheme);
      }
    }),
    { name: 'vault-theme' }
  )
);

// Apply theme to DOM
function applyThemeToDOM(theme: ThemeConfig) {
  const root = document.documentElement;

  // Set mode
  root.setAttribute('data-theme', theme.mode);

  // Apply colors
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-primary-dark', theme.colors.primaryDark);
  root.style.setProperty('--color-primary-light', theme.colors.primaryLight);
  root.style.setProperty('--color-accent', theme.colors.accent);
  root.style.setProperty('--color-accent-dark', theme.colors.accentDark);
  root.style.setProperty('--color-accent-light', theme.colors.accentLight);
  root.style.setProperty('--color-success', theme.colors.success);
  root.style.setProperty('--color-warning', theme.colors.warning);
  root.style.setProperty('--color-error', theme.colors.error);

  // Apply typography
  root.style.setProperty('--font-primary', theme.typography.fontPrimary);
  root.style.setProperty('--font-mono', theme.typography.fontMono);
  root.style.setProperty('--text-size-multiplier', theme.typography.sizeMultiplier.toString());
  root.style.setProperty('--line-height-multiplier', theme.typography.lineHeightMultiplier.toString());
}
```

### 1.3 Color Picker Component

```tsx
// components/studio/ColorPicker.tsx
import { HexColorPicker } from 'react-colorful';
import { useState } from 'react';
import { useThemeStore } from '@/stores/theme-store';

interface ColorPickerProps {
  label: string;
  colorKey: keyof ThemeColors;
}

export function ColorPicker({ label, colorKey }: ColorPickerProps) {
  const { activeTheme, updateColors } = useThemeStore();
  const [color, setColor] = useState(activeTheme.colors[colorKey]);

  const handleChange = (newColor: string) => {
    setColor(newColor);
    updateColors({ [colorKey]: newColor });
  };

  return (
    <div className="color-picker">
      <label className="block text-sm font-medium mb-2">{label}</label>

      <div className="flex gap-4">
        {/* Color swatch */}
        <div
          className="w-12 h-12 rounded-lg border-2 border-slate-700 cursor-pointer"
          style={{ backgroundColor: color }}
        />

        {/* Hex input */}
        <input
          type="text"
          value={color}
          onChange={(e) => handleChange(e.target.value)}
          className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm font-mono"
          placeholder="#000000"
        />
      </div>

      {/* Color picker */}
      <div className="mt-4">
        <HexColorPicker color={color} onChange={handleChange} />
      </div>

      {/* Contrast checker */}
      <ContrastChecker foreground={color} />
    </div>
  );
}

function ContrastChecker({ foreground }: { foreground: string }) {
  const backgrounds = ['#0f172a', '#ffffff'];

  return (
    <div className="mt-4 space-y-2">
      <p className="text-xs text-slate-400">Contrast Ratios:</p>
      {backgrounds.map(bg => (
        <div key={bg} className="flex items-center justify-between text-xs">
          <span>On {bg === '#0f172a' ? 'Dark' : 'Light'}:</span>
          <span className={getContrastRatio(foreground, bg) >= 4.5 ? 'text-green-400' : 'text-red-400'}>
            {getContrastRatio(foreground, bg).toFixed(2)}:1
          </span>
        </div>
      ))}
    </div>
  );
}

// WCAG contrast ratio calculator
function getContrastRatio(fg: string, bg: string): number {
  const l1 = getLuminance(fg);
  const l2 = getLuminance(bg);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  const [r, g, b] = rgb.map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0];
}
```

---

# Part II: Layout Preset System

## 2. Layout State Management

### 2.1 Layout Store

```typescript
// stores/layout-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LayoutConfig {
  name: string;

  // Floating Panels (F4)
  panels: {
    position: 'left' | 'center' | 'right';
    width: number; // 0.33 - 0.5
    minimized: boolean;
  };

  // Dynamic Navbar (F5/Global Nav)
  navbar: {
    orientation: 'horizontal' | 'vertical';
    position: 'top' | 'bottom' | 'left' | 'right';
    autoHide: boolean;
    glassmorphism: boolean;
  };

  // Dashboard
  dashboard: {
    widgetOrder: string[];
    layout: '2-column' | '3-column';
  };

  // Sidebar
  sidebar: {
    collapsed: boolean;
    width: number; // px
  };
}

interface LayoutStore {
  activeLayout: LayoutConfig;
  presets: LayoutConfig[];

  updatePanels: (panels: Partial<LayoutConfig['panels']>) => void;
  updateNavbar: (navbar: Partial<LayoutConfig['navbar']>) => void;
  updateDashboard: (dashboard: Partial<LayoutConfig['dashboard']>) => void;
  updateSidebar: (sidebar: Partial<LayoutConfig['sidebar']>) => void;

  applyPreset: (presetName: string) => void;
  saveAsPreset: (name: string) => void;
  deletePreset: (name: string) => void;
  exportLayout: () => string;
  importLayout: (json: string) => void;
  resetToDefault: () => void;
}

const defaultLayout: LayoutConfig = {
  name: 'Default',
  panels: {
    position: 'center',
    width: 0.4,
    minimized: false
  },
  navbar: {
    orientation: 'horizontal',
    position: 'top',
    autoHide: true,
    glassmorphism: true
  },
  dashboard: {
    widgetOrder: ['focus', 'activity', 'reviews', 'achievements'],
    layout: '2-column'
  },
  sidebar: {
    collapsed: false,
    width: 240
  }
};

export const useLayoutStore = create<LayoutStore>()(
  persist(
    (set, get) => ({
      activeLayout: defaultLayout,
      presets: [
        defaultLayout,
        {
          name: 'Focus Mode',
          panels: { position: 'center', width: 0.5, minimized: false },
          navbar: { orientation: 'horizontal', position: 'top', autoHide: true, glassmorphism: true },
          dashboard: { widgetOrder: ['focus'], layout: '2-column' },
          sidebar: { collapsed: true, width: 60 }
        },
        {
          name: 'Collaboration',
          panels: { position: 'left', width: 0.33, minimized: false },
          navbar: { orientation: 'vertical', position: 'right', autoHide: false, glassmorphism: true },
          dashboard: { widgetOrder: ['activity', 'reviews', 'focus', 'achievements'], layout: '3-column' },
          sidebar: { collapsed: false, width: 280 }
        }
      ],

      updatePanels: (panels) => set((state) => ({
        activeLayout: {
          ...state.activeLayout,
          panels: { ...state.activeLayout.panels, ...panels }
        }
      })),

      updateNavbar: (navbar) => set((state) => ({
        activeLayout: {
          ...state.activeLayout,
          navbar: { ...state.activeLayout.navbar, ...navbar }
        }
      })),

      updateDashboard: (dashboard) => set((state) => ({
        activeLayout: {
          ...state.activeLayout,
          dashboard: { ...state.activeLayout.dashboard, ...dashboard }
        }
      })),

      updateSidebar: (sidebar) => set((state) => ({
        activeLayout: {
          ...state.activeLayout,
          sidebar: { ...state.activeLayout.sidebar, ...sidebar }
        }
      })),

      applyPreset: (presetName) => {
        const preset = get().presets.find(p => p.name === presetName);
        if (preset) {
          set({ activeLayout: preset });
        }
      },

      saveAsPreset: (name) => {
        const newPreset = { ...get().activeLayout, name };
        set((state) => ({
          presets: [...state.presets, newPreset]
        }));
      },

      deletePreset: (name) => set((state) => ({
        presets: state.presets.filter(p => p.name !== name)
      })),

      exportLayout: () => JSON.stringify(get().activeLayout, null, 2),

      importLayout: (json) => {
        try {
          const layout = JSON.parse(json);
          set({ activeLayout: layout });
        } catch (error) {
          console.error('Invalid layout JSON:', error);
        }
      },

      resetToDefault: () => set({ activeLayout: defaultLayout })
    }),
    { name: 'vault-layout' }
  )
);
```

---

# Part III: Animation Control System

## 3. Animation Store

### 3.1 Animation Configuration

```typescript
// stores/animation-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AnimationConfig {
  speedMultiplier: number; // 0.5 - 2
  reducedMotion: boolean;
  transitionStyle: 'ease' | 'spring' | 'linear';
  performanceMode: 'beauty' | 'balanced' | 'performance';
}

interface AnimationStore {
  config: AnimationConfig;

  setSpeedMultiplier: (multiplier: number) => void;
  toggleReducedMotion: () => void;
  setTransitionStyle: (style: AnimationConfig['transitionStyle']) => void;
  setPerformanceMode: (mode: AnimationConfig['performanceMode']) => void;
  resetToDefault: () => void;
}

const defaultConfig: AnimationConfig = {
  speedMultiplier: 1,
  reducedMotion: false,
  transitionStyle: 'spring',
  performanceMode: 'balanced'
};

export const useAnimationStore = create<AnimationStore>()(
  persist(
    (set, get) => ({
      config: defaultConfig,

      setSpeedMultiplier: (multiplier) => {
        const clamped = Math.max(0.5, Math.min(2, multiplier));
        set((state) => ({
          config: { ...state.config, speedMultiplier: clamped }
        }));
        applyAnimationConfig({ ...get().config, speedMultiplier: clamped });
      },

      toggleReducedMotion: () => {
        set((state) => ({
          config: { ...state.config, reducedMotion: !state.config.reducedMotion }
        }));
        applyAnimationConfig(get().config);
      },

      setTransitionStyle: (style) => {
        set((state) => ({
          config: { ...state.config, transitionStyle: style }
        }));
        applyAnimationConfig(get().config);
      },

      setPerformanceMode: (mode) => {
        set((state) => ({
          config: { ...state.config, performanceMode: mode }
        }));
        applyAnimationConfig(get().config);
      },

      resetToDefault: () => {
        set({ config: defaultConfig });
        applyAnimationConfig(defaultConfig);
      }
    }),
    { name: 'vault-animation' }
  )
);

function applyAnimationConfig(config: AnimationConfig) {
  const root = document.documentElement;

  // Speed multiplier
  root.style.setProperty('--animation-speed-multiplier', config.speedMultiplier.toString());

  // Reduced motion
  if (config.reducedMotion) {
    root.setAttribute('data-reduced-motion', 'true');
  } else {
    root.removeAttribute('data-reduced-motion');
  }

  // Transition style
  const easings = {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    linear: 'linear'
  };
  root.style.setProperty('--transition-easing', easings[config.transitionStyle]);

  // Performance mode
  const performanceSettings = {
    beauty: { blur: 16, shadows: true, gradients: true },
    balanced: { blur: 12, shadows: true, gradients: false },
    performance: { blur: 0, shadows: false, gradients: false }
  };

  const settings = performanceSettings[config.performanceMode];
  root.style.setProperty('--blur-amount', `${settings.blur}px`);
  root.setAttribute('data-shadows', settings.shadows.toString());
  root.setAttribute('data-gradients', settings.gradients.toString());
}
```

---

# Part IV: Accessibility Control System

## 4. Accessibility Store

### 4.1 Accessibility Configuration

```typescript
// stores/accessibility-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AccessibilityConfig {
  highContrast: boolean;
  focusIndicators: 'default' | 'enhanced' | 'maximum';
  textScaling: number; // 1 - 2
  colorBlindnessFilter: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  keyboardNavigationEnhanced: boolean;
}

interface AccessibilityStore {
  config: AccessibilityConfig;

  toggleHighContrast: () => void;
  setFocusIndicators: (level: AccessibilityConfig['focusIndicators']) => void;
  setTextScaling: (scale: number) => void;
  setColorBlindnessFilter: (filter: AccessibilityConfig['colorBlindnessFilter']) => void;
  toggleKeyboardNavigation: () => void;
  resetToDefault: () => void;
}

const defaultConfig: AccessibilityConfig = {
  highContrast: false,
  focusIndicators: 'default',
  textScaling: 1,
  colorBlindnessFilter: 'none',
  keyboardNavigationEnhanced: false
};

export const useAccessibilityStore = create<AccessibilityStore>()(
  persist(
    (set, get) => ({
      config: defaultConfig,

      toggleHighContrast: () => {
        set((state) => ({
          config: { ...state.config, highContrast: !state.config.highContrast }
        }));
        applyAccessibilityConfig(get().config);
      },

      setFocusIndicators: (level) => {
        set((state) => ({
          config: { ...state.config, focusIndicators: level }
        }));
        applyAccessibilityConfig(get().config);
      },

      setTextScaling: (scale) => {
        const clamped = Math.max(1, Math.min(2, scale));
        set((state) => ({
          config: { ...state.config, textScaling: clamped }
        }));
        applyAccessibilityConfig(get().config);
      },

      setColorBlindnessFilter: (filter) => {
        set((state) => ({
          config: { ...state.config, colorBlindnessFilter: filter }
        }));
        applyAccessibilityConfig(get().config);
      },

      toggleKeyboardNavigation: () => {
        set((state) => ({
          config: { ...state.config, keyboardNavigationEnhanced: !state.config.keyboardNavigationEnhanced }
        }));
        applyAccessibilityConfig(get().config);
      },

      resetToDefault: () => {
        set({ config: defaultConfig });
        applyAccessibilityConfig(defaultConfig);
      }
    }),
    { name: 'vault-accessibility' }
  )
);

function applyAccessibilityConfig(config: AccessibilityConfig) {
  const root = document.documentElement;

  // High contrast
  if (config.highContrast) {
    root.setAttribute('data-high-contrast', 'true');
  } else {
    root.removeAttribute('data-high-contrast');
  }

  // Focus indicators
  root.setAttribute('data-focus-level', config.focusIndicators);

  // Text scaling
  root.style.setProperty('--a11y-text-scale', config.textScaling.toString());

  // Color blindness filters
  const filters = {
    none: 'none',
    protanopia: 'url(#protanopia-filter)',
    deuteranopia: 'url(#deuteranopia-filter)',
    tritanopia: 'url(#tritanopia-filter)'
  };
  root.style.setProperty('--a11y-filter', filters[config.colorBlindnessFilter]);

  // Enhanced keyboard navigation
  if (config.keyboardNavigationEnhanced) {
    root.setAttribute('data-keyboard-enhanced', 'true');
  } else {
    root.removeAttribute('data-keyboard-enhanced');
  }
}
```

---

# Part VI: App Settings Integration

## 6. Workflow Profile & Layout Preset Coordination

### 6.1 Profile-Triggered Layout Changes

Workflow Profiles from App Settings trigger Studio Tuner layout preset changes automatically.

```typescript
// Studio Tuner listens for workflow profile changes
export function StudioTunerContainer() {
  const { activeProfile, profiles } = useWorkflowProfiles();
  const layoutStore = useLayoutStore();
  const themeStore = useThemeStore();

  useEffect(() => {
    if (!activeProfile) return;

    const profile = profiles.find(p => p.id === activeProfile);
    if (!profile) return;

    // Map profile settings to layout preset
    const layoutPreset = mapProfileToLayoutPreset(profile);

    if (layoutPreset) {
      layoutStore.applyLayout(layoutPreset);
    }
  }, [activeProfile, profiles]);

  return null; // Studio Tuner is a configuration layer, no UI
}

// Map workflow profile to Studio Tuner layout preset
function mapProfileToLayoutPreset(profile: WorkflowProfile): LayoutConfig | null {
  const { global, bizLab, productsLab, missionControl } = profile.settings;

  // Determine layout based on profile
  if (profile.name === 'Focus Mode') {
    return {
      id: 'focus-mode',
      name: 'Focus Mode',
      panels: {
        sidebar: { position: 'hidden', width: 0, defaultState: 'collapsed' },
        navbar: { position: 'left', mode: 'icon-only', width: 60 },
        content: { padding: 16, maxWidth: 800 },
      },
      dashboard: {
        widgetOrder: missionControl.widgetVisibility,
        columnLayout: '1-column',
        hiddenWidgets: [], // Hide distractions
      },
    };
  }

  if (profile.name === 'Collaboration Mode') {
    return {
      id: 'collaboration-mode',
      name: 'Collaboration Mode',
      panels: {
        sidebar: { position: global.sidebarPosition, width: 320, defaultState: 'expanded' },
        navbar: { position: global.navbarPosition, mode: 'full-expand', width: 220 },
        content: { padding: 24, maxWidth: 1400 },
      },
      dashboard: {
        widgetOrder: missionControl.widgetVisibility,
        columnLayout: '2-column',
        hiddenWidgets: [],
      },
    };
  }

  if (profile.name === 'Strategy Planning Mode') {
    return {
      id: 'strategy-planning-mode',
      name: 'Strategy Planning Mode',
      panels: {
        sidebar: { position: 'left', width: 280, defaultState: 'expanded' },
        navbar: { position: 'left', mode: 'full-expand', width: 220 },
        content: { padding: 32, maxWidth: 1200 },
      },
      dashboard: {
        widgetOrder: ['portfolio-map', 'mission-status'],
        columnLayout: '1-column',
        hiddenWidgets: ['team-pulse'], // Focus on strategy
      },
    };
  }

  // Default layout for custom profiles
  return {
    id: 'custom-profile',
    name: profile.name,
    panels: {
      sidebar: { position: global.sidebarPosition, width: 300, defaultState: bizLab.sidebarState === 'expanded' ? 'expanded' : 'collapsed' },
      navbar: { position: global.navbarPosition, mode: 'full-expand', width: 220 },
      content: { padding: 24, maxWidth: 1200 },
    },
    dashboard: {
      widgetOrder: missionControl.widgetVisibility,
      columnLayout: '2-column',
      hiddenWidgets: [],
    },
  };
}
```

### 6.2 Theme Profile Persistence

Studio Tuner themes are saved in App Settings and sync with workflow profiles.

```typescript
// Save current theme to active workflow profile
export function saveThemeToProfile() {
  const { activeTheme } = useThemeStore.getState();
  const { activeProfile, profiles, updateProfile } = useWorkflowProfiles.getState();

  if (!activeProfile) {
    showToast({
      title: 'No Active Profile',
      description: 'Activate a workflow profile to save theme preferences',
      variant: 'info',
    });
    return;
  }

  const profile = profiles.find(p => p.id === activeProfile);
  if (!profile) return;

  // Save theme configuration to profile metadata
  const updatedProfile = {
    ...profile,
    metadata: {
      ...profile.metadata,
      theme: {
        colors: activeTheme.colors,
        typography: activeTheme.typography,
        borderRadius: activeTheme.borderRadius,
        elevation: activeTheme.elevation,
      },
    },
  };

  updateProfile(activeProfile, updatedProfile);

  showToast({
    title: 'Theme Saved to Profile',
    description: `${profile.name} will use this theme on activation`,
    variant: 'success',
  });
}

// Load theme from profile on activation
export function loadThemeFromProfile(profile: WorkflowProfile) {
  if (!profile.metadata?.theme) return;

  const themeStore = useThemeStore.getState();

  // Apply theme from profile metadata
  themeStore.updateColors(profile.metadata.theme.colors);
  themeStore.updateTypography(profile.metadata.theme.typography);
  themeStore.updateBorderRadius(profile.metadata.theme.borderRadius);
  themeStore.updateElevation(profile.metadata.theme.elevation);
}
```

### 6.3 Animation Settings & Workflow Profiles

Workflow Profiles can specify animation preferences that override Studio Tuner defaults.

```typescript
// Animation settings from workflow profile
export function applyProfileAnimationSettings(profile: WorkflowProfile) {
  const animStore = useAnimationStore.getState();

  // Focus Mode: Minimal animations for performance
  if (profile.name === 'Focus Mode') {
    animStore.updateSpeedMultiplier(0.5); // Faster transitions
    animStore.updateReducedMotion(false); // Some animation OK
    animStore.updateOverrides({
      hoverEffects: false, // Disable hover animations
      pageTransitions: false,
      confetti: false,
      pulseEffects: false,
    });
  }

  // Collaboration Mode: Full animations for engagement
  if (profile.name === 'Collaboration Mode') {
    animStore.updateSpeedMultiplier(1.0); // Normal speed
    animStore.updateReducedMotion(false);
    animStore.updateOverrides({
      hoverEffects: true,
      pageTransitions: true,
      confetti: true,
      pulseEffects: true,
    });
  }

  // Strategy Planning Mode: Subtle animations
  if (profile.name === 'Strategy Planning Mode') {
    animStore.updateSpeedMultiplier(0.75); // Slightly faster
    animStore.updateReducedMotion(false);
    animStore.updateOverrides({
      hoverEffects: true,
      pageTransitions: true,
      confetti: false, // No distractions
      pulseEffects: false,
    });
  }
}
```

### 6.4 Accessibility Settings & Workflow Profiles

Workflow Profiles can enforce specific accessibility settings.

```typescript
// Accessibility settings from workflow profile
export function applyProfileAccessibilitySettings(profile: WorkflowProfile) {
  const a11yStore = useAccessibilityStore.getState();

  // Check if profile has accessibility requirements
  if (!profile.metadata?.accessibility) return;

  const { accessibility } = profile.metadata;

  // Apply profile-specific accessibility settings
  if (accessibility.highContrast !== undefined) {
    a11yStore.updateHighContrast(accessibility.highContrast);
  }

  if (accessibility.textScaling) {
    a11yStore.updateTextScaling({
      enabled: true,
      multiplier: accessibility.textScaling.multiplier,
    });
  }

  if (accessibility.focusIndicator) {
    a11yStore.updateFocusIndicator(accessibility.focusIndicator);
  }

  if (accessibility.largerClickTargets !== undefined) {
    a11yStore.updateLargerClickTargets(accessibility.largerClickTargets);
  }
}

// Example profile with accessibility requirements
const accessibleWorkProfile: WorkflowProfile = {
  id: 'accessible-work',
  name: 'Accessible Work Mode',
  description: 'High contrast, larger text, enhanced focus indicators',
  settings: {
    /* ... standard settings ... */
  },
  metadata: {
    accessibility: {
      highContrast: true,
      textScaling: { enabled: true, multiplier: 1.25 },
      focusIndicator: { size: 4, color: '#0066ff' },
      largerClickTargets: true,
    },
  },
  triggers: { manual: true, calendar: [], schedule: {} },
  createdBy: 'system',
  createdAt: '2026-01-01T00:00:00Z',
  lastActivated: null,
};
```

### 6.5 Layout Preset Sharing via App Settings Export

Layout presets can be exported and imported through App Settings system.

```typescript
// Export Studio Tuner configuration with workflow profile
export function exportStudioTunerWithProfile() {
  const themeStore = useThemeStore.getState();
  const layoutStore = useLayoutStore.getState();
  const animStore = useAnimationStore.getState();
  const a11yStore = useAccessibilityStore.getState();
  const { activeProfile, profiles } = useWorkflowProfiles.getState();

  const exportData = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    exportedBy: getCurrentPartnerId(),
    scope: 'studio-tuner',
    settings: {
      theme: themeStore.activeTheme,
      layout: layoutStore.currentLayout,
      animation: animStore.config,
      accessibility: a11yStore.config,
      activeProfile,
      profileSettings: activeProfile ? profiles.find(p => p.id === activeProfile) : null,
    },
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vault-studio-tuner-${new Date().toISOString()}.json`;
  a.click();
  URL.revokeObjectURL(url);

  showToast({
    title: 'Studio Tuner Config Exported',
    description: 'Theme, layout, and profile settings saved to file',
    variant: 'success',
  });
}

// Import Studio Tuner configuration from partner
export function importStudioTunerConfig(file: File) {
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const importedData = JSON.parse(e.target?.result as string);

      if (!importedData.version || !importedData.settings) {
        throw new Error('Invalid Studio Tuner config format');
      }

      const { settings } = importedData;

      // Show preview of what will be imported
      showImportPreview(importedData, () => {
        // Apply theme
        if (settings.theme) {
          useThemeStore.getState().setTheme(settings.theme);
        }

        // Apply layout
        if (settings.layout) {
          useLayoutStore.getState().applyLayout(settings.layout);
        }

        // Apply animation settings
        if (settings.animation) {
          const animStore = useAnimationStore.getState();
          animStore.updateSpeedMultiplier(settings.animation.speedMultiplier);
          animStore.updateReducedMotion(settings.animation.reducedMotion);
          animStore.updateTransitionStyle(settings.animation.transitionStyle);
        }

        // Apply accessibility settings
        if (settings.accessibility) {
          const a11yStore = useAccessibilityStore.getState();
          a11yStore.updateHighContrast(settings.accessibility.highContrast);
          a11yStore.updateTextScaling(settings.accessibility.textScaling);
          a11yStore.updateFocusIndicator(settings.accessibility.focusIndicator);
        }

        showToast({
          title: 'Studio Tuner Config Imported',
          description: `Configuration from ${importedData.exportedBy} applied successfully`,
          variant: 'success',
        });
      });
    } catch (error) {
      showToast({
        title: 'Import Failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  reader.readAsText(file);
}
```

### 6.6 Cross-App Settings Synchronization

Studio Tuner participates in cascade rules from App Settings system.

```typescript
// Example: Global sidebar position cascades to layout preset
export function handleGlobalSidebarPositionChange(position: 'left' | 'right' | 'hidden') {
  const layoutStore = useLayoutStore.getState();
  const currentLayout = layoutStore.currentLayout;

  const updatedLayout = {
    ...currentLayout,
    panels: {
      ...currentLayout.panels,
      sidebar: {
        ...currentLayout.panels.sidebar,
        position: position === 'hidden' ? 'left' : position,
        width: position === 'hidden' ? 0 : currentLayout.panels.sidebar.width,
      },
    },
  };

  layoutStore.applyLayout(updatedLayout);
}

// Example: Zen Mode triggers Studio Tuner layout changes
export function handleZenModeActivation(enabled: boolean) {
  const layoutStore = useLayoutStore.getState();
  const themeStore = useThemeStore.getState();

  if (enabled) {
    // Apply minimal layout for zen mode
    layoutStore.applyLayout({
      id: 'zen-mode',
      name: 'Zen Mode',
      panels: {
        sidebar: { position: 'hidden', width: 0, defaultState: 'collapsed' },
        navbar: { position: 'hidden', mode: 'icon-only', width: 0 },
        content: { padding: 64, maxWidth: 800 }, // Centered, spacious
      },
      dashboard: { widgetOrder: [], columnLayout: '1-column', hiddenWidgets: [] },
    });

    // Optional: Apply calm theme colors
    themeStore.updateColors({
      ...themeStore.activeTheme.colors,
      background: '#faf9f7', // Warm white
      surface: '#ffffff',
      border: '#e5e4e2', // Subtle borders
    });
  } else {
    // Restore layout from active profile
    const { activeProfile, profiles } = useWorkflowProfiles.getState();
    const profile = profiles.find(p => p.id === activeProfile);

    if (profile) {
      const layoutPreset = mapProfileToLayoutPreset(profile);
      if (layoutPreset) {
        layoutStore.applyLayout(layoutPreset);
      }
    }
  }
}
```

**See:** `specifications/app-settings-system.md` for complete Settings Hub architecture (Workflow Profiles, Layout Store, Cascade Engine)
**See:** PRD #14 Section 3 for Workflow Profile & Layout integration product requirements

---

**Last Updated:** January 20, 2026
**Related Specifications:**
- `design-foundation.md` - Core design tokens
- `global-navigation-system.md` - Navbar configuration consumption
- `interactive-ui.md` - F4/F5 layout integration
- `dashboard-system.md` - Widget layout configuration

**Related PRDs:**
- `../prds/13-studio-tuner-prd.md` - Product requirements
- `../prds/12-global-navigation-prd.md` - Navbar integration
- `../prds/00-vault-overview-prd.md` - Vault ecosystem overview
