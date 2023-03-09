function showTemp(response) {
  console.log(response.data);
  let temp = Math.round(response.data.main.temp);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = temp;

  let minTemp = Math.round(response.data.main.temp_min);
  let maxTemp = Math.round(response.data.main.temp_max);
  let highLow = document.querySelector("#high-low");
  highLow.innerHTML = `H=${maxTemp}˚ L=${minTemp}˚`;

  let description = response.data.weather[0].description;
  let descriptionData = document.querySelector("#description");
  descriptionData.innerHTML = description;

  let humidity = response.data.main.humidity;
  let humidityData = document.querySelector("#humidity");
  humidityData.innerHTML = `Humidity = <strong>${humidity} %</strong>`;

  let pressure = response.data.main.pressure;
  let pressureData = document.querySelector("#pressure");
  pressureData.innerHTML = `Pressure = <strong>${pressure} </strong>`;

  let wind = response.data.wind.speed;
  let windData = document.querySelector("#wind");
  windData.innerHTML = `Wind = <strong>${wind} km/h</strong>`;
}

function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-city-form");
  let h1 = document.querySelector("h1");
  if (searchCity.value) {
    h1.innerHTML = `${searchCity.value}`;
  } else {
    h1.innerHTML = null;
    alert("please type a city");
  }
  let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let now = new Date();
let hours = now.getHours();
let min = now.getMinutes();

if (hours < 10) {
  hours = `0${hours}`;
}
if (min < 10) {
  min = `0${min}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let date = document.querySelector("#time-day");
date.innerHTML = `${day} ${hours}:${min}`;

function showCurrentTemp(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = temp;

  let minTemp = Math.round(response.data.main.temp_min);
  let maxTemp = Math.round(response.data.main.temp_max);
  let highLow = document.querySelector("#high-low");
  highLow.innerHTML = `H=${maxTemp}˚ L=${minTemp}˚`;

  let description = response.data.weather[0].description;
  let descriptionData = document.querySelector("#description");
  descriptionData.innerHTML = description;

  let humidity = response.data.main.humidity;
  let humidityData = document.querySelector("#humidity");
  humidityData.innerHTML = `Humidity = <strong>${humidity} %</strong>`;

  let pressure = response.data.main.pressure;
  let pressureData = document.querySelector("#pressure");
  pressureData.innerHTML = `Pressure = <strong>${pressure} </strong>`;

  let wind = response.data.wind.speed;
  let windData = document.querySelector("#wind");
  windData.innerHTML = `Wind = <strong>${wind} km/h</strong>`;
}
function showPosition(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurrentTemp);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let botton = document.querySelector("#current-bottom");
botton.addEventListener("click", getCurrentPosition);
