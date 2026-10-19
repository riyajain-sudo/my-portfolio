# Riya Jain — Portfolio Website

A full-stack portfolio built with **React (Vite)** on the frontend and **Node.js + Express** on the backend.
Soft pastel palette, light/dark mode, and subtle scroll/hover animations built around a DNA-helix motif
(a nod to Riya's biotech + code background).

## Project structure

```
portfolio/
├── client/          React app (Vite)
│   └── src/
│       ├── components/
│       ├── context/ThemeContext.jsx
│       └── data.js       ← all your resume content lives here, edit freely
└── server/          Express API (handles the contact form)
    └── server.js
```

## 1. Run the backend

```bash
cd server
npm install
npm start
```
Runs on **http://localhost:5000**. `POST /api/contact` is intentionally a demo stub:
it validates the submitted JSON, returns HTTP 503 with a clear not-sent/not-stored
message, and never logs the submitted name, email, or message. There is no email or
persistence integration configured. The frontend preserves the draft unless a service
explicitly confirms both delivery and storage.

## 2. Run the frontend

In a second terminal:
```bash
cd client
npm install
npm run dev
```
Runs on **http://localhost:5173**. Copy `client/.env.example` to a local override and set
`VITE_API_URL` to the API origin (default `http://localhost:5000`). Vite-prefixed values
are embedded in browser code and are public configuration, never credentials. Copy
`server/.env.example` to `server/.env`; set `CLIENT_URL` to the exact allowed browser
origin(s), comma-separated. CORS is not authentication, and direct server-to-server
requests are not authenticated by this setting.

## 3. Personalize it

- Open `client/src/data.js` — this is the single file with your name, tagline, skills,
  experience, projects, education, and links (LinkedIn/GitHub/email). I filled it in from
  your two resumes; just update the LinkedIn/GitHub URLs (I left them as placeholders
  since the PDFs only had the icon links, not the actual URLs).
- Colors live in `client/src/index.css` under `:root` and `[data-theme="dark"]` — every
  color is a CSS variable, so re-theming later is just editing hex values in one place.
- Your profile/hero photo: drop an image into `client/src/assets/` and reference it in
  `Hero.jsx` (currently it's a generated helix animation, no photo needed).

## Contact demo and privacy

The form is not a real contact channel: the endpoint responds 503 and does not deliver,
store, echo, or log message contents. The email link on the page is the direct contact
option. A production integration must use properly secured secret configuration,
validate and limit requests, return success only after confirmed delivery/storage,
protect logs, add abuse controls, and test with synthetic data. Do not put credentials
in `VITE_*` values. The API regression checks can be run with `cd server && npm test`;
they use synthetic values and do not start a deployed service.

## Deploying

- **Frontend**: `npm run build` inside `client/` produces a static `dist/` folder.
  `VITE_BASE_PATH` defaults to `/` for root-hosted Vercel/Netlify sites. Set it to
  `/my-portfolio/` for a GitHub Pages project site mounted at that repository path.
- **Backend**: deploy `server/` to Render, Railway, or Fly.io (any Node host). Then update
  `VITE_API_URL` to point at the deployed backend URL before rebuilding, and set its
  `CLIENT_URL` allowlist to the exact deployed frontend origin. The current endpoint
  remains demo-only; deployment does not make it a delivery service.

## Design notes

- **Palette**: lavender, mint, peach, sky, and rose pastels — each a named CSS variable,
  tuned separately for light and dark mode so nothing turns muddy at night.
- **Type**: Space Grotesk for headings (technical, geometric), Plus Jakarta Sans for body
  text (warm, readable).
- **Signature element**: an animated DNA double-helix in the hero, built in pure SVG/CSS —
  echoes Riya's biotech background while feeling native to a developer portfolio.
- Animations are intentionally restrained: gentle entrance fades on scroll, a slow helix
  rotation, soft hover lifts on cards. Nothing spins or bounces aggressively.
