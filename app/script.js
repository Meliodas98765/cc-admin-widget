var entityId = "";
var entityName = "";
var relatedModuleName = "Portal_Items";
var curr_status = {};
var idmap = {
    "Super Visa": "superVisa",
    "Visitor Parents": "VisitorParents",
    "Visitor Spouse/Child": "SpousalVisitorVisa",
}
var formContentDiv = document.getElementById('form-content');
var formHeaderDiv = document.getElementById('form-header');
var subHeaderDiv = document.getElementById('sub-header');

const formConfigurations = {
    superVisa: {
        header: "Super Visa Application",
        subHeader: "Sponsor’s or inviter's documents",
        sections: [
            {
                id: "identity_documents",
                header: "1. Identity documents:",
                items: [
                    { id: "pr-card-status", label: "PR Cards(Husband and Wife)", file: "pr-card-file", statusId: "pr-card-status" },
                    { id: "passports-status", label: "PASSPORTS", file: "passports-file", statusId: "passports-status" }
                ]
            },
            {
                id: "relationship_documents",
                header: "2. Proof of relationship docs:",
                items: [
                    { id: "birth-certificates-status", label: "Birth certificates", file: "birth-certificates-file", statusId: "birth-certificates-status" },
                    { id: "education-docs-status", label: "Any education docs showing parents name on it", file: "education-docs-file", statusId: "education-docs-status" },
                    { id: "marriage-certificate-status", label: "Marriage certificate/ Marriage affidavit", file: "marriage-certificate-file", statusId: "marriage-certificate-status" },
                    { id: "family-registration-status", label: "Family registration docs (for clients from Pakistan)", file: "family-registration-file", statusId: "family-registration-status" },
                    { id: "indian-passport", label: "Indian passport or any education document", file: "indian-passport-file", statusId: "indian-passport-status" }

                ]
            },
            {
                id: "employment_docs",
                header: "3. Employment docs:",
                items: [
                    { id: "employment-letter-status", label: "Job/Employment letter", file: "employment-letter-file", statusId: "employment-letter-status" },
                    { id: "pay-slips-status", label: "Pay slips", file: "pay-slips-file", statusId: "pay-slips-status" },
                    { id: "notice-of-assessment-status", label: "Notice Of Assessment And T4", file: "notice-of-assessment-file", statusId: "notice-of-assessment-status" },
                    // { id: "t4-status", label: "T4", file: "t4-file", statusId: "t4-status" },
                    { id: "additional-income-proof-status", label: "Proof of additional income (incorporation registration)", file: "additional-income-proof-file", statusId: "additional-income-proof-status" },
                ]
            },
            {
                id: "proof_of_funds",
                header: "4. Proof of funds:",
                items: [
                    { id: "bank-statements-status", label: "Bank statements", file: "bank-statements-file", statusId: "bank-statements-status" },
                    // { id: "fixed-deposits-status", label: "Fixed deposits", file: "fixed-deposits-file", statusId: "fixed-deposits-status" }
                ]
            },
            {
                id: "not_mandatory_docs",
                header: "5. Not Mandatory:",
                items: [
                    { id: "house-title-status", label: "House title", file: "house-title-file", statusId: "house-title-status" }
                ]
            },
            {
                id: "applicant_documents",
                header: "* Please select Applicant’s documents: *",
                items: []
            }
        ],
        applicant_documents: {
            Mother: [
                { id: "mother-questionnaire-status", label: "Questionnaire Form", file: "mother-questionnaire-file", statusId: "mother-questionnaire-status" },
                { id: "mother-passport-status", label: "Mother Passport", file: "mother-passport-file", statusId: "mother-passport-status" },
                { id: "mother-medical-insurance-status", label: "Mother Medical insurance", file: "medical-insurance-file", statusId: "mother-medical-insurance-status" },
                { id: "mother-medical-sheet-status", label: "Mother E medical sheet", file: "medical-sheet-file", statusId: "mother-medical-sheet-status" },
                { id: "mother-marriage-status", label: "Mother Marriage certificate/ marriage affidavit", file: "mother-marriage-file", statusId: "mother-marriage-status" },
                { id: "mother-rep-status", label: "Mother Use of rep", file: "mother-rep-file", statusId: "mother-rep-status" },
                { id: "mother-80-status", label: "Mother Digital photo (If age is above 80)", file: "mother-80-file", statusId: "mother-80-status" }
            ],
            Father: [
                { id: "father-questionnaire-status", label: "Questionnaire Form", file: "father-questionnaire-file", statusId: "father-questionnaire-status" },
                { id: "father-passport-status", label: "Father Passport", file: "father-passport-file", statusId: "father-passport-status" },
                { id: "father-medical-insurance-status", label: "Father Medical insurance", file: "father-medical-insurance-file", statusId: "father-medical-insurance-status" },
                { id: "father-medical-sheet-status", label: "Father E medical sheet", file: "father-medical-sheet-file", statusId: "father-medical-sheet-status" },
                { id: "father-marriage-status", label: "Father Marriage certificate/ marriage affidavit", file: "father-marriage-file", statusId: "father-marriage-status" },
                { id: "father-rep-status", label: "Father Use of rep", file: "father-rep-file", statusId: "father-rep-status" },
                { id: "father-80-status", label: "Father Digital photo (If age is above 80)", file: "father-80-file", statusId: "father-80-status" }
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
    }

};

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

function createPortalSubgroup(item) {
    
    if (item.id == 'mother-marriage-status') {
        console.log(item);   
    }
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

async function loadForm(formType,formData, selectedApplicantDocuments) {
    formContentDiv.innerHTML = '';
    formHeaderDiv.innerHTML = '';
    subHeaderDiv.innerHTML = '';
    formHeaderDiv.innerHTML = "<h2>" + formData.header + "</h2>";
    subHeaderDiv.innerHTML = "<h1>" + formData.subHeader + "</h1>";
    formData.sections.forEach(section => {
        if (section.id === 'applicant_documents') {
            createApplicantSection(formType,selectedApplicantDocuments);
        } else {
            const items = section.items.map(item => ({
                id: item.id,
                label: item.label,
                file: item.file,
                statusId: item.statusId
            }));
            formContentDiv.appendChild(createPortalGroup(section.id, section.header, items));
        }
    });
}

function createApplicantSection(formType, selectedApplicantDocuments) {
    const applicantDocumentTypes = ['Mother', 'Father'];
    console.log(selectedApplicantDocuments);

    // Get the selected form's configuration
    const formConfig = formConfigurations[formType];

    
    applicantDocumentTypes.forEach(applicantType => {
        const subgroupDiv = document.createElement('div');
        subgroupDiv.className = 'admin-portal-subgroup';
        subgroupDiv.id = applicantType;
        subgroupDiv.style.display = 'none';

        const iconDiv = document.createElement('div');
        iconDiv.className = 'workdrive-icon';

        const header = document.createElement('h2');
        header.style.color = 'rgb(9, 1, 32)';
        header.style.textAlign = 'center';
        header.textContent = `${applicantType} documents`;
        iconDiv.appendChild(header);
        subgroupDiv.appendChild(iconDiv);

        const items = formConfig.applicant_documents[applicantType];

        if (items && items.length > 0) {
            items.forEach(item => {
                // Skip "mother-marriage-status" and "father-marriage-status" when selectedApplicantDocuments is not "Both"
                if (
                    (selectedApplicantDocuments !== 'Both' && formType == "Super Visa" &&
                    ((applicantType === 'Mother' && item.id === 'mother-marriage-status') ||
                    (applicantType === 'Father' && item.id === 'father-marriage-status')))
                ) {
                    console.log(selectedApplicantDocuments);
                    return;
                }

                // Define section headers dynamically based on the item IDs
                const sectionHeaderMap = {
                    // Super Visa and General mappings
                    "mother-questionnaire-status": "1. Questionnaire Form:",
                    "father-questionnaire-status": "1. Questionnaire Form:",
                    "mother-passport-status": "2. Identity documents:",
                    "father-passport-status": "2. Identity documents:",
                    "mother-medical-insurance-status": "3. Medical insurance:",
                    "mother-medical-sheet-status": "4. E medical sheet:",
                    "father-medical-insurance-status": "3. Medical insurance:",
                    "father-medical-sheet-status": "4. E medical sheet:",
                    "mother-marriage-status": "5. Proof of relationship docs:",
                    "father-marriage-status": "5. Proof of relationship docs:",
                    "mother-rep-status": "General docs:",
                    "father-rep-status": "General docs:",
                
                    // Visitor Parents Form mappings
                    "passports-stamps-status": "1. Documents for Parents:",
                    "spouse-passport-status": "1. Documents for Parents:",
                    "marriage-certificate-status": "1. Documents for Parents:",
                    "photo-scanned-status": "1. Documents for Parents:",
                    
                    "property-documents-status": "2. Ties to Home Country and Finance Available in India:",
                    "income-proof-status": "2. Ties to Home Country and Finance Available in India:",
                    "job-letter-status": "2. Ties to Home Country and Finance Available in India:",
                    "leave-sanction-status": "2. Ties to Home Country and Finance Available in India:",
                    "income-tax-documents-status": "2. Ties to Home Country and Finance Available in India:",
                    "bank-statement-status": "2. Ties to Home Country and Finance Available in India:",
                    "paystubs-status": "2. Ties to Home Country and Finance Available in India:",
                    "business-documents-status": "2. Ties to Home Country and Finance Available in India:",
                    "finance-available-status": "2. Ties to Home Country and Finance Available in India:",
                    
                    "itinerary-status": "3. Purpose of Visit:",
                    "returned-ticket-status": "3. Purpose of Visit:",
                    "duration-of-stay-status": "3. Purpose of Visit:",
                    
                    "rejection-letter-status": "4. Letter of Previous Rejections (if any):",
                    
                    "birth-certificate-status": "5. Documents from Inviter:",
                    "job-confirmation-status": "5. Documents from Inviter:",
                    "business-registration-status": "5. Documents from Inviter:",
                    "business-license-status": "5. Documents from Inviter:",
                    "business-bank-account-status": "5. Documents from Inviter:",
                    "business-tax-documents-status": "5. Documents from Inviter:",
                    "notice-assessment-status": "5. Documents from Inviter:",
                    "other-income-proof-status": "5. Documents from Inviter:",
                    "bank-statement-inviter-status": "5. Documents from Inviter:",
                    "canadian-status-proof-status": "5. Documents from Inviter:",
                    "indian-passport-inviter-status": "5. Documents from Inviter:"
                };

                const sectionHeader = document.createElement('div');
                sectionHeader.className = 'category-header';
                sectionHeader.textContent = sectionHeaderMap[item.id];
                subgroupDiv.appendChild(sectionHeader);

                subgroupDiv.appendChild(createPortalSubgroup(item));
            });

            formContentDiv.appendChild(subgroupDiv);

            // Show the relevant section based on the selectedApplicantDocuments
            if (selectedApplicantDocuments === applicantType || selectedApplicantDocuments === 'Both') {
                subgroupDiv.style.display = 'block';
            }
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
                                "id":key,
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
                loadForm(formType,formConfigurations[formType], selectedApplicantDocuments); // Pass the value here
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
    item = items[portal_hash];
    console.log(item);
    if (item[1] != null) {
        button_list = document.getElementById(item[1]).querySelectorAll(".admin-portal-subgroup-actions .file-actions")[0].children;
        status_tml = document.getElementById(item[1]).querySelector(".admin-portal-subgroup-actions .admin-portal-status");
        if (item[0] == "Pending Review") {
            for (let i = 0; i < button_list.length; i++) {
                const button = button_list[i];
                button.classList.remove("hide-imp");
            }
            status_tml.textContent = "Status: Pending Review";
            status_tml.textContent = "Status: Pending Review";
        } else if (item[0] == "Accepted") {
            for (let i = 0; i < button_list.length; i++) {
                const button = button_list[i];
            }
            status_tml.textContent = "Status: Accepted";
        } else if (item[0] == "Rejected") {
            for (let i = 0; i < button_list.length; i++) {
                const button = button_list[i];
            }
            status_tml.innerHTML = `Status: Rejected <br> <div class='reject_reason'>Reason: ${item[2]}</div>`;
        }
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
                        "id":key,
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