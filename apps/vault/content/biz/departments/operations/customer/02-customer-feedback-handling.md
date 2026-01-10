# Customer Feedback Handling - SOP

**Owner:** Customer Success Manager
**Frequency:** Continuous
**Approver:** VP Customer Success
**Last Updated:** December 2025

---

## Purpose

Systematically collect, analyze, and act on customer feedback to drive product improvements and customer satisfaction.

## Scope

**Applies to:** All customer feedback
**Roles:** Customer Success, Support, Product, Engineering

---

## Feedback Channels

### 1. In-App Feedback Widget

**Where:** All products (A1, R1, E1, R2 modules)
**Type:** Bug reports, feature requests, general feedback
**Response:** Within 24 hours

**Auto-routing:**
- Bug reports → Support ticket
- Feature requests → Product backlog
- Positive feedback → Success team (celebrate!)

### 2. NPS Surveys (Net Promoter Score)

**Frequency:** Quarterly
**Sent to:** All active users
**Question:** "How likely are you to recommend PWBI to a colleague?" (0-10)

**Scoring:**
- 9-10: Promoters
- 7-8: Passives - 0-6: Detractors

**Follow-up:** "What's the primary reason for your score?"

### 3. Customer Success Check-ins

**Frequency:** Weekly (first 90 days), Monthly (ongoing)
**Format:** 1:1 calls
**Captured:** In CRM notes

### 4. Support Ticket Feedback

**Timing:** After ticket resolution
**Question:** "How would you rate your support experience?" (1-5 stars)
**Follow-up:** If < 4 stars, "What could we have done better?"

### 5. Product Usage Analytics

**Silent feedback:**
- Feature adoption rates
- Time spent in product
- Drop-off points
- Error rates

---

## Feedback Processing Workflow

### Step 1: Collect & Categorize (Daily)

**CS Team reviews all feedback:**
```
FEEDBACK CATEGORIZATION

Type:
 Bug report
 Feature request
 Usability issue
 Performance complaint
 Pricing/commercial
 Praise/positive
 General question

Priority:
 Critical (blocking work)
 High (major pain point)
 Medium (nice to have)
 Low (minor)

Product:
 A1
 R1
 E1
 R2a-f
 Platform/General
```

### Step 2: Immediate Action (Same Day)

**Critical Issues:**
- Create P0/P1 support ticket
- Notify Engineering immediately
- Update customer on progress

**Feature Requests:**
- Log in product backlog (Notion/JIRA)
- Tag by customer, priority, product
- Thank customer for feedback

**Positive Feedback:**
- Share with team (Slack #wins channel)
- Request testimonial/case study (if appropriate)
- Personal thank you to customer

### Step 3: Weekly Product Review

**Every Monday, 10 AM**

**Attendees:** Product Manager, CS Manager, Engineering Lead

**Agenda (30 min):**
1. **Review Week's Feedback (15 min)**
 ```
 WEEKLY FEEDBACK SUMMARY

 Total feedback items: 47
 - Bugs: 12 (5 critical, 7 minor)
 - Feature requests: 18
 - Usability issues: 8
 - Positive: 9

 Top Themes:
 1. Dashboard performance slow (8 mentions)
 2. Export to Excel feature requested (6 mentions)
 3. Mobile app needed (5 mentions)
 ```

2. **Prioritize Action Items (10 min)**
 - Bugs → Engineering backlog (by severity)
 - Feature requests → Product roadmap consideration
 - Usability issues → UX review

3. **Customer Communication (5 min)**
 - Who needs follow-up?
 - What updates to share?

---

## NPS Program

### Quarterly NPS Survey

**Timing:** Last week of quarter
**Tool:** Delighted / SurveyMonkey / In-app

**Email:**
```
Subject: Quick Question - How Are We Doing?

Hi [Name],

We'd love your feedback! It takes just 30 seconds.

How likely are you to recommend PWBI to a colleague?

[0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]

Not at all likely Extremely likely

[Submit]

Thanks!
PWBI Team
```

### NPS Analysis & Action

**Calculate NPS:**
```
NPS = % Promoters - % Detractors

Example:
Responses: 100
Promoters (9-10): 60 (60%)
Passives (7-8): 30 (30%)
Detractors (0-6): 10 (10%)

NPS = 60% - 10% = 50 (Excellent)

Industry Benchmark:
- World-class: > 70
- Good: 50-70
- Average: 30-50
- Poor: < 30
```

**Follow-Up Actions:**

**Promoters:**
- Thank them
- Request case study/testimonial
- Ask for referrals

**Passives:**
- Understand what would make them promoters
- Address specific pain points
- Share product roadmap

**Detractors:**
- Immediate outreach (within 24 hours)
- Executive call if needed
- Create action plan
- Follow up monthly until resolved

---

## Feedback to Product Roadmap

### Feature Request Process

**Step 1: Log in Backlog**
```
FEATURE REQUEST

Title: Excel Export for All Reports
Requested By: Kopi Kenangan (+5 other customers)
Priority: High (based on # of requests)
Product: E1 Dashboard

Business Value:
- Requested by 6 customers (20% of base)
- Blocking expansion for 2 prospects
- Competitive feature (competitors have it)

Effort Estimate: 2-3 sprints

Status: Under Review
```

**Step 2: Product Prioritization (Monthly)**

**Product Manager evaluates:**
- **Impact:** How many customers benefit?
- **Urgency:** Is it blocking deals/causing churn?
- **Effort:** Engineering time required?
- **Strategic fit:** Aligns with roadmap?

**Prioritization Matrix:**
```
High Impact + Low Effort = DO FIRST
High Impact + High Effort = STRATEGIC (plan carefully)
Low Impact + Low Effort = QUICK WINS (fill sprints)
Low Impact + High Effort = DON'T DO
```

**Step 3: Customer Communication**

**If Prioritized:**
```
Hi [Customer],

Great news! We're building the Excel export feature you requested.

Target delivery: Q1 2025
We'll keep you updated on progress.

Thanks for the feedback!
```

**If Not Prioritized:**
```
Hi [Customer],

Thanks for the Excel export suggestion. We've added it to our backlog.

While we can't commit to a timeline yet, we're tracking demand and will
re-evaluate quarterly.

In the meantime, here's a workaround: [alternative solution]

Thanks for understanding!
```

---

## Feedback Metrics

**Track Monthly:**
- Total feedback volume (by channel)
- NPS score & trend
- Feature request → delivery rate
- Average time to act on critical feedback
- Customer satisfaction with feedback handling

**Dashboard:**
```
FEEDBACK HEALTH

This Month:
- NPS: 52 (↑ from 48 last quarter)
- Feedback volume: 180 items
- Critical bugs filed: 8 (all addressed < 48h)
- Feature requests prioritized: 12/45 (27%)
- Avg response time: 18 hours (target: 24h)
```

---

## Quality Checks

- [ ] All feedback categorized within 24 hours
- [ ] Critical issues actioned same day
- [ ] Weekly product review held
- [ ] NPS survey sent quarterly
- [ ] Detractors contacted within 24 hours
- [ ] Feature requests logged in backlog
- [ ] Customers notified when requests shipped

---

## Related Documents

- [[biz/departments/operations/customer/03-customer-onboarding-process|Customer Onboarding Process SOP]]
- [[biz/departments/operations/customer/05-support-escalation-matrix|Support Escalation Matrix SOP]]
- [[biz/departments/operations/customer/01-churn-prevention-workflow|Churn Prevention Workflow SOP]]

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 1.0 | Initial SOP | CS Team |

---

**Listen to customers. Act on feedback. Close the loop. Repeat.**
