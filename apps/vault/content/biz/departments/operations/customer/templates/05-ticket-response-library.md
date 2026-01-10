# Ticket Response Library

**Last Updated:** 2025-12-27

---

## Common Issues & Response Templates

### 1. POS Not Syncing

**Customer:** "My POS isn't syncing"

**Response:**
```
Hi [Name],

Let me help you fix the POS sync issue.

Please check:
1. Is your POS system online and working?
2. In PWBI Settings → Integrations, what's the sync status?
3. When was the last successful sync?

[Screenshot showing where to check]

Common fixes:
- Reconnect POS (click "Reconnect" button)
- Verify API credentials are still valid
- Check POS hasn't been updated (may need re-auth)

Try these and let me know what you see. I'm standing by to help!
```

**Escalate if:** Still not working after 2 attempts

---

### 2. Data Doesn't Match POS

**Customer:** "Numbers don't match my POS"

**Response:**
```
Hi [Name],

Let's figure out the discrepancy together.

Can you share:
1. Date range you're comparing
2. Specific number that's different (PW BI shows X, POS shows Y)
3. Screenshot from both systems

Common causes:
- Different date filters (PWBI showing calendar month, POS showing custom range)
- PWBI showing revenue, POS showing subtotal (before tax/tip)
- Refunds/voids handled differently

Once I see the screenshots, I can pinpoint the exact cause!
```

---

### 3. Can't Log In

**Customer:** "Forgot password" or "Account locked"

**Response:**
```
Hi [Name],

No problem, let's get you back in!

**Forgot password:**
1. Go to app.pwbi.id
2. Click "Forgot Password"
3. Check email (including spam folder)
4. Follow reset link

**Account locked:**
Your account was locked after multiple failed login attempts (security feature).
I've unlocked it. Please try again or reset your password.

**Still having issues?**
Reply with your registered email and I'll verify your account.
```

---

### 4. Export Not Working

**Customer:** "Can't export report to Excel"

**Response:**
```
Hi [Name],

Let's troubleshoot the export issue:

1. Which report are you trying to export?
2. What happens when you click Export? (Error message, nothing, downloads but blank?)
3. What browser are you using?

**Quick fixes to try:**
- Clear browser cache
- Try different browser (Chrome recommended)
- Disable browser extensions temporarily
- Check popup blocker isn't blocking download

If still not working, I can manually export and email you the report while we fix this!
```

---

### 5. Billing Question

**Customer:** "Why was I charged X?"

**Response:**
```
Hi [Name],

Let me clarify your billing.

You were charged Rp [X] on [Date] for:
- [Product/Tier]: Rp [Y]
- PPN 11%: Rp [Z]
- Total: Rp [X]

This is for your [monthly/annual] subscription renewing on [date].

[Attach invoice]

Questions about the charge? Reply and I'll break it down further!

**To update billing:** Settings → Billing → Payment Methods
```

**Escalate to finance if:** Dispute or refund request

---

### 6. Feature Request

**Customer:** "Can you add feature X?"

**Response:**
```
Hi [Name],

Great idea! I love that you're thinking about how to improve PWBI.

I've logged your request for [feature X] with our product team.

**Can you help me understand:**
- What would this feature help you accomplish?
- How often would you use it?
- Any workarounds you're using now?

This helps us prioritize! I can't promise timeline, but I'll keep you posted if it gets added to our roadmap.

In the meantime, here's how you might achieve similar results: [workaround if available]
```

---

### 7. Slow Performance

**Customer:** "Dashboard is slow/laggy"

**Response:**
```
Hi [Name],

Sorry about the slowness! Let's speed things up.

**Quick questions:**
1. How much data do you have? (months of history, transactions/day)
2. Which dashboard/report is slow?
3. What's your internet speed? (test at speedtest.net)

**Try these optimizations:**
- Reduce date range (last 30 days instead of all time)
- Use summary reports instead of transaction-level
- Close other browser tabs
- Clear browser cache

**On our end:**
I'll check if there are any system issues. Current status: [check status page]

If still slow after trying these, let me know and I'll escalate to engineering!
```

---

### 8. General "Help!"

**Customer:** "I don't know how to do X"

**Response:**
```
Hi [Name],

Happy to help! Let me walk you through [task X]:

**Step-by-step:**
1. [Step 1 with screenshot]
2. [Step 2 with screenshot]
3. [Step 3 with screenshot]

**Video tutorial:** [Link if available]
**Help article:** [KB link]

Try these steps and let me know if you get stuck!

Want a quick screen share instead? I can show you: [Calendar link]
```

---

## Response Best Practices

**Tone:**
- Friendly, helpful, empathetic
- No jargon (or explain if needed)
- Indonesian context (Bahasa OK if customer prefers)

**Structure:**
- Acknowledge issue
- Ask clarifying questions OR provide solution
- Give next steps
- Offer escalation path

**Timing:**
- First response: <4 hours (business hours)
- Follow-ups: <24 hours
- Resolution: Based on SLA (see SLA template)

**Always:**
- Personalize (use their name, restaurant name)
- Proofread before sending
- Log in CRM
- Update ticket status

---

## Related

- **[[biz/departments/operations/customer/customer|Customer Operations]]** - Parent directory
- **[[biz/departments/operations/customer/templates/03-sla-tracking-template|SLA Tracking]]** - Response time expectations
- **[[biz/departments/operations/customer/templates/04-escalation-email-template|Escalation Email]]** - When standard responses aren't enough
- **[[biz/departments/operations/customer/templates/06-knowledge-base-article-template|KB Article Template]]** - Create help articles from common responses

**Last Updated:** 2025-12-27
