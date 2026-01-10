# Integration Framework

**Owner:** Technical / Product
**Last Updated:** 2025-12-29
**Purpose:** Cross-product integration specifications and connector documentation

---

## Overview

This directory contains integration frameworks, connector specifications, and API documentation for integrating PWBI F&B Growth products with third-party systems.

---

## Integration Documentation

### Core Framework

- **[[products/shared-technical/integrations/integration-framework|Integration Framework]]**
 Common integration patterns, best practices, and architectural guidelines for all product integrations

- **[[products/shared-technical/integrations/webhook-api|Webhook API]]**
 Webhook infrastructure for real-time event notifications and integrations

### Third-Party Integrations

- **[[products/shared-technical/integrations/marketplace-integration|Marketplace Integration]]**
 Integration with online marketplace platforms (GrabFood, GoFood, ShopeeFood, etc.)

### POS Connectors

- **POS Connectors** - See pos-connectors/ subdirectory
 Point-of-sale system integrations:
 - Moka
 - Pawoon
 - Qasir
 - Olsera
 - Custom POS systems

### Accounting Software

- **Accounting Software** - See accounting-software/ subdirectory
 Accounting platform integrations:
 - Accurate
 - Jurnal
 - Other Indonesian accounting platforms

---

## Integration Architecture

### Integration Types

1. **Real-time Integrations**
 - Webhook-based event streaming
 - API polling for systems without webhooks
 - Best for: POS transactions, inventory updates

2. **Batch Integrations**
 - Scheduled data syncs (daily/weekly)
 - CSV/file-based imports
 - Best for: Historical data, reporting

3. **Hybrid Integrations**
 - Real-time for critical data (transactions)
 - Batch for historical/analytics data
 - Best for: Most production deployments

### Security Standards

- **Authentication:** OAuth 2.0, API keys, JWT tokens
- **Encryption:** TLS 1.2+ for all connections
- **Data Privacy:** Compliance with Indonesian data protection regulations
- **Access Control:** Role-based permissions and audit logging

---

## Integration Process

### For Product Teams

1. **Review Integration Framework** - Understand common patterns
2. **Assess Integration Type** - Real-time vs batch vs hybrid
3. **Design Integration** - Create specification document
4. **Develop Connector** - Follow framework standards
5. **Test** - Unit tests, integration tests, UAT
6. **Document** - Update this directory with connector docs

### For Customers

Integration setup guides are available in individual product documentation:
- [[products/01-power-bi-template/01-power-bi-template|01 - Power BI Template]]
- [[products/03-web-dashboard-lite/03-web-dashboard-lite|03 - Web Dashboard Lite]]
- [[products/04-accounting-module/04-accounting-module|04 - Accounting Module]]

---

## Common Integration Scenarios

### Scenario 1: POS → Analytics
**Flow:** POS sales data → PWBI platform → Dashboard
**Method:** Real-time webhook or daily batch sync
**Documentation:** See pos-connectors/ subdirectory

### Scenario 2: Platform → Accounting
**Flow:** PWBI data → Accounting software (Accurate/Jurnal)
**Method:** Daily batch export
**Documentation:** See accounting-software/ subdirectory

### Scenario 3: Marketplace → Revenue Tracking
**Flow:** GrabFood/GoFood orders → PWBI platform
**Method:** API polling or webhook
**Documentation:** See [[products/shared-technical/integrations/marketplace-integration|Marketplace Integration]]

---

## Related Documentation

- [[products/shared-technical/shared-technical|Shared Technical Architecture]] - Overall system design
- [[products/shared-technical/shared-technical|Security Architecture]] - Security standards and compliance
- [[products/shared-technical/architecture/api-gateway|API Gateway]] - API routing and management

---

**Integration Support:**
- Technical Documentation: See individual connector docs
- API Questions: [Technical team contact]
- Custom Integration Requests: [Product team contact]
