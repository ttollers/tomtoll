/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, IconButton, Avatar } from "theme-ui"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"


const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <IconButton
      aria-label={`${siteTitle} - Back to home`}
      size="small"
      sx={{ mr: 3 }}
    >
      <Link
        to={replaceSlashes(`/${basePath}`)}
        aria-label={`${siteTitle} - Back to home`}
        sx={{ color: `heading`, textDecoration: `none` }}
      >
        <Avatar src="/ai_me_looking_like_vitalik.jpeg"></Avatar>
      </Link>
    </IconButton>
  );
}

export default HeaderTitle

