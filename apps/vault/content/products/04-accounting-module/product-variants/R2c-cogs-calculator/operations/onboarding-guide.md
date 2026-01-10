# Onboarding Guide - COGS/HPP Calculator

**Product:** R2c - COGS/HPP Calculator
**Product ID:** R2c
**Goal:** User creates first 5 recipes and logs ingredients within 30 minutes
**Primary Metric:** "Time to First Recipe Cost" (TTFRC) < 30 minutes
**Success Definition:** 60%+ activation rate (users who create 5+ recipes within 7 days)

---

## Onboarding Philosophy

**Core Principle:** "See Value Before Effort"

Recipe entry is tedious. We must show immediate ROI (cost calculation, COGS %) within first 10 minutes to motivate completion.

**Why This Works for Indonesian Production Businesses:**
- Bakery owners are busy (production starts 4am, no time for lengthy setup)
- "Show me one example" culture (demonstrate value with 1 recipe, they'll do 20 more)
- Immediate pricing confidence removes biggest pain ("Am I charging enough?")

**Strategic Impact:** Recipe creation is the #1 activation barrier. 60% of signups never create 5 recipes = churned before value delivered.

**Cross-Reference:** See [[gate-tracking|gate-tracking.md]] for Gate 2B activation metrics (60%+ create 5 recipes).

---

## The "First 30 Minutes" Flow

### Minute 0-5: Welcome & Quick Demo

**Screen 1: Welcome (Indonesian + English)**
```
"Selamat datang di R2c! / Welcome to R2c!"

"Know exactly what every menu item costs to make.
Price with confidence, protect your margins."

[Button: "Lihat Contoh / See Example" | "Mulai / Start Setup"]
```

**If user clicks "See Example":**
Show pre-filled demo recipe:
```
Demo Recipe: Chocolate Cake

Ingredients:
- Flour 200g @ Rp 15K/kg = Rp 3,000
- Sugar 150g @ Rp 20K/kg = Rp 3,000
- Cocoa 50g @ Rp 100K/kg = Rp 5,000
- Eggs 2pcs @ Rp 2K/pc = Rp 4,000
...
Total Cost: Rp 23,450

Sale Price: Rp 50,000
COGS %: 46.9% Too High!

R2c Recommendation:
 ->  Raise price to Rp 55K for healthy 42% COGS
 ->  Or reduce cost by Rp 3,450 (use cheaper cocoa?)

[Start Creating My Own Recipes  -> ]
```

**Goal:** User sees immediate value (pricing recommendation) before doing any work.

---

### Minute 5-15: Create First Recipe (Guided)

**Screen 2: Recipe Quick Creator**

**Pre-fill Most Common Recipe (Contextual):**
- If signup source = "Bakery"  ->  Pre-fill "White Bread"
- If source = "Catering"  ->  Pre-fill "Nasi Kotak"
- If source = "Coffee Shop"  ->  Pre-fill "Latte"

**Example (Bakery Flow):**
```
Let's create your first recipe: White Bread

Recipe Name: [White Bread____________] (editable)
Yield: [1] [pieces v]
Sale Price: Rp [15,000_______]

Common Ingredients (Pre-filled - Edit as needed):
[x] Flour [500] g @ Rp [15,000_] /kg = Rp [7,500__]
[x] Yeast [10] g @ Rp [80,000_] /kg = Rp [800____]
[x] Salt [10] g @ Rp [5,000__] /kg = Rp [50_____]
[x] Sugar [20] g @ Rp [20,000_] /kg = Rp [400____]
[ ] Butter [50] g @ Rp [80,000_] /kg = Rp [4,000__]

[+ Add More Ingredients]

Calculated Cost: Rp 8,750
COGS %: 58.3% @ Rp 15K sale price

Recommendation: Charge Rp 22K for 40% COGS (healthy)

[Save Recipe] [Cancel]
```

**Why Pre-fill?**
- Reduces initial effort (user just confirms/tweaks vs entering from scratch)
- Shows realistic ingredient prices (user learns what "good" COGS % looks like)
- Speeds up activation (5 mins vs 15 mins for manual entry)

---

### Minute 15-25: Log Key Ingredients

**Screen 3: Ingredient Library Setup**

**Context:** After first recipe created, user needs ingredient library for future recipes.

**Quick Setup Flow:**
```
Great! White Bread recipe saved.

To make R2c more accurate, log your recent ingredient purchases:

Quick Entry (Last 3 Purchases):
1. Flour: [50] kg for Rp [750,000] (Rp 15K/kg)  -> This updates all recipes
2. Sugar: [25] kg for Rp [500,000] (Rp 20K/kg)
3. Yeast: [1] kg for Rp [80,000] (Rp 80K/kg)

[Save All 3] [Skip This - I'll Add Later]
```

**Why "Last 3 Purchases"?**
- Establishes weighted average cost immediately
- User likely remembers last week's market trip (easy to recall)
- Sets baseline for future price tracking

**If User Skips:** Show gentle reminder on Day 3: "Update ingredient prices for accurate COGS"

---

### Minute 25-30: The "Aha Moment"

**Screen 4: Recipe Dashboard**

Show user their first recipe in dashboard context:
```
Your Recipes (1 total)

[Chocolate Cake Demo Recipe - Example]
Cost: Rp 23,450 | COGS: 46.9% | Needs Attention

[White Bread - Your Recipe]
Cost: Rp 8,750 | COGS: 58.3% @ Rp 15K | Too High
Recommendation: Charge Rp 22K for 40% COGS

Summary:
- Total Recipes: 1
- Avg COGS%: 58.3%
- Recipes Needing Review: 1 (100%)

Next Steps:
1. Add 4 more recipes (reach 5 for complete picture)
2. Review pricing recommendations
3. Update your menu pricing

[+ Add Another Recipe]
```

**Celebration Moment:**
" Congrats! You now know your exact bread cost. Add 4 more recipes to see your full menu profitability."

---

## Day 1-30 Behavioral Journey

### Day 1: Recipe Creation Sprint

**Goal:** Get to 5 recipes ASAP (activation threshold)

**Email (4 hours after signup):**
```
Subject: You've Created 1 Recipe. Add 4 More to Unlock Full Insights

Hi [Name],

Great start with [White Bread]! You're 1/5 recipes toward full menu visibility.

Quick Win: Add your 4 top-selling items next:
1. Chocolate Bread (usually similar to White Bread - duplicate & edit)
2. Croissant
3. Donut
4. Birthday Cake

Why 5 recipes? That's ~80% of most bakery revenue. Know costs for these = control your business.

[Add Recipes Now - 10 Minutes]

Pro Tip: Use "Duplicate Recipe" to copy White Bread  ->  Chocolate Bread, just add cocoa.

Best,
R2c Team
```

---

### Day 2-3: Ingredient Price Accuracy

**Trigger:** User has 5+ recipes but only 3 ingredients logged

**Email:**
```
Subject: Update Ingredient Prices for Accurate COGS

Hi [Name],

You've created 5 recipes (awesome!). To make sure costs are accurate:

Missing Ingredient

 Prices:
- Cocoa Powder (used in 2 recipes) - no price logged yet
- Butter (used in 4 recipes) - using default Rp 80K/kg (is this right?)
- Eggs (used in 3 recipes) - price = Rp 2K/pc (confirm?)

[Update Prices in 2 Minutes]

Why This Matters:
Wrong egg price by Rp 1/pc Ã— 100 eggs/day = Rp 100K/day error = Rp 3M/month!

Best,
R2c Team
```

---

### Day 7: Weekly COGS Check-In

**Email + Push Notification:**
```
"Hari Jumat - Cek COGS Mingguan Yuk!"
(Friday - Let's Check Weekly COGS!)

This Week's Insights:
- Flour price up 5% (Rp 15K  ->  Rp 15.75K/kg)
- 8 recipes affected
- Total cost increase: ~Rp 300/bread avg

Actions:
[View Affected Recipes] [Update Pricing] [Ignore for Now]

Tip: Small price increases add up. Review monthly pricing strategy.
```

---

### Day 14: Pricing Optimizer Unlock

**Trigger:** User has 10+ recipes created

**Email:**
```
Subject: Unlock: Pricing Optimizer Tool

Hi [Name],

You now have 10 recipes! Time to level up.

New Feature Unlocked: Pricing Optimizer

Try This:
1. Select your best-selling item (e.g., Chocolate Bread)
2. Current COGS: 42%
3. Set target: 30% COGS
4. R2c calculates: "Charge Rp 28K instead of Rp 25K"

Result: Extra Rp 3K/item Ã— 50 items/day = Rp 150K/day = Rp 4.5M/month!

[Try Pricing Optimizer]

This feature alone pays for R2c 45Ã— over.

Best,
R2c Team
```

---

### Day 21: Variance Analysis Education

**Email:**
```
Subject: Where Did Rp 1M Go? (Variance Analysis Explained)

Hi [Name],

Advanced Insight for Power Users:

Your December Numbers:
- Theoretical COGS (recipes): Rp 9,000,000
- Actual Purchases (ingredients): Rp 10,200,000
- Variance: Rp 1,200,000 (13%) [!]

What Causes Variance?
1. Waste (spoilage, dropped food): ~5-8% normal
2. Theft (staff taking ingredients home): ~2-3%
3. Portion inconsistency (chef using more than recipe): ~3-5%

13% is high. Recommended actions:
- Implement portion control training
- Check storage (is flour getting moisture-damaged?)
- Review staff access to ingredients

[View Detailed Variance Report]

Reduce variance to 5% = save Rp 800K/month.

Best,
R2c Team
```

---

### Day 30: Monthly COGS Review Ritual

**Trigger:** 1st of each month (auto-email)

**Email:**
```
Subject: Desember Selesai - COGS Review Time

Hi [Name],

December COGS Summary:

Total COGS: Rp 45M (vs Rp 42M Nov, +7%)
Avg COGS%: 32% (healthy! Target <35%)

Top 3 Cost Increases:
1. Chicken: +15% (Rp 38K  ->  Rp 44K/kg)
2. Flour: +5%
3. Sugar: Stable

Recipes Needing Price Review: 5 items now >40% COGS

[Review All Recipes] [Update Menu Pricing]

Action: Consider raising chicken-based item prices by Rp 3-5K.

Best,
R2c Team
```

---

## Churn Prevention Framework

### Early Warning Signal 1: <3 Recipes Created (Days 1-7)

**Trigger:** User signed up but only created 1-2 recipes after 3 days

**Intervention (Day 4 Email):**
```
Subject: Need Help Getting Started with Recipes?

Hi [Name],

We noticed you created [White Bread] recipe but haven't added more yet.

Common reasons:
- Too busy? (We get it - try mobile app for quick entry)
- Unsure what to track? (Start with top 5 best-sellers)
- Don't know ingredient prices? (Use estimates for now, refine later)

Want a Quick Call? Book 15-min onboarding with our team (free):
[Book Call] [Watch 3-Min Video Instead]

We're here to help!

Best,
R2c Support Team
```

---

### Early Warning Signal 2: No Ingredient Purchases Logged (Day 7)

**Trigger:** User has recipes but 0 ingredient purchases logged

**Email:**
```
Subject: Your COGS Might Be Inaccurate (No Ingredient Prices)

Hi [Name],

Your recipes show costs, but we're using default prices.

Example:
- Flour: Using Rp 15K/kg (default)
 Real price: ???

If your flour actually costs Rp 18K/kg, all bread recipes are undercosted by 20%!

[Log Last Week's Ingredient Purchases - 5 Minutes]

Even rough estimates beat guessing.

Best,
R2c Team
```

---

## Success Metrics Dashboard

**Primary KPIs:**
- **Activation Rate:** % who create 5+ recipes within 7 days (Target: 60%+)
- **Day 7 Retention:** % still active Day 7 (Target: 50%+)
- **Day 30 Retention:** % still active Day 30 (Target: 30%+)

**Leading Indicators:**
- **Recipe Velocity:** Avg recipes created per user per week (Target: 2+)
- **Ingredient Entry Rate:** % who log 5+ ingredients within Week 1 (Target: 40%+)
- **COGS Dashboard Views:** Weekly active users viewing COGS dashboard (Target: 70%+)

---

## Onboarding A/B Tests

### Test 1: Pre-filled vs Blank Recipe Entry

**Hypothesis:** Pre-filled recipe templates increase activation

**Control:** Blank form (user enters everything from scratch)
**Variant:** Pre-filled common recipe with editable defaults

**Expected Outcome:** Variant has 20% higher Day 1 recipe creation (80% vs 60%)

---

### Test 2: Recipe Goal Gamification

**Hypothesis:** Progress bars motivate completion

**Control:** Standard onboarding
**Variant:** Show "5 Recipe Challenge: 2/5 Complete progress bar

**Expected Outcome:** Variant reaches 5 recipes 30% faster (4 days vs 6 days avg)

---

## Related Documents

**Product Context:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/R2c-cogs-calculator|../]] - R2c overview
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/product-scope|product-scope.md]] - Recipe features included
- [[gate-tracking|gate-tracking.md]] - Gate 2B activation metrics

**User Journey:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/product-strategy/market-positioning|market-positioning.md]] - Target segments (bakeries, catering)
- [[support-runbook|support-runbook.md]] - Common recipe entry issues

**Strategic Context:**
- [[biz/strategy/market-analysis/04-user-personas|04-user-personas.md]] - Phase 2 personas (Budi 2.0, Amanda)

---

**Last Updated:** 2025-12-26
**Owner:** Product Design / Onboarding Lead
**Next Review:** Post-launch activation audit (Week 12 - R2c launch +2 weeks)



