import IWeatherDataProvider from "./i-weather-data-provider";
import WeatherData from "./weather-data";

export default class WeatherModelSystem{
  private weatherDataProvider: IWeatherDataProvider;

  constructor(weatherDataProvider: IWeatherDataProvider) {
    this.weatherDataProvider = weatherDataProvider;
  }
  
  public async getWeatherData(city: string): Promise<WeatherData> {
    const weatherData = await this.weatherDataProvider.getWeatherData(city);
    return weatherData;
  }
}