# Expense Management SOP
**Product 04: Accounting Module - Expense Tracking**

**Owner:** Product + Finance  
**Status:** PLANNED - Year 2+

---

## Module Overview

**Product 04: Accounting Module**  
Add-on for F&B expense management (complements POS revenue data)

**Target Customer:**
- Existing Template/SaaS users
- Using Accurate/Jurnal accounting software
- Want automated expense categorization

**Price:** +Rp 2M (one-time add-on to Template) OR included in SaaS Pro+

---

## Expense Categories (F&B-Specific)

### 1. Cost of Goods Sold (COGS)
- Raw materials (food, beverage ingredients)
- Packaging (takeaway containers, cups)
- Supplier payments

**Dashboard View:** COGS % of revenue (target: <35-40%)

---

### 2. Labor / Payroll
- Staff salaries
- Overtime pay
- Benefits (if applicable)

**Dashboard View:** Labor % of revenue (target: <25-30%)

---

### 3. Rent & Utilities
- Rent/lease payments
- Electricity, water, gas
- Internet, phone

**Dashboard View:** Fixed costs tracking

---

### 4. Marketing & Promotion
- Paid ads (Facebook, Instagram)
- Discounts/promos given
- Event sponsorships

**Dashboard View:** ROI on marketing spend

---

### 5. Other Operating Expenses
- Equipment maintenance
- Licenses/permits
- Accounting/legal fees

---

## Expense Entry Methods

### Method 1: Manual Entry
**For:** Small businesses without accounting software

**Process:**
1. Navigate to "Expenses" tab
2. Click "Add Expense"
3. Fill form: Date, Amount, Category, Note
4. Save

**Frequency:** Daily/weekly (batched)

---

### Method 2: Accounting Software Sync
**For:** Customers using Accurate/Jurnal

**Process:**
1. Connect accounting software (OAuth)
2. Auto-import expenses nightly
3. Review/categorize if needed
4. Dashboard updates automatically

**See:** [[../../shared-technical/integrations/accounting-integrations|Accounting Integration Guide]]

---

### Method 3: Receipt Scanning (Future)
**For:** Mobile-first users

**Process:**
1. Take photo of receipt
2. OCR extracts amount, vendor, date
3. User confirms category
4. Auto-added to expenses

**Status:** Planned Year 3 (AI feature)

---

## Expense Analytics

### Dashboard 1: Expense Breakdown

**Pie Chart:** Expenses by category
- COGS: 38%
- Labor: 28%
- Rent: 15%
- Marketing: 10%
- Other: 9%

**Insight:** "Labor costs up 5% this month - consider scheduling optimization"

---

### Dashboard 2: Expense Trends

**Line Chart:** Monthly expenses over time
- Identify seasonal patterns
- Flag unusual spikes ("COGS jumped 20% in May - why?")

---

### Dashboard 3: Profit Margin Analysis

**Formula:** (Revenue - COGS - Operating Expenses) / Revenue

**Visualization:** Gross Margin vs Net Margin trends

**Benchmarking:** "Your net margin: 15% vs industry avg: 18%"

---

## Expense Alerts (Proactive)

### Alert 1: Budget Overrun
**Trigger:** Category exceeds monthly budget by >10%  
**Notification:** Email + in-app  
**Example:** "Labor costs Rp 25M this month (budget: Rp 20M)"

### Alert 2: Unusual Expense
**Trigger:** Single expense >2x average  
**Notification:** "New Rp 5M expense added - verify accuracy"

### Alert 3: Missing Data
**Trigger:** No expenses logged in 7+ days  
**Notification:** "Don't forget to record this week's expenses"

---

## Integration with Existing Modules

**Revenue (POS Data) + Expenses (Accounting) = Complete P&L**

**Example Dashboard:**
```
Revenue (from POS):    Rp 100M
- COGS (expenses):     Rp 38M
= Gross Profit:        Rp 62M (62% margin)

- Operating Expenses:  Rp 45M
= Net Profit:          Rp 17M (17% margin)
```

---

## Customer Onboarding (Expense Module)

**Step 1:** Customer purchases add-on (+ Rp 2M)  
**Step 2:** Email setup guide  
**Step 3:** Choose entry method (manual vs accounting sync)  
**Step 4:** Import last 3 months expenses (historical baseline)  
**Step 5:** Set budget goals by category  
**Step 6:** Enable alerts

**Time to Value:** <1 hour (vs days of manual Excel work)

---

## Competitive Advantage

**vs Manual Excel:**
- Auto-categorization (vs manual tagging)
- Real-time insights (vs end-of-month reports)
- Integration (revenue + expenses in one place)

**vs Accounting Software Alone:**
- F&B-specific insights (COGS %, labor %, industry benchmarks)
- Simpler UI (designed for operators, not accountants)
- Visual dashboards (vs numbers-heavy reports)

---

**Status:** PLANNED  
**Launch:** Year 2 (after SaaS platform stable)  
**Pricing:** +Rp 2M add-on OR included in SaaS Pro+
