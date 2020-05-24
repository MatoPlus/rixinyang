import React from "react"

import "../css/footer.css"

const Footer = () => (
  <footer>
    <div className="content-grid">
      <div>
        Made with <span className="highlight">React</span> and{" "}
        <span className="highlight">Gatsby</span>{" "}
        <span role="img" aria-label="heart">
          ❤
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
