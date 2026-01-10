# Feature Specification - COGS/HPP Calculator

**Product:** R2c - COGS/HPP Calculator
**Product ID:** R2c
**Type:** SaaS Add-On Module
**Target:** Phase 2 Production-Heavy F&B (Bakeries, Catering, Manufacturing)

---

## Feature 1: Recipe Database Management

### 1.1 Create Recipe Card

**User Story:** As a bakery owner, I want to create a recipe for "Chocolate Cake" so I know exactly what it costs to make.

**UI Flow:**
1. Dashboard  ->  "Recipes"  ->  "+ New Recipe"
2. Form Fields:
 - Recipe Name: [________] (e.g., "Chocolate Cake")
 - Category: [Dropdown: Cakes / Bread / Pastries / Beverages / Meals / Other]
 - Yield: [__] [Dropdown: pieces / servings / kg / liters]
 - Sale Price: Rp [_______]
3. "+ Add Ingredient" button

**Validation:**
- Recipe Name: Required, 3-100 characters, unique
- Yield: Required, >0
- Sale Price: Required, >= Rp 1,000

---

### 1.2 Add Ingredients to Recipe

**UI Flow:**
1. Within Recipe Card  ->  "+ Add Ingredient"
2. Form:
 - Ingredient Name: [Autocomplete from master ingredient list]
 - Quantity: [______] [Unit: g / kg / ml / L / pcs]
 - Cost: [Auto-calculated from ingredient library]
3. "Save Ingredient"

**Auto-Calculation:**
```
Flour: 200g @ Rp 15,000/kg
= 200g Ã· 1000g Ã— Rp 15,000
= Rp 3,000

Total Recipe Cost = Sum of all ingredients
COGS % = (Recipe Cost Ã· Sale Price) Ã— 100%
```

**Example:**
```
Recipe: Chocolate Cake
Yield: 1 piece
Sale Price: Rp 50,000

Ingredients:
- Flour (200g) = Rp 3,000
- Sugar (150g) = Rp 2,250
- Cocoa Powder (50g) = Rp 5,000
- Eggs (2 pcs) = Rp 4,000
- Butter (100g) = Rp 8,000
- Vanilla (5ml) = Rp 1,500
- Packaging (1 box) = Rp 2,000

Total Cost: Rp 25,750
COGS %: 51.5% (Rp 25,750 / Rp 50,000)

Alert: COGS >40% - Consider price increase to Rp 65,000 for 40% target
```

---

### 1.3 Recipe Cost Auto-Update

**Trigger:** When ingredient price changes (e.g., flour Rp 15K  ->  Rp 16K/kg)

**Behavior:**
- Recalculate ALL recipes using that ingredient
- Show notification: "Flour price updated. 15 recipes affected. View changes?"
- List affected recipes with old vs new cost

**Example:**
```
Flour price: Rp 15,000/kg  ->  Rp 16,000/kg (+6.7%)

Affected Recipes:
- Chocolate Cake: Rp 25,750  ->  Rp 26,000 (+1%)
- White Bread: Rp 8,000  ->  Rp 8,500 (+6.3%)
- Croissant: Rp 12,000  ->  Rp 12,800 (+6.7%)

Action: Review pricing for these 15 recipes
```

---

## Feature 2: Ingredient Library Management

### 2.1 Add Ingredient to Library

**User Story:** As a catering owner, I want to log new ingredient purchases so recipe costs stay accurate.

**UI Flow:**
1. Dashboard  ->  "Ingredients"  ->  "+ New Purchase"
2. Form:
 - Ingredient Name: [_______] (e.g., "Chicken Breast")
 - Purchase Date: [Date Picker]
 - Quantity Purchased: [___] [Unit: kg / L / pcs]
 - Total Cost: Rp [_______]
 - Supplier: [_______] (optional)
3. "Log Purchase"

**Auto-Calculation:**
```
Unit Cost = Total Cost Ã· Quantity

Example:
Purchased: 50kg Flour for Rp 750,000
Unit Cost: Rp 750,000 Ã· 50kg = Rp 15,000/kg
```

---

### 2.2 Weighted Average Cost Calculation

**Problem:** Ingredient prices fluctuate. Which price to use in recipes?

**Solution:** Weighted average cost (most recent 3 purchases)

**Example:**
```
Flour Purchases (Last 3):
- Dec 1: 50kg @ Rp 15,000/kg = Total Rp 750,000
- Dec 15: 25kg @ Rp 16,000/kg = Total Rp 400,000
- Dec 28: 50kg @ Rp 15,500/kg = Total Rp 775,000

Weighted Average:
= (Rp 750K + Rp 400K + Rp 775K) Ã· (50kg + 25kg + 50kg)
= Rp 1,925,000 Ã· 125kg
= Rp 15,400/kg

This price is used in all recipes calling for Flour
```

**Why 3 purchases?** Balance between recent prices and stability (don't overreact to 1 outlier).

---

### 2.3 Ingredient Price History & Trend

**UI:** Ingredient detail page shows:
- Last 6 months price chart (line graph)
- % change vs last month
- Alert if >10% increase

**Example:**
```
Chicken Breast Price Trend

Jul: Rp 38K/kg
Aug: Rp 39K/kg (+2.6%)
Sep: Rp 40K/kg (+2.6%)
Oct: Rp 42K/kg (+5%)
Nov: Rp 45K/kg (+7.1%) Alert: +7% jump
Dec: Rp 46K/kg (+2.2%)

6-Month Trend: +21% (Jul  ->  Dec)

Action: Review all chicken recipes (8 total)
Consider: Switch to alternative protein OR raise prices
```

---

## Feature 3: COGS Analysis & Reporting

### 3.1 COGS % Dashboard

**View:** Table of all recipes sorted by COGS %

**Columns:**
- Recipe Name
- Sale Price
- Recipe Cost
- COGS %
- Gross Margin (Rp)
- Status ( <30% / 30-40% / >40%)

**Example:**
| Recipe | Sale Price | Cost | COGS % | Margin | Status |
|--------|-----------|------|--------|--------|--------|
| Americano | Rp 15K | Rp 3K | 20% | Rp 12K | Great |
| Nasi Goreng | Rp 25K | Rp 7K | 28% | Rp 18K | Good |
| Latte | Rp 28K | Rp 9K | 32% | Rp 19K | OK |
| Beef Burger | Rp 45K | Rp 20K | 44% | Rp 25K | Too High |

**Actions:**
- Click recipe  ->  See ingredient breakdown
- "Optimize" button  ->  Get pricing recommendations

---

### 3.2 Pricing Optimizer

**User Story:** As a business owner, I want to know what price to charge to hit my target margin.

**UI:**
1. Select recipe (e.g., "Beef Burger")
2. Current: Sale Price Rp 45K, COGS 44%
3. Target COGS %: [Slider: 20-40%, default 30%]
4. "Calculate"  ->  Recommended Price: Rp 58K

**Calculation:**
```
Recipe Cost: Rp 20,000
Target COGS: 30%

Optimal Price = Cost Ã· Target%
= Rp 20,000 Ã· 0.30
= Rp 66,667  ->  Round to Rp 65,000

Outcome @ Rp 65K:
COGS %: 30.8% (close to target)
Margin: Rp 45,000 per burger
```

**Constraint Check:**
- "Warning: Rp 65K is 44% higher than current Rp 45K. Competitors charge Rp 50-55K. Consider value-add (larger portion, premium ingredients) to justify price."

---

### 3.3 Monthly COGS Report

**Generated:** 1st of each month (auto-email to Premium tier)

**Content:**
1. **Total COGS:** Rp 45M this month (vs Rp 42M last month, +7%)
2. **COGS as % of Revenue:** 32% (vs 30% last month)
3. **Top 5 Cost Drivers:**
 - Chicken: Rp 12M (+15% vs last month - price spike)
 - Flour: Rp 8M (+5%)
 - Vegetables: Rp 6M (stable)
4. **Recipes Needing Attention:** 8 recipes now >40% COGS due to ingredient increases
5. **Action Items:**
 - Review chicken recipes (8 total)
 - Consider alternative suppliers for flour

---

## Feature 4: Integration with R2a (P&L)

### 4.1 Auto-Sync COGS to P&L

**Trigger:** User clicks "Sync COGS to P&L" (monthly button)

**Behavior:**
1. Calculate total COGS from recipes sold this month
2. Create expense entry in R2a:
 - Category: "Cost of Goods Sold (from R2c)"
 - Amount: Rp 45,000,000
 - Date: Last day of month
3. Show confirmation: "Synced Rp 45M to R2a P&L"

**Why Manual Sync?** Gives user control. Some months they may want to adjust before syncing (e.g., account for waste).

---

### 4.2 Theoretical vs Actual COGS Variance

**Purpose:** Detect waste, theft, or portion inconsistency

**Calculation:**
```
Theoretical COGS (from recipes):
- Sold 100 Nasi Goreng @ Rp 7K cost = Rp 700K
- Sold 50 Chicken Satay @ Rp 12K cost = Rp 600K
Total Theoretical: Rp 1,300,000

Actual COGS (from ingredient purchases):
- Bought Rp 1,500,000 worth of ingredients this month

Variance: Rp 1,500K - Rp 1,300K = Rp 200K (15%)

Possible Reasons:
- Waste: 10% spoilage, dropped food
- Theft: Staff taking ingredients home
- Portion inconsistency: Chef using 300g chicken instead of 250g per recipe
```

**Alert:** If variance >10%, show warning: "Your actual COGS is 15% higher than recipes suggest. Investigate waste or portion control."

---

## Feature 5: Mobile Quick Entry (Phase 2)

**User Story:** As a chef, I want to log ingredient purchases from my phone while at the market.

**UI:** Mobile-optimized form
- Ingredient: [Dropdown]
- Amount: [___] kg
- Cost: Rp [____]
- [Take Photo of Receipt]
- "Save"

**Future Enhancement:** OCR receipt scanning (Month 12+)

---

## Non-Functional Requirements

**Performance:**
- Recipe cost calculation: <1 second (even for 100-ingredient recipe)
- Ingredient price update: <5 seconds to recalculate all affected recipes

**Scalability:**
- Support up to 100 recipes per user (Standard tier)
- Support up to 500 ingredients per user

**Data Export:**
- Export all recipes to Excel (for backup)
- Export COGS report to PDF

---

**Related Documents:**
- [[technical-spec|technical-spec.md]] - Database schema, API design
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/product-scope|product-scope.md]] - What's in/out of scope

**Last Updated:** 2025-12-26
**Owner:** Product Manager

