# Elysia with Bun runtime

# Project Weather

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```
## MVC State Project Implementation

## Development

The project follows an MVC (Model-View-Controller) architecture. Below is the structure of the `src/` directory:

```
src/
├─ index.ts              # Bootstrap server
├─ routes/
│  └─ weather.route.ts   # Route definitions
├─ controllers/
│  └─ weather.controller.ts # Handles incoming requests and responses
├─ services/
│  └─ weather.service.ts # Business logic and data processing
├─ models/
│  └─ weather.model.ts   # Data models and schemas
└─ repositories/
    └─ weather.repository.ts # Data access layer
```

This structure ensures a clean separation of concerns, making the codebase easier to maintain and scale.

To start the development server run:
```bash
bun run dev
```
## Testing
-- log 
run command : wrk -t8 -c500 -d10s http://localhost:3000/weather/v1/ha-noi
Running 10s test @ http://localhost:3000/weather/v1/ha-noi
  8 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.58ms    1.00ms  36.36ms   97.13%
    Req/Sec    13.65k   759.17    14.78k    87.38%
  1086607 requests in 10.01s, 198.96MB read
Requests/sec: 108600.36
Transfer/sec:     19.89MB

=> Real API, 100k req/s, latency ~5ms

➡️ Excellent

Real API, Express

➡️ ~20k–30k req/s

Real API, Fastify

➡️ ~50k–70k req/s

Open http://localhost:3000/ with your browser to see the result.