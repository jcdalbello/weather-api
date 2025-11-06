import WeatherModelSystem from "../app/weather-model-system";
import { Mock, mock } from "ts-jest-mocker";
import IWeatherDataProvider from "../app/i-weather-data-provider";
import WeatherData from "../app/weather-data";

let mockWeatherDataProvider: Mock<IWeatherDataProvider>;
let weatherModelSystem: WeatherModelSystem;

const city = "london";
const temperature = 1;

beforeEach(() => {
  mockWeatherDataProvider = mock<IWeatherDataProvider>();
  weatherModelSystem = new WeatherModelSystem(mockWeatherDataProvider);

  jest.resetAllMocks();
});

describe("getWeatherData", () => {
  test("should check that the returned value is not undefined", async () => {
    mockWeatherDataProvider.getWeatherData.mockResolvedValue(new WeatherData(city, temperature));
    expect(weatherModelSystem.getWeatherData(city)).not.toBeUndefined();
  });

  test("should return the weather data of the given city", async () => {
    mockWeatherDataProvider.getWeatherData.mockResolvedValue(new WeatherData(city, temperature));
    const weatherData = await weatherModelSystem.getWeatherData(city);
    expect(weatherData).not.toBeUndefined();
    expect(weatherData.getCity()).toEqual(city);
    expect(weatherData.getTemperature()).toEqual(temperature);
  });

  test("should return the weather data of multiple cities", async () => {
    const city = "london";
    const temperature = 1;
    mockWeatherDataProvider.getWeatherData.mockResolvedValue(new WeatherData(city, temperature));
    const weatherData = await weatherModelSystem.getWeatherData(city);
    expect(weatherData).not.toBeUndefined();
    expect(weatherData.getCity()).toEqual(city);
    expect(weatherData.getTemperature()).toEqual(temperature);

    const city2 = "ireland";
    const temperature2 = 2;
    mockWeatherDataProvider.getWeatherData.mockResolvedValue(new WeatherData(city2, temperature2));
    const weatherData2 = await weatherModelSystem.getWeatherData(city2);
    expect(weatherData2).not.toBeUndefined();
    expect(weatherData2.getCity()).toEqual(city2);
    expect(weatherData2.getTemperature()).toEqual(temperature2);
  });
});
