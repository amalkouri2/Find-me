Find - Job Portal
=================
This package contains a complete starter kit for *Find* — a bilingual (EN/AR) job search web app + backend + Expo mobile app.

What you get
- frontend/ : Next.js app (React) with i18n skeleton and search UI.
- backend/ : Node.js + Express skeleton API with job schema, search endpoint, and scraper placeholders.
- expo_app/ : Expo (React Native) app skeleton that uses the same API.
- assets/ : logos (SVG), favicon, and example .env template.
- docs/ : deployment + publishing instructions.

Important limitations
- This package is fully local and ready-to-deploy. I CANNOT publish the site or upload to hosts for you.
- To deploy, follow the instructions in docs/DEPLOY.md (Vercel for frontend, Render/Heroku/DigitalOcean for backend, Expo build/upload for app).

Quick start (local)
1. Frontend:
   cd frontend
   npm install
   npm run dev
   Open http://localhost:3000

2. Backend:
   cd backend
   npm install
   npm run dev
   API runs on http://localhost:4000

3. Expo app:
   cd expo_app
   npm install
   npx expo start

Enjoy! If you want, I can now walk you step-by-step to deploy these to Vercel/Render/Expo and produce public links.