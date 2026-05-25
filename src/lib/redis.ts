import Redis from 'ioredis';

let client: Redis | null = null;

export function getRedis(): Redis {
  if (!client) {
    throw new Error('Redis client is not initialized. Call connectRedis() first.');
  }
  return client;
}

export async function connectRedis(socketPath: string): Promise<void> {
  client = new Redis({ path: socketPath, lazyConnect: true });
  await client.connect();
  strapi.log.info(`[redis] Connected via socket ${socketPath}`);
}

export async function disconnectRedis(): Promise<void> {
  if (client) {
    await client.quit();
    client = null;
    strapi.log.info('[redis] Disconnected');
  }
}
