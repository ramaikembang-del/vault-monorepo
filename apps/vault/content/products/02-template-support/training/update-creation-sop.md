# R1 Template Support - Monthly Update Creation SOP

**Document Type:** Standard Operating Procedure (SOP)
**Target Audience:** Product Team, Template Developers
**Product:** R1 - Template Support & Subscription Service
**Version:** 1.0
**Last Updated:** December 28, 2025
**Owner:** Product & Engineering Team
**Review Frequency:** Quarterly

---

## Table of Contents

1. [[#introduction|Introduction]]
2. [[#update-cycle-overview|Update Cycle Overview]]
3. [[#phase-1-planning--prioritization|Phase 1: Planning & Prioritization]]
4. [[#phase-2-development|Phase 2: Development]]
5. [[#phase-3-testing--qa|Phase 3: Testing & QA]]
6. [[#phase-4-release--distribution|Phase 4: Release & Distribution]]
7. [[#phase-5-post-release-monitoring|Phase 5: Post-Release Monitoring]]
8. [[#update-categories|Update Categories]]
9. [[#version-numbering|Version Numbering]]
10. [[#release-notes-template|Release Notes Template]]
11. [[#rollback-procedure|Rollback Procedure]]
12. [[#success-metrics|Success Metrics]]

---

## Introduction

### Purpose of This SOP

This Standard Operating Procedure (SOP) defines how to **create, test, and release monthly template updates** for R1 Template Support subscribers.

**Goals:**
- Deliver consistent monthly value to subscribers (justify Rp 75K/month)
- Maintain template quality (no breaking changes, backward compatibility)
- Incorporate subscriber feedback (feature requests, bug fixes)
- Reduce churn by demonstrating ongoing product improvement

### Update Commitment

**Frequency:** Minimum 1 update per month (target: 1st week of each month)

**What Updates Include:**
1. **New Features:** New metrics, visualizations, or functionality
2. **Bug Fixes:** Fix reported issues or calculation errors
3. **Performance Improvements:** Faster load times, optimized queries
4. **Content Updates:** New video tutorials, knowledge base articles, best practices

**Subscriber Value:**
- Stay current with Power BI platform changes (Microsoft updates quarterly)
- Get access to new F&B industry metrics as trends evolve
- Avoid template rebuild costs (Rp 2M every 2 years → Rp 900K/year subscription)

---

## Update Cycle Overview

### Monthly Timeline

**Week 1 (Planning):**
- Day 1-2: Review feature requests, support tickets, competitor analysis
- Day 3-4: Prioritize features for this month's update
- Day 5: Lock scope, assign development tasks

**Week 2-3 (Development):**
- Day 6-12: Build new features, fix bugs
- Day 13-15: Internal testing (dev team)
- Day 16-18: Beta testing (select subscribers)

**Week 4 (Release):**
- Day 19-20: Final QA, backward compatibility testing
- Day 21: Package update, write release notes
- Day 22: Distribute to all subscribers via Google Drive
- Day 23-30: Monitor feedback, hotfix critical issues if needed

**Example:**
- **January Update:** Released Feb 1 (features built in mid-late Jan, released early Feb)
- **February Update:** Released Mar 1
- **March Update:** Released Apr 1

---

## Phase 1: Planning & Prioritization

### Step 1.1: Collect Input

**Sources:**

**1. Feature Request Tracker (Google Sheet)**
- Review all requests submitted by subscribers via support tickets
- Count votes (how many subscribers requested same feature?)
- Tag by category: New Metric / New Visual / Integration / Performance

**2. Support Ticket Analysis**
- Review last 30 days of tickets with tag "Bug" or "Issue"
- Identify recurring problems (3+ tickets for same issue → high priority fix)
- Calculate impact: How many subscribers affected?

**3. Competitor Analysis**
- Check what features Moka Analytics, Qasir Reports, Pawoon released this month
- Identify gaps: Do they have features we don't?
- Evaluate: Should we match feature parity or differentiate?

**4. Product Roadmap**
- Review long-term roadmap (product-strategy.md)
- Identify features planned for this quarter
- Allocate some capacity for roadmap items (not just reactive support)

**5. Team Ideas**
- Brainstorm session with product, engineering, support teams
- "If we could add one thing this month, what would it be?"
- Capture creative ideas not surfaced by customers yet

### Step 1.2: Prioritize Features

**Prioritization Framework:**

Use **RICE Score** (Reach × Impact × Confidence / Effort):

**Reach:** How many subscribers will use this? (1-10 scale)
- 10 = All subscribers (e.g., bug fix affecting everyone)
- 5 = Half of subscribers (e.g., new metric for table service restaurants)
- 1 = Few subscribers (e.g., niche feature for fine dining only)

**Impact:** How much value does this provide? (1-10 scale)
- 10 = Massive value (prevents churn, unlocks revenue insight)
- 5 = Moderate value (nice-to-have, improves workflow)
- 1 = Low value (cosmetic change, minor convenience)

**Confidence:** How sure are we about Reach & Impact? (0.0-1.0 scale)
- 1.0 = Very confident (requested by 10+ subscribers, clear use case)
- 0.5 = Moderate confidence (1-2 requests, assumptions not validated)
- 0.2 = Low confidence (gut feel, no customer validation)

**Effort:** How long to build? (hours)
- 1 hour = Simple (add 1 metric to existing dashboard)
- 8 hours = Moderate (new dashboard tab, requires design + build + test)
- 40 hours = Complex (new integration, major refactor)

**RICE Score = (Reach × Impact × Confidence) / Effort**

**Example:**

| Feature | Reach | Impact | Confidence | Effort (hrs) | RICE Score | Priority |
|---------|-------|--------|------------|--------------|------------|----------|
| Fix: Revenue calculation error | 10 | 10 | 1.0 | 2 | **50.0** | P0 (Critical) |
| New: Food Cost Variance metric | 8 | 9 | 0.8 | 4 | **14.4** | P1 (High) |
| New: Multi-branch comparison | 5 | 7 | 0.6 | 16 | **1.3** | P2 (Medium) |
| New: Dark mode theme | 3 | 2 | 0.5 | 8 | **0.4** | P3 (Low) |

**Prioritization Rules:**
1. **P0 (Critical):** Must fix this month (bugs affecting calculations, data loss, blocking issues)
2. **P1 (High):** Strong candidate for this month (high RICE score, frequently requested)
3. **P2 (Medium):** Consider if bandwidth allows (moderate RICE score)
4. **P3 (Low):** Defer to next month (low RICE score, nice-to-have)

### Step 1.3: Lock Scope

**Capacity Planning:**

**Development Team Capacity:**
- Assume 40 hours/month per developer
- Allocate 20% buffer for unexpected issues (32 usable hours)
- Typical monthly update: 20-30 hours of development work

**Scope Selection:**
- Pick top 3-5 features that fit within 30-hour budget
- Ensure mix of: 1-2 bug fixes + 2-3 new features + 1 performance improvement
- Avoid "feature creep" (lock scope, no new additions mid-month)

**Example Monthly Scope:**

**February 2025 Update:**
1. Fix: Revenue calculation rounding error (2 hours) - P0
2. New: Food Cost Variance metric (4 hours) - P1
3. New: Top 10 Best-Selling Products chart (6 hours) - P1
4. Performance: Optimize dashboard load time (8 hours) - P1
5. Content: Video tutorial on "Reading Profit Margins" (4 hours) - P2
6. Content: Update knowledge base with 3 new articles (4 hours) - P2

**Total:** 28 hours (within 30-hour budget)

**Deferred to March:**
- Multi-branch comparison (too complex for Feb, planned for Mar)
- Dark mode theme (low priority, nice-to-have)

---

## Phase 2: Development

### Step 2.1: Create Development Branch

**Version Control:**
- Use Git for version control (GitHub, GitLab, or Bitbucket)
- Main branch: `main` (production version sent to subscribers)
- Feature branch: `update-202502` (February 2025 update)

**Workflow:**
```bash
git checkout main
git pull origin main
git checkout -b update-202502
```

### Step 2.2: Build Features

**Power BI Development:**

**Best Practices:**
1. **Modular Design:** Add new visuals to separate pages (don't overcrowd existing dashboards)
2. **Naming Conventions:** Use consistent naming for measures, columns, tables
 - Measures: `[Revenue Total]`, `[Food Cost %]`
 - Columns: `Transaction[Date]`, `Product[Category]`
3. **Documentation:** Add tooltips to visuals explaining what metric means
4. **Performance:** Avoid calculated columns (use measures instead for speed)
5. **Backward Compatibility:** Don't break existing visuals or remove columns

**DAX Formula Standards:**

```dax
// Example: Food Cost Variance
Food Cost Variance =
VAR ActualFoodCost = [Total Food Cost]
VAR TargetFoodCost = [Revenue Total] * 0.35 // 35% target
VAR Variance = ActualFoodCost - TargetFoodCost
RETURN Variance
```

**Visual Design Standards:**
- Color scheme: Consistent with existing template (brand colors)
- Font: Segoe UI, 11pt for body text, 14pt for headers
- Charts: Use appropriate chart types (bar for comparison, line for trends, pie for composition)
- Accessibility: High contrast colors, readable font sizes

### Step 2.3: Document Changes

**Changelog (CHANGELOG.md):**

```markdown
## [Version 1.5.0] - 2025-02-01

### Added
- Food Cost Variance metric (shows difference vs 35% target)
- Top 10 Best-Selling Products bar chart
- Multi-branch comparison dashboard tab (Beta)

### Fixed
- Revenue calculation rounding error (was off by Rp 0.01 per transaction)
- Dashboard load time reduced from 45s to 20s (query optimization)

### Changed
- Performance Score now weighted 60% revenue, 40% customer satisfaction (was 50/50)

### Deprecated
- Old "Sales by Hour" chart (replaced with "Revenue by Time of Day")

### Removed
- None

### Security
- None
```

---

## Phase 3: Testing & QA

### Step 3.1: Internal Testing (Dev Team)

**Test Checklist:**

**Functional Testing:**
- [ ] All new features work as expected (metrics calculate correctly)
- [ ] All existing features still work (no breaking changes)
- [ ] Data refresh completes successfully (<5 minutes for 10K transactions)
- [ ] Filters and slicers work (date range, branch, product category)
- [ ] Export to PDF works (all pages render correctly)

**Data Validation:**
- [ ] Revenue total matches POS report (within Rp 1,000 tolerance)
- [ ] Transaction count matches POS
- [ ] New metrics match manual calculations (spot check 5 transactions)

**Performance Testing:**
- [ ] Dashboard loads in <30 seconds (for 10K transactions)
- [ ] Refresh completes in <5 minutes (for 50K transactions)
- [ ] No memory issues (Power BI doesn't crash with large datasets)

**Cross-Version Testing:**
- [ ] Template works in Power BI Desktop 2025.12 (latest)
- [ ] Template works in Power BI Desktop 2025.01 (6 months old)
- [ ] Template works in Power BI Desktop 2023.06 (1 year old)

**Edge Cases:**
- [ ] Blank data (no transactions for a day → dashboard shows "0", not error)
- [ ] Duplicate transactions (CSV has duplicate rows → de-duplication logic works)
- [ ] Special characters (restaurant name has emoji → displays correctly)

### Step 3.2: Beta Testing (Select Subscribers)

**Beta Tester Selection:**
- 5-10 active subscribers
- Mix of: warung, cafe, restaurant (different business types)
- Mix of: Moka, Qasir, Pawoon (different POS systems)
- Volunteers who signed up for beta program

**Beta Distribution:**
- Send beta version via Google Drive (separate folder: "Beta Updates")
- Include beta release notes with known issues
- Request feedback via Google Form (5-10 minutes survey)

**Beta Feedback Form:**

```markdown
# R1 February 2025 Beta Feedback

**1. Did the template work with your POS data? (Yes / No / Partial)**

**2. Did you encounter any errors? If yes, describe:**

**3. How useful is the new Food Cost Variance metric? (1-5 stars)**

**4. How useful is the new Top 10 Products chart? (1-5 stars)**

**5. Did dashboard load faster than previous version? (Yes / No / Same)**

**6. Any bugs or issues? Describe:**

**7. Any features you'd like to see in next update?**

**8. Overall satisfaction with this update? (1-5 stars)**
```

**Beta Testing Period:** 3-5 days

**Go/No-Go Decision:**
- If 80%+ beta testers report "works well", proceed to release
- If 50-80% report issues, fix critical bugs and re-test with same group
- If <50% report issues, cancel release and re-plan (scope was too ambitious)

### Step 3.3: Backward Compatibility Testing

**Critical:** Ensure existing subscribers' customizations don't break.

**Test Scenarios:**

**Scenario 1: Subscriber Hasn't Customized Template**
- Install update over existing template
- Verify data refresh works
- Verify all existing dashboards still display correctly

**Scenario 2: Subscriber Customized Colors**
- Update template (new version)
- Custom colors should persist (or documented migration steps if breaking)

**Scenario 3: Subscriber Added Custom Metrics**
- Update template
- Custom metrics should still work (no table/column rename conflicts)

**If Backward Compatibility Breaks:**
- Provide migration guide in release notes
- Offer 1-on-1 support for affected subscribers
- Consider rolling back feature if too disruptive

---

## Phase 4: Release & Distribution

### Step 4.1: Package Update

**Final Checklist Before Release:**

- [ ] All beta feedback addressed (critical bugs fixed)
- [ ] Changelog complete (CHANGELOG.md updated)
- [ ] Release notes written (user-friendly, non-technical language)
- [ ] Version number updated in template (About tab shows v1.5.0)
- [ ] Template file renamed: `PWBI_FnB_Template_v1.5.0.pbix`
- [ ] Sample data included (anonymized, for new subscribers to test)

### Step 4.2: Write Release Notes

**Release Notes Template:**

```markdown
# R1 Template Update - February 2025 (v1.5.0)

**Release Date:** February 1, 2025
**What's New:** 3 new features, 2 bug fixes, 1 performance improvement

---

## What's New

### 1. Food Cost Variance Metric
**What:** See how your actual food cost compares to the 35% industry target.

**Why Useful:** Quickly spot if you're overspending on ingredients (cost > 35%) or have room to improve recipes (cost < 35%).

**How to Use:** Check "Key Metrics" dashboard → "Food Cost Variance" card. Green = under target (good), Red = over target (review suppliers/portions).

**Screenshot:** [Screenshot of Food Cost Variance card]

---

### 2. Top 10 Best-Selling Products Chart
**What:** Bar chart showing your 10 most popular menu items this month.

**Why Useful:** Double down on best-sellers (promote more, ensure stock), identify underperformers (remove or reposition).

**How to Use:** "Sales Analysis" dashboard → "Top 10 Products" chart. Click bar to drill down to individual transactions.

**Screenshot:** [Screenshot of Top 10 chart]

---

### 3. Multi-Branch Comparison (Beta)
**What:** Compare revenue, transactions, and performance across multiple branches.

**Why Useful:** Identify high-performing vs low-performing locations, allocate resources accordingly.

**How to Use:** "Multi-Branch" dashboard tab → Select branches to compare. (Note: Beta feature, feedback welcome!)

**Screenshot:** [Screenshot of multi-branch dashboard]

---

## Bug Fixes

### Revenue Calculation Rounding
**Issue:** Revenue was off by a few rupiah due to rounding error.

**Fix:** Now rounds to nearest Rp 1 (previously rounded to 2 decimal places, causing discrepancy with POS reports).

**Impact:** Your revenue numbers now match POS exactly.

---

### Dashboard Load Time
**Issue:** Dashboard took 45-60 seconds to load for large datasets (50K+ transactions).

**Fix:** Optimized queries, removed unnecessary calculated columns. Now loads in 20-25 seconds.

**Impact:** Faster dashboard, better user experience.

---

## Performance Improvements

- Dashboard load time reduced by 50% (45s → 20s)
- Data refresh time reduced by 30% (7 min → 5 min)
- Power BI file size reduced by 10% (better compression)

---

## How to Install Update

**Option 1: Fresh Install (Recommended)**
1. Download v1.5.0 from Google Drive
2. Import your POS CSV into new template
3. Refresh data
4. (If you customized old template, manually re-apply customizations)

**Option 2: Upgrade Existing Template**
1. Backup your current template (save a copy)
2. Download v1.5.0
3. Open new template → "Home" → "Transform Data" → "Data Source Settings"
4. Point to your existing POS CSV file
5. Close & Apply → Refresh data

---

## Need Help?

- **Video Tutorial:** [Link to Loom walkthrough of new features]
- **Knowledge Base:** KB-040: How to Install Template Updates
- **Support:** WhatsApp +62 XXX-XXXX-XXXX or support@[company].com

---

## What's Next? (March 2025 Roadmap)

- Inventory Tracking (basic stock management)
- Staff Performance Dashboard (track server/cashier efficiency)
- WhatsApp Alert Integration (daily revenue summary sent to your phone)

Vote for features you want: [Google Form link]

---

**Thank you for being an R1 subscriber! Your feedback shapes our roadmap.**
```

### Step 4.3: Distribute to Subscribers

**Distribution Channels:**

**1. Google Drive (Primary)**
- Upload v1.5.0 to shared Google Drive folder: "R1 Updates" > "2025" > "February"
- Ensure all subscribers have view access (check sharing settings)
- Filename: `PWBI_FnB_Template_v1.5.0.pbix`

**2. Email Announcement**
- Subject: " R1 February Update: Food Cost Tracking + Performance Boost!"
- Body: Release notes (formatted for email)
- CTA: "Download Now from Google Drive" (link)
- Include video tutorial link (Loom walkthrough)

**3. WhatsApp Broadcast**
- Short announcement: "Update baru rilis! Download di Google Drive: [link]"
- Avoid long messages (WhatsApp limits character count)

**4. Website/Blog Post (if applicable)**
- Publish release notes on website
- SEO benefit (attract new subscribers searching for "Power BI F&B template")

### Step 4.4: Monitor Initial Feedback

**First 48 Hours:**
- Check support tickets for issues with new update
- Monitor WhatsApp/email for installation problems
- Track downloads (Google Drive analytics or link clicks)

**Red Flags:**
- 5+ tickets reporting same error → hotfix required
- Low download rate (<30% after 48 hours) → follow-up email reminder
- Negative feedback on new feature → plan rollback or improvement for next month

---

## Phase 5: Post-Release Monitoring

### Week 1 Post-Release

**Metrics to Track:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Download Rate** | 80%+ within 7 days | % of subscribers who downloaded update |
| **Installation Success** | 95%+ | % of downloads that installed without errors |
| **Support Tickets** | <10 update-related tickets | Count of tickets tagged "v1.5.0 issue" |
| **Feature Usage** | 50%+ use new feature | % of subscribers who used Food Cost Variance metric |
| **Customer Satisfaction** | 4.0+ / 5.0 | Post-update survey score |

**Weekly Review:**
- Review support tickets (any recurring issues?)
- Check feature usage (Google Analytics if template has telemetry, or survey data)
- Plan hotfix if critical bug found

### Month 1 Post-Release

**Retrospective Meeting:**
- What went well? (celebrate wins)
- What went poorly? (identify improvements for next cycle)
- Did features achieve expected impact? (usage data, subscriber feedback)
- What should we do differently next month?

**Learnings:**
- Document in "Update Retrospective" log (Google Doc)
- Update this SOP if process improvements identified
- Share learnings with team

---

## Update Categories

### Category 1: New Features (40% of monthly work)

**What:** New metrics, visualizations, dashboards, integrations

**Examples:**
- New metric: "Customer Retention Rate"
- New visual: "Revenue Heatmap by Hour & Day"
- New dashboard: "Inventory Tracking" (if scope expands)
- New integration: "Auto-import from Moka API" (vs manual CSV)

**Effort:** 8-16 hours per feature

---

### Category 2: Bug Fixes (30% of monthly work)

**What:** Fix reported issues, calculation errors, visual glitches

**Examples:**
- Revenue calculation rounding error
- Chart not displaying on mobile (Power BI app)
- Filter not working (date slicer stuck)
- Data refresh fails (error message unclear)

**Effort:** 2-8 hours per bug

---

### Category 3: Performance Improvements (20% of monthly work)

**What:** Faster load times, smaller file size, optimized queries

**Examples:**
- Reduce dashboard load time (45s → 20s)
- Optimize DAX formulas (replace calculated columns with measures)
- Compress embedded images (reduce file size)
- Implement incremental refresh (for large datasets >100K rows)

**Effort:** 4-12 hours

---

### Category 4: Content Updates (10% of monthly work)

**What:** Video tutorials, knowledge base articles, best practices guides

**Examples:**
- Video: "How to Read Food Cost Variance"
- Article: "KB-045: Troubleshooting Common Update Installation Issues"
- Guide: "5 F&B Metrics Every Restaurant Owner Should Track"

**Effort:** 2-6 hours

---

## Version Numbering

### Semantic Versioning: `MAJOR.MINOR.PATCH`

**Example:** v1.5.2

**MAJOR (1.x.x):** Breaking changes, major redesign
- Increment when: Template structure changes significantly (incompatible with old data)
- Example: v1.x.x → v2.0.0 (complete redesign, migrate from Excel to Power BI)

**MINOR (x.5.x):** New features, non-breaking changes
- Increment when: Monthly update with new features (Food Cost Variance, new charts)
- Example: v1.4.0 → v1.5.0 (February 2025 update)

**PATCH (x.x.2):** Hotfixes, small bug fixes
- Increment when: Fix critical bug mid-month (outside regular update cycle)
- Example: v1.5.0 → v1.5.1 (hotfix for revenue calculation error)

**Current Version (December 2025):** v1.0.0 (initial release to R1 subscribers)
**Next Version (January 2025 update):** v1.1.0
**Next Version (February 2025 update):** v1.2.0

---

## Release Notes Template

See **Step 4.2** above for full release notes template.

**Key Sections:**
1. What's New (features)
2. Bug Fixes
3. Performance Improvements
4. How to Install Update
5. Need Help? (support links)
6. What's Next? (roadmap teaser)

---

## Rollback Procedure

### When to Rollback

**Trigger for Rollback:**
- Critical bug affecting >50% of subscribers (e.g., dashboard won't open)
- Data loss or corruption (e.g., transactions deleted after update)
- Performance regression (new version slower than old version)
- Widespread installation failures (>20% of subscribers can't install)

### Rollback Steps

**1. Acknowledge Issue (Immediate)**
- Send email/WhatsApp to all subscribers: "We've identified an issue with v1.5.0. Please do not install until we send a fix."
- Post notice in Google Drive folder (rename file to: `v1.5.0_DO_NOT_INSTALL.pbix`)

**2. Re-Release Previous Version (Within 4 hours)**
- Upload previous stable version (v1.4.0) to Google Drive
- Label clearly: `v1.4.0_STABLE_USE_THIS.pbix`
- Send announcement: "Please use v1.4.0 while we fix v1.5.0 issues. Expected fix: [date]."

**3. Fix Issue (Within 24-48 hours)**
- Diagnose root cause (code review, reproduce issue in test environment)
- Develop hotfix (patch version: v1.5.1)
- Test thoroughly (internal + beta testers)

**4. Re-Release Fixed Version (After testing)**
- Upload v1.5.1 to Google Drive
- Send announcement: "v1.5.0 issue resolved. Please download v1.5.1 (stable)."
- Include detailed explanation of what went wrong and how it's fixed (transparency builds trust)

**5. Post-Mortem (Within 1 week)**
- Document what went wrong, why it wasn't caught in testing
- Identify process improvements (add test case, improve QA checklist)
- Update this SOP with learnings

---

## Success Metrics

### Monthly Update Success Criteria

**Adoption:**
- 80%+ of subscribers download update within 7 days
- 95%+ installation success rate (no errors during install)

**Quality:**
- <10 support tickets related to update issues
- No P0 (critical) bugs requiring hotfix
- 4.0+ / 5.0 customer satisfaction rating (post-update survey)

**Value:**
- 50%+ of subscribers use at least one new feature within 30 days
- Churn rate <5% in month following update (update should reduce churn, not increase)

**Efficiency:**
- Update development completed within 30-hour budget
- Release date met (1st week of month, no delays)

---

## Continuous Improvement

### Quarterly Reviews

**Every 3 months, review:**
- Update retrospective logs (what worked, what didn't)
- Subscriber feedback trends (are updates meeting needs?)
- Feature usage data (which features get used, which don't?)
- Competitive landscape (have competitors released features we should match?)

**Outcome:**
- Refine update process (faster dev cycles, better testing)
- Adjust roadmap (focus on high-impact features)
- Update this SOP (incorporate learnings)

---

## Appendix: Tools & Resources

### Development Tools

**Power BI Desktop:**
- Download: **[Power BI Desktop](https://powerbi.microsoft.com/desktop)**
- Version: Always use latest stable version for development
- License: Free (no subscription required for desktop development)

**Version Control:**
- Git (GitHub, GitLab, or Bitbucket)
- Branching strategy: `main` (production), `update-YYYYMM` (feature branch)
- Commit frequently (daily commits, descriptive messages)

**Screen Recording (for video tutorials):**
- Loom: **[Loom](https://loom.com)** (free for up to 25 videos)
- OBS Studio: **[OBS Studio](https://obsproject.com)** (free, open-source)

### Testing Tools

**Sample Datasets:**
- 3 POS CSV files (Moka, Qasir, Pawoon format) with 10K, 50K, 100K transactions
- Edge case datasets (blank rows, special characters, duplicate transactions)

**Power BI Performance Analyzer:**
- Built into Power BI Desktop (View → Performance Analyzer)
- Measure query execution time, identify slow visuals

### Communication Tools

**Email Template (Mailchimp or manual):**
- Subscriber list: Google Sheets with email addresses
- Template: Update announcement email (pre-formatted)

**WhatsApp Broadcast:**
- WhatsApp Business: Broadcast lists (max 256 contacts)
- If >256 subscribers, use WhatsApp Business API (paid)

---

## Conclusion

By following this SOP, you will deliver **consistent, high-quality monthly updates** that:
- Keep subscribers engaged and reduce churn
- Demonstrate ongoing product value (justify Rp 75K/month)
- Build trust through reliability and transparency

**Remember:** Every update is an opportunity to wow subscribers and earn their continued loyalty.

**Questions about this SOP?** Contact product team lead or email product@[company].com.

---

**Document Version History:**

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2025-12-28 | Initial SOP creation | Product & Engineering Team |

---

**END OF MONTHLY UPDATE CREATION SOP**
