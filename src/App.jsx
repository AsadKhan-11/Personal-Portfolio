import React, { useEffect } from "react";
import "./App.css";
import Hero from "./Sections/HeroSection/Hero";
import About from "./Sections/AboutSection/About";
import Skills from "./Sections/SkillSection/Skills";
import Projects from "./Sections/ProjectSection/Projects";
import Contact from "./Sections/ContactSection/Contact";
import Footer from "./Sections/FooterSection/Footer";
import Sidebar from "./Sections/SideBar/Sidebar";
import Navbar from "./Sections/NavbarSection/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {" "}
      <div className="complete-container">
        <Sidebar />

        <section data-aos="fade-up" className="page-container">
          <Navbar />
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
