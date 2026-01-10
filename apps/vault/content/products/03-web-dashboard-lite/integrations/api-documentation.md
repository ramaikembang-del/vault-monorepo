# API Documentation - E1 Web Dashboard Lite (Future)

**Product:** E1 - Web Dashboard Lite
**Last Updated:** 2025-12-28
**Version:** 1.0 (Planned for Q3 2025)
**Status:** Future Specification

---

## 1. Overview

### 1.1 API Purpose

**E1 REST API** (planned for Q3 2025) will enable third-party integrations:
- **Accounting software:** Export E1 data to Xero, Accurate, Jurnal
- **Business intelligence:** Import E1 data to Tableau, Metabase
- **Custom dashboards:** Build custom analytics on top of E1 data
- **Automation:** Trigger actions based on E1 metrics (e.g., alert if sales <Rp 1M per day)

**Availability:**
- **Free:** No API access
- **Starter:** No API access
- **Pro:** Read-only API (10,000 requests/month)
- **Enterprise (Future):** Read/Write API (unlimited requests)

### 1.2 API Principles

**REST Architectural Style:**
- Standard HTTP methods (GET, POST, PUT, DELETE)
- JSON request/response format
- Stateless (no server-side sessions)
- Versioned endpoints (v1, v2, etc.)

**Authentication:**
- API Key (Bearer token)
- JWT for user-specific access
- Rate limiting per tier

**Data Format:**
- ISO 8601 dates (YYYY-MM-DD)
- Rupiah amounts as integers (no decimals)
- UTF-8 encoding

---

## 2. Authentication

### 2.1 API Key Generation

**User Flow:**
1. Login to E1 (Pro tier)
2. Navigate to Settings Ã¢†' API Ã¢†' Generate API Key
3. Copy API key (shown once, cannot retrieve later)
4. Use API key in all API requests

**API Key Format:**
```
e1_live_abc123def456ghi789jkl012mno345
```

**Security:**
- API keys are hashed in database (bcrypt)
- Cannot be retrieved after generation (only regenerated)
- Can be revoked anytime

### 2.2 Authentication Methods

**Method 1: Bearer Token (Recommended)**
```http
GET /api/v1/transactions HTTP/1.1
Host: api.e1-dashboard.com
Authorization: Bearer e1_live_abc123def456ghi789jkl012mno345
```

**Method 2: Query Parameter (Deprecated)**
```http
GET /api/v1/transactions?api_key=e1_live_abc123def456ghi789jkl012mno345
```

**Error Response (401 Unauthorized):**
```json
{
 "error": "Unauthorized",
 "message": "Invalid or missing API key",
 "code": "INVALID_API_KEY"
}
```

---

## 3. Rate Limiting

### 3.1 Rate Limits by Tier

| Tier | Requests/Hour | Requests/Month | Burst Limit |
|------|--------------|---------------|-------------|
| **Free** | N/A (no API) | N/A | N/A |
| **Starter** | N/A (no API) | N/A | N/A |
| **Pro** | 1,000 | 10,000 | 100/minute |
| **Enterprise** | Unlimited | Unlimited | 1,000/minute |

**Rate Limit Headers (Included in Response):**
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1704067200
```

**Example:**
- Limit: 1,000 requests/hour
- Remaining: 950 requests left this hour
- Reset: Unix timestamp when limit resets (Jan 1, 2025 00:00:00 UTC)

### 3.2 Rate Limit Exceeded Response

**HTTP 429 Too Many Requests:**
```json
{
 "error": "Rate limit exceeded",
 "message": "You have exceeded 1,000 requests per hour. Try again in 15 minutes.",
 "code": "RATE_LIMIT_EXCEEDED",
 "retry_after": 900
}
```

**Best Practices:**
- Implement exponential backoff
- Cache API responses (avoid redundant requests)
- Use webhooks instead of polling (future feature)

---

## 4. API Endpoints (Read-Only - Pro Tier)

### 4.1 GET /api/v1/transactions

**Retrieve transactions with filters.**

**Request:**
```http
GET /api/v1/transactions?start_date=2025-01-01&end_date=2025-01-31&limit=100 HTTP/1.1
Authorization: Bearer e1_live_abc123...
```

**Query Parameters:**
- `start_date` (optional): Filter transactions >= this date (YYYY-MM-DD)
- `end_date` (optional): Filter transactions <= this date (YYYY-MM-DD)
- `limit` (optional): Max results (default: 100, max: 1000)
- `offset` (optional): Pagination offset (default: 0)
- `payment_method` (optional): Filter by payment method (Cash, Debit, Credit, E-Wallet)

**Response (200 OK):**
```json
{
 "data": [
 {
 "id": "txn_abc123",
 "transaction_date": "2025-01-15",
 "transaction_time": "14:30:25",
 "amount": 25000,
 "product_name": "Nasi Goreng",
 "product_category": "Food",
 "payment_method": "Cash",
 "cashier_id": "BUDI001",
 "location": null,
 "created_at": "2025-01-15T14:30:25Z"
 },
 {
 "id": "txn_def456",
 "transaction_date": "2025-01-15",
 "transaction_time": "14:45:10",
 "amount": 10000,
 "product_name": "Es Teh",
 "product_category": "Beverage",
 "payment_method": "E-Wallet",
 "cashier_id": "SITI002",
 "location": null,
 "created_at": "2025-01-15T14:45:10Z"
 }
 ],
 "pagination": {
 "total": 1500,
 "limit": 100,
 "offset": 0,
 "has_more": true
 }
}
```

**Error Responses:**
- `400 Bad Request`: Invalid date format
- `401 Unauthorized`: Invalid API key
- `429 Too Many Requests`: Rate limit exceeded

### 4.2 GET /api/v1/transactions/:id

**Retrieve single transaction by ID.**

**Request:**
```http
GET /api/v1/transactions/txn_abc123 HTTP/1.1
Authorization: Bearer e1_live_abc123...
```

**Response (200 OK):**
```json
{
 "data": {
 "id": "txn_abc123",
 "transaction_date": "2025-01-15",
 "transaction_time": "14:30:25",
 "amount": 25000,
 "product_name": "Nasi Goreng",
 "product_category": "Food",
 "payment_method": "Cash",
 "cashier_id": "BUDI001",
 "location": null,
 "created_at": "2025-01-15T14:30:25Z",
 "updated_at": "2025-01-15T14:30:25Z"
 }
}
```

**Error Responses:**
- `404 Not Found`: Transaction ID does not exist

### 4.3 GET /api/v1/analytics/summary

**Retrieve summary analytics for a date range.**

**Request:**
```http
GET /api/v1/analytics/summary?start_date=2025-01-01&end_date=2025-01-31 HTTP/1.1
Authorization: Bearer e1_live_abc123...
```

**Response (200 OK):**
```json
{
 "data": {
 "period": {
 "start_date": "2025-01-01",
 "end_date": "2025-01-31"
 },
 "metrics": {
 "total_sales": 25000000,
 "transaction_count": 1500,
 "average_transaction_value": 16667,
 "top_product": {
 "name": "Nasi Goreng",
 "sales": 5000000,
 "count": 250
 },
 "payment_method_breakdown": {
 "Cash": 10000000,
 "E-Wallet": 8000000,
 "Debit": 5000000,
 "Credit": 2000000
 },
 "peak_hour": "18:00-19:00"
 }
 }
}
```

### 4.4 GET /api/v1/products

**Retrieve product performance data.**

**Request:**
```http
GET /api/v1/products?start_date=2025-01-01&end_date=2025-01-31&sort=sales_desc HTTP/1.1
Authorization: Bearer e1_live_abc123...
```

**Response (200 OK):**
```json
{
 "data": [
 {
 "product_name": "Nasi Goreng",
 "product_category": "Food",
 "total_sales": 5000000,
 "transaction_count": 250,
 "average_price": 20000
 },
 {
 "product_name": "Es Teh",
 "product_category": "Beverage",
 "total_sales": 2500000,
 "transaction_count": 500,
 "average_price": 5000
 }
 ],
 "pagination": {
 "total": 50,
 "limit": 100,
 "offset": 0
 }
}
```

---

## 5. Webhooks (Future - Q4 2025)

### 5.1 Webhook Events

**Planned Events:**
- `transaction.created`: New transaction added
- `daily_sales.threshold`: Daily sales exceeded/below threshold
- `product.low_stock`: Product inventory low (if inventory tracking enabled)

**User Configuration:**
```
Settings Ã¢†' API Ã¢†' Webhooks Ã¢†' Add Webhook

Event: transaction.created
URL: https://yourapp.com/webhooks/e1-transaction
Secret: whsec_abc123def456
```

### 5.2 Webhook Payload Example

**Event: transaction.created**
```json
{
 "event": "transaction.created",
 "timestamp": "2025-01-15T14:30:25Z",
 "data": {
 "id": "txn_abc123",
 "transaction_date": "2025-01-15",
 "transaction_time": "14:30:25",
 "amount": 25000,
 "product_name": "Nasi Goreng",
 "payment_method": "Cash"
 }
}
```

**Webhook Signature (HMAC-SHA256):**
```
X-E1-Signature: sha256=abc123def456...
```

---

## 6. Error Handling

### 6.1 Standard Error Response Format

**All errors return JSON:**
```json
{
 "error": "Resource not found",
 "message": "Transaction with ID 'txn_xyz' does not exist",
 "code": "TRANSACTION_NOT_FOUND",
 "request_id": "req_abc123"
}
```

### 6.2 HTTP Status Codes

| Status Code | Meaning | Example |
|-------------|---------|---------|
| **200 OK** | Success | Transaction retrieved |
| **400 Bad Request** | Invalid input | Invalid date format |
| **401 Unauthorized** | Invalid API key | Missing Authorization header |
| **403 Forbidden** | Permission denied | Free tier cannot access API |
| **404 Not Found** | Resource not found | Transaction ID does not exist |
| **429 Too Many Requests** | Rate limit exceeded | Exceeded 1,000 requests/hour |
| **500 Internal Server Error** | Server error | Database connection failed |

---

**Full API Reference:** See [[products/03-web-dashboard-lite/technical/api-reference|technical/api-reference.md]]

**Document ID:** E1-API-DOC-v1.0 (Future)
**Last Updated:** 2025-12-28
**Owner:** Technical Team


---

**Related Documents:**
- [[products/03-web-dashboard-lite/03-web-dashboard-lite|Product Overview]] - Main product documentation
- [[products/03-web-dashboard-lite/integrations/integrations|Integrations Hub]] - All integration docs


