// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar container">
                <a href="#" className="logo">Anahita Bagheri Kalhor</a>
                 
                <ul className="nav-list">
                    <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#resume" className="nav-link">Resume</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">About Me</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;