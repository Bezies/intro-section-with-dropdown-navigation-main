// MENU FEATURES 

const features = document.querySelector(".menu-features-off");
const featuresDown = document.querySelector(".features-down");

featuresDown.addEventListener("click", () => {
    if (features.classList == "menu-features-off") {
        features.classList.replace("menu-features-off", "menu-features");
        featuresDown.classList.replace("features-down", "features-up");
    } else {
        features.classList.replace("menu-features", "menu-features-off");
        featuresDown.classList.replace("features-up", "features-down")
    }
})


// MENU COMPANY

const company = document.querySelector(".menu-company-off");
const companyDown = document.querySelector(".company-down");

companyDown.addEventListener("click", () => {
    if (company.classList == "menu-company-off") {
        company.classList.replace("menu-company-off", "menu-company");
        companyDown.classList.replace("company-down", "company-up");
    } else {
        company.classList.replace("menu-company", "menu-company-off");
        companyDown.classList.replace("company-up", "company-down")
    }
})




// MOBILE MENU 

const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const navbar = document.querySelector(".navig-bar");
const main = document.querySelector("main");
const header = document.querySelector("header");


hamburger.addEventListener("click", () => {
    navbar.classList.add("navig-bar--on");
    main.style.opacity = "0.3";
})

close.addEventListener("click", () => {
    navbar.classList.remove("navig-bar--on");
    main.style.opacity = "1"
})