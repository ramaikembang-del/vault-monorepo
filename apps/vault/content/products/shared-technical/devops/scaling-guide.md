# Scaling Guide

**Last Updated:** 2025-12-26
**Owner:** Infrastructure Team

---

## Overview

Scaling strategies for PWBI FnB Growth platform to handle growth from 100 → 1,000 → 10,000+ users.

**Scaling Approaches:**
1. Horizontal scaling (add more servers)
2. Vertical scaling (bigger servers)
3. Database optimization
4. Caching layers

---

## Horizontal Scaling (Recommended)

**Azure App Service Auto-Scale:**

```bash
# Create auto-scale rule
az monitor autoscale create \\
 --resource-group pwbi-prod \\
 --resource pwbi-api-prod \\
 --resource-type Microsoft.Web/serverFarms \\
 --name api-autoscale \\
 --min-count 2 \\
 --max-count 10 \\
 --count 2

# Scale out rule: CPU > 70%
az monitor autoscale rule create \\
 --resource-group pwbi-prod \\
 --autoscale-name api-autoscale \\
 --condition "Percentage CPU > 70 avg 5m" \\
 --scale out 2

# Scale in rule: CPU < 30%
az monitor autoscale rule create \\
 --resource-group pwbi-prod \\
 --autoscale-name api-autoscale \\
 --condition "Percentage CPU < 30 avg 10m" \\
 --scale in 1
```

**Load Balancer:** Azure Application Gateway (already configured)

---

## Database Scaling

**Read Replicas (for heavy read workloads):**

```bash
# Create read replica
az sql db replica create \\
 --name pwbi_prod_replica \\
 --resource-group pwbi-prod \\
 --server pwbi-sql-server \\
 --source-database pwbi_prod

# Route read queries to replica
# In application code:
if query_type == 'read':
 connection_string = os.getenv('DB_READ_REPLICA_URL')
else:
 connection_string = os.getenv('DB_PRIMARY_URL')
```

---

## Caching Strategy

**Redis Cache:**

```python
import redis

cache = redis. Redis(host='pwbi-cache.redis.cache.windows.net', port=6380, ssl=True)

def get_user_profile(user_id):
 """
 Cache user profile for 10 minutes
 """
 cache_key = f"user_profile:{user_id}"

 # Try cache first
 cached = cache.get(cache_key)
 if cached:
 return json.loads(cached)

 # Cache miss - fetch from database
 profile = db.execute("SELECT * FROM users WHERE id = ?", user_id)

 # Store in cache
 cache.setex(cache_key, 600, json.dumps(profile)) # 10 min TTL

 return profile
```

---

**Growth Milestones:**
- **100 users:** Single server + single DB (current)
- **1,000 users:** 2-3 servers + read replica
- **10,000 users:** 5-10 servers + read replicas + Redis cache
- **100,000+ users:** Microservices architecture + CDN

---

**Related Documents:**
- [[products/shared-technical/devops/monitoring|Monitoring]] - Track scaling metrics
- [[products/shared-technical/architecture/ecosystem-architecture|Ecosystem Architecture]] - System design

**Last Updated:** 2025-12-26
**Owner:** Infrastructure Team
