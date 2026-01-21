"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings2,
  Palette,
  Layout,
  Bell,
  Zap,
  Users,
  Globe,
  Download,
  Sparkles,
  FileText,
  Boxes,
  Network,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Import settings sections (to be created)
import { WorkflowProfilesSection } from "./sections/workflow-profiles";
import { GlobalSettingsSection } from "./sections/global-settings";
import { DashboardSettingsSection } from "./sections/dashboard-settings";
import { ProductsLabSettingsSection } from "./sections/products-lab-settings";
import { BizLabSettingsSection } from "./sections/biz-lab-settings";
import { TeamCollaborationSection } from "./sections/team-collaboration";
import { SyncExportSection } from "./sections/sync-export";

type SettingsTab =
  | "unified"
  | "products"
  | "biz"
  | "dashboard"
  | "team"
  | "sync";

interface Tab {
  id: SettingsTab;
  label: string;
  icon: typeof Settings2;
  description: string;
}

const TABS: Tab[] = [
  {
    id: "unified",
    label: "Unified Settings",
    icon: Sparkles,
    description: "Workflow profiles, notifications, and cross-app settings",
  },
  {
    id: "products",
    label: "Products Lab",
    icon: Boxes,
    description: "Experiment workbench and component library preferences",
  },
  {
    id: "biz",
    label: "Biz Lab",
    icon: Network,
    description: "Knowledge graph and document reading settings",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Layout,
    description: "Widget configuration and quick actions",
  },
  {
    id: "team",
    label: "Team & Global",
    icon: Users,
    description: "Collaboration, shared config, and global preferences",
  },
  {
    id: "sync",
    label: "Sync & Export",
    icon: Download,
    description: "Configuration backup, import, export, and reset",
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("unified");
  const [searchQuery, setSearchQuery] = useState("");

  const activeTabInfo = TABS.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-3">
                <Settings2 className="w-6 h-6" />
                Vault Settings Hub
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Configure your entire Vault experience across all apps
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search settings... (⌘K)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border bg-background/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar Navigation */}
          <div className="col-span-3">
            <Card className="p-2 sticky top-24">
              <nav className="space-y-1">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "w-full flex items-start gap-3 p-3 rounded-lg transition-all text-left group",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5 mt-0.5 transition-transform group-hover:scale-110",
                          isActive && "text-primary"
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <div
                          className={cn(
                            "text-sm font-medium",
                            isActive && "text-primary"
                          )}
                        >
                          {tab.label}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                          {tab.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="col-span-9">
            {/* Active Tab Header */}
            {activeTabInfo && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  {React.createElement(activeTabInfo.icon, {
                    className: "w-5 h-5",
                  })}
                  {activeTabInfo.label}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {activeTabInfo.description}
                </p>
              </div>
            )}

            {/* Tab Content with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "unified" && <WorkflowProfilesSection />}
                {activeTab === "products" && <ProductsLabSettingsSection />}
                {activeTab === "biz" && <BizLabSettingsSection />}
                {activeTab === "dashboard" && <DashboardSettingsSection />}
                {activeTab === "team" && <TeamCollaborationSection />}
                {activeTab === "sync" && <SyncExportSection />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
