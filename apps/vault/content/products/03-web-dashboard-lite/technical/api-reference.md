# API Reference - E1 Web Dashboard Lite (Future)

**Product:** E1 - Web Dashboard Lite
**Last Updated:** 2025-12-28
**Version:** v1 (Planned for Q3 2025)
**Base URL:** `https://api.e1-dashboard.com/v1`
**Status:** Future Specification

---

## 1. Authentication

**All API requests require authentication via Bearer token:**
```http
Authorization: Bearer e1_live_abc123def456ghi789jkl012mno345
```

**Obtain API Key:**
- Login to E1 (Pro tier required)
- Navigate to Settings  ->  API  ->  Generate API Key
- Copy API key (shown once only)

**Error Response (401 Unauthorized):**
```json
{
 "error": "Unauthorized",
 "message": "Invalid or missing API key",
 "code": "INVALID_API_KEY"
}
```

---

## 2. Core Endpoints

### 2.1 GET /transactions

**Retrieve transactions with optional filters.**

**Endpoint:** `GET /v1/transactions`

**Headers:**
- `Authorization: Bearer {api_key}` (required)
- `Content-Type: application/json`

**Query Parameters:**
- `start_date` (string, optional): Filter >= date (YYYY-MM-DD)
- `end_date` (string, optional): Filter <= date (YYYY-MM-DD)
- `limit` (integer, optional): Max results (default: 100, max: 1000)
- `offset` (integer, optional): Pagination offset (default: 0)
- `payment_method` (string, optional): Filter by payment (Cash, Debit, Credit, E-Wallet, Other)
- `product_category` (string, optional): Filter by category
- `sort` (string, optional): Sort field and order (e.g., `date_asc`, `amount_desc`)

**Example Request:**
```http
GET /v1/transactions?start_date=2025-01-01&end_date=2025-01-31&limit=50&payment_method=Cash HTTP/1.1
Host: api.e1-dashboard.com
Authorization: Bearer e1_live_abc123...
```

**Success Response (200 OK):**
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
 "created_at": "2025-01-15T14:30:25Z",
 "updated_at": "2025-01-15T14:30:25Z"
 }
 ],
 "pagination": {
 "total": 1500,
 "limit": 50,
 "offset": 0,
 "has_more": true
 }
}
```

**Error Responses:**
- `400 Bad Request`: Invalid date format or parameters
- `401 Unauthorized`: Invalid API key
- `429 Too Many Requests`: Rate limit exceeded

---

### 2.2 GET /transactions/:id

**Retrieve single transaction by ID.**

**Endpoint:** `GET /v1/transactions/:id`

**Path Parameters:**
- `id` (string, required): Transaction ID (e.g., `txn_abc123`)

**Example Request:**
```http
GET /v1/transactions/txn_abc123 HTTP/1.1
Host: api.e1-dashboard.com
Authorization: Bearer e1_live_abc123...
```

**Success Response (200 OK):**
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
 "notes": null,
 "created_at": "2025-01-15T14:30:25Z",
 "updated_at": "2025-01-15T14:30:25Z"
 }
}
```

**Error Responses:**
- `404 Not Found`: Transaction ID does not exist
- `401 Unauthorized`: Invalid API key

---

### 2.3 GET /analytics/summary

**Retrieve summary analytics for a date range.**

**Endpoint:** `GET /v1/analytics/summary`

**Query Parameters:**
- `start_date` (string, required): Start date (YYYY-MM-DD)
- `end_date` (string, required): End date (YYYY-MM-DD)

**Example Request:**
```http
GET /v1/analytics/summary?start_date=2025-01-01&end_date=2025-01-31 HTTP/1.1
Host: api.e1-dashboard.com
Authorization: Bearer e1_live_abc123...
```

**Success Response (200 OK):**
```json
{
 "data": {
 "period": {
 "start_date": "2025-01-01",
 "end_date": "2025-01-31",
 "days": 31
 },
 "metrics": {
 "total_sales": 25000000,
 "transaction_count": 1500,
 "average_transaction_value": 16667,
 "median_transaction_value": 15000,
 "daily_average_sales": 806452,
 "top_product": {
 "name": "Nasi Goreng",
 "sales": 5000000,
 "count": 250,
 "percentage": 20.0
 },
 "payment_method_breakdown": {
 "Cash": { "amount": 10000000, "count": 600, "percentage": 40.0 },
 "E-Wallet": { "amount": 8000000, "count": 500, "percentage": 32.0 },
 "Debit": { "amount": 5000000, "count": 300, "percentage": 20.0 },
 "Credit": { "amount": 2000000, "count": 100, "percentage": 8.0 }
 },
 "hourly_distribution": {
 "peak_hour": "18:00-19:00",
 "peak_sales": 2500000,
 "slow_hour": "03:00-04:00",
 "slow_sales": 50000
 }
 }
 }
}
```

---

### 2.4 GET /products

**Retrieve product performance metrics.**

**Endpoint:** `GET /v1/products`

**Query Parameters:**
- `start_date` (string, required): Start date (YYYY-MM-DD)
- `end_date` (string, required): End date (YYYY-MM-DD)
- `limit` (integer, optional): Max results (default: 100)
- `sort` (string, optional): Sort order (`sales_desc`, `sales_asc`, `count_desc`, `name_asc`)

**Example Request:**
```http
GET /v1/products?start_date=2025-01-01&end_date=2025-01-31&sort=sales_desc&limit=10 HTTP/1.1
Host: api.e1-dashboard.com
Authorization: Bearer e1_live_abc123...
```

**Success Response (200 OK):**
```json
{
 "data": [
 {
 "product_name": "Nasi Goreng",
 "product_category": "Food",
 "total_sales": 5000000,
 "transaction_count": 250,
 "average_price": 20000,
 "percentage_of_total": 20.0
 },
 {
 "product_name": "Es Teh",
 "product_category": "Beverage",
 "total_sales": 2500000,
 "transaction_count": 500,
 "average_price": 5000,
 "percentage_of_total": 10.0
 }
 ],
 "pagination": {
 "total": 50,
 "limit": 10,
 "offset": 0
 }
}
```

---

### 2.5 GET /analytics/growth

**Retrieve growth metrics (day-over-day, week-over-week, month-over-month).**

**Endpoint:** `GET /v1/analytics/growth`

**Query Parameters:**
- `date` (string, required): Reference date (YYYY-MM-DD)
- `metrics` (array, optional): Specific metrics to return (default: all)

**Example Request:**
```http
GET /v1/analytics/growth?date=2025-01-31 HTTP/1.1
Host: api.e1-dashboard.com
Authorization: Bearer e1_live_abc123...
```

**Success Response (200 OK):**
```json
{
 "data": {
 "reference_date": "2025-01-31",
 "day_over_day": {
 "sales_change": 150000,
 "sales_change_percent": 5.5,
 "transaction_count_change": 10,
 "transaction_count_change_percent": 8.3
 },
 "week_over_week": {
 "sales_change": 500000,
 "sales_change_percent": 12.0,
 "transaction_count_change": 45,
 "transaction_count_change_percent": 10.5
 },
 "month_over_month": {
 "sales_change": 2000000,
 "sales_change_percent": 8.7,
 "transaction_count_change": 120,
 "transaction_count_change_percent": 9.2
 }
 }
}
```

---

### 2.6 GET /analytics/payment-methods

**Retrieve payment method breakdown.**

**Endpoint:** `GET /v1/analytics/payment-methods`

**Query Parameters:**
- `start_date` (string, required): Start date (YYYY-MM-DD)
- `end_date` (string, required): End date (YYYY-MM-DD)

**Success Response (200 OK):**
```json
{
 "data": {
 "payment_methods": [
 {
 "method": "Cash",
 "total_sales": 10000000,
 "transaction_count": 600,
 "percentage": 40.0,
 "average_transaction_value": 16667
 },
 {
 "method": "E-Wallet",
 "total_sales": 8000000,
 "transaction_count": 500,
 "percentage": 32.0,
 "average_transaction_value": 16000
 }
 ]
 }
}
```

---

## 3. User Account Endpoints

### 3.1 GET /user/profile

**Retrieve current user's profile.**

**Endpoint:** `GET /v1/user/profile`

**Success Response (200 OK):**
```json
{
 "data": {
 "id": "user-uuid-abc123",
 "email": "user@example.com",
 "business_name": "Warung Makan Sederhana",
 "business_type": "Restaurant",
 "subscription_tier": "Pro",
 "sync_enabled": true,
 "created_at": "2025-01-01T00:00:00Z"
 }
}
```

---

### 3.2 PATCH /user/settings

**Update user settings.**

**Endpoint:** `PATCH /v1/user/settings`

**Request Body:**
```json
{
 "sync_enabled": false,
 "notification_preferences": {
 "daily_summary_email": true,
 "low_sales_alert": true
 }
}
```

**Success Response (200 OK):**
```json
{
 "data": {
 "message": "Settings updated successfully"
 }
}
```

---

## 4. Export Endpoints

### 4.1 POST /export/transactions

**Export transactions to CSV/Excel.**

**Endpoint:** `POST /v1/export/transactions`

**Request Body:**
```json
{
 "start_date": "2025-01-01",
 "end_date": "2025-01-31",
 "format": "csv",
 "columns": ["transaction_date", "amount", "product_name", "payment_method"]
}
```

**Success Response (200 OK):**
```json
{
 "data": {
 "export_id": "exp_abc123",
 "status": "processing",
 "estimated_completion": "2025-01-31T15:05:00Z"
 }
}
```

### 4.2 GET /export/:id

**Retrieve export status/download link.**

**Endpoint:** `GET /v1/export/:id`

**Success Response (200 OK - Processing):**
```json
{
 "data": {
 "export_id": "exp_abc123",
 "status": "processing",
 "progress": 75
 }
}
```

**Success Response (200 OK - Complete):**
```json
{
 "data": {
 "export_id": "exp_abc123",
 "status": "completed",
 "download_url": "https://api.e1-dashboard.com/downloads/exp_abc123.csv",
 "expires_at": "2025-01-31T16:00:00Z"
 }
}
```

---

## 5. Rate Limiting

**Headers Returned:**
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1704070800
```

**Rate Limit Exceeded (429):**
```json
{
 "error": "Rate limit exceeded",
 "message": "You have exceeded 1,000 requests per hour. Try again in 15 minutes.",
 "code": "RATE_LIMIT_EXCEEDED",
 "retry_after": 900
}
```

---

## 6. Error Codes

| HTTP Status | Code | Description |
|-------------|------|-------------|
| 400 | `INVALID_PARAMETER` | Invalid query parameter or request body |
| 401 | `INVALID_API_KEY` | Invalid or missing API key |
| 403 | `FORBIDDEN` | Insufficient permissions (e.g., Free tier accessing API) |
| 404 | `NOT_FOUND` | Resource not found |
| 429 | `RATE_LIMIT_EXCEEDED` | Too many requests |
| 500 | `INTERNAL_ERROR` | Server error |

**Error Response Format:**
```json
{
 "error": "Error type",
 "message": "Human-readable error message",
 "code": "ERROR_CODE",
 "request_id": "req_abc123"
}
```

---

## 7. Pagination

**All list endpoints support pagination:**

**Query Parameters:**
- `limit` (integer): Results per page (default: 100, max: 1000)
- `offset` (integer): Number of results to skip (default: 0)

**Response:**
```json
{
 "data": [...],
 "pagination": {
 "total": 1500,
 "limit": 100,
 "offset": 0,
 "has_more": true
 }
}
```

**Next Page:**
```http
GET /v1/transactions?limit=100&offset=100
```

---

## 8. Webhooks (Future - Q4 2025)

See [[products/03-web-dashboard-lite/integrations/api-documentation|integrations/api-documentation.md]] Section 5 for webhook documentation.

---

**Document ID:** E1-API-REF-v1.0 (Future)
**Last Updated:** 2025-12-28
**Owner:** Technical Team

**Related Documents:**
- [[products/03-web-dashboard-lite/integrations/api-documentation|API Documentation]] - API overview and authentication
- [[products/shared-technical/security/security-architecture|Security Architecture]] - API security details

