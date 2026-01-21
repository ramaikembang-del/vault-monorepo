# Vault Settings Hub - Integration Guide

## Overview

The Vault Settings Hub is now implemented and ready to use across all apps (Mission Control, Biz Lab, Products Lab). This guide shows how to integrate settings into your components.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Vault Settings Hub                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐   │
│  │   Zustand    │   │  LocalStorage│   │   Settings   │   │
│  │    Store     │◄─►│  Persistence │◄─►│   Provider   │   │
│  └──────────────┘   └──────────────┘   └──────────────┘   │
│         │                                       │           │
│         │                                       │           │
│         ▼                                       ▼           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Settings UI (/settings)                  │  │
│  ├──────────────┬──────────────┬──────────────┬─────────┤  │
│  │  Unified     │  Products    │   Biz Lab    │  Sync   │  │
│  │  Settings    │     Lab      │              │ Export  │  │
│  └──────────────┴──────────────┴──────────────┴─────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Cross-App Integration
                            ▼
     ┌──────────────────────────────────────────────┐
     │      Mission Control │ Biz Lab │ Products    │
     │         (Dashboard)  │         │    Lab      │
     └──────────────────────────────────────────────┘
```

## Quick Start

### 1. Using Settings in Components

```typescript
// Import the hook for your app section
import { useGlobalSettings, useDashboardSettings, useBizLabSettings, useProductsLabSettings } from '@/lib/store/settings-store';

function MyComponent() {
  // Get global settings
  const global = useGlobalSettings();

  // Get dashboard settings
  const dashboard = useDashboardSettings();

  // Access specific settings
  const fontSize = global.globalFontSizeCascade.masterFontSize;
  const chartType = dashboard.widgets.charts.defaultType;

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      Chart Type: {chartType}
    </div>
  );
}
```

### 2. Updating Settings

```typescript
import { useVaultSettings } from '@/lib/store/settings-store';

function SettingsExample() {
  const { global, updateSetting } = useVaultSettings();

  const handleFontSizeChange = (newSize: number) => {
    // Update using dot notation path
    updateSetting('global.globalFontSizeCascade.masterFontSize', newSize);
  };

  return (
    <button onClick={() => handleFontSizeChange(18)}>
      Set Font Size to 18px
    </button>
  );
}
```

### 3. Using Workflow Profiles

```typescript
import { useWorkflowProfiles } from '@/lib/store/settings-store';

function ProfileSwitcher() {
  const { profiles, activeProfile, switchProfile } = useWorkflowProfiles();

  return (
    <div>
      <p>Active: {activeProfile || 'None'}</p>
      {profiles.map(profile => (
        <button
          key={profile.id}
          onClick={() => switchProfile(profile.name)}
        >
          {profile.name}
        </button>
      ))}
    </div>
  );
}
```

## Cross-App Synchronization Examples

### Example 1: Font Size Cascade

When a user changes the global font size in Settings:

1. **Settings Store** updates the value
2. **SettingsProvider** applies it to `document.documentElement.style.fontSize`
3. **All apps** (Dashboard, Biz Lab, Products Lab) automatically inherit the new size
4. Individual apps can override if `allowAppOverrides` is enabled

```typescript
// In Biz Lab document component
function DocumentReader() {
  const { documentReading } = useBizLabSettings();
  const { globalFontSizeCascade } = useGlobalSettings();

  const effectiveFontSize = globalFontSizeCascade.allowAppOverrides
    ? documentReading.readingMode.typography.fontSize
    : globalFontSizeCascade.masterFontSize;

  return <article style={{ fontSize: `${effectiveFontSize}px` }}>...</article>;
}
```

### Example 2: Workflow Profile Affecting Multiple Apps

When "Focus Mode" is activated:

1. **Dashboard**: Hides non-essential widgets, disables notifications
2. **Biz Lab**: Collapses sidebar, enables zen mode
3. **Products Lab**: Disables hot reload, hides console

```typescript
// The profile switch automatically updates all these settings
switchProfile('Focus Mode');

// Components react to the changes:

// In Dashboard
const { widgets } = useDashboardSettings();
// widgets.active will now only include focus-relevant widgets

// In Biz Lab
const { documentReading } = useBizLabSettings();
// documentReading.sidebarLayout.defaultState is now 'collapsed'

// In Products Lab
const { experimentWorkbench } = useProductsLabSettings();
// experimentWorkbench.hotReload.enabled is now false
```

### Example 3: Notification Intelligence

Settings control how notifications are delivered across all apps:

```typescript
import { useVaultSettings } from '@/lib/store/settings-store';

function NotificationSystem() {
  const { notificationIntelligence } = useVaultSettings();

  const sendNotification = (type: string, message: string) => {
    // Check if DND is active
    if (notificationIntelligence.doNotDisturb.enabled) {
      // Check if this is a critical exception
      if (notificationIntelligence.urgencyRules.critical.includes(type)) {
        // Send immediately
        showNotification(message);
      } else {
        // Queue for later
        queueNotification(type, message);
      }
    } else {
      // Send according to delivery rules
      if (notificationIntelligence.deliveryRules.immediate.includes(type)) {
        showNotification(message);
      } else if (notificationIntelligence.deliveryRules.batched.includes(type)) {
        batchNotification(type, message);
      }
    }
  };

  return <div>...</div>;
}
```

## Integration Checklist

### For Dashboard Components

- [ ] Use `useDashboardSettings()` for widget configuration
- [ ] Respect `widgets.active` for widget visibility
- [ ] Apply `charts.colorScheme` to data visualizations
- [ ] Use `quickActions.pinnedActions` for quick action panel
- [ ] Check `notifications.achievements.displayStyle` for celebration animations

### For Biz Lab Components

- [ ] Use `useBizLabSettings()` for graph and document settings
- [ ] Apply `knowledgeGraph.visualization` to graph rendering
- [ ] Respect `documentReading.typography` for document display
- [ ] Use `hoverPreviews.enabled` to control preview cards
- [ ] Apply `sidebarLayout.defaultState` to sidebar

### For Products Lab Components

- [ ] Use `useProductsLabSettings()` for experiment preferences
- [ ] Apply `experimentWorkbench.defaultTemplate` to new experiments
- [ ] Use `autoSave.intervalSeconds` for save timing
- [ ] Respect `hotReload.enabled` for live preview
- [ ] Apply `componentLibrary.documentation.fontSize` to docs

### For All Components

- [ ] Check `global.accessibility.reducedMotion` before animations
- [ ] Respect `global.linkBehavior` for navigation
- [ ] Use `global.search.defaultScope` in search interfaces
- [ ] Apply active workflow profile settings

## Accessibility Integration

The SettingsProvider automatically applies CSS classes based on accessibility settings:

```css
/* These classes are automatically applied: */
.reduce-motion /* When reducedMotion is enabled */
.high-contrast /* When highContrast is enabled */
.sr-optimized /* When screenReaderOptimizations is enabled */
.enhanced-kbd-nav /* When keyboardNavigationEnhanced is enabled */
```

Check for these in your components:

```typescript
import { useGlobalSettings } from '@/lib/store/settings-store';

function AnimatedComponent() {
  const { accessibility } = useGlobalSettings();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{
        duration: accessibility.reducedMotion ? 0 : 0.3
      }}
    >
      Content
    </motion.div>
  );
}
```

## Export/Import Settings

Users can backup and restore settings:

```typescript
// Export
const { exportSettings } = useVaultSettings();
const data = exportSettings('all'); // or 'products', 'biz', 'dashboard'

// Download as JSON
const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
// ... trigger download

// Import
const { importSettings } = useVaultSettings();
importSettings(data, 'replace'); // or 'merge'
```

## Testing Settings Integration

### Test 1: Font Size Cascade

1. Go to `/settings`
2. Navigate to "Team & Global" → "Global Settings"
3. Enable "Global Font Size Cascade"
4. Adjust the slider
5. **Expected**: All text across Dashboard, Biz Lab, Products Lab updates in real-time

### Test 2: Workflow Profile Switch

1. Go to `/settings`
2. Navigate to "Unified Settings"
3. Click "Activate Profile" on "Focus Mode"
4. **Expected**:
   - Dashboard widgets reduce to minimal set
   - Achievement notifications stop showing
   - Biz Lab sidebar collapses
   - Products Lab disables hot reload

### Test 3: Accessibility

1. Go to `/settings`
2. Navigate to "Team & Global" → "Accessibility"
3. Enable "Reduced Motion"
4. **Expected**: All animations across the app become instant

### Test 4: Settings Persistence

1. Change any setting
2. Refresh the page
3. **Expected**: Setting is remembered (localStorage persistence)

## Troubleshooting

### Settings Not Applying

**Problem**: Changed a setting but components don't update

**Solution**: Ensure component is using the correct hook:
```typescript
// ❌ Wrong - won't get updates
const settings = useVaultSettings().global;

// ✅ Correct - reactive updates
const global = useGlobalSettings();
```

### Hydration Errors

**Problem**: "Text content does not match" in console

**Solution**: Use `mounted` state for settings-dependent rendering:
```typescript
const [mounted, setMounted] = useState(false);
const global = useGlobalSettings();

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null; // or skeleton

return <div>{/* settings-dependent content */}</div>;
```

### LocalStorage Full

**Problem**: Settings not persisting

**Solution**: Settings store is configured to save last 10 version history states. If localStorage is full, older versions will be removed automatically. For very large settings, consider implementing selective persistence.

## Next Steps

### Planned Features (Not Yet Implemented)

1. **Real-time Partner Sync** (Section 4-5 in PRD)
   - Pusher WebSocket integration
   - Partner notification routing
   - Shared vs. personal settings

2. **Advanced Workflow Profiles**
   - Calendar integration for auto-switching
   - Time-based scheduling
   - Custom profile creation UI

3. **Cross-App Cascade Rules** (Section 5 in PRD)
   - Dependency graph
   - Impact preview
   - Rollback support

4. **Notification Intelligence** (Section 6 in PRD)
   - Smart batching
   - Partner-aware routing
   - Context-based delivery

## File Structure

```
vault/
├── lib/
│   └── store/
│       ├── types.ts              # TypeScript interfaces
│       ├── defaults.ts           # Default settings values
│       └── settings-store.ts     # Zustand store + hooks
├── app/
│   └── settings/
│       ├── page.tsx              # Main settings page
│       ├── components/
│       │   ├── settings-card.tsx      # Reusable card component
│       │   └── form-controls.tsx      # Toggle, Select, Slider, etc.
│       └── sections/
│           ├── workflow-profiles.tsx
│           ├── global-settings.tsx
│           ├── dashboard-settings.tsx
│           ├── products-lab-settings.tsx
│           ├── biz-lab-settings.tsx
│           ├── team-collaboration.tsx
│           └── sync-export.tsx
├── components/
│   └── settings-provider.tsx    # Applies settings to DOM
└── app/
    ├── layout.tsx                # Wraps app with SettingsProvider
    └── globals.css               # Accessibility CSS classes
```

## Summary

✅ **Completed**:
- Zustand store with localStorage persistence
- Settings UI with 6 main sections
- Global font size cascade
- Accessibility settings
- Workflow profiles (3 defaults: Focus, Collaboration, Review)
- Export/Import functionality
- Version history/rollback
- Settings Provider for DOM integration
- Navigation link to settings page

🚧 **In Progress**:
- Dashboard widget configuration UI
- Products Lab workbench integration
- Biz Lab graph visualization settings

📋 **Planned**:
- Real-time partner synchronization (Pusher)
- Advanced cascade rules engine
- Notification intelligence system
- Calendar-based profile switching
- Custom profile creation

---

**Last Updated**: January 19, 2026
**Status**: Core Implementation Complete (~60%)
**Ready for**: Testing and incremental feature additions
