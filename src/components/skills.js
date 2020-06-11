import React from 'react'

import './skills.scss'

import Uiux from '../assets/svg/uiux.svg'
import WebDev from '../assets/svg/webdev.svg'
import Design from '../assets/svg/design.svg'

const Skills = () => {
    return (
        <div>
            <section id="skills" className="skills-section">
                <div className="skills-container container mx-auto">
                    <article className="uiux_skills skill-wrapper">
                        <header>
                            <Uiux />
                            <h2 className="skill-title">UI / UX</h2>
                        </header>
                        <div className="skill-body">
                            <p className="skill-overview">
                                I aim to create modern, user-friendly, and brand cohesive designs.
                            </p>
                            <div className="skill-subsection">
                                <p className="skill-subsection_title">Toolset</p>
                                <ul className="skill-subsection_items">
                                    <li>Adobe Creative Suite</li>
                                    <li>Figma</li>
                                    <li>Pen & Paper</li>
                                </ul>
                            </div>
                            <div className="skill-subsection">
                                <p className="skill-subsection_title">CSS Frameworks & Technologies</p>
                                <ul className="skill-subsection_items">
                                    <p>Bootstrap | Tailwind | SASS</p>
                                </ul>
                            </div>
                            <div className="skill-subsection">
                                <p className="skill-subsection_title">Soft Skills</p>
                                <ul className="skill-subsection_items">
                                    <p>BEM</p>
                                </ul>
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
                                I'm commited to creating quality websites that provide solutions, increase conversion, and reduce costs.
                            </p>
                            <div className="skill-subsection">
                                <p className="skill-subsection_title">Languages</p>
                                <div className="skill-subsection_items">
                                    <p>HTML | CSS | JavaScript | PHP</p>
                                </div>
                            </div>
                            <div className="skill-subsection">
                                <p className="skill-subsection_title">Frameworks / Libraries</p>
                                <div className="skill-subsection_items">
                                    <p>React | Gatsby | Vue | Nuxt | Axios | jQuery | Rellax</p>
                                </div>
                            </div>
                            <div className="skill-subsection">
                                <p className="skill-subsection_title">Database Knowledge</p>
                                <div className="skill-subsection_items">
                                    <p>MySQL | MongoDB | Firebase | Contentful | WordPress | JSON | GraphQL</p>
                                </div>
                            </div>
                            <div className="skill-subsection">
                                <p className="skill-subsection_title">Development Tools</p>
                                <div className="skill-subsection_items">
                                    <p>Git & Github | Trello | NPM | Gulp</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="collateral-skills skill-wrapper">
                        <header>
                            <Design />
                            <h2 className="skill-title">Branding & Collateral</h2>
                        </header>
                        <div className="skill-body">
                            <p className="skill-overview">
                                Although not my primary focus, I sometimes dabble in more traditional design projects
                            </p>
                            <div className="skill-subsection">
                                <p className="skill-subsection_title">Print</p>
                                <ul className="skill-subsection_items">
                                    <li>Brochures</li>
                                    <li>Business Cards</li>
                                    <li>Banners</li>
                                    <li>Copywrite</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Skills