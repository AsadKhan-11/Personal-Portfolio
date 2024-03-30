import React, { useState } from "react";
import "./Hero.css";
import picture from "../../images/ASAD4.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [name, setName] = useState("ASAD");
  const [secName, setSecName] = useState("KHAN");
  const [profession, setProfession] = useState("FRONT-END");
  const [secProfession, setSecProfession] = useState("DEVELOPER");

  return (
    <>
      <section className="hero-container">
        <img className="hero-img" src={picture} />
        <h1 className="hero-name">
          {name} <br></br> <span className="hero-s-name"> {secName} </span>
        </h1>

        <h1 className="profession-name">
          {profession} <br></br>{" "}
          <span className="profession-s-name"> {secProfession} </span>
        </h1>
      </section>
    </>
  );
}

export default Hero;
