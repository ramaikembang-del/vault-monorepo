# Vault Documentation

**The "Digital Office" and "Second Brain" for the Clario Co-Founders**

---

## 📍 Quick Navigation

### For Developers
- **[Status Dashboard](STATUS.md)** - Current progress mapping
- **[Current Sprint Status](roadmap/current-sprint.md)** - Scattered between Sprint 1 & 2
- **[Sprint Archive](roadmap/sprint-archive.md)** - Completed work (Sprint 1 + scattered specs)
- **[Upcoming Work](roadmap/upcoming-work.md)** - Sprint 2-7 planning

**Sprint Task Files:**
- **[Sprint 1: Rapid Prototype](tasks/sprint-1-iteration.md)** - ✅ Complete (Stage 4)
- **[Sprint 2: Enhanced Core](tasks/sprint-2-planned.md)** - 📋 Planned (Dashboard, Biz Lab, Navigation)
- **[Sprint 3: Products Lab](tasks/sprint-3-planned.md)** - 📋 Planned (Workbench, Experiments)
- **[Sprint 4: Studio Tuner](tasks/sprint-4-planned.md)** - 📋 Planned (Themes, Layouts, Accessibility)
- **[Sprint 5: App Settings](tasks/sprint-5-planned.md)** - 🔄 85% Complete (UNCOMMITTED!)
- **[Sprint 6: Final v1.0](tasks/sprint-6-planned.md)** - 📋 Planned (Navigation polish, v1.0 release)
- **[Sprint 7+: Advanced](tasks/sprint-7-planned.md)** - 📋 Planned (Post-v1.0 features)

### For Planning
- **[Vault Overview PRD](prds/00-vault-overview-prd.md)** - High-level architecture
- **[Future Features](roadmap/future-features.md)** - Advanced features catalog
- **[Domain Reference](guides/DOMAINS.md)** - URL and routing guide

### For Implementation
- **[Specifications](specifications/)** - Complete technical specs (10 files)
  - [Core Platform](specifications/core-platform.md) - Infrastructure
  - [Dashboard System](specifications/dashboard-system.md) - Mission Control
  - [Biz Lab System](specifications/biz-lab-system.md) - Strategic Brain
  - [Products Lab System](specifications/products-lab-system.md) - Workbench
  - [Global Navigation](specifications/global-navigation-system.md) - Command Palette
  - [Studio Tuner](specifications/studio-tuner-system.md) - Themes & Layouts
  - [App Settings](specifications/app-settings-system.md) - Settings Hub

---

## 📁 Directory Structure

```
docs/
├── README.md (this file)
├── STATUS.md - Feature tracking dashboard
│
├── guides/ - Developer guides (workflows, domains, implementation history)
├── prds/ - Product Requirement Documents (PRD 00, 10-14)
├── roadmap/ - Strategic planning
│   ├── current-sprint.md - Current state (scattered between Sprint 1 & 2)
│   ├── sprint-archive.md - Completed work (Sprint 1 + scattered specs)
│   ├── upcoming-work.md - Sprint 2-7 planning
│   └── future-features.md - Advanced features catalog
│
├── specifications/ - Complete technical specs (10 files)
│   ├── core-platform.md - Infrastructure (Auth, Deployment, Navigation)
│   ├── dashboard-system.md - Mission Control Dashboard
│   ├── biz-lab-system.md - Strategic Brain & Knowledge Graph
│   ├── products-lab-system.md - Component Workbench & Experiments
│   ├── global-navigation-system.md - Command Palette & Shortcuts
│   ├── studio-tuner-system.md - Themes, Layouts, Accessibility
│   ├── app-settings-system.md - Settings Hub & Workflow Profiles
│   └── ... (3 more files)
│
├── tasks/ - **Actionable Sprint Task Files**
│   ├── sprint-1-iteration.md - ✅ Complete (Rapid Prototype)
│   ├── sprint-2-planned.md - 📋 Planned (Enhanced Core Features)
│   ├── sprint-3-planned.md - 📋 Planned (Products Lab)
│   ├── sprint-4-planned.md - 📋 Planned (Studio Tuner)
│   ├── sprint-5-planned.md - 🔄 85% Complete (UNCOMMITTED!)
│   ├── sprint-5-implementation-status.md - Assessment of uncommitted work
│   ├── sprint-6-planned.md - 📋 Planned (Final v1.0 Polish)
│   ├── sprint-7-planned.md - 📋 Planned (Post-v1.0 Advanced Features)
│   └── sprint-1/testing/ - E2E Test Documentation (100% ✅)
│
└── .archive/ - Legacy files
```

---

## 🎯 Current Status

**Current State:** 🔄 Scattered between Sprint 1 & 2
**Sprint 1 (v0.1.0):** ✅ Complete (Rapid Prototype - not yet in production)
**Scattered Work:** ✅ PRDs 10-14 specifications created (4 hours)
**Sprint 5 (v0.8.0):** 🔄 85% Complete (3,300 lines UNCOMMITTED!)

| Sprint | Version | Status | Focus |
|--------|---------|--------|-------|
| **Sprint 1** | **v0.1.0** | ✅ COMPLETE | Rapid Prototype (4.5h) |
| **Sprint 2** | **v0.2.0** | 📋 PLANNED | Enhanced Core Features (Dashboard, Biz Lab, Navigation) |
| **Sprint 3** | **v0.4.0** | 📋 PLANNED | Products Lab (Workbench, Experiments, Tokens) |
| **Sprint 4** | **v0.6.0** | 📋 PLANNED | Studio Tuner (Themes, Layouts, Accessibility) |
| **Sprint 5** | **v0.8.0** | 🔄 85% UNCOMMITTED | App Settings (Workflow Profiles, Settings Hub) |
| **Sprint 6** | **v1.0.0** | 📋 PLANNED | Final v1.0 Polish (Navigation, System Integration) |
| **Sprint 7+** | **v1.x** | 📋 PLANNED | Advanced Features (Collaboration, AI, Performance) |

**⚠️ IMPORTANT:** Sprint 5 has 3,300 lines of uncommitted code ready to commit!

See **[roadmap/current-sprint.md](roadmap/current-sprint.md)** for current state details.

---

## 🚀 Getting Started

1. **Check Current State:** Read [roadmap/current-sprint.md](roadmap/current-sprint.md) to see where we are.
2. **Review Sprint 5 Status:** Check [tasks/sprint-5-implementation-status.md](tasks/sprint-5-implementation-status.md) for uncommitted work.
3. **Pick Next Task:** Choose from Sprint 2-6 task files in `tasks/`.
4. **Read the Spec:** Open the relevant specification in `specifications/`.
5. **Commit Sprint 5:** Consider committing the 3,300 lines of Settings Hub code!
