import Gp from '../assets/Gp.png';
import contactData, { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../constants/contactData';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <img src={Gp} alt="Portrait of Anahita Bagheri Kalhor" className="hero-image" />
        <p className="hero-eyebrow">Full Stack &amp; AI / Data Engineer</p>
        <h1 className="hero-title">Anahita Bagheri Kalhor</h1>
        <p className="hero-subtitle">
          I build robust, scalable web applications and turn data into dependable,
          production-ready products.
        </p>
        <p className="hero-lead">
          Python and full-stack developer with dual master&rsquo;s degrees, spanning
          front-end, back-end, data science, and machine learning.
        </p>
        <p className="hero-meta">
          {contactData.location} · <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a
            className="btn btn-outline"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-outline"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
