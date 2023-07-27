const Weather = require('./weather')
const WeatherClient = require('./weatherClient')

describe('Weather', () => {
    it('adds weather for London', (done) => {
        const mockClient = {
            fetchWeatherData: jest.fn(),
        };
    
        mockClient.fetchWeatherData.mockResolvedValueOnce({
            weather: "Sunny",
            temp: 33
        });

        const weather = new Weather(mockClient)
        weather.load('London').then(() => {
            expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('London');
            const weatherData = weather.getWeatherData();
            expect(weatherData.weather).toEqual('Sunny');
            done();
        });
    });
});

