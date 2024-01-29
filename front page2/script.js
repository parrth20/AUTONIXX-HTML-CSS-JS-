sideNav = document.getElementById("sidenav");
function openSesame() {

    sideNav.classList.add("visible");
}
function closeSesame() {

    sideNav.classList.remove("visible");
}

let scrollPos = window.pageYOffset;
var ini = window.pageYOffset;
var st = document.getElementById("sidenav").style.top;
const header = document.getElementById("head");
function lookCool() {
    const currentScrollPos = window.pageYOffset;
    if (scrollPos < currentScrollPos) {
        header.style.opacity = "0";
        document.getElementById("sidenav").style.position = "fixed";
        document.getElementById("sidenav").style.top = "0";

    }
    else if (scrollPos == ini) {
        header.style.opacity = "1";
        document.getElementById("sidenav").style.top = st;
    }
    else {
        header.style.opacity = "1";
        document.getElementById("sidenav").style.top = st;
    }
    scrollPos = currentScrollPos;
}

window.addEventListener("scroll", lookCool);
lookCool();

function navigateToContactUs(){
    window.location.href='contact us/index.html';
}

function navigateToMaintainance(){
    window.location.href='Maintainence/index.html';
}
function navigateToMechanics(){
    window.location.href='Mechanics/index.html';
}
function navigateToSpareParts(){
    window.location.href='spare parts/index.html';
}

function navigateToLogIn(){
    window.location.href='sign in/LOGINPAGE.HTML';
}
function navigateToCustomerSupport(){
    window.location.href='other1/customerSupport.html';
}

function navigateToReturnAndRefund(){
    window.location.href='other1/return&refund.html';
}

function navigateToAboutUs(){
    window.location.href='about us/index.html';
}

function navigateToTermsAndCondition(){
    window.location.href='Tnc/TERMS_CONDITIONS.HTML';
}
