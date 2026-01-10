# Engineer Training

**Last Updated:** 2025-12-27
**Duration:** Week 1-4

---

## Week 1: Environment Setup

### Development Environment
- [ ] Install: VS Code, Git, Node.js, Python, Power BI Desktop
- [ ] Clone repos from GitHub
- [ ] Set up local dev environment
- [ ] Run project locally (front-end + back-end)
- [ ] Make test commit (fix typo in README)

### Access & Accounts
- [ ] GitHub org access
- [ ] Azure portal access (dev/staging/prod)
- [ ] Database access (read-only initially)
- [ ] Deployment permissions

### Understand the Stack
**Architecture:**
- Front-end: React (E1 Dashboard), Next.js (future)
- Back-end: Node.js + Express, Python (data processing)
- Database: PostgreSQL (RDS on Azure)
- Auth: JWT + OAuth
- Hosting: Azure App Service

**Read:** [[products/shared-technical/shared-technical|Technical Architecture Docs]]

---

## Week 2: First Code

### Shadow & Learn
- [ ] Pair program with senior engineer (2-3 sessions)
- [ ] Review 5 recent PRs (understand code review process)
- [ ] Understand CI/CD pipeline
- [ ] Learn deployment process

### First Tasks
- [ ] Fix 2-3 bugs (low complexity)
- [ ] Write tests for bug fixes
- [ ] Submit first PR, address code review feedback
- [ ] Deploy to staging

**Bug Sources:**
- GitHub Issues (label: "good first issue")
- Backlog in sprint planning

---

## Month 1-3: Ramp Up

### Month 1: Bug Fixes + Small Features
- Ship 5+ bug fixes
- Build 1 small feature end-to-end
- Write unit and integration tests
- Document code clearly

### Month 2: Feature Ownership
- Own full feature (design → deploy)
- Collaborate with PM on requirements
- Design database schema changes
- Write documentation

### Month 3: Technical Leadership
- Code review other engineers' PRs
- Mentor new engineer
- Propose technical improvement
- Contribute to architecture decisions

---

## Engineering Practices

### Code Quality
- Write tests (aim for >80% coverage)
- Follow style guide (ESLint, Prettier)
- Document complex logic
- Keep PRs small (<500 lines)

### Code Review
- Review within 24 hours
- Be constructive, not critical
- Ask questions, suggest alternatives
- Approve only if you'd deploy it

### Deployment
- Never deploy Friday afternoon!
- Monitor after deployment (30 min)
- Rollback if errors spike
- Document deploy in Slack #deployments

### On-Call
- Month 3+: Join on-call rotation
- Respond to P0 within 15 min
- Escalate if stuck >30 min
- Write post-mortem after incidents

---

## Tools

**Development:**
- VS Code + extensions (ESLint, Prettier, GitLens)
- GitHub (version control, PR reviews)
- Postman (API testing)

**DevOps:**
- Azure Portal (cloud resources)
- GitHub Actions (CI/CD)
- Datadog/Azure Monitor (monitoring)

**Collaboration:**
- Slack #engineering
- Notion (technical specs)
- Figma (design handoff)

---

## Success Metrics (90 Days)

**Month 1:** 5+ bugs fixed, 1 feature shipped
**Month 2:** Own feature end-to-end, <2 bugs in production
**Month 3:** Mentor new hire, propose tech improvement

---

## Resources

- [[products/shared-technical/shared-technical|Architecture Docs]]
- [[products/shared-technical/devops/ci-cd-pipeline|CI/CD Pipeline]]
- [[products/shared-technical/shared-technical|Coding Standards]]

**Questions?** Ask CTO or #engineering

**Last Updated:** 2025-12-27
