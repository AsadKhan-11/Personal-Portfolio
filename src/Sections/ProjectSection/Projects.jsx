import React, { useState, useRef, useEffect } from "react";
import "./Projects.css";
import youtube from "../../projects/youtube.png";
import player from "../../projects/player.png";
import calculator from "../../projects/calculator.png";
import news from "../../projects/news.png";
import omnifood from "../../projects/omnifood.png";
import weather from "../../projects/weather.png";
import kafe from "../../projects/kafe.png";

const data = [
  {
    name: "News App",
    img: `${news}`,
    content:
      "My news app built with React is a comprehensive platform with the latest headlines and stories from around the world. The app provides easy access to news articles across various categories such as business, technology, sports, entertainment, and more. Powered by a robust news API, the app dynamically fetches and displays real-time news content, complete with headlines, summaries, and images.",
  },
  {
    name: "KAFE",
    img: `${kafe}`,
    content:
      "Kafe is built with React is a sleek and interactive platform designed to showcase a modern café experience. The site features a beautifully structured layout with dedicated sections like menu items. The project focuses on user-friendly UI, stylish visuals, and a seamless browsing experience—ideal for both desktop and mobile users. It demonstrates strong front-end skills and attention to aesthetic detail.",
  },
  {
    name: "Youtube Clone",
    img: `${youtube}`,
    content:
      "My YouTube Clone built with React looks and feels similar to the real YouTube website. It's designed to show a collection of video thumbnails and titles in a neat grid layout. Users can browse through these thumbnails to discover different videos, just like on YouTube. Although this clone doesn't actually play videos, it provides a visual preview of what the videos look like.",
  },

  {
    name: "Music Player",
    img: `${player}`,
  },
  {
    name: "Calculator",
    img: `${calculator}`,
    content:
      "I created a calculator app using React. This calculator allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. It features a clean and interactive interface with buttons for numbers and operators. Using React's component-based architecture, I implemented logic to handle user inputs and update the display based on the calculations. ",
  },
  {
    name: "Omnifood",
    img: `${omnifood}`,
    content:
      "Omnifood is a cool website that makes ordering food super easy. It's built using HTML and CSS, which are tools for creating websites. The website lets you order delicious and healthy meals from local restaurants without any hassle. You can see yummy pictures of different dishes and explore various cuisines. Omnifood is all about making food delivery simple and enjoyable.",
  },
];

function Projects() {
  return (
    <>
      <section className="project" id="projects">
        <div className="projects-container">
          <div className="header-txt">
            <h1 className="project-header">
              PROJECTS
              <span className="project-sec-header">MY WORK</span>
            </h1>
          </div>
          <div className="slider">
            <div className="slide-wrap">
              {data.map((d, num) => (
                <div key={num} className="slide-active">
                  <div className="project-desc">
                    <div className="project-img-container">
                      <img src={d.img} className="project-img " />
                    </div>
                    <p className="project-content">{d.content} </p>
                  </div>
                  <h3 className="project-name">{d.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
