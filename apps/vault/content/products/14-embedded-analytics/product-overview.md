# A3 Embedded Analytics - Complete Documentation

## Product Overview

**Product:** A3 - Embedded Analytics SDK
**Type:** White-Label B2B2C
**Target:** POS/ERP vendors who want analytics
**Pricing:** Rp 50K/user/year (wholesale to partners)
**Launch:** Q3 2025

### What is A3?

White-label analytics SDK that POS/ERP vendors embed into their products. They sell to their customers, we power the analytics backend.

**Win-Win:**
- **POS Vendors:** Add analytics without building it (+Rp 200K/user/year revenue)
- **PWBI:** Distribution channel (reach 100K+ F&B users via partners)
- **End Customers:** Get analytics with POS they already use

**"Powered by PWBI" (or white-labeled completely)**

---

## SDK Documentation

### Integration Types

**1. JavaScript SDK (Web Apps)**
```javascript
import { PWBIAnalytics } from '@pwbi/embed-sdk';

const analytics = new PWBIAnalytics({
 apiKey: 'partner_key_123',
 customerId: 'customer_xyz',
 theme: 'partner-brand' // custom colors
});

// Embed dashboard
analytics.renderDashboard('#container', {
 dashboardId: 'sales-overview',
 filters: { dateRange: 'last-30-days' }
});
```

**2. Mobile SDK (iOS/Android)**
```swift
// iOS Example
import PWBIAnalytics

let analytics = PWBIAnalytics(apiKey: "partner_key_123")
analytics.showDashboard("sales-overview", in: viewController)
```

**3. iframe Embed (No-code)**
```html
<iframe src="https://embed.pwbi.co/dashboard/sales?key=...&theme=partner"
width="100%" height="600px"></iframe>
```

### Features

**Dashboards Available:**
- Sales Overview (revenue, transactions, trends)
- Inventory Analytics (stock levels, waste, reorder alerts)
- Labor Analytics (hours, cost, productivity)
- Customer Analytics (repeat rate, LTV, segments)

**Customization:**
- White-label (remove PWBI branding)
- Custom theme (partner's colors, fonts, logo)
- Custom metrics (add partner-specific KPIs)
- Language (Indonesian, English)

### API Reference

**Authentication:**
```
POST /api/v1/auth/partner-token
Body: { apiKey, partnerSecret }
Returns: { token, expiresIn }
```

**Data Ingestion:**
```
POST /api/v1/data/ingest
Headers: { Authorization: Bearer <token> }
Body: {
 customerId: "customer_123",
 transactions: [...],
 inventory: [...],
 labor: [...]
}
```

**Embed Dashboard:**
```
GET /embed/dashboard/{dashboardId}?customer={id}&token={jwt}
```

**Full API Docs:** https://docs.pwbi.co/embed-api

---

## Partner Program

### Partner Tiers

**Bronze (Free):**
- < 100 customers
- Standard dashboards
- Email support
- 30% revenue share

**Silver (Rp 50M/year):**
- 100-1,000 customers
- Custom dashboards (2x/year)
- Priority support
- 35% revenue share

**Gold (Rp 200M/year):**
- 1,000+ customers
- Unlimited customization
- Dedicated CSM
- 40% revenue share
- Co-marketing

### Onboarding Process

**Week 1: Discovery**
- Kickoff call
- Requirements gathering (what dashboards do you need?)
- Technical architecture review

**Week 2-3: Integration**
- API credentials provisioned
- SDK integration (your developers or we assist)
- Testing in sandbox

**Week 4: Launch Prep**
- UAT (User Acceptance Testing)
- Marketing assets (co-branded materials)
- Support training

**Week 5: Go-Live**
- Production launch
- Monitor first customers
- Iterate based on feedback

### Partner Benefits

**Revenue:**
- Upsell analytics: +Rp 200K/user/year (you charge)
- Your cost: Rp 50K/user/year (you pay us)
- **Your profit: Rp 150K/user/year** (3x markup)

**Competitive Advantage:**
- "We have analytics" (most POS vendors don't)
- Retention (customers less likely to switch)
- Upsell (analytics  ->  more expensive POS tiers)

**Marketing:**
- Co-branded case studies
- Joint webinars
- Listed on PWBI partner page
- Access to our customer base (cross-sell)

---

## Pricing & Licensing

### Wholesale Pricing (To Partners)

**Per-Seat Licensing:**
- Rp 50,000/user/year (partner pays PWBI)
- No minimum commitment (pay-as-you-go)
- Tiered discounts:
 - 1-100 users: Rp 50K/user
 - 101-1,000: Rp 45K/user
 - 1,001+: Rp 40K/user

**Setup Fee:**
- Bronze: Free
- Silver/Gold: Annual tier fee

### Retail Pricing (Partner to End User)

**Recommended:**
- Rp 200-300K/user/year (partner markup 4-6x)
- Bundle with POS (POS + Analytics package)

**Example:**
- Partner POS: Rp 2M/year
- Partner POS + Analytics: Rp 2.5M/year
- Incremental revenue: Rp 500K
- Partner cost (PWBI): Rp 50K
- **Partner profit: Rp 450K** (90% gross margin)

---

## Target Partners

**Ideal Partner:**
- POS/ERP vendor serving F&B
- 500+ customers
- Lack analytics capability
- Open to technology partnerships

**Indonesian POS Vendors:**
- Moka (ideal: 10,000+ F&B customers)
- Olsera
- Pawoon
- Qasir
- Kasir Pintar

**International (expanding to Indonesia):**
- Toast
- Square
- Lightspeed

### Partner Acquisition Strategy

**Year 1:** Sign 3 partners, reach 5,000 end users
**Year 2:** Sign 10 partners, reach 25,000 users
**Year 3:** Sign 20 partners, reach 100,000 users

**Revenue:**
- Year 1: 5,000 users Ã— Rp 50K = Rp 250M
- Year 2: 25,000 Ã— Rp 50K = Rp 1.25B
- Year 3: 100,000 Ã— Rp 50K = Rp 5B

---

## Technical Architecture

**Multi-Tenant:**
- Each partner = separate tenant
- Each end customer = sub-tenant
- Data isolation (partners can't see each other's data)

**Performance:**
- Dashboard load: < 2 seconds
- API response: < 200ms
- Concurrent users: 100K+

**Scalability:**
- Kubernetes cluster (auto-scaling)
- CDN for assets (global)
- Database sharding (by partner)

---

## Success Stories (Projected)

### Moka POS + PWBI Analytics

**Scenario:**
- Moka has 10,000 F&B customers
- Integrate A3 SDK
- Upsell analytics to 30% (3,000 customers)

**Revenue:**
- Moka charges: Rp 300K/user/year = Rp 900M/year
- Moka pays PWBI: Rp 50K/user = Rp 150M/year
- **Moka profit: Rp 750M/year** (new revenue stream)

**PWBI benefit:**
- Rp 150M annual revenue (recurring)
- Distribution to 3,000 customers (would take years to acquire directly)
- Brand awareness ("Powered by PWBI")

---

## Related Documents

- [SDK Technical Documentation](https://docs.pwbi.co/embed-sdk)
- [Partner Portal](https://partners.pwbi.co)

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Complete A3 documentation |


---

**Related Documents:**
- [[products/14-embedded-analytics/14-embedded-analytics|Product Overview]] - Main product documentation
- [[../../PRODUCT_INDEX|Product Index]] - All products


