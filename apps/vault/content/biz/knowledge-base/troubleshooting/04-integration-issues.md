# Integration Issues

**Last Updated:** 2025-12-27

---

## POS Not Syncing

### Data Not Updating

**Quick Checks:**
1. Settings → Integrations → Check connection status
2. Click "Sync Now" to manually trigger
3. Check last sync time (should be <1 hour for most POS)

**Common Causes:**

**1. POS Credentials Expired**
- **Symptom:** "Authentication failed" error
- **Solution:** Disconnect and reconnect POS
- **Steps:** Settings → Integrations → Disconnect → Connect again

**2. POS API Down**
- **Symptom:** "Connection timeout" error
- **Solution:** Wait 30 minutes, try again. If persists, contact POS support.
- **Check:** Login to your POS directly to confirm it's working

**3. Rate Limit Exceeded**
- **Symptom:** "Too many requests" error
- **Solution:** Wait 1 hour, sync will auto-resume
- **Prevention:** Don't click "Sync Now" repeatedly

---

### Missing Transactions

**Why transactions might be missing:**
- Transaction happened after last sync → Wait for next sync
- Transaction voided/deleted in POS → Won't appear in PWBI
- Date filter applied → Check date range in dashboard

**Solutions:**
1. Check date range filter (expand to wider range)
2. Verify transaction exists in POS
3. Force sync: Settings → "Sync Now"
4. If still missing after 2 hours, contact support

---

### Duplicate Transactions

**Causes:**
- Multiple syncs triggered simultaneously
- POS webhook sent duplicate event

**Solution:**
1. Report to support@pwbi.id
2. We'll deduplicate (based on transaction ID)
3. Usually resolved within 24 hours

---

## Specific POS Issues

### Pawoon Integration

**Common Issues:**
- **Webhook not firing:** Check Pawoon webhook settings
- **Old transactions not syncing:** Use "Historical Sync" (Settings → Pawoon → "Sync Historical"). See [[products/shared-technical/integrations/integrations|POS Guide]].

### Moka Integration

**Common Issues:**
- **API key invalid:** Regenerate API key in Moka dashboard
- **Slow sync:** Moka polls hourly (normal delay)

### Qasir Integration

**Common Issues:**
- **Bearer token expired:** Reconnect every 90 days
- **Multiple outlets:** Connect each outlet separately

### Olsera Integration

**Common Issues:**
- **Central kitchen transactions:** Not yet supported
- **Multi-brand:** Connect each brand separately

---

## Accounting Software Integration

### Accurate Online

**Common Issues:**
- **OAuth token expired:** Refresh token every 6 months
- **Chart of accounts not syncing:** Manual mapping required (Settings → Accounting). See [[products/04-accounting-module/04-accounting-module|Accounting Setup]].

### Jurnal.id

**Common Issues:**
- **Journal entry failed:** Check account mappings
- **Slow sync:** Normal (batch process runs every 4 hours)

---

## Manual Upload Issues

### CSV Import Failing

**Common Errors:**

**1. "Invalid format"**
- **Solution:** Download template again, don't modify column headers
- **Required columns:** Date, Amount, Transaction ID

**2. "Date format error"**
- **Solution:** Use YYYY-MM-DD format (e.g., 2025-12-27)
- **Not:** DD/MM/YYYY or MM/DD/YYYY

**3. "No data found"**
- **Solution:** Check file has data after header row
- **Check:** File encoding is UTF-8

---

**Need more help?** Email support@pwbi.id with:
- POS/integration type
- Error message screenshot
- Transaction ID (if specific transaction issue)
