# C4 Enterprise - Integration Guide

**Document:** System Integration Guide
**Product:** C4 Enterprise Platform
**Last Updated:** December 2025

---

## Overview

C4 Enterprise integrates with your existing enterprise systems (ERP, HR, Accounting, POS) to create a unified data ecosystem. This guide covers pre-built integrations, custom integration process, and best practices.

---

## Pre-Built Integrations

### ERP Systems

**SAP S/4HANA**
- **Data Sync:** GL accounts, AR/AP, purchase orders, inventory movements
- **Frequency:** Real-time (via API) or batch (nightly)
- **Direction:** Bi-directional (C4 ↔ SAP)
- **Use Cases:**
 - Financial consolidation (C4 → SAP)
 - Master data sync (SAP → C4)
 - Purchase order automation
- **Setup Time:** 6-8 weeks

**Oracle ERP Cloud**
- **Modules:** Financials, Procurement, Inventory
- **Integration:** REST API
- **Features:** Same as SAP
- **Setup Time:** 6-8 weeks

**Microsoft Dynamics 365**
- **Integration:** Power Automate + API
- **Special:** Can embed C4 dashboards in Dynamics (iframe)
- **Setup Time:** 4-6 weeks

**Data Flows (Typical):**
```
C4 → ERP:
- Daily sales by location
- Cost of goods sold
- Labor costs
- Journal entries (automated)

ERP → C4:
- Chart of accounts
- Vendor master data
- Budget vs actual
```

### HR Systems

**Workday**
- **Data Sync:** Employee master data, attendance, payroll
- **Use Case:** Labor cost allocation in C4
- **Frequency:** Daily (overnight batch)
- **Benefits:**
 - Accurate labor reporting (match payroll to C4 hours)
 - Org chart sync (for approval workflows)
 - Headcount planning

**BambooHR**
- **Integration:** API
- **Data:** Employee profiles, time-off, performance reviews
- **Setup Time:** 2-3 weeks

**Darwinbox (Southeast Asia)**
- **Popular in:** Indonesia, Singapore
- **Integration:** Similar to BambooHR
- **Setup Time:** 2-3 weeks

### Accounting Systems

**QuickBooks Enterprise**
- **Chart of Accounts Mapping:** Map C4 categories → QB accounts
- **Journal Entry Export:** Automated daily/monthly
- **Reconciliation:** Bank reconciliation matching
- **Setup Time:** 2-4 weeks

**Xero**
- **Integration:** API (real-time)
- **Features:** Invoice sync, payment tracking
- **Use Case:** SMB customers (simpler than SAP)

**Accurate (Indonesia-specific)**
- **Local Compliance:** Indonesian tax, BPJS integration
- **Setup Time:** 3-4 weeks

### POS Systems

**Oracle Micros**
- **Data Sync:** Sales transactions, menu items, employee punches
- **Frequency:** Real-time streaming
- **Benefits:** Live dashboards (sales updating every minute)

**NCR Aloha**
- **Integration:** TCP/IP socket connection
- **Data:** Orders, payments, discounts, voids
- **Frequency:** Real-time

**Toast, Moka, Olsera, Pawoon**
- **Integration:** REST API
- **Setup:** Easier than legacy systems (2-3 weeks)

**Data Flows:**
```
POS → C4 (Real-time):
- Transactions (item, qty, price, time)
- Employee hours (clock-in/out)
- Discounts, voids, refunds

C4 → POS (Optional):
- Menu price updates
- Employee schedules
```

---

## Custom Integration Process

### When Needed
- Legacy/proprietary systems
- Industry-specific software
- Custom-built in-house tools
- Niche vendors not in our pre-built catalog

### Process (4-8 Weeks)

**Week 1: Discovery**
- **Kickoff Call:** Understand system, data, requirements
- **API Documentation Review:** Do they have APIs? Quality?
- **Data Mapping:** What data exists? What format?
- **Security Review:** Authentication, encryption, compliance

**Deliverable:** Integration scope document

**Week 2-3: Development**
- **Environment Setup:** Sandbox access to both systems
- **Connector Development:** Build integration code
- **Data Transformation:** Map their format → C4 format
- **Error Handling:** Retry logic, logging, alerts

**Week 4-5: Testing**
- **Unit Tests:** Each component tested individually
- **Integration Tests:** End-to-end data flow
- **Performance Tests:** Can it handle volume?
- **UAT:** Customer validates accuracy

**Week 6-8: Deployment**
- **Production Deployment:** Go-live preparation
- **Monitoring:** First week hypercare (watch for issues)
- **Documentation:** Runbook for support team
- **Training:** Customer team trained on monitoring/troubleshooting

### Pricing

**Time & Materials:** Rp 2M/day (developer rate)

**Typical Costs:**
- Simple integration (REST API, straightforward mapping): Rp 20-40M
- Medium complexity (legacy system, complex mapping): Rp 40-80M
- High complexity (real-time streaming, multiple systems): Rp 80-150M

**Estimate:** Provided after discovery (Week 1)

---

## Integration Architecture

### Integration Patterns

**1. API-Based (Preferred)**
- **How:** RESTful API calls (HTTPS)
- **Frequency:** Real-time or scheduled (every 5 min, hourly, daily)
- **Pros:** Modern, reliable, easy to monitor
- **Cons:** Requires API support from other system

**2. File-Based (Legacy Systems)**
- **How:** SFTP/S3 file transfer (CSV, XML, JSON)
- **Frequency:** Batch (daily, hourly)
- **Pros:** Works with old systems without APIs
- **Cons:** Not real-time, manual intervention if errors

**3. Database Direct Connect (Rare)**
- **How:** VPN + direct SQL queries
- **Frequency:** Real-time (continuous replication)
- **Pros:** Fastest, most complete
- **Cons:** Security risk, tight coupling, not recommended

**4. Message Queue (High Volume)**
- **How:** RabbitMQ, Kafka (event streaming)
- **Frequency:** Real-time (events pushed as they happen)
- **Pros:** Scalable, decoupled, reliable
- **Cons:** Complex setup

**Recommendation:** API-based for most, file-based for legacy

### Data Transformation

**Common Mappings:**

**Example: Restaurant Sales Transaction**
```
POS Format:
{
 "check_id": "12345",
 "items": [{"sku": "COFFEE001", "qty": 2, "amt": 50000}],
 "total": 50000,
 "tender": "CASH"
}

C4 Format:
{
 "transaction_id": "12345",
 "location_id": "LOC001",
 "timestamp": "2025-12-27T10:30:00Z",
 "line_items": [
 {
 "product_id": "COFFEE001",
 "product_name": "Latte",
 "category": "Beverages",
 "quantity": 2,
 "unit_price": 25000,
 "revenue": 50000
 }
 ],
 "payment_method": "cash",
 "total_amount": 50000
}
```

**Transformations Applied:**
- Add location_id (from POS config)
- Convert timestamp (UTC)
- Lookup product_name from SKU
- Categorize product (beverage, food, etc.)
- Standardize payment method (cash vs CASH)

### Error Handling

**Scenarios:**
1. **API timeout:** Retry 3 times with exponential backoff
2. **Invalid data:** Log error, alert, skip record (don't fail entire batch)
3. **Authentication failure:** Re-authenticate, retry
4. **System down:** Queue data, process when system returns

**Monitoring:**
- Dashboard: Integration health (success rate, latency, errors)
- Alerts: Email/Slack when error rate > 5% or system down

---

## Integration Best Practices

### Data Quality
- **Validate at source:** Don't accept bad data into C4
- **Idempotency:** Same data sent twice = processed once (no duplicates)
- **Reconciliation:** Daily automated check (POS transactions = C4 transactions)

### Security
- **Encryption:** All data in transit (TLS 1.3)
- **Authentication:** OAuth 2.0, API keys rotated every 90 days
- **Least Privilege:** Integration account has minimal permissions (read-only where possible)
- **Audit Logs:** Every API call logged (who, what, when)

### Performance
- **Batch Processing:** Send 1,000 records at once (vs 1,000 API calls)
- **Compression:** Gzip large payloads
- **Caching:** Don't re-fetch unchanging data (product catalog)
- **Rate Limiting:** Respect API limits (don't overwhelm source system)

### Resilience
- **Retries:** Automatic retry on transient failures
- **Circuit Breaker:** Stop calling if system repeatedly fails (avoid cascading failures)
- **Graceful Degradation:** If integration down, C4 still works (manual data entry fallback)

---

## Integration Support

### Ongoing Maintenance

**Included in C4 Subscription:**
- Monitoring (24/7 automated)
- Bug fixes
- Minor enhancements (new field mappings)

**Not Included (Quoted Separately):**
- Source system upgrades (if their API changes, we adapt)
- New integrations
- Major changes (re-architecture)

### Troubleshooting

**Common Issues:**

**"Integration stopped working"**
- Check: API credentials expired? (rotate every 90 days)
- Check: Source system down/upgraded?
- Check: Network/firewall change?

**"Data not syncing"**
- Check: Integration schedule (is it time to sync?)
- Check: Data validation (are there errors in logs?)
- Check: Source data exists (did they have transactions?)

**"Duplicate data in C4"**
- Cause: Integration ran twice or idempotency broken
- Fix: De-duplicate in C4, fix integration logic

### Support Contact

**For integration issues:**
Email: integrations@pwbi.co.id
Response: < 4 hours (P1), < 24 hours (P2)

**For custom development:**
Email: sales@pwbi.co.id
Schedule consultation call

---

## Integration Roadmap

**Planned Integrations (2025):**
- Stripe (payment processing)
- Shopify (e-commerce for F&B)
- WhatsApp Business API (customer messaging)
- More Indonesian accounting systems

**Request Integration:**
If your system isn't supported, email integrations@pwbi.co.id with system name and use case. We prioritize based on customer demand.

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 1.0 | Comprehensive integration guide | Engineering Team |

---

## Related

- **[[products/13-saas-enterprise/13-saas-enterprise|SaaS Enterprise Product]]** - Product overview
- **[[products/13-saas-enterprise/integrations/integrations|Integrations]]** - Integration directory
- **[[products/13-saas-enterprise/technical/deployment-guide|Deployment Guide]]** - Integration deployment process
- **[[products/13-saas-enterprise/technical/technical-architecture|Technical Architecture]]** - System architecture
- **[[products/13-saas-enterprise/specifications/enterprise-features|Enterprise Features]]** - Custom integration capabilities
