class Weather {
    constructor(client) {
        this.client = client
        this.weatherData = null
    }

    load(city) {
        return this.client.fetchWeatherData(city)
        .then((weatherData) => {
            return this.weatherData = weatherData
        })
    }

    getWeatherData() {
        console.log(this.weatherData)
        return this.weatherData
    }
}

const WeatherClient = require('./weatherClient')
const client = new WeatherClient()
const weather = new Weather(client)

weather.load('Bristol')
setTimeout(weather.getWeatherData.bind(weather), 1000)




// console.log("2")
// console.log(weather.load('Bristol'))
// console.log(weather.getWeatherData())

module.exports = Weather