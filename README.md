# demo-gatsby-shadow-template

- 2020-01-14: Updated packages; issues still exist.
- 2012-12-16: Updated demo as [requested by @LekoArts](https://github.com/gatsbyjs/gatsby/issues/19980#issuecomment-565987183).



### Set up

1. Clone repo
2. `cd` into project
3. Run `yarn` to install packages

### Issue \#1

##### Page query is not run in shadow component when original component is imported.

1. Set up (see above)
2. Run `yarn develop` to start the dev server.
3. Navigate to *LOCALHOST/blog/my-first-post*.

`props` contains `data` (expected).

Build warning points to correct component:

> warn The GraphQL query in the non-page component "D:/lib/dev/temp/demo-gatsby-shadow-template/gatsby-theme-minimal-example/src/templates/blogTemplate.js" will not be run.

6. Edit the shadow component at *gatsby-starter-default/src/gatsby-theme-minimal-example/templates/blogTemplate.js* so that the original component is being
imported instead:

```js
import React from 'react';
import BlogPost from 'gatsby-theme-minimal-example/src/templates/blogTemplate';
import Layout from '../../components/layout';

export default props => (
  <Layout>
    <BlogPost {...props} />
  </Layout>
)
```

7. Navigate to *LOCALHOST/blog/my-first-post*.

`data` is missing from `props`.

Build warning still points to original component.

### Issue \#2

##### GraphQL error: Multiple "root" queries found

It's possible this is by design?

1. Set up (see above)
2. In both the original and shadow component, name the query 'BlogQuery':

```js
export const query = graphql`
  query BlogQuery($path: String!) {
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
```

3. Run `yarn develop`

Build error is as follows:

```
 ERROR #85910  GRAPHQL                                                                

Multiple "root" queries found in file: "BlogQuery" and "BlogQuery".                   
Only the first ("BlogQuery") will be registered.                                      

Instead of:                                                                           
1 | query BlogQuery {                                                                 
2 |   bar {                                                                           
3 |     #...                                                                          
4 |   }                                                                               
5 | }                                                                                 
6 |                                                                                   
7 | query BlogQuery {                                                                 
8 |   foo {                                                                           
9 |     #...                                                                          
10 |   }                                                                              
11 | }                                                                                

Do:                                                                                   
1 | query blogQueryAndBlogQuery {                                                     
2 |   bar {                                                                           
3 |     #...                                                                          
4 |   }                                                                               
5 |   foo {                                                                           
6 |     #...                                                                          
7 |   }                                                                               
8 | }                                                                                 

File: ..\gatsby-theme-minimal-example\src\templates\blogTemplate.js                   
```
