/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const {INVALID_BANNER_LOGO, VALIDATING_CONFIGURATIONS, CONFIGURATIONS_VALID, MERGING_CONFIGURATIONS, logVerbose} = require('./gatsby/prompter');
exports.onCreateNode = async ({ node, actions, getNode }) => {
  const {createParentChildLink, createNodeField} = actions;
  if(node.internal.type === 'ConfigJson') {
    logVerbose(MERGING_CONFIGURATIONS);
    const parentNode = getNode('Site');
    const {siteMetadata} = parentNode;
    // create node fields for all config items merge siteMetadata with nodes from configJson
    // config json has many fields which are not related to config directly that need to 'filtered out',
    // gatsby default fields like internal,children, parent etc as well as some fields merged from 
    // the theme config json file
    const {colors, children, parent, internal, objects, ...config} = node;
    const globalConfig = {...siteMetadata, ...config};
    const promises = Object.keys(globalConfig).map(async name => {
      const value = globalConfig[name];
      return createNodeField({node: parentNode, name, value});
    });
    await Promise.all(promises);
    createParentChildLink({parent: parentNode, child: node});
  }
}

exports.onCreatePage = ({ page, actions, getNode }) => {
  const { createPage, deletePage } = actions
  const node = getNode('Site');


  if(page.path === '/about/') {
    deletePage(page)
  
    createPage({
      ...page,
      context: {
        file: node.fields.about
      }
    })
  } 
}


exports.onPostBootstrap = ({getNode}) => {
  // run configuration validations here
  const node = getNode('Site')
  // validate image paths
  const relativePathCheck = /\.\.?\//g;
  const imageExtensionCheck = /(jpeg|gif|png|jpg|svg)$/;

  logVerbose(VALIDATING_CONFIGURATIONS);

  if(relativePathCheck.test(node.fields.bannerLogo) || relativePathCheck.test(node.fields.bannerLogoSmall) ||
  !imageExtensionCheck.test(node.fields.bannerLogo) || !imageExtensionCheck.test(node.fields.bannerLogoSmall)) {
    throw Error(INVALID_BANNER_LOGO)
  }
  logVerbose(CONFIGURATIONS_VALID);
}