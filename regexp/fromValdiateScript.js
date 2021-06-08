console.log("Form Validation Using JavaScript....");

let uName = document.getElementById("inputName");
const uEmail = document.getElementById("inputEmail");
const uPassword = document.getElementById("inputPassword");
const uMobile = document.getElementById("inputNumber");
const uPincode = document.getElementById("inputPinCode");
const submit = document.getElementById("submit");


let validuName = false;
let validuEmail = false;
let validuMobile = false;
let validuPincode = false;
let validuPassword = false;


uName.addEventListener("blur", () => {
    // Validate Name Here:
    let reg = /^[a-zA-Z]([a-zA-Z0-9\s]){2,14}$/; // (^It Must Start with a-z Or A-Z.)(it can be any between a-z Or A-Z)(Length must be 2-9 character long.)
    var uNameStr = uName.value;
    if (reg.test(uNameStr)) {
        uName.classList.remove("is-invalid");
        validuName = true;
    }
    else {
        uName.classList.add("is-invalid");
    }
});

uEmail.addEventListener("blur", () => {
    // Validate Email Here:    
    let reg = /^([a-z0-9_\.]+)@([a-z]+)\.([a-zA-Z]){2,7}$/; var uEmailStr = uEmail.value;
    if (reg.test(uEmailStr)) {
        uEmail.classList.remove("is-invalid");
        validuEmail = true;
    }
    else {
        // is-invalid
        uEmail.classList.add("is-invalid");
    }
});

uPassword.addEventListener("blur", () => {
    // Validate Password Here:
    let reg = /^(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[!@#\$\%\^&\*])(?=.{6,12})/;
    var uPasswordStr = uPassword.value;
    if (reg.test(uPasswordStr)) {
        uPassword.classList.remove("is-invalid");
        validuPassword = true;
    }
    else {
        uPassword.classList.add("is-invalid");
    }


});

uMobile.addEventListener("blur", () => {
    // Validate Mobile Here:
    let reg = /^[0-9]{10}$/;
    var uMobileStr = uMobile.value;
    if (reg.test(uMobileStr)) {
        uMobile.classList.remove("is-invalid");
        validuMobile = true;
    }
    else {
        // is-invalid
        uMobile.classList.add("is-invalid");
    }
});

uPincode.addEventListener("blur", () => {
    // Validate Mobile Here:
    let reg = /^[0-9]{6}$/;
    var uPincodeStr = uPincode.value;
    if (reg.test(uPincodeStr)) {
        uPincode.classList.remove("is-invalid");
        validuPincode = true;
    }
    else {
        // is-invalid
        uPincode.classList.add("is-invalid");
    }
});

const alertbox = document.getElementById("alert");
submit.addEventListener("click", () => {
    // Submit Your Form:
    let alertUi = '';
    if (validuName && validuEmail && validuMobile && validuPassword && validuPincode) {
        alertUi += `<div id="alert" class="alert alert-info alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your Travel Request Have Been Successfully Submited.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button></div>`;
        alertbox.innerHTML = alertUi;
        uName.value = '';
        uPincode.value = '';
        uMobile.value = '';
        uPassword.value = '';
        uEmail.value = '';
         validuName = false;
         validuEmail = false;
         validuMobile = false;
         validuPincode = false;
         validuPassword = false;

    }
    else {
        alertUi += ` <div id="alert" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Failure!</strong> Please Check Your Details.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button></div>`;
        alertbox.innerHTML = alertUi;
    }
})
