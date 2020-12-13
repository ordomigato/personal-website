import React from "react"
import resume from "../files/Jeremy Gervais - Resume.pdf"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer_section">
      <section className="social-media flex flex-col align-center text-center">
        <h2>Social Platforms</h2>
        <a
          href="https://www.linkedin.com/in/jeremy-gervais/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        <a
          href="https://www.instagram.com/fakiescript/"
          target="_blank"
          rel="noreferrer"
        >
          instagram
        </a>
        <a
          href="https://www.behance.net/fakiescript"
          target="_blank"
          rel="noreferrer"
        >
          behance
        </a>
        <a
          href="https://github.com/ordomigato"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
      </section>
      <p>
        <a href={resume}>Download Resume Here</a>
      </p>
      <p>Website Designed by Me</p>
      <p>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/freepik"
          target="_blank"
          rel="noreferrer"
          title="Freepik"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          target="_blank"
          rel="noreferrer"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </p>
    </footer>
  )
}

export default Footer
