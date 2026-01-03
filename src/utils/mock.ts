// utils/mock.ts
export const generateWeather = (city: string) => ({
  city,
  temp: Math.floor(Math.random() * 15) + 20,
  humidity: Math.floor(Math.random() * 40) + 40,
  status: 'sunny',
  timestamp: Date.now()
})
