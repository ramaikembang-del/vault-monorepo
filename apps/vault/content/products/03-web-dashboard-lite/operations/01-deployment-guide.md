# E1 Web Dashboard Lite - Deployment Guide
**Product:** Web Dashboard Lite (E1)  
**Audience:** Technical team, DevOps  
**Last Updated:** January 9, 2026

---

## Overview

**What This Deploys:** Offline-first web analytics dashboard for Phase 1 Mikro F&B businesses

**Tech Stack:**
- Frontend: Electron app (HTML/CSS/JS)
- Database: SQLite (local)
- Distribution: Direct download (.exe installer for Windows)

**Deployment Type:** Client-side application (no server hosting needed)

---

## Prerequisites

### Development Environment
- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)
- Code editor (VS Code recommended)

### Build Tools
- Electron Forge (packaging tool)
- electron-builder (installer creation)

### Testing Environment
- Windows 10+ (primary target)
- 4GB+ RAM
- 500MB free disk space

---

## Initial Setup

### Step 1: Clone Repository

```bash
git clone https://github.com/[your-org]/clario-lite-dashboard.git
cd clario-lite-dashboard
```

### Step 2: Install Dependencies

```bash
npm install
```

**Key Dependencies:**
- electron: ^27.0.0
- sqlite3: ^5.1.6
- chart.js: ^4.4.0
- electron-store: ^8.1.0

### Step 3: Configure Environment

Create `.env` file:
```env
APP_VERSION=1.0.0
APP_NAME=Clario Lite Dashboard
ANALYTICS_ENABLED=true
UPDATE_CHECK_URL=https://api.clario.app/updates
```

---

## Development Build

### Run in Development Mode

```bash
npm run dev
```

**What This Does:**
- Starts Electron app in dev mode
- Enables hot reload
- Opens DevTools automatically
- Uses test database

**Access:** Application window opens automatically

---

## Production Build

### Step 1: Update Version

Edit `package.json`:
```json
{
  "name": "clario-lite-dashboard",
  "version": "1.0.0", // Update this
  "description": "F&B Analytics Dashboard for Mikro Businesses"
}
```

### Step 2: Build Application

```bash
npm run build
```

**Outputs:**
- `dist/win-unpacked/` - Unpacked application files
- `dist/Clario-Lite-Setup-1.0.0.exe` - Windows installer

### Step 3: Test Build

```bash
# Install and test
./dist/Clario-Lite-Setup-1.0.0.exe

# Verify:
- App launches correctly
- Database initializes
- Sample data loads
- All features work
```

---

## Distribution

### Option 1: Direct Download (Primary Method)

**Process:**
1. Build production .exe installer
2. Upload to Google Drive or Dropbox
3. Get shareable download link
4. Share link via WhatsApp/website
5. Users download and install directly

**Pros:**
- Simple, no infrastructure needed
- Fast distribution
- No recurring costs

**Cons:**
- Manual version updates
- No automatic update checking

---

### Option 2: GitHub Releases (Recommended)

**Process:**
1. Tag version in Git:
```bash
git tag v1.0.0
git push origin v1.0.0
```

2. Create GitHub Release:
- Go to repo → Releases → New Release
- Upload `Clario-Lite-Setup-1.0.0.exe`
- Write release notes (Bahasa Indonesia + English)

3. Share download link:
```
https://github.com/[your-org]/clario-lite-dashboard/releases/latest
```

**Pros:**
- Version tracking automatic
- Release notes built-in
- Free hosting

**Cons:**
- Requires GitHub account
- Technical users only (most customers won't use GitHub)

---

### Option 3: Website Download Page (Future)

**When to Use:** After 50+ customers

**Setup:**
1. Create landing page (Next.js/HTML)
2. Host on Vercel/Netlify (free)
3. Add download button → GitHub releases URL
4. Include changelog, system requirements

---

## Update Distribution

### Auto-Update (Electron Built-In)

**Setup:**
1. Install electron-updater:
```bash
npm install electron-updater
```

2. Configure in `main.js`:
```javascript
const { autoUpdater } = require('electron-updater');

autoUpdater.checkForUpdatesAndNotify();
```

3. Host update manifest:
- Use GitHub Releases (auto-supported)
- Or custom server with `latest.yml`

**User Experience:**
- App checks for updates on launch
- Notification: "Update available. Download now?"
- Background download → Restart to apply

---

## Deployment Checklist

**Pre-Release:**
- [ ] Version number updated in package.json
- [ ] CHANGELOG.md updated with new features/fixes
- [ ] All tests passing (manual testing)
- [ ] Build successful (no errors)
- [ ] Installer tested on clean Windows machine
- [ ] Sample data included for demo

**Release:**
- [ ] Tag Git version (v1.0.0)
- [ ] Build production installer
- [ ] Upload to GitHub Releases
- [ ] Test download link
- [ ] Update website/WhatsApp announcement

**Post-Release:**
- [ ] Monitor for crash reports (if telemetry enabled)
- [ ] Respond to user feedback (WhatsApp/email)
- [ ] Document known issues
- [ ] Plan next hotfix/update

---

## Rollback Procedure

**If Critical Bug Found:**

1. **Immediate:**
   - Remove download link from website
   - Post warning in WhatsApp/social media
   - Prepare hotfix

2. **Hotfix Process:**
   - Fix bug in code
   - Increment version (1.0.0 → 1.0.1)
   - Build new installer
   - Test thoroughly
   - Re-release as v1.0.1

3. **User Communication:**
```
⚠️ PENTING: Update ke versi 1.0.1

Kami menemukan bug di versi 1.0.0 yang dapat 
menyebabkan [issue].

Silakan download versi terbaru:
[Link download]

Mohon maaf atas ketidaknyamanannya.
```

---

## Monitoring & Analytics

### Telemetry (Optional, Privacy-Respectful)

**What to Track:**
- App launches (count)
- Feature usage (which reports opened)
- Error crashes (anonymous stack traces)
- OS version, language

**What NOT to Track:**
- Business data (revenue, transactions)
- Personal info (customer names, locations)
- Detailed usage patterns

**Implementation:**
```javascript
// Using Mixpanel or Posthog (free tier)
analytics.track('App Launched', {
  version: '1.0.0',
  os: 'Windows 10',
  language: 'id'
});
```

**Privacy:**
- Show opt-in on first launch
- Allow users to disable anytime
- Transparent data collection notice

---

## Troubleshooting Deployment Issues

### Issue 1: Build Fails

**Symptoms:**
```
Error: Cannot find module 'sqlite3'
```

**Solution:**
```bash
npm rebuild sqlite3 --build-from-source
```

---

### Issue 2: Installer Won't Run

**Symptoms:** "Windows protected your PC" warning

**Solution:**
- This is normal (unsigned app)
- Tell users: Click "More info" → "Run anyway"
- For production: Code sign certificate ($300/year)

---

### Issue 3: Database Initialization Fails

**Symptoms:** App crashes on first launch

**Solutions:**
- Check write permissions (user folder)
- Include schema.sql in build
- Verify SQLite path in config

---

## Security Considerations

**Code Signing:**
- **When:** After 100+ customers
- **Cost:** ~$300/year for certificate
- **Benefit:** No more Windows warnings

**Update Security:**
- Use HTTPS for update server
- Verify update signatures (Electron built-in)
- Don't auto-install updates (user consent required)

**

Data Security:**
- SQLite database stored locally (user's PC)
- No cloud transmission (offline-first)
- Encrypt database (optional, for sensitive businesses)

---

## Performance Optimization

**Build Size:**
- Target: <150MB installer
- Optimize:remove unused dependencies
  - Minify JavaScript
  - Compress images
  - Exclude dev dependencies in production

**Startup Time:**
- Target: <3 seconds on Windows 10
- Optimize:
  - Lazy-load non-critical modules
  - Cache database queries
  - Optimize Electron renderer

---

## Related Documents

- [[products/03-web-dashboard-lite/03-web-dashboard-lite|E1 Product Strategy]]
- [[04-hosting-management-sop|E1 Hosting SOP]]
- [[products/03-web-dashboard-lite/specifications/01-specs|E1 Technical Specifications]]

---

**Last Updated:** January 9, 2026  
**Owner:** Technical Team  
**Next Review:** Sprint 1 Launch (Week 4)
