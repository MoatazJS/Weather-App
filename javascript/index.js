var toggleBtn = document.querySelectorAll(".toggleBtn");
var allElements = document.querySelectorAll("*");
var sun = document.querySelectorAll(".sun");
var moon = document.querySelectorAll(".moon");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    toggleLightTheme();
  });
});
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
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

/** API AND WEBSITE FUNCTIONALITY */

var searchForm = document.querySelector("form");
var cityInput = document.getElementById("citySearch");

searchForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  var city = cityInput.value.trim();
  if (city !== "") {
    getWeather(city);
  }
});

async function getWeather(city) {
  var apiKey = "7b8db958d8a24998bc962133253006";
  var url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;

  try {
    var res = await fetch(url);
    var data = await res.json();

    updateCards(data.forecast.forecastday, data.location.name);
  } catch (error) {
    console.error("Failed to fetch weather:", error);
  }
}

function updateCards(forecastDays, cityName) {
  var cards = document.querySelectorAll(".col-md-4");

  forecastDays.forEach((day, index) => {
    if (cards[index]) {
      var card = cards[index];

      card.querySelector(".cityName").textContent = cityName;
      card.querySelector(".date").textContent = new Date(
        day.date
      ).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      });
      card.querySelector(".temp").textContent = `${day.day.avgtemp_c}°C`;
      card.querySelector(".humidity").textContent = `${day.day.avghumidity}%`;
      card.querySelector(
        ".windSpeed"
      ).textContent = `${day.day.maxwind_kph} km/h`;
    }
  });
}
