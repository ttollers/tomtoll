import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const description = `It is a truth universally acknowledged that a techy man in possession of a privilege must be in want of a blog.`

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `TomToll`,
    siteTitleAlt: `TomToll`,
    siteHeadline: description,
    siteUrl: `https://tomtoll.com`,
    siteDescription: description,
    siteLanguage: `en`,
    author: `@tomtollinton`,
    image: `/me_banner.jpg`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `gatsby-plugin-twitter`,
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "tomtoll",
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        blogPath: '/posts',
        initialColorModeName: `dark`,
        navigation: [{
          title: 'Posts',
          slug: '/posts'
        },
        {
          title: 'Why',
          slug: '/why'
        },
        {
          title: 'Me',
          slug: '/me'
        },
        {
          title: 'Writing',
          slug: '/writing'
        },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/tomtollinton`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: description,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/ai_me_looking_like_vitalik.jpeg`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/ai_me_looking_like_vitalik.jpeg`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allPost },
            }: {
              query: { allPost: IAllPost; site: { siteMetadata: ISiteMetadata } }
            }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `{
  allPost(sort: {date: DESC}) {
    nodes {
      title
      date(formatString: "MMMM D, YYYY")
      excerpt
      slug
    }
  }
}`,
            output: `rss.xml`,
            title: `TomToll - RSS Feed`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config

interface IPostTag {
  name: string
  slug: string
}

interface IPost {
  slug: string
  title: string
  defer: boolean
  date: string
  excerpt: string
  contentFilePath: string
  html: string
  timeToRead: number
  wordCount: number
  tags: Array<IPostTag>
  banner: any
  description: string
  canonicalUrl: string
}

interface IAllPost {
  nodes: Array<IPost>
}

interface ISiteMetadata {
  siteTitle: string
  siteTitleAlt: string
  siteHeadline: string
  siteUrl: string
  siteDescription: string
  siteImage: string
  author: string
}
