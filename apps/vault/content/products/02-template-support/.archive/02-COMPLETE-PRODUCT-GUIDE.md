# Option 3: Smart Template with AI Insights
## Complete Product, Business, Technical & Metrics Guide

**Product:** R1 Smart Template
**This document combines:** Product Definition + Business Model + Technical Architecture + Success Metrics
**Purpose:** Comprehensive reference for building AI-powered insights layer

---

# PART 1: PRODUCT DEFINITION

## AI Features & User Experience

### Feature 1: AI Insights Tab (Core)

**User Experience Flow:**

1. **User opens Power BI template**
2. **Clicks "AI Insights" tab** (new tab added to template)
3. **Sees auto-generated weekly report:**

```
 AI INSIGHTS FOR [RESTAURANT NAME]
Week of January 4-10, 2026
Last updated: 3 hours ago

 YOUR PERFORMANCE SNAPSHOT:
- Revenue: Rp 45M (↑8% vs. last week)
- Food Cost: 29% (UP from 26%, above target)
- Labor Cost: 23% ( Good, within range)
- Profit Margin: 12% (↓2% vs. last week due to food cost spike)

 TOP 3 OPPORTUNITIES THIS WEEK:

**#1: REDUCE CHICKEN WASTE** [Save Rp 600K/month]
Problem: You're wasting 15% of chicken inventory (Rp 2.5M/month loss)
Root Cause: Over-ordering on Mondays (10kg ordered, 7kg used)
Recommended Action:
→ Reduce Monday chicken order from 10kg to 7kg
→ Expected savings: 3kg × 4 weeks × Rp 50K = Rp 600K/month
→ Risk: Low (can always order mid-week if sellout)
[ ] Mark as Implemented

**#2: RAISE COFFEE PRICES** [Gain Rp 480K/month]
Problem: Your coffee is underpriced vs. competitors (Rp 18K vs. Rp 22K average)
Market Data: 3 nearby cafés raised prices to Rp 20-25K this month
Recommended Action:
→ Increase Americano from Rp 18K to Rp 20K
→ Expected gain: 240 cups/month × Rp 2K = Rp 480K/month
→ Risk: Medium (5-10% volume loss possible, but offset by price)
[ ] Mark as Implemented

**#3: OPTIMIZE MONDAY LABOR** [Save Rp 400K/month]
Problem: Monday afternoon (2-4pm) is 60% slower than Tue-Thu but same staffing
Current: 3 staff scheduled 2-4pm Mondays
Recommended Action:
→ Reduce to 2 staff on Monday 2-4pm slot
→ Expected savings: 4 shifts/month × Rp 100K = Rp 400K/month
→ Risk: Low (can call backup if rush occurs)
[ ] Mark as Implemented

 TOTAL POTENTIAL: Implement all 3 → Save/Gain Rp 1.48M/month (+12% profit)

 RED FLAGS TO WATCH:
Food cost trending up 3 weeks straight (26% → 27% → 29%)
→ If hits 30% by next week, investigate supplier pricing immediately

 WINS FROM LAST WEEK:
 Labor cost improved to 23% (was 25% two weeks ago - great job!)
 Weekend revenue up 8% (your Instagram campaign working?)

---
 ASK AI: Type your question below
Example: "Why did my food cost spike this week?"

[Ask AI →]
```

**Technical Implementation:**
- **Data Input:** Power BI dataset (all metrics, 90-day history)
- **AI Processing:** Python script calls GPT-4 API
- **Output:** Markdown formatted report → Embedded in Power BI (HTML visual)
- **Refresh:** Daily at 6am (new insights every morning)

---

### Feature 2: Anomaly Alerts

**User Experience:**

**Scenario:** Food cost spikes on Tuesday

**9:00 AM Tuesday - WhatsApp Alert:**
```
 R1 SMART TEMPLATE ALERT

Food Cost Anomaly Detected
Your food cost: 29% (↑5 points from yesterday's 24%)

Likely Cause: Chicken supplier invoice 12% higher than usual
Impact: ~Rp 1.2M extra cost this month if sustained

Recommended Action:
1. Call supplier, negotiate back to Rp 50K/kg
2. OR switch to Supplier Y (Rp 52K/kg quoted last month)
3. OR raise chicken dish prices Rp 2-3K

View details in Power BI → AI Insights tab

[Open Dashboard]
```

**Technical Implementation:**
- **Monitoring:** Daily check of all key metrics (food cost, labor, revenue)
- **Threshold:** Trigger if >10% deviation from 7-day average
- **Root Cause AI:** GPT-4 analyzes transaction data, identifies likely cause
- **Delivery:** WhatsApp Business API + Email

---

### Feature 3: Predictive Analytics

**User Experience:**

**In Power BI - "Forecast" Tab:**

**Cash Flow Forecast (60 Days):**
- Line chart: Projected cash balance
- **Today:** Rp 45M
- **30 days:** Rp 28M (Declining)
- **60 days:** Rp 8M ( Danger zone)

**AI Commentary:**
> "At current burn rate (Rp 28M expenses, Rp 25M revenue), you'll reach minimum cash (Rp 10M threshold) in 52 days. Recommended action: Reduce inventory purchases 15% OR increase revenue 10% to extend runway to 90+ days."

**Revenue Trend Forecast:**
- Historical: Last 12 weeks actual
- Forecast: Next 8 weeks predicted
- **AI Commentary:** "Revenue declining 2% week-over-week. If trend continues, expect -12% by month-end. Consider: (1) New promotion, (2) Menu refresh, (3) Marketing campaign."

**Technical Implementation:**
- **Model:** Facebook Prophet (time-series forecasting)
- **Training Data:** 12-month historical data
- **Re-train:** Weekly (incorporate latest data)
- **Accuracy Target:** ±10% on 30-day forecast

---

### Feature 4: Natural Language Query

**User Experience:**

**User types in Power BI:**
```
Q: "Why did my sales drop 15% last week?"
```

**AI responds (10 seconds later):**
```
A: I analyzed your data for the week of Dec 25-31. Three factors caused the sales drop:

1. **Weather Impact (40% of decline):** Rain 5 out of 7 days reduced foot traffic 23%
 - Your sales correlate 0.78 with sunny days historically

2. **Holiday Effect (35% of decline):** Dec 25-26 are historically 40% slower
 - Normal seasonal pattern, not a problem

3. **Closure (25% of decline):** You were closed Dec 27 for staff event
 - Lost 1 day of revenue = -14% weekly

**Conclusion:** This was a temporary dip due to weather + holidays + closure. Week of Jan 1 already recovering (+8% vs. Dec 25 week). No action needed.

**Follow-up suggestion:** Run "Rainy Day Special" promotion to boost traffic on rainy days.
```

**Technical Implementation:**
- **Input:** User question (text)
- **Processing:** GPT-4 with function calling (can query Power BI dataset)
- **Output:** Natural language answer + data charts if relevant
- **Limit:** Premium tier: Unlimited queries, Standard tier: 10 queries/month

---

### Feature 5: Action Tracking & ROI Attribution

**User Experience:**

**Step 1: Mark as Implemented**
- User checks box: " #2: Raise Coffee Prices - Implemented Jan 5"

**Step 2: AI Tracks Before/After**
- AI automatically tracks revenue before (Jan 1-4) vs. after (Jan 6-31)

**Step 3: Results Report (End of Month)**
```
 JANUARY RESULTS - Tactics You Implemented

 #2: Raise Coffee Prices Rp 18K → Rp 20K (Implemented Jan 5)
Before (Jan 1-4): 248 cups sold, Rp 4.46M revenue (4 days)
After (Jan 6-31): 5,890 cups sold, Rp 117.8M revenue (26 days)

Analysis:
- Daily volume: 62 cups/day → 226 cups/day (HOLD ON - this can't be right, recalculating...)
- Daily volume: 62 cups → 60 cups (-3% volume decline as expected)
- Daily revenue: Rp 1.12M → Rp 1.20M (+7% revenue increase)
- **Net Impact:** +Rp 480K/month revenue (as predicted!)
- **ROI:** Recommendation delivered Rp 480K value

 YOUR TOTAL ROI THIS MONTH:
Implemented: 2 out of 3 recommendations
Revenue Impact: +Rp 680K/month
Cost Saved: +Rp 600K/month
**Total Value: +Rp 1.28M/month**

Your R1 Smart Template subscription (Rp 300K) returned 4.3× this month.
```

---

## Tier Comparison

| Feature | Basic (Rp 150K) | Standard (Rp 300K) | Premium (Rp 500K) |
|---------|----------------|-------------------|------------------|
| AI Insights Tab | Weekly | Daily | Daily |
| Anomaly Alerts | No | Yes (WhatsApp + Email) | Yes + Phone Call for critical |
| Benchmarking | Basic | Advanced (peer segments) | Advanced |
| Predictive Analytics | No | 30-day forecast only | 60-day + multiple scenarios |
| Natural Language Query | No | 10 questions/month | Unlimited |
| Action Tracking | Yes | Yes | Yes + Custom experiments |
| Support | Email (48h) | Email (24h) | Priority (12h) + Phone |

---

# PART 2: BUSINESS MODEL

## SaaS Economics

**Revenue Model:**
- Recurring monthly subscription
- **Target Mix:** 20% Basic, 60% Standard, 20% Premium
- **Blended ARPU:** (0.2 × 150K) + (0.6 × 300K) + (0.2 × 500K) = **Rp 310K/month**

**Unit Economics:**

**Variable Costs (per customer per month):**
- GPT-4 API calls: Rp 20,000 (10-15 insight generations + queries)
- Compute (Python scripts, forecasting models): Rp 5,000
- Data storage (Azure/AWS): Rp 5,000
- **Total Variable Cost:** Rp 30,000

**Contribution Margin:**
- Revenue (Standard tier): Rp 300,000
- Variable cost: Rp 30,000
- **Margin:** Rp 270,000 (90% gross margin)

**Fixed Costs (Monthly):**
- Engineering team (3 ML engineers + 1 data scientist): Rp 60M
- Product Manager: Rp 15M
- Customer Success (0.5 FTE): Rp 5M
- Infrastructure (GPT-4 baseline, servers): Rp 10M
- **Total Fixed:** Rp 90M/month

**Breakeven:**
- Rp 90M / Rp 270K contribution margin = **334 customers**

**LTV/CAC:**
- LTV (24-month avg lifetime, 8% churn): Rp 300K × 24 = Rp 7.2M
- CAC (upsell to A1 buyers): Rp 200K
- **LTV/CAC: 36×** Exceptional

**Profitability Timeline:**
- Month 12: 167 customers, -Rp 45M EBITDA (halfway to breakeven)
- Month 18: 334 customers, Breakeven
- Month 24: 600 customers, +Rp 72M EBITDA

---

# PART 3: TECHNICAL ARCHITECTURE

## System Components

### 1. Data Pipeline

**Input:** Power BI Dataset (customer's restaurant data)
- Sales transactions, inventory, labor hours, expenses
- **Format:** CSV export OR direct Power BI API connection

**Processing:**
1. **Extract:** Python script pulls data daily (6am)
2. **Transform:** Clean, normalize, calculate derived metrics
3. **Load:** Store in PostgreSQL database (customer-specific tables)

**Frequency:** Daily automated refresh

---

### 2. AI Insights Generation Engine

**Step 1: Anomaly Detection**
```python
# Pseudocode
for metric in [food_cost, labor_cost, revenue]:
 current_value = get_latest(metric)
 historical_mean = calculate_mean(metric, days=7)
 threshold = historical_mean * 1.10 # 10% deviation

 if current_value > threshold:
 flag_anomaly(metric, current_value, historical_mean)
 generate_root_cause_hypothesis(metric)
```

**Step 2: Opportunity Identification**
```python
# Pseudocode
opportunities = []

# Check food cost
if food_cost > industry_benchmark:
 opportunity = analyze_food_cost_breakdown()
 calculate_savings_potential()
 opportunities.append(opportunity)

# Check pricing
if avg_price < competitor_avg:
 opportunity = analyze_pricing_gap()
 calculate_revenue_potential()
 opportunities.append(opportunity)

# Rank by ROI
opportunities.sort(by=roi, descending=True)
return top_3_opportunities
```

**Step 3: GPT-4 Report Generation**
```python
# Pseudocode
prompt = f"""
You are a business analyst for a restaurant. Analyze this data and generate insights:

Data Summary:
- Food Cost: {food_cost}% (Target: <26%)
- Top waste item: Chicken (15% waste rate, Rp 2.5M/month loss)
- Pricing: Coffee Rp 18K (Competitors: Rp 22K avg)

Generate a report with:
1. Top 3 opportunities (specific, actionable, ROI-quantified)
2. Red flags to watch
3. Wins from last period

Format: Markdown, casual but professional tone.
"""

response = openai.ChatCompletion.create(
 model="gpt-4",
 messages=[{"role": "system", "content": "You are a restaurant business analyst"},
 {"role": "user", "content": prompt}]
)

insights_markdown = response.choices[0].message.content
```

**Step 4: Embed in Power BI**
- Save insights as JSON/Markdown file
- Power BI HTML visual reads file
- Displays formatted report

---

### 3. Predictive Analytics Engine

**Model: Facebook Prophet (Time-Series Forecasting)**

```python
from fbprophet import Prophet

# Load historical data
df = get_historical_revenue(days=365)
df.columns = ['ds', 'y'] # Prophet requires these column names

# Train model
model = Prophet(yearly_seasonality=True, weekly_seasonality=True)
model.fit(df)

# Generate 60-day forecast
future = model.make_future_dataframe(periods=60)
forecast = model.predict(future)

# Extract predictions
predicted_revenue = forecast
```

**Cash Flow Forecast:**
```python
# Pseudocode
current_cash = 45_000_000 # Rp 45M
avg_revenue_per_day = calculate_avg(revenue, days=30)
avg_expenses_per_day = calculate_avg(expenses, days=30)
burn_rate = avg_expenses_per_day - avg_revenue_per_day

cash_forecast = []
for day in range(1, 61):
 projected_cash = current_cash - (burn_rate * day)
 cash_forecast.append(projected_cash)

 if projected_cash < 10_000_000: # Danger threshold
 alert("Cash flow warning: Rp 10M threshold in {day} days")
```

---

### 4. Natural Language Query (NL to SQL)

**User Question:** "Why did sales drop last week?"

**Processing:**
1. **GPT-4 interprets question** → Determine intent (need sales data for last week vs. previous)
2. **Generate SQL query:**
```sql
SELECT
 DATE(transaction_date) AS date,
 SUM(revenue) AS daily_revenue
FROM transactions
WHERE transaction_date BETWEEN '2025-12-25' AND '2026-01-01'
GROUP BY DATE(transaction_date)
ORDER BY date
```
3. **Execute query** → Get results
4. **GPT-4 analyzes results** → Generate natural language answer
5. **Return to user** in Power BI

**GPT-4 Function Calling:**
```python
functions = [
 {
 "name": "query_revenue",
 "description": "Get revenue data for a date range",
 "parameters": {
 "type": "object",
 "properties": {
 "start_date": {"type": "string"},
 "end_date": {"type": "string"}
 }
 }
 }
]

response = openai.ChatCompletion.create(
 model="gpt-4",
 messages=[{"role": "user", "content": "Why did sales drop last week?"}],
 functions=functions
)

# GPT-4 returns: function_call = query_revenue(start_date="2025-12-25", end_date="2026-01-01")
# Execute function, send results back to GPT-4 for final answer
```

---

## Infrastructure

**Cloud Provider:** Azure (or AWS)

**Components:**
- **Compute:** Azure Functions (serverless Python scripts)
- **Database:** PostgreSQL (customer data)
- **AI:** OpenAI GPT-4 API
- **Storage:** Azure Blob Storage (backups, logs)
- **Monitoring:** Application Insights

**Cost at Scale (1,000 customers):**
- GPT-4 API: Rp 20M/month (Rp 20K per customer)
- Compute: Rp 10M/month
- Database: Rp 5M/month
- Storage: Rp 2M/month
- **Total:** Rp 37M/month = Rp 37K per customer

**Gross Margin:** (Rp 300K - Rp 37K) / Rp 300K = **88%**

---

# PART 4: SUCCESS METRICS

## North Star Metric

**AI-Driven Profit Improvement per Customer:**
**"Average monthly profit increase attributed to AI recommendations"**

**Target:** >Rp 500K/month profit improvement
**Measurement:** Track before/after profit for customers who implement AI recommendations

---

## Key Metrics

### Product Metrics

**AI Accuracy:**
- Anomaly Detection Precision: >80% (% of alerts that are truly important)
- Forecast Accuracy: ±10% on 30-day revenue forecast
- Recommendation Implementation Rate: >50% (customers actually implement AI advice)

**Engagement:**
- % customers who open AI Insights tab weekly: >70%
- NL Query usage: >5 questions per customer per month (Premium tier)
- Action tracking completion: >40% of recommendations marked as implemented

### Business Metrics

**Revenue:**
- MRR, ARPU (target: Rp 310K blended), Churn (<8% monthly)

**Customer Success:**
- NPS: >50
- Customers reporting >Rp 500K/month improvement: >60%
- ROI on subscription: >3× (Rp 300K subscription returns Rp 900K+ value)

---

## Gate Framework

**Gate 1: AI Quality Validated (Month 6)**
- 50 beta customers
- AI accuracy >75% (will improve to >85% by Month 12)
- >60% customers report AI insights useful (CSAT >4.0)

**Gate 2: Product-Market Fit (Month 12)**
- 200 customers
- Churn <10%
- NPS >40
- 50%+ customers implement AI recommendations

**Gate 3: Profitability (Month 24)**
- 600 customers, Rp 186M MRR
- EBITDA positive
- AI accuracy >85%
- Clear path to 1,000+ customers

---

**Created:** January 4, 2026
**Status:** Proposal - Comprehensive Technical Guide
