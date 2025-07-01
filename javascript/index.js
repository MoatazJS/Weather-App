var toggleBtn = document.querySelectorAll(".toggleBtn");
var allElements = document.querySelectorAll("*");
var sun = document.querySelectorAll(".sun");
var moon = document.querySelectorAll(".moon");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    toggleLightTheme();
  });
});

function toggleLightTheme() {
  sun.forEach((icon) => icon.classList.toggle("d-none"));
  moon.forEach((icon) => icon.classList.toggle("d-none"));

  allElements.forEach((el) => {
    if (el.classList.contains("bg-secondary")) {
      el.classList.remove("bg-secondary");
      el.classList.add("bg-light-body");
    } else if (el.classList.contains("bg-light-body")) {
      el.classList.remove("bg-light-body");
      el.classList.add("bg-secondary");
    }
  });
}
