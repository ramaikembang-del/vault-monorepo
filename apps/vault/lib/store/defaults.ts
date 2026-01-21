/**
 * Vault Settings Hub - Default Settings
 *
 * Default values for all settings sections
 */

import type {
  WorkflowProfile,
  CollaborationSettings,
  NotificationIntelligence,
  ExperimentWorkbenchSettings,
  ComponentLibrarySettings,
  KnowledgeGraphSettings,
  DocumentReadingSettings,
  DashboardSettings,
  NotificationAchievementSettings,
  QuickActionsSettings,
  TeamCollaborationSettings,
  GlobalCrossAppSettings,
  VaultSettings,
} from "./types";

// ============================================================================
// Default Workflow Profiles
// ============================================================================

export const defaultWorkflowProfiles: WorkflowProfile[] = [
  {
    id: "focus-mode",
    name: "Focus Mode",
    description: "Deep work without interruptions",
    isDefault: false,
    settings: {
      missionControl: {
        widgetVisibility: ["My Focus", "Current Sprint"],
        notifications: {
          enabled: false,
          exceptions: ["critical-alerts"],
        },
      },
      bizLab: {
        sidebarState: "collapsed",
        zenMode: true,
        autoSave: { interval: 30 },
      },
      productsLab: {
        sidebarState: "collapsed",
        hotReload: false,
        console: "hidden",
      },
      global: {
        commandPaletteScope: "current-app",
        linkBehavior: "same-tab",
      },
    },
    triggers: {
      manual: true,
    },
  },
  {
    id: "collaboration-mode",
    name: "Collaboration Mode",
    description: "Team coordination and shared work",
    isDefault: true,
    settings: {
      missionControl: {
        widgetVisibility: ["Sprint Progress", "Team Activity", "Quick Actions"],
        notifications: {
          enabled: true,
          exceptions: [],
        },
      },
      bizLab: {
        sidebarState: "expanded",
        zenMode: false,
        autoSave: { interval: 60 },
      },
      productsLab: {
        sidebarState: "expanded",
        hotReload: true,
        console: "auto",
      },
      global: {
        commandPaletteScope: "all-apps",
        linkBehavior: "same-tab",
      },
    },
    triggers: {
      manual: true,
    },
  },
  {
    id: "review-mode",
    name: "Review Mode",
    description: "Document and experiment review workflow",
    isDefault: false,
    settings: {
      missionControl: {
        widgetVisibility: ["Review Queue", "Recent Changes", "Approvals"],
        notifications: {
          enabled: true,
          exceptions: [],
        },
      },
      bizLab: {
        sidebarState: "expanded",
        zenMode: false,
        autoSave: { interval: 120 },
      },
      productsLab: {
        sidebarState: "expanded",
        hotReload: true,
        console: "visible",
      },
      global: {
        commandPaletteScope: "all-apps",
        linkBehavior: "same-tab",
      },
    },
    triggers: {
      manual: true,
    },
  },
];

// ============================================================================
// Default Partner Collaboration Settings
// ============================================================================

export const defaultCollaborationSettings: CollaborationSettings = {
  shared: {
    enforced: false,
    settings: {
      experimentTemplate: "shadcn-ui-default",
      graphColorScheme: "category",
      decisionApprovalChain: [],
    },
  },
  reviewWorkflow: {
    autoAssign: {
      bizLabStrategies: "Partner 1",
      productsLabComponents: "Partner 2",
      crossSectionDecisions: "both-required",
    },
    notificationRules: {},
  },
  presenceSharing: {
    shareLocation: true,
    shareActiveDoc: true,
    shareEditStatus: true,
    hideDuringFocusMode: true,
  },
};

// ============================================================================
// Default Notification Intelligence
// ============================================================================

export const defaultNotificationIntelligence: NotificationIntelligence = {
  urgencyRules: {
    critical: ["decision-requires-approval", "build-failed", "security-alert"],
    important: ["review-requested", "experiment-completed", "strategy-approved"],
    informational: ["doc-updated", "partner-online", "achievement-unlocked"],
  },
  deliveryRules: {
    immediate: ["critical"],
    batched: ["informational"],
    deferred: ["important"],
  },
  doNotDisturb: {
    enabled: false,
    schedule: {
      weekdays: "18:00-09:00",
      weekends: "all-day",
    },
    exceptions: ["critical"],
    respectPartnerFocus: true,
  },
  partnerRouting: {
    enabled: true,
    fallbackRules: {},
  },
};

// ============================================================================
// Default Products Lab Settings
// ============================================================================

export const defaultExperimentWorkbenchSettings: ExperimentWorkbenchSettings = {
  defaultTemplate: {
    framework: "shadcn",
    includeAnimations: true,
    includeResponsive: true,
    defaultLayout: "component",
  },
  autoSave: {
    enabled: true,
    intervalSeconds: 120,
    onBlur: true,
    onNavigate: true,
    showIndicator: true,
    versionHistoryLimit: 10,
  },
  workbenchLayout: {
    codeEditorWidthPercent: 60,
    previewPosition: "right",
    consoleVisibility: "auto",
    showFileTree: true,
  },
  hotReload: {
    enabled: true,
    showGridOverlay: false,
    showBreakpointIndicator: true,
    autoOpenNewTab: false,
  },
  performanceMode: "optimized",
};

export const defaultComponentLibrarySettings: ComponentLibrarySettings = {
  livePreview: {
    hotReload: true,
    showGridOverlay: false,
    responsiveViewports: true,
    autoOpenNewTab: false,
  },
  tokenVisualizer: {
    defaultView: "all",
    expandCategories: true,
    showUsageExamples: true,
  },
  documentation: {
    fontSize: 16,
    syntaxTheme: "github-dark",
    collapsibleSectionsDefault: "expanded",
    showTableOfContents: true,
  },
  componentSearch: {
    scope: "all",
    includeArchived: false,
  },
  exportFormat: {
    default: "react",
    includeComments: true,
  },
};

// ============================================================================
// Default Biz Lab Settings
// ============================================================================

export const defaultKnowledgeGraphSettings: KnowledgeGraphSettings = {
  visualization: {
    nodeSize: "medium",
    linkStyle: "curved",
    colorScheme: "category",
    physics: {
      enabled: true,
      strength: 0.6,
      repulsionDistance: 200,
    },
  },
  autoOpenBehavior: {
    onClick: "sidebar",
    previewDelay: 500,
    keepGraphVisible: true,
  },
  smartConnections: {
    semanticSimilarityThreshold: 0.75,
    autoLinkNewDocs: true,
    showSuggestions: true,
  },
  filterPresets: [
    {
      name: "All Documents",
      filters: {
        categories: [],
      },
    },
  ],
  minimap: {
    enabled: true,
    position: "bottom-right",
    showClusters: true,
  },
};

export const defaultDocumentReadingSettings: DocumentReadingSettings = {
  hoverPreviews: {
    enabled: true,
    delayMs: 500,
    showMetadata: {
      title: true,
      readTime: true,
      keyTakeaways: true,
      lastModified: true,
    },
  },
  readingMode: {
    typography: {
      fontSize: 16,
      lineHeight: 1.6,
      columnWidth: 680,
    },
    behavior: {
      autoScrollToLastPosition: true,
      highlightUnreadSections: false,
      showProgressBar: true,
      estimateTimeRemaining: true,
    },
  },
  sidebarLayout: {
    defaultState: "expanded",
    width: 240,
    autoCollapse: {
      onMobile: true,
      onNarrowViewport: true,
      viewportThreshold: 1024,
    },
    favorites: {
      enabled: true,
      showIcons: true,
      showLabels: true,
    },
  },
  quickCapture: {
    autoTag: true,
    defaultLocation: "/biz/quick-captures",
    notifyOnSave: false,
  },
};

// ============================================================================
// Default Dashboard Settings
// ============================================================================

export const defaultDashboardSettings: DashboardSettings = {
  widgets: {
    active: [
      { id: "sprint-progress", order: 0, size: "large" },
      { id: "achievements", order: 1, size: "medium" },
      { id: "portfolio-map", order: 2, size: "large" },
      { id: "quick-actions", order: 3, size: "medium" },
      { id: "recent-strategic-docs", order: 4, size: "medium" },
    ],
    available: ["company-snapshot", "smart-recommendations", "experiment-queue", "decision-log"],
  },
  charts: {
    defaultType: "bar",
    colorScheme: "vibrant",
    animations: true,
    showLegend: "on-hover",
    showValues: "on-hover",
  },
  layout: {
    gridColumns: 2,
    autoResize: true,
    presets: [
      {
        name: "Default View",
        widgetConfiguration: [
          { id: "sprint-progress", order: 0, size: "large" },
          { id: "achievements", order: 1, size: "medium" },
          { id: "portfolio-map", order: 2, size: "large" },
        ],
      },
    ],
  },
};

export const defaultNotificationAchievementSettings: NotificationAchievementSettings = {
  achievements: {
    triggers: {
      badgeUnlocked: true,
      milestoneReached: true,
      dailySummary: false,
      weeklyDigest: false,
      customGoals: true,
    },
    displayStyle: "confetti-modal",
    celebrationMode: "full",
  },
  documentUpdates: {
    smartLinkedDocs: true,
    anyBizLabDoc: false,
    experimentsPromoted: true,
    crossSectionChanges: true,
  },
  batching: {
    enabled: true,
    batchInterval: 30,
    batchableEvents: ["doc-updated", "experiment-completed"],
    alwaysImmediate: ["critical-decision", "build-failed"],
  },
};

export const defaultQuickActionsSettings: QuickActionsSettings = {
  pinnedActions: [
    { id: "create-experiment", label: "Create Experiment", icon: "beaker", shortcut: "Cmd+Shift+E" },
    { id: "open-graph", label: "Knowledge Graph", icon: "network", shortcut: "Cmd+Shift+G" },
    { id: "search-docs", label: "Search Documents", icon: "search", shortcut: "Cmd+K" },
    { id: "view-achievements", label: "Achievements", icon: "trophy", shortcut: "Cmd+Shift+A" },
    { id: "quick-capture", label: "Quick Capture", icon: "plus", shortcut: "Cmd+Shift+N" },
  ],
  defaultDashboardTab: "overview",
  commandPalette: {
    defaultScope: "all-apps",
    maxResults: 10,
    showRecentSearches: true,
  },
  contextAwareActions: {
    enabled: true,
    showProfileSpecificActions: true,
  },
};

// ============================================================================
// Default Team & Global Settings
// ============================================================================

export const defaultTeamCollaborationSettings: TeamCollaborationSettings = {
  sharedDefaults: {
    enforced: false,
    settings: {
      productsLab: {
        experimentTemplate: "shadcn-ui-default",
        autoSaveInterval: 120,
      },
      bizLab: {
        graphColorScheme: "category",
        documentFontSize: 16,
      },
      dashboard: {
        widgetLayout: "standard",
        allowPersonalization: true,
      },
    },
  },
  notificationRules: {},
  reviewWorkflow: {
    approvalChains: [],
    decisionGovernance: {
      crossSectionDecisionsRequireBothApprovals: true,
      autoNotifyStakeholders: true,
    },
  },
  presenceSettings: {
    shareLocation: true,
    shareActiveDocument: true,
    shareEditingStatus: true,
    respectFocusMode: true,
  },
};

export const defaultGlobalCrossAppSettings: GlobalCrossAppSettings = {
  search: {
    defaultScope: "all-apps",
    maxResults: 10,
    sortBy: "relevance",
    quickFilters: {
      recentItems: true,
      favorites: true,
      modifiedToday: false,
    },
  },
  linkBehavior: {
    internalLinks: "same-tab",
    externalLinks: "new-tab",
    preserveScrollPosition: true,
  },
  globalFontSizeCascade: {
    enabled: true,
    masterFontSize: 16,
    allowAppOverrides: true,
  },
  keyboardShortcuts: {
    commandPalette: "Cmd+K",
    quickCapture: "Cmd+Shift+N",
    focusMode: "Cmd+Shift+F",
    globalSearch: "Cmd+/",
    customShortcuts: [],
  },
  accessibility: {
    reducedMotion: false,
    highContrast: false,
    screenReaderOptimizations: false,
    keyboardNavigationEnhanced: false,
  },
};

// ============================================================================
// Complete Default Settings
// ============================================================================

export const defaultVaultSettings: VaultSettings = {
  // Cross-App Unified Settings
  workflowProfiles: defaultWorkflowProfiles,
  activeProfile: null,
  partnerCollaboration: defaultCollaborationSettings,
  notificationIntelligence: defaultNotificationIntelligence,

  // App-Specific Settings
  productsLab: {
    experimentWorkbench: defaultExperimentWorkbenchSettings,
    componentLibrary: defaultComponentLibrarySettings,
  },
  bizLab: {
    knowledgeGraph: defaultKnowledgeGraphSettings,
    documentReading: defaultDocumentReadingSettings,
  },
  dashboard: {
    widgets: defaultDashboardSettings,
    notifications: defaultNotificationAchievementSettings,
    quickActions: defaultQuickActionsSettings,
  },

  // Team & Global
  team: defaultTeamCollaborationSettings,
  global: defaultGlobalCrossAppSettings,

  // Version History
  versionHistory: {
    limit: 10,
    states: [],
  },
};
