# Gamification Feature Specification

**Feature:** User Engagement & Retention System
**Version:** 1.0
**Last Updated:** December 31, 2025
**Status:** Specification Complete, Ready for Development

**Strategic Context:** See [[products/01-power-bi-template/product-strategy/core/01-master-strategy#9-retention-strategy---gamification|product-strategy/01-master-strategy.md - Section 9: Retention Strategy]]

---

## 1. Business Health Score - Technical Specification

### North Star Metric (0-100 Score)

**Visual Placement:** Top-right corner of EVERY page

**UI Mockup:**
```

 Business Health Score: 78/100
 (GOOD - Keep Going!)

 Next Level: 85/100 (7 points to go!)
 Tip: Reduce food cost 2% -> +5 points

```

### Calculation Formula (DAX Measure)

```dax
Business Health Score =
VAR FinancialScore =
 (RevenueVsTarget% * 0.10) +
 ((1 - FoodCostActual / FoodCostTarget) * 0.10) +
 (ProfitMargin% * 0.10)

VAR OperationalScore =
 (StaffConsistency% * 0.10) +
 (InventoryTurnover% * 0.10) +
 (PeakCoverage% * 0.10)

VAR CustomerScore =
 (RepeatRate% * 0.10) +
 (AvgTransactionGrowth% * 0.10)

VAR DataMaturityScore =
 (UsageStreak / 30 * 0.05) +
 (InsightsDiscovered / 10 * 0.05) +
 (ActionsTaken / 5 * 0.05) +
 (FeaturesUnlocked / 20 * 0.05)

RETURN
 (FinancialScore + OperationalScore + CustomerScore + DataMaturityScore) * 100
```

###Weighted Components

| Component | Weight | Sub-Metrics |
|-----------|--------|-------------|
| **Financial Health** | 30% | Revenue vs Target (10%), Food Cost % (10%), Profit Margin (10%) |
| **Operational Excellence** | 30% | Staff Performance Consistency (10%), Inventory Turnover (10%), Peak Hour Coverage (10%) |
| **Customer Success** | 20% | Repeat Customer Rate (10%), Average Transaction Value (10%) |
| **Data Maturity** | 20% | Dashboard Usage Streak (5%), Insights Discovered (5%), Actions Taken (5%), Features Unlocked (5%) |

### Status Labels

| Score Range | Label | Color | Message |
|-------------|-------|-------|---------|
| 0-40 | NEEDS ATTENTION | Red (#E74C3C) | "Focus on basics. You can do this!" |
| 41-60 | DEVELOPING | Amber (#F39C12) | "Making progress. Keep learning!" |
| 61-75 | GOOD | Green (#2ECC71) | "Solid! Keep it up!" |
| 76-85 | EXCELLENT | Dark Green (#27AE60) | "Outstanding performance!" |
| 86-100 | EXCEPTIONAL | Gold (#F1C40F) | " Top tier! You're crushing it!" |

---

## 2. Achievement System - Complete Catalog (52 Badges)

### Tier 1: Onboarding Achievements (Week 1) - 10 Achievements

| Achievement ID | Name | Icon | Unlock Condition | Points | Message |
|----------------|------|------|------------------|--------|---------|
| ACH001 | Dashboard Explorer | | Open dashboard first time | +5 | "Welcome! Your transformation begins now." |
| ACH002 | Data Wizard | | Import first Excel file | +10 | "Magic! Your data is now alive." |
| ACH003 | Detective | | Spend 5+ minutes exploring | +5 | "You're getting curious. Good sign!" |
| ACH004 | Fast Starter | | Complete onboarding in <10 min | +10 | "Wow! Most people take 30 min. You're a natural." |
| ACH005 | First Filter | | Use slicer/filter first time | +5 | "You're making it YOUR own!" |
| ACH006 | Data Refresher | | Refresh data first time | +5 | "Fresh data = fresh insights!" |
| ACH007 | Week One Complete | | Complete all Week 1 tasks | +15 | "Solid start! You're ahead of 70% of users." |
| ACH008 | Video Watcher | | Watch 1 tutorial video | +5 | "Learning is power!" |
| ACH009 | Metric Explorer | | Click on 5 different metrics | +10 | "Curiosity unlocks insights!" |
| ACH010 | Time Traveler | ⏰ | Compare two time periods | +10 | "Strategic thinking activated!" |

### Tier 2: Habit Formation (Week 2-4) - 12 Achievements

| Achievement ID | Name | Icon | Unlock Condition | Points | Message |
|----------------|------|------|------------------|--------|---------|
| ACH011 | Morning Ritual | | 7-day check-in streak | +20 | "Data-driven is now a habit!" |
| ACH012 | Trend Spotter | | Compare this week vs last | +10 | "Comparing periods = strategic!" |
| ACH013 | Personal Touch | | Customize dashboard view | +5 | "Making it your own!" |
| ACH014 | Always Current | | Refresh data 5 times | +10 | "You get it!" |
| ACH015 | Two Weeks Strong | | 14-day check-in streak | +30 | "Habits forming!" |
| ACH016 | Feature Finder | | Use drill-through feature | +10 | "Unlocking hidden powers!" |
| ACH017 | Mobile User | | Open on mobile device | +5 | "Data anywhere!" (T2/T3 only) |
| ACH018 | Night Owl | | Check dashboard after 9pm | +5 | "Dedication!" |
| ACH019 | Early Bird | | Check dashboard before 7am | +5 | "Morning person!" |
| ACH020 | Weekend Warrior | | Check on Saturday/Sunday | +10 | "No days off!" |
| ACH021 | Consistent Refresher | | Refresh data daily for 7 days | +15 | "Current data = best decisions!" |
| ACH022 | Month One Complete | | 30 days since signup | +50 | "You're 1% of users who stick!" |

### Tier 3: Insight Discovery (Month 2-3) - 10 Achievements

| Achievement ID | Name | Icon | Unlock Condition | Points | Message |
|----------------|------|------|------------------|--------|---------|
| ACH023 | Red Alert Responder | | Click on "red" (bad) metric | +15 | "Facing problems head-on. Courage!" |
| ACH024 | Aha! | | Use drill-through 3 times | +10 | "Digging deeper like a pro!" |
| ACH025 | Outlet Analyst | | Compare 2+ outlets side-by-side | +20 | "Multi-location thinking!" (T2/T3) |
| ACH026 | Ambitious | | Set a revenue/profit target | +10 | "Goals drive action!" |
| ACH027 | Insight Hunter | | Discover 5 different insights | +20 | "Pattern recognition!" |
| ACH028 | Drill Master | | Use drill-through 10 times | +15 | "Deep diver!" |
| ACH029 | Comparison King/Queen | | Compare 5 different metrics | +15 | "Analytical mind!" |
| ACH030 | Two Month Streak | | 60-day check-in streak | +50 | "Elite dedication!" |
| ACH031 | Filter Expert | | Use 10 different filter combinations | +15 | "Custom views master!" |
| ACH032 | Bookmark Creator | | Save custom view (bookmark) | +10 | "Personal workspace!" (T2/T3) |

### Tier 4: Action Taker (Month 3-6) - 10 Achievements

| Achievement ID | Name | Icon | Unlock Condition | Points | Message |
|----------------|------|------|------------------|--------|---------|
| ACH033 | Efficiency Expert | | Food cost decreases 2%+ MoM | +30 | " You DID something with data!" |
| ACH034 | Growth Hacker | | Revenue increases 10%+ MoM | +30 | "Revenue UP! Keep it going!" |
| ACH035 | People Manager | | Staff variance decreases | +20 | "Team leveling up!" |
| ACH036 | Steady Hand | | Hit target 3 months in row | +50 | "Consistent excellence!" |
| ACH037 | Profit Wizard | | Profit margin increases 5%+ | +30 | "Bottom line improved!" |
| ACH038 | Menu Optimizer | | Remove bottom 3 items | +20 | "Focus on winners!" |
| ACH039 | Customer Magnet | | Repeat rate increases 10%+ | +25 | "Loyalty building!" |
| ACH040 | Peak Performer | | Revenue in top 20% vs peers | +40 | "Elite tier!" (T3 leaderboard) |
| ACH041 | Cost Ninja | | 3 months of <30% food cost | +40 | "Mastery!" |
| ACH042 | Action Hero | | Complete 5 action items | +25 | "Doer, not just viewer!" |

### Tier 5: Mastery (Month 6+) - 10 Achievements

| Achievement ID | Name | Icon | Unlock Condition | Points | Message |
|----------------|------|------|------------------|--------|---------|
| ACH043 | Dashboard Master | | All features unlocked + 90-day streak | +100 | "Hall of Fame!" |
| ACH044 | Business Health: Excellent | | Maintain 90+ score for 30 days | +100 | "Transformation complete!" |
| ACH045 | Mentor | | Refer 3+ customers | +50 + Rp 600K | "Helping others transform!" |
| ACH046 | Six Month Warrior | | 180-day streak | +100 | "Unbreakable!" |
| ACH047 | Perfect Month | | 100 score for entire month | +75 | "Perfection!" |
| ACH048 | Growth Champion | | 50% revenue growth YoY | +60 | "Massive growth!" |
| ACH049 | Cost Master | | <25% food cost for 3 months | +60 | "Industry-leading!" |
| ACH050 | Multi-Outlet Master | | Manage 3+ outlets (T3) | +50 | "Scaling success!" |
| ACH051 | Community Leader | | 5+ referrals | +75 + Rp 1M | "Change maker!" |
| ACH052 | Legend | | Level 10 reached | +150 | "Elite status!" |

---

## 3. Progress Levels - Technical Specification

### Level System (10 Levels)

| Level | Title | Points Required | Tier Access | Features Unlocked |
|-------|-------|-----------------|-------------|-------------------|
| 1 | Newbie | 0-100 | All | Basic dashboard, 10 onboarding achievements |
| 2 | Explorer | 101-250 | All | Drill-through pages, filter saving |
| 3 | Analyst | 251-500 | All | Custom views, bookmarks (T2/T3) |
| 4 | Strategist | 501-750 | All | Advanced tooltips, what-if parameters (T3) |
| 5 | Optimizer | 751-1000 | T2/T3 | Weekly challenges, action tracking |
| 6 | Pro | 1001-1500 | T2/T3 | Monthly challenges, peer comparison |
| 7 | Expert | 1501-2000 | T2/T3 | Badge showcase page, share templates |
| 8 | Guru | 2001-3000 | T3 | Leaderboard access, team achievements |
| 9 | Legend | 3001-5000 | T3 | Custom challenges, white-label badges |
| 10 | Hall of Fame | 5000+ | T3 | Elite status, featured case study |

### Level-Up Celebration Animation

**Trigger:** When points cross level threshold

**Visual:**
```


 LEVEL UP!

 You're now a "STRATEGIST"
 (Level 4)

 New Feature Unlocked:
 Advanced Tooltips

 Next: Level 5 "Optimizer"
 (249 points to go)

 [Continue ]

```

**Audio:** Optional success sound (if Power BI supports)

---

## 4. Visual Components - UI Specifications

### Progress Card (Top-Right Corner)

**Dimensions:** 350px × 400px
**Position:** Fixed top-right on all pages
**Always Visible:** Yes

**Component Structure:**
```

 [UserName] (Lv [X]: [Title])

 Health: [Score]/100
 Points: [Current]/[Next]
 Streak: [Days] days

 Progress to Lv [X+1]:
 [ProgressBar] [Percentage]%

 Next Achievement:
 "[Name]" ([Condition])
 Current: [Value] -> [Target]

 [View All Badges ] (button)

```

**Colors:**
- Background: #F8F9FA
- Border: #E0E0E0
- Progress bar: Gradient #3498DB -> #2ECC71
- Text: #2C3E50

### Achievement Pop-Up

**Trigger:** Immediately when achievement unlocked
**Duration:** Auto-dismiss after 10 seconds (or user clicks)
**Position:** Center screen overlay

```


 ACHIEVEMENT UNLOCKED!

 [BADGE ICON]
 "[Achievement Name]"

 [Achievement Description]

 Reward: +[X] points
 Level: [Old] -> [New] ([Title])

 [Next Streak/Tip]:
 [Guidance Text]

 [Share ] [Close ]

```

### Badge Showcase Page

**Location:** Dedicated page tab " My Achievements"
**Layout:** Grid 4 columns × N rows

**Badge Card:**
```

 [ICON 64px]

 [Badge Name]

 Earned: [Date]
 +[X] points

 [Rarity: X%] % of users who have it

```

**States:**
- Earned: Full color, clickable (shows details)
- Locked: Grayscale, shows unlock condition

---

## 5. Behavioral Nudges - Notification Specs

### Streak Protection Notifications

**Channel:** Email + WhatsApp (if T2/T3 and opted-in)
**Timing:** 6:00 PM local time if not checked today

**Templates:**

**Day 6 of Streak:**
```
Subject: You're on fire! Don't break your streak

Hi [Name],

You're on a 6-day streak!
Tomorrow = "Morning Ritual" achievement unlock.
Don't break it now!

[Open Dashboard]

- Your Dashboard
```

**Missed Day (Streak Broken):**
```
Subject: Comeback time!

Hi [Name],

Streak broken at [X] days.
But good news: "Comeback Kid" achievement unlocked!
(Rebuild streak to previous level for +[X] bonus)

Fresh start today!

[Open Dashboard]
```

### Progress Reminders

**Trigger:** Close to next level (within 20 points)
**Channel:** In-dashboard banner + optional email

```
 You're [X] points from Level [Y]!

Quick wins:
 Refresh data today (+5)
 Compare this week vs last (+10)
 Check food cost trend (+3)

= Level up in 5 minutes!
```

### Low Engagement Nudge

**Trigger:** No check-in for 5 days
**Channel:** Email

```
Subject: Your business misses you!

Hi [Name],

Haven't seen you this week.

Fun fact: Owners who check daily grow 2x faster.
(True story based on our data!)

[Quick 2-Min Check-In]

See you soon,
Your Dashboard
```

---

## 6. Challenges - Technical Specification

### Weekly Challenges

**Rotation:** New challenge every Monday
**Display:** Dedicated card on homepage

**Challenge Types:**

1. **Discovery Challenge**
 - Goal: Unlock 5 achievements this week
 - Reward: +50 points + "Quick Learner" badge
 - Progress UI: `3/5 `

2. **Consistency Challenge**
 - Goal: Check dashboard every day (Mon-Sun)
 - Reward: +30 points + badge
 - Progress UI: `5/7 `

3. **Insight Challenge**
 - Goal: Find 3 actionable insights
 - Reward: +40 points + "Detective" badge
 - Guidance:
 - Check "red" metrics
 - Compare month-over-month
 - Identify top 3 revenue drivers

### Monthly Challenges

**Track in:** Dedicated "Challenges" page

**Month 1: Foundation Builder**
```
Goals:
 Complete onboarding
 Import data 4 times
 Reach Level 3
 Earn 5 achievements

Reward: +100 points + Certificate
```

**Month 2: Action Taker**
```
Goals:
 Improve 1 metric by 5%+
 Maintain 10+ day streak
 Use drill-through 3 times
 Share 1 insight with team

Reward: +150 points + Badge
```

**Month 3: Transformation**
```
Goals:
 Business Health Score 75+
 Hit revenue target
 20+ day streak
 Refer 1 friend

Reward: +200 points + Badge + Rp 200K discount
```

---

## 7. Leaderboard - Technical Specification (Tier 3 Only)

### Anonymous Leaderboard Design

**Privacy:** User IDs anonymized (Owner_XXXX)
**Metrics Shown:** Level, Streak only (NO revenue/profit)
**Update Frequency:** Daily at midnight

**UI Table:**
```

 Top Performers This Month

 Rank Name Level Streak

 Owner_4521 Lv 8 45 days
 Owner_2134 Lv 7 38 days
 Owner_8765 Lv 6 30 days
 4 Owner_3421 Lv 6 28 days
 5 **YOU** Lv 5 23 days


 You're in top 10%!
 Beat Owner_3421 to rank #4.
```

**Competitive Nudge (Weekly Email):**
```
"Owner_4521 has a 45-day streak!
Can you beat it? "
```

---

## 8. Social Sharing - Templates

### LinkedIn Post (Auto-Generated)

**Trigger:** When user clicks "Share" on major achievement

```
I just earned my "[Achievement Name]" badge! [ICON]

After [X] days of data check-ins, my café's:
 Revenue [up/down] [X]%
 Food cost [up/down] [X]%
 Business Health Score: [X]/100

Tools: Power BI + consistent effort.

[Image: Badge certificate with stats]

#DataDriven #SmallBusiness #FnB
```

### Instagram Story Template

**Design Assets Needed:**
- Background: Dashboard screenshot (auto-capture)
- Overlay: Achievement badge PNG (transparent)
- Text: "Level [X] unlocked! "
- CTA: "Get your own dashboard -> " + link

**Dimensions:** 1080 × 1920 (Instagram story standard)

---

## 9. Implementation Roadmap

### Phase 1: Core System (Foundation)

**Must-Have:**
- [ ] Business Health Score DAX measure
- [ ] Point tracking (hidden data table)
- [ ] Progress card visual component
- [ ] 10 core achievements (onboarding only)
- [ ] Level system (10 levels)

**Deliverable:** Basic gamification visible on dashboard

**Acceptance Criteria:**
- Health Score displays correctly on all pages
- Points accumulate when conditions met
- Progress card shows current level/points
- At least 5 achievements can be unlocked

---

### Phase 2: Engagement Hooks (Launch)

**Should-Have:**
- [ ] Streak tracking (consecutive days)
- [ ] Achievement pop-up visuals (bookmarks)
- [ ] Full 52 achievement catalog
- [ ] Weekly challenges (3 types)
- [ ] Email notifications (streak protection)

**Deliverable:** Daily engagement hooks functional

**Acceptance Criteria:**
- Streak counter accurate
- Pop-ups appear on achievement unlock
- Weekly challenge rotates on Mondays
- Emails send at 6pm if not checked

---

### Phase 3: Social & Retention (Post-Launch)

**Nice-to-Have:**
- [ ] Badge showcase page
- [ ] Share templates (LinkedIn, IG)
- [ ] Anonymous leaderboard (T3)
- [ ] Referral tracking
- [ ] Monthly challenges

**Deliverable:** Viral loop + long-term hooks

**Acceptance Criteria:**
- Showcase page shows all badges (earned + locked)
- Share button generates correct text + image
- Leaderboard updates daily
- Referral codes tracked

---

### Phase 4: Advanced Features (Month 3+)

**Future Enhancements:**
- [ ] Personalized challenges (ML-based)
- [ ] Peer cohorts (group users by industry/size)
- [ ] Monthly tournaments
- [ ] Premium badges (paid upgrades)
- [ ] Team achievements (multi-user T3 accounts)

**Deliverable:** Advanced retention mechanics

---

## 10. Data Model Requirements

### New Tables Needed

**UserProgress Table:**
| Column | Type | Description |
|--------|------|-------------|
| UserID | Text | Unique user identifier |
| Points | Integer | Total points accumulated |
| Level | Integer | Current level (1-10) |
| Streak | Integer | Consecutive days checked |
| LastCheckIn | DateTime | Last dashboard open |
| AchievementsUnlocked | Text | Comma-separated achievement IDs |
| FeaturesUnlocked | Text | Comma-separated feature flags |

**Achievements Table (Static):**
| Column | Type | Description |
|--------|------|-------------|
| AchievementID | Text | Unique ID (ACH001-ACH052) |
| Name | Text | Display name |
| Icon | Text | Emoji or icon code |
| Points | Integer | Reward points |
| UnlockCondition | Text | Description |
| Tier | Integer | Minimum tier required |
| Rarity | Decimal | % of users who have it |

**Challenges Table:**
| Column | Type | Description |
|--------|------|-------------|
| ChallengeID | Text | Unique ID |
| Type | Text | Weekly/Monthly |
| StartDate | Date | Challenge start |
| EndDate | Date | Challenge end |
| Goals | Text | JSON of goal conditions |
| Reward | Integer | Points reward |

---

## 11. Success Metrics & Tracking

### Product Metrics (Track Weekly)

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| DAU/MAU Ratio | >40% | Dashboard open events |
| Avg Points Per User | >300 in Month 1 | UserProgress table |
| Achievement Unlock Rate | >10 in Month 1 | Count achievements |
| Streak Retention | >30% with 7+ days | Streak column |
| Level Progression | Avg Level 5 by Month 3 | Level column |

### Business Impact Metrics

| Metric | Hypothesis | Measurement |
|--------|-----------|-------------|
| Churn Reduction | -50% vs non-gamified | Retention cohort analysis |
| Upgrade Rate | +30% T1 -> T2/T3 | Conversion tracking |
| Referral Rate | +40% | Referral codes used |
| NPS Increase | +15 points | Survey (gamified vs not) |

---

## 12. Technical Constraints

**Power BI Limitations:**
- No native notification system -> Must use Power Automate + Email/WhatsApp
- No persistent user state -> Must store in hidden data table
- Limited animation -> Use bookmark transitions for pop-ups
- No audio -> Visual-only celebrations

**Workarounds:**
- Use Power Automate for email notifications
- Store user data in SharePoint/SQL backend
- Achievement pop-ups via bookmark navigation
- Level-up celebrations via visual changes (color, size)

---

## 13. Acceptance Criteria (Production-Ready)

### Functional Requirements

- [ ] All 52 achievements trigger correctly
- [ ] Business Health Score calculates within 5% accuracy
- [ ] Streak counter never resets incorrectly
- [ ] Points accumulate without duplicates
- [ ] Leaderboard updates daily without errors
- [ ] Notifications send at correct times (6pm local)
- [ ] Badge showcase displays all 52 badges
- [ ] Share templates generate valid social posts

### Non-Functional Requirements

- [ ] Dashboard loads in <3 seconds with gamification
- [ ] Progress card always visible (no overlap)
- [ ] Works on mobile (T2/T3 responsive layout)
- [ ] Color-blind friendly (use icons + text, not just color)
- [ ] Achievement pop-ups dismissable (not intrusive)
- [ ] Email notifications can be opt-out

---

**Implementation Owner:** Engineering Team
**Design Owner:** UI/UX Designer (badge graphics)
**Testing:** 10 beta users for 4 weeks
**Launch Target:** Included in Tier 1 Launch (Phase 1)

**Related Documents:**
- [[products/01-power-bi-template/product-strategy/core/01-master-strategy#9-retention-strategy---gamification|Product Strategy - Retention]]
- [[products/01-power-bi-template/specifications/technical/03-design-ux-specifications|Design & UX Specs]]
- [[products/01-power-bi-template/specifications/technical/01-power-bi-tech-spec|Power BI Tech Spec]]
