import React from "react"
import { graphql } from "gatsby"

import Layout from '../../components/layout';

const BlogPost = (props) =>
  <Layout>
    <pre>{JSON.stringify(props, null, 4)}</pre>
  </Layout>

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
