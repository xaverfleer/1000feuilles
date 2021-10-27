const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  developMiddleware: (app) => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: { "/.netlify/functions/": "" },
      })
    );
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "imgs", path: `${__dirname}/src/assets/images/` },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
