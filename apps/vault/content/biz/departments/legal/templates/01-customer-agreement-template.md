# Customer Agreement Template - SaaS Subscription Contract

**PWBI F&B Growth**
**Contract Version:** 1.0
**Effective Date:** 2025-01-01
**Governing Law:** Republic of Indonesia

> [!IMPORTANT]
> **Legal Disclaimer:** This is a template for internal planning. Consult qualified Indonesian legal counsel before using with actual customers. Indonesian contract law (Kitab Undang-Undang Hukum Perdata) governs all commercial agreements.

---

## Preamble

**This SaaS Subscription Agreement ("Agreement")** is entered into between:

**Provider:**
PT PWBI Indonesia (to be registered)
Address: [Jakarta office address]
NPWP: [Tax ID number]

**Customer:**
[Company Name]
Address: [Customer address]
NPWP: [Customer tax ID]

**Effective Date:** [Contract start date]

---

## 1. Service Description & Scope

### 1.1 SaaS Platform Access

Provider grants Customer a non-exclusive, non-transferable license to access and use the PWBI F&B Analytics Platform ("Service") during the Subscription Term.

**Service Components:**
- Cloud-hosted analytics dashboard
- Data processing and storage
- Automated POS data synchronization
- Metric calculation engine
- Benchmarking data (if opted-in)
- Customer support as defined in Section 4

**Service Tiers Available:**

| Tier | Monthly Fee | Features Included | User Limit |
|------|-------------|-------------------|------------|
| **Basic** | Rp 300,000 - Rp 500,000 | 30 base metrics, 1 POS integration, Single location | 3 users |
| **Pro** | Rp 900,000 - Rp 1,200,000 | Pro: 60 metrics, 2-5 locations, Accounting module | 5 users |
| **Advanced** | Rp 2,000,000 - Rp 3,500,000 | 150+ metrics, Unlimited locations, API access | 12 users |
| **Enterprise** | Custom pricing | All features, Custom development, Dedicated support | Unlimited |

**Customer Selected Tier:** [Basic / Pro / Advanced / Enterprise]
**Monthly Fee:** Rp [Amount]

---

### 1.2 Service Exclusions

The following are explicitly **NOT** included unless separately agreed in writing:

- Custom software development
- Data migration from legacy systems
- On-premise deployment
- Third-party software licenses (POS systems, accounting software)
- Business consulting or advisory services

---

## 2. Payment Terms & Invoicing

### 2.1 Subscription Fees

**Billing Cycle:** Monthly in advance
**Payment Due:** 1st day of each month
**First Payment Due:** [Date]

**Payment Methods Accepted:**
1. Bank transfer (BCA, Mandiri, BNI) - Account details provided in invoice
2. GoPay / OVO / DANA (via Xendit payment gateway)
3. Credit card (Visa, Mastercard) - via Stripe (2.9% + Rp 2,500 processing fee applies)

---

### 2.2 Invoicing

- Invoices issued no later than 25th of prior month
- Sent via email to Customer's billing contact
- Include:
 - Invoice number, date, due date
 - Service tier and billing period
 - Itemized charges (base subscription + add-ons)
 - Tax breakdown (PPN 11%)
 - Payment instructions

**Example Invoice:**
```
INVOICE #PWB-2025-001
Billing Period: 1-31 January 2025

Base Subscription (Pro Tier) : Rp 1,050,000
Additional Users (2 × Rp 35K) : Rp 70,000
Subtotal : Rp 1,120,000
PPN 11% : Rp 123,200
Total Due : Rp 1,243,200

Due Date: 1 January 2025
```

---

### 2.3 Late Payment

**Grace Period:** 7 calendar days
**Late Payment Fee:** 2% of outstanding balance per month (24% annual)

**Consequences of Non-Payment:**
- Day 8: Service access suspended (read-only mode)
- Day 15: Full service suspension
- Day 30: Account termination, data deletion initiated
- Legal action: Debt collection via Indonesian courts if >Rp 5M outstanding

**Service Restoration:**
Upon receipt of full payment + late fees, service restored within 24 hours.

---

### 2.4 Taxes

All fees are **exclusive** of taxes unless stated otherwise.

**PPN (Pajak Pertambahan Nilai):** 11% VAT applies to all B2B transactions
**PPh 23 (Withholding Tax):** 2% withholding by corporate customers (Customer responsible for deduction and reporting)

**Tax Invoice (Faktur Pajak):**
Provider issues e-Faktur for PPN compliance within 3 business days of payment.

---

### 2.5 Annual Subscription Discount

**Offer:** Pay 10 months, receive 12 months of service
**Discount:** 16.7% effective discount
**Payment:** Full annual fee due upfront
**Refund Policy:** Prorated refund if service discontinued by Provider; no refund if Customer cancels early

**Example:**
- Monthly: Rp 1M × 10 = Rp 10M (for 12 months)
- vs. Monthly billing: Rp 1M × 12 = Rp 12M
- Savings: Rp 2M (16.7%)

---

## 3. Data Ownership, Security & Privacy

### 3.1 Data Ownership

**Customer Data Ownership:**
Customer retains all intellectual property rights and ownership of:
- Business data (sales, transactions, customer records)
- Uploaded content (logos, custom reports)
- Derived insights (analytics outputs)

**Provider Rights:**
Provider owns platform code, algorithms, and infrastructure.

**Anonymized Benchmarking Data (Opt-In Only):**
IF Customer opts-in to benchmarking program:
- Provider may aggregate and anonymize Customer data
- Use for industry benchmarks, insights, market research
- Customer receives access to aggregated industry data in return
- Customer may opt-out anytime (30-day notice)

---

### 3.2 Data Storage & Security

**Data Location:** AWS Singapore (ap-southeast-1 region)
**Backup Schedule:** Daily incremental, weekly full backup
**Backup Retention:** 90 days
**Data Encryption:**
- At rest: AES-256 encryption
- In transit: TLS 1.3 (HTTPS)

**Security Measures:**
- SOC 2 Type II compliant infrastructure (AWS)
- Multi-factor authentication (MFA) available
- Role-based access control (RBAC)
- Activity logging and audit trails

**Data Breach Notification:**
Provider notifies Customer within 72 hours of discovering any unauthorized data access.

---

### 3.3 Data Export & Portability

**Customer Rights:**
- Export data anytime in CSV or Excel format
- API access (Advanced/Enterprise tiers) for automated export
- No export fees or restrictions

**Data Export Upon Termination:**
- 90-day grace period to export data
- After 90 days: Data permanently deleted (unrecoverable)

---

### 3.4 Privacy Compliance

**Applicable Laws:**
- UU No. 27 Tahun 2022 (Indonesian Data Protection Law - PDP)
- GDPR (if processing EU citizen data)

**Customer Obligations:**
- Obtain consent from end-customers before sharing their data with Provider
- Ensure lawful basis for data processing
- Notify Provider if processing sensitive personal data (KTP numbers, financial data)

**Provider Obligations:**
- Process data only as instructed by Customer
- Implement appropriate security measures
- Provide Data Processing Addendum (DPA) upon request

---

## 4. Support & Service Level Agreement (SLA)

### 4.1 Support Channels

| Tier | Channels Available | Hours |
|------|--------------------|-------|
| **Basic** | Email | Mon-Fri, 9 AM - 5 PM WIB |
| **Pro** | Email + WhatsApp | Mon-Fri, 9 AM - 6 PM WIB |
| **Advanced** | Priority WhatsApp + Phone | Mon-Sat, 8 AM - 8 PM WIB |
| **Enterprise** | Dedicated account manager (24/7 emergency line) | 24/7 |

**Support Email:** support@pwbifnbgrowth.com
**WhatsApp:** +62 [number]
**Emergency (Enterprise only):** +62 [hotline]

---

### 4.2 Response Time SLA

| Priority | Description | Basic | Pro | Advanced | Enterprise |
|----------|-------------|-------|-----|----------|------------|
| **P1 (Critical)** | Service down, data loss | 48h | 24h | 12h | 4h |
| **P2 (High)** | Major feature broken | 72h | 48h | 24h | 8h |
| **P3 (Medium)** | Minor bug, workaround exists | 5 days | 3 days | 2 days | 1 day |
| **P4 (Low)** | Feature request, documentation | 7 days | 5 days | 3 days | 2 days |

**SLA Breach Remedies:**
- 10% monthly fee credit for each P1/P2 breach
- Credit capped at 50% of monthly fee (max 5 breaches/month)

---

### 4.3 Service Uptime SLA

**Uptime Guarantee:**
- Pro+: 99.5% monthly uptime
- Basic: 99.0% monthly uptime

**Uptime Calculation:**
```
Uptime % = (Total Minutes in Month - Downtime Minutes) ÷ Total Minutes × 100
```

**Exclusions from Downtime:**
- Scheduled maintenance (announced 48h in advance, max 4h/month)
- Customer's own infrastructure issues (internet, POS system)
- Force majeure (natural disasters, government actions)

**Downtime Credits:**
- 99.0-99.5%: No credit
- 98.0-99.0%: 10% monthly fee credit
- 95.0-98.0%: 25% credit
- <95.0%: 50% credit

**Claim Process:**
Customer must submit uptime report within 7 days of month-end. Provider verifies against monitoring logs.

---

## 5. Term, Renewal & Termination

### 5.1 Subscription Term

**Initial Term:** 1 month (monthly billing) OR 12 months (annual prepay)
**Auto-Renewal:** Automatically renews for successive 1-month or 12-month periods unless terminated

**Renewal Notice:** Provider sends renewal reminder 14 days before end of term

---

### 5.2 Termination by Customer

**Notice Required:** 30 days written notice

**Process:**
1. Email cancellation request to billing@pwbifnbgrowth.com
2. Provider confirms receipt within 48 hours
3. Service continues until end of paid period
4. Data export available for 90 days post-termination

**Refund Policy:**
- Monthly billing: No refund for partial month
- Annual billing: Prorated refund of unused months (only if Provider discontinues service)

---

### 5.3 Termination by Provider

**Provider may terminate immediately for:**
- Non-payment exceeding 30 days
- Material breach of Agreement
- Illegal use of Service (fraud, malware, prohibited content)
- Customer bankruptcy or insolvency

**Notice:** 30 days written notice (except for cause, which is immediate)

**Service Wind-Down:**
- 90-day data export period
- Prorated refund of prepaid fees (if termination for cause: no refund)

---

## 6. Acceptable Use & Restrictions

### 6.1 Permitted Use

Customer may use Service for:
- Internal business analytics and reporting
- Data visualization and dashboard creation
- Integration with Customer's own systems (POS, accounting)

---

### 6.2 Prohibited Use

**Customer SHALL NOT:**
1. Resell or redistribute Service to third parties
2. Reverse engineer, decompile, or hack platform
3. Use for illegal activities or fraud
4. Share login credentials with non-employees
5. Scrape or mass-download data for competing products
6. Overload system (>10K API requests/day on non-Enterprise tiers)
7. Store prohibited content (pornography, hate speech, malware)

**Violation Consequences:**
Immediate termination without refund + legal action if damages incurred.

---

## 7. Intellectual Property

### 7.1 Provider IP

Provider retains all rights to:
- Platform source code and algorithms
- User interface designs and trademarks
- Benchmarking methodologies and industry reports

**Customer License:** Non-exclusive, non-transferable license to use platform during Subscription Term only.

---

### 7.2 Customer Feedback

Customer grants Provider perpetual, royalty-free license to use:
- Feature requests and product suggestions
- Testimonials and case studies (with Customer approval)

---

## 8. Warranties & Disclaimers

### 8.1 Provider Warranties

Provider warrants

:
1. Service will substantially conform to documentation
2. Provider has authority to enter this Agreement
3. Service does not infringe third-party IP rights

---

### 8.2 Disclaimer of Warranties

**PROVIDER PROVIDES SERVICE "AS-IS" WITHOUT WARRANTY OF:**
- Uninterrupted or error-free operation
- Accuracy of analytics or recommendations
- Fitness for specific business purposes
- Merchantability or non-infringement

**Customer acknowledges:**
- Provider is not an accounting firm or business advisor
- Insights are informational only, not legal/financial advice
- Customer is solely responsible for business decisions based on data

---

## 9. Limitation of Liability

**PROVIDER'S TOTAL LIABILITY SHALL NOT EXCEED:**
Lesser of:
1. Fees paid by Customer in prior 12 months
2. Rp 50,000,000 (Fifty Million Rupiah)

**PROVIDER NOT LIABLE FOR:**
- Indirect, incidental, consequential damages
- Lost profits, revenue, or business opportunities
- Data loss if Customer failed to export data
- Third-party integrations (POS, accounting software failures)

**Exceptions:**
Liability cap does not apply to:
- Gross negligence or willful misconduct
- Data breach due to Provider's security failures
- IP infringement claims

---

## 10. Indemnification

### 10.1 Provider Indemnifies Customer

Provider defends and indemnifies Customer against claims that Service infringes third-party IP rights.

**Remedies:**
1. Obtain license for Customer to continue using Service
2. Modify Service to be non-infringing
3. Terminate Agreement and refund prepaid fees

---

### 10.2 Customer Indemnifies Provider

Customer defends and indemnifies Provider against claims arising from:
- Customer's violation of Acceptable Use Policy
- Customer's unlawful data processing
- Third-party claims related to Customer's business operations

---

## 11. Force Majeure

Neither party liable for failure to perform due to events beyond reasonable control:
- Natural disasters (earthquake, flood, tsunami)
- War, terrorism, civil unrest
- Government actions (lockdowns, internet shutdowns)
- Infrastructure failures (AWS outage, undersea cable damage)

**Obligations Suspended:** Until force majeure event ends
**Termination Right:** If force majeure exceeds 60 days, either party may terminate without penalty

---

## 12. Governing Law & Dispute Resolution

### 12.1 Governing Law

This Agreement governed by laws of Republic of Indonesia (excluding conflict of law provisions).

---

### 12.2 Dispute Resolution

**Step 1: Negotiation (30 days)**
Parties attempt good-faith resolution through discussion.

**Step 2: Mediation (Optional, 30 days)**
If negotiation fails, parties may submit to mediation via BANI (Badan Arbitrase Nasional Indonesia).

**Step 3: Arbitration (Binding)**
If mediation fails or is declined, disputes resolved via BANI arbitration:
- Venue: Jakarta, Indonesia
- Language: Indonesian (with English translation if requested)
- Arbitrator: 1 arbitrator (disputes <Rp 100M) or 3 arbitrators (disputes ≥Rp 100M)
- Costs: Each party bears own costs + 50% arbitration fees

**Arbitration Award:** Final and binding, enforceable in Indonesian courts.

---

### 12.3 Jurisdiction

Exclusive jurisdiction: District Court of South Jakarta (if arbitration waived by mutual agreement).

---

## 13. General Provisions

### 13.1 Entire Agreement

This Agreement constitutes entire understanding between parties and supersedes all prior agreements (oral or written).

---

### 13.2 Amendments

Provider may modify Agreement with 30 days notice. Continued use of Service after notice = acceptance of new terms.

**Material changes requiring explicit consent:**
- Price increases >20%
- Reduction in SLA guarantees
- Changes to data ownership or privacy terms

---

### 13.3 Assignment

Customer may not assign this Agreement without Provider's written consent.
Provider may assign to affiliate or successor without consent.

---

### 13.4 Severability

If any provision held invalid, remainder of Agreement remains in effect.

---

### 13.5 Waiver

Failure to enforce any provision does not constitute waiver of future enforcement.

---

### 13.6 Notices

All notices sent to:
- **Provider:** legal@pwbifnbgrowth.com
- **Customer:** [Email in contract]

Notices effective when sent (email) or 3 days after mailing (physical mail).

---

## 14. Signatures

**By signing below, parties agree to terms of this Agreement.**

**PROVIDER:**
PT PWBI Indonesia
Authorized Signatory: ___________________
Name: [Director name]
Title: Director
Date: ___________________

**CUSTOMER:**
[Company Name]
Authorized Signatory: ___________________
Name: [Customer representative]
Title: [Title]
Date: ___________________

**Witness:**
Name: ___________________
Date: ___________________

---

## Appendix A: Service Specifications

[Attach technical specifications, API documentation, SLA metrics]

## Appendix B: Data Processing Addendum (DPA)

[Attach GDPR-compliant DPA if processing EU data]

## Appendix C: Pricing Schedule

[Current tier pricing, add-on costs, volume discounts]

---

**Document Control:**
Version: 1.0
Last Review: 2025-12-26
Next Review: 2025-06-01
Approved By: [Legal counsel name]

---

**Legal Disclaimers:**
1. This template requires review by Indonesian corporate lawyer
2. Customer should have own legal counsel review before signing
3. Modifications may be needed for specific industries (e.g., financial services)
4. Tax advice should be obtained from qualified Indonesian tax consultant

---

**Related Documents:**
- [[biz/departments/legal/compliance/02-privacy-policy|privacy-policy.md]] - Data protection compliance
- [[biz/departments/legal/compliance/03-terms-of-service|terms-of-service.md]] - Platform usage terms
