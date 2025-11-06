import IWeatherDataProvider from "./i-weather-data-provider";
import WeatherData from "./weather-data";

export default class WeatherModelSystem{
  private weatherDataProvider: IWeatherDataProvider;

  constructor(weatherDataProvider: IWeatherDataProvider) {
    this.weatherDataProvider = weatherDataProvider;
  }
  
  public getWeatherData(city: string): WeatherData {
    const temperature = 1;
    return new WeatherData(city, temperature);
  }
}