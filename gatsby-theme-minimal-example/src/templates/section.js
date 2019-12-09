import React from "react"
// import { graphql } from "gatsby"

const Section = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// export const query = graphql`
//   query SectionQuery($uid: String!) {
//     prismic {
//       section(uid: $uid, lang: "en-ca") {
//         title
//         _linkType
//       }
//     }
//   }
// `

export default Section
