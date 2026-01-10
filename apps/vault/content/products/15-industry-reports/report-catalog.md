# D1 Industry Reports - Complete Documentation Suite

## Report Catalog

### Monthly Reports (Published 15th of each month)

**1. Indonesia F&B Benchmark Report**

**Metrics Covered:**
- Revenue trends (growth rates by segment: café, restaurant, QSR, bakery)
- Cost structure benchmarks:
 - COGS: 28-35% of revenue (varies by cuisine)
 - Labor: 25-30%
 - Rent: 10-15%
 - Net margin: 8-15%
- Traffic patterns: Foot traffic by hour/day
- Average check size: Rp 75K (cafés), Rp150K (restaurants)

**Segments:**
- By cuisine: Western, Asian, Indonesian, Fusion
- By location: Jakarta CBD, suburbs, Surabaya, Bali, etc.
- By size: SMB (1-3), Mid (4-10), Enterprise (11+)

**2. Menu Trends & Pricing**

**What's Trending:**
- Top 20 menu items (month-over-month growth)
- Emerging ingredients
- Seasonal patterns

**Pricing Intelligence:**
- Average price per category (coffee drinks: Rp 25-45K)
- Price elasticity (10% price increase → 5% volume decrease)
- Recommended pricing ranges

**Menu Mix:**
- Optimal menu size (research: 30-50 items ideal)
- Category distribution (40% drinks, 35% food, 15% desserts, 10% others)

**3. Labor Market Report**

**Wages by Role & City:**
- Server: Rp 3-4.5M/month (Jakarta), Rp 2.5-3.5M (Surabaya)
- Cook: Rp 4-6M/month
- Manager: Rp 8-15M/month
- Barista: Rp 3.5-5M/month

**Turnover:**
- Average: 30-40% annual
- Top tier (best practices): 15-20%
- High turnover locations: 50%+

**Hiring Trends:**
- Time to fill roles: 21 days average
- Most in-demand: Experienced baristas, sous chefs

**4. Supplier Pricing Index**

**Commodity Prices (monthly tracking):**
- Coffee beans (Arabica): Rp 110-130K/kg
- Flour: Rp 8-10K/kg
- Sugar: Rp 12-15K/kg
- Chicken: Rp 35-45K/kg

**Supplier Performance:**
- On-time delivery: 85% average
- Quality scores: 4.2/5 average
- Regional price differences (Jakarta vs Surabaya: 5-10% delta)

**5. Consumer Behavior Report**

**Channel Mix:**
- Dine-in: 60%
- Takeout: 25%
- Delivery: 15% (growing)

**Peak Demand:**
- Breakfast: 7-9 AM (20% of daily sales)
- Lunch: 12-2 PM (35%)
- Dinner: 6-8 PM (30%)
- Off-peak: 15%

**Weather Impact:**
- Rain: -15% foot traffic, +25% delivery
- Sunny weekends: +30% café traffic

---

## Data Methodology

### Data Collection

**Sources:**
- 10,000+ PWBI customer locations
- Represents Rp 50T+ annual GMV
- 100M+ transactions analyzed monthly

**Coverage:**
- Jakarta: 60% of sample
- Surabaya: 15%
- Bandung: 10%
- Bali: 10%
- Other: 5%

**Sample Bias:**
- PWBI customers skew tech-savvy
- Under-represents street food, traditional warungs
- Over-represents modern cafés/restaurants

**Disclosed Limitations:**
- Not comprehensive (10K of 250K F&B in Indonesia)
- Point-in-time (monthly snapshots)
- Aggregated (can't see individual businesses)

### Anonymization Process

**Step 1: Strip Identifying Info**
- Remove business names
- Remove exact addresses (keep city/district)
- Remove owner names

**Step 2: Aggregate**
- Minimum 10 locations per data point
- Example: "Premium cafés in South Jakarta" (not "Kopi Kenangan Senopati")

**Step 3: Add Statistical Noise**
- Differential privacy techniques
- Add random ±5% noise to metrics
- Prevents reverse-engineering

**Step 4: Legal Review**
- Privacy lawyer approval
- Ethics board review
- Customer consent verified

### Quality Assurance

**Outlier Detection:**
- Remove anomalies (if café reports Rp 1B revenue/day → outlier, exclude)
- Statistical: Remove > 3 standard deviations

**Cross-Validation:**
- Does it match industry knowledge? (ask experts)
- Compare to public data (BPS statistics, etc.)

**Update Frequency:**
- Monthly for most reports
- Weekly for commodity prices (supplier index)

---

## Pricing & Subscription

### Subscription Tiers

**Standard: Rp 50M/year**
- All 5 monthly reports (emailed 15th each month)
- 1 quarterly special report (your choice)
- PDF format
- 5 named users (can forward internally)

**Premium: Rp 100M/year**
- Everything in Standard
- All quarterly reports (4x/year)
- Custom dashboard (view online, not just PDF)
- Unlimited users
- API access (beta, programmatic access)
- Priority support (< 4 hour email response)

**Enterprise: Custom Pricing (Rp 200M+/year)**
- Everything in Premium
- 2 custom reports/year (bespoke analysis)
- Dedicated analyst (quarterly calls)
- Raw data access (anonymized CSVs for your analysis)
- White-label option (rebrand reports for your clients)

### Add-Ons

**Custom Reports:** Rp 25M each
- On-demand analysis
- Example: "Feasibility of opening café in Bali Canggu area"
- 2-4 week turnaround

**Historical Data:** Rp 10M/year
- Access to 3 years of back-reports
- Trend analysis

### Payment Terms

- Annual prepayment (standard)
- Quarterly invoicing (for select enterprise customers)
- No refunds (data is perishable, consumed monthly)

### Free Sample

**To attract subscribers:**
- Publish abbreviated version of 1 report/quarter
- Full report: Paywall
- "Want more? Subscribe" CTA

---

## Target Customers

**Investors (PE, VC):**
- Use case: Due diligence on F&B acquisitions
- Pricing: Premium (Rp 100M/year)
- Example: "Is this café chain performing above/below market average?"

**Management Consultants (McKinsey, BCG, local firms):**
- Use case: Data for client presentations
- Pricing: Standard (Rp 50M/year)
- Example: "Industry benchmarks for client's expansion plan"

**Suppliers (Food distributors, equipment vendors):**
- Use case: Market trends (what to stock? where to focus sales?)
- Pricing: Standard (Rp 50M/year)

**F&B Brands (Chains planning expansion):**
- Use case: Market entry analysis, competitive benchmarking
- Pricing: Premium (Rp 100M/year)

**Government/Trade Associations:**
- Use case: Policy decisions, industry advocacy
- Pricing: Enterprise (custom)

---

## Revenue Projections

**Year 1 (2025):**
- Target: 20 subscribers (10 Standard, 8 Premium, 2 Enterprise)
- ARR: Rp 1.2B

**Year 2 (2026):**
- Target: 50 subscribers
- ARR: Rp 3.5B

**Year 3 (2027):**
- Target: 100 subscribers
- ARR: Rp 7.5B

**Gross Margin:** 90%+ (data collection cost is sunk)

---

## Ethical Considerations

**Customer Trust:**
- Transparent: Tell PWBI customers data is aggregated for insights
- Opt-in: Customers must consent
- No competitive harm: Reports available to all (not exclusive to one customer)

**Data Governance:**
- Ethics board (quarterly review)
- Anonymization audits (yearly, external firm)
- Compliance: Indonesian Data Protection Law (UU PDP)

**Responsible Use:**
- Subscribers agree not to attempt de-anonymization
- Violators: Subscription terminated

---

## Go-to-Market

**Direct Sales:**
- Target list: 100 investors, consultants, F&B brands
- Outreach: Personalized emails, LinkedIn
- Close rate: 20%

**Partnerships:**
- Co-sell with POS vendors (Moka, Olsera)
- Industry associations (PHRI, etc.)

**Content Marketing:**
- Free sample report (quarterly)
- Blog posts analyzing trends
- Webinars ("State of Indonesia F&B 2025")

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 2.0 | Comprehensive D1 documentation |

---

## Related

- **[[products/15-industry-reports/15-industry-reports|Industry Reports Product]]** - D1 Industry Reports product overview
- **[[products/15-industry-reports/data-methodology|Data Methodology]]** - Data sources and anonymization
- **[[products/15-industry-reports/pricing-subscription|Pricing & Subscription]]** - Subscription tiers and pricing
- **[[products/15-industry-reports/product-strategy/product-strategy|Product Strategy]]** - Market intelligence strategy
- **[[biz/strategy/planning/foundations/04-data-moats|Data Moats]]** - Competitive data advantages
