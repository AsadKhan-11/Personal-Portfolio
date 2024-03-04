import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">ASAD</h1>

        <nav className="links">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
        </nav>

        <button className="contact-btn">Contact me</button>
      </nav>
    </>
  );
}

export default Navbar;
