import React from "react"

const About = () => (
  <div id="about">
    <div className="content-grid">
      <h1 className="title">
        <span>About</span>
      </h1>
      <div className="info">
        <p>
          My name is <span className="highlight-2">Rickson</span> (<span className="highlight">Ri Xin</span>). I study Software
          Engineering at the University of Waterloo and I love{" "}
          <span className="highlight">tinkering</span> and everything{" "}
          <span className="highlight">hackable</span>.
        </p>
        <p>
          I enjoy building and tinkering full-stack applications,
          infrastructures, and dev-utilities. I like to keep up-to-date with the
          community by going to hackathons, and trying out new tech.
        </p>
        <p>
          Some of the main <span className="highlight-3">technologies</span> I
          use are Node.js/Express, GraphQL, React, Typescript, Java, and
          Python. I am also a big <span className="highlight-3">Emacs</span>{" "}
          nerd who loves experimenting with workflow setups.
        </p>
        <div className="kaomoji highlight-3">
          {"（￣︶￣）↗"}
          <span className="code">(M-x butterfly)</span>
        </div>
      </div>
    </div>
  </div>
)

export default About
