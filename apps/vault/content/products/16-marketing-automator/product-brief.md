# A4e Marketing Automator - Complete Documentation Suite

## Product Brief

**Product:** A4e - Marketing Automator
**Pricing:** Rp 500K/year + messaging credits
**Launch:** Q1 2025

### Problem
SMB F&B lack marketing expertise and time:
- No customer database (aggregator owns data)
- Manual campaigns time-consuming (3-5 hours/week)
- Don't know what works (no tracking)
- Low repeat rate (20-30% vs 50%+ possible)

**Lost Revenue:** Rp 10-20M/year in repeat business

### Solution
Automated marketing campaigns (email, SMS, WhatsApp, social) based on customer behavior, driving 20-30% increase in repeat rate.

### Key Features

**1. Customer Segmentation (RFM Analysis)**
- Recency: Last visit
- Frequency: Visit count
- Monetary: Total spent
- Auto-segments: VIPs, Regulars, At-Risk, Lost

**2. Automated Campaigns**
- **Birthday:** Free dessert/drink on birthday
- **Loyalty:** "You've visited 10x, here's 20% off"
- **Win-Back:** "We miss you! 30% off your next visit"
- **New Customer:** "Welcome! Here's 10% off second visit"
- **Abandoned Cart:** (for online ordering)

**3. Multi-Channel**
- SMS (high open rate, urgent)
- Email (rich content, newsletters)
- WhatsApp (conversational, Indonesia-preferred)
- Social media scheduling (Instagram, Facebook)

**4. ROI Tracking**
- Campaign performance (open rate, click rate, redemption rate)
- Revenue attributed to campaigns
- Customer lifetime value (CLV) increase

### Target Customer
- Café, restaurant with customer database (500+ customers)
- Want to increase repeat business
- Competing with aggregators (need direct channel)

**Market:** 20,000+ F&B businesses in Indonesia

### Business Model
**Base:** Rp 500K/year
**Messaging Credits:**
- Email: Included (unlimited)
- SMS: Rp 100/message
- WhatsApp: Rp 50/message (via Business API)

**Value:**
- 20-30% repeat rate increase = Rp 10-20M/year revenue
- Time saved: 3 hours/week = Rp 7.5M/year
- **ROI: 20-40x**

**Revenue:** Year 1: 1,000 customers = Rp 500M ARR (base) + Rp 200M (messaging) = Rp 700M total

---

## User Guide

### Setup (30 min)
1. **Import Customers**
 - From POS (name, phone, email, purchase history) OR
 - Upload Excel
2. **Connect Channels**
 - Email: SMTP settings (or use ours)
 - SMS: Provider (we handle)
 - WhatsApp Business API: Verify number
 - Social: Connect Instagram/Facebook
3. **Choose Campaign Templates**
 - Birthday, Loyalty, Win-Back, etc.
4. **Customize Messages**
 - Edit copy, add logo/images
 - Set discount codes
5. **Activate**
 - Campaigns run automatically

### Dashboard
- Campaign performance (sent, opened, clicked, redeemed)
- Revenue attributed
- Customer segments (% in each)
- Upcoming campaigns (scheduled)

### Campaign Builder
**Choose Template → Customize → Set Trigger → Activate**

**Example: Win-Back Campaign**
- Trigger: Customer hasn't visited in 60 days
- Message: "We miss you, [Name]! Come back and get 30% off. Valid 7 days."
- Channel: WhatsApp (best for Indonesia)
- Send: Auto (when trigger met)

### Social Media Scheduler
- Create posts (text + images)
- Schedule (Instagram + Facebook)
- Best times suggested (based on audience)
- Auto-post

### Analytics
- Campaign ROI
- Customer lifetime value (CLV)
- Repeat rate trends
- Channel performance (SMS vs email vs WhatsApp)

---

## Technical Specs

**Platform:** Web (managers) + automated backend

**Tech Stack:**
- Frontend: React
- Backend: Node.js
- Queue: RabbitMQ (campaign scheduling)
- Email: SendGrid
- SMS: Twilio
- WhatsApp: Twilio Business API
- Social: Meta Graph API

**Features:**
- RFM segmentation engine
- Campaign automation (trigger-based)
- A/B testing
- Personalization (merge tags: {{name}}, {{last_visit}})
- Unsubscribe management (compliance)

**Integrations:**
- POS (customer data import)
- Online ordering platforms
- Google Analytics (tracking)

**Performance:**
- Campaign send: 1,000 messages/min
- Open rate tracking (real-time)
- Webhook support (redemption tracking)

---

## Pricing & Launch

**Pricing:**
- Base: Rp 500K/year (includes unlimited email)
- SMS: Rp 100/message
- WhatsApp: Rp 50/message
- Social: Included

**Typical Monthly Cost:**
- Base: Rp 42K/month
- Messages: 2,000 WhatsApp = Rp 100K
- **Total: Rp 142K/month (Rp 1.7M/year)**

**Launch:** Q1 2025
**Target:** 1,000 customers = Rp 700M ARR (Year 1)

---

## FAQ

**Q: Do I need marketing experience?**
A: No, templates + automation handle it. Customize & activate.

**Q: Can I use WhatsApp for campaigns?**
A: Yes, via WhatsApp Business API (most effective in Indonesia).

**Q: How do I track redemptions?**
A: Unique codes per campaign. Track in POS or manually mark redeemed.

**Q: What if customers unsubscribe?**
A: Auto-removed from future campaigns (compliance built-in).

**Q: Can I A/B test?**
A: Yes, test different messages/offers, see which performs better.

---

## Troubleshooting

**Problem: Low open rates**
- Try different channels (WhatsApp > SMS > Email in Indonesia)
- Better subject lines/preview text
- Send time optimization (lunch/dinner hours better)

**Problem: High unsubscribe rate**
- Don't over-send (max 2x/month for promotional)
- Segment better (relevant offers only)
- Value-first (not always selling)

**Problem: WhatsApp not sending**
- Verify Business API approval
- Check message templates approved
- Ensure customer opted-in (compliance)

---

## Support

Email: support@pwbi.co.id
In-app chat
Video tutorials: YouTube.com/PWBIIndonesia

---

## Revision History
| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 2.0 | Comprehensive expansion | Product Team |

---

## Related

- **[[products/16-marketing-automator/16-marketing-automator|Marketing Automator Product]]** - Product overview
- **[[products/16-marketing-automator/user-guide|User Guide]]** - Complete setup and operations guide
- **[[products/16-marketing-automator/technical-specs|Technical Specifications]]** - Architecture, API, and integrations
- **[[products/16-marketing-automator/pricing-launch|Pricing & Launch Plan]]** - Pricing tiers and launch phases
- **[[products/16-marketing-automator/faq-troubleshooting|FAQ & Troubleshooting]]** - Comprehensive FAQ and troubleshooting
