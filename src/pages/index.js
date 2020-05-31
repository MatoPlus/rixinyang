import React from "react"
import { Helmet } from "react-helmet"
import Particles from "react-particles-js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJava,
  faAndroid,
  faUnity,
  faPython,
  faNode
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import LandingPage from "../components/landing-page"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Card from "../components/card"
import SEO from "../components/seo"

import "../css/theme.css"
import "../css/layout.css"
import "../css/landing-page.css"
import "../css/navbar.css"
import "../css/about.css"
import "../css/portfolio.css"
import "../css/card.css"
import "../css/footer.css"

const IndexPage = () => {
  let params = {
    particles: {
      number: {
        value: 35,
        density: {
          enable: false
        }
      },
      color: {
        value: ["#b58900", "#859900"]
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 2,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  }

  const titles = [
    "Orgmodoro",
    "Gyroll",
    "Java Paint",
    "Project Witchcraft",
    "Super Breakout",
    "Sagacity"
  ]
  const iconsList = [
    [faAndroid],
    [faUnity],
    [faJava],
    [faPython],
    [faPython],
    [faNode]
  ]
  const descriptions = [
    "A minimal Pomodoro timer app for android with customization options.",
    "A Gyroscope-controlled 3D marble tilt maze game.",
    "A full featured painting program written in Java.",
    "A high-concentration bullet-hell game powered by Python and Pygame.",
    'A recreation of the video-game "breakout" made in Python and Pygame.',
    "A web app that converts pictures of fragmented notes into structured notes."
  ]
  const githubLinks = [
    "https://github.com/MatoPlus/Orgmodoro",
    "https://github.com/MatoPlus/GyroscopeMaze",
    "https://github.com/MatoPlus/JavaPaint",
    "https://github.com/MatoPlus/ProjectWitchCraft",
    "https://github.com/MatoPlus/Super-Breakout",
    "https://github.com/nshdesai/Sagacity"
  ]

  const cards = []
  const cardsTech = []

  for (let i in iconsList) {
    cardsTech.push([])
    iconsList[i].map(icon =>
      cardsTech[i].push(<FontAwesomeIcon className="tech" icon={icon} />)
    )
  }

  for (let i = 0; i < titles.length; ++i) {
    cards.push(
      <Card
        key={i}
        title={titles[i]}
        tech={cardsTech[i]}
        description={descriptions[i]}
        githubLink={githubLinks[i]}
      />
    )
  }

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Layout>
        <SEO title="Home" />
        <LandingPage />
        <About />
        <Portfolio>{cards}</Portfolio>
      </Layout>
      <div className="particles">
        <Particles params={params} />
      </div>
    </>
  )
}

export default IndexPage
