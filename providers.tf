Detailed Step by Step Flow 

1) User → DPO Website 

User lands on DPO main website and clicks the signup button and provides email, phone, name, etc. 

And user submits the details  

 

2) DPO Website → Onboarding Portal 

Posts onboarding intent to portal. 

Data: email (if captured), referral source (sales rep URL/code, event code, organic). 

Portal creates temporary sessions; prepares secure signup link. 

 

 

3) Onboarding Portal → User 

Sends timebound, single use, tokenized signup link (with referral metadata). 

Security: Token expiry. 

 

 

4) User → Onboarding Portal 

User clicks the link sent to email provided on signup, 

 Token is validated and session initiated. 

The Dashboard shows (progress tracker, steps. 

User also uploads KYC KYC/KYB docs (UBO ID, CR12, registration certs).  

User selects country, vertical, product; accepts T&Cs as needed. 

 

5) Onboarding Portal → CRM 

Creates Lead via CRM API. 

Data submitted includes but not limited to name, email, country, verticals, product, referral source, session ID etc. 

CRM returns Lead ID which the portal stores as linkage. 

 

6) Onboarding Portal → AU10tix 

The portal will also concurrently: 

Submit IDs to AU10tix for OCR & verification. 

 

7) AU10tix → Onboarding Portal 

Returns Pass/Fail, extracted fields, and confidence. 

Portal reconciles OCR data vs user entered data,  

flags discrepancies. 

The dashboard updates the KYC verification status. 

8) Onboarding Portal → Screening Connector 

Compiles merchant, business, UBO details. 

Submits for screening (LexisNexis, VMSS, MATCH). 

Asynchronous run with correlation ID. 

9) Screening Connector → Onboarding Portal 

Returns Pass/Review/Fail with risk flags. This will be available on Zoho as both an entry on profile and as a PDF compilation 

Portal updates status and triggers review workflow if needed. Considering all positive hits, PEP status, Country 

Audit entry captured. 

10) Onboarding Portal → CRM 

Creates/updates Account & Contacts using verified data. 

Sets onboarding stage, compliance status, assigned Sales Rep. 

 

11) Onboarding Portal → 3GDPO System 

Sends activation requests for MID creation 

3G DPO returns MID and activation status. 

Portal persists in MID and readiness. 

 

12) Onboarding Portal → User 

Sends completion notification (email + in portal). 

Provides next steps (credentials, go live checklist, support contacts). 

Enable access to live services & dashboards. 
