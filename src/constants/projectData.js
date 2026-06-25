// src/constants/projectData.js
const projectData = [
  {
    title: "ReviewForge",
    description:
      "AI-assisted virtual design review for mechanical teams — 3D viewer, findings, comments, and lessons learned.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/bagherianahita/ReviewForge-",
    demo: { kind: "web", localUrl: "http://localhost:5173", run: "docker compose up --build", notes: "API: http://localhost:8001/docs" },
    image: "/assets/prototypes/reviewforge.svg",
  },
  {
    title: "energy-Logix",
    description:
      "Multi-asset diluent blending and pipeline disruption simulator with command-center UI and seeded operational data.",
    technologies: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Docker"],
    repoUrl: "https://github.com/bagherianahita/Energylogistic",
    demo: { kind: "web", localUrl: "http://localhost:3000", run: "cp .env.example .env && npm install && npm run setup && npm run dev", notes: "API: http://localhost:4000/health" },
    image: "/assets/prototypes/energylogix.svg",
  },
  {
    title: "IceGuard AI",
    description: "Geospatial iceberg detection with map visualization and deterministic safety reports.",
    technologies: ["Python", "Streamlit", "GeoPandas"],
    repoUrl: "https://github.com/bagherianahita/IceGuard-AI",
    demo: { kind: "web", localUrl: "http://localhost:8501", run: "pip install -r requirements.txt && streamlit run frontend/app.py" },
    image: "/assets/prototypes/iceguard.svg",
  },
  {
    title: "LLM Market Intelligence",
    description: "RAG market insights — offline corpus or dynamic answers via Ollama open-source LLM.",
    technologies: ["Python", "Streamlit", "RAG", "Ollama"],
    repoUrl: "https://github.com/bagherianahita/LLM-Market-Intelligence",
    demo: { kind: "web", localUrl: "http://localhost:8506", run: "pip install -r requirements.txt && streamlit run app.py" },
    image: "/assets/prototypes/market-intel.svg",
  },
  {
    title: "Sales Email Personalization",
    description: "B2B email generator with sample leads — optional OpenAI for live copy.",
    technologies: ["Python", "Streamlit"],
    repoUrl: "https://github.com/bagherianahita/AI-Powered-Sales-Email-Personalization-Engine",
    demo: { kind: "web", localUrl: "http://localhost:8504", run: "pip install -r requirements.txt && streamlit run app.py" },
    image: "/assets/prototypes/sales-email.svg",
  },
  {
    title: "Support Ticket Triage",
    description: "ML urgency/topic classification with routing queues — browser demo + FastAPI.",
    technologies: ["Python", "FastAPI", "scikit-learn"],
    repoUrl: "https://github.com/bagherianahita/Automated-support-ticket",
    demo: { kind: "web", localUrl: "http://localhost:8010", run: "pip install -r requirements.txt && uvicorn app:app --port 8010 --host 127.0.0.1" },
    image: "/assets/prototypes/support-triage.svg",
  },
  {
    title: "Trust Debugger",
    description:
      "Trust-scoring logic audits with scenario presets — browser demo plus production TypeScript auditor API.",
    technologies: ["TypeScript", "Express", "JavaScript"],
    repoUrl: "https://github.com/bagherianahita/Demo",
    demo: {
      kind: "web",
      localUrl: "http://localhost:4100",
      run: "npm install && npm start",
      notes: "Production service: github.com/bagherianahita/Debugger-Auditor-Service — http://localhost:4000/health",
    },
    image: "/assets/prototypes/trust-debugger.svg",
  },
  {
    title: "Workout & Routine API",
    description: "FastAPI JWT auth with workouts and routines — browser login demo (demo / demo123).",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "JWT"],
    repoUrl: "https://github.com/bagherianahita/fastapi-for-content-generating",
    demo: { kind: "web", localUrl: "http://localhost:8002", run: "pip install -r requirements.txt && uvicorn main:app --port 8002 --host 127.0.0.1", notes: "Swagger: http://localhost:8002/docs" },
    image: "/assets/prototypes/workout-api.svg",
  },
  {
    title: "Conversion Funnel ETL",
    description: "ETL pipeline for session datasets and rolling-average download trend charts.",
    technologies: ["Python", "Pandas", "Streamlit", "Matplotlib"],
    repoUrl: "https://github.com/bagherianahita/Conversion-Funnel-ETL",
    demo: { kind: "web", localUrl: "http://localhost:8508", run: "pip install -r requirements.txt && streamlit run app.py", notes: "CLI: python etl.py" },
    image: "/assets/prototypes/conversion-funnel.svg",
  },
  {
    title: "St. John's Volunteer Hub",
    description: "NLP volunteer–opportunity matching API for nonprofit coordination.",
    technologies: ["Python", "Flask", "spaCy"],
    repoUrl: "https://github.com/bagherianahita/Non--Prof",
    demo: { kind: "web", localUrl: "http://localhost:5000", run: "pip install -r requirements.txt && python app.py" },
    image: "/assets/prototypes/volunteer-hub.svg",
  },
  {
    title: "CNN-LSTM Time Series",
    description: "Hybrid forecaster for multivariate sensor data on synthetic drilling logs.",
    technologies: ["Python", "TensorFlow", "Keras"],
    repoUrl: "https://github.com/bagherianahita/deep-learning-time-series",
    demo: { kind: "cli", localUrl: null, run: "pip install -r requirements.txt && python demo.py" },
    image: "/assets/prototypes/time-series.svg",
  },
  {
    title: "St. John's Temperature Forecast",
    description: "Feedforward NN 6-hour temperature forecast vs. persistence baseline.",
    technologies: ["Python", "scikit-learn", "Streamlit"],
    repoUrl: "https://github.com/bagherianahita/using-a-feedforward-neural-network-to-predict-the-temperature-in-St.-John-s-Newfoundland",
    demo: { kind: "web", localUrl: "http://localhost:8507", run: "pip install -r requirements.txt && streamlit run app.py" },
    image: "/assets/prototypes/temperature.svg",
  },
];

export default projectData;
