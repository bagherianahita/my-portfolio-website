import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../constants/contactData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          &copy; {new Date().getFullYear()} Anahita Bagheri Kalhor. All rights reserved.
        </p>
        <div className="social-links">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
