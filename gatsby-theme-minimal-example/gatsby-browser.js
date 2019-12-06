const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require.resolve('./src/utils/linkResolver');
registerLinkResolver(linkResolver);
