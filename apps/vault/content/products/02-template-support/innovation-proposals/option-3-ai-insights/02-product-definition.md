# Option 3: Smart Template with AI Insights Layer
## Product Definition & User Experience


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

---

**Related Documents:**
- [[01-value-proposition|Value Proposition]]
- [[03-business-model|Business Model]]
- [[04-technical-architecture|Technical Architecture]]
- [[05-success-metrics|Success Metrics]]

**Created:** January 4, 2026
**Status:** Proposal - Awaiting Decision
