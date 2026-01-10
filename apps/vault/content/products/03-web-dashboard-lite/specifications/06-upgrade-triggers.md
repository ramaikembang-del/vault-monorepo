# Upgrade Triggers: Lite → Full SaaS

## Purpose

This document defines the natural conversion triggers that prompt Web Dashboard Lite users to upgrade to Full SaaS Platform.

**Goal:** 30-50% conversion rate from Lite to Full SaaS within 12-18 months of Lite usage

---

## Intentional Product Limitations

Web Dashboard Lite is **designed to be outgrown**. The following limitations are strategic, not technical.

### Hard Caps (Cannot Be Overcome in Lite)

| Limitation | Cap | Why |
|------------|-----|-----|
| **Outlets** | 1 location only | Multi-outlet = Full SaaS Pro tier |
| **Metrics** | 30-50 maximum | 150 metrics = Full SaaS |
| **Users** | 1-3 devices | Team management = Full SaaS |
| **Data Refresh** | Daily (EOD CSV import) | Real-time = Full SaaS |
| **Cloud Sync** | Optional backup only | Always-on cloud = Full SaaS |

**Lite is Pillar 3: Expansion** - users must "graduate" to Pillar 5 (Full SaaS) as they grow.

---

## Primary Conversion Triggers

### Trigger 1: Opens 2nd Outlet

**Signal:**
- User mentions "new location" in support
- User asks: "Can I compare 2 outlets?"
- User manually tracks 2 locations in separate Lite instances

**In-App Prompt:**
> " Congrats on opening your 2nd outlet! Web Dashboard Lite only supports 1 location. Upgrade to **Full SaaS Pro** to see consolidated analytics across all locations."

**CTA:** "See Pricing" → Rp 900K-1.2M/month (Pro tier, 2-3 outlets)

**Expected Conversion:** 60-70% (strong business need)

---

### Trigger 2: Hires 10+ Staff

**Signal:**
- Staff CSV shows >10 unique staff_id entries
- User asks about "team management features"
- User manually tracks staff in Excel (outside Lite)

**In-App Prompt:**
> "Your team is growing! (10+ staff detected). Lite's staff metrics are basic. Upgrade to **Full SaaS Basic** for advanced team analytics: performance tracking, shift optimization, discipline scoring."

**CTA:** "Upgrade Now" → Rp 300-500K/month (Basic tier, 1 outlet, 10-20 staff)

**Expected Conversion:** 30-40% (nice-to-have, not critical)

---

### Trigger 3: Needs Real-Time Data

**Signal:**
- User imports CSV >1× per day
- User asks: "Can I see live sales?"
- User manually checks POS throughout the day

**In-App Prompt:**
> "You're checking data multiple times a day. Lite only updates with CSV imports. Upgrade to **Full SaaS Basic** for real-time POS integration—see sales as they happen."

**CTA:** "See How It Works" → Demo of live dashboard

**Expected Conversion:** 20-30% (depends on POS integration availability)

---

### Trigger 4: Wants More Metrics

**Signal:**
- User views all 30 metrics regularly (power user)
- User asks: "Can I track [metric not in Lite]?"
- User manually calculates metrics in Excel

**In-App Prompt:**
> "You're using all 30 Lite metrics! You're ready for more. **Full SaaS** offers 150+ metrics: CLV, RFM segmentation, forecasting, benchmarking, and more."

**CTA:** "Explore Full Metrics" → Link to Full SaaS metrics catalog

**Expected Conversion:** 15-25% (enthusiast users, not majority)

---

### Trigger 5: Requires Team Access

**Signal:**
- User asks: "Can my manager see the dashboard?"
- User manually screenshots/exports to share with team
- User installs Lite on multiple devices (>3)

**In-App Prompt:**
> "Sharing insights with your team? Lite is single-user. Upgrade to **Full SaaS Basic** for multi-user access with role-based permissions (owner/manager/staff views)."

**CTA:** "Set Up Team Access" → Rp 300-500K/month + Rp 25K/user

**Expected Conversion:** 25-35% (delegation indicates growth)

---

## Secondary Conversion Triggers

### Trigger 6: Mobile Access
User asks: "Is there a mobile app?" → Full SaaS is mobile-responsive (web-based)

### Trigger 7: Cloud-Only Preference
User enables cloud sync frequently → Suggests they'd prefer always-on cloud

### Trigger 8: API/Integration Needs
User asks: "Can I connect to [accounting software]?" → Full SaaS Advanced tier has API

### Trigger 9: Custom Branding
User asks: "Can I white-label this?" → Full SaaS Advanced tier offers white-label

### Trigger 10: Priority Support
User has recurring issues, wants faster support → Full SaaS Pro+ has 4-hour SLA

---

## Conversion UI/UX

### In-App Upgrade Flow

**Step 1: Trigger Detection**
```typescript
// Background check (non-intrusive)
if (outletsDetected > 1) {
 showUpgradeBanner("multi-outlet");
}

if (staffCount > 10) {
 showUpgradeBanner("team-management");
}
```

**Step 2: Contextual Prompt**
```

 You've outgrown Web Dashboard Lite!

 You now have 2 outlets. Lite only
 supports 1 location.

 [View Full SaaS Pricing] [Maybe Later]

```

**Step 3: Comparison Table**
Show side-by-side:
- What you have now (Lite)
- What you'd get (Full SaaS tier)
- Pricing (transparent, no surprises)

**Step 4: Seamless Migration**
- "Your data migrates automatically"
- "No CSV imports anymore — live POS integration"
- "14-day free trial to test Full SaaS"

---

## Upgrade Incentives

### Early Bird Discount
- First 100 Lite users who upgrade: **20% off Full SaaS for 12 months**
- Creates urgency, rewards early adopters

### Loyalty Credit
- Every month using Lite = Rp 20K credit toward Full SaaS
- Example: 6 months on Lite (Rp 200K/mo paid) = Rp 120K credit
- Softens price jump, recognizes commitment

### Referral Bonus
- Refer 3 Lite users who convert to paid → Get 1 month Full SaaS Basic free
- Viral growth incentive

---

## Conversion Tracking

### Metrics to Monitor

| Metric | Definition | Target |
|--------|------------|--------|
| **Trigger Hit Rate** | % of users who hit trigger | 40-60% hit ≥1 trigger |
| **Prompt Click-Through** | % who click upgrade CTA | 15-25% |
| **Trial Sign-Up** | % who start Full SaaS trial | 40-50% of clickers |
| **Trial → Paid** | % who convert after trial | 60-70% |
| **Overall Conversion** | Lite users → Full SaaS paid | 30-50% within 18 months |

### A/B Tests

**Test 1: Prompt Timing**
- Variant A: Show upgrade prompt immediately when trigger hits
- Variant B: Wait 7 days after trigger (let them feel the pain)
- Measure: Which converts better?

**Test 2: Pricing Display**
- Variant A: Show monthly price (Rp 300K/mo)
- Variant B: Show annual savings (Rp 3.6M/yr, save 20%)
- Measure: Which drives more trial sign-ups?

**Test 3: Social Proof**
- Variant A: No social proof
- Variant B: "Join 200+ restaurants using Full SaaS"
- Measure: Impact on conversion rate

---

## Failed Conversion Handling

### If User Clicks "Maybe Later"

**Strategy:** Gentle, non-pushy follow-up

**Week 1:** Email with case study ("How [Similar Restaurant] scaled with Full SaaS")
**Week 2:** In-app tip: "Did you know Full SaaS has [feature]?"
**Week 4:** Offer 14-day free trial (no credit card required)
**Month 3:** Final offer: 20% discount if they upgrade this month

**Never:** Hard sell, pushy sales calls, guilt trips

---

## Success Criteria (Per Trigger)

| Trigger | Hit Rate | Conversion | Revenue Impact |
|---------|----------|------------|----------------|
| **2nd Outlet** | 25-30% of users | 60-70% convert | High (Pro tier = Rp 900K-1.2M/mo) |
| **10+ Staff** | 40-50% of users | 30-40% convert | Medium (Basic tier = Rp 300-500K/mo) |
| **Real-Time** | 15-20% of users | 20-30% convert | Medium |
| **More Metrics** | 10-15% of users | 15-25% convert | Low-Medium |
| **Team Access** | 20-25% of users | 25-35% convert | Medium |

**Blended Conversion Goal:** 30-50% of Lite users upgrade to Full SaaS within 12-18 months

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite]]** - Product overview
- **[[products/03-web-dashboard-lite/sales/pricing-justification|Pricing Justification]]** - Why users upgrade (value prop)
- **[[products/03-web-dashboard-lite/sales/sales-playbook|Sales Playbook]]** - Conversion funnel and nudges
- **[[products/03-web-dashboard-lite/specifications/02-feature-specification|Feature Specification]]** - Free vs Premium features
- **[[products/03-web-dashboard-lite/product-strategy/product-strategy|Product Strategy]]** - Freemium strategy

---

**Status:** Strategy defined, ready to implement prompts
**Owner:** [TBD]
**Last Updated:** December 25, 2025
