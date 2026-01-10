# Product Requirements - Template Support Subscription

**Product:** R1 - Template Support & Subscription
**Epic:** Recurring Revenue Attachment Product
**Priority:** P0 (Critical for Pillar 2 Retention)

---

## Epic 1: Monthly Template Updates

### US1.1: Automated Update Delivery
**As a** Template Support subscriber
**I want** to receive automatic email notifications when monthly updates are available
**So that** I never miss new features or improvements

**Acceptance Criteria:**
- [ ] Email sent first Monday of every month to all active subscribers
- [ ] Email includes "What's New" summary (3-5 bullet points)
- [ ] Download link to updated .pbix file via Google Drive
- [ ] Version number clearly shown (v1.0, v1.1, v1.2, etc.)
- [ ] Unsubscribe link included (compliance)

**Priority:** P0
**Sprint:** Sprint 1, Week 2
**Estimate:** 1 day (email template + automation)

---

### US1.2: Template Version Control
**As a** subscriber
**I want** to access previous template versions
**So that** I can rollback if new version has issues

**Acceptance Criteria:**
- [ ] Google Drive folder contains last 3 versions
- [ ] Versions clearly named: Template_v1.1_Dec2025.pbix
- [ ] README in folder explains version differences

**Priority:** P1
**Sprint:** Sprint 1, Week 2
**Estimate:** 0.5 day

---

### US1.3: Feature Request Voting
**As a** subscriber
**I want** to vote on which features get built next
**So that** updates are relevant to my needs

**Acceptance Criteria:**
- [ ] Monthly email includes link to feature voting form
- [ ] Google Form with 5-10 feature options
- [ ] Results visible to all subscribers (transparency)
- [ ] Top 3 voted features prioritized for next update

**Priority:** P2
**Sprint:** Sprint 2
**Estimate:** 0.5 day

---

## Epic 2: Priority Email/WhatsApp Support

### US2.1: Email Support Ticketing
**As a** subscriber
**I want** to email support@pwbifnbgrowth.com when I'm stuck
**So that** I get help within 24 hours

**Acceptance Criteria:**
- [ ] Gmail account configured with support@ alias
- [ ] Auto-reply confirms ticket received
- [ ] Labels: New / In Progress / Resolved / Escalated
- [ ] SLA: <24h weekday response, <48h weekend
- [ ] Ticket history saved (searchable)

**Priority:** P0
**Sprint:** Sprint 1, Week 2
**Estimate:** 1 day (Gmail setup + canned responses)

---

### US2.2: WhatsApp Business Support (Urgent Only)
**As a** subscriber with critical issue (data loss, won't open)
**I want** to WhatsApp for urgent help
**So that** I get faster response than email

**Acceptance Criteria:**
- [ ] WhatsApp Business number published to subscribers only
- [ ] Auto-reply: "For urgent issues only, email for general questions"
- [ ] SLA: <4h weekday response for critical issues
- [ ] Escalation path: Complex issues → offer Tier 3 Fully Managed

**Priority:** P1
**Sprint:** Sprint 1, Week 2
**Estimate:** 0.5 day (WhatsApp Business setup)

---

### US2.3: Support Knowledge Base
**As a** subscriber
**I want** to search FAQ before emailing support
**So that** I can self-serve for common questions

**Acceptance Criteria:**
- [ ] 20+ FAQ articles (Google Doc or Notion)
- [ ] Categories: Setup / Usage / Troubleshooting / Best Practices
- [ ] Search functionality (Ctrl+F in single page)
- [ ] Link in welcome email + monthly updates

**Priority:** P2
**Sprint:** Sprint 2
**Estimate:** 2 days (write 20 articles)

---

## Epic 3: Early Access Benefits

### US3.1: Beta Access to E1 Lite Dashboard
**As a** Template Support subscriber
**I want** early access to E1 Lite Dashboard beta
**So that** I can test new products before public launch

**Acceptance Criteria:**
- [ ] Email sent Week 6: "Try Lite Dashboard Beta (free for R1 subscribers)"
- [ ] Download link to beta version
- [ ] Feedback form included
- [ ] Subscribers get lifetime discount (Rp 150K vs Rp 200K Starter tier)

**Priority:** P1
**Sprint:** Sprint 1, Week 6
**Estimate:** 1 day (email campaign)

---

### US3.2: Monthly Webinar Invitation
**As a** subscriber
**I want** to attend monthly Q&A webinars
**So that** I can learn best practices from expert + peers

**Acceptance Criteria:**
- [ ] Monthly webinar (30 minutes, last Friday of month)
- [ ] Zoom link sent to subscribers only
- [ ] Agenda: 10 min tips, 20 min live Q&A
- [ ] Recording sent to no-shows

**Priority:** P2
**Sprint:** Sprint 2, Month 2
**Estimate:** 2h/month ongoing

---

## Epic 4: Subscription Management

### US4.1: Easy Cancellation
**As a** subscriber
**I want** to cancel anytime without hassle
**So that** I don't feel locked in

**Acceptance Criteria:**
- [ ] "Cancel Subscription" link in every email
- [ ] Cancellation confirmed within 24h
- [ ] No retention dark patterns (cancel = immediate, no hoops)
- [ ] Exit survey (optional): "Why did you cancel?"
- [ ] Keep template file after cancel (goodwill)

**Priority:** P0
**Sprint:** Sprint 1, Week 2
**Estimate:** 0.5 day

---

### US4.2: Re-Subscription
**As a** former subscriber
**I want** to re-subscribe easily
**So that** I can resume updates if I change my mind

**Acceptance Criteria:**
- [ ] Same subscription link works for re-subscribe
- [ ] No price penalty (same Rp 75K/month)
- [ ] Access to all updates since cancellation
- [ ] Welcome back email

**Priority:** P1
**Sprint:** Sprint 2
**Estimate:** 0.5 day

---

## Epic 5: Payment Integration

### US5.1: Midtrans Recurring Billing
**As a** subscriber
**I want** automatic monthly billing
**So that** I don't have to remember to pay

**Acceptance Criteria:**
- [ ] Midtrans subscription configured
- [ ] Auto-bill 1st of every month
- [ ] Payment failure email (retry 3× before cancel)
- [ ] Receipt emailed after successful payment

**Priority:** P0 (if automating), P2 (if manual Month 1)
**Sprint:** Sprint 1 (manual) OR Sprint 2 (automated)
**Estimate:** 2 days (Midtrans integration)

---

### US5.2: Manual Payment Option
**As a** subscriber without credit card
**I want** to pay via bank transfer
**So that** I can still subscribe

**Acceptance Criteria:**
- [ ] Bank account details in welcome email
- [ ] Manual tracking spreadsheet (who paid when)
- [ ] Confirmation email after payment verified
- [ ] Grace period: 5 days late = warning, 10 days = paused

**Priority:** P0 (MVP fallback)
**Sprint:** Sprint 1, Week 2
**Estimate:** 1 day (tracking sheet + process)

---

## Non-Functional Requirements

### Performance
- Email delivery: >95% inbox rate (not spam)
- Support response time: <24h average (weekday)
- Update download speed: <2 minutes (10MB .pbix file)

### Security
- Google Drive: Subscriber-only access (not public links)
- Email: No CC field (BCC for mass emails, privacy)
- Payment: PCI-compliant (Midtrans handles, we don't store cards)

### Scalability
- Email system: Support up to 100 subscribers (Gmail limit)
- Support load: <5 hours/week at 30 subscribers (sustainable solo)
- Upgrade path: At 50+ subscribers, migrate to ConvertKit/Intercom

---

## Success Metrics (Gate 1C)

**Attachment Rate:** 30%+ of A1 template buyers subscribe
**Retention:** <20% Month 1 churn
**Support Load:** <5 hours/week average
**Satisfaction:** 4.5+ out of 5 rating

---

**Related Documents:**
- [[products/02-template-support/product-strategy/product-scope|product-scope.md]] - What's included details
- [[products/02-template-support/operations/gate-tracking|gate-tracking.md]] - Gate 1C metrics
- [[products/02-template-support/product-strategy/product-strategy|product-strategy.md]] - Full R1 strategy

**Last Updated:** 2025-12-26
**Owner:** Product Lead
