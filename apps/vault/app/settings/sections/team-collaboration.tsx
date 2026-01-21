"use client";

import React from "react";
import { Users, Globe } from "lucide-react";
import { SettingsCard } from "../components/settings-card";
import { GlobalSettingsSection } from "./global-settings";

export function TeamCollaborationSection() {
  return (
    <div className="space-y-4">
      {/* Team Collaboration Placeholder */}
      <SettingsCard
        title="Team Collaboration & Shared Configuration"
        description="Manage partner coordination, shared settings, and review workflows"
        icon={<Users className="w-5 h-5" />}
        badge="Coming Soon"
      >
        <div className="text-sm text-muted-foreground space-y-3">
          <p>
            Configure how partners coordinate work, share settings, and manage approval
            workflows across the Vault.
          </p>
          <div className="p-4 bg-muted/30 rounded-lg border">
            <p className="font-medium mb-2">Planned Features:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Shared vs. personal setting overrides</li>
              <li>Partner notification routing rules</li>
              <li>Review workflow configuration</li>
              <li>Presence sharing settings</li>
              <li>Collaborative configuration management</li>
            </ul>
          </div>
        </div>
      </SettingsCard>

      {/* Global Settings */}
      <div className="border-t pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5" />
          <h3 className="text-lg font-semibold">Global Cross-App Preferences</h3>
        </div>
        <GlobalSettingsSection />
      </div>
    </div>
  );
}
