# Product Scope - COGS/HPP Calculator

**Product:** R2c - COGS/HPP Calculator
**Product ID:** R2c
**Type:** SaaS Add-On Module
**Pricing:** Rp 75-100K/month

---

## Core Features (What's IN Scope)

### 1. Recipe Database Management

**Purpose:** Build and maintain recipe cards for menu items

**Features:**
- Create recipe card (Name, Category, Yield/Serving Size, Sale Price)
- Add ingredients to recipe (Item, Quantity, Unit)
- Calculate cost per serving automatically
- Update all recipes when ingredient prices change
- Duplicate existing recipes (e.g., "Chocolate Cake" → "Chocolate Cake XL")

**Example Recipe Card:**
```
Recipe: Nasi Goreng Spesial
Category: Rice Dishes
Yield: 1 serving
Sale Price: Rp 25,000

Ingredients:
- White Rice (250g) @ Rp 15,000/kg = Rp 3,750
- Chicken (100g) @ Rp 40,000/kg = Rp 4,000
- Vegetables (50g) @ Rp 20,000/kg = Rp 1,000
- Spices/Oil (est) = Rp 1,250

Total COGS: Rp 10,000
COGS %: 40% (10K/25K)
Gross Margin: Rp 15,000 (60%)

Alert: COGS >35% target → Consider price increase to Rp 28K
```

---

### 2. Ingredient Inventory Tracking (Simplified)

**Purpose:** Track ingredient purchases and calculate weighted average cost

**Features:**
- Log ingredient purchase (Name, Quantity, Unit Cost, Date)
- Calculate weighted average price automatically
- View current ingredient costs (not real-time stock)
- Price history (last 3 months trend)

**NOT Included (Too Complex for Mikro):**
- Real-time stock levels (manual counting only)
- Expiry tracking
- Batch/lot tracking
- Multi-location inventory

**Example:**
```
Ingredient: Flour (Terigu)

Purchase History:
- Dec 1: 50kg @ Rp 15,000/kg = Rp 750,000
- Dec 15: 25kg @ Rp 16,000/kg = Rp 400,000

Weighted Average: Rp 15,333/kg
Used in 12 recipes (Cakes, Bread, Pastries)

Trend: +6.7% vs last month (supplier price increase)
Action: Review recipe pricing
```

---

### 3. COGS Analysis & Reporting

**COGS % by Menu Item:**
- List all recipes sorted by COGS %
- Highlight items >35% COGS (red flag)
- Identify most profitable items (<25% COGS = green)

**Monthly COGS Trend:**
- Total COGS this month vs last 3 months
- Ingredient cost inflation rate
- Top 5 cost drivers (which ingredients rising fastest)

**Pricing Recommendations:**
- Auto-calculate optimal price to hit target COGS % (e.g., 30%)
- "Raise Nasi Goreng from Rp 25K to Rp 28K to maintain 30% COGS"

---

### 4. Integration with R2a (P&L)

**Auto-Sync COGS to P&L:**
- Monthly total COGS calculated from recipes
- Push to R2a as "Cost of Goods Sold" expense category
- Compare actual COGS (purchased ingredients) vs theoretical COGS (recipes sold)

**Variance Analysis:**
- Theoretical COGS: (recipes sold × cost per recipe)
- Actual COGS: (total ingredient purchases)
- Variance: Actual - Theoretical = Waste/Theft/Portion inconsistency

---

## Feature Tiers

### Basic Tier (Rp 75K/month)
- Up to 25 recipes
- Up to 50 ingredients
- Monthly COGS report
- Manual ingredient entry only
- Basic analytics (COGS %, trends)

### Standard Tier (Rp 100K/month)
- Up to 100 recipes
- Unlimited ingredients
- Weekly COGS analysis
- Bulk ingredient import (CSV)
- Advanced analytics (variance, pricing recommendations)
- Priority support

---

## What's NOT Included (Out of Scope)

**Production Scheduling:**
- Batch planning (how much to produce)
- Labor scheduling (who works when)
- Equipment utilization
→ Use manual planning or hire production manager

**Full Inventory Management:**
- Real-time stock tracking (bar codes, RFID)
- Reorder points / automatic PO
- Multi-warehouse management
→ Upgrade to Full SaaS (C2/C3) when needed

**Supplier Management:**
- Purchase orders
- Supplier invoicing
- Payment tracking
→ See R2f (Invoice Management) for B2B features

---

## Target Users & Use Cases

**Primary Use Cases:**

1. **Bakery Owner (Budi 2.0):**
 - "I make 20 types of bread. Flour price went up 10%. Which products should I reprice?"
 - R2c: Shows all bread recipes, recommends price adjustments per item

2. **Catering Business (Amanda):**
 - "Customer wants 100 portions of Nasi Kotak at Rp 30K each. Can I make 25% margin?"
 - R2c: Calculates recipe cost (Rp 20K/portion), confirms 33% COGS = viable

3. **Coffee Shop (Dimas):**
 - "My latte costs Rp 8K to make (coffee, milk, cup). Should I charge Rp 28K or Rp 32K?"
 - R2c: Shows 28% COGS @ Rp 28K vs 25% @ Rp 32K → recommends Rp 32K for comfort margin

---

## Upgrade Triggers

**From R2a (P&L only) → R2c (COGS) when:**
- Produce food items (not just resell)
- >10 menu items with complex recipes
- Ingredient costs are major expense (>30% revenue)
- Need precise costing for pricing decisions

**From R2c → Full SaaS when:**
- Open 3+ production locations
- Need real-time stock tracking
- Production volume >1,000 units/day
- Require batch/lot traceability (food safety regulations)

---

## Competitive Comparison

| Feature | R2c (Rp 100K) | Full Inventory (Rp 500K+) | Spreadsheet (Free) |
|---------|---------------|---------------------------|-------------------|
| Recipe Database | 100 recipes | Unlimited | Manual |
| Ingredient Cost Tracking | Weighted avg | FIFO/LIFO/Avg | Manual calc |
| COGS % Analysis | Automated | Automated | Manual |
| Real-time Stock | | | |
| Pricing Recommendations | | | |
| Learning Curve | 30 mins | 20 hours | 5+ hours |
| Support | WhatsApp | Email only | DIY |

**R2c Advantage:** Simpler than inventory software, smarter than spreadsheets, affordable for Mikro.

---

## Success Metrics

**Adoption:** 15+ paying customers by Week 10
**Engagement:** 60%+ create 5+ recipes within Week 1
**Activation:** 80%+ use COGS report monthly
**Outcome:** Users report 5-10% margin improvement (better pricing decisions)

---

**Related Documents:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/R2c-cogs-calculator|../]] - R2c overview
- [[products/04-accounting-module/specifications/feature-spec|feature-spec.md|feature-spec.md]] - Detailed feature requirements
- [[products/04-accounting-module/product-strategy/pricing-strategy|pricing-strategy.md|pricing-strategy.md]] - Pricing rationale

**Last Updated:** 2025-12-26
**Owner:** Product Lead

