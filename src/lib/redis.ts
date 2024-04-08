import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://aware-cattle-43622.upstash.io',
  token: process.env.REDIS_KEY!,
})
