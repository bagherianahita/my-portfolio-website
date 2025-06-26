// src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className="about-me-section container">
            <h2 className="section-heading text-center">About Me</h2>
            <div className="about-me-content">
                <div className="about-me-text">
                    <h3>A Little More About Me...</h3>
                    <p>
                        Beyond coding, I have a passion for exploring the world and experiencing diverse cultures through travel.
                        I believe these experiences broaden my perspective and fuel my creativity, which in turn influences my problem-solving approach in development.
                    </p>
                    <p>
                        Additionally, I have a keen interest in nail art, which allows me to express my artistic side and attention to detail.
                        It's a hobby that combines precision with creativity, much like writing clean and efficient code.
                    </p>
                    <video controls className="ai-video">
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag. Please download the video to view it.
                </video>
                </div>
                <img src="https://via.placeholder.com/400x300" alt="Anahita's Interests" className="about-me-image" />
            </div>
        </section>
    );
};

export default AboutMe;