# C4 Enterprise Platform - Technical Architecture

**Document:** System Architecture & Infrastructure
**Version:** 1.0
**Last Updated:** December 2025

---

## Architecture Overview

C4 is built on a microservices architecture with multi-tenant isolation, designed for scale, security, and 99.95% availability.

```

 Client Layer

 Web Portal Mobile Apps Partner Integrations
 (React) (React Native) (APIs)






 CDN (CloudFront + Azure CDN)
 WAF (DDoS Protection, Firewall)



 API Gateway (Kong)
 Rate Limiting, Auth, Routing, Monitoring



 Microservices Layer

 Auth Analytics Integrations
 Service Service Service


 Reporting Billing Notifications
 Service Service Service




 Data Layer

 PostgreSQL Redis Cache S3
 (RDS Multi-AZ) (ElastiCache) Storage


```

---

## Infrastructure Components

### Cloud Providers (Multi-Cloud)

**Primary:** AWS
**Secondary:** Azure (DR, specific regions)

**Regions:**
- Asia Pacific (Jakarta): ap-southeast-3
- Asia Pacific (Singapore): ap-southeast-1
- Asia Pacific (Sydney): ap-southeast-2 (DR)

### Compute

**Kubernetes (EKS):**
- Containerized microservices
- Auto-scaling (2-200 nodes)
- Rolling deployments (zero downtime)
- Health checks & self-healing

**Node Configuration:**
- Instance type: c6i.4xlarge (16 vCPU, 32 GB RAM)
- Min nodes: 3 (HA across AZs)
- Max nodes: 50 (peak capacity)

### Database

**Primary Database: PostgreSQL 15**
- Deployment: RDS Multi-AZ (high availability)
- Instance: db.r6g.4xlarge (16 vCPU, 128 GB RAM)
- Storage: 5 TB SSD (io2, 64,000 IOPS)
- Backups: Automated daily, 35-day retention
- Read Replicas: 3 (for analytics queries)

**Sharding Strategy:**
- Shard by tenant_id (each enterprise customer)
- 100 GB per shard (optimal performance)
- Cross-shard queries rare (tenant isolation)

**Indexes:**
- B-tree: Standard queries
- GiST: Geospatial (location data)
- GIN: Full-text search

### Caching

**Redis (ElastiCache):**
- Cluster mode: Enabled (6 shards, 2 replicas each)
- Node type: cache.r6g.xlarge (4 vCPU, 26 GB RAM)
- Use cases:
 - Session storage (15 min TTL)
 - API response caching (60 sec TTL)
 - Real-time analytics (5 min TTL)
 - Rate limiting counters

### Object Storage

**S3:**
- Buckets:
 - `pwbi-c4-data-exports` (CSV, Excel exports)
 - `pwbi-c4-backups` (database backups)
 - `pwbi-c4-logs` (audit logs)
 - `pwbi-c4-assets` (images, PDFs)
- Lifecycle policies: Move to Glacier after 90 days
- Versioning: Enabled (compliance)
- Encryption: AES-256 (SSE-S3)

---

## Microservices

### Authentication Service

**Tech:** Node.js + Passport.js
**Responsibilities:**
- User authentication (JWT)
- SSO/SAML integration
- MFA handling
- Session management

**API:**
- `POST /auth/login`
- `POST /auth/sso/saml`
- `POST /auth/mfa/verify`
- `POST /auth/refresh`

### Analytics Service

**Tech:** Python + FastAPI
**Responsibilities:**
- Data aggregation
- Report generation
- Dashboard queries
- Real-time metrics

**Performance:**
- Query response: < 200ms (p95)
- Caching aggressive (60s TTL)
- Materialized views (pre-computed)

### Integration Service

**Tech:** Node.js
**Responsibilities:**
- POS data ingestion
- ERP sync
- Third-party webhooks
- Data transformation

**Queue:** RabbitMQ (async processing)

### Reporting Service

**Tech:** Node.js + Puppeteer
**Responsibilities:**
- PDF generation
- Excel exports
- Scheduled reports
- Email delivery

**Scaling:** Background workers (Celery)

### Billing Service

**Tech:** Node.js + Stripe
**Responsibilities:**
- Subscription management
- Usage tracking
- Invoicing
- Payment processing

### Notification Service

**Tech:** Node.js
**Responsibilities:**
- Email (SendGrid)
- SMS (Twilio)
- WhatsApp (Twilio Business API)
- Push notifications (Firebase)

---

## Security Architecture

### Network Security

**VPC Configuration:**
- Private subnets (app servers, databases)
- Public subnets (load balancers, NAT gateways)
- Security groups (least privilege)
- NACLs (network ACLs)

**Firewall Rules:**
- Inbound: Only HTTPS (443), SSH (22 from bastion only)
- Outbound: Whitelist (no open internet)

### Application Security

**API Gateway (Kong):**
- Rate limiting (100 req/min per IP)
- JWT validation
- OAuth 2.0
- API key management

**WAF Rules:**
- SQL injection protection
- XSS prevention
- DDoS mitigation (AWS Shield)
- Geo-blocking (if needed)

### Data Security

**Encryption:**
- At rest: AES-256 (RDS, S3, EBS)
- In transit: TLS 1.3
- Key management: AWS KMS (customer-managed keys)

**Database Security:**
- No public endpoints
- VPN/PrivateLink access only
- Column-level encryption (PII fields)
- Row-level security (tenant isolation)

### Secrets Management

**AWS Secrets Manager:**
- Database credentials
- API keys
- TLS certificates
- Rotation: Automatic (90 days)

---

## Performance Optimization

### Caching Strategy

**L1 Cache:** Redis (60s TTL)
**L2 Cache:** CDN (5 min TTL for static assets)

**Cache Keys:**
- User-specific: `user:{id}:dashboard`
- Tenant-specific: `tenant:{id}:report:{date}`
- Global: `public:metrics`

### Database Optimization

**Connection Pooling:**
- Pool size: 100 (per service)
- Max lifetime: 30 min
- Timeout: 10 sec

**Query Optimization:**
- Prepared statements (SQL injection + performance)
- EXPLAIN ANALYZE (slow query detection)
- Partitioning (by date for time-series)

### Load Balancing

**Application Load Balancer (ALB):**
- Health checks (HTTP 200 on `/health`)
- Sticky sessions (for stateful apps)
- Cross-zone balancing

**Routing:**
- Path-based (`/api/auth` → Auth Service)
- Weight-based (canary deployments)

---

## Scalability

### Horizontal Scaling

**Auto-Scaling Policies:**
- CPU > 70%: Scale out (+5 nodes)
- CPU < 30%: Scale in (-2 nodes)
- Request count > 10K/min: Scale out

**Database:**
- Read replicas (3-6 depending on load)
- Write scale: Sharding (per tenant)

### Vertical Scaling

**When:** Specific bottlenecks (rare)
**How:** Increase instance size (minimal downtime)

---

## Disaster Recovery

### Backup Strategy

**Database:**
- Automated daily backups (3 AM UTC)
- Snapshot retention: 35 days
- Cross-region replication (Sydney)

**Application:**
- Docker images (ECR, versioned)
- Configuration (Git, versioned)
- Infrastructure as Code (Terraform)

### Recovery Process

**Minor Incident (single component failure):**
1. Kubernetes restarts failed pod (< 30 sec)
2. Load balancer routes traffic away
3. Auto-healing

**Major Incident (AZ failure):**
1. Multi-AZ deployment continues serving
2. Auto-scale in remaining AZs
3. RTO: < 15 min

**Catastrophic (Region failure):**
1. Manual failover to DR region (Sydney)
2. DNS update (Route 53)
3. Database restore from cross-region replica
4. RTO: 2 hours, RPO: 5 min

---

## Monitoring & Observability

### Application Monitoring

**Datadog:**
- APM (Application Performance Monitoring)
- Distributed tracing
- Error tracking
- Custom metrics

**Alerts:**
- Error rate > 1%: Slack + PagerDuty
- Response time > 500ms (p95): Slack
- Downtime: PagerDuty (on-call engineer)

### Infrastructure Monitoring

**CloudWatch:**
- EC2 metrics (CPU, memory, disk)
- RDS metrics (connections, IOPS)
- ALB metrics (requests, latency)
- Custom metrics (business KPIs)

### Log Aggregation

**CloudWatch Logs:**
- Application logs (structured JSON)
- Access logs (ALB)
- Audit logs (security events)
- Retention: 90 days (compliance: 7 years in S3)

**Log Analysis:** OpenSearch (Elasticsearch)

---

## Deployment

### CI/CD Pipeline

**GitHub Actions:**
1. Code commit → automated tests
2. Tests pass → build Docker image
3. Image tagged & pushed to ECR
4. Helm chart deployment (Kubernetes)
5. Smoke tests
6. Promoted to production (manual approval)

**Deployment Strategy:**
- Blue/Green (zero downtime)
- Canary (10% → 50% → 100%)
- Rollback: Automatic (if health checks fail)

---

## Compliance

**Certifications:**
- ISO 27001 (Information Security)
- SOC 2 Type II
- PCI DSS (if payment processing)

**Audits:**
- Annual: External security audit
- Quarterly: Internal compliance review
- Continuous: Automated compliance checks (AWS Config)

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 1.0 | Initial technical architecture | Engineering Team |

---

## Related

- **[[products/13-saas-enterprise/13-saas-enterprise|SaaS Enterprise Product]]** - Product overview
- **[[products/13-saas-enterprise/technical/deployment-guide|Deployment Guide]]** - Infrastructure deployment
- **[[products/13-saas-enterprise/technical/security-compliance|Security & Compliance]]** - Security architecture
- **[[products/13-saas-enterprise/technical/integration-guide|Integration Guide]]** - Integration architecture
- **[[products/13-saas-enterprise/specifications/enterprise-features|Enterprise Features]]** - Architectural requirements
