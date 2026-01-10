# IT Department Overview
**Technology Infrastructure & Support**

**Owner:** IT Lead  
**Status:** PLANNED - Year 2+ (when team >5 people)

---

## IT Department Mission

**Support the business with reliable, secure technology**

**Responsibilities:**
- Infrastructure (cloud, hosting, domains)
- Security (policies, compliance, incident response)
- IT support (employee laptops, software, troubleshooting)
- Vendor management (SaaS subscriptions, contracts)

---

## IT Team Structure

**Year 1 (Bootstrap):**
- No dedicated IT (Founder + Engineer handle ad-hoc)

**Year 2 (Growing):**
- IT Lead (part-time or contractor)
- Handles: Infrastructure, security, support

**Year 3+ (Scaled):**
- IT Manager (full-time)
- IT Specialist (helpdesk, hardware)
- Security focus (if needed - SOC 2 compliance)

---

## Infrastructure

### Cloud & Hosting

**Production:**
- Frontend: Vercel
- Backend: Supabase (PostgreSQL + Auth + Storage)
- DNS: Cloudflare
- Monitoring: Sentry (errors), Mixpanel (analytics)

**Development:**
- Staging: Vercel preview deployments
- Local: Docker (standardized environments)

---

### Domains & Email

**Domains:**
- clario.id (primary)
- Hosted: Cloudflare (DNS + security)

**Email:**
- Google Workspace (admin@, support@, hello@)
- Forwarding rules (sales@ → founder, support@ → CS team)

---

### SaaS Stack

**Core Tools:**
- Communication: Slack, Gmail
- Documentation: Notion
- CRM: HubSpot or Pipedrive
- Project Management: GitHub Projects or Linear
- Design: Figma

**Year 1 Budget:** Rp 5M/year (~Rp 400K/month)

---

## Security

### Policies
- [[biz/departments/it/policies/security-policies|Security Policies]]
- [[biz/departments/it/training/security-basics|Employee Security Training]]

### Incident Response
- [[biz/departments/it/sops/incident-response|Incident Playbook]]
- On-call rotation (if 24/7 service)

### Compliance
**Year 1:** Basic hygiene  
**Year 2:** ISO 27001 preparation  
**Year 3:** SOC 2 Type II audit

---

## IT Support

### Employee Onboarding

**New Hire Setup:**
- [ ] Email account (Google Workspace)
- [ ] Slack + tool access
- [ ] Laptop (if company-provided)
- [ ] VPN access (for production systems)
- [ ] 2FA setup (all critical accounts)

**Timeline:** Complete before Day 1

---

### Helpdesk

**Support Channels:**
- Slack #it-support
- Email: it@clario.id
- Urgent: Direct message IT Lead

**SLA:**
- Critical (can't work): <2 hours
- High (major inconvenience): <4 hours
- Medium: <24 hours
- Low: <3 days

---

### Hardware Management

**Laptops:**
- MacBook Air M2 or ThinkPad (depending on role)
- Company-owned (not BYOD for security)
- Encrypted (FileVault or BitLocker)

**Replacement Cycle:** 4 years (or when performance degrades)

---

## Vendor Management

**SaaS Subscriptions:**
- Centralized billing (company credit card)
- Annual review (cancel unused subscriptions)
- Negotiate renewals (ask for discounts)

**Contracts:**
- Maintain list (Notion database)
- Track renewal dates (avoid auto-renew surprises)
- Budget planning (forecast annual spend)

---

## Disaster Recovery

**Backups:**
- Code: GitHub (version control)
- Database: Supabase (daily automated backups, 30-day retention)
- Documents: Google Workspace (cloud-native, no local-only files)

**RTO/RPO:**
- RTO (Recovery Time Objective): 4 hours
- RPO (Recovery Point Objective): 6 hours

**Test:** Quarterly backup restore drill

---

## IT Budget

**Year 1 (Bootstrap):**
- Cloud/hosting: Rp 3M
- SaaS tools: Rp 2M
- Total: Rp 5M/year

**Year 2 (Growth):**
- Cloud: Rp 10M (scale up)
- SaaS: Rp 5M (more tools)
- IT Lead (contractor): Rp 60M/year
- Hardware: Rp 30M (3 laptops)
- Total: Rp 105M/year

---

## Key Workflows

**Deployment:** [[products/shared-technical/devops/deployment-process|Deploy to Production]]  
**Bug Triage:** [[biz/departments/it/workflows/bug-triage-process|Bug Management]]  
**Security Incident:** [[biz/departments/it/sops/incident-response|IR Playbook]]

---

**Status:** PLANNED  
**Launch:** Year 2 (when team >5 people)  
**Owner:** IT Lead (hire Year 2)
