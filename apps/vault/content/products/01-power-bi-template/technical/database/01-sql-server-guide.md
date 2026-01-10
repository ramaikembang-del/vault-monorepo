# SQL Server Guide for F&B Dashboard
## From Beginner to Production-Ready

**Version:** 1.0
**Last Updated:** 2025-12-29
**Audience:** Beginners to intermediate users

---

## DO YOU REALLY NEED SQL SERVER?

**Most customers don't!** The **Excel Template Bundle** is simpler and faster for 90% of restaurants.

### Use Excel Templates if:
- You have <100,000 transactions/month
- Staff can fill Excel (familiar interface)
- You want **30-minute setup** (not 3-hour SQL install)
- Daily refresh is acceptable (not real-time)

### Use SQL Server only if:
- You have 500,000+ daily transactions
- You need real-time refresh (every 5 minutes)
- You have IT staff to manage database
- Multiple outlets need centralized data warehouse

### Hybrid Option (Best of Both):
- **Staff fill Excel templates daily** (ease of use)
- **IT imports Excel -> SQL weekly** for historical archive (power of SQL)
- Get simplicity + scalability

**Still here? OK, let's set up SQL Server properly!**

---

## Table of Contents
1. [[#what-is-sql-server|What is SQL Server?]]
2. [[#why-use-sql-server-for-your-dashboard|Why Use SQL Server for Your Dashboard?]]
3. [[#installation--setup|Installation & Setup]]
4. [[#core-concepts|Core Concepts]]
5. [[#creating-your-database|Creating Your Database]]
6. [[#working-with-tables|Working with Tables]]
7. [[#queries-for-your-dashboard|Queries for Your Dashboard]]
8. [[#views-the-key-to-power-bi|Views (The Key to Power BI)]]
9. [[#performance-optimization|Performance Optimization]]
10. [[#daily-operations|Daily Operations]]

---

## What is SQL Server?

**SQL Server** is Microsoft's **database management system** (DBMS). Think of it as:
- **An organized filing cabinet** for your restaurant's data
- **A powerful calculator** that can process millions of transactions instantly
- **A delivery service** that sends data to Power BI whenever requested

### Key Components

```

 SQL Server (The System)


 Databases (Your Projects)


 Tables (Data Storage)
 - pos_orders
 - staff_roster
 - customer_feedback



 Views (Power BI Feed)
 - vw_Sales_Feed
 - vw_Staff_Performance



```

---

## Why Use SQL Server for Your Dashboard?

### Scenario: "Why not just use Excel files?"

**Without SQL Server (CSV files only):**
```
Morning refresh process:
1. Export POS data -> Sales_2025-12-23.csv (5 minutes)
2. Copy file to PC (manual, 2 minutes)
3. Open Power BI -> Refresh (wait 3 minutes)
4. Hope nothing broke
```

**With SQL Server:**
```
Morning refresh:
1. POS writes to database automatically (overnight)
2. Power BI refreshes automatically (6 AM)
3. Dashboard ready by 7 AM (zero manual work)
```

### Benefits for F&B Dashboard

| Need | Without SQL | With SQL Server |
|------|-------------|-----------------|
| **Data Storage** | CSV files scattered around | Centralized in one database |
| **Data Updates** | Manual file copying | Automatic (POS writes directly) |
| **Multi-User** | File locked if someone opens it | All Power BI users access same data |
| **Data Quality** | Duplicates, typos possible | Enforced data types & constraints |
| **Speed** | Power BI loads 200K rows from file | Query just what's needed (fast) |
| **Backup** | Manual (remember to copy?) | Automated database backups |
| **Relationships** | Created in Power BI only | Enforced in database (reliable) |

---

## Installation & Setup

### Option 1: SQL Server Express (Free - Recommended for Getting Started)

**What you get:**
- Free forever
- Perfect for single restaurant (up to 10 GB database)
- Good for 1-5 Power BI users

**Download:**
1. Go to: **SQL Server Downloads**
2. Download: **SQL Server 2022 Express**
3. Also download: **SQL Server Management Studio (SSMS)** - the visual interface

**Installation Steps:**

```
1. Run SQL Server installer
 - Choose: Basic installation
 - Accept defaults
 - Wait 10-15 minutes

2. Install SSMS (separate download)
 - Run SSMS installer
 - Accept defaults
 - Restart computer if prompted

3. Test connection
 - Open SSMS
 - Server name: localhost\SQLEXPRESS
 - Authentication: Windows Authentication
 - Click Connect
```

**If successful:** You see "Object Explorer" on the left with "Databases" folder

---

### Option 2: SQL Server Developer Edition (Free - More Features)

**What you get:**
- All enterprise features (free for development/testing)
- Same process as Express
- Can upgrade to paid version later without changes

**Difference from Express:**
- No 10 GB limit
- More advanced features (but you won't need them yet)

---

### Option 3: Azure SQL Database (Cloud - Paid)

**What you get:**
- Fully managed (Microsoft handles servers)
- Accessible from anywhere (internet)
- Auto-backups, auto-updates

**Cost:** ~$5-50/month depending on size

**Best for:**
- Multiple outlets needing centralized data
- Remote access requirements
- No IT staff to manage servers

---

## Core Concepts

### 1. Databases

A **database** is a container for related tables. Think of it as a project folder.

```sql
-- Create database for your F&B dashboard
CREATE DATABASE FnB_Analytics;
GO

-- Switch to using that database
USE FnB_Analytics;
GO
```

**Analogy:** Your restaurant business (database) contains many record books (tables)

---

### 2. Tables

A **table** is like an Excel spreadsheet with rows and columns.

**Example: Staff Roster Table**

| StaffID | StaffName | Role | HireDate | MonthlyTarget |
|---------|-----------|------|----------|---------------|
| STAFF-001 | John Doe | Waiter | 2025-01-15 | 5000000 |
| STAFF-002 | Jane Smith | Captain | 2023-06-10 | 8000000 |

**SQL Definition:**
```sql
CREATE TABLE staff_roster (
 StaffID VARCHAR(20) PRIMARY KEY, -- Unique ID (can't duplicate)
 StaffName VARCHAR(100) NOT NULL, -- Name (required)
 Role VARCHAR(50), -- Waiter, Captain, etc.
 HireDate DATE, -- When they started
 MonthlyTarget DECIMAL(18,2) -- Revenue goal (IDR)
);
```

**Key Concepts:**
- **Column (Field):** StaffID, StaffName, etc.
- **Row (Record):** One employee's data
- **Data Type:** VARCHAR (text), INT (number), DATE, DECIMAL, etc.
- **PRIMARY KEY:** Unique identifier (no two staff have same ID)
- **NOT NULL:** Field can't be empty

---

### 3. Data Types (What Kind of Data Can You Store?)

| Data Type | Use For | Example | Size |
|-----------|---------|---------|------|
| **INT** | Whole numbers | Transaction count: 150 | 4 bytes |
| **DECIMAL(18,2)** | Money | Revenue: 2450000.50 | Precise |
| **VARCHAR(100)** | Text (variable length) | Staff name: "John Doe" | 1-100 chars |
| **NVARCHAR(500)** | Text with special chars | Review: "Enak sekali! " | Unicode |
| **DATE** | Date only | 2025-12-23 | 3 bytes |
| **DATETIME** | Date + time | 2025-12-23 14:30:00 | 8 bytes |
| **BIT** | True/False | IsLate: 1 (yes) or 0 (no) | 1 bit |

**Practical Rule:**
- Use **DECIMAL** for money (never FLOAT - rounding errors!)
- Use **NVARCHAR** for customer reviews (supports emoji/Indonesian)
- Use **VARCHAR** for codes like "STAFF-001"

---

## Creating Your Database

### Step 1: Create Database Structure

```sql
-- 1. Create database
CREATE DATABASE FnB_Analytics;
GO

USE FnB_Analytics;
GO

-- 2. Create Staff Roster table
CREATE TABLE staff_roster (
 StaffID VARCHAR(20) PRIMARY KEY,
 StaffName VARCHAR(100) NOT NULL,
 Role VARCHAR(50),
 HireDate DATE,
 MonthlyTarget DECIMAL(18,2),
 BonusThreshold DECIMAL(18,2)
);

-- 3. Create POS Orders table (transactions)
CREATE TABLE pos_orders (
 order_id INT PRIMARY KEY IDENTITY(1,1), -- Auto-incrementing ID
 date_time DATETIME NOT NULL,
 settled_time DATETIME,
 staff_id VARCHAR(20),
 customer_id VARCHAR(50),
 table_no INT,
 booking_id INT,
 status VARCHAR(20) DEFAULT 'Pending',

 -- Link to staff table
 FOREIGN KEY (staff_id) REFERENCES staff_roster(StaffID)
);

-- 4. Create Order Items table (what was ordered)
CREATE TABLE pos_order_items (
 order_item_id INT PRIMARY KEY IDENTITY(1,1),
 order_id INT NOT NULL,
 item_name VARCHAR(100),
 category_group VARCHAR(50),
 menu_category VARCHAR(50), -- NEW: Year-Round, Seasonal, LTO
 menu_season VARCHAR(20), -- NEW: Q1-2025, etc.
 quantity INT,
 unit_price DECIMAL(18,2),
 discount_amount DECIMAL(18,2),
 is_void BIT DEFAULT 0,

 -- Link to orders table
 FOREIGN KEY (order_id) REFERENCES pos_orders(order_id)
);

-- 5. Create Feedback table
CREATE TABLE customer_feedback (
 feedback_id INT PRIMARY KEY IDENTITY(1,1),
 created_at DATETIME DEFAULT GETDATE(),
 staff_id VARCHAR(20),
 customer_phone VARCHAR(50),
 table_number INT,
 food_quality INT, -- 1-5 rating
 service_speed INT,
 staff_friendliness INT,
 atmosphere INT,
 nps_score INT, -- 0-10
 is_first_visit BIT,
 return_reason VARCHAR(100),
 review_text NVARCHAR(500),
 complaint_resolved VARCHAR(10),
 resolution_method VARCHAR(50),
 complaint_category_1 VARCHAR(50), -- NEW
 complaint_category_2 VARCHAR(50), -- NEW
 complaint_category_3 VARCHAR(50), -- NEW
 is_valid BIT DEFAULT 1,

 FOREIGN KEY (staff_id) REFERENCES staff_roster(StaffID)
);

-- 6. Create Staff Hours table
CREATE TABLE staff_hours (
 id INT PRIMARY KEY IDENTITY(1,1),
 staff_id VARCHAR(20) NOT NULL,
 work_date DATE NOT NULL,
 shift_type VARCHAR(20), -- Lunch, Dinner
 clock_in TIME,
 clock_out TIME,
 total_hours_worked DECIMAL(5,2),
 is_late BIT DEFAULT 0,
 is_early_out BIT DEFAULT 0,

 FOREIGN KEY (staff_id) REFERENCES staff_roster(StaffID)
);

-- 7. Create Bookings table (NEW)
CREATE TABLE pos_bookings (
 booking_id INT PRIMARY KEY IDENTITY(1,1),
 booked_date DATE NOT NULL,
 booking_customer_id VARCHAR(50),
 reservation_category VARCHAR(50), -- Private Event, Wedding, etc.
 scheduled_date DATE,
 scheduled_time TIME,
 party_size INT,
 estimated_revenue DECIMAL(18,2),
 status VARCHAR(20), -- Confirmed, Completed, Cancelled, No-Show
 actual_transaction_id INT,
 actual_revenue DECIMAL(18,2)
);
```

---

## Working with Tables

### Insert Data (Add Records)

```sql
-- Add staff members
INSERT INTO staff_roster (StaffID, StaffName, Role, HireDate, MonthlyTarget, BonusThreshold)
VALUES
 ('STAFF-001', 'John Doe', 'Waiter', '2025-01-15', 5000000, 4000000),
 ('STAFF-002', 'Jane Smith', 'Captain', '2023-06-10', 8000000, 6400000),
 ('STAFF-003', 'Ahmad Yani', 'Waiter', '2025-03-01', 5000000, 4000000);

-- Add a transaction
INSERT INTO pos_orders (date_time, settled_time, staff_id, customer_id, table_no, status)
VALUES
 ('2025-12-23 12:30:00', '2025-12-23 13:15:00', 'STAFF-001', 'CUST-100', 5, 'Paid');

-- Add items to that transaction
INSERT INTO pos_order_items (order_id, item_name, category_group, quantity, unit_price, menu_category)
VALUES
 (1, 'Nasi Goreng', 'Main Course', 2, 50000, 'Year-Round'),
 (1, 'Es Teh Manis', 'Beverage', 2, 10000, 'Year-Round'),
 (1, 'Chocolate Lava Cake', 'Dessert', 1, 45000, 'Seasonal');
```

---

### Query Data (Retrieve Records)

```sql
-- Get all staff
SELECT * FROM staff_roster;

-- Get only waiters
SELECT StaffName, HireDate
FROM staff_roster
WHERE Role = 'Waiter';

-- Get staff hired in 2025
SELECT StaffName, HireDate
FROM staff_roster
WHERE HireDate >= '2025-01-01' AND HireDate < '2025-01-01';

-- Get staff sorted by monthly target (highest first)
SELECT StaffName, Role, MonthlyTarget
FROM staff_roster
ORDER BY MonthlyTarget DESC;

-- Count how many staff per role
SELECT Role, COUNT(*) AS StaffCount
FROM staff_roster
GROUP BY Role;
```

---

### Update Data (Modify Records)

```sql
-- Update John's target
UPDATE staff_roster
SET MonthlyTarget = 5500000
WHERE StaffID = 'STAFF-001';

-- Give all waiters a 10% target increase
UPDATE staff_roster
SET MonthlyTarget = MonthlyTarget * 1.10
WHERE Role = 'Waiter';

-- Mark transaction as paid
UPDATE pos_orders
SET status = 'Paid', settled_time = GETDATE()
WHERE order_id = 1;
```

---

### Delete Data (Remove Records)

```sql
-- Delete a specific staff member
DELETE FROM staff_roster
WHERE StaffID = 'STAFF-999';

-- Delete all transactions older than 2 years
DELETE FROM pos_orders
WHERE date_time < DATEADD(YEAR, -2, GETDATE());

-- CAREFUL: Delete all records (use with caution!)
DELETE FROM staff_roster; -- Better: Use TRUNCATE TABLE staff_roster;
```

---

## Queries for Your Dashboard

### 1. Today's Revenue

```sql
SELECT SUM(quantity * unit_price - ISNULL(discount_amount, 0)) AS TodayRevenue
FROM pos_order_items poi
JOIN pos_orders po ON poi.order_id = po.order_id
WHERE CAST(po.date_time AS DATE) = CAST(GETDATE() AS DATE)
 AND po.status = 'Paid';
```

**Result:** `TodayRevenue: 2450000`

---

### 2. Staff Sales Ranking (This Month)

```sql
SELECT
 sr.StaffName,
 sr.Role,
 SUM(poi.quantity * poi.unit_price - ISNULL(poi.discount_amount, 0)) AS MTDSales,
 sr.MonthlyTarget,
 (SUM(poi.quantity * poi.unit_price - ISNULL(poi.discount_amount, 0)) / sr.MonthlyTarget * 100) AS TargetAchievement
FROM staff_roster sr
LEFT JOIN pos_orders po ON sr.StaffID = po.staff_id
LEFT JOIN pos_order_items poi ON po.order_id = poi.order_id
WHERE YEAR(po.date_time) = YEAR(GETDATE())
 AND MONTH(po.date_time) = MONTH(GETDATE())
 AND po.status = 'Paid'
GROUP BY sr.StaffName, sr.Role, sr.MonthlyTarget
ORDER BY MTDSales DESC;
```

**Result:**
| StaffName | Role | MTD Sales | Monthly Target | Achievement % |
|-----------|------|-----------|----------------|---------------|
| Jane Smith | Captain | 7200000 | 8000000 | 90% |
| John Doe | Waiter | 4500000 | 5000000 | 90% |

---

### 3. NPS Score (Last 30 Days)

```sql
SELECT
 COUNT(*) AS TotalFeedback,
 SUM(CASE WHEN nps_score >= 9 THEN 1 ELSE 0 END) AS Promoters,
 SUM(CASE WHEN nps_score <= 6 THEN 1 ELSE 0 END) AS Detractors,
 (
 (SUM(CASE WHEN nps_score >= 9 THEN 1.0 ELSE 0 END) SUM(CASE WHEN nps_score <= 6 THEN 1.0 ELSE 0 END)) /
 COUNT(*) * 100
 ) AS NPSScore
FROM customer_feedback
WHERE created_at >= DATEADD(DAY, -30, GETDATE());
```

**Result:** `NPSScore: 45.5` (Promoters 60%, Detractors 15%)

---

### 4. Seasonal Menu Performance

```sql
SELECT
 menu_season,
 menu_category,
 item_name,
 SUM(quantity) AS TotalSold,
 SUM(quantity * unit_price) AS TotalRevenue
FROM pos_order_items
WHERE menu_category = 'Seasonal'
 AND menu_season IS NOT NULL
GROUP BY menu_season, menu_category, item_name
ORDER BY menu_season, TotalRevenue DESC;
```

---

### 5. Booking Conversion Rate

```sql
SELECT
 reservation_category,
 COUNT(*) AS TotalBookings,
 SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS Completed,
 SUM(CASE WHEN status = 'Cancelled' THEN 1 ELSE 0 END) AS Cancelled,
 SUM(CASE WHEN status = 'No-Show' THEN 1 ELSE 0 END) AS NoShows,
 (SUM(CASE WHEN status = 'Completed' THEN 1.0 ELSE 0 END) / COUNT(*) * 100) AS ConversionRate
FROM pos_bookings
WHERE booked_date >= DATEADD(MONTH, -1, GETDATE())
GROUP BY reservation_category
ORDER BY TotalBookings DESC;
```

---

## Views (The Key to Power BI)

### What is a View?

A **view** is a **saved query**. Think of it as a virtual table that Power BI can connect to.

**Why use views?**
1. **Simplifies Power BI:** Connect to view instead of complex JOIN queries
2. **Security:** Hide sensitive columns (e.g., staff salaries)
3. **Performance:** Database does the heavy lifting
4. **Maintainability:** Update view once, all dashboards benefit

### Example: Sales Feed View

```sql
CREATE VIEW vw_PowerBI_Sales_Feed AS
SELECT
 -- Transaction IDs
 o.order_id AS TransactionID,
 oi.order_item_id AS LineItemID,

 -- Time Dimension
 CAST(o.date_time AS DATE) AS TransactionDate,
 DATEPART(HOUR, o.date_time) AS HourOfDay,
 o.date_time AS OrderTimestamp,
 o.settled_time AS SettledTimestamp,

 -- Service Speed
 DATEDIFF(MINUTE, o.date_time, o.settled_time) AS ServiceDurationMinutes,

 -- Staff & Customer
 o.staff_id AS StaffID,
 COALESCE(o.customer_id, 'Walk-In') AS CustomerID,
 o.table_no AS TableNumber,

 -- Reservation
 CASE WHEN o.booking_id IS NOT NULL THEN 1 ELSE 0 END AS IsReservation,
 COALESCE(b.reservation_category, 'Walk-in') AS ReservationCategory,

 -- Product Context
 oi.item_name AS ItemName,
 oi.category_group AS Category,
 COALESCE(oi.menu_category, 'Year-Round') AS MenuCategory,
 COALESCE(oi.menu_season, 'N/A') AS MenuSeason,

 -- Financial Metrics
 oi.quantity AS Quantity,
 oi.unit_price AS UnitPrice,
 (oi.quantity * oi.unit_price) AS GrossAmount,
 COALESCE(oi.discount_amount, 0) AS DiscountAmount,
 (oi.quantity * oi.unit_price) - COALESCE(oi.discount_amount, 0) AS NetAmount,

 -- Flags
 CASE
 WHEN oi.category_group IN ('Dessert', 'Add-on', 'Premium Alcohol') THEN 1
 ELSE 0
 END AS IsUpsellItem,
 COALESCE(oi.is_void, 0) AS IsVoid

FROM pos_orders o
JOIN pos_order_items oi ON o.order_id = oi.order_id
LEFT JOIN pos_bookings b ON o.booking_id = b.booking_id
WHERE o.status = 'Paid';
GO
```

**Now Power BI can simply query:**
```sql
SELECT * FROM vw_PowerBI_Sales_Feed
```

Instead of writing that entire complex query!

---

### Create All Dashboard Views

Run all scripts in `/src/sql/` folder:

```sql
-- 1. Sales Feed
\i 01_vw_PowerBI_Sales_Feed.sql

-- 2. Staff Dimension
\i 02_vw_PowerBI_Dim_Staff.sql

-- 3. Feedback
\i 03_vw_PowerBI_Fact_Feedback.sql

-- 4. Staff Hours
\i 04_vw_PowerBI_Fact_StaffHours.sql

-- 5. Bookings (NEW)
\i 05_vw_PowerBI_Fact_Bookings.sql
```

---

## Performance Optimization

### 1. Indexes (Speed Up Queries)

**Problem:** Query takes 10 seconds to find all orders from "STAFF-001"

**Solution:** Create an index on `staff_id`

```sql
-- Create index on frequently queried column
CREATE INDEX IX_Orders_StaffID
ON pos_orders(staff_id);

-- Create index on date column
CREATE INDEX IX_Orders_DateTime
ON pos_orders(date_time);

-- Composite index (multiple columns)
CREATE INDEX IX_Orders_StaffDate
ON pos_orders(staff_id, date_time);
```

**Result:** Query now takes 0.1 seconds!

**When to create indexes:**
- Columns used in WHERE clauses frequently
- Columns used in JOINs
- Columns used in ORDER BY

**When NOT to:**
- Small tables (<1000 rows) - indexes add overhead
- Columns that change frequently (slows down INSERT/UPDATE)

---

### 2. Statistics

SQL Server automatically creates statistics, but you can update them:

```sql
-- Update statistics for better query plans
UPDATE STATISTICS pos_orders;
UPDATE STATISTICS pos_order_items;
```

---

### 3. Query Performance Check

```sql
-- Turn on execution plan
SET STATISTICS TIME ON;
SET STATISTICS IO ON;

-- Run your query
SELECT * FROM vw_PowerBI_Sales_Feed
WHERE TransactionDate >= '2025-12-01';

-- Check execution time and reads
```

---

## Daily Operations

### 1. Backup Database

```sql
-- Full backup
BACKUP DATABASE FnB_Analytics
TO DISK = 'C:\Backups\FnB_Analytics_Full.bak'
WITH FORMAT, INIT, NAME = 'Full Backup';

-- Backup to network drive
BACKUP DATABASE FnB_Analytics
TO DISK = '\\FileServer\Backups\FnB_Analytics_Full.bak';
```

**Schedule:** Use SQL Server Agent or Windows Task Scheduler

---

### 2. Restore Database

```sql
-- Restore from backup
RESTORE DATABASE FnB_Analytics
FROM DISK = 'C:\Backups\FnB_Analytics_Full.bak'
WITH REPLACE;
```

---

### 3. Shrink Database (Reclaim Space)

```sql
-- Check database size
SELECT
 name,
 size * 8 / 1024 AS SizeMB
FROM sys.master_files
WHERE database_id = DB_ID('FnB_Analytics');

-- Shrink database (after deleting old data)
DBCC SHRINKDATABASE(FnB_Analytics, 10); -- Leave 10% free space
```

---

### 4. Monitor Performance

```sql
-- See currently running queries
SELECT
 session_id,
 status,
 command,
 cpu_time,
 total_elapsed_time / 1000 AS ElapsedSeconds,
 TEXT AS QueryText
FROM sys.dm_exec_requests
CROSS APPLY sys.dm_exec_sql_text(sql_handle)
WHERE session_id > 50; -- Exclude system processes

-- See table sizes
SELECT
 t.NAME AS TableName,
 p.rows AS RowCounts,
 SUM(a.total_pages) * 8 / 1024 AS TotalSpaceMB
FROM sys.tables t
JOIN sys.indexes i ON t.OBJECT_ID = i.object_id
JOIN sys.partitions p ON i.object_id = p.OBJECT_ID AND i.index_id = p.index_id
JOIN sys.allocation_units a ON p.partition_id = a.container_id
GROUP BY t.Name, p.Rows
ORDER BY TotalSpaceMB DESC;
```

---

## Quick Reference Commands

### Common Tasks

```sql
-- List all databases
SELECT name FROM sys.databases;

-- List all tables in current database
SELECT name FROM sys.tables;

-- List all views
SELECT name FROM sys.views;

-- Show table structure
SELECT
 COLUMN_NAME,
 DATA_TYPE,
 CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'pos_orders';

-- Count rows in table
SELECT COUNT(*) FROM pos_orders;

-- Get first 10 rows
SELECT TOP 10 * FROM pos_orders
ORDER BY date_time DESC;

-- Find text in all tables (useful for debugging)
SELECT
 t.name AS TableName,
 c.name AS ColumnName
FROM sys.columns c
JOIN sys.tables t ON c.object_id = t.object_id
WHERE c.name LIKE '%staff%';
```

---

## Next Steps

**Week 1: Learn Basics**
- [ ] Install SQL Server Express + SSMS
- [ ] Create `FnB_Analytics` database
- [ ] Create `staff_roster` table
- [ ] INSERT 5 sample staff members
- [ ] Query them with SELECT

**Week 2: Build Tables**
- [ ] Create all tables (orders, items, feedback, hours, bookings)
- [ ] Set up foreign keys
- [ ] Insert sample transactions

**Week 3: Create Views**
- [ ] Run view scripts from `/src/sql/`
- [ ] Test views with SELECT queries
- [ ] Verify data looks correct

**Week 4: Connect Power BI**
- [ ] Connect Power BI to SQL Server
- [ ] Import views (not raw tables)
- [ ] Build first visual using view data

---

## Common Errors & Solutions

### Error: "Login failed for user"

**Solution:**
```sql
-- Create a login for Power BI
CREATE LOGIN powerbi_user WITH PASSWORD = 'YourStrongPassword123!';

-- Grant read access to database
USE FnB_Analytics;
CREATE USER powerbi_user FOR LOGIN powerbi_user;
ALTER ROLE db_datareader ADD MEMBER powerbi_user;
```

---

### Error: "Timeout expired"

**Solution:** Query is too slow, add indexes or optimize query

---

### Error: "Database full"

**Solution:** SQL Express has 10 GB limit. Either:
1. Delete old data: `DELETE FROM pos_orders WHERE date_time < '2023-01-01'`
2. Upgrade to Developer Edition (free but no production limit)

---

## Resources

**Official Documentation:**
- **SQL Server Docs**
- **T-SQL Reference**

**Learning Paths:**
- Microsoft Learn: "SQL Server fundamentals"
- **W3Schools SQL Tutorial**

**Tools:**
- **SSMS Download**
- Azure Data Studio: Alternative GUI (cross-platform)

**For This Project:**
- See `/src/sql/` folder for all view scripts
- See `DAILY_OPERATIONS_GUIDE.md` for complete setup and daily operations
- See `DEPLOYMENT.md` for full setup guide
- For alternative deployment options: `docs/archive/`

---

**Questions? Next Topics:**
- Advanced queries (Window functions, CTEs)
- Stored procedures (automation)
- SQL Server Agent (scheduled jobs)
- Security & permissions
- Replication (multi-outlet sync)

**Document Version:** 1.0
**Next Review:** 2026-01-23
