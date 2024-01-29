const usertab = document.querySelector("[your-weather]");
const searchtab = document.querySelector("[search-tab]");

const usercontainer = document.querySelector(".cantainer");

const grantacces = document.querySelector(".grant-loc-container");
const searchform = document.querySelector(".form-container");
const loading = document.querySelector(".loading-conatiner");

// apikey needed
//initially varrible needed


let currenttab = usertab; // ye by default man liya hai
const API_KEY = "9cf7252deb6cdb5dbef5eb58a60e34d7";
currenttab.classList.add("current-tab");//add css properties with this

//ek or kam remaining hai ???


//function call to switch the tab
function switchTab(clickedTab) {
    if(clickedTab != currenttab) { 
        //matlb jiss tab pe hai uss par click nahi kiya
        currenttab.classList.remove("current-tab");
        currenttab = clickedTab;
        currenttab.classList.add("current-tab");

    }
}
usertab.addEventListener("click", () => {
    switchTab(usertab);
}
);
searchtab.addEventListener("click", () => {
    switchTab(searchtab);
}
);