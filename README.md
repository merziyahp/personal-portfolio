# 🦋 Personal Portfolio

This repository contains the source code for **Merziyah’s personal portfolio website**, built with **Vite + React + TypeScript** and deployed on **Netlify**.
The project was originally structured with both client and server components, but the backend has been **archived** — only the frontend is active today.

---

## 🫭️ Project Overview

**Active**

* `client/`: Frontend application (React, Vite, Tailwind CSS)
* `client/public/`: Static assets for the app (e.g., `resume.pdf`)
* `client/vite.config.ts`: Frontend build configuration
* `netlify.toml`: Build & deploy configuration for Netlify
* `package.json`: Frontend dependencies and scripts
* `tsconfig.json`: TypeScript configuration (targets `client/src`)

**Archived (not in use)**

* `archive/server/` (previously `server/`): Original backend (Node/Express).

  * Kept for reference, not deployed.
  * Earlier versions handled API routes and form submissions.
  * Replaced by static app + third-party integrations (e.g., Formspree for contact).

---

## ⚙️ Development Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Run the dev server (Replit or local)

```bash
npm run dev
```

This starts Vite with hot reload.
If running locally, the app is served at [http://localhost:5173](http://localhost:5173).

### 3) Build for production

```bash
npm run build
```

Outputs optimized static files to:

```
client/dist
```

### 4) Preview the production build locally

```bash
npm run preview
```

---

## 👷️ Build & Deployment Configuration

### 📦 Vite (`client/vite.config.ts`)

* Sets the project root to `client/`
* Path aliases for cleaner imports:

  * `@/*` → `client/src/*`
  * `@shared/*` → `shared/*`
  * `@assets/*` → `attached_assets/*`
* Builds to `client/dist` (Netlify publish directory)

**Example server block for Replit dev:**

```ts
server: {
  host: true,                                // bind 0.0.0.0
  port: Number(process.env.PORT) || 5173,    // Replit/Local
  strictPort: true,
  hmr: { protocol: "wss", clientPort: 443 }  // helpful on Replit
}
```

### ☁️ Netlify (`netlify.toml`)

```toml
[build]
  command = "npm install && npm run build"
  publish = "client/dist"

# SPA fallback so client-side routes work
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

* **Build command:** Uses root `package.json` scripts and the client config
* **Publish directory:** `client/dist`
* **Redirect rule:** Ensures client-side routing (e.g., React Router) resolves to `index.html`

---

## 🧮 Tech Stack

| Layer    | Tools                            |
| -------- | -------------------------------- |
| Frontend | React, TypeScript, Vite          |
| Styling  | Tailwind CSS                     |
| Forms    | Formspree (no custom backend)    |
| Hosting  | Netlify (CI/CD + SSL)            |
| Archived | Node, Express, Passport (unused) |

---

## 🗂️ Project Structure

```
.
├── client/
│   ├── public/
│   │   └── resume.pdf         # downloadable résumé (optional)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   └── vite.config.ts
├── shared/                    # shared types/utilities (optional)
├── attached_assets/           # static assets referenced via @assets (optional)
├── archive/
│   └── server/                # legacy backend (not active)
├── netlify.toml
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 TypeScript Configuration (`tsconfig.json`)

The repo uses a single root `tsconfig.json` that targets the frontend:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "lib": ["dom", "esnext"],
    "module": "esnext",
    "moduleResolution": "node",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["client/src/*"],
      "@shared/*": ["shared/*"],
      "@assets/*": ["attached_assets/*"]
    }
  },
  "include": ["client/src"],
  "exclude": ["node_modules", "archive", "dist"]
}
```

---

## 🩳 Maintenance Notes

* **Frontend only:** Backend is archived under `archive/server/`.
* **Environment files:**

  * Use `.env` locally as needed (not committed).
  * Keep secrets out of the repo; Netlify env vars are available if needed later.
* **Replit:**

  * The “Run” command can be set to `cd client && npm run dev`.
  * Replit provides `$PORT`; the Vite config above handles it.
* **Netlify:**

  * Each push to the default branch triggers an automatic build & deploy.
  * If build settings change, use **“Clear cache and deploy site”**.

---


