# A4e Marketing Automator - Technical Specifications | Pricing & Launch | FAQ

**Note:** Remaining 3 A4e documents consolidated here for efficiency.

---

## Technical Specifications

**Platform:** Web-based SaaS
**Deployment:** Cloud (AWS)
**Access:** Desktop browser (mobile-responsive)

### Architecture

**Frontend:**
- React 18
- Redux (state management)
- Tailwind CSS
- Recharts (analytics visualizations)

**Backend:**
- Node.js + Express
- PostgreSQL (customer data, campaign history)
- Redis (caching, session management)
- RabbitMQ (message queue for campaign scheduling)

**Message Delivery:**
- Email: SendGrid API
- SMS: Twilio SMS API
- WhatsApp: Twilio Business API
- Social: Meta Graph API (Instagram + Facebook)

### Key Features

**RFM Segmentation Engine:**
- Recency-Frequency-Monetary analysis
- Auto-classification (VIP, Regular, At-Risk, Lost)
- Updates daily
- Custom segment builder

**Campaign Automation:**
- Trigger-based (birthday, days since last visit, purchase milestone)
- Scheduled campaigns
- Drip campaigns (multi-step sequences)
- A/B testing engine

**Personalization:**
- Merge tags ({{name}}, {{last_visit}}, etc.)
- Dynamic content (show different offers based on segment)
- Behavior tracking (open, click, redeem)

**Analytics:**
- Real-time campaign tracking
- Attribution modeling (revenue per campaign)
- Cohort analysis
- Customer lifetime value calculation

### Integrations

**POS Systems:**
- Moka, Olsera, Pawoon (direct integration)
- Generic: CSV import daily

**Online Ordering:**
- GoFood, GrabFood (via webhook)
- Own website (API integration)

**Google Analytics:**
- UTM tracking for campaigns
- Goal completion tracking

### Performance

**Scalability:**
- 1,000 campaigns/minute send rate
- 100,000+ customer database
- Real-time analytics (< 2 sec refresh)

**Reliability:**
- 99.9% uptime SLA
- Auto-retry failed sends (3 attempts)
- Bounce/unsubscribe management

**Security:**
- Customer data encrypted at rest (AES-256)
- TLS 1.3 in transit
- GDPR compliant (data export, deletion)
- Indonesian UU PDP compliant

### API (for Advanced Users)

**RESTful API:**
- Customer CRUD operations
- Campaign triggering
- Analytics data export
- Webhook support (campaign events)

**Rate Limits:**
- 100 requests/min (standard tier)
- 1,000 requests/min (enterprise)

---

## Pricing & Launch

### Pricing Structure

**Base Platform:** Rp 500,000/year

**Includes:**
- Unlimited email campaigns
- Customer database (up to 50,000)
- All campaign templates
- Social media scheduler
- Analytics & reporting
- Customer support

**Messaging Credits (Pay-as-you-go):**
- Email: Rp 0 (unlimited, included)
- SMS: Rp 100/message
- WhatsApp: Rp 50/message

**Messaging Packages (Prepaid, discounted):**
- 1,000 WhatsApp: Rp 40K (Rp 40/msg, save 20%)
- 5,000 WhatsApp: Rp 175K (Rp 35/msg, save 30%)
- 10,000 WhatsApp: Rp 300K (Rp 30/msg, save 40%)

### Typical Monthly Cost

**Small Cafe (1,000 customers, 500 active):**
- Base: Rp 42K/month (Rp 500K/12)
- Monthly campaigns: 1,000 WhatsApp messages
- **Total: Rp 82K/month (Rp 984K/year)**

**Medium Restaurant (3,000 customers, 1,500 active):**
- Base: Rp 42K/month
- Monthly campaigns: 3,000 WhatsApp messages
- **Total: Rp 192K/month (Rp 2.3M/year)**

### ROI Calculation

**Value Delivered:**
- Repeat rate increase: 20-30% (from 25% to 35%)
- new monthly revenue: Rp 5-10M (for typical café)
- Time saved: 3-5 hours/week = Rp 9M/year (manager time)
- **Total value: Rp 15-30M/year**

**Cost:** Rp 1-2M/year
**ROI:** 8-30x

### Launch Plan

**Q1 2025 (Jan-Mar):**
- Beta: 100 customers (50% discount)
- Feedback collection
- Feature refinement

**Q2 2025 (Apr-Jun):**
- General Availability
- Target: 500 customers (Rp 250M ARR)
- Partnership with POS vendors

**Q3-Q4 2025:**
- Scale to 2,000 customers
- ARR: Rp 1B+ (base + messaging)

### Market Opportunity

**TAM:** 50,000 F&B businesses in Indonesia (cafés + restaurants)
**SAM:** 20,000 with customer database (already collecting data)
**SOM (Year 1):** 1,000 customers (5% of SAM)

---

## FAQ & Troubleshooting

### Frequently Asked Questions

**Q: Do I need marketing experience to use this?**
A: No! Templates are pre-written. Just customize with your offers and activate. The system handles timing, segmentation, and delivery automatically.

**Q: Can I use my own WhatsApp number?**
A: Personal WhatsApp cannot send bulk messages (you'll get banned). We use WhatsApp Business API which is approved for marketing. Takes 1-2 days to set up.

**Q: What's the difference between WhatsApp and WhatsApp Business API?**
A: Regular WhatsApp: Manual, one-by-one, free but limited. Business API: Automated, bulk, paid but reliable. Required for marketing at scale.

**Q: How do you get customer phone numbers?**
A: From your POS system (if you collect at checkout) OR ask customers to opt-in ("Sign up for exclusive offers via WhatsApp"). We only send to opted-in customers (compliance).

**Q: Can customers unsubscribe?**
A: Yes. Every message includes "Reply STOP to unsubscribe." Auto-removed from future campaigns. This is required by law (UU PDP).

**Q: What if customers don't have email/phone?**
A: You need at least one contact method. Most Indonesian customers prefer WhatsApp > SMS > Email. Prioritize collecting WhatsApp.

**Q: How do I track which campaign brought customers back?**
A: Unique codes per campaign (BDAY20, WINBACK30). Customer shows code at counter, you mark redeemed in A4e or POS. System tracks revenue automatically.

**Q: Can I A/B test different offers?**
A: Yes! Create two versions (20% off vs Buy 1 Get 1), send to 50% each, see which performs better. Use winner for future campaigns.

**Q: Does this replace my social media manager?**
A: Not entirely. A4e handles scheduling/posting, but content creation (writing captions, taking photos) still needs human touch. Think of it as an assistant.

**Q: What's the minimum customer database size to use this?**
A: 100 customers minimum (to make automation worthwhile). Below that, manual outreach might be simpler.

**Q: Can I integrate with my existing loyalty program?**
A: Yes, if your POS supports loyalty points. A4e can trigger campaigns based on points milestones (100 points = reward notification).

**Q: Is my customer data secure?**
A: Yes. Encrypted storage, secure transmission, GDPR + Indonesian UU PDP compliant. We never share or sell customer data.

**Q: What happens if I cancel?**
A: You can export customer data (CSV). Campaigns stop immediately. No penalty for cancellation (annual subscription non-refundable though).

### Troubleshooting

**Problem: Low WhatsApp open rates (<50%)**

**Cause:** Messages going to spam folder OR customers changed numbers
**Solution:**
- Ensure customers opted-in (don't spam)
- Clean database (remove inactive numbers)
- Use approved message templates (Meta approval)
- Send during active hours (10 AM - 8 PM, avoid late night)

---

**Problem: High unsubscribe rate (>5%)**

**Cause:** Over-sending or irrelevant messages
**Solution:**
- Reduce frequency (max 2 promotional messages/month)
- Better segmentation (VIPs get different offers than occasional customers)
- Provide value (not always selling - share tips, recipes, behind-the-scenes)
- Clear expectations (tell customers "We'll send 2x/month max")

---

**Problem: Low redemption rate (<5%)**

**Cause:** Offer not compelling or unclear redemption process
**Solution:**
- Increase offer value (10% → 20% off OR add urgency "Valid 3 days only")
- Simplify redemption ("Just show this message" vs complex codes)
- Make expiration clear ("Valid until Sunday Dec 31")
- Test different offers (A/B test)

---

**Problem: WhatsApp messages not sending**

**Cause:** Business API not approved or template rejected
**Solution:**
- Check approval status in** A4e Dashboard
- Ensure message templates follow Meta guidelines (no spam language, clear opt-out)
- Resubmit rejected templates with edits
- Contact support if stuck

---

**Problem: Email going to spam**

**Cause:** Poor sender reputation or spam content
**Solution:**
- Use PWBI email service (we maintain good reputation)
- If using own email: Set up SPF, DKIM, DMARC records
- Avoid spam words ("FREE!!!", "ACT NOW", excessive exclamation marks)
- Include physical address and unsubscribe link (required by law)

---

**Problem: Can't import customer data from POS**

**Cause:** POS export format incompatible
**Solution:**
- Export to Excel from POS
- Reformat columns (Name, Phone, Email, Purchase History)
- Upload to A4e
- OR contact support for custom integration (15 POS systems supported)

---

**Problem: Social media posts not auto-posting**

**Cause:** Instagram/Facebook disconnected
**Solution:**
- Reconnect accounts (Settings → Integrations)
- Re-authorize PWBI app
- Check scheduled posts (may be in draft if connection failed)

---

**Problem: Analytics showing incorrect revenue**

**Cause:** Redemptions not being tracked
**Solution:**
- Ensure cashiers mark redemptions (code entry in POS or manual mark in A4e)
- Train team on process
- Consider auto-redemption (if customer shows phone at checkout, auto-mark based on phone number)

---

### Need More Help?

**Documentation:** docs.pwbi.co.id/marketing-automator
**Video Tutorials:** YouTube.com/PWBIIndonesia
**Email Support:** support@pwbi.co.id (response <24hr)
**Live Chat:** In-app chat (business hours 9 AM - 6 PM WIB)
**Community:** Facebook Group "PWBI F&B Community"

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 2.0 | Comprehensive expansion (tech specs, pricing, FAQ) | Product Team |
| 2025-12 | 1.0 | Initial documentation | Product Team |

---

## Related

- **[[products/16-marketing-automator/16-marketing-automator|Marketing Automator Product]]** - Product overview
- **[[products/16-marketing-automator/product-brief|Product Brief]]** - Problem, solution, and market sizing
- **[[products/16-marketing-automator/user-guide|User Guide]]** - Complete user guide and best practices
- **[[products/16-marketing-automator/pricing-launch|Pricing & Launch Plan]]** - Detailed pricing and launch phases
- **[[products/16-marketing-automator/faq-troubleshooting|FAQ & Troubleshooting]]** - Comprehensive FAQ
