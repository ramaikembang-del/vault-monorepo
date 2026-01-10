# Support Runbook - COGS/HPP Calculator

**Product:** R2c - COGS/HPP Calculator
**Product ID:** R2c
**Tiers:** Basic (Rp 75K) & Standard (Rp 100K)
**Support Channels:** Email & WhatsApp (Standard tier)
**Owner:** Customer Success Lead

---

## Support Philosophy

**Core Principle:** "Teach, Don't Just Fix"

Recipe costing is unfamiliar to most Mikro owners. We must **educate while solving** (e.g., "Here's how to fix it + why COGS % matters").

**Why This Works:** Indonesian F&B owners often lack formal business education. Empathetic, educational support builds trust and reduces repeat tickets.

**Strategic Impact:** Recipe software is complex. Good support = 40% lower churn vs self-service-only competitors.

**Cross-Reference:** See [[onboarding-guide|onboarding-guide.md]] for common first-week issues and [[gate-tracking|gate-tracking.md]] for activation barriers.

---

## Top 10 Issues & Solutions

### 1. "My Recipe Cost Seems Wrong" (30% of tickets - MOST COMMON)

**Symptom:** User says "Chocolate Cake shows Rp 15K cost but I know it's more like Rp 25K"

**Root Causes:**
1. **Missing ingredients** (40%) - Forgot packaging, vanilla extract, etc.
2. **Wrong ingredient prices** (35%) - Using default prices, not actual purchase costs
3. **Unit conversion error** (15%) - Entered "200g flour" but ingredient priced per "kg"
4. **Yield misunderstanding** (10%) - Recipe yields 2 cakes but entered "1"

**Fix Script (Standard Tier - WhatsApp):**
```
Hi [Name]!

Saya lihat resep Chocolate Cake Anda - mari kita cek bersama.

Biaya sekarang: Rp 15K
Anda rasa harus: Rp 25K

Penyebab umum:
1. **Bahan kurang lengkap?** Coba cek:
 - Packaging/kotak: Rp 2-3K
 - Vanilla/pewangi: Rp 1.5K
 - Telur (lupa input?)

2. **Harga bahan salah?**
 - Cocoa powder pakai harga default Rp 80K/kg
 - Harga real Anda: Rp 100K/kg?
  ->  Bedanya Rp 1K per kue

Mau saya bantu cek detailnya? Reply "YES" + kirim foto resep lengkap Anda.

- [Rep Name]
```

**Escalation:** If still doesn't match after fixing above  ->  Review with user on video call (complex recipe).

---

### 2. "How Do I Know If My COGS % is Good?" (20% of tickets)

**Symptom:** "My cake is 42% COGS. Is that okay?"

**Educational Fix Script:**
```
Subject: Is 42% COGS Good? Here's the Answer

Hi [Name],

Great question! Let me explain COGS % benchmarks:

**F&B Industry Standards:**
- **20-30% = Excellent** (High margin, premium pricing)
- **30-35% = Good** (Healthy for most bakeries)
- **35-40% = Acceptable** (Okay but watch for cost increases)
- **40%+ = Warning** (Thin margins, price review needed)

Your Chocolate Cake @ 42% COGS:
- Not terrible, but room for improvement
- Options:
 1. **Raise price:** Rp 50K  ->  Rp 55K = 38% COGS (better)
 2. **Reduce cost:** Find cheaper cocoa supplier  ->  Save Rp 2K/cake
 3. **Both:** Best option = 34% COGS (healthy zone)

Want help calculating optimal price? I can show you in 5 mins.

Best,
[Support Rep]
```

**Proactive Knowledge Base:** Create "COGS % Benchmarks by Product Type" guide (Bread 25-30%, Cakes 30-35%, Beverages 20-25%).

---

### 3. "Ingredient Price Changed - How to Update All Recipes?" (15% of tickets)

**Symptom:** "Flour price went from Rp 15K to Rp 18K/kg. Do I need to edit all 20 recipes manually?"

**Fix Script:**
```
Subject: Flour Price Update  ->  Auto-Update All Recipes

Hi [Name],

Good news! You DON'T need to edit each recipe manually!

Here's how R2c works:

1. Go to "Ingredients" tab
2. Find "Flour"
3. Click "Log New Purchase"
4. Enter: 50kg @ Rp 18,000/kg
5. Save

R2c automatically:
[x] Recalculates weighted average (Rp 15K  ->  Rp 16.5K/kg avg)
[x] Updates ALL 20 recipes using flour
[x] Shows you which recipes affected most

Result:
"15 recipes updated. Avg cost increase: Rp 750/item. Review pricing?"

[Watch 1-Min Video: How to Update Ingredient Prices]

Pro Tip: Log purchases weekly so costs stay accurate!

Best,
[Support Rep]
```

---

### 4. "What's Variance Analysis?" (10% of tickets)

**Symptom:** "R2c says I have 12% variance. What does this mean?"

**Educational Fix:**
```
Subject: Variance Analysis Explained (Where Did Rp 1M Go?)

Hi [Name],

Variance = difference between theory and reality.

**Theoretical COGS (from recipes):**
- You sold 100 Chocolate Cakes @ Rp 23K cost = Rp 2. Rp 2.3M

**Actual COGS (ingredient purchases):**
- You bought Rp 2.6M worth of ingredients

**Variance:** Rp 2.6M - Rp 2.3M = Rp 300K (12%)

**Why?**
1. **Waste/Spoilage** (5-8% normal) - Dropped food, expired ingredients
2. **Theft** (2-3%) - Staff tak

ing ingredients home
3. **Portion Inconsistency** (3-5%) - Chef using more than recipe calls for

**12% is high.** Normal is 5-8%.

**Action Steps:**
1. Check storage (flour getting damp  ->  wasted)
2. Train staff on portion control
3. Count inventory weekly

Reduce to 8% = save Rp 100K/month.

Need help investigating? Reply and we'll troubleshoot together.

Best,
[Support Rep]
```

---

### 5. "Can I Import Recipes from Excel?" (8% of tickets)

**Symptom:** "I have 50 recipes in Excel. Do I need to re-enter manually?"

**Fix Script:**
```
Subject: Yes! Import Recipes from Excel (Beta Feature)

Hi [Name],

Great news - Excel import is available (Standard tier only).

**How to Import:**
1. Format your Excel like this:

| Recipe Name | Ingredient | Quantity | Unit | Sale Price |
|-------------|-----------|----------|------|------------|
| Chocolate Cake | Flour | 200 | g | 50000 |
| Chocolate Cake | Sugar | 150| g | 50000 |

2. Save as CSV
3. Go to R2c  ->  "Recipes"  ->  "Import from CSV"
4. Upload file

R2c will:
[x] Create all recipes
[x] Match ingredients to your library (or create new ones)
[x] Calculate COGS automatically

**Caveat:** Ingredient prices must be logged first (for accurate costs).

Want help formatting your Excel? Send me the file and I'll prepare it for import.

Best,
[Support Rep]
```

---

### 6-10. Less Common Issues (3-5% each)

**6. "How do I delete a recipe?"** - Settings  ->  Recipes  ->  [Recipe]  ->  Delete (confirm)
**7. "Can I share recipes with my chef?"** - Premium feature: Multi-user access (coming Q2)
**8. "Why is my dashboard slow?"** - Clear browser cache OR reduce to <100 recipes (performance limit)
**9. "Can R2c suggest cheaper ingredient alternatives?"** - Future feature (Month 12+)
**10. "How do I export all recipes to PDF?"** - Dashboard  ->  "Export"  ->  "All Recipes PDF"

---

## WhatsApp Bot Scripts (Future - Month 6+)

**Quick Ingredient Logging:**

**Trigger:** User sends "Tepung 50kg 900rb"
**Bot Response:**
```
[x] Logged!

Ingredient: Flour (Tepung)
Purchase: 50kg for Rp 900,000
Unit Cost: Rp 18,000/kg (up from Rp 15K)

15 recipes affected. Cost increased avg Rp 600/item.

[View Affected Recipes]

- R2c Bot
```

---

## Escalation Matrix

| Priority | Issue Example | Response Time | Owner | Action |
|----------|---------------|---------------|-------|--------|
| **P1 - Critical** | COGS calculation wrong (algorithm bug), Data loss | <1 Hour | Engineering + PM | Fix immediately |
| **P2 - High** | Recipe import failing, Weighted avg not updating | <4 Hours | Product Lead | Patch within 24h |
| **P3 - Normal** | "Is 40% COGS good?", How to use variance analysis | <24h (Basic) / <4h (Standard) | Support Rep | Educational response |
| **P4 - Low** | Feature request, General feedback | <72 Hours | PM (weekly review) | Log in backlog |

**Escalation Triggers:**
- User says "cancel subscription"  ->  CS Manager (retention risk)
- 2nd ticket on same recipe  ->  Product (may be UX issue)
- Angry tone  ->  CS Manager (empathy response)

---

## SLA (Service Level Agreement)

**Basic Tier (Rp 75K/month):**
- Email: <48h response (business days)
- Resolution: <72h (90% of cases)
- Availability: Mon-Fri, 9am-5pm WIB

**Standard Tier (Rp 100K/month):**
- Email: <24h response (including weekends)
- WhatsApp: <4h response (9am-9pm daily)
- Resolution: <48h (95% of cases)
- Availability: 7 days/week

---

## Monthly Support Routine

### Day 1-5 (Month-End Recipe Review Rush)

**Expected Volume:** 2Ã— normal (users reviewing all recipes for pricing decisions)

**Focus:** "Is my COGS good?" questions, pricing optimization requests

**Proactive Actions:**
- Email Reminder (25th of month): "Month end coming - review your COGS now!"

---

### Day 10-15 (Mid-Month Normal)

**Expected Volume:** Normal
**Focus:** Recipe creation help, ingredient price updates

**Proactive Actions:**
- Educational Email: "Quick Win: Use variance analysis to find waste"

---

## Ticket Volume Projections

**Month 1 (Launch):**
- Week 8: 25 tickets (recipe creation confusion)
- Week 9: 15 tickets (settling in)
- Week 10: 20 tickets (pricing questions)
**Total:** ~60 tickets

**Support Load:** 1 rep can handle 60 tickets @ 1 hour/ticket = sustainable

**Scaling Trigger:** If tickets >100/month OR S LA <90%, hire 2nd rep.

---

## Related Documents

**Product Context:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/R2c-cogs-calculator|../]] - R2c overview
- [[onboarding-guide|onboarding-guide.md]] - Common Day 1-7 issues
- [[gate-tracking|gate-tracking.md]] - Activation barriers

**User Journey:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/product-strategy/market-positioning|market-positioning.md]] - Target personas (bakeries, catering)
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/product-scope|product-scope.md]] - Feature boundaries

---

**Last Updated:** 2025-12-26
**Owner:** Customer Success Lead
**Next Review:** Post-launch ticket trend analysis (Week 12)


