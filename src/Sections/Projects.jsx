import React, { useState } from "react";
import "./Projects.css";
import youtube from "../projects/youtube.png";
import player from "../projects/player.png";
import calculator from "../projects/calculator.png";
import news from "../projects/news.png";
import omnifood from "../projects/omnifood.png";
import weather from "../projects/weather.png";

const data = [
  { name: "News App", img: `${news}` },
  { name: "Weather Forecaster", img: `${weather}` },
  {
    name: "Youtube Clone",
    img: `${youtube}`,
  },
  {
    name: "Music Player",
    img: `${player}`,
  },
  { name: "Calculator", img: `${calculator}` },
  { name: "Omnifood", img: `${omnifood}` },
];

function Projects() {
  const [index, setIndex] = useState(0);

  let nextImg = () => {
    setIndex((index) => {
      if (index == data.length - 1) return 0;
      return index + 1;
    });
  };

  let prevImg = () => {
    setIndex((index) => {
      if (index === 0) return data.length - 1;
      return index - 1;
    });
  };

  return (
    <>
      <section className="project" id="projects">
        <div className="projects-container">
          <div className="header-txt">
            <h1 className="project-header">PROJECTS</h1>
            <h1 className="project-sec-header">MY WORK</h1>
          </div>
          <button onClick={prevImg} id="prev" className="arr-btn prev-btn">
            &larr;
          </button>
          <button onClick={nextImg} id="next" className="arr-btn next-btn">
            &rarr;
          </button>
          <div className="all-projects">
            {data.map((d, num) => (
              <div key={num} className="project-container ">
                <img src={d.img} className="project-img " />
                <h3 className="project-name">{d.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
