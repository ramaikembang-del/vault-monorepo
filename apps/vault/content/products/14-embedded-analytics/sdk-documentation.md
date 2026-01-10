# A3 Embedded Analytics - Complete Documentation Suite

## SDK Documentation

### JavaScript SDK

**Installation:**
```bash
npm install @pwbi/embed-sdk
# or
yarn add @pwbi/emb ed-sdk
```

**Basic Usage:**
```javascript
import { PWBIEmbed } from '@pwbi/embed-sdk';

// Initialize
const analytics = new PWBIEmbed({
 apiKey: 'your_partner_api_key_here',
 customerId: 'end_customer_id',
 environment: 'production', // or 'sandbox'
 theme: {
 primaryColor: '#FF5733',
 secondaryColor: '#333333',
 fontFamily: 'Inter, sans-serif',
 logo: 'https://yourcompany.com/logo.png'
 }
});

// Embed dashboard
analytics.renderDashboard('#dashboard-container', {
 dashboardId: 'sales-overview',
 filters: {
 dateRange: 'last-30-days',
 location: 'all'
 },
 height: '600px',
 onLoad: () => console.log('Dashboard loaded'),
 onError: (error) => console.error('Error:', error)
});

// Embed specific chart
analytics.renderWidget('#widget-container', {
 widgetType: 'revenue-trend',
 timeframe: 'month'
});
```

**Advanced Features:**
```javascript
// Event listeners
analytics.on('filterChange', (filters) => {
 console.log('User changed filters:', filters);
});

// Programmatic filtering
analytics.updateFilters({
 dateRange: 'last-7-days',
 location: 'store-123'
});

// Export data
analytics.exportData('sales-overview', 'excel').then((blob) => {
 // Download file
});

// Refresh data
analytics.refresh();
```

### Mobile SDK (iOS)

**Installation (CocoaPods):**
```ruby
pod 'PWBIAnalytics', '~> 1.0'
```

**Swift Usage:**
```swift
import PWBIAnalytics

class DashboardViewController: UIViewController {
 let analytics = PWBIAnalytics(
 apiKey: "partner_key",
 customerId: "customer_123"
 )

 override func viewDidLoad() {
 super.viewDidLoad()

 // Show dashboard
 analytics.presentDashboard(
 "sales-overview",
 theme: PWBITheme(
 primaryColor: UIColor(hex: "#FF5733"),
 logo: UIImage(named: "logo")
 ),
 in: self
 )
 }
}
```

### Mobile SDK (Android)

**Gradle:**
```gradle
implementation 'co.pwbi:embed-sdk:1.0.0'
```

**Kotlin Usage:**
```kotlin
import co.pwbi.analytics.PWBIEmbed

class DashboardActivity : AppCompatActivity() {
 override fun onCreate(savedInstanceState: Bundle?) {
 super.onCreate(savedInstanceState)

 val analytics = PWBIEmbed(
 apiKey = "partner_key",
 customerId = "customer_123"
 )

 analytics.showDashboard(
 dashboardId = "sales-overview",
 theme = PWBITheme(
 primaryColor = "#FF5733"
 )
 )
 }
}
```

### iframe Embed (No-Code)

**HTML:**
```html
<iframe
 src="https://embed.pwbi.co/dashboard/sales-overview?
 key=YOUR_API_KEY&
 customer=CUSTOMER_ID&
 theme=YOUR_THEME_NAME"
 width="100%"
 height="600px"
 frameborder="0">
</iframe>
```

### Available Dashboards

**Sales Overview:**
- Revenue trends (daily/weekly/monthly)
- Transaction count
- Average check size
- Top-selling items

**Inventory Analytics:**
- Stock levels by item
- Waste tracking
- Reorder alerts
- Supplier performance

**Labor Analytics:**
- Hours worked vs scheduled
- Labor cost % of revenue
- Productivity metrics
- Overtime tracking

**Customer Analytics:**
- Repeat rate
- Customer lifetime value (LTV)
- Segmentation (VIP, regular, at-risk)
- Traffic patterns

### API Reference

**Authentication:**
```
POST /api/v1/partners/auth
Body: { apiKey, secret }
Returns: { accessToken, expiresIn: 3600 }
```

**Data Ingestion:**
```
POST /api/v1/data/ingest
Headers: { Authorization: "Bearer <token>" }
Body: {
 customerId: "customer_123",
 dataType: "transactions",
 data: [
 {
 transactionId: "tx_001",
 timestamp: "2025-12-27T10:30:00Z",
 revenue: 150000,
 items: [...]
 }
 ]
}
```

**Get Embed URL:**
```
GET /api/v1/embed/url?
 dashboard=sales-overview&
 customer=customer_123&
 theme=partner_theme
Returns: { embedUrl, expiresAt }
```

**Full API Docs:** https://docs.pwbi.co/embed-api

---

## Partner Program

### Partner Tiers

**Bronze (Free):**
- For partners with < 100 end customers
- Standard dashboards (4 options)
- Email support (48-hour response)
- Revenue share: 30% (you keep 70%)
- Self-service onboarding

**Silver (Rp 50M/year program fee):**
- For partners with 100-1,000 customers
- Custom dashboards (2 custom per year)
- Priority support (24-hour response)
- Revenue share: 35%
- Dedicated onboarding (we assist)
- Quarterly business reviews

**Gold (Rp 200M/year program fee):**
- For partners with 1,000+ customers
- Unlimited custom dashboards
- 24/7 support + dedicated CSM
- Revenue share: 40%
- White-label (remove PWBI branding entirely)
- Co-marketing (joint case studies, webinars)
- Product roadmap input

### Onboarding Process

**Week 1: Discovery & Planning**
- Kickoff call (2 hours)
- Requirements: Which dashboards? White-label?
- Technical review: Your tech stack, integration points

**Week 2-3: Integration**
- API credentials provisioned (sandbox)
- SDK integration (your team or we assist)
- Data mapping (your data → PWBI format)
- Testing (5-10 test customers)

**Week 4: Pre-Launch**
- UAT (User Acceptance Testing)
- Performance testing (load, latency)
- Marketing materials (screenshots, demo videos)
- Support training (for your CS team)

**Week 5: Launch**
- Production credentials
- Go-live with first customers (5-10)
- Monitor (daily check-ins first week)
- Iterate based on feedback

**Ongoing:**
- Monthly sync calls
- Quarterly business reviews (Silver+)
- Feature requests prioritized

### Partner Benefits

**Revenue Opportunity:**
- You charge: Rp 200-300K/user/year
- You pay us: Rp 50K/user/year
- **Your profit: Rp 150-250K/user** (75-83% gross margin)

**Example:** 1,000 customers × Rp 200K = Rp 200M/year revenue, cost Rp 50M, **profit Rp 150M/year**

**Competitive Advantage:**
- "We have analytics" (differentiation)
- Retention (customers less likely to churn)
- Upsell (analytics → premium POS tier)

**Marketing Support:**
- Co-branded materials (logos, banners)
- Case studies (joint customer success stories)
- Webinars (we present with you)
- Listed on PWBI partner directory

### Partner Obligations

**Must:**
- Market analytics to your customers (not just available, actively sell)
- Provide tier-1 support (basic questions, escalate complex to PWBI)
- Share usage data (for product improvement)
- Minimum commitment: 1 year

**Must Not:**
- Resell to competitors (exclusivity in your vertical)
- Reverse-engineer SDK
- Violate end-user privacy

---

## Pricing & Licensing

### Wholesale Pricing (Partners pay PWBI)

**Per-Seat License:**
- **Rp 50,000/user/year** (base price)

**Volume Discounts:**
- 1-100 users: Rp 50K/user
- 101-1,000 users: Rp 45K/user
- 1,001-5,000 users: Rp 40K/user
- 5,001+ users: Rp 35K/user (enterprise negotiation)

**Billing:**
- Monthly invoicing (pay for active users)
- Annual prepayment option (10% discount)

**Setup Fees:**
- Bronze: Free
- Silver: Rp 50M/year (program fee)
- Gold: Rp 200M/year (program fee)

### Retail Pricing (Partners charge end users)

**Recommended:**
- **Rp 200-300K/user/year** (partners markup 4-6x)

**Bundling:**
- Option 1: POS only (Rp 2M/year)
- Option 2: POS + Analytics (Rp 2.5M/year)
- Incremental value: Rp 500K
- Partner cost: Rp 50K
- **Partner profit: Rp 450K** (90% margin)

### Example Economics

**Scenario: Indonesian POS vendor with 5,000 F&B customers**

**Assumptions:**
- Upsell analytics to 30% (1,500 customers)
- Charge: Rp 250K/user/year

**Revenue:**
- 1,500 users × Rp 250K = **Rp 375M/year**

**Cost:**
- 1,500 users × Rp 40K (volume discount) = Rp 60M/year
- Gold tier program fee: Rp 200M/year
- **Total cost: Rp 260M**

**Profit:** Rp 375M - Rp 260M = **Rp 115M/year** (new revenue stream)

---

## Target Partners

### Ideal Partner Profile

**POS Vendors:**
- Serve F&B businesses
- 500+ existing customers (critical mass)
- Lack native analytics
- Open to technology partnerships

**Indonesian Vendors:**
- **Moka:** 15,000+ F&B customers (top target)
- Olsera: 5,000+
- Pawoon: 3,000+
- Qasir: 2,000+
- Kasir Pintar: 1,000+

**International (entering Indonesia):**
- Toast
- Square
- Lightspeed

### Partner Acquisition

**Year 1:** 3 partners, 5,000 end users
**Year 2:** 10 partners, 25,000 users
**Year 3:** 20 partners, 100,000 users

**Strategy:**
- Direct outreach (CEO to CEO)
- Industry events (F&B tech conferences)
- Case study (sign 1 major partner, publish success story)

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 2.0 | Comprehensive A3 documentation |

---

## Related

- **[[products/14-embedded-analytics/14-embedded-analytics|Embedded Analytics Product]]** - A3 Embedded Analytics product overview
- **[[products/14-embedded-analytics/product-strategy/product-strategy|Product Strategy]]** - B2B2C strategy and market sizing
- **[[products/14-embedded-analytics/partner-program|Partner Program]]** - Partner onboarding and tiers
- **[[products/14-embedded-analytics/pricing-licensing|Pricing & Licensing]]** - Wholesale pricing model
- **[[products/03-web-dashboard-lite/technical/api-reference|Embed API Reference]]** - Full API technical reference
