import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const PRESENCE_ZSET_KEY = "coreexis:active_sessions";
const PRESENCE_WINDOW_SECONDS = 60;

export async function markPresence(sessionId: string): Promise<void> {
  const now = Date.now();
  await redis.zadd(PRESENCE_ZSET_KEY, { score: now, member: sessionId });
  const cutoff = now - PRESENCE_WINDOW_SECONDS * 1000;
  await redis.zremrangebyscore(PRESENCE_ZSET_KEY, 0, cutoff);
}

export async function getActiveUserCount(): Promise<number> {
  const cutoff = Date.now() - PRESENCE_WINDOW_SECONDS * 1000;
  await redis.zremrangebyscore(PRESENCE_ZSET_KEY, 0, cutoff);
  return redis.zcard(PRESENCE_ZSET_KEY);
}
