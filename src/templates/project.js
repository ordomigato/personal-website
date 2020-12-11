import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import Img from "gatsby-image"

import "./project.scss"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div class="project-page-wrapper">
      <Link to="/" className="back-link">
        « Back
      </Link>
      <h1>{post.frontmatter.title}</h1>
      <hr className="dot-hr" />
      <div className="project-meta">
        {post.frontmatter.website ? (
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={post.frontmatter.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.frontmatter.website}
            </a>
          </p>
        ) : null}
        {post.frontmatter.code ? (
          <p>
            <strong>Code:</strong>{" "}
            <a
              href={post.frontmatter.code}
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.frontmatter.code}
            </a>
          </p>
        ) : (
          ""
        )}
        {post.frontmatter.api ? (
          <p>
            <strong>3rd Party API:</strong> {post.frontmatter.api}
          </p>
        ) : (
          ""
        )}
        {post.frontmatter.tech ? (
          <ul className="tech-stack">
            {post.frontmatter.tech.map(item => (
              <li class="tech-stack-item shadow-md">{item}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div>
        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
      </div>
      <div
        className="project-article"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
}

export const postQuery = graphql`
  query MyQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        api
        code
        path
        tech
        title
        website
        featuredImage {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
