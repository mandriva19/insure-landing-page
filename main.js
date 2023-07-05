const mobileToggler = document.getElementById("toggler");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuList = document.getElementById("mobileMenuList");

const toggleMobileMenu = () => {
  mobileToggler.classList.toggle("is-clicked");
  mobileMenu.classList.toggle("hidden");
  mobileMenuList.classList.toggle("invisible");
};
