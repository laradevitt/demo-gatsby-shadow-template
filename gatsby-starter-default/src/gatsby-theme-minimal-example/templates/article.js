import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const Article = ({ data }) => <Layout><pre>{JSON.stringify(data, null, 4)}</pre></Layout>

// Changing the name of this query to 'ArticleQuery' will result in error:
// `Multiple "root" queries found in file: "ArticleQuery" and "ArticleQuery"`
export const query = graphql`
  query ArticleDupeQuery($uid: String!) {
    prismic {
      article(uid: $uid, lang: "en-ca") {
        title
        _linkType
      }
    }
  }
`

export default Article
