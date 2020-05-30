import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../css/navbar.css"
import logo from "../images/ry-cyan.png"

const Navbar = () => (
  <nav>
    <div id="logo">
      <Link to="/">
        <img src={logo} />
      </Link>
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
    </div>
  </nav>
)

export default Navbar
