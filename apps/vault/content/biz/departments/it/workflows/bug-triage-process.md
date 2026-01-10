# Bug Triage Process  
**Prioritizing & Assigning Bug Fixes**

**Owner:** Engineering Team  
**Status:** ACTIVE

---

## Bug Severity Levels

**P0 - Critical:**
- System down (customers can't access)
- Data loss or corruption
- Security vulnerability

**Action:** Fix immediately (drop everything)

**P1 - High:**
- Core feature broken (can't upload data)
- Affects >50% of users
- Workaround exists but painful

**Action:** Fix within 24 hours

**P2 - Medium:**
- Minor feature broken
- Affects <50% of users
- Easy workaround available

**Action:** Fix within 1 week

**P3 - Low:**
- Cosmetic issues (typos, UI glitches)
- Edge case scenarios
- Nice-to-have improvements

**Action:** Fix when capacity allows (backlog)

---

## Triage Process

### Step 1: Bug Reported
- Customer reports via support ticket
- OR Internal team finds in testing
- Creates GitHub issue

### Step 2: Initial Assessment (CS or QA)
- Reproduce bug (can we replicate?)
- Assess severity (use criteria above)
- Tag with priority label (P0-P3)

### Step 3: Engineering Review
- Lead reviews all P0-P1 bugs (daily)
- Assigns to engineer
- Sets deadline

### Step 4: Fix & Deploy
- Engineer fixes bug
- Code review + testing
- Deploy to production

### Step 5: Verify & Close
- QA verifies fix (or originalreporter)
- Close GitHub issue
- Notify customer (if external report)

---

## Triage Meeting

**When:** Daily standup (15 min)  
**Who:** Engineering team  
**Agenda:**
- Review new P0-P1 bugs
- Assign owners
- Update status on in-progress fixes

---

## Bug Template (GitHub Issue)

```markdown
**Title:** [Brief description]

**Severity:** P0 / P1 / P2 / P3

**Steps to Reproduce:**
1. Go to [page]
2. Click [button]
3. See error

**Expected:** [What should happen]  
**Actual:** [What actually happens]  

**Environment:**
- Browser: Chrome 120
- OS: Windows 11
- User ID: 12345

**Screenshot:** [If applicable]
```

---

## SLA by Priority

| Priority | Response Time | Fix Time |
|----------|--------------|----------|
| P0 | <1 hour | <4 hours |
| P1 | <4 hours | <24 hours |
| P2 | <24 hours | <1 week |
| P3 | <3 days | Backlog |

---

**Status:** ACTIVE  
**Tools:** GitHub Issues, Slack #bugs channel
