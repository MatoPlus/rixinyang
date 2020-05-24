import React from "react"
import "../css/card.css"

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Card = props => (
  // Required props:
  // - title
  // - tech icons
  // - desc
  // - github link

  <div className="card">
    <div className="card-title">
      {props.title}
      <span className="card-tech">{props.tech}</span>
    </div>
    <div className="card-desc">{props.description}</div>
    <div className="card-links">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.githubLink}
        className="font-icons"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  </div>
)

export default Card
