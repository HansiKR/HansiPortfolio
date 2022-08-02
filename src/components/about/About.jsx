import React from "react";
import "./about.css";
import ME2 from "../../assets/img/ME2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faAward,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about">
      <h5>Who am I?</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="Hansi's Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FontAwesomeIcon
                icon={faUserGraduate}
                className="about__icon"
              ></FontAwesomeIcon>
              <h5>Education</h5>
              <small>
                BICT Honours (UG) <br />
                HND in English (2021)
                <br />
                Diploma in IT (2015)
              </small>
            </article>

            <article className="about__card">
              <FontAwesomeIcon
                icon={faAward}
                className="about__icon"
              ></FontAwesomeIcon>
              <h5>Skills</h5>
              <small>
                HTML / CSS / JS <br /> ReactJS <br /> SQL / PHP{" "}
              </small>
            </article>

            <article className="about__card">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className="about__icon"
              ></FontAwesomeIcon>
              <h5>Extra Curricular</h5>
              <small>
                Secretary - LED KLN (22/23) <br />
                Co-Editor - UOK ISG (21/22) <br />
                Secretary - ITSA UOK (19/20)
              </small>
            </article>
          </div>

          <p>
            As an undergraduate with multiple areas to focus on, I always manage
            my time wisely to meet end goals. I have excellent communication
            skills that enable me to communicate with a wide range of people
            effectively. I also have excellent team spirit and can-do attitude
            that would be beneficial for any organization.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Reach Me{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
