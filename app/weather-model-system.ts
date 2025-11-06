import WeatherData from "./weather-data";

export default class WeatherModelSystem{
  public getWeatherData(city: string): WeatherData {
    const temperature = 1;
    return new WeatherData(city, temperature);
  }
}