
import React from "react"

import { useStaticQuery, graphql } from "gatsby"

export function useSiteData() {

  const data = useStaticQuery(graphql`
    query headerLandingTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          location
          email
          github
          linkedin
        }
      }
    }
  `)

  return data
}

