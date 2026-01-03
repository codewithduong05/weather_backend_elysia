import { Elysia } from "elysia";
import { WeatherRepository } from "../repositories/weather.repository";
import { WeatherService } from "../services/weather.service";
import { WeatherController } from "../controllers/weather.controller";

const repo = new WeatherRepository();
const service = new WeatherService(repo);
const controller = new WeatherController(service);

export const weatherRoute = new Elysia({ prefix: "/weather" })
  .get("/", controller.getWeather)        // GET /weather?city=Hanoi
  .get("/:city", controller.getWeather)   // GET /weather/Hanoi
  .post("/", controller.createWeather);   // POST /weather
