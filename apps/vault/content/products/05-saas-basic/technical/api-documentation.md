# C1 Full SaaS - API Documentation

**Version:** v1.0
**Base URL:** `https://api.pwbi.co.id/v1`
**Auth:** OAuth 2.0 + API Key

---

## Authentication

```bash
curl -H "Authorization: Bearer {access_token}" \
 https://api.pwbi.co.id/v1/locations
```

**Get Access Token:**
```
POST /auth/token
{
 "client_id": "your_client_id",
 "client_secret": "your_secret",
 "grant_type": "client_credentials"
}
```

---

## Core Endpoints

### Locations
```
GET /locations - List all locations
GET /locations/{id} - Get location details
POST /locations - Create location
PUT /locations/{id} - Update location
```

### Sales
```
GET /sales/transactions - List transactions
GET /sales/summary - Sales summary (by period, location)
POST /sales/transactions - Create transaction
```

### Inventory
```
GET /inventory/items - List inventory items
GET /inventory/stock-levels - Current stock levels
POST /inventory/adjust - Adjust stock (receive, waste, etc.)
```

### Reports
```
GET /reports/pl - P&L report
GET /reports/cogs - COGS analysis
GET /reports/cash-flow - Cash flow statement
```

---

## Webhooks

**Subscribe to events:**
```
POST /webhooks
{
 "url": "https://your-app.com/webhook",
 "events": ["transaction.created", "inventory.low"]
}
```

**Events:**
- `transaction.created`
- `inventory.low`
- `alert.triggered`

---

## Rate Limits

- **Standard:** 1,000 requests/hour
- **Enterprise:** 10,000 requests/hour

---

## SDKs

- **Node.js:** `npm install @pwbi/sdk`
- **Python:** `pip install pwbi-sdk`
- **PHP:** `composer require pwbi/sdk`

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 1.0 | Initial API docs |

---

## Related

- **[[products/05-saas-basic/05-saas-basic|SaaS Basic Product]]** - Product overview
- **[[products/16-marketing-automator/technical/technical|Technical]]** - Parent technical directory
- **[[products/05-saas-basic/technical/technical-architecture|Technical Architecture]]** - System architecture
- **[[products/05-saas-basic/technical/deployment-guide|Deployment Guide]]** - Deployment procedures
- **[[products/05-saas-basic/integrations/integrations|Integrations]]** - Integration specifications
