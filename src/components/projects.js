import React from 'react'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './projects.scss'

const Projects = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            website
                            code
                            featuredImage {
                                childImageSharp {
                                    fluid(maxWidth: 800) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <section id="projects" className="recent-work_section">
            <h2>My Recent Work</h2>
            <p>See either the live project or code repository</p>
            <div className="projects container">

                {data.allMarkdownRemark.edges.map( edge => {
                    return (
                        <article className="project" key={edge.node.frontmatter.title}>
                            <div className="overlay">
                                <a href={edge.node.frontmatter.website} target="_blank" rel="noopener noreferrer">View Site</a>
                                <a href={edge.node.frontmatter.code} target="_blank" rel="noopener noreferrer">&lt; See Code &gt;</a>
                            </div>
                            <Img
                                fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
                                style={{position: "absolute"}}
                            />
                            <header>
                                <h3 className="project-title">{edge.node.frontmatter.title}</h3>
                            </header>
                        </article>
                    )
                })}

            </div>
        </section>
    )
}

export default Projects