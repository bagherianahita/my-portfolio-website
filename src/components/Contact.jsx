// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section container">
            <h2 className="section-heading text-center">Get in Touch</h2>


<form className="contact-form"  name="contact" method="POST" data-netlify="true"> 

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
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;