const SUBMIT_API = "https://rr9k7hc8hb.execute-api.ap-south-1.amazonaws.com/default/skillsyardContactUsForm";

const CONTACT_US_PHONE_NAME_ID = "contact-us-name";
const CONTACT_US_PHONE_EMAIL_ID = "contact-us-email";
const CONTACT_US_PHONE_PHONE_ID = "contact-us-phone";
const CONTACT_US_SUBJECT_ID = "contact-us-subject";
const CONTACT_US_MESSAGE_ID = "contact-us-message";

const KEY_ID_MAP = {
    "name": CONTACT_US_PHONE_NAME_ID,
    "email": CONTACT_US_PHONE_EMAIL_ID,
    "phone": CONTACT_US_PHONE_PHONE_ID,
    "subject": CONTACT_US_SUBJECT_ID,
    "message": CONTACT_US_MESSAGE_ID
};
const formElement = document.querySelector('form');

const submitBtn = document.getElementById("submit-btn");

// TODO: add few validations
async function submit_form() {
    const request = {};
    Object.entries(KEY_ID_MAP).forEach(([key, id]) => {
        request[key] = document.getElementById(id).value;
    });
    const body = JSON.stringify(request);
    console.log(`Sending Request: ${JSON.stringify(request)}`);
    const res = await fetch(SUBMIT_API, { 
        method: "POST", 
        body,
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    console.info("Response: ", data);
}

function postSubmission() {
    alert("We've received your information, Thank You!");
    submitBtn.disabled = false;
    submitBtn.style.cursor = 'pointer'; 
    clearInput();
}

function clearInput() {
    Object.entries(KEY_ID_MAP).forEach(([key, id]) => {
        document.getElementById(id).value = '';
        if (id == CONTACT_US_SUBJECT_ID) {
            // for default value of drop-down
            document.getElementById(id).value = 'default';
        }
    });
}


formElement.addEventListener('submit', event => {
    console.log('Submiting form:', event);
    event.preventDefault();
    submitBtn.disabled = true;
    submitBtn.style.cursor = 'wait'; 
    submit_form().then(()=>{})
        .finally(postSubmission);
});

