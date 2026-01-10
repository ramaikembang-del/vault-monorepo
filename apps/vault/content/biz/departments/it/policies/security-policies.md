# IT Security Policies  
**Company-Wide Security Standards**

**Owner:** IT + Engineering  
**Status:** ACTIVE

---

## Access Control Policy

**Principle:** Least privilege (users get minimum access needed)

**Rules:**
- Production database: Engineering only
- Customer data: CS + Engineering only
- Financial data: Finance + Founder only

**Reviews:** Quarterly access audit (revoke unnecessary permissions)

---

## Data Classification

**Public:** Marketing materials, blog posts  
**Internal:** Strategy docs, roadmaps (team-only)  
**Confidential:** Customer data, financial records  
**Restricted:** Passwords, API keys, contracts

**Storage:**
- Public: GitHub public repos
- Internal: Notion
- Confidential: Supabase (encrypted)
- Restricted: 1Password vaults

---

##Acceptable Use Policy

**Allowed:**
- Work-related use of company systems
- Personal use during breaks (reasonable)

**Prohibited:**
- Illegal activities
- Accessing competitor systems without permission
- Sharing credentials
- Running unapproved software/services

---

## Incident Response Policy

**Severity Levels:**

**P0 - Critical:** Data breach, system compromised  
**P1 - High:** Unauthorized access attempt  
**P2 - Medium:** Phishing email reported  
**P3 - Low:** Policy violation

**Response Team:** IT Lead + Founder (P0-P1), IT Lead only (P2-P3)

**Process:** See [[biz/departments/it/sops/incident-response|Incident Response SOP]]

---

## Compliance Requirements

**Year 1:** Basic security hygiene  
**Year 2:** ISO 27001 preparation  
**Year 3:** SOC 2 Type II certification

**Audits:** Annual security audit (external firm)

---

**Status:** ACTIVE  
**Version:** 1.0  
**Last Review:** January 2026  
**Next Review:** July 2026
