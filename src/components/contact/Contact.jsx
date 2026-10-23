import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faResearchgate } from "@fortawesome/free-brands-svg-icons";

const Contact = () => <section id="contact"><h5>Want to reach me?</h5><h2>Contact Me</h2><div className="container contact__container"><div className="contact__options">
  <article className="contact__option"><FontAwesomeIcon icon={faEnvelope} className="contact__option-icon" /><h4>Email</h4><h5>hansi.radhakrishnan@fau.de</h5><a href="mailto:hansi.radhakrishnan@fau.de">Send an email</a></article>
  <article className="contact__option"><FontAwesomeIcon icon={faPhone} className="contact__option-icon" /><h4>Phone</h4><h5>+49 1520 3866703</h5><a href="tel:+4915203866703">Call me</a></article>
  <article className="contact__option"><FontAwesomeIcon icon={faLinkedin} className="contact__option-icon" /><h4>LinkedIn</h4><h5>Hansi Radhakrishnan</h5><a href="https://www.linkedin.com/in/hansi-radhakrishnan/" target="_blank" rel="noreferrer">View LinkedIn</a></article>
  <article className="contact__option"><FontAwesomeIcon icon={faResearchgate} className="contact__option-icon" /><h4>ResearchGate</h4><h5>Research and publications</h5><a href="https://www.researchgate.net/profile/Hansi-Radhakrishnan" target="_blank" rel="noreferrer">View ResearchGate</a></article>
</div><p className="contact__note">For professional enquiries, email is the best way to reach me.</p></div></section>;
export default Contact;
