import { Link, StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Box, Flex, Image, Text } from 'rebass';
import styled from '@emotion/styled';
import {border} from 'styled-system';

// logos 
import logo from '../images/logo.svg';
import logoSmall from '../images/logo-mobile.svg';
import { BREAKPOINTS } from "../gatsby-plugin-theme-ui";

const Container = styled(Box)`
  ${border};
`;

const LogoBig = styled(Image)`
  display: none;
  ${BREAKPOINTS.sm} {
    display: block;
  }
`;

const LogoSmall = styled(Image)`
  display: block;
  ${BREAKPOINTS.sm} {
    display: none;
  }
`;


const Header = ({ siteTitle, logo: {big, small} }) => (
  <Container as="header"
    bg="fgMain"
    borderBottom="4px solid"
    borderBottomColor="fgAccent"
    px={[12, 7, 10]}
    py={3}
  >
    <Flex
    alignItems="center"
    >
       
       {
         small && big && (
            <React.Fragment>
              <LogoBig sx={{width: [ '175px', '125px' ]}} src={logo} alt={siteTitle} mb={1} />
              <LogoSmall sx={{width: [ '75px' ]}} src={logoSmall} alt={siteTitle} />
            </React.Fragment>
          )
        }
      { big && !small && <Image sx={{width: ['175px', '75px', '125px', '175px']}} src={logo} alt={siteTitle} /> }
      <Text as="h1" ml={4} mb={0}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Text>
    </Flex>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.shape({big: PropTypes.string, small: PropTypes.string})
}

Header.defaultProps = {
  siteTitle: ``,
}

export default React.memo(Header)
