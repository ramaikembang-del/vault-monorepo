# Data Platform Architecture

**Last Updated:** 2025-12-26
**Technology:** SQL Server 2019+ / Azure SQL Database
**Owner:** Data Architecture Lead
**Status:** Production-Ready Reference

---

## Overview

Complete unified data infrastructure architecture shared across all PWBI FnB Growth products.

**Purpose:** Provide centralized, secure, scalable data layer enabling:
- Single source of truth for user/customer data
- Cross-product data access (E1 reads R2a, C1 migrates from R2a)
- Row-level security (users see only their data)
- Efficient backup & disaster recovery

---

## Database Architecture

### Centralized Multi-Schema Model

**Architecture Decision:** Single database, multiple product schemas

```
Azure SQL Database: pwbi_production
 shared schema (Cross-product tables)
 users (authentication, profiles)
 customers (B2B clients for R2f/C1)
 metrics_catalog (150+ metrics definitions)
 product_subscriptions (user→product mapping)
 audit_log (compliance, tracking)

 r2a schema (Simple P&L)
 transactions
 categories
 monthly_summaries

 r2c schema (COGS Calculator)
 recipes
 ingredients
 recipe_ingredients
 ingredient_purchases

 r2b schema (Cash Flow)
 cash_accounts
 expected_inflows
 expected_outflows
 cash_forecast_snapshots

 r2f schema (Invoice Management)
 invoices
 invoice_line_items
 payments
 payment_reminders

 e1 schema (Dashboard)
 metric_snapshots
 user_preferences
 dashboard_configs

 c1 schema (Full SaaS - Future)
 unified_transactions
 locations
 staff
 [comprehensive schema]
```

**Why Centralized?**
1. **Cross-Product Queries:** E1 can query R2a data directly (no API overhead)
2. **Single Backup:** One backup strategy covers all products
3. **Cost Efficiency:** 1 database license vs 6 separate databases
4. **Simplified Security:** One RLS policy applies across all schemas
5. **Easy Migration:** R2a→C1 upgrade is internal data copy, not cross-DB migration

---

## Shared Schema Tables

### Table: `shared.users`

**Purpose:** Single user account across all products (SSO foundation)

```sql
CREATE TABLE shared.users (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 email NVARCHAR(255) UNIQUE NOT NULL,
 email_verified BIT DEFAULT 0,
 password_hash NVARCHAR(500) NOT NULL, -- bcrypt hash
 name NVARCHAR(200),
 phone NVARCHAR(20),
 phone_verified BIT DEFAULT 0,

 -- Business info
 business_name NVARCHAR(200),
 business_type NVARCHAR(50), -- Restaurant, Cafe, Catering, etc.
 business_city NVARCHAR(100), -- For analytics

 -- Timestamps
 created_at DATETIME2 DEFAULT GETDATE(),
 last_login DATETIME2,
 last_activity_at DATETIME2,

 -- Status
 is_active BIT DEFAULT 1,
 deactivated_at DATETIME2,
 deactivation_reason NVARCHAR(500),

 -- Metadata
 signup_source NVARCHAR(50), -- Website, Referral, Event, etc.
 referral_code NVARCHAR(20),

 INDEX IX_users_email (email),
 INDEX IX_users_created_at (created_at),
 INDEX IX_users_is_active (is_active)
);
```

**Usage Example:**
```sql
-- Check if user exists
SELECT id, email, is_active
FROM shared.users
WHERE email = 'owner@restaurant.com';

-- Get all active users created last 30 days
SELECT COUNT(*) AS new_users
FROM shared.users
WHERE is_active = 1
 AND created_at >= DATEADD(day, -30, GETDATE());
```

---

### Table: `shared.product_subscriptions`

**Purpose:** Track which products each user has subscribed to

```sql
CREATE TABLE shared.product_subscriptions (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,
 product_id VARCHAR(20) NOT NULL, -- 'r2a', 'e1', 'c1', etc.
 tier VARCHAR(20), -- 'free', 'basic', 'starter', 'pro'

 -- Billing
 subscription_start_date DATE NOT NULL,
 subscription_end_date DATE, -- NULL = active
 billing_cycle VARCHAR(20), -- 'monthly', 'yearly'
 monthly_price DECIMAL(10,2),

 -- Status
 status VARCHAR(20) DEFAULT 'active', -- active, canceled, paused, migrated_to_c1
 canceled_at DATETIME2,
 cancellation_reason NVARCHAR(500),

 -- Migration tracking
 migrated_to_product VARCHAR(20), -- e.g., 'c1' when R2a user upgrades
 migrated_at DATETIME2,

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 INDEX IX_subscriptions_user (user_id),
 INDEX IX_subscriptions_product (product_id),
 INDEX IX_subscriptions_status (status)
);
```

**Usage Example:**
```sql
-- Get all active subscriptions for a user
SELECT product_id, tier, monthly_price
FROM shared.product_subscriptions
WHERE user_id = @user_id
 AND status = 'active';

-- Check if user has R2a subscription (for API access control)
SELECT COUNT(*) AS has_access
FROM shared.product_subscriptions
WHERE user_id = @user_id
 AND product_id = 'r2a'
 AND status = 'active';
```

---

### Table: `shared.customers`

**Purpose:** Shared B2B customer database (used by R2f invoicing, C1 CRM)

```sql
CREATE TABLE shared.customers (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL, -- Owner of this customer

 -- Basic info
 customer_name NVARCHAR(200) NOT NULL,
 contact_person NVARCHAR(200),
 email NVARCHAR(255),
 whatsapp NVARCHAR(20),
 phone NVARCHAR(20),

 -- Address
 address NVARCHAR(500),
 city NVARCHAR(100),
 postal_code NVARCHAR(10),

 -- Tax info (Indonesia)
 npwp NVARCHAR(30), -- Tax ID number
 is_pkp BIT DEFAULT 0, -- PKP status (VAT-registered)

 -- Business details
 payment_terms INT DEFAULT 30, -- Net-30, Net-15, etc.
 credit_limit DECIMAL(15,2),

 -- Status
 is_active BIT DEFAULT 1,
 created_at DATETIME2 DEFAULT GETDATE(),
 last_transaction_date DATETIME2,

 -- Metadata
 notes NVARCHAR(MAX), -- Internal notes
 tags NVARCHAR(500), -- Comma-separated tags

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 INDEX IX_customers_user (user_id),
 INDEX IX_customers_name (customer_name),
 INDEX IX_customers_active (is_active)
);
```

---

### Table: `shared.metrics_catalog`

**Purpose:** Centralized catalog of all 150+ metrics available across products

```sql
CREATE TABLE shared.metrics_catalog (
 metric_id INT PRIMARY KEY IDENTITY(1,1),
 metric_name NVARCHAR(100) UNIQUE NOT NULL, -- 'total_revenue'
 display_name NVARCHAR(200), -- 'Total Revenue'
 display_name_id NVARCHAR(200), -- 'Pendapatan Total' (Indonesian)

 -- Categorization
 category NVARCHAR(50), -- Revenue, Cost, Profitability, Operations
 subcategory NVARCHAR(50), -- Sales, COGS, Gross Margin, etc.

 -- Access control (E1 paid tiers)
 tier VARCHAR(20) DEFAULT 'free', -- free, starter, pro

 -- Formula
 formula NVARCHAR(MAX), -- DAX or SQL expression
 data_source NVARCHAR(100), -- Which product provides this metric

 -- Metadata
 description NVARCHAR(MAX),
 unit VARCHAR(20), -- 'IDR', '%', 'count', 'hours'
 format_string NVARCHAR(50), -- '#,##0', '0.00%'

 -- Status
 is_active BIT DEFAULT 1,
 created_at DATETIME2 DEFAULT GETDATE(),

 INDEX IX_metrics_category (category),
 INDEX IX_metrics_tier (tier)
);
```

**Example Data:**
```sql
INSERT INTO shared.metrics_catalog
(metric_name, display_name, display_name_id, category, tier, formula, unit)
VALUES
('total_revenue', 'Total Revenue', 'Pendapatan Total', 'Revenue', 'free',
 'SUM(r2a.transactions.amount WHERE type=''revenue'')', 'IDR'),

('gross_profit_margin', 'Gross Profit Margin %', 'Margin Laba Kotor %', 'Profitability', 'starter',
 '(total_revenue - total_cogs) / total_revenue * 100', '%'),

('customer_lifetime_value', 'Customer LTV', 'Nilai Lifetime Pelanggan', 'Advanced', 'pro',
 'AVG(monthly_revenue_per_customer) * avg_customer_lifespan_months', 'IDR');
```

---

## Product-Specific Schemas

### R2a Schema: Simple P&L Tracker

```sql
-- Main transactions table
CREATE TABLE r2a.transactions (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,

 -- Transaction details
 transaction_date DATE NOT NULL,
 amount DECIMAL(15,2) NOT NULL,
 type VARCHAR(20) CHECK (type IN ('revenue', 'expense')) NOT NULL,

 -- Categorization
 category_id INT,
 category_name NVARCHAR(100), -- Denormalized for speed

 -- Description
 description NVARCHAR(500),
 notes NVARCHAR(MAX),

 -- Source tracking
 source VARCHAR(50), -- 'manual', 'pos_import', 'bank_sync'
 external_id NVARCHAR(100), -- POS transaction ID if imported

 -- Metadata
 created_at DATETIME2 DEFAULT GETDATE(),
 updated_at DATETIME2,

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 INDEX IX_r2a_transactions_user_date (user_id, transaction_date),
 INDEX IX_r2a_transactions_type (type),
 INDEX IX_r2a_transactions_category (category_id)
);

-- Categories (SAK EMKM chart of accounts)
CREATE TABLE r2a.categories (
 id INT PRIMARY KEY IDENTITY(1,1),
 user_id UNIQUEIDENTIFIER, -- NULL = default SAK EMKM categories
 name NVARCHAR(100) NOT NULL,
 type VARCHAR(20) CHECK (type IN ('revenue', 'expense')) NOT NULL,

 -- SAK EMKM mapping
 sak_code NVARCHAR(10), -- e.g., '4-1' for Revenue from Sales
 sak_name_id NVARCHAR(200), -- Indonesian SAK EMKM name

 -- Status
 is_default BIT DEFAULT 0, -- True for SAK EMKM defaults
 is_active BIT DEFAULT 1,

 INDEX IX_r2a_categories_user (user_id),
 INDEX IX_r2a_categories_type (type)
);

-- Monthly summaries (for performance)
CREATE TABLE r2a.monthly_summaries (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,
 year INT NOT NULL,
 month INT NOT NULL,

 -- P&L summary
 total_revenue DECIMAL(15,2),
 total_expenses DECIMAL(15,2),
 net_profit AS (total_revenue - total_expenses) PERSISTED,

 -- Calculated at end of month
 calculated_at DATETIME2,

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 UNIQUE INDEX UX_r2a_monthly_user_period (user_id, year, month)
);
```

---

### R2c Schema: COGS Calculator

```sql
-- Recipes
CREATE TABLE r2c.recipes (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,
 recipe_name NVARCHAR(200) NOT NULL,

 -- Pricing
 selling_price DECIMAL(10,2),
 target_cogs_percentage DECIMAL(5,2), -- e.g., 30.00 for 30%

 -- Yield
 yield_quantity DECIMAL(10,2), -- How many servings
 yield_unit NVARCHAR(20), -- 'servings', 'kg', 'pcs'

 -- Cost calculation (computed)
 total_recipe_cost DECIMAL(10,2), -- Sum of ingredient costs
 cost_per_unit AS (total_recipe_cost / NULLIF(yield_quantity, 0)) PERSISTED,
 actual_cogs_percentage AS (cost_per_unit / NULLIF(selling_price, 0) * 100) PERSISTED,

 -- Metadata
 category NVARCHAR(100), -- 'Main Dish', 'Dessert', etc.
 is_active BIT DEFAULT 1,
 created_at DATETIME2 DEFAULT GETDATE(),
 updated_at DATETIME2,

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 INDEX IX_r2c_recipes_user (user_id),
 INDEX IX_r2c_recipes_category (category)
);

-- Recipe ingredients (junction table)
CREATE TABLE r2c.recipe_ingredients (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 recipe_id UNIQUEIDENTIFIER NOT NULL,
 ingredient_id UNIQUEIDENTIFIER NOT NULL,

 -- Quantity
 quantity DECIMAL(10,3) NOT NULL,
 unit NVARCHAR(20), -- 'kg', 'g', 'L', 'ml', 'pcs'

 -- Cost (computed from latest ingredient purchase)
 unit_cost DECIMAL(10,2),
 total_cost AS (quantity * unit_cost) PERSISTED,

 -- Waste tracking
 waste_percentage DECIMAL(5,2) DEFAULT 0, -- e.g., 10% for meat trimming
 adjusted_quantity AS (quantity * (1 + waste_percentage/100)) PERSISTED,

 FOREIGN KEY (recipe_id) REFERENCES r2c.recipes(id) ON DELETE CASCADE,
 INDEX IX_r2c_ingredients_recipe (recipe_id)
);

-- Ingredients master
CREATE TABLE r2c.ingredients (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,
 ingredient_name NVARCHAR(200) NOT NULL,

 -- Default unit
 default_unit NVARCHAR(20),

 -- Current cost (weighted average from purchases)
 current_cost_per_unit DECIMAL(10,2),
 last_purchase_date DATE,

 -- Supplier info
 preferred_supplier NVARCHAR(200),

 -- Status
 is_active BIT DEFAULT 1,
 created_at DATETIME2 DEFAULT GETDATE(),

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 INDEX IX_r2c_ingredients_user (user_id)
);

-- Ingredient purchases (for cost tracking)
CREATE TABLE r2c.ingredient_purchases (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,
 ingredient_id UNIQUEIDENTIFIER NOT NULL,

 -- Purchase details
 purchase_date DATE NOT NULL,
 quantity DECIMAL(10,3) NOT NULL,
 unit NVARCHAR(20),
 total_price DECIMAL(10,2) NOT NULL,
 price_per_unit AS (total_price / NULLIF(quantity, 0)) PERSISTED,

 -- Supplier
 supplier_name NVARCHAR(200),

 -- Notes
 notes NVARCHAR(500),

 created_at DATETIME2 DEFAULT GETDATE(),

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 FOREIGN KEY (ingredient_id) REFERENCES r2c.ingredients(id),
 INDEX IX_r2c_purchases_user_date (user_id, purchase_date),
 INDEX IX_r2c_purchases_ingredient (ingredient_id)
);
```

---

### R2b Schema: Cash Flow Forecasting

```sql
-- Cash accounts (bank balances)
CREATE TABLE r2b.cash_accounts (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,
 account_name NVARCHAR(100) NOT NULL, -- 'BCA Main', 'Cash Register'

 -- Balance
 current_balance DECIMAL(15,2) NOT NULL,
 last_sync_at DATETIME2,

 -- Bank integration
 bank_name NVARCHAR(50), -- 'BCA', 'Mandiri', 'BNI'
 bank_account_number NVARCHAR(50),
 is_synced_via_api BIT DEFAULT 0,

 -- Status
 is_active BIT DEFAULT 1,
 created_at DATETIME2 DEFAULT GETDATE(),

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 INDEX IX_r2b_accounts_user (user_id)
);

-- Expected cash inflows (from R2f invoices, etc.)
CREATE TABLE r2b.expected_inflows (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,
 amount DECIMAL(15,2) NOT NULL,
 expected_date DATE NOT NULL,

 -- Source
 source VARCHAR(50), -- 'invoice', 'manual', 'recurring'
 source_id UNIQUEIDENTIFIER, -- invoice.id if from R2f
 description NVARCHAR(500),

 -- Status
 is_realized BIT DEFAULT 0,
 realized_date DATE,
 realized_amount DECIMAL(15,2),

 created_at DATETIME2 DEFAULT GETDATE(),

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 INDEX IX_r2b_inflows_user_date (user_id, expected_date)
);

-- Expected cash outflows (rent, salaries, supplier payments)
CREATE TABLE r2b.expected_outflows (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,
 amount DECIMAL(15,2) NOT NULL,
 expected_date DATE NOT NULL,

 -- Classification
 category NVARCHAR(100), -- 'Rent', 'Salaries', 'Supplier Payment'
 description NVARCHAR(500),

 -- Recurring?
 is_recurring BIT DEFAULT 0,
 recurrence_frequency VARCHAR(20), -- 'monthly', 'weekly'

 -- Status
 is_paid BIT DEFAULT 0,
 paid_date DATE,
 paid_amount DECIMAL(15,2),

 created_at DATETIME2 DEFAULT GETDATE(),

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 INDEX IX_r2b_outflows_user_date (user_id, expected_date)
);

-- Daily forecast snapshots (cached calculations)
CREATE TABLE r2b.cash_forecast_snapshots (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,
 forecast_date DATE NOT NULL,

 -- Starting balance
 opening_balance DECIMAL(15,2),

 -- Expected movements
 expected_inflows DECIMAL(15,2),
 expected_outflows DECIMAL(15,2),

 -- Projected balance
 projected_balance AS (opening_balance + expected_inflows - expected_outflows) PERSISTED,

 -- Runway calculation
 monthly_burn_rate DECIMAL(15,2), -- Average monthly outflows
 runway_months AS (CASE
 WHEN monthly_burn_rate > 0 THEN projected_balance / monthly_burn_rate
 ELSE NULL
 END) PERSISTED,

 -- When snapshot was created
 snapshot_date DATETIME2 DEFAULT GETDATE(),

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 UNIQUE INDEX UX_r2b_forecast_user_date (user_id, forecast_date)
);
```

---

### R2f Schema: Invoice Management

```sql
-- Invoices
CREATE TABLE r2f.invoices (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 user_id UNIQUEIDENTIFIER NOT NULL,
 customer_id UNIQUEIDENTIFIER NOT NULL,

 -- Invoice numbering
 invoice_number NVARCHAR(50) NOT NULL, -- INV-2025-0001
 invoice_date DATE NOT NULL,
 due_date DATE NOT NULL,

 -- Amounts
 subtotal DECIMAL(15,2),
 tax_percentage DECIMAL(5,2), -- 11% PPN
 tax_amount AS (subtotal * tax_percentage / 100) PERSISTED,
 total_amount AS (subtotal + (subtotal * tax_percentage / 100)) PERSISTED,

 -- Payment tracking
 paid_amount DECIMAL(15,2) DEFAULT 0,
 outstanding_amount AS (subtotal + (subtotal * tax_percentage / 100) - paid_amount) PERSISTED,
 payment_status VARCHAR(20) DEFAULT 'unpaid', -- unpaid, partial, paid, overdue

 -- Delivery
 sent_via_whatsapp BIT DEFAULT 0,
 sent_via_email BIT DEFAULT 0,
 sent_at DATETIME2,

 -- Notes
 notes NVARCHAR(MAX),

 -- Status
 is_active BIT DEFAULT 1,
 created_at DATETIME2 DEFAULT GETDATE(),
 updated_at DATETIME2,

 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 FOREIGN KEY (customer_id) REFERENCES shared.customers(id),
 UNIQUE INDEX UX_r2f_invoice_number (user_id, invoice_number),
 INDEX IX_r2f_invoices_user_date (user_id, invoice_date),
 INDEX IX_r2f_invoices_status (payment_status)
);

-- Invoice line items
CREATE TABLE r2f.invoice_line_items (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 invoice_id UNIQUEIDENTIFIER NOT NULL,

 -- Item details
 item_name NVARCHAR(200) NOT NULL,
 description NVARCHAR(500),
 quantity DECIMAL(10,2) NOT NULL,
 unit_price DECIMAL(10,2) NOT NULL,
 line_total AS (quantity * unit_price) PERSISTED,

 -- Sort order
 line_number INT,

 FOREIGN KEY (invoice_id) REFERENCES r2f.invoices(id) ON DELETE CASCADE,
 INDEX IX_r2f_line_items_invoice (invoice_id)
);

-- Payments received
CREATE TABLE r2f.payments (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 invoice_id UNIQUEIDENTIFIER NOT NULL,
 user_id UNIQUEIDENTIFIER NOT NULL,

 -- Payment details
 payment_date DATE NOT NULL,
 amount DECIMAL(15,2) NOT NULL,
 payment_method VARCHAR(50), -- 'Bank Transfer', 'Cash', 'Check'

 -- Reference
 reference_number NVARCHAR(100), -- Bank transfer reference
 notes NVARCHAR(500),

 created_at DATETIME2 DEFAULT GETDATE(),

 FOREIGN KEY (invoice_id) REFERENCES r2f.invoices(id),
 FOREIGN KEY (user_id) REFERENCES shared.users(id),
 INDEX IX_r2f_payments_invoice (invoice_id),
 INDEX IX_r2f_payments_user_date (user_id, payment_date)
);

-- Payment reminders (automated)
CREATE TABLE r2f.payment_reminders (
 id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
 invoice_id UNIQUEIDENTIFIER NOT NULL,

 -- Reminder schedule
 reminder_type VARCHAR(50), -- 'before_due', 'on_due', 'overdue_7d', 'overdue_14d'
 scheduled_date DATE NOT NULL,

 -- Delivery
 sent_at DATETIME2,
 sent_via VARCHAR(20), -- 'whatsapp', 'email'

 -- Status
 status VARCHAR(20) DEFAULT 'pending', -- pending, sent, failed

 FOREIGN KEY (invoice_id) REFERENCES r2f.invoices(id) ON DELETE CASCADE,
 INDEX IX_r2f_reminders_invoice (invoice_id),
 INDEX IX_r2f_reminders_schedule (scheduled_date, status)
);
```

---

## Row-Level Security (RLS) Implementation

### Security Predicate Function

**Purpose:** Ensure users can ONLY see their own data (tenant isolation)

```sql
-- Create security function
CREATE FUNCTION shared.fn_securitypredicate(@user_id UNIQUEIDENTIFIER)
 RETURNS TABLE
WITH SCHEMABINDING
AS
 RETURN SELECT 1 AS result
 WHERE @user_id = CAST(SESSION_CONTEXT(N'user_id') AS UNIQUEIDENTIFIER);
GO

-- Apply security policy to all product tables
CREATE SECURITY POLICY shared.UserSecurityPolicy
 -- R2a tables
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2a.transactions,
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2a.categories,
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2a.monthly_summaries,

 -- R2c tables
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2c.recipes,
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2c.ingredients,
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2c.ingredient_purchases,

 -- R2b tables
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2b.cash_accounts,
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2b.expected_inflows,
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2b.expected_outflows,

 -- R2f tables
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2f.invoices,
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON r2f.payments,

 -- Shared tables
 ADD FILTER PREDICATE shared.fn_securitypredicate(user_id) ON shared.customers
WITH (STATE = ON);
GO
```

### Setting Session Context on Login

**Backend code (Python example):**
```python
import pyodbc

def execute_query_as_user(user_id, query):
 conn = pyodbc.connect(connection_string)
 cursor = conn.cursor()

 # Set session context for RLS
 cursor.execute(f"EXEC sp_set_session_context 'user_id', '{user_id}'")

 # Now ANY query automatically filtered by user_id
 cursor.execute(query)
 results = cursor.fetchall()

 cursor.close()
 conn.close()

 return results

# Example: User can only see their own transactions
user_transactions = execute_query_as_user(
 user_id='550e8400-e29b-41d4-a716-446655440000',
 query='SELECT * FROM r2a.transactions' # RLS automatically adds WHERE user_id = @user_id
)
```

---

## Cross-Product Data Access Patterns

### Example 1: E1 Dashboard Reading R2a Data

**Scenario:** E1 needs last 30 days revenue for dashboard

```sql
-- Set session context
EXEC sp_set_session_context 'user_id', '550e8400-e29b-41d4-a716-446655440000';

-- E1 backend executes this query
SELECT
 transaction_date,
 SUM(CASE WHEN type = 'revenue' THEN amount ELSE 0 END) AS daily_revenue,
 SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS daily_expenses
FROM r2a.transactions
WHERE transaction_date >= DATEADD(day, -30, GETDATE())
GROUP BY transaction_date
ORDER BY transaction_date ASC;

-- RLS automatically adds: AND user_id = SESSION_CONTEXT('user_id')
-- User only sees their own data
```

---

### Example 2: R2f Invoices Syncing to R2b Cash Flow

**Scenario:** When invoice created in R2f, add expected inflow to R2b

```sql
-- Trigger on r2f.invoices INSERT
CREATE TRIGGER r2f.trg_invoice_created_sync_to_r2b
ON r2f.invoices
AFTER INSERT
AS
BEGIN
 SET NOCOUNT ON;

 -- Auto-create expected inflow in R2b
 INSERT INTO r2b.expected_inflows (
 user_id, amount, expected_date,
 source, source_id, description
 )
 SELECT
 i.user_id,
 i.total_amount,
 i.due_date,
 'invoice',
 i.id,
 'Invoice ' + i.invoice_number + ' - ' + c.customer_name
 FROM inserted i
 JOIN shared.customers c ON i.customer_id = c.id;
END;
GO
```

**When invoice marked paid, update R2b:**
```sql
-- Trigger on r2f.payments INSERT
CREATE TRIGGER r2f.trg_payment_received_update_r2b
ON r2f.payments
AFTER INSERT
AS
BEGIN
 SET NOCOUNT ON;

 -- Mark expected inflow as realized
 UPDATE r2b.expected_inflows
 SET is_realized = 1,
 realized_date = p.payment_date,
 realized_amount = p.amount
 FROM r2b.expected_inflows ei
 JOIN inserted p ON ei.source_id = p.invoice_id
 WHERE ei.source = 'invoice';
END;
GO
```

---

## Data Migration Procedures

### Upgrade: R2a → C1 Full Migration

**Scenario:** User upgrades from R2a Simple P&L to C1 Full SaaS

```sql
CREATE PROCEDURE sp_migrate_r2a_to_c1
 @user_id UNIQUEIDENTIFIER
AS
BEGIN
 SET NOCOUNT ON;
 BEGIN TRANSACTION;

 BEGIN TRY
 -- 1. Copy R2a transactions to C1 unified schema
 INSERT INTO c1.transactions (
 user_id, transaction_date, amount, category, type,
 description, source_product, migrated_at
 )
 SELECT
 user_id, transaction_date, amount,
 category_name, type,
 description, 'r2a', GETDATE()
 FROM r2a.transactions
 WHERE user_id = @user_id;

 -- 2. Copy R2a categories to C1 chart of accounts
 INSERT INTO c1.chart_of_accounts (
 user_id, account_name, account_type, sak_code, migrated_from
 )
 SELECT
 user_id, name, type, sak_code, 'r2a'
 FROM r2a.categories
 WHERE user_id = @user_id
 AND is_active = 1;

 -- 3. Mark R2a subscription as migrated
 UPDATE shared.product_subscriptions
 SET status = 'migrated_to_c1',
 migrated_to_product = 'c1',
 migrated_at = GETDATE()
 WHERE user_id = @user_id
 AND product_id = 'r2a'
 AND status = 'active';

 -- 4. Create C1 subscription
 INSERT INTO shared.product_subscriptions (
 user_id, product_id, tier, subscription_start_date, status
 )
 VALUES (
 @user_id, 'c1', 'basic', CAST(GETDATE() AS DATE), 'active'
 );

 -- 5. Log migration
 INSERT INTO shared.audit_log (user_id, action, description)
 VALUES (@user_id, 'product_migration', 'Migrated R2a to C1');

 COMMIT TRANSACTION;

 SELECT 'SUCCESS' AS status,
 @@ROWCOUNT AS rows_migrated,
 'R2a data migrated to C1. R2a subscription archived.' AS message;

 END TRY
 BEGIN CATCH
 ROLLBACK TRANSACTION;

 SELECT 'ERROR' AS status,
 ERROR_MESSAGE() AS message;
 END CATCH;
END;
GO

-- Execute migration
EXEC sp_migrate_r2a_to_c1 @user_id = '550e8400-e29b-41d4-a716-446655440000';
```

---

## Performance Optimization

### Query Optimization Examples

**Problem:** Slow dashboard loading (fetching 1 year of transactions)

**Before (Slow):**
```sql
-- Full table scan
SELECT transaction_date, SUM(amount) AS daily_revenue
FROM r2a.transactions
WHERE type = 'revenue'
GROUP BY transaction_date;
-- Execution time: 2.5 seconds
```

**After (Fast):**
```sql
-- Add covering index
CREATE INDEX IX_r2a_transactions_type_date_amount
ON r2a.transactions(type, transaction_date, amount);

-- Same query now uses index
SELECT transaction_date, SUM(amount) AS daily_revenue
FROM r2a.transactions
WHERE type = 'revenue'
GROUP BY transaction_date;
-- Execution time: 0.15 seconds (16x faster!)
```

---

### Pre-Computed Summaries

**Strategy:** For frequently-accessed aggregations, compute once and cache

**Example: Monthly P&L summaries**
```sql
-- Scheduled job runs daily at midnight
CREATE PROCEDURE sp_compute_monthly_summaries
AS
BEGIN
 -- Insert/update monthly summaries for completed months
 MERGE r2a.monthly_summaries AS target
 USING (
 SELECT
 user_id,
 YEAR(transaction_date) AS year,
 MONTH(transaction_date) AS month,
 SUM(CASE WHEN type = 'revenue' THEN amount ELSE 0 END) AS total_revenue,
 SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS total_expenses
 FROM r2a.transactions
 WHERE transaction_date < DATEADD(day, -1, DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1))
 GROUP BY user_id, YEAR(transaction_date), MONTH(transaction_date)
 ) AS source
 ON target.user_id = source.user_id
 AND target.year = source.year
 AND target.month = source.month
 WHEN MATCHED THEN
 UPDATE SET
 total_revenue = source.total_revenue,
 total_expenses = source.total_expenses,
 calculated_at = GETDATE()
 WHEN NOT MATCHED THEN
 INSERT (user_id, year, month, total_revenue, total_expenses, calculated_at)
 VALUES (source.user_id, source.year, source.month, source.total_revenue, source.total_expenses, GETDATE());
END;
GO

-- Now dashboards can query pre-computed summaries (instant!)
SELECT year, month, total_revenue, total_expenses, net_profit
FROM r2a.monthly_summaries
WHERE user_id = @user_id
ORDER BY year DESC, month DESC;
```

---

## Backup & Disaster Recovery

### Backup Strategy

**Azure SQL Automated Backups:**
- **Full backup:** Weekly (Sunday 2:00 AM WIB)
- **Differential backup:** Daily (2:00 AM WIB)
- **Transaction log backup:** Every 5-10 minutes
- **Retention:** 35 days (configurable)
- **Geo-replication:** Enabled (Southeast Asia → East Asia replica)

**Manual Backup:**
```bash
# Export database to bacpac (full schema + data)
az sql db export \
 --resource-group pwbi-rg \
 --server pwbi-sql-server \
 --name pwbi_production \
 --admin-user sqladmin \
 --admin-password <password> \
 --storage-key <storage-key> \
 --storage-key-type StorageAccessKey \
 --storage-uri https://pwbibackups.blob.core.windows.net/backups/pwbi_production_$(date +%Y%m%d).bacpac
```

---

### Disaster Recovery Procedures

**Scenario 1: Database Corruption**

```bash
# 1. Identify last good backup point
az sql db list-usable-backups \
 --resource-group pwbi-rg \
 --server pwbi-sql-server \
 --database pwbi_production

# 2. Restore to specific point in time
az sql db restore \
 --resource-group pwbi-rg \
 --server pwbi-sql-server \
 --name pwbi_production_restored \
 --dest-name pwbi_production \
 --time "2025-12-26T10:30:00Z"

# 3. Verify data integrity
sqlcmd -S pwbi-sql-server.database.windows.net -d pwbi_production_restored \
 -U sqladmin -P <password> \
 -Q "SELECT COUNT(*) FROM shared.users; SELECT COUNT(*) FROM r2a.transactions;"

# 4. Switch applications to restored database
# Update connection strings in app config

# 5. Delete corrupted database after 24hr monitoring period
```

**RTO (Recovery Time Objective):** < 1 hour
**RPO (Recovery Point Objective):** < 10 minutes (transaction log frequency)

---

## Troubleshooting Guide

### Issue 1: User Can't See Their Data (RLS Problem)

**Symptoms:**
- User logs in but dashboard shows "No data"
- Queries return 0 rows

**Diagnosis:**
```sql
-- Check if session context is set
SELECT SESSION_CONTEXT(N'user_id') AS current_user_id;
-- Expected: user's GUID
-- If NULL: RLS filtering to nobody!

-- Check user's actual data
SELECT COUNT(*) FROM r2a.transactions WITH (READUNCOMMITTED)
WHERE user_id = '550e8400-e29b-41d4-a716-446655440000';
-- Expected: >0 if user has data
```

**Fix:**
```python
# Ensure backend sets session context on every connection
cursor.execute("EXEC sp_set_session_context 'user_id', ?", user_id)
```

---

### Issue 2: Slow Queries (Missing Indexes)

**Diagnosis:**
```sql
-- Find missing indexes
SELECT
 OBJECT_NAME(d.object_id) AS table_name,
 d.equality_columns,
 d.inequality_columns,
 d.included_columns,
 s.avg_user_impact,
 s.user_seeks
FROM sys.dm_db_missing_index_details d
JOIN sys.dm_db_missing_index_group_stats s
 ON d.index_handle = s.index_handle
WHERE s.avg_user_impact > 50 -- High impact indexes
ORDER BY s.avg_user_impact DESC;
```

**Fix:**
```sql
-- Create suggested index
CREATE INDEX IX_r2a_transactions_user_date_type
ON r2a.transactions(user_id, transaction_date, type)
INCLUDE (amount);
```

---

### Issue 3: Data Migration Failed

**Symptoms:**
- sp_migrate_r2a_to_c1 returns ERROR
- User stuck between R2a and C1

**Diagnosis:**
```sql
-- Check migration status
SELECT * FROM shared.product_subscriptions
WHERE user_id = @user_id
 AND product_id IN ('r2a', 'c1');

-- Check if data was partially migrated
SELECT COUNT(*) FROM c1.transactions
WHERE user_id = @user_id
 AND source_product = 'r2a';
```

**Fix (Rollback):**
```sql
BEGIN TRANSACTION;

-- Delete partially migrated C1 data
DELETE FROM c1.transactions
WHERE user_id = @user_id AND source_product = 'r2a';

-- Re-activate R2a subscription
UPDATE shared.product_subscriptions
SET status = 'active', migrated_to_product = NULL, migrated_at = NULL
WHERE user_id = @user_id AND product_id = 'r2a';

-- Remove failed C1 subscription
DELETE FROM shared.product_subscriptions
WHERE user_id = @user_id AND product_id = 'c1' AND status = 'active';

COMMIT;

-- Investigate root cause, then retry migration
```

---

**Related Documents:**
- [[products/shared-technical/architecture/ecosystem-architecture|Ecosystem Architecture]] - How products interconnect
- [[products/shared-technical/security/security-architecture|Security Architecture]] - Security model details
- [[products/shared-technical/devops/scaling-guide|Scaling Guide]] - Database scaling procedures

---

**Last Updated:** 2025-12-26
**Owner:** Data Architecture Lead
**Review Cycle:** Monthly (as schema evolves)
**Next Review:** 2025-01-26
