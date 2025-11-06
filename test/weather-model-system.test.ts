import WeatherModelSystem from "../app/weather-model-system";
import supertest from "supertest";
import { Mock, mock } from "ts-jest-mocker";
import IWeatherDataProvider from "../app/i-weather-data-provider";
import WeatherData from "../app/weather-data";

let mockWeatherDataProvider: Mock<IWeatherDataProvider>;
let weatherModelSystem: WeatherModelSystem;

beforeEach(() => {
  mockWeatherDataProvider = mock<IWeatherDataProvider>();
  weatherModelSystem = new WeatherModelSystem(mockWeatherDataProvider);

  jest.resetAllMocks();
});

describe("getWeatherData", () => {
  test("should check that the returned value is not undefined", async () => {
    const city = "london";
    expect(weatherModelSystem.getWeatherData(city)).not.toBeUndefined();
  });

  test("should return the weather data of the given city", async () => {
    const city = "london";
    const temperature = 1;
    mockWeatherDataProvider.getWeatherData.mockResolvedValue(new WeatherData(city, temperature));
    const weatherData = weatherModelSystem.getWeatherData(city);
    expect(weatherData).not.toBeUndefined();
    expect(weatherData.getCity()).toEqual(city);
    expect(weatherData.getTemperature()).toEqual(temperature);
  });
});
