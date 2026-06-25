import React from 'react';
import projectData from "../constants/projectData";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading text-center">Projects</h2>
      <p className="text-center" style={{ maxWidth: 720, margin: "0 auto 2rem", opacity: 0.9 }}>
        All repositories from my{" "}
        <a href="https://github.com/bagherianahita" target="_blank" rel="noopener noreferrer">
          GitHub profile
        </a>
        — each with a short description, repo link, and local demo URL where available.
      </p>
      <div className="grid gap-4">
        {projectData.map((project, idx) => (
          <div key={idx} className="p-4 border rounded-lg shadow-md">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} prototype preview`}
                style={{
                  width: "100%",
                  maxHeight: 220,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 12,
                }}
                loading="lazy"
              />
            ) : null}
            <h4 className="text-lg font-semibold">{project.title}</h4>
            <p className="text-sm">{project.description}</p>
            <p className="text-xs mt-2">
              <strong>Tech:</strong> {project.technologies.join(", ")}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                GitHub repo
              </a>
              {project.demo?.localUrl ? (
                <a
                  href={project.demo.localUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 underline text-sm"
                >
                  Local demo / UI
                </a>
              ) : null}
            </div>
            {project.demo?.localUrl ? (
              <div className="text-sm mt-2">
                <strong>URL:</strong>{" "}
                <span style={{ fontFamily: "monospace" }}>{project.demo.localUrl}</span>
              </div>
            ) : null}
            {project.demo?.run ? (
              <pre
                style={{
                  marginTop: 8,
                  padding: 10,
                  borderRadius: 8,
                  background: "#0b1220",
                  color: "#d1e7ff",
                  overflowX: "auto",
                  fontSize: 12,
                }}
              >
                {project.demo.run}
              </pre>
            ) : null}
            {project.demo?.notes ? (
              <p className="text-xs mt-2" style={{ opacity: 0.85 }}>
                {project.demo.notes}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
