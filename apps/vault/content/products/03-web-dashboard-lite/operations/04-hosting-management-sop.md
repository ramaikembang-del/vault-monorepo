# E1 Web Dashboard - Hosting Management SOP

**Owner:** DevOps / Engineering
**Frequency:** Continuous
**Last Updated:** December 2025

---

## Purpose

Manage secure, reliable hosting infrastructure for web dashboard.

## Scope

**Product:** E1 - Web Dashboard
**Infrastructure:** AWS / Google Cloud (multi-tenant)

---

## Infrastructure Overview

**Architecture:**
```
Load Balancer
  v 
App Servers (Auto-scaling 2-10 instances)
  v 
Database (RDS PostgreSQL - Multi-AZ)
  v 
Cache (Redis)
  v 
Storage (S3 for files)
```

---

## Monitoring

### System Health Checks (Every 5 min)

**Metrics:**
- CPU usage < 70%
- Memory < 80%
- Database connections < 80% of max
- Response time < 3 seconds (p95)
- Error rate < 1%

**Alerts:**
If threshold breached  ->  PagerDuty  ->  On-call engineer

### Uptime Monitoring
**Target:** 99.5% uptime
**Tool:** UptimeRobot
**Check:** Every 1 minute from 5 global locations

---

## Scaling

### Auto-Scaling Rules

**Scale Up (add instance):**
- CPU > 70% for 5 minutes
- OR Active connections > 1000

**Scale Down (remove instance):**
- CPU < 30% for 15 minutes
- AND Active connections < 200
- Min instances: 2 (redundancy)

### Database Scaling
**Vertical:** Increase instance size if needed (quarterly review)
**Read Replicas:** Add if read load > 70%

---

## Backup & Recovery

**Database Backups:**
- Automated: Daily (retain 30 days)
- Manual: Before major changes
- Point-in-time recovery: Last 7 days

**Application Backups:**
- Code: GitHub (version control)
- Configuration: Encrypted in S3
- User data: Included in DB backup

---

## Security

### Access Control
- SSH keys only (no passwords)
- VPN required for DB access
- Least privilege principle

### SSL/TLS
- Free SSL via Let's Encrypt
- Auto-renewal every 60 days
- Force HTTPS (redirect HTTP)

### Firewall
- Allow: Port 443 (HTTPS), 22 (SSH from VPN)
- Block: All other ports

---

## Maintenance Windows

**Scheduled:** First Sunday of month, 2-4 AM WIB
**Activities:**
- OS security patches
- Database maintenance
- Application updates

**Communication:** Email customers 7 days advance

---

## Incident Response

**P0 (System Down):**
1. Alert on-call engineer
2. Investigate (< 15 min)
3. Page backup engineer if not resolved in 30 min
4. Update status page
5. Restore service (target: < 4 hours)

**Post-Incident:**
- Write post-mortem
- Identify preventive measures
- Share with team

---

## Quality Checks

- [ ] Uptime > 99.5% monthly
- [ ] All backups successful
- [ ] Auto-scaling functioning
- [ ] Security patches current
- [ ] SSL certificates valid

---

## Related Documents

- [[03-deployment-sop|E1 Deployment SOP]]
- [[products/03-web-dashboard-lite/resources/dr-plan.md|Disaster Recovery Plan]]

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial SOP |

