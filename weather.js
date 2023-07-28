const dotenv = require('dotenv')
dotenv.config()

class Weather {
    constructor(client, UI) {
        this.client = client
        this.UI = UI
        this.weatherData = null
    }

    load(city) {
        return this.client.fetchWeatherData(city)
        .then((weatherData) => {
            return this.weatherData = weatherData
        })
    }

    getWeatherData() {
        this.UI.displayWeather(this.weatherData)
        return this.weatherData
    }

    compareWith(city) {
        return this.client.fetchWeatherData(city)
        .then((cityData) => {
            console.log(cityData)
            console.log(this.weatherData)
            if (cityData.main.temp > this.weatherData.main.temp) {
                console.log(`${city} is warmer than ${this.weatherData.name}.`)
            } else {
                console.log(`${this.weatherData.name} is warmer than ${city}`)
            }
        })
    }

    getTemperature(data) {
        return data.main.temp
    }

    
}

// const WeatherClient = require('./weatherClient')
// const client = new WeatherClient()
// const weather = new Weather(client)

// weather.load('Bristol')
// // setTimeout(weather.getWeatherData.bind(weather), 5000)
// setTimeout(weather.compareWith('Ely')(weather), 5000)




// console.log("2")
// console.log(weather.load('Bristol'))
// console.log(weather.getWeatherData())

module.exports = Weather