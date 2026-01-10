# Escalation Paths

**Last Updated:** 2025-12-27
**Owner:** Operations Team
**Purpose:** Quick reference for who to contact for what issue

---

## Quick Reference: Who to Contact

### By Urgency Level

** P0 - EMERGENCY (Production Down, Security Breach)**
- **First Contact:** On-call Engineer (check Slack #oncall)
- **If no response in 5 min:** CTO directly
- **If still no response:** CEO
- **Communication:** Slack #incidents + email

** P1 - URGENT (Major Feature Broken, Customer Escalation)**
- **First Contact:** Engineering Lead / Support Manager
- **If no response in 1 hour:** CTO / CSM Manager
- **Communication:** Slack + email

** P2 - IMPORTANT (Minor Bug, Process Question)**
- **First Contact:** Relevant team lead
- **If no response in 4 hours:** Department head
- **Communication:** Slack

** P3 - ROUTINE (Feature Request, General Question)**
- **First Contact:** Relevant team member
- **No escalation needed**
- **Communication:** Slack or email

---

## By Department

### Engineering Issues

| Issue Type | Contact | Escalation | Notes |
|------------|---------|------------|-------|
| Production down | On-call Engineer | → CTO | Check #oncall |
| Deployment issues | DevOps Lead | → CTO | |
| Security vulnerability | Security Lead | → CTO → CEO | Immediate |
| Bug reports | Engineering Lead | → CTO | |
| Feature questions | Product Manager | → CPO | |

**Slack Channels:**
- `#engineering` - General engineering questions
- `#incidents` - Active incidents only
- `#oncall` - On-call rotation schedule

---

### Product Issues

| Issue Type | Contact | Escalation | Notes |
|------------|---------|------------|-------|
| Feature prioritization | Product Manager | → CPO | Use backlog |
| Product strategy | CPO | → CEO | |
| User research | Product Manager | → CPO | |
| Roadmap questions | Product Manager | → CPO | |
| Pricing changes | CPO | → CEO | Requires approval |

**Slack Channels:**
- `#product` - Product discussions
- `#product-feedback` - Customer feedback

---

### Customer Success Issues

| Issue Type | Contact | Escalation | Notes |
|------------|---------|------------|-------|
| Customer complaint | CSM (assigned) | → CS Manager → CCO | |
| Churn risk | CSM | → CS Manager | Urgent |
| Account expansion | CSM | → CS Manager | |
| Onboarding issue | CSM | → CS Manager | |
| Technical issue | Support | → Engineering | Follow support SOP |

**Slack Channels:**
- `#customer-success` - General CS discussions
- `#support` - Support tickets
- `#customer-escalations` - Critical issues only

---

### Sales Issues

| Issue Type | Contact | Escalation | Notes |
|------------|---------|------------|-------|
| Deal approval | Sales Manager | → CRO → CEO | >$100M deals |
| Pricing discount | Sales Manager | → CRO | Follow pricing guide |
| Contract questions | Sales Manager | → Legal | |
| Demo requests | Sales | → Product | |
| Partnership | CRO | → CEO | |

**Slack Channels:**
- `#sales` - General sales discussions
- `#deals` - Active opportunities

---

### Finance & Operations

| Issue Type | Contact | Escalation | Notes |
|------------|---------|------------|-------|
| Invoice issues | Accounts Receivable | → Finance Manager → CFO | |
| Payment problems | Billing Team | → Finance Manager | |
| Budget questions | Finance Manager | → CFO | |
| Vendor payments | Accounts Payable | → Finance Manager | |
| Expense reimbursement | Finance Manager | → CFO | Follow policy |

**Slack Channels:**
- `#finance` - Finance questions
- `#operations` - Operational issues

---

### HR & People

| Issue Type | Contact | Escalation | Notes |
|------------|---------|------------|-------|
| Hiring questions | Recruiter | → HR Manager | |
| Onboarding | HR Coordinator | → HR Manager | |
| Benefits | HR Manager | → CHRO | |
| Performance issues | Manager | → HR Manager | Confidential |
| Workplace conflict | HR Manager | → CHRO | Confidential |
| Resignation | Manager | → HR Manager → CHRO | |

**Slack Channels:**
- `#people` - General HR announcements
- **Note:** Sensitive HR issues should be via email or private Slack DM, NOT public channels

---

### Legal & Compliance

| Issue Type | Contact | Escalation | Notes |
|------------|---------|------------|-------|
| Contract review | Legal Team | → General Counsel | |
| Compliance question | Compliance Manager | → General Counsel | |
| Data privacy (PDPN) | DPO | → General Counsel | |
| Security breach | Security Lead | → General Counsel → CEO | Immediate |
| Lawsuit/legal threat | General Counsel | → CEO → Board | Immediate |

**Communication:** Always email for legal issues (creates documentation)

---

## After-Hours Escalations

**On-Call Schedule:** Check Slack #oncall for current rotation

### Who's On Call

- **Engineering:** Rotating weekly (Slack #oncall)
- **Customer Success:** CSM Manager (critical accounts only)
- **Security:** Security Lead (24/7)

### When to Page On-Call

** DO Page:**
- Production completely down
- Security breach detected
- Data loss incident
- Critical customer escalation (enterprise accounts)

** DO NOT Page:**
- Minor bugs
- Feature requests
- General questions
- Non-critical issues

**How to Page:**
1. Slack message in #incidents
2. Direct phone call (if listed in contact sheet)
3. Email with "URGENT" in subject

---

## External Escalations

### Vendor Issues

| Vendor Type | Contact | Escalation |
|-------------|---------|------------|
| Cloud (Azure) | DevOps Lead | → CTO |
| Payment processor | Finance | → CFO |
| POS integrations | Integration Team | → CTO |
| Marketing tools | Marketing Manager | → CMO |

### Partner Escalations

| Partner Type | Contact | Escalation |
|--------------|---------|------------|
| Resellers | Partner Manager | → CRO |
| Integration partners | Product Manager | → CPO |
| Co-marketing | Marketing Manager | → CMO |

---

## Escalation Etiquette

**DO:**
- Provide context (what happened, when, impact)
- Include relevant links (tickets, logs, Slack threads)
- State what you've already tried
- Be clear about urgency level
- Follow up if not resolved

**DON'T:**
- Skip levels unnecessarily
- Escalate without trying to resolve first
- Use escalation as first resort for non-urgent issues
- Copy entire leadership team on every issue
- Escalate publicly in Slack (use DMs for sensitive issues)

---

## Response Time SLAs

| Priority | First Response | Escalation Trigger |
|----------|----------------|-------------------|
| P0 | 5 minutes | No response in 5 min |
| P1 | 1 hour | No response in 1 hour |
| P2 | 4 hours | No response in 4 hours |
| P3 | 2 business days | No escalation needed |

---

**Related Documents:**
- [[biz/playbooks/team-collaboration/01-collaboration-guide#Decision Framework|Decision Framework]] - Who approves what
- [[biz/playbooks/team-collaboration/02-meeting-rhythms|Meeting Rhythms]] - When issues are discussed
- [[products/templates/facilities/02-incident-reporting|Incident Response]] - P0/P1 procedures

**Emergency Contacts:** See internal contact sheet (Notion)

**Last Updated:** 2025-12-27
**Owner:** Operations Team
