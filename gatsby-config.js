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
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sass'     
    ],   
}