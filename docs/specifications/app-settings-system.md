# App Settings System Specification

**Purpose:** Complete technical specification for Vault Settings Hub - unified configuration system
**Status:** 📋 PLANNED (Sprint 3+) | Settings Architecture
**Components:** Workflow Profiles, Collaboration Settings, Cross-App Sync, Notification Intelligence, App-Specific Settings

---

# Part I: Workflow Intelligence & Profiles

## 1. Workflow Profile Store

### 1.1 Profile Configuration Interface

```typescript
interface WorkflowProfile {
  id: string;
  name: 'Focus Mode' | 'Collaboration Mode' | 'Review Mode' | 'Strategy Planning Mode' | 'Deep Work Mode' | string;
  description: string;
  settings: {
    missionControl: {
      widgetVisibility: string[]; // Widget IDs to show
      widgetOrder: string[]; // Order of visible widgets
      notifications: {
        enabled: boolean;
        exceptions: string[]; // Event types that override disabled state
      };
      quickActionsScope: 'current-app' | 'all-apps';
    };
    bizLab: {
      sidebarState: 'collapsed' | 'expanded';
      zenMode: boolean; // Hide all distractions
      autoSave: {
        enabled: boolean;
        interval: number; // Seconds
      };
      knowledgeGraphVisible: boolean;
      recentDocsCount: number;
    };
    productsLab: {
      sidebarState: 'collapsed' | 'expanded';
      hotReload: boolean;
      console: 'visible' | 'hidden' | 'minimized';
      previewMode: 'split' | 'full' | 'code-only';
    };
    global: {
      commandPaletteScope: 'current-app' | 'all-apps';
      linkBehavior: 'same-tab' | 'new-tab';
      sidebarPosition: 'left' | 'right' | 'hidden'; // From Studio Tuner integration
      navbarPosition: 'top' | 'bottom' | 'left' | 'right'; // From Studio Tuner integration
    };
  };
  triggers: {
    calendar: string[]; // Calendar event keywords that suggest this profile
    schedule: {
      daily?: string; // Time range "HH:MM-HH:MM"
      weekly?: { [day: string]: string }; // Day-specific schedules
    };
    manual: boolean; // Can be manually activated
  };
  createdBy: 'system' | string; // 'system' for defaults, partnerId for custom
  createdAt: string; // ISO timestamp
  lastActivated: string | null; // ISO timestamp
}

// System-provided default profiles
export const defaultProfiles: WorkflowProfile[] = [
  {
    id: 'focus-mode',
    name: 'Focus Mode',
    description: 'Deep work without interruptions',
    settings: {
      missionControl: {
        widgetVisibility: ['my-focus', 'current-sprint'],
        widgetOrder: ['my-focus', 'current-sprint'],
        notifications: { enabled: false, exceptions: ['critical-alerts'] },
        quickActionsScope: 'current-app',
      },
      bizLab: {
        sidebarState: 'collapsed',
        zenMode: true,
        autoSave: { enabled: true, interval: 30 },
        knowledgeGraphVisible: false,
        recentDocsCount: 3,
      },
      productsLab: {
        sidebarState: 'collapsed',
        hotReload: false,
        console: 'hidden',
        previewMode: 'code-only',
      },
      global: {
        commandPaletteScope: 'current-app',
        linkBehavior: 'same-tab',
        sidebarPosition: 'hidden',
        navbarPosition: 'left',
      },
    },
    triggers: {
      calendar: ['Deep Work', 'Focus Time', 'Coding Sprint'],
      schedule: { daily: '09:00-12:00' },
      manual: true,
    },
    createdBy: 'system',
    createdAt: '2026-01-01T00:00:00Z',
    lastActivated: null,
  },
  {
    id: 'collaboration-mode',
    name: 'Collaboration Mode',
    description: 'Team coordination and shared work',
    settings: {
      missionControl: {
        widgetVisibility: ['my-focus', 'team-pulse', 'mission-status', 'review-queue'],
        widgetOrder: ['team-pulse', 'my-focus', 'mission-status', 'review-queue'],
        notifications: { enabled: true, exceptions: [] },
        quickActionsScope: 'all-apps',
      },
      bizLab: {
        sidebarState: 'expanded',
        zenMode: false,
        autoSave: { enabled: true, interval: 60 },
        knowledgeGraphVisible: true,
        recentDocsCount: 10,
      },
      productsLab: {
        sidebarState: 'expanded',
        hotReload: true,
        console: 'visible',
        previewMode: 'split',
      },
      global: {
        commandPaletteScope: 'all-apps',
        linkBehavior: 'new-tab',
        sidebarPosition: 'left',
        navbarPosition: 'top',
      },
    },
    triggers: {
      calendar: ['Team Meeting', 'Sprint Planning', 'Standup'],
      schedule: { daily: '13:00-17:00' },
      manual: true,
    },
    createdBy: 'system',
    createdAt: '2026-01-01T00:00:00Z',
    lastActivated: null,
  },
  {
    id: 'review-mode',
    name: 'Review Mode',
    description: 'Document and experiment review workflow',
    settings: {
      missionControl: {
        widgetVisibility: ['review-queue', 'team-pulse', 'achievements'],
        widgetOrder: ['review-queue', 'team-pulse', 'achievements'],
        notifications: { enabled: true, exceptions: [] },
        quickActionsScope: 'all-apps',
      },
      bizLab: {
        sidebarState: 'expanded',
        zenMode: false,
        autoSave: { enabled: true, interval: 120 },
        knowledgeGraphVisible: true,
        recentDocsCount: 20,
      },
      productsLab: {
        sidebarState: 'expanded',
        hotReload: false,
        console: 'minimized',
        previewMode: 'split',
      },
      global: {
        commandPaletteScope: 'all-apps',
        linkBehavior: 'new-tab',
        sidebarPosition: 'right',
        navbarPosition: 'top',
      },
    },
    triggers: {
      calendar: ['Review Session', 'Code Review', 'Strategy Review'],
      schedule: {},
      manual: true,
    },
    createdBy: 'system',
    createdAt: '2026-01-01T00:00:00Z',
    lastActivated: null,
  },
  {
    id: 'strategy-planning-mode',
    name: 'Strategy Planning Mode',
    description: 'Strategic thinking and planning',
    settings: {
      missionControl: {
        widgetVisibility: ['mission-status', 'portfolio-map'],
        widgetOrder: ['portfolio-map', 'mission-status'],
        notifications: { enabled: false, exceptions: ['critical-alerts', 'strategy-approved'] },
        quickActionsScope: 'current-app',
      },
      bizLab: {
        sidebarState: 'expanded',
        zenMode: false,
        autoSave: { enabled: true, interval: 60 },
        knowledgeGraphVisible: true,
        recentDocsCount: 15,
      },
      productsLab: {
        sidebarState: 'collapsed',
        hotReload: false,
        console: 'hidden',
        previewMode: 'full',
      },
      global: {
        commandPaletteScope: 'all-apps',
        linkBehavior: 'same-tab',
        sidebarPosition: 'left',
        navbarPosition: 'left',
      },
    },
    triggers: {
      calendar: ['Strategy Session', 'Planning', 'OKR Review'],
      schedule: {},
      manual: true,
    },
    createdBy: 'system',
    createdAt: '2026-01-01T00:00:00Z',
    lastActivated: null,
  },
];
```

### 1.2 Workflow Profile Store

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WorkflowProfileStore {
  profiles: WorkflowProfile[];
  activeProfile: string | null; // Profile ID
  profileHistory: { profileId: string; timestamp: string }[];

  // Actions
  switchProfile: (profileId: string) => void;
  createCustomProfile: (profile: Omit<WorkflowProfile, 'id' | 'createdAt' | 'lastActivated'>) => void;
  deleteCustomProfile: (profileId: string) => void;
  updateProfile: (profileId: string, updates: Partial<WorkflowProfile>) => void;
  scheduleProfileSwitch: (profileId: string, schedule: WorkflowProfile['triggers']['schedule']) => void;
  suggestProfileForContext: (context: { calendarEvent?: string; timeOfDay?: string; currentTask?: string }) => WorkflowProfile | null;
}

export const useWorkflowProfiles = create<WorkflowProfileStore>()(
  persist(
    (set, get) => ({
      profiles: defaultProfiles,
      activeProfile: null,
      profileHistory: [],

      switchProfile: (profileId) => {
        const profile = get().profiles.find(p => p.id === profileId);
        if (!profile) return;

        // Update last activated timestamp
        set((state) => ({
          profiles: state.profiles.map(p =>
            p.id === profileId ? { ...p, lastActivated: new Date().toISOString() } : p
          ),
          activeProfile: profileId,
          profileHistory: [
            ...state.profileHistory,
            { profileId, timestamp: new Date().toISOString() }
          ].slice(-10), // Keep last 10 switches
        }));

        // Apply profile settings to all apps via settings store
        applyProfileSettings(profile.settings);

        // Broadcast profile switch event
        window.dispatchEvent(new CustomEvent('profile-switched', {
          detail: { profile, timestamp: new Date().toISOString() }
        }));
      },

      createCustomProfile: (profileData) => {
        const newProfile: WorkflowProfile = {
          ...profileData,
          id: generateId(),
          createdAt: new Date().toISOString(),
          lastActivated: null,
        };

        set((state) => ({
          profiles: [...state.profiles, newProfile],
        }));

        return newProfile.id;
      },

      deleteCustomProfile: (profileId) => {
        const profile = get().profiles.find(p => p.id === profileId);
        if (!profile || profile.createdBy === 'system') {
          throw new Error('Cannot delete system profiles');
        }

        set((state) => ({
          profiles: state.profiles.filter(p => p.id !== profileId),
          activeProfile: state.activeProfile === profileId ? null : state.activeProfile,
        }));
      },

      updateProfile: (profileId, updates) => {
        set((state) => ({
          profiles: state.profiles.map(p =>
            p.id === profileId ? { ...p, ...updates } : p
          ),
        }));
      },

      scheduleProfileSwitch: (profileId, schedule) => {
        set((state) => ({
          profiles: state.profiles.map(p =>
            p.id === profileId ? { ...p, triggers: { ...p.triggers, schedule } } : p
          ),
        }));

        // Set up cron-like scheduler (implementation in scheduler service)
        scheduleProfileSwitchCron(profileId, schedule);
      },

      suggestProfileForContext: (context) => {
        const { calendarEvent, timeOfDay, currentTask } = context;
        const profiles = get().profiles;

        // Check calendar event keywords
        if (calendarEvent) {
          const matchingProfile = profiles.find(p =>
            p.triggers.calendar.some(keyword =>
              calendarEvent.toLowerCase().includes(keyword.toLowerCase())
            )
          );
          if (matchingProfile) return matchingProfile;
        }

        // Check time-based schedules
        if (timeOfDay) {
          const now = new Date(timeOfDay);
          const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
          const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

          const matchingProfile = profiles.find(p => {
            const { schedule } = p.triggers;
            if (!schedule) return false;

            // Check daily schedule
            if (schedule.daily) {
              const [start, end] = schedule.daily.split('-');
              if (isTimeInRange(currentTime, start, end)) return true;
            }

            // Check weekly schedule
            if (schedule.weekly && schedule.weekly[dayOfWeek]) {
              const [start, end] = schedule.weekly[dayOfWeek].split('-');
              if (isTimeInRange(currentTime, start, end)) return true;
            }

            return false;
          });
          if (matchingProfile) return matchingProfile;
        }

        return null;
      },
    }),
    {
      name: 'vault-workflow-profiles',
      version: 1,
    }
  )
);

// Helper function to apply profile settings to all apps
function applyProfileSettings(settings: WorkflowProfile['settings']) {
  // Apply to Mission Control
  const dashboardStore = useDashboardSettings.getState();
  dashboardStore.updateWidgetVisibility(settings.missionControl.widgetVisibility);
  dashboardStore.updateWidgetOrder(settings.missionControl.widgetOrder);
  dashboardStore.updateNotificationSettings(settings.missionControl.notifications);

  // Apply to Biz Lab
  const bizLabStore = useBizLabSettings.getState();
  bizLabStore.updateSidebarState(settings.bizLab.sidebarState);
  bizLabStore.updateZenMode(settings.bizLab.zenMode);
  bizLabStore.updateAutoSave(settings.bizLab.autoSave);
  bizLabStore.updateKnowledgeGraphVisibility(settings.bizLab.knowledgeGraphVisible);

  // Apply to Products Lab
  const productsLabStore = useProductsLabSettings.getState();
  productsLabStore.updateSidebarState(settings.productsLab.sidebarState);
  productsLabStore.updateHotReload(settings.productsLab.hotReload);
  productsLabStore.updateConsole(settings.productsLab.console);
  productsLabStore.updatePreviewMode(settings.productsLab.previewMode);

  // Apply global settings
  const globalStore = useGlobalSettings.getState();
  globalStore.updateCommandPaletteScope(settings.global.commandPaletteScope);
  globalStore.updateLinkBehavior(settings.global.linkBehavior);

  // Apply Studio Tuner layout settings
  const layoutStore = useLayoutStore.getState();
  const presetForProfile = findLayoutPresetForProfile(settings.global);
  if (presetForProfile) {
    layoutStore.applyLayout(presetForProfile);
  }
}

// Helper to check if current time is in range
function isTimeInRange(current: string, start: string, end: string): boolean {
  return current >= start && current <= end;
}

// Helper to generate unique ID
function generateId(): string {
  return `profile-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
```

---

# Part II: Partner Collaboration Configuration

## 2. Collaboration Settings Store

### 2.1 Collaboration Configuration Interface

```typescript
interface CollaborationSettings {
  shared: {
    enforced: boolean; // If true, settings cannot be overridden individually
    settings: {
      experimentTemplate: string; // Default template for new experiments
      graphColorScheme: 'category-based' | 'custom';
      decisionApprovalChain: string[]; // Partner IDs required for approval
      documentLockingEnabled: boolean; // Prevent concurrent editing
    };
  };
  reviewWorkflow: {
    autoAssign: {
      bizLabStrategies: string; // Partner ID for auto-assignment
      productsLabComponents: string; // Partner ID for auto-assignment
      crossSectionDecisions: 'both-required' | 'either-approved' | 'any';
    };
    notificationRules: {
      [eventType: string]: {
        notify: string[]; // Partner IDs or 'both'
        urgent: boolean;
        method: 'in-app' | 'email' | 'both';
      };
    };
  };
  presenceSharing: {
    shareLocation: boolean; // Show which app partner is in
    shareActiveDoc: boolean; // Show specific doc being viewed
    shareEditStatus: boolean; // Show when actively typing
    hideDuringFocusMode: boolean; // Respect partner's focus time
    shareExperimentActivity: boolean; // Show experiment previews
  };
}

// Default collaboration settings
export const defaultCollaborationSettings: CollaborationSettings = {
  shared: {
    enforced: false,
    settings: {
      experimentTemplate: 'shadcn-ui-default',
      graphColorScheme: 'category-based',
      decisionApprovalChain: [], // Empty = no enforcement
      documentLockingEnabled: false,
    },
  },
  reviewWorkflow: {
    autoAssign: {
      bizLabStrategies: '', // Empty = manual assignment
      productsLabComponents: '',
      crossSectionDecisions: 'both-required',
    },
    notificationRules: {
      'strategy-approved': { notify: ['both'], urgent: true, method: 'both' },
      'component-promoted': { notify: ['both'], urgent: false, method: 'in-app' },
      'experiment-results': { notify: ['both'], urgent: true, method: 'both' },
      'build-failed': { notify: ['both'], urgent: true, method: 'both' },
      'document-updated': { notify: ['author'], urgent: false, method: 'in-app' },
      'review-requested': { notify: ['assignee'], urgent: true, method: 'both' },
    },
  },
  presenceSharing: {
    shareLocation: true,
    shareActiveDoc: true,
    shareEditStatus: true,
    hideDuringFocusMode: true,
    shareExperimentActivity: true,
  },
};
```

### 2.2 Collaboration Settings Store

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Pusher from 'pusher-js';

interface CollaborationStore {
  settings: CollaborationSettings;
  partnerPresence: {
    partnerId: string;
    currentApp: 'dashboard' | 'biz' | 'products' | null;
    activeDocument: string | null;
    isEditing: boolean;
    lastSeen: string; // ISO timestamp
  } | null;

  // Actions
  updateSharedSettings: (settings: Partial<CollaborationSettings['shared']['settings']>) => void;
  updateReviewWorkflow: (workflow: Partial<CollaborationSettings['reviewWorkflow']>) => void;
  updatePresenceSharing: (presence: Partial<CollaborationSettings['presenceSharing']>) => void;
  updateNotificationRule: (eventType: string, rule: CollaborationSettings['reviewWorkflow']['notificationRules'][string]) => void;
  syncToPartner: () => void;
  requestPartnerApproval: (settingPath: string, newValue: any) => Promise<boolean>;
}

export const useCollaborationSettings = create<CollaborationStore>()(
  persist(
    (set, get) => ({
      settings: defaultCollaborationSettings,
      partnerPresence: null,

      updateSharedSettings: (updates) => {
        set((state) => ({
          settings: {
            ...state.settings,
            shared: {
              ...state.settings.shared,
              settings: {
                ...state.settings.shared.settings,
                ...updates,
              },
            },
          },
        }));

        // Broadcast to partner via Pusher
        broadcastCollaborationChange('shared-settings', updates);
      },

      updateReviewWorkflow: (updates) => {
        set((state) => ({
          settings: {
            ...state.settings,
            reviewWorkflow: {
              ...state.settings.reviewWorkflow,
              ...updates,
            },
          },
        }));

        // Broadcast to partner
        broadcastCollaborationChange('review-workflow', updates);
      },

      updatePresenceSharing: (updates) => {
        set((state) => ({
          settings: {
            ...state.settings,
            presenceSharing: {
              ...state.settings.presenceSharing,
              ...updates,
            },
          },
        }));

        // Update Clerk Presence API settings
        updateClerkPresenceSettings(updates);
      },

      updateNotificationRule: (eventType, rule) => {
        set((state) => ({
          settings: {
            ...state.settings,
            reviewWorkflow: {
              ...state.settings.reviewWorkflow,
              notificationRules: {
                ...state.settings.reviewWorkflow.notificationRules,
                [eventType]: rule,
              },
            },
          },
        }));

        // Broadcast to partner
        broadcastCollaborationChange('notification-rule', { eventType, rule });
      },

      syncToPartner: () => {
        const currentSettings = get().settings;
        broadcastCollaborationChange('full-sync', currentSettings);
      },

      requestPartnerApproval: async (settingPath, newValue) => {
        // Send approval request via Pusher
        const approvalId = generateId();
        const approvalRequest = {
          id: approvalId,
          settingPath,
          newValue,
          requestedBy: getCurrentPartnerId(),
          requestedAt: new Date().toISOString(),
        };

        broadcastApprovalRequest(approvalRequest);

        // Wait for approval response (with timeout)
        return waitForApprovalResponse(approvalId, 60000); // 1 minute timeout
      },
    }),
    {
      name: 'vault-collaboration-settings',
      version: 1,
    }
  )
);

// Pusher broadcast helper
function broadcastCollaborationChange(type: string, data: any) {
  const pusher = getPusherInstance();
  const workspaceChannel = pusher.subscribe(`workspace-${getWorkspaceId()}`);

  workspaceChannel.trigger('collaboration-settings-changed', {
    type,
    data,
    partnerId: getCurrentPartnerId(),
    timestamp: new Date().toISOString(),
  });
}

// Approval request helper
function broadcastApprovalRequest(request: any) {
  const pusher = getPusherInstance();
  const workspaceChannel = pusher.subscribe(`workspace-${getWorkspaceId()}`);

  workspaceChannel.trigger('settings-approval-requested', request);
}

// Wait for approval response
function waitForApprovalResponse(approvalId: string, timeout: number): Promise<boolean> {
  return new Promise((resolve) => {
    const pusher = getPusherInstance();
    const workspaceChannel = pusher.subscribe(`workspace-${getWorkspaceId()}`);

    const timeoutId = setTimeout(() => {
      workspaceChannel.unbind('settings-approval-response');
      resolve(false); // Timeout = denied
    }, timeout);

    workspaceChannel.bind('settings-approval-response', (data: { approvalId: string; approved: boolean }) => {
      if (data.approvalId === approvalId) {
        clearTimeout(timeoutId);
        workspaceChannel.unbind('settings-approval-response');
        resolve(data.approved);
      }
    });
  });
}
```

---

# Part III: Cross-App Synchronization Engine

## 3. Cascade Rules & Synchronization

### 3.1 Cascade Rule Configuration

```typescript
interface CascadeRule {
  trigger: string; // Setting path that triggers cascade
  affects: {
    path: string; // Setting path to update
    transform: (triggerValue: any, currentValue: any) => any; // How to compute new value
    condition?: (triggerValue: any) => boolean; // Optional condition
  }[];
  description: string; // Human-readable explanation
}

// Cascade rules for cross-app synchronization
export const cascadeRules: CascadeRule[] = [
  {
    trigger: 'bizLab.zenMode',
    affects: [
      {
        path: 'missionControl.notifications.enabled',
        transform: (zenMode) => !zenMode, // Disable notifications when zen mode is on
      },
      {
        path: 'bizLab.sidebarState',
        transform: (zenMode) => (zenMode ? 'collapsed' : 'expanded'),
      },
      {
        path: 'bizLab.knowledgeGraphVisible',
        transform: (zenMode) => !zenMode, // Hide graph in zen mode
      },
    ],
    description: 'Zen Mode enables distraction-free writing by hiding UI elements and disabling notifications',
  },
  {
    trigger: 'global.commandPaletteScope',
    affects: [
      {
        path: 'missionControl.quickActionsScope',
        transform: (scope) => scope, // Mirror command palette scope
      },
    ],
    description: 'Command Palette scope controls whether quick actions search current app or all apps',
  },
  {
    trigger: 'productsLab.hotReload',
    affects: [
      {
        path: 'productsLab.console',
        transform: (hotReload) => (hotReload ? 'visible' : 'minimized'),
        condition: (hotReload) => hotReload, // Only cascade when enabling hot reload
      },
    ],
    description: 'Enabling Hot Reload automatically shows console for debugging',
  },
  {
    trigger: 'shared.enforced',
    affects: [
      {
        path: 'dashboard.canOverrideShared',
        transform: (enforced) => !enforced,
      },
      {
        path: 'bizLab.canOverrideShared',
        transform: (enforced) => !enforced,
      },
      {
        path: 'productsLab.canOverrideShared',
        transform: (enforced) => !enforced,
      },
    ],
    description: 'Enforcing shared settings prevents individual override across all apps',
  },
  {
    trigger: 'global.sidebarPosition',
    affects: [
      {
        path: 'bizLab.sidebarState',
        transform: (position, currentState) => (position === 'hidden' ? 'collapsed' : currentState),
      },
      {
        path: 'productsLab.sidebarState',
        transform: (position, currentState) => (position === 'hidden' ? 'collapsed' : currentState),
      },
    ],
    description: 'Global sidebar position controls app-specific sidebar visibility',
  },
];
```

### 3.2 Cascade Middleware Implementation

```typescript
import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

// Cascade middleware that applies cross-app synchronization rules
export const cascadeMiddleware = <T extends object>(
  config: StateCreator<T>,
  cascadeRules: CascadeRule[]
) => (set: any, get: any, api: any) =>
  config(
    (args: any) => {
      const prevState = get();

      // Apply the update
      set(args);

      const newState = get();

      // Detect which settings changed
      const changedPaths = detectChanges(prevState, newState);

      // Apply cascade rules for each changed setting
      const cascadeChanges: any = {};
      changedPaths.forEach((changedPath) => {
        const matchingRules = cascadeRules.filter((rule) => rule.trigger === changedPath);

        matchingRules.forEach((rule) => {
          rule.affects.forEach((affect) => {
            // Check condition if present
            if (affect.condition) {
              const triggerValue = getNestedValue(newState, changedPath);
              if (!affect.condition(triggerValue)) return;
            }

            // Compute new value
            const triggerValue = getNestedValue(newState, changedPath);
            const currentValue = getNestedValue(newState, affect.path);
            const newValue = affect.transform(triggerValue, currentValue);

            // Queue cascade update
            setNestedValue(cascadeChanges, affect.path, newValue);
          });
        });
      });

      // Apply cascade changes if any
      if (Object.keys(cascadeChanges).length > 0) {
        set(cascadeChanges);
      }

      // Save to version history
      saveVersionSnapshot(get());

      // Broadcast to partner via Pusher
      broadcastSettingChange(changedPaths, cascadeChanges);
    },
    get,
    api
  );

// Detect which paths changed between prev and new state
function detectChanges(prevState: any, newState: any, prefix = ''): string[] {
  const changes: string[] = [];

  for (const key in newState) {
    const path = prefix ? `${prefix}.${key}` : key;

    if (typeof newState[key] === 'object' && newState[key] !== null && !Array.isArray(newState[key])) {
      // Recursively check nested objects
      changes.push(...detectChanges(prevState[key] || {}, newState[key], path));
    } else if (prevState[key] !== newState[key]) {
      changes.push(path);
    }
  }

  return changes;
}

// Get nested value by dot-separated path
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

// Set nested value by dot-separated path
function setNestedValue(obj: any, path: string, value: any): void {
  const parts = path.split('.');
  const last = parts.pop()!;
  const target = parts.reduce((acc, part) => {
    if (!acc[part]) acc[part] = {};
    return acc[part];
  }, obj);
  target[last] = value;
}
```

---

# Part IV: App-Specific Settings Stores

## 4. Products Lab Settings

```typescript
interface ProductsLabSettings {
  experimentWorkbench: {
    defaultTemplate: string;
    autoSave: { enabled: boolean; interval: number };
    hotReload: boolean;
    previewMode: 'split' | 'full' | 'code-only';
    console: 'visible' | 'hidden' | 'minimized';
    syntaxHighlighting: boolean;
    lineNumbers: boolean;
    wordWrap: boolean;
  };
  componentLibrary: {
    viewMode: 'grid' | 'list' | 'compact';
    sortBy: 'name' | 'recent' | 'category';
    showPreview: boolean;
    filterByStatus: ('active' | 'archived' | 'draft')[];
  };
  sidebarState: 'collapsed' | 'expanded';
  canOverrideShared: boolean;
}

export const useProductsLabSettings = create<ProductsLabSettings>()(
  persist(
    (set) => ({
      experimentWorkbench: {
        defaultTemplate: 'shadcn-ui-default',
        autoSave: { enabled: true, interval: 30 },
        hotReload: true,
        previewMode: 'split',
        console: 'visible',
        syntaxHighlighting: true,
        lineNumbers: true,
        wordWrap: false,
      },
      componentLibrary: {
        viewMode: 'grid',
        sortBy: 'recent',
        showPreview: true,
        filterByStatus: ['active', 'draft'],
      },
      sidebarState: 'expanded',
      canOverrideShared: true,

      // Actions would be defined here
    }),
    { name: 'vault-products-lab-settings' }
  )
);
```

## 5. Biz Lab Settings

```typescript
interface BizLabSettings {
  strategicBrain: {
    knowledgeGraphVisible: boolean;
    backlinksMode: 'inline' | 'sidebar' | 'hidden';
    semanticSearchEnabled: boolean;
    autoLinkSuggestions: boolean;
    graphColorScheme: 'category-based' | 'custom';
  };
  documentReading: {
    zenMode: boolean;
    autoSave: { enabled: boolean; interval: number };
    recentDocsCount: number;
    tableOfContentsVisible: boolean;
    lineSpacing: 'compact' | 'normal' | 'relaxed';
  };
  sidebarState: 'collapsed' | 'expanded';
  canOverrideShared: boolean;
}

export const useBizLabSettings = create<BizLabSettings>()(
  persist(
    (set) => ({
      strategicBrain: {
        knowledgeGraphVisible: true,
        backlinksMode: 'sidebar',
        semanticSearchEnabled: true,
        autoLinkSuggestions: true,
        graphColorScheme: 'category-based',
      },
      documentReading: {
        zenMode: false,
        autoSave: { enabled: true, interval: 60 },
        recentDocsCount: 10,
        tableOfContentsVisible: true,
        lineSpacing: 'normal',
      },
      sidebarState: 'expanded',
      canOverrideShared: true,

      // Actions would be defined here
    }),
    { name: 'vault-biz-lab-settings' }
  )
);
```

## 6. Mission Control Dashboard Settings

```typescript
interface DashboardSettings {
  widgetConfiguration: {
    visibility: string[]; // Widget IDs
    order: string[]; // Widget IDs in display order
    columnLayout: '1-column' | '2-column' | '3-column';
  };
  notificationAchievement: {
    notifications: {
      enabled: boolean;
      exceptions: string[]; // Event types
    };
    achievementCelebrations: boolean;
    soundEffects: boolean;
    badgeAnimations: boolean;
  };
  quickActions: {
    scope: 'current-app' | 'all-apps';
    pinnedActions: string[]; // Action IDs
  };
  canOverrideShared: boolean;
}

export const useDashboardSettings = create<DashboardSettings>()(
  persist(
    (set) => ({
      widgetConfiguration: {
        visibility: ['my-focus', 'team-pulse', 'mission-status', 'review-queue'],
        order: ['my-focus', 'team-pulse', 'mission-status', 'review-queue'],
        columnLayout: '2-column',
      },
      notificationAchievement: {
        notifications: { enabled: true, exceptions: [] },
        achievementCelebrations: true,
        soundEffects: false,
        badgeAnimations: true,
      },
      quickActions: {
        scope: 'all-apps',
        pinnedActions: ['start-sprint', 'create-experiment', 'view-achievements'],
      },
      canOverrideShared: true,

      // Actions would be defined here
    }),
    { name: 'vault-dashboard-settings' }
  )
);
```

---

# Part V: Global Settings & Synchronization

## 7. Global Settings Store

```typescript
interface GlobalSettings {
  commandPaletteScope: 'current-app' | 'all-apps';
  linkBehavior: 'same-tab' | 'new-tab';
  sidebarPosition: 'left' | 'right' | 'hidden';
  navbarPosition: 'top' | 'bottom' | 'left' | 'right';
  keyboardShortcuts: {
    [action: string]: string; // Action -> keyboard combo
  };
  developerMode: {
    enabled: boolean;
    showDebugInfo: boolean;
    logLevel: 'error' | 'warn' | 'info' | 'debug';
    performanceMonitoring: boolean;
  };
}

export const useGlobalSettings = create<GlobalSettings>()(
  persist(
    (set) => ({
      commandPaletteScope: 'all-apps',
      linkBehavior: 'new-tab',
      sidebarPosition: 'left',
      navbarPosition: 'top',
      keyboardShortcuts: {
        'open-command-palette': 'Cmd+K',
        'toggle-sidebar': 'Cmd+B',
        'quick-switcher': 'Cmd+P',
        'global-search': 'Cmd+Shift+F',
      },
      developerMode: {
        enabled: false,
        showDebugInfo: false,
        logLevel: 'warn',
        performanceMonitoring: false,
      },

      // Actions would be defined here
    }),
    { name: 'vault-global-settings' }
  )
);
```

## 8. Version History & Rollback

```typescript
interface VersionHistoryEntry {
  id: string;
  timestamp: string; // ISO string
  snapshot: any; // Full settings state
  changedBy: string; // Partner ID
  changeDescription: string; // Auto-generated or manual
}

interface VersionHistoryStore {
  history: VersionHistoryEntry[];
  maxHistorySize: number;

  // Actions
  saveSnapshot: (state: any, description?: string) => void;
  rollback: (entryId: string) => any;
  clearHistory: () => void;
  exportHistory: () => string;
}

export const useVersionHistory = create<VersionHistoryStore>()(
  persist(
    (set, get) => ({
      history: [],
      maxHistorySize: 10,

      saveSnapshot: (state, description) => {
        const entry: VersionHistoryEntry = {
          id: generateId(),
          timestamp: new Date().toISOString(),
          snapshot: JSON.parse(JSON.stringify(state)), // Deep clone
          changedBy: getCurrentPartnerId(),
          changeDescription: description || 'Settings updated',
        };

        set((prev) => ({
          history: [entry, ...prev.history].slice(0, prev.maxHistorySize),
        }));
      },

      rollback: (entryId) => {
        const entry = get().history.find((e) => e.id === entryId);
        if (!entry) throw new Error('Version not found');

        // Save current state before rollback
        get().saveSnapshot(getCurrentSettingsState(), `Rollback to ${entry.timestamp}`);

        return entry.snapshot;
      },

      clearHistory: () => set({ history: [] }),

      exportHistory: () => JSON.stringify(get().history, null, 2),
    }),
    {
      name: 'vault-version-history',
      version: 1,
    }
  )
);
```

---

# Part VI: Real-Time Synchronization

## 9. Pusher WebSocket Integration

```typescript
import Pusher from 'pusher-js';

// Initialize Pusher client
export function initializePusherSync() {
  const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    authEndpoint: '/api/pusher/auth',
  });

  const workspaceId = getWorkspaceId();
  const workspaceChannel = pusher.subscribe(`workspace-${workspaceId}`);

  // Listen for partner settings changes
  workspaceChannel.bind('settings-changed', (data: {
    partnerId: string;
    settingPath: string;
    newValue: any;
    cascadeAffects: string[];
    timestamp: string;
  }) => {
    const currentPartnerId = getCurrentPartnerId();

    // Ignore own changes (already applied locally)
    if (data.partnerId === currentPartnerId) return;

    // Apply partner's setting change
    const settingsStore = getSettingsStoreByPath(data.settingPath);
    settingsStore.getState().updateSetting(data.settingPath, data.newValue);

    // Show toast notification if significant change
    if (data.cascadeAffects.length > 0) {
      showToast({
        title: 'Partner Updated Settings',
        description: `${data.settingPath} changed, affecting ${data.cascadeAffects.length} other settings.`,
        variant: 'info',
      });
    }
  });

  // Listen for collaboration settings changes
  workspaceChannel.bind('collaboration-settings-changed', (data: {
    type: string;
    data: any;
    partnerId: string;
    timestamp: string;
  }) => {
    const currentPartnerId = getCurrentPartnerId();
    if (data.partnerId === currentPartnerId) return;

    const collaborationStore = useCollaborationSettings.getState();

    switch (data.type) {
      case 'shared-settings':
        collaborationStore.updateSharedSettings(data.data);
        break;
      case 'review-workflow':
        collaborationStore.updateReviewWorkflow(data.data);
        break;
      case 'notification-rule':
        collaborationStore.updateNotificationRule(data.data.eventType, data.data.rule);
        break;
      case 'full-sync':
        // Full sync from partner
        useCollaborationSettings.setState({ settings: data.data });
        break;
    }
  });

  // Listen for profile switches
  workspaceChannel.bind('profile-switched', (data: {
    profileId: string;
    partnerId: string;
    timestamp: string;
  }) => {
    const currentPartnerId = getCurrentPartnerId();
    if (data.partnerId === currentPartnerId) return;

    showToast({
      title: 'Partner Switched Profile',
      description: `Partner activated ${data.profileId}`,
      variant: 'info',
    });
  });

  return pusher;
}

// Broadcast setting change to partner
export function broadcastSettingChange(changedPaths: string[], cascadeChanges: any) {
  const pusher = getPusherInstance();
  const workspaceChannel = pusher.subscribe(`workspace-${getWorkspaceId()}`);

  changedPaths.forEach((path) => {
    workspaceChannel.trigger('settings-changed', {
      partnerId: getCurrentPartnerId(),
      settingPath: path,
      newValue: getNestedValue(getCurrentSettingsState(), path),
      cascadeAffects: Object.keys(cascadeChanges),
      timestamp: new Date().toISOString(),
    });
  });
}
```

---

# Part VII: Export & Import

## 10. Configuration Export/Import System

```typescript
interface ExportedSettingsFormat {
  version: string; // Format version
  exportedAt: string; // ISO timestamp
  exportedBy: string; // Partner ID
  scope: 'all' | 'products' | 'biz' | 'dashboard' | 'global';
  settings: {
    workflowProfiles?: WorkflowProfile[];
    activeProfile?: string | null;
    collaboration?: CollaborationSettings;
    productsLab?: ProductsLabSettings;
    bizLab?: BizLabSettings;
    dashboard?: DashboardSettings;
    global?: GlobalSettings;
  };
}

export function exportSettings(scope: ExportedSettingsFormat['scope']): ExportedSettingsFormat {
  const allSettings = {
    workflowProfiles: useWorkflowProfiles.getState().profiles,
    activeProfile: useWorkflowProfiles.getState().activeProfile,
    collaboration: useCollaborationSettings.getState().settings,
    productsLab: useProductsLabSettings.getState(),
    bizLab: useBizLabSettings.getState(),
    dashboard: useDashboardSettings.getState(),
    global: useGlobalSettings.getState(),
  };

  const scopedSettings = scope === 'all' ? allSettings : {
    [scope === 'products' ? 'productsLab' : scope === 'biz' ? 'bizLab' : scope === 'dashboard' ? 'dashboard' : 'global']:
      allSettings[scope as keyof typeof allSettings]
  };

  return {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    exportedBy: getCurrentPartnerId(),
    scope,
    settings: scopedSettings,
  };
}

export function importSettings(
  data: ExportedSettingsFormat,
  mergeStrategy: 'replace' | 'merge'
): void {
  // Validate format version
  if (data.version !== '1.0') {
    throw new Error('Unsupported settings format version');
  }

  // Save current state to version history
  const versionHistory = useVersionHistory.getState();
  versionHistory.saveSnapshot(getCurrentSettingsState(), `Before import from ${data.exportedBy}`);

  // Apply import
  const { settings } = data;

  if (mergeStrategy === 'replace') {
    // Replace settings entirely
    if (settings.workflowProfiles) {
      useWorkflowProfiles.setState({ profiles: settings.workflowProfiles });
    }
    if (settings.collaboration) {
      useCollaborationSettings.setState({ settings: settings.collaboration });
    }
    if (settings.productsLab) {
      useProductsLabSettings.setState(settings.productsLab);
    }
    if (settings.bizLab) {
      useBizLabSettings.setState(settings.bizLab);
    }
    if (settings.dashboard) {
      useDashboardSettings.setState(settings.dashboard);
    }
    if (settings.global) {
      useGlobalSettings.setState(settings.global);
    }
  } else {
    // Merge settings (deep merge)
    if (settings.workflowProfiles) {
      const currentProfiles = useWorkflowProfiles.getState().profiles;
      useWorkflowProfiles.setState({
        profiles: mergeProfiles(currentProfiles, settings.workflowProfiles),
      });
    }
    // ... similar merge logic for other stores
  }

  showToast({
    title: 'Settings Imported',
    description: `Settings from ${data.exportedBy} applied successfully`,
    variant: 'success',
  });
}

function mergeProfiles(current: WorkflowProfile[], imported: WorkflowProfile[]): WorkflowProfile[] {
  // Merge logic: Keep existing system profiles, add/update custom profiles
  const systemProfiles = current.filter(p => p.createdBy === 'system');
  const customProfiles = imported.filter(p => p.createdBy !== 'system');
  return [...systemProfiles, ...customProfiles];
}
```

---

**Last Updated:** January 20, 2026

**See Also:**
- `collaboration-features.md` - Team Pulse, Review Queue, Achievements integration
- `dashboard-system.md` - Widget configuration and Mission Control integration
- `products-lab-system.md` - Experiment Workbench and Component Library integration
- `biz-lab-system.md` - Strategic Brain and Document Reading integration
- `global-navigation-system.md` - Command Palette, Keyboard Shortcuts integration
- `studio-tuner-system.md` - Theme and Layout Preset integration

**Related PRDs:**
- `../prds/14-app-settings-prd.md` - Complete product requirements
- `../prds/00-vault-overview-prd.md` - Vault ecosystem overview
