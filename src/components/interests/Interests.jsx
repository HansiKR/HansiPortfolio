import React from "react";
import "./interests.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const groups = [
  { title: "Business Analysis", items: ["Requirements elicitation and functional specifications", "User stories, acceptance criteria, and UAT", "AS-IS / TO-BE, gap, and impact analysis", "Stakeholder workshops and end-user training"] },
  { title: "Product & Process", items: ["BPMN and UML process modelling", "Wireframing and prototyping", "Agile / Scrum, roadmaps, and backlogs", "Proofs of concept and change management"] },
  { title: "Research & Data", items: ["Mixed-methods research and survey design", "Qualitative interviews and thematic analysis", "Literature synthesis and user studies", "SPSS, Excel, and SQL"] },
  { title: "Tools & Languages", items: ["Jira, Notion, Slack, Figma, Lucidchart, Draw.io", "Mendeley · REST/SOAP API documentation", "Sinhala (native) · English (C1)", "German (A1) · Hindi and Korean (conversational)"] },
];
const Interests = () => <section id="interests"><h5>How I work</h5><h2>Core Competencies</h2><div className="container interests__container">{groups.map((group) => <article className="interest" key={group.title}><div className="interest__head"><h3>{group.title}</h3></div><ul className="interests__list">{group.items.map((item) => <li key={item}><FontAwesomeIcon icon={faCheck} className="interests__list-icon" /><p>{item}</p></li>)}</ul></article>)}</div></section>;
export default Interests;
