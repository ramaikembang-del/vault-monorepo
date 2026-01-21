/**
 * Vault Settings Hub - Zustand Store
 *
 * Centralized state management for all Vault settings with:
 * - LocalStorage persistence
 * - Version history tracking
 * - Workflow profile management
 * - Export/Import functionality
 * - Cross-app synchronization support
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultVaultSettings } from "./defaults";
import type {
  VaultSettingsStore,
  VaultSettings,
  WorkflowProfile,
  ExportedSettingsFormat,
} from "./types";

/**
 * Helper: Deep merge two objects
 */
function deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const output = { ...target };
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      output[key] = deepMerge(target[key], source[key]);
    } else {
      output[key] = source[key] as T[Extract<keyof T, string>];
    }
  }
  return output;
}

/**
 * Helper: Set nested value using path string
 * Example: setNestedValue(obj, "productsLab.experimentWorkbench.autoSave.enabled", true)
 */
function setNestedValue(obj: any, path: string, value: any): any {
  const keys = path.split(".");
  const result = { ...obj };
  let current = result;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    current[key] = { ...current[key] };
    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
  return result;
}

/**
 * Helper: Get current partner ID (placeholder - integrate with Clerk)
 */
function getCurrentPartnerId(): string {
  // TODO: Integrate with Clerk to get actual user ID
  return "current-user";
}

/**
 * Main Vault Settings Store
 */
export const useVaultSettings = create<VaultSettingsStore>()(
  persist(
    (set, get) => ({
      // ========================================================================
      // Initial State (from defaults)
      // ========================================================================
      ...defaultVaultSettings,

      // ========================================================================
      // Profile Management
      // ========================================================================

      /**
       * Switch to a different workflow profile
       * Applies profile settings across all apps
       */
      switchProfile: (profileName: string) => {
        const profile = get().workflowProfiles.find((p) => p.name === profileName);
        if (!profile) {
          console.warn(`Profile "${profileName}" not found`);
          return;
        }

        // Save current state to version history
        get().saveSnapshot("profile-switch");

        // Apply profile settings
        set((state) => ({
          activeProfile: profileName,
          // Dashboard settings from profile
          dashboard: {
            ...state.dashboard,
            widgets: {
              ...state.dashboard.widgets,
              active: state.dashboard.widgets.active.filter((w) =>
                profile.settings.missionControl.widgetVisibility.includes(w.id)
              ),
            },
            notifications: {
              ...state.dashboard.notifications,
              achievements: {
                ...state.dashboard.notifications.achievements,
                triggers: {
                  ...state.dashboard.notifications.achievements.triggers,
                  // Disable notifications in focus mode
                  ...(profileName === "Focus Mode" && {
                    badgeUnlocked: false,
                    milestoneReached: false,
                  }),
                },
              },
            },
          },
          // Biz Lab settings from profile
          bizLab: {
            ...state.bizLab,
            documentReading: {
              ...state.bizLab.documentReading,
              sidebarLayout: {
                ...state.bizLab.documentReading.sidebarLayout,
                defaultState: profile.settings.bizLab.sidebarState,
              },
            },
          },
          // Products Lab settings from profile
          productsLab: {
            ...state.productsLab,
            experimentWorkbench: {
              ...state.productsLab.experimentWorkbench,
              hotReload: {
                ...state.productsLab.experimentWorkbench.hotReload,
                enabled: profile.settings.productsLab.hotReload,
              },
              workbenchLayout: {
                ...state.productsLab.experimentWorkbench.workbenchLayout,
                consoleVisibility: profile.settings.productsLab.console === "visible"
                  ? "always"
                  : profile.settings.productsLab.console === "hidden"
                  ? "hidden"
                  : "auto",
              },
            },
          },
          // Global settings from profile
          global: {
            ...state.global,
            search: {
              ...state.global.search,
              defaultScope: profile.settings.global.commandPaletteScope,
            },
            linkBehavior: {
              ...state.global.linkBehavior,
              internalLinks: profile.settings.global.linkBehavior === "same-tab"
                ? "same-tab"
                : "new-tab",
            },
          },
        }));

        console.log(`✓ Switched to profile: ${profileName}`);
      },

      /**
       * Create a new custom workflow profile
       */
      createProfile: (profile: WorkflowProfile) => {
        set((state) => ({
          workflowProfiles: [...state.workflowProfiles, profile],
        }));
        console.log(`✓ Created profile: ${profile.name}`);
      },

      /**
       * Delete a workflow profile
       */
      deleteProfile: (profileId: string) => {
        set((state) => ({
          workflowProfiles: state.workflowProfiles.filter((p) => p.id !== profileId),
          activeProfile: state.activeProfile === profileId ? null : state.activeProfile,
        }));
        console.log(`✓ Deleted profile: ${profileId}`);
      },

      // ========================================================================
      // Setting Updates
      // ========================================================================

      /**
       * Update a specific setting using dot notation path
       * Example: updateSetting("productsLab.experimentWorkbench.autoSave.enabled", true)
       */
      updateSetting: (path: string, value: any) => {
        set((state) => {
          const newState = setNestedValue(state, path, value);
          return newState;
        });
        console.log(`✓ Updated setting: ${path} = ${JSON.stringify(value)}`);
      },

      /**
       * Reset settings to defaults
       */
      resetSettings: (scope: "products" | "biz" | "dashboard" | "global" | "all") => {
        // Save current state before reset
        get().saveSnapshot("user");

        if (scope === "all") {
          set(defaultVaultSettings);
          console.log("✓ Reset all settings to defaults");
        } else if (scope === "products") {
          set((state) => ({
            productsLab: defaultVaultSettings.productsLab,
          }));
          console.log("✓ Reset Products Lab settings");
        } else if (scope === "biz") {
          set((state) => ({
            bizLab: defaultVaultSettings.bizLab,
          }));
          console.log("✓ Reset Biz Lab settings");
        } else if (scope === "dashboard") {
          set((state) => ({
            dashboard: defaultVaultSettings.dashboard,
          }));
          console.log("✓ Reset Dashboard settings");
        } else if (scope === "global") {
          set((state) => ({
            global: defaultVaultSettings.global,
          }));
          console.log("✓ Reset Global settings");
        }
      },

      // ========================================================================
      // Export/Import
      // ========================================================================

      /**
       * Export settings to JSON format
       */
      exportSettings: (scope: "all" | "products" | "biz" | "dashboard") => {
        const state = get();
        let settings: Partial<VaultSettings>;

        if (scope === "all") {
          // Exclude version history from export
          const { versionHistory, ...exportableSettings } = state;
          settings = exportableSettings;
        } else if (scope === "products") {
          settings = { productsLab: state.productsLab };
        } else if (scope === "biz") {
          settings = { bizLab: state.bizLab };
        } else {
          settings = { dashboard: state.dashboard };
        }

        const exportData: ExportedSettingsFormat = {
          version: "1.0",
          exportedAt: new Date().toISOString(),
          exportedBy: getCurrentPartnerId(),
          settings: settings as VaultSettings,
        };

        console.log(`✓ Exported ${scope} settings`);
        return exportData;
      },

      /**
       * Import settings from exported JSON
       */
      importSettings: (data: ExportedSettingsFormat, mergeStrategy: "replace" | "merge") => {
        // Save current state before import
        get().saveSnapshot("import");

        if (mergeStrategy === "replace") {
          set({
            ...data.settings,
            // Preserve version history
            versionHistory: get().versionHistory,
          });
          console.log("✓ Imported settings (replace strategy)");
        } else {
          set((state) => {
            const merged = deepMerge(state, data.settings);
            return {
              ...merged,
              // Preserve version history
              versionHistory: state.versionHistory,
            };
          });
          console.log("✓ Imported settings (merge strategy)");
        }
      },

      // ========================================================================
      // Version History
      // ========================================================================

      /**
       * Save current state to version history
       */
      saveSnapshot: (triggeredBy: "user" | "import" | "profile-switch") => {
        set((state) => {
          const { versionHistory, ...snapshot } = state;
          const newState = {
            timestamp: new Date().toISOString(),
            triggeredBy,
            snapshot,
          };

          // Keep only last N states
          const updatedStates = [newState, ...versionHistory.states].slice(
            0,
            versionHistory.limit
          );

          return {
            versionHistory: {
              ...versionHistory,
              states: updatedStates,
            },
          };
        });
      },

      /**
       * Rollback to a previous state
       */
      rollback: (timestamp: string) => {
        const state = get();
        const snapshot = state.versionHistory.states.find((s) => s.timestamp === timestamp);

        if (!snapshot) {
          console.warn(`Snapshot with timestamp ${timestamp} not found`);
          return;
        }

        // Save current state before rollback
        get().saveSnapshot("user");

        // Restore snapshot
        set({
          ...snapshot.snapshot,
          // Preserve version history
          versionHistory: state.versionHistory,
        });

        console.log(`✓ Rolled back to snapshot: ${timestamp}`);
      },
    }),
    {
      name: "vault-settings-hub",
      // Only persist to localStorage (version history excluded by default in export)
      partialize: (state) => {
        // Exclude large or sensitive data from persistence if needed
        return state;
      },
    }
  )
);

/**
 * Hook to get specific setting sections
 */
export const useProductsLabSettings = () =>
  useVaultSettings((state) => state.productsLab);

export const useBizLabSettings = () => useVaultSettings((state) => state.bizLab);

export const useDashboardSettings = () =>
  useVaultSettings((state) => state.dashboard);

export const useGlobalSettings = () => useVaultSettings((state) => state.global);

export const useWorkflowProfiles = () =>
  useVaultSettings((state) => ({
    profiles: state.workflowProfiles,
    activeProfile: state.activeProfile,
    switchProfile: state.switchProfile,
    createProfile: state.createProfile,
    deleteProfile: state.deleteProfile,
  }));
