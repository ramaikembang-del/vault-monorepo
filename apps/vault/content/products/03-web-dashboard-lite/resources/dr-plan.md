# Disaster Recovery Plan - Web Dashboard Lite
**Asset Type:** PDF Document  
**Purpose:** Technical disaster recovery procedures for Lite Dashboard hosting

---

## Document Outline

**Filename:** `dr-plan.pdf`  
**Pages:** ~8-10 pages  
**Audience:** Technical Operations, DevOps, Founder

---

## Table of Contents

1. **Executive Summary** (p1)
2. **Disaster Scenarios** (p2-3)
3. **Recovery Procedures** (p4-6)
4. **Testing Schedule** (p7)
5. **Contact Information** (p8)

---

## Content Specifications

### 1. Executive Summary

**RTO (Recovery Time Objective):** 4 hours  
**RPO (Recovery Point Objective):** 24 hours  
**Criticality:** Medium (offline-first app, cloud sync secondary)

**Business Impact:**
- User data loss: Minimal (local SQLite primary)
- Service downtime: Low impact (offline-capable)
- Reputation: Medium impact if data sync fails

---

### 2. Disaster Scenarios

#### Scenario A: Vercel Frontend Failure
- **Trigger:** Vercel platform outage, deployment failure
- **Impact:** Users can't download app, existing users unaffected
- **RTO:** 2 hours
- **Recovery:** Switch to Netlify backup deployment

#### Scenario B: Supabase Database Failure  
- **Trigger:** Database corruption, regional outage
- **Impact:** Data sync stops, users work offline (data safe locally)
- **RTO:** 4 hours
- **Recovery:** Restore from daily backup, switch to backup region

#### Scenario C: Complete Infrastructure Loss
- **Trigger:** Provider failure, account compromise
- **Impact:** All cloud services down
- **RTO:** 8 hours
- **Recovery:** Deploy to backup provider (Railway/Render)

---

### 3. Recovery Procedures

#### Procedure 1: Vercel Frontend Recovery

**Step 1:** Verify Vercel status (https://vercel-status.com)  
**Step 2:** If down >30 minutes, initiate backup deployment  
**Step 3:** Update DNS to Netlify backup (netlify-backup.clario.app)  
**Step 4:** Notify users via social media/WhatsApp broadcast  
**Estimated Time:** 2 hours

#### Procedure 2: Supabase Database Recovery

**Step 1:** Access Supabase dashboard → Backups  
**Step 2:** Download latest daily backup (.sql dump)  
**Step 3:** Create new Supabase project (if needed)  
**Step 4:** Restore database from backup  
**Step 5:** Update environment variables (DATABASE_URL)  
**Step 6:** Test data integrity (10 sample queries)  
**Step 7:** Deploy updated config to Vercel  
**Estimated Time:** 4 hours

#### Procedure 3: Complete Infrastructure Rebuild

**Prerequisites:**
- Backup Vercel project (pre-configured)
- Database backup (daily automated)
- Environment variables backup (1Password vault)

**Steps:**
1. Create Netlify account (if Vercel dead)
2. Deploy frontend from GitHub (main branch)
3. Create Railway database (if Supabase dead)
4. Restore database from backup
5. Update DNS records
6. Test critical paths
7. Notify users

**Estimated Time:** 8 hours  
**Owner:** Founder + Partner (if available)

---

### 4. Backup Strategy

**Database Backups:**
- **Frequency:** Daily (automated)
- **Retention:** 30 days
- **Location:** Supabase built-in + manual S3 backup weekly
- **Test restore:** Monthly

**Code Backups:**
- **Source:** GitHub (primary)
- **Mirror:** GitLab (automatic push)
- **Frequency:** Every commit

**Configuration Backups:**
- **Environment Variables:** 1Password vault (manual update weekly)
- **Deployment Config:** GitHub repo (vercel.json, netlify.toml)

---

### 5. Testing Schedule

| Test Type | Frequency | Last Tested | Next Test |
|-----------|-----------|-------------|-----------|
| Database Restore | Monthly | 2025-12-15 | 2026-01-15 |
| DNS Failover | Quarterly | 2025-10-01 | 2026-01-01 |
| Full DR Simulation | Annually | Never | 2026-03-01 |

---

### 6. Contact Information

**Primary Responder:**
- Name: Founder
- Phone: +62-xxx-xxx-xxxx
- Email: founder@clario.app

**Backup Responder:**
- Name: Operations Partner (if hired)
- Phone: TBD
- Email: TBD

**Vendors:**
- Vercel Support: support@vercel.com
- Supabase Discord: discord.gg/supabase
- Domain Registrar: Namecheap support

---

### 7. Post-Incident Steps

1. **Document incident** (what happened, root cause)
2. **Update DR plan** (lessons learned)
3. **Notify stakeholders** (if downtime >2 hours)
4. **Review and improve** (prevent recurrence)

---

## How to Create This PDF

**Tools:**
- Google Docs → Export as PDF
- Notion → Export as PDF
- LaTeX (for professional formatting)

**Recommended:**
1. Copy outline above to Google Docs
2. Expand each section with specific details (server IPs, credentials location, etc.)
3. Add screenshots of dashboards
4. Export as PDF
5. Store in Google Drive + local backup

---

**Last Updated:** January 9, 2026  
**Owner:** Operations Team  
**Status:** Specification ready - PDF creation pending
