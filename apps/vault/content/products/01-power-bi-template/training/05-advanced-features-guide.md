# A1 Power BI Template - Advanced Features Guide (Complete Ecosystem)

**For:** Users who completed quick-start and want to go deeper

---

## Excel + Power BI Integration (Ecosystem Bundle)

### One-Click Refresh Workflow
**The killer feature of the ecosystem:**

1. Fill Excel templates daily (staff uses familiar Excel)
2. Open Power BI -> Home -> **Refresh** (one button)
3. Data updates in 30 seconds
4. Dashboard ready with latest numbers!

**Key Benefit:** No CSV export, no formatting, no column mapping. Just: Excel -> Refresh -> Done.

### Multi-Outlet Consolidation
Use `Outlet-Summary.xlsx` to combine data from multiple locations (Tier 2/3 Professional/Enterprise):

1. Each outlet fills their own Daily-Sales.xlsx
2. Outlet-Summary.xlsx consolidates automatically
3. Power BI imports summary
4. Compare outlet performance side-by-side

### Google Sheets Mobile Workflow
**For on-the-go data entry:**

1. Open Daily-Sales (Google Sheets version) on phone
2. Fill sales while mobile
3. Real-time sync across devices
4. Power BI imports from Sheets (if configured)

**Best For:** Multi-outlet teams, field staff, areas with desktop access limitations

---

## Custom Reports

### Add New Page

1. Insert -> New Page
2. Drag measures from Fields pane
3. Choose visualization (chart, table, card)
4. Format as desired

### Custom Calculations (DAX)

**Food Cost %:**
```dax
Food Cost % = DIVIDE([Total COGS], [Total Revenue])
```

**Year-over-Year Growth:**
```dax
YoY Growth =
VAR LastYear = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR('Date'[Date]))
RETURN DIVIDE([Total Revenue] - LastYear, LastYear)
```

**Average Transaction Value:**
```dax
Avg Transaction = DIVIDE([Total Revenue], [Transaction Count])
```

---

## Dashboard Customization

### Branding
- Insert -> Image -> Add your logo
- Position in top-left or header

### Colors
- Format -> Theme -> Custom colors
- Use your brand colors
- Maintain contrast for readability

### Layout
- Drag/resize visuals
- Align using Format -> Align tools
- Group related visuals

### Interactivity
- Add slicers for dynamic filtering
- Set up drill-through pages
- Use bookmarks for navigation

---

## Multi-Outlet Setup

1. Ensure data has "Outlet" column
2. Add outlet slicer to each page
3. Duplicate pages for outlet-specific views
4. Use bookmarks for quick outlet switching

**Consolidated View:**
- Use "All Outlets" filter option
- Compare outlet performance side-by-side

---

## Scheduled Refresh (Power BI Service)

**Requires:** Power BI Pro license

**Setup:**
1. Publish to Power BI Service
2. Settings -> Data source credentials
3. Schedule refresh:
 - Daily: Best for active businesses
 - Weekly: For less frequent needs
4. Set time (e.g., 6 AM before you check)

**Sharing:**
- Share dashboard with team
- Embed in website/app
- Email subscriptions

---

## Performance Optimization

**If dashboard is slow:**

1. **Limit date range:**
 - Last 12 months vs all time
 - Use relative dates

2. **Remove unused columns:**
 - Only load columns you need
 - Delete unnecessary fields from model

3. **Aggregate data:**
 - Use summary tables for old data
 - Keep detail only for recent periods

4. **Optimize visuals:**
 - Limit to 5-7 visuals per page
 - Avoid over-complex calculations

---

## Advanced Analysis

### Menu Engineering Matrix

Classify items as:
- **Stars** (High volume + High margin)
- **Plow Horses** (High volume + Low margin)
- **Puzzles** (Low volume + High margin)
- **Dogs** (Low volume + Low margin)

Create scatter plot: Volume (X) vs Margin (Y)

### Cohort Analysis

Track customer retention by signup month

### Forecasting

Use built-in analytics -> Forecast to predict future sales

---

## Integration with Other Tools

**Export data:**
- Excel: For further analysis
- PDF: For static reports
- PowerPoint: For presentations

**Connect to accounting:**
- Export P&L to Accurate Online
- Link to Jurnal.id

---

## Troubleshooting Advanced Issues

**Relationships not working:**
- Check Data -> Manage Relationships
- Ensure key columns match (case-sensitive)

**Calculations returning wrong values:**
- Check filter context
- Use DAX Studio for debugging
- Verify measure logic step-by-step

**Publish fails:**
- File size >1GB? Optimize data model
- Check for unsupported data sources
- Verify credentials configured

---

## Module-Specific Advanced Features

### Professional Modules (Tier 2)

**Multi-Outlet Operations:**
- Advanced: Set up outlet-level drill-through pages
- Custom hierarchies: Region -> City -> Outlet
- Variance analysis: Best vs worst performing locations
- **Pro Tip:** Use bookmarks to create "outlet scorecard" quick views

**Menu Optimization:**
- Advanced BCG Matrix with quadrant filtering
- Recipe cost sensitivity analysis (what-if ingredient prices change)
- Cross-sell matrix: Items frequently ordered together
- **Pro Tip:** Export menu performance to Excel for menu redesign workshops

**Workforce Analytics:**
- Custom staff performance scores (weight components as needed)
- Shift efficiency analysis (revenue per shift vs labor cost)
- Predictive scheduling: Match staffing to forecast demand
- **Pro Tip:** Create staff-specific drill-through for 1-on-1 performance reviews

**Customer Mastery:**
- RFM segmentation (Recency, Frequency, Monetary)
- Customer journey mapping: First visit -> Repeat -> VIP
- Churn prediction: Identify at-risk customers early
- **Pro Tip:** Export VIP list to CRM for targeted marketing campaigns

### Strategic Modules (Tier 3)

**Executive Intelligence:**
- Scenario planning with what-if parameters
- Gap-to-target decomposition (why are we behind?)
- Required run rate calculator (what daily sales needed to hit monthly target?)
- **Advanced:** Create board presentation templates with key slides

**Advanced Menu/Workforce/Customer:**
- Machine learning forecasts (if data sufficient)
- Automated anomaly detection alerts
- Custom KPI dashboards tailored to your business model
- **Note:** These are configured during managed service - contact your account manager

---

**Master these features and you'll be a Power BI pro!**

**Last Updated:** December 30, 2025 - Organized by modules, added advanced features per tier

---

## Related

- **[[products/01-power-bi-template/01-power-bi-template|Power BI Template Product]]** - Product overview
- **[[products/01-power-bi-template/training/01-quick-start-guide|Quick Start Guide]]** - 30-minute quick start
- **[[products/01-power-bi-template/training/03-customer-training-guide|Customer Training Guide]]** - Comprehensive training guide
- **[[products/01-power-bi-template/specifications/technical/02-database-schema|Database Schema]]** - Technical data model and DAX measures
- **[[products/01-power-bi-template/product-strategy/tiers/02-tier-2-strategy|Tier 2 Product Strategy]]** - Advanced multi-outlet features
