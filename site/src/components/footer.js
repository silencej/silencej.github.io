import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"

import { Link } from "react-scroll"

import {
  useSiteData,
} from '../hooks/siteData'

export default function Index() {
  const data = useSiteData()
  return (
    <>
      <footer>
        <div className="container py-4">
          <div className="row justify-content-center mt-2">
            <ul className="list-style-none">
              <li className="list-inline-item ml-2">
                <Link
                  to="header"
                  className="link"
                  smooth={true}
                  role="button"
                  aria-label="To the top"
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                </Link>
              </li>
              <li className="list-inline-item mr-4" alt="site title">
    &copy; {new Date().getFullYear()}.{" "}
    {data.site.siteMetadata.title}.
              </li>
              <li className="list-inline-item mr-4">
                <a
                  href={`mailto:${data.site.siteMetadata.email}`}
                  target="_blank"
                  rel="noreferrer"
                  alt="email link"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li className="list-inline-item mr-4">
                <a
                  href={data.site.siteMetadata.github}
                  target="_blank"
                  rel="noreferrer"
                  alt="github link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="list-inline-item mr-4">
                <a
                  href={data.site.siteMetadata.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  alt="linkedin link"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              { data.site.siteMetadata.twitter && <li className="list-inline-item mr-4">
                <a
                  href={data.site.siteMetadata.twitter}
                  target="_blank"
                  rel="noreferrer"
                  alt="twitter link"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li> }
              { data.site.siteMetadata.stackOverflow && <li className="list-inline-item mr-4">
                <a
                  href={data.site.siteMetadata.stackOverflow}
                  target="_blank"
                  rel="noreferrer"
                  alt="stackOverflow link"
                >
                  <FontAwesomeIcon icon={faStackOverflow} />
                </a>
              </li> }
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
