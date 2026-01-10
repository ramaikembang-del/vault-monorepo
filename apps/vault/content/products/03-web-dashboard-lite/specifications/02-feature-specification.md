# Feature Specification: 30 Base Metrics

## Overview

Web Dashboard Lite implements **30 survival-focused metrics** (vs 150 in Full SaaS Platform). This subset is chosen through PMF validation to identify which metrics Mikro segment users actually need.

---

## Selection Criteria

**Why 30 metrics?**
1. **Simplicity:** Overwhelming users with 150 metrics defeats "30-second insight" goal
2. **Survival Focus:** Mikro segment cares about "Am I profitable?" not "Customer CLV forecast"
3. **Data Availability:** Assumes only POS CSV exports (no real-time integrations)
4. **Validation:** Test which metrics are used before building all 150 for Full SaaS

---

## Dashboard Structure

### Tab 1: Financial Health (10 metrics)
**Goal:** "Am I making money or losing money?"

1. **Total Revenue** (MTD, YTD)
2. **Gross Profit** (Revenue - COGS)
3. **Profit Margin %** (Gross Profit / Revenue)
4. **Prime Cost %** ((COGS + Labor) / Revenue) - should be 55-65%
5. **Food Cost %** (Food COGS / Revenue)
6. **Beverage Cost %** (Beverage COGS / Revenue)
7. **Labor Cost %** (Staff wages / Revenue)
8. **Revenue vs Target** (Actual vs monthly goal)
9. **Avg Transaction Value** (Revenue / Transaction count)
10. **Cash Position** (Simple in/out tracking)

**Why these:** Fundamental survival metrics. If Prime Cost > 65%, business is at risk.

---

### Tab 2: Product Performance (10 metrics)
**Goal:** "What should I sell more of? What should I remove?"

11. **Top 5 Sellers** (by revenue)
12. **Bottom 5 Sellers** (by revenue)
13. **Menu Item Profit Margin** (by item)
14. **BCG Matrix - Stars** (High growth, high revenue)
15. **BCG Matrix - Cash Cows** (Low growth, high revenue)
16. **BCG Matrix- Dogs** (Low growth, low revenue) → Remove these
17. **BCG Matrix - Question Marks** (High growth, low revenue)
18. **Category Mix** (Food vs Beverage vs Dessert revenue %)
19. **Items Sold Count** (units per item)
20. **Revenue per Menu Category**

**Why these:** Simple menu engineering. Remove Dogs, promote Stars, harvest Cash Cows.

---

### Tab 3: Operations & Staff (10 metrics)
**Goal:** "When are my peak hours? How is my staff performing?"

21. **Peak Hours Heatmap** (revenue by hour, Mon-Sun)
22. **Customer Intensity** (transactions per hour)
23. **Avg Service Duration** (time per transaction)
24. **Staff Sales Per Hour** (by employee)
25. **Staff Attendance Rate** (on-time vs late)
26. **Shift Coverage** (staffed hours vs open hours)
27. **Week-over-Week Revenue** (trend line)
28. **Daily Revenue Comparison** (today vs avg)
29. **Transaction Count** (total transactions)
30. **Repeat Customer Rate** (basic: transactions with known customer ID / total)

**Why these:** Operational decisions. Know when to staff up, who performs best, when to be open.

---

## NOT Implemented (Available in Full SaaS)

### Advanced Financial (20 metrics)
- Cash flow forecasting
- Multi-currency support
- Budget variance analysis
- Break-even analysis
- ROI tracking

### Advanced Product (25 metrics)
- Seasonal menu performance
- Recipe costing & ingredient tracking
- Waste tracking
- Supplier comparison
- Menu item correlations (basket analysis)

### Advanced Staff (30 metrics)
- Performance scorecards
- Training effectiveness
- Discipline scores (punctuality, voids, refunds)
- Upsell metrics per staff
- Coaching indicators

### Advanced Customer (30 metrics)
- Customer Lifetime Value (CLV)
- RFM segmentation (Recency, Frequency, Monetary)
- NPS (Net Promoter Score)
- Loyalty tier tracking
- Churn prediction

### Benchmarking & Forecasting (15 metrics)
- Industry benchmarks (compare to similar restaurants)
- AI forecasting (next 30-90 days)
- What-if scenarios
- Anomaly detection
- Predictive alerts

**Total Full SaaS:** 150 metrics
**Lite Subset:** 30 metrics (20% of full catalog)

---

## Data Sources Required

### Minimal POS Export CSV
```
Sales CSV:
- transaction_id
- date (YYYY-MM-DD)
- time (HH:MM:SS)
- product_name
- quantity
- unit_price
- total_amount
- staff_id
- payment_method

Staff CSV (optional for staff metrics):
- staff_id
- name
- clock_in
- clock_out
- date

Product CSV (for COGS):
- product_id
- product_name
- cost_price
- category (Food/Beverage/Dessert)
```

**Lite Version Assumption:** Daily CSV export is manageable. Real-time data requires Full SaaS.

---

## Metric Calculation Logic

### Example: Prime Cost %
```sql
SELECT
 SUM(food_cost + beverage_cost + labor_cost) AS prime_cost,
 SUM(revenue) AS total_revenue,
 (prime_cost / total_revenue) * 100 AS prime_cost_percentage
FROM daily_summary
WHERE date >= '2025-12-01' AND date <= '2025-12-31'
```

**Benchmark:** 55-65% is healthy for F&B. >65% = losing money.

### Example: BCG Matrix
```sql
-- Stars: High revenue growth, high current revenue
SELECT product_name, revenue, growth_rate
FROM product_performance
WHERE revenue > PERCENTILE_CONT(0.5) AND growth_rate > 0.1

-- Dogs: Low revenue, declining or flat
SELECT product_name, revenue, growth_rate
FROM product_performance
WHERE revenue < PERCENTILE_CONT(0.5) AND growth_rate < 0.05
```

**Action:** Remove Dogs from menu, invest in Stars.

---

## Display Format

### Health Score (0-100)
```
Components:
- Profitability (30 points): Profit margin vs industry benchmark
- Revenue Growth (25 points): Revenue trend (up/down/flat)
- Staff Efficiency (25 points): Sales per hour per staff
- Customer Satisfaction (20 points): Repeat rate (if available)

Total: 0-100
```

**Color Coding:**
- 80-100: Green (healthy)
- 60-79: Yellow (caution)
- 0-59: Red (danger)

### Alert System (5 Basic Rules)
1. **Cash Alert:** Cash position < 2 weeks operating expenses
2. **Prime Cost Alert:** Prime Cost % > 65%
3. **Revenue Alert:** Revenue down >10% vs last month
4. **Staff Alert:** Staff turnover > 20%/month
5. **Menu Alert:** >25% of revenue from "Dogs" (should remove)

**Lite Limitation:** Only 5 pre-defined alerts. Full SaaS allows custom rules.

---

## Validation Strategy

### Which Metrics Matter?
Track usage:
```typescript
// Anonymized telemetry (opt-in only)
Log which metrics users view most:
- View count per metric
- Time spent per tab
- Which alerts are most clicked

After 6 months:
- If metric viewed <10% of sessions → consider removing
- If metric viewed >80% of sessions → highlight in Full SaaS
```

**PMF Learning:** Validate 30 metric hypothesis, refine for Full SaaS.

---

## Upgrade Triggers

### When 30 Metrics Become Insufficient

**Signals user needs Full SaaS:**
1. User manually tracks metrics not in Lite (writes Excel formulas)
2. User asks support: "Can I see [advanced metric]?"
3. User opens 2nd outlet (needs multi-location aggregation)
4. User wants daily refresh (not just EOD CSV import)

**Conversion Prompt:** "You're tracking more than Lite offers. Upgrade to Full SaaS for 150 metrics + real-time data."

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/product-strategy/product-strategy|Product Strategy]]** - Feature prioritization framework
- **[[products/03-web-dashboard-lite/specifications/04-electron-architecture|Electron Architecture]]** - Technical implementation
- **[[products/03-web-dashboard-lite/specifications/06-upgrade-triggers|Upgrade Triggers]]** - Premium features that drive upgrades

---

**Status:** Specification complete
**Next:** Define exact SQL queries for each metric
**Owner:** [TBD]
**Last Updated:** December 25, 2025
