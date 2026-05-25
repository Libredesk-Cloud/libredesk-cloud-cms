import type { Core } from '@strapi/strapi';
import { connectRedis, disconnectRedis } from './lib/redis';

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const { socketPath, password } = strapi.config.get<{ socketPath: string; password?: string }>('redis');
    await connectRedis(socketPath, password);
  },

  async destroy({ strapi }: { strapi: Core.Strapi }) {
    await disconnectRedis();
  },
};
