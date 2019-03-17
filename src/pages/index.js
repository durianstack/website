import React from 'react'
import { graphql } from 'gatsby'
import Wall from '../components/wall'
import Layout from '../components/layout'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  return <Layout>
    <div className="mx-auto container">
      <Wall edges={edges} />
    </div>
  </Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`