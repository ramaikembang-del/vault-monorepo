# C4 Enterprise - Security & Compliance

**Document:** Security & Compliance Standards
**Product:** C4 Enterprise Platform
**Last Updated:** December 2025

---

## Overview

C4 Enterprise meets the highest security and compliance standards required by large organizations. This document details certifications, security controls, compliance features, and audit processes.

---

## Certifications

### ISO 27001:2013 (Information Security Management)

**Status:** Certified (2023)
**Scope:** All C4 infrastructure, data processing, and operations
**Auditor:** BSI Group (independent)

**Annual Audits:**
- Surveillance audit: Every 12 months
- Full recertification: Every 3 years
- Next audit: June 2025

**What This Means:**
- Systematic approach to information security
- Risk-based controls
- Continuous improvement processes
- Regular security reviews

**Certificate:** Available to customers upon request

### SOC 2 Type II

**Status:** In Progress (Audit Q2 2025)
**Expected Certification:** Q3 2025
**Auditor:** Deloitte

**Coverage:** Trust Service Criteria
- Security: Protection against unauthorized access
- Availability: 99.95% uptime commitment
- Processing Integrity: Complete, accurate, timely processing
- Confidentiality: Protection of confidential information
- Privacy: Collection, use, retention, disclosure per privacy policy

**Why Important:** Required by many Fortune 500 companies for vendor approval

### PCI DSS (If Processing Payments)

**Level:** 1 (highest security requirements) if processing >6M transactions/year
**Level:** 4 (simplest requirements) if only tokenization

**C4 Approach:**
- Recommend tokenization (partners like Stripe handle payment processing)
- If customer insists on direct processing: Full PCI DSS Level 1 compliance

---

## Security Architecture

### Data Encryption

**At Rest:**
- Algorithm: AES-256
- Key Management: AWS KMS (customer-managed keys available)
- Coverage: Database, backups, file storage, logs
- Performance Impact: Minimal (<5% overhead)

**In Transit:**
- Protocol: TLS 1.3 (latest)
- Cipher Suites: Forward secrecy enabled
- Certificate: Extended Validation (EV) SSL
- HSTS: Enabled (force HTTPS)

**Application-Level:**
- PII fields: Column-level encryption (double encryption)
- Passwords: bcrypt hashing (never stored plaintext)
- API keys: Encrypted + rotated every 90 days

### Network Security

**VPC (Virtual Private Cloud):**
- Dedicated VPC per customer (C4 Enterprise)
- Private subnets for databases, app servers
- Public subnets only for load balancers
- NAT Gateway for outbound-only connections

**Firewall Rules:**
- Inbound: HTTPS (443) only from whitelisted IPs (optional)
- SSH: Bastion host only, MFA required
- Database: No public endpoints (VPN/PrivateLink only)
- Outbound: Whitelisted destinations (no open internet)

**WAF (Web Application Firewall):**
- AWS WAF + CloudFront
- Protection: SQL injection, XSS, DDoS
- Rate limiting: 1,000 requests/min per IP (configurable)
- Geo-blocking: Available (block countries if needed)

**DDoS Protection:**
- AWS Shield Standard: Included (L3/L4 attacks)
- AWS Shield Advanced: Optional ($3K/month, L7 protection + cost protection)

### Access Control

**Authentication:**
- SSO/SAML 2.0 (Azure AD, Okta, Google Workspace)
- MFA mandatory for admins
- Password policy: 12+ chars, complexity requirements
- Session timeout: 30 min inactivity

**Authorization:**
- Role-Based Access Control (RBAC)
- 100+ custom roles (enterprise-specific)
- Principle of least privilege
- Row-level security (tenants can't see each other's data)

**API Security:**
- OAuth 2.0 + JWT tokens
- API keys: Rotated every 90 days
- Rate limiting: Per-customer quotas
- IP whitelisting: Optional

### Audit Logging

**What's Logged:**
- Authentication (login, logout, failed attempts)
- Authorization (access denied events)
- Data access (view, export, delete)
- Configuration changes (settings, users, roles)
- API calls (endpoint, parameters, response)

**Log Retention:** 7 years (compliance requirement)

**Log Storage:**
- Append-only (tamper-proof)
- Encrypted at rest
- Replicated cross-region
- Searchable (OpenSearch)

**Audit Reports:**
- Generated on-demand
- Filtered by user, time range, action type
- Exportable (CSV, JSON)

---

## Vulnerability Management

### Penetration Testing

**Frequency:** Quarterly (every 3 months)

**Scope:**
- External: Web application, APIs, infrastructure
- Internal: Simulated insider threat
- Social engineering: Phishing simulations for team

**Provider:**
- Independent security firm (Bugcrowd, HackerOne)
- Rotating providers (avoid complacency)

**Process:**
1. Pen test conducted (1-2 weeks)
2. Report delivered (findings, severity, recommendations)
3. Remediation plan created
4. Fixes implemented
5. Re-test (verification)
6. Report shared with customer (transparency)

**Severity SLAs:**
- Critical: < 24 hours (immediate patch)
- High: < 7 days
- Medium: < 30 days
- Low: Next quarterly release

### Vulnerability Scanning

**Automated Scanning:**
- Tool: Nessus, Qualys
- Frequency: Weekly
- Coverage: All infrastructure, dependencies, containers

**Dependency Scanning:**
- Tool: Snyk, Dependabot
- Frequency: Daily (CI/CD pipeline)
- Action: Auto-update low-risk, manual review high-risk

### Bug Bounty Program

**Program:** Private (invite-only) via HackerOne
**Rewards:** $100 - $10,000 depending on severity
**Scope:** Production systems (staging excluded)

---

## Compliance Features

### GDPR (General Data Protection Regulation)

**Data Subject Rights:**
- Right to access: Export customer data (JSON/CSV)
- Right to deletion: Permanent deletion within 30 days
- Right to portability: Machine-readable format
- Right to rectification: Self-service data correction

**Privacy by Design:**
- Data minimization (collect only what's needed)
- Purpose limitation (use only for stated purpose)
- Storage limitation (delete when no longer needed)
- Pseudonymization (where possible)

**DPA (Data Processing Agreement):** Available for EU customers

### Indonesian UU PDP (Data Protection Law)

**Requirements:**
- Data residency: Store Indonesian citizen data in Indonesia (AWS Jakarta region)
- Consent management: Explicit opt-in for data collection
- Data officer: Appointed Data Protection Officer (DPO)
- Registration: Registered with Indonesian authorities
- Breach notification: Within 3 days

**Compliance Status:** Fully compliant (since Nov 2025)

### Industry-Specific

**BPJS Integration (Indonesia Labor Law):**
- Employee data for payroll reporting
- Secure transmission to BPJS
- Audit trails for compliance

**OJK (Financial Authority - if banking integration):**
- Financial data protection standards
- Reporting requirements
- Incident notification

---

## Incident Response

### Security Incident Plan

**Phases:**
1. **Detection:** Automated alerts, customer reports
2. **Containment:** Isolate affected systems
3. **Investigation:** Root cause analysis
4. **Eradication:** Remove threat, patch vulnerabilities
5. **Recovery:** Restore services
6. **Post-Incident:** Report, lessons learned, prevent recurrence

**Response Times:**
- P0 (data breach, system compromise): < 1 hour response, < 4 hours containment
- P1 (suspected breach): < 4 hours response
- P2 (vulnerability found): < 24 hours assessment

### Breach Notification

**Customers:**
- Notified within 24 hours (if confirmed breach)
- Details: What happened, data affected, remediation, next steps
- Support: Dedicated hotline, forensic details

**Regulators:**
- Indonesia (UU PDP): Within 3 days
- EU (GDPR): Within 72 hours
- Other jurisdictions: Per local requirements

### Disaster Recovery

**RTO (Recovery Time Objective):** 2 hours
**RPO (Recovery Point Objective):** 5 minutes

**DR Plan:**
- Automated failover to secondary region (AWS Sydney)
- Database replicated cross-region (continuous)
- Infrastructure as Code (recreate in minutes)
- Tested quarterly (simulated disaster)

---

## Customer Responsibilities

**Shared Responsibility Model:**

**PWBI Responsible For:**
- Infrastructure security
- Platform security
- Data encryption
- Network protection
- Compliance certifications

**Customer Responsible For:**
- User access management (who gets access)
- Password strength (enforce policies)
- Data classification (what's sensitive)
- Vendor risk management (third-party integrations)
- Endpoint security (employee devices)

**Best Practices:**
- Enable MFA for all users
- Regular access reviews (quarterly)
- Train employees on security
- Report suspicious activity immediately

---

## Security Training

**For PWBI Team:**
- Annual security awareness training (mandatory)
- Phishing simulations (quarterly)
- Secure coding practices (for developers)
- Incident response drills

**For Customers:**
- Security best practices guide (provided)
- Webinar: "Securing Your C4 Environment" (quarterly)
- On-demand training materials
- Security newsletter (monthly tips)

---

## Third-Party Security

**Vendors We Use:**
- AWS (infrastructure) - ISO 27001, SOC 2, PCI DSS
- Twilio (SMS) - ISO 27001, SOC 2
- SendGrid (email) - ISO 27001, SOC 2
- Stripe (if payment processing) - PCI Level 1

**Vendor Assessment:**
- Annual security review
- Compliance verification
- Contract: Security requirements, breach notification, liability

---

## Compliance Reporting

**Quarterly Security Report:**
- Pen test results
- Vulnerability scan summary
- Incident summary (if any)
- Compliance status

**Annual:** Full audit report (ISO 27001, SOC 2)

**On-Demand:** Customer security questionnaires (RFP/RFI support)

---

## Contact Security Team

**For security issues:**
Email: security@pwbi.co.id
PGP Key: Available on website
Response: < 24 hours (< 1 hour for critical)

**For compliance questions:**
Email: compliance@pwbi.co.id

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 1.0 | Comprehensive security & compliance documentation | Security Team |

---

## Related

- **[[products/13-saas-enterprise/13-saas-enterprise|SaaS Enterprise Product]]** - Product overview
- **[[products/13-saas-enterprise/specifications/enterprise-features|Enterprise Features]]** - Security features overview
- **[[products/13-saas-enterprise/technical/technical-architecture|Technical Architecture]]** - Security architecture details
- **[[products/13-saas-enterprise/technical/deployment-guide|Deployment Guide]]** - Security during deployment
- **[[products/13-saas-enterprise/operations/sla-guarantees|SLA Guarantees]]** - Security SLAs
