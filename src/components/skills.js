import React, { useRef, useEffect } from "react"
import gsap, { Back } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import "./skills.scss"

import Uiux from "../assets/svg/uiux.svg"
import WebDev from "../assets/svg/webdev.svg"
import Design from "../assets/svg/design.svg"

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  let skillsSectionRef = useRef(null)

  useEffect(() => {
    gsap.to(skillsSectionRef, {
      opacity: 1,
      duration: 0.7,
      scale: 1,
      y: -100,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: skillsSectionRef,
        end: "bottom 20%",
        start: "top 80%",
        toggleActions: "play play resume reverse",
      },
    })
  }, [])

  return (
    <div>
      <section id="skills" className="skills-section">
        <div
          className="skills-container container mx-auto"
          ref={el => {
            skillsSectionRef = el
          }}
        >
          <article className="uiux_skills skill-wrapper">
            <header>
              <Uiux />
              <h2 className="skill-title">Front-End Development</h2>
            </header>
            <div className="skill-body">
              <p className="skill-overview">
                I aim to create websites that are modern, eye-catching, and
                easy-to-use.
              </p>
              <hr className="skill-hr" />
              <div className="skill-subsection">
                <p className="skill-subsection_title">Frameworks / Libraries</p>
                <div className="skill-subsection_items">
                  <p>
                    React | Vue | Gatsby | Nuxt | Redux | Vuex | jQuery | Rellax
                    | Swiper
                  </p>
                </div>
              </div>
              <div className="skill-subsection">
                <p className="skill-subsection_title">
                  CSS Framework & Technologies
                </p>
                <div className="skill-subsection_items">
                  <p>
                    Bootstrap | Tailwind | Material UI | Font Awesome | SASS
                  </p>
                </div>
              </div>
              <div className="skill-subsection">
                <p className="skill-subsection_title">UI / UX Tools</p>
                <ul className="skill-subsection_items">
                  <li>Adobe Creative Suite ( PS | AI | XD )</li>
                  <li>Pen & Paper</li>
                </ul>
              </div>
              <div className="skill-subsection">
                <p className="skill-subsection_title">Methods</p>
                <div className="skill-subsection_items">
                  <p>BEM</p>
                </div>
              </div>
            </div>
          </article>
          <article className="web-dev_skills skill-wrapper">
            <header>
              <WebDev />
              <h2 className="skill-title">Website Development</h2>
            </header>
            <div className="skill-body">
              <p className="skill-overview">
                Client-friendly WYSIWYG or a powerful, fully custom solution; I
                can build it.
              </p>
              <hr className="skill-hr" />
              <div className="skill-subsection">
                <p className="skill-subsection_title">Languages</p>
                <div className="skill-subsection_items">
                  <p>HTML | CSS | JavaScript | JSON | GraphQL</p>
                </div>
              </div>
              <div className="skill-subsection">
                <p className="skill-subsection_title">Development Tools</p>
                <div className="skill-subsection_items">
                  <p>Git & Github | Trello | NPM | Gulp</p>
                </div>
              </div>
              <div className="skill-subsection">
                <p className="skill-subsection_title">Wordpress</p>
                <div className="skill-subsection_items">
                  <p>Elementor | ACF | Woocommerce</p>
                </div>
              </div>
            </div>
          </article>
          <article className="collateral-skills skill-wrapper">
            <header>
              <Design />
              <h2 className="skill-title">Back-End Development</h2>
            </header>
            <div className="skill-body">
              <p className="skill-overview">
                Developing/Integrating API's, building databases, deploying and
                all that jazz.
              </p>
              <hr className="skill-hr" />
              <div className="skill-subsection">
                <p className="skill-subsection_title">Frameworks / Libraries</p>
                <div className="skill-subsection_items">
                  <p>
                    Express | Express Validator | Axios | JWT | Moment | Dotenv
                  </p>
                </div>
              </div>
              <div className="skill-subsection">
                <p className="skill-subsection_title">Databases</p>
                <div className="skill-subsection_items">
                  <p>MySQL | Firebase | MongoDB</p>
                </div>
              </div>
              <div className="skill-subsection">
                <p className="skill-subsection_title">Hosts & Misc. Tech</p>
                <div className="skill-subsection_items">
                  <p>
                    Bluehost | Digital Ocean | Heroku | Netlify | Nginx |
                    Contentful
                  </p>
                </div>
              </div>
              <div className="skill-subsection">
                <p className="skill-subsection_title">Architectures</p>
                <div className="skill-subsection_items">
                  <p>REST</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Skills
