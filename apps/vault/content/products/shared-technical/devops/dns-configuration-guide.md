# DNS Configuration Guide: Hostinger → Vercel (Simplified)

**Purpose:** Connect your Hostinger-registered domains to Vercel-hosted sites during the 60-day transfer lock period.

**Domains to Configure:**
- `pwbi.klario.website` → Marketing Site (public)
- `vault.klario-world.com` → Internal Portal (Products Lab + Biz Lab + Admin Panel)

**Estimated Time:** 10 minutes setup + 24-48 hours DNS propagation

---

## Prerequisites

- [ ] Hostinger account access (domain management)
- [ ] Vercel account created
- [ ] Both apps deployed to Vercel (at least initial deploys)

---

## Part 1: Add Domains in Vercel

### Step 1.1: Marketing Site (`pwbi.klario.website`)

1. Go to Vercel Dashboard → Select your `marketing-site` project
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter: `pwbi.klario.website`
5. Click **Add**

**Vercel will show you DNS records. Keep this tab open.**

Typical records shown:
```
Type: A
Name: pwbi
Value: 76.76.21.21
```

### Step 1.2: Vault Portal (`vault.klario-world.com`)

1. Go to Vercel Dashboard → Select your `vault` project
2. **Settings** → **Domains** → **Add Domain**
3. Enter: `vault.klario-world.com`
4. Click **Add**

**Copy the DNS records shown:**
```
Type: A
Name: vault
Value: 76.76.21.21
```

---

## Part 2: Configure DNS in Hostinger

### Step 2.1: Access Hostinger DNS Manager

1. Log in to [Hostinger](https://www.hostinger.com)
2. Go to **Domains** in the top menu

### Step 2.2: Configure `pwbi.klario.website`

1. Find `klario.website` → Click **Manage**
2. Scroll to **DNS / Name Servers** section
3. Click **DNS Zone**

**Add A Record for pwbi subdomain:**
1. Click **Add Record**
2. Fill in:
 - **Type:** A
 - **Name:** `pwbi`
 - **Points to:** `76.76.21.21` (Vercel IP)
 - **TTL:** 3600 (1 hour)
3. Click **Add Record**

**Optional: Add www subdomain:**
1. Click **Add Record**
2. Fill in:
 - **Type:** CNAME
 - **Name:** `www.pwbi`
 - **Points to:** `pwbi.klario.website`
 - **TTL:** 3600
3. Click **Add Record**

### Step 2.3: Configure `vault.klario-world.com`

1. Go back to **Domains** → Find `klario-world.com` → **Manage**
2. **DNS Zone**

**Add Vault Record:**
1. Click **Add Record**
2. Fill in:
 - **Type:** A
 - **Name:** `vault`
 - **Points to:** `76.76.21.21`
 - **TTL:** 3600
3. Click **Add Record**

---

## Part 3: Verify Configuration

### Step 3.1: Check DNS Propagation (Immediate Check)

**Use Online Tool:**
1. Go to [https://dnschecker.org](https://dnschecker.org)
2. Enter `pwbi.klario.website`
3. Select **A** record type
4. Click **Search**

**Expected Result:**
- Should show `76.76.21.21` in multiple locations
- Green checkmarks indicate propagation started

**Repeat for:**
- `vault.klario-world.com`

### Step 3.2: Verify in Vercel (Wait 10 mins - 48 hrs)

1. Go back to Vercel → Your project → **Settings** → **Domains**
2. Check domain status:
 - **Valid Configuration** = DNS verified, SSL issued
 - ⏳ **Pending** = DNS not propagated yet (wait 24-48 hours)
 - **Error** = Check DNS records, something wrong

**Typical Timeline:**
- **10 minutes:** Fast DNS providers (sometimes works immediately)
- **2-6 hours:** Average case
- **24-48 hours:** Worst case (global propagation)

---

## Part 4: Test Live Sites

**Once both domains show "Valid Configuration" in Vercel:**

### Test Marketing Site
1. Open browser (incognito mode to avoid cache)
2. Go to `https://pwbi.klario.website`
3. Should see your Next.js marketing site
4. Check SSL certificate (padlock icon) = should be valid

### Test Vault Portal (Password Protected)
1. Go to `https://vault.klario-world.com`
2. Should see Clerk sign-in page
3. Login with your Vault account (set up in Clerk dashboard first)
4. After login, should see Vault dashboard with tabs:
 - Products
 - Biz
 - Admin (if you're admin)

**Test Each Section:**
- Click **Products** tab → Should load Products Lab
- Click **Biz** tab → Should load Biz Lab (Nextra docs)
- Click **Admin** tab → Should load Admin Panel (if admin)

---

## Troubleshooting

### Issue 1: "Invalid Configuration" in Vercel after 24 hours

**Solution:**
1. Go to Hostinger → DNS Zone
2. Check if A record points to correct IP: `76.76.21.21`
3. Check "Name" field:
 - For `pwbi.klario.website` → Name should be `pwbi`
 - For `vault.klario-world.com` → Name should be `vault`
4. Remove any conflicting records (old A or CNAME with same name)

### Issue 2: Site shows "404" but domain is verified

**Solution:**
1. Check you added domain to correct Vercel project
2. Verify project is deployed (not just in draft)
3. Check Vercel deployment logs for errors

### Issue 3: Clerk sign-in not showing on Vault

**Solution:**
1. Verify `middleware.ts` file exists in `apps/vault/`
2. Check Vercel env vars: Clerk keys are set (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`)
3. Redeploy after adding env vars

### Issue 4: SSL Certificate Error

**Solution:**
- Wait 10-15 minutes after DNS verification
- Vercel auto-issues SSL via Let's Encrypt
- If error persists after 1 hour, contact Vercel support

### Issue 5: Vault tabs not working after login

**Solution:**
1. Check user metadata in Clerk dashboard: `vaultAccess: true` is set
2. Verify role is assigned: `vaultRole: "admin"` (or "editor", "viewer")
3. Check browser console for JavaScript errors
4. Clear browser cache and try again

---

## Post-Configuration Checklist

After both domains are verified and working:

- [ ] `pwbi.klario.website` loads marketing site (public)
- [ ] `vault.klario-world.com` loads Vault login page
- [ ] After Vault login, dashboard loads with tabs
- [ ] `/products` tab loads Products Lab
- [ ] `/biz` tab loads Biz Lab (Nextra docs)
- [ ] `/admin` tab loads Admin Panel (if admin)
- [ ] Both sites have valid SSL (HTTPS padlock)
- [ ] Mobile responsive (test on phone)

---

## Clerk Setup for Vault Access

### Initial Admin Setup

**Step 1: Create Your Account**
1. Go to `https://vault.klario-world.com`
2. Click "Sign Up"
3. Create account with your email

**Step 2: Set Admin Role (Clerk Dashboard)**
1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Select your Vault app
3. Go to **Users**
4. Find your account
5. Click **Edit**
6. Scroll to **Public Metadata**
7. Add:
```json
{
 "vaultAccess": true,
 "vaultRole": "admin",
 "sections": {
 "products": true,
 "biz": true,
 "admin": true
 }
}
```
8. Save

**Step 3: Test Access**
1. Logout and login again to Vault
2. Should now see all 3 tabs (Products, Biz, Admin)

### Adding Team Members (Later)

Use the Admin Panel (`vault.klario-world.com/admin`) to:
- Send email invitations
- Set user roles (Viewer, Editor, Admin)
- Grant section access (Products, Biz)

---

## Future: Domain Transfer (After 60-Day Lock)

**Optional: Transfer domains to Vercel for easier management**

**When:** After March 8, 2026 (60 days from purchase)

**Benefits:**
- One-click DNS management
- Automatic SSL renewal
- No separate Hostinger login

**Cost:**
- `klario.website`: ~$12/year renewal (same as Hostinger)
- `klario-world.com`: ~$10/year renewal

**How:**
1. Vercel Dashboard → **Domains** → **Transfer Domain**
2. Follow transfer wizard
3. Approve transfer in Hostinger (they'll email you)
4. Wait 5-7 days for transfer

**Notes:**
- Not required, just convenient
- Keep at Hostinger if you prefer (works fine with current setup)

---

**Last Updated:** January 8, 2026
**Next Review:** After first deployment (verify all domains working)
