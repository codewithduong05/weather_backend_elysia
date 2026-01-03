import { WeatherService } from "../services/weather.service";

export class WeatherController {
  constructor(private service: WeatherService) {}

  getWeather = ({ params, request }: any) => {
    const city =
      params?.city ??
      new URL(request.url).searchParams.get("city") ??
      "";

    if (!city) {
      return { error: "city is required" };
    }

    return this.service.getWeather(city);
  };

  createWeather = async ({ request }: any) => {
    const body = await request.json();

    if (!body.city || body.temp === undefined || !body.condition) {
      return { error: "invalid body" };
    }

    return this.service.createWeather(body);
  };

  
}


  //  test perfoments
export const getWeather = (city : string) => {
  return WeatherService.getCurrent(city)
}

export const getWeatherHistory = (city :string) => {
  return WeatherService.getHistory(city)
}