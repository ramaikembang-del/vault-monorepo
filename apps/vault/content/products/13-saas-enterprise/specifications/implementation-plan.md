# Dashboard Implementation Plan

## Purpose
This document filters the comprehensive [[products/13-saas-enterprise/specifications/metrics-specification|06-metrics-specification.md]] (~150 metrics) down to **what actually goes on the Power BI dashboard** for daily use by an Assistant Manager.

**Design Principle:** One screen per tab = full decision context.

---

## Metric Priority Tiers

| Tier | Count | Visibility | Check Frequency | Purpose |
|------|-------|------------|-----------------|---------|
| ** Critical** | 5-10 per tab | Always visible on main screen | Daily (morning) | Action triggers |
| ** Important** | 10-15 per tab | Visible with 1 click/scroll | Weekly | Trend monitoring |
| ** Reference** | Rest | Drill-through/tooltip | Ad-hoc | Root cause analysis |

---

## Tab 1: Command Center (Revenue)

### Critical Metrics (Main Screen)

| Visual | Metric | Why Critical | Update Frequency |
|--------|--------|--------------|------------------|
| **Header Card 1** | Gap to 12Bn Target | Primary objective | Real-time |
| **Header Card 2** | Required Daily Run Rate | Action baseline | Daily |
| **Header Card 3** | Today's Revenue | Performance check | Real-time |
| **Header Card 4** | MTD vs Target % | Pacing indicator | Daily |
| **Waterfall Chart** | Revenue Build-up (5 buckets) | See composition | Daily |
| **Heatmap** | Revenue by Hour/Day | Scheduling insight | Weekly |

**Total: 10 metrics** shown prominently.

### Important Metrics (1-Click Drill)

| Visual | Metric | Access Method |
|--------|--------|---------------|
| Tooltip on Waterfall | Upsell % of Revenue | Hover |
| Tooltip on Waterfall | Discount Rate | Hover |
| Side Panel (Slicer) | Weekly Comparison | Toggle |
| Drill-through Card | Best Day This Month | Click date |
| Drill-through Card | YoY Growth % | Click comparison |
| **Table** | **Seasonal Menu Performance** | **Tab below heatmap** |
| **Pie Chart** | **Revenue by Reservation Category** | **Side panel** |

**Total: 7 metrics** available on demand.

**NEW Metrics Added:**
- **Seasonal Menu Performance:** Shows top 10 items by MenuSeason (Q1-2025, Q2-2025, etc.) with Quantity Sold and Total Revenue
- **Reservation Category Mix:** Breakdown of revenue by Private Event, Community, Wedding & Engagement, Corporate & Institution

### Reference Metrics (Spec Only)
All other Section 1 metrics remain in `06-metrics-specification.md` for advanced analysis.

---

## Tab 2: Wolf Pack (Staff)

### Critical Metrics (Main Screen)

| Visual | Metric | Why Critical | Update Frequency |
|--------|--------|--------------|------------------|
| **Leaderboard (Top 10)** | Performance Score | Team ranking | Daily |
| **Header Card** | Team Avg Performance | Baseline | Daily |
| **Header Card** | Top Performer | Recognition | Daily |
| **Icon Badges** | Tier Level () | Quick visual | Daily |
| **Alert Banner** | Late Count (Today) | Discipline issue | Real-time |
| **Alert Banner** | Unresolved Complaints | Service issue | Real-time |

**Total: 6 primary visuals** (Leaderboard shows Performance Score only).

### Important Metrics (Drill-through Card)

Click on any staff name → Shows these 8 metrics:

| Metric | Display | Purpose |
|--------|---------|---------|
| Gap to Target | Currency + Progress Bar | Motivation |
| Gap to Bonus | Currency + Icon (/) | Incentive |
| Upsell Count | Number + Trend ↑↓ | Behavior |
| Service Speed | Minutes + Team Avg | Efficiency |
| Positive Mentions | Count + Badge | Recognition |
| Discipline Score | % + Breakdown | Coaching |
| Rank Position | #X of 20 | Context |
| Improvement Trend | ↑↓% vs Last Week | Growth |

**Total: 8 metrics** per staff drill-through.

### Reference Metrics (Spec Only)
- Team performance variance
- Peer comparison percentiles
- Achievement milestones
- Weakness/strength indicators

---

## Tab 3: Loyalty Loop (Customer)

### Critical Metrics (Main Screen)

| Visual | Metric | Why Critical | Update Frequency |
|--------|--------|--------------|------------------|
| **Funnel Chart** | First Timer → VIP (4 stages) | Acquisition pipeline | Weekly |
| **Header Card** | NPS Score | Satisfaction | Weekly |
| **Header Card** | Repeat Rate | Retention | Weekly |
| **Header Card** | Lapsed VIPs | At-risk count | Daily |
| **Scatter Plot** | Avg Check by Segment | Value comparison | Weekly |
| **Word Cloud** | Top Review Keywords | Sentiment | Weekly |

**Total: 9 metrics** (Funnel = 4, Cards = 3, Scatter = 1, Cloud = visual).

### Important Metrics (Tooltips/Drill)

| Metric | Access Method |
|--------|---------------|
| VIP Contribution % | Tooltip on Funnel |
| Lost Revenue Risk | Tooltip on Lapsed VIPs |
| Promoter % | Tooltip on NPS Card |
| Detractor % | Tooltip on NPS Card |
| Food/Service/Staff/Atmosphere Scores | Drill-through (click NPS) |
| **Complaint Category Breakdown** | **Stacked bar chart below NPS** |
| **Multi-Tag Analysis** | **Tooltip on complaint bar** |

**Total: 11 metrics** available on interaction.

**NEW Metrics Added:**
- **Complaint Category Breakdown:** Stacked bar showing distribution of complaints across 7 categories (Cleanliness, Menu Variation, Service, Product Quality, Price/Discount, General Experience, Specific Experience)
- **Multi-Tag Analysis:** Shows how many complaints have 2+ categories assigned (complexity indicator)

### Reference Metrics (Spec Only)
- Customer lifetime calculations
- Journey metrics (conversion paths)
- Spend behavior analysis
- **Reservation Conversion Funnel** (Bookings → Confirmed → Completed/Cancelled/No-Show)
- **No-Show Rate by Category**
- **Revenue Variance** (Estimated vs Actual for completed bookings)

---

## Visual Budget per Tab

**Power BI 16:9 Screen = ~6-8 major visuals max for readability**

| Tab | Main Visuals | Count | Fits? |
|-----|--------------|-------|-------|
| Command Center | Cards (4) + Waterfall (1) + Heatmap (1) | 6 | |
| Wolf Pack | Cards (3) + Leaderboard (1) + Alerts (2) | 6 | |
| Loyalty Loop | Cards (3) + Funnel (1) + Scatter (1) + Cloud (1) | 6 | |

---

## Implementation Guideline

### For Each Tab, Build In This Order:

1. **Critical visuals first** - Main screen layout
2. **Test on actual data** - Does it fit 16:9?
3. **Add Important metrics** - Drill-throughs/tooltips
4. **Reference back to 06-metrics-spec** - When users ask "what else can we track?"

### Daily Use Pattern (AM Persona):

**7:00 AM - Morning Check (5 minutes):**
- Tab 1: Gap to target, Today's run rate
- Tab 2: Any late staff? Top performer?
- Tab 3: Lapsed VIPs count

**End of Day - Review (10 minutes):**
- Tab 1: Did we hit today's target?
- Tab 2: Click staff with issues → Drill-through
- Tab 3: NPS trend

**Weekly Management Meeting (30 minutes):**
- All Important metrics
- Reference spec for deep dives

---

## New Metrics Added (Latest Update)

The following metrics were added after initial planning to enhance operational analytics:

### Tab 1 Additions (Revenue):
| Metric | Tier | Visual Type | New Fields Required |
|--------|------|-------------|---------------------|
| Seasonal Menu Performance | \ud83d\udfe1 Important | Table | MenuCategory, MenuSeason |
| Revenue by Reservation Category | \ud83d\udfe1 Important | Pie Chart | ReservationCategory |

**Use Cases:**
- Track which seasonal items drive revenue each quarter
- Understand mix between walk-ins vs event bookings

### Tab 3 Additions (Customer):
| Metric | Tier | Visual Type | New Fields Required |
|--------|------|-------------|---------------------|
| Complaint Category Breakdown | \ud83d\udfe1 Important | Stacked Bar | ComplaintCategory1-3 |
| Multi-Tag Complaint Analysis | \ud83d\udfe1 Important | Tooltip | ComplaintCategory1-3 |

**Use Cases:**
- Identify root causes of complaints (Service vs Cleanliness vs Product Quality)
- See complexity of complaints (single issue vs multiple systemic issues)

### Reference Metrics (Future Expansion):
| Metric | Tier | Data Source | New Fields Required |
|--------|------|-------------|---------------------|
| Reservation Conversion Funnel | \u26aa Reference | Bookings.csv | NEW TABLE |
| No-Show Rate by Category | \u26aa Reference | Bookings.csv | NEW TABLE |
| Revenue Variance (Estimate vs Actual) | \u26aa Reference | Bookings.csv | NEW TABLE |

**Use Cases:**
- Marketing: Track booking → completion rate to optimize reservation process
- Operations: Identify which event types have high no-show rates
- Finance: Assess accuracy of revenue forecasting for events

**Data Model Impact:**
- Sales_Data: +3 columns (MenuCategory, MenuSeason, ReservationCategory)
- Feedback: +3 columns (ComplaintCategory1, ComplaintCategory2, ComplaintCategory3)
- **NEW TABLE:** Bookings.csv (11 columns for reservation tracking)

---

## Summary

| Document | Purpose | Metrics | Audience |
|----------|---------|---------|----------|
| **06-metrics-specification.md** | Complete catalog | ~150 | Data analysts, developers |
| **08-dashboard-implementation-plan.md** (This) | What to build | ~28 per tab | Power BI builder, AM |

**Next Step:** Use this document to build the actual Power BI visuals per the [[products/13-saas-enterprise/specifications/ui-ux-design-specs|05-ui-ux-design-specs.md]].

---

## Related

- **[[products/13-saas-enterprise/13-saas-enterprise|SaaS Enterprise Product]]** - Product overview
- **[[products/13-saas-enterprise/specifications/metrics-specification|Metrics Specification]]** - Complete metrics catalog
- **[[products/13-saas-enterprise/specifications/ui-ux-design-specs|UI/UX Design Specs]]** - Visual design specifications
- **[[products/13-saas-enterprise/specifications/COMPLETE-METRICS-LIST|Complete Metrics List]]** - All 191 metrics enumerated
- **[[products/13-saas-enterprise/technical/deployment-guide|Deployment Guide]]** - Deployment and rollout
