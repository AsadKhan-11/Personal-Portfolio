import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <section id="about-me" className="aboutMe">
        <div className="about-container">
          <h1 className="about-header">
            ABOUT ME
            <span className="about-sec-header">WHO AM I? </span>
          </h1>

          <div className="about-tags">
            <div className="about-tags-box">
              <h1 className="about-info">10+</h1>
              <p className="about-desc">Happy clients</p>
            </div>
            <div className="about-tags-box">
              <h1 className="about-info">1+</h1>
              <p className="about-desc">Years of experience</p>
            </div>
            <div className="about-tags-box">
              <h1 className="about-info">20+</h1>
              <p className="about-desc">Projects done</p>
            </div>
          </div>

          <div className="about-txt-container">
            <p className="about-txt">
              Hello there! I'm Asad Khan, a full stack web developer based in
              Lahore, Pakistan. With a passion for building complete web
              solutions, I specialize in developing user-friendly and efficient
              digital experiences from front end to back end. I'm dedicated to
              delivering high-quality, scalable web development services. As a
              freelance developer, I offer personalized solutions tailored to
              your needs. My expertise extends across HTML, CSS, JavaScript,
              React, Node.js, Express, and MongoDB. Ensuring your project is in
              capable hands from start to finish.
            </p>

            {/* <div className="about-side-box">
              <div className="about-side-info">
                <p className="about-name">Name</p>
                <h2 className="about-name-desc">Asad Khan</h2>
              </div>
              <div className="about-side-info">
                <p className="about-name">Email</p>
                <h2 className="about-name-desc">mrasad10khan@gmail.com</h2>
              </div>
              <div className="about-side-info">
                <p className="about-name">Phone</p>
                <h2 className="about-name-desc">+92 31043885534</h2>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
