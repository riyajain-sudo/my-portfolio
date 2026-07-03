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
Runs on **http://localhost:5000**. It exposes `POST /api/contact` which currently logs
submissions to the console and returns success. To actually send yourself emails, see
"Wiring up real email" below.

## 2. Run the frontend

In a second terminal:
```bash
cd client
npm install
npm run dev
```
Runs on **http://localhost:5173**. The contact form calls the backend at `localhost:5000`
(configured via `client/.env` → `VITE_API_URL`).

## 3. Personalize it

- Open `client/src/data.js` — this is the single file with your name, tagline, skills,
  experience, projects, education, and links (LinkedIn/GitHub/email). I filled it in from
  your two resumes; just update the LinkedIn/GitHub URLs (I left them as placeholders
  since the PDFs only had the icon links, not the actual URLs).
- Colors live in `client/src/index.css` under `:root` and `[data-theme="dark"]` — every
  color is a CSS variable, so re-theming later is just editing hex values in one place.
- Your profile/hero photo: drop an image into `client/src/assets/` and reference it in
  `Hero.jsx` (currently it's a generated helix animation, no photo needed).

## Wiring up real email (optional)

In `server/server.js`, the `/api/contact` route is stubbed to log and respond with
success. To send yourself real emails when someone submits the form:
1. `npm install nodemailer` inside `server/`
2. Create a `server/.env` with your SMTP credentials (e.g. a Gmail App Password)
3. Replace the stub logic in `routes/contact.js` with a `nodemailer.sendMail(...)` call —
   there's a commented example already in that file to copy from.

## Deploying

- **Frontend**: `npm run build` inside `client/` produces a static `dist/` folder —
  deploy to Vercel, Netlify, or GitHub Pages.
- **Backend**: deploy `server/` to Render, Railway, or Fly.io (any Node host). Then update
  `VITE_API_URL` in `client/.env` to point at the deployed backend URL before rebuilding.

## Design notes

- **Palette**: lavender, mint, peach, sky, and rose pastels — each a named CSS variable,
  tuned separately for light and dark mode so nothing turns muddy at night.
- **Type**: Space Grotesk for headings (technical, geometric), Plus Jakarta Sans for body
  text (warm, readable).
- **Signature element**: an animated DNA double-helix in the hero, built in pure SVG/CSS —
  echoes Riya's biotech background while feeling native to a developer portfolio.
- Animations are intentionally restrained: gentle entrance fades on scroll, a slow helix
  rotation, soft hover lifts on cards. Nothing spins or bounces aggressively.
