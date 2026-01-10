# Supplier Integration Guide - COGS/HPP Calculator

**Product:** R2c - COGS/HPP Calculator
**Product ID:** R2c
**Feature:** Automated Ingredient Purchase Tracking
**Method:** Manual Entry (Phase 1)  ->  WhatsApp Bot (Phase 2)  ->  Supplier API (Phase 3)
**Owner:** Engineering Lead

---

## Integration Strategy Overview

**Phase 1 (Sprint 2 - Week 8-10):** Manual Entry Only
**Phase 2 (Month 6-9):** WhatsApp Bot Purchase Logging
**Phase 3 (Month 12+):** Direct Supplier API Integration (if demand exists)

**Why Manual First?**
1. **Zero supplier partnerships needed** - Ship faster, validate demand first
2. **Universal coverage** - Works with any supplier (pasar traditional, wholesalers, online)
3. **Lower complexity** - Focus on core recipe costing first
4. **Faster iteration** - Can improve UX without waiting for supplier API access

**Why WhatsApp Bot Next?**
1. **Indonesian preference** - WhatsApp is #1 communication tool
2. **Low friction** - "Tepung 50kg 900rb"  ->  Logged in 5 seconds
3. **No app switching** - Users already on WhatsApp daily

**Why API Later?**
1. **Automatic sync** - Supplier delivers  ->  Purchase auto-logged
2. **Invoice matching** - Verify delivery vs invoice automatically
3. **Price trending** - Track supplier price changes over time

**Cross-Reference:** See [[products/04-accounting-module/product-variants/R2c-cogs-calculator/product-scope|product-scope.md]] for Phase 1-3 feature roadmap.

---

## Phase 1: Manual Ingredient Purchase Entry

### User Flow

**1. Dashboard  ->  "Ingredients"  ->  "+ New Purchase"**

**Form Fields:**
```
Ingredient: [Dropdown: Flour / Sugar / Cocoa / + Add New]
Purchase Date: [Date Picker - default today]
Quantity: [___] [Unit: g / kg / L / pcs]
Total Cost: Rp [_______]
Unit Cost: Rp [auto-calculated] /kg
Supplier (optional): [_______]
Notes (optional): [Note lain_______]
```

**Auto-Calculation:**
```
User enters:
- Flour, 50kg, Rp 900,000

R2c calculates:
- Unit Cost: Rp 900,000 Ã· 50kg = Rp 18,000/kg
- Weighted Avg (last 3 purchases): Rp 15K, Rp 16K, Rp 18K  ->  Avg Rp 16,333/kg
- Affected Recipes: 15 recipes use flour  ->  All costs updated

Alert: "Flour price up 20% (Rp 15K  ->  Rp 18K). Review pricing for 15 recipes."
```

---

### Common User Mistakes & Solutions

**Mistake 1: Entering Total Instead of Quantity**
- User types: Quantity = 900,000 (total cost, not kilos)
- Result: Unit cost = ridiculously low

**Solution:** Validation rule
```
if (quantity > 10000 and unit == "kg"):
 alert("Are you sure? 10,000kg is a lot. Did you mean 'Total Cost'?")
```

**Mistake 2: Wrong Unit**
- User buys 5 liters cooking oil, enters "5g"
- Result: Unit cost massively wrong

**Solution:** Smart unit suggestions
```
Ingredient: Cooking Oil  ->  Auto-suggest "L" (not g)
Ingredient: Flour  ->  Auto-suggest "kg"
Ingredient: Eggs  ->  Auto-suggest "pcs"
```

---

## Phase 2: WhatsApp Bot Integration (Month 6-9)

### User Flow

**Setup (One-Time):**
1. R2c Settings  ->  "WhatsApp Bot"  ->  "Connect"
2. Scan QR code  ->  Authorize R2c WhatsApp bot
3. Bot sends: "Connected! [x] Send ingredient purchases here."

**Daily Usage:**

**User sends:**
```
Tepung 50kg 900rb
```

**Bot parses & responds:**
```
[x] Logged!

Ingredient: Flour (Tepung)
Purchase: 50kg for Rp 900,000
Date: 26 Dec 2025
Unit Cost: Rp 18,000/kg

Weighted Avg: Rp 16,333/kg (last 3 purchases)

15 recipes affected:
- Chocolate Cake: Cost up Rp 600 (check pricing)
- White Bread: Cost up Rp 750
...

[View All Affected Recipes]

Need to undo? Reply "X"

- R2c Bot
```

---

### NLU (Natural Language Understanding) Logic

**Supported Formats:**
```
1. "Tepung 50kg 900rb"  ->  Flour, 50kg, Rp 900,000
2. "Gula 25kg Rp 500.000"  ->  Sugar, 25kg, Rp 500,000
3. "Cocoa powder 1kg 100ribu"  ->  Cocoa Powder, 1kg, Rp 100,000
4. "Telur 30pcs 60rb"  ->  Eggs, 30pcs, Rp 60,000
5. "@TokoJaya Tepung 50kg 900rb"  ->  Supplier tagged
```

**Parsing Algorithm:**
```python
def parse_purchase_message(text):
 # Extract ingredient name (first word(s) until number)
 ingredient = extract_ingredient(text) # "Tepung" or "Cocoa powder"

 # Extract quantity (number + unit)
 quantity_match = re.search(r'(\d+)(kg|g|L|ml|pcs)', text)
 quantity = int(quantity_match.group(1))
 unit = quantity_match.group(2)

 # Extract cost (Rupiah amount)
 cost_match = re.search(r'(\d+)(?:rb|ribu|k|000)', text, re.IGNORECASE)
 if 'rb' in text or 'ribu' in text:
 cost = int(cost_match.group(1)) * 1000 # 900rb  ->  900,000
 else:
 cost = int(cost_match.group(1))

 # Extract supplier (optional - starts with @)
 supplier_match = re.search(r'@(\w+)', text)
 supplier = supplier_match.group(1) if supplier_match else None

 return {
 'ingredient': ingredient,
 'quantity': quantity,
 'unit': unit,
 'cost': cost,
 'supplier': supplier
 }
```

---

### Error Handling

**Ambiguous Ingredient:**
```
User: "Coklat 1kg 100rb"

Bot: " Ada 2 ingredient mirip:
1. Cocoa Powder (Bubuk Coklat)
2. Chocolate Chips (Choco Chips)

Reply angka: 1 atau 2"

User: "1"

Bot: "[x] Logged as Cocoa Powder!"
```

**Missing Unit:**
```
User: "Tepung 50 900rb"

Bot: "Unit kurang jelas. Maksud Anda:
1. 50kg (paling umum)
2. 50g
3. 50 sak (karung)

Reply angka!"
```

---

## Phase 3: Supplier API Integration (Month 12+)

**Only build if demand exists:** Need 50+ R2c users requesting this feature.

### Target Suppliers for API Partnership

| Supplier | Market Share (Bakery) | API Availability | Priority |
|----------|----------------------|------------------|----------|
| IndoMakanan Wholesale | ~30% | [!] Private (needs partnership) | **P1** |
| TitanBoga | ~20% | [x] No API | **P3** (CSV only) |
| Toko Modern Sumber Rezeki | ~15% | [x] Beta API available | **P2** |
| Pasar Traditional | ~35% | [x] N/A (manual forever) | - |

**Partnership Model:**
1. Approach IndoMakanan: "20+ mutual customers want auto-sync. Partner?"
2. Pitch value: "Reduce customer support calls (price inquiries) by 30%"
3. Technical: OAuth 2.0, read-only access to purchase history

---

### API Integration Example (IndoMakanan)

**Endpoint:** `https://api.indomakanan.co.id/v1/purchases`
**Auth:** OAuth 2.0

**Request:**
```json
GET /v1/purchases?customer_id=12345&start_date=2025-12-01&end_date=2025-12-31
Authorization: Bearer {access_token}
```

**Response:**
```json
{
 "purchases": [
 {
 "purchase_id": "PO-98765",
 "date": "2025-12-15",
 "items": [
 {
 "product_name": "Terigu Segitiga Biru 50kg",
 "quantity": 50,
 "unit": "kg",
 "unit_price": 18000,
 "total_price": 900000
 },
 {
 "product_name": "Gula Pasir Gulaku 25kg",
 "quantity": 25,
 "unit": "kg",
 "unit_price": 20000,
 "total_price": 500000
 }
 ],
 "invoice_total": 1400000,
 "payment_status": "paid"
 }
 ]
}
```

**R2c Mapping:**
```python
def map_supplier_product_to_ingredient(product_name):
 # Smart matching (fuzzy logic)
 mappings = {
 'Terigu Segitiga Biru': 'Flour',
 'Gula Pasir Gulaku': 'Sugar',
 'Cocoa Powder Van Houten': 'Cocoa Powder'
 }

 for supplier_product, ingredient in mappings.items():
 if supplier_product in product_name:
 return ingredient ingredient

 # If no match, ask user to confirm
 return ask_user_to_map(product_name)
```

---

### Auto-Sync Flow

**Trigger:** Nightly cron (2am WIB) checks for new purchases

**Process:**
1. Fetch yesterday's purchases from supplier API
2. Map supplier products  ->  R2c ingredients
3. Log purchases automatically
4. Recalculate affected recipes
5. Send summary email to user:

```
Subject: Auto-Synced: 2 New Ingredient Purchases from @IndoMakanan

Hi [Name],

R2c synced your purchases from IndoMakanan:

[x] Flour - 50kg @ Rp 18K/kg (up from Rp 16K)
[x] Sugar - 25kg @ Rp 20K/kg (stable)

15 recipes affected (flour price increase).

[Review Recipe Costs]

Want to disable auto-sync? Settings  ->  Supplier Integrations  ->  Pause

Best,
R2c Team
```

---

## Data Privacy & Security

**Supplier API Access:**
- Read-only (cannot place orders via R2c)
- Requires explicit user consent (OAuth flow)
- User can revoke access anytime

**Data Storage:**
- Purchase history encrypted at rest
- Supplier credentials never stored (OAuth tokens only)

---

## Future Enhancements (Month 18+)

**Receipt OCR Scanning:**
- User takes photo of pasar receipt
- OCR extracts: Ingredient, Rp amount
- R2c suggests: "Looks like Flour 20kg for Rp 360K. Correct?"

**Supplier Price Alerts:**
- Track supplier price trends
- Alert: "Flour prices rising across 3 suppliers. Lock in current price?"

**Bulk Purchase Planning:**
- "You use 200kg flour/month. Current price Rp 15K/kg. Buy 500kg @ Rp 14K/kg (bulk discount)  ->  Save Rp 200K/month"

---

## Related Documents

**Product Context:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/R2c-cogs-calculator|../]] - R2c overview
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/specifications/feature-spec|feature-spec.md]] - Ingredient purchase features
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/specifications/technical-spec|technical-spec.md]] - Weighted avg cost algorithm

**Operations:**
- [[products/02-template-support/operations/support-runbook|support-runbook.md]] - Common ingredient entry issues
- [[products/02-template-support/operations/onboarding-guide|onboarding-guide.md]] - Day 1 ingredient setup flow

**Strategic Context:**
- [[products/04-accounting-module/product-variants/R2c-cogs-calculator/product-scope|product-scope.md]] - Phase 1-3 roadmap for supplier features

---

**Last Updated:** 2025-12-26
**Owner:** Engineering Lead
**Next Review:** Month 6 - Evaluate WhatsApp bot usage before building Phase 3 API integrations


