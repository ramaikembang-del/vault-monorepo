# C1 Full SaaS - Technical Architecture

**Last Updated:** December 2025

---

## System Architecture

```

 Load Balancer (AWS ALB)





 Web API
 Tier Tier
 (React) (Node.js)





 ML/AI Queue Cache
 (Python) (RabbitMQ) (Redis)



 Database
 (Postgres
 Multi-AZ)

```

---

## Technology Stack

**Frontend:**
- Framework: React 18
- State: Redux Toolkit
- UI: Material-UI (customized)
- Charts: Recharts + D3.js
- Mobile: React Native

**Backend:**
- API: Node.js (Express)
- AI/ML: Python (FastAPI, TensorFlow)
- Real-time: WebSockets (Socket.io)

**Data:**
- Primary DB: PostgreSQL 15 (Multi-AZ)
- Cache: Redis (ElastiCache)
- Queue: RabbitMQ
- Storage: AWS S3

**Infrastructure:**
- Cloud: AWS
- CDN: CloudFront
- Monitoring: DataDog
- Logging: ELK Stack

---

## Scalability

**Auto-Scaling:**
- App servers: 2-50 instances
- Scale trigger: CPU > 70% or requests > 10K/min
- Scale down: Gradual (prevent thrashing)

**Database:**
- Read replicas: 2 (auto-failover)
- Connection pooling: PgBouncer
- Query optimization: Indexed, materialized views

---

## Security

**Authentication:**
- OAuth 2.0 + JWT
- MFA optional (recommended for enterprise)

**Authorization:**
- RBAC (role-based access control)
- Fine-grained permissions

**Data Protection:**
- Encryption at rest (AES-256)
- Encryption in transit (TLS 1.3)
- PII masking in logs

---

## Integrations

**POS Systems:**
- Moka, Olsera, Pawoon, Qasir
- Method: REST API (real-time sync)

**Accounting:**
- Accurate, Jurnal, QuickBooks
- Method: API + scheduled sync (daily)

**Payments:**
- QRIS, Bank Transfer, Credit Card
- Provider: Midtrans, Xendit

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial architecture |

---

## Related

- **[[products/05-saas-basic/05-saas-basic|SaaS Basic Product]]** - Product overview
- **[[products/16-marketing-automator/technical/technical|Technical]]** - Parent technical directory
- **[[products/05-saas-basic/technical/api-documentation|API Documentation]]** - API specifications
- **[[products/05-saas-basic/technical/deployment-guide|Deployment Guide]]** - Infrastructure deployment
- **[[products/05-saas-basic/specifications/versions/BETA_0.1|Beta 0.1]]** - Cloud architecture implementation
