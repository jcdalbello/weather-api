import IWeatherDataProvider from "./i-weather-data-provider";
import WeatherData from "./weather-data";

export default class WeatherDataProvider implements IWeatherDataProvider {
  async getWeatherData(city: string): Promise<WeatherData> {
    return new WeatherData(city, 1);
  }
}