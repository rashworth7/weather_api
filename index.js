
const apiKey = require('./apiKey')
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log('Main')
    console.log(weatherData.main)
    console.log('Weather')
    console.log(weatherData.weather)
  });

console.log('Requesting weather data');