# Performance Issues

**Last Updated:** 2025-12-27

---

## Slow Dashboard Loading

### Dashboard Takes Forever to Load

**Quick Fixes (Try These First):**
1. **Clear browser cache:** Ctrl+Shift+Del → Clear cached images/files
2. **Reduce date range:** Try last 7 days instead of all-time
3. **Close other tabs:** Each tab uses memory
4. **Try Chrome/Edge:** Fastest browsers for PWBI

**Advanced Solutions:**

**1. Too Much Data**
- **Problem:** Loading 2+ years of transactions
- **Solution:** Use date filters (last 30/90 days)
- **Archive old data:** Settings → Data Management → Archive (keep last 12 months active)

**2. Slow Internet**
- **Test:** Visit fast.com (should be >5 Mbps)
- **Solution:** Use mobile hotspot or switch WiFi network

**3. Old Browser**
- **Check version:** Help → About (should be released <6 months ago)
- **Update:** Download latest Chrome/Edge

---

### Reports Taking Long to Generate

**Normal Times:**
- Simple report (P&L, sales summary): 5-15 seconds
- Complex report (item-level analysis): 30-60 seconds
- Export to Excel/PDF: 10-30 seconds

**If Longer:**
1. Reduce date range
2. Remove unnecessary filters/columns
3. Schedule report (runs overnight): Reports → Schedule

---

### Page Freezes/Crashes

**Symptoms:**
- Browser says "Page Unresponsive"
- Dashboard stops updating

**Solutions:**
1. **Force refresh:** Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Close and reopen browser**
3. **Check RAM:** Close other programs if <2GB free
4. **Try incognito mode:** Rules out browser extensions

---

## Mobile Performance

### App Slow on Mobile

**Solutions:**
1. **Clear app cache:** Settings → Storage → Clear Cache
2. **Update app:** Check Play Store/App Store for updates
3. **Restart phone**
4. **Check storage:** Need >1GB free space

**Workaround:** Use mobile browser instead of app (browser.pwbi.id)

---

## Database/Backend Issues

### "Error 503: Service Temporarily Unavailable"

**Meaning:** Our servers are having issues (rare)

**Solutions:**
1. Wait 5-10 minutes
2. Check status page: status.pwbi.id (coming soon)
3. If persists >30 min, email support@pwbi.id

---

### "Error 504: Gateway Timeout"

**Meaning:** Request took too long (>30 seconds)

**Solutions:**
1. Reduce date range in query
2. Simplify filters
3. Try again in a few minutes

---

## Power BI Template Performance

### Power BI Desktop Slow

**Solutions:**
1. **Reduce data model:** Import last 12 months only
2. **Close other Power BI files**
3. **Increase RAM:** Power BI needs 8GB+ RAM
4. **Use DirectQuery sparingly:** Import mode faster

---

**Still slow?** Email support@pwbi.id with:
- Browser/device info
- Screenshot of slow page
- Date range being used
- Internet speed (fast.com result)
- See [[biz/knowledge-base/faq/04-technical-faq|Technical FAQ]] for system specs.
