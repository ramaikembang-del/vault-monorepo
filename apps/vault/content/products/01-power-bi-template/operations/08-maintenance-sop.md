# A1 Power BI Template - Maintenance SOP

**Owner:** Support Team / Customer Success
**Frequency:** Ongoing
**Last Updated:** December 2025

---

## Purpose

Maintain Power BI templates with updates, bug fixes, and performance optimization.

## Scope

**Product:** A1 - Power BI Template
**Roles:** Product Team, Support, Customers

---

## Routine Maintenance

### Data Refresh Monitoring (Daily)

**Automated Alerts:**
- Email sent if refresh fails
- Support ticket auto-created

**Response:**
1. Check Power BI Service -> Refresh History
2. Identify error (credentials, timeout, data source down)
3. Fix and manual refresh
4. Notify customer if affecting reports

**Common Failures:**
| Error | Cause | Fix |
|-------|-------|-----|
| Authentication | Expired credentials | Update in gateway settings |
| Timeout | Large dataset | Optimize query or increase timeout |
| Data source unavailable | Customer system down | Wait or contact customer IT |

### Performance Optimization (Monthly)

**Check Performance:**
- Report load time (target: < 5 seconds)
- Query execution time
- Dataset size

**Optimize if Needed:**
- Remove unused columns
- Aggregate data (daily instead of transaction-level)
- Use incremental refresh for large datasets

---

## Template Updates

### Version Updates (Quarterly)

**When to Update:**
- New features added
- Bug fixes
- Performance improvements
- Visual design changes

**Update Process:**
1. **Develop:** Update template (.pbit file)
2. **Test:** Deploy to test environment
3. **Document:** Create release notes
4. **Communicate:** Email customers 2 weeks before
5. **Deploy:** Customers download new version
6. **Support:** Monitor for issues post-update

**Release Notes Example:**
```
A1 Template v2.1 - Release Notes

New Features:
- Added product profitability analysis
- New cash flow forecast visual

Improvements:
- 30% faster load time
- Mobile-optimized layouts

Bug Fixes:
- Fixed date slicer issue with fiscal year

Upgrade Instructions:
1. Download new template
2. Open and connect to existing data source
3. Publish to same workspace (overwrites old version)
```

---

## Customer Support

### Common Issues

**Issue 1: Data Not Refreshing**
- Check: Refresh schedule enabled?
- Check: Credentials valid?
- Check: Data source accessible?
- Fix: Reconfigure refresh or update credentials

**Issue 2: Incorrect Numbers**
- Validate: Customer data source has correct data
- Check: Field mappings still correct
- Check: Filters applied unintentionally
- Fix: Recheck mappings or reset filters

**Issue 3: Slow Performance**
- Check: Dataset size (>1GB?)
- Check: Query complexity
- Optimize: Implement best practices
- Escalate: To engineering if persistent

---

## Quality Checks

- [ ] Daily refresh success rate > 95%
- [ ] Report load time < 5 seconds
- [ ] Zero data accuracy issues
- [ ] Template version up-to-date
- [ ] Customer satisfaction with performance

---

## Related Documents

- [[products/03-web-dashboard-lite/operations/03-deployment-sop|A1 Deployment SOP]]
- [[biz/knowledge-base/troubleshooting/troubleshooting|Troubleshooting Guide]]
- [[products/01-power-bi-template/resources/performance-guide|Performance Optimization Guide]]

---

## Monthly Excel Template Maintenance (Tier 3 Only)

**Frequency:** Monthly
**Tier:** Tier 3 customers only (included in monthly fee)
**Owner:** Customer Success Manager

### Tasks:

**Product List Updates:**
- [ ] Check if customer added new menu items this month
- [ ] Update Daily-Sales.xlsx dropdown with new products
- [ ] Update Food-Cost.xlsx with new recipe cards if requested
- [ ] Remove discontinued items from dropdowns

**Staff Roster Updates:**
- [ ] Check for new hires / departures
- [ ] Update Staff-Log.xlsx dropdown with current staff
- [ ] Update Daily-Sales.xlsx staff dropdown
- [ ] Remove departed staff from dropdowns (keep historical data)

**Formula Adjustments:**
- [ ] Check if business model changed (e.g., new pricing structure, new locations)
- [ ] Adjust traffic light thresholds if targets changed
- [ ] Update performance tier calculations if needed
- [ ] Fix any formula errors reported by customer

**Multi-Outlet Changes (if applicable):**
- [ ] Add new outlet tabs to Outlet-Summary.xlsx
- [ ] Update consolidation formulas to include new locations
- [ ] Test cross-outlet comparisons still working

**Delivery:**
- [ ] Save updated templates to customer's Google Drive folder
- [ ] Email notification: "Excel templates updated with [X new products, Y staff changes]"
- [ ] No action needed from customer (seamless update)
- [ ] Test: Customer can immediately use updated templates

**Tracking:**
- [ ] Document changes in `/Clients/[Customer]/Monthly_Excel_Updates.md`:
 ```
 ## Excel Template Update - [Month YYYY]

 ### Changes Made:
 - Products Added: [List]
 - Staff Updated: [Hires/Departures]
 - Formula Adjustments: [If any]
 - Multi-Outlet: [Changes]

 ### Delivered: [Date]
 ### Customer Notified: [Date]
 ```

**Quality Check:**
- [ ] Templates tested with customer's actual data (import to Power BI works)
- [ ] Dropdowns populated correctly
- [ ] Formulas calculate correctly
- [ ] No broken references

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial SOP |

