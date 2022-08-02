import React from "react";
import "./interests.css"; //interests = services
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Interests = () => {
  return (
    <section id="interests">
      <h5>What are my interests?</h5>
      <h2>My Skills</h2>

      <div className="container interests__container">
        {/* ========== WEB DEVELOPMENT ========== */}
        <article className="interest">
          <div className="interest__head">
            <h3>Web Development</h3>
          </div>
          <ul className="interests__list">
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Experience with HTML5 / CSS </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Understanding of JavaScript (es6, JSX) </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Experience with ReactJS </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Responsive Web Designing </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p>Back-end basics: PHP </p>
            </li>
          </ul>
        </article>

        {/* ============= MOBILE DEVELOPMENT ========= */}
        <article className="interest">
          <div className="interest__head">
            <h3> General Programming</h3>
          </div>
          <ul className="interests__list">
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Experience with Python / C / JAVA </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Understanding of OOP Concepts </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Knowledge of Data structures and algorithms </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Experience with IDEs: VS-Code, PyCharm, sql-developer </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Basics of backend: MySQL, SQLite, PostgreSQL </p>
            </li>
          </ul>
        </article>

        {/* =========== Other ================= */}
        <article className="interest">
          <div className="interest__head">
            <h3>Other</h3>
          </div>
          <ul className="interests__list">
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Wireframing and Designing with Figma</p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Diagramming with StarUML, Lucidchart</p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Experience with Adobe Photoshop and Illustrator </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p>
                Basics of Android App Development with Android Studio (JAVA)
              </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="interests__list-icon"
              ></FontAwesomeIcon>
              <p> Understanding of Version Control Systems: Git and GitHub </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Interests;
