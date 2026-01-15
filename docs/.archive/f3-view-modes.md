# F3: Graph View Modes
**Status:** ✅ COMPLETED (Sprint 1) / PIVOTED  
**Feature:** Floating Note Panel Implementation

---

## Overview

F3 introduced advanced view modes for the knowledge graph. The original plan included split-view functionality, but we pivoted to a floating note panel approach for better UX and flexibility.

---

## Original Plan (Split-View)

### View Modes Planned

#### Mode 1: Full-Window (Default)
Graph fills entire viewport.

#### Mode 2: Side-by-Side Split View
```
┌─────────────────────────────────────────────┐
│ Graph (60%)   │  Document Reader (40%)    │
│               │                             │
│   ⚫ Market    │  # GTM Strategy            │
│    ╱│╲       │  Sprint 1 focuses on...    │
│   ● ● ●      │                             │
│               │  [Read Full Doc]           │
└─────────────────────────────────────────────┘
```
- Resizable divider
- Click node → Document loads in right pane

#### Mode 3: Floating Note View (IMPLEMENTED ✅)
```
┌─────────────────────────────────────────────┐
│  Graph (dimmed background)                  │
│                              ┌─────────────┐│
│   ⚫ Market                  │ 📄 GTM Str │││
│    ╱│╲      ╱              │ ──────────│││
│   ● ● ●    ● (draggable   │ Sprint 1... │││
│             panel)          │             │││
│                              │ [Full 🔗]  │││
│                              └─────────────┘│
└─────────────────────────────────────────────┘
```

---

## What Was Actually Implemented

### Floating Note Panel ✅
- **Draggable overlay** card
- Graph remains interactive (dimmed slightly)
- Preview with "Read Full" link
- Framer Motion animations
- React-draggable for positioning

### Why We Pivoted

**Split-view deferred because:**
1. Floating panels provide more layout freedom
2. Graph visibility remains paramount
3. Notion-style UI is more modern
4. Less complex state management

**What survived:**
- Core toggle between graph-only and graph+notes
- Smooth transitions
- Document preview functionality

---

## Technical Implementation

### Stack Used
```bash
npm install framer-motion
npm install react-draggable
```

### Component
```tsx
// components/graph/FloatingNote.tsx
import { motion } from 'framer-motion';
import Draggable from 'react-draggable';

export function FloatingNote({ docId, onClose }) {
  return (
    <Draggable>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="floating-note-panel"
      >
        {/* Document preview content */}
      </motion.div>
    </Draggable>
  );
}
```

---

## Feature Status

| Feature | Planned | Implemented | Notes |
|---------|---------|-------------|-------|
| Full-window mode | ✅ | ✅ | Default view |
| Split-view | ✅ | ❌ | Deferred to future |
| Floating notes | ✅ | ✅ | Primary implementation |
| Drag & drop | ✅ | ✅ | Smooth animations |
| localStorage | ✅ | ✅ | Persists preferences |

---

## Future Enhancements

**If split-view is needed later:**
- Use `react-resizable-panels`
- Implement 60/40 → 50/50 → 70/30 presets
- Keyboard shortcuts for layout switching

---

**Last Updated:** January 15, 2026  
**See Also:** `f2-knowledge-graph.md`, `f4-floating-panels.md`

