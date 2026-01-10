# E1: User Health Scores
**Purpose:** Identify at-risk users and power users for targeted interventions
**Update Frequency:** Daily (automated scoring)

---

## Health Score Framework

**Overall Health Score: 0-100**
- 80-100: Healthy (engaged, likely to convert/retain)
- 50-79: At-risk (needs nudging)
- 0-49: Churning (urgent intervention or let go)

---

## Scoring Components

### 1. Engagement Score (40 points max)

**Metrics:**
- DAU (Daily Active Users): Opens app X days in last 7
- Feature usage breadth: # of unique features used
- Session duration: Avg time in app per session

**Scoring:**

| Metric | Points | Calculation |
|--------|--------|-------------|
| **Opens/week** | 20 pts | 7 days = 20pts, 3-6 days = 15pts, 1-2 days = 5pts, 0 = 0pts |
| **Features used** | 10 pts | 3+ features = 10pts, 2 features = 5pts, 1 feature = 2pts |
| **Session duration** | 10 pts | >5min = 10pts, 2-5min = 5pts, <2min = 2pts |

**Example:**
- User opens app 5 days/week = 15pts
- Uses 2 features (Revenue + Menu) = 5pts
- Avg 3min/session = 5pts
- **Engagement Score: 25/40**

---

### 2. Data Quality Score (20 points max)

**Metrics:**
- Data input consistency: How many days have data
- Data completeness: All fields filled or partial
- Data recency: When was last input

**Scoring:**

| Metric | Points | Calculation |
|--------|--------|-------------|
| **Input frequency** | 10 pts | Daily (7/7 days) = 10pts, 5-6 days = 7pts, 3-4 days = 4pts, <3 = 0pts |
| **Completeness** | 5 pts | All fields = 5pts, Partial = 2pts, Revenue only = 1pt |
| **Recency** | 5 pts | <24h ago = 5pts, 1-3 days = 3pts, >3 days = 0pts |

**Example:**
- Inputs data 6 days/week = 7pts
- Fills all fields (revenue, transactions, top menu) = 5pts
- Last input today = 5pts
- **Data Quality Score: 17/20**

---

### 3. Value Realization Score (20 points max)

**Metrics:**
- Insights discovered: User found actionable info
- Actions taken: Changed behavior based on data
- Positive sentiment: Expressed satisfaction

**Scoring:**

| Metric | Points | Calculation |
|--------|--------|-------------|
| **Insights** | 10 pts | Mentioned insight ("Ternyata menu X rugi!") = 10pts, None = 0pts |
| **Actions** | 5 pts | Changed menu/pricing/staff based on data = 5pts, None = 0pts |
| **Sentiment** | 5 pts | Positive feedback = 5pts, Neutral = 2pts, Negative = 0pts |

**Tracking:**
- WhatsApp conversations (sentiment analysis)
- In-app feedback
- Support tickets

**Example:**
- User said "Dashboard bantu saya tau menu rugi" = 10pts
- Changed pricing = 5pts
- Positive WhatsApp feedback = 5pts
- **Value Realization Score: 20/20**

---

### 4. Tier/Revenue Score (20 points max)

**Metrics:**
- Tier: Free vs Premium vs Pro
- Payment reliability: On-time or late
- Expansion signals: Asked about upgrades

**Scoring:**

| Metric | Points | Calculation |
|--------|--------|-------------|
| **Tier** | 10 pts | Pro = 10pts, Premium = 7pts, Free = 3pts |
| **Payment** | 5 pts | On-time always = 5pts, 1 late = 3pts, 2+ late = 0pts |
| **Expansion** | 5 pts | Asked about upgrade/API/multi-outlet = 5pts, None = 0pts |

**Example (Free user):**
- Free tier = 3pts
- N/A payment = 0pts
- Asked about Premium pricing = 5pts
- **Tier/Revenue Score: 8/20**

---

## Overall Health Score Example

**User: Bu Siti (Free Tier, Week 2)**
- Engagement: 25/40
- Data Quality: 17/20
- Value Realization: 20/20
- Tier/Revenue: 8/20
- **Total: 70/100** → At-Risk (good engagement but not paying)

**Action:** Offer Premium trial (high value realization = conversion potential)

---

## User Segments by Health Score

### Healthy Users (80-100 points)

**Characteristics:**
- Opens app 5-7 days/week
- Uses 3+ features
- Inputs data consistently
- Positive sentiment
- Paying customer OR high conversion potential

**Actions:**
- Minimal intervention (don't over-message)
- Upsell to higher tier (if Free or Premium)
- Request testimonial/case study
- Referral ask

**Example:**
Mas Budi (Free, Score 85) → High engagement + positive sentiment → Upsell to Premium

---

### At-Risk Users (50-79 points)

**Characteristics:**
- Opens app 2-4 days/week (declining)
- Uses 1-2 features only
- Inconsistent data input
- Neutral sentiment
- Free user OR paying but not engaged

**Actions:**
- Re-engagement campaign
- Feature discovery nudges
- Value reminder ("Kamu udah track Rp X omzet!")
- Personal check-in call (if high LTV potential)

**Sub-segments:**

**At-Risk (High Potential):** Score 60-79
- Engaged but not paying → Convert to paid
- Paying but declining → Prevent churn

**At-Risk (Low Potential):** Score 50-59
- Low engagement, free → Light nudge, then let go
- Paying but inactive → Churn prevention or downgrade

---

### Churning Users (0-49 points)

**Characteristics:**
- Opens <2 days/week
- Single feature only
- No data input in 3+ days
- Negative sentiment OR radio silence
- Free user, not converting

**Actions:**
- **High LTV (Paying or high revenue):** Urgent intervention (call within 24h)
- **Low LTV (Free, low engagement):** Let churn (don't waste resources)
- Exit survey (why churning?)

**Example:**
Free user, opened once Week 1, never returned, Score 15 → Let churn.

---

## Automated Health Score Tracking

### Daily Calculation (Automated via Script/CRM)

**Input data:**
- App analytics: Opens, features used, session duration
- Database: Data input frequency, completeness, recency
- CRM: Tier, payment status, WhatsApp sentiment
- Support: Feedback, feature requests

**Output:**
- Health score per user (0-100)
- Segment (Healthy/At-Risk/Churning)
- Recommended action

**Example output (CSV table):**

| User | Score | Segment | Action |
|------|-------|---------|--------|
| Bu Siti | 70 | At-Risk | Offer Premium trial |
| Mas Budi | 85 | Healthy | Request testimonial |
| User 123 | 45 | Churning | Let churn (free, no engagement) |

---

## Health Score Alerts (Automated WhatsApp/Email)

### Alert 1: Declining Health (Score drops >20 pts in 1 week)

**Trigger:** User was 80, now 60

**Message:**
```
Halo [Name], saya perhatikan Anda jarang buka dashboard minggu ini.

Ada masalah? Atau fiturnya kurang? Reply kalau mau chat!
```

### Alert 2: High Health, Free User (Score >80, Free tier)

**Trigger:** Free user with 80+ score for 2+ weeks

**Message:**
```
[Name], sudah 2 minggu aktif pakai dashboard—mantap!

Mau coba fitur Premium gratis 14 hari? (Custom metrics, export PDF, dll)

No credit card. Link: [trial]
```

### Alert 3: Payment Failed (Paying user, score dropping)

**Trigger:** Payment failed + score <70

**Message:**
```
URGENT: Payment gagal + dashboard jarang dibuka.

Ada masalah dengan produk kami? Atau mau pause subscription?

Call saya 15 menit? WA: [number]
```

---

## Manual Review (Weekly)

**CS team reviews:**
- Top 10 highest scores (upsell/testimonial opportunities)
- Top 10 lowest paying customer scores (churn risk—call them!)
- Users with sudden score drops (investigate why)

**Example Weekly Review:**

**High Scores (Opportunities):**
1. Bu Siti (70) - Free, high engagement → Premium trial
2. Pak Adi (82) - Premium, loves product → Request case study
3. Ibu Rina (78) - Free, asked about multi-outlet → Upsell to Pro

**Churn Risks (Paying):**
4. Mas Eko (55) - Premium, declining → Call today
5. Bu Lina (48) - Premium, payment late → Downgrade offer?

---

## Health Score Trends (Cohort Analysis)

### Week 1 Cohort Health

**Expected distribution:**
- 30% Healthy (80-100) - Power users from start
- 50% At-Risk (50-79) - Needs nurturing
- 20% Churning (0-49) - Will drop off

**Goal:** Move At-Risk → Healthy by Week 4

### Month 1 → Month 2 Transition

**Healthy cohort retention:**
- Target: 90% of Healthy users stay Healthy or upgrade
- Reality: Track and optimize

**At-Risk conversion:**
- Target: 40% of At-Risk move to Healthy (via engagement nudges)
- Reality: Track Week 2-4 interventions

---

## Key Metrics Dashboard

| Metric | Target | Current |
|--------|--------|---------|
| % Healthy users (Free) | 30% | [X%] |
| % Healthy users (Paid) | 70% | [X%] |
| Avg health score (all users) | 65 | [X] |
| Week-over-week score change | +5 pts (growing engagement) | [X] |
| Churn rate (score <50 for 2 weeks) | <20% | [X%] |

---

## Integration with Other Playbooks

### Engagement Playbook
- Health score <60 at Day 7 → Trigger re-engagement (see: `engagement-playbook.md`)

### Upsell Triggers
- Health score >75 + Free tier for 2+ weeks → Premium offer (see: `upsell-triggers.md`)

### Churn Prevention
- Paying user score <55 → Urgent intervention (call within 24h)

---

**Tools:**
- Google Sheets (manual MVP tracking)
- OR: CRM with health score API (ChurnZero, Vitally)
- WhatsApp Business API (automated alerts)

**DRI:** Customer Success Manager
**Update Frequency:** Daily (automated), Weekly manual review

---

## Related

- **[[products/03-web-dashboard-lite/03-web-dashboard-lite|Web Dashboard Lite Product]]** - Product overview
- **[[products/03-web-dashboard-lite/customer-success/engagement-playbook|Engagement Playbook]]** - First 7 days tactics
- **[[products/03-web-dashboard-lite/customer-success/upsell-triggers|Upsell Triggers]]** - When to upgrade users
- **[[products/03-web-dashboard-lite/freemium/retention-strategy|Retention Strategy]]** - User segmentation
- **[[products/03-web-dashboard-lite/analytics/product-metrics|Product Metrics]]** - Engagement metrics
