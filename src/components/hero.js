import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Parallax from "react-rellax"

import Img from "gatsby-image"

import "./hero.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text container w-100">
          <h1 className="introduction">
            <span>Hi,</span>
            <br />
            <span className="my-name">I'm Jeremy</span>
            <br />
            <span>A Full-Stack Developer</span>
          </h1>
          <p className="intro-caption">Front-end | Back-end | Wordpress</p>
        </div>
        <div className="hero-card">
          <div className="hero-image">
            <Parallax speed={-10}>
              <div className="hero-image__overlay"></div>
              <Img fluid={data.file.childImageSharp.fluid} />
            </Parallax>
          </div>
          <p className="hero-card__caption">Want to work together?</p>
          <div className="hero-ctas container w-100 mx-auto">
            <a href="#projects" className="hero-cta-2 btn ripple">
              See Work
            </a>
            <a href="#contact-form" className="hero-cta-1 btn ripple">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
