import React from "react";
import "./about.css";
import ME2 from "../../assets/img/ME2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faAward, faGlobe } from "@fortawesome/free-solid-svg-icons";

const About = () => (
  <section id="about">
    <h5>Who am I?</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me"><div className="about__me-image"><img src={ME2} alt="Hansi Radhakrishnan" /></div></div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card"><FontAwesomeIcon icon={faUserGraduate} className="about__icon" /><h5>Education</h5><small>M.Sc. International Information Systems<br />FAU · Digital Business</small></article>
          <article className="about__card"><FontAwesomeIcon icon={faAward} className="about__icon" /><h5>Recognition</h5><small>Bank2U: APICTA Gold and NBQSA National Overall Silver (2025)<br />PreveNET: APICTA and NBQSA Gold (2024)</small></article>
          <article className="about__card"><FontAwesomeIcon icon={faGlobe} className="about__icon" /><h5>Experience</h5><small>4 years in FinTech and banking<br />6 products · 10+ clients · 5 countries</small></article>
        </div>
        <p>I’m a former IT Business Analyst and current M.Sc. International Information Systems student at FAU. Over four years, I helped design FinTech and banking solutions across five countries, including AI/ML-enabled identity and document checks. My research interests span FinTech, EdTech, and human-computer interaction. I’m especially interested in responsible use of data and AI in high-stakes decisions: designing solutions that help people while preserving human judgment.</p>
        <a href="#contact" className="btn btn-primary">Reach Me</a>
      </div>
    </div>
  </section>
);

export default About;
