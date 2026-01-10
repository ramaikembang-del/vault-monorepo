# CI/CD Pipeline

**Last Updated:** 2025-12-26
**Platform:** Azure DevOps / GitHub Actions
**Owner:** DevOps Team

---

## Overview

3-stage deployment pipeline: Development → Staging → Production with automated testing, blue-green deployments, and rollback capabilities.

**Pipeline Stages:**
1. **Dev** - Auto-deploy on commit (10 min)
2. **Staging** - Manual approval + E2E tests (30 min)
3. **Production** - Manual approval + blue-green deployment (15 min, zero downtime)

---

## Stage 1: Development Deployment

**Trigger:** Push to `main` branch

**GitHub Actions Workflow:**

```yaml
# .github/workflows/deploy-dev.yml
name: Deploy to Development

on:
 push:
 branches: [main]

jobs:
 test-and-deploy:
 runs-on: ubuntu-latest

 steps:
 - name: Checkout code
 uses: actions/checkout@v3

 - name: Set up Python
 uses: actions/setup-python@v4
 with:
 python-version: '3.11'

 - name: Install dependencies
 run: |
 pip install -r requirements.txt
 pip install pytest pytest-cov

 - name: Run unit tests
 run: |
 pytest tests/unit --cov=src --cov-report=xml

 - name: Run integration tests
 run: |
 pytest tests/integration

 - name: Build Docker image
 run: |
 docker build -t pwbi-api:${{ github.sha }} .

 - name: Push to Azure Container Registry
 run: |
 az acr login --name pwbiregistry
 docker tag pwbi-api:${{ github.sha }} pwbiregistry.azurecr.io/pwbi-api:dev
 docker push pwbiregistry.azurecr.io/pwbi-api:dev

 - name: Deploy to dev environment
 run: |
 az webapp config container set \\
 --name pwbi-api-dev \\
 --resource-group pwbi-dev \\
 --docker-custom-image-name pwbiregistry.azurecr.io/pwbi-api:dev

 - name: Run smoke tests
 run: |
 sleep 30 # Wait for app to start
 curl -f https://api-dev.pwbi.com/health || exit 1

 - name: Notify on Slack
 if: always()
 run: |
 curl -X POST ${{ secrets.SLACK_WEBHOOK }} \\
 -H 'Content-Type: application/json' \\
 -d '{"text": "Dev deployment: ${{ job.status }}"}'
```

---

## Stage 2: Staging Deployment

**Trigger:** Manual approval by QA lead

**Workflow:**

```yaml
# .github/workflows/deploy-staging.yml
name: Deploy to Staging

on:
 workflow_dispatch: # Manual trigger only

jobs:
 deploy-staging:
 runs-on: ubuntu-latest
 environment: staging #Requires approval

 steps:
 - name: Promote Docker image
 run: |
 az acr login --name pwbiregistry
 docker pull pwbiregistry.azurecr.io/pwbi-api:dev
 docker tag pwbiregistry.azurecr.io/pwbi-api:dev pwbiregistry.azurecr.io/pwbi-api:staging
 docker push pwbiregistry.azurecr.io/pwbi-api:staging

 - name: Deploy to staging
 run: |
 az webapp config container set \\
 --name pwbi-api-staging \\
 --resource-group pwbi-staging \\
 --docker-custom-image-name pwbiregistry.azurecr.io/pwbi-api:staging

 - name: Run database migrations
 run: |
 python manage.py migrate --settings=config.staging

 - name: Run E2E tests
 run: |
 npm run test:e2e -- --baseUrl=https://api-staging.pwbi.com

 - name: Load testing (100 concurrent users)
 run: |
 locust -f tests/load/locustfile.py \\
 --host=https://api-staging.pwbi.com \\
 --users=100 \\
 --spawn-rate=10 \\
 --run-time=5m \\
 --headless

 - name: Security scan
 run: |
 pip install safety bandit
 safety check
 bandit -r src/
```

---

## Stage 3: Production Deployment (Blue-Green)

**Trigger:** Manual approval by engineering lead

**Blue-Green Strategy:**

```yaml
# .github/workflows/deploy-production.yml
name: Deploy to Production (Blue-Green)

on:
 workflow_dispatch:

jobs:
 deploy-production:
 runs-on: ubuntu-latest
 environment: production

 steps:
 - name: Determine current slot
 id: current-slot
 run: |
 CURRENT=$(az webapp traffic-routing show \\
 --name pwbi-api-prod \\
 --resource-group pwbi-prod \\
 --query "[0].routingRules[0].name" -o tsv)

 if [ "$CURRENT" == "blue" ]; then
 echo "target=green" >> $GITHUB_OUTPUT
 else
 echo "target=blue" >> $GITHUB_OUTPUT
 fi

 - name: Deploy to inactive slot (${{ steps.current-slot.outputs.target }})
 run: |
 az webapp config container set \\
 --name pwbi-api-prod \\
 --resource-group pwbi-prod \\
 --slot ${{ steps.current-slot.outputs.target }} \\
 --docker-custom-image-name pwbiregistry.azurecr.io/pwbi-api:staging

 - name: Warm up new slot
 run: |
 for i in {1..10}; do
 curl -f https://pwbi-api-prod-${{ steps.current-slot.outputs.target }}.azurewebsites.net/health
 sleep 2
 done

 - name: Run database migrations (if any)
 run: |
 python manage.py migrate --settings=config.production

 - name: Swap traffic (0% → 100%)
 run: |
 az webapp traffic-routing set \\
 --name pwbi-api-prod \\
 --resource-group pwbi-prod \\
 --distribution ${{ steps.current-slot.outputs.target }}=100

 - name: Monitor error rates (1 hour)
 run: |
 python scripts/monitor_deployment.py --duration=3600 --threshold=0.01

 - name: Rollback if error rate > 1%
 if: failure()
 run: |
 # Swap back to previous slot
 OLD_SLOT=$(if [ "${{ steps.current-slot.outputs.target }}" == "blue" ]; then echo "green"; else echo "blue"; fi)

 az webapp traffic-routing set \\
 --name pwbi-api-prod \\
 --resource-group pwbi-prod \\
 --distribution $OLD_SLOT=100

 # Alert team
 curl -X POST ${{ secrets.SLACK_WEBHOOK_CRITICAL }} \\
 - H 'Content-Type: application/json' \\
 -d '{"text": " Production rollback executed due to high error rate!"}'
```

---

## Rollback Strategy

**Auto-Rollback Triggers:**
1. Error rate > 1% (monitored for 1 hour post-deployment)
2. Response time p95 > 2 seconds
3. Health check fails

**Manual Rollback:**

```bash
# Swap back to previous slot immediately
az webapp traffic-routing set \\
 --name pwbi-api-prod \\
 --resource-group pwbi-prod \\
 --distribution blue=100 # Or green=100

# Check current slot distribution
az webapp traffic-routing show \\
 --name pwbi-api-prod \\
 --resource-group pwbi-prod
```

---

## Database Migration Safety

```python
# scripts/safe_migrate.py
import subprocess
import sys

def run_migration():
 """
 Run database migration with automatic rollback on failure
 """
 # Create backup before migration
 backup_result = subprocess.run([
 'az', 'sql', 'db', 'export',
 '--name', 'pwbi_prod',
 '--server', 'pwbi-sql-server',
 '--storage-uri', f'https://pwbibackups.blob.core.windows.net/pre-migration-{datetime.now().isoformat()}.bacpac'
 ])

 if backup_result.returncode != 0:
 print("Backup failed - aborting migration")
 sys.exit(1)

 # Run migration
 migrate_result = subprocess.run(['python', 'manage.py', 'migrate'])

 if migrate_result.returncode != 0:
 print("Migration failed - restoring backup")
 # Restore from backup
 subprocess.run([
 'az', 'sql', 'db', 'import',
 '--name', 'pwbi_prod',
 '--storage-uri', '<latest_backup_uri>'
 ])
 sys.exit(1)

 print("Migration successful")
```

---

**Related Documents:**
- [[products/shared-technical/devops/monitoring|Monitoring]] - Post-deployment monitoring
- [[products/shared-technical/devops/scaling-guide|Scaling Guide]] - Scaling strategies

**Last Updated:** 2025-12-26
**Owner:** DevOps Team
**Review Cycle:** Quarterly
