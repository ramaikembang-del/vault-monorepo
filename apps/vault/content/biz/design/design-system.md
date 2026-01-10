# Design System
**Visual Consistency & Component Library**

**Owner:** Design + Product  
**Status:** PLANNED - Year 1+

---

## Purpose

**Why Design System?**
- Consistency (all products look/feel unified)
- Speed (reuse components, don't reinvent)
- Quality (tested patterns, proven UX)

**When to Build:** After 2-3 products launched (establish patterns first)

---

## Design Tokens

### Colors

**Primary (Brand):**
- Blue:#3B82F6 (buttons, links)
- Dark Blue: #1E40AF (hover states)

**Semantic:**
- Success: #10B981 (green - positive metrics)
- Warning: #F59E0B (orange - alerts)
- Error: #EF4444 (red - errors)
- Info: #6366F1 (purple - informational)

**Neutrals:**
- Gray 900: #111827 (text)
- Gray 500: #6B7280 (secondary text)
- Gray 200: #E5E7EB (borders)
- White: #FFFFFF (backgrounds)

---

### Typography

**Font Family:**
- Primary: Inter (clean, readable)
- Monospace: JetBrains Mono (code, numbers)

**Font Sizes:**
- H1: 32px (page titles)
- H2: 24px (section headers)
- H3: 18px (subsections)
- Body: 16px (default text)
- Small: 14px (captions, labels)

**Font Weights:**
- Regular: 400 (body text)
- Medium: 500 (emphasis)
- Bold: 700 (headings)

---

### Spacing

**Scale (4px base):**
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

**Usage:**
- Padding: Use md (16px) for most cards/containers
- Margins: Use lg (24px) between sections
- Gaps: Use sm (8px) between related items

---

## Components

### Buttons

**Primary Button:**
```css
background: #3B82F6 (blue)
color: white
padding: 12px 24px
border-radius: 8px
font-weight: 600
hover: darken 10%
```

**Secondary Button:**
```css
background: transparent
border: 2px solid #E5E7EB (gray)
color: #111827 (dark text)
hover: background gray-50
```

**Sizes:**
- Small: padding 8px 16px, font 14px
- Medium: padding 12px 24px, font 16px (default)
- Large: padding 16px 32px, font 18px

---

### Cards

**Standard Card:**
```css
background: white
border: 1px solid #E5E7EB
border-radius: 12px
padding: 24px
box-shadow: 0 1px 3px rgba(0,0,0,0.1)
```

**Usage:** Dashboard tiles, product cards, information panels

---

### Forms

**Input Field:**
```css
border: 1px solid #E5E7EB
border-radius: 8px
padding: 12px 16px
font-size: 16px
focus: border-color #3B82F6, box-shadow blue
```

**Label:**
```css
font-size: 14px
font-weight: 500
color: #374151 (gray-700)
margin-bottom: 8px
```

**Error State:**
```css
border-color: #EF4444 (red)
color: #DC2626 (error text)
```

---

### Charts

**Color Palette (Data Viz):**
- Primary: #3B82F6 (blue)
- Secondary: #10B981 (green)
- Tertiary: #F59E0B (orange)
- Quaternary: #8B5CF6 (purple)

**Grid:** Light gray (#F3F4F6), 1px strokes  
**Labels:** Gray-600 (#4B5563), 12px font

---

## Layout Patterns

### Dashboard Layout

**Grid:** 12-column grid  
**Gutter:** 24px between columns  
**Container:** Max-width 1280px (centered)

**Responsive Breakpoints:**
- Mobile: <640px (1 column)
- Tablet: 640-1024px (2 columns)
- Desktop: >1024px (3-4 columns)

---

### Navigation

**Top Bar:**
- Height: 64px
- Background: White
- Shadow: subtle (elevation-1)
- Logo: Left, 32px height
- User menu: Right

**Sidebar** (for complex apps):
- Width: 240px
- Collapsible to 64px (icon-only)
- Background: Gray-50

---

## Accessibility

**Contrast Ratios:**
- Text on white: ≥4.5:1 (WCAG AA)
- Large text: ≥3:1
- Interactive elements: ≥3:1

**Focus States:**
- Visible outline (2px solid blue)
- Never remove outline without alternative

**Touch Targets:**
- Minimum 44x44px (mobile)
- Spacing between tappable elements: ≥8px

---

## Implementation

**Figma:** Design components library  
**Code:** Tailwind CSS config (design tokens)  
**React:** Shared component library (Storybook)

**Naming Convention:**
- BEM for CSS classes
- PascalCase for React components

---

**Status:** PLANNED  
**Build:** After Product 05 (SaaS) launch  
**Maintenance:** Update quarterly
