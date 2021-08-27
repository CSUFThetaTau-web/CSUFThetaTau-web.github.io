// variables
const mobileMen = document.querySelector('#mobile-menu');
const mobileMenInt = document.querySelector('#internal-mobile-menu');
const mobileMenLinks = document.querySelector('.mobileNav-menu');
var mobiledarkmode = document.querySelector('.toggle');

// display mobile menu
mobileMen.addEventListener('click', mobileMenu = () => {
    mobileMen.classList.toggle('is-active');
    mobileMenInt.classList.toggle('is-active');
    mobileMenLinks.classList.toggle('active');
});

// darkmode
var icon1 = document.getElementById("icon-1");
var icon2 = document.getElementById("icon-2");
var PElogo = document.getElementById("PEimage");

icon1.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem('darkMode', 'enabled'); //store this data if dark mode is on
        icon1.src = "images/sun.png";
        PElogo.src = "images/logo2.png";
    } // if
    else {
        localStorage.setItem('darkMode', 'disabled'); //store this data if dark mode is off
        icon1.src = "images/moon.png";
        PElogo.src = "images/logo1.png";
    } // else 
}

icon2.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem('darkMode', 'enabled'); //store this data if dark mode is on
        icon2.src = "images/sun.png";
        PElogo.src = "images/logo2.png";
    } // if
    else {
        localStorage.setItem('darkMode', 'disabled'); //store this data if dark mode is off
        icon2.src = "images/moon.png";
        PElogo.src = "images/logo1.png";
    } // else  
}

// localStorage module to check for stored 'enabled' value
if (localStorage.getItem('darkMode') == 'enabled') {
    document.body.classList.toggle("dark-theme");
    icon1.src = "images/sun.png";
    icon2.src = "images/sun.png";
    PElogo.src = "images/logo2.png";
} // if
else {
    icon1.src = "images/moon.png";
    icon2.src = "images/moon.png";
    PElogo.src = "images/logo1.png";
} // else
