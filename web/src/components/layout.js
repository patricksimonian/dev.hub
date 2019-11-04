/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Box} from 'rebass';
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        fields {
          title
          bannerLogo
          bannerLogoSmall
        }
      }
    }
  `)
  const {site: {fields: {title, bannerLogo, bannerLogoSmall}}} = data;
  return (
    <>
      <Header siteTitle={title} logo={{big: bannerLogo, small: bannerLogoSmall}}/>
      <Box
        sx={{
          mt: [40],
          mx: 'auto'
        }}
        style={{
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
