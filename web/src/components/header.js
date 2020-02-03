import { Link } from "gatsby";
import validUrl from 'valid-url';
import PropTypes from "prop-types";
import React from "react";
import { Box, Flex, Image, Text } from 'rebass';
import styled from '@emotion/styled';
import {border, position} from 'styled-system';

// logos 
import { BREAKPOINTS } from "../gatsby-plugin-theme-ui";

const Container = styled(Box)`
  ${position};
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


const Header = ({ siteTitle, logo: {big, small} }) => {
  let bigLogo = '';
  let smallLogo = '';

  if(validUrl.isWebUri(big)) {
    bigLogo = big;
  } else {
    bigLogo = require(`../images/${big}`);
  }
  if(small) {
    if(validUrl.isWebUri(small)) {
      smallLogo = small;
    } else {
      smallLogo = require(`../images/${small}`)
    }
  }

  return (
    <Container as="header"
      bg="fgMain"
      borderBottom="3px solid"
      borderBottomColor="fgAccent"
      position="fixed"
      data-testid="layout.header"
      width={1}
      px={[7, 7, 10]}
      py={3}
      height={75}
      top={0}
    >
      <Flex
      alignItems="center"
      >
         
         {
           small && big && (
              <React.Fragment>
                <LogoBig sx={{maxHeight: '50px', width: [ '165px', '150px', '165px' ]}} src={bigLogo} alt={siteTitle} mb={1} />
                <LogoSmall sx={{maxHeight: '50px', width: [ '75px' ]}} src={smallLogo} alt={siteTitle} />
              </React.Fragment>
            )
          }
        { big && !small && <Image sx={{maxHeight: '50px', width: ['165px', '150px', '165px']}} src={bigLogo} alt={siteTitle} /> }
        <Text as="h1" ml={4} mb={0} sx={{fontSize: [6, 6, 8]}}>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.shape({big: PropTypes.string, small: PropTypes.string})
}

Header.defaultProps = {
  siteTitle: ``,
}

export default React.memo(Header)
