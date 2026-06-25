import React from 'react';
//import AnaProjects from '../ProjectsArray';
import projectData from "../constants/projectData"; 

function Projects() {
  return (
      <section id="projects"  className="projects-section">

      <h2               className="section-heading text-center">  Projects</h2>
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
            <div className="mt-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm block"
              >
                View GitHub repo
              </a>
              {project.demo?.localUrl ? (
                <div className="text-sm mt-2">
                  <strong>Run locally:</strong>{" "}
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
