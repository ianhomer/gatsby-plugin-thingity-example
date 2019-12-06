module.exports = {
  siteMetadata: {
    title: `Collective`,
    description: `Collective Content`,
    author: `Ian`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-thingity`,
    {
      options: {
        name: `content`,
        path: `${__dirname}/content`
      },
      resolve: `gatsby-source-filesystem`,
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
  ]
}