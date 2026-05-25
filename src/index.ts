import type { Core } from '@strapi/strapi';
import { connectRedis, disconnectRedis } from './lib/redis';

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const { socketPath } = strapi.config.get<{ socketPath: string }>('redis');
    await connectRedis(socketPath);
  },

  async destroy({ strapi }: { strapi: Core.Strapi }) {
    await disconnectRedis();
  },
};
