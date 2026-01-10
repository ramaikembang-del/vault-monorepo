# Technical Specification - COGS/HPP Calculator

**Product:** R2c - COGS/HPP Calculator
**Product ID:** R2c
**Architecture:** Microservice (Recipe Service) + Integration with R2a Core

---

## Database Schema

### Table: `recipes`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY | Unique recipe ID |
| `user_id` | UUID | FOREIGN KEY  ->  users.id | Recipe owner |
| `name` | VARCHAR(100) | NOT NULL | Recipe name (e.g., "Chocolate Cake") |
| `category` | ENUM | NOT NULL | Cakes, Bread, Beverages, Meals, Other |
| `yield_amount` | DECIMAL(10,2) | NOT NULL, >0 | Yield quantity (e.g., 1.00) |
| `yield_unit` | ENUM | NOT NULL | pieces, servings, kg, liters |
| `sale_price` | DECIMAL(12,2) | NOT NULL, >=0 | Sale price in IDR |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Creation timestamp |
| `updated_at` | TIMESTAMP | ON UPDATE NOW() | Last update timestamp |

**Indexes:**
- `idx_user_recipes` ON (`user_id`, `created_at DESC`)
- `idx_recipe_search` ON (`user_id`, `name`)

---

### Table: `recipe_ingredients`

**Purpose:** Many-to-many relationship between recipes and ingredients

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY | |
| `recipe_id` | UUID | FOREIGN KEY  ->  recipes.id, ON DELETE CASCADE | Recipe this ingredient belongs to |
| `ingredient_id` | UUID | FOREIGN KEY  ->  ingredients.id | Ingredient used |
| `quantity` | DECIMAL(10,3) | NOT NULL, >0 | Amount needed (e.g., 200.000 g) |
| `unit` | ENUM | NOT NULL | g, kg, ml, L, pcs |
| `cost_snapshot` | DECIMAL(12,2) | NULL | Cached cost at time of recipe creation (for history) |

**Indexes:**
- `idx_recipe_ingredients` ON (`recipe_id`)
- `idx_ingredient_recipes` ON (`ingredient_id`)

---

### Table: `ingredients`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY | |
| `user_id` | UUID | FOREIGN KEY  ->  users.id | Ingredient owner |
| `name` | VARCHAR(100) | NOT NULL | Ingredient name (e.g., "Flour") |
| `unit` | ENUM | NOT NULL | Primary unit (g, kg, ml, L, pcs) |
| `current_cost_per_unit` | DECIMAL(12,4) | NOT NULL, >=0 | Weighted average cost (IDR per unit) |
| `last_purchase_date` | DATE | NULL | Most recent purchase |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

**Indexes:**
- `idx_user_ingredients` ON (`user_id`, `name`)

**Constraints:**
- UNIQUE (`user_id`, `name`) - No duplicate ingredient names per user

---

### Table: `ingredient_purchases`

**Purpose:** Purchase history for weighted average calculation

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY | |
| `ingredient_id` | UUID | FOREIGN KEY  ->  ingredients.id, ON DELETE CASCADE | |
| `purchase_date` | DATE | NOT NULL | Date of purchase |
| `quantity` | DECIMAL(10,3) | NOT NULL, >0 | Amount purchased |
| `unit_cost` | DECIMAL(12,4) | NOT NULL, >=0 | Cost per unit (IDR) |
| `total_cost` | DECIMAL(12,2) | NOT NULL, >=0 | Total paid = quantity Ã— unit_cost |
| `supplier` | VARCHAR(100) | NULL | Supplier name (optional) |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

**Indexes:**
- `idx_ingredient_purchases` ON (`ingredient_id`, `purchase_date DESC`)

---

## API Endpoints

### Recipe Management

**POST /api/v1/recipes**
Create new recipe

**Request:**
```json
{
 "name": "Chocolate Cake",
 "category": "Cakes",
 "yield_amount": 1.0,
 "yield_unit": "pieces",
 "sale_price": 50000,
 "ingredients": [
 {
 "ingredient_id": "uuid-flour",
 "quantity": 200,
 "unit": "g"
 },
 {
 "ingredient_id": "uuid-sugar",
 "quantity": 150,
 "unit": "g"
 }
 ]
}
```

**Response:**
```json
{
 "id": "uuid-recipe-123",
 "name": "Chocolate Cake",
 "total_cost": 25750,
 "cogs_percentage": 51.5,
 "gross_margin": 24250,
 "status": "warning",
 "message": "COGS >40%. Consider price increase."
}
```

---

**GET /api/v1/recipes**
List all recipes for user

**Query Params:**
- `sort_by`: `cogs_percentage` | `name` | `created_at` (default)
- `filter_status`: `green` (<30% COGS) | `yellow` (30-40%) | `red` (>40%)
- `category`: Filter by recipe category

**Response:**
```json
{
 "recipes": [
 {
 "id": "uuid",
 "name": "Americano",
 "sale_price": 15000,
 "total_cost": 3000,
 "cogs_percentage": 20.0,
 "gross_margin": 12000,
 "status": "green"
 },
 ...
 ],
 "summary": {
 "total_recipes": 25,
 "avg_cogs_percentage": 32.5,
 "recipes_needing_attention": 8
 }
}
```

---

**PUT /api/v1/recipes/:id**
Update recipe (name, price, or ingredients)

**PATCH /api/v1/recipes/:id/recalculate**
Force recalculation (triggered when ingredient costs change)

**DELETE /api/v1/recipes/:id**
Delete recipe

---

### Ingredient Management

**POST /api/v1/ingredients/purchases**
Log new ingredient purchase

**Request:**
```json
{
 "ingredient_name": "Flour",
 "purchase_date": "2025-12-26",
 "quantity": 50,
 "unit": "kg",
 "total_cost": 750000,
 "supplier": "Toko Bahan Kue Jaya"
}
```

**Response:**
```json
{
 "ingredient_id": "uuid-flour",
 "new_weighted_avg_cost": 15400,
 "previous_cost": 15000,
 "change_percentage": 2.67,
 "affected_recipes_count": 15,
 "affected_recipes": [
 {
 "id": "uuid-recipe-1",
 "name": "Chocolate Cake",
 "old_cost": 25750,
 "new_cost": 26000,
 "cogs_change": 1.0
 }
 ]
}
```

---

**GET /api/v1/ingredients/:id/price-history**
Get ingredient price trend (last 6 months)

**Response:**
```json
{
 "ingredient_name": "Chicken Breast",
 "current_price": 46000,
 "unit": "kg",
 "history": [
 { "month": "2025-07", "avg_price": 38000 },
 { "month": "2025-08", "avg_price": 39000 },
 ...
 { "month": "2025-12", "avg_price": 46000 }
 ],
 "trend": {
 "6_month_change": 21.0,
 "status": "rising",
 "alert": "Significant increase (+21%) - review chicken recipes"
 }
}
```

---

### COGS Analysis

**GET /api/v1/analytics/cogs-dashboard**
COGS % dashboard for all recipes

**GET /api/v1/analytics/pricing-optimizer**
Calculate optimal price for target COGS %

**Request:**
```json
{
 "recipe_id": "uuid-beef-burger",
 "target_cogs_percentage": 30
}
```

**Response:**
```json
{
 "current_price": 45000,
 "current_cogs": 44.4,
 "recommended_price": 65000,
 "new_cogs": 30.8,
 "price_increase": 44.4,
 "market_comparison": {
 "competitor_avg": 52500,
 "recommendation": "Price increase may be too high. Consider cost reduction or value-add."
 }
}
```

---

**POST /api/v1/analytics/sync-to-pl**
Sync monthly COGS to R2a P&L

**Request:**
```json
{
 "month": "2025-12",
 "manual_adjustments": {
 "waste_estimate": 50000,
 "notes": "Accounting for ~3% spoilage"
 }
}
```

**Response:**
```json
{
 "theoretical_cogs": 45000000,
 "manual_adjustments": 50000,
 "total_cogs_synced": 45050000,
 "r2a_expense_id": "uuid-expense-123",
 "status": "synced",
 "variance_analysis": {
 "actual_purchases": 47000000,
 "theoretical_cogs": 45050000,
 "variance": 1950000,
 "variance_percentage": 4.3,
 "alert": "Variance within normal range (<10%)"
 }
}
```

---

## Business Logic

### Weighted Average Cost Calculation

**Algorithm:**
```python
def calculate_weighted_avg_cost(ingredient_id):
 # Get last 3 purchases
 purchases = get_recent_purchases(ingredient_id, limit=3)

 if len(purchases) == 0:
 return 0

 total_cost = sum(p.total_cost for p in purchases)
 total_quantity = sum(p.quantity for p in purchases)

 weighted_avg = total_cost / total_quantity

 # Update ingredient table
 update_ingredient(ingredient_id, current_cost_per_unit=weighted_avg)

 # Recalculate all recipes using this ingredient
 affected_recipes = get_recipes_by_ingredient(ingredient_id)
 for recipe in affected_recipes:
 recalculate_recipe_cost(recipe.id)

 return weighted_avg
```

---

### Recipe Cost Calculation

**Algorithm:**
```python
def calculate_recipe_cost(recipe_id):
 recipe = get_recipe(recipe_id)
 recipe_ingredients = get_recipe_ingredients(recipe_id)

 total_cost = 0

 for ri in recipe_ingredients:
 ingredient = get_ingredient(ri.ingredient_id)

 # Convert recipe quantity to ingredient unit if needed
 ingredient_quantity = convert_unit(
 ri.quantity,
 ri.unit,
 ingredient.unit
 )

 ingredient_cost = ingredient_quantity * ingredient.current_cost_per_unit
 total_cost += ingredient_cost

 recipe.total_cost = total_cost
 recipe.cogs_percentage = (total_cost / recipe.sale_price) * 100
 recipe.gross_margin = recipe.sale_price - total_cost

 # Determine status
 if recipe.cogs_percentage < 30:
 recipe.status = "green"
 elif recipe.cogs_percentage <= 40:
 recipe.status = "yellow"
 else:
 recipe.status = "red"

 save_recipe(recipe)
 return recipe
```

---

### Unit Conversion Logic

**Supported Conversions:**
- Weight: g  <->  kg (1kg = 1000g)
- Volume: ml  <->  L (1L = 1000ml)
- Pieces: pcs (no conversion)

**Example:**
```python
def convert_unit(quantity, from_unit, to_unit):
 # Recipe calls for 200g, ingredient priced per kg
 if from_unit == "g" and to_unit == "kg":
 return quantity / 1000 # 200g = 0.2kg
 elif from_unit == "kg" and to_unit == "g":
 return quantity * 1000
 # ... similar for ml/L
 else:
 return quantity # Same unit, no conversion
```

---

## Integration Points

### R2a P&L Integration

**Sync Mechanism:**
1. User clicks "Sync COGS to P&L" in R2c
2. R2c calculates total theoretical COGS for the month
3. POST request to R2a API: `/api/v1/expenses` with:
 ```json
 {
 "category": "Cost of Goods Sold",
 "amount": 45050000,
 "date": "2025-12-31",
 "description": "Monthly COGS from R2c (Recipe-based calculation)",
 "source": "r2c_auto_sync"
 }
 ```
4. R2a creates expense entry, returns `expense_id`
5. R2c stores `r2a_sync_log` for audit trail

---

## Performance Considerations

**Optimization 1: Ingredient Cost Caching**
- Store `cost_snapshot` in `recipe_ingredients` table
- Speeds up historical cost analysis
- Enables "What was my margin 3 months ago?" queries

**Optimization 2: Batch Recipe Recalculation**
- When ingredient price changes, queue affected recipes for background recalculation
- Avoid blocking UI during bulk updates
- Use Redis queue + worker process

**Optimization 3: COGS Dashboard Pre-aggregation**
- Nightly cron job calculates dashboard metrics
- Store in `cogs_summary` table (user_id, date, avg_cogs%, recipes_needing_attention)
- Dashboard loads from cache, not real-time calc

---

## Security & Data Privacy

**Multi-Tenancy:**
- All queries filtered by `user_id`
- Row-level security enforced at database layer

**Data Encryption:**
- Ingredient costs, recipe costs encrypted at rest
- Sensitive pricing data not logged in application logs

**Access Control:**
- Users can only view/edit their own recipes
- No sharing between users (Phase 1 - single-user app)

---

**Related Documents:**
- [[feature-spec|feature-spec.md]] - Feature requirements
- [[products/04-accounting-module/product-variants/R2a-pl-analytics/specifications/technical-spec|r2a technical-spec.md]] - R2a integration details

**Last Updated:** 2025-12-26
**Owner:** Engineering Lead

