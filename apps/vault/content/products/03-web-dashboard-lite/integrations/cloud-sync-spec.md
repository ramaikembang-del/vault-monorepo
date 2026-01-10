# Cloud Sync Specification - E1 Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Last Updated:** 2025-12-28
**Version:** 1.0
**Status:** Technical Specification

---

## 1. Overview

### 1.1 Cloud Sync Architecture

**E1 Sync Model: Offline-First with Optional Cloud Backup**

```
|-----------------------------------------------------+
| E1 Electron App |
| |
| |--------------+ |--------------------+ |
| | SQLite DB |◄--------| Sync Engine | |
| | (Primary) |--------►| (Background) | |
| |--------------- |----------+---------- |
| | |
|----------------------------------------+--------------
 |
 | Internet
 | (Optional)
 v
 |-------------------------+
 | Supabase Cloud |
 | |
 | |------------------+ |
 | | PostgreSQL DB | |
 | | (Backup/Sync) | |
 | |------------------- |
 | |
 | Jakarta Region |
 | (Indonesia compliance) |
 |--------------------------
```

**Key Principles:**
1. **Local-First:** SQLite is the source of truth, app works 100% offline
2. **Optional Sync:** Cloud sync is opt-in (disabled by default on Free tier, optional for Starter/Pro)
3. **Background Sync:** Syncs in background, never blocks UI
4. **Conflict Resolution:** Last-write-wins (simple, no complex merge logic)
5. **Incremental Sync:** Only sync changes since last sync (delta sync)

### 1.2 Sync Modes by Tier

| Tier | Cloud Sync Available | Default | Storage Location | Sync Frequency |
|------|---------------------|---------|------------------|----------------|
| **Free** | [x] No | Local only | SQLite (local) | N/A |
| **Starter** | [x] Yes (optional) | Disabled (user enables) | Local + Cloud (optional) | Every 5 minutes (if enabled) |
| **Pro** | [x] Yes (optional) | Enabled by default | Local + Cloud | Every 1 minute |

**Why Optional (Not Mandatory)?**
- **User control:** Some users prefer 100% local data (privacy concerns)
- **Bandwidth:** Users with expensive/slow internet can disable sync
- **Offline-first:** E1 works perfectly without cloud (cloud is a bonus, not a requirement)

---

## 2. Supabase Configuration

### 2.1 Project Setup

**Supabase Instance:**
- **Project Name:** e1-web-dashboard-lite-prod
- **Region:** Southeast Asia (Jakarta) - `ap-southeast-1`
- **Plan:** Pro ($25/month for production, Starter for development)
- **Database:** PostgreSQL 15
- **Storage:** 8 GB (scalable to 500 GB)

**Why Supabase?**
1. **Indonesia data residency:** Jakarta region = Indonesia PDP Law 2022 compliant
2. **PostgreSQL:** Robust, ACID-compliant, supports complex queries
3. **Real-time subscriptions:** Future feature (multi-device live sync)
4. **Row-level security (RLS):** User data isolated per account
5. **Cost-effective:** $25/month for 100GB bandwidth, 500k row reads

### 2.2 Database Schema (Supabase PostgreSQL)

**Core Tables:**

```sql
-- users table (managed by Supabase Auth)
CREATE TABLE auth.users (
 id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 email VARCHAR(255) UNIQUE NOT NULL,
 created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- user_profiles table (extended user info)
CREATE TABLE public.user_profiles (
 id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
 business_name VARCHAR(255),
 business_type VARCHAR(100),
 phone VARCHAR(50),
 subscription_tier VARCHAR(20) DEFAULT 'Free', -- Free, Starter, Pro
 sync_enabled BOOLEAN DEFAULT FALSE,
 created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- transactions table (synced from SQLite)
CREATE TABLE public.transactions (
 id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 transaction_date DATE NOT NULL,
 transaction_time TIME NOT NULL,
 amount INTEGER NOT NULL, -- Rupiah (no decimals)
 product_name VARCHAR(255),
 product_category VARCHAR(100),
 payment_method VARCHAR(50),
 cashier_id VARCHAR(100),
 location VARCHAR(100), -- For multi-outlet (Pro tier)
 created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 synced_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

 -- Indexes for performance
 INDEX idx_user_date (user_id, transaction_date),
 INDEX idx_user_created (user_id, created_at)
);

-- sync_log table (track sync operations)
CREATE TABLE public.sync_log (
 id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 sync_type VARCHAR(20) NOT NULL, -- 'push', 'pull', 'conflict'
 records_synced INTEGER DEFAULT 0,
 errors TEXT,
 started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 completed_at TIMESTAMP WITH TIME ZONE,
 status VARCHAR(20) DEFAULT 'in_progress' -- 'in_progress', 'completed', 'failed'
);
```

### 2.3 Row-Level Security (RLS)

**Enable RLS on all tables:**
```sql
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sync_log ENABLE ROW LEVEL SECURITY;
```

**Security Policies:**
```sql
-- Users can only read/write their own data
CREATE POLICY user_profiles_policy ON public.user_profiles
 FOR ALL
 USING (auth.uid() = id);

CREATE POLICY transactions_policy ON public.transactions
 FOR ALL
 USING (auth.uid() = user_id);

CREATE POLICY sync_log_policy ON public.sync_log
 FOR ALL
 USING (auth.uid() = user_id);
```

**Result:** User A cannot see User B's transactions (enforced at database level).

---

## 3. Sync Engine Architecture

### 3.1 Sync Flow Overview

**Push Sync (Local  ->  Cloud):**
```
|----------------------+
| SQLite (Local) |
| - New transactions |
| - Modified records |
|----------+------------
 |
 | (1) Identify changes (delta)
 |
 v
 |--------------+
 | Sync Engine |
 |------+--------
 |
 | (2) Batch upload (1000 rows)
 |
 v
|--------------------------+
| Supabase API |
| - Validate & insert |
| - Update synced_at |
|----------+----------------
 |
 | (3) Store in cloud
 |
 v
 |--------------+
 | PostgreSQL |
 | (Cloud DB) |
 |---------------
```

**Pull Sync (Cloud  ->  Local):**
```
|----------------------+
| PostgreSQL (Cloud) |
| - Newer records |
|----------+------------
 |
 | (1) Query changes (since last sync)
 |
 v
 |--------------+
 | Sync Engine |
 |------+--------
 |
 | (2) Download batch
 |
 v
|--------------------------+
| SQLite (Local) |
| - Merge or overwrite |
| - Update last_sync_time |
|---------------------------
```

### 3.2 Delta Sync Algorithm

**Track Changes (SQLite Trigger):**
```sql
-- Add sync tracking columns to local SQLite
ALTER TABLE transactions ADD COLUMN synced_to_cloud BOOLEAN DEFAULT 0;
ALTER TABLE transactions ADD COLUMN last_modified_at INTEGER DEFAULT (strftime('%s', 'now'));

-- Trigger: Update last_modified_at on every change
CREATE TRIGGER update_last_modified
AFTER UPDATE ON transactions
FOR EACH ROW
BEGIN
 UPDATE transactions
 SET last_modified_at = strftime('%s', 'now'),
 synced_to_cloud = 0 -- Mark as not synced
 WHERE id = NEW.id;
END;
```

**Identify Changes (Sync Engine):**
```javascript
async function getUnsynced Transactions() {
 // Get all transactions not yet synced to cloud
 const query = `
 SELECT * FROM transactions
 WHERE synced_to_cloud = 0
 ORDER BY last_modified_at ASC
 LIMIT 1000; -- Batch size
 `;

 const unsynced = await db.all(query);
 return unsynced;
}
```

**Mark as Synced:**
```javascript
async function markAsSynced(transactionIds) {
 const placeholders = transactionIds.map(() => '?').join(',');
 const query = `
 UPDATE transactions
 SET synced_to_cloud = 1
 WHERE id IN (${placeholders});
 `;

 await db.run(query, transactionIds);
}
```

### 3.3 Batch Sync (Performance Optimization)

**Why Batching?**
- Supabase API has rate limits (1,000 requests/hour free tier, 10,000/hour Pro)
- Uploading 10,000 transactions one-by-one = 10,000 API calls (slow, may hit rate limit)
- Uploading in batches of 1,000 = 10 API calls (fast, efficient)

**Batch Upload Logic:**
```javascript
async function pushToCloud(unsyncedTransactions) {
 const BATCH_SIZE = 1000;
 const batches = [];

 // Split into batches
 for (let i = 0; i < unsyncedTransactions.length; i += BATCH_SIZE) {
 batches.push(unsyncedTransactions.slice(i, i + BATCH_SIZE));
 }

 // Upload each batch
 for (const batch of batches) {
 try {
 const { data, error } = await supabase
 .from('transactions')
 .insert(batch.map(tx => ({
 user_id: currentUserId,
 transaction_date: tx.transaction_date,
 transaction_time: tx.transaction_time,
 amount: tx.amount,
 product_name: tx.product_name,
 product_category: tx.product_category,
 payment_method: tx.payment_method,
 cashier_id: tx.cashier_id
 })));

 if (error) throw error;

 // Mark batch as synced locally
 await markAsSynced(batch.map(tx => tx.id));

 console.log(`Synced ${batch.length} transactions to cloud`);
 } catch (err) {
 console.error('Sync error:', err);
 // Log error but continue with next batch
 await logSyncError(batch, err);
 }
 }
}
```

### 3.4 Conflict Resolution

**Conflict Scenario:**
- User edits transaction on Device A (updates amount)
- Before sync, user edits same transaction on Device B (updates product name)
- Both devices sync to cloud  ->  Conflict!

**Resolution Strategy: Last-Write-Wins**
```javascript
async function resolveConflict(localRecord, cloudRecord) {
 // Compare timestamps
 if (localRecord.last_modified_at > cloudRecord.updated_at.getTime() / 1000) {
 // Local is newer, push to cloud (overwrite cloud)
 return 'push';
 } else {
 // Cloud is newer, pull from cloud (overwrite local)
 return 'pull';
 }
}
```

**Why Last-Write-Wins (Not 3-Way Merge)?**
- **Simplicity:** No complex merge logic (less bugs)
- **E1 use case:** Transactions rarely edited after creation (mostly inserts)
- **User expectation:** "Latest change wins" is intuitive

**Future Enhancement (Pro Tier):**
- Conflict log: Show user conflicts, let them manually resolve
- Field-level merge: Merge non-conflicting fields (amount from Device A, product from Device B)

---

## 4. Sync Triggers and Frequency

### 4.1 Automatic Sync Triggers

**Starter Tier (Every 5 Minutes):**
```javascript
// Start sync interval when sync enabled
if (userTier === 'Starter' && syncEnabled) {
 setInterval(async () => {
 await syncToCloud();
 }, 5 * 60 * 1000); // 5 minutes
}
```

**Pro Tier (Every 1 Minute):**
```javascript
if (userTier === 'Pro' && syncEnabled) {
 setInterval(async () => {
 await syncToCloud();
 }, 60 * 1000); // 1 minute
}
```

**On-Demand Sync:**
```javascript
// User clicks "Sync Now" button
document.getElementById('syncButton').addEventListener('click', async () => {
 showSyncProgress('Syncing to cloud...');
 await syncToCloud();
 hideSyncProgress('Sync complete!');
});
```

### 4.2 Smart Sync (Battery and Bandwidth Aware)

**Conditions for Sync:**
```javascript
async function shouldSync() {
 // 1. User must be online
 if (!navigator.onLine) return false;

 // 2. Battery must be >20% (don't drain battery)
 if (navigator.getBattery) {
 const battery = await navigator.getBattery();
 if (!battery.charging && battery.level < 0.2) return false;
 }

 // 3. Not on metered connection (mobile hotspot)
 if (navigator.connection && navigator.connection.saveData) return false;

 // 4. Unsync changes exist
 const unsynced = await getUnsyncedTransactions();
 if (unsynced.length === 0) return false;

 return true;
}
```

**User Notification:**
```
|--------------------------------------------+
| Sync Paused (wait)¸ |
|--------------------------------------------|
| Cloud sync paused to save battery. |
| Charging device or connect to Wi-Fi to |
| resume. |
| |
| [Sync Anyway] [OK] |
|---------------------------------------------
```

### 4.3 Background Sync (Even When App Closed)

**Electron Background Service:**
```javascript
// Keep Electron app running in system tray (Windows/Mac)
app.on('window-all-closed', () => {
 if (process.platform !== 'darwin') {
 // Don't quit app, minimize to tray
 app.hide();
 }
});

// Sync in background every 5 minutes (Starter) or 1 minute (Pro)
setInterval(async () => {
 if (syncEnabled && navigator.onLine) {
 await syncToCloud();
 }
}, syncIntervalMs);
```

**User Setting:**
```
Settings  ->  Privacy  ->  Cloud Sync

[x] Enable cloud sync
[x] Sync in background (even when app closed)
[ ] Sync only on Wi-Fi (disable on mobile hotspot)
```

---

## 5. Sync Status and UI

### 5.1 Sync Indicator

**Status Bar (Bottom Right):**
```
|--------------------------------------+
| E1 Dashboard |
| |
| [Sales] [Products] [Reports] |
| |
| -----------------------------------|
| Last synced: 2 minutes ago [x] |  -> Sync status
|---------------------------------------
```

**Sync States:**
- [x] **Synced:** "Last synced: 2 minutes ago" (green)
- **Syncing:** "Syncing... 50%" (blue, animated)
- [!] **Pending:** "150 changes not synced" (yellow)
- [x] **Error:** "Sync failed (no internet)" (red)
- (wait)¸ **Paused:** "Sync paused (battery saving)" (gray)
- **Disabled:** "Cloud sync disabled" (gray, clickable to enable)

### 5.2 Sync Progress UI

**During Sync:**
```
|--------------------------------------------+
| Syncing to cloud... |
|--------------------------------------------|
| |
| -–ˆ-–ˆ-–ˆ-–ˆ-–ˆ-–ˆ-–ˆ-–ˆ-------- 75% |
| |
| Uploading: 750/1,000 transactions |
| Estimated time: 10 seconds |
| |
|---------------------------------------------
```

**Sync Complete:**
```
|--------------------------------------------+
| Sync Complete! [x] |
|--------------------------------------------|
| Synced 1,000 transactions to cloud. |
| Your data is backed up and accessible |
| from any device. |
| |
| [OK] |
|---------------------------------------------
```

### 5.3 Sync History Log

**Settings  ->  Cloud Sync  ->  Sync History:**
```
|---------------------------------------------------------+
| Sync History |
|---------------------------------------------------------|
| Date/Time Status Records Duration |
| 2025-01-15 14:30 [x] Success 1,000 12s |
| 2025-01-15 14:25 [x] Success 500 6s |
| 2025-01-15 14:20 [x] Failed 0 - |
| Error: No internet connection |
| 2025-01-15 14:15 [x] Success 250 3s |
| |
| [Clear History] [Export Log] |
|----------------------------------------------------------
```

---

## 6. Data Retention and Cleanup

### 6.1 Cloud Data Retention by Tier

| Tier | Data Retention (Active) | Post-Cancellation | Permanent Deletion |
|------|------------------------|-------------------|-------------------|
| **Free** | N/A (no cloud sync) | N/A | N/A |
| **Starter** | 30 days | 90 days | Day 91 |
| **Pro** | 90 days | 90 days | Day 91 |

**Auto-Delete Logic (Supabase Cron Job):**
```sql
-- Run daily at 2 AM WIB
SELECT cron.schedule(
 'delete-old-transactions',
 '0 2 * * *', -- Daily at 2 AM
 $$
 -- Delete transactions older than retention period
 DELETE FROM public.transactions
 WHERE user_id IN (
 SELECT id FROM public.user_profiles
 WHERE subscription_tier = 'Starter'
 )
 AND transaction_date < CURRENT_DATE - INTERVAL '30 days';

 DELETE FROM public.transactions
 WHERE user_id IN (
 SELECT id FROM public.user_profiles
 WHERE subscription_tier = 'Pro'
 )
 AND transaction_date < CURRENT_DATE - INTERVAL '90 days';
 $$
);
```

### 6.2 User Downgrade Cleanup

**Scenario: User downgrades from Pro to Starter**
- Pro: 90-day retention  ->  Starter: 30-day retention
- Cloud data >30 days must be deleted

**Cleanup on Downgrade:**
```javascript
async function handleDowngrade(userId, oldTier, newTier) {
 if (oldTier === 'Pro' && newTier === 'Starter') {
 // Delete data older than 30 days (Starter limit)
 const cutoffDate = new Date();
 cutoffDate.setDate(cutoffDate.getDate() - 30);

 await supabase
 .from('transactions')
 .delete()
 .eq('user_id', userId)
 .lt('transaction_date', cutoffDate.toISOString());

 console.log(`Deleted Pro data older than 30 days for user ${userId}`);
 }

 if ((oldTier === 'Starter' || oldTier === 'Pro') && newTier === 'Free') {
 // User downgrades to Free, retain cloud data for 90 days (grace period)
 // Schedule permanent deletion 90 days from now
 await supabase
 .from('user_profiles')
 .update({ deletion_scheduled_at: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000) })
 .eq('id', userId);
 }
}
```

---

## 7. Security and Privacy

### 7.1 Encryption

**In Transit:**
- TLS 1.3 (HTTPS) for all Supabase API calls
- Certificate pinning (prevent man-in-the-middle attacks)

**At Rest (Cloud):**
- AES-256 encryption for PostgreSQL database (Supabase default)
- Encryption key managed by Supabase (customer has no direct access)

**At Rest (Local):**
- SQLite database encrypted with SQLCipher (optional, user-enabled)
- Encryption key derived from user password (PBKDF2, 100,000 iterations)

### 7.2 Authentication

**Supabase Auth (JWT Tokens):**
```javascript
// User signs up/logs in
const { user, session, error } = await supabase.auth.signInWithPassword({
 email: 'user@example.com',
 password: 'securePassword123'
});

// JWT token stored in Electron secure storage
await electronStore.set('supabase_session', session);

// Use token for API calls
const { data, error } = await supabase
 .from('transactions')
 .select('*')
 .headers({ Authorization: `Bearer ${session.access_token}` });
```

**Token Refresh:**
```javascript
// Tokens expire after 1 hour, auto-refresh
supabase.auth.onAuthStateChange((event, session) => {
 if (event === 'TOKEN_REFRESHED') {
 electronStore.set('supabase_session', session);
 }
});
```

### 7.3 Data Isolation (Row-Level Security)

**Enforcement:**
- User A cannot query User B's data (enforced by PostgreSQL RLS policies)
- Even if User A has User B's user_id, query returns 0 rows

**Test:**
```sql
-- User A logged in (auth.uid() = 'user-a-uuid')
SELECT * FROM transactions WHERE user_id = 'user-b-uuid';
-- Result: 0 rows (RLS blocks access)
```

---

## 8. Error Handling and Recovery

### 8.1 Network Errors

**No Internet:**
```javascript
if (!navigator.onLine) {
 showNotification('No internet. Sync will resume when online.');
 return; // Skip sync, retry later
}
```

**API Timeout:**
```javascript
try {
 const { data, error } = await Promise.race([
 supabase.from('transactions').insert(batch),
 new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 30000))
 ]);
} catch (err) {
 if (err.message === 'Timeout') {
 showNotification('Sync timeout. Retrying in 5 minutes.');
 scheduleRetry();
 }
}
```

### 8.2 Supabase Errors

**Rate Limit Exceeded:**
```javascript
if (error?.code === '429') { // Too Many Requests
 showNotification('Too many sync requests. Pausing for 1 hour.');
 await new Promise(resolve => setTimeout(resolve, 60 * 60 * 1000)); // Wait 1 hour
 await syncToCloud(); // Retry
}
```

**Database Connection Error:**
```javascript
if (error?.code === 'PGRST301') { // Connection error
 showNotification('Cloud database unavailable. Retrying in 10 minutes.');
 scheduleRetry(10 * 60 * 1000);
}
```

### 8.3 Data Corruption Recovery

**Corrupt Local SQLite:**
```javascript
try {
 await db.query('SELECT 1'); // Test connection
} catch (err) {
 if (err.code === 'SQLITE_CORRUPT') {
 showWarning('Local database corrupted. Restoring from cloud backup...');
 await restoreFromCloud();
 }
}
```

**Restore from Cloud:**
```javascript
async function restoreFromCloud() {
 // 1. Download all transactions from cloud
 const { data: transactions, error } = await supabase
 .from('transactions')
 .select('*')
 .eq('user_id', userId);

 if (error) throw error;

 // 2. Recreate local SQLite database
 await db.exec('DROP TABLE IF EXISTS transactions');
 await db.exec(createTableSQL); // Recreate schema

 // 3. Insert all transactions
 for (const tx of transactions) {
 await db.run(
 'INSERT INTO transactions (...) VALUES (...)',
 [tx.transaction_date, tx.transaction_time, tx.amount, ...]
 );
 }

 showNotification('Database restored from cloud backup! [x]');
}
```

---

## 9. Performance Optimization

### 9.1 Incremental Sync (Delta Sync)

**Problem:** Re-syncing entire database (10,000 transactions) every 5 minutes is wasteful.

**Solution:** Only sync changes since last sync.

**Implementation:**
```javascript
async function getChangesSinceLastSync(lastSyncTime) {
 // Query transactions modified after last sync
 const query = `
 SELECT * FROM transactions
 WHERE last_modified_at > ?
 ORDER BY last_modified_at ASC
 LIMIT 1000;
 `;

 const changes = await db.all(query, [lastSyncTime]);
 return changes;
}
```

**Savings:**
- Full sync: 10,000 rows = 50 MB, 30 seconds
- Delta sync: 50 rows = 250 KB, 1 second (60Ã— faster)

### 9.2 Compression

**Gzip Compression for Large Batches:**
```javascript
const zlib = require('zlib');

async function compressBatch(batch) {
 const json = JSON.stringify(batch);
 const compressed = zlib.gzipSync(json);
 return compressed;
}

// Upload compressed batch
const compressed = await compressBatch(batch);
await supabase.storage.from('sync').upload(`batch-${Date.now()}.gz`, compressed);
```

**Savings:**
- Uncompressed: 1,000 rows = 500 KB
- Gzip compressed: 1,000 rows = 50 KB (10Ã— reduction)

### 9.3 Connection Pooling

**Reuse Supabase Connections:**
```javascript
// Singleton Supabase client (reuse across syncs)
let supabaseClient = null;

function getSupabaseClient() {
 if (!supabaseClient) {
 supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
 }
 return supabaseClient;
}
```

**Benefit:** Avoid connection overhead (handshake, SSL negotiation) on every sync.

---

## 10. Testing and Monitoring

### 10.1 Sync Tests

**Unit Tests:**
```javascript
describe('Cloud Sync', () => {
 test('Pushes unsynced transactions to cloud', async () => {
 // 1. Insert 100 transactions locally (synced_to_cloud = 0)
 await insertLocalTransactions(100);

 // 2. Run sync
 await syncToCloud();

 // 3. Verify all marked as synced locally
 const unsynced = await getUnsyncedTransactions();
 expect(unsynced.length).toBe(0);

 // 4. Verify all exist in cloud
 const { data, error } = await supabase.from('transactions').select('id');
 expect(data.length).toBe(100);
 });

 test('Resolves conflicts with last-write-wins', async () => {
 // Conflict scenario test (omitted for brevity)
 });
});
```

### 10.2 Monitoring (Supabase Dashboard)

**Metrics to Track:**
- Sync frequency: Avg syncs per user per day
- Sync latency: Time to sync 1,000 rows
- Error rate: % of syncs that fail
- Database size: Total rows in `transactions` table
- API usage: Requests per hour (track rate limits)

**Alerts:**
- If error rate >10%, send Slack notification
- If database size >80% of quota, upgrade Supabase plan
- If API usage >8,000/hour, warn (approaching 10,000 limit)

---

## 11. Future Enhancements

### 11.1 Phase 2: Real-Time Sync (Q2 2025)

**Supabase Realtime Subscriptions:**
```javascript
// Listen for changes in cloud (from other devices)
supabase
 .from('transactions')
 .on('INSERT', (payload) => {
 // New transaction from Device B, insert to Device A's SQLite
 insertLocalTransaction(payload.new);
 })
 .subscribe();
```

**Use Case:** User adds transaction on Phone, appears instantly on Desktop.

### 11.2 Phase 3: Conflict Resolution UI (Q3 2025)

**Manual Conflict Resolution:**
```
|--------------------------------------------+
| Sync Conflict Detected [!] |
|--------------------------------------------|
| Transaction edited on 2 devices: |
| |
| Device A (Desktop): |
| Amount: Rp 25,000 (edited 2:30 PM) |
| |
| Device B (Phone): |
| Amount: Rp 30,000 (edited 2:35 PM) |
| |
| Which version to keep? |
| [Keep Desktop] [Keep Phone] [Merge] |
|---------------------------------------------
```

### 11.3 Phase 4: Offline Queue (Q4 2025)

**Queue Sync Operations When Offline:**
- User edits 100 transactions offline
- E1 queues all changes
- When online, syncs entire queue at once

---

**Document ID:** E1-CLOUD-SYNC-v1.0
**Last Updated:** 2025-12-28
**Owner:** Technical Team

**Related Documents:**
- [[products/03-web-dashboard-lite/integrations/pos-integration-spec|POS Integration]] - CSV import from POS systems
- [[products/03-web-dashboard-lite/technical/database-schema|Database Schema]] - SQLite and Supabase schema
- [[products/03-web-dashboard-lite/technical/security-architecture|Security Architecture]] - Encryption and auth details

