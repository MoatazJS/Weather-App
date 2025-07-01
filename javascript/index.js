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
    if (el.classList.contains("text-bg-dark")) {
      el.classList.remove("text-bg-dark");
      el.classList.add("card-light-theme");
    } else if (el.classList.contains("card-light-theme")) {
      el.classList.remove("card-light-theme");
      el.classList.add("text-bg-dark");
    }
    if (el.classList.contains("bg-secondary")) {
      el.classList.remove("bg-secondary");
      el.classList.add("bg-light-body");
    } else if (el.classList.contains("bg-light-body")) {
      el.classList.remove("bg-light-body");
      el.classList.add("bg-secondary");
    }
    if (el.classList.contains("bg-dark")) {
      el.classList.remove("bg-dark");
      el.classList.add("bg-light-content");
    } else if (el.classList.contains("bg-light-content")) {
      el.classList.remove("bg-light-content");
      el.classList.add("bg-dark");
    }
    if (el.classList.contains("btn-secondary")) {
      el.classList.remove("btn-secondary");
      el.classList.add("white-btn");
    } else if (el.classList.contains("white-btn")) {
      el.classList.remove("white-btn");
      el.classList.add("btn-secondary");
    }
  });
}
