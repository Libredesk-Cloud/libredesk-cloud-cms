import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams) => ({
  socketPath: env('REDIS_SOCKET_PATH', '/home2/sc1utou1720/.cpanel/redis/redis.sock'),
  password: env('REDIS_PASSWORD'),
});

export default config;
