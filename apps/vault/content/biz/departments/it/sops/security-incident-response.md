# Security Incident Response Playbook

> [!CAUTION]
> **Confidential Document:** Contains sensitive security procedures. Distribute only to authorized personnel.

> [!NOTE]
> **Status:** Active
> **Last Updated:** 2026-01-05
> **Owner:** IT/Security Team
> **Review Frequency:** Quarterly

---

## Overview

This playbook defines procedures for detecting, responding to, and recovering from security incidents at PWBI F&B Growth. All team members and contractors with system access must be familiar with this document.

---

## What is a Security Incident?

**Security Incident:** Any event that compromises the confidentiality, integrity, or availability of systems or data.

### Examples:

 **IS a Security Incident:**
- Unauthorized access to customer data
- Malware/ransomware infection
- DDoS attack causing service outage
- Data breach (personal data exposed)
- Insider threat (employee/contractor misuse)
- Phishing attack leading to credential compromise
- SQL injection or other successful exploit

 **NOT a Security Incident (but monitor):**
- Failed login attempts (<5 attempts)
- User forgot password
- Software bug without security impact
- Planned maintenance downtime

---

## Incident Severity Levels

| Severity | Impact | Response Time | Examples |
|----------|--------|---------------|----------|
| **P0 - Critical** | Data breach, system down, active attack | Immediate (15 min) | Customer data exposed, ransomware active |
| **P1 - High** | Significant risk, limited exposure | 1 hour | Successful phishing, unauthorized API access |
| **P2 - Medium** | Contained threat, no data loss | 4 hours | Suspicious login activity, malware detected but contained |
| **P3 - Low** | Potential threat, no immediate risk | 24 hours | Failed exploit attempt, outdated software vulnerability |

---

## Incident Response Team

### Core Team (2-Person Founding Team)

**Incident Commander:**
- **Role:** Strategy & Technical Architecture Partner
- **Responsibilities:** Overall coordination, communication, decisions
- **Contact:** [WhatsApp, Phone]

**Technical Lead:**
- **Role:** Product Development Partner (or Technical Contractor if hired)
- **Responsibilities:** Technical investigation, system remediation
- **Contact:** [WhatsApp, Phone]

### Extended Team (Contractors/Advisors)

**Security Advisor (If hired):**
- **Responsibilities:** Forensics, compliance, post-incident review
- **Contact:** [Email, Phone]

**Legal Counsel:**
- **Responsibilities:** Regulatory compliance (UU PDP), breach notification
- **Contact:** [Email, Phone]

**Customer Support Lead (If hired):**
- **Responsibilities:** Customer communication, support escalation
- **Contact:** [Email, WhatsApp]

---

## Phase 1: DETECTION & TRIAGE

### 1.1 Detection Sources

**Automated Alerts:**
- [ ] Cloud monitoring (AWS CloudWatch, Vercel alerts)
- [ ] Security tools (Sentry error tracking)
- [ ] WAF (Web Application Firewall) blocks
- [ ] Login anomaly detection

**Manual Reports:**
- [ ] Customer reports (support tickets)
- [ ] Team member discovery
- [ ] Third-party notification (HackerOne, security researcher)

---

### 1.2 Initial Triage (5 minutes)

**Triage Checklist:**

1. **Verify legitimacy** - Is this a real incident or false positive?
2. **Assess severity** - P0, P1, P2, or P3?
3. **Estimate scope** - How many users/systems affected?
4. **Contain if possible** - Can we immediately stop the damage?

**Decision Tree:**

```
Is customer data exposed or at risk? → YES → P0 Critical
 ↓ NO
Is unauthorized access confirmed? → YES → P1 High
 ↓ NO
Is this a failed attack attempt? → YES → P2 Medium
 ↓ NO
Potential vulnerability discovered? → YES → P3 Low
```

---

### 1.3 Alert Incident Commander

**How to Report:**
1. **WhatsApp message** to Incident Commander: "[SECURITY INCIDENT - P{0-3}] Brief description"
2. **Follow-up call** for P0/P1 incidents (immediate)
3. **Document** in #security-incidents Slack channel or Notion page

**Example Message:**
```
[SECURITY INCIDENT - P1]
Suspicious login to admin panel from Russia IP
- User: admin@pwbifnb.com
- Time: 2026-01-05 14:30 WIB
- Action: Account locked, investigating
```

---

## Phase 2: CONTAINMENT

**Goal:** Stop the incident from spreading while preserving evidence.

### 2.1 Immediate Actions (P0/P1 - Within 15-60 minutes)

**For Data Breach / Unauthorized Access:**
- [ ] **Revoke access** - Disable compromised accounts immediately
- [ ] **Isolate systems** - Disconnect affected servers from network if needed
- [ ] **Block IPs** - Blacklist attacker IPs in firewall/WAF
- [ ] **Reset credentials** - Force password resets for affected users
- [ ] **Enable extra logging** - Capture all activity for forensics

**For Malware/Ransomware:**
- [ ] **Disconnect network** - Prevent spread to other systems
- [ ] **DO NOT pay ransom** (unless explicitly authorized by Incident Commander)
- [ ] **Snapshot infected systems** - For forensic analysis
- [ ] **Restore from backups** - Verify backup integrity first

**For DDoS Attack:**
- [ ] **Enable DDoS protection** - Cloudflare "Under Attack" mode
- [ ] **Contact hosting provider** - AWS Shield, Vercel support
- [ ] **Communicate status** - Update status page

---

### 2.2 Evidence Preservation

> [!IMPORTANT]
> **Do not delete logs or modify systems** until forensics are complete (or explicitly authorized).

**Collect:**
- [ ] System logs (past 7 days minimum)
- [ ] Access logs (who, when, what)
- [ ] Database query logs (if applicable)
- [ ] Network traffic captures (if possible)
- [ ] Screenshots of indicators of compromise (IOCs)

**Storage:**
- Secure location (encrypted S3 bucket, password-protected drive)
- Retain for 12 months minimum (regulatory requirement)

---

## Phase 3: INVESTIGATION

**Goal:** Understand how the incident happened and full scope of impact.

### 3.1 Root Cause Analysis

**Questions to Answer:**
1. **What happened?** - Technical details of the attack/breach
2. **When did it start?** - Timeline of events
3. **How did they get in?** - Attack vector (phishing, SQL injection, etc.)
4. **What did they access?** - Data, systems, accounts compromised
5. **Are there other victims?** - Check for lateral movement

**Investigation Tools:**
- Log analysis (AWS CloudTrail, Vercel logs)
- Database audit logs (PostgreSQL pg_audit)
- File integrity monitoring (AIDE, Tripwire)
- Network traffic analysis (Wireshark if captured)

---

### 3.2 Impact Assessment

**Data Impact:**
- [ ] **Personal Data (PII)** - Names, emails, phone numbers, addresses
 - Count: [Number of records]
 - Sensitivity: [High/Medium/Low]
- [ ] **Financial Data** - Payment info, bank details
 - Count: [Number]
 - Note: If payment data, notify payment processor immediately
- [ ] **Business Data** - Proprietary code, algorithms, strategy docs
 - Scope: [Description]
- [ ] **Authentication Data** - Passwords, API keys, tokens
 - Action: Force resets

**System Impact:**
- [ ] **Downtime:** [Hours/minutes affected]
- [ ] **Data Loss:** [Any data lost permanently?]
- [ ] **Degraded Performance:** [Ongoing impact?]

---

## Phase 4: ERADICATION

**Goal:** Remove the threat completely from all systems.

### 4.1 Threat Removal

**For Malware:**
- [ ] Run anti-malware scans on all systems
- [ ] Rebuild infected servers from clean images
- [ ] Verify backups are malware-free before restore

**For Unauthorized Access:**
- [ ] Remove backdoors, rogue admin accounts
- [ ] Patch vulnerabilities used in attack
- [ ] Update all compromised credentials

**For Application Exploits:**
- [ ] Deploy security patches immediately
- [ ] Code review vulnerable areas
- [ ] WAF rules to block exploit patterns

---

### 4.2 Verification

**Before declaring "all clear":**
- [ ] Re-scan systems (malware, vulnerabilities)
- [ ] Verify no unauthorized access in past 24 hours
- [ ] Test application security (penetration test if P0)
- [ ] Get second opinion (security advisor if major incident)

---

## Phase 5: RECOVERY

**Goal:** Restore normal operations safely.

### 5.1 System Restoration

**Staged Rollout:**
1. **Internal testing** (30 minutes) - Team verifies functionality
2. **Beta users** (if applicable, 2 hours) - Small group tests
3. **Full production** (after 24 hours monitoring) - All users

**Monitoring:**
- [ ] Increased logging for 7 days
- [ ] Daily security scans
- [ ] User behavior analytics (watch for anomalies)

---

### 5.2 Communication

#### Internal Communication

**Team Notification (Slack/WhatsApp):**
```
[RESOLVED] Security Incident - [Brief Description]

Status: Systems restored and secured
Impact: [Summary - e.g., "No customer data accessed"]
Actions Taken: [Key steps - e.g., "Patched vulnerability, reset passwords"]
Next Steps: [Monitoring, post-incident review]

Thank you for your patience.
```

---

#### Customer Communication (If Required)

> [!WARNING]
> **Legal Review Required:** Consult legal counsel before customer notification (UU PDP compliance).

**When to Notify Customers:**
- Personal data accessed or exposed (UU PDP Art. 62)
- Service disruption >2 hours
- Password reset required

**Notification Timeline:**
- **Internal notification:** Within 3 days of discovery (to regulatory authority if required)
- **Customer notification:** Within 7 days (or as legally required)

**Template Email:**
```
Subject: Important Security Update - [Company Name]

Dear [Customer Name],

We are writing to inform you of a security incident that may have affected your account.

What Happened:
[Brief, non-technical explanation]

What Information Was Involved:
[Specific data types, e.g., "email address and username" - NOT "personal identifiable information"]

What We Are Doing:
- [Action 1 - e.g., "Implemented additional security controls"]
- [Action 2 - e.g., "Reset all passwords as a precaution"]

What You Should Do:
- [Action for customer - e.g., "Update your password immediately"]
- [Link to password reset]

We take security seriously and sincerely apologize for any concern this may cause. If you have questions, please contact [support@pwbifnb.com].

Sincerely,
[Incident Commander Name]
[Title]
```

---

### 5.3 Regulatory Notification (Indonesia UU PDP)

**If Personal Data Breach:**

**Notification to:** Kementerian Komunikasi dan Informatika (Kominfo) or designated authority

**Timeline:** Within **3 days** of discovery (Art. 62, UU PDP No. 27/2022)

**Information Required:**
- Nature of the breach
- Type and scale of personal data affected
- Time of occurrence
- Consequences of the breach
- Remedial measures taken

**Method:** Written notification via official channel

---

## Phase 6: POST-INCIDENT REVIEW

**Goal:** Learn from the incident and improve security.

### 6.1 Incident Report (Within 7 days)

**Required Sections:**
1. **Executive Summary** (1 paragraph)
2. **Timeline** (key events with timestamps)
3. **Root Cause** (how did this happen?)
4. **Impact** (scope, affected data/systems)
5. **Response Actions** (what we did)
6. **Lessons Learned** (what went well, what didn't)
7. **Remediation Plan** (how we prevent recurrence)

**Template:** See [[#incident-report-template|Incident Report Template]] below

---

### 6.2 Remediation Plan

**Categories:**

**Technical Fixes:**
- [ ] Patch vulnerabilities (with deadlines)
- [ ] Implement missing security controls
- [ ] Upgrade vulnerable systems

**Process Improvements:**
- [ ] Update this playbook (if gaps identified)
- [ ] Improve detection capabilities
- [ ] Enhance logging/monitoring

**Training:**
- [ ] Security awareness training for team
- [ ] Phishing simulations (if phishing was vector)
- [ ] Incident response drill (tabletop exercise)

**Assign:** Owner and deadline for each item

---

### 6.3 Metrics to Track

**Incident Metrics:**
- Time to detect (TTD) - Discovery to awareness
- Time to contain (TTC) - Awareness to containment
- Time to resolve (TTR) - Containment to full recovery

**Goals:**
- P0: TTR < 4 hours
- P1: TTR < 24 hours
- P2: TTR < 72 hours

---

## Incident Report Template

```markdown
# Security Incident Report

**Incident ID:** SEC-2026-001
**Date:** 2026-01-05
**Severity:** P1
**Status:** Resolved

---

## Executive Summary

[2-3 sentence summary of what happened and impact]

---

## Timeline

| Time (WIB) | Event |
|------------|-------|
| 14:30 | Suspicious login detected |
| 14:32 | Account locked by monitoring system |
| 14:35 | Incident Commander notified |
| 14:45 | Root cause identified (phishing) |
| 15:00 | Password resets deployed |
| 16:00 | Incident resolved |

---

## Root Cause

[Detailed explanation of how the incident occurred]

---

## Impact

**Data:**
- [Description of affected data]
- [Number of records]

**Systems:**
- [Systems affected]
- [Downtime duration]

**Users:**
- [Number of users impacted]

---

## Response Actions

1. [Action 1]
2. [Action 2]
3. [Action 3]

---

## Lessons Learned

**What Went Well:**
- [Positive aspect 1]
- [Positive aspect 2]

**What Could Be Improved:**
- [Improvement 1]
- [Improvement 2]

---

## Remediation Plan

| Action | Owner | Deadline | Status |
|--------|-------|----------|--------|
| [Action 1] | [Name] | [Date] | [ ] |
| [Action 2] | [Name] | [Date] | [ ] |

---

**Report Prepared By:** [Name]
**Reviewed By:** [Incident Commander]
**Date:** [YYYY-MM-DD]
```

---

## Prevention & Best Practices

### Security Basics (All Team Members)

 **DO:**
- Use password manager (1Password, Bitwarden)
- Enable 2FA on all accounts
- Report suspicious emails/activity immediately
- Keep software updated
- Use company-approved tools only

 **DON'T:**
- Click links in unexpected emails
- Share passwords or API keys
- Use public WiFi without VPN
- Leave devices unlocked
- Take screenshots of sensitive data

---

### Secure Development Practices

**For Developers/Contractors:**
- [ ] Never commit secrets to Git (use .env files, secrets manager)
- [ ] Input validation on all user inputs (prevent SQL injection, XSS)
- [ ] Use parameterized queries (no string concatenation for SQL)
- [ ] HTTPS only (no HTTP endpoints)
- [ ] Principle of least privilege (minimal permissions)

---

### Regular Security Activities

**Monthly:**
- [ ] Review access logs for anomalies
- [ ] Update dependencies (npm audit, pip check)
- [ ] Verify backups work (test restore)

**Quarterly:**
- [ ] Security training for team
- [ ] Review and update this playbook
- [ ] Penetration test (self or contracted)
- [ ] Access review (revoke unused accounts)

**Annually:**
- [ ] Third-party security audit
- [ ] Disaster recovery drill
- [ ] Insurance review (cyber liability)

---

## Contact Information

### Emergency Contacts

| Role | Name | Phone | Email | WhatsApp |
|------|------|-------|-------|----------|
| Incident Commander | [Name] | [Phone] | [Email] | [WhatsApp] |
| Technical Lead | [Name] | [Phone] | [Email] | [WhatsApp] |
| Legal Counsel | [Name] | [Phone] | [Email] | [WhatsApp] |

### Service Providers

| Provider | Support Contact | Account # |
|----------|-----------------|-----------|
| AWS | [Support phone/email] | [Account ID] |
| Vercel | [Support email] | [Team ID] |
| Cloudflare | [Support portal] | [Account ID] |

---

---

## Related

- **[[biz/departments/legal/templates/02-dpa-template|Data Processing Agreement Template]]** - Data privacy and security agreements
- **[[biz/training/employee/core-skills/11-security-awareness-training|Security Awareness Training]]** - Employee security training
- **[[biz/departments/it/policies/security-policies|Security Policies]]** - Company security policies
- **[[biz/departments/it/sops/incident-response|Incident Response]]** - General incident procedures
- **[[products/shared-technical/security/security-guidelines|Security Guidelines]]** - Development security practices

---

**Document Version:** 1.0
**Last Incident:** None (as of 2026-01-05)
**Last Review:** 2026-01-05
**Next Review:** 2026-04-05 (Quarterly)
