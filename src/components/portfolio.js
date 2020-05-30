import React from "react"
import PropTypes from "prop-types"
import "../css/portfolio.css"

const Portfolio = ({ children }) => (
  <div id="portfolio">
    <div className="content-grid">
      <h1 className="title">Portfolio</h1>
      <div className="cards">{children}</div>
    </div>
  </div>
)

Portfolio.propTypes = {
  children: PropTypes.node.isRequired
}

export default Portfolio
