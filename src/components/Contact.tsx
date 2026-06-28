import contactData, { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../constants/contactData';

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-heading text-center">Get in Touch</h2>
      <p className="section-subheading text-center">
        I&rsquo;m open to roles and collaborations in full-stack, data, and AI engineering.
      </p>

      <div className="contact-grid">
        <div className="contact-details">
          <p>
            <strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p>
            <strong>Location:</strong> {contactData.location}
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/anadevpmp
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              github.com/bagherianahita
            </a>
          </p>
        </div>

        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don&rsquo;t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
