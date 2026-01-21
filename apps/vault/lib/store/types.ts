/**
 * Vault Settings Hub - Type Definitions
 *
 * Comprehensive type definitions for the unified settings system
 * covering all apps: Mission Control, Biz Lab, and Products Lab
 */

// ============================================================================
// Part II: Cross-App Unified Settings
// ============================================================================

/**
 * Workflow Profile - Pre-configured settings for different work modes
 * Section 3 in PRD
 */
export interface WorkflowProfile {
  id: string;
  name: "Focus Mode" | "Collaboration Mode" | "Review Mode" | "Strategy Planning Mode" | "Deep Work Mode" | string;
  description: string;
  isDefault?: boolean;
  settings: {
    missionControl: {
      widgetVisibility: string[];
      notifications: {
        enabled: boolean;
        exceptions: string[];
      };
    };
    bizLab: {
      sidebarState: "expanded" | "collapsed";
      zenMode: boolean;
      autoSave: { interval: number };
    };
    productsLab: {
      sidebarState: "expanded" | "collapsed";
      hotReload: boolean;
      console: "visible" | "hidden" | "auto";
    };
    global: {
      commandPaletteScope: "all-apps" | "current-app";
      linkBehavior: "same-tab" | "new-tab";
    };
  };
  triggers?: {
    calendar?: string[];
    schedule?: { daily?: string };
    manual: boolean;
  };
}

/**
 * Partner Collaboration Settings
 * Section 4 in PRD
 */
export interface CollaborationSettings {
  shared: {
    enforced: boolean;
    settings: {
      experimentTemplate?: string;
      graphColorScheme?: "category" | "status" | "priority" | "custom";
      decisionApprovalChain?: string[];
    };
  };
  reviewWorkflow: {
    autoAssign: {
      bizLabStrategies: string;
      productsLabComponents: string;
      crossSectionDecisions: "both-required" | "either";
    };
    notificationRules: {
      [eventType: string]: {
        notify: string[];
        urgent: boolean;
      };
    };
  };
  presenceSharing: {
    shareLocation: boolean;
    shareActiveDoc: boolean;
    shareEditStatus: boolean;
    hideDuringFocusMode: boolean;
  };
}

/**
 * Notification Intelligence System
 * Section 6 in PRD
 */
export interface NotificationIntelligence {
  urgencyRules: {
    critical: string[];
    important: string[];
    informational: string[];
  };
  deliveryRules: {
    immediate: string[];
    batched: string[];
    deferred: string[];
  };
  doNotDisturb: {
    enabled: boolean;
    schedule: {
      weekdays?: string;
      weekends?: "all-day" | string;
    };
    exceptions: string[];
    respectPartnerFocus: boolean;
  };
  partnerRouting: {
    enabled: boolean;
    fallbackRules: {
      [key: string]: string;
    };
  };
}

// ============================================================================
// Part III.A: Products Lab Settings
// ============================================================================

/**
 * Experiment Workbench Preferences
 * Section 7 in PRD
 */
export interface ExperimentWorkbenchSettings {
  defaultTemplate: {
    framework: "tailwind" | "shadcn" | "framer";
    includeAnimations: boolean;
    includeResponsive: boolean;
    defaultLayout: "page" | "component";
  };
  autoSave: {
    enabled: boolean;
    intervalSeconds: 30 | 60 | 120 | 300;
    onBlur: boolean;
    onNavigate: boolean;
    showIndicator: boolean;
    versionHistoryLimit: number;
  };
  workbenchLayout: {
    codeEditorWidthPercent: number;
    previewPosition: "right" | "bottom" | "floating";
    consoleVisibility: "always" | "auto" | "hidden";
    showFileTree: boolean;
  };
  hotReload: {
    enabled: boolean;
    showGridOverlay: boolean;
    showBreakpointIndicator: boolean;
    autoOpenNewTab: boolean;
  };
  performanceMode: "full" | "optimized" | "minimal";
}

/**
 * Component Library & Documentation Preferences
 * Section 8 in PRD
 */
export interface ComponentLibrarySettings {
  livePreview: {
    hotReload: boolean;
    showGridOverlay: boolean;
    responsiveViewports: boolean;
    autoOpenNewTab: boolean;
  };
  tokenVisualizer: {
    defaultView: "colors" | "typography" | "spacing" | "all";
    expandCategories: boolean;
    showUsageExamples: boolean;
  };
  documentation: {
    fontSize: number;
    syntaxTheme: "github-light" | "github-dark" | "dracula" | "nord";
    collapsibleSectionsDefault: "expanded" | "collapsed";
    showTableOfContents: boolean;
  };
  componentSearch: {
    scope: "local" | "shared-library" | "all";
    includeArchived: boolean;
  };
  exportFormat: {
    default: "react" | "vue" | "html-css" | "tailwind";
    includeComments: boolean;
  };
}

// ============================================================================
// Part III.B: Biz Lab Settings
// ============================================================================

/**
 * Knowledge Graph Preferences
 * Section 9 in PRD
 */
export interface KnowledgeGraphSettings {
  visualization: {
    nodeSize: "small" | "medium" | "large";
    linkStyle: "straight" | "curved" | "organic";
    colorScheme: "category" | "status" | "priority" | "custom";
    physics: {
      enabled: boolean;
      strength: number;
      repulsionDistance: number;
    };
  };
  autoOpenBehavior: {
    onClick: "floating-panel" | "sidebar" | "new-page" | "quick-preview";
    previewDelay: number;
    keepGraphVisible: boolean;
  };
  smartConnections: {
    semanticSimilarityThreshold: number;
    autoLinkNewDocs: boolean;
    showSuggestions: boolean;
  };
  filterPresets: Array<{
    name: string;
    filters: {
      categories: string[];
      dateRange?: { start: string; end: string };
      tags?: string[];
    };
  }>;
  minimap: {
    enabled: boolean;
    position: "top-right" | "bottom-right" | "bottom-left";
    showClusters: boolean;
  };
}

/**
 * Document Reading & Workspace Preferences
 * Section 10 in PRD
 */
export interface DocumentReadingSettings {
  hoverPreviews: {
    enabled: boolean;
    delayMs: number;
    showMetadata: {
      title: boolean;
      readTime: boolean;
      keyTakeaways: boolean;
      lastModified: boolean;
    };
  };
  readingMode: {
    typography: {
      fontSize: number;
      lineHeight: number;
      columnWidth: number;
    };
    behavior: {
      autoScrollToLastPosition: boolean;
      highlightUnreadSections: boolean;
      showProgressBar: boolean;
      estimateTimeRemaining: boolean;
    };
  };
  sidebarLayout: {
    defaultState: "expanded" | "collapsed";
    width: number;
    autoCollapse: {
      onMobile: boolean;
      onNarrowViewport: boolean;
      viewportThreshold: number;
    };
    favorites: {
      enabled: boolean;
      showIcons: boolean;
      showLabels: boolean;
    };
  };
  quickCapture: {
    autoTag: boolean;
    defaultLocation: string;
    notifyOnSave: boolean;
  };
}

// ============================================================================
// Part III.C: Mission Control Dashboard Settings
// ============================================================================

/**
 * Dashboard Widget Configuration
 * Section 11 in PRD
 */
export interface DashboardSettings {
  widgets: {
    active: Array<{
      id: string;
      order: number;
      size: "small" | "medium" | "large" | "full-width";
      settings?: {
        refreshInterval?: number;
        dataRange?: "7d" | "30d" | "90d" | "all-time";
        displayDensity?: "compact" | "comfortable" | "spacious";
      };
    }>;
    available: string[];
  };
  charts: {
    defaultType: "bar" | "line" | "area" | "donut";
    colorScheme: "vibrant" | "muted" | "monochrome" | "custom";
    animations: boolean;
    showLegend: "always" | "on-hover" | "never";
    showValues: "always" | "on-hover" | "never";
  };
  layout: {
    gridColumns: number;
    autoResize: boolean;
    presets: Array<{
      name: string;
      widgetConfiguration: DashboardSettings["widgets"]["active"];
    }>;
  };
}

/**
 * Notification & Achievement Preferences
 * Section 12 in PRD
 */
export interface NotificationAchievementSettings {
  achievements: {
    triggers: {
      badgeUnlocked: boolean;
      milestoneReached: boolean;
      dailySummary: boolean;
      weeklyDigest: boolean;
      customGoals: boolean;
    };
    displayStyle: "toast" | "confetti-modal" | "subtle-badge" | "disabled";
    celebrationMode: "full" | "minimal" | "silent";
  };
  documentUpdates: {
    smartLinkedDocs: boolean;
    anyBizLabDoc: boolean;
    experimentsPromoted: boolean;
    crossSectionChanges: boolean;
  };
  batching: {
    enabled: boolean;
    batchInterval: number;
    batchableEvents: string[];
    alwaysImmediate: string[];
  };
}

/**
 * Quick Actions & Default View
 * Section 13 in PRD
 */
export interface QuickActionsSettings {
  pinnedActions: Array<{
    id: string;
    label: string;
    icon: string;
    shortcut?: string;
    context?: "products" | "biz" | "dashboard" | "global";
  }>;
  defaultDashboardTab: "overview" | "sprint-progress" | "achievements" | "last-visited";
  commandPalette: {
    defaultScope: "all-apps" | "current-app" | "favorites" | "recent";
    maxResults: number;
    showRecentSearches: boolean;
  };
  contextAwareActions: {
    enabled: boolean;
    showProfileSpecificActions: boolean;
  };
}

// ============================================================================
// Part IV: Team & Global Settings
// ============================================================================

/**
 * Team Collaboration & Shared Configuration
 * Section 14 in PRD
 */
export interface TeamCollaborationSettings {
  sharedDefaults: {
    enforced: boolean;
    settings: {
      productsLab?: {
        experimentTemplate: string;
        autoSaveInterval: number;
      };
      bizLab?: {
        graphColorScheme: "category" | "status" | "custom";
        documentFontSize: number;
      };
      dashboard?: {
        widgetLayout: "standard" | "executive" | "custom";
        allowPersonalization: boolean;
      };
    };
  };
  notificationRules: {
    [partnerId: string]: {
      reviewRequests: boolean;
      documentApprovals: boolean;
      experimentCreation: boolean;
      buildFailures: boolean;
      strategicDecisions: boolean;
      criticalAlerts: boolean;
    };
  };
  reviewWorkflow: {
    approvalChains: Array<{
      category: "biz-strategy" | "product-component" | "cross-section";
      requiredApprovers: string[];
      autoAssign: string;
    }>;
    decisionGovernance: {
      crossSectionDecisionsRequireBothApprovals: boolean;
      autoNotifyStakeholders: boolean;
    };
  };
  presenceSettings: {
    shareLocation: boolean;
    shareActiveDocument: boolean;
    shareEditingStatus: boolean;
    respectFocusMode: boolean;
  };
}

/**
 * Global Cross-App Preferences
 * Section 15 in PRD
 */
export interface GlobalCrossAppSettings {
  search: {
    defaultScope: "all-apps" | "current-app" | "favorites" | "recent";
    maxResults: number;
    sortBy: "relevance" | "recent" | "alphabetical";
    quickFilters: {
      recentItems: boolean;
      favorites: boolean;
      modifiedToday: boolean;
    };
  };
  linkBehavior: {
    internalLinks: "same-tab" | "same-tab-with-back" | "new-tab" | "floating-panel";
    externalLinks: "new-tab" | "same-tab";
    preserveScrollPosition: boolean;
  };
  globalFontSizeCascade: {
    enabled: boolean;
    masterFontSize: number;
    allowAppOverrides: boolean;
  };
  keyboardShortcuts: {
    commandPalette: string;
    quickCapture: string;
    focusMode: string;
    globalSearch: string;
    customShortcuts: Array<{ action: string; shortcut: string }>;
  };
  accessibility: {
    reducedMotion: boolean;
    highContrast: boolean;
    screenReaderOptimizations: boolean;
    keyboardNavigationEnhanced: boolean;
  };
}

/**
 * Version History State
 * Section 16 in PRD
 */
export interface VersionHistoryState {
  limit: number;
  states: Array<{
    timestamp: string;
    triggeredBy: "user" | "import" | "profile-switch";
    snapshot: any;
  }>;
}

/**
 * Export/Import Format
 * Section 16 in PRD
 */
export interface ExportedSettingsFormat {
  version: "1.0";
  exportedAt: string;
  exportedBy: string;
  settings: VaultSettings;
}

// ============================================================================
// Main Settings Store State
// ============================================================================

/**
 * Complete Vault Settings State
 * Combines all settings from all sections
 */
export interface VaultSettings {
  // Cross-App Unified Settings (Part II)
  workflowProfiles: WorkflowProfile[];
  activeProfile: string | null;
  partnerCollaboration: CollaborationSettings;
  notificationIntelligence: NotificationIntelligence;

  // App-Specific Settings (Part III)
  productsLab: {
    experimentWorkbench: ExperimentWorkbenchSettings;
    componentLibrary: ComponentLibrarySettings;
  };
  bizLab: {
    knowledgeGraph: KnowledgeGraphSettings;
    documentReading: DocumentReadingSettings;
  };
  dashboard: {
    widgets: DashboardSettings;
    notifications: NotificationAchievementSettings;
    quickActions: QuickActionsSettings;
  };

  // Team & Global (Part IV)
  team: TeamCollaborationSettings;
  global: GlobalCrossAppSettings;

  // Sync & Version History
  versionHistory: VersionHistoryState;
}

/**
 * Settings Store Actions
 */
export interface VaultSettingsActions {
  // Profile Management
  switchProfile: (profileName: string) => void;
  createProfile: (profile: WorkflowProfile) => void;
  deleteProfile: (profileId: string) => void;

  // Setting Updates
  updateSetting: (path: string, value: any) => void;
  resetSettings: (scope: "products" | "biz" | "dashboard" | "global" | "all") => void;

  // Export/Import
  exportSettings: (scope: "all" | "products" | "biz" | "dashboard") => ExportedSettingsFormat;
  importSettings: (data: ExportedSettingsFormat, mergeStrategy: "replace" | "merge") => void;

  // Version History
  rollback: (timestamp: string) => void;
  saveSnapshot: (triggeredBy: "user" | "import" | "profile-switch") => void;
}

/**
 * Complete Store Interface
 */
export type VaultSettingsStore = VaultSettings & VaultSettingsActions;
