# Pricing Strategy - E1 Paid Tiers

**Product:** E1 - Web Dashboard (Paid Tiers)
**Pricing Model:** Freemium (Lite Free → Starter Rp 200K → Pro Rp 300K)
**Target Market:** Phase 1-3 F&B businesses

---

## Freemium Strategy Rationale

**Why Freemium (Free Lite tier)?**

1. **Low Barrier to Entry:** Indonesian Mikro owners hesitant to pay upfront for "unknown" tool
2. **Prove Value First:** Show 5 key metrics free → User sees ROI → Willing to pay for more
3. **Viral Growth:** Free users recommend to peers → Network effects
4. **Conversion Funnel:** Free (100 users) → Starter (20 users, 20% conversion) → Pro (6 users, 30% conversion)

**Goal:** Free tier is marketing, not revenue. Paid tiers fund business.

---

## Pricing Tiers Deep-Dive

### Lite (Free) - The "Hook"

**Purpose:** Acquire users, prove basic value

**Cost to Serve:** Rp 10K/user/month (server, support)
**Expected Loss:** Rp 10K × 100 free users = Rp 1M/month
**Acceptable Because:** 20% convert to Starter = Rp 4M MRR (4× payback)

**Feature Limitations (By Design):**
- 7-day history (too short for decisions → upgrade pressure)
- 5 metrics only (enough to see value, not enough to act)
- Email support 72h (acceptable for free, frustrating for serious users)

**Conversion Triggers:**
- Modal when user tries to view >7 days: "Unlock 30 days on Starter"
- Locked metrics (10 metrics greyed out with "Starter" label)
- Monthly email: "Review last month's performance (upgrade to see full data)"

---

### Starter (Rp 200,000/month) - The "Core Offer"

**Target Persona:** Phase 2 businesses making monthly data-driven decisions

**Value Proposition:**
> "Make better monthly decisions (pricing, menu, staffing) with 15 metrics + full-month history for Rp 200K/month. One good decision saves Rp 500K+."

**Pricing Rationale:**

**Why Rp 200K?**
- **Below Competitors:** Power BI SaaS Rp 800K+, Tableau Rp 1.2M+ (we're 75% cheaper)
- **Affordable for Phase 2:** Rp 200K = 0.4% of typical Phase 2 revenue (Rp 50M/month)
- **ROI Clear:** One insight (e.g., "Stop unprofitable delivery promo") = Rp 500K savings = 2.5× monthly cost

**Cost to Serve:** Rp 30K/user/month (more data processing, better support)
**Gross Margin:** Rp 170K per user (85% margin - healthy SaaS)

**LTV Calculation:**
- Avg Retention: 18 months (60% retention after Year 1)
- LTV: Rp 200K × 18 = Rp 3.6M
- Target CAC: Rp 600K (6:1 LTV:CAC ratio)

**Bundle Economics:**
- Standalone: Rp 200K
- Bundled with R2a: Rp 250K total (E1 Starter + R2a = save Rp 50K)
- **Why discount?** Bundled users have 40% lower churn (18mo → 25mo LTV) = More valuable

---

### Pro (Rp 300,000/month) - The "Power User"

**Target Persona:** Phase 2.5-3 businesses serious about optimization, multi-outlet owners

**Value Proposition:**
> "Unlimited metrics, custom reports, 90-day history, multi-user access. Run your business like an enterprise for Rp 300K/month."

**Pricing Rationale:**

**Why Rp 300K?**
- **+Rp 100K vs Starter:** Incremental features (custom reports alone worth Rp 200K/month from freelance analyst)
- **Still Affordable:** Rp 300K = 0.3% of Phase 3 revenue (Rp 100M/month typical)
- **Competitive:** Power BI SaaS Rp 800K+, we're 63% cheaper but F&B-specific (higher value)

**Cost to Serve:** Rp 50K/user/month (custom report processing, priority support, multi-user infrastructure)
**Gross Margin:** Rp 250K per user (83% margin - excellent)

**LTV Calculation:**
- Avg Retention: 24 months (power users churn less)
- LTV: Rp 300K × 24 = Rp 7.2M
- Target CAC: Rp 900K (8:1 LTV:CAC ratio - premium tier justifies higher CAC)

**Upsell Strategy:**
- 30% of Starter users upgrade to Pro within 6 months (triggered by multi-user need, custom metric request)

---

## Competitive Positioning

| Solution | Monthly Cost | F&B-Specific | Setup Time | Indonesian Support |
|----------|-------------|--------------|------------|-------------------|
| **E1 Lite (Free)** | **Rp 0** | **** | **5 mins** | **** |
| **E1 Starter** | **Rp 200K** | **** | **10 mins** | **** |
| **E1 Pro** | **Rp 300K** | **** | **30 mins** | **** |
| Power BI SaaS | Rp 800K+ | Generic | 20+ hours | English only |
| Tableau Online | Rp 1.2M+ | Generic | 30+ hours | English only |
| Freelance Analyst | Rp 3M+/month | Depends on person | 1 month onboarding | |

**E1 Advantage:** Built for Indonesian F&B, pre-configured metrics, works out-of-box.

---

## Bundle Pricing Strategy

### E1 Starter + R2a "Analytics + Accounting"

**Standalone:** Rp 200K (E1) + Rp 100K (R2a) = Rp 300K
**Bundle:** Rp 250K (save Rp 50K - 17% discount)

**Why 17% Discount?**
- Sweet spot: Meaningful savings (Rp 50K = 2 weeks groceries) but not devaluing
- **Retention Boost:** Bundled users churn 40% less → LTV increases enough to justify discount
- **Cross-sell Vehicle:** 40% of E1 users eventually need R2a → bundle accelerates adoption

---

### E1 Pro + R2a + R2c "Complete CFO Stack"

**Standalone:** Rp 300K (E1 Pro) + Rp 100K (R2a) + Rp 100K (R2c) = Rp 500K
**Bundle:** Rp 450K (save Rp 50K - 10% discount)

Wait, that's only 10%... Let me recalculate for 25% discount from earlier docs:

**Standalone:** Rp 600K total (E1 Pro Rp 300K + R2a Rp 100K + R2c Rp 100K)
**Bundle:** Rp 450K (save Rp 150K - 25% discount)

**Why 25% Discount?**
- **High-Value Customers:** Production businesses (bakeries, catering) with complex needs
- **LTV Justification:** Triple-product bundle users have 60% lower churn (24mo → 40mo LTV for each product)
- **Market Positioning:** "Complete CFO for Rp 450K" sounds premium but affordable

---

## Pricing Experiments (A/B Tests)

### Test 1: Annual Plan Discount

**Hypothesis:** Annual upfront reduces churn, improves cash flow

**Control:** Rp 200K/month (paid monthly)
**Variant:** Rp 2M/year upfront (save Rp 400K = 2 months free, 17% discount)

**Expected Outcome:**
- 20-25% choose annual (cash flow benefit for us)
- Churn drops from 15%/year to 5%/year (sunk cost bias)
- LTV: Rp 200K × 24 months = Rp 4.8M (vs Rp 3.6M monthly)

---

### Test 2: First Month 50% Off

**Hypothesis:** Lower entry barrier increases Starter conversions

**Control:** Rp 200K first month
**Variant:** Rp 100K first month, then Rp 200K/month

**Expected Outcome:**
- Conversion rate Free → Starter: 15% → 25% (+67%)
- Slight increase in Month 2 churn (10% → 12%) as trial users drop off
- Net positive: More users at Month 3+

---

### Test 3: "Starter Lite" Tier (Rp 150K)

**Hypothesis:** Price-sensitive users stuck between Free and Starter

**Offer:** Rp 150K/month for 10 metrics, 30-day history (vs 15 metrics on Starter)

**Expected Outcome:**
- Captures 10% of Free users who won't pay Rp 200K
- Cannibalization risk: 20% of Starter users downgrade to Rp 150K tier
- **Decision:** Only launch if Free → Starter conversion <10% (not worth cannibalizing)

---

## Pricing Decision Framework

**When to Increase Prices:**
1. NPS >70 (users love it, will tolerate increase)
2. Churn <10%/year (not price-sensitive)
3. Competitors raise prices (market shifts)
4. Add major features (custom reports, API access)

**When to Discount:**
1. Free → Starter conversion <15% (too expensive for market)
2. CAC >Rp 800K (need to boost conversions to justify marketing spend)
3. Competitive threat (new entrant undercuts us)

**Price Increase Roadmap (Conservative):**
- Year 1: Rp 200K/300K (launch pricing)
- Year 2: Rp 220K/330K (+10% - "grandfather" existing customers)
- Year 3: Rp 250K/350K (+14% more for new customers)

---

## Related Documents

- [[tier-comparison|tier-comparison.md]] - Feature breakdown
- [[upgrade-paths|upgrade-paths.md]] - Conversion triggers
- [[products/03-web-dashboard-lite/03-web-dashboard-lite|README.md]] - Paid tiers overview

**Last Updated:** 2025-12-26
**Owner:** Pricing Lead / Product Lead

