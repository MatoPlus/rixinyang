import React from "react"

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
        <a className="section-link" href="#projects">
          Projects
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
