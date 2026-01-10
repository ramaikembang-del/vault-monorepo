# A4a Inventory Optimizer - Technical Specifications

**Product:** A4a - Inventory Optimizer
**Version:** 1.0
**Platform:** Mobile-First (iOS, Android, Web)
**Last Updated:** December 2025

---

## System Architecture

```

 Client Layer

 iOS App Android Web App
 (React (React (React)
 Native) Native)






 API Gateway (Node.js)
 (REST + GraphQL)





 ML Business
 Service Logic
 (Python) (Node.js)





 Data Layer

 PostgreSQL Redis Cache
 (Primary)


```

---

## Technology Stack

### Frontend

**Mobile Apps (iOS + Android):**
- Framework: React Native 0.72+
- State Management: Redux Toolkit
- UI Components: React Native Paper (Material Design)
- Navigation: React Navigation 6
- Offline: Redux Persist + AsyncStorage
- Barcode: react-native-camera
- Charts: react-native-chart-kit
- Push Notifications: Firebase Cloud Messaging

**Web App:**
- Framework: React 18
- State Management: Redux Toolkit
- UI: Material-UI (MUI) v5
- Charts: Recharts
- PWA: Workbox (offline support)

### Backend

**API Server:**
- Runtime: Node.js 18 LTS
- Framework: Express.js 4.18
- GraphQL: Apollo Server
- Auth: Passport.js (JWT)
- Rate Limiting: express-rate-limit
- Logging: Winston + Morgan

**ML Service:**
- Language: Python 3.10
- Framework: FastAPI
- ML Library: scikit-learn, TensorFlow
- Forecasting: statsmodels (ARIMA, SARIMA)
- Deployment: Docker containers

### Data Layer

**Primary Database:**
- Database: PostgreSQL 15
- ORM: Sequelize (Node.js)
- Connection Pooling: pg-pool
- Migrations: Sequelize CLI

**Cache:**
- Redis 7.0 (ElastiCache)
- Use cases: Session storage, API caching, job queue

**Message Queue:**
- RabbitMQ
- Use: Async tasks (notifications, reports, ML jobs)

### Infrastructure

**Cloud Provider:** AWS

**Services:**
- Compute: EC2 (API), Lambda (serverless functions)
- Database: RDS PostgreSQL (Multi-AZ)
- Cache: ElastiCache (Redis)
- Storage: S3 (file uploads, exports)
- CDN: CloudFront
- Monitoring: CloudWatch
- Secrets: AWS Secrets Manager

**DevOps:**
- CI/CD: GitHub Actions
- Containers: Docker + Docker Compose
- Orchestration: AWS ECS (Fargate)
- IaC: Terraform

---

## Core Features & Implementation

### 1. Smart Reorder Alert System

**Algorithm: Time-Series Forecasting**

**Input Data:**
- Historical sales (past 3-12 months)
- Seasonality indicators (day of week, holidays)
- Current stock level
- Supplier lead time

**Model: SARIMA (Seasonal ARIMA)**
```python
from statsmodels.tsa.statespace.sarimax import SARIMAX

# Train model
model = SARIMAX(
 sales_data,
 order=(1, 1, 1), # ARIMA(p,d,q)
 seasonal_order=(1,1,1,7) # Seasonal(P,D,Q,s) - weekly seasonality
)
results = model.fit()

# Forecast next 30 days
forecast = results.forecast(steps=30)

# Calculate stock-out date
days_until_stockout = calculate_stockout_date(
 current_stock,
 forecast
)

# Trigger alert if within lead_time + buffer
if days_until_stockout <= (lead_time + safety_buffer):
 send_alert()
```

**Accuracy:** ±10% (MAPE - Mean Absolute Percentage Error)

**Fallback:** If insufficient data (< 3 months), use simple moving average

### 2. Optimal Order Quantity Calculator

**Algorithm: Economic Order Quantity (EOQ) with Constraints**

```javascript
function calculateOptimalOrder({
 forecastDemand, // Next 30 days forecast
 unitCost,
 holdingCost, // Storage cost per unit per day
 orderingCost, // Fixed cost per order
 minOrderQty, // Supplier minimum
 maxStorage, // Space limit
 shelfLife, // Expiry constraint
 priceBreaks // Volume discounts
}) {
 // Classic EOQ formula
 const eoq = Math.sqrt(
 (2 * forecastDemand * orderingCost) / holdingCost
 );

 // Apply constraints
 let optimalQty = eoq;

 // Constraint 1: Minimum order quantity
 optimalQty = Math.max(optimalQty, minOrderQty);

 // Constraint 2: Storage capacity
 optimalQty = Math.min(optimalQty, maxStorage);

 // Constraint 3: Shelf life (don't order more than you can use)
 const maxUsableQty = forecastDemand * (shelfLife / 30);
 optimalQty = Math.min(optimalQty, maxUsableQty);

 // Constraint 4: Price breaks (optimize for volume discounts)
 optimalQty = optimizeForPriceBreaks(optimalQty, priceBreaks);

 return Math.ceil(optimalQty);
}
```

### 3. Waste Prediction

**Features:**
- FIFO tracking (prevent old stock from expiring)
- Shelf life countdown
- Slow-moving item identification
- Optimal use-by date alerts

**Implementation:**
```sql
-- Inventory aging query
SELECT
 item_id,
 item_name,
 sum(quantity) as total_qty,
 min(receive_date) as oldest_batch,
 datediff(now(), min(receive_date)) as age_days,
 shelf_life_days,
 (shelf_life_days - datediff(now(), min(receive_date))) as days_until_expiry
FROM inventory_batches
WHERE status = 'active'
GROUP BY item_id
HAVING days_until_expiry < 7 -- Expiring within 7 days
ORDER BY days_until_expiry ASC;
```

**Alert Triggers:**
- 7 days before expiry: Info notification
- 3 days before: Warning notification
- 1 day before: Urgent notification

### 4. POS Integration Layer

**Supported POS Systems:**
- Moka (REST API)
- Olsera (REST API)
- Pawoon (REST API + Webhook)
- Qasir (REST API)
- Generic (CSV import)

**Integration Pattern:**
```javascript
class POSIntegration {
 constructor(posType, credentials) {
 this.adapter = POSAdapterFactory.create(posType);
 this.credentials = credentials;
 }

 async syncSalesData(fromDate, toDate) {
 // Fetch from POS
 const transactions = await this.adapter.fetchTransactions(
 this.credentials,
 fromDate,
 toDate
 );

 // Transform to standard format
 const normalized = transactions.map(this.normalizeTransaction);

 // Store in our DB
 await InventoryTransaction.bulkCreate(normalized);

 // Trigger ML re-training if significant new data
 if (normalized.length > 100) {
 queueMLRetraining(this.userId);
 }
 }
}
```

**Webhook Support (for real-time updates):**
- Listen for POS transaction events
- Update stock levels in real-time
- Trigger alerts immediately if stock-out imminent

---

## Data Models

### Core Entities

**Item:**
```javascript
{
 id: UUID,
 userId: UUID,
 name: String,
 category: String,
 unit: Enum('kg', 'L', 'pcs'),
 currentStock: Decimal,
 reorderPoint: Decimal,
 minOrderQty: Decimal,
 shelfLifeDays: Integer,
 unitCost: Decimal,
 supplierId: UUID,
 leadTimeDays: Integer,
 storageLocation: String,
 barcode: String,
 createdAt: Timestamp,
 updatedAt: Timestamp
}
```

**Transaction:**
```javascript
{
 id: UUID,
 itemId: UUID,
 type: Enum('sale', 'receive', 'waste', 'adjust'),
 quantity: Decimal,
 date: Timestamp,
 reference: String, // PO #, POS transaction ID
 notes: String,
 userId: UUID
}
```

**Alert:**
```javascript
{
 id: UUID,
 itemId: UUID,
 alertType: Enum('reorder', 'stockout', 'expiring', 'waste'),
 severity: Enum('info', 'warning', 'urgent'),
 message: String,
 recommendedAction: String,
 recommendedQty: Decimal,
 status: Enum('pending', 'actioned', 'dismissed'),
 createdAt: Timestamp
}
```

**Supplier:**
```javascript
{
 id: UUID,
 name: String,
 contact: String,
 phone: String,
 whatsapp: String,
 leadTimeDays: Integer,
 deliveryFee: Decimal,
 minOrderValue: Decimal,
 rating: Decimal, // 1-5
 onTimeRate: Decimal, // %
 createdAt: Timestamp
}
```

---

## API Endpoints

### Authentication
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh-token
POST /api/auth/logout
```

### Items
```
GET /api/items # List all items
GET /api/items/:id # Get item details
POST /api/items # Create item
PUT /api/items/:id # Update item
DELETE /api/items/:id # Delete item
POST /api/items/bulk-import # CSV upload
```

### Transactions
```
GET /api/transactions # List transactions
POST /api/transactions/receive # Receive stock
POST /api/transactions/adjust # Adjust stock (waste, use)
GET /api/transactions/summary # Aggregated stats
```

### Alerts
```
GET /api/alerts # List active alerts
POST /api/alerts/:id/action # Action an alert (order, snooze, dismiss)
POST /api/alerts/:id/override # Override recommendation
```

### Forecasts
```
GET /api/forecasts/:itemId # Get forecast for item
POST /api/forecasts/retrain # Trigger ML retraining
```

### Reports
```
GET /api/reports/waste # Waste report
GET /api/reports/savings # Savings calculator
GET /api/reports/stock-movement # Stock movement
POST /api/reports/export/:type # Export to Excel/PDF
```

### Integrations
```
POST /api/integrations/pos/connect # Connect POS
POST /api/integrations/pos/sync # Manual sync
GET /api/integrations/pos/status # Check sync status
```

---

## Security

### Authentication & Authorization
- JWT tokens (access + refresh)
- Access token: 15 min expiry
- Refresh token: 30 days expiry
- RBAC: Owner, Manager, Staff roles

### Data Encryption
- At rest: AES-256 (database + S3)
- In transit: TLS 1.3
- PII fields: Additional column-level encryption

### API Security
- Rate limiting: 100 req/min per user
- CORS: Whitelist allowed origins
- Input validation: Joi schemas
- SQL injection prevention: Parameterized queries
- XSS prevention: Output escaping

### Compliance
- GDPR-ready (data export, deletion)
- Indonesian data residency (AWS ap-southeast-1)

---

## Performance

### Optimization Strategies

**Database:**
- Indexes on frequently queried fields
- Materialized views for reports
- Connection pooling (max 20 connections)
- Read replicas for analytics queries

**API:**
- Response caching (Redis, 5 min TTL)
- Pagination (max 100 items per page)
- Field selection (GraphQL benefits)
- Compression (gzip)

**Mobile:**
- Offline-first architecture
- Local SQLite cache
- Delta sync (only changed data)
- Image optimization (WebP, lazy loading)

### Targets

| Metric | Target |
|--------|--------|
| API response time (p95) | < 200ms |
| Mobile app startup | < 2s |
| ML forecast generation | < 5s |
| POS sync (1000 transactions) | < 30s |
| Uptime | 99.5% |

---

## Monitoring & Logging

**Application Monitoring:**
- Error tracking: Sentry
- Performance: New Relic
- Logs: CloudWatch Logs
- Metrics: Prometheus + Grafana

**Alerts:**
- API errors > 1%: PagerDuty
- Response time > 500ms (p95): Slack alert
- ML service down: Immediate page
- Database connection issues: Auto-scale trigger

**User Analytics:**
- Mixpanel: User behavior tracking
- Google Analytics: Web traffic
- Firebase Analytics: Mobile events

---

## Scalability

**Current Capacity:**
- 10,000 concurrent users
- 1M transactions/day
- 100K items tracked

**Scaling Strategy:**
- Horizontal: Add API servers (auto-scaling)
- Database: Read replicas, sharding (future)
- ML: GPU instances for training, CPU for inference
- Queue: Multi-worker RabbitMQ cluster

---

## Disaster Recovery

**Backup Strategy:**
- Database: Automated daily backups (30-day retention)
- Point-in-time recovery: 5-minute granularity
- Cross-region replication: ap-southeast-2 (Sydney)

**RTO/RPO:**
- RTO (Recovery Time Objective): 4 hours
- RPO (Recovery Point Objective): 5 minutes

---

## Development

### Local Setup
```bash
# Clone repo
git clone https://github.com/pwbi/a4a

# Install dependencies
npm install
cd ml-service && pip install -r requirements.txt

# Setup database
docker-compose up -d postgres redis
npm run db:migrate

# Run dev servers
npm run dev:api # API on localhost:3000
npm run dev:ml # ML service on localhost:8000
npm run dev:web # Web on localhost:3001
npm run dev:mobile # Mobile (Expo)
```

### Testing
```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# E2E tests (mobile)
npm run test:e2e:ios
npm run test:e2e:android
```

### Deployment
```bash
# Build
npm run build

# Deploy
npm run deploy:staging # Staging environment
npm run deploy:prod # Production (requires approval)
```

---

## Third-Party Dependencies

**Critical:**
- AWS SDK (S3, RDS, SES)
- PostgreSQL client
- Redis client
- Firebase SDK (push notifications)
- Stripe SDK (payments)

**ML:**
- TensorFlow
- scikit-learn
- statsmodels
- pandas, numpy

**Monitoring:**
- Sentry
- Mixpanel
- Google Analytics

---

## API Rate Limits

| Tier | Requests/min | Requests/day |
|------|--------------|--------------|
| Free Trial | 60 | 1,000 |
| Paid | 100 | 10,000 |
| Premium | 500 | 50,000 |

---

## Revision History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-12 | 2.0 | Comprehensive technical specs | Engineering Team |
| 2025-12 | 1.0 | Initial specs | Engineering Team |

---

**For Developer Docs:** See [https://docs.pwbi.co.id/a4a](https://docs.pwbi.co.id/a4a)

---

## Related

- **[[products/07-inventory-optimizer/07-inventory-optimizer|Inventory Optimizer Product]]** - Product overview
- **[[products/07-inventory-optimizer/technical/technical|Technical]]** - Technical directory
- **[[products/07-inventory-optimizer/specifications/specifications|Specifications]]** - Product specifications
- **[[products/07-inventory-optimizer/faq-troubleshooting|FAQ & Troubleshooting]]** - POS integration and technical issues
- **[[products/05-saas-basic/technical/technical-architecture|SaaS Architecture]]** - Comparison to SaaS technical architecture
