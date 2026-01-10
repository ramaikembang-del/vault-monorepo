# Technical FAQ

**Last Updated:** 2025-12-27

---

## Setup & Installation

**Q: How do I set up PWBI?**
A: See product-specific guides:
- [[products/01-power-bi-template/training/02-setup-guide|A1 Template Setup]]
- [[products/03-web-dashboard-lite/training/quick-start-guide|E1 Dashboard Setup]]
- [[products/04-accounting-module/04-accounting-module|R2 Accounting Setup]]

**Q: What are the system requirements?**
A:
- **Power BI Templates (A1):** Windows 10+, Power BI Desktop (free)
- **Web Dashboard (E1, R2):** Modern browser (Chrome, Firefox, Safari, Edge)
- **Mobile:** iOS 13+ or Android 8+

**Q: Do I need to install anything?**
A:
- **Templates (A1):** Yes, Power BI Desktop
- **Web products (E1, R2, C1):** No, browser-based

---

## POS Integration

**Q: How do I connect my POS?**
A:
1. Go to Settings → Integrations
2. Select your POS (Pawoon, Moka, Qasir, Olsera)
3. Click "Connect"
4. Authorize PWBI to access your POS data
5. Wait for initial sync (5-30 minutes depending on data volume)

**Q: Why isn't my POS syncing?**
A: See [[biz/knowledge-base/troubleshooting/04-integration-issues|Integration Issues]]. Common causes:
- POS credentials expired → Reconnect
- POS API down → Wait or contact POS support
- Network issue → Check internet connection

**Q: How often does data sync?**
A: Depends on POS:
- **Pawoon:** Real-time webhooks
- **Moka:** Every hour (API polling)
- **Qasir:** Every hour
- **Olsera:** Every hour

**Q: Can I manually trigger a sync?**
A: Yes, Settings → Integrations → "Sync Now" button.

---

## Data Management

**Q: How do I upload CSV data?**
A:
1. Download CSV template from Settings → Import
2. Fill in your transaction data
3. Upload CSV file
4. Verify data preview
5. Confirm import

**Q: What CSV format do you accept?**
A: Download our template. Required columns:
- Date, Time, Transaction ID, Amount, Payment Method
Optional: Item, Category, Customer

**Q: Can I edit imported data?**
A: Yes, go to Transactions → Find transaction → Edit. Changes don't affect POS.

**Q: How do I delete data?**
A: Settings → Data Management → "Delete Data". **Warning:** This is permanent!

---

## Performance

**Q: Why is the dashboard slow?**
A See [[biz/knowledge-base/troubleshooting/07-performance-issues|Performance Issues]]. Try:
- Clear browser cache
- Reduce date range filter
- Check internet speed
- Use Chrome/Edge (fastest)

**Q: Can I use PWBI offline?**
A: Templates (A1) work offline once data is loaded. Web products (E1, R2) require internet.

---

## Browser & Device

**Q: Which browsers are supported?**
A:
- Chrome, Edge, Firefox, Safari (latest 2 versions)
- Internet Explorer (not supported)

**Q: Does PWBI work on mobile?**
A: Yes!
- **Responsive web:** Works on mobile browsers
- **Mobile app:** Coming Q2 2025

**Q: Can I use PWBI on tablet?**
A: Yes, optimized for iPad and Android tablets.

---

## Advanced

**Q: Do you have an API?**
A: Yes, for C1+ customers. See [[products/shared-technical/architecture/api-gateway|API Docs]].

**Q: Can I customize reports?**
A:
- **Templates (A1):** Full customization in Power BI
- **E1/R2:** Pre-built reports, custom reports coming soon
- **C1:** Custom report builder

**Q: Can I white-label PWBI?**
A: C3 Advanced tier only. Contact sales@pwbi.id.

---

**Still stuck?**
- Check [[biz/knowledge-base/knowledge-base|Troubleshooting]]
- Email: support@pwbi.id
