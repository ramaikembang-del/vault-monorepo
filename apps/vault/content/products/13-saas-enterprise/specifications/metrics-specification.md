# Dashboard Metrics Specification

## Overview
This document defines all KPIs and metrics for the F&B Growth Dashboard, organized by the three main tabs: Command Center (Revenue), Wolf Pack (Staff), and Loyalty Loop (Customer).

---

## 1. Command Center: Revenue Metrics

These metrics drive the "12 Bn IDR Growth" objective and inform daily/weekly execution decisions.

### 1.1 Primary KPIs (Header Cards)

| # | Metric | Formula | Target | Data Source |
|---|--------|---------|--------|-------------|
| 1 | **YTD Revenue** | SUM(GrossAmount) - SUM(DiscountAmount) | 12 Bn IDR | Sales_Data |
| 2 | **Gap to Target** | Target Annual - YTD Revenue | → 0 | Sales_Data + Targets |
| 3 | **Required Daily Run Rate** | Gap ÷ Days Remaining | Dynamic | Calculated |
| 4 | **Today's Revenue** | SUM(GrossAmount) WHERE Date = TODAY | > Run Rate | Sales_Data |
| 5 | **MTD vs Target** | MTD Actual ÷ MTD Target × 100 | >= 100% | Sales_Data + Targets |
| 6 | **Forecast to 12Bn** | YTD Revenue ÷ Days Elapsed × 365 | 12 Bn+ | Calculated |

### 1.2 Waterfall Chart (Revenue Build-up)

| # | Bucket | Formula | Note |
|---|--------|---------|------|
| 7 | **Walk-in Sales** | SUM WHERE IsReservation = 0 | Base revenue |
| 8 | **+ Reservation Sales** | SUM WHERE IsReservation = 1 | Premium traffic |
| 9 | **+ Upsells** | SUM WHERE IsUpsellItem = 1 | Desserts, Alcohol |
| 10 | **- Discounts** | SUM(DiscountAmount) | Subtract from total |
| 11 | **= Net Revenue** | Final total | True realized revenue |

### 1.3 Revenue by Time Period

| # | Metric | Dimensions | Purpose | Data Source |
|---|--------|------------|---------|-------------|
| 12 | **Hourly Heatmap** | X: Hour (11-23), Y: Day of Week | Staff scheduling | Sales + Date |
| 13 | **Daily Trend** | Revenue by Date | Pattern identification | Sales_Data |
| 14 | **Weekly Comparison** | This Week vs Last Week | Week-over-week growth | Sales + Date |
| 15 | **Monthly Performance** | Actual vs Target by Month | Pacing analysis | Sales + Targets |
| 16 | **Quarter-to-Date** | Q1, Q2, Q3, Q4 cumulative | Strategic milestones | Sales + Date |

### 1.4 Revenue Mix Analysis

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 17 | **Food Revenue %** | Food Sales ÷ Total Sales | Category mix | Sales_Data |
| 18 | **Beverage Revenue %** | Bev Sales ÷ Total Sales | Category mix | Sales_Data |
| 19 | **Alcohol Revenue %** | Alcohol Sales ÷ Total Sales | High-margin mix | Sales_Data |
| 20 | **Dessert Revenue %** | Dessert Sales ÷ Total Sales | Upsell success | Sales_Data |
| 21 | **Reservation % of Revenue** | Reservation Sales ÷ Total | Channel value | Sales_Data |
| 22 | **Upsell % of Revenue** | Upsell Sales ÷ Total | Add-on impact | Sales_Data |

### 1.5 Menu Performance (NEW)

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 23 | **Seasonal Menu Revenue** | SUM WHERE MenuCategory = 'Seasonal' | Seasonal item performance | Sales_Data |
| 24 | **Top 10 Items by Season** | Rank by Quantity × MenuSeason | Best performers per quarter | Sales_Data |
| 25 | **Year-Round vs Seasonal Mix** | Year-Round Sales ÷ Seasonal Sales | Menu balance | Sales_Data |
| 26 | **Seasonal Item Contribution %** | Seasonal Revenue ÷ Total Revenue | Impact assessment | Sales_Data |

### 1.6 Reservation Analysis (NEW)

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 27 | **Revenue by Reservation Category** | SUM per ReservationCategory | Channel mix | Sales_Data |
| 28 | **Private Event Revenue** | SUM WHERE Category = 'Private Event' | Event business | Sales_Data |
| 29 | **Wedding & Engagement Revenue** | SUM WHERE Category = 'Wedding & Engagement' | Wedding business | Sales_Data |
| 30 | **Corporate Revenue** | SUM WHERE Category = 'Corporate & Institution' | B2B business | Sales_Data |
| 31 | **Community Revenue** | SUM WHERE Category = 'Community' | Local partnerships | Sales_Data |
| 32 | **Avg Party Size by Category** | AVG(PartySize) per Category | Event sizing | Sales_Data |

### 1.7 Transaction Metrics

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 33 | **Total Transactions** | COUNT DISTINCT(TransactionID) | Volume | Sales_Data |
| 34 | **Avg Check Size** | Total Sales ÷ Transactions | Per-guest value | Sales_Data |
| 35 | **Transactions per Hour** | Transactions ÷ Operating Hours | Throughput | Sales_Data |
| 36 | **Peak Hour Volume** | MAX(Transactions by Hour) | Capacity planning | Sales_Data |
| 37 | **Reservation Conversion** | Reservations ÷ Total Txns | Booking effectiveness | Sales_Data |

### 1.8 Growth & Pacing Metrics

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 38 | **YoY Growth %** | (2025 - 2025) ÷ 2025 × 100 | Annual comparison | Sales_Data |
| 39 | **Run Rate to Goal** | Actual Daily Avg × Days Remaining | Projection | Calculated |
| 40 | **Days Behind/Ahead** | (Actual - Expected) ÷ Daily Target | Schedule status | Sales + Targets |
| 41 | **Acceleration Needed** | (Gap ÷ Days Left) - Current Avg | Urgency indicator | Calculated |
| 42 | **Best Day This Month** | MAX(Daily Revenue) | Benchmark | Sales_Data |
| 43 | **Worst Day This Month** | MIN(Daily Revenue) | Risk awareness | Sales_Data |

---

## 2. Wolf Pack: Staff Gamification Metrics

These metrics power the staff leaderboard, individual drill-throughs, and coaching insights.

### 2.1 Performance Score (Leaderboard Ranking)

**Problem with Raw Sales:** Unfair due to shift type, section assignments, and traffic variance.

**Solution:** Normalize by context, then measure **controllable behaviors**.

#### Component Metrics

| # | Component | Metric | Weight | Formula | Why It Matters |
|---|-----------|--------|--------|---------|----------------|
| 44 | **Productivity** | Sales Per Hour | 25% | Sales ÷ Hours Worked | Fair across shifts |
| 45 | **Upselling** | Upsell Count | 20% | COUNT WHERE IsUpsellItem = 1 | Behavior, not luck |
| 46 | **Quality** | Avg Customer Rating | 25% | AVG(Feedback stars) | Guest experience |
| 47 | **Speed** | Tables Per Hour | 15% | Transaction Count ÷ Hours | Efficiency |
| 48 | **Discipline** | Attendance Score | 10% | See breakdown below | Reliability |
| 49 | **Consistency** | Week-over-Week Trend | 5% | This Week vs Last Week | Momentum |

#### Discipline Score Breakdown (10% of Total)

| # | Sub-Component | Metric | Weight | Formula |
|---|---------------|--------|--------|---------|
| 50 | **Punctuality** | On-Time % | 25% | 1 - (Late Days ÷ Total Days) |
| 51 | **No Early Outs** | Full Shift % | 20% | 1 - (Early Out Days ÷ Total Days) |
| 52 | **Shift Completion** | Attendance % | 25% | Actual Shifts ÷ Expected Shifts |
| 53 | **Order Accuracy** | Void Rate | 15% | 1 - (Voided Orders ÷ Total Orders) |
| 54 | **Conflict Resolution** | Resolution Success % | 15% | Resolved Complaints ÷ Total Complaints |

**Component Definitions:**
- **Shift Completion:** Expected shifts based on roster vs actual (COUNT of StaffHours rows)
- **Order Accuracy:** Requires `Sales_Data.IsVoid` flag (voided/corrected orders)
- **Conflict Resolution:** Requires `Feedback.ComplaintResolved` (Yes/No/NA) - measures SOP compliance when handling dissatisfied customers (NPS ≤ 4)

**Why These 5 Components?**

Other discipline metrics were considered but excluded:

| Excluded Metric | Reason |
|-----------------|--------|
| Uniform/Grooming | Requires manual manager observation (not POS data) |
| Cash Handling | Requires cash register variance data (external system) |
| Policy Violations | HR/disciplinary system (not dashboard scope) |

```
Discipline Score =
 (OnTimeRate × 0.25) +
 (FullShiftRate × 0.20) +
 (AttendanceRate × 0.25) +
 (1 - VoidRate × 0.15) +
 (ResolutionRate × 0.15)
```

**Note:** Resolution Rate only applies when complaints exist (NPS ≤ 4). Staff with zero complaints receive full 15% by default.

#### Final Score Calculation
```
Performance Score (0-100) =
 (SalesPerHour ÷ Team Avg × 25) +
 (UpsellCount ÷ Team Max × 20) +
 (AvgRating ÷ 5 × 25) +
 (TablesPerHour ÷ Team Avg × 15) +
 (AttendanceScore × 10) +
 (TrendScore × 5)
```

### 2.2 Individual Staff Metrics (Drill-through)

| # | Metric | Formula | Display | Purpose |
|---|--------|---------|---------|---------|
| 55 | **Gap to Target** | MonthlyTarget - MTD Sales | Currency | Progress tracking |
| 56 | **Gap to Bonus** | BonusThreshold - MTD Sales | Currency / if met | Incentive clarity |
| 57 | **Upsell Count** | COUNT(IsUpsellItem = 1) | Count | Behavior tracking |
| 58 | **Upsell Strike Rate** | Tables with Upsell ÷ Total Tables | % | Conversion rate |
| 59 | **Service Speed** | AVG(SettledTime - OrderTime) | Minutes | Efficiency |
| 60 | **Positive Mentions** | COUNT WHERE NPS >= 9 | Count | Customer love |
| 61 | **Late Count** | SUM(IsLate) | Count | Discipline issue |
| 62 | **Early Out Count** | SUM(IsEarlyOut) | Count | Discipline issue |

### 2.3 Tier Classification & Badges

| # | Tier/Badge | Criteria | Badge Display |
|---|------------|----------|---------------|
| 63 | **Gold** | Top 20% or > 120% of target | |
| 64 | **Silver** | 80-120% of target | |
| 65 | **Bronze** | < 80% of target | |

**Persona-Based Sub-Badges:**

| # | Badge | Criteria |
|---|-------|----------|
| 66 | **Dessert King/Queen** | Highest upsell count |
| 67 | **Speed Demon** | Fastest service time |
| 68 | **VIP Whisperer** | Highest rating from VIP customers |
| 69 | **Target Crusher** | First to hit monthly target |

### 2.4 Team Performance Metrics

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 70 | **Team Avg Performance** | AVG(Performance Score) | Baseline | Calculated |
| 71 | **Top Performer** | MAX(Performance Score) | Recognition | Calculated |
| 72 | **Performance Variance** | STDEV(Performance Score) | Consistency check | Calculated |
| 73 | **Team Upsell Rate** | Team Upsells ÷ Team Transactions | Team goal | Sales_Data |
| 74 | **Team Discipline Score** | AVG(Discipline Score) | Culture health | StaffHours + Feedback |

### 2.5 Peer Comparison Metrics

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 75 | **Rank Position** | Position in sorted Performance Score | Competitiveness | Calculated |
| 76 | **Gap to Leader** | Leader Score - Your Score | Motivation | Calculated |
| 77 | **Percentile** | Your Rank ÷ Total Staff × 100 | Contextual performance | Calculated |
| 78 | **Peer Avg (Same Role)** | AVG(Captains) or AVG(Servers) | Fair comparison | Staff_Roster |
| 79 | **Shift Peer Comparison** | Your Lunch vs Team Lunch Avg | Context-specific | Sales + StaffHours |

### 2.6 Coaching & Development Indicators

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 80 | **Improvement Trend** | Current Month - Last Month Score | Growth trajectory | Calculated |
| 81 | **Consistency Rating** | 1 - STDEV(Weekly Scores) | Reliability | Calculated |
| 82 | **Weakness Indicator** | MIN(Component Scores) | Focus area | Calculated |
| 83 | **Strength Indicator** | MAX(Component Scores) | Leverage point | Calculated |
| 84 | **Training Priority** | Lowest 3 Component Scores | Development plan | Calculated |

### 2.7 Achievement Milestones

| # | Milestone | Criteria | Recognition |
|---|-----------|----------|-------------|
| 85 | **First Sale** | First transaction logged | Welcome badge |
| 86 | **100 Club** | 100 transactions served | Volume badge |
| 87 | **Upsell Master** | 50+ upsells in a month | Sales badge |
| 88 | **Perfect Week** | 7 days, zero lates/early outs | Discipline badge |
| 89 | **5-Star Streak** | 5+ consecutive NPS 9+ ratings | Quality badge |
| 90 | **Target Achiever** | Hit monthly target | Achievement badge |

### 2.8 Additional Staff Metrics (Extended Drill-Through)

These metrics appear in individual staff detail pages for comprehensive performance tracking.

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 91 | **Total Sales (MTD)** | SUM(Sales) WHERE Month = Current | Monthly progress | Sales_Data |
| 92 | **Total Sales (YTD)** | SUM(Sales) WHERE Year = Current | Annual progress | Sales_Data |
| 93 | **Transactions Served (MTD)** | COUNT DISTINCT(TransactionID) MTD | Volume tracking | Sales_Data |
| 94 | **Transactions Served (YTD)** | COUNT DISTINCT(TransactionID) YTD | Volume tracking | Sales_Data |
| 95 | **Average Transaction Value** | Total Sales ÷ Transactions | Guest value | Sales_Data |
| 96 | **Shift Type Distribution** | % by Morning/Afternoon/Evening | Schedule pattern | StaffHours |
| 97 | **Peak Performance Hours** | Hours with Highest Sales/Hour | Optimal scheduling | Sales + StaffHours |
| 98 | **Weekend vs Weekday Performance** | Avg Sales Weekend vs Weekday | Pattern analysis | Sales + Date |
| 99 | **Morning Shift Sales** | SUM(Sales) WHERE Shift = 'Morning' | Shift contribution | Sales + StaffHours |
| 100 | **Afternoon Shift Sales** | SUM(Sales) WHERE Shift = 'Afternoon' | Shift contribution | Sales + StaffHours |
| 101 | **Evening Shift Sales** | SUM(Sales) WHERE Shift = 'Evening' | Shift contribution | Sales + StaffHours |
| 102 | **Hourly Sales Rate** | Total Sales ÷ Total Hours | Productivity metric | Sales + StaffHours |
| 103 | **Customer Satisfaction Score** | AVG(Feedback Rating) | Quality measure | Feedback |
| 104 | **Compliment Count** | COUNT WHERE NPS >= 9 | Positive feedback | Feedback |
| 105 | **Complaint Count** | COUNT WHERE NPS <= 4 | Negative feedback | Feedback |
| 106 | **Training Courses Completed** | COUNT(Completed Courses) | Development tracking | HR System |
| 107 | **Certifications Held** | COUNT(Active Certifications) | Qualification level | HR System |
| 108 | **Years of Service** | Current Date - Hire Date | Experience | Staff_Roster |
| 109 | **Promotion Readiness Score** | Composite score (0-100) | Career progression | Calculated |
| 110 | **Mentoring Others Count** | COUNT(Staff Being Mentored) | Leadership activity | HR System |
| 111 | **SOP Compliance Rate** | Compliant Actions ÷ Total Actions | Process adherence | Operational Data |
| 112 | **Uniform/Presentation Score** | Manager Rating (1-5) | Professional standards | Manager Assessment |
| 113 | **Team Collaboration Score** | Peer Rating (1-5) | Teamwork quality | Peer Feedback |
| 114 | **Initiative/Proactivity Score** | Manager Rating (1-5) | Self-starter behavior | Manager Assessment |
| 115 | **Problem-Solving Score** | Manager Rating (1-5) | Critical thinking | Manager Assessment |
| 116 | **Communication Score** | Manager Rating (1-5) | Clarity & effectiveness | Manager Assessment |
| 117 | **Leadership Potential Score** | Composite score (0-100) | Future leader indicator | Calculated |

---

## 3. Loyalty Loop: Customer Metrics

These metrics track customer acquisition, retention, satisfaction, and lifetime value.

### 3.1 Patronage Funnel (Acquisition & Segmentation)

| # | Stage | Definition | Metric | Purpose |
|---|-------|------------|--------|---------|
| 118 | **First Timer** | Visit Count = 1 | COUNT DISTINCT CustomerID | New acquisition rate |
| 119 | **Returner** | Visit Count = 2 | COUNT DISTINCT CustomerID | Initial retention |
| 120 | **Regular** | Visit Count 3-9 | COUNT DISTINCT CustomerID | Building loyalty |
| 121 | **VIP** | Visit Count >= 10 | COUNT DISTINCT CustomerID | Core loyalists |

### 3.2 Retention & Churn Metrics

| # | Metric | Formula | Purpose | Benchmark |
|---|--------|---------|---------|-----------|
| 122 | **Repeat Rate** | Returners ÷ First Timers × 100 | Conversion success | > 30% |
| 123 | **VIP Retention** | Active VIPs ÷ Total VIPs | Loyalty strength | > 80% |
| 124 | **Lapsed Customers** | Last Visit > 60 days | At-risk list | Minimize |
| 125 | **Churn Rate** | Lost Customers ÷ Total | Health indicator | < 20% |
| 126 | **Avg Days Between Visits** | Days ÷ Visit Count | Frequency | Lower = Better |
| 127 | **Lost Revenue Risk** | Lapsed VIP Count × Avg VIP Check | Urgency metric | IDR amount |

### 3.3 Customer Lifetime Value (CLV)

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 128 | **Avg Customer Lifetime** | AVG(Last Visit - First Visit) | Longevity | Sales_Data |
| 129 | **CLV (Simple)** | Avg Check × Avg Visits | Revenue potential | Sales_Data |
| 130 | **VIP Contribution %** | VIP Sales ÷ Total Sales | Value concentration | Sales_Data |
| 131 | **Top Decile Revenue** | Top 10% Customer Sales | Pareto analysis | Sales_Data |

### 3.4 Sentiment & Experience

| # | Metric | Formula | Display | Data Source |
|---|--------|---------|---------|-------------|
| 132 | **NPS Score** | (Promoters - Detractors) ÷ Total × 100 | -100 to +100 | Feedback |
| 133 | **Promoter %** | NPS >= 9 ÷ Total | % | Feedback |
| 134 | **Detractor %** | NPS <= 6 ÷ Total | % | Feedback |
| 135 | **Avg Overall Rating** | AVG(Food + Service + Friendliness + Atmosphere) ÷ 4 | 1-5 stars | Feedback |
| 136 | **Food Quality Score** | AVG(FoodQuality) | 1-5 stars | Feedback |
| 137 | **Service Speed Score** | AVG(ServiceSpeed) | 1-5 stars | Feedback |
| 138 | **Staff Friendliness Score** | AVG(StaffFriendliness) | 1-5 stars | Feedback |
| 139 | **Atmosphere Score** | AVG(Atmosphere) | 1-5 stars | Feedback |

### 3.5 Feedback & Engagement

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 140 | **Feedback Response Rate** | Feedback Count ÷ Total Transactions | Engagement | Feedback |
| 141 | **Word Cloud Keywords** | Frequency of ReviewText phrases | Sentiment mining | Feedback |
| 142 | **Complaint Ratio** | NPS ≤ 4 ÷ Total Feedback | Issue rate | Feedback |
| 143 | **Resolution Rate** | Resolved ÷ Total Complaints | Service recovery | Feedback |

### 3.6 Complaint Analysis (NEW)

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 144 | **Complaint Category Breakdown** | COUNT per ComplaintCategory | Root cause analysis | Feedback |
| 145 | **Cleanliness Complaints** | COUNT WHERE Category = 'Cleanliness' | Facility issues | Feedback |
| 146 | **Menu Variation Complaints** | COUNT WHERE Category = 'Menu Variation' | Menu fatigue | Feedback |
| 147 | **Service Complaints** | COUNT WHERE Category = 'Service' | Staff issues | Feedback |
| 148 | **Product Quality Complaints** | COUNT WHERE Category = 'Product Quality' | Kitchen issues | Feedback |
| 149 | **Price/Discount Complaints** | COUNT WHERE Category = 'Price/Discount' | Value perception | Feedback |
| 150 | **General Experience Complaints** | COUNT WHERE Category = 'General Experience' | Overall dissatisfaction | Feedback |
| 151 | **Multi-Tag Complaint %** | COUNT WHERE Category2 IS NOT NULL ÷ Total | Complexity indicator | Feedback |
| 152 | **Avg Tags per Complaint** | (Cat1 + Cat2 + Cat3 Count) ÷ Complaints | Issue severity | Feedback |

### 3.7 Customer Journey Metrics

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 153 | **First Visit Conversion** | Returners ÷ First Timers | Sticky factor | Sales_Data |
| 154 | **Regular-to-VIP Promotion** | New VIPs ÷ Regulars | Loyalty growth | Sales_Data |
| 155 | **Avg Visits Per Month** | Total Visits ÷ Active Customers ÷ Months | Frequency pattern | Sales_Data |
| 156 | **Peak Visit Day** | MAX(Visits by DayOfWeek) | Customer habits | Sales_Data + Date |

### 3.8 Spend Behavior

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 157 | **Avg Check by Segment** | Sales ÷ Transactions per Segment | Value comparison | Sales_Data |
| 158 | **Upsell Acceptance (VIP)** | VIP Upsell Txns ÷ VIP Total Txns | Receptiveness | Sales_Data |
| 159 | **Discount Dependency** | Discounted Txns ÷ Total per Customer | Price sensitivity | Sales_Data |
| 160 | **Reservation Premium** | Reservation Avg Check - Walk-in Avg Check | Premium value | Sales_Data |

---

## 4. Operational Metrics (Cross-cutting)

These metrics span all tabs and inform management decisions about scheduling, capacity, and profitability.

### 4.1 Efficiency Metrics

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 161 | **Sales Per Man Hour** | Total Sales ÷ SUM(TotalHoursWorked) | Labor efficiency | Sales + StaffHours |
| 162 | **Revenue Per Cover** | Total Sales ÷ DISTINCT(TransactionID) | Guest value | Sales_Data |
| 163 | **Tables Per Hour (Staff)** | DISTINCT(TransactionID) ÷ Hours per Staff | Speed | Sales + StaffHours |
| 164 | **Avg Service Duration** | AVG(SettledTimestamp - OrderTimestamp) | Speed | Sales_Data |

### 4.2 Capacity Metrics

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 165 | **Table Turnover Rate** | DISTINCT(TransactionID) ÷ 68 tables | Capacity usage | Sales_Data |
| 166 | **Peak Hour Identification** | MAX(Revenue by Hour) | Scheduling | Sales_Data + Date |
| 167 | **Seat Utilization %** | (Guests Served ÷ 340 seats) × 100 | Capacity | Sales_Data |
| 168 | **Reservation Fill Rate** | Reservations ÷ Available Slots | Booking efficiency | Sales_Data |

### 4.3 Profitability Metrics

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 169 | **Discount Rate** | SUM(DiscountAmount) ÷ SUM(GrossAmount) | Margin leakage | Sales_Data |
| 170 | **Net Revenue Ratio** | (Gross - Discounts) ÷ Gross | True margin | Sales_Data |
| 171 | **Upsell Revenue %** | Upsell Sales ÷ Total Sales | Add-on impact | Sales_Data |
| 172 | **Avg Check by Shift** | Revenue ÷ Transactions per Shift | Shift value | Sales + StaffHours |

### 4.4 Shift Performance

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 173 | **Lunch vs Dinner Revenue** | SUM by ShiftType | Scheduling decisions | Sales + StaffHours |
| 174 | **Staff Coverage Ratio** | Transactions ÷ Staff on Duty | Workload balance | Sales + StaffHours |
| 175 | **Shift Profitability** | Revenue ÷ Labor Hours per Shift | ROI per shift | Sales + StaffHours |

### 4.5 Quality & Loss Metrics

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 176 | **Void Rate** | SUM(IsVoid) ÷ Total Transactions | Kitchen/order issues | Sales_Data |
| 177 | **Complaint Rate** | COUNT(NPS ≤ 4) ÷ Total Feedback | Service quality | Feedback |
| 178 | **Resolution Success** | Resolved ÷ Total Complaints | SOP compliance | Feedback |
| 179 | **Staff Absentee Rate** | No-shows ÷ Expected Shifts | Reliability | StaffHours |

### 4.6 Trend Metrics

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 180 | **Week-over-Week Growth** | (This Week - Last Week) ÷ Last Week | Momentum | Sales_Data |
| 181 | **Month-to-Date Pacing** | Actual ÷ (Target × Days Elapsed ÷ Days in Month) | On-track indicator | Sales + Targets |
| 182 | **Day-of-Week Pattern** | AVG Revenue by DayOfWeek | Scheduling | Sales + Date |

### 4.7 Reservation Conversion Metrics (NEW)

| # | Metric | Formula | Purpose | Data Source |
|---|--------|---------|---------|-------------|
| 183 | **Booking Conversion Rate** | Completed ÷ Total Bookings | Sales effectiveness | Bookings |
| 184 | **Cancellation Rate** | Cancelled ÷ Total Bookings | Lost opportunity | Bookings |
| 185 | **No-Show Rate** | No-Show ÷ Total Bookings | Revenue risk | Bookings |
| 186 | **No-Show Rate by Category** | No-Shows per ReservationCategory | Pattern identification | Bookings |
| 187 | **Avg Party Size by Category** | AVG(PartySize) per Category | Event planning | Bookings |
| 188 | **Revenue Variance** | (Actual - Estimated) ÷ Estimated | Forecast accuracy | Bookings |
| 189 | **Avg Booking Lead Time** | AVG(ScheduledDate - BookingDate) | Planning window | Bookings |
| 190 | **Completed Booking Revenue** | SUM(ActualRevenue WHERE Status = 'Completed') | Realized value | Bookings |
| 191 | **Lost Revenue (No-Shows)** | SUM(EstimatedRevenue WHERE Status = 'No-Show') | Opportunity cost | Bookings |

---

## Data Source Mapping

| Table | Metrics It Powers |
|-------|-------------------|
| Sales_Data | Revenue, Waterfall, Upsell Rate, Service Speed, **Order Accuracy (IsVoid)**, **Menu Performance (MenuCategory, MenuSeason)**, **Reservation Analysis (ReservationCategory)** |
| Staff_Roster | Targets, Tiers, Personas |
| Targets | Gap calculations, Pacing |
| Date | Time intelligence, Trends |
| Feedback | NPS, Ratings, Word Cloud, Positive Mentions, **Complaints**, **Complaint Categories (ComplaintCategory1-3)** |
| StaffHours | Punctuality, Efficiency, Shift analysis |
| **Bookings** | **Reservation Conversion, No-Show Rate, Revenue Variance, Booking Lead Time** |

---

## Metrics Summary

**Total Metrics in Full Catalog:** 191 (was 139, then 164)

**New Additions:**
- Menu Performance: 4 metrics
- Reservation Analysis: 6 metrics
- Complaint Analysis: 9 metrics
- Reservation Conversion: 9 metrics
- Additional Staff Metrics (Extended Drill-Through): 27 metrics

**Breakdown by Section:**
- **Section 1 (Revenue): 43 metrics (1-43)**
 - Primary KPIs: 1-6
 - Waterfall Chart: 7-11
 - Revenue by Time Period: 12-16
 - Revenue Mix Analysis: 17-22
 - Menu Performance: 23-26
 - Reservation Analysis: 27-32
 - Transaction Metrics: 33-37
 - Growth & Pacing: 38-43

- **Section 2 (Staff): 74 metrics (44-117)**
 - Performance Components: 44-49
 - Discipline Breakdown: 50-54
 - Individual Staff Metrics: 55-62
 - Tier Classifications: 63-65
 - Persona Badges: 66-69
 - Team Performance: 70-74
 - Peer Comparison: 75-79
 - Coaching & Development: 80-84
 - Achievement Milestones: 85-90
 - Additional Staff Metrics (Extended Drill-Through): 91-117

- **Section 3 (Customer): 43 metrics (118-160)**
 - Patronage Funnel: 118-121
 - Retention & Churn: 122-127
 - CLV: 128-131
 - Sentiment & Experience: 132-139
 - Feedback & Engagement: 140-143
 - Complaint Analysis: 144-152
 - Customer Journey: 153-156
 - Spend Behavior: 157-160

- **Section 4 (Operational): 31 metrics (161-191)**
 - Efficiency: 161-164
 - Capacity: 165-168
 - Profitability: 169-172
 - Shift Performance: 173-175
 - Quality & Loss: 176-179
 - Trend: 180-182
 - Reservation Conversion: 183-191

**Total Metrics: 191** (numbered sequentially 1-191)

**Implementation Priority:**
- See `06-dashboard-implementation-plan.md` for which metrics to build first (~28 per tab)
- See `07-ui-ux-design-specs.md` for visual specifications

---

## Related

- **[[products/13-saas-enterprise/13-saas-enterprise|SaaS Enterprise Product]]** - Product overview
- **[[products/13-saas-enterprise/specifications/COMPLETE-METRICS-LIST|Complete Metrics List]]** - All 191 metrics enumerated
- **[[products/13-saas-enterprise/specifications/implementation-plan|Implementation Plan]]** - Dashboard build priorities
- **[[products/13-saas-enterprise/specifications/ui-ux-design-specs|UI/UX Design Specs]]** - Visual specifications
- **[[products/13-saas-enterprise/specifications/enterprise-features|Enterprise Features]]** - Advanced analytics features
