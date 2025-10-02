import React from 'react';
import Gp from '../assets/Gp.png';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-content">
                <img src={Gp}  alt="Anahita Bagheri Kalhor" className="hero-image" />

                <h1 className="hero-title">Hello, I'm Ana </h1>
                <p className="hero-subtitle">Python and Full Stack Developer with dual Master's degrees.</p>
                <p>   { /* ul */ } 
                    Passion for creating robust and scalable web applications, front-end and back-end technologies, data science and machine learning.
                </p>
                <p> Canada | abagherikalh@mun.ca</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/anahita-bagheri-developer-pmp" target="_blank">www.linkedin.com/in/anahita-bagheri-developer</a></p>

                {/* <video controls className="ai-video">
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag. Please download the video to view it.
                </video> */}
            </div>
        </section>
    );
};

export default Hero;