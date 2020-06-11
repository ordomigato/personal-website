import React from "react"

import '../styles/styles.scss'

import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'


const IndexPage = () => (
  <div>
    <Nav />
    <main>
      <Hero />
      <div className="relative">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  </div>
)

export default IndexPage
