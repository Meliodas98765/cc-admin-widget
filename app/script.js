var entityId = "";
var entityName = "";
var relatedModuleName = "Portal_Items";
var curr_status = {};
var idmap = {
    "Super Visa": "superVisa",
    "BC PNP": "bcPnp"
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
                    { id: "pr-card-status", label: "PR CARD", file: "pr-card-file", statusId: "pr-card-status" },
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
                    { id: "indian-passport-status", label: "Indian passport or any education document", file: "indian-passport-file", statusId: "indian-passport-status" }
        
                ]
            },
            {
                id: "employment_docs",
                header: "3. Employment docs:",
                items: [
                    { id: "employment-letter-status", label: "Job/Employment letter", file: "employment-letter-file", statusId: "employment-letter-status" },
                    { id: "pay-slips-status", label: "Pay slips", file: "pay-slips-file", statusId: "pay-slips-status" },
                    { id: "notice-of-assessment-status", label: "Notice of assessment", file: "notice-of-assessment-file", statusId: "notice-of-assessment-status" },
                    { id: "t4-status", label: "T4", file: "t4-file", statusId: "t4-status" },
                    { id: "additional-income-proof-status", label: "Proof of additional income (incorporation registration)", file: "additional-income-proof-file", statusId: "additional-income-proof-status" },
                ]
            },
            {
                id: "proof_of_funds",
                header: "4. Proof of funds:",
                items: [
                    { id: "bank-statements-status", label: "Bank statements", file: "bank-statements-file", statusId: "bank-statements-status" },
                    { id: "fixed-deposits-status", label: "Fixed deposits", file: "fixed-deposits-file", statusId: "fixed-deposits-status" }
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
    bcPnp: {
        header: "BC PNP Application",
        subHeader: "bc PNP",
        sections: [
            {
                id: "applicant_questionnaire",
                header: "1. Applicant Questionnaire Form.",
                items: [
                    { id: "form-status", portal_hash: "5202198000074634006", label: "Questionnaire Form", file: "first-sem-results-file", statusId: "form-status" }
                ]
            },
            {
                id: "identity_documents",
                header: "2. Identity documents:",
                items: [
                    { id: "bc-id-status", label: "BC ID", file: "bc-id-file", statusId: "bc-id-status" },
                    { id: "passports-status", label: "PASSPORTS", file: "passports-file", statusId: "passports-status" }
                ]
            },
            {
                id: "education_documents",
                header: "3. Education documents:",
                items: [
                    { id: "transcripts-status", label: "Transcripts", file: "transcripts-file", statusId: "transcripts-status" },
                    { id: "degree-certificate-status", label: "Degree Certificate", file: "degree-certificate-file", statusId: "degree-certificate-status" }
                ]
            },
            {
                id: "employment_docs",
                header: "4. Employment docs:",
                items: [
                    { id: "job-offer-status", label: "Job Offer", file: "job-offer-file", statusId: "job-offer-status" },
                    { id: "pay-stubs-status", label: "Pay Stubs", file: "pay-stubs-file", statusId: "pay-stubs-status" },
                    { id: "tax-returns-status", label: "Tax Returns", file: "tax-returns-file", statusId: "tax-returns-status" }
                ]
            },
            {
                id: "proof_of_funds",
                header: "5. Proof of funds:",
                items: [
                    { id: "bank-statements-status", label: "Bank Statements", file: "bank-statements-file", statusId: "bank-statements-status" },
                    { id: "investment-documents-status", label: "Investment Documents", file: "investment-documents-file", statusId: "investment-documents-status" }
                ]
            },
            {
                id: "supporting_documents",
                header: "6. Supporting documents:",
                items: [
                    { id: "recommendation-letters-status", label: "Recommendation Letters", file: "recommendation-letters-file", statusId: "recommendation-letters-status" },
                    { id: "proof-of-residence-status", label: "Proof of Residence", file: "proof-of-residence-file", statusId: "proof-of-residence-status" }
                ]
            }
        ],
        applicant_documents: {
            Mother: [
                { id: "mother-passport-status", label: "Mother Passport", file: "mother-passport-file", statusId: "mother-passport-status" },
                { id: "mother-medical-insurance-status", label: "Medical insurance", file: "medical-insurance-file", statusId: "mother-medical-insurance-status" },
                { id: "mother-medical-sheet-status", label: "E medical sheet", file: "medical-sheet-file", statusId: "mother-medical-sheet-status" },
                { id: "mother-marriage-status", label: "Marriage certificate/ marriage affidavit", file: "mother-marriage-file", statusId: "mother-marriage-status" },
                { id: "mother-rep-status", label: "Use of rep", file: "mother-rep-file", statusId: "mother-rep-status" },
                { id: "mother-80-status", label: "Digital photo (If age is above 80)", file: "mother-80-file", statusId: "mother-80-status" }
            ],
            Father: [
                { id: "father-passport-status", label: "Father Passport", file: "father-passport-file", statusId: "father-passport-status" },
                { id: "father-medical-insurance-status", label: "Medical insurance", file: "father-medical-insurance-file", statusId: "father-medical-insurance-status" },
                { id: "father-medical-sheet-status", label: "E medical sheet", file: "father-medical-sheet-file", statusId: "father-medical-sheet-status" },
                { id: "father-marriage-status", label: "Marriage certificate/ marriage affidavit", file: "father-marriage-file", statusId: "father-marriage-status" },
                { id: "father-rep-status", label: "Use of rep", file: "father-rep-file", statusId: "father-rep-status" },
                { id: "father-80-status", label: "Digital photo (If age is above 80)", file: "father-80-file", statusId: "father-80-status" }
            ]
        }
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

async function loadForm(formData, selectedApplicantDocuments) {
    formContentDiv.innerHTML = '';
    formHeaderDiv.innerHTML = '';
    subHeaderDiv.innerHTML = '';
    formHeaderDiv.innerHTML = "<h2>" + formData.header + "</h2>";
    subHeaderDiv.innerHTML = "<h1>" + formData.subHeader + "</h1>";
    formData.sections.forEach(section => {
        if (section.id === 'applicant_documents') {
            createApplicantSection(selectedApplicantDocuments);
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

function createApplicantSection(selectedApplicantDocuments) {
    ['Mother', 'Father', 'Both'].forEach(applicantType => {
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

        const items = formConfigurations.superVisa.applicant_documents[applicantType];
        items.forEach(item => {
            const sectionHeaderMap = {
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
                "mother-rep-status": "6. General docs:",
                "father-rep-status": "6. General docs:",
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
                            Entity: "CC_Portal_Items",
                            APIData: {
                                "id": key,
                                "Status": "Accepted"
                            },
                            Trigger: ["workflow", "blueprint"]
                        }
                        var response = await updateData(config);
                        console.log("response");
                        console.log(response);
                        if (response.data[0].code == "SUCCESS") {
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
    ZOHO.CRM.API.getRecord({
        Entity: "Cases", approved: "both", RecordID: entityId
    })
    .then(async function (data) {
        console.log(data);
        const typeofapp = data.data[0].Type_of_Application;
        const statusdata = data.data[0].status;
        const selectedApplicantDocuments = data.data[0].Selected_Applicant_s_Documents; // Add this line
        console.log(typeofapp, idmap[typeofapp]);
        const formType = idmap[typeofapp];
        if (formType && formConfigurations[formType]) {
            loadForm(formConfigurations[formType], selectedApplicantDocuments); // Pass the value here
        } else {
            console.error('Failed to load form configuration.');
        }
        // get related record for Portal Item
        const related_items = await getPortalItems("Cases", entityId, "Portal_Items", 1, 200);
        console.log(related_items);
        for (let index = 0; index < related_items.data.length; index++) {
            const element = related_items.data[index];
            curr_status[element.Portal_Item_Hash] = [element.Status, element.Item_ID, element.Rejected_Reason, element.File_preview];
            // status update
            update_item_status(curr_status, element.Portal_Item_Hash);
        }
        console.log("curr_status");
        console.log(curr_status);
        // for (let iterator in curr_status) {
        //     console.log(iterator);
        // }   
    })
});
ZOHO.embeddedApp.init().then(function (data) {
    ZOHO.CRM.UI.Resize({ height: "100%", width: "70%" }).then(function (data) {

    })
});

function update_item_status(items, portal_hash) {
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
                    Entity: "CC_Portal_Items",
                    APIData: {
                        "id": key,
                        "Status": "Rejected",
                        "Rejected_Reason": reason
                    },
                    Trigger: ["workflow", "blueprint"]
                }
                var response = await updateData(config);
                console.log("response");
                console.log(response);
                if (response.data[0].code == "SUCCESS") {
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

async function getPortalItems(module_name, recID, related_list, page, per_page) {
    return ZOHO.CRM.API.getRelatedRecords({ Entity: module_name, RecordID: recID, RelatedList: related_list, page: page, per_page: per_page });
}

async function updateData(APIData) {
    return ZOHO.CRM.API.updateRecord(APIData);
}

async function getRecord(ModuleName, RecId) {
    return ZOHO.CRM.API.getRecord({ Entity: ModuleName, approved: "both", RecordID: RecId });
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
        // if ("pr-card-status" == curr_status[key][1]) {
            var getData = await getRecord("CC_Portal_Items", key);
            console.log("response");
            console.log(getData);
            if (getData.data[0] != "") {
                console.log("Indside Succes");
                if (getData.data[0].File_preview != "") {
                    var fileUrl = getData.data[0].File_preview;
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
