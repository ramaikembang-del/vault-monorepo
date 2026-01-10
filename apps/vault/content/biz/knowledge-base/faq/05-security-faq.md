# Security FAQ

**Last Updated:** 2025-12-27

---

## Data Security

**Q: Is my data safe with PWBI?**
A: Yes. We implement bank-level security:
- **Encryption at rest:** AES-256 for all data in database
- **Encryption in transit:** TLS 1.3 for all connections
- **Secure hosting:** Azure cloud (Southeast Asia region)
- **Access control:** Row-level security, only you see your data
- **Regular audits:** Quarterly security assessments

**Q: Where is my data stored?**
A: Microsoft Azure cloud in Southeast Asia (Singapore region) for low latency and data residency compliance.

**Q: Who can access my data?**
A:
- **You:** Full access to your restaurant data
- **Your team:** Access based on roles you assign
- **PWBI:** Only encrypted backups; support team with your explicit permission only
- **Third parties:** Never. We don't sell or share your data.

**Q: Can PWBI employees see my data?**
A: No, unless you explicitly grant support access for troubleshooting. Access is logged and time-limited.

---

## Account Security

**Q: How do I keep my account secure?**
A:
1. **Strong password:** Min 8 characters, mix of letters/numbers/symbols
2. **2FA (coming soon):** Enable two-factor authentication
3. **Don't share passwords:** Each team member should have own account
4. **Review access:** Regularly check who has access

**Q: What if I suspect unauthorized access?**
A:
1. Change password immediately
2. Email security@pwbi.id
3. We'll audit access logs
4. Force logout all sessions if needed

**Q: Do you support two-factor authentication (2FA)?**
A: Coming in Q1 2025. Currently use strong passwords + email verification.

---

## Compliance

**Q: Are you compliant with Indonesian data protection laws?**
A: Yes, we comply with:
- **UU PDP (Personal Data Protection Law No. 27/2022)**
- **Bank Indonesia IT Regulation (BI-39/2019)** for financial data
- **Tax regulations** for invoice retention (10 years)

**Q: Do you have a Data Protection Officer (DPO)?**
A: Yes,contact dpo@pwbi.id for data protection inquiries.

**Q: Can I request my data be deleted?**
A: Yes (GDPR/UU PDP right). Email privacy@pwbi.id with:
- Account email
- Request: "Delete my data"
- Confirmation of account ownership
We'll process within 30 days.

**Q: What data do you collect?**
A:
- **Account data:** Name, email, phone, company name
- **Transaction data:** Sales, items, payments (from your POS)
- **Usage data:** Feature usage, login times (for product improvement)
See full details in [[biz/departments/legal/compliance/02-privacy-policy|Privacy Policy]]

**Q: Do you share data with third parties?**
A: Only with:
- **Payment processors:** Stripe, Xendit (for billing)
- **Cloud provider:** Microsoft Azure (for hosting)
- **Support tools:** Intercom (if you contact support)
Never for advertising or selling.

---

## Backup & Recovery

**Q: Is my data backed up?**
A: Yes, automatically:
- **Real-time replication:** Data replicated across multiple Azure zones
- **Daily backups:** Full database backup every 24 hours
- **Retention:** 30 days of backup history

**Q: What if PWBI goes down?**
A:
- **High availability:** 99.9% uptime SLA
- **Automatic failover:** If one server fails, traffic routes to backup
- **Disaster recovery:** Can restore from backup within 4 hours

**Q: Can I export my data?**
A: Yes!
- **CSV export:** All transaction data
- **Report export:** PDF/Excel from dashboard
- **API access:** For C1+ customers

---

## POS Integration Security

**Q: How do you access my POS data?**
A: Via official POS APIs with your authorization:
- **OAuth 2.0:** Secure token-based authentication
- **Read-only access:** We never write back to POS
- **Revocable:** Disconnect anytime in settings

**Q: Will PWBI change my POS data?**
A: No. We have read-only access. Your POS data remains untouched.

**Q: What if I disconnect my POS?**
A: Your historical data in PWBI remains safe. New transactions won't sync until you reconnect.

---

## Incident Response

**Q: What happens if there's a security breach?**
A:
1. Immediate containment
2. Notify affected customers within 72 hours
3. Work with authorities if needed
4. Full transparency report published

**Q: Have you ever had a breach?**
A: No security breaches to date (as of 2025-12-27).

---

## For Developers

**Q: Do you have a security.txt?**
A: Yes, at pwbi.id/.well-known/security.txt

**Q: How do I report a security vulnerability?**
A: Email security@pwbi.id with:
- Detailed description
- Steps to reproduce
- Your contact info
We respond within 48 hours.

**Q: Do you have a bug bounty program?**
A: Coming in Q2 2025 for responsible disclosure.

---

**More security questions?**
- Email: security@pwbi.id
- See full [[products/shared-technical/security/security-architecture|Security Architecture]]
