# libredesk-cloud-cms

Strapi CMS for `cms.libredesk.cloud`.

## Content Types

- `Page`: editable public marketing pages.
- `Post`: short news, launch updates, and marketing posts.
- `Blog Article`: long-form blog content.
- `Site Setting`: single global website settings entry.
- `Waitlist Entry`: launch waitlist subscribers.

## Waitlist API

Public endpoint for the website:

```http
POST /api/waitlist/subscribe
Content-Type: application/json

{
  "email": "person@example.com",
  "name": "Person Name",
  "company": "Acme",
  "role": "Founder",
  "locale": "en",
  "consent": true
}
```

The endpoint returns `{ "ok": true }` for new and already-existing emails, so the frontend does not leak whether an address is already subscribed.

## Local Development

```powershell
pnpm install
pnpm run develop
```

Open `http://localhost:1337/admin` and create the first admin user.

## Production Notes

Set these environment variables for `cms.libredesk.cloud`:

```env
PUBLIC_URL=https://cms.libredesk.cloud
IS_PROXIED=true
CORS_ORIGINS=https://libredesk.cloud
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...
ENCRYPTION_KEY=...
```

SQLite is configured for local development. Use PostgreSQL or MySQL/MariaDB for production.
