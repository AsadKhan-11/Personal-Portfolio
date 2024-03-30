import React, { useState } from "react";
import "./Hero.css";
import picture from "../../images/ASAD4.png";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [name, setName] = useState("Asad Khan");

  const [profession, setProfession] = useState("Front End Developer");

  return (
    <>
      <section className="hero-container">
        <img className="hero-img" src={picture} />

        <h1 className="hero-name">
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
        </h1>
      </section>
    </>
  );
}

export default Hero;
