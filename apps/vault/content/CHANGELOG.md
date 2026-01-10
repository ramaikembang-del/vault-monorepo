#Documentation Changelog

All notable changes to the documentation structure and content.

---

## [4.3.0] - 2026-01-05

### MAJOR: Comprehensive Link Cleanup & Repository Organization

**Achievement:** Systematic resolution of 103+ broken internal links and complete repository reorganization for maintainability.

#### ✨ Link Integrity Restoration

**Ghost Links Fixed:**
- Fixed structural path errors in `dev/05-saas-basic/README.md` (docs/biz  ->  ../../biz)
- Corrected 7 "Root README" links in `products/04-accounting-module/` that pointed to wrong README

**Product Variant Link Corrections (~45 links):**
- **R2a files**  ->  Now correctly point to `R2a-pl-analytics.md` (not dev/05-saas-basic)
- **R2b files**  ->  Now correctly point to `R2b-cash-flow.md`
- **R2c files**  ->  Now correctly point to `R2c-cogs-calculator.md`
- **E1 files**  ->  Now correctly point to `03-web-dashboard-lite.md`

**Final Misrouted Links (6 fixed):**
- `04-accounting-module.md`  ->  `analytics/analytics.md`
- `01-power-bi-template/.../07-tier-3-product-strategy.md`  ->  `02-template-support.md`
- `03-web-dashboard-lite.md`  ->  `freemium/freemium.md`
- `02-template-support/innovation-proposals.md` (2 links)  ->  option-2 and option-3 subdirectories
- Created `biz/training/employee/role-specific/role-specific.md` for training directory navigation

**Obsolete Content Pruned:**
- Removed regex artifacts (`\d{2}`, `\d{4}`, pattern noise)
- Converted generic placeholders to plain text (`link`, `youtube-link`, `figma.com`)
- Pruned archive references (`_Archive Directory_`, legacy changelog paths)
- Cleaned up legacy repository paths (`../saas-platform-full/docs/`)

#### Repository Organization

**Directory Structure:**
- **Moved Reports:** All 5 CSV analysis files  ->  `.agent/reports/` (broken_links_report.csv, full_file_list.csv, full_link_census.csv, etc.)
- **Archived Scripts:** 6 one-time cleanup scripts  ->  `.agent/scripts/archive/` (Fix-Ghost-Links.ps1, Prune-Links.ps1, Generate-Stubs.ps1, etc.)
- **Root Cleanup:** Only essential documentation remains at root (README.md, CHANGELOG.md, PRODUCT_INDEX.md)

**Active Scripts (5 core tools):**
- `Generate-File-Census.ps1` - File inventory
- `Extract-All-Links.ps1` - Link extraction
- `Analyze-Broken-Links.ps1` - Link validation
- `Suggest-Link-Fixes.ps1` - Smart fix suggestions
- `Apply-Link-Fixes.ps1` - Apply fixes from CSV

#### Future Documentation Planning

**Created 55+ Stub Files:**
- **Strategy Docs:** `biz/strategy/frameworks/01-vision-mission.md`, `05-product-positioning.md`, `07-pillar-to-phase-mapping.md`
- **Templates:** Product templates (PRD, release notes, user research), design templates, engineering templates, internal templates (8 total)
- **Department SOPs:** HR contractor management, legal templates (DPA, work-for-hire), finance KPIs, IT security incident response
- **Binary Asset Placeholders:** Created `.md` stubs for planned binaries (financial-report-templates.xlsx.md, case-study-*.pdf.md, etc.)
- **Product Variants:** R2d (tax compliance), R2e (invoicing), R2f (expense tracking), 13-saas-enterprise stubs

**Documentation Roadmap:**
- Created `.agent/FUTURE_DOCS_ROADMAP.md` - Complete inventory of stub files with prioritization guide
- Retargeted binary asset links to point to stubs (e.g., ``file.xlsx``  ->  ``file.xlsx.md``)

#### Strategic Impact

- **100% Link Routing Accuracy:** All links follow repository's `dirname/dirname.md` pattern
- **Zero Genuine Broken Links:** All 103 originally identified broken links resolved
- **Professional Organization:** Clean root directory, organized reports and scripts
- **Future-Ready:** 55+ planned files stubbed and tracked for systematic completion
- **Maintainability:** 5 core link maintenance tools remain active, one-time scripts archived

---

## [4.2.0] - 2026-01-04

### MAJOR: HR Strategy Pivot (The "Partnership" Model)

**Strategic Shift:** Redefined the first key hire from a "Sales Employee" to a **"Founding Partner (Operations)"**. We are trading Equity for Domain Expertise to solve the "Founder Blind Spot".

#### ✨ HR Documentation Overhaul
- **[[biz/departments/hr/strategy/01-hiring-playbook|01-hiring-playbook.md]]:**
 - **Persona Updated:** "Seller" -> "Hospitality Veteran" (Ex-GM, Restaurateur).
 - **Elaborated:** Restored full process depth (330+ lines). Added scripts for "Vision Call" and "Reference Checks".
 - **New Assessment:** "Product Audit" (Critique) instead of "Sales Pitch".

- **[[biz/departments/hr/strategy/02-org-structure|02-org-structure.md]]:**
 - **New Structure:** Phase 2 is now a "Team of Two Co-founders" (Builder + Operator).
 - **Equity Model:** Highlighted the "Equity Bridge" (20-30% stake) to attract senior talent with low cash.

- **[[biz/departments/hr/strategy/03-roles-responsibilities|03-roles-responsibilities.md]]:**
 - **RACI Update:** Partner now has **Accountability (A)** on Product Specs and Pricing.
 - **Protocol:** Added "Anti-Patterns" (The Equity Trap, The Code Tyrant) to prevent co-founder conflict.

#### Strategic Impact
- **Credibility:** We stop selling "software"; we start selling "operational clarity" backed by a peer.
- **Product Fit:** The Partner prevents us from building "useless tech" by validating against kitchen reality.
- **Runway:** Leveraging high equity allows us to hire senior talent with low cash burn (Rp 5-7.5M).

---

## [4.1.0] - 2025-12-27

### Empty Folder Cleanup & Product Standardization

**Completion:** Eliminated all 92 empty directories and standardized product folder structure across all 16 products.

#### ✨ Added: Growth Folder Documentation (Sprint 1 Ready)

**Marketing:**
- `growth/marketing/README.md` - Marketing hub overview
- `growth/marketing/sprint-1-launch-strategy.md` - Complete campaign plan
 - Product launch sequences (Week 1-4)
 - Channel strategies (WhatsApp, Instagram, LinkedIn)
 - Budget allocation (Rp 2-5M)
 - Success metrics and gates
 - Content calendar
 - Messaging frameworks by product

**Sales:**
- `growth/sales/README.md` - Sales hub overview
- `growth/sales/sprint-1-playbook.md` - Full sales playbook
 - Demo scripts and processes
 - Objection handling responses
 - Closing techniques
 - Pipeline management (CRM setup)
 - Upsell strategies
 - Success metrics tracking

**Customer Success:**
- `growth/customer-success/README.md` - CS hub overview
- `growth/customer-success/sprint-1-onboarding-guide.md` - Onboarding processes
 - Template onboarding flow (30-60 min call structure)
 - Support subscription onboarding
 - Lite user activation strategy
 - Follow-up cadences (Day 3, 7, 14)
 - Churn prevention playbook
 - Testimonial collection scripts

#### Added: Placeholder READMEs (70+ files)

**Product Subdirectories:**
- Added README.md to all empty subdirectories in products 03-16
- Each placeholder explains:
 - Folder purpose and planned content
 - When it will be populated (Sprint X)
 - Dependencies and prerequisites
 - Links to parent documentation

**Supporting Folders:**
- `templates/internal/README.md` - Internal templates guide
- `templates/product-docs/README.md` - Product doc templates guide
- `presentations/partner-presentations/README.md` - Partnership decks
- `presentations/templates/README.md` - Presentation templates
- `company/okrs/README.md` - OKR framework (explains Sprint 1 uses gates)
- `business-functions/legal/contracts/README.md` - Legal contracts guide with Sprint 1 action items

#### Product Folder Standardization

**Standard Structure (Applied to All 16 Products):**
```
[product-name]/
|-- integrations/ # POS, software, API integrations
|-- marketing/ # GTM strategy, campaigns, messaging
|-- operations/ # Launch checklists, SOPs, runbooks
|-- product-strategy/ # Strategy docs, roadmap, features
|-- sales/ # Pricing, playbooks, demos
|-- specifications/ # PRDs, technical specs, requirements
|-- technical/ # Architecture, deployment, dev docs
|-- training/ # Customer education materials
|-- README.md
```

**Added Missing Folders:**
- `product-strategy/`  ->  Products 02, 05, 09, 12, 13
- `training/`  ->  Products 04-16 (13 products)
- `integrations/` + `technical/`  ->  Product 02
- `sales/`  ->  Product 12

**Merged & Consolidated:**
- `sops/`  ->  `operations/` (Products 01, 02, 03)
 - Moved deployment-sop.md, maintenance-sop.md, support-delivery-sop.md, etc.
- `specs/`  ->  `specifications/` (Product 03)
 - Merged 5 spec files (electron-architecture, feature-specification, pmf-validation-plan, tech-spec, upgrade-triggers)

#### Removed

- `products/17-mobile-dashboard/` - Too far future, removed for clarity
- `products/18-ai-insights/` - Too far future, removed for clarity
- Duplicate `sops/` folders (content preserved in operations/)
- Duplicate `specs/` folder from product 03 (content preserved in specifications/)
- Empty folder in archive: `saas-platform-full-legacy-docs-2025-12-25/docs/biz/`

#### Impact Metrics

**Before:**
- 92 empty directories
- Inconsistent product structures (6-11 folders per product)
- Missing critical folders (product-strategy, training, etc.)
- Duplicate folders (sops vs operations, specs vs specifications)

**After:**
- 0 empty directories [x]
- 16/16 products with standardized 8-folder structure [x]
- 100+ placeholder READMEs created [x]
- 6 actionable Sprint 1 documents created [x]

#### Strategic Impact

- **Consistency:** Every product follows identical structure - easy navigation
- **Completeness:** No missing folders - clear where to add documentation
- **Sprint 1 Ready:** Growth docs (marketing, sales, CS) are production-ready
- **Scalability:** New products can use template structure from day 1
- **Professional:** Standardized structure demonstrates organizational maturity

---

## [4.0.0] - 2025-12-27

### MAJOR: Product Folder Renumbering (01-18) & Final Completion

**Milestone:** Project 100% Complete (523 Documents) + Canonical Folder Structure

#### Renumbered Product Folders
Renumbered all products from arbitrary numbering (1-13) to **Sprint-Based Sequential Numbering (01-18)** to reflect launch priority.

**Execution Phase (Sprint 1):**
- `01-power-bi-template` (was 1)
- `02-template-support` (was 2)
- `03-web-dashboard-lite` (was 3)

**Next Phase (Sprint 2-3):**
- `04-accounting-module` (was 5)
- `05-saas-basic` (Split from 4)

**Future Phase (Sprint 4-6):**
- `06` through `16` (formerly mixed numbers)
- `17-18` (Future concepts)

#### ✨ Split SaaS Platform Folder
The consolidated `4-saas-platform-full` folder has been **unbundled** into tier-specific folders to improve navigation and clarity:
- `05-saas-basic` (Sprint 3)
- `09-saas-pro` (Sprint 4)
- `12-saas-advanced` (Sprint 5)
- `13-saas-enterprise` (Sprint 6)

#### Updated Root Files
- **[[README|README.md]]** - Updated all links and structure.
- **[[biz/NAVIGATION.md|NAVIGATION.md]]** - Full sitemap updated to 01-18.
- **[[PRODUCT_INDEX.md|PRODUCT_INDEX.md]]** - Product catalog updated.
- **[[products/product-folder-map|product-folder-map.md]]** - New canonical map.

#### Strategic Impact
- **Logical Flow:** Folder order now matches the executable Roadmap.
- **Scalability:** 2-digit numbering (01-99) supports future growth.
- **Clarity:** Separate folders for SaaS tiers prevents "mega-folder" confusion.

---

## [3.0.0] - 2025-12-25

### MAJOR: Sprint 1 Documentation + Biz Folder Reorganization

**Focus Shift:** Moved from theoretical Full SaaS planning to **hybrid validation-first execution** (fast revenue + low risk).

#### ✨ Added: Sprint 1 Product Strategies

**New Complete Product Documentation:**
- **[[biz/strategy/planning/execution/03-sprint-1-roadmap.md|Sprint\ 1\ Master\ Plan]]** - 4-week parallel build timeline
 - Week-by-week breakdown for 3 products
 - Validation gates (Week 2, Week 4)
 - Go/no-go decision matrix
 - Resource allocation

- **[[products/06-custom-dashboard/product-strategy.md|Power BI Template Strategy]]** - Template product
 - 50% complete, launching Week 2
 - Rp 2-3M one-time pricing
 - Target: 10-20 sales (Rp 20-50M revenue)

- **[[products/06-custom-dashboard/product-strategy.md|Template Support Strategy]]** - Recurring support service
 - Build in 1-2 days
 - Rp 75K/month recurring model
 - Target: 30% template buyer conversion

- **[[products/06-custom-dashboard/product-strategy.md|Web Dashboard Lite Strategy]]** - Lite MVP
 - 3-phase plan (6  ->  14  ->  20 features)
 - Freemium validation model
 - Target: 50+ users, NPS >40

- **[[products/06-custom-dashboard/product-strategy.md|Full SaaS Platform Strategy]]** - Future product
 - Build ONLY after Lite validates (Week 8 Gate 2)
 - 4-tier pricing (Basic/Pro/Advanced/Enterprise)

#### Changed: Prioritization Framework Update

- **[[biz/strategy/planning/foundations/06-prioritization-framework.md|Prioritization\ Framework]]** - Updated Sprint 1 section
 - References new detailed product strategies
 - Adjusted feature counts for Lite MVP (6 features, not 10 metrics)
 - Added validation gate criteria

#### MAJOR RESTRUCTURE: Biz Folder Reorganization

**Moved 30 business documents from `docs/biz/` to proper locations:**

**Company-Level Universal Docs (11 files):**
- Created `company/users/`, `company/market/`, `company/reference/`
- Moved 9 files to company-level folders
- **Merged** both MARKET_SEGMENTATION.md versions  ->  comprehensive document with:
 - 19 personas across 5 phases
 - Bandung market research (quantified pain points)
 - Beachhead strategy details
 - GTM sequence by phase
- Moved USER_PERSONAS.md  ->  `company/strategy/user-personas.md`

**Full SaaS Platform Docs (10 files):**
- Created `products/saas-platform-full/strategy/`, `market/`, `gtm/`, `reference/`
- Moved business-model.md, pricing-strategy.md, vision-mission.md
- Moved competitive-landscape.md, ecosystem-map.md
- Moved gtm-strategy.md, content-strategy.md
- Moved feature-matrix.md, product-tiers.md

**Archived Outdated Content (10 files):**
- Created `docs/archive/old-saas-model-2025/`
- Archived outdated freemium strategy docs
- Archived old README.md from biz folder

#### Updated Root Files

- **[[README|README.md]]** - Business wiki homepage
 - Sprint 1 products as primary focus
 - Reorganized company/ structure
 - Current validation-first strategy

- **[[PRODUCT_INDEX.md|PRODUCT_INDEX.md]]** - Product mapping
 - Sprint 1 products + validation gates
 - Future 5-Pillar ecosystem
 - Updated customer journey

- **[[biz/NAVIGATION.md|NAVIGATION.md]]** - Complete sitemap
 - Reflects new company/ folders (users, market, reference)
 - Sprint 1 products section
 - Full SaaS as post-validation product

#### Removed

- `docs/biz/` folder (empty after reorganization)
- Duplicate/redundant strategy documents

#### Strategic Impact

- **Clear execution plan:** Sprint 1 = 4 weeks, 3 products, 3 validation gates
- **Documentation alignment:** All docs now reflect current hybrid validation-first strategy
- **Better organization:** Universal content (personas, market) in company/, product-specific in products/
- **Reduced confusion:** Old Full SaaS freemium strategy archived, not mixed with current approach

---

## [2.1.0] - 2025-12-24

### Product Consolidation: 3-Tier Power BI Dashboard

**Consolidation:** Merged "Power BI Templates" and "Power BI Dashboard" into single **3-tier product offering**.

#### Rationale
- Templates and Dashboard are essentially the same product with different service levels
- 3-tier structure creates clear value ladder: DIY  ->  Assisted  ->  Fully Managed
- Simplifies product catalog while maintaining flexibility
- Aligns with SaaS tiering best practices (inspired by Accurate Online model)

#### ✨ Added
- **[[products/01-power-bi-template/sales/assets/03-3-tier-pricing-model.md|3-Tier\ Pricing\ Strategy]]** - Comprehensive pricing document
 - Tier 1: DIY Template (Rp 2-3M one-time)
 - Tier 2: Assisted Setup (Rp 5-7M one-time)
 - Tier 3: Fully Managed (Rp 10-15M setup + Rp 300-500K/month)
 - Includes: Pricing logic, feature comparison matrix, upgrade paths, revenue projections

#### Changed
- **[[products/01-power-bi-template/01-power-bi-template|products/power-bi-dashboard/01-power-bi-template.md]]** - Updated to show 3-tier structure
- **[[products/products|products/products.md]]** - Removed separate "Power BI Templates" listing
- **[[PRODUCT_INDEX.md|PRODUCT_INDEX.md]]** - Updated Pillar 1 and Pillar 5 to reflect 3-tier model

#### Removed
- `products/power-bi-templates/` folder (consolidated into power-bi-dashboard)

#### Strategic Impact
- **Clearer value proposition:** Customers understand options immediately
- **Natural upgrade path:** DIY  ->  Assisted  ->  Managed progression
- **Recurring revenue stream:** Tier 3 creates MRR foundation
- **Pillar alignment:** Single product spans Pillar 1 (acquisition)  ->  Pillar 5 (core)

---

## [2.0.0] - 2025-12-24

### MAJOR RESTRUCTURE: Product-First Organization

**Migration:** Transformed documentation from function-based to product-first organization to support multi-product ecosystem (5-Pillar strategy).

###✨ Added

**New Directory Structure:**
- Created `products/` - Each product gets own complete folder
- Created `products/power-bi-dashboard/` - Full product documentation
 - `product-strategy/`, `specifications/`, `technical/`, `operations/`, `integrations/`, `marketing/`, `sales/`
- Created `company/` - Company-level strategy and planning
 - `strategy/`, `market/`, `financials/`, `go-to-market/`, `okrs/`
- Created `shared-technical/` - Cross-product infrastructure
 - `architecture/`, `integrations/`, `security/`, `devops/`
- Created `business-functions/` - Finance, legal, HR, partnerships
- Created `growth/` - Marketing, sales, customer success
- Created `knowledge-base/` - Glossary, FAQs, best practices
- Created `templates/` - Reusable document templates

**New Navigation Files:**
- `README.md` - Business wiki homepage with role-based quickstart
- `PRODUCT_INDEX.md` - Complete product  ->  pillar mapping with customer journey
- `NAVIGATION.md` - Comprehensive sitemap

**Placeholder Folders for Future Products:**
- `products/power-bi-templates/` (Pillar 1)
- `products/pay-per-insight/` (Pillar 1)
- `products/embedded-analytics/` (Pillar 1)
- `products/micro-saas/` (Pillar 1)
- `products/template-subscription/` (Pillar 2)
- `products/hosted-power-bi/` (Pillar 3)
- `products/web-dashboard-lite/` (Pillar 3)
- `products/saas-platform-full/` (Pillar 5)

### Migrated

**Power BI Dashboard documentation** moved to `products/power-bi-dashboard/`:
- [x] Specifications:
 - `prd.md` (from planning & analysis/product/02-)
 - `metrics-catalog.md` (from specs/features/05-)
 - `implementation-plan.md` (from specs/features/06-)
 - `ui-ux-specs.md` (from specs/features/07-)
- [x] Technical:
 - `data-model.md` (from planning & analysis/product/03-)
 - `database/sql-server-guide.md` (from specs/technical/)
 - `database/time-intelligence-setup.md` (from specs/technical/)
 - `deployment/deployment-guide.md` (from operations/)
 - `deployment/infrastructure-options.md` (from specs/technical/realtime-options.md)
- [x] Operations:
 - `daily-operations.md` (from operations/daily-operations-guide.md)

**Company-level documentation** moved to `company/`:
- [x] `strategy/platform-strategy.md` (from planning & analysis/business/01-)
- [x] `market/tam-sam-som.md` (from planning & analysis/business/02-tam-analysis.md)

**Templates** moved to `templates/`:
- [x] `customer-facing/feedback-form.md` (from planning & analysis/product/04-)

**Presentations** reorganized:
- [x] `company-pitch/master-deck.md` (from presentations/01-comprehensive-deck-RESTRUCTURED.md)
- [x] `company-pitch/executive-summary.md` (from presentations/02-)
- [x] `product-demos/product-walkthrough.md` (from presentations/03-)
- [x] `product-demos/visual-storyboard.md` (from presentations/06-)

### Changed

- **Main README.md:** Rewritten as business wiki homepage (was product-focused)
- **Documentation philosophy:** Shifted from function-based to product-based organization
- **Scalability:** Structure now supports launching new products by copying folder templates

### Deprecated

Old directory structure will be archived:
- `planning & analysis/` - Content migrated to `company/` and `products/`
- `specs/` - Content migrated to `products/power-bi-dashboard/` and `shared-technical/`
- `operations/` (root level) - Will be reserved for company operations only

---

## [1.0.0] - 2025-12-23

### Added
- Initial product-focused documentation structure
- Daily operations guide
- Comprehensive metrics specification (~150 metrics)
- Dashboard implementation plan (~50 operational metrics)
- SQL Server setup guides
- Multiple presentation decks and scripts

### Archived
- Alternative deployment options (DATA_MAINTENANCE.md, SQL_DAILY_MAINTENANCE.md)
- Legacy platform strategy documents
- Decision conversation logs

---

**Versioning:** We use Semantic Versioning (MAJOR.MINOR.PATCH)
- **MAJOR:** Structural reorganization
- **MINOR:** New sections/categories added
- **PATCH:** Content updates within existing structure


