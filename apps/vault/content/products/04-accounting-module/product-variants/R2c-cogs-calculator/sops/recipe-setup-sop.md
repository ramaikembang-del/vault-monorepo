# R2c COGS - Recipe Setup SOP

**Owner:** Implementation Team
**Last Updated:** December 2025

---

## Purpose
Configure recipe management for accurate COGS tracking.

## Recipe Setup Process

### 1. Product List Import
- Import menu items from POS
- Categorize (drinks, food, etc.)
- Set recipe IDs

### 2. Ingredient Master Data
- Import ingredients (coffee, milk, sugar, etc.)
- Set units (kg, L, pcs)
- Link to suppliers
- Current unit costs

### 3. Recipe Configuration
**For Each Product:**
```
Product: Cappuccino (12oz)
Ingredients:
- Espresso: 30ml @ Rp 8,000/L = Rp 240
- Milk: 200ml @ Rp 15,000/L = Rp 3,000
- Sugar (optional): 5g @ Rp 20,000/kg = Rp 100
Total Recipe Cost: Rp 3,340
Selling Price: Rp 35,000
Gross Margin: 90.4%
```

### 4. Validation
- Test recipes with actual production
- Adjust portions if needed
- Customer reviews and approves

---

## Ongoing Maintenance
- Update ingredient costs (monthly or as prices change)
- Add new recipes (new menu items)
- Adjust portions based on actual usage

---

## Quality Checks
- [ ] All menu items have recipes
- [ ] Ingredient costs current
- [ ] Recipe costs accurate (validated with customer)
- [ ] Theoretical vs actual variance < 10%

---

## Revision History
| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial SOP |

---

## Related

- **[[products/04-accounting-module/product-variants/R2c-cogs-calculator/R2c-cogs-calculator|R2c COGS Calculator]]** - Product variant overview
- **[[products/04-accounting-module/product-variants/R2c-cogs-calculator/sops/variance-investigation-sop|Variance Investigation SOP]]** - Investigating COGS variances
- **[[products/04-accounting-module/product-variants/R2c-cogs-calculator/training/customer-training-guide|Customer Training Guide]]** - Recipe management training
- **[[products/04-accounting-module/product-variants/R2c-cogs-calculator/operations/onboarding-guide|Onboarding Guide]]** - Customer onboarding process
- **[[products/04-accounting-module/product-variants/R2c-cogs-calculator/integrations/supplier-integration|Supplier Integration]]** - Ingredient cost updates
