/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.onCreateNode = ({ node, actions, getNode, getNodes }) => {
  const {createParentChildLink, createNodeField} = actions;
  if(node.internal.type === 'ConfigJson') {
    const parentNode = getNode('Site');
    const {siteMetadata} = parentNode;
    // create node fields for all config items merge siteMetadata with nodes from configJson
    // config json has many fields which are not related to config directly that need to 'filtered out',
    // gatsby default fields like internal,children, parent etc as well as some fields merged from 
    // the theme config json file
    const {colors, children, parent, internal, objects, ...config} = node;
    const globalConfig = {...siteMetadata, ...config};
    Object.keys(globalConfig).forEach(name => {
      const value = globalConfig[name];
      createNodeField({node: parentNode, name, value});
    });
    createParentChildLink({parent: parentNode, child: node});
  }
}