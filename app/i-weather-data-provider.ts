import WeatherData from "./weather-data";

interface IWeatherDataProvider {
    getWeatherData(city: string): Promise<WeatherData>;
}

export default IWeatherDataProvider;
