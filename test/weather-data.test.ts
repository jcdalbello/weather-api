import WeatherData from "../app/weather-data";
import supertest from "supertest";

describe("constructor", () => {
  test("should not be undefined", async () => {
    const city = "london";
    const temperature = 1;
    const weatherData = new WeatherData(city, temperature);
    expect(weatherData).not.toBeUndefined();
  })
});
