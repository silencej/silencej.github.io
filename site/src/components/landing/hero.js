import React from "react"

import Image from "../image"
import Links from "../links"

import { StaticQuery, graphql } from "gatsby"

import { Link } from "react-scroll"

import {
  useSiteData,
} from '../../hooks/siteData'

export default function Hero() {

  const data = useSiteData()

  return (
    <section className="hero" id="hero">
      <div className="container h-100">
        <div className="row h-100 justify-content-around">
          {/* + Hero section: Left side */}
          <div className="col-lg-5 my-auto">
            <div className="hero-introduction">
              <h1>
                <span className="wave" role="img" aria-label="Hand wave">
                  👋
                </span>
              </h1>
              <h1>Hi. I'm {data.site.siteMetadata.author}</h1>
              <p>{data.site.siteMetadata.description}
              </p>
              <Link
                to="content"
                className="main-button btn btn-primary shadow-sm"
                smooth={true}
              >
                Get to know me
              </Link>
            </div>
          </div>
          {/* - Hero section: Left side */}

          {/* + Hero section: Right side */}
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <div className="icon">
                    <Image
                      fileName="photo.jpg"
                      style={{ width: "5rem", height: "5rem" }}
                      alt="Hero Icon"
                    />
                  </div>
                  <h3 className="card-title">@{data.site.siteMetadata.author}</h3>
                  <h4>
                    <span
                      className="mr-1"
                      role="img"
                      aria-label="pin"
                      alt="pin emoji"
                    >
                      📍
                    </span>
                    {data.site.siteMetadata.location}
                    <br />
                  </h4>
                  <Links />
                </div>
              </div>
            </div>
          </div>
          {/* - Hero section: Right side */}
        </div>
      </div>
    </section>
  )
}
