# Monitoring & Alerting

**Last Updated:** 2025-12-26
**Platform:** Azure Monitor / Datadog
**Owner:** DevOps Team

---

## Overview

Comprehensive monitoring across application, infrastructure, and business metrics with automated alerting.

**Monitoring Layers:**
1. Application metrics (API performance, errors)
2. Infrastructure metrics (CPU, memory, disk)
3. Business metrics (transactions, revenue, active users)

---

## Application Monitoring

**Prometheus + Grafana:**

```python
from prometheus_client import Counter, Histogram, Gauge, generate_latest
from flask import Response

# Define metrics
api_requests_total = Counter(
 'api_requests_total', 'Total API requests',
 ['method', 'endpoint', 'status_code']
)

api_request_duration_seconds = Histogram(
 'api_request_duration_seconds', 'API request duration',
 ['method', 'endpoint']
)

active_users_gauge = Gauge(
 'active_users_total', 'Currently active users'
)

# Instrument Flask app
@app.before_request
def before_request():
 g.start_time = time.time()

@app.after_request
def after_request(response):
 duration = time.time() - g.start_time

 api_requests_total.labels(
 method=request.method,
 endpoint=request.endpoint,
 status_code=response.status_code
 ).inc()

 api_request_duration_seconds.labels(
 method=request.method,
 endpoint=request.endpoint
 ).observe(duration)

 return response

# Expose metrics endpoint
@app.route('/metrics')
def metrics():
 return Response(generate_latest(), mimetype='text/plain')
```

**Grafana Dashboard:** http://grafana.pwbi.com/d/api-overview

---

## Infrastructure Monitoring

```yaml
# Azure Monitor alert rules
- alert: HighCPU
 expr: avg(cpu_usage_percent) > 80
 for: 5m
 annotations:
 summary: "High CPU usage on {{ $labels.instance }}"
 description: "CPU usage is {{ $value }}%"
 actions:
 - type: email
 to: devops@pwbi.com
 - type: slack
 channel: "#alerts"

- alert: HighMemory
 expr: memory_usage_percent > 85
 for: 5m
 actions:
 - type: pagerduty
 severity: critical

- alert: DiskSpaceLow
 expr: disk_free_percent < 15
 for: 10m
 actions:
 - type: email
```

---

## Business Metrics Dashboard

```python
# Daily business metrics
def calculate_daily_metrics():
 today = datetime.utcnow().date()

 metrics = {
 'transactions_count': count_transactions(today),
 'transactions_value': sum_transaction_value(today),
 'new_users': count_new_users(today),
 'active_users': count_active_users(today),
 'api_errors_count': count_api_errors(today),
 'api_error_rate': calculate_error_rate(today)
 }

 # Store in TimeSeries DB
 for metric_name, value in metrics.items():
 influxdb.write_point(
 measurement='business_metrics',
 tags={'metric': metric_name},
 fields={'value': value},
 time=datetime.utcnow()
 )

 return metrics
```

---

**Alerting Thresholds:**
- Error rate > 1% → Page on-call engineer
- p95 latency > 2s → Slack notification
- Revenue drop > 20% day-over-day → Email leadership

---

**Related Documents:**
- [[products/shared-technical/devops/ci-cd-pipeline|CI/CD Pipeline]] - Deployment monitoring
- [[products/shared-technical/devops/scaling-guide|Scaling Guide]] - Auto-scaling triggers

**Last Updated:** 2025-12-26
**Owner:** DevOps Team
