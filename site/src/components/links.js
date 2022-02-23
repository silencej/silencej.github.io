import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import {
  useSiteData,
} from '../hooks/siteData'

export default function Links() {
  const data = useSiteData()
  return (
    <ul className="list-group list-group-horizontal">
    <li className="list-group-item">
    <a
    href={`mailto:${data.site.siteMetadata.email}`}
    target="_blank"
    rel="noreferrer"
    alt="email link"
    >
    <FontAwesomeIcon icon={faEnvelope} />
    </a>
    </li>
    <li className="list-group-item">
    <a
    href={data.site.siteMetadata.github}
    target="_blank"
    rel="noreferrer"
    alt="github link"
    >
    <FontAwesomeIcon icon={faGithub} />
    </a>
    </li>
    <li className="list-group-item">
    <a
    href={data.site.siteMetadata.linkedin}
    target="_blank"
    rel="noreferrer"
    alt="linkedin link"
    >
    <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      { data.site.siteMetadata.twitter && <li className="list-group-item">
        <a
          href={data.site.siteMetadata.twitter}
          target="_blank"
          rel="noreferrer"
          alt="twitter link"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li> }
    </ul>
  )
}
