import React from "react"
import { Helmet } from "react-helmet"

import "../styles/styles.scss"
import favicon from "../images/favicon.ico"

import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Professional Toronto-based Web/App Developer. "
      />
      <title lang="en">Jeremy Gervais | Web Developer</title>
      <link rel="canonical" href="https://jeremygervais.ca/" />
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />
    </Helmet>
    <Nav />
    <main>
      <Hero />
      <div className="relative">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  </div>
)

export default IndexPage
