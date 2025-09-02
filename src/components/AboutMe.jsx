// src/components/AboutMe.jsx
import React from 'react';
 import  aboutData  from  "../constants/aboutData"; 
import Bp from '../assets/Bp.png';

const AboutMe = () => {
    return (
        <section id="about" className="about-me-section container">
            <h2 className="section-heading text-center">About Me</h2>
            <div className="about-me-content">
                <div className="about-me-text">
                    <h3>{aboutData.title}</h3>
                    <p> {aboutData.paragraphs[0]}
                        </p>
                    <p>
                        {aboutData.paragraphs[1]}
                    </p>
                    {/* <video controls className="ai-video">
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag. Please download the video to view it.
                </video> */}
                </div>



                <img src={Bp} alt="Anahita's Interests" className="about-me-image" />
            </div>
        </section>
    );
};

export default AboutMe;