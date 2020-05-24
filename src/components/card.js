import React from "react"
import "../css/card.css"

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faJava, faAndroid } from "@fortawesome/free-brands-svg-icons"

const Card = () => (
  <div className="card">
    <div className="card-title">
      Orgmodoro
      <span className="card-tech">
        <FontAwesomeIcon className="tech" icon={faJava} />
        <FontAwesomeIcon className="tech" icon={faAndroid} />
      </span>
    </div>
    <div className="card-desc">
      A minimal Pomodoro timer app for android with many customizable options.
    </div>
    <div className="card-links">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/matoplus/orgmodoro"
        className="font-icons"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  </div>
)

export default Card
