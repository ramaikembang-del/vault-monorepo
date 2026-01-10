# POS Integration Best Practices

**Last Updated:** 2025-12-27

---

## Initial Setup

**Before Connecting POS:**
1. **Clean up POS data** - Fix duplicate items, correct categories
2. **Standardize naming** - "Kopi Hitam" not "kopi hitam" or "Kopi hitam"
3. **Set up item categories** - Group logically (Beverages > Coffee > Hot Coffee)
4. **Test in POS first** - Make sure reporting works in POS before syncing

**Why:** Garbage in = Garbage out. Clean POS data = accurate PWBI analytics.

---

## Connection Best Practices

**Do's:**
- Use official POS API (don't use workarounds)
- Keep POS credentials secure (don't share)
- Test with historical data first (sync last month, verify accuracy)
- Monitor first sync closely (can take 30-60 min for large datasets)

**Don'ts:**
- Don't click "Sync Now" repeatedly (causes duplicates)
- Don't disconnect/reconnect frequently (unless troubleshooting)
- Don't modify POS data during initial sync

---

## Daily Operations

**Every Morning:**
1. **Check last sync time** - Should be <24 hours ago
2. **Spot-check yesterday's data** - Compare 1-2 transactions in POS vs PWBI
3. **Review dashboard** - Any anomalies (huge spike/drop)?

**Red Flags:**
- Last sync >24 hours → Reconnect POS
- Transaction count mismatch → Contact support
- Sales total way off → Check date filters

---

## Data Accuracy Tips

**Ensure Accurate Analytics:**

**1. Consistent Item Naming**
- Bad: "Espresso", "espresso", "Espreso"
- Good: "Espresso" (one spelling, consistent capitalization)

**2. Proper Categorization**
- Use POS categories, PWBI inherits them
- Group logically: Beverages > Coffee > Espresso

**3. Handle Modifiers Correctly**
- Modifiers (extra shot, oat milk) should be separate line items
- PWBI can then analyze modifier popularity

**4. Voided/Refunded Transactions**
- Mark clearly in POS (don't delete)
- PWBI can filter them out

---

## Multi-Outlet Best Practices

**If You Have 2+ Locations:**
1. **Connect each outlet separately** - Each gets own POS connection
2. **Use consistent naming** - "Outlet Senayan" not "Senayan" and "Cabang Senayan"
3. **Synchronize item master** - Same items should have same names across outlets
4. **Compare outlet performance** - PWBI dashboard shows side-by-side comparison

---

## Handling POS Changes

**When Adding New Items:**
- Add in POS first
- PWBI syncs automatically on next sync (within 1 hour)
- No action needed in PWBI

**When Changing Prices:**
- Update in POS
- PWBI captures new price on next transaction
- Historical transactions keep old price (correct!)

**When Removing Items:**
- Disable in POS (don't delete!)
- Historical data preserved in PWBI

---

## Troubleshooting Workflow

**If Data Doesn't Match:**

**Step 1: Check Date Range**
- POS: 1 Jan - 31 Jan
- PWBI: Same range?

**Step 2: Check Filters**
- Payment method filter applied?
- Category filter?
- Outlet filter (if multi-location)?

**Step 3: Check Transaction Status**
- Include/exclude voided transactions?
- Include/exclude refunds?

**Step 4: Manual Reconciliation**
- Export CSV from both POS and PWBI
- Compare transaction counts, totals
- Find specific discrepancy

**Still off?** Email support@pwbi.id with both reports.

---

## POS-Specific Tips

**Pawoon:**
- Real-time webhooks = fastest sync
- Historical sync: Use "Sync Historical" button for old data
- Multiple outlets: Connect each separately

**Moka:**
- Hourly polling = 1-hour delay normal
- API key expires annually → Reconnect
- CSV export as backup if API down

**Qasir:**
- Bearer token expires every 90 days → Reconnect quarterly
- Multi-brand: Each brand needs separate connection

**Olsera:**
- Best for multi-outlet
- Central kitchen not yet supported
- Data sync takes longer (larger datasets)

---

## Data Retention

**How Long Does PWBI Keep Data?**
- Active subscription: Forever (no limits!)
- Canceled subscription: 30 days (can reactivate)
- After 90 days: Permanently deleted

**Recommendation:** Export data annually as backup (Settings → Export → "All Data").

---

## Advanced: API Access

**For C1+ Customers:**
- Direct API access to your PWBI data
- Build custom integrations
- Real-time data push/pull

**[[products/shared-technical/architecture/api-gateway|API Documentation]]**

---

**Questions?** Email support@pwbi.id

**Last Updated:** 2025-12-27
