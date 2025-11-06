import express, { Request, Response } from "express";
import WeatherDataProvider from "./weather-data-provider";
import WeatherModelSystem from "./weather-model-system";

const app = express();
const port = 3000;

const weatherDataProvider = new WeatherDataProvider();
const weatherModelSystem = new WeatherModelSystem(weatherDataProvider);

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res
    .status(200)
    .json({"version": "1.0.0"});
});

app.get("/weather/:city", async (req: Request, res: Response) => {
  const city = <string>req.params.city;
  const weatherData = await weatherModelSystem.getWeatherData(city);
  res
    .status(200)
    .json({
      weatherData: weatherData
    });
});

const server = app
  .listen(port, () => {
    console.log("The server is running on port: ", port);
  })
  .on("error", (error) => {
    console.log("Error: ", error.message);
  });

export { app, server };

