# Executive Presentation Script (Q&A Format)
## F&B 12Bn Growth Dashboard

**Audience:** C-level, Finance, GM
**Duration:** 10 minutes
**Format:** Conversational Q&A

---

## Related Documents
- [[biz/presentations/company-pitch/05-master-deck|Master Deck]]
- [[biz/presentations/company-pitch/04-executive-summary|Executive Summary]]

---

## Opening (30 seconds)

**You:** "Thank you for your time. I know you're busy, so I'll get straight to it. We have an IDR 4 billion problem, and I think data can help us solve it."

---

## Q1: What's the problem? (2 minutes)

**Them:** "4 billion? What are you talking about?"

**You:** "Our revenue target is 12 billion rupiah this year. Right now, we're on track for 8 billion. That's a 4 billion gap. And here's the real problem: we only find out we missed target at the end of the month, when it's too late to fix it."

**You (continue):** "The Assistant Manager managing our 20 staff members? They're flying blind. They don't know if they're on track today. They don't know which staff are underperforming. They don't know which VIP customers stopped coming. It's all reactive, not proactive."

**Them:** "So you want more reports?"

**You:** "No. Reports are backward-looking. I want to give them a dashboard that shows *today's* performance and tells them *what to do about it*."

---

## Q2: What are you proposing? (2 minutes)

**Them:** "Okay, what's the solution?"

**You:** "A real-time Power BI dashboard with 3 tabs. Think of it as the AM's command center."

**You (Tab 1):** "Tab 1 - Command Center: Shows the gap to 12 billion, what we need to earn today to stay on track, and where revenue is coming from. Is it reservations? Is it upsells? Are we giving too many discounts?"

**You (Tab 2):** "Tab 2 - Wolf Pack: A leaderboard for all 20 staff. Not just sales - a smart Performance Score that's fair across shifts. Plus a new Discipline Score that tracks punctuality, order accuracy, and whether they resolve customer complaints."

**You (Tab 3):** "Tab 3 - Loyalty Loop: Who are our VIPs? Who stopped coming? What's our NPS score? What are customers saying in reviews?"

**Them:** "How is this different from what we have now?"

**You:** "Right now, we have nothing. Just Excel sheets at month-end. This is real-time, mobile-ready, and action-focused. The AM can check it in 5 minutes every morning on their phone."

---

## Q3: Will this actually help us close the gap? (2 minutes)

**Them:** "That sounds nice, but will it actually make a difference?"

**You:** "Here's the math: If this dashboard helps us close the gap just *one month faster*, that's 333 million rupiah in revenue we wouldn't have missed. Even a 1% improvement is 3.3 million rupiah."

**You (continue):** "But it's not just about revenue. It's about the AM making better decisions *daily* instead of guessing. Data-driven coaching instead of gut feel. Catching VIP customers before they leave, not after."

**Them:** "What's the catch? This sounds expensive."

**You:** "Surprisingly affordable. Development is about [X hours] of BI developer time. The data? Already exists in our POS system. We just need to structure it properly. Training? 2 hours for the AM and staff."

---

## Q4: What do you need from us? (1 minute)

**Them:** "What are you asking for?"

**You:** "Three things:"
1. **Budget approval** for the BI developer time
2. **Timeline commitment** - 5 weeks from kickoff to go-live
3. **Your signal** that this is a priority

**You (continue):** "Everything's ready. We have the data model, the metrics defined, even dummy data to test with. We just need the green light to build it."

**Them:** "5 weeks seems fast."

**You:** "We've done all the planning upfront. The comprehensive documentation is in the project folder - 8 files covering everything from metrics to deployment. The developer can start tomorrow."

---

## Q5: What happens after it's built? (1 minute)

**Them:** "Okay, let's say we approve this. What's the ongoing cost?"

**You:** "Minimal. The dashboard refreshes automatically - initially 4 times a day, eventually real-time. No ongoing development unless the AM requests new features."

**Them:** "What features?"

**You:** "That's the smart part. We're building the operational core first - about ~50 metrics total, the ones the AM will use daily. But we've documented ~150 total metrics that the system can already handle. So if they say 'can we add X?', it's hours to add, not weeks. The data model already supports it."

**Them:** "So it scales?"

**You:** "Exactly. We start lean, expand based on actual usage. No over-engineering."

---

## Closing: The Decision (1 minute)

**You:** "Here's what I need from you today: approval to assign a BI developer and commit to a 5-week timeline. If you say yes, we'll have Tab 1 built by next week for you to see."

**Them:** "And if it doesn't work?"

**You:** "Worst case? We spent [X hours] and learned what data we're missing. Best case? We close that 4 billion gap weeks or months earlier because the AM can course-correct every single day instead of every month."

**You (final):** "I can send you the one-page summary and the full project documentation. But honestly? The faster we start, the faster we see if this helps. What do you think?"

---

## Likely Follow-Up Questions

**Q: "Can other managers use this?"**
A: "Absolutely. Once it's built for one AM, we can replicate it for other outlets with row-level security. Same dashboard, filtered by location."

**Q: "What if the staff game the system?"**
A: "The Performance Score has 6 components - it's hard to game all of them. And the Discipline Score tracks things they can't fake: punctuality from the time clock, order accuracy from voided transactions, complaint resolution from customer feedback."

**Q: "Why Power BI and not Excel?"**
A: "Power BI does real-time, handles relationships between tables, works on mobile, and scales. Excel would be 50 tabs and constant manual updates."

**Q: "Who owns this after it's built?"**
A: "The AM is the primary user. The BI developer maintains the backend. Product team handles feature requests. It's a shared tool, not a one-person project."

---

**Handoff Materials:**
- One-pager: `05-one-pager-executive.md`
- Full documentation: `/docs/` folder
- Technical details: `DEPLOYMENT.md`
