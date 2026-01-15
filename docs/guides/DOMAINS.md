# Domain & URL Reference Guide
**Single Source of Truth for All Vault Domains**

---

## Production URLs

| Service | Production Domain | Status | Environment |
|---------|------------------|--------|-------------|
| **Vault (Unified Portal)** | `vault.klario-world.com` | ✅ ACTIVE | Production |
| **Marketing Site** | `pwbi.klario.website` | ✅ ACTIVE | Production |

---

## Vault Routes (Sub-paths)

All internal applications run under the unified `vault.klario-world.com` domain:

| Application | Route | Full URL | Status |
|-------------|-------|----------|--------|
| **Root Dashboard** | `/` | `vault.klario-world.com/` | ✅ LIVE |
| **Biz Lab** | `/biz` | `vault.klario-world.com/biz` | ✅ LIVE |
| **Products Lab** | `/products` | `vault.klario-world.com/products` | ✅ LIVE |
| **Admin Panel** | `/admin` | `vault.klario-world.com/admin` | ❓ TBD |

---

## Deprecated/Historical References

The following domains were mentioned in original plans but **should NOT be used**:

| Deprecated Domain | Reason | Replace With |
|-------------------|--------|--------------|
| `biz.klario.world` | Separate subdomain | `vault.klario-world.com/biz` |
| `products.klario.world` | Separate subdomain | `vault.klario-world.com/products` |
| `accounts.klario.world` | Separate subdomain | `vault.klario-world.com/admin` |
| `vault.clario.biz` | Typo/variant | `vault.klario-world.com` |

**Why the change:** Original architecture planned 3 separate sites. Actual implementation uses unified single-portal with tab navigation (see `00-vault-overview-prd.md`).

---

## Documentation Update Rules

When updating docs, use these standard references:

### ✅ CORRECT
```markdown
- Production: `vault.klario-world.com`
- Biz Lab: `/biz` route or `vault.klario-world.com/biz`
- Products Lab: `/products` route or `vault.klario-world.com/products`
```

### ❌ INCORRECT
```markdown
- biz.klario.world
- products.klario.world
- accounts.klario.world
- vault.clario.biz (typo)
```

---

## Code Examples

### Routing
```typescript
// Correct: relative routes
<Link href="/biz">Biz Lab</Link>
<Link href="/products">Products Lab</Link>
<Link href="/admin">Admin Panel</Link>

// Correct: absolute URLs (external links)
<a href="https://vault.klario-world.com">Open Vault</a>
```

### Authentication Redirects
```typescript
// Clerk configuration
redirectUrl: 'https://vault.klario-world.com/dashboard'
```

### API Endpoints
```typescript
// Internal API routes (relative)
fetch('/api/vault/progress')

// External integrations (absolute)
fetch('https://vault.klario-world.com/api/webhook')
```

---

## Environment Variables

```bash
# .env.production
NEXT_PUBLIC_VAULT_URL=https://vault.klario-world.com
NEXT_PUBLIC_MARKETING_URL=https://pwbi.klario.website

# Deprecated (remove if found)
# NEXT_PUBLIC_BIZ_LAB_URL=https://biz.klario.world ❌
# NEXT_PUBLIC_PRODUCTS_LAB_URL=https://products.klario.world ❌
```

---

## DNS Configuration

```
# Current Setup (Vercel)
vault.klario-world.com → Vercel Edge (vault app)
pwbi.klario.website → Vercel Edge (marketing app)

# NOT configured (deprecated):
# biz.klario.world
# products.klario.world
# accounts.klario.world
```

---

## Migration Checklist

When finding old domain references in documentation:

- [ ] Replace `biz.klario.world` → `vault.klario-world.com/biz`
- [ ] Replace `products.klario.world` → `vault.klario-world.com/products`
- [ ] Replace `accounts.klario.world` → `vault.klario-world.com/admin`
- [ ] Replace `vault.clario.biz` → `vault.klario-world.com`
- [ ] Add note: "Originally planned as separate subdomain, implemented as unified route"

---

**Last Updated:** January 15, 2026  
**See Also:** `00-vault-overview-prd.md` (Section 2.2), `STATUS.md`
