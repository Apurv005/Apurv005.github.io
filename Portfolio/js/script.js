let hamIcon = document.querySelector(".hamIcon");
let clickedA = document.querySelectorAll(".navigation .ToggleMenu .navItems ul li a");
let ToggleMenu = document.querySelector(".ToggleMenu");

// Sticky Navigation:
let navBar = document.querySelector(".navigation");
window.onscroll = () => {
    if (this.scrollY > 20) {
        navBar.classList.add("sticky");
        clickedA.forEach((items) => {
            items.classList.add("scrollHover");
        });
    }
    else {
        navBar.classList.remove("sticky");
        clickedA.forEach((items) => {
            items.classList.remove("scrollHover");
        });
    }
}

// Navigation Menu:
hamIcon.addEventListener("click",()=>{
    hamIcon.classList.toggle("fa-times");
    ToggleMenu.classList.toggle("navToggle");
});
clickedA.forEach((link)=>{
    link.addEventListener("click",()=>{
        hamIcon.classList.remove("fa-times");
        ToggleMenu.classList.remove("navToggle");
    })
});

// Shadow Effect :
let shadow = document.querySelector(".shadow");
// Image Preview JavaScript: 
const images = document.querySelectorAll(".items img");
window.onload = () => {
    for (let index = 0; index < images.length; index++) {
        images[index].setAttribute("onclick", "preview(this)");
    }
}
let previewBox = document.querySelector(".previewBox"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon");
// function that display previewBox when user select an image.
function preview(e) {
    console.log(e);
    let selectedPrevImg = e.src;
    previewImg.src = selectedPrevImg;
    previewBox.classList.add("show");
    document.body.classList.add("stopScroll");
    shadow.style.display = "block";
    closeIcon.onclick = () => {
        previewBox.classList.remove("show");
        document.body.classList.remove("stopScroll");
        shadow.style.display = "none";
    }
}

// Animation On Scroll:
let scrollTopButton = document.querySelector(".scrollTopButton");
let animationExecute = () => {
    let animateDiv = document.querySelectorAll(".animation");
    animateDiv.forEach((ab) => {
        let animateDivPosition = ab.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;
        if (animateDivPosition < screenPosition) {
            ab.classList.add("appear");
        }
        else {
            ab.classList.remove("appear");
        }
        let myskill = document.getElementById("myskill");
        if (myskill.getBoundingClientRect().top < screenPosition) {
            scrollTopButton.style.display = "block";
        }
        else {
            scrollTopButton.style.display = "none";
        }

        let footerSection = document.getElementById("footerSection");
        let footerSectionPosition = footerSection.getBoundingClientRect().top;
        let scrollTopButtonPosition = scrollTopButton.getBoundingClientRect().top;
        if (scrollTopButtonPosition > footerSectionPosition) {
            scrollTopButton.style.color = "#fff";
        }
        else{
            scrollTopButton.style.color = "#000";
        }

    });
}
window.addEventListener("scroll", animationExecute);

// Change The Scroll color when scrollTopButton goes to footer.
let home = document.getElementById("home");
scrollTopButton.addEventListener("click", () => {
    window.scrollTo(0, Math.floor(home.getBoundingClientRect().top));
});

// Toggle Skill Section:
let educationOuter = document.querySelector(".educationOuter");
let respEducationOuter = document.querySelector(".respEducationOuter");
const mediaQuery = window.matchMedia("(max-width: 1000px)");
function widthChange(e) {
    if(e.matches){
        educationOuter.style.display = "none";
        respEducationOuter.style.display = "flex";
    }
    else{
        educationOuter.style.display = "flex";
        respEducationOuter.style.display = "none";
    }
}
mediaQuery.addListener(widthChange);
widthChange(mediaQuery);



// Form Validation Using Regular Expression
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let errorMessage = document.getElementById("errorMessage");
let errorEMessage = document.getElementById("errorEMessage");
let errorCMessage = document.getElementById("errorCMessage");
let userContact = document.getElementById("userNumber");

let validateUserName;
let validateEmail;
let validateContact;
// UserName Validation:
userName.addEventListener("blur", () => {
    // Validate Name Here:
    let reg = /^[a-zA-Z]([a-zA-Z0-9\s]){2,14}$/; // (^It Must Start with a-z Or A-Z.)(it can be any between a-z Or A-Z)(Length must be 2-9 character long.)
    var uNameStr = userName.value;
    console.log(uNameStr);
    if (reg.test(uNameStr)) {
        errorMessage.classList.remove("isInvalid");
        validateUserName = true;
    }
    else {
        errorMessage.classList.add("isInvalid");
        validateUserName = false;
    }
});

// Email Validation:
userEmail.addEventListener("blur", () => {
    // Validate Email Here:    
    let reg = /^([a-z0-9_\.]+)@([a-z]+)\.([a-zA-Z]){2,7}$/; 
    var userEmailStr = userEmail.value;
    if (reg.test(userEmailStr)) {
        errorEMessage.classList.remove("isInvalid");
        validateEmail = true;
    }
    else {
        // is-invalid
        errorEMessage.classList.add("isInvalid");
        validateEmail = false;
    }
});

// Contact Number Validation:
userContact.addEventListener("blur", () => {
    let reg = /^[0-9]{10}$/;
    var userContactStr = userContact.value;
    if (reg.test(userContactStr)) {
        errorCMessage.classList.remove("isInvalid");
        validateContact = true;
    }
    else {
        // is-invalid
        errorCMessage.classList.add("isInvalid");
        validateContact = false;
    }
});
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click",(e)=>{
    if(validateUserName && validateEmail && validateContact){
        alert("Your Response is currently not submited! Please send it after some time");
    }
    else{
        alert("Please fill details carefully");
    }
    e.preventDefault();
});


// Jquery Plugin:
// JavaScript For Dynamic Typing: 
var typed = new Typed("#dType", {
    strings: ["Web Developer", "Front End Developer"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
    smartBackspace: true
});