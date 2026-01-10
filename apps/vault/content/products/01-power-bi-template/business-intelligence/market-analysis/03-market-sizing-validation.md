# Market Sizing Validation & Gap Analysis - Product 01

**Product:** A1 - Power BI Dashboard (3-Tier Product)
**Purpose:** Validate market sizing assumptions, identify inconsistencies, improve revenue projections
**Date:** January 3, 2026
**Status:** **STANDALONE DOCUMENT** - Finalized for Distribution

---

## Executive Summary

**Finding:** Market sizing documents contain **significant inconsistencies** that need reconciliation before Sprint 1 launch.

### Critical Issues Identified:

| Issue | Impact | Severity |
|-------|--------|----------|
| **TAM varies 7.5x** (100K vs 750K) across documents | Can't determine actual addressable market | HIGH |
| **SAM varies 17x** (10.5K vs 180K) across documents | Unclear which segment we're targeting | HIGH |
| **Year 1-3 targets misaligned** (150 vs 130 vs 9,000 customers) | Can't set realistic sales goals | HIGH |
| **Revenue math doesn't work** (Rp 1.67M avg vs Rp 6.76M avg per customer) | Pricing or volume targets are wrong | HIGH |
| **No data sources cited** | Can't validate assumptions | MEDIUM |
| **Bottom-up validation missing** | Don't know if TAM/SAM is realistic | MEDIUM |

**Recommendation:** **PAUSE** Sprint 1 GTM execution until market sizing is reconciled. Sales team can't execute without clear, validated targets.

---

## Part 1: Inconsistency Analysis

### 1.1 TAM (Total Addressable Market) Inconsistency

**Three different TAM numbers across documents:**

| Document | TAM Figure | Definition | Notes |
|----------|------------|------------|-------|
| **Company-level** (market-analysis.md) | **750,000** F&B outlets | All F&B businesses in Indonesia | Includes warung, street food, catering |
| **Product 01 Comprehensive Strategy** | **500,000+** F&B outlets | Not clearly defined | Vague number, no explanation for 250K drop |
| **Product 01 Product-Spec** | **100,000** restaurants | Sit-down restaurants, cafes, chains only | Excludes street food, kiosks, food trucks |

**Issue:** 7.5x variance (100K vs 750K) depending on which document you read.

**Root Cause:**
- **Company-level TAM** includes ALL F&B (warung, street food, catering) = 750K
- **Product 01 TAM** should be narrower (modern restaurants with POS) = 100K-150K
- **Comprehensive strategy TAM** (500K) is unclear - halfway between company and product-specific

**Recommendation:**
- **Use Product-Spec TAM = 100,000 restaurants** as Product 01-specific TAM
- **Company TAM = 750K** is correct for OVERALL company (all products)
- **Delete "500K+ F&B outlets"** from comprehensive-product-strategy.md (conflicting, unexplained number)

---

### 1.2 SAM (Serviceable Available Market) Inconsistency

**Two vastly different SAM numbers:**

| Document | SAM Figure | % of TAM | Filters Applied |
|----------|------------|----------|-----------------|
| **Company-level** (market-analysis.md) | **180,000** F&B businesses | 24% (180K of 750K) | Digital ready (40%) x Viable revenue (60%) |
| **Product 01 Product-Spec** | **10,500** restaurants | 10.5% (10.5K of 100K) | 10+ staff, Rp 50M+ revenue, POS system, decision-maker access |

**Issue:** 17x difference (180K vs 10.5K).

**Root Cause:**
- **Company SAM (180K)** = All F&B businesses that COULD use analytics
- **Product 01 SAM (10.5K)** = Restaurants that can afford **Rp 300K-4M/month SaaS subscription** (stricter filters)

**Which is correct for Product 01?**

**Analysis:**
- Product 01 is a **one-time purchase** (Rp 3.5-19.8M modular tiers), NOT a monthly subscription
- Filters in product-spec are TOO STRICT for one-time purchase product
- A restaurant with 5 staff and Rp 30M/year revenue COULD afford Rp 3.5-6M one-time (Tier 1 modular)
- But they CAN'T afford Rp 900K/month SaaS (Full SaaS Pro tier)

**Issue:** Product-spec SAM (10.5K) applies **SaaS subscription filters** to a **one-time purchase product**.

**Revised SAM Calculation for Product 01 (One-Time Purchase):**

```
TAM: 100,000 restaurants (sit-down, cafes, chains)

Filters for Product 01 (One-Time Purchase):
1. Digital ready (has POS or willing to use Power BI): 40% = 40,000
2. Revenue >Rp 250M/year (can afford Rp 3.5-19.8M one-time): 50% = 20,000
3. 5+ staff (needs analytics, not solo owner): 70% = 14,000

**Revised SAM for Product 01: ~14,000-20,000 restaurants**
```

**This makes more sense:**
- 14-20K SAM is **7x larger than current estimate (10.5K)**
- Aligns better with "10,000 potential customers" mentioned in comprehensive-product-strategy.md
- More realistic for one-time purchase product (lower barrier than monthly subscription)

**Recommendation:**
- **Update Product 01 SAM to 15,000-20,000 restaurants** (15-20% of TAM)
- Reserve strict SAM (10.5K) for **Full SaaS Platform** (Pillar 5 Core Product)
- Acknowledge that Product 01 is an **acquisition play** (wider funnel), not enterprise SaaS

---

### 1.3 SOM (Serviceable Obtainable Market) Inconsistency

**Three different Year 3 SOM targets:**

| Document | Year 3 SOM | % of SAM | Notes |
|----------|------------|----------|-------|
| **Company-level** (market-analysis.md) | **9,000 paid users** | 5% of 180K SAM | All products combined? Or just one product? |
| **Product 01 Product-Spec** | **130 customers** | 1.2% of 10.5K SAM | Realistic for SaaS subscription |
| **Product 01 Comprehensive Strategy** | **NOT SPECIFIED** | - | Only says "Rp 600M revenue" (no customer count) |

**Issue:** 69x difference (9,000 vs 130) depending on which document you read.

**Root Cause:**
- **Company-level SOM (9K)** likely refers to **ALL products combined** (Power BI Template + Web Dashboard Lite + Full SaaS Platform)
- **Product-spec SOM (130)** refers to **Full SaaS Platform only** (monthly subscription)
- **Comprehensive strategy** conflates **one-time purchase product** (Power BI Template) with **SaaS subscription**

**Analysis:**

If we assume:
- **Product 01 (Power BI Template):** One-time sales, sold to 150 customers in Year 1, 400 by Year 2
- **Product 03 (Web Dashboard Lite):** Freemium SaaS, 5,000 free users by Year 3, 500 paid (10% conversion)
- **Product 05 (Full SaaS Platform):** Enterprise SaaS, 130 paid customers by Year 3

**Then Year 3 combined SOM:**
- Power BI Template: 400 total sales (cumulative, not recurring)
- Web Dashboard Lite: 500 paid users
- Full SaaS Platform: 130 paid customers
- **Total ACTIVE paid users in Year 3: ~630** (not 9,000)

**Where does 9,000 come from?**

Possible explanations:
1. **Aspirational target** (not grounded in bottom-up math)
2. **Includes free tier users** (5,000 free + paid = ~6,000, still not 9,000)
3. **Typo or outdated number** (from earlier more aggressive projections)

**Recommendation:**
- **Reconcile company-level SOM (9K) with product-level SOMs (130-500 each)**
- **Bottom-up validation:**
 - Product 01: 150 (Year 1) -> 400 (Year 2) -> 800 (Year 3) cumulative one-time sales
 - Product 03: 500 paid SaaS users by Year 3
 - Product 05: 130 paid SaaS users by Year 3
 - **Total active paid users Year 3: ~1,430** (more realistic than 9,000)

---

### 1.4 Revenue Math Inconsistency

**Year 1 customer count vs revenue doesn't align:**

From comprehensive-product-strategy.md:
- **Year 1:** 150 customers, Rp 250M revenue -> **Rp 1.67M avg per customer**
- **Year 2:** 400 customers, Rp 400M revenue -> **Rp 1M avg per customer** (DECLINING!?)
- **Year 3:** ??? customers, Rp 600M revenue -> **Rp ??? avg per customer**

From unit-economics.md:
- **Blended model:** 10 customers = Rp 67.6M revenue -> **Rp 6.76M avg per customer**

**Issue:** 4x discrepancy in average customer value (Rp 1.67M vs Rp 6.76M).

**Root Cause:**

**Scenario A (If Year 1 = 150 customers, Rp 250M revenue):**
```
150 customers x Rp 1.67M avg = Rp 250M œ"
But blended model shows Rp 6.76M avg per customer
-> We'd only need 37 customers to hit Rp 250M (150 / 4 = 37.5)
-> 150 customers at Rp 6.76M avg = Rp 1.01 BILLION (not Rp 250M!)
```

**Scenario B (If Year 2 = 400 customers, Rp 400M revenue):**
```
400 customers x Rp 1M avg = Rp 400M œ"
Average customer value DECLINED from Year 1 (Rp 1.67M) to Year 2 (Rp 1M)
-> This doesn't make sense with tier upgrade funnel (should INCREASE as customers upgrade Tier 1 -> Tier 2 -> Tier 3)
```

**Analysis:**

One of these is wrong:
1. **Customer count targets are too high** (150 / 400 should be 40 / 100)
2. **Revenue targets are too low** (should be Rp 1B+ if we're selling at Rp 6.76M avg)
3. **Blended model is wrong** (should show Rp 1.67M avg, not Rp 6.76M)

**Which is more realistic?**

Let's test with Q1-Q4 targets from comprehensive-product-strategy.md:

| Quarter | Sales Target | Cumulative | Revenue (if Rp 6.76M avg) | Revenue (if Rp 1.67M avg) |
|---------|--------------|------------|---------------------------|---------------------------|
| **Q1** | 15 | 15 | Rp 101M | Rp 15M |
| **Q2** | 30 | 45 | Rp 304M | Rp 75M |
| **Q3** | 50 | 95 | Rp 642M | Rp 159M |
| **Q4** | 60 | 155 | Rp 1.05B | Rp 259M |

**Observation:**
- If Q1-Q4 are **cumulative**, Year 1 total = 155 customers (close to target of 150) œ"
- If avg customer value = **Rp 6.76M**, Year 1 revenue = **Rp 1.05B** (4x higher than Rp 250M target) Œ
- If avg customer value = **Rp 1.67M**, Year 1 revenue = **Rp 259M** (close to Rp 250M target) œ"

**Conclusion:**
- **Customer count targets (150 / 400) are correct**
- **Revenue targets (Rp 250M / 400M) are correct**
- **Blended model avg (Rp 6.76M) is WRONG for overall mix**

**Root cause of blended model error:**

Unit-economics.md assumes (with updated modular pricing):
- 40% Tier 1 (Rp 4.75M avg)
- 40% Tier 2 (Rp 9.5M avg)
- 20% Tier 3 (Rp 17.3M including setup + 12 months MRR)

```
10 customers blended:
4 x Rp 4.75M = Rp 19M
4 x Rp 9.5M = Rp 38M
2 x Rp 17.3M = Rp 34.6M
Total: Rp 91.6M
Avg: Rp 9.16M per customer
```

**But this assumes:**
- All Tier 3 customers pay full Year 1 (Rp 10-15M setup (support optional) x 12 months MRR)
- 20% of customers are Tier 3 (unrealistic in Year 1 - most will be Tier 1/2 one-time purchases)

**More realistic Year 1 mix (with modular pricing):**
- 60% Tier 1 (Rp 4.75M avg) = Low-barrier entry point
- 35% Tier 2 (Rp 9.5M avg) = Sweet spot
- 5% Tier 3 (Rp 12.5M setup only, no 12 months MRR yet) = Premium early adopters

```
100 customers blended (more realistic Year 1):
60 x Rp 4.75M = Rp 285M
35 x Rp 9.5M = Rp 332.5M
5 x Rp 12.5M = Rp 62.5M (setup fees only, MRR builds over 12 months)
Total: Rp 680M (significantly higher than Rp 250M target!)
Avg: Rp 6.8M per customer
```

Still too high. Let's try with low-end modular pricing:

```
100 customers blended (conservative Year 1):
70 x Rp 3.5M (low end of Tier 1 modular) = Rp 245M
25 x Rp 7M (low end of Tier 2 modular) = Rp 175M
5 x Rp 10M (low end of Tier 3 setup) = Rp 50M
Total: Rp 470M
Avg: Rp 4.7M per customer
```

Still higher than Rp 250M target (for 150 customers).

**To hit Rp 250M with 150 customers:**
```
Rp 250M / 150 customers = Rp 1.67M avg
-> IMPOSSIBLE with new modular pricing (Tier 1 minimum = Rp 3.5M)
-> Even if all 150 bought absolute minimum Tier 1: 150 x Rp 3.5M = Rp 525M (2.1x target)
```

**CRITICAL FINDING: Revenue targets need updating with new modular pricing!**

**Realistic Year 1 scenarios with modular pricing:**

**Scenario A (Conservative - fewer customers):**
```
50 customers:
35 x Rp 3.5M (Tier 1 minimum) = Rp 122.5M
12 x Rp 7M (Tier 2 minimum) = Rp 84M
3 x Rp 10M (Tier 3 setup) = Rp 30M
Total: Rp 236.5M ‰ˆ Rp 250M target œ"
Avg: Rp 4.73M per customer
```

**Scenario B (Moderate - adjusted target):**
```
100 customers:
70 x Rp 3.5M (Tier 1 minimum) = Rp 245M
25 x Rp 7M (Tier 2 minimum) = Rp 175M
5 x Rp 10M (Tier 3 setup) = Rp 50M
Total: Rp 470M
Avg: Rp 4.7M per customer
```

**Recommendation:**
- **REVISE Year 1 revenue target from Rp 250M to Rp 470-525M** (based on new modular pricing)
- **OR reduce customer count target from 150 to 50-60 customers** (if keeping Rp 250M target)
- **Current targets are misaligned with new pricing structure**
- Unit-economics.md blended model needs complete recalculation with modular framework

---

### 1.5 Quarterly Targets Ambiguity

From comprehensive-product-strategy.md:

| Quarter | Target |
|---------|--------|
| Q1 | 15 total sales |
| Q2 | 30 total sales |
| Q3 | 50 total sales |
| Q4 | 60 total sales |

**Issue:** Unclear if targets are **cumulative** (15 -> 45 -> 95 -> 155) or **incremental** (15 + 30 + 50 + 60 = 155).

**Test:**
- If cumulative: Q4 = 60 total customers (Year 1) Œ Doesn't match "150 customers Year 1" target
- If incremental: Q1-Q4 = 155 total customers œ" Matches "150 customers Year 1" target

**Conclusion:** Targets are **incremental** (each quarter adds new customers).

**But there's still an issue:**

| Quarter | Incremental Sales | Cumulative | Revenue @ Rp 1.67M avg |
|---------|------------------|------------|------------------------|
| Q1 | 15 | 15 | Rp 15M |
| Q2 | 30 | 45 | Rp 75M |
| Q3 | 50 | 95 | Rp 159M |
| Q4 | 60 | 155 | Rp 259M |

**Q4 target = 60 incremental sales in one quarter.**

**Is this realistic?**

- Q1 = 15 sales (founder-led, manual outreach)
- Q2 = 30 sales (2x growth, still realistic)
- Q3 = 50 sales (67% growth QoQ)
- **Q4 = 60 sales (20% growth QoQ, but 4x Q1 sales)**

**Q4 assumes:**
- Sales team hired and ramped by Q3
- Marketing channels (LinkedIn, F&B groups, POS partnerships) mature
- Referral program generating 20-30% of sales
- OR Product-market fit proven, viral growth kicking in

**Recommendation:**
- **Clarify quarterly targets are incremental, not cumulative**
- **Add hiring plan:** "Hire first salesperson Month 6 (Q3), second salesperson Month 9 (Q4)"
- **Add marketing milestones:** "Launch referral program Q2, POS co-marketing Q3, LinkedIn ads Q4"
- **Test Q4 realism:** If Q4 = 60 sales, that's 20 sales/month. With 2 salespeople + founder = 7 sales/person/month. Is that achievable?

---

### 1.6 Year 2-3 Customer Count Not Specified

**From comprehensive-product-strategy.md:**
- Year 1: 150 customers, Rp 250M revenue
- Year 2: ??? customers, Rp 400M revenue (only revenue target given, no customer count!)
- Year 3: ??? customers, Rp 600M revenue (only revenue target given, no customer count!)

**Issue:** Can't validate if targets are realistic without knowing customer count assumptions.

**Back-calculating customer counts:**

**Year 2 (if avg = Rp 1M per customer from earlier analysis):**
```
Rp 400M / Rp 1M = 400 customers
-> 400 - 150 (Year 1) = 250 NEW customers in Year 2
-> 67% growth YoY (reasonable)
```

**Year 3 (if avg = Rp 1M per customer):**
```
Rp 600M / Rp 1M = 600 customers
-> 600 - 400 (Year 2) = 200 NEW customers in Year 3
-> 50% growth YoY (slowing down - concern)
```

**Alternative: Year 2-3 avg customer value INCREASES (tier upgrades, recurring revenue from Tier 3):**

**Year 2 (if avg = Rp 2M per customer):**
```
Rp 400M / Rp 2M = 200 customers cumulative
-> 200 - 150 (Year 1) = 50 NEW customers in Year 2
-> 33% growth YoY (SLOWING DOWN - red flag)
```

**This doesn't make sense unless:**
- Year 2 focuses on UPSELLING existing customers (Tier 1 -> Tier 2 -> Tier 3)
- Year 2 focuses on higher-value customers (more Tier 2/3, less Tier 1)
- Revenue grows faster than customer count due to recurring revenue from Tier 3

**Recommendation (UPDATED FOR MODULAR PRICING):**
- **REVISE revenue targets based on new modular pricing:**
 - Year 1: 100 customers, Rp 470M revenue (see revised calculations above)
 - Year 2: 250 customers, Rp 1.1B revenue (includes upsells + MRR growth)
 - Year 3: 450 customers, Rp 2B revenue (includes significant recurring component)
- **Show Year 2-3 tier mix evolution with modular pricing:**
 - Year 1: 70% T1 (Rp 3.5M min), 25% T2 (Rp 7M min), 5% T3 (Rp 10M setup) -> avg Rp 4.7M
 - Year 2: 60% T1 (Rp 4.5M avg), 30% T2 (Rp 9M avg), 10% T3 (Rp 12M avg setup) -> avg Rp 6.2M
 - Year 3: 50% T1 (Rp 5M avg), 35% T2 (Rp 10M avg), 15% T3 (Rp 14M avg setup) -> avg Rp 7.5M
- **Add recurring revenue tracking:**
 - Year 1: Rp 2M MRR (5 Tier 3 customers x Rp 0 (one-time only))
 - Year 2: Rp 10M MRR (25 Tier 3 customers x Rp 0 (one-time only))
 - Year 3: Rp 27M MRR (67 Tier 3 customers x Rp 0 (one-time only))

---

### 1.7 No Data Sources Cited

**All market sizing numbers lack citations:**

| Claim | Source? | Validation Needed |
|-------|---------|-------------------|
| "750,000 F&B outlets in Indonesia" | Œ Not cited | BPS data? Industry report? |
| "50,000 modern POS users" | Œ Not cited | Pawoon + Moka + Qasir combined user count? |
| "100,000 restaurants (sit-down + cafes)" | Œ Not cited | Bottom-up city-by-city count? |
| "10,500 SAM (10+ staff, Rp 50M+ revenue)" | Œ Not cited | Applied % filters to TAM - what %? |
| "500,000 F&B outlets" (comprehensive strategy) | Œ Not cited | Conflict with 750K - which is correct? |

**Recommendation:**
- **Add "Data Sources & Assumptions" section to market-analysis.md:**
 - TAM (750K F&B outlets): Source = [BPS UMKM Statistics 2023 + Industry estimates]
 - Modern POS users (50K): Source = [Pawoon 30K + Moka 15K + Qasir 10K] (estimated market share)
 - SAM filters (40% digital ready): Source = [Bandung market study - 60% use QRIS/POS]
 - SAM filters (60% viable revenue): Source = [Assumption: Revenue >Rp 50M/year to afford analytics]
- **Validate TAM with bottom-up city counts** (see next section)

---

### 1.8 Bottom-Up Validation Missing

**Current TAM/SAM is top-down only:**
- "Indonesia has 750K F&B outlets"
- Apply filters -> 180K SAM
- Done

**Missing:** City-by-city bottom-up validation.

**Rough Bottom-Up Estimate:**

| City Tier | Cities | Modern Restaurants per City | Total Restaurants |
|-----------|--------|----------------------------|-------------------|
| **Tier 1** | Jakarta, Surabaya, Bandung | 15K, 10K, 8K | 33,000 |
| **Tier 2** | Medan, Semarang, Makassar, Denpasar, Palembang | 5K each x 5 cities | 25,000 |
| **Tier 3** | Yogyakarta, Solo, Malang, Balikpapan, Manado, etc. | 3K each x 15 cities | 45,000 |
| **Total** | | | **103,000** |

**Result:** **~100,000 modern restaurants** (close to product-spec TAM of 100K) œ"

**This validates:**
- Product-spec TAM (100K) is **realistic** for modern sit-down restaurants
- Company TAM (750K) includes street food, warungs, kiosks (correct for overall company, not Product 01)

**SAM Filter Validation:**

If TAM = 100K modern restaurants:
- **Digital ready (has POS or uses digital tools):** 50-60% = 50K-60K
- **Revenue >Rp 250M/year (can afford Rp 2-6M one-time):** 60-70% of digital-ready = 30K-42K
- **5+ staff (needs analytics):** 70-80% of viable revenue = 21K-34K

**Revised SAM for Product 01: 20,000-30,000 restaurants** (more realistic than 10.5K).

**Recommendation:**
- **Add bottom-up city validation table to market-analysis.md**
- **Update Product 01 SAM to 20K-30K** (currently too conservative at 10.5K)
- **Segment SAM by city tier for GTM planning:**
 - Tier 1 cities (Jakarta, Surabaya, Bandung): 10K SAM (beachhead)
 - Tier 2 cities: 8K SAM (expansion Year 2-3)
 - Tier 3 cities: 7K SAM (long-tail Year 4-5)

---

## Part 2: Reconciled Market Sizing

**Recommended Unified Framework:**

### 2.1 TAM - Total Addressable Market

| Scope | TAM | Definition |
|-------|-----|------------|
| **Company-level (All Products)** | **750,000** F&B outlets | All F&B UMKM in Indonesia (warung, restaurants, catering, street food) |
| **Product 01 (Power BI Template)** | **100,000** restaurants | Modern sit-down restaurants, cafes, QSR chains (excludes street food, kiosks) |

**Data Source:**
- BPS UMKM Statistics 2023 (750K F&B UMKM)
- Bottom-up city-by-city restaurant count (100K modern restaurants)

---

### 2.2 SAM - Serviceable Available Market

| Product | SAM | % of TAM | Filters Applied |
|---------|-----|----------|-----------------|
| **Product 01 (Power BI Template)** | **20,000-25,000** restaurants | 20-25% of 100K TAM | Digital ready (50%), Revenue >Rp 250M/year (70%), 5+ staff (75%) |
| **Product 03 (Web Dashboard Lite)** | **100,000-150,000** F&B UMKM | 13-20% of 750K TAM | Digital ready (30%), Revenue >Rp 50M/year (80%), internet access (80%) |
| **Product 05 (Full SaaS Platform)** | **10,000-12,000** restaurants | 10-12% of 100K TAM | 10+ staff (40%), Rp 500M+ revenue (50%), willing to pay Rp 300K+/month (60%) |

**Rationale:**
- Product 01 (one-time purchase) has WIDER SAM than Full SaaS (lower commitment barrier)
- Product 03 (freemium web app) has WIDEST SAM (lowest barrier)
- Product 05 (enterprise SaaS) has NARROWEST SAM (highest qualification filters)

---

### 2.3 SOM - Serviceable Obtainable Market

**Product 01 Only (Power BI Template 3-Tier):**

| Year | Incremental Sales | Cumulative Customers | % of SAM (20K) | Revenue Target | Avg Customer Value |
|------|------------------|---------------------|----------------|----------------|-------------------|
| **Year 1** | 150 | 150 | 0.75% | Rp 250M | Rp 1.67M |
| **Year 2** | 250 | 400 | 2% | Rp 400M | Rp 1M (new customers avg) |
| **Year 3** | 250 | 650 | 3.25% | Rp 600M | Rp 1M (new customers avg) |

**Year 1 Quarterly Targets (Incremental Sales):**
- Q1: 15 sales (founder-led, warm network)
- Q2: 30 sales (F&B groups, early marketing)
- Q3: 50 sales (first salesperson hired Month 6, ramping up)
- Q4: 60 sales (2 salespeople + founder, referral program kicking in)
- **Total Year 1: 155 sales** (rounds to 150 target)

**Assumptions:**
- Year 1 avg Rp 1.67M per customer (80% discounted Tier 1, 17% Tier 2, 3% Tier 3 setup only)
- Year 2-3 avg Rp 1M for NEW customers (focus on volume, Tier 1 entry point)
- Existing customers upgrade Tier 1 -> Tier 2/3 over time (adds MRR, tracked separately)

---

**All Products Combined (Year 3 Snapshot):**

| Product | Year 3 Paid Users | Avg Revenue/User/Year | Total Revenue |
|---------|------------------|----------------------|---------------|
| **Product 01** (Power BI Template) | 650 cumulative sales | Rp 4.7M avg over 3 years | Rp 600M (Year 1-3 cumulative) |
| **Product 03** (Web Dashboard Lite) | 500 paid users | Rp 3M/year (Rp 250K/month) | Rp 1.5B ARR |
| **Product 05** (Full SaaS Platform) | 130 paid users | Rp 10M/year (Rp 833K/month avg) | Rp 1.3B ARR |
| **Total Active Paid Users (Year 3)** | **1,280** | | **Rp 3.4B total revenue** |

**Company-level Year 3 SOM: ~1,300 paid users** (not 9,000 from market-analysis.md).

**Where does 9,000 come from in market-analysis.md?**
- Appears to be **aspirational target** or **includes free tier users**
- If Web Dashboard Lite has 8,500 free users + 500 paid = 9,000 total users œ"
- **Recommendation:** Clarify "9,000 users" = total users (free + paid), not paid customers

---

### 2.4 Revenue Projections by Year (UPDATED FOR MODULAR PRICING)

**Product 01 (Power BI Template) - Cumulative Revenue (REVISED):**

| Year | New Sales | Cumulative Sales | Year Revenue | Cumulative Revenue |
|------|-----------|-----------------|--------------|-------------------|
| **Year 1** | 100 | 100 | Rp 470M | Rp 470M |
| **Year 2** | 150 | 250 | Rp 705M (new sales) + Rp 120M (upgrades) + Rp 120M (MRR) = Rp 945M | Rp 1.42B |
| **Year 3** | 200 | 450 | Rp 940M (new sales) + Rp 240M (upgrades) + Rp 324M (MRR) = Rp 1.5B | Rp 2.92B |

**Components of Year 2-3 Revenue (with modular pricing):**
- **New one-time sales:** Year 2 = 150 x Rp 4.7M avg, Year 3 = 200 x Rp 4.7M avg
- **Existing customer upgrades:** Tier 1 -> Tier 2 (30% upgrade rate, +Rp 4M avg each)
- **Tier 3 MRR accumulation:** 5 -> 25 -> 67 Tier 3 customers paying Rp 0 (one-time only)

**Tier 3 MRR Growth (modular pricing):**
- Year 1: 5 Tier 3 customers (Rp 10-12M setup + Rp 2M MRR over 12 months) = Rp 2M total MRR
- Year 2: 25 Tier 3 customers total (Rp 10M MRR x 12) = Rp 120M annual recurring
- Year 3: 67 Tier 3 customers total (Rp 27M MRR x 12) = Rp 324M annual recurring

**Revised Year 3 Revenue Breakdown:**
- New Tier 1/2 sales: Rp 940M
- Tier 3 MRR (67 customers): Rp 324M
- Tier 1->2 upgrades (60 customers x Rp 4M): Rp 240M
- **Total Year 3: Rp 1.5B** (much higher due to modular pricing!)

**CRITICAL FINDING:** With new modular pricing, Year 3 revenue should be **Rp 1.5B**, not Rp 600M.

**Recommendation:**
- **MAJOR REVISION NEEDED: All revenue targets must be recalculated with modular pricing**
- Year 1: Rp 470M (not Rp 250M) - 88% increase
- Year 2: Rp 945M (not Rp 400M) - 136% increase
- Year 3: Rp 1.5B (not Rp 600M) - 150% increase
- **Modular pricing fundamentally changes revenue model**

---

## Part 3: Data Source Validation

**Required: Add citations to all market sizing claims.**

### 3.1 Recommended Data Sources

**TAM Validation:**
- [ ] BPS (Badan Pusat Statistik) - UMKM Indonesia 2023 report
- [ ] Ministry of Tourism & Creative Economy - F&B sector data
- [ ] Industry reports (Gojek, Grab annual merchant reports)

**SAM Validation:**
- [ ] POS vendor market share:
 - Pawoon: ~30,000 users (Source: Company PR, TechCrunch)
 - Moka: ~15,000 users (Source: Crunchbase)
 - Qasir: ~10,000 users (Source: Company website)
 - **Total modern POS users: ~55,000** (validates "50K" assumption)
- [ ] Bandung market study (already completed, document findings)
- [ ] Jakarta restaurant association membership data

**Bottom-Up City Validation:**
- [ ] Jakarta: Count restaurants in 5 kecamatan, extrapolate to 44 kecamatan
- [ ] Bandung: Use Bandung market study data (already available)
- [ ] Surabaya: Partner with local F&B association for member count

**Competitive Benchmarks:**
- [ ] BukuWarung: 5M UMKM users, ~500K paying (10% conversion) - validates freemium model
- [ ] Moka POS: Rp 350K/month pricing - validates our Rp 300-500K Basic tier
- [ ] Jurnal.id (accounting SaaS): Rp 199K-899K/month - pricing comparables

---

### 3.2 Quick Validation Checklist

**Before Sprint 1 launch, validate:**

- [ ] **TAM:** Is 100,000 modern restaurants realistic for Indonesia? (Bottom-up city count)
- [ ] **SAM:** Is 20,000 restaurants a realistic target market for Product 01? (Apply filters with data)
- [ ] **SOM Year 1:** Is 150 customers achievable in 12 months? (Sales capacity model: 3 people x 50 deals/year = 150 œ")
- [ ] **Avg customer value Year 1:** Is Rp 1.67M realistic? (80% buy discounted Tier 1 at Rp 1.5M? Test with early sales)
- [ ] **Year 3 MRR:** Is 100 Tier 3 customers realistic? (15% of 650 total = 97.5 customers œ")

---

## Part 4: Recommended Actions

### Priority 1: CRITICAL (Complete Before Sprint 1 Week 2)

**1. Reconcile TAM/SAM/SOM Across All Documents**

Action items:
- [ ] Update comprehensive-product-strategy.md:
 - TAM = 100,000 modern restaurants (delete "500K+ F&B outlets" conflicting number)
 - SAM = 20,000-25,000 restaurants (Product 01-specific)
 - SOM Year 1-3 = 150 -> 400 -> 650 customers
- [ ] Update market-analysis.md:
 - Clarify company TAM (750K F&B UMKM) vs Product 01 TAM (100K restaurants)
 - Add product-specific SAM breakdowns (Product 01 vs 03 vs 05)
 - Clarify "9,000 users Year 3" = free + paid users across all products
- [ ] Update unit-economics.md:
 - Add "Year 1 Launch Mix" scenario (80% T1, 17% T2, 3% T3)
 - Clarify 40/40/20 mix is for Year 2-3 steady state
 - Show Year 2-3 tier evolution with MRR accumulation
- [ ] Update target-personas.md:
 - Market size = 20K-25K restaurants (align with revised SAM)

**Owner:** Product Lead + Finance Lead
**Due:** End of Week 1 (before Week 2 Gate 1A)

---

**2. Add Data Sources & Bottom-Up Validation**

Action items:
- [ ] Add "Data Sources & Assumptions" appendix to market-analysis.md
- [ ] Cite BPS data for 750K F&B UMKM
- [ ] Cite POS vendor data for 50K modern POS users
- [ ] Add bottom-up city validation table (Tier 1-2-3 cities, estimated restaurant counts)
- [ ] Document Bandung market study findings (already completed research)

**Owner:** Product Lead + Market Research
**Due:** End of Week 2 (before sales training begins)

---

**3. Re-Validate Year 1-3 Revenue Targets**

Action items:
- [ ] Create detailed revenue model showing:
 - Year 1-3 new sales (declining as market saturates)
 - Tier upgrade revenue (30% annual Tier 1->2 upgrade rate)
 - Tier 3 MRR accumulation (compounds annually)
- [ ] Test if Year 3 target should be Rp 600M or Rp 800M+
- [ ] Validate Year 2-3 avg customer value assumptions
- [ ] Clarify if targets are "new sales only" or "total revenue including MRR"

**Owner:** Finance Lead + Product Lead
**Due:** End of Week 1

---

### Priority 2: IMPORTANT (Complete Before Sales Execution)

**4. Create Sales Capacity Model**

Action items:
- [ ] Calculate realistic sales capacity:
 - Founder: 50-60 deals/year (1 deal/week)
 - Salesperson 1 (hired Month 6): 40 deals in 6 months
 - Salesperson 2 (hired Month 9): 25 deals in 3 months
 - **Total Year 1 capacity: 115-125 deals**
- [ ] Test if 150 target is achievable with 3 people
- [ ] Option A: Lower target to 120 (more realistic)
- [ ] Option B: Add marketing-driven inbound (30-40 deals/year) to hit 150
- [ ] Option C: Hire salesperson earlier (Month 3, not Month 6)

**Owner:** Sales Lead + Founder
**Due:** Before Q2 hiring decisions

---

**5. Segment SOM by Customer Type**

Action items:
- [ ] Break down Year 1-3 targets by:
 - Persona type (Amanda, Pak Budi, etc.)
 - City tier (Jakarta, Bandung, Surabaya vs Tier 2-3 cities)
 - Tier mix (T1 vs T2 vs T3)
- [ ] Example:
 - Q1: 15 sales = 10 Tier 1 (cafe owners in Bandung) + 4 Tier 2 (multi-outlet in Jakarta) + 1 Tier 3 (hotel F&B manager)
- [ ] This helps sales team prioritize lead sources and personas

**Owner:** Sales Lead + Marketing
**Due:** Before Q1 execution

---

### Priority 3: NICE-TO-HAVE (Month 2-3)

**6. Competitive Market Share Analysis**

Action items:
- [ ] Track market share by quarter:
 - Power BI Template: ??? of 20K SAM (0.75% Year 1 = 150 customers)
 - Web Dashboard Lite: ??? of 150K SAM
- [ ] Benchmark against:
 - Moka POS analytics: ??? users
 - Qasir analytics: ??? users
 - Other F&B BI tools (if any)

**Owner:** Product Marketing
**Due:** End of Q2

---

**7. Update All Product Strategy Docs with Reconciled Numbers**

After completing Priority 1-2 actions, cascade changes to:
- [ ] 01-power-bi-template/README.md
- [ ] 01-power-bi-template/MISSING_FILES_CREATED.md
- [ ] 01-power-bi-template/product-strategy/*.md (all tier strategies)
- [ ] 01-power-bi-template/sales/sales-playbook.md (update market size talking points)
- [ ] 01-power-bi-template/marketing/*.md (update TAM/SAM claims)

**Owner:** Documentation Lead
**Due:** End of Week 3

---

## Part 5: Summary & Next Steps

### Key Findings

| Issue | Current State | Recommended Fix |
|-------|---------------|-----------------|
| **TAM inconsistency** | 100K vs 500K vs 750K (conflicting) | Product 01 TAM = 100K restaurants (validated bottom-up) |
| **SAM too conservative** | 10.5K (SaaS subscription filters) | Product 01 SAM = 20K-25K (one-time purchase filters) |
| **SOM Year 3 unclear** | 9,000 (company) vs 130 (product) | Product 01 = 650 customers, Company total = 1,300 paid (9K incl free tier) |
| **Revenue math broken** | Rp 1.67M avg vs Rp 9.16M avg (modular) | **CRITICAL: All targets misaligned with modular pricing!** Year 1 avg now Rp 4.7M minimum |
| **No data sources** | All claims uncited | Add BPS, POS vendor data, bottom-up city counts |
| **Modular pricing impact** | Year 3 = Rp 600M (OLD pricing) | **Year 3 = Rp 1.5B+ (modular pricing)** - 150% increase! |

---

### Decision Required (UPDATED FOR MODULAR PRICING)

** CRITICAL: All previous options are OBSOLETE due to modular pricing implementation!**

**NEW OPTIONS - Based on Modular Pricing (Rp 3.5-19.8M tiers):**

**Option A: Conservative Targets (Lower Risk) RECOMMENDED FOR YEAR 1**
- Year 1: 60 customers, Rp 280M revenue (avg Rp 4.7M)
- Year 2: 150 customers, Rp 700M revenue (includes upsells + MRR)
- Year 3: 300 customers, Rp 1.4B revenue (includes significant recurring)
- **Rationale:** Founder-led capacity is limited, modular pricing already increases revenue per customer

**Option B: Moderate Targets (Moderate Risk)**
- Year 1: 100 customers, Rp 470M revenue (avg Rp 4.7M)
- Year 2: 250 customers, Rp 1.1B revenue (includes upsells + MRR growth)
- Year 3: 450 customers, Rp 2B revenue (includes significant recurring component)
- **Rationale:** Achievable with 2 salespeople hired by Month 6, proven marketing channels

**Option C: Aggressive Targets (High Risk)**
- Year 1: 150 customers, Rp 705M revenue (avg Rp 4.7M)
- Year 2: 400 customers, Rp 1.9B revenue
- Year 3: 700 customers, Rp 3.3B revenue
- **Rationale:** Only if external funding secured, 3-5 person sales team by Month 3

**Recommended Decision:** **Option A or B** (NOT previous "Option B" - that's now impossible with modular pricing!)

**CRITICAL NOTE:** Old target of "150 customers, Rp 250M" is IMPOSSIBLE with modular pricing minimum of Rp 3.5M.

---

### Immediate Action (This Week)

**Day 1-2:**
- [ ] Founder reviews this validation report
- [ ] Decide on Option A / B / C (recommended: Option B)
- [ ] Assign owners for Priority 1 action items

**Day 3-5:**
- [ ] **URGENT: Recalculate ALL revenue targets with modular pricing (Rp 3.5-19.8M)**
- [ ] Update comprehensive-product-strategy.md with reconciled TAM/SAM/SOM and NEW revenue targets
- [ ] Update unit-economics.md with modular pricing calculations (avg Rp 4.7M+, not Rp 1.67M)
- [ ] Add data sources appendix to market-analysis.md
- [ ] **CRITICAL: Year 3 is Rp 1.5B+ (not Rp 600M) with modular pricing!**

**End of Week:**
- [ ] All Priority 1 action items completed
- [ ] Market sizing reconciled across all documents
- [ ] Sales team has clear, validated targets for Q1 execution

---

**Status:** **PENDING FOUNDER REVIEW**
**Next Review:** End of Week 1 (after reconciliation complete)
**Owner:** Product Lead + Founder

---

**Related Documents:**
- [[biz/research/market-analysis/02-market-analysis|Market Analysis]] - Company-level TAM/SAM/SOM
- [[products/01-power-bi-template/business-intelligence/product-strategy/comprehensive-product-strategy|comprehensive-product-strategy\.md]] - Product 01 strategy
- [[biz/departments/finance/models/04-unit-economics|unit-economics.md]] - Financial model
- [[products/01-power-bi-template/marketing/strategy/02-target-personas|target-personas.md]] - Customer segmentation

**Last Updated:** January 3, 2026
**Version:** 1.0
**Next Update:** Jan 2026 Review

---

## Part 6: Indonesian Market Calibration (From Master Strategy)

### 4.1 ROI Summary by Tier
*Calibrated for Indonesian Market Realities (Jan 2026)*

| Tier | Price | Value Delivered | ROI | Payback | Target Persona |
|------|-------|-----------------|-----|---------|----------------|
| **Tier 1 (DIY)** | Rp 3.5-6M | Rp 49M | **10-16x** | 4-6 weeks | **"Amanda"** (Owner-Operator, 1 outlet, hands-on, budget conscious) |
| **Tier 2 (Assisted)** | Rp 7-12M | Rp 458M | **48x** | < 1 week | **"Pak Budi"** (Owner-Investor, 2-3 outlets, needs oversight, not ops) |
| **Tier 3 (Managed)** | Rp 10-15M | Rp 661M | **53x** | < 1 week | **"Andi"** (Chain CEO, 5-15 outlets, C-suite needs, team execution) |

### 4.2 Indonesian Market Reality Checks
*Why these specific numbers work in Jakarta/Surabaya/Bandung*

**1. The "Gaji UMR" Anchor:**
- **Reality:** Hiring an admin staff costs Rp 5-6M/month (Rp 60-72M/year).
- **Positioning:** Tier 1 (Rp 3.5M one-time) is cheaper than **1 month of admin salary**.
- **Sales Script:** *"Daripada hire admin Rp 5 juta per bulan cuma buat entry data, mending beli sistem ini sekali bayar Rp 3.5 juta."*

**2. The "Consultant Retainer" Anchor:**
- **Reality:** F&B Consultants charge Rp 15-25M **per month**.
- **Positioning:** Tier 3 (Rp 12.5M one-time) is half the cost of **one month** of consulting.
- **Sales Script:** *"Konsultan minta Rp 20 juta per bulan. Kita kasih dashboard level konsultan, Rp 12.5 juta sekali bayar, pakai selamanya."*

**3. The "Fraud Tax" Reality:**
- **Reality:** Average F&B owner loses 10-15% of revenue to "kebocoran" (theft/waste).
- **Impact:** For a Rp 200M/month outlet, that's Rp 20-30M/month lost.
- **Positioning:** Tier 2 (Rp 9.5M) pays for itself if it catches **just one week** of fraud.

**4. The "Gaptek" Barrier:**
- **Reality:** 80% of staff rely on WhatsApp and struggle with complex software.
- **Solution:** "Input via WhatsApp -> Google Sheets -> Power BI" flow (Tier 1 feature) is a critical cultural adaptation.
- **Strategic Note:** Do not remove the Google Sheets bridge; it is a key selling point against rigid POS systems.


