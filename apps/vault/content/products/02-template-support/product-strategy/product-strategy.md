# Template Support System Product Strategy
**Pillar 1: Acquisition → Retention (Recurring Revenue)**

**Product Type:** Subscription service for Power BI Template buyers
**Target Segment:** Template buyers (expect 30% conversion)
**Pricing:** Rp 75K/month recurring
**Build Time:** 1-2 days (simple MVP)

---

## Product Scope

### **What's Included in Subscription**

**1. Monthly Template Updates**
- New metrics added (as we discover user needs)
- Bug fixes & improvements
- POS compatibility updates (new formats)
- Visual enhancements (better charts, themes)

**2. Priority Email/WhatsApp Support**
- Q&A about how to use template
- Troubleshooting (data not loading, refresh errors)
- Best practices guidance
- Response time: <24 hours (weekdays)

**3. Early Access**
- Beta access to Lite Dashboard (when ready)
- New dashboard templates before public release
- Feature voting (what to build next)

**4. Learning Resources**
- Monthly tips email ("How to analyze X metric")
- Video tutorials (5-10 minutes each)
- Industry benchmarks (compare your metrics to average)

### **What's NOT Included**

 Custom template development (not consulting)
 Live training sessions (not 1-on-1 coaching)
 Data entry services (users import own data)
 Power BI Pro license (users need free Desktop version)

---

## Build Requirements

### **Technical Stack (Simple MVP)**

**subscription Payment System:**
- **Option A:** Midtrans recurring billing (Indonesia-friendly)
- **Option B:** Manual (PayPal/bank transfer, track in spreadsheet)
- **Recommended:** Start manual, automate later

**Customer Portal:**
- **Week 1:** Google Drive folder (shared access per customer)
- **Week 2+:** Simple website (download updates, submit tickets)

**Support Ticket System:**
- **Week 1:** Dedicated WhatsApp Business number
- **Week 2+:** Email (Gmail with labels: New/In Progress/Resolved)
- **Future:** Intercom or Zendesk (if >50 customers)

**Build Time:** 1-2 days

### **Week 1 Build (Day 1-2):**
- [ ] Set up Midtrans recurring billing OR create subscription form
- [ ] Create Google Drive folder structure (per customer)
- [ ] Write onboarding email template
- [ ] Set up WhatsApp Business account
- [ ] Create internal tracking sheet (who's subscribed, status)

### **Week 2 Improvements (Day 3-5):**
- [ ] Build simple customer portal website (Next.js or Webflow)
- [ ] Add "Submit Support Request" form
- [ ] Create email automation (renewal reminders)
- [ ] Design monthly update email template

---

## Pricing & Revenue Strategy

### **Pricing Model**

**Monthly Subscription:** Rp 75K/month (middle of Rp 50-100K range)

**Why Rp 75K?**
- Affordable for Mikro segment (< Rp 100K threshold)
- Covers support time (1-2 hours/month per customer)
- Profitable at 10+ subscribers (Rp 750K MRR)

**Annual Option (Optional):**
- Rp 750K/year (Rp 62.5K/month, 2 months free)
- Target: 50% choose annual (lower churn, upfront cash)

### **Conversion Funnel**

**Target: 30% of Template Buyers**

**Scenario:**
- 10 template sales × 30% = 3 subscribers
- 20 template sales × 30% = 6 subscribers
- **Revenue:** 3-6 × Rp 75K = **Rp 225-450K MRR**

**Year 1 Projection:**
- 150 cumulative A1 buyers × 30% = 45 total conversions
- 20% monthly churn → 23 churned over 12 months (57% cumulative churn)
- **Active subscribers (Month 12):** 17 (45 conversions - 23 churned)
- **MRR (Month 12):** Rp 1.28M | **ARR (Year 1):** Rp 11M
- **Profitability:** Loss of Rp 49.2M (investment year), breakeven Month 15
- **See:** [[products/02-template-support/business-intelligence/subscription-unit-economics|Unit Economics]] for detailed model

### **Upsell Value**

**Template Support → Lite Dashboard:**
- "Your support includes Lite Dashboard early access!"
- Target: 50% of support subscribers try Lite
- 15 subscribers × 50% = 7-8 Lite users (validation boost)

---

## Launch Checklist

### **Pre-Launch (Week 1)**

-[ ] **Product:**
 - Midtrans subscription setup (or manual form)
 - Google Drive folder ready
 - WhatsApp Business configured
 - Tracking spreadsheet created

- [ ] **Onboarding:**
 - Welcome email written ("What you get as subscriber")
 - How to access updates (Drive link)
 - How to get support (WhatsApp number)

- [ ] **First Update Ready:**
 - Template v1.1 (small improvement from v1.0)
 - Release notes PDF
 - 1 video tutorial (5 minutes)

### **Launch (Week 2 - Same as Template Launch)**

**Offer on Template Purchase:**
- Post-purchase email: "Get monthly updates + support for Rp 75K/month"
- **Incentive:** First month free for early buyers (10 buyers)
- CTA button: "Start Free Trial"

**Landing Page:**
- Explain what's included
- Show sample update (screenshot of v1.0 → v1.1)
- Testimonial from beta tester
- **Guarantee:** "Cancel anytime, no questions asked"

---

## Success Metrics

### **Sprint 1 Validation (Week 4)**

**Conversion:**
- **30%+ of template buyers subscribe** → Service validated
- **15-29% subscribe** → Price too high OR unclear value
- **<15% subscribe** → Service not valuable, make support free

**Retention:**
- **<20% churn (month 1)** → Service delivers value
- **20-40% churn** → Users don't see ongoing value
- **>40% churn** → Major issues (support quality, updates boring)

**Support Load:**
- **<5 hours/week total** → Sustainable workload
- **5-10 hours/week** → Need better docs/FAQs
- **>10 hours/week** → Price too low OR users too demanding

### **Gate 1C Decision (Month 3-5)**

> **Timing Note:** Gate 1C cannot be evaluated until A1 Gate 1A passes (10 template sales), which realistically occurs Week 4-8. Then requires 90-day conversion window. Total: Month 3-5 evaluation.

**Criteria:**
- **3+ active subscribers** (30%+ conversion from first 10 A1 buyers) → Service validated, continue
- **1-2 subscribers** (20-29% conversion) → Lower price to Rp 50K, try again
- **0-1 subscribers** (<20% conversion) → Pivot to free support (marketing strategy)

**Actions if fails:**
- Make support free for all template buyers (lifetime updates)
- Use support interactions to validate Lite Dashboard demand
- Monetize via Lite upgrades instead

---

## Competitive Positioning

### **Vs. Buying Template Only**
- **One-Time:** Rp 2M, no updates, no support
- **With Support:** Rp 2M + Rp 75K/month, always current, help when stuck
- **Win:** Peace of mind, stays relevant as business evolves

### **Vs. Hiring Consultant (Per Issue)**
- **Consultant:** Rp 500K-1M per request
- **Support:** Rp 75K/month, unlimited questions
- **Win:** 10x cheaper for ongoing help

### **Vs. Power BI Community Forums**
- **Forums:** Free, slow (days), generic answers
- **Support:** Rp 75K, fast (<24hr), FnB-specific answers
- **Win:** Faster, relevant, personalized

---

## Risk Mitigation

### **Risk 1: Low Conversion (<15%)**

**Causes:**
- Template "good enough" (no perceived need for updates)
- Price too high for value delivered
- Users don't understand what they get

**Mitigation:**
- Offer 1-month free trial (remove risk)
- Lower price to Rp 50K/month
- Better explain value in purchase email

---

### **Risk 2: High Churn (>40% month 1)**

**Causes:**
- First update not impressive
- Support slow or unhelpful
- Users don't use template regularly (forgot about it)

**Mitigation:**
- Make first update substantial (2-3 new metrics)
- Respond to support requests within 4 hours
- Monthly engagement email ("Here's what's new this month")

---

### **Risk 3: Unsustainable Support Load**

**Causes:**
- Users have low Power BI skills (need hand-holding)
- Template has bugs (constant troubleshooting)
- No self-service documentation

**Mitigation:**
- Create comprehensive FAQ (20+ common questions)
- Record video answers (reusable, not 1-on-1)
- Set boundaries: "Support is for template usage, not Power BI training"

---

## Integration with Sprint 1 Products

### **Template Purchase → Support Offer**
- Immediate email after template purchase
- "Get your first month free" CTA
- Timeline: Day 1 (automated)

### **Support Subscriber → Lite Dashboard Early Access**
- Email in Week 6: "Try Lite Dashboard beta (free for subscribers)"
- Target: 50% try Lite, 20% convert to paid Lite
- Timeline: After Lite Phase 1 launches

### **Support → Full SaaS Upgrade Path**
- Email in Month 6: "Upgrade to cloud analytics"
- Target: 10% convert to Full SaaS
- Timeline: After Full SaaS launches (not Sprint 1)

---

## Operational Plan

### **Monthly Support Workflow**

**Week 1 (Updates):**
- Review template usage data (which metrics used most?)
- Identify 1-2 improvements/new metrics
- Update template file (v1.1, v1.2, etc.)

**Week 2 (Content):**
- Write monthly tips email
- Record 1 tutorial video (5 minutes)
- Research industry benchmarks (if possible)

**Week 3 (Delivery):**
- Upload updated template to Google Drive
- Send monthly update email to all subscribers
- Post video to YouTube (unlisted, share link)

**Week 4 (Support):**
- Answer all support requests (<24hr)
- Update FAQ with new questions
- Track churn (who canceled? why?)

**Time Commitment:** 5-10 hours/month (sustainable solo)

---

## Pricing Experiments (Post-Sprint 1)

**If conversion <20%:**
- Try Rp 50K/month (lower barrier)
- Offer annual discount (Rp 500K/year = Rp 42K/month)

**If conversion >50%:**
- Raise price to Rp 100K/month (higher value perceived)
- Add "Premium Support" tier (Rp 150K, includes monthly call)

**If churn >30%:**
- Switch to quarterly billing (reduce monthly decision fatigue)
- Bundle with Lite Dashboard (combined subscription)

---

## Next Steps

**Week 1 (Build):**
1. Set up Midtrans subscription OR manual form
2. Create Google Drive customer portal
3. Configure WhatsApp Business
4. Write onboarding email

**Week 2 (Launch with Template):**
1. Add support offer to template purchase flow
2. Send first onboarding emails to subscribers
3. Monitor conversion rate

**Week 3-4 (Validation):**
1. Deliver first monthly update
2. Respond to support requests (<24hr)
3. Measure: Conversion %, churn %, support hours/week

**Gate 1C (Month 3-5):**
1. Evaluate: 30%+ conversion from first 10 A1 buyers? <20% churn?
2. Decision: Continue OR pivot to free support
3. Plan Sprint 2: Scale OR integrate with Lite

> **Timing Update:** Gate 1C moved from "Week 4" to "Month 3-5" to account for A1 Gate 1A dependency (10 sales required) + 90-day conversion window.

---

**Last Updated:** December 25, 2025
**Status:** Not built yet, 1-2 days to launch
**Next Milestone:** Week 2 Launch, Month 3-5 Gate 1C validation
**Critical Success Factor:** 30%+ conversion from first 10 A1 template buyers

---

**Related Documents:**
- [[tier3-content-migration|Tier3 Content Migration]]
