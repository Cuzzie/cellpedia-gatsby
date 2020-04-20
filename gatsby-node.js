/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { isEng, convertSlugToPath } = require("./src/utils/utils")
const { createFilePath } = require("gatsby-source-filesystem")

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              lang
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(edge => {
    const lang = edge.node.frontmatter.lang
    const slug = edge.node.fields.slug
    let path = convertSlugToPath(slug, lang)
    // if (isEng(lang)) {
    //   path = `/en${slug.replace("-en", "")}`
    // }
    createPage({
      path,
      component: require.resolve("./src/templates/Post.js"),
      context: {
        slug
      }
    })
  })
}