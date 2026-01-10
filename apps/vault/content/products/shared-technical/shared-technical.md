# Shared Technical Resources

**Last Updated:** 2025-12-26
**Status:** 20/20 Documentation Complete

---

## Overview

Complete technical documentation for PWBI FnB Growth shared infrastructure supporting all products (A1, R1-R2f, E1, C1).

**Documentation Coverage:**
- Architecture (4 docs) - System design, data platform, auth, API gateway
- Integrations (9 docs) - POS connectors, accounting integrations, webhooks
- Security (3 docs) - Security architecture, access control, compliance
- DevOps (4 docs) - CI/CD, monitoring, scaling, this README

**Total:** 20 comprehensive technical documents (150KB+)

---

## Architecture

**Foundation documents for all 7 products:**

| Document | Description | Size |
|----------|-------------|------|
| [[products/shared-technical/architecture/ecosystem-architecture|Ecosystem Architecture]] | Complete system design, migration paths, SSO, DR | 19KB |
| [[products/shared-technical/architecture/data-platform|Data Platform]] | Database schemas for all products, RLS, migrations | 34KB |
| [[products/shared-technical/architecture/auth-system|Authentication System]] | OAuth 2.0 + JWT, RBAC, password security, 2FA | 25KB |
| [[products/shared-technical/architecture/api-gateway|API Gateway]] | Routing, rate limiting, caching, versioning, webhooks | 25KB |

---

## Integrations

**POS Connectors:**
- [[products/shared-technical/integrations/pos-connectors/pawoon|Pawoon]] - #1 cloud POS (OAuth + webhooks)
- [[products/shared-technical/integrations/pos-connectors/moka|Moka]] - #2 cloud POS (API key + polling)
- [[products/shared-technical/integrations/pos-connectors/qasir|Qasir]] - Growing player (Bearer token)
- [[products/shared-technical/integrations/pos-connectors/olsera|Olsera]] - Multi-outlet focus

**Accounting Software:**
- [[products/shared-technical/integrations/accounting-software/accurate|Accurate Online]] - #1 accounting (OAuth, COA import, journal export)
- [[products/shared-technical/integrations/accounting-software/jurnal|Jurnal.id]] - #2 accounting (OAuth, P&L export)

**Framework:**
- [[products/shared-technical/integrations/integration-framework|Integration Framework]] - Webhook/polling/CSV patterns, OAuth flow, error handling
- [[products/shared-technical/integrations/webhook-api|Webhook API]] - HMAC signature, event types, retry policy

---

## Security

| Document | Description |
|----------|-------------|
| [[products/shared-technical/security/security-architecture|Security Architecture]] | 4-layer security model, encryption, Indonesian compliance |
| [[products/shared-technical/security/access-control|Access Control]] | RBAC with database RLS + API JWT enforcement |
| [[products/shared-technical/security/compliance|Compliance]] | Indonesian regulations (PDPN, Bank Indonesia, Tax) |

---

## DevOps

| Document | Description |
|----------|-------------|
| [[products/shared-technical/devops/ci-cd-pipeline|CI/CD Pipeline]] | 3-stage deployment, blue-green, rollback |
| [[products/shared-technical/devops/monitoring|Monitoring]] | Prometheus, Grafana, business metrics |
| [[products/shared-technical/devops/scaling-guide|Scaling Guide]] | Horizontal/vertical scaling, caching |

---

## Quick Start for Engineering Team

**To implement a new product:**
1. Read [[products/shared-technical/architecture/ecosystem-architecture|Ecosystem Architecture]] - Understand overall system
2. Design database schema following [[products/shared-technical/architecture/data-platform|Data Platform]] patterns
3. Implement auth using [[products/shared-technical/architecture/auth-system|Authentication System]] - JWT + RLS
4. Route APIs through [[products/shared-technical/architecture/api-gateway|API Gateway]] - No direct backend exposure
5. Follow [[products/shared-technical/devops/ci-cd-pipeline|CI/CD Pipeline]] - Deploy through standard pipeline

**To add a new integration:**
1. Follow [[products/shared-technical/integrations/integration-framework|Integration Framework]] - Webhook > Polling > CSV
2. Reference existing connectors ([[products/shared-technical/integrations/pos-connectors/pawoon|Pawoon]], [[products/shared-technical/integrations/pos-connectors/moka|Moka]])
3. Implement HMAC signature validation per [[products/shared-technical/integrations/webhook-api|Webhook API]]

---

## Documentation Standards

**All shared-technical docs follow:**
- Production-ready code examples (Python, SQL, bash)
- Indonesian market context where relevant
- Troubleshooting guides with diagnosis steps
- Cross-references to related documents
- Regular review cycle (monthly/quarterly)

---

**For Product-Specific Documentation:** See `/docs/products/` directory

**Last Updated:** 2025-12-26
**Maintained By:** Engineering Team (Architecture, Security, DevOps, Integrations)
**Review Cycle:** Quarterly or when major changes occur
