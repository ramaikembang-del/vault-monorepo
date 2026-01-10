# Support Playbook - Customer Success Operations

**Product:** Product 01 - Power BI Template
**Department:** Customer Success
**Owner:** CS Lead
**Last Updated:** January 8, 2026
**Status:** ACTIVE PLAYBOOK

---

## Executive Summary

### Purpose

This playbook provides standardized processes for Customer Success team to handle support requests, onboard customers, and drive product adoption.

### Support Tiers by Product Tier

| Customer Tier | Support Duration | Channels | Response SLA | CS Effort/Customer |
|--------------|------------------|----------|--------------|-------------------|
| **Tier 1** | 14 days | Email only | <24 hours | <1 hour total |
| **Tier 2** | 90 days | Email + WhatsApp | <4 hours | 2-3 hours total |
| **Tier 3** | Unlimited (Product 02) | Email + WhatsApp + Calls | <2 hours | 4-6 hours/month |

---

## Part 1: Support Request Handling

### 1.1 Ticket Categorization

**Category 1: Setup Issues (40% of tickets)**

**Examples:**
- "Can't install Power BI Desktop"
- "Data source error when refreshing"
- "Excel template not loading"

**Priority:** High (blocking customer from using product)

**SLA:**
- Tier 1: <24 hours
- Tier 2-3: <4 hours

**Resolution Process:** See Section 2.1

---

**Category 2: Data Entry Questions (30% of tickets)**

**Examples:**
- "Where do I enter food cost data?"
- "What format for dates?"
- "How to add new menu item?"

**Priority:** Medium (not blocking, but slowing adoption)

**SLA:**
- Tier 1: <48 hours
- Tier 2-3: <24 hours

**Resolution Process:** Point to User Guide + video tutorial

---

**Category 3: Analysis Questions (20% of tickets)**

**Examples:**
- "What does food cost % mean?"
- "How to interpret menu engineering matrix?"
- "My food cost is 35%, is that normal?"

**Priority:** Low (education, not urgent)

**SLA:**
- All tiers: <48 hours

**Resolution Process:** Educational response + upsell opportunity (if asking advanced questions, might benefit from tier upgrade)

---

**Category 4: Feature Requests (10% of tickets)**

**Examples:**
- "Can you add delivery analytics?"
- "I want to track catering orders separately"

**Priority:** Low (product feedback, not support)

**SLA:** <72 hours (acknowledge only)

**Resolution Process:**
1. Log in product feedback tool
2. Reply: "Thanks for suggestion, logged for product team review"
3. Don't promise timeline (avoid setting expectations)

---

### 1.2 Response Templates

**Template 1: Setup Issue - Data Source Error**

```
Subject: RE: Data source error

Hi [Name],

This error happens when Power BI can't find your Excel files. Here's how to fix:

1. Open Power BI Desktop
2. Click "Transform Data" in top ribbon
3. Click "Data Source Settings"
4. Click "Change Source"
5. Browse to where your Excel files are saved (should be C:\Power_BI_Clario\Excel_Templates)
6. Click OK, then "Close & Apply"

This should fix it. If you still see the error, please:
- Screenshot the error message
- Reply with screenshot

I'll help you resolve it.

Thanks!
[Your Name]
Customer Success Team
```

---

**Template 2: Data Entry Question**

```
Subject: RE: How to enter food cost data?

Hi [Name],

Food cost data goes in Daily_Sales.xlsx template:

1. Open C:\Power_BI_Clario\Excel_Templates\Daily_Sales.xlsx
2. Column D = "Food Cost"
3. Enter FULL amount (e.g., Rp 1,500,000 not "1.5")
4. One row per day

Quick video (3 min): [Link to Excel Template Tutorial]

User Guide (page 14): C:\Power_BI_Clario\Guides\User_Guide.pdf

Let me know if you need more help!

[Your Name]
```

---

**Template 3: Analysis Question + Upsell**

```
Subject: RE: Is 35% food cost normal?

Hi [Name],

Great question! 35% food cost is HIGH for most F&B businesses:

- Industry standard: 28-32%
- Your 35% means you're losing 3-7% margin
- On Rp 100M annual revenue, that's Rp 3-7M/year lost

To investigate WHY:
- Tier 1: Check "Top Items" page -> Which items have highest food cost%?
- Tier 2+: Use Menu Engineering Matrix -> Find "Dogs" (low sales, high cost)

By the way - you're asking great menu engineering questions! Have you considered Tier 2? It includes:
- Menu Engineering Matrix (profitability analysis)
- Item-level food cost tracking
- Recipe cost calculator

Upgrade: Rp 4M (you get credit for Tier 1 purchase)

Interested? Let me know!

[Your Name]
```

---

## Part 2: Troubleshooting Guide

### 2.1 Top 10 Issues & Fixes

**Issue 1: "Data source error" (30% of tickets)**

**Cause:** Excel files moved or renamed after setup

**Fix:**
1. Transform Data -> Data Source Settings
2. Change Source -> Browse to new Excel location
3. OK -> Close & Apply

**Prevention:** User Guide emphasizes "don't move files"

**Time to resolve:** 5 minutes (screenshot + reply)

---

**Issue 2: "Food cost % shows 150%" (20% of tickets)**

**Cause:** Data entry error (units wrong)

**Diagnosis:**
- Ask: "What's your daily revenue?"
- If they say "1500" -> That's the error (should be 1,500,000)

**Fix:**
1. Open Daily_Sales.xlsx
2. Check Revenue column -> Should be 7-8 digits
3. Correct amounts (add zeros)
4. Refresh dashboard

**Time to resolve:** 10 minutes (explain + verify fix)

---

**Issue 3: "Dashboard blank, no data" (15% of tickets)**

**Cause 1:** No data entered in Excel
**Fix 1:** Fill at least 7 days of data

**Cause 2:** Date format wrong
**Fix 2:** Excel -> Format Cells -> Date (DD/MM/YYYY)

**Cause 3:** Date filter too narrow
**Fix 3:** Dashboard -> Right sidebar -> Date filter -> "Last 30 days"

**Time to resolve:** 5-15 minutes (depends on root cause)

---

**Issue 4: "Can't install Power BI Desktop" (10% of tickets)**

**Cause:** Windows 7/8 (not supported)

**Diagnosis:** Ask "What Windows version?"

**Fix:**
- Windows 10+: Send install link (https://powerbi.microsoft.com/desktop)
- Windows 7/8: "Power BI requires Windows 10+. You'll need to upgrade OS or use different computer."

**No fix (unsupported OS):** Offer refund if within 30-day guarantee

**Time to resolve:** 5 minutes (quick diagnosis)

---

**Issue 5: "Forgot to refresh, dashboard shows old data" (5% of tickets)**

**Not a bug:** User education issue

**Fix:**
- Remind: "Always click Refresh button after editing Excel"
- Send 30-second Loom video showing Refresh process

**Time to resolve:** 2 minutes (template response)

---

### 2.2 Escalation Criteria

**Escalate to Product/Engineering if:**
- Bug affecting multiple customers (3+ tickets on same issue)
- Dashboard crashes consistently (not user error)
- Data calculation error (e.g., food cost formula wrong)

**Escalation Process:**
1. Reproduce issue yourself (don't escalate without verification)
2. Create bug ticket with:
 - Steps to reproduce
 - Expected vs actual result
 - Customer impact (how many affected)
3. Tag Engineering Lead in ticket
4. Update customer: "We've found a bug, engineering team investigating, ETA [X days]"

---

## Part 3: Onboarding Workflows

### 3.1 Tier 1 Onboarding (Self-Service, <1 Hour CS Time)

**Timeline:** 14 days (purchase to fully onboarded)

**Day 1 (Purchase):**
- Auto-email: Welcome email with download links
- Auto-email: Setup guide PDF
- CS Action: None (automated)

**Day 3 (Check-in):**
- Auto-email: "Have you downloaded files yet?"
- CS Action: None (automated)

**Day 7 (Mid-Point):**
- Manual email: "How's setup going? Any questions?"
- CS Action: Send email (5 min), track reply

**Day 14 (End of Support):**
- Manual email: "Support period ending. Need anything before it expires?"
- CS Action: Upsell Product 02 if customer is active user

**Total CS Time:** 15 minutes (2 manual emails @ 5-7 min each)

---

### 3.2 Tier 2 Onboarding (Guided, 2-3 Hours CS Time)

**Timeline:** 30 days (purchase to fully adopted)

**Day 1 (Purchase):**
- Auto-email: Welcome + download links
- Manual action: Schedule 1:1 setup call (30 min, within 48 hours)

**Day 2-3 (Setup Call):**
- 1:1 Zoom call (2 hours):
 - Screen share
 - Guide through Excel template setup
 - First refresh together
 - Walk through dashboard pages
 - Answer questions

**Day 7 (Follow-up):**
- Manual email: "How's it going? Any issues?"
- CS Action: 5 min

**Day 30 (Check-in):**
- Manual call: 15-min call
 - "Have you achieved ROI yet?" (capture success story)
 - "Any features not using?" (increase adoption)
 - "Know anyone who needs this?" (referral ask)

**Total CS Time:** 2.5-3 hours (2h call + 30 min follow-ups)

---

### 3.3 Tier 3 Onboarding (White-Glove, 4-6 Hours CS Time)

**Timeline:** 30 days (purchase to strategic partnership)

**Day 1 (Purchase):**
- Kickoff call (60 min):
 - Understand business (outlets, revenue, goals)
 - Custom setup plan
 - Set expectations

**Day 2-5 (We Do Setup):**
- CS team sets up:
 - Excel templates with customer's POS export format
 - Dashboard with customer's branding (white-label)
 - Sample data import
 - Test refresh

**Day 6 (Delivery Call):**
- 90-min call:
 - Present completed dashboard
 - Train customer's team (owner + GM + accountant)
 - Answer questions
 - Schedule monthly check-ins

**Day 30, 60, 90 (Monthly Check-ins):**
- 30-min call each month:
 - Review metrics
 - Identify insights
 - Action planning
 - Upsell Product 02 (if not already subscribed)

**Total CS Time:** 5-6 hours (setup + calls)

---

## Part 4: CS Team Workflows

### 4.1 Daily Workflow (CS Rep)

**9:00 AM - Check Inbox (30 min)**
- Review new tickets (overnight)
- Categorize by priority (High/Medium/Low)
- Assign to self or team

**9:30 AM - Respond to High Priority (1 hour)**
- Handle setup issues, data source errors
- Aim: Close 3-5 tickets before lunch

**11:00 AM - Scheduled Calls (2 hours)**
- Tier 2 setup calls (2 hours each)
- Tier 3 check-ins (30 min each)

**1:00 PM - Lunch**

**2:00 PM - Medium/Low Priority Tickets (2 hours)**
- Data entry questions
- Analysis questions
- Feature requests

**4:00 PM - Proactive Outreach (1 hour)**
- Day 7 check-ins (Tier 1-2 customers)
- Day 30 check-ins (Tier 3 customers)
- Health score updates (flag at-risk customers)

**5:00 PM - Admin & Wrap-up (30 min)**
- Update CRM (log interactions)
- Update health scores
- Plan tomorrow's calls

---

### 4.2 Weekly Workflow (CS Team)

**Monday Morning (30 min):**
- Team sync: Review health scores
- Assign at-risk customers (from health scoring framework)
- Plan week's interventions

**Friday Afternoon (30 min):**
- Team sync: Week review
- Report to leadership: # tickets closed, # customers onboarded, NPS
- Identify trends (e.g., "10 tickets on same issue = product bug?")

---

## Part 5: Success Metrics

### 5.1 Track These KPIs

| Metric | Target | Formula |
|--------|--------|---------|
| **First Response Time** | <24h (T1), <4h (T2-3) | Time from ticket creation to first CS reply |
| **Resolution Time** | <48h avg | Time from ticket creation to closure |
| **Customer Satisfaction (CSAT)** | >4.5/5 | Post-ticket survey: "How satisfied with support?" |
| **Onboarding Success Rate** | >90% | Customers who complete setup / total customers |
| **Ticket Volume** | <0.5 tickets/customer/month | Total tickets / customer count |

---

### 5.2 Weekly CS Report

```
CS WEEKLY REPORT - Week of [Date]

TICKETS:
- New tickets: [X]
- Closed tickets: [Y]
- Open tickets: [Z]
- Avg resolution time: [A] hours

ONBOARDING:
- New customers: [B]
- Onboarded (setup complete): [C]
- Setup success rate: [C/B × 100]%

CUSTOMER HEALTH:
- At-Risk: [D] customers
- Critical: [E] customers
- Interventions: [F] emails sent, [G] calls made

INSIGHTS:
- [Insight 1: e.g., "10 tickets on 'data source error' - need better setup guide"]
- [Insight 2]
```

---

## Part 6: CS Training Materials

### 6.1 New CS Rep Onboarding (Week 1)

**Day 1: Product Training**
- Install product yourself (Tier 1, 2, 3)
- Fill Excel templates with sample data
- Refresh dashboard, explore all pages
- Complete User Guide

**Day 2: Support Tools**
- HubSpot training (ticketing system)
- Response template library
- Health scoring framework

**Day 3: Shadow**
- Shadow senior CS rep (4 hours)
- Observe ticket responses
- Listen to Tier 2 setup call

**Day 4: Mock Tickets**
- Practice with 5-10 mock tickets
- Senior CS reviews responses
- Feedback session

**Day 5: First Real Tickets**
- Handle 3-5 low-priority tickets (supervised)
- Daily check-in with CS lead

**Week 2+:** Gradually ramp to full ticket load

---

**Document Status:** ACTIVE PLAYBOOK
**Owner:** CS Lead
**Last Review:** January 8, 2026
**Next Review:** Monthly

**Related Documents:**
- [[products/01-power-bi-template/customer-success/02-health-scoring|Health Scoring Framework]]
- [[products/01-power-bi-template/customer-success/onboarding-playbook|Onboarding Playbook]]
- [[products/01-power-bi-template/customer-success/03-user-guide|User Guide]]
