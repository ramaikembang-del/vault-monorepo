# SLA Management - SOP

**Owner:** Support Manager + CS Manager
**Frequency:** Continuous monitoring, Monthly review
**Approver:** VP Customer Success
**Last Updated:** December 2025

---

## Purpose

Define, track, and maintain Service Level Agreements to ensure consistent, high-quality customer experience.

## Scope

**Applies to:** All customer-facing services
**Roles:** Support, Customer Success, Engineering

---

## Service Level Agreements

### Support Response & Resolution SLAs

| Severity | First Response | Resolution Target | Escalation (if breach) |
|----------|---------------|-------------------|------------------------|
| **P0 - Critical** | 15 minutes | 4 hours | Immediate → CTO |
| **P1 - High** | 1 hour | 24 hours | 2 hours → Engineering Lead |
| **P2 - Medium** | 4 hours | 48 hours | 8 hours → Support Manager |
| **P3 - Low** | 24 hours | 7 days | 48 hours → Support Manager |

**Business Hours:** Monday-Friday, 9 AM - 6 PM WIB
**After Hours:** P0/P1 only (on-call engineer)

### System Availability SLAs

| Service | Uptime Target | Allowed Downtime/Month | Measurement |
|---------|---------------|------------------------|-------------|
| **Production API** | 99.9% | 43 minutes | Uptime monitoring |
| **Web Dashboard (E1)** | 99.5% | 3.6 hours | Uptime monitoring |
| **Power BI Service** | 99% (Microsoft SLA) | 7.2 hours | Microsoft reports |
| **Database** | 99.9% | 43 minutes | Internal monitoring |

**Excludes:** Planned maintenance windows (notified 7 days advance)

### Data Processing SLAs

| Process | SLA | Measurement |
|---------|-----|-------------|
| **Daily Data Refresh** | Complete by 6 AM WIB | Automated check |
| **Real-time Sync** | < 5 minute lag | Sync timestamp |
| **Report Generation** | < 30 seconds | API response time |
| **Bulk Export** | < 5 minutes (10K records) | Export job duration |

---

## SLA Tracking & Monitoring

### Automated Monitoring

**Tools:**
- Uptime monitoring: UptimeRobot / Pingdom
- APM: New Relic / Datadog
- Support ticketing: Zendesk / Freshdesk

**Alerts:**
```
IF uptime < 99.9% over 24 hours
 → Alert Support Manager + Engineering

IF P0 ticket response > 15 min
 → Alert on-call engineer + Manager

IF P1 ticket open > 24 hours
 → Auto-escalate to Engineering Lead

IF data refresh not complete by 7 AM
 → Alert Engineering + notify affected customers
```

### Dashboard Metrics

**Real-Time SLA Dashboard:**
```
CURRENT STATUS (Live)

System Uptime:
- API: 99.95% (Target: 99.9%)
- Dashboard: 99.7% (Target: 99.5%)
- Database: 99.98% (Target: 99.9%)

Support SLA Compliance (Today):
- P0: 100% (2/2 tickets)
- P1: 90% (9/10 tickets) - P2: 95% (19/20 tickets)
- P3: 88% (22/25 tickets)

Recent Breaches:
- Ticket #12345 (P1): Resolved in 26 hours (2 hour breach)
 Reason: Complex database issue
 Action: Post-mortem scheduled
```

---

## SLA Breach Response

### When SLA is Breached

**Immediate Actions:**
1. Notify customer proactively (don't wait for them to ask)
2. Provide status update and revised ETA
3. Assign senior resource
4. Escalate per escalation matrix

**Communication Template:**
```
Subject: SLA Breach Notification - Ticket #12345

Dear [Customer],

We're writing to inform you that we've breached our SLA for your
ticket #12345 (opened [date/time]).

SLA Target: [X hours]
Current Status: [Y hours] and ongoing

We sincerely apologize. Here's what we're doing:
- Assigned senior engineer: [Name]
- Root cause identified: [Explanation]
- Expected resolution: [New ETA]
- Escalated to: [Level]

We'll update you every [2/4/8] hours until resolved.

Thank you for your patience.

[Support Manager]
```

### Post-Breach Analysis

**Required for all P0/P1 breaches:**
```
SLA BREACH POST-MORTEM

Ticket: #_____
Customer: __________
Severity: P0/P1
SLA Target: __ hours
Actual Resolution: __ hours
Breach: __ hours

TIMELINE:
00:00 - Ticket opened
00:15 - First response (within SLA )
02:00 - Escalated to T2
08:00 - Root cause identified
24:00 - Fix deployed
26:00 - Verified fixed (BREACH: +2 hours)

ROOT CAUSE:
__________

CONTRIBUTING FACTORS:
- __________
- __________

PREVENTIVE ACTIONS:
1. __________
2. __________

RESPONSIBLE: __________ DUE: __________
```

---

## Monthly SLA Review

**First Monday of Each Month**

### SLA Performance Report

**Attendees:** Support Manager, CS Manager, Engineering Lead, VP CS

**Agenda:**
1. **Review Metrics (30 min)**
 ```
 SLA COMPLIANCE - [Month]

 Support Response:
 - P0: 100% (10/10)
 - P1: 92% (46/50) - P2: 96% (192/200)
 - P3: 89% (178/200) System Uptime:
 - API: 99.92%
 - Dashboard: 99.3% (Target: 99.5%)
 - Database: 99.95%

 Incidents:
 - P0 incidents: 2
 - P1 incidents: 5
 - Total downtime: 4.2 hours
 - Planned maintenance: 2 hours
 ```

2. **Analyze Breaches (20 min)**
 - Which tickets/incidents breached?
 - Common patterns?
 - Were they preventable?

3. **Action Items (10 min)**
 - Process improvements
 - Staffing adjustments
 - Tool enhancements
 - Training needs

### SLA Adjustment

**Review SLAs Annually or if:**
- Consistent breaches (< 90% compliance for 3 months)
- Overly aggressive (preventing quality)
- Customer feedback (too slow/too fast)
- Business changes (enterprise vs SMB)

**Approval required:** CEO + Legal (if contractual)

---

## Customer SLA Communication

### In Contracts

**Standard SLA Commitments:**
```
SERVICE LEVEL AGREEMENT

PWBI commits to the following service levels:

1. System Availability: 99.5% uptime (monthly)
2. Support Response:
 - Critical issues: 1 hour
 - High priority: 4 hours
 - Medium priority: 8 hours
 - Low priority: 24 hours

3. Data Freshness: Daily refresh by 6 AM WIB

4. Performance: Page load < 3 seconds (95th percentile)

REMEDIES FOR SLA BREACH:
- Service credits: 5% of monthly fee per 1% uptime below 99.5%
- Maximum credit: 25% of monthly fee

EXCLUSIONS:
- Customer's internet/infrastructure
- Planned maintenance (with 7-day notice)
- Force majeure events
```

### SLA Reporting to Customers

**Quarterly Business Review:**
- Share uptime % and trends
- Highlight improvements
- Address any concerns
- Demonstrate value delivery

**Transparency:**
- Public status page: status.pwbi.co.id
- Incident post-mortems (for major outages)
- Proactive communication

---

## Quality Checks

- [ ] SLA metrics tracked in real-time dashboard
- [ ] Automated alerts configured and functioning
- [ ] All breaches documented within 24 hours
- [ ] Post-mortems completed for P0/P1 breaches
- [ ] Monthly SLA review conducted
- [ ] Customer contracts reflect current SLAs
- [ ] 90%+ SLA compliance across all tiers

---

## Related Documents

- [[biz/departments/operations/customer/05-support-escalation-matrix|Support Escalation Matrix SOP]]
- [[biz/departments/operations/customer/03-customer-onboarding-process|Customer Onboarding Process SOP]]
- **System Maintenance Windows SOP** (To Be Created)

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 1.0 | Initial SOP | CS + Support Team |

---

**SLAs are promises. Meet them consistently or adjust them honestly.**
