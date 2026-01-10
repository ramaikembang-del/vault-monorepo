# API Gateway

**Last Updated:** 2025-12-26
**Endpoint:** `https://api.pwbi-fnbgrowth.com`
**Technology:** Azure API Management / Kong Gateway

## Overview

Unified API layer providing routing, authentication, rate limiting for all PWBI FnB products.

## API Structure

### Product-Specific Routes

```
https://api.pwbi-fnbgrowth.com/v1/{product}/{resource}

Examples:
/v1/r2a/transactions # R2a Simple P&L
/v1/r2c/recipes # R2c COGS Calculator
/v1/r2b/cash-accounts # R2b Cash Flow
/v1/r2f/invoices # R2f Invoice Management
/v1/e1/metrics # E1 Dashboard
/v1/c1/customers # C1 SaaS Platform
```

### Shared Routes

```
/v1/auth/* # Authentication (all products)
/v1/integrations/* # POS, accounting integrations
/v1/data/metrics # Shared metrics catalog
/v1/users/profile # User profile management
```

---

## Request/Response Format

### Standard Request Headers

```
Authorization: Bearer eyJ... (JWT token)
Content-Type: application/json
X-Product-ID: r2a (which product making request)
X-Request-ID: uuid (for tracing)
```

### Standard Response Format

**Success (200):**
```json
{
 "success": true,
 "data": {
 // Response payload
 },
 "meta": {
 "timestamp": "2025-12-26T10:30:00Z",
 "request_id": "550e8400-e29b-41d4-a716-446655440000"
 }
Unified API Gateway providing single entry point for all PWBI FnB Growth products with intelligent routing, authentication, rate limiting, and caching.

**Purpose:**
- Single API endpoint for all products (A1, R2a-f, E1, C1)
- Centralized authentication & authorization
- Tier-based rate limiting (free vs paid users)
- Response caching for performance
- API versioning & backward compatibility
- Webhook delivery management

**Base URL:** `https://api.pwbi-fnbgrowth.com`

---

## Request Routing Logic

### Route → Backend Mapping

**Product-Specific Routes:**

```python
# API Gateway routing configuration
BACKEND_SERVICES = {
 'r2a': {'url': 'http://r2a-service:5000', 'tier': 'paid'},
 'r2b': {'url': 'http://r2b-service:5001', 'tier': 'paid'},
 'r2c': {'url': 'http://r2c-service:5002', 'tier': 'paid'},
 'r2f': {'url': 'http://r2f-service:5003', 'tier': 'paid'},
 'e1': {'url': 'http://e1-service:5004', 'tier': 'freemium'},
 'c1': {'url': 'http://c1-service:5005', 'tier': 'enterprise'},
 'auth': {'url': 'http://auth-service:5006', 'tier': 'public'},
 'data': {'url': 'http://data-service:5007', 'tier': 'internal'}
}

def route_request(request):
 """
 Route incoming API request to appropriate backend service

 URL Pattern: /api/v1/{product}/{resource}
 Example: POST /api/v1/r2a/transactions
 """
 path_parts = request.path.split('/')

 # Parse URL: ['', 'api', 'v1', 'r2a', 'transactions']
 if len(path_parts) < 4:
 return error_response(400, 'Invalid API path')

 api_version = path_parts[2] # 'v1'
 product_code = path_parts[3] # 'r2a'

 # Validate API version
 if api_version not in ['v1', 'v2']:
 return error_response(400, f'Unsupported API version: {api_version}')

 # Get backend service
 backend = BACKEND_SERVICES.get(product_code)
 if not backend:
 return error_response(404, f'Unknown product: {product_code}')

 # Build backend URL
 backend_path = '/' + '/'.join(path_parts[4:]) # '/transactions'
 backend_url = f"{backend['url']}{backend_path}"

 # Forward request with headers
 response = http_client.request(
 method=request.method,
 url=backend_url,
 headers=forward_headers(request.headers),
 data=request.body,
 params=request.query_params
 )

 return response

def forward_headers(original_headers):
 """Forward only necessary headers to backend"""
 allowed_headers = [
 'Authorization', # JWT token
 'Content-Type',
 'Accept',
 'User-Agent',
 'X-Request-ID' # For tracing
 ]

 return {k: v for k, v in original_headers.items() if k in allowed_headers}
```

---

## Authentication & Authorization

### JWT Token Validation

**Every Request Validates Token:**

```python
def validate_and_forward_request(request):
 # 1. Extract JWT from Authorization header
 auth_header = request.headers.get('Authorization')
 if not auth_header:
 # Public endpoints (login, register) don't need auth
 if request.path in PUBLIC_ENDPOINTS:
 return route_request(request)
 return error_response(401, 'Missing authorization header')

 # 2. Validate JWT token
 try:
 token = auth_header.split('Bearer ')[1]
 payload = jwt.decode(token, PUBLIC_KEY, algorithms=['RS256'])
 except jwt.ExpiredSignatureError:
 return error_response(401, 'Token expired', {
 'error_code': 'TOKEN_EXPIRED',
 'refresh_hint': 'Call POST /api/v1/auth/refresh'
 })
 except Exception as e:
 return error_response(401, f'Invalid token: {str(e)}')

 # 3. Check product access
 requested_product = request.path.split('/')[3]
 if requested_product not in payload.get('products', []):
 return error_response(403, f'No subscription to product: {requested_product}', {
 'error_code': 'PRODUCT_ACCESS_DENIED',
 'subscribed_products': payload.get('products', []),
 'upgrade_url': f'https://app.pwbi.com/upgrade?product={requested_product}'
 })

 # 4. Add user context to request headers (for backend)
 request.headers['X-User-ID'] = payload['user_id']
 request.headers['X-User-Role'] = payload['role']
 request.headers['X-User-Tier'] = payload.get('tier', 'free')

 # 5. Route to backend
 return route_request(request)

PUBLIC_ENDPOINTS = [
 '/api/v1/auth/login',
 '/api/v1/auth/register',
 '/api/v1/auth/verify',
 '/api/v1/auth/reset-password'
]
```

---

## Rate Limiting Implementation

### Tier-Based Rate Limits

**Rate Limit Configuration:**

```python
import redis
from datetime import datetime

redis_client = redis.Redis(host='redis-cache', port=6379)

# Rate limits per user tier
RATE_LIMITS = {
 'free': {
 'requests_per_hour': 100,
 'requests_per_minute': 5,
 'burst': 10 # Allow short bursts
 },
 'starter': {
 'requests_per_hour': 1000,
 'requests_per_minute': 50,
 'burst': 100
 },
 'pro': {
 'requests_per_hour': 5000,
 'requests_per_minute': 200,
 'burst': 500
 },
 'enterprise': {
 'requests_per_hour': 50000,
 'requests_per_minute': 2000,
 'burst': 5000
 }
}

def check_rate_limit(user_id, tier):
 """
 Token bucket algorithm for rate limiting
 """
 config = RATE_LIMITS.get(tier, RATE_LIMITS['free'])

 # Keys for different time windows
 hourly_key = f"rate_limit:hour:{user_id}:{datetime.utcnow().strftime('%Y%m%d%H')}"
 minute_key = f"rate_limit:minute:{user_id}:{datetime.utcnow().strftime('%Y%m%d%H%M')}"

 # Check hourly limit
 hourly_count = redis_client.get(hourly_key)
 if hourly_count and int(hourly_count) >= config['requests_per_hour']:
 ttl = redis_client.ttl(hourly_key)
 return {
 'allowed': False,
 'error': f"Hourly rate limit exceeded ({config['requests_per_hour']} req/hour)",
 'retry_after': ttl,
 'limit': config['requests_per_hour'],
 'remaining': 0
 }

 # Check per-minute limit
 minute_count = redis_client.get(minute_key)
 if minute_count and int(minute_count) >= config['requests_per_minute']:
 return {
 'allowed': False,
 'error': f"Rate limit exceeded ({config['requests_per_minute']} req/min)",
 'retry_after': 60 - datetime.utcnow().second,
 'limit': config['requests_per_minute'],
 'remaining': 0
 }

 # Increment counters
 pipe = redis_client.pipeline()
 pipe.incr(hourly_key)
 pipe.expire(hourly_key, 3600) # 1 hour
 pipe.incr(minute_key)
 pipe.expire(minute_key, 60) # 1 minute
 pipe.execute()

 # Calculate remaining
 hourly_remaining = config['requests_per_hour'] - int(hourly_count or 0) - 1

 return {
 'allowed': True,
 'limit': config['requests_per_hour'],
 'remaining': hourly_remaining,
 'reset_at': datetime.utcnow().replace(minute=0, second=0).timestamp() + 3600
 }

# Middleware to enforce rate limiting
def rate_limit_middleware(request):
 user_id = request.headers.get('X-User-ID')
 user_tier = request.headers.get('X-User-Tier', 'free')

 result = check_rate_limit(user_id, user_tier)

 if not result['allowed']:
 return error_response(429, result['error'], {
 'error_code': 'RATE_LIMIT_EXCEEDED',
 'retry_after': result['retry_after'],
 'limit': result['limit'],
 'upgrade_url': 'https://app.pwbi.com/upgrade'
 })

 # Add rate limit headers to response
 response = next_middleware(request)
 response.headers['X-Rate-Limit-Limit'] = str(result['limit'])
 response.headers['X-Rate-Limit-Remaining'] = str(result['remaining'])
 response.headers['X-Rate-Limit-Reset'] = str(int(result['reset_at']))

 return response
```

---

## Response Caching Strategy

### Cache Configuration

**Cacheable Endpoints:**

```python
# Cache configuration per endpoint pattern
CACHE_CONFIG = {
 # Metrics data (changes infrequently)
 'GET /api/v1/e1/metrics': {
 'ttl': 300, # 5 minutes
 'vary_by': ['user_id', 'date_range']
 },

 # Monthly P&L summary (static once month ends)
 'GET /api/v1/r2a/reports/monthly': {
 'ttl': 3600, # 1 hour
 'vary_by': ['user_id', 'year', 'month']
 },

 # Metrics catalog (shared, rarely changes)
 'GET /api/v1/data/metrics-catalog': {
 'ttl': 86400, # 24 hours
 'vary_by': ['tier'] # Free vs paid metrics different
 },

 # User profile (changes rarely)
 'GET /api/v1/auth/profile': {
 'ttl': 600, # 10 minutes
 'vary_by': ['user_id']
 }
}

def cache_middleware(request):
 """
 Cache GET requests responses in Redis
 """
 # Only cache GET requests
 if request.method != 'GET':
 return next_middleware(request)

 # Check if endpoint is cacheable
 endpoint_pattern = f"{request.method} {'/'.join(request.path.split('/')[:5])}"
 cache_config = CACHE_CONFIG.get(endpoint_pattern)

 if not cache_config:
 # Not cacheable
 return next_middleware(request)

 # Generate cache key
 cache_key_parts = [endpoint_pattern]
 for vary_param in cache_config['vary_by']:
 if vary_param == 'user_id':
 cache_key_parts.append(f"user:{request.headers.get('X-User-ID')}")
 elif vary_param in request.query_params:
 cache_key_parts.append(f"{vary_param}:{request.query_params[vary_param]}")

 cache_key = ':'.join(cache_key_parts)

 # Check cache
 cached_response = redis_client.get(cache_key)
 if cached_response:
 response = json.loads(cached_response)
 response['headers']['X-Cache'] = 'HIT'
 return response

 # Cache miss - fetch from backend
 response = next_middleware(request)

 # Cache successful responses only
 if 200 <= response.status_code < 300:
 redis_client.setex(
 cache_key,
 cache_config['ttl'],
 json.dumps(response.to_dict())
 )
 response.headers['X-Cache'] = 'MISS'
 response.headers['Cache-Control'] = f"private, max-age={cache_config['ttl']}"

 return response
```

### Cache Invalidation

**Invalidate cache when data changes:**

```python
def invalidate_cache_on_write(request):
 """
 Invalidate related cache entries when data is modified
 """
 if request.method in ['POST', 'PUT', 'PATCH', 'DELETE']:
 user_id = request.headers.get('X-User-ID')
 product = request.path.split('/')[3]

 # Invalidate user's cache for this product
 cache_pattern = f"GET /api/v1/{product}/*:user:{user_id}:*"

 # Find matching keys
 keys = redis_client.keys(cache_pattern)
 if keys:
 redis_client.delete(*keys)
 logger.info(f"Invalidated {len(keys)} cache entries for user {user_id}")

 return next_middleware(request)
```

---

## API Versioning

### Version Routing

**Support Multiple API Versions:**

```python
# Current: v1 (stable), v2 (beta)
API_VERSIONS = {
 'v1': {
 'status': 'stable',
 'deprecation_date': None,
 'backends': BACKEND_SERVICES # Default backends
 },
 'v2': {
 'status': 'beta',
 'deprecation_date': None,
 'backends': {
 # v2 might route to different backends
 'r2a': {'url': 'http://r2a-v2-service:6000', 'tier': 'paid'},
 # Other products use v1 backends
 **{k: v for k, v in BACKEND_SERVICES.items() if k != 'r2a'}
 }
 }
}

def version_middleware(request):
 """
 Handle API versioning
 """
 api_version = request.path.split('/')[2] # /api/v1/...

 version_config = API_VERSIONS.get(api_version)
 if not version_config:
 return error_response(400, f'Unsupported API version: {api_version}')

 # Add deprecation warning if applicable
 response = next_middleware(request)

 if version_config['deprecation_date']:
 response.headers['X-API-Deprecation'] = f"Version {api_version} will be deprecated on {version_config['deprecation_date']}"
 response.headers['X-API-Upgrade-To'] = 'v2'

 response.headers['X-API-Version'] = api_version
 response.headers['X-API-Status'] = version_config['status']

 return response
```

---

## Error Response Format

### Standardized Error Codes

```python
# Error code registry
ERROR_CODES = {
 # Authentication errors (4000-4099)
 'AUTH_MISSING_TOKEN': {'code': 4001, 'http_status': 401},
 'AUTH_INVALID_TOKEN': {'code': 4002, 'http_status': 401},
 'AUTH_EXPIRED_TOKEN': {'code': 4003, 'http_status': 401},

 # Authorization errors (4100-4199)
 'PRODUCT_ACCESS_DENIED': {'code': 4101, 'http_status': 403},
 'INSUFFICIENT_PERMISSIONS': {'code': 4102, 'http_status': 403},

 # Rate limiting (4200-4299)
 'RATE_LIMIT_EXCEEDED': {'code': 4201, 'http_status': 429},
 'QUOTA_EXCEEDED': {'code': 4202, 'http_status': 429},

 # Validation errors (4300-4399)
 'INVALID_INPUT': {'code': 4301, 'http_status': 400},
 'MISSING_REQUIRED_FIELD': {'code': 4302, 'http_status': 400},

 # Resource errors (4400-4499)
 'RESOURCE_NOT_FOUND': {'code': 4401, 'http_status': 404},
 'RESOURCE_CONFLICT': {'code': 4402, 'http_status': 409},

 # Server errors (5000-5099)
 'INTERNAL_SERVER_ERROR': {'code': 5001, 'http_status': 500},
 'SERVICE_UNAVAILABLE': {'code': 5002, 'http_status': 503},
 'GATEWAY_TIMEOUT': {'code': 5003, 'http_status': 504}
}

def error_response(http_status, message, details=None):
 """
 Generate standardized error response
 """
 error_code = details.get('error_code', 'UNKNOWN_ERROR') if details else 'UNKNOWN_ERROR'

 response_body = {
 'success': False,
 'error': {
 'code': ERROR_CODES.get(error_code, {}).get('code', 9999),
 'error_code': error_code,
 'message': message,
 'timestamp': datetime.utcnow().isoformat(),
 'request_id': generate_request_id()
 }
 }

 # Add additional error details if provided
 if details:
 response_body['error'].update({k: v for k, v in details.items() if k != 'error_code'})

 return JSONResponse(
 content=response_body,
 status_code=http_status,
 headers={'Content-Type': 'application/json'}
 )

# Example error responses:
"""
{
 "success": false,
 "error": {
 "code": 4003,
 "error_code": "AUTH_EXPIRED_TOKEN",
 "message": "Token expired",
 "timestamp": "2025-12-26T12:00:00Z",
 "request_id": "req_abc123",
 "refresh_hint": "Call POST /api/v1/auth/refresh"
 }
}

{
 "success": false,
 "error": {
 "code": 4201,
 "error_code": "RATE_LIMIT_EXCEEDED",
 "message": "Rate limit exceeded (100 req/hour)",
 "retry_after": 1800,
 "limit": 100,
 "upgrade_url": "https://app.pwbi.com/upgrade"
 }
}
"""
```

---

## Webhook Management

### Outgoing Webhooks

**Deliver events to user-configured webhook URLs:**

```python
def deliver_webhook(event_type, payload, user_id):
 """
 Deliver webhook to user's configured URL

 Event types:
 - invoice.created
 - invoice.paid
 - transaction.created
 - payment.received
 """
 # Get user's webhook configuration
 webhook_config = db.execute("""
 SELECT webhook_url, secret_key
 FROM shared.webhook_subscriptions
 WHERE user_id = ? AND event_type = ? AND is_active = 1
 """, user_id, event_type)

 if not webhook_config:
 return # No webhook configured

 # Build webhook payload
 webhook_payload = {
 'event': event_type,
 'data': payload,
 'timestamp': datetime.utcnow().isoformat(),
 'webhook_id': str(uuid.uuid4())
 }

 # Sign payload with HMAC
 signature = hmac.new(
 webhook_config['secret_key'].encode(),
 json.dumps(webhook_payload).encode(),
 hashlib.sha256
 ).hexdigest()

 # Deliver webhook (with retries)
 for attempt in range(3):
 try:
 response = requests.post(
 webhook_config['webhook_url'],
 json=webhook_payload,
 headers={
 'Content-Type': 'application/json',
 'X-Webhook-Signature': signature,
 'X-Webhook-Event': event_type
 },
 timeout=10
 )

 if 200 <= response.status_code < 300:
 # Success
 log_webhook_delivery(webhook_payload['webhook_id'], 'success')
 break
 else:
 logger.warning(f"Webhook delivery failed (attempt {attempt+1}): {response.status_code}")

 except requests.Timeout:
 logger.warning(f"Webhook delivery timeout (attempt {attempt+1})")
 except Exception as e:
 logger.error(f"Webhook delivery error (attempt {attempt+1}): {str(e)}")

 if attempt < 2:
 time.sleep(2 ** attempt) # Exponential backoff: 1s, 2s, 4s

 else:
 # All attempts failed
 log_webhook_delivery(webhook_payload['webhook_id'], 'failed')
 notify_user_webhook_failure(user_id, event_type)
```

---

## Monitoring & Logging

### Request Tracing

**Every request gets unique ID for tracing:**

```python
import uuid

def request_tracing_middleware(request):
 """
 Add unique request ID for distributed tracing
 """
 request_id = request.headers.get('X-Request-ID') or f"req_{uuid.uuid4().hex[:12]}"
 request.headers['X-Request-ID'] = request_id

 # Log request
 logger.info(f"[{request_id}] {request.method} {request.path}", extra={
 'user_id': request.headers.get('X-User-ID'),
 'user_agent': request.headers.get('User-Agent'),
 'ip_address': request.client.host
 })

 start_time = time.time()

 # Process request
 response = next_middleware(request)

 # Log response
 duration_ms = (time.time() - start_time) * 1000
 logger.info(f"[{request_id}] {response.status_code} ({duration_ms:.2f}ms)")

 # Add to response headers
 response.headers['X-Request-ID'] = request_id
 response.headers['X-Response-Time'] = f"{duration_ms:.2f}ms"

 return response
```

### Metrics Collection

**Track API performance metrics:**

```python
from prometheus_client import Counter, Histogram

# Prometheus metrics
api_requests_total = Counter(
 'api_requests_total',
 'Total API requests',
 ['method', 'endpoint', 'status_code', 'product']
)

api_request_duration_seconds = Histogram(
 'api_request_duration_seconds',
 'API request duration in seconds',
 ['method', 'endpoint', 'product']
)

def metrics_middleware(request):
 """
 Collect metrics for monitoring
 """
 start_time = time.time()

 # Extract metadata
 product = request.path.split('/')[3] if len(request.path.split('/')) > 3 else 'unknown'
 endpoint = '/'.join(request.path.split('/')[:5]) # /api/v1/r2a/transactions

 try:
 response = next_middleware(request)
 status_code = response.status_code
 except Exception as e:
 status_code = 500
 raise
 finally:
 # Record metrics
 duration = time.time() - start_time

 api_requests_total.labels(
 method=request.method,
 endpoint=endpoint,
 status_code=status_code,
 product=product
 ).inc()

 api_request_duration_seconds.labels(
 method=request.method,
 endpoint=endpoint,
 product=product
 ).observe(duration)

 return response
```

---

## Health Checks

```python
@app.route('/health', methods=['GET'])
def health_check():
 """
 Health check endpoint for load balancer
 """
 checks = {
 'api_gateway': 'healthy',
 'redis_cache': check_redis_health(),
 'backend_services': check_backend_services_health()
 }

 all_healthy = all(status == 'healthy' for status in checks.values())

 return {
 'status': 'healthy' if all_healthy else 'degraded',
 'checks': checks,
 'timestamp': datetime.utcnow().isoformat()
 }, 200 if all_healthy else 503

def check_redis_health():
 try:
 redis_client.ping()
 return 'healthy'
 except:
 return 'unhealthy'

def check_backend_services_health():
 # Check if all critical backends are responsive
 critical_services = ['auth', 'r2a', 'e1']

 for service_name in critical_services:
 try:
 backend_url = BACKEND_SERVICES[service_name]['url']
 response = requests.get(f"{backend_url}/health", timeout=2)
 if response.status_code != 200:
 return 'degraded'
 except:
 return 'unhealthy'

 return 'healthy'
```

---

## Troubleshooting Guide

### Issue 1: 504 Gateway Timeout

**Symptoms:**
- Client gets 504 Gateway Timeout
- Request completes successfully in backend logs

**Diagnosis:**
```bash
# Check API Gateway timeout settings
curl -I https://api.pwbi.com/api/v1/r2a/reports/annual

# Check backend response time
tail -f /var/log/r2a-service/access.log | grep "annual"
```

**Common Causes:**
1. Backend processing >30s (default gateway timeout)
2. Database query slow (missing index)
3. Third-party API call timeout (bank sync, POS sync)

**Fix:**
- Increase gateway timeout for specific endpoints
- Optimize slow backend queries
- Move long-running tasks to background jobs

---

### Issue 2: Rate Limit Exceeded for Free User

**Symptoms:**
- User gets 429 Too Many Requests
- Claims they only made a few requests

**Diagnosis:**
```python
# Check actual request count in Redis
user_id = "550e8400..."
current_hour = datetime.utcnow().strftime('%Y%m%d%H')
count = redis_client.get(f"rate_limit:hour:{user_id}:{current_hour}")
print(f"Requests this hour: {count}")
```

**Common Causes:**
1. Multiple devices/browsers using same account simultaneously
2. Frontend making duplicate API calls (bug)
3. User actually hitting limit (needs upgrade)

**Fix:**
- Advise user to upgrade tier
- Debug frontend for duplicate calls
- Temporarily increase limit (support override)

---

**Related Documents:**
- [[products/shared-technical/architecture/auth-system|Authentication System]] - JWT implementation
- [[products/shared-technical/architecture/ecosystem-architecture|Ecosystem Architecture]] - Overall system design
- [[products/shared-technical/devops/monitoring|Monitoring]] - Metrics & alerting setup

---

**Last Updated:** 2025-12-26
**Owner:** Platform Engineering Lead
**Review Cycle:** Monthly (as routes/features change)
**Next Review:** 2025-01-26

---

## CORS Configuration

**Allowed Origins:**
- `https://*.pwbi-fnbgrowth.com` (production domains)
- `http://localhost:*` (local development)

**Allowed Methods:** GET, POST, PUT, DELETE, OPTIONS

**Allowed Headers:** Authorization, Content-Type, X-Product-ID

---

**Related Documents:**
- [[products/shared-technical/architecture/ecosystem-architecture|Ecosystem Architecture]] - How API fits in system
- [[products/shared-technical/architecture/auth-system|Auth System]] - JWT validation details
- [[products/shared-technical/security/security-architecture|Security Architecture]] - API security

**Last Updated:** 2025-12-26
**Owner:** API Platform Lead
