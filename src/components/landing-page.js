import React from "react"

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const LandingPage = () => (
  <div className="landing-page">
    <main>
      <div className="intro">
        <span className="firstName">Rickson</span>{" "}
        <span className="lastName">Yang</span>
      </div>
      <div className="tagline">
        <span className="role">Full Stack</span> |{" "}
        <span className="role">Infra</span> |{" "}
        <span className="role">Tinkerer</span>
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/matoplus"
          className="font-icons"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/matoplus"
          className="font-icons"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:hello@rixinyang.me"
          className="font-icons"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </main>
  </div>
)

export default LandingPage
