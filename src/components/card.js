import React from "react"

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faDev } from "@fortawesome/free-brands-svg-icons"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"

const Card = props => (
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
      { props.devpostLink ?
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.devpostLink}
        className="font-icons"
      >
        <FontAwesomeIcon icon={faDev} />
      </a>
      : null
      }
      { props.liveLink ?
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.liveLink}
        className="font-icons"
      >
        <FontAwesomeIcon icon={faPlayCircle} />
      </a>
      : null
      }
    </div>
  </div>
)

export default Card
