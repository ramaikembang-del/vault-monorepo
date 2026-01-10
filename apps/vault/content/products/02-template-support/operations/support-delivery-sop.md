# R1 Template Support - Support Delivery SOP

**Owner:** Support Team (Founder initially, then dedicated support person)
**Frequency:** Ongoing (daily ticket review)
**Last Updated:** January 4, 2026
**Version:** 2.0 (Expanded with templates, escalation, quality standards)

---

## Purpose

Deliver consistent, high-quality template support to R1 subscribers that:
- Meets or exceeds SLA commitments (<24hr email, <4hr WhatsApp urgent)
- Maintains high customer satisfaction (4.5+/5 CSAT target)
- Scales efficiently (target <5 hours/week at 30 subscribers)
- Creates loyal, retained customers (target <20% monthly churn)

## Scope

**Product:** R1 - Template Support & Subscription (Rp 75K/month)
**Support Channels:** Email (primary), WhatsApp Business (urgent only)
**What's Covered:** Template usage, troubleshooting, best practices, monthly updates
**What's NOT Covered:** Custom development, Power BI training, data entry, Power BI Pro licensing

---

## Support Channels & SLAs

### Email Support (support@pwbi.id or dedicated Gmail)
**SLA:** <24 hours weekday response, <48 hours weekend
**Available to:** All R1 subscribers
**Tools:** Gmail with labels (New/In Progress/Resolved/Needs Follow-up)
**Volume Expected:** 2-4 tickets/week at 30 subscribers (based on 10-15% monthly contact rate)

### WhatsApp Business (Urgent Only)
**SLA:** <4 hours weekday response (9am-6pm WIB)
**Available to:** R1 subscribers (urgent issues only - template broken, data loss, critical deadline)
**Tools:** WhatsApp Business app with saved responses
**Usage Guidelines:**
- Use ONLY for urgent issues that block customer's business operations
- Redirect routine questions to email for proper documentation
- Expected volume: <1 urgent ticket/week

### NOT Supported:
- [x] Phone calls (unless critical issue, founder discretion)
- [x] Video calls (unless Premium tier R2/R3 in future)
- [x] In-person meetings (not scalable)
- [x] Social media DMs (redirect to official channels)

---

## Ticket Triage & Prioritization

### Priority Levels

#### P0 - Critical (Response <2 hours)
**Definition:** Template completely broken, blocks business operations, urgent deadline
**Examples:**
- "Template won't open, need sales report for meeting in 3 hours"
- "All data disappeared after update"
- "Dashboard showing wrong revenue numbers being presented to board"

**Actions:**
1. Respond immediately via WhatsApp if available
2. Acknowledge issue and provide ETA for resolution
3. Work actively until resolved or escalate to founder
4. Follow up within 24 hours after resolution

#### P1 - High (Response <12 hours)
**Definition:** Significant functionality broken, but workarounds possible
**Examples:**
- "One visual not loading, but others work"
- "Data refresh failing for specific POS import"
- "Filter not working as expected"

**Actions:**
1. Respond within 12 hours with diagnosis or questions
2. Provide temporary workaround if possible
3. Commit to resolution timeframe (24-48 hours)
4. Update customer every 24 hours until resolved

#### P2 - Normal (Response <24 hours)
**Definition:** Template works, customer has questions or minor issues
**Examples:**
- "How do I interpret this metric?"
- "Can I change the color scheme?"
- "Is there a way to add my logo?"

**Actions:**
1. Respond within 24 hours (weekdays)
2. Provide answer, link to documentation, or tutorial
3. Close ticket or wait for customer confirmation

#### P3 - Low (Response <48 hours)
**Definition:** Feature requests, general inquiries, feedback
**Examples:**
- "Would be nice to have X metric"
- "Just wanted to say thank you"
- "Suggestion for next update"

**Actions:**
1. Respond within 48 hours to acknowledge
2. Log feature requests for monthly update prioritization
3. Thank customers for positive feedback

---

## Common Support Requests & Response Templates

### Template 1: Data Import Issues (35% of tickets)

**Customer Question:**
> "My data isn't loading into the template. I followed the instructions but nothing shows up."

**Response Template:**
```
Hi [Customer Name],

Thank you for reaching out! Let's troubleshoot your data import issue step by step.

**First, please verify:**
1. Your CSV file matches the required format (see **Data Format Guide**)
2. Column names are exactly as specified (case-sensitive)
3. Date format is DD/MM/YYYY
4. No special characters in restaurant name or item names

**Common fixes:**
- If using [POS System], ensure you export "Sales Detail Report" not "Summary Report"
- Check that file size is <50MB (Power BI Desktop limit)
- Close and reopen the template after placing CSV in correct folder

**Can you please:**
1. Send me a screenshot of your CSV file (first 10 rows)
2. Confirm which POS system you're using
3. Tell me the exact error message (if any)

I'll respond within 4 hours with next steps!

Best regards,
[Support Team Name]
R1 Template Support
```

**Expected Resolution Time:** 4-12 hours (depending on customer response)
**Escalation Trigger:** If issue persists after 3 back-and-forth exchanges  ->  Escalate to founder

---

### Template 2: Metric Interpretation (25% of tickets)

**Customer Question:**
> "What does 'VIP Customer Churn Risk' mean? How is it calculated?"

**Response Template:**
```
Hi [Customer Name],

Great question! Let me explain the "VIP Customer Churn Risk" metric.

**What it means:**
This metric identifies your top 20% customers (by revenue) who haven't visited in 30+ days. These are high-value customers at risk of churning.

**How it's calculated:**
1. Rank all customers by total revenue (last 90 days)
2. Identify top 20% (your VIPs)
3. Check last visit date for each VIP
4. Flag VIPs with no visit in 30+ days

**Why it matters:**
Losing a VIP customer hurts 5-10Ã— more than losing an average customer. This metric helps you proactively reach out (e.g., "We miss you" discount) before they're gone.

**What to do:**
- Export the list (right-click table  ->  Export Data)
- Call or WhatsApp these customers with a special offer
- Target: Re-engage within 7 days of being flagged

**Related resources:**
- **Customer Retention Playbook** - 5 proven re-engagement tactics
- **Video: How to Use Churn Risk Metrics** - 3-minute tutorial

Does this make sense? Let me know if you'd like help setting up a retention campaign!

Best regards,
[Support Team Name]
```

**Expected Resolution Time:** Immediate (template response)
**Follow-up:** After 7 days, ask "Did you reach out to any VIPs? What happened?"

---

### Template 3: Template Customization Requests (20% of tickets)

**Customer Question:**
> "Can you add our restaurant logo to the dashboard? Also want to change colors to match our brand."

**Response Template:**
```
Hi [Customer Name],

Absolutely! The template is fully customizable. Here's how to add your logo and brand colors:

**Adding Your Logo:**
1. Open Power BI template
2. Click "Insert"  ->  "Image"
3. Upload your logo file (PNG or JPG, max 500KB)
4. Resize and position in top-left corner
5. Save template

**Video tutorial:** _How to Add Logo (2 minutes)_

**Changing Colors:**
1. Click any visual (chart, table)
2. Format pane (paintbrush icon)  ->  Data colors
3. Choose your brand colors (hex codes work best)
4. Apply to all visuals (Ctrl+C visual  ->  Ctrl+V formatting)

**Video tutorial:** _Custom Color Themes (3 minutes)_

**Want us to do it for you?**
Send me:
- Your logo file (PNG preferred)
- Brand color codes (e.g., #FF5733 for primary, #333333 for text)
- I'll create a custom template within 24 hours (one-time courtesy service for R1 subscribers!)

Let me know how you'd like to proceed!

Best regards,
[Support Team Name]
```

**Expected Resolution Time:** Immediate (self-service) or 24 hours (custom template)
**Escalation Trigger:** If customization takes >2 hours  ->  Charge as consulting or upgrade to R2 Premium

---

### Template 4: Performance/Speed Issues (10% of tickets)

**Customer Question:**
> "The dashboard is very slow to load. Takes 3-5 minutes every time I open it. How can I make it faster?"

**Response Template:**
```
Hi [Customer Name],

Slow dashboard performance is usually fixable! Let's diagnose the issue.

**Quick checks:**
1. **Data size:** How many rows in your CSV? (Right-click file  ->  Properties)
 - <10,000 rows: Should be instant
 - 10,000-50,000 rows: 10-30 seconds normal
 - >50,000 rows: Need optimization (see below)

2. **Power BI version:** Using Power BI Desktop or Power BI Service (cloud)?
 - Desktop: Generally faster, try this first
 - Service: Depends on internet speed

3. **Computer specs:** RAM and processor?
 - Minimum: 4GB RAM, i3 processor
 - Recommended: 8GB+ RAM, i5+ processor

**If your data is >50,000 rows, try this:**
- Filter to last 90 days only (vs full history)
- Remove unused columns from CSV before import
- Use "Import" mode instead of "DirectQuery" (faster)

**Advanced optimization (if still slow):**
I can review your template and optimize the DAX queries. Send me:
1. Screenshot of data tab (how many rows/columns)
2. Which specific visual is slowest
3. Your computer specs

I'll provide optimization recommendations within 24 hours!

Best regards,
[Support Team Name]
```

**Expected Resolution Time:** 12-24 hours
**Escalation Trigger:** If requires DAX rewrite  ->  Escalate to founder or log as product improvement

---

### Template 5: Bug Reports (5% of tickets)

**Customer Question:**
> "I think there's a bug. The 'Staff Performance' visual shows negative tips, which doesn't make sense."

**Response Template:**
```
Hi [Customer Name],

Thank you for reporting this! Let's investigate.

**To help me reproduce the bug:**
1. Can you send a screenshot of the issue?
2. Which POS system are you using?
3. Did this happen after a specific action (e.g., data refresh, filter change)?
4. Is it happening consistently or just once?

**Possible causes:**
- Data format issue (negative numbers in tips column)
- Bug in template calculation (we'll fix in next update)
- Refunds/voids being counted as negative tips

**Immediate workaround:**
While I investigate, you can:
- Filter out negative values (right-click visual  ->  Filter  ->  "Tips > 0")
- Check your POS export for any negative tip values

**I will:**
1. Reproduce the issue on my end (within 12 hours)
2. If confirmed bug  ->  Fix in next monthly update (first Monday of next month)
3. If data issue  ->  Provide corrected import instructions

I'll keep you updated via email. Thank you for helping us improve the template!

Best regards,
[Support Team Name]
```

**Expected Resolution Time:** 12 hours diagnosis, fix in next monthly update
**Escalation Trigger:** Immediately escalate to founder if critical calculation error

---

### Template 6: Feature Requests (5% of tickets)

**Customer Question:**
> "Would love to see a 'profit by menu item' report. Can you add this?"

**Response Template:**
```
Hi [Customer Name],

Love this suggestion! "Profit by menu item" is a great addition.

**Good news:** I've added this to our feature request list for the next monthly update!

**What happens next:**
1. Feature requests are prioritized by votes (how many customers request it)
2. Top 2-3 requests get added each month
3. You'll be notified via monthly update email if your request is included

**In the meantime:**
You can manually calculate profit:
- Export "Revenue by Item" table
- Subtract "Cost of Goods" (your food cost %)
- Sort by highest profit margin

**Want to boost this request's priority?**
If 3+ other R1 subscribers request the same feature, it moves to top of queue!

Thank you for helping shape the product! Keep the ideas coming.

Best regards,
[Support Team Name]
```

**Expected Resolution Time:** Immediate acknowledgment
**Action Required:** Log feature request in tracking sheet, review monthly for prioritization

---

## Escalation Decision Tree

### When to Escalate to Founder/Senior Support

```
START: Ticket received
  v 
Is it P0 Critical?
  ->  YES: Immediately notify founder via Slack/WhatsApp
  ->  NO: Continue
  v 
Can I resolve with existing documentation/templates?
  ->  YES: Use response template, resolve ticket
  ->  NO: Continue
  v 
Have I exchanged 3+ messages with customer without resolution?
  ->  YES: ESCALATE (avoid endless back-and-forth)
  ->  NO: Continue
  v 
Does it require >2 hours of work?
  ->  YES: ESCALATE (beyond support scope  ->  consulting)
  ->  NO: Continue
  v 
Is it a confirmed product bug or feature limitation?
  ->  YES: ESCALATE to product team for next update
  ->  NO: Continue
  v 
Am I unsure how to answer?
  ->  YES: ESCALATE (better to ask than give wrong answer)
  ->  NO: Resolve ticket
```

### Escalation Process

**Step 1: Document Thoroughly**
- Summary of issue (1-2 sentences)
- What troubleshooting steps already tried
- Customer details (name, tier, POS system, urgency)
- Screenshots/attachments

**Step 2: Notify Founder**
- Slack message: "#support-escalation: [Customer Name] - [Issue Summary] - [Priority]"
- Include link to email thread or ticket
- Tag with urgency (P0/P1/P2)

**Step 3: Set Expectations with Customer**
```
Hi [Customer Name],

I've escalated your issue to our senior support team for specialized assistance.

**What to expect:**
- Response within [4 hours for P0, 12 hours for P1, 24 hours for P2]
- Direct communication from [Founder Name] if needed
- I'll stay looped in to ensure resolution

Thank you for your patience!
```

**Step 4: Follow Up**
- Check back in 24 hours if no resolution
- Close ticket only after customer confirms issue resolved

---

## Quality Standards

### Response Quality Checklist

Every support response MUST meet these standards:

**[x] Completeness:**
- [ ] Directly answers the customer's question (not deflecting)
- [ ] Provides actionable next steps (not just theory)
- [ ] Includes links to relevant documentation or tutorials
- [ ] Sets clear expectations for resolution timeframe

**[x] Tone & Professionalism:**
- [ ] Friendly, empathetic, not robotic
- [ ] Uses customer's name (personalized)
- [ ] Acknowledges frustration if customer is upset
- [ ] Avoids jargon or overly technical language (unless customer is technical)
- [ ] No emojis in formal responses (unless customer uses them first)

**[x] Accuracy:**
- [ ] Information is correct (double-check before sending if unsure)
- [ ] Links work and point to correct resources
- [ ] Screenshots/examples are relevant
- [ ] No copy-paste errors (customer name, dates, etc.)

**[x] Efficiency:**
- [ ] Response is concise (target <200 words for simple questions)
- [ ] Uses bullet points or numbered lists (easier to scan)
- [ ] Highlights most important action at the top (TL;DR style)
- [ ] Avoids unnecessary back-and-forth (ask all questions upfront)

---

## Customer Satisfaction (CSAT) Measurement

### How We Measure Success

**1. CSAT Survey (After Ticket Resolution)**

Send this survey 24 hours after closing each ticket:

```
Hi [Customer Name],

Your support ticket has been resolved! We'd love your feedback.

**How satisfied were you with our support?**
[*][*][*][*][*] (5 = Very satisfied, 1 = Very unsatisfied)

**Optional: What could we improve?**
[Open text field]

Thank you!
[2-minute survey link]
```

**Target Metrics:**
- CSAT Score: 4.5+/5.0 (90%+ satisfaction rate)
- Response rate: 30%+ of customers complete survey
- Track monthly trend (improving vs declining)

**Action Triggers:**
- <4.0 score: Immediate follow-up call from founder
- 2 consecutive <4.5 months: Review support process for gaps
- Negative feedback: Log common themes, address in training

---

**2. Net Promoter Score (NPS) - Quarterly**

Send to all active R1 subscribers every 3 months:

```
Hi [Customer Name],

Quick question:

**On a scale of 0-10, how likely are you to recommend R1 Template Support to another restaurant owner?**
[0 1 2 3 4 5 6 7 8 9 10]
(0 = Not at all, 10 = Extremely likely)

**Optional: What's the main reason for your score?**
[Open text]

Thanks!
```

**Scoring:**
- Promoters (9-10): Happy customers, likely to refer
- Passives (7-8): Satisfied but not enthusiastic
- Detractors (0-6): Unhappy, high churn risk

**NPS Formula:** % Promoters - % Detractors
- **Target:** NPS > 50 (world-class SaaS standard)
- **Minimum:** NPS > 30 (acceptable)
- **Red flag:** NPS < 20 (urgent intervention needed)

**Actions:**
- Detractors: Personal call from founder within 48 hours (retention effort)
- Passives: Ask "What would make this a 9 or 10?"  ->  feature requests
- Promoters: Ask for referral or testimonial

---

**3. First-Contact Resolution (FCR) - Internal Metric**

Track: What % of tickets resolved in first response (no back-and-forth needed)?

**Target:** 70%+ FCR (industry standard for technical support)

**How to Improve FCR:**
- Better response templates (anticipate follow-up questions)
- Ask comprehensive diagnostic questions upfront
- Provide screenshots/videos, not just text
- Build robust FAQ/knowledge base (customers self-serve)

---

**4. Support Load Tracking (Efficiency)**

Track weekly:
- Total tickets received
- Total hours spent on support
- Average time per ticket
- Tickets by category (data, bugs, customization, etc.)

**Target Metrics:**
- <5 hours/week total at 30 subscribers (10 minutes/subscriber/month avg)
- <30 minutes per ticket average
- <10% repeat tickets (same customer, same issue)

**Efficiency Improvements:**
- If >5h/week: Create more video tutorials (self-service)
- If >30 min/ticket: Update templates to be more comprehensive
- If >10% repeat: Root cause analysis, fix underlying issue

---

## Daily/Weekly Support Workflow

### Daily Checklist (10-15 minutes/day)

**Morning (9am WIB):**
- [ ] Check email inbox for new tickets (label as "New")
- [ ] Triage by priority (P0/P1/P2/P3)
- [ ] Respond to all P0/P1 tickets immediately
- [ ] Respond to at least 50% of P2 tickets (rest by EOD)

**Afternoon (3pm WIB):**
- [ ] Check WhatsApp Business for urgent messages
- [ ] Follow up on pending tickets (waiting for customer response)
- [ ] Close resolved tickets (move to "Resolved" label)
- [ ] Update FAQ if encountered new common question

**End of Day (6pm WIB):**
- [ ] Ensure all P2 tickets responded to (within 24h SLA)
- [ ] Set reminders for P3 tickets (respond within 48h)
- [ ] Log time spent on support (for metrics)

---

### Weekly Checklist (30-60 minutes/week)

**Friday End of Week:**
- [ ] Review support metrics:
 - Total tickets this week vs last week (trending up/down?)
 - Average response time (meeting SLA?)
 - CSAT scores (any <4.0 need attention?)
 - Total hours spent (under 5h target?)

- [ ] Identify patterns:
 - Most common question category this week?
 - Any new bugs reported multiple times?
 - Feature requests mentioned by 2+ customers?

- [ ] Update documentation:
 - Add new FAQ entries (if common question emerged)
 - Update response templates (if found better approach)
 - Create tutorial video (if >5 tickets on same topic)

- [ ] Escalate to founder:
 - P0 tickets that took >24h to resolve (post-mortem)
 - Feature requests with 3+ votes
 - Product bugs confirmed and reproducible

---

### Monthly Checklist (2-3 hours/month)

**First Monday of Month:**
- [ ] Send CSAT survey to all customers who had tickets last month
- [ ] Review monthly support metrics report:
 - Total tickets/month
 - CSAT trend (improving/declining?)
 - Most common issue category
 - Support hours/week trend

- [ ] Update product team on template improvements needed:
 - Top 3 feature requests
 - Top 3 bugs reported
 - Top 3 UX/UI pain points

- [ ] Self-review & training:
 - Read 1-2 support best practice articles
 - Watch Power BI tutorial (stay current with product updates)
 - Review own responses (any mistakes or better approaches?)

---

## Out-of-Scope Requests (How to Say No Politely)

### When Customer Asks for Something Beyond Support Scope

**Scenario 1: Custom Development**
> Customer: "Can you build a custom dashboard that tracks employee schedules?"

**Response:**
```
Hi [Customer Name],

Great idea! However, custom dashboard development is beyond the scope of R1 Template Support (which covers usage of the existing template).

**Options:**
1. **Consulting Service:** We offer custom development at Rp 500K-1M per dashboard (depending on complexity). I can connect you with our consulting team if interested.
2. **Feature Request:** If this would benefit multiple restaurants, I can add "Employee Scheduling Dashboard" to our feature roadmap. No guarantees on timing, but if popular, we may build it into the template!

Let me know which option you prefer!

Best regards,
[Support Team]
```

**Boundary:** Support covers existing template. Custom work = consulting (paid separately).

---

**Scenario 2: Power BI Training (Not Template Support)**
> Customer: "Can you teach me how to create DAX measures from scratch?"

**Response:**
```
Hi [Customer Name],

I'd love to help! However, general Power BI training (DAX, M query, etc.) is outside the scope of R1 Template Support.

**R1 covers:**
- How to use the template we provided (import data, interpret metrics, customize visuals)
- Troubleshooting issues specific to our template

**For Power BI training:**
- **Microsoft Learn - DAX Basics** - Free official course
- **Power BI Community Forums** - Ask general Power BI questions
- Udemy: "Power BI for Beginners" - Rp 200K course

**If your question is about a specific metric in our template**, I'm happy to explain how it's calculated!

Best regards,
[Support Team]
```

**Boundary:** We support OUR template, not Power BI in general.

---

**Scenario 3: Data Entry Services**
> Customer: "Can you import my POS data for me every week? I'm not technical."

**Response:**
```
Hi [Customer Name],

I understand data import can be tricky at first! However, we don't offer data entry services (would require access to your POS system which has security concerns).

**What I CAN do:**
1. Create a video tutorial specific to your POS system (one-time, 10 min)
2. Walk you through the process once via screenshare (one-time setup call)
3. Simplify the template to make import easier (if current process is too complex)

**What we DON'T do:**
- Weekly/recurring data imports (not scalable, security risk)
- Access to your POS system or sensitive business data

Would option 1 or 2 help? Let me know!

Best regards,
[Support Team]
```

**Boundary:** We empower customers to use tools. We don't do the work for them (recurring services).

---

## Related Documents

**Internal Operations:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/operations/support-runbook|Support Runbook]] - Detailed troubleshooting guides
- [[products/01-power-bi-template/operations/06-gate-tracking|Gate Tracking Dashboard]] - Conversion, churn, support load metrics
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/operations/onboarding-guide|Onboarding Guide]] - Customer onboarding workflow
- [[products/02-template-support/operations/template-update-sop|Template Update SOP]] - Monthly update creation process

**Training & Resources:**
- [[products/02-template-support/training/support-agent-guide|Support Agent Guide]] - Onboarding for new support staff
- [[products/02-template-support/training/kb-article-templates|KB Article Templates]] - Self-service article creation
- [[products/02-template-support/training/video-tutorial-scripts|Video Tutorial Scripts]] - 12-month content calendar
- [[products/02-template-support/training/how-to-get-support|How to Get Support]] - Customer-facing support guide

**Product Strategy:**
- [[products/02-template-support/product-strategy/product-strategy|Product Strategy]] - R1 positioning, pricing, roadmap
- [[products/02-template-support/product-strategy/product-scope|Product Scope]] - What's included in R1 subscription
- [[products/02-template-support/product-strategy/premium-support-tiers|Premium Support Tiers]] - R2/R3 future tiers

**Legal & Compliance:**
- [[products/02-template-support/legal/sla-definitions|SLA Definitions]] - Service level commitments
- [[products/02-template-support/legal/subscription-terms|Subscription Terms]] - Legal agreement for subscribers

---

## Key Performance Indicators (KPIs)

Track these weekly/monthly to ensure support quality:

| Metric | Target | Measurement Frequency | Alert Trigger |
|--------|--------|----------------------|---------------|
| **Response Time SLA** | <24h email, <4h WhatsApp | Daily | >3 SLA misses/week |
| **CSAT Score** | 4.5+/5.0 | After each ticket | <4.0 individual score |
| **NPS Score** | >50 | Quarterly | <30 |
| **First Contact Resolution** | 70%+ | Weekly | <60% for 2 weeks |
| **Support Hours/Week** | <5h at 30 subs | Weekly | >8h |
| **Avg Time/Ticket** | <30 minutes | Weekly | >45 min avg |
| **Monthly Churn Rate** | <20% | Monthly | >25% for 2 months |
| **Ticket Volume Trend** | Decreasing (more self-serve) | Monthly | Increasing >20% |

---

## Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-01-04 | 2.0 | Major expansion: Added response templates, escalation decision tree, quality standards, CSAT measurement, daily/weekly workflows, boundary scenarios | Product Analysis Team |
| 2025-12 | 1.0 | Initial SOP (basic version) | Support Team |

---

**Last Updated:** January 4, 2026
**Next Review:** Month 2 (after first 10 subscribers, validate templates work in practice)
**Owner:** Support Team (Founder initially, then dedicated support hire at 30+ subscribers)


