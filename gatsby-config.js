module.exports = {
    siteMetadata: {
      title: "Shekhar Nain",
    },
    plugins: [
      "gatsby-plugin-typescript",
      {
        resolve: "gatsby-plugin-typography",
        options: {
          pathToConfigModule: "src/utils/typography.ts",
        },
      }
    ],
}