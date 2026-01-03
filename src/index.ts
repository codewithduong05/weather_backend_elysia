import { Elysia } from "elysia";
import { weatherRoute } from "./routes/weather.route";

const app = new Elysia();

app.use(weatherRoute);

app.listen(3000);
console.log("Server running at http://localhost:3000");
