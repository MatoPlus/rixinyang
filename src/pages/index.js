import React from "react"

import Layout from "../components/layout"
import LandingPage from "../components/landing-page"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingPage />
  </Layout>
)

export default IndexPage
