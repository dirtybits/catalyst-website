const fs = require('fs')
const dotenv = require('dotenv').config({ path: '.env.gatsby' })

module.exports = {
  siteMetadata: {
    title: 'Catalyst Coin',
    siteUrl: process.env.GATSBY_ROOT_URL
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/docs`,
        name: 'docs'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/yaml`,
        name: 'yaml'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1120
            }
          },
          'gatsby-remark-external-links',
          'gatsby-remark-autolink-headers',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            }
          },
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Catalyst Coin',
        short_name: 'Catalyst Coin',
        start_url: '/',
        background_color: '#67cece',
        theme_color: '#38a9b4',
        display: 'standalone',
        lang: 'en',
        icons: [
          {
            src: '/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            density: '0.75'
          },
          {
            src: '/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            density: '1.0'
          },
          {
            src: '/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            density: '1.5'
          },
          {
            src: '/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            density: '2.0'
          },
          {
            src: '/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            density: '3.0'
          },
          {
            src: '/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            density: '4.0'
          }
        ]
      }
    },
    // 'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
    //   },
    // },
    'gatsby-plugin-remove-serviceworker'
  ]
}
