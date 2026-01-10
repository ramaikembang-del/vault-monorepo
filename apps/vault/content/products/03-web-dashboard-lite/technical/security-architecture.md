# Security Architecture - E1 Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Last Updated:** 2025-12-28
**Version:** 1.0
**Compliance:** Indonesia PDP Law 2022, SOC 2 Type II (Supabase infrastructure)

---

## 1. Security Overview

### 1.1 Security Principles

**Defense in Depth:**
1. **Encryption:** Data encrypted in transit (TLS 1.3) and at rest (AES-256)
2. **Authentication:** JWT tokens + optional 2FA
3. **Authorization:** Row-level security (RLS) in Supabase
4. **Data Isolation:** User data logically separated
5. **Audit Logging:** All API access logged

**Threat Model:**
- **Threat 1:** Unauthorized access to user data  ->  Mitigated by authentication + RLS
- **Threat 2:** Data interception during sync  ->  Mitigated by TLS 1.3
- **Threat 3:** Local data theft (device stolen)  ->  Mitigated by optional SQLCipher encryption
- **Threat 4:** API abuse (rate limit bypass)  ->  Mitigated by rate limiting + API key rotation

---

## 2. Authentication and Authorization

### 2.1 User Authentication (Supabase Auth)

**Registration:**
```javascript
const { user, session, error } = await supabase.auth.signUp({
 email: 'user@example.com',
 password: 'securePassword123' // Min 8 chars, mixed case, numbers
});
```

**Login:**
```javascript
const { user, session, error } = await supabase.auth.signInWithPassword({
 email: 'user@example.com',
 password: 'securePassword123'
});

// Session includes JWT access_token (expires 1 hour)
localStorage.setItem('supabase_token', session.access_token);
```

**Two-Factor Authentication (2FA) - Optional:**
```javascript
// Enable 2FA (SMS or authenticator app)
await supabase.auth.mfa.enroll({
 factorType: 'totp', // Time-based OTP (Google Authenticator)
 friendlyName: 'My Device'
});

// Verify 2FA code during login
await supabase.auth.mfa.verify({
 factorId: 'factor-id',
 code: '123456'
});
```

### 2.2 Password Security

**Password Requirements:**
- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 lowercase letter
- At least 1 number
- Special characters recommended (but not required)

**Password Hashing (Supabase):**
- Bcrypt with cost factor 10 (2^10 iterations)
- Salted per user (salt generated automatically)

**Password Reset:**
```javascript
// User requests reset
await supabase.auth.resetPasswordForEmail('user@example.com');

// Email sent with reset link
// User clicks link, enters new password
await supabase.auth.updateUser({ password: 'newPassword123' });
```

### 2.3 Session Management

**JWT Token Structure:**
```json
{
 "sub": "user-uuid-abc123",
 "email": "user@example.com",
 "role": "authenticated",
 "iat": 1704067200,
 "exp": 1704070800 // Expires 1 hour after issue
}
```

**Token Refresh:**
- Access token expires after 1 hour
- Refresh token valid for 30 days
- Auto-refresh handled by Supabase SDK

**Session Revocation:**
```javascript
// User logs out (revokes session)
await supabase.auth.signOut();

// Admin revokes all sessions for user (security breach)
await supabase.auth.admin.signOut(userId);
```

---

## 3. Encryption

### 3.1 Data in Transit (TLS 1.3)

**All network communication encrypted:**
- Electron app  <->  Supabase API: TLS 1.3 (HTTPS)
- Browser  <->  Web dashboard: TLS 1.3 (HTTPS)

**Certificate Validation:**
- Certificate pinning (prevent MITM attacks)
- Strict-Transport-Security (HSTS) header enforced

### 3.2 Data at Rest (Cloud - Supabase)

**PostgreSQL Database Encryption:**
- AES-256 encryption (Supabase default)
- Encryption key managed by Supabase (user cannot access directly)
- Backups also encrypted (AES-256)

**Encryption at Rest Diagram:**
```
|-------------------------------------+
| Supabase PostgreSQL |
| |
| |-----------------------------+ |
| | transactions table | |
| | (Encrypted with AES-256) | |
| |------------------------------ |
| |
| Encryption Key: Master Key |
| (Managed by Supabase, rotated |
| annually) |
|--------------------------------------
```

### 3.3 Data at Rest (Local - SQLite)

**Optional SQLCipher Encryption:**
```javascript
// Enable SQLCipher encryption (user-enabled in Settings)
const db = new Database('data.db', {
 cipher: 'sqlcipher',
 key: deriveKeyFromPassword(userPassword) // PBKDF2, 100,000 iterations
});

// All data encrypted on disk (AES-256)
```

**Key Derivation (PBKDF2):**
```javascript
function deriveKeyFromPassword(password) {
 const salt = crypto.randomBytes(16); // Random salt per database
 const key = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256');
 return key.toString('hex');
}
```

**User Experience:**
```
Settings  ->  Privacy  ->  Encrypt Local Database

[ ] Encrypt local database (recommended for sensitive data)

Password: [**************]
Confirm: [**************]

[Enable Encryption]

[!] Warning: If you forget this password, your data cannot be recovered.
```

---

## 4. API Security

### 4.1 API Key Authentication

**API Key Generation:**
```javascript
// Generate API key for Pro tier users
const apiKey = `e1_live_${crypto.randomBytes(32).toString('hex')}`;
const hashedKey = bcrypt.hashSync(apiKey, 10);

// Store hashed key in database
await supabase.from('api_keys').insert({
 user_id: userId,
 key_hash: hashedKey,
 created_at: new Date(),
 last_used_at: null
});

// Show API key to user (ONCE - cannot retrieve later)
return apiKey;
```

**API Key Validation:**
```javascript
async function validateAPIKey(providedKey) {
 const { data: apiKeys } = await supabase
 .from('api_keys')
 .select('key_hash, user_id')
 .eq('revoked', false);

 for (const { key_hash, user_id } of apiKeys) {
 if (bcrypt.compareSync(providedKey, key_hash)) {
 // Valid API key, return user_id
 return user_id;
 }
 }

 throw new Error('Invalid API key');
}
```

### 4.2 Rate Limiting

**Implementation (Supabase Edge Function):**
```javascript
const rateLimitStore = new Map(); // In-memory (or Redis for production)

function checkRateLimit(userId, tier) {
 const now = Date.now();
 const windowMs = 60 * 60 * 1000; // 1 hour
 const limits = {
 'Pro': 1000, // 1,000 requests/hour
 'Enterprise': Infinity
 };

 const userRequests = rateLimitStore.get(userId) || { count: 0, resetAt: now + windowMs };

 // Reset window if expired
 if (now > userRequests.resetAt) {
 userRequests.count = 0;
 userRequests.resetAt = now + windowMs;
 }

 // Check limit
 if (userRequests.count >= limits[tier]) {
 throw new Error('Rate limit exceeded');
 }

 // Increment count
 userRequests.count++;
 rateLimitStore.set(userId, userRequests);

 return {
 limit: limits[tier],
 remaining: limits[tier] - userRequests.count,
 resetAt: userRequests.resetAt
 };
}
```

### 4.3 Input Validation

**SQL Injection Prevention:**
```javascript
// [x] BAD: String interpolation (vulnerable to SQL injection)
const query = `SELECT * FROM transactions WHERE id = '${userId}'`;

// [x] GOOD: Parameterized query (safe)
const { data, error } = await supabase
 .from('transactions')
 .select('*')
 .eq('user_id', userId); // Supabase uses parameterized queries internally
```

**XSS Prevention:**
```javascript
// Sanitize user input before displaying
import DOMPurify from 'dompurify';

const sanitized = DOMPurify.sanitize(userInput);
document.getElementById('output').innerHTML = sanitized;
```

---

## 5. Data Isolation and Privacy

### 5.1 Row-Level Security (RLS)

**PostgreSQL RLS Policies:**
```sql
-- Users can only access their own data
CREATE POLICY transactions_policy ON public.transactions
 FOR ALL
 USING (auth.uid() = user_id);

-- Enforce RLS
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
```

**Result:**
```sql
-- User A (uuid = 'user-a-uuid') logged in
SELECT * FROM transactions WHERE user_id = 'user-b-uuid';
-- Returns: 0 rows (RLS blocks access, even though query is valid)
```

### 5.2 Data Anonymization (Analytics)

**Product Analytics (Anonymized):**
```javascript
// [x] Don't send: user email, business name
analytics.track('Transaction Created', {
 email: user.email, // [x] PII
 business_name: user.business_name // [x] PII
});

// [x] Do send: anonymized user ID, tier, aggregated metrics
analytics.track('Transaction Created', {
 user_id: hashUserId(user.id), // Hashed, cannot reverse
 tier: 'Starter',
 amount_bucket: '10K-50K', // Ranges, not exact amounts
 payment_method: 'Cash'
});
```

---

## 6. Compliance

### 6.1 Indonesia PDP Law 2022

**Compliance Checklist:**
- [x] **User consent:** Explicit opt-in for cloud sync
- [x] **Data minimization:** Only collect necessary data (no customer PII)
- [x] **Data localization:** Cloud data stored in Indonesia (Supabase Jakarta region)
- [x] **Right to access:** Users can export data anytime
- [x] **Right to deletion:** Users can delete account + data
- [x] **Breach notification:** 72-hour notification if data breach

### 6.2 SOC 2 Type II (Supabase)

**Supabase Infrastructure Compliance:**
- Annual SOC 2 Type II audit (security, availability, confidentiality)
- Encryption at rest and in transit
- Disaster recovery and backups
- Access controls and audit logging

---

## 7. Incident Response

### 7.1 Security Incident Process

**Step 1: Detection (Automated Alerts)**
- Unusual API usage (10Ã— normal rate)
- Failed login attempts (>5 in 5 minutes)
- Unauthorized data access attempts

**Step 2: Containment**
- Revoke compromised API keys
- Block suspicious IP addresses
- Force password reset for affected users

**Step 3: Investigation**
- Review audit logs
- Identify root cause (e.g., stolen API key, SQL injection)
- Assess impact (how many users affected?)

**Step 4: Notification (Indonesia PDP Law 2022)**
- Notify affected users within 72 hours
- Notify Indonesia PDP Authority if >1,000 users affected
- Provide mitigation steps (e.g., "Change your password")

**Step 5: Remediation**
- Fix vulnerability (e.g., patch SQL injection)
- Deploy fix to production
- Monitor for recurrence

---

**Document ID:** E1-SECURITY-v1.0
**Last Updated:** 2025-12-28
**Owner:** Security Team

**Related Documents:**
- [[products/03-web-dashboard-lite/legal/privacy-policy|Privacy Policy]] - User data privacy
- [[products/03-web-dashboard-lite/integrations/cloud-sync-spec|Cloud Sync]] - Supabase security
- [[products/03-web-dashboard-lite/technical/api-reference|API Reference]] - API security

