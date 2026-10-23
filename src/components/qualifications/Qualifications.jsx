import React from "react";
import "./qualifications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const education = [
  { current: true, title: "M.Sc. International Information Systems", place: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)", date: "Oct 2026 – Present", note: "Intended specialization: Digital Business" },
  { title: "Certificate in Quantitative Data Analysis", place: "University of Sri Jayewardenepura", date: "Sep 2024 – Dec 2024", note: "SPSS, inferential statistics, regression, and survey design" },
  { title: "Bachelor of Information and Communication Technology (Hons.)", place: "University of Kelaniya, Sri Lanka", date: "Feb 2019 – Oct 2023", note: "First Class · GPA 3.94/4.00 · Gold Medalist · Software Systems Technology" },
  { title: "Higher National Diploma in English (Part Time)", place: "SLIATE, Kandy", date: "May 2018 – May 2021", note: "Distinction · GPA 3.90/4.00" },
];

const paperlineRole = {
  title: "Computer Support Specialist",
  date: "Jan 2022 – Jul 2022",
  note: "Reviewed POS inventory, delivery scheduling, and administrative processes for improvement opportunities. Supported system changes through staff training and operational support, created company portfolio and brand materials, and coordinated requirements between management, staff, and technology providers.",
};

const epicRoles = [
  { title: "Business Analyst", date: "Oct 2023 – Aug 2026", note: "Designed regulated FinTech solutions including AI-enabled customer profiling, predictive bill settlement, and Bank2U, a financial inclusion platform recognized with 2025 APICTA Gold and NBQSA National Overall Silver. Contributed to PreveNET terminal security, recognized with 2024 APICTA and NBQSA Gold awards. Led requirements sessions across Sri Lanka, Maldives, Malaysia, and South Africa, used insights from 15+ deployments to shape roadmaps, and worked with QA on usability-focused testing." },
  { title: "Associate Business Analyst", date: "Feb 2023 – Oct 2023", note: "Investigated BFSI and e-government workflows and contributed to solution design for Sri Lanka’s investment facilitation, tourism, and patient communication platforms. Prepared functional specifications, acceptance criteria, and responses to client proposals." },
  { title: "Intern Business Analyst", date: "Aug 2022 – Feb 2023", note: "Supported AI-driven credit scoring and AI/ML document verification; gathered requirements through interviews, observation, and document analysis; created Figma wireframes; and delivered 10+ client presentations and training workshops." },
];

const Entry = ({ item, place }) => (
  <article className="qualifications__details">
    <FontAwesomeIcon icon={item.current ? faSpinner : faCircleCheck} className="qualifications__details-icon" />
    <div>
      <h4>{item.title}</h4>
      {place && <small className="text-light">{place}</small>}
      <h6 className="text-light">{item.date}</h6>
      {item.note && <p className="qualification__note">{item.note}</p>}
    </div>
  </article>
);

const Qualifications = () => (
  <section id="qualifications">
    <h5>Education and professional experience</h5>
    <h2>My Journey</h2>
    <div className="container qualifications__container">
      <div>
        <h3>Education</h3>
        <div className="qualifications__content">
          {education.map((item) => <Entry key={item.title} item={item} place={item.place} />)}
        </div>
      </div>
      <div>
        <h3>Work Experience</h3>
        <div className="qualifications__employer">
          <h4>Epic Lanka</h4>
          <div className="qualifications__content">
            {epicRoles.map((item) => <Entry key={item.title} item={item} />)}
          </div>
        </div>
        <div className="qualifications__employer">
          <h4>Paperline Trading · Kandy, Sri Lanka</h4>
          <div className="qualifications__content"><Entry item={paperlineRole} /></div>
        </div>
      </div>
    </div>
  </section>
);

export default Qualifications;
