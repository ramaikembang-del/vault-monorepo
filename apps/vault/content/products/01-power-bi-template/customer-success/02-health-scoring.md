# Customer Health Scoring Framework

**Product:** Product 01 - Power BI Template
**Department:** Customer Success
**Owner:** Customer Success Lead
**Last Updated:** January 8, 2026
**Status:** ACTIVE FRAMEWORK

---

## Executive Summary

### Purpose

Customer health scoring predicts **churn risk** and identifies **expansion opportunities** by tracking engagement, usage, and satisfaction metrics. This enables proactive interventions before customers churn.

### Health Score Components

| Component | Weight | What We Measure |
|-----------|--------|-----------------|
| **Product Usage** | 40% | Login frequency, dashboard refresh, data freshness |
| **Engagement** | 25% | Support tickets, NPS, communication responsiveness |
| **Financial Health** | 20% | Payment status, contract value, upsell potential |
| **Business Success** | 15% | ROI achieved, stated outcomes, referrals given |

### Health Score Tiers

**Score Range: 0-100**

- **90-100:** **Healthy** (Expansion-ready, advocate potential)
- **70-89:** **Stable** (Renewing, needs nurturing)
- **50-69:** **At-Risk** (Churn risk, requires intervention)
- **0-49:** **Critical** (High churn probability, urgent action)

---

## Part 1: Health Score Calculation

### 1.1 Product Usage Score (40% of total)

**Login Frequency Scoring:**

| Logins/Month | Score | Interpretation |
|--------------|-------|----------------|
| **15+ logins** | 30 pts | Power user (3-4x/week) |
| **10-14 logins** | 25 pts | Active user (2-3x/week) |
| **5-9 logins** | 15 pts | Moderate user (1-2x/week) |
| **1-4 logins** | 5 pts | Low engagement (<1x/week) |
| **0 logins** | 0 pts | Not using (dormant) |

**Dashboard Refresh Rate Scoring:**

| Refreshes/Week | Score | Interpretation |
|----------------|-------|----------------|
| **5-7 (daily)** | 30 pts | Daily user (automated workflow) |
| **2-4 (semi-weekly)** | 20 pts | Regular user |
| **1 (weekly)** | 10 pts | Minimum viable usage |
| **0-1 (monthly)** | 0 pts | Not actively using |

**Data Freshness Scoring:**

| Last Data Update | Score | Interpretation |
|-----------------|-------|----------------|
| **<7 days** | 30 pts | Real-time decision-making |
| **7-14 days** | 20 pts | Weekly review process |
| **15-30 days** | 10 pts | Monthly reporting only |
| **>30 days** | 0 pts | Stale data = not using |

---

### 1.2 Engagement Score (25% of total)

**Support Ticket Scoring:**

| Tickets/Month | Score | Interpretation |
|--------------|-------|----------------|
| **0-1** | 10 pts | Self-sufficient (good training) |
| **2-3** | 7 pts | Engaged (asking questions = learning) |
| **4-6** | 4 pts | Struggling (needs more training) |
| **7+** | 0 pts | Frustrated (product not working) |

**NPS Score:**

| NPS Response | Score | Churn Risk |
|-------------|-------|-----------|
| **9-10 (Promoter)** | 10 pts | Low (<5%) |
| **7-8 (Passive)** | 5 pts | Medium (15-20%) |
| **0-6 (Detractor)** | 0 pts | High (40-60%) |
| **No response** | 2 pts | Unknown (treat as risk) |

**Communication Responsiveness Scoring:**

| Response Time to CS Emails | Score | Engagement |
|-----------------------------|-------|-----------|
| **<24 hours** | 5 pts | Highly engaged |
| **24-48 hours** | 3 pts | Responsive |
| **>48 hours** | 1 pt | Slow (busy or disengaged?) |
| **No response** | 0 pts | Ghosting (churn signal) |

**Nuance:** Customers who never respond to check-ins (even if using product) are higher churn risk than those who respond (even if complaints).

---

**Feature Adoption Scoring (Detailed Breakdown):**

**Tier 1 Customers (2 Dashboard Pages):**

| Pages Used | Score | Utilization |
|-----------|-------|-------------|
| **Both pages (Executive + Top Items)** | 10 pts | Full adoption |
| **Only Executive Overview** | 7 pts | Missing menu insights |
| **Only Top Items** | 5 pts | Not seeing big picture |
| **Neither page (just login)** | 0 pts | Not understanding dashboard |

**Tier 2 Customers (5 Dashboard Pages):**

| Pages Used | Score | Utilization |
|-----------|-------|-------------|
| **4-5 pages** | 10 pts | Power user |
| **3 pages** | 7 pts | Good adoption |
| **2 pages** | 4 pts | Underutilizing Tier 2 (should downgrade?) |
| **0-1 pages** | 0 pts | Wasting money on Tier 2 |

**Tier 3 Customers (8 Dashboard Pages):**

| Pages Used | Score | Utilization |
|-----------|-------|-------------|
| **6-8 pages** | 10 pts | Strategic user |
| **4-5 pages** | 7 pts | Moderate adoption |
| **2-3 pages** | 4 pts | Major underutilization |
| **0-1 pages** | 0 pts | Not realizing Tier 3 value |

**CS Action if Low Feature Adoption:**
- Email: "I noticed you're only using [X] of [Y] pages. Want a quick tour of the other features?"
- Schedule 15-min feature demo
- Send video tutorial: "Unlock [specific feature] in 5 minutes"

---



**Payment Status:**

| Status | Score | Risk |
|--------|-------|------|
| **Paid on time** | 10 pts | No risk |
| **Paid 1-7 days late** | 7 pts | Low risk (follow up) |
| **Paid 8-30 days late** | 3 pts | Medium risk (payment issue?) |
| **Outstanding >30 days** | 0 pts | High risk (may not value product) |

**Upsell Potential:**

| Indicator | Score | Expansion Opportunity |
|-----------|-------|---------------------|
| **Tier 1, heavy usage** | 5 pts | Ready to upgrade to Tier 2 |
| **Tier 2, multi-outlet** | 5 pts | Ready for Tier 3 or Product 02 |
| **At tier ceiling** | 0 pts | No upsell (focus on retention) |

---

### 1.4 Business Success Score (15% of total)

**ROI Achieved:**

| Payback Period | Score | Success Level |
|---------------|-------|---------------|
| **<30 days** | 7 pts | Exceptional (promote as case study) |
| **30-60 days** | 5 pts | Target achieved |
| **60-90 days** | 3 pts | Slower than expected |
| **>90 days or unknown** | 0 pts | Not seeing value |

---

**Contract Value (Strategic Importance):**

| Annual Contract Value (ACV) | Score | Strategic Importance |
|-----------------------------|-------|---------------------|
| **Tier 3 (Rp 10-20M)** | 5 pts | High-value, prioritize retention |
| **Tier 2 (Rp 7-10M)** | 3 pts | Medium-value |
| **Tier 1 (Rp 3.5-5M)** | 1 pt | Low-value (less retention effort) |

**Rationale:** Higher ACV customers get more CS attention (higher retention ROI).

**CS Resource Allocation by ACV:**

| Tier | ACV | CS Time/Month | Strategy |
|------|-----|---------------|----------|
| **Tier 3** | Rp 10-20M | 4-6 hours | Proactive (monthly check-ins, quarterly strategy calls) |
| **Tier 2** | Rp 7-10M | 2-3 hours | Reactive (respond to issues, quarterly check-ins) |
| **Tier 1** | Rp 3.5-5M | <1 hour | Automated (email-only, no calls unless critical) |

**Edge Case:** Tier 1 customer with exceptional usage (score 95+) = treat as Tier 2 (upsell opportunity)

---

**Upsell Potential (Detailed Analysis):**

| Current Tier | Usage Pattern | Next Step | Score | Probability |
|-------------|---------------|-----------|-------|-------------|
| **T1, 15+ logins/month** | Power user hitting limits | Upgrade to T2 | 5 pts | 60% |
| **T1, 2 outlets mentioned** | Multi-outlet need | T2 Multi-Outlet Module | 5 pts | 70% |
| **T2, 5+ outlets** | Outgrowing T2 | Upgrade to T3 | 5 pts | 40% |
| **T2, asking for custom metrics** | Need customization | Product 02 Support | 5 pts | 50% |
| **T3, no add-ons** | Haven't explored modules | Cross-sell modules | 3 pts | 30% |
| **Any tier, at ceiling** | Maxed out current tier | No immediate upsell | 0 pts | 0% |

**CS Action:** Flag high-probability upsells (>50%) for Sales team follow-up

---

### 1.4 Business Success Score (15% of total)

**ROI Achieved:**

| Payback Period | Score | Success Level |
|---------------|-------|---------------|
| **<30 days** | 7 pts | Exceptional (promote as case study) |
| **30-60 days** | 5 pts | Target achieved |
| **60-90 days** | 3 pts | Slower than expected |
| **>90 days or unknown** | 0 pts | Not seeing value |

**How to Track ROI:**

**Method 1: Customer Self-Reported (Ask in 30-day check-in)**
> "Have you discovered any cost savings or revenue gains since using the dashboard? (e.g., caught food cost issue, found theft, optimized menu)"

**Method 2: Case Study Interview**
- Documented savings/gains
- Verified with specific metrics
- Becomes proof point for sales

**ROI Validation Example:**
- Customer: "We discovered our food cost was 37%, now it's 30%"
- Calculation: 7% reduction × Rp 100M annual revenue = Rp 7M/year savings
- Payback: Rp 4.7M investment / Rp 7M savings = **2 months**

---

**Stated Outcomes (Qualitative Assessment):**

| Customer Sentiment (Verbatim Quotes) | Score | Health Indicator |
|--------------------------------------|-------|------------------|
| **"This transformed my business"** | 5 pts | Extreme advocate |
| **"Best investment we made this year"** | 5 pts | Strong advocate |
| **"It's helpful, solving my Excel problem"** | 3 pts | Satisfied user |
| **"It's okay, still learning"** | 1 pt | Lukewarm (needs training) |
| **"Not sure it's worth it yet"** | 0 pts | Dissatisfied (intervention needed) |
| **"Waste of money"** | 0 pts | Extreme detractor (refund candidate) |

**Collection Method:**
- Monthly NPS survey (open-ended: "Why did you give this score?")
- Quarterly check-in calls (ask: "How would you describe the value you're getting?")
- Support ticket sentiment analysis (complaints vs praise)

---

**Referrals Given (Advocacy Indicator):**

| Referrals in Last 90 Days | Score | Advocacy Level |
|--------------------------|-------|----------------|
| **3+ referrals** | 3 pts | Super advocate (reward with bonus Rp 1M) |
| **2 referrals** | 3 pts | Strong advocate |
| **1 referral** | 2 pts | Promoter |
| **0 referrals, but willing** | 1 pt | Passive (hasn't thought about it) |
| **0 referrals, refused** | 0 pts | Neutral (happy but not promoting) |

**Referral Ask Strategy:**
- Only ask Healthy customers (90-100 score)
- Timing: After they achieve ROI (30-60 days)
- Incentive: Rp 1M for referrer, Rp 500K discount for referee
- Process: "Do you know any café/restaurant owners who struggle with Excel like you did?"

---



** Healthy (90-100 points)**

**CS Actions:**
1. Request case study
2. Identify upsell opportunity (Tier upgrade, Product 02)
3. Ask for referral

**Churn Risk:** <5%

---

** Stable (70-89 points)**

**CS Actions:**
1. Quarterly check-in call
2. Share best practices
3. Monitor for decline

**Churn Risk:** 10-15%

---

** At-Risk (50-69 points)**

**CS Actions (URGENT - within 48 hours):**
1. Outreach email ("Noticed you haven't logged in recently")
2. Troubleshooting call (30-min, diagnose issue)
3. Create action plan (re-engage within 14 days)

**Churn Risk:** 30-40%

---

** Critical (0-49 points)**

**CS Actions (IMMEDIATE - same day):**
1. Escalate to CSM + Sales
2. Direct phone call + email
3. Offer concessions (extra training, free customization)
4. Last-resort: Refund discussion

**Churn Risk:** 60-80%

---

## Part 3: Operationalizing Health Scores

### 3.1 Data Collection

**Manual Tracking (Sprint 1-2):**

Track in spreadsheet:

| Customer | Tier | Last Login | Refresh Count | Data Fresh? | Support Tickets | NPS | Payment | Score | Status |
|----------|------|-----------|---------------|-------------|----------------|-----|---------|-------|--------|
| Dimas | T1 | 2 days ago | 5/week | Yes (<7d) | 1/month | 10 | On-time | 95 | |
| Amanda | T2 | 5 days ago | 3/week | Yes (10d) | 2/month | 8 | On-time | 85 | |
| Andi | T3 | 8 days ago | 2/week | Yes (12d) | 1/month | 7 | On-time | 72 | |
| Budi | T1 | 25 days ago | 0/month | No (40d) | 4/month | 6 | Late 5d | 58 | |
| Siti | T2 | 60 days ago | 0/month | No (70d) | 0/month | No resp | Late 30d | 35 | |

**Update Frequency:** Monthly (1st of month) + ad-hoc when customer interaction occurs

**Automated Tracking (Sprint 3+ with Product 02):**
- Power BI Service API -> track login frequency automatically
- HubSpot/Zendesk integration -> pull support ticket count
- Billing system integration -> payment status auto-updates
- Weekly auto-calculation + alerts when score drops >10 points

---

### 3.2 Weekly CS Workflow

**Monday Morning Review (30 min):**

1. **Sort by health tier** (Critical first):
 ```
 Critical (0-49): 2 customers -> URGENT action today
 At-Risk (50-69): 5 customers -> Outreach this week
 Stable (70-89): 15 customers -> Monitor, quarterly check-in
 Healthy (90-100): 8 customers -> Expansion/referral opportunities
 ```

2. **Identify this week's priorities:**
 - All Critical customers get same-day outreach
 - All At-Risk get 48-hour outreach
 - 3-5 Stable customers get quarterly check-in
 - 2-3 Healthy customers get upsell/referral ask

3. **Assign to CS team:**
 - CSM 1: 2 Critical + 2 At-Risk
 - CSM 2: 3 At-Risk + 3 Stable check-ins
 - CSM Lead: 2 Healthy (upsell focus)

---

**Tuesday-Thursday Execution (2 hours/day):**

4. **Execute interventions:**
 - Send outreach emails
 - Schedule/conduct calls
 - Create action plans
 - Log all interactions in CRM

5. **Track outcomes:**
 - Note in CRM: "Sent At-Risk email to Budi on 1/8"
 - Schedule follow-up: "Check if Budi responded by 1/10"

---

**Friday Wrap-Up (30 min):**

6. **Update health scores** based on this week's interactions:
 - Budi responded to email + scheduled call -> bump score +5 (58 -> 63, still At-Risk but improving)
 - Siti hasn't responded to 3 outreach attempts -> keep at 35 (Critical, escalate next week)

7. **Report to leadership:**
 ```
 Week of Jan 8, 2026:
 - Critical: 2 (down from 3 last week - Andi recovered to Stable )
 - At-Risk: 5 (up from 3 - Budi and Eko declined )
 - Stable: 15 (steady)
 - Healthy: 8 (up from 7 - Amanda upgraded )

 Actions this week:
 - 10 outreach emails sent
 - 6 calls conducted
 - 1 customer recovered (Andi)
 - 1 churn prevented (Budi re-engaged)
 ```

---

### 3.3 Sample Health Score Calculation

**Customer: Pak Budi (QSR, Tier 1)**

**1. Product Usage (40 points max):**
- Login frequency: 1 login/month = 5 pts
- Refresh rate: 0 refreshes/week = 0 pts
- Data freshness: Last update 40 days ago = 0 pts
- Feature adoption: Using 1 of 2 pages = 4 pts
- **Subtotal: 9/40 pts**

**2. Engagement (25 points max):**
- Support tickets: 4/month = 4 pts (struggling)
- NPS: 6 (Detractor) = 0 pts
- Communication responsiveness: Responds in 48 hours = 3 pts
- **Subtotal: 7/25 pts**

**3. Financial Health (20 points max):**
- Payment status: Paid 5 days late = 7 pts
- Contract value: Tier 1 (Rp 4.7M) = 1 pt
- Upsell potential: Not using product, no upsell = 0 pts
- **Subtotal: 8/20 pts**

**4. Business Success (15 points max):**
- ROI achieved: Unknown/not realized = 0 pts
- Stated outcomes: "Not sure it's worth it" = 0 pts
- Referrals: 0 = 0 pts
- **Subtotal: 0/15 pts**

**TOTAL SCORE: 24/100 = CRITICAL**

**CS Action:** IMMEDIATE escalation, same-day outreach, offer full troubleshooting session

---

## Part 4: Intervention Playbooks

### 4.1 At-Risk Intervention Email

```
Subject: Can we help you get more value from your dashboard?

Hi [Name],

I noticed you haven't logged into your Power BI dashboard in [X days].

Just checking in - is everything okay?

Common reasons customers go quiet:
- Technical issue (dashboard not working?)
- Too busy to use it (need simpler workflow?)
- Not seeing expected value (need training/support?)

I'd love to help fix whatever's blocking you.

Can we jump on a quick 15-min call this week?

Pick a time: [Calendly link]

Or just reply and let me know what's going on.

Thanks!
[Your Name]
Customer Success Team
```

**Expected Response Rate:** 40-50% (At-Risk customers)

**Follow-up if no response (48 hours later):**
```
Subject: Following up - we're here to help

Hi [Name],

Quick follow-up on my email from [Tuesday].

I know you're busy, but I want to make sure you're getting value from the dashboard.

If there's anything we can do to make this easier/more useful, please let me know.

Even a quick 5-min call would help.

Thanks!
[Your Name]
```

---

### 4.2 Critical Intervention Call Script

**Opening:**
> "Hi [Name], this is [Your Name] from Customer Success. I noticed some concerning signals with your account and wanted to reach out personally. Do you have 15 minutes to chat?"

**If yes, continue. If no:**
> "No problem - when's a better time? This is important, I want to make sure you're getting value."

---

**Diagnosis Phase (5 min - Ask open-ended questions):**

1. **"When was the last time you used the dashboard?"**
 - Listen for: "I haven't used it in weeks" vs "I use it daily"

2. **"What's preventing you from using it more regularly?"**
 - Listen for:
 - Technical: "It keeps crashing" -> Escalate to support
 - Training: "I don't know how to..." -> Schedule training
 - Value: "It's not worth the price" -> ROI conversation
 - External: "We closed 2 outlets, don't need it" -> Downgrade tier

3. **"Are you still facing the problem we were trying to solve (Excel waste, lack of insights)?"**
 - If NO: "We solved it another way" -> Ask how (competitor? hired analyst?)
 - If YES: "We still have the problem, but dashboard isn't solving it" -> Dig deeper

---

**Solution Offering (5 min - Based on diagnosis):**

**If Technical Issue:**
> "Let's get that fixed right now. Can you share your screen so I can see what's happening?"
> [Troubleshoot live OR] "I'll connect you with our support engineer today - they'll fix this within 24 hours."

**If Training Gap:**
> "I hear you - Power BI can be intimidating at first. Let me schedule a 1-hour personalized training session with you this week. I'll show you exactly how to [solve their specific need]. Sound good?"

**If Value Mismatch:**
> "I understand. Let's talk ROI - you paid Rp [X], and our average customer saves Rp [Y]/month. Have you discovered any cost savings yet?"
> [If no] "That's the issue - you're not seeing value because you're not using the key features. Let me show you where the value is hiding."

**If External Factor (e.g., business downsized):**
> "I'm sorry to hear that. If you don't need all the features anymore, we can downgrade you to Tier 1 and refund the difference. Would that make more sense?"

---

**Commitment Phase (3 min):**

> "Here's what we'll do:
> 1. I'll [send training materials / schedule troubleshooting / process refund]
> 2. You'll [complete training / test fix / decide by Friday]
> 3. We'll check in again in [2 weeks] to see if it's working better.
>
> Does that sound fair?"

**Get verbal commitment:** "Can I count on you to [action]?"

---

**Closing:**
> "Thanks for taking the time, [Name]. We really want this to work for you - that's why I called personally. Talk to you [next touchpoint]."

**Log in CRM:**
- Call date, duration
- Issue diagnosed (technical/training/value)
- Solution offered
- Customer commitment
- Follow-up scheduled

---

### 4.3 Expansion Opportunity Email (Healthy Customers)

```
Subject: You're crushing it with Tier 1 - ready for Tier 2?

Hi [Name],

I've been watching your usage (in a good way!) - you're logging in 15+ times/month, refreshing daily, clearly getting value.

That's awesome!

Quick question: Have you hit any limitations with Tier 1?

Common scenarios where Tier 2 makes sense:
- You opened a 2nd outlet (need multi-outlet consolidation)
- You want menu engineering (profitability matrix)
- You need customer segmentation (RFM analysis, VIP tracking)

If any of these resonate, let's chat about Tier 2.

Upgrade pricing: Rp 4M (not full Rp 7M, you get credit for Tier 1 purchase).

Interested? Reply and I'll send details.

Thanks!
[Your Name]
Customer Success Team
```

**Conversion Rate:** 20-30% (Healthy customers are expansion-ready)

---

### 4.4 Quarterly Check-In Email (Stable Customers)

```
Subject: Quick quarterly check-in - how's the dashboard working?

Hi [Name],

It's been 3 months since you started using the Power BI dashboard - time for a quick check-in!

A few questions:
1. What's working well for you?
2. Any features you're NOT using that you'd like to learn about?
3. Anything we can improve?

No sales pitch - just want to make sure you're getting maximum value.

Reply or let's hop on a quick 10-min call: [Calendly link]

Thanks!
[Your Name]
```

**Goal:** Maintain engagement, prevent drift to At-Risk

---

### 4.5 Recovery Strategies (For At-Risk/Critical Customers)

**Recovery Playbook Tiers:**

**Level 1: Email Intervention (At-Risk customers, score 50-69)**

1. Send At-Risk email (template in 4.1)
2. Wait 48 hours for response
3. If no response: Send follow-up email
4. If still no response: Escalate to Level 2

**Success Rate:** 40-50% recover to Stable tier

---

**Level 2: Phone Call Intervention (Critical customers, score 30-49)**

1. Direct phone call within 24 hours (use script from 4.2)
2. Diagnose root cause (technical/training/value)
3. Offer immediate solution
4. Schedule follow-up in 1 week
5. If solution works: Customer recovers to At-Risk (50+)
6. If solution fails: Escalate to Level 3

**Success Rate:** 30-40% recover

---

**Level 3: Executive Escalation (Critical customers, score <30)**

1. Founder/CEO personal outreach
2. Offer maximum concessions:
 - Full refund (if within 30-day guarantee)
 - 50% discount on Tier 2 upgrade (if Tier 1 customer wants more)
 - Free 3 months Product 02 support (if needs ongoing help)
 - Custom training (2-hour 1:1 session)
3. Last-resort: Graceful off-board (process refund, maintain relationship)

**Success Rate:** 10-20% recover (most already churned mentally)

---

**Post-Recovery Monitoring:**

Once customer recovers (At-Risk -> Stable or Critical -> At-Risk):
- Weekly check-ins for 4 weeks
- Monitor score closely (flag if drops again)
- Ask for feedback: "What changed? What made you re-engage?"
- Use insights to prevent future churn

---

### 4.6 Edge Cases & Special Scenarios

**Edge Case 1: High Score but Low Engagement (Score 90, but 0 support tickets + no responses)**

**Red Flag:** May be fake engagement (someone else using their account OR they're ghosting but still using product)

**CS Action:**
- Quarterly check-in: "We haven't heard from you in a while - everything working well?"
- If no response after 2 attempts: Lower engagement score (-10 points)
- Monitor for sudden drop (if they ghost then stop using, churn imminent)

---

**Edge Case 2: Low Score but High Payment Reliability (Score 55, but always pays on time)**

**Interpretation:** They don't love product, but they're committed (inertia/switching costs)

**CS Action:**
- Proactive outreach: "I see you're paying but not using much - let's make this more valuable"
- Focus on training/value realization (not retention - they won't churn yet)
- Goal: Convert to Stable (70+) through engagement

---

**Edge Case 3: Multiple Support Tickets but High NPS (8 tickets/month, NPS 9)**

**Interpretation:** Engaged power user (lots of questions = learning, not frustrated)

**CS Action:**
- Don't penalize for tickets (override scoring: give 7 pts instead of 0 pts)
- Recognize as "power user" (flag for case study, upsell opportunity)
- Offer advanced training: "You're asking great questions - want a deep-dive session?"

---

**Edge Case 4: Seasonal Business (Score drops from 90 to 60 every Q4)**

**Interpretation:** Restaurant closes for 2 months/year (seasonal), not churning

**CS Action:**
- Note in CRM: "Seasonal business, closes Nov-Dec annually"
- Don't intervene during known closure period
- Reactivate outreach in Jan (when they reopen)

---

**Edge Case 5: Ownership Change (New owner takes over, score drops to 40)**

**Interpretation:** New owner doesn't know how to use dashboard (training gap, not value gap)

**CS Action:**
- Immediate outreach: "Congratulations on the business! Let's get you trained on the dashboard"
- Treat as new customer (restart onboarding)
- Offer free re-training (1 hour, full walkthrough)

---

### 4.7 Cross-Functional Collaboration

**When to Loop in Sales:**

| Scenario | CS observes | CS Action | Sales follow-up |
|----------|------------|-----------|-----------------|
| **Upsell opportunity** | T1 customer, score 95, heavy usage | Flag for Sales | Send Tier 2 upgrade proposal |
| **Multi-outlet expansion** | Customer mentions opening 2nd outlet | Notify Sales | Offer multi-outlet module |
| **Enterprise need** | T2 customer asking for white-label | Escalate to Sales | Propose Tier 3 or custom solution |

---

**When to Loop in Product Team:**

| Scenario | CS observes | CS Action | Product impact |
|----------|------------|-----------|---------------|
| **Feature request (10+ customers)** | Common ask: "Can you add X metric?" | Log in product feedback tool | Prioritize for roadmap |
| **Bug affecting multiple customers** | 5 customers report same issue | Create bug ticket | Fix in next release |
| **Low feature adoption across all** | 80% of customers only use 2 of 5 pages | Report to Product | Redesign underused features |

---

**When to Loop in Support:**

| Scenario | CS observes | CS Action | Support outcome |
|----------|------------|-----------|-----------------|
| **Technical issue** | Customer: "Dashboard won't refresh" | Create support ticket | Troubleshoot within 24h |
| **Setup failure** | Customer stuck on Day 1 setup | Escalate to Support | 1:1 setup call |
| **Repeated issues** | Customer opens 7+ tickets/month | Flag recurring problem | Root cause analysis |

---

## Part 5: Success Metrics

### 5.1 Track These Health Score KPIs

| Metric | Target | Formula |
|--------|--------|---------|
| **Avg Health Score** | >75 | Sum of all scores / customer count |
| **Churn Rate** | <10% annually | Churned customers / total customers × 100 |
| **% Healthy Customers** | >50% | Customers 90-100 / total |
| **% Critical Customers** | <10% | Customers 0-49 / total |
| **Recovery Rate** | >50% | At-Risk recovered to Stable+ / At-Risk total |
| **Expansion Rate** | >20% | Healthy customers upgraded / Healthy total |

---

### 5.2 Monthly Health Score Report Template

```
CUSTOMER HEALTH REPORT - [Month, Year]

OVERVIEW:
- Total Customers: [X]
- Avg Health Score: [Y]/100
- MoM Change: [+/-Z points]

DISTRIBUTION:
- Healthy (90-100): [A] customers ([B]%)
- Stable (70-89): [C] customers ([D]%)
- At-Risk (50-69): [E] customers ([F]%)
- Critical (0-49): [G] customers ([H]%)

ACTIONS TAKEN:
- Outreach emails sent: [X]
- Calls conducted: [Y]
- Training sessions: [Z]

OUTCOMES:
- Recovered: [A] customers (At-Risk -> Stable+)
- Churned: [B] customers
- Upsold: [C] customers (tier upgrades)

NEXT MONTH PRIORITIES:
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]
```

---

**Document Status:** ACTIVE - CS Operations Tool
**Owner:** Customer Success Lead
**Last Review:** January 8, 2026
**Next Review:** Monthly (refine based on churn data)

**Related Documents:**
- [[products/01-power-bi-template/customer-success/onboarding-playbook|Onboarding Playbook]]
- [[products/01-power-bi-template/customer-success/01-faq|Customer FAQ]]
- [[biz/departments/growth/customer-success/cs-playbook|CS Playbook]]
