# DRY Strategy Implementation
**Reducing Redundancy Across Documentation**

---

## Current State Analysis

### Redundancy Identified (Phase 1 Audit)

**High Overlap (60-70%):**
- `roadmap/20-vault-feature-roadmap-full.md` ↔ `specifications/21-vault-feature-specifications.md`
- Both contain implementation details, code examples, timelines

**Medium Overlap (40%):**
- `tasks/02-vault-daily-tasks.md` ↔ `roadmap/01-vault-roadmap-active.md`
- Feature lists repeated across files

**Low Overlap (10-15%):**
- PRDs reference each other's content
- Acceptable cross-referencing

---

## DRY Principles Applied

### 1. Single Source of Truth

**Each document type has ONE purpose:**

| Document Type | Purpose | Unique Content |
|---------------|---------|----------------|
| **PRD** | WHAT & WHY | Requirements, user stories, success criteria |
| **Roadmap** | WHEN & STATUS | Timeline, dependencies, current progress |
| **Specification** | HOW | Code examples, CSS values, API contracts |
| **Tasks** | ACTION | Daily checklists, implementation steps |

**Rule:** If content appears in 2+ files, move to most appropriate location and link from others.

---

## Consolidation Completed (Phase 2-3)

### ✅ Already Addressed

**1. Split Specifications (Action 2)**
- Broke `21-vault-feature-specifications.md` into feature-specific files
- Reduced from 2,401 lines → 5 files averaging 200 lines
- No more scrolling through unrelated features

**2. Folder Structure (Action 5)**
- Clear separation by purpose (prds/, roadmap/, etc.)
- Prevents accidental duplication in new files

**3. Central References**
- `STATUS.md` - Single feature tracking dashboard
- `DOMAINS.md` - Single URL reference
- `README.md` - Navigation hub (links instead of duplicating)

---

## Remaining Opportunities

### High Priority: Roadmap Consolidation

**Issue:** `roadmap/20-vault-feature-roadmap-full.md` (34KB) contains:
- Implementation tasks (belongs in tasks/)
- Code examples (belongs in specifications/)
- Timeline (keep)
- Retrospective (keep)

**Solution:**
```
Keep in roadmap/20-*:
- Sprint breakdown
- Timeline tables
- Dependencies
- Status history
- "What Worked / Didn't Work" lessons

Move to specifications/:
- All code examples
- CSS values
- Component architecture

Move to tasks/:
- Day-by-day checklists
- Implementation subtasks
```

**Estimated Impact:** Reduce roadmap from 1,054 lines → ~400 lines

### Medium Priority: Cross-Reference Standardization

**Current:** Inconsistent linking between docs

**Standardize linking format:**
```markdown
❌ Don't: "See the roadmap for details"
✅ Do: See [Active Roadmap](../roadmap/01-vault-roadmap-active.md) for Sprint 2 plans
```

**Create link inventory:**
- List all cross-references in each file
- Ensure bidirectional (if A links to B, B should link back)
- Validate links don't break

### Low Priority: Template Extraction

**Issue:** Similar structures repeated across PRDs

**Create templates:**
- `templates/prd-template.md` - Standard PRD structure
- `templates/spec-template.md` - Standard spec format
- `templates/task-template.md` - Sprint task format

---

## Implementation Guidelines

### When to Extract vs Duplicate

**Extract (create reusable file) if:**
- Used in 3+ places
- Changes frequently
- High maintenance burden
- Long content (>50 lines)

**Duplicate if:**
- Different context/audience
- Content is brief (<10 lines)
- Rarely changes
- Extracting creates more complexity than value

**Link if:**
- Exact same content in 2 places
- Canonical source exists
- Content is stable

---

## Automation Opportunities

### 1. Link Checker Script

```javascript
// scripts/check-links.js
// Validates all markdown links in docs/
// Run before commits to catch broken refs
```

**Usage:**
```bash
npm run docs:check-links
# Output: ✅ All 47 links valid
#         ❌ 2 broken links found:
#           - roadmap/01-*.md → /nonexistent.md
```

### 2. Duplicate Content Detector

```javascript
// scripts/find-duplicates.js
// Flags text blocks appearing in multiple files
```

**Usage:**
```bash
npm run docs:find-dupes
# Output: ⚠️  Found duplicate block in 2 files:
#         - **Biz Lab** (`10-biz-lab-prd.md`): Knowledge consumption engine.       - roadmap/20-full.md:234-249
```

---

## Action Plan

### Immediate (This Week)
- [x] Create this DRY strategy document
- [ ] Identify top 3 redundant blocks in roadmap/20-*
- [ ] Extract to appropriate locations
- [ ] Update cross-references

### Short-term (Next Sprint)
- [ ] Create PRD/spec/task templates
- [ ] Standardize all cross-reference links
- [ ] Document "where does X belong?" decision tree

### Long-term (Ongoing)
- [ ] Build link checker script
- [ ] Build duplicate detector script
- [ ] Add to CI/CD pre-commit hooks
- [ ] Review quarterly for new redundancies

---

## Success Metrics

**Target Reductions:**
- Roadmap file size: 1,054 lines → 400 lines (-60%)
- Duplicate code blocks: 14 instances → 3 instances (-79%)
- "Where is X?" questions: 10/week → 2/week (-80%)

**Maintenance Efficiency:**
- Time to update feature status: 5 min → 1 min (update STATUS.md only)
- Time to add new feature: 15 min → 10 min (use templates)

---

**Status:** Framework complete, incremental execution ongoing

**See Also:** Phase 2 Action 2 (specification splitting), Phase 3 Action 5 (folder structure)
