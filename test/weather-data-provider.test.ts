import supertest from "supertest";
import WeatherDataProvider from "../app/weather-data-provider";

let weatherDataProvider: WeatherDataProvider;

beforeEach(() => {
  weatherDataProvider = new WeatherDataProvider();
});

describe("getWeatherData", () => {
  test("should check that the returned value is not undefined", async () => {
    const city = "london";
    expect(weatherDataProvider.getWeatherData(city)).not.toBeUndefined();
  });
});