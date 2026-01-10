# Development Workflow
**Engineer's Daily Process**

**Owner:** Engineering Team  
**Status:** ACTIVE

---

## Daily Workflow

### Morning (9-10am)
1. **Check Slack:** Any urgent issues overnight?
2. **Daily Standup:** 15 min (what did/will/blockers)
3. **Review PRs:** Approve/comment on teammate PRs
4. **Plan Day:** Pick task from backlog (GitHub Project)

### Mid-Day (10am-5pm)
5. **Code:** Work on assigned task
6. **Commit Often:** Small, logical commits
7. **Test Locally:** Ensure it works before PR
8. **Lunch Break:** 12-1pm (away from computer!)

### End of Day (5-6pm)
9. **Push Work:** Commit + push to feature branch
10. **Update Ticket:** Progress notes in GitHub issue
11. **Tomorrow Plan:** What's next?

---

## Feature Development Process

### Step 1: Pick Task
- From GitHub Projects board (Sprint backlog)
- Check priority (P0 > P1 > P2)
- Claim task (assign to yourself)

### Step 2: Create Branch
```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

**Naming:** `feature/`, `bugfix/`, `hotfix/`

### Step 3: Code
- Write code
- Follow style guide (use linter)
- Add tests (unit + integration)

### Step 4: Commit
```bash
git add .
git commit -m "feat: add user authentication"
```

**Commit Message Format:**
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `refactor:` code cleanup

### Step 5: Push & PR
```bash
git push origin feature/your-feature-name
```

- Create Pull Request on GitHub
- Fill out PR template
- Request review

### Step 6: Address Feedback
- Fix requested changes
- Push new commits
- Re-request review

### Step 7: Merge
- Once approved, squash and merge
- Delete feature branch
- Move ticket to "Done"

---

## Testing Strategy

**Local Testing:**
- Run unit tests: `npm test`
- Run integration tests: `npm run test:integration`
- Manual testing in browser

**CI/CD (Automated):**
- Tests run automatically on PR
- Must pass before merge

---

## Environment Setup

**Required:**
- Node.js (v18+)
- Git
- VS Code or preferred IDE
- Docker (for local database)

**Optional:**
- GitHub CLI (`gh`)
- Postman (API testing)

**Setup Time:** 1-2 hours (first day)

---

## Code Style

**Use Automated Tools:**
- ESLint (linting)
- Prettier (formatting)
- Run on save (IDE plugin)

**Manual Rules:**
- Meaningful variable names (`isUserAuthenticated` not `flag`)
- Small functions (<50 lines)
- Comments for "why", not "what"

---

## Troubleshooting

**Problem:** Tests fail locally
- Solution: Check dependencies (`npm install`), clear cache

**Problem:** Can't push to main
- Solution: Never push to main (use feature branches)

**Problem:** Merge conflicts
- Solution: `git pull origin main`, resolve conflicts, test, commit

---

**Status:** ACTIVE  
**Onboarding:** Every new engineer reads this
