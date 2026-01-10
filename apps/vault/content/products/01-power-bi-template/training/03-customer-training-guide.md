# A1: Power BI Template - Complete Training Guide (Ecosystem Bundle)

**Last Updated:** 2025-12-29
**Product:** A1 Complete F&B Data Ecosystem
**For:** All tiers (Essentials 30-50 metrics / Professional 50-100 metrics / Enterprise 100-150 metrics)

---

## Module 0: Excel Template Mastery (30 minutes) - START HERE!

**Learning Objectives:**
- Understand the 4 Excel templates and when to use each
- Fill Daily-Sales.xlsx with actual data
- Use dropdowns for error-free entry
- Import POS export to Excel template (Tier 2/3 Professional/Enterprise)

**Hands-On Exercise:**
1. Fill 3 days of sales in Daily-Sales.xlsx
2. Create 2 recipes in Food-Cost.xlsx
3. Log 1 staff shift in Staff-Log.xlsx
4. Save all files

**Success Criteria:**
- No formula errors
- Dropdowns used (not typed manually)
- Ready to import to Power BI

**Key Insight:** Excel templates = 80% of your workflow. Master this first!

---

## Quick Start (Power BI - 30 minutes)

### Prerequisites
- Power BI Desktop installed (free from Microsoft)
- POS data export (CSV) OR connected POS system
- Basic Excel/data skills

### Step 1: Get the Template
1. Download A1 template from customer portal
2. Open in Power BI Desktop
3. You'll see sample F&B data

### Step 2: Connect Your Data
**Method 1: CSV Upload** (easiest)
1. Export sales data from your POS
2. Power BI -> Home -> Get Data -> Text/CSV
3. Select your file
4. Map columns (Date, Amount, Item, Category, etc.)
5. Click "Load"

**Method 2: Direct POS Connection** (if supported)
1. Home -> Get Data -> [Your POS]
2. Enter API credentials
3. Select date range
4. Load

### Step 3: Refresh & Explore
1. Home -> Refresh to load your data
2. Navigate pages: Sales Overview, Item Performance, P&L, Cash Flow
3. Use filters (date, outlet, category)

**First "Aha Moment":** See your best-selling items ranked!

---

## Advanced Features

### Custom Reports
**Add New Page:**
1. Insert -> New Page
2. Drag measures from Fields pane
3. Choose visualization (chart, table, card)
4. Format as desired

**Custom Calculations (DAX):**
```dax
// Food Cost %
Food Cost % = DIVIDE([Total COGS], [Total Revenue])

// YoY Growth
YoY Growth = ([This Year Revenue] - [Last Year Revenue]) / [Last Year Revenue]
```

### Dashboard Customization
- **Branding:** Insert -> Image -> Add your logo
- **Colors:** Format -> Theme -> Custom colors
- **Layout:** Drag/resize visuals
- **

Interactivity:** Use slicers for dynamic filtering

### Multi-Outlet Setup
1. Ensure data has "Outlet" column
2. Add outlet slicer to each page
3. Duplicate pages for outlet-specific views
4. Use bookmarks for quick navigation

### Scheduled Refresh (Power BI Service)
1. Publish to Power BI Service
2. Settings -> Data source credentials
3. Schedule refresh (daily/weekly)
**Note:** Requires Power BI Pro license

---

## Module-Specific Training (Tier 2/3)

### Professional Modules (Tier 2 - 50-100 metrics)

**Multi-Outlet Operations Module (20 minutes):**
- Learn to consolidate data from multiple outlets using Outlet-Summary.xlsx
- Compare performance across locations
- Identify best practices from top-performing outlets
- **Key Metric:** Revenue per outlet, outlet growth trends

**Menu Optimization Module (30 minutes):**
- Use BCG matrix to identify Stars, Cash Cows, and Dogs
- Calculate contribution margin per menu item
- Analyze ingredient cost trends with Recipe-Cost.xlsx
- **Key Action:** Identify 3 items to promote, 2 to improve, 1 to remove

**Workforce Analytics Module (20 minutes):**
- Track staff performance using Staff-Log.xlsx
- Set up bonus thresholds and tier badges (Gold/Silver/Bronze)
- Monitor punctuality and productivity metrics
- **Key Metric:** Sales per labor hour, staff retention rate

**Customer Mastery Module (30 minutes):**
- Build customer loyalty ladder (First-timer -> Regular -> VIP)
- Calculate customer lifetime value (CLV)
- Identify at-risk customers (churn prevention)
- **Key Action:** Create VIP retention campaign

### Strategic Modules (Tier 3 - 100-150 metrics)

**Executive Intelligence Module (1 hour):**
- Dashboard navigation for C-level insights
- Scenario analysis tools (what-if parameters)
- Gap-to-target analysis with required run rate
- **Delivered via:** Monthly consulting call

**Advanced Menu/Workforce/Customer Modules:**
- Automated insights and recommendations
- Cross-sell matrix, labor optimization, RFM segmentation
- **Training:** Included in managed service onboarding

**Note:** Module training delivered during 2-hour setup call (Tier 2) or managed onboarding (Tier 3).

---

## Common Issues & Solutions

**"Can't load data"**
- Check CSV format (UTF-8, comma-separated)
- Ensure column headers match template
- Look for special characters in data

**"Visuals show #ERROR"**
- Missing data in required fields
- Date format incorrect (use YYYY-MM-DD)
- Refresh data source

**"Performance is slow"**
- Limit date range (last 12 months vs all time)
- Remove unused columns from data model
- Aggregate data before loading

**"Numbers don't match POS"**
- Verify date filters match
- Check if POS includes/excludes voided transactions
- Ensure timezone consistency

---

## Best Practices

**Data Management:**
- Update data weekly minimum
- Keep historical data (don't delete old months)
- Document any manual adjustments

**Report Design:**
- Focus on key metrics (don't overcrowd)
- Use consistent colors/fonts
- Add context (comparisons to last month/year)

**Sharing:**
- Publish to Power BI Service for team access
- Export to PDF for static reports
- Schedule email delivery

---

## Training Resources

**Microsoft Learn:**
- Power BI Basics (free course)
- DAX fundamentals

**PWBI Support:**
- Video tutorials in customer portal
- Monthly webinar (first Tuesday)
- Email: support@pwbi.id

---

**Next:** Explore Item Performance page to find your most profitable menu items!

**Last Updated:** December 30, 2025 - Added module-specific training sections

---

## Related

- **[[products/01-power-bi-template/01-power-bi-template|Power BI Template Product]]** - Product overview
- **[[products/01-power-bi-template/training/01-quick-start-guide|Quick Start Guide]]** - 30-minute quick start
- **[[products/01-power-bi-template/training/05-advanced-features-guide|Advanced Features Guide]]** - Advanced features and customization
- **[[products/01-power-bi-template/customer-success/onboarding-playbook|Onboarding Playbook]]** - Customer onboarding process
- **[[products/01-power-bi-template/specifications/technical/02-database-schema|Database Schema]]** - Technical data model
