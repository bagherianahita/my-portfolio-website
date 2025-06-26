import React from 'react';
import AnaProjects from '../ProjectsArray';



const Projects = (props) => { 
    return (
        <section id="projects" className="projects-section container">
            <h2 className="section-heading text-center">My Projects</h2>
            <div className="project-grid">
                {/* Example Project 1 */}
                <div className="project-card">
                    <img src="https://via.placeholder.com/400x200" alt="PostgreSQL Project" />
                    <div className="project-info">
                        <p> {props.id}    </p>
                        <h3>{props.title} </h3>
                        <p> {props.description}    </p>
                        <p>
                            Used pgAdmin for database creation and data import.
                        </p>
                        <a href="#" className="project-link" target="_blank">View Project</a>
                    </div>
                </div>
 
                 
            </div>
        </section>
    );
};

export default Projects;