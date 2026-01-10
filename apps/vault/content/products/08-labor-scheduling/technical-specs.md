# A4c Labor Scheduler - Technical Specs

**Platform:** Mobile (staff) + Web (managers)
**Tech Stack:** React Native, Node.js, PostgreSQL

---

## Core Features

**Demand Forecasting:**
- ML model: Time-series forecasting (sales → required staff)
- Inputs: Historical sales, day of week, holidays, events
- Output: Required staff headcount per hour

**Schedule Optimization:**
- Algorithm: Constraint optimization (linear programming)
- Objective: Minimize labor cost
- Constraints: Coverage requirements, staff availability, labor laws
- Solver: Google OR-Tools

**Mobile App (Staff):**
- Platform: React Native (iOS + Android)
- Offline: View schedule cached offline
- Push notifications: Firebase Cloud Messaging
- GPS: Clock-in verification (prevent fraud)

**Web App (Managers):**
- Drag-drop scheduling interface
- Real-time collaboration (multiple managers)
- Export: Excel, PDF, payroll CSV

---

## Data Models

**Staff:**
```javascript
{
 id, name, role, hourlyRate,
 maxHoursWeek, availability: [{day, startTime, endTime}],
 skills: ['server', 'barista'],
 performanceScore
}
```

**Shift:**
```javascript
{
 id, date, startTime, endTime,
 role Required, staffAssigned: [staffIds],
 laborCost, status
}
```

**TimeOff Request:**
```javascript
{
 id, staffId, startDate, endDate,
 reason, status: enum('pending', 'approved', 'denied')
}
```

---

## Integrations

- **POS:** Sales data for forecasting
- **Payroll:** Xero, Accurate (export hours)
- **Communication:** WhatsApp Business API (notifications)
- **Time Clock Hardware:** (optional) Badge scanners, biometric

---

## Security & Compliance

**Data Protection:**
- Employee PII encrypted (AES- 256)
- RBAC: Managers vs staff permissions

**Labor Law Compliance:**
- Max hours validation (40 + 14 OT)
- Minimum rest periods enforced (12 hours)
- Holiday pay calculations (Indonesian labor law)

**Performance:**
- Schedule generation: < 5 seconds (30 staff, 1 week)
- Mobile app response: < 200ms

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2025-12 | 2.0 | Expanded specs | Engineering Team |

---

## Related

- **[[products/08-labor-scheduling/08-labor-scheduling|Labor Scheduling Product]]** - Product overview
- **[[products/08-labor-scheduling/technical/technical|Technical]]** - Technical directory
- **[[products/08-labor-scheduling/specifications/specifications|Specifications]]** - Product specifications
- **[[products/08-labor-scheduling/integrations/integrations|Integrations]]** - POS and payroll integrations
- **[[products/07-inventory-optimizer/technical-specs|A4a Technical Specs]]** - Comparison to inventory technical specs
