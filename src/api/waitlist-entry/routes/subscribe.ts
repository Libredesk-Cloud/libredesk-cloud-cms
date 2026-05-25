export default {
  routes: [
    {
      method: 'POST',
      path: '/waitlist/subscribe',
      handler: 'waitlist-entry.subscribe',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
