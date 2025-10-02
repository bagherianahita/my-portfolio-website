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
            <h4 className="text-lg font-semibold">{project.title}</h4>
            <p className="text-sm">{project.description}</p>
            <p className="text-xs mt-2">
              <strong>Tech:</strong> {project.technologies.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-2 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
