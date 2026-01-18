# Product Requirement Document (PRD): Global Navigation

**Product:** Global Navigation & Command System  
**Type:** Internal (Cross-Vault Navigation)  
**Status:** 📋 PLANNED (Sprint 3+)  
**Domain:** `vault.klario-world.com` (global features)  
**Parent:** Clario Vault (see `00-vault-overview-prd.md`)

---

# Part I: Foundation

## 📋 Partner Summary

| Field | Details |
| :--- | :--- |
| **For** | Power Users (You & Partner) |
| **Goal** | Navigate 3x faster using keyboard or quick menus. |
| **Key Actions** | • `Cmd+K` to search anything<br>• `Cmd+R` to request review<br>• Custom sidebar Shortcuts |

---

## 🚀 1. Executive Summary

**Global Navigation** provides unified navigation and quick access features across all Vault sections (Products, Biz, Settings). It centers around a command palette (⌘K), customizable global menu, and keyboard shortcuts.

**Core Function:** "Command center for power users" - instant access to any feature, document, or action.

---

## 2. Strategic Context

**Problem:**
- Users navigate between 3+ Vault sections (Products, Biz, Dashboard)
- Frequently accessed features buried in menus
- Power users need keyboard-first workflows
- Mobile users need quick actions

**Solution:**
- ⌘K Command Palette for instant search & actions
- Customizable global menu order
- Keyboard shortcuts manager
- Quick actions sidebar

**Users:**
- **2 Co-founders:** Power user navigation & quick actions
- **Key Goal:** Speed up coordination between partners

---

## 3. Product Scope

### Core Features (MVP)

**3.1 Command Palette (⌘K)**
- Global search across all content
- Quick actions (create experiment, open doc, etc.)
- Recent items history
- Smart suggestions

**3.2 Global Menu Configuration**
- Reorder Vault sections
- Hide/show menu items
- Pin frequently used pages
- Save/restore presets

**3.3 Keyboard Shortcuts Manager**
- View all shortcuts
- Customize key bindings
- Conflict detection
- Export/import configs

---

# Part II: Command Palette (⌘K)

## 4. Command Palette Specification

### 4.1 Trigger Mechanism

**Keyboard:**
- `Cmd+K` (Mac) / `Ctrl+K` (Windows)
- Globally accessible from any page

**Visual:**
- Centered modal overlay
- Glassmorphism backdrop blur
- Smooth fade-in animation

### 4.2 Search Categories

**Documents:**
**(See Technical Appendix for Search Categories JSON)**

**Actions:**
```
⚡ Quick Actions
  🆕 Create Experiment
  📨 Request Partner Review
  👁️ View Partner Activity
  📊 Open Dashboard
```

**Navigation:**
```
🧭 Go To
  🎨 Products Lab
  📚 Biz Lab
  ⚙️ Settings
```

**Recent:**
```
🕐 Recent
  📄 Last Opened: GTM Strategy
  🎨 Last Experiment: Glass Card
```

### 4.3 Search Algorithm

**Fuzzy Matching:**
```typescript
import Fuse from 'fuse.js';

const searchIndex = {
  documents: getAllDocs(),
  actions: getQuickActions(),
  navigation: getVaultSections()
};

const fuse = new Fuse(searchIndex, {
  keys: ['title', 'description', 'tags'],
  threshold: 0.3
});
```

**Ranking:**
1. Exact match (highest)
2. Title prefix match
3. Description match
4. Tag match
5. Recent items boost (+0.2 score)

### 4.4 Quick Actions

**Available Actions:**
```typescript
const quickActions = [
  {
    id: 'create-experiment',
    title: 'Create New Experiment',
    icon: '🆕',
    shortcut: '⌘+N',
    action: () => router.push('/products/experiments/new')
  },
  {
    id: 'open-dashboard',
    title: 'Mission Control Dashboard',
    icon: '📊',
    shortcut: '⌘+D',
    action: () => router.push('/')
  },
  {
    id: 'request-review',
    title: 'Request Partner Review',
    icon: '📨',
    shortcut: '⌘+R',
    action: () => triggerReviewModal()
  },
  {
    id: 'view-activity',
    title: 'View Partner Activity',
    icon: '👁️',
    shortcut: '⌘+Shift+A',
    action: () => toggleActivityFeed()
  },
  {
    id: 'search-graph',
    title: 'Knowledge Graph',
    icon: '🗺️',
    shortcut: '⌘+G',
    action: () => router.push('/biz/graph')
  }
];
```

---

# Part III: Global Menu

## 5. Menu Configuration

### 5.1 Default Menu Structure

**Top Navigation Tabs:**
```
┌────────────────────────────────────────┐
│ [📊 Home] [🎨 Products] [📚 Biz] [⚙️]  │
└────────────────────────────────────────┘
```

### 5.2 Customization Options

**Reorder Tabs:**
- Drag & drop to rearrange
- Persist preference in localStorage
- Mobile: Reorder bottom navigation

**Hide/Show Items:**
```typescript
interface MenuConfig {
  home: { visible: boolean; order: number };
  products: { visible: boolean; order: number };
  biz: { visible: boolean; order: number };
  settings: { visible: boolean; order: number };
}
```

**Pin Frequent Pages:**
```
📌 Pinned
  └─ GTM Strategy (always in menu)
  └─ Glass Card Experiment
  └─ Knowledge Graph
```

### 5.3 Menu Presets

**Available Presets:**
- **Developer Mode:** Products → Biz → Settings
- **Strategy Mode:** Biz → Dashboard → Products
- **Minimal Mode:** Hide all except active section

**Save Custom Preset:**
```typescript
localStorage.setItem('menu-preset', JSON.stringify({
  name: 'My Custom Layout',
  config: menuConfig,
  timestamp: Date.now()
}));
```

---

# Part IV: Keyboard Shortcuts

## 6. Shortcuts Manager

### 6.1 Default Shortcuts

**Global Navigation:**
```
⌘+K     → Open Command Palette
⌘+1     → Products Lab
⌘+2     → Biz Lab
⌘+3     → Settings
⌘+D     → Dashboard
⌘+G     → Knowledge Graph
⌘+/     → Show All Shortcuts
```

**Actions:**
```
⌘+N     → New Experiment
⌘+S     → Save Changes
⌘+F     → Search Current Page
⌘+←     → Back
⌘+→     → Forward
```

**Accessibility:**
```
Tab     → Next Element
Shift+Tab → Previous Element
Esc     → Close Modal/Panel
Enter   → Confirm Action
```

### 6.2 Customization Interface

**Shortcut Editor:**
```
┌─────────────────────────────────────┐
│ Action              Shortcut        │
├─────────────────────────────────────┤
│ Command Palette     [⌘+K]    [Edit]│
│ Products Lab        [⌘+1]    [Edit]│
│ New Experiment      [⌘+N]    [Edit]│
└─────────────────────────────────────┘
```

**Conflict Detection:**
```typescript
function validateShortcut(newShortcut: string) {
  const conflicts = shortcuts.filter(s => s.key === newShortcut);
  if (conflicts.length > 0) {
    return {
      valid: false,
      message: `⚠️ Conflict with "${conflicts[0].action}"`
    };
  }
  return { valid: true };
}
```

### 6.3 Export/Import

**Export Config:**
```json
{
  "version": "1.0",
  "shortcuts": {
    "commandPalette": "cmd+k",
    "productsLab": "cmd+1",
    "bizLab": "cmd+2",
    "newExperiment": "cmd+n"
  },
  "exportedAt": "2026-01-15T13:57:00Z"
}
```

**Import:**
- Upload JSON file
- Validate schema
- Preview changes
- Apply (with undo option)

---

# Part V: Technical Architecture

## 7. Implementation

### 7.1 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Command Palette:** CMDK library (already used for search)
- **Shortcuts:** React Hotkeys Hook
- **Styling:** Tailwind CSS + Shadcn UI
- **State:** Zustand for global menu state

### 7.2 CMDK Integration

```typescript
import { Command } from 'cmdk';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Command.Dialog open={open} onOpenChange={setOpen}>
      <Command.Input placeholder="Search or run command..." />
      <Command.List>
        <Command.Group heading="Documents">
          <Command.Item>GTM Strategy</Command.Item>
          <Command.Item>Market Analysis</Command.Item>
        </Command.Group>
        <Command.Group heading="Actions">
          <Command.Item>Create Experiment</Command.Item>
          <Command.Item>Open Dashboard</Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
```

### 7.3 Global State Management

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MenuState {
  config: MenuConfig;
  setOrder: (itemId: string, order: number) => void;
  toggleVisibility: (itemId: string) => void;
  resetToDefault: () => void;
}

export const useMenuStore = create<MenuState>()(
  persist(
    (set) => ({
      config: defaultMenuConfig,
      setOrder: (itemId, order) => set((state) => ({
        config: { ...state.config, [itemId]: { ...state.config[itemId], order } }
      })),
      toggleVisibility: (itemId) => set((state) => ({
        config: { ...state.config, [itemId]: { ...state.config[itemId], visible: !state.config[itemId].visible } }
      })),
      resetToDefault: () => set({ config: defaultMenuConfig })
    }),
    { name: 'vault-menu-config' }
  )
);

---

## Approval Checklist
 
 ### Pre-Development Requirements
 
 - [ ] **Keyboard Shortcuts:** React Hotkeys Hook configured.
 - [ ] **Search Engine:** Flexsearch or Cmdk integration confirmed.
 - [ ] **UI:** Floating Dock glassmorphism tokens defined.
 
 ### Stakeholder Approvals
 
 - [ ] **Partner 1 (Product):** Command palette categories approved.
 - [ ] **Partner 2 (Marketing):** Quick action shortcuts confirmed.
 
 ### Ready-to-Build Criteria
 
 - [ ] **Accessibility:** Screen reader labels for all dock items.
 - [ ] **Performance:** Cmd+K response < 100ms verified.
 
 ---
 
 **Status History:**
 - **v0.1.0 DRAFT** (Jan 10, 2026) - Initial navigation spec created.
 - **v0.1.1 REVIEW** (Jan 15, 2026) - Added Command Palette details.
 - **v0.1.2 APPROVED** (Jan 18, 2026) - Standardized for 2-Partner Vault.
 
 ---
 
 **Last Updated:** January 18, 2026

## 8. Success Criteria

**Adoption:**
- 80%+ of sessions use Command Palette
- Average 5+ keyboard shortcuts per session
- 90% menu customization retention

**Performance:**
- Command Palette open: < 100ms
- Search results: < 200ms
- Keyboard shortcut response: < 50ms

**UX:**
- User reports faster navigation (survey)
- Reduced clicks to reach target pages
- Positive keyboard-first workflow feedback

---

**See Also:**
- `13-studio-tuner-prd.md` - Theme and layout customization
- `00-vault-overview-prd.md` - Parent PRD
- `specifications/core-platform.md` - Navigation architecture

---

## A. Search Categories Configuration

**JSON Structure for Command Palette:**

```json
{
  "categories": [
    {
      "heading": "Documents",
      "items": [
        { "id": "biz-gtm", "title": "GTM Strategy", "icon": "📄", "path": "/biz/strategy/gtm" },
        { "id": "biz-market", "title": "Market Analysis", "icon": "📄", "path": "/biz/strategy/market" },
        { "id": "biz-finance", "title": "Financial Model", "icon": "📄", "path": "/biz/financial" }
      ]
    },
    {
      "heading": "Actions",
      "items": [
        { "id": "action-create", "title": "Create Experiment", "icon": "🆕", "action": "triggerCreateModal" },
        { "id": "action-review", "title": "Request Partner Review", "icon": "📨", "action": "triggerReviewModal" }
      ]
    }
  ]
}
```
