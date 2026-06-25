// src/constants/projectData.js
// Each project card should be runnable with default values (no API keys required),
// unless explicitly stated otherwise.
const projectData = [
  {
    title: "ReviewForge",
    description:
      "AI-assisted virtual design review app for mechanical engineering teams (3D viewer, findings, comments, lessons learned).",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/bagherianahita/ReviewForge-",
    demo: {
      kind: "web",
      localUrl: "http://localhost:5173",
      run: "docker compose up --build",
      notes: "Docker Desktop only — seeded demo data and sample meshes included.",
    },
    image: "/assets/prototypes/reviewforge.png",
  },
  {
    title: "energy-Logix (Energylogistic)",
    description:
      "Multi-asset diluent blending & pipeline disruption simulator with a command center UI and seeded operational data.",
    technologies: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Docker"],
    repoUrl: "https://github.com/bagherianahita/Energylogistic",
    demo: {
      kind: "web",
      localUrl: "http://localhost:3000",
      run: "cp .env.example .env && npm install && npm run setup && npm run dev",
      notes: "Requires Docker for PostgreSQL. API runs on http://localhost:4000/health",
    },
    image: "/assets/prototypes/energylogix.png",
  },
  {
    title: "IceGuard AI",
    description:
      "Geospatial iceberg detection demo with map visualization and deterministic safety report (mock SAR pipeline).",
    technologies: ["Python", "Streamlit", "GeoPandas", "LangChain (optional)"],
    repoUrl: "https://github.com/bagherianahita/IceGuard-AI",
    demo: {
      kind: "web",
      localUrl: "http://localhost:8501",
      run: "pip install -r requirements.txt && streamlit run frontend/app.py",
      notes: "Works offline with demo data; live Sentinel Hub + OpenAI are optional.",
    },
    image: "/assets/prototypes/iceguard.png",
  },
  {
    title: "LLM-Driven Market Intelligence",
    description:
      "Market insights generator using a demo corpus (offline mode) with optional live RAG via OpenAI + Pinecone.",
    technologies: ["Python", "Streamlit", "RAG"],
    repoUrl: "https://github.com/bagherianahita/LLM-Market-Intelligence",
    demo: {
      kind: "web",
      localUrl: "http://localhost:8506",
      run: "pip install -r requirements.txt && streamlit run app.py --server.port 8506",
      notes: "No API keys needed for demo mode.",
    },
    image: "/assets/prototypes/market-intel.png",
  },
  {
    title: "AI-Powered Sales Email Personalization",
    description:
      "Sales email generator with default sample leads (deterministic template). Optional LLM drafting via OPENAI_API_KEY.",
    technologies: ["Python", "Streamlit", "OpenAI (optional)"],
    repoUrl: "https://github.com/bagherianahita/AI-Powered-Sales-Email-Personalization-Engine",
    demo: {
      kind: "web",
      localUrl: "http://localhost:8504",
      run: "pip install -r requirements.txt && streamlit run app.py --server.port 8504",
      notes: "No API keys needed to run the prototype.",
    },
    image: "/assets/prototypes/sales-email.png",
  },
  {
    title: "Automated Support Ticket Triage",
    description:
      "FastAPI service that predicts urgency + topic and suggests a routing queue (models included; default payloads in Swagger).",
    technologies: ["Python", "FastAPI", "scikit-learn"],
    repoUrl: "https://github.com/bagherianahita/Automated-support-ticket",
    demo: {
      kind: "api",
      localUrl: "http://localhost:8010/docs",
      run: "pip install -r requirements.txt && uvicorn app:app --reload --port 8010",
      notes: "Port is 8010 to avoid conflicts with other local services (e.g., MESO).",
    },
    image: "/assets/prototypes/support-triage.png",
  },
  {
    title: "Trust Debugger Demo",
    description:
      "Browser UI + Express API that audits trust scoring logic with scenario-based contradiction detection.",
    technologies: ["JavaScript", "Express"],
    repoUrl: "https://github.com/bagherianahita/Demo",
    demo: {
      kind: "web",
      localUrl: "http://localhost:4100",
      run: "npm install && npm start",
      notes: "Pre-filled JSON payload; click Run Audit Analysis.",
    },
    image: "/assets/prototypes/trust-demo.png",
  },
  {
    title: "Trust Debugger Auditor Service",
    description:
      "Production-grade Express + TypeScript service for auditing trust scoring inputs/outputs with reusable scenarios.",
    technologies: ["TypeScript", "Express", "Docker"],
    repoUrl: "https://github.com/bagherianahita/Debugger-Auditor-Service",
    demo: {
      kind: "api",
      localUrl: "http://localhost:4000/health",
      run: "cp .env.example .env && npm install && npm run dev",
      notes: "POST /debug/audit supports a default payload in the README.",
    },
    image: "/assets/prototypes/trust-service.png",
  },
];

export default projectData;
