# Portfolio Website

**Live demo:** [mellifluous-crisp-1bdf18.netlify.app](https://mellifluous-crisp-1bdf18.netlify.app/)

A modern, responsive personal portfolio showcasing professional experience, projects, skills, and contact information.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser (SPA)                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐   │
│  │  Hero    │ │ Projects │ │  Resume  │ │   Contact    │   │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └──────┬───────┘   │
│       └────────────┴────────────┴──────────────┘            │
│                         │                                    │
│              src/constants/  (static content)                │
│              src/components/ (React UI)                      │
└─────────────────────────────────────────────────────────────┘
                              │
                    Vite dev server / static build
                              │
                    Netlify CDN (production)
```

---

## Project structure

```
my-portfolio-website/
├── src/
│   ├── components/     # Header, Hero, Projects, Resume, About, Contact, Footer
│   ├── constants/      # resumeData, projectData, skillsData, contactData
│   ├── index.jsx       # React entry point
│   └── styles.css      # Global styles
├── index.html
├── vite.config.js
└── package.json
```

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production bundle → dist/
npm run preview    # preview production build
```

---

## Deployment

The site is deployed on **Netlify**. Push to `main` triggers the GitHub Actions workflow (`.github/workflows/AnaGH.yml`).

---

## License

MIT — see [LICENSE](LICENSE).
