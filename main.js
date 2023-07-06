//get elements from html
const mobileToggler = document.getElementById("toggler");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuList = document.getElementById("mobileMenuList");
const mobileOverlay = document.getElementById("overlay");
const body = document.querySelector("body");

//function for toggler
const toggleMobileMenu = () => {
  mobileToggler.classList.toggle("is-clicked");
  mobileMenu.classList.toggle("hidden");
  mobileMenuList.classList.toggle("invisible");
  mobileOverlay.classList.toggle("hidden");
};

//function for disabling overflow while mobile menu is open
const overflowDisable = () => {
  if (mobileToggler.classList.contains("is-clicked")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
};

//run the functions inside toggler
mobileToggler.addEventListener("click", function () {
  toggleMobileMenu();
  overflowDisable();
});
