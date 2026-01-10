# Beta 0.1 — "Cloud Connect"

> **Goal**: Access from anywhere

---

## Scope

### What's Added (from Alpha 1.0)
```
 Authentication (Trust-First)
 Private Mode (Skip Login) - DEFAULT
 User registration (email/password)
 "Secure Cloud Upgrade" (Opt-in)

 Cloud Storage
 Supabase PostgreSQL backend
 Data encryption at rest

 Sync (Manual Control)
 "Push to Secure Cloud" button
 Sync status: "Private" vs "Cloud Backed"
 Conflict detection

 Web Access
 Browser version
 Responsive design

 New Metrics
 Transaction count
 Average transaction value

 SAK EMKM Export (NEW - Research Priority)
 One-click financial report export
 SAK EMKM compliant format
 PDF + Excel output
 Bank loan ready

 Platform
 Auto-update system (Electron)
```

### Why SAK EMKM Export? (Bandung Research)

**Problem**: 90%+ Mikro businesses can't get bank loans because they lack SAK EMKM-compliant financial reports.

**Solution**: Auto-generate standardized financial reports from existing dashboard data.

**Impact**: Unlocks growth capital access → enables "Naik Kelas" (Mikro → Kecil transition).

```

---

## Technical Implementation

### New Files
```
 services/
 supabaseService.js # Supabase client
 authService.js # Auth logic
 syncService.js # Sync logic
 public/
 login.html # Login page
 register.html # Registration page
 config/
 supabase.js # Supabase config
```

### Supabase Setup
```javascript
// config/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
```

### Cloud Database Schema
```sql
-- Enable UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Accounts
CREATE TABLE accounts (
 id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 email VARCHAR(255) UNIQUE NOT NULL,
 created_at TIMESTAMP DEFAULT NOW()
);

-- Business profiles (1 per account for now)
CREATE TABLE business_profiles (
 id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 account_id UUID REFERENCES accounts(id),
 business_name VARCHAR(255) NOT NULL,
 business_type VARCHAR(50) DEFAULT 'restaurant',
 currency VARCHAR(3) DEFAULT 'IDR',
 language VARCHAR(5) DEFAULT 'id',
 created_at TIMESTAMP DEFAULT NOW()
);

-- All data tables get profile_id
ALTER TABLE revenue_data ADD COLUMN profile_id UUID;
ALTER TABLE pnl_items ADD COLUMN profile_id UUID;
ALTER TABLE menu_items ADD COLUMN profile_id UUID;
ALTER TABLE ops_heatmap ADD COLUMN profile_id UUID;

-- Row Level Security
ALTER TABLE revenue_data ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users see own data" ON revenue_data
 FOR ALL USING (profile_id IN (
 SELECT id FROM business_profiles WHERE account_id = auth.uid()
 ));
```

### Sync Logic
```javascript
// syncService.js
async function syncToCloud() {
 const pending = await getLocalPendingChanges();

 for (const change of pending) {
 await supabase
 .from(change.table)
 .upsert(change.data);

 await markAsSynced(change.id);
 }
}

async function syncFromCloud() {
 const lastSync = getLastSyncTimestamp();

 const { data } = await supabase
 .from('revenue_data')
 .select('*')
 .gt('updated_at', lastSync);

 await mergeToLocal(data);
}
```

---

## Success Criteria

- [ ] Registration creates account
- [ ] Login redirects to dashboard
- [ ] Logout clears session
- [ ] Password reset email sends
- [ ] Data syncs to cloud
- [ ] Data syncs from cloud
- [ ] Offline changes queue properly
- [ ] Web version loads in browser
- [ ] Auto-update works
- [ ] **SAK EMKM report exports correctly (PDF + Excel)**
- [ ] **SAK EMKM format validates against standard**

---

## Timeline

**Target: 3 weeks**

| Task | Days |
|------|------|
| Supabase setup | 2 |
| Auth UI | 3 |
| Auth logic | 2 |
| Cloud schema | 2 |
| Sync service | 4 |
| Web deployment | 2 |
| Auto-update | 2 |
| Testing | 4 |

---

## Related

- **[[products/05-saas-basic/05-saas-basic|SaaS Basic Product]]** - Product overview
- **[[products/16-marketing-automator/specifications/specifications|Specifications]]** - Parent specifications directory
- **[[products/05-saas-basic/specifications/versions/BETA_0.2|Beta 0.2]]** - Next version
- **[[products/03-web-dashboard-lite/specifications/versions/ALPHA_1.0|Alpha 1.0]]** - Previous baseline version
- **[[products/05-saas-basic/technical/technical-architecture|Technical Architecture]]** - System architecture
