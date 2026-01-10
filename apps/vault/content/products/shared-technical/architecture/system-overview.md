# System Architecture Overview
**Technical Infrastructure & Design**

**Owner:** Engineering Team  
**Status:** ACTIVE (Evolving)

---

## High-Level Architecture

### Phase 1 (Sprint 1-2): Template-Only
```
Customer PC
  ├─ Power BI Desktop (local)
  ├─ Excel (data source)
  └─ Template file (.pbit)

No backend, no servers (pure offline)
```

### Phase 2 (Sprint 3-4): Hybrid (Template + Cloud)
```
Customer PC → Supabase (cloud storage)
  ├─ Template users: Optional cloud backup
  ├─ SaaS users: Required cloud database
  └─ Lite users: Offline-first, sync optional
```

### Phase 3 (Year 2): Full SaaS Platform
```
Frontend (React/Next.js)
  ↓
Backend API (Node.js or Python)
  ↓
Database (PostgreSQL via Supabase)
  ↓
Integrations (POS APIs, Accounting APIs)
```

---

## Technology Stack

### Frontend
- **Template:** Power BI Desktop (customer-side)
- **Lite:** Electron app (offline-first)
- **SaaS:** React or Next.js web app

### Backend
- **Database:** PostgreSQL (via Supabase)
- **API:** REST or GraphQL
- **Auth:** Supabase Auth or Firebase Auth
- **File Storage:** Supabase Storage or AWS S3

### Infrastructure
- **Hosting:** Vercel (frontend) + Supabase (backend)
- **DNS:** Cloudflare
- **Monitoring:** Sentry (errors), Mixpanel (analytics)

---

## Data Flow

### Template (Product 01)
1. Customer exports POS data → Excel
2. Customer uploads Excel → Power BI Template
3. Power BI processes locally → Dashboard

**No server-side data** (100% local)

### SaaS (Product 05)
1. Customer connects POS API → Our backend
2. Backend fetches transactions → PostgreSQL
3. Frontend fetches from API → Renders dashboard

**All data in cloud** (real-time sync)

---

## Security

**Data Encryption:**
- Transit: TLS 1.3
- Rest: AES-256

**Authentication:**
- Email/password (Supabase Auth)
- MFA optional (for Enterprise)

**Authorization:**
- Row-level security (PostgreSQL RLS)
- API rate limiting (prevent abuse)

---

## Scalability

**Phase 1 (100 customers):**
- No scaling needed (offline templates)

**Phase 2 (500 customers):**
- Supabase free tier sufficient

**Phase 3 (5,000+ customers):**
- Upgrade to Supabase Pro
- CDN for static assets (Cloudflare)
- Database read replicas (if needed)

---

## Disaster Recovery

**Backups:**
- Daily automated (Supabase built-in)
- 30-day retention

**RTO/RPO:**
- RTO: 4 hours (recovery time)
- RPO: 6 hours (data loss max)

---

**Status:** ACTIVE  
**Last Updated:** January 2026  
**Next Review:** After Sprint 3 (SaaS launch)
