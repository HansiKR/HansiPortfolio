import React, { useState } from 'react'
import './nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faMessage, faLaptopCode, faGraduationCap, faBookOpen } from "@fortawesome/free-solid-svg-icons"

const links = [['#home', faHome, 'Home'], ['#about', faUser, 'About'], ['#qualifications', faGraduationCap, 'Journey'], ['#interests', faLaptopCode, 'Skills'], ['#publications', faBookOpen, 'Publications'], ['#contact', faMessage, 'Contact']];
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return <nav aria-label="Main navigation">{links.map(([href, icon, label]) => <a key={href} href={href} aria-label={label} title={label} onClick={() => setActiveNav(href)} className={activeNav === href ? 'active' : ''}><FontAwesomeIcon icon={icon} /></a>)}</nav>
}
export default Nav
