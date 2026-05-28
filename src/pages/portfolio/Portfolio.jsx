import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Leadership from './sections/Leadership';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

export default function Portfolio(props) {
  return (
    <div>
      {/* Hero Section */}
      <Hero name={props.name} />

      {/* About */}
      <About />

      {/* Experience */}
      <Experience />

      {/* Education */}
      <Education />

      {/* Leadership */}
      <Leadership />

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />

      {/* Contact */}
      <Contact
        email={props.email}
        linkedin={props.linkedin}
        github={props.github}
      />
    </div>
  );
}
