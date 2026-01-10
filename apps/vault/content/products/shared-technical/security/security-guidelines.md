# Security Guidelines
**Application Security Best Practices**

**Owner:** Engineering + IT  
**Status:** ACTIVE

---

## Security Principles

1. **Defense in Depth:** Multiple layers of security
2. **Least Privilege:** Users/systems get minimum access needed
3. **Secure by Default:** Security ON unless explicitly disabled
4. **Transparency:** Document security practices publicly

---

## Code Security

### Input Validation
- **Always validate** user input (never trust frontend)
- **Sanitize** SQL queries (use parameterized queries, not string concat)
- **Escape** HTML output (prevent XSS attacks)

### Authentication
- **Password requirements:** Min 8 characters, complexity enforced
- **Rate limiting:** Max 5 login attempts/15 min
- **Session management:** Tokens expire after 24h inactivity

### API Security
- **Authentication:** Bearer tokens (JWT or Supabase Auth)
- **Rate limiting:** 100 requests/min per user
- **CORS:** Whitelist allowed origins only

---

## Data Security

### Encryption
- **In transit:** TLS 1.3 for all HTTP traffic
- **At rest:** AES-256 for database, S3 buckets

### PII Handling
- **Minimize collection:** Don't store what we don't need
- **Access logs:** Track who accessed customer data
- **Retention:** Delete PII 90 days after account closure

---

## Infrastructure Security

### Access Control
- **SSH keys only** (no password auth)
- **VPN required** for production database access
- **2FA enforced** for all team members

### Monitoring
- **Log everything:** Auth attempts, API calls, errors
- **Alerts:** Notify on suspicious activity (e.g., 100 failed logins)
- **Incident response:** Playbook for breaches

---

## Compliance (Future)

**Year 1:** Basic security hygiene  
**Year 2:** ISO 27001 certification (target)  
**Year 3:** SOC 2 Type II compliance

---

## Security Checklist (New Features)

Before shipping:
- [ ] Input validation implemented?
- [ ] SQL injection prevented? (parameterized queries)
- [ ] XSS prevented? (escaped output)
- [ ] Authorization checks in place? (can user access this?)
- [ ] Sensitive data encrypted?

---

**Status:** ACTIVE  
**Next Review:** Quarterly  
**Incident Contact:** security@clario.id
