# 07 - UI/UX Technical Specifications: F&B 12Bn Growth Dashboard

This document outlines the detailed visual and interaction specifications for the Power BI dashboard. It bridges the gap between the Functional PRD (`02-product requirements document.md`) and the final build.

## Metrics Documentation Reference

**This document provides:** Visual layouts and interaction patterns for implementing metrics

| Document | Purpose | Reference For |
|----------|---------|---------------|
| **[[products/13-saas-enterprise/specifications/06-dashboard-implementation-plan|06-dashboard-implementation-plan.md]]** | Operational metrics (~25/tab) | **WHAT to display** (metric list) |
| **This Document (07)** | Visual specifications | **HOW to display** (layout, color, interactions) |
| **[[products/13-saas-enterprise/specifications/metrics-specification|05-metrics-specification.md]]** | Complete catalog (~150 metrics) | Future expansion options |

**Visual Budget:** 6-8 major visuals per tab maximum to maintain "one-screen" philosophy. See Section 2 for layouts.

---

## 1. Design System

### A. Color Palette (Dark Mode "Growth" Theme)
To maintain a premium, data-dense look suitable for low-light environments (bar/restaurant floors).

| Usage | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Background** | `Void Navy` | `#0f172a` | Main canvas background (Slate 900) |
| **Surface** | `Card Slate` | `#1e293b` | Container background for visuals (Slate 800) |
| **Primary** | `Electric Blue` | `#3b82f6` | Main metric bars, active states (Blue 500) |
| **Accent** | `Growth Gold` | `#f59e0b` | Top rank capability, VIP highlights (Amber 500) |
| **Success** | `Profit Green` | `#10b981` | Positive variance, Target hit (Emerald 500) |
| **Danger** | `Alert Red` | `#ef4444` | Negative variance, "Zombie" customers (Red 500) |
| **Text (Pri/Sec)** | `White / Grey` | `#f8fafc` / `#94a3b8` | Primary and Secondary text |

### B. Typography
* **Font Family:** `Segoe UI` (Native Power BI) or `DIN` (if available in corporate branding).
* **Hierarchy:**
 * **Page Title:** 24pt, Bold, `#f8fafc`
 * **KPI Value:** 32pt, Bold, `#f8fafc` (Responsive scaling down to 24pt on mobile)
 * **KPI Label:** 10pt, Semi-Bold, Uppercase, Tracking +1, `#94a3b8`
 * **Body/Data Labels:** 10pt, Regular, `#cbd5e1`

### C. Iconography
Use **Fluent UI** icons (standard in Power BI):
* **Sales:** `Money`, `TrendingUp`, `ShoppingCart`
* **Staff:** `People`, `Award`, `Timer`
* **Loyalty:** `Heart`, `Feedback`, `Warning`

---

## 2. Layout Specifications

### A. Desktop Canvas (1920 x 1080 px)

**Grid Structure:**
* **Sidebar (Left, Fixed):** `260px` width. Navigation & Global Slicers.
* **Header (Top, Fixed):** `120px` height. Logo, Page Title, Last Refresh Time.
* **Main Content Area:** Flexible grid (3 Columns x 2 Rows usually).
* **Gaps (Padding):** `16px` between cards. `20px` outer margins.

**Wireframe concept:**
```
[ Sidebar ] [ Header: Title | Date Slicer | Last Refresh ]
[ Nav ] [ KPI 1 ] [ KPI 2 ] [ KPI 3 ] [ KPI 4 ]
[ Nav ] [ Main Visual Area (60%) ] [ Side Panel ]
[ Nav ] [ Main Visual Area (60%) ] [ (40%) ]
```

**Global Slicers (Sidebar):**
* **Date Picker:** Relative (Last 7 Days) + Custom Range.
* **Shift Toggle:** `All Day` | `Lunch` | `Dinner`. (Critical for AM to evaluate shift-leads).

### B. Mobile Layout (375 x 812 px - iPhone X/13/14)

**Vertical Scrolling Flow:**
1. **Header:** Logo + "Current Run Rate" (Sticky Top).
2. **Section 1 (Pulse):** 4 key KPI cards (2x2 grid).
3. **Section 2 (Action):** "Top 5 Staff" Leaderboard (List view).
4. **Section 3 (Planning):** "Reservations Tonight" Count.
5. **Section 4 (Alerts):** "VIPs at Risk" count.

*Constraint:* No complex matrixes. Convert all Grids/Matrixes to "Multi-row Cards" or simple Bar Charts.

---

## 3. Detailed Component Specifications

### Tab 1: Command Center (Sales)

**Visual Budget:** 6 main visuals (one-screen philosophy)

**1. "Growth Engine" Header Cards** [CRITICAL - File 06 Section 1.1]
* **KPI:** `Required Daily Run Rate`
 * *Logic:* (Target - Actual) / Days Left.
 * *Visual:* Big Number Card + Sparkline (Last 30 days) + **Target Pacing Line** (Dotted line showing where we *should* be).
 * *Micro-interaction:* "Info" icon on top-right reveals a tooltip with **Top 5 Product Mix** (Items contributing most to today's revenue).
 * *Conditional Formatting:* Red if `Run Rate` > `Average Daily Sales` (meaning: "We are falling behind, pace must increase").

**2. Revenue Waterfall Bridge** [CRITICAL - File 06 Section 1.2]
* **Type:** Waterfall Chart.
* **Buckets:** `Base Sales`, `+ Reservations`, `+ Upsells`, `- Discounts`.
* **Colors:** Green (Positive), Red (Negative), Blue (Total).
* **Interaction:** Click on "Upsells" filters the leaderboard to show *who* drove them.

**3. Hourly Velocity Heatmap** [IMPORTANT - File 06 Section 1.3]
* **Type:** Matrix (Rows: `DayName`, Cols: `Hour`).
* **Cell Color:** Gradient `Transparent` -> `Electric Blue`.
* **Tooltip:** Shows "Staff ID on Shift" and "Avg Wait Time" (if available).

---

### Tab 2: The Wolf Pack (Staff)

> [!NOTE]
> **Metrics Update:** Now displays **Performance Score (6 components)** instead of simple sales ranking. See [[products/13-saas-enterprise/specifications/06-dashboard-implementation-plan|`06-dashboard-implementation-plan.md`]] Section 2.1 for complete metric breakdown.

**Visual Budget:** 6 main visuals (leaderboard + drill-through + team avg)

**1. Performance Score Leaderboard** [CRITICAL - File 06 Section 2.1]
* **Type:** Table with integrated Data Bars
* **Col 1:** Rank (#1-20)
* **Col 2:** Staff Name (Drill-through enabled)
* **Col 3:** Performance Score (0-100) with gradient background
* **Col 4:** Tier Badge ( Gold / Silver / Bronze)
 * *Icon Rule:* If Rank = 1, show . If Gold tier, show
 * *Color Coding:* Gold tier = `#f59e0b`, Silver = `#94a3b8`, Bronze = `#64748b`

**2. Personal Drill-Through Card** [IMPORTANT - File 06 Section 2.2]
* *Trigger:* Right-click Staff Name > "Drill Through to Staff Detail"
* *Layout:*
 * **Left Panel (30%):**
 - Staff photo placeholder
 - Rank badge (e.g., "#3 of 20")
 - Tier icon (//)
 * **Right Panel - Top (70%):** 8 Key Metrics Grid (2x4):
 - Gap to Target (progress bar, green/red)
 - Gap to Bonus ( if met / IDR remaining)
 - Upsell Count (number + trend sparkline)
 - Service Speed (minutes, color-coded: <15 green, >20 red)
 - Positive Mentions (count from NPS >= 9)
 - Late Count (number, red if > 0)
 - Discipline Score (composite 0-100)
 - Rank Position (#X of 20)
 * **Right Panel - Bottom:** Discipline Score Breakdown (Radar Chart, 5 components)
 - Punctuality (25%)
 - No Early Outs (20%)
 - Shift Completion (25%)
 - Order Accuracy (15%)
 - Conflict Resolution (15%)

**3. Team Average Indicators** [IMPORTANT]
* **Display:** Small KPI cards showing team averages for context
* **Metrics:** Team Avg Performance Score, Team Avg Sales/Hour
* **Purpose:** Normalization reference for individual scores

---

### Tab 3: Loyalty Loop (Customer Retention)

**Visual Budget:** 6 main visuals (funnel + NPS + customer list)

**1. Patronage Funnel** [CRITICAL - File 06 Section 3.1]
* **Type:** Funnel Chart.
* **Phases:** `First Timer` -> `Returning` -> `Regular` -> `VIP`.
* **Action:** Click "VIP" to filter the "Customer List" table below.
* **Colors:** Gradient from `#94a3b8` (First Timer) to `#f59e0b` (VIP)

**2. The "Zombie" List** [IMPORTANT - File 06 Section 3.6]
* **Type:** Table.
* **FilterContext:** `Status = VIP` AND `LastVisit > 60 days`.
* **Columns:** `Customer Name`, `Last Visit Date`, `Fav Item`, `Phone Link` (mailto/tel protocol).
* **Action Prompt:** "Call to Winback" button/icon

**3. Sentiment vs. Spend Matrix** [IMPORTANT]
* **Type:** Scatter Plot.
* **X-Axis:** Average Check Size.
* **Y-Axis:** Feedback Rating (1-5).
* **Quadrants:**
 - High Spend / High Satisfaction (Top Right) - `#10b981` = "Champions"
 - High Spend / Low Satisfaction (Bottom Right) - `#ef4444` = "At Risk"
 - Low Spend / High Satisfaction (Top Left) - `#3b82f6` = "Loyalists"
 - Low Spend / Low Satisfaction (Bottom Left) - `#94a3b8` = "Detractors"

**4. NPS Score Card** [CRITICAL - File 06 Section 3.4]
* **Display:** Large number with color coding
* **Colors:** >50 = green, 0-50 = yellow, <0 = red
* **Tooltip:** Shows breakdown (% Promoters, % Passives, % Detractors)

---

## 4. Interaction & UX Nuances

* **HoverStates:** All cards should have a visual effect (Border highlight `#3b82f6` or slight shadow lift) on hover.
* **Empty States:** If a visual has no data (e.g. "No Reservations Today"), display a clean text message "No Reservations" instead of a blank graph (Use SVG overlays or Card visuals with conditional visibility).
* **Navigation:**
 * Use **Page Navigator** bookmark buttons in the sidebar for "Native App" feel (Active state: Fill `#3b82f6`, Inactive: Transparent).
* **Loading States:** Show skeleton loaders or progress indicators during data refresh
* **Drill-Through Return:** Always provide a clear "← Back to Leaderboard" button on drill-through pages

---

## 5. Implementation Priorities

**Phase 1 (Critical Visuals - ):**
- Tab 1: KPI cards, Waterfall
- Tab 2: Performance Score leaderboard
- Tab 3: Patronage Funnel, NPS Score

**Phase 2 (Important Visuals - ):**
- Tab 1: Hourly Heatmap
- Tab 2: Drill-through card with 8 metrics
- Tab 3: Customer list, Sentiment matrix

**Phase 3 (Polish):**
- Mobile layouts
- Micro-interactions
- Empty states

**Reference:** See [[products/13-saas-enterprise/specifications/06-dashboard-implementation-plan|`06-dashboard-implementation-plan.md`]] for complete metric priorities.

---

## 6. Assets Required
* **Background Image:** Subtle noise/gradient texture for the `Void Navy` background to reduce banding.
* **Company Logo:** White monochrome SVG version.
* **Staff Photos:** Placeholder avatars if actual photos unavailable (use initials on colored circles)

---

## 7. Future Expansion Considerations (File 05 Reference)

**Current Scope:** This document specifies layouts for **File 06 implementation** (~25 metrics/tab).

**Future Expansion:** File 05 contains ~150 total metrics. Below are potential additional visuals for future phases:

### Tab 1: Command Center - Additional Visuals (File 05 Section 1)
- **Week-over-Week Revenue Trend** - Line chart comparing current week vs previous weeks
- **Discount Analysis Deep Dive** - Breakdown by discount type and staff member
- **Time Period Comparisons** - YoY, MoM variance analysis cards
- **Mix Analysis** - Food/Bev/Alcohol revenue split treemap
- **Transaction Metrics** - Bills per hour, avg items per bill trends

### Tab 2: Wolf Pack - Additional Visuals (File 05 Section 2)
- **Tier Progression Timeline** - Staff movement between tiers over time
- **Team Performance Comparison** - Shift-based team comparisons
- **Coaching Insights** - Scatter plots showing improvement rates
- **Achievement Milestones** - Badge acquisition timeline per staff
- **Peer Comparison Matrix** - Heatmap showing all staff across all 6 components

### Tab 3: Loyalty Loop - Additional Visuals (File 05 Section 3)
- **Retention & Churn Analysis** - Cohort retention curves
- **Customer Lifetime Value** - Distribution histogram
- **Customer Journey Mapping** - Sankey diagram showing progression paths
- **Spend Behavior Patterns** - Day-of-week and time-of-day spending heatmaps
- **Feedback Engagement Trends** - NPS score trends over time

**Implementation Note:** These additional visuals would require multi-tab or drill-down pages to maintain the "one-screen" philosophy. Implement only when users request specific analytics beyond the core operational dashboard.

**Visual Budget Expansion:** Each future visual should be justified by user request and added to new tabs or drill-through pages, not the main operational screens.

---

## Related

- **[[products/13-saas-enterprise/13-saas-enterprise|SaaS Enterprise Product]]** - Product overview
- **[[products/13-saas-enterprise/specifications/implementation-plan|Implementation Plan]]** - What to build reference
- **[[products/13-saas-enterprise/specifications/metrics-specification|Metrics Specification]]** - Metric definitions and formulas
- **[[products/13-saas-enterprise/specifications/COMPLETE-METRICS-LIST|Complete Metrics List]]** - Full metrics catalog
- **[[products/13-saas-enterprise/specifications/enterprise-features|Enterprise Features]]** - Custom dashboards capability

