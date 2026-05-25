/**
 * waitlist-entry controller
 */

import { factories } from '@strapi/strapi';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistBody = {
  email?: unknown;
  name?: unknown;
  company?: unknown;
  role?: unknown;
  locale?: unknown;
  consent?: unknown;
};

function optionalString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

export default factories.createCoreController('api::waitlist-entry.waitlist-entry', ({ strapi }) => ({
  async subscribe(ctx) {
    const body = ctx.request.body as WaitlistBody;
    const email = optionalString(body.email)?.toLowerCase();

    if (!email || !emailPattern.test(email)) {
      return ctx.badRequest('A valid email address is required.');
    }

    if (body.consent !== true) {
      return ctx.badRequest('Consent is required to join the waitlist.');
    }

    const existing = await strapi.documents('api::waitlist-entry.waitlist-entry').findFirst({
      filters: { email },
      fields: ['documentId'],
    });

    if (!existing) {
      await strapi.documents('api::waitlist-entry.waitlist-entry').create({
        data: {
          email,
          name: optionalString(body.name),
          company: optionalString(body.company),
          role: optionalString(body.role),
          locale: optionalString(body.locale),
          source: 'website',
          status: 'pending',
          consent: true,
          subscribedAt: new Date().toISOString(),
          ipAddress: ctx.request.ip,
          userAgent: ctx.request.get('user-agent'),
        },
      });
    }

    ctx.body = { ok: true };
  },
}));
