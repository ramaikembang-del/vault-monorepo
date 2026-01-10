# E1: Metrics Tracking SOP

## Purpose
Daily operational procedure for monitoring E1 product health.

## Daily Tasks (10 AM)

### 1. Check Core Metrics Dashboard

**Tool:** Google Data Studio dashboard

**Check:**
- Free signups (yesterday): Target 3-4/day
- Activation rate (yesterday): Target >60%
- WAU: Target >50%
- MRR: Track week-over-week growth
- Churn (paid): Target <10%/month

**Action if Red:**
- <60% activation → Check onboarding UX
- <50% WAU → Review engagement nudges
- >15% churn → Urgent: Call churning customers

### 2. Review Health Scores

**Tool:** CRM (Google Sheets or HubSpot)

**Check:**
- # users with score <50 (at-risk)
- # paid customers with declining scores

**Action:**
- Health score drop >20pts → WhatsApp check-in
- Paid customer <55 → Call within 24h

### 3. Monitor Payment Failures

**Tool:** Midtrans dashboard

**Check:**
- Failed payments in last 24h

**Action:**
- Send automated WhatsApp: 'Payment failed, update card?'
- If no response in 48h, mark for churn

## Weekly Tasks (Monday 10 AM)

### 1. Team Metrics Review (30min)

**Attendees:** PM, Sales, CS, Marketing

**Agenda:**
1. Review 8 core KPIs vs targets (5min)
2. Identify red flags (5min)
3. Discuss action items (15min)
4. Assign owners (5min)

### 2. Cohort Analysis

**Check:**
- Week 1, 2, 3, 4 cohorts retention rates
- Are newer cohorts performing better? (learning curve)

### 3. Funnel Conversion

**Check each stage:**
- Signup → Activated: >70%?
- Activated → Engaged: >50%?
- Engaged → Trial: >15%?
- Trial → Paid: >60%?

**Identify bottleneck:** Lowest conversion stage = focus area

## Monthly Tasks (First Monday)

### 1. MRR Report

**metrics:**
- MRR start of month vs end of month
- New MRR (new customers)
- Expansion MRR (upgrades)
- Churn MRR (cancellations)
- Net MRR growth

### 2. LTV/CAC Analysis

**Calculate:**
- LTV: Avg customer lifetime × ARPU
- CAC: Marketing spend / New paying customers
- Ratio: LTV/CAC (target >3x)

### 3. Feature Usage Analysis

**Check:**
- Which metrics most used? (double down)
- Which least used? (improve or remove)
- Premium features adoption during trial

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/specifications/05-pmf-validation-plan|PMF Validation Plan]]** - Success metrics and gates
- **[[products/03-web-dashboard-lite/marketing/10-validation-gtm-checklist|GTM Checklist]]** - Launch metrics tracking
- **[[03-deployment-sop|Operations Deployment]]** - Operational procedures

---

**DRI:** Product Manager
**Backup:** CS Manager
**Tools:** Data Studio, Midtrans, CRM, App Analytics
