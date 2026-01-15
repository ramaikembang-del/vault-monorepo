# Products Lab Components Specification

**Status:** ✅ IMPLEMENTED (Sprint 1)  
**Purpose:** Custom components for Products Lab experimentation

---

## Overview

Technical specification for Products Lab's custom components used in the component workbench and design token visualization.

---

## Component Preview Card

### Purpose
Live component rendering with props table for testing and documentation.

### Features
- Live React component rendering
- Props table with type information
- State controls for interactive testing
- Code snippet export

### Implementation

```tsx
// components/products/ComponentPreviewCard.tsx
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { useState } from 'react';

interface ComponentPreviewProps {
  component: React.ComponentType<any>;
  propTypes: Record<string, PropType>;
  defaultProps?: Record<string, any>;
}

export function ComponentPreviewCard({ 
  component: Component, 
  propTypes,
  defaultProps = {}
}: ComponentPreviewProps) {
  const [props, setProps] = useState(defaultProps);

  return (
    <Card className="component-preview">
      <CardHeader>
        <h3>{Component.displayName || 'Component'}</h3>
      </CardHeader>
      
      <CardContent>
        {/* Live Preview */}
        <div className="preview-area border rounded-lg p-4 bg-slate-900">
          <Component {...props} />
        </div>

        {/* Props Table */}
        <div className="props-controls mt-4">
          <h4 className="text-sm font-medium mb-2">Props</h4>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(propTypes).map(([key, type]) => (
                <tr key={key}>
                  <td className="font-mono">{key}</td>
                  <td className="text-slate-400">{type.name}</td>
                  <td>
                    <PropControl
                      type={type}
                      value={props[key]}
                      onChange={(val) => setProps({ ...props, [key]: val })}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Code Export */}
        <details className="mt-4">
          <summary className="cursor-pointer text-sm text-orange-500">
            View Code
          </summary>
          <pre className="mt-2 p-4 bg-slate-950 rounded overflow-x-auto">
            <code>{generateCodeSnippet(Component.displayName, props)}</code>
          </pre>
        </details>
      </CardContent>
    </Card>
  );
}
```

### Prop Control Component

```tsx
// components/products/PropControl.tsx
function PropControl({ type, value, onChange }: PropControlProps) {
  switch (type.name) {
    case 'string':
      return (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-2 py-1 bg-slate-800 border border-slate-700 rounded"
        />
      );
    
    case 'boolean':
      return (
        <input
          type="checkbox"
          checked={value || false}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4"
        />
      );
    
    case 'number':
      return (
        <input
          type="number"
          value={value || 0}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full px-2 py-1 bg-slate-800 border border-slate-700 rounded"
        />
      );
    
    case 'enum':
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-2 py-1 bg-slate-800 border border-slate-700 rounded"
        >
          {type.options.map((opt: string) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      );
    
    default:
      return <span className="text-slate-500">N/A</span>;
  }
}
```

---

## Token Visualizer

### Purpose
Interactive design token browser for colors, typography, and spacing.

### Features
- Live color swatches with hex/rgb values
- Typography specimens with actual rendered text
- Spacing scale visualization
- Copy-to-clipboard functionality

### Implementation

```tsx
// components/products/TokenVisualizer.tsx
import { designTokens } from '@/config/design-tokens';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export function TokenVisualizer() {
  return (
    <div className="token-visualizer space-y-8">
      <ColorTokens />
      <TypographyTokens />
      <SpacingTokens />
    </div>
  );
}

function ColorTokens() {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Colors</h3>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(designTokens.colors).map(([name, value]) => (
          <ColorSwatch key={name} name={name} value={value} />
        ))}
      </div>
    </section>
  );
}

function ColorSwatch({ name, value }: { name: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="color-swatch group">
      <div
        className="w-full h-24 rounded-lg mb-2 border border-slate-700 relative overflow-hidden"
        style={{ backgroundColor: value }}
      >
        <button
          onClick={handleCopy}
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-400" />
          ) : (
            <Copy className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
      <div className="text-sm">
        <div className="font-mono text-slate-200">{name}</div>
        <div className="font-mono text-xs text-slate-400">{value}</div>
      </div>
    </div>
  );
}

function TypographyTokens() {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Typography</h3>
      <div className="space-y-4">
        {Object.entries(designTokens.fontSize).map(([name, value]) => (
          <div key={name} className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-slate-400 w-32">
              {name}
            </span>
            <span style={{ fontSize: value }} className="text-slate-200">
              The quick brown fox jumps over the lazy dog
            </span>
            <span className="font-mono text-xs text-slate-500 ml-auto">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SpacingTokens() {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Spacing</h3>
      <div className="space-y-2">
        {Object.entries(designTokens.spacing).map(([name, value]) => (
          <div key={name} className="flex items-center gap-4">
            <span className="font-mono text-sm text-slate-400 w-32">
              {name}
            </span>
            <div
              className="h-8 bg-orange-500/20 border-l-2 border-orange-500"
              style={{ width: value }}
            />
            <span className="font-mono text-xs text-slate-500">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## Design Tokens Config

```typescript
// config/design-tokens.ts
export const designTokens = {
  colors: {
    'primary': '#3b82f6',
    'accent': '#f97316',
    'success': '#10b981',
    'bg-primary': '#0f172a',
    'bg-secondary': '#1e293b',
    'text-primary': '#f1f5f9',
    'text-secondary': '#cbd5e1',
  },
  fontSize: {
    'xs': '0.75rem',
    'sm': '0.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
  },
  spacing: {
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
  }
};
```

---

## Component Registration

### How to Add New Components

1. **Create component in workbench:**
```typescript
// app/products/experiments/my-component/page.tsx
export default function MyComponentDemo() {
  return (
    <ComponentPreviewCard
      component={MyComponent}
      propTypes={{
        variant: { name: 'enum', options: ['primary', 'secondary'] },
        size: { name: 'enum', options: ['sm', 'md', 'lg'] },
        disabled: { name: 'boolean' },
      }}
      defaultProps={{
        variant: 'primary',
        size: 'md',
        disabled: false,
      }}
    />
  );
}
```

2. **Add to component library:**
```typescript
// config/component-library.ts
export const componentLibrary = [
  {
    name: 'MyComponent',
    category: 'Buttons',
    path: '/products/experiments/my-component',
  },
];
```

---

## Shadcn UI Components Used

From `v0.dev` patterns:
- `card-with-preview` - Component preview cards
- `data-table` - Token tables
- `color-palette-grid` - Color visualization

---

## Performance

- **Token rendering:** < 100ms for all tokens
- **Live preview updates:** < 16ms (60 FPS)
- **Component hot reload:** < 500ms

---

**Last Updated:** January 15, 2026  
**See Also:** `design-foundation.md`, `../prds/11-products-lab-prd.md`
