# Option 3: Smart Template with AI Insights Layer
## Technical Architecture & Implementation


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
predicted_revenue = forecastpython code snippet
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

---

**Related Documents:**
- [[01-value-proposition|Value Proposition]]
- [[02-product-definition|Product Definition]]
- [[03-business-model|Business Model]]
- [[05-success-metrics|Success Metrics]]

**Created:** January 4, 2026
**Status:** Proposal - Awaiting Decision

