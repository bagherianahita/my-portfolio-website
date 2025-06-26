 import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="resume-section container">
            <h2 className="section-heading text-center">Resume</h2>
            <div className="resume-content">
                <div className="resume-column">
                    <h3>Summary</h3>
                    <p>Highly accomplished Full Stack Developer with dual Master's degrees...</p>
                   
                    <h3>Education</h3>
                    <div className="resume-item">
                        <h4>Master's Degree 1</h4>
                        <p>University Name, City, Country</p>
                        <p>Year of Graduation</p>
                    </div>
                    <div className="resume-item">
                        <h4>Master's Degree 2</h4>
                        <p>University Name, City, Country</p>
                        <p>Year of Graduation</p>
                    </div>
                </div>
                <div className="resume-column">
                    <h3>Skills</h3>
                    <div className="resume-item">
                        <h4>Programming Languages</h4>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript (Node.js, React.js)</li>
                            <li>HTML5, CSS3</li>
                            <li>SQL (PostgreSQL)</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Frameworks & Libraries</h4>
                        <ul>
                            <li>React, Express.js</li>
                            <li>Flask, Django</li>
                            <li>Pandas, NumPy, Scikit-learn</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Databases & Tools</h4>
                        <ul>
                            <li>PostgreSQL, pgAdmin</li>
                            <li>MongoDB</li>
                            <li>Git, GitHub</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                    <h3>Experience</h3>
                    <div className="resume-item">
                        <h4>Job Title</h4>
                        <p>Company Name, City, Country</p>
                        <p>Start Date - End Date</p>
                        <ul>
                            <li>Developed and maintained full-stack web applications.</li>
                            <li>Implemented RESTful APIs and integrated with databases.</li>
                            <li>Utilized data science techniques for various projects.</li>
                        </ul>
                    </div>
                    {/* Add more experience items as needed */}
                </div>
            </div>
        </section>
    );
};

export default Resume;