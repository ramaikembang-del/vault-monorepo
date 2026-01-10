# Release Notes Template

> [!NOTE]
> **Instructions:** Copy this template for each product release. Replace placeholders `[like this]` with actual content. Delete this note when publishing.

---

## [Product Name] - Version [X.Y.Z]

**Release Date:** [YYYY-MM-DD]
**Release Type:** [Major | Minor | Patch | Hotfix]
**Status:** [Beta | Stable | GA]

---

## What's New

### [Feature Category 1]

#### [Feature Name]

[Brief description of the new feature and why users should care]

**Benefits:**
- [Benefit 1]
- [Benefit 2]

**How to Use:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Screenshot/Video:** [Optional - link or embed]

---

#### [Another Feature]

[Same structure as above]

---

### [Feature Category 2]

[Repeat structure for additional categories]

---

## Improvements

### Performance

- **[Improvement 1]** - [e.g., "Dashboard load time reduced by 40%"]
- **[Improvement 2]** - [e.g., "Offline sync now 2x faster"]

### User Experience

- **[Improvement 1]** - [e.g., "Simplified navigation menu"]
- **[Improvement 2]** - [e.g., "Added keyboard shortcuts for common actions"]

### Design

- **[Improvement 1]** - [e.g., "Refreshed color palette for better readability"]
- **[Improvement 2]** - [e.g., "Mobile-optimized charts"]

---

## Bug Fixes

- **Fixed:** [Bug description] - [e.g., "Export to Excel now preserves Indonesian Rupiah formatting"]
- **Fixed:** [Bug description] - [e.g., "WhatsApp sharing no longer fails on Android 13+"]
- **Fixed:** [Bug description] - [e.g., "Food cost % calculation now handles zero-quantity items"]

---

## Technical Changes

> [!NOTE]
> This section is optional for customer-facing release notes. Use for internal or API-facing releases.

### API Changes

- **[Change Type]:** [e.g., "Added new endpoint"] - `[/api/v1/reports]`
- **[Change Type]:** [e.g., "Deprecated parameter"] - `[old_param]` (use `[new_param]` instead)

### Breaking Changes

> [!WARNING]
> **Action Required:** [Description of what users/developers need to do]

- **[Breaking Change 1]** - [Details and migration path]
- **[Breaking Change 2]** - [Details and migration path]

### Dependencies

- Updated [Library Name] from [v1.0] to [v2.0]
- Removed dependency on [Old Library]

---

## Known Issues

> [!CAUTION]
> **Workarounds Available**

| Issue | Impact | Workaround | Fix ETA |
|-------|--------|------------|---------|
| [Issue description] | [High/Medium/Low] | [Temporary solution] | [Version X.Y] |
| [Issue description] | [High/Medium/Low] | [Temporary solution] | [Version X.Y] |

---

## Upgrade Instructions

### For Template Users (One-Time Purchase)

1. [Step 1 - e.g., "Download the new .pbix file from customer portal"]
2. [Step 2 - e.g., "Replace old file, data connections will auto-migrate"]
3. [Step 3 - e.g., "Refresh data to see new visualizations"]

**Estimated Time:** [e.g., 10 minutes]

---

### For SaaS Users (Subscription)

> [!TIP]
> **Automatic Update:** This update will be automatically applied to your account on [Date]. No action required.

**Optional Actions:**
- [ ] [e.g., "Review new dashboard templates and customize"]
- [ ] [e.g., "Update team member permissions for new features"]

---

### For Self-Hosted Installations

```bash
# Backup current installation
[backup command]

# Pull latest version
[update command]

# Run migrations
[migration command]

# Restart services
[restart command]
```

**Estimated Downtime:** [e.g., 5-10 minutes]

---

## Documentation Updates

New guides and resources:

- [Guide 1: Feature Name] - [Link to docs]
- [Guide 2: How to Use X] - [Link to docs]
- [Video Tutorial: Getting Started] - [Link to video]

Updated documentation:

- [Updated Doc 1] - [Link]
- [Updated Doc 2] - [Link]

---

## Feedback & Support

We'd love to hear your thoughts on this release!

**Ways to Reach Us:**
- WhatsApp Support: [+62 XXX XXXX XXXX]
- Email: [support@example.com]
- User Forum: [link]
- Feature Requests: [link to feedback form]

**Reporting Bugs:**
Please include:
1. Product version (this version: [X.Y.Z])
2. Steps to reproduce
3. Screenshots/videos if applicable

---

## Coming Next

Sneak peek at what we're working on for [Next Version]:

- [ ] [Feature 1] - [Brief description]
- [ ] [Feature 2] - [Brief description]
- [ ] [Feature 3] - [Brief description]

**Estimated Release:** [Sprint X, Month YYYY]

---

## Release Metrics

> [!NOTE]
> **Internal Only** - Remove this section for public release notes

**Development Stats:**
- **Issues Closed:** [#]
- **Pull Requests Merged:** [#]
- **Test Coverage:** [%]
- **Lines of Code Changed:** [+XXX / -YYY]

**Team Contributors:**
- [Name 1] - [Role]
- [Name 2] - [Role]

---

## Version Comparison

| Feature/Metric | v[X.Y.Z] (This Release) | v[X.Y-1.Z] (Previous) |
|----------------|-------------------------|------------------------|
| Total Features | [#] | [#] |
| Dashboard Templates | [#] | [#] |
| POS Integrations | [#] | [#] |
| Export Formats | [#] | [#] |
| Average Load Time | [X seconds] | [Y seconds] |

---

## Acknowledgments

**Special Thanks:**
- [User Name] for beta testing and feedback
- [Community Member] for feature suggestion: [Feature Name]
- [Partner Company] for integration support

---

## Legal & Compliance

**License:** [e.g., "Proprietary - Licensed to customers only"]
**Data Privacy:** [e.g., "GDPR compliant, no data leaves Indonesia servers"]
**Security Updates:** [e.g., "Includes patches for CVE-XXXX-YYYY"]

---

## Full Changelog

For detailed technical changelog, see:
---

**Release Manager:** [Name]
**Approved By:** [Founding Team Member]
**Build ID:** [#XXXX]

---

## Sample Release Note Examples

### Example 1: Major Feature Release

```markdown
## Power BI Template - Version 2.0.0

**Release Date:** 2026-02-01
**Release Type:** Major

## What's New

### Multi-Outlet Support

Track performance across all your locations from one dashboard.

**Benefits:**
- Compare sales across outlets in real-time
- Identify top and bottom performers instantly
- Allocate inventory based on outlet demand

**How to Use:**
1. Navigate to "Outlet Selector" dropdown
2. Choose "All Outlets" or select specific locations
3. All charts update automatically

### WhatsApp Auto-Reports

Schedule daily/weekly reports sent directly to your WhatsApp.

**Benefits:**
- Never forget to check your numbers
- Share reports with managers automatically
- Stay informed even when traveling

**How to Use:**
1. Go to Settings → Notifications
2. Enter WhatsApp number
3. Choose report frequency and metrics
```

---

### Example 2: Bug Fix Patch

```markdown
## Web Dashboard Lite - Version 1.2.3

**Release Date:** 2026-01-15
**Release Type:** Patch

## Bug Fixes

- **Fixed:** Food cost % calculation error when ingredient price = Rp 0
- **Fixed:** Export PDF now respects Indonesian date format (DD/MM/YYYY)
- **Fixed:** Offline mode sync conflict with cloud when reconnecting

## Minor Improvements

- Faster chart rendering on low-end Android devices
- Reduced app size from 45MB → 32MB
```

---

**Template Version:** 1.0
**Last Updated:** 2026-01-05

---

## Related

- **[[biz/templates/product/prd-template|PRD Template]]** - Product requirements documentation
- **[[biz/templates/engineering/github-issue-template|GitHub Issue Template]]** - Bug and feature tracking
- **[[biz/departments/hr/sops/02-leave-management|Release Management]]** - Release process and checklist
- **[[products/shared-technical/devops/deployment-process|Deployment Process]]** - Technical deployment workflow
- **[[biz/departments/growth/marketing/product-announcements|Product Announcements]]** - Marketing communication templates
