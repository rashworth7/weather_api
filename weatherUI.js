class WeatherUI {

    displayWeather(weatherData) {
        console.log(`City:`.padEnd(14), weatherData.name)
        console.log('Weather:'.padEnd(14), weatherData.weather[0].main)
        console.log('Temperature:'.padEnd(14), weatherData.main.temp)
        console.log('Feels like:'.padEnd(14), weatherData.main.feels_like)
        console.log('Humidity:'.padEnd(14), weatherData.main.humidity)
    }
}

module.exports = WeatherUI