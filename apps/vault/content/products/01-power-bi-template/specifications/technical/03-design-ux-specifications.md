# Design & UX Specifications - Technical Requirements

**Product:** A1 - Complete F&B Data Ecosystem
**Type:** Technical Specification (Developer Requirements)
**Owner:** Design + Engineering
**Last Updated:** December 31, 2024

---

## Purpose

This document contains **prescriptive technical requirements** for visual design, UX design, onboarding experience, and performance standards.

**For strategic reasoning (WHY these design decisions):** See [[products/01-power-bi-template/product-strategy/core/01-master-strategy|01-master-strategy.md]] Section 10: "Design Excellence Strategy"

**This document specifies WHAT to build and HOW to implement.**

---

## 1. Visual Design Principles

### Color Palette

**Primary Colors:**
```
Brand Orange: #FF6B35
Success Green: #2ECC71
Warning Amber: #F39C12
Danger Red: #E74C3C
```

**Secondary Colors:**
```
Background: #F8F9FA
Text Primary: #2C3E50
Text Secondary:#7F8C8D
Accent Blue: #3498DB
```

**Usage Rules:**
- Revenue metrics: Accent Blue (#3498DB)
- Cost metrics: Danger Red (#E74C3C)
- Profit metrics: Success Green (#2ECC71)
- Conditional formatting: Traffic light system (Green/Amber/Red)
- All backgrounds: #F8F9FA (off-white)
- Body text: #7F8C8D, Headers: #2C3E50

---

### Typography

**Headers:**
- Font: **Segoe UI Bold** (built-in Power BI, no licensing issues)
- Size: 18-24pt for page titles, 14-16pt for section headers
- Color: #2C3E50 (dark, readable)

**Body Text:**
- Font: **Segoe UI Regular**
- Size: 11-12pt
- Color: #7F8C8D (softer than pure black)

**Numbers (KPIs):**
- Font: **Segoe UI Semibold**
- Size: 28-36pt for main KPIs, 18-24pt for secondary
- Color: Conditional (green if good, red if bad)

**Rule:** No font smaller than 10pt (must be readable on 13" laptop)

---

### Dashboard Layout (The "F-Pattern")

Users scan in F-pattern (top-left -> top-right -> down-left). Put important stuff there.

**Template Structure:**

```

 LOGO DASHBOARD TITLE Last Updated Header (always visible)


 KPI #1 KPI #2 KPI #3 KPI #4 Top Priority (big numbers)
 (Revenue) (Food Cost) (Customers) (Growth)



 Main Chart (75% width) Insights Primary Focus
 (25% width)
 [Large trend line/bar chart] - Observation 1
 - Observation 2
 - Action item



 Supporting Chart 1 Supporting Chart 2 Secondary Info
 (e.g., Top Products) (e.g., Peak Hours)


```

**Whitespace Rule:** 20% of page should be empty (breathing room)

---

### Chart Selection (Right Chart for Right Job)

**Revenue Trend:**
- **Line Chart** (with area fill) - shows trend clearly
- NOT pie chart (can't show time)
- NOT table (too many numbers, no visual)

**Product Performance:**
- **Horizontal Bar Chart** (sorted descending) - easy to compare
- NOT vertical bars (hard to read long product names)

**Food Cost Breakdown:**
- **Treemap** or **Waterfall Chart** - shows composition + size
- NOT donut chart (hard to compare segments)

**Staff Performance:**
- **Leaderboard Table** (with conditional formatting) - gamification
- **Small Multiples** (one card per staff) - personality

**General Rules:**
- Max 3 charts per page (cognitive overload otherwise)
- Every chart must answer ONE question (not multiple)
- Use consistent colors (revenue = blue, cost = red, profit = green)

---

## 2. UX Design (Make It Stupid Simple)

### Navigation (3-Click Rule)

**Rule:** Any insight should be reachable in maximum 3 clicks.

**Implementation:**
```
Homepage (Executive Summary)
 ↓
[Tab 1: Revenue] [Tab 2: Menu] [Tab 3: Staff] [Tab 4: Customers]
 ↓
Drill-down (click chart -> see detail)
```

**Tab Design:**
- Icon + Text (not just text) - visual cue
- Max 5 tabs (more = overwhelming)
- Tab order = priority (most important leftmost)

---

### Tooltips (Contextual Help)

**Every visual should have tooltip:**

**Bad Tooltip (Default):**
```
"Revenue: Rp 35,000,000"
```

**Good Tooltip (Ours):**
```

 Tanggal: 15 Des 2025

 Revenue: Rp 35 juta
 vs Target: Rp 40 juta (-12.5%)
 vs Bulan Lalu: Rp 32 juta (+9.4%)

 Insight:
 Revenue naik dari bulan lalu,
 tapi masih di bawah target.

 Action:
 Check promo effectiveness

```

**Formula:**
- Show number + context (vs target, vs last period)
- Give interpretation ("naik" vs "turun")
- Suggest action (what to do next)

---

### Interactivity (Make It Playful)

**Slicers (Filters):**
- Make them VISIBLE (top of page)
- Use visual slicers (tiles, not dropdown)
- Default to "All" (don't pre-filter)

**Example:**
```
 Periode: [Minggu Ini] [Bulan Ini] [Bulan Lalu] [Custom]
 Outlet: [Semua] [Outlet A] [Outlet B] [Outlet C]
```

**Drill-Through:**
- Click product name -> see product detail page
- Click staff name -> see staff performance card
- Click date -> see daily breakdown

**Visual Feedback:**
- Hover effect (subtle shadow)
- Click effect (color change)
- Loading indicator (when filtering)

---

### Error Handling (Graceful Degradation)

**Scenario: No Data**

**Bad:**
```
[Empty chart with error text: "No data available"]
```

**Good:**
```


 Data Belum Tersedia

 Tips:
 1. Import file Excel
 2. Klik Refresh
 3. Data akan muncul

 [Panduan Import]


```

**Scenario: Data Error**

**Bad:**
```
"Error: CALCULATE function failed"
```

**Good:**
```
"Ada masalah dengan data.
Coba:
1. Re-export dari POS
2. Check format tanggal (DD/MM/YYYY)
3. Hubungi support: wa.me/xxx"
```

---

## 3. Onboarding Experience

### Onboarding Flow Requirements

**Step 1: Welcome Page (Built-in)**
```

 Selamat Datang!

 Terima kasih beli Power BI Template.

 First Steps:
 Download sample data (5 menit)
 Import ke dashboard (2 menit)
 Explore dashboard (3 menit)

 Total: 10 menit = Dashboard ready!

 [ Start Tutorial] [ Sample Data]

```

**Step 2: Sample Data Pre-loaded**

**Requirement:** Template MUST ship with demo data already connected.

**Demo Data Specifications:**
- Business name: "Coffee Shop ABC" (fictional)
- Data range: 3 months (90 days)
- Revenue level: Rp 30M/month (typical SME)
- Products: 15-20 items (mix of food & beverages)
- Staff: 5-7 people
- Transactions: ~1000 per month

**Step 3: Import Guide (Video + PDF)**

**2-Minute Video:**
```
0:00-0:30: Show POS export (Moka example)
0:30-1:00: Show "Get Data" -> Excel -> Import
1:00-1:30: Show Refresh -> Dashboard updates
1:30-2:00: "Selamat! Dashboard ready."
```

**PDF Checklist:**
```
 Export data POS (format CSV atau Excel)
 Buka Power BI Desktop
 Klik "Get Data" -> "Excel"
 Pilih file yang baru di-export
 Klik "Load"
 Klik "Refresh" di ribbon
 Done! Dashboard updated.
```

---

### Progressive Disclosure

**Technical Implementation:**

**Initial State (First 3 uses):**
- Visible tabs: Executive Summary only
- Hidden tabs: Revenue Deep Dive, Menu, Staff, Customers
- Trigger: After 3rd data refresh -> Show unlock prompt

**Intermediate State (Week 2):**
- Unlock: Revenue Deep Dive tab
- Display: Contextual insight tooltip
- Template: "Top 5 products hari ini: [dynamic list]"

**Full State (Week 3+):**
- Unlock: All tabs visible
- Display: Community invite prompt
- Template: "Sekarang kamu pro! Join WhatsApp community?"

**Implementation Method:**
- Use Power BI bookmarks for tab visibility control
- Track refresh count in hidden measure table
- Conditional visibility based on refresh count threshold

---

## 4. Delight Moments (Micro-Interactions)

### Conditional Formatting (Traffic Lights)

**Food Cost:**
```
> 35%: [Red background] "URGENT: Food cost too high"
30-35%: [Yellow background] "WARNING: Watch your costs"
< 30%: [Green background] "GOOD: Keep it up!"
```

**Revenue vs Target:**
```
< 80%: "Di bawah target 20%. Action needed."
80-95%: "Hampir target. Push harder!"
95-105%: "On track!"
> 105%: "LUAR BIASA! Exceeded target!"
```

---

### Gamification (Staff Leaderboard)

**Leaderboard Design:**
```

 Staff Performance - December 2025

 Rank Nama Sales Performance

 Budi Rp 45M ======== 95%
 Ani Rp 42M ======= 88%
 Siti Rp 40M ======= 85%
 4 Udin Rp 35M ====== 73%
 5 Rina Rp 32M ===== 67%


 Tip: Top 3 get bonus this month!
```

**Delight Elements:**
- Medal icons () - instant recognition
- Progress bars (visual comparison)
- Contextual message ("Top 3 get bonus")

---

### Auto-Insights (AI-Like Magic)

**Smart Observations:**

Instead of just showing charts, ADD TEXT:

```
 Revenue This Month: Rp 35 juta

 Auto-Insight:
"Revenue naik 12% dari bulan lalu (Rp 31M).
Produk best-seller: Nasi Goreng (+25%).
Jam rame: 12-2pm dan 7-9pm.

 Recommendation:
- Stock Nasi Goreng lebih banyak
- Tambah staff jam rame (consider part-time)"
```

**How to Implement:**
- Use DAX measures to calculate trends
- Use conditional text based on thresholds
- Feels like AI, but actually just smart formulas

---

### Celebration Moments

**Milestone Achievements:**

When revenue hits target:
```

 CONGRATS!

 Revenue bulan ini: Rp 42 juta
 Target: Rp 40 juta

 You exceeded target by 5%!

 Share this achievement? ↓
 [ Screenshot] [ Share to IG]

```

(Pop-up or prominent banner when opening dashboard)

---

## 5. Polish Checklist (Production-Ready)

### Visual Polish

**Before Shipping, Check:**

- [ ] All charts have titles (no "Visual 1", "Chart 2")
- [ ] All axes have labels (no mystery numbers)
- [ ] All numbers formatted (Rp 1,000,000 not 1000000)
- [ ] All dates in Indonesian format (15 Des 2025, not 12/15/2025)
- [ ] All text in Bahasa Indonesia (no English unless technical terms)
- [ ] All colors consistent (same blue for revenue everywhere)
- [ ] All fonts readable (minimum 10pt)
- [ ] All tooltips customized (not default)
- [ ] All icons high-quality (not pixelated)
- [ ] Logo visible on every page (branding)

---

### UX Polish

**Before Shipping, Test:**

- [ ] Can import Excel in < 5 minutes (time it!)
- [ ] Can find main KPI in < 10 seconds (user test)
- [ ] Can export to PDF cleanly (no broken layouts)
- [ ] Can resize to 1366×768 (laptop) and 1920×1080 (desktop) - both readable
- [ ] Can use with touchscreen (for Surface users)
- [ ] Tab navigation works (keyboard-only test)
- [ ] Color-blind friendly (use ColorOracle to test)
- [ ] Dark mode compatible (if user has dark Windows theme)

---

### Performance Polish

**Speed Matters:**

- [ ] Dashboard loads in < 3 seconds (with sample data)
- [ ] Refresh completes in < 10 seconds (10,000 rows)
- [ ] Slicers respond in < 1 second (no lag)
- [ ] Drill-through works in < 2 seconds
- [ ] File size < 50MB (easy to email/WhatsApp)

**How to Optimize:**
- Remove unused columns from data model
- Use summarized tables (not raw transactions)
- Disable "Auto date/time" in Power BI settings
- Use DirectQuery only if necessary (Import mode faster)

---

### Content Polish

**Help Content Embedded:**

- [ ] Tooltips explain every metric
- [ ] Welcome page with quick start guide
- [ ] FAQ page (built into dashboard as separate tab)
- [ ] Contact info visible (WhatsApp, email)
- [ ] Version number visible (for support tracking)
- [ ] Sample data included (for demo mode)
- [ ] Video tutorials linked (YouTube embed or QR code)

---

## 6. The "Wow" Moments (Built-In)

### Moment 1: First Open (Welcome Experience)

**What User Sees:**
```
[Dashboard opens with demo data]

Pop-up:

 Welcome to Your Dashboard!

 This is DEMO DATA from a sample café.

 Ready to see YOUR data?
 Import your Excel file now

 [ Skip Tour] [ Start 2-Min Tour]

```

**Immediately followed by:**
Animated walkthrough (5 tooltips):
1. "This is revenue -> See trend?"
2. "These are top products -> Click one!"
3. "This is profit margin -> Green = good!"
4. "Use filters here -> Try selecting last month"
5. "Need help? -> Click ? icon anytime"

---

### Moment 2: First Data Import

**Technical Requirements:**

**Loading State:**
- Display: Loading animation during import
- Duration: Max 30 seconds for 10,000 rows
- Animation: Spinner with progress text

**Success State Pop-up:**
```

 BOOM! Dashboard Ready!

 Your Revenue: Rp [value]
 Top Product: [product_name]
 Food Cost: [percentage] ([status])

 Scroll down to see more insights ->

 [ Awesome!]

```

**Dynamic Values:**
- Revenue: SUM(Sales[Total])
- Top Product: TOPN(1, Products, Sales[Quantity])
- Food Cost: Food Cost % with conditional status

---

### Moment 3: First Insight Discovery (Aha!)

**Built-In "Discovery" Feature:**

After 3 refreshes, dashboard analyzes patterns and shows:

```

 We Noticed Something...

 Your Ayam Goreng sales spike
 every Friday (+40%) but food cost
 is also high (38%).

 Potential savings: Rp 500K /month
 if you negotiate chicken price
 or adjust portion slightly.

 [ See Full Report]

```

**DAX Implementation:**
```dax
DayOfWeekPattern =
VAR CurrentProduct = SELECTEDVALUE(Products[ProductName])
VAR CurrentDOW = WEEKDAY(Sales[Date])
VAR AvgSalesDOW = CALCULATE(AVERAGE(Sales[Quantity]), Sales[ProductName] = CurrentProduct, WEEKDAY(Sales[Date]) = CurrentDOW)
VAR AvgSalesOverall = CALCULATE(AVERAGE(Sales[Quantity]), Sales[ProductName] = CurrentProduct)
RETURN
IF(AvgSalesDOW > AvgSalesOverall * 1.4, "Spike detected", BLANK())
```

**Auto-Insight Template:**
- Track patterns across 3+ data refreshes
- Compare food cost by product against average
- Calculate potential savings: (Current Cost - Target Cost) × Monthly Volume
- Display insight if savings > Rp 500K/month threshold

---

## 7. Implementation Checklist

### Phase 1: Core Dashboard (Foundations)

- [ ] Design color palette (Indonesian-friendly)
- [ ] Create page templates (3 core pages)
- [ ] Build data model (F&B specific tables)
- [ ] Create 20 core visualizations
- [ ] Add conditional formatting (traffic lights)
- [ ] Test with sample data

### Phase 2: Polish & UX (Experience)

- [ ] Add tooltips (all 20 visuals)
- [ ] Create welcome page
- [ ] Build onboarding walkthrough
- [ ] Add auto-insights (3 key metrics)
- [ ] Optimize performance (< 3s load)
- [ ] Mobile responsiveness test

### Phase 3: Delight (Launch Readiness)

- [ ] Add gamification (staff leaderboard)
- [ ] Create celebration moments (milestone pop-ups)
- [ ] Add progressive disclosure (unlock features)
- [ ] Embed help content (FAQ tab)
- [ ] Create video tutorials (5 × 2-minute)
- [ ] Final QA (all checklists above)

---

## 8. Acceptance Criteria

**Design Quality Gates:**

Before marking implementation as complete, verify:

- [ ] All color codes match specification exactly
- [ ] All typography follows size/weight requirements
- [ ] All tooltips include context + action suggestions
- [ ] All error states have helpful guidance
- [ ] Demo data loads correctly on first open
- [ ] Progressive disclosure unlocks at correct triggers
- [ ] All conditional formatting thresholds are accurate
- [ ] Performance meets or exceeds requirements (<3s load, <50MB file)
- [ ] Mobile layout (if applicable to tier) is functional
- [ ] All Polish Checklist items are verified

**User Testing Requirements:**

- Minimum 5 beta testers per tier
- 10-minute onboarding session observation
- Record time to first insight (target: <10 minutes)
- Collect qualitative feedback: "wow" moment occurrence

**For strategic success metrics:** See [[products/01-power-bi-template/product-strategy/core/01-master-strategy|01-master-strategy.md]] Section 10

---

**Document Status:** Production-ready specification
**Owner:** Design + Engineering
**Last Updated:** December 31, 2024
