# Global Navigation System Specification

**Purpose:** Technical implementation for global navigation, command palette, and keyboard shortcuts
**Status:** 📋 PLANNED (Sprint 3+)
**Scope:** Command Palette (⌘K), Dynamic Floating Navbar, Global Menu, Keyboard Shortcuts Manager

---

# Part I: Command Palette System

## 1. Command Palette Architecture

### 1.1 Overview

Universal search and action launcher using CMDK library, accessible from anywhere in Vault with ⌘K.

### 1.2 Core Implementation

```typescript
// components/CommandPalette.tsx
import { Command } from 'cmdk';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();

  // Global keyboard listener
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="command-palette"
    >
      <Command.Input
        placeholder="Search or run command..."
        value={search}
        onValueChange={setSearch}
      />

      <Command.List>
        {/* Documents */}
        <Command.Group heading="Documents">
          <Command.Item onSelect={() => router.push('/biz/strategy/gtm')}>
            <FileIcon /> GTM Strategy
          </Command.Item>
          <Command.Item onSelect={() => router.push('/products/experiments/glass-card')}>
            <BeakerIcon /> Glass Card Experiment
          </Command.Item>
        </Command.Group>

        {/* Quick Actions */}
        <Command.Group heading="Actions">
          <Command.Item onSelect={createExperiment}>
            <PlusIcon /> Create Experiment
          </Command.Item>
          <Command.Item onSelect={requestReview}>
            <CheckIcon /> Request Review
          </Command.Item>
          <Command.Item onSelect={() => router.push('/')}>
            <DashboardIcon /> Open Dashboard
          </Command.Item>
        </Command.Group>

        {/* Navigation */}
        <Command.Group heading="Navigate">
          <Command.Item onSelect={() => router.push('/products')}>
            Products Lab
          </Command.Item>
          <Command.Item onSelect={() => router.push('/biz')}>
            Biz Lab
          </Command.Item>
          <Command.Item onSelect={() => router.push('/settings')}>
            Settings
          </Command.Item>
        </Command.Group>

        {/* Recent */}
        <Command.Group heading="Recent">
          {recentItems.map(item => (
            <Command.Item key={item.id} onSelect={() => router.push(item.path)}>
              {item.title}
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
```

### 1.3 Search Index Builder

```typescript
// lib/command-palette/search-index.ts
import Fuse from 'fuse.js';

interface SearchableItem {
  id: string;
  title: string;
  category: 'document' | 'action' | 'navigation';
  path: string;
  tags: string[];
  section: 'products' | 'biz' | 'dashboard' | 'settings';
}

export async function buildSearchIndex(): Promise<Fuse<SearchableItem>> {
  const items: SearchableItem[] = [];

  // Index all markdown documents
  const docs = await getAllMarkdownFiles();
  docs.forEach(doc => {
    items.push({
      id: doc.id,
      title: doc.frontmatter.title,
      category: 'document',
      path: doc.path,
      tags: doc.frontmatter.tags || [],
      section: doc.path.startsWith('/biz') ? 'biz' : 'products'
    });
  });

  // Add quick actions
  items.push(
    { id: 'create-exp', title: 'Create Experiment', category: 'action', path: '/products/experiments/new', tags: ['experiment', 'create'], section: 'products' },
    { id: 'request-review', title: 'Request Review', category: 'action', path: '/review', tags: ['review', 'approval'], section: 'dashboard' },
    { id: 'open-dashboard', title: 'Open Dashboard', category: 'action', path: '/', tags: ['dashboard', 'home'], section: 'dashboard' }
  );

  // Add navigation items
  items.push(
    { id: 'nav-products', title: 'Products Lab', category: 'navigation', path: '/products', tags: ['products', 'experiments'], section: 'products' },
    { id: 'nav-biz', title: 'Biz Lab', category: 'navigation', path: '/biz', tags: ['biz', 'strategy'], section: 'biz' },
    { id: 'nav-settings', title: 'Settings', category: 'navigation', path: '/settings', tags: ['settings', 'config'], section: 'settings' }
  );

  return new Fuse(items, {
    keys: ['title', 'tags'],
    threshold: 0.3,
    includeScore: true
  });
}
```

### 1.4 Contextual Actions Hook

```typescript
// lib/hooks/use-command-palette.ts
import { create } from 'zustand';

interface CommandPaletteStore {
  contextualActions: CommandAction[];
  registerContextualActions: (actions: CommandAction[]) => void;
  clearContextualActions: () => void;
}

interface CommandAction {
  id: string;
  label: string;
  icon: React.ComponentType;
  action: () => void;
  shortcut?: string;
}

export const useCommandPalette = create<CommandPaletteStore>((set) => ({
  contextualActions: [],

  registerContextualActions: (actions) => set({ contextualActions: actions }),

  clearContextualActions: () => set({ contextualActions: [] })
}));

// Usage in components
export function useRegisterCommands(actions: CommandAction[]) {
  const { registerContextualActions, clearContextualActions } = useCommandPalette();

  useEffect(() => {
    registerContextualActions(actions);
    return () => clearContextualActions();
  }, [actions]);
}
```

---

# Part II: Dynamic Floating Navbar

## 2. Navbar State Management

### 2.1 Zustand Store

```typescript
// stores/navbar-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FloatingNavbarState {
  visible: boolean;
  pinned: boolean;
  mode: 'full' | 'compact' | 'icon-only';
  context: 'dashboard' | 'biz' | 'products' | 'settings';
  quickActions: QuickAction[];
  scrollThreshold: number;
}

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  action: () => void;
  tooltip: string;
  badge?: number;
  active?: boolean;
  shortcut?: string;
}

interface NavbarConfig {
  autoHide: boolean;
  transitionSpeed: number;
  glassmorphism: {
    enabled: boolean;
    blur: number;
    opacity: number;
    borderOpacity: number;
  };
  orientation: 'horizontal' | 'vertical';
  height: number;
  position: 'top' | 'bottom' | 'left' | 'right';
  showIndicatorWhenHidden: boolean;
}

interface NavbarStore {
  state: FloatingNavbarState;
  config: NavbarConfig;
  scrollY: number;
  lastScrollY: number;

  show: () => void;
  hide: () => void;
  togglePin: () => void;
  setContext: (context: string) => void;
  updateQuickActions: (actions: QuickAction[]) => void;
  setMode: (mode: string) => void;
  handleScroll: (scrollY: number) => void;
  updateConfig: (config: Partial<NavbarConfig>) => void;
  resetConfig: () => void;
}

export const useNavbarStore = create<NavbarStore>()(
  persist(
    (set, get) => ({
      state: {
        visible: true,
        pinned: false,
        mode: 'full',
        context: 'dashboard',
        quickActions: [],
        scrollThreshold: 50
      },
      config: {
        autoHide: true,
        transitionSpeed: 300,
        glassmorphism: {
          enabled: true,
          blur: 16,
          opacity: 0.8,
          borderOpacity: 0.2
        },
        orientation: 'horizontal',
        height: 56,
        position: 'top',
        showIndicatorWhenHidden: true
      },
      scrollY: 0,
      lastScrollY: 0,

      show: () => set((state) => ({
        state: { ...state.state, visible: true }
      })),

      hide: () => set((state) => {
        if (state.state.pinned) return state;
        return {
          state: { ...state.state, visible: false }
        };
      }),

      togglePin: () => set((state) => ({
        state: {
          ...state.state,
          pinned: !state.state.pinned,
          visible: !state.state.pinned ? true : state.state.visible
        }
      })),

      setContext: (context) => set((state) => ({
        state: { ...state.state, context: context as any }
      })),

      updateQuickActions: (actions) => set((state) => ({
        state: { ...state.state, quickActions: actions }
      })),

      setMode: (mode) => set((state) => ({
        state: { ...state.state, mode: mode as any }
      })),

      handleScroll: (scrollY) => {
        const { lastScrollY, state, config } = get();
        const delta = scrollY - lastScrollY;

        set({ scrollY, lastScrollY: scrollY });

        if (!config.autoHide || state.pinned) return;

        // Hide on scroll down
        if (delta > 0 && scrollY > state.scrollThreshold) {
          get().hide();
        }
        // Show on scroll up
        else if (delta < 0) {
          get().show();
        }
      },

      updateConfig: (newConfig) => set((state) => ({
        config: { ...state.config, ...newConfig }
      })),

      resetConfig: () => set({
        config: {
          autoHide: true,
          transitionSpeed: 300,
          glassmorphism: { enabled: true, blur: 16, opacity: 0.8, borderOpacity: 0.2 },
          orientation: 'horizontal',
          height: 56,
          position: 'top',
          showIndicatorWhenHidden: true
        }
      })
    }),
    { name: 'vault-navbar-config' }
  )
);
```

### 2.2 Navbar Component

```typescript
// components/FloatingNavbar.tsx
'use client';

import { useEffect } from 'react';
import { useNavbarStore } from '@/stores/navbar-store';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingNavbar() {
  const { state, config, handleScroll } = useNavbarStore();

  // Scroll listener
  useEffect(() => {
    const onScroll = () => {
      handleScroll(window.scrollY);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  // Mouse move listener (show on hover near top)
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (e.clientY < window.innerHeight * 0.1) {
        useNavbarStore.getState().show();
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <AnimatePresence>
        {state.visible && (
          <motion.nav
            className="fixed top-0 left-0 right-0 z-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: config.transitionSpeed / 1000,
              ease: 'easeInOut'
            }}
            style={{
              height: `${config.height}px`,
              backgroundColor: config.glassmorphism.enabled
                ? `rgba(15, 23, 42, ${config.glassmorphism.opacity})`
                : 'rgb(15, 23, 42)',
              backdropFilter: config.glassmorphism.enabled
                ? `blur(${config.glassmorphism.blur}px) saturate(180%)`
                : 'none',
              borderBottom: `1px solid rgba(148, 163, 184, ${config.glassmorphism.borderOpacity})`,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="container mx-auto h-full flex items-center justify-between px-6">
              {/* Left: Context breadcrumbs */}
              <div className="flex items-center gap-4">
                <ContextBreadcrumbs context={state.context} />
              </div>

              {/* Center: Quick actions */}
              <div className="flex items-center gap-2">
                {state.quickActions.map(action => (
                  <QuickActionButton key={action.id} action={action} />
                ))}
              </div>

              {/* Right: Global actions */}
              <div className="flex items-center gap-3">
                <CommandPaletteTrigger />
                <GlobalMenuDropdown />
                <UserAvatar />
                <PinToggle pinned={state.pinned} />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Indicator bar when hidden */}
      {!state.visible && config.showIndicatorWhenHidden && (
        <div
          className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-gradient-to-r from-blue-500 via-orange-500 to-green-500"
        />
      )}
    </>
  );
}
```

### 2.3 Context-Aware Quick Actions

```typescript
// lib/navbar/context-actions.ts
export function getQuickActionsForContext(
  context: 'dashboard' | 'biz' | 'products' | 'settings'
): QuickAction[] {
  const actionMap = {
    dashboard: [
      {
        id: 'start-sprint',
        label: 'Start Sprint',
        icon: 'PlayIcon',
        action: () => startSprint(),
        tooltip: 'Begin sprint cycle',
        shortcut: 'Cmd+Shift+S'
      },
      {
        id: 'view-achievements',
        label: 'Achievements',
        icon: 'TrophyIcon',
        action: () => router.push('/achievements'),
        tooltip: 'View unlocked achievements',
        badge: 2
      }
    ],
    biz: [
      {
        id: 'save-doc',
        label: 'Save',
        icon: 'SaveIcon',
        action: () => saveDocument(),
        tooltip: 'Save current document',
        shortcut: 'Cmd+S',
        active: hasUnsavedChanges
      },
      {
        id: 'share-doc',
        label: 'Share',
        icon: 'ShareIcon',
        action: () => shareDocument(),
        tooltip: 'Share with partner'
      },
      {
        id: 'graph-view',
        label: 'Graph',
        icon: 'NetworkIcon',
        action: () => openKnowledgeGraph(),
        tooltip: 'Open knowledge graph',
        shortcut: 'Cmd+G'
      }
    ],
    products: [
      {
        id: 'preview-exp',
        label: 'Preview',
        icon: 'EyeIcon',
        action: () => togglePreview(),
        tooltip: 'Toggle experiment preview',
        shortcut: 'Cmd+P'
      },
      {
        id: 'hot-reload',
        label: 'Hot Reload',
        icon: 'RefreshIcon',
        action: () => triggerHotReload(),
        tooltip: 'Force hot module reload',
        active: isHotReloadActive
      },
      {
        id: 'publish-comp',
        label: 'Publish',
        icon: 'UploadIcon',
        action: () => publishComponent(),
        tooltip: 'Publish to component library'
      }
    ],
    settings: [
      {
        id: 'save-settings',
        label: 'Save',
        icon: 'CheckIcon',
        action: () => saveSettings(),
        tooltip: 'Save all settings',
        shortcut: 'Cmd+S'
      },
      {
        id: 'reset-settings',
        label: 'Reset',
        icon: 'UndoIcon',
        action: () => resetToDefaults(),
        tooltip: 'Reset to defaults'
      }
    ]
  };

  return actionMap[context] || [];
}
```

---

# Part III: Global Menu Configuration

## 3. Menu State Management

### 3.1 Menu Store

```typescript
// stores/menu-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  order: number;
  visible: boolean;
  pinned: boolean;
  badge?: number;
}

interface MenuConfig {
  items: MenuItem[];
  collapsed: boolean;
}

interface MenuStore {
  config: MenuConfig;
  setOrder: (itemId: string, order: number) => void;
  toggleVisibility: (itemId: string) => void;
  togglePin: (itemId: string) => void;
  setBadge: (itemId: string, count: number) => void;
  resetToDefault: () => void;
}

const defaultMenuConfig: MenuConfig = {
  items: [
    { id: 'dashboard', label: 'Dashboard', path: '/', icon: 'LayoutDashboard', order: 1, visible: true, pinned: false },
    { id: 'products', label: 'Products Lab', path: '/products', icon: 'Beaker', order: 2, visible: true, pinned: false },
    { id: 'biz', label: 'Biz Lab', path: '/biz', icon: 'BriefcaseBusiness', order: 3, visible: true, pinned: false },
    { id: 'settings', label: 'Settings', path: '/settings', icon: 'Settings', order: 4, visible: true, pinned: false }
  ],
  collapsed: false
};

export const useMenuStore = create<MenuStore>()(
  persist(
    (set) => ({
      config: defaultMenuConfig,

      setOrder: (itemId, order) => set((state) => ({
        config: {
          ...state.config,
          items: state.config.items.map(item =>
            item.id === itemId ? { ...item, order } : item
          ).sort((a, b) => a.order - b.order)
        }
      })),

      toggleVisibility: (itemId) => set((state) => ({
        config: {
          ...state.config,
          items: state.config.items.map(item =>
            item.id === itemId ? { ...item, visible: !item.visible } : item
          )
        }
      })),

      togglePin: (itemId) => set((state) => ({
        config: {
          ...state.config,
          items: state.config.items.map(item =>
            item.id === itemId ? { ...item, pinned: !item.pinned } : item
          )
        }
      })),

      setBadge: (itemId, count) => set((state) => ({
        config: {
          ...state.config,
          items: state.config.items.map(item =>
            item.id === itemId ? { ...item, badge: count } : item
          )
        }
      })),

      resetToDefault: () => set({ config: defaultMenuConfig })
    }),
    { name: 'vault-menu-config' }
  )
);
```

---

# Part IV: Keyboard Shortcuts Manager

## 4. Shortcuts System

### 4.1 Shortcuts Store

```typescript
// stores/shortcuts-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface KeyboardShortcut {
  id: string;
  label: string;
  description: string;
  keys: string;
  action: () => void;
  category: 'global' | 'navigation' | 'editing' | 'custom';
  enabled: boolean;
  customizable: boolean;
}

interface ShortcutsStore {
  shortcuts: KeyboardShortcut[];
  registerShortcut: (shortcut: KeyboardShortcut) => void;
  updateKeys: (id: string, keys: string) => void;
  toggleShortcut: (id: string) => void;
  resetToDefaults: () => void;
  getConflicts: (keys: string) => KeyboardShortcut[];
}

const defaultShortcuts: KeyboardShortcut[] = [
  {
    id: 'cmd-k',
    label: 'Command Palette',
    description: 'Open command palette',
    keys: 'Cmd+K',
    action: () => {},
    category: 'global',
    enabled: true,
    customizable: false
  },
  {
    id: 'cmd-r',
    label: 'Request Review',
    description: 'Request partner review',
    keys: 'Cmd+R',
    action: () => {},
    category: 'global',
    enabled: true,
    customizable: true
  },
  {
    id: 'cmd-p',
    label: 'Quick Preview',
    description: 'Toggle preview mode',
    keys: 'Cmd+P',
    action: () => {},
    category: 'editing',
    enabled: true,
    customizable: true
  }
];

export const useShortcutsStore = create<ShortcutsStore>()(
  persist(
    (set, get) => ({
      shortcuts: defaultShortcuts,

      registerShortcut: (shortcut) => set((state) => ({
        shortcuts: [...state.shortcuts, shortcut]
      })),

      updateKeys: (id, keys) => {
        const conflicts = get().getConflicts(keys);
        if (conflicts.length > 0) {
          throw new Error(`Conflict detected with: ${conflicts.map(s => s.label).join(', ')}`);
        }

        set((state) => ({
          shortcuts: state.shortcuts.map(s =>
            s.id === id ? { ...s, keys } : s
          )
        }));
      },

      toggleShortcut: (id) => set((state) => ({
        shortcuts: state.shortcuts.map(s =>
          s.id === id ? { ...s, enabled: !s.enabled } : s
        )
      })),

      resetToDefaults: () => set({ shortcuts: defaultShortcuts }),

      getConflicts: (keys) => {
        return get().shortcuts.filter(s => s.keys === keys && s.enabled);
      }
    }),
    { name: 'vault-shortcuts' }
  )
);
```

### 4.2 Shortcuts Hook

```typescript
// lib/hooks/use-keyboard-shortcuts.ts
import { useEffect } from 'react';
import { useShortcutsStore } from '@/stores/shortcuts-store';

export function useKeyboardShortcuts() {
  const shortcuts = useShortcutsStore(state => state.shortcuts);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const pressed = [];
      if (e.metaKey || e.ctrlKey) pressed.push('Cmd');
      if (e.shiftKey) pressed.push('Shift');
      if (e.altKey) pressed.push('Alt');
      pressed.push(e.key.toUpperCase());

      const combo = pressed.join('+');

      const matchedShortcut = shortcuts.find(
        s => s.enabled && s.keys === combo
      );

      if (matchedShortcut) {
        e.preventDefault();
        matchedShortcut.action();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [shortcuts]);
}
```

---

# Part VII: Studio Tuner Integration

## 7. Theme, Animation, and Accessibility Consumption

### 7.1 Studio Tuner Coordination

The Global Navigation system (Command Palette, Dynamic Navbar, Keyboard Shortcuts) integrates deeply with Studio Tuner (PRD #13) to respect user customization preferences.

**Integration Points:**

**Theme Consumption:**
- Command Palette styling adapts to theme colors (primary, accent, background)
- Dynamic Navbar glassmorphism respects theme mode (light/dark)
- Badge colors use theme accent color with WCAG-compliant contrast
- Typography (font family, size multiplier) applied to all navigation text

**Animation Consumption:**
- All transitions respect speed multiplier (0.5x - 2.0x)
- Navbar auto-hide animations honor reduced motion settings
- Quick action hover effects use selected easing function (spring/linear/ease-in-out)
- Badge count-up animations scale with speed multiplier

**Accessibility Consumption:**
- High contrast mode enforces pure black/white navigation text
- Focus indicators increase to 4px in high contrast mode
- Text scaling applies to navbar labels, tooltips, and command palette items
- Larger click targets mode increases button size to 48x48px minimum
- Auto-hide disabled when reduce motion is enabled for predictable navigation

**Layout Integration:**
- Navbar position (left/right/top/bottom) controlled by Studio Tuner Layout Presets
- Navbar orientation (horizontal/vertical) synced with layout configuration
- Width/height adapts to preset specifications (Minimal Mode → 44px, Developer Mode → 48px)
- Content area adjusts dynamically when navbar switches between horizontal and vertical

### 7.2 Theme Application to Navigation Components

```typescript
// Dynamic Navbar consumes Studio Tuner theme
export function DynamicFloatingNavbar() {
  const { currentTheme } = useThemeStudio();
  const { config: navConfig } = useNavbarStore();

  const navbarStyles = {
    // Background adapts to theme mode
    backgroundColor: currentTheme.mode === 'dark'
      ? `rgba(20, 20, 20, ${navConfig.glassmorphism.opacity})`
      : `rgba(255, 255, 255, ${navConfig.glassmorphism.opacity})`,

    // Glassmorphism from theme
    backdropFilter: navConfig.glassmorphism.enabled
      ? `blur(${navConfig.glassmorphism.blur}px)`
      : 'none',

    // Border and shadow from theme tokens
    borderBottom: `1px solid ${currentTheme.colors.border}`,
    boxShadow: currentTheme.elevation.medium,

    // Typography from theme
    fontFamily: currentTheme.typography.fontFamily.sans.join(', '),
    fontSize: `calc(0.875rem * ${currentTheme.typography.fontSize.multiplier})`,

    // High contrast override
    '--navbar-text': currentTheme.colors.text.primary,
  };

  return (
    <nav className="dynamic-navbar" style={navbarStyles}>
      {/* Navbar content */}
    </nav>
  );
}

// Command Palette consumes Studio Tuner theme
export function CommandPalette() {
  const { currentTheme } = useThemeStudio();

  return (
    <Command.Dialog
      style={{
        backgroundColor: currentTheme.colors.background,
        borderColor: currentTheme.colors.border,
        boxShadow: currentTheme.elevation.large,
        color: currentTheme.colors.text.primary,
        fontFamily: currentTheme.typography.fontFamily.sans.join(', '),
      }}
    >
      <Command.Input
        style={{
          fontSize: `calc(1rem * ${currentTheme.typography.fontSize.multiplier})`,
          color: currentTheme.colors.text.primary,
        }}
        placeholder="Type a command or search..."
      />
      <Command.List>
        <Command.Item
          style={{
            '--item-hover-bg': currentTheme.colors.primary + '20',
            '--item-active-bg': currentTheme.colors.primary + '40',
          }}
        >
          {/* Command items */}
        </Command.Item>
      </Command.List>
    </Command.Dialog>
  );
}
```

### 7.3 Animation Control for Navigation

```typescript
// Dynamic Navbar respects Studio Tuner animation settings
export function DynamicFloatingNavbar() {
  const { config: animConfig } = useAnimationStore();
  const { state, config: navConfig } = useNavbarStore();

  // Transition duration with speed multiplier
  const transitionDuration = animConfig.speedMultiplier === 0
    ? 0
    : navConfig.transitionSpeed * animConfig.speedMultiplier;

  // Timing function from Studio Tuner
  const transitionTimingFunction = {
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    linear: 'linear',
    'ease-in-out': 'ease-in-out',
    none: 'step-end',
  }[animConfig.transitionStyle];

  // Disable auto-hide if reduced motion enabled
  const shouldAutoHide = navConfig.autoHide
    && !animConfig.reducedMotion
    && !state.pinned;

  return (
    <nav
      className="dynamic-navbar"
      style={{
        transform: state.visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: animConfig.reducedMotion
          ? 'none' // No animation for reduced motion
          : `transform ${transitionDuration}ms ${transitionTimingFunction}`,
      }}
    >
      {/* Navbar content */}
    </nav>
  );
}

// Quick action hover effects respect animation settings
export function QuickActionButton({ action }) {
  const { config: animConfig } = useAnimationStore();

  return (
    <motion.button
      whileHover={
        !animConfig.reducedMotion && animConfig.overrides.hoverEffects
          ? { scale: 1.05 }
          : {}
      }
      transition={{
        duration: animConfig.reducedMotion ? 0 : 0.15 * animConfig.speedMultiplier,
        ease: animConfig.transitionStyle,
      }}
    >
      {action.label}
    </motion.button>
  );
}

// Badge count-up animation respects speed multiplier
export function NavbarBadge({ count }) {
  const { config: animConfig } = useAnimationStore();
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (animConfig.reducedMotion) {
      setDisplayCount(count);
      return;
    }

    // Animate count-up with speed multiplier
    const duration = 500 / animConfig.speedMultiplier;
    const steps = 20;
    const increment = count / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= count) {
        setDisplayCount(count);
        clearInterval(interval);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [count, animConfig]);

  return <span className="badge">{displayCount}</span>;
}
```

### 7.4 Accessibility Enhancements for Navigation

```typescript
// Dynamic Navbar with Studio Tuner accessibility settings
export function DynamicFloatingNavbar() {
  const { config: a11yConfig } = useAccessibilityStore();
  const { currentTheme } = useThemeStudio();

  const buttonSize = a11yConfig.largerClickTargets ? '48px' : '36px';
  const focusRingSize = a11yConfig.highContrast ? '4px' : '2px';
  const iconScale = currentTheme.typography.fontSize.multiplier * (a11yConfig.textScale || 1.0);

  return (
    <nav
      className="dynamic-navbar"
      style={{
        // High contrast mode
        ...(a11yConfig.highContrast && {
          backgroundColor: currentTheme.mode === 'dark' ? '#000000' : '#ffffff',
          color: currentTheme.mode === 'dark' ? '#ffffff' : '#000000',
          borderColor: currentTheme.mode === 'dark' ? '#ffffff' : '#000000',
        }),
      }}
    >
      <button
        className="quick-action"
        style={{
          // Larger click targets
          minWidth: buttonSize,
          minHeight: buttonSize,

          // Text scaling
          fontSize: `calc(0.875rem * ${iconScale})`,

          // High contrast focus ring
          outline: a11yConfig.highContrast
            ? `${focusRingSize} solid ${currentTheme.colors.primary}`
            : 'none',
          outlineOffset: '2px',
        }}
        aria-label="Quick action"
      >
        {/* Button content */}
      </button>
    </nav>
  );
}

// Command Palette with accessibility enhancements
export function CommandPalette() {
  const { config: a11yConfig } = useAccessibilityStore();

  return (
    <Command.Dialog
      style={{
        // Text scaling for command items
        fontSize: `calc(1rem * ${a11yConfig.textScaling.multiplier})`,

        // High contrast mode
        ...(a11yConfig.highContrast && {
          backgroundColor: '#ffffff',
          color: '#000000',
          border: '2px solid #000000',
        }),
      }}
      aria-label="Command palette"
    >
      <Command.Input
        style={{
          // Focus indicator
          '--focus-ring-size': `${a11yConfig.focusIndicator.size}px`,
          '--focus-ring-color': a11yConfig.focusIndicator.color === 'auto'
            ? 'var(--color-primary)'
            : a11yConfig.focusIndicator.color,
        }}
      />

      {/* Screen reader announcements */}
      {a11yConfig.screenReader.announceChanges && (
        <div role="status" aria-live="polite" className="sr-only">
          {/* Dynamic announcements */}
        </div>
      )}
    </Command.Dialog>
  );
}
```

### 7.5 Layout Preset Control

```typescript
// Navbar position and orientation from Studio Tuner Layout Presets
export function DynamicFloatingNavbar() {
  const { currentLayout } = useLayoutStore();

  const isHorizontal = currentLayout.panels.navbar.orientation === 'horizontal';
  const navbarPosition = isHorizontal
    ? {
        top: currentLayout.panels.navbar.position === 'top' ? 0 : 'auto',
        bottom: currentLayout.panels.navbar.position === 'bottom' ? 0 : 'auto',
        left: 0,
        right: 0,
      }
    : {
        top: 0,
        bottom: 0,
        left: currentLayout.panels.navbar.position === 'left' ? 0 : 'auto',
        right: currentLayout.panels.navbar.position === 'right' ? 0 : 'auto',
      };

  return (
    <nav
      className="dynamic-navbar"
      style={{
        ...navbarPosition,
        height: isHorizontal ? `${currentLayout.panels.navbar.height}px` : '100%',
        width: isHorizontal ? '100%' : `${currentLayout.panels.navbar.width}px`,
      }}
    >
      {/* Navbar content */}
    </nav>
  );
}
```

**See:** `specifications/studio-tuner-system.md` for complete theme, animation, and accessibility architecture
**See:** PRD #13 Section 4 (Theme Studio), Section 6 (Animation Controls), Section 7 (Accessibility Tools) for user workflows

---

# Part VIII: App Settings Integration

## 8. Settings-Driven Navigation Configuration

### 8.1 Command Palette Scope Control

Command Palette respects App Settings for search scope (current app vs all apps).

```typescript
// Command Palette uses global settings for scope
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { commandPaletteScope } = useGlobalSettings();
  const { activeProfile } = useWorkflowProfiles();

  // Generate actions based on scope setting
  const actions = useMemo(() => {
    if (commandPaletteScope === 'current-app') {
      // Only show actions for current app
      const currentApp = getCurrentApp(); // 'dashboard' | 'biz' | 'products'
      return getActionsForApp(currentApp);
    } else {
      // Show actions from all apps
      return [
        ...getDashboardActions(),
        ...getBizLabActions(),
        ...getProductsLabActions(),
        ...getGlobalActions(),
      ];
    }
  }, [commandPaletteScope]);

  return (
    <Command.Dialog open={open} onOpenChange={setOpen}>
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Group heading="Actions">
          {actions.map(action => (
            <Command.Item
              key={action.id}
              onSelect={() => {
                action.execute();
                setOpen(false);
              }}
            >
              <action.icon className="mr-2 h-4 w-4" />
              <span>{action.label}</span>
              {commandPaletteScope === 'all-apps' && (
                <span className="ml-auto text-xs text-muted-foreground">
                  {action.app}
                </span>
              )}
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}

// Scope changes based on workflow profile
export function syncCommandPaletteScopeWithProfile() {
  const { activeProfile, profiles } = useWorkflowProfiles.getState();
  const globalStore = useGlobalSettings.getState();

  if (!activeProfile) return;

  const profile = profiles.find(p => p.id === activeProfile);
  if (!profile) return;

  // Apply profile's command palette scope
  globalStore.updateCommandPaletteScope(profile.settings.global.commandPaletteScope);
}
```

**Profile-Specific Scope Examples:**

**Focus Mode:**
```typescript
{
  global: {
    commandPaletteScope: 'current-app', // Don't search across apps
  }
}
```
**Result:** Command Palette only shows actions for current app (Biz Lab, Products Lab, or Dashboard)

**Collaboration Mode:**
```typescript
{
  global: {
    commandPaletteScope: 'all-apps', // Search everywhere
  }
}
```
**Result:** Command Palette shows actions from all apps with app labels

### 8.2 Keyboard Shortcuts Customization

Global Navigation respects App Settings for keyboard shortcut customization.

```typescript
// Keyboard shortcuts from global settings
export function useKeyboardShortcuts() {
  const { keyboardShortcuts } = useGlobalSettings();

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const combo = getKeyCombo(e); // e.g., "Cmd+K", "Cmd+Shift+F"

      // Check if combo matches any registered shortcut
      for (const [action, shortcut] of Object.entries(keyboardShortcuts)) {
        if (combo === shortcut) {
          e.preventDefault();
          executeShortcutAction(action);
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [keyboardShortcuts]);
}

// Default shortcuts from global settings
const defaultKeyboardShortcuts = {
  'open-command-palette': 'Cmd+K',
  'toggle-sidebar': 'Cmd+B',
  'quick-switcher': 'Cmd+P',
  'global-search': 'Cmd+Shift+F',
  'jump-to-dashboard': 'Cmd+1',
  'jump-to-biz-lab': 'Cmd+2',
  'jump-to-products-lab': 'Cmd+3',
  'start-sprint': 'Cmd+Shift+S',
  'create-experiment': 'Cmd+Shift+E',
  'toggle-zen-mode': 'Cmd+Shift+Z',
};

// User can customize in App Settings
export function KeyboardShortcutSettings() {
  const { keyboardShortcuts, updateKeyboardShortcut } = useGlobalSettings();
  const [editing, setEditing] = useState<string | null>(null);

  const handleUpdateShortcut = (action: string, newShortcut: string) => {
    // Validate shortcut isn't already in use
    const conflictingAction = Object.entries(keyboardShortcuts).find(
      ([otherAction, shortcut]) => otherAction !== action && shortcut === newShortcut
    );

    if (conflictingAction) {
      showToast({
        title: 'Shortcut Conflict',
        description: `${newShortcut} is already used for ${conflictingAction[0]}`,
        variant: 'destructive',
      });
      return;
    }

    updateKeyboardShortcut(action, newShortcut);
    setEditing(null);

    showToast({
      title: 'Shortcut Updated',
      description: `${action} now uses ${newShortcut}`,
      variant: 'success',
    });
  };

  return (
    <div className="keyboard-shortcuts-settings">
      <h3>Keyboard Shortcuts</h3>
      {Object.entries(keyboardShortcuts).map(([action, shortcut]) => (
        <div key={action} className="shortcut-row">
          <span className="action-name">{formatActionName(action)}</span>
          {editing === action ? (
            <ShortcutRecorder
              onRecorded={(newShortcut) => handleUpdateShortcut(action, newShortcut)}
              onCancel={() => setEditing(null)}
            />
          ) : (
            <>
              <kbd>{shortcut}</kbd>
              <Button size="sm" variant="ghost" onClick={() => setEditing(action)}>
                Edit
              </Button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
```

### 8.3 Navbar Position & Configuration

Dynamic Floating Navbar position is controlled by App Settings (integrated with Studio Tuner layout presets).

```typescript
// Navbar position from global settings
export function DynamicFloatingNavbar() {
  const { navbarPosition } = useGlobalSettings();
  const [visible, setVisible] = useState(true);

  const navbarStyles = {
    position: 'fixed' as const,
    ...(navbarPosition === 'top' && { top: 0, left: 0, right: 0 }),
    ...(navbarPosition === 'bottom' && { bottom: 0, left: 0, right: 0 }),
    ...(navbarPosition === 'left' && { top: 0, bottom: 0, left: 0 }),
    ...(navbarPosition === 'right' && { top: 0, bottom: 0, right: 0 }),
  };

  return (
    <nav className="dynamic-navbar" style={navbarStyles}>
      {/* Navbar content */}
    </nav>
  );
}

// Navbar position syncs with workflow profiles and layout presets
export function syncNavbarPositionWithProfile() {
  const { activeProfile, profiles } = useWorkflowProfiles.getState();
  const globalStore = useGlobalSettings.getState();
  const layoutStore = useLayoutStore.getState();

  if (!activeProfile) return;

  const profile = profiles.find(p => p.id === activeProfile);
  if (!profile) return;

  // Check if layout preset overrides navbar position
  const currentLayout = layoutStore.currentLayout;
  if (currentLayout && currentLayout.panels.navbar) {
    // Layout preset takes precedence
    globalStore.updateNavbarPosition(currentLayout.panels.navbar.position);
  } else {
    // Use profile's navbar position
    globalStore.updateNavbarPosition(profile.settings.global.navbarPosition);
  }
}
```

### 8.4 Link Behavior Settings

Global Navigation respects App Settings for link behavior (same-tab vs new-tab).

```typescript
// Link behavior from global settings
export function NavigationLink({ href, children }: { href: string; children: React.ReactNode }) {
  const { linkBehavior } = useGlobalSettings();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (linkBehavior === 'same-tab') {
      e.preventDefault();
      router.push(href);
    }
    // If 'new-tab', let default <a> behavior handle it
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={linkBehavior === 'new-tab' ? '_blank' : '_self'}
      rel={linkBehavior === 'new-tab' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

// Profile-based link behavior
// Focus Mode: same-tab (minimize context switching)
// Collaboration Mode: new-tab (keep multiple contexts open)
```

### 8.5 Partner Collaboration Settings Impact

Global Navigation uses collaboration settings for notification routing and presence display.

```typescript
// Quick actions show partner presence from collaboration settings
export function QuickActions() {
  const { settings: collabSettings } = useCollaborationSettings();
  const { partnerPresence } = collabSettings;

  return (
    <div className="quick-actions">
      {partnerPresence && collabSettings.presenceSharing.shareLocation && (
        <div className="partner-presence">
          <Avatar src={partnerPresence.avatar} />
          <span className="partner-status">
            {partnerPresence.currentApp && `In ${formatAppName(partnerPresence.currentApp)}`}
          </span>
        </div>
      )}
      {/* Quick action buttons */}
    </div>
  );
}

// Badge counts respect notification routing rules
export function NavbarBadge({ eventType }: { eventType: string }) {
  const { reviewWorkflow } = useCollaborationSettings.getState().settings;
  const count = useEventCount(eventType);

  const notificationRule = reviewWorkflow.notificationRules[eventType];
  const shouldShowToMe = notificationRule?.notify.includes(getCurrentPartnerId()) ||
                         notificationRule?.notify.includes('both');

  if (!shouldShowToMe || count === 0) return null;

  return (
    <Badge variant={notificationRule.urgent ? 'destructive' : 'default'}>
      {count}
    </Badge>
  );
}
```

### 8.6 Export & Import Navigation Settings

Global Navigation settings can be exported and imported.

```typescript
// Export global navigation settings
export function exportGlobalNavigationSettings() {
  const exportData = exportSettings('global');

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vault-global-navigation-settings-${new Date().toISOString()}.json`;
  a.click();
  URL.revokeObjectURL(url);

  showToast({
    title: 'Settings Exported',
    description: 'Global Navigation settings saved to file',
    variant: 'success',
  });
}

// Import keyboard shortcuts from partner
export function importGlobalNavigationSettings(file: File) {
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const importedData = JSON.parse(e.target?.result as string);

      if (!importedData.version || !importedData.settings) {
        throw new Error('Invalid settings file format');
      }

      showImportPreview(importedData, () => {
        importSettings(importedData, 'merge');

        showToast({
          title: 'Settings Imported',
          description: `Global Navigation settings from ${importedData.exportedBy} applied`,
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

**See:** `specifications/app-settings-system.md` for complete Settings Hub architecture (Workflow Profiles, Global Settings Store, Keyboard Shortcuts Manager)
**See:** PRD #14 Section 15 for Global Settings product requirements

---

**Last Updated:** January 20, 2026
**Related Specifications:**
- `collaboration-features.md` - Team features integration
- `dashboard-system.md` - Mission Control integration
- `products-lab-system.md` - Products Lab integration
- `biz-lab-system.md` - Biz Lab integration

**Related PRDs:**
- `../prds/12-global-navigation-prd.md` - Product requirements
- `../prds/00-vault-overview-prd.md` - Vault ecosystem overview
