import React from "react";
import "./publications.css";

const items = [
  {
    event: "5th International Research Symposium (EDIRS) · University of Colombo · Nov 2025",
    type: "Conference extended abstract · Published in proceedings · First author and presenter",
    title: "A Comprehensive Evaluation of a Formal Peer Tutoring and Support Centre in Sri Lankan Higher Education: An Impact Analysis",
    researchgate: "https://www.researchgate.net/publication/402165934_A_Comprehensive_Evaluation_of_a_Formal_Peer_Tutoring_and_Support_Centre_in_Sri_Lankan_Higher_Education_An_Impact_Analysis",
  },
  {
    event: "Research Conference on Scholarship of Teaching and Learning (RCSoTL) · Jun 2025",
    type: "Conference abstract · Published in proceedings · First author and presenter",
    title: "Impact of Peer Tutoring and Supporting Centre Implementation at Sri Lankan Universities – A Case Study",
    researchgate: "https://www.researchgate.net/publication/393335257_Impact_of_Peer_Tutoring_and_Supporting_Centre_Implementation_at_Sri_Lankan_Universities_-_A_Case_Study",
  },
  {
    event: "International Conference on Advances in Technology and Computing (ICATC) · Dec 2023",
    type: "Conference paper · Published in proceedings · First author and presenter",
    title: "Use of a ChatBot-Based Advising System for the Higher-Education System",
    researchgate: "https://www.researchgate.net/publication/393163806_Use_of_a_ChatBot-Based_Advising_System_for_the_Higher-Education-System",
  },
];

const Publications = () => (
  <section id="publications">
    <h5>Research and academic work</h5>
    <h2>Publications &amp; Academic Service</h2>
    <div className="container publications__container">
      <article className="publication academic-service">
        <small>Journal of Health Research and Society (JHRS) · Mindanao State University, General Santos, Philippines · Dec 2025</small>
        <h3>Peer Reviewer</h3>
        <p>Academic peer review</p>
        <p>Provided a structured review of a journal manuscript, evaluating its research contribution, methodology, reporting, and reproducibility.</p>
      </article>
      {items.map((item) => (
        <article className="publication" key={item.title}>
          <small>{item.event}</small>
          <h3>{item.title}</h3>
          <p>{item.type}</p>
          <div className="publication__cta">
            <a href={item.researchgate} className="btn btn-primary" target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Publications;
