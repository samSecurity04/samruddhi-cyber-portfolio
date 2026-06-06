# Samruddhi Patil — Cybersecurity Portfolio

An innovative SOC-themed portfolio for Samruddhi Patil, built with React + Vite + TypeScript.

## Features

- **Live SOC Monitor** — animated alert feed and endpoint dashboard in the hero
- **Red Team / Blue Team toggle** — project cards switch between attack and defense perspectives
- **Interactive Terminal** — type `help`, `whoami`, `skills`, `labs`, `certs`, `contact`
- **MITRE ATT&CK mapping** — technique tags on homelab projects
- **Certification wall** — verified badges with expiry dates
- **#OpenToWork** — prominent recruiter signal throughout

## Quick Start

```bash
npm install
npm run dev
```

## Customize

Edit `src/content.ts` to update:

- LinkedIn URL, email, GitHub
- Experience, certifications, projects
- Profile photo path (`about.photo` — replace `public/images/profile.svg` with your photo)
- Resume PDF at `public/Samruddhi_Patil_Resume.pdf` (placeholder — replace with your real CV, keep the same filename)

## Build

```bash
npm run build
npm run preview
```

## Deploy

Live site: **https://samSecurity04.github.io/samruddhi-cyber-portfolio/**

Pushes to `main` deploy automatically via GitHub Actions (`.github/workflows/deploy.yml`).

Ensure **Settings → Pages → Build and deployment → Source** is set to **GitHub Actions** on the repository.
