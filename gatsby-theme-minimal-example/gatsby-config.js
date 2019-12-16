module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/markdown-pages`,
        },
      },
      `gatsby-transformer-remark`,
    ],
  };
};
