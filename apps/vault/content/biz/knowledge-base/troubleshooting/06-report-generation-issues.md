# Report Generation Issues

**Last Updated:** 2025-12-27

---

## Export Failures

### Can't Export to Excel

**Common Errors:**

**"Export failed - file too large"**
- **Cause:** Trying to export >100K rows
- **Solution:** Reduce date range or add filters
- **Max rows:** 100,000 per export

**"Download blocked"**
- **Cause:** Browser blocked popup/download
- **Solution:** Click "Allow" in address bar, try export again

**"File corrupted"**
- **Cause:** Export interrupted
- **Solution:** Stable internet connection, try again

---

### Can't Export to PDF

**"PDF rendering failed"**
- **Cause:** Complex charts timeout
- **Solution:** Simplify report (fewer charts), try again

**PDF Layout Broken:**
- **Cause:** Page size mismatch
- **Solution:** Settings → Reports → PDF Page Size → "A4" or "Letter"

---

### Export Button Missing/Grayed Out

**Causes:**
- **Free tier:** Exports limited (5/month)
- **No data:** Report has zero rows (nothing to export)
- **Still generating:** Wait for report to finish loading

**Solution:**
- Upgrade to paid tier for unlimited exports
- Check date range has data
- Wait for "Loading..." to finish

---

## Sch

eduled Reports

### Scheduled Report Not Sent

**Check:**
1. Settings → Reports → Scheduled Reports → Verify enabled
2. Check spam folder (from: reports@pwbi.id)
3. Verify email address correct

**Common Issues:**

**"Schedule inactive"**
- **Cause:** Payment overdue
- **Solution:** Update payment method

**"Report generation failed"**
- **Cause:** Data query timeout (report too complex)
- **Solution:** Simplify report or split into multiple reports

**Not arriving on time:**
- **Normal:** Scheduled reports sent within 1 hour of scheduled time
- **Timezone:** Check timezone setting (Settings → Account)

---

### Want to Change Schedule

**Steps:**
1. Reports → Find report → "Edit Schedule"
2. Change frequency/time/recipients
3. Save

**Frequency Options:**
- Daily (sent every morning)
- Weekly (choose day)
- Monthly (choose date, e.g., 1st of month)

---

## Custom Reports

### Custom Report Builder Not Loading

**Solutions:**
1. **Clear cache:** Ctrl+F5
2. **Use Chrome:** Report builder works best on Chrome
3. **Disable ad blocker:** Can interfere with drag-drop

---

### Can't Save Custom Report

**"Report name already exists"**
- **Solution:** Choose a different name or delete old report

**"Invalid configuration"**
- **Cause:** Missing required field (e.g., no metrics selected)
- **Solution:** Add at least 1 metric and 1 dimension

---

## Email Reports

### Report Email Has Broken Charts

**Causes:**
- **Email client blocks images:** Gmail/Outlook sometimes blocks external images
- **Dark mode:** Charts optimized for light mode

**Solutions:**
1. **Allow images:** Click "Display images" in email
2. **Download PDF attachment:** Charts always work in PDF
3. **Use web link:** Click "View in Dashboard" in email

---

### Want to Add/Remove Recipients

**Steps:**
1. Settings → Reports → Scheduled Reports
2. Find report → Edit
3. Recipients field → Add/remove emails (comma-separated)
4. Save

**Limit:** 10 recipients per report

---

**Still having issues?** Email support@pwbi.id with:
- Report name
- Export format (Excel/PDF)
- Error message screenshot
- Date range being exported
- Review [[biz/knowledge-base/best-practices/03-reporting|Reporting Best Practices]].
