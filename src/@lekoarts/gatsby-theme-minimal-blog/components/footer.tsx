/** @jsx jsx */
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import { jsx, Flex } from "theme-ui"

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
        flexDirection: [`row`, `row`, `row`],
        variant: `dividers.top`,
      }}
    >
        <div>
          &copy; {new Date().getFullYear()} by {siteTitle}.
        </div>
        <div>
          <a href="https://twitter.com/tomtollinton?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Twitter</a>
          {` · `}
          <a href="https://substack.com/@tomtollinton">Substack</a>
        </div>
    </footer>
  )
}

export default Footer
