import React from "react"
import "../css/portfolio.css"

const Portfolio = ({ children }) => (
  <div className="portfolio">
    <div className="content-grid">
      <h1 className="title">Portfolio</h1>
      <div className="cards">{children}</div>
    </div>
  </div>
)

export default Portfolio
