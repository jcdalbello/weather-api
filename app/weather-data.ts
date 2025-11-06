export default class WeatherData {
  private city: string;
  private temperature: number;

  constructor(city: string, temperature: number) {
    this.city = city;
    this.temperature = temperature;
  }

  public getCity(): string {
    return this.city;
  }

  public getTemperature(): number {
    return this.temperature;
  }
}