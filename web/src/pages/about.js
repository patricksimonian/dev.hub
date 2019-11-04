import React from 'react';
import {graphql} from 'gatsby';

export const About = ({data}) => (
  <div
  className="blog-post-content"
  dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
/>
)

export const AboutQuery = graphql`
  query AboutPage($file: String) {
    file(base: {eq: $file}) {
      childMarkdownRemark {
        html
      }         
    }
  }
`;

export default About;