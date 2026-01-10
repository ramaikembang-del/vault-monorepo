# Crisis Management Playbook

**Owner:** Leadership Team
**Last Updated:** December 2025

---

## Crisis Types

**1. Technical (System Down)**
**2. Security (Data Breach)**
**3. Customer (Mass Churn)**
**4. PR (Negative Media)**
**5. Financial (Cash Crunch)**
**6. Legal (Lawsuit/Regulatory)**

---

## Response Framework (All Crises)

**Hour 0-1: Alert & Assess**
- Identify crisis type & severity
- Assemble crisis team
- Initial assessment

**Hour 1-4: Contain & Communicate**
- Stop the bleeding (technical fix, etc.)
- Internal communication (team)
- External communication (customers, if needed)

**Day 1-7: Resolve & Recover**
- Implement fix
- Customer support (if affected)
- Monitor situation

**Week 2-4: Post-Mortem & Prevention**
- Root cause analysis
- Preventive measures
- Update processes

---

## Crisis Team Roles

**Incident Commander:** CEO (overall responsibility)
**Technical Lead:** CTO (technical crises)
**Communications Lead:** Marketing (customer/PR communication)
**Customer Lead:** VP CS (customer impact)
**Legal Lead:** General Counsel (legal/regulatory)

---

## Communication Templates

### Internal (Team)
```
SUBJECT: [CRISIS TYPE] - Immediate Action Required

Team,

We are experiencing [brief description]. Here's what's happening:

SITUATION: [2-3 sentences]
IMPACT: [customers affected? severity?]
ACTION PLAN: [what we're doing]
YOUR ROLE: [if applicable]

Next update: [time]

- Leadership
```

### External (Customers)
```
SUBJECT: Service Update - [Date/Time]

Dear Valued Customer,

We're writing to inform you of a service issue affecting [scope].

WHAT HAPPENED: [brief, transparent]
IMPACT ON YOU: [specific]
WHAT WE'RE DOING: [actions]
WHEN RESOLVED: [ETA]

We sincerely apologize. Questions? Email support@pwbi.co.id

PWBI Team
```

---

## Example: System Outage (P0 Technical Crisis)

**Scenario:** Database failure, all dashboards down

**Hour 0:**
- Alert: Monitoring detects outage
- Assemble: CTO + Engineering team
- Assess: Database corruption, 2-4 hour fix estimate

**Hour 1:**
- Contain: Switch to backup database
- Communicate: Email all customers, update status page

**Hour 2-4:**
- Resolve: Restore primary database, sync data
- Verify: Test all systems

**Post-Mortem:**
- Root cause: DB config error
- Prevention: Automated failover, better monitoring

---

## Related Documents

- [[products/templates/facilities/02-incident-reporting|Security Incident Response SOP]]
- System Maintenance Windows SOP (see operations deployment docs)

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial playbook |
