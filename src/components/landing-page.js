import React from "react"

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const LandingPage = () => (
  <div>
    <h1>Ri Xin Yang</h1>
    <p>Full Stack Developer | Open-Source Enthusiast | Software Engineering</p>
    <div>
      <a target="_blank" href="https://github.com/matoplus">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a target="_blank" href="https:www.linkedin.com/in/matoplus">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a target="_blank" href="mailto:rixin.yang.2001@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  </div>
)

export default LandingPage
