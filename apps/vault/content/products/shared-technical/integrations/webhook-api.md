# Webhook API Specification

**Last Updated:** 2025-12-26
**Owner:** Integration Team

---

## Overview

Unified webhook specification for receiving events from external systems (POS, accounting, payment gateways).

**Supported Event Types:**
- `transaction.created` - New transaction from POS
- `transaction.updated` - Transaction modified
- `transaction.voided` - Transaction cancelled/refunded
- `invoice.paid` - Invoice marked as paid
- `payment.received` - Payment processed

---

## Webhook Endpoint

**URL Pattern:** `POST https://api.pwbi.com/v1/integrations/webhooks/{source_system}/{user_id}`

**Example:** `POST https://api.pwbi.com/v1/integrations/webhooks/pawoon/550e8400-e29b-41d4-a716-446655440000`

---

## Request Format

**Headers:**
```
Content-Type: application/json
X-Webhook-Signature: sha256=abc123... // HMAC-SHA256 signature
X-Webhook-Event: transaction.created
```

**Body:**
```json
{
 "event": "transaction.created",
 "timestamp": "2025-12- 26T10:30:00Z",
 "source_system": "pawoon",
 "data": {
 // Source-specific transaction data
 }
}
```

---

## HMAC Signature Validation

```python
def validate_webhook_signature(source_system, user_id, payload_bytes, received_signature):
 """
 Validate HMAC-SHA256 signature to prevent spoofing
 """
 # Get webhook secret for this user's integration
 webhook_secret = db.execute("""
 SELECT webhook_secret FROM integrations
 WHERE user_id = ? AND source_system = ?
 """, user_id, source_system)['webhook_secret']

 # Calculate expected signature
 expected_signature = hmac.new(
 webhook_secret.encode(),
 payload_bytes,
 hashlib.sha256
 ).hexdigest()

 # Compare securely (prevents timing attacks)
 return hmac.compare_digest(f"sha256={expected_signature}", received_signature)
```

---

## Response Format

**Success (200 OK):**
```json
{
 "success": true,
 "internal_id": "uuid",
 "message": "Webhook processed"
}
```

**Error (400/401/500):**
```json
{
 "success": false,
 "error": "Invalid signature"
}
```

---

## Retry Policy

**If webhook delivery fails:**
1. Retry after 1 minute
2. Retry after 5 minutes
3. Retry after 15 minutes
4. If all retries fail → Store in dead letter queue for manual review

---

**Related Documents:**
- [[products/shared-technical/integrations/integration-framework|Integration Framework]] - Webhook implementation details
- [[products/shared-technical/architecture/api-gateway|API Gateway]] - Routing logic

**Last Updated:** 2025-12-26
**Owner:** Integration Team
