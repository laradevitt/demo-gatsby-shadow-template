import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query PageQuery($uid: String!) {
    prismic {
      page(uid: $uid, lang: "en-ca") {
        title
        _linkType
      }
    }
  }
`

export default Page
