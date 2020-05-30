import React from "react"
import "../css/about.css"

const About = () => (
  <div id="about">
    <div className="content-grid">
      <h1 className="title">About</h1>
      <div className="info">
        <p>
          My name is <span className="highlight-2">Ri Xin</span>, or if you
          like, <span className="highlight-2">Rickson</span>. I study Software
          Engineering at the University of Waterloo and I love{" "}
          <span className="highlight">coding</span> and everything{" "}
          <span className="highlight">hackable</span>.
        </p>
        <p>
          I tweak and build websites, mobile apps, games, and utilities. I stick
          close with the software community and pace myself at which technology
          is evolving.
        </p>
        <p>
          React, Node.js, Python, and Java are some of the main tricks up my
          sleeve. I am also a big <span className="highlight-3">Emacs</span>{" "}
          nerd who's obsessed with productivity.
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
