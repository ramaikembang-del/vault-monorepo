# Roles & Responsibilities - RACI Matrix & Decision Authority

**PWBI F&B Growth**
**Last Updated:** 2026-01-05
**Source of Truth:** `compensation/01-early-team-compensation.md`

> [!NOTE]
> **RACI Legend:**
> * **R = Responsible (The Doer):** The person who actually does the work. They own the deadline.
> * **A = Accountable (The Approver):** The one person with the "buck stops here" authority. They own the outcome.
> * **C = Consulted (The Voice):** Two-way communication. Their input is required *before* the decision.
> * **I = Informed (The Ear):** One-way communication. They are told *after* the decision.

---

## Executive Summary

**The Co-Founder Dynamic:**
This is a partnership between **Technology (Builder)** and **Industry (Partner)**.
* **Partner 1 (Strategy & Tech)** owns the *Solution* (Code, Architecture, Security).
* **Partner 2 (Field Ops & Prod Dev)** owns the *Problem* (Market Needs, Pricing, User Reality, Revenue).

**Escalation Principle:**
> "If it costs <Rp 5M and is reversible, deciding wrong and fixing it is cheaper than asking permission."

---

## Key Decision Categories (Detailed)

### 1. Product & Roadmap Decisions

**Scenario:** *A big customer wants a custom "Inventory Module" that isn't on the roadmap yet. They will pay Rp 50M upfront.*

| Decision | Partner 1 (Strategy & Tech) | Partner 2 (Field Ops & Prod Dev) | Tech Lead (Hire 2) | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Annual Product Strategy** | **A/R** | **R** | C | **Shared Ownership.** Partner defines *Market Need*; Builder defines *Tech Feasibility*. |
| **Sprint Prioritization** | C | **A** | C | Partner decides *what* matters most to customers right now. |
| **Custom Feature Requests** | C | **A** | C | Partner assesses if this is a "real need" or just a distraction. |
| **UI/UX Design Specs** | I | **A/R** | C | Partner knows the "Kitchen Reality" (e.g., big buttons, dark mode). |
| **Technical Architecture** | **A** | I | **R** | Builder ensures scalability vs speed trade-off. |
| **Bug Triage (Severity)** | I | **R** | **A** | Tech decides if a bug is a "Drop Everything" event. |

**The Nuance:** The Partner is the "Product Manager" in the early days because they know the *Industry*. The Builder builds what the Partner validates.

---

### 2. Pricing & Packaging Decisions

**Scenario:** *We are losing deals because our Rp 25M Enterprise tier is "too expensive" compared to a competitor.*

| Decision | Partner 1 (Strategy & Tech) | Partner 2 (Field Ops & Prod Dev) | Tech Lead (Hire 2) | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Pricing Strategy (Tiers)** | C | **A** | I | Partner knows the customer's P&L and ability to pay. |
| **Discounting (<15%)** | I | **A** | - | Enable Partner to close deals fast. |
| **Discounting (>15%)** | R | **A** | - | Partner has P&L ownership of Revenue. |
| **Free Trial Duration** | C | **A** | I | Partner decides optimal time-to-value. |
| **Custom Enterprise Quotes** | R | **A** | C | Partner structures the deal terms. Builder validates cost. |

---

### 3. Go-to-Market & Marketing Decisions

**Scenario:** *We want to spend Rp 10M to sponsor a local F&B event next month.*

| Decision | Partner 1 (Strategy & Tech) | Partner 2 (Field Ops & Prod Dev) | Tech Lead (Hire 2) | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Marketing Budget (>Rp 5M)** | **A** | R | - | Cash flow control (Founder veto on Burn). |
| **Ad Creative / Copy** | I | **A/R** | - | Partner speaks the "Chef/Owner" language perfectly. |
| **Content Calendar** | C | **A/R** | - | Partner drives Thought Leadership (Industry Credibility). |
| **Event Sponsorships** | C | **A/R** | - | Partner leverages their network. |
| **Brand Positioning** | C | **A** | - | Partner defines "Who we serve". |

---

### 4. Sales & Customer Acquisition

**Scenario:** *A qualified lead asks for a refund after 2 weeks because they "didn't have time to use it".*

| Decision | Partner 1 (Strategy & Tech) | Partner 2 (Field Ops & Prod Dev) | Tech Lead (Hire 2) | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Sales Quota Targets** | C | **A** | - | Partner commits to the revenue number. |
| **Refund Approval (<Rp 2M)** | I | **A** | - | "Customer Obsession" autonomy. |
| **Refund Approval (>Rp 2M)** | C | **A** | - | Partner owns churn metrics. |
| **Firing a Customer** | C | **A** | I | Partner protects the brand reputation. |
| **Lead Qualification** | I | **A/R** | - | Partner defines the ICP (Ideal Customer Profile). |

---

### 5. Customer Success & Support

**Scenario:** *A critical bug wipes out a customer's customized dashboard.*

| Decision | Partner 1 (Strategy & Tech) | Partner 2 (Field Ops & Prod Dev) | Tech Lead (Hire 2) | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Support SLA Targets** | C | **A** | C | Partner sets expectation based on Hospitality standards. |
| **Escalation (Technical)** | I | C | **A/R** | Tech owns the fix. |
| **Apology / Compensation** | C | **A** | I | Partner owns the relationship repair. |
| **Onboarding Workflow** | I | **A/R** | I | Partner designs the "First 30 Days". |

---

### 6. Finance & Operations

**Scenario:** *Partner needs a $99/mo subscription to a new SEO tool.*

| Decision | Partner 1 (Strategy & Tech) | Partner 2 (Field Ops & Prod Dev) | Tech Lead (Hire 2) | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Monthly Burn Rate** | **A** | C | I | Founder owns the bank account & runway. |
| **New Hires** | **A** | C | C | Founder final call on headcount/equity. |
| **Tool Cost (<$50/mo)** | I | **A** | **A** | "Don't ask, just do." |
| **Tool Cost (>$50/mo)** | **A** | R | R | Needs ROI justification. |

---

### 7. Legal & Compliance

**Scenario:** *A customer demands we sign THEIR Non-Disclosure Agreement (NDA) before a demo.*

| Decision | Partner 1 (Strategy & Tech) | Partner 2 (Field Ops & Prod Dev) | Tech Lead (Hire 2) | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Contract Modifications** | **A** | R | - | Founder + Legal Counsel. |
| **Data Privacy (GDPR/PDP)** | **A** | C | **R** | Tech implements security controls. |
| **IP Decisions** | **A** | - | - | Patents, Trademarks, Equity. |

---

## Decision-Making Frameworks (The "How")

### Framework 1: The "Two-Way Door" (Speed)
Most decisions (90%) are reversible.
* **Examples:** Changing a button color, testing a new ad headline, refunding a small amount.
* **Protocol:** **"Disagree and Commit."** If the Founder disagrees but it's a Two-Way Door, the Founder should say: *"I bet against this, but I trust you. Go for it."*

### Framework 2: The "One-Way Door" (Safety)
Some decisions (10%) cannot be undone without pain.
* **Examples:** Firing a key employee, Giving away equity, Changing the database architecture, Signing a 2-year lease.
* **Protocol:** **"Co-Founder Consensus."** Both partners must agree. If there is a deadlock, we pause and get more data. No "Veto" unless it kills the company.

### Framework 3: The "Budget Box"
* **Green Zone (<Rp 1M):** Just spend it. Report later.
* **Yellow Zone (Rp 1M - 5M):** Slack message approval ("Can I spend Rp 2M on this event?").
* **Red Zone (>Rp 5M):** Proposal required. Discuss in weekly sync.

---

## Partner Collaboration Guide (How Partners Work Together)

**1. Communication Style:**
* **Default:** Async text (Slack/Linear).
* **Call me when:** It's a P1 crisis or you need an emotional check-in.
* **Don't:** Send "Hello" and wait. Send "Hello, I have a problem with X, I tried Y, I propose Z."

**2. My Blind Spots (Help me here):**
* **Industry Reality:** I don't know what happens in a chaotic kitchen during rush hour. **Stop me from building features that require uninterrupted focus.**
* **Code Perfection:** I tend to over-engineer. **Remind me that "Good enough" sells.**
* **Social Capital:** I hate asking for favors. **Use your network to get us in doors I can't open.**

**3. How to win my trust:**
* **Domain Authority:** Educate me. "In my last restaurant, we did X because Y."
* **Frugality:** Treat the company money like your own (because with equity, it kind of is).
* **Bad News First:** Never hide a problem. If we lost a customer, tell me immediately.

---

## Collaboration Rituals (Agenda Templates)

### 1. Weekly Planning Sync (Monday, 10:00 AM)
* **Duration:** 30 Mins.
* **Agenda:**
 * **Scoreboard (5m):** Review last week's Metrics (Leads, Revenue, Churn).
 * **Retrospective (5m):** One big win, One big blocker from last week.
 * **Commitments (15m):** What is the **ONE Thing** each person *must* ship this week?
 * **Triage (5m):** Who needs help?

### 2. Product Review (Wednesday, 2:00 PM)
* **Duration:** 45 Mins.
* **Agenda:**
 * **Demo Day:** Builder shows (don't tell) work in progress.
 * **Trust But Verify:** Partner tests it against "Kitchen Logic". "Would a server use this with wet hands?"
 * **Unblock:** "I am stuck on this API feature."

### 3. Monthly Strategic Review (Last Friday)
* **Duration:** 2 Hours (Lunch).
* **Agenda:**
 * **Burn Rate Check:** Are we on track for runway?
 * **Strategy Pivot:** Do we need to change direction?
 * **Team Health:** How are we feeling? (Burnout check).

---

## Scenario: Deadlock Resolution
* **Situation:** The Partner wants a feature *now* to close a deal. The Tech says the code is *ugly* and needs refactoring first. They are stuck.
* **Resolution Protocol:**
 1. **Founder Asks:** "Is this technical debt reversible?"
 2. **If Yes:** Prioritize Speed (Launch). The Partner's revenue goal takes precedence in Phase 2.
 3. **If No (Security risk / Data loss):** Prioritize Stability (Refactor). The Builder's security mandate takes precedence.
 4. **Tie-Breaker:** If still stuck, flip a coin or do a 1-week "Spike" (Experiment) to test the necessity.

---

**Related Documents:**
- **[[biz/departments/hr/strategy/02-org-structure|Org Structure & Scaling]]**
- **[[biz/departments/hr/strategy/01-hiring-playbook|Hiring Playbook]]**
- **[[biz/departments/finance/budgeting/02-budget-planning|Budget Planning]]**

---

---

## Common Anti-Patterns (How this breaks)

### 1. The "Pseudo-Partner" (The Glorified Assistant)
* **Symptom:** Founder treats the Partner like a lead gen agency. "Just get me 10 calls, I'll do the rest."
* **Result:** Partner feels undervalued and leaves. Founder remains the bottleneck.
* **Fix:** Give them the keys. Let them change the pricing. Let them rewrite the pitch.

### 2. The "Silent Resentment" (The Equity Trap)
* **Symptom:** Partner feels they are working harder than the Founder (or vice versa), but says nothing because "we are partners."
* **Result:** Explosion after 6 months.
* **Fix:** The "RETROSPECTIVE" in the Weekly Sync. Force the question: "Do you feel the workload is fair this week?"

### 3. The "Product Veto" (The Code Tyrant)
* **Symptom:** Partner says "Customers hate this feature," and Founder says "But the code is elegant, we keep it."
* **Result:** Churn. Customers leave.
* **Fix:** **Revenue Trumps Code.** If a feature blocks revenue, it changes. Period.

### 4. The "Feature Creep" (The Yes Man)
* **Symptom:** Partner says "Yes" to every customer request to close the deal.
* **Result:** Product becomes a frankenstein monster of custom consulting work.
* **Fix:** Founder has veto power on **Technical Complexity**. "We can build that, but it will cost Rp 100M custom dev fee." (Pricing as a filter).

---

**Related Documents:**
- **[[biz/departments/hr/strategy/02-org-structure|Org Structure & Scaling]]**
- **[[biz/departments/hr/strategy/01-hiring-playbook|Hiring Playbook]]**
- **[[biz/departments/finance/budgeting/02-budget-planning|Budget Planning]]**

