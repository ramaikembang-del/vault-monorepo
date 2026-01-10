# Authentication System

**Last Updated:** 2025-12-26
**Technology:** OAuth 2.0 + JWT / Azure AD B2C
**Owner:** Security & Auth Lead
**Status:** Production-Ready Reference

---

## Overview

Complete unified authentication system providing secure single sign-on (SSO) across all PWBI FnB Growth products.

**Purpose:**
- Single user account works across A1, R1, R2a-f, E1, C1
- Secure JWT-based authentication
- Role-based access control (RBAC)
- Production-grade security (bcrypt, token rotation, rate limiting)

---

## Complete Authentication Flows

### User Registration Flow

**Step-by-Step Process:**

```
Step 1: User visits signup page
 ↓
Step 2: Fills registration form
 - Email
 - Password (min 8 chars, 1 uppercase, 1 number)
 - Business name
 - Phone (optional)
 ↓
Step 3: Frontend validates input
 - Email format validation
 - Password strength check
 - Terms acceptance required
 ↓
Step 4: POST /api/v1/auth/register
 {
 "email": "owner@restaurant.com",
 "password": "SecurePass123!",
 "business_name": "Warung Pak Budi",
 "phone": "+628123456789"
 }
 ↓
Step 5: Backend validation
 - Check if email already exists
 - Validate password strength
 - Hash password with bcrypt (work factor 12)
 ↓
Step 6: Create user in database
 INSERT INTO shared.users (
 email, password_hash, name, business_name,
 phone, created_at, is_active
 ) VALUES (...);
 ↓
Step 7: Send verification email
 - Generate verification token (UUID)
 - Store in shared.email_verifications table
 - Send email with link: https://app.pwbi.com/verify?token={uuid}
 ↓
Step 8: Return response
 {
 "success": true,
 "user_id": "550e8400-e29b-41d4-a716-446655440000",
 "message": "Please check your email to verify your account",
 "temporary_token": "eyJ..." // Allows limited access before verification
 }
```

**Email Verification Flow:**
```
User clicks link in email
 ↓
GET /api/v1/auth/verify?token={uuid}
 ↓
Validate token (not expired, not used)
 ↓
UPDATE shared.users SET email_verified = 1
 ↓
Redirect to login page with success message
```

---

### Login Flow (Detailed)

**Complete Login Sequence:**

```
Step 1: User enters credentials
 ↓
Step 2: Frontend validation
 - Email format check
 - Password not empty
 ↓
Step 3: POST /api/v1/auth/login
 {
 "email": "owner@restaurant.com",
 "password": "SecurePass123!",
 "remember_me": true // Optional: 30-day token vs 24-hour
 }
 ↓
Step 4: Backend checks rate limiting
 - Key: "login_attempts:{email}"
 - If >5 attempts in 15min → Return 429 Too Many Requests
 ↓
Step 5: Fetch user from database
 SELECT id, email, password_hash, is_active, email_verified
 FROM shared.users
 WHERE email = @email;
 ↓
Step 6: Validate user state
 - User exists? (else 401 "Invalid credentials")
 - is_active = 1? (else 403 "Account deactivated")
 - email_verified = 1? (else 403 "Please verify email first")
 ↓
Step 7: Verify password
 bcrypt.checkpw(entered_password, stored_password_hash)
 - If match: proceed
 - If fail: increment login_attempts, return 401
 ↓
Step 8: Fetch user's active subscriptions
 SELECT product_id, tier
 FROM shared.product_subscriptions
 WHERE user_id = @user_id AND status = 'active';
 ↓
Step 9: Generate JWT tokens
 A) Access Token (RS256):
 Header: {"alg": "RS256", "typ": "JWT"}
 Payload: {
 "user_id": "550e8400...",
 "email": "owner@restaurant.com",
 "products": ["r2a", "e1"], // Active subscriptions
 "role": "owner",
 "iat": 1703620800, // Issued at (Unix timestamp)
 "exp": 1703707200 // Expires in 24 hours (or 30 days if remember_me)
 }
 Sign with RS256 private key

 B) Refresh Token:
 - Generate cryptographically secure random string (64 bytes)
 - Hash with SHA256
 - Store in database:
 INSERT INTO shared.refresh_tokens (
 token_hash, user_id, expires_at, created_at
 ) VALUES (
 SHA256(@refresh_token), @user_id,
 DATEADD(day, 30, GETDATE()), GETDATE()
 );
 ↓
Step 10: Update user login tracking
 UPDATE shared.users
 SET last_login = GETDATE(), last_activity_at = GETDATE()
 WHERE id = @user_id;
 ↓
Step 11: Return tokens + user info
 {
 "success": true,
 "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
 "refresh_token": "a1b2c3d4e5f6...",
 "expires_in": 86400, // 24 hours in seconds
 "token_type": "Bearer",
 "user": {
 "id": "550e8400...",
 "email": "owner@restaurant.com",
 "name": "Pak Budi",
 "business_name": "Warung Pak Budi",
 "products": ["r2a", "e1"]
 }
 }
```

---

## JWT Implementation Details

### Token Structure & Signing

**RS256 Algorithm (Recommended for Production):**

```python
import jwt
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.backends import default_backend

# Load RSA keys (generated once, stored securely)
with open('private_key.pem', 'rb') as f:
 private_key = serialization.load_pem_private_key(
 f.read(), password=None, backend=default_backend()
 )

with open('public_key.pem', 'rb') as f:
 public_key = serialization.load_pem_public_key(
 f.read(), backend=default_backend()
 )

# Generate JWT
def generate_access_token(user_id, email, products, role, remember_me=False):
 expiry_hours = 720 if remember_me else 24 # 30 days or 24 hours

 payload = {
 'user_id': str(user_id),
 'email': email,
 'products': products, # ['r2a', 'e1']
 'role': role,
 'iat': datetime.utcnow(),
 'exp': datetime.utcnow() + timedelta(hours=expiry_hours)
 }

 token = jwt.encode(payload, private_key, algorithm='RS256')
 return token

# Validate JWT
def validate_access_token(token):
 try:
 payload = jwt.decode(token, public_key, algorithms=['RS256'])
 return {'valid': True, 'payload': payload}
 except jwt.ExpiredSignatureError:
 return {'valid': False, 'error': 'Token expired'}
 except jwt.InvalidSignatureError:
 return {'valid': False, 'error': 'Invalid signature'}
 except Exception as e:
 return {'valid': False, 'error': str(e)}
```

---

### Token Validation on Every API Request

**Middleware Implementation:**

```python
from flask import request, g
import jwt

def auth_required(f):
 @wraps(f)
 def decorated_function(*args, **kwargs):
 # Extract token from Authorization header
 auth_header = request.headers.get('Authorization')
 if not auth_header:
 return {'error': 'No authorization header'}, 401

 try:
 # Expected format: "Bearer eyJ..."
 token_type, token = auth_header.split(' ')
 if token_type != 'Bearer':
 return {'error': 'Invalid token type'}, 401
 except ValueError:
 return {'error': 'Malformed authorization header'}, 401

 # Validate JWT
 result = validate_access_token(token)
 if not result['valid']:
 return {'error': result['error']}, 401

 # Check product access (if endpoint is product-specific)
 payload = result['payload']
 requested_product = request.path.split('/')[3] # /api/v1/r2a/...

 if requested_product not in payload.get('products', []):
 return {'error': f'No access to product: {requested_product}'}, 403

 # Store user info in request context
 g.user_id = payload['user_id']
 g.user_email = payload['email']
 g.user_role = payload['role']
 g.user_products = payload['products']

 return f(*args, **kwargs)

 return decorated_function

# Usage
@app.route('/api/v1/r2a/transactions', methods=['GET'])
@auth_required
def get_transactions():
 user_id = g.user_id # Available from JWT payload
 # ... fetch user's transactions
```

---

## Single Sign-On (SSO) Implementation

### Cross-Product Token Sharing

**Scenario:** User logs into R2a web app, then opens E1 desktop app

```
R2a Web App (Login):
1. User logs in → Receives JWT
2. Store in:
 - httpOnly cookie (secure, HttpOnly, SameSite=Strict)
 - localStorage (for JavaScript access)

E1 Desktop App (Auto-Login):
1. App launches
2. Check Electron secure storage for JWT
3. If found:
 - Validate token (check expiry)
 - If valid: Auto-login (skip login page)
 - If expired: Attempt token refresh
4. If refresh succeeds: Auto-login
5. If refresh fails: Show login page
```

**Token Storage by Platform:**

| Platform | Storage Mechanism | Security |
|----------|-------------------|----------|
| Web (R2a, R2f, C1) | httpOnly cookie + localStorage | Secure, HttpOnly, SameSite |
| Desktop (E1) | Electron keytar (OS credential manager) | Encrypted by OS |
| Mobile (future) | iOS Keychain / Android Keystore | OS-level encryption |

---

## Token Refresh Flow (Detailed)

**When Access Token Expires:**

```python
def refresh_access_token(refresh_token):
 # 1. Hash the provided refresh token
 token_hash = hashlib.sha256(refresh_token.encode()).hexdigest()

 # 2. Query database for matching valid refresh token
 result = db.execute("""
 SELECT user_id, expires_at
 FROM shared.refresh_tokens
 WHERE token_hash = ?
 AND expires_at > GETDATE()
 AND is_revoked = 0
 """, token_hash)

 if not result:
 return {'error': 'Invalid or expired refresh token'}, 401

 user_id = result['user_id']

 # 3. Fetch user's current subscriptions (in case they changed)
 subscriptions = db.execute("""
 SELECT product_id FROM shared.product_subscriptions
 WHERE user_id = ? AND status = 'active'
 """, user_id)

 products = [sub['product_id'] for sub in subscriptions]

 # 4. Generate NEW access token
 new_access_token = generate_access_token(
 user_id, user_email, products, user_role
 )

 # 5. Generate NEW refresh token (rotation for security)
 new_refresh_token = secrets.token_urlsafe(64)
 new_token_hash = hashlib.sha256(new_refresh_token.encode()).hexdigest()

 # 6. Invalidate old refresh token, store new one
 db.execute("UPDATE shared.refresh_tokens SET is_revoked = 1 WHERE token_hash = ?", token_hash)
 db.execute("""
 INSERT INTO shared.refresh_tokens (token_hash, user_id, expires_at)
 VALUES (?, ?, DATEADD(day, 30, GETDATE()))
 """, new_token_hash, user_id)

 # 7. Return new tokens
 return {
 'access_token': new_access_token,
 'refresh_token': new_refresh_token,
 'expires_in': 86400
 }
```

---

## Role-Based Access Control (RBAC)

### Complete Role Definitions

**Owner Role:**
- Full access to all products
- Can manage billing & subscriptions
- Can add/remove team members
- Can delete business account

**Manager Role:**
- View all products
- Edit operational data (transactions, recipes, invoices)
- Add staff members (but cannot remove)
- Cannot access billing

**Staff Role:**
- View-only access to assigned dashboards
- Cannot edit any data
- Cannot access settings

**Accountant Role:**
- Full access to R2a-f accounting modules only
- Can view & edit transactions, invoices, payments
- Cannot access other products (E1, C1 full features)
- Cannot manage users or billing

### Permission Enforcement

**Backend Permission Check:**
```python
def check_permission(user_role, required_permission):
 permissions = {
 'owner': ['view_dashboard', 'edit_data', 'manage_users', 'access_billing', 'all_products'],
 'manager': ['view_dashboard', 'edit_data', 'add_staff', 'all_products'],
 'staff': ['view_dashboard'],
 'accountant': ['view_dashboard', 'edit_data', 'r2_products_only']
 }

 return required_permission in permissions.get(user_role, [])

# Usage in API endpoint
@app.route('/api/v1/r2a/transactions', methods=['POST'])
@auth_required
def create_transaction():
 if not check_permission(g.user_role, 'edit_data'):
 return {'error': 'Insufficient permissions'}, 403
 # ... create transaction
```

---

## Password Security Best Practices

### Bcrypt Implementation

```python
import bcrypt

# Hash password on registration
def hash_password(plain_password):
 # Work factor 12 (2^12 = 4096 iterations)
 # Takes ~200ms on modern CPU (intentionally slow to prevent brute force)
 salt = bcrypt.gensalt(rounds=12)
 hashed = bcrypt.hashpw(plain_password.encode('utf-8'), salt)
 return hashed.decode('utf-8')

# Verify password on login
def verify_password(plain_password, hashed_password):
 return bcrypt.checkpw(
 plain_password.encode('utf-8'),
 hashed_password.encode('utf-8')
 )
```

### Password Requirements Validation

```python
import re

def validate_password(password):
 errors = []

 if len(password) < 8:
 errors.append("Password must be at least 8 characters")

 if not re.search(r'[A-Z]', password):
 errors.append("Password must contain at least 1 uppercase letter")

 if not re.search(r'[a-z]', password):
 errors.append("Password must contain at least 1 lowercase letter")

 if not re.search(r'\d', password):
 errors.append("Password must contain at least 1 number")

 # Check against common password list (top 10K breached passwords)
 if password.lower() in COMMON_PASSWORDS:
 errors.append("This password is too common. Please choose a stronger password.")

 return {'valid': len(errors) == 0, 'errors': errors}
```

---

## Multi-User / Team Accounts

### Database Schema

```sql
-- Teams table
CREATE TABLE shared.user_teams (
 team_id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 owner_user_id UNIQUEIDENTIFIER NOT NULL, -- Who pays
 team_name NVARCHAR(200),
 max_members INT DEFAULT 3, -- E1 Pro: 3, C1: Unlimited
 created_at DATETIME2 DEFAULT GETDATE(),

 FOREIGN KEY (owner_user_id) REFERENCES shared.users(id)
);

-- Team members
CREATE TABLE shared.user_team_members (
 member_id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 team_id UNIQUEIDENTIFIER NOT NULL,
 user_id UNIQUEIDENTIFIER NOT NULL,
 role VARCHAR(20), -- owner, manager, staff, accountant
 added_at DATETIME2 DEFAULT GETDATE(),
 added_by_user_id UNIQUEIDENTIFIER,

 FOREIGN KEY (team_id) REFERENCES shared.user_teams(team_id),
 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 UNIQUE (team_id, user_id) -- User can only be in team once
);
```

### Adding Team Members

```python
def add_team_member(team_id, email, role):
 # 1. Check team member limit
 current_count = db.execute("""
 SELECT COUNT(*) as count FROM shared.user_team_members
 WHERE team_id = ?
 """, team_id)['count']

 max_members = db.execute("""
 SELECT max_members FROM shared.user_teams WHERE team_id = ?
 """, team_id)['max_members']

 if current_count >= max_members:
 return {'error': f'Team full ({max_members} member limit)'}, 400

 # 2. Check if user exists, if not send invite
 user = db.execute("SELECT id FROM shared.users WHERE email = ?", email)

 if not user:
 # Send invitation email (user needs to register first)
 send_team_invite_email(email, team_id)
 return {'message': 'Invitation sent to email'}

 # 3. Add to team
 db.execute("""
 INSERT INTO shared.user_team_members (team_id, user_id, role)
 VALUES (?, ?, ?)
 """, team_id, user['id'], role)

 return {'message': 'Team member added successfully'}
```

---

## Security Features

### Rate Limiting Implementation

```python
import redis
from datetime import datetime, timedelta

redis_client = redis.Redis(host='localhost', port=6379)

def check_login_rate_limit(email):
 key = f"login_attempts:{email}"
 attempts = redis_client.get(key)

 if attempts is None:
 # First attempt
 redis_client.setex(key, 900, 1) # 15 minutes expiry
 return {'allowed': True, 'remaining': 4}

 attempts = int(attempts)

 if attempts >= 10:
 # Account locked
 ttl = redis_client.ttl(key)
 return {
 'allowed': False,
 'error': f'Account temporarily locked. Try again in {ttl // 60} minutes.'
 }

 if attempts >= 5:
 # Require CAPTCHA
 return {
 'allowed': False,
 'error': 'Too many failed attempts. Please complete CAPTCHA.',
 'requires_captcha': True
 }

 # Increment counter
 redis_client.incr(key)
 return {'allowed': True, 'remaining': 5 - attempts}
```

### 2FA Implementation (Future Phase 4)

**SMS OTP Flow:**
```python
import random
import requests # For WhatsApp Business API

def send_2fa_code(user_id, phone_number):
 # Generate 6-digit code
 code = f"{random.randint(100000, 999999)}"

 # Store in Redis (expires in 5 minutes)
 redis_client.setex(f"2fa:{user_id}", 300, code)

 # Send via WhatsApp Business API (preferred in Indonesia)
 message = f"""
 Kode verifikasi PWBI Anda: {code}

 Kode berlaku 5 menit.
 Jangan bagikan kode ini kepada siapapun.
 """

 send_whatsapp_message(phone_number, message)

 return {'message': '2FA code sent via WhatsApp'}

def verify_2fa_code(user_id, entered_code):
 stored_code = redis_client.get(f"2fa:{user_id}")

 if not stored_code:
 return {'valid': False, 'error': 'Code expired or not found'}

 if stored_code.decode() == entered_code:
 redis_client.delete(f"2fa:{user_id}") # Code can only be used once
 return {'valid': True}

 return {'valid': False, 'error': 'Invalid code'}
```

---

## Indonesian Market Features

### WhatsApp OTP Login (Future)

**Passwordless Login via WhatsApp:**

```python
def initiate_whatsapp_login(phone_number):
 # 1. Generate OTP
 otp = f"{random.randint(100000, 999999)}"

 # 2. Store OTP
 redis_client.setex(f"whatsapp_otp:{phone_number}", 300, otp)

 # 3. Send WhatsApp message
 message = f"""
 Kode login PWBI: {otp}

 Gunakan kode ini untuk login ke akun Anda.
 Berlaku 5 menit.
 """
 send_whatsapp_message(phone_number, message)

 return {'message': 'OTP sent to WhatsApp'}

def verify_whatsapp_login(phone_number, entered_otp):
 stored_otp = redis_client.get(f"whatsapp_otp:{phone_number}")

 if not stored_otp or stored_otp.decode() != entered_otp:
 return {'error': 'Invalid or expired OTP'}, 401

 # Find or create user by phone
 user = db.execute("SELECT * FROM shared.users WHERE phone = ?", phone_number)

 if not user:
 # Auto-register user with phone only (no password needed)
 user_id= db.execute("""
 INSERT INTO shared.users (phone, phone_verified, created_at)
 VALUES (?, 1, GETDATE())
 RETURNING id
 """, phone_number)['id']
 else:
 user_id = user['id']

 # Generate JWT tokens (same as regular login)
 access_token = generate_access_token(user_id, ...)
 refresh_token = generate_refresh_token(user_id)

 return {
 'access_token': access_token,
 'refresh_token': refresh_token
 }
```

---

## Password Reset Flow

```python
def initiate_password_reset(email):
 user = db.execute("SELECT id FROM shared.users WHERE email = ?", email)

 if not user:
 # Don't reveal if email exists (security best practice)
 return {'message': 'If that email exists, a reset link has been sent'}

 # Generate reset token
 reset_token = secrets.token_urlsafe(32)
 token_hash = hashlib.sha256(reset_token.encode()).hexdigest()

 # Store in database (expires in 1 hour)
 db.execute("""
 INSERT INTO shared.password_reset_tokens (user_id, token_hash, expires_at)
 VALUES (?, ?, DATEADD(hour, 1, GETDATE()))
 """, user['id'], token_hash)

 # Send email
 reset_link = f"https://app.pwbi.com/reset-password?token={reset_token}"
 send_email(email, "Reset Your Password", f"Click here: {reset_link}")

 return {'message': 'If that email exists, a reset link has been sent'}

def reset_password(reset_token, new_password):
 token_hash = hashlib.sha256(reset_token.encode()).hexdigest()

 # Validate token
 result = db.execute("""
 SELECT user_id FROM shared.password_reset_tokens
 WHERE token_hash = ? AND expires_at > GETDATE() AND is_used = 0
 """, token_hash)

 if not result:
 return {'error': 'Invalid or expired reset token'}, 400

 # Validate new password
 validation = validate_password(new_password)
 if not validation['valid']:
 return {'error': validation['errors']}, 400

 # Update password
 new_hash = hash_password(new_password)
 db.execute("UPDATE shared.users SET password_hash = ? WHERE id = ?",
 new_hash, result['user_id'])

 # Mark token as used
 db.execute("UPDATE shared.password_reset_tokens SET is_used = 1 WHERE token_hash = ?",
 token_hash)

 # Revoke all refresh tokens (force re-login on all devices)
 db.execute("UPDATE shared.refresh_tokens SET is_revoked = 1 WHERE user_id = ?",
 result['user_id'])

 return {'message': 'Password reset successfully'}
```

---

## Troubleshooting Guide

### Issue 1: User Can't Login After Password Reset

**Symptoms:**
- Password reset succeeded
- But login fails with "Invalid credentials"

**Diagnosis:**
```python
# Check if password was actually updated
user = db.execute("SELECT password_hash FROM shared.users WHERE email = ?", email)
print(f"Password hash: {user['password_hash'][:20]}...") # Should be bcrypt hash

# Verify bcrypt is working
test_verify = bcrypt.checkpw(b"NewPassword123", user['password_hash'].encode())
print(f"Password validates: {test_verify}") # Should be True
```

**Common Causes:**
1. Password not actually saved (transaction rollback)
2. User entering old password
3. Bcrypt hash corrupted

**Fix:** Reset password again, ensure transaction commits

---

### Issue 2: Token Expired But Refresh Fails

**Symptoms:**
- Access token expired (expected)
- Refresh token also returns 401

**Diagnosis:**
```sql
-- Check if refresh token exists and is valid
SELECT user_id, expires_at, is_revoked
FROM shared.refresh_tokens
WHERE token_hash = SHA256(@refresh_token);

-- Check if expired
SELECT CASE
 WHEN expires_at > GETDATE() THEN 'Valid'
 ELSE 'Expired'
END AS status
FROM shared.refresh_tokens
WHERE token_hash = SHA256(@refresh_token);
```

**Common Causes:**
1. Refresh token expired (30 days passed)
2. Token revoked (user logged out globally)
3. Token hash mismatch (client sent wrong token)

**Fix:** User must log in again

---

### Issue 3: User Sees "No Access to Product" Despite Active Subscription

**Symptoms:**
- User has active R2a subscription in database
- Gets 403 "No access to product: r2a" when accessing /api/v1/r2a/*

**Diagnosis:**
```sql
-- Check subscription status
SELECT product_id, status, subscription_start_date
FROM shared.product_subscriptions
WHERE user_id = @user_id;

-- Decode user's JWT to see what products are in token
-- Use jwt.io or backend tool
-- JWT payload should have: "products": ["r2a"]
```

**Common Causes:**
1. JWT issued BEFORE subscription activated → Token doesn't include new product
2. Subscription status changed to 'canceled' but user still has old token

**Fix:**
```python
# Force token refresh to get updated product list
POST /api/v1/auth/refresh
# New access token will include current subscriptions
```

---

**Related Documents:**
- [[products/shared-technical/security/security-architecture|Security Architecture]] - Overall security model
- [[products/shared-technical/architecture/ecosystem-architecture|Ecosystem Architecture]] - How auth integrates with products
- [[products/shared-technical/architecture/data-platform|Data Platform]] - Users table schema

---

**Last Updated:** 2025-12-26
**Owner:** Security & Auth Lead
**Review Cycle:** Quarterly (security audit)
**Next Review:** 2025-03-26
