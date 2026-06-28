import aboutData from '../constants/aboutData';
import Bp from '../assets/Bp.png';

const AboutMe = () => {
  return (
    <section id="about" className="about-me-section container">
      <h2 className="section-heading text-center">About Me</h2>
      <div className="about-me-content">
        <div className="about-me-text">
          <h3>{aboutData.title}</h3>
          {aboutData.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <img src={Bp} alt="Anahita's interests" className="about-me-image" />
      </div>
    </section>
  );
};

export default AboutMe;
