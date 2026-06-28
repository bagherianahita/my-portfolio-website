import { useState } from 'react';
import projectData from '../constants/projectData';
import { GITHUB_URL } from '../constants/contactData';
import type { Project } from '../types';

const FALLBACK_IMAGE = '/assets/prototypes/reviewforge.svg';

function ProjectCard({ project }: { project: Project }) {
  const [imgSrc, setImgSrc] = useState(project.image || FALLBACK_IMAGE);

  return (
    <article className="project-card">
      <img
        src={imgSrc}
        alt={`${project.title} prototype preview`}
        onError={() => setImgSrc(FALLBACK_IMAGE)}
        className="project-card__image"
        loading="lazy"
      />
      <div className="project-card__body">
        <div className="project-card__header">
          <h3>{project.title}</h3>
          <span className="chip">{project.category}</span>
        </div>
        <p className="project-card__desc">{project.description}</p>

        <ul className="tech-list">
          {project.technologies.map((tech) => (
            <li className="tech-tag" key={tech}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card__links">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            GitHub repo
          </a>
          {project.demo.localUrl ? (
            <a href={project.demo.localUrl} target="_blank" rel="noopener noreferrer">
              Local demo
            </a>
          ) : null}
        </div>

        {project.demo.localUrl ? (
          <p className="project-card__url">
            <strong>URL:</strong> <code>{project.demo.localUrl}</code>
          </p>
        ) : null}
        <pre className="project-card__run">{project.demo.run}</pre>
        {project.demo.notes ? (
          <p className="project-card__notes">{project.demo.notes}</p>
        ) : null}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-heading text-center">Projects</h2>
        <p className="section-subheading text-center">
          Selected prototypes from my{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub profile
          </a>
          — each with a description, repository link, and a local demo URL where available.
        </p>
        <div className="project-grid">
          {projectData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
