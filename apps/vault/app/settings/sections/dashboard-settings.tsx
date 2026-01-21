"use client";

import React from "react";
import { Layout, BarChart3, Bell, Zap } from "lucide-react";
import { SettingsCard, SettingRow } from "../components/settings-card";
import { Toggle, Select, Slider, Checkbox } from "../components/form-controls";
import { useDashboardSettings } from "@/lib/store/settings-store";

export function DashboardSettingsSection() {
  const dashboardSettings = useDashboardSettings();

  return (
    <div className="space-y-4">
      {/* Widget Configuration */}
      <SettingsCard
        title="Widget Configuration"
        description="Customize which widgets appear on your dashboard"
        icon={<Layout className="w-5 h-5" />}
      >
        <div className="text-sm text-muted-foreground">
          <p className="mb-4">
            Configure widget visibility, order, and layout preferences for your Mission
            Control dashboard.
          </p>
          <div className="p-4 bg-muted/30 rounded-lg border">
            <p className="font-medium mb-2">Coming Soon:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Drag-and-drop widget reordering</li>
              <li>Widget visibility toggles</li>
              <li>Custom dashboard layouts</li>
              <li>Widget size configuration</li>
            </ul>
          </div>
        </div>
      </SettingsCard>

      {/* Chart Preferences */}
      <SettingsCard
        title="Chart Visualization"
        description="Customize how data is visualized in charts and graphs"
        icon={<BarChart3 className="w-5 h-5" />}
      >
        <SettingRow
          label="Default Chart Type"
          description="Preferred visualization style for data"
        >
          <Select
            value={dashboardSettings.widgets.charts.defaultType}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "bar", label: "Bar Chart" },
              { value: "line", label: "Line Chart" },
              { value: "area", label: "Area Chart" },
              { value: "donut", label: "Donut Chart" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Color Scheme"
          description="Chart color palette"
        >
          <Select
            value={dashboardSettings.widgets.charts.colorScheme}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "vibrant", label: "Vibrant" },
              { value: "muted", label: "Muted" },
              { value: "monochrome", label: "Monochrome" },
              { value: "custom", label: "Custom" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Animations"
          description="Enable smooth transitions and animations"
        >
          <Toggle
            checked={dashboardSettings.widgets.charts.animations}
            onChange={(checked) => {
              // TODO: Implement updateSetting
            }}
          />
        </SettingRow>
      </SettingsCard>

      {/* Notification & Achievement Preferences */}
      <SettingsCard
        title="Notifications & Achievements"
        description="Control how you're notified about achievements and milestones"
        icon={<Bell className="w-5 h-5" />}
      >
        <SettingRow
          label="Achievement Display Style"
          description="How achievement notifications appear"
        >
          <Select
            value={dashboardSettings.notifications.achievements.displayStyle}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "confetti-modal", label: "Confetti + Modal" },
              { value: "toast", label: "Toast (3s)" },
              { value: "subtle-badge", label: "Badge Only" },
              { value: "disabled", label: "Disabled" },
            ]}
          />
        </SettingRow>

        <div className="border-t pt-4 mt-4">
          <p className="text-sm font-medium mb-3">Notify Me When:</p>
          <div className="space-y-2">
            <Checkbox
              checked={dashboardSettings.notifications.achievements.triggers.badgeUnlocked}
              onChange={(checked) => {
                // TODO: Implement updateSetting
              }}
              label="New badge unlocked"
            />
            <Checkbox
              checked={dashboardSettings.notifications.achievements.triggers.milestoneReached}
              onChange={(checked) => {
                // TODO: Implement updateSetting
              }}
              label="Milestone reached"
            />
            <Checkbox
              checked={dashboardSettings.notifications.achievements.triggers.customGoals}
              onChange={(checked) => {
                // TODO: Implement updateSetting
              }}
              label="Custom goals achieved"
            />
          </div>
        </div>
      </SettingsCard>

      {/* Quick Actions */}
      <SettingsCard
        title="Quick Actions"
        description="Customize pinned quick actions on your dashboard"
        icon={<Zap className="w-5 h-5" />}
      >
        <div className="text-sm text-muted-foreground">
          <p className="mb-4">
            Manage which quick actions appear on your dashboard for fast access to
            frequently-used features.
          </p>
          <div className="p-4 bg-muted/30 rounded-lg border">
            <p className="font-medium mb-2">Coming Soon:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Pin/unpin quick actions</li>
              <li>Customize action shortcuts</li>
              <li>Reorder actions by drag-and-drop</li>
              <li>Context-aware action suggestions</li>
            </ul>
          </div>
        </div>
      </SettingsCard>
    </div>
  );
}
