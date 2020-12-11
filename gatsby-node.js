const path = require('path')

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const postTemplate = path.resolve('src/templates/project.js')

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      api
                      code
                      path
                      tech
                      title
                      website
                    }
                    html
                    id
                  }
                }
              }
        }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}