# Deployment Process
**Ship Code to Production Safely**

**Owner:** Engineering  
**Status:** ACTIVE

---

## Deployment Environments

### Development
- **Purpose:** Active development, feature branches
- **URL:** localhost:3000
- **Data:** Fake/test data only

### Staging
- **Purpose:** Pre-production testing, QA
- **URL:** staging.clario.id
- **Data:** Anonymized production data (refreshed weekly)

### Production
- **Purpose:** Live customer-facing app
- **URL:** app.clario.id
- **Data:** Real customer data

---

## Deployment Workflow

### Step 1: Code Review
- Create Pull Request (PR) on GitHub
- Request review from 1+ team member
- Pass automated tests (unit + integration)
- Approval required before merge

### Step 2: Merge to Main
- Squash commits (keep history clean)
- Delete feature branch after merge

### Step 3: Deploy to Staging
- **Automatic:** Vercel auto-deploys `main` branch → staging
- **Validation:** QA team tests (smoke tests, regression)
- **Approval:** QA lead signs off

### Step 4: Deploy to Production
- **Manual trigger:** Deploy button in Vercel dashboard
- **Timing:** Tuesdays/Thursdays 10am WIB (avoid Fridays!)
- **Monitoring:** Watch error rates for 1 hour post-deploy

---

## Rollback Process

**If production breaks:**
1. **Immediate:** Revert to previous version (1-click rollback in Vercel)
2. **Investigate:** Check logs (Sentry, Vercel logs)
3. **Fix:** Hotfix branch → expedited review → redeploy
4. **Post-mortem:** Document what went wrong, prevent recurrence

---

## Deployment Checklist

Before deploying to production:
- [ ] All tests pass (CI/CD green)?
- [ ] Staging tested and approved?
- [ ] Database migrations tested? (if applicable)
- [ ] Feature flags configured? (if rolling out incrementally)
- [ ] Team notified (#deployments Slack channel)?
- [ ] Rollback plan ready?

---

## Emergency Hotfix Process

**For critical bugs (system down, data loss):**
1. Create hotfix branch from `main`
2. Fix bug (minimal code change)
3. Expedited review (single approval OK)
4. Deploy directly to production
5. Backport fix to dev branches

**Use sparingly** (only for true emergencies)

---

**Status:** ACTIVE  
**Deployment Frequency:** 2-3x/week (Tues/Thurs)  
**Last Updated:** January 2026
