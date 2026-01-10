# Service Level Agreement (SLA) Definitions - E1 Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite (Freemium SaaS)
**Company:** Power BI FnB Growth (Indonesia)
**Effective Date:** 2025-01-15 (Week 3 Launch)
**Last Updated:** 2025-12-28

---

## 1. SLA Overview

### 1.1 Purpose

This document defines the Service Level Agreement (SLA) for E1 Web Dashboard Lite, specifying:
- Uptime commitments by tier (Free, Starter, Pro)
- Support response and resolution times
- Performance metrics
- SLA credit calculations
- Incident reporting procedures
- Exclusions and limitations

**Binding Agreement:**
- This SLA is part of the [[products/03-web-dashboard-lite/legal/freemium-terms|Terms and Conditions]]
- Applies only to **paid tiers** (Starter and Pro)
- Free tier has **no SLA** (best effort only)

### 1.2 SLA Tiers Summary

| Tier | Uptime | Support Response | Support Resolution | Monthly Credit (If SLA Missed) |
|------|--------|-----------------|-------------------|-------------------------------|
| **Free** | No SLA | No support | N/A | None |
| **Starter** | 99.0% | 24-48 hours | 72 hours | 10% subscription fee |
| **Pro** | 99.5% | 12-24 hours | 48 hours | 25% subscription fee |

**Measurement Period:** Calendar month (1st to last day of month, WIB timezone)

---

## 2. Uptime SLA

### 2.1 Uptime Definitions

**Uptime:**
- Percentage of time the Service is available and functioning properly during a calendar month
- Calculation: `Uptime % = ((Total Minutes in Month - Downtime Minutes) / Total Minutes in Month) × 100`

**Downtime:**
- Service completely unavailable (dashboard does not load, data sync fails)
- Affects **cloud-synced features only** (Free tier local-only = not subject to SLA)
- Measured from first user-reported incident until Service restoration confirmed

**NOT Downtime:**
- Slow performance (dashboard loads, but takes >10 seconds) - see Section 3 Performance Metrics
- Partial functionality (e.g., export feature broken, but dashboard loads)
- Planned maintenance (announced 48+ hours in advance) - see Section 2.5
- User-side issues (internet connection, device failure, browser incompatibility)

### 2.2 Uptime Commitments by Tier

#### 2.2.1 Free Tier (No SLA)
- **Uptime Target:** Best effort (no guarantee)
- **Downtime Allowance:** Unlimited
- **Compensation:** None
- **User Expectation:** Service may be unavailable without notice

#### 2.2.2 Starter Tier (99.0% Uptime)
- **Uptime Target:** 99.0%
- **Downtime Allowance:** 7.2 hours per month (30-day month = 432 minutes)
- **Compensation:** 10% monthly subscription credit if uptime <99%
- **Measurement:** Cloud sync and web dashboard availability

**Example Calculation (30-day month):**
- Total minutes: 30 days × 24 hours × 60 minutes = 43,200 minutes
- Allowed downtime: 43,200 × 1% = 432 minutes (7.2 hours)
- If downtime = 500 minutes (8.3 hours) → SLA missed → 10% credit

#### 2.2.3 Pro Tier (99.5% Uptime)
- **Uptime Target:** 99.5%
- **Downtime Allowance:** 3.6 hours per month (30-day month = 216 minutes)
- **Compensation:** 25% monthly subscription credit if uptime <99.5%
- **Measurement:** Cloud sync, web dashboard, and multi-user features

**Example Calculation (30-day month):**
- Total minutes: 43,200 minutes
- Allowed downtime: 43,200 × 0.5% = 216 minutes (3.6 hours)
- If downtime = 300 minutes (5 hours) → SLA missed → 25% credit

### 2.3 Uptime Monitoring

**How We Monitor:**
- Automated health checks every 1 minute (Supabase status, dashboard load time)
- Third-party monitoring: UptimeRobot (independent verification)
- User-reported incidents via support@powerbifnb.com

**Public Status Page:**
- URL: status.powerbifnb.com (live uptime status, incident history)
- Updated in real-time during incidents
- 90-day uptime history visible to all users

**Incident Severity Levels:**

| Severity | Definition | Response Time | Example |
|----------|------------|---------------|---------|
| **P1 - Critical** | Service completely down | 30 minutes | "Dashboard won't load for any user" |
| **P2 - High** | Major feature broken | 2 hours | "Data sync failing for all users" |
| **P3 - Medium** | Minor feature broken | 24 hours | "Export to PDF not working" |
| **P4 - Low** | Cosmetic issue | 72 hours | "Button text misaligned" |

### 2.4 SLA Credit Calculation

**Credit Formula:**

```
SLA Credit = Monthly Subscription Fee × Credit Percentage

Starter (99.0% SLA):
- Uptime ≥99.0% → No credit
- Uptime <99.0% → 10% credit (Rp 20,000 for Rp 200K subscription)

Pro (99.5% SLA):
- Uptime ≥99.5% → No credit
- Uptime <99.5% → 25% credit (Rp 75,000 for Rp 300K subscription)
```

**Maximum Credit:** 100% of monthly subscription (if Service down for entire month)

**Credit Application:**
- Applied as **account credit** to next month's bill (not cash refund)
- If subscription cancelled, credit applied to final invoice (or refunded if no future charges)
- Multiple incidents in same month: Credits stack (e.g., 2 P1 incidents = 20% credit for Starter)

**How to Claim Credit:**
1. Email support@powerbifnb.com within 7 days of incident
2. Subject: "SLA Credit Request - [Date of Incident]"
3. Provide: Account email, incident date/time, description
4. We respond within 3 business days with credit decision

**Credit Decision:**
- We verify downtime via server logs and monitoring tools
- If downtime confirmed → credit applied to account within 7 days
- If dispute → escalate to legal@powerbifnb.com

### 2.5 Planned Maintenance (Excluded from SLA)

**Maintenance Windows:**
- **Frequency:** Monthly (1st Sunday of each month)
- **Time:** 2:00 AM - 6:00 AM WIB (low-traffic hours)
- **Duration:** Maximum 4 hours
- **Advance Notice:** 48 hours (email + in-app notification)

**Excluded from Downtime Calculation:**
- Planned maintenance announced ≥48 hours in advance
- Emergency security patches (announced ASAP, but may not have 48-hour notice)

**User Impact:**
- Free tier: Service may be unavailable during maintenance (no notice required)
- Starter/Pro: Cloud sync paused, local dashboard still works offline

**Emergency Maintenance:**
- Critical security patches may require immediate maintenance
- Announced as soon as possible (may not have 48-hour notice)
- If downtime exceeds SLA allowance → SLA credit applies

---

## 3. Performance Metrics

### 3.1 Dashboard Load Time

**Target:**
- Initial dashboard load: <3 seconds (desktop app)
- Page navigation: <1 second
- Data refresh: <2 seconds

**Measurement:**
- 95th percentile (95% of users experience these speeds or faster)
- Measured from user device (not just server response time)

**No SLA Penalty:**
- Performance metrics are **targets**, not SLA commitments
- Slow performance (>3 seconds) does NOT count as downtime
- User can report slow performance → we investigate and optimize

**User-Side Factors:**
- Internet speed (minimum 1 Mbps recommended)
- Device performance (minimum: Windows 10, macOS 10.14, 4 GB RAM)
- POS data volume (larger datasets = slower load times)

### 3.2 Data Sync Latency (Starter/Pro Only)

**Target:**
- Cloud sync: <30 seconds from local save to cloud update
- Multi-device sync: <1 minute (data appears on other devices)

**Measurement:**
- Average sync time over 24-hour period
- Excludes user internet connection issues

**No SLA Penalty:** Slow sync (>30 seconds) does NOT count as downtime, unless sync completely fails for >1 hour

---

## 4. Support SLA

### 4.1 Support Channels by Tier

| Tier | Support Channel | Hours | Language |
|------|----------------|-------|----------|
| **Free** | Community forum only | 24/7 (peer support) | Bahasa Indonesia, English |
| **Starter** | WhatsApp + Email | Mon-Fri, 9 AM - 5 PM WIB | Bahasa Indonesia, English |
| **Pro** | WhatsApp + Email (priority) | Mon-Sat, 8 AM - 8 PM WIB | Bahasa Indonesia, English |

**After-Hours Support (Pro Only):**
- P1 Critical incidents: 24/7 emergency response via WhatsApp
- P2-P4 incidents: Next business day response

### 4.2 Support Response Time

**Response Time = Time from ticket submission to first human response**

| Tier | Severity | Response Time | Business Hours |
|------|----------|---------------|----------------|
| **Free** | All | No guarantee | N/A (community forum) |
| **Starter** | P1 Critical | 4 hours | Mon-Fri, 9 AM - 5 PM WIB |
| **Starter** | P2 High | 12 hours | Mon-Fri, 9 AM - 5 PM WIB |
| **Starter** | P3-P4 | 24-48 hours | Mon-Fri, 9 AM - 5 PM WIB |
| **Pro** | P1 Critical | 1 hour (24/7) | 24/7 for P1, Mon-Sat 8 AM - 8 PM for others |
| **Pro** | P2 High | 4 hours | Mon-Sat, 8 AM - 8 PM WIB |
| **Pro** | P3-P4 | 12-24 hours | Mon-Sat, 8 AM - 8 PM WIB |

**Business Hours Calculation:**
- Ticket submitted Friday 6 PM → Response due Monday 9 AM + response time
- Example: Starter P2 ticket Friday 6 PM → Response due Monday 9 PM (12 hours business time)

**Holiday Schedule:**
- Indonesia public holidays: Response time extended by 1 business day
- Advanced notice of holiday schedule via email

### 4.3 Support Resolution Time

**Resolution Time = Time from ticket submission to issue resolved or workaround provided**

| Tier | Severity | Resolution Target | SLA Penalty if Missed |
|------|----------|-------------------|----------------------|
| **Starter** | P1 Critical | 24 hours | 10% credit |
| **Starter** | P2 High | 72 hours | 5% credit |
| **Starter** | P3-P4 | 7 days | No penalty (best effort) |
| **Pro** | P1 Critical | 12 hours | 25% credit |
| **Pro** | P2 High | 48 hours | 10% credit |
| **Pro** | P3-P4 | 5 days | 5% credit |

**Resolution Definitions:**
- **Resolved:** Issue completely fixed
- **Workaround:** Temporary solution provided (permanent fix in development)
- **Cannot Reproduce:** Issue not reproducible after 3 attempts with user collaboration

**SLA Credit for Support Delays:**
- Same process as uptime credits (Section 2.4)
- Credits stack: Multiple slow tickets in same month = cumulative credit
- Maximum credit: 100% of monthly subscription

### 4.4 Support Scope (What's Covered)

**Covered (Part of SLA):**
- Product usage questions ("How do I filter by date range?")
- Bug reports ("Dashboard not loading", "Data sync failing")
- Billing issues ("Payment failed but I was charged")
- Account access issues ("Forgot password", "Cannot login")

**Not Covered (No SLA):**
- Power BI training (E1 is standalone, not Power BI support)
- POS system configuration (we integrate with POS, not configure it)
- Custom development ("Can you add a feature just for me?")
- Data entry errors ("I entered wrong sales data, can you fix it?")
- Third-party issues (Midtrans payment issues, ISP downtime)

**Scope Determination:**
- If unclear, we'll respond and clarify scope (counted as response, but not resolution)
- Out-of-scope requests redirected to appropriate resource (e.g., Power BI community)

---

## 5. Incident Management

### 5.1 Incident Reporting

**How to Report Incident:**

1. **Email:** support@powerbifnb.com
 - Subject: "[Severity] - [Brief Description]"
 - Example: "P1 - Dashboard not loading for all users"

2. **WhatsApp:** [Indonesia Number - TBD] (Starter/Pro only)
 - Message format: "P1: Dashboard down"

3. **Status Page:** Check status.powerbifnb.com first (we may already be aware)

**Information to Provide:**
- Account email
- Tier (Free/Starter/Pro)
- Description of issue
- Steps to reproduce (if applicable)
- Screenshots or error messages
- When issue started

### 5.2 Incident Response Process

**Step 1: Acknowledgment (Response Time SLA)**
- Automated email: "We received your ticket #12345"
- Human response within SLA response time (Section 4.2)

**Step 2: Investigation**
- Engineer assigned to ticket
- Diagnosis and root cause analysis
- Regular updates every 4 hours for P1/P2, 24 hours for P3/P4

**Step 3: Resolution**
- Fix deployed or workaround provided
- User notified and asked to confirm resolution
- If not resolved, return to Step 2

**Step 4: Post-Incident Review (P1/P2 Only)**
- Root cause analysis report published within 7 days
- Action items to prevent recurrence
- Shared on status.powerbifnb.com

### 5.3 Communication During Incidents

**Update Frequency:**
- **P1 Critical:** Every 1 hour until resolved
- **P2 High:** Every 4 hours until resolved
- **P3-P4:** Every 24 hours or upon significant progress

**Communication Channels:**
- Email to affected users
- Status page update (status.powerbifnb.com)
- In-app notification (if Service available)

---

## 6. SLA Exclusions

### 6.1 Not Covered by SLA (No Credit)

**User-Side Issues:**
- Internet connection problems (ISP downtime, slow Wi-Fi)
- Device hardware failure (computer crash, disk failure)
- Browser incompatibility (outdated browser, unsupported browser)
- User error (incorrect login, accidental data deletion)

**Third-Party Failures:**
- Supabase downtime (cloud database provider)
- Midtrans payment gateway issues
- Cloudflare CDN failures
- POS system failures (your POS, not our dashboard)

**Force Majeure:**
- Natural disasters (earthquakes, floods, tsunamis)
- Pandemics and government-mandated shutdowns
- War, terrorism, civil unrest
- Internet backbone failures (undersea cable cuts affecting Indonesia)
- Power grid failures

**Misuse and Abuse:**
- DDoS attacks targeting your account
- Violation of Terms of Service (e.g., sharing login credentials)
- Running unauthorized scripts or bots

**Planned Maintenance:**
- Announced ≥48 hours in advance
- Scheduled during low-traffic hours (2 AM - 6 AM WIB)

### 6.2 SLA Cap (Maximum Liability)

**Monthly Credit Cap:**
- Maximum SLA credit = 100% of monthly subscription fee
- Multiple incidents in same month: Credits stack, but capped at 100%
- Example: Starter subscription (Rp 200K) has 10 P1 incidents (10 × 10% = 100%) → Maximum credit Rp 200K

**Limitation of Liability:**
- SLA credits are your **sole remedy** for SLA violations
- No additional damages (see [[products/03-web-dashboard-lite/legal/freemium-terms|Terms and Conditions]] Section 8.3)

---

## 7. SLA Reporting and Transparency

### 7.1 Monthly SLA Report

**Availability:**
- Published on status.powerbifnb.com by 5th of following month
- Example: January SLA report published by February 5

**Metrics Reported:**
- Actual uptime percentage (Free, Starter, Pro)
- Number of incidents by severity (P1, P2, P3, P4)
- Average support response time
- Average support resolution time
- SLA credits issued

**User-Specific Report:**
- Request via support@powerbifnb.com
- Shows your tickets, response/resolution times, credits applied

### 7.2 SLA Compliance History

**Historical Performance (Example - Real Data TBD):**

| Month | Starter Uptime | Pro Uptime | Starter SLA Met? | Pro SLA Met? | Credits Issued |
|-------|---------------|------------|------------------|--------------|----------------|
| Jan 2025 | 99.8% | 99.9% | Yes (>99%) | Yes (>99.5%) | 0 |
| Feb 2025 | 98.5% | 99.3% | No (<99%) | No (<99.5%) | 2 (10% + 25%) |
| Mar 2025 | 99.2% | 99.6% | Yes | Yes | 0 |

**Transparency Commitment:**
- All incidents publicly logged (status page)
- No hiding or manipulating uptime data
- Independent verification via UptimeRobot

---

## 8. SLA Review and Updates

### 8.1 Annual SLA Review

**Review Schedule:**
- Annually on January 1 (beginning of calendar year)
- Review actual performance vs commitments
- Adjust targets if necessary (with 90 days' notice)

**Potential Changes:**
- Increase uptime targets (e.g., Starter 99.0% → 99.5%)
- Improve support response times
- Add new metrics (e.g., API uptime for future integrations)

**User Notification:**
- Email 90 days before SLA changes take effect
- Grandfathering: Existing subscribers keep current SLA for 12 months

### 8.2 Emergency SLA Suspension

**Extraordinary Circumstances:**
- National emergency (e.g., pandemic, natural disaster)
- Indonesia internet shutdown (government-mandated)
- War or terrorism affecting infrastructure

**Process:**
- SLA temporarily suspended with immediate notice
- Regular updates on restoration timeline
- SLA resumes when normal operations restored
- No SLA credits during suspension period

---

## 9. Definitions and Terminology

### 9.1 Key Terms

**Business Day:**
- Monday-Friday, excluding Indonesia public holidays
- Business hours: 9 AM - 5 PM WIB (Starter), 8 AM - 8 PM WIB (Pro)

**Downtime:**
- Service completely unavailable (dashboard won't load, data sync fails)
- Does NOT include slow performance or partial functionality

**Incident:**
- Unplanned interruption or degradation of Service
- Severity: P1 (Critical), P2 (High), P3 (Medium), P4 (Low)

**Resolution:**
- Issue completely fixed OR workaround provided
- User confirms Service restored to normal

**Response Time:**
- Time from ticket submission to first human response
- Automated acknowledgment does NOT count as response

**SLA Credit:**
- Account credit applied to next month's bill (not cash refund)
- Calculated as percentage of monthly subscription fee

**Uptime:**
- Percentage of time Service is available and functioning properly
- Measured over calendar month (1st to last day)

### 9.2 Severity Levels (Detailed)

**P1 - Critical:**
- Service completely down (no users can access dashboard)
- Data loss or corruption
- Security breach or data exposure
- Payment processing failure affecting all users

**P2 - High:**
- Major feature broken (e.g., data sync failing for all users)
- Significant performance degradation (dashboard load time >30 seconds)
- Multi-user access broken (Pro tier)

**P3 - Medium:**
- Minor feature broken (e.g., export to PDF not working)
- Affects subset of users (not everyone)
- Moderate performance issues

**P4 - Low:**
- Cosmetic issues (UI misalignment, typos)
- Feature enhancement requests
- Documentation errors

---

## 10. Contact and Escalation

### 10.1 Support Contact

**General Support:**
- Email: support@powerbifnb.com
- WhatsApp: [Indonesia Number - TBD] (Starter/Pro only)
- Response time: Per Section 4.2

**SLA Credit Claims:**
- Email: support@powerbifnb.com with subject "SLA Credit Request"
- Include: Account email, incident date/time, description
- Response: 3 business days

### 10.2 Escalation Path

**If Not Satisfied with Support:**

**Level 1:** Support Team (support@powerbifnb.com)
- Initial contact, ticket assignment, resolution

**Level 2:** Support Manager
- Escalate via email: support-manager@powerbifnb.com
- For: Unresolved tickets after 7 days, SLA disputes

**Level 3:** Legal/Compliance
- Email: legal@powerbifnb.com
- For: Formal complaints, legal disputes, data protection issues

**External:** Indonesia PDP Authority (for privacy complaints)

---

## 11. Summary Table

### 11.1 SLA Quick Reference

| Metric | Free | Starter | Pro |
|--------|------|---------|-----|
| **Uptime** | No SLA | 99.0% (7.2h down/month) | 99.5% (3.6h down/month) |
| **Support Response (P1)** | No support | 4 hours | 1 hour (24/7) |
| **Support Response (P2)** | No support | 12 hours | 4 hours |
| **Support Response (P3-P4)** | No support | 24-48 hours | 12-24 hours |
| **Support Resolution (P1)** | No support | 24 hours | 12 hours |
| **Support Resolution (P2)** | No support | 72 hours | 48 hours |
| **SLA Credit (Uptime Miss)** | None | 10% | 25% |
| **SLA Credit (Support Miss)** | None | 5-10% | 5-25% |
| **Business Hours** | N/A | Mon-Fri 9 AM-5 PM | Mon-Sat 8 AM-8 PM |
| **After-Hours (P1)** | No | No | Yes (24/7) |

### 11.2 When to Claim SLA Credit

**You CAN Claim If:**
- Service downtime exceeds allowance (Starter: >7.2h/month, Pro: >3.6h/month)
- Support response time exceeds SLA (e.g., P1 ticket, no response in 4h for Starter)
- Support resolution time exceeds SLA (e.g., P1 ticket, not resolved in 24h for Starter)

**You CANNOT Claim If:**
- Downtime caused by user-side issues (internet, device, browser)
- Downtime caused by third parties (Supabase, Midtrans, ISP)
- Downtime during planned maintenance (announced ≥48 hours)
- Downtime due to force majeure (natural disasters, government shutdowns)
- Slow performance (does not count as downtime unless Service completely unavailable)

---

**Document ID:** E1-SLA-v1.0
**Last Updated:** 2025-12-28
**Effective Date:** 2025-01-15 (Week 3 Launch)

**Related Documents:**
- [[products/03-web-dashboard-lite/legal/freemium-terms|freemium-terms.md]] - Service Terms and Conditions (Section 5)
- [[products/01-power-bi-template/legal/02-privacy-policy|privacy-policy.md]] - Data privacy and security
- [[products/03-web-dashboard-lite/legal/cancellation-policy|cancellation-policy.md]] - Cancellation and refund process
- [[products/03-web-dashboard-lite/03-web-dashboard-lite|../README.md]] - E1 product overview

