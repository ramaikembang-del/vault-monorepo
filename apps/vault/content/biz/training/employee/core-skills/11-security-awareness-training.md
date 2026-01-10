# Security Awareness Training

**Last Updated:** 2025-12-27
**Required:** All employees (annual refresh)
**Duration:** 1 hour

---

## Why Security Matters

We handle sensitive customer data (sales data, financial information). **One security incident could:**
- Lose customer trust
- Result in legal penalties (PDPN violations)
- Damage our reputation
- Cost money (breach response, fines)

**Everyone is responsible for security.**

---

## Data Classification

**Public:** Can be shared openly (marketing materials, blog posts)
**Internal:** Company information (roadmap, financials) - employees only
**Confidential:** Customer data, source code - strict access control
**Secret:** Passwords, API keys, encryption keys - never share

**When in doubt, assume Confidential.**

---

## Password Security

**Requirements:**
- Minimum 12 characters
- Mix of letters, numbers, symbols
- Unique for each account (never reuse!)
- Use password manager (1Password, LastPass)

**Enable 2FA** (Two-Factor Authentication):
- Required: Email, GitHub, Azure, banking
- Recommended: All accounts that support it

**Never:**
- Share passwords (even with team members)
- Write passwords down
- Use "password123" or similar
- Reuse passwords across sites

---

## Phishing & Social Engineering

**Common Tactics:**
- Urgent emails ("Your account will be closed!")
- Impersonation ("CEO needs you to buy gift cards")
- Suspicious links (hover before clicking)
- Attachments from unknown senders

**Red Flags:**
- Sender email doesn't match (ceo@pwbii.id not @pwbi.id)
- Poor grammar/spelling
- Requests for passwords or sensitive data
- Too good to be true offers

**What to Do:**
1. Don't click links or attachments
2. Verify sender independently (call them, don't reply to email)
3. Report to security@pwbi.id
4. Delete email

---

## Data Protection

**Customer Data:**
- Access only if needed for your job
- Never download to personal devices
- Don't share outside company
- Delete when no longer needed

**Indonesian Law (UU PDP):**
- Customer data must be protected
- Customers can request deletion
- Breaches must be reported within 72 hours
- Non-compliance = fines + jail time

**Best Practices:**
- Encrypt sensitive data
- Use company devices only
- Lock screen when away
- Report data breaches immediately

---

## Device Security

**Laptop:**
- Full disk encryption (FileVault, BitLocker)
- Screen lock (auto-lock after 5 min)
- Keep OS and apps updated
- Anti-virus installed (if Windows)

**Mobile:**
- Passcode/biometric lock
- Remote wipe enabled (Find My iPhone, etc.)
- Only install apps from official stores
- Don't jailbreak/root

**Lost/Stolen Device:**
1. Report to IT immediately
2. Remote wipe if possible
3. Change all passwords

---

## Working Remotely

**Secure:**
- Use home WiFi (not public WiFi for work)
- VPN required for prod access
- Close curtains for video calls (no shoulder surfing)

**Not Secure:**
- Coffee shop WiFi
- Shared computers
- Discussing sensitive info in public

---

## Incident Reporting

**Report immediately if:**
- Suspicious email/phishing attempt
- Lost/stolen device
- Accidental data exposure (sent to wrong person)
- Suspected account compromise
- Security vulnerability discovered

**How to Report:**
- Slack DM to CTO
- Email: security@pwbi.id
- If urgent: Call CTO directly

**No blame culture:** We want to know ASAP so we can respond.

---

## Compliance

**Indonesia Regulations:**
- **UU PDP (Personal Data Protection):** Customer consent, data protection, breach notification
- **Bank Indonesia IT-39:** Financial data security (if applicable)
- **Tax:** Keep records 10 years

**Our Responsibilities:**
- Row-Level Security (customers only

 see their data)
- Encryption (data at rest + in transit)
- Access controls (RBAC)
- Regular security audits
- Incident response plan

---

## Social Media

**Do:**
- Share company announcements (after approval)
- Celebrate wins
- Be respectful

**Don't:**
- Share customer names (without permission)
- Discuss sensitive company info
- Make negative comments about customers/competitors
- Post screenshots with customer data

**Rule:** If in doubt, check with your manager.

---

## Quiz (Self-Test)

1. You receive an email from "CEO@pwbii.id" asking you to buy gift cards urgently. What do you do?
 - **Answer:** Verify independently (call CEO), report phishing

2. Your laptop is stolen. What do you do?
 - **Answer:** Report to IT immediately, remote wipe, change passwords

3. Customer asks you to email their sales data. What do you do?
 - **Answer:** Verify identity, use secure method (don't attach raw data to email), log access

4. You accidentally send customer data to wrong person. What do you do?
 - **Answer:** Report to security@pwbi.id immediately, recall email if possible

---

## Annual Refresh

**Required:** Complete this training annually.
**Next Refresh:** January 2026

**Updates:** We'll notify you of any security policy changes.

**Questions?** Email security@pwbi.id or ask in #security Slack

---

**Security is everyone's job. Stay vigilant!** **Last Updated:** 2025-12-27

---

## Related

- **[[biz/training/employee/core-skills/10-culture-values-training|Culture & Values Training]]** - Company culture and values
- **[[biz/training/employee/core-skills/12-tools-training|Tools Training]]** - Secure tool usage
- **[[biz/departments/it/policies/security-policies|Security Policies]]** - Detailed security procedures
- **[[biz/departments/it/sops/incident-response|Incident Response]]** - Security incident procedures
- **[[products/shared-technical/security/security-guidelines|Security Guidelines]]** - Technical security practices
