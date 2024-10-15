var entityId = "";
var entityName = "";
var relatedModuleName = "Portal_Items";
var curr_status = {};
var idmap = {
    "Super Visa": "superVisa",
    "Spousal Sponsorship Inside":"SpousalSponsorshipInside",
        "Child Sponsorship":"ChildSponsorship",
        "Common Law Sponsorship":"CommonLawSponsorship",
        "HOME CHILD CARE":"HomeChildCare",   
        "PGWP":"Pgwp"
}
var formContentDiv = document.getElementById('form-content');
var formHeaderDiv = document.getElementById('form-header');
var subHeaderDiv = document.getElementById('sub-header');

const formConfigurations = {
    "superVisa": {
        "header": "Super Visa Application",
        "subHeader": "",
        "sections": [
           
            {
                "id": "identity_documents",
                "header": "1. Identity documents:for Host and Co-Host",
                "items": [
                    {
                        "id": "pr-card-status",
                        "label": "PR Cards(Front and Back)",
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
                "id": "optional-id",
                "header": "OR please upload below docs",
                "items": [
                
                    {
                        "id": "citizen-status",
                        "label": "Citizenship Certificate (front and Back) and Canadian Passport",
                        "file": "citizen-file",
                        "statusId": "citizen-status"
                    },
                    {
                        "id": "citizenship-status",
                        "label": "Citizenship Card or Canadian Birth Certificate ",
                        "file": "citizenship-file",
                        "statusId": "citizenship-status"
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
                        "id": "indian-passport-status",
                        "label": "Indian passport or any education document",
                        "file": "indian-passport-file",
                        "statusId": "indian-passport-status"
                    },
                    {
                        "id": "other-doc-status",
                        "label": "Other relationship documents",
                        "file": "other-doc-file",
                        "statusId": "other-doc-status",
                        "hint": "<div class='document-list'> also provide educational documents (grade 10th and grade 12), aadhaar card, Voter ID, any other documents showing parents name</div>"
                    }
                ]
            },
            {
                "id": "employment_docs",
                "header": "3. Employment documents for Host and Co-host",
                "items": [
                    {
                        "id": "employment-letter-status",
                        "label": "Job Letter(Original Job Confirmation letter stating Salary,period of employment,Regular hours per week)",
                        "file": "employment-letter-file",
                        "statusId": "employment-letter-status"
                    },
                    {
                        "id": "self-employment-status",
                        "label": "In case of self-employment, please provide Evidence of self-employment income",
                        "file": "self-employment-file",
                        "statusId": "self-employment-status",
                        "hint":" <div class='document-list'>(e.g. business license, corporation doc, letter from the accountant etc.)</div>"
                    },
                    {
                        "id": "pay-slips-status",
                        "label": "Pay slips (3-4 payslips)",
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
                "id": "Ohters_docs",
                "header": "4. Other Documents",
                "items": [
                    {
                        "id": "house-title-status",
                        "label": "House title",
                        "file": "house-title-file",
                        "statusId": "house-title-status"
                    },
                    {
                        "id": "use-of-status",
                        "label": "Use Of Rep",
                        "file": "use-of-file",
                        "statusId": "use-of-status"
                    },
                    {
                        "id": "IRCC-form-status",
                        "label": "IRCC Forms Signed",
                        "file": "IRCC-form-file",
                        "statusId": "IRCC-form-status"
                    }
                ]
            },

            //very important for selection applicant
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
                    "statusId": "mother-questionnaire-status",
                    "form-link": "https://zfrmz.com/hK4QvPTwFtpBcNhkGtDV"
    
                },
                {
                    "id": "mother-formfile-status",
                    "label": "Questionnaire Form upload if not filled online",
                    "file": "mother-formfile-file",
                    "statusId": "mother-formfile-status"
                },
                {
                    "id": "mother-passport-status",
                    "label": "Mother Passport(Include New and Old Passports with all the Entry and Exit stamps)",
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
                    "id": "father-formfile-status",
                    "label": "Questionnaire Form upload if not filled online",
                    "file": "father-formfile-file",
                    "statusId": "father-formfile-status"
                },
                {
                    "id": "father-passport-status",
                    "label": "Father Passport(Include New and Old Passports with all the Entry and Exit stamps)",
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
    "SpousalSponsorshipInside": {
        "header": "SPOUSAL SPONSORSHIP INSIDE",
        "subHeader": "NB: The documents scanned with Cam Scanner will not be accepted",
        "sections": [
            {
                "id": "sponsor_documents",
                "header": "1. Sponsor Documents",
                "items": [
                    {
                        "id": "pr-card-citizenship-document-status",
                        "label": "PR Card or Citizenship Document (PR Card, Citizenship Certificate, Canadian Passport)",
                        "file": "pr-card-citizenship-document-file",
                        "statusId": "pr-card-citizenship-document-status",
                        "hint": "<div class=\"document-list\">PR Card (Front and Back) OR Citizen: <ul><li>Citizenship Certificate (Front and Back)</li><li>Canadian Passport</li><li>Citizenship Card</li><li>Canadian Birth Certificate</li></ul></div>"
                    },
                    {
                        "id": "passport-travel-status",
                        "label": "Passport and Travel (Entry/Exit Stamps, Tickets, Boarding Passes)",
                        "file": "passport-travel-file",
                        "statusId": "passport-travel-status",
                        "hint": "<div class=\"document-list\">Include all the Entry and Exit stamps whenever you visited your spouse and you both traveled together outside the country: <ul><li>Ticket And Boarding Passes for all the visits made to meet Spouse</li></ul></div>"
                    },
                    {
                        "id": "employment-status",
                        "label": "Employment (Notice of Assessment, Original Job Confirmation, Self-employment Evidence)",
                        "file": "employment-file",
                        "statusId": "employment-status",
                        "hint": "<div class=\"document-list\">1. <strong>Notice of Assessment</strong> for the recent year OR Original Option C print out (Call 1800-959-8281) or you can get online if you have CRA account <br> 2. <strong>Original Job Confirmation letter</strong> (NOT THE JOB OFFER) stating: <ul><li>The period of employment</li><li>Salary</li><li>Regular hours per week</li></ul> 3. In case of <strong>self-employment</strong>, please provide the following: <ul><li><strong>Evidence of self-employment income</strong> (e.g. business license, corporation doc, letter from the accountant etc.)</li><li>Received interest on income earned (evidence of interest income) e.g. Bank statement showing the rate of interest, deposit amount, and length of time deposit held</li><li><strong>T2 Schedule 100 and T2 Schedule 125</strong></li></ul></div>"
                    },
                    {
                        "id": "divorce-death-certificate-status",
                        "label": "Divorce Certificate or Death Certificate (if applicable)",
                        "file": "divorce-death-certificate-file",
                        "statusId": "divorce-death-certificate-status",
                        "hint": "<div class=\"document-list\">Final Divorce Certificate if Mandatory: <ul><li>If Marriage was Annulled, please provide Annulment</li><li>If previous spouse/common-law partner deceased, please provide Death Certificate</li></ul></div>"
                    },
                    {
                        "id": "birth-certificate-child-status",
                        "label": "Child's Birth Certificate (if applicable)",
                        "file": "birth-certificate-child-file",
                        "statusId": "birth-certificate-child-status",
                        "hint": "<div class=\"document-list\">If any child together, provide Child’s Birth Certificate with both parents' names</div>"
                    }
                ]
            },
            {
                "id": "principal_applicant_documents",
                "header": "2. Principal Applicant Documents",
                "items": [
                    {
                        "id": "passport-status",
                        "label": "Passport (Front, Last page, Visa Stamps, and any amendments)",
                        "file": "passport-file",
                        "statusId": "passport-status",
                        "hint": "<div class=\"document-list\">Front and last page and Include all the exit and entry stamps: <ul><li>Any Visa Stamps or Copy of Visa or Residence Permit</li><li>Any other changes made on the passport</li></ul></div>"
                    },
                    {
                        "id": "current-status-in-canada-status",
                        "label": "Current Status in Canada (Visitor Visa, Work Permit, ETA)",
                        "file": "current-status-in-canada-file",
                        "statusId": "current-status-in-canada-status",
                        "hint": "<div class=\"document-list\">Copy of Visitor Visa, Work Permit, ETA etc.</div>"
                    },
                    {
                        "id": "birth-certificate-status",
                        "label": "Birth Certificate (with English/French Translation if required)",
                        "file": "birth-certificate-file",
                        "statusId": "birth-certificate-status",
                        "hint": "<div class=\"document-list\">If in a different language other than English, please: <ul><li>A certified copy of the original document; and</li><li>The English or French translation; and</li><li>An affidavit from the person who completed the translation</li></ul> If Birth Certificate is not available, please provide ID cards, Education Documents with D.O.B and parents' names, such as: <ul><li>Voter Card</li><li>Aadhaar Card</li><li>National ID</li><li>Driver’s License</li></ul></div>"
                    },
                    {
                        "id": "national-identity-status",
                        "label": "National Identity (with English/French Translation if applicable)",
                        "file": "national-identity-file",
                        "statusId": "national-identity-status",
                        "hint": "<div class=\"document-list\">If not in English: <ul><li>A certified copy of the original document; and</li><li>The English or French translation; and</li><li>An affidavit from the person who completed the translation</li></ul></div>"
                    },
                    {
                        "id": "education-documents-status",
                        "label": "Education Documents (Starting from Grade 10)",
                        "file": "education-documents-file",
                        "statusId": "education-documents-status",
                        "hint": "<div class=\"document-list\">Starting from Grade 10, include all the Marksheets, Certificates, Degree, etc.</div>"
                    },
                    {
                        "id": "police-clearance-certificate-status",
                        "label": "Police Clearance Certificate (Country-specific PCC for Paper Applications)",
                        "file": "police-clearance-certificate-file",
                        "statusId": "police-clearance-certificate-status",
                        "hint": "<div class=\"document-list\">Original (If Paper Application) for all the countries you lived in for more than six months, including the country of Nationality. <br> How to get PCC Country Specific: <ul><li> Click on the link button beside the header</li></ul></div>",
                        "imp-link": "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how.html"
                    },
                    {
                        "id": "pr-card-photo-status",
                        "label": "PR Card Photograph (50mm X 70mm with white background)",
                        "file": "pr-card-photo-file",
                        "statusId": "pr-card-photo-status",
                        "hint": "<div class=\"document-list\">2 photos with white background (50mm X 70mm) Hard copies OR Digital Copy: <ul><li>On the back side of one photo, it should be stamped or have the address of the studio</li><li>Date photo taken should be mentioned</li><li>Write your Full name and D.O.B</li></ul> Guide: <ul><li> Click on the link button beside the header</li></ul></div>",
                        "imp-link": "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card/apply-renew-replace/photo.html "
                    },
                    {
                        "id": "divorce-death-certificate-status",
                        "label": "Divorce Certificate or Death Certificate (if applicable)",
                        "file": "divorce-death-certificate-file",
                        "statusId": "divorce-death-certificate-status",
                        "hint": "<div class=\"document-list\">Final Divorce Certificate if Mandatory: <ul><li>If Marriage was Annulled, please provide Annulment</li><li>If previous spouse/common-law partner deceased, please provide Death Certificate</li></ul></div>"
                    },
                    {
                        "id": "dependents-documents-status",
                        "label": "Dependents (Passport, Birth Certificate, PR Card Photo, Education Documents)",
                        "file": "dependents-documents-file",
                        "statusId": "dependents-documents-status",
                        "hint": "<div class=\"document-list\"><ul><li>Passport copy with any entry and exit stamps</li> <li>Birth Certificate</li><li>PR Card Size Photo (as per the specification)</li><li>Recent Education Documents</li></ul></div>"
                    }
                ]
            },
            {
                "id": "proof_of_relationship_documents",
                "header": "3. Proof of Relationship Documents",
                "items": [
                    {
                        "id": "marriage-certificate-status",
                        "label": "Marriage Certificate and Wedding Cards",
                        "file": "marriage-certificate-file",
                        "statusId": "marriage-certificate-status",
                        "hint": "<div class=\"document-list\"><ul><li>Marriage Certificate from Court</li> <li>Wedding Cards</li></ul></div>"
                    },
                    {
                        "id": "proof-staying-together-status",
                        "label": "Proof of Staying Together (Joint Ownership, Rental Agreement, Utility Bills, Govt IDs)",
                        "file": "proof-staying-together-file",
                        "statusId": "proof-staying-together-status",
                        "hint": "<div class=\"document-list\"><ul><li>Proof of Joint Ownership or Joint Rental Agreement </li><li>Joint Utility Bills</li><li>Vehicle Insurance showing both your names and the same address</li><li>Copies of Government-issued IDs with the same address</li><li>Any other document showing the same address</li></ul></div>"
                    },
                    {
                        "id": "pictures-status",
                        "label": "Pictures (Before Wedding, Wedding, Post-Wedding, Honeymoon)",
                        "file": "pictures-file",
                        "statusId": "pictures-status",
                        "hint": "<div class=\"document-list\"><ul><li>Before Wedding Photos (Roka, Engagement, regular meetings, outings)</li><li>Wedding:</li><ul><li>Include all pre-wedding rituals/ceremonies like haldi, mehndi, etc.</li><li>Wedding day</li></ul><li>Reception/party</li><li>After Wedding – visited relatives, outings, etc.</li><li>Honeymoon Pictures</li></ul> Only send Photos in jpeg format and where you yourself are present or with your spouse or with other family, friends, and relatives.</div>"
                    },
                    {
                        "id": "honeymoon-status",
                        "label": "Honeymoon (Entry/Exit stamps, Tickets, Boarding Passes, Itinerary, Hotel Receipts)",
                        "file": "honeymoon-file",
                        "statusId": "honeymoon-status",
                        "hint": "<div class=\"document-list\"><ul><li>Entry Exit stamps on Passport</li><li>Tickets</li><li>Boarding Passes</li><li>Itinerary</li><li>Hotel Bookings, receipts etc.</li></ul></div>"
                    },
                    {
                        "id": "social-media-status",
                        "label": "Social Media (Screenshots showing public recognition of relationship)",
                        "file": "social-media-file",
                        "statusId": "social-media-status",
                        "hint": "<div class=\"document-list\">Screenshots of your social media account showing public recognition of your relationship like: <ul><li>Marital Status</li><li>Pictures shared with comments and likes, etc.</li></ul></div>"
                    },
                    {
                        "id": "relationship-story-status",
                        "label": "Relationship Story (Specify dates and details)",
                        "file": "relationship-story-file",
                        "statusId": "relationship-story-status",
                        "hint": "<div class=\"document-list\"><ul><li>Relationship Story (Sample Provided)</li><li>Receipts for any money sent to each other</li><li>Gift Receipts showing spouse name or as beneficiary</li><li>Letters from Friends and Family (Sample Provided)</li></ul></div>"
                    },
                    {
                        "id": "money-gift-receipts-status",
                        "label": "Receipts for Money and Gifts Sent",
                        "file": "money-gift-receipts-file",
                        "statusId": "money-gift-receipts-status",
                        "hint": "<div class=\"document-list\"><ul><li>Wedding Receipts</li><li>Letter from Palace, Banquet hall, etc.</li><li>If possible follow:</li><ul><li>Buy car with both of your names on it</li><li>Car Registration for both must have the same address</li><li>Car Insurance Policy must have the same address</li><li>Any Insurance Policy – e.g. life insurance (Nominee should be spouse name)</li><li>Joint bank account and link salaries to it</li><li>Ask Credit card company to add spouse to your credit card account</li></ul></ul></div>"
                    }
                ]
            },
            {
                "id": "additional-documents",
                "header": "4. Addition Documents",
                "items": [
                    {
                        "id": "buy-car-with-both-of-your-name-on-it",
                        "label": "Buy Car with both of your name on it",
                        "file": "buy-car-with-both-of-your-name-on-it-file",
                        "statusId": "buy-car-with-both-of-your-name-on-it-status"
                    },
                    {
                        "id": "car-registry-address",
                        "label": "Car Registration for both must have  same address ",
                        "file": "car-registry-address-file",
                        "statusId": "car-registry-address-status"
                    },
                    {
                        "id": "car-insurance-policy-address",
                        "label": "Car Insurance Policy must have same address ",
                        "file": "car-insurance-policy-address-file",
                        "statusId": "car-insurance-policy-address-status"
                    },
                    {
                        "id": "any-insurance-policy",
                        "label": "Any Insurance Policy – i.e life insurance  (Nominee should be spouse name)  ",
                        "file": "any-insurance-policy-file",
                        "statusId": "any-insurance-policy-status"
                    },
                    {
                        "id": "joint-bank-account-salaries",
                        "label": "Joint Bank Account and Link Salaries to it  ",
                        "file": "joint-bank-account-salaries-file",
                        "statusId": "joint-bank-account-salaries-status"
                    },
                    {
                        "id": "ask-to-add-spouse-to-card-account",
                        "label": "Ask Credit Card Company to add spouse to your credit card account  ",
                        "file": "ask-to-add-spouse-to-card-account-file",
                        "statusId": "ask-to-add-spouse-to-card-account-status"
                    }
                ]
            },
            {
                "id": "documents_required_for_accompanied_child",
                "header": "5. Documents Required for Accompanied Child",
                "items": [
                    {
                        "id": "child-birth-certificate-status",
                        "label": "Child's Birth Certificate (with translated version if not in English)",
                        "file": "child-birth-certificate-file",
                        "statusId": "child-birth-certificate-status"
                    },
                    {
                        "id": "child-school-certificate-status",
                        "label": "School Certificate (Fifth Class, Middle Standard, Matriculation)",
                        "file": "child-school-certificate-file",
                        "statusId": "child-school-certificate-status"
                    },
                    {
                        "id": "child-passport-status",
                        "label": "Child's Passport (Front, Last page, any amendments, visa stamps)",
                        "file": "child-passport-file",
                        "statusId": "child-passport-status"
                    },
                    {
                        "id": "child-national-id-status",
                        "label": "Child's National ID (if applicable)",
                        "file": "child-national-id-file",
                        "statusId": "child-national-id-status"
                    },
                    {
                        "id": "child-police-clearance-status",
                        "label": "Police Clearance Certificate (for child aged 18 or above)",
                        "file": "child-police-clearance-file",
                        "statusId": "child-police-clearance-status"
                    },
                    {
                        "id": "child-photos-status",
                        "label": "2 Recent Photos (50mm X 70mm)",
                        "file": "child-photos-file",
                        "statusId": "child-photos-status"
                    }
                ]
            },
            {
                "id": "form_list",
                "header": "6. Mandatory Forms",
                "items": [
                    {
                        "id": "forms-id-1",
                        "label": "1. Sponsor Questionnaire",
                        "file": "forms-id-1-file",
                        "statusId": "forms-id-1-status",
                        "form-link": "https://zfrmz.com/JUL3Icks6rn2zw2dx2qQ"
                    },
                    {
                        "id": "forms-id-2",
                        "label": "2. Applicant Questionnaire",
                        "file": "forms-id-2-file",
                        "statusId": "forms-id-2-status",
                        "form-link": "https://zfrmz.com/WwRnLuK2I76GC67hYKQ7"
                    }
                ]
            }
        ]
    },
    "ChildSponsorship": {
        "header": "CHILD SPONSORSHIP",
        "subHeader": "NB: The documents scanned with Cam Scanner will not be accepted",
        "sections": [
            {
                "id": "child_documents",
                "header": "1. Child Documents",
                "items": [
                    {
                        "id": "birth-certificate-status",
                        "label": "Original Birth Certificate (with English translation if applicable)",
                        "file": "birth-certificate-file",
                        "statusId": "birth-certificate-status",
                        "hint": " <div class='document-list'>if the birth certificate is not in English, a certified translated version is also required along with the Original Birth certificate. </div>"
                    },
                    {
                        "id": "school-certificate-status",
                        "label": "School Certificate (Fifth class, middle standard, matriculation)",
                        "file": "school-certificate-file",
                        "statusId": "school-certificate-status"
                    },
                    {
                        "id": "passport-copy-status",
                        "label": "Passport copy (Front, Last page, any amendments, visa stamps)",
                        "file": "passport-copy-file",
                        "statusId": "passport-copy-status"
                    },
                    {
                        "id": "police-clearance-status",
                        "label": "Original Police Clearance Certificate (for child aged 18 or above)",
                        "file": "police-clearance-file",
                        "statusId": "police-clearance-status"
                    },
                    {
                        "id": "national-identity-status",
                        "label": "National Identity Document (with English/French Translation if applicable)",
                        "file": "national-identity-file",
                        "statusId": "national-identity-status",
                        "hint": "<div class=\"document-list\">If not in English: <ul><li>A certified copy of the original document; and</li><li>The English or French translation; and</li><li>An affidavit from the person who completed the translation</li></ul></div>"
                    },
                    {
                        "id": "child-photos-status",
                        "label": "2 Recent Photos (50mm X 70mm)",
                        "file": "child-photos-file",
                        "statusId": "child-photos-status",
                        "imp-link": "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card/apply-renew-replace/photo.html"
                    }
                ]
            },
            {
                "id": "sponsor_documents",
                "header": "2. Sponsor Documents",
                "items": [
                    {
                        "id": "job-letter-status",
                        "label": "Original Job Letter from Current Employer (stating joining date, salary, regular hours)",
                        "file": "job-letter-file",
                        "statusId": "job-letter-status"
                    },
                    {
                        "id": "financial-evaluation-status",
                        "label": "Proof of Financial Evaluation (Tax returns, Notice of Assessment, proof of other income)",
                        "file": "financial-evaluation-file",
                        "statusId": "financial-evaluation-status"
                    },
                    {
                        "id": "canadian-status-status",
                        "label": "Proof of Canadian Status (Record of Landing, PR Card, Citizenship Card, Birth Certificate)",
                        "file": "canadian-status-file",
                        "statusId": "canadian-status-status"
                    },
                    {
                        "id": "relationship-proof-status",
                        "label": "Proof of Relationship (Marriage Certificate, Passports showing identity of children/parents)",
                        "file": "relationship-proof-file",
                        "statusId": "relationship-proof-status"
                    },
                    {
                        "id": "option-c-printout-status",
                        "label": "Original Option C Printout",
                        "file": "option-c-printout-file",
                        "statusId": "option-c-printout-status"
                    }
                ]
            },
            {
                "id": "form_list",
                "header": "3. Mandatory Forms",
                "items": [
                    {
                        "id": "forms-id-1",
                        "label": "1..Child Sponsorship-SPONSOR Questionnaire",
                        "file": "forms-id-1-file",
                        "statusId": "forms-id-1-status",
                        "form-link": "https://zfrmz.com/w0yKQqWUmvanIvaKOT8x"
                    },
                    {
                        "id": "forms-id-2",
                        "label": "2. Child Sponsorship-Principal Questionnaire",
                        "file": "forms-id-2-file",
                        "statusId": "forms-id-2-status",
                        "form-link": "https://zfrmz.com/s8Ih72whK5jQlRW8GJ3A"
                    }
                ]
            }
        ]
    },
    "CommonLawSponsorship": {
        "header": "COMMON LAW SPONSORSHIP",
        "subHeader": "NB: The documents scanned with Cam Scanner will not be accepted",
        "sections": [
            {
                "id": "sponsor_documents",
                "header": "1. Sponsor Documents",
                "items": [
                    {
                        "id": "pr-card-status",
                        "label": "One of the following: PR Card, Record of Landing, Canadian Birth Certificate, Canadian Passport, Citizenship Card",
                        "file": "pr-card-file",
                        "statusId": "pr-card-status"
                    },
                    {
                        "id": "tax-documents-status",
                        "label": "Most Recent Notice of Assessment or Original Option C Printout",
                        "file": "tax-documents-file",
                        "statusId": "tax-documents-status"
                    },
                    {
                        "id": "job-letter-status",
                        "label": "Job Letter stating period of employment, salary, and regular hours per week",
                        "file": "job-letter-file",
                        "statusId": "job-letter-status"
                    },
                    {
                        "id": "self-employment-docs-status",
                        "label": "In case of self-employment: Business License, Corporation Documents, Letter from Accountant, Interest Income Proof, T2 Schedule 100 and T2 Schedule 125",
                        "file": "self-employment-docs-file",
                        "statusId": "self-employment-docs-status",
                        "hint": "<div class=\"document-list\">∙In case of self-employment, please provide the following: <ul><li>Evidence of self-employment income (e.g. business license, corporation doc, letter from the accountant, etc.)</li><li>Received interest on income earned (evidence of interest income) e.g. Bank statement showing the rate of interest, deposit amount, and length of time deposit held.</li><li>T2 Schedule 100 and T2 Schedule 125.</li></ul></div>"
                    },
                    {
                        "id": "passport-travel-stamps-status",
                        "label": "Passport with all travel stamps (if visited your Common-Law partner)",
                        "file": "passport-travel-stamps-file",
                        "statusId": "passport-travel-stamps-status"
                    },
                    {
                        "id": "divorce-certificate-status",
                        "label": "Divorce Certificate or Affidavit of Separation",
                        "file": "divorce-certificate-file",
                        "statusId": "divorce-certificate-status",
                        "hint": "PLEASE NOTE THAT THE VISA OFFICER MIGHT ASK FOR THE DIVORCE CERTIFICATE AT LATER STAGE)"
                    }
                ]
            },
            {
                "id": "common_law_partner_documents",
                "header": "2. Common-Law Partner Documents",
                "items": [
                    {
                        "id": "partner-passport-status",
                        "label": "Passport with all stamp pages (include old Passport as well)",
                        "file": "partner-passport-file",
                        "statusId": "partner-passport-status"
                    },
                    {
                        "id": "travel-document-status",
                        "label": "Travel Document (if passport is not available)",
                        "file": "travel-document-file",
                        "statusId": "travel-document-status"
                    },
                    {
                        "id": "canadian-status-proof-status",
                        "label": "Status Proof in Canada (i.e Work Permit, Visit Visa)",
                        "file": "canadian-status-proof-file",
                        "statusId": "canadian-status-proof-status"
                    },
                    {
                        "id": "birth-certificate-status",
                        "label": "Birth Certificate (Canadian Birth Certificate)",
                        "file": "birth-certificate-file",
                        "statusId": "birth-certificate-status"
                    },
                    {
                        "id": "common-law-declaration-status",
                        "label": "Statutory Declaration of Common-Law Union",
                        "file": "common-law-declaration-file",
                        "statusId": "common-law-declaration-status",
                        "imp-link": "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/imm5604.html"
                    },
                    {
                        "id": "police-clearance-status",
                        "label": "Police Clearance Certificate (for countries lived in more than 6 months and current country of residence)",
                        "file": "police-clearance-file",
                        "statusId": "police-clearance-status"
                    },
                    {
                        "id": "photos-status",
                        "label": "2 Photos (50mm X 70mm) with white background (one stamped, one without stamp)",
                        "file": "photos-file",
                        "statusId": "photos-status",
                        "imp-link": "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card/apply-renew-replace/photo.html"
                    },
                    {
                        "id": "green-card-status",
                        "label": "Green Card/PR Card (For USA Green Card Holders)",
                        "file": "green-card-file",
                        "statusId": "green-card-status"
                    }
                ]
            },
            {
                "id": "relationship_proof",
                "header": "3. Relationship Proof",
                "items": [
                    {
                        "id": "proof-of-cohabitation-status",
                        "label": "Proof that you lived together for one year",
                        "file": "proof-of-cohabitation-file",
                        "statusId": "proof-of-cohabitation-status"
                    },
                    {
                        "id": "photos-occasions-status",
                        "label": "Photos from different occasions together with family and friends",
                        "file": "photos-occasions-file",
                        "statusId": "photos-occasions-status"
                    },
                    {
                        "id": "communication-proof-status",
                        "label": "Communication Proofs (Calls, Chats)",
                        "file": "communication-proof-file",
                        "statusId": "communication-proof-status"
                    },
                    {
                        "id": "social-media-screenshots-status",
                        "label": "Social Media Screenshots showing shared photos and relationship status",
                        "file": "social-media-screenshots-file",
                        "statusId": "social-media-screenshots-status"
                    },
                    {
                        "id": "joint-account-status",
                        "label": "Statements for Joint Bank Accounts",
                        "file": "joint-account-file",
                        "statusId": "joint-account-status"
                    },
                    {
                        "id": "shared-credit-cards-status",
                        "label": "Shared Credit Cards",
                        "file": "shared-credit-cards-file",
                        "statusId": "shared-credit-cards-status"
                    },
                    {
                        "id": "shared-residential-property-status",
                        "label": "Proof of Shared Ownership of Residential Property",
                        "file": "shared-residential-property-file",
                        "statusId": "shared-residential-property-status"
                    },
                    {
                        "id": "shared-leases-status",
                        "label": "Shared Residential Leases",
                        "file": "shared-leases-file",
                        "statusId": "shared-leases-status"
                    },
                    {
                        "id": "shared-utilities-status",
                        "label": "Shared Utility Bills (electricity, gas, telephone)",
                        "file": "shared-utilities-file",
                        "statusId": "shared-utilities-status"
                    },
                    {
                        "id": "household-expenses-status",
                        "label": "Proof of Shared Management of Household Expenses",
                        "file": "household-expenses-file",
                        "statusId": "household-expenses-status"
                    },
                    {
                        "id": "shared-purchases-status",
                        "label": "Evidence of Shared Purchases (especially household items)",
                        "file": "shared-purchases-file",
                        "statusId": "shared-purchases-status"
                    },
                    {
                        "id": "shared-address-proof-status",
                        "label": "Mail Addressed to Both or Either at Same Address",
                        "file": "shared-address-proof-file",
                        "statusId": "shared-address-proof-status"
                    },
                    {
                        "id": "important-docs-same-address-status",
                        "label": "Important Documents for Both with Same Address (Identification Documents, Driver’s Licenses, Insurance Policies)",
                        "file": "important-docs-same-address-file",
                        "statusId": "important-docs-same-address-status",
                        "hint": "Any other documents that show you have been living together. You do not need to include all these items to prove your relationship is real. Citizenship and Immigration Canada may consider other proofs as well"
                    }
                ]
            },
            {
                "id": "form_list",
                "header": "4. Mandatory Forms",
                "items": [
                    {
                        "id": "forms-id-1",
                        "label": "1. Comman law Sponsor Questionnaire",
                        "file": "forms-id-1-file",
                        "statusId": "forms-id-1-status",
                        "form-link": "https://zfrmz.com/dtKagJ7cSPhoVtsaw9t3"
                    },
                    {
                        "id": "forms-id-2",
                        "label": "2. Common law Principal Questionnaire",
                        "file": "forms-id-2-file",
                        "statusId": "forms-id-2-status",
                        "form-link": "https://zfrmz.com/FqPuSKofW2AqxPIkUEaS"
                    }
                ]
            }
        ]
    },
    "HomeChildCare": {
        "header": "HOME CHILD CARE",
        "subHeader": "NB: The documents scanned with Cam Scanner will not be accepted",
        "sections": [
            {
                "id": "passport_documents",
                "header": "1. Passport and Visa Documents",
                "items": [
                    {
                        "id": "applicant-passport-status",
                        "label": "Applicant's Current Passport (including all stamped pages and visas)",
                        "file": "applicant-passport-file",
                        "statusId": "applicant-passport-status"
                    },
                    {
                        "id": "family-passports-status",
                        "label": "Accompanying/Non-accompanying Family Members' Passports (spouse and kids)",
                        "file": "family-passports-file",
                        "statusId": "family-passports-status"
                    }
                ]
            },
            {
                "id": "language_assessment",
                "header": "2. Language Assessment",
                "items": [
                    {
                        "id": "ielts-celpip-status",
                        "label": "IELTS/CELPIP (Original Hard Copy)",
                        "file": "ielts-celpip-file",
                        "statusId": "ielts-celpip-status"
                    },
                    {
                        "id": "french-test-status",
                        "label": "French Language Assessment (Optional, if available)",
                        "file": "french-test-file",
                        "statusId": "french-test-status"
                    }
                ]
            },
            {
                "id": "current_employment_canada",
                "header": "3. Current Employment in Canada",
                "items": [
                    {
                        "id": "current-employment-contract-status",
                        "label": "Employment Contract/Job Offer (signed by both employer and applicant)",
                        "file": "current-employment-contract-file",
                        "statusId": "current-employment-contract-status"
                    },
                    {
                        "id": "current-job-reference-status",
                        "label": "Job Reference Letter (on company letterhead with recent date)",
                        "file": "current-job-reference-file",
                        "statusId": "current-job-reference-status"
                    },
                    {
                        "id": "current-job-duties-status",
                        "label": "Job Duties and Responsibilities (on company letterhead, signed by employer)",
                        "file": "current-job-duties-file",
                        "statusId": "current-job-duties-status"
                    },
                    {
                        "id": "current-pay-slips-status",
                        "label": "All Pay Slips (Recent)",
                        "file": "current-pay-slips-file",
                        "statusId": "current-pay-slips-status"
                    },
                    {
                        "id": "current-lmia-status",
                        "label": "LMIA Copy (if applicable)",
                        "file": "current-lmia-file",
                        "statusId": "current-lmia-status"
                    }
                ]
            },
            {
                "id": "previous_employment",
                "header": "4. Previous Employment",
                "items": [
                    {
                        "id": "previous-employment-contract-status",
                        "label": "Previous Employment Contract/Job Offer (signed by both parties)",
                        "file": "previous-employment-contract-file",
                        "statusId": "previous-employment-contract-status"
                    },
                    {
                        "id": "previous-job-reference-status",
                        "label": "Previous Job Reference Letter (on company letterhead)",
                        "file": "previous-job-reference-file",
                        "statusId": "previous-job-reference-status"
                    },
                    {
                        "id": "previous-job-duties-status",
                        "label": "Previous Job Duties and Responsibilities (on company letterhead)",
                        "file": "previous-job-duties-file",
                        "statusId": "previous-job-duties-status"
                    },
                    {
                        "id": "previous-pay-slips-status",
                        "label": "All Previous Pay Slips",
                        "file": "previous-pay-slips-file",
                        "statusId": "previous-pay-slips-status"
                    },
                    {
                        "id": "previous-lmia-status",
                        "label": "LMIA Copy (if applicable)",
                        "file": "previous-lmia-file",
                        "statusId": "previous-lmia-status"
                    },
                    {
                        "id": "previous-bank-statement-status",
                        "label": "Bank Statement Showing Salary Deposit",
                        "file": "previous-bank-statement-file",
                        "statusId": "previous-bank-statement-status"
                    },
                    {
                        "id": "form-16-status",
                        "label": "Form 16 (If worked in India)",
                        "file": "form-16-file",
                        "statusId": "form-16-status"
                    },
                    {
                        "id": "previous-tax-docs-status",
                        "label": "Previous Tax Documents",
                        "file": "previous-tax-docs-file",
                        "statusId": "previous-tax-docs-status"
                    },
                    {
                        "id": "work-visa-status",
                        "label": "Work Visa Copy (If worked in foreign countries)",
                        "file": "work-visa-file",
                        "statusId": "work-visa-status"
                    },
                    {
                        "id": "promotion-certificate-status",
                        "label": "Promotion or Appreciation Certificate",
                        "file": "promotion-certificate-file",
                        "statusId": "promotion-certificate-status"
                    }
                ]
            },
            {
                "id": "education_credentials",
                "header": "5. Education Credentials",
                "items": [
                    {
                        "id": "wes-assessment-status",
                        "label": "Education Credentials Assessment (WES, etc.) (Original Hard Copy)",
                        "file": "wes-assessment-file",
                        "statusId": "wes-assessment-status"
                    },
                    {
                        "id": "education-docs-status",
                        "label": "All Educational Documents (Degrees, Diplomas, Marksheets)",
                        "file": "education-docs-file",
                        "statusId": "education-docs-status"
                    }
                ]
            },
            {
                "id": "canadian_documents",
                "header": "6. Canadian Documents",
                "items": [
                    {
                        "id": "noa-status",
                        "label": "All Notice of Assessments (NOAs) and T4s (if staying in Canada)",
                        "file": "noa-file",
                        "statusId": "noa-status"
                    },
                    {
                        "id": "pr-photos-status",
                        "label": "2 PR Card Size Photos (50mm x 70mm) for Applicant and Accompanying Family Members",
                        "file": "pr-photos-file",
                        "statusId": "pr-photos-status",
                        "imp-link": " https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card/apply-renew-replace/photo.html"
                    },
                    {
                        "id": "provincial-nomination-status",
                        "label": "Provincial Nomination Certificate (if applicable)",
                        "file": "provincial-nomination-file",
                        "statusId": "provincial-nomination-status"
                    }
                ]
            },
            {
                "id": "medical_documents",
                "header": "7. Medical and Police Clearance",
                "items": [
                    {
                        "id": "medical-docs-status",
                        "label": "Medical Documents (for applicant and family members)",
                        "file": "medical-docs-file",
                        "statusId": "medical-docs-status",
                        "imp-link": " https://secure.cic.gc.ca/PanelPhysicianMedecinDesigne/en/Home"
                    },
                    {
                        "id": "pcc-status",
                        "label": "Police Clearance Certificate (if available)",
                        "file": "pcc-file",
                        "statusId": "pcc-status",
                        "imp-link": " https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how.html"
                    }
                ]
            },
            {
                "id": "additional_documents",
                "header": "8. Additional Documents",
                "items": [
                    {
                        "id": "birth-certificates-status",
                        "label": "Birth Certificates (for applicant and family members)",
                        "file": "birth-certificates-file",
                        "statusId": "birth-certificates-status",
                        "hint": " <div class='document-list'>if not in English, we need Original translation and true certified copy of the Original birth certificate, certified by the same translator</div>"
                    },
                    {
                        "id": "marriage-certificate-status",
                        "label": "Marriage Certificate (if applicable)",
                        "file": "marriage-certificate-file",
                        "statusId": "marriage-certificate-status"
                    },
                    {
                        "id": "divorce-certificate-status",
                        "label": "Divorce Certificate (if applicable)",
                        "file": "divorce-certificate-file",
                        "statusId": "divorce-certificate-status"
                    },
                    {
                        "id": "canadian-work-permits-status",
                        "label": "Canadian Work Permits (for applicant, spouse, and family members)",
                        "file": "canadian-work-permits-file",
                        "statusId": "canadian-work-permits-status"
                    }
                ]
            },
            {
                "id": "canadian_relative_documents",
                "header": "9. Canadian Relative Documents (If Applicable)",
                "items": [
                    {
                        "id": "relative-noa-status",
                        "label": "Relative's Notice of Assessments (Last 2 years)",
                        "file": "relative-noa-file",
                        "statusId": "relative-noa-status"
                    },
                    {
                        "id": "relative-job-confirmation-status",
                        "label": "Relative's Job Confirmation Letter (or Proof of Self Employment)",
                        "file": "relative-job-confirmation-file",
                        "statusId": "relative-job-confirmation-status"
                    },
                    {
                        "id": "relative-pay-slips-status",
                        "label": "Relative's Recent Pay Slips",
                        "file": "relative-pay-slips-file",
                        "statusId": "relative-pay-slips-status"
                    },
                    {
                        "id": "relative-property-documents-status",
                        "label": "Relative's Canadian Property Documents (if available)",
                        "file": "relative-property-documents-file",
                        "statusId": "relative-property-documents-status"
                    },
                    {
                        "id": "relative-birth-certificate-status",
                        "label": "Relative's Birth Certificate or Early Education Documents (10th and 12th)",
                        "file": "relative-birth-certificate-file",
                        "statusId": "relative-birth-certificate-status"
                    },
                    {
                        "id": "relative-canadian-status-proof-status",
                        "label": "Relative's Canadian Status Proof (PR Card or Canadian Passport)",
                        "file": "relative-canadian-status-proof-file",
                        "statusId": "relative-canadian-status-proof-status"
                    },
                    {
                        "id": "relative-old-passport-status",
                        "label": "Relative's Old Indian Passport (if applicable)",
                        "file": "relative-old-passport-file",
                        "statusId": "relative-old-passport-status"
                    },
                    {
                        "id": "proof-of-relationship-status",
                        "label": "Proof of Relationship Between Applicant and Relative in Canada",
                        "file": "proof-of-relationship-file",
                        "statusId": "proof-of-relationship-status"
                    }
                ]
            },
            {
                "id": "employer_documents",
                "header": "10. Employer Documents",
                "items": [
                    {
                        "id": "employer-canadian-proof-status ",
                        "label": "Employer Canadian passport or any citizenship proof or PR Card and Passport ",
                        "file": "employer-canadian-proof-file",
                        "statusId": "employer-canadian-proof-status"
                    },
                    {
                        "id": "child-parents citizenship-proof",
                        "label": "Child / Parents Citizenship or Residence Proof ",
                        "file": "child-parents citizenship-proof-file",
                        "statusId": "child-parents citizenship-proof-status"
                    },
                    {
                        "id": "child-or-employer-birth-certificate-showing-parents-name",
                        "label": "Child’s Birth Certificate Showing Parents’ Name or Employer’s Birth Certificate Showing Parents Name ",
                        "file": "child-or-employer-birth-certificate-showing-parents-name-file",
                        "statusId": "child-or-employer-birth-certificate-showing-parents-name-status",
                        "hint": " <div class='document-list'>if not in English, we need Original translation and true certified copy of the Original birth certificate, certified by the same translator</div>"
                    },
                    {
                        "id": "child’s-Parents-age-proof",
                        "label": "Child’s/ Parents Age Proof",
                        "file": "child’s-Parents-age-proof-file",
                        "statusId": "child’s-Parents-age-proof-status",
                        "hint": " <div class='document-list'>(any documents showing age proof example: school document, identity document) </div>"
                    },
                    {
                        "id": "job-reference-letter-for-employee ",
                        "label": "Job Reference Letter For Employee ",
                        "file": "job-reference-letter-for-employee-file ",
                        "statusId": "job-reference-letter-for-employee-status "
                    },
                    {
                        "id": "employment-letter",
                        "label": "Employment Letter ",
                        "file": "employment-letter-file",
                        "statusId": "employment-letter-status"
                    },
                    {
                        "id": " notice-of-assessment-of-last-two-years ",
                        "label": "Notice of Assessment of Last Two Years ",
                        "file": " notice-of-assessment-of-last-two-years-file",
                        "statusId": " notice-of-assessment-of-last-two-years-status"
                    },
                    {
                        "id": "t4-of-last-two-years ",
                        "label": " T4 of Last Two Years ",
                        "file": " t4-of-last-two-years-file",
                        "statusId": " t4-of-last-two-years-status"
                    }
                ]
            },
            {
                "id": "form_list",
                "header": "11. Mandatory Forms",
                "items": [
                    {
                        "id": "forms-id-1",
                        "label": "Home Child Care Principal Applicant Questionnaire",
                        "file": "forms-id-1-file",
                        "statusId": "forms-id-1-status",
                        "form-link": "https://zfrmz.com/nQQVrMtTqRxvirlObnEy"
                    },
                    {
                        "id": "forms-id-2",
                        "label": "Home Child Care Spouse Questionnaire",
                        "file": "forms-id-2-file",
                        "statusId": "forms-id-2-status",
                        "form-link": "https://zfrmz.com/e2Vru6p70js4dkmxehqJ"
                    },
                    {
                        "id": "forms-id-3",
                        "label": "Home Child Care Childs Questionnaire",
                        "file": "forms-id-3-file",
                        "statusId": "forms-id-3-status",
                        "form-link": "https://zfrmz.com/g0TzDPaC9R7zZQqUlmLa"
                    }
                ]
            }
        ]
    },
    "Pgwp": {
        "header": "PGWP Documents",
        "subHeader": "Documents that need to be provided by the applicant",
        "sections": [
            {
                "id": "applicant_documents",
                "header": "1. Applicant Documents",
                "items": [
                    {
                        "id": "passport-pages-status",
                        "label": "All old & new Passports (first & last page with all stamps, visas, entry and exit stamp pages)",
                        "file": "passport-pages-file",
                        "statusId": "passport-pages-status",
                        "hint": "<div class='document-list'>All old & new Passports - first & last page with all stamps, visas, entry and exit stamp pages</div>"
                    },
                    {
                        "id": "digital-photo-status",
                        "label": "One digital photo (please refer link for photo specifications)",
                        "file": "digital-photo-file",
                        "statusId": "digital-photo-status",
                        "imp-link": "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/temporary-resident-visa-application-photograph-specifications.html"
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
                        "label": "PGWP Questionnaire",
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