import { Elysia } from "elysia";
import { weatherRoute } from "./routes/weather.route";

const app = new Elysia();

app.use(weatherRoute)
    .get('/health', () => {
        const now = new Date();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        const seconds = now.getSeconds();
        return {
            status: 'ok',
            time: `${hours}h ${minutes}p ${seconds}s`
        };
    })
app.listen(3000);
console.log("Server running at http://localhost:3000");
