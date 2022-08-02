import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Qualifications from './components/qualifications/Qualifications'
import Interests from './components/interests/Interests'
import Portfolio from './components/portfolio/Portfolio'
import Extrawork from './components/extrawork/Extrawork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About />
    <Qualifications />
    <Interests />
    <Portfolio />
    <Extrawork />
    <Contact />
    <Footer />
    </>
  )
}

export default App