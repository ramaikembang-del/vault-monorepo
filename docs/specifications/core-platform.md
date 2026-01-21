# Core Platform Specification

**Purpose:** Shared platform architecture and infrastructure for all Vault applications  
**Status:** ✅ IMPLEMENTED (Sprint 1)  
**Scope:** Monorepo structure, Authentication, Deployment, Navigation

---

# Part I: Monorepo Architecture

## 1. Directory Structure

```
vault-monorepo/
├── apps/
│   ├── marketing-site/        → pwbi.klario.website (public)
│   └── vault/                 → vault.klario-world.com (internal)
│       ├── app/
│       │   ├── page.tsx               # Mission Control Dashboard
│       │   ├── products/              # Products Lab
│       │   ├── biz/                   # Biz Lab
│       │   └── admin/                 # Admin Panel
│       ├── components/
│       │   ├── shared/                # Vault navigation, dashboard
│       │   ├── dashboard/             # Mission Control components
│       │   ├── knowledge-graph/       # Graph visualization
│       │   └── ui/                    # Shadcn UI components
│       └── lib/
│           ├── docs.ts                # MDX document loader
│           ├── build-graph.ts         # Graph data builder
│           └── auth.ts                # Clerk utilities
├── packages/
│   ├── ui/                    # Shared components
│   └── design-tokens/         # Tailwind config
└── content/
    └── biz/                   # Biz Lab markdown files
```

---

## 2. Shared Packages

### 2.1 `/packages/ui`

**Purpose:** Reusable UI components across all apps

**Contents:**
- Button, Card, Input, Dialog (Shadcn UI base)
- Custom Clario components
- TypeScript types and interfaces

**Usage:**
```typescript
import { Button } from '@repo/ui';
```

### 2.2 `/packages/design-tokens`

**Purpose:** Centralized design system

**Contents:**
- `tailwind.config.ts` - Shared Tailwind configuration
- CSS custom properties
- Color, typography, spacing tokens

**Usage:**
```typescript
import tailwindConfig from '@repo/design-tokens/tailwind.config';
```

---

## 3. Build System

### 3.1 Turborepo Configuration

**File:** `turbo.json`

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**"]
    },
    "dev": {
      "cache": false
    },
    "build:graph": {
      "outputs": ["public/data/graph-data.json"]
    }
  }
}
```

### 3.2 Build Order

1. **Design Tokens** - Build first (shared dependency)
2. **UI Package** - Build second (depends on tokens)
3. **Graph Data** - Generate at build time
4. **Apps** - Build in parallel (marketing + vault)

---

# Part II: Authentication System

## 4. Clerk Integration

### 4.1 Configuration

**Environment Variables:**
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_***
CLERK_SECRET_KEY=sk_***
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### 4.2 Middleware Setup

**File:** `apps/vault/middleware.ts`

```typescript
import { authMiddleware } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/sign-in', '/sign-up'],

  afterAuth: async (auth, req) => {
    const user = await currentUser();
    const vaultAccess = user?.publicMetadata?.vaultAccess;

    if (!vaultAccess) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Check section-specific access
    if (req.nextUrl.pathname.startsWith('/admin')) {
      const isAdmin = user?.publicMetadata?.vaultRole === 'admin';
      // For 2-Partner Team: Both Partner 1 & 2 are admins
      if (!isAdmin) {
        return new Response('Access Denied', { status: 403 });
      }
    }
  }
});

### 4.3 2-Partner Role Model
**User Metadata Schema:**
```json
{
  "vaultAccess": true,
  "vaultRole": "admin",
  "partnerId": "p1" // "p1" (Product) or "p2" (Marketing)
}
```

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

---

# Part III: Global Navigation

## 5. Command Palette System

### 5.1 Architecture
- **Library:** `cmdk` (Radix UI compatible)
- **Scope:** Global overlay, accessible via `Cmd+K` from any route
- **State:** Managed by `useCommandStore` (Zustand)

### 5.2 Action Registry
Command Palette aggregates actions from three sources:
1.  **Static Actions:** Hardcoded global routes (Dashboard, Settings)
2.  **Context Actions:** Page-specific actions injected via `useRegisterActions` hook
3.  **Team Actions:** Partner-specific workflows (Request Review, View Activity)

### 5.3 Team Coordination Actions
Specifically designed for the 2-partner workflow:
- `triggerReviewModal()`: Opens the review request dialog
- `toggleActivityFeed()`: Slides out the partner activity sidebar

### 5.4 Unified Navigation Routes

**Primary Routes:**
```typescript
// Route structure
const routes = {
  dashboard: '/',                    // Mission Control Dashboard
  products: '/products',             // Products Lab
  biz: '/biz',                      // Biz Lab
  settings: '/settings',            // App Settings & Preferences
};
```

**Navigation Implementation:**
```tsx
// components/shared/FloatingDock.tsx
import { usePathname, useRouter } from 'next/navigation';

export function FloatingDock() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', route: '/', icon: '🏠', shortcut: 'Cmd+D' },
    { id: 'products', label: 'Products', route: '/products', icon: '🎨', shortcut: 'Cmd+1' },
    { id: 'biz', label: 'Biz', route: '/biz', icon: '📊', shortcut: 'Cmd+2' },
    { id: 'settings', label: 'Settings', route: '/settings', icon: '⚙️', shortcut: 'Cmd+3' },
  ];

  return (
    <nav className="floating-dock">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={pathname.startsWith(item.route) ? 'active' : ''}
          onClick={() => router.push(item.route)}
          title={`${item.label} (${item.shortcut})`}
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
```

### 5.5 Global Search System

**Implementation:** `cmdk` + `fuse.js` for fuzzy search

**Component:**
```tsx
// components/search/CommandMenu.tsx
'use client';

import { Command } from 'cmdk';
import Fuse from 'fuse.js';

interface SearchResult {
  type: 'action' | 'biz' | 'products' | 'settings';
  title: string;
  description?: string;
  deepLink: string;
}

export function CommandMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Aggregate searchable content
  const searchIndex = useMemo(() => {
    const items: SearchResult[] = [
      // Actions
      { type: 'action', title: 'New Strategy Doc', deepLink: '/biz/new?template=strategy' },
      { type: 'action', title: 'Log Experiment', deepLink: '/products/new' },
      { type: 'action', title: 'Request Review', deepLink: '#review-modal' },

      // Biz Lab docs
      ...bizDocs.map(doc => ({
        type: 'biz' as const,
        title: doc.title,
        description: doc.description,
        deepLink: `/biz/${doc.slug}`,
      })),

      // Products Lab
      ...productsExperiments.map(exp => ({
        type: 'products' as const,
        title: exp.name,
        description: exp.description,
        deepLink: `/products/experiments/${exp.id}`,
      })),
    ];

    return new Fuse(items, {
      keys: ['title', 'description'],
      threshold: 0.3,
    });
  }, [bizDocs, productsExperiments]);

  useEffect(() => {
    if (search) {
      const fuseResults = searchIndex.search(search);
      setResults(fuseResults.map(r => r.item));
    } else {
      setResults([]);
    }
  }, [search, searchIndex]);

  return (
    <Command.Dialog open={open} onOpenChange={onClose}>
      <Command.Input
        value={search}
        onValueChange={setSearch}
        placeholder="Search actions, docs, experiments..."
      />
      <Command.List>
        {/* Group by type */}
        {['action', 'biz', 'products', 'settings'].map(type => {
          const groupResults = results.filter(r => r.type === type);
          if (groupResults.length === 0) return null;

          return (
            <Command.Group key={type} heading={type.toUpperCase()}>
              {groupResults.map(result => (
                <Command.Item
                  key={result.deepLink}
                  onSelect={() => {
                    window.location.href = result.deepLink;
                    onClose();
                  }}
                >
                  <div>
                    <div className="font-semibold">{result.title}</div>
                    {result.description && (
                      <div className="text-xs text-slate-400">{result.description}</div>
                    )}
                  </div>
                </Command.Item>
              ))}
            </Command.Group>
          );
        })}
      </Command.List>
    </Command.Dialog>
  );
}
```

**Keyboard Shortcut Handler:**
```tsx
// lib/hooks/useGlobalShortcuts.ts
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useGlobalShortcuts(
  setSearchOpen: (open: boolean) => void,
  isAdmin: boolean
) {
  const router = useRouter();

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
          case 'd':
            e.preventDefault();
            router.push('/');
            break;
          case '1':
            e.preventDefault();
            router.push('/products');
            break;
          case '2':
            e.preventDefault();
            router.push('/biz');
            break;
          case '3':
            e.preventDefault();
            if (isAdmin) router.push('/settings');
            break;
          case 'k':
            e.preventDefault();
            setSearchOpen(true);
            break;
          case '/':
            e.preventDefault();
            // Show shortcuts guide
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isAdmin, router, setSearchOpen]);
}
```

**Performance Target:** < 500ms response time for search results

---

## 5. Role-Based Access Control

### 5.1 User Metadata Schema

```typescript
interface VaultUserMetadata {
  vaultAccess: boolean;
  vaultRole: 'admin' | 'editor' | 'viewer';
  sections: {
    products: boolean;
    biz: boolean;
    admin: boolean;
  };
  vaultProgress?: {
    docsRead: string[];
    achievements: string[];
    readCount: number;
    experimentsCreated: number;
    graphUsageCount: number;
  };
}
```

### 5.2 Permission Matrix

| Role | Products Lab | Biz Lab | Admin Panel |
|------|--------------|---------|-------------|
| **Viewer** | View only | View only | No access |
| **Editor** | Create experiments | View only | No access |
| **Admin** | Full access | Full access | Full access |

### 5.3 Manual Setup (V1 Strategy)

**Via Clerk Dashboard:**

1. Log in to https://dashboard.clerk.com
2. Go to **Users** → Select user
3. Scroll to **Metadata** → Edit "Public Metadata"
4. Paste JSON:

```json
{
  "vaultAccess": true,
  "vaultRole": "admin",
  "sections": {
     "products": true,
     "biz": true,
     "settings": true
   }
 }
```

5. Click **Save**

---

# Part III: Deployment Infrastructure

## 6. Vercel Configuration

### 6.1 Project Settings

**Domain:** `vault.klario-world.com`  
**Framework:** Next.js 14 (App Router)  
**Node Version:** 18.x  
**Install Command:** `npm install`  
**Build Command:** `npm run build`  
**Output Directory:** `.next`

### 6.2 Environment Variables

**Production:**
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_***
CLERK_SECRET_KEY=sk_live_***
NODE_ENV=production
```

**Preview:**
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_***
CLERK_SECRET_KEY=sk_test_***
```

### 6.3 Build Configuration

**File:** `apps/vault/next.config.js`

```javascript
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui', '@repo/design-tokens'],
  
  async redirects() {
    return [
      {
        source: '/products.klario.world/:path*',
        destination: '/products/:path*',
        permanent: true,
      },
    ];
  },
};
```

---

## 7. Deployment Pipeline

### 7.1 Build Steps

```bash
# 1. Install dependencies
npm install

# 2. Generate graph data
npm run build:graph

# 3. Build apps
npm run build

# 4. Deploy
vercel --prod
```

### 7.2 Build Time Targets

- **Vault App:** ~3-4 minutes
- **Graph Generation:** ~10 seconds (100 docs)
- **Total:** < 5 minutes

### 7.3 Caching Strategy

- **Static Pages:** Cached indefinitely
- **API Routes:** No cache
- **Graph Data:** Regenerated on build
- **MDX Content:** Pre-rendered at build time

---

# Part IV: Shared Navigation

## 8. Tab Navigation System

### 8.1 Persistent Top Nav

**Component:** `components/shared/VaultNav.tsx`

```tsx
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function VaultNav() {
  const pathname = usePathname();
  const isAdmin = useUser()?.publicMetadata?.vaultRole === 'admin';

  return (
    <nav className="flex gap-4 border-b border-slate-700 px-6 py-4">
      <Link
        href="/products"
        className={pathname.startsWith('/products') ? 'active' : ''}
      >
        Products
      </Link>
      <Link
        href="/biz"
        className={pathname.startsWith('/biz') ? 'active' : ''}
      >
        Biz
      </Link>
      {isAdmin && (
        <Link
          href="/admin"
          className={pathname.startsWith('/admin') ? 'active' : ''}
        >
          Admin
        </Link>
      )}
    </nav>
  );
}
```

### 8.2 Active Tab State

**CSS:**
```css
nav a {
  color: var(--text-secondary);
  transition: color 200ms;
}

nav a.active {
  color: var(--color-accent);
  border-bottom: 2px solid var(--color-accent);
}

nav a:hover {
  color: var(--text-primary);
}
```

---

## 9. Keyboard Shortcuts

### 9.1 Global Shortcuts

- **`Cmd+1`** → Products Lab
- **`Cmd+2`** → Biz Lab
- **`Cmd+3`** → Settings
- **`Cmd+K`** → Global search

### 9.2 Implementation

```tsx
useEffect(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey) {
      switch (e.key) {
        case '1':
          router.push('/products');
          break;
        case '2':
          router.push('/biz');
          break;
        case '3':
          if (isAdmin) router.push('/admin');
          break;
        case 'k':
          e.preventDefault();
          setSearchOpen(true);
          break;
      }
    }
  };

  window.addEventListener('keydown', handleKeydown);
  return () => window.removeEventListener('keydown', handleKeydown);
}, [isAdmin, router]);
```

---

# Part V: Performance & Monitoring

## 10. Performance Targets

### 10.1 Page Load Metrics

- **Dashboard:** < 1s (SSR)
- **Biz Lab Docs:** < 800ms (static)
- **Knowledge Graph:** < 500ms initial load
- **Tab Switching:** < 200ms (client-side)

### 10.2 Bundle Budgets

```
Base Vault: 120KB
+ Knowledge Graph: 50KB
+ View Modes: 20KB
+ Floating Panels: 30KB
+ Premium Navbar: 15KB
---
Total: 235KB (< 250KB target)
```

### 10.3 Monitoring

**Vercel Analytics:**
- Page load times
- Core Web Vitals (LCP, FID, CLS)
- Deployment frequency

**Custom Tracking:**
- Achievement unlocks
- Graph view usage
- Search query volume

---

## 11. Error Handling

### 11.1 Global Error Boundary

```tsx
// app/error.tsx
'use client';

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-slate-400 mb-6">{error.message}</p>
      <button onClick={reset} className="btn-primary">
        Try again
      </button>
    </div>
  );
}
```

### 11.2 Not Found Pages

```tsx
// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <Link href="/" className="btn-primary">
        Return to Dashboard
      </Link>
    </div>
  );
}
```

---

## 12. Settings Architecture (Sprint 3+)

**Future Enhancement:** Three-tier settings system planned

### 12.1 Settings Hierarchy

**Global Navigation (`/settings/navigation`)**
- Command Palette (⌘K) configuration
- Global menu customization
- Keyboard shortcuts manager

**Studio Tuner (`/studio`)**
- Theme customization (colors, fonts)
- Layout presets (panel positions)
- Animation controls
- Accessibility settings

**App Settings (`/settings`)**
- User & Workspace preferences
- Products Lab settings
- Biz Lab settings

### 12.2 State Management Pattern

**LocalStorage Persistence:**
```typescript
// Zustand pattern for all settings
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSettingsStore = create()(
  persist(
    (set) => ({ /* settings state */ }),
    { name: 'vault-settings' }
  )
);
```

**See:** PRDs 12-14 for complete specifications (planned Sprint 3+)

---

**Last Updated:** January 20, 2026
**See Also:**
- `design-foundation.md` for design tokens
- `dashboard-system.md` for Mission Control Dashboard
- `collaboration-features.md` for team coordination
- `content-navigation.md` for MDX implementation
- `../prds/00-vault-overview-prd.md` - Product overview
- `../prds/12-global-navigation-prd.md` - Navigation settings
- `../prds/13-studio-tuner-prd.md` - Theme & layout
- `../prds/14-app-settings-prd.md` - App preferences
