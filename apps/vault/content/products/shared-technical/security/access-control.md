# Access Control (RBAC)

**Last Updated:** 2025-12-26
**Owner:** Security Team

---

## Overview

Role-Based Access Control (RBAC) implementation across all PWBI products using database Row-Level Security (RLS) + API JWT validation.

**Role Hierarchy:**
- Owner (full access)
- Manager (operational access, no billing)
- Staff (view-only)
- Accountant (accounting modules only)

---

## Permission Matrix

| Resource | Owner | Manager | Staff | Accountant |
|----------|-------|---------|-------|------------|
| View dashboards | All | All | Assigned only | R2 only |
| Edit transactions | | | | R2 only |
| Delete transactions | | | | |
| Manage users | | Add staff | | |
| Access billing | | | | |
| Product Access | All products | All products | Assigned | R2a-f only |

---

## Database RLS Implementation

```sql
-- Enable RLS on shared tables
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Policy: Users see only their organization's data
CREATE POLICY org_data_isolation ON transactions
FOR ALL
USING (user_id IN (
 SELECT u.id FROM users u
 WHERE u.organization_id = (
 SELECT organization_id FROM users
 WHERE id = CAST(current_setting('app.current_user_id') AS UNIQUEIDENTIFIER)
 )
));

-- Policy: Staff role has read-only access
CREATE POLICY staff_readonly ON transactions
FOR SELECT
USING (
 EXISTS (
 SELECT 1 FROM users
 WHERE id = CAST(current_setting('app.current_user_id') AS UNIQUEIDENTIFIER)
 AND role IN ('owner', 'manager', 'staff', 'accountant')
 )
);

CREATE POLICY staff_no_write ON transactions
FOR INSERT, UPDATE, DELETE
USING (
 EXISTS (
 SELECT 1 FROM users
 WHERE id = CAST(current_setting('app.current_user_id') AS UNIQUEIDENTIFIER)
 AND role IN ('owner', 'manager', 'accountant')
 )
);
```

---

## API Permission Enforcement

```python
from functools import wraps
from flask import g

def require_permission(permission):
 """
 Decorator to enforce permission checks on API endpoints
 """
 def decorator(f):
 @wraps(f)
 def wrapper(*args, **kwargs):
 user_role = g.user_role # From JWT

 # Permission mapping
 permissions = {
 'owner': ['view', 'edit', 'delete', 'manage_users', 'access_billing'],
 'manager': ['view', 'edit', 'add_staff'],
 'staff': ['view'],
 'accountant': ['view', 'edit'] # Limited to R2 products
 }

 if permission not in permissions.get(user_role, []):
 return {'error': 'Insufficient permissions'}, 403

 return f(*args, **kwargs)

 return wrapper
 return decorator

# Usage
@app.route('/api/v1/r2a/transactions', methods=['POST'])
@auth_required
@require_permission('edit')
def create_transaction():
 # Only owner, manager, accountant can create transactions
 pass
```

---

**Related Documents:**
- [[products/shared-technical/architecture/auth-system|Authentication System]] - Role definitions
- [[products/shared-technical/security/security-architecture|Security Architecture]] - Overall security

**Last Updated:** 2025-12-26
**Owner:** Security Team
