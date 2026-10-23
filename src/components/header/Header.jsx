import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/img/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => (
  <header id="home">
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Hansi Radhakrishnan</h1>
      <h5 className="text-light">M.Sc. International Information Systems student at FAU</h5>
      <CTA />
      <HeaderSocials />
      <div className="me"><img src={ME} alt="Hansi Radhakrishnan" /></div>
      <a href="#about" className="scroll__down">Scroll Down</a>
    </div>
  </header>
)

export default Header
