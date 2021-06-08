let burger = document.querySelector(".burger");
let navBar = document.querySelector(".navbar");
let navList = document.querySelector(".nav-list");
let rightNav = document.querySelector(".rightNav");

let homeId = document.getElementById("homeId");
homeId.addEventListener("click",()=>{
    rightNav.classList.toggle("v_class");
    navList.classList.toggle("v_class");
    navBar.classList.toggle("h-nav");
});

let serviceId = document.getElementById("serviceId");
serviceId.addEventListener("click",()=>{
    rightNav.classList.toggle("v_class");
    navList.classList.toggle("v_class");
    navBar.classList.toggle("h-nav");
});

let contactId = document.getElementById("contactId");
contactId.addEventListener("click",()=>{
    rightNav.classList.toggle("v_class");
    navList.classList.toggle("v_class");
    navBar.classList.toggle("h-nav");
});


burger.addEventListener("click",()=>{
    // navBar.classList.toggle("h-nav");
    rightNav.classList.toggle("v_class");
    navList.classList.toggle("v_class");
    navBar.classList.toggle("h-nav");
});