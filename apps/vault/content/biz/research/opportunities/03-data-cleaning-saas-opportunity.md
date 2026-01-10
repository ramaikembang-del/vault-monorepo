# Automatic Data Cleaner - Micro-SaaS Opportunity Analysis

**Owner:** Strategy / Product
**Created:** 2025-12-29
**Status:** Initial Exploration
**Type:** New Product Idea / Market Opportunity

---

## Related Documents
- [[biz/research/opportunities/02-growth-opportunities|Growth Opportunities]]
- [[biz/research/customer-insights/03-jobs-to-be-done|Jobs To Be Done]]

---

## Executive Summary

Exploring a Micro-SaaS opportunity for automatic data cleaning, inspired by recurring data quality issues observed in F&B analytics customers. This document analyzes the opportunity, competitive landscape, and potential approaches.

**Key Insight:** Data cleaning as a standalone generic tool faces heavy competition, but vertical-specific cleaners (especially tied to existing F&B business) show promise.

---

## The Problem

### Universal Pain Point
- **Data cleaning = 60-80% of data work** (painful, repetitive, expensive)
- Every business with data faces this challenge
- High willingness to pay if solution actually works
- Manual cleaning in Excel/Python is time-consuming and error-prone

### Specific Pain Points (From F&B Customer Feedback)
Based on our Tier 1 customer onboarding experiences:

1. **Duplicate Staff Names**
 - Symptom: Staff leaderboard shows same person twice (typo: "Budi" vs "Budii")
 - Current fix: Manual search-and-replace in Power Query

2. **Date Format Inconsistency**
 - Symptom: Mixed DD/MM/YYYY and MM/DD/YYYY formats
 - Current fix: Manual transformation in Power Query
 - Impact: Causes calculation errors, crashes dashboards

3. **Missing Product Categories**
 - Symptom: Product mix charts show "Uncategorized"
 - Current fix: Export unique products, manually categorize, re-import

4. **POS Export Encoding Issues**
 - Symptom: Indonesian characters (ñ, é) appear as gibberish
 - Current fix: Manual CSV encoding conversion

---

## Competitive Landscape

### Crowded Generic Market

**Existing Solutions:**
- **OpenRefine** - Free, powerful, open-source
- **Trifacta, Talend, Alteryx** - Enterprise data cleaning platforms
- **Python/R libraries** (pandas, tidyverse) - For technical users
- **Power Query** (Excel/Power BI) - Built-in Microsoft solution
- **ChatGPT/Claude** - Can clean small datasets via prompts

**Challenge:** Hard to differentiate in generic "clean any data" space

---

## Viable Approaches

### Approach 1: Vertical-Specific Data Cleaner

#### Option A: "POS Data Cleaner for Restaurants" (Indonesia Focus)

**Product Concept:** "CleanMyPOS.id"
- **Target:** Indonesian restaurant owners using Moka, Pawoon, Qasir, Olsera
- **Value Prop:** "Upload messy POS CSV → Get clean data in 60 seconds"
- **Unique Angle:** Knows Indonesian POS quirks, Indonesian language characters, F&B-specific data issues

**Pricing Models:**
- Freemium: 10 cleanups/month free, Rp 150K unlimited
- Pay-per-use: Rp 10K per cleanup
- Subscription: Rp 100-150K/month unlimited

**Go-to-Market:**
- Partner with POS providers (Moka, Pawoon)
- Sell to their merchant base
- Integrate into existing F&B analytics product

**Market Size:**
- ~50,000+ restaurants in Indonesia using digital POS
- If 5% adopt = 2,500 customers
- At Rp 150K/month = Rp 375M MRR potential

#### Option B: "Shopify Order Data Fixer"

**Product Concept:** "ShopifyCleanup"
- **Target:** E-commerce sellers using Shopify
- **Value Prop:** "Export from Shopify → Clean → Import to QuickBooks (no errors)"
- **Pain Point:** Returns, refunds, partial shipments create messy data

**Pricing:** Rp 200K/month unlimited cleanups

**Market Size:**
- 4M+ Shopify stores globally
- Even 0.1% = 4,000 potential customers

**GTM:**
- Shopify app store
- Facebook groups for Shopify sellers
- Instagram ads targeting e-commerce

#### Option C: "Accounting Export Cleaner" (Indonesia Accounting Software)

**Product Concept:** "AccountingCleanID"
- **Target:** SMBs using Accurate, Jurnal, Zahir
- **Value Prop:** "Export → Clean → Import to Google Sheets (no formatting errors)"
- **Pain Point:** Accounting exports have formatting issues for Excel analysis

**Pricing:** Rp 100-200K/month

**GTM:**
- Partner with accounting software providers
- Sell to accountants/bookkeepers who serve multiple clients

---

### Approach 2: Developer API Tool

**Product Concept:** "DataFixAPI"
- **Target:** Developers building SaaS that accepts user data uploads
- **Value Prop:** "Add 1 line of code, never worry about messy CSV uploads again"
- **API-first:** RESTful API for programmatic data cleaning

**Pricing:** Usage-based
- Rp 5K per 1,000 rows cleaned
- Rp 500K/month for 100K rows included

**GTM:**
- Developer communities (GitHub, Stack Overflow)
- SaaS founders building data-heavy products
- Integration partners (Zapier, Make)

**Market Size:**
- Thousands of SaaS products need this
- High-value B2B customers

---

### Approach 3: Feature in Existing F&B Product (Lowest Risk)

**Product Code:** A0 - POS Data Prep Service

**Integration Strategy:**
Add as Tier 0.5 to existing product lineup:
- **A0 (NEW):** POS Data Prep Service - Rp 100K one-time
- **A1:** Power BI Dashboard - Rp 2-3M one-time
- **R1:** Template Support - Rp 75K/month
- **E1:** Web Dashboard Lite - Freemium

**What It Includes:**
- "Send us your messy Moka/Pawoon export"
- "Get back clean CSV ready for Power BI in 24 hours"
- Fixes: Duplicates, date formats, encoding, categorization

**Benefits:**
- **Reduces Tier 1 support burden** (documented in tier-1-delivery-sop.md)
- **Extra revenue** from existing customer base
- **Validates demand** before building standalone product
- **Lower customer acquisition cost** (sell to existing pipeline)

**Target Market:**
- Phase 1 Mikro customers who buy A1 but struggle with data setup
- 30-40% of Tier 1 DIY customers struggle with data prep

**Validation Metrics:**
- If 20+ customers pay for A0 separately → spin out as standalone product
- If <10 customers pay → just include in A1 setup assistance

---

## Strategic Questions to Answer

### 1. **Who has this pain acutely?**
 - "Data is messy" = universal but vague, hard to sell
 - "My Moka POS export crashes Power BI every time" = specific, acute, sellable

### 2. **What would they pay?**
 - One-time cleanup: Rp 50K-200K per dataset?
 - Subscription: Rp 100-300K/month for unlimited cleaning?
 - Per-record: Rp 10/row cleaned?
 - **Need validation interviews to confirm**

### 3. **Why not just use Excel/Python?**
 **Target market characteristics:**
 - Can't code → API won't work for them
 - Don't have time → manual Excel cleaning is painful
 - Need it repeatedly → subscription makes sense
 - Value speed and reliability over cost

### 4. **How do you prove it works?**
 **Critical success factor = "Before/After" demo:**
 - Upload messy data → show clean output in 30 seconds
 - Visual comparison of before/after
 - Accuracy metrics (% of errors fixed)
 - Free tier to prove value

---

## Risk Analysis

### Risk 1: "AI will clean data automatically"
**Threat:** ChatGPT/Claude can already clean small datasets via prompts

**Mitigation:**
- Focus on **speed** (1-click vs multi-step prompting)
- **Reliability** (consistent results, no hallucinations)
- **Domain knowledge** (POS-specific cleaning rules)
- **Scale** (handle 100K+ row datasets, LLMs have token limits)

### Risk 2: "It's a feature, not a product"
**Threat:** Most data tools will add auto-cleaning eventually

**Mitigation:**
- **Do it first** - first-mover advantage in vertical
- **Do it better** - domain expertise (Indonesian F&B)
- **Own a niche** - "best POS cleaner" vs "general cleaner"

### Risk 3: "Free tools exist"
**Threat:** OpenRefine is free and powerful

**Mitigation:**
- **Easier UX** - OpenRefine has steep learning curve
- **No technical knowledge needed** - upload/download workflow
- **Faster** - optimized for specific use case
- **Value = time saved** not "free vs paid"

---

## Recommended Path Forward

### Phase 1: Validate Within Existing Business (Week 1-2)

**Add A0 to F&B Product:**
1. **Positioning:** "POS Data Prep Service" (A0)
2. **Pricing:** Rp 100K one-time
3. **Delivery:** Manual cleaning (Python script) in 24 hours
4. **Target:** Next 10 Tier 1 customers who buy A1

**Success Criteria:**
- 5+ customers pay for A0 = demand validated
- <2 customers pay = fold into A1 as free setup assistance

### Phase 2: Build MVP (Week 3-4, if Phase 1 validates)

**Minimum Viable Product:**
- Simple upload form (web app)
- Python pandas cleaning script (backend)
- Return clean CSV download
- Processing time: <60 seconds for typical POS export

**Tech Stack:**
- Frontend: Simple HTML form (no React needed yet)
- Backend: Python Flask + pandas
- Hosting: Vercel/Railway (cheap, fast deploy)
- Storage: Temporary (delete files after 24 hours)

**MVP Scope:**
- Fix: Date formats, duplicates, encoding
- Support: Moka, Pawoon CSV exports only
- Limit: 10K rows per upload (expand later)

### Phase 3: Market Validation (Week 5-8, if MVP works)

**Validation Tests:**

1. **Indonesian F&B Facebook Groups:**
 Post:
 > "Siapa yang pernah struggle dengan export data dari Moka/Pawoon yang berantakan? Kalau ada tool yang bisa auto-clean dalam 1 menit, mau bayar berapa?"

2. **Direct Customer Interviews (5 interviews):**
 Questions:
 - "Before using Power BI, do you struggle cleaning your POS data?"
 - "How much time do you spend monthly on data cleaning?"
 - "Would you pay Rp 100K for us to clean it for you?"
 - "Would you pay Rp 150K/month for unlimited cleaning?"

3. **Landing Page Test:**
 - Build landing page: "CleanMyPOS.id"
 - Run Facebook ads: Rp 500K budget
 - Measure: Email signups, "Request Demo" clicks
 - Target: 50+ signups = good signal

**Go/No-Go Decision Criteria:**
- Go if: 10+ customers pay, 50+ landing page signups, strong interview feedback
- No-Go if: <5 customers pay, weak demand signals, customers say "I'll just do it myself"

### Phase 4: Spin-Out Decision (Month 3, if validated)

**If demand is strong, spin out as separate product:**

**Product:** "CleanMyPOS.id" (standalone)
- Separate from F&B analytics business
- Focus 100% on data cleaning vertical
- Expand to other POS systems (not just F&B)

**Alternative: Keep as Feature**
If demand is moderate but not explosive:
- Keep A0 as part of F&B product suite
- Don't spin out
- Use as customer acquisition tool for A1/E1

---

## Connection to Existing F&B Strategy

### How This Fits

**Current Product Suite:**
- **A1:** Power BI Template (Asset, one-time Rp 2-3M)
- **R1:** Template Support (Retention, Rp 75K/month)
- **E1:** Web Dashboard Lite (Execution, freemium)

**Proposed Addition:**
- **A0:** POS Data Prep (Asset, one-time Rp 100K)

**Strategic Fit:**
- **Reduces friction** for A1 adoption (data prep is a blocker)
- **Extra revenue** from existing customer acquisition efforts
- **Lower support costs** (fewer "my data won't load" tickets)
- **Upsell path:** A0 → A1 → R1 → E1

**Customer Journey Enhancement:**
1. Customer struggles with messy POS data
2. Buys A0 (Rp 100K) → clean data in 24h
3. Sees value of clean data → upsells to A1 (Rp 2-3M)
4. Wants ongoing updates → subscribes to R1 (Rp 75K/month)

---

## Financial Projections (Speculative)

### Scenario A: Feature in F&B Product (Conservative)

**Assumptions:**
- 20% of A1 customers also buy A0
- 100 A1 customers in Year 1
- 20 A0 customers at Rp 100K each

**Revenue:**
- A0 Revenue: Rp 2M (one-time)
- Modest contribution, mainly reduces support costs

### Scenario B: Standalone Product (Optimistic)

**Assumptions:**
- 500 paying customers in Year 1
- Rp 150K/month average (freemium + paid mix)
- 20% conversion from free tier

**Revenue:**
- MRR: Rp 75M (500 × Rp 150K)
- ARR: Rp 900M (~$56K USD)

**Market Validation Needed:** This is highly speculative without customer validation

---

## Next Steps

### Immediate Actions (This Week)

1. **Customer Interviews (3-5 interviews)**
 - Talk to current F&B pipeline prospects
 - Ask about data cleaning pain
 - Test willingness to pay Rp 100K

2. **Facebook Group Test**
 - Post in Indonesian F&B communities
 - Gauge interest and pricing expectations

3. **Competitive Analysis**
 - Research: What are Moka/Pawoon users doing for data cleaning?
 - Identify: Any existing Indonesian data cleaning services?

### If Validation is Positive (Week 2-4)

4. **Build A0 MVP**
 - Manual service first (Python script, 24h turnaround)
 - Automate later if demand is strong

5. **Add to F&B Product Suite**
 - Update product docs
 - Add to pricing page
 - Offer to next 10 A1 customers

6. **Track Metrics**
 - Conversion rate: A0 → A1
 - Support ticket reduction
 - Customer satisfaction with data quality

---

## Open Questions

1. **Pricing Validation**
 - Is Rp 100K too high/low for one-time cleaning?
 - Would customers prefer subscription (Rp 50K/month unlimited)?

2. **Service vs Product**
 - Start with manual service (us cleaning manually)?
 - Or build automated tool from day 1?

3. **Scope Boundaries**
 - Only F&B POS exports, or expand to e-commerce (Shopify, Tokopedia)?
 - Only Indonesian market, or Southeast Asia?

4. **Business Model**
 - One-time fee (easier sell, lower LTV)?
 - Subscription (harder sell, higher LTV)?
 - Freemium (acquire users, convert 10-20%)?

5. **Go-to-Market**
 - Bundle with A1 as "complete onboarding package"?
 - Sell separately as standalone service?
 - Both (customer chooses)?

---

## Decision Framework

### When to Pursue This Aggressively

 **Pursue if:**
- 10+ customers pay Rp 100K+ for data cleaning in next 2 months
- Strong qualitative feedback: "This saved me hours!"
- Clear willingness to pay more (e.g., customers ask for subscription option)
- Low effort to deliver (Python script works reliably)

### When to Deprioritize

 **Deprioritize if:**
- <5 customers pay in 2 months
- Customers say "I can do this myself in Excel"
- High support burden (too many edge cases to handle)
- Core F&B product (A1/E1) needs more focus

---

## Conclusion

**Verdict: Promising as a feature, risky as standalone product (yet)**

**Recommended Approach:**
1. **Start small:** Validate as A0 feature in F&B product
2. **Move fast:** Test with next 10 customers this month
3. **Stay flexible:** If demand exceeds expectations, spin out
4. **Keep narrow:** "POS Cleaner for Indonesian Restaurants" not "Universal Data Cleaner"

The vertical-specific angle (POS data for Indonesian F&B) is the key differentiator. Generic data cleaning is a commodity; domain expertise is defensible.

---

**Related Documents:**
- [[products/01-power-bi-template/01-power-bi-template|01 - Power BI Template]] - Could integrate as A0
- See operations documentation - Tier 1 delivery data cleaning pain points
- [[biz/strategy/market-analysis/02-market-segmentation|Market Segmentation]] - Phase 1 Mikro target market
- [[biz/research/opportunities/02-growth-opportunities|Growth Opportunities]] - Other market expansion ideas

**Status:** Awaiting customer validation before proceeding

**Next Review:** After 5 customer interviews and Facebook group test (Week 2)
