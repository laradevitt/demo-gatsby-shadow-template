import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const Section = ({ data }) => <Layout><pre>{JSON.stringify(data, null, 4)}</pre></Layout>

export const query = graphql`
  query SectionQuery($uid: String!) {
    prismic {
      section(uid: $uid, lang: "en-ca") {
        title
        _linkType
      }
    }
  }
`

export default Section
