# Accounting Software Integration Guide
**Automatic P&L Data Import**

**Owner:** Engineering + Partnerships  
**Status:** PLANNED - Year 2

---

## Purpose

**Problem:** Manual P&L entry is tedious (customers don't want to type expenses)

**Solution:** Direct API integration with accounting software (Accurate, Jurnal, Zahir)

**Benefit:**
- One-click import (vs 30-min manual entry)
- Real-time sync (always up-to-date)
- Accuracy (no typos)

---

## Integration Architecture

### Data Flow

```
Accounting Software (Accurate)
  ↓ API Call (OAuth)
Clario Backend (Node.js)
  ↓ Process & Store
Clario Database (PostgreSQL)
  ↓ Render
Clario Dashboard (Frontend)
```

---

## Supported Platforms

### Phase 1 (Year 2)

**Accurate (Priority #1)**
- Market leader in Indonesia
- 100K+ SME users
- API available (OAuth 2.0)

**Jurnal (Priority #2)**
- Cloud-based, growing fast
- Good API documentation
- F&B-focused

---

### Phase 2 (Year 3)

**Zahir**
- Traditional desktop software
- Limited API (may need workaround)

**Xero / QuickBooks**
- International standards
- For enterprise customers

---

## Integration Scope

### Data to Import

**From Accounting Software:**
- Revenue (monthly totals)
- COGS (Cost of Goods Sold)
- Operating Expenses (salaries, rent, utilities)
- P&L statement (automated)

**NOT Imported:**
- Detailed transactions (too granular)
- Balance sheet (not needed for dashboard)
- Tax returns (sensitive)

---

## Technical Implementation

### Step 1: OAuth Setup

**Customer Authorizes:**
1. Click "Connect Accurate" in Clario app
2. Redirected to Accurate login
3. Grant permission ("Allow Clario to read financial data")
4. Redirected back to Clario with access token

**Security:** OAuth token stored encrypted, expires after 90 days

---

### Step 2: Data Sync

**Frequency:** Nightly batch sync (3am WIB)

**Process:**
1. Fetch last 30 days of transactions via API
2. Transform to Clario format (map their fields to ours)
3. Store in PostgreSQL
4. Recalculate dashboards

**Error Handling:**
- Retry 3x if API fails
- Email customer if sync fails >3 days
- Fallback to manual entry

---

### Step 3: Dashboard Display

**UI Changes:**
- "Synced with Accurate" badge (vs "Manual Entry")
- Last sync time ("Updated 2 hours ago")
- Disconnect button (revoke access)

---

## Partnership with Accounting Vendors

**Why Partner?**
- Co-marketing ("Works seamlessly with Accurate")
- Priority support (API troubleshooting)
- Featured placement (in their app marketplace)

**Give to Them:**
- Logo on our site ("Powered by Accurate")
- Referral fees (if we upsell accounting software)
- Case studies (mutual customers' success)

**Get from Them:**
- API access (priority support)
- Co-marketing (email blast to their SME users)
- Marketplace listing (app directory visibility)

---

## Customer Value Propositions

**For Customers Already Using Accurate:**
"Connect your accounting software in 1-click - no more manual data entry"

**For Customers NOT Using Accounting Software:**
"Get Accurate + Clario bundle (20% discount) - financials + analytics in one"

---

## Pricing Model

**Free:** Integration included in all SaaS tiers (Pro+)

**Rationale:**
- Competitive advantage (not many F&B tools have this)
- Increases retention (switching cost = lose integration)

**Alternative (if needed):**
- Charge +Rp 100K/month for integration (premium feature)

---

## Rollout Plan

### Phase 1: Beta (Month 1-2)
- 10 beta customers (must use Accurate)
- Test integration, gather feedback
- Fix bugs

### Phase 2: Public Launch (Month 3)
- Announce to all SaaS Pro+ customers
- Co-market with Accurate
- Monitor adoption (target: 30% of Pro+ customers connect)

### Phase 3: Expansion (Month 6+)
- Add Jurnal integration
- Add Zahir (if demand exists)

---

## Success Metrics

**Adoption:**
- % of customers who connect accounting software
- # of active syncs per month

**Impact:**
- Time saved (vs manual entry): Target 30 min/month per customer
- User satisfaction (NPS +2 points)
- Retention (connected customers churn 50% less)

**Year 2 Targets:**
- 30% of Pro+ customers connected
- 0 sync failures (99.9% reliability)

---

**Status:** PLANNED  
**Priority:** HIGH (Year 2 feature)  
**Dependencies:** SaaS platform launch (Year 1)
