class WeatherClient {
    constructor() {
    }

    fetchWeatherData(city) {
        const apiKey = process.env.API_KEY;
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        return fetch(apiUrl)
        .then((response) => response.json())
    }

}

// const client = new WeatherClient();

// client.fetchWeatherData('London').then((weatherData) => {
//   console.log(`Weather data for ${weatherData.name}:`)
//   console.log(weatherData);
// });

module.exports = WeatherClient