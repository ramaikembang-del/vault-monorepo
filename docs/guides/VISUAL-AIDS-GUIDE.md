# Visual Aids Guide
**Framework for Adding Screenshots & Recordings to Documentation**

---

## Why Visual Aids Matter

- **50% faster onboarding** for new team members
- **Reduces "how does this work?" questions** by 70%
- **Showcases UX polish** better than text descriptions
- **Validates implementation** matches design intent

---

## What to Capture

### Priority 1: Key User Flows (Sprint 1 - NEEDED)
- [ ] **Dashboard Landing** - Mission Control with XP/progress
- [ ] **Knowledge Graph** - Force-directed layout with nodes
- [ ] **Floating Note Panel** - Draggable overlay in action
- [ ] **Achievement Unlock** - Confetti + notification animation
- [ ] **Search (Cmd+K)** - CMDK interface with results

### Priority 2: Feature Deep Dives (Sprint 2)
- [ ] **Biz Lab Navigation** - Sidebar + content rendering
- [ ] **Graph Interactions** - Hover cards + click behavior
- [ ] **Gamification Flow** - Role selection → Achievements
- [ ] **Mobile Responsive** - Bottom dock navigation
- [ ] **Product Portfolio** - Interactive Mermaid diagram

### Priority 3: Technical Details (Documentation)
- [ ] **Component Showcase** - All Shadcn UI variants
- [ ] **Color Palette** - Design tokens visualized
- [ ] **Animation Examples** - Framer Motion transitions
- [ ] **Code Examples** - Syntax-highlighted snippets

---

## Capture Methods

### Screenshots (Static Images)

**Tool:** Windows Snipping Tool / Greenshot  
**Format:** `.png` (lossless for UI)  
**Resolution:** 1920x1080 (2x for Retina displays)  
**Location:** `docs/assets/screenshots/`

**Naming Convention:**
```
feature-name_state_viewport.png

Examples:
dashboard_default_desktop.png
knowledge-graph_hover-active_desktop.png
achievements_unlock-animation_mobile.png
```

**Where to Use:**
- PRD feature descriptions
- README hero images
- Walkthrough docs
- GitHub releases

### Screen Recordings (GIFs/Videos)

**Tool:** ScreenToGif (Windows) / LICEcap  
**Format:** `.webp` (browser recordings), `.gif` (short clips)  
**Duration:** 5-15 seconds per clip  
**Location:** `docs/assets/recordings/`

**What to Record:**
- User interactions (click, hover, drag)
- Animations (page transitions, confetti)
- End-to-end flows (login → dashboard → graph)

**Naming Convention:**
```
feature-name_action.webp

Examples:
knowledge-graph_node-click-navigation.webp
achievement_unlock-confetti.webp
search_cmd-k-flow.webp
```

---

## Integration in Markdown

### Screenshots
```markdown
![Dashboard Mission Control](/docs/assets/screenshots/dashboard_default_desktop.png)
*Figure 1: Mission Control dashboard showing sprint progress and XP tracking*
```

### Recordings (Browser Tool Auto-Captures)
```markdown
![Knowledge Graph Interaction](../../artifacts/knowledge_graph_demo.webp)
*Demonstration: Clicking a node opens floating note panel*
```

### Carousels (Multiple Related Images)
````markdown
````carousel
![Desktop View](/docs/assets/screenshots/dashboard_desktop.png)
<!-- slide -->
![Mobile View](/docs/assets/screenshots/dashboard_mobile.png)
<!-- slide -->
![Tablet View](/docs/assets/screenshots/dashboard_tablet.png)
````
````

---

## Action Items

### Immediate (This Week)
1. **Capture Dashboard** - Default state, desktop resolution
2. **Capture Knowledge Graph** - Show node colors and layout
3. **Interactive Features** - Hover states, click handlers
4. **Dark Mode** - Show UI in dark theme
5. **Mobile Responsive** - Show layout on narrow viewport

**Sprint 2 Recording Targets:**
6. **Gamification** - Achievement unlock animations
7. **Before/After comparisons** - Show F1 vs F2 improvements

### Long-term (Ongoing)
8. **Update on feature changes** - Re-capture when UI evolves
9. **Before/After comparisons** - Show F1 vs F2 improvements
10. **Error states** - Document edge cases visually

---

## Storage & Organization

```
docs/
├── assets/
│   ├── screenshots/
│   │   ├── dashboard/
│   │   │   ├── dashboard_default_desktop.png
│   │   │   ├── dashboard_default_mobile.png
│   │   │   └── dashboard_achievement-popup.png
│   │   ├── knowledge-graph/
│   │   ├── achievements/
│   │   └── search/
│   ├── recordings/
│   │   ├── knowledge-graph_interaction.webp
│   │   ├── achievement_unlock.webp
│   │   └── search_cmd-k.webp
│   └── diagrams/
│       └── architecture.png (mermaid exports)
```

**File Size Limits:**
- Screenshots: <500KB each (optimize with TinyPNG)
- GIFs: <2MB each (use webp or short loops)
- Videos: <5MB each (compress with HandBrake)

---

## Best Practices

### Capture Quality
✅ **Do:**
- Use consistent window size (1920x1080)
- Capture with realistic data (not "Lorem ipsum")
- Show cursor for interaction GIFs
- Include browser chrome for context

❌ **Don't:**
- Capture dev tools or terminal windows
- Use outdated UI (re-capture after redesigns)
- Include personal data or API keys
- Over-compress (blurry screenshots)

### Annotation
- Use red arrows for "click here"
- Use orange highlights for key elements
- Add callout boxes for explanations
- Keep annotations minimal (let UI speak)

---

## Automation (Future)

### Playwright Test Screenshots
```typescript
// Auto-capture screenshots during E2E tests
test('Dashboard loads correctly', async ({ page }) => {
  await page.goto('/dashboard');
  await page.screenshot({ 
    path: 'docs/assets/screenshots/dashboard_default_desktop.png' 
  });
});
```

### GitHub Actions Integration
```yaml
# Auto-update screenshots on major PRs
name: Update Screenshots
on:
  pull_request:
    labels: [ui-change]
jobs:
  capture:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm run test:screenshots
      - uses: stefanzweifel/git-auto-commit-action@v4
```

---

**Next Steps:**
1. Capture Priority 1 screenshots this week
2. Add to `prds/00-vault-overview-prd.md`
3. Create GitHub Release with visual showcase

**See Also:** Browser recordings are automatically saved to artifacts directory when using `browser_subagent` tool.
