# Regulatory Compliance

**Last Updated:** 2025-12-26
**Owner:** Compliance & Legal Team
**Jurisdiction:** Indonesia

---

## Overview

Compliance requirements for operating in Indonesian market - covering data privacy, financial regulations, and tax law.

**Key Regulations:**
1. **PDPN** (UU No. 27/2022) - Personal Data Protection
2. **Bank Indonesia IT-39/2019** - Financial Technology Security
3. **Tax Regulations** (PMK 48/2020) - Invoice requirements & retention

---

## 1. PDPN Compliance (Personal Data Protection)

**Requirements:**
- User consent for data collection
- Data minimization (collect only necessary data)
- Right to access, rectify, delete personal data
- Data breach notification (72 hours)
- Data localization (store in Indonesia)

**Implementation Checklist:**
- [x] User consent flow on registration
- [x] Privacy policy in Indonesian language
- [x] Data deletion API endpoint
- [x] Data export functionality (user can download their data)
- [x] Data stored in Azure Southeast Asia region (Singapore/Jakarta)

**Code Example:**
```python
# PDPN Article 14: User consent
def register_user_with_consent():
 consent_text = """
 Dengan mendaftar, Anda menyetujui:
 - Pengumpulan data pribadi (nama, email, nomor telepon)
 - Penggunaan data untuk layanan PWBI
 - Penyimpanan data di server Indonesia/Asia Tenggara

 Anda berhak mengakses, memperbaiki, atau menghapus data Anda kapan saja.
 """

 # User must explicitly accept
 if not request.json.get('consent_accepted'):
 return {'error': 'Harap setujui kebijakan privasi'}, 400
```

---

## 2. Bank Indonesia IT-39/2019

**Requirements:**
- Financial data encrypted at rest & in transit
- Access logging for audit trail
- Business continuity plan (disaster recovery)
- Annual security audit

**Implementation:**
- AES-256 encryption (Azure SQL TDE)
- TLS 1.3 for all API traffic
- Audit log table (all financial data access logged)
- Azure backup with 30-day retention
- Quarterly security reviews

---

## 3. Tax Compliance (PMK 48/2020)

**Invoice Requirements:**
- Invoice number (sequential, no gaps)
- Tax ID (NPWP) of business
- Customer details if B2B
- Itemized breakdown
- 10-year retention requirement

**Implementation:**
```sql
-- Invoice number generation (sequential)
CREATE SEQUENCE invoice_number_seq
START WITH 1
INCREMENT BY 1;

CREATE TABLE invoices (
 invoice_id UNIQUEIDENTIFIER PRIMARY KEY,
 invoice_number AS ('INV-' + FORMAT(NEXT VALUE FOR invoice_number_seq, '000000')),
 tax_id_npwp VARCHAR(20), -- Business NPWP
 customer_tax_id VARCHAR(20), -- Customer NPWP (B2B only)
 total_amount DECIMAL(18,2),
 tax_amount DECIMAL(18,2),
 created_at DATETIME2,
 -- Retention: No deletion allowed (tax law)
 deleted_at DATE NULL -- Soft delete only, never hard delete
);

-- Prevent invoice deletion
CREATE TRIGGER prevent_invoice_hard_delete
ON invoices
INSTEAD OF DELETE
AS
BEGIN
 UPDATE invoices
 SET deleted_at = GET DATE()
 WHERE invoice_id IN (SELECT invoice_id FROM deleted);
END;
```

---

**Related Documents:**
- [[products/shared-technical/security/security-architecture|Security Architecture]] - Technical implementation
- Indonesian Laws: PDPN (UU 27/2022), Bank Indonesia IT-39/2019, PMK 48/2020

**Last Updated:** 2025-12-26
**Owner:** Compliance Team
**Review Cycle:** Annually or when regulations change
