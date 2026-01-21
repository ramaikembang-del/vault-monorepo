"use client";

import React from "react";
import { Network, BookOpen, Eye, Sparkles } from "lucide-react";
import { SettingsCard, SettingRow } from "../components/settings-card";
import { Toggle, Select, Slider, RadioGroup } from "../components/form-controls";
import { useBizLabSettings } from "@/lib/store/settings-store";

export function BizLabSettingsSection() {
  const bizLabSettings = useBizLabSettings();

  return (
    <div className="space-y-4">
      {/* Knowledge Graph */}
      <SettingsCard
        title="Knowledge Graph Visualization"
        description="Customize how your strategic knowledge graph appears"
        icon={<Network className="w-5 h-5" />}
      >
        <SettingRow
          label="Node Size"
          description="Size of document nodes in the graph"
        >
          <Select
            value={bizLabSettings.knowledgeGraph.visualization.nodeSize}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "small", label: "Small" },
              { value: "medium", label: "Medium" },
              { value: "large", label: "Large" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Link Style"
          description="Connection lines between nodes"
        >
          <Select
            value={bizLabSettings.knowledgeGraph.visualization.linkStyle}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "straight", label: "Straight" },
              { value: "curved", label: "Curved" },
              { value: "organic", label: "Organic" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Color Scheme"
          description="How nodes are colored"
        >
          <Select
            value={bizLabSettings.knowledgeGraph.visualization.colorScheme}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "category", label: "By Category" },
              { value: "status", label: "By Status" },
              { value: "priority", label: "By Priority" },
              { value: "custom", label: "Custom" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Physics Simulation"
          description="Enable dynamic node positioning"
        >
          <Toggle
            checked={bizLabSettings.knowledgeGraph.visualization.physics.enabled}
            onChange={(checked) => {
              // TODO: Implement updateSetting
            }}
          />
        </SettingRow>

        {bizLabSettings.knowledgeGraph.visualization.physics.enabled && (
          <SettingRow
            label="Physics Strength"
            description="How strongly nodes repel each other"
          >
            <Slider
              value={bizLabSettings.knowledgeGraph.visualization.physics.strength}
              onChange={(value) => {
                // TODO: Implement updateSetting
              }}
              min={0.1}
              max={1}
              step={0.1}
            />
          </SettingRow>
        )}
      </SettingsCard>

      {/* Document Reading */}
      <SettingsCard
        title="Document Reading & Workspace"
        description="Customize document reading experience and workspace layout"
        icon={<BookOpen className="w-5 h-5" />}
      >
        <SettingRow
          label="Reading Font Size"
          description="Text size for strategic documents"
        >
          <Slider
            value={bizLabSettings.documentReading.readingMode.typography.fontSize}
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
          label="Line Height"
          description="Spacing between lines for comfortable reading"
        >
          <Slider
            value={bizLabSettings.documentReading.readingMode.typography.lineHeight}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            min={1.4}
            max={2.0}
            step={0.1}
          />
        </SettingRow>

        <SettingRow
          label="Sidebar Default State"
          description="Whether sidebar is expanded or collapsed on load"
        >
          <RadioGroup
            value={bizLabSettings.documentReading.sidebarLayout.defaultState}
            onChange={(value) => {
              // TODO: Implement updateSetting
            }}
            options={[
              { value: "expanded", label: "Expanded", description: "Show sidebar by default" },
              { value: "collapsed", label: "Collapsed", description: "Hide sidebar by default" },
            ]}
          />
        </SettingRow>

        <SettingRow
          label="Auto-Scroll to Last Position"
          description="Resume reading where you left off"
        >
          <Toggle
            checked={bizLabSettings.documentReading.readingMode.behavior.autoScrollToLastPosition}
            onChange={(checked) => {
              // TODO: Implement updateSetting
            }}
          />
        </SettingRow>

        <SettingRow
          label="Show Reading Progress Bar"
          description="Display progress indicator for long documents"
        >
          <Toggle
            checked={bizLabSettings.documentReading.readingMode.behavior.showProgressBar}
            onChange={(checked) => {
              // TODO: Implement updateSetting
            }}
          />
        </SettingRow>
      </SettingsCard>

      {/* Hover Previews */}
      <SettingsCard
        title="Hover Preview Cards"
        description="Configure document previews on hover"
        icon={<Eye className="w-5 h-5" />}
      >
        <SettingRow
          label="Enable Hover Previews"
          description="Show document preview cards when hovering over links"
        >
          <Toggle
            checked={bizLabSettings.documentReading.hoverPreviews.enabled}
            onChange={(checked) => {
              // TODO: Implement updateSetting
            }}
          />
        </SettingRow>

        {bizLabSettings.documentReading.hoverPreviews.enabled && (
          <>
            <SettingRow
              label="Preview Delay"
              description="Time before preview appears"
            >
              <Slider
                value={bizLabSettings.documentReading.hoverPreviews.delayMs}
                onChange={(value) => {
                  // TODO: Implement updateSetting
                }}
                min={300}
                max={1000}
                step={100}
                unit="ms"
              />
            </SettingRow>
          </>
        )}
      </SettingsCard>

      {/* Smart Connections */}
      <SettingsCard
        title="Smart Document Connections"
        description="Auto-link related strategic documents"
        icon={<Sparkles className="w-5 h-5" />}
        badge="Coming Soon"
      >
        <div className="text-sm text-muted-foreground">
          Configure semantic similarity thresholds and auto-linking rules for discovering
          connections between strategic documents.
        </div>
      </SettingsCard>
    </div>
  );
}
