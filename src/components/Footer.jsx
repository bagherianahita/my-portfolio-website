// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Anahita Bagheri Kalhor. All rights reserved.</p>
                <div className="social-links">
                    <a href="www.linkedin.com/in/anahita-bagheri-developer-pmp" target="_blank">LinkedIn</a>
                    {/* Add more social links as needed */}
                </div>
            </div>
        </footer>
    );
};
//map st johns
export default Footer;