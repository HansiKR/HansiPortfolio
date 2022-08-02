import React from 'react'
import './nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faMessage,
  faLaptopCode,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'; //react hook

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></a>
      <a href="#qualifications" onClick={()=>setActiveNav('#qualifications')} className={activeNav === '#qualifications' ? 'active' : ''}><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></a>
      <a href="#interests" onClick={()=>setActiveNav('#interests')} className={activeNav === '#interests' ? 'active' : ''}><FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></a>
    </nav>
  )
}

export default Nav