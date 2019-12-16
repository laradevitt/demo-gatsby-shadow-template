import React from "react"
import { graphql } from "gatsby"

const BlogPost = (props) => <pre>{JSON.stringify(props, null, 4)}</pre>

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default BlogPost
