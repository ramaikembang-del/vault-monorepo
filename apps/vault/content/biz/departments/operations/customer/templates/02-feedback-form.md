To scale from **IDR 8 Bn to 12 Bn**, your data is only as good as the feedback you collect. If the "Customer Section" of your dashboard remains empty or lacks detail, you won't know *why* customers aren't moving from "First-Timer" to "Regular."

Here is a structured **Feedback Form Template** designed specifically to feed into the Power BI "Customer Insights" tab we've developed.

---

### **1. The Data Capture Strategy**

To make the dashboard work, the feedback form must capture **three specific data points**:

1. **Identity:** Phone number or Email (to link to the `Dim_Customer` table).
2. **Attribution:** Who served them? (to link to the `Staff Leaderboard`).
3. **Sentiment:** Quantitative scores (1–5) for specific categories.

---

### **2. The Feedback Form Structure**

#### **A. Basic Information (The Join Keys)**

* **Phone Number:** (Used as the Primary Key for the dashboard)
* **Table Number:** ______
* **Server Name:** [Dropdown list of the 20 staff members]

#### **B. Experience Metrics (1 - 5 Stars)**

* **Food Quality:** How was the taste and presentation?
* **Service Speed:** Was your food served in a timely manner?
* **Staff Friendliness:** Did our team make you feel welcome?
* **Atmosphere:** Music, lighting, and temperature.

#### **C. The Growth Question (The Retention Driver)**

* **Likelihood to Recommend:** (Scale 0–10)
* *Developer Note: This calculates your **Net Promoter Score (NPS)** for the dashboard.*


* **Is this your first visit?** [Yes / No]
* **If No, what brings you back?** [Food / Service / Promo / Ambiance]

#### **D. Conflict Resolution (For Staff Performance Tracking)**

**Display Logic:** Only show if NPS ≤ 4 (dissatisfied customers)

* **Was your complaint resolved during your visit?** [Yes / No / No complaint]
* **If Yes, how was it resolved?** [Refund / Replacement / Apology / Manager Escalation]

> [!NOTE]
> **Purpose:** This tracks how well staff handle difficult situations, measuring SOP compliance (not just complaint volume). Maps to `Feedback.ComplaintResolved` and `Feedback.ResolutionMethod` in the data model.

---

### **3. Operational Workflow: How to get the data**

To ensure high participation (aiming for >30% of tables), use one of these two methods:

1. **The "Incentivized QR":** Place a QR code on a small acrylic stand on each table.
* *Copy:* "Share your experience and get a complimentary [Dessert/Drink] on your next visit!"


2. **The "Bill Folder" Link:** Print a dynamic QR code at the bottom of the receipt.

---

### **4. Connecting Feedback to Power BI (The Dev Gap)**

Once you collect this (via Google Forms, Typeform, or a custom web app), your developer should set up an **Automated Pipeline**:

| Form Field | Power BI Destination | Analysis Opportunity |
| --- | --- | --- |
| **Server Name** | `Fact_Feedback[StaffID]` | Link reviews directly to the Staff Leaderboard . |
| **NPS Score** | `Fact_Feedback[NPS]` | Identify if "Service Speed" is the bottleneck to 12 Bn. |
| **Phone Number** | `Dim_Customer[Phone]` | Track if a "Unhappy" customer ever comes back. |
| **ComplaintResolved** | `Fact_Feedback[ComplaintResolved]` | Measure staff SOP compliance during conflicts. |
| **ResolutionMethod** | `Fact_Feedback[ResolutionMethod]` | Identify best recovery tactics (Refund vs Apology). |

---

### **Summary of your "IDR 12 Bn" Toolkit:**

1. **The Strategy:** Transition from 8 Bn to 12 Bn through yield and staff optimization.
2. **The Dashboard:** 3-tab system (Command Center, Wolf Pack, Loyalty Loop).
3. **The Tech:** SQL views and DAX formulas for "Required Run Rate" and "Upsell Strike Rate."
4. **The Input:** High-quality customer feedback linked to staff IDs.

---

## Related

- **[[biz/departments/operations/customer/customer|Customer Operations]]** - Parent directory
- **[[biz/departments/operations/customer/02-customer-feedback-handling|Feedback Handling]]** - Process for handling feedback
- **[[products/16-marketing-automator/product-brief|Power BI Template]]** - Dashboard integrations
- **[[biz/departments/operations/customer/templates/01-customer-issue-log-template|Issue Log]]** - Track feedback-related issues
