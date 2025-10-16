🦋 Personal Portfolio

This repository contains the source code for Merziyah’s personal portfolio website, built with Vite + React + TypeScript and deployed on Netlify.
The project was originally structured with both client and server components, but the backend has been archived — only the frontend is active today.

🧭 Project Overview

Active:

/client: Frontend application (React, Vite, Tailwind CSS)

/public: Static assets (e.g., resume.pdf)

/client/vite.config.ts: Frontend build configuration

netlify.toml: Build and deploy configuration for Netlify

package.json: Frontend dependencies and scripts

Archived (not in use):

/server: Original backend (Express + Node) — kept for reference only

It handled API routes and form submissions in earlier versions

All backend functionality has been replaced by static and third-party integrations (e.g., Formspree for contact form)

⚙️ Development Setup
1️⃣ Install dependencies
npm install

2️⃣ Run the development server (Replit or local)
npm run dev


This starts Vite’s dev server with hot reload.
If running locally, the app will be served on http://localhost:5173
.

3️⃣ Build for production
npm run build


This runs Vite using the config at client/vite.config.ts and outputs the optimized static site to:

client/dist

4️⃣ Preview the production build locally
npm run preview

🏗️ Build & Deployment Configuration
📦 Vite Config (client/vite.config.ts)

Sets the project root to /client

Uses path aliases for cleaner imports:

"@/..." → client/src
"@shared/..." → shared
"@assets/..." → attached_assets


Builds to client/dist for Netlify publishing

☁️ Netlify Config (netlify.toml)
[build]
  command = "npm install && npm run build"
  publish = "client/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200


Build command: Runs Vite with the client config

Publish directory: client/dist

Redirect rule: Enables proper client-side routing (React Router)

🧩 Tech Stack
Layer	Tools
Frontend	React, TypeScript, Vite
Styling	Tailwind CSS
Deployment	Netlify
Contact Form	Formspree
Archived Backend	Node, Express, Passport (not in use)
🗂️ Project Structure
.
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   ├── public/
│   │   └── resume.pdf
│   └── vite.config.ts
├── archive/
│   └── server/      ← old backend (not active)
├── netlify.toml
├── package.json
└── tsconfig.json

🧹 Maintenance Notes

Frontend only: All backend code lives in /archive for reference.

Environment files:

Use .env for local-only variables (ignored by Git).

Replit:

“Run” command = cd client && npm run dev

Replit auto-installs dependencies and exposes $PORT.

Netlify:

Each push to main triggers a new deploy.

Use “Clear cache and deploy” if config changes.
