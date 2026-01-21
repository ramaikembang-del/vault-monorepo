"use client";

import React from "react";
import { Globe, Search, Link2, Type, Keyboard, Accessibility } from "lucide-react";
import { SettingsCard, SettingRow } from "../components/settings-card";
import {
  Toggle,
  Select,
  Slider,
  Checkbox,
  TextInput,
  RadioGroup,
} from "../components/form-controls";
import { useVaultSettings } from "@/lib/store/settings-store";

export function GlobalSettingsSection() {
  const { global, updateSetting } = useVaultSettings();

  return (
    <div className="space-y-4">
      {/* Global Search Behavior */}
      <SettingsCard
        title="Global Search Behavior"
        description="Configure how Command Palette (⌘K) searches across apps"
        icon={<Search className="w-5 h-5" />}
      >
        <SettingRow
          label="Default Search Scope"
          description="Where to search when opening Command Palette"
        >
          <Select
            value={global.search.defaultScope}
            onChange={(value) =>
              updateSetting(
                "global.search.defaultScope",
                value as "all-apps" | "current-app" | "favorites" | "recent"
              )
            }
            options={[
              { value: "all-apps", label: "All Apps" },
              { value: "current-app", label: "Current App" },
              { value: "favorites", label: "Favorites" },
              { value: "recent", label: "Recent" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Max Results"
          description="Maximum number of search results to display"
        >
          <Slider
            value={global.search.maxResults}
            onChange={(value) => updateSetting("global.search.maxResults", value)}
            min={5}
            max={20}
            step={1}
          />
        </SettingRow>

        <SettingRow
          label="Sort Results By"
          description="Default sorting method for search results"
        >
          <Select
            value={global.search.sortBy}
            onChange={(value) =>
              updateSetting(
                "global.search.sortBy",
                value as "relevance" | "recent" | "alphabetical"
              )
            }
            options={[
              { value: "relevance", label: "Relevance" },
              { value: "recent", label: "Recent" },
              { value: "alphabetical", label: "Alphabetical" },
            ]}
          />
        </SettingRow>

        <div className="border-t pt-4 mt-4">
          <p className="text-sm font-medium mb-3">Quick Filters</p>
          <div className="space-y-2">
            <Checkbox
              checked={global.search.quickFilters.recentItems}
              onChange={(checked) =>
                updateSetting("global.search.quickFilters.recentItems", checked)
              }
              label="Show recent items"
            />
            <Checkbox
              checked={global.search.quickFilters.favorites}
              onChange={(checked) =>
                updateSetting("global.search.quickFilters.favorites", checked)
              }
              label="Show favorites"
            />
            <Checkbox
              checked={global.search.quickFilters.modifiedToday}
              onChange={(checked) =>
                updateSetting("global.search.quickFilters.modifiedToday", checked)
              }
              label="Show items modified today"
            />
          </div>
        </div>
      </SettingsCard>

      {/* Link Navigation Behavior */}
      <SettingsCard
        title="Link Navigation Behavior"
        description="Control how internal and external links open throughout Vault"
        icon={<Link2 className="w-5 h-5" />}
      >
        <SettingRow
          label="Internal Links"
          description="How links between Vault sections should open"
        >
          <RadioGroup
            value={global.linkBehavior.internalLinks}
            onChange={(value) =>
              updateSetting(
                "global.linkBehavior.internalLinks",
                value as "same-tab" | "same-tab-with-back" | "new-tab" | "floating-panel"
              )
            }
            options={[
              {
                value: "same-tab",
                label: "Same Tab",
                description: "Navigate in current tab",
              },
              {
                value: "same-tab-with-back",
                label: "Same Tab with Back Button",
                description: "Navigate with browser back support",
              },
              {
                value: "new-tab",
                label: "New Tab",
                description: "Open in new browser tab",
              },
              {
                value: "floating-panel",
                label: "Floating Panel",
                description: "Preview in overlay panel",
              },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="External Links"
          description="How external URLs should open"
        >
          <Select
            value={global.linkBehavior.externalLinks}
            onChange={(value) =>
              updateSetting(
                "global.linkBehavior.externalLinks",
                value as "new-tab" | "same-tab"
              )
            }
            options={[
              { value: "new-tab", label: "New Tab" },
              { value: "same-tab", label: "Same Tab" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Preserve Scroll Position"
          description="Remember scroll position when navigating back"
        >
          <Toggle
            checked={global.linkBehavior.preserveScrollPosition}
            onChange={(checked) =>
              updateSetting("global.linkBehavior.preserveScrollPosition", checked)
            }
          />
        </SettingRow>
      </SettingsCard>

      {/* Global Font Size Cascade */}
      <SettingsCard
        title="Global Font Size Cascade"
        description="Master font size that affects all apps (with app-specific overrides)"
        icon={<Type className="w-5 h-5" />}
      >
        <SettingRow
          label="Enable Global Font Size"
          description="Use a master font size across all Vault apps"
        >
          <Toggle
            checked={global.globalFontSizeCascade.enabled}
            onChange={(checked) =>
              updateSetting("global.globalFontSizeCascade.enabled", checked)
            }
          />
        </SettingRow>

        {global.globalFontSizeCascade.enabled && (
          <>
            <SettingRow
              label="Master Font Size"
              description="Base font size that cascades to all apps"
            >
              <Slider
                value={global.globalFontSizeCascade.masterFontSize}
                onChange={(value) =>
                  updateSetting("global.globalFontSizeCascade.masterFontSize", value)
                }
                min={12}
                max={20}
                step={1}
                unit="px"
              />
            </SettingRow>

            <SettingRow
              label="Allow App Overrides"
              description="Let individual apps customize font size independently"
            >
              <Toggle
                checked={global.globalFontSizeCascade.allowAppOverrides}
                onChange={(checked) =>
                  updateSetting(
                    "global.globalFontSizeCascade.allowAppOverrides",
                    checked
                  )
                }
              />
            </SettingRow>
          </>
        )}
      </SettingsCard>

      {/* Keyboard Shortcuts */}
      <SettingsCard
        title="Keyboard Shortcuts"
        description="Customize global keyboard shortcuts"
        icon={<Keyboard className="w-5 h-5" />}
        badge="Coming Soon"
      >
        <SettingRow
          label="Command Palette"
          description="Open global command palette"
        >
          <TextInput
            value={global.keyboardShortcuts.commandPalette}
            onChange={(value) =>
              updateSetting("global.keyboardShortcuts.commandPalette", value)
            }
            disabled
          />
        </SettingRow>

        <SettingRow
          label="Quick Capture"
          description="Create a new quick capture note"
        >
          <TextInput
            value={global.keyboardShortcuts.quickCapture}
            onChange={(value) =>
              updateSetting("global.keyboardShortcuts.quickCapture", value)
            }
            disabled
          />
        </SettingRow>

        <SettingRow label="Focus Mode" description="Toggle focus mode">
          <TextInput
            value={global.keyboardShortcuts.focusMode}
            onChange={(value) =>
              updateSetting("global.keyboardShortcuts.focusMode", value)
            }
            disabled
          />
        </SettingRow>

        <SettingRow label="Global Search" description="Search across all apps">
          <TextInput
            value={global.keyboardShortcuts.globalSearch}
            onChange={(value) =>
              updateSetting("global.keyboardShortcuts.globalSearch", value)
            }
            disabled
          />
        </SettingRow>

        <div className="text-xs text-muted-foreground italic mt-4">
          Note: Keyboard shortcut customization coming in a future update
        </div>
      </SettingsCard>

      {/* Accessibility */}
      <SettingsCard
        title="Accessibility"
        description="Enhance accessibility and adapt to user preferences"
        icon={<Accessibility className="w-5 h-5" />}
      >
        <SettingRow
          label="Reduced Motion"
          description="Minimize animations and transitions"
        >
          <Toggle
            checked={global.accessibility.reducedMotion}
            onChange={(checked) =>
              updateSetting("global.accessibility.reducedMotion", checked)
            }
          />
        </SettingRow>

        <SettingRow
          label="High Contrast"
          description="Increase contrast for better visibility"
        >
          <Toggle
            checked={global.accessibility.highContrast}
            onChange={(checked) =>
              updateSetting("global.accessibility.highContrast", checked)
            }
          />
        </SettingRow>

        <SettingRow
          label="Screen Reader Optimizations"
          description="Improve experience for screen reader users"
        >
          <Toggle
            checked={global.accessibility.screenReaderOptimizations}
            onChange={(checked) =>
              updateSetting(
                "global.accessibility.screenReaderOptimizations",
                checked
              )
            }
          />
        </SettingRow>

        <SettingRow
          label="Enhanced Keyboard Navigation"
          description="Add additional keyboard shortcuts and focus indicators"
        >
          <Toggle
            checked={global.accessibility.keyboardNavigationEnhanced}
            onChange={(checked) =>
              updateSetting(
                "global.accessibility.keyboardNavigationEnhanced",
                checked
              )
            }
          />
        </SettingRow>
      </SettingsCard>
    </div>
  );
}
