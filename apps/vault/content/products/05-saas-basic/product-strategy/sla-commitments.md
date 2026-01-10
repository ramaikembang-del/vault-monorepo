# SaaS Service Level Agreement (SLA) Commitments
**Performance Guarantees & Support Standards**

**Document Owner:** Product + Customer Success  
**Last Updated:** January 8, 2026  
**Status:** PLANNED - Effective with C1 SaaS Basic Launch (Sprint 3+)

---

## Executive Summary

### SLA Purpose

**Service Level Agreements define:**
1. **Performance guarantees** (uptime, response times)
2. **Support commitments** (how fast we respond/resolve)
3. **Customer remedies** (what happens if we fail)

**Why SLAs Matter:**
- Build trust (customers know what to expect)
- Competitive differentiation (better SLA than competitors = sales advantage)
- Internal accountability (team held to measurable standards)

---

## Part 1: Uptime Commitment

### 1.1 Platform Availability

| Tier | Uptime SLA | Downtime Allowed (Monthly) | Measurement Period |
|------|------------|----------------------------|-------------------|
| **SaaS Basic** | 99.0% | 7.3 hours/month | Monthly calendar |
| **SaaS Pro** | 99.5% | 3.6 hours/month | Monthly calendar |
| **SaaS Enterprise** | 99.9% | 43 minutes/month | Monthly calendar |

**Measurement:** Checked via UptimeRobot (public status page: status.clario.id)

**Exclusions (Don't Count Toward Downtime):**
- Scheduled maintenance (announced 48h advance, max 2h/month)
- Customer's internet connection issues
- Third-party POS API downtime (Moka, Pawoon - not our fault)
- Force majeure (natural disasters, government shutdowns)

---

### 1.2 Remedies for Breach

**If Uptime Falls Below SLA:**

| Actual Uptime | SLA Breach | Remedy |
|---------------|------------|--------|
| 98.0-98.9% | MINOR | 10% monthly credit |
| 95.0-97.9% | MODERATE | 25% monthly credit |
| <95.0% | SEVERE | 50% monthly credit + option to cancel |

**How to Claim:**
- Customer submits ticket within 30 days of incident
- We verify downtime logs
- Credit applied to next month's invoice (not cash refund)

**Example:** SaaS Pro customer (Rp 1M/month), uptime was 98.5% in January → 25% credit = Rp 250K off February bill

---

## Part 2: Support Response Times

### 2.1 Support Channels by Tier

| Tier | Basic | Pro | Enterprise |
|------|-------|-----|------------|
| **Email Support** | ✅ | ✅ | ✅ |
| **Live Chat** | ❌ | ✅ (business hours) | ✅ (24/7) |
| **Phone Support** | ❌ | ❌ | ✅ |
| **Dedicated CSM** | ❌ | ❌ | ✅ |
| **Slack Channel** | ❌ | ❌ | ✅ (optional) |

---

### 2.2 Response Time SLAs

**Response Time = Time from ticket submission to first human reply**

| Priority | Basic | Pro | Enterprise |
|----------|-------|-----|------------|
| **Critical** (system down) | 8 business hours | 2 business hours | 1 hour (24/7) |
| **High** (major feature broken) | 24 business hours | 8 business hours | 4 hours |
| **Medium** (minor bug) | 48 business hours | 24 business hours | 12 hours |
| **Low** (question/request) | 72 business hours | 48 business hours | 24 hours |

**Business Hours:** Mon-Fri, 9am-5pm WIB (Jakarta time)

**Priority Definitions:**
- **Critical:** Dashboard completely inaccessible, data loss
- **High:** Core feature unusable (can't upload data, dashboards don't load)
- **Medium:** Feature works but has bugs (chart shows wrong data)
- **Low:** How-to questions, feature requests

---

### 2.3 Resolution Time Goals

**Resolution = Issue fixed or workaround provided**

| Priority | Target Resolution (Pro) | Target Resolution (Enterprise) |
|----------|------------------------|-------------------------------|
| **Critical** | 24 hours | 8 hours |
| **High** | 72 hours | 48 hours |
| **Medium** | 7 days | 5 days |
| **Low** | Best effort | Best effort |

**Note:** These are GOALS, not guarantees (we commit to response time, not resolution time)

---

## Part 3: Data Security & Privacy

### 3.1 Data Protection Standards

**Commitments:**
- ✅ Encryption at rest (AES-256)
- ✅ Encryption in transit (TLS 1.3)
- ✅ Daily backups (retained 30 days)
- ✅ ISO 27001 compliance (target: Year 2)
- ✅ SOC 2 Type II certification (target: Year 3)

**Customer Data Ownership:**
- Customer owns 100% of their data
- Customer can export data anytime (CSV format)
- Customer can request deletion within 30 days of cancellation

---

### 3.2 Data Backup & Recovery

**Backup Schedule:**
- **Production data:** Backed up every 6 hours
- **Retention:** 30 days of backups
- **Off-site:** AWS S3 Singapore region (separate from prod)

**Recovery Point Objective (RPO):** 6 hours max data loss  
**Recovery Time Objective (RTO):** 4 hours to restore service

**Customer-Initiated Restore:**
- Pro/Enterprise can request point-in-time restore
- Fee: Rp 500K (one-time)
- Timeline: 24-48 hours

---

## Part 4: Feature Updates & Maintenance

### 4.1 Release Cadence

**Production Releases:**
- **Major features:** Quarterly (Q1, Q2, Q3, Q4)
- **Minor improvements:** Monthly
- **Bug fixes:** As needed (emergency patches within 24h)

**Release Communication:**
- Email announcement 7 days before major release
- In-app notification 24h before maintenance window
- Public roadmap (visible to all customers)

---

### 4.2 Maintenance Windows

**Scheduled Maintenance:**
- **Frequency:** Max 1x/month
- **Duration:** Max 2 hours
- **Timing:** Sundays 2-4am WIB (lowest traffic)
- **Notice:** 48 hours advance email + status page

**Emergency Maintenance:**
- Can occur anytime (security patches, critical bugs)
- Notice: As soon as possible
- Does NOT count toward uptime SLA if <1 hour

---

## Part 5: Performance Standards

### 5.1 Dashboard Load Times

**Commitment:** P95 (95th percentile) load time <3 seconds

**Measurement:**
- From "click dashboard" to "charts fully rendered"
- Measured for standard dashboard (30 metrics, 12 months data)
- Excludes customer's internet speed

**If Breach:** No SLA penalty, but we investigate and optimize

---

### 5.2 Data Processing Speed

**CSV Upload Processing:**
- **<5,000 rows:** <30 seconds
- **5,000-50,000 rows:** <5 minutes
- **>50,000 rows:** Best effort (email when done)

**API Data Sync (POS Integration):**
- **Real-time:** New transactions appear within 5 minutes
- **Batch:** Nightly sync completes by 6am WIB

---

## Part 6: Customer Success Commitments

### 6.1 Onboarding (First 30 Days)

| Tier | Commitment |
|------|------------|
| **Basic** | Self-serve (email support, help center) |
| **Pro** | 1 onboarding call (30 min setup assistance) |
| **Enterprise** | Dedicated CSM, weekly calls for first month |

**Success Metric:** 80% of Pro+ customers active (10+ logins) within Month 1

---

### 6.2 Quarterly Business Reviews (QBR)

**Enterprise Customers Only:**
- **Frequency:** Quarterly (4x/year)
- **Duration:** 45-60 minutes
- **Deliverable:** Custom insights report (PDF, C-suite ready)
- **Topics:** Usage trends, ROI analysis, feature requests

---

## Part 7: Remedies & Escalation

### 7.1 SLA Credit Process

**How to Request Credit:**
1. Submit ticket within 30 days of incident
2. Provide: Date/time of issue, description, impact
3. We verify logs (respond within 5 business days)
4. Credit applied to next invoice (or pro-rated refund if last month)

**Credit Caps:**
- Max 50% credit per month (even if multiple breaches)
- Credits don't roll over (use it or lose it)
- No cash refunds (invoice credit only, except at cancellation)

---

### 7.2 Escalation Path

**Standard Support:** support@clario.id → CS Team (Tier 1)

**If Not Resolved:**
- Tier 2: Escalate to Product Team (for technical issues)
- Tier 3: Escalate to CS Manager (for disputes)
- Tier 4: Escalate to Founder (Enterprise only, for critical escalations)

**Escalation Timeline:**
- Tier 1 → 2: After 48 hours no resolution
- Tier 2 → 3: After 72 hours
- Tier 3 → 4: Customer request (Enterprise only)

---

## Related Documents

- [[products/05-saas-basic/customer-success/onboarding-playbook|Onboarding Playbook]] - First 90 days success
- [[biz/departments/it/policies/security-policies|Security Policies]] - Detailed security practices
- [[biz/departments/growth/customer-success/cs-playbook|CS Playbook]] - Support operations

---

**Document Status:** PLANNED (Effective upon C1 Launch)  
**Owner:** Product + Customer Success  
**Next Review:** Pre-Sprint 3 (finalize before launch)

**Version:** 1.0
