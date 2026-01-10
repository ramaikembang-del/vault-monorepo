# E1 Web Dashboard - Deployment SOP

**Owner:** Engineering Team
**Frequency:** Per customer
**Last Updated:** December 2025

---

## Purpose

Deploy web dashboard instances for new customers efficiently and securely.

## Scope

**Product:** E1 - Web Dashboard Lite
**Deployment:** Multi-tenant SaaS

---

## Deployment Process

### 1. Customer Provisioning (15 min)

**Create Account:**
```bash
# Run provisioning script
npm run provision:customer -- \
 --name="Kopi Kenangan" \
 --email="admin@kopiken.com" \
 --plan="lite" \
 --users=10
```

**Output:**
- Customer ID created
- Database schema initialized
- Admin user created
- Welcome email sent

### 2. Data Integration (30-60 min)

**Options:**

**A. API Integration:**
- Provide API key to customer
- Customer sends data via API
- Dashboard auto-updates

**B. File Upload:**
- Customer uploads CSV/Excel
- System imports and processes
- Manual refresh daily/weekly

**C. Database Connect:**
- Get customer DB credentials (encrypted storage)
- Configure connector
- Schedule automatic sync

### 3. Configuration (15 min)

**Settings:**
```javascript
{
 "companyName": "Kopi Kenangan",
 "fiscalYearStart": "January",
 "currency": "IDR",
 "timezone": "Asia/Jakarta",
 "features": {
 "pl": true,
 "cashFlow": true,
 "cogs": true,
 "staff": false // Upgrade feature
 }
}
```

### 4. User Setup (10 min)

**Invite Users:**
- Admin adds user emails
- System sends invites
- Users set passwords
- Role assignment (Admin/Manager/Viewer)

---

## Post-Deployment

### Verification Checklist
- [ ] Customer can log in
- [ ] Data loading correctly
- [ ] All purchased features enabled
- [ ] Users invited and have access
- [ ] Training session scheduled

### Handoff to CS
- Notify CS Manager
- Provide customer profile
- Schedule onboarding call

---

## Quality Checks

- [ ] Deployment completed < 2 hours
- [ ] Zero errors during provisioning
- [ ] Customer confirmed access
- [ ] Data accuracy verified

---

## Related Documents

- [[04-hosting-management-sop|E1 Hosting Management SOP]]
- [[products/04-accounting-module/product-variants/R2b-cash-flow/training/quick-start|E1 User Guide]]

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial SOP |

