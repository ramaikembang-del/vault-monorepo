"use client";

import React, { useState } from "react";
import { Sparkles, Check, Plus, Trash2, Play } from "lucide-react";
import { SettingsCard } from "../components/settings-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useWorkflowProfiles } from "@/lib/store/settings-store";
import { cn } from "@/lib/utils";
import type { WorkflowProfile } from "@/lib/store/types";

export function WorkflowProfilesSection() {
  const { profiles, activeProfile, switchProfile, createProfile, deleteProfile } =
    useWorkflowProfiles();
  const [isCreating, setIsCreating] = useState(false);

  const handleActivateProfile = (profileName: string) => {
    switchProfile(profileName);
  };

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              Workflow Profiles
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Pre-configured settings that adapt multiple apps simultaneously based on
              your work mode. Switch between Focus Mode, Collaboration Mode, and more
              with a single click.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>
                Active Profile:{" "}
                <span className="font-medium text-foreground">
                  {activeProfile || "None (Default Settings)"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Profile List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Available Profiles</h3>
          <Button
            onClick={() => setIsCreating(true)}
            size="sm"
            className="gap-2"
            variant="outline"
          >
            <Plus className="w-4 h-4" />
            Create Custom Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profiles.map((profile) => {
            const isActive = activeProfile === profile.name;

            return (
              <Card
                key={profile.id}
                className={cn(
                  "p-4 transition-all cursor-pointer hover:shadow-md",
                  isActive
                    ? "border-primary bg-primary/5 shadow-md"
                    : "hover:border-primary/50"
                )}
                onClick={() => handleActivateProfile(profile.name)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{profile.name}</h4>
                      {isActive && (
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          <Check className="w-3 h-3" />
                          Active
                        </div>
                      )}
                      {profile.isDefault && (
                        <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {profile.description}
                    </p>
                  </div>

                  {!profile.isDefault && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="ml-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (
                          confirm(
                            `Are you sure you want to delete the "${profile.name}" profile?`
                          )
                        ) {
                          deleteProfile(profile.id);
                        }
                      }}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  )}
                </div>

                {/* Profile Details */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Mission Control:</span>
                    <span className="text-muted-foreground">
                      {profile.settings.missionControl.notifications.enabled
                        ? "Notifications On"
                        : "Notifications Off"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Biz Lab:</span>
                    <span className="text-muted-foreground">
                      Sidebar {profile.settings.bizLab.sidebarState}
                      {profile.settings.bizLab.zenMode && " • Zen Mode"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Products Lab:</span>
                    <span className="text-muted-foreground">
                      {profile.settings.productsLab.hotReload
                        ? "Hot Reload On"
                        : "Hot Reload Off"}
                    </span>
                  </div>
                </div>

                {!isActive && (
                  <Button
                    size="sm"
                    className="w-full mt-4 gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleActivateProfile(profile.name);
                    }}
                  >
                    <Play className="w-3 h-3" />
                    Activate Profile
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {/* How Profiles Work */}
      <SettingsCard
        title="How Workflow Profiles Work"
        description="Understanding profile behavior and customization"
        collapsible
        defaultExpanded={false}
      >
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h4 className="font-medium text-foreground mb-1">
              What happens when you activate a profile?
            </h4>
            <p>
              Activating a profile applies pre-configured settings across Mission
              Control, Biz Lab, and Products Lab simultaneously. For example, Focus Mode
              hides notifications, collapses sidebars, and minimizes distractions.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-1">
              Can I modify profile settings?
            </h4>
            <p>
              Yes! After activating a profile, you can customize individual settings in
              their respective sections (Dashboard, Products Lab, Biz Lab). These
              changes won't affect the profile template itself.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-1">
              Creating custom profiles
            </h4>
            <p>
              Click "Create Custom Profile" to save your current settings configuration
              as a new profile. This allows you to create personalized work modes
              tailored to your specific workflows.
            </p>
          </div>

          <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-xs">
              <strong className="text-foreground">Tip:</strong> Use keyboard shortcuts
              to quickly switch between profiles. Configure shortcuts in the Global
              Settings section.
            </p>
          </div>
        </div>
      </SettingsCard>

      {/* Profile Triggers (Coming Soon) */}
      <SettingsCard
        title="Automatic Profile Switching"
        description="Auto-activate profiles based on time, calendar, or context"
        badge="Coming Soon"
      >
        <div className="text-sm text-muted-foreground space-y-2">
          <p>Future features will include:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Time-based scheduling (e.g., Focus Mode from 9am-12pm daily)</li>
            <li>Calendar integration (auto-switch based on meeting type)</li>
            <li>Context detection (switch when opening specific apps)</li>
            <li>Smart suggestions (AI recommends profiles based on usage)</li>
          </ul>
        </div>
      </SettingsCard>

      {/* Create Profile Modal - Placeholder */}
      {isCreating && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Create Custom Profile</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This feature is coming soon! You'll be able to save your current settings
              configuration as a custom profile.
            </p>
            <Button onClick={() => setIsCreating(false)} className="w-full">
              Close
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
