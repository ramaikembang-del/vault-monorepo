# C4 Enterprise - Enterprise Features

**Document:** Enterprise Features Specification
**Product:** C4 Enterprise Platform
**Last Updated:** December 2025

---

## What Makes C4 "Enterprise"?

C4 isn't just "C1 with more features." It's architected from the ground up for large-scale, multi-country, mission-critical operations.

---

## 1. Multi-Country Operations

### Multi-Currency Support

**Supported Currencies:**
- IDR (Indonesian Rupiah)
- SGD (Singapore Dollar)
- MYR (Malaysian Ringgit)
- USD (US Dollar)
- Custom currencies on request

**Features:**
- Real-time exchange rate updates
- Historical rate tracking
- Multi-currency reporting (consolidated or per-currency)
- Hedging calculations
- Currency conversion auditing

**Example:** Restaurant group with operations in Jakarta, Singapore, and Kuala Lumpur sees consolidated P&L in USD while local managers see local currency.

### Multi-Language Interface

**Supported Languages:**
- Indonesian (Bahasa Indonesia)
- English
- Mandarin (Simplified Chinese)
- Custom languages available

**Translation Scope:**
- Full UI (menus, buttons, labels)
- Reports & dashboards
- Email notifications
- Help documentation
- Error messages

**User Preference:** Each user sets their language independently

### Country-Specific Tax & Compliance

**Indonesia:**
- PPN (VAT) 11%
- Service charge calculations
- PPh 23 withholding tax
- BPJS integration
- e-Faktur compliance

**Singapore:**
- GST 8%
- CPF integration
- IRAS reporting

**Malaysia:**
- SST (Sales & Service Tax)
- EPF integration
- LHDN reporting

**Automated:** Tax rules applied automatically based on location

### Data Residency

**Legal Requirement:** Many countries require data stored in-country

**C4 Solution:**
- Indonesia data: AWS ap-southeast-1 (Jakarta)
- Singapore data: AWS ap-southeast-1 (Singapore)
- Malaysia data: AWS ap-southeast-1 (Kuala Lumpur)
- Cross-border: Encrypted replication for reporting

---

## 2. White-Label Platform

### Custom Branding

**What You Can Customize:**
- Logo (login screen, dashboard, reports)
- Color scheme (primary, secondary, accents)
- Typography (fonts)
- Domain (analytics.yourcompany.com instead of pwbi.co.id)
- Favicon
- Loading screens

**PWBI Branding:** Can be removed entirely or kept as "Powered by PWBI"

### Custom Workflows

**Standard:** C1 has fixed workflows
**Enterprise:** Configure workflows to match your processes

**Examples:**
- Approval chains: Match your org chart (Regional Manager → Country Director → CFO → CEO)
- Reporting cadence: Daily/weekly/monthly as you prefer
- Access controls: Custom roles beyond standard (e.g., "Franchise Auditor" role)

### Custom Dashboards

**Standard:** Pre-built dashboards for all users
**Enterprise:** Build custom dashboards per role/brand/region

**Dashboard Builder:**
- Drag-drop widgets
- Custom metrics (your formulas)
- Saved views per user
- Scheduled screenshots (emailed daily)

### API-First Architecture

**Why:** Build your own UI on top of our data engine

**Use Cases:**
- Internal portal integration
- Mobile app (your branded app)
- Custom reporting tools
- Data warehouse integration

---

## 3. Dedicated Infrastructure

### Private Cloud

**Standard C1:** Shared infrastructure with other customers
**Enterprise C4:** Dedicated AWS/Azure environment

**Benefits:**
- Data isolation (no noisy neighbors)
- Custom security policies
- Compliance easier (auditors love dedicated)
- Performance guaranteed (not affected by others)

**Architecture:**
- Dedicated VPC (Virtual Private Cloud)
- Dedicated database instances
- Dedicated application servers
- Optional: On-premise deployment (air-gapped)

### Custom Scaling

**Standard:** Auto-scaling with limits
**Enterprise:** Custom scaling rules

**Examples:**
- Ramadan: 3x capacity (high traffic month)
- Black Friday: 5x capacity (promo events)
- Normal: 1x baseline

**No Performance Degradation:** Scale up before peaks, down after

### Dedicated Database

**Standard:** Shared database (logically separated)
**Enterprise:** Dedicated PostgreSQL cluster

**Features:**
- Custom indexes (optimize for your queries)
- Custom backup schedules
- Point-in-time recovery (any second in last 35 days)
- Read replicas (for analytics, don't impact prod)

---

## 4. Advanced Integrations

### ERP Systems

**SAP:**
- Financial data sync (GL, AR, AP)
- Real-time or batch
- Bi-directional (PWBI → SAP, SAP → PWBI)

**Oracle ERP Cloud:**
- Similar to SAP
- Inventory, procurement, finance modules

**Microsoft Dynamics 365:**
- Finance & operations integration
- Power BI connector (embed PWBI in Power BI)

**Custom ERPs:**
- API integration
- File-based (SFTP, S3)
- Database direct connect (secure VPN)

### HR Systems

**Workday:**
- Employee data sync (headcount, wages, scheduling)
- Attendance integration
- Labor cost allocation

**BambooHR, Darwinbox:**
- Similar integrations
- Org chart sync (for approval workflows)

### Accounting Systems

**QuickBooks Enterprise:**
- Chart of accounts mapping
- Journal entry export
- Reconciliation

**Xero Business:**
- Invoice sync
- Payment tracking

### POS Systems (All)

**Oracle Micros:**
- Real-time transaction feed
- Menu sync
- Loyalty integration

**NCR Aloha, Toast:**
- Similar to Micros
- kitchen display integration

**Legacy Systems:**
- If your POS is custom/old, we build connector

### Custom APIs

**Your System:** We integrate with it

**Process:**
1. API documentation review
2. Scoping & quoting
3. Development (2-4 weeks typically)
4. Testing
5. Go-live

---

## 5. Enterprise Security

### Single Sign-On (SSO)

**Protocols:** SAML 2.0, OAuth 2.0, OpenID Connect

**Providers:**
- Microsoft Azure AD
- Google Workspace
- Okta
- OneLogin
- Custom LDAP/Active Directory

**Benefit:** Employees use company credentials, no separate PWBI password

### Role-Based Access Control (RBAC)

**Standard Roles:** 10 pre-defined roles
**Enterprise:** Unlimited custom roles

**Granular Permissions:**
- View vs Edit vs Admin
- By module (sales, inventory, labor, etc.)
- By location (Region A manager can't see Region B)
- By brand (Franchise A can't see Brand B)
- By time period (historical only, no real-time)

**Example Custom Role:** "Franchise Auditor"
- Can view all locations in their franchise
- Can't edit anything
- Can export reports
- Can't see employee salaries

### Audit Logs

**Every Action Tracked:**
- Who accessed what, when
- What they viewed, changed, deleted
- Login/logout times
- Failed login attempts (security monitoring)

**Tamper-Proof:** Logs stored in append-only database (can't be deleted/modified)

**Retention:** 7 years (compliance requirement)

**Use Cases:**
- Security investigations
- Compliance audits
- Fraud detection
- Training (who's using what features?)

### Penetration Testing

**Frequency:** Quarterly
**Scope:** Full platform (not just your tenant, but focus on your config)

**Provider:** Independent security firm (Hackerone, etc.)

**Report:** Shared with you (transparency)

**Remediation:** Critical issues fixed within 48 hours

### Data Encryption

**At Rest:** AES-256
**In Transit:** TLS 1.3

**Key Management:** AWS KMS or your own HSM (Hardware Security Module)

**Backup Encryption:** Yes (backups also encrypted)

---

## 6. Dedicated Support

### Named Customer Success Manager (CSM)

**Your CSM:**
- Single point of contact
- Knows your business
- Proactive (not reactive)
- Quarterly business reviews

**Responsibilities:**
- Onboarding coordination
- Training scheduling
- Feature adoption (ensure you use what you pay for)
- Escalation management
- Roadmap input (your voice heard)

### 24/7 Phone Support

**Standard:** Email/chat only, business hours
**Enterprise:** Phone support 24/7/365

**Hotline:** Dedicated number (not shared queue)

**Languages:** English, Indonesian, Mandarin

**SLA:** < 1 hour response for P0 (system down)

### Priority Support Queue

**Your Tickets:** Jump to front of queue

**Response Times:**
- P0 (system down): < 1 hour
- P1 (major issue): < 4 hours
- P2 (minor issue): < 24 hours
- P3 (question): < 48 hours

**After-Hours:** P0/P1 escalated to on-call engineer (paged)

### Quarterly Business Reviews (QBRs)

**Format:** 90-minute meeting (virtual or in-person)

**Attendees:**
- Your executives (CFO, CTO, COO)
- Your PWBI CSM + account team
- Optional: PWBI product/engineering

**Agenda:**
- Review last quarter (usage, value delivered)
- Discuss challenges
- Product roadmap (what's coming)
- Feature requests (prioritization)
- Renewal discussion (if applicable)

### Training & Onboarding

**Included:**
- Train-the-trainer (we train your super-users)
- Custom training materials (branded for your company)
- Unlimited webinars
- On-site training (for major rollouts)
- Certification program (PWBI Certified Analyst)

---

## Comparison: C1 vs C4

| Feature | C1 Basic SaaS | C4 Enterprise |
|---------|---------------|---------------|
| Multi-country | No | Yes (currency, tax, data residency) |
| White-label | No | Yes (fully customizable) |
| Infrastructure | Shared | Dedicated |
| Integrations | POS only | ERP, HR, Accounting, Custom |
| Security | Standard | SSO, RBAC, audit logs, pen tests |
| Support | Email, business hours | 24/7 phone + dedicated CSM |
| Customization | None | Unlimited |
| SLA | Best-effort | 99.95% guaranteed |
| Pricing | Rp 500M/year | Rp 1-10B/year |

---

## Use Cases

**Large F&B Group (100+ locations):**
- Multi-brand (different cuisines)
- Multi-country (Indonesia + regional expansion)
- Complex org structure (franchises, corporate, JVs)
- Integrated with SAP
- White-labeled portal for franchisees

**International Chain Entering Indonesia:**
- Need local compliance (tax, labor)
- Want to maintain global branding
- Integrate with HQ systems
- Dedicated infra for security/compliance

**F&B Conglomerate (1000+ locations):**
- Multiple business units
- Custom workflows per unit
- Advanced analytics (ML forecasting)
- Mission-critical (can't tolerate downtime)

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 1.0 | Comprehensive enterprise features doc | Product Team |

---

## Related

- **[[products/13-saas-enterprise/13-saas-enterprise|SaaS Enterprise Product]]** - Product overview
- **[[products/13-saas-enterprise/specifications/customization-guide|Customization Guide]]** - How to customize enterprise features
- **[[products/13-saas-enterprise/technical/deployment-guide|Deployment Guide]]** - Implementing enterprise features
- **[[products/13-saas-enterprise/technical/security-compliance|Security & Compliance]]** - Enterprise security features
- **[[products/12-saas-advanced/specifications/enterprise-plan|SaaS Advanced Plan]]** - Feature comparison
