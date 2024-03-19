import React from "react";
import "./Hero.css";
import picture from "../images/ASAD4.png";

function Hero() {
  return (
    <>
      <section className="hero-container">
        <img className="hero-img" src={picture} />
        <h1 className="hero-name">
          ASAD <br></br> <span className="hero-s-name"> KHAN </span>
        </h1>

        <h1 className="profession-name">
          FRONT-END <br></br>{" "}
          <span className="profession-s-name"> DEVELOPER </span>
        </h1>
      </section>
    </>
  );
}

export default Hero;
