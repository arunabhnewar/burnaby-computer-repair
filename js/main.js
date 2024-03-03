// disable context menu when click on right button (off this code in development stage)
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });

// Prevents specific key combinations from triggering their default browser behaviors.
// document.onkeydown = (e) => {
//   if (
//     e.key == 123 ||
//     (e.ctrlKey && e.shiftKey && e.key == "I") ||
//     (e.ctrlKey && e.shiftKey && e.key == "C") ||
//     (e.ctrlKey && e.shiftKey && e.key == "J") ||
//     (e.ctrlKey && e.key == "U") ||
//     e.key == "F12"
//   ) {
//     e.preventDefault();
//   }
// };

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
