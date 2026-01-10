# Security Architecture

**Last Updated:** 2025-12-26
**Owner:** Security Engineering Team
**Compliance:** Indonesian PDPN, Bank Indonesia IT-39/2019

---

## Overview

Multi-layered security architecture protecting PWBI FnB Growth platform and user data with specific focus on Indonesian regulatory compliance.

**Security Layers:**
1. Network Security (Firewall, DDoS protection)
2. Application Security (Authentication, authorization, input validation)
3. Data Security (Encryption at rest & in transit)
4. Compliance (Indonesian regulations: PDPN, Bank Indonesia, Tax)

---

## Layer 1: Network Security

### Firewall Configuration

```bash
# Azure Network Security Group (NSG) rules
# Only allow HTTPS (443) and SSH (22 from specific IPs)

# Allow HTTPS from anywhere
az network nsg rule create \\
 --resource-group pwbi-prod \\
 --nsg-name pwbi-nsg \\
 --name allow-https \\
 --priority 100 \\
 --source-address-prefixes '*' \\
 --destination-port-ranges 443 \\
 --protocol Tcp \\
 --access Allow

# Deny all other inbound traffic
az network nsg rule create \\
 --resource-group pwbi-prod \\
 --nsg-name pwbi-nsg \\
 --name deny-all-inbound \\
 --priority 4096 \\
 --source-address-prefixes '*' \\
 --access Deny
```

### DDoS Protection

**Azure DDoS Protection Standard:**
- Automatic attack mitigation
- Real-time attack metrics
- 100Gbps mitigation capacity

```bash
# Enable DDoS Protection
az network ddos-protection create \\
 --resource-group pwbi-prod \\
 --name pwbi-ddos \\
 --location southeastasia
```

---

## Layer 2: Application Security

### Authentication (OAuth 2.0 + JWT)

See [[products/shared-technical/architecture/auth-system|Authentication System]] for complete implementation.

**Key Points:**
- RS256 JWT signing (asymmetric encryption)
- Token rotation on refresh
- bcrypt password hashing (work factor 12)
- Rate limiting on login endpoints

### Authorization (Row-Level Security)

**Database RLS Implementation:**

```sql
-- Enable RLS on transactions table
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Create policy: Users can only see their own transactions
CREATE POLICY user_transactions_policy ON transactions
FOR SELECT
USING (user_id = CAST(current_setting('app.current_user_id') AS UNIQUEIDENTIFIER));

-- Set user context before queries
SET app.current_user_id = '550e8400-e29b-41d4-a716-446655440000';
```

### Input Validation

```python
from flask import request
import bleach

def validate_and_sanitize_input():
 """
 Sanitize all user inputs to prevent SQL injection & XSS
 """
 # Get data
 data = request.json

 # Sanitize strings (prevent XSS)
 for key, value in data.items():
 if isinstance(value, str):
 data[key] = bleach.clean(value, tags=[], strip=True)

 # Validate data types
 if 'amount' in data:
 try:
 data['amount'] = float(data['amount'])
 if data['amount'] < 0:
 raise ValueError('Amount cannot be negative')
 except (ValueError, TypeError):
 return {'error': 'Invalid amount'}, 400

 return data
```

---

## Layer 3: Data Security

### Encryption at Rest (Azure SQL TDE)

```sql
-- Enable Transparent Data Encryption
ALTER DATABASE pwbi_prod
SET ENCRYPTION ON;

-- Verify encryption status
SELECT
 DB_NAME(database_id) AS DatabaseName,
 encryption_state,
 encryption_state_desc = CASE encryption_state
 WHEN 0 THEN 'No encryption'
 WHEN 1 THEN 'Unencrypted'
 WHEN 2 THEN 'Encryption in progress'
 WHEN 3 THEN 'Encrypted'
 WHEN 4 THEN 'Key change in progress'
 WHEN 5 THEN 'Decryption in progress'
 END
FROM sys.dm_database_encryption_keys;
```

### Encryption in Transit (TLS 1.3)

```python
# Flask app - Force HTTPS
from flask_talisman import Talisman

app = Flask(__name__)
Talisman(app, force_https=True, strict_transport_security_max_age=31536000)

# Require TLS 1.3 minimum
app.config['PREFERRED_URL_SCHEME'] = 'https'
```

### API Token Encryption

```python
from cryptography.fernet import Fernet
import os

# Load encryption key from environment (32-byte base64)
ENCRYPTION_KEY = os.getenv('ENCRYPTION_KEY').encode()
cipher = Fernet(ENCRYPTION_KEY)

def encrypt(plaintext):
 """Encrypt sensitive data before storing in database"""
 return cipher.encrypt(plaintext.encode()).decode()

def decrypt(ciphertext):
 """Decrypt sensitive data when retrieving from database"""
 return cipher.decrypt(ciphertext.encode()).decode()

# Usage
api_token = "secret_token_abc123"
encrypted_token = encrypt(api_token) # Store this in DB

# Later, retrieve and decrypt
decrypted_token = decrypt(encrypted_token) # Use for API calls
```

---

## Layer 4: Compliance

### Indonesian PDPN (Personal Data Protection)

**Requirements:**
1. User consent for data collection
2. Right to access personal data
3. Right to delete personal data
4. Data breach notification (72 hours)

**Implementation:**

```python
def handle_data_deletion_request(user_id):
 """
 PDPN Article 34: Right to be forgotten
 """
 # Anonymize user data (keep transactions for accounting/tax)
 db.execute("""
 UPDATE users
 SET email = CONCAT('deleted_', id, '@deleted.local'),
 name = 'Deleted User',
 phone = NULL,
 deleted_at = GETDATE()
 WHERE id = ?
 """, user_id)

 # Delete integration credentials
 db.execute("DELETE FROM integrations WHERE user_id = ?", user_id)

 # Log deletion for audit trail
 db.execute("""
 INSERT INTO audit_log (action, user_id, timestamp)
 VALUES ('user_data_deleted', ?, GETDATE())
 """, user_id)

 return {'success': True, 'message': 'User data anonymized per PDPN requirements'}
```

### Bank Indonesia IT-39/2019 (Financial Data Security)

**Requirements:**
1. Financial data must be encrypted
2. Access logs for audit trail
3. Data retention: 10 years for transaction data

**Implementation:**

```sql
-- Audit log table
CREATE TABLE audit_log (
 log_id BIGINT IDENTITY(1,1) PRIMARY KEY,
 action VARCHAR(100),
 user_id UNIQUEIDENTIFIER,
 resource_type VARCHAR(50),
 resource_id UNIQUEIDENTIFIER,
 ip_address VARCHAR(45),
 timestamp DATETIME2 DEFAULT GETDATE(),
 details NVARCHAR(MAX)
);

-- Log all financial data access
CREATE TRIGGER trg_transaction_access_log
ON transactions
AFTER SELECT
AS
BEGIN
 INSERT INTO audit_log (action, user_id, resource_type, timestamp)
 SELECT 'transaction_accessed',
 CAST(current_setting('app.current_user_id') AS UNIQUEIDENTIFIER),
 'transaction',
 GETDATE()
 FROM inserted;
END;
```

### Tax Requirements (Invoice Retention)

**Peraturan Pajak:** Invoice data must be retained for 10 years

```python
# No deletion policy for invoices
def enforce_invoice_retention():
 """
 Tax law: Cannot delete invoices
 """
 # Prevent invoice deletion
 db.execute("""
 CREATE TRIGGER prevent_invoice_deletion
 ON invoices
 INSTEAD OF DELETE
 AS
 BEGIN
 RAISERROR('Invoices cannot be deleted per tax regulations', 16, 1);
 END
 """)
```

---

## Security Monitoring

### Intrusion Detection

```python
from prometheus_client import Counter

suspicious_activity_total = Counter(
 'suspicious_activity_total',
 'Suspicious security events',
 ['event_type']
)

def detect_suspicious_activity(request):
 """
 Monitor for suspicious patterns
 """
 # SQL injection attempts
 if re.search(r'(union|select|drop|insert|delete|update).*from', request.data.lower()):
 suspicious_activity_total.labels(event_type='sql_injection_attempt').inc()
 logger.warning(f"SQL injection attempt from IP: {request.remote_addr}")
 return {'error': 'Blocked'}, 403

 # Excessive failed logins
 failed_logins = redis_client.get(f"failed_logins:{request.remote_addr}")
 if failed_logins and int(failed_logins) > 10:
 suspicious_activity_total.labels(event_type='brute_force_attempt').inc()
 logger.warning(f"Possible brute force attack from IP: {request.remote_addr}")
 return {'error': 'Too many failed attempts'}, 429
```

---

**Related Documents:**
- [[products/shared-technical/architecture/auth-system|Authentication System]] - Auth implementation
- [[products/shared-technical/security/access-control|Access Control]] - RBAC details
- [[products/shared-technical/security/compliance|Compliance]] - Regulatory requirements

**Last Updated:** 2025-12-26
**Owner:** Security Engineering Team
**Review Cycle:** Quarterly
**Next Review:** 202 5-03-26
