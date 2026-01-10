# Product Requirement Document (PRD): Admin Panel

**Product:** Admin Panel
**Type:** Internal (Team Access Management)
**Status:** APPROVED
**Domain:** `vault.klario-world.com/admin`
**Parent:** Clario Vault (see `vault-overview-prd.md`)

---

## 1. Executive Summary

The **Accounts Admin Panel** is a centralized dashboard for managing team access to Clario's internal Lab sites (Products Lab and Biz Lab). It provides a simple UI for adding/removing team members and controlling which Labs they can access.

**Key Function:** "Who can access what" control panel.

---

## 2. Strategic Context

* **Problem:** Multiple Lab sites need access control, but we don't want to manage passwords manually or use Clerk's default dashboard (not branded, too generic).
* **Solution:** Custom admin panel at `accounts.klario.world` that uses Clerk's API to manage user access via metadata flags.
* **Users:** You (founder/admin), future Operations Partner.

---

## 3. Product Features & Scope

### 3.1 User Management (MVP)

**User List View:**
* Table showing all team members with Lab access
* Columns: Email, Name, Products Lab Access, Biz Lab Access, Last Login, Status (Active/Revoked)

**Add User:**
* Input: Email address
* Action: **Manual Process (V1)**
 * Admin generates invite link in Clerk Dashboard
 * Sends link to user via WhatsApp
* Default: No Lab access (must be granted manually)

**Remove User:**
* Action: Revoke all Lab access (user can no longer login)
* Option: Keep user account but revoke Lab permissions (for future re-enabling)

### 3.2 Access Control

**Grant Access:**
* Checkboxes:
 * Products Lab Access
 * Biz Lab Access
* Save → Updates Clerk user metadata
* Effect: User can now login to granted Labs

**Revoke Access:**
* Uncheck boxes → User loses access to that Lab
* Immediate effect (no grace period)

### 3.3 Audit Log (Basic)

**Activity Feed:**
* Recent 50 events:
 * User X logged into Products Lab (timestamp)
 * User Y was granted Biz Lab access (admin, timestamp)
 * User Z's access was revoked (admin, timestamp)

**Export:**
* Download CSV of all audit logs

---

## 4. Technical Architecture

### 4.1 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Authentication:** Clerk (admin-only access via role check)
* **Styling:** Tailwind CSS + Shadcn UI (use `data-table` component)
* **API:** Clerk Backend API for user management
* **Deployment:** Vercel

### 4.2 Clerk Integration

**Admin Role Check:**
```typescript
// middleware.ts
import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
 publicRoutes: [],

 // Check if user is admin
 beforeAuth: async (auth, req) => {
 const user = await currentUser()
 const isAdmin = user?.publicMetadata?.role === 'admin'

 if (!isAdmin) {
 return new Response('Access Denied', { status: 403 })
 }
 }
})
```

**User Metadata Structure:**
```json
{
 "publicMetadata": {
 "role": "admin", // Only for accounts.klario.world access
 "productsLabAccess": true,
 "bizLabAccess": true
 }
}
```

**Clerk API Usage:**
```typescript
// Update user access
import { clerkClient } from '@clerk/nextjs'

async function grantProductsLabAccess(userId: string) {
 await clerkClient.users.updateUserMetadata(userId, {
 publicMetadata: {
 productsLabAccess: true
 }
 })
}
```

### 4.3 Shadcn UI Components

| Section | Shadcn Block | Purpose |
|---------|--------------|---------|
| **User Table** | `data-table` | List all team members |
| **Add User Form** | `form` + `input` | Email invitation |
| **Access Toggle** | `checkbox` | Grant/revoke Lab access |
| **Audit Log** | `table` | Recent activity feed |

**Installation:**
```bash
cd apps/admin-panel
npx shadcn@latest add data-table form input checkbox table button
```

---

## 5. User Flows

### 5.1 Add New Team Member

1. Admin opens `accounts.klario.world`
2. Clicks "Add User"
3. Enters email: `newteam@clario.id`
4. Clicks "Send Invitation"
5. System sends Clerk invitation email
6. New user receives email, creates account
7. Admin grants access:
 - Products Lab Access
 - Biz Lab Access (not needed yet)
8. User can now login to `products.klario.world`

### 5.2 Revoke Access (Team Member Leaves)

1. Admin finds user in table
2. Unchecks both Lab access boxes
3. Clicks "Save"
4. User immediately loses access to both Labs
5. Audit log records: "User X access revoked by Admin (timestamp)"

---

## 6. Security Considerations

### 6.1 Admin Access

**Who is Admin:**
* Initially: Only you (founder)
* Set via Clerk user metadata: `role: 'admin'`

**How to Set:**
1. Create your account on Clerk dashboard
2. Manually set `publicMetadata.role = 'admin'` in Clerk UI
3. Deploy admin panel → You can now access `accounts.klario.world`

### 6.2 Audit Trail

**What's Logged:**
* User invitations sent
* Access grants/revokes
* Admin logins
* Failed access attempts

**Retention:**
* Last 90 days stored in Clerk webhooks
* Export to CSV for long-term storage

---

## 7. Future Enhancements (Post-Sprint 1)

* **Role-Based Access:**
 * Admin (full control)
 * Editor (can access but not manage users)
 * Viewer (read-only)

* **Granular Permissions:**
 * Products Lab → View-only vs Edit
 * Biz Lab → Specific folders only

* **2FA Enforcement:**
 * Require 2FA for all Lab access (Clerk supports)

* **Session Management:**
 * Force logout all users
 * Set session timeout (default: 7 days)

---

## 8. Development Timeline (Blitz Build)

**Day 1: Setup**
- Scaffold Next.js app
- Install Clerk + Shadcn
- Set up middleware (admin-only access)

**Day 2: User Management**
- Build user table (data-table component)
- Add user form (Clerk invitation API)
- Access toggle (metadata update API)

**Day 3: Audit Log**
- Build activity feed
- Clerk webhooks for logging
- CSV export

**Day 4: Polish + Deploy**
- Mobile responsive
- Error handling
- Deploy to Vercel (accounts.klario.world)

**Total:** 4 days (can be done in parallel with Lab builds)

---

## 9. Success Metrics

* **Setup Time:** < 5 minutes to add/remove a user
* **Reliability:** 100% access grant/revoke success rate
* **Audit Coverage:** All access changes logged
* **Mobile Usability:** Manage access from phone (during emergencies)

---

**Last Updated:** January 8, 2026
**Next Review:** After first deployment

---

## PRD Approval Checklist

### Pre-Development Requirements

**Admin Panel Specific:**
- [ ] Clerk Backend API access configured
- [ ] User metadata schema defined (vaultAccess, vaultRole, sections)
- [ ] Shadcn data-table component installed
- [ ] Initial admin user created in Clerk dashboard

**Features:**
- [ ] User invite email template configured in Clerk
- [ ] Audit log webhook endpoints defined
- [ ] CSV export functionality tested

### Stakeholder Approvals

- [ ] **Founder Approval** - User management scope and roles approved
- [ ] **Security Review** - Access control logic verified

### Ready-to-Build Criteria

- [ ] Vault Overview PRD approved (parent)
- [ ] Clerk API rate limits understood
- [ ] First 2-3 team members identified for testing

---

**Status History:**
- **DRAFT** (Jan 8, 2026) - Initial PRD created
- **REVIEW** (Jan 9, 2026) - User management features defined
- **APPROVED** (TBD) - Ready for development
- **IMPLEMENTED** (TBD) - Live at vault.klario-world.com/admin
