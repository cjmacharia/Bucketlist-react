
This document describes the testing approach, scope, responsibilities, and quality objectives for the Merchant Self‑Service Onboarding Portal.
The goal of this test plan is to ensure the solution meets functional, integration, security, and compliance requirements before deployment to production.

Glossary of Terms 

Acronym 

Definition 

KYC 

Know Your Customer/Business 

MID 

Merchant Identifier 

CRM 

Customer Relationship Management 

VMSS 

Third Party service for merchant screening by Visa 

AML

Anti Money Laundry

MATCH 

3rd party service provider for merchant screening by MasterCard 

1.1 Requirements
Testing is based on the approved requirements for the Merchant Self‑Service Onboarding Portal, including but not limited to:

Merchant email signup and authentication

Onboarding dashboard and progress tracking

Country, vertical, and product selection

KYC/KYB document upload and update

OCR verification (au10tix)

AML / Screening (LexisNexis, VMSS, MATCH)

CRM account creation (Zoho)

MID creation and activation on 3gg 

Notifications (merchant and internal)

Role‑based access for backend users

image-20260429-095517.png
Requirements are documented in:

Product requirements / Jira tickets

[POP-863] Digital Merchant Onboarding - JIRA

Solution Architecture documentation

dpopay-Digital Merchant Onboarding - Architecture - Confluence

Stakeholder walkthroughs and clarifications

DOU

1.2 Scope
1.2.1 In Scope
The following testing activities are included:

Functional testing of onboarding flows

Validation of mandatory fields and document rules

Integration testing with:

Zoho CRM

AU10tix (OCR)

Screening (VMSS, Match, LexisNexis)

3G System (make sure auto created merchant can action like other merchants)

Role‑based access control testing (sales / AFU team)

Notification testing (email & internal alerts)

Regression testing on impacted areas

Support for UAT and post‑deployment validation

1.2.2 Out of Scope
Automatic screening for social media platforms.

Items not in the DOU

1.3 Quality Objective
The quality objectives for this feature are:

Ensure 100% requirement coverage

Validate that onboarding flows are compliant

Confirm correct handling of failures, rejections, and manual reviews

1.4. Roles and Responsibilities
1.4.1 QA team member
Responsible for the overall quality of the criteria given.

Communicate with relevant stakeholders to ensure testing criteria is established and understandable, including and not limited to the dev team lead, the product owner, QA Team Lead, Architect

Test cases are reviewed.

All test cases cover the objectives highlighted above.

1.4.2 QA Team Lead
Supporting QA team member with any missing information needed

Involving stakeholders to sign off Technical QA testing

Post deployment testing assistance

1.4.3 Stakeholders
Assist QA Team member with all needed information

Review and sign off Test Case Executions done by QA team member

Post deployment testing and sign off

1.5 Entry and exit Criteria
1.5.1 Entry Criteria
The following conditions need to be met before testing will be begin on an any ticket handed over to Technical QA:

Ticket has all relevant and descriptive information about the requirement

Acceptance Criteria is on the ticket

Developer has a handover to QA on the change and how the code was implemented and the impact to the system

Developer gives basic evidence on an end-to-end test of the code that has been implemented

1.5.2 Exit Criteria
Testing is considered complete when:

All planned test cases are executed

Test cases and executions are linked to the tickets.

No open critical or high severity defects.

Stakeholders have reviewed and signed off evidence

Post‑deployment testing is performed

2   Testing Strategy
The QA team will apply risk‑based testing to ensure critical onboarding and compliance flows receive maximum coverage.

2.1 Testing Types Included
The following testing types will be executed:

Functional Testing
Validate system behaviour against requirements

Smoke Testing
Ensure build stability after deployment

Integration Testing
Validate data flow across CRM, OCR, Screening, and 3G system

Regression Testing
- Ensure existing functionality is unaffected

User Acceptance Testing (UAT)
Performed by stakeholders to validate business readiness

2.2 Key Test Scenarios (High Level)
The testing scope includes but is not limited to:

Validation of merchant signup flows, including email verification, token validity, expiry, and reuse scenarios

Verification of dashboard behaviour, ensuring progress and onboarding stages are displayed correctly as the onboarding process continues

Validation of KYC/KYB enforcement rules, including mandatory document handling, missing documents, and update scenarios

Verification of OCR outcomes, including acceptable confidence levels, low‑confidence handling, and discrepancy identification

Coverage of AML decision paths, including screening pass, review, and fail outcomes and their impact on onboarding progression.

Validation of manual review and escalation handling within CRM (Zoho) when automated checks require manual intervention

Verification of account provisioning outcomes, including CRM updates, MID creation behaviour in the 3G system, and sending merchants the live credentials

Validation of notification triggers, ensuring merchants and internal teams receive correct notifications on status changes

Verification of role‑based backend permissions, ensuring access is restricted appropriately across sales, AFU, and operational users

3. Test Deliverables
The following artifacts will be produced:

QA Traceability Matrix  

UAT sign‑off evidence

Post‑deployment test report
