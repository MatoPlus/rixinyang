import React from "react"
import { Helmet } from "react-helmet"
import Particles from "react-particles-js"
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJava,
  faAndroid,
  faUnity,
  faPython,
  faNode,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import LandingPage from "../components/landing-page"
import About from "../components/about"
import Projects from "../components/projects"
import Card from "../components/card"
import SEO from "../components/seo"

import "../css/theme.css"
import "../css/layout.css"
import "../css/landing-page.css"
import "../css/navbar.css"
import "../css/about.css"
import "../css/projects.css"
import "../css/card.css"
import "../css/footer.css"

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

const IndexPage = () => {
  let params = {
    particles: {
      number: {
        value: 35,
        density: {
          enable: false,
        },
      },
      color: {
        value: ["#b58900", "#859900"],
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 2,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
  }

  const titles = [
    "Discourse",
    "Covibes",
    "Orgmodoro",
    "Gyroll Maze",
    "Java Paint",
    "Project Witchcraft",
    "Sagacity",
  ]
  const iconsList = [
    [faNode],
    [faNode],
    [faAndroid],
    [faUnity],
    [faJava],
    [faPython],
    [faNode],
  ]
  const descriptions = [
    "A full-stack web app that offers a platform which allows users to create rooms, code, and chat together.",
    "A map-oriented web app that connects local anecdotes and thoughts about the new vaccines.",
    "A minimal Pomodoro Android app with customization options.",
    "A Gyroscope-controlled 3D marble tilt maze game using DFS maze generation.",
    "A full featured painting program written from scratch in Java.",
    "An arcade bullet-hell game powered by Python and Pygame.",
    "A web app which converts pictures of fragmented notes into structured notes.",
  ]
  const githubLinks = [
    "https://github.com/MatoPlus/discourse",
    "https://github.com/MatoPlus/antibodied",
    "https://github.com/MatoPlus/Orgmodoro",
    "https://github.com/MatoPlus/GyroscopeMaze",
    "https://github.com/MatoPlus/JavaPaint",
    "https://github.com/MatoPlus/ProjectWitchCraft",
    "",
  ]
  const devpostLinks = [
    "",
    "https://devpost.com/software/antibodied",
    "",
    "",
    "",
    "",
    "https://devpost.com/software/sagacity",
  ]
  const liveLinks = ["https://discourse.vercel.app/", "", "", "", "", "", ""]

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
        devpostLink={devpostLinks[i]}
        liveLink={liveLinks[i]}
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
        <Projects>{cards}</Projects>
      </Layout>
      <Particles id="particles-js" params={params} />
    </>
  )
}

export default IndexPage
