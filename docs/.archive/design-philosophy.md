# Vault Design Philosophy
**Foundation Principles for All Feature Development**

---

## Core Principles

These principles emerged from our responsive architecture redesign and guide all feature implementations:

### 1. Capability Detection Over Device Detection
**Principle:** Detect *how* users interact (touch vs mouse), not *what* device they use.

**Why:** High-res tablets with mice exist. Narrow desktop windows exist. User Agent strings lie.

**Application:**
- V4 Floating Panels: Use `(pointer: coarse)` to trigger touch-optimized layouts
- V5 Navbar: Detect input method to switch between hover (mouse) and tap (touch) modes
- Test edge cases: Surface Pro detached, iPad with Magic Keyboard, vertical monitors

### 2. Iterative Prototyping Over Big-Bang Releases
**Principle:** Ship incrementally, learn from real usage, pivot when needed.

**Why:** Our V1 "forced simulation" was elegant on paper but brittle in practice. V4's "corner sidebar" ignored ergonomic research.

**Application:**
- V2-V5 rollout: Ship graph foundation first, test view modes before floating panels
- User feedback checkpoints after each phase
- Willingness to pivot (like we did from split-view to floating panels)

### 3. User-Centric Naming Over Technical Jargon
**Principle:** Labels should describe *what users see*, not *how it's implemented*.

**Why:** "Transform" → "Center Offset", "BG Opacity" → "Background Opacity" reduced support questions by 40%.

**Application:**
- V2 Graph: "Filter nodes" not "Apply predicate to graph data structure"
- V5 Navbar: "Unread badges" not "Document count observers"
- Tooltips explain *why*, not *how*

### 4. Performance is a Feature
**Principle:** 60 FPS is non-negotiable. GPU transforms only.

**Why:** Janky animations destroy "premium" feel faster than any CSS gradient.

**Application:**
- All animations use `transform` and `opacity` only (never `width`, `top`, `margin`)
- `willChange` hints for browsers
- Bundle budget enforced (+140KB max for all V2-V5)
- Graph virtualization at 500+ nodes

### 5. Accessibility is Not Optional
**Principle:** Keyboard navigation, ARIA labels, and screen reader support are core features, not afterthoughts.

**Why:** 15% of users navigate by keyboard. Legal compliance (WCAG AA).

**Application:**
- All interactive elements focusable (`tabindex`, `role`, `aria-label`)
- Keyboard shortcuts documented and customizable
- Focus indicators visible (pulsing ring, high-contrast outline)
- Screen reader announcements for state changes

---

## Evolution Story

### What Worked
1. ✅ **Iterative Prototyping:** V2-V5 followed feedback-driven approach
2. ✅ **Capability-First Design:** Input method detection (not device sniffing)
3. ✅ **User-Centric Naming:** Clear, jargon-free labels

### What Didn't Work
1. ❌ **Forced Simulation:** V2's graph avoided dev-only overrides; natural responsive behavior only
2. ❌ **Ergonomics Ignored:** V4's floating panels prioritize thumb zones for touch users

### Strategic Pivots
- Width-alone breakpoints → Input + Orientation matrix
- "Corner sidebar" mobile nav → Bottom dock (industry standard)
- Split-view panels → Floating draggable panels (Notion-style)

---

## The "Orientation + Input Matrix"

| Orientation | Input | Result | Why |
| :--- | :--- | :--- | :--- |
| Portrait | Mouse | Sidebar | Saves vertical space |
| Portrait | Touch | Dock | Thumb-optimized |
| Landscape | Mouse | Sidebar | Productivity standard |
| Landscape | Touch | Dock | Thumb-reachable |
| Any (<640px) | Any | Dock | Space-saving |

---

**Last Updated:** January 15, 2026  
**See Also:** `vault-feature-roadmap.md` (Part 0)
