import { Weather } from "../models/weather.model";
import { WeatherRepository } from "../repositories/weather.repository";

export class WeatherService {
  constructor(private repo: WeatherRepository) {}

  getWeather(city: string) {
    const data = this.repo.findByCity(city);
    if (!data) {
      return { error: "City not found" };
    }
    return data;
  }

  createWeather(weather: Weather) {
    return this.repo.save(weather);
  }
}
