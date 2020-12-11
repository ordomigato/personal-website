import React from "react"

import "./nav.scss"

import HomeIcon from "../assets/svg/home.svg"
import SkillsIcon from "../assets/svg/skills.svg"
import ProjectIcon from "../assets/svg/projects.svg"
import ContactIcon from "../assets/svg/contact.svg"

const Header = () => {
  return (
    <nav className="navbar">
      {/* Mobile Nav */}
      <div className="nav-mobile-container">
        <input type="checkbox" id="toggle" />
        <div className="hamburger-container">
          <label htmlFor="toggle" className="hamburger" id="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </label>
        </div>
        <ul className="nav-items noselect">
          <li className="nav-item home-link">
            <a href="/">Home</a>
            <HomeIcon />
          </li>
          <li className="nav-item skills-link">
            <a href="#skills">
              Skills
              <SkillsIcon />
            </a>
          </li>
          <li className="nav-item projects-link">
            <a href="#projects">
              Projects
              <ProjectIcon />
            </a>
          </li>
          <li className="nav-item contact-link">
            <a href="#contact-form">
              Contact
              <ContactIcon />
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Nav */}
      <div className="nav-desktop-container">
        <ul className="nav-items noselect">
          <li className="nav-item home-link">
            <a href="/">Home</a>
            <HomeIcon />
          </li>
          <li className="nav-item skills-link">
            <a href="#skills">
              Skills
              <SkillsIcon />
            </a>
          </li>
          <li className="nav-item projects-link">
            <a href="#projects">
              Projects
              <ProjectIcon />
            </a>
          </li>
          <li className="nav-item contact-link">
            <a href="#contact-form">
              Contact
              <ContactIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
