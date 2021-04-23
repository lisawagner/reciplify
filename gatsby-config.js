require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "reciplify",
    description: "recipe site from the apocalypse",
    author: "@privatedata",
    person: { name: "joan", age: 32 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "joan", age: 32 },
      { name: "jules", age: 56 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2wzke1v8gln3`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Architects Daughter",
              variants: ["400"],
            },
            {
              family: "Shadows Into Light",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
  ],
}
