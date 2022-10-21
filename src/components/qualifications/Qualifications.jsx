import React from "react";
import "./qualifications.css"; //experiences = qualifications in my project
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Qualifications = () => {
  return (
    <section id="qualifications">
      <h5>What are my qualifications?</h5>
      <h2>My Journey</h2>

      <div className="container qualifications__container">
        {/* =========== EDUCATIONAL BACKGROUND =========== */}
        <div className="qualifications__education">
          <h3>Education</h3>
          <div className="qualifications__content">
            <article className="qualifications__details">
              <FontAwesomeIcon icon={faSpinner} className="qualifications__details-icon"></FontAwesomeIcon>
              <div>
                <h4>Bachelor of Information and Communication Technology (Hons.)</h4>
                <small className="text-light">University of Kelaniya</small>
                <h6 className="text-light">Present</h6>
              </div>
            </article>
            <article className="qualifications__details">
              <FontAwesomeIcon icon={faCircleCheck} className="qualifications__details-icon"></FontAwesomeIcon>
              <div>
                <h4>Higher National Diploma in English </h4>
                <small className="text-light">Sri Lankan Institute of Advanced Technology - Kandy</small>
                <h6 className="text-light">2021</h6>
              </div>
            </article>
            <article className="qualifications__details">
              <FontAwesomeIcon icon={faCircleCheck} className="qualifications__details-icon"></FontAwesomeIcon>
              <div>
                <h4>G.C.E.Advanced Level</h4>
                <small className="text-light">
                  Pushpadana Girls' College - Kandy
                </small>
                <h6 className="text-light">2017</h6>
              </div>
            </article>
            <article className="qualifications__details">
              <FontAwesomeIcon icon={faCircleCheck} className="qualifications__details-icon"></FontAwesomeIcon>
              <div>
                <h4>G.C.E.Ordinary Level</h4>
                <small className="text-light">
                  St.Anthony's Girls' College - Kandy
                </small>
                <h6 className="text-light">2014 </h6>
              </div>
            </article>
          </div>
        </div>
        {/* ======= WORK EXPERIENCE ====== */}
        <div className="qulifications__work">
          <h3>Work Experience</h3>
          <div className="qualifications__content">
          <article className="qualifications__details">
              <FontAwesomeIcon icon={faSpinner} className="qualifications__details-icon"></FontAwesomeIcon>
              <div>
                <h4>Intern IT Business Analyst</h4>
                <small className="text-light">
                  Epic Lanka (Pvt) Ltd. - Battaramulla
                </small>
                <h6 className="text-light">Aug 2021 - Present</h6>
              </div>
            </article>
            <article className="qualifications__details">
              <FontAwesomeIcon icon={faCircleCheck} className="qualifications__details-icon"></FontAwesomeIcon>
              <div>
                <h4>Computer Support Specialist</h4>
                <small className="text-light">
                  Paperline Trading (Pvt) Ltd. - Kandy
                </small>
                <h6 className="text-light">Feb 2022 - July 2022</h6>
              </div>
            </article>
            <article className="qualifications__details">
              <FontAwesomeIcon icon={faCircleCheck} className="qualifications__details-icon"></FontAwesomeIcon>
              <div>
                <h4>Content Writer (Part Time)</h4>
                <small className="text-light">
                  Cloud Content Marketing (Pvt) Ltd.- Kandy
                </small>
                <h6 className="text-light">Mar 2019 - Jul 2020</h6>
              </div>
            </article>
            <article className="qualifications__details">
              <FontAwesomeIcon icon={faCircleCheck} className="qualifications__details-icon"></FontAwesomeIcon>
              <div>
                <h4>IT Support Officer</h4>
                <small className="text-light">
                  Kalanie Accountancy Solutions (Pvt) Ltd. - Kandy
                </small>
                <h6 className="text-light">Jan 2018 - Jan 2019</h6>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
