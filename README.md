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

Open http://localhost:3000/ with your browser to see the result.