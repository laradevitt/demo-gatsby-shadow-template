# demo-gatsby-shadow-template

Demo'ing two issues.


### Set up

1. Clone repo
2. `cd` into project
3. Run `yarn` to install packages
4. Run `yarn develop` to start the dev server.

Both issues concern shadowed components in *gatsby-starter-default/src/gatsby-theme-minimal-example/templates/*.

### Issue \#1

##### Page query is not run in shadow component when original component is imported.

In *article.js*, the component is **not** imported.  
In *section.js*, the component is imported.

Warnings during site build:

```cli
success extract queries from components - 0.726s
warn The GraphQL query in the non-page component "D:/lib/dev/temp/demo-gatsby-shadow-template/gatsby-theme-minimal-example/src/templates/article.js" will not be run.
warn The GraphQL query in the non-page component "D:/lib/dev/temp/demo-gatsby-shadow-template/gatsby-theme-minimal-example/src/templates/section.js" will not be run.
```

*/article/danish-fontina-cheesy-feet-red* - query data OK   
*/section/about* - no query data


### Issue \#2

##### GraphQL error: Multiple "root" queries found

Change the query name in the shadow component *article.js* so that it is the
same as the query name in the original component (see comments in file).

Resulting error:

```cli
 ERROR #85910  GRAPHQL                                                                            

Multiple "root" queries found in file: "ArticleQuery" and "ArticleQuery".                         
Only the first ("ArticleQuery") will be registered.                                               

Instead of:                                                                                       
1 | query ArticleQuery {                                                                          
2 |   bar {                                                                                       
3 |     #...                                                                                      
4 |   }                                                                                           
5 | }                                                                                             
6 |                                                                                               
7 | query ArticleQuery {                                                                          
8 |   foo {                                                                                       
9 |     #...                                                                                      
10 |   }                                                                                          
11 | }                                                                                            

Do:                                                                                               
1 | query articleQueryAndArticleQuery {                                                           
2 |   bar {                                                                                       
3 |     #...                                                                                      
4 |   }                                                                                           
5 |   foo {                                                                                       
6 |     #...                                                                                      
7 |   }                                                                                           
8 | }                                                                                             

File: ..\gatsby-theme-minimal-example\src\templates\article.js                                    

failed extract queries from components - 1.173s                                                   
```
