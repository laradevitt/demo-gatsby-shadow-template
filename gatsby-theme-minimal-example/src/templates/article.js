import React from "react"
import { graphql } from "gatsby"

const Article = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query ArticleQuery($uid: String!) {
    prismic {
      article(uid: $uid, lang: "en-ca") {
        title
        _linkType
      }
    }
  }
`

export default Article
