// disable context menu when click on right button (off this code in development stage)
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Prevents specific key combinations from triggering their default browser behaviors.
document.onkeydown = (e) => {
  if (
    e.key == 123 ||
    (e.ctrlKey && e.shiftKey && e.key == "I") ||
    (e.ctrlKey && e.shiftKey && e.key == "C") ||
    (e.ctrlKey && e.shiftKey && e.key == "J") ||
    (e.ctrlKey && e.key == "U") ||
    e.key == "F12"
  ) {
    e.preventDefault();
  }
};
