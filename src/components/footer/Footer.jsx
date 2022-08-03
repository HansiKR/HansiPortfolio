import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Hansi Radhakrishnan</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#qualifications">Qualifications</a></li>
        <li><a href="#interests">Interests</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#extra-work">Extra Curricular</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com/HasiSpeaks/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className="footer__socials-icon"></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/itzmehansi_/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="footer__socials-icon"></FontAwesomeIcon>
        </a>
        <a href="https://twitter.com/HansiSpeaks" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="footer__socials-icon"></FontAwesomeIcon>
        </a>
        
      </div>

      <div className="footer__copyright">
        <small>&copy; Hansi Radhakrishnan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer