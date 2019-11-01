import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Box } from 'rebass';
import styled from '@emotion/styled';
import {border} from 'styled-system';
const Container = styled(Box)`
  ${border};
`;

const Header = ({ siteTitle }) => (
  <Container as="header"
    bg="fgMain"
    borderBottom="4px solid"
    borderBottomColor="fgAccent"
    py={4}
    px={5}
    mb={5}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
