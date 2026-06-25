// src/constants/projectData.js
// Runnable employer demos — default values, no API keys unless noted.
const projectData = [
  {
    title: "ReviewForge",
    description:
      "AI-assisted virtual design review for mechanical teams — 3D viewer, findings, comments, and lessons learned.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/bagherianahita/ReviewForge-",
    demo: {
      kind: "web",
      localUrl: "http://localhost:5173",
      run: "docker compose up --build",
      notes: "API docs: http://localhost:8001/docs",
    },
    image: "/assets/prototypes/reviewforge.png",
  },
  {
    title: "energy-Logix (Energylogistic)",
    description:
      "Multi-asset diluent blending and pipeline disruption simulator with a command-center UI and seeded operational data.",
    technologies: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Docker"],
    repoUrl: "https://github.com/bagherianahita/Energylogistic",
    demo: {
      kind: "web",
      localUrl: "http://localhost:3000",
      run: "cp .env.example .env && npm install && npm run setup && npm run dev",
      notes: "API health: http://localhost:4000/health",
    },
    image: "/assets/prototypes/energylogix.png",
  },
  {
    title: "IceGuard AI",
    description:
      "Geospatial iceberg detection with map visualization and deterministic safety reports (mock SAR pipeline).",
    technologies: ["Python", "Streamlit", "GeoPandas"],
    repoUrl: "https://github.com/bagherianahita/IceGuard-AI",
    demo: {
      kind: "web",
      localUrl: "http://localhost:8501",
      run: "pip install -r requirements.txt && streamlit run frontend/app.py",
    },
    image: "/assets/prototypes/iceguard.png",
  },
  {
    title: "LLM-Driven Market Intelligence",
    description:
      "RAG-style market insights over a demo corpus — local synthesis offline, or dynamic answers via free Ollama LLM.",
    technologies: ["Python", "Streamlit", "RAG", "Ollama"],
    repoUrl: "https://github.com/bagherianahita/LLM-Market-Intelligence",
    demo: {
      kind: "web",
      localUrl: "http://localhost:8506",
      run: "pip install -r requirements.txt && streamlit run app.py",
    },
    image: "/assets/prototypes/market-intel.png",
  },
  {
    title: "AI-Powered Sales Email Personalization",
    description:
      "B2B sales email generator with sample leads and one-click drafting — optional OpenAI for live LLM copy.",
    technologies: ["Python", "Streamlit"],
    repoUrl: "https://github.com/bagherianahita/AI-Powered-Sales-Email-Personalization-Engine",
    demo: {
      kind: "web",
      localUrl: "http://localhost:8504",
      run: "pip install -r requirements.txt && streamlit run app.py",
    },
    image: "/assets/prototypes/sales-email.png",
  },
  {
    title: "Automated Support Ticket Triage",
    description:
      "ML-powered urgency and topic classification with routing queues — browser demo plus FastAPI Swagger API.",
    technologies: ["Python", "FastAPI", "scikit-learn"],
    repoUrl: "https://github.com/bagherianahita/Automated-support-ticket",
    demo: {
      kind: "web",
      localUrl: "http://localhost:8010",
      run: "pip install -r requirements.txt && uvicorn app:app --port 8010 --host 127.0.0.1",
      notes: "Swagger: http://localhost:8010/docs",
    },
    image: "/assets/prototypes/support-triage.png",
  },
  {
    title: "Trust Debugger Demo",
    description:
      "Browser UI and Express API that audits trust-scoring logic with scenario-based contradiction detection.",
    technologies: ["JavaScript", "Express"],
    repoUrl: "https://github.com/bagherianahita/Demo",
    demo: {
      kind: "web",
      localUrl: "http://localhost:4100",
      run: "npm install && npm start",
    },
    image: "/assets/prototypes/trust-demo.png",
  },
  {
    title: "Trust Debugger Auditor Service",
    description:
      "Production-grade TypeScript service for auditing trust-scoring inputs and outputs with reusable scenarios.",
    technologies: ["TypeScript", "Express", "Docker"],
    repoUrl: "https://github.com/bagherianahita/Debugger-Auditor-Service",
    demo: {
      kind: "api",
      localUrl: "http://localhost:4000/health",
      run: "cp .env.example .env && npm install && npm run dev",
      notes: "Audit: POST http://localhost:4000/debug/audit",
    },
    image: "/assets/prototypes/trust-service.png",
  },
  {
    title: "Workout & Routine API",
    description:
      "FastAPI backend for user accounts, workouts, and routines with JWT auth and a seeded demo user.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "JWT"],
    repoUrl: "https://github.com/bagherianahita/fastapi-for-content-generating",
    demo: {
      kind: "api",
      localUrl: "http://localhost:8000/docs",
      run: "pip install -r requirements.txt && uvicorn main:app --reload --port 8000",
      notes: "Login: demo / demo123",
    },
  },
  {
    title: "GitHub Actions Learning App",
    description:
      "React + Vite CI/CD learning app with Vitest tests, Express tips API, and GitHub Actions workflow.",
    technologies: ["React", "Vite", "Vitest", "Express", "GitHub Actions"],
    repoUrl: "https://github.com/bagherianahita/AWS-Hosted-React-Frontend-with-Node.js-API-",
    demo: {
      kind: "web",
      localUrl: "http://localhost:5173",
      run: "npm install && npm run dev:full",
      notes: "API: http://localhost:3001/api/tips",
    },
  },
  {
    title: "Conversion Funnel ETL",
    description:
      "ETL pipeline that turns raw event logs into session datasets and rolling-average download trend charts.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    repoUrl: "https://github.com/bagherianahita/Conversion-Funnel-ETL",
    demo: {
      kind: "output",
      localUrl: null,
      run: "pip install -r requirements.txt && python etl.py",
      notes: "Output: output/download_trends.png",
    },
  },
  {
    title: "St. John's Volunteer Hub",
    description:
      "NLP volunteer–opportunity matching API for nonprofit coordination — default payload, no keys required.",
    technologies: ["Python", "Flask", "spaCy"],
    repoUrl: "https://github.com/bagherianahita/Non--Prof",
    demo: {
      kind: "api",
      localUrl: "http://localhost:5000/health",
      run: "pip install -r requirements.txt && python app.py",
      notes: "Match: POST http://localhost:5000/api/match",
    },
  },
  {
    title: "Deep Learning Time Series (CNN-LSTM)",
    description:
      "Hybrid CNN-LSTM forecaster for multivariate sensor time series — runnable demo on synthetic drilling data.",
    technologies: ["Python", "TensorFlow", "Keras"],
    repoUrl: "https://github.com/bagherianahita/deep-learning-time-series",
    demo: {
      kind: "cli",
      localUrl: null,
      run: "pip install -r requirements.txt && python demo.py",
      notes: "Terminal demo — trains and evaluates on synthetic data (~2 min).",
    },
  },
  {
    title: "St. John's Temperature Prediction",
    description:
      "Feedforward neural network forecasting the next 6 hours of temperature vs. a persistence baseline.",
    technologies: ["Python", "TensorFlow", "Pandas"],
    repoUrl:
      "https://github.com/bagherianahita/using-a-feedforward-neural-network-to-predict-the-temperature-in-St.-John-s-Newfoundland",
    demo: {
      kind: "cli",
      localUrl: null,
      run: "pip install -r requirements.txt && python demo.py",
      notes: "Terminal demo — prints forecast metrics to console.",
    },
  },
];

export default projectData;
