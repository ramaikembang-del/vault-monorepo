# Metrics Bundling Rationale - Strategic Design Decisions

**Product:** A1 - Power BI F&B Analytics Template  
**Owner:** Product Strategy  
**Last Updated:** January 14, 2026  
**Purpose:** Document the strategic reasoning behind tier metric ranges and module bundling logic

---

## Executive Summary

This document explains **WHY** we chose 30-50/50-100/100-150 metrics for Tier 1/2/3 and **HOW** we bundle metrics into modules.

**Key Principles:**
1. **Cognitive Load Theory:** Humans can only track 7±2 metrics effectively
2. **Business Maturity Mapping:** Metric needs correlate with business lifecycle stage
3. **Module Bundling:** Group metrics by business problem, not arbitrary numbers
4. **Upgrade Path Psychology:** Clear gaps between tiers drive upgrades

---

## Part 1: Why 30-50 / 50-100 / 100-150? (Tier Boundaries)

### The "30 Metrics" Baseline (Tier 1 Minimum)

**Reasoning:** Minimum viable analytics for business health

**Strategic Logic:**
- **Miller's Law:** Humans can track 7±2 things in working memory
- **Dashboard Attention:** Research shows users focus on 5-10 key metrics
- **30 = 3 core areas × 10 metrics each** (Revenue, Menu, Staff/Customer)

**Psychological Justification:**
```
Too few (<20): Feels incomplete, like "just POS reports"
Sweet spot (30): Enough to feel comprehensive, not overwhelming
Too many (>50 at entry): Analysis paralysis, unused features
```

**Customer Research Evidence:**
- Beta customers: "30 metrics feels like the right amount to check weekly"
- Competitive analysis: Competitors offer 10-15 generic metrics (feel insufficient)
- Our 30 feels "3x better" = psychological win

**Business Outcome:**
- Single-outlet owners can realistically monitor 30 metrics
- Weekly review = 30 minutes (1 min/metric scan)
- Actionable insights without overwhelm

---

### The "50 Metrics" Mid-Tier (Tier 1 Max / Tier 2 Base)

**Reasoning:** Growth threshold - when complexity demands deeper analytics

**T1-to-T2 Transition Trigger:**
1. **Multi-outlet expansion** (1 outlet → 2-3 outlets)
   - Need outlet comparison (P1 module: +12 metrics)
   - Base 30 + Multi-Outlet 12 + choice of P2/P3/P4 = ~50-65 metrics

2. **Menu complexity** (15 items → 40+ items)
   - Need menu engineering BCG matrix (P2 module: +15 metrics)
   -Recipes, cannibalization, cross-sell analysis

3. **Staff scale** (5 staff → 15+ staff)
   - Need workforce analytics (P3 module: +12 metrics)
   - Turnover, scheduling optimization, training ROI

**Why Stop at "~50" for T1 Max?**
- 50 = Dashboard saturation point
- 2 dashboard pages can display ~25 metrics/page comfortably
- Beyond 50 = Need 3+ pages = DIY users get lost

**Tier 2 Bundling Strategy:**
```
Base 30 (inherited) 
+ All T1 modules (30 more) 
= 60 metrics baseline

Then add Professional modules:
+ P1/P2/P3/P4 (12-15 metrics each)
→ Range: 60-100 metrics
```

---

### The "100 Metrics" Enterprise Threshold (Tier 2 Max)

**Reasoning:** Professional analytics ceiling before strategic/predictive tools

**Why 100 is the ceiling:**
1. **Dashboard Real Estate:** 
   - 5 dashboard pages × 20 metrics/page = 100 metric limit
   - Beyond = Navigation complexity, users can't find metrics

2. **Data Entry Burden:**
   - 100 metrics require ~8-10 Excel templates
   - T2 users still do manual data entry
   - >100 = Too much manual work, need automation (T3)

3. **Business Complexity:**
   - 100 metrics = Multi-outlet (5-10 locations), 50+ staff, 80+ menu items
   - Beyond = Need strategic/exec reporting, not just operational

**T2-to-T3 Transition Trigger:**
- **Investor/board reporting needs** → S1 Executive Intelligence module
- **Pricing strategy / competitive analysis** → S2 Advanced Menu
- **Labor optimization models** → S3 Advanced Workforce
- **Predictive customer analytics** → S4 Customer Intelligence

---

### The "150 Metrics" Ultimate Ceiling (Tier 3 Max)

**Reasoning:** Absolute analytics ceiling before diminishing returns

**Why We Stopped at 150:**

1. **Implementation Constraint:**
   - 150 metrics = 8 dashboard pages × ~19 metrics/page
   - Power BI Desktop performance limit (~10MB .pbix file)
   - Beyond = Need Power BI Premium (Rp 9M/month Microsoft cost)

2. **Market Research:**
   - Analyzed 50 F&B dashboards (competitors, consultants)
   - Largest found = 120 metrics
   - 150 = Market leader position ("30% more than anyone else")

3. **Diminishing Returns:**
   - 30 → 50 metrics = 67% increase, high ROI (new business areas)
   - 50 → 100 = 100% increase, medium ROI (depth within areas)
   - 100 → 150 = 50% increase, low ROI (predictive, strategic)
   - Beyond 150 = Marginal value, niche use cases

4. **Customer Validation:**
   - Beta T3 customer: "I use ~80 of the 150 metrics regularly"
   - Other 70 = "Nice to have, check quarterly"
   - Conclusion: 150 covers 100% of needs, more = over-engineering

**Psychological Ceiling:**
```
100 metrics = "Professional analytics"
150 metrics = "Enterprise-grade, best in class"
200+ metrics = "Over-complicated, intimidating"
```

---

## Part 2: Module Bundling Logic

### Why Modules vs Fixed Packages?

**Problem with Fixed Packages:**
```
Old approach: "Tier 2 = 75 metrics, take it or leave it"
Issue: Customer pays for metrics they don't use
Example: Single-outlet owner forced to buy multi-outlet metrics
```

**Modular Solution:**
```
New approach: "Tier = Service level + Base metrics, add modules as needed"
Benefit: Pay only for analytics you'll use
Example: T2 Assisted + P2 Menu Optimization = No wasted multi-outlet metrics
```

---

### Module Grouping Principles

**Principle 1: Bundle by Business Problem, Not Arbitrary Numbers**

❌ **Wrong:**
```
Module A: Metrics 31-45 (random grouping)
Module B: Metrics 46-60 (arbitrary split)
```

✅ **Right:**
```
Module P1: Multi-Outlet Operations (business problem = "compare locations")
Module P2: Menu Optimization (business problem = "which items to promote/kill?")
```

**Why This Matters:**
- Customers think in problems, not metric counts
- "I need to compare my 3 outlets" → Clear module choice (P1)
- "I have 60 menu items, which are profitable?" → Clear module choice (P2)

---

**Principle 2: Module Size = 10-15 Metrics**

**Why This Range?**

**Too Small (<8 metrics):**
- Feels like minimal value for Rp 1.25M
- Customer: "Just 5 metrics for Rp 1M? Expensive!"

**Sweet Spot (10-15 metrics):**
- Substantial enough to justify cost
- 1 dashboard page worth of metrics
- Complete sub-feature area

**Too Large (>20 metrics):**
- Hard to sell as "add-on" (feels like full tier)
- Overwhelming to absorb in one purchase decision

**Module Size Distribution:**
```
Base Modules: 10 metrics each (B1, B2, B3)
T1 Modules: 10 metrics each (T1-A, T1-B, T1-C)
T2 Modules: 11-15 metrics each (P1=12, P2=15, P3=12, P4=11)
T3 Modules: 11-15 metrics each (S1=15, S2=12, S3=12, S4=11)
```

**Pricing Match:**
```
10 metrics ≈ Rp 1M (Rp 100K/metric)
12-15 metrics ≈ Rp 1.25-1.5M (bulk discount, ~Rp 100K/metric)
```

---

**Principle 3: Dependency Mapping**

**Rule:** Never require 2 modules to answer 1 business question

❌ **Wrong:**
```
Question: "Which outlet has best food cost %?"
Requires: P1 (Multi-Outlet) + P2 (Menu Optimization)
Issue: Customer must buy 2 modules = Rp 2.5M
```

✅ **Right:**
```
Question: "Which outlet has best food cost %?"
Answer: P1 (Multi-Outlet) includes "Food Cost % by Outlet"
Metric 63 is IN P1, not in P2
```

**Implementation:**
- Metrics catalog audit: Ensure no orphaned metrics
- Each module = Self-contained business problem solver

---

### Module Hierarchy: Base → T1 → T2 → T3

**Why Hierarchical vs Flat?**

**Flat Structure (❌ Wrong):**
```
12 modules, all equal access
Problem: T1 user confused by "Executive Intelligence" module
```

**Hierarchical Structure (✅ Right):**
```
T1: Can only add T1-A/B/C (10 metrics each)
T2: Can add P1/P2/P3/P4 (11-15 metrics each)
T3: Can add S1/S2/S3/S4 (11-15 metrics each)
```

**Reasoning:**
1. **Progressive Complexity:** T3 modules assume T2 data infrastructure
2. **Upsell Path:** If T1 wants "Executive Intelligence," must upgrade to T3
3. **Pricing Logic:** Higher tiers = Better service + Access to advanced modules

**Example: Why "Executive Intelligence" is T3-only**
```
S1 Module needs:
- Forecast data table (manual input, time-consuming)
- Scenario modeling (complex Excel understanding)
- Board-level deck templates (white-label, T3 feature)

T1 user doesn't have:
- Time for complex forecasting (DIY bandwidth)
- Board reporting needs (single-outlet owner)
- Sophistication for scenario analysis
```

---

## Part 3: Upgrade Path Psychology

### Gap Design Between Tiers

**Principle:** Tiers must feel distinctly different, not incremental

**Metric Gap Strategy:**
```
T1 Range: 30-50 metrics (20-point range)
T2 Range: 50-100 metrics (50-point range)
T3 Range: 100-150 metrics (50-point range)

Overlap: T1 Max (50) = T2 Min (50)
Purpose: Clear upgrade trigger
```

**Why Overlaps Exist:**
- T1-Plus (50 metrics) customer feels "maxed out"
- Sees T2 base = same 50 metrics + better features
- Upgrade trigger: "I want assisted setup, not just more metrics"

---

### Module Upsell vs Tier Upgrade Decision Tree

**Customer Decision Flow:**

```
Customer has T1-Basic (30 metrics), wants more analytics:

Option A: Add T1 module (+10 metrics) = +Rp 1M
→ Stay DIY, gain specific metric set
→ Choose if: Budget-constrained, comfortable DIY

Option B: Upgrade to T2-Base (50 metrics + Assisted) = +Rp 3.5M
→ Get better service + all T1 modules included
→ Choose if: Want help, value time over money

Decision driver: Price sensitivity vs time value
```

**Strategic Pricing:**
```
2× T1 modules (Rp 2M) < T2 upgrade (Rp 3.5M)
→ If customer adds 3+ modules, upgrade is better value
→ Prevents "module stacking" abuse
```

---

## Part 4: Bundling Decisions by Module

### Base Modules (30 Metrics) - Bundling Rationale

**B1: Revenue Core (10 metrics)**
- **Why These 10:** KPIs every business tracks (revenue, growth, targets)
- **Why Module Exists:** Foundation for all other analytics
- **Standalone Value:** Could run business on just these 10
- **Upgrade Trigger:** Want forecasting → Add T1-A Revenue Intelligence

**B2: Menu Essentials (10 metrics)**
- **Why These 10:** Basic menu performance (top sellers, food cost, margin)
- **Why Module Exists:** Menu = core F&B business driver
- **Standalone Value:** Enough to make "promote/kill" decisions
- **Upgrade Trigger:** Want BCG matrix → Add T1-B Menu Engineering

**B3: Staff & Customer Basics (10 metrics)**
- **Why These 10:** Staff productivity + customer counting
- **Why Module Exists:** Labor = 25-35% of costs, must track
- **Standalone Value:** Identify top/bottom performers
- **Upgrade Trigger:** Want performance scores → Add T1-C Staff Performance

**Why 3 Base Modules:**
```
3 = Minimum business dimensions (Revenue, Product, People)
Fewer = Incomplete (missing critical area)
More = Overwhelming for entry tier
```

---

### T1 Modules (10 metrics each) - Bundling Rationale

**T1-A: Revenue Intelligence**
- **Metrics:** Forecasting, gap analysis, run rate, waterfall
- **Business Problem:** "Will we hit our annual target?"
- **Why NOT in Base:** Most T1 customers don't have annual targets
- **Why $1M Price:** Forecasting = strategic, worth premium

**T1-B: Menu Engineering**
- **Metrics:** BCG matrix (Stars/Dogs/etc), margin per item, velocity
- **Business Problem:** "Which items should I promote or cut?"
- **Why NOT in Base:** Requires recipe costing data (not all track)
- **Why $1M Price:** Menu decisions = high ROI (cut 1 dog = Rp 500K/month savings)

**T1-C: Staff Performance**
- **Metrics:** Performance scores, discipline, leaderboard, bonus tracking
- **Business Problem:** "Who deserves a bonus?"
- **Why NOT in Base:** Gamification only works for 10+ staff
- **Why $1M Price:** Retention = Rp 5M/staff turnover savings

---

### T2 Professional Modules (11-15 metrics) - Bundling Rationale

**P1: Multi-Outlet Operations (+12 metrics, +Rp 1.25M)**
- **Why These Metrics:** Outlet comparison, consolidation, best/worst ranking
- **Business Trigger:** Opened 2nd location
- **Why T2-Only:** T1 DIY users can't handle multi-outlet complexity
- **Why $1.25M:** Network-level intelligence, justify regional manager salary

**P2: Menu Optimization (+15 metrics, +Rp 1.25M)**
- **Why 15 (Most in T2):** Menu = highest variability area
- **Business Trigger:** 40+ menu items, launching new products
- **Module Includes:** Cannibalization, cross-sell, seasonal analysis, launch tracking
- **Why T2-Only:** Requires assisted setup to configure complex DAX
- **Why $1.25M:** Product launches ROI = Rp 3-5M (prevent failed launches)

**P3: Workforce Analytics (+12 metrics, +Rp 1.5M)**
- **Why These Metrics:** Turnover, scheduling, training ROI, retention prediction
- **Business Trigger:** High staff churn (>30%/year)
- **Why T2-Only:** Requires StaffHours data table (advanced setup)
- **Why $1.5M:** Reduce turnover 30%→20% = Rp 5M+ savings/year

**P4: Customer Mastery (+11 metrics, +Rp 1.5M)**
- **Why These Metrics:** Patronage ladder, NPS, VIP churn, return rate
- **Business Trigger:** Want to build loyal customer base
- **Why T2-Only:** Requires CustomerID tracking (assisted setup)
- **Why $1.5M:** 10% increase in repeat customers = Rp 10M+ ARR

---

### T3 Strategic Modules (11-15 metrics) - Bundling Rationale

**S1: Executive Intelligence (+15 metrics, +Rp 1.25M)**
- **Metrics:** Scenario analysis, board deck, investor reporting, exec scorecard
- **Business Trigger:** Preparing for Series A / board meeting
- **Why T3-Only:** Requires white-label (T3 feature), strategic sophistication
- **Why $1.25M:** Investor deck quality = Rp 50M+ valuation impact

**S2: Advanced Menu (+12 metrics, +Rp 1.25M)**
- **Metrics:** Price elasticity, competitive benchmarking, ML optimization
- **Business Trigger:** Considering price increase, competitor analysis
- **Why T3-Only:** Requires external competitive data
- **Why $1.25M:** Optimal pricing = 5-10% revenue increase

**S3: Advanced Workforce (+12 metrics, +Rp 1.25M)**
- **Metrics:** Labor optimization model, scheduler efficiency, succession planning
- **Business Trigger:** 50+ staff, need workforce planning
- **Why T3-Only:** Requires advanced HR data infrastructure
- **Why $1.25M:** Optimal scheduling = 5-10% labor cost reduction

**S4: Customer Intelligence (+11 metrics, +Rp 1.25M)**
- **Metrics:** Cohort analysis, RFM, churn prediction, LTV, campaign ROI
- **Business Trigger:** Running marketing campaigns, need data-driven targeting
- **Why T3-Only:** Requires marketing system integration 
- **Why $1.25M:** CAC reduction 20% = Rp 10M+ savings

---

## Part 5: Common Bundling Questions

### Q1: Why Not Sell Metrics Individually?

**Answer:** Unit economics don't work

```
If we sell 1 metric for Rp 100K:
- Customer: "I'll take 5 metrics for Rp 500K"
- Us: "We spent 40 hours building the module (10 metrics)"
  → Rp 500K ÷ 40 hours = Rp 12,500/hour (below cost)

Module pricing (10 metrics = Rp 1M):
- Rp 1M ÷ 40 hours = Rp 25K/hour (profitable)
```

**Customer Benefit:**
- Bundled modules solve complete business problems
- Single metrics = Incomplete insights, false signals

---

### Q2: Why Different Module Sizes (10 vs 15 metrics)?

**Answer:** Business problem complexity varies

```
Simple problem (T1-A Revenue Intelligence):
- 10 metrics sufficient
- "Will we hit target?" = Binary question

Complex problem (P2 Menu Optimization):
- 15 metrics needed
- "Optimize menu" = Multi-dimensional (sales, margin, cannibalization, cross-sell)
```

**Pricing Calibration:**
```
10 metrics / Rp 1M = Rp 100K/metric
15 metrics / Rp 1.25M = Rp 83K/metric (bulk discount)
```

---

### Q3: Why Can't T1 Access T3 Modules?

**Answer:** Data infrastructure dependency

**Example:** S4 Customer Intelligence Module
```
Requires:
1. CustomerID tracking (T2+ assisted setup)
2. Campaign tracking table (T3 managed service)
3. Cohort analysis DAX (T3 expertise)

T1 DIY user doesn't have:
- Assisted setup to configure CustomerID
- Managed service to maintain campaign data
- Expertise to interpret cohort analysis
```

**Forcing Tier Upgrade = Better Customer Outcome:**
- Prevents T1 users buying modules they can't implement
- Ensures success (vs buying S4, failing to set up, requesting refund)

---

## Part 6: Competitive Differentiation

### Our Modular Approach vs Competitors

**Generic BI Templates (Envato, etc):**
- Fixed 15-20 metrics, take it or leave it
- No customization, no modules
- Price: Rp 500K

**Our Advantage:**
- 30-150 metrics, modular expansion
- Pay only for what you use
- Price: Rp 3.5-15M (7-30x more, but 10x more value)

**Full BI Solutions (Tableau, Qlik):**
- Unlimited metrics, DIY-everything
- Overwhelming, 6-month setup
- Price: Rp 50M+/year

**Our Advantage:**
- Pre-built F&B modules, ready Week 1
- Right-sized analytics (not overwhelming)
- Price: Rp 10-15M one-time (80% cheaper)

---

## Part 7: Practical Operational Anatomy

### The Missing Piece: Daily Reality

**What the strategic reasoning doesn't show:** The practical, day-to-day operational burden

This section answers: *"What does it actually FEEL like to use 30 vs 100 metrics daily?"*

---

### Tier 1: 30 Metrics - Daily Operational Reality

**Morning Workflow (Monday, 8:30 AM):**

```
Owner arrives at café, opens laptop:

8:30 AM - Export yesterday's POS data (2 minutes)
├─ Moka POS → Reports → Daily Sales → Export CSV
├─ Download: Sales_2026-01-13.csv
└─ Save to: C:\Power_BI_Clario\Data\

8:32 AM - Update Excel templates (5 minutes)
├─ Open Daily_Sales.xlsx
├─ Paste: Revenue (Rp 4.2M), Transactions (95), Food Cost (Rp 1.3M)
├─ Open Top_Items.xlsx  
├─ Paste: Top 10 items from POS report
└─ Save all templates

8:37 AM - Refresh Power BI (30 seconds)
├─ Double-click Dashboard_Tier1.pbix
├─ Click "Refresh" button
└─ Wait for data load (15-30 seconds)

8:38 AM - Review 30 metrics (10 minutes)
├─ Page 1: Revenue metrics (3 minutes)
│  ├─ Check: Yesterday revenue vs target (Rp 4.2M vs Rp 4.5M = 93%, yellow flag)
│  ├─ Scan: Week trend (down 5% from last week - concerning)
│  └─ Note: Need to push weekend promo
│
├─ Page 2: Menu metrics (4 minutes)
│  ├─ Check: Food cost % (31% - acceptable, green)
│  ├─ Scan: Top sellers (same 5 items, stable)
│  └─ Note: New latte launched, only 12 sales (underperforming)
│
└─ Page 3: Staff metrics (3 minutes)
   ├─ Check: Staff productivity (Rina = top, Doni = bottom 20%)
   └─ Note: Talk to Doni today

8:48 AM - Done. Take action (throughout day)
└─ WhatsApp team: "Push weekend promo, Monitor new latte"

Total time: 18 minutes (2 + 5 + 0.5 + 10.5)
```

**Weekly Deep-Dive (Sunday, 8 PM):**
- 30 minutes reviewing trends
- Decision: Kill 1 underperforming menu item (based on metrics)
- **Emotional state:** "30 metrics feels manageable, I check all of them"

**Cognitive Load:**
- Can remember all 30 metrics ("Revenue, food cost, top sellers...")
- Weekly review = Actually reviews ALL metrics
- **No analysis paralysis**

**Pain Points:**
- 5-7 minutes daily data entry (manual)
- If miss 2 days, 15-minute catch-up backlog
- **Upgrade trigger:** "I'm tired of daily Excel updates"

---

### Tier 2: 50-100 Metrics - Daily operational Reality

**Morning Workflow (Monday, 8:30 AM) - Multi-Outlet Owner:**

```
Regional manager, 3 outlets:

8:30 AM - Automated POS export (0 minutes)
├─ POS auto-export configured (T2 setup assistance)
├─ Nightly batch: All 3 outlets → Consolidated Excel
└─ Wake up to: Pre-populated Excel templates

8:30 AM - Quick Excel verification (2 minutes)
├─ Open consolidated Daily_Sales.xlsx
├─ Scan: All 3 outlets present (Outlet A/B/C)
└─ If missing data → 1-minute manual fix

8:32 AM - Refresh Power BI (30 seconds)
├─ Dashboard auto-consolidates 3 outlets
└─ Click "Refresh"

8:33 AM - Review 62 metrics (15 minutes) **[Not 30!]**
├─ **Focus: 15 "executive" metrics** (5 minutes)
│  ├─ Network revenue: Rp 12M (all outlets combined)
│  ├─ Worst outlet: Outlet C (only Rp 3M vs A=Rp 5M, B=Rp 4M)
│  ├─ Food cost %: Outlet C at 35% (vs A=29%, B=31%)
│  └─ Decision: Visit Outlet C tomorrow, investigate food waste
│
├─ **Scan: 25 "monitor" metrics** (7 minutes)
│  ├─ Outlet-by-outlet comparison tables
│  ├─ Staff performance across locations
│  └─ Menu mix differences (Outlet A sells more coffee, C sells more food)
│
└─ **Ignore: 22 "quarterly" metrics** (0 minutes today)
   ├─ Cannibalization analysis (check monthly)
   ├─ Seasonal trends (check quarterly)
   └─ NPS by segment (check after campaigns)

8:48 AM - Done. Delegate actions
└─ WhatsApp Outlet C manager: "Food cost 35%, audit inventory today"

Total time: 17.5 minutes (0 + 2 + 0.5 + 15)
**Key insight: FASTER than T1 despite 2x metrics (automation saves 5 min)**
```

**Usage Pattern Reality:**
- **15 "executive" metrics:** Check daily (revenue, costs, worst/best outlet)
- **25 "operational" metrics:** Scan 2-3x/week (menu mix, staff, customer count)
- **22 "strategic" metrics:** Review monthly/quarterly (trends, BCG matrix, cohorts)

**Cognitive Load:**
- **Cannot remember all 62 metrics** (too many)
- Instead: **Remember the 15 critical ones** (muscle memory)
- Dashboard organized: Page 1 = Daily must-check, Pages 2-3 = Weekly, Page 4-5 = Monthly

**Why 100 Metrics Don't Feel Like 100:**
```
Tier 2 customer on Monday:
"I have 62 metrics, but I only check 15 today"

vs

Tier 1 customer on Monday:
"I have 30 metrics, I check all 30 every day"

Result: T2 feels LESS overwhelming (because selective attention)
```

**Pain Points:**
- **Information overload if not organized:** Need clear dashboard hierarchy
- **Still 2 min/day Excel verification:** Want full automation
- **Upgrade trigger:** "I want zero manual work" → T3

---

### Tier 3: 100-150 Metrics - Daily Operational Reality

**Morning Workflow (Monday, 8:30 AM) - Enterprise Chain (10 outlets):**

```
VP Operations, 10-outlet chain:

8:30 AM - Zero manual work (0 minutes)
├─ Fully automated POS integration
├─ Nightly batch: All outlets → Database → Power BI
└─ Dashboard auto-refreshes at 7 AM (before you wake up)

8:30 AM - Open dashboard - already fresh (0 minutes)
└─ No "Refresh" button click needed

8:30 AM - Review 150 metrics - **Executive lens** (10 minutes)
├─ **Page 1: Executive Scorecard** (3 minutes) [10 metrics]
│  ├─ Network health: Green (revenue on track, costs controlled)
│  ├─ Alerts: 2 outlets flagged red (Outlet F + H underperforming)
│  ├─ Key insight: Outlet H food cost spiked to 38% (investigate)
│  └─ Decision: Schedule call with Outlet H manager at 10 AM
│
├─ **Page 2: Outlet Comparison** (4 minutes) [15 metrics]
│  ├─ Ranking: Outlets A/B/C = top 3, F/H = bottom 2
│  ├─ Drill-down:Outlet H details (revenue -15% MoM, staff turnover +20%)
│  └─ Hypothesis: New manager struggling, need intervention
│
└─ **Page 3: Strategic Insights** (3 minutes) [10 metrics]
   ├─ Customer cohorts: January cohort retention = 65% (vs 70% target)
   ├─ Menu optimization: 5 "Dog" items consuming 8% of inventory
   └─ Workforce: Labor cost trending up 2% (needs optimization)

8:40 AM - Done. Strategic decisions
└─ Slack team:
   "1. Emergency call Outlet H at 10 AM
    2. Menu team: Remove 5 Dogs by end of week
    3. HR: Labor optimization project - start next month"

Total time: 10 minutes (0 + 0 + 10)
**Key insight: FASTER than T1/T2 despite 5x metrics (executive summary view)**
```

**Usage Pattern Reality (150 metrics, but...):**

**Daily (10-15 metrics):**
- Executive scorecard (network health)
- Alert dashboard (red flags only)
- Top/bottom performers

**Weekly (25-30 metrics):**
- Outlet-by-outlet deep-dive
- Menu performance review
- Staff productivity trends

**Monthly (40-50 metrics):**
- Strategic KPIs (cohorts, NPS, LTV)
- Board deck preparation
- Scenario analysis

**Quarterly (50-75 metrics):**
- Competitive benchmarking
- Seasonal analysis
- Predictive models, succession planning

**Rarely (20-30 metrics):**
- "Nice to have" metrics (check if curious)
- Ad-hoc analysis (M&A, restructuring)

**Cognitive Load:**
- **Ignores 90% of metrics daily** (not a bug, it's a feature!)
- **Dashboard = Summary → Drill-down architecture**
- Page 1 = 10 metrics (executive view)
- Click underperforming outlet → 20 metrics drill-down
- **No overwhelm because progressive disclosure**

**Why 150 Metrics Feel EASIER Than 30:**
```
Tier 3 dashboard philosophy:
"Show me 5 things that matter TODAY, hide the other 145 until I ask"

vs

Tier 1 dashboard:
"Here are all 30 metrics, good luck figuring out what matters"

Result: T3 = Less cognitive load (better UX design)
```

**Pain Points:**
- None (fully automated, white-labeled, managed service)
- Only "pain": Rp 10-15M setup cost (but saves 20 hours/month forever)

---

### Comparative Operational Summary

| Dimension | Tier 1 (30) | Tier 2 (50-100) | Tier 3 (100-150) |
|-----------|-------------|-----------------|-------------------|
| **Daily data entry** | 5-7 min manual | 2 min verification | 0 min (auto) |
| **Dashboard refresh** | 30 sec manual | 30 sec manual | 0 sec (auto) |
| **Daily review time** | 10 min (ALL metrics) | 15 min (15 of 62) | 10 min (10 of 150) |
| **Total daily time** | **18 min** | **17.5 min** | **10 min** |
| **Metrics actually checked daily** | 30 (100%) | 15 (24%) | 10 (7%) |
| **Weekly deep-dive** | 30 min (all) | 45 min (scan all) | 60 min (strategic) |
| **Cognitive feel** | "Manageable, check everything" | "Selective, focus on priorities" | "Executive, alerts only" |
| **Upgrade trigger (pain)** | Manual Excel tedium | Want zero manual work | (None - maxed out) |

**Counterintuitive Insight:**
```
More metrics ≠ More time
More metrics = Better organization + Automation

T1 (30 metrics): 18 min/day (no automation)
T2 (62 metrics): 17.5 min/day (partial automation)
T3 (150 metrics): 10 min/day (full automation + executive summary)
```

---

### Real Customer Quotes (Beta Validation)

**T1 Customer (Solo café, 30 metrics):**
> "I check all 30 metrics every Monday morning. Takes about 15 minutes total. It's become part of my routine - coffee in hand, scan the dashboard, set my week's priorities. Feels manageable."

**T2 Customer (3-outlet chain, 65 metrics):**
> "I don't look at all 65 metrics daily - that'd be insane. I focus on the network summary (10 metrics), then drill into problem outlets. Maybe 15 minutes daily, then a deeper 1-hour review on Sundays."

**T3 Customer (8-outlet chain, 120 metrics):**
> "Honestly, I use maybe 20 metrics regularly. The other 100? They're there when I need them - board meetings, quarterly reviews, specific investigations. The automation is what changed my life - I used to spend 8 hours/week on Excel, now it's 10 minutes just reviewing."

---

### Operational Design Principles (Why Tiers Work)

**Tier 1: Comprehensive Simplicity**
- Principle: "Show everything, make it simple"
- 30 metrics = Small enough to review completely
- 2 dashboard pages = Easy navigation
- **User mental model:** "I know my business through these 30 numbers"

**Tier 2: Selective Depth**
- Principle: "Provide depth, enable focus"
- 50-100 metrics = Too many to check all, organized by priority
- 5 dashboard pages = Clear hierarchy (Daily → Weekly → Monthly)
- **User mental model:** "I focus on what matters today, drill down when needed"

**Tier 3: Executive Intelligence**
- Principle: "Hide complexity, surface insights"
- 100-150 metrics = Vast majority hidden unless needed
- 8 dashboard pages = Summary first, drill-down progressive
- **User mental model:** "Tell me the 5 things I need to know, show me more if I ask"

**Result:**
```
30 metrics feels "complete but simple"
100 metrics feels "powerful but focused" (not overwhelming)
150 metrics feels "effortless" (automation + UX = less cognitive load than 30)
```

---

## Part 8: Metrics ROI Justification



### How We Calculate Module ROI

**Formula:**
```
Module Price = Lowest Expected Annual Benefit × 20%

Example P1 (Multi-Outlet):
- Identify least profitable outlet → Intervention saves Rp 5M/year
- P1 Price = Rp 5M × 25% = Rp 1.25M
- If customer saves >Rp 1.25M in Year 1, module paid for itself
```

**Module ROI Table:**

| Module | Price | Expected Annual Benefit | ROI Multiplier |
|--------|-------|------------------------|----------------|
| T1-A Revenue Intelligence | Rp 1M | Hit annual target (Rp 10M+ upside) | 10x |
| T1-B Menu Engineering | Rp 1M | Kill 2 dogs (Rp 1M/year waste) | 1x |
| T1-C Staff Performance | Rp 1M | Reduce 1 turnover (Rp 5M cost) | 5x |
| P1 Multi-Outlet | Rp 1.25M | Fix worst outlet (Rp 5M+ upside) | 4x |
| P2 Menu Optimization | Rp 1.25M | Prevent 1 failed launch (Rp 3M savings) | 2.4x |
| P3 Workforce | Rp 1.5M | Reduce turnover 10% (Rp 10M savings) | 6.7x |
| P4 Customer Mastery | Rp 1.5M | 10% retention increase (Rp 10M ARR) | 6.7x |
| S1 Executive Intelligence | Rp 1.25M | Investor valuation +5% (Rp 50M) | 40x |
| S2 Advanced Menu | Rp 1.25M | Optimal pricing +5% revenue (Rp 25M) | 20x |
| S3 Advanced Workforce | Rp 1.25M | Labor optimization 5% (Rp 10M) | 8x |
| S4 Customer Intelligence | Rp 1.25M | CAC reduction 20% (Rp 10M) | 8x |

**ROI Validation:**
- All modules show >1x ROI (customer breaks even in Year 1)
- Higher tiers = Higher ROI multipliers (strategic vs operational)

---

## Conclusion

**Tier Boundaries (30/50/100/150) based on:**
1. ✅ Cognitive load limits (human attention span)
2. ✅ Business maturity stages (single→multi-outlet→enterprise)
3. ✅ Dashboard real estate (page count, navigation complexity)
4. ✅ Data entry burden (manual→assisted→automated)

**Module Bundling (10-15 metrics) based on:**
1. ✅ Business problem completeness (not arbitrary splits)
2. ✅ ROI justification (module price <expected benefit)
3. ✅ Data infrastructure dependencies (tier alignment)
4. ✅ Upsell psychology (clear upgrade triggers)

**Result:** Modular framework that scales with customer business maturity while maintaining clear value proposition at each tier.

---

**Related Documents:**
- [[products/01-power-bi-template/specifications/core/03-metrics-catalog|Metrics Catalog]] - What metrics exist
- [[products/01-power-bi-template/product-strategy/core/04-tiering-framework|Tiering Framework]] - How tiers are structured
- [[products/01-power-bi-template/specifications/core/01-master-prd|Master PRD]] - Product requirements

**Last Updated:** January 14, 2026  
**Owner:** Product Strategy Team
