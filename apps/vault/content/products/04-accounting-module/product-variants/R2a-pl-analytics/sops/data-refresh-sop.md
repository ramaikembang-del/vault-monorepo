# R2a P&L Analytics - Data Refresh SOP

**Owner:** Support Team
**Last Updated:** December 2025

---

## Purpose
Maintain reliable, timely data refresh for P&L analytics.

## Refresh Schedule
**Frequency:** Daily at 5:00 AM WIB
**Duration:** ~15-30 minutes
**Data Source:** Accounting system (API/DB/File)

---

## Monitoring

### Daily Checks
- Automated email if refresh fails
- Support checks dashboard for anomalies

### Common Issues
| Issue | Fix |
|-------|-----|
| Authentication failure | Update credentials |
| Data source timeout | Increase timeout or optimize query |
| Missing data | Check source system availability |

---

## Manual Refresh
If automated fails:
1. Login to admin panel
2. Navigate to R2a module
3. Click "Refresh Now"
4. Monitor progress
5. Validate data after completion

---

## Quality Checks
- [ ] Refresh success rate > 95%
- [ ] Data current (< 24 hours old)
- [ ] No data integrity issues

---

## Revision History
| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial SOP |

---

## Related

- **[[products/04-accounting-module/product-variants/R2a-pl-analytics/R2a-pl-analytics|R2a P&L Analytics]]** - Product variant overview
- **[[products/04-accounting-module/product-variants/R2a-pl-analytics/sops/configuration-sop|Configuration SOP]]** - Initial setup procedures
- **[[products/04-accounting-module/product-variants/R2a-pl-analytics/operations/support-runbook|Support Runbook]]** - Troubleshooting refresh issues
- **[[products/04-accounting-module/product-variants/R2a-pl-analytics/specifications/technical-spec|Technical Spec]]** - Data architecture
- **[[products/04-accounting-module/product-variants/R2a-pl-analytics/integrations/pos-integration|POS Integration]]** - Data source integration
