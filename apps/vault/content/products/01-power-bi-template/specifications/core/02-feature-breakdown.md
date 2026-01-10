For an F&B business scaling from **IDR 8 Bn to 12 Bn**, the leap isn't just about "selling more"-it's about **yield management, staff performance optimization, and customer retention**.

As an Assistant Manager, the user needs to move from "watching what happened" to "influencing what happens next." Here is a comprehensive specification for a high-performance Power BI Dashboard using **modular metrics framework**.

## Metrics Documentation Reference

| Document | Purpose | Metrics | Use For |
|----------|---------|---------|---------|
| [[products/01-power-bi-template/specifications/core/03-metrics-catalog|metrics-catalog.md]] | Complete modular catalog | 150 (12 modules) | **PRIMARY REFERENCE** - All metrics organized by module |
| [[products/01-power-bi-template/specifications/core/04-implementation-subset|implementation-subset.md]] | Tier configurations | 30-150 (modular) | Module selection by tier (T1/T2/T3) |
| [[products/01-power-bi-template/specifications/technical/01-power-bi-tech-spec|power-bi-tech-spec.md]] | Technical implementation | All tiers | DAX formulas, development timeline |

**Developer:** Use metrics-catalog.md for complete module definitions. See implementation-subset.md for tier-specific implementations.

---

## Modular Framework Overview

**Total Metrics:** 150 organized into 12 modules

**Module Categories:**
- **Base (30 metrics):** B1 Revenue Core, B2 Menu Essentials, B3 Staff & Customer Basics
- **Tier 1 Options (30 metrics):** T1-A Revenue Intelligence, T1-B Menu Engineering, T1-C Staff Performance
- **Tier 2 Professional (50 metrics):** P1 Multi-Outlet, P2 Menu Optimization, P3 Workforce Analytics, P4 Customer Mastery
- **Tier 3 Strategic (50 metrics):** S1 Executive Intelligence, S2 Advanced Menu, S3 Advanced Workforce, S4 Customer Intelligence

**Pricing:**
- Tier 1: Rp 3.5-6M (30-50 metrics)
- Tier 2: Rp 7-12M (50-100 metrics)
- Tier 3: Rp 10-15M (100-150 metrics)

---

## 1. Executive Design Language & UX Strategy

* **The "One-Screen" Philosophy:** Use a **sidebar navigation** to toggle between Sales, People, and Customers, but keep a "Global Header" for the date/time filters.
* **Color Palette:** Use a "Growth UI"-Neutral dark mode or clean white with **Primary Blue** for data and **Success Green/Warning Red** for target variances.
* **Micro-Interactions:**
 * **Tooltips:** Hovering over a "Sales" bar shows the top 3 best-selling items for that period.
 * **Drill-Through:** Clicking a staff member's name on the leaderboard navigates to a "Personal Performance Card."
 * **Dynamic Slicers:** A "Preset" toggle for: *Yesterday, This Week, MTD, QTD, Last 30 Days.*

---

## 2. Section A: Sales Intelligence (The "Engine")

*Goal: Bridge the IDR 4 Bn gap by monitoring daily velocity and high-value bookings.*

### **KPI Cards (Top Row)** [IMPLEMENTATION: File 06 Section 1.1]

* **Total Revenue:** Actual vs. Target (with a % "Gap to Goal" progress bar).
* **Reservation Revenue:** Total and % of total (critical for IDR 12 Bn scaling).
* **Regular/Walk-in Revenue:** Highlighting spontaneous floor traffic.
* **Avg. Check (per Pax):** Comparison against the "Golden Target" needed to hit 12 Bn.

### **Sophisticated Visuals** [IMPLEMENTATION: File 06 Section 1.2-1.3]

* **Revenue Waterfall:** Shows how revenue builds from Regular + Reservations + (Add-on Sales/Upselling).
* **Heatmap (Time-of-Day):** When are we making the most money? (Helps the AM adjust staff shifts for the 20-person team).
* **Target Pacing Line:** A linear trend line showing where the business *should* be today to hit the annual IDR 12 Bn goal.

**See [[products/01-power-bi-template/specifications/technical/01-power-bi-tech-spec|04-power-bi-tech-spec.md]] Section 3 for complete metric breakdown.**

---

## 3. Section B: People & Gamification (The "Leaderboard")

*Goal: Manage the 20 direct reports through healthy competition and transparent KPIs.*

> [!NOTE]
> **Metrics Evolution:** Initial spec suggested basic sales volume ranking. Final implementation uses **Performance Score (6 components)** with comprehensive **Discipline Score (5 sub-components)**. See [[products/01-power-bi-template/specifications/technical/01-power-bi-tech-spec|04-power-bi-tech-spec.md]] Section 3.5 for full breakdown.

### **The "Champions League" Leaderboard** [IMPLEMENTATION: File 06 Section 2.1]

* **Ranking Metric: Performance Score (0-100)** - Context-aware composite:
 - **Sales Per Hour (25%)** - Normalized by team average (fair across shifts)
 - **Upsell Count (20%)** - Behavior, not luck
 - **Avg Customer Rating (25%)** - Guest experience quality
 - **Tables Per Hour (15%)** - Efficiency metric
 - **Discipline Score (10%)** - NEW: 5 sub-components measuring reliability:
 * Punctuality (25% of discipline) - from `StaffHours.IsLate`
 * No Early Outs (20%) - from `StaffHours.IsEarlyOut`
 * Shift Completion (25%) - Attendance tracking
 * Order Accuracy (15%) - from `Sales_Data.IsVoid`
 * Conflict Resolution (15%) - from `Feedback.ComplaintResolved`
 - **Week-over-Week Trend (5%)** - Momentum indicator

* **Individual Drill-through (8 metrics)** - Gap to Target, Gap to Bonus, Service Speed, Late Count, Positive Mentions, etc.

**Complete details:** [[products/01-power-bi-template/specifications/technical/01-power-bi-tech-spec|04-power-bi-tech-spec.md]] Section 3.5

* **Visuals:**
 * **Rank Table:** Clean list with tier badges ( Gold / Silver / Bronze)
 * **Personal Milestone Tracker:** Gauge showing Gap to Bonus for each staff member

---

## 4. Section C: Customer Insights (The "Patronage")

*Goal: Identify "Whales" (high spenders) and "Zombies" (lapsed regulars).*

### **Patronage Cards** [IMPLEMENTATION: File 06 Section 3.1]

* **First-Timers:** The "Acquisition" bucket.
* **Repeaters (2nd - 3rd Visit):** The "Loyalty" bucket.
* **VIP/Advocates (4+ Visits):** The "Growth" bucket.

### **Feedback & Sentiment Analysis** [IMPLEMENTATION: File 06 Section 3.4-3.5]

* **NPS Score / Average Rating:** Aggregated from Google/TripAdvisor/Internal QR codes.
* **Word Cloud:** Automated extraction of common keywords (e.g., "Salty," "Friendly," "Slow," "Atmosphere").
* **Revenue at Risk:** A calculation showing revenue lost from regular customers who haven't visited in >45 days.

**Complete details:** [[products/01-power-bi-template/specifications/technical/01-power-bi-tech-spec|04-power-bi-tech-spec.md]] Section 3.3

---

## 5. Technical Specification & Micro-Functions

### **Global Filter Logic**

* **Date Slicers:** `Harian`, `Minimal`, `Bulanan`, `Tahunan`.
* **Custom Period:** A calendar picker with "Compare to Previous Period" toggle (e.g., comparing this Sunday to last Sunday).

### **Sophisticated Features (The "Wow" Factor)**

1. **The "Gap to 12 Bn" Calculator:** A dynamic text box that says: *"To hit your 12 Bn goal, you need to average IDR 33M per day for the remaining [X] days of the year."*
2. **Product Mix (P-Mix) Overlay:** A small "info" button on the Sales card that reveals the top 5 items contributing to that day's revenue.
3. **Shift Performance:** A toggle to view data by "Lunch Shift" vs "Dinner Shift"-crucial for an Assistant Manager to evaluate team leads.

**Technical Implementation:** See **03-technical data bp.md** for SQL views and DAX formulas.

---

## 6. Suggested Folder/Tab Structure

| Tab Name | Focus | Key Question Answered |
| --- | --- | --- |
| **01. Command Center** | Overview | Are we on track for the IDR 12 Bn target today? |
| **02. Wolf Pack** | Gamification | Who are my top 3 servers and who needs coaching? |
| **03. Loyalty Loop** | Retention/Feedback | Are people coming back, and what are they complaining about? |

**Visual Budget:** 6-8 major visuals per tab maximum. See [[products/01-power-bi-template/specifications/technical/03-design-ux-specifications|05-design-ux-specifications.md]] for layouts.

---

## 7. Module-Based Expansion Options

**Current Scope:** This specification provides high-level overview. See module-specific documentation for detailed implementation.

**Modular Approach:** Business starts with Base modules (30 metrics) and adds modules based on maturity and needs.

### Tier 1 Expansion (Base -> T1 Options)
**Add Revenue Intelligence (T1-A):**
- Upsell tracking, discount analysis
- Forecast to year-end, gap to target
- Required daily run rate
- Use case: "Hit Rp 12B annual target"

**Add Menu Engineering (T1-B):**
- BCG Matrix (Stars/Cows/Dogs/Question Marks)
- Recipe costing, portion control
- Menu optimization score
- Use case: "Optimize menu mix"

**Add Staff Performance (T1-C):**
- Performance score (6 components)
- Discipline tracking (5 sub-components)
- Staff tier levels (Gold/Silver/Bronze)
- Use case: "Gamify staff performance"

### Tier 2 Expansion (T1 -> Professional Modules)
**Add Multi-Outlet (P1):**
- Outlet performance comparison
- Revenue/cost/profit by outlet
- Required for 2+ locations

**Add Menu Optimization (P2):**
- Ingredient cost trends
- Product cannibalization
- New product launch tracking

**Add Workforce Analytics (P3):**
- Turnover analysis
- Scheduling efficiency
- Retention prediction

**Add Customer Mastery (P4):**
- Patronage ladder (First-Timer -> VIP)
- VIP churn tracking
- NPS breakdown

### Tier 3 Expansion (T2 -> Strategic Modules)
**Add Executive Intelligence (S1):**
- Board-level reporting
- Scenario analysis (best/expected/worst)
- Quarterly business review

**Add Advanced Menu (S2):**
- Price elasticity analysis
- Competitive benchmarking
- Menu profitability matrix

**Add Advanced Workforce (S3):**
- Labor optimization model
- Training ROI measurement
- Succession planning

**Add Customer Intelligence (S4):**
- RFM segmentation
- Cohort analysis
- Churn prediction model

**Implementation Approach:** Modules added incrementally based on business needs. Each module is independently developed and can be enabled/disabled in Power BI.

