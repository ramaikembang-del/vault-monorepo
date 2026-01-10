# Support Runbook - Template Support Subscription

**Product:** R1 - Template Support
**SLA:** <24h weekday, <48h weekend
**Channels:** Email (primary), WhatsApp (urgent only)

---

## Support Channels

### Email: support@pwbifnbgrowth.com

**Tool:** Gmail with labels
**Labels:**
- New (unread)
- In Progress
- Resolved
- Escalated (complex, needs expert)
- Urgent (data loss, won't open)

**SLA:**
- New ticket → First response: <24h weekday, <48h weekend
- In Progress → Resolution target: <48h for common issues
- Urgent → Jump to front of queue, <12h response

---

### WhatsApp Business: [Number - Subscriber Only]

**Use Cases:**
- Urgent only: Data loss, dashboard won't open, critical bug
- NOT for: General questions, setup help, "how do I...?" (use email)

**Auto-Reply Message:**
```
Thanks for contacting PWBI Support via WhatsApp.

WhatsApp is for URGENT issues only:
- Dashboard won't open
- Data loss
- Critical bugs

For general questions, please email:
support@pwbifnbgrowth.com

We'll respond to urgent issues within 4 hours (weekdays).
```

**SLA:** <4h weekday response for critical issues

---

## Ticket Categories & Responses

### Category 1: Setup Questions

**Common Questions:**
- "How do I install Power BI Desktop?"
- "How do I import CSV from my POS?"
- "What's my Google Drive link?"

**Canned Response Template:**
```
Hi [Name],

Thanks for reaching out!

**[ANSWER TO SPECIFIC QUESTION]**

For [Question Type]:
1. [Step 1]
2. [Step 2]
3. [Step 3]

 Full guide here: [Link to documentation]
 Video tutorial (5 min): [YouTube link]

Still stuck? Reply with a screenshot and I'll help.

Best,
[Your Name]
PWBI Support
```

**Average Resolution Time:** <1h (canned responses available)

---

### Category 2: Troubleshooting

**Common Issues:**
1. "Dashboard won't open"
2. "Data won't refresh"
3. "Charts show errors"
4. "CSV import fails"

#### Issue 2.1: Dashboard Won't Open

**Diagnostic Questions:**
- What's the error message? (screenshot?)
- Did it work before, or first time opening?
- Which Power BI version? (Help → About)

**Common Causes & Fixes:**

**A. Wrong Power BI Version**
```
Your dashboard requires Power BI Desktop (free version).

Download here: [Microsoft Link]
Install → Try opening .pbix again.
```

**B. Corrupted File**
```
Your .pbix file might be corrupted.

Try:
1. Re-download from Google Drive
2. Check file size (should be ~10MB)
3. Open fresh download

Still broken? Reply and I'll send backup copy.
```

**C. Missing SQL Server Connection**
```
Dashboard can't find data source.

Fix:
1. Open Power BI Desktop
2. Click "Transform Data" → "Data Source Settings"
3. Change path to your local SQL Server
4. Refresh

Need help? I can screen-share (15 min).
```

**Escalation:** If >3 back-and-forths, offer screen-share or upgrade to Tier 3 Fully Managed

---

#### Issue 2.2: Data Won't Refresh

**Diagnostic:**
- Did CSV import work? (check SQL database)
- Any error messages in Power BI?
- Is POS CSV format correct?

**Common Causes:**

**A. CSV Format Changed**
```
Your POS updated and CSV columns changed.

I see the issue - column "Tanggal" is now "Date".

Quick fix:
1. I'll send updated import script
2. Run script to re-map columns
3. Refresh should work

[Attached: updated_import.sql]

Let me know if it works!
```

**B. Date Format Wrong**
```
Power BI doesn't recognize your date format.

Your CSV: 25/12/2025
Power BI expects: 2025-12-25

Fix: Use our CSV converter tool
[Link to converter]

Or reply and I'll convert for you (1-time help).
```

---

### Category 3: Feature Requests

**Template:**
```
Hi [Name],

Great idea! We're always improving the template.

Your request: [Summarize request]

I've added it to our feature voting list.

We prioritize features by:
1. How many subscribers request it
2. Technical feasibility
3. Alignment with roadmap

Next feature vote: [Date]
Your vote counts!

In the meantime, here's a workaround:
[Suggest manual solution if possible]

Best,
[Your Name]
```

**Track:** Add to Google Sheet "Feature Requests" (Name, Request, Date, Votes)

---

### Category 4: Billing/Account

**Common Questions:**
- "How do I cancel?"
- "Can I get refund?"
- "Payment failed, what now?"

#### 4.1: Cancellation Request

**Template:**
```
Hi [Name],

No problem - sorry to see you go!

Your subscription is cancelled effective [Date].

**You Still Keep:**
 Template v[X] (yours forever)
 All videos/docs you downloaded

**You Lose:**
 Future updates
 Email/WhatsApp support

**Why Cancel?** (Optional 30-sec survey)
[Link - helps us improve]

**Changed Your Mind?** Re-subscribe anytime (same price).

Thanks for being a customer!
[Your Name]
```

**Action:** Update spreadsheet (mark as churned), send exit survey

---

#### 4.2: Refund Request

**Policy:** No refunds (monthly subscription, cancel anytime)

**Template:**
```
Hi [Name],

I understand you're not satisfied.

Our policy: No refunds on monthly subscriptions (cancel anytime, no future charges).

However, I want to make this right.

**Can I Help?**
- If technical issue → Let's fix it (screen-share?)
- If not valuable → What would make it valuable?
- If too expensive → We have Rp 50K/month option (not public)

Reply and let's find a solution.

[Your Name]
```

**Escalation:** If still wants refund, offer 1-month credit (goodwill) or escalate to founder

---

### Category 5: Upsell Opportunities

**Signals:**
- "Can you add custom metric?"
- "I have 3 outlets now, can template handle it?"
- "Can you just set this up for me?"

**Template:**
```
Hi [Name],

Great question!

What you're asking for is available in **[Tier 2 Assisted / Tier 3 Fully Managed / Full SaaS Pro]**.

Here's how it works:
[Brief explanation]

Price: [Price]

Interested? Let's schedule 15-min call to discuss:
[Calendly link]

Or stick with current plan - totally fine too!

Best,
[Your Name]
```

**Track:** Add to "Upsell Opportunities" sheet (Name, Current Tier, Requested Feature, Date)

---

## Daily Support Workflow

### Morning Routine (15 minutes)

1. **Check Email Inbox**
 - Label all new emails: New/Urgent/In Progress
 - Prioritize: Urgent → New → In Progress

2. **Check WhatsApp**
 - Any critical issues overnight?
 - Reply to urgent (within 4h SLA)

3. **Triage**
 - New tickets: Can I answer in <5 min? → Respond now
 - Complex tickets: Need >30 min? → Mark "In Progress", block afternoon time

---

### Afternoon Session (1-2 hours)

4. **Resolve In Progress Tickets**
 - Work through complex issues
 - Screen-shares if needed (15-30 min each)

5. **Update Tracking Sheet**
 - Log: Ticket ID, Category, Resolution Time, Satisfaction (if surveyed)

---

### Weekly Review (30 minutes, Friday)

6. **Analyze Support Data**
 - Most common issues? (create FAQ article)
 - Long resolution times? (need better docs)
 - Upsell opportunities? (follow up)

7. **Report to Founder**
 - Total tickets this week
 - Average resolution time
 - Feature requests (top 3)
 - Escalations (if any)

---

## Escalation Paths

### When to Escalate

**Technical Escalation (to Developer):**
- Bug in template code
- SQL script error
- Complex Power BI issue

**Business Escalation (to Founder):**
- Refund >Rp 150K requested
- Angry customer threatening review
- Upsell opportunity >Rp 5M

**Template:**
```
[To: Founder/Developer]

Escalation Request:

Customer: [Name]
Issue: [Brief summary]
Attempted: [What you tried]
Why Escalating: [Technical complexity / Business decision needed]
Urgency: [Low / Medium / High]

Thread below:
[Email thread]
```

---

## Support Tools & Resources

### Canned Responses (Gmail)

Create 20+ templates for common questions:
- Template Category: Setup (5 templates)
- Template Category: Troubleshooting (10 templates)
- Template Category: Billing (5 templates)

**How to Use:** Gmail Settings → Canned Responses → Insert template → Customize [Name] → Send

---

### Knowledge Base (Internal)

**Google Doc:** "Support Knowledge Base"

Sections:
1. Setup FAQs (10 articles)
2. Troubleshooting Guide (15 common issues + fixes)
3. Best Practices (how to use template effectively)
4. POS-Specific Guides (Moka, Pawoon, Qasir setup)

**Update:** Add new article every time new issue appears 3× times

---

### Tracking Spreadsheet

**Google Sheet:** "Support Tracker"

Columns:
- Date
- Customer Name
- Tier (Tier 1/2/3)
- Category (Setup/Troubleshooting/Billing/Feature)
- Issue Summary
- Resolution Time (hours)
- Status (New/In Progress/Resolved)
- Notes

**Use:** Weekly analysis (common issues, resolution time trends)

---

## Success Metrics

**Response Time:**
- <24h: 90%+ tickets (weekday)
- <48h: 100% tickets (weekend)

**Resolution Time:**
- Simple (canned response): <1h
- Medium (troubleshooting): <4h
- Complex (screen-share): <24h

**Support Load:**
- Target: <5h/week at 30 subscribers
- Alert: >10h/week = need better docs OR price too low

**Customer Satisfaction:**
- Follow-up survey (optional): "How was support?" (1-5 stars)
- Target: 4.5+ average

---

**Related Documents:**
- [[products/02-template-support/product-strategy/product-scope|product-scope.md]] - What support includes
- [[products/02-template-support/operations/onboarding-guide|onboarding-guide.md]] - Post-subscription emails
- [[products/02-template-support/specifications/product-requirements|product-requirements.md]] - Support user stories

**Last Updated:** 2025-12-26
**Owner:** Support Lead (Founder in Sprint 1)
