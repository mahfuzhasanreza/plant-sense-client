# Plant Sense — Plant Disease Detection (Client)

A simple, responsive React front-end for Plant Sense: a plant disease detection application. This repository contains the client application built with Vite + React, designed to integrate with a model-backed API (or server) that performs image-based plant disease classification.

This README covers how to run the project locally, the project structure, available scripts, deployment tips, and contribution guidelines.

# Project Links

- Project Demonstrations (YouTube): https://youtu.be/vgtTrY1KByk
- Live Website: https://plant-sense-now.web.app
- REST API (Vercel): https://plant-disease-detection-server-one.vercel.app/diseases
- Frontend (Client): https://github.com/mahfuzhasanreza/plant-sense-client
- Backend (Server): https://github.com/mahfuzhasanreza/plant-sense-server
- Model (ResNet50): https://github.com/mahfuzhasanreza/plant-sense-resnet50
- ESP32 Modules: https://github.com/mahfuzhasanreza/plant-sense-esp32-modules

## Table of contents

- Project overview
- Features
- Tech stack
- Quick start
	- Prerequisites
	- Install
	- Run locally
- Environment variables
- Project structure
- Scripts
- Deployment
- Contributing
- License
- Acknowledgements


## Project overview

The client provides a user-friendly UI for uploading plant images, viewing detection results, and navigating informational pages (About, Blog, FAQ, Features, etc.). The app is structured with a few shared components (NavBar, Footer) and page components under `src/Pages`.

This repo only contains the front-end. The disease prediction requires a back-end API that accepts uploaded images and returns predicted labels and optional metadata. Replace the API endpoint in the front-end configuration or environment variables to point at your server.


## Features

- Responsive UI built with React and Vite
- Routes for Home, About, Blog, FAQ, Dashboard and other informational pages
- Shared layout with NavBar and Footer
- Ready to integrate with an image classification API for plant disease detection


## Tech stack

- React (JSX)
- Vite (dev tooling and build)
- Plain CSS (project contains `App.css` and `index.css`)
- Optional: Firebase hosting configuration is present (`firebase.json`) for quick deployment


## Quick start

### Prerequisites

- Node.js LTS (18+) and npm or pnpm/yarn
- A back-end API for model inference (optional for pure UI work)


### Install

Open a terminal in the project root and run:

```bash
npm install
```

If you prefer yarn:

```bash
yarn
```


### Run locally (development)

Start the development server:

```bash
npm run dev
```

The app will be available at http://localhost:5173 (Vite will print the actual URL).


## Environment variables

This project may read environment variables to configure API endpoints or feature flags. Create a `.env` file in the project root to add variables used by your build. Example:

```
VITE_API_BASE_URL=https://api.example.com

# Any other VITE_ prefixed variables will be exposed to the client at build time.
```

Notes:
- Vite only exposes environment variables prefixed with `VITE_` to client code.
- Keep secret keys only on the server — do not put private secrets in client-side env files.


## Project structure

Key files and folders:

- `index.html` — Vite entry HTML
- `src/main.jsx` — React entry point
- `src/App.jsx` — Top-level App component
- `src/Routes/Routes.jsx` — Routing configuration
- `src/Pages/` — Individual page components (Home, About, Blog, Dashboard, etc.)
- `src/Shared/` — Shared components (NavBar, Footer)
- `public/` — Static assets
- `firebase.json` — Firebase hosting configuration (optional)
- `package.json` — NPM scripts and dependencies


## Scripts

Common scripts available via `package.json`:

- `npm run dev` — Start Vite dev server
- `npm run build` — Create production build in `dist/`
- `npm run preview` — Preview production build locally
- `npm run lint` — (If configured) run linter

Check `package.json` for the exact script names and any additional utilities.


## Deployment

Build the app and serve the static `dist` folder with any static host (Netlify, Vercel, Firebase Hosting, GitHub Pages, S3 + CloudFront, etc.).

Example using Firebase Hosting (the repo includes a `firebase.json` scaffold):

1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

2. Build the project

```bash
npm run build
```

3. Deploy

```bash
firebase login
firebase init hosting # if you haven't initialized
firebase deploy --only hosting
```

Replace with your preferred host if not using Firebase.


## Contributing

Contributions are welcome. Small ways to help:

- Improve documentation or examples
- Add unit or integration tests for components
- Build the server-side API for model inference and add integration docs

Please open issues and pull requests on GitHub. Follow these guidelines:

- Fork the repo and open a branch for your work
- Keep commits small and focused
- Add or update tests when adding functionality
- Document configuration changes in this README


## License

This project does not include a license file by default. Add a license (for example, MIT) by creating a `LICENSE` file if you want to make the project open-source.


## Acknowledgements

- Built with React and Vite
- The UI sections and layout were scaffolded for an educational micro-project on plant disease detection

## Author

Mahfuz Hasan Reza