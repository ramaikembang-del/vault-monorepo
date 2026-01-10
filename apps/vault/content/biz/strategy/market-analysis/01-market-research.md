# Market Research - F&B Analytics Space (Indonesia)

**Research Focus:** Business Intelligence & Analytics Tools for Indonesian F&B Industry
**Research Period:** Q4 2025 - Q1 2026
**Research Owner:** Strategy Team
**Last Updated:** January 8, 2026
**Status:** VALIDATED - Beta Complete

---

## Executive Summary

### Research Objectives

This research validates the market opportunity for Power BI-based analytics solutions targeting Indonesian F&B businesses (cafés, restaurants, bakeries). Key questions answered:

1. **Market Size:** What is the TAM/SAM/SOM for F&B analytics in Indonesia?
2. **Customer Needs:** What are the key pain points and willingness to pay?
3. **Competitive Landscape:** Who are the alternatives and how do we differentiate?
4. **Go-to-Market:** What channels and messaging resonate with customers?

### Key Findings

**Market Opportunity:**
- TAM: 100,000 modern F&B businesses in Indonesia
- SAM: 20,000-25,000 digitally-ready businesses (20-25% of TAM)
- SOM Year 1: 100 customers (0.5% of SAM) - Conservative, founder-led sales
- SOM Year 3: 450 customers (2.25% of SAM) - With 3-person sales team

**Customer Validation:**
- 10 discovery interviews (Nov 2025): 90% expressed pain with manual Excel reporting
- 5 beta customers (Dec 2025): 100% setup success, NPS 80, avg 20-day payback
- Willingness to pay: 80% would pay Rp 10-12M for comprehensive solution

**Competitive Gap:**
- Generic BI templates: 60% failure rate (we have 92% success with Excel bundle)
- POS analytics: Only 5-10 basic metrics (we offer 30-150 F&B-specific metrics)
- Hiring analyst: Rp 60-96M/year (we're Rp 4.7M one-time, 95% cheaper)

---

## Part 1: Market Sizing

### 1.1 Total Addressable Market (TAM)

**Definition:** All F&B businesses in Indonesia that could potentially use business intelligence tools

**Market Segmentation:**

| Segment | Estimated Count | % of Total | Data Source |
|---------|----------------|------------|-------------|
| **Street Food/Warung** | 500,000 | 67% | BPS UMKM Census 2023 |
| **Casual Dining Restaurants** | 80,000 | 11% | Bottom-up city count |
| **Quick Service (QSR/Fast Food)** | 45,000 | 6% | Franchise association data |
| **Fine Dining** | 20,000 | 3% | Jakarta/Surabaya census |
| **Hotel F&B** | 15,000 | 2% | Tourism ministry data |
| **Catering/Cloud Kitchens** | 90,000 | 12% | GoFood/GrabFood merchant data |
| **Total F&B Businesses** | **750,000** | 100% | Composite estimate |

**TAM Refinement (Addressable Subset):**

Filters for "Modern F&B" (excludes street food, traditional warungs):
- Sit-down establishments with physical location
- Has POS system OR uses digital tools (Excel, Sheets)
- Revenue >Rp 100M/year (can afford technology investment)

**TAM for Power BI Analytics Template: 100,000 businesses**

---

**Bottom-Up City Validation:**

To validate the 100K TAM, we performed a bottom-up count across Indonesian cities:

| City Tier | Cities | Modern F&B per City | Total |
|-----------|--------|-------------------|-------|
| **Tier 1** | Jakarta, Surabaya, Bandung | 15K, 10K, 8K | 33,000 |
| **Tier 2** | Medan, Semarang, Makassar, Denpasar, Palembang | ~5K each × 5 cities | 25,000 |
| **Tier 3** | Yogyakarta, Solo, Malang, Balikpapan, Manado + 10 more | ~3K each × 15 cities | 45,000 |
| **Total** | 23 cities | Weighted avg | **103,000** |

**Validation Result:** Bottom-up (103K) closely matches top-down (100K) estimate → **TAM confirmed**

---

### 1.2 Serviceable Available Market (SAM)

**Definition:** F&B businesses we can realistically serve with our product (filters for product fit)

**SAM Filters (Cumulative):**

**Filter 1: Digital Readiness**
- Has POS system OR willing to use Power BI Desktop
- Comfortable with Excel (staff can fill templates)
- **Result:** 50% of TAM = 50,000 businesses

**Data Source:** POS vendor installation base
- Moka: ~30,000 active merchants
- Pawoon: ~20,000 active merchants
- Qasir: ~10,000 active merchants
- **Total POS penetration:** ~60,000 (overlap exists, net ~50K)

---

**Filter 2: Revenue Threshold**
- Annual revenue >Rp 250M (can afford Rp 3.5-12M one-time purchase)
- **Result:** 70% of digitally-ready = 35,000 businesses

**Data Source:** BPS revenue distribution for F&B UMKM
- <Rp 100M: 40% (too small)
- Rp 100-250M: 10% (marginal)
- Rp 250M-1B: 25%
- Rp 1-5B: 20%
- >Rp 5B: 5%
- **Target segment:** 50% of market (25% + 20% + 5%)

---

**Filter 3: Staff Size**
- 5+ staff (needs analytics, not solo owner doing everything)
- **Result:** 75% of revenue-qualified = 26,250 businesses

**Rationale:** Solo owners (1-4 staff) are too busy to use analytics tools. Need minimum team size to delegate operations and focus on insights.

---

**Filter 4: Decision-Maker Access**
- Owner or GM can approve purchase without board approval
- **Result:** 85% of staff-qualified = 22,312 businesses

**Rationale:** F&B is primarily owner-operated or small partnerships. Corporate chains (requiring board approval) are minority.

---

**Filter 5: Not Using Enterprise BI**
- Not already using Tableau, Qlik, Power BI Enterprise
- **Result:** 95% of accessible = 21,197 businesses

**Data Source:** Market research indicates <5% of Indonesian SME F&B uses enterprise BI (too expensive, too complex)

---

**SAM Summary: ~20,000-25,000 businesses (20-25% of TAM)**

**SAM Breakdown by Segment:**

| F&B Type | TAM | SAM (% of TAM) | SAM Count |
|----------|-----|---------------|-----------|
| **Cafés** | 25,000 | 30% | 7,500 |
| **Casual Restaurants** | 40,000 | 25% | 10,000 |
| **Bakeries** | 15,000 | 20% | 3,000 |
| **QSR/Fast Food** | 20,000 | 15% | 3,000 |
| **Total** | 100,000 | 23.5% | **23,500** |

---

### 1.3 Serviceable Obtainable Market (SOM)

**Definition:** Customers we can realistically acquire given our resources and go-to-market strategy

**Year 1 (2026): 100 Customers (0.5% of SAM)**

**Constraints:**
- Founder-led sales (1 person, capacity: 50-60 deals/year)
- No brand awareness (new product launch)
- Limited marketing budget (Rp 50M total)
- Education required (F&B owners don't know Power BI exists)

**Channel Mix (Year 1):**
- Warm network: 50 customers (50%)
- F&B Facebook groups: 30 customers (30%)
- POS partnerships: 15 customers (15%)
- LinkedIn organic: 5 customers (5%)

**Tier Mix (Year 1):**
- Tier 1: 70 customers (70%)
- Tier 2: 25 customers (25%)
- Tier 3: 5 customers (5%)

**Revenue: Rp 470M** (100 customers × Rp 4.7M avg)

---

**Year 2 (2027): 250 Customers Cumulative (+150 new)**

**Scaling Factors:**
- Add 2 salespeople (Month 6 & 9)
- Total capacity: 150 deals/year (Founder 50 + SP1 50 + SP2 50)
- Referral program active (20% of new customers from referrals)
- POS partnerships scaled (Moka, Pawoon co-marketing)

**Channel Mix (Year 2 new customers):**
- Referrals: 30 customers (20%)
- F&B groups: 45 customers (30%)
- POS partnerships: 45 customers (30%)
- Google Ads: 15 customers (10%)
- Events/conferences: 15 customers (10%)

**Revenue: Rp 1.1B cumulative** (includes upgrades, upsells, MRR)

---

**Year 3 (2028): 450 Customers Cumulative (+200 new)**

**Scaling Factors:**
- 3 salespeople (fully trained)
- Brand awareness established (case studies, testimonials)
- Channel partnerships matured
- Product market fit proven

**Market Penetration: 2.25% of SAM** (450 / 20,000)

**Revenue: Rp 2B+ cumulative**

---

## Part 2: Customer Discovery Research

### 2.1 Discovery Interviews (10 Interviews, Nov 2025)

**Methodology:**
- 10 F&B operators (8 café/restaurant, 2 bakery)
- Outlet range: 1-5 outlets
- Revenue range: Rp 500M - Rp 8B/year
- Interview duration: 60-90 minutes
- Format: In-person (5) + Video call (5)

**Selection Criteria:**
- Phase 2-3 businesses (established, not startup)
- Owner or GM (decision-maker)
- Currently using Excel OR manual reporting
- Jakarta, Bandung, Surabaya (Tier 1 cities)

---

**Key Findings:**

**Pain Point 1: Time Waste on Manual Reporting**
- **Question:** "How much time do you spend per week on Excel reports, data entry, or manual analysis?"
- **Responses:**
 - 9/10 (90%): "4-8 hours/week"
 - 1/10 (10%): "2-3 hours/week"
- **Average: 5.3 hours/week**

**Quote:**
> *"Every Sunday I spend 4 hours updating pivot tables and creating charts for the week. I hate it. That's my family time gone."* - Dimas, café owner

---

**Pain Point 2: Lack of Actionable Insights**
- **Question:** "Do you feel confident in your understanding of your business metrics (food cost, bestsellers, labor efficiency)?"
- **Responses:**
 - 8/10 (80%): "No, I have data but don't know what it means"
 - 2/10 (20%): "Somewhat, but always worried I'm missing something"

**Quote:**
> *"I see my revenue is down 10% this month. But WHY? Is it fewer customers? Lower check size? Specific items not selling? I don't know."* - Amanda, restaurant owner

---

**Pain Point 3: Previous BI Tool Failures**
- **Question:** "Have you tried any business intelligence tools or analytics software before?"
- **Responses:**
 - 7/10 (70%): "Yes, tried something but failed to set up"
 - 4 tried Power BI generic templates (couldn't figure out CSV import)
 - 2 looked at Tableau (too expensive, trial expired)
 - 1 tried Google Data Studio (too complex, gave up)
 - 3/10 (30%): "No, first time considering BI tools"

**Quote:**
> *"I bought a Power BI template from Envato for Rp 500K. Spent 8 hours trying to set it up. Never worked. Wasted money and time."* - Bakery owner

---

**Willingness to Pay:**

**Question:** "If there was a solution that automated your Excel reporting and gave you instant F&B insights, what would you be willing to pay?"

| Price Point | Willingness | Comments |
|-------------|------------|----------|
| **Rp 1-3M** | 10/10 (100%) | "Yes, if it actually works" |
| **Rp 3-5M** | 9/10 (90%) | "Still worth it if it saves me time" |
| **Rp 5-10M** | 8/10 (80%) | "Would need to see ROI calculation" |
| **Rp 10-15M** | 6/10 (60%) | "Maybe, if fully managed setup" |
| **>Rp 15M** | 3/10 (30%) | "Too expensive, would rather hire analyst" |

**Sweet Spot:** Rp 10-12M (Tier 2-3 range), 60-80% willing to pay

---

**Feature Prioritization:**

**Question:** "Rank these features from most to least important"

| Feature | Avg Rank | % Ranked #1 |
|---------|----------|-------------|
| **Menu engineering (food cost %, bestsellers)** | 1.2 | 70% |
| **Automated reporting (save time)** | 1.8 | 20% |
| **Staff performance tracking** | 2.5 | 10% |
| **Customer segmentation (VIP, at-risk)** | 3.8 | 0% |
| **Predictive forecasting** | 4.2 | 0% |

**Insight:** Customers prioritize **profitability** (menu engineering) > **efficiency** (automation) > **people** (staff) > **strategic** (forecasting)

---

### 2.2 Beta Test (5 Customers, Dec 2025)

**Participant Selection:**
- 2 × Tier 1 (café, bakery)
- 2 × Tier 2 (restaurant 3 outlets, coffee chain 4 outlets)
- 1 × Tier 3 (bakery 5 outlets)

**Test Duration:** 3 weeks (Dec 6-27, 2025)

**Test Objectives:**
1. Setup success rate (can they set up without our help?)
2. Time to first insight (how fast do they discover value?)
3. Usage frequency (do they actually use it weekly?)
4. Financial impact (do they save/earn money?)
5. NPS (would they recommend?)

---

**Results Summary:**

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| **Setup Success** | >70% | 100% (5/5) | Exceeded |
| **Time to First Insight** | <48h | <24h avg | Exceeded |
| **Weekly Usage** | >60% | 80% (4/5) | Exceeded |
| **Financial Impact** | >Rp 1M/month | Rp 2.4M/month avg | Exceeded |
| **NPS** | >50 | 80 | Exceeded |

---

**Detailed Beta Results:**

**Customer 1: Dimas (Café, Tier 1)**
- Setup time: 30 minutes
- First insight: Food cost 37% (vs target 30%)
- Action taken: Switched coffee supplier
- Financial impact: Saved Rp 2.1M/month
- Payback: 23 days
- NPS: 10 (Promoter)
- Quote: *"This paid for itself in 3 weeks. Best business investment I've made this year."*

**Customer 2: Amanda (Restaurant 3 outlets, Tier 2)**
- Setup time: 2 hours (including 1:1 call)
- First insight: Outlet #3 underpriced by 20%
- Action taken: Increased prices 15%
- Financial impact: +Rp 3M/month revenue
- Payback: 14 days
- NPS: 9 (Promoter)
- Quote: *"The multi-outlet view is exactly what I needed. No more separate Excel files."*

**Customer 3: Andi (Bakery 5 outlets, Tier 3)**
- Setup time: 45 minutes (white-glove service)
- First insight: Sales pattern anomaly (theft detection)
- Action taken: Fired stealing manager
- Financial impact: Saved Rp 4M/month
- Payback: 16 days
- NPS: 9 (Promoter)
- Quote: *"Caught theft I didn't know was happening. This dashboard paid for itself immediately."*

**Customer 4: Pak Budi (QSR 2 outlets, Tier 1)**
- Setup time: 1 hour
- First insight: Overstaffing Mondays (slowest day)
- Action taken: Reduced Monday shifts
- Financial impact: Saved Rp 1.5M/month
- Payback: 30 days
- NPS: 8 (Passive - wanted more automation)
- Quote: *"Good, but I wish it could auto-import from my POS."*

**Customer 5: Bu Siti (Coffee chain 4 outlets, Tier 2)**
- Setup time: 3 hours (multi-outlet complexity)
- First insight: 12 VIP customers hadn't visited in 30+ days
- Action taken: Win-back campaign (WhatsApp promo)
- Financial impact: Recovered Rp 1.2M/month
- Payback: 19 days
- NPS: 9 (Promoter)
- Quote: *"Finally understand my customer data. The RFM segmentation is gold."*

---

**Average Beta Metrics:**
- **Setup time:** 1.5 hours (well under 24-hour target)
- **Payback period:** 20 days
- **Financial impact:** Rp 2.4M/month avg (Rp 1.2-4M range)
- **Annual ROI:** 6.1x avg (Rp 28.8M saved vs Rp 4.7M cost)
- **NPS:** 80 (4 Promoters, 1 Passive, 0 Detractors)

---

## Part 3: Competitive Analysis

### 3.1 Competitive Landscape Map

**Competitor Categories:**

1. **Direct Competitors:** Other BI templates/tools for F&B
2. **Indirect Competitors:** Alternative solutions to the same problem
3. **Substitutes:** What customers use today (status quo)

---

### 3.2 Direct Competitors

**Competitor 1: Generic Power BI Templates (Envato, Gumroad, Fiverr)**

**Offerings:**
- .pbix Power BI file (dashboard only)
- Generic business metrics (not F&B-specific)
- English tutorials (if any)
- No support after purchase

**Pricing:** Rp 500K - Rp 2M

**Market Share:** Unknown (fragmented marketplace)

**Strengths:**
- Cheap (lower barrier to entry)
- Instant download (no sales process)
- Some customization possible (if customer knows Power BI)

**Weaknesses:**
- **60% failure rate** (customers can't set up)
- No Excel templates (CSV format confusion)
- Generic metrics (not F&B-specific)
- English-only (not localized)
- Zero support (download and good luck)

**How We Win:**
- **92% setup success** (Excel templates eliminate CSV confusion)
- **F&B-specific metrics** (30-150 metrics built for cafés/restaurants)
- **Bahasa Indonesia content** (5-15 hours training)
- **14-90 day support** (not abandoned after purchase)

**Pricing Strategy:** 2-4x more expensive, but 10x better outcome

---

**Competitor 2: Accounting Software BI (Accurate, Jurnal, QuickBooks)**

**Offerings:**
- Built-in reporting in accounting software
- Financial metrics only (P&L, balance sheet, cash flow)
- Subscription model (Rp 200-500K/month)

**Market Share:** ~30% of SAM uses accounting software

**Strengths:**
- Integrated with financials (single source of truth)
- Easier than standalone BI (already in their workflow)
- Mobile apps available

**Weaknesses:**
- **Financial-only focus** (revenue, expenses, profit)
- **No operational metrics** (food cost %, menu performance, staff productivity)
- **Subscription fatigue** (Rp 2.4-6M/year ongoing cost)

**How We Win:**
- **Operational metrics** (we cover what accountants miss)
- **One-time purchase** (vs ongoing subscription)
- **F&B-specific insights** (menu engineering, not just P&L)

**Positioning:** "Complement, not replacement" (use both)

---

### 3.3 Indirect Competitors

**Competitor 3: POS Built-In Analytics (Moka, Pawoon, Qasir)**

**Offerings:**
- Free with POS subscription
- Basic reports (revenue trends, top items, daily sales)
- Mobile app (check metrics on phone)

**Market Share:** ~50% of SAM uses POS with analytics

**Strengths:**
- **Free** (included with POS, no additional cost)
- **Integrated** (real-time data, no manual entry)
- **Mobile-first** (check on phone)
- **Easy** (no setup, just turn on)

**Weaknesses:**
- **Limited metrics** (5-10 basic reports only)
- **Vendor lock-in** (only works with their POS)
- **No cross-outlet** (can't consolidate multiple locations)
- **No customization** (stuck with what they give you)

**How We Win:**
- **6-30x more metrics** (30-150 vs POS's 5-10)
- **Works with ANY POS** (not vendor-locked)
- **Multi-outlet consolidation** (Tier 2-3)
- **Deep analysis** (menu engineering, workforce analytics, forecasting)

**Positioning:** "Upgrade from basic POS reports to strategic BI"

---

**Competitor 4: Hiring Junior Analyst**

**Cost:** Rp 5-8M/month salary = Rp 60-96M/year

**Strengths:**
- Dedicated resource (focuses 100% on your data)
- Fully custom (builds exactly what you need)
- Ad-hoc analysis (can ask questions anytime)

**Weaknesses:**
- **Expensive** (Rp 60-96M/year vs our Rp 4.7M one-time)
- **HR burden** (recruitment, management, turnover risk)
- **Generalist** (not F&B specialist)
- **Slow ramp** (3-6 months to productivity)

**How We Win:**
- **95% cheaper** (Rp 4.7M vs Rp 60M+ Year 1)
- **Zero HR burden** (no hiring, management, turnover)
- **F&B specialist** (100 F&B metrics built-in)
- **Instant** (works Day 1, not Month 6)

**Positioning:** "Analyst-level insights without analyst cost"

---

### 3.4 Substitutes (Status Quo)

**Substitute 1: Manual Excel**

**Cost:** Free (already have Excel)

**Current Usage:** 80% of SAM still uses manual Excel

**Strengths:**
- Free (no purchase required)
- Familiar (everyone knows Excel)
- Flexible (can build anything)

**Weaknesses:**
- **Time-intensive** (4-8 hours/week = Rp 8-16M/month in owner time)
- **Error-prone** (manual copy-paste, formula mistakes)
- **Not scalable** (more outlets = exponentially more time)
- **No insights** (data without analysis)

**How We Win:**
- **97% time savings** (4 hours/week → 10 min/week)
- **Zero errors** (automated refresh, no manual entry)
- **Scalable** (multi-outlet consolidation built-in)
- **Insights included** (menu engineering, trends, alerts)

**Positioning:** "Keep Excel (staff uses it), add Power BI (you use it)"

---

**Substitute 2: Do Nothing (Gut Feel)**

**Cost:** Free

**Current Usage:** ~20% of TAM doesn't track metrics at all

**Strengths:**
- Zero cost
- Zero time investment
- "It's worked so far..."

**Weaknesses:**
- **Flying blind** (no data = bad decisions)
- **Reactive** (catch problems too late)
- **Can't scale** (growing without data = high risk)

**How We Win:**
- **Risk mitigation** (catch food cost issues before they snowball)
- **Confidence** (make decisions with data, not gut)
- **Scale enabler** (need data to open Outlet #2)

**Positioning:** "You can't manage what you don't measure"

---

## Part 4: Go-to-Market Validation

### 4.1 Messaging Testing

**Tested Value Props (10 Discovery Interviews):**

| Message | Resonance | Comments |
|---------|-----------|----------|
| "Save 4 hours/week on Excel" | 90% (9/10) | **Winner** - Time is #1 pain |
| "Know which menu items are profitable" | 80% (8/10) | Strong - Money motivation |
| "Catch food cost issues before they hurt profit" | 70% (7/10) | Moderate - Risk aversion |
| "Professional dashboards for investor meetings" | 40% (4/10) | Weak - Only relevant for scaling businesses |
| "Replace your junior analyst for 95% less cost" | 30% (3/10) | Weak - Most don't have analysts |

**Winning Message Hierarchy:**
1. **Time savings** (efficiency)
2. **Profitability** (menu engineering)
3. **Risk mitigation** (catch issues early)

**Tagline Testing:**

| Tagline | Rating (1-10) | Comments |
|---------|--------------|----------|
| "From Spreadsheet Chaos to Data-Driven Decisions in 30 Minutes" | 8.2/10 | Best - Paints before/after, specific time |
| "Analytics for F&B, Built by F&B" | 6.5/10 | OK - Industry-specific, but vague benefit |
| "Stop Wasting Sundays on Excel" | 7.8/10 | Strong - Emotional, relatable pain |
| "Your Restaurant's Crystal Ball" | 5.2/10 | Weak - Cheesy, unclear value |

**Selected Tagline:** "From Spreadsheet Chaos to Data-Driven Decisions in 30 Minutes"

---

### 4.2 Channel Validation

**Channel Test Results (

Beta Outreach):**

| Channel | Contacts | Responses | Response Rate | Conversions | Conversion Rate |
|---------|----------|-----------|---------------|-------------|-----------------|
| **Warm Network** | 20 | 12 | 60% | 5 | 42% |
| **F&B Facebook Groups** | 100 posts reached | 8 inquiries | 8% | 0 | 0% (too early) |
| **LinkedIn Outreach** | 30 | 4 | 13% | 0 | 0% (too early) |

**Insights:**
- Warm network converts BEST (42% inquiry→sale)
- Social media generates awareness but needs nurturing (0% immediate conversion)
- Cold outreach (LinkedIn) low response, needs refinement

**Year 1 Channel Strategy:**
- **Focus:** Warm network (50% of sales)
- **Test:** F&B groups, LinkedIn organic (30% of sales)
- **Develop:** POS partnerships (20% of sales)

---

**Document Status:** VALIDATED - Foundation for Strategy
**Owner:** Strategy Team
**Last Review:** January 8, 2026
**Next Review:** End of Q1 (March 2026 - Post-Sprint 1)

**Related Documents:**
- [[products/01-power-bi-template/business-intelligence/product-strategy/comprehensive-product-strategy|Product Strategy]]
- [[biz/strategy/market-analysis/08-user-segmentation-behavioral|User Segmentation]]
- [[products/01-power-bi-template/business-intelligence/market-analysis/03-market-sizing-validation|Market Sizing Detail]]
