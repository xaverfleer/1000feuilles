module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "imgs", path: `${__dirname}/src/assets/images/` },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
  ],
};
