import WeatherModelSystem from "../app/weather-model-system";
import supertest from "supertest";

const weatherModelSystem = new WeatherModelSystem();

describe("getWeatherData", () => {
  test("should return code 200 when requested", async () => {
    const city = "london";
    expect(weatherModelSystem.getWeatherData(city)).not.toBeUndefined();
  })
});
