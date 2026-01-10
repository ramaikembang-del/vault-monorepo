# Technical Specification - Cash Flow Forecasting

**Product:** R2b - Cash Flow Forecasting
**Product ID:** R2b
**Architecture:** Microservice (Cash Service) + Banking API Integration

---

## Database Schema

### Table: `cash_accounts`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY | |
| `user_id` | UUID | FOREIGN KEY  ->  users.id | Account owner |
| `account_type` | ENUM | NOT NULL | bank, petty_cash, other |
| `bank_name` | VARCHAR(50) | NULL | BCA, Mandiri, BRI, etc (if bank) |
| `account_number_last4` | VARCHAR(4) | NULL | Last 4 digits (security) |
| `current_balance` | DECIMAL(15,2) | NOT NULL, >=0 | IDR balance |
| `last_sync` | TIMESTAMP | NULL | Last bank API sync time |
| `is_linked` | BOOLEAN | DEFAULT FALSE | True if bank API connected |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

**Indexes:**
- `idx_user_cash_accounts` ON (`user_id`)

---

### Table: `recurring_payments`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY | |
| `user_id` | UUID | FOREIGN KEY  ->  users.id | |
| `name` | VARCHAR(100) | NOT NULL | "Rent", "Payroll", "Supplier X" |
| `amount` | DECIMAL(12,2) | NOT NULL, >0 | Payment amount (IDR) |
| `frequency` | ENUM | NOT NULL | monthly, weekly, daily |
| `day_of_period` | INTEGER | NOT NULL | 1-31 (monthly), 1-7 (weekly) |
| `priority` | ENUM | NOT NULL | critical, important, optional |
| `reminder_days_before` | INTEGER | DEFAULT 3 | Alert X days before due |
| `last_paid_date` | DATE | NULL | Track last payment |
| `is_active` | BOOLEAN | DEFAULT TRUE | Can pause reminders |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

**Indexes:**
- `idx_user_recurring` ON (`user_id`, `is_active`)
- `idx_next_due` ON (`user_id`, `day_of_period`) - For upcoming bill queries

---

### Table: `cash_forecast_snapshots`

**Purpose:** Store daily forecast snapshots for historical comparison

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY | |
| `user_id` | UUID | FOREIGN KEY  ->  users.id | |
| `snapshot_date` | DATE | NOT NULL | Date forecast was generated |
| `current_cash` | DECIMAL(15,2) | NOT NULL | Cash at snapshot time |
| `monthly_burn_rate` | DECIMAL(12,2) | NOT NULL | Calculated burn |
| `runway_months` | DECIMAL(5,2) | NOT NULL | Calculated runway |
| `runway_status` | ENUM | NOT NULL | green, yellow, orange, red |
| `expected_inflow_30d` | DECIMAL(15,2) | NULL | Next 30 days expected IN |
| `expected_outflow_30d` | DECIMAL(15,2) | NULL | Next 30 days expected OUT |
| `projected_cash_30d` | DECIMAL(15,2) | NULL | Cash in 30 days forecast |

**Indexes:**
- `idx_user_snapshots` ON (`user_id`, `snapshot_date DESC`)

**Retention:** Keep 90 days of snapshots

---

### Table: `payment_reminders`

**Purpose:** Track reminder delivery status

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY | |
| `user_id` | UUID | FOREIGN KEY  ->  users.id | |
| `recurring_payment_id` | UUID | FOREIGN KEY  ->  recurring_payments.id | |
| `due_date` | DATE | NOT NULL | Payment due date |
| `reminder_sent_at` | TIMESTAMP | NULL | When reminder was sent |
| `reminder_channel` | ENUM | NULL | email, whatsapp |
| `marked_paid_at` | TIMESTAMP | NULL | User confirmation |
| `status` | ENUM | DEFAULT 'pending' | pending, sent, paid, overdue |

**Indexes:**
- `idx_due_date` ON (`due_date`, `status`) - For reminder job queries

---

## API Endpoints

### Cash Balance Management

**POST /api/v1/cash/accounts**
Connect new bank account or add manual cash

**Request:**
```json
{
 "account_type": "bank",
 "bank_name": "BCA",
 "is_linked": true,
 "brick_access_token": "..." // From OAuth flow
}
```

**Response:**
```json
{
 "id": "uuid-cash-account-1",
 "bank_name": "BCA",
 "account_number_last4": "1234",
 "current_balance": 18500000,
 "last_sync": "2025-12-26T10:34:22Z"
}
```

---

**GET /api/v1/cash/total**
Get total cash across all accounts

**Response:**
```json
{
 "total_cash": 25500000,
 "accounts": [
 {
 "id": "uuid-1",
 "bank_name": "BCA",
 "balance": 18500000
 },
 {
 "id": "uuid-2",
 "bank_name": "Mandiri",
 "balance": 6200000
 }
 ],
 "last_updated": "2025-12-26T10:34:22Z"
}
```

---

### Runway Calculation

**GET /api/v1/cash/runway**
Calculate current runway

**Algorithm:**
```python
def calculate_runway(user_id):
 # Get total cash
 total_cash = sum_cash_accounts(user_id)

 # Calculate monthly burn rate
 recurring_payments = get_active_recurring_payments(user_id)
 monthly_burn = 0

 for payment in recurring_payments:
 if payment.frequency == 'monthly':
 monthly_burn += payment.amount
 elif payment.frequency == 'weekly':
 monthly_burn += payment.amount * 4.33 # Avg weeks/month
 elif payment.frequency == 'daily':
 monthly_burn += payment.amount * 30

 # Calculate runway
 if monthly_burn == 0:
 return {
 "error": "No burn rate data",
 "runway_months": None
 }

 runway_months = total_cash / monthly_burn

 # Determine status
 if runway_months >= 3:
 status = "green"
 elif runway_months >= 2:
 status = "yellow"
 elif runway_months >= 1:
 status = "orange"
 else:
 status = "red"

 return {
 "total_cash": total_cash,
 "monthly_burn": monthly_burn,
 "runway_months": round(runway_months, 2),
 "runway_days": int(runway_months * 30),
 "status": status
 }
```

**Response:**
```json
{
 "total_cash": 25500000,
 "monthly_burn": 18000000,
 "runway_months": 1.42,
 "runway_days": 42,
 "status": "yellow",
 "alert": "Watch closely - runway <2 months"
}
```

---

### 30-Day Forecast

**GET /api/v1/cash/forecast**
Generate 30-day cash forecast

**Algorithm:**
```python
def generate_forecast(user_id):
 # Starting cash
 current_cash = sum_cash_accounts(user_id)

 # Expected inflows (next 30 days)
 inflows = []

 # 1. Revenue (from R2a if integrated)
 if has_r2a(user_id):
 daily_revenue = get_avg_daily_revenue(user_id) # From R2a
 inflows.append({
 "source": "Daily Revenue (R2a)",
 "amount": daily_revenue * 30,
 "timing": "distributed"
 })

 # 2. Unpaid invoices (from R2f if integrated)
 if has_r2f(user_id):
 invoices = get_unpaid_invoices_due_30d(user_id)
 for invoice in invoices:
 inflows.append({
 "source": f"Invoice #{invoice.number}",
 "amount": invoice.amount,
 "timing": invoice.due_date
 })

 # Expected outflows (next 30 days)
 outflows = []
 recurring = get_active_recurring_payments(user_id)
 today = date.today()

 for payment in recurring:
 next_due = calculate_next_due_date(payment, today)
 if next_due <= today + timedelta(days=30):
 outflows.append({
 "name": payment.name,
 "amount": payment.amount,
 "due_date": next_due,
 "priority": payment.priority
 })

 # Calculate projection
 total_inflow = sum(i['amount'] for i in inflows)
 total_outflow = sum(o['amount'] for o in outflows)
 projected_cash = current_cash + total_inflow - total_outflow

 return {
 "current_cash": current_cash,
 "expected_inflows": inflows,
 "expected_outflows": outflows,
 "total_inflow_30d": total_inflow,
 "total_outflow_30d": total_outflow,
 "projected_cash_30d": projected_cash,
 "net_change": projected_cash - current_cash
 }
```

---

## Banking Integration

### Brick API Integration

**Sync Job (Runs 2Ã—/day):**
```python
def sync_bank_balances_job():
 # Get all users with linked bank accounts
 users = get_users_with_linked_banks()

 for user in users:
 accounts = get_linked_bank_accounts(user.id)

 for account in accounts:
 try:
 # Fetch balance from Brick
 balance = brick_api.get_balance(account.brick_token)

 # Update database
 update_cash_account(
 account_id=account.id,
 balance=balance['amount'],
 last_sync=datetime.now()
 )

 # Recalculate runway
 new_runway = calculate_runway(user.id)

 # Alert if runway changed significantly
 old_runway = get_last_runway_snapshot(user.id)
 if abs(new_runway - old_runway) > 0.5: # 0.5 months = 15 days
 send_alert(user.id, f"Runway updated: {new_runway} months")

 except BrickAPIError as e:
 log_error(f"Bank sync failed for {user.id}: {e}")
 # Continue to next account (don't fail entire job)
```

**Schedule:** Cron job 8am, 6pm WIB daily

---

## Background Jobs

### 1. Payment Reminder Job

**Runs:** Every 6 hours (4Ã— daily)

**Logic:**
```python
def send_payment_reminders_job():
 today = date.today()

 # Get all upcoming payments
 upcoming = get_upcoming_payments(days_ahead=7)

 for payment in upcoming:
 days_until_due = (payment.next_due_date - today).days

 # Check if reminder needed
 should_remind = False
 if payment.priority == 'critical' and days_until_due in [7, 3, 1]:
 should_remind = True
 elif payment.priority in ['important', 'optional'] and days_until_due in [3, 1]:
 should_remind = True

 # Check if already sent today
 if should_remind and not reminder_sent_today(payment.id):
 send_reminder(
 user_id=payment.user_id,
 payment=payment,
 days_until=days_until_due
 )

 log_reminder(payment.id, sent_at=datetime.now())
```

---

### 2. Daily Forecast Snapshot

**Runs:** Midnight WIB daily

**Purpose:** Save daily snapshot for historical tracking

```python
def save_daily_snapshot_job():
 users = get_all_r2b_users()

 for user in users:
 runway = calculate_runway(user.id)
 forecast = generate_forecast(user.id)

 save_snapshot(
 user_id=user.id,
 snapshot_date=date.today(),
 current_cash=forecast['current_cash'],
 monthly_burn=runway['monthly_burn'],
 runway_months=runway['runway_months'],
 runway_status=runway['status'],
 projected_cash_30d=forecast['projected_cash_30d']
 )
```

---

## Security

**Banking API Tokens:**
- Encrypted at rest (AES-256)
- Stored in secure vault (not main database)
- Revocable by user anytime

**Data Privacy:**
- Cash balances encrypted
- Payment reminders contain no sensitive data (no account numbers in WhatsApp)

---

**Related Documents:**
- [[feature-spec|feature-spec.md]] - Feature requirements
- [[products/04-accounting-module/product-variants/R2b-cash-flow/integrations/bank-integration|bank-integration.md]] - Brick API details

**Last Updated:** 2025-12-26
**Owner:** Engineering Lead

