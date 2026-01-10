# Sprint 1 Legal Documentation - Gap Analysis & Action Plan

**Date:** 2025-12-27
**Scope:** All Sprint 1 Products (A1, R1, E1)
**Owner:** Legal / Compliance

---

## Executive Summary

**Current Status:** **70% Complete**

### What Exists:
[x] **Product A1** (Power BI Template) - 100% complete
[x] **Business-functions/legal/** - General templates exist
[x] **Contracts/** - Customer and employment templates created

### What's Missing:
[x] **Product R1** (Template Support) - No dedicated legal folder
[x] **Product E1** (Web Dashboard Lite) - No dedicated legal folder
[x] **Product-specific addendums** - None created yet

---

## Detailed Inventory

### 1. Business-Functions/Legal (General/Shared)

**Location:** `/biz/departments/legal/`

| File | Status | Notes |
|------|--------|-------|
| `terms-of-service.md` | [x] Exists | 619 lines, comprehensive platform ToS for SaaS |
| `privacy-policy.md` | [x] Exists | UU 27/2022 compliant |
| `customer-agreement-template.md` | [x] Exists | General contract template |
| `compliance-checklist.md` | [x] Exists | Indonesian regulatory requirements |
| `contracts/customer/templates/a1-purchase-agreement.md` | [x] Created | A1-specific purchase terms |
| `contracts/customer/templates/r1-subscription-agreement.md` | [x] Created | R1-specific subscription |
| `contracts/employment/templates/nda-mutual.md` | [x] Created | For partnerships/contractors |
| `contracts/employment/templates/contractor-services-agreement.md` | [x] Created | Freelancer agreements |

**Assessment:** [x] **COMPLETE** for Sprint 1 launch

---

### 2. Product A1 (Power BI Template) Legal Files

**Location:** `/docs/products/01-power-bi-template/legal/`

| File | Status | Notes |
|------|--------|-------|
| `terms-of-service.md` | [x] Exists | 12KB, product-specific ToS |
| `privacy-policy.md` | [x] Exists | 11KB, data handling for template users |
| `sla-definitions.md` | [x] Exists | 12KB, tier-specific SLAs |

**Assessment:** [x] **COMPLETE**

---

### 3. Product R1 (Template Support) Legal Files

**Location:** `/docs/products/02-template-support/` [x] **NO LEGAL FOLDER**

**What's Needed:**
1. [x] `/legal/` folder - **MISSING**
2. [x] `subscription-terms.md` - R1-specific terms (references contracts/r1-subscription-agreement.md)
3. [x] `cancellation-policy.md` - Clear refund/cancellation rules
4. [x] `support-sla.md` - Service level commitments

**Workaround:** Can reference `/business-functions/legal/contracts/customer/templates/r1-subscription-agreement.md` but product-specific folder is cleaner

**Priority:** **MEDIUM** - Can launch with contract template only, but should create for consistency

---

### 4. Product E1 (Web Dashboard Lite) Legal Files

**Location:** `/docs/products/03-web-dashboard-lite/` [x] **NO LEGAL FOLDER**

**What's Needed:**
1. [x] `/legal/` folder - **MISSING**
2. [x] `freemium-terms.md` - E1 Lite-specific limitations, upgrade terms
3. [x] `fair-use-policy.md` - Usage limits, abuse prevention
4. [x] `data-retention-policy.md` - 90-day retention for Lite tier

**Note:** E1 is web-based SaaS, so `/business-functions/legal/terms-of-service.md` and `privacy-policy.md` already cover it comprehensively

**Priority:** **LOW** - General platform ToS covers Lite tier (Section 5)

---

## Gap Analysis

### [x] **Critical Gaps (Blocking Sprint 1 Launch)**

**NONE** - Existing documents are sufficient to launch Sprint 1

---

### **Important Gaps (Should Create Before Scale)**

1. **R1-Specific Legal Folder**
 - **Why Needed:** Consistency across all products
 - **When:** Before Month 2 (when R1 subscriptions start renewing)
 - **Files:**
 - `subscription-terms.md` (R1 Lite support specifics)
 - `cancellation-policy.md` (prorated refunds, notice periods)
 - `support-sla.md` (48h response time, scope)

2. **E1-Specific Legal Folder**
 - **Why Needed:** Clarify Lite tier limitations separately from paid tiers
 - **When:** Before Month 3 (when Lite users start upgrading)
 - **Files:**
 - `freemium-terms.md` (feature limits, upgrade triggers)
 - `fair-use-policy.md` (1,000 transactions/month limit enforcement)

---

### **Nice-to-Have (Future Iterations)**

3. **Product-Specific Addendums**
 - `a1-tier-upgrade-addendum.md` (Tier 1 -> 2, 2 -> 3 upgrade process)
 - `r1-template-license-addendum.md` (template update IP rights)
 - `e1-to-saas-migration-terms.md` (Lite -> Basic upgrade, data migration)

4. **Partnership & Vendor Contracts**
 - `contracts/partnership/templates/pos-vendor-integration-agreement.md` (Pawoon, Moka partnerships)
 - `contracts/vendor/templates/infrastructure-service-agreement.md` (AWS, Azure, hosting)

---

## Alignment Check: Business-Functions vs Product-Specific

### Current Structure:

```
business-functions/legal/
|-- terms-of-service.md (PLATFORM-WIDE for all SaaS products)
|-- privacy-policy.md (PLATFORM-WIDE)
|-- compliance-checklist.md
|-- contracts/
 |-- customer/templates/
 | |-- a1-purchase-agreement.md (PRODUCT-SPECIFIC)
 | |-- r1-subscription-agreement.md (PRODUCT-SPECIFIC)
 |-- employment/templates/
 |-- nda-mutual.md
 |-- contractor-services-agreement.md

products/01-power-bi-template/legal/
|-- terms-of-service.md (A1-SPECIFIC, for template sales)
|-- privacy-policy.md (A1-SPECIFIC)
|-- sla-definitions.md (A1-SPECIFIC, tier-based)

products/02-template-support/
|-- (NO LEGAL FOLDER - uses contracts/r1-subscription-agreement.md)

products/03-web-dashboard-lite/
|-- (NO LEGAL FOLDER - uses business-functions/legal/terms-of-service.md Section 5)
```

### [!] **Inconsistency Identified:**

**A1 has both:**
1. Product-specific legal folder (`/products/01.../legal/`)
2. Contract template (`/business-functions/legal/contracts/customer/templates/a1...`)

**R1 & E1 have only:**
1. Contract template OR reference to platform ToS

### **Recommendation:**

**Option A: Lightweight Approach** (Faster, Sprint 1 friendly)
- Keep business-functions/legal/ for platform-wide docs
- Product folders only get legal/ if they have UNIQUE legal requirements beyond the platform
- A1 = unique (one-time purchase, offline template, tier-specific IP licensing)
- R1 & E1 = covered by platform ToS + contract templates

**Option B: Consistent Structure** (Better long-term, more documentation)
- ALL products get `/legal/` folder for consistency
- Product folders contain product-specific addendums/clarifications
- Reduces confusion ("Where do I find R1 legal docs?")

**Decision:** **Option A for Sprint 1**, migrate to **Option B in Sprint 2**

---

## Action Plan

### **Immediate (Before First Sale):**

[x] **COMPLETE:**
- business-functions/legal/terms-of-service.md
- business-functions/legal/privacy-policy.md
- contracts/customer/templates/a1-purchase-agreement.md
- contracts/customer/templates/r1-subscription-agreement.md
- products/01-power-bi-template/legal/* (all 3 files)

[x] **TODO (Optional but Recommended):**
- [ ] Add "legal/" folder to R1 with minimal `README.md` pointing to `/business-functions/legal/contracts/r1-subscription-agreement.md`
- [ ] Add "legal/" folder to E1 with minimal `README.md` pointing to platform ToS Section 5

**Time Required:** 15 minutes

---

### **Week 2-4 (Before Scale):**

- [ ] Create R1-specific legal folder with:
 - `subscription-terms.md` (Rp 75K/month, cancellation, support scope)
 - `cancellation-policy.md` (prorated refunds, notice periods)

- [ ] Create E1-specific legal folder with:
 - `freemium-terms.md` (Lite limits, upgrade triggers)
 - `fair-use-policy.md` (abuse prevention, 1K transaction limit)

**Time Required:** 2-3 hours

---

### **Month 3+ (Continuous Improvement):**

- [ ] Create partnership contract templates (POS vendors)
- [ ] Create infrastructure service agreements (cloud hosting)
- [ ] Indonesian language translations (Bahasa Indonesia) for all customer-facing legal docs
- [ ] Legal counsel review and approval (budget: Rp 5-10M for package review)

---

## Conclusion

**Sprint 1 Legal Readiness:** [x] **READY TO LAUNCH**

**What's Sufficient:**
- Platform-wide ToS and Privacy Policy cover E1 (SaaS product)
- A1-specific legal folder comprehensive
- R1 contract template exists
- Employment/contractor agreements ready

**What's Nice-to-Have (Non-Blocking):**
- R1 & E1 product-specific legal folders (for consistency)
- Partnership/vendor contract templates (can negotiate ad-hoc for Sprint 1)

**Recommendation:** **Launch Sprint 1** with existing documentation. Create R1/E1 legal folders in Week 2 for organizational consistency.

---

**Next Actions:**
1. [x] Mark `/business-functions/legal/contracts/` as Sprint 1 complete
2. Create minimal README.md files in R1 and E1 pointing to relevant legal docs (15 min task)
3. Schedule legal counsel review of all templates before 50+ customers (budget Rp 5-10M)

---

**Related Documents:**
- [[biz/departments/legal/compliance/01-compliance-checklist|Compliance Checklist]] - Regulatory requirements tracker
- [[products/01-power-bi-template/product-strategy/product-strategy.md|Product Strategy]] - R1 documentation context
- [[biz/departments/legal/contracts/contracts|contracts/contracts.md]] - Contract templates overview

**Last Updated:** 2025-12-27
**Owner:** Legal / Compliance Lead
**Next Review:** Week 4 (End of Sprint 1)

