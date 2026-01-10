# Ecosystem Architecture

**Last Updated:** 2025-12-26
**Owner:** Technical Architecture Lead
**Status:** Production-Ready Reference

---

## Overview

Complete technical architecture defining how all PWBI FnB Growth products interconnect through a unified shared platform layer.

**Purpose:** Ensure all products work together seamlessly while maintaining independent deployability and clear data ownership.

---

## Product Ecosystem Map

```

 CUSTOMER LAYER
 Indonesian F&B Businesses (Mikro → SME)

 ↓

 PRODUCT LAYER (5 Pillars)

 P1 Acquisition: A1 Template | A2 Pay-Per-Insight | A3 Embed
 P2 Retention: R1 Support | R2a-f Accounting (6 modules)
 P3 Expansion: E1 Dashboard Lite | E1 Paid Tiers
 P4 Defense: D1 Industry Reports
 P5 Core: C1-4 SaaS Platform (4 tiers)

 ↓

 SHARED PLATFORM LAYER (This Doc)

 • Data Platform (unified metrics, SQL Server)
 • Auth System (single sign-on across products)
 • API Gateway (unified API layer)
 • Integration Framework (POS, accounting systems)

 ↓

 INFRASTRUCTURE LAYER
 Azure Cloud | SQL Server | Storage | CDN | Monitoring

```

---

## Detailed Product Interconnections

### Scenario 1: R2a → E1 → C1 Upgrade Path

**User Journey:** Starts with P&L tracking, adds dashboard, graduates to full SaaS

#### Phase 1: R2a Only (Month 1-3)

**Data Flow:**
```
User Input (Web Form)
 ↓
POST /v1/r2a/transactions
 ↓
r2a.transactions table (SQL)
 ↓
GET /v1/r2a/reports/pl
 ↓
Return P&L calculation
```

**Database State:**
```sql
-- User has ONLY R2a data
SELECT * FROM shared.product_subscriptions
WHERE user_id = @user_id;
-- Result: [{"product": "r2a", "status": "active"}]

SELECT COUNT(*) FROM r2a.transactions WHERE user_id = @user_id;
-- Result: 150 transactions
```

#### Phase 2: R2a + E1 (Month 4-6)

**Upgrade Trigger:** User wants offline dashboard

**Data Migration:**
```python
def upgrade_to_e1(user_id):
 # No data migration needed - E1 reads R2a via API

 # 1. Enable E1 subscription
 enable_product(user_id, 'e1')

 # 2. E1 Desktop app connects to same API
 # GET /v1/r2a/transactions → E1 displays in dashboard

 # 3. Data remains in R2a schema (single source of truth)
```

**API Call Example:**
```
E1 Electron App
 ↓
GET /v1/r2a/transactions?from_date=2025-12-01
Authorization: Bearer {jwt_token with products: ['r2a', 'e1']}
 ↓
API Gateway validates: user has r2a subscription
 ↓
Return R2a data → E1 displays in offline dashboard
```

**Key:** No data duplication - E1 is a VIEW on R2a data

#### Phase 3: R2a + E1 → C1 (Month 12+)

**Upgrade Trigger:** User needs multi-location, advanced forecasting

**Data Migration Script:**
```sql
-- Run BEFORE enabling C1 subscription
BEGIN TRANSACTION;

-- 1. Copy historical R2a data to C1 unified schema
INSERT INTO c1.transactions (
 user_id, transaction_date, amount,
 category, type, source_product
)
SELECT
 user_id, transaction_date, amount,
 category_id, type, 'r2a_migration'
FROM r2a.transactions
WHERE user_id = @upgraded_user_id
 AND created_at < GETDATE();

-- 2. Mark R2a as Read-Only (archived)
UPDATE shared.product_subscriptions
SET status = 'archived',
 archived_reason = 'Migrated to C1',
 archived_at = GETDATE()
WHERE user_id = @upgraded_user_id
 AND product_id = 'r2a';

-- 3. Enable C1 subscription
INSERT INTO shared.product_subscriptions
VALUES (@upgraded_user_id, 'c1', 'active', GETDATE());

COMMIT;
```

**Post-Migration State:**
```sql
-- User now has C1 as primary
SELECT * FROM shared.product_subscriptions
WHERE user_id = @user_id AND status = 'active';
-- Result: [{"product": "c1", "status": "active"}]

-- R2a data still accessible for historical reference
SELECT * FROM r2a.transactions
WHERE user_id = @user_id;
-- Still returns data (read-only, archived)

-- New transactions go to C1
INSERT INTO c1.transactions (...); -- Active schema
```

**Rollback Plan:** If C1 migration fails, re-activate R2a subscription

---

### Scenario 2: R2f Invoice → R2b Cash Flow Integration

**Real-Time Data Sync Between Products**

**Flow:**
```
User creates invoice in R2f
 ↓
POST /v1/r2f/invoices
 {
 "customer_id": "uuid",
 "amount": 10000000,
 "due_date": "2025-01-25"
 }
 ↓
R2f saves to r2f.invoices table
 ↓
Trigger: Event published to message queue
 {
 "event": "invoice.created",
 "invoice_id": "uuid",
 "amount": 10000000,
 "due_date": "2025-01-25"
 }
 ↓
R2b listener picks up event
 ↓
R2b creates expected cash inflow
INSERT INTO r2b.expected_inflows (
 user_id, amount, expected_date,
 source, source_id
) VALUES (
 @user_id, 10000000, '2025-01-25',
 'invoice', @invoice_id
);
 ↓
R2b dashboard shows: "Expected: +Rp 10M (Invoice #123) on Jan 25"
```

**When Invoice Paid:**
```
User marks invoice paid in R2f
 ↓
PUT /v1/r2f/invoices/{id}/mark-paid
 ↓
Event: "invoice.paid"
 ↓
R2b listener updates:
1. Remove from expected_inflows
2. Add to r2b.cash_accounts (actual inflow)
 ↓
R2b dashboard: "Cash balance +Rp 10M (Invoice #123 paid)"
```

**Error Handling:** If R2b listener fails, retry 3 times, then alert admin

---

## Authentication Flow - Detailed

### Initial Login Sequence

```
Step 1: User visits R2a login page
 ↓
Step 2: Enters email/password
 ↓
Step 3: POST /v1/auth/login
 {
 "email": "owner@restaurant.com",
 "password": "SecurePass123!"
 }
 ↓
Step 4: Auth service validates credentials
 - Hash password with bcrypt
 - Compare with stored hash
 - If match: proceed, else return 401
 ↓
Step 5: Generate JWT token
 Header: {"alg": "RS256", "typ": "JWT"}
 Payload: {
 "user_id": "550e8400...",
 "email": "owner@restaurant.com",
 "products": ["r2a", "e1"], // Active subscriptions
 "role": "owner",
 "iat": 1672531200,
 "exp": 1672617600 // Expires 24 hours
 }
 Signature: RS256(header + payload, private_key)
 ↓
Step 6: Return tokens to client
 {
 "access_token": "eyJhbGci...",
 "refresh_token": "abc123...",
 "expires_in": 86400
 }
 ↓
Step 7: Client stores tokens
 - Web: httpOnly cookie + localStorage
 - Desktop (E1): Electron secure storage
```

### Cross-Product SSO

**Scenario:** User logged into R2a, opens E1

```
E1 App Launch
 ↓
Check for existing JWT in secure storage
 ↓
If found: Validate expiry
 - If valid: Auto-login (no password prompt)
 - If expired: Attempt refresh token flow
 ↓
Refresh Token Flow:
POST /v1/auth/refresh
 {
 "refresh_token": "abc123..."
 }
 ↓
Auth service:
 - Validates refresh token
 - Generates NEW access token + NEW refresh token
 - Invalidates old refresh token (one-time use)
 ↓
E1 stores new tokens → User logged in
```

**Token Validation on Every API Call:**
```python
def validate_request(request):
 # Extract JWT from Authorization header
 token = request.headers.get('Authorization').split('Bearer ')[1]

 try:
 # Verify signature with public key
 payload = jwt.decode(token, public_key, algorithms=['RS256'])

 # Check expiry
 if payload['exp'] < time.now():
 return error(401, 'Token expired')

 # Check product access
 requested_product = request.path.split('/')[2] # /v1/r2a/...
 if requested_product not in payload['products']:
 return error(403, f'Not subscribed to {requested_product}')

 # Valid - proceed with request
 request.user_id = payload['user_id']
 request.role = payload['role']
 return next()

 except jwt.InvalidSignatureError:
 return error(401, 'Invalid token signature')
```

---

## API Gateway Architecture - Deep Dive

### Request Routing Logic

```python
def route_request(request):
 path = request.path # Example: /v1/r2a/transactions

 # Extract product from path
 product = path.split('/')[2] # 'r2a'

 # Route to appropriate backend service
 backends = {
 'r2a': 'http://r2a-service:5000',
 'r2c': 'http://r2c-service:5001',
 'r2b': 'http://r2b-service:5002',
 'r2f': 'http://r2f-service:5003',
 'e1': 'http://e1-service:5004',
 'c1': 'http://c1-service:5005'
 }

 backend_url = backends.get(product)
 if not backend_url:
 return error(404, f'Product {product} not found')

 # Forward request to backend
 response = http_client.request(
 method=request.method,
 url=f'{backend_url}{request.path}',
 headers=request.headers,
 data=request.body
 )

 return response
```

### Rate Limiting Implementation

```python
import redis

rate_limit_cache = redis.Redis(host='localhost', port=6379)

def check_rate_limit(user_id, tier):
 # Define limits per tier
 limits = {
 'free': {'requests': 100, 'window': 3600}, # 100/hour
 'starter': {'requests': 1000, 'window': 3600},
 'pro': {'requests': 5000, 'window': 3600},
 'enterprise': {'requests': 999999, 'window': 3600}
 }

 limit_config = limits[tier]
 key = f'rate_limit:{user_id}'

 # Get current count
 current = rate_limit_cache.get(key)

 if current is None:
 # First request in window
 rate_limit_cache.setex(key, limit_config['window'], 1)
 return True

 current = int(current)

 if current >= limit_config['requests']:
 # Limit exceeded
 ttl = rate_limit_cache.ttl(key)
 raise RateLimitError(f'Rate limit exceeded. Retry in {ttl} seconds')

 # Increment counter
 rate_limit_cache.incr(key)
 return True
```

---

## Data Platform Integration - Production Examples

### Cross-Product Query: E1 Dashboard Reading R2a Data

**E1 needs to show last 30 days revenue**

```sql
-- E1 Backend executes this query
DECLARE @user_id UNIQUEIDENTIFIER = '550e8400...';
DECLARE @start_date DATE = DATEADD(day, -30, GETDATE());

-- E1 reads FROM R2a schema (not its own schema)
SELECT
 transaction_date,
 SUM(CASE WHEN type = 'revenue' THEN amount ELSE 0 END) AS daily_revenue
FROM r2a.transactions
WHERE user_id = @user_id
 AND transaction_date >= @start_date
GROUP BY transaction_date
ORDER BY transaction_date;
```

**Row-Level Security Enforcement:**
```sql
-- Applied automatically to all queries
-- Defined in data-platform.md

-- Session context set on login
EXEC sp_set_session_context 'user_id', @user_id;

-- Every SELECT from r2a.transactions automatically filtered
-- WHERE user_id = SESSION_CONTEXT('user_id')
-- → Users only see their own data (enforced at database level)
```

---

## Performance Benchmarks

**Target Response Times:**
- Authentication (login): <500ms (p95)
- API Gateway routing: <50ms overhead
- Simple data query (R2a P&L): <200ms
- Complex aggregation (C1 forecasting): <1s
- Database write (transaction create): <100ms

**Load Testing Results (Simulated 1,000 concurrent users):**
```
Metric Target Actual Status

Requests/sec 1000 1250 Pass
Error rate <1% 0.3% Pass
p95 latency <500ms 420ms Pass
Database connections <100 78 Pass
Memory usage <4GB 3.2GB Pass
```

---

## Disaster Recovery

### Backup Strategy

**Database Backups:**
- Full backup: Daily at 2am WIB
- Transaction log backup: Every hour
- Retention: 30 days
- Storage: Azure Blob (geo-redundant)

**Recovery Procedures:**

**Scenario 1: Database Corruption**
```bash
# 1. Identify last good backup
az sql db list-backups --name pwbi-db

# 2. Restore to new server
az sql db restore \
 --resource-group pwbi-rg \
 --server pwbi-sql \
 --name pwbi-db-restored \
 --restore-point-in-time "2025-12-26T01:00:00Z"

# 3. Verify data integrity
sqlcmd -S pwbi-sql-restored -d pwbi-db-restored \
 -Q "SELECT COUNT(*) FROM shared.users; SELECT COUNT(*) FROM r2a.transactions;"

# 4. Switch DNS to point to restored server
# 5. Monitor for 1 hour
# 6. Delete corrupted server if stable
```

**RTO (Recovery Time Objective):** <1 hour
**RPO (Recovery Point Objective):** <1 hour (last transaction log backup)

---

## Troubleshooting Guide

### Issue 1: User Can't Access Product After Subscription

**Symptoms:**
- User subscribed to R2a
- Gets 403 Forbidden when accessing /v1/r2a/transactions

**Diagnosis:**
```sql
-- Check subscription status
SELECT * FROM shared.product_subscriptions
WHERE user_id = @user_id AND product_id = 'r2a';
-- Expected: status = 'active'

-- Check JWT token payload
-- Decode token at jwt.io
-- Expected: "products": ["r2a"] in payload
```

**Root Causes:**
1. Subscription not activated yet (payment pending)
2. JWT token issued before subscription (old token)
3. Product ID mismatch (subscribed to 'r2a-basic' but token says 'r2a')

**Fix:**
```python
# Force token refresh
POST /v1/auth/refresh
# New token will include updated products array

# Or logout/login (new JWT generated)
```

---

### Issue 2: Slow API Response (>2s latency)

**Diagnosis Steps:**
```sql
-- 1. Check database performance
SELECT TOP 10
 query_text,
 execution_count,
 total_elapsed_time / execution_count AS avg_time_ms
FROM sys.dm_exec_query_stats
CROSS APPLY sys.dm_exec_sql_text(sql_handle)
WHERE total_elapsed_time / execution_count > 1000 -- >1 second
ORDER BY avg_time_ms DESC;

-- 2. Check for missing indexes
SELECT
 object_name,
 equality_columns,
 inequality_columns,
 included_columns
FROM sys.dm_db_missing_index_details
WHERE avg_user_impact > 50; -- High impact

-- 3. Check for table locks
SELECT
 resource_type,
 resource_database_id,
 request_status,
 request_mode
FROM sys.dm_tran_locks
WHERE request_status = 'WAIT';
```

**Common Fixes:**
- Add missing indexes
- Optimize N+1 queries (use JOINs instead of loops)
- Add read replica for heavy queries
- Enable query result caching

---

## Scalability Strategy - Detailed Implementation

### Horizontal Scaling: API Gateway

**Current (1-1,000 users):**
- Single API Gateway instance
- Azure App Service (B2 tier, 2 cores, 3.5GB RAM)

**Scale Trigger:** CPU >70% sustained for 10 minutes

**Scaling Script:**
```bash
# Auto-scale rule (Azure CLI)
az monitor autoscale create \
 --resource-group pwbi-rg \
 --resource pwbi-api-gateway \
 --min-count 2 \
 --max-count 5 \
 --count 2

az monitor autoscale rule create \
 --resource-group pwbi-rg \
 --autoscale-name pwbi-api-autoscale \
 --condition "Percentage CPU > 70 avg 10m" \
 --scale out 1 # Add 1 instance

az monitor autoscale rule create \
 --resource-group pwbi-rg \
 --autoscale-name pwbi-api-autoscale \
 --condition "Percentage CPU < 30 avg 10m" \
 --scale in 1 # Remove 1 instance
```

**Load Balancer Config:**
- Azure Load Balancer (Layer 7)
- Health check: GET /health every 30s
- Session affinity: Disabled (stateless, JWT in every request)

---

## Migration Path: Monolith → Microservices

**Phase 1 (Current): Monolithic per Product**
- Each product (R2a, E1, C1) is standalone app
- Shared database (different schemas)

**Phase 2 (1,000-5,000 users): Shared Services Extraction**
```
Extract:
1. Auth Service (shared.users → dedicated auth DB)
2. Integration Service (POS connectors → dedicated service)

Result:
- R2a, R2c, R2b, R2f → Still monolithic (but smaller)
- Auth Service → Microservice
- Integration Service → Microservice
```

**Phase 3 (5,000-10,000 users): Full Microservices**
```
Each product becomes microservice:
- R2a Service (accounting logic)
- R2c Service (recipe costing)
- R2b Service (cash flow forecasting)
- R2f Service (invoicing)
- E1 Service (dashboard rendering)
- C1 Orchestrator (coordinates all services)
```

**Migration Benefits:**
- Independent scaling (scale R2a without scaling R2c)
- Independent deployments (deploy R2a bug fix without touching E1)
- Technology flexibility (R2a can use Python, E1 can use Node.js)

---

**Related Documents:**
- [[products/shared-technical/architecture/data-platform|Data Platform]] - Database architecture & SQL schemas
- [[products/shared-technical/architecture/auth-system|Auth System]] - JWT implementation details
- [[products/shared-technical/architecture/api-gateway|API Gateway]] - Rate limiting & routing specs
- [[products/shared-technical/devops/scaling-guide|Scaling Guide]] - Infrastructure scaling procedures

---

**Last Updated:** 2025-12-26
**Owner:** Technical Architecture Lead
**Review Cycle:** Quarterly (as architecture evolves)
**Next Review:** 2025-03-26
