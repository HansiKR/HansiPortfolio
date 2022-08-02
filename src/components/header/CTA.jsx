import React from 'react'
import HansiRadhakrishnanCV from '../../assets/pdf/HansiRadhakrishnanCV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={HansiRadhakrishnanCV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
  ) 
}

export default CTA

