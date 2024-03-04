//responsive mobile menu toggle button event
document.addEventListener("DOMContentLoaded", function () {
  const menuTogglerBtn = document.querySelector(".menu-toggler-btn button");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Function to close the mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.remove("show");
  }

  // Event listener for the menu toggler button
  menuTogglerBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("show");
  });

  // Event listener for clicks outside the mobile menu
  document.addEventListener("click", function (event) {
    if (
      !menuTogglerBtn.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });
});
