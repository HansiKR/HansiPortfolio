import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/img/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hansi Radhakrishnan</h1>
        <h5 className="text-light">Undergraduate at University of Kelaniya.</h5>
        <CTA />
        <HeaderSocials />
        {/* HERO IMAGE */}
        <div className="me">  
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
        
      </div>

    </header>
  )
}

export default Header