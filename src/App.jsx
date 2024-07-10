import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Project from './components/Project'
import Marquee from './components/Marquee'


const App = () => {
  return (
  <div>
  <Hero/> 
  <Marquee/>
  <Project/>
  <Skills/>
  <Contact/>
  <Footer/>
  
</div>
  )
}

export default App