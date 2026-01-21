# Products Lab System Specification

**Purpose:** Second Brain & Digital Office - Technical implementation for product development workspace
**Status:** �#IN PROGRESS (Sprint 2+)
**Scope:** My Desk Dashboard, Component Workbench, Experiment Playground, Design Tokens, Component Library

---

# Part I: Digital Office - Work Layer

## 1. My Desk Dashboard

### 1.1 Overview

The My Desk Dashboard is a personalized command center for the product team's daily focus and rapid prototyping, serving as the product counterpart to the Mission Control Dashboard.

**Location:** `/products/desk` (My Desk) vs `/` (Mission Control)

**Design Philosophy:**
- Mirrors Mission Control's 2-column layout for muscle memory
- Left column: Interactive widgets requiring action
- Right column: Product status visualization
- Vertical scroll independence for deep work

### 1.2 Layout Architecture

**Primary: 2-Column Layout (Mirrors Mission Control)**

```tsx
// components/products/MyDeskLayout.tsx
export function MyDeskLayout() {
  return (
    <div className="grid grid-cols-[40%_60%] gap-6 p-6 min-h-screen">
      {/* Left Column: Interactive Stack */}
      <div className="flex flex-col gap-6 overflow-y-auto">
        <MorningBriefWidget />
        <ActivityPulseWidget />
        <QuickPadWidget />
        <PriorityStackWidget />
        <QuickCaptureWidget />
      </div>

      {/* Right Column: Product Status (Full Height) */}
      <div className="sticky top-6 h-fit">
        <ProductStatusWidget />
      </div>
    </div>
  );
}
```

### 1.3 Widget Data Models

**Morning Brief Widget:**
```typescript
// types/my-desk.ts
interface MorningBriefData {
  criticalUpdates: CriticalUpdate[];
  experimentAlerts: ExperimentAlert[];
  documentationGaps: DocumentationGap[];
  priorityTasks: PriorityTask[];
}

interface CriticalUpdate {
  id: string;
  type: 'experiment' | 'component' | 'documentation';
  title: string;
  priority: 'urgent' | 'high' | 'normal';
  dueDate?: Date;
  assignee?: string;
}

interface ExperimentAlert {
  id: string;
  experimentName: string;
  status: 'needs_review' | 'stale' | 'ready_to_promote';
  daysActive: number;
  usageCount: number;
}
```

**Quick Pad Widget:**
```typescript
interface QuickPadData {
  content: string;
  lastSaved: Date;
  syntaxMode: 'text' | 'jsx' | 'typescript' | 'markdown';
  autoSaveEnabled: boolean;
}
```

**Priority Stack Widget:**
```typescript
interface PriorityStackData {
  items: PriorityItem[];
  maxItems: number; // Default: 3
}

interface PriorityItem {
  id: string;
  title: string;
  documentPath: string;
  type: 'experiment' | 'component' | 'documentation' | 'pattern';
  status: 'in_progress' | 'review' | 'completed';
  priority: number; // 1-3 for top 3
  assignee?: string;
  dueDate?: Date;
}
```

### 1.4 Zustand State Management

```typescript
// stores/myDeskStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MyDeskState {
  // Widget data
  morningBrief: MorningBriefData | null;
  quickPadContent: string;
  priorityStack: PriorityStackData | null;
  activityPulse: ActivityPulseData | null;

  // Widget visibility & collapse
  widgetStates: Record<string, {
    visible: boolean;
    collapsed: boolean;
  }>;

  // Quick Pad state
  quickPadSyntaxMode: 'text' | 'jsx' | 'typescript' | 'markdown';

  // Actions
  updateMorningBrief: () => Promise<void>;
  saveQuickPad: (content: string) => void;
  clearQuickPad: () => void;
  addToPriorityStack: (item: PriorityItem) => void;
  reorderPriorityStack: (itemIds: string[]) => void;
  toggleWidget: (widgetId: string) => void;
}

export const useMyDeskStore = create<MyDeskState>()(
  persist(
    (set, get) => ({
      morningBrief: null,
      quickPadContent: '',
      priorityStack: null,
      activityPulse: null,

      widgetStates: {
        'morning-brief': { visible: true, collapsed: false },
        'activity-pulse': { visible: true, collapsed: false },
        'quick-pad': { visible: true, collapsed: false },
        'priority-stack': { visible: true, collapsed: false },
        'quick-capture': { visible: true, collapsed: false },
        'product-status': { visible: true, collapsed: false },
      },

      quickPadSyntaxMode: 'jsx',

      updateMorningBrief: async () => {
        const brief = await fetchMorningBrief();
        set({ morningBrief: brief });
      },

      saveQuickPad: (content) => {
        set({ quickPadContent: content });
        // Auto-save to localStorage via persist middleware
      },

      clearQuickPad: () => {
        set({ quickPadContent: '' });
      },

      addToPriorityStack: (item) => {
        set((state) => ({
          priorityStack: {
            ...state.priorityStack!,
            items: [...(state.priorityStack?.items || []), item].slice(0, 3),
          },
        }));
      },

      reorderPriorityStack: (itemIds) => {
        set((state) => ({
          priorityStack: {
            ...state.priorityStack!,
            items: itemIds.map((id, index) => {
              const item = state.priorityStack!.items.find(i => i.id === id)!;
              return { ...item, priority: index + 1 };
            }),
          },
        }));
      },

      toggleWidget: (widgetId) => {
        set((state) => ({
          widgetStates: {
            ...state.widgetStates,
            [widgetId]: {
              ...state.widgetStates[widgetId],
              collapsed: !state.widgetStates[widgetId].collapsed,
            },
          },
        }));
      },
    }),
    { name: 'my-desk-state' }
  )
);
```

### 1.5 Keyboard Shortcuts

```typescript
// lib/hooks/useMyDeskShortcuts.ts
import { useEffect } from 'react';
import { useMyDeskStore } from '@/stores/myDeskStore';

export function useMyDeskShortcuts() {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      // Cmd+P: Push to Priority Stack
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        const currentDoc = getCurrentDocument();
        useMyDeskStore.getState().addToPriorityStack({
          title: currentDoc.title,
          documentPath: currentDoc.path,
          type: currentDoc.type,
          status: 'in_progress',
          priority: 1,
        });
      }

      // Cmd+Shift+C: Quick Capture modal
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'c') {
        e.preventDefault();
        openQuickCaptureModal();
      }

      // Cmd+`: Focus Toggle (collapse sidebars)
      if ((e.metaKey || e.ctrlKey) && e.key === '`') {
        e.preventDefault();
        toggleFocusMode();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);
}
```

### 1.6 Data Integration

**Morning Brief Data Fetching:**
```typescript
// lib/my-desk/fetch-morning-brief.ts
export async function fetchMorningBrief(): Promise<MorningBriefData> {
  // 1. Analyze git commits for recent updates
  const recentCommits = await getRecentGitCommits('content/products', 7); // Last 7 days

  // 2. Scan for experiments needing review
  const experimentsNeedingReview = await getExperiments({ status: 'needs_review' });

  // 3. Check for stale experiments (> 25 days)
  const staleExperiments = await getExperiments({ daysActive: { gte: 25 } });

  // 4. Find documentation gaps (components without docs)
  const documentationGaps = await findDocumentationGaps();

  return {
    criticalUpdates: [
      ...experimentsNeedingReview.map(exp => ({
        id: exp.id,
        type: 'experiment' as const,
        title: `Review: ${exp.name}`,
        priority: 'high' as const,
      })),
      ...staleExperiments.map(exp => ({
        id: exp.id,
        type: 'experiment' as const,
        title: `${exp.name} (${exp.daysActive} days old)`,
        priority: 'urgent' as const,
      })),
    ],
    experimentAlerts: staleExperiments,
    documentationGaps,
    priorityTasks: await getPriorityTasks(),
  };
}
```

---

# Part II: UI Playground & Component System

## 2. Component Workbench

### 2.1 Overview

Interactive component testing environment for isolated development and refinement with real-time props manipulation.

**Purpose:** Test components in isolation before integration into production apps.

### 2.2 Live Component Rendering

```tsx
// components/products/ComponentWorkbench.tsx
'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export function ComponentWorkbench({ component }: { component: string }) {
  const [props, setProps] = useState<Record<string, any>>({});
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const ComponentToRender = getComponent(component); // Dynamic import

  return (
    <div className="grid grid-cols-[300px_1fr] gap-6">
      {/* Props Panel */}
      <div className="border-r p-4">
        <h3 className="font-semibold mb-4">Props</h3>
        <PropsControlPanel
          componentName={component}
          props={props}
          onChange={setProps}
        />
      </div>

      {/* Preview Area */}
      <div className="p-6">
        <Tabs value={viewport} onValueChange={(v) => setViewport(v as any)}>
          <TabsList>
            <TabsTrigger value="mobile">📱 Mobile</TabsTrigger>
            <TabsTrigger value="tablet">📱 Tablet</TabsTrigger>
            <TabsTrigger value="desktop">🖥️ Desktop</TabsTrigger>
          </TabsList>

          <TabsContent value={viewport}>
            <div className={getViewportClass(viewport)}>
              <ComponentPreview>
                <ComponentToRender {...props} />
              </ComponentPreview>
            </div>
          </TabsContent>
        </Tabs>

        {/* Code Export */}
        <div className="mt-6">
          <CodeExport component={component} props={props} />
        </div>
      </div>
    </div>
  );
}
```

### 2.3 Interactive Props Panel

```tsx
// components/products/PropsControlPanel.tsx
interface PropsControlPanelProps {
  componentName: string;
  props: Record<string, any>;
  onChange: (props: Record<string, any>) => void;
}

export function PropsControlPanel({ componentName, props, onChange }: PropsControlPanelPanelProps) {
  const propDefs = getComponentPropDefinitions(componentName); // From TypeDoc

  return (
    <div className="space-y-4">
      {propDefs.map(propDef => (
        <div key={propDef.name}>
          <label className="block text-sm font-medium mb-1">
            {propDef.name}
            {propDef.required && <span className="text-red-500">*</span>}
          </label>

          {/* Render appropriate control based on prop type */}
          {propDef.type === 'boolean' && (
            <Switch
              checked={props[propDef.name] || false}
              onCheckedChange={(checked) =>
                onChange({ ...props, [propDef.name]: checked })
              }
            />
          )}

          {propDef.type === 'string' && (
            <Input
              value={props[propDef.name] || ''}
              onChange={(e) =>
                onChange({ ...props, [propDef.name]: e.target.value })
              }
            />
          )}

          {propDef.type === 'enum' && (
            <Select
              value={props[propDef.name] || propDef.options[0]}
              onValueChange={(value) =>
                onChange({ ...props, [propDef.name]: value })
              }
            >
              {propDef.options.map(option => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </Select>
          )}
        </div>
      ))}
    </div>
  );
}
```

### 2.4 State Preview Matrix

```tsx
// components/products/StatePreviewMatrix.tsx
export function StatePreviewMatrix({ component, props }: { component: string; props: any }) {
  const Component = getComponent(component);

  const states = [
    { label: 'Default', props: {} },
    { label: 'Hover', props: { className: 'hover' } },
    { label: 'Active', props: { className: 'active' } },
    { label: 'Disabled', props: { disabled: true } },
    { label: 'Error', props: { error: true } },
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {states.map(state => (
        <div key={state.label} className="border p-4 rounded">
          <p className="text-sm text-slate-400 mb-2">{state.label}</p>
          <Component {...props} {...state.props} />
        </div>
      ))}
    </div>
  );
}
```

---

## 3. Experiment Playground

### 3.1 Overview

Rapid prototyping environment with throwaway zones for fearless UI experimentation.

**Core Concept:** Experiments are temporary full-page layouts at `/experiments/[name]` with automatic archival after 30 days.

### 3.2 Experiment Lifecycle

**Lifecycle Stages:**
1. **Creation** → Scaffold new experiment file
2. **Active** (0-25 days) → Iterate and refine
3. **Stale Warning** (25-30 days) → Alert for promotion or archival
4. **Auto-Archive** (30+ days) → Moved to archive folder

### 3.3 Experiment Metadata Schema

```typescript
// types/experiment.ts
interface ExperimentMetadata {
  name: string;
  creator: 'partner-1' | 'partner-2';
  createdAt: Date;
  lastModified: Date;
  usageCount: number; // Tracked via LocalStorage
  status: 'active' | 'stale' | 'archived' | 'promoted';
  tags: string[];
  description: string;
  promotionEligible: boolean; // usageCount >= 3
}
```

**Frontmatter:**
```yaml
---
name: "Glass Card"
creator: "partner-1"
createdAt: "2026-01-10T10:00:00Z"
lastModified: "2026-01-15T14:30:00Z"
usageCount: 5
status: "active"
tags: ["3d-visual", "pricing", "animation"]
description: "Glassy pricing card with hover tilt effect"
promotionEligible: true
---
```

### 3.4 Experiment Creation API

```typescript
// lib/experiments/create-experiment.ts
export async function createExperiment(name: string, type: string) {
  const slug = slugify(name);
  const experimentPath = `apps/vault/app/products/experiments/${slug}`;

  // 1. Create experiment directory
  await fs.mkdir(experimentPath, { recursive: true });

  // 2. Create page.tsx with boilerplate
  const template = getExperimentTemplate(type);
  await fs.writeFile(
    `${experimentPath}/page.tsx`,
    template.replace('{{NAME}}', name)
  );

  // 3. Create metadata file
  const metadata: ExperimentMetadata = {
    name,
    creator: getCurrentUserId(),
    createdAt: new Date(),
    lastModified: new Date(),
    usageCount: 0,
    status: 'active',
    tags: [],
    description: '',
    promotionEligible: false,
  };

  await fs.writeFile(
    `${experimentPath}/metadata.json`,
    JSON.stringify(metadata, null, 2)
  );

  return { path: `/products/experiments/${slug}`, experimentPath };
}
```

### 3.5 Auto-Archive Cron Script

```typescript
// scripts/archive-stale-experiments.ts
import { glob } from 'glob';
import fs from 'fs/promises';

export async function archiveStaleExperiments() {
  const experimentPaths = await glob('apps/vault/app/products/experiments/*/metadata.json');

  for (const metadataPath of experimentPaths) {
    const metadata: ExperimentMetadata = JSON.parse(
      await fs.readFile(metadataPath, 'utf-8')
    );

    const daysActive = Math.floor(
      (Date.now() - new Date(metadata.createdAt).getTime()) / (24 * 60 * 60 * 1000)
    );

    // Archive experiments older than 30 days
    if (daysActive > 30 && metadata.status === 'active') {
      const experimentDir = path.dirname(metadataPath);
      const experimentName = path.basename(experimentDir);
      const archivePath = `apps/vault/app/products/experiments/_archived/${experimentName}`;

      await fs.rename(experimentDir, archivePath);

      // Update metadata
      metadata.status = 'archived';
      await fs.writeFile(
        `${archivePath}/metadata.json`,
        JSON.stringify(metadata, null, 2)
      );

      console.log(`✅ Archived: ${experimentName} (${daysActive} days old)`);
    }
  }
}

// Run via cron: `node scripts/archive-stale-experiments.ts`
```

### 3.6 Promotion Pipeline

```typescript
// lib/experiments/promote-experiment.ts
export async function promoteExperiment(experimentName: string) {
  const experimentPath = `apps/vault/app/products/experiments/${experimentName}`;
  const metadata: ExperimentMetadata = JSON.parse(
    await fs.readFile(`${experimentPath}/metadata.json`, 'utf-8')
  );

  // 1. Move component to /packages/ui
  const componentName = toPascalCase(experimentName);
  const targetPath = `packages/ui/src/${componentName}`;

  await fs.mkdir(targetPath, { recursive: true });
  await fs.copyFile(
    `${experimentPath}/page.tsx`,
    `${targetPath}/${componentName}.tsx`
  );

  // 2. Create Storybook story
  await createStorybookStory(componentName, targetPath);

  // 3. Generate TypeDoc documentation
  await generateTypeDoc(componentName, targetPath);

  // 4. Update experiment metadata
  metadata.status = 'promoted';
  await fs.writeFile(
    `${experimentPath}/metadata.json`,
    JSON.stringify(metadata, null, 2)
  );

  // 5. Track promotion event
  await trackActivity({
    userId: getCurrentUserId(),
    activityType: 'component_promoted',
    targetId: componentName,
  });

  return { componentPath: targetPath };
}
```

---

## 4. Design Token System

### 4.1 Overview

Live design token browser and interactive style guide for maintaining design consistency across the product ecosystem.

**Source of Truth:** `/packages/design-tokens/tailwind.config.ts`

### 4.2 Token Categories

```typescript
// types/design-tokens.ts
interface DesignTokens {
  colors: ColorToken[];
  typography: TypographyToken[];
  spacing: SpacingToken[];
  shadows: ShadowToken[];
  borderRadius: BorderRadiusToken[];
}

interface ColorToken {
  name: string;
  value: string;
  hex: string;
  rgb: string;
  hsl: string;
  category: 'primary' | 'accent' | 'neutral' | 'semantic';
  usageCount: number; // Tracked in production
}

interface TypographyToken {
  scale: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  letterSpacing: string;
}
```

### 4.3 Token Browser Component

```tsx
// components/products/TokenBrowser.tsx
export function TokenBrowser() {
  const tokens = useDesignTokens(); // Imports from /packages/design-tokens

  return (
    <Tabs defaultValue="colors">
      <TabsList>
        <TabsTrigger value="colors">Colors</TabsTrigger>
        <TabsTrigger value="typography">Typography</TabsTrigger>
        <TabsTrigger value="spacing">Spacing</TabsTrigger>
      </TabsList>

      <TabsContent value="colors">
        <div className="grid grid-cols-6 gap-4">
          {tokens.colors.map(color => (
            <ColorSwatch key={color.name} token={color} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="typography">
        <div className="space-y-6">
          {tokens.typography.map(typo => (
            <TypographySpecimen key={typo.scale} token={typo} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="spacing">
        <SpacingVisualizer tokens={tokens.spacing} />
      </TabsContent>
    </Tabs>
  );
}
```

### 4.4 Color Swatch Component

```tsx
// components/products/ColorSwatch.tsx
export function ColorSwatch({ token }: { token: ColorToken }) {
  const [copied, setCopied] = useState(false);

  const copyToken = () => {
    navigator.clipboard.writeText(`bg-${token.name}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="cursor-pointer transition-transform hover:scale-105"
      onClick={copyToken}
    >
      <div
        className="h-24 rounded-lg mb-2"
        style={{ backgroundColor: token.value }}
      />
      <p className="text-sm font-medium">{token.name}</p>
      <p className="text-xs text-slate-400">{token.hex}</p>
      {copied && <p className="text-xs text-green-500">✓ Copied!</p>}
    </div>
  );
}
```

### 4.5 Token Drift Detection

```typescript
// lib/design-tokens/check-drift.ts
export async function checkTokenDrift() {
  const sourceTokens = await loadTokens('/packages/design-tokens/tailwind.config.ts');
  const labTokens = await loadTokens('apps/vault/tailwind.config.ts');
  const marketingTokens = await loadTokens('apps/marketing-site/tailwind.config.ts');

  const drift: TokenDrift[] = [];

  // Compare colors
  sourceTokens.colors.forEach(sourceColor => {
    const labColor = labTokens.colors.find(c => c.name === sourceColor.name);
    const marketingColor = marketingTokens.colors.find(c => c.name === sourceColor.name);

    if (labColor?.value !== sourceColor.value) {
      drift.push({
        category: 'colors',
        token: sourceColor.name,
        source: sourceColor.value,
        lab: labColor?.value,
        severity: 'high',
      });
    }
  });

  return drift;
}
```

---

## 5. Component Library & Documentation

### 5.1 Overview

Centralized repository for promoted components with live examples, props tables, and engineering patterns.

**Purpose:** Single source of truth for all reusable UI components across the Clario ecosystem.

### 5.2 Component Catalog Structure

```typescript
// types/component-library.ts
interface ComponentCatalog {
  components: ComponentEntry[];
  patterns: PatternEntry[];
  accessibility: AccessibilityReport[];
}

interface ComponentEntry {
  name: string;
  path: string;
  category: 'atoms' | 'molecules' | 'organisms';
  status: 'promoted' | 'experimental' | 'deprecated';
  creator: string;
  createdAt: Date;
  propsTable: PropDefinition[];
  examples: CodeExample[];
  a11yScore: number; // 0-100
  usageCount: number;
}

interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: any;
  description: string;
}
```

### 5.3 Component Documentation Generator

```typescript
// lib/component-library/generate-docs.ts
import { parse } from '@typescript-eslint/typescript-estree';

export async function generateComponentDocs(componentPath: string) {
  const sourceCode = await fs.readFile(componentPath, 'utf-8');
  const ast = parse(sourceCode, { jsx: true });

  // Extract props interface
  const propsInterface = findPropsInterface(ast);
  const propsTable = propsInterface.map(prop => ({
    name: prop.name,
    type: prop.type,
    required: !prop.optional,
    description: extractJSDocComment(prop),
  }));

  // Generate MDX documentation
  const mdxContent = `
---
title: "${getComponentName(componentPath)}"
category: "${getComponentCategory(componentPath)}"
status: "promoted"
---

# ${getComponentName(componentPath)}

## Props

${generatePropsTable(propsTable)}

## Usage

\`\`\`tsx
import { ${getComponentName(componentPath)} } from '@clario/ui';

<${getComponentName(componentPath)} />
\`\`\`

## Examples

${generateExamples(componentPath)}
`;

  await fs.writeFile(
    `content/products/components/${getComponentName(componentPath)}.mdx`,
    mdxContent
  );
}
```

### 5.4 Accessibility Audits

```typescript
// lib/component-library/a11y-audit.ts
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export async function runA11yAudit(component: string): Promise<A11yReport> {
  const Component = getComponent(component);
  const { container } = render(<Component />);

  const results = await axe(container);

  return {
    component,
    score: calculateA11yScore(results),
    violations: results.violations.map(v => ({
      id: v.id,
      impact: v.impact,
      description: v.description,
      help: v.help,
      helpUrl: v.helpUrl,
    })),
    passes: results.passes.length,
    timestamp: new Date(),
  };
}

function calculateA11yScore(results: any): number {
  const totalChecks = results.passes.length + results.violations.length;
  const passedChecks = results.passes.length;
  return Math.round((passedChecks / totalChecks) * 100);
}
```

---

## 6. Cross-Section Integration with Biz Lab

### 6.1 Overview

Products Lab and Biz Lab form a complete strategy-to-execution pipeline where product experiments validate business hypotheses and strategic decisions guide product development.

**See:** `biz-lab-system.md` �#6 for the Biz Lab perspective on cross-section integration.

### 6.2 Product-to-Strategy Event Publishing

```typescript
// lib/cross-section/publish-product-events.ts
import { crossSectionEventBus } from './event-bus';

export async function publishExperimentResults(experimentId: string) {
  const experiment = await getExperiment(experimentId);
  const conversionData = await getConversionData(experimentId);

  // Parse results for strategic insights
  const strategicInsight = analyzeForStrategicInsight(experiment, conversionData);

  if (strategicInsight) {
    // Publish to Biz Lab
    crossSectionEventBus.publish({
      type: 'EXPERIMENT_COMPLETED',
      source: 'products',
      target: 'biz',
      payload: {
        experimentId: experiment.id,
        experimentTitle: experiment.name,
        results: conversionData,
        strategicInsight: strategicInsight.summary,
        affectedStrategies: strategicInsight.affectedStrategies,
        suggestedAction: strategicInsight.action,
      },
      timestamp: new Date(),
    });

    // Create Biz Lab inbox item
    await createBizLabInboxItem({
      type: 'experiment-result',
      title: `Product Insight: ${strategicInsight.summary}`,
      content: generateInsightMarkdown(experiment, conversionData, strategicInsight),
      tags: strategicInsight.tags,
    });
  }
}
```

### 6.3 Strategy-Driven Task Creation

```typescript
// lib/cross-section/strategy-task-creator.ts
export async function handleStrategyApproval(strategyId: string) {
  const strategy = await getBizLabStrategy(strategyId);

  // Extract product requirements from strategy
  const productRequirements = extractProductRequirements(strategy);

  for (const requirement of productRequirements) {
    // Create Products Lab experiment task
    await createExperimentTask({
      name: requirement.name,
      description: requirement.description,
      tags: [...requirement.tags, strategy.id],
      strategyLink: `/biz/strategy/${strategyId}`,
      priority: strategy.priority,
      dueDate: strategy.deadline,
    });
  }

  // Notify product team
  await sendNotification({
    type: 'STRATEGY_APPROVED',
    message: `New product tasks created from "${strategy.title}"`,
    recipients: ['product-team'],
    deepLink: '/products/experiments',
  });
}
```

---

## 7. Performance Optimization

### 7.1 Staged Parsing System

**Three-Stage Loading Pipeline for < 50ms navigation:**

```typescript
// lib/performance/staged-parser.ts
export class StagedDocumentParser {
  private metadataCache: Map<string, DocMetadata> = new Map();
  private contentCache: Map<string, string> = new Map();
  private worker: Worker;

  constructor() {
    this.worker = new Worker(new URL('./graph-worker.ts', import.meta.url));
  }

  // Stage 1: Metadata Scan (< 100ms)
  async scanMetadata(): Promise<Map<string, DocMetadata>> {
    const allFiles = await getAllMarkdownFiles();

    const metadataPromises = allFiles.map(async (file) => {
      const content = await fs.readFile(file, 'utf8');
      const { data } = matter(content);
      return [file, data as DocMetadata];
    });

    const entries = await Promise.all(metadataPromises);
    this.metadataCache = new Map(entries);

    return this.metadataCache;
  }

  // Stage 2: Critical Content (< 200ms on demand)
  async loadDocument(path: string): Promise<string> {
    if (this.contentCache.has(path)) {
      return this.contentCache.get(path)!;
    }

    const content = await fs.readFile(path, 'utf8');
    this.contentCache.set(path, content);

    return content;
  }

  // Stage 3: Deep Analysis (Background, non-blocking)
  startBackgroundAnalysis() {
    this.worker.postMessage({
      type: 'ANALYZE_BACKLINKS',
      payload: {
        metadata: Array.from(this.metadataCache.entries()),
      },
    });

    this.worker.onmessage = (e) => {
      if (e.data.type === 'BACKLINKS_COMPLETE') {
        updateGraphData(e.data.payload);
      }
    };
  }
}
```

### 7.2 Hot Reload Optimization

```typescript
// next.config.js
module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Fast refresh for experiments
      config.optimization.runtimeChunk = 'single';

      // Exclude node_modules from watch
      config.watchOptions = {
        ignored: /node_modules/,
        aggregateTimeout: 200, // < 500ms target
      };
    }

    return config;
  },
};
```

---

# Part VIII: App Settings Integration

## 8. Settings-Driven Products Lab Configuration

### 8.1 Workflow Profile Application

Products Lab respects Workflow Profiles from App Settings system, automatically reconfiguring workbench and library based on active profile.

```typescript
// Products Lab listens for profile changes
export function ProductsLabContainer() {
  const { activeProfile, profiles } = useWorkflowProfiles();
  const productsLabSettings = useProductsLabSettings();

  useEffect(() => {
    if (!activeProfile) return;

    const profile = profiles.find(p => p.id === activeProfile);
    if (!profile) return;

    // Apply profile's Products Lab settings
    const { productsLab } = profile.settings;

    // Update sidebar state
    productsLabSettings.updateSidebarState(productsLab.sidebarState);

    // Update hot reload
    productsLabSettings.updateHotReload(productsLab.hotReload);

    // Update console visibility
    productsLabSettings.updateConsole(productsLab.console);

    // Update preview mode
    productsLabSettings.updatePreviewMode(productsLab.previewMode);
  }, [activeProfile, profiles]);

  return <ProductsLab />;
}
```

**Profile-Specific Examples:**

**Focus Mode Profile:**
```typescript
{
  productsLab: {
    sidebarState: 'collapsed', // Hide file tree for focus
    hotReload: false, // Disable auto-refresh distractions
    console: 'hidden', // Hide console output
    previewMode: 'code-only', // Full screen code editor
  }
}
```
**Result:**
- Sidebar collapsed for maximum code space
- Hot reload disabled to prevent interruptions
- Console hidden to minimize distractions
- Code editor takes full width (no preview split)

**Collaboration Mode Profile:**
```typescript
{
  productsLab: {
    sidebarState: 'expanded', // Show file tree for navigation
    hotReload: true, // Live preview for pair programming
    console: 'visible', // Show console for debugging
    previewMode: 'split', // Side-by-side code and preview
  }
}
```
**Result:**
- Sidebar expanded with file tree visible
- Hot reload enabled for live feedback
- Console visible for debugging with partner
- Split view for discussing code and preview

### 8.2 Experiment Workbench Settings Consumption

Experiment Workbench consumes App Settings for default templates, auto-save, and editor preferences.

```typescript
// Workbench uses settings for new experiment defaults
export function createNewExperiment() {
  const { experimentWorkbench } = useProductsLabSettings.getState();
  const { shared } = useCollaborationSettings.getState().settings;

  // Use shared template if enforced, otherwise personal preference
  const template = shared.enforced
    ? shared.settings.experimentTemplate
    : experimentWorkbench.defaultTemplate;

  const newExperiment = {
    id: generateId(),
    name: 'Untitled Experiment',
    template,
    createdAt: new Date().toISOString(),
    config: {
      autoSave: experimentWorkbench.autoSave,
      syntaxHighlighting: experimentWorkbench.syntaxHighlighting,
      lineNumbers: experimentWorkbench.lineNumbers,
      wordWrap: experimentWorkbench.wordWrap,
    },
  };

  return newExperiment;
}

// Auto-save respects user preferences
export function ExperimentEditor({ experiment }) {
  const { experimentWorkbench } = useProductsLabSettings();
  const [content, setContent] = useState(experiment.code);
  const [lastSaved, setLastSaved] = useState(Date.now());

  useEffect(() => {
    if (!experimentWorkbench.autoSave.enabled) return;

    const interval = setInterval(() => {
      saveExperiment(experiment.id, content);
      setLastSaved(Date.now());
    }, experimentWorkbench.autoSave.interval * 1000);

    return () => clearInterval(interval);
  }, [content, experimentWorkbench.autoSave]);

  return (
    <div className="experiment-editor">
      <CodeEditor
        value={content}
        onChange={setContent}
        options={{
          lineNumbers: experimentWorkbench.lineNumbers,
          wordWrap: experimentWorkbench.wordWrap ? 'on' : 'off',
          syntaxHighlighting: experimentWorkbench.syntaxHighlighting,
        }}
      />
      {experimentWorkbench.autoSave.enabled && (
        <div className="auto-save-indicator">
          Last saved {formatDistanceToNow(lastSaved)} ago
        </div>
      )}
    </div>
  );
}
```

### 8.3 Component Library Settings Consumption

Component Library uses App Settings for view mode, sorting, and preview preferences.

```typescript
// Component Library respects user preferences
export function ComponentLibrary() {
  const { componentLibrary } = useProductsLabSettings();
  const { shared } = useCollaborationSettings.getState().settings;

  // Filter components based on search scope (local vs shared)
  const components = useComponents({
    searchScope: componentLibrary.searchScope,
    filterByStatus: componentLibrary.filterByStatus,
  });

  // Sort components based on user preference
  const sortedComponents = useMemo(() => {
    switch (componentLibrary.sortBy) {
      case 'name':
        return [...components].sort((a, b) => a.name.localeCompare(b.name));
      case 'recent':
        return [...components].sort((a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      case 'category':
        return [...components].sort((a, b) => a.category.localeCompare(b.category));
      default:
        return components;
    }
  }, [components, componentLibrary.sortBy]);

  return (
    <div className="component-library">
      <div className="library-controls">
        <ViewModeToggle mode={componentLibrary.viewMode} />
        <SortByDropdown sortBy={componentLibrary.sortBy} />
        <FilterByStatusCheckboxes filters={componentLibrary.filterByStatus} />
      </div>

      <div className={`component-grid view-${componentLibrary.viewMode}`}>
        {sortedComponents.map(component => (
          <ComponentCard
            key={component.id}
            component={component}
            showPreview={componentLibrary.showPreview}
          />
        ))}
      </div>
    </div>
  );
}

// Component preview respects live reload settings
export function ComponentPreview({ component }) {
  const { experimentWorkbench } = useProductsLabSettings();

  useEffect(() => {
    if (!experimentWorkbench.hotReload) return;

    // Set up hot reload watcher
    const watcher = watchComponentChanges(component.id, (updatedCode) => {
      setPreviewCode(updatedCode);
    });

    return () => watcher.disconnect();
  }, [component.id, experimentWorkbench.hotReload]);

  return (
    <div className="component-preview">
      {experimentWorkbench.hotReload && (
        <div className="hot-reload-indicator">
          <span className="pulse-dot" /> Live Preview
        </div>
      )}
      <PreviewFrame code={previewCode} />
    </div>
  );
}
```

### 8.4 Cross-App Settings Synchronization

Products Lab settings participate in cascade rules from App Settings system.

```typescript
// Example: Global sidebar position cascades to Products Lab
export function handleGlobalSidebarPosition(position: 'left' | 'right' | 'hidden') {
  const productsLabStore = useProductsLabSettings.getState();

  if (position === 'hidden') {
    // Collapse sidebar when global position is hidden
    productsLabStore.updateSidebarState('collapsed');
  } else {
    // Restore sidebar based on current profile
    const { activeProfile, profiles } = useWorkflowProfiles.getState();
    const profile = profiles.find(p => p.id === activeProfile);

    if (profile) {
      productsLabStore.updateSidebarState(profile.settings.productsLab.sidebarState);
    }
  }
}

// Example: Shared experiment template enforcement
export function enforceSharedExperimentTemplate() {
  const { shared } = useCollaborationSettings.getState().settings;
  const productsLabStore = useProductsLabSettings.getState();

  if (shared.enforced) {
    // Override personal preference with team default
    productsLabStore.experimentWorkbench.defaultTemplate = shared.settings.experimentTemplate;

    showToast({
      title: 'Team Template Enforced',
      description: `All new experiments will use ${shared.settings.experimentTemplate}`,
      variant: 'info',
    });
  }
}
```

### 8.5 Partner Collaboration Settings Impact

Products Lab respects collaboration settings for component promotion and review workflows.

```typescript
// Component promotion uses collaboration notification rules
export function promoteComponent(componentId: string) {
  const component = getComponent(componentId);
  const { reviewWorkflow } = useCollaborationSettings.getState().settings;

  // Update component status
  updateComponent(componentId, { status: 'promoted', promotedAt: new Date().toISOString() });

  // Send notification based on collaboration rules
  const notificationRule = reviewWorkflow.notificationRules['component-promoted'];

  if (notificationRule) {
    const shouldNotifyPartner = notificationRule.notify.includes('both') ||
                                notificationRule.notify.includes(getPartnerPartnerId());

    if (shouldNotifyPartner) {
      sendNotification({
        type: 'component-promoted',
        componentName: component.name,
        partnerId: getPartnerPartnerId(),
        urgent: notificationRule.urgent,
        method: notificationRule.method,
      });
    }
  }

  // Add to Mission Control Review Queue if auto-assign enabled
  const assignee = reviewWorkflow.autoAssign.productsLabComponents;
  if (assignee) {
    addToReviewQueue({
      type: 'component',
      itemId: componentId,
      assignedTo: assignee,
      priority: notificationRule.urgent ? 'high' : 'normal',
    });
  }
}
```

### 8.6 Export & Import Experiment Settings

Products Lab settings can be exported and shared with partners.

```typescript
// Export Products Lab-only settings
export function exportProductsLabSettings() {
  const exportData = exportSettings('products');

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vault-products-lab-settings-${new Date().toISOString()}.json`;
  a.click();
  URL.revokeObjectURL(url);

  showToast({
    title: 'Settings Exported',
    description: 'Products Lab settings saved to file',
    variant: 'success',
  });
}

// Import experiment workbench configuration from partner
export function importProductsLabSettings(file: File) {
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const importedData = JSON.parse(e.target?.result as string);

      if (!importedData.version || !importedData.settings) {
        throw new Error('Invalid settings file format');
      }

      // Show confirmation dialog
      showImportPreview(importedData, () => {
        importSettings(importedData, 'merge');

        showToast({
          title: 'Settings Imported',
          description: `Products Lab settings from ${importedData.exportedBy} applied`,
          variant: 'success',
        });
      });
    } catch (error) {
      showToast({
        title: 'Import Failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  reader.readAsText(file);
}
```

**See:** `specifications/app-settings-system.md` for complete Settings Hub architecture (Workflow Profiles, Collaboration Settings, Cascade Engine, App-Specific Stores)
**See:** PRD #14 Sections 7-8 for Products Lab settings product requirements

---

**Last Updated:** January 20, 2026
**Related Specifications:**
- `content-navigation.md` - MDX rendering & knowledge graph visualization
- `biz-lab-system.md` - Biz Lab cross-section integration (reverse perspective)
- `collaboration-features.md` - Mission Control integration & team features
- `core-platform.md` - Platform infrastructure

**Related PRDs:**
- `../prds/11-products-lab-prd.md` - Product requirements
- `../prds/00-vault-overview-prd.md` - Vault ecosystem overview
- `../prds/10-biz-lab-prd.md` - Biz Lab integration

