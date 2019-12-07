module.exports = {
  siteMetadata: {
    title: `Thingity Example`,
    description: `Example use of thingity Gatsby plugin`,
    author: `Ian`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      options: {
        name: `content`,
        path: `${__dirname}/content`
      },
      resolve: `gatsby-source-filesystem`,
    },
    `gatsby-transformer-remark`
  ]
}