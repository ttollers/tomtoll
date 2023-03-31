/** @jsx jsx */
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import { jsx, Link } from "theme-ui"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}.
      </div>
      <div>
        <a href="https://twitter.com/tomtoll_eth?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @tomtoll_eth</a>
      </div>
    </footer>
  )
}

export default Footer
