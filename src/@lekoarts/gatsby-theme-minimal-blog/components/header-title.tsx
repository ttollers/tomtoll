/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, IconButton, Avatar } from "theme-ui"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"


const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  const size = 32
  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <IconButton
        aria-label={`${siteTitle} - Back to home`}
        size="small"
      >
        <Avatar
         src="ai_me_looking_like_vitalik.jpeg"
        >

        </Avatar>
      </IconButton>
    </Link>

  )
}

export default HeaderTitle

