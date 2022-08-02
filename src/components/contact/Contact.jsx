import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  // Connecting to emailjs
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ii0irw4', 'template_1y2p4bb', form.current, 'L0JExnEiWJQb_i4_x')
    
    // Reset the form once email is sent
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Want to reach me?</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* Left Side - Contact Options */}
        <div className="contact__options">
          <article className="contact__option">
            <FontAwesomeIcon icon={faEnvelope} className="contact__option-icon"></FontAwesomeIcon>
            <h4>Email</h4>
            <h5>hansiradhakrishnan@gmail.com</h5>
            <a href="mailto:hansiradhakrishnan@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <FontAwesomeIcon icon={faWhatsapp} className="contact__option-icon"></FontAwesomeIcon>
            <h4>WhatsApp</h4>
            <h5>+94 77 129 2711</h5>
            <a
              href="https://api.whatsapp.com/send?phone=94771292711"
              target="_blank"
            >
              Send a WhatsApp Message
            </a>
          </article>
          <article className="contact__option">
            <FontAwesomeIcon icon={faFacebookMessenger} className="contact__option-icon"></FontAwesomeIcon>
            <h4>Messenger</h4>
            <h5>Hansi Radhakrishnan</h5>
            <a href="https://m.me/HasiSpeaks" target="_blank">
              Send a Facebook Message
            </a>
          </article>
        </div>

        {/* Right Side - Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
