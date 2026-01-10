# A4a Inventory Optimizer - User Guide

**Product:** A4a - Inventory Optimizer
**Audience:** Café/restaurant owners, managers
**Platform:** iOS, Android, Web
**Last Updated:** December 2025

---

## Overview

A4a helps you manage inventory with AI. Get smart reorder alerts, reduce waste, and save 5+ hours/week.

**What you'll learn:**
- How to set up A4a (15 minutes)
- Daily workflow (5 minutes/day)
- How to interpret recommendations
- Tips for maximum savings

---

## Getting Started (15 Minutes)

### Step 1: Download & Sign Up (2 min)

**Download:**
- iOS: App Store → Search "PWBI A4a"
- Android: Google Play → Search "PWBI A4a"
- Web: app.pwbi.co.id/a4a

**Sign Up:**
1. Email + password OR
2. Google/Facebook login
3. Verify email
4. Start 14-day free trial

### Step 2: Connect Your Data (5 min)

**Option A: POS Integration (Recommended)**

**Supported POS:**
- Moka
- Olsera
- Pawoon
- Qasir
- Others (request integration)

**Steps:**
1. Tap "Connect POS"
2. Select your POS
3. Enter API credentials (get from POS admin)
4. Test connection
5. Import last 3 months of sales

**Option B: Manual Upload**

1. Download Excel template
2. Fill in sales data (last 3 months minimum)
 - Date, Item Name, Quantity Sold
3. Upload file
4. Review & confirm

**Why 3 months?** AI needs historical data to learn your patterns. More data = better predictions.

### Step 3: Set Up Inventory Items (8 min)

For each item you track:

**Required Fields:**
- Item name: "Coffee Beans - Arabica"
- Unit: kg / liter / pcs
- Current stock: 10 kg
- Reorder point: 5 kg (when to alert)

**Optional But Recommended:**
- Supplier name & contact
- Lead time: 3 days (how long delivery takes)
- Minimum order quantity: 5 kg
- Unit cost: Rp 120,000/kg
- Shelf life: 60 days
- Storage location: "Pantry A"

**Bulk Import:**
- Download template
- Fill in all items
- Upload

**Pro Tip:** Start with your top 20 items (80% of value). Add others later.

---

## Daily Workflow (5 Minutes)

### Morning Routine

**1. Check Reorder Alerts (2 min)**

Open app → Tap "Alerts"

You'll see items that need reordering:

```
 URGENT: Reorder Today
Coffee Beans - Arabica
Current: 6 kg
Will run out: Tomorrow
Recommended order: 15 kg
[Order Now]

 REORDER SOON (2-3 days)
Milk - Fresh
Current: 20L
Will run out: 3 days
Recommended order: 40L
[Snooze] [Order Now]
```

**Actions:**
- **Order Now:** Creates draft order, send to supplier
- **Snooze:** Remind tomorrow
- **Override:** Adjust quantity if needed

**2. Update Stock Levels (2 min)**

**When receiving deliveries:**
1. Tap "Receive Stock"
2. Scan barcode OR select item
3. Enter quantity received
4. Mark as received

**When items are used/wasted:**
1. Tap "Adjust Stock"
2. Select item
3. Choose reason: Used, Waste, Damaged, Other
4. Enter quantity
5. Save

**Why update?** Accurate data = accurate predictions.

**3. Review Waste Alerts (1 min)**

```
EXPIRING SOON
Tomatoes - Roma
Expires: 2 days
Current stock: 5 kg
Suggestion: Create tomato soup special
[Mark as Used] [Donate] [Waste]
```

**Pro Tip:** Set up "Use It or Lose It" specials to move expiring inventory.

---

## Weekly Tasks (30 Minutes)

### Every Monday: Review Performance

**1. Waste Report**
- Total waste this week: Rp 450K (down from Rp 900K last week!)
- Top waste items: Lettuce, Tomatoes, Bread
- Improvement: 50% reduction

**2. Stock-Out Report**
- Stock-outs this week: 0 (was 3 last week)
- Near-misses: 2 items (got close)

**3. Ordering Summary**
- Orders placed: 8
- Total spent: Rp 4.5M
- Avg delivery time: 2.8 days

**4. Adjust Settings (if needed)**
- Increase reorder points for frequently-low items
- Update shelf life estimates
- Add new items
- Remove discontinued items

---

## Key Features Explained

### Smart Reorder Alerts

**How It Works:**
1. AI analyzes your sales velocity (how fast you sell each item)
2. Factors in supplier lead time
3. Accounts for seasonality (weekends sell more)
4. Predicts stock-out date
5. Alerts you 2-3 days before (giving time to order)

**Example:**
- Coffee beans usage: 2 kg/day average
- Current stock: 8 kg
- Lead time: 3 days
- **Alert triggers:** When stock hits 6 kg (3 days × 2 kg/day = 6 kg safety buffer)

**Customization:**
- Adjust safety buffer (conservative vs. lean)
- Set preferred order days (e.g., Monday & Thursday only)
- Notification preferences (push, email, SMS, WhatsApp)

### Optimal Order Quantity

**AI considers:**
- Sales forecast (next 7-30 days)
- Shelf life constraints
- Storage capacity
- Minimum order quantities
- Price break points (order 20kg @ Rp 110K vs. 10kg @ Rp 120K)
- Budget constraints

**Result:** Perfect balance of:
- Never running out
- Never over-ordering
- Maximizing bulk discounts
- Fitting storage limits

**You can override** if you know something AI doesn't (e.g., big event coming).

### Waste Tracking & Prevention

**Categories:**
- **Expiration:** Reached shelf life
- **Damage:** Dropped, contaminated, etc.
- **Overproduction:** Made too much
- **Trim/Prep:** Normal kitchen waste

**Insights:**
- Waste trends (up/down?)
- Most wasted items
- Waste reasons (why?)
- Financial impact (Rp lost)

**Prevention:**
- FIFO reminders (use oldest stock first)
- Expiring soon alerts
- Slow-moving item identification
- Portion control recommendations

### Supplier Performance

**Track:**
- On-time delivery %
- Price consistency
- Quality score (you rate each delivery)
- Average lead time

**Compare:**
Multiple suppliers for same item → pick best performer

**Example:**
```
Coffee Beans - Arabica

Supplier A:
- Price: Rp 115K/kg
- On-time: 95%
- Quality: 4.8/5
- Lead time: 2.5 days

Supplier B:
- Price: Rp 110K/kg (cheaper!)
- On-time: 70% (unreliable)
- Quality: 4.2/5
- Lead time: 4 days

Recommendation: Supplier A (better value despite higher price)
```

---

## Mobile App Features

### Home Dashboard

**At-a-glance view:**
- Items needing immediate reorder (red)
- Items to reorder soon (yellow)
- Items well-stocked (green)
- This week's waste: Rp XX (-XX% vs last week)
- Days of inventory: XX days

**Quick Actions:**
- Scan barcode (receive stock)
- Add new item
- View full inventory
- Generate reports

### Barcode Scanning

**Speed up receiving:**
1. Tap scan icon
2. Point camera at barcode
3. Auto-fills item details
4. Enter quantity → Done

**Works with:**
- Product barcodes
- Custom labels (print from app)

### Offline Mode

**No internet? No problem:**
- View current stock levels
- Update quantities (syncs when online)
- View pending alerts
- Basic calculations

---

## Reports & Analytics

### Available Reports

**1. Waste Report**
- Total waste (by value)
- Waste % of inventory
- Waste by category
- Waste by item
- Month-over-month trend

**2. Savings Calculator**
- Before A4a: Rp XX waste/month
- After A4a: Rp YY waste/month
- **Savings: Rp ZZ**
- ROI: XX%

**3. Stock Movement**
- Items sold (velocity)
- Items ordered
- Items wasted
- Inventory turnover

**4. Supplier Performance**
- Delivery times
- Price trends
- Quality scores
- Reliability metrics

### Export Options

- **Excel:** Full data export
- **PDF:** Formatted reports
- **Email:** Schedule automated delivery
- **API:** Connect to accounting software

---

## Tips & Best Practices

### Accuracy Tips

**1. Update Stock Immediately**
- Receive deliveries → update right away
- Use/waste items → log same day
- Don't wait until end of week

**2. Physical Counts Weekly**
- Pick 5-10 items per week
- Compare physical vs app
- Adjust if needed (shrinkage, theft, etc.)

**3. Categorize Waste Correctly**
- Expiration vs Damage vs Overproduction
- Helps AI identify patterns

### Savings Tips

**1. Trust The AI (At First)**
- Let it learn for 30 days
- Then adjust if needed
- It gets smarter over time

**2. Order On Optimal Days**
- Set preferred delivery days
- Batch orders to save delivery fees
- Coordinate with supplier schedules

**3. Use "Expiring Soon" Features**
- Create daily specials
- Donate to food banks
- Staff meals (better than trash)

**4. Review Weekly Reports**
- Identify waste patterns
- Adjust portions/recipes
- Discontinue slow-movers

### Time-Saving Tips

**1. Bulk Setup**
- Import all items at once (Excel)
- Set up all suppliers upfront
- Enable auto-ordering (advanced)

**2. Automate Notifications**
- WhatsApp alerts (instant)
- Daily digest email (morning summary)
- Weekly report (every Monday)

**3. Use Templates**
- Save frequent orders as templates
- One-click reorder
- Seasonal templates (holiday prep)

---

## Troubleshooting

### "Recommendations seem wrong"

**Check:**
- Is sales data accurate? (POS sync working?)
- Is current stock level correct? (physical count matches app?)
- Is shelf life set correctly?
- Is lead time accurate?

**Fix:**
- Update stock levels
- Verify POS integration
- Adjust settings
- Contact support if persists

### "Too many alerts"

**Adjust:**
- Increase safety buffer (reorder earlier = fewer urgent alerts)
- Batch notifications (daily digest instead of real-time)
- Set "quiet hours" (no alerts 10pm-8am)

### "Not receiving alerts"

**Check:**
- Notification settings ON (app & phone)
- Email not in spam folder
- WhatsApp number verified
- Alert preferences configured

### "POS integration not syncing"

**Steps:**
1. Check API credentials (still valid?)
2. Test connection (Settings → Integrations → Test)
3. Check POS system status (is their API down?)
4. Contact support with error message

---

## Getting Help

### In-App Support

- **Chat:** Tap "?" icon → Live chat (9am-6pm WIB)
- **FAQ:** Browse common questions
- **Video Tutorials:** Step-by-step guides

### Email Support

support@pwbi.co.id
Response time: < 24 hours

### Phone Support (Premium only)

+62-21-XXXX-XXXX
Mon-Fri 9am-6pm WIB

### Community

- **WhatsApp Group:** Share tips with other users
- **Facebook Group:** PWBI A4a Users Indonesia
- **YouTube:** Tutorial videos

---

## Keyboard Shortcuts (Web)

- `N` New item
- `R` Receive stock
- `A` View alerts
- `W` Waste report
- `S` Search
- `/` Focus search bar

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 2.0 | Comprehensive expansion | Product Team |
| 2025-12 | 1.0 | Initial guide | Product Team |

---

**Questions?** Chat with us in-app or email support@pwbi.co.id

**Happy Optimizing! **

---

## Related

- **[[products/07-inventory-optimizer/07-inventory-optimizer|Inventory Optimizer Product]]** - Product overview
- **[[products/07-inventory-optimizer/faq-troubleshooting|FAQ & Troubleshooting]]** - Detailed troubleshooting guide
- **[[products/07-inventory-optimizer/training/training|Training]]** - Training materials
- **[[products/07-inventory-optimizer/technical-specs|Technical Specs]]** - Technical specifications
- **[[products/07-inventory-optimizer/pricing-launch|Pricing & Launch]]** - Pricing and free trial details
