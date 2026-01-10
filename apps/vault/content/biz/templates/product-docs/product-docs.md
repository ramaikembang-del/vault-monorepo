# Product Documentation Templates

**Purpose:** Standardized templates for product documentation across all PWBI F&B Growth products.

---

## Template Types

This folder will contain templates for:

### Product Strategy
- Product strategy document template
- Feature prioritization framework template
- Go-to-market plan template
- Competitive analysis template

### Technical Documentation
- Technical specification template
- API documentation template
- Architecture decision record (ADR) template
- Database schema template

### Operations
- Product launch checklist template
- SOP (Standard Operating Procedure) template
- Deployment runbook template
- Support escalation template

### Marketing & Sales
- Product messaging template
- Sales playbook template
- Demo script template
- Case study template

---

## Usage Guidelines

**When Creating New Product Documentation:**

1. Check if template exists for document type
2. Copy template to product folder (e.g., `docs/products/XX-product-name/`)
3. Fill in all [PLACEHOLDER] sections
4. Follow metadata structure (Owner, Last Updated, Next Review)
5. Use relative links for cross-references

**Template Naming Convention:**
- `TEMPLATE-[document-type].md`
- Example: `TEMPLATE-product-strategy.md`

---

## Standard Metadata Format

All product docs should include:

```markdown
# [Document Title]

**Product:** XX. Product Name (Product Code)
**Sprint:** X
**Status:** [Active / Planned / Future]
**Owner:** [Team/Person]
**Last Updated: 2026-01-04
**Next Review:** [Date or trigger]
```

---

**To Be Populated:** Sprint 2 (as documentation patterns emerge from Phase 1 products)
**Current Reference:** See existing docs in products 01-04 for patterns
**Owner:** Product Team
**Last Updated: 2026-01-04

---

## Related

- **[[biz/templates/product/prd-template|PRD Template]]** - Product requirements document template
- **[[biz/templates/engineering/technical-design-doc|Technical Design Doc]]** - Technical documentation template
- **[[biz/templates/product/release-notes-template|Release Notes Template]]** - Release documentation template
- **[[products/product-folder-map|Product Folder Map]]** - Product structure and organization
- **[[biz/departments/operations/documentation/documentation-standards|Documentation Standards]]** - Documentation guidelines
