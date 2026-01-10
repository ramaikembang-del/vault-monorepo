# A4e Marketing Automator - FAQ & Troubleshooting

**Product:** A4e Marketing Automator
**Support:** support@pwbi.co.id
**Last Updated:** December 2025

---

## Frequently Asked Questions

### General

**Q: What is A4e Marketing Automator?**
A: Automated marketing tool that sends personalized campaigns (email, SMS, WhatsApp, social media) to increase customer repeat rate. Think of it as a marketing assistant that works 24/7.

**Q: Do I need marketing experience?**
A: No! We provide templates for all campaigns (Birthday, Win-Back, Loyalty, etc.). Just customize with your offers and hit activate. The system handles timing, segmentation, and delivery.

**Q: How long does setup take?**
A: 30 minutes:
- Import customers (10 min)
- Connect WhatsApp/Email (10 min)
- Activate campaigns (10 min)
Results within 7 days.

**Q: What's the minimum customer database size?**
A: 100 customers minimum. Below that, manual outreach might be simpler. Optimal: 500+ customers.

**Q: Can I use for multiple restaurant locations?**
A: Yes! Each location can have separate campaigns OR unified campaigns across all locations. Volume discounts available for 5+ locations.

---

### Technical

**Q: What channels can I use?**
A: Email, SMS, WhatsApp (Business API), Instagram, and Facebook. You can choose which channels per campaign.

**Q: Can I use my own WhatsApp number?**
A: Personal WhatsApp cannot send bulk messages (you'll get banned by WhatsApp). We use WhatsApp Business API which is approved for marketing. Takes 1-2 days to set up.

**Q: What's the difference between regular WhatsApp and Business API?**
A:
-**Regular WhatsApp:** Manual, one-by-one, free, limited to ~50 messages/day
- **Business API:** Automated, bulk, paid (Rp 50/msg), unlimited scale, reliable delivery

Marketing at scale requires Business API (compliance + reliability).

**Q: How do you get customer data?**
A: Import from your POS system (CSV export) OR upload Excel manually. We sync automatically with supported POS systems (Moka, Olsera, Pawoon).

**Q: Is my customer data secure?**
A: Yes:
- Encrypted storage (AES-256)
- Secure transmission (TLS 1.3)
- GDPR + Indonesian UU PDP compliant
- We never share or sell data
- You can export anytime

**Q: Can I integrate with my POS?**
A: Yes! Direct integration with Moka, Olsera, Pawoon, Kasir Pintar. For others, export CSV from POS → upload to A4e (daily or weekly).

---

### Pricing & Billing

**Q: How much does it cost?**
A: Base: Rp 500K/year + messaging credits
- Email: Unlimited (included)
- WhatsApp: Rp 50/message
- SMS: Rp 100/message

Typical total: Rp 800K - 2M/year depending on campaign volume.

**Q: Are there hidden fees?**
A: No. Only base subscription + messaging. No setup fees, no per-user fees, no transaction fees.

**Q: Can I get a discount?**
A: Yes:
- Early adopters (Q1 2025): 20% off lifetime
- Multi-location (5+ stores): 10-30% volume discount
- Referrals: Refer 3 businesses = 1 year free

**Q: What if I run out of messaging credits?**
A: Campaigns pause until you top up. Enable auto-top-up to avoid interruptions (auto-add Rp 100K when balance < Rp 20K).

**Q: Do credits expire?**
A: No, rollover indefinitely.

**Q: Can I cancel anytime?**
A: Annual subscription: Yes, but no refund (except 30-day money-back guarantee). You can use until expiration.

---

### Campaigns

**Q: What campaigns should I start with?**
A: Minimum 3:
1. **Birthday:** Automatic, high engagement
2. **Win-Back:** Inactive 60+ days
3. **Loyalty Milestone:** Reward repeat customers (10 visits, etc.)

Start simple, add more later.

**Q: How do automated campaigns work?**
A: Set triggers (e.g., "60 days since last visit") → System monitors → When triggered, sends campaign automatically. No manual work required.

**Q: Can I customize messages?**
A: Yes! Edit templates:
- Change offer (free dessert → 20% off)
- Add images/logos
- Use merge tags ({{name}}, {{favorite_item}})
- Change tone/language

**Q: Can I A/B test?**
A: Yes! Test 2 versions (different offers/copy), send to 50% each, see which performs better. Use winner for future campaigns.

**Q: How often should I send campaigns?**
A: Recommended: Max 2 promotional messages/month per customer (avoid fatigue). Birthday/transactional messages don't count toward limit.

---

### WhatsApp Specific

**Q: Why do I need WhatsApp Business API approval?**
A: Meta (Facebook/WhatsApp) requires businesses to register for bulk messaging. Prevents spam, ensures compliance. Approval takes 1-2 days.

**Q: What if my WhatsApp Business API application is rejected?**
A: Common reasons:
- Invalid business registration
- Unclear business purpose
- Prohibited industry (gambling, tobacco)

Solution: Fix issues, reapply. Contact support for help.

**Q: Do customers need to opt-in?**
A: Yes (legal requirement). Customers must agree to receive messages. Get opt-in at checkout: "Want exclusive offers via WhatsApp? Yes/No". We handle opt -out automatically (reply STOP).

**Q: Can customers unsubscribe?**
A: Yes. Every message includes "Reply STOP to unsubscribe." Auto-removed from future campaigns. Required by law (UU PDP compliance).

---

### Results & Tracking

**Q: How do I track campaign results?**
A: Dashboard shows:
- Sent, opened, clicked (real-time)
- Redeemed (if customers show code at counter)
- Revenue attributed (based on redemptions)
- ROI (revenue / cost)

**Q: How do I track redemptions?**
A: Use unique codes (BDAY20, WINBACK30). Customer shows code → You mark redeemed in A4e or POS → System tracks revenue. Or track by phone number (auto-detect).

**Q: What's a good open rate?**
A: Benchmarks:
- WhatsApp: 70-90% (excellent channel for Indonesia)
- SMS: 40-60%
- Email: 15-25%

**Q: What's a good redemption rate?**
A: 10-20% is good. Higher for better offers (30% off > 10% off), shorter expiration (3 days > 30 days), or VIP segments.

---

## Troubleshooting

### Campaign Issues

**Problem: Low open rates (<50% for WhatsApp)**

**Causes:**
- Messages going to spam
- Customers changed numbers
- Poor send timing

**Solutions:**
1. **Ensure opt-in:** Don't message customers who didn't agree (spam = low opens + complaints)
2. **Clean database:** Remove inactive numbers (bounce rate high = deliverability drops)
3. **Use approved templates:** Meta rejects some message formats (get pre-approval)
4. **Send during active hours:** 10 AM - 8 PM (avoid late night/early morning)
5. **Check sender reputation:** High spam complaints hurt future deliverability

---

**Problem: High unsubscribe rate (>5%)**

**Causes:**
- Over-sending (message fatigue)
- Irrelevant messages
- Customers never opted in (feel spammed)

**Solutions:**
1. **Reduce frequency:** Max 2 promotional messages/month
2. **Better segmentation:** VIPs get different offers than occasional customers
3. **Provide value:** Not always selling (share tips, recipes, behind-the-scenes occasionally)
4. **Set expectations:** Tell customers upfront: "We'll send 2 special offers/month, no spam"
5. **Easy opt-out:** Make unsubscribe obvious (builds trust, reduces complaints)

---

**Problem: Low redemption rates (<5%)**

**Causes:**
- Offer not compelling
- Unclear redemption process
- Expiration too short

**Solutions:**
1. **Increase offer value:** 10% → 20% off OR add urgency "Valid 3 days only"
2. **Simplify redemption:** "Just show this message" vs complex codes/steps
3. **Extend expiration:** 3 days → 7 days (give customers time)
4. **A/B test offers:** Test "20% off" vs "Buy 1 Get 1" (see which converts better)
5. **Segment better:** Send steak promo to customers who ordered steak before (relevance ↑ redemption)

---

**Problem: Campaigns not sending**

**Causes:**
- Insufficient credits
- Channel disconnected (WhatsApp/email)
- Campaign paused/disabled

**Solutions:**
1. **Check credit balance:** Top up if depleted
2. **Reconnect channels:** Settings → Integrations → Reconnect WhatsApp/Email
3. **Enable campaigns:** Check campaign status (active vs paused)
4. **Check send schedule:** Campaign set for future date?
5. **Contact support:** If still not sending after above checks

---

### WhatsApp Issues

**Problem: WhatsApp messages not delivering**

**Causes:**
- Business API not approved
- Message template rejected
- Customer blocked your number
- Opt-in required but not collected

**Solutions:**
1. **Check API status:** Dashboard → WhatsApp → Approval Status (pending/approved)
2. **Review templates:** Meta rejects templates with spam language ("FREE!!!", "ACT NOW!!!") → Edit, resubmit
3. **Verify opt-in:** Ensure customers agreed to WhatsApp messages (can't send to cold contacts)
4. **Check quality score:** High block/report rate = Meta limits your sending → Improve message relevance
5. **Wait 24-48 hours:** Template approval takes time

---

**Problem: WhatsApp says "Template not approved"**

**Causes:**
- Violates Meta policies (spam, misleading, prohibited content)
- Missing required components (opt-out)

**Solutions:**
1. **Review Meta guidelines:** No guarantees ("100% guaranteed!"), no urgency manipulation, clear business purpose
2. **Add clear opt-out:** "Reply STOP to unsubscribe" (required)
3. **Use simple language:** Avoid exclamation marks, all caps, emoji spam
4. **Resubmit:** Make edits → Resubmit template → Usually approved within 24 hours
5. **Use pre-approved templates:** We provide compliant templates (customize minimally)

---

### Email Issues

**Problem: Emails going to spam**

**Causes:**
- Poor sender reputation
- Spam content (trigger words)
- Missing authentication (SPF/DKIM)

**Solutions:**
1. **Use PWBI email service:** We maintain good sender reputation (recommended)
2. **If using own email:** Set up SPF, DKIM, DMARC records (techn ical, ask IT)
3. **Avoid spam words:** "FREE", "ACT NOW", "LIMITED TIME" (moderate use ok, excessive = spam filter)
4. **Include unsubscribe:** Required by law, also improves deliverability
5. **Don't buy email lists:** Only send to customers who gave permission (opt-in)

---

**Problem: Low email open rates (<15%)**

**Causes:**
- Weak subject lines
- Sending at bad times
- Inactive email list

**Solutions:**
1. **Better subject lines:** Specific ("Your Birthday Dessert Awaits" > "Special Offer"), create curiosity, keep under 50 characters
2. **Send optimization:** Test different times (Tue-Thu 10 AM or 6 PM often best)
3. **Clean list:** Remove emails that haven't opened in 6+ months (re-engagement campaign first)
4. **Personalize:** Use {{name}} in subject line (20% higher open rates)
5. **A/B test:** Test 2 subject lines, see which wins

---

### Technical Issues

**Problem: Can't import customers from POS**

**Causes:**
- File format incompatible
- Missing required fields
- File too large

**Solutions:**
1. **Export to Excel:** From POS → Save as .xlsx or .csv
2. **Required columns:** Name, Phone OR Email (at least one contact method)
3. **Format phone:** +62812345678 OR 0812345678 (consistent format)
4. **File size:** Max 10MB (50,000 customers). Split if larger.
5. **Contact support:** Send sample file, we'll help format correctly

---

**Problem: Social media posts not auto-posting**

**Causes:**
- Instagram/Facebook disconnected
- Post scheduled for past date
- Image format unsupported

**Solutions:**
1. **Reconnect accounts:** Settings → Integrations → Disconnect → Reconnect Instagram/Facebook
2. **Re-authorize app:** Meta sometimes requires re-permission (click "Authorize" again)
3. **Check scheduled time:** Must be future date/time (not past)
4. **Image requirements:** JPG/PNG, max 10MB, 1080×1080 recommended
5. **Review posts:** Check drafts (may have failed, sitting there)

---

**Problem: Analytics showing incorrect revenue**

**Causes:**
- Redemptions not being tracked
- Manual marking errors
- POS integration delay

**Solutions:**
1. **Train team:** Cashiers must mark redemptions (enter code in POS or mark in A4e)
2. **Auto-tracking:** Enable phone number tracking (customer shows phone, we auto-detect)
3. **Sync POS:** If integrated, check sync status (may be delayed, refresh)
4. **Manual adjustment:** Dashboard → Edit Campaign → Manually add redemptions if needed
5. **Reconcile weekly:** Compare POS reports with A4e analytics (should match)

---

## Still Need Help?

### Documentation

**Knowledge Base:** docs.pwbi.co.id/marketing-automator
**Video Tutorials:** YouTube.com/PWBIIndonesia (playlist: "A4e Marketing Automator")
**Templates:** Pre-designed campaigns with best practices

### Support Channels

**Email:** support@pwbi.co.id
- Response time: <24 hours (usually <4 hours)
- Include: Business name, issue description, screenshots

**Live Chat:** In-app chat (bottom right corner)
- Hours: 9 AM - 6 PM WIB (Mon-Fri)
- Instant response during business hours

**Phone:** +62 21 1234 5678
- For urgent issues only (campaigns not sending before big event, etc.)
- Hours: 9 AM - 6 PM WIB

### Community

**Facebook Group:** "PWBI F&B Community"
- 5,000+ F&B owners
- Share campaign ideas, results, tips
- Peer support

**Monthly Webinar:** "Marketing Automation Best Practices"
- Last Thursday of every month, 2 PM WIB
- Free for customers
- Q&A session

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 1.0 | Comprehensive FAQ & troubleshooting guide | Support Team |

---

## Related

- **[[products/16-marketing-automator/16-marketing-automator|Marketing Automator Product]]** - Product overview
- **[[products/16-marketing-automator/user-guide|User Guide]]** - Complete user guide for A4e
- **[[products/16-marketing-automator/technical-specs|Technical Specifications]]** - Architecture and integrations
- **[[products/16-marketing-automator/pricing-launch|Pricing & Launch Plan]]** - Pricing structure and launch strategy
- **[[products/16-marketing-automator/product-brief|Product Brief]]** - Complete documentation suite
