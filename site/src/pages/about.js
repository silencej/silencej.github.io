import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"

import {
  useSiteData,
} from '../hooks/siteData'

const AboutPage = () => {
  const data = useSiteData()
  return (
    <Layout>
      <SEO title="About" />
      <section className="about">
        <div className="container">
          {/* + Title */}
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-7 col-sm-12 my-auto headline">
              <h1>About Me</h1>
            </div>
          </div>
          {/* - Title */}

          <div className="row my-4 justify-content-center">
            {/* + Card */}
            <div className="col-lg-7 my-auto">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="card-title">
                    <h2>
                      Hi there!
                      <span role="img" aria-label="Happy face">
                        😊
                      </span>
                    </h2>
                    <h3>an introduction</h3>
                  </div>

                  <div className="card-text">
                  </div>
                </div>
              </div>
            </div>
            {/* - Card */}

            {/* + Card */}
            <div className="col-lg-7 my-auto">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="card-title">
                    <h2>More about me</h2>
                  </div>

                  <div className="card-text">
                    {data.site.siteMetadata.description}
                  </div>
                </div>
              </div>
            </div>
            {/* - Card */}
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default AboutPage
