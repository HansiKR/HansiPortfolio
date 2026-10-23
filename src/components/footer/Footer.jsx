import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Hansi Radhakrishnan</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#qualifications">My Journey</a></li>
        <li><a href="#interests">Core Competencies</a></li>
        <li><a href="#portfolio">My Portfolio</a></li>
        <li><a href="#publications">Publications &amp; Academic Service</a></li>
        <li><a href="#extra-work">My Extra Curriculars</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/hansi-radhakrishnan/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="footer__socials-icon"></FontAwesomeIcon>
        </a>
        <a href="https://github.com/HansiKR" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="footer__socials-icon"></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/itzmehansi_/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="footer__socials-icon"></FontAwesomeIcon>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hansi Radhakrishnan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer