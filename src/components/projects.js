import React from "react"
import PropTypes from "prop-types"

const Projects = ({ children }) => (
  <div id="projects">
    <div className="content-grid">
      <h1 className="title">Projects</h1>
      <div className="cards">{children}</div>
    </div>
  </div>
)

Projects.propTypes = {
  children: PropTypes.node.isRequired
}

export default Projects
