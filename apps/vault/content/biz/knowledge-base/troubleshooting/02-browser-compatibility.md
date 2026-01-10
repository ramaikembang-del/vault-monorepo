# Browser Compatibility Issues

**Last Updated:** 2025-12-27

---

## Supported Browsers

** Fully Supported:**
- Chrome 110+ (recommended)
- Edge 110+
- Firefox 110+
- Safari 16+

**Limited Support:**
- Chrome/Edge/Firefox 100-109 (older versions, may have bugs)
- Safari 14-15 (some features may not work)

** Not Supported:**
- Internet Explorer (all versions - discontinued by Microsoft)
- Opera Mini
- UC Browser

---

## Browser-Specific Issues

### Chrome/Edge

**Charts Not Rendering:**
- **Cause:** Hardware acceleration bug
- **Solution:** chrome://settings → Advanced → System → Disable "Use hardware acceleration"

**Cookies Not Saving (Stay logged out):**
- **Solution:** chrome://settings → Privacy → Cookies → Allow "pwbi.id"

---

### Firefox

**Dashboard Slow:**
- **Cause:** Enhanced tracking protection blocking analytics
- **Solution:** Click shield icon → Turn off protection for pwbi.id

**File Upload Failing:**
- **Solution:** about:config → security.fileuri.strict_origin_policy → false

---

### Safari

**Can't Login (Cookies Blocked):**
- **Cause:** Safari blocks third-party cookies by default
- **Solution:** Safari → Preferences → Privacy → Uncheck "Prevent cross-site tracking"

**Charts Missing:**
- **Cause:** Safari private browsing mode
- **Solution:** Use normal (non-private) window

---

## General Browser Issues

### "This browser is not supported"

**Solutions:**
1. **Update browser:** Help → About
2. **Try different browser:** Download Chrome
3. **Check user agent:** Some extensions modify this

---

### Browser Extensions Causing Issues

**Common Culprits:**
- Ad blockers (uBlock, AdBlock)
- Privacy extensions (Privacy Badger)
- Script blockers (NoScript)

**Solutions:**
1. **Whitelist pwbi.id** in extension settings
2. **Disable temporarily** to test
3. **Use incognito mode** (extensions disabled by default)

---

### JavaScript Disabled

**Symptom:** Dashboard blank or shows "Enable JavaScript" message

**Solution:**
- **Chrome:** chrome://settings → Privacy → Site Settings → JavaScript → Allowed
- **Firefox:** about:config → javascript.enabled → true
- **Safari:** Preferences → Security → Enable JavaScript

---

### Cache Issues

**Symptoms:**
- Old version of page loading
- Changes not appearing
- Broken layout

**Solution:**
**Hard Refresh:**
- **Windows:** Ctrl + F5
- **Mac:** Cmd + Shift + R
- **Or:** Ctrl/Cmd + Shift + Delete → Clear cache

---

**Still having browser issues?** Email support@pwbi.id with:
- Browser name + version (e.g., "Chrome 120")
- Operating system (Windows/Mac/Linux)
- Screenshot of problem
- Any error messages in console (F12 → Console tab)
- See also [[biz/knowledge-base/faq/04-technical-faq|Technical FAQ]]
