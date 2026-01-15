# Product Requirement Document (PRD): App Settings

**Product:** App-Specific Settings & Preferences  
**Type:** Internal (Per-App Configuration)  
**Status:** 📋 PLANNED (Sprint 3+)  
**Domain:** `vault.klario-world.com/settings/apps`  
**Parent:** Clario Vault (see `00-vault-overview-prd.md`)

---

# Part I: Foundation

## 📋 Partner Summary

| Field | Details |
| :--- | :--- |
| **For** | App Configuration |
| **Goal** | Tweak how each app behaves (e.g., auto-save, notifications). |
| **Key Actions** | • Set Notification Rules<br>• Choose Experiment Defaults<br>• Adjust Reading Mode |

---

## ⚙️ 1. Executive Summary

**App Settings** provides granular configuration for each Vault application (Products Lab, Biz Lab, Dashboard). Unlike Studio Tuner's global appearance settings, these are behavior and workflow preferences specific to each app.

**Core Function:** "Tune how each app works" - customize defaults, workflows, and app-specific behaviors.

---

## 2. Strategic Context

**Problem:**
- Each Vault app has unique workflows and preferences
- One user may want different behaviors per app
- App-specific settings don't fit in global theme customization
- Need centralized place to manage all app configs

**Solution:**
- Single settings page with per-app tabs
- App-specific defaults and behaviors
- Import/export configurations
- Sync across devices (localStorage + optional cloud)

**Users:**
- **2 Co-founders:** Managing shared vs personal workflows
- **Goal:** Align on defaults while allowing personal tweaks

---

## 3. Product Scope

### App-Specific Settings Coverage

**3.1 Products Lab Settings**
- Default experiment template
- Auto-save interval
- Workbench layout preferences
- Component preview options

**3.2 Biz Lab Settings**
- Knowledge Graph defaults
- Document preview behavior
- Sidebar layout
- Reading mode preferences

**3.3 Dashboard Settings**
- Widget visibility and order
- Chart style preferences
- Notification settings
- Quick actions customization

---

# Part II: Products Lab Settings

## 4. Experiment Preferences

### 4.1 Default Template

**Auto-fill New Experiments:**
```typescript
interface ExperimentTemplate {
  framework: 'tailwind' | 'shadcn' | 'framer';
  includeAnimations: boolean;
  includeResponsive: boolean;
  defaultLayout: 'page' | 'component';
}
```

**UI:**
```
┌─────────────────────────────────────┐
│ Default Experiment Template         │
├─────────────────────────────────────┤
│ Framework:   [Shadcn UI ▼]          │
│ □ Include Framer Motion animations  │
│ ☑ Include responsive breakpoints    │
│ Layout:      [○ Page  ● Component]  │
└─────────────────────────────────────┘
```

### 4.2 Auto-Save Configuration

**Frequency:**
```
Never    [●────────────] Every 30s
         [2 minutes]
```

**Options:**
- Auto-save on blur (switch tabs)
- Auto-save on navigate away
- Show save indicator
- Version history retention (last 10 versions)

### 4.3 Workbench Layout

**Default Panel Configuration:**
```
┌────────────────────────────────────┐
│ Workbench Default Layout           │
├────────────────────────────────────┤
│ Code Editor Width:  [60%]          │
│ Preview Position:   [Right ▼]      │
│ Console Visibility: [Auto ▼]       │
│ File Tree:          [☑ Show]       │
└────────────────────────────────────┘
```

---

## 5. Component Preferences

### 5.1 Preview Options

**Live Preview:**
```
☑ Hot reload on save
☑ Show component grid overlay
☑ Display responsive breakpoint indicator
□ Auto-open in new tab
```

**Performance Mode:**
```
○ Full rendering (slower, accurate)
● Optimized (faster, slight differences)
○ Minimal (fastest, basic only)
```

### 5.2 Token Visualizer

**Default View:**
```
[●] Color palette
[ ] Typography scale
[ ] Spacing units
[ ] All tokens
```

---

# Part III: Biz Lab Settings

## 6. Knowledge Graph Defaults

### 6.1 Graph View Preferences

**Default Layout:**
```typescript
interface GraphDefaults {
  nodeSize: 'small' | 'medium' | 'large';
  linkStyle: 'straight' | 'curved' | 'organic';
  colorScheme: 'category' | 'status' | 'custom';
  physics: {
    enabled: boolean;
    strength: number; // 0.1 - 1.0
  };
}
```

**UI:**
```
┌────────────────────────────────────┐
│ Knowledge Graph Defaults           │
├────────────────────────────────────┤
│ Node Size:     [Medium ▼]          │
│ Link Style:    [Curved ▼]          │
│ Color By:      [Category ▼]        │
│ Physics:       [☑] Enabled         │
│   Strength:    [──●──────] 0.6     │
└────────────────────────────────────┘
```

### 6.2 Auto-Open Behavior

**On Graph Node Click:**
```
○ Open in floating panel (F3)
● Open in sidebar
○ Navigate to document page
○ Show quick preview only
```

---

## 7. Document Reading Preferences

### 7.1 Preview Settings

**Hover Preview Cards:**
```
☑ Enable document previews on hover
Delay: [500ms]
Show:  [☑] Title  [☑] Read time  [☑] Key takeaways
```

### 7.2 Reading Mode

**Typography:**
```
Font Size:     [──────●──] 16px
Line Height:   [────●────] 1.5
Column Width:  [──●──────] 680px
```

**Behavior:**
```
☑ Auto-scroll to last position
☑ Highlight unread sections
□ Show reading progress bar
□ Estimate time remaining
```

### 7.3 Sidebar Layout

**Navigation Preferences:**
```
Default State:  [Expanded ▼]
Width:          [240px]
Auto-collapse:  [□] On mobile
                [☑] On narrow viewport

Pin Favorites:  [☑] Enabled
  └─ Show:      [☑] Icons  [☑] Labels
```

---

# Part IV: Dashboard Settings

## 8. Widget Configuration

### 8.1 Widget Visibility & Order

**Drag to Reorder:**
```
┌────────────────────────────────────┐
│ Active Widgets (drag to reorder)   │
├────────────────────────────────────┤
│ [≡] Sprint Progress                │
│ [≡] Achievements                   │
│ [≡] Portfolio Map                  │
│ [≡] Quick Actions                  │
│ [≡] Recent Documents               │
└────────────────────────────────────┘

Available Widgets:
[ ] Company Snapshot
[ ] Smart Recommendations
```

### 8.2 Chart Preferences

**Visualization Style:**
```
Chart Type:     [Bar charts ▼]
Color Scheme:   [Vibrant ▼]
Animation:      [●] Enabled
Show Legend:    [☑] Always
Show Values:    [☑] On hover
```

---

## 9. Notification Preferences

### 9.1 Achievement Notifications

**When to Notify:**
```
☑ Badge unlocked
☑ Milestone reached
□ Daily progress summary
□ Weekly digest
```

**Display Style:**
```
○ Toast (top-right corner, 3s)
● Confetti + modal
○ Subtle badge icon only
○ Disabled
```

### 9.2 Document Updates

**Notify When:**
```
☑ Related docs updated (smart links)
□ Any Biz Lab doc updated
□ Experiment promoted to production
```

---

## 10. Quick Actions Customization

### 10.1 Pinned Actions

**Dashboard Quick Actions Panel:**
```
┌────────────────────────────────────┐
│ Pinned Actions (max 6)             │
├────────────────────────────────────┤
│ [☑] Create Experiment              │
│ [☑] Open Knowledge Graph           │
│ [☑] Search Documents               │
│ [☑] View Achievements              │
│ [ ] Export Progress Report         │
│ [ ] Open Studio Tuner              │
└────────────────────────────────────┘
```

### 10.2 Default Dashboard Tab

**On Dashboard Load:**
```
○ Mission Control (overview)
● Sprint Progress (current sprint)
○ Achievements (gamification)
○ Last visited tab
```

---

# Part V: Team & Global Settings

## 11. Team Settings

### 11.1 Shared Defaults

**Consistency:**
```
Experiment Template:  [Use Company Standard ▼]
Graph Visualization:  [Use Shared Default ▼]
Dashboard Widgets:    [Allow Personalization ▼]
```

### 11.2 Coordination Rules

**Notifications:**
```
Notify Partner 1 when:
[x] I request review
[x] I approve document
[ ] I create experiment

Notify Partner 2 when:
[x] I request review
[x] I approve document
```

## 12. Cross-App Preferences

### 11.1 Search Behavior

**Global Search (⌘K):**
```
Default Scope:  [All apps ▼]
Max Results:    [10]
Sort By:        [Relevance ▼]

Quick Filters:
☑ Recent items
☑ Favorites
□ Modified today
```

### 11.2 Link Behavior

**Internal Navigation:**
```
Open links in:
○ Same tab
● Same tab with back button
○ New tab
○ Floating panel (if available)
```

---

## 12. Sync & Export

### 12.1 Configuration Sync

**Storage Options:**
```
Settings saved in:
● localStorage (this device only)
○ Cloud sync (NYI - future feature)

Last synced: Never
```

### 12.2 Export/Import

**Backup Configurations:**
```
[Export All Settings]  → Download JSON

Import from file:
[Choose File]  [Import]
```

**Export Format:**
```json
{
  "version": "1.0",
  "exportedAt": "2026-01-15T14:00:00Z",
  "settings": {
    "productsLab": { ... },
    "bizLab": { ... },
    "dashboard": { ... }
  }
}
```

### 12.3 Reset Options

**Reset to Defaults:**
```
Reset:
[ ] Products Lab settings
[ ] Biz Lab settings
[ ] Dashboard settings
[×] All app settings

[Reset Selected] ⚠️ Cannot be undone
```



# Part VII: Metrics & Success

## 14. Success Criteria

**Adoption:**
- 50%+ users customize at least one app setting
- 20%+ users customize multiple apps
- Settings retention: 90%+ persist across sessions

**Usability:**
- Settings change < 30 seconds to apply
- Import/export success rate: 100%
- Zero data loss on reset

**Impact:**
- Improved workflow efficiency (user survey)
- Reduced support questions about defaults
- Positive customization feedback

---

**Last Updated:** January 15, 2026  
**See Also:**
- `12-global-navigation-prd.md` - Command palette, shortcuts
- `13-studio-tuner-prd.md` - Global theme & layout
- `10-biz-lab-prd.md` - Biz Lab features
- `11-products-lab-prd.md` - Products Lab features

---

# Part VIII: Technical Appendix

## A. Technical Architecture

### 13.1 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **State:** Zustand with localStorage persistence
- **UI Components:** Shadcn form, select, checkbox, slider
- **Validation:** Zod schema validation

### 13.2 State Management

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppSettingsState {
  productsLab: ProductsLabSettings;
  bizLab: BizLabSettings;
  dashboard: DashboardSettings;
  updateProductsLab: (settings: Partial<ProductsLabSettings>) => void;
  updateBizLab: (settings: Partial<BizLabSettings>) => void;
  updateDashboard: (settings: Partial<DashboardSettings>) => void;
  resetAll: () => void;
}

export const useAppSettings = create<AppSettingsState>()(
  persist(
    (set) => ({
      productsLab: defaultProductsLabSettings,
      bizLab: defaultBizLabSettings,
      dashboard: defaultDashboardSettings,
      updateProductsLab: (settings) => set((state) => ({
        productsLab: { ...state.productsLab, ...settings }
      })),
      updateBizLab: (settings) => set((state) => ({
        bizLab: { ...state.bizLab, ...settings }
      })),
      updateDashboard: (settings) => set((state) => ({
        dashboard: { ...state.dashboard, ...settings }
      })),
      resetAll: () => set({
        productsLab: defaultProductsLabSettings,
        bizLab: defaultBizLabSettings,
        dashboard: defaultDashboardSettings
      })
    }),
    { name: 'vault-app-settings' }
  )
);
```

### 13.3 Settings Page UI

**Tab Navigation:**
```tsx
<Tabs defaultValue="products">
  <TabsList>
    <TabsTrigger value="products">Products Lab</TabsTrigger>
    <TabsTrigger value="biz">Biz Lab</TabsTrigger>
    <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
  </TabsList>
  
  <TabsContent value="products">
    <ProductsLabSettings />
  </TabsContent>
  <TabsContent value="biz">
    <BizLabSettings />
  </TabsContent>
  <TabsContent value="dashboard">
    <DashboardSettings />
  </TabsContent>
</Tabs>
```
