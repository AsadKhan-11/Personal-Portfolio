import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">ASAD</h1>

        <nav className="links">
          <a href="#about-me" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </nav>

        <a href="#contact-form" className="contact-btn">
          Contact me
        </a>
      </nav>
    </>
  );
}

export default Navbar;
