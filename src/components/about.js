import React from "react"
import "../css/about.css"

const About = () => (
  <div className="about">
    <div className="content-grid">
      <h1 className="title">About</h1>
      <div className="info">
        <p>
          My name is <span className="highlight-2">Ri Xin</span>, or if you
          like, <span className="highlight-2">Rickson</span>. I study Software
          Engineering at the University of Waterloo and I love coding and
          everything hackable.
        </p>
        <p>
          I build and tweak build websites, mobile apps, games, and utilities. I
          stick close with the community and pace myself at which technology is
          evolving.
        </p>
        <p>
          React, Node.js, Python, and Java are some of the main tricks up my
          sleeve. I am also a big Emacs nerd who's obsessed with productivity.
        </p>
        <div className="kaomoji">{"（￣︶￣）↗"}</div>
      </div>
    </div>
  </div>
)

export default About
