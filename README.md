# Portfolio Website

**Live site:** [mellifluous-crisp-1bdf18.netlify.app](https://mellifluous-crisp-1bdf18.netlify.app/)

A modern, responsive personal portfolio showcasing professional experience, projects, skills, and contact information.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

---

## Public projects & local demos

Run each repo locally (see its README). Demos use **localhost** — start the server first, then open the URL.

| Project | GitHub repository | Local demo URL | How to run |
|---------|-------------------|----------------|------------|
| **Portfolio (this site)** | [my-portfolio-website](https://github.com/bagherianahita/my-portfolio-website) | [Live](https://mellifluous-crisp-1bdf18.netlify.app/) · `http://localhost:5173` | `npm install && npm run dev` |
| **ReviewForge** | [ReviewForge-](https://github.com/bagherianahita/ReviewForge-) | http://localhost:5173 | `docker compose up --build` |
| **energy-Logix** | [Energylogistic](https://github.com/bagherianahita/Energylogistic) | http://localhost:3000 | `npm run setup && npm run dev` |
| **IceGuard AI** | [IceGuard-AI](https://github.com/bagherianahita/IceGuard-AI) | http://localhost:8501 | `streamlit run frontend/app.py` |
| **LLM Market Intelligence** | [LLM-Market-Intelligence](https://github.com/bagherianahita/LLM-Market-Intelligence) | http://localhost:8506 | `streamlit run app.py` |
| **Sales Email Personalization** | [AI-Powered-Sales-Email-Personalization-Engine](https://github.com/bagherianahita/AI-Powered-Sales-Email-Personalization-Engine) | http://localhost:8504 | `streamlit run app.py` |
| **Support Ticket Triage** | [Automated-support-ticket](https://github.com/bagherianahita/Automated-support-ticket) | http://localhost:8010 | `uvicorn app:app --port 8010 --host 127.0.0.1` |
| **Trust Debugger (UI)** | [Demo](https://github.com/bagherianahita/Demo) | http://localhost:4100 | `npm install && npm start` |
| **Trust Debugger (API)** | [Debugger-Auditor-Service](https://github.com/bagherianahita/Debugger-Auditor-Service) | http://localhost:4000/health | `npm install && npm run dev` |
| **Workout & Routine API** | [fastapi-for-content-generating](https://github.com/bagherianahita/fastapi-for-content-generating) | http://localhost:8002 | `uvicorn main:app --port 8002 --host 127.0.0.1` |
| **Conversion Funnel ETL** | [Conversion-Funnel-ETL](https://github.com/bagherianahita/Conversion-Funnel-ETL) | http://localhost:8508 | `streamlit run app.py` |
| **St. John's Volunteer Hub** | [Non--Prof](https://github.com/bagherianahita/Non--Prof) | http://localhost:5000 | `python app.py` |
| **St. John's Temperature Forecast** | [using-a-feedforward-neural-network-…](https://github.com/bagherianahita/using-a-feedforward-neural-network-to-predict-the-temperature-in-St.-John-s-Newfoundland) | http://localhost:8507 | `streamlit run app.py` |
| **CNN-LSTM Time Series** | [deep-learning-time-series](https://github.com/bagherianahita/deep-learning-time-series) | _CLI only_ | `python demo.py` |

> **Port tip:** ReviewForge and this portfolio both default to **5173** — run only one at a time, or pass a different port (e.g. `npm run dev -- --port 5174`).

---

## Suggested professional repository names

These are optional renames (GitHub **Settings → Repository name**). GitHub redirects old URLs after rename.

| Current name | Suggested name |
|--------------|----------------|
| `Demo` | `trust-debugger-demo` |
| `Debugger-Auditor-Service` | `trust-debugger-api` |
| `Non--Prof` | `st-johns-volunteer-hub` |
| `fastapi-for-content-generating` | `workout-routine-api` |
| `Automated-support-ticket` | `support-ticket-triage` |
| `AI-Powered-Sales-Email-Personalization-Engine` | `sales-email-personalization` |
| `using-a-feedforward-neural-network-to-predict-the-temperature-in-St.-John-s-Newfoundland` | `st-johns-temperature-forecast` |
| `deep-learning-time-series` | `cnn-lstm-time-series` |
| `ReviewForge-` | `reviewforge` |
| `Energylogistic` | `energy-logix` |

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
├── public/assets/prototypes/   # Project thumbnails
├── index.html
├── vite.config.js
└── package.json
```

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

| | URL |
|---|-----|
| **Web UI** | http://localhost:5173 |

---

## Deployment

Deployed on **Netlify**. Push to `main` triggers the GitHub Actions workflow (`.github/workflows/AnaGH.yml`).

---

## License

MIT — see [LICENSE](LICENSE).
