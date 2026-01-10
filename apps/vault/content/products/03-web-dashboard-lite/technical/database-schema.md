# Database Schema - E1 Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Last Updated:** 2025-12-28
**Version:** 1.0
**Database:** SQLite 3 (local), PostgreSQL 15 (cloud via Supabase)

---

## 1. Local Database (SQLite)

### 1.1 Overview

**File Location:**
- Windows: `C:\Users\{Username}\AppData\Local\E1\data.db`
- macOS: `~/Library/Application Support/E1/data.db`
- Linux: `~/.local/share/E1/data.db`

**SQLite Version:** 3.40+
**Encryption:** Optional (SQLCipher for encrypted databases)
**Size:** ~10 MB per 10,000 transactions

### 1.2 Schema Definition

**transactions table (primary data)**
```sql
CREATE TABLE transactions (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 transaction_date TEXT NOT NULL, -- ISO 8601: YYYY-MM-DD
 transaction_time TEXT NOT NULL, -- HH:MM:SS
 amount INTEGER NOT NULL, -- Rupiah (no decimals)
 product_name TEXT,
 product_category TEXT,
 payment_method TEXT, -- Cash, Debit, Credit, E-Wallet, Other
 cashier_id TEXT,
 location TEXT, -- Multi-outlet (Pro tier)
 notes TEXT,

 -- Sync tracking (cloud sync)
 synced_to_cloud INTEGER DEFAULT 0, -- 0 = not synced, 1 = synced
 cloud_id TEXT, -- UUID from Supabase
 last_modified_at INTEGER DEFAULT (strftime('%s', 'now')), -- Unix timestamp

 created_at TEXT DEFAULT (datetime('now')),
 updated_at TEXT DEFAULT (datetime('now'))
);

-- Indexes for performance
CREATE INDEX idx_transaction_date ON transactions(transaction_date);
CREATE INDEX idx_transaction_date_time ON transactions(transaction_date, transaction_time);
CREATE INDEX idx_payment_method ON transactions(payment_method);
CREATE INDEX idx_product_category ON transactions(product_category);
CREATE INDEX idx_synced_to_cloud ON transactions(synced_to_cloud);
```

**user_settings table**
```sql
CREATE TABLE user_settings (
 key TEXT PRIMARY KEY,
 value TEXT,
 updated_at TEXT DEFAULT (datetime('now'))
);

-- Example rows:
INSERT INTO user_settings (key, value) VALUES ('subscription_tier', 'Starter');
INSERT INTO user_settings (key, value) VALUES ('sync_enabled', 'true');
INSERT INTO user_settings (key, value) VALUES ('last_sync_time', '1704067200');
```

**sync_log table**
```sql
CREATE TABLE sync_log (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 sync_type TEXT NOT NULL, -- 'push', 'pull', 'conflict'
 records_synced INTEGER DEFAULT 0,
 errors TEXT,
 started_at TEXT DEFAULT (datetime('now')),
 completed_at TEXT,
 status TEXT DEFAULT 'in_progress' -- 'in_progress', 'completed', 'failed'
);
```

### 1.3 Triggers

**Auto-update updated_at column:**
```sql
CREATE TRIGGER update_transaction_timestamp
AFTER UPDATE ON transactions
FOR EACH ROW
BEGIN
 UPDATE transactions
 SET updated_at = datetime('now'),
 last_modified_at = strftime('%s', 'now'),
 synced_to_cloud = 0 -- Mark as not synced
 WHERE id = NEW.id;
END;
```

### 1.4 Sample Queries

**Total sales for today:**
```sql
SELECT SUM(amount) AS total_sales
FROM transactions
WHERE transaction_date = DATE('now');
```

**Top 5 products by revenue:**
```sql
SELECT
 product_name,
 SUM(amount) AS total_sales,
 COUNT(*) AS transaction_count
FROM transactions
WHERE transaction_date BETWEEN DATE('now', '-30 days') AND DATE('now')
GROUP BY product_name
ORDER BY total_sales DESC
LIMIT 5;
```

**Sales by payment method:**
```sql
SELECT
 payment_method,
 SUM(amount) AS total_sales,
 COUNT(*) AS transaction_count,
 ROUND(SUM(amount) * 100.0 / (SELECT SUM(amount) FROM transactions), 2) AS percentage
FROM transactions
WHERE transaction_date BETWEEN DATE('now', '-30 days') AND DATE('now')
GROUP BY payment_method
ORDER BY total_sales DESC;
```

---

## 2. Cloud Database (Supabase PostgreSQL)

See [[products/03-web-dashboard-lite/integrations/cloud-sync-spec|cloud-sync-spec.md]] Section 2.2 for full Supabase schema.

**Key Tables:**
- `auth.users` - User authentication (Supabase Auth)
- `public.user_profiles` - Extended user info
- `public.transactions` - Synced transactions
- `public.sync_log` - Sync history

---

**Document ID:** E1-DB-SCHEMA-v1.0
**Last Updated:** 2025-12-28


---

**Related Documents:**
- [[products/03-web-dashboard-lite/03-web-dashboard-lite|Product Overview]] - Main product documentation
- [[products/03-web-dashboard-lite/technical/technical|Technical Hub]] - All technical documentation


