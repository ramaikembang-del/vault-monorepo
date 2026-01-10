# A4a Inventory Optimizer - FAQ & Troubleshooting

**Product:** A4a - Inventory Optimizer
**Last Updated:** December 2025

---

## Frequently Asked Questions

### General

**Q: What is A4a?**
A: AI-powered inventory management tool that reduces waste 50% and prevents stock-outs. Designed for small cafés and restaurants.

**Q: How much does it cost?**
A: Rp 500,000/year (Rp 50,000/month if paid monthly). 14-day free trial, no credit card needed.

**Q: Do I need special equipment?**
A: No. Just a smartphone (iOS/Android) or computer. Works with any POS or standalone.

**Q: How long does setup take?**
A: 15 minutes. Connect data → Add items → Start receiving alerts.

**Q: Will it work for my business?**
A: Yes, if you're a café, restaurant, bakery, or similar F&B with 20+ inventory items and want to reduce waste.

---

### Getting Started

**Q: Do I need a POS system?**
A: No, but it's easier. You can manually upload Excel or enter sales data.

**Q: Which POS systems integrate?**
A: Moka, Olsera, Pawoon, Qasir. More coming soon. Request yours!

**Q: How much historical data do I need?**
A: Minimum 3 months for AI to learn patterns. More is better (6-12 months ideal).

**Q: Can I use it for multiple locations?**
A: Yes! Each additional location: +Rp 300K/year.

**Q: What if I don't have historical data?**
A: You can still use it! AI will start learning from Day 1. Full accuracy in 30-60 days.

---

### Features

**Q: How accurate are the reorder recommendations?**
A: ±10% accuracy typically. Improves over time as AI learns your patterns. You can always override.

**Q: Can I customize reorder points?**
A: Yes. Adjust safety buffers, preferred order days, minimum quantities in Settings.

**Q: Does it account for seasonality?**
A: Yes. AI detects weekend spikes, holidays, seasonal patterns automatically.

**Q: Can I track recipes (not just ingredients)?**
A: Not in v1.0. Recipe management coming Q2 2025.

**Q: What about perishables with short shelf life?**
A: Fully supported. Set shelf life per item → AI won't recommend over-ordering → "Use it or lose it" alerts.

**Q: Can staff use the app?**
A: Yes. Create staff accounts (view-only or full access). Owner controls permissions.

---

### Data & Privacy

**Q: Where is my data stored?**
A: AWS servers in Singapore (Indonesia region coming). Encrypted, backed up daily.

**Q: Can I export my data?**
A: Yes. Excel/CSV export anytime. You own your data.

**Q: Who can see my data?**
A: Only you and users you invite. PWBI staff only access with your permission (for support).

**Q: What if I cancel?**
A: Export your data, then we delete it within 30 days (GDPR compliance).

---

### Billing & Payments

**Q: Free trial details?**
A: 14 days, full features, no credit card. Converts to paid only if you choose.

**Q: Payment methods?**
A: Bank transfer (annual), credit card (monthly), QRIS (coming soon).

**Q: Can I cancel anytime?**
A: Monthly: Yes. Annual: Refund prorated (first 30 days full refund).

**Q: Do you offer discounts?**
A:
- Annual vs monthly: Save 1 month (Rp 100K)
- Referrals: Refer 3 friends → 1 month free
- Non-profits: 30% discount (email us)

**Q: Invoice/receipt for accounting?**
A: Yes, auto-emailed after each payment. Download in app anytime.

---

### Support

**Q: How do I get help?**
A:
- In-app chat (9am-6pm WIB, Mon-Fri)
- Email: support@pwbi.co.id (< 24 hour response)
- FAQ: help.pwbi.co.id/a4a
- Video tutorials: YouTube.com/PWBIIndonesia

**Q: Is phone support available?**
A: Yes, for Premium Support add-on (+Rp 200K/year).

**Q: Do you offer training?**
A: Yes, free webinars weekly + in-app tutorials. Custom training: contact us.

---

## Troubleshooting

### Setup & Integration Issues

**Problem: POS integration not working**

**Possible causes:**
- Wrong API credentials
- POS system down
- Firewall blocking connection

**Solutions:**
1. Verify API credentials (copy-paste carefully)
2. Test connection (Settings → Integrations → Test)
3. Check POS system status (contact POS support)
4. Contact A4a support with error message

**Problem: Historical data not importing**

**Possible causes:**
- File format wrong
- Date format incorrect
- Missing required fields

**Solutions:**
1. Download our template (don't modify structure)
2. Date format: YYYY-MM-DD (e.g., 2025-01-15)
3. Required fields: Date, Item Name, Quantity
4. Save as CSV (not Excel .xlsx)
5. Re-upload

---

### Alerts & Notifications

**Problem: Not receiving reorder alerts**

**Check:**
- [ ] Notifications enabled (app settings)
- [ ] Phone notifications ON (system settings)
- [ ] Email not in spam folder
- [ ] WhatsApp number verified (if using WhatsApp)
- [ ] Alert preferences configured (not all disabled)

**Fix:**
1. App → Settings → Notifications → Enable all
2. Phone Settings → A4a → Notifications → Allow
3. Test: Send test alert (Settings → Test Notification)

**Problem: Too many alerts (alert fatigue)**

**Solutions:**
- Increase safety buffer (Settings → Reorder Settings)
- Batch notifications: Daily digest instead of real-time
- Set "quiet hours" (e.g., 10pm-8am no alerts)
- Disable low-priority items (focus on top 20)

**Problem: Alerts seem inaccurate**

**Check:**
- Is current stock level correct? (physical count vs. app)
- Is sales data syncing? (last sync timestamp)
- Is shelf life set correctly?
- Is supplier lead time accurate?

**Fix:**
1. Update current stock (do physical count)
2. Force POS sync (Integrations → Sync Now)
3. Review item settings (shelf life, lead time)
4. Wait 24 hours for AI to recalculate

---

### Data Accuracy Issues

**Problem: Stock levels don't match physical inventory**

**Causes:**
- Unrecorded usage (staff forgot to log)
- Theft/shrinkage
- Spoilage not logged
- Data entry errors

**Solutions:**
1. Do physical count of all items
2. Adjust stock in app (Stock → Adjust → Physical Count)
3. Investigate discrepancies (theft? spoilage?)
4. Train staff to log all usage/waste immediately
5. Weekly spot checks

**Problem: Sales data not syncing from POS**

**Check:**
1. POS integration still connected? (green indicator)
2. POS system experiencing issues?
3. API credentials expired?
4. Last successful sync timestamp?

**Fix:**
1. Re-test integration (Settings → Integrations → Test)
2. Re-enter API credentials if expired
3. Manual upload as temporary workaround
4. Contact support if persists > 24 hours

---

### Performance Issues

**Problem: App slow or laggy**

**Solutions:**
- Close and restart app
- Clear cache (Settings → Clear Cache)
- Update to latest version (App Store/Play Store)
- Check internet connection
- Reduce data range (view last 30 days instead of alltime)

**Problem: App crashes on startup**

**Solutions:**
1. Force quit & restart
2. Restart phone
3. Update app to latest version
4. Reinstall app (data saved in cloud)
5. Contact support with device model & OS version

---

### Feature-Specific Issues

**Problem: Waste tracking not showing savings**

**Reason:** Need at least 30 days of data to compare before/after

**Wait:** Use for 30 days → then see savings report

**Problem: Supplier performance data empty**

**Reason:** Need to rate deliveries

**Action:** After each delivery, rate: On-time? Quality? (takes 10 seconds)

**Problem: Barcode scanning not working**

**Solutions:**
- Grant camera permission (phone settings)
- Clean camera lens
- Good lighting (barcode clear & visible)
- Alternative: Manual item selection

---

### Account & Billing Issues

**Problem: Forgot password**

**Solution:** Login screen → "Forgot Password" → Email reset link

**Problem: Payment failed**

**Causes:**
- Insufficient funds
- Card declined
- Bank blocking online transaction

**Solutions:**
1. Check card balance
2. Contact bank (enable online transactions)
3. Try different card
4. Alternative: Bank transfer (email us for details)

**Problem: Charged twice**

**Action:** Email billing@pwbi.co.id with:
- Account email
- Transaction IDs
- We'll refund within 3-5 business days

---

## Error Messages Explained

**"Insufficient data to forecast"**
- Need more sales history (minimum 3 months)
- Solution: Upload more historical data OR wait as we collect

**"POS connection failed: 401 Unauthorized"**
- API credentials wrong or expired
- Solution: Re-enter credentials

**"Stock level below zero"**
- You recorded more usage than available stock
- Solution: Adjust stock level (likely data entry error)

**"Shelf life exceeded current stock age"**
- Item marked as already expired
- Solution: Check receive date, adjust if error

**"Duplicate item name"**
- Item already exists
- Solution: Search before creating new, or rename

---

## Best Practices

### For Accuracy

 Update stock levels daily (ideally real-time)
 Log all waste immediately (don't wait)
 Do weekly physical counts (spot check 10 items)
 Review & approve recommended orders (don't blindly trust)
 Adjust settings based on learnings (shelf life, lead time)

### For Savings

 Act on "expiring soon" alerts (create specials, donate)
 Batch orders to save delivery fees
 Order on optimal days (supplier discounts)
 Review waste reports weekly (identify patterns)
 Discontinue consistent slow-movers

### For Efficiency

 Enable notifications (don't miss alerts)
 Use barcode scanning (faster receiving)
 Set up auto-orders for stable items (future feature)
 Train all staff on basic usage
 Review dashboard daily (5 min morning routine)

---

## Still Need Help?

### Contact Support

**Email:** support@pwbi.co.id
**In-App Chat:** Tap "?" icon
**Phone** (Premium only): +62-21-XXXX-XXXX
**Hours:** Mon-Fri 9am-6pm WIB

**What to include:**
- Account email
- Screenshot of issue
- Steps to reproduce
- Device/OS version
- Error message (if any)

### Community

**WhatsApp Group:** [Join link]
**Facebook Group:** PWBI A4a Users Indonesia
**YouTube:** Tutorial videos & tips

---

## Feature Requests

Have an idea? We'd love to hear it!

**Submit:** feedback@pwbi.co.id OR in-app (Settings → Feedback)

**Most requested (in development):**
1. Recipe management
2. Auto-ordering (full automation)
3. Supplier marketplace
4. Offline mode improvements
5. Multi-currency support

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 2.0 | Comprehensive FAQ & troubleshooting | Support Team |
| 2025-12 | 1.0 | Initial FAQ | Support Team |

---

**We're here to help you succeed! **

---

## Related

- **[[products/07-inventory-optimizer/07-inventory-optimizer|Inventory Optimizer Product]]** - Product overview
- **[[products/07-inventory-optimizer/pricing-launch|Pricing & Launch Plan]]** - Pricing and support details
- **[[products/07-inventory-optimizer/operations/operations|Operations]]** - Support operations
- **[[products/07-inventory-optimizer/training/training|Training]]** - Training materials
- **[[products/07-inventory-optimizer/technical/technical|Technical]]** - Technical documentation
