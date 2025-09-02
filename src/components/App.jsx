// src/components/App.jsx
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Resume from './Resume';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
import AnaProjects from '../ProjectsArray';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Resume />
            <Projects />
            <AboutMe />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;

// {AnaProjects.map(pro => (
//  <Projects
//     id={pro.id}
//     key={pro.id}
//     title={pro.title}
//     description={pro.description}            
//             />
// ))}