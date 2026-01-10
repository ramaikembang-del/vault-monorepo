# F&B Growth Dashboard - Presentation Package

## Overview

This directory contains presentation materials for communicating the F&B 12Bn Growth Dashboard project to different stakeholders.

## Available Presentations

### Option 1: Comprehensive Deck
**File:** [[biz/presentations/company-pitch/01-comprehensive-deck-script|Comprehensive Deck Support]]
**Audience:** Mixed (executives, developers, AM)
**Duration:** 30-45 minutes
**Use Case:** Project kickoff, stakeholder alignment
**Coverage:** Complete project from vision to implementation

### Option 2: Audience-Specific Decks

#### For Executives
**File:** [[biz/presentations/company-pitch/04-executive-summary|Executive Summary]]
**Audience:** C-level, Finance, GM
**Duration:** 10 minutes (5 slides)
**Use Case:** Budget approval, executive briefing
**Focus:** Business value, ROI, timeline

#### For Product/Users
**File:** [[biz/presentations/product-demos/02-product-walkthrough|Product Walkthrough]]
**Audience:** Product team, Assistant Manager (end user)
**Duration:** 20 minutes (12 slides)
**Use Case:** User training, feature demonstration
**Focus:** Daily workflows, tab-by-tab features

#### For Developers
**File:** [[biz/presentations/product-demos/04-technical-handoff|Technical Handoff]]
**Audience:** BI developers, data engineers
**Duration:** 30 minutes (15 slides)
**Use Case:** Development kickoff, technical onboarding
**Focus:** Data model, DAX, build priorities

### Supporting Materials

**One-Pager:** [[biz/presentations/company-pitch/06-one-pager-executive|One Pager]]
Quick reference summary for distribution

**Visual Storyboard:** [[biz/presentations/product-demos/05-visual-storyboard|Visual Storyboard]]
Key slide mockups and three-tier approach visuals

---

## How to Use

1. **For Initial Approval:** Start with `05-one-pager-executive.md` → then `02-executive-summary.md`
2. **For Project Kickoff:** Use `01-comprehensive-deck.md` with all stakeholders present
3. **For Development:** Developers use `04-technical-handoff.md` + actual docs (`/specs`, `/planning`)
4. **For User Training:** AM uses `03-product-walkthrough.md`

---

## Project Documentation Reference

All presentations reference these core documents:

| Document | Purpose |
|----------|---------|
| [[products/01-power-bi-template/specifications/core/04-implementation-subset|Implementation Plan]] | What to build (~25 metrics/tab) |
| [[products/01-power-bi-template/specifications/core/03-metrics-catalog|Metrics Specs]] | Full catalog (~150 metrics) |
| [[products/01-power-bi-template/specifications/technical/03-design-ux-specifications|UI/UX Specs]] | Visual design |
| [[products/01-power-bi-template/specifications/technical/02-database-schema|Data Blueprint]] | SQL + DAX implementation |
| [[biz/departments/operations/deployment/01-deployment-guide|Deployment Guide]] | Deployment guide |

---

## Presentations

Company presentations, pitch decks, and demo materials.

---

## Company Pitch
- [[biz/presentations/company-pitch/05-master-deck|Master Deck]] - Comprehensive company presentation
- [[biz/presentations/company-pitch/04-executive-summary|Executive Summary]] - One-pager for executives
- [[biz/presentations/company-pitch/01-comprehensive-deck-script|Investor Pitch]] - For investors/fundraising
- [[biz/presentations/presentations|Version History]] - Track deck versions

## Product Demos
- [[biz/presentations/product-demos/02-product-walkthrough|Ecosystem Walkthrough]] - Full ecosystem demo
- [[biz/presentations/product-demos/02-product-walkthrough|Product Walkthrough]] - Power BI Dashboard demo
- [[biz/presentations/product-demos/05-visual-storyboard|Visual Storyboard]] - Visual mockups

**Product-specific demos:** See each product folder (e.g., `products/power-bi-dashboard/sales/`)

## Partner Presentations
- POS Partnership Pitch (see partner-presentations directory)
- Integration Partner Pitch (see partner-presentations directory)

## Presentation Templates
- [[biz/presentations/templates/templates|Presentation Template]] - Standard deck template
- [[biz/presentations/templates/templates|Script Template]] - Presentation script template

---

## Presentation Guidelines

- **Always use latest version** - Check Version History before presenting
- **Customize for audience** - Exec summary for C-level, full deck for deep dive
- **Practice with script** - Use script templates for consistency
- **Update after feedback** - Document changes in Version History

---

**Last Updated: 2026-01-04

## Presentation Tips

**For Executives:**
- Lead with business impact (revenue visibility, decision speed)
- Show the "before vs after" scenario
- Emphasize: "dashboard pays for itself if we close the 12Bn gap 1 week faster"

**For Product/AM:**
- Demo with actual mockups from file 07
- Walk through a day in the life (morning check → end of day → weekly meeting)
- Highlight: "built for one-screen, mobile-ready"

**For Developers:**
- Start with data model diagram
- Reference actual file paths (not abstract concepts)
- Emphasize: "File 06 = build first, File 05 = future backlog"

---

Generated: 2025-12-22
Version: 1.0
Status: Ready for use
