import Header from './Header';
import Hero from './Hero';
import Dashboard from './Dashboard';
import Resume from './Resume';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Dashboard />
        <Resume />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
