import React from "react";
import "./App.css";
import Hero from "./Sections/HeroSection/Hero";
import About from "./Sections/AboutSection/About";
import Skills from "./Sections/SkillSection/Skills";
import Projects from "./Sections/ProjectSection/Projects";
import Contact from "./Sections/ContactSection/Contact";
import Footer from "./Sections/FooterSection/Footer";
import Sidebar from "./Sections/SideBar/Sidebar";
import Navbar from "./Sections/NavbarSection/Navbar";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="complete-container">
        <Sidebar />
        <section className="page-container">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
