# Modular Metrics Framework - Resolution Plan

**Date:** December 30, 2025
**Purpose:** Resolve "75 fixed vs 30-150 tiered" contradiction
**Approach:** Module-based metric organization aligned with existing pricing modules

---

## PROBLEM STATEMENT

**Current Contradiction:**
- Source of truth (00-master-strategy.md, tiering-framework.md): 30-50-100-150 metrics by tier
- Specifications (metrics-catalog.md): 75 metrics fixed for all tiers
- Result: Cannot build product - fundamental mismatch

**Solution:** **Modular Metrics Framework**
- Total pool: 150 metrics
- Organized into 12 modules (3 base + 4 T2 + 4 T3 + 1 misc)
- Each tier gets different module combinations
- Aligns with existing T2/T3 pricing modules

---

## PROPOSED MODULAR STRUCTURE

### **Metric Module Organization (150 total metrics)**

#### **BASE MODULES (All Tiers) - 30 Metrics**

**Module B1: Revenue Core (10 metrics)**
- Daily/Weekly/Monthly Revenue
- Revenue vs Target
- Revenue Growth (MoM, YoY)
- Peak Hours Revenue
- Payment Method Split
- Walk-in vs Reservation
- Hourly revenue distribution
- Revenue by day of week
- Average transaction value
- Bills per day

**Module B2: Menu Essentials (10 metrics)**
- Top 10 sellers (quantity)
- Top 10 sellers (revenue)
- Bottom 5 performers
- Basic food cost %
- Beverage cost %
- Gross margin by category
- Category mix %
- Product profitability rank
- Average order value
- Menu item count

**Module B3: Staff & Customer Basics (10 metrics)**
- Sales per staff
- Sales per hour
- Staff leaderboard (Top 3)
- Active staff count
- Labor cost %
- Total customers
- Average check size
- New vs Repeat %
- Customer count trend
- Transaction count

---

#### **TIER 1 OPTIONS (Choose 1 to add 10-20 metrics)**

**Module T1-A: Revenue Intelligence (+10 metrics) [Rp 3.5M base -> Rp 4.5M]**
- Upsell revenue
- Discount amount impact
- Net revenue after adjustments
- Revenue waterfall components
- Forecast to year-end
- Gap to annual target
- Required daily run rate
- MTD vs target
- Weekly trend
- QTD performance

**Module T1-B: Menu Engineering (+10 metrics) [Rp 3.5M base -> Rp 4.5M]**
- Recipe cost per item
- Profit margin per item
- BCG Matrix (Stars, Cash Cows, Dogs, Question Marks)
- Menu item velocity
- Portion cost tracking
- Category profitability
- Menu optimization score

**Module T1-C: Staff Performance (+10 metrics) [Rp 3.5M base -> Rp 4.5M]**
- Performance score (composite)
- Discipline score (5 sub-components):
 - Punctuality rate
 - Full shift rate
 - Attendance rate
 - Order accuracy
 - Conflict resolution
- Staff tier level (Gold/Silver/Bronze)
- Gap to bonus threshold
- Week-over-week trend

**T1 Max = Base (30) + TWO T1 modules (20) = 50 metrics (Rp 6M)**

---

#### **TIER 2 PROFESSIONAL MODULES (50 additional metrics)**

**Module P1: Multi-Outlet Operations (+12 metrics) [+Rp 1.25M]**
- Outlet performance comparison
- Revenue by outlet ranking
- Food cost % by outlet
- Labor cost % by outlet
- Profit margin by outlet
- Customer count by outlet
- Average check by outlet
- Peak hours by outlet
- Staff efficiency by outlet
- Inter-outlet transfer analysis
- Best/worst outlet
- Consolidated multi-outlet view

**Module P2: Menu Optimization (+15 metrics) [+Rp 1.25M]**
- Ingredient cost trend (Top 10)
- Recipe cost variance
- Portion variance tracking
- Menu mix analysis
- Product cannibalization
- Cross-sell opportunity matrix
- Menu item velocity
- Seasonal performance
- New product launch tracking
- Menu optimization score
- Star items revenue contribution
- Dog items waste cost
- Cash cow stability
- Question mark potential
- Menu engineering recommendation

**Module P3: Workforce Analytics (+12 metrics) [+Rp 1.5M]**
- Performance score (6 components)
- Discipline score (5 sub-components)
- Shift efficiency rating
- Training completion status
- Individual staff drill-through (8 sub-metrics)
- Team average performance
- Revenue per staff member
- Turnover rate
- Retention cost
- Productivity index
- Scheduling efficiency
- Overtime analysis

**Module P4: Customer Mastery (+11 metrics) [+Rp 1.5M]**
- Patronage ladder (4 stages: First-timer, Repeater, Regular, VIP)
- First-timer return rate
- Repeat customer %
- VIP churn count
- Revenue at risk
- Avg days between visits
- NPS score
- Promoters/Passives/Detractors breakdown
- Customer lifetime value (CLV)
- Churn rate
- Win-back performance

**T2 Range: Base (30) + T1 options (0-20) + T2 modules (0-50) = 50-100 metrics**

---

#### **TIER 3 STRATEGIC MODULES (50 additional metrics)**

**Module S1: Executive Intelligence (+15 metrics) [+Rp 1.25M]**
- Gap to target breakdown (components)
- Required run rate (daily/weekly/monthly)
- Scenario analysis (best/expected/worst)
- Forecast vs actual variance
- Strategic KPI dashboard
- Board-level metrics
- Investor reporting view
- Quarterly business review
- Year-over-year comparison
- Multi-period trend
- Performance vs competition (if data available)
- Market share estimate
- Growth velocity
- Strategic initiative tracking
- Executive summary scorecard

**Module S2: Advanced Menu (+12 metrics) [+Rp 1.25M]**
- Price elasticity analysis
- Cross-sell effectiveness
- Menu optimization advanced score
- Product launch ROI
- Competitive price benchmarking
- Menu profitability matrix
- ABC analysis (item contribution)
- Dead stock identification
- Recipe costing automation
- Ingredient supplier tracking
- Menu refresh recommendation
- Seasonal menu performance

**Module S3: Advanced Workforce (+12 metrics) [+Rp 1.25M]**
- Labor optimization model
- Productivity per labor hour
- Scheduler efficiency score
- Cost per shift analysis
- Overtime cost tracking
- Staff utilization rate
- Training ROI measurement
- Performance improvement tracking
- Staff development path
- Succession planning metrics
- Compensation effectiveness
- Retention prediction model

**Module S4: Customer Intelligence (+11 metrics) [+Rp 1.25M]**
- Cohort analysis (by month acquired)
- RFM segmentation (Recency, Frequency, Monetary)
- At-risk customer alerts
- Customer acquisition cost (CAC)
- Campaign performance tracking
- Customer segment profitability
- Lifetime value by segment
- Churn prediction model
- Win-back campaign ROI
- Loyalty program effectiveness
- Net Promoter Score by segment

**T3 Max: Base (30) + T1 (20) + T2 (50) + T3 (50) = 150 metrics**

---

## TIER CONFIGURATIONS

### **Tier 1: Essentials (30-50 metrics, Rp 3.5-6M)**

**T1-Basic (Rp 3.5M) - 30 metrics:**
- B1: Revenue Core (10)
- B2: Menu Essentials (10)
- B3: Staff & Customer Basics (10)

**T1-Standard (Rp 4.5M) - 40 metrics:**
- Base (30) + ONE T1 module (10)
- Customer chooses: Revenue Intelligence OR Menu Engineering OR Staff Performance

**T1-Plus (Rp 6M) - 50 metrics:**
- Base (30) + TWO T1 modules (20)
- OR: Base (30) + ONE T2 Professional module (12-15) + buffer

---

### **Tier 2: Professional (50-100 metrics, Rp 7-12M)**

**T2-Base (Rp 7M) - 50 metrics:**
- All Base modules (30)
- All T1 modules (20)
- = Full Tier 1 Max capability

**T2 with Modules (Rp 7M + module pricing):**
- T2 Base (50) + P1 Multi-Outlet (+12) = 62 metrics, Rp 8.25M
- T2 Base (50) + P2 Menu Opt (+15) = 65 metrics, Rp 8.25M
- T2 Base (50) + P3 Workforce (+12) = 62 metrics, Rp 8.5M
- T2 Base (50) + P4 Customer (+11) = 61 metrics, Rp 8.5M

**T2-Complete (Rp 12M) - 100 metrics:**
- Base (30) + All T1 (20) + All T2 Professional modules (50)

---

### **Tier 3: Enterprise (100-150 metrics, Rp 20-25M)**

**T3-Base (Rp 10M) - 100 metrics:**
- All Base (30) + All T1 (20) + All T2 (50)
- = Full Tier 2 capability + automation features

**T3 with Strategic Modules:**
- T3 Base (100) + S1 Executive (+15) = 115 metrics, Rp 11.25M
- T3 Base (100) + S2 Advanced Menu (+12) = 112 metrics, Rp 11.25M
- T3 Base (100) + S3 Advanced Workforce (+12) = 112 metrics, Rp 11.25M
- T3 Base (100) + S4 Customer Intelligence (+11) = 111 metrics, Rp 11.25M

**T3-Complete (Rp 15M) - 150 metrics:**
- Base (30) + All T1 (20) + All T2 (50) + All T3 Strategic (50)
- = Complete platform, all modules

---

## ALIGNMENT WITH EXISTING PRICING

**Perfect alignment achieved:**

| Tier | Metrics | Price | Modules Included |
|------|---------|-------|------------------|
| T1-Basic | 30 | Rp 3.5M | Base only (B1+B2+B3) |
| T1-Standard | 40 | Rp 4.5M | Base + 1 T1 module |
| T1-Plus | 50 | Rp 6M | Base + 2 T1 modules |
| T2-Base | 50 | Rp 7M | Base + All T1 |
| T2+1 module | 62-65 | Rp 8.25-8.5M | T2 Base + 1 Professional |
| T2-Complete | 100 | Rp 12M | Base + T1 + All T2 |
| T3-Base | 100 | Rp 10M + 400K/mo | T2 Complete + automation |
| T3+1 strategic | 111-115 | Rp 11.25M + 400K/mo | T3 Base + 1 Strategic |
| T3-Complete | 150 | Rp 15M + 400K/mo | All modules |

---

## MIGRATION FROM CURRENT "75 METRICS" SPEC

**Current State:**
- specifications/metrics-catalog.md shows "75 metrics across 3 tabs"
- Tab 1: Command Center (25 metrics)
- Tab 2: Wolf Pack (25 metrics)
- Tab 3: Loyalty Loop (25 metrics)

**New Mapping:**
- **Tab 1 (Revenue)** = B1 Revenue Core (10) + T1-A Revenue Intelligence (10) + P2 Menu portions (5) = 25
- **Tab 2 (Staff)** = B3 Staff basics (5) + T1-C Staff Performance (10) + P3 Workforce (10) = 25
- **Tab 3 (Customer)** = B3 Customer basics (5) + P4 Customer Mastery (11) + S4 portions (9) = 25

**Conclusion:** Current "75 metrics" = Base (30) + partial T1 (10) + partial T2 (20) + partial T3 (15)
**This becomes:** **"T2-Lite"** configuration (not an official tier, just demo/spec version)

---

## IMPLEMENTATION PLAN

### Phase 1: Update Source of Truth Documents (2 hours)
1. Update 00-master-strategy.md with modular metric framework
2. Update tiering-framework.md with module definitions
3. Update development-roadmap.md with module build sequence

### Phase 2: Align Specifications (4 hours)
1. Rewrite metrics-catalog.md as modular catalog (12 modules × detailed metrics)
2. Update implementation-subset.md to explain T1/T2/T3 module combinations
3. Update power-bi-tech-spec.md with module-based DAX organization

### Phase 3: Update All Other Directories (8 hours)
1. operations/ - Add module delivery checklists
2. training/ - Create module-specific training
3. sales/ - Update with module selection guides
4. marketing/ - Emphasize modular flexibility

---

## KEY BENEFITS

1. **Resolves contradiction** - No more "75 vs 30-150" confusion
2. **Aligns with pricing** - Modules match existing T2/T3 pricing modules
3. **Clear upgrade path** - Customers add modules as they grow
4. **Development clarity** - Build in module sprints, not monolithic
5. **Sales simplicity** - "Which modules do you need?" vs "How many metrics?"
6. **Flexible configurations** - 20+ valid tier+module combinations

---

## CUSTOMER-FACING MESSAGING

**Old:** "Tier 1 has 30 metrics, Tier 2 has 75 metrics, Tier 3 has 150 metrics"
**New:** "Start with 30 core metrics (Base), then add modules as you grow"

**Module Upsell:**
- "Need multi-outlet comparison? Add Multi-Outlet module (+12 metrics, +Rp 1.25M)"
- "Want advanced menu engineering? Add Menu Optimization (+15 metrics, +Rp 1.25M)"
- "Pay only for the modules you'll actually use"

---

## APPROVAL NEEDED

**Product Owner Decision:**
- Approve this modular framework?
- Proceed with updating all documentation?
- Build roadmap follows module sequence?

**Next Steps if Approved:**
1. Update source-of-truth docs (2 hours)
2. Rewrite specifications/ (4 hours)
3. Cascade to all 31+ files needing updates (16 hours)
4. Total effort: ~3 days focused work

---

**Recommendation:** **APPROVE** - This resolves P0 contradiction and aligns entire product strategy

