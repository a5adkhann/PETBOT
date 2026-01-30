const mobile_nav = document.getElementsByClassName("navbar-mobile")[0];
const toggle = document.getElementsByClassName("toggle")[0];


toggle.addEventListener("click", () => {
    mobile_nav.classList.toggle("hide");
})


