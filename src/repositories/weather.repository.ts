import { Weather } from "../models/weather.model";

export class WeatherRepository {
  private store = new Map<string, Weather>();

  constructor() {
    this.store.set("hanoi", {
      city: "Hanoi",
      temp: 28,
      condition: "Sunny",
    });
  }

  findByCity(city: string): Weather | null {
    return this.store.get(city.toLowerCase()) ?? null;
  }

  save(weather: Weather): Weather {
    this.store.set(weather.city.toLowerCase(), weather);
    return weather;
  }
}
