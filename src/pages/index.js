import React from "react"
import ParticlesBg from "particles-bg"

import Layout from "../components/layout"
import LandingPage from "../components/landing-page"
import SEO from "../components/seo"

const IndexPage = () => {
  let config = {
    num: [4, 7],
    rps: 0.5,
    radius: [5, 12],
    life: [1.5, 3],
    v: [0.1, 1],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: "all",
    color: ["#859900", "#2aa198", "#b58900"],
    cross: "dead",
    random: 15
  }

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath()
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        )
        ctx.fillStyle = particle.color
        ctx.fill()
        ctx.closePath()
      }
    })
  }

  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <LandingPage />
      </Layout>
      <ParticlesBg type="custom" config={config} bg={true} />
    </div>
  )
}

export default IndexPage
