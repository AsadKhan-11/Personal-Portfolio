import React from "react";

import Navbar from "./Sections/NavbarSection/Navbar";
import Hero from "./Sections/HeroSection/Hero";
import About from "./Sections/AboutSection/About";
import Skills from "./Sections/SkillSection/Skills";
import Projects from "./Sections/ProjectSection/Projects";
import Contact from "./Sections/ContactSection/Contact";
import Footer from "./Sections/FooterSection/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
