# St. George School, Banda — Website

A standalone Next.js site for St. George School, Awas Vikas, Banda. Designed to be **dragged onto GitHub and imported into Vercel with zero configuration** — no database, no environment variables to type, no API keys to register.

## How it works (no setup required)

| Feature | Powered by | Setup needed |
| --- | --- | --- |
| Google sign-in (form gating) | Clerk (publishable key already filled into `.env`) | None |
| Admission enquiry form | [formsubmit.co](https://formsubmit.co) → forwards every submission to **gameransh2434@gmail.com** | One-time confirmation: the very first time the site sends an enquiry, formsubmit.co will email gameransh2434@gmail.com a confirmation link — click it once and every future enquiry will arrive in that inbox automatically |
| Live "Visitors" counter | [abacus.jasoncameron.dev](https://abacus.jasoncameron.dev) (free, no signup) | None |

## Deploy in 3 clicks

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Click **Deploy**. That's it — the site is live.

Vercel auto-detects Next.js and reads the values from the committed `.env` file. There is nothing to configure.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Customizing

Everything you might want to change is in `src/lib/site-config.ts`:

- `ADMISSION_EMAIL` — where enquiries are delivered
- `VISITOR_COUNTER_NAMESPACE` / `VISITOR_COUNTER_KEY` — visitor counter identifiers
- `CLERK_PUBLISHABLE_KEY` — swap for your own Clerk publishable key if you want a production Clerk instance

The same values can also be overridden via the `.env` file.

---

© St. George School, Banda. All Rights Reserved with **Madarax Development**.
