import React from "react"

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPortrait } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const LandingPage = () => (
  <div className="landing-page">
    <main>
      <div className="intro">Ri Xin Yang</div>
      <div className="tagline">
        Full Stack Dev | Open-Source Enthusiast | Software Engineer
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
          href="https:www.linkedin.com/in/matoplus"
          className="font-icons"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:rixin.yang.2001@gmail.com"
          className="font-icons"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/rixin_yang_resume.pdf"
          className="font-icons"
        >
          <FontAwesomeIcon icon={faPortrait} />
        </a>
      </div>
    </main>
  </div>
)

export default LandingPage
