
module.exports = {
  siteMetadata: {
    title: 'Ali\'s Portfolio',
    description: 'Welcome to Ali Ahmed\'s portfolio',
    bioShort: 'Web & Mobile Applications Developer',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      }
    }
  ],
}
