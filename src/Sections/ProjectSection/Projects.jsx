import React, { useState } from "react";
import "./Projects.css";
import youtube from "../../projects/youtube.png";
import player from "../../projects/player.png";
import calculator from "../../projects/calculator.png";
import news from "../../projects/news.png";
import omnifood from "../../projects/omnifood.png";
import weather from "../../projects/weather.png";

const data = [
  {
    name: "News App",
    img: `${news}`,
    content:
      "My news app built with React is a comprehensive platform with the latest headlines and stories from around the world. The app provides easy access to news articles across various categories such as business, technology, sports, entertainment, and more. Powered by a robust news API, the app dynamically fetches and displays real-time news content, complete with headlines, summaries, and images.",
  },
  {
    name: "Weather Forecaster",
    img: `${weather}`,
    content:
      "My weather forecasting app is a simple yet effective tool designed to provide up-to-date weather information at your fingertips. Users can enter the name of a city in the search bar, and the app fetches real-time weather data using a weather API. The weather information includes temperature, humidity, wind speed, and a description of the weather conditions.",
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
  const [index, setIndex] = useState(0);

  let nextImg = () => {
    const num = (index + 1) % data.length;
    setIndex(num);
  };

  let prevImg = () => {
    const num = (index - 1 + data.length) % data.length;
    setIndex(num);
  };

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
            <button onClick={prevImg} id="prev" className="arr-btn prev-btn">
              &larr;
            </button>
            <button onClick={nextImg} id="next" className="arr-btn next-btn">
              &rarr;
            </button>
            {data.map((d, num) => (
              <div
                key={num}
                className={num === index ? " slide slide-active" : "slide"}
              >
                <div className="project-desc">
                  <img src={d.img} className="project-img " />
                  <p className="project-content">{d.content} </p>
                </div>
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
