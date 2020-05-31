import React from "react"

import "../css/navbar.css"
import logo from "../images/ry-cyan.png"

const Navbar = () => (
  <nav>
    <div id="logo">
      <a href="#root">
        <img alt="RY" src={logo} />
      </a>
    </div>
    <div className="section-items">
      <div className="section-item">
        <a className="section-link" href="#about">
          About
        </a>
      </div>
      <div className="section-item">
        <a className="section-link" href="#portfolio">
          Portfolio
        </a>
      </div>
      <div className="section-item">
        <a
          className="section-link"
          target="_blank"
          rel="noopener noreferrer"
          href="/rixin_yang_resume.pdf"
        >
          Resume
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
