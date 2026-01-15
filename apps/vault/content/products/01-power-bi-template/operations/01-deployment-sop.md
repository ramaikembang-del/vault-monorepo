# A1 Power BI Template - Deployment SOP

**Owner:** Implementation Specialist
**Frequency:** Per customer deployment
**Last Updated:** December 2025

---

## Purpose

Ensure consistent, successful deployment of Power BI templates to customer environments.

## Scope

**Product:** A1 - Power BI Template (P&L, Cash Flow, COGS Analysis)
**Roles:** Implementation Team, Customer IT, Customer Success

---

## Pre-Deployment Checklist

**Customer Requirements:**
- [ ] Power BI Desktop installed (latest version)
- [ ] Power BI Pro license (at least 1 user)
- [ ] Data source access (POS system, accounting software)
- [ ] Data connector credentials
- [ ] Admin permissions to publish to workspace

**PWBI Preparation:**
- [ ] Template file (.pbit) ready
- [ ] Data connection guide prepared
- [ ] Customer data mapping document
- [ ] Training materials ready

---

## Deployment Process

### Step 1: Data Source Connection (30-60 min)

**Identify Customer Data Source:**
- POS: Moka, Olsera, Pawoon, etc.
- Accounting: Accurate, Jurnal, manual Excel

**Connection Methods:**
1. **API Integration (Preferred)**
 - Obtain API credentials from customer
 - Configure API connector in Power BI
 - Test connection

2. **Database Direct Connect**
 - Get database connection string
 - Whitelist PWBI IP (if needed)
 - Configure ODBC/JDBC connector

3. **Excel/CSV Import (Fallback)**
 - Customer exports data daily
 - Upload to OneDrive/SharePoint
 - Power BI reads from cloud location

### Step 2: Template Configuration (15-30 min)

**Open Template:**
```
1. Customer opens A1_Template_vX.pbit
2. Power BI prompts for parameters:
 - Company Name: [Customer Name]
 - Fiscal Year Start: [Month]
 - Currency: IDR
 - Data Source Type: [API/DB/Excel]
```

**Map Data Fields:**
```
REQUIRED MAPPINGS:

Sales Data:
- Date -> [customer_field_name]
- Revenue -> [customer_field_name]
- Quantity -> [customer_field_name]
- Product/Category -> [customer_field_name]

Cost Data:
- Date -> [customer_field_name]
- COGS -> [customer_field_name]
- Operating Expenses -> [customer_field_name]

Cash Flow:
- Date -> [customer_field_name]
- Cash In -> [customer_field_name]
- Cash Out -> [customer_field_name]
```

### Step 3: Data Refresh & Validation (30 min)

**Refresh Data:**
- Click "Refresh" in Power BI Desktop
- Wait for data to load (first load may take 5-10 min)

**Validate:**
- [ ] Sales figures match customer's records (spot check)
- [ ] Date ranges correct
- [ ] No error messages in queries
- [ ] All visuals rendering properly

**Common Issues:**
| Issue | Fix |
|-------|-----|
| "Column not found" | Recheck field mappings |
| "Authentication failed" | Verify credentials |
| "Timeout error" | Reduce data range or optimize query |

### Step 4: Publish to Power BI Service (15 min)

**Publish:**
```
1. File -> Publish -> Select Workspace
2. Choose workspace: [Customer Name] Workspace
3. Wait for publish to complete
4. Click "Open in Power BI"
```

**Configure Refresh Schedule:**
```
Power BI Service -> Dataset Settings -> Scheduled Refresh

Frequency: Daily
Time: 5:00 AM WIB (before business hours)
Timezone: Asia/Jakarta
Email on Failure: Yes -> [customer_email] + support@pwbi.co.id
```

### Step 5: User Access Setup (10 min)

**Add Users to Workspace:**
```
Workspace -> Access -> Add

Roles:
- Admin: Customer IT Lead
- Member: Managers (can edit)
- Viewer: Analysts (read-only)
```

**Share Report:**
- Get shareable link
- Send to customer users
- Pin to Teams/SharePoint (if integrated)

---

## Post-Deployment

### Training (60-90 min)

**Session 1: Overview & Navigation**
- Dashboard tour
- Key metrics explanation
- Drill-down features
- Filtering

**Session 2: Advanced Features**
- Custom visuals
- Export to Excel
- Scheduled report emails
- Mobile app

### Go-Live Checklist

- [ ] Data refreshing daily successfully
- [ ] All users have access
- [ ] Training completed
- [ ] Customer can navigate independently
- [ ] Support contact info provided
- [ ] Handoff to Customer Success

---

## Ongoing Maintenance

**Monthly:**
- Check data refresh logs (any failures?)
- Verify data accuracy (customer spot check)
- Update template if new version available

**Quarterly:**
- Review usage (are they using it?)
- Identify expansion opportunities (new modules)

---

## Related Documents

- [[08-maintenance-sop|A1 Template Maintenance SOP]]
- [[products/04-accounting-module/product-variants/R2b-cash-flow/training/quick-start|A1 User Guide]]
- [[products/01-power-bi-template/resources/data-connection-guide|Data Connection Guide]]

---

## ECOSYSTEM BUNDLE PACKAGING (NEW)

### Bundle Delivery Structure

**For Tier 1-3 Customers:**

```
A1-Complete-Bundle-Tier-[X]/
"œ"—€ Power-BI-Dashboard/
"‚ """—€ F&B-Analytics-Template-v1.0.0.pbix
"œ"—€ Excel-Templates/
"‚ "œ"—€ Daily-Sales.xlsx
"‚ "œ"—€ Food-Cost.xlsx
"‚ "œ"—€ Staff-Log.xlsx
"‚ """—€ Outlet-Summary.xlsx (Tier 2/3 only)
"œ"—€ Google-Sheets-Links.txt
"‚ (Contains make-a-copy links for all 4 templates)
"œ"—€ Video-Tutorials-Links.txt
"‚ (5 tutorials, 2 min each, Bahasa Indonesia)
"œ"—€ Automation/
"‚ """—€ Power-Query-Auto-Refresh.txt (instructions)
"""—€ README.md (Bundle overview + quick start)
```

### Packaging Checklist

**Before Delivery:**
- [ ] Power BI dashboard configured (customer name, targets set)
- [ ] Excel templates customized:
 - [ ] Tier 1: Generic templates (product/staff dropdowns with samples)
 - [ ] Tier 2: Custom templates (customer's actual products/staff in dropdowns)
 - [ ] Tier 3: White-labeled templates (logo, brand colors, password-protected)
- [ ] Google Sheets versions created (if requested)
- [ ] Video tutorial links verified (all 5 working)
- [ ] README.md updated with customer name and specific instructions
- [ ] Automation scripts configured (if using Power Query auto-refresh)

**Delivery Methods:**

1. **Tier 1 (DIY):**
 - Create ZIP file: `A1-Bundle-Tier1-[CustomerName].zip`
 - Upload to Google Drive
 - Send download link (expires in 7 days)
 - Customer downloads locally

2. **Tier 2/3 (Managed):**
 - Create dedicated Google Drive folder
 - Share folder with customer (edit/view permissions as appropriate)
 - Organized by component (easier to navigate)
 - Files stay accessible indefinitely

**Post-Delivery Verification:**
- [ ] Customer confirmed download/access
- [ ] Customer tested Excel template -> Power BI import workflow
- [ ] No file permission issues reported
- [ ] Customer knows where to find video tutorials

**Bundle Value Communication:**
- Tier 1: "Modular pricing: Rp 3.5M (30 metrics) to Rp 6M (50 metrics)"
- Tier 2: "Modular pricing: Rp 7M (50 metrics) to Rp 12M (100 metrics)"
- Tier 3: "Modular pricing: Rp 10M (100 metrics) to Rp 15M (150 metrics) (support optional)"

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial SOP |


