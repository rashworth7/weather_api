const Weather = require('./weather')
const WeatherClient = require('./weatherClient')

describe('Weather class', () => {
    it('adds weather for London', (done) => {
        const mockClient = {
            fetchWeatherData: jest.fn(),
        };

        const mockUI = {
            displayWeather: jest.fn(),
        }
    
        mockClient.fetchWeatherData.mockResolvedValueOnce({
            temp: 30,
            weather : 'Sunny'
        });

        const weather = new Weather(mockClient, mockUI)
        weather.load('London').then(() => {
            expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('London');
            const weatherData = weather.getWeatherData();
            expect(weatherData.weather).toEqual('Sunny');
            done();
        });
    });

    it('compares weather data for London and Bristol', (done) => {
        const mockClient = {
            fetchWeatherData: jest.fn(),
        };

        const mockUI = {
            displayWeather: jest.fn(),
        }

        const currentCity = {
            main : {
                temp: 33
            },
            name: 'London'
        }

        const testCity = {
            main : {
                name: 'Bristol',
                temp: 30
            }
        }

        mockClient.fetchWeatherData.mockResolvedValueOnce(currentCity)
        mockClient.fetchWeatherData.mockResolvedValueOnce(testCity)

        const weather = new Weather(mockClient, mockUI)
        weather.load('London').then(() => {
            const logSpy = jest.spyOn(console, 'log');
            weather.compareWith('Bristol')
            .then(() => {
            expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('London');
            expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('Bristol');
            expect(logSpy).toHaveBeenCalledWith('London is warmer than Bristol');
            logSpy.mockRestore();
            done();
        })
            // const weatherData = weather.getWeatherData();
            // expect(weatherData.weather).toEqual('Sunny');
        });

    })
});


