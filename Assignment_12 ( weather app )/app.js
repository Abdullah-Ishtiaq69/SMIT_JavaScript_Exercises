const API_Key = "57cc98d862d69ece3174479d7a710c58";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const countryName = document.querySelector("h2");
const temp = document.querySelector(".temperature");
const desc = document.querySelector(".description");
const searchBox = document.querySelector(".search-box input")
const form = document.querySelector("form");

async function checkWeather(cityName) {
    if(searchBox.value === "") {
        alert("Please Enter a city or country name");
        return;
    }
    const response = await fetch(`${baseUrl}${cityName}&appid=${API_Key}`);
    const data = await response.json();
    countryName.innerText = data.name;
    temp.innerText = `${Math.round(data.main.temp)}°C`;
    desc.innerText = data.weather[0].main;
}

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    checkWeather(searchBox.value)
    searchBox.value = ""
    searchBox.focus();
})

console.log("Window 1");