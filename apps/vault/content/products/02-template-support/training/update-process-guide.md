# R1 Template Support - Update Process Guide

**How Updates Work**

---

## Monthly Update Cycle

**Schedule:** New version released first Monday of each month

**What's Updated:**
- New features (based on customer requests)
- Bug fixes
- Performance improvements
- New report pages
- Updated DAX calculations

---

## Getting Notified

**Email:** You'll receive update notification email
**Portal:** Check customer portal for release notes
**In-App:** Power BI template shows update banner

---

## Applying Updates

### Step 1: Save Current Work

**IMPORTANT:** Always backup before updating!

1. File → Save As → "A1_Backup_[Date].pbix"
2. Store in safe location
3. You can always revert if issues

### Step 2: Download New Template

1. Check email for download link
2. OR visit customer portal → Downloads
3. Download latest version
4. Note version number (e.g., v2.4)

### Step 3: Apply Update

**Method A: Fresh Start (Recommended)**

1. Open NEW template file
2. Home → Get Data
3. Reconnect to your data source
4. Your data loads into new template
5. Save with new name

 **Pros:** Clean, no compatibility issues
**Cons:** Lose any custom changes you made

**Method B: Copy-Paste Data Model**

1. Open OLD template
2. Home → Transform Data → Advanced Editor
3. Copy M code
4. Open NEW template
5. Paste M code
6. Refresh

 **Pros:** Keeps custom changes
**Cons:** Can cause conflicts

**We recommend Method A for most users.**

### Step 4: Verify Everything Works

1. Click Refresh (Home → Refresh)
2. Check all pages load correctly
3. Verify numbers match your POS
4. Test filters and interactions

### Step 5: Replace Old File

Once confirmed working:
1. Delete (or archive) old template
2. Use new version going forward

---

## Release Notes

**Where to find:**
- Customer portal → Updates tab
- Email announcement
- In-template changelog (Help → What's New)

**What's included:**
- New features list
- Bug fixes
- Breaking changes (rare)
- Migration notes (if needed)

---

## Troubleshooting Updates

**"New template won't open"**
- Check Power BI Desktop is updated
- Redownload template (may be corrupt)
- Email support

**"Data not loading after update"**
- Check data source credentials
- Reconnect POS integration
- Verify file paths (for CSV)

**"Numbers changed after update"**
- Review release notes for calculation changes
- Compare old vs new side-by-side
- Email support if unexpected

**"I prefer the old version"**
- You can keep using old version
- But you won't get new features/fixes
- We support only latest version

---

## Skipping Updates

**Can I skip an update?**
- Yes, but not recommended
- Bug fixes accumulate
- Future updates may require latest version

**Best practice:** Update monthly

---

## Beta Program

**Want early access to new features?**

Join beta program:
- Get updates 1 week early
- Test and provide feedback
- Help shape product

Email: beta@pwbi.id

---

## Version History

**Keep track:**
- v2.0: Initial release
- v2.1: Added cash flow page
- v2.2: POS integrations
- v2.3: Multi-outlet support
- v2.4: Menu engineering matrix (current)

Full history in customer portal

---

## Questions About Updates?

**Email:** support@pwbi.id
**Office Hours:** First Tuesday, 2 PM WIB

---

**Last Updated:** 2025-12-27
**Current Template Version:** v2.4

---

## Related

- **[[products/02-template-support/02-template-support|Template Support Product]]** - Product overview
- **[[products/02-template-support/training/service-guide|Service Guide]]** - What's included in R1 support
- **[[products/02-template-support/operations/support-delivery-sop|Support Delivery SOP]]** - Internal update creation process
- **[[products/01-power-bi-template/01-power-bi-template|Power BI Template Product]]** - A1 template product
- **[[products/02-template-support/marketing/customer-faq|Customer FAQ]]** - Common update questions
