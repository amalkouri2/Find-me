Deployment Guide (short)
========================
Frontend (Vercel)
- Create a Vercel account and import the frontend/ directory from a GitHub repo.
- Set environment variables (API_BASE_URL) to point to your backend.
- Deploy; attach your custom domain in Vercel dashboard.

Backend (Render / Heroku / DigitalOcean)
- Push backend/ to a Git repo.
- Create a service on Render/Heroku, connect the repo, set NODE_ENV=production and any DB_URL.
- Use PostgreSQL addon or external DB; set DATABASE_URL.

Expo App (optional)
- Use EAS (Expo Application Services) to build binaries, or use 'expo publish' for OTA updates.
- Configure API_BASE_URL in app config or environment.

Buying domain
- Use Namecheap/Google Domains. Set DNS A or CNAME per host provider instructions.