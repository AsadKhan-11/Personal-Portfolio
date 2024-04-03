import React, { useState } from "react";
import "./Hero.css";
import picture from "../../images/ASAD4.png";
import Navbar from "../NavbarSection/Navbar";

import back from "../../images/Space.jpg";
// import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [name, setName] = useState("Asad Khan");

  const [profession, setProfession] = useState("Front End Developer");

  return (
    <>
      <section className="hero-section">
        <Navbar />
        <div className="hero-container">
          <div className="home-info">
            <h1 className="hero-name">My name is {name}</h1>
            <h1 className="hero-name">I am a {profession}</h1>
          </div>
          {/* <h1 className="hero-name">
            <Typewriter
              words={[`My name is ${name}`, `I am a ${profession}`]}
              deleteSpeed={70}
              typeSpeed={70}
              delaySpeed={1500}
              loop={true}
              cursor
              cursorStyle=">"
              cursorColor="#ffff"
            />
          </h1> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
