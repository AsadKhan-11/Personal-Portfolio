import React from "react";
import "./Projects.css";
import youtube from "../projects/youtube.png";
import player from "../projects/player.png";
import calculator from "../projects/calculator.png";

function Projects() {
  return (
    <>
      <section className="project" id="projects">
        <div className="header-txt">
          <h1 className="project-header">PROJECTS</h1>
          <h1 className="project-sec-header">MY WORK</h1>
        </div>

        <div className="project-container current-slide">
          <img src={youtube} className="project-img " />
          <h3 className="project-name">Youtube Clone</h3>
        </div>

        <div className="project-container">
          <img src={player} className="project-img" />
          <h3 className="project-name">Music Player</h3>
        </div>
        <div className="project-container">
          <img src={calculator} className="project-img" />
          <h3 className="project-name">Calculator</h3>
        </div>
      </section>
    </>
  );
}

export default Projects;
