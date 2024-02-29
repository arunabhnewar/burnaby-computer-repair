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

// service menu dropdown event
document.addEventListener("DOMContentLoaded", function () {
  // Get all dropdown buttons
  var dropdowns = document.querySelectorAll(".dropbtn");

  // Add click event listener to each dropdown button
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      var dropdownContent = this.nextElementSibling;
      // Toggle the display of dropdown content
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });
  });

  // Close dropdown content when clicking outside of it
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(function (dropdown) {
        dropdown.style.display = "none";
      });
    }
  });
});

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

//
document.addEventListener("DOMContentLoaded", function () {
  // Get all mobile dropdown buttons
  var mobileDropdowns = document.querySelectorAll(".mobile-dropbtn");

  // Add click event listener to each mobile dropdown button
  mobileDropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      var mobileDropdownContent = this.nextElementSibling;
      // Toggle the display of mobile dropdown content
      mobileDropdownContent.style.display =
        mobileDropdownContent.style.display === "block" ? "none" : "block";
    });
  });

  // Close mobile dropdown content when clicking outside of it
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".mobile-dropbtn")) {
      var mobileDropdowns = document.querySelectorAll(
        ".mobile-dropdown-content"
      );
      mobileDropdowns.forEach(function (dropdown) {
        dropdown.style.display = "none";
      });
    }
  });
});
