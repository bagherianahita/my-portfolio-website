import React from 'react';
import resumeData from "../constants/resumeData"; 

const Resume = () => {
    return (
        <section id="resume" className="resume-section container">
            <h2 className="section-heading text-center">Resume</h2>
            <div className="resume-content">
                <div className="resume-column">
                    <h3>Summary</h3>
                    <ul>
                        {resumeData.paragraphs.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>

                    <h3>Education</h3>
                    <div className="resume-item">
                        <h4>Master's Data Science</h4>
                        <p>Memorial University of Newfoundland and Labrador, Canada</p>
                        <p> This degree focuses on advanced analytical, statistical, and computational methods to extract knowledge and insights from data.
                        </p>
                        <p>Advanced Statistical Modeling (inference, regression, time series),</p>
                        <p>Machine Learning (supervised, unsupervised, deep learning),</p>
                        <p>Data Visualization and Ethical Data Practices</p>

                    </div>
                    <div className="resume-item">
                        <h4>Master's Industrial Engineering</h4>
                        <p>Kharazmi University, Tehran</p>
                        <p>This specialization applies engineering principles and quantitative methods to design, analyze, and optimize complex economic and social systems.</p>
                    </div>

<div className="resume-item">
                        <h3>Certifications</h3>
                        <p>AWS Cloud Practitioner , Udemy (2025)</p>
                        <p>Full-Stack Web Development , Dr. Angela Yu (2025)</p>
                        <p>Power BI Advanced Data Modeling , Udemy  (2025)</p>
                        <p>ISO 9001 Lead Auditor , RVTUV (2018)</p>
                    <p>Certification: <a href=" https://gale.udemy.com/certificate/UC-8745c0d6-0e23-4f3a-adac-ecff7d9b8100/" target="_blank">https://gale.udemy.com/certificate/UC-8745c0d6-0e23-4f3a-adac-ecff7d9b8100/</a></p>




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
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Frameworks & Libraries</h4>
                        <ul>
                            <li>React, Express.js</li>
                            {/* <li>Flask, Django</li> */}
                            <li>Pandas, NumPy, Scikit-learn, Spacy, FastAPI, Flask, pinecone, OpenAI</li>
                        </ul>
                    </div>



                    <div className="resume-item">
                        <h4>Databases & Tools</h4>
                        <ul>
                            <li>PostgreSQL</li>
                           {/* <li>MongoDB</li> */}
                            <li>Git, GitHub</li>
                            <li>Docker</li>
                        </ul>
                    </div>






                    <h3>Experience</h3>
                    <div className="resume-item">
                        <p>Job Title: Developer</p>
                        <p>Company Name: Spark</p>
                        <p>2023-Present</p>
                        <ul>
                            <li>Developed and maintained full-stack web applications.</li>
                            <li>Implemented RESTful APIs and integrated with databases.</li>
                            <li>Utilized data science techniques for various projects.</li>
                        </ul>
                    </div>




                     <div className="resume-item">
                        <p>Job Title: Developer</p>
                        <p>Company Name: M2M</p>
                        <p>2022-2023</p>
                        <ul>
                            <li>Debugging both back-end and front-end components of the platform.</li>
                            <li>Designed and developed a responsive website.</li>
                            <li>Designed and developed dashboards using Power BI.</li>
                        </ul>
                    </div>


                        <div className="resume-item">
                        <p>Job Title: Developer</p>
                        <p>Company Name: Behsazan</p>
                        <p>2018-2022</p>
                        <ul>
                            <li>Built a deep autoencoder to detect outlier transactions, while addressing class imbalance using SMOTE.</li>

                            <li>Applied hyperparameter tuning for architecture, learning rate, batch size, and epochs using 
GridSearchCV.</li>
                            <li>Achieved AUC-ROC greater than 0.92, improving recall significantly.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume;







{/*
 
 
 import React from 'react';
import resumeData from "../constants/resumeData"; 

const Resume = () => {
    return (
        <section id="resume" className="resume-section container">
            <h2 className="section-heading text-center">Resume</h2>
            <div className="resume-content">
                <div className="resume-column">
                    <h3>Summary</h3>
                    <p>{resumeData.paragraphs}</p>

                    <h3>Education</h3>
                    <div className="resume-item">
                        <h4>Master's Data Science</h4>
                        <p>Memorial University of Newfoundland and Labrador, Canada</p>
                     </div>
                    <div className="resume-item">
                        <h4>Master's Industrial Engineering</h4>
                        <p>Kharazmi University , Tehran</p>
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
                 </div>
            </div>
        </section>
    );
};

export default Resume;

*/}
