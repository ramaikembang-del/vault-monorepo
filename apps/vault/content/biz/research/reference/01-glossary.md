# F&B Business Glossary

> Key terms and metrics used in F&B Ops Insight.

---

## Related Documents
- [[biz/research/research|Research Hub]]
- [[products/03-web-dashboard-lite/03-web-dashboard-lite|App Concept]]

---

## Financial Metrics

### Revenue
**Gross Revenue** = Total sales before deductions
**Net Revenue** = Gross revenue - discounts - refunds - taxes

### Costs
**COGS (Cost of Goods Sold)** = Direct cost of ingredients/products sold
**Labor Cost** = Salaries, wages, benefits for staff
**Operating Expenses (OpEx)** = Rent, utilities, marketing, supplies, etc.

### Profitability
**Gross Profit** = Net Revenue - COGS
**Net Profit** = Gross Profit - Labor Cost - OpEx
**Profit Margin %** = (Net Profit ÷ Net Revenue) × 100

### Key Ratios

**Prime Cost**
= (COGS + Labor Cost) ÷ Net Revenue × 100
**Target**: <65% for healthy F&B business
**Why it matters**: The two biggest variable costs. If >70%, you're at risk.

**Food Cost %**
= COGS ÷ Net Revenue × 100
**Target**: 28-35% for restaurants, 20-25% for cafés

**Labor Cost %**
= Labor Cost ÷ Net Revenue × 100
**Target**: 25-35% depending on service model

---

## Menu Engineering

### BCG Matrix (Menu Engineering Matrix)

Categorizes menu items into 4 quadrants based on:
- **Sales Volume** (popularity)
- **Profit Margin** (profitability)

| Quadrant | Sales | Profit | Strategy |
|----------|-------|--------|----------|
| ** Star** | High | High | Protect & promote heavily |
| ** Plowhorse (Workhorse)** | High | Low | Increase price or reduce cost |
| ** Puzzle** | Low | High | Market better, make it visible |
| ** Dog** | Low | Low | Remove or completely reinvent |

**How to calculate**:
- Median sales volume = middle point of all items' sales
- Median profit margin = middle point of all items' margins
- High = above median, Low = below median

### Contribution Margin
= Selling Price - COGS per item
Shows how much each sale contributes to covering fixed costs + profit.

---

## Operational Metrics

### Peak Hours
Time slots with highest customer traffic/transaction volume.

**Why it matters**: Helps optimize staffing, inventory prep, and marketing.

### Customer Intensity
Number of customers or transactions per time period.

**Measured**: Hourly, daily, weekly

### Table Turnover (for dine-in)
= Number of customers served ÷ Number of seats ÷ Hours open

**Example**: 120 customers, 40 seats, 12 hours = 0.25 turnovers/hour

### Staff-to-Revenue Ratio
= Labor Cost ÷ Revenue × 100
or
= Number of Staff ÷ Revenue (Millions)

**Why it matters**: Indicates if you're over/understaffed relative to sales.

---

## Sales Metrics

### Transaction Count
Total number of orders/bills in a period.

### Average Transaction Value (ATV)
= Total Revenue ÷ Transaction Count

**Example**: Rp 10 Jt revenue ÷ 500 transactions = Rp 20k ATV

### Week-over-Week (WoW)
Comparison of this week's metric vs last week.

**Example**: This week sales Rp 15 Jt, last week Rp 14 Jt = +7% WoW

### Month-over-Month (MoM)
Comparison vs same metric last month.

### Year-over-Year (YoY)
Comparison vs same period last year (seasonal context).

---

## Survival Metrics (F&B Ops Insight Specific)

### Health Score
**Range**: 0-100
**Calculation**: Weighted average of:
- Financial health (40%): Profit margin, prime cost
- Sales trend (25%): Revenue growth, transaction count
- Cost control (25%): COGS %, Labor %
- Menu balance (10%): BCG diversity

**Interpretation**:
- 80-100: Smooth Sailing - business is healthy
- 60-79: Watch Carefully - some concerns
- 40-59: Action Needed - immediate attention required
- 0-39: Survival Mode - critical issues

### Alerts
Automated warnings based on:
- **Threshold**: Metric exceeds/falls below target (e.g., Prime Cost >70%)
- **Trend**: Metric moving in wrong direction for X periods
- **Anomaly**: Unusual spike or drop

**Severity**:
- Critical: Immediate action required
- Warning: Worth investigating
- Positive: Good news/achievement

---

## Industry Terms

### Cover
One customer/guest. "120 covers" = 120 customers served.

### Par Level
Optimal inventory level to maintain (not too much, not too little).

### 86'd
Item is sold out/unavailable. "86 the rendang" = no more rendang today.

### Back of House (BOH)
Kitchen and prep areas, not customer-facing.

### Front of House (FOH)
Customer-facing areas: dining room, cashier, service staff.

### Comps
Complimentary items given free (to VIPs, complaints, etc.)
Reduces revenue without reducing COGS.

---

## Data Terms

### CSV (Comma-Separated Values)
Spreadsheet file format, easy to export from POS/accounting software.

### POS (Point of Sale)
System used to process transactions (e.g., Moka, Majoo, iPos).

### Reconciliation
Matching actual cash/revenue vs recorded sales. Done daily/weekly.

---

## Time Periods

**Daily**: Today, yesterday
**Weekly**: Last 7 days, this week (Mon-Sun)
**Monthly**: Calendar month (1st-30th/31st)
**Quarterly**: 3-month period (Q1: Jan-Mar, Q2: Apr-Jun, etc.)
**Annual**: Full year (Jan-Dec)

**Fiscal Year**: Company's financial year (may not match calendar year)

---

## Common Abbreviations

**COGS** = Cost of Goods Sold
**OpEx** = Operating Expenses
**P&L** = Profit & Loss Statement
**WoW** = Week over Week
**MoM** = Month over Month
**YoY** = Year over Year
**ATV** = Average Transaction Value
**FOH** = Front of House
**BOH** = Back of House
**ROI** = Return on Investment
**KPI** = Key Performance Indicator

---

## Example Calculation Walkthrough

### Sample Café Monthly Data:

```
Revenue: Rp 50,000,000
COGS: Rp 15,000,000 (ingredients)
Labor: Rp 13,000,000 (staff salaries)
Rent: Rp 5,000,000
Utilities: Rp 2,000,000
Marketing: Rp 1,000,000
Other OpEx: Rp 1,000,000
```

### Calculations:

**Gross Profit**
= 50M - 15M = **Rp 35,000,000**

**Total OpEx**
= 13M (labor) + 5M + 2M + 1M + 1M = **Rp 22,000,000**

**Net Profit**
= 35M - 22M = **Rp 13,000,000**

**Profit Margin**
= (13M ÷ 50M) × 100 = **26%** Healthy

**Prime Cost**
= (15M + 13M) ÷ 50M × 100 = **56%** Excellent (below 65%)

**Food Cost %**
= 15M ÷ 50M × 100 = **30%** Within target

**Labor Cost %**
= 13M ÷ 50M × 100 = **26%** Efficient

**Health Score**: ~85 (Smooth Sailing)

---

## References

- National Restaurant Association (US) standards
- Indonesian F&B industry benchmarks
- Menu engineering principles (Kasavana & Smith, 1982)
