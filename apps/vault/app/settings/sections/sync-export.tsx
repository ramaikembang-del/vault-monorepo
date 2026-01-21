"use client";

import React, { useState } from "react";
import { Download, Upload, RotateCcw, Save, AlertTriangle } from "lucide-react";
import { SettingsCard, SettingRow } from "../components/settings-card";
import { Button } from "@/components/ui/button";
import { Select, RadioGroup } from "../components/form-controls";
import { useVaultSettings } from "@/lib/store/settings-store";

export function SyncExportSection() {
  const { exportSettings, importSettings, resetSettings, versionHistory, rollback } =
    useVaultSettings();
  const [exportScope, setExportScope] = useState<"all" | "products" | "biz" | "dashboard">("all");
  const [resetScope, setResetScope] = useState<"all" | "products" | "biz" | "dashboard" | "global">("all");

  const handleExport = () => {
    const data = exportSettings(exportScope);
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vault-settings-${exportScope}-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const data = JSON.parse(e.target?.result as string);
            importSettings(data, "replace");
            alert("Settings imported successfully!");
          } catch (error) {
            alert("Failed to import settings. Invalid file format.");
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handleReset = () => {
    if (
      confirm(
        `Are you sure you want to reset ${resetScope === "all" ? "all" : resetScope} settings to defaults? This cannot be undone.`
      )
    ) {
      resetSettings(resetScope);
      alert("Settings reset successfully!");
    }
  };

  return (
    <div className="space-y-4">
      {/* Export Settings */}
      <SettingsCard
        title="Export Settings"
        description="Download your settings configuration as a backup"
        icon={<Download className="w-5 h-5" />}
      >
        <SettingRow
          label="Export Scope"
          description="Choose which settings to export"
        >
          <Select
            value={exportScope}
            onChange={(value) =>
              setExportScope(value as typeof exportScope)
            }
            options={[
              { value: "all", label: "All Settings" },
              { value: "products", label: "Products Lab Only" },
              { value: "biz", label: "Biz Lab Only" },
              { value: "dashboard", label: "Dashboard Only" },
            ]}
          />
        </SettingRow>

        <div className="pt-4">
          <Button onClick={handleExport} className="gap-2">
            <Download className="w-4 h-4" />
            Export {exportScope === "all" ? "All" : exportScope} Settings
          </Button>
        </div>

        <div className="text-xs text-muted-foreground mt-4 p-3 bg-muted/30 rounded-lg">
          <p className="font-medium mb-1">What's included in the export?</p>
          <ul className="list-disc list-inside space-y-1">
            <li>All configuration preferences</li>
            <li>Workflow profiles (if "All Settings")</li>
            <li>Notification rules</li>
            <li>UI customization settings</li>
          </ul>
        </div>
      </SettingsCard>

      {/* Import Settings */}
      <SettingsCard
        title="Import Settings"
        description="Restore settings from a previously exported file"
        icon={<Upload className="w-5 h-5" />}
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-yellow-600 dark:text-yellow-500">
                Warning
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Importing will replace your current settings. A backup will be
                created automatically before import.
              </p>
            </div>
          </div>

          <Button onClick={handleImport} variant="outline" className="gap-2">
            <Upload className="w-4 h-4" />
            Choose File & Import
          </Button>
        </div>
      </SettingsCard>

      {/* Version History */}
      <SettingsCard
        title="Version History"
        description="Rollback to previous settings states"
        icon={<Save className="w-5 h-5" />}
      >
        <div className="space-y-3">
          {versionHistory.states.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No version history available yet. History is saved automatically when you
              make changes.
            </p>
          ) : (
            <div className="space-y-2">
              {versionHistory.states.slice(0, 5).map((state, index) => (
                <div
                  key={state.timestamp}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div>
                    <p className="text-sm font-medium">
                      {new Date(state.timestamp).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Triggered by: {state.triggeredBy}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => rollback(state.timestamp)}
                  >
                    Restore
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </SettingsCard>

      {/* Reset Settings */}
      <SettingsCard
        title="Reset to Defaults"
        description="Restore settings to factory defaults"
        icon={<RotateCcw className="w-5 h-5" />}
      >
        <div className="space-y-4">
          <RadioGroup
            value={resetScope}
            onChange={(value) =>
              setResetScope(value as typeof resetScope)
            }
            options={[
              { value: "all", label: "All Settings", description: "Reset everything to defaults" },
              { value: "products", label: "Products Lab", description: "Reset only Products Lab settings" },
              { value: "biz", label: "Biz Lab", description: "Reset only Biz Lab settings" },
              { value: "dashboard", label: "Dashboard", description: "Reset only Dashboard settings" },
              { value: "global", label: "Global", description: "Reset only Global settings" },
            ]}
          />

          <div className="flex items-start gap-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-destructive">
                This action cannot be undone
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                A backup will be created automatically before reset, accessible in
                Version History.
              </p>
            </div>
          </div>

          <Button onClick={handleReset} variant="destructive" className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Reset {resetScope === "all" ? "All" : resetScope} Settings
          </Button>
        </div>
      </SettingsCard>

      {/* Cloud Sync */}
      <SettingsCard
        title="Cloud Synchronization"
        description="Sync settings across devices"
        badge="Coming Soon"
      >
        <div className="text-sm text-muted-foreground">
          <p>
            Future feature: Automatically sync your settings across all your devices
            using your Clerk account.
          </p>
        </div>
      </SettingsCard>
    </div>
  );
}
