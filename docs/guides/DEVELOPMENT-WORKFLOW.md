# Development Workflows Specification

**Purpose:** Development processes, patterns, and workflows for Products Lab and Vault  
**Status:** ✅ ESTABLISHED (Sprint 1)  
**Scope:** AI Loop, Component Promotion, Git Strategy, Deployment

---

# Part I: AI Loop Workflow

## 1. The Experimentation Cycle

**Purpose:** Rapid UI prototyping and iteration with AI assistance

**Standard Flow:**

### Step 1: Request
```
"Build a glassy pricing card with a hover tilt effect."
```

### Step 2: Generate
AI creates:
```
/apps/vault/app/products/experiments/glass-card/page.tsx
```

### Step 3: Deploy
- Auto-deploys to `vault.klario-world.com/products/experiments/glass-card`
- Vercel preview URL available in ~2 minutes

### Step 4: Review
- User opens link
- Tests interactivity
- Evaluates visual design
- Checks responsive behavior

### Step 5: Refine
```
"Make the shadow darker, add orange glow on hover."
```

### Step 6: Iterate
Repeat steps 2-5 until satisfied

---

## 2. Workflow Optimization

### 2.1 Speed Targets

- **Request to Visual:** < 10 minutes
- **Iteration Cycle:** < 5 minutes per refinement
- **Deploy Time:** ~2 minutes (Vercel)

### 2.2 Best Practices

**Clear Requests:**
```
✅ "Build a card with glassmorphism, 12px border radius, orange accent on hover"
❌ "Make it look nice"
```

**Incremental Changes:**
```
✅ "Change only the shadow from md to xl"
❌ "Redesign everything completely different"
```

**Visual References:**
```
✅ "Like Notion's panel style with blur backdrop"
❌ "Modern design"
```

---

# Part II: Throwaway Zone

## 3. Experiment Management

### 3.1 Purpose

**The `/experiments/` folder is explicitly designed for:**
- Rapid prototyping
- Visual verification
- Code that might be deleted tomorrow
- No tests required
- Fast iteration over perfection

### 3.2 Location

```
apps/vault/app/products/experiments/
├── glass-card/
│   └── page.tsx
├── pricing-table-v2/
│   └── page.tsx
└── 3d-visualizer/
    └── page.tsx
```

### 3.3 Lifespan Rules

**Maximum Age:** 30 days

**Auto-Archive Script:**
```bash
# scripts/archive-old-experiments.sh

#!/bin/bash
EXPERIMENTS_DIR="apps/vault/app/products/experiments"
ARCHIVE_DIR=".archive/experiments"
MAX_AGE_DAYS=30

find "$EXPERIMENTS_DIR" -type d -mtime +$MAX_AGE_DAYS -exec mv {} "$ARCHIVE_DIR" \;

echo "✅ Archived experiments older than $MAX_AGE_DAYS days"
```

**Run monthly:**
```json
{
  "scripts": {
    "archive:experiments": "bash scripts/archive-old-experiments.sh"
  }
}
```

---

## 4. Promotion Criteria

### 4.1 Graduation Threshold

**An experiment should be promoted when:**
- ✅ Used in 3+ production pages
- ✅ Design finalized (no pending changes)
- ✅ Code quality acceptable
- ✅ Component isolated (no tight coupling)

**Examples:**
- Pricing card used on: Homepage, Products page, Checkout flow = **PROMOTE**
- Button variant used once, likely to change = **KEEP IN EXPERIMENTS**

### 4.2 Red Flags (Don't Promote)

- ❌ Still iterating on design daily
- ❌ Contains hardcoded values specific to one page
- ❌ Depends on experiment-specific state
- ❌ Code quality poor (copy-paste, no types)

---

# Part III: Component Promotion Process

## 5. Promotion Steps

### Step 1: Move Code

**From:**
```
apps/vault/app/products/experiments/glass-card/page.tsx
```

**To:**
```
packages/ui/src/components/GlassCard.tsx
```

**Extract Component:**
```tsx
// Before (in experiment)
export default function Page() {
  return <div className="glass-card">...</div>;
}

// After (in package)
export function GlassCard({ title, children }: GlassCardProps) {
  return <div className="glass-card">...</div>;
}
```

---

### Step 2: Add Documentation

**Create Storybook Story:**

```tsx
// packages/ui/src/components/GlassCard.stories.tsx

import { GlassCard } from './GlassCard';

export default {
  title: 'Components/GlassCard',
  component: GlassCard,
};

export const Default = {
  args: {
    title: 'Example Card',
    children: 'Card content goes here',
  },
};

export const WithHover = {
  args: {
    title: 'Hover Me',
    hoverEffect: 'glow',
  },
};
```

**Create README:**
```markdown
# GlassCard

Glassmorphism card component with optional hover effects.

## Usage

\`\`\`tsx
import { GlassCard } from '@repo/ui';

<GlassCard title="My Card" hoverEffect="glow">
  Content here
</GlassCard>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | required | Card title |
| children | ReactNode | required | Card content |
| hoverEffect | 'glow' \| 'lift' | 'lift' | Hover animation |
```

---

### Step 3: Test in Production Context

**Import into Marketing Site:**
```tsx
// apps/marketing-site/app/page.tsx
import { GlassCard } from '@repo/ui';

export default function Home() {
  return (
    <div>
      <GlassCard title="Pricing">
        Our plans start at $99/mo
      </GlassCard>
    </div>
  );
}
```

**Deploy to Preview:**
```bash
git checkout -b feat/add-glass-card
git add packages/ui/src/components/GlassCard.tsx
git commit -m "feat(ui): add GlassCard component"
git push origin feat/add-glass-card
```

**QA Checklist:**
- [ ] Renders correctly on desktop
- [ ] Renders correctly on mobile
- [ ] Hover effects work
- [ ] Accessible (keyboard nav, screen reader)
- [ ] No console errors
- [ ] Matches design system tokens

---

### Step 4: Merge to Production

**PR Review:**
- Code review by team
- Design review
- Accessibility check
- Performance check

**Merge:**
```bash
git checkout main
git merge feat/add-glass-card
git push origin main
```

**Auto-Deploy:**
- Vercel automatically deploys `main` branch
- Component now available across all apps

---

# Part IV: Git & Deployment Strategy

## 6. Branching Strategy

### 6.1 Products Lab (Wild West)

**Main Branch:** `main` (always deployable)  
**Lab Experiments:** Direct commits to `main`  
**Rationale:** Lab is for rapid experimentation

```bash
# Direct commit flow
git add apps/vault/app/products/experiments/new-card/
git commit -m "experiment: glassy pricing card"
git push origin main
```

### 6.2 Marketing Site (Controlled)

**Feature Branches:** Required  
**PR Review:** Mandatory  
**Rationale:** Marketing site stability critical

```bash
# Feature branch flow
git checkout -b feat/update-homepage
# ... make changes ...
git push origin feat/update-homepage
# ... create PR ... wait for review ...
```

---

## 7. Deployment Pipeline

### 7.1 Auto-Deploy Rules

| App | Trigger | Target |
|-----|---------|--------|
| **Products Lab** | Any commit to `main` | `vault.klario-world.com/products` |
| **Marketing Site** | Merge to `main` | `pwbi.klario.website` |
| **Biz Lab** | Any commit to `main` | `vault.klario-world.com/biz` |

### 7.2 Build Times

- **Lab:** ~2 minutes (any commit)
- **Marketing:** ~3 minutes (main branch only)
- **Biz Lab:** ~2 minutes (MDX rebuild)

### 7.3 Rollback Strategy

**If deployment breaks:**
```bash
# Revert last commit
git revert HEAD
git push origin main
```

**Vercel auto-deploys revert within 2 minutes**

---

## 8. Code Quality Guidelines

### 8.1 Experiments (Relaxed)

- ✅ No tests required
- ✅ Inline styles acceptable
- ✅ Hardcoded values OK
- ✅ No TypeScript strict mode
- ✅ Move fast, break things

### 8.2 Promoted Components (Strict)

- ✅ Full TypeScript types
- ✅ Design token usage (no hardcoded colors)
- ✅ Storybook story required
- ✅ Props documentation
- ✅ Accessibility attributes
- ✅ Responsive design

---

# Part V: Development Environment

## 9. Local Development

### 9.1 Setup

```bash
# Clone repo
git clone https://github.com/org/vault-monorepo.git
cd vault-monorepo

# Install dependencies
npm install

# Start dev server (all apps)
npm run dev

# Start specific app
npm run dev --filter=vault
```

### 9.2 Hot Reload

- **Code Changes:** < 500ms refresh
- **MDX Content:** Instant update
- **Design Tokens:** Requires full restart

### 9.3 Ports

- **Vault:** `http://localhost:3000`
- **Marketing:** `http://localhost:3001`
- **Storybook:** `http://localhost:6006`

---

## 10. Success Metrics

### 10.1 Velocity

- **Idea to Visual:** < 10 minutes average
- **Iteration Speed:** Multiple refine cycles per hour
- **Component Graduation:** 3+ uses before promotion

### 10.2 Reusability

- **Target:** >60% of Marketing components originated in Lab
- **Tracking:** Component provenance metadata
- **Quality:** No production regressions

### 10.3 Developer Experience

- **Hot Reload:** < 500ms
- **Build Feedback:** Clear error messages
- **Documentation:** Every promoted component has README + Storybook

---

**Last Updated:** January 15, 2026  
**See Also:**
- `11-products-lab-prd.md` for Products Lab overview
- `component-system.md` for component implementation
- `core-platform.md` for deployment infrastructure
