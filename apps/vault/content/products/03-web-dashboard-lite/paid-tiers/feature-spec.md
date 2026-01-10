# Feature Specification - E1 Paid Tiers

**Product:** E1 - Web Dashboard (Starter & Pro)
**Focus:** Premium features beyond Free Lite tier

---

## Starter Tier Features (Rp 200K/month)

### 1. Extended Metrics (15 total - 10 more than Free)

**Free Tier Has:** 5 metrics (Total Revenue, Total Customers, Best-Seller, Peak Hour, 7-day trend)

**Starter Adds (10 additional metrics):**

**Revenue Expansion:**
6. **Revenue by Channel** - Dine-in vs Takeaway vs Delivery breakdown (pie chart + table)
7. **Average Transaction Value** - Total revenue Ã· # transactions (track upsell effectiveness)
8. **Revenue Growth %** - Month-over-month comparison (e.g., "Dec +15% vs Nov")
9. **Top 10 Best-Sellers** - Full list (vs Top 1 on Free)

**Customer Insights:**
10. **New vs Returning Customers** - % split + trend chart
11. **Customer Visit Frequency** - Average visits per customer per month
12. **Customer Lifetime Value (Basic)** - Total spent Ã· # customers

**Operations:**
13. **Staff Hours & Labor Cost %** - Total hours worked, cost as % of revenue
14. **Peak Hours by Day of Week** - Identify busiest times for staffing
15. **Sales Channel Split %** - Visual breakdown of revenue sources

---

### 2. 30-Day Data History (vs 7 Days Free)

**Implementation:**
- Database retention: Store 30 days of transaction data
- UI: Date range picker allows "Last 7 days", "Last 14 days", "Last 30 days", "This Month", "Last Month"

**Use Case:**
- **Free User Frustration:** "I can't see last week's Tuesday sales" (only 7-day window)
- **Starter Benefit:** Full month view enables month-over-month comparison

**Technical:** Data older than 30 days archived but not deleted (can upgrade to Pro later to view)

---

### 3. Month-over-Month Comparison

**Feature:** Compare current month vs previous month side-by-side

**UI:**
```
December 2025 vs November 2025

Total Revenue:
Rp 45M (Dec) vs Rp 40M (Nov) = +12.5% [x]

Customers:
1,200 (Dec) vs 1,100 (Nov) = +9.1% [x]

Best-Seller:
Nasi Goreng (Dec) vs Nasi Goreng (Nov) = Same

Labor Cost %:
18% (Dec) vs 20% (Nov) = -2% [x] Improved efficiency
```

**Technical:** Auto-calculate % change, highlight positive (green) vs negative (red) changes

---

### 4. Email Support <24h (vs 72h Free)

**SLA:** Respond to Starter tier emails within 24 hours (business days)

**Support Scope:**
- How to interpret metrics
- Dashboard navigation help
- Feature requests (logged for PM review)

---

## Pro Tier Features (Rp 300K/month)

### All Starter Features PLUS:

### 1. Unlimited Metrics (40+ pre-built)

**Starter Has:** 15 metrics
**Pro Adds:** 25+ additional advanced metrics

**Advanced Revenue Metrics:**
- Revenue by Time Slot (breakfast 6-10am, lunch 11-2pm, dinner 5-9pm, late-night 9pm+)
- Revenue by Day of Week (Monday-Sunday breakdown)
- Revenue Seasonality Heatmap (identify slow/peak months)
- Discount Impact Analysis (promo ROI)
- Upsell Revenue (add-ons, desserts, drinks beyond main dish)
- Revenue per Square Meter (for multi-location comparison)

**Advanced Customer Metrics:**
- Customer Retention Rate (cohort-based: "Dec signups, how many returned in Jan?")
- Customer Churn Rate
- Customer Segmentation (high/medium/low value tiers)
- Average Days Between Visits
- Customer Acquisition Cost (if running ads - integrated with ad spend data)
- Repeat Purchase Rate

**Advanced Operations Metrics:**
- Table Turnover Rate (# tables served per hour, dine-in only)
- Average Delivery Time (order placed  ->  delivered)
- Staff Productivity (revenue per staff hour worked)
- Waste Estimate % (future - if integrated with R2c)
- Kitchen Efficiency (order placed  ->  food ready time)
- Order Average Prep Time

**Financial Metrics:**
- Profit Margin % (if R2a/R2c integrated: Revenue - COGS - OpEx)
- Break-Even Analysis (fixed costs Ã· contribution margin)
- Cash Flow Forecast (basic - based on historical patterns)

---

### 2. 90-Day Data History (vs 30 Days Starter)

**Use Case:** Seasonal analysis (Ramadan Jan-Feb vs normal months, year-end holidays vs regular)

**Technical:** 90-day rolling window, older data archived

---

### 3. Custom Metrics Builder

**Feature:** User defines their own calculated metrics

**Example Use Cases:**

**Custom Metric 1: "Profit per Staff Hour"**
```
Formula: (Revenue - COGS - Labor Cost) Ã· Total Staff Hours
Data Sources: E1 revenue, R2a COGS, E1 staff hours
Result: "Rp 125K profit per staff hour (December avg)"
```

**Custom Metric 2: "Delivery Profitability"**
```
Formula: Delivery Revenue - (Delivery COGS + GoFood Commission 20%)
Data Sources: E1 revenue by channel, R2c COGS, manual commission input
Result: "Delivery margin: 15% (vs 40% dine-in) - too thin"
```

**UI:**
```
Custom Metric Builder

Name: [Profit per Staff Hour_____________]

Formula:
([Revenue] - [COGS] - [Labor Cost]) Ã· [Staff Hours]

Available Fields:
- Revenue (E1)
- COGS (R2a/R2c)
- Labor Cost (E1)
- Staff Hours (E1)
- Custom Input: [_______]

Preview Calculation (December):
(Rp 45M - Rp 12M - Rp 8M) Ã· 200 hours = Rp 125K per hour

[Save Metric] [Cancel]
```

**Technical:** Store formula in database, recalculate daily

---

### 4. Scheduled Reports (Auto-Email)

**Feature:** Automatically email reports weekly/monthly

**Configuration:**
```
Scheduled Report Setup

Report Name: [Weekly Performance Summary______]

Frequency:
[ ] Daily
[x] Weekly (every Monday 8am)
[ ] Monthly (1st of month)

Metrics to Include:
[x] Total Revenue
[x] Revenue Growth %
[x] Top 10 Best-Sellers
[ ] Customer LTV
[x] Labor Cost %

Recipients:
- owner@restaurant.com
- manager@restaurant.com
- partner@restaurant.com

Format:
[x] PDF
[ ] Excel

[Save Schedule]
```

**Email Example:**
```
Subject: Weekly Performance Summary - Dec 18-24, 2025

Hi [Name],

Here's your R2a weekly summary:

Total Revenue: Rp 11.5M (week of Dec 18-24)
vs Last Week: +8% [x]

Top 3 Best-Sellers:
1. Nasi Goreng (125 orders)
2. Chicken Satay (98 orders)
3. Latte (87 orders)

Labor Cost: 17.5% (healthy - target <20%)

[View Full Dashboard] [Download PDF Report]

- E1 Pro
```

---

### 5. Multi-User Access (Up to 3 Users)

**Feature:** Add team members (manager, partner, accountant) with role-based permissions

**User Roles:**

**Admin (Owner):**
- Full access (view, edit, settings, billing)
- Add/remove users
- Export data

**Manager:**
- View all metrics
- Export reports
- Cannot change settings or billing

**View-Only (Investor/Partner):**
- View metrics only
- Cannot export or edit
- Custom: Can restrict to specific metrics (e.g., "investor sees revenue only, not COGS")

**UI:**
```
Team Members (Pro Feature)

Current Users (2/3 used):
1. owner@restaurant.com (Admin - You)
2. manager@restaurant.com (Manager - Added Dec 15)

[+ Add Team Member]

Add New User:
Email: [_______________]
Role: [Managerv] (Admin / Manager / View-Only)

[Send Invitation]
```

**Technical:** JWT tokens, role-based access control (RBAC)

---

### 6. Priority Support (WhatsApp + Email <4h)

**SLA:** Respond within 4 hours (9am-9pm, 7 days/week)

**Channels:**
- WhatsApp: +62-XXX-XXXX (Premium support line)
- Email: support-pro@[company].com

**Support Scope:**
- Priority queue (ahead of Starter/Free)
- Custom metric formula help
- Data analysis consultation ("Why did revenue drop?")

---

### 7. Branded Exports (PDF/Excel)

**Feature:** Add business logo/branding to exported reports

**UI:**
```
Export Settings (Pro)

Report Branding:
[Upload Logo] (PNG/JPG, max 500KB)

Business Name: [Warung Pak Budi______________]
Tagline: [Authentic Indonesian Cuisine___]

Footer Text: [Confidential - Internal Use Only]

Preview:
[Shows branded PDF with logo at top]

[Save Branding] [Export Report]
```

**Use Case:** Share reports with investors, bank (for loan applications) - looks professional

---

## Future Features (Roadmap - Month 12+)

**API Access (Pro tier):**
- REST API for custom integrations
- Webhook notifications ("Revenue >Rp 50M/month"  ->  Trigger email)

**Predictive Analytics:**
- Revenue forecasting ("Based on trends, expect Rp 48M next month")
- Customer churn prediction ("15 customers at risk of churning")

**Mobile App:**
- Native iOS/Android for on-the-go dashboard viewing
- Push notifications for key metrics

---

## Related Documents

- [[tier-comparison|tier-comparison.md]] - Full feature matrix
- [[pricing-strategy|pricing-strategy.md]] - Why Rp 200K/300K
- [[products/03-web-dashboard-lite/03-web-dashboard-lite|README.md]] - Paid tiers overview

**Last Updated:** 2025-12-26
**Owner:** Product Manager



---

**Related Documents:**
- [[products/03-web-dashboard-lite/03-web-dashboard-lite|Product Overview]] - Main product documentation
- [[products/03-web-dashboard-lite/paid-tiers/paid-tiers|Paid Tiers Hub]] - Paid tier documents

