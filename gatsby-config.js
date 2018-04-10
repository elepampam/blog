module.exports = {
    siteMetadata: {
        title: 'imdbsd.lab',
        owner: {
            name: "I Made Budi Surya Darma",
            social: {
                twitter: 'Budisuryadarma',
                facebook: 'surya.blinkers',
                github: 'elepampam'
            }
        }
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
          },
        'gatsby-plugin-styled-components',
        `gatsby-transformer-remark`,
        'gatsby-plugin-sass'     
    ],   
}