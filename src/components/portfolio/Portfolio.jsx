import React from "react";
import "./portfolio.css";
import JavaImage from "../../assets/img/Java.svg";
import PythonImage from "../../assets/img/Python.svg";
import PHPImage from "../../assets/img/PHP.svg";
import BSImage from "../../assets/img/Bootstrap.svg";
import AndroidImage from "../../assets/img/Android.svg";
import ReactImage from "../../assets/img/ReactJS.svg";

// Data Array for Portfolio Items
const data = [
  {
    id: 1,
    image: JavaImage,
    title: "Simple JAVA GUI with OOP",
    github: "https://github.com/HansiKR/Java-GUI-AreaCal",
  },
  {
    id: 2,
    image: PythonImage,
    title: "Python Tkinter Project with CRUD",
    github: "https://github.com/HansiKR/Python-tkinter-Project",
  },
  {
    id: 3,
    image: PHPImage,
    title: "Web app with CRUD using PHP",
    github: "https://github.com/HansiKR/EmployeeManaging-WebApp",
  },
  {
    id: 4,
    image: BSImage,
    title: "Website redesign with Bootstrap",
    github: "https://github.com/HansiKR/Portfolio-Website",
  },
  {
    id: 5,
    image: AndroidImage,
    title: "Android Stopwatch using JAVA",
    github: "https://github.com/HansiKR/Android-Stopwatch",
  },
  {
    id: 6,
    image: ReactImage,
    title: "My portfolio site using React.JS",
    github: "https://github.com/HansiKR/HansiPortfolio",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>What have I worked on so far?</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="An Illustration" />
              </div>
              <h3>{title} </h3>
              <div className="portfolio__item-CTA">
                <a href={github} className="btn btn-primary" target="_blank">
                  GitHub Repo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
