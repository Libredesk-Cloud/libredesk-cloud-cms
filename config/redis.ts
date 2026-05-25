import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams) => ({
  socketPath: env('REDIS_SOCKET_PATH', '/var/run/redis/redis.sock'),
});

export default config;
