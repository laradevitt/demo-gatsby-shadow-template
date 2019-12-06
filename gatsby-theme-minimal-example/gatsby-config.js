module.exports = options => {
  return {
    plugins: [
      {
        resolve: 'gatsby-source-prismic-graphql',
        options: {
          repositoryName: 'longwindedtest',
          pages: [
            {
              type: 'Page',
              match: '/page/:uid',
              path: '/preview',
              component: require.resolve('./src/templates/page.js'),
            },
            {
              type: 'Article',
              match: '/article/:uid',
              path: '/preview',
              component: require.resolve('./src/templates/article.js'),
            },
            {
              type: 'Section',
              match: '/section/:uid',
              path: '/preview',
              component: require.resolve('./src/templates/section.js'),
            },
          ],
        },
      },
    ],
  };
};
