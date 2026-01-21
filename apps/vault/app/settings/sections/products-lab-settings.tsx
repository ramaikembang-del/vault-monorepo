"use client";

import React from "react";
import { Boxes, Beaker, FileCode, Palette } from "lucide-react";
import { SettingsCard, SettingRow } from "../components/settings-card";
import { Toggle, Select, Slider } from "../components/form-controls";
import { useProductsLabSettings } from "@/lib/store/settings-store";

export function ProductsLabSettingsSection() {
  const productsLabSettings = useProductsLabSettings();

  return (
    <div className="space-y-4">
      {/* Experiment Workbench */}
      <SettingsCard
        title="Experiment Workbench Preferences"
        description="Configure experiment creation and workbench layout"
        icon={<Beaker className="w-5 h-5" />}
      >
        <SettingRow
          label="Default Framework"
          description="Pre-selected framework for new experiments"
        >
          <Select
            value={productsLabSettings.experimentWorkbench.defaultTemplate.framework}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "shadcn", label: "Shadcn UI" },
              { value: "tailwind", label: "Tailwind CSS" },
              { value: "framer", label: "Framer Motion" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Auto-Save Interval"
          description="How often to automatically save experiments"
        >
          <Select
            value={productsLabSettings.experimentWorkbench.autoSave.intervalSeconds.toString()}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "30", label: "30 seconds" },
              { value: "60", label: "1 minute" },
              { value: "120", label: "2 minutes" },
              { value: "300", label: "5 minutes" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Hot Reload"
          description="Live preview updates on save"
        >
          <Toggle
            checked={productsLabSettings.experimentWorkbench.hotReload.enabled}
            onChange={(checked) => {
              // TODO: Implement updateSetting
            }}
          />
        </SettingRow>

        <SettingRow
          label="Performance Mode"
          description="Rendering fidelity for faster iteration"
        >
          <Select
            value={productsLabSettings.experimentWorkbench.performanceMode}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "full", label: "Full Quality" },
              { value: "optimized", label: "Optimized" },
              { value: "minimal", label: "Minimal" },
            ]}
          />
        </SettingRow>
      </SettingsCard>

      {/* Component Library */}
      <SettingsCard
        title="Component Library & Documentation"
        description="Customize component preview and documentation display"
        icon={<Boxes className="w-5 h-5" />}
      >
        <SettingRow
          label="Documentation Font Size"
          description="Text size for component documentation"
        >
          <Slider
            value={productsLabSettings.componentLibrary.documentation.fontSize}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            min={12}
            max={20}
            step={1}
            unit="px"
          />
        </SettingRow>

        <SettingRow
          label="Syntax Theme"
          description="Code syntax highlighting theme"
        >
          <Select
            value={productsLabSettings.componentLibrary.documentation.syntaxTheme}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "github-light", label: "GitHub Light" },
              { value: "github-dark", label: "GitHub Dark" },
              { value: "dracula", label: "Dracula" },
              { value: "nord", label: "Nord" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Component Search Scope"
          description="Where to search for components"
        >
          <Select
            value={productsLabSettings.componentLibrary.componentSearch.scope}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "all", label: "All Components" },
              { value: "local", label: "Local Only" },
              { value: "shared-library", label: "Shared Library" },
            ]}
          />
        </SettingRow>
      </SettingsCard>

      {/* Design Tokens */}
      <SettingsCard
        title="Design Token Visualizer"
        description="Customize how design tokens are displayed"
        icon={<Palette className="w-5 h-5" />}
        badge="Coming Soon"
      >
        <div className="text-sm text-muted-foreground">
          Configure default views for colors, typography, spacing, and other design
          tokens in the component library.
        </div>
      </SettingsCard>
    </div>
  );
}
