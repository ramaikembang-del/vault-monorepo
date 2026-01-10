# E1: Feature Gating (Free vs Premium vs Pro)

## Free Tier (Rp 0/forever)

**Metrics (6 basic):**
- Revenue harian
- Top 5 menu
- Staff performance (basic)
- Customer count
- Average transaction
- Busiest hours

**Limitations:**
- 30 days data history only
- 1 user login
- No PDF export (screenshots only)
- No custom metrics
- No API access
- No multi-outlet

---

## Premium Tier (Rp 250K/mo)

**Everything in Free PLUS:**

**Additional Metrics (6 more = 12 total):**
- Custom calculated metrics (profit margin, waste %, etc.)
- Customer segmentation
- Advanced staff analytics
- Inventory turnover
- Food cost %
- Forecasting

**Extended Capabilities:**
- 1 year data history (vs 30 days)
- 3 user logins (vs 1)
- PDF auto-export weekly
- Custom metric builder (limited to 12 total)

---

## Pro Tier (Rp 350K/mo)

**Everything in Premium PLUS:**

**Advanced Features:**
- Unlimited custom metrics
- Unlimited data history
- 5 user logins
- Multi-outlet dashboard (2-5 outlets)
 - Per-outlet breakdown
 - Consolidated view
 - Cross-outlet comparison
- API access (export data programmatically)
- Dedicated CSM (monthly strategy calls)

---

## Gating Philosophy

### Hard Gates (Enforced by System)

**Metric limit:**
- Free user tries to add 7th metric → Error: "Upgrade to Premium for 12 metrics"
- Premium user tries to add 13th metric → Error: "Upgrade to Pro for unlimited"

**Data history:**
- Free user queries >30 days → Error: "Upgrade for 1-year history"
- Premium user queries >1 year → Error: "Upgrade to Pro for unlimited history"

**User login:**
- Free: 2nd user tries to login → Blocked: "Upgrade to Premium for 3 users"
- Premium: 4th user tries to login → Blocked: "Upgrade to Pro for 5 users"

**PDF Export:**
- Free user clicks "Download PDF" → Popup: "Premium feature. Try 14-day free trial?"

---

### Soft Gates (In-App Messaging)

**Custom metric builder:**
- Free user hovers over "Custom Metrics" → Tooltip: "Premium unlocks this"
- Click → Modal: "Create your own metrics with Premium. Examples: Profit per menu, Waste %, Revenue per sqm"

**Multi-outlet:**
- Free user mentions "2 outlets" in support → WhatsApp: "Pro tier has multi-outlet dashboard—want to see a demo?"

---

## Gating UI/UX

### Locked Feature Display

**Show, don't hide:**
- Display Premium/Pro features in Free tier (grayed out)
- Label: "Premium" or "Pro"
- On click: "Upgrade to access this feature"

**Why:** Creates aspiration, not frustration. Users know what they're missing.

---

### Upgrade Prompts

**Non-intrusive:**
- Don't: Pop-up on every app open
- Do: Show when user tries to use locked feature

**Clear value:**
- Don't: "Upgrade now!" (generic)
- Do: "Unlock custom metrics to track profit per menu. Upgrade to Premium?"

---

## Feature Priority (What to Gate)

### Always Free (Core Value)
- 6 basic metrics (revenue, top menu, staff, customers, avg transaction, busy hours)
- 30 days history (enough to see trends)
- Basic dashboard UI
- WhatsApp support

**Why:** Freemium hook—must provide real value to keep users.

---

### Premium Gates (Professional Use)
- Custom metrics (power users need this)
- PDF export (professional reporting)
- Extended history (long-term analysis)
- Multi-user (team collaboration)

**Why:** Clear business value, justifies Rp 250K/month.

---

### Pro Gates (Enterprise/Multi-Outlet)
- Unlimited metrics (power users)
- Multi-outlet (obvious need for 2+ locations)
- API access (technical integration)
- Dedicated CSM (high-touch support)

**Why:** Only for scaled businesses, justifies Rp 350K/month.

---

## Common Questions

**Q: Why not hide Premium/Pro features entirely in Free?**
A: Users won't know what they're missing. Showing (but locking) creates awareness and aspiration.

**Q: Should we allow 1-day trial of Premium features?**
A: Yes, 14-day trial with full access (see: upsell-triggers.md)

**Q: What if user complains "too limited"?**
A: Valid feedback if Free tier provides <50% value of paid. Adjust gates if churn high.

---

**See Also:**
- `../sales/pricing-justification.md` - ROI for each tier
- `conversion-funnel.md` - How gates drive upgrades
- `../customer-success/upsell-triggers.md` - When to offer Premium

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite Product]]** - Product overview
- **[[products/03-web-dashboard-lite/freemium/conversion-funnel|Conversion Funnel]]** - Free to paid conversion strategy
- **[[products/03-web-dashboard-lite/paid-tiers/pricing-strategy|Pricing Strategy]]** - Tier pricing and positioning
- **[[products/03-web-dashboard-lite/sales/pricing-justification|Pricing Justification]]** - ROI for each tier
- **[[products/03-web-dashboard-lite/customer-success/upsell-triggers|Upsell Triggers]]** - When to offer Premium
