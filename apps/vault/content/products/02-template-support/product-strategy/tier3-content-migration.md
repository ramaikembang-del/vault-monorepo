# Migrated Tier 3 Support Content
**Date:** December 31, 2025
**Source:** Product 01 - 07-tier-3-product-strategy.md
**Destination:** Product 02 - Template Support documentation
**Purpose:** Consolidate all support-related content into Product 02

---

## CONTENT MIGRATED FROM TIER 3

### Source: 07-tier-3-product-strategy.md (Lines 100-280)

**Section: Monthly Service (Rp 400K) Includes:**

The following services were previously bundled with Tier 3's Rp 400K/month fee:

1. [x] Dashboard maintenance & updates
2. [x] Excel template monthly sync (product list, staff roster updates)
3. [x] Data quality monitoring
4. [x] Bug fixes & troubleshooting
5. [x] Monthly strategic consulting call (30-60 min)
6. [x] Quarterly business review (1 hour deep dive)
7. [x] 2 customizations/month (add/modify metrics)
8. [x] Priority 24h response (email + WhatsApp)

---

## MAPPING TO NEW PRODUCT 02 STRUCTURE

### Services 1-4: Template Maintenance
**Maps to:** R1 Basic Support (Rp 75K/mo) - Available to ALL customers

- Dashboard maintenance & updates  ->  Monthly template updates (R1)
- Excel template sync  ->  Template compatibility updates (R1)
- Data quality monitoring  ->  Proactive alerts (R3 only)
- Bug fixes & troubleshooting  ->  Priority support (all tiers, speed varies)

**Rationale:** These are core template support, not premium services

---

### Service 5: Monthly Strategic Consulting Call
**Maps to:** R3 Enterprise Support (Rp 500K/mo)

- Currently: 30-60 min/month
- New structure: 60 min/month strategic consulting (R3)
- **Change:** Formalized as strategic consulting, not just "check-in"

**Rationale:** Strategic consulting is high-value, justifies R3 premium pricing

---

### Service 6: Quarterly Business Review
**Maps to:** R3 Enterprise Support (Rp 500K/mo)

- Currently: 1 hour quarterly
- New structure: 90 min quarterly deep dive (R3)
- **Enhancement:** Increased from 60 -> 90 minutes for comprehensive review

**Rationale:** Quarterly reviews are strategic, belong in R3

---

### Service 7: 2 Customizations/Month
**Maps to:** R2 Premium (1hr/mo) or R3 Enterprise (2hr/mo)

- Currently: "2 customizations" (vague)
- New structure: TIME-BASED allocation
 - R2: 1 hour/month custom work
 - R3: 2 hours/month custom work
- **Change:** Hard time caps, no rollover, clear overage pricing

**Rationale:** Prevents scope creep, makes profitability calculable

---

### Service 8: Priority 24h Response
**Maps to:** All tiers (with varying speed)

- R1 Basic: <24hr response
- R2 Premium: <12hr response
- R3 Enterprise: <4hr response (emergency hotline)

**Rationale:** Priority support scales by tier, everyone gets it

---

## DETAILED SERVICE BREAKDOWN

### What Stays in Product 01 (Tier 3):

**NOTHING related to ongoing monthly services!**

Tier 3 should ONLY describe:
- One-time setup fee
- What's included in initial purchase
- Bundled support duration (e.g., "180 days R2 Premium Support included")
- Cross-reference to Product 02 for ongoing support options

---

### What Moves to Product 02:

**Everything listed above maps to:**

1. **R1 Basic (Rp 75K/mo)** - `product-strategy.md` (already exists)
 - Template updates
 - Bug fixes
 - Async support

2. **R2 Premium (Rp 175K/mo)** - `premium-support-tiers.md` (created)
 - R1 features
 - Monthly 30-min call
 - 1 hour/month custom work
 - <12hr response

3. **R3 Enterprise (Rp 500K/mo)** - `premium-support-tiers.md` (created)
 - R2 features
 - Strategic consulting (60 min/mo)
 - Quarterly reviews (90 min)
 - 2 hours/month custom work
 - Proactive monitoring
 - <4hr response

---

## OPERATIONAL CONTENT TO MIGRATE

### Support Delivery Workflows

**From:** 07-tier-3-product-strategy.md (various sections)
**To:** New file: `operations/support-delivery-workflows.md`

**Content to extract:**
- Monthly service workflow
- Customization request intake
- Strategic consulting call agenda
- Quarterly review structure
- Time tracking procedures

**Status:** Will create this file next

---

### Service Level Definitions

**From:** 07-tier-3-product-strategy.md
**To:** `operations/support-delivery-workflows.md` or existing `operations/support-delivery-sop.md`

**Content:**
- Response time commitments
- Custom work scope examples
- Overage pricing rules
- Cancellation policies

---

## [x] MIGRATION CHECKLIST

### Phase 1: Document Creation (DONE)
- [x] Created `tier3-pricing-analysis.md`
- [x] Created `pricing-options-analysis.md`
- [x] Created `premium-support-tiers.md`
- [x] Updated Product 02 README

### Phase 2: Content Migration (IN PROGRESS)
- [x] Map Tier 3 services to R1/R2/R3
- [ ] Create `operations/support-delivery-workflows.md`
- [ ] Extract operational procedures
- [ ] Document service examples

### Phase 3: Product 01 Cleanup (NEXT)
- [ ] Remove "Monthly Service" section from 07-tier-3-product-strategy.md
- [ ] Remove Rp 400K/month pricing from all Product 01 files
- [ ] Add cross-references to Product 02
- [ ] Update all pricing tables

### Phase 4: Verification
- [ ] Grep for "400K/month" in Product 01 (should be 0 results)
- [ ] Verify all support content in Product 02
- [ ] Check cross-references work
- [ ] Update navigation docs

---

## NOTES FOR FINAL DECISION

Once Tier 3 pricing option is chosen (A/B/C), we'll need to:

**If Option A (Eliminate monthly fee):**
- Bundle 180 days R2 Premium with Tier 3 purchase
- Remove ALL monthly service sections from Product 01
- Point to Product 02 for post-180-day support options

**If Option B (Hybrid):**
- Create Tier 3B specification that references R3 Enterprise
- Keep Product 01 lean, full details in Product 02

**If Option C (Support subscription):**
- Similar to Option A
- Emphasize optional nature of continued support

**But for now:** All support service definitions live in Product 02, period.

---

## NEXT STEPS

1. Create `operations/support-delivery-workflows.md` in Product 02
2. Extract remaining operational content from Tier 3
3. Clean up Product 01 (remove monthly services)
4. Wait for user to choose Option A/B/C
5. Implement chosen pricing model across both products

**This migration establishes Product 02 as the SINGLE SOURCE OF TRUTH for all support services.**

---

## Related

- **[[products/02-template-support/02-template-support|Template Support Product]]** - Product overview
- **[[products/02-template-support/product-strategy/product-strategy|Product Strategy]]** - Overall strategy
- **[[products/02-template-support/operations/support-delivery-workflows|Support Delivery Workflows]]** - Migrated operational content
- **[[products/01-power-bi-template/product-strategy/tiers/03-tier-3-strategy|Original Tier 3 Strategy]]** - Source document
- **[[products/02-template-support/product-strategy/premium-support-tiers|Premium Support Tiers]]** - New tier structure


---

**Related Documents:**
- [[products/02-template-support/02-template-support|Product Overview]] - Main product documentation
- [[products/02-template-support/product-strategy/product-strategy|Product Strategy Hub]] - All strategy docs

