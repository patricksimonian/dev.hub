import React from 'react'
import PropTypes from 'prop-types'
import  {Box, Text, Flex} from 'rebass';


export const Card = ({title, description, resourceType, ...rest}) => (
  <Flex border="1px solid" borderColor={resourceType} flexDirection="column" {...rest} maxWidth={400} height={530}>
    <Flex flexBasis="20%" flexDirection="row" flexWrap="nowrap" justifyContent="space-between" p={3}>
      <Text as="h2" flexBasis="80%">{title}</Text>
      <Box as="span" p={3}>{resourceType}</Box>
    </Flex>
    <Box flexBasis="60%" p={3}>
      <Text as="p">{description}</Text>
    </Box>
    <Box flexBasis="60%" p={3}>
      <Box as="span" ml="auto" mr={2}>Learn more</Box>
    </Box>
  </Flex>
)

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  resourceType: PropTypes.string,
}

export default Card;