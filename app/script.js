var entityId = "";
var entityName = "";
var relatedModuleName = "Portal_Items";
var curr_status = {};
var idmap = {
    "Super Visa": "superVisa",
    "VISIT VISA PARENTS": "VisitorParents",
    "SPOUSE VISIT VISA": "SpousalVisitorVisa",
    "SOWP- SPOUSE ON STUDY PERMIT": "WorkPermitSpouseOnStudyPermit",
    "SOWP-SPOUSE ON WP OUTSIDE": "SOWPSpouseOutside",
    "PGWP": "ApplicantDocuments",
}
var formContentDiv = document.getElementById('form-content');
var formHeaderDiv = document.getElementById('form-header');
var subHeaderDiv = document.getElementById('sub-header');

const formConfigurations = {
    "superVisa": {
        "header": "Super Visa Application",
        "subHeader": "NB: The documents scanned with Cam Scanner will not be accepted",
        "sections": [
            {
                "id": "identity_documents",
                "header": "1. Identity documents:",
                "items": [
                    {
                        "id": "pr-card-status",
                        "label": "PR Cards(Husband and Wife)",
                        "file": "pr-card-file",
                        "statusId": "pr-card-status"
                    },
                    {
                        "id": "passports-status",
                        "label": "PASSPORTS",
                        "file": "passports-file",
                        "statusId": "passports-status"
                    }
                ]
            },
            {
                "id": "relationship_documents",
                "header": "2. Proof of relationship docs:",
                "items": [
                    {
                        "id": "birth-certificates-status",
                        "label": "Birth certificates",
                        "file": "birth-certificates-file",
                        "statusId": "birth-certificates-status"
                    },
                    {
                        "id": "education-docs-status",
                        "label": "Any education docs showing parents name on it",
                        "file": "education-docs-file",
                        "statusId": "education-docs-status"
                    },
                    {
                        "id": "marriage-certificate-status",
                        "label": "Marriage certificate/ Marriage affidavit",
                        "file": "marriage-certificate-file",
                        "statusId": "marriage-certificate-status"
                    },
                    {
                        "id": "family-registration-status",
                        "label": "Family registration docs (for clients from Pakistan)",
                        "file": "family-registration-file",
                        "statusId": "family-registration-status"
                    },
                    {
                        "id": "indian-passport",
                        "label": "Indian passport or any education document",
                        "file": "indian-passport-file",
                        "statusId": "indian-passport-status"
                    }
                ]
            },
            {
                "id": "employment_docs",
                "header": "3. Employment docs:",
                "items": [
                    {
                        "id": "employment-letter-status",
                        "label": "Job/Employment letter",
                        "file": "employment-letter-file",
                        "statusId": "employment-letter-status"
                    },
                    {
                        "id": "pay-slips-status",
                        "label": "Pay slips",
                        "file": "pay-slips-file",
                        "statusId": "pay-slips-status"
                    },
                    {
                        "id": "notice-of-assessment-status",
                        "label": "Notice Of Assessment And T4",
                        "file": "notice-of-assessment-file",
                        "statusId": "notice-of-assessment-status"
                    },
                    {
                        "id": "additional-income-proof-status",
                        "label": "Proof of additional income (incorporation registration)",
                        "file": "additional-income-proof-file",
                        "statusId": "additional-income-proof-status"
                    }
                ]
            },
            {
                "id": "proof_of_funds",
                "header": "4. Proof of funds:",
                "items": [
                    {
                        "id": "bank-statements-status",
                        "label": "Bank statements",
                        "file": "bank-statements-file",
                        "statusId": "bank-statements-status"
                    }
                ]
            },
            {
                "id": "not_mandatory_docs",
                "header": "5. Not Mandatory:",
                "items": [
                    {
                        "id": "house-title-status",
                        "label": "House title",
                        "file": "house-title-file",
                        "statusId": "house-title-status"
                    }
                ]
            },
            {
                "id": "applicant_documents",
                "header": "* Please select Applicant’s documents: *",
                "items": []
            }
        ],
        "applicant_documents": {
            "Mother": [
                {
                    "id": "mother-questionnaire-status",
                    "label": "Questionnaire Form",
                    "file": "mother-questionnaire-file",
                    "statusId": "mother-questionnaire-status"
                },
                {
                    "id": "mother-passport-status",
                    "label": "Mother Passport",
                    "file": "mother-passport-file",
                    "statusId": "mother-passport-status"
                },
                {
                    "id": "mother-medical-insurance-status",
                    "label": "Mother Medical insurance",
                    "file": "medical-insurance-file",
                    "statusId": "mother-medical-insurance-status"
                },
                {
                    "id": "mother-medical-sheet-status",
                    "label": "Mother E medical sheet",
                    "file": "medical-sheet-file",
                    "statusId": "mother-medical-sheet-status"
                },
                {
                    "id": "mother-marriage-status",
                    "label": "Mother Marriage certificate/ marriage affidavit",
                    "file": "mother-marriage-file",
                    "statusId": "mother-marriage-status"
                },
                {
                    "id": "mother-rep-status",
                    "label": "Mother Use of rep",
                    "file": "mother-rep-file",
                    "statusId": "mother-rep-status"
                },
                {
                    "id": "mother-80-status",
                    "label": "Mother Digital photo (If age is above 80)",
                    "file": "mother-80-file",
                    "statusId": "mother-80-status"
                }
            ],
            "Father": [
                {
                    "id": "father-questionnaire-status",
                    "label": "Questionnaire Form",
                    "file": "father-questionnaire-file",
                    "statusId": "father-questionnaire-status"
                },
                {
                    "id": "father-passport-status",
                    "label": "Father Passport",
                    "file": "father-passport-file",
                    "statusId": "father-passport-status"
                },
                {
                    "id": "father-medical-insurance-status",
                    "label": "Father Medical insurance",
                    "file": "father-medical-insurance-file",
                    "statusId": "father-medical-insurance-status"
                },
                {
                    "id": "father-medical-sheet-status",
                    "label": "Father E medical sheet",
                    "file": "father-medical-sheet-file",
                    "statusId": "father-medical-sheet-status"
                },
                {
                    "id": "father-marriage-status",
                    "label": "Father Marriage certificate/ marriage affidavit",
                    "file": "father-marriage-file",
                    "statusId": "father-marriage-status"
                },
                {
                    "id": "father-rep-status",
                    "label": "Father Use of rep",
                    "file": "father-rep-file",
                    "statusId": "father-rep-status"
                },
                {
                    "id": "father-80-status",
                    "label": "Father Digital photo (If age is above 80)",
                    "file": "father-80-file",
                    "statusId": "father-80-status"
                }
            ]
        }
    },
    VisitorParents: {
        "header": "Visitor Visa Application",
        "subHeader": "Documents for Parents",
        "sections": [
            {
                "id": "parents_documents",
                "header": "1. Documents for Parents",
                "items": [
                    { "id": "passports-stamps-status", "label": "Passports with all stamps, visas, and entry and exit stamps", "file": "passports-stamps-file", "statusId": "passports-stamps-status" },
                    { "id": "spouse-passport-status", "label": "Spouse passport (if applicable)", "file": "spouse-passport-file", "statusId": "spouse-passport-status" },
                    { "id": "marriage-certificate-status", "label": "Marriage certificate (if both parents are applying)", "file": "marriage-certificate-file", "statusId": "marriage-certificate-status" },
                    { "id": "photo-scanned-status", "label": "1 photo scanned with white background", "file": "photo-scanned-file", "statusId": "photo-scanned-status" }
                ]
            },
            {
                "id": "ties_home_country_finance",
                "header": "2. Ties to Home Country and Finance Available in India",
                "items": [
                    { "id": "property-documents-status", "label": "Property documents including house and land", "file": "property-documents-file", "statusId": "property-documents-status" },
                    { "id": "income-proof-status", "label": "Income proof", "file": "income-proof-file", "statusId": "income-proof-status" },
                    { "id": "job-letter-status", "label": "Current job letter", "file": "job-letter-file", "statusId": "job-letter-status" },
                    { "id": "leave-sanction-status", "label": "Leave sanction letter", "file": "leave-sanction-file", "statusId": "leave-sanction-status" },
                    { "id": "income-tax-documents-status", "label": "Income tax documents", "file": "income-tax-documents-file", "statusId": "income-tax-documents-status" },
                    { "id": "bank-statement-status", "label": "Bank statement", "file": "bank-statement-file", "statusId": "bank-statement-status" },
                    { "id": "paystubs-status", "label": "Paystubs", "file": "paystubs-file", "statusId": "paystubs-status" },
                    { "id": "business-documents-status", "label": "Business documents", "file": "business-documents-file", "statusId": "business-documents-status" },
                    { "id": "finance-available-status", "label": "Finance available", "file": "finance-available-file", "statusId": "finance-available-status" }
                ]
            },
            {
                "id": "purpose_of_visit",
                "header": "3. Purpose of Visit",
                "items": [
                    { "id": "itinerary-status", "label": "Itinerary", "file": "itinerary-file", "statusId": "itinerary-status" },
                    { "id": "returned-ticket-status", "label": "Returned ticket", "file": "returned-ticket-file", "statusId": "returned-ticket-status" },
                    { "id": "duration-of-stay-status", "label": "Duration of stay (if available)", "file": "duration-of-stay-file", "statusId": "duration-of-stay-status" }
                ]
            },
            {
                "id": "previous_rejections",
                "header": "4. Letter of Previous Rejections (if any)",
                "items": [
                    { "id": "rejection-letter-status", "label": "Rejection letter", "file": "rejection-letter-file", "statusId": "rejection-letter-status" }
                ]
            },
            {
                "id": "documents_from_inviter",
                "header": "5. Documents from Inviter",
                "items": [
                    { "id": "birth-certificate-status", "label": "Birth certificate (as proof of parents)", "file": "birth-certificate-file", "statusId": "birth-certificate-status" },
                    { "id": "job-confirmation-status", "label": "Job confirmation letter including payslips", "file": "job-confirmation-file", "statusId": "job-confirmation-status" },
                    { "id": "business-registration-status", "label": "In case self-employed - Business Registration", "file": "business-registration-file", "statusId": "business-registration-status" },
                    { "id": "business-license-status", "label": "Business license", "file": "business-license-file", "statusId": "business-license-status" },
                    { "id": "business-bank-account-status", "label": "Business bank account", "file": "business-bank-account-file", "statusId": "business-bank-account-status" },
                    { "id": "business-tax-documents-status", "label": "Business tax documents", "file": "business-tax-documents-file", "statusId": "business-tax-documents-status" },
                    { "id": "notice-assessment-status", "label": "Notice of assessment/Option C printout", "file": "notice-assessment-file", "statusId": "notice-assessment-status" },
                    { "id": "other-income-proof-status", "label": "Other income proof (if any)", "file": "other-income-proof-file", "statusId": "other-income-proof-status" },
                    { "id": "bank-statement-inviter-status", "label": "Bank statement (salary deposited and other income proof)", "file": "bank-statement-inviter-file", "statusId": "bank-statement-inviter-status" },
                    { "id": "canadian-status-proof-status", "label": "Canadian Status proof (PR Card or Canadian Passport)", "file": "canadian-status-proof-file", "statusId": "canadian-status-proof-status" },
                    { "id": "indian-passport-inviter-status", "label": "First and last page of Indian Passport (if applicable)", "file": "indian-passport-inviter-file", "statusId": "indian-passport-inviter-status" }
                ]
            }
        ]
    },
    "SpousalVisitorVisa": {
        "header": "Spousal Visitor Visa Application",
        "subHeader": "Documents for Spousal Visitor Visa",
        "sections": [
            {
                "id": "spouse_documents",
                "header": "1. Documents for Spousal Visitor Visa",
                "items": [
                    { "id": "passports-stamps-status", "label": "Passports with all stamps, visas, and entry and exit stamps", "file": "passports-stamps-file", "statusId": "passports-stamps-status" },
                    { "id": "photo-status", "label": "1 photo (specifications attached)", "file": "photo-file", "statusId": "photo-status" },
                    { "id": "property-documents-status", "label": "Property documents including house and land", "file": "property-documents-file", "statusId": "property-documents-status" },
                    { "id": "income-proof-status", "label": "Income proof", "file": "income-proof-file", "statusId": "income-proof-status" },
                    { "id": "job-letter-status", "label": "Current job letter", "file": "job-letter-file", "statusId": "job-letter-status" },
                    { "id": "leave-sanction-status", "label": "Leave sanction letter", "file": "leave-sanction-file", "statusId": "leave-sanction-status" },
                    { "id": "income-tax-documents-status", "label": "Income tax documents", "file": "income-tax-documents-file", "statusId": "income-tax-documents-status" },
                    { "id": "bank-statement-status", "label": "Bank statement", "file": "bank-statement-file", "statusId": "bank-statement-status" },
                    { "id": "paystubs-status", "label": "Paystubs", "file": "paystubs-file", "statusId": "paystubs-status" },
                    { "id": "business-documents-status", "label": "Business documents", "file": "business-documents-file", "statusId": "business-documents-status" },
                    { "id": "finance-available-status", "label": "Finance available", "file": "finance-available-file", "statusId": "finance-available-status" },
                    { "id": "itinerary-status", "label": "Itinerary", "file": "itinerary-file", "statusId": "itinerary-status" },
                    { "id": "returned-ticket-status", "label": "Returned ticket", "file": "returned-ticket-file", "statusId": "returned-ticket-status" },
                    { "id": "duration-of-stay-status", "label": "Duration of stay (if available)", "file": "duration-of-stay-file", "statusId": "duration-of-stay-status" },
                    { "id": "rejection-letter-status", "label": "Letter of previous rejections (if any)", "file": "rejection-letter-file", "statusId": "rejection-letter-status" },
                    { "id": "marriage-certificate-status", "label": "Marriage certificate", "file": "marriage-certificate-file", "statusId": "marriage-certificate-status" },
                    { "id": "relationship-proof-documents-status", "label": "Relationship proof documents - chats, pictures, wedding pictures, call screenshots", "file": "relationship-proof-documents-file", "statusId": "relationship-proof-documents-status" }
                ]
            },
            {
                "id": "documents_from_inviter",
                "header": "2. Documents from Inviter",
                "items": [
                    { "id": "birth-certificate-status", "label": "Birth certificate (as proof of parents)", "file": "birth-certificate-file", "statusId": "birth-certificate-status" },
                    { "id": "job-confirmation-status", "label": "Job confirmation letter including pay slips", "file": "job-confirmation-file", "statusId": "job-confirmation-status" },
                    { "id": "business-registration-status", "label": "In case self-employed - Business Registration", "file": "business-registration-file", "statusId": "business-registration-status" },
                    { "id": "business-license-status", "label": "Business license", "file": "business-license-file", "statusId": "business-license-status" },
                    { "id": "business-bank-account-status", "label": "Business bank account", "file": "business-bank-account-file", "statusId": "business-bank-account-status" },
                    { "id": "business-tax-documents-status", "label": "Business tax documents", "file": "business-tax-documents-file", "statusId": "business-tax-documents-status" },
                    { "id": "notice-assessment-status", "label": "Notice of assessment/Option C printout", "file": "notice-assessment-file", "statusId": "notice-assessment-status" },
                    { "id": "other-income-proof-status", "label": "Other income proof (if any)", "file": "other-income-proof-file", "statusId": "other-income-proof-status" },
                    { "id": "bank-statement-inviter-status", "label": "Bank statement (salary deposited and other income proof)", "file": "bank-statement-inviter-file", "statusId": "bank-statement-inviter-status" },
                    { "id": "canadian-status-proof-status", "label": "Canadian Status proof (PR Card or Canadian Passport)", "file": "canadian-status-proof-file", "statusId": "canadian-status-proof-status" },
                    { "id": "indian-passport-inviter-status", "label": "First and last page of Indian Passport (if applicable)", "file": "indian-passport-inviter-file", "statusId": "indian-passport-inviter-status" }
                ]
            }
        ]
    },
    "SOWPSpouseOutside": {
        "header": "Spousal Open Work Permit Application - Outside Canada",
        "subHeader": "Documents required for the principal applicant (spouse outside Canada)",
        "sections": [
            {
                "id": "information_checklist",
                "header": "1. Information Checklist",
                "items": [
                    { "id": "info-checklist-status", "label": "Information Checklist", "file": "info-checklist-file", "statusId": "info-checklist-status" }
                ]
            },
            {
                "id": "passport_travel_document",
                "header": "2. Passport or Travel Document",
                "items": [
                    { "id": "passport-status", "label": "New and Old Passports with all the Entry and Exit stamps", "file": "passport-file", "statusId": "passport-status" }
                ]
            },
            {
                "id": "status_current_country",
                "header": "3. Status in Current Country (if other than Country of Residence)",
                "items": [
                    { "id": "visa-copy-status", "label": "Visa Copy", "file": "visa-copy-file", "statusId": "visa-copy-status" },
                    { "id": "resident-permit-status", "label": "Resident Permit Copy", "file": "resident-permit-file", "statusId": "resident-permit-status" }
                ]
            },
            {
                "id": "photo",
                "header": "4. Photo",
                "items": [
                    { "id": "photo-status", "label": "Photo (per specifications)", "file": "photo-file", "statusId": "photo-status" }
                ]
            },
            {
                "id": "education",
                "header": "5. Education",
                "items": [
                    { "id": "education-documents-status", "label": "All Marksheets and Degree/Diploma starting from Grade 10", "file": "education-documents-file", "statusId": "education-documents-status" }
                ]
            },
            {
                "id": "employment_salaried",
                "header": "6. Employment (Salaried)",
                "items": [
                    { "id": "itr-status", "label": "Income Tax Returns (Past 3 years)", "file": "itr-file", "statusId": "itr-status" },
                    { "id": "employment-confirmation-status", "label": "Recent Employment Confirmation Letter", "file": "employment-confirmation-file", "statusId": "employment-confirmation-status" },
                    { "id": "pay-slips-status", "label": "Pay Slips (3-4)", "file": "pay-slips-file", "statusId": "pay-slips-status" },
                    { "id": "salary-bank-statement-status", "label": "Bank Account Statement showing salary deposited", "file": "salary-bank-statement-file", "statusId": "salary-bank-statement-status" },
                    { "id": "previous-employment-letters-status", "label": "Previous Employment Letters", "file": "previous-employment-letters-file", "statusId": "previous-employment-letters-status" }
                ]
            },
            {
                "id": "employment_self_employed",
                "header": "Employment (Self-Employed)",
                "items": [
                    { "id": "itr-self-employed-status", "label": "Income Tax Return (Past 3 years)", "file": "itr-self-employed-file", "statusId": "itr-self-employed-status" },
                    { "id": "self-declaration-status", "label": "Self-declaration on Letterhead", "file": "self-declaration-file", "statusId": "self-declaration-status" },
                    { "id": "business-license-status", "label": "Business License", "file": "business-license-file", "statusId": "business-license-status" },
                    { "id": "pan-card-status", "label": "Pan Card", "file": "pan-card-file", "statusId": "pan-card-status" },
                    { "id": "business-card-status", "label": "Business Card", "file": "business-card-file", "statusId": "business-card-status" },
                    { "id": "self-employed-bank-statements-status", "label": "Bank Statements", "file": "self-employed-bank-statements-file", "statusId": "self-employed-bank-statements-status" }
                ]
            },
            {
                "id": "employment_agriculture",
                "header": "Employment (Agriculture)",
                "items": [
                    { "id": "itr-agriculture-status", "label": "Income Tax Return (Past 3 years)", "file": "itr-agriculture-file", "statusId": "itr-agriculture-status" },
                    { "id": "j-forms-status", "label": "J-Forms with English Translation", "file": "j-forms-file", "statusId": "j-forms-status" },
                    { "id": "income-certificate-status", "label": "Income Certificate (if available)", "file": "income-certificate-file", "statusId": "income-certificate-status" }
                ]
            },
            {
                "id": "funds",
                "header": "7. Funds",
                "items": [
                    { "id": "savings-bank-statement-status", "label": "Savings - Balance Certificate and Bank Statement (past 6 months)", "file": "savings-bank-statement-file", "statusId": "savings-bank-statement-status" },
                    { "id": "fixed-deposit-status", "label": "Fixed Deposit", "file": "fixed-deposit-file", "statusId": "fixed-deposit-status" },
                    { "id": "post-office-savings-status", "label": "Post Office Savings", "file": "post-office-savings-file", "statusId": "post-office-savings-status" }
                ]
            },
            {
                "id": "other_supporting_documents",
                "header": "8. Other Supporting Documents (Optional)",
                "items": [
                    { "id": "ca-report-status", "label": "Chartered Accountant Report", "file": "ca-report-file", "statusId": "ca-report-status" },
                    { "id": "property-valuation-report-status", "label": "Property Valuation Report", "file": "property-valuation-report-file", "statusId": "property-valuation-report-status" },
                    { "id": "affidavit-of-support-status", "label": "Affidavit of Support (If Parents are supporting)", "file": "affidavit-of-support-file", "statusId": "affidavit-of-support-status" }
                ]
            },
            {
                "id": "sponsor_documents",
                "header": "Sponsor Documents (You)",
                "items": [
                    { "id": "proof-of-relationship-status", "label": "Proof of Relationship", "file": "proof-of-relationship-file", "statusId": "proof-of-relationship-status" },
                    { "id": "marriage-certificate-status", "label": "Marriage Certificate", "file": "marriage-certificate-file", "statusId": "marriage-certificate-status" },
                    { "id": "divorce-death-certificate-status", "label": "Divorce Certificate/Death Certificate (If Applicable)", "file": "divorce-death-certificate-file", "statusId": "divorce-death-certificate-status" },
                    { "id": "wedding-photos-status", "label": "Traditional before wedding and wedding photos", "file": "wedding-photos-file", "statusId": "wedding-photos-status" },
                    { "id": "post-wedding-photos-status", "label": "Post wedding photos taken on different days at different places", "file": "post-wedding-photos-file", "statusId": "post-wedding-photos-status" },
                    { "id": "honeymoon-photos-status", "label": "Honeymoon trip pictures (tickets, hotel receipts, boarding passes, etc.)", "file": "honeymoon-photos-file", "statusId": "honeymoon-photos-status" },
                    { "id": "love-marriage-photos-status", "label": "Love marriage photos (if applicable)", "file": "love-marriage-photos-file", "statusId": "love-marriage-photos-status" },
                    { "id": "social-media-photos-status", "label": "Photos posted with spouse on social media", "file": "social-media-photos-file", "statusId": "social-media-photos-status" },
                    { "id": "chat-call-records-status", "label": "Chat and Call records", "file": "chat-call-records-file", "statusId": "chat-call-records-status" },
                    { "id": "relationship-story-status", "label": "Your relationship story", "file": "relationship-story-file", "statusId": "relationship-story-status" },
                    { "id": "joint-bank-account-status", "label": "Any joint bank account held (NOT MANDATORY if available)", "file": "joint-bank-account-file", "statusId": "joint-bank-account-status" },
                    { "id": "money-gift-receipts-status", "label": "Money/Gift sending receipts", "file": "money-gift-receipts-file", "statusId": "money-gift-receipts-status" },
                    { "id": "id-proof-with-spouse-status", "label": "ID proof with spouse name", "file": "id-proof-with-spouse-file", "statusId": "id-proof-with-spouse-status" },
                    { "id": "wedding-cards-receipts-status", "label": "Wedding cards, shopping receipts, etc.", "file": "wedding-cards-receipts-file", "statusId": "wedding-cards-receipts-status" }
                ]
            },
            {
                "id": "refusals",
                "header": "9. Refusals",
                "items": [
                    { "id": "previous-refusals-status", "label": "Previous Refusal letters of Canada or any other country", "file": "previous-refusals-file", "statusId": "previous-refusals-status" }
                ]
            },
            {
                "id": "sponsor_status_canada",
                "header": "10. Sponsor Status in Canada",
                "items": [
                    { "id": "valid-work-permit-status", "label": "Valid Work Permit (minimum 6 months validity required)", "file": "valid-work-permit-file", "statusId": "valid-work-permit-status" }
                ]
            },
            {
                "id": "sponsor_employment_documents",
                "header": "11. Sponsor Employment Documents",
                "items": [
                    { "id": "employment-verification-status", "label": "Current Employment Verification Letter", "file": "employment-verification-file", "statusId": "employment-verification-status" },
                    { "id": "pay-stubs-status", "label": "Minimum 3 Pay stubs", "file": "pay-stubs-file", "statusId": "pay-stubs-status" },
                    { "id": "salary-bank-statement-sponsor-status", "label": "Bank Statement showing salary deposits (minimum 3 months old)", "file": "salary-bank-statement-sponsor-file", "statusId": "salary-bank-statement-sponsor-status" },
                    { "id": "provincial-nomination-status", "label": "Provincial Nomination (if applicable)", "file": "provincial-nomination-file", "statusId": "provincial-nomination-status" },
                    { "id": "federal-ee-file-number-status", "label": "Federal/EE file number", "file": "federal-ee-file-number-file", "statusId": "federal-ee-file-number-status" },
                    { "id": "notice-of-assessment-status", "label": "Notice of Assessment or T4 for the previous year", "file": "notice-of-assessment-file", "statusId": "notice-of-assessment-status" },
                    { "id": "lmia-copy-status", "label": "LMIA copy (if applicable)", "file": "lmia-copy-file", "statusId": "lmia-copy-status" },
                    { "id": "job-offer-status", "label": "Job offer (if applicable)", "file": "job-offer-file", "statusId": "job-offer-status" },
                    { "id": "job-contract-status", "label": "Job Contract (if applicable)", "file": "job-contract-file", "statusId": "job-contract-status" }
                ]
            },
            {
                "id": "funds_sponsor",
                "header": "12. Sponsor Funds",
                "items": [
                    { "id": "bank-savings-status", "label": "Bank Savings", "file": "bank-savings-file", "statusId": "bank-savings-status" },
                    { "id": "investments-status", "label": "Investments", "file": "investments-file", "statusId": "investments-status" }
                ]
            },
            {
                "id": "sponsor_passport",
                "header": "13. Sponsor Passport",
                "items": [
                    { "id": "passport-pages-status", "label": "Passport front and last page and stamp pages if traveled for wedding", "file": "passport-pages-file", "statusId": "passport-pages-status" }
                ]
            }
        ]
    },
    "WorkPermitSpouseOnStudyPermit": {
        "header": "Work Permit Application - Spouse on Study Permit",
        "subHeader": "Documents required for the principal applicant (spouse outside Canada)",
        "sections": [

            {
                "id": "passport_travel_documents",
                "header": "1. Passport and Travel Documents",
                "items": [
                    { "id": "passport-pages-status", "label": "Passport pages scanned (all new and old with all stamps)", "file": "passport-pages-file", "statusId": "passport-pages-status" },
                    { "id": "travel-history-status", "label": "Previous travel/visa history", "file": "travel-history-file", "statusId": "travel-history-status" },
                    { "id": "rejection-letter-status", "label": "Previous rejection letter (if applicable)", "file": "rejection-letter-file", "statusId": "rejection-letter-status" }
                ]
            },
            {
                "id": "birth_certificate",
                "header": "2. Birth Certificate",
                "items": [
                    { "id": "birth-certificate-status", "label": "Principal applicant and children(s) birth certificate (if applicable)", "file": "birth-certificate-file", "statusId": "birth-certificate-status" },
                    { "id": "ssc-certificate-status", "label": "SSC certificate (if birth certificate not available)", "file": "ssc-certificate-file", "statusId": "ssc-certificate-status" },
                    { "id": "english-translation-status", "label": "English Translation (if applicable)", "file": "english-translation-file", "statusId": "english-translation-status" }
                ]
            },
            {
                "id": "education_documents",
                "header": "3. Education Documents",
                "items": [
                    { "id": "education-documents-status", "label": "Education documents (starting from the 12th to the higher level completed - Mark Sheets and degree/diplomas)", "file": "education-documents-file", "statusId": "education-documents-status" }
                ]
            },
            {
                "id": "marriage_certificate",
                "header": "4. Marriage Certificate",
                "items": [
                    { "id": "marriage-certificate-status", "label": "Marriage certificate", "file": "marriage-certificate-file", "statusId": "marriage-certificate-status" }
                ]
            },
            {
                "id": "employment_documents",
                "header": "5. Employment Documents",
                "items": [
                    { "id": "employment-confirmation-status", "label": "Employment Confirmation letter from current employer", "file": "employment-confirmation-file", "statusId": "employment-confirmation-status" },
                    { "id": "salary-bank-statement-status", "label": "Bank statement showing salary deposited", "file": "salary-bank-statement-file", "statusId": "salary-bank-statement-status" },
                    { "id": "pay-slips-status", "label": "Pay slips (recent 2-3)", "file": "pay-slips-file", "statusId": "pay-slips-status" },
                    { "id": "previous-job-experience-letters-status", "label": "Previous job experience letters", "file": "previous-job-experience-letters-file", "statusId": "previous-job-experience-letters-status" }
                ]
            },
            {
                "id": "self_employment_documents",
                "header": "Self Employment Documents",
                "items": [
                    { "id": "self-declaration-status", "label": "Self declaration on Letterhead", "file": "self-declaration-file", "statusId": "self-declaration-status" },
                    { "id": "business-license-status", "label": "Business License", "file": "business-license-file", "statusId": "business-license-status" },
                    { "id": "pan-card-status", "label": "Pan Card", "file": "pan-card-file", "statusId": "pan-card-status" },
                    { "id": "business-card-status", "label": "Business Card", "file": "business-card-file", "statusId": "business-card-status" }
                ]
            },
            {
                "id": "agriculture_income_documents",
                "header": "Agriculture Income Documents",
                "items": [
                    { "id": "income-certificate-status", "label": "Income Certificate", "file": "income-certificate-file", "statusId": "income-certificate-status" },
                    { "id": "j-forms-status", "label": "J-Forms", "file": "j-forms-file", "statusId": "j-forms-status" },
                    { "id": "agriculture-bank-statements-status", "label": "Bank Statements", "file": "agriculture-bank-statements-file", "statusId": "agriculture-bank-statements-status" },
                    { "id": "itr-agriculture-status", "label": "Income Tax Returns (Agriculture - Last 3 years)", "file": "itr-agriculture-file", "statusId": "itr-agriculture-status" }
                ]
            },
            {
                "id": "funds",
                "header": "6. Funds",
                "items": [
                    { "id": "bank-statement-status", "label": "Bank statement (last 6 months)", "file": "bank-statement-file", "statusId": "bank-statement-status" },
                    { "id": "fixed-deposit-status", "label": "Fixed deposit proof (if available)", "file": "fixed-deposit-file", "statusId": "fixed-deposit-status" },
                    { "id": "ca-report-status", "label": "Chartered Accountant Report (Shows Movable and Immovable Assets)", "file": "ca-report-file", "statusId": "ca-report-status" },
                    { "id": "property-evaluation-status", "label": "Property evaluation", "file": "property-evaluation-file", "statusId": "property-evaluation-status" },
                    { "id": "itr-status", "label": "Income Tax Returns – Last 3 years (if available)", "file": "itr-file", "statusId": "itr-status" }
                ]
            },
            {
                "id": "photo",
                "header": "7. Photo",
                "items": [
                    { "id": "photo-status", "label": "Photo - soft copy with white background", "file": "photo-file", "statusId": "photo-status" }
                ]
            },
            {
                "id": "marriage_history_documents",
                "header": "8. Marriage History Documents",
                "items": [
                    { "id": "divorce-death-certificate-status", "label": "Divorce Certificate/Death Certificate if previously married", "file": "divorce-death-certificate-file", "statusId": "divorce-death-certificate-status" }
                ]
            },
            {
                "id": "parental_support_documents",
                "header": "9. Parental Support Documents",
                "items": [
                    { "id": "affidavit-of-support-status", "label": "Affidavit of Support (if Parents' Income, Funds, and Properties are shown)", "file": "affidavit-of-support-file", "statusId": "affidavit-of-support-status" }
                ]
            },
            {
                "id": "sponsor_documents",
                "header": "10. Sponsor Documents (You)",
                "items": [
                    { "id": "sponsor-passport-status", "label": "Copy of passport front and last page", "file": "sponsor-passport-file", "statusId": "sponsor-passport-status" },
                    { "id": "valid-visa-status", "label": "Current Valid visa", "file": "valid-visa-file", "statusId": "valid-visa-status" },
                    { "id": "valid-study-permit-status", "label": "Current valid study permit (minimum 6 months)", "file": "valid-study-permit-file", "statusId": "valid-study-permit-status" },
                    { "id": "bank-statement-status", "label": "Bank Statement, GIC Account Statement", "file": "bank-statement-file", "statusId": "bank-statement-status" },
                    { "id": "good-standing-letter-status", "label": "Good standing letter from college (if available)", "file": "good-standing-letter-file", "statusId": "good-standing-letter-status" },
                    { "id": "transcripts-status", "label": "Transcripts of semesters completed successfully", "file": "transcripts-file", "statusId": "transcripts-status" },
                    { "id": "enrollment-letter-status", "label": "Enrollment letter from college", "file": "enrollment-letter-file", "statusId": "enrollment-letter-status" },
                    { "id": "fee-receipts-status", "label": "Receipts of fee paid to college", "file": "fee-receipts-file", "statusId": "fee-receipts-status" },
                    { "id": "letter-of-acceptance-status", "label": "Letter of Acceptance", "file": "letter-of-acceptance-file", "statusId": "letter-of-acceptance-status" }
                ]
            },
            {
                "id": "relationship_proof",
                "header": "11. Proof to Establish the Genuineness of Relationship",
                "items": [
                    { "id": "roka-photos-status", "label": "Roka/Engagement Photos", "file": "roka-photos-file", "statusId": "roka-photos-status" },
                    { "id": "wedding-photos-status", "label": "Traditional wedding photos - performing all rituals and customs", "file": "wedding-photos-file", "statusId": "wedding-photos-status" },
                    { "id": "family-photos-status", "label": "Photos showing both groom and bride’s families and crowd at the wedding", "file": "family-photos-file", "statusId": "family-photos-status" },
                    { "id": "post-wedding-photos-status", "label": "Post wedding photos taken on different days at different places", "file": "post-wedding-photos-file", "statusId": "post-wedding-photos-status" },
                    { "id": "honeymoon-photos-status", "label": "Honeymoon trip pictures (if available)", "file": "honeymoon-photos-file", "statusId": "honeymoon-photos-status" },
                    { "id": "love-marriage-photos-status", "label": "Love marriage photos (if applicable)", "file": "love-marriage-photos-file", "statusId": "love-marriage-photos-status" },
                    { "id": "facebook-screenshots-status", "label": "Facebook screenshots showing marital status updated", "file": "facebook-screenshots-file", "statusId": "facebook-screenshots-status" },
                    { "id": "social-media-photos-status", "label": "Any pictures posted with spouse on Facebook or any other social media account showing likes and comments", "file": "social-media-photos-file", "statusId": "social-media-photos-status" },
                    { "id": "chat-records-status", "label": "Chat records before and after wedding", "file": "chat-records-file", "statusId": "chat-records-status" },
                    { "id": "relationship-story-status", "label": "Your relationship story", "file": "relationship-story-file", "statusId": "relationship-story-status" },
                    { "id": "joint-bank-account-status", "label": "Any joint bank account held (NOT MANDATORY if available)", "file": "joint-bank-account-file", "statusId": "joint-bank-account-status" },
                    { "id": "id-proof-with-spouse-status", "label": "Any ID proof with Spouse Name", "file": "id-proof-with-spouse-file", "statusId": "id-proof-with-spouse-status" },
                    { "id": "gift-receipts-status", "label": "Gift Sent to each other – Receipts", "file": "gift-receipts-file", "statusId": "gift-receipts-status" },
                    { "id": "wedding-cards-status", "label": "Wedding Cards", "file": "wedding-cards-file", "statusId": "wedding-cards-status" }
                ]
            }
        ]
    },
    "ApplicantDocuments": {
        "header": "PGWP Documents",
        "subHeader": "Documents that need to be provided by the applicant",
        
        "sections": [
            {
                "id": "applicant_documents",
                "header": "1. Applicant Documents",
                "hint":"<div class='document-list'><strong>Applying for work permit Extension</strong><br><br><strong>Current job</strong><ul><li>Job confirmation letter with duties and responsibilities</li><li>Recent 3 pay slips</li><li>Bank statement showing salary deposit - at least recent 3 months</li><li>Tax documents (t4)</li></ul><strong>Previous job (Canada)</strong> – Experience letter with duties and responsibilities, pay slips at least 3, Bank statement showing salary deposit - at least 3 months, Tax documents (t4) (Each job)/ Outside Canada experience documents (if have)<br><br><strong>Applying for visitor to Worker (According to the profile)</strong><ul><li>Experience letter with duties and responsibilities</li><li>Pay slips</li><li>Bank statement showing salary deposit</li><li>Tax documents</li><li>Work visa</li><li>Appreciation or promotion letter</li></ul></div>",
                "items": [
                    {
                        "id": "passport-pages-status",
                        "label": "All old & new Passports (first & last page with all stamps, visas, entry and exit stamp pages)",
                        "file": "passport-pages-file",
                        "statusId": "passport-pages-status",
                        "hint":"<div class='document-list'>All old & new Passports - first & last page with all stamps, visas, entry and exit stamp pages</div>"
                    },
                    {
                        "id": "birth-certificate-status",
                        "label": "Birth certificate/affidavit",
                        "file": "birth-certificate-file",
                        "statusId": "birth-certificate-status"
                        
                    },
                    {
                        "id": "digital-photo-status",
                        "label": "1 digital photo (please refer link for photo specifications)",
                        "file": "digital-photo-file",
                        "statusId": "digital-photo-status"
                    },
                    {
                        "id": "study-permit-copies-status",
                        "label": "All study permit copies",
                        "file": "study-permit-copies-file",
                        "statusId": "study-permit-copies-status"
                    },
                    {
                        "id": "diploma-degree-status",
                        "label": "Diploma/degree/certificate",
                        "file": "diploma-degree-file",
                        "statusId": "diploma-degree-status"
                    },
                    {
                        "id": "course-completion-letter-status",
                        "label": "Course completion letter issued by the institution",
                        "file": "course-completion-letter-file",
                        "statusId": "course-completion-letter-status"
                    },
                    {
                        "id": "transcripts-status",
                        "label": "Complete transcripts",
                        "file": "transcripts-file",
                        "statusId": "transcripts-status"
                    }
                ]
            },
            {
                "id": "form_list",
                "header": "2. Mandatory Forms",
                "items": [
                    {
                        "id": "forms-id-1",
                        "label": "Form-1",
                        "file": "forms-id-1-file",
                        "statusId": "forms-id-1-status",
                        "form-link": "https://zfrmz.com/vBwkKpoMGfpkrMGl6IrH"
                    }
                ]
            }
        ]
    }


};

// Function to create a portal group (section)
function createPortalGroup(id, headerText, items) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'admin-portal-group';
    groupDiv.id = id;

    const headerDiv = document.createElement('div');
    headerDiv.className = 'category-header';
    headerDiv.textContent = headerText;
    groupDiv.appendChild(headerDiv);

    items.forEach(item => {
        groupDiv.appendChild(createPortalSubgroup(item));
    });

    return groupDiv;
}

// Function to create a portal subgroup (form item)
function createPortalSubgroup(item) {
    const subgroupDiv = document.createElement('div');
    subgroupDiv.className = 'admin-portal-subgroup';
    subgroupDiv.id = item.id;

    const label = document.createElement('label');
    label.className = 'label';
    label.textContent = item.label;
    subgroupDiv.appendChild(label);

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'admin-portal-subgroup-actions';

    const fileActionsDiv = document.createElement('div');
    fileActionsDiv.className = 'file-actions';

    const previewBtn = document.createElement('button');
    previewBtn.className = 'preview-btn hide-imp';
    previewBtn.textContent = 'Preview';
    previewBtn.onclick = () => previewFile(item.file);
    fileActionsDiv.appendChild(previewBtn);

    const acceptBtn = document.createElement('button');
    acceptBtn.className = 'accept-btn hide-imp';
    acceptBtn.dataset.statusId = item.statusId;
    acceptBtn.textContent = 'Accept';
    acceptBtn.onclick = () => accept(acceptBtn);
    fileActionsDiv.appendChild(acceptBtn);

    const rejectBtn = document.createElement('button');
    rejectBtn.className = 'reject-btn hide-imp';
    rejectBtn.dataset.statusId = item.statusId;
    rejectBtn.textContent = 'Reject';
    rejectBtn.onclick = () => reject(rejectBtn);
    fileActionsDiv.appendChild(rejectBtn);

    const Folderlink = document.createElement('button');
    Folderlink.className = 'folder-btn';
    Folderlink.dataset.statusId = item.statusId;
    Folderlink.textContent = 'Open Folder';
    Folderlink.onclick = () => folder(Folderlink);
    fileActionsDiv.appendChild(Folderlink);

    actionsDiv.appendChild(fileActionsDiv);

    const spacer = document.createElement('div');
    spacer.className = 'space';

    actionsDiv.appendChild(spacer);

    const statusDiv = document.createElement('div');
    statusDiv.className = 'admin-portal-status';
    statusDiv.id = item.statusId;
    statusDiv.textContent = 'Status: Requested';
    actionsDiv.appendChild(statusDiv);

    subgroupDiv.appendChild(actionsDiv);

    return subgroupDiv;
}

async function loadForm(formType, formData, selectedApplicantDocuments) {
    formContentDiv.innerHTML = '';
    formHeaderDiv.innerHTML = '';
    subHeaderDiv.innerHTML = '';

    formHeaderDiv.innerHTML = `<h2>${formData.header}</h2>`;
    subHeaderDiv.innerHTML = `<h1>${formData.subHeader}</h1>`;

    formData.sections.forEach(section => {
        // Check if 'applicant_documents' requires special handling
        if (section.id === 'applicant_documents' && formData.applicant_documents) {
            createApplicantSection(formType, selectedApplicantDocuments);
        } else {
            formContentDiv.appendChild(createPortalGroup(section.id, section.header, section.items));
        }
    });
}

function createApplicantSection(formType, selectedApplicantDocuments) {
    const applicantDocumentTypes = ['Mother', 'Father'];

    // Get the selected form's configuration
    const formConfig = formConfigurations[formType];

    applicantDocumentTypes.forEach(applicantType => {
        // Show the relevant section based on the selectedApplicantDocuments
        if (selectedApplicantDocuments !== applicantType && selectedApplicantDocuments !== 'Both') {
            return;
        }

        const items = formConfig.applicant_documents[applicantType];

        if (items && items.length > 0) {
            // Create a container for the applicant
            const applicantDiv = document.createElement('div');
            applicantDiv.className = 'admin-portal-subgroup';
            applicantDiv.id = applicantType;

            // Applicant Type Header
            const iconDiv = document.createElement('div');
            iconDiv.className = 'workdrive-icon';

            const header = document.createElement('h2');
            header.style.color = 'rgb(9, 1, 32)';
            header.style.textAlign = 'center';
            header.textContent = `${applicantType} Documents`;
            iconDiv.appendChild(header);
            applicantDiv.appendChild(iconDiv);

            // Create items directly
            items.forEach(item => {
                // If you need to skip certain items based on conditions, you can add logic here
                applicantDiv.appendChild(createPortalSubgroup(item));
            });

            formContentDiv.appendChild(applicantDiv);
        } else {
            console.log(items);
            console.error(`No items found for ${applicantType}`);
        }
    });
}

function formatHeader(key) {
    return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatLabel(key) {
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

async function accept(button) {
    if (button) {
        Swal.fire({
            title: "Do you want Accept the file",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire("Accepted!", "", "success");
                const statusId = button.dataset.statusId;
                const statusDiv = document.getElementById(statusId);
                for (const key in curr_status) {
                    if (statusId == curr_status[key][1]) {
                        var config = {
                            "data": [{
                                "id": key,
                                "Status": "Accepted"
                            }],
                        };
                        var response = await updateData(config);
                        console.log("response");
                        console.log(response);
                        if (response.details.statusMessage.data[0].code == "SUCCESS") {
                            curr_status[key][0] = "Accepted";
                            update_item_status_onchange(curr_status, key);
                            break;
                        }
                    }
                }
            }
        });
    }
}

async function folder(value) {
    console.log("data ", value);
    const statusId = value.dataset.statusId;
    const statusDiv = document.getElementById(statusId);
    for (const key in curr_status) {
        if (statusId == curr_status[key][1]) {
            console.log("Folder ", statusId);
            workdriveLink = curr_status[key][4];
            window.open(workdriveLink);
        }
    }
}

function reject(button) {
    const statusId = button.dataset.statusId;
    const statusDiv = document.getElementById(statusId);
    if (statusDiv) {
        openRejectPopup(statusId);
    }
}

ZOHO.embeddedApp.on("PageLoad", async (data) => {
    console.log("Finished Page Loading ...");
    console.log('data', data);
    entityId = data.EntityId[0];
    entityName = data.Entity;
    console.log('data', entityId);
    console.log('entityName', entityName);
    var conn_name = "crm"; // Use "crm" as the connection name

    var req_data = {
        "parameters": {
            "Entity": "Cases",
            "RecordID": entityId
        },
        "method": "GET",
        "url": "https://www.zohoapis.com/crm/v2/Cases/" + entityId, // Adjust the URL to match the correct endpoint
    };

    ZOHO.CRM.CONNECTION.invoke(conn_name, req_data)
        .then(async function (data) {
            console.log("DATA MINTU", data);

            // Handle the response here
            // if(data.status === "success" && data.details.CODE === 200) {
            //     console.log("Action completed successfully");
            // } else {
            //     console.error("Error in invoking connection", data);
            // }

            const typeofapp = data.details.statusMessage.data[0].Type_of_Application;
            const statusdata = data.details.statusMessage.data[0].status;
            const selectedApplicantDocuments = data.details.statusMessage.data[0].Selected_Applicant_s_Documents; // Add this line
            console.log(typeofapp, idmap[typeofapp]);
            const formType = idmap[typeofapp];
            if (formType && formConfigurations[formType]) {
                loadForm(formType, formConfigurations[formType], selectedApplicantDocuments); // Pass the value here
            } else {
                console.error('Failed to load form configuration.');
            }
            // get related record for Portal Item
            const related_items = await getPortalItems("Cases", entityId, "Portal_Items", 1, 200);
            console.log("related_items", related_items);
            for (let index = 0; index < related_items.details.statusMessage.data.length; index++) {
                const element = related_items.details.statusMessage.data[index];
                curr_status[element.Portal_Item_Hash] = [element.Status, element.Item_ID, element.Rejected_Reason, element.File_preview, element.Workdrive_Folder_Link];
                // status update
                update_item_status(curr_status, element.Portal_Item_Hash);
            }
            console.log("curr_status");
            console.log(curr_status);
        }) /////mintu 
});

ZOHO.embeddedApp.init().then(function (data) {
    ZOHO.CRM.UI.Resize({ height: "100%", width: "70%" }).then(function (data) {

    })
});

function update_item_status(items, portal_hash) {
    const item = items[portal_hash];
    console.log('Item:', item);

    if (item && item[1]) {
        const statusDiv = document.getElementById(item[1]);
        if (!statusDiv) {
            console.error(`Element with ID '${item[1]}' not found.`);
            return;
        }

        // Find the parent subgroupDiv
        const subgroupDiv = statusDiv.closest('.admin-portal-subgroup');
        if (!subgroupDiv) {
            console.error(`Parent '.admin-portal-subgroup' not found for status ID '${item[1]}'.`);
            return;
        }

        const fileActionsDiv = subgroupDiv.querySelector('.admin-portal-subgroup-actions .file-actions');
        if (!fileActionsDiv) {
            console.error(`'.file-actions' not found within subgroupDiv with ID '${subgroupDiv.id}'.`);
            return;
        }
        console.log(fileActionsDiv);
        const button_list = fileActionsDiv.children;
        const status_tml = subgroupDiv.querySelector('.admin-portal-subgroup-actions .admin-portal-status');;
        console.log(status_tml);

        // Proceed with your logic
        if (item[0] === "Pending Review") {
            console.log("Mitshu ke");
            console.log(button_list);
            for (let i = 0; i < button_list.length; i++) {
                button_list[i].classList.remove("hide-imp");
                
            }
            console.log(button_list);
            status_tml.textContent = "Status: Pending Review";
        } else if (item[0] === "Accepted") {
            status_tml.textContent = "Status: Accepted";
        } else if (item[0] === "Rejected") {
            status_tml.innerHTML = `Status: Rejected <br> <div class='reject_reason'>Reason: ${item[2]}</div>`;
        }
    } else {
        console.error(`Invalid item data for portal_hash '${portal_hash}'.`);
    }
}

function update_item_status_onchange(items, portal_hash) {
    item = items[portal_hash];

    if (item[1] != null) {
        button_list = document.getElementById(item[1]).querySelectorAll(".admin-portal-subgroup-actions .file-actions")[0].children;
        status_tml = document.getElementById(item[1]).querySelector(".admin-portal-subgroup-actions .admin-portal-status");
        if (item[0] == "Pending Review") {
            for (let i = 0; i < button_list.length; i++) {
                const button = button_list[i];
                button.classList.remove("hide-imp");
            }
            status_tml.textContent = "Status: Pending Review";
        } else if (item[0] == "Accepted") {
            for (let i = 0; i < button_list.length; i++) {
                const button = button_list[i];
                button.classList.add("hide-imp");
            }
            status_tml.textContent = "Status: Accepted";
        } else if (item[0] == "Rejected") {
            for (let i = 0; i < button_list.length; i++) {
                const button = button_list[i];
                button.classList.add("hide-imp");
            }
            status_tml.innerHTML = `Status: Rejected <br> <div class='reject_reason'>Reason: ${item[2]}</div>`;
        }
    }
}

function openRejectPopup(statusElementId) {
    const popup = document.getElementById("reject-popup");
    popup.style.display = "block";
    popup.dataset.statusElementId = statusElementId;
}

async function submitRejectReason() {
    const popup = document.getElementById("reject-popup");
    const reason = document.getElementById("reject-reason").value.trim();
    const statusElementId = popup.dataset.statusElementId;

    if (reason !== "") {
        for (const key in curr_status) {
            if (statusElementId == curr_status[key][1]) {
                var config = {
                    "data": [{
                        "id": key,
                        "Status": "Rejected",
                        "Rejected_Reason": reason
                    }],
                };
                var response = await updateData(config);
                console.log("response");
                console.log(response);
                if (response.details.statusMessage.data[0].code == "SUCCESS") {
                    curr_status[key][0] = "Rejected";
                    curr_status[key][2] = reason;
                    update_item_status_onchange(curr_status, key);
                    break;
                }
            }
        }
        closeRejectPopup();
    } else {
        Swal.fire({
            title: "Please fill the reason first",
            showCancelButton: false,
            confirmButtonText: "Okay"
        });
    }
}

function closeRejectPopup() {
    const popup = document.getElementById("reject-popup");
    if (popup) {
        popup.style.display = "none";
        document.getElementById("reject-reason").value = "";
    }
}

async function getPortalItems(module_name, recID, related_list) {
    var req_data = {
        "method": "GET",
        "url": `https://www.zohoapis.com/crm/v2/${module_name}/${recID}/${related_list}`,
    };
    return ZOHO.CRM.CONNECTION.invoke("crm", req_data);
}

async function updateData(APIData) {
    var req_data = {
        "parameters": APIData,
        "method": "PUT",
        "url": "https://www.zohoapis.com/crm/v2/CC_Portal_Items",
    };
    return ZOHO.CRM.CONNECTION.invoke("crm", req_data);
}


async function getRecord(ModuleName, RecId) {
    var req_data = {
        "parameters": {
            "ModuleName": ModuleName,
            "RecId": RecId
        },
        "headers": {},
        "method": "GET",
        "url": "https://www.zohoapis.com/crm/v6/" + ModuleName + "/" + RecId,
    };
    return ZOHO.CRM.CONNECTION.invoke("crm", req_data)
}

async function previewFile(fileType) {
    console.log("614");
    console.log(fileType);
    const previewPopup = document.getElementById('preview-popup');
    const previewContent = document.getElementById('preview-content');
    previewContent.innerHTML = '';
    var previewFileId = fileType.replace("file", "status");
    console.log("previewFileId");
    console.log(previewFileId);
    for (const key in curr_status) {
        if (previewFileId == curr_status[key][1]) {
            var getData = await getRecord("CC_Portal_Items", key);
            console.log("response");
            console.log(getData);
            if (getData.details.statusMessage.data[0] != "") {
                console.log("Indside Success");
                if (getData.details.statusMessage.data[0].File_preview != "") {
                    var fileUrl = getData.details.statusMessage.data[0].File_preview;
                    const pdfViewer = document.createElement('embed');
                    pdfViewer.setAttribute('src', fileUrl);
                    pdfViewer.setAttribute('type', 'application/pdf');
                    pdfViewer.setAttribute('width', '100%');
                    pdfViewer.setAttribute('height', '100%');
                    previewContent.appendChild(pdfViewer);

                    // Show preview popup
                    previewPopup.style.display = 'block';
                }
            }
        }
    }
}

function closePreviewPopup() {
    const previewPopup = document.getElementById('preview-popup');
    previewPopup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize any setup here if needed
});