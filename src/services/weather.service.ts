import { Weather } from "../models/weather.model";
import { WeatherRepository } from "../repositories/weather.repository";
import { generateWeather } from '../utils/mock';

//  cache
const cache = new Map<string,any>()

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

  //  test perfoments
  static getCurrent(city:string) {
    if (!cache.has(city)) {
      cache.set(city,generateWeather(city))
    } 
    return cache.get(city)
  }

  static getHistory(city :string) {
    return Array.from({length:24}, () => generateWeather(city))
  }
}
