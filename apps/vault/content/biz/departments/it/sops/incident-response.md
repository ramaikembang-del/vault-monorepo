# Incident Response Playbook  
**Security Incident Management**

**Owner:** IT + Engineering  
**Status:** ACTIVE

---

## Incident Types

**Data Breach:** Customer data accessed/stolen  
**System Compromise:** Server/account hacked  
**DDoS Attack:** Service unavailable due to attack  
**Insider Threat:** Employee malicious activity  
**Phishing:** Team member clicked malicious link

---

## Response Steps (P0 - Critical)

### Step 1: Contain (0-1 hour)
- Isolate affected systems (disconnect from network if needed)
- Revoke compromised credentials immediately
- Block malicious IPs (if DDoS)

### Step 2: Assess (1-4 hours)
- Determine scope (what data/systems affected?)
- Identify root cause (how did breach occur?)
- Estimate impact (customer count, data types)

### Step 3: Eradicate (4-24 hours)
- Remove malware/backdoors
- Patch vulnerabilities
- Reset all passwords (if credential breach)

### Step 4: Recover (1-3 days)
- Restore from backups (if needed)
- Bring systems back online
- Monitor for reinfection

### Step 5: Notify (24-72 hours)
- Customers (if their data affected)
- Authorities (if legally required - Indonesia: BSSN)
- Insurance (if applicable)

### Step 6: Post-Mortem (1 week after)
- Document timeline
- Identify failures (why didn't we prevent this?)
- Implement fixes (update policies, add monitoring)

---

## Communication Templates

**Internal Alert (Slack #incidents):**
```
🚨 SECURITY INCIDENT - P0  
Type: [Data breach / System compromise]  
Status: Contained / Investigating  
Impact: [X customers, Y systems]  
Next Update: [Time]
```

**Customer Notification (Email):**
```
Subject: Important Security Update

Dear [Customer],

We are writing to inform you of a security incident that may have affected your account.

What happened: [Brief description]
What data was affected: [Specific details]
What we're doing: [Our response]
What you should do: [Actions for customer - change password, etc.]

We sincerely apologize. Questions: security@clario.id

Regards,
[Founder]
```

---

## Incident Log

**Track all incidents in:** Notion database

| Date | Type | Severity | Impact | Resolution | Post-Mortem |
|------|------|----------|--------|------------|-------------|
| 2026-02-15 | Phishing | P2 | 1 employee | Password reset | [Link] |

---

## Prevention Measures

**Technical:**
- SIEM monitoring (consider Sentry Enterprise)
- Intrusion detection (firewall rules)
- Regular pentests (quarterly)

**Process:**
- Security training (all employees, annually)
- Access reviews (quarterly)
- Incident drills (simulate breach, practice response)

---

**Status:** ACTIVE  
**Incident Contact:** security@clario.id  
**Escalation:** Founder (for P0-P1)
